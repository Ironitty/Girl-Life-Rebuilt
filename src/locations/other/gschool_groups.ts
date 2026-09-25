// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterTeachers(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><table cellspacing="3">');
  (s as any).i = 1;
  do {
    if (((s as any).npc_grupTipe ?? 0)['A' + (((s as any).i ?? 0))] === 6  &&  ((s as any).schoolenable ?? 0)['A' + (((s as any).i ?? 0))] === 1) {
      (s as any).temp_teach_text = ((s as any).temp_teach_text ?? 0) + ('<td><table bgcolor=' + (((s as any).theme ?? 0)?.['table_bg_alt']) + '><tr><td align="center"><a href="#" onclick="window.__gameStore.setState((s) => { s.numnpc = ' + ((s as any).i ?? 0) + '; return s; }); window.__gameStore.getState().doGoto(\u0027Snpc\u0027, \u0027\u0027); return false;"><img height="100" src="images/characters/shared/headshots_main/' + ((s as any).i ?? 0) + '.jpg"></a></td></tr><tr><td align="center">' + (((s as any).npc_usedname ?? 0)?.['A' + String(((s as any).i ?? 0))]) + '</td></tr></table></td>');
      (s as any).temp_teach_count = ((s as any).temp_teach_count ?? 0) + (1);
      if (((s as any).temp_teach_count ?? 0) === 6) {
        (s as any).temp_teach_text = ((s as any).temp_teach_text ?? 0) + ('</tr><tr>');
        (s as any).temp_teach_count = 0;
      }
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    s.scene = { ...s.scene, mainText: String((s as any).temp_teach_text || ''), curActs: [] };
    scene.text('</table></center>');
    (s as any).i = undefined;
    (s as any).temp_teach_text = undefined;
    (s as any).temp_teach_count = undefined;
  } while (((s as any).i ?? 0) <= ((s as any).aarraynumber ?? 0));
  scene.build();
}

function enterNerds(s: GameState, scene: SceneBuilder): void {
  (s as any).nerd_text = '';
  (s as any).nerd_count = 0;
  scene.text('<center><table cellspacing="3">');
  (s as any).i = 1;
  do {
    if (((s as any).npc_grupTipe ?? 0)['A' + (((s as any).i ?? 0))] === 3  &&  ((s as any).schoolenable ?? 0)['A' + (((s as any).i ?? 0))] === 1) {
      (s as any).lcase_nerd = (String((((s as any).npc_usedname ?? 0)?.['A' + String(((s as any).i ?? 0))])).toLowerCase());
      (s as any).nerd_text = ((s as any).nerd_text ?? 0) + ('<td><table bgcolor=' + (((s as any).theme ?? 0)?.['table_bg_alt']) + '><tr><td align="center"><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027gschool_nerd_chats\u0027, String((s as any).lcase_nerd ?? \u0027\u0027)); return false;"><img height="100" src="images/characters/shared/headshots_main/' + ((s as any).i ?? 0) + '.jpg"></a></td></tr><tr><td align="center">' + (((s as any).npc_usedname ?? 0)?.['A' + String(((s as any).i ?? 0))]) + '</td></tr></table></td>');
      (s as any).nerd_count = ((s as any).nerd_count ?? 0) + (1);
      if (((s as any).nerd_count ?? 0) === 6) {
        (s as any).nerd_text = ((s as any).nerd_text ?? 0) + ('</tr><tr>');
        (s as any).nerd_count = 0;
      }
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    s.scene = { ...s.scene, mainText: String((s as any).nerd_text || ''), curActs: [] };
    scene.text('</table></center>');
    (s as any).i = undefined;
    (s as any).lcase_nerd = undefined;
    (s as any).nerd_text = undefined;
    (s as any).nerd_count = undefined;
  } while (((s as any).i ?? 0) <= ((s as any).aarraynumber ?? 0));
  scene.build();
}

function enterJocks(s: GameState, scene: SceneBuilder): void {
  (s as any).jock_text = '';
  (s as any).jock_count = 0;
  scene.text('<center><table cellspacing="3">');
  (s as any).i = 1;
  do {
    if (((s as any).npc_grupTipe ?? 0)['A' + (((s as any).i ?? 0))] === 2  &&  ((s as any).schoolenable ?? 0)['A' + (((s as any).i ?? 0))] === 1) {
      (s as any).lcase_jock = (String((((s as any).npc_usedname ?? 0)?.['A' + String(((s as any).i ?? 0))])).toLowerCase());
      (s as any).jock_text = ((s as any).jock_text ?? 0) + ('<td><table bgcolor=' + (((s as any).theme ?? 0)?.['table_bg_alt']) + '><tr><td align="center"><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027gschool_jock_chats\u0027, String((s as any).lcase_jock ?? \u0027\u0027)); return false;"><img height="100" src="images/characters/shared/headshots_main/' + ((s as any).i ?? 0) + '.jpg"></a></td></tr><tr><td align="center">' + (((s as any).npc_usedname ?? 0)?.['A' + String(((s as any).i ?? 0))]) + '</td></tr></table></td>');
      (s as any).jock_count = ((s as any).jock_count ?? 0) + (1);
      if (((s as any).jock_count ?? 0) === 6) {
        (s as any).jock_text = ((s as any).jock_text ?? 0) + ('</tr><tr>');
        (s as any).jock_count = 0;
      }
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    s.scene = { ...s.scene, mainText: String((s as any).jock_text || ''), curActs: [] };
    scene.text('</table></center>');
    (s as any).i = undefined;
    (s as any).lcase_jock = undefined;
    (s as any).jock_text = undefined;
    (s as any).jock_count = undefined;
  } while (((s as any).i ?? 0) <= ((s as any).aarraynumber ?? 0));
  scene.build();
}

function enterPopular(s: GameState, scene: SceneBuilder): void {
  (s as any).pop_text = '';
  (s as any).pop_count = 0;
  scene.text('<center><table cellspacing="3">');
  (s as any).i = 1;
  do {
    if (((s as any).npc_grupTipe ?? 0)['A' + (((s as any).i ?? 0))] === 1  &&  ((s as any).schoolenable ?? 0)['A' + (((s as any).i ?? 0))] === 1) {
      (s as any).lcase_pop = (String((((s as any).npc_usedname ?? 0)?.['A' + String(((s as any).i ?? 0))])).toLowerCase());
      (s as any).pop_text = ((s as any).pop_text ?? 0) + ('<td><table bgcolor=' + (((s as any).theme ?? 0)?.['table_bg_alt']) + '><tr><td align="center"><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027gschool_coolkid_chats\u0027, String((s as any).lcase_pop ?? \u0027\u0027)); return false;"><img height="100" src="images/characters/shared/headshots_main/' + ((s as any).i ?? 0) + '.jpg"></a></td></tr><tr><td align="center">' + (((s as any).npc_usedname ?? 0)?.['A' + String(((s as any).i ?? 0))]) + '</td></tr></table></td>');
      (s as any).pop_count = ((s as any).pop_count ?? 0) + (1);
      if (((s as any).pop_count ?? 0) === 6) {
        (s as any).pop_text = ((s as any).pop_text ?? 0) + ('</tr><tr>');
        (s as any).pop_count = 0;
      }
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    s.scene = { ...s.scene, mainText: String((s as any).pop_text || ''), curActs: [] };
    scene.text('</table></center>');
    (s as any).i = undefined;
    (s as any).lcase_pop = undefined;
    (s as any).pop_text = undefined;
    (s as any).pop_count = undefined;
  } while (((s as any).i ?? 0) <= ((s as any).aarraynumber ?? 0));
  scene.build();
}

function enterGopniks(s: GameState, scene: SceneBuilder): void {
  (s as any).gop_text = '';
  (s as any).gop_count = 0;
  scene.text('<center><table cellspacing="3">');
  (s as any).i = 1;
  do {
    if (((s as any).npc_grupTipe ?? 0)['A' + (((s as any).i ?? 0))] === 4  &&  ((s as any).schoolenable ?? 0)['A' + (((s as any).i ?? 0))] === 1) {
      (s as any).lcase_gop = (String((((s as any).npc_usedname ?? 0)?.['A' + String(((s as any).i ?? 0))])).toLowerCase());
      (s as any).gop_text = ((s as any).gop_text ?? 0) + ('<td><table bgcolor=' + (((s as any).theme ?? 0)?.['table_bg_alt']) + '><tr><td align="center"><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027gschool_gopnik_chats\u0027, String((s as any).lcase_gop ?? \u0027\u0027)); return false;"><img height="100" src="images/characters/shared/headshots_main/' + ((s as any).i ?? 0) + '.jpg"></a></td></tr><tr><td align="center">' + (((s as any).npc_usedname ?? 0)?.['A' + String(((s as any).i ?? 0))]) + '</td></tr></table>\' + \'</td>');
      (s as any).gop_count = ((s as any).gop_count ?? 0) + (1);
      if (((s as any).gop_count ?? 0) === 6) {
        (s as any).gop_text = ((s as any).gop_text ?? 0) + ('</tr><tr>');
        (s as any).gop_count = 0;
      }
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    s.scene = { ...s.scene, mainText: String((s as any).gop_text || ''), curActs: [] };
    scene.text('</table></center>');
    (s as any).i = undefined;
    (s as any).lcase_gop = undefined;
    (s as any).gop_text = undefined;
    (s as any).gop_count = undefined;
  } while (((s as any).i ?? 0) <= ((s as any).aarraynumber ?? 0));
  scene.build();
}

function enterOutcasts(s: GameState, scene: SceneBuilder): void {
  (s as any).oc_text = '';
  (s as any).oc_count = 0;
  scene.text('<center><table cellspacing="3">');
  (s as any).i = 1;
  do {
    if (((s as any).npc_grupTipe ?? 0)['A' + (((s as any).i ?? 0))] === 5  &&  ((s as any).schoolenable ?? 0)['A' + (((s as any).i ?? 0))] === 1) {
      (s as any).lcase_oc = (String((((s as any).npc_usedname ?? 0)?.['A' + String(((s as any).i ?? 0))])).toLowerCase());
      (s as any).oc_text = ((s as any).oc_text ?? 0) + ('<td><table bgcolor=' + (((s as any).theme ?? 0)?.['table_bg_alt']) + '><tr><td align="center"><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027gschool_outcast_chats\u0027, String((s as any).lcase_oc ?? \u0027\u0027)); return false;"><img height="100" src="images/characters/shared/headshots_main/' + ((s as any).i ?? 0) + '.jpg"></a></td></tr><tr><td align="center">' + (((s as any).npc_usedname ?? 0)?.['A' + String(((s as any).i ?? 0))]) + '</td></tr></table>\' + \'</td>');
      (s as any).oc_count = ((s as any).oc_count ?? 0) + (1);
      if (((s as any).oc_count ?? 0) === 6) {
        (s as any).oc_text = ((s as any).oc_text ?? 0) + ('</tr><tr>');
        (s as any).oc_count = 0;
      }
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    s.scene = { ...s.scene, mainText: String((s as any).oc_text || ''), curActs: [] };
    scene.text('</table></center>');
    (s as any).i = undefined;
    (s as any).lcase_oc = undefined;
    (s as any).oc_text = undefined;
    (s as any).oc_count = undefined;
  } while (((s as any).i ?? 0) <= ((s as any).aarraynumber ?? 0));
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'teachers':
      enterTeachers(s, scene);
      break;
    case 'nerds':
      enterNerds(s, scene);
      break;
    case 'jocks':
      enterJocks(s, scene);
      break;
    case 'popular':
      enterPopular(s, scene);
      break;
    case 'gopniks':
      enterGopniks(s, scene);
      break;
    case 'outcasts':
      enterOutcasts(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gschool_groups: LocationDef = {
  name: 'gschool_groups',
  title: '<center><table cellspacing="3">',
  region: 'other',
  enter: enter,
};
