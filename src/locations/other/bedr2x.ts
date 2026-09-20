import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bedr2x', '');
  (s as any).locclass = 'bedr';
  (s as any).location_type = 'private';
  (s as any).elektro = ((s as any).elektro ?? 0) + (1);
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'music_actions', 'clear_restrictions');
  scene.img('images/locations/city/residential/apartment/bedr2.jpg');
  if (((s as any).pcs_magik ?? 0) >= 6  &&  ((s as any).spellbefshild ?? 0) === 1  &&  (!((s as any).tobiQW ?? 0))) {
    qspGoto(s, 'tobiQW', 'start');
  }
  scene.text('A bright and beautiful bedroom, with modern and stylish furniture.');
  scene.text('The room is dominated by <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027bed/u0027, /u0027start/u0027); return false;">full sized bed</a>');
  scene.text('Near the entrance stands a modern <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027wardrobe/u0027, /u0027start/u0027); return false;">wardrobe</a>.');
  scene.text('Against the wall is a table with a <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">mirror</a> above it.');
  if (((s as any).ml_guitar ?? 0)?.['location'] === ((s as any).loc ?? 0)) {
    scene.text('Your guitar rests on its stand next to your bed.');
  }
  qspCall(s, 'wardrobe', 'default_clothing_options');
  qspCall(s, 'lover_living', 'bedr');
  if (((s as any).sick ?? 0) >= 1) {
    scene.actions([
      { label: 'Go to bed rest (Sick)', goto: ['bedr2x', 'sick'] },
    ]);
  }
  qspCall(s, 'din_van', 'palelady');
  if (((s as any).pcs_horny ?? 0) >= 50) {
    scene.actions([
      { label: 'Masturbate', goto: ['selfplay', 'start'] },
    ]);
  }
  if (((s as any).mc_inventory ?? 0)?.['mag_porn'] > 0) {
    scene.text('You have hidden a porn magazine under your mattress.');
    qspCall(s, 'library_functions', 'set_read_porn_act');
  }
  qspCall(s, 'subkid', '');
  qspCall(s, 'daily_routine', 'offer_here');
  qspCall(s, 'prostitution_functions', 'prostitute_outfit_at_home');
  qspCall(s, 'blackmailer', 'open_package_act');
  qspCall(s, 'music_actions', 'start');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the corridor', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['korr2x', ''] },
    { label: 'Relax on your bed', goto: ['bed', 'start'] },
  ]);
  scene.build();
}

function enterSick(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 240;
  (s as any).sick = ((s as any).sick ?? 0) - 1;
  if (((s as any).sick ?? 0) < 0) {
    (s as any).sick = 0;
  }
  qspCall(s, 'stat', '');
  scene.img(`images/locations/shared/apartment/event/sick/sick${(Math.floor(Math.random() * 7) + 11)}.jpg`);
  scene.text('You lie in bed, coughing, sneezing and blowing your nose.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Check your temperature', goto: ['bedr2x', ''] },
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

export const bedr2x: LocationDef = {
  name: 'bedr2x',
  title: 'A bright and beautiful bedroom, with modern and stylish furn',
  region: 'other',
  locationType: 'private',
  locclass: 'bedr',
  description: ['A bright and beautiful bedroom, with modern and stylish furniture.'],
  enter: enter,
};
