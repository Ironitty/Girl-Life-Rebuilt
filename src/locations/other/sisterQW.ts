import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterSisboyQWExpel(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/anya/home/sisboyqw_07.jpg');
  if (((s as any).sisboytrioQW ?? 0) !== 1) {
    scene.text('Your sister reminds you that she wants to spend time alone with Roma and asks you to leave the room.');
  } else {
    scene.text('Your sister asks you to briefly leave the room.');
  }
  scene.actions([
    { label: 'Leave', goto: ['korrPar', ''] },
  ]);
  scene.build();
}

function enterSisboyQWBedroom(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/anya/sex/spy1.jpg');
  scene.text('You walk up to your bedroom door and stop. Your sister asked you to give her some privacy with her boyfriend, and you\'re sure they\'re having or are going to have sex. You know you should just walk away, but you can\'t shake the stimulating thoughts of your desire to spy on Anya and her boyfriend.');
  qspCall(s, 'willpower', 'voyeur', 'self', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Spy on them [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Spy on them', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    scene.img('images/pc/activities/spy/peep1.jpg');
    scene.text('You force yourself to slowly grab the handle of the door. You turn it slowly and push the door open just a crack. Pressing your face to the gap, you peer into the room.');
    scene.text('Your eyes focus on your sister and her boyfriend passionately kissing and undressing each other. It looks like they\'re about to have sex.');
    qspCall(s, 'arousal', 'voyeur', 5);
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'voyeur', 'self', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Keep spying on them [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Keep spying on them', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    if (((s as any).sisterbfspy ?? 0) === 0) {
      scene.actions([{ label: 'Continue', goto: ['sisterQW', 'spy1'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['sisterQW', 'spy2'] }]);
      if (((s as any).sisterbfspy ?? 0) === 2) {
        scene.actions([{ label: 'Continue', goto: ['sisterQW', 'spy3'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['sisterQW', 'spy4'] }]);
        if (((s as any).sisterbfspy ?? 0) === 4) {
          scene.actions([{ label: 'Continue', goto: ['sisterQW', 'spy5'] }]);
        } else {
          scene.actions([{ label: 'Continue', goto: ['sisterQW', 'spy6'] }]);
        }
      }
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Close the door', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).blockBedrPar = 1;
    scene.img('images/pc/activities/spy/peep3.jpg');
    scene.text('You feel guilty about spying on your sister after you promised you would leave her in peace, and you close the door softly so they don\'t hear you. You lean your head against the door for a few seconds to collect yourself before walking away.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['korrPar', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Leave them in peace', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).blockBedrPar = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/anya/home/sisboyqw_06.jpg');
    scene.text('You can\'t bring yourself to spy on them and remember your promise to your sister, so you decide not to bother her.');
    scene.actions([
      { label: 'Leave', goto: ['korrPar', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'sisboyQW_expel':
      enterSisboyQWExpel(s, scene);
      break;
    case 'sisboyQW_bedroom':
      enterSisboyQWBedroom(s, scene);
      break;
    default:
      enterSisboyQWExpel(s, scene);
      break;
  }
}

export const sisterQW: LocationDef = {
  name: 'sisterQW',
  title: 'Your sister reminds you that she wants to spend time alone w',
  region: 'other',
  description: ['Your sister reminds you that she wants to spend time alone with Roma and asks you to leave the room.'],
  enter: enter,
};
