import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enter_Dynamic__(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'spellList', '');
  if (((s as any).spellBookVar ?? 0)?.['Type'] === 'learn') {
    ((s as any).spellBookVar = (s as any).spellBookVar ?? {})['TableText'] = '\n<center>\n<table CELLPADDING = \'5\'>\n<tr>\n<th align=\'left\'>Spell</th>\n<th align=\'left\'>Progress</th>\n</tr>';
    ((s as any).spellBookVar = (s as any).spellBookVar ?? {})['RowCode'] = qspUntranslated(s, "{", { location: "spellBook" });
    if (((s as any).spellLearn ?? 0)?.[String((s as any).ThisSpellName ?? 0)] > 0  &&  ((s as any).spellKnown ?? 0)?.[String((s as any).ThisSpellName ?? 0)] !== 1) {
      (s as any).result = '\n<tr>\n<td align=\'left\'>' + (((s as any).spellName ?? 0)?.[String((s as any).ThisSpellName ?? 0)] ?? 0) + '</td>\n<td align=\'right\'>' + (((s as any).spellLearn ?? 0)?.[String((s as any).ThisSpellName ?? 0)] ?? 0) + '%</td>\n</tr>';
      ((s as any).spellBookVar = (s as any).spellBookVar ?? {})['Counter'] = ((s as any).spellBookVar['Counter'] ?? 0) + (1);
    } else {
      (s as any).result = '';
    }
  } else {
    if (((s as any).spellBookVar ?? 0)?.['Type'] === 'cast') {
      ((s as any).spellBookVar = (s as any).spellBookVar ?? {})['TableText'] = '\n<center>\n<table CELLPADDING = \'5\'>\n<tr>\n<th align=\'left\'>Spell</th>\n<th align=\'left\'>Mana</th>\n<th align=\'left\'>Description</th>\n</tr>';
      ((s as any).spellBookVar = (s as any).spellBookVar ?? {})['RowCode'] = qspUntranslated(s, "{", { location: "spellBook" });
      if (((s as any).spellKnown ?? 0)?.[String((s as any).ThisSpellName ?? 0)] === 1) {
        if (((s as any).spellOptDesc ?? 0)?.[String((s as any).ThisSpellName ?? 0)] === '') {
          // TODO-QSP: ! If the spell has no Options, we jsut list it out for casting
          (s as any).tmpHTMLCode = '\n<tr>\n<td align=\'left\'><a href="EXEC: gs \'castSpell\', \'' + ((s as any).ThisSpellName ?? 0) + '\'& ' + (((s as any).spellBookVar ?? 0)?.['CodeAfterSpell']) + '">' + (((s as any).spellName ?? 0)?.[String((s as any).ThisSpellName ?? 0)] ?? 0) + '</a></td>\n<td align=\'right\'>' + (((s as any).spellMana ?? 0)?.[String((s as any).ThisSpellName ?? 0)] ?? 0) + '</td>\n<td align=\'left\'>' + (((s as any).spellDesc ?? 0)?.[String((s as any).ThisSpellName ?? 0)] ?? 0) + '</td>\n</tr>';
        } else {
          // TODO-QSP: ! If the spell does have options, we make a row for spell info, and loop through additional rows
          // TODO-QSP: !  with options for the user to pick
          (s as any).tmpHTMLCode = '\n<tr>\n<td align=\'left\'>' + (((s as any).spellName ?? 0)?.[String((s as any).ThisSpellName ?? 0)] ?? 0) + '</td>\n<td align=\'right\'>' + (((s as any).spellMana ?? 0)?.[String((s as any).ThisSpellName ?? 0)] ?? 0) + '</td>\n<td align=\'left\'>' + (((s as any).spellDesc ?? 0)?.[String((s as any).ThisSpellName ?? 0)] ?? 0) + '</td>\n</tr>';
          (s as any).n = 0;
          while (true) {
            if (((s as any).n ?? 0) < Object.keys((s as any)['' + (((s as any).spellOptDesc ?? 0)?.[String((s as any).ThisSpellName ?? 0)] ?? 0) + ''] ?? {}).length) {
              ((s as any).spellBookVar = (s as any).spellBookVar ?? {})['tmpVal'] = 0;
              ((s as any).spellBookVar = (s as any).spellBookVar ?? {})['tmpName'] = 0;
              (s as any).tmpHTMLCode = ((s as any).tmpHTMLCode ?? 0) + ('\n<tr>\n<td align=\'left\'></td>\n<td align=\'left\'><a href="EXEC: gs \'castSpell\', \'' + ((s as any).ThisSpellName ?? 0) + '\', \'' + (((s as any).spellBookVar ?? 0)?.['tmpVal']) + '\' & ' + (((s as any).spellBookVar ?? 0)?.['CodeAfterSpell']) + '">' + (((s as any).spellBookVar ?? 0)?.['tmpName']) + '</a></td>\n<td align=\'left\'></td>\n</tr>');
              (s as any).n = ((s as any).n ?? 0) + (1);
              break;
            }
          }
        }
        (s as any).result = ((s as any).tmpHTMLCode ?? 0);
        ((s as any).spellBookVar = (s as any).spellBookVar ?? {})['Counter'] = ((s as any).spellBookVar['Counter'] ?? 0) + (1);
        (s as any).tmpHTMLCode = undefined;
        (s as any).n = undefined;
      } else {
        (s as any).result = '';
      }
    } else {
      if (((s as any).spellBookVar ?? 0)?.['Type'] === 'targetable') {
        ((s as any).spellBookVar = (s as any).spellBookVar ?? {})['TableText'] = '\n<center>\n<table CELLPADDING = \'5\'>\n<tr>\n<th align=\'left\'>Spell</th>\n<th align=\'left\'>Mana</th>\n<th align=\'left\'>Targets</th>\n<th align=\'left\'>Description</th>\n</tr>';
        ((s as any).spellBookVar = (s as any).spellBookVar ?? {})['RowCode'] = qspUntranslated(s, "{", { location: "spellBook" });
        if (((s as any).spellKnown ?? 0)?.[String((s as any).ThisSpellName ?? 0)] === 1) {
          (s as any).tmpHTMLCode = '\n<tr>\n<td align=\'left\'>' + (((s as any).spellName ?? 0)?.[String((s as any).ThisSpellName ?? 0)] ?? 0) + '</td>\n<td align=\'right\'>' + (((s as any).spellMana ?? 0)?.[String((s as any).ThisSpellName ?? 0)] ?? 0) + '</td>\n<td align=\'center\'>';
          if (((s as any).spellTarget ?? 0)?.[String((s as any).ThisSpellName ?? 0)] === 'self') {
            (s as any).tmpHTMLCode = ((s as any).tmpHTMLCode ?? 0) + ('\n<a href="EXEC: *clr & gs \'castSpell\', \'' + ((s as any).ThisSpellName ?? 0) + '\', \'pcs\', 0, 0 & ' + (((s as any).spellBookVar ?? 0)?.['CodeAfterSpell']) + '">You</a>');
          } else {
            if (((s as any).spellTarget ?? 0)?.[String((s as any).ThisSpellName ?? 0)] === 'team') {
              (s as any).n = 0;
              while (true) {
                if (((s as any).n ?? 0) < Object.keys((s as any).pcs_health ?? {}).length) {
                  ((s as any).spellBookVar = (s as any).spellBookVar ?? {})['tmpName'] = 0;
                  (s as any).tmpHTMLCode = ((s as any).tmpHTMLCode ?? 0) + ('\n<a href="EXEC: *clr & gs \'castSpell\', \'' + ((s as any).ThisSpellName ?? 0) + '\', \'pcs\', ' + ((s as any).n ?? 0) + ', 0 & ' + (((s as any).spellBookVar ?? 0)?.['CodeAfterSpell']) + '">' + (((s as any).spellBookVar ?? 0)?.['tmpName']) + '</a>\n<br>');
                  (s as any).n = ((s as any).n ?? 0) + (1);
                  break;
                }
              }
            } else {
              (s as any).n = 0;
              while (true) {
                if (((s as any).n ?? 0) < Object.keys((s as any).opp_health ?? {}).length) {
                  ((s as any).spellBookVar = (s as any).spellBookVar ?? {})['tmpName'] = 0;
                  (s as any).tmpHTMLCode = ((s as any).tmpHTMLCode ?? 0) + ('\n<a href="EXEC: *clr & gs \'castSpell\', \'' + ((s as any).ThisSpellName ?? 0) + '\', \'opp\', ' + ((s as any).n ?? 0) + ', 0 & ' + (((s as any).spellBookVar ?? 0)?.['CodeAfterSpell']) + '">' + (((s as any).spellBookVar ?? 0)?.['tmpName']) + '</a>\n<br>');
                  (s as any).n = ((s as any).n ?? 0) + (1);
                  break;
                }
              }
            }
          }
          (s as any).tmpHTMLCode = ((s as any).tmpHTMLCode ?? 0) + (' </td>\n<td align=\'left\'>' + (((s as any).spellDesc ?? 0)?.[String((s as any).ThisSpellName ?? 0)] ?? 0) + '</td>\n</tr>');
          (s as any).result = ((s as any).tmpHTMLCode ?? 0);
          ((s as any).spellBookVar = (s as any).spellBookVar ?? {})['Counter'] = ((s as any).spellBookVar['Counter'] ?? 0) + (1);
          (s as any).tmpHTMLCode = undefined;
          (s as any).n = undefined;
        } else {
          (s as any).result = '';
        }
      } else {
        ((s as any).spellBookVar = (s as any).spellBookVar ?? {})['TableText'] = '\n<center>\n<table CELLPADDING = \'5\'>\n<tr>\n<th align=\'left\'>Spell</th>\n<th align=\'left\'>Mana</th>\n<th align=\'left\'>Description</th>\n</tr>';
        ((s as any).spellBookVar = (s as any).spellBookVar ?? {})['RowCode'] = qspUntranslated(s, "{", { location: "spellBook" });
        if (((s as any).spellKnown ?? 0)?.[String((s as any).ThisSpellName ?? 0)] === 1) {
          if (((s as any).spellOptDesc ?? 0)?.[String((s as any).ThisSpellName ?? 0)] === '') {
            // TODO-QSP: ! If the spell has no Options, we jsut list it out for casting
            (s as any).tmpHTMLCode = '\n<tr>\n<td align=\'left\'>' + (((s as any).spellName ?? 0)?.[String((s as any).ThisSpellName ?? 0)] ?? 0) + '</td>\n<td align=\'right\'>' + (((s as any).spellMana ?? 0)?.[String((s as any).ThisSpellName ?? 0)] ?? 0) + '</td>\n<td align=\'left\'>' + (((s as any).spellDesc ?? 0)?.[String((s as any).ThisSpellName ?? 0)] ?? 0) + '</td>\n</tr>';
          } else {
            // TODO-QSP: ! If the spell does have options, we make a row for spell info, and loop through additional rows
            // TODO-QSP: !  with options for the user to pick
            (s as any).tmpHTMLCode = '\n<tr>\n<td align=\'left\'>' + (((s as any).spellName ?? 0)?.[String((s as any).ThisSpellName ?? 0)] ?? 0) + '</td>\n<td align=\'right\'>' + (((s as any).spellMana ?? 0)?.[String((s as any).ThisSpellName ?? 0)] ?? 0) + '</td>\n<td align=\'left\'>' + (((s as any).spellDesc ?? 0)?.[String((s as any).ThisSpellName ?? 0)] ?? 0) + '</td>\n</tr>';
            (s as any).n = 0;
            while (true) {
              if (((s as any).n ?? 0) < Object.keys((s as any)['' + (((s as any).spellOptDesc ?? 0)?.[String((s as any).ThisSpellName ?? 0)] ?? 0) + ''] ?? {}).length) {
                ((s as any).spellBookVar = (s as any).spellBookVar ?? {})['tmpVal'] = 0;
                ((s as any).spellBookVar = (s as any).spellBookVar ?? {})['tmpName'] = 0;
                (s as any).tmpHTMLCode = ((s as any).tmpHTMLCode ?? 0) + ('\n<tr>\n<td align=\'left\'></td>\n<td align=\'left\'>' + (((s as any).spellBookVar ?? 0)?.['tmpName']) + '</td>\n<td align=\'left\'></td>\n</tr>');
                (s as any).n = ((s as any).n ?? 0) + (1);
                break;
              }
            }
          }
          (s as any).result = ((s as any).tmpHTMLCode ?? 0);
          ((s as any).spellBookVar = (s as any).spellBookVar ?? {})['Counter'] = ((s as any).spellBookVar['Counter'] ?? 0) + (1);
          (s as any).tmpHTMLCode = undefined;
          (s as any).n = undefined;
        } else {
          (s as any).result = '';
        }
      }
    }
  }
  (s as any).i = 0;
  ((s as any).spellBookVar = (s as any).spellBookVar ?? {})['ArraySize'] = 0;
  ((s as any).spellBookVar = (s as any).spellBookVar ?? {})['Counter'] = 0;
  while (true) {
    (s as any).ThisSpellName = 0;
    if (((s as any).i ?? 0) < ((s as any).spellBookVar ?? 0)?.['ArraySize']) {
      ((s as any).spellBookVar = (s as any).spellBookVar ?? {})['TableText'] = ((s as any).spellBookVar['TableText'] ?? 0) + (0);
      (s as any).i = ((s as any).i ?? 0) + (1);
      break;
    }
    ((s as any).spellBookVar = (s as any).spellBookVar ?? {})['TableText'] = ((s as any).spellBookVar['TableText'] ?? 0) + ('\n</table>\n</center>');
    if (((s as any).spellBookVar ?? 0)?.['Counter'] === 0) {
      ((s as any).spellBookVar = (s as any).spellBookVar ?? {})['TableText'] = '<center>You have no spells in this list.</center>';
    }
    (s as any).result = qspFunc(s, 'cleanHTML', (((s as any).spellBookVar ?? 0)?.['TableText']));
    (s as any).i = undefined;
    (s as any).ThisSpellName = undefined;
    (s as any).spellBookVar = undefined;
    (s as any).spellBookVar = undefined;
  }
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
  const arg = s.locArg;
  switch (arg) {
    case '__dynamic__':
      enter_Dynamic__(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const spellBook: LocationDef = {
  name: 'spellBook',
  region: 'other',
  enter: enter,
};
