import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).camGirl['MFC_lastrequest'] = ((s as any).totminut ?? 0);
  qspCall(s, 'stat', '');
  scene.text('One of the viewers asks: "Do you have a vibrator or dildo? I want to see your ass stuffed…"');
  qspCall(s, 'komp_cam_functions', 'check_available_anal_dildo');
  if (((s as any).temp_camVars ?? 0)?.['anal_available']) {
    scene.actions([
      { label: 'Play with a toy', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    qspCall(s, 'komp_cam_functions', 'check_available_anal_dildo');
    if (((s as any).temp_camVars ?? 0)?.['anal_vibe_available']) {
      qspCall(s, 'komp_cam_MFC_requests_anal', 'set_vibr_act');
    }
    if (((s as any).temp_camVars ?? 0)?.['anal_small_available']) {
      qspCall(s, 'komp_cam_MFC_requests_anal', 'set_small_act');
    }
    if (((s as any).temp_camVars ?? 0)?.['anal_normal_available']) {
      qspCall(s, 'komp_cam_MFC_requests_anal', 'set_normal_act');
    }
    if (((s as any).temp_camVars ?? 0)?.['anal_big_available']) {
      qspCall(s, 'komp_cam_MFC_requests_anal', 'set_big_act');
    }
    if (((s as any).temp_camVars ?? 0)?.['anal_large_available']) {
      qspCall(s, 'komp_cam_MFC_requests_anal', 'set_large_act');
    }
    if (((s as any).temp_camVars ?? 0)?.['anal_huge_available']) {
      qspCall(s, 'komp_cam_MFC_requests_anal', 'set_huge_act');
    }
    if (((s as any).temp_camVars ?? 0)?.['anal_enormous_available']) {
      qspCall(s, 'komp_cam_MFC_requests_anal', 'set_enormous_act');
    }
    if (((s as any).temp_camVars ?? 0)?.['anal_gigantic_available']) {
      qspCall(s, 'komp_cam_MFC_requests_anal', 'set_gigantic_act');
    }
  } },
    ]);
  }
  scene.actions([
    { label: 'Decide to improvise', handler: (st: GameState) => {
    qspCall(s, 'komp_cam_functions', 'camming', 5, 'porn', 'request');
    if (((s as any).pcs_ass ?? 0) < 10) {
      qspCall(s, 'npcStat', 'D1');
      scene.img('images/pc/items/accessories/computer/camwhore49.jpg');
      scene.text('You quickly look around you, trying to find something you can stick up your ass to make the viewer happy. Ah, your hair brush!');
      scene.text('Even though the handle doesn\'t look particularly big, you\'re still careful as you spit on the handle a few times before guiding it to your ass, slowly pushing it inside you.');
      if (((s as any).pcs_horny ?? 0) < 100) {
        scene.text('Fucking yourself with the brush feels nice, but you knew from the start you weren\'t going to orgasm like this. After a while, when you feel you earned all the donations you\'re going to get out of this, you put the hairbrush away with a smile and get back to chatting with your viewers.');
      } else {
        scene.text('To your shame, you have to admit, this feels great! If you keep this up, you might not be able to ever look at your hair brush again without getting aroused…');
      }
    } else {
      if (((s as any).pcs_ass ?? 0) < 15) {
        qspCall(s, 'npcStat', 'D2');
        scene.img('images/pc/items/accessories/computer/camwhore50.jpg');
        scene.text('You quickly look around you, trying to find something you can stick up your ass to make the viewer happy. How about those sharpies?');
        scene.text('"How many do you think I can take, guys?" you smile at the camera, while you show a fistful of sharpies to the camera. "Bonus points to who gets it right!"');
        scene.text('You\'re not that experienced with taking things up your ass yet, but can\'t help but laugh at the viewers typing: "ALL OF THEM!!!11"');
        scene.text('Even though you give it your best shot, you have to yield at 3. For now… this could be fun as a recurring challenge!');
        if (((s as any).pcs_horny ?? 0) < 100) {
          scene.text('The sharpies stretch your anus nicely, but you\'re not horny enough to orgasm from this. You make an effort of trying to add a fourth in front of the camera, but take them out and return to your seat once you think you won\'t get any more donations.');
        } else {
          // TODO-QSP: $orgasm_txt += 'Your ass squeezes out the sharpies one by one from the spasms, while the chat is sin...
        }
      } else {
        if (((s as any).pcs_ass ?? 0) < 25) {
          qspCall(s, 'npcStat', 'D3');
          scene.img('images/pc/items/accessories/computer/camwhore51.jpg');
          scene.text('You quickly look around you, trying to find something you can stick up your ass to make the viewer happy. How about that remote?');
          scene.text('The remote feels a bit uncomfortable, with its angular shape and sharp edges, but you still manage to get nearly half of it inside your ass.');
          if (((s as any).pcs_horny ?? 0) < 100) {
            scene.text('The remote stretches your anus nicely, but you\'re not horny enough to orgasm from this. You make an effort of fucking yourself with it in front of the camera, but take it out and return to your seat once you think you won\'t get any more donations.');
          }
        } else {
          if (((s as any).pcs_ass ?? 0) < 35) {
            qspCall(s, 'npcStat', 'D4');
            scene.img('images/pc/items/accessories/computer/camwhore52.jpg');
            scene.text('You quickly look around you, trying to find something you can stick up your ass to make the viewer happy. Then you ponder: "How about the phone in the hallway?"');
            scene.text('The horn doesn\'t go in very easily, with the earpiece being the widest part of the whole thing! However, you eventually manage to work it past your sphincter and let out a happy sigh. Is there anything you won\'t do for your viewers?');
            if (((s as any).pcs_horny ?? 0) < 100) {
              scene.text('The phone stretches your anus nicely, but you\'re not horny enough to orgasm from this. You make an effort of fucking yourself with it in front of the camera, but take it out and return to your seat once you think you won\'t get any more donations. You smile to yourself, hoping you\'ll remember to clean it before you make a phone call…');
            }
          } else {
            qspCall(s, 'npcStat', 'D5');
            scene.img('images/pc/items/accessories/computer/camwhore53.jpg');
            scene.text('You quickly look around you, trying to find something you can stick up your ass to make the viewer happy. What would your fans want to see inside your ass today… how about that spray can of hairspray?');
            scene.text('With a lewd smile on your face you pretend to stroke the can for a moment, while you tell your viewers: "Pretend that this is your cock, right now…"');
            scene.text('Then you guide it to your anus and penetrate yourself with it, moaning lewdly while you thrust it in deeper and deeper.');
            if (((s as any).pcs_horny ?? 0) < 100) {
              scene.text('You masturbate furiously while you slowly fuck yourself with the canister, much to the enthusiasm of your chat. They\'re all encouraging you by now, and cheer amongst themselves when they see you fake an orgasm on their screens. Several of them donate some tokens to you. You didn\'t actually orgasm, but you know what your viewers want to see!');
            }
          }
        }
      }
    }
    qspCall(s, 'arousal', 'anal_dildo', (-5), 'dick_length', 'masturbation');
    qspCall(s, 'stat', '');
    if (((s as any).camGirl ?? 0)?.['MFC_donate_message'] !== '') {
      // TODO-QSP: $camGirl['MFC_donate_message']
    }
    scene.actions([
      { label: 'Continue', goto: ['komp_cam_MFC_main', 'waitclients'] },
    ]);
  } },
    { label: 'Use your fingers instead', handler: (st: GameState) => {
    scene.text('You frown at the camera and apologize: "I\'m sorry, but no. I don\'t have anything like that…"');
    scene.text('The viewer replies: ":( :( :(. OK, maybe you use hand or fingers then yes?"');
    qspCall(s, 'komp_cam_functions', 'camming', 5, 'porn', 'request');
    if (((s as any).pcs_ass ?? 0) < 10) {
      scene.img('images/pc/items/accessories/computer/camwhore32.jpg');
      scene.text('Without saying a word you turn your ass to the camera and lick your finger before slowly working it past your tight sphincter. When your entire finger is inside you, you slowly begin to fuck your ass with it.');
      if (((s as any).pcs_horny ?? 0) < 100) {
        scene.text('Your viewer can tell you\'re not very experienced having things up your ass, and enjoys you fingering yourself. He quickly donates some tokens as promised, and you thrust your finger in a few more times before returning to your chair.');
      }
    } else {
      if (((s as any).pcs_ass ?? 0) < 15) {
        scene.img('images/pc/items/accessories/computer/camwhore45.jpg');
        scene.text('Without saying a word you turn your ass to the camera and lick your fingers before slowly working one in past your tight sphincter. Then you add a second! With the two fingers inside you, you slowly begin to move your hand back and forth, slowly fucking your ass with them.');
        if (((s as any).pcs_horny ?? 0) < 100) {
          scene.text('Your viewer can tell you\'re not very experienced having things up your ass yet, and enjoys you fingering yourself. He quickly donates some tokens as promised, and you thrust your fingers in a few more times before returning to your chair with a tinge of regret. That actually felt nice, but there\'s money to be made…');
        }
      } else {
        if (((s as any).pcs_ass ?? 0) < 25) {
          scene.img('images/pc/items/accessories/computer/camwhore46.jpg');
          scene.text('Without saying a word you turn your ass to the camera and lick your fingers before slowly working one in past your tight sphincter. Then you add a second! And a third! With the three fingers firmly inside you, you slowly begin to move your hand back and forth, slowly fucking your ass with them.');
          if (((s as any).pcs_horny ?? 0) < 100) {
            scene.text('Your viewer enjoys you fingering yourself, eager to have finally found a girl that isn\'t too squeamish to take some fingers in her ass without crying about it. He quickly donates some tokens as promised, and you thrust your fingers in a few more times before returning to your chair with a tinge of regret. That actually felt nice, but there\'s money to be made…');
          }
        } else {
          if (((s as any).pcs_ass ?? 0) < 35) {
            scene.img('images/pc/items/accessories/computer/camwhore47.jpg');
            scene.text('Without saying a word you turn your ass to the camera and lick your fingers before slowly working one in past your tight sphincter. Then you add a second! And a third! And even a fourth!');
            scene.text('With four fingers firmly inside you, you slowly begin to move your hand back and forth, fucking your ass with them. It\'s only a matter of time before your whole hand will fit in now, they\'re going to love that!');
            if (((s as any).pcs_horny ?? 0) < 100) {
              scene.text('Your viewer enjoys you fingering yourself, eager to have finally found a girl that isn\'t too squeamish to take some fingers in her ass without crying about it. He quickly donates some tokens as promised, and you thrust your fingers in a few more times before returning to your chair with a tinge of regret. That actually felt nice, but there\'s money to be made…');
            }
          } else {
            scene.img('images/pc/items/accessories/computer/camwhore48.jpg');
            scene.text('Without saying a word you turn your ass to the camera and lick your fingers before slowly working one in past your tight sphincter. Then you add a second! And a third! And even a fourth! The chat explodes when you work your thumb in too, and even manage to go in a bit further. That\'s right… you\'re practically fisting yourself, in front of an audience!');
            if (((s as any).pcs_horny ?? 0) < 100) {
              scene.text('Your viewers are ecstatic and extremely impressed with the ease at which you take large objects (such as your hand) in your ass. A few of them donate some tokens, hoping you\'ll use their money to buy the biggest dildo you can find.');
            }
          }
        }
      }
    }
    qspCall(s, 'arousal', 'anal_finger', 5);
    qspCall(s, 'stat', '');
    if (((s as any).camGirl ?? 0)?.['MFC_donate_message'] !== '') {
      // TODO-QSP: $camGirl['MFC_donate_message']
    }
    scene.actions([
      { label: 'Continue', goto: ['komp_cam_MFC_main', 'waitclients'] },
    ]);
  } },
    { label: 'Refuse', goto: ['komp_cam_MFC_main', 'waitclients'] },
  ]);
  scene.build();
}

function enterSetVibrAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mc_inventory ?? 0)?.['vibe'] === 1) {
    scene.actions([
      { label: 'Use your vibrator', handler: (st: GameState) => {
    qspCall(s, 'komp_cam_functions', 'camming', 5, 'porn', 'request');
    qspCall(s, 'npcStat', 'D1');
    scene.img('images/pc/items/accessories/computer/camwhore23.jpg');
    if (((s as any).pcs_ass ?? 0) < 10) {
      scene.text('You spit on the vibrator a few times and bring it to your anus, before turning it on. You gently stick it up your ass and ride it for a while, enjoying the stimulation it gives you.');
      scene.text('When you put the vibrator aside after a few minutes of fun, you notice you received several donations during your little show.');
    } else {
      scene.text('You turn on the vibrator and make a show of fucking your ass with it, hoping to please the customer despite it not being what he initially asked for.');
      if (((s as any).pcs_horny ?? 0) < 100) {
        scene.text('When you put the vibrator aside after a few minutes of fun, you notice you received several donations during your little show.');
      }
    }
    qspCall(s, 'arousal', 'anal_vibe', (-5), 'dick_length', 'masturbation');
    qspCall(s, 'stat', '');
    if (((s as any).camGirl ?? 0)?.['MFC_donate_message'] !== '') {
      // TODO-QSP: $camGirl['MFC_donate_message']
    }
    scene.actions([
      { label: 'Continue', goto: ['komp_cam_MFC_main', 'waitclients'] },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterSetSmallAct(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Use your small dildo', handler: (st: GameState) => {
    qspCall(s, 'komp_cam_functions', 'camming', 5, 'porn', 'request');
    qspCall(s, 'npcStat', 'D1');
    scene.img('images/pc/items/accessories/computer/camwhore24.jpg');
    if (((s as any).pcs_ass ?? 0) < 10) {
      scene.text('You take the 10cm long dildo and slip it inside your ass with one firm motion. It\'s not very big, but is still fairly big for you. Ouch!');
      scene.text('When you put the dildo aside after a few minutes, you notice you received several donations during your little show.');
    } else {
      scene.text('You take the 10cm long dildo and slip it inside your ass with one firm motion. It\'s not very big, and feels quite enjoyable inside your ass.');
      if (((s as any).pcs_horny ?? 0) < 100) {
        scene.text('When you put the dildo aside after a few minutes of fun, you notice you received several donations during your little show.');
      }
    }
    qspCall(s, 'arousal', 'anal_dildo', (-5), 'dick_length', 'masturbation');
    qspCall(s, 'stat', '');
    if (((s as any).camGirl ?? 0)?.['MFC_donate_message'] !== '') {
      // TODO-QSP: $camGirl['MFC_donate_message']
    }
    scene.actions([
      { label: 'Continue', goto: ['komp_cam_MFC_main', 'waitclients'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSetNormalAct(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Use your medium dildo', handler: (st: GameState) => {
    qspCall(s, 'komp_cam_functions', 'camming', 5, 'porn', 'request');
    qspCall(s, 'npcStat', 'D2');
    scene.img('images/pc/items/accessories/computer/camwhore25.jpg');
    if (((s as any).pcs_ass ?? 0) < 15) {
      scene.text('You take the 15cm long dildo and put it on the floor so you can ride it. After you slip it inside your ass you hump it carefully, making a nice show of it stretching your anus in the process. It kinda hurts.');
      scene.text('When you put the dildo aside after a few minutes, you notice you received several donations during your little show.');
    } else {
      scene.text('You take the 15cm long dildo and put it on the floor so you can ride it. After you slip it inside your ass with one firm motion, you hump it enthusiastically, making a nice show of it stretching your anus in the process.');
      if (((s as any).pcs_horny ?? 0) < 100) {
        scene.text('When you put the dildo aside after a few minutes of fun, you notice you received several donations during your little show.');
      }
    }
    qspCall(s, 'arousal', 'anal_dildo', (-5), 'dick_length', 'masturbation');
    qspCall(s, 'stat', '');
    if (((s as any).camGirl ?? 0)?.['MFC_donate_message'] !== '') {
      // TODO-QSP: $camGirl['MFC_donate_message']
    }
    scene.actions([
      { label: 'Further', goto: ['komp_cam_MFC_main', 'waitclients'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSetBigAct(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Use your large dildo', handler: (st: GameState) => {
    qspCall(s, 'komp_cam_functions', 'camming', 5, 'porn', 'request');
    qspCall(s, 'npcStat', 'D3');
    scene.img('images/pc/items/accessories/computer/camwhore26.jpg');
    if (((s as any).pcs_ass ?? 0) < 20) {
      scene.text('You take the 20cm long dildo and put it on the floor so you can ride it. After you slip it inside your ass carefully, you begin to hump it. It\'s too big to really be enjoyable, but the viewers demand a show and you do your best to show how it stretches your anus in the process.');
      scene.text('When you put the dildo aside after a few minutes of fun, you notice you received several donations during your little show.');
    } else {
      scene.text('You take the 20cm long dildo and put it on the floor so you can ride it. After you slip it inside your ass with one firm motion, you hump it enthusiastically. You\'re used to this size and make a nice show of it stretching your anus in the process.');
      if (((s as any).pcs_horny ?? 0) < 100) {
        scene.text('When you put the dildo aside after a few minutes of fun, you notice you received several donations during your little show.');
      }
    }
    qspCall(s, 'arousal', 'anal_dildo', (-5), 'dick_length', 'masturbation');
    qspCall(s, 'stat', '');
    if (((s as any).camGirl ?? 0)?.['MFC_donate_message'] !== '') {
      // TODO-QSP: $camGirl['MFC_donate_message']
    }
    scene.actions([
      { label: 'Continue', goto: ['komp_cam_MFC_main', 'waitclients'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSetLargeAct(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Use your very large dildo', handler: (st: GameState) => {
    qspCall(s, 'komp_cam_functions', 'camming', 5, 'porn', 'request');
    qspCall(s, 'npcStat', 'D4');
    scene.img('images/pc/items/accessories/computer/camwhore27.jpg');
    if (((s as any).pcs_ass ?? 0) < 25) {
      scene.text('You relax on your bed and lift your pelvis for easier access. After coating the dildo liberally with your saliva and rubbing some onto your anus too, you carefully shove the dildo inside you one bit at a time.');
      scene.text('Once its whole length is inside you, you take a break and catch your breath. Damn, that thing is big! You wiggle your ass a little and carefully move the dildo a bit inside your rectum, but then decide you fulfilled the client\'s request and quickly let it slide out again. Ow…');
    } else {
      scene.text('You relax on your bed and lift your pelvis for easier access. You don\'t bother to lubricate the dildo first and just guide it to your anus, knowing you\'re loose enough back there to be okay without. Your viewers seem very impressed by this, and compliment your sluttiness while they watch the dildo slowly being swallowed by your hungry anus.');
      if (((s as any).pcs_horny ?? 0) < 100) {
        scene.text('When you put the dildo aside after a few minutes of fun, you notice you received several donations during your little show.');
      }
    }
    qspCall(s, 'arousal', 'anal_dildo', (-5), 'dick_length', 'masturbation');
    qspCall(s, 'stat', '');
    if (((s as any).camGirl ?? 0)?.['MFC_donate_message'] !== '') {
      // TODO-QSP: $camGirl['MFC_donate_message']
    }
    scene.actions([
      { label: 'Continue', goto: ['komp_cam_MFC_main', 'waitclients'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSetHugeAct(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Use your 30cm dildo', handler: (st: GameState) => {
    qspCall(s, 'komp_cam_functions', 'camming', 5, 'porn', 'request');
    qspCall(s, 'npcStat', 'D5');
    scene.img('images/pc/items/accessories/computer/camwhore28.jpg');
    if (((s as any).pcs_ass ?? 0) < 30) {
      scene.text('You lie down on your back and throw your legs behind your head. You realize your ass isn\'t quite used to taking anything this large in it and go slowly, carefully thrusting the dildo up your ass.');
      scene.text('Even with lubrication it hurts, and a few minutes in you have to stop. Your viewer enjoyed your show regardless, and donated some tokens as promised.');
    } else {
      scene.text('You lie down on your back and throw your legs behind your head. Knowing you can take its size comfortably, you skewer yourself with the dildo. You moan eagerly while you fuck your ass with it for a while, giving your clients a nice show.');
      if (((s as any).pcs_horny ?? 0) < 100) {
        scene.text('A few minutes later your muscles begin to ache and you decide to stop. You give the camera a weak smile, hoping you fulfilled your viewer\'s request.');
      }
    }
    qspCall(s, 'arousal', 'anal_dildo', (-5), 'dick_length', 'masturbation');
    qspCall(s, 'stat', '');
    if (((s as any).camGirl ?? 0)?.['MFC_donate_message'] !== '') {
      // TODO-QSP: $camGirl['MFC_donate_message']
    }
    scene.actions([
      { label: 'Continue', goto: ['komp_cam_MFC_main', 'waitclients'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSetEnormousAct(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Use your enormous 35cm dildo', handler: (st: GameState) => {
    qspCall(s, 'komp_cam_functions', 'camming', 5, 'porn', 'request');
    qspCall(s, 'npcStat', 'D6');
    scene.img('images/pc/items/accessories/computer/camwhore29.jpg');
    if (((s as any).pcs_ass ?? 0) < 35) {
      scene.text('You roll to your side, looking at the enormous dildo for a second before you decide to shove it inside you. It\'s too big, and even with a liberal coat of lubrication you barely manage to shove the head inside you.');
      scene.text('It hurt a lot, but the viewer appreciated your struggle anyway and gave you some tokens.');
    } else {
      scene.text('You roll to your side, looking at the enormous dildo for a second before you decide to shove it inside you. You\'re used to taking things this large up your ass, and moan softly while you thrust the dildo in and out of you.');
      if (((s as any).pcs_horny ?? 0) < 100) {
        scene.text('Even though it feels nice, you are not quite horny enough to reach orgasm this way.');
      }
    }
    qspCall(s, 'arousal', 'anal_dildo', (-5), 'dick_length', 'masturbation');
    qspCall(s, 'stat', '');
    if (((s as any).camGirl ?? 0)?.['MFC_donate_message'] !== '') {
      // TODO-QSP: $camGirl['MFC_donate_message']
    }
    scene.actions([
      { label: 'Continue', goto: ['komp_cam_MFC_main', 'waitclients'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSetGiganticAct(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Use your humongous 40cm dildo', handler: (st: GameState) => {
    qspCall(s, 'komp_cam_functions', 'camming', 5, 'porn', 'request');
    qspCall(s, 'npcStat', 'D7');
    scene.img('images/pc/items/accessories/computer/camwhore30.jpg');
    if (((s as any).pcs_ass ?? 0) < 40) {
      scene.text('You take out your biggest dildo and put it on the floor, giving it a doubtful look. Is that really going to fit inside you?');
      scene.text('You spit on your fingers several times, apologizing to the camera while you try to produce some more lubrication for yourself.');
      scene.text('When you rub the head against your sphincter, you\'re even more doubtful. This is not going to be a pleasant experience. Nevertheless, the customers demand it, so…');
      scene.text('Despite your best efforts, you don\'t manage to get much more than the head in. A few tears roll down your cheek while you desperately try to ignore the pain. When you give up, you see you got a fair few donations… apparently your viewers enjoy watching you suffer!');
    } else {
      scene.text('You take your largest dildo and put it on the floor, and then spit on your fingers a few times and rub it across your sphincter habitually. Taking things up the ass is nothing new to you, and you slowly let yourself sink down on the humongous dildo with a satisfied sigh. Your chat loves it, calling you their anal queen.');
      if (((s as any).pcs_horny ?? 0) < 100) {
        scene.text('The rubber phallus stretches your anal ring nicely, and makes your vagina poke out lewdly with every thrust. The knowledge that you\'re still a virgin makes your customers all the hornier, knowing that a sweet virgin girl such as yourself is taking such a huge dildo up her ass at the same time…');
      }
    }
    qspCall(s, 'arousal', 'anal_dildo', (-5), 'dick_length', 'masturbation');
    qspCall(s, 'stat', '');
    if (((s as any).camGirl ?? 0)?.['MFC_donate_message'] !== '') {
      // TODO-QSP: $camGirl['MFC_donate_message']
    }
    scene.actions([
      { label: 'Continue', goto: ['komp_cam_MFC_main', 'waitclients'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'set_vibr_act':
      enterSetVibrAct(s, scene);
      break;
    case 'set_small_act':
      enterSetSmallAct(s, scene);
      break;
    case 'set_normal_act':
      enterSetNormalAct(s, scene);
      break;
    case 'set_big_act':
      enterSetBigAct(s, scene);
      break;
    case 'set_large_act':
      enterSetLargeAct(s, scene);
      break;
    case 'set_huge_act':
      enterSetHugeAct(s, scene);
      break;
    case 'set_enormous_act':
      enterSetEnormousAct(s, scene);
      break;
    case 'set_gigantic_act':
      enterSetGiganticAct(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const komp_cam_MFC_requests_anal: LocationDef = {
  name: 'komp_cam_MFC_requests_anal',
  title: 'One of the viewers asks: "Do you have a vibrator or dildo? I',
  region: 'other',
  description: ['One of the viewers asks: "Do you have a vibrator or dildo? I want to see your ass stuffed…"'],
  enter: enter,
};
