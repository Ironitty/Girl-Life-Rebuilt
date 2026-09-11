import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).guy = ((s as any).guy ?? 0) + (1);
  (s as any).cumnostd = 1;
  if (((s as any).prostitute ?? 0)?.['client_scene'] === 'Blowjob'  ||  ((Math.floor(Math.random() * 3) + 0) < 2  &&  ((s as any).prostitute ?? 0)?.['scene_reduction'] === 0)) {
    (s as any).prostitute['blowjob_first'] = 1;
    scene.actions([{ label: 'Continue', goto: ['prostitution_car_sex', 'Blowjob'] }]);
  } else {
    // TODO-QSP: gt 'prostitution_car_sex', $prostitute['client_scene']
  }
  scene.build();
}

function enterBlowjob(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/prostitution/car/normal/sex/blowjob/bj_\'+rand(1, 27)+\'.mp4');
  if (((s as any).prostitute ?? 0)?.['scene_repeat'] === 0) {
    // TODO-QSP: 'At the sight of your naked body he wastes no time to undress and reveal his '+iif($prostitute['clie...
  }
  if (((s as any).prostitute ?? 0)?.['client_scene'] === 'Blowjob'  &&  ((s as any).prostitute ?? 0)?.['scene_repeat'] === 0) {
    if (((s as any).prostitute_client_condom ?? 0) === 'Yes') {
      qspCall(s, 'prostitution_functions', 'remove_condom');
      // TODO-QSP: dynamic text: You take your condom and put it on his <<dick>>cm dick.
      scene.text(`You take your condom and put it on his ${((s as any).dick ?? 0)}cm dick.`);
    }
    // TODO-QSP: iif(rand(1, 10) < 6, '"Don''t keep me waiting,', '"Get to work,')+iif(rand(1, 10) < 4, ' whore', ' g...
  } else {
    if (((s as any).prostitute ?? 0)?.['client_scene'] === 'Blowjob'  &&  ((s as any).prostitute ?? 0)?.['scene_repeat'] === 1) {
      scene.text('You\'re giving it your best. Switching up your routine, sometimes you only tease the head of his dick, lick his balls or deepthroat him as he praises your effort, but as time moves on he doesn\'t seem to be close to shooting his load.');
    } else {
      if (((s as any).prostitute ?? 0)?.['client_scene'] === 'Blowjob'  &&  ((s as any).prostitute ?? 0)?.['scene_repeat'] === 2) {
        scene.text('His stamina is impressive and despite your best efforts he still doesn\'t cum. Your jaw aches and you\'re getting tired of sucking him.');
        qspCall(s, 'pain', '', 1, 'mouth', 'stretch');
      } else {
        if (((s as any).prostitute_client_condom ?? 0) === 'Yes') {
          qspCall(s, 'prostitution_functions', 'remove_condom');
          // TODO-QSP: dynamic text: You take your condom and put it on his <<dick>>cm dick.
          scene.text(`You take your condom and put it on his ${((s as any).dick ?? 0)}cm dick.`);
        }
        scene.text('"Get me ready," he commands and you obediently start to suck him hard.');
      }
    }
  }
  // TODO-QSP: dynamic text: You wrap your lips around his member'+iif($prostitute_client_condom = 'Yes', '; ...
  scene.text('You wrap your lips around his member\'+iif($prostitute_client_condom = \'Yes\', \'; with those modern condom there\'s no real difference to bare skin. You suck and run\', \' sucking and running\')+\' your tongue along his shaft while your hands fondle his balls. "Don\'t be shy \'+iif(rand(1, 10) < 4, \'whore\', \'girl\')+\'," he murmurs before pushing his cock further into your mouth.');
  qspCall(s, 'arousal', 'bj', ((((s as any).prostitute ?? 0)?.['scene_reduction'] === 0) ? (6) : (12)), 'unknown', 'prostitution', 'no_orgasm_msg');
  qspCall(s, 'stat', '');
  if (((s as any).prostitute ?? 0)?.['client_scene'] !== 'Blowjob') {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt 'prostitution_car_sex', $prostitute['client_scene']
  } },
    ]);
  } else {
    if (((s as any).prostitute ?? 0)?.['client_scene'] === 'Blowjob'  &&  ((((s as any).prostitute ?? 0)?.['scene_repeat'] === 0  &&  (Math.floor(Math.random() * 6) + 1) < 4)  ||  (((s as any).prostitute ?? 0)?.['scene_repeat'] === 1  &&  (Math.floor(Math.random() * 6) + 1) < 3))  &&  ((s as any).prostitute ?? 0)?.['scene_reduction'] === 0) {
      (s as any).prostitute['scene_repeat'] = ((s as any).prostitute['scene_repeat'] ?? 0) + (1);
      scene.actions([
        { label: 'Continue', goto: ['prostitution_car_sex', 'Blowjob'] },
      ]);
    } else {
      if (((s as any).prostitute_fetish ?? 0)?.['rimjob'] !== 'blocked'  &&  ((s as any).prostitute ?? 0)?.['client_creampie'] === 0  &&  ((Math.floor(Math.random() * 100) + 1) + ((s as any).prostitute ?? 0)?.['rim_pity_counter']) > 90) {
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'prostitution_car_sex', 'rimjob_start');
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'prostitution_car_sex', 'switch');
  } },
        ]);
      }
    }
  }
  scene.build();
}

function enterVaginal(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/prostitution/car/normal/sex/vaginal/vaginal_\'+rand(1, 45)+\'.mp4');
  if (((s as any).prostitute ?? 0)?.['scene_repeat'] === 0) {
    if (((s as any).prostitute ?? 0)?.['blowjob_first'] === 0) {
      scene.text('Once you both are alone you quickly take of your clothes and present your pussy to him. At the sight of your pussy he wastes no time unzipping his pants to reveal his already hard cock.');
    }
    if (((s as any).prostitute_client_condom ?? 0) === 'Yes'  &&  ((s as any).prostitute ?? 0)?.['condom'] === 0) {
      qspCall(s, 'prostitution_functions', 'remove_condom');
      // TODO-QSP: dynamic text: You take your condom and put it on his <<dick>>cm dick.
      scene.text(`You take your condom and put it on his ${((s as any).dick ?? 0)}cm dick.`);
    }
    qspCall(s, 'arousal', 'auto_lube', 'vaginal');
    // TODO-QSP: dynamic text: You spread your legs and help guide his member to the right place. '+iif(pcs_hor...
    scene.text('You spread your legs and help guide his member to the right place. \'+iif(pcs_horny > 40, \'You are getting wetter by the second, hoping to get some pleasure out of it, too. "You\'re already wet for me? Good girl,"\', \'He rubs his dick against your pussy and doesn\'t seem to care that your pussy is still dry. "Get ready, bitch,"\')+\' he says and pushes his cock eagerly inside.');
  } else {
    if (((s as any).prostitute ?? 0)?.['scene_repeat'] === 1) {
      scene.text('He shows no signs of getting close as he fucks you as hard as in the beginning. "I could fuck you all day," he says.');
    } else {
      if (((s as any).prostitute ?? 0)?.['scene_repeat'] === 2) {
        scene.text('"Your pussy feels amazing," he says and rams his dick inside you as hard as he can. His stamina is as impressive as is his assault relentless.');
      }
    }
  }
  qspCall(s, 'arousal', 'vaginal', ((((s as any).prostitute ?? 0)?.['scene_reduction'] === 0) ? (6) : (12)), 'unknown', 'prostitution', 'no_orgasm_msg');
  qspCall(s, 'stat', '');
  if (((((s as any).prostitute ?? 0)?.['scene_repeat'] === 0  &&  (Math.floor(Math.random() * 6) + 1) < 4)  ||  (((s as any).prostitute ?? 0)?.['scene_repeat'] === 1  &&  (Math.floor(Math.random() * 6) + 1) < 3))  &&  ((s as any).prostitute ?? 0)?.['scene_reduction'] === 0) {
    (s as any).prostitute['scene_repeat'] = ((s as any).prostitute['scene_repeat'] ?? 0) + (1);
    scene.actions([
      { label: 'Continue', goto: ['prostitution_car_sex', 'Vaginal'] },
    ]);
  } else {
    if (((s as any).prostitute_fetish ?? 0)?.['rimjob'] !== 'blocked'  &&  ((s as any).prostitute ?? 0)?.['client_creampie'] === 0  &&  ((Math.floor(Math.random() * 100) + 1) + ((s as any).prostitute ?? 0)?.['rim_pity_counter']) > 90) {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'prostitution_car_sex', 'rimjob_start');
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'prostitution_car_sex', 'switch');
  } },
      ]);
    }
  }
  scene.build();
}

function enterAnal(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/prostitution/car/normal/sex/anal/anal_\'+rand(1, 19)+\'.mp4');
  if (((s as any).prostitute ?? 0)?.['scene_repeat'] === 0) {
    if (((s as any).prostitute ?? 0)?.['blowjob_first'] === 0) {
      scene.text('Once you both are alone you quickly take of your clothes and present your pussy to him. At the sight of your pussy he wastes no time unzipping his pants to reveal his already hard cock.');
    }
    if (((s as any).prostitute_client_condom ?? 0) === 'Yes'  &&  ((s as any).prostitute ?? 0)?.['condom'] === 0) {
      qspCall(s, 'prostitution_functions', 'remove_condom');
      // TODO-QSP: dynamic text: You take your condom and put it on his <<dick>>cm dick.
      scene.text(`You take your condom and put it on his ${((s as any).dick ?? 0)}cm dick.`);
    }
    qspCall(s, 'arousal', 'auto_lube', 'anal');
    scene.text('You spread your legs and help guide his member to the right place. He pushes his member against your asshole and without giving you a word of warning forces his dick inside.');
  } else {
    if (((s as any).prostitute ?? 0)?.['scene_repeat'] === 1) {
      scene.text('Again and again he pushes his cock inside your ass, forcing it deeper and deeper with every thrust.');
    } else {
      if (((s as any).prostitute ?? 0)?.['scene_repeat'] === 2) {
        scene.text('He isn\'t stopping, you realize while he fucks you with an amazing stamina.');
        scene.text('"Fuck, you have a great ass," he groans as he thrusts balls-deep inside you.');
        qspCall(s, 'pain', '', 1, 'asshole', 'stretch');
        qspCall(s, 'pain', '', 1, 'asshole', 'tear');
      }
    }
  }
  qspCall(s, 'arousal', 'anal', ((((s as any).prostitute ?? 0)?.['scene_reduction'] === 0) ? (6) : (12)), 'unknown', 'prostitution', 'no_orgasm_msg');
  qspCall(s, 'stat', '');
  if (((((s as any).prostitute ?? 0)?.['scene_repeat'] === 0  &&  (Math.floor(Math.random() * 6) + 1) < 4)  ||  (((s as any).prostitute ?? 0)?.['scene_repeat'] === 1  &&  (Math.floor(Math.random() * 6) + 1) < 3))  &&  ((s as any).prostitute ?? 0)?.['scene_reduction'] === 0) {
    (s as any).prostitute['scene_repeat'] = ((s as any).prostitute['scene_repeat'] ?? 0) + (1);
    scene.actions([
      { label: 'Continue', goto: ['prostitution_car_sex', 'Anal'] },
    ]);
  } else {
    if (((s as any).prostitute_fetish ?? 0)?.['rimjob'] !== 'blocked'  &&  ((s as any).prostitute ?? 0)?.['client_creampie'] === 0  &&  ((Math.floor(Math.random() * 100) + 1) + ((s as any).prostitute ?? 0)?.['rim_pity_counter']) > 90) {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'prostitution_car_sex', 'rimjob_start');
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'prostitution_car_sex', 'switch');
  } },
      ]);
    }
  }
  scene.build();
}

function enterRimjobStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  (s as any).prostitute['rim_pity_counter'] = 0;
  (s as any).prostitute['payment'] = 500 + ((s as any).pcs_hotcat ?? 0) * 5 + ((s as any).iif ?? 0)((((s as any).prostitute ?? 0)?.['piercing_tongue'] === ((s as any).pcs_piercings ?? 0)?.['tongue']  ||  ((s as any).prostitute ?? 0)?.['pirsA'] === ((s as any).pcs_piercings ?? 0)?.['tongue'])  &&  ((s as any).pcs_piercings ?? 0)?.['tongue'] > 0, ((s as any).pcs_piercings ?? 0)?.['tongue'] * 15, 0);
  qspCall(s, 'stat', '');
  // TODO-QSP: iif(rand(0, 1) = 0 or $prostitute_fetish['rimjob'] = '', 'Even after ten more minutes he still doesn...
  if (((s as any).prostitute_fetish ?? 0)?.['rimjob'] === '') {
    scene.text('<br>He wants you to do what? Licking his ass? You think shocked and look down to his ass. You knew that anal would be a possibility, but this? You don\'t even have time to think about it more, before he asks, "and?" He clearly wants you to quickly make a decision.');
    scene.text('<br>Content Warning: Ass-licking/Rimjob');
    qspCall(s, 'prostitution_car_sex', 'rimjob_decision');
    // TODO-QSP: act $func('wrap', 'neg', 'Block this type of content'):
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    (s as any).prostitute['payment'] = 0;
    (s as any).prostitute['client_rimjob'] = 0;
    (s as any).prostitute_fetish['rimjob'] = 'blocked';
    qspCall(s, 'stat', '');
    scene.text('You shake your head, you will never fall so low to do something like this. "No, I don\'t do something like this." He looks disappointed, but doesn\'t say anything, before you resume what you did before this short intermezzo.');
    scene.actions([
      { label: 'Continue', goto: ['prostitution_car_sex', 'switch'] },
    ]);
  }
  qspCall(s, 'prostitution_car_sex', 'rimjob_decision');
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'Blowjob':
      enterBlowjob(s, scene);
      break;
    case 'Vaginal':
      enterVaginal(s, scene);
      break;
    case 'Anal':
      enterAnal(s, scene);
      break;
    case 'rimjob_start':
      enterRimjobStart(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const prostitution_car_sex: LocationDef = {
  name: 'prostitution_car_sex',
  title: '<br>Content Warning: Ass-licking/Rimjob',
  region: 'other',
  enter: enter,
};
