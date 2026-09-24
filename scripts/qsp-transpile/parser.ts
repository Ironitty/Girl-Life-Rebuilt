import type { QspLocation, QspNode, QspScene, QspIf, QspAct, QspText, QspImage, QspTitle, QspAssign, QspGoto, QspGsCall, QspTime, QspSetup, QspExit, QspComment, QspUnknown } from './ast';

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
function splitAssignStmtSep(value: string): { first: string; secondVar: string; secondOp: string; secondValue: string } | null {
  const m = value.match(/^(.*?)\s*&\s*(\$?[a-zA-Z_]\w*(?:\['[^']*'\]|\[\w+\])?)\s*(\+=|-=|=)\s*(.+)$/);
  if (m) {
    return { first: m[1].trim(), secondVar: m[2], secondOp: m[3], secondValue: m[4].trim() };
  }
  return null;
}

// Emit assign nodes for an assignment whose value may contain multiple "&" statement separators.
function assignNodes(varName: string, op: string, value: string): QspAssign[] {
  const result: QspAssign[] = [];
  const sep = splitAssignStmtSep(value);
  if (sep) {
    result.push({ kind: 'assign', var: varName, op: op as '=' | '+=' | '-=', value: sep.first });
    result.push(...assignNodes(sep.secondVar, sep.secondOp, sep.secondValue));
  } else {
    result.push({ kind: 'assign', var: varName, op: op as '=' | '+=' | '-=', value: value });
  }
  return result;
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
      if (!trimmed.endsWith('!}')) inBlockComment = true;
      if (inBody) bodyLines.push(line);
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

      if (stopAtEnd && (trimmed === 'end' || trimmed === 'end ')) {
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
    const actBlockMatch = trimmed.match(/^act\s+'((?:[^']|'')*)'\s*:\s*$/i);
    if (actBlockMatch) {
      const label = unescapeQsp(actBlockMatch[1]);
      const inner = parseBlock(lines, i + 1, unsupported);
      const act: QspAct = { kind: 'act', label, body: inner.nodes };
      nodes.push(act);
      i = inner.endIdx;
      continue;
    }

    // Act with dynamic label: act 'Label' + $func('mod', 'func'): rest
    const actDynMatch = trimmed.match(/^act\s+'((?:[^']|'')*)'\s*\+\s*(.+?)\s*:\s*(.*)$/i);
    if (actDynMatch) {
      const label = unescapeQsp(actDynMatch[1]);
      const dynPart = actDynMatch[2].trim();
      const rest = actDynMatch[3].trim();
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

    // Act inline: act 'label': gt 'target', 'arg'
    const actInlineMatch = trimmed.match(/^act\s+'((?:[^']|'')*)'\s*:\s*(.+)$/i);
    if (actInlineMatch) {
      const label = unescapeQsp(actInlineMatch[1]);
      const rest = actInlineMatch[2].trim();
      const act: QspAct = { kind: 'act', label, body: [] };

      const gtDynTargetMatch = rest.match(/^gt\s+'([^']+)'\s*\+\s*(\$\w+)\s*(?:,\s*'([^']*)')?\s*(?:,\s*('[^']*'|\w+))?$/);
      if (gtDynTargetMatch) {
        act.inlineGoto = { target: gtDynTargetMatch[2], arg: gtDynTargetMatch[3] || '', arg2: gtDynTargetMatch[4] };
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
      const stmts = splitTopLevelAmp(stmtStr);
      const thenBody: QspNode[] = [];
      for (const stmt of stmts) {
        const parsed = parseInlineStatement(stmt, unsupported);
        thenBody.push(...parsed);
      }
      nodes.push({ kind: 'if', condition, thenBody, elseBody: [] });
      i++;
      continue;
      }
    }

    // Text line: 'text'
    if (trimmed.startsWith("'") && trimmed.endsWith("'")) {
      // Check if this is a complex expression with + concatenation at top level
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

    // Time: minut += N
    const timeMatch = trimmed.match(/^minut\s*\+=\s*(\d+)$/);
    if (timeMatch) {
      nodes.push({ kind: 'time', delta: parseInt(timeMatch[1], 10) });
      i++;
      continue;
    }

    // Assignment: var = value, var += value, var -= value
    const assignMatch = trimmed.match(/^(\w+)\s*(\+=|-=|=)\s*(.+)$/);
    if (assignMatch && !trimmed.startsWith('$')) {
      for (const n of assignNodes(assignMatch[1], assignMatch[2], assignMatch[3].trim())) nodes.push(n);
      i++;
      continue;
    }

    // Dollar assignment (metadata): $var = value
    const dollarMatch = trimmed.match(/^\$(\w+)\s*=\s*(.+)$/);
    if (dollarMatch) {
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
              if (qc % 2 === 0) break;
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

    // Comment: !! text
    if (trimmed.startsWith('!!')) {
      nodes.push({ kind: 'comment', text: trimmed.slice(2).trim() });
      i++;
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
      trimmed.startsWith('msg ')
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
    const arrAssignMatch = trimmed.match(/^(\w+)\['([^']+)'\]\s*(\+=|-=|=)\s*(.+)$/);
    if (arrAssignMatch) {
      for (const n of assignNodes(`${arrAssignMatch[1]}['${arrAssignMatch[2]}']`, arrAssignMatch[3], arrAssignMatch[4].trim())) nodes.push(n);
      i++;
      continue;
    }

    // Array-like assignment: Word[key] = val (unquoted key)
    const arrAssignMatch2 = trimmed.match(/^(\w+)\[(\w+)\]\s*(\+=|-=|=)\s*(.+)$/);
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

    // else (leaked through)
    if (trimmed === 'else' || trimmed === 'else ') {
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

    // Dollar array assignment: $Word['key'] = val
    const dollarArrMatch = trimmed.match(/^\$(\w+)\['([^']+)'\]\s*(\+=|-=|=)\s*(.+)$/);
    if (dollarArrMatch) {
      nodes.push({ kind: 'assign', var: `$${dollarArrMatch[1]}['${dollarArrMatch[2]}']`, op: dollarArrMatch[3] as '=' | '+=' | '-=', value: dollarArrMatch[4].trim() });
      i++;
      continue;
    }

    // Array assignment with variable key: Word[$var] = val or Word[var] = val
    const arrVarKeyMatch = trimmed.match(/^(\w+)\[(\$?\w+)\]\s*(\+=|-=|=)\s*(.+)$/);
    if (arrVarKeyMatch) {
      nodes.push({ kind: 'assign', var: `${arrVarKeyMatch[1]}[${arrVarKeyMatch[2]}]`, op: arrVarKeyMatch[3] as '=' | '+=' | '-=', value: arrVarKeyMatch[4].trim() });
      i++;
      continue;
    }

    // *p print statement
    const pMatch = trimmed.match(/^\*p\s+'((?:[^']|'')*)'$/);
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

  while (i < lines.length) {
    const trimmed = lines[i].trim();
    if (!trimmed) { i++; continue; }

    if (trimmed === 'end' || trimmed === 'end ') {
      return { nodes, endIdx: i + 1, elseFound: false };
    }

    if (trimmed === 'else' || trimmed === 'else ') {
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
    const stmtRe = /^(?:[\w$]+\[?\w*\]?\s*(?:\+=|-=|=)\s*|jump\s+|gt\s+|gs\s+|\*p\s+|\*s\s+|killvar\s+|dynamic\s+)/;
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
  const actBlockMatch = trimmed.match(/^act\s+'((?:[^']|'')*)'\s*:\s*$/i) || trimmed.match(/^act\s+"(.*)"\s*:\s*$/i);
  if (actBlockMatch) {
    const rawLabel = actBlockMatch[1];
    const label = unescapeQsp(rawLabel.replace(/""/g, '"'));
    const inner = parseBlock(lines, idx + 1, unsupported);
    nodes.push({ kind: 'act', label, body: inner.nodes });
    return { nodes, nextIdx: inner.endIdx };
  }

  // Act with dynamic label
  const actDynMatch = trimmed.match(/^act\s+'((?:[^']|'')*)'\s*\+\s*(.+?)\s*:\s*(.*)$/i);
  if (actDynMatch) {
    const label = unescapeQsp(actDynMatch[1]);
    const dynPart = actDynMatch[2].trim();
    const rest = actDynMatch[3].trim();
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
            const gtVarArgMatch = rest.match(/^gt\s+'([^']+)'\s*,\s*(\$\w+\['[^']*'\]|\$\w+|\w+)\s*$/);
            if (gtVarArgMatch) {
              act.inlineGoto = { target: gtVarArgMatch[1], arg: gtVarArgMatch[2].replace(/^\$/, ''), arg2: undefined };
            } else {
              act.inlineStatements = rest;
            }
          }
        }
      }
      nodes.push(act);
      return { nodes, nextIdx: idx + 1 };
    }
    const inner = parseBlock(lines, idx + 1, unsupported);
    act.body = inner.nodes;
    return { nodes: [act], nextIdx: inner.endIdx };
  }

  // Act inline
  const actInlineMatch = trimmed.match(/^act\s+'((?:[^']|'')*)'\s*:\s*(.+)$/i);
  if (actInlineMatch) {
    const label = unescapeQsp(actInlineMatch[1]);
    const rest = actInlineMatch[2].trim();
    const act: QspAct = { kind: 'act', label, body: [] };
      const gtDynTargetMatch = rest.match(/^gt\s+'([^']+)'\s*\+\s*(\$\w+)\s*(?:,\s*'([^']*)')?\s*(?:,\s*('[^']*'|\w+))?$/);
      if (gtDynTargetMatch) {
        act.inlineGoto = { target: gtDynTargetMatch[2], arg: gtDynTargetMatch[3] || '', arg2: gtDynTargetMatch[4] };
      } else {
        const gtArithMatch = rest.match(/^gt\s+'([^']+)'\s*,\s*'([^']*)'\s*,\s*([\d+\-*/()\s\w.,]+)$/);
        if (gtArithMatch) {
          act.inlineGoto = { target: gtArithMatch[1], arg: gtArithMatch[2], arg2: gtArithMatch[3].trim() };
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
      const stmts = splitTopLevelAmp(stmtStr);
      const thenBody: QspNode[] = [];
      for (const stmt of stmts) {
        const parsed = parseInlineStatement(stmt, unsupported);
        thenBody.push(...parsed);
      }
      nodes.push({ kind: 'if', condition, thenBody, elseBody: [] });
      return { nodes, nextIdx: idx + 1 + consumedLines };
    }
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
  const timeMatch = trimmed.match(/^minut\s*\+=\s*(\d+)$/);
  if (timeMatch) {
    nodes.push({ kind: 'time', delta: parseInt(timeMatch[1], 10) });
    return { nodes, nextIdx: idx + 1 };
  }

  // Assignment
  const assignMatch = trimmed.match(/^(\w+)\s*(\+=|-=|=)\s*(.+)$/);
  if (assignMatch && !trimmed.startsWith('$')) {
    for (const n of assignNodes(assignMatch[1], assignMatch[2], assignMatch[3].trim())) nodes.push(n);
    return { nodes, nextIdx: idx + 1 };
  }

  // Dollar assignment
  const dollarMatch = trimmed.match(/^\$(\w+)\s*=\s*(.+)$/);
  if (dollarMatch) {
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
            if (qc % 2 === 0) break;
            next++;
          }
          idx = next - 1;
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
    trimmed.startsWith('msg ')
  ) {
    nodes.push({ kind: 'setup', raw: trimmed });
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
  const arrAssignMatch = trimmed.match(/^(\w+)\['([^']+)'\]\s*(\+=|-=|=)\s*(.+)$/);
  if (arrAssignMatch) {
    for (const n of assignNodes(`${arrAssignMatch[1]}['${arrAssignMatch[2]}']`, arrAssignMatch[3], arrAssignMatch[4].trim())) nodes.push(n);
    return { nodes, nextIdx: idx + 1 };
  }

  // Array-like assignment: Word[key] = val
  const arrAssignMatch2 = trimmed.match(/^(\w+)\[(\w+)\]\s*(\+=|-=|=)\s*(.+)$/);
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

  // else (leaked)
  if (trimmed === 'else' || trimmed === 'else ') {
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
  const pMatch = trimmed.match(/^\*p\s+'((?:[^']|'')*)'$/);
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

  // Dollar array assignment: $Word['key'] = val
  const dollarArrMatch = trimmed.match(/^\$(\w+)\['([^']+)'\]\s*(\+=|-=|=)\s*(.+)$/);
  if (dollarArrMatch) {
    nodes.push({ kind: 'assign', var: `$${dollarArrMatch[1]}['${dollarArrMatch[2]}']`, op: dollarArrMatch[3] as '=' | '+=' | '-=', value: dollarArrMatch[4].trim() });
    return { nodes, nextIdx: idx + 1 };
  }

  // Array assignment with variable key: Word[$var] = val or Word[var] = val
  const arrVarKeyMatch = trimmed.match(/^(\w+)\[(\$?\w+)\]\s*(\+=|-=|=)\s*(.+)$/);
  if (arrVarKeyMatch) {
    nodes.push({ kind: 'assign', var: `${arrVarKeyMatch[1]}[${arrVarKeyMatch[2]}]`, op: arrVarKeyMatch[3] as '=' | '+=' | '-=', value: arrVarKeyMatch[4].trim() });
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
    if (parts.length > 1 && parts.every(p => /^[\w$]+\[?\w*\]?\s*(\+=|-=|=)\s*/.test(p))) {
      for (const part of parts) {
        nodes.push(...parseInlineStatement(part, unsupported));
      }
      return nodes;
    }
  }

  if (trimmed.startsWith('PLAY ') || trimmed.startsWith('play ') || trimmed.startsWith('cla') || trimmed.startsWith('cls') || trimmed.startsWith('clr') || trimmed.startsWith('*clr') || trimmed.startsWith('*nl')) {
    nodes.push({ kind: 'setup', raw: trimmed });
    return nodes;
  }

  const actInlineMatch = trimmed.match(/^act\s+'((?:[^']|'')*)'\s*:\s*(.+)$/i);
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

  const assignMatch = trimmed.match(/^(\w+)\s*(\+=|-=|=)\s*(.+)$/);
  if (assignMatch) {
    for (const n of assignNodes(assignMatch[1], assignMatch[2], assignMatch[3].trim())) nodes.push(n);
    return nodes;
  }

  const arrAssignMatch = trimmed.match(/^(\w+)\['([^']+)'\]\s*(\+=|-=|=)\s*(.+)$/);
  if (arrAssignMatch) {
    for (const n of assignNodes(`${arrAssignMatch[1]}['${arrAssignMatch[2]}']`, arrAssignMatch[3], arrAssignMatch[4].trim())) nodes.push(n);
    return nodes;
  }

  const arrAssignMatch2 = trimmed.match(/^(\w+)\[(\$?\w+)\]\s*(\+=|-=|=)\s*(.+)$/);
  if (arrAssignMatch2) {
    for (const n of assignNodes(`${arrAssignMatch2[1]}[${arrAssignMatch2[2]}]`, arrAssignMatch2[3], arrAssignMatch2[4].trim())) nodes.push(n);
    return nodes;
  }

  const dollarArrMatch = trimmed.match(/^\$(\w+)\['([^']+)'\]\s*(\+=|-=|=)\s*(.+)$/);
  if (dollarArrMatch) {
    for (const n of assignNodes(`$${dollarArrMatch[1]}['${dollarArrMatch[2]}']`, dollarArrMatch[3], dollarArrMatch[4].trim())) nodes.push(n);
    return nodes;
  }

  const dollarArrMatch2 = trimmed.match(/^\$(\w+)\[(\$?\w+)\]\s*(\+=|-=|=)\s*(.+)$/);
  if (dollarArrMatch2) {
    nodes.push({ kind: 'assign', var: `$${dollarArrMatch2[1]}[${dollarArrMatch2[2]}]`, op: dollarArrMatch2[3] as '=' | '+=' | '-=', value: dollarArrMatch2[4].trim() });
    return nodes;
  }

  const dollarAssignMatch = trimmed.match(/^\$(\w+)\s*=\s*([\s\S]+)$/);
  if (dollarAssignMatch) {
    nodes.push({ kind: 'setup', raw: trimmed });
    return nodes;
  }

  const timeMatch = trimmed.match(/^minut\s*\+=\s*(\d+)$/);
  if (timeMatch) {
    nodes.push({ kind: 'time', delta: parseInt(timeMatch[1], 10) });
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

  if (trimmed.startsWith('*p')) {
    const pRest = trimmed.slice(2).trim();
    if (pRest) {
      nodes.push({ kind: 'text', content: pRest, dynamic: true });
      return nodes;
    }
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
