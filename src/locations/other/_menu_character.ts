import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterMenuExit(s: GameState, scene: SceneBuilder): void {
  (s as any).settingmode = 0;
  scene.build();
}

function enterCharactertabs(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $tabsname[0] = 'Character'
  // TODO-QSP: $tabsaction[0] = "menu_page = 0 & gt '$menu_character', 'description'"
  // TODO-QSP: $tabsname[1] = 'Skills'
  // TODO-QSP: $tabsaction[1] = "menu_page = 1 & gt '$menu_character', 'skills'"
  // TODO-QSP: $tabsname[2] = 'Statistics'
  // TODO-QSP: $tabsaction[2] = "menu_page = 2 & gt '$menu_character', 'stats'"
  // TODO-QSP: $tabsname[3] = 'Pain'
  // TODO-QSP: $tabsaction[3] = "menu_page = 3 & gt '$menu_character', 'pain'"
  // TODO-QSP: $tabsname[4] = 'Archetypes'
  // TODO-QSP: $tabsaction[4] = "menu_page = 4 & gt '$menu_character', 'archetypes'"
  // TODO-QSP: $tabsname[5] = 'Traits'
  // TODO-QSP: $tabsaction[5] = "menu_page = 5 & gt '$menu_character', 'traits'"
  // TODO-QSP: $tabsname[6] = 'Renown'
  // TODO-QSP: $tabsaction[6] = "menu_page = 6 & gt '$menu_character', 'reputation'"
  if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic') {
    // TODO-QSP: $tabsname[7] = 'Magic'
    // TODO-QSP: $tabsaction[7] = "menu_page = 7 & gt '$menu_character', 'magic'"
  }
  if (((s as any).locArgs?.[1] ?? 0) !== '') {
    (s as any).temp_menu_page = qspUntranslated(s, "arrpos('tabsname', ARGS[1])", { location: "_menu_character" });
    if (((s as any).temp_menu_page ?? 0) >= 0) {
      (s as any).menu_page = ((s as any).temp_menu_page ?? 0);
    }
  }
  qspCall(s, 'tabhead', '', ((s as any).menu_page ?? 0));
  scene.actions([
    { label: 'Exit the menu', handler: (st: GameState) => {
    qspCall(st, '$menu_character', 'menu_exit');
    dynamicGoto(st, 'menu_loc', 'menu_arg');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'menu_exit':
      enterMenuExit(s, scene);
      break;
    case 'charactertabs':
      enterCharactertabs(s, scene);
      break;
    default:
      enterMenuExit(s, scene);
      break;
  }
}

export const _menu_character: LocationDef = {
  name: '_menu_character',
  title: 'You are showing signs of malnourishment. You should probably eat more and more often.',
  region: 'other',
  enter: enter,
};
