import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'komp_cam_MFC_main';
  (s as any).menu_arg = 'start';
  qspCall(s, 'family_schedule', '');
  if (((s as any).mesec ?? 0) > 0) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'komp_cam_functions', 'stop_camming');
    qspCall(s, 'internet_mobile', 'use_internet', ((s as any).subs ?? 0), 5);
    qspCall(s, 'stat', '');
    scene.img('images/pc/items/accessories/computer/camwhore2.jpg');
    scene.text('It\'s that time of the month! You feel sick to your stomach and the cramps hurt pretty badly from time to time… you\'re in no condition to earn money showing off your body.');
    scene.actions([
      { label: 'Leave this website', goto: ['komp', 'browse'] },
    ]);
  } else {
    if (((s as any).access ?? 0)?.['nocamshow'] !== '') {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'komp_cam_functions', 'stop_camming');
      qspCall(s, 'internet_mobile', 'use_internet', ((s as any).subs ?? 0), 5);
      qspCall(s, 'stat', '');
      scene.img('images/pc/items/accessories/computer/camwhore2.jpg');
      // TODO-QSP: dynamic text: $access['nocamshow']
      scene.text('$access[\'nocamshow\']');
      scene.actions([
        { label: 'Leave this website', goto: ['komp', 'browse'] },
      ]);
    } else {
      scene.actions([
        { label: 'Go to your MFC homepage', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'internet_mobile', 'use_internet', ((st as any).subs ?? 0), 5);
    qspCall(st, 'arousal', 'end');
    scene.img('images/pc/items/accessories/computer/camwhore3.jpg');
    // TODO-QSP: dynamic text: You enter your own chatroom on the website. You currently have <<camGirl[''MFC_V...
    scene.text(`You enter your own chatroom on the website. You currently have ${((st as any).camGirl ?? 0)?.['MFC_Viewers'] ?? ''} viewers and ${((st as any).camGirl ?? 0)?.['MFC_Followers'] ?? ''} followers.`);
    if (((st as any).totFollowersLost ?? 0) >= 1) {
      // TODO-QSP: dynamic text: You''ve lost <<totFollowersLost>> due to inactivity
      scene.text(`You've lost ${((st as any).totFollowersLost ?? '')} due to inactivity`);
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'komp_cam_functions', 'start_camming', 'MFC');
    qspGoto(st, 'komp_cam_MFC_main', 'startpage');
  } },
    ]);
  } },
        { label: 'Leave this website', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'komp_cam_functions', 'stop_camming');
    qspCall(st, 'internet_mobile', 'use_internet', ((st as any).subs ?? 0), 5);
    qspCall(st, 'stat', '');
    qspGoto(st, 'komp', 'browse');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterStartpage(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'komp_cam_MFC_main';
  (s as any).menu_arg = 'startpage';
  (s as any).cam_daystart = ((s as any).daystart ?? 0) + 4;
  if (((s as any).vgape ?? 0) > 10  ||  ((s as any).agape ?? 0) > 10) {
    qspCall(s, 'stat', '');
    scene.text('While you sit in your chair, you can\'t help but wince every time you move. You want to put up a show, but it hurts too much. And besides… you doubt your viewers would want to see you in your current state! You should heal up a bit before trying again.');
    scene.actions([
      { label: 'Collect your earnings and leave', handler: (st: GameState) => {
    qspCall(st, 'komp_cam_functions', 'stop_camming');
    qspGoto(st, 'komp_cam_MFC_main', 'start');
  } },
    ]);
  } else {
    qspCall(s, 'stat', '');
    scene.img('images/pc/items/accessories/computer/camwhore3.jpg');
    if (((s as any).camGirl ?? 0)?.['MFC_Viewers'] === 0) {
      scene.text('You currently have no viewers. Once you turn on your webcam, things will probably get busier. ');
    } else {
      // TODO-QSP: dynamic text: You casually chat with the <<camGirl[''MFC_Viewers'']>> viewers currently in you...
      scene.text(`You casually chat with the ${((s as any).camGirl ?? 0)?.['MFC_Viewers'] ?? ''} viewers currently in your chatroom. Once you turn on your webcam, things will probably get busier.`);
    }
    scene.actions([
      { label: 'Turn on your webcam', goto: ['komp_cam_MFC_main', 'waitclients', 'start'] },
      { label: 'Collect your earnings and leave', handler: (st: GameState) => {
    qspCall(st, 'komp_cam_functions', 'stop_camming');
    qspGoto(st, 'komp_cam_MFC_main', 'start');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterWaitclients(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'komp_cam_MFC_main';
  (s as any).menu_arg = 'waitclients';
  if (((s as any).loc ?? 0) === 'bedrPar') {
    qspCall(s, 'family_schedule', '');
    if (((s as any).locat ?? 0)?.['Anya_inroom'] === 1) {
      qspGoto(s, 'komp_cam_MFC_main', 'anya_interrupted');
    }
  }
  if (Number((s as any).locArgs?.[1] ?? 0) !== 'start') {
    qspCall(s, 'komp_cam_functions', 'camming', 5);
  }
  qspCall(s, 'stat', '');
  if (((s as any).orgasm_or ?? 0) === 'yes'  ||  ((s as any).orgasm_or ?? 0) === 'custom') {
    (s as any).mfcdaycum = ((s as any).daystart ?? 0);
  }
  (s as any).orgasm_or = 'no';
  (s as any).orgasm_txt = '';
  (s as any).img_source = 3;
  if (((s as any).braworntype ?? 0) === 'none') {
    (s as any).img_source = ((s as any).img_source ?? 0) + (1);
  }
  if (((s as any).pantyworntype ?? 0) === 'none') {
    (s as any).img_source = ((s as any).img_source ?? 0) + (2);
  }
  scene.img('images/pc/items/accessories/computer/camwhore' + ((s as any).img_source ?? '') + '.jpg');
  if (Number((s as any).locArgs?.[1] ?? 0) !== 'start') {
    qspCall(s, 'komp_cam_MFC_requests', '');
  }
  if (((s as any).camGirl ?? 0)?.['MFC_Viewers'] === 0) {
    scene.text('You take a moment of rest, unfortunately, you currently have no viewers.');
  } else {
    // TODO-QSP: dynamic text: You take a moment of rest, and just chat casually with your <<camGirl[''MFC_View...
    scene.text(`You take a moment of rest, and just chat casually with your ${((s as any).camGirl ?? 0)?.['MFC_Viewers'] ?? ''} viewers.`);
  }
  // TODO-QSP: dynamic text: You have earned <<camGirl[''MFC_tokens'']>> tokens so far this session, which am...
  scene.text(`You have earned ${((s as any).camGirl ?? 0)?.['MFC_tokens'] ?? ''} tokens so far this session, which amounts to ${qspFunc(s, 'money', 'string_profit', qspFunc(s, 'komp_cam_functions', 'tokens_to_rub', ((s as any).camGirl ?? 0)?.['MFC_tokens'] ?? ''))}.`);
  if (((s as any).camGirl ?? 0)?.['MFC_Followers'] > 1) {
    // TODO-QSP: dynamic text: You have <<camGirl[''MFC_Followers'']>> followers
    scene.text(`You have ${((s as any).camGirl ?? 0)?.['MFC_Followers'] ?? ''} followers`);
  }
  if (((s as any).camGirl ?? 0)?.['MFC_donate_message'] !== '') {
  }
  qspCall(s, 'komp_cam_functions', 'print_status');
  if (((s as any).pcs_stam ?? 0) < ((s as any).stammax ?? 0) / 10) {
    // TODO-QSP: act $func('wrap', 'neg', 'Dance'): $func('wrap', 'neg', '<br>You don''t have enough stamina to do th...
  } else {
    if (((s as any).pcs_hydra ?? 0) < 5) {
      // TODO-QSP: act $func('wrap', 'neg', 'Dance'): $func('wrap', 'neg', '<br>You are too thirsty to do this.')
    } else {
      if (((s as any).pcs_energy ?? 0) < 5) {
        // TODO-QSP: act $func('wrap', 'neg', 'Dance'): $func('wrap', 'neg', '<br>You are too hungry to do this.')
      } else {
        scene.actions([
          { label: 'Dance', goto: ['komp_cam_MFC_main', 'dance'] },
        ]);
      }
    }
  }
  if (((s as any).braworntype ?? 0) !== 'none'  &&  ((s as any).pantyworntype ?? 0) !== 'none') {
    scene.actions([
      { label: 'Perform a striptease', goto: ['komp_cam_MFC_main', 'striptease'] },
    ]);
  }
  if (((s as any).braworntype ?? 0) === 'none') {
    scene.actions([
      { label: 'Idly play with your boobs', goto: ['komp_cam_MFC_main', 'play_with_tits'] },
    ]);
  } else {
    if (((s as any).braworntype ?? 0) !== 'bodysuit') {
      scene.actions([
        { label: 'Take off your bra', goto: ['komp_cam_MFC_main', 'strip_bra'] },
      ]);
    }
  }
  if (((s as any).pantyworntype ?? 0) === 'none') {
    scene.actions([
      { label: 'Play with your pussy', goto: ['komp_cam_MFC_main', 'play_with_pussy'] },
      { label: 'Play with your ass', goto: ['komp_cam_MFC_main', 'play_with_ass'] },
    ]);
  } else {
    if (((s as any).pantyworntype ?? 0) !== 'bodysuit') {
      scene.actions([
        { label: 'Take off your panties', goto: ['komp_cam_MFC_main', 'strip_panties'] },
      ]);
    }
  }
  if (((s as any).braworntype ?? 0) === 'none'  &&  ((s as any).pain ?? 0)?.['nippleR'] < 10  &&  ((s as any).pain ?? 0)?.['nippleL'] < 10) {
    scene.actions([
      { label: 'Pinch your nipples hard', goto: ['komp_cam_MFC_main', 'pinch_nipples'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for more viewers', goto: ['komp_cam_MFC_main', 'waitclients'] },
    { label: 'Turn off the webcam', goto: ['komp_cam_MFC_main', 'startpage'] },
  ]);
  scene.build();
}

function enterDance(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'komp_cam_functions', 'camming', 5, 'dance');
  qspCall(s, 'exercise', 'tier1', (-5), 'dancero');
  qspCall(s, 'stat', '');
  if (((s as any).braworntype ?? 0) !== 'none'  &&  ((s as any).pantyworntype ?? 0) !== 'none') {
    (s as any).video_source = 4;
  } else {
    if (((s as any).braworntype ?? 0) === 'none'  &&  ((s as any).pantyworntype ?? 0) !== 'none') {
      (s as any).video_source = 7;
    } else {
      if (((s as any).braworntype ?? 0) !== 'none'  &&  ((s as any).pantyworntype ?? 0) === 'none') {
        (s as any).video_source = 6;
      } else {
        (s as any).video_source = 5;
      }
    }
  }
  scene.img('images/pc/items/accessories/computer/webcam/strip' + ((s as any).video_source ?? '') + '.mp4');
  scene.text('Turning on some music you dance erotically hoping to entice some viewers.');
  if (((s as any).camGirl ?? 0)?.['MFC_donate_message'] !== '') {
    // TODO-QSP: $camGirl['MFC_donate_message']
  }
  qspCall(s, 'arousal', 'porn', (-5));
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['komp_cam_MFC_main', 'waitclients'] },
  ]);
  scene.build();
}

function enterStriptease(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'komp_cam_functions', 'camming', 5, 'erotic');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/sauna/sex/striptease4.mp4');
  scene.text('You decide that making a show of stripping yourself might encourage some attention. Repositioning your cam, you stand up and dance as you remove your underwear.');
  if (((s as any).camGirl ?? 0)?.['MFC_donate_message'] !== '') {
    // TODO-QSP: $camGirl['MFC_donate_message']
  }
  qspCall(s, 'exp_gain', 'dancero', 1);
  qspCall(s, 'underwear', 'remove');
  qspCall(s, 'arousal', 'striptease', 5);
  qspCall(s, 'arousal', 'porn', (-5));
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['komp_cam_MFC_main', 'waitclients'] },
  ]);
  scene.build();
}

function enterStripBra(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'komp_cam_functions', 'camming', 5, 'erotic');
  qspCall(s, 'stat', '');
  if (((s as any).pantyworntype ?? 0) !== 'none') {
    scene.img('images/pc/items/accessories/computer/camwhore4.jpg');
  } else {
    scene.img('images/pc/items/accessories/computer/camwhore5.jpg');
  }
  scene.text('Even though no one requested you to do so, you figure showing off your nice boobs might get some more viewers into the channel. You slowly take off your bra and wiggle your breasts seductively at the camera.');
  if (((s as any).camGirl ?? 0)?.['MFC_donate_message'] !== '') {
    // TODO-QSP: $camGirl['MFC_donate_message']
  }
  qspCall(s, 'bras', 'remove');
  qspCall(s, 'arousal', 'porn', (-5));
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['komp_cam_MFC_main', 'waitclients'] },
  ]);
  scene.build();
}

function enterPlayWithTits(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'komp_cam_functions', 'camming', 5, 'erotic');
  qspCall(s, 'stat', '');
  if (((s as any).alko ?? 0) >= 4) {
    qspCall(s, 'pain', '', 2, 'slap', 'breasts');
    scene.img('images/pc/items/accessories/computer/camwhore80.jpg');
  } else {
    scene.img('images/pc/items/accessories/computer/camwhore9.jpg');
  }
  scene.text('You chat with your viewers for a little while and begin to play with your boobs absent-mindedly in a slow moment. It feels quite nice! You knead your boobs and play with them more and more intently, almost completely forgetting about the camera.');
  if (((s as any).camGirl ?? 0)?.['MFC_donate_message'] !== '') {
    // TODO-QSP: $camGirl['MFC_donate_message']
  }
  qspCall(s, 'arousal', 'porn', (-5));
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['komp_cam_MFC_main', 'waitclients'] },
  ]);
  scene.build();
}

function enterStripPanties(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'komp_cam_functions', 'camming', 5, 'erotic');
  qspCall(s, 'stat', '');
  if (((s as any).braworntype ?? 0) !== 'none') {
    scene.img('images/pc/items/accessories/computer/camwhore5.jpg');
  } else {
    scene.img('images/pc/items/accessories/computer/camwhore6.jpg');
  }
  scene.text('You know that the fewer clothes you have on, the more viewers will be inclined to check out your channel. You slowly take off your panties in front of the camera, rewarding the viewers already in your channel to a free show when you expose your naked pussy to them.');
  if (((s as any).camGirl ?? 0)?.['MFC_donate_message'] !== '') {
    // TODO-QSP: $camGirl['MFC_donate_message']
  }
  qspCall(s, 'panties', 'remove');
  qspCall(s, 'arousal', 'porn', (-5));
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['komp_cam_MFC_main', 'waitclients'] },
  ]);
  scene.build();
}

function enterPlayWithPussy(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'komp_cam_functions', 'camming', 5, 'erotic');
  qspCall(s, 'stat', '');
  scene.img('images/pc/items/accessories/computer/camwhore11.jpg');
  scene.text('You get bored during a slow moment in the chat, and begin to play with your pussy without giving it another thought.');
  scene.text('"How does that feel, girl?" one of your viewers asks. "I bet you love fingering yourself, with a bunch of strangers watching you!" another adds.');
  scene.text('Giving them a defensive smile, you shrug and reply with one hand, while you keep rubbing your clit slowly with the other.');
  (s as any).orgasm_or = 'no';
  (s as any).orgasm_txt = '';
  qspCall(s, 'arousal', 'porn', (-5));
  if (((s as any).pcs_horny ?? 0) >= 100) {
    (s as any).orgasm_txt = 'Oh crap! You misjudged your endurance, and suddenly squirm and gasp in front of the camera. You\'re having an orgasm! When it subsides, you look at your current viewer count. Damn… you just came in front of ' + ((s as any).camGirl ?? 0)?.['MFC_Viewers'] + ' users, completely free of charge!';
    (s as any).orgasm_or = 'custom';
  }
  qspCall(s, 'arousal', 'vaginal_finger', (-5));
  qspCall(s, 'stat', '');
  if (((s as any).camGirl ?? 0)?.['MFC_donate_message'] !== '') {
    // TODO-QSP: $camGirl['MFC_donate_message']
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['komp_cam_MFC_main', 'waitclients'] },
  ]);
  scene.build();
}

function enterPlayWithAss(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'komp_cam_functions', 'camming', 5, 'erotic');
  if (((s as any).pcs_ass ?? 0) < 10) {
    (s as any).analplay = ((s as any).analplay ?? 0) + (1);
  }
  scene.img('images/pc/items/accessories/computer/camwhore45.jpg');
  scene.text('You put two fingers in your mouth and generously cover them in saliva, and then turn your back to the camera. Much to the appreciation of your viewers, you give them a short preview of what an anal show would look like from you. You finger your anus for the camera for a little while, giving your viewers a happy smile the whole time.');
  (s as any).orgasm_or = 'no';
  (s as any).orgasm_txt = '';
  qspCall(s, 'arousal', 'porn', (-5));
  if (((s as any).pcs_horny ?? 0) >= 100) {
    (s as any).orgasm_txt = 'It feels too good to stop! Before you know it, your fingers are repeatedly penetrating your ass and you moan excitedly, barely keeping yourself from screaming. You just had an anal orgasm in front of ' + ((s as any).camGirl ?? 0)?.['MFC_Viewers'] + ' viewers, completely free of charge! Oops…';
    (s as any).orgasm_or = 'custom';
  }
  qspCall(s, 'arousal', 'anal_finger', (-5));
  qspCall(s, 'stat', '');
  if (((s as any).camGirl ?? 0)?.['MFC_donate_message'] !== '') {
    // TODO-QSP: $camGirl['MFC_donate_message']
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['komp_cam_MFC_main', 'waitclients'] },
  ]);
  scene.build();
}

function enterPinchNipples(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'komp_cam_functions', 'camming', 5, 'fetish');
  qspCall(s, 'pain', '', 2, 'pinch', 'nipples');
  qspCall(s, 'stat', '');
  scene.img('images/pc/items/accessories/computer/camwhore80.jpg');
  scene.text('You\'re getting too turned on, and need to slow yourself down a little!');
  scene.text('You tightly pinch your nipples and pull hard on them. It hurts a lot, and the sharp pain lowers your excitement by quite a lot. Nevertheless, your viewers enjoy the free show and have no idea you actually did that for your own good.');
  qspCall(s, 'arousal', 'porn', (-5));
  qspCall(s, 'stat', '');
  if (((s as any).camGirl ?? 0)?.['MFC_donate_message'] !== '') {
    // TODO-QSP: $camGirl['MFC_donate_message']
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['komp_cam_MFC_main', 'waitclients'] },
  ]);
  scene.build();
}

function enterAnyaInterrupted(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'komp_cam_functions', 'stop_camming');
  qspCall(s, 'stat', '');
  scene.img('images/pc/items/accessories/computer/camwhore2.jpg');
  // TODO-QSP: dynamic text: Suddenly you hear the handle of your door creak, and an annoyed voice shouting: ...
  scene.text(`Suddenly you hear the handle of your door creak, and an annoyed voice shouting: "${((s as any).pcs_nickname ?? '')}, what the hell!? Why is the door locked? Let me in!"`);
  scene.text('Oh crap, it\'s your sister! "Sorry everyone, the show\'s over!" you whisper to the camera and you close the stream and hide the website. You quickly put your clothes back on and open your door, trying to avoid the scrutinizing gaze of your sister.');
  scene.text('When she\'s no longer paying attention to you, you open the site again and find yourself in the main lobby of MyFreeCams. You\'re a bit bummed that you couldn\'t get more out of that session, but cash in your earnings.');
  qspCall(s, 'internet_mobile', 'add_limitation', 'noporn', 'You can\'t watch porn with your sister in the room');
  qspCall(s, 'internet_mobile', 'add_limitation', 'nocamshow', 'You can\'t do a camshow with your sister in the room');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['komp_cam_MFC_main', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'startpage':
      enterStartpage(s, scene);
      break;
    case 'waitclients':
      enterWaitclients(s, scene);
      break;
    case 'dance':
      enterDance(s, scene);
      break;
    case 'striptease':
      enterStriptease(s, scene);
      break;
    case 'strip_bra':
      enterStripBra(s, scene);
      break;
    case 'play_with_tits':
      enterPlayWithTits(s, scene);
      break;
    case 'strip_panties':
      enterStripPanties(s, scene);
      break;
    case 'play_with_pussy':
      enterPlayWithPussy(s, scene);
      break;
    case 'play_with_ass':
      enterPlayWithAss(s, scene);
      break;
    case 'pinch_nipples':
      enterPinchNipples(s, scene);
      break;
    case 'anya_interrupted':
      enterAnyaInterrupted(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const komp_cam_MFC_main: LocationDef = {
  name: 'komp_cam_MFC_main',
  title: 'Dance',
  region: 'other',
  enter: enter,
};
