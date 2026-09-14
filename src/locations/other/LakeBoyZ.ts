import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGLBoyZ(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: '<<$pcs_nickname>>', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      scene.img('images/locations/pavlovsk/lake/event/sunbathe_nudelake.jpg');
    } else {
      scene.img('images/locations/pavlovsk/lake/event/sunbathe_lake.jpg');
    }
    scene.text('He seems nice enough so you decide to give him your name.');
    if ((Math.floor(Math.random() * 11) + 0) === 0  &&  ((s as any).pcs_apprnc ?? 0) >= (Math.floor(Math.random() * 81) + 40)  &&  ((s as any).cheatVars ?? 0)?.['random_lovers'] !== 1) {
      // TODO-QSP: dynamic text: <<$boydesc>> smiles as he says, "You're a pretty cool girl. Maybe we can hang ou...
      scene.text(`${((s as any).boydesc || '')} smiles as he says, "You're a pretty cool girl. Maybe we can hang out again?"`);
      qspCall(s, 'willpower', 'misc', 'resist', 'easy');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Smile and leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Smile and leave', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
  }, goto: ['pav_lake', ''] },
        ]);
      }
      scene.actions([
        { label: 'Give him your phone number', handler: (st: GameState) => {
    qspCall(s, 'mood', 'raise', 'tiny');
    if ((!(Math.floor(Math.random() * 3) + 0))) {
      qspCall(s, 'lover', 'add_boyfriend', ((s as any).boy ?? 0));
    }
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (!(s as any).bmFrend) (s as any).bmFrend = {}; (s as any).bmFrend[String((s as any).Tboynum ?? 0)] = 1;
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You give <<$boydesc>> your phone number and he adds it to his contact list.
    scene.text(`You give ${((s as any).boydesc || '')} your phone number and he adds it to his contact list.`);
    scene.text('He then excuses himself and leaves, promising to call you.');
    scene.actions([
      { label: 'Return', goto: ['pav_lake', ''] },
    ]);
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: <<$boydesc>> sits closer to you and offers you a cold beer.
      scene.text(`${((s as any).boydesc || '')} sits closer to you and offers you a cold beer.`);
      qspCall(s, 'willpower', 'drink', 'resist', 'easy');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Smile and leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Smile and leave', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
  }, goto: ['pav_lake', ''] },
        ]);
      }
      scene.actions([
        { label: 'Drink beer', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'drugs', 'alcohol', 'beer', 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/lake/event/drinkbeer.jpg');
    scene.text('You drink beer with the guy, and the two of you chat for a while.');
    scene.text('Suddenly, he puts his hand on your thigh.');
    // TODO-QSP: dynamic text: "Another beer, <<$pcs_nickname>>?"
    scene.text(`"Another beer, ${((s as any).pcs_nickname || '')}?"`);
    qspCall(s, 'willpower', 'drink', 'resist', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Thank him for the beer and leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Thank him for the beer and leave', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
  }, goto: ['pav_lake', ''] },
      ]);
    }
    scene.actions([
      { label: 'Drink some more beer', handler: (st: GameState) => {
    qspCall(s, 'drugs', 'alcohol', 'beer', 1);
    qspCall(s, 'arousal', 'foreplay', 5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/lake/event/drinkbeer.jpg');
    // TODO-QSP: dynamic text: You drink more beer with <<$boydesc>>. He begins stroking your leg and puts his ...
    scene.text(`You drink more beer with ${((s as any).boydesc || '')}. He begins stroking your leg and puts his hand on your chest as he leans into you.`);
    if ((Math.floor(Math.random() * 100) + 1) <= 20) {
      scene.text('Leaned in he whispers to you, "I need to taste those lips."');
      qspCall(s, 'willpower', 'kiss', 'resist', 'easy');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Push him away and leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Push him away and leave', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
  }, goto: ['pav_lake', ''] },
        ]);
      }
      scene.actions([
        { label: 'Kiss him', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'kiss', 5);
    qspCall(s, 'arousal', 'end');
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      scene.img('images/locations/pavlovsk/lake/event/kissnude.jpg');
    } else {
      scene.img('images/locations/pavlovsk/lake/event/kissboy.jpg');
    }
    // TODO-QSP: dynamic text: You passionately kiss <<$boydesc>>, as he continues to caress your body, paying ...
    scene.text(`You passionately kiss ${((s as any).boydesc || '')}, as he continues to caress your body, paying particular interest to your breasts.`);
    // TODO-QSP: dynamic text: <<$boydesc>> invites you to his house.
    scene.text(`${((s as any).boydesc || '')} invites you to his house.`);
    qspCall(s, 'willpower', 'sex', 'resist', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Call it a day and leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Call it a day and leave', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
  }, goto: ['pav_lake', ''] },
      ]);
    }
    scene.actions([
      { label: 'Follow him to his house', handler: (st: GameState) => {
    // TODO-QSP: gs 'clothing', 'wear', $lastwornclothingtype['swim'], lastwornclothingnumber['swim']
    // TODO-QSP: gs 'panties', 'wear', $lastwornpantytype['swim'], lastwornpantynumber['swim']
    // TODO-QSP: gs 'bras', 'wear', $lastwornbratype['swim'], lastwornbranumber['swim']
  }, goto: ['LBZhouse', ''] },
    ]);
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: <<$boydesc>> smiles and suggests that the two of you go for a walk.
      scene.text(`${((s as any).boydesc || '')} smiles and suggests that the two of you go for a walk.`);
      scene.actions([
        { label: 'Reject and leave', goto: ['pav_lake', ''] },
        { label: 'Agree', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      scene.img('images/locations/pavlovsk/lake/event/changenude.jpg');
      // TODO-QSP: gs 'clothing', 'wear', $lastwornclothingtype['swim'], lastwornclothingnumber['swim']
      // TODO-QSP: gs 'panties', 'wear', $lastwornpantytype['swim'], lastwornpantynumber['swim']
      // TODO-QSP: gs 'bras', 'wear', $lastwornbratype['swim'], lastwornbranumber['swim']
    } else {
      scene.img('images/locations/pavlovsk/lake/event/changebikini.jpg');
      // TODO-QSP: gs 'clothing', 'wear', $lastwornclothingtype['swim'], lastwornclothingnumber['swim']
      // TODO-QSP: gs 'panties', 'wear', $lastwornpantytype['swim'], lastwornpantynumber['swim']
      // TODO-QSP: gs 'bras', 'wear', $lastwornbratype['swim'], lastwornbranumber['swim']
    }
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You quickly get changed into your regular clothes and go for a walk with <<$boyd...
    scene.text(`You quickly get changed into your regular clothes and go for a walk with ${((s as any).boydesc || '')}.`);
    // TODO-QSP: dynamic text: <<$boydesc>> invites you over to his house.
    scene.text(`${((s as any).boydesc || '')} invites you over to his house.`);
    qspCall(s, 'willpower', 'sex', 'resist', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Call it a day and leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Call it a day and leave', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
  }, goto: ['pav_lake', ''] },
      ]);
    }
    scene.actions([
      { label: 'Follow him to his house', goto: ['LBZhouse', ''] },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'gL_boy_z':
      enterGLBoyZ(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const LakeBoyZ: LocationDef = {
  name: 'LakeBoyZ',
  region: 'other',
  enter: enter,
};
