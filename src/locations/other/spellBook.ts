import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

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
  // TODO-QSP: dynamic "act 'Never mind': <<$spellBookVar['ActionCode']>>"
  qspCall(s, 'spellList', '');
  if (((s as any).spellBookVar ?? 0)?.['Type'] === 'learn') {
    ((s as any).spellBookVar = (s as any).spellBookVar ?? {})['TableText'] = '';
    // TODO-QSP: <center>
    // TODO-QSP: <table CELLPADDING = '5'>
    // TODO-QSP: <tr>
    // TODO-QSP: <th align='left'>Spell</th>
    // TODO-QSP: <th align='left'>Progress</th>
    // TODO-QSP: </tr>"
    ((s as any).spellBookVar = (s as any).spellBookVar ?? {})['RowCode'] = qspUntranslated(s, "{", { location: "spellBook" });
    if (((s as any).spellLearn ?? 0)?.[String((s as any).ThisSpellName ?? 0)] > 0  &&  ((s as any).spellKnown ?? 0)?.[String((s as any).ThisSpellName ?? 0)] !== 1) {
      // TODO-QSP: </tr>"
      ((s as any).spellBookVar = (s as any).spellBookVar ?? {})['Counter'] = ((s as any).spellBookVar['Counter'] ?? 0) + (1);
    } else {
      (s as any).result = '';
    }
  } else {
    if (((s as any).spellBookVar ?? 0)?.['Type'] === 'cast') {
      ((s as any).spellBookVar = (s as any).spellBookVar ?? {})['TableText'] = '';
      // TODO-QSP: <center>
      // TODO-QSP: <table CELLPADDING = '5'>
      // TODO-QSP: <tr>
      // TODO-QSP: <th align='left'>Spell</th>
      // TODO-QSP: <th align='left'>Mana</th>
      // TODO-QSP: <th align='left'>Description</th>
      // TODO-QSP: </tr>"
      ((s as any).spellBookVar = (s as any).spellBookVar ?? {})['RowCode'] = qspUntranslated(s, "{", { location: "spellBook" });
      if (((s as any).spellKnown ?? 0)?.[String((s as any).ThisSpellName ?? 0)] === 1) {
        if (((s as any).spellOptDesc ?? 0)?.[String((s as any).ThisSpellName ?? 0)] === '') {
          // TODO-QSP: ! If the spell has no Options, we jsut list it out for casting
          // TODO-QSP: </tr>"
        } else {
          // TODO-QSP: ! If the spell does have options, we make a row for spell info, and loop through additional rows
          // TODO-QSP: !  with options for the user to pick
          // TODO-QSP: </tr>"
          (s as any).n = 0;
          // TODO-QSP: :RowCodeLoop98
          if (((s as any).n ?? 0) < Object.keys((s as any)['' + ((s as any).spellOptDesc ?? 0)?.[String((s as any).ThisSpellName ?? 0)] + ''] ?? {}).length) {
            ((s as any).spellBookVar = (s as any).spellBookVar ?? {})['tmpVal'] = 0;
            ((s as any).spellBookVar = (s as any).spellBookVar ?? {})['tmpName'] = 0;
            // TODO-QSP: $tmpHTMLCode += "
            // TODO-QSP: <tr>
            // TODO-QSP: <td align='left'></td>
            // TODO-QSP: <td align='left'><a href=""EXEC: gs 'castSpell', '<<$ThisSpellName>>', '<<$spellBookVar['tmpVal']>>'...
            // TODO-QSP: <td align='left'></td>
            // TODO-QSP: </tr>"
            (s as any).n = ((s as any).n ?? 0) + (1);
            // TODO-QSP: jump 'RowCodeLoop98'
          }
        }
        (s as any).result = ((s as any).tmpHTMLCode ?? 0);
        ((s as any).spellBookVar = (s as any).spellBookVar ?? {})['Counter'] = ((s as any).spellBookVar['Counter'] ?? 0) + (1);
      } else {
        (s as any).result = '';
      }
    } else {
      if (((s as any).spellBookVar ?? 0)?.['Type'] === 'targetable') {
        ((s as any).spellBookVar = (s as any).spellBookVar ?? {})['TableText'] = '';
        // TODO-QSP: <center>
        // TODO-QSP: <table CELLPADDING = '5'>
        // TODO-QSP: <tr>
        // TODO-QSP: <th align='left'>Spell</th>
        // TODO-QSP: <th align='left'>Mana</th>
        // TODO-QSP: <th align='left'>Targets</th>
        // TODO-QSP: <th align='left'>Description</th>
        // TODO-QSP: </tr>"
        ((s as any).spellBookVar = (s as any).spellBookVar ?? {})['RowCode'] = qspUntranslated(s, "{", { location: "spellBook" });
        if (((s as any).spellKnown ?? 0)?.[String((s as any).ThisSpellName ?? 0)] === 1) {
          // TODO-QSP: <td align='center'>"
          if (((s as any).spellTarget ?? 0)?.[String((s as any).ThisSpellName ?? 0)] === 'self') {
            // TODO-QSP: $tmpHTMLCode += "
            // TODO-QSP: <a href=""EXEC: *clr & gs 'castSpell', '<<$ThisSpellName>>', 'pcs', 0, 0 & <<$spellBookVar['CodeAfte...
          } else {
            if (((s as any).spellTarget ?? 0)?.[String((s as any).ThisSpellName ?? 0)] === 'team') {
              (s as any).n = 0;
              // TODO-QSP: :RowCodeLoop96
              if (((s as any).n ?? 0) < Object.keys((s as any).pcs_health ?? {}).length) {
                ((s as any).spellBookVar = (s as any).spellBookVar ?? {})['tmpName'] = 0;
                // TODO-QSP: $tmpHTMLCode += "
                // TODO-QSP: <a href=""EXEC: *clr & gs 'castSpell', '<<$ThisSpellName>>', 'pcs', <<n>>, 0 & <<$spellBookVar['Code...
                // TODO-QSP: <br>"
                (s as any).n = ((s as any).n ?? 0) + (1);
                // TODO-QSP: jump 'RowCodeLoop96'
              }
            } else {
              (s as any).n = 0;
              // TODO-QSP: :RowCodeLoop97
              if (((s as any).n ?? 0) < Object.keys((s as any).opp_health ?? {}).length) {
                ((s as any).spellBookVar = (s as any).spellBookVar ?? {})['tmpName'] = 0;
                // TODO-QSP: $tmpHTMLCode += "
                // TODO-QSP: <a href=""EXEC: *clr & gs 'castSpell', '<<$ThisSpellName>>', 'opp', <<n>>, 0 & <<$spellBookVar['Code...
                // TODO-QSP: <br>"
                (s as any).n = ((s as any).n ?? 0) + (1);
                // TODO-QSP: jump 'RowCodeLoop97'
              }
            }
          }
          // TODO-QSP: $tmpHTMLCode += " </td>
          // TODO-QSP: <td align='left'><<$spellDesc[$ThisSpellName]>></td>
          // TODO-QSP: </tr>"
          (s as any).result = ((s as any).tmpHTMLCode ?? 0);
          ((s as any).spellBookVar = (s as any).spellBookVar ?? {})['Counter'] = ((s as any).spellBookVar['Counter'] ?? 0) + (1);
        } else {
          (s as any).result = '';
        }
      } else {
        ((s as any).spellBookVar = (s as any).spellBookVar ?? {})['TableText'] = '';
        // TODO-QSP: <center>
        // TODO-QSP: <table CELLPADDING = '5'>
        // TODO-QSP: <tr>
        // TODO-QSP: <th align='left'>Spell</th>
        // TODO-QSP: <th align='left'>Mana</th>
        // TODO-QSP: <th align='left'>Description</th>
        // TODO-QSP: </tr>"
        ((s as any).spellBookVar = (s as any).spellBookVar ?? {})['RowCode'] = qspUntranslated(s, "{", { location: "spellBook" });
        if (((s as any).spellKnown ?? 0)?.[String((s as any).ThisSpellName ?? 0)] === 1) {
          if (((s as any).spellOptDesc ?? 0)?.[String((s as any).ThisSpellName ?? 0)] === '') {
            // TODO-QSP: ! If the spell has no Options, we jsut list it out for casting
            // TODO-QSP: </tr>"
          } else {
            // TODO-QSP: ! If the spell does have options, we make a row for spell info, and loop through additional rows
            // TODO-QSP: !  with options for the user to pick
            // TODO-QSP: </tr>"
            (s as any).n = 0;
            // TODO-QSP: :RowCodeLoop99
            if (((s as any).n ?? 0) < Object.keys((s as any)['' + ((s as any).spellOptDesc ?? 0)?.[String((s as any).ThisSpellName ?? 0)] + ''] ?? {}).length) {
              ((s as any).spellBookVar = (s as any).spellBookVar ?? {})['tmpVal'] = 0;
              ((s as any).spellBookVar = (s as any).spellBookVar ?? {})['tmpName'] = 0;
              // TODO-QSP: $tmpHTMLCode += "
              // TODO-QSP: <tr>
              // TODO-QSP: <td align='left'></td>
              // TODO-QSP: <td align='left'><<$spellBookVar['tmpName']>></td>
              // TODO-QSP: <td align='left'></td>
              // TODO-QSP: </tr>"
              (s as any).n = ((s as any).n ?? 0) + (1);
              // TODO-QSP: jump 'RowCodeLoop99'
            }
          }
          (s as any).result = ((s as any).tmpHTMLCode ?? 0);
          ((s as any).spellBookVar = (s as any).spellBookVar ?? {})['Counter'] = ((s as any).spellBookVar['Counter'] ?? 0) + (1);
        } else {
          (s as any).result = '';
        }
      }
    }
  }
  (s as any).i = 0;
  ((s as any).spellBookVar = (s as any).spellBookVar ?? {})['ArraySize'] = 0;
  ((s as any).spellBookVar = (s as any).spellBookVar ?? {})['Counter'] = 0;
  // TODO-QSP: :SpellListLoop
  (s as any).ThisSpellName = 0;
  if (((s as any).i ?? 0) < ((s as any).spellBookVar ?? 0)?.['ArraySize']) {
    ((s as any).spellBookVar = (s as any).spellBookVar ?? {})['TableText'] = ((s as any).spellBookVar['TableText'] ?? 0) + (0);
    (s as any).i = ((s as any).i ?? 0) + (1);
    // TODO-QSP: jump 'SpellListLoop'
  }
  ((s as any).spellBookVar = (s as any).spellBookVar ?? {})['TableText'] = ((s as any).spellBookVar['TableText'] ?? 0) + ('');
  // TODO-QSP: </table>
  // TODO-QSP: </center>"
  if (((s as any).spellBookVar ?? 0)?.['Counter'] === 0) {
    ((s as any).spellBookVar = (s as any).spellBookVar ?? {})['TableText'] = '<center>You have no spells in this list.</center>';
  }
  (s as any).result = qspFunc(s, 'cleanHTML', ((s as any).spellBookVar ?? 0)?.['TableText']);
  scene.build();
}

export const spellBook: LocationDef = {
  name: 'spellBook',
  region: 'other',
  enter: enter,
};
