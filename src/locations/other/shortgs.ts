import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterAutosave(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cfg_vars ?? 0)?.['disable_autosave'] === 0) {
    if (((s as any).start_type ?? 0)?.['loc'] === 'city') {
      // TODO-QSP: savegame 'autosave_city_<<$weekName[week]>>.sav'
    } else {
      // TODO-QSP: savegame 'autosave_uni_<<$weekName[week]>>.sav'
      // TODO-QSP: savegame 'autosave_sg_<<$weekName[week]>>.sav'
    }
  }
  return;
  scene.build();
}

function enterShowTable(s: GameState, scene: SceneBuilder): void {
  (s as any).tab_tmp = 0;
  if ((((s as any).st_count ?? 0) % ((s as any).tab_tmp ?? 0)) === 0) {
    // TODO-QSP: $result += "<tr>"
  }
  // TODO-QSP: $result += "<td><<$ARGS[1]>></td>"
  if ((((s as any).st_count ?? 0) % ((s as any).tab_tmp ?? 0)) + 1 === ((s as any).tab_tmp ?? 0)) {
    // TODO-QSP: $result += "</tr>"
  }
  // TODO-QSP: $show_table += $result
  (s as any).st_count = ((s as any).st_count ?? 0) + (1);
  return;
  scene.build();
}

function enterGuy(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
  }
  if (((s as any).temptask ?? 0) === 'ABCM') {
    (s as any).result = ((s as any).stat ?? 0)?.['male_sexual_partners'];
  } else {
    (s as any).result = qspFunc(s, 'npc', 'get_npc_count', 'npc_sexual', ((s as any).locArgs?.[1] ?? 0), '0');
  }
  return;
  // TODO-QSP: end & !! --- guy ---
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'autosave':
      enterAutosave(s, scene);
      break;
    case 'show_table':
      enterShowTable(s, scene);
      break;
    case 'guy':
      enterGuy(s, scene);
      break;
    default:
      enterAutosave(s, scene);
      break;
  }
}

export const shortgs: LocationDef = {
  name: 'shortgs',
  title: 'You need to get dressed before going out.',
  region: 'other',
  enter: enter,
};
