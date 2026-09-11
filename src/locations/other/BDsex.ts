import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
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
        { label: 'Order him to lick you [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
    if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
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
    } else {
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
        if (((s as any).temp_rand ?? 0) >= 70  &&  ((s as any).temp_rand ?? 0) < 90) {
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
              { label: 'Lie on your back and spread your legs [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
  }, goto: ['BDsex', 'sex'] },
              { label: 'Stand on all fours [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
  }, goto: ['BDsex', 'sex2'] },
            ]);
          }
          scene.actions([
            { label: 'Take by mouth', goto: ['BDsex', 'minet'] },
          ]);
        } else {
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
                { label: '"I do not want to!" Lie on your back and spread your legs [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'anal', 'resist', 'easy');
    qspCall(st, 'willpower', 'pay', 'resist');
  }, goto: ['BDsex', 'sex'] },
                { label: '"I\'ll do it doggy style, but not in the ass!" [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
                { label: 'Take him into your mouth [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'bj', 'force');
    qspCall(st, 'willpower', 'pay', 'force');
  }, goto: ['BDsex', 'minet'] },
              ]);
            }
            scene.actions([
              { label: 'Do anal', goto: ['BDsex', 'anal2'] },
            ]);
          }
        }
      }
    }
  }
  scene.build();
}

function enterKuni(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/kuni/kuni.jpg');
  scene.text('You undress and lay on the bed, bringing his face to your pussy.');
  // TODO-QSP: dynamic text: <<$npcdesc>> lays down between your legs and begins to work his tongue across yo...
  scene.text(`${((s as any).npcdesc ?? 0)} lays down between your legs and begins to work his tongue across your pussy.`);
  qspCall(s, 'arousal', 'cuni', 10, 'dom');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_horny ?? 0) >= 90) {
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'stat', '');
  } else {
    scene.text('His tongue work is exciting, but after a while, you begin to grow bored.');
  }
  scene.actions([
    { label: 'Stroke his cock', goto: ['BDsex', 'hj'] },
    { label: 'Take by mouth', goto: ['BDsex', 'minet'] },
    { label: 'Lie on your back and spread your legs ', goto: ['BDsex', 'sex'] },
    { label: 'Go on all fours', goto: ['BDsex', 'sex2'] },
    { label: 'Do anal', goto: ['BDsex', 'anal2'] },
  ]);
  scene.build();
}

function enterSex(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 0;
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/vag/miss/vag.jpg');
  qspCall(s, 'arousal', 'vaginal', 10, 'sub');
  qspCall(s, 'stat', '');
  qspCall(s, 'BDsex', 'org');
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
    if ((Math.floor(Math.random() * 11) + 0) >= 8) {
      // TODO-QSP: dynamic text: Suddenly <<$npcdesc>> pulls out of you and takes you by the shoulders, guiding y...
      scene.text(`Suddenly ${((s as any).npcdesc ?? 0)} pulls out of you and takes you by the shoulders, guiding you to your knees before him.`);
      return;
      scene.actions([
        { label: 'Take it on the face', goto: ['BDsex', 'facial'] },
        { label: 'Open your mouth', goto: ['BDsex', 'swallow'] },
      ]);
    }
  }
  if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    if ((Math.floor(Math.random() * 11) + 0) >= 8) {
      // TODO-QSP: dynamic text: Suddenly <<$npcdesc>> pulls his member out and begins to fondle your ass, prepar...
      scene.text(`Suddenly ${((s as any).npcdesc ?? 0)} pulls his member out and begins to fondle your ass, preparing it for penetration.`);
      return;
      scene.actions([
        { label: 'Do anal', goto: ['BDsex', 'anal2'] },
      ]);
    }
  }
  qspCall(s, 'BDsex', 'cum');
  scene.actions([
    { label: 'Leave', goto: ['BDsex', 'end'] },
  ]);
  scene.build();
}

function enterSex2(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  qspCall(s, 'stat', '');
  scene.img(`images/shared/sex/vag/doggy/vagdog${Math.floor(Math.random() * 5) + 1}.jpg`);
  qspCall(s, 'arousal', 'vaginal', 10, 'sub');
  qspCall(s, 'stat', '');
  qspCall(s, 'BDsex', 'org');
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
    if ((Math.floor(Math.random() * 11) + 0) >= 8) {
      // TODO-QSP: dynamic text: Suddenly <<$npcdesc>> pulls out of you and takes you by the shoulders, guiding y...
      scene.text(`Suddenly ${((s as any).npcdesc ?? 0)} pulls out of you and takes you by the shoulders, guiding you to your knees before him.`);
      return;
      scene.actions([
        { label: 'Take it on the face', goto: ['BDsex', 'facial'] },
        { label: 'Open mouth', goto: ['BDsex', 'swallow'] },
      ]);
    }
  }
  if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    if ((Math.floor(Math.random() * 11) + 0) >= 8) {
      // TODO-QSP: dynamic text: Suddenly <<$npcdesc>> withdraws and begins to fondle your ass, preparing it for ...
      scene.text(`Suddenly ${((s as any).npcdesc ?? 0)} withdraws and begins to fondle your ass, preparing it for penetration.`);
      return;
      scene.actions([
        { label: 'Anal', goto: ['BDsex', 'anal2'] },
      ]);
    }
  }
  qspCall(s, 'BDsex', 'cum');
  scene.actions([
    { label: 'Leave', goto: ['BDsex', 'end'] },
  ]);
  scene.build();
}

function enterSex3(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 0;
  qspCall(s, 'stat', '');
  scene.img(`images/shared/sex/vag/cowgirl/vagcow${Math.floor(Math.random() * 5) + 1}.jpg`);
  qspCall(s, 'arousal', 'vaginal', 10, 'sub');
  qspCall(s, 'stat', '');
  qspCall(s, 'BDsex', 'org');
  qspCall(s, 'BDsex', 'cum');
  scene.build();
}

function enterAnal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'auto_lube', 'anal');
  qspCall(s, 'arousal', 'anal', 10, 'sub');
  qspCall(s, 'stat', '');
  qspCall(s, 'bdsex', 'an');
  qspCall(s, 'bdsex', 'ancum');
  scene.build();
}

function enterAnal2(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/shared/sex/anal/doggy/anal2${Math.floor(Math.random() * 10) + 1}.jpg`);
  qspCall(s, 'arousal', 'anal', 10, 'sub');
  qspCall(s, 'stat', '');
  qspCall(s, 'bdsex', 'an');
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
    if ((Math.floor(Math.random() * 11) + 0) >= 8) {
      // TODO-QSP: dynamic text: Suddenly <<$npcdesc>> pulls out of you and takes you by the shoulders, guiding y...
      scene.text(`Suddenly ${((s as any).npcdesc ?? 0)} pulls out of you and takes you by the shoulders, guiding you to your knees before him.`);
      return;
      scene.actions([
        { label: 'Take it on the face', goto: ['BDsex', 'facial'] },
        { label: 'Open mouth', goto: ['BDsex', 'swallow'] },
      ]);
    }
  }
  qspCall(s, 'bdsex', 'ancum');
  scene.actions([
    { label: 'Leave', goto: ['BDsex', 'end'] },
  ]);
  scene.build();
}

function enterAnal3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'auto_lube', 'anal');
  qspCall(s, 'arousal', 'anal', 10, 'sub');
  qspCall(s, 'stat', '');
  qspCall(s, 'bdsex', 'an');
  qspCall(s, 'bdsex', 'ancum');
  scene.build();
}

function enterHj(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/cum/handjob/hand1.jpg');
  // TODO-QSP: dynamic text: You take his <<dick>> centimeter penis and begin to caress the shaft, moving the...
  scene.text(`You take his ${((s as any).dick ?? 0)} centimeter penis and begin to caress the shaft, moving the skin over the crimson head.`);
  qspCall(s, 'arousal', 'hj', 5);
  qspCall(s, 'stat', '');
  if ((Math.floor(Math.random() * 101) + 0) < 75) {
    // TODO-QSP: dynamic text: <<$npcdesc>> Now finish.
    scene.text(`${((s as any).npcdesc ?? 0)} Now finish.`);
    scene.actions([
      { label: 'Take it on the face', goto: ['BDsex', 'facial'] },
      { label: 'Open mouth', goto: ['BDsex', 'swallow'] },
    ]);
  } else {
    if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: <<$npcdesc>> moans, "I'm going to come."
      scene.text(`${((s as any).npcdesc ?? 0)} moans, "I'm going to come."`);
      scene.actions([
        { label: 'Let ends', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/handjob/hand2.jpg');
    if (((s as any).protect ?? 0) === 1) {
      qspCall(s, 'cum_manage', '');
      (s as any).protect = 0;
      if (((s as any).sexcontra ?? 0) === 4) {
        // TODO-QSP: dynamic text: <<$npcdesc>> finishes, filling the condom with his hot and sticky cum, and then ...
        scene.text(`${((s as any).npcdesc ?? 0)} finishes, filling the condom with his hot and sticky cum, and then a slimy feeling. You realize that the condom burst.`);
        qspCall(s, 'arousal', 'end');
      } else {
        if (((s as any).sexcontra ?? 0) === 5) {
          // TODO-QSP: dynamic text: <<$npcdesc>> finishes, filling the condom with his hot and sticky cum. As he pul...
          scene.text(`${((s as any).npcdesc ?? 0)} finishes, filling the condom with his hot and sticky cum. As he pulls out, you feel a ghostly sensation, as if he didn't come all the way out. Looking down, you see his bare dick.`);
          qspCall(s, 'arousal', 'end');
        } else {
          // TODO-QSP: dynamic text: <<$npcdesc>> finishes, filling the condom with his hot and sticky cum.
          scene.text(`${((s as any).npcdesc ?? 0)} finishes, filling the condom with his hot and sticky cum.`);
          qspCall(s, 'arousal', 'end');
        }
      }
      (s as any).sexcontra = 0;
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> finishes, covering your hands in his hot and sticky cum.
      scene.text(`${((s as any).npcdesc ?? 0)} finishes, covering your hands in his hot and sticky cum.`);
      (s as any).spafinloc = 13;
      (s as any).sexpartkno = 1;
      qspCall(s, 'cum_manage', '');
      qspCall(s, 'arousal', 'end');
    }
    scene.actions([
      { label: 'Leave', goto: ['BDsex', 'end'] },
    ]);
  } },
        { label: 'Take by mouth', goto: ['BDsex', 'minet'] },
        { label: 'Lie on your back and spread your legs ', goto: ['BDsex', 'sex'] },
      ]);
    } else {
      if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        (s as any).tmpbrand = Math.floor(Math.random() * 101) + 0;
        if (((s as any).tmpbrand ?? 0) < 70) {
          // TODO-QSP: dynamic text: <<$npcdesc>> caresses your pussy with his fingers.
          scene.text(`${((s as any).npcdesc ?? 0)} caresses your pussy with his fingers.`);
          qspCall(s, 'arousal', 'vaginal_finger', (-5), 'sub');
          qspCall(s, 'stat', '');
          if ((Math.floor(Math.random() * 3) + 0) < 2) {
            // TODO-QSP: dynamic text: <<$npcdesc>> attempts to lay you down on your back.
            scene.text(`${((s as any).npcdesc ?? 0)} attempts to lay you down on your back.`);
            scene.actions([
              { label: 'Lie on your back and spread your legs ', goto: ['BDsex', 'sex'] },
            ]);
          } else {
            // TODO-QSP: dynamic text: <<$npcdesc>> turns you around.
            scene.text(`${((s as any).npcdesc ?? 0)} turns you around.`);
            scene.actions([
              { label: 'Stand on all fours', goto: ['BDsex', 'sex2'] },
            ]);
          }
        } else {
          if (((s as any).tmpbrand ?? 0) >= 70  &&  ((s as any).tmpbrand ?? 0) < 80) {
            // TODO-QSP: dynamic text: <<$npcdesc>> tells you that he wants your ass.
            scene.text(`${((s as any).npcdesc ?? 0)} tells you that he wants your ass.`);
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
                { label: '"I do not want to!" Lie on your back and spread your legs [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'anal', 'resist', 'easy');
    qspCall(s, 'willpower', 'pay', 'resist');
  }, goto: ['BDsex', 'sex'] },
                { label: '"I\'ll do it doggy style, but not in the ass!" [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'anal', 'resist', 'easy');
    qspCall(s, 'willpower', 'pay', 'resist');
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
                { label: 'Take him into your mouth [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'bj', 'force');
    qspCall(s, 'willpower', 'pay', 'force');
  }, goto: ['BDsex', 'minet'] },
              ]);
            }
            scene.actions([
              { label: 'Anal', goto: ['BDsex', 'anal2'] },
            ]);
          } else {
            if (((s as any).tmpbrand ?? 0) >= 80) {
              // TODO-QSP: dynamic text: <<$npcdesc>> forces your face down on his member.
              scene.text(`${((s as any).npcdesc ?? 0)} forces your face down on his member.`);
              scene.actions([
                { label: 'Take by mouth', goto: ['BDsex', 'minet'] },
              ]);
            }
          }
        }
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>> groans, "<<$pcs_nickname>> take my cock in your mouth or let me fuc...
        scene.text(`${((s as any).npcdesc ?? 0)} groans, "${((s as any).pcs_nickname ?? 0)} take my cock in your mouth or let me fuck you!"`);
        scene.actions([
          { label: 'Take by mouth', goto: ['BDsex', 'minet'] },
          { label: 'Lie on your back and spread her legs ', goto: ['BDsex', 'sex'] },
        ]);
      }
    }
  }
  scene.build();
}

function enterMinet(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/shared/sex/blowjob/bj${Math.floor(Math.random() * 5) + 24}.jpg`);
  qspCall(s, 'arousal', 'bj', 10, 'sub');
  qspCall(s, 'stat', '');
  qspCall(s, 'bdsex', 'autobj');
  if ((Math.floor(Math.random() * 101) + 0) < 75) {
    // TODO-QSP: dynamic text: <<$npcdesc>> Now finish.
    scene.text(`${((s as any).npcdesc ?? 0)} Now finish.`);
    if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.actions([
        { label: 'In the palm of your hand', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/handjob/hand2.jpg');
    if (((s as any).protect ?? 0) === 1) {
      // TODO-QSP: dynamic text: <<$npcdesc>> finishes, filling the condom with his cum.
      scene.text(`${((s as any).npcdesc ?? 0)} finishes, filling the condom with his cum.`);
      (s as any).protect = 0;
      (s as any).sexcontra = 0;
      qspCall(s, 'arousal', 'end');
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> finished all over your hands covering them in hot and sticky cum.
      scene.text(`${((s as any).npcdesc ?? 0)} finished all over your hands covering them in hot and sticky cum.`);
      (s as any).spafinloc = 13;
      (s as any).sexpartkno = 1;
      qspCall(s, 'cum_manage', '');
      qspCall(s, 'arousal', 'end');
    }
    scene.actions([
      { label: 'Leave', goto: ['BDsex', 'end'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Take it on the face', goto: ['BDsex', 'facial'] },
      { label: 'Open mouth', goto: ['BDsex', 'swallow'] },
    ]);
  } else {
    if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: <<$npcdesc>> moans, "I'm going to come."
      scene.text(`${((s as any).npcdesc ?? 0)} moans, "I'm going to come."`);
      scene.actions([
        { label: 'In the palm of your hand', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/handjob/hand2.jpg');
    if (((s as any).protect ?? 0) === 1) {
      // TODO-QSP: dynamic text: <<$npcdesc>> finishes, filling the condom with his cum.
      scene.text(`${((s as any).npcdesc ?? 0)} finishes, filling the condom with his cum.`);
      (s as any).protect = 0;
      (s as any).sexcontra = 0;
      qspCall(s, 'arousal', 'end');
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> finished all over your hands covering them in hot and sticky cum.
      scene.text(`${((s as any).npcdesc ?? 0)} finished all over your hands covering them in hot and sticky cum.`);
      (s as any).spafinloc = 13;
      (s as any).sexpartkno = 1;
      qspCall(s, 'cum_manage', '');
      qspCall(s, 'arousal', 'end');
    }
    scene.actions([
      { label: 'Leave', goto: ['BDsex', 'end'] },
    ]);
  } },
        { label: 'Lie on your back and spread your legs ', goto: ['BDsex', 'sex'] },
      ]);
    } else {
      if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        if ((Math.floor(Math.random() * 101) + 0) < 70) {
          // TODO-QSP: dynamic text: <<$npcdesc>> caresses your pussy with his fingers.
          scene.text(`${((s as any).npcdesc ?? 0)} caresses your pussy with his fingers.`);
          qspCall(s, 'arousal', 'vaginal_finger', (-10), 'sub');
          qspCall(s, 'stat', '');
          if ((Math.floor(Math.random() * 3) + 0) < 2) {
            // TODO-QSP: dynamic text: <<$npcdesc>> tries to lay you down on your back.
            scene.text(`${((s as any).npcdesc ?? 0)} tries to lay you down on your back.`);
            scene.actions([
              { label: 'Lie on your back and spread your legs ', goto: ['BDsex', 'sex'] },
            ]);
          } else {
            // TODO-QSP: dynamic text: <<$npcdesc>> turns you around.
            scene.text(`${((s as any).npcdesc ?? 0)} turns you around.`);
            scene.actions([
              { label: 'Stand on all fours', goto: ['BDsex', 'sex2'] },
            ]);
          }
        } else {
          // TODO-QSP: dynamic text: <<$npcdesc>> tells you that he wants your ass.
          scene.text(`${((s as any).npcdesc ?? 0)} tells you that he wants your ass.`);
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
              { label: '"I do not want to!" Lie on your back and spread your legs [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
  }, goto: ['BDsex', 'sex'] },
              { label: '"I\'ll do it doggy style, but not in the ass!" [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
  }, goto: ['BDsex', 'sex2'] },
            ]);
          }
          scene.actions([
            { label: 'Anal', goto: ['BDsex', 'anal2'] },
          ]);
        }
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>> groans, "<<$pcs_nickname>> take my cock in your mouth or let me fuc...
        scene.text(`${((s as any).npcdesc ?? 0)} groans, "${((s as any).pcs_nickname ?? 0)} take my cock in your mouth or let me fuck you!"`);
        scene.actions([
          { label: 'Lie on your back and spread your legs ', goto: ['BDsex', 'sex'] },
        ]);
      }
    }
  }
  scene.build();
}

function enterFacial(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  scene.img(`images/shared/sex/cum/facial/facial${Math.floor(Math.random() * 5) + 11}.jpg`);
  if (((s as any).protect ?? 0) === 1) {
    // TODO-QSP: dynamic text: <<$npcdesc>> finishes, filling the condom with his cum.
    scene.text(`${((s as any).npcdesc ?? 0)} finishes, filling the condom with his cum.`);
    (s as any).protect = 0;
    (s as any).sexcontra = 0;
  } else {
    scene.text('Thick jets of sperm hit you square in the face.');
    (s as any).spafinloc = 11;
    (s as any).sexpartkno = 1;
    qspCall(s, 'cum_manage', '');
  }
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Brush up', goto: ['BDsex', 'end'] },
  ]);
  scene.build();
}

function enterSwallow(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  scene.img(`images/shared/sex/cum/mouth/cum${Math.floor(Math.random() * 10) + 20}.jpg`);
  if (((s as any).protect ?? 0) === 1) {
    // TODO-QSP: dynamic text: <<$npcdesc>> finishes, and you feel the condom balloon up in your mouth.
    scene.text(`${((s as any).npcdesc ?? 0)} finishes, and you feel the condom balloon up in your mouth.`);
    (s as any).protect = 0;
    (s as any).sexcontra = 0;
  } else {
    scene.text('Thick jets of sharply smelling sperm fill your mouth.');
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0), 1);
  }
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Brush up', goto: ['BDsex', 'end'] },
  ]);
  scene.build();
}

function enterEnd(s: GameState, scene: SceneBuilder): void {
  (s as any).NoGuy = 0;
  if (((s as any).BDcafe ?? 0) === 1) {
    (s as any).BDcafe = 0;
    scene.actions([
      { label: 'Leave', goto: ['city_residential', ''] },
    ]);
  } else {
    if (((s as any).Yuri_sex ?? 0) === 1) {
      (s as any).Yuri_sex = 0;
      (s as any).cumspclnt = 4;
      qspCall(s, 'cum_cleanup', '');
      qspCall(s, 'stat', '');
      scene.text('Yuri lets you have a quick shower and dress before giving you a quick kiss on the cheek.');
      if (((s as any).deodorant_on ?? 0) === 1) {
        qspCall(s, 'sweat', 'remove_deo');
        scene.text('<br>Your deodorant gets washed away in the shower.');
      }
      scene.actions([
        { label: 'Leave', goto: ['city_industrial', ''] },
      ]);
    } else {
      if (((s as any).npcdesc ?? 0) === 'Michael N.') {
        scene.actions([
          { label: 'Leave', goto: ['dina', 'brodilr'] },
        ]);
      } else {
        if (((s as any).InYouHome ?? 0) === 1) {
          (s as any).InYouHome = 0;
          // TODO-QSP: dynamic text: <<$npcdesc>> politely says goodbye and leaves.
          scene.text(`${((s as any).npcdesc ?? 0)} politely says goodbye and leaves.`);
          return;
          scene.actions([
            { label: 'Leave', handler: (st: GameState) => {
    // TODO-QSP: gt $home['entrance'], $home['entrance_arg']
  } },
          ]);
        } else {
          if (((s as any).GoToGuy ?? 0) === 1) {
            (s as any).GoToGuy = 0;
            scene.actions([
              { label: 'Leave', goto: ['city_industrial', ''] },
            ]);
          } else {
            if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
              (s as any).minut = ((s as any).minut ?? 0) + 15;
              (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (1);
              (s as any).pcs_hairbsh = 1;
              (s as any).pcs_makeup = 1;
              (s as any).noshampoo = 1;
              qspCall(s, 'din_van', 'showerdin');
              scene.img('images/shared/home/bathroom/dush.mp4');
              scene.text('You go into the bathroom and turn on the shower, lathering body and washing as well as you can.');
              if (((s as any).deodorant_on ?? 0) === 1) {
                qspCall(s, 'sweat', 'remove_deo');
                scene.text('<br>Your deodorant gets washed away in the shower.');
              }
              scene.actions([
                { label: 'Leave', goto: ['dina', 'brodilr'] },
              ]);
            } else {
              if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
                // TODO-QSP: dynamic text: <<$npcdesc>> won't even let you go to the bathroom to clean up.
                scene.text(`${((s as any).npcdesc ?? 0)} won't even let you go to the bathroom to clean up.`);
                scene.actions([
                  { label: 'Leave', goto: ['dina', 'brodilr'] },
                ]);
              } else {
                if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 0  &&  ((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
                  ((s as any).npc_gentle ?? {})[String((s as any).npcID ?? 0)] = 1;
                  (s as any).cumspclnt = 4;
                  qspCall(s, 'cum_cleanup', '');
                  // TODO-QSP: dynamic text: You wash quickly in shower and <<$npcdesc>> begins to hurry you out.
                  scene.text(`You wash quickly in shower and ${((s as any).npcdesc ?? 0)} begins to hurry you out.`);
                  if (((s as any).deodorant_on ?? 0) === 1) {
                    qspCall(s, 'sweat', 'remove_deo');
                    scene.text('<br>Your deodorant gets washed away in the shower.');
                  }
                  scene.actions([
                    { label: 'Leave', goto: ['dina', 'brodilr'] },
                  ]);
                } else {
                  if (((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
                    if (((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
                      qspCall(s, 'money', 'earn', 300);
                    }
                    if (((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
                      qspCall(s, 'money', 'earn', 500);
                    }
                    // TODO-QSP: dynamic text: <<$npcdesc>> gives you money for a taxi and kicks you out of the apartment.
                    scene.text(`${((s as any).npcdesc ?? 0)} gives you money for a taxi and kicks you out of the apartment.`);
                    scene.actions([
                      { label: 'Leave', goto: ['dina', 'brodilr'] },
                    ]);
                  } else {
                    if (((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
                      // TODO-QSP: dynamic text: <<$npcdesc>> kicks you out of the apartment.
                      scene.text(`${((s as any).npcdesc ?? 0)} kicks you out of the apartment.`);
                      scene.actions([
                        { label: 'Leave', goto: ['dina', 'brodilr'] },
                      ]);
                    } else {
                      if ((!((s as any).GoToGuy ?? 0))) {
                        scene.actions([
                          { label: 'Leave', handler: (st: GameState) => {
    (s as any).tmpgorand = Math.floor(Math.random() * 3) + 0;
    if ((!((s as any).tmpgorand ?? 0))) {
      // TODO-QSP: killvar 'tmpgorand'
      scene.actions([{ label: 'Continue', goto: ['dina', 'brodilr'] }]);
    }
    if (((s as any).tmpgorand ?? 0) === 1) {
      // TODO-QSP: killvar 'tmpgorand'
      scene.actions([{ label: 'Continue', goto: ['city_center', ''] }]);
    }
    if (((s as any).tmpgorand ?? 0) === 2) {
      // TODO-QSP: killvar 'tmpgorand'
      scene.actions([{ label: 'Continue', goto: ['city_industrial', ''] }]);
    }
  } },
                        ]);
                      } else {
                        scene.actions([
                          { label: 'Leave', goto: ['dina', 'brodilr'] },
                        ]);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterOrg(s: GameState, scene: SceneBuilder): void {
  (s as any).protect = 0;
  if (((s as any).mc_inventory ?? 0)?.['contraceptive_pill'] <= 0  &&  ((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0) {
    qspCall(s, 'dina', 'prezik');
    (s as any).protect = 1;
    // TODO-QSP: dynamic text: <<$npcdesc>> takes a condom and puts it on his <<dick>> centimeter member.
    scene.text(`${((s as any).npcdesc ?? 0)} takes a condom and puts it on his ${((s as any).dick ?? 0)} centimeter member.`);
    if (((s as any).preziktype ?? 0) === 2) {
      (s as any).sexcontra = 7;
    } else {
      (s as any).sexcontra = 3;
    }
  } else {
    (s as any).sexcontra = 0;
  }
  if (((s as any).mesec ?? 0) > 0) {
    qspCall(s, 'mood', 'lower', 'small');
    // TODO-QSP: dynamic text: It is your time of the month and, as his member rams into you, vaginal blood flo...
    scene.text(`It is your time of the month and, as his member rams into you, vaginal blood flows slowly around his girth. Painful sensations and pleasure mix. You moan while his strong ${((s as any).dick ?? 0)} centimeter dick fucks your pussy.`);
    qspCall(s, 'stat', '');
  } else {
    if (((s as any).mesec ?? 0) <= 0  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      (s as any).smazka = ((s as any).pcs_horny ?? 0) / 10;
      (s as any).prinat = ((s as any).smazka ?? 0) + ((s as any).pcs_vag ?? 0);
      if (((s as any).dick ?? 0) >= ((s as any).prinat ?? 0) * 2) {
        if ((!((s as any).silavag ?? 0))) {
          (s as any).orgazm = 0;
        }
        if (((s as any).silavag ?? 0) === 1) {
          (s as any).orgazm = 1;
        }
        if (((s as any).silavag ?? 0) === 2) {
          (s as any).orgazm = 2;
        }
      } else {
        if (((s as any).dick ?? 0) < ((s as any).prinat ?? 0) * 2  &&  ((s as any).dick ?? 0) > ((s as any).prinat ?? 0)) {
          if ((!((s as any).silavag ?? 0))) {
            if (((s as any).pcs_horny ?? 0) >= 100) {
              (s as any).orgazm = 5;
            }
            if (((s as any).pcs_horny ?? 0) >= 90  &&  ((s as any).pcs_horny ?? 0) < 100) {
              (s as any).orgazm = 4;
            }
            if (((s as any).pcs_horny ?? 0) >= 80  &&  ((s as any).pcs_horny ?? 0) < 90) {
              (s as any).orgazm = 3;
            }
            if (((s as any).pcs_horny ?? 0) >= 70  &&  ((s as any).pcs_horny ?? 0) < 80) {
              (s as any).orgazm = 2;
            }
            if (((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).pcs_horny ?? 0) < 70) {
              (s as any).orgazm = 1;
            }
            if (((s as any).pcs_horny ?? 0) < 60) {
              (s as any).orgazm = 0;
            }
          } else {
            if (((s as any).silavag ?? 0) === 1) {
              if (((s as any).pcs_horny ?? 0) >= 90) {
                (s as any).orgazm = 5;
              }
              if (((s as any).pcs_horny ?? 0) >= 80  &&  ((s as any).pcs_horny ?? 0) < 90) {
                (s as any).orgazm = 4;
              }
              if (((s as any).pcs_horny ?? 0) >= 70  &&  ((s as any).pcs_horny ?? 0) < 80) {
                (s as any).orgazm = 3;
              }
              if (((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).pcs_horny ?? 0) < 70) {
                (s as any).orgazm = 2;
              }
              if (((s as any).pcs_horny ?? 0) >= 50  &&  ((s as any).pcs_horny ?? 0) < 60) {
                (s as any).orgazm = 1;
              }
              if (((s as any).pcs_horny ?? 0) < 50) {
                (s as any).orgazm = 0;
              }
            } else {
              if (((s as any).silavag ?? 0) === 2) {
                if (((s as any).pcs_horny ?? 0) >= 80) {
                  (s as any).orgazm = 5;
                }
                if (((s as any).pcs_horny ?? 0) >= 70  &&  ((s as any).pcs_horny ?? 0) < 80) {
                  (s as any).orgazm = 4;
                }
                if (((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).pcs_horny ?? 0) < 70) {
                  (s as any).orgazm = 3;
                }
                if (((s as any).pcs_horny ?? 0) >= 50  &&  ((s as any).pcs_horny ?? 0) < 60) {
                  (s as any).orgazm = 2;
                }
                if (((s as any).pcs_horny ?? 0) >= 40  &&  ((s as any).pcs_horny ?? 0) < 50) {
                  (s as any).orgazm = 1;
                }
                if (((s as any).pcs_horny ?? 0) < 40) {
                  (s as any).orgazm = 0;
                }
              }
            }
          }
        } else {
          if (((s as any).dick ?? 0) <= ((s as any).prinat ?? 0)  &&  ((s as any).dick ?? 0) >= ((s as any).pcs_vag ?? 0)) {
            if ((!((s as any).silavag ?? 0))) {
              if (((s as any).pcs_horny ?? 0) >= 80) {
                (s as any).orgazm = 5;
              }
              if (((s as any).pcs_horny ?? 0) >= 60  &&  ((s as any).pcs_horny ?? 0) < 80) {
                (s as any).orgazm = 4;
              }
              if (((s as any).pcs_horny ?? 0) >= 40  &&  ((s as any).pcs_horny ?? 0) < 60) {
                (s as any).orgazm = 3;
              }
              if (((s as any).pcs_horny ?? 0) < 40) {
                (s as any).orgazm = 2;
              }
            } else {
              if (((s as any).silavag ?? 0) === 1) {
                if (((s as any).pcs_horny ?? 0) >= 70) {
                  (s as any).orgazm = 5;
                }
                if (((s as any).pcs_horny ?? 0) >= 50  &&  ((s as any).pcs_horny ?? 0) < 70) {
                  (s as any).orgazm = 4;
                }
                if (((s as any).pcs_horny ?? 0) >= 30  &&  ((s as any).pcs_horny ?? 0) < 50) {
                  (s as any).orgazm = 3;
                }
                if (((s as any).pcs_horny ?? 0) < 30) {
                  (s as any).orgazm = 2;
                }
              } else {
                if (((s as any).silavag ?? 0) === 2) {
                  if (((s as any).pcs_horny ?? 0) >= 60) {
                    (s as any).orgazm = 5;
                  }
                  if (((s as any).pcs_horny ?? 0) >= 40  &&  ((s as any).pcs_horny ?? 0) < 60) {
                    (s as any).orgazm = 4;
                  }
                  if (((s as any).pcs_horny ?? 0) >= 20  &&  ((s as any).pcs_horny ?? 0) < 40) {
                    (s as any).orgazm = 3;
                  }
                  if (((s as any).pcs_horny ?? 0) < 20) {
                    (s as any).orgazm = 2;
                  }
                }
              }
            }
          } else {
            if (((s as any).dick ?? 0) <= ((s as any).prinat ?? 0)  &&  ((s as any).dick ?? 0) < ((s as any).pcs_vag ?? 0)) {
              if ((!((s as any).silavag ?? 0))) {
                if (((s as any).pcs_horny ?? 0) >= 100) {
                  (s as any).orgazm = 5;
                }
                if (((s as any).pcs_horny ?? 0) >= 90  &&  ((s as any).pcs_horny ?? 0) < 100) {
                  (s as any).orgazm = 4;
                }
                if (((s as any).pcs_horny ?? 0) < 90) {
                  (s as any).orgazm = 6;
                }
              } else {
                if (((s as any).silavag ?? 0) === 1) {
                  if (((s as any).pcs_horny ?? 0) >= 90) {
                    (s as any).orgazm = 5;
                  }
                  if (((s as any).pcs_horny ?? 0) >= 80  &&  ((s as any).pcs_horny ?? 0) < 90) {
                    (s as any).orgazm = 4;
                  }
                  if (((s as any).pcs_horny ?? 0) < 80) {
                    (s as any).orgazm = 6;
                  }
                } else {
                  if (((s as any).silavag ?? 0) === 2) {
                    if (((s as any).pcs_horny ?? 0) >= 80) {
                      (s as any).orgazm = 5;
                    }
                    if (((s as any).pcs_horny ?? 0) >= 70  &&  ((s as any).pcs_horny ?? 0) < 80) {
                      (s as any).orgazm = 4;
                    }
                    if (((s as any).pcs_horny ?? 0) < 70) {
                      (s as any).orgazm = 6;
                    }
                  }
                }
              }
            }
          }
        }
      }
      if ((!((s as any).orgazm ?? 0))) {
        qspCall(s, 'mood', 'lower', 'medium');
        // TODO-QSP: dynamic text: You groan in pain when <<$npcdesc>> enters you, tears flowing from your eyes as ...
        scene.text(`You groan in pain when ${((s as any).npcdesc ?? 0)} enters you, tears flowing from your eyes as you endure the feeling of having a red-hot rod between your legs. You cry and moan while his strong ${((s as any).dick ?? 0)} centimeter dick fucks your pussy.`);
        qspCall(s, 'arousal', 'vaginal', 5, 'sub');
        qspCall(s, 'stat', '');
      } else {
        if (((s as any).orgazm ?? 0) === 1) {
          qspCall(s, 'mood', 'lower', 'small');
          // TODO-QSP: dynamic text: You bite your lip in pain when <<$npcdesc>> enters you, a twinge of pain between...
          scene.text(`You bite your lip in pain when ${((s as any).npcdesc ?? 0)} enters you, a twinge of pain between your legs. Frowning, you moan in pain while his strong ${((s as any).dick ?? 0)} centimeter dick fucks your pussy.`);
          qspCall(s, 'arousal', 'vaginal', 5, 'sub');
          qspCall(s, 'stat', '');
        } else {
          if (((s as any).orgazm ?? 0) === 2) {
            qspCall(s, 'mood', 'lower', 'small');
            // TODO-QSP: dynamic text: You wince at the sudden pain when <<$npcdesc>> enters you, the pain between your...
            scene.text(`You wince at the sudden pain when ${((s as any).npcdesc ?? 0)} enters you, the pain between your legs gradually calms and becomes quite tolerable. You try to get aroused while his strong ${((s as any).dick ?? 0)} centimeter dick fucks your pussy, but it is not enough.`);
            qspCall(s, 'arousal', 'vaginal', 5, 'sub');
            qspCall(s, 'stat', '');
          } else {
            if (((s as any).orgazm ?? 0) === 3) {
              qspCall(s, 'mood', 'raise', 'tiny');
              // TODO-QSP: dynamic text: You are startled by the feeling as your pussy is stretched when <<$npcdesc>> ent...
              scene.text(`You are startled by the feeling as your pussy is stretched when ${((s as any).npcdesc ?? 0)} enters you. A shiver of pleasure starts from between your legs and travels up your spine as each stroke of his ${((s as any).dick ?? 0)} centimeter fucks into your pussy.`);
              qspCall(s, 'arousal', 'vaginal', 5, 'sub');
              qspCall(s, 'stat', '');
            } else {
              if (((s as any).orgazm ?? 0) === 4) {
                qspCall(s, 'mood', 'raise', 'tiny');
                // TODO-QSP: dynamic text: You are startled by the feeling as your pussy is stretched when <<$npcdesc>> ent...
                scene.text(`You are startled by the feeling as your pussy is stretched when ${((s as any).npcdesc ?? 0)} enters you. A shiver of pleasure starts from between your legs and travels up your spine as each stroke of his ${((s as any).dick ?? 0)} centimeter fucks into your pussy. Gradually a pleasant warmth and ripple grows in the lower abdomen, but the feeling never peaks, instead decreasing in strength even as it remains with you until the end.`);
                qspCall(s, 'arousal', 'vaginal', 5, 'sub');
                qspCall(s, 'stat', '');
              } else {
                if (((s as any).orgazm ?? 0) === 5) {
                  qspCall(s, 'mood', 'raise', 'tiny');
                  // TODO-QSP: dynamic text: You gasp at the feeling as your pussy spreads for his dick. Your groin becomes v...
                  scene.text(`You gasp at the feeling as your pussy spreads for his dick. Your groin becomes very warm and pleasant, when his strong ${((s as any).dick ?? 0)} centimeter dick hammers your pussy. Gradually the pleasant warmth ripples in your lower abdomen and then the feeling intensifies and your whole body tenses as the hot waves of orgasm rush over you. You can not help screaming in pleasure as you writhe under the sensation.`);
                  qspCall(s, 'arousal', 'vaginal', 5, 'sub');
                  qspCall(s, 'stat', '');
                } else {
                  if (((s as any).orgazm ?? 0) === 6) {
                    qspCall(s, 'mood', 'raise', 'tiny');
                    // TODO-QSP: dynamic text: You feel every centimeter as his member enters your pussy when <<$npcdesc>> slid...
                    scene.text(`You feel every centimeter as his member enters your pussy when ${((s as any).npcdesc ?? 0)} slides home. It is a pleasant feeling, but his dick is significantly smaller than you prefer and ${((s as any).dick ?? 0)} centimeter is not enough for you. Gradually, a pleasant ripples grows in your lower abdomen, but the feeling never rises to true orgasm.`);
                    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
                    qspCall(s, 'stat', '');
                  }
                }
              }
            }
          }
        }
      }
      if (((s as any).pcs_vag ?? 0) <= ((s as any).dick ?? 0)) {
        qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
      }
    } else {
      if (((s as any).stat ?? 0)?.['think_virgin'] === 1  &&  ((s as any).mesec ?? 0) <= 0) {
        qspCall(s, 'mood', 'lower', 'medium');
        // TODO-QSP: dynamic text: You bite your lip in pain and tears gush from your eyes when <<$npcdesc>> enters...
        scene.text(`You bite your lip in pain and tears gush from your eyes when ${((s as any).npcdesc ?? 0)} enters you, breaking your hymen. You moan while weeping as his strong ${((s as any).dick ?? 0)} centimeter dick fucks your bloody pussy.`);
        qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'rough');
        qspCall(s, 'stat', '');
      }
    }
  }
  if (((s as any).pcs_vag ?? 0) < ((s as any).dick ?? 0)) {
    qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
  }
  (s as any).cumprecheck = 1;
  (s as any).sexpartkno = 1;
  qspCall(s, 'cum_manage', '');
  scene.build();
}

function enterCum(s: GameState, scene: SceneBuilder): void {
  if (((s as any).protect ?? 0) !== 1) {
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      (s as any).sexpartkno = 1;
      qspCall(s, 'cum_manage', '');
      // TODO-QSP: dynamic text: <<$npcdesc>> groans and you feel each jet of sperm paint the walls of your womb ...
      scene.text(`${((s as any).npcdesc ?? 0)} groans and you feel each jet of sperm paint the walls of your womb with seed.`);
      qspCall(s, 'arousal', 'end');
      qspCall(s, 'mood', 'lower', 'medium');
      qspCall(s, 'cuminsidereact', '');
    } else {
      if ((!((s as any).pose ?? 0))) {
        (s as any).spafinloc = 14;
        (s as any).sexpartkno = 1;
        qspCall(s, 'cum_manage', '');
        // TODO-QSP: dynamic text: <<$npcdesc>> shouts, pulling out to finish on your stomach.
        scene.text(`${((s as any).npcdesc ?? 0)} shouts, pulling out to finish on your stomach.`);
        qspCall(s, 'arousal', 'end');
      } else {
        if (((s as any).pose ?? 0) === 1) {
          (s as any).spafinloc = 4;
          (s as any).sexpartkno = 1;
          qspCall(s, 'cum_manage', '');
          // TODO-QSP: dynamic text: <<$npcdesc>> shudders, pulling out just in time to paint your ass white with sem...
          scene.text(`${((s as any).npcdesc ?? 0)} shudders, pulling out just in time to paint your ass white with semen.`);
          qspCall(s, 'arousal', 'end');
        }
      }
    }
  } else {
    if (((s as any).protect ?? 0) === 1) {
      (s as any).protect = 0;
      if (((s as any).sexcontra ?? 0) === 4) {
        // TODO-QSP: dynamic text: <<$npcdesc>> groans and you feel heat building deep inside, and then a slimy fee...
        scene.text(`${((s as any).npcdesc ?? 0)} groans and you feel heat building deep inside, and then a slimy feeling. You realize that the condom burst.`);
        qspCall(s, 'arousal', 'end');
      } else {
        if (((s as any).sexcontra ?? 0) === 5) {
          // TODO-QSP: dynamic text: <<$npcdesc>> groans and you feel heat building deep inside. As he pulls out, you...
          scene.text(`${((s as any).npcdesc ?? 0)} groans and you feel heat building deep inside. As he pulls out, you feel a ghostly sensation, as if he didn't come all the way out. Looking down, you see his bare dick.`);
          qspCall(s, 'arousal', 'end');
        } else {
          // TODO-QSP: dynamic text: <<$npcdesc>> groans and you feel heat building deep inside. You realize that he ...
          scene.text(`${((s as any).npcdesc ?? 0)} groans and you feel heat building deep inside. You realize that he has filled the condom.`);
          qspCall(s, 'arousal', 'end');
        }
      }
      (s as any).sexcontra = 0;
    }
  }
  (s as any).pose = 0;
  scene.build();
}

function enterAutobj(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: Your little fingers caress his <<dick>> centimeter shaft before you take the hea...
  scene.text(`Your little fingers caress his ${((s as any).dick ?? 0)} centimeter shaft before you take the head into your mouth and begin to suck.`);
  qspCall(s, 'arousal', 'hj', 5, 'sub');
  qspCall(s, 'stat', '');
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    // TODO-QSP: dynamic text: <<$npcdesc>> closes his eyes in pleasure, enjoying the caress of your lips.
    scene.text(`${((s as any).npcdesc ?? 0)} closes his eyes in pleasure, enjoying the caress of your lips.`);
    qspCall(s, 'arousal', 'bj', 5, 'sub');
    qspCall(s, 'stat', '');
  } else {
    if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
        (s as any).pcs_makeup = 0;
      }
      (s as any).pcs_hairbsh = (-1);
      // TODO-QSP: dynamic text: <<$npcdesc>> grabs your hair and begins to fuck your mouth roughly, each thrust ...
      scene.text(`${((s as any).npcdesc ?? 0)} grabs your hair and begins to fuck your mouth roughly, each thrust strikes against the back of your throat as tears flow from your eyes.`);
      qspCall(s, 'arousal', 'bj', 5, 'sub', 'rough');
      qspCall(s, 'stat', '');
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> stares expectingly at you until your lips glide over his hard dick.
      scene.text(`${((s as any).npcdesc ?? 0)} stares expectingly at you until your lips glide over his hard dick.`);
      qspCall(s, 'arousal', 'bj', 5, 'sub');
      qspCall(s, 'stat', '');
    }
  }
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (((s as any).pcs_throat ?? 0) + 10 - (((s as any).willpowermax ?? 0) / 10));
  scene.text('His hard and hot cock slides into your wet mouth, filling it completely. Your lips are locked tightly around his dick in a lover\'s embrace.');
  if (((s as any).pcs_horny ?? 0) >= 100) {
    qspCall(s, 'mood', 'raise', 'tiny');
    scene.text('As you suck the dick before you, a fire smolders between your legs, building into a conflagration of orgasm. You moan around the cock in your mouth, never once slowing your pace.');
    qspCall(s, 'arousal', 'bj', (-5), 'sub');
    qspCall(s, 'stat', '');
  }
  scene.build();
}

function enterAn(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'dinsex', 'boy_wants_anal');
  // TODO-QSP: dynamic text: <<$npcdesc>> lays you on your stomach on the bed, spreading your ass apart as he...
  scene.text(`${((s as any).npcdesc ?? 0)} lays you on your stomach on the bed, spreading your ass apart as he begins to massage and open your anus with his fingers, first one, then two.`);
  qspCall(s, 'arousal', 'anal_finger', 5, 'sub');
  if (((s as any).pcs_ass ?? 0) < 10) {
    scene.text('You groan in pain as his third finger invades your ass.');
  } else {
    scene.text('You feel your asshole stretch to accommodate his third finger.');
  }
  // TODO-QSP: dynamic text: <<$npcdesc>> abruptly pulls his fingers out of your ass and you feel his hard co...
  scene.text(`${((s as any).npcdesc ?? 0)} abruptly pulls his fingers out of your ass and you feel his hard cock rest against your hole.`);
  if (((s as any).pcs_ass ?? 0) + ((s as any).lubonus ?? 0) < ((s as any).dick ?? 0)) {
    // TODO-QSP: dynamic text: You scream and bite your lip at the sharp pain when the <<dick>> member centimet...
    scene.text(`You scream and bite your lip at the sharp pain when the ${((s as any).dick ?? 0)} member centimeter enters your ass.`);
  }
  if (((s as any).pcs_ass ?? 0) + ((s as any).lubonus ?? 0) >= ((s as any).dick ?? 0)) {
    // TODO-QSP: dynamic text: You groan and a satisfying fullness spreads through you as the <<dick>> member c...
    scene.text(`You groan and a satisfying fullness spreads through you as the ${((s as any).dick ?? 0)} member centimeter dick forces its way into your ass.`);
  }
  // TODO-QSP: dynamic text: <<$npcdesc>> stops his assault for a moment, giving your ass time to adapt to th...
  scene.text(`${((s as any).npcdesc ?? 0)} stops his assault for a moment, giving your ass time to adapt to the cock invading it before he starts you again, this time even more insistent.`);
  qspCall(s, 'arousal', 'anal', 10, 'sub');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_ass ?? 0) + ((s as any).lubonus ?? 0) + 2 < ((s as any).dick ?? 0)) {
    if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
      (s as any).pcs_makeup = 0;
    }
    // TODO-QSP: dynamic text: You utter a muffled cry and bite down a pillow when his <<dick>> centimeter cock...
    scene.text(`You utter a muffled cry and bite down a pillow when his ${((s as any).dick ?? 0)} centimeter cock begins to fuck your ass full force.`);
    qspCall(s, 'arousal', 'anal', 10, 'sub');
    qspCall(s, 'stat', '');
  } else {
    if (((s as any).pcs_ass ?? 0) + ((s as any).lubonus ?? 0) + 2 >= ((s as any).dick ?? 0)) {
      scene.text('You start to moan rhythmically in time with thrusts of the dick buried in your ass.');
      qspCall(s, 'arousal', 'anal', 10, 'sub');
      qspCall(s, 'stat', '');
    }
  }
  scene.build();
}

function enterAncum(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: Finally <<$npcdesc>> grabs your tight ass and drives home, hilting his dick in y...
  scene.text(`Finally ${((s as any).npcdesc ?? 0)} grabs your tight ass and drives home, hilting his dick in your aching ass and slapping your pussy with his balls as he cums.`);
  (s as any).spafinloc = 3;
  (s as any).sexvolume = 20;
  (s as any).sexpartkno = 1;
  qspCall(s, 'cum_manage', '');
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  (s as any).spafinloc = 4;
  (s as any).sexvolume = 20;
  (s as any).sexpartkno = 1;
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'cum_manage', '');
  if (((s as any).pcs_ass ?? 0) < ((s as any).dick ?? 0)) {
    qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
  }
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + ((((s as any).pcs_ass ?? 0) - ((s as any).dick ?? 0)) * 3);
  if (((s as any).pcs_horny ?? 0) < 1) {
    (s as any).pcs_horny = 1;
  } else {
    if (((s as any).pcs_horny ?? 0) >= 100) {
      scene.text('A blazing fire of pleasure explodes from your ass and spreads in waves of ecstasy up your body. Moaning, you instinctively drive yourself to impale your ass on his dick.');
      qspCall(s, 'arousal', 'anal', (-5), 'sub');
      qspCall(s, 'stat', '');
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'kuni':
      enterKuni(s, scene);
      break;
    case 'sex':
      enterSex(s, scene);
      break;
    case 'sex2':
      enterSex2(s, scene);
      break;
    case 'sex3':
      enterSex3(s, scene);
      break;
    case 'anal':
      enterAnal(s, scene);
      break;
    case 'anal2':
      enterAnal2(s, scene);
      break;
    case 'anal3':
      enterAnal3(s, scene);
      break;
    case 'hj':
      enterHj(s, scene);
      break;
    case 'minet':
      enterMinet(s, scene);
      break;
    case 'facial':
      enterFacial(s, scene);
      break;
    case 'swallow':
      enterSwallow(s, scene);
      break;
    case 'end':
      enterEnd(s, scene);
      break;
    case 'org':
      enterOrg(s, scene);
      break;
    case 'cum':
      enterCum(s, scene);
      break;
    case 'autobj':
      enterAutobj(s, scene);
      break;
    case 'an':
      enterAn(s, scene);
      break;
    case 'ancum':
      enterAncum(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const BDsex: LocationDef = {
  name: 'BDsex',
  title: 'You undress and lay on the bed, bringing his face to your pu',
  region: 'other',
  enter: enter,
};
