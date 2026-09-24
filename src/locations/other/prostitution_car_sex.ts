import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).guy = ((s as any).guy ?? 0) + (1);
  (s as any).cumnostd = 1;
  if (((s as any).prostitute ?? 0)?.['client_scene'] === 'Blowjob'  ||  ((Math.floor(Math.random() * 3) + 0) < 2  &&  ((s as any).prostitute ?? 0)?.['scene_reduction'] === 0)) {
    ((s as any).prostitute = (s as any).prostitute ?? {})['blowjob_first'] = 1;
    qspGoto(s, 'prostitution_car_sex', 'Blowjob');
  } else {
    qspGoto(s, 'prostitution_car_sex', (((s as any).prostitute ?? {})['client_scene']));
  }
  // TODO-QSP: end
  scene.build();
}

function enterBlowjob(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/shared/prostitution/car/...
  scene.text(`<center><video autoplay loop ${((s as any).set_imgh ?? '')} src="images/shared/prostitution/car/normal/sex/blowjob/bj_` + (Math.floor(Math.random() * 27) + 1) + '.mp4"></video></center>');
  if (((s as any).prostitute ?? 0)?.['scene_repeat'] === 0) {
    // TODO-QSP: 'At the sight of your naked body he wastes no time to undress and reveal his '+iif($prostitute['clie...
  }
  if (((s as any).prostitute ?? 0)?.['client_scene'] === 'Blowjob'  &&  ((s as any).prostitute ?? 0)?.['scene_repeat'] === 0) {
    if (((s as any).prostitute_client_condom ?? 0) === 'Yes') {
      qspCall(s, 'prostitution_functions', 'remove_condom');
      // TODO-QSP: dynamic text: You take your condom and put it on his <<dick>>cm dick.
      scene.text(`You take your condom and put it on his ${((s as any).dick ?? '')}cm dick.`);
    }
    // TODO-QSP: iif(rand(1, 10) < 6, '"Don''t keep me waiting,', '"Get to work,')+iif(rand(1, 10) < 4, ' whore', ' g...
  } else {
    if (((s as any).prostitute ?? 0)?.['client_scene'] === 'Blowjob'  &&  ((s as any).prostitute ?? 0)?.['scene_repeat'] === 1) {
      scene.text('You\'re giving it your best. Switching up your routine, sometimes you only tease the head of his dick, lick his balls or deepthroat him as he praises your effort, but as time moves on he doesn\'t seem to be close to shooting his load.');
    } else {
      if (((s as any).prostitute ?? 0)?.['client_scene'] === 'Blowjob'  &&  ((s as any).prostitute ?? 0)?.['scene_repeat'] === 2) {
        scene.text('His stamina is impressive and despite your best efforts he still doesn\'t cum. Your jaw aches and you\'re getting tired of sucking him.');
        qspCall(s, 'pain', '1', 'mouth', 'stretch');
      } else {
        if (((s as any).prostitute_client_condom ?? 0) === 'Yes') {
          qspCall(s, 'prostitution_functions', 'remove_condom');
          // TODO-QSP: dynamic text: You take your condom and put it on his <<dick>>cm dick.
          scene.text(`You take your condom and put it on his ${((s as any).dick ?? '')}cm dick.`);
        }
        scene.text('"Get me ready," he commands and you obediently start to suck him hard.');
      }
    }
  }
  // TODO-QSP: dynamic text: 'You wrap your lips around his member'+iif($prostitute_client_condom = 'Yes', ';...
  scene.text('You wrap your lips around his member' + ((((s as any).prostitute_client_condom ?? 0) === 'Yes') ? ('; with those modern condom there\'s no real difference to bare skin. You suck and run') : (' sucking and running')) + ' your tongue along his shaft while your hands fondle his balls. "Don\'t be shy ' + (((Math.floor(Math.random() * 10) + 1) < 4) ? ('whore') : ('girl')) + '," he murmurs before pushing his cock further into your mouth.');
  qspCall(s, 'arousal', 'bj', ((((s as any).prostitute ?? 0)?.['scene_reduction'] === 0) ? (6) : (12)), 'unknown', 'prostitution', 'no_orgasm_msg');
  qspCall(s, 'stat', '');
  if (((s as any).prostitute ?? 0)?.['client_scene'] !== 'Blowjob') {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => { qspGoto(st, 'prostitution_car_sex', ((st as any).prostitute['client_scene'] ?? '')); } },
    ]);
  } else {
    if (((s as any).prostitute ?? 0)?.['client_scene'] === 'Blowjob'  &&  ((((s as any).prostitute ?? 0)?.['scene_repeat'] === 0  &&  (Math.floor(Math.random() * 6) + 1) < 4)  ||  (((s as any).prostitute ?? 0)?.['scene_repeat'] === 1  &&  (Math.floor(Math.random() * 6) + 1) < 3))  &&  ((s as any).prostitute ?? 0)?.['scene_reduction'] === 0) {
      ((s as any).prostitute = (s as any).prostitute ?? {})['scene_repeat'] = ((s as any).prostitute['scene_repeat'] ?? 0) + (1);
      scene.actions([
        { label: 'Continue', goto: ['prostitution_car_sex', 'Blowjob'] },
      ]);
    } else {
      if (((s as any).prostitute_fetish ?? 0)?.['rimjob'] !== 'blocked'  &&  ((s as any).prostitute ?? 0)?.['client_creampie'] === 0  &&  ((Math.floor(Math.random() * 100) + 1) + ((s as any).prostitute ?? 0)?.['rim_pity_counter']) > 90) {
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'prostitution_car_sex', '');
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'prostitution_car_sex', '');
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterVaginal(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/shared/prostitution/car/...
  scene.text(`<center><video autoplay loop ${((s as any).set_imgh ?? '')} src="images/shared/prostitution/car/normal/sex/vaginal/vaginal_` + (Math.floor(Math.random() * 45) + 1) + '.mp4"></video></center>');
  if (((s as any).prostitute ?? 0)?.['scene_repeat'] === 0) {
    if (((s as any).prostitute ?? 0)?.['blowjob_first'] === 0) {
      scene.text('Once you both are alone you quickly take of your clothes and present your pussy to him. At the sight of your pussy he wastes no time unzipping his pants to reveal his already hard cock.');
    }
    if (((s as any).prostitute_client_condom ?? 0) === 'Yes'  &&  ((s as any).prostitute ?? 0)?.['condom'] === 0) {
      qspCall(s, 'prostitution_functions', 'remove_condom');
      // TODO-QSP: dynamic text: You take your condom and put it on his <<dick>>cm dick.
      scene.text(`You take your condom and put it on his ${((s as any).dick ?? '')}cm dick.`);
    }
    qspCall(s, 'arousal', 'auto_lube', 'vaginal');
    // TODO-QSP: dynamic text: 'You spread your legs and help guide his member to the right place. '+iif(pcs_ho...
    scene.text('You spread your legs and help guide his member to the right place. ' + ((((s as any).pcs_horny ?? 0) > 40) ? ('You are getting wetter by the second, hoping to get some pleasure out of it, too. "You\'re already wet for me? Good girl,"') : ('He rubs his dick against your pussy and doesn\'t seem to care that your pussy is still dry. "Get ready, bitch,"')) + ' he says and pushes his cock eagerly inside.');
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
    ((s as any).prostitute = (s as any).prostitute ?? {})['scene_repeat'] = ((s as any).prostitute['scene_repeat'] ?? 0) + (1);
    scene.actions([
      { label: 'Continue', goto: ['prostitution_car_sex', 'Vaginal'] },
    ]);
  } else {
    if (((s as any).prostitute_fetish ?? 0)?.['rimjob'] !== 'blocked'  &&  ((s as any).prostitute ?? 0)?.['client_creampie'] === 0  &&  ((Math.floor(Math.random() * 100) + 1) + ((s as any).prostitute ?? 0)?.['rim_pity_counter']) > 90) {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'prostitution_car_sex', '');
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'prostitution_car_sex', '');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAnal(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/shared/prostitution/car/...
  scene.text(`<center><video autoplay loop ${((s as any).set_imgh ?? '')} src="images/shared/prostitution/car/normal/sex/anal/anal_` + (Math.floor(Math.random() * 19) + 1) + '.mp4"></video></center>');
  if (((s as any).prostitute ?? 0)?.['scene_repeat'] === 0) {
    if (((s as any).prostitute ?? 0)?.['blowjob_first'] === 0) {
      scene.text('Once you both are alone you quickly take of your clothes and present your pussy to him. At the sight of your pussy he wastes no time unzipping his pants to reveal his already hard cock.');
    }
    if (((s as any).prostitute_client_condom ?? 0) === 'Yes'  &&  ((s as any).prostitute ?? 0)?.['condom'] === 0) {
      qspCall(s, 'prostitution_functions', 'remove_condom');
      // TODO-QSP: dynamic text: You take your condom and put it on his <<dick>>cm dick.
      scene.text(`You take your condom and put it on his ${((s as any).dick ?? '')}cm dick.`);
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
        qspCall(s, 'pain', '1', 'asshole', 'stretch');
        qspCall(s, 'pain', '1', 'asshole', 'tear');
      }
    }
  }
  qspCall(s, 'arousal', 'anal', ((((s as any).prostitute ?? 0)?.['scene_reduction'] === 0) ? (6) : (12)), 'unknown', 'prostitution', 'no_orgasm_msg');
  qspCall(s, 'stat', '');
  if (((((s as any).prostitute ?? 0)?.['scene_repeat'] === 0  &&  (Math.floor(Math.random() * 6) + 1) < 4)  ||  (((s as any).prostitute ?? 0)?.['scene_repeat'] === 1  &&  (Math.floor(Math.random() * 6) + 1) < 3))  &&  ((s as any).prostitute ?? 0)?.['scene_reduction'] === 0) {
    ((s as any).prostitute = (s as any).prostitute ?? {})['scene_repeat'] = ((s as any).prostitute['scene_repeat'] ?? 0) + (1);
    scene.actions([
      { label: 'Continue', goto: ['prostitution_car_sex', 'Anal'] },
    ]);
  } else {
    if (((s as any).prostitute_fetish ?? 0)?.['rimjob'] !== 'blocked'  &&  ((s as any).prostitute ?? 0)?.['client_creampie'] === 0  &&  ((Math.floor(Math.random() * 100) + 1) + ((s as any).prostitute ?? 0)?.['rim_pity_counter']) > 90) {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'prostitution_car_sex', '');
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'prostitution_car_sex', '');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterRimjobStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  ((s as any).prostitute = (s as any).prostitute ?? {})['rim_pity_counter'] = 0;
  ((s as any).prostitute = (s as any).prostitute ?? {})['payment'] = 500 + ((s as any).pcs_hotcat ?? 0) * 5 + ((s as any).iif ?? 0)((((s as any).prostitute ?? 0)?.['piercing_tongue'] === ((s as any).pcs_piercings ?? 0)?.['tongue']  ||  ((s as any).prostitute ?? 0)?.['pirsA'] === ((s as any).pcs_piercings ?? 0)?.['tongue'])  &&  ((s as any).pcs_piercings ?? 0)?.['tongue'] > 0, ((s as any).pcs_piercings ?? 0)?.['tongue'] * 15, 0);
  qspCall(s, 'stat', '');
  // TODO-QSP: iif(rand(0, 1) = 0 or $prostitute_fetish['rimjob'] = '', 'Even after ten more minutes he still doesn...
  if (((s as any).prostitute_fetish ?? 0)?.['rimjob'] === '') {
    scene.text('<br>He wants you to do what? Licking his ass? You think shocked and look down to his ass. You knew that anal would be a possibility, but this? You don\'t even have time to think about it more, before he asks, "and?" He clearly wants you to quickly make a decision.');
    scene.text('<br>Content Warning: Ass-licking/Rimjob');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRimjobDecision(s, scene); (s as any).locArgs = __savedLocArgs; }
    // TODO-QSP: act $func('wrap', 'neg', 'Block this type of content'):
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    ((s as any).prostitute = (s as any).prostitute ?? {})['payment'] = 0;
    ((s as any).prostitute = (s as any).prostitute ?? {})['client_rimjob'] = 0;
    ((s as any).prostitute_fetish = (s as any).prostitute_fetish ?? {})['rimjob'] = 'blocked';
    qspCall(s, 'stat', '');
    scene.text('You shake your head, you will never fall so low to do something like this. "No, I don\'t do something like this." He looks disappointed, but doesn\'t say anything, before you resume what you did before this short intermezzo.');
    scene.actions([
      { label: 'Continue', goto: ['prostitution_car_sex', 'switch'] },
    ]);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRimjobDecision(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  // TODO-QSP: end
  scene.build();
}

function enterRimjobDecision(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'prostitution_functions', 'will_rimming', 'resist', ((((s as any).prostitute_fetish ?? 0)?.['rimjob'] === 'yes') ? ('hard') : ('easy')));
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Decline', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Decline', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    ((st as any).prostitute = (st as any).prostitute ?? {})['payment'] = 0;
    ((st as any).prostitute = (st as any).prostitute ?? {})['client_rimjob'] = 0;
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: '"Sorry, I don''t do something like this," you '+iif($prostitute_fetish['rimjob'...
    scene.text('"Sorry, I don\'t do something like this," you ' + ((((st as any).prostitute_fetish ?? 0)?.['rimjob'] !== 'undecided') ? ('lie') : ('say')) + (((Math.floor(Math.random() * 2) + 0)) ? (', but he doesn\'t seem to care. "No problem, most girls don\'t do it," he tells you') : ('. He looks disappointed, but doesn\'t say anything')) + ', before you resume what you did before this short intermezzo.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['prostitution_car_sex', 'switch'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Accept', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    ((st as any).prostitute = (st as any).prostitute ?? {})['client_rimjob'] = 1;
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: "No problem, honey," you reply with a smile on your lips, "but money first." He ...
    scene.text(`"No problem, honey," you reply with a smile on your lips, "but money first." He eagerly pulls out his wallet and hands you the agreed upon amount of ${qspFunc(s, 'money', 'string_profit', ((st as any).prostitute ?? 0)?.['payment'] ?? '')}.`);
    ((st as any).prostitute = (st as any).prostitute ?? {})['earnings_day'] = ((st as any).prostitute['earnings_day'] ?? 0) + (((st as any).prostitute ?? 0)?.['payment']);
    if (((st as any).prostitute ?? 0)?.['payment_method'] === 1) {
      qspCall(st, 'money', 'earn', ((st as any).prostitute ?? 0)?.['payment'], 'cash');
    }
    ((st as any).prostitute = (st as any).prostitute ?? {})['payment'] = 0;
    scene.actions([
      { label: 'Dig in', goto: ['prostitution_car_sex', 'switch'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSwitch(s: GameState, scene: SceneBuilder): void {
  if (((s as any).prostitute ?? 0)?.['client_rimjob'] === 1) {
    qspGoto(s, 'prostitution_car_sex', 'cumshot', 'rimjob');
  } else {
    if (((s as any).prostitute_fetish ?? 0)?.['rimjob'] !== 'blocked') {
      ((s as any).prostitute = (s as any).prostitute ?? {})['rim_pity_counter'] = ((s as any).prostitute['rim_pity_counter'] ?? 0) + (2);
    }
  }
  if (((s as any).prostitute ?? 0)?.['client_scene'] === 'Blowjob') {
    if (((s as any).prostitute_client_cumshot ?? 0) === 'Inside'  ||  ((s as any).prostitute ?? 0)?.['client_creampie'] === 1) {
      qspGoto(s, 'prostitution_car_sex', 'cumshot', 'mouth');
    } else {
      qspGoto(s, 'prostitution_car_sex', 'cumshot', 'facial');
    }
  } else {
    if (((s as any).prostitute ?? 0)?.['client_scene'] === 'Vaginal') {
      if (((s as any).prostitute_client_cumshot ?? 0) === 'Inside'  ||  ((s as any).prostitute ?? 0)?.['client_creampie'] === 1) {
        qspGoto(s, 'prostitution_car_sex', 'cumshot', 'vaginal_creampie');
      } else {
        if (((s as any).prostitute_client_cumshot ?? 0) === 'Outside  ||  Condom'  &&  ((s as any).prostitute ?? 0)?.['client_creampie'] === 0) {
          (s as any).prostitute_cumshot_rand = (Math.floor(Math.random() * 5) + 0);
          if (((s as any).prostitute_cumshot_rand ?? 0) < 3) {
            qspGoto(s, 'prostitution_car_sex', 'cumshot', 'stomach');
          } else {
            if (((s as any).prostitute_cumshot_rand ?? 0) === 3) {
              qspGoto(s, 'prostitution_car_sex', 'cumshot', 'butt');
            } else {
              qspGoto(s, 'prostitution_car_sex', 'cumshot', 'facial');
            }
          }
        } else {
          if (((s as any).prostitute_client_cumshot ?? 0) === 'Outside'  &&  ((s as any).prostitute ?? 0)?.['client_creampie'] === 0) {
            scene.text('You can feel it, he is getting close.');
            scene.actions([
              { label: 'Trust him to pull out', handler: (st: GameState) => {
    (st as any).prostitute_cumshot_rand = (Math.floor(Math.random() * 100) + 1);
    if (((st as any).prostitute_cumshot_rand ?? 0) <= 10) {
      ((st as any).prostitute = (st as any).prostitute ?? {})['accident'] = 1;
      qspGoto(st, 'prostitution_car_sex', 'cumshot', 'vaginal_creampie');
    } else {
      if (((st as any).prostitute_cumshot_rand ?? 0) > 10  &&  ((st as any).prostitute_cumshot_rand ?? 0) <= 60) {
        qspGoto(st, 'prostitution_car_sex', 'cumshot', 'stomach');
      } else {
        if (((st as any).prostitute_cumshot_rand ?? 0) > 60  &&  ((st as any).prostitute_cumshot_rand ?? 0) <= 90) {
          qspGoto(st, 'prostitution_car_sex', 'cumshot', 'butt');
        } else {
          qspGoto(st, 'prostitution_car_sex', 'cumshot', 'facial');
        }
      }
    }
  } },
              { label: 'Remind him to pull out', handler: (st: GameState) => {
    (st as any).prostitute_cumshot_rand = (Math.floor(Math.random() * 100) + 1);
    if (((st as any).prostitute_cumshot_rand ?? 0) <= 5) {
      ((st as any).prostitute = (st as any).prostitute ?? {})['accident'] = 1;
      qspGoto(st, 'prostitution_car_sex', 'cumshot', 'vaginal_creampie');
    } else {
      if (((st as any).prostitute_cumshot_rand ?? 0) > 5  &&  ((st as any).prostitute_cumshot_rand ?? 0) <= 60) {
        qspGoto(st, 'prostitution_car_sex', 'cumshot', 'stomach');
      } else {
        if (((st as any).prostitute_cumshot_rand ?? 0) > 60  &&  ((st as any).prostitute_cumshot_rand ?? 0) <= 90) {
          qspGoto(st, 'prostitution_car_sex', 'cumshot', 'butt');
        } else {
          qspGoto(st, 'prostitution_car_sex', 'cumshot', 'facial');
        }
      }
    }
  } },
            ]);
          }
        }
      }
    } else {
      if (((s as any).prostitute ?? 0)?.['client_scene'] === 'Anal') {
        if (((s as any).prostitute_client_cumshot ?? 0) === 'Inside'  ||  ((s as any).prostitute ?? 0)?.['client_creampie'] === 1) {
          qspGoto(s, 'prostitution_car_sex', 'cumshot', 'anal_creampie');
        } else {
          if (((s as any).prostitute_client_cumshot ?? 0) === 'Outside  ||  Condom'  &&  ((s as any).prostitute ?? 0)?.['client_creampie'] === 0) {
            (s as any).prostitute_cumshot_rand = (Math.floor(Math.random() * 6) + 0);
            if (((s as any).prostitute_cumshot_rand ?? 0) < 2) {
              qspGoto(s, 'prostitution_car_sex', 'cumshot', 'stomach');
            } else {
              if (((s as any).prostitute_cumshot_rand ?? 0) >= 2  ||  ((s as any).prostitute_cumshot_rand ?? 0) < 5) {
                qspGoto(s, 'prostitution_car_sex', 'cumshot', 'butt');
              } else {
                if (((s as any).prostitute_cumshot_rand ?? 0) === 5) {
                  qspGoto(s, 'prostitution_car_sex', 'cumshot', 'facial');
                }
              }
            }
          } else {
            if (((s as any).prostitute_client_cumshot ?? 0) === 'Outside'  &&  ((s as any).prostitute ?? 0)?.['client_creampie'] === 0) {
              (s as any).prostitute_cumshot_rand = (Math.floor(Math.random() * 100) + 1);
              if (((s as any).prostitute_cumshot_rand ?? 0) <= 10) {
                qspGoto(s, 'prostitution_car_sex', 'cumshot', 'anal_creampie');
              } else {
                if (((s as any).prostitute_cumshot_rand ?? 0) > 10  &&  ((s as any).prostitute_cumshot_rand ?? 0) <= 50) {
                  qspGoto(s, 'prostitution_car_sex', 'cumshot', 'butt');
                } else {
                  if (((s as any).prostitute_cumshot_rand ?? 0) > 50  &&  ((s as any).prostitute_cumshot_rand ?? 0) <= 90) {
                    qspGoto(s, 'prostitution_car_sex', 'cumshot', 'stomach');
                  } else {
                    qspGoto(s, 'prostitution_car_sex', 'cumshot', 'facial');
                  }
                }
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

function enterCumshot(s: GameState, scene: SceneBuilder): void {
  if (((s as any).prostitute ?? 0)?.['condom'] === 0  &&  ((s as any).prostitute ?? 0)?.['client_scene'] === 'Blowjob') {
    qspCall(s, 'prostitution_functions', 'std_check_oral');
  } else {
    qspCall(s, 'prostitution_functions', 'std_check');
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'rimjob') {
    qspCall(s, 'prostitution_functions', 'std_check_oral', 'low');
    qspGoto(s, 'prostitution_car_sex', 'rimjob_end');
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'mouth') {
      // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/shared/prostitution/car/...
      scene.text(`<center><video autoplay loop ${((s as any).set_imgh ?? '')} src="images/shared/prostitution/car/normal/sex/cum/mouth_` + (Math.floor(Math.random() * 6) + 1) + '.mp4"></video></center>');
      // TODO-QSP: dynamic text: '"'+iif(rand(1, 10) < 4, 'Bitch, ', '')+'I''m cumming." He says'+iif(prostitute[...
      scene.text('"' + (((Math.floor(Math.random() * 10) + 1) < 4) ? ('Bitch, ') : ('')) + 'I\'m cumming." He says' + ((((s as any).prostitute ?? 0)?.['scene_repeat'] === 0) ? ('') : (' finally')) + ((((s as any).prostitute_client_condom ?? 0) === 'Yes') ? (', pulls the condom off ') : (' ')) + 'and pushes his cock back inside your mouth and shoots his load down your throat.');
      if (((s as any).prostitute_client_cumshot ?? 0) !== 'Inside') {
        scene.text('"That wasn\'t what we agreed on," you say angrily after he pulls his dick out of your mouth.');
        scene.text('"Shut up, as if you don\'t do that every day. Do you really think I pull out and ruin the seat?" He replies annoyed. "Now get dressed, I have other things to do."');
      }
      qspCall(s, 'npcgeneratec', '0', 'a client', (Math.floor(Math.random() * 26) + 30));
      qspCall(s, 'boyStat', '$npclastgenerated');
      qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0));
      qspCall(s, 'stat', '');
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'facial') {
        // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/shared/prostitution/car/...
        scene.text(`<center><video autoplay loop ${((s as any).set_imgh ?? '')} src="images/shared/prostitution/car/normal/sex/cum/face_` + (Math.floor(Math.random() * 7) + 1) + '.mp4"></video></center>');
        // TODO-QSP: dynamic text: '"'+iif(rand(1, 10) < 4, 'Bitch, ', '')+'I''m cumming." The man says'+iif(prosti...
        scene.text('"' + (((Math.floor(Math.random() * 10) + 1) < 4) ? ('Bitch, ') : ('')) + 'I\'m cumming." The man says' + ((((s as any).prostitute ?? 0)?.['scene_repeat'] === 0) ? ('') : (' finally')) + ((((s as any).prostitute_client_condom ?? 0) === 'Yes') ? (', pulls off the condom ') : (' ')) + 'and shoots his cum all over your face.');
        qspCall(s, 'cum_call', 'face', 'a client');
        (s as any).facial = ((s as any).facial ?? 0) + (1);
        if ((Math.floor(Math.random() * 100) + 1) > 95  &&  ((s as any).pcs_makeup ?? 0) > 1) {
          (s as any).pcs_makeup = 0;
        }
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 'vaginal_creampie') {
          // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/shared/prostitution/car/...
          scene.text(`<center><video autoplay loop ${((s as any).set_imgh ?? '')} src="images/shared/prostitution/car/normal/sex/cum/pussy_` + (Math.floor(Math.random() * 7) + 1) + '.mp4"></video></center>');
          if (((s as any).prostitute ?? 0)?.['accident'] === 1  &&  ((s as any).prostitute ?? 0)?.['client_creampie'] === 0  &&  ((s as any).prostitute_client_cumshot ?? 0) !== 'Inside') {
            ((s as any).prostitute = (s as any).prostitute ?? {})['payment'] = ((s as any).prostitute['payment'] ?? 0) + (300);
            scene.text('He speeds up for a moment and then shoots his cum deep inside you.');
            scene.text('You look at him, but before you can say anything he pulls out and looks at the mess he made. "Fuck, I\'m really sorry. I\'ll pay extra."');
            if (((s as any).prostitute ?? 0)?.['reminded'] === 0) {
              scene.text('You sigh, but don\'t say anything. There is nothing you can do about it anyway.');
            } else {
              scene.text('"Seriously? I reminded you to pull out," you shout.');
              scene.text('He actually looks really sorry about it. "Come on, please don\'t be mad, you are an awesome fuck and I couldn\'t stop myself. Really, I\'m sorry." He apologies again.');
              scene.text('"Fine", you sigh. "But pay up."');
            }
          } else {
            if (((s as any).prostitute ?? 0)?.['client_creampie'] === 1  &&  ((s as any).prostitute_client_cumshot ?? 0) !== 'Inside') {
              // TODO-QSP: dynamic text: 'He'+iif(prostitute['scene_repeat'] = 0, ' ', ' finally ')+' stops and pulls out...
              scene.text('He' + ((((s as any).prostitute ?? 0)?.['scene_repeat'] === 0) ? (' ') : (' finally ')) + ' stops and pulls out, but only for a little while. He pushes himself back in, but something feels different. He cums before you can say anything, cock still buried deep in your pussy and without a condom. He groans and shoots his cum deep inside you. "Take it, bitch!" He screams.');
              scene.text('"What\'s wrong with you?" You scream while he slips out of your pussy. "You stupid son of a…"');
              // TODO-QSP: iif($prostitute_brand['text_pubic'] = 'cumslut', '"Stop complaining cumslut," he taunts you with you...
            } else {
              // TODO-QSP: dynamic text: 'He'+iif(prostitute['scene_repeat'] = 0, ' ', ' finally ')+'moans and you feel t...
              scene.text('He' + ((((s as any).prostitute ?? 0)?.['scene_repeat'] === 0) ? (' ') : (' finally ')) + 'moans and you feel the warmth of his cum filling your pussy. With one last moan, he shoots the rest of his load inside you. "Fuck, that was good' + (((Math.floor(Math.random() * 10) + 1) < 4) ? (' whore') : ('')) + '," he sighs while zipping up.');
            }
          }
          qspCall(s, 'cum_call', '', 'a client');
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 'stomach') {
            if (((s as any).prostitute ?? 0)?.['client_scene'] === 'Anal') {
              // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/shared/prostitution/car/...
              scene.text(`<center><video autoplay loop ${((s as any).set_imgh ?? '')} src="images/shared/prostitution/car/normal/sex/cum/abelly_` + (Math.floor(Math.random() * 10) + 1) + '.mp4"></video></center>');
            } else {
              // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/shared/prostitution/car/...
              scene.text(`<center><video autoplay loop ${((s as any).set_imgh ?? '')} src="images/shared/prostitution/car/normal/sex/cum/pbelly_` + (Math.floor(Math.random() * 10) + 1) + '.mp4"></video></center>');
            }
            // TODO-QSP: iif($prostitute_client_condom = 'Yes', 'The man'+iif(prostitute['scene_repeat'] = 0, ' ', ' finally ...
            qspCall(s, 'cum_call', 'stomach', 'a client');
            qspCall(s, 'cum_call', 'labia', 'a client');
          } else {
            if (String((s as any).locArgs?.[1] ?? '') === 'butt') {
              if (((s as any).prostitute ?? 0)?.['client_scene'] === 'Anal') {
                // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/shared/prostitution/car/...
                scene.text(`<center><video autoplay loop ${((s as any).set_imgh ?? '')} src="images/shared/prostitution/car/normal/sex/cum/abutt_` + (Math.floor(Math.random() * 4) + 1) + '.mp4"></video></center>');
              } else {
                // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/shared/prostitution/car/...
                scene.text(`<center><video autoplay loop ${((s as any).set_imgh ?? '')} src="images/shared/prostitution/car/normal/sex/cum/pbutt_` + (Math.floor(Math.random() * 4) + 1) + '.mp4"></video></center>');
              }
              // TODO-QSP: iif($prostitute_client_condom = 'Yes', 'The man'+iif(prostitute['scene_repeat'] = 0, ' ', ' finally ...
              qspCall(s, 'cum_call', 'butt', 'a client');
            } else {
              if (String((s as any).locArgs?.[1] ?? '') === 'anal_creampie') {
                // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/shared/prostitution/car/...
                scene.text(`<center><video autoplay loop ${((s as any).set_imgh ?? '')} src="images/shared/prostitution/car/normal/sex/cum/anal_` + (Math.floor(Math.random() * 2) + 1) + '.mp4"></video></center>');
                if (((s as any).prostitute ?? 0)?.['client_creampie'] === 1  &&  ((s as any).prostitute_client_cumshot ?? 0) !== 'Inside') {
                  // TODO-QSP: dynamic text: 'For several more minutes he pounds your ass until he finally stops'+iif($prosti...
                  scene.text('For several more minutes he pounds your ass until he finally stops' + ((((s as any).prostitute_client_condom ?? 0) === 'Yes') ? ('and pulls out for a second before he pushes back inside.') : (', cock still buried deep in your ass.')) + ' He groans and you can feel spurts of warm cum fill you.');
                  scene.text('"What\'s wrong with you?" You scream while he slips out of your abused hole.');
                  // TODO-QSP: iif($prostitute_brand['text_pubic'] = 'cumslut', '"Stop complaining cumslut," he taunts you with you...
                } else {
                  // TODO-QSP: dynamic text: 'He'+iif(prostitute['scene_repeat'] = 0, ' ', ' finally ')+'moans and you feel t...
                  scene.text('He' + ((((s as any).prostitute ?? 0)?.['scene_repeat'] === 0) ? (' ') : (' finally ')) + 'moans and you feel the warmth of his cum filling your ass. With one last moan, he shoots the rest of his load deep inside your bowls. "God, yes take it' + (((Math.floor(Math.random() * 10) + 1) < 5) ? (' whore') : (' bitch')) + '," he sighs.');
                  scene.text('"That was great, thanks for that," he adds.');
                  if (((s as any).prostitute_client_cumshot ?? 0) !== 'Inside') {
                    ((s as any).prostitute = (s as any).prostitute ?? {})['payment'] = ((s as any).prostitute['payment'] ?? 0) + (100);
                    scene.text('"Did you just cum inside me?" You ask him. "You didn\'t pay for that!"');
                    scene.text('He looks puzzled. "Really? I didn\'t?" He asks and when you shake your head he looks sorry. "Sorry, I totally forgot."');
                    scene.text('"Fine", you sigh. "But pay up."');
                  }
                }
                qspCall(s, 'cum_call', 'anus', 'a client');
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).prostitute ?? 0)?.['payment'] > 0) {
    // TODO-QSP: dynamic text: He pulls out his wallet and hands you an additional <<$func(''money'', ''string_...
    scene.text(`He pulls out his wallet and hands you an additional ${qspFunc(s, 'money', 'string_profit', ((s as any).prostitute ?? 0)?.['payment'] ?? '')}.`);
    ((s as any).prostitute = (s as any).prostitute ?? {})['earnings_day'] = ((s as any).prostitute['earnings_day'] ?? 0) + (((s as any).prostitute ?? 0)?.['payment']);
    if (((s as any).prostitute_status ?? 0)?.['main'] === -1  ||  ((s as any).prostitute_georgiy ?? 0)?.['payment_method'] === 1) {
      qspCall(s, 'money', 'earn', ((s as any).prostitute ?? 0)?.['payment'], 'cash');
    }
    ((s as any).prostitute = (s as any).prostitute ?? {})['payment'] = 0;
  }
  if (((s as any).prostitute ?? 0)?.['client_scene'] === 'Blowjob') {
    qspCall(s, 'arousal', 'bj', 2, 'unknown', 'prostitution', 'no_orgasm_msg');
  } else {
    if (((s as any).prostitute ?? 0)?.['client_scene'] === 'Vaginal') {
      qspCall(s, 'arousal', 'vaginal', 2, 'unknown', 'prostitution', 'no_orgasm_msg');
    } else {
      if (((s as any).prostitute ?? 0)?.['client_scene'] === 'Anal') {
        qspCall(s, 'arousal', 'anal', 2, 'unknown', 'prostitution', 'no_orgasm_msg');
      }
    }
  }
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get dressed', goto: ['prostitution_car_sex', 'end'] },
  ]);
  scene.build();
}

function enterRimjobEnd(s: GameState, scene: SceneBuilder): void {
  (s as any).prostitute_time = (Math.floor(Math.random() * 2) + 3);
  (s as any).prostitute_rand = (Math.floor(Math.random() * 6) + 0);
  if (((s as any).nroad ?? 0) >= 11) {
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      qspCall(s, 'fame', 'pav', 'prostitute', 1);
    } else {
      qspCall(s, 'fame', 'pushkin', 'prostitute', 1);
    }
  } else {
    qspCall(s, 'fame', 'city', 'prostitute', 1);
  }
  if (((s as any).prostitute_fetish ?? 0)?.['rimjob'] === 'yes') {
    (s as any).prostitute_arousal = ((s as any).prostitute_time ?? 0) * -3;
  } else {
    (s as any).prostitute_arousal = ((s as any).prostitute_time ?? 0) * -1;
  }
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).prostitute_time ?? 0) * 2);
  if (((s as any).prostitute_fetish ?? 0)?.['rimjob'] === '') {
    ((s as any).prostitute_fetish = (s as any).prostitute_fetish ?? {})['rimjob'] = 'undecided';
    scene.img('images/shared/prostitution/car/normal/sex/rimjob/rimjob_s5.mp4');
    scene.text('He lays down on the backseat and lift his legs to present his ass to you. What have you agreed to? You ask yourself as your eyes wander down to his exposed asshole. He shaved the hair around it just like he did his balls and most of his crotch. At least you won\'t have a ton of hair in your mouth. "Don\'t worry, I showered before coming here," he tries to reassure you. "I always hope to find a girl that will do it. So I come prepared."');
    scene.text('You continue to question your decision as you slowly move your head towards his ass. When you\'re only an inch away you stick out your tongue and flinch the second it tip touches his puckered asshole. You quickly retreat back an inch, but it was unpleasant. A bit weird, but it didn\'t taste horrible as you may have feared. "Please," the man pleads and that is the push you need to get back into it. You touch his asshole again with your tongue and start to lick the puckered flesh and the area around it. It tastes a bit bitter, but not bad and you quickly get used to it as you move your tongue around and over his asshole. "Spit on it," he orders you as he strokes his cock furiously. You do as he commands and push a bit with your tongue against his now wet opening. That takes him over the edge and he shoots his cum all over his hand an stomach while his asshole twitches slightly against your tongue. "Thanks," he says sounding completely spend but satisfied.');
  } else {
    if (((s as any).prostitute ?? 0)?.['rim_counter'] === 0  ||  (((s as any).prostitute ?? 0)?.['rim_counter'] === 6  &&  ((s as any).prostitute_rand ?? 0) === 0)) {
      ((s as any).prostitute = (s as any).prostitute ?? {})['earnings_day'] = ((s as any).prostitute['earnings_day'] ?? 0) + (200);
      if (((s as any).prostitute_status ?? 0)?.['main'] === -1  ||  ((s as any).prostitute_georgiy ?? 0)?.['payment_method'] === 1) {
        qspCall(s, 'money', 'earn', 200, 'cash');
      }
      // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/shared/prostitution/car/...
      scene.text(`<center><video autoplay loop ${((s as any).set_imgh ?? '')} src="images/shared/prostitution/car/normal/sex/rimjob/rimjob_s0_` + (Math.floor(Math.random() * 3) + 0) + '.mp4"></video></center>');
      // TODO-QSP: dynamic text: 'He kneels on the backseat and spreads his ass-cheeks with his hands to give you...
      scene.text('He kneels on the backseat and spreads his ass-cheeks with his hands to give you better access to his asshole.' + ((((s as any).prostitute_fetish ?? 0)?.['rimjob'] === 'yes') ? (' Not even h') : (' H')) + 'esitating for a second you push your mouth in his ass-crack and coat the sensitive area in your saliva. "Fuck, yes," the man shouts. "This is so fucking hot," he continues, when you dance around his hole with your tongue, before sucking on it once. After a minute of constant licking he urges you to give him a handjob and stimulated by your tongue and hands he shoots his cum on the backseat within a minute.');
      // TODO-QSP: dynamic text: "Thanks, that was the best orgasm I had in a long time," he says sounding satisf...
      scene.text(`"Thanks, that was the best orgasm I had in a long time," he says sounding satisfied and pulls out another ${qspFunc(s, 'money', 'string_profit', 200)}. "Here take this for a job well done."`);
    } else {
      if (((s as any).prostitute ?? 0)?.['rim_counter'] === 1  ||  (((s as any).prostitute ?? 0)?.['rim_counter'] === 6  &&  ((s as any).prostitute_rand ?? 0) === 1)) {
        qspCall(s, 'cum_call', 'hands', 'a client');
        if (((s as any).prostitute_thought ?? 0)?.['rimjob'] === 0) {
          ((s as any).prostitute_thought = (s as any).prostitute_thought ?? {})['rimjob'] = 1;
        }
        scene.img('images/shared/prostitution/car/normal/sex/rimjob/rimjob_s1.mp4');
        // TODO-QSP: dynamic text: 'In contrast to most guys he''s completely shaved. Not a single hair is left on ...
        scene.text('In contrast to most guys he\'s completely shaved. Not a single hair is left on his ass, balls and crotch which makes the whole experience a bit more enjoyable for you.' + ((((s as any).prostitute_thought ?? 0)?.['rimjob'] < 2) ? (' You give yourself a mental shake. It isn\'t as if you like giving guys a rimjob… or do you? You ask yourself, but immediately push the thought aside and concentrate on the task in front of you. ') : (' ')) + 'He also tastes like nothing, not even sweat as if he stepped right out of the shower. "That\'s great, keep doing that," he says with a blissful smile on his face, when you flick your tongue through the puckered meat of his hole.');
        // TODO-QSP: dynamic text: 'You continue to tease his ass with your ' + iif(pcs_piercings['tongue'] > 0, 'p...
        scene.text('You continue to tease his ass with your ' + ((((s as any).pcs_piercings ?? 0)?.['tongue'] > 0) ? ('piercing') : ('tongue')) + ' for the next few minutes and stroking his cock with your hands. "Damn, that\'s…," he stops talking as cum erupts from the tip of his cock coating your hand in it.');
      } else {
        if (((s as any).prostitute ?? 0)?.['rim_counter'] === 2  ||  (((s as any).prostitute ?? 0)?.['rim_counter'] === 6  &&  ((s as any).prostitute_rand ?? 0) === 2)) {
          scene.img('images/shared/prostitution/car/normal/sex/rimjob/rimjob_s2.mp4');
          scene.text('You push your face into his shaved ass-crack and dig in. "That feels nice," he says with a grin and strokes his cock as your tongue moves up and down his ass-crack. "Sounds even nicer," he adds, when the air is filled with the slobbery sounds your mouth and tongue make on his ass.');
          scene.text('"Yeah that\'s it, lick my asshole whore, suck on it," he says more to himself to turn him on than to you. Still, you do what he says and enclose your mouth around his hole and suck on it a few times. "Shit, I\'m coming," he hisses and erupts all over his hands.');
        } else {
          if (((s as any).prostitute ?? 0)?.['rim_counter'] === 3  ||  (((s as any).prostitute ?? 0)?.['rim_counter'] === 6  &&  ((s as any).prostitute_rand ?? 0) === 3)) {
            // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/shared/prostitution/car/...
            scene.text(`<center><video autoplay loop ${((s as any).set_imgh ?? '')} src="images/shared/prostitution/car/normal/sex/rimjob/rimjob_s3_` + (Math.floor(Math.random() * 2) + 0) + '.mp4"></video></center>');
            scene.text('"I…," his face turns red. "I know it\'s probably not something you enjoy," he says, "but could you at least fake it?"');
            // TODO-QSP: dynamic text: '"I don''t have to fake it," you '+iif($prostitute_fetish['rimjob'] = 'yes', 'te...
            scene.text('"I don\'t have to fake it," you ' + ((((s as any).prostitute_fetish ?? 0)?.['rimjob'] === 'yes') ? ('tell him the truth') : ('lie to make him feel better')) + '. "Really?" he asks surprised and happy at the same time. You nod and push him down on the backseat. "Of course, or I wouldn\'t do it," you tell him and wink at him, before pushing your face into his ass and run your tongue through his ass-crack and over his asshole without breaking eye contact with him. "Yummy," you grin.');
            scene.text('You give it all you got to give him a good time and make him believe that there is nothing more enjoyable for you than to have your face pushed against a guys ass. The whole time his gaze is fixed on you until he cums.');
          } else {
            if (((s as any).prostitute ?? 0)?.['rim_counter'] === 4  ||  (((s as any).prostitute ?? 0)?.['rim_counter'] === 6  &&  ((s as any).prostitute_rand ?? 0) === 4)) {
              scene.img('images/shared/prostitution/car/normal/sex/rimjob/rimjob_s4.mp4');
              scene.text('"More pressure," your client demands as your tongue moves up and down between his ass-cheeks. "Come on, really push against it," he adds and you shift your focus to his asshole. Your tongue pushes against it and you apply more force than you normally would. "Yeah, that\'s it. Your tongue feels great," he moans as his eyes flutter shut and his right hand grabs his cock.');
              scene.text('For a minute or two nobody says a word and the only things you can hear are the cars rushing by on the nearby highway and the perverted slobbery sounds your mouth makes in his ass-crack. "A finger, push a finger inside," he tells you as he quickens his strokes. "Now!"');
              scene.text('You do it. Your right index finger moves past his saliva covered sphincter into his ass. "Wiggle it around," he yells and your lips curl upwards into a small grin, when you move your finger up and down and his cock shoots several large spurts on his crotch, stomach and even hit his throat.');
              if (((s as any).prostitute_fetish ?? 0)?.['atm'] === 'blocked') {
                scene.actions([
                  { label: 'Get dressed', goto: ['prostitution_car_sex', 'end'] },
                ]);
              } else {
                // TODO-QSP: dynamic text: '"Put it into your mouth," the man suddenly says, when he opens his eyes. '+iif(...
                scene.text('"Put it into your mouth," the man suddenly says, when he opens his eyes. \'+iif($prostitute_fetish[\'atm\'] = \', \'You move your mouth towards his cock to lick it clean, believing that\'s what he meant, but he shakes his head. "No, your finger," he explains more clearly. Your finger? What? Is he crazy? You lift it\', \'You lift your finger\')+\' in front of your eyes. It looks clean. "You want me to put my finger into my mouth?" He nods eagerly. "Yeah, lick it clean\'+iif($prostitute_fetish[\'atm\'] = \'yes\', \'. \', \'," he continues and when he sees the hesitation on your face he adds, "\')+\'I\'ll give you ' + qspFunc(s, 'money', 'string_profit', 1000) + ', when you do it."');
                qspCall(s, 'prostitution_functions', 'will_atm', 'resist', ((((s as any).prostitute_fetish ?? 0)?.['atm'] === 'yes') ? ('hard') : ('easy')));
                if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                  scene.actions([
                    { label: 'Don\'t do it', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                  ]);
                } else {
                  scene.actions([
                    { label: 'Don\'t do it', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    // TODO-QSP: 'You shake your head and lower your finger. "Sorry, that''s not something I do," you '+iif(prostitut...
    scene.actions([
      { label: 'Get dressed', goto: ['prostitution_car_sex', 'end'] },
    ]);
  } },
                  ]);
                }
                if (((s as any).prostitute_fetish ?? 0)?.['atm'] === '') {
                  ((s as any).prostitute_fetish = (s as any).prostitute_fetish ?? {})['atm'] = 'undecided';
                  scene.text('<br>Content Warning: Ass-to-Mouth');
                  // TODO-QSP: act $func('wrap', 'neg', 'Block this type of content'):
                  (s as any).minut = ((s as any).minut ?? 0) + 1;
                  ((s as any).prostitute_fetish = (s as any).prostitute_fetish ?? {})['atm'] = 'blocked';
                  qspCall(s, 'stat', '');
                  scene.text('You shake your head and lower your finger. "Sorry, that\'s not something I do," you say.');
                  scene.actions([
                    { label: 'Get dressed', goto: ['prostitution_car_sex', 'end'] },
                  ]);
                }
                scene.actions([
                  { label: 'Lick your finger', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    ((st as any).prostitute = (st as any).prostitute ?? {})['earnings_day'] = ((st as any).prostitute['earnings_day'] ?? 0) + (1000);
    if (((st as any).prostitute_status ?? 0)?.['main'] === -1  ||  ((st as any).prostitute_georgiy ?? 0)?.['payment_method'] === 1) {
      qspCall(st, 'money', 'earn', 1000, 'cash');
    }
    if (((st as any).prostitute_thought ?? 0)?.['atm'] === 0) {
      ((st as any).prostitute_thought = (st as any).prostitute_thought ?? {})['atm'] = 1;
    }
    ((st as any).prostitute_stats = (st as any).prostitute_stats ?? {})['atm'] = ((st as any).prostitute_stats['atm'] ?? 0) + (1);
    qspCall(st, 'prostitution_functions', 'std_check_oral', 'low');
    qspCall(st, 'stat', '');
    scene.img('images/shared/prostitution/car/normal/sex/rimjob/finger.jpg');
    // TODO-QSP: dynamic text: '"<<$func(''money'', ''string_profit'', 1000)>>?" you ask making sure you heard ...
    scene.text('"' + qspFunc(s, 'money', 'string_profit', 1000) + '?" you ask making sure you heard him correctly. "Yeah, ' + qspFunc(s, 'money', 'string_profit', 1000) + '. You only have to put that finger into your mouth," he encourages you. You \'+iif($prostitute_fetish[\'atm\'] = \'yes\', \'shrug\', \'sigh\')+\' and suck your finger into your mouth. His eyes grow wide, when you swirl your tongue around it, before pulling your finger lasciviously out of your mouth. "Damn, you\'re nasty," he says chuckling and hands you the promised ' + qspFunc(s, 'money', 'string_profit', 1000) + '.');
    scene.actions([
      { label: 'Get dressed', goto: ['prostitution_car_sex', 'end'] },
    ]);
  } },
                ]);
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).prostitute_thought ?? 0)?.['trash'] === 0) {
    ((s as any).prostitute_thought = (s as any).prostitute_thought ?? {})['trash'] = 1;
  }
  (s as any).facial = ((s as any).facial ?? 0) + (1);
  qspCall(s, 'cum_call', 'face', 'a client');
  scene.img('images/shared/prostitution/car/normal/sex/rimjob/rimjob_s5.mp4');
  // TODO-QSP: dynamic text: '"Just flick your tongue over it," the men tells you as he'+iif(prostitute['cond...
  scene.text('"Just flick your tongue over it," the men tells you as he' + ((((s as any).prostitute ?? 0)?.['condom'] === 1) ? (' pulls the condom off and ') : (' ')) + 'takes his cock into his hand. You do as he wants ' + ((((s as any).prostitute_fetish ?? 0)?.['rimjob'] === 'yes') ? ('without hesitation') : ('after hesitating for a few seconds')) + ' and flick the tip of your tongue over the puckered flesh of his hole. "Look me in the eye bitch," he orders you and instinctively you look up into his ' + (((Math.floor(Math.random() * 2) + 0) === 1) ? ('brown') : ('blue')) + ' eyes. There is no respect or appreciation in them for what you\'re doing for him. You realize that it isn\'t about him wanting to get a rimjob, but about you doing such a degrading act for money. "Yeah, taste my ass," he says coldly while he continues to furiously stroke his cock. It turns him on so much to degrade you that it won\'t take long for him to cum. "That\'s what you\'re good for, licking a mans asshole… you fucking trash," he nearly screams the last words as suddenly moves backwards and upright to point his cock directly at you. Your eyes close, the only thing you have time for, before his cum lands all over your face.');
  if (((s as any).prostitute ?? 0)?.['rim_unfriendly'] === 0  ||  (Math.floor(Math.random() * 3) + 0) === 2) {
    ((s as any).prostitute = (s as any).prostitute ?? {})['earnings_day'] = ((s as any).prostitute['earnings_day'] ?? 0) + (500);
    if (((s as any).prostitute_status ?? 0)?.['main'] === -1  ||  ((s as any).prostitute_georgiy ?? 0)?.['payment_method'] === 1) {
      qspCall(s, 'money', 'earn', 500, 'cash');
    }
    ((s as any).prostitute = (s as any).prostitute ?? {})['rim_unfriendly'] = 1;
    // TODO-QSP: dynamic text: "I''m sorry," he apologizes, his demeanor has completely changed, and pulls out ...
    scene.text(`"I'm sorry," he apologizes, his demeanor has completely changed, and pulls out ${qspFunc(s, 'money', 'string_profit', 500)}. "I can't stop myself from saying stuff like that." he explains. "It turns me on way too much."`);
    // TODO-QSP: '"Don''t worry about it," you answer taking the money from his hand'+iif(prostitute_thought['trash']...
  } else {
    ((s as any).prostitute = (s as any).prostitute ?? {})['client_asshole'] = 1;
  }
  // TODO-QSP: end
  if (((s as any).prostitute ?? 0)?.['rim_counter'] < 6) {
    ((s as any).prostitute = (s as any).prostitute ?? {})['rim_counter'] = ((s as any).prostitute['rim_counter'] ?? 0) + (1);
  }
  // TODO-QSP: end
  qspCall(s, 'arousal', 'rimming_give', ((s as any).prostitute_arousal ?? 0), 'unknown', 'prostitution', 'no_orgasm_msg');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get dressed', goto: ['prostitution_car_sex', 'end'] },
  ]);
  scene.build();
}

function enterEnd(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).prostitute = (s as any).prostitute ?? {})['customer_day'] = ((s as any).prostitute['customer_day'] ?? 0) + (1);
  if (((s as any).nroad ?? 0) >= 11) {
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      qspCall(s, 'fame', 'pav', 'prostitute', 1);
    } else {
      qspCall(s, 'fame', 'pushkin', 'prostitute', 1);
    }
  } else {
    qspCall(s, 'fame', 'city', 'prostitute', 1);
  }
  qspCall(s, 'stat', '');
  scene.img('images/shared/prostitution/car/normal/negotiation/leave_car.mp4');
  scene.text('"That was great", he tells you with a satisfied smile on his face. "Can we meet again sometime?"');
  if ((((s as any).prostitute ?? 0)?.['client_creampie'] === 1  &&  ((s as any).prostitute_client_cumshot ?? 0) !== 'Inside')  ||  ((s as any).prostitute ?? 0)?.['client_asshole'] === 1) {
    scene.text('You don\'t look at him and don\'t answer his question. You just get out of the car and…');
  } else {
    scene.text('"Sure, why not, sweetie. I work here several times a week except on Sunday," you say.');
    scene.text('"What\'s your name?" He calls after you.');
    // TODO-QSP: dynamic text: "<<$prostitute_names[$prostitution_location]>>," you say before you…
    scene.text(`"${(((s as any).prostitute_names ?? 0)?.[String((s as any).prostitution_location ?? 0)] ?? '')}," you say before you…`);
  }
  if (((s as any).prostitute ?? 0)?.['skip_end'] === 0) {
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/shared/prostitution/car/normal/negotiation/leave_walk.mp4');
    // TODO-QSP: dynamic text: 'You had <<prostitute[''customer_day'']>> '+iif(prostitute['customer_day'] > 1, ...
    scene.text('You had ' + ((st as any).prostitute ?? 0)?.['customer_day'] ?? '' + ' \'+iif(prostitute[\'customer_day\'] > 1, \'clients\', \'client\')+\' and earned ' + qspFunc(s, 'money', 'string_profit', ((st as any).prostitute ?? 0)?.['earnings_day'] ?? '') + ' today.');
    ((st as any).prostitute = (st as any).prostitute ?? {})['reminded'] = 0;
    ((st as any).prostitute = (st as any).prostitute ?? {})['accident'] = 0;
    ((st as any).prostitute = (st as any).prostitute ?? {})['condom'] = 0;
    ((st as any).prostitute = (st as any).prostitute ?? {})['blowjob_first'] = 0;
    ((st as any).prostitute = (st as any).prostitute ?? {})['scene_repeat'] = 0;
    ((st as any).prostitute = (st as any).prostitute ?? {})['client_rimjob'] = 0;
    ((st as any).prostitute = (st as any).prostitute ?? {})['client_asshole'] = 0;
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'work');
  } },
    ]);
  } },
    ]);
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    ((s as any).prostitute = (s as any).prostitute ?? {})['reminded'] = 0;
    ((s as any).prostitute = (s as any).prostitute ?? {})['accident'] = 0;
    ((s as any).prostitute = (s as any).prostitute ?? {})['condom'] = 0;
    ((s as any).prostitute = (s as any).prostitute ?? {})['blowjob_first'] = 0;
    ((s as any).prostitute = (s as any).prostitute ?? {})['scene_repeat'] = 0;
    ((s as any).prostitute = (s as any).prostitute ?? {})['client_rimjob'] = 0;
    ((s as any).prostitute = (s as any).prostitute ?? {})['client_asshole'] = 0;
    dynamicGoto(s, 'prevLoc');
  }
  // TODO-QSP: end
  scene.build();
}

function enterRegularStart(s: GameState, scene: SceneBuilder): void {
  (s as any).cumnostd = 1;
  scene.img('images/shared/prostitution/car/regular/sex/start.mp4');
  scene.text('You rub your hand over the hard bulge in his pants and smile seductively at him. "Let\'s take care of this."');
  // TODO-QSP: dynamic text: He groans and watches you opening his pants. "Yes, <<$prostitute_names[$prostitu...
  scene.text(`He groans and watches you opening his pants. "Yes, ${(((s as any).prostitute_names ?? 0)?.[String((s as any).prostitution_location ?? 0)] ?? '')}. I have waited the whole week for this," he tells you while you take his semi-hard cock and rub it slowly with your hand.`);
  if (((s as any).prostitute_client_condom ?? 0) === 'Yes') {
    qspCall(s, 'prostitution_functions', 'remove_condom');
    // TODO-QSP: dynamic text: You take your condom and put it on his <<dick>>cm dick.
    scene.text(`You take your condom and put it on his ${((s as any).dick ?? '')}cm dick.`);
  }
  scene.text('You bow your head down and tenderly take the head of his dick in your mouth.');
  scene.text('"Oh fuck," he says when you circle your tongue around the head.');
  qspCall(s, 'arousal', 'bj', 2, 'unknown', 'prostitution', 'no_orgasm_msg');
  qspCall(s, 'arousal', 'hj', 2, 'unknown', 'prostitution', 'no_orgasm_msg');
  qspCall(s, 'stat', '');
  (s as any).prostitute_scene_rand = (Math.floor(Math.random() * 10) + 1);
  if (((s as any).prostitute ?? 0)?.['scene_reduction'] === 1) {
    if (((s as any).prostitute_scene_rand ?? 0) < 8) {
      if (((s as any).prostitute_scene_rand ?? 0) < 4) {
        (s as any).prostitute_scene_clit = 1;
      }
      qspGoto(s, 'prostitution_car_sex', 'regular_start_bj');
    } else {
      qspGoto(s, 'prostitution_car_sex', 'regular_start_lick');
    }
  } else {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((st as any).prostitute_scene_rand ?? 0) < 8) {
      if (((st as any).prostitute_scene_rand ?? 0) < 4) {
        (st as any).prostitute_scene_clit = 1;
      }
      qspGoto(st, 'prostitution_car_sex', 'regular_start_bj');
    } else {
      qspGoto(st, 'prostitution_car_sex', 'regular_start_lick');
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterRegularStartBj(s: GameState, scene: SceneBuilder): void {
  if (((s as any).prostitute_scene_clit ?? 0) === 1) {
    scene.img('images/shared/prostitution/car/regular/sex/start_blowjob_clit.mp4');
    qspCall(s, 'arousal', 'foreplay', (-4), 'unknown', 'prostitution', 'no_orgasm_msg');
  } else {
    // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/shared/prostitution/car/...
    scene.text(`<center><video autoplay loop ${((s as any).set_imgh ?? '')} src="images/shared/prostitution/car/regular/sex/start_blowjob` + (Math.floor(Math.random() * 2) + 0) + '.mp4"></video></center>');
  }
  scene.text('"That\'s great, keep doing it like this," he tells you and you circle your tongue around the head of his cock again. "Yeah, like this," he responds and you can feel his cock growing harder in your mouth.');
  // TODO-QSP: iif(prostitute_scene_clit = 1, 'His hand moves to your pussy and carefully rubs your clit while', 'F...
  qspCall(s, 'arousal', 'bj', 4, 'unknown', 'prostitution', 'no_orgasm_msg');
  qspCall(s, 'stat', '');
  (s as any).prostitute_scene_rand = (Math.floor(Math.random() * 10) + 1);
  if (((s as any).prostitute ?? 0)?.['scene_reduction'] === 0) {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((st as any).prostitute_scene_rand ?? 0) < 4) {
      qspGoto(st, 'prostitution_car_sex', 'regular_start_lick');
    } else {
      if (((st as any).prostitute_scene_rand ?? 0) >= 4  &&  ((st as any).prostitute ?? 0)?.['client_scene'] === 'Vaginal') {
        qspGoto(st, 'prostitution_car_sex', 'regular_vaginal');
      } else {
        if (((st as any).prostitute_scene_rand ?? 0) >= 4  &&  ((st as any).prostitute ?? 0)?.['client_scene'] === 'Anal') {
          qspGoto(st, 'prostitution_car_sex', 'regular_anal');
        }
      }
    }
  } },
    ]);
  } else {
    if (((s as any).prostitute ?? 0)?.['client_scene'] === 'Vaginal') {
      qspGoto(s, 'prostitution_car_sex', 'regular_vaginal');
    } else {
      qspGoto(s, 'prostitution_car_sex', 'regular_anal');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterRegularStartLick(s: GameState, scene: SceneBuilder): void {
  (s as any).prostitute_scene_lick = 1;
  (s as any).prostitute_pic_rand = (Math.floor(Math.random() * 2) + 0);
  // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/shared/prostitution/car/...
  scene.text(`'<center><video autoplay loop ${((s as any).set_imgh ?? '')} src="images/shared/prostitution/car/regular/sex/start_lick'+'${((s as any).prostitute_pick_rand ?? '')}'+'.mp4"></video></center>'`);
  scene.text('He hinges down the passenger seat. "Lay down, I want to taste you," he tells you. You eagerly obey and spread your legs.');
  // TODO-QSP: dynamic text: '"Beautiful," he comments on your'+iif(pcs_horny < 40, ' dry ', ' wet ')+'pussy....
  scene.text('"Beautiful," he comments on your' + ((((s as any).pcs_horny ?? 0) < 40) ? (' dry ') : (' wet ')) + 'pussy.');
  if ((!((s as any).prostitute_pic_rand ?? 0))) {
    scene.text('You grab on of your breasts and knead it. "Please," you moan. He smiles, but takes a moment to take in the view of you playing with yourself, then he moves his head between your legs and sucks your clit into his mouth.');
    qspCall(s, 'arousal', 'breasts', (-4), 'unknown', 'prostitution', 'no_orgasm_msg');
  } else {
    scene.text('He takes too much time, so you grab his head and move him between your legs. "Come on," you say and enthusiastically sucks your clit into his mouth.');
  }
  scene.text('"Yes," you moan and for the next few minutes you don\'t think about anything else than the feeling of his tongue on your pussy.');
  qspCall(s, 'arousal', 'cuni', 4, 'unknown', 'prostitution', 'no_orgasm_msg');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    if (((st as any).prostitute ?? 0)?.['client_scene'] === 'Vaginal') {
      qspGoto(st, 'prostitution_car_sex', 'regular_vaginal');
    } else {
      if (((st as any).prostitute ?? 0)?.['client_scene'] === 'Anal') {
        qspGoto(st, 'prostitution_car_sex', 'regular_anal');
      }
    }
  } },
  ]);
  scene.build();
}

function enterRegularVaginal(s: GameState, scene: SceneBuilder): void {
  if (((s as any).prostitute ?? 0)?.['scene_repeat'] === 0) {
    if ((!((s as any).prostitute_scene_lick ?? 0))) {
      scene.img('images/shared/prostitution/car/regular/sex/main_pussy_clit.mp4');
      scene.text('He hinges down the passenger seat. "Lay down," he tells you and lays done next to you. You spread your legs and he holds up your leg while you guide his cock to your entrance. Starting slow he speeds up after a few thrusts and fucks you in earnest after a minute.');
      scene.text('You\'re just laying there and try to enjoy the feeling as he fucks you and plays with your clit the entire time.');
      qspCall(s, 'arousal', 'foreplay', (-6), 'unknown', 'prostitution', 'no_orgasm_msg');
    } else {
      if (((s as any).prostitute_scene_lick ?? 0) === 1) {
        // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/shared/prostitution/car/...
        scene.text(`<center><video autoplay loop ${((s as any).set_imgh ?? '')} src="images/shared/prostitution/car/regular/sex/main_pussy` + (Math.floor(Math.random() * 3) + 0) + '.mp4"></video></center>');
        qspCall(s, 'arousal', 'auto_lube', 'vaginal');
        scene.text('He moves out of his clothes and replaces his tongue with his dick. You spread your legs even further to give him easier access and he pushes inside.');
        scene.text('Starting slow he speeds up after a few thrusts and fucks you in earnest after a minute.');
      }
    }
  } else {
    if (((s as any).prostitute ?? 0)?.['scene_repeat'] === 1) {
      (s as any).prostitute_pic_rand = (Math.floor(Math.random() * 3) + 3);
      scene.img(`images/shared/prostitution/car/regular/sex/main_pussy${((s as any).prostitute_pic_rand ?? '')}.mp4`);
      if (((s as any).prostitute_pic_rand ?? 0) < 5) {
        scene.text('After a few minutes you switch positions. He puts the passenger seat back and moves to the back of the car and pulls you with him. You get on top of him and he continues pushing inside you.');
      } else {
        if (((s as any).prostitute_pic_rand ?? 0) === 5) {
          scene.text('"Get on your knees," he orders and helps you with it in the tight confounds of the car.');
        }
      }
    } else {
      if (((s as any).prostitute ?? 0)?.['scene_repeat'] === 2) {
        scene.img('images/shared/prostitution/car/regular/sex/main_pussy6.mp4');
        // TODO-QSP: iif(rand(1, 10) < 4, 'You can''t remember that he ever showed such stamina, but today ', 'It''s alwa...
      }
    }
  }
  qspCall(s, 'arousal', 'vaginal', ((((s as any).prostitute ?? 0)?.['scene_reduction'] === 0) ? (6) : (12)), 'unknown', 'prostitution', 'no_orgasm_msg');
  qspCall(s, 'stat', '');
  if (((((s as any).prostitute ?? 0)?.['scene_repeat'] === 0  &&  (Math.floor(Math.random() * 6) + 1) < 4)  ||  (((s as any).prostitute ?? 0)?.['scene_repeat'] === 1  &&  (Math.floor(Math.random() * 6) + 1) < 3))  &&  ((s as any).prostitute ?? 0)?.['scene_reduction'] === 0) {
    ((s as any).prostitute = (s as any).prostitute ?? {})['scene_repeat'] = ((s as any).prostitute['scene_repeat'] ?? 0) + (1);
    scene.actions([
      { label: 'Continue', goto: ['prostitution_car_sex', 'regular_vaginal'] },
    ]);
  } else {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'prostitution_car_sex', '');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterRegularAnal(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/shared/prostitution/car/...
  scene.text(`<center><video autoplay loop ${((s as any).set_imgh ?? '')} src="images/shared/prostitution/car/regular/sex/main_anal` + (Math.floor(Math.random() * 5) + 0) + '.mp4"></video></center>');
  if (((s as any).prostitute ?? 0)?.['scene_repeat'] === 0) {
    scene.text('He moves onto the backseat of the car and lies down on it. "Get on top of me."');
    qspCall(s, 'arousal', 'auto_lube', 'anal');
    scene.text('Hands, legs, arms and feet are in the way as you make your way to the back of the car.');
    if ((Math.floor(Math.random() * 10) + 1) === 1) {
      scene.text('Suddenly you loose your footing and land with your whole weight on top of him.');
      scene.text('"Ow!" He shouts more surprised than hurt, but he shakes his head when you utter an apology. "Don\'t worry it didn\'t hurt."');
      scene.text('He helps you to get in position and you grab his dick and position it at the entrance of your ass.');
    } else {
      scene.text('But you easily manage to get on top of him. You grab his dick and position it at the entrance of your ass.');
    }
    scene.text('You carefully lower yourself onto his cock and forcing him past your sphincter.');
    // TODO-QSP: dynamic text: '"Take a moment," he suggests'+iif(pcs_horny >= 60, ', but you shake your head a...
    scene.text('"Take a moment," he suggests' + ((((s as any).pcs_horny ?? 0) >= 60) ? (', but you shake your head and') : (' and you gladly take this opportunity to get used to his dick inside your body before you')) + ' start to fuck him.');
  } else {
    if (((s as any).prostitute ?? 0)?.['scene_repeat'] === 1) {
      scene.text('You switch up your routine every minute or so. Sometimes you fuck him, sometimes he fucks you or you both try to coordinate your simultaneous movements. He is clearly annoying himself and tells you that frequently.');
      (s as any).prostitute_scene_rand = (Math.floor(Math.random() * 10) + 1);
      if (((s as any).prostitute_scene_rand ?? 0) < 5) {
        // TODO-QSP: '"My wife never let me fuck her like this," he tells you clearly '+iif(prostitute_scene_rand < 3, 'a...
      } else {
        // TODO-QSP: '"You''re a special one, you know that, right?" He asks you, but you are to busy '+iif(prostitute_sc...
      }
    } else {
      if (((s as any).prostitute ?? 0)?.['scene_repeat'] === 2) {
        scene.text('He has stopped talking and is, just like you, only concentrating on the action. You can feel he is getting closer and closer as the minutes tick by.');
      }
    }
  }
  qspCall(s, 'arousal', 'anal', ((((s as any).prostitute ?? 0)?.['scene_reduction'] === 0) ? (6) : (12)), 'unknown', 'prostitution', 'no_orgasm_msg');
  qspCall(s, 'stat', '');
  if (((((s as any).prostitute ?? 0)?.['scene_repeat'] === 0  &&  (Math.floor(Math.random() * 6) + 1) < 4)  ||  (((s as any).prostitute ?? 0)?.['scene_repeat'] === 1  &&  (Math.floor(Math.random() * 6) + 1) < 3))  &&  ((s as any).prostitute ?? 0)?.['scene_reduction'] === 0) {
    ((s as any).prostitute = (s as any).prostitute ?? {})['scene_repeat'] = ((s as any).prostitute['scene_repeat'] ?? 0) + (1);
    scene.actions([
      { label: 'Continue', goto: ['prostitution_car_sex', 'regular_anal'] },
    ]);
  } else {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'prostitution_car_sex', '');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterRegularSwitch(s: GameState, scene: SceneBuilder): void {
  if (((s as any).prostitute_client_condom ?? 0) === 'Yes') {
    if (((s as any).prostitute ?? 0)?.['client_scene'] === 'Vaginal') {
      qspGoto(s, 'prostitution_car_sex', 'regular_cumshot', 'vaginal_condom');
    } else {
      if (((s as any).prostitute ?? 0)?.['client_scene'] === 'Anal') {
        qspGoto(s, 'prostitution_car_sex', 'regular_cumshot', 'anal_condom');
      }
    }
  } else {
    if (((s as any).prostitute_client_condom ?? 0) === '!') {
      if (((s as any).prostitute ?? 0)?.['client_scene'] === 'Vaginal') {
        if (((s as any).prostitute_client_cumshot ?? 0) !== 'Inside') {
          qspGoto(s, 'prostitution_car_sex', 'regular_cumshot', 'mouth');
        } else {
          qspGoto(s, 'prostitution_car_sex', 'regular_cumshot', 'vaginal_creampie');
        }
      } else {
        if (((s as any).prostitute ?? 0)?.['client_scene'] === 'Anal') {
          if (((s as any).prostitute_client_cumshot ?? 0) !== 'Inside') {
            qspGoto(s, 'prostitution_car_sex', 'regular_cumshot', 'mouth');
          } else {
            qspGoto(s, 'prostitution_car_sex', 'regular_cumshot', 'anal_creampie');
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterRegularCumshot(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcgeneratec', '0', 'a regular client', (Math.floor(Math.random() * 26) + 30));
  qspCall(s, 'boyStat', '$npclastgenerated');
  if (String((s as any).locArgs?.[1] ?? '') === 'mouth') {
    scene.img('images/shared/prostitution/car/regular/sex/end_mouth.mp4');
    // TODO-QSP: dynamic text: 'He pulls out of your '+iif($prostitute['client_scene'] = 'Anal', 'ass', 'pussy'...
    scene.text('He pulls out of your ' + ((((s as any).prostitute ?? 0)?.['client_scene'] === 'Anal') ? ('ass') : ('pussy')) + ' and take his cock into your mouth. It won\'t take much for him to cum.' + ((((s as any).prostitute ?? 0)?.['client_scene'] === 'Anal') ? (' You try to ignore the taste of your own ass') : (' You can taste your own pussy on his dick')) + ' as you tease his head with your tongue. That takes him over the edge and he shoots his cum inside your mouth.');
    qspCall(s, 'arousal', 'bj', 2, 'unknown', 'prostitution', 'no_orgasm_msg');
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'vaginal_condom'  ||  String((s as any).locArgs?.[1] ?? '') === 'vaginal_creampie') {
      scene.img('images/shared/prostitution/car/regular/sex/end_pussy.mp4');
      // TODO-QSP: 'You carefully massage his balls as he pushes into you. "I''m cumming," he groans and shoots his cum...
      qspCall(s, 'arousal', 'vaginal', 2, 'unknown', 'prostitution', 'no_orgasm_msg');
      if (String((s as any).locArgs?.[1] ?? '') === 'vaginal_creampie') {
        qspCall(s, 'cum_call', '', ((s as any).boy ?? 0));
      }
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'anal_condom'  ||  String((s as any).locArgs?.[1] ?? '') === 'anal_creampie') {
        scene.img('images/shared/prostitution/car/regular/sex/end_anal.mp4');
        // TODO-QSP: 'With one last push he shoves his cock into you and shoots his cum '+iif($ARGS[1] = 'anal_creampie',...
        qspCall(s, 'arousal', 'anal', 2, 'unknown', 'prostitution', 'no_orgasm_msg');
        if (String((s as any).locArgs?.[1] ?? '') === 'anal_creampie') {
          qspCall(s, 'cum_call', 'anus', ((s as any).boy ?? 0));
        }
      }
    }
  }
  qspCall(s, 'arousal', 'end');
  if (((s as any).pcs_horny ?? 0) >= 80) {
    scene.actions([
      { label: 'Get yourself off', goto: ['prostitution_car_sex', 'regular_main_lick'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Get dressed', goto: ['prostitution_car_sex', 'regular_end_0'] },
  ]);
  scene.build();
}

function enterRegularMainLick(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  scene.img('images/shared/prostitution/car/regular/sex/main_lick.mp4');
  scene.text('You can feel you are close and you move your hand between your legs to get yourself off.');
  scene.text('He watches you for a few seconds before he moves between your legs. "Here, let me help you," he says and a second later you can feel his tongue between your pussy lips.');
  (s as any).orgasm_txt = 'Within a few minutes your legs are shaking and you closes your eyes as the powerful orgasm washes over you.';
  (s as any).orgasm_or = 'custom';
  qspCall(s, 'arousal', 'cuni', (-6), 'unknown');
  qspCall(s, 'arousal', 'end');
  scene.text('"Thanks," you say exhausted but satisfied.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get dressed', goto: ['prostitution_car_sex', 'regular_end_0'] },
  ]);
  scene.build();
}

function enterRegularEnd_0(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 10) + 1) < 4  &&  ((s as any).prostitute ?? 0)?.['skip_start'] === 0) {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/shared/prostitution/car/regular/negotiation/end_p1.mp4');
    scene.text('You chat with him for some time and he tells you a little bit about himself, his life and his problems. Listening, asking some questions and faking interest in their troubles has become an important part of your job, at least with your regulars. They come to you to reduce stress and that does sometimes mean more than fucking you.');
    scene.text('He suddenly moves his head back to your tits and he plants several kisses on them. "What are you doing?" You laugh. "You can\'t get enough of those? Do you?"');
    // TODO-QSP: dynamic text: "No never, they are perfect," he grins and suddenly looks a bit more serious as ...
    scene.text(`"No never, they are perfect," he grins and suddenly looks a bit more serious as he moves back. "${(((s as any).prostitute_names ?? 0)?.[String((s as any).prostitution_location ?? 0)] ?? '')}, can I kiss you?"`);
    scene.text('You…');
    qspCall(s, 'willpower', 'kiss', 'resist', ((((s as any).prostitute ?? 0)?.['kiss'] === 'yes') ? ('hard') : ('easy')));
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Say no', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Say no', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/shared/prostitution/car/regular/negotiation/end_p3.mp4');
    // TODO-QSP: dynamic text: '"No, sorry sweetie, but I don''t kiss anybody while im working. It has nothing ...
    scene.text('"No, sorry sweetie, but I don\'t kiss anybody while im working. It has nothing to do with you, it\'s a rule I have," you ' + ((((st as any).prostitute ?? 0)?.['kiss'] === 'yes') ? ('lie') : ('say')) + ' to avoid upsetting him.');
    scene.text('He doesn\'t look too happy about it. "Fine, I guess I can understand that."');
    if ((Math.floor(Math.random() * 10) + 1) > 7) {
      ((st as any).prostitute = (st as any).prostitute ?? {})['customer_total'] = ((st as any).prostitute['customer_total'] ?? 0) - (1);
    }
    scene.actions([
      { label: 'Get out of the car', goto: ['prostitution_car_sex', 'regular_end_1'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Kiss him', handler: (st: GameState) => {
    qspCall(st, 'mood', 'raise', 'tiny');
    ((st as any).prostitute = (st as any).prostitute ?? {})['kiss'] = 'yes';
    scene.img('images/shared/prostitution/car/regular/negotiation/end_p2.mp4');
    scene.text('… kiss him. It\'s a strangely sweet moment in a car next to a gas station after he has solicited you for sex.');
    // TODO-QSP: dynamic text: "Thanks <<$prostitute_names[$prostitution_location]>>," he says and he looks hap...
    scene.text(`"Thanks ${(((st as any).prostitute_names ?? 0)?.[String((st as any).prostitution_location ?? 0)] ?? '')}," he says and he looks happy not sexually satisfied but truly happy.`);
    qspCall(st, 'arousal', 'kiss', 3, 'unknown');
    qspCall(st, 'arousal', 'end');
    if ((Math.floor(Math.random() * 10) + 1) < 5) {
      // TODO-QSP: dynamic text: "Here, take this," he says and tries to hand you another <<$func(''money'', ''st...
      scene.text(`"Here, take this," he says and tries to hand you another ${qspFunc(s, 'money', 'string_profit', 100)}.`);
      qspCall(st, 'willpower', 'prostitution', 'resist', 'easy');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Refuse', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'mood', 'raise', 'tiny');
    ((st as any).prostitute = (st as any).prostitute ?? {})['customer_total'] = ((st as any).prostitute['customer_total'] ?? 0) + (1);
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.text('"Oh no, I can\' take that," you say a little bit offended. It feels wrong to get paid for a kiss.');
    scene.text('"What? Why?" He asks surprised.');
    scene.text('You smile. "I don\'t want it, not for giving you a kiss."');
    // TODO-QSP: dynamic text: He looks puzzled and sits there for a moment still holding the <<$func(''money''...
    scene.text(`He looks puzzled and sits there for a moment still holding the ${qspFunc(s, 'money', 'string_profit', 100)} in his hand. "Sorry, I misjudged you."`);
    scene.text('"It\'s fine, I guess it comes with the territory," you say.');
    scene.text('He takes back the money and you can see in his eyes that you have earned a little bit of respect with him. A rare sight in your profession.');
    scene.actions([
      { label: 'Get out of the car', goto: ['prostitution_car_sex', 'regular_end_1'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Accept', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'mood', 'lower', 'small');
    qspCall(st, 'money', 'earn', 100, 'cash');
    // TODO-QSP: 'You take it and with that you change the kiss into a simple transaction.'+iif(prostitute_georgiy['p...
    qspCall(st, 'stat', '');
    if ((Math.floor(Math.random() * 10) + 1) === 10) {
      ((st as any).prostitute = (st as any).prostitute ?? {})['customer_total'] = ((st as any).prostitute['customer_total'] ?? 0) - (1);
    }
    scene.actions([
      { label: 'Get out of the car', goto: ['prostitution_car_sex', 'regular_end_1'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Get out of the car', goto: ['prostitution_car_sex', 'regular_end_1'] },
      ]);
    }
  } },
    ]);
  } else {
    qspGoto(s, 'prostitution_car_sex', 'regular_end_1');
  }
  // TODO-QSP: end
  scene.build();
}

function enterRegularEnd_1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  ((s as any).prostitute = (s as any).prostitute ?? {})['customer_day'] = ((s as any).prostitute['customer_day'] ?? 0) + (1);
  if (((s as any).nroad ?? 0) >= 11) {
    qspCall(s, 'fame', 'pav', 'prostitute', 1);
    qspCall(s, 'fame', 'pushkin', 'prostitute', 1);
  } else {
    qspCall(s, 'fame', 'city', 'prostitute', 2);
  }
  qspCall(s, 'stat', '');
  scene.img('images/shared/prostitution/car/regular/negotiation/end_p3.mp4');
  // TODO-QSP: '"Bye <<$prostitute_names[$prostitution_location]>>, I hope I''ll seeing you again," is the last thi...
  ((s as any).prostitute = (s as any).prostitute ?? {})['condom'] = 0;
  ((s as any).prostitute = (s as any).prostitute ?? {})['scene_repeat'] = 0;
  if (((s as any).prostitute ?? 0)?.['skip_end'] === 0) {
    scene.actions([
      { label: 'Move away from the car', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'work');
  } },
    ]);
  } else {
    dynamicGoto(s, 'prevLoc');
  }
  // TODO-QSP: end
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
    case 'rimjob_decision':
      enterRimjobDecision(s, scene);
      break;
    case 'switch':
      enterSwitch(s, scene);
      break;
    case 'cumshot':
      enterCumshot(s, scene);
      break;
    case 'rimjob_end':
      enterRimjobEnd(s, scene);
      break;
    case 'end':
      enterEnd(s, scene);
      break;
    case 'regular_start':
      enterRegularStart(s, scene);
      break;
    case 'regular_start_bj':
      enterRegularStartBj(s, scene);
      break;
    case 'regular_start_lick':
      enterRegularStartLick(s, scene);
      break;
    case 'regular_vaginal':
      enterRegularVaginal(s, scene);
      break;
    case 'regular_anal':
      enterRegularAnal(s, scene);
      break;
    case 'regular_switch':
      enterRegularSwitch(s, scene);
      break;
    case 'regular_cumshot':
      enterRegularCumshot(s, scene);
      break;
    case 'regular_main_lick':
      enterRegularMainLick(s, scene);
      break;
    case 'regular_end_0':
      enterRegularEnd_0(s, scene);
      break;
    case 'regular_end_1':
      enterRegularEnd_1(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const prostitution_car_sex: LocationDef = {
  name: 'prostitution_car_sex',
  title: '<br>Content Warning: Ass-licking/Rimjob',
  region: 'other',
  enter: enter,
};
