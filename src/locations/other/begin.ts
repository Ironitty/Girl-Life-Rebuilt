import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

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
  if (((s as any).locArgs?.[1] ?? 0) === ((s as any).locArgs?.[3] ?? 0)  &&  ((s as any).locArgs?.[2] ?? 0) === ((s as any).locArgs?.[4] ?? 0)) {
  }
  return;
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'begin', 'start');
  qspCall(s, 'cheatmenu_din', '');
  // TODO-QSP: showstat 1
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
  // TODO-QSP: $start_text += $func('begin', 'checkimg', $start_type['loc'], $start_type['magic'], 'sg', 'nomagic')
  // TODO-QSP: $start_text += $func('begin', 'checkimg', $start_type['loc'], $start_type['magic'], 'sg', 'magic')
  // TODO-QSP: $start_text += $func('begin', 'checkimg', $start_type['loc'], $start_type['magic'], 'sg', 'tg')
  // TODO-QSP: $start_text += '<tr><td><p align="center">University</p></td>'
  // TODO-QSP: $start_text += $func('begin', 'checkimg', $start_type['loc'], $start_type['magic'], 'uni', 'nomagic'...
  // TODO-QSP: $start_text += $func('begin', 'checkimg', $start_type['loc'], $start_type['magic'], 'uni', 'magic')
  // TODO-QSP: $start_text += $func('begin', 'checkimg', $start_type['loc'], $start_type['magic'], 'uni', 'tg')
  // TODO-QSP: $start_text += '<tr><td><p align="center">City</p></td>'
  // TODO-QSP: $start_text += $func('begin', 'checkimg', $start_type['loc'], $start_type['magic'], 'city', 'nomagic...
  // TODO-QSP: $start_text += $func('begin', 'checkimg', $start_type['loc'], $start_type['magic'], 'city', 'magic')
  // TODO-QSP: $start_text += $func('begin', 'checkimg', $start_type['loc'], $start_type['magic'], 'city', 'tg')
  // TODO-QSP: $start_text
  scene.text('</table></center>');
  if (((s as any).start_type ?? 0)?.['loc'] !== ''  &&  ((s as any).start_type ?? 0)?.['magic'] !== '') {
    scene.actions([
      { label: '<b>Start</b>', goto: ['begin', 'real_character'] },
      { label: '<b>Quick Start</b>', goto: ['intro_start', 'quick_start'] },
    ]);
  }
  scene.actions([
    { label: 'Change theme', goto: ['themes', 'menu'] },
    { label: 'Change game settings', handler: (st: GameState) => {
    (st as any).settingmode = 1;
    // TODO-QSP: gs '$menu_settings'
  } },
    { label: 'Manage mods', handler: (st: GameState) => {
    (st as any).settingmode = 1;
  }, goto: ['$menu_settings', 'mods'] },
  ]);
  scene.build();
}

function enterQuickStart(s: GameState, scene: SceneBuilder): void {
  (s as any).start_type['loc'] = qspFunc(s, 'begin', 'get_random', 'loc');
  (s as any).start_type['magic'] = qspFunc(s, 'begin', 'get_random', 'magic');
  scene.actions([{ label: 'Continue', goto: ['intro_start', 'quick_start'] }]);
  scene.build();
}

function enterGetRandom(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'loc') {
    (s as any).temp_rand = Math.floor(Math.random() * 3) + 0;
    if (((s as any).temp_rand ?? 0) === 0) {
    }
  } else {
    (s as any).temp_rand = Math.floor(Math.random() * 3) + 0;
    if (((s as any).temp_rand ?? 0) === 0) {
    }
  }
  return;
  scene.build();
}

function enterRealCharacter(s: GameState, scene: SceneBuilder): void {
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
    // TODO-QSP: *P '<a href="exec:stat_cfg[''android''] = 0 & gt ''begin'',''real_character''">Here</a> (Current: <b...
  } else {
    // TODO-QSP: *P '<a href="exec:stat_cfg[''android''] = 1 & gt ''begin'',''real_character''">Here</a> (Current: <b...
  }
  scene.text('</center>');
  scene.actions([
    { label: '<b>Use the dynamic profile system</b>', handler: (st: GameState) => {
    (s as any).face_style['type'] = 0;
  }, goto: ['intro_start', 'start'] },
    { label: '<b>Use a fixed profile image</b>', handler: (st: GameState) => {
    (s as any).face_style['type'] = 1;
  }, goto: ['begin', 'use_avatar_menu'] },
    { label: '<b>Use the rendered profile system</b>', handler: (st: GameState) => {
    (s as any).face_style['type'] = 2;
  }, goto: ['intro_start', 'start'] },
  ]);
  scene.build();
}

function enterUseAvatarMenu(s: GameState, scene: SceneBuilder): void {
  (s as any).face_style['avatar_path'] = ((s as any).input ?? 0)('((s as any).Where ?? 0) ((s as any).is ?? 0) ((s as any).the ?? 0) ((s as any).avatar ?? 0) ((s as any).image ?? 0) ((s as any).located ?? 0)? (((s as any).Leave ?? 0) ((s as any).blank ?? 0) ((s as any).for ?? 0) "((s as any).images ?? 0)/((s as any).avatar?.jpg ?? 0)")');
  if (((s as any).face_style ?? 0)?.['avatar_path'] === '') {
    (s as any).face_style['avatar_path'] = 'images/avatar.jpg';
  }
  // TODO-QSP: dynamic text: You have selected: <<$face_style['avatar_path']>>. Is this correct?
  scene.text(`You have selected: ${((s as any).face_style ?? 0)?.['avatar_path']}. Is this correct?`);
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
      enterWarning(s, scene);
      break;
  }
}

export const begin: LocationDef = {
  name: 'begin',
  title: 'CHOOSE GAME START',
  region: 'other',
  enter: enter,
};
