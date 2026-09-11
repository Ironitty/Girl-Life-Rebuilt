import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  return;
  scene.build();
}

function enterPornactor(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pfactor ?? 0) !== 50) {
    (s as any).num = ((s as any).pfactor ?? 0);
    // TODO-QSP: :actorloop
    (s as any).akrand = Math.floor(Math.random() * 10) + 1;
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
      ((s as any).aksex ?? {})[String((s as any).akrand ?? 0)] = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    (s as any).num = ((s as any).num ?? 0) - (1);
    if (((s as any).num ?? 0) > 0) {
      // TODO-QSP: jump 'actorloop'
    }
  }
  return;
  scene.build();
}

function enterPornactress(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pfactor ?? 0) !== 50) {
    (s as any).num = ((s as any).pfactor ?? 0);
    // TODO-QSP: :actressloop
    (s as any).akrand = Math.floor(Math.random() * 10) + 1;
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
      ((s as any).aksex ?? {})[String((s as any).akrand ?? 0)] = 1;
      (s as any).girl = ((s as any).girl ?? 0) + (1);
    }
    (s as any).num = ((s as any).num ?? 0) - (1);
    if (((s as any).num ?? 0) > 0) {
      // TODO-QSP: jump 'actressloop'
    }
  }
  return;
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
    qspCall(s, 'arousal', 'titjob', 30, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish him off', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/hjcumontits.mp4');
    // TODO-QSP: dynamic text: You continue squeezing your tits together and milking his cock as he leans back ...
    scene.text('You continue squeezing your tits together and milking his cock as he leans back and starts groaning. You pick up the pace in response, your tits loudly slapping against him as you smile up at him. "Cum for me. Cum all over my big \'+iif(age < 20, \'teen\', \')+\' tits!" you tell him in a teasing tone.');
    scene.text('He soon lets out a loud grunt and you quickly start jerking his dick with your hand before his hot cum starts squirting over your tits. When he finishes, you show your cum covered tits to the camera, playfully teasing your future viewers with a show of you squeezing them together before the shoot ends.');
    // TODO-QSP: dynamic text: As the shoot wraps up, Egor approaches you with a grin. "It must be my lucky day...
    scene.text('As the shoot wraps up, Egor approaches you with a grin. "It must be my lucky day if I was the first to get those tits on camera. I hope I\'m first in line to fuck you too." \'+iif(age < 20, \'He looks you over. "Nothing better than a tight teen pussy squeezing your cock. First Alli and now you. This job just gets better and better."\', \'He looks over. "That pussy is just begging for my dick."\')+\'');
    scene.text('He whistles contently as he walks away, leaving you to go and clean up.');
    qspCall(s, 'cum_call', 'breasts', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'arousal', 'titjob', 5, 'exhibitionism');
    qspCall(s, 'arousal', 'hj', 5, 'exhibitionism');
    qspCall(s, 'arousal', 'end');
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
    qspCall(s, 'arousal', 'hj', 30, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish him off', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/hjcumontits.mp4');
    // TODO-QSP: dynamic text: Egor caresses your tits as you continue to jerk his cock. After a few minutes, h...
    scene.text('Egor caresses your tits as you continue to jerk his cock. After a few minutes, he stops feeling you up, leans back and starts groaning. You pick up the pace in response, jerking his dick as you aim it at your tits. "Yes, cum all over my \'+iif(age < 20, \'teen\', \')+\' tits!" you tell him in a teasing tone.');
    scene.text('He soon lets out a loud grunt, and his hot cum starts squirting over your tits. When he finishes, you show your cum covered tits to the camera, playfully teasing your future viewers with a show of you squeezing them together before the shoot ends.');
    // TODO-QSP: dynamic text: As the shoot wraps up, Egor approaches you with a grin. "It must be my lucky day...
    scene.text('As the shoot wraps up, Egor approaches you with a grin. "It must be my lucky day if I was the first to get on camera with you. I hope I\'m first in line to fuck you too." \'+iif(age < 20, \'He looks you over. "Nothing better than a tight teen pussy squeezing your cock. First Alli and now you. This job just gets better and better."\', \'He looks over. "That pussy is just begging for my dick."\')+\'');
    scene.text('He whistles contently as he walks away, leaving you to go and clean up.');
    qspCall(s, 'cum_call', 'breasts', 'A195', 1);
    qspCall(s, 'arousal', 'hj', 5, 'exhibitionism');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Take a shower', goto: ['pornstudio', 'shower'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  return;
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
  scene.text(`${((s as any).npcdesc ?? 0)} is your co-star for this shoot. He is standing to the side, slowly stroking his dick.`);
  return;
  scene.actions([
    { label: 'Undress and start', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/hj.mp4');
    // TODO-QSP: dynamic text: <<$npcdesc>> sits on the bed as the camera starts rolling. You kneel in front of...
    scene.text(`${((s as any).npcdesc ?? 0)} sits on the bed as the camera starts rolling. You kneel in front of him, take his dick in your hand and start stroking it.`);
    qspCall(s, 'arousal', 'hj', 30, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Blow him', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/bj.mp4');
    scene.text('His cock is now rock-hard as you take it into your mouth and start sucking.');
    qspCall(s, 'arousal', 'bj', 5, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep sucking', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/deep.mp4');
    // TODO-QSP: dynamic text: <<$npcdesc>> grabs your hair in his fists and starts fucking your mouth, driving...
    scene.text(`${((s as any).npcdesc ?? 0)} grabs your hair in his fists and starts fucking your mouth, driving his cock down your throat with every thrust.`);
    scene.text('After a few minutes, he takes his cock out, and you wipe the saliva from your mouth while gasping for air.');
    qspCall(s, 'arousal', 'bj', 5, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Open your mouth', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/locations/city/redlight/studio_porn/sex/cum.mp4');
    // TODO-QSP: dynamic text: <<$npcdesc>> gives you a nod to let you know he's close, so you start quickly je...
    scene.text(`${((s as any).npcdesc ?? 0)} gives you a nod to let you know he's close, so you start quickly jerking him and stick your tongue out for him to shoot his load.`);
    (s as any).cumnostd = 1;
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0), 1, 0, 0, 36);
    qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0), 1, 0, 0, 4);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Clean his cock', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/redlight/studio_porn/sex/bj2.mp4');
    scene.text('You keep your eyes fixed on him as you gently lick every last drop of sperm from his cock before taking it back in your mouth and sucking, causing him to groan loudly.');
    scene.text('You then pop his dick out of your mouth and smile up at him as the shoot ends.');
    qspCall(s, 'arousal', 'end');
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
  scene.text(`${((s as any).npcdesc ?? 0)} is your co-star for this shoot. He is standing to the side, slowly stroking his dick.`);
  return;
  scene.actions([
    { label: 'Undress and start', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/hj.mp4');
    scene.text('The camera starts rolling, and the scene begins with you walking onto the set and giving the camera a teasing striptease and close-up of your naked body.');
    // TODO-QSP: dynamic text: <<$npcdesc>> then walks over and sits on the bed. You kneel before him, take his...
    scene.text(`${((s as any).npcdesc ?? 0)} then walks over and sits on the bed. You kneel before him, take his dick in your hand and start stroking it.`);
    qspCall(s, 'arousal', 'striptease', 5);
    qspCall(s, 'arousal', 'hj', 25, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Blow him', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/bj.mp4');
    scene.text('You take his shaft into your mouth and start passionately sucking his dick while gazing up at him, giving him and the camera a seductive look. As you continue sucking, you reach between your legs and slowly massage your clit.');
    qspCall(s, 'arousal', 'bj', 5, 'exhibitionism');
    qspCall(s, 'arousal', 'clit_finger', 5, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Deepthroat', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/deep.mp4');
    // TODO-QSP: dynamic text: <<$npcdesc>> grabs your hair in his fists. He starts intensely fucking your mout...
    scene.text(`${((s as any).npcdesc ?? 0)} grabs your hair in his fists. He starts intensely fucking your mouth, occasionally withdrawing completely to allow you to catch your breath before returning more vigorously.`);
    qspCall(s, 'arousal', 'bj', 5, 'exhibitionism', 'deepthroat');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Doggystyle', handler: (st: GameState) => {
    qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
    scene.img('images/locations/city/redlight/studio_porn/sex/doggysex.mp4');
    // TODO-QSP: dynamic text: You stand and get on all fours on the edge of the bed. <<$npcdesc>> guides his d...
    scene.text(`You stand and get on all fours on the edge of the bed. ${((s as any).npcdesc ?? 0)} guides his dick into your pussy and begins to fuck you hard from behind.`);
    scene.text('You spend the next few minutes getting fucked in this position before calling for a break. Once you\'re rested, you get back into position and spend quite a bit of time getting fucked in various poses.');
    (s as any).cumnostd = 1;
    qspCall(s, 'cum_call', 'precum', ((s as any).npcID ?? 0), 1, 0, 10000, 1);
    qspCall(s, 'arousal', 'vaginal', 15, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Facial', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).cumnostd = 1;
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0), 1, 0, 0, 36);
    qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0), 1, 0, 0, 4);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/redlight/studio_porn/sex/cum.mp4');
    // TODO-QSP: dynamic text: <<$npcdesc>> pounds you hard in the missionary position, your legs spread high a...
    scene.text(`${((s as any).npcdesc ?? 0)} pounds you hard in the missionary position, your legs spread high and wide as you talk dirty for the camera. You hear him panting loudly and feel him pulling out of you, so you slide off the bed and onto your knees in front of him as he shoots his load across your face with a loud grunt.`);
    scene.actions([
      { label: 'Clean his cock', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'arousal', 'end');
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
  scene.text(`${((s as any).npcdesc ?? 0)} is your co-star for this shoot. He is standing to the side, slowly stroking his dick.`);
  return;
  scene.actions([
    { label: 'Undress and start', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/hj.mp4');
    scene.text('The camera starts rolling and the scene starts with you walking onto the set and giving the camera a very teasing striptease and close up of your naked body.');
    // TODO-QSP: dynamic text: <<$npcdesc>> then walks over and sits on the bed. You kneel before him, take his...
    scene.text(`${((s as any).npcdesc ?? 0)} then walks over and sits on the bed. You kneel before him, take his dick in your hand and start stroking it.`);
    qspCall(s, 'arousal', 'striptease', 5);
    qspCall(s, 'arousal', 'hj', 25, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Blow him', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/bj.mp4');
    scene.text('Admiring the impressive size of the cock before you, you wrap your lips around the shaft and start sucking it as you reach between your legs and start rubbing your clit.');
    qspCall(s, 'arousal', 'bj', 5, 'exhibitionism');
    qspCall(s, 'arousal', 'clit_finger', 5, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck further', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/deep.mp4');
    // TODO-QSP: dynamic text: <<$npcdesc>> relaxes as you take control, trying to take the entire length of hi...
    scene.text(`${((s as any).npcdesc ?? 0)} relaxes as you take control, trying to take the entire length of his cock down your throat.`);
    qspCall(s, 'arousal', 'bj', 5, 'exhibitionism', 'deepthroat');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Ride him', handler: (st: GameState) => {
    qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
    scene.img('images/locations/city/redlight/studio_porn/sex/sex.mp4');
    // TODO-QSP: dynamic text: You straddle <<$npcdesc>> and guide his dick into your pussy. You begin to ride ...
    scene.text(`You straddle ${((s as any).npcdesc ?? 0)} and guide his dick into your pussy. You begin to ride him hard and really get into it. After a few minutes, he lifts you off his dick, throws you on your back and spreads your legs so he can fuck you missionary-style.`);
    // TODO-QSP: dynamic text: After pounding your pussy in various poses, <<$npcdesc>> pulls his cock out of y...
    scene.text(`After pounding your pussy in various poses, ${((s as any).npcdesc ?? 0)} pulls his cock out of you and gets you on all fours, your ass high in the air. You feel him pressing against your anus.`);
    (s as any).cumnostd = 1;
    qspCall(s, 'cum_call', 'precum', ((s as any).npcID ?? 0), 1, 0, 10000, 1);
    qspCall(s, 'arousal', 'vaginal', 5, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Anal', handler: (st: GameState) => {
    qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
    scene.img('images/locations/city/redlight/studio_porn/sex/sex1.mp4');
    // TODO-QSP: dynamic text: You try your best to relax as <<$npcdesc>> pushes into your ass and immediately ...
    scene.text(`You try your best to relax as ${((s as any).npcdesc ?? 0)} pushes into your ass and immediately goes at it like a jackhammer. He pulls out a few times to let you recover, the camera coming in for shots of your stretched hole each time before he plunges his dick back inside you.`);
    qspCall(s, 'arousal', 'anal', 5, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Kneel down and open your mouth', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/redlight/studio_porn/sex/cum.mp4');
    // TODO-QSP: dynamic text: <<$npcdesc>> grabs you by the hips and really starts pounding your ass. Just as ...
    scene.text(`${((s as any).npcdesc ?? 0)} grabs you by the hips and really starts pounding your ass. Just as it's starting to hurt, he pulls out of your ass and you quickly turn and kneel before him. He vigorously jerks his dick, and his cum soon splatters your face and your tongue.`);
    (s as any).cumnostd = 1;
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0), 1, 0, 0, 36);
    qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0), 1, 0, 0, 4);
    scene.actions([
      { label: 'Clean his cock', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/redlight/studio_porn/sex/bj2.mp4');
    scene.text('You look deep into his eyes as you lick and suck his cock clean before he steps aside to let the camera come in for a shot of you.');
    scene.text('You look up at the camera and smile, playfully showing off your cum coated face before the shoot ends.');
    qspCall(s, 'arousal', 'end');
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
  ((s as any).stat ?? {})['gangbang_count'] = (((s as any).stat ?? {})['gangbang_count'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  // TODO-QSP: gs 'npcStat', $pactorID[1]
  // TODO-QSP: gs 'npcStat', $pactorID[2], 'a'
  scene.text('The set is already bustling with assistants preparing for the shoot.');
  // TODO-QSP: dynamic text: Your co-stars for this shoot are <<$npcdesc>> and <<$npcdesc1>>. They watch porn...
  scene.text(`Your co-stars for this shoot are ${((s as any).npcdesc ?? 0)} and ${((s as any).npcdesc1 ?? 0)}. They watch porn on a monitor, getting their cocks ready for you.`);
  return;
  scene.actions([
    { label: 'Undress and kneel', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/tbj.mp4');
    // TODO-QSP: dynamic text: You get into position kneeling before <<$npcdesc>> and <<$npcdesc1>>. When the c...
    scene.text(`You get into position kneeling before ${((s as any).npcdesc ?? 0)} and ${((s as any).npcdesc1 ?? 0)}. When the camera starts rolling, they slap their fully erect cocks against your face.`);
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID ?? 0), 'exhibitionism', 'group');
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID1 ?? 0), 'exhibitionism', 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck them', handler: (st: GameState) => {
    (s as any).pornbj = ((s as any).pornbj ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/redlight/studio_porn/sex/tbj2.mp4');
    scene.text('You then start sucking the two dicks in front of you, jerking the other with your hand. The two men moan loudly in pleasure and encourage you to take them deeper.');
    qspCall(s, 'arousal', 'bj', 8, ((s as any).npcID ?? 0), 'exhibitionism');
    qspCall(s, 'arousal', 'bj', 7, ((s as any).npcID1 ?? 0), 'exhibitionism');
    qspCall(s, 'arousal', 'hj', (-7), ((s as any).npcID ?? 0), 'exhibitionism');
    qspCall(s, 'arousal', 'hj', (-8), ((s as any).npcID1 ?? 0), 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Spitroast', handler: (st: GameState) => {
    qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
    (s as any).pornvag = ((s as any).pornvag ?? 0) + (1);
    scene.img('images/locations/city/redlight/studio_porn/sex/three.mp4');
    // TODO-QSP: dynamic text: The men get you on all fours, and <<$npcdesc>> slides his dick into your pussy. ...
    scene.text(`The men get you on all fours, and ${((s as any).npcdesc ?? 0)} slides his dick into your pussy. At the same time, you continue to suck ${((s as any).npcdesc1 ?? 0)}'s dick.`);
    scene.text('The two men spend the next few minutes repositioning you and taking turns fucking your pussy.');
    (s as any).cumnostd = 1;
    qspCall(s, 'cum_call', 'precum', ((s as any).npcID ?? 0), 1, 0, 10000, 1);
    qspCall(s, 'arousal', 'bj', (-15), ((s as any).npcID1 ?? 0), 'exhibitionism');
    qspCall(s, 'arousal', 'vaginal', 15, ((s as any).npcID ?? 0), 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Anal', handler: (st: GameState) => {
    qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
    (s as any).pornanal = ((s as any).pornanal ?? 0) + (1);
    scene.img('images/locations/city/redlight/studio_porn/sex/threea.mp4');
    // TODO-QSP: dynamic text: <<$npcdesc>> takes his cock out of your pussy and plunges it into your ass. The ...
    scene.text(`${((s as any).npcdesc ?? 0)} takes his cock out of your pussy and plunges it into your ass. The extra tightness quickly overwhelms him. After a few minutes in your ass, you feel him unloading inside you with a loud grunt.`);
    // TODO-QSP: dynamic text: You keep sucking <<$npcdesc1>>, who sounds like he is also close to climax.
    scene.text(`You keep sucking ${((s as any).npcdesc1 ?? 0)}, who sounds like he is also close to climax.`);
    (s as any).cumnostd = 1;
    qspCall(s, 'cum_call', 'anus', ((s as any).npcID ?? 0), 1, 0, 0, 40);
    qspCall(s, 'arousal', 'bj', (-15), ((s as any).npcID1 ?? 0), 'exhibitionism');
    qspCall(s, 'arousal', 'anal', 15, ((s as any).npcID ?? 0), 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Facial', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pornswall = ((s as any).pornswall ?? 0) + (1);
    scene.img('images/locations/city/redlight/studio_porn/sex/tcum.mp4');
    // TODO-QSP: dynamic text: You're about to move around to clean up <<$npcdesc>> when <<$npcdesc1>> grabs yo...
    scene.text(`You're about to move around to clean up ${((s as any).npcdesc ?? 0)} when ${((s as any).npcdesc1 ?? 0)} grabs your head and shoots his load across your face. The two men say the most depraved things as cum slowly trickles down your face and out of your asshole.`);
    scene.text('However, the director seems pleased and calls an end to the shoot.');
    (s as any).cumnostd = 1;
    qspCall(s, 'cum_call', 'mouth', ((s as any).npcID1 ?? 0), 1, 0, 0, 40);
    qspCall(s, 'arousal', 'end');
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
  ((s as any).stat ?? {})['gangbang_count'] = (((s as any).stat ?? {})['gangbang_count'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  // TODO-QSP: gs 'npcStat', $pactorID[1]
  // TODO-QSP: gs 'npcStat', $pactorID[2], 'a'
  scene.text('The set is already bustling with assistants preparing for the shoot.');
  // TODO-QSP: dynamic text: <<$npcdesc>> and <<$npcdesc1>> are your co-stars for this shoot. They watch porn...
  scene.text(`${((s as any).npcdesc ?? 0)} and ${((s as any).npcdesc1 ?? 0)} are your co-stars for this shoot. They watch porn on a monitor, getting their cocks ready for you.`);
  return;
  scene.actions([
    { label: 'Undress and start', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 8;
    scene.img('images/locations/city/redlight/studio_porn/sex/tbj.mp4');
    // TODO-QSP: dynamic text: You get into position kneeling before <<$npcdesc>> and <<$npcdesc1>>. When the c...
    scene.text(`You get into position kneeling before ${((s as any).npcdesc ?? 0)} and ${((s as any).npcdesc1 ?? 0)}. When the camera starts rolling, they slap their fully erect cocks against your face.`);
    qspCall(s, 'arousal', 'bj', 2, ((s as any).npcID ?? 0), 'exhibitionism', 'group');
    qspCall(s, 'arousal', 'bj', (-2), ((s as any).npcID1 ?? 0), 'exhibitionism', 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck them', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/tbj2.mp4');
    scene.text('You take turns sucking one dick while jerking the other with your hand.');
    qspCall(s, 'arousal', 'bj', 8, ((s as any).npcID ?? 0), 'exhibitionism', 'group');
    qspCall(s, 'arousal', 'bj', 7, ((s as any).npcID1 ?? 0), 'exhibitionism', 'group');
    qspCall(s, 'arousal', 'hj', (-7), ((s as any).npcID ?? 0), 'exhibitionism', 'group');
    qspCall(s, 'arousal', 'hj', (-8), ((s as any).npcID1 ?? 0), 'exhibitionism', 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Fuck them', handler: (st: GameState) => {
    qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
    scene.img('images/locations/city/redlight/studio_porn/sex/three.mp4');
    // TODO-QSP: dynamic text: You get on all fours and <<$npcdesc>> fucks you from behind while you suck <<$np...
    scene.text(`You get on all fours and ${((s as any).npcdesc ?? 0)} fucks you from behind while you suck ${((s as any).npcdesc1 ?? 0)}'s dick.`);
    scene.text('You spend the next few minutes getting fucked in various poses by the two men, who take turns fucking your pussy.');
    (s as any).cumnostd = 1;
    qspCall(s, 'cum_call', 'precum', ((s as any).npcID ?? 0), 1, 0, 10000, 1);
    qspCall(s, 'stat', '');
    qspCall(s, 'arousal', 'bj', (-15), ((s as any).npcID1 ?? 0), 'exhibitionism', 'group');
    qspCall(s, 'arousal', 'vaginal', 15, ((s as any).npcID ?? 0), 'exhibitionism', 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Anal', handler: (st: GameState) => {
    qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
    scene.img('images/locations/city/redlight/studio_porn/sex/threea.mp4');
    // TODO-QSP: dynamic text: <<$npcdesc>> switches it up and sticks his cock into your ass while you keep suc...
    scene.text(`${((s as any).npcdesc ?? 0)} switches it up and sticks his cock into your ass while you keep sucking ${((s as any).npcdesc1 ?? 0)}.`);
    // TODO-QSP: dynamic text: <<$npcdesc>> is really getting into it and is vigorously pounding your asshole.
    scene.text(`${((s as any).npcdesc ?? 0)} is really getting into it and is vigorously pounding your asshole.`);
    qspCall(s, 'arousal', 'bj', (-15), ((s as any).npcID1 ?? 0), 'exhibitionism', 'group');
    qspCall(s, 'arousal', 'anal', 15, ((s as any).npcID ?? 0), 'exhibitionism', 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Double penetration', handler: (st: GameState) => {
    qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
    qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
    scene.img('images/locations/city/redlight/studio_porn/sex/three2.mp4');
    // TODO-QSP: dynamic text: <<$npcdesc>> takes his dick out of your ass and lies down. Then, knowing <<$npcd...
    scene.text(`${((s as any).npcdesc ?? 0)} takes his dick out of your ass and lies down. Then, knowing ${((s as any).npcdesc ?? 0)} wants more, you straddle his cock.`);
    // TODO-QSP: dynamic text: You feel his cock fill your pussy while <<$npcdesc1>> moves in behind you and pu...
    scene.text(`You feel his cock fill your pussy while ${((s as any).npcdesc1 ?? 0)} moves in behind you and pushes his dick into your ass.`);
    scene.text('The guys find a rhythm and grind away at your holes as you moan loudly.');
    qspCall(s, 'arousal', 'anal', (-15), ((s as any).npcID1 ?? 0), 'exhibitionism', 'group');
    qspCall(s, 'arousal', 'vaginal', 15, ((s as any).npcID ?? 0), 'exhibitionism', 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish them', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/locations/city/redlight/studio_porn/sex/tcum.mp4');
    // TODO-QSP: dynamic text: The guys tell you they're close and both pull out. You grab <<$npcdesc>>'s dick ...
    scene.text(`The guys tell you they're close and both pull out. You grab ${((s as any).npcdesc ?? 0)}'s dick and start sucking it.`);
    // TODO-QSP: dynamic text: As you suck his dick, your head is suddenly grabbed and you're turned around. <<...
    scene.text(`As you suck his dick, your head is suddenly grabbed and you're turned around. ${((s as any).npcdesc1 ?? 0)} shoots his load across your face and into your mouth, ${((s as any).npcdesc ?? 0)} following him close behind.`);
    scene.text('The two men step aside to let the camera get a shot of you. You look up at the camera and smile, swallowing the cum in your mouth and finishing with a close-up of your cum splattered face.');
    (s as any).cumnostd = 1;
    qspCall(s, 'cum_call', 'mouth', ((s as any).npcID ?? 0), 1, 0, 0, 10);
    qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0), 1, 0, 0, 30);
    (s as any).cumnostd = 1;
    qspCall(s, 'cum_call', 'mouth', ((s as any).npcID1 ?? 0), 1, 0, 0, 10);
    qspCall(s, 'cum_call', 'face', ((s as any).npcID1 ?? 0), 1, 0, 0, 30);
    qspCall(s, 'arousal', 'end');
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
  qspCall(s, 'stat', '');
  // TODO-QSP: gs 'npcStat', $pactorID[1]
  scene.text('The set is already bustling with assistants preparing for the shoot.');
  // TODO-QSP: dynamic text: Your co-star for this shoot is <<$npcdesc>>. He is standing to the side, slowly ...
  scene.text(`Your co-star for this shoot is ${((s as any).npcdesc ?? 0)}. He is standing to the side, slowly stroking his dick.`);
  return;
  scene.actions([
    { label: 'Undress and start', handler: (st: GameState) => {
    (s as any).pornbj = ((s as any).pornbj ?? 0) + (1);
    scene.img('images/locations/city/redlight/studio_porn/sex/bj.mp4');
    // TODO-QSP: dynamic text: You start by teasing the camera. You play with your tits and show off your pussy...
    scene.text(`You start by teasing the camera. You play with your tits and show off your pussy before ${((s as any).npcdesc ?? 0)} walks up. You kneel between his legs, take his shaft into your mouth and start passionately sucking his dick.`);
    qspCall(s, 'arousal', 'bj', 30, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep sucking', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/deep.mp4');
    // TODO-QSP: dynamic text: <<$npcdesc>> grabs your hair in his fists and starts fucking your mouth, driving...
    scene.text(`${((s as any).npcdesc ?? 0)} grabs your hair in his fists and starts fucking your mouth, driving his cock down your throat with every thrust.`);
    scene.text('After a few minutes, he takes his cock out, and you wipe the saliva from your mouth.');
    qspCall(s, 'arousal', 'bj', 15, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get fucked', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/redlight/studio_porn/sex/pronebone.mp4');
    // TODO-QSP: dynamic text: <<$npcdesc>> grabs your hips, throws you on the couch and climbs on top of you. ...
    scene.text(`${((s as any).npcdesc ?? 0)} grabs your hips, throws you on the couch and climbs on top of you. You feel him slide into your pussy, and he begins to fuck you hard.`);
    scene.text('You spend the next few minutes getting fucked by him in various positions.');
    qspCall(s, 'arousal', 'vaginal', 15, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (s as any).cumnostd = 1;
    qspCall(s, 'cum_call', '', '', ((s as any).npcID ?? 0), 1, 0, 10000, 40);
    qspCall(s, 'stat', '');
    scene.img(`images/locations/city/redlight/studio_porn/sex/porncp${Math.floor(Math.random() * 3) + 1}.mp4`);
    // TODO-QSP: dynamic text: You're really getting into it and your pussy tightens around <<$npcdesc>>, which...
    scene.text(`You're really getting into it and your pussy tightens around ${((s as any).npcdesc ?? 0)}, which sends him over the edge. You soon feel yourself being filled with a considerable amount of cum.`);
    // TODO-QSP: dynamic text: He climbs off you, but you stay on the couch while the camera comes forward to f...
    scene.text(`He climbs off you, but you stay on the couch while the camera comes forward to film your pussy as you squeeze ${((s as any).npcdesc ?? 0)}'s load out. Finally, after a few minutes, the director nods and you get up.`);
    qspCall(s, 'arousal', 'vaginal', 5, 'exhibitionism');
    qspCall(s, 'arousal', 'end');
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
  ((s as any).stat ?? {})['gangbang_count'] = (((s as any).stat ?? {})['gangbang_count'] ?? 0) + (1);
  (s as any).porngang = ((s as any).porngang ?? 0) + (1);
  qspCall(s, 'stat', '');
  // TODO-QSP: gs 'npcStat', $pactorID[1]
  // TODO-QSP: gs 'npcStat', $pactorID[2], 'a'
  scene.text('The set is already bustling with assistants preparing for the shoot.');
  // TODO-QSP: dynamic text: <<$npcdesc>> and <<$npcdesc1>> are your co-stars for this shoot. They watch porn...
  scene.text(`${((s as any).npcdesc ?? 0)} and ${((s as any).npcdesc1 ?? 0)} are your co-stars for this shoot. They watch porn on a monitor, getting their cocks ready for you.`);
  scene.actions([
    { label: 'Undress and kneel', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/tbj.mp4');
    // TODO-QSP: dynamic text: You get into position kneeling before <<$npcdesc>> and <<$npcdesc1>>. When the c...
    scene.text(`You get into position kneeling before ${((s as any).npcdesc ?? 0)} and ${((s as any).npcdesc1 ?? 0)}. When the camera starts rolling, they slap their fully erect cocks against your face.`);
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID ?? 0), 'exhibitionism', 'group');
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID1 ?? 0), 'exhibitionism', 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck them', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/tbj2.mp4');
    scene.text('You take turns sucking one dick while jerking the other with your hand. The two men moan loudly in pleasure and encourage you to take them deeper.');
    qspCall(s, 'arousal', 'bj', 8, ((s as any).npcID ?? 0), 'exhibitionism', 'group');
    qspCall(s, 'arousal', 'bj', 7, ((s as any).npcID1 ?? 0), 'exhibitionism', 'group');
    qspCall(s, 'arousal', 'hj', (-7), ((s as any).npcID ?? 0), 'exhibitionism', 'group');
    qspCall(s, 'arousal', 'hj', (-8), ((s as any).npcID1 ?? 0), 'exhibitionism', 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Fuck them', handler: (st: GameState) => {
    qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
    qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
    scene.img(`images/locations/city/redlight/studio_porn/sex/threesomedp${Math.floor(Math.random() * 5) + 1}.mp4`);
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      // TODO-QSP: dynamic text: <<$npcdesc>> lays on the bed, and you climb on top of him, sliding his cock into...
      scene.text(`${((s as any).npcdesc ?? 0)} lays on the bed, and you climb on top of him, sliding his cock into your pussy and waiting until ${((s as any).npcdesc1 ?? 0)} pushes into your ass. ${((s as any).npcdesc1 ?? 0)} starts enthusiastically fucking your ass, making you ride ${((s as any).npcdesc ?? 0)}'s dick. They fuck you like this for a while before spending time repositioning you into various poses and fucking both your holes. Finally, after getting fucked in multiple positions, the director signals to the guys that they should cum inside you.`);
      qspCall(s, 'arousal', 'anal', (-25), ((s as any).npcID1 ?? 0), 'exhibitionism', 'group');
      qspCall(s, 'arousal', 'vaginal', 25, ((s as any).npcID ?? 0), 'exhibitionism', 'group');
      (s as any).cumnostd = 1;
      qspCall(s, 'cum_call', '', '', ((s as any).npcID ?? 0), 1, 0, 10000, 40);
      qspCall(s, 'cum_call', 'anus', ((s as any).npcID1 ?? 0), 1, 0, 0, 40);
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc1>> lays on the bed, and you climb on top of him, sliding his cock int...
      scene.text(`${((s as any).npcdesc1 ?? 0)} lays on the bed, and you climb on top of him, sliding his cock into your pussy and waiting until ${((s as any).npcdesc ?? 0)} pushes into your ass. ${((s as any).npcdesc ?? 0)} starts enthusiastically fucking your ass, making you ride ${((s as any).npcdesc1 ?? 0)}'s dick. They fuck you like this for a while before spending time repositioning you into various poses and fucking both your holes. Finally, after getting fucked in multiple positions, the director signals to the guys that they should cum inside you.`);
      qspCall(s, 'arousal', 'anal', (-25), ((s as any).npcID ?? 0), 'exhibitionism', 'group');
      qspCall(s, 'arousal', 'vaginal', 25, ((s as any).npcID1 ?? 0), 'exhibitionism', 'group');
      (s as any).cumnostd = 1;
      qspCall(s, 'cum_call', '', '', ((s as any).npcID1 ?? 0), 1, 0, 10000, 40);
      qspCall(s, 'cum_call', 'anus', ((s as any).npcID ?? 0), 1, 0, 0, 40);
    }
    qspCall(s, 'stat', '');
    scene.text('The guys start to fuck you even faster in response, and you soon feel them twitching inside you.');
    if (((s as any).orgasm_buildup ?? 0) < 200 - ((s as any).pcs_inhib ?? 0)) {
      scene.actions([
        { label: 'Fake orgasm', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/porgasm.mp4');
    scene.text('You fake a screaming orgasm and talk dirty to the guys as they unload inside you. Once they\'re finished, they pull out and you lie on the bed with your legs spread so the camera can get a close-up of your pussy and ass as their cum trickles out of you. After a few seconds, the director nods and you get up.');
    qspCall(s, 'arousal', 'vaginal', 2, ((s as any).npcID ?? 0), 'exhibitionism');
    qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID1 ?? 0), 'exhibitionism');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Take a shower', goto: ['pornstudio', 'shower'] },
    ]);
  } },
      ]);
    } else {
      (s as any).will_cost = 0;
      if (((s as any).orgasm_buildup ?? 0) < 300 - ((s as any).pcs_inhib ?? 0)) {
        qspCall(s, 'willpower', 'exhib', 'self', 'hard');
      }
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Block out everything but the pleasure and let yourself orgasm [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        // TODO-QSP: act iif(orgasm_buildup < 300 - pcs_inhib, 'Block out everything but the pleasure and let yourself or...
        if (((s as any).orgasm_buildup ?? 0) < 300 - ((s as any).pcs_inhib ?? 0)) {
          qspCall(s, 'willpower', 'pay', 'self');
        }
        (s as any).porngasm = ((s as any).porngasm ?? 0) + (1);
        (s as any).orgasmbonus = ((s as any).orgasmbonus ?? 0) + (10);
        scene.img('images/locations/city/redlight/studio_porn/sex/porgasm.mp4');
        scene.text('You have a very real and very explosive orgasm. Your legs buckle and you almost collapse on the guy beneath you as they both unload inside you. Once they\'re finished, they pull out and you lie on the bed with your legs spread so the camera can get a close-up of your pussy and ass as their cum trickles out of you. After a few seconds, the director nods and you get up.');
        qspCall(s, 'arousal', 'vaginal', 2, ((s as any).npcID ?? 0), 'exhibitionism');
        qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID1 ?? 0), 'exhibitionism');
        qspCall(s, 'arousal', 'end');
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
