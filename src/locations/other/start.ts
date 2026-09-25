import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: killall
  (s as any).usehtml = 1;
  (s as any).debug = 1;
  // TODO-QSP: showobjs 0
  // TODO-QSP: showinput 0
  if (((s as any).qspver ?? 0) > '9.9.9') {
    // TODO-QSP: showacts 0
    scene.text('<center><font size="+3" color="red"><b>RUNTIME VERSION MISMATCH</b></font><br>');
    scene.text('The player you are using is incompatible with <b>Girl Life</b><br>');
    scene.text('Please use one of the recommended players: https://tfgames.site/index.php?module=viewgame&id=597</center>');
    return;
  }
  // TODO-QSP: showacts 1
  (s as any).disablescroll = 1;
  (s as any).ongload = 'loadg';
  (s as any).ongsave = 'saveg';
  (s as any).onnewloc = 'LOCA';
  (s as any).onobjsel = 'onobjsel';
  (s as any).counter = 'counter';
  (s as any).usercom = 'inputProcessing';
  (s as any).map_overlay_visible = 0;
  (s as any).fname = 'Tahoma';
  (s as any).fsize = 12;
  (s as any).daystart = (-1);
  (s as any).totminut = (-1);
  qspCall(s, 'saveg', '');
  qspCall(s, 'addbuilddate', '');
  qspGoto(s, 'start', 'start');
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).version = '<b>' + ((s as any).version_major ?? 0) + '.' + ((s as any).version_minor ?? 0) + '.' + ((s as any).version_revision ?? 0) + '.' + ((s as any).version_patch ?? 0) + ((((s as any).git_hash ?? 0) !== "") ? ('<br>' + ((s as any).git_hash ?? 0) + ' (dev build)') : ('')) + '</b><br>built on <b>' + ((s as any).builddate ?? 0) + '</b>';
  (s as any).opPRE = 1;
  scene.text(`<center>Version ${((s as any).version ?? '')}</center>`);
  scene.text('<center><font color="red"><b>Children under 18 years are strictly forbidden to play</b></font>');
  scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/system/1_openings/splashes/splash` + (Math.floor(Math.random() * 30) + 1) + '.jpg" ></center>');
  scene.text('<center>Based on the Russian game ЭТО by DeGross.</center>');
  scene.text('This game is about the simulated life of a woman containing elements of RPG, strategy, porn and magical combat.');
  scene.text('You may choose what kind of life the character will live according to your play style, conscience or even personal beliefs.');
  scene.text('There are many choices to make in this game, from chaste nun to slutty porn star. Will you be a saint or a sinner?');
  scene.text('All characters in this game are fictional and any similarities to any persons living or dead are purely coincidental.');
  scene.text('All explicit images are performed by consenting adults aged 18 or older. Images are for illustrative purposes only.');
  scene.text('<b><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027start\u0027, \u0027version\u0027); return false;">Change log</a> and <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027history\u0027, \u0027\u0027); return false;">Game history</a></b>');
  scene.text('<b>* Wiki hosted by Google sites available <a href="https://sites.google.com/view/girllifewiki/home">here</a> (External link) *</center></b>');
  scene.text('<center>Feel free to contribute.</center>');
  qspCall(s, 'themes', 'indoors');
  if (((s as any).sound_settings ?? 0)?.['music_off'] === 0) {
    scene.actions([
      { label: '<center>Mute music</center>', handler: (st: GameState) => {
    ((st as any).sound_settings = (st as any).sound_settings ?? {})['music_off'] = 1;
    (st as any).music_loop = 0;
    (st as any).track_loop = '';
    qspGoto(st, 'start', 'start');
  } },
    ]);
  } else {
    scene.actions([
      { label: '<center>Unmute music</center>', handler: (st: GameState) => {
    ((st as any).sound_settings = (st as any).sound_settings ?? {})['music_off'] = 0;
    (st as any).music_loop = 1;
    qspGoto(st, 'start', 'start');
  } },
    ]);
  }
  (s as any).ImageNeededPlacholder = '<center><img src="images/system/image_needed.png"></center>';
  scene.actions([
    { label: '<center><b>Start</b></center>', handler: (st: GameState) => {
    if (((st as any).sound_settings ?? 0)?.['music_off'] === 0) {
      (st as any).track_loop = 'sound/suki.mp3';
      (st as any).volume = 100;
      (st as any).music_loop = 1;
    }
    qspGoto(st, 'begin', 'warning');
  } },
    { label: '<center><b>LOAD</b></center>', handler: (st: GameState) => {
    // TODO-QSP: opengame
  } },
    { label: '<center>Load <b>QuickSave</b></center>', handler: (st: GameState) => {
    // TODO-QSP: opengame 'quicksave.sav'
  } },
    { label: '<center>Test video</center>', handler: (st: GameState) => {
    scene.img('images/system/test_video.mp4');
    scene.text('<center><b>Video should be playing here, there may be a short delay for on this first video.</b></center>');
    scene.actions([
      { label: 'Return', goto: ['start', 'start'] },
    ]);
  } },
    { label: '<center>Change log</center>', goto: ['start', 'version'] },
    { label: '<center>New Features</center>', goto: ['feature_updates', 'show', 'start'] },
    { label: '<center>Manage mods</center>', handler: (st: GameState) => {
    (st as any).settingmode = 2;
  }, goto: ['$menu_settings', 'mods'] },
  ]);
  scene.build();
}

function enterVersion(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'version', '');
  scene.actions([
    { label: 'Return', goto: ['start', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'version':
      enterVersion(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const start: LocationDef = {
  name: 'start',
  title: 'The player you are using is incompatible with <b>Girl Life</',
  region: 'other',
  enter: enter,
};
