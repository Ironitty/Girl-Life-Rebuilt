import type { QspLocation, QspNode, QspScene, QspIf, QspWhile, QspAct, QspText, QspImage, QspAssign, QspGoto, QspGsCall, QspTime, QspSetup, QspExit, QspJump, QspLabel, QspUnknown } from './ast';

export interface GenResult {
  code: string;
  todoCount: number;
  unsupportedConstructs: string[];
  actionCount: number;
  targetCount: number;
  stateWrites: string[];
  stateReads: string[];
  gsCalls: string[];
  dynamicText: number;
  fallbackCount: number;
}

const metrics = { dynamicText: 0, fallbackCount: 0 };
let currentLocName = 'unknown';

function findJumpsInBody(nodes: QspNode[], labelName: string): boolean {
  for (const node of nodes) {
    if (node.kind === 'jump' && node.label === labelName) return true;
    if (node.kind === 'if') {
      if (findJumpsInBody(node.thenBody, labelName) || findJumpsInBody(node.elseBody, labelName)) return true;
    } else if (node.kind === 'scene') {
      if (findJumpsInBody(node.body, labelName)) return true;
    } else if (node.kind === 'act') {
      if (findJumpsInBody(node.body, labelName)) return true;
    } else if (node.kind === 'while' || node.kind === 'dowhile') {
      if (findJumpsInBody(node.body, labelName)) return true;
    }
  }
  return false;
}

function replaceJumpsWithContinue(nodes: QspNode[], labelName: string): QspNode[] {
  const result: QspNode[] = [];
  for (const node of nodes) {
    if (node.kind === 'jump' && node.label === labelName) {
      result.push({ kind: 'continue' });
    } else if (node.kind === 'if') {
      result.push({ ...node, thenBody: replaceJumpsWithContinue(node.thenBody, labelName), elseBody: replaceJumpsWithContinue(node.elseBody, labelName) });
    } else if (node.kind === 'scene') {
      result.push({ ...node, body: replaceJumpsWithContinue(node.body, labelName) });
    } else if (node.kind === 'act') {
      result.push({ ...node, body: replaceJumpsWithContinue(node.body, labelName) });
    } else if (node.kind === 'while' || node.kind === 'dowhile') {
      result.push({ ...node, body: replaceJumpsWithContinue(node.body, labelName) });
    } else {
      result.push(node);
    }
  }
  return result;
}

function replaceJumpsWithBreak(nodes: QspNode[], labelName: string): QspNode[] {
  const result: QspNode[] = [];
  for (const node of nodes) {
    if (node.kind === 'jump' && node.label === labelName) {
      result.push({ kind: 'break' });
    } else if (node.kind === 'if') {
      result.push({ ...node, thenBody: replaceJumpsWithBreak(node.thenBody, labelName), elseBody: replaceJumpsWithBreak(node.elseBody, labelName) });
    } else if (node.kind === 'scene') {
      result.push({ ...node, body: replaceJumpsWithBreak(node.body, labelName) });
    } else if (node.kind === 'act') {
      result.push({ ...node, body: replaceJumpsWithBreak(node.body, labelName) });
    } else if (node.kind === 'while' || node.kind === 'dowhile') {
      result.push({ ...node, body: replaceJumpsWithBreak(node.body, labelName) });
    } else {
      result.push(node);
    }
  }
  return result;
}

function replaceJumpsWithAssign(nodes: QspNode[], labelName: string, flagName: string): QspNode[] {
  const result: QspNode[] = [];
  for (const node of nodes) {
    if (node.kind === 'jump' && node.label === labelName) {
      result.push({ kind: 'assign', var: flagName, op: '=', value: 'true' });
    } else if (node.kind === 'if') {
      result.push({ ...node, thenBody: replaceJumpsWithAssign(node.thenBody, labelName, flagName), elseBody: replaceJumpsWithAssign(node.elseBody, labelName, flagName) });
    } else if (node.kind === 'scene') {
      result.push({ ...node, body: replaceJumpsWithAssign(node.body, labelName, flagName) });
    } else if (node.kind === 'act') {
      result.push({ ...node, body: replaceJumpsWithAssign(node.body, labelName, flagName) });
    } else if (node.kind === 'while' || node.kind === 'dowhile') {
      result.push({ ...node, body: replaceJumpsWithAssign(node.body, labelName, flagName) });
    } else {
      result.push(node);
    }
  }
  return result;
}

// Detects cross-branch goto: an if whose thenBody has jumps to label L,
// and whose elseBody is a single if whose thenBody starts with label L.
function detectCrossBranchGoto(node: QspIf): { labelName: string; innerIf: QspIf } | null {
  if (node.elseBody.length !== 1 || node.elseBody[0].kind !== 'if') return null;
  const innerIf = node.elseBody[0] as QspIf;
  if (innerIf.thenBody.length === 0 || innerIf.thenBody[0].kind !== 'label') return null;
  const labelName = (innerIf.thenBody[0] as QspLabel).name;
  if (!findJumpsInBody(node.thenBody, labelName)) return null;
  return { labelName, innerIf };
}

function findNextLabelAfter(nodes: QspNode[], startIdx: number, endIdx: number): string | null {
  for (let i = startIdx; i < endIdx && i < nodes.length; i++) {
    if (nodes[i].kind === 'label') return (nodes[i] as QspLabel).name;
  }
  return null;
}

function findGotoEndLabels(nodes: QspNode[]): Set<string> {
  const labels = new Set<string>();
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].kind === 'label') {
      const labelName = (nodes[i] as QspLabel).name;
      // Check if any preceding node has a jump to this label
      for (let k = 0; k < i; k++) {
        if (findJumpsInBody([nodes[k]], labelName)) {
          labels.add(labelName);
          break;
        }
      }
    }
  }
  return labels;
}

function transformLoops(nodes: QspNode[]): QspNode[] {
  const result: QspNode[] = [];
  const gotoEndLabels = findGotoEndLabels(nodes);
  let i = 0;
  while (i < nodes.length) {
    const node = nodes[i];
    if (node.kind === 'label') {
      const labelName = node.name;
      // Goto-end pattern: label has preceding jumps
      if (gotoEndLabels.has(labelName)) {
        // Wrap all preceding nodes in while(true) + break
        const precedingBody: QspNode[] = [];
        for (let k = 0; k < i; k++) {
          precedingBody.push(nodes[k]);
        }
        const transformedPreceding = transformLoops(precedingBody);
        const breakBody = replaceJumpsWithBreak(transformedPreceding, labelName);
        // Add fall-through break so the body runs exactly once (replicates fall-through to label)
        breakBody.push({ kind: 'break' });
        // Clear result (preceding nodes were already pushed) and replace with loop
        result.length = 0;
        result.push({ kind: 'while', condition: 'true', body: breakBody });
        result.push(node);
        i++;
        continue;
      }
      const body: QspNode[] = [];
      let j = i + 1;
      let foundJump = false;
      const jumpConditions: string[] = [];
      let jumpsAtTop = true;
      while (j < nodes.length) {
        const n = nodes[j];
        // Stop if we encounter another label that has jumps to it in the body
        // (unless the original loop label is also jumped to after this label — skip-to-end pattern)
        if (n.kind === 'label' && findJumpsInBody(body, n.name)) {
          let hasOriginalJumpAfter = false;
          for (let k = j + 1; k < nodes.length; k++) {
            if (findJumpsInBody([nodes[k]], labelName)) { hasOriginalJumpAfter = true; break; }
          }
          if (!hasOriginalJumpAfter) break;
        }
        if (n.kind === 'if') {
          // Case 1: if cond: jump 'label'
          if (n.thenBody.length === 1 && n.thenBody[0].kind === 'jump' && n.thenBody[0].label === labelName && n.elseBody.length === 0) {
            if (body.length > 0) jumpsAtTop = false;
            jumpConditions.push(n.condition);
            foundJump = true;
            j++;
            continue;
          }
          // Case 2: if cond: ... else: jump 'label'
          if (n.elseBody.length === 1 && n.elseBody[0].kind === 'jump' && n.elseBody[0].label === labelName) {
            if (body.length > 0) jumpsAtTop = false;
            jumpConditions.push(`!(${n.condition})`);
            foundJump = true;
            j++;
            continue;
          }
          // Not a jump to this label — push to body and continue
          body.push(n);
          j++;
          continue;
        }
        body.push(n);
        j++;
      }
      if (foundJump) {
        const transformedBody = transformLoops(body);
        const combinedCond = jumpConditions.join(' || ');
        // Check if there's a next label after the loop body — jumps to it should become break
        const nextLabel = findNextLabelAfter(nodes, j, nodes.length);
        let finalBody = transformedBody;
        if (nextLabel && findJumpsInBody(transformedBody, nextLabel)) {
          finalBody = replaceJumpsWithBreak(transformedBody, nextLabel);
        }
        if (jumpsAtTop) {
          result.push({ kind: 'while', condition: combinedCond, body: finalBody });
        } else {
          result.push({ kind: 'dowhile', condition: combinedCond, body: finalBody });
        }
        i = j;
      } else if (findJumpsInBody(body, labelName)) {
        // Jumps exist but are nested inside if/else blocks — use while(true) + break
        // (jumps target the label which is after the body, so break exits the loop)
        const transformedBody = transformLoops(body);
        const continuedBody = replaceJumpsWithBreak(transformedBody, labelName);
        result.push({ kind: 'while', condition: 'true', body: continuedBody });
        i = j;
      } else {
        result.push(node);
        i++;
      }
    } else {
      if (node.kind === 'if') {
        const crossBranch = detectCrossBranchGoto(node);
        if (crossBranch) {
          const flagName = '__jumped_' + crossBranch.labelName;
          const innerIf = crossBranch.innerIf;
          // Prepend flag init
          result.push({ kind: 'assign', var: flagName, op: '=', value: 'false' });
          // Convert jumps to label in thenBody to flag set
          const outerThenBody = replaceJumpsWithAssign(node.thenBody, crossBranch.labelName, flagName);
          // Inner if: condition becomes innerCond or flag, thenBody without the label
          const newInnerIf: QspIf = {
            kind: 'if',
            condition: innerIf.condition + ' or ' + flagName,
            thenBody: innerIf.thenBody.slice(1),
            elseBody: innerIf.elseBody,
          };
          const newOuterIf: QspIf = {
            kind: 'if',
            condition: node.condition,
            thenBody: transformLoops(outerThenBody),
            elseBody: [transformLoops([newInnerIf])[0]],
          };
          result.push(newOuterIf);
        } else {
          result.push({ ...node, thenBody: transformLoops(node.thenBody), elseBody: transformLoops(node.elseBody) });
        }
      } else if (node.kind === 'scene') {
        result.push({ ...node, body: transformLoops(node.body) });
      } else if (node.kind === 'act') {
        result.push({ ...node, body: transformLoops(node.body) });
      } else if (node.kind === 'while') {
        result.push({ ...node, body: transformLoops(node.body) });
      } else if (node.kind === 'dowhile') {
        result.push({ ...node, body: transformLoops(node.body) });
      } else {
        result.push(node);
      }
      i++;
    }
  }
  return result;
}

export function generateTs(loc: QspLocation): GenResult {
  const todos: string[] = [];
  const unsupported: string[] = [];
  const stateWrites: string[] = [];
  const stateReads: string[] = [];
  const gsCalls: string[] = [];
  let actionCount = 0;
  const targets = new Set<string>();
  metrics.dynamicText = 0;
  metrics.fallbackCount = 0;
  currentLocName = loc.name;

  const lines: string[] = [];
  lines.push(`// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)`);
  lines.push(`import type { GameState, ActionDef, LocationDef } from '../../core/types';`);
  lines.push(`import type { SceneBuilder } from '../../core/scene';`);
  lines.push('');

  let sceneList: { kind: 'scene'; arg: string; body: import('./ast').QspNode[] }[];
  if (loc.scenes.length > 0) {
    const defaultIdx = loc.scenes.findIndex(s => s.arg === '');
    if (defaultIdx >= 0) {
      sceneList = loc.scenes;
    } else {
      sceneList = [{ kind: 'scene' as const, arg: '', body: [] }, ...loc.scenes];
    }
  } else {
    sceneList = [{ kind: 'scene' as const, arg: '', body: loc.topLevel }];
  }

  const transformedScenes = sceneList.map(s => ({ ...s, body: transformLoops(s.body) }));
  const transformedTopLevel = transformLoops(loc.topLevel);

  if (sceneList.length === 1) {
    const scene = transformedScenes[0];
    const body = generateSceneBody(scene.body, todos, unsupported, stateWrites, stateReads, gsCalls, targets, loc.name, {});
    lines.push(`function enter(s: GameState, scene: SceneBuilder): void {`);
    for (const bl of body) lines.push(`  ${bl}`);
    lines.push(`  scene.build();`);
    lines.push(`}`);
  } else {
    const usedNames = new Set<string>();
    const nameMap = new Map<number, string>();
    const argToFunc: Record<string, string> = {};
    for (let si = 0; si < sceneList.length; si++) {
      const scene = sceneList[si];
      const base = scene.arg === '' ? 'enterDefault' : `enter${toPascalCase(scene.arg)}`;
      let fn = base;
      let n = 2;
      while (usedNames.has(fn)) { fn = `${base}${n}`; n++; }
      usedNames.add(fn);
      nameMap.set(si, fn);
      argToFunc[scene.arg] = fn;
    }
    const topLevelBody = transformedTopLevel.length > 0
      ? generateSceneBody(transformedTopLevel, todos, unsupported, stateWrites, stateReads, gsCalls, targets, loc.name, argToFunc)
      : [];
    for (let si = 0; si < sceneList.length; si++) {
      const scene = transformedScenes[si];
      const funcName = nameMap.get(si)!;
      const body = generateSceneBody(scene.body, todos, unsupported, stateWrites, stateReads, gsCalls, targets, loc.name, argToFunc);
      lines.push(`function ${funcName}(s: GameState, scene: SceneBuilder): void {`);
      for (const bl of body) lines.push(`  ${bl}`);
      lines.push(`  scene.build();`);
      lines.push(`}`);
      lines.push('');
    }

    lines.push(`function enter(s: GameState, scene: SceneBuilder): void {`);
    for (const bl of topLevelBody) lines.push(`  ${bl}`);
    lines.push(`  const arg = s.locArg;`);
    lines.push(`  switch (arg) {`);
    for (let si = 0; si < sceneList.length; si++) {
      const scene = sceneList[si];
      if (scene.arg === '') continue;
      const funcName = nameMap.get(si)!;
      lines.push(`    case '${scene.arg}':`);
      lines.push(`      ${funcName}(s, scene);`);
      lines.push(`      break;`);
    }
    lines.push(`    default:`);
    const defaultIdx = sceneList.findIndex(s => s.arg === '');
    const defaultFunc = nameMap.get(defaultIdx >= 0 ? defaultIdx : 0)!;
    lines.push(`      ${defaultFunc}(s, scene);`);
    lines.push(`      break;`);
    lines.push(`  }`);
    lines.push(`}`);
  }

  lines.push('');
  lines.push(`export const ${loc.name}: LocationDef = {`);
  lines.push(`  name: '${loc.name}',`);
  if (loc.title) {
    let cleanTitle = convertExecLinks(loc.title);
    while (cleanTitle.includes('<<') && cleanTitle.includes('>>')) {
      const idx = cleanTitle.indexOf('<<');
      const closeIdx = cleanTitle.indexOf('>>', idx + 2);
      if (closeIdx === -1) break;
      cleanTitle = cleanTitle.slice(0, idx) + cleanTitle.slice(closeIdx + 2);
    }
    cleanTitle = cleanTitle.trim();
    if (cleanTitle.length > 60) cleanTitle = cleanTitle.slice(0, 60);
    if (cleanTitle) lines.push(`  title: '${esc(cleanTitle)}',`);
  }
  lines.push(`  region: '${getRegion(loc.name)}',`);
  if (loc.locationType) lines.push(`  locationType: '${loc.locationType}',`);
  if (loc.locclass) lines.push(`  locclass: '${loc.locclass}',`);
  const desc = extractDescription(sceneList[0]?.body || loc.topLevel);
  if (desc) lines.push(`  description: [${desc}],`);
  lines.push(`  enter: enter,`);
  lines.push(`};`);

  for (const t of todos) {
    if (t) unsupported.push(t);
  }

  const body = lines.join('\n');
  const bridgeNames: string[] = [];
  if (body.includes('qspCall(')) bridgeNames.push('qspCall');
  if (body.includes('qspFunc(')) bridgeNames.push('qspFunc');
  if (body.includes('dynamicGoto(')) bridgeNames.push('dynamicGoto');
  if (body.includes('qspGoto(')) bridgeNames.push('qspGoto');
  if (body.includes('qspSave(')) bridgeNames.push('qspSave');
  if (body.includes('hasLocation(')) bridgeNames.push('hasLocation');
  if (bridgeNames.length > 0) {
    lines.unshift(`import { ${bridgeNames.join(', ')} } from '../_shared/qspBridge';`, '');
  }
  if (body.includes('qspUntranslated(')) {
    lines.unshift(`import { qspUntranslated } from '../_shared/qspUntranslated';`, '');
  }

  return {
    code: lines.join('\n'),
    todoCount: unsupported.length,
    unsupportedConstructs: unsupported,
    actionCount,
    targetCount: targets.size,
    stateWrites,
    stateReads,
    gsCalls,
    dynamicText: metrics.dynamicText,
    fallbackCount: metrics.fallbackCount,
  };
}

function generateSceneBody(
  nodes: QspNode[],
  todos: string[],
  unsupported: string[],
  stateWrites: string[],
  stateReads: string[],
  gsCalls: string[],
  targets: Set<string>,
  locName: string,
  argToFunc: Record<string, string>,
): string[] {
  const out: string[] = [];
  const actions: string[] = [];

  for (const node of nodes) {
    switch (node.kind) {
      case 'image': {
        out.push(`scene.img(${qspStringToJs(node.src, stateReads, todos)});`);
        break;
      }
      case 'title': {
        out.push(`scene.text(${qspStringToJs(`<center><b>${node.text}</b></center>`, stateReads, todos)});`);
        break;
      }
      case 'text': {
        if (node.dynamic) {
          const todoLen = todos.length;
          const translated = qspStringToJs(node.content, stateReads, todos);
          if (todos.length > todoLen) {
            out.push(`// TODO-QSP: dynamic text: ${truncate(node.content, 80)}`);
          }
          out.push(`scene.text(${translated});`);
        } else {
          out.push(`scene.text(${qspStringToJs(node.content, stateReads, todos)});`);
        }
        break;
      }
      case 'time': {
        out.push(`(s as any).minut = ((s as any).minut ?? 0) + ${node.delta};`);
        break;
      }
      case 'assign': {
        if (node.var === 'menu_off' || node.var === 'loc' || node.var === 'loc2') break;

        const varName = node.var.replace(/^\$/, '');
        const lhs = translateAssignLhs(varName, stateReads);
          const val = translateValue(node.value, stateReads, todos);
          if (val.includes('<<') || val.includes('>>')) {
            out.push(`// TODO-QSP: ${node.var} ${node.op} ${node.value}`);
            break;
          }
          if (lhs === 'backimage' && node.op === '=') {
           out.push(`scene.img(${val});`);
           stateWrites.push(varName);
           break;
         }
          if (lhs === "setloc['StageImage']" && node.op === '=') {
            const imgVal = val.startsWith("'") && !val.startsWith("'images/") ? `'images/' + ${val}` : val;
            out.push(`scene.img(${imgVal});`);
            stateWrites.push(varName);
            break;
          }
          if (lhs === "setloc['imagepath']" && node.op === '=') {
            out.push(`((s as any).setloc = (s as any).setloc ?? {})['imagepath'] = 'images/' + ${val};`);
            stateWrites.push(varName);
            break;
          }
        if (lhs.endsWith('[]')) {
          const arrName = lhs.slice(0, -2).replace(/^\$/, '');
          out.push(`(s as any).${arrName} = [...((s as any).${arrName} ?? []), ${val}];`);
          stateWrites.push(varName);
          break;
        }
        const bracketIdx = lhs.indexOf('[');
        if (bracketIdx !== -1) {
          const objName = lhs.slice(0, bracketIdx);
          const rest = lhs.slice(bracketIdx);
          const guarded = `((s as any).${objName} = (s as any).${objName} ?? {})${rest}`;
          if (node.op === '=') {
            out.push(`${guarded} = ${val};`);
          } else if (node.op === '+=') {
            out.push(`${guarded} = ((s as any).${objName}${rest} ?? 0) + (${val});`);
          } else if (node.op === '*=') {
            out.push(`${guarded} = ((s as any).${objName}${rest} ?? 0) * (${val});`);
          } else if (node.op === '/=') {
            out.push(`${guarded} = ((s as any).${objName}${rest} ?? 0) / (${val});`);
          } else {
            out.push(`${guarded} = ((s as any).${objName}${rest} ?? 0) - (${val});`);
          }
        } else if (node.op === '=') {
          out.push(`(s as any).${lhs} = ${val};`);
        } else if (node.op === '+=') {
          out.push(`(s as any).${lhs} = ((s as any).${lhs} ?? 0) + (${val});`);
        } else if (node.op === '*=') {
          out.push(`(s as any).${lhs} = ((s as any).${lhs} ?? 0) * (${val});`);
        } else if (node.op === '/=') {
          out.push(`(s as any).${lhs} = ((s as any).${lhs} ?? 0) / (${val});`);
        } else {
          out.push(`(s as any).${lhs} = ((s as any).${lhs} ?? 0) - (${val});`);
        }
        stateWrites.push(varName);
        break;
      }
      case 'goto': {
        const isVarRef = (v: string) => v !== '' && !/^\d+$/.test(v) && /^[a-zA-Z_$]\w*$/.test(v);
        const isDictAccess = (v: string) => !!v && /^\$\w+\['[^']*'\]$/.test(v);
        const isArgsAccess = (v: string) => !!v && /^\$ARGS\[\d+\]$/.test(v);
        const isIifExpr = (v: string) => /^\s*\$?iif\(/.test(v);
        const translateArg = (v: string, quoted: boolean): string => {
          if (isDictAccess(v)) {
            const m = v.replace(/^\$/, '').match(/^(\w+)\['([^']+)'\]$/);
            if (m) return `(((s as any).${m[1]} ?? {})['${m[2]}'])`;
          }
          if (isArgsAccess(v)) {
            const idx = v.match(/^\$ARGS\[(\d+)\]$/)![1];
            return `String((s as any).locArgs?.[${idx}] ?? '')`;
          }
          if (isIifExpr(v)) return translateValue(v.trim(), stateReads, todos, 's');
          if (/\w+\s*\(/.test(v) && v.includes(')')) return translateValue(v, stateReads, todos, 's');
          if (v.startsWith('$') && !isVarRef(v)) return translateValue(v, stateReads, todos, 's');
          if (quoted || !isVarRef(v)) return translateValue(`'${v}'`, stateReads, todos);
          return `((s as any).${v.replace(/^\$/, '')} ?? '')`;
        };
        if (node.target.startsWith('$')) {
          let t = node.target.replace(/^\$/, '');
          const argsMatch = t.match(/^ARGS\[(\d+)\]$/);
          if (argsMatch) {
            const idx = argsMatch[1];
            const argVal = node.arg ? translateArg(node.arg, !!node.argQuoted) : "''";
            const arg2Val = node.arg2 ? translateArg(node.arg2, !!node.arg2Quoted) : null;
            const arg3Val = node.arg3 ? translateArg(node.arg3, !!node.arg3Quoted) : null;
            const arg2Part = arg2Val ? `, ${arg2Val}` : '';
            const arg3Part = arg3Val ? `, ${arg3Val}` : '';
            out.push(`{ const __t = String((s as any).locArgs?.[${idx}] ?? ''); if (__t) qspGoto(s, __t, ${argVal}${arg2Part}${arg3Part}); }`);
            break;
          }
          const dictMatch = t.match(/^(\w+)\['([^']+)'\]$/);
          const argDictMatch = node.arg ? node.arg.replace(/^\$/, '').match(/^(\w+)\['([^']+)'\]$/) : null;
          if (dictMatch) {
            const transpileDictKey = (key: string, varName: string): string => {
              if (!key.includes('<<')) return `['${key}']`;
              const parts: string[] = [];
              const re = /<<(.+?)>>/g;
              let last = 0, m: RegExpExecArray | null;
              while ((m = re.exec(key)) !== null) {
                if (m.index > last) parts.push(`'${esc(key.slice(last, m.index))}'`);
                const expr = m[1];
                if (expr.startsWith('$')) parts.push(`String(((s as any).${expr.slice(1)} ?? ''))`);
                else parts.push(`String(${translateValue(expr, stateReads, todos, 's')})`);
                last = m.index + m[0].length;
              }
              if (last < key.length) parts.push(`'${esc(key.slice(last))}'`);
              const keyExpr = parts.length === 1 ? parts[0] : parts.join(' + ');
              return `[${keyExpr}]`;
            };
            const tgtExpr = `(((s as any).${dictMatch[1]} ?? {}))${transpileDictKey(dictMatch[2], dictMatch[1])}`;
            const argExpr = argDictMatch
              ? `(((s as any).${argDictMatch[1]} ?? {}))${transpileDictKey(argDictMatch[2], argDictMatch[1])}`
              : (node.arg.startsWith('$') ? `'${node.arg.replace(/^\$/, '')}'` : `'${node.arg}'`);
            out.push(`dynamicGoto(s, ${tgtExpr}, ${argExpr});`);
          } else {
            if (t === 'loc') t = 'prevLoc';
            let argPart = '';
            if (node.arg.startsWith('$')) {
              let av = node.arg.replace(/^\$/, '');
              if (av === 'loc_arg') av = 'prevArg';
              argPart = `, '${av}'`;
            }
            out.push(`dynamicGoto(s, '${t}'${argPart});`);
          }
        } else {
          const tgtInner = node.target.startsWith("'") && node.target.endsWith("'") ? node.target.slice(1, -1).replace(/''/g, "'") : node.target;
          if (tgtInner.includes('<<')) {
            const parts: string[] = [];
            const re = /<<(.+?)>>/g;
            let last = 0, m: RegExpExecArray | null;
            while ((m = re.exec(tgtInner)) !== null) {
              if (m.index > last) parts.push(`'${esc(tgtInner.slice(last, m.index))}'`);
              const expr = m[1];
              const dictM = expr.replace(/^\$/, '').match(/^(\w+)\['([^']+)'\]$/);
              if (dictM) parts.push(`String((((s as any).${dictM[1]} ?? {})['${dictM[2]}']))`);
              else if (expr.startsWith('$')) parts.push(`String(((s as any).${expr.slice(1)} ?? ''))`);
              else parts.push(`String(${translateValue(expr, stateReads, todos, 's')})`);
              last = m.index + m[0].length;
            }
            if (last < tgtInner.length) parts.push(`'${esc(tgtInner.slice(last))}'`);
            const tgtExpr = parts.length === 1 ? parts[0] : parts.join(' + ');
            const argVal = node.arg ? translateValue(`'${node.arg}'`, stateReads, todos) : "''";
            out.push(`dynamicGoto(s, ${tgtExpr}, ${argVal});`);
          } else {
            targets.add(node.target);
            const argVal = translateArg(node.arg, !!node.argQuoted);
            const arg2Val = node.arg2 ? translateArg(node.arg2, !!node.arg2Quoted) : null;
            const arg3Val = node.arg3 ? translateArg(node.arg3, !!node.arg3Quoted) : null;
            const arg2Part = arg2Val ? `, ${arg2Val}` : '';
            const arg3Part = arg3Val ? `, ${arg3Val}` : '';
            out.push(`qspGoto(s, '${node.target}', ${argVal}${arg2Part}${arg3Part});`);
          }
        }
        break;
      }
      case 'gs': {
        gsCalls.push(`${node.module}.${node.func}`);
        const gargs = node.args.map(a => translateValue(a, stateReads, todos));
        const funcName = node.func.includes('<<') ? translateValue(`'${node.func}'`, stateReads, todos) : `'${esc(node.func)}'`;
        const moduleName = node.module.includes('<<') ? translateValue(`'${node.module}'`, stateReads, todos) : `'${esc(node.module)}'`;
        const selfFn = node.module === locName && !node.func.includes('<<') && !node.module.includes('<<') ? argToFunc[node.func] : undefined;
        if (selfFn) {
          out.push(`{ const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ${gargs.join(', ')}]; ${selfFn}(s, scene); (s as any).locArgs = __savedLocArgs; }`);
        } else {
          out.push(`qspCall(s, ${moduleName}, ${funcName}${gargs.length ? ', ' + gargs.join(', ') : ''});`);
        }
        break;
      }
      case 'setup': {
        if (node.raw.includes('minut')) {
          const m = node.raw.match(/minut\s*\+=?\s*(\d+)/);
          if (m) out.push(`(s as any).minut = ((s as any).minut ?? 0) + ${m[1]};`);
        }
        const backimgMatch = node.raw.match(/^\$backimage\s*=\s*'(.*)'$/);
        if (backimgMatch) {
          const bsrc = backimgMatch[1];
          if (bsrc.includes('<<') || bsrc.match(/'\s*\+\s*\w+/)) {
            const dynVal = translateValue(`'${bsrc}'`, stateReads, todos);
            out.push(`scene.img(${dynVal});`);
          } else {
            out.push(`scene.img('${bsrc}');`);
          }
          break;
        }
        const plImgMatch = node.raw.match(/^\*pl\s+'<center><img\s+<<\$set_imgh>>\s+src="([^"]+)"><\/center>'$/);
        if (plImgMatch) {
          const src = plImgMatch[1];
          if (src.includes('<<') || src.match(/'\s*\+\s*\w+/)) {
            const dynVal = translateValue(`'${src}'`, stateReads, todos);
            out.push(`scene.img(${dynVal});`);
          } else {
            out.push(`scene.img('${src}');`);
          }
          break;
        }
        const bareFlag = node.raw.match(/^\$(\w+)$/);
        if (bareFlag) {
          out.push(`s.scene = { ...s.scene, mainText: String((s as any).${bareFlag[1]} || ''), curActs: [] };`);
          stateReads.push(bareFlag[1]);
        }
        const dollarArrCall = node.raw.match(/^\$(\w+)\['([^']+)'\]\s*$/);
        if (dollarArrCall) {
          out.push(`scene.text(String(qspFunc(s, '${dollarArrCall[1]}', '${dollarArrCall[2]}') || ''));`);
        }
        const dollarArrVarCall = node.raw.match(/^\$(\w+)\[(\$?\w+(?:\[\d+\])?)\]\s*$/);
        if (dollarArrVarCall) {
          const varName = dollarArrVarCall[1];
          const key = dollarArrVarCall[2].replace(/^\$/, '');
          const keyExpr = key.includes('[')
            ? `String(((s as any).${key.replace(/\[\d+\]/, '')} ?? 0)${key.replace(/^\w+/, '').replace(/\]/, '')})`
            : /^\d+$/.test(key)
              ? key
              : `String((s as any).${key} ?? '')`;
          out.push(`scene.text(String(((s as any).${varName} ?? {})[${keyExpr}] || ''));`);
        }
          const dynAct = node.raw.match(/^dynamic\s+'act\s+''((?:[^']|'')*)''\s*:\s*gt\s+''((?:[^']|'')*)''\s*,\s*''((?:[^']|'')*)''(?:\s*,\s*(.+?))?'$/);
          if (dynAct) {
            const rawLabel = dynAct[1].replace(/''/g, "'");
            const loc = dynAct[2].replace(/''/g, "'");
            const scene = dynAct[3].replace(/''/g, "'");
            const extraArgsRaw = dynAct[4]?.replace(/''/g, "'").trim();
            const isDynamicLabel = rawLabel.includes('<<');
            const labelCode = generateLabelCode(rawLabel, stateReads, todos, isDynamicLabel);
            let handlerArgs = '';
            if (extraArgsRaw) {
              const args = splitTopLevel(extraArgsRaw).map((a: string) => a.trim());
              const translatedArgs = args.map((a: string) => {
                if (a.startsWith('$') || a.startsWith('<<')) {
                  return translateValue(a, stateReads, todos, 'st');
                }
                return translateValue(`'${a}'`, stateReads, todos, 'st');
              });
              handlerArgs = `, ${translatedArgs.join(', ')}`;
            }
            actions.push(`{ ${labelCode}, handler: (st: GameState) => { qspGoto(st, '${loc}', '${scene}'${handlerArgs}); } },`);
          }
          const dynSingle = node.raw.match(/^dynamic\s+'((?:[^']|'')*)'\s*$/);
         if (dynSingle) {
           const expr = dynSingle[1].replace(/''/g, "'");
           const arrAssignMatch = expr.match(/^(\w+)\['(.+)'\]\s*=\s*(.+)$/);
           if (arrAssignMatch) {
             const varName = arrAssignMatch[1];
             const key = translateValue(`'${arrAssignMatch[2]}'`, stateReads, todos);
             const val = translateValue(arrAssignMatch[3].trim(), stateReads, todos);
              out.push(`(s as any)['${varName}'][${key}] = ${val};`);
           } else {
             const dynVal = translateValue(`'${dynSingle[1]}'`, stateReads, todos);
             out.push(`scene.text(${dynVal});`);
           }
         }
          const dynConcat = node.raw.match(/^dynamic\s+('(?:[^']|'')*'\s*\+\s*)+.+$/);
          if (dynConcat && !dynSingle) {
            const fullExpr = node.raw.replace(/^dynamic\s+/, '');
            const parts = fullExpr.split(/\s*\+\s*/);
            let firstPart = parts[0].trim();
            if (firstPart.startsWith("'") && firstPart.endsWith("'")) {
              const innerExpr = firstPart.slice(1, -1).replace(/''/g, "'");
              const arrAssignMatch = innerExpr.match(/^(\w+)\['(.+)'\]\s*=\s*$/);
              if (arrAssignMatch) {
                const varName = arrAssignMatch[1];
                const key = translateValue(`'${arrAssignMatch[2]}'`, stateReads, todos);
                const rest = parts.slice(1).join('+');
                const val = translateValue(rest.trim(), stateReads, todos);
                out.push(`((s as any).${varName} = (s as any).${varName} ?? {})['${arrAssignMatch[2]}'] = ${val};`);
              }
            }
          }
        const dynParenNested = node.raw.match(/^dynamic\(\s*\$(\w+)\[\$(\w+)\]\s*\)$/);
        if (dynParenNested) {
          const varName = dynParenNested[1];
          const keyVar = dynParenNested[2];
          out.push(`dynamicGoto(s, String(((s as any).${varName} ?? {})[String((s as any).${keyVar} ?? '')] || ''));`);
          break;
        }
        const dynBareVar = node.raw.match(/^dynamic\s+\$(\w+)\s*$/);
        if (dynBareVar) {
          const varName = dynBareVar[1];
          out.push(`dynamicGoto(s, String((s as any).${varName} || ''));`);
          break;
        }
        const dynDollar = node.raw.match(/^dynamic\s+(\$\w+(?:\['[^']*'\]|\[\$\w+\]|\[\d+\])?(?:\s*,\s*.+)?)\s*$/);
        if (dynDollar) {
          const expr = dynDollar[1].trim();
          const parts = splitTopLevel(expr).map((p: string) => p.trim());
          const funcName = parts[0].replace(/^\$/, '');
          const funcArgs = parts.slice(1).map((a: string) => translateValue(a, stateReads, todos));
          const funcNameJs = funcName.includes('[') ? translateValue(`'${funcName}'`, stateReads, todos) : `'${funcName}'`;
          out.push(`qspFunc(s, ${funcNameJs}${funcArgs.length ? `, ${funcArgs.join(', ')}` : ''});`);
        }
        const varAssign = node.raw.match(/^\$(\w+)\s*(\+=|-=|=)\s*([\s\S]+)$/);

        if (varAssign) {
          const varName = varAssign[1];
          const op = varAssign[2];
          const value = translateValue(varAssign[3].trim(), stateReads, todos);
          if (op === '=') {
            out.push(`(s as any).${varName} = ${value};`);
          } else if (op === '+=') {
            out.push(`(s as any).${varName} = ((s as any).${varName} ?? '') + ${value};`);
          } else {
            out.push(`(s as any).${varName} = ((s as any).${varName} ?? 0) - (${value});`);
          }
          stateWrites.push(varName);
          break;
        }
        const copyarrMatch = node.raw.match(/^copyarr\s*(?:\()?\s*'([^']*)'\s*,\s*'([^']*)'\s*(?:\))?\s*$/);
        if (copyarrMatch) {
          const src = copyarrMatch[1].replace(/^\$/, '');
          const dst = copyarrMatch[2].replace(/^\$/, '');
          const srcExpr = src.includes('<<') ? translateValue(`'${copyarrMatch[1]}'`, stateReads, todos) : src;
          const dstExpr = dst.includes('<<') ? translateValue(`'${copyarrMatch[2]}'`, stateReads, todos) : dst;
          out.push(`(s as any)[${dstExpr}] ? (s as any)[${dstExpr}] = { ...(s as any)[${srcExpr}] } : (s as any)[${dstExpr}] = { ...(s as any)[${srcExpr}] };`);
        }
        const killvarMatch = node.raw.match(/^killvar\s+'([^']+)'/);
        if (killvarMatch) {
          const rawName = killvarMatch[1];
          const varName = rawName.replace(/^\$/, '');
          if (varName.includes('<<')) {
            const dynExpr = translateValue(`'${rawName}'`, stateReads, todos);
            out.push(`delete (s as any)[${dynExpr}];`);
          } else {
            out.push(`(s as any).${varName} = undefined;`);
          }
        }
        const msgMatch = node.raw.match(/^msg\s*(.+)$/);
        if (msgMatch) {
          const val = translateValue(msgMatch[1].trim(), stateReads, todos);
          out.push(`alert(${val});`);
        }
        const viewPathSetup = node.raw.match(/^view\s+'((?:[^']|'')*)'$/);
        if (viewPathSetup) {
          const imgPath = viewPathSetup[1].replace(/''/g, "'");
          if (!imgPath.includes('<<')) {
            out.push(`s.viewImage = '${imgPath}';`);
          } else {
            const singleMatch = imgPath.match(/^<<(.+?)>>$/);
            if (singleMatch) {
              const e = singleMatch[1].trim();
              if (/^\$?\w+$/.test(e)) {
                out.push(`s.viewImage = (s as any).${e.replace(/^\$/, '')};`);
              } else {
                const dynVal = translateValue(`'${imgPath}'`, stateReads, todos);
                out.push(`s.viewImage = ${dynVal};`);
              }
            } else {
              const dynVal = translateValue(`'${imgPath}'`, stateReads, todos);
              out.push(`s.viewImage = ${dynVal};`);
            }
          }
        }
        const viewFuncMatch = node.raw.match(/^view\s+(\$?func\((.+)\))$/);
        if (viewFuncMatch) {
          const args = splitTopLevel(viewFuncMatch[2]).map((a: string) => a.trim());
          const module = args[0]?.replace(/^'|'$/g, '') || '';
          const func = args[1]?.replace(/^'|'$/g, '') || '';
          const extraArgs = args.slice(2).map((a: string) => JSON.stringify(a.replace(/^'|'$/g, '').replace(/''/g, "'")));
          out.push(`s.viewImage = String(qspFunc(s, '${module}', '${func}'${extraArgs.length ? `, ${extraArgs.join(', ')}` : ''}) || '');`);
        }
        const savegameSetupMatch = node.raw.match(/^savegame\s*(?:'(.+)')?$/);
        if (savegameSetupMatch) {
          const file = (savegameSetupMatch[1] || '').replace(/''/g, "'");
          const slot = file.includes('quicksave') ? '0' : '1';
          out.push(`qspSave(${slot}, s);`);
          break;
        }
        const setVarSetupMatch = node.raw.match(/^set\s+\$(\w+)\s*=\s*(.+)$/);
        if (setVarSetupMatch) {
          const varName = setVarSetupMatch[1];
          const val = translateValue(setVarSetupMatch[2].trim(), stateReads, todos);
          out.push(`(s as any).${varName} = ${val};`);
          stateWrites.push(varName);
          break;
        }
        if (node.raw === 'cls' || node.raw === 'clr' || node.raw === '*clr' || node.raw === 'cla') {
          break;
        }
        const standaloneFuncSetup = node.raw.match(/^func\((.+)\)\s*$/);
        if (standaloneFuncSetup) {
          const args = splitTopLevel(standaloneFuncSetup[1]).map((a: string) => a.trim());
          const module = args[0]?.replace(/^'|'$/g, '') || '';
          const func = args[1]?.replace(/^'|'$/g, '') || '';
          const extraArgs = args.slice(2).map((a: string) => JSON.stringify(a.replace(/^'|'$/g, '').replace(/''/g, "'")));
          out.push(`scene.text(String(qspFunc(s, '${module}', '${func}'${extraArgs.length ? `, ${extraArgs.join(', ')}` : ''}) || ''));`);
        }
        break;
      }
      case 'exit': {
        if (actions.length > 0) {
          out.push(`scene.actions([\n${actions.join('\n')}\n]);`);
          actions.length = 0;
        }
        out.push(`return;`);
        break;
      }
      case 'continue': {
        if (actions.length > 0) {
          out.push(`scene.actions([\n${actions.join('\n')}\n]);`);
          actions.length = 0;
        }
        out.push(`continue;`);
        break;
      }
      case 'break': {
        if (actions.length > 0) {
          out.push(`scene.actions([\n${actions.join('\n')}\n]);`);
          actions.length = 0;
        }
        out.push(`break;`);
        break;
      }
      case 'comment': {
        break;
      }
      case 'act': {
        const actCode = generateAct(node, todos, unsupported, stateWrites, stateReads, gsCalls, targets, locName, argToFunc);
        actions.push(actCode);
        break;
      }
      case 'if': {
        const ifCode = generateIf(node, todos, unsupported, stateWrites, stateReads, gsCalls, targets, locName, argToFunc);
        out.push(...ifCode);
        break;
      }
      case 'scene': {
        if (node.arg === '__dynamic__') {
          const dynActions: string[] = [];
          for (const child of node.body) {
            if (child.kind === 'act') {
              const actCode = generateAct(child, todos, unsupported, stateWrites, stateReads, gsCalls, targets, locName, argToFunc);
              dynActions.push(actCode);
            }
          }
          if (dynActions.length > 0) {
            out.push(`scene.actions([`);
            for (const a of dynActions) out.push(`  ${a}`);
            out.push(`]);`);
          }
        }
        break;
      }
      case 'while': {
        const cond = translateCondition(node.condition, stateReads, todos);
        out.push(`while (${cond}) {`);
        const bodyLines = generateSceneBody(node.body, todos, unsupported, stateWrites, stateReads, gsCalls, targets, locName, argToFunc);
        for (const bl of bodyLines) out.push(`  ${bl}`);
        out.push(`}`);
        break;
      }
      case 'dowhile': {
        const cond = translateCondition(node.condition, stateReads, todos);
        out.push(`do {`);
        const bodyLines = generateSceneBody(node.body, todos, unsupported, stateWrites, stateReads, gsCalls, targets, locName, argToFunc);
        for (const bl of bodyLines) out.push(`  ${bl}`);
        out.push(`} while (${cond});`);
        break;
      }
      case 'label': {
        out.push(`// LABEL: ${node.name}`);
        break;
      }
      case 'jump': {
        out.push(`// TODO-QSP: jump '${node.label}'`);
        break;
      }
      case 'unknown': {
        out.push(`// TODO-QSP: ${truncate(node.raw, 100)}`);
        break;
      }
    }
  }

  if (actions.length > 0) {
    out.push(`scene.actions([`);
    for (const a of actions) out.push(`  ${a}`);
    out.push(`]);`);
  }

  return out;
}

function generateAct(
  node: QspAct,
  todos: string[],
  unsupported: string[],
  stateWrites: string[],
  stateReads: string[],
  gsCalls: string[],
  targets: Set<string>,
  locName: string,
  argToFunc: Record<string, string>,
): string {
  if (node.inlineText !== undefined) {
    const text = esc(node.inlineText);
    return `{ ${generateLabelCode(node.label, stateReads, todos, node.dynamicLabel)}, handler: (st: GameState) => { scene.text('${text}'); } },`;
  }

  if (node.inlineGoto) {
    targets.add(node.inlineGoto.target);
    const isDictArg = (a?: string) => !!a && /\w+\['[^']*'\]/.test(a);
    const isIifArg = (a?: string) => !!a && /^iif\(/.test(a);
    const isArithArg = (a?: string) => !!a && !/^['"]/.test(a) && /(\d|\))\s*[+\-*/]\s*(\d|\()/.test(a);
    const isVarArg = node.inlineGoto.arg.startsWith('$') || isDictArg(node.inlineGoto.arg) || isIifArg(node.inlineGoto.arg) || isArithArg(node.inlineGoto.arg);
    const isVarArg2 = node.inlineGoto.arg2?.startsWith('$') || isDictArg(node.inlineGoto.arg2) || isIifArg(node.inlineGoto.arg2) || isArithArg(node.inlineGoto.arg2);
    const isVarArg3 = node.inlineGoto.arg3?.startsWith('$') || isDictArg(node.inlineGoto.arg3) || isIifArg(node.inlineGoto.arg3) || isArithArg(node.inlineGoto.arg3);
    if (isVarArg || isVarArg2 || isVarArg3) {
      const argExpr = node.inlineGoto.arg.startsWith('$') ? `((st as any).${node.inlineGoto.arg.replace(/^\$/, '')} ?? '')` : isIifArg(node.inlineGoto.arg) || isArithArg(node.inlineGoto.arg) ? translateValue(node.inlineGoto.arg, stateReads, todos, 'st') : translateValue(`'${node.inlineGoto.arg}'`, stateReads, todos);
      const arg2Expr = node.inlineGoto.arg2 ? (node.inlineGoto.arg2.startsWith('$') ? `((st as any).${node.inlineGoto.arg2.replace(/^\$/, '')} ?? '')` : isIifArg(node.inlineGoto.arg2) || isArithArg(node.inlineGoto.arg2) ? translateValue(node.inlineGoto.arg2, stateReads, todos, 'st') : translateValue(`'${node.inlineGoto.arg2}'`, stateReads, todos)) : null;
      const arg3Expr = node.inlineGoto.arg3 ? (node.inlineGoto.arg3.startsWith('$') ? `((st as any).${node.inlineGoto.arg3.replace(/^\$/, '')} ?? '')` : isIifArg(node.inlineGoto.arg3) || isArithArg(node.inlineGoto.arg3) ? translateValue(node.inlineGoto.arg3, stateReads, todos, 'st') : translateValue(`'${node.inlineGoto.arg3}'`, stateReads, todos)) : null;
      const handlerArgs = [argExpr, arg2Expr, arg3Expr].filter(Boolean).join(', ');
      return `{ ${generateLabelCode(node.label, stateReads, todos, node.dynamicLabel)}, handler: (st: GameState) => { qspGoto(st, '${node.inlineGoto.target}', ${handlerArgs}); } },`;
    }
    const toStatic = (v: string) => v.replace(/\bst\b/g, 's');
    const argVal = toStatic(translateValue(`'${node.inlineGoto.arg}'`, stateReads, todos));
    const arg2Part = node.inlineGoto.arg2 ? `, ${toStatic(translateValue(`'${node.inlineGoto.arg2}'`, stateReads, todos))}` : '';
    const arg3Part = node.inlineGoto.arg3 ? `, ${toStatic(translateValue(`'${node.inlineGoto.arg3}'`, stateReads, todos))}` : '';
    return `{ ${generateLabelCode(node.label, stateReads, todos, node.dynamicLabel)}, goto: ['${node.inlineGoto.target}', ${argVal}${arg2Part}${arg3Part}] },`;
  }

  if (node.inlineStatements) {
    const inline = translateInlineAct(node.label, node.inlineStatements, stateWrites, stateReads, gsCalls, targets, todos);
    if (inline) return inline;
    return `// TODO-QSP: act '${esc(node.label)}': ${truncate(node.inlineStatements, 80)}`;
  }

  if (node.body.length === 0) {
    return `{ ${generateLabelCode(node.label, stateReads, todos, node.dynamicLabel)} }, // TODO-QSP: empty action body`;
  }

  const bodyLines = generateSceneBody(node.body, todos, unsupported, stateWrites, stateReads, gsCalls, targets, locName, argToFunc);

  for (let gi = bodyLines.length - 1; gi >= 0; gi--) {
    const dm = bodyLines[gi].match(/^scene\.actions\(\[\{ label: 'Continue', handler: \(st: GameState\) => \{ dynamicGoto\(st, '([^']*)'(?:(?:, '([^']*)'))?\); \} \}\]\);$/);
    if (dm) {
      const argPart = dm[2] !== undefined ? `, '${dm[2]}'` : '';
      bodyLines[gi] = `dynamicGoto(st, '${dm[1]}'${argPart});`;
    }
  }

  let gotoCode = '';
  const gotoIdx = bodyLines.findIndex(l => l.startsWith('scene.actions([{ label:'));
  if (gotoIdx >= 0) {
    const m = bodyLines[gotoIdx].match(/goto: \['([^']*)'\s*,\s*'([^']*)'(?:\s*,\s*'([^']*)')?\]/);
    if (m) {
      const arg2Part = m[3] ? `, '${m[3]}'` : '';
      gotoCode = `goto: ['${m[1]}', '${m[2]}'${arg2Part}]`;
      bodyLines.splice(gotoIdx, 1);
    }
  }

  if (bodyLines.length === 0 && gotoCode) {
    return `{ ${generateLabelCode(node.label, stateReads, todos, node.dynamicLabel)}, ${gotoCode} },`;
  }

  const handlerLines = bodyLines.map(l =>
    l.replace(/\(s as any\)/g, '(st as any)')
     .replace(/qspCall\(s,/g, 'qspCall(st,')
     .replace(/qspGoto\(s,/g, 'qspGoto(st,')
     .replace(/dynamicGoto\(s,/g, 'dynamicGoto(st,')
     .replace(/(enter\w+)\(s, scene\)/g, '$1(st, scene)')
   );

  const parts: string[] = [];
  if (handlerLines.length > 0) {
    parts.push(`handler: (st: GameState) => {\n${handlerLines.map(l => `    ${l}`).join('\n')}\n  }`);
  }
  if (gotoCode) parts.push(gotoCode);
  return `{ ${generateLabelCode(node.label, stateReads, todos, node.dynamicLabel)}, ${parts.join(', ')} },`;
}

function translateInlineAct(
  label: string,
  raw: string,
  stateWrites: string[],
  stateReads: string[],
  gsCalls: string[],
  targets: Set<string>,
  todos: string[],
): string | null {
  const parts = raw.split('&').map(p => p.trim()).filter(Boolean);
  const handlerBits: string[] = [];
  let goto: { target: string; arg: string; arg2?: string; arg3?: string } | null = null;

  for (const part of parts) {
    const gtAnyMatch = part.match(/^(?:gt|xgt)\s*(.+)$/);
    if (gtAnyMatch) {
      const argsStr = gtAnyMatch[1].trim();
      const args = argsStr.split(',').map(a => a.trim()).filter(Boolean);
      if (args.length >= 1) {
        const target = args[0];
        const isDynamicTarget = target.startsWith('$') || target.includes('<<');
        if (isDynamicTarget) {
          let t = target.replace(/^\$/, '');
          const tgtDictMatch = t.match(/^(\w+)\['([^']+)'\]$/);
          if (tgtDictMatch) {
            const transpileDictKey = (key: string): string => {
              if (!key.includes('<<')) return `['${key}']`;
              const parts: string[] = [];
              const re = /<<(.+?)>>/g;
              let last = 0, m: RegExpExecArray | null;
              while ((m = re.exec(key)) !== null) {
                if (m.index > last) parts.push(`'${esc(key.slice(last, m.index))}'`);
                const expr = m[1];
                if (expr.startsWith('$')) parts.push(`String(((st as any).${expr.slice(1)} ?? ''))`);
                else parts.push(`String(${translateValue(expr, stateReads, todos, 'st')})`);
                last = m.index + m[0].length;
              }
              if (last < key.length) parts.push(`'${esc(key.slice(last))}'`);
              const keyExpr = parts.length === 1 ? parts[0] : parts.join(' + ');
              return `[${keyExpr}]`;
            };
            const tgtExpr = `(((st as any).${tgtDictMatch[1]} ?? {})${transpileDictKey(tgtDictMatch[2])})`;
            let argParts: string[] = [];
            for (const arg of args.slice(1, 3)) {
              const argClean = arg.replace(/^\$/, '');
              const argDictMatch = argClean.match(/^(\w+)\['([^']+)'\]$/);
              if (argDictMatch) {
                argParts.push(`(((st as any).${argDictMatch[1]} ?? {})${transpileDictKey(argDictMatch[2])})`);
              } else if (arg.startsWith('$')) {
                let av = argClean;
                if (av === 'loc_arg') av = 'prevArg';
                argParts.push(`'${av}'`);
              } else if (arg.startsWith("'") && arg.endsWith("'")) {
                argParts.push(`'${esc(arg.slice(1, -1))}'`);
              } else if (/^-?\d+(\.\d+)?$/.test(arg)) {
                argParts.push(`'${arg}'`);
              } else {
                argParts.push(`((st as any).${argClean} ?? '')`);
              }
            }
            handlerBits.push(`dynamicGoto(st, ${tgtExpr}${argParts.length ? ', ' + argParts.join(', ') : ''});`);
          } else {
            if (t === 'loc') t = 'prevLoc';
            const transpileDynStr = (s: string): string => {
              const inner = s.startsWith("'") && s.endsWith("'") ? s.slice(1, -1).replace(/''/g, "'") : s;
              if (!inner.includes('<<')) return `'${esc(inner)}'`;
              const parts: string[] = [];
              const re = /<<(.+?)>>/g;
              let last = 0, m: RegExpExecArray | null;
              while ((m = re.exec(inner)) !== null) {
                if (m.index > last) parts.push(`'${esc(inner.slice(last, m.index))}'`);
                const expr = m[1];
                const dictM = expr.replace(/^\$/, '').match(/^(\w+)\['([^']+)'\]$/);
                if (dictM) parts.push(`String((((st as any).${dictM[1]} ?? {})['${dictM[2]}']))`);
                else if (expr.startsWith('$')) parts.push(`String(((st as any).${expr.slice(1)} ?? ''))`);
                else parts.push(`String(${translateValue(expr, stateReads, todos, 'st')})`);
                last = m.index + m[0].length;
              }
              if (last < inner.length) parts.push(`'${esc(inner.slice(last))}'`);
              return parts.length === 1 ? parts[0] : parts.join(' + ');
            };
            const tgtExpr = transpileDynStr(t);
            let argParts: string[] = [];
            for (const arg of args.slice(1, 3)) {
              if (arg.startsWith('$')) {
                let av = arg.replace(/^\$/, '');
                if (av === 'loc_arg') av = 'prevArg';
                argParts.push(`'${av}'`);
              } else {
                argParts.push(transpileDynStr(arg));
              }
            }
            handlerBits.push(`dynamicGoto(st, ${tgtExpr}${argParts.length ? ', ' + argParts.join(', ') : ''});`);
          }
        } else {
          const t = target.startsWith("'") && target.endsWith("'") ? target.slice(1, -1) : target;
          goto = { target: t, arg: '' };
          targets.add(t);
          for (let i = 1; i < Math.min(args.length, 4); i++) {
            const arg = args[i];
            const argClean = arg.replace(/^\$/, '');
            const dictMatch = argClean.match(/^(\w+)\['([^']+)'\]$/);
            if (dictMatch) {
              const dk = dictMatch[2];
              const dkExpr = dk.includes('<<')
                ? (() => {
                    const parts: string[] = [];
                    const re = /<<(.+?)>>/g;
                    let last = 0, m: RegExpExecArray | null;
                    while ((m = re.exec(dk)) !== null) {
                      if (m.index > last) parts.push(`'${esc(dk.slice(last, m.index))}'`);
                      const expr = m[1];
                      if (expr.startsWith('$')) parts.push(`String(((st as any).${expr.slice(1)} ?? ''))`);
                      else parts.push(`String(${translateValue(expr, stateReads, todos, 'st')})`);
                      last = m.index + m[0].length;
                    }
                    if (last < dk.length) parts.push(`'${esc(dk.slice(last))}'`);
                    return parts.length === 1 ? parts[0] : parts.join(' + ');
                  })()
                : `'${dk}'`;
              const av = `(((st as any).${dictMatch[1]} ?? {})[${dkExpr}])`;
              if (i === 1) goto.arg = av;
              else if (i === 2) goto.arg2 = av;
              else if (i === 3) goto.arg3 = av;
            } else if (arg.startsWith('$')) {
              const av = argClean;
              if (i === 1) goto.arg = av;
              else if (i === 2) goto.arg2 = av;
              else if (i === 3) goto.arg3 = av;
            } else if (arg.startsWith("'") && arg.endsWith("'")) {
              const inner = arg.slice(1, -1).replace(/''/g, "'");
              if (inner.includes('<<')) {
                const parts: string[] = [];
                const re = /<<(.+?)>>/g;
                let last = 0, m: RegExpExecArray | null;
                while ((m = re.exec(inner)) !== null) {
                  if (m.index > last) parts.push(`'${esc(inner.slice(last, m.index))}'`);
                  const expr = m[1];
                  const dictM = expr.replace(/^\$/, '').match(/^(\w+)\['([^']+)'\]$/);
                  if (dictM) parts.push(`String((((st as any).${dictM[1]} ?? {})['${dictM[2]}']))`);
                  else if (expr.startsWith('$')) parts.push(`String(((st as any).${expr.slice(1)} ?? ''))`);
                  else parts.push(`String(${translateValue(expr, stateReads, todos, 'st')})`);
                  last = m.index + m[0].length;
                }
                if (last < inner.length) parts.push(`'${esc(inner.slice(last))}'`);
                const av = parts.length === 1 ? parts[0] : parts.join(' + ');
                if (i === 1) goto.arg = av;
                else if (i === 2) goto.arg2 = av;
                else if (i === 3) goto.arg3 = av;
              } else {
                const av = esc(inner);
                if (i === 1) goto.arg = av;
                else if (i === 2) goto.arg2 = av;
                else if (i === 3) goto.arg3 = av;
              }
            } else if (/^-?\d+(\.\d+)?$/.test(arg)) {
              const av = `'${arg}'`;
              if (i === 1) goto.arg = av;
              else if (i === 2) goto.arg2 = av;
              else if (i === 3) goto.arg3 = av;
            } else {
              const av = translateValue(arg, stateReads, todos, 'st');
              if (i === 1) goto.arg = av;
              else if (i === 2) goto.arg2 = av;
              else if (i === 3) goto.arg3 = av;
            }
          }
        }
      }
      continue;
    }
    const timeMatch = part.match(/^minut\s*\+=?\s*(\d+)$/);
    if (timeMatch) {
      handlerBits.push(`(st as any).minut = ((st as any).minut ?? 0) + ${timeMatch[1]};`);
      continue;
    }
    const arrAssignMatch = part.match(/^(\w+)\['([^']+)'\]\s*(\+=|-=|=)\s*(.+)$/);
    if (arrAssignMatch) {
      const objName = arrAssignMatch[1];
      const key = arrAssignMatch[2];
      const op = arrAssignMatch[3];
      const val = translateValue(arrAssignMatch[4].trim(), stateReads, todos, 'st');
      const guarded = `((st as any).${objName} = (st as any).${objName} ?? {})['${key}']`;
      if (op === '=') {
        handlerBits.push(`${guarded} = ${val};`);
      } else if (op === '+=') {
        handlerBits.push(`${guarded} = (${guarded} ?? 0) + (${val});`);
      } else {
        handlerBits.push(`${guarded} = (${guarded} ?? 0) - (${val});`);
      }
      stateWrites.push(objName);
      continue;
    }
    const assignMatch = part.match(/^(\w+)\s*(\+=|-=|=)\s*(.+)$/);
    if (assignMatch) {
      const val = translateValue(assignMatch[3].trim(), stateReads, todos, 'st');
      if (assignMatch[1] === 'backimage' && assignMatch[2] === '=') {
        handlerBits.push(`st.scene = { ...st.scene, backimage: ${val} };`);
      } else if (assignMatch[2] === '=') {
        handlerBits.push(`(st as any).${assignMatch[1]} = ${val};`);
      } else if (assignMatch[2] === '+=') {
        handlerBits.push(`(st as any).${assignMatch[1]} = ((st as any).${assignMatch[1]} ?? 0) + (${val});`);
      } else {
        handlerBits.push(`(st as any).${assignMatch[1]} = ((st as any).${assignMatch[1]} ?? 0) - (${val});`);
      }
      stateWrites.push(assignMatch[1]);
      continue;
    }
    const dollarAssignMatch = part.match(/^\$(\w+)\s*(\+=|-=|=)\s*(.+)$/);
    if (dollarAssignMatch) {
      const varName = dollarAssignMatch[1];
      const op = dollarAssignMatch[2];
      const val = translateValue(dollarAssignMatch[3].trim(), stateReads, todos, 'st');
      if (op === '=') {
        handlerBits.push(`(st as any).${varName} = ${val};`);
      } else if (op === '+=') {
        handlerBits.push(`(st as any).${varName} = ((st as any).${varName} ?? 0) + (${val});`);
      } else {
        handlerBits.push(`(st as any).${varName} = ((st as any).${varName} ?? 0) - (${val});`);
      }
      stateWrites.push(varName);
      continue;
    }
    const arrNumIdxMatch2 = part.match(/^(\$?\w+)\[(\d+)\]\s*(\+=|-=|=)\s*(.+)$/);
    if (arrNumIdxMatch2) {
      const varName = arrNumIdxMatch2[1].replace(/^\$/, '');
      const idx = arrNumIdxMatch2[2];
      const op = arrNumIdxMatch2[3];
      const val = translateValue(arrNumIdxMatch2[4].trim(), stateReads, todos, 'st');
      if (op === '=') {
        handlerBits.push(`(st as any).${varName}[${idx}] = ${val};`);
      } else if (op === '+=') {
        handlerBits.push(`(st as any).${varName}[${idx}] = ((st as any).${varName}[${idx}] ?? 0) + (${val});`);
      } else {
        handlerBits.push(`(st as any).${varName}[${idx}] = ((st as any).${varName}[${idx}] ?? 0) - (${val});`);
      }
      stateWrites.push(varName);
      continue;
    }
    const arrVarAssignMatch2 = part.match(/^(\$?\w+)\[(.+?)\]\s*(\*=?|\/=?|\+=|-=|=)\s*(.+)$/);
    if (arrVarAssignMatch2) {
      const varName = arrVarAssignMatch2[1].replace(/^\$/, '');
      const key = arrVarAssignMatch2[2];
      const op = arrVarAssignMatch2[3];
      const val = translateValue(arrVarAssignMatch2[4].trim(), stateReads, todos, 'st');
      const keyTrimmed = key.trim();
      const keyExpr = keyTrimmed.startsWith("'") && keyTrimmed.endsWith("'")
        ? keyTrimmed.slice(1, -1).replace(/''/g, "'")
        : `String((st as any).${keyTrimmed.replace(/^\$/, '')} ?? '')`;
      const base = `(st as any).${varName}[${keyExpr}]`;
      if (op === '=') {
        handlerBits.push(`${base} = ${val};`);
      } else if (op === '+=') {
        handlerBits.push(`${base} = (${base} ?? 0) + (${val});`);
      } else if (op === '-=') {
        handlerBits.push(`${base} = (${base} ?? 0) - (${val});`);
      } else if (op === '*=') {
        handlerBits.push(`${base} = (${base} ?? 0) * (${val});`);
      } else if (op === '/=') {
        handlerBits.push(`${base} = (${base} ?? 0) / (${val});`);
      }
      stateWrites.push(varName);
      continue;
    }
    if (part === 'cla' || part === '*clr' || part.startsWith('*clr')) continue;
    const killvarInlineMatch = part.match(/^killvar\s+'([^']+)'/);
    if (killvarInlineMatch) {
      const rawName = killvarInlineMatch[1];
      const varName = rawName.replace(/^\$/, '');
      if (varName.includes('<<')) {
        const dynExpr = translateValue(`'${rawName}'`, stateReads, todos);
        handlerBits.push(`delete (st as any)[${dynExpr}];`);
      } else {
        handlerBits.push(`(st as any).${varName} = undefined;`);
      }
      continue;
    }
    const msgInlineMatch = part.match(/^msg\s*(.+)$/);
    if (msgInlineMatch) {
      const val = translateValue(msgInlineMatch[1].trim(), stateReads, todos, 'st');
      handlerBits.push(`alert(${val});`);
      continue;
    }
    const plInlineMatch = part.match(/^pl\s*(.+)$/);
    if (plInlineMatch) {
      const val = translateValue(plInlineMatch[1].trim(), stateReads, todos, 'st');
      handlerBits.push(`st.scene = { ...st.scene, mainText: ${val}, curActs: [] };`);
      continue;
    }
    const flagMatch = part.match(/^\$(\w+)$/);
    if (flagMatch) {
      handlerBits.push(`st.scene = { ...st.scene, mainText: String((st as any).${flagMatch[1]} || ''), curActs: [] };`);
      stateReads.push(flagMatch[1]);
      continue;
    }
    if (part.startsWith('gs ')) {
      const gsMatch = part.match(/^gs\s*('((?:[^']|'')*)'|\$\w+(\['[^']*'\]|\[\$\w+\]|\[\d+\]|\[\$\w+\[\d+\]\])?|\w+)\s*(?:,\s*('((?:[^']|'')*)'|\$\w+(\['[^']*'\]|\[\$\w+\]|\[\d+\]|\[\$\w+\[\d+\]\])?|\w+))?\s*(?:,\s*(.+?))?\s*$/);
      if (gsMatch) {
        const modRaw = gsMatch[1];
        const mod = modRaw.startsWith("'") ? modRaw.slice(1, -1) : translateValue(modRaw, stateReads, todos, 'st');
        const fnRaw = gsMatch[6] || '';
        const fn = fnRaw.startsWith("'") ? fnRaw.slice(1, -1) : (fnRaw ? translateValue(fnRaw, stateReads, todos, 'st') : '');
        gsCalls.push(`${modRaw}.${fnRaw || 'unknown'}`);
        let rest = gsMatch[11] || '';
        let restArgs: string[] = [];
        if (rest) {
          if (rest.startsWith(',')) rest = rest.slice(1);
          restArgs = splitTopLevel(rest).map(a => a.trim()).filter(a => a !== '').map(a => translateValue(a, stateReads, todos, 'st'));
        }
        const modExpr = modRaw.startsWith("'") ? `'${esc(modRaw.slice(1, -1))}'` : mod;
        const fnExpr = fnRaw.startsWith("'") ? `'${esc(fnRaw.slice(1, -1))}'` : (fnRaw ? fn : "''");
        handlerBits.push(`qspCall(st, ${modExpr}, ${fnExpr}${restArgs.length ? ', ' + restArgs.join(', ') : ''});`);
        continue;
      }
      handlerBits.push(`// TODO-QSP: ${truncate(part, 60)}`);
      continue;
    }
    const funcWrapInline = part.match(/^\$func\('wrap',\s*'([^']*)',\s*'((?:[^']|'')*)'\)\s*$/);
    if (funcWrapInline) {
      const style = funcWrapInline[1];
      const text = funcWrapInline[2].replace(/''/g, "'");
      handlerBits.push(`st.scene = { ...st.scene, mainText: String(qspFunc(st, 'wrap', '${style}', '${esc(text)}') || ''), curActs: [] };`);
      continue;
    }
    const inlineIfMatch = part.match(/^if\s+(.+?)\s*:\s*(.+)$/);
    if (inlineIfMatch) {
      const cond = inlineIfMatch[1].trim();
      const stmtStr = inlineIfMatch[2].trim();
      const elseIdx = stmtStr.indexOf(' else ');
      const thenStr = elseIdx !== -1 ? stmtStr.slice(0, elseIdx).trim() : stmtStr;
      const elseStr = elseIdx !== -1 ? stmtStr.slice(elseIdx + 6).trim() : '';
      const translateCond = (c: string): string => {
        const randMatch = c.match(/^rand\(\s*([\w$]+)\s*,\s*([\w$]+)\s*\)\s*(=|<>|<|>|<=|>=)\s*([\w$]+)/);
        if (randMatch) {
          const lo = randMatch[1].startsWith('$') ? `(st as any).${randMatch[1].slice(1)}` : randMatch[1];
          const hi = randMatch[2].startsWith('$') ? `(st as any).${randMatch[2].slice(1)}` : randMatch[2];
          const op = randMatch[3];
          const val = randMatch[4].startsWith('$') ? `(st as any).${randMatch[4].slice(1)}` : randMatch[4];
          const randExpr = `Math.floor(Math.random() * (${hi} - ${lo} + 1)) + ${lo}`;
          const jsOp = op === '<>' ? '!=' : op === '=' ? '==' : op;
          return `${randExpr} ${jsOp} ${val}`;
        }
        return translateValue(c, stateReads, todos, 'st');
      };
      const condExpr = translateCond(cond);
      const translateBody = (s: string): string => {
        const gtM = s.match(/^(?:gt|xgt)\s+'([^']+)'\s*(?:,\s*'([^']*)')?\s*$/);
        if (gtM) {
          const tgt = gtM[1];
          const arg = gtM[2] !== undefined ? `'${gtM[2]}'` : "''";
          return `dynamicGoto(st, '${tgt}', ${arg});`;
        }
        const assignM = s.match(/^(\w+)\s*(\+=|-=|=)\s*(.+)$/);
        if (assignM) {
          const obj = assignM[1];
          const op = assignM[2];
          const val = translateValue(assignM[3].trim(), stateReads, todos, 'st');
          if (op === '=') return `(st as any).${obj} = ${val};`;
          if (op === '+=') return `(st as any).${obj} = ((st as any).${obj} ?? 0) + (${val});`;
          return `(st as any).${obj} = ((st as any).${obj} ?? 0) - (${val});`;
        }
        return `// TODO-QSP: ${truncate(s, 60)}`;
      };
      const thenCode = translateBody(thenStr);
      if (elseStr) {
        const elseCode = translateBody(elseStr);
        handlerBits.push(`if (${condExpr}) { ${thenCode} } else { ${elseCode} }`);
      } else {
        handlerBits.push(`if (${condExpr}) { ${thenCode} }`);
      }
      continue;
    }
    const dynBareVarInline = part.match(/^dynamic\s+\$(\w+)\s*$/);
    if (dynBareVarInline) {
      const varName = dynBareVarInline[1];
      handlerBits.push(`dynamicGoto(st, String((st as any).${varName} || ''));`);
      continue;
    }
    const dynArrVarInline = part.match(/^dynamic\s+\$(\w+)\[(.+)\]\s*$/);
    if (dynArrVarInline) {
      const varName = dynArrVarInline[1];
      const keyExpr = dynArrVarInline[2].trim();
      const keyJs = /^\d+$/.test(keyExpr) ? keyExpr : `String((st as any).${keyExpr.replace(/^\$/, '')} ?? '')`;
      handlerBits.push(`dynamicGoto(st, String(((st as any).${varName} ?? {})[${keyJs}] || ''));`);
      continue;
    }
    const dynNestedVarInline = part.match(/^dynamic\s+\$(\w+)\[\$(\w+)\]\s*$/);
    if (dynNestedVarInline) {
      const varName = dynNestedVarInline[1];
      const keyVar = dynNestedVarInline[2];
      handlerBits.push(`dynamicGoto(st, String(((st as any).${varName} ?? {})[String((st as any).${keyVar} ?? '')] || ''));`);
      continue;
    }
    handlerBits.push(`// TODO-QSP: ${truncate(part, 60)}`);
  }

  if (!goto && handlerBits.length === 0) return null;

  const handlerCode = handlerBits.length > 0
    ? `handler: (st: GameState) => {\n${handlerBits.map(l => `    ${l}`).join('\n')}\n  }`
    : '';

  const toStatic = (v: string) => v.replace(/\bst\b/g, 's');
  const isExpr = (v: string) => v.startsWith('((s') || v.startsWith('(s') || v.startsWith("'");
  const fmtArg = (v: string) => { const sv = toStatic(v); return isExpr(sv) ? sv : `'${esc(sv)}'`; };
  const gotoCode = goto
    ? `goto: ['${goto.target}', ${fmtArg(goto.arg)}${goto.arg2 ? `, ${fmtArg(goto.arg2)}` : ''}${goto.arg3 ? `, ${fmtArg(goto.arg3)}` : ''}]`
    : '';

  const bits = [handlerCode, gotoCode].filter(Boolean).join(', ');
  return `{ ${generateLabelCode(label, stateReads, todos)}, ${bits} },`;
}

function generateIf(
  node: QspIf,
  todos: string[],
  unsupported: string[],
  stateWrites: string[],
  stateReads: string[],
  gsCalls: string[],
  targets: Set<string>,
  locName: string,
  argToFunc: Record<string, string>,
): string[] {
  const cond = translateCondition(node.condition, stateReads, todos);
  const thenLines = generateSceneBody(node.thenBody, todos, unsupported, stateWrites, stateReads, gsCalls, targets, locName, argToFunc);
  const elseLines = node.elseBody.length > 0
    ? generateSceneBody(node.elseBody, todos, unsupported, stateWrites, stateReads, gsCalls, targets, locName, argToFunc)
    : [];

  const out: string[] = [];
  out.push(`if (${cond}) {`);
  for (const l of thenLines) out.push(`  ${l}`);
  if (elseLines.length > 0) {
    out.push(`} else {`);
    for (const l of elseLines) out.push(`  ${l}`);
  }
  out.push(`}`);
  return out;
}

const TS_KEYWORDS = new Set(['true', 'false', 'null', 'undefined', 'if', 'else', 'return', 'void', 'function', 'const', 'let', 'var', 'new', 'typeof', 'instanceof', 'in', 'of', 'for', 'while', 'switch', 'case', 'break', 'continue', 'default', 'class', 'extends', 'super', 'this', 'import', 'export', 'from', 'as', 'type', 'interface', 'enum', 'number', 'string', 'boolean', 'any', 'never', 'unknown', 'object', 'symbol', 'bigint']);

// Keywords that are actual TS syntax, not variable names
const TS_SYNTAX_KEYWORDS = new Set(['true', 'false', 'null', 'undefined', 'typeof', 'instanceof', 'void', 'new', 'return', 'qspUntranslated', 'qspFunc', 'qspCall', 'Math', 'parseFloat', 'String']);

function translateCondition(cond: string, stateReads: string[], todos: string[], stateVar: string = 's'): string {
  let c = cond;
  const phs: [string, string][] = [];
  c = c.replace(/¾/g, '(3/4)').replace(/⅔/g, '(2/3)').replace(/¼/g, '(1/4)').replace(/⅓/g, '(1/3)').replace(/×/g, '*').replace(/−/g, '-');
  c = c.replace(/\bmod\s*\(([^)]+)\)/gi, (_, arg) => {
    const trimmed = arg.trim();
    if (/^[a-zA-Z_]\w*$/.test(trimmed)) return `% ${trimmed}`;
    return `% (${trimmed})`;
  });
  c = c.replace(/\bmod\b/gi, '%');
  c = c.replace(/\band\b/gi, ' && ');
  c = c.replace(/\bor\b/gi, ' || ');
  c = c.replace(/\bnot\b/gi, '!');
  c = c.replace(/\bno\s*\(/gi, '!(');
  c = c.replace(/\bno\b/gi, '!');
  // arrsize() in conditions - must run BEFORE <<expr>> string translation
  c = c.replace(/\b(?:\$?)arrsize\s*\(\s*['"]?\$?(\w+)['"]?\s*\)/g, (_, arrName) => {
    const ph = `\u0000${phs.length}\u0000`;
    phs.push([ph, `Object.keys((${stateVar} as any).${arrName} ?? {}).length`]);
    stateReads.push(arrName);
    return ph;
  });
  c = replaceBalanced(c, 'arrsize', (arg) => {
    const ph = `\u0000${phs.length}\u0000`;
    const trimmed = arg.trim();
    if (/^['"]?\$?(\w+)['"]?$/.test(trimmed)) {
      const m = trimmed.match(/^['"]?\$?(\w+)['"]?$/)![1];
      phs.push([ph, `Object.keys((${stateVar} as any).${m} ?? {}).length`]);
      stateReads.push(m);
    } else {
      const translated = translateValue(trimmed, stateReads, todos, stateVar);
      phs.push([ph, `Object.keys((${stateVar} as any)[${translated}] ?? {}).length`]);
    }
    return ph;
  });
  c = c.replace(/\b(?:\$?)arrsize\s+['"]\$?(\w+)['"]/g, (_, arrName) => {
    const ph = `\u0000${phs.length}\u0000`;
    phs.push([ph, `Object.keys((${stateVar} as any).${arrName} ?? {}).length`]);
    stateReads.push(arrName);
    return ph;
  });
  // Handle <<expr>> inside single-quoted strings (QSP dynamic strings)
  // Must run BEFORE unescapeDoubled so '' escaped quotes are still visible
  // Must run before array-access regex so inner expressions are still in original form
  // Supports MULTIPLE <<>> expressions in a single string
  {
    let out = '';
    let i = 0;
    while (i < c.length) {
      if (c[i] === "'") {
        // Find the end of the string, tracking <<>> depth to skip quotes inside dynamics
        let j = i + 1;
        let dynDepth = 0;
        while (j < c.length) {
          if (dynDepth > 0) {
            if (c[j] === '<' && c[j + 1] === '<') { dynDepth++; j += 2; continue; }
            if (c[j] === '>' && c[j + 1] === '>') { dynDepth--; j += 2; continue; }
            if (c[j] === "'") {
              let k = j + 1;
              while (k < c.length && c[k] !== "'") k++;
              j = k + 1;
              continue;
            }
            j++;
            continue;
          }
          if (c[j] === '<' && c[j + 1] === '<') { dynDepth = 1; j += 2; continue; }
          if (c[j] === "'") {
            if (c[j + 1] === "'") { j += 2; continue; }
            break;
          }
          j++;
        }
        const strContent = c.slice(i + 1, j);
        if (strContent.includes('<<')) {
          // Build concatenation of literal text and translated expressions
          let parts: string[] = [];
          let segStart = 0;
          let pos = 0;
          while (pos < strContent.length) {
            if (strContent[pos] === '<' && strContent[pos + 1] === '<') {
              if (pos > segStart) parts.push(`'${esc(strContent.slice(segStart, pos))}'`);
              // Find matching >>
              let depth = 0, k = pos;
              for (; k < strContent.length; k++) {
                if (strContent[k] === '<' && strContent[k + 1] === '<') { depth++; k++; }
                else if (strContent[k] === '>' && strContent[k + 1] === '>' && depth > 0) { depth--; k++; if (depth === 0) break; }
              }
              const inner = strContent.slice(pos + 2, k - 1).replace(/''/g, "'");
              const exprTranslated = translateCondition(inner.trim(), stateReads, todos, stateVar);
              parts.push(`(${exprTranslated})`);
              pos = k + 1;
              segStart = pos;
            } else {
              pos++;
            }
          }
          if (segStart < strContent.length) parts.push(`'${esc(strContent.slice(segStart))}'`);
          const ph = `\u0000${phs.length}\u0000`;
          const joined = parts.length > 1 ? parts.join(' + ') : parts[0];
          phs.push([ph, joined]);
          out += ph;
          i = j + 1;
        } else {
          out += c.slice(i, j + 1);
          i = j + 1;
        }
      } else {
        out += c[i];
        i++;
      }
    }
    c = out;
  }
  c = unescapeDoubled(c);
  c = c.replace(/''([a-zA-Z0-9_][^'']*)''/g, "'$1'");
  c = c.replace(/""<<(.+?)>>""/g, '<<$1>>');
  c = c.replace(/\b0+(?=\d)/g, '');
  c = c.replace(/(<>)|(!=)|( ! )|(>=)|(<=)|(=)/g, (_, ne, neq, bang, gte, lte) => {
    if (ne) return '!==';
    if (neq) return '!==';
    if (bang) return ' !== ';
    if (gte) return '>=';
    if (lte) return '<=';
    return '===';
  });
  // QSP ! operator (not equal) between operands
  c = c.replace(/(\w)!(\w)/g, '$1!==$2');
  c = c.replace(/(\])!(\s*')/g, '$1!== $2');
  c = c.replace(/([\w\)])!(\s*')/g, '$1!==$2');
  // QSP dynamic variable name: <<$var['key']>>_suffix -> dynamic property access
  // Must run BEFORE array-access handler so var['key'] inside <<>> is not pre-consumed
  c = c.replace(/<<\$([a-zA-Z_]\w*)\[(['"])([^'"]*)\2\]>>(_[a-zA-Z_]\w*)/g, (_, obj, q, key, suffix) => {
    const ph = `\u0000${phs.length}\u0000`;
    const keyStr = key.replace(/''/g, "'").replace(/\\"/g, '"');
    const keyExpr = key.includes('<<') ? `(${key})` : `'${keyStr}'`;
    phs.push([ph, `((${stateVar} as any)[((${stateVar} as any).${obj} ?? {})['${keyStr}'] + '${suffix}'] ?? 0)`]);
    stateReads.push(obj);
    return ph;
  });
  // QSP dynamic variable name: prefix<<$var['key']>> -> dynamic property access
  // Must run BEFORE array-access handler so var['key'] inside <<>> is not pre-consumed
  c = c.replace(/([a-zA-Z_]\w*)<<\$([a-zA-Z_]\w*)\[(['"])([^'"]*)\3\]>>/g, (_, prefix, obj, q, key) => {
    const ph = `\u0000${phs.length}\u0000`;
    const keyStr = key.replace(/''/g, "'").replace(/\\"/g, '"');
    phs.push([ph, `((${stateVar} as any)['${prefix}' + ((${stateVar} as any).${obj} ?? {})['${keyStr}']] ?? 0)`]);
    stateReads.push(obj);
    return ph;
  });
  // QSP array access with literal key: WORD['key'] or WORD["key"] (protect key from identifier replacement)
  // Must run before <<expr>> handler so dynamic keys like WORD['<<$ARGS[1]>>-type'] are handled correctly
  c = c.replace(/\$?([a-zA-Z_]\w*)\[(['"])([^'"]*)\2\]/g, (_, obj, q, key) => {
    const ph = `\u0000${phs.length}\u0000`;
    const keyExpr = key.includes('<<') ? buildKeyExpr(key, stateReads, todos, stateVar) : `'${key.replace(/''/g, "'").replace(/\\"/g, '"')}'`;
    phs.push([ph, `((${stateVar} as any).${obj} ?? 0)?.[${keyExpr}]`]);
    stateReads.push(obj);
    return ph;
  });
  // QSP array access with angle-bracket index: WORD<<var>> -> WORD[var] (simple identifier index)
  // QSP dynamic variable name: prefix<<var>>_suffix -> dynamic property access (quote-aware)
  {
    let out = '';
    let i = 0;
    let inQ = false;
    let qCh = '';
    while (i < c.length) {
      if (inQ) {
        if (c[i] === qCh) {
          if (c[i + 1] === qCh) { i += 2; continue; }
          inQ = false;
        }
        out += c[i];
        i++;
      } else {
        if (c[i] === "'" || c[i] === '"') { inQ = true; qCh = c[i]; out += c[i]; i++; }
        else {
          const m = /^([a-zA-Z_]\w*)<<\$?([a-zA-Z_]\w*)>>(_[a-zA-Z_]\w*)/.exec(c.slice(i));
          if (m) {
            const ph = `\u0000${phs.length}\u0000`;
            phs.push([ph, `((${stateVar} as any)[('${m[1]}' + String((${stateVar} as any).${m[2]} ?? 0)) + '${m[3]}'] ?? 0)`]);
            stateReads.push(m[2]);
            out += ph;
            i += m[0].length;
          } else {
            out += c[i];
            i++;
          }
        }
      }
    }
    c = out;
  }
  // Must run before the <<expr>> handler so it is treated as array access, not a call.
  c = c.replace(/([a-zA-Z_]\w*)<<\$?([a-zA-Z_]\w*)>>/g, '$1[$2]');
  // QSP dynamic variable name: <<$var>>_suffix -> dynamic property access (quote-aware)
  {
    let out = '';
    let i = 0;
    let inQ = false;
    let qCh = '';
    while (i < c.length) {
      if (inQ) {
        if (c[i] === qCh) {
          if (c[i + 1] === qCh) { i += 2; continue; }
          inQ = false;
        }
        out += c[i];
        i++;
      } else {
        if (c[i] === "'" || c[i] === '"') { inQ = true; qCh = c[i]; out += c[i]; i++; }
        else {
          const m = /^<<\$([a-zA-Z_]\w*)>>(_[a-zA-Z_]\w*)/.exec(c.slice(i));
          if (m) {
            const ph = `\u0000${phs.length}\u0000`;
            phs.push([ph, `((${stateVar} as any)[((${stateVar} as any).${m[1]} ?? '') + '${m[2]}'] ?? 0)`]);
            stateReads.push(m[1]);
            out += ph;
            i += m[0].length;
          } else {
            out += c[i];
            i++;
          }
        }
      }
    }
    c = out;
  }
  // QSP dynamic variable name with ARGS[N]: WORD<<$ARGS[N]>> -> dynamic property access
  c = c.replace(/([a-zA-Z_]\w*)<<\$?ARGS\[(\d+)\]>>/g, (_, prefix, idx) => {
    const ph = `\u0000${phs.length}\u0000`;
    phs.push([ph, `((${stateVar} as any)['${prefix}' + String((${stateVar} as any).locArgs?.[${idx}] ?? '')] ?? 0)`]);
    return ph;
  });
  // Handle <<expr>> inline in conditions
  c = c.replace(/<<(.+?)>>/g, (_, expr) => {
    const ph = `\u0000${phs.length}\u0000`;
    phs.push([ph, translateCondition(expr.trim(), stateReads, todos, stateVar)]);
    return ph;
  });
  // QSP func('module', 'func', args) / $func(...) calls (before $ARGS/$ stripping)
  c = replaceFuncCalls(c, stateReads, todos, stateVar, phs);
  c = replaceBuiltinFuncs(c, stateReads, todos, stateVar, phs);
  // dyneval() in conditions - treat as 0 with TODO
  {
    let out = '';
    let i = 0;
    while (i < c.length) {
      const m = c.slice(i).match(/^(?:\$?)dyneval\s*\(/);
      if (m) {
        const start = i + m[0].length;
        let depth = 1;
        let inStr = false;
        let j = start;
        while (j < c.length && depth > 0) {
          const ch = c[j];
          if (inStr) {
            if (ch === "'" && c[j - 1] !== '\\') inStr = false;
          } else {
            if (ch === "'") inStr = true;
            else if (ch === '(') depth++;
            else if (ch === ')') depth--;
          }
          j++;
        }
        const arg = c.slice(start, j - 1);
        const ph = `\u0000${phs.length}\u0000`;
        todos.push(`dyneval: ${truncate(arg, 80)}`);
        phs.push([ph, '(0 as any)']);
        out += ph;
        i = j;
      } else {
        out += c[i];
        i++;
      }
    }
    c = out;
  }

  // arrpos('$arr', val) in conditions - QSP array position function
  c = c.replace(/\b(?:\$?)arrpos\s*\(\s*['"]?\$?(\w+)['"]?\s*,\s*([^)]+)\)/g, (_, arrName, val) => {
    const ph = `\u0000${phs.length}\u0000`;
    const valTranslated = translateCondition(val.trim(), stateReads, todos, stateVar);
    phs.push([ph, `(Array.isArray((${stateVar} as any).${arrName}) ? ((${stateVar} as any).${arrName} as any[]).indexOf(${valTranslated}) : -1)`]);
    stateReads.push(arrName);
    return ph;
  });
  c = c.replace(/(?<!\w)(?:\$)?modARGS\[(\d+)\]/g, (_, idx) => {
    const ph = `\u0000${phs.length}\u0000`;
    phs.push([ph, `String((${stateVar} as any).locArgs?.[${idx}] ?? '')`]);
    return ph;
  });
  c = c.replace(/(?<!\w)(?:\$)?ARGS\[\]/g, () => {
    const ph = `\u0000${phs.length}\u0000`;
    phs.push([ph, `((${stateVar} as any).locArgs ?? 0)`]);
    return ph;
  });
  c = c.replace(/(?<!\w)(?:\$)?ARGS\[(\d+)\]/g, (_, idx) => {
    const ph = `\u0000${phs.length}\u0000`;
    phs.push([ph, `String((${stateVar} as any).locArgs?.[${idx}] ?? '')`]);
    return ph;
  });
  c = c.replace(/\bisnum\s*\(([^)]+)\)/g, (_, arg) => {
    const ph = `\u0000${phs.length}\u0000`;
    const argTranslated = translateValue(arg.trim(), stateReads, todos, stateVar);
    phs.push([ph, `!isNaN(${argTranslated}) && ${argTranslated} !== ''`]);
    return ph;
  });
  c = c.replace(/\$locat\['([^']+)'\]/g, (_, key) => {
    const ph = `\u0000${phs.length}\u0000`;
    phs.push([ph, `((${stateVar} as any).locat?.['${key}'] ?? 0)`]);
    return ph;
  });
  c = c.replace(/\$locat\[(\d+)\]/g, (_, idx) => {
    const ph = `\u0000${phs.length}\u0000`;
    phs.push([ph, `((${stateVar} as any).locat?.[${idx}] ?? 0)`]);
    return ph;
  });
  // QSP rand(a, b) / random(a, b) in conditions (case-insensitive)
  c = c.replace(/\b(?:rand|random)\s*\(([^,)]+),\s*([^)]+)\)/gi, (_, a, b) => {
    const ph = `\u0000${phs.length}\u0000`;
    const aStr = a.trim();
    const bStr = b.trim();
    if (/^\d+$/.test(aStr) && /^\d+$/.test(bStr)) {
      const ai = parseInt(aStr);
      const bi = parseInt(bStr);
      phs.push([ph, `(Math.floor(Math.random() * ${bi - ai + 1}) + ${ai})`]);
    } else {
      const aTranslated = translateCondition(aStr, stateReads, todos, stateVar);
      const bTranslated = translateCondition(bStr, stateReads, todos, stateVar);
      phs.push([ph, `(Math.floor(Math.random() * (${bTranslated} - ${aTranslated} + 1)) + (${aTranslated}))`]);
    }
    return ph;
  });
  // Strip $ prefix from remaining QSP variable names
  c = c.replace(/\$([a-zA-Z_]\w*)/g, '$1');
  c = c.replace(/\b([a-zA-Z_]\w*)\[\$?([a-zA-Z_]\w*)\]/g, (_, obj, idx) => {
    const ph = `\u0000${phs.length}\u0000`;
    phs.push([ph, `((${stateVar} as any).${obj} ?? 0)?.[String((${stateVar} as any).${idx} ?? 0)]`]);
    stateReads.push(obj, idx);
    return ph;
  });
  // Extract single-quoted strings into placeholders so the identifier pass skips their content.
  // After unescapeDoubled, '' has become ' so the string may contain raw ' chars.
  // Use a state-aware scan instead of a regex to handle this correctly.
  {
    let out = '';
    let i = 0;
    while (i < c.length) {
      if (c[i] === "'") {
        let j = i + 1;
        while (j < c.length) {
          if (c[j] === "'") {
            // Check if this ' is a terminator or part of content.
            // A terminator ' is followed by a non-alphanumeric char or end-of-string.
            // A content ' (from unescapeDoubled) is followed by an alphanumeric char.
            if (j + 1 >= c.length || !/[a-zA-Z0-9]/.test(c[j + 1])) break;
            j++;
            continue;
          }
          j++;
        }
        if (j < c.length) {
          const full = c.slice(i, j + 1);
          const ph = `\u0000${phs.length}\u0000`;
          phs.push([ph, `'${esc(full.slice(1, -1))}'`]);
          out += ph;
          i = j + 1;
          continue;
        }
      }
      out += c[i];
      i++;
    }
    c = out;
  }
  c = c.replace(/\b([a-zA-Z_]\w*(?:\.[a-zA-Z_]\w*)*)\b/g, (m) => {
    if (TS_SYNTAX_KEYWORDS.has(m)) return m;
    if (/^\d+$/.test(m)) return m;
    stateReads.push(m);
    return `((${stateVar} as any).${m.replace(/\./g, '?.')} ?? 0)`;
  });
  for (let pi = phs.length - 1; pi >= 0; pi--) {
    const ph = phs[pi][0];
    const rep = phs[pi][1];
    c = c.split(ph + '[').join(rep + '?.[');
    c = c.split(ph).join(rep);
  }
  // QSP (expr) = 0 means "NOT expr" - convert (boolean_expr) === 0 to !(boolean_expr)
  // Skip when preceded by arithmetic operators (+, -, *, /, %) since the (expr) is an operand, not a boolean
  {
    let out = '';
    let i = 0;
    while (i < c.length) {
      if (c[i] === '(' && (i === 0 || !/\w/.test(c[i - 1]))) {
        // Check if preceded by arithmetic operator (skip spaces)
        let k = i - 1;
        while (k >= 0 && c[k] === ' ') k--;
        const prev = k >= 0 ? c[k] : '';
        const isArithOperand = /[+\-*/%]/.test(prev);
        // Find matching closing paren
        let depth = 1;
        let j = i + 1;
        while (j < c.length && depth > 0) {
          if (c[j] === '(') depth++;
          else if (c[j] === ')') depth--;
          j++;
        }
        // Check if followed by === 0
        if (!isArithOperand && depth === 0 && c.slice(j, j + 7) === ' === 0' && (j + 7 >= c.length || !/\w/.test(c[j + 7]))) {
          out += '(!(' + c.slice(i + 1, j - 1) + '))';
          i = j + 7;
        } else {
          out += c[i];
          i++;
        }
      } else {
        out += c[i];
        i++;
      }
    }
    c = out;
  }
  return c;
}

// Translate an assignment LHS that may be an array access with a literal or dynamic key.
//   word                 -> word
//   word['key']          -> word['key']           (literal key, '' unescaped)
//   word['<<x>>lit']     -> word[String(x)+'lit'] (dynamic key)
function translateAssignLhs(varName: string, stateReads: string[], stateVar: string = 's'): string {
  const arr = varName.match(/^(\w+)\['(.*)'\]$/);
  if (arr) {
    const obj = arr[1];
    const key = arr[2];
    stateReads.push(obj);
    if (key.includes('<<')) {
      const keyExpr = buildKeyExpr(key, stateReads, [], stateVar);
      return `${obj}[${keyExpr}]`;
    }
    return `${obj}['${key.replace(/''/g, "'")}']`;
  }
  const arrUnq = varName.match(/^(\w+)\[(\$?)(\w+)\]$/);
  if (arrUnq) {
    const obj = arrUnq[1];
    const idx = arrUnq[3];
    if (/^\d+$/.test(idx)) {
      stateReads.push(obj);
      return `${obj}[${idx}]`;
    }
    stateReads.push(obj, idx);
    return `${obj}[String((${stateVar} as any).${idx} ?? 0)]`;
  }
  const arrComplex = varName.match(/^(\w+)\[(.+)\]$/);
  if (arrComplex) {
    const obj = arrComplex[1];
    const key = arrComplex[2];
    stateReads.push(obj);
    const keyExpr = translateValue(key, stateReads, [], stateVar);
    return `${obj}[${keyExpr}]`;
  }
  return varName;
}

function translateValue(val: string, stateReads: string[], todos: string[], stateVar: string = 's', textContext: boolean = false): string {
  let v = val.trim();

  if (/^\u0000\d+\u0000$/.test(v)) return v;
  v = convertExecLinks(v, stateReads, todos, stateVar);

  const exprPhs: [string, string][] = [];
  // QSP & !! or & ! trailing comment (non-numeric values)
  const ampComment = v.match(/^(.*?)\s*&\s*!+/);
  if (ampComment) {
    v = ampComment[1].trim();
  }
  // QSP trailing *nl / *clr markers: "'text' & *nl"
  const nlMarker = v.match(/^(.*?)\s*&\s*\*\w+\s*$/);
  if (nlMarker) {
    v = nlMarker[1].trim();
  }
  // QSP FUNC('name', args...) → qspFunc(state, '$name', args...)
  if (/^FUNC\s*\(/.test(v)) {
    const openIdx = v.indexOf('(');
    let depth = 0, end = -1;
    let inStr = false;
    for (let j = openIdx; j < v.length; j++) {
      const ch = v[j];
      if (inStr) {
        if (ch === "'" && v[j - 1] !== '\\') inStr = false;
      } else {
        if (ch === "'") inStr = true;
        else if (ch === '(') depth++;
        else if (ch === ')') { depth--; if (depth === 0) { end = j; break; } }
      }
    }
    if (end !== -1) {
      const inner = v.slice(openIdx + 1, end);
      const args = splitTopLevel(inner).map(a => a.trim()).filter(a => a !== '');
      const fname = args[0] ? args[0].replace(/''/g, "'").replace(/^['"]|['"]$/g, '') : '';
      const rest = args.slice(1).map(a => translateValue(a, stateReads, todos, stateVar, textContext));
      const fmod = fname.startsWith('$') ? fname : `$${fname}`;
      return `qspFunc(${stateVar}, '${fmod}'${rest.length ? ', ' + rest.join(', ') : ''})`;
    }
  }
  // Pre-pass: handle <<expr>> inside single-quoted strings BEFORE unescapeDoubled
  // (so '' escapes are still visible for correct string boundary detection)
  // Skip if the value is a string concatenation (has + outside quotes)
  let _hasConcatPlus = false;
  {
    let _inStr = false, _strCh = '';
    for (let _ci = 0; _ci < v.length; _ci++) {
      const _ch = v[_ci];
      if (_inStr) {
        if (_ch === _strCh) {
          if (v[_ci + 1] === _strCh) { _ci++; }
          else _inStr = false;
        }
      } else {
        if (_ch === "'" || _ch === '"') { _inStr = true; _strCh = _ch; }
        else if (_ch === '+') { _hasConcatPlus = true; break; }
      }
    }
  }
  if (v.startsWith("'") && v.endsWith("'") && v.includes('<<') && v.includes('>>') && !_hasConcatPlus) {
    const content = v.slice(1, -1);
    const dynIdx = content.indexOf('<<');
    if (dynIdx !== -1) {
      // Verify the << is inside the string (not after a closing ')
      let inStr = true, strCh = "'";
      let realDynIdx = -1;
      for (let ci = 0; ci < content.length; ci++) {
        const ch = content[ci];
        if (inStr) {
          if (ch === "'") {
            if (content[ci + 1] === "'") { ci++; continue; }
            inStr = false;
          }
        } else {
          if (ch === "'" || ch === '"') { inStr = true; strCh = ch; }
        }
        if (ch === '<' && content[ci + 1] === '<' && inStr && strCh === "'") {
          realDynIdx = ci;
          break;
        }
      }
      if (realDynIdx !== -1) {
        // Find matching >>
        let depth = 0, k = realDynIdx;
        for (; k < content.length; k++) {
          if (content[k] === '<' && content[k + 1] === '<') { depth++; k++; }
          else if (content[k] === '>' && content[k + 1] === '>' && depth > 0) { depth--; k++; if (depth === 0) break; }
        }
        const pre = content.slice(0, realDynIdx);
        const inner = content.slice(realDynIdx + 2, k - 1).replace(/''/g, "'");
        const post = content.slice(k + 1);
        const exprTranslated = translateValue(inner.trim(), stateReads, todos, stateVar, textContext);
        const postTranslated = translateFragment(post, stateReads, todos, stateVar, textContext);
        return `'${esc(pre)}' + ${exprTranslated} + ${postTranslated}`;
      }
    }
  }
  // Pre-pass: handle <<expr>> inside double-quoted strings with "" escapes
  if (v.startsWith('"') && v.endsWith('"') && v.includes('<<') && v.includes('>>') && !_hasConcatPlus) {
    const content = v.slice(1, -1);
    // Find << that is inside the double-quoted string (not after a closing ")
    let inStr = true, strCh = '"';
    let realDynIdx = -1;
    for (let ci = 0; ci < content.length; ci++) {
      const ch = content[ci];
      if (inStr) {
        if (ch === '"') {
          if (content[ci + 1] === '"') { ci++; continue; }
          inStr = false;
        }
      } else {
        if (ch === "'" || ch === '"') { inStr = true; strCh = ch; }
      }
      if (ch === '<' && content[ci + 1] === '<' && inStr && strCh === '"') {
        realDynIdx = ci;
        break;
      }
    }
    if (realDynIdx !== -1) {
      let depth = 0, k = realDynIdx;
      for (; k < content.length; k++) {
        if (content[k] === '<' && content[k + 1] === '<') { depth++; k++; }
        else if (content[k] === '>' && content[k + 1] === '>' && depth > 0) { depth--; k++; if (depth === 0) break; }
      }
      const pre = content.slice(0, realDynIdx).replace(/""/g, '"');
      const inner = content.slice(realDynIdx + 2, k - 1).replace(/""/g, '"');
      const postRaw = content.slice(k + 1);
      const post = postRaw.replace(/""/g, '"');
      const exprTranslated = translateValue(inner.trim(), stateReads, todos, stateVar, textContext);
      const postTranslated = post.includes('<<') ? translateValue(`"${postRaw}"`, stateReads, todos, stateVar, textContext) : `'${esc(post)}'`;
      return `'${esc(pre)}' + ${exprTranslated} + ${postTranslated}`;
    }
  }
  const hasArith = /[+\-*/%]/.test(v) || /\bmod\b/.test(v);
  if (!hasArith && !/^\$?iif\(/.test(v)) {
    v = unescapeDoubled(v);
    v = v.replace(/''([^']+?)''/g, "'$1'");
    v = v.replace(/""<<(.+?)>>""/g, '<<$1>>');
  }
  // String concatenation: 'lit' + $var + 'lit' — split on + outside quotes, translate each part.
  // Only apply when no other arithmetic operators (-, *, /, %) are present, to avoid breaking mixed expressions.
  let hasOtherArith = false;
  {
    let inStr = false, strCh = '';
    for (let ci = 0; ci < v.length; ci++) {
      const ch = v[ci];
      if (inStr) {
        if (ch === strCh) {
          if (v[ci + 1] === strCh) { ci++; }
          else inStr = false;
        }
      } else {
        if (ch === "'" || ch === '"') { inStr = true; strCh = ch; }
        else if (/-|[*\/%]/.test(ch)) {

          hasOtherArith = true; break;
        }
      }
    }

  }
  if (hasArith && v.includes('+') && !hasOtherArith) {
    const parts: string[] = [];
    let cur = '', inStr = false, strCh = '', depth = 0;
    for (let ci = 0; ci < v.length; ci++) {
      const ch = v[ci];
      if (inStr) {
        cur += ch;
        if (ch === strCh) {
          if (v[ci + 1] === strCh) { cur += v[ci + 1]; ci++; }
          else inStr = false;
        }
      } else {
        if (ch === "'" || ch === '"') { inStr = true; strCh = ch; cur += ch; }
        else if (ch === '(' || ch === '[') { depth++; cur += ch; }
        else if (ch === ')' || ch === ']') { depth--; cur += ch; }
        else if (ch === '+' && depth === 0) { parts.push(cur.trim()); cur = ''; }
        else cur += ch;
      }
    }
    if (cur.trim()) parts.push(cur.trim());
    const hasStringPart = parts.some(p => {
      const t = p.trim();
      return (t.startsWith("'") && t.endsWith("'") && t.length >= 2) || (t.startsWith('"') && t.endsWith('"') && t.length >= 2);
    });
    if (parts.length >= 2 && hasStringPart) {
      const translated = parts.map(p => translateValue(p, stateReads, todos, stateVar, textContext));
      return translated.join(' + ');
    }
  }
  if (/^\d+$/.test(v)) return v.replace(/^0+(?=\d)/, '');
  if (/^-?\d+$/.test(v)) return v.startsWith('-') ? `(${v.replace(/^0+(?=\d)/, '')})` : v;
  if (/^\d+\.\d+$/.test(v)) return v;
  if (v === '' || v === "''" || v === '""') return "''";
  if (v.startsWith("'") && v.endsWith("'") && !v.includes('<<')) return `'${esc(v.slice(1, -1))}'`;
  if (v.startsWith('"') && v.endsWith('"') && !v.includes('<<')) return `'${esc(v.slice(1, -1))}'`;
  // QSP modARGS[N] in value context (module args = locArgs)
  const modArgsMatch = v.match(/^(?:\$)?modARGS\[(\d+)\]$/);
  if (modArgsMatch) {
    return textContext
      ? `((${stateVar} as any).locArgs?.[${modArgsMatch[1]}] ?? '')`
      : `((${stateVar} as any).locArgs?.[${modArgsMatch[1]}] ?? 0)`;
  }
  // QSP $ARGS[N] in value context ($ARGS[0]=first arg=locArgs[0])
  const argsMatch = v.match(/^(?:\$)?ARGS\[(\d+)\]$/);
  if (argsMatch) {
    return textContext
      ? `((${stateVar} as any).locArgs?.[${argsMatch[1]}] ?? '')`
      : `((${stateVar} as any).locArgs?.[${argsMatch[1]}] ?? 0)`;
  }
  // QSP array access: WORD['key'] or WORD["key"] where key may contain <<expr>> dynamics and '' escapes.
  // Key must not contain a closing quote-bracket ('] or "]) so a whole arithmetic expression
  // like WORD['a'] - WORD['b'] is NOT swallowed as a single access.
  const arrAcc = v.match(/^(\$?[\w.]+)\[(['"])((?:(?!\2\]).)*)\2\]$/);
  if (arrAcc) {
    const obj = arrAcc[1].replace(/^\$/, '').replace(/\./g, '?.');
    const key = arrAcc[3];
    stateReads.push(arrAcc[1].replace(/^\$/, ''));
    const keyExpr = buildKeyExpr(key, stateReads, todos, stateVar);
    const fb = textContext ? " ?? ''" : '';
    return `(((${stateVar} as any).${obj} ?? 0)?.[${keyExpr}]${fb})`;
  }
  // QSP array access with unquoted variable key: WORD[var] or WORD[$var]
  const arrAccUnq = v.match(/^(\$?[\w.]+)\[\$?([a-zA-Z_]\w*)\]$/);
  if (arrAccUnq) {
    const obj = arrAccUnq[1].replace(/^\$/, '').replace(/\./g, '?.');
    const idx = arrAccUnq[2];
    stateReads.push(arrAccUnq[1].replace(/^\$/, ''), idx);
    const fb = textContext ? " ?? ''" : " ?? 0";
    return `(((${stateVar} as any).${obj} ?? 0)?.[String((${stateVar} as any).${idx} ?? 0)]${fb})`;
  }
  // QSP array access with literal integer key: WORD[1] or WORD[0]
  const arrAccInt = v.match(/^(\$?[\w.]+)\[(\d+)\]$/);
  if (arrAccInt) {
    const obj = arrAccInt[1].replace(/^\$/, '').replace(/\./g, '?.');
    const idx = arrAccInt[2];
    stateReads.push(arrAccInt[1].replace(/^\$/, ''));
    const fb = textContext ? " ?? ''" : " ?? 0";
    return `(((${stateVar} as any).${obj} ?? 0)?.[${idx}]${fb})`;
  }
  // QSP array access with dynamic key: WORD['lit' + $var + 'lit'] or WORD[$var + 'lit']
  // Find matching ] by tracking bracket depth (handles nested WORD['key'] in the key).
  {
    const m = v.match(/^(\$?[\w.]+)\[/);
    if (m) {
      const obj = m[1];
      let depth = 0, end = -1, inStr = false, strCh = '';
      const start = m[0].length - 1;
      for (let j = start; j < v.length; j++) {
        const ch = v[j];
      if (inStr) { if (ch === strCh) { if (strCh === "'" && v[j + 1] === "'") { j++; } else inStr = false; } continue; }
        if (ch === "'" || ch === '"') { inStr = true; strCh = ch; continue; }
        if (ch === '[') depth++;
        else if (ch === ']') { depth--; if (depth === 0) { end = j; break; } }
      }
      if (end !== -1 && v.slice(end + 1).trim() === '') {
        const rawKey = v.slice(start + 1, end);
        if (rawKey.includes('+') || rawKey.includes('$')) {
          const keyExpr = translateValue(rawKey, stateReads, todos, stateVar, textContext);
          stateReads.push(obj.replace(/^\$/, ''));
          const fb = textContext ? " ?? ''" : " ?? 0";
          return `(((${stateVar} as any).${obj.replace(/^\$/, '').replace(/\./g, '?.')} ?? 0)?.[${keyExpr}]${fb})`;
        }
      }
    }
  }
  // QSP array access with function call index: WORD[func(args)]
  {
    const m = v.match(/^(\$?[\w.]+)\[/);
    if (m) {
      const obj = m[1];
      let depth = 0, end = -1, inStr = false, strCh = '';
      const start = m[0].length - 1;
      for (let j = start; j < v.length; j++) {
        const ch = v[j];
        if (inStr) { if (ch === strCh) { if (strCh === "'" && v[j + 1] === "'") { j++; } else inStr = false; } continue; }
        if (ch === "'" || ch === '"') { inStr = true; strCh = ch; continue; }
        if (ch === '[') depth++;
        else if (ch === ']') { depth--; if (depth === 0) { end = j; break; } }
      }
      if (end !== -1 && v.slice(end + 1).trim() === '') {
        const rawKey = v.slice(start + 1, end);
        if (/^[\w$]+\s*\(/.test(rawKey) && !rawKey.includes('+') && !rawKey.includes('$')) {
          const keyExpr = translateValue(rawKey, stateReads, todos, stateVar, textContext);
          stateReads.push(obj.replace(/^\$/, ''));
          const fb = textContext ? " ?? ''" : " ?? 0";
          return `(((${stateVar} as any).${obj.replace(/^\$/, '').replace(/\./g, '?.')} ?? 0)?.[${keyExpr}]${fb})`;
        }
      }
    }
  }
  // QSP range: "N-M rest of line is comment" (e.g. "1-7 scale, based on...")
  const rangeMatch = v.match(/^(\d+)\s*-\s*(\d+)\s+\w/);
  if (rangeMatch) {
    const a = parseInt(rangeMatch[1]);
    const b = parseInt(rangeMatch[2]);
    return `(Math.floor(Math.random() * ${b - a + 1}) + ${a})`;
  }
  // QSP "N: comment" pattern (e.g. "1: Stripper shoes")
  const colonComment = v.match(/^(-?\d+(?:\.\d+)?)\s*:\s*\w/);
  if (colonComment) {
    return colonComment[1];
  }
  // QSP trailing comments: "0 & !! comment", "1 Some text", "4 had 2nd", "0 & 'text'"
  const numComment = v.match(/^(-?\d+(?:\.\d+)?)\s*(?:&\s*!!|&\s*\w+\s*=|&\s*'|\s+\w)/);
  if (numComment) {
    if (v.match(/^(-?\d+(?:\.\d+)?)\s*&\s*\w+\s*=/)) {
      todos.push(`compound assign: ${truncate(v, 60)}`);
    }
    return numComment[1];
  }
  // QSP <<expr>> inline in value
  if (v.includes('<<') && v.includes('>>')) {
    const inner = v.match(/^<<(.+?)>>$/);
    if (inner) {
      return translateValue(inner[1].trim(), stateReads, todos, stateVar, textContext);
    }
    // QSP dynamic variable name blocks — skip for iif() expressions because their
    // char-by-char quote tracking strips '' (escaped quotes) that the iif() handler needs.
    if (!/^\$?iif\(/.test(v)) {
    // QSP dynamic variable name: prefix<<$var['key']>> -> dynamic property access (quote-aware)
    {
      let out = '';
      let i = 0;
      let inQ = false;
      let qCh = '';
      while (i < v.length) {
        if (inQ) {
          if (v[i] === qCh) {
            if (v[i + 1] === qCh) { i += 2; continue; }
            inQ = false;
          }
          out += v[i];
          i++;
        } else {
          if (v[i] === "'" || v[i] === '"') { inQ = true; qCh = v[i]; out += v[i]; i++; }
          else {
            const m = /^([a-zA-Z_]\w*)<<\$([a-zA-Z_]\w*)\[(['"])(.+?)\3\]>>/.exec(v.slice(i));
            if (m) {
              const ph = `\u0001${exprPhs.length}\u0001`;
              exprPhs.push([ph, `((${stateVar} as any)['${m[1]}' + ((${stateVar} as any).${m[2]} ?? {})['${m[4]}']] ?? 0)`]);
              stateReads.push(m[2]);
              out += ph;
              i += m[0].length;
            } else {
              out += v[i];
              i++;
            }
          }
        }
      }
      v = out;
    }
    // QSP dynamic variable name: prefix<<var>>_suffix -> dynamic property access (quote-aware)
    {
      let out = '';
      let i = 0;
      let inQ = false;
      let qCh = '';
      while (i < v.length) {
        if (inQ) {
          if (v[i] === qCh) {
            if (v[i + 1] === qCh) { i += 2; continue; }
            inQ = false;
          }
          out += v[i];
          i++;
        } else {
          if (v[i] === "'" || v[i] === '"') { inQ = true; qCh = v[i]; out += v[i]; i++; }
          else {
            const m = /^([a-zA-Z_]\w*)<<\$?([a-zA-Z_]\w*)>>(_[a-zA-Z_]\w*)/.exec(v.slice(i));
            if (m) {
              const ph = `\u0001${exprPhs.length}\u0001`;
              exprPhs.push([ph, `((${stateVar} as any)[('${m[1]}' + String((${stateVar} as any).${m[2]} ?? 0)) + '${m[3]}'] ?? 0)`]);
              stateReads.push(m[2]);
              out += ph;
              i += m[0].length;
            } else {
              out += v[i];
              i++;
            }
          }
        }
      }
      v = out;
    }
    // QSP dynamic variable name: <<$var['key']>>_suffix -> dynamic property access (quote-aware)
    {
      let out = '';
      let i = 0;
      let inQ = false;
      let qCh = '';
      while (i < v.length) {
        if (inQ) {
          if (v[i] === qCh) {
            if (v[i + 1] === qCh) { i += 2; continue; }
            inQ = false;
          }
          out += v[i];
          i++;
        } else {
          if (v[i] === "'" || v[i] === '"') { inQ = true; qCh = v[i]; out += v[i]; i++; }
          else {
            const m = /^<<\$([a-zA-Z_]\w*)\[(['"])(.+?)\2\]>>(_[a-zA-Z_]\w*)/.exec(v.slice(i));
            if (m) {
              const ph = `\u0001${exprPhs.length}\u0001`;
              exprPhs.push([ph, `((${stateVar} as any)[((${stateVar} as any).${m[1]} ?? {})['${m[3]}'] + '${m[4]}'] ?? 0)`]);
              stateReads.push(m[1]);
              out += ph;
              i += m[0].length;
            } else {
              out += v[i];
              i++;
            }
          }
        }
      }
      v = out;
    }
    // QSP dynamic variable name: <<$var>>_suffix -> dynamic property access
    // Only match when NOT inside single/double quotes (those are handled by array-access handler)
    {
      let out = '';
      let i = 0;
      let inQ = false;
      let qCh = '';
      while (i < v.length) {
        if (inQ) {
          if (v[i] === qCh) {
            if (v[i + 1] === qCh) { i += 2; continue; }
            inQ = false;
          }
          out += v[i];
          i++;
        } else {
          if (v[i] === "'" || v[i] === '"') { inQ = true; qCh = v[i]; out += v[i]; i++; }
          else {
            const m = /^<<\$([a-zA-Z_]\w*)>>(_[a-zA-Z_]\w*)/.exec(v.slice(i));
            if (m) {
              const ph = `\u0001${exprPhs.length}\u0001`;
              exprPhs.push([ph, `((${stateVar} as any)[((${stateVar} as any).${m[1]} ?? '') + '${m[2]}'] ?? 0)`]);
              stateReads.push(m[1]);
              out += ph;
              i += m[0].length;
            } else {
              out += v[i];
              i++;
            }
          }
        }
      }
      v = out;
    }
    }
    // <<expr>> embedded in a larger expression. Skip <<...>> inside quoted array keys —
    // those are handled by the arithmetic branch's replaceArrayAccesses + buildKeyExpr.
    v = replaceDynamicsOutsideQuotes(v, (expr) => {
      const translated = translateValue(expr.trim(), stateReads, todos, stateVar, textContext);
      const ph = `\u0001${exprPhs.length}\u0001`;
      exprPhs.push([ph, translated]);
      return ph;
    });
    if (((v.startsWith("'") && v.endsWith("'")) || (v.startsWith('"') && v.endsWith('"'))) && exprPhs.length > 0) {
      const content = v.slice(1, -1);
      const parts = content.split(/(\u0001\d+\u0001)/g);
      const segments: string[] = [];
      for (const part of parts) {
        const phMatch = part.match(/^\u0001(\d+)\u0001$/);
        if (phMatch) {
          segments.push(exprPhs[parseInt(phMatch[1])][1]);
        } else if (part !== '') {
          segments.push(`'${esc(part)}'`);
        }
      }
      return segments.join(' + ');
    }
  }
  // QSP input function: argument is a QSP string expression (may contain <<...>>
  // dynamics and/or concatenation like "str" + iif(...)). Translate the whole
  // argument as a value so both dynamics and concatenation are evaluated.
  const inputParen = v.match(/^\$?input\s*\((.*)\)$/s);
  const inputSpace = v.match(/^\$?input\s+'(.*)'$/);
  const inputMatch = inputParen || inputSpace;
  if (inputMatch) {
    let arg = inputMatch[1].trim();
    // Space form (input 'str') had its quotes stripped by the regex; re-quote so
    // it is treated as a string literal, not a bare expression.
    if (!inputParen && !/^['"]/.test(arg)) arg = `'${arg}'`;
    const strMatch = arg.match(/^['"](.*)['"]$/s);
    let promptExpr: string;
    if (strMatch) {
      // Single quoted string: unescape '' and translate any <<...>> dynamics.
      const prompt = strMatch[1].replace(/''/g, "'");
      if (prompt.includes('<<')) {
        const parts: string[] = [];
        const re = /<<(.+?)>>/g;
        let last = 0, m: RegExpExecArray | null;
        while ((m = re.exec(prompt)) !== null) {
          if (m.index > last) parts.push(JSON.stringify(prompt.slice(last, m.index)));
          parts.push(`(${translateCondition(m[1].trim(), stateReads, todos, stateVar)})`);
          last = m.index + m[0].length;
        }
        if (last < prompt.length) parts.push(JSON.stringify(prompt.slice(last)));
        promptExpr = parts.join(' + ');
      } else {
        promptExpr = JSON.stringify(prompt);
      }
    } else {
      // Complex expression (e.g. "str" + iif(...)): translate as a QSP value so
      // concatenation and nested dynamics are evaluated.
      promptExpr = translateValue(arg, stateReads, todos, stateVar, true);
    }
    todos.push(`input: ${truncate(arg, 60)}`);
    return `window.prompt(${promptExpr}) ?? ''`;
  }
  // QSP & gs / & gt / & killvar statement separator
  const gsMatch = v.match(/^(.*?)\s*&\s*(gs|gt|killvar)\s+/);
  if (gsMatch) {
    const before = gsMatch[1];
    let inStr = false, strCh = '';
    for (const ch of before) {
      if (inStr) { if (ch === strCh) inStr = false; }
      else if (ch === "'" || ch === '"') { inStr = true; strCh = ch; }
    }
    if (!inStr) {
      todos.push(`stmt sep: ${truncate(v, 60)}`);
      return translateValue(gsMatch[1].trim(), stateReads, todos, stateVar, textContext);
    }
  }
  // QSP variable names with spaces (no operators present)
  if (/\s/.test(v) && !/[+\-*/%=<>!&]/.test(v) && !/\b(or|and|not|mod|else)\b/.test(v) && !v.includes('(') && !v.includes(')') && !v.includes("'") && !v.includes('"')) {
    const name = v.replace(/\s+/g, '_').replace(/\(.*\)/, '');
    stateReads.push(name);
    return `((${stateVar} as any).${name} ?? 0)`;
  }
  // QSP (if <condition>) inline expression
  const ifExpr = v.match(/^\(if\s+(.+)\)$/);
  if (ifExpr) {
    return `(${translateCondition(ifExpr[1].trim(), stateReads, todos, stateVar)})`;
  }
  // QSP paren-wrapped condition: (a > 0), (a = b), (a > 0 or b > 0), etc.
  // Skip if the outer parens wrap an arithmetic expression (contains +, -, *, / at depth 1)
  const parenCond = v.match(/^\((.+)\)$/);
  if (parenCond && /(<>)|(!=)|(>=)|(<=)|\s[<>]\s|\s=\s/.test(parenCond[1])) {
    let hasArithAtDepth1 = false;
    let d = 0, inS = false;
    for (let ci = 0; ci < parenCond[1].length; ci++) {
      const ch = parenCond[1][ci];
      if (inS) { if (ch === "'") inS = false; continue; }
      if (ch === "'") { inS = true; continue; }
      if (ch === '(') d++;
      else if (ch === ')') d--;
      else if (d === 1 && /[+\-*/]/.test(ch)) { hasArithAtDepth1 = true; break; }
    }
    if (!hasArithAtDepth1) {
      return `(${translateCondition(parenCond[1].trim(), stateReads, todos, stateVar)})`;
    }
  }
  // QSP arrsize() function
  if (/^arrsize\(/.test(v)) {
    todos.push(`arrsize: ${truncate(v, 60)}`);
    return '0';
  }
  // iif(cond, a, b) - must be checked before the condition-like branch (cond contains comparisons)
  if (/^\$?iif\(/.test(v)) {
    const openIdx = v.indexOf('(');
    let depth = 0, end = -1, inStr = false, strCh = '';
    for (let j = openIdx; j < v.length; j++) {
      const ch = v[j];
      if (inStr) { if (ch === strCh) inStr = false; continue; }
      if (ch === "'" || ch === '"') { inStr = true; strCh = ch; continue; }
      if (ch === '(') depth++;
      else if (ch === ')') { depth--; if (depth === 0) { end = j; break; } }
    }
    if (end !== -1 && v.slice(end + 1).trim() === '') {
      const inner = v.slice(openIdx + 1, end);
      const parts = splitTopLevel(inner);
      if (parts.length === 3) {
        const cond = translateCondition(parts[0].trim(), stateReads, todos, stateVar);
        const a = translateValue(parts[1].trim(), stateReads, todos, stateVar, textContext);
        const b = translateValue(parts[2].trim(), stateReads, todos, stateVar, textContext);
        return `((${cond}) ? (${a}) : (${b}))`;
      }
    }
    todos.push(`iif: ${truncate(v, 60)}`);
    return `'TODO'`;
  }
  // Condition-like expression in value context (contains or/and/top-level comparison)
  if (/\b(or|and)\b/.test(v) || hasTopLevelComparison(v)) {
    return translateCondition(v, stateReads, todos, stateVar);
  }
  // func(...) = value comparison in value context
  if (/\)\s*=\s*/.test(v) && !/\+=|-=|\*=|\/=|&=|==/.test(v)) {
    return translateCondition(v, stateReads, todos, stateVar);
  }
  // dyneval() - QSP dynamic evaluation, treat as 0 with TODO
  if (/dyneval\(/.test(v)) {
    todos.push(`dyneval: ${truncate(v, 80)}`);
    return '0';
  }
  if (/^(\$?func)\s*\(/.test(v)) {
    const openIdx = v.indexOf('(');
    let depth = 0;
    let end = -1;
    let inStr = false;
    for (let j = openIdx; j < v.length; j++) {
      const ch = v[j];
      if (inStr) {
        if (ch === "'") {
          if (v[j + 1] === "'") j++;
          else inStr = false;
        }
      } else if (ch === "'") inStr = true;
      else if (ch === '(') depth++;
      else if (ch === ')') {
        depth--;
        if (depth === 0) { end = j; break; }
      }
    }
    if (end === -1) {
      todos.push(`unbalanced $func: ${truncate(v, 60)}`);
      return '0';
    }
    const tail = v.slice(end + 1).trim();
    if (tail !== '') {
      // trailing arithmetic/concatenation: fall through to the arithmetic branch
      // (which calls replaceFuncCalls on the whole expression)
    } else {
      const inner = v.slice(openIdx + 1, end);
      const args = splitTopLevel(inner).map(a => a.trim()).filter(a => a !== '');
      const mod = args[0] ? args[0].replace(/''/g, "'").replace(/^['"]|['"]$/g, '') : '';
      let fn = '';
      let restArgs: string[];
      if (mod.startsWith('$')) {
        restArgs = args.slice(1);
      } else {
        const rawFn = args[1] || '';
        const unescapedFn = rawFn.replace(/''/g, "'");
        if (/^['"].*['"]$/.test(unescapedFn)) {
          fn = unescapedFn.replace(/^['"]|['"]$/g, '');
        } else {
          fn = translateValue(unescapedFn, stateReads, todos, stateVar, textContext);
        }
        restArgs = args.slice(2);
      }
      const rest = restArgs.map(a => translateValue(a, stateReads, todos, stateVar, textContext));
      const fnArg = (fn.startsWith('(') || fn.startsWith('String') || fn.includes('as any')) ? fn : `'${esc(fn)}'`;
      return `qspFunc(${stateVar}, '${esc(mod)}', ${fnArg}${rest.length ? ', ' + rest.join(', ') : ''})`;
    }
  }
  if (/^(rand|random)\(/i.test(v)) {
    const m = v.match(/^(?:rand|random)\((\d+)(?:\s*,\s*(\d+))?\)$/i);
    if (m) {
      const a = parseInt(m[1]);
      if (m[2] !== undefined) {
        const b = parseInt(m[2]);
        return `(Math.floor(Math.random() * ${b - a + 1}) + ${a})`;
      }
      return `(Math.floor(Math.random() * ${a}))`;
    }
    // Complex args: rand(expr1, expr2) or rand(expr)
    const openIdx = v.indexOf('(');
    let depth = 0, end = -1;
    for (let j = openIdx; j < v.length; j++) {
      if (v[j] === '(') depth++;
      else if (v[j] === ')') { depth--; if (depth === 0) { end = j; break; } }
    }
    if (end !== -1) {
      const inner = v.slice(openIdx + 1, end);
      const args = splitTopLevel(inner).map(a => a.trim()).filter(a => a !== '');
      if (args.length === 2) {
        const aT = translateValue(args[0], stateReads, todos, stateVar, textContext);
        const bT = translateValue(args[1], stateReads, todos, stateVar, textContext);
        return `(Math.floor(Math.random() * (${bT} - ${aT} + 1)) + (${aT}))`;
      } else if (args.length === 1) {
        const aT = translateValue(args[0], stateReads, todos, stateVar, textContext);
        return `(Math.floor(Math.random() * (${aT} + 1)))`;
      }
    }
  }
  if (/^randInt\(/i.test(v)) {
    const m = v.match(/^randInt\((\d+),\s*(\d+)\)$/i);
    if (m) {
      const a = parseInt(m[1]);
      const b = parseInt(m[2]);
      return `(Math.floor(Math.random() * ${b - a + 1}) + ${a})`;
    }
  }
  if (/^(?:\$)?ARGS\[(\d+)\]$/.test(v)) {
    const idx = v.match(/^(?:\$)?ARGS\[(\d+)\]$/)![1];
    return textContext
      ? `(${stateVar} as any).locArgs?.[${idx}] ?? ''`
      : `(${stateVar} as any).locArgs?.[${idx}] ?? 0`;
  }
  if (/^\$locat\['([^']+)'\]$/.test(v)) {
    const key = v.match(/^\$locat\['([^']+)'\]$/)![1];
    return `(${stateVar} as any).locat?.['${key}'] ?? 0`;
  }
  if (TS_KEYWORDS.has(v)) return v;
  const builtinCall = v.match(/^(\$?)(\w+)\s*\(/);
  if (builtinCall && BUILTIN_FUNCS[builtinCall[2]]) {
    const fnName = builtinCall[2];
    const openIdx = v.indexOf('(', builtinCall[0].length - 1);
    let depth = 0, end = -1, inStr = false, strCh = '';
    for (let j = openIdx; j < v.length; j++) {
      const ch = v[j];
      if (inStr) {
        if (ch === strCh) { if (v[j + 1] === strCh) { j++; continue; } inStr = false; }
        continue;
      }
      if (ch === "'" || ch === '"') { inStr = true; strCh = ch; continue; }
      if (ch === '(') depth++;
      else if (ch === ')') { depth--; if (depth === 0) { end = j; break; } }
    }
    if (end === v.length - 1) {
      const bArgs = splitTopLevel(v.slice(openIdx + 1, end)).map(a => a.trim()).filter(a => a !== '');
      const bTranslated = bArgs.map(a => translateValue(a, stateReads, todos, stateVar, textContext));
      return BUILTIN_FUNCS[fnName](bTranslated);
    }
  }
  if (/[+\-*/%]/.test(v) || /\bmod\b/.test(v)) {
    const phs: [string, string][] = [];
    // Unicode fractions and operators
    v = v.replace(/¾/g, '(3/4)').replace(/⅔/g, '(2/3)').replace(/¼/g, '(1/4)').replace(/⅓/g, '(1/3)').replace(/×/g, '*').replace(/−/g, '-');
    // Strip leading zeros from numeric literals (not quoted keys) to avoid octal/invalid literals
    v = v.replace(/(?<!')\b(\d+)\b/g, (n) => n.replace(/^0+(?=\d)/, ''));
    // QSP (if <condition>) embedded in arithmetic: number (if cond) = number * (cond ? 1 : 0)
    v = v.replace(/(\d+)\s*\(if\s+(.+?)\)/g, (_, num, cond) => {
      const ph = `\u0000${phs.length}\u0000`;
      phs.push([ph, `${num} * (${translateCondition(cond.trim(), stateReads, todos, stateVar)} ? 1 : 0)`]);
      return ph;
    });
    v = v.replace(/\(if\s+(.+?)\)/g, (_, cond) => {
      const ph = `\u0000${phs.length}\u0000`;
      phs.push([ph, `(${translateCondition(cond.trim(), stateReads, todos, stateVar)} ? 1 : 0)`]);
      return ph;
    });
    // QSP inline else: "expr else expr2"
    const elseMatch = v.match(/^(.*?)\s+else\s+(.+)$/);
    if (elseMatch) {
      todos.push(`inline else: ${truncate(v, 60)}`);
      v = elseMatch[1].trim();
    }
    // QSP iif() embedded in arithmetic (paren-aware, quotes tracked)
    v = replaceBalanced(v, 'iif', (args) => {
      const parts = splitTopLevel(args);
      if (parts.length === 3) {
        const cond = translateCondition(parts[0].trim(), stateReads, todos, stateVar);
        const a = translateValue(parts[1].trim(), stateReads, todos, stateVar, textContext);
        const b = translateValue(parts[2].trim(), stateReads, todos, stateVar, textContext);
        const ph = `\u0000${phs.length}\u0000`;
        phs.push([ph, `((${cond}) ? (${a}) : (${b}))`]);
        return ph;
      }
      return args;
    });
    // WORD[$var] dynamic array indexing
    v = v.replace(/\b([a-zA-Z_]\w*)\[\$?([a-zA-Z_]\w*)\]/g, (_, obj, idx) => {
      const ph = `\u0000${phs.length}\u0000`;
      phs.push([ph, `(((${stateVar} as any).${obj} ?? 0)?.[String((${stateVar} as any).${idx} ?? 0)] ?? 0)`]);
      stateReads.push(obj, idx);
      return ph;
    });
    v = v.replace(/(?:\$)?ARGS\[\]/g, () => {
      const ph = `\u0000${phs.length}\u0000`;
      phs.push([ph, `((${stateVar} as any).locArgs ?? 0)`]);
      return ph;
    });
    v = v.replace(/(?:\$)?ARGS\[(\d+)\]/g, (_, idx) => {
      const ph = `\u0000${phs.length}\u0000`;
      phs.push([ph, textContext
        ? `((${stateVar} as any).locArgs?.[${idx}] ?? '')`
        : `((${stateVar} as any).locArgs?.[${idx}] ?? 0)`]);
      return ph;
    });
    v = v.replace(/\$locat\['([^']+)'\]/g, (_, key) => {
      const ph = `\u0000${phs.length}\u0000`;
      phs.push([ph, `((${stateVar} as any).locat?.['${key}'] ?? 0)`]);
      return ph;
    });
    v = v.replace(/\$locat\[(\d+)\]/g, (_, idx) => {
      const ph = `\u0000${phs.length}\u0000`;
      phs.push([ph, `((${stateVar} as any).locat?.[${idx}] ?? 0)`]);
      return ph;
    });
    // QSP func() calls embedded in arithmetic
    v = replaceFuncCalls(v, stateReads, todos, stateVar, phs, textContext);
    // QSP built-in functions embedded in arithmetic
    v = replaceBuiltinFuncs(v, stateReads, todos, stateVar, phs, textContext);
    // Handle <<expr>> inside single-quoted strings in arithmetic expressions
    {
      let out = '';
      let i = 0;
      while (i < v.length) {
        if (v[i] === "'") {
          let j = i + 1;
          let dynStart = -1;
          let dynDepth = 0;
          while (j < v.length) {
            if (dynDepth > 0) {
              if (v[j] === '<' && v[j + 1] === '<') { dynDepth++; j += 2; continue; }
              if (v[j] === '>' && v[j + 1] === '>') { dynDepth--; j += 2; continue; }
              if (v[j] === "'") {
                let k = j + 1;
                while (k < v.length && v[k] !== "'") k++;
                j = k + 1;
                continue;
              }
              j++;
              continue;
            }
            if (v[j] === '<' && v[j + 1] === '<') {
              if (dynStart === -1) dynStart = j;
              dynDepth = 1;
              j += 2;
              continue;
            }
              if (v[j] === "'") {
                if (v[j + 1] === "'") { j += 2; continue; }
                if (dynStart === -1 && v.slice(i + 1, j).includes('<<')) { j++; continue; }
                break;
              }
            j++;
          }
          if (dynStart !== -1) {
            let depth = 0, k = dynStart;
            for (; k < v.length; k++) {
              if (v[k] === '<' && v[k + 1] === '<') { depth++; k++; }
              else if (v[k] === '>' && v[k + 1] === '>' && depth > 0) { depth--; k++; if (depth === 0) break; }
            }
            const pre = v.slice(i + 1, dynStart);
            const inner = v.slice(dynStart + 2, k - 1).replace(/''/g, "'");
            const post = v.slice(k + 1, j);
            const ph = `\u0000${phs.length}\u0000`;
            const exprTranslated = translateValue(inner.trim(), stateReads, todos, stateVar, textContext);
            phs.push([ph, `'${esc(pre)}' + ${exprTranslated} + '${esc(post)}'`]);
            out += ph;
            i = j + 1;
          } else {
            out += v.slice(i, j + 1);
            i = j + 1;
          }
        } else {
          out += v[i];
          i++;
        }
      }
      v = out;
    }
    v = v.replace(/""<<(.+?)>>""/g, '<<$1>>');
    // QSP array accesses WORD['key'] embedded in arithmetic (protect key from identifier replacement)
    v = replaceArrayAccesses(v, stateReads, todos, stateVar, phs);
    // Strip $ prefix from remaining QSP variable names
    v = v.replace(/\$([a-zA-Z_]\w*)/g, '$1');
    v = v.replace(/\bmod\b/g, '%');
    // QSP rand/random calls (handle nested by looping until no more matches)
    let prevV = '';
    while (prevV !== v && /\b(?:rand|random)\s*\(/i.test(v)) {
      prevV = v;
      // Two-arg: rand(a, b)
      v = v.replace(/\b(?:rand|random)\s*\(([^,()]+),\s*([^()]+)\)/gi, (_, a, b) => {
        const ph = `\u0000${phs.length}\u0000`;
        const aStr = a.trim();
        const bStr = b.trim();
        if (/^\d+$/.test(aStr) && /^\d+$/.test(bStr)) {
          const ai = parseInt(aStr);
          const bi = parseInt(bStr);
          phs.push([ph, `(Math.floor(Math.random() * ${bi - ai + 1}) + ${ai})`]);
        } else {
          const aT = translateValue(aStr, stateReads, todos, stateVar, textContext);
          const bT = translateValue(bStr, stateReads, todos, stateVar, textContext);
          phs.push([ph, `(Math.floor(Math.random() * (${bT} - ${aT} + 1)) + (${aT}))`]);
        }
        return ph;
      });
      // Single-arg: rand(n)
      v = v.replace(/\b(?:rand|random)\s*\(([^()]+)\)/gi, (_, a) => {
        const ph = `\u0000${phs.length}\u0000`;
        const aStr = a.trim();
        if (/^\d+$/.test(aStr)) {
          phs.push([ph, `(Math.floor(Math.random() * ${parseInt(aStr) + 1}))`]);
        } else {
          const aT = translateValue(aStr, stateReads, todos, stateVar, textContext);
          phs.push([ph, `(Math.floor(Math.random() * (${aT} + 1)))`]);
        }
        return ph;
      });
    }
    // String-aware identifier replacement (handles '' as escaped quote → \')
    {
      let out = '';
      let i = 0;
      let inStr = false;
      while (i < v.length) {
        const ch = v[i];
        if (ch === "'") {
          if (inStr && v[i + 1] === "'") {
            out += "\\'";
            i += 2;
          } else {
            inStr = !inStr;
            out += ch;
            i++;
          }
        } else if (inStr) {
          out += ch;
          i++;
        } else {
          const m = v.slice(i).match(/^([a-zA-Z_]\w*(?:\.[a-zA-Z_]\w*)*)/);
          if (m) {
            const ident = m[1];
            if (TS_SYNTAX_KEYWORDS.has(ident)) {
              out += ident;
            } else {
              stateReads.push(ident);
              out += textContext
                ? `((${stateVar} as any).${ident.replace(/\./g, '?.')} ?? '')`
                : `((${stateVar} as any).${ident.replace(/\./g, '?.')} ?? 0)`;
            }
            i += ident.length;
          } else {
            out += ch;
            i++;
          }
        }
      }
      v = out;
    }
    // Digit-leading tokens (e.g. "170cm") are not valid TS identifiers
    v = v.replace(/\b(\d+[a-zA-Z_]\w*)\b/g, `((${stateVar} as any).'$1' ?? 0)`);
    for (let pi = phs.length - 1; pi >= 0; pi--) {
      const before = v.includes(phs[pi][0]) ? 'FOUND' : 'MISSING';
      v = v.split(phs[pi][0]).join(phs[pi][1]);
      if (v.includes('31 +')) {
        const idx = v.indexOf('qspUntranslated');
        const chunk = idx >= 0 ? v.substring(idx, idx + 40) : 'N/A';
        const hex = [...chunk].map(c => c.charCodeAt(0) < 32 ? `\\x${c.charCodeAt(0).toString(16)}` : c).join('');
      }
    }
    for (let pi = exprPhs.length - 1; pi >= 0; pi--) {
      const ph = exprPhs[pi][0];
      const rep = exprPhs[pi][1];
      // If placeholder is immediately followed by '[', use '?.[' for safe chaining
      v = v.split(ph + '[').join(rep + '?.[');
      v = v.split(ph).join(rep);
    }
    return v;
  }
  // Documentation-style values with unquoted spaces (e.g. "number of dates (after 10)")
  if (/\s/.test(v) && !v.includes("'") && !v.includes('"')) {
    todos.push(`value with spaces: ${truncate(v, 60)}`);
    return '0';
  }
  // Strip $ prefix from remaining QSP variable names
  v = v.replace(/\$([a-zA-Z_]\w*)/g, '$1');
  if (/^[a-zA-Z_]\w*(?:\.[a-zA-Z_]\w*)*$/.test(v)) {
    stateReads.push(v);
    return textContext
      ? `((${stateVar} as any).${v.replace(/\./g, '?.')} ?? '')`
      : `((${stateVar} as any).${v.replace(/\./g, '?.')} ?? 0)`;
  }
  for (let pi = exprPhs.length - 1; pi >= 0; pi--) {
    v = v.split(exprPhs[pi][0]).join(exprPhs[pi][1]);
  }
  // Noisy fallback: unrecognized value -> qspUntranslated (warns in dev, throws in test)
  stateReads.push(v);
  metrics.fallbackCount++;
  return `qspUntranslated(${stateVar}, ${JSON.stringify(v)}, { location: ${JSON.stringify(currentLocName)} })`;
}

function extractDescription(nodes: QspNode[]): string | null {
  for (const n of nodes) {
    if (n.kind === 'text' && !n.dynamic && n.content.length > 10 && !n.content.includes('<')) {
      return `'${esc(n.content)}'`;
    }
    if (n.kind === 'if') {
      const d = extractDescription(n.thenBody);
      if (d) return d;
    }
  }
  return null;
}

function esc(s: string): string {
  return s.replace(/''/g, '\u0000').replace(/\\(?!u0027)/g, '/').replace(/'/g, "\\'").replace(/\u0000/g, "\\'").replace(/\n/g, '\\n');
}

function translateFragment(frag: string, stateReads: string[], todos: string[], stateVar: string, textContext: boolean): string {
  if (!frag.includes('<<')) return `'${esc(frag)}'`;
  let inStr = true, strCh = "'";
  let idx = -1;
  for (let ci = 0; ci < frag.length; ci++) {
    const ch = frag[ci];
    if (inStr) {
      if (ch === "'") {
        if (frag[ci + 1] === "'") { ci++; continue; }
        inStr = false;
      }
    } else {
      if (ch === "'" || ch === '"') { inStr = true; strCh = ch; }
    }
    if (ch === '<' && frag[ci + 1] === '<' && inStr && strCh === "'") {
      idx = ci;
      break;
    }
  }
  if (idx === -1) return `'${esc(frag)}'`;
  let depth = 0, k = idx;
  for (; k < frag.length; k++) {
    if (frag[k] === '<' && frag[k + 1] === '<') { depth++; k++; }
    else if (frag[k] === '>' && frag[k + 1] === '>' && depth > 0) { depth--; k++; if (depth === 0) break; }
  }
  const pre = frag.slice(0, idx);
  const inner = frag.slice(idx + 2, k - 1).replace(/''/g, "'");
  const post = frag.slice(k + 1);
  const exprTranslated = translateValue(inner.trim(), stateReads, todos, stateVar, textContext);
  const postTranslated = translateFragment(post, stateReads, todos, stateVar, textContext);
  return `'${esc(pre)}' + ${exprTranslated} + ${postTranslated}`;
}

function unescapeDoubled(v: string): string {
  let out = '';
  let inStr = false;
  for (let i = 0; i < v.length; i++) {
    const ch = v[i];
    if (ch === "'") {
      if (inStr && v[i + 1] === "'") {
        out += "'";
        i++;
      } else if (inStr) {
        out += "'";
        inStr = false;
      } else {
        out += "'";
        inStr = true;
      }
    } else {
      out += ch;
    }
  }
  return out;
}

function generateLabelCode(label: string, stateReads: string[], todos: string[], dynamicLabel?: boolean): string {
  if (dynamicLabel) {
    const translated = translateValue(label, stateReads, todos, 's', true);
    return `label: '', labelFn: (s: GameState) => String(${translated} ?? '')`;
  }
  const resolved = resolveStaticFuncs(label);
  if (resolved.includes('<<')) {
    const parts: string[] = [];
    let rest = resolved;
    while (rest.includes('<<') && rest.includes('>>')) {
      const idx = rest.indexOf('<<');
      const closeIdx = rest.indexOf('>>', idx + 2);
      if (closeIdx === -1) break;
      if (idx > 0) parts.push(`'${esc(rest.slice(0, idx))}'`);
      const expr = rest.slice(idx + 2, closeIdx).trim();
      const translated = translateValue(expr, stateReads, todos, 's', true);
      parts.push(`String(${translated} ?? '')`);
      rest = rest.slice(closeIdx + 2);
    }
    if (rest.length > 0) parts.push(`'${esc(rest)}'`);
    return `label: '', labelFn: (s: GameState) => ${parts.join(' + ')}`;
  }
  return `label: '${esc(resolved)}'`;
}

function resolveStaticFuncs(s: string): string {
  if (!s.includes("func(") && !s.includes("$func(")) return s;
  const re = /(\[|'?)\s*\+\s*\$?func\(\s*'([^']+)'\s*,\s*'([^']+)'\s*(?:,\s*([^)]+))?\)(\]|\s*\+\s*'?)/g;
  let didResolve = false;
  let out = s.replace(re, (_m, pre: string, mod: string, fn: string, argsStr: string | undefined, post: string) => {
    const args = argsStr ? argsStr.split(',').map((a: string) => a.trim()) : [];
    let resolved: string | null = null;
    if (mod === 'time' && fn === 'get_time_string' && args.length >= 1) {
      const h = parseInt(args[0], 10);
      const m = args.length >= 2 ? parseInt(args[1], 10) : 0;
      if (!isNaN(h)) resolved = `${h}:${String(m).padStart(2, '0')}`;
    } else if (mod === 'money' && fn === 'string_price' && args.length >= 1) {
      const n = parseInt(args[0], 10);
      if (!isNaN(n)) resolved = `${n}\u20BD`;
    } else if (mod === 'money' && fn === 'get_cost_string' && args.length >= 1) {
      const n = parseInt(args[0], 10);
      if (!isNaN(n)) {
        let suffix = '';
        if (args.length >= 2) {
          const method = args[1].replace(/'/g, '');
          if (method === 'cash') suffix = ' - Cash only';
          else if (method === 'bank') suffix = ' - Bank only';
          else if (method === 'desk') suffix = ' - Cash and desk only';
        }
        resolved = `(${n}\u20BD${suffix})`;
      }
    } else if (mod === 'willpower' && fn === 'get_willcost_string') {
      if (args.length >= 1) {
        const n = parseInt(args[0], 10);
        if (!isNaN(n)) resolved = `(${n} Willpower)`;
      } else {
        resolved = '(Willpower)';
      }
    }
    if (resolved === null) return _m;
    didResolve = true;
    if (pre === '[') return `[${resolved}]`;
    if (post === ']') return `[${resolved}]`;
    return resolved;
  });
  if (didResolve) {
    const trailMatch = out.match(/^(.*)'\s*$/);
    if (trailMatch) {
      const before = trailMatch[1].length > 0 ? trailMatch[1][trailMatch[1].length - 1] : '';
      if (before === '' || before === '+' || /\s/.test(before)) out = trailMatch[1];
    }
    const leadMatch = out.match(/^\s*'(.*)/);
    if (leadMatch) {
      const after = leadMatch[1].length > 0 ? leadMatch[1][0] : '';
      if (after === '' || after === '+' || /\s/.test(after)) out = leadMatch[1];
    }
  }
  return out;
}

function execArgToJs(a: string, stateReads?: string[], todos?: string[], stateVar?: string): string {
  const t = a.trim();
  const sv = stateVar || 's';
  if (t.startsWith("'") && t.endsWith("'") && t.length >= 2) {
    const inner = t.slice(1, -1);
    if (inner.includes('<<') && inner.includes('>>')) {
      const parts = inner.split(/(<<.+?>>)/g).filter((p: string) => p);
      const jsParts = parts.map((p: string) => {
        const m = p.match(/^<<(.+?)>>$/);
        if (m) {
          const e = m[1].trim();
          if (/^\$?\w+$/.test(e)) return `String((${sv} as any).${e.replace(/^\$/, '')} ?? '')`;
          return translateValue(e, stateReads || [], todos || [], sv, true);
        }
        return `'${p.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
      });
      return jsParts.join(' + ');
    }
    return t;
  }
  if (t === '$loc') return `window.__gameStore.getState().prevLoc`;
  if (t === '$loc_arg') return `window.__gameStore.getState().prevArg`;
  if (t.startsWith('$')) return `String(window.__gameStore.getState().${t.slice(1)} ?? '')`;
  if (/^\w+$/.test(t)) return `String(window.__gameStore.getState().${t} ?? '')`;
  return `'${t}'`;
}

function execValToJs(v: string): string {
  const t = v.trim();
  if (/^-?\d+(\.\d+)?$/.test(t)) return t;
  if (/^\$?\w+$/.test(t)) return `s.${t.replace(/^\$/, '')}`;
  return t;
}

function convertExecLinks(s: string, stateReads?: string[], todos?: string[], stateVar?: string): string {
  const re = /<a(?:[^>"]|"[^"]*")*href="(?:"?)?exec:([^"]+?)"{1,3}(?:[^>"]|"[^"]*")*>((?:[^<]|<(?!\/a>))*)<\/a>/g;
  return s.replace(re, (_m, execStr: string, text: string) => {
    const clean = execStr.replace(/''/g, "'");
    const gtMatch = clean.match(/(?:^|&\s*|\s)(?:gt|gs)\s+(.*)/);
    const argParts: string[] = [];
    if (gtMatch) {
      const rest = gtMatch[1].trim();
      const segments = rest.split(',').map((s: string) => s.trim());
      for (const seg of segments) {
        if (argParts.length >= 3) break;
        if (seg.startsWith("'") && seg.endsWith("'") && seg.length >= 2) {
          argParts.push(seg);
        } else if (/^\$?\w+$/.test(seg)) {
          argParts.push(seg);
        } else if (seg) {
          argParts.push(`'${seg}'`);
        }
      }
    }
    const locJs = argParts[0] !== undefined ? execArgToJs(argParts[0], stateReads, todos, stateVar) : null;
    const argJs = argParts[1] !== undefined ? execArgToJs(argParts[1], stateReads, todos, stateVar) : "''";
    const arg2Js = argParts[2] !== undefined ? execArgToJs(argParts[2], stateReads, todos, stateVar) : null;
    const stmts = clean.split('&').map((st: string) => st.trim()).filter((st: string) => st && !st.startsWith('gt') && !st.startsWith('gs'));
    const stmtCode = stmts.map((st: string) => {
      const setMatch = st.match(/^(?:<<(.+?)>>|(\w+))\[(.+?)\]\s*([+\-]?=)\s*(.+)$/);
      if (setMatch) {
        const dynObj = setMatch[1];
        const obj = setMatch[2];
        const keyRaw = setMatch[3];
        const op = setMatch[4];
        const val = execValToJs(setMatch[5]);
        let keyJs: string;
        const keyDynMatch = keyRaw.match(/^'(.+)'$/);
        if (keyDynMatch && keyDynMatch[1].includes('<<')) {
          const keyInner = keyDynMatch[1];
          const keyParts = keyInner.split(/(<<.+?>>)/g).filter((p: string) => p);
          const keyJsParts = keyParts.map((p: string) => {
            const m = p.match(/^<<(.+?)>>$/);
            if (m) {
              const e = m[1].trim();
              const km = e.match(/^\$(\w+)\[('[^']*')\]$/);
              if (km) return `(s as any).${km[1]}${km[2]}`;
              if (/^\$?\w+$/.test(e)) return `String((s as any).${e.replace(/^\$/, '')} ?? '')`;
              return `'__qspDyn'`;
            }
            return `'${p.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
          });
          keyJs = keyJsParts.length === 1 ? keyJsParts[0] : `(${keyJsParts.join(' + ')})`;
        } else {
          keyJs = keyRaw.replace(/''/g, "'");
        }
        const objJs = dynObj ? `((s as any)[String((s as any).${dynObj.replace(/^\$/, '')} ?? '')] ??= {})` : `(s.${obj} ??= {})`;
        return op === '=' ? `${objJs}${keyJs} = ${val};` : `${objJs}${keyJs} ${op}${val};`;
      }
      const dollarSetMatch = st.match(/^\$(\w+)\[('[^']*')\]\s*([+\-]?=)\s*(.+)$/);
      if (dollarSetMatch) {
        const obj = dollarSetMatch[1];
        const key = dollarSetMatch[2];
        const op = dollarSetMatch[3];
        const val = execValToJs(dollarSetMatch[4]);
        return op === '=' ? `(s.${obj} ??= {})${key} = ${val};` : `(s.${obj} ??= {})${key} ${op}${val};`;
      }
      const simpleMatch = st.match(/^(\w+)\s*([+\-]?=)\s*(.+)$/);
      if (simpleMatch) {
        const obj = simpleMatch[1];
        const op = simpleMatch[2];
        const val = execValToJs(simpleMatch[3]);
        return op === '=' ? `s.${obj} = ${val};` : `s.${obj} ${op}${val};`;
      }
      const msgMatch = st.match(/^msg\s+(.+)$/);
      if (msgMatch) {
        let expr = msgMatch[1].trim();
        expr = expr.replace(/func\(([^)]+)\)/g, (_m: string, args: string) => `qspFunc(s, ${args})`);
        const qMatch = expr.match(/^'(.*)'$/);
        if (qMatch && qMatch[1].includes('<<')) {
          const inner = qMatch[1];
          const parts = inner.split(/(<<.+?>>)/g).filter((p: string) => p);
          const jsParts = parts.map((p: string) => {
            const m = p.match(/^<<(.+?)>>$/);
            if (m) {
              const e = m[1].trim();
              const km = e.match(/^\$(\w+)\[('[^']*')\]$/);
              if (km) return `String((s as any).${km[1]}?.${km[2]} ?? '')`;
              if (/^\$?\w+$/.test(e)) return `String((s as any).${e.replace(/^\$/, '')} ?? '')`;
              return `'__qspDyn'`;
            }
            return `'${p.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
          });
          expr = jsParts.join(' + ');
        }
        return `alert(${expr});`;
      }
      const plMatch = st.match(/^pl\s*(.+)$/);
      if (plMatch) {
        let expr = plMatch[1].trim();
        expr = expr.replace(/^'(.*)'$/, (_m: string, inner: string) => {
          const unesc = inner.replace(/''/g, "'");
          if (unesc.includes('<<')) {
            const parts = unesc.split(/(<<.+?>>)/g).filter((p: string) => p);
            const jsParts = parts.map((p: string) => {
              const m = p.match(/^<<(.+?)>>$/);
              if (m) {
                const e = m[1].trim();
                if (/^\$?\w+$/.test(e)) return `String((s as any).${e.replace(/^\$/, '')} ?? '')`;
                return `'__qspDyn'`;
              }
              return `'${p.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
            });
            return jsParts.join(' + ');
          }
          return `'${unesc.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
        });
        return `s.scene = { ...s.scene, mainText: ${expr}, curActs: [] };`;
      }
      const viewMatch = st.match(/^view\s*'(.*)'$/);
      if (viewMatch) {
        const imgPath = viewMatch[1].replace(/''/g, "'");
        const singleMatch = imgPath.match(/^<<(.+?)>>$/);
        if (singleMatch) {
          const e = singleMatch[1].trim();
          if (/^\$?\w+$/.test(e)) return `s.viewImage = s.${e.replace(/^\$/, '')};`;
          return `s.viewImage = '__qspDyn';`;
        }
        if (!imgPath.includes('<<')) return `s.viewImage = '${imgPath}';`;
        const parts = imgPath.split(/(<<.+?>>)/g).filter((p: string) => p);
        const jsParts = parts.map((p: string) => {
          const m = p.match(/^<<(.+?)>>$/);
          if (m) {
            const e = m[1].trim();
            if (/^\$?\w+$/.test(e)) return `s.${e.replace(/^\$/, '')}`;
            return `'__qspDyn'`;
          }
          return `'${p.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
        });
        return `s.viewImage = ${jsParts.join(' + ')};`;
      }
      const viewFuncMatch = st.match(/^view\s+(\$?func\((.+)\))$/);
      if (viewFuncMatch) {
        const args = viewFuncMatch[2].split(',').map((a: string) => a.trim().replace(/^''|''$/g, "'"));
        const module = args[0]?.replace(/^'|'$/g, '') || '';
        const func = args[1]?.replace(/^'|'$/g, '') || '';
        const extraArgs = args.slice(2).map((a: string) => a.replace(/^'|'$/g, ''));
        return `s.viewImage = String(qspFunc(s, '${module}', '${func}'${extraArgs.length ? `, ${extraArgs.map((a) => `'${a}'`).join(', ')}` : ''}) || '');`;
      }
      const dynDollarMatch = st.match(/^dynamic\s+\$(\w+)\[('[^']*')\](?:\s*,\s*(.+))?$/);
      if (dynDollarMatch) {
        const obj = dynDollarMatch[1];
        const key = dynDollarMatch[2];
        const argsStr = dynDollarMatch[3] ? splitTopLevel(dynDollarMatch[3]).map((a: string) => a.trim()).filter(Boolean) : [];
        const argsJs = argsStr.map((a: string) => {
          const q = a.startsWith("'") && a.endsWith("'");
          if (q) return a.replace(/''/g, "'");
          if (/^\$?\w+$/.test(a)) return a.startsWith('$') ? `(s as any).${a.slice(1)}` : a;
          return a;
        });
        return `qspFunc(s, (s.${obj} ?? {})${key}, ${argsJs.join(', ')});`;
      }
      const killvarMatch = st.match(/^killvar\s+'(.+)'$/);
      if (killvarMatch) {
        const varExpr = killvarMatch[1];
        const dynMatch = varExpr.match(/^<<(.+?)>>$/);
        if (dynMatch) {
          const e = dynMatch[1].trim();
          if (/^\$?\w+$/.test(e)) return `delete (s as any).${e.replace(/^\$/, '')};`;
          return `delete (s as any)[String((s as any).${e.replace(/^\$/, '')} ?? '')];`;
        }
        const dollarMatch = varExpr.match(/^\$(\w+)$/);
        if (dollarMatch) return `delete (s as any).${dollarMatch[1]};`;
        return `delete (s as any)['${varExpr.replace(/^\$/, '')}'];`;
      }
      const dynVarMatch = st.match(/^<<\$(\w+)>>$/);
      if (dynVarMatch) {
        const varName = dynVarMatch[1];
        return `{ const _t = String((s as any).${varName} || ''); const _tp = _t.split(' '); if (_tp.length >= 3 && _tp[1] === '=') (s as any)[_tp[0]] = Number(_tp[2]); }`;
      }
      const dynBareVar = st.match(/^dynamic\s+\$(\w+)$/);
      if (dynBareVar) {
        const varName = dynBareVar[1];
        return `dynamicGoto(s, String((s as any).${varName} || ''));`;
      }
      const dynArrVar = st.match(/^dynamic\s+\$(\w+)\[(.+)\]$/);
      if (dynArrVar) {
        const varName = dynArrVar[1];
        const keyExpr = dynArrVar[2].trim();
        const keyJs = /^\d+$/.test(keyExpr) ? keyExpr : `String((s as any).${keyExpr.replace(/^\$/, '')} ?? '')`;
        return `dynamicGoto(s, String(((s as any).${varName} ?? {})[${keyJs}] || ''));`;
      }
      const dynNestedVar = st.match(/^dynamic\s+\$(\w+)\[\$(\w+)\]$/);
      if (dynNestedVar) {
        const varName = dynNestedVar[1];
        const keyVar = dynNestedVar[2];
        return `dynamicGoto(s, String(((s as any).${varName} ?? {})[String((s as any).${keyVar} ?? '')] || ''));`;
      }
      const dynParenNested = st.match(/^dynamic\(\s*\$(\w+)\[\$(\w+)\]\s*\)$/);
      if (dynParenNested) {
        const varName = dynParenNested[1];
        const keyVar = dynParenNested[2];
        return `dynamicGoto(s, String(((s as any).${varName} ?? {})[String((s as any).${keyVar} ?? '')] || ''));`;
      }
      const dynStrMatch = st.match(/^dynamic\s+'(.+)'$/);
      if (dynStrMatch) {
        const inner = dynStrMatch[1];
        if (inner.includes('<<')) {
          const parts = inner.split(/(<<.+?>>)/g).filter((p: string) => p);
          const jsParts = parts.map((p: string) => {
            const m = p.match(/^<<(.+?)>>$/);
            if (m) {
              const e = m[1].trim();
              if (/^\$?\w+$/.test(e)) return `String((s as any).${e.replace(/^\$/, '')} ?? '')`;
              return `String((s as any).${e.replace(/^\$/, '')} ?? '')`;
            }
            return `'${p.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
          });
          return `dynamicGoto(s, ${jsParts.join(' + ')});`;
        }
        return `dynamicGoto(s, '${inner.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}');`;
      }
      const savegameMatch = st.match(/^savegame\s*(?:'(.+)')?$/);
      if (savegameMatch) {
        const file = (savegameMatch[1] || '').replace(/''/g, "'");
        const slot = file.includes('quicksave') ? '0' : '1';
        return `qspSave(${slot}, s);`;
      }
      const setVarMatch = st.match(/^set\s+\$(\w+)\s*=\s*(.+)$/);
      if (setVarMatch) {
        const varName = setVarMatch[1];
        const val = execValToJs(setVarMatch[2].trim());
        return `(s as any).${varName} = ${val};`;
      }
      if (st === 'cls' || st === 'clr' || st === '*clr' || st === 'cla') {
        return '';
      }
      return `/* TODO-QSP: ${st.replace(/</g, '\\u003c')} */`;
    }).join(' ');
    const parts: string[] = [];
    if (stmtCode) parts.push(`window.__gameStore.setState((s) => { ${stmtCode} return s; });`);
    if (locJs) {
      const arg2Part = arg2Js ? `, ${arg2Js}` : '';
      parts.push(`window.__gameStore.getState().doGoto(${locJs}, ${argJs}${arg2Part});`);
    }
    const onclick = parts.join(' ').replace(/'/g, '\\u0027');
    if (!onclick) return _m;
    return `<a href="#" onclick="${onclick} return false;">${text}</a>`;
  });
}

function qspStringToJs(s: string, stateReads: string[], todos: string[], stateVar: string = 's'): string {
  s = resolveStaticFuncs(s);
  const funcMatch = s.match(/^\s*\$func\((.*)\)\s*$/);
  if (funcMatch) {
    const args = splitTopLevel(funcMatch[1]).map(a => a.trim());
    const mod = (args[0] || '').replace(/''/g, "'").replace(/^['"]|['"]$/g, '');
    let fn = '';
    let restArgs: string[];
    if (mod.startsWith('$')) {
      restArgs = args.slice(1);
    } else {
      const rawFn = args[1] || '';
      const unescapedFn = rawFn.replace(/''/g, "'");
      if (/^['"].*['"]$/.test(unescapedFn)) {
        fn = unescapedFn.replace(/^['"]|['"]$/g, '');
      } else {
        fn = translateValue(unescapedFn, stateReads, todos, stateVar, true);
      }
      restArgs = args.slice(2);
    }
    const rest = restArgs.map(a => {
      if (/^['"].*['"]$/.test(a)) return `'${a.slice(1, -1).replace(/''/g, "\\'")}'`;
      return translateValue(a, stateReads, todos, stateVar, true);
    });
    const fnArg = (fn.startsWith('(') || fn.startsWith('String') || fn.includes('as any')) ? fn : `'${esc(fn)}'`;
    return `qspFunc(${stateVar}, '${esc(mod)}', ${fnArg}${rest.length ? ', ' + rest.join(', ') : ''})`;
  }
  const bareVar = s.match(/^\$(\w+)$/);
  if (bareVar) return `String((${stateVar} as any).${bareVar[1]} ?? '')`;
  if (s.match(/'\s*\+\s*\w+/) || s.match(/^[a-zA-Z_$][\w$]*\s*\([^)]*\)\s*\+\s*'/) || s.match(/^'[^']*'\s*\+\s*/)) {
    if (s.startsWith("'") || s.match(/^[a-zA-Z_$][\w$]*\s*\(/)) {
      let work = s;
      const leadPlus = work.match(/^'\s*\+/);
      if (leadPlus) work = work.slice(leadPlus[0].length);
      work = convertExecLinks(work, stateReads, todos, stateVar);
      const parts: string[] = [];
      let depth = 0, inStr = false, strCh = '', cur = '';
      for (let i = 0; i < work.length; i++) {
        const ch = work[i];
        if (inStr) {
          if (ch === strCh && strCh === "'" && work[i + 1] === "'") { cur += "''"; i++; }
          else { cur += ch; if (ch === strCh) inStr = false; }
        } else if (ch === '<' && work[i + 1] === '<') {
          const closeIdx = work.indexOf('>>', i + 2);
          if (closeIdx !== -1) { cur += work.slice(i, closeIdx + 2); i = closeIdx + 1; }
          else cur += ch;
        } else if (ch === "'" || ch === '"') {
          inStr = true; strCh = ch; cur += ch;
        } else if (ch === '(') { depth++; cur += ch; }
        else if (ch === ')') { depth--; cur += ch; }
        else if (ch === '+') {
          if (depth === 0) {
            const t = cur.trim();
            if (t) parts.push(t);
            cur = '';
          } else { cur += ch; }
        } else { cur += ch; }
      }
      const t = cur.trim();
      if (t) parts.push(t);
      const transpiled = parts.map((p, idx) => {
        if (/^'.*'$/.test(p)) {
          const inner = p.slice(1, -1);
          if (inner.includes('<<')) return qspStringToJs(inner, stateReads, todos, stateVar);
          return `'${esc(convertExecLinks(inner, stateReads, todos, stateVar).replace(/''/g, "'"))}'`;
        }
        return translateValue(p, stateReads, todos, stateVar, true);
      });
      return transpiled.join(' + ');
    }
    return translateValue(`'${s}'`, stateReads, todos, stateVar, true);
  }
  if (!s.includes('<<')) return `'${esc(convertExecLinks(s, stateReads, todos, stateVar))}'`;
  s = convertExecLinks(s, stateReads, todos, stateVar);
  // Segment IR: split into text / expr segments, then emit ONE template literal.
  const segs: { type: 'text' | 'expr'; value: string }[] = [];
  let rest = s;
  while (rest.includes('<<') && rest.includes('>>')) {
    const idx = rest.indexOf('<<');
    let depth = 0, closeIdx = -1;
    for (let ci = idx; ci < rest.length - 1; ci++) {
      if (rest[ci] === '<' && rest[ci + 1] === '<') { depth++; ci++; }
      else if (rest[ci] === '>' && rest[ci + 1] === '>' && depth > 0) { depth--; ci++; if (depth === 0) { closeIdx = ci; break; } }
    }
    if (closeIdx === -1) break;
    if (idx > 0) segs.push({ type: 'text', value: rest.slice(0, idx) });
    const expr = rest.slice(idx + 2, closeIdx - 1).replace(/''/g, "'");
    segs.push({ type: 'expr', value: translateValue(expr.trim(), stateReads, todos, stateVar, true) });
    rest = rest.slice(closeIdx + 1);
  }
  if (rest.length > 0) segs.push({ type: 'text', value: rest });
  metrics.dynamicText++;
  let out = '`';
  for (const seg of segs) {
    if (seg.type === 'text') {
      let t = seg.value.replace(/''/g, "'");
      t = t.replace(/\\/g, '/').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
      out += t;
    } else {
      out += '${' + seg.value + '}';
    }
  }
  out += '`';
  return out;
}

function truncate(s: string, max: number): string {
  s = s.replace(/\n/g, ' ');
  return s.length > max ? s.slice(0, max) + '...' : s;
}

function replaceBalanced(v: string, name: string, cb: (inner: string) => string): string {
  let out = '';
  let i = 0;
  while (i < v.length) {
    const re = new RegExp(`(?<!\\w)\\$?${name}\\s*\\(`);
    const m = re.exec(v.slice(i));
    if (!m) {
      out += v.slice(i);
      break;
    }
    const start = i + m.index;
    out += v.slice(i, start);
    const openIdx = v.indexOf('(', start);
    let depth = 0;
    let end = -1;
    let inStr = false;
    for (let j = openIdx; j < v.length; j++) {
      const ch = v[j];
      if (inStr) {
        if (ch === "'") {
          if (v[j + 1] === "'") j++;
          else inStr = false;
        }
      } else if (ch === "'") inStr = true;
      else if (ch === '(') depth++;
      else if (ch === ')') {
        depth--;
        if (depth === 0) { end = j; break; }
      }
    }
    if (end === -1) {
      out += v.slice(start);
      break;
    }
    out += cb(v.slice(openIdx + 1, end));
    i = end + 1;
  }
  return out;
}

function hasTopLevelComparison(v: string): boolean {
  let depth = 0;
  let inStr = false;
  for (let i = 0; i < v.length; i++) {
    const ch = v[i];
    if (inStr) {
      if (ch === "'") {
        if (v[i + 1] === "'") i++;
        else inStr = false;
      }
      continue;
    }
    if (ch === "'") { inStr = true; continue; }
    if (ch === '(') { depth++; continue; }
    if (ch === ')') { depth--; continue; }
    if (depth === 0) {
      if (v.slice(i, i + 2) === '<>') return true;
      if (v.slice(i, i + 2) === '!=') return true;
      if (v.slice(i, i + 2) === '>=') return true;
      if (v.slice(i, i + 2) === '<=') return true;
    }
  }
  return false;
}

function splitTopLevel(s: string): string[] {
  const parts: string[] = [];
  let depth = 0;
  let cur = '';
  let inStr = false;
  let strCh = '';
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (inStr) {
      if (ch === strCh && strCh === "'" && s[i + 1] === "'") {
        cur += "''"; i++;
      } else {
        cur += ch; if (ch === strCh) inStr = false;
      }
    } else if (ch === "'" || ch === '"') {
      inStr = true;
      strCh = ch;
      cur += ch;
    } else if (ch === '(') {
      depth++;
      cur += ch;
    } else if (ch === ')') {
      depth--;
      cur += ch;
    } else if (ch === ',' && depth === 0) {
      parts.push(cur);
      cur = '';
    } else {
      cur += ch;
    }
  }
  parts.push(cur);
  return parts;
}

// QSP built-in functions -> JS (args are already-translated expressions)
const BUILTIN_FUNCS: Record<string, (a: string[]) => string> = {
  mid: (a) => a.length === 3 ? `(String(${a[0]}).slice((${a[1]})-1, ((${a[1]})-1)+(${a[2]})))` : `(String(${a[0]}).slice((${a[1]})-1))`,
  instr: (a) => `((String(${a[0]}).indexOf(String(${a[1]}))) + 1)`,
  strpos: (a) => `((String(${a[0]}).indexOf(String(${a[1]}))) + 1)`,
  left: (a) => `(String(${a[0]}).slice(0, ${a[1]}))`,
  right: (a) => `(String(${a[0]}).slice(String(${a[0]}).length - ${a[1]}))`,
  len: (a) => `(String(${a[0]}).length)`,
  val: (a) => `parseFloat(${a[0]})`,
  str: (a) => `String(${a[0]})`,
  ucase: (a) => `(String(${a[0]}).toUpperCase())`,
  lcase: (a) => `(String(${a[0]}).toLowerCase())`,
  trim: (a) => `(String(${a[0]}).trim())`,
  replace: (a) => `(String(${a[0]}).split(${a[1]}).join(${a[2]}))`,
   max: (a) => `Math.max(${a.join(', ')})`,
   min: (a) => `Math.min(${a.join(', ')})`,
   loc: (a) => (a.length >= 1 ? `hasLocation(${a[0]})` : `false`),
};

function isInsideString(s: string, pos: number): boolean {
  let inStr = false, strCh = '';
  for (let k = 0; k < pos; k++) {
    const ch = s[k];
    if (inStr) {
      if (ch === strCh) {
        if (s[k + 1] === strCh) { k++; continue; }
        inStr = false;
      }
      continue;
    }
    if (ch === "'" || ch === '"') { inStr = true; strCh = ch; }
  }
  return inStr;
}

function replaceBuiltinFuncs(c: string, stateReads: string[], todos: string[], stateVar: string, phs: [string, string][], textContext: boolean = false): string {
  let out = c;
  for (const [name, mapper] of Object.entries(BUILTIN_FUNCS)) {
    let i = 0;
    let result = '';
    const re = new RegExp(`\\$?\\b${name}\\s*\\(`, 'g');
    while (true) {
      re.lastIndex = i;
      const m = re.exec(out);
      if (!m) { result += out.slice(i); break; }
      const start = m.index;
      result += out.slice(i, start);
      if (isInsideString(out, start)) {
        i = start + 1;
        continue;
      }
      const openIdx = out.indexOf('(', start);
      let depth = 0, end = -1, inStr = false, strCh = '';
      for (let j = openIdx; j < out.length; j++) {
        const ch = out[j];
        if (inStr) {
          if (ch === strCh) {
            if (out[j + 1] === strCh) { j++; continue; }
            inStr = false;
          }
          continue;
        }
        if (ch === "'" || ch === '"') { inStr = true; strCh = ch; continue; }
        if (ch === '(') depth++;
        else if (ch === ')') { depth--; if (depth === 0) { end = j; break; } }
      }
      if (end === -1) { result += out.slice(start); break; }
      const inner = out.slice(openIdx + 1, end);
      const args = splitTopLevel(inner).map(a => a.trim()).filter(a => a !== '');
      const translated = args.map(a => {
        if (/^\u0000\d+\u0000$/.test(a)) return a;
        const r = translateValue(a, stateReads, todos, stateVar, textContext);
        return r;
      });
      const mapped = mapper(translated);
      const ph = `\u0000${phs.length}\u0000`;
      phs.push([ph, mapped]);
      result += ph;
      i = end + 1;
    }
    out = result;
  }
  return out;
}

// Build a JS key expression from a QSP array key, handling nested <<expr>> dynamics.
function buildKeyExpr(key: string, stateReads: string[], todos: string[], stateVar: string): string {
  if (!key.includes('<<')) return `'${esc(key)}'`;
  let keyExpr = '';
  let i = 0;
  let litStart = 0;
  while (i < key.length) {
    if (key[i] === '<' && key[i + 1] === '<') {
      if (i > litStart) keyExpr += `'${esc(key.slice(litStart, i))}' + `;
      let depth = 0, j = i;
      for (; j < key.length; j++) {
        if (key[j] === '<' && key[j + 1] === '<') { depth++; j++; }
        else if (key[j] === '>' && key[j + 1] === '>' && depth > 0) { depth--; j++; if (depth === 0) break; }
      }
      const inner = key.slice(i + 2, j - 1).replace(/''/g, "'");
      keyExpr += `String(${translateValue(inner, stateReads, todos, stateVar)}) + `;
      i = j + 1;
      litStart = i;
    } else {
      i++;
    }
  }
  if (litStart < key.length) keyExpr += `'${esc(key.slice(litStart))}' + `;
  return keyExpr.replace(/\s*\+\s*$/, '');
}

// Replace <<expr>> occurrences that are OUTSIDE single/double-quoted strings.
// Dynamics inside quoted array keys are left intact for buildKeyExpr to handle.
function replaceDynamicsOutsideQuotes(v: string, cb: (expr: string) => string): string {
  let out = '';
  let i = 0;
  while (i < v.length) {
    if (v[i] === "'" || v[i] === '"') {
      const q = v[i];
      let j = i + 1;
      while (j < v.length) {
        if (v[j] === q) {
          if (v[j + 1] === q) { j += 2; continue; }
          break;
        }
        j++;
      }
      const end = Math.min(j + 1, v.length);
      out += v.slice(i, end);
      i = end;
    } else {
      let j = i;
      while (j < v.length && v[j] !== "'" && v[j] !== '"') j++;
      out += v.slice(i, j).replace(/<<(.+?)>>/g, (_, expr) => cb(expr.trim()));
      i = j;
    }
  }
  return out;
}

// Scan for WORD['key'] array accesses (key may contain <<expr>> dynamics and nested obj['key']) and replace with placeholders.
function replaceArrayAccesses(c: string, stateReads: string[], todos: string[], stateVar: string, phs: [string, string][]): string {
  let i = 0;
  let result = '';
  const re = /(?<!\w)(\$?[a-zA-Z_]\w*)\[/g;
  while (true) {
    re.lastIndex = i;
    const m = re.exec(c);
    if (!m) { result += c.slice(i); break; }
    const objStart = m.index;
    const obj = m[1].replace(/^\$/, '');
    const bracketStart = objStart + m[0].length - 1;
    const quotePos = bracketStart + 1;
    if (quotePos >= c.length) { result += c.slice(i, bracketStart + 1); i = bracketStart + 1; continue; }
    if (c[quotePos] === ']') {
      result += c.slice(i, objStart);
      stateReads.push(obj);
      const ph = `\u0000${phs.length}\u0000`;
      phs.push([ph, `((${stateVar} as any).${obj} ?? 0)`]);
      result += ph;
      i = quotePos + 1;
      continue;
    }
    if (c[quotePos] !== "'" && c[quotePos] !== '"') { result += c.slice(i, bracketStart + 1); i = bracketStart + 1; continue; }
    const quote = c[quotePos];
    let depth = 1;
    let j = quotePos + 1;
    while (j < c.length && depth > 0) {
      if (c[j] === '[') depth++;
      else if (c[j] === ']') depth--;
      j++;
    }
    if (depth !== 0) { result += c.slice(i, bracketStart + 1); i = bracketStart + 1; continue; }
    const closeBracket = j - 1;
    let lastQuote = closeBracket - 1;
    while (lastQuote > quotePos && c[lastQuote] !== quote) lastQuote--;
    if (lastQuote <= quotePos) { result += c.slice(i, bracketStart + 1); i = bracketStart + 1; continue; }
    const key = c.slice(quotePos + 1, lastQuote);
    result += c.slice(i, objStart);
    stateReads.push(obj);
    const keyExpr = buildKeyExpr(key, stateReads, todos, stateVar);
    const expr = `(((${stateVar} as any).${obj} ?? {})?.[${keyExpr}] ?? 0)`;
    const ph = `\u0000${phs.length}\u0000`;
    phs.push([ph, expr]);
    result += ph;
    i = j;
  }
  return result;
}

function replaceFuncCalls(c: string, stateReads: string[], todos: string[], stateVar: string, phs: [string, string][], textContext: boolean = false): string {
  // Pre-pass: convert FUNC('name', args...) → $func('$name', args...)
  {
    let pre = '';
    let pi = 0;
    while (pi < c.length) {
      const fm = c.slice(pi).match(/\bFUNC\s*\(/);
      if (!fm || fm.index === undefined) { pre += c.slice(pi); break; }
      const fstart = pi + fm.index;
      pre += c.slice(pi, fstart);
      const fopen = c.indexOf('(', fstart);
      let fdepth = 0, fend = -1;
      let finStr = false;
      for (let fj = fopen; fj < c.length; fj++) {
        const ch = c[fj];
        if (finStr) {
          if (ch === "'" && c[fj - 1] !== '\\') finStr = false;
        } else {
          if (ch === "'") finStr = true;
          else if (ch === '(') fdepth++;
          else if (ch === ')') { fdepth--; if (fdepth === 0) { fend = fj; break; } }
        }
      }
      if (fend === -1) { pre += c.slice(fstart); break; }
      const finner = c.slice(fopen + 1, fend);
      const fargs = splitTopLevel(finner).map(a => a.trim()).filter(a => a !== '');
      const fname = fargs[0] ? fargs[0].replace(/''/g, "'").replace(/^['"]|['"]$/g, '') : '';
      const frest = fargs.slice(1);
      const fmod = fname.startsWith('$') ? fname : `$${fname}`;
      pre += `$func('${fmod}'${frest.length ? ', ' + frest.join(', ') : ''})`;
      pi = fend + 1;
    }
    c = pre;
  }
  let out = '';
  let i = 0;
  while (i < c.length) {
    const re = /\$?func\s*\(/;
    const m = re.exec(c.slice(i));
    if (!m) {
      out += c.slice(i);
      break;
    }
    const start = i + m.index;
    out += c.slice(i, start);
    const openIdx = c.indexOf('(', start);
    let depth = 0;
    let end = -1;
    for (let j = openIdx; j < c.length; j++) {
      if (c[j] === '(') depth++;
      else if (c[j] === ')') {
        depth--;
        if (depth === 0) { end = j; break; }
      }
    }
    if (end === -1) {
      out += c.slice(start);
      break;
    }
    const inner = c.slice(openIdx + 1, end);
    const args = splitTopLevel(inner).map(a => a.trim()).filter(a => a !== '');
    const mod = args[0] ? args[0].replace(/''/g, "'").replace(/^['"]|['"]$/g, '') : '';
    let fn: string;
    let restArgs: string[];
    if (mod.startsWith('$')) {
      fn = '';
      restArgs = args.slice(1);
    } else {
      if (args[1] && /^['"].*['"]$/.test(args[1])) {
        fn = args[1].replace(/''/g, "'").replace(/^['"]|['"]$/g, '');
      } else if (args[1]) {
        fn = translateValue(args[1], stateReads, todos, stateVar);
      } else {
        fn = '';
      }
      restArgs = args.slice(2);
    }
    const rest = restArgs.map(a => translateValue(a, stateReads, todos, stateVar, textContext));
    const ph = `\u0000${phs.length}\u0000`;
    const fnArg = mod.startsWith('$') ? `'${fn}'` : (/^['"].*['"]$/.test(args[1] ?? '') ? `'${fn}'` : fn);
    phs.push([ph, `qspFunc(${stateVar}, '${mod}', ${fnArg}${rest.length ? ', ' + rest.join(', ') : ''})`]);
    out += ph;
    i = end + 1;
  }
  return out;
}

function toPascalCase(s: string): string {
  return s.replace(/\[(\d+)\]/g, '$1').replace(/&/g, '_').replace(/-/g, '_').replace(/^(.)/, c => c.toUpperCase()).replace(/_([a-z])/g, (_, c) => c.toUpperCase()).replace(/ ([a-z])/g, (_, c) => c.toUpperCase()).replace(/ /g, '').replace(/\./g, '_').replace(/[^a-zA-Z0-9_]/g, '_');
}

function getRegion(name: string): string {
  if (name.startsWith('pav_') || name.includes('pavlovsk')) return 'pavlovsk';
  if (name.startsWith('pushkin_') || name.includes('pushkin')) return 'pushkin';
  if (name.startsWith('city_') || name.includes('spb') || name.includes('st_petersburg')) return 'city';
  if (name.startsWith('gad_') || name.includes('gadukino')) return 'gadukino';
  if (name.startsWith('eto_')) return 'eto';
  if (name.startsWith('kg') || name.startsWith('KG')) return 'kgd';
  return 'other';
}
