import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Cafe</b></center>');
  scene.img('images/characters/city/boyfriend/sex/event/0.jpg');
  // TODO-QSP: dynamic text: You and <<$telsob>> go to a small cafe in the center of the city.
  scene.text(`You and ${((s as any).telsob ?? 0)} go to a small cafe in the center of the city.`);
  scene.actions([
    { label: 'Chat', handler: (st: GameState) => {
    if (((s as any).telsob ?? 0) === 'Alla') {
      (s as any).alla = ((s as any).alla ?? 0) + (1);
      if (((s as any).alla ?? 0) >= 20) {
        (s as any).kaferand = Math.floor(Math.random() * 9) + 0;
        if (((s as any).kaferand ?? 0) < 2) {
          scene.actions([{ label: 'Continue', goto: ['kafesvid', '1'] }]);
        } else {
          if (((s as any).kaferand ?? 0) < 4) {
            scene.actions([{ label: 'Continue', goto: ['kafesvid', '2'] }]);
          } else {
            scene.actions([{ label: 'Continue', goto: ['kafesvid', 'end'] }]);
          }
        }
      } else {
        scene.actions([{ label: 'Continue', goto: ['kafesvid', 'end'] }]);
      }
    } else {
      if (((s as any).telsob ?? 0) === 'Masha') {
        (s as any).masha = ((s as any).masha ?? 0) + (1);
        if (((s as any).masha ?? 0) >= 20) {
          (s as any).kaferand = Math.floor(Math.random() * 9) + 0;
          if (((s as any).kaferand ?? 0) < 2) {
            scene.actions([{ label: 'Continue', goto: ['kafesvid', '1'] }]);
          } else {
            if (((s as any).kaferand ?? 0) < 4) {
              scene.actions([{ label: 'Continue', goto: ['kafesvid', '2'] }]);
            } else {
              scene.actions([{ label: 'Continue', goto: ['kafesvid', 'end'] }]);
            }
          }
        } else {
          scene.actions([{ label: 'Continue', goto: ['kafesvid', 'end'] }]);
        }
      } else {
        if (((s as any).telsob ?? 0) === 'Kate') {
          qspCall(s, 'npc_relationship', 'modify', 'A219', 1);
          if (((s as any).npc_rel ?? 0)?.['A219'] >= 20) {
            (s as any).kaferand = Math.floor(Math.random() * 9) + 0;
            if (((s as any).kaferand ?? 0) < 2) {
              scene.actions([{ label: 'Continue', goto: ['kafesvid', '1'] }]);
            } else {
              if (((s as any).kaferand ?? 0) < 4) {
                scene.actions([{ label: 'Continue', goto: ['kafesvid', '2'] }]);
              } else {
                scene.actions([{ label: 'Continue', goto: ['kafesvid', 'end'] }]);
              }
            }
          } else {
            scene.actions([{ label: 'Continue', goto: ['kafesvid', 'end'] }]);
          }
        } else {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
          if (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] < 60) {
            scene.actions([{ label: 'Continue', goto: ['kafesvid', 'end'] }]);
          } else {
            (s as any).kaferand = Math.floor(Math.random() * 9) + 0;
            if (((s as any).kaferand ?? 0) <= 1) {
              scene.actions([{ label: 'Continue', goto: ['kafesvid', '1'] }]);
            } else {
              if (((s as any).kaferand ?? 0) <= 3) {
                scene.actions([{ label: 'Continue', goto: ['kafesvid', '2'] }]);
              } else {
                scene.actions([{ label: 'Continue', goto: ['kafesvid', 'end'] }]);
              }
            }
          }
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enter1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
  scene.img('images/characters/city/boyfriend/sex/event/1.jpg');
  // TODO-QSP: dynamic text: The cafe is pretty empty, and you are in the far corner, where it is kind of dar...
  scene.text(`The cafe is pretty empty, and you are in the far corner, where it is kind of dark. ${((s as any).telsob ?? 0)} uses this little bit of privacy to slowly hike up her shirt. When she notices you staring, she puts a leg up right between your thighs. It gives you an excellent view of her already wet panties.`);
  // TODO-QSP: dynamic text: "Like what you see, <<$pcs_nickname>>?" she says, with a wicked grin.
  scene.text(`"Like what you see, ${((s as any).pcs_nickname ?? 0)}?" she says, with a wicked grin.`);
  qspCall(s, 'arousal', 'erotic', 5);
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'foreplay', 'resist', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Not in public [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Not in public [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['kafesvid', 'end'] },
    ]);
  }
  scene.actions([
    { label: 'Find out just how wet she is', handler: (st: GameState) => {
    scene.img('images/characters/city/boyfriend/sex/event/2.jpg');
    scene.text('Smiling, you reach up and take a firm hold between her thighs. "I don\'t like it. I love it," you say, with a wicked grin of your own. Her body writhes in pleasure, as you put you hand to work against her now soaked panties. A few seconds later, she starts to take your top off.');
    qspCall(s, 'arousal', 'foreplay', 5, 'lesbian');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'cuni', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'We can\'t do it here [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'We can\'t do it here [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['kafesvid', 'end'] },
      ]);
    }
    scene.actions([
      { label: 'Let her continue', handler: (st: GameState) => {
    scene.img('images/characters/city/boyfriend/sex/event/3.jpg');
    // TODO-QSP: dynamic text: Once <<$telsob>> has you undressed, she crawls under the table and spreads your ...
    scene.text(`Once ${((s as any).telsob ?? 0)} has you undressed, she crawls under the table and spreads your legs. When her tongue finds its mark, you throw your head back overcome with pleasure.`);
    qspCall(s, 'arousal', 'cuni', 5, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Bend over the table', handler: (st: GameState) => {
    scene.img('images/characters/city/boyfriend/sex/event/5.jpg');
    // TODO-QSP: dynamic text: Wanting to feel her wonderful tongue over even more of you most private places, ...
    scene.text(`Wanting to feel her wonderful tongue over even more of you most private places, you bend over the table for her. ${((s as any).telsob ?? 0)} immediately jumps to aggressively tongue both your holes. One particularly deep thrust of her tongue into your ass is what sends you over the edge. You cry out, as an intense orgasm rushes over you.`);
    qspCall(s, 'arousal', 'rimming', 5, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'More', goto: ['kafesvid', '10'] },
    ]);
  } },
      { label: 'Lick her', handler: (st: GameState) => {
    scene.img('images/characters/city/boyfriend/sex/event/4.jpg');
    // TODO-QSP: dynamic text: <<$telsob>> sits on the table, and pulls her panties to the side for you. You st...
    scene.text(`${((s as any).telsob ?? 0)} sits on the table, and pulls her panties to the side for you. You start by kissing her inner thighs, gradually moving closer to her lips. When you get there you give labia soft sucking kisses, before giving her entire pussy one long slow lick. This sends a shudder though her entire body, but before she can recover you find her clitoris with your tongue. This sends her over the edge. Her juices pour into your mouth. You don't think you have ever made a women cum like this. You lick as much of it up as you can, with a sense of pride. ${((s as any).telsob ?? 0)} is now collapsed on the floor. You lean over giving her a deep kiss, sharing the remnants of her own cum with her, as you do.`);
    qspCall(s, 'arousal', 'cuni_give', 5, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'More', goto: ['kafesvid', '10'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter10(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/boyfriend/sex/event/6.jpg');
  // TODO-QSP: dynamic text: <<$telsob>> is far from finished. She finds her purse, and fishes out her dildo....
  scene.text(`${((s as any).telsob ?? 0)} is far from finished. She finds her purse, and fishes out her dildo. With a huge smile on her face, she looks up at you slowly sucking and licking her toy.`);
  scene.text('"Whatever will we do with this thing?", she says, feigning confusion.');
  scene.actions([
    { label: 'Let\'s put it in your pussy', goto: ['kafesvid', '11'] },
    { label: 'Let\'s put it in your ass', goto: ['kafesvid', '12'] },
    { label: 'I want it in my pussy', goto: ['kafesvid', '13'] },
    { label: 'I\'ve had enough', goto: ['kafesvid', 'end'] },
  ]);
  scene.build();
}

function enter11(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
  (s as any).kafesvidsex = ((s as any).kafesvidsex ?? 0) + (1);
  scene.img('images/characters/city/boyfriend/sex/event/8.jpg');
  // TODO-QSP: dynamic text: You take your time sliding the dildo in, as you let her get used to it. When she...
  scene.text(`You take your time sliding the dildo in, as you let her get used to it. When she gives you a small nod, you start to fuck her with it in earnest. While you do this, ${((s as any).telsob ?? 0)} fingers her clit, until she cums with a soft yelp.`);
  qspCall(s, 'arousal', 'vaginal_dildo_give', 5, 'lesbian');
  qspCall(s, 'stat', '');
  if (((s as any).kafesvidsex ?? 0) < 3) {
    scene.actions([
      { label: 'Her ass', goto: ['kafesvid', '12'] },
      { label: 'Your pussy', goto: ['kafesvid', '13'] },
    ]);
  }
  scene.actions([
    { label: 'Finish', goto: ['kafesvid', 'end'] },
  ]);
  scene.build();
}

function enter12(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
  (s as any).kafesvidsex = ((s as any).kafesvidsex ?? 0) + (1);
  scene.img('images/characters/city/boyfriend/sex/event/9.jpg');
  // TODO-QSP: dynamic text: You tap the dildo on the side of the table a couple times. Realizing what you wa...
  scene.text(`You tap the dildo on the side of the table a couple times. Realizing what you want, ${((s as any).telsob ?? 0)} hops up on the table. You give her ass a few long wet licks. Moving away, you direct one last gob of spit at her little hole. Now that she is ready, you slide the didlo into her ass. She rocks her hips back and forth helping to fuck herself. You hold on with one hand as she does, leaving your other hand free to play with your pussy.`);
  qspCall(s, 'arousal', 'anal_dildo_give', 5, 'lesbian');
  qspCall(s, 'arousal', 'vaginal_finger_give', (-5), 'lesbian');
  qspCall(s, 'stat', '');
  if (((s as any).kafesvidsex ?? 0) < 3) {
    scene.actions([
      { label: 'Her pussy', goto: ['kafesvid', '11'] },
      { label: 'Your pussy', goto: ['kafesvid', '13'] },
    ]);
  }
  scene.actions([
    { label: 'Finish', goto: ['kafesvid', 'end'] },
  ]);
  scene.build();
}

function enter13(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
  qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
  (s as any).kafesvidsex = ((s as any).kafesvidsex ?? 0) + (1);
  scene.img('images/characters/city/boyfriend/sex/event/7.jpg');
  // TODO-QSP: dynamic text: You stand up against the table, waiting for <<$telsob>> to pleasure you. She eag...
  scene.text(`You stand up against the table, waiting for ${((s as any).telsob ?? 0)} to pleasure you. She eagerly drops to her knees, dildo at the ready. She licks at your clitoris, while she pushes it inside you. It's not long before her attention sends an orgasm coursing through you.`);
  qspCall(s, 'arousal', 'cuni', 5, 'lesbian');
  qspCall(s, 'arousal', 'vaginal_dildo', (-5), 'lesbian');
  qspCall(s, 'stat', '');
  if (((s as any).kafesvidsex ?? 0) < 3) {
    scene.actions([
      { label: 'Her pussy', goto: ['kafesvid', '11'] },
      { label: 'Her ass', goto: ['kafesvid', '12'] },
    ]);
  }
  scene.actions([
    { label: 'Finish', goto: ['kafesvid', 'end'] },
  ]);
  scene.build();
}

function enter2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
  scene.img('images/characters/city/boyfriend/sex/event/10.jpg');
  scene.text('After you make your order at he cafe, you notice the waiter is still hovering around your table, and looking in your direction.');
  // TODO-QSP: dynamic text: "I think he like you," <<$telsob>> says, giving you a wink.
  scene.text(`"I think he like you," ${((s as any).telsob ?? 0)} says, giving you a wink.`);
  scene.text('You tell her: "He\'s making me nervous. We are the only ones in here. I think he might be getting ideas."');
  // TODO-QSP: dynamic text: When the waiter once again comes to ask if you need anything, <<$telsob>> grabs ...
  scene.text(`When the waiter once again comes to ask if you need anything, ${((s as any).telsob ?? 0)} grabs one of your boobs. Her squeeze almost sends you jumping out of your chair.`);
  scene.text('"What are you doing that hurts," you say, somewhat shocked.');
  // TODO-QSP: dynamic text: <<$telsob>>, without weakening her grip, turns to the waiter and says, "Want to ...
  scene.text(`${((s as any).telsob ?? 0)}, without weakening her grip, turns to the waiter and says, "Want to touch my girls tits?"`);
  scene.text('The waiter looks at you, hesitantly.');
  qspCall(s, 'willpower', 'foreplay', 'resist', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: '"I\'ll crush your balls if you do" [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: '"I\'ll crush your balls if you do" [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['kafesvid', 'end'] },
    ]);
  }
  scene.actions([
    { label: 'Do not resist', handler: (st: GameState) => {
    scene.img('images/characters/city/boyfriend/sex/event/11.jpg');
    // TODO-QSP: dynamic text: When you don't say no, <<$telsob>> lets go of your chest, and guides the waiters...
    scene.text(`When you don't say no, ${((s as any).telsob ?? 0)} lets go of your chest, and guides the waiters hand to your breast. "Don't be shy, my girl likes it," she tells him.`);
    scene.text('The waiter timidly gropes your breast, but soon grows bolder feeling you up with both of his hands.');
    // TODO-QSP: dynamic text: A minute later, <<$telsob>> directs you: "Don't be selfish my dear. This gentlem...
    scene.text(`A minute later, ${((s as any).telsob ?? 0)} directs you: "Don't be selfish my dear. This gentleman deserves a more personal touch. I want you to show him that it's better to give than receive."`);
    scene.text('The waiter pulls back from you, unsure what to do next.');
    // TODO-QSP: dynamic text: With swift speed, <<$Telsob>> reaches over and undoes his pants. His erect penis...
    scene.text(`With swift speed, ${((s as any).Telsob ?? 0)} reaches over and undoes his pants. His erect penis is now on full display.`);
    // TODO-QSP: dynamic text: <<$Telsob>> chastises you: "<<$pcs_nickname>> why did you not move to please thi...
    scene.text(`${((s as any).Telsob ?? 0)} chastises you: "${((s as any).pcs_nickname ?? 0)} why did you not move to please this man the moment he was exposed? Is it not beautiful? I want you to touch him. Go ahead girl, help yourself."`);
    qspCall(s, 'willpower', 'hj', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['kafesvid', 'end'] },
      ]);
    }
    scene.actions([
      { label: 'Reach out with your hand', handler: (st: GameState) => {
    scene.img('images/characters/city/boyfriend/sex/event/12.jpg');
    scene.text('A little nervous, you take his penis in your hand, and begin to stroke.');
    // TODO-QSP: dynamic text: <<$telsob>> continues to chat with you paying no attention to the man: "That's a...
    scene.text(`${((s as any).telsob ?? 0)} continues to chat with you paying no attention to the man: "That's a good girl, ${((s as any).pcs_nickname ?? 0)}. Doesn't it feel great knowing you can please a total stranger with so little effort?" With that the man grunts loudly, signaling he is about to cum. "Are you just going to let him finish on the table? It would be a shame if we came all the way to the cafe, and you passed up the most tasty treat."`);
    qspCall(s, 'arousal', 'hj', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Take him in your mouth', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
    scene.img('images/characters/city/boyfriend/sex/event/16.jpg');
    // TODO-QSP: dynamic text: You drop to your knees, as <<$telsob>> grabs his cock. "Now, I want you to be a ...
    scene.text(`You drop to your knees, as ${((s as any).telsob ?? 0)} grabs his cock. "Now, I want you to be a good girl, and swallow all of this for me," she says, as she strokes him in front of your mouth. Seconds later warm jets of sperm enter your mouth. ${((s as any).telsob ?? 0)} keeps working the man roughly, squeezing every last drop out of him, and into your mouth. "Very good ${((s as any).pcs_nickname ?? 0)}, now swallow", she says. You do. Then she sits back down chitchatting with you like nothing happened.`);
    scene.actions([
      { label: 'Finish', goto: ['kafesvid', 'end'] },
    ]);
  } },
      { label: 'Continue with your hand', handler: (st: GameState) => {
    scene.img('images/characters/city/boyfriend/sex/event/12.jpg');
    scene.text('Wanting to get this over with, you concentrate on making him cum. He soon spills his seed all over the table top.');
    // TODO-QSP: dynamic text: <<$telsob>> starts up again, "<<$pcs_nickname>>, you have to at least try the yo...
    scene.text(`${((s as any).telsob ?? 0)} starts up again, "${((s as any).pcs_nickname ?? 0)}, you have to at least try the yogurt. It would be a shame for it to go to waste."`);
    qspCall(s, 'arousal', 'hj', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Lick sperm', handler: (st: GameState) => {
    (s as any).stat['swallow'] = ((s as any).stat['swallow'] ?? 0) + (1);
    scene.img('images/characters/city/boyfriend/sex/event/14.jpg');
    // TODO-QSP: dynamic text: You lean over the table, and lap up his sperm with your tongue. <<$telsob>> gent...
    scene.text(`You lean over the table, and lap up his sperm with your tongue. ${((s as any).telsob ?? 0)} gently strokes your hair, as you do.`);
    scene.actions([
      { label: 'Finish', goto: ['kafesvid', 'end'] },
    ]);
  } },
      { label: 'Don\'t touch the sperm', handler: (st: GameState) => {
    (s as any).stat['swallow'] = ((s as any).stat['swallow'] ?? 0) + (1);
    scene.img('images/characters/city/boyfriend/sex/event/15.jpg');
    // TODO-QSP: dynamic text: Seeing that you aren't moving, <<$telsob>> leans over the table to collect all h...
    scene.text(`Seeing that you aren't moving, ${((s as any).telsob ?? 0)} leans over the table to collect all his sperm in her mouth. Before you can think to react, she gives you a deep kiss, forcing most of his cum into your mouth. You swallow it without thinking. "Now tell me that wasn't a tasty treat," she finishes.`);
    scene.actions([
      { label: 'Finish', goto: ['kafesvid', 'end'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Take him in your mouth', handler: (st: GameState) => {
    scene.img('images/characters/city/boyfriend/sex/event/13.jpg');
    // TODO-QSP: dynamic text: You spend some time with licks and kisses, before you take his cock in your mout...
    scene.text(`You spend some time with licks and kisses, before you take his cock in your mouth. ${((s as any).telsob ?? 0)} moves behind you, and pulls down your pants. She gives your pussy long slow licks, between little words of encouragement urging you to suck. A few minutes later ${((s as any).telsob ?? 0)} takes charge again, saying: "I think you are ready, ${((s as any).pcs_nickname ?? 0)}. Turn around and show this nice young man just how wet and willing that pussy is."`);
    qspCall(s, 'arousal', 'bj', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Listen to her', handler: (st: GameState) => {
    scene.img('images/characters/city/boyfriend/sex/event/17.jpg');
    // TODO-QSP: dynamic text: At <<$telsob>>'s direction, you bend over the table for the man. She sits in fro...
    scene.text(`At ${((s as any).telsob ?? 0)}'s direction, you bend over the table for the man. She sits in front of you, and motions for you to take her breast in your mouth. When the man slides himself in you let out a soft moan against ${((s as any).telsob ?? 0)}'s nipple. After the man forcefully fucks you for a while ${((s as any).telsob ?? 0)} takes change again. "Now lie down on the table, ${((s as any).pcs_nickname ?? 0)}," she orders. You feel like an actress in a porno film that she is directing. It's very strange, but oddly exciting.`);
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Do as she says', handler: (st: GameState) => {
    scene.img('images/characters/city/boyfriend/sex/event/18.jpg');
    // TODO-QSP: dynamic text: You lie on the table, with your legs spread wide. The man re-enters you, and pou...
    scene.text(`You lie on the table, with your legs spread wide. The man re-enters you, and pounds away at your pussy with abandon. ${((s as any).telsob ?? 0)} puts a hand behind you, so you don't get fucked right off the table. Then she reaches down to massage your clit, whispering words of encouragement in you ear. You are close to orgasm when ${((s as any).telsob ?? 0)} stops the action and commands, "And now you will take it in the ass."`);
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Obey her', handler: (st: GameState) => {
    (s as any).spafinloc = 3;
    qspCall(s, 'cum_manage', '');
    scene.img('images/characters/city/boyfriend/sex/event/19.jpg');
    // TODO-QSP: dynamic text: You bend over the table waiting for what comes next. <<$telsob>> spreads your ch...
    scene.text(`You bend over the table waiting for what comes next. ${((s as any).telsob ?? 0)} spreads your cheeks, and spits several times. As she works her saliva into you hole with her hand, she orders the man, "You will be gentle. I will not have my ${((s as any).pcs_nickname ?? 0)} damaged." She then guides his cock through the process of stretching you out.`);
    scene.text('When he is finally all the way in, he starts moving with gentle thrusts. It\'s almost overwhelming. Gentle or not this man has you stretched almost to the breaking point. The thought of what he is doing to your backside sends you over the edge, and you cum with a loud cry. Moments later you feel his wet warmth fill your ass.');
    // TODO-QSP: dynamic text: "You little slut, I can't believe you came from getting fucked in the ass," <<$t...
    scene.text(`"You little slut, I can't believe you came from getting fucked in the ass," ${((s as any).telsob ?? 0)} says, smiling at you with approval. "Now lick him clean," she finishes.`);
    qspCall(s, 'arousal', 'anal', 5, 'sub');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'misc', 'resist', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'No, that\'s enough [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'No, that\'s enough [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['kafesvid', 'end'] },
      ]);
    }
    scene.actions([
      { label: 'Continue to obey', handler: (st: GameState) => {
    (s as any).spafinloc = 12;
    qspCall(s, 'cum_manage', '');
    scene.img('images/characters/city/boyfriend/sex/event/20.jpg');
    // TODO-QSP: dynamic text: To please <<$telsob>>, you jump off the table, and eagerly suck his wet cock.
    scene.text(`To please ${((s as any).telsob ?? 0)}, you jump off the table, and eagerly suck his wet cock.`);
    if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)) {
      // TODO-QSP: dynamic text: You quickly realize that you didn't have an enema today. Almost gagging at the t...
      scene.text(`You quickly realize that you didn't have an enema today. Almost gagging at the taste, you move to remove his cock from your mouth. ${((s as any).telsob ?? 0)}'s hand comes to rest firmly on the back of your head, before you can. "That my dear is why it is important to keep your ass clean," she says. With little choice in the matter you continue to suck.`);
    }
    if (((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
      scene.text('You dutifully suck his dick, a little surprised that it tastes good. You lose yourself in the rhythm. Your only thoughts are of the taste of his cum, and the feeling of it dripping down between your thighs.');
    }
    // TODO-QSP: dynamic text: Before you realize it, his cock is rock-hard and throbbing again. <<$telsob>> no...
    scene.text(`Before you realize it, his cock is rock-hard and throbbing again. ${((s as any).telsob ?? 0)} notices too: "Oh, look what you did, ${((s as any).pcs_nickname ?? 0)}. You're such a naughty little girl. Well, I guess your ass is nice and lubed up, so this time he won't have to hold back."`);
    qspCall(s, 'arousal', 'bj', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: '<<$telsob>> knows best', handler: (st: GameState) => {
    qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
    scene.img('images/characters/city/boyfriend/sex/event/21.jpg');
    // TODO-QSP: dynamic text: The man lies back on the table, as <<$telsob>> helps you on top of him. When you...
    scene.text(`The man lies back on the table, as ${((s as any).telsob ?? 0)} helps you on top of him. When you are in position she guides his cock back into your already dripping hole. Once you are settled, the guy begins to fuck you with jackhammer thrusts. ${((s as any).telsob ?? 0)} helps by forcing your hips down, sinking him in even deeper.`);
    // TODO-QSP: dynamic text: "Faster boy, I want you to fuck her so she can't sit for a week," she orders him...
    scene.text(`"Faster boy, I want you to fuck her so she can't sit for a week," she orders him. To you she says, "My ${((s as any).pcs_nickname ?? 0)} fucking loves it." Her words send you over the edge again. Your body shakes from head to toe, as you ride another orgasm. When you have regained your senses she whispers to you again, "That's twice you little slut."`);
    // TODO-QSP: dynamic text: When the waiter is getting close <<$telsob>> stops him with a command, "In her m...
    scene.text(`When the waiter is getting close ${((s as any).telsob ?? 0)} stops him with a command, "In her mouth this time, boy."`);
    qspCall(s, 'arousal', 'anal', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'In your mouth', handler: (st: GameState) => {
    (s as any).spafinloc = 11;
    qspCall(s, 'cum_manage', '');
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
    scene.img('images/characters/city/boyfriend/sex/event/22.jpg');
    // TODO-QSP: dynamic text: As soon you drop to your knees, <<$telsob>> furiously jerks his cock, aiming it ...
    scene.text(`As soon you drop to your knees, ${((s as any).telsob ?? 0)} furiously jerks his cock, aiming it at your mouth. The man groans loudly, and erupts all over the place. A lot of his cum finds your mouth, but it also runs down your chin and chest. Looking up, you see ${((s as any).telsob ?? 0)} looking at you like a proud parent.`);
    scene.actions([
      { label: 'Kiss <<$telsob>>', handler: (st: GameState) => {
    scene.img('images/characters/city/boyfriend/sex/event/23.jpg');
    // TODO-QSP: dynamic text: <<$telsob>> leans down, and kisses you deeply. You push a little of the mans cum...
    scene.text(`${((s as any).telsob ?? 0)} leans down, and kisses you deeply. You push a little of the mans cum into her mouth with your tongue. She swallows it down, with a wicked grin. Not satisfied she moves further down licking the cum from your breasts and stomach. Just when you think she is finished cleaning you, she rocks your hips back exposing your backside. She passionately licks and kisses your little hole, as she works to collect every drop. When she is finished, she gives you one last deep kiss. It tastes wonderful.`);
    qspCall(s, 'arousal', 'kiss', 5, 'lesbian', 'sub');
    qspCall(s, 'arousal', 'cuni', (-5), 'lesbian', 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', goto: ['kafesvid', 'end'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Anal instead', handler: (st: GameState) => {
    (s as any).spafinloc = 3;
    qspCall(s, 'cum_manage', '');
    scene.img('images/characters/city/boyfriend/sex/event/19.jpg');
    // TODO-QSP: dynamic text: You bend over the table and spread your asscheeks instead. <<$telsob>> smiles an...
    scene.text(`You bend over the table and spread your asscheeks instead. ${((s as any).telsob ?? 0)} smiles and agrees, spitting a couple of times on your asshole. As she works her saliva into your hole with her hand, she orders the man, "You will be gentle. I will not have my ${((s as any).pcs_nickname ?? 0)} damaged." She then guides his cock through the process of stretching you out.`);
    scene.text('When he is finally all the way in, he starts moving with gentle thrusts. It\'s almost overwhelming. Gentle or not this man has you stretched almost to the breaking point. The thought of what he is doing to your backside sends you over the edge, and you cum with a loud cry. Moments later you feel his wet warmth fill your ass.');
    // TODO-QSP: dynamic text: "You little slut, I can't believe you came from getting fucked in the ass," <<$t...
    scene.text(`"You little slut, I can't believe you came from getting fucked in the ass," ${((s as any).telsob ?? 0)} says, smiling at you with approval. "Now lick him clean," she finishes.`);
    qspCall(s, 'arousal', 'anal', 5, 'sub');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'misc', 'resist', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'No, that\'s enough [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'No, that\'s enough [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['kafesvid', 'end'] },
      ]);
    }
    scene.actions([
      { label: 'Continue to obey', handler: (st: GameState) => {
    (s as any).spafinloc = 12;
    qspCall(s, 'cum_manage', '');
    scene.img('images/characters/city/boyfriend/sex/event/20.jpg');
    // TODO-QSP: dynamic text: To please <<$telsob>>, you jump off the table, and eagerly suck his wet cock.
    scene.text(`To please ${((s as any).telsob ?? 0)}, you jump off the table, and eagerly suck his wet cock.`);
    if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)) {
      // TODO-QSP: dynamic text: You quickly realize that you didn't have an enema today. Almost gagging at the t...
      scene.text(`You quickly realize that you didn't have an enema today. Almost gagging at the taste, you move to remove his cock from your mouth. ${((s as any).telsob ?? 0)}'s hand comes to rest firmly on the back of your head, before you can. "That my dear is why it is important to keep your ass clean," she says. With little choice in the matter you continue to suck.`);
    }
    if (((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)) {
      scene.text('You dutifully suck his dick, a little surprised that it tastes good. You lose yourself in the rhythm. Your only thoughts are of the taste of his cum, and the feeling of it dripping down between your thighs.');
    }
    // TODO-QSP: dynamic text: Before you realize it, his cock is rock-hard and throbbing again. <<$telsob>> no...
    scene.text(`Before you realize it, his cock is rock-hard and throbbing again. ${((s as any).telsob ?? 0)} notices too: "Oh, look what you did, ${((s as any).pcs_nickname ?? 0)}. You're such a naughty little girl. Well, I guess your ass is nice and lubed up, so this time he won't have to hold back."`);
    qspCall(s, 'arousal', 'bj', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: '<<$telsob>> knows best', handler: (st: GameState) => {
    (s as any).orgasm = ((s as any).orgasm ?? 0) + (5);
    qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
    scene.img('images/characters/city/boyfriend/sex/event/21.jpg');
    // TODO-QSP: dynamic text: The man lies back on the table, as <<$telsob>> helps you on top of him. When you...
    scene.text(`The man lies back on the table, as ${((s as any).telsob ?? 0)} helps you on top of him. When you are in position she guides his cock back into your already dripping hole. Once you are settled, the guy begins to fuck you with jackhammer thrusts. ${((s as any).telsob ?? 0)} helps by forcing your hips down, sinking him in even deeper.`);
    // TODO-QSP: dynamic text: "Faster boy, I want you to fuck her so she can't sit for a week," she orders him...
    scene.text(`"Faster boy, I want you to fuck her so she can't sit for a week," she orders him. To you she says, "My ${((s as any).pcs_nickname ?? 0)} fucking loves it." Her words send you over the edge again. Your body shakes from head to toe, as you ride another orgasm. When you have regained your senses she whispers to you again, "That's twice you little slut."`);
    // TODO-QSP: dynamic text: When the waiter is getting close <<$telsob>> stops him with a command, "In her m...
    scene.text(`When the waiter is getting close ${((s as any).telsob ?? 0)} stops him with a command, "In her mouth this time, boy."`);
    qspCall(s, 'arousal', 'anal', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'In your mouth', handler: (st: GameState) => {
    (s as any).spafinloc = 11;
    qspCall(s, 'cum_manage', '');
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
    scene.img('images/characters/city/boyfriend/sex/event/22.jpg');
    // TODO-QSP: dynamic text: As soon you drop to your knees, <<$telsob>> furiously jerks his cock, aiming it ...
    scene.text(`As soon you drop to your knees, ${((s as any).telsob ?? 0)} furiously jerks his cock, aiming it at your mouth. The man groans loudly, and erupts all over the place. A lot of his cum finds your mouth, but it also runs down your chin and chest. Looking up, you see ${((s as any).telsob ?? 0)} looking at you like a proud parent.`);
    scene.actions([
      { label: 'Kiss <<$telsob>>', handler: (st: GameState) => {
    scene.img('images/characters/city/boyfriend/sex/event/23.jpg');
    // TODO-QSP: dynamic text: <<$telsob>> leans down, and kisses you deeply. You push a little of the mans cum...
    scene.text(`${((s as any).telsob ?? 0)} leans down, and kisses you deeply. You push a little of the mans cum into her mouth with your tongue. She swallows it down, with a wicked grin. Not satisfied she moves further down licking the cum from your breasts and stomach. Just when you think she is finished cleaning you, she rocks your hips back exposing your backside. She passionately licks and kisses your little hole, as she works to collect every drop. When she is finished, she gives you one last deep kiss. It tastes wonderful.`);
    qspCall(s, 'arousal', 'kiss', 5, 'lesbian', 'sub');
    qspCall(s, 'arousal', 'cuni', (-5), 'lesbian', 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', goto: ['kafesvid', 'end'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterEnd(s: GameState, scene: SceneBuilder): void {
  (s as any).kafesvidsex = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'arousal', 'end');
  scene.img('images/characters/city/boyfriend/sex/event/0.jpg');
  if (((s as any).telsob ?? 0) === 'Alla'  ||  ((s as any).telsob ?? 0) === 'Masha'  ||  ((s as any).telsob ?? 0) === 'Kate') {
    // TODO-QSP: dynamic text: After your fun, <<$telsob>> says she has to go. She leaves you with a little kis...
    scene.text(`After your fun, ${((s as any).telsob ?? 0)} says she has to go. She leaves you with a little kiss on the cheek.`);
    if (((s as any).home ?? 0)?.['town'] === 'pavlovsk') {
      scene.actions([
        { label: 'Leave', goto: ['pav_residential', ''] },
      ]);
    } else {
      scene.actions([
        { label: 'Leave', goto: ['city_center', ''] },
      ]);
    }
  } else {
    // TODO-QSP: dynamic text: After your fun, <<$telsob>> looks at you and waits for your next move.
    scene.text(`After your fun, ${((s as any).telsob ?? 0)} looks at you and waits for your next move.`);
    if (((s as any).home ?? 0)?.['town'] === 'pavlovsk') {
      scene.actions([
        { label: 'Say goodbye', goto: ['pav_residential', ''] },
      ]);
    } else {
      scene.actions([
        { label: 'Say goodby', goto: ['city_center', ''] },
      ]);
    }
    scene.actions([
      { label: 'Invite her to your home', goto: ['lezbsex', 'startloverhome'] },
    ]);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case '1':
      enter1(s, scene);
      break;
    case '10':
      enter10(s, scene);
      break;
    case '11':
      enter11(s, scene);
      break;
    case '12':
      enter12(s, scene);
      break;
    case '13':
      enter13(s, scene);
      break;
    case '2':
      enter2(s, scene);
      break;
    case 'end':
      enterEnd(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const kafesvid: LocationDef = {
  name: 'kafesvid',
  title: '<center><b>Cafe</b></center>',
  region: 'other',
  locationType: 'event',
  enter: enter,
};
