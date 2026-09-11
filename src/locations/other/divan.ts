import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_sweat ?? 0) < 25) {
    qspCall(s, 'sweat', 'add', 5);
  }
  if ((!((s as any).divanmastr ?? 0))) {
    (s as any).divanmastr = 1;
    if (((s as any).pcs_inhib ?? 0) < 30) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
    }
  }
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/mast/divmas.jpg');
  scene.text('You lie down on the sofa and began to fondle your chest with one hand while you slide the other hand down your stomach and across your mound.');
  scene.text('With your middle finger you start rubbing and stroking your clit, which responds to the touch by bringing a sensual warmth to your entire body.');
  qspCall(s, 'arousal', 'clit_finger', 15, 'masturbate');
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'stat', '');
  scene.img('images/shared/home/divan.jpg');
  scene.text('You lie down on the sofa.');
  if (((s as any).mc_inventory ?? 0)?.['tech_tv'] >= 1  ||  ((s as any).mc_inventory ?? 0)?.['plasma_tv'] >= 1  &&  ((s as any).loc ?? 0) !== 'dachain') {
    scene.actions([
      { label: 'Watch TV', goto: ['TV', 'start'] },
    ]);
  }
  qspCall(s, 'library_functions', 'set_home_read_acts');
  if (((s as any).pcs_horny ?? 0) >= 75) {
    scene.actions([
      { label: 'Masturbate (0:15)', handler: (st: GameState) => {
    // TODO-QSP: dynamic $divmastr
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Get off the couch', handler: (st: GameState) => {
    (st as any).divanmastr = 0;
  }, goto: ['divan', 'fin'] },
    { label: 'Get off the couch', goto: ['divan', 'fin'] },
  ]);
  scene.build();
}

function enterFin(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc', 'loc_arg'); } }]);
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'fin':
      enterFin(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const divan: LocationDef = {
  name: 'divan',
  title: 'You lie down on the sofa and began to fondle your chest with',
  region: 'other',
  description: ['You lie down on the sofa and began to fondle your chest with one hand while you slide the other hand down your stomach and across your mound.'],
  enter: enter,
};
