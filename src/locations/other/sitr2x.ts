import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'sitr2x', '');
  (s as any).location_type = 'private';
  (s as any).locclass = 'livingr';
  (s as any).elektro = ((s as any).elektro ?? 0) + (1);
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'music_actions', 'clear_restrictions');
  scene.text('<center><b>Hall</b></center>');
  scene.img('images/locations/city/residential/apartment/sitr2.jpg');
  if (((s as any).mc_inventory ?? 0)?.['tech_computer'] === 1) {
    qspCall(s, 'internet_mobile', 'get_access');
    (s as any).komp = ' with your <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027komp/u0027, /u0027start/u0027); return false;">computer</a> on it along with some papers and pens.';
  }
  scene.text('huge plasma <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027TV/u0027, /u0027start/u0027); return false;">TV</a>');
  scene.text('luxurious <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027divan/u0027, /u0027start/u0027); return false;">leather sofa</a>');
  // TODO-QSP: 'modern <a href="exec:gt ''stol'',''start''">desk</a>' + iif($komp = '', '.', $komp)
  if (((s as any).mc_inventory ?? 0)?.['hula_hoop'] > 0) {
    scene.text('Your hula hoop stands in a corner.');
  }
  if (((s as any).mc_inventory ?? 0)?.['skipping_rope'] > 0) {
    scene.text('Your jump rope is on a shelf.');
  }
  if (((s as any).mc_inventory ?? 0)?.['book_yoga'] > 0) {
    scene.text('Your book on yoga and your yoga mat are in the cabinet.');
  }
  if (((s as any).mishka ?? 0) > 0) {
    // TODO-QSP: iif(mishka = 1, 'Your teddy bear is', 'Your <<mishka>> teddy bears are') + 'sitting on a shelf.'
  }
  if (((s as any).ml_guitar ?? 0)?.['location'] === ((s as any).loc ?? 0)) {
    scene.text('Your guitar rests on its stand next to the sofa.');
  }
  qspCall(s, 'exercise', 'start');
  qspCall(s, 'lover_living', 'livingroom');
  qspCall(s, 'music_actions', 'start');
  qspCall(s, 'subkid', '');
  qspCall(s, 'library_functions', 'set_home_read_acts');
  if (((s as any).mc_inventory ?? 0)?.['dildo_suction'] > 0  &&  ((s as any).pcs_horny ?? 0) >= 50) {
    scene.actions([
      { label: 'Masturbate', goto: ['sitr2x', 'masturbate'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the corridor', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['korr2x', ''] },
    { label: 'Go out on the balcony', goto: ['balkon', 'start'] },
  ]);
  scene.build();
}

function enterMasturbate(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_inhib ?? 0) < 30) {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 3) + 1));
  }
  if (((s as any).husID ?? 0) !== ''  &&  ((s as any).spouseVars ?? 0)?.['drink'] !== 10  &&  (((s as any).week ?? 0) >= 5  ||  ((s as any).hour ?? 0) >= 17)) {
    qspGoto(s, 'husbsex', 'husb_mastr_vtor');
  } else {
    if (((s as any).wifID ?? 0) !== ''  &&  ((s as any).spouseVars ?? 0)?.['drink'] !== 10  &&  (((s as any).week ?? 0) >= 5  ||  ((s as any).hour ?? 0) >= 17)) {
      qspGoto(s, 'husbsex', 'husb_mastr_vtor');
    } else {
      qspCall(s, 'npcStat', 'D1');
      scene.img('images/shared/sex/mast/mastr.mp4');
      scene.text('You put your dildo on the floor and start to ride it. It moves in and out, and you feel the pleasure running through your entire body with each thrust. You begin to moan, and a few minutes later, you climax and a wave of pleasure runs through your entire body.');
    }
  }
  (s as any).orgasm_or = 'custom';
  qspCall(s, 'arousal', 'vaginal_dildo', 10, 'masturbate', 'no_orgasm_msg');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Breathe', goto: ['sitr2x', ''] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'masturbate':
      enterMasturbate(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const sitr2x: LocationDef = {
  name: 'sitr2x',
  title: 'Hall',
  region: 'other',
  locationType: 'private',
  locclass: 'livingr',
  description: ['Your hula hoop stands in a corner.'],
  enter: enter,
};
