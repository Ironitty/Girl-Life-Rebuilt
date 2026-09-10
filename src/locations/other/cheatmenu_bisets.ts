import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'obj_din', 'cheattabs', 'Image Sets');
  scene.text('<center><h1>Cheat Menu - Body Image Sets</h1></center>');
  // TODO-QSP: $cheatmenu['table_start']
  scene.text('<center><b>Body Image Controls</b></center>');
  if (((s as any).cheatVars ?? 0)?.['fix_bodyimg'] === 1) {
    if (((s as any).cheatVars ?? 0)?.['fix_bi_set'] < 10) {
      // TODO-QSP: $temp_text += $cheatVars['fix_biset_<<cheatVars[''fix_bi_set'']>>_folder']
    } else {
      // TODO-QSP: $temp_text += 'default '
      if (((s as any).cheatVars ?? 0)?.['fix_bi_set'] % 10 === 0) {
        // TODO-QSP: $temp_text += 'low '
      } else {
        // TODO-QSP: $temp_text += 'mid '
        if (((s as any).cheatVars ?? 0)?.['fix_bi_set'] % 10 === 2) {
          // TODO-QSP: $temp_text += 'high '
        }
        if (((s as any).cheatVars ?? 0)?.['fix_bi_set'] / 10 === 19) {
          // TODO-QSP: $temp_text += 'strength'
        } else {
          // TODO-QSP: $temp_text += func('body_structure', 'body_desc_from_class', (cheatVars['fix_bi_set'] / 10 mod 10) *...
        }
      }
      // TODO-QSP: dynamic text: <<$temp_text>>
      scene.text(`${((s as any).temp_text ?? 0)}`);
      scene.text('You are currently not using a fixed set.');
    }
    scene.text('These are the default body image sets:');
    // TODO-QSP: func('cheatmenu_bisets', 'get_default_bi_table')
    scene.text('<center><b>Custom Image Sets</b></center>');
    (s as any).temp_cm_bi_flag = 0;
    qspCall(s, 'cheatmenu_bisets', 'custom_folder_display', 0);
    qspCall(s, 'cheatmenu_bisets', 'custom_folder_display', 1);
    qspCall(s, 'cheatmenu_bisets', 'custom_folder_display', 2);
    qspCall(s, 'cheatmenu_bisets', 'custom_folder_display', 3);
    qspCall(s, 'cheatmenu_bisets', 'custom_folder_display', 4);
    qspCall(s, 'cheatmenu_bisets', 'custom_folder_display', 5);
    qspCall(s, 'cheatmenu_bisets', 'custom_folder_display', 6);
    qspCall(s, 'cheatmenu_bisets', 'custom_folder_display', 7);
    qspCall(s, 'cheatmenu_bisets', 'custom_folder_display', 8);
    qspCall(s, 'cheatmenu_bisets', 'custom_folder_display', 9);
    if (((s as any).temp_cm_bi_flag ?? 0) < 10) {
      scene.text('<a href="exec: gs \'cheatmenu_bisets\', \'add_set\'"><b>Add new set</b></a>');
      scene.text('<a href="exec: gs \'cheatmenu_bisets\', \'import_set\'"><b>Import new set</b></a>');
    }
    // TODO-QSP: $cheatmenu['table_end']
    scene.actions([
      { label: 'How to: mod edition', handler: (st: GameState) => {
    qspCall(st, 'cheatmenu_bisets', 'mods_how_to');
  } },
    ]);
  }
  scene.build();
}

export const cheatmenu_bisets: LocationDef = {
  name: 'cheatmenu_bisets',
  title: '<center><h1>Cheat Menu - Body Image Sets</h1></center>',
  region: 'other',
  description: ['These are the default body image sets:'],
  enter: enter,
};
