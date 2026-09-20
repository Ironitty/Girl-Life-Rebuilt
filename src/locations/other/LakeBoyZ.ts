import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGLBoyZ(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: '', labelFn: (s: GameState) => String(((s as any).pcs_nickname ?? '') ?? ''), handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    if (((st as any).clothingworntype ?? 0) === 'nude') {
      scene.img('images/locations/pavlovsk/lake/event/sunbathe_nudelake.jpg');
    } else {
      scene.img('images/locations/pavlovsk/lake/event/sunbathe_lake.jpg');
    }
    scene.text('He seems nice enough so you decide to give him your name.');
    if ((Math.floor(Math.random() * 11) + 0) === 0  &&  ((st as any).pcs_apprnc ?? 0) >= (Math.floor(Math.random() * 81) + 40)  &&  ((st as any).cheatVars ?? 0)?.['random_lovers'] !== 1) {
      // TODO-QSP: dynamic text: <<$boydesc>> smiles as he says, "You''re a pretty cool girl. Maybe we can hang o...
      scene.text(`${((st as any).boydesc ?? '')} smiles as he says, "You're a pretty cool girl. Maybe we can hang out again?"`);
      qspCall(st, 'willpower', 'misc', 'resist', 'easy');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Smile and leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Smile and leave', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspGoto(st, 'pav_lake', '');
  } },
        ]);
      }
      scene.actions([
        { label: 'Give him your phone number', handler: (st: GameState) => {
    qspCall(st, 'mood', 'raise', 'tiny');
    if ((!(Math.floor(Math.random() * 3) + 0))) {
      qspCall(st, 'lover', 'add_boyfriend', ((st as any).boy ?? 0));
    }
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).bmFrend = (st as any).bmFrend ?? {})[String((st as any).Tboynum ?? 0)] = 1;
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: You give <<$boydesc>> your phone number and he adds it to his contact list.
    scene.text(`You give ${((st as any).boydesc ?? '')} your phone number and he adds it to his contact list.`);
    scene.text('He then excuses himself and leaves, promising to call you.');
    scene.actions([
      { label: 'Return', goto: ['pav_lake', ''] },
    ]);
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: <<$boydesc>> sits closer to you and offers you a cold beer.
      scene.text(`${((st as any).boydesc ?? '')} sits closer to you and offers you a cold beer.`);
      qspCall(st, 'willpower', 'drink', 'resist', 'easy');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Smile and leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Smile and leave', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspGoto(st, 'pav_lake', '');
  } },
        ]);
      }
      scene.actions([
        { label: 'Drink beer', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'drugs', 'alcohol', 'beer', 1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/lake/event/drinkbeer.jpg');
    scene.text('You drink beer with the guy, and the two of you chat for a while.');
    scene.text('Suddenly, he puts his hand on your thigh.');
    // TODO-QSP: dynamic text: "Another beer, <<$pcs_nickname>>?"
    scene.text(`"Another beer, ${((st as any).pcs_nickname ?? '')}?"`);
    qspCall(st, 'willpower', 'drink', 'resist', 'easy');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
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
    qspCall(st, 'drugs', 'alcohol', 'beer', 1);
    qspCall(st, 'arousal', 'foreplay', 5);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/lake/event/drinkbeer.jpg');
    // TODO-QSP: dynamic text: You drink more beer with <<$boydesc>>. He begins stroking your leg and puts his ...
    scene.text(`You drink more beer with ${((st as any).boydesc ?? '')}. He begins stroking your leg and puts his hand on your chest as he leans into you.`);
    if ((Math.floor(Math.random() * 100) + 1) <= 20) {
      scene.text('Leaned in he whispers to you, "I need to taste those lips."');
      qspCall(st, 'willpower', 'kiss', 'resist', 'easy');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
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
    qspCall(st, 'arousal', 'kiss', 5);
    qspCall(st, 'arousal', 'end');
    if (((st as any).clothingworntype ?? 0) === 'nude') {
      scene.img('images/locations/pavlovsk/lake/event/kissnude.jpg');
    } else {
      scene.img('images/locations/pavlovsk/lake/event/kissboy.jpg');
    }
    // TODO-QSP: dynamic text: You passionately kiss <<$boydesc>>, as he continues to caress your body, paying ...
    scene.text(`You passionately kiss ${((st as any).boydesc ?? '')}, as he continues to caress your body, paying particular interest to your breasts.`);
    // TODO-QSP: dynamic text: <<$boydesc>> invites you to his house.
    scene.text(`${((st as any).boydesc ?? '')} invites you to his house.`);
    qspCall(st, 'willpower', 'sex', 'resist', 'easy');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
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
    qspGoto(st, 'LBZhouse', '');
  } },
    ]);
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: <<$boydesc>> smiles and suggests that the two of you go for a walk.
      scene.text(`${((st as any).boydesc ?? '')} smiles and suggests that the two of you go for a walk.`);
      scene.actions([
        { label: 'Reject and leave', goto: ['pav_lake', ''] },
        { label: 'Agree', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    if (((st as any).clothingworntype ?? 0) === 'nude') {
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
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: You quickly get changed into your regular clothes and go for a walk with <<$boyd...
    scene.text(`You quickly get changed into your regular clothes and go for a walk with ${((st as any).boydesc ?? '')}.`);
    // TODO-QSP: dynamic text: <<$boydesc>> invites you over to his house.
    scene.text(`${((st as any).boydesc ?? '')} invites you over to his house.`);
    qspCall(st, 'willpower', 'sex', 'resist', 'easy');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
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
  (s as any).gL_boy_z = 'gt \'LakeBoyZ\', \'gL_boy_z\'';
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
