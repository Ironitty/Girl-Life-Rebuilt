import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterSelect(s: GameState, scene: SceneBuilder): void {
  (s as any).temp = Math.floor(Math.random() * 3) + 0;
  if ((!((s as any).temp ?? 0))) {
    if (((s as any).fame ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_kickboxing'] >= (Math.floor(Math.random() * 501) + 500)) {
      if (!(s as any).fame) (s as any).fame = {}; (s as any).fame['activity'] = 'kickboxing';
      if (!(s as any).fame) (s as any).fame = {}; (s as any).fame['noun'] = 'kickboxer';
      // TODO-QSP: gt 'fame_events', 'boy', $ARGS[1]
    }
  } else {
    if (((s as any).temp ?? 0) === 1) {
      if (((s as any).fame ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_running'] >= (Math.floor(Math.random() * 501) + 500)) {
        if (!(s as any).fame) (s as any).fame = {}; (s as any).fame['activity'] = 'running';
        if (!(s as any).fame) (s as any).fame = {}; (s as any).fame['noun'] = 'runner';
        // TODO-QSP: gt 'fame_events', 'boy', $ARGS[1]
      }
    } else {
      if (((s as any).temp ?? 0) === 2) {
        if (((s as any).fame ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_music'] >= (Math.floor(Math.random() * 501) + 500)) {
          if (!(s as any).fame) (s as any).fame = {}; (s as any).fame['activity'] = 'singing';
          if (!(s as any).fame) (s as any).fame = {}; (s as any).fame['noun'] = 'singer';
          // TODO-QSP: gt 'fame_events', 'boy', $ARGS[1]
        }
      } else {
        if (((s as any).temp ?? 0) === 3) {
          if (((s as any).fame ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_kickboxing'] >= (Math.floor(Math.random() * 501) + 500)) {
            if (!(s as any).fame) (s as any).fame = {}; (s as any).fame['activity'] = 'kickboxing';
            if (!(s as any).fame) (s as any).fame = {}; (s as any).fame['noun'] = 'kickboxer';
            // TODO-QSP: gt 'fame_events', 'girl', $ARGS[1]
          }
        } else {
          if (((s as any).temp ?? 0) === 4) {
            if (((s as any).fame ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_running'] >= (Math.floor(Math.random() * 501) + 500)) {
              if (!(s as any).fame) (s as any).fame = {}; (s as any).fame['activity'] = 'running';
              if (!(s as any).fame) (s as any).fame = {}; (s as any).fame['noun'] = 'runner';
              // TODO-QSP: gt 'fame_events', 'girl', $ARGS[1]
            }
          } else {
            if (((s as any).temp ?? 0) === 5) {
              if (((s as any).fame ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_music'] >= (Math.floor(Math.random() * 501) + 500)) {
                if (!(s as any).fame) (s as any).fame = {}; (s as any).fame['activity'] = 'singing';
                if (!(s as any).fame) (s as any).fame = {}; (s as any).fame['noun'] = 'singer';
                // TODO-QSP: gt 'fame_events', 'girl', $ARGS[1]
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

function enterBoy(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).fame) (s as any).fame = {}; (s as any).fame['event_day'] = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/fame/boyapproaching1.jpg');
  if (((s as any).stat_visible_cum ?? 0) === 1) {
    // TODO-QSP: dynamic text: "Excuse me! <<$pcs_firstname>> <<$pcs_lastname>>?" you hear from behind you. Tur...
    scene.text(`"Excuse me! ${((s as any).pcs_firstname || '')} ${((s as any).pcs_lastname || '')}?" you hear from behind you. Turning around, you see an excited boy few years younger than yourself coming towards you. "${((s as any).pcs_firstname || '')} ${((s as any).pcs_lastname || '')}! The ${((s as any).fame ?? 0)?.['noun'] ?? ''}? It is you, isn't it! You're so… uhh…" his voice falters as he notices the cum on you. He then gathers his courage and continues "so… uhh… cool!"`);
  } else {
    if (((s as any).PCloThinness ?? 0) === 6  &&  (((s as any).braworntype ?? 0) === 'salacious'  ||  ((s as any).braworntype ?? 0) === 'none')) {
      // TODO-QSP: dynamic text: "Excuse me! <<$pcs_firstname>> <<$pcs_lastname>>?" you hear from behind you. Tur...
      scene.text(`"Excuse me! ${((s as any).pcs_firstname || '')} ${((s as any).pcs_lastname || '')}?" you hear from behind you. Turning around, you see an excited boy few years younger than yourself coming towards you. "${((s as any).pcs_firstname || '')} ${((s as any).pcs_lastname || '')}! The ${((s as any).fame ?? 0)?.['noun'] ?? ''}? It is you, isn't it! You're so… uhh…" He trails off when he realizes that he can practically see straight through your top to your your breasts. His cheeks flush and he gulps heavily before managing to continue on in a stammer. "Uhh… great at, uh, ${((s as any).fame ?? 0)?.['activity'] ?? ''}…"`);
      scene.text('He smiles genuinely, but hesitantly and you can tell he\'s having a really hard time maintaining eye contact with you now. In fact, he\'s failing quite frequently.');
    } else {
      if (((s as any).PCloThinness ?? 0) === 5  &&  (((s as any).braworntype ?? 0) === 'salacious'  ||  ((s as any).braworntype ?? 0) === 'none')) {
        // TODO-QSP: dynamic text: "Excuse me! <<$pcs_firstname>> <<$pcs_lastname>>?" you hear from behind you. Tur...
        scene.text(`"Excuse me! ${((s as any).pcs_firstname || '')} ${((s as any).pcs_lastname || '')}?" you hear from behind you. Turning around, you see an excited boy few years younger than yourself coming towards you. "${((s as any).pcs_firstname || '')} ${((s as any).pcs_lastname || '')}! The ${((s as any).fame ?? 0)?.['noun'] ?? ''}? It is you, isn't it! You're so…" He trails off for a brief moment and you see his eyes flicker downward for a moment before snapping back up. It was just a small twitch, but you suddenly feel very aware of how thin your top is and how certain things might be "poking" out.`);
        scene.text('"Sorry," he stammers on, clearly embarrassed that you noticed his glance. "I just wanted to say that you\'re so cool!"');
      } else {
        if (((s as any).PCloThinness ?? 0) === 6) {
          // TODO-QSP: dynamic text: "Excuse me! <<$pcs_firstname>> <<$pcs_lastname>>?" you hear from behind you. Tur...
          scene.text(`"Excuse me! ${((s as any).pcs_firstname || '')} ${((s as any).pcs_lastname || '')}?" you hear from behind you. Turning around, you see an excited boy few years younger than yourself coming towards you. "${((s as any).pcs_firstname || '')} ${((s as any).pcs_lastname || '')}! The ${((s as any).fame ?? 0)?.['noun'] ?? ''}? It is you, isn't it! You're so cool!"`);
          scene.text('He grins widely though it falters for a moment when his eyes grow wide, staring at your lewd outfit.');
        } else {
          // TODO-QSP: dynamic text: "Excuse me! <<$pcs_firstname>> <<$pcs_lastname>>?" you hear from behind you. Tur...
          scene.text(`"Excuse me! ${((s as any).pcs_firstname || '')} ${((s as any).pcs_lastname || '')}?" you hear from behind you. Turning around, you see an excited boy few years younger than yourself coming towards you. "${((s as any).pcs_firstname || '')} ${((s as any).pcs_lastname || '')}! The ${((s as any).fame ?? 0)?.['noun'] ?? ''}? It is you, isn't it! You're so cool!"`);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Thank you!', handler: (st: GameState) => {
    scene.img('images/locations/shared/fame/boyapproaching1.jpg');
    scene.text('"Wow, thank you!" you smile back. "It\'s always nice to meet a fan!"');
    if (((s as any).fame ?? 0)?.['activity'] === 'kickboxing') {
      scene.text('"I try to watch all you matches, you are best kickboxer in the city. I am sure you will beat all your opponents!"');
    } else {
      if (((s as any).fame ?? 0)?.['activity'] === 'running') {
        if (((s as any).runnerQW ?? 0)?.['champ_gold'] > 0) {
          scene.text('"I try to watch all you races, you are best runner in the city. I am sure you will also win the next championship!"');
        } else {
          scene.text('"I try to watch all you races, you are best runner in the city. I am sure you will become the next champion in no time!"');
        }
      } else {
        if (((s as any).fame ?? 0)?.['activity'] === 'singing') {
          scene.text('"I listen to you all the time, and have saved all your performances. You make the best music!"');
        }
      }
    }
    scene.text('"That\'s so kind of you! I really appreciate your support."');
    scene.text('"Can I get a selfie with you?" he asks holding up his phone.');
    scene.actions([
      { label: 'Of course!', handler: (st: GameState) => {
    qspCall(s, 'mood', 'raise', 'medium');
    (s as any).minut = ((s as any).minut ?? 0) + 6;
    if (((s as any).fame ?? 0)?.['activity'] === 'singing') {
      qspCall(s, 'fame', '', ((s as any).locArgs?.[1] ?? 0), 'music', 'medium');
    } else {
      qspCall(s, 'fame', '', ((s as any).locArgs?.[1] ?? 0), '' + qspUntranslated(s, "fame['activity']>", { location: "fame_events" }) + '', 'medium');
    }
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/fame/boyselfie1.jpg');
    scene.text('"Of course!" you say, scooching over towards him.');
    if (((s as any).stat_visible_cum ?? 0) === 1) {
      qspCall(s, 'fame', '', ((s as any).locArgs?.[1] ?? 0), 'sex', 'small');
      scene.text('You sidle up to him and give a big smile into his camera phone. It\'s only when you see yourself reflected in the viewfinder that you think maybe this isn\'t such a great idea. You can clearly see the cum from your last sexual encounter on you. If this kind of thing gets posted on social media, what will people think? Before you can come up with an excuse to back out, the phone makes an artificial shuttering sound and the picture is taken.');
    } else {
      if (((s as any).PCloThinness ?? 0) === 6  &&  (((s as any).braworntype ?? 0) === 'salacious'  ||  ((s as any).braworntype ?? 0) === 'none')) {
        qspCall(s, 'fame', '', ((s as any).locArgs?.[1] ?? 0), 'sex', 'small');
        scene.text('You sidle up to him and give a big smile into his camera phone. It\'s only when you see yourself reflected in the viewfinder that you think maybe this isn\'t such a great idea. Your breasts are <i>fully</i> visible, nipples and everything. If this kind of thing gets posted on social media, what will people think? Before you can come up with an excuse to back out, the phone makes an artificial shuttering sound and the picture is taken.');
      } else {
        if (((s as any).PCloThinness ?? 0) === 5  &&  (((s as any).braworntype ?? 0) === 'salacious'  ||  ((s as any).braworntype ?? 0) === 'none')) {
          qspCall(s, 'fame', '', ((s as any).locArgs?.[1] ?? 0), 'sex', 'tiny');
          scene.text('You sidle up to him, giving a big smile into his camera phone. After a few moments, the boy manages to thumb the button and an artificial shuttering sound goes off. He immediately pulls it up for review and you take a look at it with him. It\'s a cute picture, the two of you together, though you notice just now that you can totally see your nipples are poking through your top and it\'s totally visible. Oh well, that\'s hardly the worst thing someone\'s seen of a female celebrity on the internet. But he clearly doesn\'t mind.');
        } else {
          if (((s as any).PCloThinness ?? 0) === 6) {
            qspCall(s, 'fame', '', ((s as any).locArgs?.[1] ?? 0), 'sex', Math.floor(Math.random() * 2) + 0);
            scene.text('You sidle up to him, giving a big smile into his camera phone. After a few moments, the boy manages to thumb the button and an artificial shuttering sound goes off. He immediately pulls it up for review and you take a look at it with him. It\'s a cute picture, the two of you together, though you realize just a bit too late that maybe you shouldn\'t have done a fan photo in an exhibitionist outfit like this… But he clearly doesn\'t mind.');
          } else {
            scene.text('You sidle up to him, giving a big smile into his camera phone. After a few moments, the boy manages to thumb the button and an artificial shuttering sound goes off. He immediately pulls it up for review and you take a look at it with him. It\'s a cute picture, the two of you together and he giggles excitedly just looking at it.');
          }
        }
      }
    }
    // TODO-QSP: dynamic text: "Thank you! Thank you! Thank you so much!" he says elatedly. "You are the best! ...
    scene.text(`"Thank you! Thank you! Thank you so much!" he says elatedly. "You are the best! I will be cheering for you whenever you are ${((s as any).fame ?? 0)?.['activity'] ?? ''}" looking like he's just gotten his greatest wish fulfilled as you happily go on with your day. It seems all your hard work is finally starting to pay off.`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      { label: 'Sorry, I\'m in a hurry', handler: (st: GameState) => {
    if (((s as any).fame ?? 0)?.['activity'] === 'singing') {
      qspCall(s, 'fame', '', ((s as any).locArgs?.[1] ?? 0), 'music', (-50));
    } else {
      qspCall(s, 'fame', '', ((s as any).locArgs?.[1] ?? 0), '' + qspUntranslated(s, "fame['activity']>", { location: "fame_events" }) + '', (-50));
    }
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/fame/boyrejection1.jpg');
    scene.text('"Sorry, I\'m in a big hurry. No time. It was nice meeting you though!" You turn around to leave as a look of horror crosses his face, like this moment will haunt his dreams.');
    scene.text('"Wait! But-!" You don\'t wait for him and walk off, not listening to another word.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Lie and say that he has mistaken your identity', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/fame/boyrejection1.jpg');
    // TODO-QSP: dynamic text: "I'm not <<$pcs_firstname>> <<$pcs_lastname>>" you lie. "But, you look just like...
    scene.text(`"I'm not ${((s as any).pcs_firstname || '')} ${((s as any).pcs_lastname || '')}" you lie. "But, you look just like her?" he says confused.`);
    scene.text('"But I\'m not her. You\'ve mistaken me for someone else," you say as you turn around leaving the very puzzled looking boy.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterGirl(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).fame) (s as any).fame = {}; (s as any).fame['event_day'] = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  if (((s as any).stat_visible_cum ?? 0) === 1) {
    // TODO-QSP: dynamic text: "Excuse me! <<$pcs_firstname>> <<$pcs_lastname>>?" you hear from behind you. Tur...
    scene.text(`"Excuse me! ${((s as any).pcs_firstname || '')} ${((s as any).pcs_lastname || '')}?" you hear from behind you. Turning around, you see an excited girl few years younger than yourself coming towards you. "${((s as any).pcs_firstname || '')} ${((s as any).pcs_lastname || '')}! The ${((s as any).fame ?? 0)?.['noun'] ?? ''}? It is you, isn't it! You're so… uhh…" her voice falters as she notices the cum on you. She then gathers her courage and continues "so… uhh… cool…"`);
  } else {
    if (((s as any).PCloThinness ?? 0) === 6  &&  (((s as any).braworntype ?? 0) === 'salacious'  ||  ((s as any).braworntype ?? 0) === 'none')) {
      // TODO-QSP: dynamic text: "Excuse me! <<$pcs_firstname>> <<$pcs_lastname>>?" you hear from behind you. Tur...
      scene.text(`"Excuse me! ${((s as any).pcs_firstname || '')} ${((s as any).pcs_lastname || '')}?" you hear from behind you. Turning around, you see an excited girl few years younger than yourself coming towards you. "${((s as any).pcs_firstname || '')} ${((s as any).pcs_lastname || '')}! The ${((s as any).fame ?? 0)?.['noun'] ?? ''}? It is you, isn't it! You're so… uhh…" She trails off when she realizes that she can practically see straight through your top. Her cheeks flush and she gulps heavily before managing to continue on in a stammer. "Uhh… great at, uh, ${((s as any).fame ?? 0)?.['activity'] ?? ''}…"`);
      scene.text('Her blush deepens even more, very pointedly staring at your face, seemingly trying to pretend she doesn\'t notice your breasts fully on display in front of her face.');
    } else {
      if (((s as any).PCloThinness ?? 0) === 5  &&  (((s as any).braworntype ?? 0) === 'salacious'  ||  ((s as any).braworntype ?? 0) === 'none')) {
        // TODO-QSP: dynamic text: "Excuse me! <<$pcs_firstname>> <<$pcs_lastname>>?" you hear from behind you. Tur...
        scene.text(`"Excuse me! ${((s as any).pcs_firstname || '')} ${((s as any).pcs_lastname || '')}?" you hear from behind you. Turning around, you see an excited girl few years younger than yourself coming towards you. "${((s as any).pcs_firstname || '')} ${((s as any).pcs_lastname || '')}! The ${((s as any).fame ?? 0)?.['noun'] ?? ''}? It is you, isn't it! You're so…" She trails off for a brief moment and you see her eyes flicker downward for a moment before snapping back up. It was just a small twitch, but you suddenly feel very aware of how thin your top is and how certain things might be "poking" out.`);
        scene.text('"Sorry," she stammers on, clearly embarrassed that you noticed her glance. "I just wanted to say that you\'re so cool!"');
      } else {
        if (((s as any).PCloThinness ?? 0) === 6) {
          // TODO-QSP: dynamic text: "Excuse me! <<$pcs_firstname>> <<$pcs_lastname>>?" you hear from behind you. Tur...
          scene.text(`"Excuse me! ${((s as any).pcs_firstname || '')} ${((s as any).pcs_lastname || '')}?" you hear from behind you. Turning around, you see an excited girl few years younger than yourself coming towards you. "${((s as any).pcs_firstname || '')} ${((s as any).pcs_lastname || '')}! The ${((s as any).fame ?? 0)?.['noun'] ?? ''}? It is you, isn't it! You're so cool!"`);
          scene.text('She grins widely though it falters for a moment when her eyes grow wide, staring at your lewd outfit.');
        } else {
          // TODO-QSP: dynamic text: "Excuse me! <<$pcs_firstname>> <<$pcs_lastname>>?" you hear from behind you. Tur...
          scene.text(`"Excuse me! ${((s as any).pcs_firstname || '')} ${((s as any).pcs_lastname || '')}?" you hear from behind you. Turning around, you see an excited girl few years younger than yourself coming towards you. "${((s as any).pcs_firstname || '')} ${((s as any).pcs_lastname || '')}! The ${((s as any).fame ?? 0)?.['noun'] ?? ''}? It is you, isn't it! You're so cool!"`);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Thank you!', handler: (st: GameState) => {
    scene.text('"Wow, thank you!" you smile back. "It\'s always nice to meet a fan!"');
    if (((s as any).fame ?? 0)?.['activity'] === 'kickboxing') {
      scene.text('"I try to watch all you matches, you are best kickboxer in the city. I am sure you will beat all your opponents!"');
    } else {
      if (((s as any).fame ?? 0)?.['activity'] === 'running') {
        if (((s as any).runnerQW ?? 0)?.['champ_gold'] > 0) {
          scene.text('"I try to watch all you races, you are best runner in the city. I am sure you will also win the next championship!"');
        } else {
          scene.text('"I try to watch all you races, you are best runner in the city. I am sure you will become the next champion in no time!"');
        }
      } else {
        if (((s as any).fame ?? 0)?.['activity'] === 'singing') {
          scene.text('"I listen to you all the time, and have saved all your performances. You make the best music!"');
        }
      }
    }
    scene.text('"That\'s so kind of you! I really appreciate your support."');
    scene.text('"Can I get a selfie with you?" she asks holding up her phone.');
    scene.actions([
      { label: 'Of course!', handler: (st: GameState) => {
    qspCall(s, 'mood', 'raise', 'medium');
    (s as any).minut = ((s as any).minut ?? 0) + 6;
    if (((s as any).fame ?? 0)?.['activity'] === 'singing') {
      qspCall(s, 'fame', '', ((s as any).locArgs?.[1] ?? 0), 'music', 'medium');
    } else {
      qspCall(s, 'fame', '', ((s as any).locArgs?.[1] ?? 0), '' + qspUntranslated(s, "fame['activity']>", { location: "fame_events" }) + '', 'medium');
    }
    qspCall(s, 'stat', '');
    scene.text('"Of course!" you say, scooching over towards her.');
    if (((s as any).stat_visible_cum ?? 0) === 1) {
      qspCall(s, 'fame', '', ((s as any).locArgs?.[1] ?? 0), 'sex', 'small');
      scene.text('You sidle up to her and give a big smile into her camera phone. It\'s only when you see yourself reflected in the viewfinder that you think maybe this isn\'t such a great idea. You can clearly see the cum from your last sexual encounter on you. If this kind of thing gets posted on social media, what will people think? Before you can come up with an excuse to back out, the phone makes an artificial shuttering sound and the picture is taken.');
    } else {
      if (((s as any).PCloThinness ?? 0) === 6  &&  (((s as any).braworntype ?? 0) === 'salacious'  ||  ((s as any).braworntype ?? 0) === 'none')) {
        qspCall(s, 'fame', '', ((s as any).locArgs?.[1] ?? 0), 'sex', 'small');
        scene.text('You sidle up to her and give a big smile into her camera phone. It\'s only when you see yourself reflected in the viewfinder that you think maybe this isn\'t such a great idea. Your breasts are <i>fully</i> visible, nipples and everything. If this kind of thing gets posted on social media, what will people think? Before you can come up with an excuse to back out, the phone makes an artificial shuttering sound and the picture is taken.');
      } else {
        if (((s as any).PCloThinness ?? 0) === 5  &&  (((s as any).braworntype ?? 0) === 'salacious'  ||  ((s as any).braworntype ?? 0) === 'none')) {
          qspCall(s, 'fame', '', ((s as any).locArgs?.[1] ?? 0), 'sex', 'tiny');
          scene.text('You sidle up to her, giving a big smile into her camera phone. After a few moments, the girl manages to thumb the button and an artificial shuttering sound goes off. She immediately pulls it up for review and you take a look at it with her. It\'s a cute picture, the two of you together, though you notice just now that you can totally see your nipples are poking through your top and it\'s totally visible. Oh well, that\'s hardly the worst thing someone\'s seen of a female celebrity on the internet. But she clearly doesn\'t mind.');
        } else {
          if (((s as any).PCloThinness ?? 0) === 6) {
            qspCall(s, 'fame', '', ((s as any).locArgs?.[1] ?? 0), 'sex', Math.floor(Math.random() * 2) + 0);
            scene.text('You sidle up to her, giving a big smile into her camera phone. After a few moments, the girl manages to thumb the button and an artificial shuttering sound goes off. She immediately pulls it up for review and you take a look at it with her. It\'s a cute picture, the two of you together, though you realize just a bit too late that maybe you shouldn\'t have done a fan photo in an exhibitionist outfit like this… But she clearly doesn\'t mind.');
          } else {
            scene.text('You sidle up to her, giving a big smile into her camera phone. After a few moments, the girl manages to thumb the button and an artificial shuttering sound goes off. She immediately pulls it up for review and you take a look at it with her. It\'s a cute picture, the two of you together and she giggles excitedly just looking at it.');
          }
        }
      }
    }
    // TODO-QSP: dynamic text: "Thank you! Thank you! Thank you so much!" she says elatedly. "You are the best!...
    scene.text(`"Thank you! Thank you! Thank you so much!" she says elatedly. "You are the best! I will be cheering for you whenever you are ${((s as any).fame ?? 0)?.['activity'] ?? ''}" looking like she's just gotten her greatest wish fulfilled as you happily go on with your day. It seems all your hard work is finally starting to pay off.`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      { label: 'Sorry, I\'m in a hurry', handler: (st: GameState) => {
    if (((s as any).fame ?? 0)?.['activity'] === 'singing') {
      qspCall(s, 'fame', '', ((s as any).locArgs?.[1] ?? 0), 'music', (-50));
    } else {
      qspCall(s, 'fame', '', ((s as any).locArgs?.[1] ?? 0), '' + qspUntranslated(s, "fame['activity']>", { location: "fame_events" }) + '', (-50));
    }
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.text('"Sorry, I\'m in a big hurry. No time. It was nice meeting you though!" You turn around to leave as a look of horror crosses her face, like this moment will haunt her dreams.');
    scene.text('"Wait! But-!" You don\'t wait for her and walk off, not listening to another word.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Lie and say that she has mistaken your identity', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: "I'm not <<$pcs_firstname>> <<$pcs_lastname>>" you lie. "But, you look just like...
    scene.text(`"I'm not ${((s as any).pcs_firstname || '')} ${((s as any).pcs_lastname || '')}" you lie. "But, you look just like her?" she says confused.`);
    scene.text('"But I\'m not her. You\'ve mistaken me for someone else," you say as you turn around leaving the very puzzled looking girl.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'select':
      enterSelect(s, scene);
      break;
    case 'boy':
      enterBoy(s, scene);
      break;
    case 'girl':
      enterGirl(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const fame_events: LocationDef = {
  name: 'fame_events',
  region: 'other',
  enter: enter,
};
