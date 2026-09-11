import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  ((s as any).camGirl ?? {})['MFC_lastrequest'] = ((s as any).totminut ?? 0);
  qspCall(s, 'stat', '');
  qspCall(s, 'komp_cam_functions', 'check_available_vaginal_dildo');
  if (((s as any).temp_camVars ?? 0)?.['vaginal_available']) {
    scene.text('One of the viewers asks: "Do you have a vibrator or dildo? I want you to put up a little show and fuck yourself with it…"');
    scene.text('You smile at him and show him all the toys you own. The viewer chooses one, and asks you to play with it. He leaves it up to you as to what exactly you do with it, but seems to want to see it inside your pussy most of all.');
    if (qspFunc(s, 'pcs_has_attr', 'sex_virgin') === 0) {
      if (((s as any).temp_camVars ?? 0)?.['vaginal_vibe_available']) {
        qspCall(s, 'komp_cam_MFC_requests_one', 'set_vibr_vag_act');
      }
      if (((s as any).temp_camVars ?? 0)?.['vaginal_small_available']) {
        qspCall(s, 'komp_cam_MFC_requests_one', 'set_small_vag_act');
      }
      if (((s as any).temp_camVars ?? 0)?.['vaginal_normal_available']) {
        qspCall(s, 'komp_cam_MFC_requests_one', 'set_normal_vag_act');
      }
      if (((s as any).temp_camVars ?? 0)?.['vaginal_big_available']) {
        qspCall(s, 'komp_cam_MFC_requests_one', 'set_big_vag_act');
      }
      if (((s as any).temp_camVars ?? 0)?.['vaginal_large_available']) {
        qspCall(s, 'komp_cam_MFC_requests_one', 'set_large_vag_act');
      }
      if (((s as any).temp_camVars ?? 0)?.['vaginal_huge_available']) {
        qspCall(s, 'komp_cam_MFC_requests_one', 'set_huge_vag_act');
      }
      if (((s as any).temp_camVars ?? 0)?.['vaginal_enormous_available']) {
        qspCall(s, 'komp_cam_MFC_requests_one', 'set_enormous_vag_act');
      }
      if (((s as any).temp_camVars ?? 0)?.['vaginal_gigantic_available']) {
        qspCall(s, 'komp_cam_MFC_requests_one', 'set_gigantic_vag_act');
      }
      scene.actions([
        { label: 'Can\'t find a suitable toy or you changed your mind', goto: ['komp_cam_MFC_main', 'waitclients'] },
      ]);
    } else {
      scene.actions([
        { label: 'Lose your virginity in front of <<camGirl[\'MFC_Viewers\']>> people', handler: (st: GameState) => {
    qspCall(s, 'komp_cam_functions', 'camming', 5, 'porn', 'request');
    qspCall(s, 'npcStat', 'D1');
    scene.img('images/pc/items/accessories/computer/camwhore22.jpg');
    scene.text('You bite your lip while you think for a second… losing your virginity would probably earn you a lot of tokens! You slowly push the dildo through your hymen, and some blood seeps from your vagina afterwards.');
    scene.text('The chat explodes with comments, they\'d never seen a girl do that live on camera before!');
    scene.text('"That was amazing!"');
    scene.text('"Wow, so hot!"');
    scene.text('"Wish that was me!"');
    scene.text('You wince a little, and immediately stop stimulating yourself. That hurt! A lot!');
    scene.text('You lie on your back and pull out the toy, showing your no-longer-virgin pussy and the blood to prove it to your audience.');
    qspCall(s, 'arousal', 'vaginal_dildo', (-5), 'dick_length', 'masturbation');
    qspCall(s, 'stat', '');
    if (((s as any).camGirl ?? 0)?.['MFC_donate_message'] !== '') {
      // TODO-QSP: $camGirl['MFC_donate_message']
    }
    scene.actions([
      { label: 'Continue', goto: ['komp_cam_MFC_main', 'waitclients'] },
    ]);
  } },
        { label: 'Stick it in your ass instead', handler: (st: GameState) => {
    scene.text('Even though some of your more rude viewers would probably beg to differ, you do have some standards! And you definitely don\'t want to lose your virginity on a webcam show, in front of strangers.');
    scene.text('You bite your lip and ask the client: "Uhh, would it be okay if I fuck my ass with it? I\'m still a virgin, and I want to keep it that way…"');
    scene.text('He reluctantly agrees, but says he will probably donate less than he intended to…');
    qspCall(s, 'willpower', 'exhib', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Ignore him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Ignore him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['komp_cam_MFC_main', 'waitclients'] },
      ]);
    }
    scene.actions([
      { label: 'Do it anyway', handler: (st: GameState) => {
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
    scene.actions([
      { label: 'Can\'t find a suitable toy or you changed your mind', goto: ['komp_cam_MFC_main', 'waitclients'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } else {
    scene.text('One of the viewers asks in broken English: "You have dildo or vibrator? I want to see you fuck you!"');
    scene.text('You frown at the camera and apologize: "I\'m sorry, but no. I don\'t have anything like that…"');
    scene.text('The viewer replies: ":( :( :(. OK, maybe you use hand or fingers then yes?"');
    if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
      qspCall(s, 'willpower', 'exhib', 'resist', 'hard');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Ignore him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Ignore him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['komp_cam_MFC_main', 'waitclients'] },
        ]);
      }
      scene.actions([
        { label: 'Do as he asks', handler: (st: GameState) => {
    qspCall(s, 'komp_cam_functions', 'camming', 5, 'porn', 'request');
    qspCall(s, 'stat', '');
    if (((s as any).pcs_ass ?? 0) < 10) {
      scene.img('images/pc/items/accessories/computer/camwhore32.jpg');
      scene.text('You\'re still a virgin! He\'ll probably like it if you finger your ass instead…');
      scene.text('Without saying a word you turn your ass to the camera and lick your finger before slowly working it past your tight sphincter. When your entire finger is inside you, you slowly begin to fuck your ass with it.');
      if (((s as any).pcs_horny ?? 0) < 100) {
        scene.text('Your viewer can tell you\'re not very experienced having things up your ass, and enjoys you fingering yourself. He quickly donates some tokens as promised, and you thrust your finger in a few more times before returning to your chair.');
      }
    } else {
      if (((s as any).pcs_ass ?? 0) < 15) {
        scene.img('images/pc/items/accessories/computer/camwhore45.jpg');
        scene.text('You\'re still a virgin! He\'ll probably like it if you finger your ass instead…');
        scene.text('Without saying a word you turn your ass to the camera and lick your fingers before slowly working one in past your tight sphincter. Then you add a second! With the two fingers inside you, you gradually begin to move your hand back and forth, slowly fucking your ass with them.');
        if (((s as any).pcs_horny ?? 0) < 100) {
          scene.text('Your viewer can tell you\'re not very experienced having things up your ass yet and enjoys you fingering yourself. He quickly donates some tokens as promised, and you thrust your fingers in a few more times before returning to your chair with a tinge of regret. That actually felt nice, but there\'s money to be made…');
        }
      } else {
        if (((s as any).pcs_ass ?? 0) < 25) {
          scene.img('images/pc/items/accessories/computer/camwhore46.jpg');
          scene.text('You\'re still a virgin! He\'ll probably like it if you finger your ass instead…');
          scene.text('Without saying a word you turn your ass to the camera and lick your fingers before slowly working one in past your tight sphincter. Then you add a second! And a third! With the three fingers firmly inside you, you slowly begin to move your hand back and forth, slowly fucking your ass with them.');
          if (((s as any).pcs_horny ?? 0) < 100) {
            scene.text('Your viewer enjoys you fingering yourself, eager to have finally found a girl that isn\'t too squeamish to take some fingers in her ass without crying about it. He quickly donates some tokens as promised, and you thrust your fingers in a few more times before returning to your chair with a tinge of regret. That actually felt nice, but there\'s money to be made…');
          }
        } else {
          if (((s as any).pcs_ass ?? 0) < 35) {
            scene.img('images/pc/items/accessories/computer/camwhore47.jpg');
            scene.text('You\'re still a virgin! He\'ll probably like it if you finger your ass instead…');
            scene.text('Without saying a word you turn your ass to the camera and lick your fingers before slowly working one in past your tight sphincter. Then you add a second! And a third! And even a fourth!');
            scene.text('With four fingers firmly inside you, you slowly begin to move your hand back and forth, fucking your ass with them. It\'s only a matter of time before your whole hand will fit in now, they\'re going to love that!');
            if (((s as any).pcs_horny ?? 0) < 100) {
              scene.text('Your viewer enjoys you fingering yourself, eager to have finally found a girl that isn\'t too squeamish to take some fingers in her ass without crying about it. He quickly donates some tokens as promised, and you thrust your fingers in a few more times before returning to your chair with a tinge of regret. That actually felt nice, but there\'s money to be made…');
            }
          } else {
            scene.img('images/pc/items/accessories/computer/camwhore48.jpg');
            scene.text('You\'re still a virgin! He\'ll probably like it if you finger your ass instead…');
            scene.text('Without saying a word you turn your ass to the camera and lick your fingers before slowly working one in past your tight sphincter. Then you add a second! And a third! And even a fourth! The chat explodes when you work your thumb in too, and even manage to go in a bit further. That\'s right… you\'re practically fisting yourself, in front of an audience!');
            if (((s as any).pcs_horny ?? 0) < 100) {
              scene.text('Your viewers are absolutely ecstatic and are extremely impressed with the ease at which you take large objects (such as your hand) in your ass. A few of them donate some tokens, hoping you\'ll use their money to buy the biggest dildo you can find.');
            }
          }
        }
      }
    }
    qspCall(s, 'arousal', 'anal_finger', (-5));
    qspCall(s, 'stat', '');
    if (((s as any).camGirl ?? 0)?.['MFC_donate_message'] !== '') {
      // TODO-QSP: $camGirl['MFC_donate_message']
    }
    scene.actions([
      { label: 'Continue', goto: ['komp_cam_MFC_main', 'waitclients'] },
    ]);
  } },
        { label: 'Improvise', handler: (st: GameState) => {
    qspCall(s, 'komp_cam_functions', 'camming', 5, 'porn', 'request');
    if (((s as any).pcs_ass ?? 0) < 10) {
      qspCall(s, 'npcStat', 'D1');
      scene.img('images/pc/items/accessories/computer/camwhore49.jpg');
      scene.text('You quickly look around you, trying to find something you can stick up your ass to make the viewer happy. Ah, your hair brush!');
      scene.text('Even though the handle doesn\'t look particularly big, you\'re still careful as you spit on the handle a few times before guiding it to your ass, slowly pushing it inside you.');
      if (((s as any).pcs_horny ?? 0) < 100) {
        scene.text('Fucking yourself with the brush feels nice, but you knew from the start you weren\'t going to orgasm like this. After a while, when you feel you earned all the donations you\'re going to get out of this, you put the hair brush away with a smile and get back to chatting with your viewers.');
      }
    } else {
      if (((s as any).pcs_ass ?? 0) < 15) {
        qspCall(s, 'npcStat', 'D2');
        scene.img('images/pc/items/accessories/computer/camwhore50.jpg');
        scene.text('You quickly look around you, trying to find something you can stick up your ass to make the viewer happy. How about those Sharpies?');
        scene.text('"How many do you think I can take, guys?" you smile at the camera, while you show a fistful of Sharpies to the camera. "Bonus points to who gets it right!"');
        scene.text('You\'re not that experienced with taking things up your ass yet, but can\'t help but laugh at the viewers typing: "ALL OF THEM!!!11"');
        scene.text('Even though you give it your best shot, you have to yield at 3. For now… this could be fun as a recurring challenge!');
        if (((s as any).pcs_horny ?? 0) < 100) {
          scene.text('The sharpies stretch your anus nicely, but you\'re not horny enough to orgasm from this. You make an effort of trying to add a fourth in front of the camera, but take them out and return to your seat once you think you won\'t get any more donations.');
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
            scene.text('With a lewd smile on your face, you pretend to stroke the can for a moment, while you tell your viewers: "Pretend that this is your cock, right now…"');
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
      ]);
    } else {
      scene.actions([
        { label: 'Do as he asks', handler: (st: GameState) => {
    qspCall(s, 'komp_cam_functions', 'camming', 5, 'porn', 'request');
    if (((s as any).pcs_vag ?? 0) < 15) {
      scene.img('images/pc/items/accessories/computer/camwhore35.jpg');
      scene.text('"I\'d rather be riding your dick right now, but since you\'re not here…" you tell the viewer, guiding your hand to your snatch while you wink at the camera.');
      scene.text('You slowly work a finger inside your tight snatch and begin to fuck yourself with it, while the viewer who originally requested you do this is encouraging you to go on.');
      if (((s as any).pcs_horny ?? 0) < 100) {
        scene.text('You stimulate yourself for a few minutes, nearly forgetting about the camera pointed at you. While you gain your breath you blow a kiss at the camera and let the person who posted the request know that was just for him. He readily donates some extra tokens, appreciating the personal touch.');
      }
      qspCall(s, 'arousal', 'vaginal_finger', (-5));
      qspCall(s, 'stat', '');
    } else {
      if (((s as any).pcs_vag ?? 0) < 25) {
        scene.img('images/pc/items/accessories/computer/camwhore34.jpg');
        scene.text('"I\'d rather be riding your dick right now, but since you\'re not here…" you tell the viewer, guiding your hand to your snatch while you wink at the camera.');
        scene.text('You slowly work two fingers inside your vagina and begin to fuck yourself with them, while the viewer who originally requested you do this is encouraging you to go on.');
        if (((s as any).pcs_horny ?? 0) < 100) {
          scene.text('You stimulate yourself for a few minutes, nearly forgetting about the camera pointed at you. While you gain your breath you blow a kiss at the camera and let the person who posted the request know that was just for him. He readily donates some extra tokens, appreciating the personal touch.');
        }
        qspCall(s, 'arousal', 'vaginal_finger', (-5));
      } else {
        if (((s as any).pcs_ass ?? 0) < 25) {
          scene.img('images/pc/items/accessories/computer/camwhore33.jpg');
          scene.text('"I\'d rather be riding your dick right now, but since you\'re not here…" you tell the viewer, guiding your hand to your snatch while you wink at the camera.');
          scene.text('You slowly work your entire hand inside your vagina, while the chat explodes! The viewer who originally requested you do this is encouraging you along with the rest, thoroughly impressed with your show.');
          if (((s as any).pcs_horny ?? 0) < 100) {
            scene.text('After you please yourself for a while, you realize you could probably get more tokens out of your viewers by not cumming just yet. You carefully remove your hand with an apologetic smile, hoping some of them will get the hint and donate more.');
          }
          qspCall(s, 'arousal', 'vaginal_fist', (-5));
        } else {
          scene.img('images/pc/items/accessories/computer/camwhore44.jpg');
          scene.text('"I\'d rather be riding your dick right now, but since you\'re not here…" you tell the viewer, guiding your hand to your snatch while you wink at the camera.');
          scene.text('They get even more restless when you tease your anus with your free hand.');
          if (((s as any).pcs_horny ?? 0) < 100) {
            scene.text('After you please yourself for a while, you realize you could probably get more tokens out of your viewers by not cumming just yet. You carefully remove your hands with an apologetic smile, hoping some of them will get the hint and donate more.');
          }
          qspCall(s, 'arousal', 'vaginal_fist', (-5));
        }
      }
    }
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
  }
  scene.build();
}

function enterSetVibrAnalAct(s: GameState, scene: SceneBuilder): void {
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
  scene.build();
}

function enterSetSmallAnalAct(s: GameState, scene: SceneBuilder): void {
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

function enterSetNormalAnalAct(s: GameState, scene: SceneBuilder): void {
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

function enterSetBigAnalAct(s: GameState, scene: SceneBuilder): void {
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

function enterSetLargeAnalAct(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Use your very large dildo', handler: (st: GameState) => {
    qspCall(s, 'komp_cam_functions', 'camming', 5, 'porn', 'request');
    qspCall(s, 'npcStat', 'D4');
    scene.img('images/pc/items/accessories/computer/camwhore27.jpg');
    if (((s as any).pcs_ass ?? 0) < 25) {
      scene.text('You relax on your bed and lift your pelvis for easier access. After coating the dildo liberally with your saliva and rubbing some onto your anus too, you carefully shove the dildo inside you one bit at a time.');
      scene.text('Once its whole length is inside you, you take a break and catch your breath. Damn, that thing is big! You wiggle your ass a little and carefully move the dildo a bit inside your rectum, but then decide you fulfilled the viewer\'s request and quickly let it slide out again. Ow…');
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

function enterSetHugeAnalAct(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Use your 30cm dildo', handler: (st: GameState) => {
    qspCall(s, 'komp_cam_functions', 'camming', 5, 'porn', 'request');
    qspCall(s, 'npcStat', 'D5');
    scene.img('images/pc/items/accessories/computer/camwhore28.jpg');
    if (((s as any).pcs_ass ?? 0) < 30) {
      scene.text('You lie down on your back and throw your legs behind your head. You realize your ass isn\'t quite used to taking anything this large in it and go slowly, carefully thrusting the dildo up your ass.');
      scene.text('Even with lubrication it hurts, and a few minutes in you have to stop. Your viewer enjoyed your show regardless, and donated some tokens as promised.');
    } else {
      scene.text('You lie down on your back and throw your legs behind your head. Knowing you can take its size comfortably, you skewer yourself with the dildo. You moan eagerly while you fuck your ass with it for a while, giving your viewers a nice show.');
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

function enterSetEnormousAnalAct(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Use your enormous 35cm dildo', handler: (st: GameState) => {
    qspCall(s, 'komp_cam_functions', 'camming', 5, 'porn', 'request');
    qspCall(s, 'npcStat', 'D6');
    scene.img('images/pc/items/accessories/computer/camwhore29.jpg');
    if (((s as any).pcs_ass ?? 0) < 30) {
      scene.text('You roll to your side, looking at the enormous dildo for a second before you decide to shove it inside you. It\'s too big, and even with a liberal coat of lubrication you barely manage to shove the head inside you.');
      scene.text('It hurt a lot, but the viewer appreciated your struggle anyway and gives you some tokens.');
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

function enterSetGiganticAnalAct(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Use your humongous 40cm dildo', handler: (st: GameState) => {
    qspCall(s, 'komp_cam_functions', 'camming', 5, 'porn', 'request');
    qspCall(s, 'npcStat', 'D6');
    scene.img('images/pc/items/accessories/computer/camwhore30.jpg');
    if (((s as any).pcs_ass ?? 0) < 35) {
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

function enterSetVibrVagAct(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Use your vibrator', handler: (st: GameState) => {
    qspCall(s, 'komp_cam_functions', 'camming', 5, 'porn', 'request');
    qspCall(s, 'npcStat', 'D1');
    scene.img('images/pc/items/accessories/computer/camwhore31.jpg');
    if (((s as any).pcs_vag ?? 0) < 15) {
      scene.text('You turn on the vibrator and slowly shove it up your pussy.');
    } else {
      scene.text('You turn on the vibrator and make a show of fucking your pussy with it, thrusting it inside yourself eagerly and enjoying its vibrations.');
    }
    if (((s as any).pcs_horny ?? 0) < 100) {
      scene.text('When you put the vibrator aside after a few minutes of fun, you notice you received several donations during your little show.');
    }
    qspCall(s, 'arousal', 'vaginal_dildo', (-5), 'dick_length', 'masturbation');
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

function enterSetSmallVagAct(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Use your small dildo', handler: (st: GameState) => {
    qspCall(s, 'komp_cam_functions', 'camming', 5, 'porn', 'request');
    qspCall(s, 'npcStat', 'D1');
    scene.img('images/pc/items/accessories/computer/camwhore36.jpg');
    if (((s as any).pcs_vag ?? 0) < 10) {
      scene.text('You choose your small dildo and make a show of fucking your pussy with it, after you refocus the camera onto your crotch. For the next few minutes you moan lewdly into the camera mic, letting them know how good this dildo makes you feel. Your pussy is still very narrow, and its walls grasp the dildo tightly with every thrust.');
    } else {
      scene.text('You choose your small dildo and make a show of fucking your pussy with it, after you refocus the camera onto your crotch. For the next few minutes you moan lewdly into the camera mic, letting them know how good this dildo makes you feel.');
    }
    if (((s as any).pcs_horny ?? 0) < 100) {
      scene.text('When you put the dildo aside after a few minutes of fun, you notice you received several donations during your little show.');
    }
    qspCall(s, 'arousal', 'vaginal_dildo', (-5), 'dick_length', 'masturbation');
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

function enterSetNormalVagAct(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Use your medium dildo', handler: (st: GameState) => {
    qspCall(s, 'komp_cam_functions', 'camming', 5, 'porn', 'request');
    qspCall(s, 'npcStat', 'D2');
    scene.img('images/pc/items/accessories/computer/camwhore37.jpg');
    if (((s as any).pcs_vag ?? 0) < 15) {
      scene.text('You take your medium dildo and roll onto your back, lifting your legs up in the air. The dildo barely fits inside your pussy, and you\'re feeling some discomfort when you begin to thrust it inside you. In a way it feels nice when you carefully fuck yourself with it, but at the same time you know your pussy is going to feel sore for a while. Your viewers aren\'t noticing much of your discomfort, and enthusiastically comment on how cute you look like this.');
    } else {
      scene.text('You take your medium dildo and roll onto your back, lifting your legs up in the air. The dildo fits inside your pussy easily, and you let out an eager moan when you begin to fuck yourself quite roughly with it.');
    }
    if (((s as any).pcs_horny ?? 0) < 100) {
      scene.text('When you put the dildo aside after a few minutes of fun, you notice you received several donations during your little show.');
    }
    qspCall(s, 'arousal', 'vaginal_dildo', (-5), 'dick_length', 'masturbation');
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

function enterSetBigVagAct(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Use your large dildo', handler: (st: GameState) => {
    qspCall(s, 'komp_cam_functions', 'camming', 5, 'porn', 'request');
    qspCall(s, 'npcStat', 'D3');
    scene.img('images/pc/items/accessories/computer/camwhore38.jpg');
    if (((s as any).pcs_vag ?? 0) < 20) {
      scene.text('You lie back on your bed and adjust the camera angle so everyone can see your body. The dildo isn\'t small, and you\'re a bit hesitant to thrust it inside you. This may have been a mistake…');
      scene.text('Figuring you can\'t back out of your show now, you slowly penetrate yourself with the dildo, wincing when it stretches your pussy uncomfortably far.');
      if (((s as any).pcs_horny ?? 0) < 100) {
        scene.text('Luckily the viewers can\'t see your face, and you quickly wipe a tear away while you gently move inside you for a moment, until you realize you\'ve done enough to meet the viewer\'s request and quickly take it out of you.');
      }
    } else {
      scene.text('You lie back on your bed and adjust the camera angle so everyone can see your body. The dildo isn\'t small, but enters you easily and you slam it inside you eagerly, coaxing a lot of lewd comments out of your viewers. They want to take its place so badly…');
      if (((s as any).pcs_horny ?? 0) < 100) {
        scene.text('The size of this particular dildo is no challenge for your vagina, and you don\'t gain a whole lot of pleasure from fucking yourself with it. The viewers enjoyed it though; when you put the dildo aside after a few minutes of fun, you notice you received several donations during your little show.');
      }
    }
    qspCall(s, 'arousal', 'vaginal_dildo', (-5), 'dick_length', 'masturbation');
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

function enterSetLargeVagAct(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Use your very large dildo', handler: (st: GameState) => {
    qspCall(s, 'komp_cam_functions', 'camming', 5, 'porn', 'request');
    qspCall(s, 'npcStat', 'D4');
    scene.img('images/pc/items/accessories/computer/camwhore39.jpg');
    if (((s as any).pcs_vag ?? 0) < 25) {
      scene.text('You smile nervously when your customers tell you to use the 25cm dildo… that\'s going to hurt! A lot! Your pussy isn\'t used to accommodating objects that large… Nevertheless, the customer is king. You won\'t get anywhere in this business if you don\'t do what your viewers want you to do.');
      scene.text('After some thought on what the best angle would be, you decide to put the camera on the ground and stand over it with your legs wide. The chat goes wild when you slide the head of the large dildo between your wet folds, and slowly attempt to work the rest in with a painful groan. Damn, maybe you should\'ve said no…');
      if (((s as any).pcs_horny ?? 0) < 100) {
        scene.text('After a few minutes you have to stop; your poor pussy aches too much to continue! You try to give your viewers a sweet smile, but several of them point out the grimace on your face. You received some tips during your show regardless.');
      }
    } else {
      scene.text('You smile confidently when your customers tell you to use the 25cm dildo. They might think they\'re challenging you, but you can take that easily!');
      scene.text('After some thought on what the best angle would be, you decide to put the camera on the ground and stand over it with your legs wide. The chat goes wild when you slide the head of the large dildo between your wet folds, and continue to thrust most of its length in with a satisfied sigh.');
      if (((s as any).pcs_horny ?? 0) < 100) {
        scene.text('After a few minutes of thrusting the dildo inside you, your legs get tired. You decide to stop, and blow a sweet kiss to the camera. Your viewer lets you know that he is very satisfied with your performance, and that he\'d love to take the dildo\'s place one day.');
      }
    }
    qspCall(s, 'arousal', 'vaginal_dildo', (-5), 'dick_length', 'masturbation');
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

function enterSetHugeVagAct(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Use your 30cm dildo', handler: (st: GameState) => {
    qspCall(s, 'komp_cam_functions', 'camming', 5, 'porn', 'request');
    qspCall(s, 'npcStat', 'D5');
    scene.img('images/pc/items/accessories/computer/camwhore40.jpg');
    if (((s as any).pcs_vag ?? 0) < 30) {
      scene.text('You smile nervously when your customers tell you to use the 25cm dildo… that\'s going to hurt! A lot! Your pussy isn\'t used to accommodate objects that large! Nevertheless, the customer is king. You won\'t get anywhere in this business if you don\'t do what your paying viewers want you to do.');
      scene.text('You rest the dildo on the bed and slowly lower yourself on top of it, making sure you mention the viewer\'s name as you do. Biting your lip you try to stifle your moans of pain when you slowly feel it stretching you beyond your limits… damn, this thing is too big!');
      if (((s as any).pcs_horny ?? 0) < 100) {
        scene.text('After a few minutes you have to stop; your poor pussy aches too much to continue! You try to give your viewers a sweet smile, but several of them point out the grimace on your face. You received some tips during your show regardless.');
      }
    } else {
      scene.text('You smile to the camera as you take the huge dildo in your hand - it\'s so large, you can\'t even fully close your fingers around the shaft! You know your pussy will be able to handle it though, and your viewers will love it!');
      scene.text('You rest the dildo on the bed and slowly lower yourself on top of it, making sure you mention the viewer\'s name as you do.');
      if (((s as any).pcs_horny ?? 0) < 100) {
        scene.text('You ride the artificial phallus enthusiastically for a few minutes, and show off your gaping tunnel of a cunt to the camera once you take it out.');
      }
    }
    qspCall(s, 'arousal', 'vaginal_dildo', (-5), 'dick_length', 'masturbation');
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

function enterSetEnormousVagAct(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Use your enormous 35cm dildo', handler: (st: GameState) => {
    qspCall(s, 'komp_cam_functions', 'camming', 5, 'porn', 'request');
    qspCall(s, 'npcStat', 'D6');
    scene.img('images/pc/items/accessories/computer/camwhore41.jpg');
    if (((s as any).pcs_vag ?? 0) < 30) {
      scene.text('You smile at the camera confidently as you grab hold of the enormous dildo and spit on the suction cup before you slap it onto the floor in front of your bed.');
      scene.text('Some of your viewers must be noticing your hesitation, because they begin to encourage you: "Come on, you can take it!"');
      scene.text('The dildo is too big for you as you expected, but the encouragement of your fans makes you go through with it anyway. You show off your well-stretched cunt to the camera, with the dildo lodged deep inside you.');
      if (((s as any).pcs_horny ?? 0) < 100) {
        scene.text('You decide to give it all you have and ride the dildo carefully, but stop after a few minutes when the friction of the dildo against your vaginal walls becomes too much to bear. Damn, that\'s going to feel sore for a while…');
      }
    } else {
      scene.text('You smile at the camera confidently as you grab hold of the enormous dildo and spit on the suction cup before you slap it onto the floor in front of your bed.');
      scene.text('Slowly guiding the head to your pussy, you wink at the camera as the tip penetrates your well-used cunt, and you lower yourself on the dildo as far as it will go. You\'re practically pinned to the ground with its enormous size inside you, but you slowly begin to ride it while you squeeze your nipples gently, making sure they look nice and erect for your viewers.');
      if (((s as any).pcs_horny ?? 0) < 100) {
        scene.text('You decide to give it all you have and ride the dildo furiously, but eventually have to stop when your legs get tired.');
      }
    }
    qspCall(s, 'arousal', 'vaginal_dildo', (-5), 'dick_length', 'masturbation');
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

function enterSetGiganticVagAct(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Use your humongous 40cm dildo', handler: (st: GameState) => {
    qspCall(s, 'komp_cam_functions', 'camming', 5, 'porn', 'request');
    qspCall(s, 'npcStat', 'D7');
    if (((s as any).pcs_vag ?? 0) < 35) {
      scene.img('images/pc/items/accessories/computer/camwhore43.jpg');
      scene.text('You smile at the camera confidently as you grab hold of the humongous dildo and spit on the suction cup before you slap it onto the floor in front of your bed.');
      scene.text('Some of your viewers must be noticing your hesitation, because they begin to encourage you: "Come on, you can take it!"');
      scene.text('The dildo is too big for you as you expected, but the encouragement of your fans makes you go through with it anyway. You show off your well-stretched cunt to the camera, with the dildo lodged deep inside you.');
      if (((s as any).pcs_horny ?? 0) < 100) {
        scene.text('after a few minutes, you have to stop; your poor pussy aches too much to continue! You try to give your viewers a sweet smile, but several of them point out the grimace on your face. You received some tips during your show regardless.');
      }
    } else {
      scene.img('images/pc/items/accessories/computer/camwhore42.jpg');
      scene.text('"You know what? I can do better!" you smile lewdly when your viewer tells you to use the biggest dildo you have. You grab two smaller ones and show them to the camera. Combined, they\'re definitely larger than the biggest dildo you have.');
      scene.text('Not giving the chat any chance to influence your decision, you immediately guide the both of them inside you and ride them expertly. They definitely fill you up, but not to the point where it becomes uncomfortable.');
      if (((s as any).pcs_horny ?? 0) < 100) {
        scene.text('Then you realize: "How am I fucking myself with two dildos at once!?"');
        scene.text('The dildos feel very pleasant inside you, even though they can\'t bring you to an orgasm. You squirm in ecstasy, carefully humping the two dildos while your chat makes all sorts of lewd comments about you.');
      }
    }
    qspCall(s, 'arousal', 'vaginal_dildo', (-5), 'dick_length', 'masturbation');
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
    case 'set_vibr_anal_act':
      enterSetVibrAnalAct(s, scene);
      break;
    case 'set_small_anal_act':
      enterSetSmallAnalAct(s, scene);
      break;
    case 'set_normal_anal_act':
      enterSetNormalAnalAct(s, scene);
      break;
    case 'set_big_anal_act':
      enterSetBigAnalAct(s, scene);
      break;
    case 'set_large_anal_act':
      enterSetLargeAnalAct(s, scene);
      break;
    case 'set_huge_anal_act':
      enterSetHugeAnalAct(s, scene);
      break;
    case 'set_enormous_anal_act':
      enterSetEnormousAnalAct(s, scene);
      break;
    case 'set_gigantic_anal_act':
      enterSetGiganticAnalAct(s, scene);
      break;
    case 'set_vibr_vag_act':
      enterSetVibrVagAct(s, scene);
      break;
    case 'set_small_vag_act':
      enterSetSmallVagAct(s, scene);
      break;
    case 'set_normal_vag_act':
      enterSetNormalVagAct(s, scene);
      break;
    case 'set_big_vag_act':
      enterSetBigVagAct(s, scene);
      break;
    case 'set_large_vag_act':
      enterSetLargeVagAct(s, scene);
      break;
    case 'set_huge_vag_act':
      enterSetHugeVagAct(s, scene);
      break;
    case 'set_enormous_vag_act':
      enterSetEnormousVagAct(s, scene);
      break;
    case 'set_gigantic_vag_act':
      enterSetGiganticVagAct(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const komp_cam_MFC_requests_one: LocationDef = {
  name: 'komp_cam_MFC_requests_one',
  title: 'One of the viewers asks: "Do you have a vibrator or dildo? I',
  region: 'other',
  description: ['One of the viewers asks: "Do you have a vibrator or dildo? I want you to put up a little show and fuck yourself with it…"'],
  enter: enter,
};
