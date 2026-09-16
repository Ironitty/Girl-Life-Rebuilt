import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  // TODO-QSP: dynamic text: You arrive at the cafe and sit at a table. <<$npcdesc>> orders food and wine. Wh...
  scene.text(`You arrive at the cafe and sit at a table. ${((s as any).npcdesc || '')} orders food and wine. While you wait for the food to arrive, ${((s as any).npcdesc || '')} tells you an anecdote:<br>`);
  qspCall(s, 'anekdot', '');
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] > 25) {
      qspCall(s, 'boylove', 'tits');
    }
    if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] > 30) {
      qspCall(s, 'boylove', 'figure');
    }
  } else {
    if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] > 20) {
        qspCall(s, 'boylove', 'tits');
      }
      if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] > 25) {
        qspCall(s, 'boylove', 'figure');
      }
    } else {
      if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] > 15) {
        qspCall(s, 'boylove', 'tits');
      }
      if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] > 20) {
        qspCall(s, 'boylove', 'figure');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Laugh', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
    // TODO-QSP: xgt 'kafeM', 'a'
  } },
    { label: 'Smile', handler: (st: GameState) => {
    // TODO-QSP: xgt 'kafeM', 'a'
  } },
    { label: 'Not funny', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
    // TODO-QSP: xgt 'kafeM', 'a'
  } },
  ]);
  scene.build();
}

function enterA(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  if (((s as any).pcs_hydra ?? 0) >= 100) {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (5);
  } else {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (10);
  }
  (s as any).fat = ((s as any).fat ?? 0) + (1);
  // TODO-QSP: dynamic text: Finally the food is served. <<$npcdesc>> pours you wine and proposes a toast to ...
  scene.text(`Finally the food is served. ${((s as any).npcdesc || '')} pours you wine and proposes a toast to you.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Eat', handler: (st: GameState) => {
    // TODO-QSP: xgt 'kafeM', 'b'
  } },
  ]);
  scene.build();
}

function enterB(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'food', 'medium_meal_stats');
  // TODO-QSP: dynamic text: Music begins to play in the cafe and <<$npcdesc>> asks if you would like to danc...
  scene.text(`Music begins to play in the cafe and ${((s as any).npcdesc || '')} asks if you would like to dance.`);
  qspCall(s, 'willpower', 'misc', 'resist', 'easy');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
    qspGoto(s, 'kafeM', 'end');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Dance', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
  }, goto: ['kafeM', 'dance'] },
  ]);
  scene.build();
}

function enterDance(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.img('images/pc/activities/dance.jpg');
  // TODO-QSP: dynamic text: You go with <<$npcdesc>> to the dance floor. He puts his arms around you and you...
  scene.text(`You go with ${((s as any).npcdesc || '')} to the dance floor. He puts his arms around you and you start to dance.`);
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    // TODO-QSP: dynamic text: <<$npcdesc>> is very reserved in his dance. He holds you a bit awkwardly and apo...
    scene.text(`${((s as any).npcdesc || '')} is very reserved in his dance. He holds you a bit awkwardly and apologizes.`);
    scene.actions([
      { label: 'Finish the dance', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
    // TODO-QSP: xgt 'kafeM', 'end'
  } },
    ]);
  } else {
    if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      // TODO-QSP: dynamic text: <<$npcdesc>> leads you confidently in the dance.
      scene.text(`${((s as any).npcdesc || '')} leads you confidently in the dance.`);
      scene.actions([
        { label: 'Finish the dance', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
    // TODO-QSP: xgt 'kafeM', 'end'
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> grabs your ass while dancing and presses against you. You can feel ...
      scene.text(`${((s as any).npcdesc || '')} grabs your ass while dancing and presses against you. You can feel his hard cock against your stomach through the clothes.`);
      scene.text('He whispers to you, Let\'s go to the toilet.');
      qspCall(s, 'willpower', 'sex', 'resist', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Finish the dance', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Finish the dance', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
    qspGoto(s, 'kafeM', 'end');
  } },
        ]);
      }
      scene.actions([
        { label: 'Go to the toilet', handler: (st: GameState) => {
    // TODO-QSP: xgt 'kafeM', 'tualet'
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterTualet(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: <<$npcdesc>> pulls you inside the toilet and begins to knead your chest as you g...
  scene.text(`${((s as any).npcdesc || '')} pulls you inside the toilet and begins to knead your chest as you get ready for the act.`);
  qspCall(s, 'arousal', 'foreplay', 5);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Give blowjob', goto: ['kafeM', 'bj'] },
    { label: 'Bend over the toilet', goto: ['kafeM', 'sex'] },
  ]);
  scene.build();
}

function enterSex(s: GameState, scene: SceneBuilder): void {
  (s as any).sexa = ((s as any).sexa ?? 0) + (1);
  qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
  scene.img('images/characters/city/boyfriend/sex/event/cafe/kafe.jpg');
  // TODO-QSP: dynamic text: You pull his dick out of his pants and start masturbating him. <<$npcdesc>> puts...
  scene.text(`You pull his dick out of his pants and start masturbating him. ${((s as any).npcdesc || '')} puts on a condom, then makes you stand over the toilet and pushes his ${((s as any).dick || '')} centimeter member in your quivering pussy.`);
  qspCall(s, 'arousal', 'vaginal', 15, 'sub');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: dynamic text: Soon <<$npcdesc>> can no longer hold back and finishes in a condom.
  scene.text(`Soon ${((s as any).npcdesc || '')} can no longer hold back and finishes in a condom.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Next', goto: ['kafeM', 'end'] },
  ]);
  scene.build();
}

function enterBj(s: GameState, scene: SceneBuilder): void {
  (s as any).bja = ((s as any).bja ?? 0) + (1);
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0), 1);
  qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
  scene.img('images/characters/city/boyfriend/sex/event/cafe/kafe1.jpg');
  // TODO-QSP: dynamic text: You pull his dick out of his pants and start masturbating him, then squat in fro...
  scene.text(`You pull his dick out of his pants and start masturbating him, then squat in front of him and take him in your mouth, slowly sucking his ${((s as any).dick || '')} centimeter member.`);
  // TODO-QSP: dynamic text: Soon <<$npcdesc>> can not resist any longer and finishes in your mouth, filling ...
  scene.text(`Soon ${((s as any).npcdesc || '')} can not resist any longer and finishes in your mouth, filling it with his tart semen. You try to swallow it all, but cum still pours out of your mouth, running down your lips and chin.`);
  // TODO-QSP: dynamic text: You faithfully look <<$npcdesc>> in the eyes with your semen smeared face.
  scene.text(`You faithfully look ${((s as any).npcdesc || '')} in the eyes with your semen smeared face.`);
  qspCall(s, 'arousal', 'bj', 15, 'sub');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Next', goto: ['kafeM', 'end'] },
  ]);
  scene.build();
}

function enterEnd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: <<$npcdesc>> offers to hold you.
  scene.text(`${((s as any).npcdesc || '')} offers to hold you.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Home', goto: ['sexm', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'a':
      enterA(s, scene);
      break;
    case 'b':
      enterB(s, scene);
      break;
    case 'dance':
      enterDance(s, scene);
      break;
    case 'tualet':
      enterTualet(s, scene);
      break;
    case 'sex':
      enterSex(s, scene);
      break;
    case 'bj':
      enterBj(s, scene);
      break;
    case 'end':
      enterEnd(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const kafeM: LocationDef = {
  name: 'kafeM',
  region: 'other',
  enter: enter,
};
