import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).camGirl['MFC_lastrequest'] = ((s as any).totminut ?? 0);
  qspCall(s, 'stat', '');
  scene.text('One of the viewers asks, "Do you have a dildo or something? I\'d love to see your throat skills…"');
  qspCall(s, 'komp_cam_functions', 'check_available_oral_dildo');
  if (((s as any).temp_camVars ?? 0)?.['oral_available']) {
    scene.actions([
      { label: 'Suck', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    qspCall(s, 'komp_cam_functions', 'check_available_oral_dildo');
    if (((s as any).temp_camVars ?? 0)?.['oral_small_available']) {
      qspCall(s, 'komp_cam_MFC_requests_oral', 'set_small_act');
    }
    if (((s as any).temp_camVars ?? 0)?.['oral_normal_available']) {
      qspCall(s, 'komp_cam_MFC_requests_oral', 'set_normal_act');
    }
    if (((s as any).temp_camVars ?? 0)?.['oral_big_available']) {
      qspCall(s, 'komp_cam_MFC_requests_oral', 'set_big_act');
    }
    if (((s as any).temp_camVars ?? 0)?.['oral_large_available']) {
      qspCall(s, 'komp_cam_MFC_requests_oral', 'set_large_act');
    }
    if (((s as any).temp_camVars ?? 0)?.['oral_huge_available']) {
      qspCall(s, 'komp_cam_MFC_requests_oral', 'set_huge_act');
    }
    if (((s as any).temp_camVars ?? 0)?.['oral_enormous_available']) {
      qspCall(s, 'komp_cam_MFC_requests_oral', 'set_enormous_act');
    }
    if (((s as any).temp_camVars ?? 0)?.['oral_gigantic_available']) {
      qspCall(s, 'komp_cam_MFC_requests_oral', 'set_gigantic_act');
    }
    scene.actions([
      { label: 'Can\'t find a suitable toy or you changed your mind', goto: ['komp_cam_MFC_main', 'waitclients'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Refuse', goto: ['komp_cam_MFC_main', 'waitclients'] },
  ]);
  scene.build();
}

function enterSetSmallAct(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Use your small dildo', handler: (st: GameState) => {
    qspCall(s, 'komp_cam_functions', 'camming', 5, 'porn', 'request');
    qspCall(s, 'npcStat', 'D1');
    scene.img('images/pc/items/accessories/computer/webcam/toys/throat\'+rand(1, 3)+\'.mp4');
    if (((s as any).pcs_throat ?? 0) < 10) {
      scene.text('You are terribly inexperienced at giving blowjobs. Hesitantly you take your small dildo into your mouth and do your best to put on an entertaining show.');
      scene.text('Some of your clients critize your clear lack of experience but the majority seem to at least appreciate the effort offering words of support and donations.');
    } else {
      scene.text('You are fairly inexperienced at giving blowjobs but good enough that you feel you can handle a dildo of small size.');
      scene.text('Pushing the dildo in your mouth a few times you get a little too ambitious and gag on it as it hits the back of your throat but the crowd seems appreciative of your effort.');
      scene.text('You easily handle deepthroating the small sized dildo. A few of your clients notice this and offer you something a little larger to work on.');
      scene.text('You laugh but realize that perhaps you may draw better donations if you push your limits a little more next time.');
    }
    qspCall(s, 'arousal', 'dildo_suck', (-5), 'dick_length', 'masturbation', 'deepthroat');
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
    if (((s as any).pcs_throat ?? 0) < 15) {
      scene.img('images/pc/items/accessories/computer/webcam/toys/throat\'+rand(1, 3)+\'.mp4');
      scene.text('You are terribly inexperienced at giving blowjobs. Hesitantly you take your medium dildo into your mouth and do your best to put on an entertaining show.');
      scene.text('You realize that with your inexperience you can\'t really do much with this dildo that you couldn\'t do with a smaller one. Nonetheless your clients seem to appreciate the effort and your ambition and you get a few donations.');
    } else {
      scene.img('images/pc/items/accessories/computer/webcam/toys/midthroat\'+rand(1, 3)+\'.mp4');
      scene.text('Sucking on the head of the dildo seductively you push it into your mouth giving the toy a sensual blowjob.');
      scene.img('images/pc/items/accessories/computer/webcam/toys/midthroat\'+rand(1, 3)+\'.mp4');
      scene.text('You expertly suck on the dildo. Knowing that a toy of this size poses little challenge for someone of your experience you deepthroat the full length a few times to get a rise out the crowd.');
    }
    qspCall(s, 'arousal', 'dildo_suck', (-5), 'dick_length', 'masturbation', 'deepthroat');
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

function enterSetBigAct(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Use your large dildo', handler: (st: GameState) => {
    qspCall(s, 'komp_cam_functions', 'camming', 5, 'porn', 'request');
    qspCall(s, 'npcStat', 'D3');
    if (((s as any).pcs_throat ?? 0) < 20) {
      scene.img('images/pc/items/accessories/computer/webcam/toys/throat\'+rand(1, 3)+\'.mp4');
      scene.text('You are not necessarily inexperienced at giving blowjobs but taking the large dildo into your mouth you quickly realize it is well beyond your skill level.');
      scene.text('Nonetheless your clients seem to appreciate the effort and your ambition and you get a few donations.');
    } else {
      scene.img('images/pc/items/accessories/computer/webcam/toys/bigthroat\'+rand(1, 3)+\'.mp4');
      scene.text('The large dildo slides easily down your throat as you begin to pump it back and forth to entertain the crowd.');
      scene.text('Your clients seem geniunely impressed by the show and promptly begin to donate.');
      scene.img('images/pc/items/accessories/computer/webcam/toys/bigthroat\'+rand(1, 3)+\'.mp4');
      scene.text('The large dildo slides easily down your throat as you begin to pump it back and forth to entertain the crowd.');
      scene.text('Your clients seem geniunely impressed by the show and promptly begin to donate.');
    }
    qspCall(s, 'arousal', 'dildo_suck', (-5), 'dick_length', 'masturbation', 'deepthroat');
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
    if (((s as any).pcs_throat ?? 0) < 25) {
      scene.img('images/pc/items/accessories/computer/webcam/toys/throat\'+rand(1, 3)+\'.mp4');
      scene.text('You are not necessarily inexperienced at giving blowjobs but taking the very large dildo into your mouth you quickly realize it is well beyond your skill level.');
      scene.text('Nonetheless your clients seem to appreciate the effort and your ambition and you get a few donations.');
    } else {
      scene.img('images/pc/items/accessories/computer/webcam/toys/bigthroat\'+rand(1, 3)+\'.mp4');
      scene.text('The very large dildo slides easily down your throat as you begin to pump it back and forth to entertain the crowd.');
      scene.text('Your clients seem geniunely impressed by the show and promptly begin to donate.');
      scene.img('images/pc/items/accessories/computer/webcam/toys/bigthroat\'+rand(1, 3)+\'.mp4');
      scene.text('The very large dildo slides easily down your throat as you begin to pump it back and forth to entertain the crowd.');
      scene.text('Your clients seem geniunely impressed by the show and promptly begin to donate.');
    }
    qspCall(s, 'arousal', 'dildo_suck', (-5), 'dick_length', 'masturbation', 'deepthroat');
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
    if (((s as any).pcs_throat ?? 0) < 30) {
      scene.img('images/pc/items/accessories/computer/webcam/toys/throat\'+rand(1, 3)+\'.mp4');
      scene.text('You are not necessarily inexperienced at giving blowjobs but taking the large dildo into your mouth you quickly realize it is well beyond your skill level.');
      scene.text('Nonetheless your clients seem to appreciate the effort and your ambition and you get a few donations.');
    } else {
      scene.img('images/pc/items/accessories/computer/webcam/toys/bigthroat\'+rand(1, 3)+\'.mp4');
      scene.text('The large dildo slides easily down your throat as you begin to pump it back and forth to entertain the crowd.');
      scene.text('Your clients seem geniunely impressed by the show and promptly begin to donate.');
      scene.img('images/pc/items/accessories/computer/webcam/toys/bigthroat\'+rand(1, 3)+\'.mp4');
      scene.text('The large dildo slides easily down your throat as you begin to pump it back and forth to entertain the crowd.');
      scene.text('Your clients seem geniunely impressed by the show and promptly begin to donate.');
    }
    qspCall(s, 'arousal', 'dildo_suck', (-5), 'dick_length', 'masturbation', 'deepthroat');
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
    if (((s as any).pcs_throat ?? 0) < 35) {
      scene.img('images/pc/items/accessories/computer/webcam/toys/throat\'+rand(1, 3)+\'.mp4');
      scene.text('You are not necessarily inexperienced at giving blowjobs but taking the enormous dildo into your mouth you quickly realize it is well beyond your skill level.');
      scene.text('Nonetheless your clients seem to appreciate the effort and your ambition and you get a few donations.');
    } else {
      scene.img('images/pc/items/accessories/computer/webcam/toys/extrthroat\'+rand(1, 2)+\'.mp4');
      scene.text('Wanting to truly showcase your throat skills you take the enormous dildo and start to roughly jam it down your throat.');
      scene.text('Your clients seem to be amazed at the demonstration of skill donating generously while praising your unparalleled oral ability at the same time.');
    }
    qspCall(s, 'arousal', 'dildo_suck', (-5), 'dick_length', 'masturbation', 'deepthroat');
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
    if (((s as any).pcs_throat ?? 0) < 40) {
      scene.img('images/pc/items/accessories/computer/webcam/toys/throat\'+rand(1, 3)+\'.mp4');
      scene.text('You are not necessarily inexperienced at giving blowjobs but taking the humongous dildo into your mouth you quickly realize it is well beyond your skill level.');
      scene.text('Nonetheless your clients seem to appreciate the effort and your ambition and you get a few donations.');
    } else {
      scene.img('images/pc/items/accessories/computer/webcam/toys/extrthroat\'+rand(1, 2)+\'.mp4');
      scene.text('Wanting to truly showcase your throat skills you take the humongous dildo and start to roughly jam it down your throat.');
      scene.text('Your clients seem to be amazed at the demonstration of skill donating generously while praising your unparalleled oral ability at the same time.');
    }
    qspCall(s, 'arousal', 'dildo_suck', (-5), 'dick_length', 'masturbation', 'deepthroat');
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

export const komp_cam_MFC_requests_oral: LocationDef = {
  name: 'komp_cam_MFC_requests_oral',
  title: 'One of the viewers asks, "Do you have a dildo or something? ',
  region: 'other',
  description: ['One of the viewers asks, "Do you have a dildo or something? I\'d love to see your throat skills…"'],
  enter: enter,
};
