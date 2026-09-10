import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'sitr', '');
  (s as any).elektro = ((s as any).elektro ?? 0) + (1);
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'music_actions', 'clear_restrictions');
  scene.text('<center><b>Living room</b></center>');
  if ((!((s as any).remsitr ?? 0))) {
    if (((s as any).mc_inventory ?? 0)?.['tech_tv'] === 0  &&  ((s as any).mc_inventory ?? 0)?.['plasma_tv'] === 0  ||  ((s as any).mc_inventory ?? 0)?.['tech_computer'] === 0) {
      scene.img('images/locations/city/residential/apartment/sitr.jpg');
    } else {
      scene.img('images/locations/city/residential/apartment/sitr1.jpg');
    }
  } else {
    scene.img('images/locations/city/residential/apartment/sitr2.jpg');
  }
  if (((s as any).mc_inventory ?? 0)?.['tech_tv'] === 0  &&  ((s as any).mc_inventory ?? 0)?.['plasma_tv'] === 0) {
  }
  if (((s as any).mc_inventory ?? 0)?.['tech_tv'] >= 1  &&  ((s as any).mc_inventory ?? 0)?.['plasma_tv'] === 0) {
  }
  if (((s as any).mc_inventory ?? 0)?.['plasma_tv'] >= 1) {
  }
  if ((!((s as any).divan_tier ?? 0))) {
  }
  if (((s as any).divan_tier ?? 0) === 1) {
  }
  if (((s as any).mc_inventory ?? 0)?.['tech_computer'] === 0) {
  }
  if (((s as any).mc_inventory ?? 0)?.['tech_computer'] === 1) {
    qspCall(s, 'internet_mobile', 'get_access');
  }
  if (((s as any).mc_inventory ?? 0)?.['desk'] === 0) {
  }
  if (((s as any).mc_inventory ?? 0)?.['desk'] === 1) {
  }
  // TODO-QSP: dynamic text: <<$zal>>. <<$divan>> sits next to the <<$zal2>>. In front of the sofa is <<$temp...
  scene.text(`${((s as any).zal ?? 0)}. ${((s as any).divan ?? 0)} sits next to the ${((s as any).zal2 ?? 0)}. In front of the sofa is ${((s as any).temp_TV_text ?? 0)}, while ${((s as any).stol ?? 0)} sits in front of the window. ${((s as any).komp ?? 0)}`);
  if (((s as any).mishka ?? 0) > 0) {
    // TODO-QSP: iif(mishka = 1, 'Your teddy bear is', 'Your <<mishka>> teddy bears are') + 'sitting on a shelf.'
  }
  if (((s as any).mc_inventory ?? 0)?.['hula_hoop'] > 0) {
    scene.text('<br>Your hula hoop stands in a corner of the room.');
  }
  if (((s as any).mc_inventory ?? 0)?.['skipping_rope'] > 0) {
    scene.text('Your jump rope is on a shelf. ');
  }
  if (((s as any).mc_inventory ?? 0)?.['book_yoga'] > 0) {
    scene.text('Your yoga mat is rolled up in a corner.');
  }
  qspCall(s, 'subkid', '');
  qspCall(s, 'exercise', 'start');
  qspCall(s, 'lover_living', 'livingroom');
  qspCall(s, 'music_actions', 'start');
  qspCall(s, 'library_functions', 'set_home_read_acts');
  if (((s as any).mc_inventory ?? 0)?.['dildo_suction'] > 0  &&  ((s as any).pcs_horny ?? 0) >= 50) {
    scene.actions([
      { label: 'Masturbate', goto: ['sitr', 'masturbate'] },
    ]);
  }
  if (((s as any).pcs_horny ?? 0) >= 50) {
    // TODO-QSP: act 'Masturbate': gt 'selfplay', 'start'
  }
  scene.actions([
    { label: 'Go to the corridor', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['korr', ''] },
    { label: 'Go out on the balcony', goto: ['balkon', 'start'] },
  ]);
  scene.build();
}

function enterMasturbate(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_inhib ?? 0) < 30) {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
  }
  if (((s as any).husID ?? 0) !== ''  &&  ((s as any).spouseVars ?? 0)?.['drink'] !== 10  &&  (((s as any).week ?? 0) >= 6  ||  ((s as any).hour ?? 0) >= 17)) {
    scene.actions([{ label: 'Continue', goto: ['husbsex', 'husb_mastr_vtor'] }]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['husbsex', 'husb_mastr_vtor'] }]);
    qspCall(s, 'npcStat', 'D1');
    scene.img('images/shared/sex/mast/mastr.mp4');
    scene.text('Unable to control yourself anymore, you immediately reach for your dildo so you can finally take care of your lustful desires. You waste no time and attach the suction base of the dildo onto the floor before slowly lowering yourself.');
    scene.text('Shivers run down your spine as you feel the thick head spreading your pussy lips and soon the whole length starts to slide deep inside your hole. A throaty moan overwhelms the room when it finally bottoms out inside you, sending you to the heavens and back.');
    scene.text('After shifting your legs and getting more comfortable, you start to rock your hips and bounce on it, moaning louder and louder as you keep increasing the power and pace of your thrusts. You\'re soon hammering your ass against the cold floor time and it takes you just a few minutes to reach orgasm, your toes curling tightly as a wonderful feeling run through your entire body.');
    scene.text('You\'re soon twitching on the dildo and juices drip down its length, soaking the floor beneath you. You take a few deep breaths and a smile grows along your face. That was just what you needed!');
  }
  qspCall(s, 'arousal', 'vaginal_dildo', 10, 'masturbate', 'no_orgasm_msg');
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Breathe', goto: ['sitr', ''] },
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

export const sitr: LocationDef = {
  name: 'sitr',
  title: 'Living room',
  region: 'other',
  locationType: 'private',
  locclass: 'livingr',
  description: ['Your jump rope is on a shelf. '],
  enter: enter,
};
