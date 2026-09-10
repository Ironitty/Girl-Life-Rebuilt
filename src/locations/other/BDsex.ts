import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).NoGuy ?? 0))) {
    (s as any).guy = ((s as any).guy ?? 0) + (1);
  }
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/pet/petting1.jpg');
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    // TODO-QSP: dynamic text: <<$npcdesc>> hugs you and gently caresses your breasts.
    scene.text(`${((s as any).npcdesc ?? 0)} hugs you and gently caresses your breasts.`);
    qspCall(s, 'willpower', 'cuni', 'force');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Order him to lick you [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Order him to lick you', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'force');
  }, goto: ['BDsex', 'kuni'] },
      ]);
    }
    scene.actions([
      { label: 'Stroke his cock', goto: ['BDsex', 'hj'] },
      { label: 'Suck his dick', goto: ['BDsex', 'minet'] },
      { label: 'Lie on your back and spread your legs ', goto: ['BDsex', 'sex'] },
      { label: 'Go on all fours', goto: ['BDsex', 'sex2'] },
      { label: 'Do anal', goto: ['BDsex', 'anal2'] },
    ]);
  } else {
    // TODO-QSP: dynamic text: <<$npcdesc>> skillfully caresses your breasts.
    scene.text(`${((s as any).npcdesc ?? 0)} skillfully caresses your breasts.`);
    qspCall(s, 'arousal', 'foreplay', 5);
    qspCall(s, 'stat', '');
    if ((Math.floor(Math.random() * 101) + 0) < 70) {
      // TODO-QSP: dynamic text: <<$npcdesc>> strokes and caresses your pussy with his fingers.
      scene.text(`${((s as any).npcdesc ?? 0)} strokes and caresses your pussy with his fingers.`);
      qspCall(s, 'arousal', 'vaginal_finger', (-5), 'sub');
      qspCall(s, 'stat', '');
      if ((Math.floor(Math.random() * 3) + 0) !== 0) {
        // TODO-QSP: dynamic text: <<$npcdesc>> moves to lay you down on your back.
        scene.text(`${((s as any).npcdesc ?? 0)} moves to lay you down on your back.`);
        scene.actions([
          { label: 'Lie on your back and spread your legs ', goto: ['BDsex', 'sex'] },
        ]);
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>> turns you face down.
        scene.text(`${((s as any).npcdesc ?? 0)} turns you face down.`);
        scene.actions([
          { label: 'Stand on all fours', goto: ['BDsex', 'sex2'] },
        ]);
      }
      scene.actions([
        { label: 'Suck him', goto: ['BDsex', 'minet'] },
      ]);
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> asks you to suck his cock.
      scene.text(`${((s as any).npcdesc ?? 0)} asks you to suck his cock.`);
      scene.actions([
        { label: 'Stroke his cock', goto: ['BDsex', 'hj'] },
        { label: 'Take by mouth', goto: ['BDsex', 'minet'] },
        { label: 'Tell him you prefer to lay down and happily spread your legs for him', goto: ['BDsex', 'sex'] },
      ]);
    }
    // TODO-QSP: dynamic text: <<$npcdesc>> hugs you and passionately caresses your breasts.
    scene.text(`${((s as any).npcdesc ?? 0)} hugs you and passionately caresses your breasts.`);
    qspCall(s, 'arousal', 'foreplay', 5);
    qspCall(s, 'stat', '');
    (s as any).temp_rand = Math.floor(Math.random() * 101) + 0;
    if (((s as any).temp_rand ?? 0) < 70) {
      // TODO-QSP: dynamic text: <<$npcdesc>> caresses your pussy with his fingers.
      scene.text(`${((s as any).npcdesc ?? 0)} caresses your pussy with his fingers.`);
      qspCall(s, 'arousal', 'vaginal_finger', (-5), 'sub');
      qspCall(s, 'stat', '');
      if ((Math.floor(Math.random() * 3) + 0) !== 0) {
        // TODO-QSP: dynamic text: <<$npcdesc>> moves to lay you down on your back.
        scene.text(`${((s as any).npcdesc ?? 0)} moves to lay you down on your back.`);
        scene.actions([
          { label: 'Lie on your back and spread your legs ', goto: ['BDsex', 'sex'] },
        ]);
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>> turns you around.
        scene.text(`${((s as any).npcdesc ?? 0)} turns you around.`);
        scene.actions([
          { label: 'Go on all fours', goto: ['BDsex', 'sex2'] },
        ]);
      }
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> grabs the back of your head and pulls you to face his penis.
      scene.text(`${((s as any).npcdesc ?? 0)} grabs the back of your head and pulls you to face his penis.`);
      qspCall(s, 'willpower', 'bj', 'resist', 'easy');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Lie on your back and spread your legs [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          { label: 'Stand on all fours [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Lie on your back and spread your legs', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
  }, goto: ['BDsex', 'sex'] },
          { label: 'Stand on all fours', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
  }, goto: ['BDsex', 'sex2'] },
        ]);
      }
      if (((s as any).temp_rand ?? 0) >= 90) {
        // TODO-QSP: dynamic text: <<$npcdesc>> tells you that he wants to take you in the ass.
        scene.text(`${((s as any).npcdesc ?? 0)} tells you that he wants to take you in the ass.`);
        qspCall(s, 'willpower', 'anal', 'resist', 'easy');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: '"I do not want to!" Lie on your back and spread your legs [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            { label: '"I\'ll do it doggy style, but not in the ass!" [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: '"I do not want to!" Lie on your back and spread your legs', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'anal', 'resist', 'easy');
    qspCall(st, 'willpower', 'pay', 'resist');
  }, goto: ['BDsex', 'sex'] },
            { label: '"I\'ll do it doggy style, but not in the ass!"', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'anal', 'resist', 'easy');
    qspCall(st, 'willpower', 'pay', 'resist');
  }, goto: ['BDsex', 'sex2'] },
          ]);
        }
        qspCall(s, 'willpower', 'bj', 'force');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Take him into your mouth [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Take him into your mouth', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'bj', 'force');
    qspCall(st, 'willpower', 'pay', 'force');
  }, goto: ['BDsex', 'minet'] },
          ]);
        }
        scene.actions([
          { label: 'Do anal', goto: ['BDsex', 'anal2'] },
        ]);
      }
      scene.actions([
        { label: 'Take by mouth', goto: ['BDsex', 'minet'] },
      ]);
    }
  }
  scene.build();
}

export const BDsex: LocationDef = {
  name: 'BDsex',
  title: 'You undress and lay on the bed, bringing his face to your pu',
  region: 'other',
  enter: enter,
};
