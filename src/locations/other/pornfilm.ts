import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterPornactor(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pfactor ?? 0) !== 50) {
    (s as any).num = ((s as any).pfactor ?? 0);
    // TODO-QSP: :actorloop
    (s as any).akrand = (Math.floor(Math.random() * 10) + 1);
    if (((s as any).akrand ?? 0) === 1) {
      // TODO-QSP: $pactor[num] = 'Alexei Radimov'
      // TODO-QSP: $pactorID[num] = 'A193'
    } else {
      if (((s as any).akrand ?? 0) === 2) {
        // TODO-QSP: $pactor[num] = 'Sergei Tatarov'
        // TODO-QSP: $pactorID[num] = 'A194'
      } else {
        if (((s as any).akrand ?? 0) === 3) {
          // TODO-QSP: $pactor[num] = 'Egor Klyuyev'
          // TODO-QSP: $pactorID[num] = 'A195'
        } else {
          if (((s as any).akrand ?? 0) === 4) {
            // TODO-QSP: $pactor[num] = 'Ignat Vedenin'
            // TODO-QSP: $pactorID[num] = 'A196'
          } else {
            if (((s as any).akrand ?? 0) === 5) {
              // TODO-QSP: $pactor[num] = 'Syoma Rodionov'
              // TODO-QSP: $pactorID[num] = 'A197'
            } else {
              if (((s as any).akrand ?? 0) === 6) {
                // TODO-QSP: $pactor[num] = 'Vasya Harkov'
                // TODO-QSP: $pactorID[num] = 'A198'
              } else {
                if (((s as any).akrand ?? 0) === 7) {
                  // TODO-QSP: $pactor[num] = 'Boris Tabrov'
                  // TODO-QSP: $pactorID[num] = 'A199'
                } else {
                  if (((s as any).akrand ?? 0) === 8) {
                    // TODO-QSP: $pactor[num] = 'Daniel Rasnik'
                    // TODO-QSP: $pactorID[num] = 'A200'
                  } else {
                    if (((s as any).akrand ?? 0) === 9) {
                      // TODO-QSP: $pactor[num] = 'Peter Izratam'
                      // TODO-QSP: $pactorID[num] = 'A201'
                    } else {
                      if (((s as any).akrand ?? 0) === 10) {
                        // TODO-QSP: $pactor[num] = 'Oleg Taburov'
                        // TODO-QSP: $pactorID[num] = 'A202'
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
    if (((s as any).num ?? 0) < ((s as any).pfactor ?? 0)) {
      (s as any).num2 = ((s as any).pfactor ?? 0);
      // TODO-QSP: :actorloop2
      if (((s as any).pactor ?? 0)?.[String((s as any).num ?? 0)] === ((s as any).pactor ?? 0)?.[String((s as any).num2 ?? 0)]) {
        // TODO-QSP: jump 'actorloop'
      }
      (s as any).num2 = ((s as any).num2 ?? 0) - (1);
      if (((s as any).num2 ?? 0) > ((s as any).num ?? 0)) {
        // TODO-QSP: jump 'actorloop2'
      }
    }
    if (((s as any).aksex ?? 0)?.[String((s as any).akrand ?? 0)] === 0) {
      ((s as any).aksex = (s as any).aksex ?? {})[String((s as any).akrand ?? 0)] = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    (s as any).num = ((s as any).num ?? 0) - (1);
    if (((s as any).num ?? 0) > 0) {
      // TODO-QSP: jump 'actorloop'
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterPornactress(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pfactor ?? 0) !== 50) {
    (s as any).num = ((s as any).pfactor ?? 0);
    // TODO-QSP: :actressloop
    (s as any).akrand = (Math.floor(Math.random() * 10) + 1);
    if (((s as any).akrand ?? 0) === 1) {
      // TODO-QSP: $pactress[num] = 'Krystal'
      // TODO-QSP: $pactressID[num] = 'A207'
    } else {
      if (((s as any).akrand ?? 0) === 2) {
        // TODO-QSP: $pactress[num] = 'Ash Lee'
        // TODO-QSP: $pactressID[num] = 'A234'
      } else {
        if (((s as any).akrand ?? 0) === 3) {
          // TODO-QSP: $pactress[num] = 'Juliana Slavenka'
          // TODO-QSP: $pactressID[num] = 'A235'
        } else {
          if (((s as any).akrand ?? 0) === 4) {
            // TODO-QSP: $pactress[num] = 'Katrina Valentine'
            // TODO-QSP: $pactressID[num] = 'A236'
          } else {
            if (((s as any).akrand ?? 0) === 5) {
              // TODO-QSP: $pactress[num] = 'Alli Smirnova'
              // TODO-QSP: $pactressID[num] = 'A237'
            } else {
              if (((s as any).akrand ?? 0) === 6) {
                // TODO-QSP: $pactress[num] = 'Scarlett Rose'
                // TODO-QSP: $pactressID[num] = 'A203'
              }
            }
          }
        }
      }
    }
    if (((s as any).num ?? 0) < ((s as any).pfactor ?? 0)) {
      (s as any).num2 = ((s as any).pfactor ?? 0);
      // TODO-QSP: :actressloop2
      if (((s as any).pactress ?? 0)?.[String((s as any).num ?? 0)] === ((s as any).pactress ?? 0)?.[String((s as any).num2 ?? 0)]) {
        // TODO-QSP: jump 'actressloop'
      }
      (s as any).num2 = ((s as any).num2 ?? 0) - (1);
      if (((s as any).num2 ?? 0) > ((s as any).num ?? 0)) {
        // TODO-QSP: jump 'actressloop2'
      }
    }
    if (((s as any).aksex ?? 0)?.[String((s as any).akrand ?? 0)] === 0) {
      ((s as any).aksex = (s as any).aksex ?? {})[String((s as any).akrand ?? 0)] = 1;
      (s as any).girl = ((s as any).girl ?? 0) + (1);
    }
    (s as any).num = ((s as any).num ?? 0) - (1);
    if (((s as any).num ?? 0) > 0) {
      // TODO-QSP: jump 'actressloop'
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enter1(s: GameState, scene: SceneBuilder): void {
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    (s as any).pornhj = ((s as any).pornhj ?? 0) + (1);
  }
  (s as any).pornbukk = ((s as any).pornbukk ?? 0) + (1);
  (s as any).pfType = 0;
  qspCall(s, 'fame', 'city', 'porn', 10);
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  qspCall(s, 'npcStat', 'A195');
  scene.text('The set is already bustling with assistants preparing for the shoot.');
  scene.text('An older man with heavily greying hair stands to the side, slowly stroking his dick and grinning as he makes eye contact with you. You quickly realize what the manager meant by "experienced co-star". He looks even older than your stepfather.');
  scene.text('You quickly banish the thoughts from your head as the director starts the shoot.');
  if (((s as any).tits ?? 0) >= 4) {
    scene.actions([
      { label: 'Titfuck', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/titfuck.mp4');
    scene.text('The camera starts rolling and you squirt some oil onto your breasts and massage it in before kneeling in front of Egor as he sits on the bed. You slowly jerk his dick in your hand before wrapping your glistening tits around it and smiling up at him as you start giving him a titfuck.');
    scene.text('He groans in satisfaction as you feel his cock throbbing between your tits.');
    qspCall(st, 'arousal', 'titjob', 30, 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Finish him off', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/hjcumontits.mp4');
    // TODO-QSP: dynamic text: You continue squeezing your tits together and milking his cock as he leans back ...
    scene.text('You continue squeezing your tits together and milking his cock as he leans back and starts groaning. You pick up the pace in response, your tits loudly slapping against him as you smile up at him. "Cum for me. Cum all over my big ' + ((((st as any).age ?? 0) < 20) ? ('teen') : ('')) + ' tits!" you tell him in a teasing tone.');
    scene.text('He soon lets out a loud grunt and you quickly start jerking his dick with your hand before his hot cum starts squirting over your tits. When he finishes, you show your cum covered tits to the camera, playfully teasing your future viewers with a show of you squeezing them together before the shoot ends.');
    // TODO-QSP: dynamic text: As the shoot wraps up, Egor approaches you with a grin. "It must be my lucky day...
    scene.text('As the shoot wraps up, Egor approaches you with a grin. "It must be my lucky day if I was the first to get those tits on camera. I hope I\'m first in line to fuck you too." ' + ((((st as any).age ?? 0) < 20) ? ('He looks you over. "Nothing better than a tight teen pussy squeezing your cock. First Alli and now you. This job just gets better and better."') : ('He looks over. "That pussy is just begging for my dick."')) + '');
    scene.text('He whistles contently as he walks away, leaving you to go and clean up.');
    qspCall(st, 'cum_call', 'breasts', ((st as any).npcID ?? 0), 1);
    qspCall(st, 'arousal', 'titjob', 5, 'exhibitionism');
    qspCall(st, 'arousal', 'hj', 5, 'exhibitionism');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Take a shower', goto: ['pornstudio', 'shower'] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Jerk him off', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/hj.mp4');
    scene.text('Egor sits on the bed as the camera starts rolling. You kneel in front of him, take his dick in your hand and start stroking it. He groans in satisfaction as you feel his cock throbbing in your hand.');
    qspCall(st, 'arousal', 'hj', 30, 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Finish him off', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/hjcumontits.mp4');
    // TODO-QSP: dynamic text: Egor caresses your tits as you continue to jerk his cock. After a few minutes, h...
    scene.text('Egor caresses your tits as you continue to jerk his cock. After a few minutes, he stops feeling you up, leans back and starts groaning. You pick up the pace in response, jerking his dick as you aim it at your tits. "Yes, cum all over my ' + ((((st as any).age ?? 0) < 20) ? ('teen') : ('')) + ' tits!" you tell him in a teasing tone.');
    scene.text('He soon lets out a loud grunt, and his hot cum starts squirting over your tits. When he finishes, you show your cum covered tits to the camera, playfully teasing your future viewers with a show of you squeezing them together before the shoot ends.');
    // TODO-QSP: dynamic text: As the shoot wraps up, Egor approaches you with a grin. "It must be my lucky day...
    scene.text('As the shoot wraps up, Egor approaches you with a grin. "It must be my lucky day if I was the first to get on camera with you. I hope I\'m first in line to fuck you too." ' + ((((st as any).age ?? 0) < 20) ? ('He looks you over. "Nothing better than a tight teen pussy squeezing your cock. First Alli and now you. This job just gets better and better."') : ('He looks over. "That pussy is just begging for my dick."')) + '');
    scene.text('He whistles contently as he walks away, leaving you to go and clean up.');
    qspCall(st, 'cum_call', 'breasts', 'A195', 1);
    qspCall(st, 'arousal', 'hj', 5, 'exhibitionism');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Take a shower', goto: ['pornstudio', 'shower'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enter2(s: GameState, scene: SceneBuilder): void {
  if ((!(Math.floor(Math.random() * 3) + 0))) {
    (s as any).pornhj = ((s as any).pornhj ?? 0) + (1);
  }
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    (s as any).pornbj = ((s as any).pornbj ?? 0) + (1);
  }
  (s as any).pornswall = ((s as any).pornswall ?? 0) + (1);
  if ((!(Math.floor(Math.random() * 3) + 0))) {
    (s as any).pornbukk = ((s as any).pornbukk ?? 0) + (1);
  }
  (s as any).pfType = 0;
  qspCall(s, 'fame', 'city', 'porn', 12);
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  // TODO-QSP: gs 'npcStat', $pactorID[1]
  scene.text('The set is already bustling with assistants preparing for the shoot.');
  // TODO-QSP: dynamic text: <<$npcdesc>> is your co-star for this shoot. He is standing to the side, slowly ...
  scene.text(`${((s as any).npcdesc ?? '')} is your co-star for this shoot. He is standing to the side, slowly stroking his dick.`);
  scene.actions([
{ label: 'Undress and start', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/hj.mp4');
    // TODO-QSP: dynamic text: <<$npcdesc>> sits on the bed as the camera starts rolling. You kneel in front of...
    scene.text(`${((st as any).npcdesc ?? '')} sits on the bed as the camera starts rolling. You kneel in front of him, take his dick in your hand and start stroking it.`);
    qspCall(st, 'arousal', 'hj', 30, 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Blow him', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/bj.mp4');
    scene.text('His cock is now rock-hard as you take it into your mouth and start sucking.');
    qspCall(st, 'arousal', 'bj', 5, 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Keep sucking', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/deep.mp4');
    // TODO-QSP: dynamic text: <<$npcdesc>> grabs your hair in his fists and starts fucking your mouth, driving...
    scene.text(`${((st as any).npcdesc ?? '')} grabs your hair in his fists and starts fucking your mouth, driving his cock down your throat with every thrust.`);
    scene.text('After a few minutes, he takes his cock out, and you wipe the saliva from your mouth while gasping for air.');
    qspCall(st, 'arousal', 'bj', 5, 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Open your mouth', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img('images/locations/city/redlight/studio_porn/sex/cum.mp4');
    // TODO-QSP: dynamic text: <<$npcdesc>> gives you a nod to let you know he''s close, so you start quickly j...
    scene.text(`${((st as any).npcdesc ?? '')} gives you a nod to let you know he's close, so you start quickly jerking him and stick your tongue out for him to shoot his load.`);
    (st as any).cumnostd = 1;
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).npcID ?? 0), 1, 0, 0, 36);
    qspCall(st, 'cum_call', 'face', ((st as any).npcID ?? 0), 1, 0, 0, 4);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Clean his cock', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/redlight/studio_porn/sex/bj2.mp4');
    scene.text('You keep your eyes fixed on him as you gently lick every last drop of sperm from his cock before taking it back in your mouth and sucking, causing him to groan loudly.');
    scene.text('You then pop his dick out of your mouth and smile up at him as the shoot ends.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Take a shower', goto: ['pornstudio', 'shower'] },
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
  return;
  // TODO-QSP: end
  scene.build();
}

function enter3(s: GameState, scene: SceneBuilder): void {
  if ((!(Math.floor(Math.random() * 3) + 0))) {
    (s as any).pornhj = ((s as any).pornhj ?? 0) + (1);
  }
  if ((!(Math.floor(Math.random() * 3) + 0))) {
    (s as any).pornbj = ((s as any).pornbj ?? 0) + (1);
  }
  (s as any).pornvag = ((s as any).pornvag ?? 0) + (1);
  (s as any).pornswall = ((s as any).pornswall ?? 0) + (1);
  (s as any).pfType = 0;
  qspCall(s, 'fame', 'city', 'porn', 16);
  (s as any).minut = ((s as any).minut ?? 0) + 180;
  qspCall(s, 'stat', '');
  // TODO-QSP: gs 'npcStat', $pactorID[1]
  scene.text('The set is already bustling with assistants preparing for the shoot.');
  // TODO-QSP: dynamic text: <<$npcdesc>> is your co-star for this shoot. He is standing to the side, slowly ...
  scene.text(`${((s as any).npcdesc ?? '')} is your co-star for this shoot. He is standing to the side, slowly stroking his dick.`);
  scene.actions([
{ label: 'Undress and start', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/hj.mp4');
    scene.text('The camera starts rolling, and the scene begins with you walking onto the set and giving the camera a teasing striptease and close-up of your naked body.');
    // TODO-QSP: dynamic text: <<$npcdesc>> then walks over and sits on the bed. You kneel before him, take his...
    scene.text(`${((st as any).npcdesc ?? '')} then walks over and sits on the bed. You kneel before him, take his dick in your hand and start stroking it.`);
    qspCall(st, 'arousal', 'striptease', 5);
    qspCall(st, 'arousal', 'hj', 25, 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Blow him', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/bj.mp4');
    scene.text('You take his shaft into your mouth and start passionately sucking his dick while gazing up at him, giving him and the camera a seductive look. As you continue sucking, you reach between your legs and slowly massage your clit.');
    qspCall(st, 'arousal', 'bj', 5, 'exhibitionism');
    qspCall(st, 'arousal', 'clit_finger', 5, 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Deepthroat', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/deep.mp4');
    // TODO-QSP: dynamic text: <<$npcdesc>> grabs your hair in his fists. He starts intensely fucking your mout...
    scene.text(`${((st as any).npcdesc ?? '')} grabs your hair in his fists. He starts intensely fucking your mouth, occasionally withdrawing completely to allow you to catch your breath before returning more vigorously.`);
    qspCall(st, 'arousal', 'bj', 5, 'exhibitionism', 'deepthroat');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Doggystyle', handler: (st: GameState) => {
    qspCall(st, 'arousal_funcs', 'stretch', 'vaginal');
    scene.img('images/locations/city/redlight/studio_porn/sex/doggysex.mp4');
    // TODO-QSP: dynamic text: You stand and get on all fours on the edge of the bed. <<$npcdesc>> guides his d...
    scene.text(`You stand and get on all fours on the edge of the bed. ${((st as any).npcdesc ?? '')} guides his dick into your pussy and begins to fuck you hard from behind.`);
    scene.text('You spend the next few minutes getting fucked in this position before calling for a break. Once you\'re rested, you get back into position and spend quite a bit of time getting fucked in various poses.');
    (st as any).cumnostd = 1;
    qspCall(st, 'cum_call', 'precum', ((st as any).npcID ?? 0), 1, 0, 10000, 1);
    qspCall(st, 'arousal', 'vaginal', 15, 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Facial', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).cumnostd = 1;
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).npcID ?? 0), 1, 0, 0, 36);
    qspCall(st, 'cum_call', 'face', ((st as any).npcID ?? 0), 1, 0, 0, 4);
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/redlight/studio_porn/sex/cum.mp4');
    // TODO-QSP: dynamic text: <<$npcdesc>> pounds you hard in the missionary position, your legs spread high a...
    scene.text(`${((st as any).npcdesc ?? '')} pounds you hard in the missionary position, your legs spread high and wide as you talk dirty for the camera. You hear him panting loudly and feel him pulling out of you, so you slide off the bed and onto your knees in front of him as he shoots his load across your face with a loud grunt.`);
    scene.actions([
      { label: 'Clean his cock', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'arousal', 'end');
    scene.img('images/locations/city/redlight/studio_porn/sex/bj2.mp4');
    scene.text('You gaze up at him adoringly as you meticulously lick all the cum off his dick before taking it into your mouth and sucking. The director ends the shoot looking rather pleased.');
    scene.actions([
      { label: 'Take a shower', goto: ['pornstudio', 'shower'] },
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
  return;
  // TODO-QSP: end
  scene.build();
}

function enter4(s: GameState, scene: SceneBuilder): void {
  if ((!(Math.floor(Math.random() * 3) + 0))) {
    (s as any).pornhj = ((s as any).pornhj ?? 0) + (1);
  }
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    (s as any).pornbj = ((s as any).pornbj ?? 0) + (1);
  }
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    (s as any).pornvag = ((s as any).pornvag ?? 0) + (1);
  }
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    (s as any).pornanal = ((s as any).pornanal ?? 0) + (1);
  }
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    (s as any).pornbukk = ((s as any).pornbukk ?? 0) + (1);
  }
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    (s as any).pornswall = ((s as any).pornswall ?? 0) + (1);
  }
  (s as any).pfType = 0;
  qspCall(s, 'fame', 'city', 'porn', 20);
  (s as any).minut = ((s as any).minut ?? 0) + 180;
  qspCall(s, 'stat', '');
  // TODO-QSP: gs 'npcStat', $pactorID[1]
  scene.text('The set is already bustling with assistants preparing for the shoot.');
  // TODO-QSP: dynamic text: <<$npcdesc>> is your co-star for this shoot. He is standing to the side, slowly ...
  scene.text(`${((s as any).npcdesc ?? '')} is your co-star for this shoot. He is standing to the side, slowly stroking his dick.`);
  scene.actions([
{ label: 'Undress and start', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/hj.mp4');
    scene.text('The camera starts rolling and the scene starts with you walking onto the set and giving the camera a very teasing striptease and close up of your naked body.');
    // TODO-QSP: dynamic text: <<$npcdesc>> then walks over and sits on the bed. You kneel before him, take his...
    scene.text(`${((st as any).npcdesc ?? '')} then walks over and sits on the bed. You kneel before him, take his dick in your hand and start stroking it.`);
    qspCall(st, 'arousal', 'striptease', 5);
    qspCall(st, 'arousal', 'hj', 25, 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Blow him', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/bj.mp4');
    scene.text('Admiring the impressive size of the cock before you, you wrap your lips around the shaft and start sucking it as you reach between your legs and start rubbing your clit.');
    qspCall(st, 'arousal', 'bj', 5, 'exhibitionism');
    qspCall(st, 'arousal', 'clit_finger', 5, 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Suck further', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/deep.mp4');
    // TODO-QSP: dynamic text: <<$npcdesc>> relaxes as you take control, trying to take the entire length of hi...
    scene.text(`${((st as any).npcdesc ?? '')} relaxes as you take control, trying to take the entire length of his cock down your throat.`);
    qspCall(st, 'arousal', 'bj', 5, 'exhibitionism', 'deepthroat');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Ride him', handler: (st: GameState) => {
    qspCall(st, 'arousal_funcs', 'stretch', 'vaginal');
    scene.img('images/locations/city/redlight/studio_porn/sex/sex.mp4');
    // TODO-QSP: dynamic text: You straddle <<$npcdesc>> and guide his dick into your pussy. You begin to ride ...
    scene.text(`You straddle ${((st as any).npcdesc ?? '')} and guide his dick into your pussy. You begin to ride him hard and really get into it. After a few minutes, he lifts you off his dick, throws you on your back and spreads your legs so he can fuck you missionary-style.`);
    // TODO-QSP: dynamic text: After pounding your pussy in various poses, <<$npcdesc>> pulls his cock out of y...
    scene.text(`After pounding your pussy in various poses, ${((st as any).npcdesc ?? '')} pulls his cock out of you and gets you on all fours, your ass high in the air. You feel him pressing against your anus.`);
    (st as any).cumnostd = 1;
    qspCall(st, 'cum_call', 'precum', ((st as any).npcID ?? 0), 1, 0, 10000, 1);
    qspCall(st, 'arousal', 'vaginal', 5, 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Anal', handler: (st: GameState) => {
    qspCall(st, 'arousal_funcs', 'stretch', 'anal', 1);
    scene.img('images/locations/city/redlight/studio_porn/sex/sex1.mp4');
    // TODO-QSP: dynamic text: You try your best to relax as <<$npcdesc>> pushes into your ass and immediately ...
    scene.text(`You try your best to relax as ${((st as any).npcdesc ?? '')} pushes into your ass and immediately goes at it like a jackhammer. He pulls out a few times to let you recover, the camera coming in for shots of your stretched hole each time before he plunges his dick back inside you.`);
    qspCall(st, 'arousal', 'anal', 5, 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Kneel down and open your mouth', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/redlight/studio_porn/sex/cum.mp4');
    // TODO-QSP: dynamic text: <<$npcdesc>> grabs you by the hips and really starts pounding your ass. Just as ...
    scene.text(`${((st as any).npcdesc ?? '')} grabs you by the hips and really starts pounding your ass. Just as it's starting to hurt, he pulls out of your ass and you quickly turn and kneel before him. He vigorously jerks his dick, and his cum soon splatters your face and your tongue.`);
    (st as any).cumnostd = 1;
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).npcID ?? 0), 1, 0, 0, 36);
    qspCall(st, 'cum_call', 'face', ((st as any).npcID ?? 0), 1, 0, 0, 4);
    scene.actions([
      { label: 'Clean his cock', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/redlight/studio_porn/sex/bj2.mp4');
    scene.text('You look deep into his eyes as you lick and suck his cock clean before he steps aside to let the camera come in for a shot of you.');
    scene.text('You look up at the camera and smile, playfully showing off your cum coated face before the shoot ends.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Take a shower', goto: ['pornstudio', 'shower'] },
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
  return;
  // TODO-QSP: end
  scene.build();
}

function enter5(s: GameState, scene: SceneBuilder): void {
  if ((!(Math.floor(Math.random() * 3) + 0))) {
    (s as any).pornhj = ((s as any).pornhj ?? 0) + (1);
  }
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    (s as any).pornbj = ((s as any).pornbj ?? 0) + (1);
  }
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    (s as any).pornvag = ((s as any).pornvag ?? 0) + (1);
  }
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    (s as any).pornanal = ((s as any).pornanal ?? 0) + (1);
  }
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    (s as any).pornbukk = ((s as any).pornbukk ?? 0) + (1);
  }
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    (s as any).pornswall = ((s as any).pornswall ?? 0) + (1);
  }
  (s as any).porngang = ((s as any).porngang ?? 0) + (1);
  (s as any).pfType = 0;
  qspCall(s, 'fame', 'city', 'porn', 25);
  (s as any).minut = ((s as any).minut ?? 0) + 180;
  ((s as any).stat = (s as any).stat ?? {})['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  // TODO-QSP: gs 'npcStat', $pactorID[1]
  // TODO-QSP: gs 'npcStat', $pactorID[2], 'a'
  scene.text('The set is already bustling with assistants preparing for the shoot.');
  // TODO-QSP: dynamic text: Your co-stars for this shoot are <<$npcdesc>> and <<$npcdesc1>>. They watch porn...
  scene.text(`Your co-stars for this shoot are ${((s as any).npcdesc ?? '')} and ${((s as any).npcdesc1 ?? '')}. They watch porn on a monitor, getting their cocks ready for you.`);
  scene.actions([
{ label: 'Undress and kneel', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/tbj.mp4');
    // TODO-QSP: dynamic text: You get into position kneeling before <<$npcdesc>> and <<$npcdesc1>>. When the c...
    scene.text(`You get into position kneeling before ${((st as any).npcdesc ?? '')} and ${((st as any).npcdesc1 ?? '')}. When the camera starts rolling, they slap their fully erect cocks against your face.`);
    qspCall(st, 'arousal', 'bj', 5, ((st as any).npcID ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'arousal', 'bj', 5, ((st as any).npcID1 ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Suck them', handler: (st: GameState) => {
    (st as any).pornbj = ((st as any).pornbj ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/redlight/studio_porn/sex/tbj2.mp4');
    scene.text('You then start sucking the two dicks in front of you, jerking the other with your hand. The two men moan loudly in pleasure and encourage you to take them deeper.');
    qspCall(st, 'arousal', 'bj', 8, ((st as any).npcID ?? 0), 'exhibitionism');
    qspCall(st, 'arousal', 'bj', 7, ((st as any).npcID1 ?? 0), 'exhibitionism');
    qspCall(st, 'arousal', 'hj', (-7), ((st as any).npcID ?? 0), 'exhibitionism');
    qspCall(st, 'arousal', 'hj', (-8), ((st as any).npcID1 ?? 0), 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Spitroast', handler: (st: GameState) => {
    qspCall(st, 'arousal_funcs', 'stretch', 'vaginal');
    (st as any).pornvag = ((st as any).pornvag ?? 0) + (1);
    scene.img('images/locations/city/redlight/studio_porn/sex/three.mp4');
    // TODO-QSP: dynamic text: The men get you on all fours, and <<$npcdesc>> slides his dick into your pussy. ...
    scene.text(`The men get you on all fours, and ${((st as any).npcdesc ?? '')} slides his dick into your pussy. At the same time, you continue to suck ${((st as any).npcdesc1 ?? '')}'s dick.`);
    scene.text('The two men spend the next few minutes repositioning you and taking turns fucking your pussy.');
    (st as any).cumnostd = 1;
    qspCall(st, 'cum_call', 'precum', ((st as any).npcID ?? 0), 1, 0, 10000, 1);
    qspCall(st, 'arousal', 'bj', (-15), ((st as any).npcID1 ?? 0), 'exhibitionism');
    qspCall(st, 'arousal', 'vaginal', 15, ((st as any).npcID ?? 0), 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Anal', handler: (st: GameState) => {
    qspCall(st, 'arousal_funcs', 'stretch', 'anal', 1);
    (st as any).pornanal = ((st as any).pornanal ?? 0) + (1);
    scene.img('images/locations/city/redlight/studio_porn/sex/threea.mp4');
    // TODO-QSP: dynamic text: <<$npcdesc>> takes his cock out of your pussy and plunges it into your ass. The ...
    scene.text(`${((st as any).npcdesc ?? '')} takes his cock out of your pussy and plunges it into your ass. The extra tightness quickly overwhelms him. After a few minutes in your ass, you feel him unloading inside you with a loud grunt.`);
    // TODO-QSP: dynamic text: You keep sucking <<$npcdesc1>>, who sounds like he is also close to climax.
    scene.text(`You keep sucking ${((st as any).npcdesc1 ?? '')}, who sounds like he is also close to climax.`);
    (st as any).cumnostd = 1;
    qspCall(st, 'cum_call', 'anus', ((st as any).npcID ?? 0), 1, 0, 0, 40);
    qspCall(st, 'arousal', 'bj', (-15), ((st as any).npcID1 ?? 0), 'exhibitionism');
    qspCall(st, 'arousal', 'anal', 15, ((st as any).npcID ?? 0), 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Facial', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).pornswall = ((st as any).pornswall ?? 0) + (1);
    scene.img('images/locations/city/redlight/studio_porn/sex/tcum.mp4');
    // TODO-QSP: dynamic text: You''re about to move around to clean up <<$npcdesc>> when <<$npcdesc1>> grabs y...
    scene.text(`You're about to move around to clean up ${((st as any).npcdesc ?? '')} when ${((st as any).npcdesc1 ?? '')} grabs your head and shoots his load across your face. The two men say the most depraved things as cum slowly trickles down your face and out of your asshole.`);
    scene.text('However, the director seems pleased and calls an end to the shoot.');
    (st as any).cumnostd = 1;
    qspCall(st, 'cum_call', 'mouth', ((st as any).npcID1 ?? 0), 1, 0, 0, 40);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Take a shower', goto: ['pornstudio', 'shower'] },
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
  return;
  // TODO-QSP: end
  scene.build();
}

function enter6(s: GameState, scene: SceneBuilder): void {
  (s as any).pornbj = ((s as any).pornbj ?? 0) + (1);
  (s as any).pornvag = ((s as any).pornvag ?? 0) + (1);
  (s as any).pornanal = ((s as any).pornanal ?? 0) + (1);
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    (s as any).pornbukk = ((s as any).pornbukk ?? 0) + (1);
  }
  (s as any).pornswall = ((s as any).pornswall ?? 0) + (1);
  (s as any).porngang = ((s as any).porngang ?? 0) + (1);
  (s as any).pfType = 0;
  qspCall(s, 'fame', 'city', 'porn', 25);
  (s as any).minut = ((s as any).minut ?? 0) + 180;
  ((s as any).stat = (s as any).stat ?? {})['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  // TODO-QSP: gs 'npcStat', $pactorID[1]
  // TODO-QSP: gs 'npcStat', $pactorID[2], 'a'
  scene.text('The set is already bustling with assistants preparing for the shoot.');
  // TODO-QSP: dynamic text: <<$npcdesc>> and <<$npcdesc1>> are your co-stars for this shoot. They watch porn...
  scene.text(`${((s as any).npcdesc ?? '')} and ${((s as any).npcdesc1 ?? '')} are your co-stars for this shoot. They watch porn on a monitor, getting their cocks ready for you.`);
  scene.actions([
{ label: 'Undress and start', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 8;
    scene.img('images/locations/city/redlight/studio_porn/sex/tbj.mp4');
    // TODO-QSP: dynamic text: You get into position kneeling before <<$npcdesc>> and <<$npcdesc1>>. When the c...
    scene.text(`You get into position kneeling before ${((st as any).npcdesc ?? '')} and ${((st as any).npcdesc1 ?? '')}. When the camera starts rolling, they slap their fully erect cocks against your face.`);
    qspCall(st, 'arousal', 'bj', 2, ((st as any).npcID ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'arousal', 'bj', (-2), ((st as any).npcID1 ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Suck them', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/tbj2.mp4');
    scene.text('You take turns sucking one dick while jerking the other with your hand.');
    qspCall(st, 'arousal', 'bj', 8, ((st as any).npcID ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'arousal', 'bj', 7, ((st as any).npcID1 ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'arousal', 'hj', (-7), ((st as any).npcID ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'arousal', 'hj', (-8), ((st as any).npcID1 ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Fuck them', handler: (st: GameState) => {
    qspCall(st, 'arousal_funcs', 'stretch', 'vaginal');
    scene.img('images/locations/city/redlight/studio_porn/sex/three.mp4');
    // TODO-QSP: dynamic text: You get on all fours and <<$npcdesc>> fucks you from behind while you suck <<$np...
    scene.text(`You get on all fours and ${((st as any).npcdesc ?? '')} fucks you from behind while you suck ${((st as any).npcdesc1 ?? '')}'s dick.`);
    scene.text('You spend the next few minutes getting fucked in various poses by the two men, who take turns fucking your pussy.');
    (st as any).cumnostd = 1;
    qspCall(st, 'cum_call', 'precum', ((st as any).npcID ?? 0), 1, 0, 10000, 1);
    qspCall(st, 'stat', '');
    qspCall(st, 'arousal', 'bj', (-15), ((st as any).npcID1 ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'arousal', 'vaginal', 15, ((st as any).npcID ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Anal', handler: (st: GameState) => {
    qspCall(st, 'arousal_funcs', 'stretch', 'anal', 1);
    scene.img('images/locations/city/redlight/studio_porn/sex/threea.mp4');
    // TODO-QSP: dynamic text: <<$npcdesc>> switches it up and sticks his cock into your ass while you keep suc...
    scene.text(`${((st as any).npcdesc ?? '')} switches it up and sticks his cock into your ass while you keep sucking ${((st as any).npcdesc1 ?? '')}.`);
    // TODO-QSP: dynamic text: <<$npcdesc>> is really getting into it and is vigorously pounding your asshole.
    scene.text(`${((st as any).npcdesc ?? '')} is really getting into it and is vigorously pounding your asshole.`);
    qspCall(st, 'arousal', 'bj', (-15), ((st as any).npcID1 ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'arousal', 'anal', 15, ((st as any).npcID ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Double penetration', handler: (st: GameState) => {
    qspCall(st, 'arousal_funcs', 'stretch', 'anal', 1);
    qspCall(st, 'arousal_funcs', 'stretch', 'vaginal');
    scene.img('images/locations/city/redlight/studio_porn/sex/three2.mp4');
    // TODO-QSP: dynamic text: <<$npcdesc>> takes his dick out of your ass and lies down. Then, knowing <<$npcd...
    scene.text(`${((st as any).npcdesc ?? '')} takes his dick out of your ass and lies down. Then, knowing ${((st as any).npcdesc ?? '')} wants more, you straddle his cock.`);
    // TODO-QSP: dynamic text: You feel his cock fill your pussy while <<$npcdesc1>> moves in behind you and pu...
    scene.text(`You feel his cock fill your pussy while ${((st as any).npcdesc1 ?? '')} moves in behind you and pushes his dick into your ass.`);
    scene.text('The guys find a rhythm and grind away at your holes as you moan loudly.');
    qspCall(st, 'arousal', 'anal', (-15), ((st as any).npcID1 ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'arousal', 'vaginal', 15, ((st as any).npcID ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Finish them', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img('images/locations/city/redlight/studio_porn/sex/tcum.mp4');
    // TODO-QSP: dynamic text: The guys tell you they''re close and both pull out. You grab <<$npcdesc>>''s dic...
    scene.text(`The guys tell you they're close and both pull out. You grab ${((st as any).npcdesc ?? '')}'s dick and start sucking it.`);
    // TODO-QSP: dynamic text: As you suck his dick, your head is suddenly grabbed and you''re turned around. <...
    scene.text(`As you suck his dick, your head is suddenly grabbed and you're turned around. ${((st as any).npcdesc1 ?? '')} shoots his load across your face and into your mouth, ${((st as any).npcdesc ?? '')} following him close behind.`);
    scene.text('The two men step aside to let the camera get a shot of you. You look up at the camera and smile, swallowing the cum in your mouth and finishing with a close-up of your cum splattered face.');
    (st as any).cumnostd = 1;
    qspCall(st, 'cum_call', 'mouth', ((st as any).npcID ?? 0), 1, 0, 0, 10);
    qspCall(st, 'cum_call', 'face', ((st as any).npcID ?? 0), 1, 0, 0, 30);
    (st as any).cumnostd = 1;
    qspCall(st, 'cum_call', 'mouth', ((st as any).npcID1 ?? 0), 1, 0, 0, 10);
    qspCall(st, 'cum_call', 'face', ((st as any).npcID1 ?? 0), 1, 0, 0, 30);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Take a shower', goto: ['pornstudio', 'shower'] },
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
  return;
  // TODO-QSP: end
  scene.build();
}

function enter7(s: GameState, scene: SceneBuilder): void {
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    (s as any).pornbj = ((s as any).pornbj ?? 0) + (1);
  }
  (s as any).pornvag = ((s as any).pornvag ?? 0) + (1);
  if ((!(Math.floor(Math.random() * 3) + 0))) {
    (s as any).porngang = ((s as any).porngang ?? 0) + (1);
  }
  (s as any).porncream = ((s as any).porncream ?? 0) + (1);
  (s as any).pfType = 1;
  qspCall(s, 'fame', 'city', 'porn', 20);
  (s as any).minut = ((s as any).minut ?? 0) + 180;
  (s as any).orgasm_or = 'no';
  qspCall(s, 'stat', '');
  // TODO-QSP: gs 'npcStat', $pactorID[1]
  scene.text('The set is already bustling with assistants preparing for the shoot.');
  // TODO-QSP: dynamic text: Your co-star for this shoot is <<$npcdesc>>. He is standing to the side, slowly ...
  scene.text(`Your co-star for this shoot is ${((s as any).npcdesc ?? '')}. He is standing to the side, slowly stroking his dick.`);
  scene.actions([
{ label: 'Undress and start', handler: (st: GameState) => {
    (st as any).pornbj = ((st as any).pornbj ?? 0) + (1);
    scene.img('images/locations/city/redlight/studio_porn/sex/bj.mp4');
    // TODO-QSP: dynamic text: You start by teasing the camera. You play with your tits and show off your pussy...
    scene.text(`You start by teasing the camera. You play with your tits and show off your pussy before ${((st as any).npcdesc ?? '')} walks up. You kneel between his legs, take his shaft into your mouth and start passionately sucking his dick.`);
    qspCall(st, 'arousal', 'bj', 30, 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Keep sucking', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/deep.mp4');
    // TODO-QSP: dynamic text: <<$npcdesc>> grabs your hair in his fists and starts fucking your mouth, driving...
    scene.text(`${((st as any).npcdesc ?? '')} grabs your hair in his fists and starts fucking your mouth, driving his cock down your throat with every thrust.`);
    scene.text('After a few minutes, he takes his cock out, and you wipe the saliva from your mouth.');
    qspCall(st, 'arousal', 'bj', 15, 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get fucked', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/redlight/studio_porn/sex/pronebone.mp4');
    // TODO-QSP: dynamic text: <<$npcdesc>> grabs your hips, throws you on the couch and climbs on top of you. ...
    scene.text(`${((st as any).npcdesc ?? '')} grabs your hips, throws you on the couch and climbs on top of you. You feel him slide into your pussy, and he begins to fuck you hard.`);
    scene.text('You spend the next few minutes getting fucked by him in various positions.');
    qspCall(st, 'arousal', 'vaginal', 15, 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (st as any).cumnostd = 1;
    qspCall(st, 'cum_call', '', '', ((st as any).npcID ?? 0), 1, 0, 10000, 40);
    qspCall(st, 'stat', '');
    scene.img(`images/locations/city/redlight/studio_porn/sex/porncp${(Math.floor(Math.random() * 3) + 1)}.mp4`);
    // TODO-QSP: dynamic text: You''re really getting into it and your pussy tightens around <<$npcdesc>>, whic...
    scene.text(`You're really getting into it and your pussy tightens around ${((st as any).npcdesc ?? '')}, which sends him over the edge. You soon feel yourself being filled with a considerable amount of cum.`);
    // TODO-QSP: dynamic text: He climbs off you, but you stay on the couch while the camera comes forward to f...
    scene.text(`He climbs off you, but you stay on the couch while the camera comes forward to film your pussy as you squeeze ${((st as any).npcdesc ?? '')}'s load out. Finally, after a few minutes, the director nods and you get up.`);
    qspCall(st, 'arousal', 'vaginal', 5, 'exhibitionism');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Take a shower', goto: ['pornstudio', 'shower'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enter8(s: GameState, scene: SceneBuilder): void {
  if ((!(Math.floor(Math.random() * 3) + 0))) {
    (s as any).pornbj = ((s as any).pornbj ?? 0) + (1);
  }
  (s as any).pornvag = ((s as any).pornvag ?? 0) + (1);
  (s as any).pornanal = ((s as any).pornanal ?? 0) + (1);
  (s as any).porngang = ((s as any).porngang ?? 0) + (1);
  (s as any).porncream = ((s as any).porncream ?? 0) + (1);
  (s as any).pfType = 1;
  qspCall(s, 'fame', 'city', 'porn', 25);
  (s as any).minut = ((s as any).minut ?? 0) + 180;
  ((s as any).stat = (s as any).stat ?? {})['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (1);
  (s as any).porngang = ((s as any).porngang ?? 0) + (1);
  (s as any).orgasm_or = 'no';
  qspCall(s, 'stat', '');
  // TODO-QSP: gs 'npcStat', $pactorID[1]
  // TODO-QSP: gs 'npcStat', $pactorID[2], 'a'
  scene.text('The set is already bustling with assistants preparing for the shoot.');
  // TODO-QSP: dynamic text: <<$npcdesc>> and <<$npcdesc1>> are your co-stars for this shoot. They watch porn...
  scene.text(`${((s as any).npcdesc ?? '')} and ${((s as any).npcdesc1 ?? '')} are your co-stars for this shoot. They watch porn on a monitor, getting their cocks ready for you.`);
  // TODO-QSP: end
  scene.actions([
{ label: 'Undress and kneel', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/tbj.mp4');
    // TODO-QSP: dynamic text: You get into position kneeling before <<$npcdesc>> and <<$npcdesc1>>. When the c...
    scene.text(`You get into position kneeling before ${((st as any).npcdesc ?? '')} and ${((st as any).npcdesc1 ?? '')}. When the camera starts rolling, they slap their fully erect cocks against your face.`);
    qspCall(st, 'arousal', 'bj', 5, ((st as any).npcID ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'arousal', 'bj', 5, ((st as any).npcID1 ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Suck them', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/tbj2.mp4');
    scene.text('You take turns sucking one dick while jerking the other with your hand. The two men moan loudly in pleasure and encourage you to take them deeper.');
    qspCall(st, 'arousal', 'bj', 8, ((st as any).npcID ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'arousal', 'bj', 7, ((st as any).npcID1 ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'arousal', 'hj', (-7), ((st as any).npcID ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'arousal', 'hj', (-8), ((st as any).npcID1 ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Fuck them', handler: (st: GameState) => {
    qspCall(st, 'arousal_funcs', 'stretch', 'vaginal');
    qspCall(st, 'arousal_funcs', 'stretch', 'anal', 1);
    scene.img(`images/locations/city/redlight/studio_porn/sex/threesomedp${(Math.floor(Math.random() * 5) + 1)}.mp4`);
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      // TODO-QSP: dynamic text: <<$npcdesc>> lays on the bed, and you climb on top of him, sliding his cock into...
      scene.text(`${((st as any).npcdesc ?? '')} lays on the bed, and you climb on top of him, sliding his cock into your pussy and waiting until ${((st as any).npcdesc1 ?? '')} pushes into your ass. ${((st as any).npcdesc1 ?? '')} starts enthusiastically fucking your ass, making you ride ${((st as any).npcdesc ?? '')}'s dick. They fuck you like this for a while before spending time repositioning you into various poses and fucking both your holes. Finally, after getting fucked in multiple positions, the director signals to the guys that they should cum inside you.`);
      qspCall(st, 'arousal', 'anal', (-25), ((st as any).npcID1 ?? 0), 'exhibitionism', 'group');
      qspCall(st, 'arousal', 'vaginal', 25, ((st as any).npcID ?? 0), 'exhibitionism', 'group');
      (st as any).cumnostd = 1;
      qspCall(st, 'cum_call', '', '', ((st as any).npcID ?? 0), 1, 0, 10000, 40);
      qspCall(st, 'cum_call', 'anus', ((st as any).npcID1 ?? 0), 1, 0, 0, 40);
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc1>> lays on the bed, and you climb on top of him, sliding his cock int...
      scene.text(`${((st as any).npcdesc1 ?? '')} lays on the bed, and you climb on top of him, sliding his cock into your pussy and waiting until ${((st as any).npcdesc ?? '')} pushes into your ass. ${((st as any).npcdesc ?? '')} starts enthusiastically fucking your ass, making you ride ${((st as any).npcdesc1 ?? '')}'s dick. They fuck you like this for a while before spending time repositioning you into various poses and fucking both your holes. Finally, after getting fucked in multiple positions, the director signals to the guys that they should cum inside you.`);
      qspCall(st, 'arousal', 'anal', (-25), ((st as any).npcID ?? 0), 'exhibitionism', 'group');
      qspCall(st, 'arousal', 'vaginal', 25, ((st as any).npcID1 ?? 0), 'exhibitionism', 'group');
      (st as any).cumnostd = 1;
      qspCall(st, 'cum_call', '', '', ((st as any).npcID1 ?? 0), 1, 0, 10000, 40);
      qspCall(st, 'cum_call', 'anus', ((st as any).npcID ?? 0), 1, 0, 0, 40);
    }
    qspCall(st, 'stat', '');
    scene.text('The guys start to fuck you even faster in response, and you soon feel them twitching inside you.');
    if (((st as any).orgasm_buildup ?? 0) < 200 - ((st as any).pcs_inhib ?? 0)) {
      scene.actions([
        { label: 'Fake orgasm', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/porgasm.mp4');
    scene.text('You fake a screaming orgasm and talk dirty to the guys as they unload inside you. Once they\'re finished, they pull out and you lie on the bed with your legs spread so the camera can get a close-up of your pussy and ass as their cum trickles out of you. After a few seconds, the director nods and you get up.');
    qspCall(st, 'arousal', 'vaginal', 2, ((st as any).npcID ?? 0), 'exhibitionism');
    qspCall(st, 'arousal', 'vaginal', 3, ((st as any).npcID1 ?? 0), 'exhibitionism');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Take a shower', goto: ['pornstudio', 'shower'] },
    ]);
  } },
      ]);
    } else {
      (st as any).will_cost = 0;
      if (((st as any).orgasm_buildup ?? 0) < 300 - ((st as any).pcs_inhib ?? 0)) {
        qspCall(st, 'willpower', 'exhib', 'self', 'hard');
      }
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Block out everything but the pleasure and let yourself orgasm', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        // TODO-QSP: act iif(orgasm_buildup < 300 - pcs_inhib, 'Block out everything but the pleasure and let yourself or...
        if (((st as any).orgasm_buildup ?? 0) < 300 - ((st as any).pcs_inhib ?? 0)) {
          qspCall(st, 'willpower', 'pay', 'self');
        }
        (st as any).porngasm = ((st as any).porngasm ?? 0) + (1);
        (st as any).orgasmbonus = ((st as any).orgasmbonus ?? 0) + (10);
        scene.img('images/locations/city/redlight/studio_porn/sex/porgasm.mp4');
        scene.text('You have a very real and very explosive orgasm. Your legs buckle and you almost collapse on the guy beneath you as they both unload inside you. Once they\'re finished, they pull out and you lie on the bed with your legs spread so the camera can get a close-up of your pussy and ass as their cum trickles out of you. After a few seconds, the director nods and you get up.');
        (st as any).orgasm_or = 'yes';
        qspCall(st, 'arousal', 'vaginal', 2, ((st as any).npcID ?? 0), 'exhibitionism');
        qspCall(st, 'arousal', 'vaginal', 3, ((st as any).npcID1 ?? 0), 'exhibitionism');
        qspCall(st, 'arousal', 'end');
        scene.actions([
          { label: 'Take a shower', goto: ['pornstudio', 'shower'] },
        ]);
      }
    }
  } },
    ]);
  } },
    ]);
  } },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enter9(s: GameState, scene: SceneBuilder): void {
  if ((!(Math.floor(Math.random() * 3) + 0))) {
    (s as any).pornbj = ((s as any).pornbj ?? 0) + (1);
  }
  (s as any).pornswall = ((s as any).pornswall ?? 0) + (1);
  (s as any).pornvag = ((s as any).pornvag ?? 0) + (1);
  (s as any).porngang = ((s as any).porngang ?? 0) + (1);
  (s as any).porncream = ((s as any).porncream ?? 0) + (1);
  (s as any).pfType = 1;
  qspCall(s, 'fame', 'city', 'porn', 25);
  (s as any).minut = ((s as any).minut ?? 0) + 180;
  ((s as any).stat = (s as any).stat ?? {})['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (1);
  (s as any).orgasm_or = 'no';
  qspCall(s, 'stat', '');
  // TODO-QSP: gs 'npcStat', $pactorID[1]
  // TODO-QSP: gs 'npcStat', $pactorID[2], 'a'
  scene.text('The set is already bustling with assistants preparing for the shoot.');
  // TODO-QSP: dynamic text: <<$npcdesc>> and <<$npcdesc1>> are your co-stars for this shoot. They watch porn...
  scene.text(`${((s as any).npcdesc ?? '')} and ${((s as any).npcdesc1 ?? '')} are your co-stars for this shoot. They watch porn on a monitor, getting their cocks ready for you.`);
  // TODO-QSP: end
  scene.actions([
{ label: 'Undress and kneel', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/tbj.mp4');
    // TODO-QSP: dynamic text: You get into position kneeling before <<$npcdesc>> and <<$npcdesc1>>. When the c...
    scene.text(`You get into position kneeling before ${((st as any).npcdesc ?? '')} and ${((st as any).npcdesc1 ?? '')}. When the camera starts rolling, they slap their fully erect cocks against your face.`);
    qspCall(st, 'arousal', 'bj', 5, ((st as any).npcID ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'arousal', 'bj', 5, ((st as any).npcID1 ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Suck them', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/tbj2.mp4');
    scene.text('You take turns sucking one dick while jerking the other with your hand. The two men moan loudly in pleasure and encourage you to take them deeper.');
    // TODO-QSP: dynamic text: You''re sucking <<$npcdesc1>>''s dick when he grabs your hair for leverage and s...
    scene.text(`You're sucking ${((st as any).npcdesc1 ?? '')}'s dick when he grabs your hair for leverage and starts face fucking you. After a while, the director gestures for you to move on to the next scene, so he releases you and urges you to push your ass out.`);
    qspCall(st, 'arousal', 'bj', 8, ((st as any).npcID ?? 0), 'exhibitionism', 'group', 'rough');
    qspCall(st, 'arousal', 'bj', 7, ((st as any).npcID1 ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'arousal', 'hj', (-7), ((st as any).npcID ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'arousal', 'hj', (-8), ((st as any).npcID1 ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Fuck them', handler: (st: GameState) => {
    (st as any).pornvag = ((st as any).pornvag ?? 0) + (1);
    (st as any).pornswall = ((st as any).pornswall ?? 0) + (1);
    scene.img(`images/shared/sex/group/threesomepm${(Math.floor(Math.random() * 12) + 1)}.mp4`);
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      // TODO-QSP: dynamic text: You get in position before <<$npcdesc1>> and start sucking him while <<$npcdesc>...
      scene.text(`You get in position before ${((st as any).npcdesc1 ?? '')} and start sucking him while ${((st as any).npcdesc ?? '')} fucks your pussy. He fucks you enthusiastically, making you swallow ${((st as any).npcdesc1 ?? '')}'s dick. They fuck you like this and in several other poses and take turns switching between your mouth and pussy before the director signals that it's time for the finale.`);
      qspCall(st, 'arousal', 'vaginal', 25, ((st as any).npcID ?? 0), 'exhibitionism', 'group');
      qspCall(st, 'arousal', 'bj', (-25), ((st as any).npcID1 ?? 0), 'exhibitionism', 'group');
      (st as any).cumnostd = 1;
      qspCall(st, 'cum_call', 'precum', ((st as any).npcID ?? 0), 1, 0, 10000, 1);
      (st as any).cumnostd = 1;
      qspCall(st, 'cum_call', '', '', ((st as any).npcID ?? 0), 1, 0, 10000, 40);
      (st as any).cumnostd = 1;
      qspCall(st, 'cum_call', 'mouth', ((st as any).npcID1 ?? 0), 1, 0, 0, 40);
    } else {
      // TODO-QSP: dynamic text: You get in position before <<$npcdesc>> and start sucking him while <<$npcdesc1>...
      scene.text(`You get in position before ${((st as any).npcdesc ?? '')} and start sucking him while ${((st as any).npcdesc1 ?? '')} fucks your pussy. He fucks you enthusiastically, making you swallow ${((st as any).npcdesc ?? '')}'s dick. They fuck you like this and in several other poses and take turns switching between your mouth and pussy before the director signals that it's time for the finale.`);
      qspCall(st, 'arousal', 'vaginal', 25, ((st as any).npcID1 ?? 0), 'exhibitionism', 'group');
      qspCall(st, 'arousal', 'bj', (-25), ((st as any).npcID ?? 0), 'exhibitionism', 'group');
      (st as any).cumnostd = 1;
      qspCall(st, 'cum_call', 'precum', ((st as any).npcID1 ?? 0), 1, 0, 10000, 1);
      (st as any).cumnostd = 1;
      qspCall(st, 'cum_call', '', '', ((st as any).npcID1 ?? 0), 1, 0, 10000, 40);
      (st as any).cumnostd = 1;
      qspCall(st, 'cum_call', 'anus', ((st as any).npcID ?? 0), 1, 0, 0, 40);
    }
    qspCall(st, 'stat', '');
    scene.text('The guys start fucking you even faster while coordinating with each other, and you soon feel them twitching inside you simultaneously. Your pussy is filled with cum as another load hits your throat, causing you to choke slightly.');
    if (((st as any).orgasm_buildup ?? 0) < 300 - ((st as any).pcs_inhib ?? 0)) {
      scene.actions([
        { label: 'Fake orgasm', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/porgasm.mp4');
    scene.text('You fake an orgasm alongside the guys, your moans muffled by the cock in your mouth. Finally, the guys finish and step away so the camera can film you swallowing the load in your mouth before moving down to get a close-up of the cum trickling out of your pussy.');
    qspCall(st, 'arousal', 'vaginal', 5, 'exhibitionism');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Take a shower', goto: ['pornstudio', 'shower'] },
    ]);
  } },
      ]);
    } else {
      (st as any).will_cost = 0;
      if (((st as any).orgasm_buildup ?? 0) < 300 - ((st as any).pcs_inhib ?? 0)) {
        qspCall(st, 'willpower', 'exhib', 'self', 'hard');
      }
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Block out everything but the pleasure and let yourself orgasm', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        // TODO-QSP: act iif(orgasm_buildup < 300 - pcs_inhib, 'Block out everything but the pleasure and let yourself or...
        if (((st as any).orgasm_buildup ?? 0) < 300 - ((st as any).pcs_inhib ?? 0)) {
          qspCall(st, 'willpower', 'pay', 'self');
        }
        (st as any).orgasmbonus = ((st as any).orgasmbonus ?? 0) + (10);
        (st as any).porngasm = ((st as any).porngasm ?? 0) + (1);
        scene.img('images/locations/city/redlight/studio_porn/sex/porgasm.mp4');
        scene.text('You have a very real orgasm and explosive orgasm, your moans muffled by the cock in your mouth. The guys finish and step away so the camera can film you swallowing the load in your mouth before moving down for a close-up of the cum trickling out of your pussy.');
        (st as any).orgasm_or = 'yes';
        qspCall(st, 'arousal', 'vaginal', 5, 'exhibitionism');
        qspCall(st, 'arousal', 'end');
        scene.actions([
          { label: 'Take a shower', goto: ['pornstudio', 'shower'] },
        ]);
      }
    }
  } },
    ]);
  } },
    ]);
  } },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enter4GuyBlowJerkBreastCuni(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'hj', 5, ((s as any).npcID ?? 0), 'exhibitionism', 'group');
  qspCall(s, 'arousal', 'hj', 5, ((s as any).npcID1 ?? 0), 'exhibitionism', 'group');
  qspCall(s, 'arousal', 'hj', 5, ((s as any).npcID2 ?? 0), 'exhibitionism', 'group');
  qspCall(s, 'arousal', 'hj', 5, ((s as any).npcID3 ?? 0), 'exhibitionism', 'group');
  qspCall(s, 'arousal', 'bj', (-5), ((s as any).npcID ?? 0), 'exhibitionism', 'group');
  qspCall(s, 'arousal', 'bj', (-5), ((s as any).npcID1 ?? 0), 'exhibitionism', 'group');
  qspCall(s, 'arousal', 'bj', (-5), ((s as any).npcID2 ?? 0), 'exhibitionism', 'group');
  qspCall(s, 'arousal', 'bj', (-5), ((s as any).npcID3 ?? 0), 'exhibitionism', 'group');
  qspCall(s, 'arousal', 'breasts', (-5), ((s as any).npcID ?? 0), 'exhibitionism', 'group');
  qspCall(s, 'arousal', 'breasts', (-5), ((s as any).npcID1 ?? 0), 'exhibitionism', 'group');
  qspCall(s, 'arousal', 'breasts', (-5), ((s as any).npcID2 ?? 0), 'exhibitionism', 'group');
  qspCall(s, 'arousal', 'breasts', (-5), ((s as any).npcID3 ?? 0), 'exhibitionism', 'group');
  qspCall(s, 'arousal', 'cuni', (-5), ((s as any).npcID ?? 0), 'exhibitionism', 'group');
  qspCall(s, 'arousal', 'cuni', (-5), ((s as any).npcID1 ?? 0), 'exhibitionism', 'group');
  qspCall(s, 'arousal', 'cuni', (-5), ((s as any).npcID2 ?? 0), 'exhibitionism', 'group');
  qspCall(s, 'arousal', 'cuni', (-5), ((s as any).npcID3 ?? 0), 'exhibitionism', 'group');
  return;
  // TODO-QSP: end
  scene.build();
}

function enter4GuyBlowJerkVaginal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'vaginal', 5, ((s as any).npcID ?? 0), 'exhibitionism', 'group');
  qspCall(s, 'arousal', 'vaginal', 5, ((s as any).npcID1 ?? 0), 'exhibitionism', 'group');
  qspCall(s, 'arousal', 'vaginal', 5, ((s as any).npcID2 ?? 0), 'exhibitionism', 'group');
  qspCall(s, 'arousal', 'vaginal', 5, ((s as any).npcID3 ?? 0), 'exhibitionism', 'group');
  qspCall(s, 'arousal', 'hj', (-5), ((s as any).npcID ?? 0), 'exhibitionism', 'group');
  qspCall(s, 'arousal', 'hj', (-5), ((s as any).npcID1 ?? 0), 'exhibitionism', 'group');
  qspCall(s, 'arousal', 'hj', (-5), ((s as any).npcID2 ?? 0), 'exhibitionism', 'group');
  qspCall(s, 'arousal', 'hj', (-5), ((s as any).npcID3 ?? 0), 'exhibitionism', 'group');
  qspCall(s, 'arousal', 'bj', (-5), ((s as any).npcID ?? 0), 'exhibitionism', 'group');
  qspCall(s, 'arousal', 'bj', (-5), ((s as any).npcID1 ?? 0), 'exhibitionism', 'group');
  qspCall(s, 'arousal', 'bj', (-5), ((s as any).npcID2 ?? 0), 'exhibitionism', 'group');
  qspCall(s, 'arousal', 'bj', (-5), ((s as any).npcID3 ?? 0), 'exhibitionism', 'group');
  return;
  // TODO-QSP: end
  scene.build();
}

function enter10(s: GameState, scene: SceneBuilder): void {
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    (s as any).pornbj = ((s as any).pornbj ?? 0) + (1);
  }
  (s as any).pornvag = ((s as any).pornvag ?? 0) + (2);
  (s as any).porngang = ((s as any).porngang ?? 0) + (2);
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    (s as any).pornhj = ((s as any).pornhj ?? 0) + (1);
  }
  (s as any).pornbukk = ((s as any).pornbukk ?? 0) + (2);
  (s as any).pfType = 1;
  qspCall(s, 'fame', 'city', 'porn', 30);
  (s as any).minut = ((s as any).minut ?? 0) + 180;
  ((s as any).stat = (s as any).stat ?? {})['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (1);
  (s as any).orgasm_or = 'no';
  qspCall(s, 'stat', '');
  // TODO-QSP: gs 'npcStat', $pactorID[1]
  // TODO-QSP: gs 'npcStat', $pactorID[2], 'a'
  // TODO-QSP: gs 'npcStat', $pactorID[3], 'b'
  // TODO-QSP: gs 'npcStat', $pactorID[4], 'c'
  scene.text('The set is already bustling with assistants preparing the set for the shoot.');
  // TODO-QSP: dynamic text: Your co-stars, <<$npcdesc>>, <<$npcdesc1>>, <<$npcdesc2>> and <<$npcdesc3>>, are...
  scene.text(`Your co-stars, ${((s as any).npcdesc ?? '')}, ${((s as any).npcdesc1 ?? '')}, ${((s as any).npcdesc2 ?? '')} and ${((s as any).npcdesc3 ?? '')}, are watching porn while loudly discussing who gets to do what first.`);
  scene.text('As they continue arguing, you do a striptease for the camera, allowing it to get close-up shots of your holes as you talk dirty, teasing the viewers.');
  qspCall(s, 'arousal', 'striptease', 5);
  scene.actions([
{ label: 'Warmup', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/warmupgang.mp4');
    scene.text('Under pressure from the director, the men eventually agree and gather around you. You start sucking one guy\'s dick while giving a handjob to another. The other two get creative - one sucks your tits while the other licks your pussy. They occasionally switch places before the director indicates it\'s time to change the scene.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enter4GuyBlowJerkBreastCuni(s, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Fuck them', handler: (st: GameState) => {
    scene.img(`images/locations/city/redlight/studio_porn/sex/gangp${(Math.floor(Math.random() * 4) + 1)}.mp4`);
    scene.text('The guys take turns fucking you in a variety of positions. You keep them hard by jerking and sucking them off when they\'re not fucking you.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enter4GuyBlowJerkVaginal(s, scene); (st as any).locArgs = __savedLocArgs; }
    (st as any).cumnostd = 1;
    qspCall(st, 'cum_call', 'precum', ((st as any).npcID ?? 0), 1, 0, 10000, 1);
    (st as any).cumnostd = 1;
    qspCall(st, 'cum_call', 'precum', ((st as any).npcID1 ?? 0), 1, 0, 10000, 1);
    (st as any).cumnostd = 1;
    qspCall(st, 'cum_call', 'precum', ((st as any).npcID2 ?? 0), 1, 0, 10000, 1);
    (st as any).cumnostd = 1;
    qspCall(st, 'cum_call', 'precum', ((st as any).npcID3 ?? 0), 1, 0, 10000, 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Finale', handler: (st: GameState) => {
    scene.text('The guys continue to fuck you, but this time with the purpose of cumming as quickly as possible.');
    if ((Math.floor(Math.random() * 6) + 0) > 0) {
      scene.img(`images/locations/city/redlight/studio_porn/sex/cumbath${(Math.floor(Math.random() * 2) + 1)}.mp4`);
      // TODO-QSP: dynamic text: <<$npcdesc>> is fucking you when he suddenly groans and pulls out, coating your ...
      scene.text(`${((st as any).npcdesc ?? '')} is fucking you when he suddenly groans and pulls out, coating your labia with his load of cum. You look up at him seductively while biting your lip, a look of satisfied pleasure on his face.`);
      qspCall(st, 'cum_call', 'labia', ((st as any).npcID ?? 0), 1, 0, 10000, 40);
    } else {
      scene.img(`images/locations/city/redlight/studio_porn/sex/cumbathm${(Math.floor(Math.random() * 2) + 1)}.mp4`);
      // TODO-QSP: dynamic text: <<$npcdesc>> is fucking you when he suddenly groans and pulls his dick out of yo...
      scene.text(`${((st as any).npcdesc ?? '')} is fucking you when he suddenly groans and pulls his dick out of your pussy, but messes up when his first shot of cum shoots straight into your open pussy. He quickly corrects his aim, and the others coat your labia.`);
      (st as any).cumnostd = 1;
      qspCall(st, 'cum_call', '', '', ((st as any).npcID ?? 0), 1, 0, 10000, 10);
      qspCall(st, 'cum_call', 'labia', ((st as any).npcID ?? 0), 1, 0, 10000, 30);
      (st as any).cuminside = 1;
    }
    if (((st as any).orgasm_buildup ?? 0) >= 200 - ((st as any).pcs_inhib ?? 0)) {
      (st as any).orgasmbonus = ((st as any).orgasmbonus ?? 0) + (10);
      (st as any).pornorg = 1;
      scene.img('images/locations/city/redlight/studio_porn/sex/porgasm.mp4');
      scene.text('You\'re rubbing your clit and end up cumming alongside him as he coats your twitching pussy with his load.');
      (st as any).orgasm_or = 'yes';
      qspCall(st, 'stat', '');
    }
    qspCall(st, 'arousal', 'vaginal', 5, ((st as any).npcID ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: Once he''s done, he''s replaced by <<$npcdesc1>>, who quickly penetrates you and...
    scene.text(`Once he's done, he's replaced by ${((st as any).npcdesc1 ?? '')}, who quickly penetrates you and starts thrusting.`);
    if ((Math.floor(Math.random() * 6) + 0) > 0) {
      scene.img('images/locations/city/redlight/studio_porn/sex/cumbath4.mp4');
      // TODO-QSP: dynamic text: Reaching climax, <<$npcdesc1>> groans and pulls out, aiming his dick at your tit...
      scene.text(`Reaching climax, ${((st as any).npcdesc1 ?? '')} groans and pulls out, aiming his dick at your tits. He jerks his dick, and you look down to see hot cum splattering over your tits. You giggle and smile as you squeeze your cum covered tits in your hands.`);
      qspCall(st, 'cum_call', 'breasts', ((st as any).npcID1 ?? 0), 1, 0, 10000, 40);
    } else {
      scene.img('images/locations/city/redlight/studio_porn/sex/cumbath4.mp4');
      // TODO-QSP: dynamic text: Reaching climax, <<$npcdesc1>> groans and pulls out. He aims at your tits, but h...
      scene.text(`Reaching climax, ${((st as any).npcdesc1 ?? '')} groans and pulls out. He aims at your tits, but his first shot hits you straight in the face. He quickly corrects his aim, and the rest of his cum coats your tits.`);
      (st as any).cumnostd = 1;
      qspCall(st, 'cum_call', '', '', ((st as any).npcID1 ?? 0), 1, 0, 10000, 10);
      qspCall(st, 'cum_call', 'breasts', ((st as any).npcID1 ?? 0), 1, 0, 10000, 30);
      (st as any).cuminside = 1;
    }
    // TODO-QSP: dynamic text: Once he''s done, he''s replaced by <<$npcdesc2>>, who moves in and starts poundi...
    scene.text(`Once he's done, he's replaced by ${((st as any).npcdesc2 ?? '')}, who moves in and starts pounding your pussy hard.`);
    if ((Math.floor(Math.random() * 6) + 0) > 0) {
      scene.img('images/shared/sex/cum/cum2.mp4');
      // TODO-QSP: dynamic text: <<$npcdesc2>> is really going at it and doesn''t stop until the last second. He ...
      scene.text(`${((st as any).npcdesc2 ?? '')} is really going at it and doesn't stop until the last second. He suddenly groans and quickly pulls out before straddling you. You close your eyes just in time as his warm cum splatter across your face and into your hair. When he's finished, you take him into your mouth and suck his dick clean.`);
      qspCall(st, 'cum_call', 'hair', ((st as any).npcID2 ?? 0), 1, 0, 10000, 20);
      qspCall(st, 'cum_call', 'face', ((st as any).npcID2 ?? 0), 1, 0, 10000, 20);
    } else {
      scene.img(`images/locations/city/redlight/studio_porn/sex/cumbathm${(Math.floor(Math.random() * 2) + 1)}.mp4`);
      // TODO-QSP: dynamic text: <<$npcdesc2>> is pounding you hard. He reaches climax rather quickly but doesn''...
      scene.text(`${((st as any).npcdesc2 ?? '')} is pounding you hard. He reaches climax rather quickly but doesn't pull out fast enough. His first shot of cum shoots straight into your open pussy, and the rest splatters over your already-covered labia.`);
      (st as any).cumnostd = 1;
      qspCall(st, 'cum_call', '', '', ((st as any).npcID2 ?? 0), 1, 0, 10000, 10);
      qspCall(st, 'cum_call', 'labia', ((st as any).npcID2 ?? 0), 1, 0, 10000, 15);
      (st as any).cuminside = 1;
    }
    if (((st as any).orgasm_buildup ?? 0) >= 200 - ((st as any).pcs_inhib ?? 0)) {
      (st as any).orgasmbonus = ((st as any).orgasmbonus ?? 0) + (10);
      (st as any).pornorg = 1;
      scene.img('images/locations/city/redlight/studio_porn/sex/porgasm.mp4');
      // TODO-QSP: dynamic text: <<$npcdesc2>> is pounding you so hard that you have an orgasm as he coats your w...
      scene.text(`${((st as any).npcdesc2 ?? '')} is pounding you so hard that you have an orgasm as he coats your writhing body with his load.`);
      (st as any).orgasm_or = 'yes';
    }
    qspCall(st, 'arousal', 'vaginal', 5, ((st as any).npcID2 ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: Once he''s done, he''s replaced by <<$npcdesc3>>, the last of the men.
    scene.text(`Once he's done, he's replaced by ${((st as any).npcdesc3 ?? '')}, the last of the men.`);
    if ((Math.floor(Math.random() * 6) + 0) > 0) {
      scene.img('images/locations/city/redlight/studio_porn/sex/cumbath3.mp4');
      // TODO-QSP: dynamic text: <<$npcdesc3>> fucks you for only a few minutes before he groans and pulls out, c...
      scene.text(`${((st as any).npcdesc3 ?? '')} fucks you for only a few minutes before he groans and pulls out, coating your belly with his cum.`);
      qspCall(st, 'cum_call', 'stomach', ((st as any).npcID3 ?? 0), 1, 0, 10000, 40);
    } else {
      scene.img(`images/locations/city/redlight/studio_porn/sex/cumbathm${(Math.floor(Math.random() * 2) + 1)}.mp4`);
      // TODO-QSP: dynamic text: <<$npcdesc3>> fucks you for a few minutes before he pulls out but messes up when...
      scene.text(`${((st as any).npcdesc3 ?? '')} fucks you for a few minutes before he pulls out but messes up when his first shot of cum shoots straight into your open pussy. He quickly corrects his aim, and the rest splatter across your stomach.`);
      (st as any).cumnostd = 1;
      qspCall(st, 'cum_call', '', '', ((st as any).npcID3 ?? 0), 1, 0, 10000, 10);
      qspCall(st, 'cum_call', 'stomach', ((st as any).npcID3 ?? 0), 1, 0, 10000, 30);
      (st as any).cuminside = 1;
    }
    if (((st as any).orgasm_buildup ?? 0) >= 200 - ((st as any).pcs_inhib ?? 0)) {
      (st as any).orgasmbonus = ((st as any).orgasmbonus ?? 0) + (10);
      (st as any).pornorg = 1;
      scene.img('images/locations/city/redlight/studio_porn/sex/porgasm.mp4');
      scene.text('The four guys fucking you has aroused you incredibly. You end up having an explosive orgasm as he coats your writhing body with his load.');
      (st as any).orgasm_or = 'yes';
    }
    qspCall(st, 'arousal', 'vaginal', 5, ((st as any).npcID3 ?? 0), 'exhibitionism', 'group');
    if (((st as any).cuminside ?? 0) === 1) {
      (st as any).porncream = ((st as any).porncream ?? 0) + (1);
      // TODO-QSP: killvar 'cuminside'
    }
    if (((st as any).pornorg ?? 0) === 1) {
      (st as any).porngasm = ((st as any).porngasm ?? 0) + (1);
      // TODO-QSP: killvar 'pornorg'
    }
    qspCall(st, 'stat', '');
    qspCall(st, 'arousal', 'end');
    scene.text('The men finish and you lie on the bed, teasingly playing with your cum covered body for a few seconds. The camera gets a few close-ups of you before you sit up and use your fingers to scoop some cum off your tits. You make a seductive show of sucking your fingers clean and smiling at the camera. Finally, the director is pleased and ends the shoot.');
    scene.actions([
      { label: 'Take a shower', goto: ['pornstudio', 'shower'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enter11(s: GameState, scene: SceneBuilder): void {
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    (s as any).pornbj = ((s as any).pornbj ?? 0) + (1);
  }
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    (s as any).pornhj = ((s as any).pornhj ?? 0) + (1);
  }
  (s as any).pornvag = ((s as any).pornvag ?? 0) + (2);
  (s as any).porngang = ((s as any).porngang ?? 0) + (2);
  (s as any).porncream = ((s as any).porncream ?? 0) + (2);
  (s as any).pfType = 1;
  qspCall(s, 'fame', 'city', 'porn', 30);
  (s as any).minut = ((s as any).minut ?? 0) + 180;
  ((s as any).stat = (s as any).stat ?? {})['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (1);
  (s as any).orgasm_or = 'no';
  qspCall(s, 'stat', '');
  // TODO-QSP: gs 'npcStat', $pactorID[1]
  // TODO-QSP: gs 'npcStat', $pactorID[2], 'a'
  // TODO-QSP: gs 'npcStat', $pactorID[3], 'b'
  // TODO-QSP: gs 'npcStat', $pactorID[4], 'c'
  scene.text('The set is already bustling with assistants preparing for the shoot.');
  // TODO-QSP: dynamic text: Your co-stars <<$npcdesc>>, <<$npcdesc1>>, <<$npcdesc2>> and <<$npcdesc3>>, are ...
  scene.text(`Your co-stars ${((s as any).npcdesc ?? '')}, ${((s as any).npcdesc1 ?? '')}, ${((s as any).npcdesc2 ?? '')} and ${((s as any).npcdesc3 ?? '')}, are watching porn while loudly discussing who gets to do what first.`);
  scene.text('As they continue arguing, you do a striptease for the camera, allowing it to get close-up shots of your holes as you talk dirty, teasing the viewers.');
  qspCall(s, 'arousal', 'striptease', 5);
  // TODO-QSP: end
  scene.actions([
{ label: 'Warmup', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/warmupgang.mp4');
    scene.text('Under pressure from the director, the men eventually agree and gather around you. You start sucking one guy\'s dick while giving a handjob to another. The other two get creative - one sucks your tits while the other licks your pussy. They occasionally switch places before the director indicates that it\'s time to change the scene.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enter4GuyBlowJerkBreastCuni(s, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Fuck them', handler: (st: GameState) => {
    scene.img(`images/shared/sex/group/threesomepm${(Math.floor(Math.random() * 12) + 1)}.mp4`);
    scene.text('The guys take turns fucking you in a variety of positions. You keep them hard by jerking and sucking them off when they\'re not fucking you.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enter4GuyBlowJerkVaginal(s, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Creampies', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).porncream = ((st as any).porncream ?? 0) + (1);
    scene.img(`images/locations/city/redlight/studio_porn/sex/porncp${(Math.floor(Math.random() * 3) + 1)}.mp4`);
    (st as any).cumnostd = 1;
    qspCall(st, 'cum_call', '', '', ((st as any).npcID ?? 0), 1, 0, 10000, 40);
    (st as any).cumnostd = 1;
    qspCall(st, 'cum_call', '', '', ((st as any).npcID1 ?? 0), 1, 0, 10000, 40);
    (st as any).cumnostd = 1;
    qspCall(st, 'cum_call', '', '', ((st as any).npcID2 ?? 0), 1, 0, 10000, 40);
    (st as any).cumnostd = 1;
    qspCall(st, 'cum_call', '', '', ((st as any).npcID3 ?? 0), 1, 0, 10000, 40);
    qspCall(st, 'arousal', 'vaginal', 4, ((st as any).npcID ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'arousal', 'vaginal', 4, ((st as any).npcID1 ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'arousal', 'vaginal', 4, ((st as any).npcID2 ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'arousal', 'vaginal', 4, ((st as any).npcID3 ?? 0), 'exhibitionism', 'group');
    if (((st as any).orgasm_buildup ?? 0) < 300 - ((st as any).pcs_inhib ?? 0)) {
      scene.actions([
        { label: 'No orgasm', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/porncp4some.mp4');
    scene.text('You lie on your back, spread your legs and smile at the guys, talking dirty and inviting them to cum inside you. They gather around and take turns fucking you, making you moan as you feel each load of cum being pumped deep inside you. The cum from the first two guys starts to leak from you and pool below you as the last guy fucks you fast and hard.');
    scene.text('As soon as the guys are finished, the camera comes for a close-up as a stream of cum runs from your pussy. It then pans up to you, and you give it a wink and kiss.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/pornwalk.mp4');
    scene.text('The scene ends with you putting on your dress and stepping out the door with cum still dripping from your pussy.');
    scene.actions([
      { label: 'Take a shower', goto: ['pornstudio', 'shower'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      (st as any).will_cost = 0;
      if (((st as any).orgasm_buildup ?? 0) < 300 - ((st as any).pcs_inhib ?? 0)) {
        qspCall(st, 'willpower', 'exhib', 'self', 'hard');
      }
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Block out everything but the pleasure and let yourself orgasm', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        // TODO-QSP: act iif(orgasm_buildup < 300 - pcs_inhib, 'Block out everything but the pleasure and let yourself or...
        if (((st as any).orgasm_buildup ?? 0) < 300 - ((st as any).pcs_inhib ?? 0)) {
          qspCall(st, 'willpower', 'pay', 'self');
        }
        scene.img('images/locations/city/redlight/studio_porn/sex/porncp4some.mp4');
        scene.text('You lie on your back, spread your legs and smile at the guys, talking dirty and inviting them to cum inside you. They gather around and take turns fucking you, making you moan as you feel each load of cum being pumped deep inside you. The cum from the first two guys starts to leak from you and pool below you as the last guy fucks you fast and hard.');
        scene.text('Since you\'re already on edge, this pushes you over, and you cum around his dick, milking it even more. This pleases the director greatly. As soon as the guys are finished, the camera comes for a close-up as a stream of cum runs from your pussy. It then pans up to you, and you give it a wink and kiss.');
        (st as any).orgasmbonus = ((st as any).orgasmbonus ?? 0) + (10);
        (st as any).porngasm = ((st as any).porngasm ?? 0) + (1);
        (st as any).orgasm_or = 'yes';
        qspCall(st, 'arousal', 'vaginal', 1, ((st as any).npcID ?? 0), 'exhibitionism', 'group');
        qspCall(st, 'arousal', 'vaginal', 1, ((st as any).npcID1 ?? 0), 'exhibitionism', 'group');
        qspCall(st, 'arousal', 'vaginal', 1, ((st as any).npcID2 ?? 0), 'exhibitionism', 'group');
        qspCall(st, 'arousal', 'vaginal', 1, ((st as any).npcID3 ?? 0), 'exhibitionism', 'group');
        qspCall(st, 'arousal', 'end');
        scene.actions([
          { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/pornwalk.mp4');
    scene.text('The scene ends with you putting on your dress and stepping out the door with cum still dripping from your pussy.');
    scene.actions([
      { label: 'Take a shower', goto: ['pornstudio', 'shower'] },
    ]);
  } },
        ]);
      }
    }
  } },
    ]);
  } },
    ]);
  } },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enter4GuyBlowJerkAnal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'anal', 5, ((s as any).npcID ?? 0), 'exhibitionism', 'group');
  qspCall(s, 'arousal', 'anal', 5, ((s as any).npcID1 ?? 0), 'exhibitionism', 'group');
  qspCall(s, 'arousal', 'anal', 5, ((s as any).npcID2 ?? 0), 'exhibitionism', 'group');
  qspCall(s, 'arousal', 'anal', 5, ((s as any).npcID3 ?? 0), 'exhibitionism', 'group');
  qspCall(s, 'arousal', 'hj', (-5), ((s as any).npcID ?? 0), 'exhibitionism', 'group');
  qspCall(s, 'arousal', 'hj', (-5), ((s as any).npcID1 ?? 0), 'exhibitionism', 'group');
  qspCall(s, 'arousal', 'hj', (-5), ((s as any).npcID2 ?? 0), 'exhibitionism', 'group');
  qspCall(s, 'arousal', 'hj', (-5), ((s as any).npcID3 ?? 0), 'exhibitionism', 'group');
  qspCall(s, 'arousal', 'bj', (-5), ((s as any).npcID ?? 0), 'exhibitionism', 'group');
  qspCall(s, 'arousal', 'bj', (-5), ((s as any).npcID1 ?? 0), 'exhibitionism', 'group');
  qspCall(s, 'arousal', 'bj', (-5), ((s as any).npcID2 ?? 0), 'exhibitionism', 'group');
  qspCall(s, 'arousal', 'bj', (-5), ((s as any).npcID3 ?? 0), 'exhibitionism', 'group');
  return;
  // TODO-QSP: end
  scene.build();
}

function enter12(s: GameState, scene: SceneBuilder): void {
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    (s as any).pornbj = ((s as any).pornbj ?? 0) + (1);
  }
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    (s as any).pornhj = ((s as any).pornhj ?? 0) + (1);
  }
  (s as any).pornanal = ((s as any).pornanal ?? 0) + (2);
  (s as any).porngang = ((s as any).porngang ?? 0) + (2);
  (s as any).porncream = ((s as any).porncream ?? 0) + (2);
  (s as any).pfType = 0;
  qspCall(s, 'fame', 'city', 'porn', 30);
  (s as any).minut = ((s as any).minut ?? 0) + 180;
  ((s as any).stat = (s as any).stat ?? {})['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (1);
  (s as any).orgasm_or = 'no';
  qspCall(s, 'stat', '');
  // TODO-QSP: gs 'npcStat', $pactorID[1]
  // TODO-QSP: gs 'npcStat', $pactorID[2], 'a'
  // TODO-QSP: gs 'npcStat', $pactorID[3], 'b'
  // TODO-QSP: gs 'npcStat', $pactorID[4], 'c'
  scene.text('The set is already bustling with assistants preparing for the shoot.');
  // TODO-QSP: dynamic text: Your co-stars, <<$npcdesc>>, <<$npcdesc1>>, <<$npcdesc2>> and <<$npcdesc3>>, are...
  scene.text(`Your co-stars, ${((s as any).npcdesc ?? '')}, ${((s as any).npcdesc1 ?? '')}, ${((s as any).npcdesc2 ?? '')} and ${((s as any).npcdesc3 ?? '')}, are watching porn while loudly discussing who gets to do what first.`);
  scene.text('As they continue arguing, you do a striptease for the camera, allowing it to get close-up shots of your holes as you talk dirty, teasing the viewers.');
  qspCall(s, 'arousal', 'striptease', 5);
  // TODO-QSP: end
  scene.actions([
{ label: 'Warmup', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/warmupgang.mp4');
    scene.text('Under pressure from the director, the men eventually agree and gather around you. Next, you start sucking one guy\'s dick while giving a handjob to another. The other two get creative - one sucks your tits while the other licks your pussy. They occasionally switch places before the director indicates that it\'s time to change the scene.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enter4GuyBlowJerkBreastCuni(s, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Fuck them', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img(`images/shared/sex/group/threesomepm${(Math.floor(Math.random() * 6) + 0)}.mp4`);
    scene.text('The guys take turns fucking your ass in a variety of positions. You keep them hard by jerking and sucking them off when they\'re not fucking you.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enter4GuyBlowJerkAnal(s, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Anal creampies', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).cumnostd = 1;
    qspCall(st, 'cum_call', 'anus', ((st as any).npcID ?? 0), 1, 0, 10000, 40);
    (st as any).cumnostd = 1;
    qspCall(st, 'cum_call', 'anus', ((st as any).npcID1 ?? 0), 1, 0, 10000, 40);
    (st as any).cumnostd = 1;
    qspCall(st, 'cum_call', 'anus', ((st as any).npcID2 ?? 0), 1, 0, 10000, 40);
    (st as any).cumnostd = 1;
    qspCall(st, 'cum_call', 'anus', ((st as any).npcID3 ?? 0), 1, 0, 10000, 40);
    qspCall(st, 'arousal', 'anal', 1, ((st as any).npcID ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'arousal', 'anal', 1, ((st as any).npcID1 ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'arousal', 'anal', 1, ((st as any).npcID2 ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'arousal', 'anal', 1, ((st as any).npcID3 ?? 0), 'exhibitionism', 'group');
    if (((st as any).orgasm_buildup ?? 0) < 300 - ((st as any).pcs_inhib ?? 0)) {
      scene.actions([
        { label: 'No orgasm', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/anal4some.mp4');
    scene.text('You lower your head onto the pillows while pushing your ass in the air and spreading your cheeks to give the guys easy access to your asshole. You feel a dick slide into your asshole and start fucking you hard for a few seconds before stopping. You then feel it push deep into your ass and pump a considerable amount of warm cum into your bowels.');
    scene.text('The guy pulls out, and you immediately feel another dick replace him, pushing deep into your ass before it starts thrusting. Then, the other guys take turns cumming in your ass, and you can feel a considerable amount of cum pooled inside you when they\'re done.');
    qspCall(st, 'arousal', 'anal', 1, ((st as any).npcID ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'arousal', 'anal', 1, ((st as any).npcID1 ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'arousal', 'anal', 1, ((st as any).npcID2 ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'arousal', 'anal', 1, ((st as any).npcID3 ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/pornwalk.mp4');
    scene.text('As soon as the last guy pulls out, you quickly stuff a butt plug into your ass to contain the cum inside you. The scene ends with you putting on your dress and stepping out the door with the cum inside you.');
    scene.actions([
      { label: 'Take a shower', goto: ['pornstudio', 'shower'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      (st as any).will_cost = 0;
      if (((st as any).orgasm_buildup ?? 0) < 300 - ((st as any).pcs_inhib ?? 0)) {
        qspCall(st, 'willpower', 'exhib', 'self', 'hard');
      }
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Block out everything but the pleasure and let yourself orgasm', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        // TODO-QSP: act iif(orgasm_buildup < 300 - pcs_inhib, 'Block out everything but the pleasure and let yourself or...
        if (((st as any).orgasm_buildup ?? 0) < 300 - ((st as any).pcs_inhib ?? 0)) {
          qspCall(st, 'willpower', 'pay', 'self');
        }
        scene.img('images/locations/city/redlight/studio_porn/sex/anal4some.mp4');
        scene.text('You lower your head onto the pillows while pushing your ass in the air and spreading your cheeks to give the guys easy access to your asshole. You feel a dick slide into your asshole and start fucking you hard for a few seconds before stopping. You then feel it push deep into your ass and pump a considerable amount of warm cum into your bowels.');
        scene.text('Since you\'re already on edge, this pushes you over, and you moan into the pillow as your legs buckle in orgasm. The director seems exceptionally pleased with this. The guy pulls out, and you immediately feel another dick replace him, pushing deep into your ass before it starts thrusting. The other guys take their turns cumming in your ass, and you can feel a considerable amount of cum pooled inside you when they\'re done.');
        (st as any).orgasmbonus = ((st as any).orgasmbonus ?? 0) + (10);
        (st as any).porngasm = ((st as any).porngasm ?? 0) + (1);
        (st as any).orgasm_or = 'yes';
        qspCall(st, 'arousal', 'anal', 1, ((st as any).npcID ?? 0), 'exhibitionism', 'group');
        qspCall(st, 'arousal', 'anal', 1, ((st as any).npcID1 ?? 0), 'exhibitionism', 'group');
        qspCall(st, 'arousal', 'anal', 1, ((st as any).npcID2 ?? 0), 'exhibitionism', 'group');
        qspCall(st, 'arousal', 'anal', 1, ((st as any).npcID3 ?? 0), 'exhibitionism', 'group');
        qspCall(st, 'arousal', 'end');
        scene.actions([
          { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/pornwalk.mp4');
    scene.text('As soon as the last guy pulls out, you quickly stuff a butt plug into your ass to contain the cum inside you. The scene ends with you putting on your dress and stepping out the door with the cum inside you.');
    scene.actions([
      { label: 'Take a shower', goto: ['pornstudio', 'shower'] },
    ]);
  } },
        ]);
      }
    }
  } },
    ]);
  } },
    ]);
  } },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enter13(s: GameState, scene: SceneBuilder): void {
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    (s as any).pornbj = ((s as any).pornbj ?? 0) + (1);
  }
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    (s as any).pornhj = ((s as any).pornhj ?? 0) + (1);
  }
  (s as any).pornvag = ((s as any).pornvag ?? 0) + (1);
  (s as any).pornanal = ((s as any).pornanal ?? 0) + (1);
  (s as any).porngang = ((s as any).porngang ?? 0) + (2);
  (s as any).porncream = ((s as any).porncream ?? 0) + (2);
  (s as any).pfType = 1;
  qspCall(s, 'fame', 'city', 'porn', 30);
  (s as any).minut = ((s as any).minut ?? 0) + 180;
  ((s as any).stat = (s as any).stat ?? {})['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (1);
  (s as any).orgasm_or = 'no';
  qspCall(s, 'stat', '');
  // TODO-QSP: gs 'npcStat', $pactorID[1]
  // TODO-QSP: gs 'npcStat', $pactorID[2], 'a'
  // TODO-QSP: gs 'npcStat', $pactorID[3], 'b'
  // TODO-QSP: gs 'npcStat', $pactorID[4], 'c'
  scene.text('The set is already bustling with assistants preparing for the shoot.');
  // TODO-QSP: dynamic text: Your co-stars, <<$npcdesc>>, <<$npcdesc1>>, <<$npcdesc2>> and <<$npcdesc3>>, are...
  scene.text(`Your co-stars, ${((s as any).npcdesc ?? '')}, ${((s as any).npcdesc1 ?? '')}, ${((s as any).npcdesc2 ?? '')} and ${((s as any).npcdesc3 ?? '')}, are watching porn while loudly discussing who gets to do what first.`);
  scene.text('As they continue arguing, you do a striptease for the camera, allowing it to get close-up shots of your holes as you talk dirty, teasing the viewers.');
  qspCall(s, 'arousal', 'striptease', 5);
  // TODO-QSP: end
  scene.actions([
{ label: 'Warmup', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/warmupgang.mp4');
    scene.text('Under pressure from the director, the men eventually agree and gather around you. Next, you start sucking one guy\'s dick while giving a handjob to another. The other two get creative - one sucks your tits while the other licks your pussy. They occasionally switch places before the director indicates that it\'s time to change the scene.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enter4GuyBlowJerkBreastCuni(s, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Let them fuck you', handler: (st: GameState) => {
    (st as any).cumnostd = 1;
    qspCall(st, 'cum_call', '', '', ((st as any).npcID ?? 0), 1, 0, 10000, 40);
    (st as any).cumnostd = 1;
    qspCall(st, 'cum_call', '', '', ((st as any).npcID1 ?? 0), 1, 0, 10000, 40);
    qspCall(st, 'arousal', 'vaginal', 7, ((st as any).npcID ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'arousal', 'vaginal', 7, ((st as any).npcID1 ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'arousal', 'vaginal', 7, ((st as any).npcID2 ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'arousal', 'vaginal', 7, ((st as any).npcID3 ?? 0), 'exhibitionism', 'group');
    scene.img(`images/shared/sex/group/doublevag${(Math.floor(Math.random() * 4) + 1)}.mp4`);
    if (((st as any).orgasm_buildup ?? 0) < 200 - ((st as any).pcs_inhib ?? 0)) {
      scene.img('images/locations/city/redlight/studio_porn/sex/porgasm.mp4');
      // TODO-QSP: dynamic text: <<$npcdesc>> lies on the bed, and you slide down onto his dick, moaning as it st...
      scene.text(`${((st as any).npcdesc ?? '')} lies on the bed, and you slide down onto his dick, moaning as it stretches your pussy. ${((st as any).npcdesc1 ?? '')} steps behind you and pushes his dick inside your already-occupied vagina. The two guys start fucking you in tandem. When the director signals, they start fucking you more forcefully, and thanks to their timing, they cum inside you at the same time.`);
      scene.text('You talk dirty to them and fake an orgasm while you wait for them to finish unloading inside you.');
    } else {
      (st as any).orgasmbonus = ((st as any).orgasmbonus ?? 0) + (10);
      (st as any).porngasm = ((st as any).porngasm ?? 0) + (1);
      scene.img('images/locations/city/redlight/studio_porn/sex/porgasm.mp4');
      // TODO-QSP: dynamic text: <<$npcdesc>> lies on the bed, and you slide down onto his dick, moaning as it st...
      scene.text(`${((st as any).npcdesc ?? '')} lies on the bed, and you slide down onto his dick, moaning as it stretches your pussy. Then, ${((st as any).npcdesc1 ?? '')} steps behind you and pushes his dick inside your already-occupied vagina. The two guys start fucking you in tandem. When the director signals, they start fucking you more forcefully, and thanks to their timing, they cum inside you at the same time.`);
      scene.text('Thanks to the two dicks stretching your pussy and fucking you hard, you also cum, crying out in pleasure as your pussy contracts around them while they unload inside you.');
    }
    qspCall(st, 'arousal', 'vaginal', 3, ((st as any).npcID ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'arousal', 'vaginal', 3, ((st as any).npcID1 ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'stat', '');
    (st as any).orgasm_or = 'no';
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'They fuck your ass', handler: (st: GameState) => {
    (st as any).cumnostd = 1;
    qspCall(st, 'cum_call', 'anus', ((st as any).npcID2 ?? 0), 1, 0, 10000, 40);
    (st as any).cumnostd = 1;
    qspCall(st, 'cum_call', 'anus', ((st as any).npcID3 ?? 0), 1, 0, 10000, 40);
    qspCall(st, 'arousal', 'anal', 7, ((st as any).npcID ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'arousal', 'anal', 7, ((st as any).npcID1 ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'arousal', 'anal', 7, ((st as any).npcID2 ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'arousal', 'anal', 7, ((st as any).npcID3 ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'stat', '');
    scene.img(`images/locations/city/redlight/studio_porn/sex/doublean${(Math.floor(Math.random() * 4) + 1)}.mp4`);
    // TODO-QSP: dynamic text: Cum leaks from your pussy as <<$npcdesc>> and <<$npcdesc1>> pull out and let <<$...
    scene.text(`Cum leaks from your pussy as ${((st as any).npcdesc ?? '')} and ${((st as any).npcdesc1 ?? '')} pull out and let ${((st as any).npcdesc2 ?? '')} and ${((st as any).npcdesc3 ?? '')} replace them. You give them a quick blowjob before ${((st as any).npcdesc2 ?? '')} lies on the bed and pulls you on top of him, sliding his cock into your ass. ${((st as any).npcdesc3 ?? '')} moves in behind and inserts his dick into your already stretched hole. Despite the tightness, the guys quickly find a rhythm.`);
    if (((st as any).orgasm_buildup ?? 0) < 200 - ((st as any).pcs_inhib ?? 0)) {
      scene.actions([
        { label: 'Fake orgasm', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/porgasm.mp4');
    // TODO-QSP: dynamic text: Cum leaks from your pussy as <<$npcdesc>> and <<$npcdesc1>> pull out and let <<$...
    scene.text(`Cum leaks from your pussy as ${((st as any).npcdesc ?? '')} and ${((st as any).npcdesc1 ?? '')} pull out and let ${((st as any).npcdesc2 ?? '')} and ${((st as any).npcdesc3 ?? '')} replace them. You give them a quick blowjob before ${((st as any).npcdesc2 ?? '')} lies on the bed and pulls you on top of him, sliding his cock into your ass. ${((st as any).npcdesc3 ?? '')} moves in behind and inserts his dick into your already stretched hole. Despite the tightness, the guys quickly find a rhythm.`);
    scene.text('You talk dirty to them while they fuck your ass and fake an orgasm when they cum inside you.');
    qspCall(st, 'arousal', 'anal', 1, ((st as any).npcID ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'arousal', 'anal', 1, ((st as any).npcID1 ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'arousal', 'anal', 1, ((st as any).npcID2 ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'arousal', 'anal', 1, ((st as any).npcID3 ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Take a shower', goto: ['pornstudio', 'shower'] },
    ]);
  } },
      ]);
    } else {
      (st as any).will_cost = 0;
      if (((st as any).orgasm_buildup ?? 0) < 300 - ((st as any).pcs_inhib ?? 0)) {
        qspCall(st, 'willpower', 'exhib', 'self', 'hard');
      }
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Block out everything but the pleasure and let yourself orgasm', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        // TODO-QSP: act iif(orgasm_buildup < 300 - pcs_inhib, 'Block out everything but the pleasure and let yourself or...
        if (((st as any).orgasm_buildup ?? 0) < 300 - ((st as any).pcs_inhib ?? 0)) {
          qspCall(st, 'willpower', 'pay', 'self');
        }
        (st as any).orgasmbonus = ((st as any).orgasmbonus ?? 0) + (10);
        (st as any).porngasm = ((st as any).porngasm ?? 0) + (1);
        scene.img('images/locations/city/redlight/studio_porn/sex/porgasm.mp4');
        scene.text('The pleasure of your ass being double fucked means you also cum, visibly orgasming on camera alongside the guys.');
        (st as any).orgasm_or = 'yes';
        qspCall(st, 'arousal', 'anal', 1, ((st as any).npcID ?? 0), 'exhibitionism', 'group');
        qspCall(st, 'arousal', 'anal', 1, ((st as any).npcID1 ?? 0), 'exhibitionism', 'group');
        qspCall(st, 'arousal', 'anal', 1, ((st as any).npcID2 ?? 0), 'exhibitionism', 'group');
        qspCall(st, 'arousal', 'anal', 1, ((st as any).npcID3 ?? 0), 'exhibitionism', 'group');
        qspCall(st, 'arousal', 'end');
        scene.actions([
          { label: 'Take a shower', goto: ['pornstudio', 'shower'] },
        ]);
      }
    }
  } },
    ]);
  } },
    ]);
  } },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enter14(s: GameState, scene: SceneBuilder): void {
  (s as any).porngang = ((s as any).porngang ?? 0) + (5);
  (s as any).pornexhib = ((s as any).pornexhib ?? 0) + (5);
  (s as any).pfType = 1;
  qspCall(s, 'fame', 'city', 'porn', 40);
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  ((s as any).stat = (s as any).stat ?? {})['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (1);
  (s as any).guy = ((s as any).guy ?? 0) + (50);
  (s as any).orgasm_or = 'no';
  qspCall(s, 'stat', '');
  scene.text('The set is already bustling with assistants preparing for the shoot.');
  if (((s as any).fame ?? 0)?.['city_porn'] >= 200) {
    scene.text('Fifty guys are standing around. They are your fans and have come just for the chance to fuck you. They\'re all nervously talking and watching your previous works on screens.');
  } else {
    scene.text('Fifty guys are standing around, most of them strangers who answered an open casting call for a chance to participate in the gangbang. They\'re all nervously talking and eyeing you up.');
  }
  scene.img('images/locations/city/redlight/studio_porn/sex/touching.mp4');
  scene.text('You lie down on the stage and let them touch you to get them into the mood.');
  qspCall(s, 'arousal', 'foreplay', 10, 'self', 'gangbang', 'exhibitionism');
  qspCall(s, 'stat', '');
  scene.actions([
{ label: 'Start filming', handler: (st: GameState) => {
    (st as any).sexpartkno = 0;
    (st as any).gangOrg = 0;
    (st as any).gb_counter = 0;
    (st as any).gb_bj_count = 0;
    (st as any).gb_hj_count = 0;
    (st as any).gb_lip_count = 0;
    (st as any).gb_anal_count = 0;
    (st as any).gb_bukk_count = 0;
    (st as any).gb_sex_count = 0;
    // TODO-QSP: :gb_main_loop
    (st as any).gb_counter = ((st as any).gb_counter ?? 0) + (1);
    ((st as any).arousal_overcall = (st as any).arousal_overcall ?? {})['args'] = '';
    qspCall(st, 'npcgeneratec', '', 0, 'Porn Fan', (Math.floor(Math.random() * 17) + 22), 0, 1);
    qspCall(st, 'npcStat', '', ((st as any).npclastgenerated ?? 0));
    (st as any).gb_roll = (Math.floor(Math.random() * 6) + 1);
    if (((st as any).gb_roll ?? 0) === 1) {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enter14GbBj(s, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      if (((st as any).gb_roll ?? 0) === 2) {
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enter14GbHj(s, scene); (st as any).locArgs = __savedLocArgs; }
      } else {
        if (((st as any).gb_roll ?? 0) === 3) {
          { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enter14GbLip(s, scene); (st as any).locArgs = __savedLocArgs; }
        } else {
          if (((st as any).gb_roll ?? 0) === 4) {
            { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enter14GbAnal(s, scene); (st as any).locArgs = __savedLocArgs; }
          } else {
            if (((st as any).gb_roll ?? 0) === 5) {
              { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enter14GbBukk(s, scene); (st as any).locArgs = __savedLocArgs; }
            } else {
              { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enter14GbSex(s, scene); (st as any).locArgs = __savedLocArgs; }
            }
          }
        }
      }
    }
    (st as any).orgasm_or = 'no';
    if (((st as any).orgasm_buildup ?? 0) >= 400 - 3*((st as any).pcs_inhib ?? 0)) {
      (st as any).gangOrg = ((st as any).gangOrg ?? 0) + (1);
      (st as any).orgasm_txt = '';
      (st as any).orgasm_or = 'custom';
    }
    if (((st as any).gb_counter ?? 0) < 50) {
      // TODO-QSP: jump 'gb_main_loop'
    }
    ((st as any).stat = (st as any).stat ?? {})['vaginal'] = ((st as any).stat['vaginal'] ?? 0) + (((st as any).gb_sex_count ?? 0));
    ((st as any).stat = (st as any).stat ?? {})['anal'] = ((st as any).stat['anal'] ?? 0) + (((st as any).gb_anal_count ?? 0));
    ((st as any).stat = (st as any).stat ?? {})['bj'] = ((st as any).stat['bj'] ?? 0) + (((st as any).gb_bj_count ?? 0) + ((st as any).gb_lip_count ?? 0));
    ((st as any).stat = (st as any).stat ?? {})['hj'] = ((st as any).stat['hj'] ?? 0) + (((st as any).gb_hj_count ?? 0));
    if (((st as any).gb_bj_count ?? 0) + ((st as any).gb_lip_count ?? 0) > 5) {
      (st as any).pornbj = ((st as any).pornbj ?? 0) + (1);
    }
    if (((st as any).gb_bj_count ?? 0) > 3) {
      (st as any).pornswall = ((st as any).pornswall ?? 0) + (1);
    }
    if (((st as any).gb_hj_count ?? 0) >= 5) {
      (st as any).pornhj = ((st as any).pornhj ?? 0) + (1);
    }
    if (((st as any).gb_hj_count ?? 0) >= 5) {
      (st as any).pornbukk = ((st as any).pornbukk ?? 0) + (1);
    }
    if (((st as any).gb_anal_count ?? 0) > 5) {
      (st as any).pornanal = ((st as any).pornanal ?? 0) + (1);
    }
    if (((st as any).gb_bukk_count ?? 0) > 5) {
      (st as any).pornbukk = ((st as any).pornbukk ?? 0) + (1);
    }
    if (((st as any).gb_sex_count ?? 0) > 45) {
      (st as any).pornvag = ((st as any).pornvag ?? 0) + (5);
      (st as any).porncream = ((st as any).porncream ?? 0) + (5);
    } else {
      if (((st as any).gb_sex_count ?? 0) > 35) {
        (st as any).pornvag = ((st as any).pornvag ?? 0) + (4);
        (st as any).porncream = ((st as any).porncream ?? 0) + (4);
      } else {
        if (((st as any).gb_sex_count ?? 0) > 25) {
          (st as any).pornvag = ((st as any).pornvag ?? 0) + (3);
          (st as any).porncream = ((st as any).porncream ?? 0) + (3);
        } else {
          if (((st as any).gb_sex_count ?? 0) > 15) {
            (st as any).pornvag = ((st as any).pornvag ?? 0) + (2);
            (st as any).porncream = ((st as any).porncream ?? 0) + (2);
          } else {
            if (((st as any).gb_sex_count ?? 0) > 5) {
              (st as any).pornvag = ((st as any).pornvag ?? 0) + (1);
              (st as any).porncream = ((st as any).porncream ?? 0) + (1);
            }
          }
        }
      }
    }
    scene.img(`images/locations/city/redlight/studio_porn/sex/fuckfifty${(Math.floor(Math.random() * 6) + 0)}.mp4`);
    if (((st as any).fame ?? 0)?.['city_porn'] >= 200) {
      scene.text('Your fans gather around and start fucking you with great enthusiasm, but little technique. The gangbang lasts for hours, and you\'re plastered in cum by the time they\'re all finished.');
    } else {
      scene.text('The guys gather around and start fucking you with great enthusiasm, but little technique. The gangbang lasts for hours, and you\'re plastered in cum by the time they\'re all finished.');
    }
    if (((st as any).gangOrg ?? 0) > 0) {
      // TODO-QSP: 'During the shoot you managed to ' + iif(gangOrg = 1, 'have one orgasm.', 'orgasm <<gangOrg>> times....
    }
    (st as any).orgasmbonus = ((st as any).orgasmbonus ?? 0) + (((st as any).gangOrg ?? 0)*10);
    (st as any).porngasm = ((st as any).porngasm ?? 0) + (((st as any).gangOrg ?? 0));
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Take a shower', goto: ['pornstudio', 'shower'] },
    ]);
  } },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enter14GbBj(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'bj', 8, ((s as any).npcID ?? 0), 'gangbang', 'exhibitionism');
  (s as any).cumnostd = 1;
  qspCall(s, 'cum_call', 'precum', ((s as any).npcID ?? 0), 0, 0, 10000, 1);
  (s as any).cumnostd = 1;
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0), 0, 0, 10000, 40);
  (s as any).gb_bj_count = ((s as any).gb_bj_count ?? 0) + (1);
  return;
  // TODO-QSP: end
  scene.build();
}

function enter14GbHj(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'hj', 8, ((s as any).npcID ?? 0), 'gangbang', 'exhibitionism');
  (s as any).cumnostd = 1;
  qspCall(s, 'cum_call', 'precum', ((s as any).npcID ?? 0), 0, 0, 10000, 1);
  qspCall(s, 'cum_call', 'hands', ((s as any).npcID ?? 0), 0, 0, 10000, 40);
  (s as any).gb_hj_count = ((s as any).gb_hj_count ?? 0) + (1);
  return;
  // TODO-QSP: end
  scene.build();
}

function enter14GbLip(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'bj', 8, ((s as any).npcID ?? 0), 'gangbang', 'exhibitionism');
  (s as any).cumnostd = 1;
  qspCall(s, 'cum_call', 'precum', ((s as any).npcID ?? 0), 0, 0, 10000, 1);
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0), 0, 0, 10000, 40);
  } else {
    qspCall(s, 'cum_call', 'hair', ((s as any).npcID ?? 0), 0, 0, 10000, 40);
  }
  (s as any).gb_lip_count = ((s as any).gb_lip_count ?? 0) + (1);
  return;
  // TODO-QSP: end
  scene.build();
}

function enter14GbAnal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'anal', 8, ((s as any).npcID ?? 0), 'gangbang', 'exhibitionism');
  (s as any).cumnostd = 1;
  qspCall(s, 'cum_call', 'precum', ((s as any).npcID ?? 0), 0, 0, 10000, 1);
  (s as any).cumnostd = 1;
  qspCall(s, 'cum_call', 'anus', ((s as any).npcID ?? 0), 0, 0, 10000, 40);
  (s as any).gb_anal_count = ((s as any).gb_anal_count ?? 0) + (1);
  return;
  // TODO-QSP: end
  scene.build();
}

function enter14GbBukk(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'foreplay', 8, ((s as any).npcID ?? 0), 'gangbang', 'exhibitionism');
  (s as any).cumnostd = 1;
  qspCall(s, 'cum_call', 'precum', ((s as any).npcID ?? 0), 0, 0, 10000, 1);
  (s as any).bukkloc = (Math.floor(Math.random() * 7) + 0);
  if ((!((s as any).bukkloc ?? 0))) {
    qspCall(s, 'cum_call', 'labia', ((s as any).npcID ?? 0), 0, 0, 10000, 40);
  } else {
    if (((s as any).bukkloc ?? 0) === 1) {
      qspCall(s, 'cum_call', 'butt', ((s as any).npcID ?? 0), 0, 0, 10000, 40);
    } else {
      if (((s as any).bukkloc ?? 0) === 2) {
        qspCall(s, 'cum_call', 'back', ((s as any).npcID ?? 0), 0, 0, 10000, 40);
      } else {
        if (((s as any).bukkloc ?? 0) === 3) {
          qspCall(s, 'cum_call', 'legs', ((s as any).npcID ?? 0), 0, 0, 10000, 40);
        } else {
          if (((s as any).bukkloc ?? 0) === 4) {
            qspCall(s, 'cum_call', 'arms', ((s as any).npcID ?? 0), 0, 0, 10000, 40);
          } else {
            if (((s as any).bukkloc ?? 0) === 5) {
              qspCall(s, 'cum_call', 'stomach', ((s as any).npcID ?? 0), 0, 0, 10000, 40);
            } else {
              qspCall(s, 'cum_call', 'breasts', ((s as any).npcID ?? 0), 0, 0, 10000, 40);
            }
          }
        }
      }
    }
  }
  (s as any).gb_bukk_count = ((s as any).gb_bukk_count ?? 0) + (1);
  return;
  // TODO-QSP: end
  scene.build();
}

function enter14GbSex(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'vaginal', 8, ((s as any).npcID ?? 0), 'gangbang', 'exhibitionism');
  (s as any).cumnostd = 1;
  qspCall(s, 'cum_call', '', '', ((s as any).npcID ?? 0), 0, 0, 10000, 40);
  (s as any).gb_sex_count = ((s as any).gb_sex_count ?? 0) + (1);
  return;
  // TODO-QSP: end
  scene.build();
}

function enter15(s: GameState, scene: SceneBuilder): void {
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    (s as any).pornbj = ((s as any).pornbj ?? 0) + (1);
  }
  (s as any).pornanal = ((s as any).pornanal ?? 0) + (1);
  if ((!(Math.floor(Math.random() * 3) + 0))) {
    (s as any).porngang = ((s as any).porngang ?? 0) + (1);
  }
  (s as any).porncream = ((s as any).porncream ?? 0) + (1);
  (s as any).pfType = 1;
  qspCall(s, 'fame', 'city', 'porn', 20);
  (s as any).minut = ((s as any).minut ?? 0) + 180;
  qspCall(s, 'stat', '');
  // TODO-QSP: gs 'npcStat', $pactorID[1]
  scene.text('The set is already bustling with assistants preparing for the shoot.');
  // TODO-QSP: dynamic text: <<$npcdesc>> is your co-star for this shoot. He is standing to the side, slowly ...
  scene.text(`${((s as any).npcdesc ?? '')} is your co-star for this shoot. He is standing to the side, slowly stroking his dick.`);
  scene.actions([
{ label: 'Undress and start', handler: (st: GameState) => {
    (st as any).pornbj = ((st as any).pornbj ?? 0) + (1);
    scene.img('images/locations/city/redlight/studio_porn/sex/bj.mp4');
    // TODO-QSP: dynamic text: The scene starts with you giving a camera a striptease and bending over to provi...
    scene.text(`The scene starts with you giving a camera a striptease and bending over to provide a close-up view of your asshole. You then finger your ass and use a dildo to fuck yourself before ${((st as any).npcdesc ?? '')} walks over.`);
    scene.text('You crawl up to him with a seductive gaze, take his cock into your mouth, and start sucking it.');
    qspCall(st, 'arousal', 'striptease', 5);
    qspCall(st, 'arousal', 'bj', 25, 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Keep sucking', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/deep.mp4');
    // TODO-QSP: dynamic text: <<$npcdesc>> grabs your hair in his fists and begins to fuck your mouth, driving...
    scene.text(`${((st as any).npcdesc ?? '')} grabs your hair in his fists and begins to fuck your mouth, driving his cock down your throat with every thrust.`);
    scene.text('After a few minutes, he takes his cock out, and you wipe the saliva from your mouth.');
    qspCall(st, 'arousal', 'bj', 15, 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Penetration', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/analinsert.mp4');
    // TODO-QSP: dynamic text: <<$npcdesc>> sits on the bed, and you turn around, presenting your ass to him. H...
    scene.text(`${((st as any).npcdesc ?? '')} sits on the bed, and you turn around, presenting your ass to him. He slaps and squeezes your ass a few times before you start grinding his cock between your ass cheeks, your saliva coating your asshole. ${((st as any).npcdesc ?? '')} then guides his cock to your now wet hole and slowly penetrates you, both of you groaning as he slides inside you.`);
    qspCall(st, 'arousal', 'anal', 15, 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Anal', handler: (st: GameState) => {
    qspCall(st, 'arousal_funcs', 'stretch', 'anal', 1);
    scene.img('images/locations/city/redlight/studio_porn/sex/sex2.mp4');
    // TODO-QSP: dynamic text: <<$npcdesc>> enjoys the tightness as you ride his dick, occasionally sliding it ...
    scene.text(`${((st as any).npcdesc ?? '')} enjoys the tightness as you ride his dick, occasionally sliding it out to show both ${((st as any).npcdesc ?? '')} and the camera your stretched hole. This continues for a while before it starts hurting, and you pull out to suck his dick for a few minutes to let your ass recover.`);
    // TODO-QSP: dynamic text: You then get on all fours, and <<$npcdesc>> slides back inside you and resumes f...
    scene.text(`You then get on all fours, and ${((st as any).npcdesc ?? '')} slides back inside you and resumes fucking your ass. You get ass fucked in various positions, with breaks being called to let you rest or ${((st as any).npcdesc ?? '')} get hard again.`);
    qspCall(st, 'arousal', 'anal', 15, 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Anal creampie', handler: (st: GameState) => {
    (st as any).sexpartkno = 1;
    (st as any).orgasmbonus = ((st as any).orgasmbonus ?? 0) + (10);
    (st as any).porngasm = ((st as any).porngasm ?? 0) + (1);
    (st as any).cumnostd = 1;
    qspCall(st, 'cum_call', 'anus', ((st as any).npcID ?? 0), 1, 0, 10000, 40);
    scene.img('images/locations/city/redlight/studio_porn/sex/porncpanal.mp4');
    // TODO-QSP: dynamic text: You''re really getting into it and let out a pleasured moan as your ass tightens...
    scene.text(`You're really getting into it and let out a pleasured moan as your ass tightens around ${((st as any).npcdesc ?? '')}'s cock, which sends him over the edge. You suddenly feel his cock twitching inside you as your bowels are flooded with warm cum.`);
    // TODO-QSP: dynamic text: You climb off <<$npcdesc>> and bend over on all fours as the camera moves in beh...
    scene.text(`You climb off ${((st as any).npcdesc ?? '')} and bend over on all fours as the camera moves in behind you. Your well fucked hole lets out a loud squelch as you squeeze the cum from your ass. The director seems satisfied with the scene and ends the shoot.`);
    qspCall(st, 'arousal', 'anal', 5, 'exhibitionism');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Take a shower', goto: ['pornstudio', 'shower'] },
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
  return;
  // TODO-QSP: end
  scene.build();
}

function enter16(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 3) + 0)===0) {
    (s as any).pornhj = ((s as any).pornhj ?? 0) + (1);
  }
  if ((Math.floor(Math.random() * 3) + 0)===0) {
    (s as any).pornbj = ((s as any).pornbj ?? 0) + (1);
  }
  (s as any).pornanal = ((s as any).pornanal ?? 0) + (1);
  (s as any).pornbukk = ((s as any).pornbukk ?? 0) + (1);
  (s as any).pfType = 0;
  qspCall(s, 'fame', 'city', 'porn', 16);
  (s as any).minut = ((s as any).minut ?? 0) + 180;
  qspCall(s, 'stat', '');
  // TODO-QSP: gs 'npcStat', $pactorID[1]
  scene.text('The set is already bustling with assistants preparing for the shoot.');
  // TODO-QSP: dynamic text: <<$npcdesc>> is your co-star for this shoot. He is standing to the side, slowly ...
  scene.text(`${((s as any).npcdesc ?? '')} is your co-star for this shoot. He is standing to the side, slowly stroking his dick.`);
  scene.actions([
{ label: 'Undress and start', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/hj.mp4');
    // TODO-QSP: dynamic text: The scene starts with you giving a camera a striptease and getting on all fours ...
    scene.text(`The scene starts with you giving a camera a striptease and getting on all fours on a sofa to provide it with a close-up view of your pussy and asshole. You then finger your ass before ${((st as any).npcdesc ?? '')} walks over.`);
    // TODO-QSP: dynamic text: <<$npcdesc>> sits on the sofa next to you. You kneel beside him, take his dick i...
    scene.text(`${((st as any).npcdesc ?? '')} sits on the sofa next to you. You kneel beside him, take his dick in your hand and start jerking it while making out with him.`);
    qspCall(st, 'arousal', 'striptease', 5);
    qspCall(st, 'arousal', 'hj', 25, 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Blow him', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/bj.mp4');
    // TODO-QSP: dynamic text: <<$npcdesc>> is now rock-hard in your hand, so you bend over and start passionat...
    scene.text(`${((st as any).npcdesc ?? '')} is now rock-hard in your hand, so you bend over and start passionately sucking his dick while he leans over and plays with your ass.`);
    qspCall(st, 'arousal', 'bj', 5, 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Rimjob', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/rimming.mp4');
    // TODO-QSP: dynamic text: After sucking his dick for a few minutes, you get up and seductively walk over t...
    scene.text(`After sucking his dick for a few minutes, you get up and seductively walk over to a nearby table. You lie down on the table and spread your ass for ${((st as any).npcdesc ?? '')}, who walks over and starts rimming you, expertly flicking his tongue over your hole.`);
    qspCall(st, 'arousal', 'rimming', 5, 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Anal', handler: (st: GameState) => {
    qspCall(st, 'arousal_funcs', 'stretch', 'anal', 1);
    scene.img('images/locations/city/redlight/studio_porn/sex/sexanal.mp4');
    // TODO-QSP: dynamic text: Your asshole now wet and ready, <<$npcdesc>> fingers you before standing and ins...
    scene.text(`Your asshole now wet and ready, ${((st as any).npcdesc ?? '')} fingers you before standing and inserting his dick. He starts fucking you hard, occasionally pulling out to show your gaping asshole to the camera.`);
    scene.text('You get ass fucked in various poses on and next to the table, with several breaks in filming to let you rest or let him get hard again. You eventually return to the pose on the table you started with.');
    qspCall(st, 'arousal', 'anal', 15, 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Climax', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).cumnostd = 1;
    qspCall(st, 'cum_call', 'butt', ((st as any).npcID ?? 0), 1, 0, 10000, 40);
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/redlight/studio_porn/sex/cumanal.mp4');
    // TODO-QSP: dynamic text: <<$npcdesc>> starts fucking your ass fast and hard as you talk dirty to him and ...
    scene.text(`${((st as any).npcdesc ?? '')} starts fucking your ass fast and hard as you talk dirty to him and the camera. Finally, he starts panting, and just as he's about to cum, he pulls out and shoots his load over your ass.`);
    scene.actions([
      { label: 'Clean his cock', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).npcID ?? 0), 1, 0, 10000, 4);
    scene.img('images/locations/city/redlight/studio_porn/sex/bj2.mp4');
    scene.text('You quickly slide off the table and take his cock down your throat before licking his shaft clean, the camera getting a good shot of your cum covered ass as you do.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Take a shower', goto: ['pornstudio', 'shower'] },
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
  return;
  // TODO-QSP: end
  scene.build();
}

function enter17(s: GameState, scene: SceneBuilder): void {
  (s as any).porntrib = ((s as any).porntrib ?? 0) + (1);
  (s as any).porncuni = ((s as any).porncuni ?? 0) + (1);
  (s as any).pornlesbo = ((s as any).pornlesbo ?? 0) + (1);
  (s as any).pfType = 0;
  qspCall(s, 'fame', 'city', 'porn', 16);
  (s as any).minut = ((s as any).minut ?? 0) + 180;
  qspCall(s, 'stat', '');
  // TODO-QSP: gs 'npcStat', $pactressID[1]
  scene.text('The set is already bustling with assistants preparing for the shoot.');
  // TODO-QSP: dynamic text: <<$npcdesc>> is your co-star for this shoot. She is sitting to the side, fondlin...
  scene.text(`${((s as any).npcdesc ?? '')} is your co-star for this shoot. She is sitting to the side, fondling her breasts while watching porn on a monitor.`);
  scene.actions([
{ label: 'Start', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/lesbo0.mp4');
    // TODO-QSP: dynamic text: The scene starts with you playing with <<$npcdesc>>''s ass. You give her a firm ...
    scene.text(`The scene starts with you playing with ${((st as any).npcdesc ?? '')}'s ass. You give her a firm slap on the rear and tease the camera by slowly pulling her panties halfway down before pulling them up again. You then quickly pull them down again, this time to her ankles. She gives the camera a view of her pussy and asshole before you push her onto the bed in front of you.`);
    qspCall(st, 'arousal', 'foreplay_give', 5, 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Eat her pussy', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/lesbo1.mp4');
    // TODO-QSP: dynamic text: You kneel before <<$npcdesc>>, lifting her panties from her ankles and spreading...
    scene.text(`You kneel before ${((st as any).npcdesc ?? '')}, lifting her panties from her ankles and spreading her legs. You slowly trace lines along her labia with your tongue before running it between her lips and reaching her clit. You then quickly start flicking her clit, your tongue swirling over it as it begins to swell.`);
    qspCall(st, 'arousal', 'cuni_give', 15, 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Your turn', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/lesbo2.mp4');
    scene.text('After pleasing her for a while, you withdraw your tongue from her crotch as she quickly pulls you down onto your back. She lifts your legs and practically rips your panties off before tossing them aside. She wastes no time and buries her face right into your pussy, teasing your engorged clit as she vigorously eats you out, her tongue lapping up the juices that run from your pussy.');
    qspCall(st, 'arousal', 'cuni', 15, 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Tribbing', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/lesbo3.mp4');
    // TODO-QSP: dynamic text: Satisfied with pleasing you with her tongue, <<$npcdesc>> straddles you and hold...
    scene.text(`Satisfied with pleasing you with her tongue, ${((st as any).npcdesc ?? '')} straddles you and holds your leg to one side as she brings her pussy down to meet your own. You let out a pleasured moan as your clits make contact. She then starts rocking her hips back and forth, and you both enjoy the sensation as your wet labia makes it easy for her to slide across you.`);
    qspCall(st, 'arousal', 'trib', 15, 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Double dildo', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/lesbo4.mp4');
    // TODO-QSP: dynamic text: <<$npcdesc>> stops her movements and reaches over to grab a sizeable, doubled-he...
    scene.text(`${((st as any).npcdesc ?? '')} stops her movements and reaches over to grab a sizeable, doubled-headed dildo. She sucks on one end and slides it into your pussy. The toy is buried firmly in your hole, and she slides down onto the other end. She then starts to ride the dildo, her movements pushing it deeper into your pussy.`);
    qspCall(st, 'arousal', 'vaginal_dildo', 15, 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img('images/locations/city/redlight/studio_porn/sex/porgasm.mp4');
    // TODO-QSP: dynamic text: <<$npcdesc>> reaches her climax as she slams down on the dildo, sending it deep ...
    scene.text(`${((st as any).npcdesc ?? '')} reaches her climax as she slams down on the dildo, sending it deep into her pussy. Her body is pleased as her juices run down the shaft of the dildo and onto your pussy. Finally, she withdraws the dildo from her pussy and pulls it out of you. You both suck the ends of it clean.`);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Take a shower', goto: ['pornstudio', 'shower'] },
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
  return;
  // TODO-QSP: end
  scene.build();
}

function enter18(s: GameState, scene: SceneBuilder): void {
  (s as any).porncuni = ((s as any).porncuni ?? 0) + (1);
  (s as any).pornlesbo = ((s as any).pornlesbo ?? 0) + (1);
  (s as any).pfType = 0;
  qspCall(s, 'fame', 'city', 'porn', 16);
  (s as any).minut = ((s as any).minut ?? 0) + 180;
  qspCall(s, 'stat', '');
  // TODO-QSP: gs 'npcStat', $pactressID[1]
  scene.text('The set is already bustling with assistants preparing for the shoot.');
  // TODO-QSP: dynamic text: <<$npcdesc>>, your co-star for this shoot, is sitting to the side, fondling her ...
  scene.text(`${((s as any).npcdesc ?? '')}, your co-star for this shoot, is sitting to the side, fondling her breasts while watching porn on a monitor.`);
  scene.actions([
{ label: 'Start', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/lesbo0.mp4');
    // TODO-QSP: dynamic text: The scene starts with you playing with <<$npcdesc>>''s ass. You give her a firm ...
    scene.text(`The scene starts with you playing with ${((st as any).npcdesc ?? '')}'s ass. You give her a firm slap on the rear and tease the camera by slowly pulling her panties halfway down before pulling them up again. You then quickly pull them down, this time to her ankles. She gives the camera a view of her pussy and asshole before you push her onto the bed in front of you.`);
    qspCall(st, 'arousal', 'foreplay_give', 5, 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Eat her pussy', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/lesbo1.mp4');
    // TODO-QSP: dynamic text: You kneel before <<$npcdesc>>, lifting her panties from her ankles and spreading...
    scene.text(`You kneel before ${((st as any).npcdesc ?? '')}, lifting her panties from her ankles and spreading her legs. You slowly trace lines along her labia with your tongue before running it between her lips and reaching her clit. You then quickly start flicking her clit, your tongue swirling over it as it begins to swell.`);
    qspCall(st, 'arousal', 'cuni_give', 15, 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Your turn', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/lesbo2.mp4');
    scene.text('After pleasing her for a while, you withdraw your tongue from her crotch as she quickly pulls you down onto your back. Next, she lifts your legs and practically rips your panties before tossing them aside. She wastes no time and buries her face right into your pussy, teasing your engorged clit as she vigorously eats you out, her tongue lapping up the juices that run from your pussy.');
    qspCall(st, 'arousal', 'cuni', 15, 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get fucked', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/lesbo5.mp4');
    // TODO-QSP: dynamic text: You are lying on the bed as <<$npcdesc>> moves off to the side and slips on a st...
    scene.text(`You are lying on the bed as ${((st as any).npcdesc ?? '')} moves off to the side and slips on a strap-on dildo. She moves over to you as you slide down, take the plastic cock in your mouth and give her a blowjob before she pushes you down onto the bed and climbs on top of you. She slides inside your pussy and begins to fuck you hard.`);
    qspCall(st, 'arousal', 'vaginal_strap', 15, 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Her turn', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/lesbo6.mp4');
    // TODO-QSP: dynamic text: After the vigorous pounding, <<$npcdesc>> pulls out, slides the strapon off and ...
    scene.text(`After the vigorous pounding, ${((st as any).npcdesc ?? '')} pulls out, slides the strapon off and gets on all fours as you stand and strap yourself in. She's on her knees before you begging you to fuck her ass, and you're eager to comply. The plastic cock is coated in your juices, making it easy to push yourself into her awaiting hole. You start fucking her ass as she begs you to go harder.`);
    qspCall(st, 'arousal', 'anal_strap_give', 15, 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img('images/locations/city/redlight/studio_porn/sex/lesbo7.mp4');
    // TODO-QSP: dynamic text: The relentless ass fucking you give <<$npcdesc>> is enough to bring her to orgas...
    scene.text(`The relentless ass fucking you give ${((st as any).npcdesc ?? '')} is enough to bring her to orgasm. Her juices spray from her twitching pussy as her ass tightens around your fake cock. You pull out of her and the camera comes in for a shot of her stretched hole. The scene ends with you locking tongues with ${((st as any).npcdesc ?? '')}.`);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Take a shower', goto: ['pornstudio', 'shower'] },
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
  return;
  // TODO-QSP: end
  scene.build();
}

function enter19(s: GameState, scene: SceneBuilder): void {
  (s as any).pornbj = ((s as any).pornbj ?? 0) + (1);
  (s as any).pornvag = ((s as any).pornvag ?? 0) + (1);
  (s as any).pornanal = ((s as any).pornanal ?? 0) + (1);
  (s as any).pornswall = ((s as any).pornswall ?? 0) + (1);
  (s as any).porngang = ((s as any).porngang ?? 0) + (1);
  (s as any).pfType = 0;
  qspCall(s, 'fame', 'city', 'porn', 25);
  (s as any).minut = ((s as any).minut ?? 0) + 180;
  ((s as any).stat = (s as any).stat ?? {})['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  // TODO-QSP: gs 'npcStat', $pactorID[1]
  // TODO-QSP: gs 'npcStat', $pactressID[1], 'a'
  scene.text('The set is already bustling with assistants preparing for the shoot.');
  // TODO-QSP: dynamic text: <<$npcdesc>> watches porn on a monitor, getting himself ready while <<$npcdesc1>...
  scene.text(`${((s as any).npcdesc ?? '')} watches porn on a monitor, getting himself ready while ${((s as any).npcdesc1 ?? '')} has her make-up touched up.`);
  scene.actions([
{ label: 'Undress and start', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/mff0.mp4');
    // TODO-QSP: dynamic text: The camera starts rolling and comes for a close-up of you and <<$npcdesc1>>. As ...
    scene.text(`The camera starts rolling and comes for a close-up of you and ${((st as any).npcdesc1 ?? '')}. As it does, she grabs your ass and gives it a jiggle for the camera. Then, ${((st as any).npcdesc ?? '')} moves into the scene, and you both kneel before him.`);
    scene.actions([
      { label: 'Suck', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/mff1.mp4');
    // TODO-QSP: dynamic text: You take <<$npcdesc>>''s cock into your mouth and begin sucking on his tip as <<...
    scene.text(`You take ${((st as any).npcdesc ?? '')}'s cock into your mouth and begin sucking on his tip as ${((st as any).npcdesc1 ?? '')}t runs her tongue along his shaft. You then take him deeper into your throat as ${((st as any).npcdesc1 ?? '')} playfully sucks on his balls.`);
    qspCall(st, 'arousal', 'bj', 15, ((st as any).npcID ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Fuck', handler: (st: GameState) => {
    qspCall(st, 'arousal_funcs', 'stretch', 'vaginal');
    scene.img('images/locations/city/redlight/studio_porn/sex/mff2.mp4');
    // TODO-QSP: dynamic text: <<$npcdesc1>> remains on her knees as you move up and guide <<$npcdesc>>''s cock...
    scene.text(`${((st as any).npcdesc1 ?? '')} remains on her knees as you move up and guide ${((st as any).npcdesc ?? '')}'s cock into your pussy. You start riding him as ${((st as any).npcdesc1 ?? '')} buries her face in your pussy and quickly starts flicking her tongue over your clit, causing waves of pleasure to overwhelm you.`);
    qspCall(st, 'arousal', 'vaginal', 20, ((st as any).npcID ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'arousal', 'cuni', 20, ((st as any).npcID1 ?? 0), 'exhibitionism', 'group', 'lesbian');
    (st as any).cumnostd = 1;
    qspCall(st, 'cum_call', 'precum', ((st as any).npcID ?? 0), 1, 0, 10000, 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Anal', handler: (st: GameState) => {
    qspCall(st, 'arousal_funcs', 'stretch', 'anal', 1);
    scene.img('images/locations/city/redlight/studio_porn/sex/mff3.mp4');
    // TODO-QSP: dynamic text: <<$npcdesc1>> gets up from the floor and lies down on the bed. You straddle her,...
    scene.text(`${((st as any).npcdesc1 ?? '')} gets up from the floor and lies down on the bed. You straddle her, your pussy sitting before her face as ${((st as any).npcdesc ?? '')} moves in behind and slowly pushes his cock into your ass. ${((st as any).npcdesc1 ?? '')} playfully licks your swollen clit as he starts fucking your ass hard.`);
    qspCall(st, 'arousal', 'cuni', 15, ((st as any).npcID1 ?? 0), 'exhibitionism', 'group', 'lesbian');
    qspCall(st, 'arousal', 'anal', 15, ((st as any).npcID ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Creampie', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/mff4.mp4');
    // TODO-QSP: dynamic text: You eventually feel <<$npcdesc>> starting to twitch and feel a sudden warmth flo...
    scene.text(`You eventually feel ${((st as any).npcdesc ?? '')} starting to twitch and feel a sudden warmth flood your ass. When he pulls out, a stream of cum soon follows, running down your pussy and into ${((st as any).npcdesc1 ?? '')}'s awaiting mouth.`);
    (st as any).cumnostd = 1;
    qspCall(st, 'cum_call', 'anus', ((st as any).npcID ?? 0), 1, 0, 10000, 20);
    qspCall(st, 'arousal', 'anal', 15, ((st as any).npcID ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'arousal', 'cuni', 15, ((st as any).npcID1 ?? 0), 'exhibitionism', 'group', 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Cum sharing', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).pornswall = ((st as any).pornswall ?? 0) + (1);
    scene.img('images/locations/city/redlight/studio_porn/sex/mff5.mp4');
    // TODO-QSP: dynamic text: You quickly climb off <<$npcdesc1>> and kneel before her as she opens her mouth,...
    scene.text(`You quickly climb off ${((st as any).npcdesc1 ?? '')} and kneel before her as she opens her mouth, and ${((st as any).npcdesc ?? '')}'s load drools from her tongue and into your mouth. You show the camera your cum filled mouth before swallowing the cum and finishing the scene making out with ${((st as any).npcdesc1 ?? '')}.`);
    (st as any).cumnostd = 1;
    qspCall(st, 'cum_call', 'mouth', ((st as any).npcID ?? 0), 1, 0, 10000, 20);
    scene.actions([
      { label: 'Take a shower', goto: ['pornstudio', 'shower'] },
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
  return;
  // TODO-QSP: end
  scene.build();
}

function enter20(s: GameState, scene: SceneBuilder): void {
  (s as any).pornbj = ((s as any).pornbj ?? 0) + (1);
  (s as any).pornswall = ((s as any).pornswall ?? 0) + (1);
  (s as any).porngang = ((s as any).porngang ?? 0) + (1);
  (s as any).pfType = 0;
  qspCall(s, 'fame', 'city', 'porn', 25);
  (s as any).minut = ((s as any).minut ?? 0) + 180;
  ((s as any).stat = (s as any).stat ?? {})['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  // TODO-QSP: gs 'npcStat', $pactorID[1]
  // TODO-QSP: gs 'npcStat', $pactressID[1]
  scene.text('The set is already bustling with assistants preparing for the shoot.');
  // TODO-QSP: dynamic text: <<$npcdesc>> is watching porn on a monitor, getting himself ready, while <<$npcd...
  scene.text(`${((s as any).npcdesc ?? '')} is watching porn on a monitor, getting himself ready, while ${((s as any).npcdesc1 ?? '')} is having her make-up touched up.`);
  scene.actions([
{ label: 'Undress and start', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/mff0.mp4');
    // TODO-QSP: dynamic text: The camera starts rolling and comes for a close-up of you and <<$npcdesc1>>. You...
    scene.text(`The camera starts rolling and comes for a close-up of you and ${((st as any).npcdesc1 ?? '')}. You grab her ass and give it a jiggle for the camera as it does. Then, ${((st as any).npcdesc ?? '')} moves into the scene, and you both kneel before him.`);
    scene.actions([
      { label: 'Suck', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/mff1.mp4');
    // TODO-QSP: dynamic text: <<$npcdesc1>> wastes no time and takes <<$npcdesc>>''s cock down her throat as y...
    scene.text(`${((st as any).npcdesc1 ?? '')} wastes no time and takes ${((st as any).npcdesc ?? '')}'s cock down her throat as you get down low and suck his balls.`);
    qspCall(st, 'arousal', 'bj', 15, ((st as any).npcID ?? 0), 'exhibitionism', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Fuck', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/mff2.mp4');
    // TODO-QSP: dynamic text: You remain on your knees as <<$npcdesc1>> straddles <<$npcdesc>>, slides down on...
    scene.text(`You remain on your knees as ${((st as any).npcdesc1 ?? '')} straddles ${((st as any).npcdesc ?? '')}, slides down onto his cock and starts riding him as you take your place and bury your face into her pussy, running your tongue over her clit as she takes ${((st as any).npcdesc ?? '')} deep inside her. She shrieks in pleasure, and you're sure she orgasms at least once.`);
    qspCall(st, 'arousal', 'cuni_give', 15, ((st as any).npcID1 ?? 0), 'exhibitionism', 'group', 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Anal', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/mff3.mp4');
    // TODO-QSP: dynamic text: You lie down on the bed, <<$npcdesc1>> straddling you, her glistening pussy begg...
    scene.text(`You lie down on the bed, ${((st as any).npcdesc1 ?? '')} straddling you, her glistening pussy begging you to please it. ${((st as any).npcdesc ?? '')} moves in behind, inserts himself into her ass, and starts to pound her, ${((st as any).npcdesc1 ?? '')} begging him to go harder. You start flicking your tongue over ${((st as any).npcdesc1 ?? '')}'s now massively engorged clit.`);
    qspCall(st, 'arousal', 'cuni_give', 15, ((st as any).npcID1 ?? 0), 'exhibitionism', 'group', 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Creampie', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/mff4.mp4');
    // TODO-QSP: dynamic text: You pull your face out of <<$npcdesc1>>''s crotch in time to see <<$npcdesc>>''s...
    scene.text(`You pull your face out of ${((st as any).npcdesc1 ?? '')}'s crotch in time to see ${((st as any).npcdesc ?? '')}'s balls twitching as he unloads inside her ass. At the same time, you see her pussy convulsing, and she screams in pleasure as they reach orgasm together. You open your mouth as he pulls out of her, and a stream of cum runs from her hole down onto your tongue.`);
    (st as any).cumnostd = 1;
    qspCall(st, 'cum_call', 'mouth', ((st as any).npcID ?? 0), 1, 0, 10000, 30);
    qspCall(st, 'arousal', 'cuni_give', 15, ((st as any).npcID1 ?? 0), 'exhibitionism', 'group', 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Cum sharing', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img('images/locations/city/redlight/studio_porn/sex/mff5.mp4');
    // TODO-QSP: dynamic text: <<$npcdesc1>> climbs off and kneels in front of you as you open your mouth and a...
    scene.text(`${((st as any).npcdesc1 ?? '')} climbs off and kneels in front of you as you open your mouth and allow ${((st as any).npcdesc ?? '')}'s load to drool from your tongue and into her mouth. She then shows her cum filled mouth to the camera and makes a somewhat perverted show of swallowing it. The scene ends with the two of you making out.`);
    qspCall(st, 'arousal', 'kiss', 10, ((st as any).npcID1 ?? 0), 'exhibitionism', 'group', 'lesbian');
    scene.actions([
      { label: 'Take a shower', goto: ['pornstudio', 'shower'] },
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
  return;
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'pornactor':
      enterPornactor(s, scene);
      break;
    case 'pornactress':
      enterPornactress(s, scene);
      break;
    case '1':
      enter1(s, scene);
      break;
    case '2':
      enter2(s, scene);
      break;
    case '3':
      enter3(s, scene);
      break;
    case '4':
      enter4(s, scene);
      break;
    case '5':
      enter5(s, scene);
      break;
    case '6':
      enter6(s, scene);
      break;
    case '7':
      enter7(s, scene);
      break;
    case '8':
      enter8(s, scene);
      break;
    case '9':
      enter9(s, scene);
      break;
    case '4_guy_blow_jerk_breast_cuni':
      enter4GuyBlowJerkBreastCuni(s, scene);
      break;
    case '4_guy_blow_jerk_vaginal':
      enter4GuyBlowJerkVaginal(s, scene);
      break;
    case '10':
      enter10(s, scene);
      break;
    case '11':
      enter11(s, scene);
      break;
    case '4_guy_blow_jerk_anal':
      enter4GuyBlowJerkAnal(s, scene);
      break;
    case '12':
      enter12(s, scene);
      break;
    case '13':
      enter13(s, scene);
      break;
    case '14':
      enter14(s, scene);
      break;
    case '14_gb_bj':
      enter14GbBj(s, scene);
      break;
    case '14_gb_hj':
      enter14GbHj(s, scene);
      break;
    case '14_gb_lip':
      enter14GbLip(s, scene);
      break;
    case '14_gb_anal':
      enter14GbAnal(s, scene);
      break;
    case '14_gb_bukk':
      enter14GbBukk(s, scene);
      break;
    case '14_gb_sex':
      enter14GbSex(s, scene);
      break;
    case '15':
      enter15(s, scene);
      break;
    case '16':
      enter16(s, scene);
      break;
    case '17':
      enter17(s, scene);
      break;
    case '18':
      enter18(s, scene);
      break;
    case '19':
      enter19(s, scene);
      break;
    case '20':
      enter20(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pornfilm: LocationDef = {
  name: 'pornfilm',
  title: 'The set is already bustling with assistants preparing for th',
  region: 'other',
  enter: enter,
};
