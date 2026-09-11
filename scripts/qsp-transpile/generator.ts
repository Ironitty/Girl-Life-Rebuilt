import type { QspLocation, QspNode, QspScene, QspIf, QspAct, QspText, QspImage, QspAssign, QspGoto, QspGsCall, QspTime, QspSetup, QspExit, QspUnknown } from './ast';

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

  const sceneList = loc.scenes.length > 0
    ? [{ kind: 'scene' as const, arg: '' as string, body: loc.topLevel }, ...loc.scenes]
    : [{ kind: 'scene' as const, arg: '' as string, body: loc.topLevel }];

  if (sceneList.length === 1) {
    const scene = sceneList[0];
    const body = generateSceneBody(scene.body, todos, unsupported, stateWrites, stateReads, gsCalls, targets);
    lines.push(`function enter(s: GameState, scene: SceneBuilder): void {`);
    for (const bl of body) lines.push(`  ${bl}`);
    lines.push(`  scene.build();`);
    lines.push(`}`);
  } else {
    const usedNames = new Set<string>();
    const nameMap = new Map<number, string>();
    for (let si = 0; si < sceneList.length; si++) {
      const scene = sceneList[si];
      const base = scene.arg === '' ? 'enterDefault' : `enter${toPascalCase(scene.arg)}`;
      let fn = base;
      let n = 2;
      while (usedNames.has(fn)) { fn = `${base}${n}`; n++; }
      usedNames.add(fn);
      nameMap.set(si, fn);
    }
    for (let si = 0; si < sceneList.length; si++) {
      const scene = sceneList[si];
      const funcName = nameMap.get(si)!;
      const body = generateSceneBody(scene.body, todos, unsupported, stateWrites, stateReads, gsCalls, targets);
      lines.push(`function ${funcName}(s: GameState, scene: SceneBuilder): void {`);
      for (const bl of body) lines.push(`  ${bl}`);
      lines.push(`  scene.build();`);
      lines.push(`}`);
      lines.push('');
    }

    lines.push(`function enter(s: GameState, scene: SceneBuilder): void {`);
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
  if (loc.title) lines.push(`  title: '${esc(loc.title)}',`);
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
          out.push(`// TODO-QSP: dynamic text: ${truncate(node.content, 80)}`);
          out.push(`scene.text(${qspStringToJs(node.content, stateReads, todos)});`);
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
        const bracketIdx = lhs.indexOf('[');
        if (bracketIdx !== -1) {
          const objName = lhs.slice(0, bracketIdx);
          const rest = lhs.slice(bracketIdx);
          const guarded = `((s as any).${objName} ?? {})${rest}`;
          if (node.op === '=') {
            out.push(`${guarded} = ${val};`);
          } else if (node.op === '+=') {
            out.push(`${guarded} = (${guarded} ?? 0) + (${val});`);
          } else {
            out.push(`${guarded} = (${guarded} ?? 0) - (${val});`);
          }
        } else if (node.op === '=') {
          out.push(`(s as any).${lhs} = ${val};`);
        } else if (node.op === '+=') {
          out.push(`(s as any).${lhs} = ((s as any).${lhs} ?? 0) + (${val});`);
        } else {
          out.push(`(s as any).${lhs} = ((s as any).${lhs} ?? 0) - (${val});`);
        }
        stateWrites.push(varName);
        break;
      }
      case 'goto': {
        if (node.target.startsWith('$')) {
          const t = node.target.replace(/^\$/, '');
          const argPart = node.arg.startsWith('$') ? `, '${node.arg.replace(/^\$/, '')}'` : '';
          out.push(`scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, '${t}'${argPart}); } }]);`);
        } else {
          targets.add(node.target);
          out.push(`scene.actions([{ label: 'Continue', goto: ['${node.target}', '${node.arg}'] }]);`);
        }
        break;
      }
      case 'gs': {
        gsCalls.push(`${node.module}.${node.func}`);
        const gargs = node.args.map(a => translateValue(a, stateReads, todos));
        out.push(`qspCall(s, '${node.module}', '${node.func}'${gargs.length ? ', ' + gargs.join(', ') : ''});`);
        break;
      }
      case 'setup': {
        if (node.raw.includes('minut')) {
          const m = node.raw.match(/minut\s*\+=\s*(\d+)/);
          if (m) out.push(`(s as any).minut = ((s as any).minut ?? 0) + ${m[1]};`);
        }
        const backimgMatch = node.raw.match(/^\$backimage\s*=\s*'(.*)'$/);
        if (backimgMatch) {
          out.push(`scene.img('${backimgMatch[1]}');`);
          break;
        }
        const plImgMatch = node.raw.match(/^\*pl\s+'<center><img\s+<<\$set_imgh>>\s+src="([^"]+)"><\/center>'$/);
        if (plImgMatch) {
          const src = plImgMatch[1];
          if (src.includes('<<')) {
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
        break;
      }
      case 'exit': {
        out.push(`return;`);
        break;
      }
      case 'comment': {
        break;
      }
      case 'act': {
        const actCode = generateAct(node, todos, unsupported, stateWrites, stateReads, gsCalls, targets);
        actions.push(actCode);
        break;
      }
      case 'if': {
        const ifCode = generateIf(node, todos, unsupported, stateWrites, stateReads, gsCalls, targets);
        out.push(...ifCode);
        break;
      }
      case 'scene': {
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
): string {
  if (node.inlineGoto) {
    targets.add(node.inlineGoto.target);
    return `{ label: '${esc(node.label)}', goto: ['${node.inlineGoto.target}', '${node.inlineGoto.arg}'] },`;
  }

  if (node.inlineStatements) {
    const inline = translateInlineAct(node.label, node.inlineStatements, stateWrites, stateReads, gsCalls, targets, todos);
    if (inline) return inline;
    return `// TODO-QSP: act '${esc(node.label)}': ${truncate(node.inlineStatements, 80)}`;
  }

  if (node.body.length === 0) {
    return `{ label: '${esc(node.label)}' }, // TODO-QSP: empty action body`;
  }

  const bodyLines = generateSceneBody(node.body, todos, unsupported, stateWrites, stateReads, gsCalls, targets);

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
    const m = bodyLines[gotoIdx].match(/goto: \['([^']*)'\s*,\s*'([^']*)'\]/);
    if (m) {
      gotoCode = `goto: ['${m[1]}', '${m[2]}']`;
      bodyLines.splice(gotoIdx, 1);
    }
  }

  if (bodyLines.length === 0 && gotoCode) {
    return `{ label: '${esc(node.label)}', ${gotoCode} },`;
  }

  const parts: string[] = [];
  if (bodyLines.length > 0) {
    parts.push(`handler: (st: GameState) => {\n${bodyLines.map(l => `    ${l}`).join('\n')}\n  }`);
  }
  if (gotoCode) parts.push(gotoCode);
  return `{ label: '${esc(node.label)}', ${parts.join(', ')} },`;
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
  let goto: { target: string; arg: string } | null = null;

  for (const part of parts) {
    const gtMatch = part.match(/^gt\s+'([^']+)'\s*(?:,\s*'([^']*)')?$/);
    if (gtMatch) {
      goto = { target: gtMatch[1], arg: gtMatch[2] || '' };
      targets.add(gtMatch[1]);
      continue;
    }
    const gtDynMatch = part.match(/^gt\s+(\$\w+)\s*(?:,\s*(\$\w+|'[^']*'))?\s*$/);
    if (gtDynMatch) {
      const t = gtDynMatch[1].replace(/^\$/, '');
      let argPart = '';
      if (gtDynMatch[2]) {
        argPart = gtDynMatch[2].startsWith('$')
          ? `, '${gtDynMatch[2].replace(/^\$/, '')}'`
          : `, '${esc(gtDynMatch[2].slice(1, -1))}'`;
      }
      handlerBits.push(`dynamicGoto(st, '${t}'${argPart});`);
      continue;
    }
    const timeMatch = part.match(/^minut\s*\+=\s*(\d+)$/);
    if (timeMatch) {
      handlerBits.push(`(st as any).minut = ((st as any).minut ?? 0) + ${timeMatch[1]};`);
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
    if (part === 'cla' || part === '*clr' || part.startsWith('*clr')) continue;
    const flagMatch = part.match(/^\$(\w+)$/);
    if (flagMatch) {
      handlerBits.push(`st.scene = { ...st.scene, mainText: String((st as any).${flagMatch[1]} || ''), curActs: [] };`);
      stateReads.push(flagMatch[1]);
      continue;
    }
    if (part.startsWith('gs ')) {
      const gsMatch = part.match(/^gs\s+'([^']+)'\s*,\s*'([^']*)'\s*(.*)$/);
      if (gsMatch) {
        const mod = gsMatch[1];
        const fn = gsMatch[2];
        gsCalls.push(`${mod}.${fn}`);
        let rest = gsMatch[3].trim();
        let restArgs: string[] = [];
        if (rest) {
          if (rest.startsWith(',')) rest = rest.slice(1);
          restArgs = splitTopLevel(rest).map(a => a.trim()).filter(a => a !== '').map(a => translateValue(a, stateReads, todos, 'st'));
        }
        handlerBits.push(`qspCall(st, '${mod}', '${fn}'${restArgs.length ? ', ' + restArgs.join(', ') : ''});`);
        continue;
      }
      handlerBits.push(`// TODO-QSP: ${truncate(part, 60)}`);
      continue;
    }
    handlerBits.push(`// TODO-QSP: ${truncate(part, 60)}`);
  }

  if (!goto && handlerBits.length === 0) return null;

  const handlerCode = handlerBits.length > 0
    ? `handler: (st: GameState) => {\n${handlerBits.map(l => `    ${l}`).join('\n')}\n  }`
    : '';

  const gotoCode = goto
    ? `goto: ['${goto.target}', '${goto.arg}']`
    : '';

  const bits = [handlerCode, gotoCode].filter(Boolean).join(', ');
  return `{ label: '${esc(label)}', ${bits} },`;
}

function generateIf(
  node: QspIf,
  todos: string[],
  unsupported: string[],
  stateWrites: string[],
  stateReads: string[],
  gsCalls: string[],
  targets: Set<string>,
): string[] {
  const cond = translateCondition(node.condition, stateReads, todos);
  const thenLines = generateSceneBody(node.thenBody, todos, unsupported, stateWrites, stateReads, gsCalls, targets);
  const elseLines = node.elseBody.length > 0
    ? generateSceneBody(node.elseBody, todos, unsupported, stateWrites, stateReads, gsCalls, targets)
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
              parts.push(exprTranslated);
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
  // QSP ! operator (not equal) between operands: word!word
  c = c.replace(/(\w)!(\w)/g, '$1!==$2');
  // QSP array access with literal key: WORD['key'] or WORD["key"] (protect key from identifier replacement)
  // Must run before <<expr>> handler so dynamic keys like WORD['<<$ARGS[1]>>-type'] are handled correctly
  c = c.replace(/\$?([a-zA-Z_]\w*)\[(['"])([^'"]*)\2\]/g, (_, obj, q, key) => {
    const ph = `\u0000${phs.length}\u0000`;
    const keyExpr = key.includes('<<') ? buildKeyExpr(key, stateReads, todos, stateVar) : `'${key.replace(/''/g, "'").replace(/\\"/g, '"')}'`;
    phs.push([ph, `((${stateVar} as any).${obj} ?? 0)?.[${keyExpr}]`]);
    stateReads.push(obj);
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
  // arrsize() in conditions - QSP array size function (parenthesized)
  c = c.replace(/\b(?:\$?)arrsize\s*\(\s*['"]?\$?(\w+)['"]?\s*\)/g, (_, arrName) => {
    const ph = `\u0000${phs.length}\u0000`;
    phs.push([ph, `Object.keys((${stateVar} as any).${arrName} ?? {}).length`]);
    stateReads.push(arrName);
    return ph;
  });
  // arrsize 'arr' in conditions - QSP array size function (space-separated)
  c = c.replace(/\b(?:\$?)arrsize\s+['"]\$?(\w+)['"]/g, (_, arrName) => {
    const ph = `\u0000${phs.length}\u0000`;
    phs.push([ph, `Object.keys((${stateVar} as any).${arrName} ?? {}).length`]);
    stateReads.push(arrName);
    return ph;
  });
  // arrpos('$arr', val) in conditions - QSP array position function
  c = c.replace(/\b(?:\$?)arrpos\s*\(\s*['"]?\$?(\w+)['"]?\s*,\s*([^)]+)\)/g, (_, arrName, val) => {
    const ph = `\u0000${phs.length}\u0000`;
    const valTranslated = translateCondition(val.trim(), stateReads, todos, stateVar);
    phs.push([ph, `(Array.isArray((${stateVar} as any).${arrName}) ? ((${stateVar} as any).${arrName} as any[]).indexOf(${valTranslated}) : -1)`]);
    stateReads.push(arrName);
    return ph;
  });
  c = c.replace(/(?:\$)?ARGS\[\]/g, () => {
    const ph = `\u0000${phs.length}\u0000`;
    phs.push([ph, `((${stateVar} as any).locArgs ?? 0)`]);
    return ph;
  });
  c = c.replace(/(?:\$)?ARGS\[(\d+)\]/g, (_, idx) => {
    const ph = `\u0000${phs.length}\u0000`;
    phs.push([ph, `((${stateVar} as any).locArgs?.[${idx}] ?? 0)`]);
    return ph;
  });
  c = c.replace(/\bisnum\s*\(([^)]+)\)/g, (_, arg) => {
    const ph = `\u0000${phs.length}\u0000`;
    phs.push([ph, `!isNaN(${arg}) && ${arg} !== ''`]);
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
    c = c.split(phs[pi][0]).join(phs[pi][1]);
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
      const parts = key.split(/<<|>>/);
      const keyExpr = parts
        .map((p, i) => i % 2 === 1
           ? `String((${stateVar} as any).${p.trim()} || '')`
          : `'${p.replace(/''/g, "'").replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`)
        .join(' + ');
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
  return varName;
}

function translateValue(val: string, stateReads: string[], todos: string[], stateVar: string = 's'): string {
  let v = val.trim();
  if (/^\u0000\d+\u0000$/.test(v)) return v;
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
  // Pre-pass: handle <<expr>> inside single-quoted strings BEFORE unescapeDoubled
  // (so '' escapes are still visible for correct string boundary detection)
  if (v.startsWith("'") && v.endsWith("'") && v.includes('<<') && v.includes('>>')) {
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
        const inner = content.slice(realDynIdx + 2, k).replace(/''/g, "'");
        const post = content.slice(k + 1);
        const exprTranslated = translateValue(inner.trim(), stateReads, todos, stateVar);
        return `'${esc(pre)}' + ${exprTranslated} + '${esc(post)}'`;
      }
    }
  }
  const hasArith = /[+\-*/%]/.test(v) || /\bmod\b/.test(v);
  if (!hasArith) {
    v = unescapeDoubled(v);
    v = v.replace(/''([^']+?)''/g, "'$1'");
    v = v.replace(/""<<(.+?)>>""/g, '<<$1>>');
  }
  if (/^\d+$/.test(v)) return v.replace(/^0+(?=\d)/, '');
  if (/^-?\d+$/.test(v)) return v.startsWith('-') ? `(${v.replace(/^0+(?=\d)/, '')})` : v;
  if (/^\d+\.\d+$/.test(v)) return v;
  if (v === '' || v === "''" || v === '""') return "''";
  if (v.startsWith("'") && v.endsWith("'") && !v.includes('<<')) return `'${esc(v.slice(1, -1))}'`;
  if (v.startsWith('"') && v.endsWith('"') && !v.includes('<<')) return `'${esc(v.slice(1, -1))}'`;
  // QSP $ARGS[N] in value context
  const argsMatch = v.match(/^\$ARGS\[(\d+)\]$/);
  if (argsMatch) {
    return `((${stateVar} as any).locArgs?.[${argsMatch[1]}] ?? 0)`;
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
    return `((${stateVar} as any).${obj} ?? 0)?.[${keyExpr}]`;
  }
  // QSP array access with unquoted variable key: WORD[var] or WORD[$var]
  const arrAccUnq = v.match(/^(\$?[\w.]+)\[\$?([a-zA-Z_]\w*)\]$/);
  if (arrAccUnq) {
    const obj = arrAccUnq[1].replace(/^\$/, '').replace(/\./g, '?.');
    const idx = arrAccUnq[2];
    stateReads.push(arrAccUnq[1].replace(/^\$/, ''), idx);
    return `((${stateVar} as any).${obj} ?? 0)?.[String((${stateVar} as any).${idx} ?? 0)]`;
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
        if (inStr) { if (ch === strCh) inStr = false; continue; }
        if (ch === "'" || ch === '"') { inStr = true; strCh = ch; continue; }
        if (ch === '[') depth++;
        else if (ch === ']') { depth--; if (depth === 0) { end = j; break; } }
      }
      if (end !== -1 && v.slice(end + 1).trim() === '') {
        const rawKey = v.slice(start + 1, end);
        if (rawKey.includes('+') || rawKey.includes('$')) {
          const keyExpr = translateValue(rawKey, stateReads, todos, stateVar);
          stateReads.push(obj.replace(/^\$/, ''));
          return `((${stateVar} as any).${obj.replace(/^\$/, '').replace(/\./g, '?.')} ?? 0)?.[${keyExpr}]`;
        }
      }
    }
  }
  // QSP range: "N-M rest of line is comment" (e.g. "1-7 scale, based on...")
  const rangeMatch = v.match(/^(\d+)\s*-\s*(\d+)\s+\w/);
  if (rangeMatch) {
    const a = parseInt(rangeMatch[1]);
    const b = parseInt(rangeMatch[2]);
    return `Math.floor(Math.random() * ${b - a + 1}) + ${a}`;
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
      return translateValue(inner[1].trim(), stateReads, todos, stateVar);
    }
    // <<expr>> embedded in a larger expression. Skip <<...>> inside quoted array keys —
    // those are handled by the arithmetic branch's replaceArrayAccesses + buildKeyExpr.
    v = replaceDynamicsOutsideQuotes(v, (expr) => {
      const translated = translateValue(expr.trim(), stateReads, todos, stateVar);
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
  // QSP input function
  const inputMatch = v.match(/^input\s*\((.*)\)$/s) || v.match(/^input\s+'(.*)'$/);
  if (inputMatch) {
    todos.push(`input: ${truncate(v, 60)}`);
    return '0';
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
      return translateValue(gsMatch[1].trim(), stateReads, todos, stateVar);
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
  const parenCond = v.match(/^\((.+)\)$/);
  if (parenCond && /(<>)|(!=)|(>=)|(<=)|\s[<>]\s|\s=\s/.test(parenCond[1])) {
    return `(${translateCondition(parenCond[1].trim(), stateReads, todos, stateVar)})`;
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
    if (end !== -1) {
      const inner = v.slice(openIdx + 1, end);
      const parts = splitTopLevel(inner);
      if (parts.length === 3) {
        const cond = translateCondition(parts[0].trim(), stateReads, todos, stateVar);
        const a = translateValue(parts[1].trim(), stateReads, todos, stateVar);
        const b = translateValue(parts[2].trim(), stateReads, todos, stateVar);
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
      const mod = args[0] ? args[0].replace(/^['"]|['"]$/g, '') : '';
      const fn = args[1] ? args[1].replace(/^['"]|['"]$/g, '') : '';
      const rest = args.slice(2).map(a => translateValue(a, stateReads, todos, stateVar));
      return `qspFunc(${stateVar}, '${esc(mod)}', '${esc(fn)}'${rest.length ? ', ' + rest.join(', ') : ''})`;
    }
  }
  if (/^(rand|random)\(/i.test(v)) {
    const m = v.match(/^(?:rand|random)\((\d+)(?:\s*,\s*(\d+))?\)$/i);
    if (m) {
      const a = parseInt(m[1]);
      if (m[2] !== undefined) {
        const b = parseInt(m[2]);
        return `Math.floor(Math.random() * ${b - a + 1}) + ${a}`;
      }
      return `Math.floor(Math.random() * ${a})`;
    }
  }
  if (/^randInt\(/i.test(v)) {
    const m = v.match(/^randInt\((\d+),\s*(\d+)\)$/i);
    if (m) {
      const a = parseInt(m[1]);
      const b = parseInt(m[2]);
      return `Math.floor(Math.random() * ${b - a + 1}) + ${a}`;
    }
  }
  if (/^\$ARGS\[(\d+)\]$/.test(v)) {
    const idx = v.match(/^\$ARGS\[(\d+)\]$/)![1];
    return `(${stateVar} as any).locArgs?.[${idx}] ?? 0`;
  }
  if (/^\$locat\['([^']+)'\]$/.test(v)) {
    const key = v.match(/^\$locat\['([^']+)'\]$/)![1];
    return `(${stateVar} as any).locat?.['${key}'] ?? 0`;
  }
  if (TS_KEYWORDS.has(v)) return v;
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
        const a = translateValue(parts[1].trim(), stateReads, todos, stateVar);
        const b = translateValue(parts[2].trim(), stateReads, todos, stateVar);
        const ph = `\u0000${phs.length}\u0000`;
        phs.push([ph, `((${cond}) ? (${a}) : (${b}))`]);
        return ph;
      }
      return args;
    });
    // WORD[$var] dynamic array indexing
    v = v.replace(/\b([a-zA-Z_]\w*)\[\$?([a-zA-Z_]\w*)\]/g, (_, obj, idx) => {
      const ph = `\u0000${phs.length}\u0000`;
      phs.push([ph, `((${stateVar} as any).${obj} ?? 0)?.[String((${stateVar} as any).${idx} ?? 0)]`]);
      stateReads.push(obj, idx);
      return ph;
    });
    v = v.replace(/\$ARGS\[\]/g, () => {
      const ph = `\u0000${phs.length}\u0000`;
      phs.push([ph, `((${stateVar} as any).locArgs ?? 0)`]);
      return ph;
    });
    v = v.replace(/\$ARGS\[(\d+)\]/g, (_, idx) => {
      const ph = `\u0000${phs.length}\u0000`;
      phs.push([ph, `((${stateVar} as any).locArgs?.[${idx}] ?? 0)`]);
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
    v = replaceFuncCalls(v, stateReads, todos, stateVar, phs);
    // QSP built-in functions embedded in arithmetic
    v = replaceBuiltinFuncs(v, stateReads, todos, stateVar, phs);
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
            const exprTranslated = translateValue(inner.trim(), stateReads, todos, stateVar);
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
          phs.push([ph, `(Math.floor(Math.random() * (${bStr} - ${aStr} + 1)) + (${aStr}))`]);
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
          phs.push([ph, `(Math.floor(Math.random() * (${aStr} + 1)))`]);
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
              out += `((${stateVar} as any).${ident.replace(/\./g, '?.')} ?? 0)`;
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
      v = v.split(exprPhs[pi][0]).join(exprPhs[pi][1]);
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
    return `((${stateVar} as any).${v.replace(/\./g, '?.')} ?? 0)`;
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
  return s.replace(/''/g, '\u0000').replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\u0000/g, "\\'");
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

function qspStringToJs(s: string, stateReads: string[], todos: string[], stateVar: string = 's'): string {
  if (!s.includes('<<')) return `'${esc(s)}'`;
  // Segment IR: split into text / expr segments, then emit ONE template literal.
  const segs: { type: 'text' | 'expr'; value: string }[] = [];
  let rest = s;
  while (rest.includes('<<') && rest.includes('>>')) {
    const idx = rest.indexOf('<<');
    const closeIdx = rest.indexOf('>>', idx + 2);
    if (closeIdx === -1) break;
    if (idx > 0) segs.push({ type: 'text', value: rest.slice(0, idx) });
    const expr = rest.slice(idx + 2, closeIdx);
    segs.push({ type: 'expr', value: translateValue(expr.trim(), stateReads, todos, stateVar) });
    rest = rest.slice(closeIdx + 2);
  }
  if (rest.length > 0) segs.push({ type: 'text', value: rest });
  metrics.dynamicText++;
  let out = '`';
  for (const seg of segs) {
    if (seg.type === 'text') {
      let t = seg.value.replace(/''/g, "'");
      t = t.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
      out += t;
    } else {
      out += '${' + seg.value + '}';
    }
  }
  out += '`';
  return out;
}

function truncate(s: string, max: number): string {
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
      cur += ch;
      if (ch === strCh) {
        if (strCh === "'" && s[i + 1] === "'") { cur += "'"; i++; }
        else inStr = false;
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
  mid: (a) => a.length === 3 ? `((${a[0]}).slice((${a[1]})-1, ((${a[1]})-1)+(${a[2]})))` : `((${a[0]}).slice((${a[1]})-1))`,
  instr: (a) => `((${a[0]}).indexOf((${a[1]}))) + 1`,
  left: (a) => `((${a[0]}).slice(0, ${a[1]}))`,
  right: (a) => `((${a[0]}).slice((${a[0]}).length - ${a[1]}))`,
  len: (a) => `((${a[0]}).length)`,
  val: (a) => `parseFloat(${a[0]})`,
  str: (a) => `String(${a[0]})`,
  ucase: (a) => `((${a[0]}).toUpperCase())`,
  lcase: (a) => `((${a[0]}).toLowerCase())`,
  trim: (a) => `((${a[0]}).trim())`,
  replace: (a) => `((${a[0]}).split(${a[1]}).join(${a[2]}))`,
  max: (a) => `Math.max(${a.join(', ')})`,
  min: (a) => `Math.min(${a.join(', ')})`,
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

function replaceBuiltinFuncs(c: string, stateReads: string[], todos: string[], stateVar: string, phs: [string, string][]): string {
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
        const r = translateValue(a, stateReads, todos, stateVar);
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
    const expr = `((${stateVar} as any).${obj} ?? {})?.[${keyExpr}]`;
    const ph = `\u0000${phs.length}\u0000`;
    phs.push([ph, expr]);
    result += ph;
    i = j;
  }
  return result;
}

function replaceFuncCalls(c: string, stateReads: string[], todos: string[], stateVar: string, phs: [string, string][]): string {
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
    const mod = args[0] ? args[0].replace(/^['"]|['"]$/g, '') : '';
    let fn: string;
    if (args[1] && /^['"].*['"]$/.test(args[1])) {
      fn = args[1].replace(/^['"]|['"]$/g, '');
    } else if (args[1]) {
      fn = translateValue(args[1], stateReads, todos, stateVar);
    } else {
      fn = '';
    }
    const rest = args.slice(2).map(a => translateValue(a, stateReads, todos, stateVar));
    const ph = `\u0000${phs.length}\u0000`;
    const fnArg = /^['"].*['"]$/.test(args[1] ?? '') ? `'${fn}'` : fn;
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
