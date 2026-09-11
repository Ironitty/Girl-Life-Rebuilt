import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

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
      if (((s as any).fatherLust ?? 0) === 1) {
        (s as any).TouchedByFather = 1;
        if (((s as any).pantyworntype ?? 0) !== 'none') {
          scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim20.jpg');
        } else {
          scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim26.jpg');
        }
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
    ((s as any).npc_rel ?? {})['A28'] = (((s as any).npc_rel ?? {})['A28'] ?? 0) + ((((s as any).pcs_intel ?? 0)/10)+(((s as any).pcs_apprnc ?? 0)/20));
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
    ((s as any).npc_rel ?? {})['A28'] = (((s as any).npc_rel ?? {})['A28'] ?? 0) + ((((s as any).pcs_intel ?? 0)/10)+(((s as any).pcs_apprnc ?? 0)/20));
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
    if (((s as any).fatherTalk ?? 0) === 2) {
      scene.text('You ask your stepfather how he met your mother. Your stepfather scratches his slightly balding head and replies: "I used to work as a taxi driver back then, drove your mother to places from time to time and we got along very well. Natasha is a strong and independent woman, raising you and Anya all by herself after she left your father. I didn\'t know him very well, I\'ve only met him a couple of times. All I know is that his name is Mikhail Kuznetsov, and that he moved to a different city soon after he and your mother divorced."');
    } else {
      if (((s as any).fatherTalk ?? 0) === 3) {
        scene.text('You ask your stepfather about his work. Your stepfather reaches for his aching joints, with a grimace on his face. "I used to be a taxi driver. It was hard work though, often working many hours a day, and it could be dangerous too. With some money we saved up I bought a Gazelle pickup truck, and now I drive that selling goods and making deliveries. As you know I have two garages; one for our Volga, and the other one for the Gazelle."');
      } else {
        if (((s as any).fatherTalk ?? 0) === 4) {
          scene.text('Your stepfather tells you a funny story.');
        } else {
          if (((s as any).fatherTalk ?? 0) === 5) {
            scene.text('Your stepfather tells you a funny joke.');
          }
        }
      }
    }
  }
  scene.build();
}

function enterFather4(s: GameState, scene: SceneBuilder): void {
  (s as any).talkrand = Math.floor(Math.random() * 100) + 1;
  if (((s as any).talkrand ?? 0) >= 20) {
    qspCall(s, 'dinfather', 'father 3');
  } else {
    if (((s as any).talkrand ?? 0) < 20) {
      scene.text('You relax and share funny stories with your stepfather.');
      if (((s as any).npc_rel ?? 0)?.['A28']>=40  &&  ((s as any).npc_rel ?? 0)?.['A28']<60) {
        (s as any).FatherMolest = Math.floor(Math.random() * 8) + 1;
      }
      if (((s as any).npc_rel ?? 0)?.['A28']>=60  &&  ((s as any).npc_rel ?? 0)?.['A28']<80) {
        (s as any).FatherMolest = Math.floor(Math.random() * 4) + 1;
      }
      if (((s as any).npc_rel ?? 0)?.['A28']>=80) {
        (s as any).FatherMolest = Math.floor(Math.random() * 2) + 1;
      }
      if (((s as any).FatherMolest ?? 0)===1) {
        qspCall(s, 'dinfather', 'father act 1');
        qspCall(s, 'dinfather', 'father act 2');
        qspCall(s, 'dinfather', 'father act 3');
      } else {
        qspCall(s, 'dinfather', 'father 3');
      }
    }
  }
  scene.build();
}

function enterGarAct1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_horny ?? 0) >= 50  ||  ((s as any).TouchedByFather ?? 0)===1) {
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
  } else {
    qspCall(s, 'dinfather', 'garchat');
  }
  scene.build();
}

function enterGarAct2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_horny ?? 0) >= 90  ||  ((s as any).TouchedByFather ?? 0)===1) {
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
  } else {
    qspCall(s, 'dinfather', 'garchat');
  }
  scene.build();
}

function enterGarAct3(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_horny ?? 0) >= 100  ||  ((s as any).TouchedByFather ?? 0)===1) {
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
    if (((s as any).fatherLust ?? 0)>=2) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (Math.floor(Math.random() * 5) + 1);
      qspCall(s, 'stat', '');
      if (((s as any).pantyworntype ?? 0) !== 'none') {
        // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/pavlovsk/resident/vladimir/sex...
        scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/pavlovsk/resident/vladimir/sex/fatherim31.jpg"></center>`);
        // TODO-QSP: dynamic text: You notice your stepfather's eyes darting down while you talk, and suddenly his ...
        scene.text(`You notice your stepfather's eyes darting down while you talk, and suddenly his face turns beet red. You look down and notice your skimpy underwear did a very poor job of hiding your pussy. Your stepfather is clearly embarrassed and surprised. He loudly clears his throat and says "${((s as any).pcs_nickname ?? 0)} don't do that, that's no way for a lady to behave. And go put some normal underwear on."`);
      }
      if (((s as any).pantyworntype ?? 0) === 'none') {
        // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/pavlovsk/resident/vladimir/sex...
        scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/pavlovsk/resident/vladimir/sex/fatherim24.jpg"></center>`);
        // TODO-QSP: dynamic text: You notice your stepfather's eyes darting down while you talk, and suddenly his ...
        scene.text(`You notice your stepfather's eyes darting down while you talk, and suddenly his face turns beet red. "What's wrong?" you ask him innocently, knowing full well you're not wearing underwear and that he has a great view of your bare pussy. You're not fooling him though, and he doesn't appreciate your teasing in the slightest. "${((s as any).pcs_nickname ?? 0)}, stop that at once and go put some pants on."`);
      }
    }
    if (((s as any).fatherLust ?? 0)===1) {
      if (((s as any).pantyworntype ?? 0) !== 'none') {
        // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/pavlovsk/resident/vladimir/sex...
        scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/pavlovsk/resident/vladimir/sex/fatherim20.jpg"></center>`);
        // TODO-QSP: dynamic text: Your stepfather realizes what you're up to and pulls you closer to him, desire b...
        scene.text(`Your stepfather realizes what you're up to and pulls you closer to him, desire burning in his eyes. He runs his hands over your ass cheeks and thighs, petting and kneading them, and then pushes your panties to the side. Two of his fingers are exploring your sphincter, rubbing and teasing you. "Is there something you want, ${((s as any).pcs_nickname ?? 0)}?" he asks with a smug grin on his face, knowing he turned the tables on you. All you can do is whimper in response.`);
      }
      if (((s as any).pantyworntype ?? 0) === 'none') {
        // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/pavlovsk/resident/vladimir/sex...
        scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/pavlovsk/resident/vladimir/sex/fatherim26.jpg"></center>`);
        // TODO-QSP: dynamic text: Your stepfather gets a glimpse of your bare pussy and realizes what you're up to...
        scene.text(`Your stepfather gets a glimpse of your bare pussy and realizes what you're up to. "${((s as any).pcs_nickname ?? 0)}… are you not wearing panties? Get down on the ground and spread your legs for me, Daddy has to know now." You do as he says, lie down on the ground and spread your legs wide. He kneels in front of you, pulls your clothes to the side and rubs your pussy and thighs with his rough hands. "Just as I thought, you little minx!" he says with a grin on his face. After he had his fun he helps you get back up and even helps you straighten your clothes, his hands lingering on your hips and ass a few seconds longer than is needed.`);
      }
    }
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  } else {
    qspCall(s, 'dinfather', 'garchat');
  }
  scene.build();
}

function enterWatchtvAct1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_horny ?? 0) >= 0  ||  ((s as any).TouchedByFather ?? 0)===1) {
    scene.actions([
      { label: 'Lean your head against his chest', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'flashlite', 5);
    qspCall(s, 'arousal', 'end');
    scene.text('Soon after you join your stepfather on the couch to watch TV, you feel a bit sleepy. You snuggle up against your stepfather\'s chest and close your eyes.');
    if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) < 60) {
      (s as any).fatherLust = 2;
    }
    if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) >= 60  &&  ((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) < 120) {
      (s as any).fatherLust = 0;
    }
    if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) >= 80  &&  ((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) < 200) {
      (s as any).fatherLust = 0;
    }
    if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) >= 120  ||  ((s as any).TouchedByFather ?? 0)===1) {
      (s as any).fatherLust = 1;
    }
    if (((s as any).fatherLust ?? 0)>=2) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (Math.floor(Math.random() * 5) + 1);
      qspCall(s, 'stat', '');
      scene.text('Your stepfather does not like you getting so close to him, and pushes you away.');
    } else {
      if (((s as any).fatherLust ?? 0)===1) {
        scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim22.jpg');
        scene.text('The warmth of his body and his musky smell make you feel aroused, and you suddenly don\'t feel tired any more. Enjoying your comfy position and closeness to him, you stay put and pretend to be asleep while sexy thoughts race through your mind.');
      }
    }
    (s as any).fatherWantsToTouch = Math.floor(Math.random() * 2) + 1;
    if (((s as any).fatherWantsToTouch ?? 0)===1) {
      // TODO-QSP: dynamic text: As you lay against him with your eyes closed, you feel his arm shifting. Seconds...
      scene.text(`As you lay against him with your eyes closed, you feel his arm shifting. Seconds later you feel his hand on your hip, slowly moving its way up until he rests it on your ${((s as any).titsize ?? 0)} breasts. He keeps his hand there, gently kneading them as he watches TV. You do your best to stay still, but your heart is racing and you rapidly feel your pussy moisten.`);
      scene.actions([
        { label: 'Stay still and see if he goes any further', handler: (st: GameState) => {
    (s as any).pcs_horny = 0;
    qspCall(s, 'stat', '');
    (s as any).TouchedByFather = 1;
    scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim18.jpg');
    // TODO-QSP: dynamic text: Biting your lip, you lie quietly on the chest of your stepfather and enjoy his c...
    scene.text(`Biting your lip, you lie quietly on the chest of your stepfather and enjoy his caresses, restraining your moans. Slowly but surely he focuses more on your nipples, pinching them and tugging at them. You do your best to stay quiet, but it's getting more and more difficult. Then you hear him let out a chuckle, and he whispers "${((s as any).pcs_nickname ?? 0)}, I know you're not sleeping."`);
    if (((s as any).npc_had_sex ?? 0)?.['A28']  &&  ((s as any).locat ?? 0)?.['Mom_athome'] === 0) {
      scene.actions([
        { label: 'Take it further', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim21.jpg');
    scene.text('You open your eyes and notice the large bulge in his pants. As you turn your head and give him a sweet smile, you put your hand on the bulge and gently start to pet it. Your stepfather, without hesitation, unbuttons his pants and pulls out his dick. You, also without hesitation, lower your head and give it a lick.');
    scene.actions([
      { label: 'Get down on your knees', handler: (st: GameState) => {
    qspCall(st, 'fathersex', 'fatherblow4');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).fatherWantsToTouch ?? 0)===2) {
        scene.text('You slowly feel his hand work its way down to your ass, kneading it firmly.');
        scene.actions([
          { label: 'Stay still and see if he goes any further', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', (-15), 'incest');
    qspCall(s, 'arousal', 'anal_finger', (-15), 'incest');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    (s as any).TouchedByFather = 1;
    qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/pavlovsk/resident/vladimir/sex...
      scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/pavlovsk/resident/vladimir/sex/fatherim17.jpg"></center>`);
      // TODO-QSP: dynamic text: Not noticing any reluctance from you, your stepfather continues his kneading and...
      scene.text(`Not noticing any reluctance from you, your stepfather continues his kneading and then slides his hands underneath your clothes. His sexual preference is abundantly clear: he immediately searches out your tight asshole, and gently rubs his finger against it. Unable to help yourself you begin to gyrate your hips to mimic his movements, trying to stifle your moans. He notices anyway: the pressure of his finger against your sphincter grows, and his decisive actions make you realize he has no intentions of stopping there. When his finger penetrates you, you can't hold back your moans any longer. He chuckles and whispers: "I knew you were awake all along ${((s as any).pcs_nickname ?? 0)}, just relax and enjoy."`);
    }
    if (((s as any).pantyworntype ?? 0) === 'none') {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/pavlovsk/resident/vladimir/sex...
      scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/pavlovsk/resident/vladimir/sex/fatherim16.jpg"></center>`);
      scene.text('When his hand slips under your clothes, you feel his fingers feeling around for a second, grasping for something that isn\'t there. He was clearly expecting panties, and is confused by the lack of them. When he realizes you\'re not wearing any his actions grow bolder, and soon feel two fingers rubbing up against your asshole with the intention of going in. You adjust your hips slightly to grant him easier access, which he recognizes as a sign of consent and increases the pressure on your sphincter, pushing his two fingers in slowly but surely.');
    }
    if (((s as any).npc_had_sex ?? 0)?.['A28']  &&  ((s as any).locat ?? 0)?.['Mom_athome'] === 0) {
      scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim21.jpg');
      scene.text('You open your eyes and notice the large bulge in his pants. As you turn your head and give him a sweet smile, you put your hand on the bulge and gently start to pet it. Your stepfather, without hesitation, unbuttons his pants and pulls out his dick. You, also without hesitation, lower your head and give it a lick.');
      scene.actions([
        { label: 'Get down on your knees', handler: (st: GameState) => {
    qspCall(st, 'fathersex', 'fatherblow4');
  } },
      ]);
    }
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
        ]);
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

function enterWatchtvAct2(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Stare at his groin', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic', 5, 'incest');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim28.jpg');
    scene.text('Unable to stop yourself, you stare at his groin and notice the outline of his erect cock through the fabric. Absent-mindedly you bring a hand to your breasts and knead them gently, letting out a barely audible moan.');
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
    } else {
      if (((s as any).fatherLust ?? 0)===1) {
        scene.text('Your acts have derailed his train of thought, and your stepfather just mumbles something unintelligible as he devours you with his eyes. You can tell from his look that he wants you.');
      }
    }
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterWatchtvAct3(s: GameState, scene: SceneBuilder): void {
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
    if (((s as any).fatherLust ?? 0)>=2) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (Math.floor(Math.random() * 5) + 1);
      qspCall(s, 'stat', '');
      if (((s as any).pantyworntype ?? 0) !== 'none') {
        // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/pavlovsk/resident/vladimir/sex...
        scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/pavlovsk/resident/vladimir/sex/fatherim19.jpg"></center>`);
        scene.text('Your stepfather is clearly embarrassed, and surprised you would do such a thing. He reaches over to your clothes and adjusts them so they cover your panties, and sends you off.');
      }
      if (((s as any).pantyworntype ?? 0) === 'none') {
        // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/pavlovsk/resident/vladimir/sex...
        scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/pavlovsk/resident/vladimir/sex/fatherim32.jpg"></center>`);
        // TODO-QSP: dynamic text: You notice your stepfather's eyes darting down while you talk, and suddenly his ...
        scene.text(`You notice your stepfather's eyes darting down while you talk, and suddenly his face turns beet red. "What's wrong?" you ask him innocently, knowing full well you're not wearing underwear and that he has a great view of your bare pussy. You're not fooling him though, and he doesn't appreciate your teasing in the slightest. "${((s as any).pcs_nickname ?? 0)}, stop that at once and go put some pants on."`);
      }
    } else {
      if (((s as any).fatherLust ?? 0)===1) {
        if (((s as any).pantyworntype ?? 0) !== 'none') {
          // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/pavlovsk/resident/vladimir/sex...
          scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/pavlovsk/resident/vladimir/sex/fatherim20.jpg"></center>`);
          // TODO-QSP: dynamic text: Your stepfather realizes what you're up to and pulls you closer to him, desire b...
          scene.text(`Your stepfather realizes what you're up to and pulls you closer to him, desire burning in his eyes. He runs his hands over your ass cheeks and thighs, petting and kneading them, and then pushes your panties to the side. Two of his fingers are exploring your sphincter, rubbing and teasing you. "Is there something you want, ${((s as any).pcs_nickname ?? 0)}?" he asks with a smug grin on his face, knowing he turned the tables on you. All you can do is whimper in response.`);
        }
        if (((s as any).pantyworntype ?? 0) === 'none') {
          // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/pavlovsk/resident/vladimir/sex...
          scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/pavlovsk/resident/vladimir/sex/fatherim25.jpg"></center>`);
          scene.text('Judging from your stepfather\'s reddening face, you think your actions are definitely having an effect on him. Your stepfather grabs you around your hips without another word, pulls you down over his lap and sticks a finger deep in your soaking wet pussy. You let out a needy moan, and feel a tinge of regret when he pulls out and pretends as if nothing happened with a smug grin on his face. Realising he\'s not going to go any further you straighten your clothes and try to pretend it\'s okay, even though your throbbing pussy begs to differ.');
        }
      }
    }
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterWatchtv1(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: You try to cuddle up against him on the couch, but he roughly shoves you off the...
  scene.text(`You try to cuddle up against him on the couch, but he roughly shoves you off the couch. As your ass hits the ground he scowls at you: "${((s as any).pcs_nickname ?? 0)}, what the hell are you doing?" He can't stand the thought of being anywhere near you. You rub your sensitive ass with a slight pout on your face and consider your next move.`);
  if (((s as any).sorryday ?? 0)!==((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Apologize', handler: (st: GameState) => {
    (s as any).sorryday = ((s as any).daystart ?? 0);
    ((s as any).npc_rel ?? {})['A28'] = (((s as any).npc_rel ?? {})['A28'] ?? 0) + ((((s as any).pcs_intel ?? 0)/10)+(((s as any).pcs_apprnc ?? 0)/20));
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim36.jpg');
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

function enterWatchtv2(s: GameState, scene: SceneBuilder): void {
  scene.text('As you try to cuddle up against your stepfather to watch some TV, he holds you off and makes clear that he doesn\'t want you to get that close to him.');
  if (((s as any).sorryday ?? 0)!==((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Try to get on his good side', handler: (st: GameState) => {
    (s as any).sorryday = ((s as any).daystart ?? 0);
    ((s as any).npc_rel ?? {})['A28'] = (((s as any).npc_rel ?? {})['A28'] ?? 0) + ((((s as any).pcs_intel ?? 0)/10)+(((s as any).pcs_apprnc ?? 0)/20));
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

function enterWatchtv3(s: GameState, scene: SceneBuilder): void {
  (s as any).fatherTV = 0;
  if (((s as any).fatherTV ?? 0) === 1) {
    scene.text('You spend an hour watching a TV show with your stepfather, in which various persons display their skill in random talents hoping to win a prize.');
  } else {
    if (((s as any).fatherTV ?? 0) === 2) {
      scene.text('You spend an hour watching a TV show with your stepfather, in which several girls hope to get a date with the handsome bachelor.');
    } else {
      if (((s as any).fatherTV ?? 0) === 3) {
        scene.text('You spend an hour watching a TV show with your stepfather, learning all about how a platypus behaves in the wild.');
      } else {
        if (((s as any).fatherTV ?? 0) === 4) {
          scene.text('You spend an hour watching a TV show with your stepfather, in which experts try to figure out which of the girls in their line-up are most likely to get pregnant by examining them through X-ray glasses.');
        } else {
          if (((s as any).fatherTV ?? 0) === 5) {
            scene.text('You spend an hour watching a TV show with your stepfather, in which two guys are beating the crap out of each other in a boxing ring.');
          }
        }
      }
    }
  }
  scene.build();
}

function enterWatchtv4(s: GameState, scene: SceneBuilder): void {
  (s as any).talkrand = Math.floor(Math.random() * 100) + 1;
  if (((s as any).talkrand ?? 0)>=80  &&  ((s as any).locat ?? 0)?.['Kolka_athome'] === 1) {
    qspCall(s, 'dinfather', 'watchtv3');
  } else {
    scene.text('You relax and talk about the show you\'re watching with your stepfather, cuddling up snugly against him.');
    if (((s as any).npc_rel ?? 0)?.['A28']>=40  &&  ((s as any).npc_rel ?? 0)?.['A28']<60) {
      (s as any).FatherMolest = 0;
    }
    if (((s as any).npc_rel ?? 0)?.['A28']>=60  &&  ((s as any).npc_rel ?? 0)?.['A28']<80) {
      (s as any).FatherMolest = 0;
    }
    if (((s as any).npc_rel ?? 0)?.['A28']>=80) {
      (s as any).FatherMolest = 0;
    }
    if (((s as any).FatherMolest ?? 0)===1) {
      qspCall(s, 'dinfather', 'watchtv_act1');
      if (((s as any).pcs_horny ?? 0) >= 60  ||  ((s as any).TouchedByFather ?? 0)===1) {
        qspCall(s, 'dinfather', 'watchtv_act2');
      }
      if (((s as any).pcs_horny ?? 0) >= 80  ||  ((s as any).TouchedByFather ?? 0)===1) {
        qspCall(s, 'dinfather', 'watchtv_act3');
      }
    } else {
      qspCall(s, 'dinfather', 'watchtv3');
    }
  }
  scene.build();
}

function enterDFatherdrunkAct1(s: GameState, scene: SceneBuilder): void {
  scene.text('You can\'t help but notice that uncle Misha is staring at you the whole time. You feel like he\'s not just undressing you in his mind, but that he\'s fucking you in all sorts of positions with reckless abandon.');
  if (((s as any).pcs_horny ?? 0) >= 50  &&  ((s as any).sosedknow ?? 0)===1) {
    scene.actions([
      { label: 'Show him your breasts', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 5) + 1);
    scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim33.jpg');
    // TODO-QSP: dynamic text: In a moment of horniness, you slowly and teasingly bend over with a playful smil...
    scene.text(`In a moment of horniness, you slowly and teasingly bend over with a playful smile on your lips, providing uncle Misha with an amazing view of your ${((s as any).titsize ?? 0)} breasts.`);
    if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) < 60) {
      (s as any).mishaLust = 2;
    }
    if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) >= 60  &&  ((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) < 120) {
      (s as any).mishaLust = 0;
    }
    if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) >= 120  &&  ((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) < 200) {
      (s as any).mishaLust = 0;
    }
    if (((s as any).pcs_apprnc ?? 0) + (((s as any).npc_rel ?? 0)?.['A28']/10) >= 200) {
      (s as any).mishaLust = 1;
    }
    if (((s as any).mishaLust ?? 0)>=2) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (Math.floor(Math.random() * 5) + 1);
      qspCall(s, 'stat', '');
      scene.text('Uncle Misha is clearly embarrassed, and surprised you would do such a thing. He clears his throat loudly and looks at you disapprovingly, and the silence that follows makes you feel a bit uncomfortable. You\'re happy he at least had enough decency to not clue in your stepfather, who happened to have his back turned against you.');
    }
    if (((s as any).mishaLust ?? 0)===1) {
      scene.text('You try to be discrete so your stepfather doesn\'t notice what you just did, and uncle Misha is quite flustered by the show you just gave him. He stumbles over his words while your stepfather talks to him about bumpers, as you smile mischievously and give uncle Misha a wink when your stepfather looks away.');
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

function enterDFatherdrunkAct2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_horny ?? 0) >= 90  ||  ((s as any).TouchedByFather ?? 0)===1) {
    scene.actions([
      { label: 'Get their attention by dropping your bottle', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 5) + 1);
    scene.text('Even though you\'re horny and want the guys to notice you, they are paying more attention to their booze and their conversation. You can change that. Making sure it doesn\'t break, you \'accidentally\' drop your bottle and bend over to pick it up without bending your knees, giving them a spectacular view of your ass. You make a show of trying to reduce the spillage, wiping the floor while staying in your current position.');
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
      if (((s as any).pantyworntype ?? 0) !== 'none') {
        // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/pavlovsk/resident/vladimir/sex...
        scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/pavlovsk/resident/vladimir/sex/fatherim35.jpg"></center>`);
        scene.text('Your stepfather is clearly embarrassed, and surprised you would do such a thing. He clears his throat and looks at you disapprovingly, and the silence that follows makes you feel a bit uncomfortable. Uncle Misha just has a smug grin on his face.');
      }
      if (((s as any).pantyworntype ?? 0) === 'none') {
        // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/pavlovsk/resident/vladimir/sex...
        scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/pavlovsk/resident/vladimir/sex/fatherim34.jpg"></center>`);
        scene.text('Your stepfather is clearly embarrassed, and surprised you would do such a thing. He clears his throat and looks at you disapprovingly, and the silence that follows makes you feel a bit uncomfortable. Neither man mentions the fact that you\'re not wearing panties, but by the blush to their faces, both of them noticed.');
      }
    }
    if (((s as any).fatherLust ?? 0)===1) {
      if (((s as any).pantyworntype ?? 0) !== 'none') {
        scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim37.jpg');
        scene.text('You stick your ass out as much as you can, showing off your ass as much as you can. As you turn around, you notice that both your stepfather and uncle\'s gazes are glued to your ass. You simply smile and return to the table as they blubber and try to find excuses.');
        scene.actions([
          { label: 'Tease them some more', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim38.jpg');
    scene.text('You sit back down, still having their full attention. You try to excuse your behavior: "I\'m sorry guys, my clothes rub my pussy raw, bending over normally makes me feel very uncomfortable."');
    scene.actions([
      { label: 'Show them your pussy when they ask', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/vladimir/sex/fatherim39.jpg');
    // TODO-QSP: dynamic text: Uncle Misha is onto your act, and decides to push you to your limits. He smiles ...
    scene.text(`Uncle Misha is onto your act, and decides to push you to your limits. He smiles and says: "Oh really, ${((s as any).pcs_nickname ?? 0)}? Why don't you show us, maybe we can help you. Isn't that right, Vladimir?" Too turned on to decline, you pull your panties to the side and show them your pussy. It's really not all that sore, but your arousal has coloured it nice and red and it makes your pussy lips look a bit more puffy. The guys didn't think you would actually follow through with this, and are flabbergasted when you do.`);
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  } },
        ]);
      }
      if (((s as any).pantyworntype ?? 0) === 'none') {
        // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/pavlovsk/resident/vladimir/sex...
        scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/pavlovsk/resident/vladimir/sex/fatherim40.jpg"></center>`);
        // TODO-QSP: dynamic text: Slightly disappointed, you move away from the table. Lost in your own thoughts, ...
        scene.text(`Slightly disappointed, you move away from the table. Lost in your own thoughts, you don't notice uncle Misha's legs and trip over them. Since you're not wearing any underwear, you're giving your uncle one hell of a show as you fall down onto your hands and knees. He immediately reaches out and runs his fingers over your wet pussy lips. He fingers you briefly, then returning his fingers to his nose to take a deep whiff. "You have nice holes, ${((s as any).pcs_nickname ?? 0)}, young and juicy…" Realizing he won't do anything more with your stepfather right there in the room, you get up and fix your clothes before sitting back down at the table.`);
      }
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterDFatherdrunkAct3(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_horny ?? 0) >= 100  ||  ((s as any).TouchedByFather ?? 0)===1) {
    scene.actions([
      { label: 'Spread your legs', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 5) + 1);
    scene.text('You, pretending to not notice, slowly spread your legs while you talk with the guys.');
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
      if (((s as any).pantyworntype ?? 0) !== 'none') {
        // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/pavlovsk/resident/vladimir/sex...
        scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/pavlovsk/resident/vladimir/sex/fatherim31.jpg"></center>`);
        scene.text('Trying to direct Uncle Misha\'s attention to something across the room, your stepfather signals you to cover yourself up with agitated hand movements.');
      }
      if (((s as any).pantyworntype ?? 0) === 'none') {
        // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/pavlovsk/resident/vladimir/sex...
        scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/pavlovsk/resident/vladimir/sex/fatherim52.jpg"></center>`);
        // TODO-QSP: dynamic text: Your stepfather notices what you're trying to do. After he distracts uncle Misha...
        scene.text(`Your stepfather notices what you're trying to do. After he distracts uncle Misha for long enough, he turns to you and whispers: "${((s as any).pcs_nickname ?? 0)}, don't… just don't. You have no idea what you're getting yourself into." Intimidated by the gravity of his voice, you do as he says and cover up.`);
      }
    }
    if (((s as any).fatherLust ?? 0)===1) {
      if (((s as any).pantyworntype ?? 0) !== 'none') {
        // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/pavlovsk/resident/vladimir/sex...
        scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/pavlovsk/resident/vladimir/sex/fatherim20.jpg"></center>`);
        // TODO-QSP: dynamic text: Your stepfather realizes what you're up to and pulls you closer to him, desire b...
        scene.text(`Your stepfather realizes what you're up to and pulls you closer to him, desire burning in his eyes. He runs his hands over your ass cheeks and thighs, petting and kneading them, and then pushes your panties to the side. Two of his fingers are exploring your sphincter, rubbing and teasing you. "Is there something you want, ${((s as any).pcs_nickname ?? 0)}?" he asks with a smug grin on his face, knowing he turned the tables on you. All you can do is whimper in response. He pulls away his hand just in time, before uncle Misha notices what's going on.`);
      }
      if (((s as any).pantyworntype ?? 0) === 'none') {
        // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/pavlovsk/resident/vladimir/sex...
        scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/pavlovsk/resident/vladimir/sex/fatherim25.jpg"></center>`);
        scene.text('Noticing your stepfather\'s blush, you realize at least one person at the table noticed you\'re not wearing any underwear. When uncle Misha looks away, he quickly reaches for you and fingers your wet pussy. A needy moan escapes your lips as he pulls his hand way, and he quickly starts a conversation about wind shield wipers. Uncle Misha has no idea what just went down.');
      }
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterGarchat(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A28', 1);
  (s as any).fatherTalk = 0;
  if (((s as any).fatherTalk ?? 0) === 1) {
    scene.text('You enjoy a short talk with your stepfather.');
  } else {
    if (((s as any).fatherTalk ?? 0) === 2) {
      scene.text('You ask your stepfather how he met your mother. Your stepfather scratches his slightly balding head and replies: "I used to work as a taxi driver back then, drove your mother to places from time to time and we got along very well. Natasha is a strong and independent woman, raising you and Anya all by herself after she left your father. I didn\'t know him very well, I\'ve only met him a couple of times. All I know is that his name is Mikhail Kuznetsov, and that he moved to a different city soon after he and your mother divorced.');
    } else {
      if (((s as any).fatherTalk ?? 0) === 3) {
        scene.text('You ask your stepfather about his work. Your stepfather reaches for his aching joints, with a grimace on his face. "I used to be a taxi driver. It was hard work though, often working many hours a day, and it could be dangerous too. With some money we saved up I bought a Gazelle pickup truck, and now I drive that selling goods and making deliveries. As you know I have two garages; one for our Volga, and the one we\'re at now."');
      } else {
        if (((s as any).fatherTalk ?? 0) === 4) {
          scene.text('Your stepfather tells you a funny story.');
        } else {
          if (((s as any).fatherTalk ?? 0) === 5) {
            scene.text('Your stepfather tells you a funny joke.');
          }
        }
      }
    }
  }
  scene.actions([
    { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterGarhelpchat(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A28', 1);
  (s as any).fatherTalk = 0;
  if (((s as any).fatherTalk ?? 0) === 1) {
    scene.text('While you help your stepfather in the garage, he talks to you about how every car has its own character, all the while not looking away from his work.');
  } else {
    if (((s as any).fatherTalk ?? 0) === 2) {
      scene.text('While you help your stepfather in the garage, he talks to you about how the engine of the Gazelle works, all the while not looking away from his work.');
    } else {
      if (((s as any).fatherTalk ?? 0) === 3) {
        scene.text('While you help your stepfather in the garage, he talks to you about how unreliable some cars are and how expensive it is to keep them on the road, all the while not looking away from his work.');
      } else {
        if (((s as any).fatherTalk ?? 0) === 4) {
          scene.text('While you help your stepfather in the garage, he complains about the poor condition the roads around Pavlovski, all the while not looking away from his work.');
        } else {
          if (((s as any).fatherTalk ?? 0) === 5) {
            scene.text('While you help your stepfather in the garage, he explains how a gear box works, all the while not looking away from his work.');
          }
        }
      }
    }
  }
  scene.actions([
    { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterGardrunkchat(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: Before you can even ask, your stepfather waves you over: "Oh, <<$pcs_nickname>>!...
  scene.text(`Before you can even ask, your stepfather waves you over: "Oh, ${((s as any).pcs_nickname ?? 0)}! Come join me and Misha, maybe you'll learn something from your elders!"`);
  (s as any).fatherTalk = 0;
  if (((s as any).fatherTalk ?? 0) === 1) {
    scene.text('You sit down and join the two older men for a drink. Even though they won\'t give you any alcohol, you listen to their increasingly drunken tales.');
  } else {
    if (((s as any).fatherTalk ?? 0) === 2) {
      scene.text('You sit down and join the older men for a drink. Uncle Misha then pulls out his guitar and plays some songs, and you and your stepfather happily sing along.');
    } else {
      if (((s as any).fatherTalk ?? 0) === 3) {
        scene.text('You sit down and join the older men for a drink. You can tell your stepfather and your uncle are good friends.');
      }
    }
  }
  if (((s as any).fame ?? 0)?.['pav_slut'] >= 150  &&  ((s as any).dyadyamishaevent ?? 0) === 1  &&  ((s as any).dmishaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).fatherandmisha ?? 0)!==1) {
    scene.img('images/characters/shared/headshots_main/big28.jpg');
    scene.text('Uncle Misha kept staring at you. Suddenly he turns to your stepfather.');
    // TODO-QSP: dynamic text: "So, Vladimir, did you know your <<$pcs_nickname>> is a <<$gnikname>>?"
    scene.text(`"So, Vladimir, did you know your ${((s as any).pcs_nickname ?? 0)} is a ${((s as any).gnikname ?? 0)}?"`);
    scene.text('Your stepfather is clearly confused. "What are you talking about, Misha?"');
    scene.text('Uncle Misha continues: "Oh yes, it\'s true, Gopniks fuck her whenever they want. All they have to do is tell her to get on all fours."');
    if (((s as any).npc_had_sex ?? 0)?.['A28']) {
      // TODO-QSP: dynamic text: Your stepfather already knows you're not a prude, but pretends to be a good fath...
      scene.text(`Your stepfather already knows you're not a prude, but pretends to be a good father anyway: "${((s as any).pcs_nickname ?? 0)}, you really shouldn't, that could be dangerous…"`);
    } else {
      // TODO-QSP: dynamic text: Your stepfather looks you in the eyes and asks: "Is that really true, <<$pcs_nic...
      scene.text(`Your stepfather looks you in the eyes and asks: "Is that really true, ${((s as any).pcs_nickname ?? 0)}?"`);
      scene.text('You\'re not really sure what to say and hesitate to give an answer, shifting uncomfortably in your chair. Your blush betrays you as you try to make up an excuse: "Well wait, I can explain…"');
      scene.text('Your face really says it all. Your stepfather is disgusted by this revelation and cuts you off: "Are you fucking kidding me!? Your mother and I did our best to raise you properly, and this is the thanks we get?"');
    }
    // TODO-QSP: dynamic text: Uncle Misha realizes he's onto something here, and decides to drive his point ho...
    scene.text(`Uncle Misha realizes he's onto something here, and decides to drive his point home: "Well Vladimir, don't you think we should do something about it? I think ${((s as any).pcs_nickname ?? 0)} needs to be punished!"`);
    // TODO-QSP: dynamic text: You can see the lust in his eyes. Your stepfather understands perfectly well whe...
    scene.text(`You can see the lust in his eyes. Your stepfather understands perfectly well where he's going with this, and agrees: "I think you're right, Misha, ${((s as any).pcs_nickname ?? 0)} does deserve to be punished."`);
    scene.actions([
      { label: 'Accept whatever punishment they have in mind', goto: ['misha', '2'] },
    ]);
  } else {
    if (((s as any).dyadyamishaevent ?? 0) === 1  &&  ((s as any).dmishaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).fatherandmisha ?? 0) === 1) {
      scene.text('Uncle Misha grins at your stepfather and runs one hand over his groin, you can already see a significant bulge forming. "So, Vladimir, how about now? I think we can teach her a thing or two."');
      scene.text('Your stepfather simply nods and reaches for his zipper: "Absolutely."');
      scene.actions([
        { label: 'Accept whatever punishment they have in mind', goto: ['misha', '2'] },
      ]);
    } else {
      scene.actions([
        { label: 'Move away', goto: ['gargazel', ''] },
      ]);
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
    case 'father 4':
      enterFather4(s, scene);
      break;
    case 'gar_act1':
      enterGarAct1(s, scene);
      break;
    case 'gar_act2':
      enterGarAct2(s, scene);
      break;
    case 'gar_act3':
      enterGarAct3(s, scene);
      break;
    case 'watchtv_act1':
      enterWatchtvAct1(s, scene);
      break;
    case 'watchtv_act2':
      enterWatchtvAct2(s, scene);
      break;
    case 'watchtv_act3':
      enterWatchtvAct3(s, scene);
      break;
    case 'watchtv1':
      enterWatchtv1(s, scene);
      break;
    case 'watchtv2':
      enterWatchtv2(s, scene);
      break;
    case 'watchtv3':
      enterWatchtv3(s, scene);
      break;
    case 'watchtv4':
      enterWatchtv4(s, scene);
      break;
    case 'd_fatherdrunk_act1':
      enterDFatherdrunkAct1(s, scene);
      break;
    case 'd_fatherdrunk_act2':
      enterDFatherdrunkAct2(s, scene);
      break;
    case 'd_fatherdrunk_act3':
      enterDFatherdrunkAct3(s, scene);
      break;
    case 'garchat':
      enterGarchat(s, scene);
      break;
    case 'garhelpchat':
      enterGarhelpchat(s, scene);
      break;
    case 'gardrunkchat':
      enterGardrunkchat(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const dinfather: LocationDef = {
  name: 'dinfather',
  title: 'You try to have a conversation with your stepfather, but he ',
  region: 'other',
  enter: enter,
};
