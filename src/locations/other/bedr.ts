import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bedr', '');
  (s as any).locclass = 'bedr';
  (s as any).location_type = 'private';
  (s as any).elektro = ((s as any).elektro ?? 0) + (1);
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'music_actions', 'clear_restrictions');
  if (((s as any).pcs_magik ?? 0) >= 6  &&  ((s as any).spellbefshild ?? 0) === 1  &&  (!((s as any).tobiQW ?? 0))) {
    qspGoto(s, 'tobiQW', 'start');
  }
  scene.text('<center><b>Bedroom</b></center>');
  if ((!((s as any).rembedr ?? 0))) {
    scene.img('images/locations/city/residential/apartment/bedr.jpg');
    scene.text('A tight, little room with a <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027bed\u0027, \u0027start\u0027); return false;">double bed</a>.');
    scene.text(String(qspFunc(s, 'alarmclock', 'base_alarmclock_text') || ''));
    scene.text('An old wooden <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027wardrobe\u0027, \u0027start\u0027); return false;">wardrobe</a> stands near the door to the corridor. The windows are closed with faded, heavy curtains.');
  } else {
    scene.img('images/locations/city/residential/apartment/bedr2.jpg');
    scene.text('A bright and beautiful room, with a large, kingsized <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027bed\u0027, \u0027start\u0027); return false;">double bed</a>.');
    scene.text(`There is an <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027alarmclock/u0027, /u0027start/u0027); return false;">alarm clock</a> on the bedside table, and it is set to ${qspFunc(s, 'alarmclock', 'get_week_display')} during the week and ${qspFunc(s, 'alarmclock', 'get_weekend_display')} during the weekend. It is currently turned ` + ((((s as any).alarmVars ?? 0)?.['alarmOn'] === 0) ? ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.alarmVars ??= {})\u0027alarmOn\u0027 = s.1; return s; }); window.__gameStore.getState().doGoto(window.__gameStore.getState().prevLoc, window.__gameStore.getState().prevArg); return false;">OFF</a>.') : ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.alarmVars ??= {})\u0027alarmOn\u0027 = s.0; return s; }); window.__gameStore.getState().doGoto(window.__gameStore.getState().prevLoc, window.__gameStore.getState().prevArg); return false;">ON</a>.')));
    scene.text('A modern <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027wardrobe\u0027, \u0027start\u0027); return false;">wardrobe</a> stands near the door to the corridor. Against the wall stands a make-up table with a <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027mirror\u0027, \u0027start\u0027); return false;">mirror</a> on it.');
  }
  if (((s as any).ml_guitar ?? 0)?.['location'] === ((s as any).loc ?? 0)) {
    scene.text('Your guitar rests on its stand next to your bed.');
  }
  qspCall(s, 'wardrobe', 'default_clothing_options');
  qspCall(s, 'lover_living', 'bedr');
  if (((s as any).sick ?? 0) >= 1) {
    scene.actions([
      { label: 'Go to sleep (Sick)', goto: ['bedr', 'sick'] },
    ]);
  }
  qspCall(s, 'din_van', 'palelady');
  if (((s as any).pcs_horny ?? 0) >= 50) {
    scene.actions([
      { label: 'Masturbate', goto: ['selfplay', 'start'] },
    ]);
  }
  if (((s as any).mc_inventory ?? 0)?.['mag_porn'] > 0) {
    scene.text('You hide a porn magazine under your mattress.');
    qspCall(s, 'library_functions', 'set_read_porn_act');
  }
  qspCall(s, 'subkid', '');
  qspCall(s, 'daily_routine', 'offer_here');
  qspCall(s, 'prostitution_functions', 'prostitute_outfit_at_home');
  qspCall(s, 'blackmailer', 'open_package_act');
  qspCall(s, 'music_actions', 'start');
  scene.actions([
    { label: 'Go to the corridor', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['korr', ''] },
    { label: 'Relax on your bed', goto: ['bed', 'start'] },
    { label: 'Open wardrobe', goto: ['wardrobe', 'start'] },
  ]);
  scene.build();
}

function enterSick(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sleep_simple', 'forced', 240);
  (s as any).sick = ((s as any).sick ?? 0) - (1);
  if (((s as any).sick ?? 0) < 0) {
    (s as any).sick = 0;
  }
  qspCall(s, 'stat', '');
  scene.img(`images/locations/shared/apartment/event/sick/sick${(Math.floor(Math.random() * 7) + 11)}.jpg`);
  scene.text('You\'re lying in bed coughing, sneezing and blowing your nose.');
  scene.actions([
    { label: 'Check your temperature', goto: ['bedr', ''] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'sick':
      enterSick(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const bedr: LocationDef = {
  name: 'bedr',
  title: 'Bedroom',
  region: 'other',
  locationType: 'private',
  locclass: 'bedr',
  description: ['Your guitar rests on its stand next to your bed.'],
  enter: enter,
};
