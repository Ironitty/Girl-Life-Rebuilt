import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function generateSpellRow(s: GameState): string {
  const st = s as any;
  const type = st.spellBookVar?.['Type'];
  const spellName = String(st.ThisSpellName ?? '');

  if (type === 'learn') {
    if ((st.spellLearn ?? {})[spellName] > 0 && (st.spellKnown ?? {})[spellName] !== 1) {
      st.spellBookVar['Counter'] = (st.spellBookVar['Counter'] ?? 0) + 1;
      return '\n<tr>\n<td align=\'left\'>' + (st.spellName ?? {})[spellName] + '</td>\n<td align=\'right\'>' + (st.spellLearn ?? {})[spellName] + '%</td>\n</tr>';
    }
    return '';
  }

  if (type === 'cast') {
    if ((st.spellKnown ?? {})[spellName] === 1) {
      if ((st.spellOptDesc ?? {})[spellName] === '') {
        st.spellBookVar['Counter'] = (st.spellBookVar['Counter'] ?? 0) + 1;
        return '\n<tr>\n<td align=\'left\'><a href="EXEC: gs \'castSpell\', \'' + spellName + '\'& ' + st.spellBookVar['CodeAfterSpell'] + '">' + (st.spellName ?? {})[spellName] + '</a></td>\n<td align=\'right\'>' + (st.spellMana ?? {})[spellName] + '</td>\n<td align=\'left\'>' + (st.spellDesc ?? {})[spellName] + '</td>\n</tr>';
      } else {
        let tmpHTMLCode = '\n<tr>\n<td align=\'left\'>' + (st.spellName ?? {})[spellName] + '</td>\n<td align=\'right\'>' + (st.spellMana ?? {})[spellName] + '</td>\n<td align=\'left\'>' + (st.spellDesc ?? {})[spellName] + '</td>\n</tr>';
        const optDesc = String((st.spellOptDesc ?? {})[spellName] ?? '');
        const optArr = st[optDesc] ?? {};
        const optSize = Array.isArray(optArr) ? optArr.length : Object.keys(optArr).length;
        for (let n = 0; n < optSize; n++) {
          st.spellBookVar['tmpVal'] = (st.spellOptVal ?? {})[spellName]?.[n] ?? 0;
          st.spellBookVar['tmpName'] = (st.spellOptDesc ?? {})[spellName]?.[n] ?? 0;
          tmpHTMLCode += '\n<tr>\n<td align=\'left\'></td>\n<td align=\'left\'><a href="EXEC: gs \'castSpell\', \'' + spellName + '\', \'' + st.spellBookVar['tmpVal'] + '\' & ' + st.spellBookVar['CodeAfterSpell'] + '">' + st.spellBookVar['tmpName'] + '</a></td>\n<td align=\'left\'></td>\n</tr>';
        }
        st.spellBookVar['Counter'] = (st.spellBookVar['Counter'] ?? 0) + 1;
        return tmpHTMLCode;
      }
    }
    return '';
  }

  if (type === 'targetable') {
    if ((st.spellKnown ?? {})[spellName] === 1) {
      let tmpHTMLCode = '\n<tr>\n<td align=\'left\'>' + (st.spellName ?? {})[spellName] + '</td>\n<td align=\'right\'>' + (st.spellMana ?? {})[spellName] + '</td>\n<td align=\'center\'>';
      if ((st.spellTarget ?? {})[spellName] === 'self') {
        tmpHTMLCode += '\n<a href="EXEC: *clr & gs \'castSpell\', \'' + spellName + '\', \'pcs\', 0, 0 & ' + st.spellBookVar['CodeAfterSpell'] + '">You</a>';
      } else if ((st.spellTarget ?? {})[spellName] === 'team') {
        const pcsHealth = st.pcs_health ?? {};
        const pcsSize = Array.isArray(pcsHealth) ? pcsHealth.length : Object.keys(pcsHealth).length;
        for (let n = 0; n < pcsSize; n++) {
          st.spellBookVar['tmpName'] = (st.pcs_name ?? {})[n] ?? '';
          tmpHTMLCode += '\n<a href="EXEC: *clr & gs \'castSpell\', \'' + spellName + '\', \'pcs\', ' + n + ', 0 & ' + st.spellBookVar['CodeAfterSpell'] + '">' + st.spellBookVar['tmpName'] + '</a>\n<br>';
        }
      } else {
        const oppHealth = st.opp_health ?? {};
        const oppSize = Array.isArray(oppHealth) ? oppHealth.length : Object.keys(oppHealth).length;
        for (let n = 0; n < oppSize; n++) {
          st.spellBookVar['tmpName'] = (st.opp_name ?? {})[n] ?? '';
          tmpHTMLCode += '\n<a href="EXEC: *clr & gs \'castSpell\', \'' + spellName + '\', \'opp\', ' + n + ', 0 & ' + st.spellBookVar['CodeAfterSpell'] + '">' + st.spellBookVar['tmpName'] + '</a>\n<br>';
        }
      }
      tmpHTMLCode += ' </td>\n<td align=\'left\'>' + (st.spellDesc ?? {})[spellName] + '</td>\n</tr>';
      st.spellBookVar['Counter'] = (st.spellBookVar['Counter'] ?? 0) + 1;
      return tmpHTMLCode;
    }
    return '';
  }

  // Default type
  if ((st.spellKnown ?? {})[spellName] === 1) {
    if ((st.spellOptDesc ?? {})[spellName] === '') {
      st.spellBookVar['Counter'] = (st.spellBookVar['Counter'] ?? 0) + 1;
      return '\n<tr>\n<td align=\'left\'>' + (st.spellName ?? {})[spellName] + '</td>\n<td align=\'right\'>' + (st.spellMana ?? {})[spellName] + '</td>\n<td align=\'left\'>' + (st.spellDesc ?? {})[spellName] + '</td>\n</tr>';
    } else {
      let tmpHTMLCode = '\n<tr>\n<td align=\'left\'>' + (st.spellName ?? {})[spellName] + '</td>\n<td align=\'right\'>' + (st.spellMana ?? {})[spellName] + '</td>\n<td align=\'left\'>' + (st.spellDesc ?? {})[spellName] + '</td>\n</tr>';
      const optDesc = String((st.spellOptDesc ?? {})[spellName] ?? '');
      const optArr = st[optDesc] ?? {};
      const optSize = Array.isArray(optArr) ? optArr.length : Object.keys(optArr).length;
      for (let n = 0; n < optSize; n++) {
        st.spellBookVar['tmpVal'] = (st.spellOptVal ?? {})[spellName]?.[n] ?? 0;
        st.spellBookVar['tmpName'] = (st.spellOptDesc ?? {})[spellName]?.[n] ?? 0;
        tmpHTMLCode += '\n<tr>\n<td align=\'left\'></td>\n<td align=\'left\'>' + st.spellBookVar['tmpName'] + '</td>\n<td align=\'left\'></td>\n</tr>';
      }
      st.spellBookVar['Counter'] = (st.spellBookVar['Counter'] ?? 0) + 1;
      return tmpHTMLCode;
    }
  }
  return '';
}

function enter_Dynamic__(s: GameState, scene: SceneBuilder): void {
  const st = s as any;
  qspCall(s, 'spellList', '');

  if (st.spellBookVar?.['Type'] === 'learn') {
    st.spellBookVar['TableText'] = '\n<center>\n<table CELLPADDING = \'5\'>\n<tr>\n<th align=\'left\'>Spell</th>\n<th align=\'left\'>Progress</th>\n</tr>';
  } else if (st.spellBookVar?.['Type'] === 'cast') {
    st.spellBookVar['TableText'] = '\n<center>\n<table CELLPADDING = \'5\'>\n<tr>\n<th align=\'left\'>Spell</th>\n<th align=\'left\'>Mana</th>\n<th align=\'left\'>Description</th>\n</tr>';
  } else if (st.spellBookVar?.['Type'] === 'targetable') {
    st.spellBookVar['TableText'] = '\n<center>\n<table CELLPADDING = \'5\'>\n<tr>\n<th align=\'left\'>Spell</th>\n<th align=\'left\'>Mana</th>\n<th align=\'left\'>Targets</th>\n<th align=\'left\'>Description</th>\n</tr>';
  } else {
    st.spellBookVar['TableText'] = '\n<center>\n<table CELLPADDING = \'5\'>\n<tr>\n<th align=\'left\'>Spell</th>\n<th align=\'left\'>Mana</th>\n<th align=\'left\'>Description</th>\n</tr>';
  }

  const spellArrName = st.spellBookVar['Array'] ?? '';
  const spellArr = st[spellArrName] ?? [];
  const spellArrSize = Array.isArray(spellArr) ? spellArr.length : Object.keys(spellArr).length;
  st.spellBookVar['ArraySize'] = spellArrSize;
  st.spellBookVar['Counter'] = 0;

  for (let i = 0; i < spellArrSize; i++) {
    st.ThisSpellName = spellArr[i];
    const row = generateSpellRow(s);
    st.spellBookVar['TableText'] += row;
  }

  st.spellBookVar['TableText'] += '\n</table>\n</center>';
  if (st.spellBookVar['Counter'] === 0) {
    st.spellBookVar['TableText'] = '<center>You have no spells in this list.</center>';
  }
  st.result = qspFunc(s, 'cleanHTML', st.spellBookVar['TableText']);
  st.spellBookVar = undefined;
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  ((s as any).spellBookVar = (s as any).spellBookVar ?? {})['Type'] = ((s as any).locArgs?.[0] ?? 0);
  ((s as any).spellBookVar = (s as any).spellBookVar ?? {})['Array'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).spellBookVar = (s as any).spellBookVar ?? {})['ActionCode'] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).spellBookVar = (s as any).spellBookVar ?? {})['CodeAfterSpell'] = ((s as any).locArgs?.[3] ?? 0);
  if (((s as any).spellBookVar ?? 0)?.['ActionCode'] === '') {
    ((s as any).spellBookVar = (s as any).spellBookVar ?? {})['ActionCode'] = 'gt $loc, $loc_arg';
  }
  if (((s as any).spellBookVar ?? 0)?.['CodeAfterSpell'] === '') {
    ((s as any).spellBookVar = (s as any).spellBookVar ?? {})['CodeAfterSpell'] = 'gt $loc, $loc_arg';
  }
  enter_Dynamic__(s, scene);
}

export const spellBook: LocationDef = {
  name: 'spellBook',
  region: 'other',
  enter: enter,
};
