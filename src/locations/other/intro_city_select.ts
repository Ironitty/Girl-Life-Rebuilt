import { qspGoto } from '../_shared/qspBridge';

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

function enterStart2(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_creation', 'start2');
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
  qspGoto(s, 'intro_character_creation', 'group_desc', 'nerd');
  scene.build();
}

function enterJockinfo(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_creation', 'group_desc', 'jock');
  scene.build();
}

function enterPopularinfo(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_creation', 'group_desc', 'cool');
  scene.build();
}

function enterGopnikinfo(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_creation', 'group_desc', 'gopnik');
  scene.build();
}

function enterOutcastinfo(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_creation', 'group_desc', 'outcast');
  scene.build();
}

function enterNerd(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_creation', 'group_desc', 'nerd');
  scene.build();
}

function enterNerdqueen(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'nerd', 'nerdqueen'
  scene.build();
}

function enterGoodstudent(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'nerd', 'goodstudent'
  scene.build();
}

function enterComputergeek(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'nerd', 'computergeek'
  scene.build();
}

function enterChessplayer(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'nerd', 'chessplayer'
  scene.build();
}

function enterJock(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_creation', 'group_desc', 'jock');
  scene.build();
}

function enterVolleyball(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'jock', 'volleyball'
  scene.build();
}

function enterDancer(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'jock', 'dancer'
  scene.build();
}

function enterRunner(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'jock', 'runner'
  scene.build();
}

function enterFootball(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'jock', 'football'
  scene.build();
}

function enterCool(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_creation', 'group_desc', 'cool');
  scene.build();
}

function enterSocialite(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'cool', 'socialite'
  scene.build();
}

function enterBeautiful(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'cool', 'beautiful'
  scene.build();
}

function enterAnorexic(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'cool', 'anorexic'
  scene.build();
}

function enterBimbo(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'cool', 'bimbo'
  scene.build();
}

function enterGopnik(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_creation', 'group_desc', 'gopnik');
  scene.build();
}

function enterGopnikstart(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'gopnik', 'gopnikstart'
  scene.build();
}

function enterTroublemaker(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'gopnik', 'troublemaker'
  scene.build();
}

function enterVitekgf(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'gopnik', 'vitekgf'
  scene.build();
}

function enterAlternative(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'gopnik', 'alternative'
  scene.build();
}

function enterOutcast(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'intro_character_creation', 'group_desc', 'outcast');
  scene.build();
}

function enterFriendless(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'outcast', 'friendless'
  scene.build();
}

function enterUglyduckling(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'outcast', 'uglyduckling'
  scene.build();
}

function enterGoodgirl(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'outcast', 'goodgirl'
  scene.build();
}

function enterSlut(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'outcast', 'slut'
  scene.build();
}

function enterGoth(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'outcast', 'goth'
  scene.build();
}

function enterPoor(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'outcast', 'poor'
  scene.build();
}

function enterSgSettings(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'intro_initialization', 'sg_settings'  & exit
  scene.build();
}

function enterSetExitActs(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'intro_character_creation', 'set_exit_acts', $ARGS[1]  & exit
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'start2':
      enterStart2(s, scene);
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
    case 'goodstudent':
      enterGoodstudent(s, scene);
      break;
    case 'computergeek':
      enterComputergeek(s, scene);
      break;
    case 'chessplayer':
      enterChessplayer(s, scene);
      break;
    case 'jock':
      enterJock(s, scene);
      break;
    case 'volleyball':
      enterVolleyball(s, scene);
      break;
    case 'dancer':
      enterDancer(s, scene);
      break;
    case 'runner':
      enterRunner(s, scene);
      break;
    case 'football':
      enterFootball(s, scene);
      break;
    case 'cool':
      enterCool(s, scene);
      break;
    case 'socialite':
      enterSocialite(s, scene);
      break;
    case 'beautiful':
      enterBeautiful(s, scene);
      break;
    case 'anorexic':
      enterAnorexic(s, scene);
      break;
    case 'bimbo':
      enterBimbo(s, scene);
      break;
    case 'gopnik':
      enterGopnik(s, scene);
      break;
    case 'gopnikstart':
      enterGopnikstart(s, scene);
      break;
    case 'troublemaker':
      enterTroublemaker(s, scene);
      break;
    case 'vitekgf':
      enterVitekgf(s, scene);
      break;
    case 'alternative':
      enterAlternative(s, scene);
      break;
    case 'outcast':
      enterOutcast(s, scene);
      break;
    case 'friendless':
      enterFriendless(s, scene);
      break;
    case 'uglyduckling':
      enterUglyduckling(s, scene);
      break;
    case 'goodgirl':
      enterGoodgirl(s, scene);
      break;
    case 'slut':
      enterSlut(s, scene);
      break;
    case 'goth':
      enterGoth(s, scene);
      break;
    case 'poor':
      enterPoor(s, scene);
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

export const intro_city_select: LocationDef = {
  name: 'intro_city_select',
  region: 'other',
  enter: enter,
};
