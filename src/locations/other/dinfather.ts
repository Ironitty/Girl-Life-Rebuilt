import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterFatherAct1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_horny ?? 0) >= 40  ||  ((s as any).TouchedByFather ?? 0)===1) {
    scene.actions([
      { label: 'You feel like teasing him', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'flashlite', 5);
    qspCall(s, 'arousal', 'end');
    scene.img('images/shared/sex/exhibitionism/fatherim30.jpg');
    // TODO-QSP: dynamic text: In a moment of horniness, you slowly and teasingly bend over with a playful smil...
    scene.text(`In a moment of horniness, you slowly and teasingly bend over with a playful smile on your lips, providing your stepfather with an amazing view of your ${((s as any).titsize ?? 0)} breasts.`);
    if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) < 60) {
      (s as any).fatherLust = 2;
    }
    if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) >= 60  &&  ((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) < 120) {
      (s as any).fatherLust = 0;
    }
    if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) >= 120  &&  ((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) < 200) {
      (s as any).fatherLust = 0;
    }
    if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) >= 200  ||  ((s as any).TouchedByFather ?? 0)===1) {
      (s as any).fatherLust = 1;
    }
    if (((s as any).fatherLust ?? 0)>=2) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (Math.floor(Math.random() * 5) + 1);
      qspCall(s, 'stat', '');
      scene.text('Your stepfather is clearly embarrassed, and surprised you would do such a thing. He clears his throat loudly and looks at you disapprovingly, and the silence that follows makes you feel a bit uncomfortable.');
    }
    if (((s as any).fatherLust ?? 0)===1) {
      scene.text('Even though he did not expect this from you, you can tell by the spark in his eyes and his heavier breathing that he definitely likes what he sees.');
    }
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterFatherAct2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_horny ?? 0) >= 60  ||  ((s as any).TouchedByFather ?? 0)===1) {
    scene.actions([
      { label: 'Stare at his groin as you talk', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic', 5, 'incest');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim28.jpg');
    scene.text('Unable to stop yourself, you stare at his groin and notice the outline of his erect cock through the fabric. Absent-mindedly you bring a hand to your breasts and knead it gently, letting out a barely audible moan.');
    if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) < 60) {
      (s as any).fatherLust = 2;
    }
    if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) >= 60  &&  ((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) < 120) {
      (s as any).fatherLust = 0;
    }
    if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) >= 120  &&  ((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) < 200) {
      (s as any).fatherLust = 0;
    }
    if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) >= 200  ||  ((s as any).TouchedByFather ?? 0)===1) {
      (s as any).fatherLust = 1;
    }
    if (((s as any).fatherLust ?? 0)>=2) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (Math.floor(Math.random() * 5) + 1);
      qspCall(s, 'stat', '');
      scene.text('Even though your body is definitely having an effect on him your stepfather is clearly embarrassed, and surprised you would do such a thing. He clears his throat loudly and looks at you disapprovingly, and the silence that follows makes you feel a bit uncomfortable.');
    }
    if (((s as any).fatherLust ?? 0)===1) {
      scene.text('Your acts have derailed his train of thought, and your stepfather just mumbles something unintelligible as he devours you with his eyes. You can tell from his look that he wants you.');
    }
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterFatherAct3(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_horny ?? 0) >= 80  ||  ((s as any).TouchedByFather ?? 0)===1) {
    scene.actions([
      { label: 'Spread your legs', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'flash', 5);
    qspCall(s, 'arousal', 'end');
    scene.text('You, while pretending to not notice, slowly spread your legs as you talk.');
    if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) < 60) {
      (s as any).fatherLust = 2;
    }
    if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) >= 60  &&  ((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) < 120) {
      (s as any).fatherLust = 0;
    }
    if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) >= 120  &&  ((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) < 200) {
      (s as any).fatherLust = 0;
    }
    if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) >= 200  ||  ((s as any).TouchedByFather ?? 0)===1) {
      (s as any).fatherLust = 1;
    }
    if (((s as any).fatherLust ?? 0) >= 2) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (Math.floor(Math.random() * 5) + 1);
      qspCall(s, 'stat', '');
      if (((s as any).pantyworntype ?? 0) !== 'none') {
        scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim31.jpg');
      } else {
        scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim24.jpg');
      }
    } else {
      (s as any).TouchedByFather = 1;
      if (((s as any).pantyworntype ?? 0) !== 'none') {
        scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim20.jpg');
      } else {
        scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim26.jpg');
      }
    }
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterFather1(s: GameState, scene: SceneBuilder): void {
  scene.text('You try to have a conversation with your stepfather, but he dislikes you too much to even pretend to be interested in what you have to say.');
  if (((s as any).sorryday ?? 0)!==((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Apologize', handler: (st: GameState) => {
    (s as any).sorryday = ((s as any).daystart ?? 0);
    (s as any).npc_rel['A28'] = ((s as any).npc_rel['A28'] ?? 0) + ((((s as any).pcs_intel ?? 0)/10)+(((s as any).pcs_apprnc ?? 0)/20));
    qspCall(s, 'stat', '');
    scene.text('You profusely apologize to your stepfather, and after a while you can tell his attitude towards you is slightly milder.');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterFather2(s: GameState, scene: SceneBuilder): void {
  scene.text('You try to have a conversation with your stepfather, but he\'s not really interested and barely has anything to contribute while you do all the talking.');
  if (((s as any).sorryday ?? 0)!==((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Try to get on his good side', handler: (st: GameState) => {
    (s as any).sorryday = ((s as any).daystart ?? 0);
    (s as any).npc_rel['A28'] = ((s as any).npc_rel['A28'] ?? 0) + ((((s as any).pcs_intel ?? 0)/10)+(((s as any).pcs_apprnc ?? 0)/20));
    qspCall(s, 'stat', '');
    scene.text('You spend some time trying to get on your stepfather\'s good side, and you feel like he likes you a bit more after you show interest in the things he enjoys.');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterFather3(s: GameState, scene: SceneBuilder): void {
  (s as any).fatherTalk = 0;
  if (((s as any).fatherTalk ?? 0) === 1) {
    scene.text('You enjoy a short talk with your stepfather.');
  } else {
    scene.text('You ask your stepfather how he met your mother. Your stepfather scratches his slightly balding head and replies: "I used to work as a taxi driver back then, drove your mother to places from time to time and we got along very well. Natasha is a strong and independent woman, raising you and Anya all by herself after she left your father. I didn\'t know him very well, I\'ve only met him a couple of times. All I know is that his name is Mikhail Kuznetsov, and that he moved to a different city soon after he and your mother divorced."');
    if (((s as any).fatherTalk ?? 0) === 3) {
      scene.text('You ask your stepfather about his work. Your stepfather reaches for his aching joints, with a grimace on his face. "I used to be a taxi driver. It was hard work though, often working many hours a day, and it could be dangerous too. With some money we saved up I bought a Gazelle pickup truck, and now I drive that selling goods and making deliveries. As you know I have two garages; one for our Volga, and the other one for the Gazelle."');
    } else {
      scene.text('Your stepfather tells you a funny story.');
      if (((s as any).fatherTalk ?? 0) === 5) {
        scene.text('Your stepfather tells you a funny joke.');
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'father act 1':
      enterFatherAct1(s, scene);
      break;
    case 'father act 2':
      enterFatherAct2(s, scene);
      break;
    case 'father act 3':
      enterFatherAct3(s, scene);
      break;
    case 'father 1':
      enterFather1(s, scene);
      break;
    case 'father 2':
      enterFather2(s, scene);
      break;
    case 'father 3':
      enterFather3(s, scene);
      break;
    default:
      enterFatherAct1(s, scene);
      break;
  }
}

export const dinfather: LocationDef = {
  name: 'dinfather',
  title: 'You try to have a conversation with your stepfather, but he ',
  region: 'other',
  enter: enter,
};
