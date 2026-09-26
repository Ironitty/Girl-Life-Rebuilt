import type { QspLocation, QspNode, QspScene, QspIf, QspAct, QspText, QspImage, QspTitle, QspAssign, QspGoto, QspGsCall, QspTime, QspSetup, QspExit, QspJump, QspLabel, QspComment, QspUnknown } from './ast';

function isCleanGsArg(a: string): boolean {
  if (/^-?\d+(?:\.\d+)?$/.test(a)) return true;
  if (/^'.*'$/.test(a) || /^".*"$/.test(a)) return true;
  if (/^\$\w+$/.test(a)) return true;
  if (/^\$\w+\[\d+\]$/.test(a)) return true;
  if (/^\$\w+\['[^']*'\]$/.test(a)) return true;
  if (/^\$\w+\[\$\w+\]$/.test(a)) return true;
  if (/^\$ARGS\[\d+\]$/.test(a)) return true;
  if (/^\$locat\[[^\]]*\]$/.test(a)) return true;
  if (/^[a-zA-Z_]\w*$/.test(a)) return true;
  if (/^[a-zA-Z_]\w*\[\d+\]$/.test(a)) return true;
  if (/^[a-zA-Z_]\w*\['[^']*'\]$/.test(a)) return true;
  if (/^[a-zA-Z_]\w*\[\$\w+\]$/.test(a)) return true;
  if (/^[a-zA-Z_]\w*\(.*\)$/.test(a)) return true;
  if (/^\$\w+\s*[+\-*/]\s*\d+$/.test(a)) return true;
  if (/^[a-zA-Z_]\w*\[\d+\]\s*[+\-*/]\s*\d+$/.test(a)) return true;
  return false;
}

function splitTopLevelAmp(s: string): string[] {
  const parts: string[] = [];
  let cur = '';
  let inStr = false;
  let strCh = '';
  for (let i = 0; i < s.length; i++) {
    if (inStr) {
      cur += s[i];
      if (s[i] === strCh) {
        if (s[i + 1] === strCh) { cur += s[i + 1]; i++; continue; }
        inStr = false;
      }
      continue;
    }
    if (s[i] === "'" || s[i] === '"') { inStr = true; strCh = s[i]; cur += s[i]; continue; }
    if (s[i] === '&') {
      const t = cur.trim();
      if (t) parts.push(t);
      cur = '';
      continue;
    }
    cur += s[i];
  }
  const t = cur.trim();
  if (t) parts.push(t);
  if (s.includes("'") && s.includes('&') && parts.length > 1) {
  }
  return parts;
}

// QSP "&" statement separator in an assignment value:
//   "1 & $word['key'] = 'val'"  ->  first="1", second="word['key'] = 'val'"
// Finds the first & that is NOT inside a string literal.
function splitAssignStmtSep(value: string): { first: string; secondVar: string; secondOp: string; secondValue: string } | null {
  let inStr = false, strCh = '';
  for (let i = 0; i < value.length; i++) {
    const ch = value[i];
    if (inStr) {
      if (ch === strCh) {
        if (strCh === "'" && value[i + 1] === "'") { i++; }
        else inStr = false;
      }
    } else {
      if (ch === "'" || ch === '"') { inStr = true; strCh = ch; }
      else if (ch === '&') {
        const rest = value.slice(i + 1);
        const m = rest.match(/^\s*(\$?[a-zA-Z_]\w*(?:\['[^']*'\]|\[\w+\])?)\s*(\+=|-=|\/=|\*=|=)\s*(.+)$/);
        if (m) {
          return { first: value.slice(0, i).trim(), secondVar: m[1], secondOp: m[2], secondValue: m[3].trim() };
        }
      }
    }
  }
  return null;
}

// Emit assign nodes for an assignment whose value may contain multiple "&" statement separators.
function assignNodes(varName: string, op: string, value: string): QspAssign[] {
  const result: QspAssign[] = [];
  const sep = splitAssignStmtSep(value);
  if (sep) {
    result.push({ kind: 'assign', var: varName, op: op as '=' | '+=' | '-=' | '*=' | '/=', value: sep.first });
    result.push(...assignNodes(sep.secondVar, sep.secondOp, sep.secondValue));
  } else {
    result.push({ kind: 'assign', var: varName, op: op as '=' | '+=' | '-=' | '*=' | '/=', value: value });
  }
  return result;
}

// Extract the bracket key from "Word[key] = val" using bracket-aware scanning.
// Returns { varName, key, op, value } or null.
function extractBracketAssign(trimmed: string): { varName: string; key: string; op: string; value: string } | null {
  const m = trimmed.match(/^(\$?\w+)\[/);
  if (!m) return null;
  const varName = m[1];
  const bracketStart = m[0].length - 1;
  let depth = 0, inStr = false, strCh = '', bracketEnd = -1;
  for (let i = bracketStart; i < trimmed.length; i++) {
    const ch = trimmed[i];
    if (inStr) {
      if (ch === strCh) {
        if (strCh === "'" && trimmed[i + 1] === "'") { i++; }
        else inStr = false;
      }
      continue;
    }
    if (ch === "'" || ch === '"') { inStr = true; strCh = ch; continue; }
    if (ch === '[') depth++;
    else if (ch === ']') { depth--; if (depth === 0) { bracketEnd = i; break; } }
  }
  if (bracketEnd === -1) return null;
  const key = trimmed.slice(bracketStart + 1, bracketEnd);
  const afterBracket = trimmed.slice(bracketEnd + 1).trimStart();
  const opMatch = afterBracket.match(/^(\*=?|\/=?|\+=|-=|=)\s*(.+)$/);
  if (!opMatch) return null;
  return { varName, key, op: opMatch[1], value: opMatch[2].trim() };
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
        if (s[i + 1] === strCh) { cur += strCh; i++; } else inStr = false;
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
  if (cur.trim() !== '') parts.push(cur);
  return parts;
}

export function parseQsp(content: string, fileName: string): QspLocation {
  const lines = content.split('\n');
  const name = fileName.replace('.qsps', '');
  const unsupported: string[] = [];

  let title = '';
  let region = '';
  let locationType = '';
  let locclass = '';

  const scenes: QspScene[] = [];
  const topLevel: QspNode[] = [];

  const bodyLines: string[] = [];
  let inBody = false;
  let inBlockComment = false;

  for (const raw of lines) {
    const line = raw.replace(/\t/g, '  ');
    const trimmed = line.trim();

    if (inBlockComment) {
      if (trimmed.endsWith('!}') || trimmed.endsWith('!!}')) inBlockComment = false;
      if (inBody) bodyLines.push(line);
      continue;
    }
    if (trimmed.startsWith('!{') || trimmed.startsWith('!!{')) {
      const afterBrace = trimmed.slice(2).trim();
      const isMultiLineStr = /^\$(\w+)\s*(\+=|-=|\/=|\*=|=)\s*(["'])$/.test(afterBrace) || /^\$(\w+)\['([^']+)'\]\s*(\+=|-=|\/=|\*=|=)\s*(["'])$/.test(afterBrace);

      if (!trimmed.endsWith('!}') && !isMultiLineStr) inBlockComment = true;
      if (inBody) {
        if (isMultiLineStr) bodyLines.push(afterBrace);
        else bodyLines.push(line);
      }
      continue;
    }

    if (trimmed.startsWith('# ') && !inBody) {
      inBody = true;
      continue;
    }
    if (trimmed.startsWith('---')) break;
    if (!inBody) continue;
    if (!trimmed) continue;

    const titleMatch = trimmed.match(/\$func\('wrap',\s*'([^']*)',\s*'((?:[^']|'')*)'\)/);
    if (titleMatch && !title) { title = unescapeQsp(titleMatch[2]); bodyLines.push(line); continue; }

    const regionMatch = trimmed.match(/\$region\s*=\s*'([^']+)'/);
    if (regionMatch) { region = regionMatch[1]; bodyLines.push(line); continue; }

    const typeMatch = trimmed.match(/\$location_type\s*=\s*'([^']+)'/);
    if (typeMatch) { locationType = typeMatch[1]; bodyLines.push(line); continue; }

    const classMatch = trimmed.match(/\$locclass\s*=\s*'([^']+)'/);
    if (classMatch) { locclass = classMatch[1]; bodyLines.push(line); continue; }

    bodyLines.push(line);
  }

  const hasInstr = bodyLines.some(l => l.includes('instr('));
  const hasToAscii = bodyLines.some(l => l.includes('to_ascii'));
  const parseResult = parseBlock(bodyLines, 0, unsupported);
  const allNodes = parseResult.nodes;

  for (const node of allNodes) {
    if (node.kind === 'scene') {
      scenes.push(node);
    } else {
      topLevel.push(node);
    }
  }

  if (!title) {
    const firstText = findFirstText(allNodes);
    if (firstText) title = firstText;
  }

  return { name, title, region, locationType, locclass, scenes, topLevel, lineCount: lines.length, unsupported };
}

function findFirstText(nodes: QspNode[]): string | null {
  for (const n of nodes) {
    if (n.kind === 'text' && !n.dynamic) return n.content;
    if (n.kind === 'scene') {
      const t = findFirstText(n.body);
      if (t) return t;
    }
    if (n.kind === 'if') {
      const t = findFirstText(n.thenBody);
      if (t) return t;
    }
  }
  return null;
}

interface ParseResult {
  nodes: QspNode[];
  endIdx: number;
}

  function parseBlock(lines: string[], startIdx: number, unsupported: string[], stopAtEnd = true): ParseResult {
    const nodes: QspNode[] = [];
    let i = startIdx;
    let inBlockComment = false;

      while (i < lines.length) {
        const raw = lines[i];
        const trimmed = raw.trim();
        if (!trimmed) { i++; continue; }




        // QSP block comment: !{ ... !} or !!{ ... end} or !!{ ... } (may span lines)
         if (inBlockComment) {
           if (trimmed.endsWith('!}') || trimmed.endsWith('!!}') || trimmed.endsWith('end}') || trimmed === '}') inBlockComment = false;
           i++;
           continue;
         }
         if (trimmed.startsWith('!{') || trimmed.startsWith('!!{')) {
           if (!trimmed.endsWith('!}') && !trimmed.endsWith('end}') && trimmed !== '}') inBlockComment = true;
           i++;
           continue;
         }

      if (stopAtEnd && (trimmed === 'end' || trimmed === 'end ' || trimmed === 'end !}' || /^end\s*&\s*!!/.test(trimmed))) {
        return { nodes, endIdx: i + 1 };
      }

    // Scene: if/elseif $ARGS[0] = 'x': (only at top level, not indented)
    const rawLine = lines[i];
    const sceneMatch = trimmed.match(/^(if|elseif)\s+\$ARGS\[0\]\s*=\s*'([^']*)'\s*:\s*$/i);
    if (sceneMatch && !rawLine.startsWith('\t') && !rawLine.startsWith(' ')) {
      // If this is the first branch (if, not elseif), check whether the next
      // non-indented line is a non-scene elseif. If so, the whole chain is a
      // regular if/else, not a scene chain (e.g. map_view, arousal, _shop_icon_image).
      if (sceneMatch[1] === 'if') {
        let j = i + 1;
        while (j < lines.length) {
          const nt = lines[j].trim();
          if (nt && !lines[j].startsWith('\t') && !lines[j].startsWith(' ')) break;
          j++;
        }
        if (j < lines.length) {
          const nxt = lines[j].trim();
          if (/^elseif\s+/i.test(nxt) && !/^\s*elseif\s+\$ARGS\[0\]\s*=\s*'[^']*'\s*:/i.test(nxt)) {
            // Non-scene elseif follows — fall through to regular if/else handling
          } else {
            if (!stopAtEnd) {
              return { nodes, endIdx: i };
            }
            const arg = sceneMatch[2];
            const inner = parseBlock(lines, i + 1, unsupported, false);
            const scene: QspScene = { kind: 'scene', arg, body: inner.nodes };
            nodes.push(scene);
            i = inner.endIdx;
            continue;
          }
        } else {
          if (!stopAtEnd) {
            return { nodes, endIdx: i };
          }
          const arg = sceneMatch[2];
          const inner = parseBlock(lines, i + 1, unsupported, false);
          const scene: QspScene = { kind: 'scene', arg, body: inner.nodes };
          nodes.push(scene);
          i = inner.endIdx;
          continue;
        }
      } else {
        if (!stopAtEnd) {
          return { nodes, endIdx: i };
        }
        const arg = sceneMatch[2];
        const inner = parseBlock(lines, i + 1, unsupported, false);
        const scene: QspScene = { kind: 'scene', arg, body: inner.nodes };
        nodes.push(scene);
        i = inner.endIdx;
        continue;
      }
    }

    // Scene (one-liner): if $ARGS[0] = 'x': statement (only at top level, not indented)
    const sceneOnelineMatch = trimmed.match(/^(?:if|elseif)\s+\$ARGS\[0\]\s*=\s*'([^']*)'\s*:\s*(.+)$/i);
    if (sceneOnelineMatch && !rawLine.startsWith('\t') && !rawLine.startsWith(' ')) {
      if (!stopAtEnd) {
        return { nodes, endIdx: i };
      }
      const arg = sceneOnelineMatch[1];
      const stmtResult = parseSingleLine(sceneOnelineMatch[2].trim(), lines, i, unsupported);
      const scene: QspScene = { kind: 'scene', arg, body: stmtResult.nodes };
      nodes.push(scene);
      i = stmtResult.nextIdx;
      continue;
    }

    // Scene (multi-value): if $ARGS[0] = '' or $ARGS[0] = 'start' or $ARGS[0] = 'main': (only at top level)
    const sceneMultiMatch = trimmed.match(/^if\s+\$ARGS\[0\]\s*=\s*'([^']*)'\s+(?:or\s+\$ARGS\[0\]\s*=\s*'[^']*'\s+)*or\s+\$ARGS\[0\]\s*=\s*'([^']*)'\s*:\s*$/i);
    if (sceneMultiMatch && !rawLine.startsWith('\t') && !rawLine.startsWith(' ')) {
      if (!stopAtEnd) {
        return { nodes, endIdx: i };
      }
      const allValues: string[] = [];
      const valRe = /\$ARGS\[0\]\s*=\s*'([^']*)'/g;
      let vm: RegExpExecArray | null;
      while ((vm = valRe.exec(trimmed)) !== null) {
        allValues.push(vm[1]);
      }
      const inner = parseBlock(lines, i + 1, unsupported, false);
      for (const val of allValues) {
        nodes.push({ kind: 'scene', arg: val, body: inner.nodes });
      }
      i = inner.endIdx;
      continue;
    }

    // Scene (mixed multi-value): if $ARGS[0] = 'x' or $var = 'val': (only at top level)
    const sceneMixedMatch = trimmed.match(/^if\s+\$ARGS\[0\]\s*=\s*'([^']*)'\s+or\s+\$\w+\s*=\s*'[^']*'\s*:\s*$/i);
    if (sceneMixedMatch && !rawLine.startsWith('\t') && !rawLine.startsWith(' ')) {
      if (!stopAtEnd) {
        return { nodes, endIdx: i };
      }
      const arg = sceneMixedMatch[1];
      const inner = parseBlock(lines, i + 1, unsupported, false);
      const scene: QspScene = { kind: 'scene', arg, body: inner.nodes };
      nodes.push(scene);
      i = inner.endIdx;
      continue;
    }

    // Act block: act 'label':
    const actBlockMatch = trimmed.match(/^act\s*\'((?:[^\']|\'\')*)\'\s*:\s*$/i);
    if (actBlockMatch) {
      const label = unescapeQsp(actBlockMatch[1]);
      const inner = parseBlock(lines, i + 1, unsupported);
      const act: QspAct = { kind: 'act', label, body: inner.nodes };
      nodes.push(act);
      i = inner.endIdx;
      continue;
    }

    const actFuncBlockMatch = trimmed.match(/^act\s+(\$?func\(.+?\))\s*:\s*$/i);
    if (actFuncBlockMatch) {
      const labelExpr = actFuncBlockMatch[1].trim();
      const inner = parseBlock(lines, i + 1, unsupported);
      const act: QspAct = { kind: 'act', label: labelExpr, body: inner.nodes, dynamicLabel: true };
      nodes.push(act);
      i = inner.endIdx;
      continue;
    }

    // Act with iif() dynamic label: act iif(cond, 'a', 'b'): [rest]
    if (/^act\s+iif\s*\(/i.test(trimmed)) {
      const iifStart = trimmed.indexOf('iif(');
      let depth = 0, iifEnd = -1, inStr = false, strCh = '';
      for (let j = iifStart; j < trimmed.length; j++) {
        const ch = trimmed[j];
        if (inStr) {
          if (ch === strCh) {
            if (strCh === "'" && trimmed[j + 1] === "'") { j++; }
            else inStr = false;
          }
          continue;
        }
        if (ch === "'" || ch === '"') { inStr = true; strCh = ch; continue; }
        if (ch === '(') depth++;
        else if (ch === ')') { depth--; if (depth === 0) { iifEnd = j; break; } }
      }
      if (iifEnd !== -1) {
        const labelExpr = trimmed.slice(iifStart, iifEnd + 1);
        const after = trimmed.slice(iifEnd + 1).trim();
        // Find top-level ':' (not inside quotes or parens)
        let colonIdx = -1, inStr2 = false, strCh2 = '', depth2 = 0;
        for (let ci = 0; ci < after.length; ci++) {
          const ch = after[ci];
          if (inStr2) {
            if (ch === strCh2) {
              if (strCh2 === "'" && after[ci + 1] === "'") { ci++; }
              else inStr2 = false;
            }
            continue;
          }
          if (ch === "'" || ch === '"') { inStr2 = true; strCh2 = ch; continue; }
          if (ch === '(') depth2++;
          else if (ch === ')') depth2--;
          else if (ch === ':' && depth2 === 0) { colonIdx = ci; break; }
        }
        if (colonIdx !== -1) {
          const rest = after.slice(colonIdx + 1).trim();
          const inner = parseBlock(lines, i + 1, unsupported);
          const act: QspAct = { kind: 'act', label: labelExpr, body: inner.nodes, dynamicLabel: true };
          if (rest) {
            const gtMatch = rest.match(/^gt\s+'([^']+)'\s*,\s*'([^']*)'\s*$/);
            if (gtMatch) act.inlineGoto = { target: gtMatch[1], arg: gtMatch[2], arg2: undefined };
          }
          nodes.push(act);
          i = inner.endIdx;
          continue;
        }
      }
    }

    // Act with dynamic label: act 'Label' + $func('mod', 'func'): rest
    const actDynPrefix = trimmed.match(/^act\s*\'((?:[^\']|\'\')*)\'\s*\+\s*/i);
    if (actDynPrefix) {
      const label = unescapeQsp(actDynPrefix[1]);
      const restAfterPrefix = trimmed.slice(actDynPrefix[0].length);
      let colonIdx = -1;
      let depth = 0;
      let inStr = false;
      let strCh = '';
      for (let ci = 0; ci < restAfterPrefix.length; ci++) {
        if (inStr) {
          if (restAfterPrefix[ci] === strCh) {
            if (restAfterPrefix[ci + 1] === strCh) { ci++; continue; }
            inStr = false;
          }
          continue;
        }
        if (restAfterPrefix[ci] === "'" || restAfterPrefix[ci] === '"') { inStr = true; strCh = restAfterPrefix[ci]; continue; }
        if (restAfterPrefix[ci] === '(') depth++;
        else if (restAfterPrefix[ci] === ')') depth--;
        else if (restAfterPrefix[ci] === ':' && depth === 0) { colonIdx = ci; break; }
      }
      if (colonIdx === -1) continue;
      const dynPart = restAfterPrefix.slice(0, colonIdx).trim();
      const rest = restAfterPrefix.slice(colonIdx + 1).trim();
      const multiPartMatch = dynPart.match(/^(\S+\(.*?\))\s*\+\s*\'((?:[^\']|\'\')*)\'$/);
      if (multiPartMatch) {
        const funcCall = multiPartMatch[1];
        const suffix = unescapeQsp(multiPartMatch[2]);
        const act: QspAct = { kind: 'act', label: `'${label}' + ${funcCall} + '${suffix}'`, body: [], dynamicLabel: true };
        if (rest) {
          const gtMatch = rest.match(/^gt\s+'([^']+)'\s*(?:,\s*('[^']*'|\$\w+\['[^']*'\]|\$\w+|\w+))?\s*(?:,\s*('[^']*'|\$\w+\['[^']*'\]|\$\w+|\w+))?$/);
          if (gtMatch) {
            act.inlineGoto = { target: gtMatch[1], arg: (gtMatch[2] && gtMatch[2].startsWith("'") && gtMatch[2].endsWith("'") ? gtMatch[2].slice(1, -1) : gtMatch[2]) || '', arg2: (gtMatch[3] && gtMatch[3].startsWith("'") && gtMatch[3].endsWith("'") ? gtMatch[3].slice(1, -1) : gtMatch[3]) };
          } else {
            act.inlineStatements = rest;
          }
          nodes.push(act);
          i++;
          continue;
        }
        const inner = parseBlock(lines, i + 1, unsupported);
        act.body = inner.nodes;
        i = inner.endIdx;
        nodes.push(act);
        continue;
      }
      const isCostLabel = /^\$?func\(\s*'willpower'\s*,\s*'get_willcost_string'\s*\)$/.test(dynPart) ||
        /^\$?func\(\s*'money'\s*,\s*'get_cost_string'\s*,/.test(dynPart);
      const act: QspAct = { kind: 'act', label: isCostLabel ? label : `${label} [+${truncate(dynPart, 40)}]`, body: [] };

      if (rest) {
        const gtVarTargetMatch = rest.match(/^gt\s+(\$\w+(\['[^']*'\]|\[\$\w+\]|\[\d+\])?|\w+)\s*(?:,\s*('[^']*'|\$\w+|\w+))?\s*$/);
        if (gtVarTargetMatch) {
          act.inlineGoto = { target: gtVarTargetMatch[1], arg: (gtVarTargetMatch[3] && gtVarTargetMatch[3].startsWith("'") && gtVarTargetMatch[3].endsWith("'") ? gtVarTargetMatch[3].slice(1, -1) : gtVarTargetMatch[3]) || '', arg2: undefined };
        } else {
        const gt4Match = rest.match(/^gt\s+'([^']+)'\s*,\s*'([^']*)'\s*,\s*(\$\w+|\w+)\s*,\s*'([^']*)'\s*$/);
        if (gt4Match) {
          act.inlineGoto = { target: gt4Match[1], arg: gt4Match[2], arg2: gt4Match[3].replace(/^\$/, ''), arg3: gt4Match[4] };
        } else {
          const gtArithMatch = rest.match(/^gt\s+'([^']+)'\s*,\s*'([^']*)'\s*,\s*([\d+\-*/()\s\w.,]+)$/);
          if (gtArithMatch) {
            act.inlineGoto = { target: gtArithMatch[1], arg: gtArithMatch[2], arg2: gtArithMatch[3].trim() };
          } else {
            const gtMatch = rest.match(/^gt\s+'([^']+)'\s*(?:,\s*('[^']*'|\$\w+\['[^']*'\]|\$\w+|\w+))?\s*(?:,\s*('[^']*'|\$\w+\['[^']*'\]|\$\w+|\w+))?$/);
            if (gtMatch) {
              act.inlineGoto = { target: gtMatch[1], arg: (gtMatch[2] && gtMatch[2].startsWith("'") && gtMatch[2].endsWith("'") ? gtMatch[2].slice(1, -1) : gtMatch[2]) || '', arg2: (gtMatch[3] && gtMatch[3].startsWith("'") && gtMatch[3].endsWith("'") ? gtMatch[3].slice(1, -1) : gtMatch[3]) };
            } else {
              const gtVarArgMatch = rest.match(/^gt\s+'([^']+)'\s*,\s*(\$\w+\['[^']*'\]|\$\w+|\w+)\s*$/);
              if (gtVarArgMatch) {
                act.inlineGoto = { target: gtVarArgMatch[1], arg: gtVarArgMatch[2].replace(/^\$/, ''), arg2: undefined };
              } else {
                const gtIifMatch = rest.match(/^gt\s+'([^']+)'\s*,\s*iif\(/);
                if (gtIifMatch) {
                  const iifStart = rest.indexOf('iif(');
                  let depth = 0, iifEnd = -1, inStr = false, strCh = '';
                  for (let j = iifStart; j < rest.length; j++) {
                    const ch = rest[j];
                    if (inStr) { if (ch === strCh) inStr = false; continue; }
                    if (ch === "'" || ch === '"') { inStr = true; strCh = ch; continue; }
                    if (ch === '(') depth++;
                    else if (ch === ')') { depth--; if (depth === 0) { iifEnd = j; break; } }
                  }
                  if (iifEnd !== -1) {
                    const iifExpr = rest.slice(iifStart, iifEnd + 1);
                    act.inlineGoto = { target: gtIifMatch[1], arg: iifExpr, arg2: undefined };
                  } else {
                    act.inlineStatements = rest;
                  }
                } else {
                  act.inlineStatements = rest;
                }
              }
            }
          }
        }
        }
        i++;
      } else {
        const inner = parseBlock(lines, i + 1, unsupported);
        act.body = inner.nodes;
        i = inner.endIdx;
      }

      nodes.push(act);
      continue;
    }

    // Act with $func('wrap', ...) handler: act 'label': $func('wrap', 'style', 'text')
    const actFuncWrapMatch = trimmed.match(/^act\s*\'((?:[^\']|\'\')*)\'\s*:\s*\$func\('wrap',\s*'([^']*)',\s*'((?:[^\']|\'\')*)\'\)\s*$/i);
    if (actFuncWrapMatch) {
      const label = unescapeQsp(actFuncWrapMatch[1]);
      const style = actFuncWrapMatch[2];
      const text = unescapeQsp(actFuncWrapMatch[3]);
      const act: QspAct = { kind: 'act', label, body: [] };
      act.inlineText = text;
      act.inlineTextStyle = style;
      nodes.push(act);
      i++;
      continue;
    }

    // Act inline: act 'label': gt 'target', 'arg'
    const actInlineMatch = trimmed.match(/^act\s*\'((?:[^\']|\'\')*)\'\s*:\s*(.+)$/i);
    if (actInlineMatch) {
      const label = unescapeQsp(actInlineMatch[1]);
      const rest = actInlineMatch[2].trim();
      const act: QspAct = { kind: 'act', label, body: [] };

      const isXgt = rest.startsWith('xgt ');
      const gtCmd = isXgt ? 'xgt' : 'gt';
      const gtDynTargetMatch = rest.match(new RegExp(`^${gtCmd}\\s+'([^']+)'\\s*\\+\\s*(\\$\\w+)\\s*(?:,\\s*'([^']*)')?\\s*(?:,\\s*('[^']*'|\\w+))?$`));
      if (gtDynTargetMatch) {
        act.inlineGoto = { target: gtDynTargetMatch[2], arg: gtDynTargetMatch[3] || '', arg2: gtDynTargetMatch[4] };
      } else {
        const gtArithMatch = rest.match(new RegExp(`^${gtCmd}\\s+'([^']+)'\\s*,\\s*'([^']*)'\\s*,\\s*([\\d+\\-*/()\\s\\w.,]+)$`));
        if (gtArithMatch) {
          act.inlineGoto = { target: gtArithMatch[1], arg: gtArithMatch[2], arg2: gtArithMatch[3].trim() };
        } else {
        const gtMatch = rest.match(new RegExp(`^${gtCmd}\\s+'([^']+)'\\s*(?:,\\s*('[^']*'|\\$\\w+\\['[^']*'\\]|\\$\\w+|\\w+))?\\s*(?:,\\s*('[^']*'|\\$\\w+\\['[^']*'\\]|\\$\\w+|\\w+))?$`));
        if (gtMatch) {
          act.inlineGoto = { target: gtMatch[1], arg: (gtMatch[2] && gtMatch[2].startsWith("'") && gtMatch[2].endsWith("'") ? gtMatch[2].slice(1, -1) : gtMatch[2]) || '', arg2: (gtMatch[3] && gtMatch[3].startsWith("'") && gtMatch[3].endsWith("'") ? gtMatch[3].slice(1, -1) : gtMatch[3]) };
        } else {
          const gtVarArgMatch = rest.match(new RegExp(`^${gtCmd}\\s+'([^']+)'\\s*,\\s*(\\$\\w+\\['[^']*'\\]|\\$\\w+|\\w+)\\s*$`));
          if (gtVarArgMatch) {
            act.inlineGoto = { target: gtVarArgMatch[1], arg: gtVarArgMatch[2].replace(/^\$/, ''), arg2: undefined };
          } else {
            const gtIifMatch = rest.match(new RegExp(`^${gtCmd}\\s+'([^']+)'\\s*,\\s*iif\\(`));
            if (gtIifMatch) {
              const iifStart = rest.indexOf('iif(');
              let depth = 0, iifEnd = -1, inStr = false, strCh = '';
              for (let j = iifStart; j < rest.length; j++) {
                const ch = rest[j];
                if (inStr) { if (ch === strCh) inStr = false; continue; }
                if (ch === "'" || ch === '"') { inStr = true; strCh = ch; continue; }
                if (ch === '(') depth++;
                else if (ch === ')') { depth--; if (depth === 0) { iifEnd = j; break; } }
              }
              if (iifEnd !== -1) {
                const iifExpr = rest.slice(iifStart, iifEnd + 1);
                act.inlineGoto = { target: gtIifMatch[1], arg: iifExpr, arg2: undefined };
              } else {
                act.inlineStatements = rest;
              }
            } else {
              act.inlineStatements = rest;
            }
          }
        }
        }
      }

      nodes.push(act);
      i++;
      continue;
    }


    // If block: if condition:
    const ifMatch = trimmed.match(/^if\s+(.+?)\s*:\s*$/);
    if (ifMatch) {
      const { node: ifNode, nextIdx } = parseIfChain(lines, i + 1, ifMatch[1], unsupported);
      nodes.push(ifNode);
      i = nextIdx;
      continue;
    }

    // Inline if: if cond: stmt1 & stmt2
    // Use bracket/quote-aware scan to find the condition separator colon
    const inlineIfPrefix = trimmed.match(/^if\s+/);
    if (inlineIfPrefix) {
      const rest = trimmed.slice(inlineIfPrefix[0].length);
      let colonIdx = -1;
      let depth = 0;
      let inStr = false;
      let strCh = '';
      for (let ci = 0; ci < rest.length; ci++) {
        if (inStr) {
          if (rest[ci] === strCh) {
            if (rest[ci + 1] === strCh) { ci++; continue; }
            inStr = false;
          }
          continue;
        }
        if (rest[ci] === "'" || rest[ci] === '"') { inStr = true; strCh = rest[ci]; continue; }
        if (rest[ci] === '[') depth++;
        else if (rest[ci] === ']') depth--;
        else if (rest[ci] === ':' && depth === 0) { colonIdx = ci; break; }
      }
      if (colonIdx !== -1) {
      const condition = rest.slice(0, colonIdx).trim();
      let stmtStr = rest.slice(colonIdx + 1).trim();
      // Multi-line string in inline if: if the stmt has an unclosed quote, consume subsequent lines
      const qMatch = stmtStr.match(/['"]/);
      if (qMatch) {
        const q = qMatch[0];
        let quoteCount = 0;
        for (let qi = 0; qi < stmtStr.length; qi++) {
          if (stmtStr[qi] === q) {
            if (stmtStr[qi + 1] === q) { qi++; continue; }
            quoteCount++;
          }
        }
        if (quoteCount % 2 === 1) {
          let next = i + 1;
          while (next < lines.length) {
            const cont = lines[next].trim();
            stmtStr += '\n' + cont;
            let qc = 0;
            for (let qi = 0; qi < stmtStr.length; qi++) {
              if (stmtStr[qi] === q) {
                if (stmtStr[qi + 1] === q) { qi++; continue; }
                qc++;
              }
            }
            if (qc % 2 === 0) break;
            next++;
          }
          i = next - 1;
        }
      }
      // Split by 'else' keyword (top-level, not in strings)
      let elseIdx = -1;
      {
        let inStr2 = false, strCh2 = '';
        for (let ei = 0; ei < stmtStr.length - 4; ei++) {
          if (inStr2) {
            if (stmtStr[ei] === strCh2) {
              if (stmtStr[ei + 1] === strCh2) { ei++; continue; }
              inStr2 = false;
            }
            continue;
          }
          if (stmtStr[ei] === "'" || stmtStr[ei] === '"') { inStr2 = true; strCh2 = stmtStr[ei]; continue; }
          if (stmtStr.slice(ei, ei + 5) === 'else ') { elseIdx = ei; break; }
        }
      }
      const thenStr = elseIdx !== -1 ? stmtStr.slice(0, elseIdx).trim() : stmtStr;
      const elseStr = elseIdx !== -1 ? stmtStr.slice(elseIdx + 5).trim() : '';
      const thenStrClean = thenStr.replace(/\s*&\s*!!.*$/, '').trim();
      const elseStrClean = elseStr.replace(/\s*&\s*!!.*$/, '').trim();
      const thenStmts = splitTopLevelAmp(thenStrClean);
      const thenBody: QspNode[] = [];
      for (const stmt of thenStmts) {
        const parsed = parseInlineStatement(stmt, unsupported);
        thenBody.push(...parsed);
      }
      const elseBody: QspNode[] = [];
      if (elseStrClean) {
        const elseStmts = splitTopLevelAmp(elseStrClean);
        for (const stmt of elseStmts) {
          const parsed = parseInlineStatement(stmt, unsupported);
          elseBody.push(...parsed);
        }
      }
      nodes.push({ kind: 'if', condition, thenBody, elseBody });
      i++;
      continue;
      }
    }


    // Multi-line string: starts with quote, doesn't end with quote, no + concatenation
    if ((trimmed.startsWith("'") && !trimmed.endsWith("'") && !/'\s*\+|\+\s*'/.test(trimmed)) ||
        (trimmed.startsWith('"') && !trimmed.endsWith('"') && !/"\s*\+|\+\s*"/.test(trimmed))) {
      const qch = trimmed[0];
      let fullStr = trimmed;
      let consumedLines = 0;
      while (true) {
        let inStr = false;
        for (let qi = 0; qi < fullStr.length; qi++) {
          if (inStr) {
            if (fullStr[qi] === qch) {
              if (fullStr[qi + 1] === qch) { qi++; continue; }
              inStr = false;
            }
          } else if (fullStr[qi] === qch) {
            inStr = true;
          }
        }
        if (!inStr) break;
        const next = lines[i + 1 + consumedLines];
        if (next === undefined) break;
        fullStr += '\n' + next.trim();
        consumedLines++;
      }
      const inner = fullStr.slice(1, -1);
      const isImage = inner.includes('<img') || inner.includes('<center>');
      if (isImage) {
        const imgMatch = inner.match(/src="([^"]+)"/);
        if (imgMatch) {
          nodes.push({ kind: 'image', src: imgMatch[1] });
          i += 1 + consumedLines;
          continue;
        }
      }
      const dynamic = inner.includes('<<') || inner.includes("iif(") || inner.includes('+');
      nodes.push({ kind: 'text', content: dynamic ? inner : unescapeQsp(inner), dynamic });
      i += 1 + consumedLines;
      continue;
    }

    // Text line with dynamic expression: 'text' + $var[...] or "text" + $var[...]
    if ((trimmed.startsWith("'") && !trimmed.endsWith("'") && /'\s*\+|\+\s*'/.test(trimmed)) ||
        (trimmed.startsWith('"') && !trimmed.endsWith('"') && /"\s*\+|\+\s*"/.test(trimmed))) {
      nodes.push({ kind: 'text', content: trimmed, dynamic: true });
      i++;
      continue;
    }

    // Text line: 'text' or "text"
    if ((trimmed.startsWith("'") && trimmed.endsWith("'")) ||
        (trimmed.startsWith('"') && trimmed.endsWith('"'))) {
      const qch = trimmed[0];
      // Check if this is a complex expression with + concatenation at top level
      let hasTopPlus = false, inStr = false, strCh = '', depth = 0;
      let start = 1;
      if (trimmed[1] === qch) {
        start = 2;
      } else {
        inStr = true;
        strCh = qch;
      }
      for (let ci = start; ci < trimmed.length - 1; ci++) {
        const ch = trimmed[ci];
        if (inStr) {
          if (ch === strCh) {
            if (trimmed[ci + 1] === strCh) { ci++; }
            else inStr = false;
          } else if (ch === '<' && trimmed[ci + 1] === '<') {
            const closeIdx = trimmed.indexOf('>>', ci + 2);
            if (closeIdx !== -1) ci = closeIdx + 1;
          }
        } else if (ch === '<' && trimmed[ci + 1] === '<') {
          const closeIdx = trimmed.indexOf('>>', ci + 2);
          if (closeIdx !== -1) ci = closeIdx + 1;
        } else if (ch === "'" || ch === '"') {
          inStr = true; strCh = ch;
        } else if (ch === '(') { depth++; }
        else if (ch === ')') { depth--; }
        else if (ch === '+' && depth === 0) { hasTopPlus = true; break; }
      }
    if (hasTopPlus) {
      nodes.push({ kind: 'text', content: trimmed, dynamic: true });
    } else {
      const inner = trimmed.slice(1, -1);
        const isImage = inner.includes('<img') || inner.includes('<center>');
        if (isImage) {
          const imgMatch = inner.match(/src="([^"]+)"/);
          if (imgMatch) {
            nodes.push({ kind: 'image', src: imgMatch[1] });
            i++;
            continue;
          }
        }
        const dynamic = inner.includes('<<') || inner.includes("iif(") || inner.includes('+');
        nodes.push({ kind: 'text', content: dynamic ? inner : unescapeQsp(inner), dynamic });
      }
      i++;
      continue;
    }

    // Goto: gt 'target', 'arg' or xgt 'target', 'arg'
    const gtAnyMatch = trimmed.match(/^(?:gt|xgt)\s*(.+)$/);
    if (gtAnyMatch) {
      const argsStr = gtAnyMatch[1].trim();
      const args = splitTopLevel(argsStr).map(a => a.trim()).filter(Boolean);
      if (args.length >= 1) {
        const target = args[0];
        const isDynamicTarget = target.startsWith('$') || target.includes('<<');
        if (!isDynamicTarget) {
          const t = target.startsWith("'") && target.endsWith("'") ? target.slice(1, -1) : target;
          const a1 = args[1] || '';
          const a2 = args[2] || '';
          const a3 = args[3] || '';
          const a1Quoted = !!(a1 && a1.startsWith("'") && a1.endsWith("'"));
          const a2Quoted = !!(a2 && a2.startsWith("'") && a2.endsWith("'"));
          const a3Quoted = !!(a3 && a3.startsWith("'") && a3.endsWith("'"));
          let cleanA1 = a1;
          let cleanA2 = a2;
          let cleanA3 = a3;
          if (a1Quoted) cleanA1 = a1.slice(1, -1);
          if (a2Quoted) cleanA2 = a2.slice(1, -1);
          if (a3Quoted) cleanA3 = a3.slice(1, -1);
          nodes.push({ kind: 'goto', target: t, arg: cleanA1, arg2: cleanA2 || undefined, arg3: cleanA3 || undefined, argQuoted: a1Quoted, arg2Quoted: a2Quoted, arg3Quoted: a3Quoted });
        } else {
          const a1 = args[1] || '';
          const a2 = args[2] || '';
          const a3 = args[3] || '';
          const a1Quoted = !!(a1 && a1.startsWith("'") && a1.endsWith("'"));
          const a2Quoted = !!(a2 && a2.startsWith("'") && a2.endsWith("'"));
          const a3Quoted = !!(a3 && a3.startsWith("'") && a3.endsWith("'"));
          let cleanA1 = a1;
          let cleanA2 = a2;
          let cleanA3 = a3;
          if (a1Quoted) cleanA1 = a1.slice(1, -1);
          if (a2Quoted) cleanA2 = a2.slice(1, -1);
          if (a3Quoted) cleanA3 = a3.slice(1, -1);
          nodes.push({ kind: 'goto', target, arg: cleanA1, arg2: cleanA2 || undefined, arg3: cleanA3 || undefined, argQuoted: a1Quoted, arg2Quoted: a2Quoted, arg3Quoted: a3Quoted });
        }
      }
      i++;
      continue;
    }

    // GS call: gs 'module', 'func', args... or gs $var, 'func', args...
    const gsMatch = trimmed.match(/^gs\s*('((?:[^']|'')*)'|\$\w+(\['[^']*'\]|\[\$\w+\]|\[\d+\]|\[\$\w+\[\d+\]\])?|\w+)\s*(?:,\s*('((?:[^']|'')*)'|\$\w+(\['[^']*'\]|\[\$\w+\]|\[\d+\]|\[\$\w+\[\d+\]\])?|\w+))?\s*(?:,\s*(.+?))?\s*(?:&\s*!!.*)?$/);
    if (gsMatch) {
      const moduleRaw = gsMatch[1];
      const module = moduleRaw.startsWith("'") ? unescapeQsp(moduleRaw.slice(1, -1)) : moduleRaw;
      const funcRaw = gsMatch[4] || '';
      const func = funcRaw.startsWith("'") ? unescapeQsp(funcRaw.slice(1, -1)) : (funcRaw || '');
      const extraArgs = gsMatch[7] ? splitTopLevel(gsMatch[7]).map(a => a.trim()) : [];
      nodes.push({ kind: 'gs', module, func, args: extraArgs });
      i++;
      continue;
    }

    // Time: minut += N or minut + N
    const timeMatch = trimmed.match(/^minut\s*\+=?\s*(\d+)$/);
    if (timeMatch) {
      nodes.push({ kind: 'time', delta: parseInt(timeMatch[1], 10) });
      i++;
      continue;
    }

    // Assignment: var = value, var += value, var -= value
    const assignMatch = trimmed.match(/^(\w+)\s*(\+=|-=|\/=|\*=|=)\s*(.+)$/);
    if (assignMatch && !trimmed.startsWith('$')) {
      for (const n of assignNodes(assignMatch[1], assignMatch[2], assignMatch[3].trim())) nodes.push(n);
      i++;
      continue;
    }

    // Dollar assignment (metadata): $var = value
    // Skip if multi-line string with content on same line (handled by dollarMultiLineContentMatch below)
    const dollarMatch = trimmed.match(/^\$(\w+)\s*=\s*(.+)$/);

    const _mlcc = trimmed.match(/^\$(\w+)\s*(\+=|-=|\/=|\*=|=)\s*(["'])(.+)$/);
    const _skipForMLC = _mlcc && !trimmed.endsWith(_mlcc[3]);
    if (dollarMatch && !_skipForMLC) {
      let raw = trimmed;
      const valPart = dollarMatch[2];
      if (valPart.includes("'") || valPart.includes('"')) {
        const q = valPart.startsWith("'") ? "'" : valPart.startsWith('"') ? '"' : (valPart.match(/['"]/)?.[0] ?? '');
        if (q) {
          let quoteCount = 0;
          for (let qi = 0; qi < valPart.length; qi++) {
            if (valPart[qi] === q) {
              if (valPart[qi + 1] === q) { qi++; continue; }
              quoteCount++;
            }
          }
          if (quoteCount % 2 === 1) {
            let next = i + 1;
            while (next < lines.length) {
              const cont = lines[next].trim();

              raw += '\n' + cont;
              const fullVal = raw.slice(trimmed.indexOf('=') + 1).trim();
              let qc = 0;
              for (let qi = 0; qi < fullVal.length; qi++) {
                if (fullVal[qi] === q) {
                  if (fullVal[qi + 1] === q) { qi++; continue; }
                  qc++;
                }
              }

            if (qc % 2 === 0) {
              break;
            }
              next++;
            }
            i = next - 1;
          }
        }
      }
      nodes.push({ kind: 'setup', raw });
      i++;
      continue;
    }

    // Exit
    if (trimmed === 'exit') {
      nodes.push({ kind: 'exit' });
      i++;
      continue;
    }

    // close all — no-op (menu_off is set separately)
    if (trimmed === 'close all') {
      i++;
      continue;
    }

    // copyarr — array copy
    if (/^copyarr\s/.test(trimmed) || /^copyarr\(/.test(trimmed)) {
      nodes.push({ kind: 'setup', raw: trimmed });
      i++;
      continue;
    }

    // nl — newline or HTML element
    if (trimmed === 'nl' || trimmed === 'nl ') {
      nodes.push({ kind: 'text', content: '', dynamic: false });
      i++;
      continue;
    }
    const nlMatch = trimmed.match(/^nl\s+'((?:[^']|'')*)'$/);
    if (nlMatch) {
      nodes.push({ kind: 'text', content: unescapeQsp(nlMatch[1]), dynamic: false });
      i++;
      continue;
    }

    // Comment: !! text
    if (trimmed.startsWith('!!')) {
      nodes.push({ kind: 'comment', text: trimmed.slice(2).trim() });
      i++;
      continue;
    }

    // Dynamic single-line: dynamic 'expr'
    const dynSingleMatch = trimmed.match(/^dynamic\s+'((?:[^']|'')*)'\s*$/);
    if (dynSingleMatch) {
      nodes.push({ kind: 'setup', raw: trimmed });
      i++;
      continue;
    }

    // Dynamic with concatenation: dynamic 'string' + $var
    if (/^dynamic\s+'(?:[^']|'')*'\s*\+/.test(trimmed)) {
      nodes.push({ kind: 'setup', raw: trimmed });
      i++;
      continue;
    }

    // Dynamic block: dynamic " ... "
    if (trimmed === 'dynamic "' || trimmed.startsWith('dynamic "')) {
      const dynNodes: QspNode[] = [];
      let j = i + 1;
      while (j < lines.length && lines[j].trim() !== '"') {
        const dynResult = parseSingleLine(lines[j].trim(), lines, j, unsupported);
        dynNodes.push(...dynResult.nodes);
        j = dynResult.nextIdx;
      }
      nodes.push({ kind: 'scene', arg: '__dynamic__', body: dynNodes });
      i = j + 1;
      continue;
    }

    // Setup lines (menu_off, phone_off, CLOSE ALL, *clr, *nl, cla, cls, etc.)
    if (
      trimmed.startsWith('menu_off') ||
      trimmed.startsWith('phone_off') ||
      trimmed === 'CLOSE ALL' ||
      trimmed.startsWith('*clr') ||
      trimmed.startsWith('*nl') ||
      trimmed.startsWith('gs \'stat\'') ||
      trimmed.startsWith('gs \'themes\'') ||
      trimmed === 'cla' ||
      trimmed === 'cls' ||
      trimmed === 'clr' ||
      trimmed.startsWith('cla &') ||
      trimmed.startsWith('cls &') ||
      trimmed.startsWith('clr &') ||
      trimmed.startsWith('$no') ||
      trimmed.startsWith('dynamic $') ||
      trimmed.startsWith('PLAY ') ||
      trimmed.startsWith('play ') ||
      trimmed.startsWith('killvar ') ||
      trimmed.startsWith('wait ') ||
      trimmed === '*pl' ||
      trimmed.startsWith('msg ') ||
      trimmed.startsWith("msg'")
    ) {
      nodes.push({ kind: 'setup', raw: trimmed });
      i++;
      continue;
    }

    // $func('wrap', 'style', 'text') - title/text wrapper
    const funcWrapMatch = trimmed.match(/^\$func\('wrap',\s*'([^']*)',\s*'((?:[^']|'')*)'\)/);
    if (funcWrapMatch) {
      const style = funcWrapMatch[1];
      const text = unescapeQsp(funcWrapMatch[2]);
      if (style.includes('header') || style.includes('accent') || style.includes('b')) {
        nodes.push({ kind: 'title', text });
      } else {
        nodes.push({ kind: 'text', content: text, dynamic: false });
      }
      i++;
      continue;
    }

    // Array-like assignment: Word['key'] = val, Word['key'] += val
    const arrAssignMatch = trimmed.match(/^(\w+)\['([^']+)'\]\s*(\+=|-=|\/=|\*=|=)\s*(.+)$/);
    if (arrAssignMatch) {
      for (const n of assignNodes(`${arrAssignMatch[1]}['${arrAssignMatch[2]}']`, arrAssignMatch[3], arrAssignMatch[4].trim())) nodes.push(n);
      i++;
      continue;
    }

    // Array-like assignment: Word[key] = val (unquoted key, may include nested brackets like ARGS[1])
    const arrAssignMatch2 = trimmed.match(/^(\w+)\[(\w+(?:\[\d+\])?)\]\s*(\+=|-=|\/=|\*=|=)\s*(.+)$/);
    if (arrAssignMatch2) {
      for (const n of assignNodes(`${arrAssignMatch2[1]}[${arrAssignMatch2[2]}]`, arrAssignMatch2[3], arrAssignMatch2[4].trim())) nodes.push(n);
      i++;
      continue;
    }

    // Goto with variable: gt $var or xgt $var (including dict access)
    const gtVarMatch = trimmed.match(/^(?:gt|xgt)\s+(\$\w+(\['[^']*'\]|\[\$\w+\]|\[\d+\])?|\w+)\s*(?:,\s*(\$\w+(\['[^']*'\]|\[\$\w+\]|\[\d+\])?|'[^']*'))?\s*$/);
    if (gtVarMatch && !trimmed.startsWith("gt '") && !trimmed.startsWith("xgt '")) {
      nodes.push({ kind: 'goto', target: gtVarMatch[1], arg: (gtVarMatch[3] || '').replace(/^'|'$/g, '') });
      i++;
      continue;
    }

    // elseif block: treat as nested if
    const elseifMatch = trimmed.match(/^elseif\s+(.+?)\s*:\s*$/);
    if (elseifMatch) {
      const { node: ifNode, nextIdx } = parseIfChain(lines, i + 1, elseifMatch[1], unsupported);
      nodes.push(ifNode);
      i = nextIdx;
      continue;
    }

    // else (leaked through), including 'else !}' from !!{ blocks
    if (trimmed === 'else' || trimmed === 'else ' || trimmed === 'else !}') {
      i++;
      continue;
    }

    // end (leaked through from nested blocks), including 'end & !! comment' and 'end !}'
    if (trimmed === 'end' || trimmed === 'end ' || trimmed === 'end !}' || /^end\s*&\s*!!/.test(trimmed)) {
      i++;
      continue;
    }

    // Block comment markers
    if (trimmed === '!{' || trimmed === '!!{' || trimmed === '!}' || trimmed === '!!}' || trimmed === '}') {
      i++;
      continue;
    }

    // *pl image placeholder
    if (trimmed.startsWith('*pl ')) {
      nodes.push({ kind: 'setup', raw: trimmed });
      i++;
      continue;
    }

    // Dollar variable assignment with multi-line string value (content after opening quote): $var += "content

    const dollarMultiLineContentMatch = trimmed.match(/^\$(\w+)\s*(\+=|-=|\/=|\*=|=)\s*(["'])(.+)$/);

    if (dollarMultiLineContentMatch && !trimmed.endsWith(dollarMultiLineContentMatch[3])) {
      const varName = `$${dollarMultiLineContentMatch[1]}`;
      const op = dollarMultiLineContentMatch[2];
      const qch = dollarMultiLineContentMatch[3];
      const firstContent = dollarMultiLineContentMatch[4];
      let fullStr = qch + firstContent;
      let consumedLines = 0;
      let strComplete = false;
      while (true) {
        let inStr = false;
        for (let qi = 0; qi < fullStr.length; qi++) {
          if (inStr) {
            if (fullStr[qi] === qch) {
              if (fullStr[qi + 1] === qch) { qi++; continue; }
              inStr = false;
            }
          } else if (fullStr[qi] === qch) {
            inStr = true;
          }
        }
        if (!inStr) { strComplete = true; break; }
        const next = lines[i + 1 + consumedLines];
        if (next === undefined) break;
        fullStr += '\n' + next.trim();
        consumedLines++;
      }
      if (!strComplete) fullStr += qch;
      const inner = fullStr.slice(1, -1);
      const escaped = inner.replace(/\\/g, '\\\\').replace(/'/g, qch === "'" ? "''" : "'").replace(/\r/g, '');

      nodes.push({ kind: 'assign', var: varName, op: op as '=' | '+=' | '-=' | '*=' | '/=', value: `${qch}${escaped}${qch}` });
      i += 1 + consumedLines;
      continue;
    }

    // Dollar variable assignment with multi-line string value: $var = " or $var += "
    const dollarMultiLineMatch = trimmed.match(/^\$(\w+)\s*(\+=|-=|\/=|\*=|=)\s*(["'])$/);
    if (dollarMultiLineMatch) {
      const varName = `$${dollarMultiLineMatch[1]}`;
      const op = dollarMultiLineMatch[2];
      const qch = dollarMultiLineMatch[3];
      let fullStr = qch;
      let consumedLines = 0;
      while (true) {
        let inStr = false;
        for (let qi = 0; qi < fullStr.length; qi++) {
          if (inStr) {
            if (fullStr[qi] === qch) {
              if (fullStr[qi + 1] === qch) { qi++; continue; }
              inStr = false;
            }
          } else if (fullStr[qi] === qch) {
            inStr = true;
          }
        }
        if (!inStr) break;
        const next = lines[i + 1 + consumedLines];
        if (next === undefined) break;
        fullStr += '\n' + next.trim();
        consumedLines++;
      }
      const inner = fullStr.slice(1, -1);
      const escaped = inner.replace(/\\/g, '\\\\').replace(/'/g, qch === "'" ? "''" : "'").replace(/\r/g, '');
      nodes.push({ kind: 'assign', var: varName, op: op as '=' | '+=' | '-=' | '*=' | '/=', value: `${qch}${escaped}${qch}` });
      i += 1 + consumedLines;
      continue;
    }

    // Dollar variable assignment: $var = val, $var += val, $var -= val
    const dollarVarMatch = trimmed.match(/^\$(\w+)\s*(\+=|-=|\/=|\*=|=)\s*(.+)$/);
    if (dollarVarMatch) {
      nodes.push({ kind: 'assign', var: `$${dollarVarMatch[1]}`, op: dollarVarMatch[2] as '=' | '+=' | '-=', value: dollarVarMatch[3].trim() });
      i++;
      continue;
    }

    // Array append: Word[] = val or $Word[] = val
    const arrAppendMatch = trimmed.match(/^(\$?\w+)\[\]\s*=\s*(.+)$/);
    if (arrAppendMatch) {
      nodes.push({ kind: 'assign', var: `${arrAppendMatch[1]}[]`, op: '=', value: arrAppendMatch[2].trim() });
      i++;
      continue;
    }

    // Dollar array assignment with multi-line string value: $Word['key'] = "
    const dollarArrMultiLineMatch = trimmed.match(/^\$(\w+)\['([^']+)'\]\s*(\+=|-=|\/=|\*=|=)\s*(["'])$/);
    if (dollarArrMultiLineMatch) {
      const varName = `$${dollarArrMultiLineMatch[1]}['${dollarArrMultiLineMatch[2]}']`;
      const op = dollarArrMultiLineMatch[3];
      const qch = dollarArrMultiLineMatch[4];
      let fullStr = qch;
      let consumedLines = 0;
      while (true) {
        let inStr = false;
        for (let qi = 0; qi < fullStr.length; qi++) {
          if (inStr) {
            if (fullStr[qi] === qch) {
              if (fullStr[qi + 1] === qch) { qi++; continue; }
              inStr = false;
            }
          } else if (fullStr[qi] === qch) {
            inStr = true;
          }
        }
        if (!inStr) break;
        const next = lines[i + 1 + consumedLines];
        if (next === undefined) break;
        fullStr += '\n' + next.trim();
        consumedLines++;
      }
      const inner = fullStr.slice(1, -1);
      const escaped = inner.replace(/\\/g, '\\\\').replace(/'/g, qch === "'" ? "''" : "'").replace(/\r/g, '');
      nodes.push({ kind: 'assign', var: varName, op: op as '=' | '+=' | '-=' | '*=' | '/=', value: `${qch}${escaped}${qch}` });
      i += 1 + consumedLines;
      continue;
    }

    // Dollar array assignment: $Word['key'] = val
    const dollarArrMatch = trimmed.match(/^\$(\w+)\['([^']+)'\]\s*(\+=|-=|\/=|\*=|=)\s*(.+)$/);
    if (dollarArrMatch) {
      for (const n of assignNodes(`$${dollarArrMatch[1]}['${dollarArrMatch[2]}']`, dollarArrMatch[3], dollarArrMatch[4].trim())) nodes.push(n);
      i++;
      continue;
    }

    // Dollar array function call: $Word['key'] (standalone, no assignment)
    const dollarArrCallMatch = trimmed.match(/^\$(\w+)\['([^']+)'\]\s*$/);
    if (dollarArrCallMatch) {
      nodes.push({ kind: 'setup', raw: trimmed });
      i++;
      continue;
    }

    // Bare dollar array access with variable key: $var[$var2] (no assignment)
    const dollarArrVarCallMatch = trimmed.match(/^\$(\w+)\[(\$?\w+(?:\[\d+\])?)\]\s*$/);
    if (dollarArrVarCallMatch) {
      nodes.push({ kind: 'setup', raw: trimmed });
      i++;
      continue;
    }

    // Bare dollar variable: $var (standalone print)
    const bareDollarMatch = trimmed.match(/^\$(\w+)\s*$/);
    if (bareDollarMatch) {
      nodes.push({ kind: 'setup', raw: trimmed });
      i++;
      continue;
    }

    // Array assignment with numeric index: $Word[0] = val or Word[0] = val
    const arrNumIdxMatch = trimmed.match(/^(\$?\w+)\[(\d+)\]\s*(\+=|-=|\/=|\*=|=)\s*(.+)$/);
    if (arrNumIdxMatch) {
      nodes.push({ kind: 'assign', var: `${arrNumIdxMatch[1]}[${arrNumIdxMatch[2]}]`, op: arrNumIdxMatch[3] as '=' | '+=' | '-=', value: arrNumIdxMatch[4].trim() });
      i++;
      continue;
    }

    // Array assignment with variable key: Word[$var] = val or Word[var] = val
    const arrVarKeyMatch = trimmed.match(/^(\w+)\[(\$?\w+)\]\s*(\+=|-=|\/=|\*=|=)\s*(.+)$/);
    if (arrVarKeyMatch) {
      nodes.push({ kind: 'assign', var: `${arrVarKeyMatch[1]}[${arrVarKeyMatch[2]}]`, op: arrVarKeyMatch[3] as '=' | '+=' | '-=', value: arrVarKeyMatch[4].trim() });
      i++;
      continue;
    }

    // Array assignment with complex key: $var[$key] = val, var[expr] = val
    const bca = extractBracketAssign(trimmed);
    if (bca) {
      for (const n of assignNodes(`${bca.varName}[${bca.key}]`, bca.op, bca.value)) nodes.push(n);
      i++;
      continue;
    }

    // *p print statement
    const pMatch = trimmed.match(/^\*[pP]\s+'((?:[^']|'')*)'$/);
    if (pMatch) {
      const inner = unescapeQsp(pMatch[1]);
      const isImage = inner.includes('<img');
      if (isImage) {
        const imgMatch = inner.match(/src="([^"]+)"/);
        if (imgMatch) {
          nodes.push({ kind: 'image', src: imgMatch[1] });
          i++;
          continue;
        }
      }
      const dynamic = inner.includes('<<') || inner.includes("iif(") || inner.includes('+');
      nodes.push({ kind: 'text', content: inner, dynamic });
      i++;
      continue;
    }
    if (trimmed.startsWith('*p')) {
      const pRest = trimmed.slice(2).trim();
      if (pRest) {
        nodes.push({ kind: 'text', content: pRest, dynamic: true });
        i++;
        continue;
      }
    }

    // p print statement (without asterisk)
    const pNoStarMatch = trimmed.match(/^p\s+'((?:[^']|'')*)'$/);
    if (pNoStarMatch) {
      const inner = unescapeQsp(pNoStarMatch[1]);
      const isImage = inner.includes('<img');
      if (isImage) {
        const imgMatch = inner.match(/src="([^"]+)"/);
        if (imgMatch) {
          nodes.push({ kind: 'image', src: imgMatch[1] });
          i++;
          continue;
        }
      }
      const dynamic = inner.includes('<<') || inner.includes("iif(") || inner.includes('+');
      nodes.push({ kind: 'text', content: inner, dynamic });
      i++;
      continue;
    }
    if (trimmed.startsWith('p ') || trimmed === 'p') {
      const pRest = trimmed.slice(1).trim();
      if (pRest) {
        nodes.push({ kind: 'text', content: pRest, dynamic: true });
        i++;
        continue;
      }
    }

    // pl print line statement (without asterisk)
    const plNoStarMatch = trimmed.match(/^pl\s*'((?:[^']|'')*)'$/);
    if (plNoStarMatch) {
      const inner = unescapeQsp(plNoStarMatch[1]);
      nodes.push({ kind: 'text', content: inner, dynamic: inner.includes('<<') || inner.includes('iif(') || inner.includes('+') });
      i++;
      continue;
    }
    if (trimmed.startsWith('pl ') || trimmed === 'pl') {
      const plRest = trimmed.slice(2).trim();
      if (plRest) {
        nodes.push({ kind: 'text', content: plRest, dynamic: true });
        i++;
        continue;
      }
    }

    // Label: :labelname
    const labelMatch = trimmed.match(/^:([a-zA-Z_]\w*)$/);
    if (labelMatch) {
      nodes.push({ kind: 'label', name: labelMatch[1] });
      i++;
      continue;
    }

    // Jump: jump 'label'
    const jumpMatch = trimmed.match(/^jump\s+'((?:[^']|'')*)'$/i);
    if (jumpMatch) {
      const label = unescapeQsp(jumpMatch[1]);
      nodes.push({ kind: 'jump', label });
      i++;
      continue;
    }

    // Dynamic expression text: iif(...), $func(...), $var + 'text', $var[...] + ..., etc.
    if (/^(iif|\$func)\s*\(/.test(trimmed) || /^'[^']*'\s*\+\s*/.test(trimmed) || (/^\$[a-zA-Z_]\w*(\[[^\]]*\])?\s*\+/.test(trimmed) && !/^\$[a-zA-Z_]\w*(\[[^\]]*\])?\s*\+=/.test(trimmed) && !/^\$[a-zA-Z_]\w*(\[[^\]]*\])?\s*=-/.test(trimmed) && !/^\$[a-zA-Z_]\w*(\[[^\]]*\])?\s*=$/.test(trimmed))) {
      nodes.push({ kind: 'text', content: trimmed, dynamic: true });
      i++;
      continue;
    }

    // Standalone $var line: display variable value as text
    if (/^\$[a-zA-Z_]\w*\s*$/.test(trimmed)) {
      nodes.push({ kind: 'text', content: trimmed, dynamic: true });
      i++;
      continue;
    }

    // view $func(...) - standalone view command
    const viewFuncMatch = trimmed.match(/^view\s+(\$?func\(.+\))$/);
    if (viewFuncMatch) {
      nodes.push({ kind: 'setup', raw: trimmed });
      i++;
      continue;
    }

    // view 'path' - set background image
    const viewPathMatch = trimmed.match(/^view\s+'((?:[^']|'')*)'$/);
    if (viewPathMatch) {
      nodes.push({ kind: 'setup', raw: trimmed });
      i++;
      continue;
    }

    // addobj 'text' - add debug object (no-op)
    if (/^addobj\s+'/.test(trimmed)) {
      i++;
      continue;
    }

    // delact - delete action (no-op in React context)
    if (/^delact\s/.test(trimmed)) {
      i++;
      continue;
    }

    // Standalone func('module', 'function', ...) call
    const standaloneFuncMatch = trimmed.match(/^func\((.+)\)\s*$/);
    if (standaloneFuncMatch) {
      nodes.push({ kind: 'setup', raw: trimmed });
      i++;
      continue;
    }

    // showstat - toggle status bar (no-op in React)
    if (/^showstat\s/.test(trimmed)) {
      i++;
      continue;
    }

    // Fallback

    nodes.push({ kind: 'unknown', raw: trimmed });
    if (trimmed.length < 120) unsupported.push(trimmed);
    i++;
  }

  return { nodes, endIdx: i };
}

interface ParseUntilResult {
  nodes: QspNode[];
  endIdx: number;
  elseFound: boolean;
}

function parseUntilElseOrEnd(lines: string[], startIdx: number, unsupported: string[]): ParseUntilResult {
  const nodes: QspNode[] = [];
  let i = startIdx;
  let inBlockComment = false;

  while (i < lines.length) {
    const trimmed = lines[i].trim();
    if (!trimmed) { i++; continue; }

    if (inBlockComment) {
      if (trimmed.endsWith('!}') || trimmed.endsWith('!!}') || trimmed.endsWith('end}') || trimmed === '}') inBlockComment = false;
      i++;
      continue;
    }
    if (trimmed.startsWith('!{') || trimmed.startsWith('!!{')) {
      if (!trimmed.endsWith('!}') && !trimmed.endsWith('end}') && trimmed !== '}') inBlockComment = true;
      i++;
      continue;
    }

    if (trimmed === 'end' || trimmed === 'end ' || trimmed === 'end !}' || /^end\s*&\s*!!/.test(trimmed)) {
      return { nodes, endIdx: i + 1, elseFound: false };
    }

    if (trimmed === 'else' || trimmed === 'else ' || trimmed === 'else !}') {
      return { nodes, endIdx: i + 1, elseFound: true };
    }

    if (trimmed.match(/^elseif\s+/)) {
      return { nodes, endIdx: i + 1, elseFound: true };
    }


    const result = parseSingleLine(trimmed, lines, i, unsupported);

    if (result.nodes.length > 0) {
      nodes.push(...result.nodes);
    }
    i = result.nextIdx;
  }

  return { nodes, endIdx: i, elseFound: false };
}

function parseIfChain(lines: string[], startIdx: number, condition: string, unsupported: string[]): { node: QspIf; nextIdx: number } {
  const thenResult = parseUntilElseOrEnd(lines, startIdx, unsupported);
  const ifNode: QspIf = { kind: 'if', condition, thenBody: thenResult.nodes, elseBody: [] };
  let currentIf = ifNode;
  let nextIdx = thenResult.endIdx;
  let result = thenResult;
  while (result.elseFound) {
    const markerLine = lines[nextIdx - 1].trim();
    const elseifMatch = markerLine.match(/^elseif\s+(.+?)\s*:\s*$/);
    if (elseifMatch) {
      const elseifResult = parseUntilElseOrEnd(lines, nextIdx, unsupported);
      const elseifNode: QspIf = { kind: 'if', condition: elseifMatch[1], thenBody: elseifResult.nodes, elseBody: [] };
      currentIf.elseBody = [elseifNode];
      currentIf = elseifNode;
      nextIdx = elseifResult.endIdx;
      result = elseifResult;
    } else {
      const elseResult = parseUntilElseOrEnd(lines, nextIdx, unsupported);
      currentIf.elseBody = elseResult.nodes;
      nextIdx = elseResult.endIdx;
      break;
    }
  }
  return { node: ifNode, nextIdx };
}

function parseSingleLine(trimmed: string, lines: string[], idx: number, unsupported: string[]): { nodes: QspNode[]; nextIdx: number } {
  const nodes: QspNode[] = [];

  // Strip trailing & !! comment before & splitting
  trimmed = trimmed.replace(/\s*&\s*!!.*$/, '').trim();




  // Dynamic block: dynamic " ... "
  if (trimmed === 'dynamic "' || trimmed.startsWith('dynamic "')) {
    const dynNodes: QspNode[] = [];
    let j = idx + 1;
    while (j < lines.length && lines[j].trim() !== '"') {
      const dynResult = parseSingleLine(lines[j].trim(), lines, j, unsupported);
      dynNodes.push(...dynResult.nodes);
      j = dynResult.nextIdx;
    }
    nodes.push({ kind: 'scene', arg: '__dynamic__', body: dynNodes });
    return { nodes, nextIdx: j + 1 };
  }

  if (trimmed.includes('&') && !trimmed.startsWith('act ') && !trimmed.startsWith('if ') && !trimmed.startsWith('end') && !trimmed.startsWith('else') && !trimmed.startsWith("'") && !trimmed.startsWith('gt ')) {
    const parts = splitTopLevelAmp(trimmed);
    const stmtRe = /^(?:[\w$]+\[?\w*\]?\s*(?:\+=|-=|=)\s*|jump\s+|gt\s+|gs\s+|\*p\s+|\*s\s+|pl\s+|killvar\s+|dynamic\s+)/;
    if (parts.length > 1 && parts.every(p => stmtRe.test(p))) {
      for (const part of parts) {
        nodes.push(...parseInlineStatement(part, unsupported));
      }
      return { nodes, nextIdx: idx + 1 };
    }
  }

  // Scene
  const sceneMatch = trimmed.match(/^if\s+\$ARGS\[0\]\s*=\s*'([^']*)'\s*:\s*$/i);
  if (sceneMatch) {
    const inner = parseBlock(lines, idx + 1, unsupported);
    nodes.push({ kind: 'scene', arg: sceneMatch[1], body: inner.nodes });
    return { nodes, nextIdx: inner.endIdx };
  }

  // Act block
  const actBlockMatch = trimmed.match(/^act\s*\'((?:[^\']|\'\')*)\'\s*:\s*$/i) || trimmed.match(/^act\s+"(.*)"\s*:\s*$/i);
  if (actBlockMatch) {
    const rawLabel = actBlockMatch[1];
    const label = unescapeQsp(rawLabel.replace(/""/g, '"'));
    const inner = parseBlock(lines, idx + 1, unsupported);
    nodes.push({ kind: 'act', label, body: inner.nodes });
    return { nodes, nextIdx: inner.endIdx };
  }

  const actFuncBlockMatch = trimmed.match(/^act\s+(\$?func\(.+?\))\s*:\s*$/i);
  if (actFuncBlockMatch) {
    const labelExpr = actFuncBlockMatch[1].trim();
    const inner = parseBlock(lines, idx + 1, unsupported);
    nodes.push({ kind: 'act', label: labelExpr, body: inner.nodes, dynamicLabel: true });
    return { nodes, nextIdx: inner.endIdx };
  }

  // Act with iif() dynamic label: act iif(cond, 'a', 'b'): [rest]
  if (/^act\s+iif\s*\(/i.test(trimmed)) {
    const iifStart = trimmed.indexOf('iif(');
    let depth = 0, iifEnd = -1, inStr = false, strCh = '';
    for (let j = iifStart; j < trimmed.length; j++) {
      const ch = trimmed[j];
      if (inStr) {
        if (ch === strCh) {
          if (strCh === "'" && trimmed[j + 1] === "'") { j++; }
          else inStr = false;
        }
        continue;
      }
      if (ch === "'" || ch === '"') { inStr = true; strCh = ch; continue; }
      if (ch === '(') depth++;
      else if (ch === ')') { depth--; if (depth === 0) { iifEnd = j; break; } }
    }
    if (iifEnd !== -1) {
      const labelExpr = trimmed.slice(iifStart, iifEnd + 1);
      const after = trimmed.slice(iifEnd + 1).trim();
      // Find top-level ':' (not inside quotes or parens)
      let colonIdx = -1, inStr2 = false, strCh2 = '', depth2 = 0;
      for (let ci = 0; ci < after.length; ci++) {
        const ch = after[ci];
        if (inStr2) {
          if (ch === strCh2) {
            if (strCh2 === "'" && after[ci + 1] === "'") { ci++; }
            else inStr2 = false;
          }
          continue;
        }
        if (ch === "'" || ch === '"') { inStr2 = true; strCh2 = ch; continue; }
        if (ch === '(') depth2++;
        else if (ch === ')') depth2--;
        else if (ch === ':' && depth2 === 0) { colonIdx = ci; break; }
      }
      if (colonIdx !== -1) {
        const rest = after.slice(colonIdx + 1).trim();
        const inner = parseBlock(lines, idx + 1, unsupported);
        const act: QspAct = { kind: 'act', label: labelExpr, body: inner.nodes, dynamicLabel: true };
        if (rest) {
          const gtMatch = rest.match(/^gt\s+'([^']+)'\s*,\s*'([^']*)'\s*$/);
          if (gtMatch) act.inlineGoto = { target: gtMatch[1], arg: gtMatch[2], arg2: undefined };
        }
        nodes.push(act);
        return { nodes, nextIdx: inner.endIdx };
      }
    }
  }

  // Act with dynamic label
  const actDynPrefix = trimmed.match(/^act\s*\'((?:[^\']|\'\')*)\'\s*\+\s*/i);
  if (actDynPrefix) {
    const label = unescapeQsp(actDynPrefix[1]);
    const restAfterPrefix = trimmed.slice(actDynPrefix[0].length);
    let colonIdx = -1;
    let depth = 0;
    let inStr = false;
    let strCh = '';
    for (let ci = 0; ci < restAfterPrefix.length; ci++) {
      if (inStr) {
        if (restAfterPrefix[ci] === strCh) {
          if (restAfterPrefix[ci + 1] === strCh) { ci++; continue; }
          inStr = false;
        }
        continue;
      }
      if (restAfterPrefix[ci] === "'" || restAfterPrefix[ci] === '"') { inStr = true; strCh = restAfterPrefix[ci]; continue; }
      if (restAfterPrefix[ci] === '(') depth++;
      else if (restAfterPrefix[ci] === ')') depth--;
      else if (restAfterPrefix[ci] === ':' && depth === 0) { colonIdx = ci; break; }
    }
    if (colonIdx !== -1) {
      const dynPart = restAfterPrefix.slice(0, colonIdx).trim();
      const rest = restAfterPrefix.slice(colonIdx + 1).trim();
      const multiPartMatch = dynPart.match(/^(\S+\(.*?\))\s*\+\s*\'((?:[^\']|\'\')*)\'$/);
      if (multiPartMatch) {
        const funcCall = multiPartMatch[1];
        const suffix = unescapeQsp(multiPartMatch[2]);
        const act: QspAct = { kind: 'act', label: `'${label}' + ${funcCall} + '${suffix}'`, body: [], dynamicLabel: true };
        if (rest) {
          const gtMatch = rest.match(/^gt\s+'([^']+)'\s*(?:,\s*('[^']*'|\$\w+\['[^']*'\]|\$\w+|\w+))?\s*(?:,\s*('[^']*'|\$\w+\['[^']*'\]|\$\w+|\w+))?$/);
          if (gtMatch) {
            act.inlineGoto = { target: gtMatch[1], arg: (gtMatch[2] && gtMatch[2].startsWith("'") && gtMatch[2].endsWith("'") ? gtMatch[2].slice(1, -1) : gtMatch[2]) || '', arg2: (gtMatch[3] && gtMatch[3].startsWith("'") && gtMatch[3].endsWith("'") ? gtMatch[3].slice(1, -1) : gtMatch[3]) };
          } else {
            act.inlineStatements = rest;
          }
          return { nodes: [act], nextIdx: idx + 1 };
        }
        const inner = parseBlock(lines, idx + 1, unsupported);
        act.body = inner.nodes;
        return { nodes: [act], nextIdx: inner.endIdx };
      }
      const isCostLabel = /^\$?func\(\s*'willpower'\s*,\s*'get_willcost_string'\s*\)$/.test(dynPart) ||
        /^\$?func\(\s*'money'\s*,\s*'get_cost_string'\s*,/.test(dynPart);
      const act: QspAct = { kind: 'act', label: isCostLabel ? label : `${label} [+${truncate(dynPart, 40)}]`, body: [] };
      if (rest) {
        const gt4Match = rest.match(/^gt\s+'([^']+)'\s*,\s*'([^']*)'\s*,\s*(\$\w+|\w+)\s*,\s*'([^']*)'\s*$/);
        if (gt4Match) {
          act.inlineGoto = { target: gt4Match[1], arg: gt4Match[2], arg2: gt4Match[3].replace(/^\$/, ''), arg3: gt4Match[4] };
        } else {
          const gtArithMatch = rest.match(/^gt\s+'([^']+)'\s*,\s*'([^']*)'\s*,\s*([\d+\-*/()\s\w.,]+)$/);
          if (gtArithMatch) {
            act.inlineGoto = { target: gtArithMatch[1], arg: gtArithMatch[2], arg2: gtArithMatch[3].trim() };
          } else {
            const gtMatch = rest.match(/^gt\s+'([^']+)'\s*(?:,\s*('[^']*'|\$\w+\['[^']*'\]|\$\w+|\w+))?\s*(?:,\s*('[^']*'|\$\w+\['[^']*'\]|\$\w+|\w+))?$/);
            if (gtMatch) {
              act.inlineGoto = { target: gtMatch[1], arg: (gtMatch[2] && gtMatch[2].startsWith("'") && gtMatch[2].endsWith("'") ? gtMatch[2].slice(1, -1) : gtMatch[2]) || '', arg2: (gtMatch[3] && gtMatch[3].startsWith("'") && gtMatch[3].endsWith("'") ? gtMatch[3].slice(1, -1) : gtMatch[3]) };
            } else {
              act.inlineStatements = rest;
            }
          }
        }
        return { nodes: [act], nextIdx: idx + 1 };
      }
      const inner = parseBlock(lines, idx + 1, unsupported);
      act.body = inner.nodes;
      return { nodes: [act], nextIdx: inner.endIdx };
    }
  }

  // Act with dynamic label + $func('wrap') inline
  const actDynWrapMatch = trimmed.match(/^act\s*\'((?:[^\']|\'\')*)\'\s*\+\s*\$func\('wrap',\s*'([^']*)',\s*'((?:[^\']|\'\')*)'\)\s*:\s*(.+)$/i);
  if (actDynWrapMatch) {
    const label = unescapeQsp(actDynWrapMatch[1]);
    const style = actDynWrapMatch[2];
    const text = unescapeQsp(actDynWrapMatch[3]);
    const rest = actDynWrapMatch[4].trim();
    const act: QspAct = { kind: 'act', label: `'${label}' + $func('wrap', '${style}', '${text}')`, body: [], dynamicLabel: true };
    if (rest) {
      const gtMatch = rest.match(/^gt\s+'([^']+)'\s*(?:,\s*('[^']*'|\$\w+\['[^']*'\]|\$\w+|\w+))?\s*(?:,\s*('[^']*'|\$\w+\['[^']*'\]|\$\w+|\w+))?$/);
      if (gtMatch) {
        act.inlineGoto = { target: gtMatch[1], arg: (gtMatch[2] && gtMatch[2].startsWith("'") && gtMatch[2].endsWith("'") ? gtMatch[2].slice(1, -1) : gtMatch[2]) || '', arg2: (gtMatch[3] && gtMatch[3].startsWith("'") && gtMatch[3].endsWith("'") ? gtMatch[3].slice(1, -1) : gtMatch[3]) };
      } else {
        act.inlineStatements = rest;
      }
    }
    return { nodes: [act], nextIdx: idx + 1 };
  }

  // Act with $func('wrap') inline
  const actFuncWrapMatch = trimmed.match(/^act\s*\'((?:[^']|'')*)'\s*:\s*\$func\('wrap',\s*'([^']*)',\s*'((?:[^']|'')*)'\)\s*$/i);
  if (actFuncWrapMatch) {
    const label = unescapeQsp(actFuncWrapMatch[1]);
    const style = actFuncWrapMatch[2];
    const text = unescapeQsp(actFuncWrapMatch[3]);
    nodes.push({ kind: 'act', label, body: [], inlineText: text, inlineTextStyle: style });
    return { nodes, nextIdx: idx + 1 };
  }

  // Act inline
  const actInlineMatch = trimmed.match(/^act\s*\'((?:[^']|'')*)'\s*:\s*(.+)$/i);
  if (actInlineMatch) {
    const label = unescapeQsp(actInlineMatch[1]);
    const rest = actInlineMatch[2].trim();
    const act: QspAct = { kind: 'act', label, body: [] };
      const isXgt = rest.startsWith('xgt ');
      const gtCmd = isXgt ? 'xgt' : 'gt';
      const gtDynTargetMatch = rest.match(new RegExp(`^${gtCmd}\\s+'([^']+)'\\s*\\+\\s*(\\$\\w+)\\s*(?:,\\s*'([^']*)')?\\s*(?:,\\s*('[^']*'|\\w+))?$`));
      if (gtDynTargetMatch) {
        act.inlineGoto = { target: gtDynTargetMatch[2], arg: gtDynTargetMatch[3] || '', arg2: gtDynTargetMatch[4] };
      } else {
        const gtArithMatch = rest.match(new RegExp(`^${gtCmd}\\s+'([^']+)'\\s*,\\s*'([^']*)'\\s*,\\s*([\\d+\\-*/()\\s\\w.,]+)$`));
        if (gtArithMatch) {
          act.inlineGoto = { target: gtArithMatch[1], arg: gtArithMatch[2], arg2: gtArithMatch[3].trim() };
        } else {
        const gt4Match = rest.match(new RegExp(`^${gtCmd}\\s+'([^']+)'\\s*,\\s*'([^']*)'\\s*,\\s*(\\$\\w+|\\w+)\\s*,\\s*'([^']*)'\\s*$`));
        if (gt4Match) {
          act.inlineGoto = { target: gt4Match[1], arg: gt4Match[2], arg2: gt4Match[3].replace(/^\$/, ''), arg3: gt4Match[4] };
        } else {
          const gtMatch = rest.match(new RegExp(`^${gtCmd}\\s+'([^']+)'\\s*(?:,\\s*('[^']*'|\\$\\w+\\['[^']*'\\]|\\$\\w+|\\w+))?\\s*(?:,\\s*('[^']*'|\\$\\w+\\['[^']*'\\]|\\$\\w+|\\w+))?$`));
          if (gtMatch) {
            act.inlineGoto = { target: gtMatch[1], arg: (gtMatch[2] && gtMatch[2].startsWith("'") && gtMatch[2].endsWith("'") ? gtMatch[2].slice(1, -1) : gtMatch[2]) || '', arg2: (gtMatch[3] && gtMatch[3].startsWith("'") && gtMatch[3].endsWith("'") ? gtMatch[3].slice(1, -1) : gtMatch[3]) };
          } else {
            const gtVarArgMatch = rest.match(new RegExp(`^${gtCmd}\\s+'([^']+)'\\s*,\\s*(\\$\\w+\\['[^']*'\\]|\\$\\w+|\\w+)\\s*$`));
            if (gtVarArgMatch) {
              act.inlineGoto = { target: gtVarArgMatch[1], arg: gtVarArgMatch[2].replace(/^\$/, ''), arg2: undefined };
            } else {
              const gtIifMatch = rest.match(new RegExp(`^${gtCmd}\\s+'([^']+)'\\s*,\\s*iif\\(`));
              if (gtIifMatch) {
                const iifStart = rest.indexOf('iif(');
                let depth = 0, iifEnd = -1, inStr = false, strCh = '';
                for (let j = iifStart; j < rest.length; j++) {
                  const ch = rest[j];
                  if (inStr) { if (ch === strCh) inStr = false; continue; }
                  if (ch === "'" || ch === '"') { inStr = true; strCh = ch; continue; }
                  if (ch === '(') depth++;
                  else if (ch === ')') { depth--; if (depth === 0) { iifEnd = j; break; } }
                }
                if (iifEnd !== -1) {
                  const iifExpr = rest.slice(iifStart, iifEnd + 1);
                  act.inlineGoto = { target: gtIifMatch[1], arg: iifExpr, arg2: undefined };
                } else {
                  act.inlineStatements = rest;
                }
              } else {
                act.inlineStatements = rest;
              }
            }
          }
        }
        }
      }
    nodes.push(act);
    return { nodes, nextIdx: idx + 1 };
  }

  // If block (must come before inline-if so the non-greedy match doesn't stop at a ':' inside a key)
  const ifMatch = trimmed.match(/^if\s+(.+?)\s*:\s*$/);
  if (ifMatch) {
    const { node: ifNode, nextIdx } = parseIfChain(lines, idx + 1, ifMatch[1], unsupported);
    nodes.push(ifNode);
    return { nodes, nextIdx };
  }

  // Inline if: if cond: stmt (bracket/quote-aware colon scan)
  if (trimmed.startsWith('if ')) {
    const rest = trimmed.slice(3);
    let colonIdx = -1;
    let depth = 0;
    let inStr = false;
    let strCh = '';
    for (let ci = 0; ci < rest.length; ci++) {
      if (inStr) {
        if (rest[ci] === strCh) {
          if (rest[ci + 1] === strCh) { ci++; continue; }
          inStr = false;
        }
        continue;
      }
      if (rest[ci] === "'" || rest[ci] === '"') { inStr = true; strCh = rest[ci]; continue; }
      if (rest[ci] === '[') depth++;
      else if (rest[ci] === ']') depth--;
      else if (rest[ci] === ':' && depth === 0) { colonIdx = ci; break; }
    }
    if (colonIdx !== -1) {
      const condition = rest.slice(0, colonIdx).trim();
      let stmtStr = rest.slice(colonIdx + 1).trim();
      let consumedLines = 0;
      const qMatch = stmtStr.match(/['"]/);
      if (qMatch) {
        const q = qMatch[0];
        let quoteCount = 0;
        for (let qi = 0; qi < stmtStr.length; qi++) {
          if (stmtStr[qi] === q) {
            if (stmtStr[qi + 1] === q) { qi++; continue; }
            quoteCount++;
          }
        }
        if (quoteCount % 2 === 1) {
          let next = idx + 1;
          while (next < lines.length) {
            const cont = lines[next].trim();
            stmtStr += '\n' + cont;
            consumedLines++;
            let qc = 0;
            for (let qi = 0; qi < stmtStr.length; qi++) {
              if (stmtStr[qi] === q) {
                if (stmtStr[qi + 1] === q) { qi++; continue; }
                qc++;
              }
            }
            if (qc % 2 === 0) break;
            next++;
          }
        }
      }
      // Split by 'else' keyword (top-level, not in strings)
      let elseIdx = -1;
      {
        let inStr2 = false, strCh2 = '';
        for (let ei = 0; ei < stmtStr.length - 4; ei++) {
          if (inStr2) {
            if (stmtStr[ei] === strCh2) {
              if (stmtStr[ei + 1] === strCh2) { ei++; continue; }
              inStr2 = false;
            }
            continue;
          }
          if (stmtStr[ei] === "'" || stmtStr[ei] === '"') { inStr2 = true; strCh2 = stmtStr[ei]; continue; }
          if (stmtStr.slice(ei, ei + 5) === 'else ') { elseIdx = ei; break; }
        }
      }
      const thenStr = elseIdx !== -1 ? stmtStr.slice(0, elseIdx).trim() : stmtStr;
      const elseStr = elseIdx !== -1 ? stmtStr.slice(elseIdx + 5).trim() : '';
      const thenStmts = splitTopLevelAmp(thenStr);
      const thenBody: QspNode[] = [];
      for (const stmt of thenStmts) {
        const parsed = parseInlineStatement(stmt, unsupported);
        thenBody.push(...parsed);
      }
      const elseBody: QspNode[] = [];
      if (elseStr) {
        const elseStmts = splitTopLevelAmp(elseStr);
        for (const stmt of elseStmts) {
          const parsed = parseInlineStatement(stmt, unsupported);
          elseBody.push(...parsed);
        }
      }
      nodes.push({ kind: 'if', condition, thenBody, elseBody });
      return { nodes, nextIdx: idx + 1 + consumedLines };
    }
  }

  // Text line with dynamic expression: 'text' + $var[...] (starts with ', doesn't end with ')
  if (trimmed.startsWith("'") && !trimmed.endsWith("'") && /'\s*\+|\+\s*'/.test(trimmed)) {
    nodes.push({ kind: 'text', content: trimmed, dynamic: true });
    return { nodes, nextIdx: idx + 1 };
  }

  // Text
  if (trimmed.startsWith("'") && trimmed.endsWith("'")) {
    let hasTopPlus = false, inStr = false, strCh = '', depth = 0;
    let start = 1;
    if (trimmed[1] === "'") {
      start = 2;
    } else {
      inStr = true;
      strCh = "'";
    }
    for (let ci = start; ci < trimmed.length - 1; ci++) {
      const ch = trimmed[ci];
      if (inStr) {
        if (ch === strCh) {
          if (strCh === "'" && trimmed[ci + 1] === "'") { ci++; }
          else inStr = false;
        } else if (ch === '<' && trimmed[ci + 1] === '<') {
          const closeIdx = trimmed.indexOf('>>', ci + 2);
          if (closeIdx !== -1) ci = closeIdx + 1;
        }
      } else if (ch === '<' && trimmed[ci + 1] === '<') {
        const closeIdx = trimmed.indexOf('>>', ci + 2);
        if (closeIdx !== -1) ci = closeIdx + 1;
      } else if (ch === "'" || ch === '"') {
        inStr = true; strCh = ch;
      } else if (ch === '(') { depth++; }
      else if (ch === ')') { depth--; }
      else if (ch === '+' && depth === 0) { hasTopPlus = true; break; }
    }
    if (hasTopPlus) {
      nodes.push({ kind: 'text', content: trimmed, dynamic: true });
    } else {
      const inner = trimmed.slice(1, -1);
      const isImage = inner.includes('<img') || inner.includes('<center>');
      if (isImage) {
        const imgMatch = inner.match(/src="([^"]+)"/);
        if (imgMatch) {
          nodes.push({ kind: 'image', src: imgMatch[1] });
          return { nodes, nextIdx: idx + 1 };
        }
      }
      const dynamic = inner.includes('<<') || inner.includes("iif(") || inner.includes('+');
      nodes.push({ kind: 'text', content: dynamic ? inner : unescapeQsp(inner), dynamic });
    }
    return { nodes, nextIdx: idx + 1 };
  }

  // Text line with dynamic expression: "text" + $var[...] (starts with ", doesn't end with ")
  if (trimmed.startsWith('"') && !trimmed.endsWith('"') && /"\s*\+|\+\s*"/.test(trimmed)) {
    nodes.push({ kind: 'text', content: trimmed, dynamic: true });
    return { nodes, nextIdx: idx + 1 };
  }

  // Text (double-quoted)
  if (trimmed.startsWith('"') && trimmed.endsWith('"')) {
    let hasTopPlus = false, inStr = false, strCh = '', depth = 0;
    let start = 1;
    if (trimmed[1] === '"') {
      start = 2;
    } else {
      inStr = true;
      strCh = '"';
    }
    for (let ci = start; ci < trimmed.length - 1; ci++) {
      const ch = trimmed[ci];
      if (inStr) {
        if (ch === strCh) {
          if (strCh === '"' && trimmed[ci + 1] === '"') { ci++; }
          else inStr = false;
        } else if (ch === '<' && trimmed[ci + 1] === '<') {
          const closeIdx = trimmed.indexOf('>>', ci + 2);
          if (closeIdx !== -1) ci = closeIdx + 1;
        }
      } else if (ch === '<' && trimmed[ci + 1] === '<') {
        const closeIdx = trimmed.indexOf('>>', ci + 2);
        if (closeIdx !== -1) ci = closeIdx + 1;
      } else if (ch === "'" || ch === '"') {
        inStr = true; strCh = ch;
      } else if (ch === '(') { depth++; }
      else if (ch === ')') { depth--; }
      else if (ch === '+' && depth === 0) { hasTopPlus = true; break; }
    }
    if (hasTopPlus) {
      nodes.push({ kind: 'text', content: trimmed, dynamic: true });
    } else {
      const inner = trimmed.slice(1, -1);
      const isImage = inner.includes('<img') || inner.includes('<center>');
      if (isImage) {
        const imgMatch = inner.match(/src="([^"]+)"/);
        if (imgMatch) {
          nodes.push({ kind: 'image', src: imgMatch[1] });
          return { nodes, nextIdx: idx + 1 };
        }
      }
      const dynamic = inner.includes('<<') || inner.includes("iif(") || inner.includes('+');
      nodes.push({ kind: 'text', content: dynamic ? inner : inner, dynamic });
    }
    return { nodes, nextIdx: idx + 1 };
  }

  // Goto or xgt
  const gtAnyMatch = trimmed.match(/^(?:gt|xgt)\s*(.+)$/);
  if (gtAnyMatch) {
    const argsStr = gtAnyMatch[1].trim();
    const args = splitTopLevel(argsStr).map(a => a.trim()).filter(Boolean);
    if (args.length >= 1) {
      const target = args[0];
      const isDynamicTarget = target.startsWith('$') || target.includes('<<');
      const rawArgs = args.slice(1);
      const a1Quoted = !!(rawArgs[0] && rawArgs[0].startsWith("'") && rawArgs[0].endsWith("'"));
      const a2Quoted = !!(rawArgs[1] && rawArgs[1].startsWith("'") && rawArgs[1].endsWith("'"));
      const a3Quoted = !!(rawArgs[2] && rawArgs[2].startsWith("'") && rawArgs[2].endsWith("'"));
      const cleanArgs = rawArgs.map(a => {
        const q = a.startsWith("'") && a.endsWith("'");
        return q ? unescapeQsp(a.slice(1, -1)) : a;
      });
      const gotoNode = { kind: 'goto' as const, arg: cleanArgs[0] || '', arg2: cleanArgs[1] || undefined, arg3: cleanArgs[2] || undefined, argQuoted: a1Quoted, arg2Quoted: a2Quoted, arg3Quoted: a3Quoted };
      if (!isDynamicTarget) {
        const t = target.startsWith("'") && target.endsWith("'") ? unescapeQsp(target.slice(1, -1)) : target;
        nodes.push({ ...gotoNode, target: t });
      } else {
        nodes.push({ ...gotoNode, target });
      }
    }
    return { nodes, nextIdx: idx + 1 };
  }

  // GS
  const gsMatch = trimmed.match(/^gs\s*('((?:[^']|'')*)'|\$\w+(\['[^']*'\]|\[\$\w+\]|\[\d+\]|\[\$\w+\[\d+\]\])?|\w+)\s*(?:,\s*('((?:[^']|'')*)'|\$\w+(\['[^']*'\]|\[\$\w+\]|\[\d+\]|\[\$\w+\[\d+\]\])?|\w+))?\s*(?:,\s*(.+?))?\s*(?:&\s*!!.*)?$/);
  if (gsMatch) {
    const moduleRaw = gsMatch[1];
    const module = moduleRaw.startsWith("'") ? moduleRaw.slice(1, -1) : moduleRaw;
    const funcRaw = gsMatch[4] || '';
    const func = funcRaw.startsWith("'") ? funcRaw.slice(1, -1) : (funcRaw || '');
    const extraArgs = gsMatch[7] ? splitTopLevel(gsMatch[7]).map(a => a.trim()) : [];
    nodes.push({ kind: 'gs', module, func, args: extraArgs });
    return { nodes, nextIdx: idx + 1 };
  }

  // Time
  const timeMatch = trimmed.match(/^minut\s*\+=?\s*(\d+)$/);
  if (timeMatch) {
    nodes.push({ kind: 'time', delta: parseInt(timeMatch[1], 10) });
    return { nodes, nextIdx: idx + 1 };
  }

  // Assignment
  const assignMatch = trimmed.match(/^(\w+)\s*(\+=|-=|\/=|\*=|=)\s*(.+)$/);
  if (assignMatch && !trimmed.startsWith('$')) {
    for (const n of assignNodes(assignMatch[1], assignMatch[2], assignMatch[3].trim())) nodes.push(n);
    return { nodes, nextIdx: idx + 1 };
  }

  // Dollar assignment
  const dollarMatch = trimmed.match(/^\$(\w+)\s*=\s*(.+)$/);
  if (dollarMatch && !/^\$(\w+)\s*=\s*["']$/.test(trimmed)) {
    let raw = trimmed;
    // Multi-line string: if the value has an unclosed quote, consume subsequent lines until closed
    const valPart = dollarMatch[2];

    if (valPart.includes("'") || valPart.includes('"')) {
      const q = valPart.startsWith("'") ? "'" : valPart.startsWith('"') ? '"' : (valPart.match(/['"]/)?.[0] ?? '');
      if (q) {
        let quoteCount = 0;
        for (let qi = 0; qi < valPart.length; qi++) {
          if (valPart[qi] === q) {
            if (valPart[qi + 1] === q) { qi++; continue; }
            quoteCount++;
          }
        }

        if (quoteCount % 2 === 1) {
          let next = idx + 1;
          while (next < lines.length) {
            const cont = lines[next].trim();
            raw += '\n' + cont;
            const fullVal = raw.slice(trimmed.indexOf('=') + 1).trim();
            let qc = 0;
            for (let qi = 0; qi < fullVal.length; qi++) {
              if (fullVal[qi] === q) {
                if (fullVal[qi + 1] === q) { qi++; continue; }
                qc++;
              }
            }
            idx = next;
            if (qc % 2 === 0) break;
            next++;
          }
        }
      }
    }
    nodes.push({ kind: 'setup', raw });
    return { nodes, nextIdx: idx + 1 };
  }

  // Exit
  if (trimmed === 'exit') {
    nodes.push({ kind: 'exit' });
    return { nodes, nextIdx: idx + 1 };
  }

  if (trimmed === 'close all') {
    return { nodes, nextIdx: idx + 1 };
  }

  if (/^copyarr\s/.test(trimmed) || /^copyarr\(/.test(trimmed)) {
    nodes.push({ kind: 'setup', raw: trimmed });
    return { nodes, nextIdx: idx + 1 };
  }

  if (trimmed === 'nl' || trimmed === 'nl ') {
    nodes.push({ kind: 'text', content: '', dynamic: false });
    return { nodes, nextIdx: idx + 1 };
  }
  const nlMatch2 = trimmed.match(/^nl\s+'((?:[^']|'')*)'$/);
  if (nlMatch2) {
    nodes.push({ kind: 'text', content: unescapeQsp(nlMatch2[1]), dynamic: false });
    return { nodes, nextIdx: idx + 1 };
  }

  // Comment
  if (trimmed.startsWith('!!')) {
    nodes.push({ kind: 'comment', text: trimmed.slice(2).trim() });
    return { nodes, nextIdx: idx + 1 };
  }

  // Setup
  if (
    trimmed.startsWith('menu_off') ||
    trimmed.startsWith('phone_off') ||
    trimmed === 'CLOSE ALL' ||
    trimmed.startsWith('*clr') ||
    trimmed.startsWith('*nl') ||
    trimmed.startsWith('gs \'stat\'') ||
    trimmed.startsWith('gs \'themes\'') ||
    trimmed === 'cla' ||
    trimmed === 'cls' ||
    trimmed === 'clr' ||
    trimmed.startsWith('cla &') ||
    trimmed.startsWith('cls &') ||
    trimmed.startsWith('clr &') ||
    trimmed.startsWith('$no') ||
    trimmed.startsWith('dynamic $') ||
    trimmed.startsWith('PLAY ') ||
    trimmed.startsWith('play ') ||
    trimmed.startsWith('killvar ') ||
    trimmed.startsWith('wait ') ||
    trimmed === '*pl' ||
    trimmed.startsWith('msg ') ||
    trimmed.startsWith("msg'")
  ) {
    nodes.push({ kind: 'setup', raw: trimmed });
    return { nodes, nextIdx: idx + 1 };
  }

  // Dynamic single-line: dynamic 'expr' (in if-blocks, parsed by parseSingleLine)
  const dynSingleMatch2 = trimmed.match(/^dynamic\s+'((?:[^']|'')*)'\s*$/);
  if (dynSingleMatch2) {
    nodes.push({ kind: 'setup', raw: trimmed });
    return { nodes, nextIdx: idx + 1 };
  }

  // view $func(...) — sets background image via function call
  const viewFuncMatch = trimmed.match(/^view\s+(\$?func\(.+\))$/);
  if (viewFuncMatch) {
    nodes.push({ kind: 'setup', raw: trimmed });
    return { nodes, nextIdx: idx + 1 };
  }

  // view 'path' - set background image
  const viewPathMatch2 = trimmed.match(/^view\s+'((?:[^']|'')*)'$/);
  if (viewPathMatch2) {
    nodes.push({ kind: 'setup', raw: trimmed });
    return { nodes, nextIdx: idx + 1 };
  }

  // addobj 'text' - add debug object (no-op)
  if (/^addobj\s+'/.test(trimmed)) {
    return { nodes, nextIdx: idx + 1 };
  }

  // delact - delete action (no-op in React context)
  if (/^delact\s/.test(trimmed)) {
    return { nodes, nextIdx: idx + 1 };
  }

  // Standalone func('module', 'function') call
  const standaloneFuncMatch2 = trimmed.match(/^func\((.+)\)\s*$/);
  if (standaloneFuncMatch2) {
    nodes.push({ kind: 'setup', raw: trimmed });
    return { nodes, nextIdx: idx + 1 };
  }

  // showstat - toggle status bar (no-op in React)
  if (/^showstat\s/.test(trimmed)) {
    return { nodes, nextIdx: idx + 1 };
  }

  // $func('wrap', 'style', 'text')
  const funcWrapMatch = trimmed.match(/^\$func\('wrap',\s*'([^']*)',\s*'((?:[^']|'')*)'\)/);
  if (funcWrapMatch) {
    const style = funcWrapMatch[1];
    const text = unescapeQsp(funcWrapMatch[2]);
    if (style.includes('header') || style.includes('accent') || style.includes('b')) {
      nodes.push({ kind: 'title', text });
    } else {
      nodes.push({ kind: 'text', content: text, dynamic: false });
    }
    return { nodes, nextIdx: idx + 1 };
  }

  // Array-like assignment: Word['key'] = val
  const arrAssignMatch = trimmed.match(/^(\w+)\['([^']+)'\]\s*(\+=|-=|\/=|\*=|=)\s*(.+)$/);
  if (arrAssignMatch) {
    for (const n of assignNodes(`${arrAssignMatch[1]}['${arrAssignMatch[2]}']`, arrAssignMatch[3], arrAssignMatch[4].trim())) nodes.push(n);
    return { nodes, nextIdx: idx + 1 };
  }

  // Array-like assignment: Word[key] = val (may include nested brackets like ARGS[1])
  const arrAssignMatch2 = trimmed.match(/^(\w+)\[(\w+(?:\[\d+\])?)\]\s*(\+=|-=|\/=|\*=|=)\s*(.+)$/);
  if (arrAssignMatch2) {
    for (const n of assignNodes(`${arrAssignMatch2[1]}[${arrAssignMatch2[2]}]`, arrAssignMatch2[3], arrAssignMatch2[4].trim())) nodes.push(n);
    return { nodes, nextIdx: idx + 1 };
  }

  // Goto with variable: gt $var or xgt $var (including dict access)
  const gtVarMatch = trimmed.match(/^(?:gt|xgt)\s+(\$\w+(\['[^']*'\]|\[\$\w+\]|\[\d+\])?|\w+)\s*(?:,\s*(\$\w+(\['[^']*'\]|\[\$\w+\]|\[\d+\])?|'[^']*'))?\s*$/);
  if (gtVarMatch && !trimmed.startsWith("gt '") && !trimmed.startsWith("xgt '")) {
    nodes.push({ kind: 'goto', target: gtVarMatch[1], arg: (gtVarMatch[3] || '').replace(/^'|'$/g, '') });
    return { nodes, nextIdx: idx + 1 };
  }

  // elseif: treat as nested if
  const elseifMatch = trimmed.match(/^elseif\s+(.+?)\s*:\s*$/);
  if (elseifMatch) {
    const { node: ifNode, nextIdx } = parseIfChain(lines, idx + 1, elseifMatch[1], unsupported);
    nodes.push(ifNode);
    return { nodes, nextIdx };
  }

  // else (leaked), including 'else !}' from !!{ blocks
  if (trimmed === 'else' || trimmed === 'else ' || trimmed === 'else !}') {
    return { nodes, nextIdx: idx + 1 };
  }

  // Block comment markers
  if (trimmed === '!{' || trimmed === '!!{' || trimmed === '!}' || trimmed === '!!}' || trimmed === '}' || trimmed === 'end}') {
    return { nodes, nextIdx: idx + 1 };
  }

  // *pl image placeholder
  if (trimmed.startsWith('*pl ')) {
    nodes.push({ kind: 'setup', raw: trimmed });
    return { nodes, nextIdx: idx + 1 };
  }

  // *p print statement
  const pMatch = trimmed.match(/^\*[pP]\s+'((?:[^']|'')*)'$/);
  if (pMatch) {
    const inner = unescapeQsp(pMatch[1]);
    const isImage = inner.includes('<img');
    if (isImage) {
      const imgMatch = inner.match(/src="([^"]+)"/);
      if (imgMatch) {
        nodes.push({ kind: 'image', src: imgMatch[1] });
        return { nodes, nextIdx: idx + 1 };
      }
    }
    const dynamic = inner.includes('<<') || inner.includes("iif(") || inner.includes('+');
    nodes.push({ kind: 'text', content: inner, dynamic });
    return { nodes, nextIdx: idx + 1 };
  }

  if (trimmed.startsWith('*p')) {
    const pRest = trimmed.slice(2).trim();
    if (pRest) {
      nodes.push({ kind: 'text', content: pRest, dynamic: true });
      return { nodes, nextIdx: idx + 1 };
    }
  }

  // p print statement (without asterisk)
  const pNoStarMatch = trimmed.match(/^p\s+'((?:[^']|'')*)'$/);
  if (pNoStarMatch) {
    const inner = unescapeQsp(pNoStarMatch[1]);
    const isImage = inner.includes('<img');
    if (isImage) {
      const imgMatch = inner.match(/src="([^"]+)"/);
      if (imgMatch) {
        nodes.push({ kind: 'image', src: imgMatch[1] });
        return { nodes, nextIdx: idx + 1 };
      }
    }
    const dynamic = inner.includes('<<') || inner.includes("iif(") || inner.includes('+');
    nodes.push({ kind: 'text', content: inner, dynamic });
    return { nodes, nextIdx: idx + 1 };
  }
  if (trimmed.startsWith('p ') || trimmed === 'p') {
    const pRest = trimmed.slice(1).trim();
    if (pRest) {
      nodes.push({ kind: 'text', content: pRest, dynamic: true });
      return { nodes, nextIdx: idx + 1 };
    }
  }

  // pl print line statement (without asterisk)
  const plNoStarMatch = trimmed.match(/^pl\s*'((?:[^']|'')*)'$/);
  if (plNoStarMatch) {
    const inner = unescapeQsp(plNoStarMatch[1]);
    nodes.push({ kind: 'text', content: inner, dynamic: inner.includes('<<') || inner.includes('iif(') || inner.includes('+') });
    return { nodes, nextIdx: idx + 1 };
  }
  if (trimmed.startsWith('pl ') || trimmed === 'pl') {
    const plRest = trimmed.slice(2).trim();
    if (plRest) {
      nodes.push({ kind: 'text', content: plRest, dynamic: true });
      return { nodes, nextIdx: idx + 1 };
    }
  }

  // Array append: Word[] = val or $Word[] = val
  const arrAppendMatch = trimmed.match(/^(\$?\w+)\[\]\s*=\s*(.+)$/);
  if (arrAppendMatch) {
    nodes.push({ kind: 'assign', var: `${arrAppendMatch[1]}[]`, op: '=', value: arrAppendMatch[2].trim() });
    return { nodes, nextIdx: idx + 1 };
  }

  // Array assignment with numeric index: $Word[0] = val or Word[0] = val
  const arrNumIdxMatch = trimmed.match(/^(\$?\w+)\[(\d+)\]\s*(\+=|-=|\/=|\*=|=)\s*(.+)$/);
  if (arrNumIdxMatch) {
    nodes.push({ kind: 'assign', var: `${arrNumIdxMatch[1]}[${arrNumIdxMatch[2]}]`, op: arrNumIdxMatch[3] as '=' | '+=' | '-=', value: arrNumIdxMatch[4].trim() });
    return { nodes, nextIdx: idx + 1 };
  }

  // Multi-line dollar array string: $Word['key'] = " (or ')
  const dollarArrMultiLineMatch = trimmed.match(/^\$(\w+)\['([^']+)'\]\s*(\+=|-=|\/=|\*=|=)\s*(["'])$/);
  if (dollarArrMultiLineMatch) {
    const varName = `$${dollarArrMultiLineMatch[1]}['${dollarArrMultiLineMatch[2]}']`;
    const op = dollarArrMultiLineMatch[3];
    const qch = dollarArrMultiLineMatch[4];
    let fullStr = qch;
    let consumedLines = 0;
    let totalQc = 1;
    for (let j = idx + 1; j < lines.length; j++) {
      const next = lines[j].trim();
      const qc = (next.match(new RegExp(`\\${qch === '"' ? '"' : "'"}`, 'g')) || []).length;
      totalQc += qc;
      fullStr += '\n' + next;
      consumedLines++;
      if (totalQc % 2 === 0) break;
    }
    if (!fullStr.endsWith(qch)) fullStr += qch;
    const inner = fullStr.slice(1, -1);
    const escaped = inner.replace(/\\/g, '\\\\').replace(/'/g, qch === "'" ? "''" : "'").replace(/\r/g, '');
    nodes.push({ kind: 'assign', var: varName, op: op as '=' | '+=' | '-=' | '*=' | '/=', value: `${qch}${escaped}${qch}` });
    return { nodes, nextIdx: idx + 1 + consumedLines };
  }

  // Multi-line dollar variable string: $var = " (or ')
  const dollarVarMultiLineMatch = trimmed.match(/^\$(\w+)\s*(\+=|-=|\/=|\*=|=)\s*(["'])$/);
  if (dollarVarMultiLineMatch) {
    const varName = dollarVarMultiLineMatch[1];
    const op = dollarVarMultiLineMatch[2];
    const qch = dollarVarMultiLineMatch[3];
    let fullStr = qch;
    let consumedLines = 0;
    let totalQc = 1;
    for (let j = idx + 1; j < lines.length; j++) {
      const next = lines[j].trim();
      const qc = (next.match(new RegExp(`\\${qch === '"' ? '"' : "'"}`, 'g')) || []).length;
      totalQc += qc;
      fullStr += '\n' + next;
      consumedLines++;
      if (totalQc % 2 === 0) break;
    }
    if (!fullStr.endsWith(qch)) fullStr += qch;
    const inner = fullStr.slice(1, -1);
    const escaped = inner.replace(/\\/g, '\\\\').replace(/'/g, qch === "'" ? "''" : "'").replace(/\r/g, '');
    nodes.push({ kind: 'assign', var: varName, op: op as '=' | '+=' | '-=' | '*=' | '/=', value: `${qch}${escaped}${qch}` });
    return { nodes, nextIdx: idx + 1 + consumedLines };
  }

  // Multi-line dollar variable string with content on same line: $var = "content
  const dollarVarMultiLineContentMatch = trimmed.match(/^\$(\w+)\s*(\+=|-=|\/=|\*=|=)\s*(["'])(.+)$/);
  if (dollarVarMultiLineContentMatch) {
    const qch = dollarVarMultiLineContentMatch[3];
    const fullValPart = qch + dollarVarMultiLineContentMatch[4];
    let qc0 = 0;
    for (let qi = 0; qi < fullValPart.length; qi++) {
      if (fullValPart[qi] === qch) {
        if (fullValPart[qi + 1] === qch) { qi++; continue; }
        qc0++;
      }
    }
    if (qc0 % 2 === 0) {
      // First quote is closed on this line -> not a multi-line string
    } else {
    const varName = `$${dollarVarMultiLineContentMatch[1]}`;
    const op = dollarVarMultiLineContentMatch[2];
    const firstContent = dollarVarMultiLineContentMatch[4];
    let fullStr = qch + firstContent;
    let consumedLines = 0;
    let totalQc = 1;
    for (let j = idx + 1; j < lines.length; j++) {
      const next = lines[j].trim();
      const qc = (next.match(new RegExp(`\\${qch === '"' ? '"' : "'"}`, 'g')) || []).length;
      totalQc += qc;
      fullStr += '\n' + next;
      consumedLines++;
      if (totalQc % 2 === 0) break;
    }
    if (!fullStr.endsWith(qch)) fullStr += qch;
    const inner = fullStr.slice(1, -1);
    const escaped = inner.replace(/\\/g, '\\\\').replace(/'/g, qch === "'" ? "''" : "'").replace(/\r/g, '');
    nodes.push({ kind: 'assign', var: varName, op: op as '=' | '+=' | '-=' | '*=' | '/=', value: `${qch}${escaped}${qch}` });
    return { nodes, nextIdx: idx + 1 + consumedLines };
    }
  }

  // Dollar array assignment: $Word['key'] = val
  const dollarArrMatch = trimmed.match(/^\$(\w+)\['([^']+)'\]\s*(\+=|-=|\/=|\*=|=)\s*(.+)$/);
  if (dollarArrMatch) {
    for (const n of assignNodes(`$${dollarArrMatch[1]}['${dollarArrMatch[2]}']`, dollarArrMatch[3], dollarArrMatch[4].trim())) nodes.push(n);
    return { nodes, nextIdx: idx + 1 };
  }

  // Dollar array assignment with unquoted key: $Word[key] = val
  const dollarArrMatch2 = trimmed.match(/^\$(\w+)\[(\$?\w+(?:\[\d+\])?)\]\s*(\+=|-=|\/=|\*=|=)\s*(.+)$/);
  if (dollarArrMatch2) {
    for (const n of assignNodes(`$${dollarArrMatch2[1]}[${dollarArrMatch2[2]}]`, dollarArrMatch2[3], dollarArrMatch2[4].trim())) nodes.push(n);
    return { nodes, nextIdx: idx + 1 };
  }

  // Array assignment with variable key: Word[$var] = val or Word[var] = val
  const arrVarKeyMatch = trimmed.match(/^(\w+)\[(\$?\w+(?:\[\d+\])?)\]\s*(\+=|-=|\/=|\*=|=)\s*(.+)$/);
  if (arrVarKeyMatch) {
    for (const n of assignNodes(`${arrVarKeyMatch[1]}[${arrVarKeyMatch[2]}]`, arrVarKeyMatch[3], arrVarKeyMatch[4].trim())) nodes.push(n);
    return { nodes, nextIdx: idx + 1 };
  }

  const bca2 = extractBracketAssign(trimmed);
  if (bca2) {
    for (const n of assignNodes(`${bca2.varName}[${bca2.key}]`, bca2.op, bca2.value)) nodes.push(n);
    return { nodes, nextIdx: idx + 1 };
  }

  // Label: :labelname
  const labelMatch = trimmed.match(/^:([a-zA-Z_]\w*)$/);
  if (labelMatch) {
    nodes.push({ kind: 'label', name: labelMatch[1] });
    return { nodes, nextIdx: idx + 1 };
  }

  // Jump: jump 'label'
  const jumpMatch = trimmed.match(/^jump\s+'((?:[^']|'')*)'$/i);
  if (jumpMatch) {
    const label = unescapeQsp(jumpMatch[1]);
    nodes.push({ kind: 'jump', label });
    return { nodes, nextIdx: idx + 1 };
  }

  // Dollar variable assignment: $var = val, $var += val, $var -= val
  const dollarVarMatch = trimmed.match(/^\$(\w+)\s*(\+=|-=|\/=|\*=|=)\s*(.+)$/);
  if (dollarVarMatch) {
    let val = dollarVarMatch[3].trim();
    let nextIdx = idx + 1;
    // Multi-line string: value starts with quote but the opening quote is not closed on the same line
    const quote = val[0];
    if ((quote === '"' || quote === "'") && val.length > 1) {
      // Count quotes to determine if the opening quote is closed
      let qCount = 0;
      for (let qi = 0; qi < val.length; qi++) {
        if (val[qi] === quote) {
          if (val[qi + 1] === quote) { qi++; continue; }
          qCount++;
        }
      }
      // Odd count means the opening quote is not closed
      if (qCount % 2 === 1) {
        const parts: string[] = [val];
        while (nextIdx < lines.length) {
          const line = lines[nextIdx].trim();
          parts.push(line);
          // Count quotes on this line to check if the string is closed
          let lineQCount = 0;
          for (let qi = 0; qi < line.length; qi++) {
            if (line[qi] === quote) {
              if (line[qi + 1] === quote) { qi++; continue; }
              lineQCount++;
            }
          }
          qCount += lineQCount;
          nextIdx++;
          if (qCount % 2 === 0) break;
        }
        val = parts.join('\n');
      }
    }
    nodes.push({ kind: 'assign', var: `$${dollarVarMatch[1]}`, op: dollarVarMatch[2] as '=' | '+=' | '-=', value: val });
    return { nodes, nextIdx };
  }

  // Dynamic expression text: iif(...), $func(...), $var + 'text', $var[...] + ..., etc.
  if (/^(iif|\$func)\s*\(/.test(trimmed) || /^'[^']*'\s*\+\s*/.test(trimmed) || (/^\$[a-zA-Z_]\w*(\[[^\]]*\])?\s*\+/.test(trimmed) && !/^\$[a-zA-Z_]\w*(\[[^\]]*\])?\s*\+=/.test(trimmed) && !/^\$[a-zA-Z_]\w*(\[[^\]]*\])?\s*=-/.test(trimmed) && !/^\$[a-zA-Z_]\w*(\[[^\]]*\])?\s*=$/.test(trimmed))) {
    nodes.push({ kind: 'text', content: trimmed, dynamic: true });
    return { nodes, nextIdx: idx + 1 };
  }

  // Standalone $var line: display variable value as text
  if (/^\$[a-zA-Z_]\w*\s*$/.test(trimmed)) {
    nodes.push({ kind: 'text', content: trimmed, dynamic: true });
    return { nodes, nextIdx: idx + 1 };
  }

  // Dollar array function call: $Word['key'] (standalone, no assignment)
  const dollarArrCallMatch = trimmed.match(/^\$(\w+)\['([^']+)'\]\s*$/);
  if (dollarArrCallMatch) {
    nodes.push({ kind: 'setup', raw: trimmed });
    return { nodes, nextIdx: idx + 1 };
  }

  // Bare dollar array access with variable key: $var[$var2] (no assignment)
  const dollarArrVarCallMatch2 = trimmed.match(/^\$(\w+)\[(\$?\w+(?:\[\d+\])?)\]\s*$/);
  if (dollarArrVarCallMatch2) {
    nodes.push({ kind: 'setup', raw: trimmed });
    return { nodes, nextIdx: idx + 1 };
  }

  // Fallback
  nodes.push({ kind: 'unknown', raw: trimmed });
  if (trimmed.length < 120) unsupported.push(trimmed);
  return { nodes, nextIdx: idx + 1 };
}

function parseInlineStatement(stmt: string, unsupported: string[]): QspNode[] {
  const nodes: QspNode[] = [];
  const trimmed = stmt.trim();

  if (trimmed.includes('&') && !trimmed.startsWith("'")) {
    const parts = splitTopLevelAmp(trimmed);
    if (parts.length > 1 && parts.every(p => /^(?:[\w$]+\[?\w*\]?\s*(?:\+=|-=|=)\s*|jump\s+|gt\s+|gs\s+|\*p\s+|\*s\s+|pl\s+|clr\b|killvar\s+|dynamic\s+)/.test(p))) {
      for (const part of parts) {
        nodes.push(...parseInlineStatement(part, unsupported));
      }
      return nodes;
    }
  }

  if (trimmed.startsWith('PLAY ') || trimmed.startsWith('play ') || trimmed.startsWith('cla') || trimmed.startsWith('cls') || trimmed.startsWith('clr') || trimmed.startsWith('*clr') || trimmed.startsWith('*nl') || trimmed.startsWith('killvar ') || trimmed.startsWith('msg ') || trimmed.startsWith("msg'")) {
    nodes.push({ kind: 'setup', raw: trimmed });
    return nodes;
  }

  // Dynamic function call: dynamic($func, 'arg1', arg2)
  const dynFuncMatch = trimmed.match(/^dynamic\((.+)\)$/);
  if (dynFuncMatch) {
    nodes.push({ kind: 'setup', raw: trimmed });
    return nodes;
  }

  // Dynamic variable: dynamic $var
  const dynVarMatch = trimmed.match(/^dynamic\s+\$(\w+)$/);
  if (dynVarMatch) {
    nodes.push({ kind: 'setup', raw: trimmed });
    return nodes;
  }

  // Dynamic single-line: dynamic 'expr'
  const dynSingleMatch = trimmed.match(/^dynamic\s+'((?:[^']|'')*)'\s*$/);
  if (dynSingleMatch) {
    nodes.push({ kind: 'setup', raw: trimmed });
    return nodes;
  }

  const actDynWrapMatch = trimmed.match(/^act\s*\'((?:[^\']|\'\')*)\'\s*\+\s*\$func\('wrap',\s*'([^']*)',\s*'((?:[^\']|\'\')*)'\)\s*:\s*(.+)$/i);
  if (actDynWrapMatch) {
    const label = unescapeQsp(actDynWrapMatch[1]);
    const style = actDynWrapMatch[2];
    const text = unescapeQsp(actDynWrapMatch[3]);
    const rest = actDynWrapMatch[4].trim();
    const act: QspAct = { kind: 'act', label: `'${label}' + $func('wrap', '${style}', '${text}')`, body: [], dynamicLabel: true };
    if (rest) {
      const gtMatch = rest.match(/^gt\s+'([^']+)'\s*(?:,\s*('[^']*'|\$\w+\['[^']*'\]|\$\w+|\w+))?\s*(?:,\s*('[^']*'|\$\w+\['[^']*'\]|\$\w+|\w+))?$/);
      if (gtMatch) {
        act.inlineGoto = { target: gtMatch[1], arg: (gtMatch[2] && gtMatch[2].startsWith("'") && gtMatch[2].endsWith("'") ? gtMatch[2].slice(1, -1) : gtMatch[2]) || '', arg2: (gtMatch[3] && gtMatch[3].startsWith("'") && gtMatch[3].endsWith("'") ? gtMatch[3].slice(1, -1) : gtMatch[3]) };
      } else {
        act.inlineStatements = rest;
      }
    }
    nodes.push(act);
    return nodes;
  }

  const actFuncWrapMatch = trimmed.match(/^act\s*\'((?:[^']|'')*)'\s*:\s*\$func\('wrap',\s*'([^']*)',\s*'((?:[^']|'')*)'\)\s*$/i);
  if (actFuncWrapMatch) {
    const label = unescapeQsp(actFuncWrapMatch[1]);
    const style = actFuncWrapMatch[2];
    const text = unescapeQsp(actFuncWrapMatch[3]);
    nodes.push({ kind: 'act', label, body: [], inlineText: text, inlineTextStyle: style });
    return nodes;
  }

  const actInlineMatch = trimmed.match(/^act\s*\'((?:[^']|'')*)'\s*:\s*(.+)$/i);
  if (actInlineMatch) {
    const label = unescapeQsp(actInlineMatch[1]);
    const rest = actInlineMatch[2].trim();
    const act: QspAct = { kind: 'act', label, body: [] };
      const gtDynTargetMatch = rest.match(/^gt\s+'([^']+)'\s*\+\s*(\$\w+)\s*(?:,\s*'([^']*)')?\s*(?:,\s*('[^']*'|\w+))?$/);
      if (gtDynTargetMatch) {
        act.inlineGoto = { target: gtDynTargetMatch[2], arg: gtDynTargetMatch[3] || '', arg2: gtDynTargetMatch[4] };
      } else {
        const gt4Match = rest.match(/^gt\s+'([^']+)'\s*,\s*'([^']*)'\s*,\s*(\$\w+|\w+)\s*,\s*'([^']*)'\s*$/);
        if (gt4Match) {
          act.inlineGoto = { target: gt4Match[1], arg: gt4Match[2], arg2: gt4Match[3].replace(/^\$/, ''), arg3: gt4Match[4] };
        } else {
          const gtMatch = rest.match(/^gt\s+'([^']+)'\s*(?:,\s*('[^']*'|\$\w+\['[^']*'\]|\$\w+|\w+))?\s*(?:,\s*('[^']*'|\$\w+\['[^']*'\]|\$\w+|\w+))?$/);
          if (gtMatch) {
            act.inlineGoto = { target: gtMatch[1], arg: (gtMatch[2] && gtMatch[2].startsWith("'") && gtMatch[2].endsWith("'") ? gtMatch[2].slice(1, -1) : gtMatch[2]) || '', arg2: (gtMatch[3] && gtMatch[3].startsWith("'") && gtMatch[3].endsWith("'") ? gtMatch[3].slice(1, -1) : gtMatch[3]) };
          } else {
            const gtVarArgMatch = rest.match(/^gt\s+'([^']+)'\s*,\s*(\$\w+\['[^']*'\]|\$\w+|\w+)\s*$/);
            if (gtVarArgMatch) {
              act.inlineGoto = { target: gtVarArgMatch[1], arg: gtVarArgMatch[2].replace(/^\$/, ''), arg2: undefined };
            } else {
              const gtIifMatch = rest.match(/^gt\s+'([^']+)'\s*,\s*iif\(/);
              if (gtIifMatch) {
                const iifStart = rest.indexOf('iif(');
                let depth = 0, iifEnd = -1, inStr = false, strCh = '';
                for (let j = iifStart; j < rest.length; j++) {
                  const ch = rest[j];
                  if (inStr) { if (ch === strCh) inStr = false; continue; }
                  if (ch === "'" || ch === '"') { inStr = true; strCh = ch; continue; }
                  if (ch === '(') depth++;
                  else if (ch === ')') { depth--; if (depth === 0) { iifEnd = j; break; } }
                }
                if (iifEnd !== -1) {
                  const iifExpr = rest.slice(iifStart, iifEnd + 1);
                  act.inlineGoto = { target: gtIifMatch[1], arg: iifExpr, arg2: undefined };
                } else {
                  act.inlineStatements = rest;
                }
              } else {
                act.inlineStatements = rest;
              }
            }
          }
        }
      }
    nodes.push(act);
    return nodes;
  }

  const gtAnyMatch = trimmed.match(/^(?:gt|xgt)\s*(.+)$/);
  if (gtAnyMatch) {
    const argsStr = gtAnyMatch[1].trim();
    const args = splitTopLevel(argsStr).map(a => a.trim()).filter(Boolean);
    if (args.length >= 1) {
      const target = args[0];
      const isDynamicTarget = target.startsWith('$') || target.includes('<<');
      const rawArgs = args.slice(1);
      const a1Quoted = !!(rawArgs[0] && rawArgs[0].startsWith("'") && rawArgs[0].endsWith("'"));
      const a2Quoted = !!(rawArgs[1] && rawArgs[1].startsWith("'") && rawArgs[1].endsWith("'"));
      const a3Quoted = !!(rawArgs[2] && rawArgs[2].startsWith("'") && rawArgs[2].endsWith("'"));
      const cleanArgs = rawArgs.map(a => {
        const q = a.startsWith("'") && a.endsWith("'");
        return q ? unescapeQsp(a.slice(1, -1)) : a;
      });
      const gotoNode = { kind: 'goto' as const, arg: cleanArgs[0] || '', arg2: cleanArgs[1] || undefined, arg3: cleanArgs[2] || undefined, argQuoted: a1Quoted, arg2Quoted: a2Quoted, arg3Quoted: a3Quoted };
      if (!isDynamicTarget) {
        const t = target.startsWith("'") && target.endsWith("'") ? unescapeQsp(target.slice(1, -1)) : target;
        nodes.push({ ...gotoNode, target: t });
      } else {
        nodes.push({ ...gotoNode, target });
      }
    }
    return nodes;
  }

  const gsMatch = trimmed.match(/^gs\s*('((?:[^']|'')*)'|\$\w+(\['[^']*'\]|\[\$\w+\]|\[\d+\]|\[\$\w+\[\d+\]\])?|\w+)\s*(?:,\s*('((?:[^']|'')*)'|\$\w+(\['[^']*'\]|\[\$\w+\]|\[\d+\]|\[\$\w+\[\d+\]\])?|\w+))?\s*(?:,\s*(.+?))?\s*(?:&\s*!!.*)?$/);
  if (gsMatch) {
    const moduleRaw = gsMatch[1];
    const module = moduleRaw.startsWith("'") ? moduleRaw.slice(1, -1) : moduleRaw;
    const funcRaw = gsMatch[4] || '';
    const func = funcRaw.startsWith("'") ? funcRaw.slice(1, -1) : (funcRaw || '');
    const extraArgs = gsMatch[7] ? splitTopLevel(gsMatch[7]).map(a => a.trim()) : [];
    nodes.push({ kind: 'gs', module, func, args: extraArgs });
    return nodes;
  }

  const arrAppendMatch = trimmed.match(/^(\$?\w+)\[\]\s*=\s*(.+)$/);
  if (arrAppendMatch) {
    nodes.push({ kind: 'assign', var: `${arrAppendMatch[1]}[]`, op: '=', value: arrAppendMatch[2].trim() });
    return nodes;
  }

  const arrNumIdxMatch = trimmed.match(/^(\$?\w+)\[(\d+)\]\s*(\+=|-=|\/=|\*=|=)\s*(.+)$/);
  if (arrNumIdxMatch) {
    nodes.push({ kind: 'assign', var: `${arrNumIdxMatch[1]}[${arrNumIdxMatch[2]}]`, op: arrNumIdxMatch[3] as '=' | '+=' | '-=', value: arrNumIdxMatch[4].trim() });
    return nodes;
  }

  const bca3 = extractBracketAssign(trimmed);
  if (bca3) {
    for (const n of assignNodes(`${bca3.varName}[${bca3.key}]`, bca3.op, bca3.value)) nodes.push(n);
    return nodes;
  }

  const assignMatch = trimmed.match(/^(\w+)\s*(\+=|-=|\/=|\*=|=)\s*(.+)$/);
  if (assignMatch) {
    for (const n of assignNodes(assignMatch[1], assignMatch[2], assignMatch[3].trim())) nodes.push(n);
    return nodes;
  }

  const arrAssignMatch = trimmed.match(/^(\w+)\['([^']+)'\]\s*(\+=|-=|\/=|\*=|=)\s*(.+)$/);
  if (arrAssignMatch) {
    for (const n of assignNodes(`${arrAssignMatch[1]}['${arrAssignMatch[2]}']`, arrAssignMatch[3], arrAssignMatch[4].trim())) nodes.push(n);
    return nodes;
  }

  const arrAssignMatch2 = trimmed.match(/^(\w+)\[(\$?\w+(?:\[\d+\])?)\]\s*(\+=|-=|\/=|\*=|=)\s*(.+)$/);
  if (arrAssignMatch2) {
    for (const n of assignNodes(`${arrAssignMatch2[1]}[${arrAssignMatch2[2]}]`, arrAssignMatch2[3], arrAssignMatch2[4].trim())) nodes.push(n);
    return nodes;
  }

  const dollarArrMatch = trimmed.match(/^\$(\w+)\['([^']+)'\]\s*(\+=|-=|\/=|\*=|=)\s*(.+)$/);
  if (dollarArrMatch) {
    for (const n of assignNodes(`$${dollarArrMatch[1]}['${dollarArrMatch[2]}']`, dollarArrMatch[3], dollarArrMatch[4].trim())) nodes.push(n);
    return nodes;
  }

  // view $func(...) — sets background image via function call
  const viewFuncMatch = trimmed.match(/^view\s+(\$?func\(.+\))$/);
  if (viewFuncMatch) {
    nodes.push({ kind: 'setup', raw: trimmed });
    return nodes;
  }

  // view 'path' - set background image
  const viewPathMatch3 = trimmed.match(/^view\s+'((?:[^']|'')*)'$/);
  if (viewPathMatch3) {
    nodes.push({ kind: 'setup', raw: trimmed });
    return nodes;
  }

  // addobj 'text' - add debug object (no-op)
  if (/^addobj\s+'/.test(trimmed)) {
    return nodes;
  }

  // delact - delete action (no-op in React context)
  if (/^delact\s/.test(trimmed)) {
    return nodes;
  }

  // Standalone func('module', 'function') call
  const standaloneFuncMatch3 = trimmed.match(/^func\((.+)\)\s*$/);
  if (standaloneFuncMatch3) {
    nodes.push({ kind: 'setup', raw: trimmed });
    return nodes;
  }

  // showstat - toggle status bar (no-op in React)
  if (/^showstat\s/.test(trimmed)) {
    return nodes;
  }

  // Dollar array function call: $Word['key'] (standalone, no assignment)
  const dollarArrCallMatch = trimmed.match(/^\$(\w+)\['([^']+)'\]\s*$/);
  if (dollarArrCallMatch) {
    nodes.push({ kind: 'setup', raw: trimmed });
    return nodes;
  }

  // Bare dollar array access with variable key: $var[$var2] (no assignment)
  const dollarArrVarCallMatch3 = trimmed.match(/^\$(\w+)\[(\$?\w+(?:\[\d+\])?)\]\s*$/);
  if (dollarArrVarCallMatch3) {
    nodes.push({ kind: 'setup', raw: trimmed });
    return nodes;
  }

  const dollarArrMatch2 = trimmed.match(/^\$(\w+)\[(\$?\w+(?:\[\d+\])?)\]\s*(\+=|-=|\/=|\*=|=)\s*(.+)$/);
  if (dollarArrMatch2) {
    for (const n of assignNodes(`$${dollarArrMatch2[1]}[${dollarArrMatch2[2]}]`, dollarArrMatch2[3], dollarArrMatch2[4].trim())) nodes.push(n);
    return nodes;
  }

  const dollarAssignMatch = trimmed.match(/^\$(\w+)\s*(\+=|-=|\/=|\*=|=)\s*([\s\S]+)$/);
  if (dollarAssignMatch) {
    nodes.push({ kind: 'setup', raw: trimmed });
    return nodes;
  }

  const timeMatch = trimmed.match(/^minut\s*\+=?\s*(\d+)$/);
  if (timeMatch) {
    nodes.push({ kind: 'time', delta: parseInt(timeMatch[1], 10) });
    return nodes;
  }

  // Bare string concatenation (starts with ', doesn't end with '): 'text' + iif(...), etc.
  if (trimmed.startsWith("'") && !trimmed.endsWith("'") && /'\s*\+|\+\s*'/.test(trimmed)) {
    nodes.push({ kind: 'text', content: trimmed, dynamic: true });
    return nodes;
  }

  if (trimmed.startsWith("'") && trimmed.endsWith("'")) {
    let hasTopPlus = false, inStr = false, strCh = '', depth = 0;
    let start = 1;
    if (trimmed[1] === "'") {
      start = 2;
    } else {
      inStr = true;
      strCh = "'";
    }
    for (let ci = start; ci < trimmed.length - 1; ci++) {
      const ch = trimmed[ci];
      if (inStr) {
        if (ch === strCh) {
          if (strCh === "'" && trimmed[ci + 1] === "'") { ci++; }
          else inStr = false;
        } else if (ch === '<' && trimmed[ci + 1] === '<') {
          const closeIdx = trimmed.indexOf('>>', ci + 2);
          if (closeIdx !== -1) ci = closeIdx + 1;
        }
      } else if (ch === '<' && trimmed[ci + 1] === '<') {
        const closeIdx = trimmed.indexOf('>>', ci + 2);
        if (closeIdx !== -1) ci = closeIdx + 1;
      } else if (ch === "'" || ch === '"') {
        inStr = true; strCh = ch;
      } else if (ch === '(') { depth++; }
      else if (ch === ')') { depth--; }
      else if (ch === '+' && depth === 0) { hasTopPlus = true; break; }
    }
    if (hasTopPlus) {
      nodes.push({ kind: 'text', content: trimmed, dynamic: true });
    } else {
      const inner = trimmed.slice(1, -1);
      const dynamic = inner.includes('<<') || inner.includes("iif(") || inner.includes('+');
      nodes.push({ kind: 'text', content: dynamic ? inner : unescapeQsp(inner), dynamic });
    }
    return nodes;
  }

  const pMatch = trimmed.match(/^\*p\s+'((?:[^']|'')*)'$/);
  if (pMatch) {
    const rawInner = pMatch[1];
    const dynamic = rawInner.includes('<<') || rawInner.includes("iif(") || rawInner.includes('+');
    const inner = dynamic ? rawInner : unescapeQsp(rawInner);
    nodes.push({ kind: 'text', content: inner, dynamic });
    return nodes;
  }

  if (trimmed.startsWith('*p') || trimmed.startsWith('*P')) {
    const pRest = trimmed.slice(2).trim();
    if (pRest) {
      nodes.push({ kind: 'text', content: pRest, dynamic: true });
      return nodes;
    }
  }

  // pl print line statement (without asterisk)
  const plNoStarMatch = trimmed.match(/^pl\s*'((?:[^']|'')*)'$/);
  if (plNoStarMatch) {
    const inner = unescapeQsp(plNoStarMatch[1]);
    nodes.push({ kind: 'text', content: inner, dynamic: inner.includes('<<') || inner.includes('iif(') || inner.includes('+') });
    return nodes;
  }
  if (trimmed.startsWith('pl ') || trimmed === 'pl') {
    const plRest = trimmed.slice(2).trim();
    if (plRest) {
      nodes.push({ kind: 'text', content: plRest, dynamic: true });
      return nodes;
    }
  }

  const jumpMatch = trimmed.match(/^jump\s+'((?:[^']|'')*)'$/i);
  if (jumpMatch) {
    const label = unescapeQsp(jumpMatch[1]);
    nodes.push({ kind: 'jump', label });
    return nodes;
  }

  const labelMatch = trimmed.match(/^:([a-zA-Z_]\w*)$/);
  if (labelMatch) {
    nodes.push({ kind: 'label', name: labelMatch[1] });
    return nodes;
  }

  if (trimmed === 'exit') {
    nodes.push({ kind: 'exit' });
    return nodes;
  }

  if (trimmed === 'close all') {
    return nodes;
  }

  if (/^copyarr\s/.test(trimmed) || /^copyarr\(/.test(trimmed)) {
    nodes.push({ kind: 'setup', raw: trimmed });
    return nodes;
  }

  if (trimmed === 'nl' || trimmed === 'nl ') {
    nodes.push({ kind: 'text', content: '', dynamic: false });
    return nodes;
  }
  const nlMatch3 = trimmed.match(/^nl\s+'((?:[^']|'')*)'$/);
  if (nlMatch3) {
    nodes.push({ kind: 'text', content: unescapeQsp(nlMatch3[1]), dynamic: false });
    return nodes;
  }

  if (/^(iif|\$func)\s*\(/.test(trimmed) || /^'[^']*'\s*\+\s*/.test(trimmed) || (/^\$[a-zA-Z_]\w*\s*\+/.test(trimmed) && !/^\$[a-zA-Z_]\w*\s*\+=/.test(trimmed))) {
    nodes.push({ kind: 'text', content: trimmed, dynamic: true });
    return nodes;
  }

  // Inline if: if condition: statement [else statement]
  const inlineIfMatch = trimmed.match(/^if\s+(.+?)\s*:\s*(.+)$/);
  if (inlineIfMatch) {
    const condition = inlineIfMatch[1].trim();
    const stmtStr = inlineIfMatch[2].trim();
    const elseIdx = stmtStr.indexOf(' else ');
    const thenStr = elseIdx !== -1 ? stmtStr.slice(0, elseIdx).trim() : stmtStr;
    const elseStr = elseIdx !== -1 ? stmtStr.slice(elseIdx + 6).trim() : '';
    const thenNodes = parseInlineStatement(thenStr, unsupported);
    const elseNodes = elseStr ? parseInlineStatement(elseStr, unsupported) : [];
    nodes.push({ kind: 'if', condition, thenBody: thenNodes, elseBody: elseNodes });
    return nodes;
  }

  nodes.push({ kind: 'unknown', raw: trimmed });
  if (trimmed.length < 120) unsupported.push(trimmed);
  return nodes;
}

function unescapeQsp(s: string): string {
  return s.replace(/''/g, "'");
}

function truncate(s: string, max: number): string {
  return s.length > max ? s.slice(0, max) + '...' : s;
}
