import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).vika_sleep ?? 0) === 1) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'asleep']; enterText(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'asleep']; enterActions(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A220'] >= 60  &&  ((s as any).birthday ?? 0) === ((s as any).day ?? 0)  &&  ((s as any).birthmonth ?? 0) === ((s as any).month ?? 0)  &&  ((s as any).vikaslut ?? 0) === 1  &&  ((s as any).b_vika_present_Day ?? 0) !== ((s as any).daystart ?? 0)) {
      (s as any).b_vika_present_Day = ((s as any).daystart ?? 0);
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'awake', 'birthday']; enterText(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'awake', 'birthday']; enterActions(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'awake']; enterText(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'awake']; enterActions(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterText(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Vika Kirilova</b></center>');
  if (String((s as any).locArgs?.[1] ?? '') === 'asleep') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAsleepText(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'awake') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[2] ?? 0)]; enterAwakeText(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterActions(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (String((s as any).locArgs?.[1] ?? '') === 'asleep') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAsleepActions(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'awake') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[2] ?? 0)]; enterAwakeActions(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAsleepText(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  if (((s as any).vikaslut ?? 0) === 1) {
    scene.img('images/characters/city/university/girl/vika/vika_sleep_b.jpg');
    scene.text('Vika is sleeping in her bed, naked. You wonder what she got up at the brothel tonight.');
  } else {
    scene.img('images/characters/city/university/girl/vika/vika_sleep.jpg');
    scene.text('Vika is sleeping in her bed after a night of adventures. You wonder what she got up to tonight.');
  }
  // TODO-QSP: end
  scene.build();
}

function enterAsleepActions(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterAwakeText(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'birthday') {
    scene.img('images/characters/city/university/girl/vika/vika1.jpg');
  } else {
    scene.img('images/characters/shared/headshots_main/big220.jpg');
  }
  // TODO-QSP: dynamic text: Your roommate is Vika Kirilova, who is <<age + 1>> years old. She comes from a t...
  scene.text(`Your roommate is Vika Kirilova, who is ${((s as any).age ?? '') + 1} years old. She comes from a town much further away than yours and, like you, comes from a poor family.`);
  if (((s as any).vikaslut ?? 0) === 1) {
    scene.text('You know she works as a whore in a brothel in the red light district.');
  } else {
    scene.text('You don\'t really know much about her yet.');
  }
  if (((s as any).npc_rel ?? 0)?.['A220'] < 20) {
    scene.text('You and Vika are strangers to each other.');
  } else {
    if (((s as any).npc_rel ?? 0)?.['A220'] < 40) {
      scene.text('You and Vika are getting to know each other.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A220'] < 60) {
        scene.text('You and Vika are on friendly terms.');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A220'] < 80) {
          scene.text('The two of you are friends.');
        } else {
          scene.text('The two of you are best friends.');
        }
      }
    }
  }
  scene.text('');
  if (String((s as any).locArgs?.[1] ?? '') === 'birthday') {
    scene.text('You don\'t have time to say a word before Vika practically pounces on you.');
    scene.text('"There\'s my favorite birthday girl! Happy birthday!" she screeches as she hugs and kisses you on the cheek.');
    scene.text('"Wow! This is so unexpected," you reply.');
    scene.text('"Here\'s a present for you," she says before handing you a box. Inside is a sheer, pale blue teddy made of silk.');
    scene.text('"Oh Vika, this is too much!" you exclaim. "It\'s way too expensive!"');
    scene.text('"The least you could do is model it for me, so hurry up and put it on!" she says in a commanding voice while winking at you.');
    scene.text('You\'re a little embarrassed, but you quickly strip off your clothes and put the teddy on. It looks even more sheer on your body. It hides absolutely nothing; your nipples and pussy lips are clearly visible.');
    scene.text('You turn and model it for Vika. A nice gift, but definitely <i>not</i> for everyday use!');
    scene.text('"You look great! I was worried it wouldn\'t fit because I had to guess your size. Put this on, we need to go to your other present."');
    scene.text('She throws you a bathrobe and grabs you by the arm before dragging you out of the room as you struggle to get the robe on in time.');
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLeaveForNight(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterAwakeActions(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'birthday') {
    scene.actions([
      { label: 'Where are we heading?', goto: ['vikaev1', 'b_vika_present_start'] },
    ]);
  } else {
    if (qspFunc(s, 'bordel', 'is_open') === 0) {
      if (String((s as any).locArgs?.[1] ?? '') === 'chat') {
        scene.actions([
          { label: 'Continue chatting (0:15)', handler: (st: GameState) => {
    qspCall(st, 'Vika', 'talk', 'chat');
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Chat with Vika (0:15)', handler: (st: GameState) => {
    qspCall(st, 'Vika', 'talk', 'chat');
  } },
        ]);
      }
      if (String((s as any).locArgs?.[1] ?? '') === 'study') {
        scene.actions([
          { label: 'Continue studying (1:00)', handler: (st: GameState) => {
    qspCall(st, 'Vika', 'talk', 'study', 'continue');
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Study with Vika (1:00)', handler: (st: GameState) => {
    qspCall(st, 'Vika', 'talk', 'study');
  } },
        ]);
      }
      if (((s as any).vikasex ?? 0) > 0  &&  ((s as any).npc_rel ?? 0)?.['A220'] > 40) {
        qspCall(s, 'willpower', 'cuni', 'self', 'easy');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Suggest you do something fun', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Suggest you do something fun', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    qspCall(st, 'npc_relationship', 'modify', 'A220', 5);
    (st as any).sexloc = 'uni_dorm';
    qspGoto(st, 'lezbsex', 'start');
  } },
          ]);
        }
      }
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBrothelQuestions(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterTalk(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'awake', ((s as any).locArgs?.[1] ?? 0)]; enterText(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (String((s as any).locArgs?.[1] ?? '') === 'chat') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (Math.floor(Math.random() * 12) + 0)]; enterChat(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'study') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[2] ?? 0)]; enterStudy(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'awake', ((s as any).locArgs?.[1] ?? 0)]; enterActions(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLeaveForNight(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterChat(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  if (((s as any).vikachatday ?? 0) !== ((s as any).daystart ?? 0)) {
    qspCall(s, 'npc_relationship', 'modify', 'A220', 3);
  }
  (s as any).vikachatday = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  if (String((s as any).locArgs?.[1] ?? '') === 0) {
    scene.text('You start chatting with Vika and she tells you about the boys she\'s met, the parties she\'s been to and the cosmetics she\'s bought.');
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 1) {
      scene.text('She says she was in a cafe when she was invited to dance by a guy who then paid her bill.');
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 2) {
        scene.text('She says that working as a stripper is a rather profitable job for students, though clients are very grabby.');
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 3) {
          scene.text('She tells you that a few girls from the track team go to the European level sports competitions and earn big money, but admits that she\'s too lazy to put in the effort to make the team.');
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 4) {
            scene.text('She tells you that she always buys birth control pills at the pharmacy, which came in useful one time when one of her friends couldn\'t pull out in time and gave her a creampie.');
          } else {
            if (String((s as any).locArgs?.[1] ?? '') === 5) {
              scene.text('She tells you about the time she walked too deep into the park and a stranger offered her money in exchange for sex.');
            } else {
              if (String((s as any).locArgs?.[1] ?? '') === 6) {
                scene.text('She tells about the time she did a nude photoshoot at the photography studio, but that it\'s bad for your reputation to do so.');
              } else {
                if (String((s as any).locArgs?.[1] ?? '') === 7) {
                  scene.text('She tells a story about how a girl who never washed or shaved. She smelled <i>awful</i> and rumor was that she ended up with a vaginal infection.');
                } else {
                  if (String((s as any).locArgs?.[1] ?? '') === 8) {
                    scene.text('Vika says that she buys tampons and always keeps a reserve of them, even if she is on the birth control shot.');
                  } else {
                    if (String((s as any).locArgs?.[1] ?? '') === 9) {
                      scene.text('She tells how one of her guys likes anal sex, and that she let him fuck her ass even though she didn\'t have any lube. She tells you how it hurt a lot at first before she started to like it.');
                    } else {
                      if (String((s as any).locArgs?.[1] ?? '') === 10) {
                        scene.text('She tells how she needs to buy a new swimsuit for sunbathing at the beach.');
                      } else {
                        scene.text('She tells you that swimming is a great way to keep yourself in shape, even if she is too lazy to do it herself.');
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
  // TODO-QSP: end
  scene.build();
}

function enterStudy(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'exp_gain', 'intel', 1);
  qspCall(s, 'npc_relationship', 'modify', 'A220', 'like');
  qspCall(s, 'stat', '');
  // TODO-QSP: iif($ARGS[1] = 'continue', 'You and Vika continue studying together.', 'You get out your textbooks a...
  // TODO-QSP: end
  scene.build();
}

function enterLeaveForNight(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'bordel', 'is_open')) {
    // TODO-QSP: 'Vika tells you she needs to ' + iif(vikaslut = 1, 'leave for work at the brothel.', 'get going.')
  }
  // TODO-QSP: end
  scene.build();
}

function enterBrothelQuestions(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_rel ?? 0)?.['A220'] > 80) {
    if ((!((s as any).vikaslut ?? 0))) {
      scene.actions([
        { label: 'Ask where she goes at night', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    (st as any).vikaslut = 1;
    scene.text('She hesitates as she blushes. "I\'m just… Walking around the city…"');
    scene.text('"You expect me to believe that you just walk around the city all night long? I thought we were friends, but if you don\'t want to tell me, then that\'s fine…"');
    scene.text('You try not to be disappointed since you understand it\'s none of your business.');
    scene.text('"I work at the local nightclub…" she mumbles hesitantly.');
    scene.text('"I\'ve been to that club many times and have never seen you there. <i>Ever</i>," you reply as you turn away, hurt that she\'s lying to your face. "If you don\'t want me to know, then just say so. I was just hoping we could go together and hang out."');
    scene.text('"Don\'t be mad! I\'ll show you! Just promise you\'ll still be my friend…"');
    scene.text('You\'re taken aback. "Of course we\'ll still be friends!"');
    scene.text('"I\'ll show you then," she tells you before grabbing your hand.');
    scene.actions([
      { label: 'Follow Vika', goto: ['bordelv', ''] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).vikaslut ?? 0) === 1) {
        if ((!((s as any).bordel ?? 0))) {
          scene.actions([
            { label: 'Ask if she can get you a job at the brothel', handler: (st: GameState) => {
    // TODO-QSP: delact $selact
    qspCall(st, 'npc_relationship', 'modify', 'A220', 'adore');
    (st as any).bordel = 1;
    (st as any).odkomp = 0;
    scene.text('"Do you think you could get me a job at the brothel?" you ask.');
    // TODO-QSP: dynamic text: '"I can ask the manager, but I can''t guarantee anything. Come by' + iif(hour < ...
    scene.text('"I can ask the manager, but I can\'t guarantee anything. Come by' + ((((st as any).hour ?? 0) < 20) ? (' after 20:00') : ('')) + ', and I\'ll see what I can do."');
  } },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'text':
      enterText(s, scene);
      break;
    case 'actions':
      enterActions(s, scene);
      break;
    case 'asleep_text':
      enterAsleepText(s, scene);
      break;
    case 'asleep_actions':
      enterAsleepActions(s, scene);
      break;
    case 'awake_text':
      enterAwakeText(s, scene);
      break;
    case 'awake_actions':
      enterAwakeActions(s, scene);
      break;
    case 'talk':
      enterTalk(s, scene);
      break;
    case 'chat':
      enterChat(s, scene);
      break;
    case 'study':
      enterStudy(s, scene);
      break;
    case 'leave_for_night':
      enterLeaveForNight(s, scene);
      break;
    case 'brothel_questions':
      enterBrothelQuestions(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const Vika: LocationDef = {
  name: 'Vika',
  title: 'Vika Kirilova',
  region: 'other',
  enter: enter,
};
