import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).camGirl['MFC_lastrequest'] = ((s as any).totminut ?? 0);
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
        { label: 'Ignore him', handler: (st: GameState) => {
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
      scene.img('images/pc/items/accessories/computer/camwhore45.jpg');
      scene.text('You\'re still a virgin! He\'ll probably like it if you finger your ass instead…');
      scene.text('Without saying a word you turn your ass to the camera and lick your fingers before slowly working one in past your tight sphincter. Then you add a second! With the two fingers inside you, you gradually begin to move your hand back and forth, slowly fucking your ass with them.');
      if (((s as any).pcs_horny ?? 0) < 100) {
        scene.text('Your viewer can tell you\'re not very experienced having things up your ass yet and enjoys you fingering yourself. He quickly donates some tokens as promised, and you thrust your fingers in a few more times before returning to your chair with a tinge of regret. That actually felt nice, but there\'s money to be made…');
      }
      if (((s as any).pcs_ass ?? 0) < 25) {
        scene.img('images/pc/items/accessories/computer/camwhore46.jpg');
        scene.text('You\'re still a virgin! He\'ll probably like it if you finger your ass instead…');
        scene.text('Without saying a word you turn your ass to the camera and lick your fingers before slowly working one in past your tight sphincter. Then you add a second! And a third! With the three fingers firmly inside you, you slowly begin to move your hand back and forth, slowly fucking your ass with them.');
        if (((s as any).pcs_horny ?? 0) < 100) {
          scene.text('Your viewer enjoys you fingering yourself, eager to have finally found a girl that isn\'t too squeamish to take some fingers in her ass without crying about it. He quickly donates some tokens as promised, and you thrust your fingers in a few more times before returning to your chair with a tinge of regret. That actually felt nice, but there\'s money to be made…');
        }
      } else {
        scene.img('images/pc/items/accessories/computer/camwhore47.jpg');
        scene.text('You\'re still a virgin! He\'ll probably like it if you finger your ass instead…');
        scene.text('Without saying a word you turn your ass to the camera and lick your fingers before slowly working one in past your tight sphincter. Then you add a second! And a third! And even a fourth!');
        scene.text('With four fingers firmly inside you, you slowly begin to move your hand back and forth, fucking your ass with them. It\'s only a matter of time before your whole hand will fit in now, they\'re going to love that!');
        if (((s as any).pcs_horny ?? 0) < 100) {
          scene.text('Your viewer enjoys you fingering yourself, eager to have finally found a girl that isn\'t too squeamish to take some fingers in her ass without crying about it. He quickly donates some tokens as promised, and you thrust your fingers in a few more times before returning to your chair with a tinge of regret. That actually felt nice, but there\'s money to be made…');
        }
        scene.img('images/pc/items/accessories/computer/camwhore48.jpg');
        scene.text('You\'re still a virgin! He\'ll probably like it if you finger your ass instead…');
        scene.text('Without saying a word you turn your ass to the camera and lick your fingers before slowly working one in past your tight sphincter. Then you add a second! And a third! And even a fourth! The chat explodes when you work your thumb in too, and even manage to go in a bit further. That\'s right… you\'re practically fisting yourself, in front of an audience!');
        if (((s as any).pcs_horny ?? 0) < 100) {
          scene.text('Your viewers are absolutely ecstatic and are extremely impressed with the ease at which you take large objects (such as your hand) in your ass. A few of them donate some tokens, hoping you\'ll use their money to buy the biggest dildo you can find.');
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
    }
    scene.actions([
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
      qspCall(s, 'npcStat', 'D2');
      scene.img('images/pc/items/accessories/computer/camwhore50.jpg');
      scene.text('You quickly look around you, trying to find something you can stick up your ass to make the viewer happy. How about those Sharpies?');
      scene.text('"How many do you think I can take, guys?" you smile at the camera, while you show a fistful of Sharpies to the camera. "Bonus points to who gets it right!"');
      scene.text('You\'re not that experienced with taking things up your ass yet, but can\'t help but laugh at the viewers typing: "ALL OF THEM!!!11"');
      scene.text('Even though you give it your best shot, you have to yield at 3. For now… this could be fun as a recurring challenge!');
      if (((s as any).pcs_horny ?? 0) < 100) {
        scene.text('The sharpies stretch your anus nicely, but you\'re not horny enough to orgasm from this. You make an effort of trying to add a fourth in front of the camera, but take them out and return to your seat once you think you won\'t get any more donations.');
      }
      if (((s as any).pcs_ass ?? 0) < 25) {
        qspCall(s, 'npcStat', 'D3');
        scene.img('images/pc/items/accessories/computer/camwhore51.jpg');
        scene.text('You quickly look around you, trying to find something you can stick up your ass to make the viewer happy. How about that remote?');
        scene.text('The remote feels a bit uncomfortable, with its angular shape and sharp edges, but you still manage to get nearly half of it inside your ass.');
        if (((s as any).pcs_horny ?? 0) < 100) {
          scene.text('The remote stretches your anus nicely, but you\'re not horny enough to orgasm from this. You make an effort of fucking yourself with it in front of the camera, but take it out and return to your seat once you think you won\'t get any more donations.');
        }
      } else {
        qspCall(s, 'npcStat', 'D4');
        scene.img('images/pc/items/accessories/computer/camwhore52.jpg');
        scene.text('You quickly look around you, trying to find something you can stick up your ass to make the viewer happy. Then you ponder: "How about the phone in the hallway?"');
        scene.text('The horn doesn\'t go in very easily, with the earpiece being the widest part of the whole thing! However, you eventually manage to work it past your sphincter and let out a happy sigh. Is there anything you won\'t do for your viewers?');
        if (((s as any).pcs_horny ?? 0) < 100) {
          scene.text('The phone stretches your anus nicely, but you\'re not horny enough to orgasm from this. You make an effort of fucking yourself with it in front of the camera, but take it out and return to your seat once you think you won\'t get any more donations. You smile to yourself, hoping you\'ll remember to clean it before you make a phone call…');
        }
        qspCall(s, 'npcStat', 'D5');
        scene.img('images/pc/items/accessories/computer/camwhore53.jpg');
        scene.text('You quickly look around you, trying to find something you can stick up your ass to make the viewer happy. What would your fans want to see inside your ass today… how about that spray can of hairspray?');
        scene.text('With a lewd smile on your face, you pretend to stroke the can for a moment, while you tell your viewers: "Pretend that this is your cock, right now…"');
        scene.text('Then you guide it to your anus and penetrate yourself with it, moaning lewdly while you thrust it in deeper and deeper.');
        if (((s as any).pcs_horny ?? 0) < 100) {
          scene.text('You masturbate furiously while you slowly fuck yourself with the canister, much to the enthusiasm of your chat. They\'re all encouraging you by now, and cheer amongst themselves when they see you fake an orgasm on their screens. Several of them donate some tokens to you. You didn\'t actually orgasm, but you know what your viewers want to see!');
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
    }
    qspCall(s, 'willpower', 'exhib', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Ignore him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Ignore him', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['komp_cam_MFC_main', 'waitclients'] },
      ]);
    }
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
      scene.img('images/pc/items/accessories/computer/camwhore34.jpg');
      scene.text('"I\'d rather be riding your dick right now, but since you\'re not here…" you tell the viewer, guiding your hand to your snatch while you wink at the camera.');
      scene.text('You slowly work two fingers inside your vagina and begin to fuck yourself with them, while the viewer who originally requested you do this is encouraging you to go on.');
      if (((s as any).pcs_horny ?? 0) < 100) {
        scene.text('You stimulate yourself for a few minutes, nearly forgetting about the camera pointed at you. While you gain your breath you blow a kiss at the camera and let the person who posted the request know that was just for him. He readily donates some extra tokens, appreciating the personal touch.');
      }
      qspCall(s, 'arousal', 'vaginal_finger', (-5));
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
      qspCall(s, 'stat', '');
      if (((s as any).camGirl ?? 0)?.['MFC_donate_message'] !== '') {
        // TODO-QSP: $camGirl['MFC_donate_message']
      }
      scene.actions([
        { label: 'Continue', goto: ['komp_cam_MFC_main', 'waitclients'] },
      ]);
    }
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
  }
  scene.build();
}

export const komp_cam_MFC_requests_one: LocationDef = {
  name: 'komp_cam_MFC_requests_one',
  title: 'One of the viewers asks: "Do you have a vibrator or dildo? I',
  region: 'other',
  description: ['One of the viewers asks: "Do you have a vibrator or dildo? I want you to put up a little show and fuck yourself with it…"'],
  enter: enter,
};
