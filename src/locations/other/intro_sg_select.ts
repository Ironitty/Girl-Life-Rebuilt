import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_creation', 'start');
  scene.build();
}

function enterSGStart2(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_creation', 'start2');
  scene.build();
}

function enterSGStart3(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_creation', 'start3');
  scene.build();
}

function enterPavStart(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_creation', 'pav_start');
  scene.build();
}

function enterPavParentsStart(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_creation', 'pav_parents_start');
  scene.build();
}

function enterPushStart(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_creation', 'push_start');
  scene.build();
}

function enterPavSharingStart(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_creation', 'pav_sharing_start');
  scene.build();
}

function enterGadStart(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_creation', 'gad_start');
  scene.build();
}

function enterCharselect(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_creation', 'charselect');
  scene.build();
}

function enterCharselectNerd(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_creation', 'charselect_nerd');
  scene.build();
}

function enterRandomStart(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_creation', 'random_start');
  scene.build();
}

function enterNerdinfo(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_creation', 'nerdinfo');
  scene.build();
}

function enterJockinfo(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_creation', 'jockinfo');
  scene.build();
}

function enterPopularinfo(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_creation', 'popularinfo');
  scene.build();
}

function enterGopnikinfo(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_creation', 'gopnikinfo');
  scene.build();
}

function enterOutcastinfo(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_creation', 'outcastinfo');
  scene.build();
}

function enterNerd(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_creation', 'nerd');
  scene.build();
}

function enterNerdqueen(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_creation', 'nerdqueen');
  scene.build();
}

function enterJock(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_creation', 'jock');
  scene.build();
}

function enterVolleyball(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_creation', 'volleyball');
  scene.build();
}

function enterCool(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_creation', 'cool');
  scene.build();
}

function enterSocialite(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_creation', 'socialite');
  scene.build();
}

function enterGopnik(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_creation', 'gopnik');
  scene.build();
}

function enterGopnikstart(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_creation', 'gopnikstart');
  scene.build();
}

function enterOutcast(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_creation', 'outcast');
  scene.build();
}

function enterFriendless(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_creation', 'friendless');
  scene.build();
}

function enterSgSettings(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'intro_initialization', '', qspUntranslated(s, "'sg_settings'  & exit", { location: "intro_sg_select" }));
  scene.build();
}

function enterSetExitActs(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'intro_character_creation', 'set_exit_acts', 0);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'SGStart2':
      enterSGStart2(s, scene);
      break;
    case 'SGStart3':
      enterSGStart3(s, scene);
      break;
    case 'pav_start':
      enterPavStart(s, scene);
      break;
    case 'pav_parents_start':
      enterPavParentsStart(s, scene);
      break;
    case 'push_start':
      enterPushStart(s, scene);
      break;
    case 'pav_sharing_start':
      enterPavSharingStart(s, scene);
      break;
    case 'gad_start':
      enterGadStart(s, scene);
      break;
    case 'charselect':
      enterCharselect(s, scene);
      break;
    case 'charselect_nerd':
      enterCharselectNerd(s, scene);
      break;
    case 'random_start':
      enterRandomStart(s, scene);
      break;
    case 'nerdinfo':
      enterNerdinfo(s, scene);
      break;
    case 'jockinfo':
      enterJockinfo(s, scene);
      break;
    case 'popularinfo':
      enterPopularinfo(s, scene);
      break;
    case 'gopnikinfo':
      enterGopnikinfo(s, scene);
      break;
    case 'outcastinfo':
      enterOutcastinfo(s, scene);
      break;
    case 'nerd':
      enterNerd(s, scene);
      break;
    case 'nerdqueen':
      enterNerdqueen(s, scene);
      break;
    case 'jock':
      enterJock(s, scene);
      break;
    case 'volleyball':
      enterVolleyball(s, scene);
      break;
    case 'cool':
      enterCool(s, scene);
      break;
    case 'socialite':
      enterSocialite(s, scene);
      break;
    case 'gopnik':
      enterGopnik(s, scene);
      break;
    case 'gopnikstart':
      enterGopnikstart(s, scene);
      break;
    case 'outcast':
      enterOutcast(s, scene);
      break;
    case 'friendless':
      enterFriendless(s, scene);
      break;
    case 'sg_settings':
      enterSgSettings(s, scene);
      break;
    case 'set_exit_acts':
      enterSetExitActs(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const intro_sg_select: LocationDef = {
  name: 'intro_sg_select',
  region: 'other',
  enter: enter,
};
