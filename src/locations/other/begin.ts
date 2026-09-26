import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterWarning(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b><font color = white>WARNING</font></b></center>');
  scene.img('images/system/1_openings/warning.jpg');
  scene.actions([
    { label: '<b>Continue</b>', goto: ['begin', 'start'] },
    { label: '<b>Quick Start</b>', goto: ['begin', 'quick_start'] },
    { label: 'Return to start', goto: ['start', ''] },
  ]);
  scene.build();
}

function enterCheckimg(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === String((s as any).locArgs?.[3] ?? '')  &&  String((s as any).locArgs?.[2] ?? '') === String((s as any).locArgs?.[4] ?? '')) {
    (s as any).result = '<td><center><img src="images/system/icons/check.png" height="50"></center></td>';
  } else {
    (s as any).result = '<td><center><a href="#" onclick="window.__gameStore.setState((s) => { (s.start_type ??= {})\u0027loc\u0027 = \u0027' + ((s as any).locArgs?.[3] ?? 0) + '\u0027; (s.start_type ??= {})\u0027magic\u0027 = \u0027' + ((s as any).locArgs?.[4] ?? 0) + '\u0027; return s; }); window.__gameStore.getState().doGoto(\u0027begin\u0027, \u0027start\u0027); return false;"><img src="images/system/icons/uncheck.png" height="50"></a></center></td>';
  }
  return;
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'begin', 'start');
  (s as any).settingmode = undefined;
  qspCall(s, 'cheatmenu_din', '');
  scene.text('<center><b>CHOOSE GAME START</b></center>');
  scene.text('<center>There are three main start types:');
  scene.text('Last year of school (before or after summer holidays);');
  scene.text('First year of university;');
  scene.text('In the city post graduation from school.');
  scene.text('For each start type there are 3 options:');
  scene.text('Standard;');
  scene.text('Magical (Your character will gain magic abilities and learn about a secret magical world);');
  scene.text('M2F (As per magic but your character will magically be turned into a girl in the intro).</center>');
  scene.text('<center><table><th width="100"><p align="center">Start Type</p></th><th width="80"><p align="center">Standard</p></th><th width="80"><p align="center">Magical</p></th><th width="80"><p align="center">M2F</p></th>');
  (s as any).start_text = '<tr><td><p align="center">School</p></td>';
  (s as any).start_text = ((s as any).start_text ?? 0) + (qspFunc(s, 'begin', 'checkimg', (((s as any).start_type ?? 0)?.['loc']), (((s as any).start_type ?? 0)?.['magic']), 'sg', 'nomagic'));
  (s as any).start_text = ((s as any).start_text ?? 0) + (qspFunc(s, 'begin', 'checkimg', (((s as any).start_type ?? 0)?.['loc']), (((s as any).start_type ?? 0)?.['magic']), 'sg', 'magic'));
  (s as any).start_text = ((s as any).start_text ?? 0) + (qspFunc(s, 'begin', 'checkimg', (((s as any).start_type ?? 0)?.['loc']), (((s as any).start_type ?? 0)?.['magic']), 'sg', 'tg'));
  (s as any).start_text = ((s as any).start_text ?? 0) + ('<tr><td><p align="center">University</p></td>');
  (s as any).start_text = ((s as any).start_text ?? 0) + (qspFunc(s, 'begin', 'checkimg', (((s as any).start_type ?? 0)?.['loc']), (((s as any).start_type ?? 0)?.['magic']), 'uni', 'nomagic'));
  (s as any).start_text = ((s as any).start_text ?? 0) + (qspFunc(s, 'begin', 'checkimg', (((s as any).start_type ?? 0)?.['loc']), (((s as any).start_type ?? 0)?.['magic']), 'uni', 'magic'));
  (s as any).start_text = ((s as any).start_text ?? 0) + (qspFunc(s, 'begin', 'checkimg', (((s as any).start_type ?? 0)?.['loc']), (((s as any).start_type ?? 0)?.['magic']), 'uni', 'tg'));
  (s as any).start_text = ((s as any).start_text ?? 0) + ('<tr><td><p align="center">City</p></td>');
  (s as any).start_text = ((s as any).start_text ?? 0) + (qspFunc(s, 'begin', 'checkimg', (((s as any).start_type ?? 0)?.['loc']), (((s as any).start_type ?? 0)?.['magic']), 'city', 'nomagic'));
  (s as any).start_text = ((s as any).start_text ?? 0) + (qspFunc(s, 'begin', 'checkimg', (((s as any).start_type ?? 0)?.['loc']), (((s as any).start_type ?? 0)?.['magic']), 'city', 'magic'));
  (s as any).start_text = ((s as any).start_text ?? 0) + (qspFunc(s, 'begin', 'checkimg', (((s as any).start_type ?? 0)?.['loc']), (((s as any).start_type ?? 0)?.['magic']), 'city', 'tg'));
  s.scene = { ...s.scene, mainText: String((s as any).start_text || ''), curActs: [] };
  (s as any).start_text = undefined;
  scene.text('</table></center>');
  if (((s as any).start_type ?? 0)?.['loc'] !== ''  &&  ((s as any).start_type ?? 0)?.['magic'] !== '') {
    scene.actions([
      { label: '<b>Start</b>', goto: ['begin', 'real_character'] },
      { label: '<b>Quick Start</b>', goto: ['intro_start', 'quick_start'] },
    ]);
  }
  scene.actions([
    { label: 'Change theme', handler: (st: GameState) => {
    (st as any).themes_menu_ret_loc = 'begin';
    (st as any).themes_menu_ret_arg = 'start';
    qspGoto(st, 'themes', 'menu');
  } },
    { label: 'Change game settings', handler: (st: GameState) => {
    (st as any).settingmode = 1;
    qspCall(st, '$menu_settings', '');
  } },
    { label: 'Manage mods', handler: (st: GameState) => {
    (st as any).settingmode = 1;
  }, goto: ['$menu_settings', 'mods'] },
  ]);
  scene.build();
}

function enterQuickStart(s: GameState, scene: SceneBuilder): void {
  ((s as any).start_type = (s as any).start_type ?? {})['loc'] = qspFunc(s, 'begin', 'get_random', 'loc');
  ((s as any).start_type = (s as any).start_type ?? {})['magic'] = qspFunc(s, 'begin', 'get_random', 'magic');
  qspGoto(s, 'intro_start', 'quick_start');
  scene.build();
}

function enterGetRandom(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'loc') {
    (s as any).temp_rand = (Math.floor(Math.random() * 3) + 0);
    if ((!((s as any).temp_rand ?? 0))) {
      (s as any).result = 'sg';
    } else {
      if (((s as any).temp_rand ?? 0) === 1) {
        (s as any).result = 'uni';
      } else {
        (s as any).result = 'city';
      }
    }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'magic') {
      (s as any).temp_rand = (Math.floor(Math.random() * 3) + 0);
      if ((!((s as any).temp_rand ?? 0))) {
        (s as any).result = 'nomagic';
      } else {
        if (((s as any).temp_rand ?? 0) === 1) {
          (s as any).result = 'magic';
        } else {
          (s as any).result = 'tg';
        }
      }
    }
  }
  (s as any).temp_rand = undefined;
  return;
  scene.build();
}

function enterRealCharacter(s: GameState, scene: SceneBuilder): void {
  (s as any).BACKIMAGE = '';
  scene.text('<center><b>CHARACTER SELECTION</b></center>');
  scene.img('images/system/1_openings/shared/character_creation_1.jpg');
  scene.text('This game has three ways to display your character\'s face:');
  scene.text('1. Dynamically using real images. The result will depend on your hair style and colour or a fixed image of your choice.');
  scene.text('2. To use a fixed image. You can set the path to the image or replace the image "avatar" in the "images" folder of the game with a file of the same name and format (.jpg) and select "Use a fixed image".');
  scene.text('3. Dynamically using generated images. The result will depend on your hair style and colour, eye colour, glasses, makeup, and visible cum');
  scene.text('Please note, this choice can be changed in the cheat menu at any time. Only one fixed image can be used at a time and will be the same across all saves.');
  scene.text('Your fixed image is your own personal choice, and is based on your personal preferences. By default, the game uses an avatar image from the site wikimedia.org.');
  scene.text('If you are playing on Android, click ');
  if (((s as any).stat_cfg ?? 0)?.['android'] === 1) {
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { (s.stat_cfg ??= {})\u0027android\u0027 = 0; return s; }); window.__gameStore.getState().doGoto(\u0027begin\u0027, \u0027real_character\u0027); return false;">Here</a> (Current: <b>Yes</b>)');
  } else {
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { (s.stat_cfg ??= {})\u0027android\u0027 = 1; return s; }); window.__gameStore.getState().doGoto(\u0027begin\u0027, \u0027real_character\u0027); return false;">Here</a> (Current: <b>No</b>)');
  }
  scene.text('</center>');
  scene.actions([
    { label: '<b>Use the dynamic profile system</b>', handler: (st: GameState) => {
    ((st as any).face_style = (st as any).face_style ?? {})['type'] = 0;
    qspGoto(st, 'intro_start', 'start');
  } },
    { label: '<b>Use a fixed profile image</b>', handler: (st: GameState) => {
    ((st as any).face_style = (st as any).face_style ?? {})['type'] = 1;
    qspGoto(st, 'begin', 'use_avatar_menu');
  } },
    { label: '<b>Use the rendered profile system</b>', handler: (st: GameState) => {
    ((st as any).face_style = (st as any).face_style ?? {})['type'] = 2;
    qspGoto(st, 'intro_start', 'start');
  } },
  ]);
  scene.build();
}

function enterUseAvatarMenu(s: GameState, scene: SceneBuilder): void {
  ((s as any).face_style = (s as any).face_style ?? {})['avatar_path'] = window.prompt("Where is the avatar image located? (Leave blank for \"images/avatar.jpg\")") ?? '';
  if (((s as any).face_style ?? 0)?.['avatar_path'] === '') {
    ((s as any).face_style = (s as any).face_style ?? {})['avatar_path'] = 'images/avatar.jpg';
  }
  scene.text(`You have selected: ${(((s as any).face_style ?? 0)?.['avatar_path'] ?? '')}. Is this correct?`);
  scene.actions([
    { label: 'Yes', goto: ['intro_start', 'start'] },
    { label: 'Try again', goto: ['begin', 'use_avatar_menu'] },
    { label: 'Use a different image type', goto: ['begin', 'real_character'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'warning':
      enterWarning(s, scene);
      break;
    case 'checkimg':
      enterCheckimg(s, scene);
      break;
    case 'start':
      enterStart(s, scene);
      break;
    case 'quick_start':
      enterQuickStart(s, scene);
      break;
    case 'get_random':
      enterGetRandom(s, scene);
      break;
    case 'real_character':
      enterRealCharacter(s, scene);
      break;
    case 'use_avatar_menu':
      enterUseAvatarMenu(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const begin: LocationDef = {
  name: 'begin',
  title: 'CHOOSE GAME START',
  region: 'other',
  enter: enter,
};
