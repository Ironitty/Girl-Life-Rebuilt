import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
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
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'komp_cam_functions', 'stop_camming');
    qspCall(s, 'internet_mobile', 'use_internet', ((s as any).subs ?? 0), 5);
    qspCall(s, 'stat', '');
    scene.img('images/pc/items/accessories/computer/camwhore2.jpg');
    // TODO-QSP: *p $access['nocamshow']
    scene.actions([
      { label: 'Leave this website', goto: ['komp', 'browse'] },
      { label: 'Go to your MFC homepage', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'internet_mobile', 'use_internet', ((s as any).subs ?? 0), 5);
    qspCall(s, 'arousal', 'end');
    scene.img('images/pc/items/accessories/computer/camwhore3.jpg');
    // TODO-QSP: dynamic text: You enter your own chatroom on the website. You currently have <<camGirl['MFC_Vi...
    scene.text(`You enter your own chatroom on the website. You currently have ${((s as any).camGirl ?? 0)?.['MFC_Viewers']} viewers and ${((s as any).camGirl ?? 0)?.['MFC_Followers']} followers.`);
    if (((s as any).totFollowersLost ?? 0) >= 1) {
      // TODO-QSP: dynamic text: You've lost <<totFollowersLost>> due to inactivity
      scene.text(`You've lost ${((s as any).totFollowersLost ?? 0)} due to inactivity`);
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'komp_cam_functions', 'start_camming', 'MFC');
  }, goto: ['komp_cam_MFC_main', 'startpage'] },
    ]);
  } },
      { label: 'Leave this website', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'komp_cam_functions', 'stop_camming');
    qspCall(s, 'internet_mobile', 'use_internet', ((s as any).subs ?? 0), 5);
    qspCall(s, 'stat', '');
  }, goto: ['komp', 'browse'] },
    ]);
  }
  scene.build();
}

function enterStartpage(s: GameState, scene: SceneBuilder): void {
  (s as any).cam_daystart = ((s as any).daystart ?? 0) + 4;
  if (((s as any).vgape ?? 0) > 10  ||  ((s as any).agape ?? 0) > 10) {
    qspCall(s, 'stat', '');
    scene.text('While you sit in your chair, you can\'t help but wince every time you move. You want to put up a show, but it hurts too much. And besides… you doubt your viewers would want to see you in your current state! You should heal up a bit before trying again.');
    scene.actions([
      { label: 'Collect your earnings and leave', handler: (st: GameState) => {
    qspCall(s, 'komp_cam_functions', 'stop_camming');
  }, goto: ['komp_cam_MFC_main', 'start'] },
    ]);
  } else {
    qspCall(s, 'stat', '');
    scene.img('images/pc/items/accessories/computer/camwhore3.jpg');
    if (((s as any).camGirl ?? 0)?.['MFC_Viewers'] === 0) {
      scene.text('You currently have no viewers. Once you turn on your webcam, things will probably get busier. ');
    } else {
      // TODO-QSP: dynamic text: You casually chat with the <<camGirl['MFC_Viewers']>> viewers currently in your ...
      scene.text(`You casually chat with the ${((s as any).camGirl ?? 0)?.['MFC_Viewers']} viewers currently in your chatroom. Once you turn on your webcam, things will probably get busier.`);
    }
    scene.actions([
      { label: 'Turn on your webcam', handler: (st: GameState) => {
    // TODO-QSP: gt 'komp_cam_MFC_main', 'waitclients', 'start'
  } },
      { label: 'Collect your earnings and leave', handler: (st: GameState) => {
    qspCall(s, 'komp_cam_functions', 'stop_camming');
  }, goto: ['komp_cam_MFC_main', 'start'] },
    ]);
  }
  scene.build();
}

function enterWaitclients(s: GameState, scene: SceneBuilder): void {
  if (((s as any).loc ?? 0) === 'bedrPar') {
    qspCall(s, 'family_schedule', '');
    if (((s as any).locat ?? 0)?.['Anya_inroom'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['komp_cam_MFC_main', 'anya_interrupted'] }]);
    }
  }
  if (((s as any).locArgs?.[1] ?? 0) !== 'start') {
    qspCall(s, 'komp_cam_functions', 'camming', 5);
  }
  qspCall(s, 'stat', '');
  if (((s as any).orgasm_or ?? 0) === 'yes'  ||  ((s as any).orgasm_or ?? 0) === 'custom') {
    (s as any).mfcdaycum = ((s as any).daystart ?? 0);
  }
  (s as any).img_source = 3;
  if (((s as any).braworntype ?? 0) === 'none') {
    (s as any).img_source = ((s as any).img_source ?? 0) + (1);
  }
  if (((s as any).pantyworntype ?? 0) === 'none') {
    (s as any).img_source = ((s as any).img_source ?? 0) + (2);
  }
  scene.img('images/pc/items/accessories/computer/camwhore\' + img_source + \'.jpg');
  if (((s as any).locArgs?.[1] ?? 0) !== 'start') {
    qspCall(s, 'komp_cam_MFC_requests', '');
  }
  if (((s as any).camGirl ?? 0)?.['MFC_Viewers'] === 0) {
    scene.text('You take a moment of rest, unfortunately, you currently have no viewers.');
  } else {
    // TODO-QSP: dynamic text: You take a moment of rest, and just chat casually with your <<camGirl['MFC_Viewe...
    scene.text(`You take a moment of rest, and just chat casually with your ${((s as any).camGirl ?? 0)?.['MFC_Viewers']} viewers.`);
  }
  // TODO-QSP: dynamic text: You have earned <<camGirl['MFC_tokens']>> tokens so far this session, which amou...
  scene.text(`You have earned ${((s as any).camGirl ?? 0)?.['MFC_tokens']} tokens so far this session, which amounts to ${qspFunc(s, 'money', 'string_profit', qspFunc(s, 'komp_cam_functions', 'tokens_to_rub', ((s as any).camGirl ?? 0)?.['MFC_tokens']))}.`);
  if (((s as any).camGirl ?? 0)?.['MFC_Followers'] > 1) {
    // TODO-QSP: dynamic text: You have <<camGirl['MFC_Followers']>> followers
    scene.text(`You have ${((s as any).camGirl ?? 0)?.['MFC_Followers']} followers`);
  }
  if (((s as any).camGirl ?? 0)?.['MFC_donate_message'] !== '') {
  }
  qspCall(s, 'komp_cam_functions', 'print_status');
  if (((s as any).pcs_stam ?? 0) < ((s as any).stammax ?? 0) / 10) {
    // TODO-QSP: act $func('wrap', 'neg', 'Dance'): $func('wrap', 'neg', '<br>You don''t have enough stamina to do th...
  } else {
    // TODO-QSP: act $func('wrap', 'neg', 'Dance'): $func('wrap', 'neg', '<br>You are too thirsty to do this.')
    if (((s as any).pcs_energy ?? 0) < 5) {
      // TODO-QSP: act $func('wrap', 'neg', 'Dance'): $func('wrap', 'neg', '<br>You are too hungry to do this.')
    } else {
      scene.actions([
        { label: 'Dance', goto: ['komp_cam_MFC_main', 'dance'] },
      ]);
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
      scene.actions([
        { label: 'Take off your bra', goto: ['komp_cam_MFC_main', 'strip_bra'] },
      ]);
    }
    if (((s as any).pantyworntype ?? 0) === 'none') {
      scene.actions([
        { label: 'Play with your pussy', goto: ['komp_cam_MFC_main', 'play_with_pussy'] },
        { label: 'Play with your ass', goto: ['komp_cam_MFC_main', 'play_with_ass'] },
      ]);
    } else {
      scene.actions([
        { label: 'Take off your panties', goto: ['komp_cam_MFC_main', 'strip_panties'] },
      ]);
    }
    if (((s as any).braworntype ?? 0) === 'none'  &&  ((s as any).pain ?? 0)?.['nippleR'] < 10  &&  ((s as any).pain ?? 0)?.['nippleL'] < 10) {
      scene.actions([
        { label: 'Pinch your nipples hard', goto: ['komp_cam_MFC_main', 'pinch_nipples'] },
      ]);
    }
    scene.actions([
      { label: 'Turn off the webcam', goto: ['komp_cam_MFC_main', 'startpage'] },
    ]);
  }
  scene.actions([
    { label: 'Wait for more viewers', goto: ['komp_cam_MFC_main', 'waitclients'] },
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
    default:
      enterStart(s, scene);
      break;
  }
}

export const komp_cam_MFC_main: LocationDef = {
  name: 'komp_cam_MFC_main',
  title: 'Dance',
  region: 'other',
  description: ['It\'s that time of the month! You feel sick to your stomach and the cramps hurt pretty badly from time to time… you\'re in no condition to earn money showing off your body.'],
  enter: enter,
};
