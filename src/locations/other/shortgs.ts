import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterAutosave(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cfg_vars ?? 0)?.['disable_autosave'] === 0) {
    if (((s as any).start_type ?? 0)?.['loc'] === 'city') {
      // TODO-QSP: savegame 'autosave_city_<<$weekName[week]>>.sav'
    } else {
      if (((s as any).start_type ?? 0)?.['loc'] === 'uni') {
        // TODO-QSP: savegame 'autosave_uni_<<$weekName[week]>>.sav'
      } else {
        // TODO-QSP: savegame 'autosave_sg_<<$weekName[week]>>.sav'
      }
    }
  }
  return;
  scene.build();
}

function enterShowTable(s: GameState, scene: SceneBuilder): void {
  (s as any).tab_tmp = Math.max(1, parseFloat(((s as any).locArgs?.[2] ?? 0)), ((s as any).locArgs?.[2] ?? 0));
  (s as any).result = '';
  if ((!(((s as any).st_count ?? 0) % ((s as any).tab_tmp ?? 0)))) {
    (s as any).result = ((s as any).result ?? '') + '<tr>';
  }
  (s as any).result = ((s as any).result ?? 0) + ('<td>' + ((s as any).locArgs?.[1] ?? 0) + '</td>');
  if ((((s as any).st_count ?? 0) % ((s as any).tab_tmp ?? 0)) + 1 === ((s as any).tab_tmp ?? 0)) {
    (s as any).result = ((s as any).result ?? '') + '</tr>';
  }
  (s as any).show_table = ((s as any).show_table ?? 0) + (((s as any).result ?? 0));
  (s as any).st_count = ((s as any).st_count ?? 0) + (1);
  (s as any).tab_tmp = undefined;
  return;
  scene.build();
}

function enterGuy(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    (s as any).temptask = 'ABCM';
  } else {
    (s as any).temptask = ((s as any).locArgs?.[1] ?? 0);
  }
  if (((s as any).temptask ?? 0) === 'ABCM') {
    (s as any).result = (((s as any).stat ?? 0)?.['male_sexual_partners']);
  } else {
    (s as any).result = qspFunc(s, 'npc', 'get_npc_count', 'npc_sexual', ((s as any).locArgs?.[1] ?? 0), '0');
  }
  (s as any).temptask = undefined;
  return;
  // TODO-QSP: end & !! --- guy ---
  scene.build();
}

function enterGirl(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    (s as any).temptask = 'ABCM';
  } else {
    (s as any).temptask = ((s as any).locArgs?.[1] ?? 0);
  }
  if (((s as any).temptask ?? 0) === 'ABCM') {
    (s as any).result = (((s as any).stat ?? 0)?.['female_sexual_partners']);
  } else {
    (s as any).result = qspFunc(s, 'npc', 'get_npc_count', 'npc_sexual', ((s as any).locArgs?.[1] ?? 0), '1');
  }
  (s as any).temptask = undefined;
  return;
  // TODO-QSP: end & !! --- girl ---
  scene.build();
}

function enterUndress(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'outfit', 'undress', ((s as any).locArgs?.[1] ?? 0));
  return;
  // TODO-QSP: end & !! --- undress ---
  scene.build();
}

function enterDress(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'outfit', 'dress', ((s as any).locArgs?.[1] ?? 0));
  return;
  // TODO-QSP: end & !! --- dress ---
  scene.build();
}

function enterCheckdress(s: GameState, scene: SceneBuilder): void {
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    alert(qspFunc(s, 'wrap', 'neg b', 'You need to get dressed before going out.'));
  }
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
    case 'girl':
      enterGirl(s, scene);
      break;
    case 'undress':
      enterUndress(s, scene);
      break;
    case 'dress':
      enterDress(s, scene);
      break;
    case 'checkdress':
      enterCheckdress(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const shortgs: LocationDef = {
  name: 'shortgs',
  title: 'You need to get dressed before going out.',
  region: 'other',
  enter: enter,
};
