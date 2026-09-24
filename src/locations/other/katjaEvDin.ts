import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterKiss(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A14');
  qspCall(s, 'mood', 'raise', 'small');
  qspCall(s, 'arousal', 'kiss', 3, 'lesbian');
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (10);
  if (((s as any).katjaQW ?? 0)?.['QWstage'] < 3) {
    if (((s as any).katjaQW ?? 0)?.['slut'] < 5) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['slut'] = 10;
    } else {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['slut'] = ((s as any).katjaQW['slut'] ?? 0) + (5);
    }
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['QWstage'] = 3;
  }
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/kiss.jpg');
  scene.text('You bring your face to Katja\'s and feel her hot breath on your lips as she closes her eyes and presses her lips to yours.');
  scene.text('Her nimble tongue darts into your mouth and you suck on her tongue before your tongue goes into her mouth and she very gently caresses it with her tongue.');
  scene.text('She then pushes you away and licks her lips.');
  if (((s as any).katjaQW ?? 0)?.['horny'] >= 60) {
    scene.text('Katja moves her hands to your breasts and gently touches them with her finger.');
    qspCall(s, 'willpower', 'foreplay', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Remove her hands', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Remove her hands', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay', 3, 'lesbian');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['dom'] = ((st as any).katjaQW['dom'] ?? 0) - (1);
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) - (10);
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = Math.min((((st as any).katjaQW ?? 0)?.['horny']), 60);
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('You remove her hands and smile at Katja.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    if (((st as any).loc ?? 0) === 'katja_dorm') {
      qspGoto(st, 'katja_dorm', 'talk');
    } else {
      qspGoto(st, 'KatjaHomeTalk', '');
    }
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Let her', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay', 3, 'lesbian');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (10);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/school/tits.jpg');
    scene.text('She bares your breasts and touches them with her fingers before she bows her head and starts licking your nipple.');
    qspCall(st, 'KatjaEvDin', 'sex');
  } },
    ]);
  } else {
    if (((s as any).npc_had_sex ?? 0)?.['A14']) {
      scene.actions([
        { label: 'Touch her chest', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay_give', 3, 'lesbian');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (10);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/school/touch.jpg');
    scene.text('You touch Katja\'s tender breasts and she sighs deeply, biting her lip.');
    if (((st as any).katjaQW ?? 0)?.['horny'] < (Math.floor(Math.random() * 61) + 0)) {
      scene.text('You play with her breasts a little before she moves away from you.');
      // TODO-QSP: dynamic text: "I''m not in the mood right now, <<$pcs_nickname>>. Another time maybe?"
      scene.text(`"I'm not in the mood right now, ${((st as any).pcs_nickname ?? '')}. Another time maybe?"`);
      qspCall(st, 'willpower', 'sex', 'force', 'hard');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Grab her', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Grab her', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay_give', 3, 'lesbian');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['dom'] = ((st as any).katjaQW['dom'] ?? 0) - (1);
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) - (10);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/school/grab.jpg');
    scene.text('You grab Katja firmly so she can\'t back away.');
    scene.text('Katja freezes in your arms and you stroke her body and kiss her neck.');
    scene.actions([
      { label: 'Lick her breast', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay_give', 3, 'lesbian');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (10);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/school/tits_katja_get.jpg');
    scene.text('You free Katja\'s small, firm breasts from under her clothes and begin to lick them, paying special attention to her nipples. Katja closes her eyes in pleasure and bites her lip.');
    qspCall(st, 'KatjaEvDin', 'sex');
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Accept her decision', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    if (((st as any).loc ?? 0) === 'katja_dorm') {
      qspGoto(st, 'katja_dorm', 'talk');
    } else {
      qspGoto(st, 'KatjaHomeTalk', '');
    }
  } },
      ]);
    } else {
      scene.text('Katja moves her hands to your breasts and gently touches them with her finger before she starts squeezing them and you feel her undoing your bra.');
      scene.actions([
        { label: 'Let her', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay', 3, 'lesbian');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (10);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/school/tits.jpg');
    scene.text('Katja bares your breasts and touches them with her fingers before she bows her head and begins to lick your nipple.');
    qspCall(st, 'KatjaEvDin', 'sex');
  } },
        { label: 'Ask her to stop', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/school/touch.jpg');
    scene.text('You ask Katja to stop, but she ignores you.');
    qspCall(st, 'willpower', 'foreplay', 'resist', 'hard');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Remove her hands', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Remove her hands', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay', 3, 'lesbian');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['dom'] = ((st as any).katjaQW['dom'] ?? 0) - (1);
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) - (10);
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = Math.min((((st as any).katjaQW ?? 0)?.['horny']), 60);
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('You remove her hands and smile at Katja.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    if (((st as any).loc ?? 0) === 'katja_dorm') {
      qspGoto(st, 'katja_dorm', 'talk');
    } else {
      qspGoto(st, 'KatjaHomeTalk', '');
    }
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Give in to her touch', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay', 3, 'lesbian');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['dom'] = ((st as any).katjaQW['dom'] ?? 0) + (1);
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (10);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/school/tits.jpg');
    scene.text('Katja bares your breasts and touches them with her fingers before she bows her head and begins to lick your nipple.');
    qspCall(st, 'KatjaEvDin', 'sex');
  } },
    ]);
  } },
      ]);
    }
  } },
      ]);
    } else {
      qspCall(s, 'arousal', 'end');
      scene.text('Katja turns and begins collecting books, pretending that nothing has happened.');
      if (((s as any).loc ?? 0) === 'katja_dorm') {
        scene.actions([
          { label: 'Stop talking', goto: ['katja_dorm', 'start'] },
        ]);
      } else {
        scene.actions([
          { label: 'Leave the room', goto: ['mey_home', 'start'] },
        ]);
      }
      scene.actions([
        { label: 'Talk about something else', handler: (st: GameState) => {
    if (((st as any).loc ?? 0) === 'katja_dorm') {
      qspGoto(st, 'katja_dorm', 'talk');
    } else {
      qspGoto(st, 'KatjaHomeTalk', '');
    }
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterStraponMain(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/sex/school/strapon_ready.jpg');
  if (((s as any).katjaQW ?? 0)?.['orgasm_day'] !== ((s as any).daystart ?? 0)) {
    if (((s as any).katjaQW ?? 0)?.['horny'] < 20) {
      scene.text('Katja looks calm and indifferent.');
    } else {
      if (((s as any).katjaQW ?? 0)?.['horny'] < 40) {
        scene.text('Katja looks at you with amusement.');
      } else {
        if (((s as any).katjaQW ?? 0)?.['horny'] < 60) {
          scene.text('Katja has a slight blush on her cheeks as she looks at you mischievously.');
        } else {
          if (((s as any).katjaQW ?? 0)?.['horny'] < 80) {
            scene.text('Katja blushes and languidly looks at you.');
          } else {
            scene.text('Katja\'s face is flushed bright red and her chest heaves from deep breathing.');
          }
        }
      }
    }
  } else {
    if (((s as any).katjaQW ?? 0)?.['horny'] < 20) {
      scene.text('Katja looks calm and in control of her breathing again.');
    } else {
      if (((s as any).katjaQW ?? 0)?.['horny'] < 40) {
        scene.text('Katja looks at you with amusement. Her breathing seems to be almost back to normal.');
      } else {
        if (((s as any).katjaQW ?? 0)?.['horny'] < 60) {
          scene.text('Katja has a slight blush on her cheeks and she looks at you mischievously, still breathing a bit hard.');
        } else {
          if (((s as any).katjaQW ?? 0)?.['horny'] < 80) {
            scene.text('Katja blushes and languidly looks at you, obviously still unable to get her breath fully under control again.');
          } else {
            scene.text('Katja\'s face is flushed red and her chest heaves from gulping down all the air she can manage. You delight in the fact that you pushed her over the edge so hard.');
          }
        }
      }
    }
  }
  if (((s as any).katjaQW ?? 0)?.['horny'] > 10  &&  ((s as any).katjaQW ?? 0)?.['horny'] < 100) {
    scene.actions([
      { label: 'Make Katja suck the strap-on', goto: ['KatjaEvDin', 'strapon_bj'] },
      { label: 'Fuck Katja with the strap-on', goto: ['KatjaEvDin', 'strapon_miss'] },
      { label: 'Fuck Katja in the ass with the strap-on', goto: ['KatjaEvDin', 'strapon_anal'] },
    ]);
  }
  if (((s as any).katjaQW ?? 0)?.['horny'] < 0) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = 0;
  }
  if (((s as any).loc ?? 0) === 'katja_dorm') {
    scene.actions([
      { label: 'Get dressed and stop talking', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'katja_dorm', 'start');
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Smile and leave the room', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'mey_home', 'start');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Get dressed and talk about something else', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    if (((st as any).loc ?? 0) === 'katja_dorm') {
      qspGoto(st, 'katja_dorm', 'talk');
    } else {
      qspGoto(st, 'KatjaHomeTalk', '');
    }
  } },
  ]);
  scene.build();
}

function enterStraponBj(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/sex/school/strapon_bj.jpg');
  scene.text('You grab a handful of Katja\'s red hair and keep a good hold on it as you pull her face over to the strap-on and smack her lips with it a few times until she opens her mouth. Once her mouth is open, you slide it in and let her suck it before you buck your hips forward and start fucking her mouth and throat with the strap-on, your hand in her hair holding her head in place as you do so.');
  if (((s as any).katjaQW ?? 0)?.['strapon_bj'] === 0) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['strapon_bj'] = 1;
  }
  qspCall(s, 'arousal', 'foreplay', 5, 'dom', 'lesbian');
  qspCall(s, 'stat', '');
  if (((s as any).npc_throat ?? 0)?.['A14'] < ((s as any).dick1 ?? 0) / 2) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) - (10);
    if (((s as any).katjaQW ?? 0)?.['horny'] > 30) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) - (10);
    }
    if (((s as any).katja_throat_check ?? 0) > 0) {
      scene.text('Katja still tries to accommodate the dildo plunging down her throat, but keeps gagging as her eyes shed tears, snot runs from her nose and saliva drips from her mouth.');
    } else {
      scene.text('Katja tries to accommodate the dildo plunging down her throat, but she keeps gagging, her eyes shed tears, snot runs from her nose and saliva drips from her mouth.');
    }
  } else {
    if (((s as any).npc_throat ?? 0)?.['A14'] < ((s as any).dick1 ?? 0)) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) - (5);
      if (((s as any).katja_throat_check ?? 0) === 2) {
        if (((s as any).npc_throat ?? 0)?.['A14'] === ((s as any).dick1 ?? 0) / 2) {
          scene.text('Katja has gotten better at accommodate the dildo plunging down her throat. Although she still keeps gagging, her eyes shed tears and saliva drips from her mouth, she\'s now able to take it.');
        } else {
          scene.text('Katja still tries to accommodate the dildo plunging down her throat. Although she still keeps gagging, her eyes shed tears and saliva drips from her mouth, she\'s able to take it.');
        }
      } else {
        scene.text('Katja tries to accommodate the dildo plunging down her throat. Although she keeps gagging, her eyes shed tears and saliva drips from her mouth, she\'s able to take it.');
      }
    } else {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['slut'] = ((s as any).katjaQW['slut'] ?? 0) + (1);
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (5);
      if (((s as any).katja_throat_check ?? 0) > 1) {
        scene.text('Katja is now able to shallow the strap-on to the hilt without any problems. Her eyes water slightly, but she\'s now very practiced at deepthroating and easily takes the dildo all the way down her throat.');
      } else {
        scene.text('Katja expertly swallows the strap-on to the hilt. Her eyes water slightly, but she\'s very practiced at deep throating and easily takes the dildo all the way down her throat.');
      }
      qspCall(s, 'arousal', 'foreplay', 5, 'dom', 'lesbian');
      qspCall(s, 'stat', '');
    }
  }
  if ((!((s as any).katja_throat_check ?? 0))) {
    (s as any).katja_throat_check = 1;
    if (((s as any).npc_throat ?? 0)?.['A14'] < ((s as any).dick1 ?? 0)) {
      (s as any).katja_throat_check = 2;
      ((s as any).npc_throat = (s as any).npc_throat ?? {})['A14'] = ((s as any).npc_throat['A14'] ?? 0) + (1);
    }
    if (((s as any).npc_throat ?? 0)?.['A14'] < ((s as any).dick1 ?? 0) / 2) {
      ((s as any).npc_throat = (s as any).npc_throat ?? {})['A14'] = ((s as any).npc_throat['A14'] ?? 0) + (1);
    }
  }
  if (((s as any).katjaQW ?? 0)?.['horny'] >= 100) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = 0;
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['slut'] = ((s as any).katjaQW['slut'] ?? 0) + (5);
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['orgasm_day'] = ((s as any).daystart ?? 0);
    scene.text('Katja moans and bites her lip, looking like she\'s already about to orgasm just from sucking the strap-on.');
    scene.text('"You look so pretty with that big cock slamming home in your throat baby!" you tell her as her hand darts to her clit and she starts to rub herself furiously.');
    scene.text('In mere seconds, she pushes herself over the edge and starts to tremble violently, all the while moaning around the dildo still pumping her throat.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Further', goto: ['KatjaEvDin', 'strapon_main'] },
  ]);
  scene.build();
}

function enterStraponMiss(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/sex/school/strapon_miss.jpg');
  scene.text('You lay Katja on her back and spread her legs before crawling between them and rubbing the dildo against her wet pussy.');
  scene.text('You slide it into her and start to fuck her, slowly working the dildo balls deep into her as you start to fuck her harder.');
  if (((s as any).katjaQW ?? 0)?.['strapon_vag'] === 0) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['strapon_vag'] = 1;
  }
  qspCall(s, 'arousal', 'vaginal_strap_give', 5, ((s as any).npcID ?? 0), ((s as any).npcID1 ?? 0), 'lesbian', 'dom');
  qspCall(s, 'stat', '');
  if (((s as any).npc_vag ?? 0)?.['A14'] < 1) {
    scene.text('Katja groans and bites her lip in pain as the strap-on enters her. You glance down and notice blood on the strap-on. You just popped Katja\'s cherry...');
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['slut'] = ((s as any).katjaQW['slut'] ?? 0) - (10);
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = 0;
    ((s as any).npc_vag = (s as any).npc_vag ?? {})['A14'] = 20;
  } else {
    if (((s as any).npc_vag ?? 0)?.['A14'] < ((s as any).dick1 ?? 0) - 5) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['slut'] = ((s as any).katjaQW['slut'] ?? 0) - (1);
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) - (10);
      if (((s as any).katja_vag_check ?? 0) > 0) {
        scene.text('Katja still bites her lip and moans as you fuck her with the strap-on, but she still seem to be into it. She winces from time to time from one of your hard thrusts into her, but reluctantly tolerates it.');
      } else {
        scene.text('Katja bites her lip and moans as you fuck her with the strap-on and she gradually starts to get into it. She winces from time to time from one of your hard thrusts into her, but reluctantly tolerates it.');
      }
    } else {
      if (((s as any).npc_vag ?? 0)?.['A14'] < ((s as any).dick1 ?? 0) - 3  ||  ((s as any).katjaQW ?? 0)?.['horny'] < 10) {
        ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (5);
        if (((s as any).katja_vag_check ?? 0) > 0) {
          if (((s as any).npc_vag ?? 0)?.['A14'] > ((s as any).dick1 ?? 0) - 5) {
            scene.text('Katja still bites her lip and moans as you fuck her with the strap-on and continuing to be into it. She closes her eyes and enjoys the sensation.');
          } else {
            scene.text('Katja still bites her lip and moans as you fuck her with the strap-on and is clearly getting more into it. She closes her eyes and enjoys the sensation.');
          }
        } else {
          scene.text('Katja bites her lip and moans as you fuck her with the strap-on and she gradually starts to get into it. She closes her eyes and enjoys the sensation.');
        }
      } else {
        if (((s as any).katja_vag_check ?? 0) === 2) {
          (s as any).katja_vag_check = 3;
          ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (20);
          scene.text('You fuck Katja hard and fast as she moans in an excited voice, clearly not feeling any discomfort anymore.');
        } else {
          if ((!(Math.floor(Math.random() * 2) + 0))) {
            ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (10);
            scene.text('You fuck Katja hard and fast as she moans in an excited voice and rolls her eyes in pleasure.');
          } else {
            ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (20);
            scene.text('You fuck Katja hard and fast and she moans in an excited voice. "Faster, harder, deeper! Yes, fuck me! Pound me!"');
          }
        }
      }
    }
  }
  if ((!((s as any).katja_vag_check ?? 0))) {
    (s as any).katja_vag_check = 1;
    if (((s as any).npc_vag ?? 0)?.['A14'] < ((s as any).dick1 ?? 0)) {
      (s as any).katja_vag_check = 2;
      ((s as any).npc_vag = (s as any).npc_vag ?? {})['A14'] = ((s as any).npc_vag['A14'] ?? 0) + (1);
    }
    if (((s as any).npc_vag ?? 0)?.['A14'] < ((s as any).dick1 ?? 0) / 2) {
      ((s as any).npc_vag = (s as any).npc_vag ?? {})['A14'] = ((s as any).npc_vag['A14'] ?? 0) + (1);
    }
  }
  if (((s as any).katjaQW ?? 0)?.['horny'] >= 100) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = 0;
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['slut'] = ((s as any).katjaQW['slut'] ?? 0) + (2);
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['orgasm_day'] = ((s as any).daystart ?? 0);
    scene.text('Katja moans and bites her lip, looking like she\'s already about to orgasm and you lock gazes with her as you increase the pace of your thrusts.');
    scene.text('After only a few seconds, you feel her starting to tremble violently. You let her ride out her orgasm while slowly pushing the dildo in and out of her a few more times, listening to her sweet moaning as she tries to regain her breath.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Further', goto: ['KatjaEvDin', 'strapon_main'] },
  ]);
  scene.build();
}

function enterStraponAnal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/sex/school/strapon_anal.jpg');
  scene.text('You roll Katja onto her stomach and spread her legs. Spreading her ass cheeks with your hands, you being to rub her anus with your fingers before grabbing a bottle of lube and lubing up your fingers.');
  scene.text('You slide two into her ass, stretching it a little while lubing it up. You then lube up the dildo before leaning over and sliding it slowly into her ass. You then start slowly fucking her ass.');
  if (((s as any).katjaQW ?? 0)?.['strapon_ass'] === 0) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['strapon_ass'] = 1;
  }
  qspCall(s, 'arousal', 'anal_strap_give', 5, ((s as any).npcID ?? 0), ((s as any).npcID1 ?? 0), 'lesbian', 'dom');
  qspCall(s, 'stat', '');
  if (((s as any).npc_ass ?? 0)?.['A14'] < 1) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['slut'] = ((s as any).katjaQW['slut'] ?? 0) - (5);
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = 0;
    scene.text('Katja squeals when you push the dildo into her very tight ass. Even with all the lube, it\'s very tight and difficult to work it deeper into her.');
    scene.text('She cries out in pain and tears flow from her eyes as you fuck her ass.');
  } else {
    if (((s as any).npc_ass ?? 0)?.['A14'] < ((s as any).dick1 ?? 0) - 5) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['slut'] = ((s as any).katjaQW['slut'] ?? 0) - (1);
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) - (30);
      if (((s as any).katja_ass_check ?? 0) > 0) {
        scene.text('The dildo is still very hard to slide into Katja\'s tight ass, but you slowly work your way down until you\'re balls deep inside her, causing her to cry out in pain. Her hands grasp at the sheets tightly and she bites the pillow as you fuck her ass.');
      } else {
        scene.text('It takes some effort to get the dildo to slide into Katja\'s tight ass, but you slowly work your way down until you\'re balls deep inside her, causing her to cry out in pain. Her hands grasp at the sheets tightly and she bites the pillow as you fuck her ass.');
      }
    } else {
      if (((s as any).npc_ass ?? 0)?.['A14'] < ((s as any).dick1 ?? 0) - 3  ||  ((s as any).katjaQW ?? 0)?.['horny'] < 10) {
        ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) - (5);
        if (((s as any).katja_ass_check ?? 0) > 0) {
          if (((s as any).npc_ass ?? 0)?.['A14'] > ((s as any).dick1 ?? 0) - 5) {
            scene.text('The dildo is still difficult to slide into Katja\'s ass, but you slowly work your way down until you\'re balls deep inside her. Katja stills cries out a little in pain and she grasps tightly at the sheets, caught between intense pleasure and pain as her moans echo both sensations.');
          } else {
            scene.text('It\'s getting easier to slide the dildo into Katja\'s ass, but you still slowly work your way down until you\'re balls deep inside her, which causes her to cry out a little in pain, but less than before. She tightly grasps at the sheets, caught between intense pleasure and pain as her moans echo both sensations.');
          }
        } else {
          scene.text('It takes a bit of effort to get the dildo to slide into Katja\'s ass, but you slowly work your way down until you\'re balls deep inside her, causing her to cry out a little in pain as she tightly grasps at the sheets, caught between intense pleasure and pain as her moans echo both sensations.');
        }
      } else {
        if (((s as any).npc_ass ?? 0)?.['A14'] < ((s as any).dick1 ?? 0)) {
          ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (5);
          if (((s as any).katja_ass_check ?? 0) > 0) {
            scene.text('Your work on Katja\'s ass has born fruit and the dildo slides into it fairly easily, and you slowly work your way down until you\'re balls deep inside her. She starts to moans in pleasure as you roughly fuck her ass.');
          } else {
            scene.text('The dildo slides into Katja\'s ass fairly easily, and you slowly work your way down until you\'re balls deep inside her. She moans in pleasure as you roughly fuck her ass.');
          }
        } else {
          ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (10);
          if (((s as any).katja_ass_check ?? 0) > 0) {
            // TODO-QSP: 'Your work on Katja''s ass has born fruit and the strap-on easily slides into Katja''s ass all the w...
          } else {
            scene.text('The strap-on easily slides into Katja\'s ass all the way to the hilt. She moans in pleasure as you roughly fuck her ass.');
          }
        }
      }
    }
  }
  if ((!((s as any).katja_ass_check ?? 0))) {
    (s as any).katja_ass_check = 1;
    if (((s as any).npc_ass ?? 0)?.['A14'] < ((s as any).dick1 ?? 0)) {
      ((s as any).npc_ass = (s as any).npc_ass ?? {})['A14'] = ((s as any).npc_ass['A14'] ?? 0) + (1);
    }
    if (((s as any).npc_ass ?? 0)?.['A14'] < ((s as any).dick1 ?? 0) / 2) {
      ((s as any).npc_ass = (s as any).npc_ass ?? {})['A14'] = ((s as any).npc_ass['A14'] ?? 0) + (1);
    }
  }
  if (((s as any).katjaQW ?? 0)?.['horny'] >= 100) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = 0;
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['slut'] = ((s as any).katjaQW['slut'] ?? 0) + (3);
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['orgasm_day'] = ((s as any).daystart ?? 0);
    scene.text('Katja moans and bites her lip, looking like she\'s already about to orgasm and you lock gazes with her as you increase the pace of your thrusts.');
    scene.text('After only a few seconds, you feel her starting to tremble violently. You let her ride out her orgasm while slowly thrusting the dildo in and out of her a few more times, listening to her sweet moaning as she tries to regain her breath.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Further', goto: ['KatjaEvDin', 'strapon_main'] },
  ]);
  scene.build();
}

function enterStraponStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).katjaQW ?? 0)?.['horny'] >= 100) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = 80;
  }
  scene.text('You grab your handbag and pull out the toy.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Strap it on', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'npcStat', 'A14');
    qspCall(st, 'npcstat', 'D' + ((st as any).strapNumber ?? 0) + '', 'a');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/school/strapon.jpg');
    scene.text('You put the strap-on harness on and buckle it in place as Katja bites her lip watching you.');
    scene.actions([
      { label: 'Make Katja suck the strap-on', goto: ['KatjaEvDin', 'strapon_bj'] },
      { label: 'Fuck Katja with the strap-on', goto: ['KatjaEvDin', 'strapon_miss'] },
      { label: 'Fuck Katja in the ass with the strap-on', goto: ['KatjaEvDin', 'strapon_anal'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSex(s: GameState, scene: SceneBuilder): void {
  if (((s as any).katjaQW ?? 0)?.['slut'] >= 40  &&  ((s as any).katjaQW ?? 0)?.['horny'] >= 40  &&  ((s as any).npc_had_sex ?? 0)?.['A14']  &&  ((s as any).mc_inventory ?? 0)?.['strapon'] > 0) {
    scene.actions([
      { label: 'Get your strap-on', goto: ['KatjaEvDin', 'strapon_start'] },
    ]);
  }
  if (((s as any).katjaQW ?? 0)?.['slut'] >= 40  &&  ((s as any).katjaQW ?? 0)?.['horny'] >= 40  &&  ((s as any).npc_had_sex ?? 0)?.['A14']  &&  ((s as any).katjaQW ?? 0)?.['fisted_vag'] > 0) {
    scene.actions([
      { label: 'Use your fist on Katja', goto: ['KatjaEvDin', 'fisting'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Relax', handler: (st: GameState) => {
    if (((st as any).pcs_horny ?? 0) < 50) {
      (st as any).pcs_horny = 50;
    }
    qspCall(st, 'stat', '');
    if (((st as any).katjaQW ?? 0)?.['slut'] >= 20) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (1);
      scene.text('Katja puts her hand between your legs. You become aroused and your pussy becomes wet.');
      qspCall(st, 'arousal', 'vaginal_finger', 5, 'lesbian', 'dom');
      qspCall(st, 'stat', '');
      scene.actions([
        { label: 'Spread your legs', goto: ['KatjaEvDin', 'kuni_p'] },
      ]);
    } else {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (1);
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = Math.min((((st as any).katjaQW ?? 0)?.['horny']), 40);
      scene.text('Katja is embarrassed and pulls her hand away from you.');
      qspCall(st, 'arousal', 'end');
      if (((st as any).loc ?? 0) === 'katja_dorm') {
        scene.actions([
          { label: 'Stop talking', goto: ['katja_dorm', 'start'] },
        ]);
      } else {
        scene.actions([
          { label: 'Leave the room', handler: (st: GameState) => {
    qspGoto(st, 'mey_home', 'start');
  } },
        ]);
      }
      scene.actions([
        { label: 'Talk about something else', handler: (st: GameState) => {
    if (((st as any).loc ?? 0) === 'katja_dorm') {
      qspGoto(st, 'katja_dorm', 'talk');
    } else {
      qspGoto(st, 'KatjaHomeTalk', '');
    }
  } },
      ]);
    }
  } },
    { label: 'Touch Katja between her legs', handler: (st: GameState) => {
    if (((st as any).pcs_horny ?? 0) < 50) {
      (st as any).pcs_horny = 50;
    }
    qspCall(st, 'stat', '');
    if (((st as any).katjaQW ?? 0)?.['slut'] >= 20) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (1);
      scene.text('You put your hand between her legs, feeling her wet pussy under her panties.');
      qspCall(st, 'arousal', 'vaginal_finger_give', 5, 'lesbian', 'dom');
      qspCall(st, 'stat', '');
      scene.actions([
        { label: 'Lick Katja', goto: ['KatjaEvDin', 'kuni'] },
      ]);
    } else {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (1);
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = Math.min((((st as any).katjaQW ?? 0)?.['horny']), 40);
      scene.text('Katja is embarrassed and removes your hand.');
      if (((st as any).loc ?? 0) === 'katja_dorm') {
        scene.actions([
          { label: 'Stop talking', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'katja_dorm', 'start');
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Leave the room', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'mey_home', 'start');
  } },
        ]);
      }
      scene.actions([
        { label: 'Talk about something else', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    if (((st as any).loc ?? 0) === 'katja_dorm') {
      qspGoto(st, 'katja_dorm', 'talk');
    } else {
      qspGoto(st, 'KatjaHomeTalk', '');
    }
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterKuni(s: GameState, scene: SceneBuilder): void {
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['slut'] = ((s as any).katjaQW['slut'] ?? 0) + (1);
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = 0;
  if (((s as any).npc_had_sex ?? 0)?.['A14'] === 0) {
    ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})['A14'] = 1;
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['slut'] = ((s as any).katjaQW['slut'] ?? 0) + (5);
  }
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/sex/school/kuni2.jpg');
  scene.text('You lean in between Katja\'s legs and start licking her pussy. She moans and closes her eyes, enjoying your tongue, and after a few minutes, shivers as her pussy starts to contract rhythmically.');
  scene.text('Katja clutches your hair, no longer able to hold back as she moans loudly in orgasm. She then pushes your head away.');
  qspCall(s, 'arousal', 'cuni_give', 5, 'lesbian');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_horny ?? 0) >= 50) {
    // TODO-QSP: dynamic text: Katja smiles at you. "That was great, <<$pcs_nickname>>. Spread your legs."
    scene.text(`Katja smiles at you. "That was great, ${((s as any).pcs_nickname ?? '')}. Spread your legs."`);
    scene.actions([
      { label: 'Spread your legs', goto: ['KatjaEvDin', 'kuni_p'] },
    ]);
  } else {
    if (((s as any).loc ?? 0) === 'katja_dorm') {
      scene.actions([
        { label: 'Stop talking', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'katja_dorm', 'start');
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Leave the room', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'mey_home', 'start');
  } },
      ]);
    }
    scene.actions([
      { label: 'Talk about something else', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    if (((st as any).loc ?? 0) === 'katja_dorm') {
      qspGoto(st, 'katja_dorm', 'talk');
    } else {
      qspGoto(st, 'KatjaHomeTalk', '');
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterFisting(s: GameState, scene: SceneBuilder): void {
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['slut'] = ((s as any).katjaQW['slut'] ?? 0) + (1);
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = 0;
  if (((s as any).npc_vag ?? 0)?.['A14'] < 33) {
    ((s as any).npc_vag = (s as any).npc_vag ?? {})['A14'] = ((s as any).npc_vag['A14'] ?? 0) + (3);
  } else {
    ((s as any).npc_vag = (s as any).npc_vag ?? {})['A14'] = 36;
  }
  if (((s as any).npc_had_sex ?? 0)?.['A14'] === 0) {
    ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})['A14'] = 1;
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['slut'] = ((s as any).katjaQW['slut'] ?? 0) + (5);
  }
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/sex/home/fisting/fisting_repeat.jpg');
  scene.text('After making sure Katja is well lubed and ready, she lays back to spread her legs for you. As she massages her clit with a toy, you slide your fingers in one at a time, working them in and around, bringing her pleasure with each thrust. She cries out in orgasm more than once, which makes her more wet and ready.');
  scene.text('With a final push, you tuck your thumb in and curl your hand to slide it all the way in, her pussy clenching around your wrist. You give her only a few seconds of rest before twisting and thrusting your hand more vigorously within her pussy.');
  scene.text('It doesn\'t take long before her climax breaks again and she arches her back and attempts to keep her voice down as you continue to move your hand and fingers inside of her, but eventually, you slow down and slide your hand out of her pussy.');
  scene.text('Katja tries to catch her breath as she continues to have aftershock orgasms, while you watch her pussy close slowly around something that isn\'t there. Eventually, you climb up and lay next to her, holding her as she shakes with her final orgasms and kissing her softly until you\'re ready for something else...');
  qspCall(s, 'arousal', 'vaginal_fist_give', 5, 'lesbian');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_horny ?? 0) >= 50) {
    scene.actions([
      { label: 'Ask Katja to go down on you', goto: ['KatjaEvDin', 'kuni_p'] },
    ]);
  } else {
    if (((s as any).loc ?? 0) === 'katja_dorm') {
      scene.actions([
        { label: 'Stop talking', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'katja_dorm', 'start');
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Leave the room', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'mey_home', 'start');
  } },
      ]);
    }
    scene.actions([
      { label: 'Talk about something else', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    if (((st as any).loc ?? 0) === 'katja_dorm') {
      qspGoto(st, 'katja_dorm', 'talk');
    } else {
      qspGoto(st, 'KatjaHomeTalk', '');
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterKuniP(s: GameState, scene: SceneBuilder): void {
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['slut'] = ((s as any).katjaQW['slut'] ?? 0) + (1);
  if (((s as any).npc_had_sex ?? 0)?.['A14'] === 0) {
    ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})['A14'] = 1;
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['slut'] = ((s as any).katjaQW['slut'] ?? 0) + (5);
  }
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/sex/school/kuni.jpg');
  scene.text('Katja moves her head between your legs and you feel her tongue begin to toy with your clit, causing you to moan softly.');
  scene.text('After a while, you feel a sensation building inside you before it finds release and you\'re in the throes of a powerful orgasm.');
  scene.text('Soon, the feeling becomes too much and you gently lift Katja\'s head away from you.');
  (s as any).orgasm_or = 'yes';
  qspCall(s, 'arousal', 'cuni', 5, 'lesbian', 'dom');
  qspCall(s, 'stat', '');
  if (((s as any).katjaQW ?? 0)?.['horny'] > 0) {
    // TODO-QSP: dynamic text: Katja smiles at you. "That was great, <<$pcs_nickname>>. Come on now, my turn."
    scene.text(`Katja smiles at you. "That was great, ${((s as any).pcs_nickname ?? '')}. Come on now, my turn."`);
    scene.actions([
      { label: 'Lick Katja', goto: ['KatjaEvDin', 'kuni'] },
    ]);
  } else {
    if (((s as any).loc ?? 0) === 'katja_dorm') {
      scene.actions([
        { label: 'Stop talking', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'katja_dorm', 'start');
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Leave the room', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'mey_home', 'start');
  } },
      ]);
    }
    scene.actions([
      { label: 'Talk about something else', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    if (((st as any).loc ?? 0) === 'katja_dorm') {
      qspGoto(st, 'katja_dorm', 'talk');
    } else {
      qspGoto(st, 'KatjaHomeTalk', '');
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterKuniDom(s: GameState, scene: SceneBuilder): void {
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['slut'] = ((s as any).katjaQW['slut'] ?? 0) + (1);
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = 0;
  if (((s as any).npc_had_sex ?? 0)?.['A14'] === 0) {
    ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})['A14'] = 1;
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['slut'] = ((s as any).katjaQW['slut'] ?? 0) + (5);
  }
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/sex/school/kuni2.jpg');
  scene.text('You lean in between Katja\'s legs and start licking her pussy. She moans and closes her eyes, enjoying your tongue, and after a few minutes, shivers as her pussy starts to contract rhythmically.');
  scene.text('Katja clutches your hair, no longer able to hold back as she moans loudly in orgasm. She then pushes your head away.');
  qspCall(s, 'arousal', 'cuni_give', 5, 'lesbian', 'sub');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_horny ?? 0) >= 50) {
    if (((s as any).katjaQW ?? 0)?.['dom'] < (Math.floor(Math.random() * (50 - -50 + 1)) + (-50))  ||  (((s as any).katjaQW ?? 0)?.['strapon_bj'] + ((s as any).katjaQW ?? 0)?.['strapon_vag'] + ((s as any).katjaQW ?? 0)?.['strapon_ass']) < 3) {
      // TODO-QSP: dynamic text: Katja smiles at you. "That was great, <<$pcs_nickname>>. Spread your legs."
      scene.text(`Katja smiles at you. "That was great, ${((s as any).pcs_nickname ?? '')}. Spread your legs."`);
      scene.actions([
        { label: 'Spread your legs', goto: ['KatjaEvDin', 'kuni_p'] },
      ]);
    } else {
      // TODO-QSP: dynamic text: She looks at you with both a satisfied grin with a mischievous look in her eye, ...
      scene.text(`She looks at you with both a satisfied grin with a mischievous look in her eye, aware you're horny as well. "That was great ${((s as any).pcs_nickname ?? '')}, but I think that's enough for today."`);
      qspCall(s, 'willpower', 'sex', 'resist', 'hard');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Say goodbye and go home', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Say goodbye and go home', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    if (((st as any).loc ?? 0) === 'katja_dorm') {
      qspGoto(st, 'uni_dorm', 'second_floor');
    } else {
      qspGoto(st, 'pav_residential', '');
    }
  } },
        ]);
      }
      scene.actions([
        { label: 'Beg her to give you a turn', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['dom'] = ((st as any).katjaQW['dom'] ?? 0) + (1);
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/myturn.jpg');
    // TODO-QSP: dynamic text: You beg her to give you a turn, but she shakes her head. "Sorry <<$pcs_nickname>...
    scene.text(`You beg her to give you a turn, but she shakes her head. "Sorry ${((st as any).pcs_nickname ?? '')}, I'm just not in the mood to go down on you. If you really want something, I've got this..."`);
    scene.text('She pulls out a strap-on harness with a rather large dildo attached to it and gives you a wicked grin. You can tell she\'s just itching to use it on you.');
    qspCall(st, 'willpower', 'sex', 'resist', 'hard');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Decline and go home', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Decline and go home', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    if (((st as any).loc ?? 0) === 'katja_dorm') {
      qspGoto(st, 'uni_dorm', 'second_floor');
    } else {
      qspGoto(st, 'pav_residential', '');
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/katjanewtoy.jpg');
    scene.text('You bite your lower lip. You\'re turned on at the idea and nod your head before you start undressing as Katja grins and starts putting the harness on.');
    // TODO-QSP: dynamic text: "This is going to be fun, <<$pcs_nickname>>. I can''t wait to fuck you with this...
    scene.text(`"This is going to be fun, ${((st as any).pcs_nickname ?? '')}. I can't wait to fuck you with this."`);
    scene.actions([
      { label: 'Blowjob', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/school/katstrapbj.mp4');
    scene.text('As you get naked, she makes sure the harness is securely in place before she looks over at you and grins, swinging her hips back and forth to make the dildo swing along with her, which makes her giggle. After she amuses herself, she looks at you with a wicked grin and walks over.');
    scene.text('She grabs you by the hair, not too hard but not very gently either, pulls you off the bed and gets you down in front of her on your knees. Once you\'re on your knees, she pushes the head of the dildo against your lips and slides it into your mouth. With a firm hold on your hair, she starts ramming the dildo down your throat.');
    scene.text('No matter how used to being throat fucked you are, she makes you gag. She buries it to the base in your throat and leaves it there until you start to gag before going back to roughly fucking your mouth. Each time she makes you gag, you hear her giggle, clearly enjoying herself.');
    scene.text('With tears running down your cheeks and saliva dripping from your mouth, she finally pulls you off the dildo. "I think we got this wet enough, don\'t you? Ready for round two?"');
    qspCall(st, 'arousal', 'dildo_suck', 5, 'lesbian', 'sub', 'rough', 'deepthroat');
    qspCall(st, 'stat', '');
    qspCall(st, 'willpower', 'vaginal', 'resist', 'hard');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Decline and go home', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Decline and go home', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    if (((st as any).loc ?? 0) === 'katja_dorm') {
      qspGoto(st, 'uni_dorm', 'second_floor');
    } else {
      qspGoto(st, 'pav_residential', '');
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (15);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/school/katstrapfuck.mp4');
    scene.text('You nod your head and Katja pulls you up to your feet by your hair. She grabs you on either side of the head and licks some of the saliva off your chin before slowly moving her tongue up to your mouth. You eagerly open your mouth and she gives you a passionate kiss, forcing her tongue into your mouth and then pushes you onto the bed. "That\'s my good little fuck slut, now get on your hands and knees like a good little slut!" You get on all fours as she kneels down behind you and gives your ass a hard smack.');
    scene.text('She holds the dildo with one hand and starts rubbing it against your pussy while using the other to grab your hair again and pull your head back before she slides the dildo into your wet pussy. She barely has the tip all the way in when she pulls back on your hair, forcing you to lean back as she thrusts her hips forward, shoving the dildo the full length of the dildo inside you.');
    scene.text('Before you have a chance to get used to it, she starts roughly and furiously fucking you, your moans getting louder as the pleasure builds. "Yeah, you love this, don\'t you, bitch?!"');
    scene.text('"Yes, yes! Please fuck me. Use me!" you moan back and she doubles her efforts before she finally pulls out of you, keeping hold of your hair as she drags you off the bed and over to her desk, which she bends you over.');
    scene.text('"Reach back and pull those ass cheeks apart so I can fuck you in the ass!" she commands.');
    scene.text('You don\'t know if you can resist her, you don\'t know if you even want to...');
    qspCall(st, 'arousal', 'vaginal_strap', 5, 'lesbian', 'sub', 'rough');
    qspCall(st, 'stat', '');
    qspCall(st, 'willpower', 'anal', 'resist', 'hard');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Decline and go home', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Decline and go home', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    if (((st as any).loc ?? 0) === 'katja_dorm') {
      qspGoto(st, 'uni_dorm', 'second_floor');
    } else {
      qspGoto(st, 'pav_residential', '');
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Surrender your ass', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/school/katstrapanal.jpg');
    scene.text('You grab your ass cheeks and pull them apart, feeling the head of the dildo pressing against your asshole almost at once. "That\'s my good little buttslut. We\'ll have you trained in no time."');
    scene.text('With only the lubrication from your pussy, she slides it into your ass. She is gentle at first, working it in slowly as she thrusts in and out at a steady pace, gradually working it deeper and deeper into your ass. Once she has pushed the full length into your ass, she starts to pick up the pace and fucks you harder as you moan in a mix of pleasure and pain.');
    scene.text('She keeps picking up speed and soon the sound of her hips slapping against your ass can be heard over your moaning. She seems to lose herself in the act and stops paying attention to you. You don\'t think she would even notice if you orgasmed. After a good few minutes of this, she starts panting as she gets tired.');
    qspCall(st, 'arousal', 'anal_strap', 5, 'lesbian', 'sub', 'rough');
    if (((st as any).pcs_horny ?? 0) >= 100) {
      (st as any).orgasm_or = 'yes';
      (st as any).orgasm_txt = 'It is then that your orgasm hits you. It is sudden and amazingly intense.';
      qspCall(st, 'arousal', 'anal_strap', (-1), 'lesbian', 'sub', 'rough');
    }
    qspCall(st, 'arousal', 'end');
    scene.text('Yet she doesn\'t slow down her furious pace. Finally unable to keep it up any more, she collapses on your back and you feel her sweat on your back and her heavy breathing in your ear as she rests against you with the dildo still firmly up your ass.');
    scene.text('You take the time to rest and relax yourself, coming down from the pounding you just received. A few minutes later, she kisses your neck before climbing off you and pulling the dildo out slowly. Getting up yourself, you see her taking the harness off and tossing it aside. You notice that her thighs are slick with sweat and her own juices before she grabs you by the neck and gives you a passionate, deep and very long kiss.');
    // TODO-QSP: dynamic text: "My god <<$pcs_nickname>>, that was amazing! I hope I didn''t hurt you too much ...
    scene.text(`"My god ${((st as any).pcs_nickname ?? '')}, that was amazing! I hope I didn't hurt you too much and you enjoyed it as much as I did. No wonder boys fuck us like that, that was amazing!" she says upon breaking the kiss.`);
    scene.text('She falls back on her bed, still breathing hard and looking at you with a somewhat possessive look as you lie down next to her.');
    scene.text('"It was wonderful. I\'m glad you enjoyed it too, even if you were a little rough at times."');
    scene.text('She leans over and gives you another kiss. "Sorry, but that was beyond description. We\'re going to have to do that again sometime."');
    scene.text('The two of you then lay quietly for a while, basking in the aftermath. You know something in your relationship has changed and you think for the better. After a while, you get up and get dressed.');
    if (((st as any).loc ?? 0) === 'katja_dorm') {
      scene.actions([
        { label: 'Stop talking', goto: ['katja_dorm', 'start'] },
      ]);
    } else {
      scene.actions([
        { label: 'Leave the room', goto: ['mey_home', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Talk about something else', handler: (st: GameState) => {
    if (((st as any).loc ?? 0) === 'katja_dorm') {
      qspGoto(st, 'katja_dorm', 'talk');
    } else {
      qspGoto(st, 'KatjaHomeTalk', '');
    }
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
    }
  } else {
    qspCall(s, 'arousal', 'end');
    if (((s as any).loc ?? 0) === 'katja_dorm') {
      scene.actions([
        { label: 'Stop talking', goto: ['katja_dorm', 'start'] },
      ]);
    } else {
      scene.actions([
        { label: 'Leave the room', goto: ['mey_home', 'start'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterKissEvents(s: GameState, scene: SceneBuilder): void {
  if (((s as any).katjaQW ?? 0)?.['school_kiss'] === 0) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['school_kiss'] = ((s as any).katjaQW['school_kiss'] ?? 0) + (1);
    scene.text('As you kiss Katja, someone sighs loudly, probably appreciating the view. However, when you could break away from Katja\'s lips, there is no one there.');
    if (((s as any).loc ?? 0) === 'pav_disco') {
      scene.actions([
        { label: 'Return to the dance', goto: ['pav_disco', ''] },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
      ]);
    }
  } else {
    if (((s as any).katjaQW ?? 0)?.['school_kiss'] === 1) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['school_kiss'] = ((s as any).katjaQW['school_kiss'] ?? 0) + (1);
      if ((!((s as any).pcs_haircol ?? 0))) {
        (s as any).textEvent = 'fire in the night';
      } else {
        if (((s as any).pcs_haircol ?? 0) === 1) {
          (s as any).textEvent = 'the sun in the autumn sky';
        } else {
          if (((s as any).pcs_haircol ?? 0) === 2) {
            (s as any).textEvent = 'two intertwining flames';
          } else {
            if (((s as any).pcs_haircol ?? 0) === 3) {
              (s as any).textEvent = 'the sun at the dawn';
            } else {
              (s as any).textEvent = 'a fiery rainbow';
            }
          }
        }
      }
      scene.text('As you kiss Katja, someone sighs loudly, probably appreciating the view.');
      // TODO-QSP: dynamic text: "Like <<$textEvent>>, you girls are just so a part of each other. Are all girls ...
      scene.text(`"Like ${((s as any).textEvent ?? '')}, you girls are just so a part of each other. Are all girls as close as the two of you?"`);
      scene.text('You\'re so surprised with this unexpectedly accurate comparison and turn to Ivan, who tenderly looks at you and Katja.');
      scene.text('"Thank you. And I don\'t know," you reply and he sighs again before leaving misty-eyed.');
      if (((s as any).loc ?? 0) === 'pav_disco') {
        scene.actions([
          { label: 'Return to the dance', goto: ['pav_disco', ''] },
        ]);
      } else {
        scene.actions([
          { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
        ]);
      }
    } else {
      if (((s as any).katjaQW ?? 0)?.['school_kiss'] >= 2) {
        if ((((s as any).loc ?? 0) === 'pav_disco'  &&  ((s as any).discoenable ?? 0)?.['A3'] === 1)  ||  ((s as any).loc ?? 0) !== 'pav_disco') {
          scene.text('As you kiss Katja, someone sighs loudly, probably appreciating the view.');
          scene.text('"How beautiful." It\'s Ivan again; it seems like he was waiting for you or something. Not being distracted, you continue to kiss Katja.');
          scene.text('"Look, look! Lesbians!" one guy yells and points at you and Katja.');
          scene.actions([
            { label: 'Glare at the moron', goto: ['katjaEvDin', 'moron'] },
          ]);
        } else {
          scene.actions([
            { label: 'Return to dance', goto: ['pav_disco', ''] },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMoron(s: GameState, scene: SceneBuilder): void {
  scene.img('images/pc/reactions/glare.jpg');
  scene.text('You glare at the moron calling you lesbians.');
  qspCall(s, 'willpower', 'misc', 'self', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Sing a different tune', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Sing a different tune', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/frenchkiss.jpg');
    scene.text('Looking at Ivan, then at this idiot, it seems that Ivan didn\'t notice him.');
    scene.text('You sigh. "Is that really necessary? She\'s my best friend and we want to kiss. You\'re just jealous!"');
    scene.text('"Lesbians! Lesbians!" He continues to scream like a freak so much that people begin to gather around to find out what\'s happening. Ivan steps over next to you and puts his hand on your shoulder, giving the idiot a glare as well.');
    scene.text('Boosted by Ivan\'s support, you continue. "We like boys, just not assholes like you!"');
    scene.text('With those words, you stand on your tiptoes and, clasping Ivan\'s head in your hands, give him a long passionate kiss with lots of tongue.');
    scene.actions([
      { label: 'Kiss again', handler: (st: GameState) => {
    if ((!((st as any).flag_KissEV ?? 0))) {
      (st as any).flag_KissEV = 1;
    }
    scene.img('images/characters/pavlovsk/school/girl/katja/prohorov_3.jpg');
    scene.text('"And I can kiss all the boys," you say under the joyous hubbub of guys gathering near you. You begin to kiss all the boys in succession while carefully avoiding the one that called you a lesbian.');
    scene.text('Seeing this, he seems offended. "I bet the redhead doesn\'t like guys," he says with a smirk, hoping Katja will kiss him to prove him wrong.');
    scene.text('"Wrong again, loser!" Katja replies and just as you did, starts going around kissing the boys.');
    if (((st as any).loc ?? 0) === 'pav_disco') {
      scene.text('After kissing the last boy, you turn back and make sure Katja kisses all of them too. You now realize the guys are hoping for more and quickly drag Katja away before you accidentally start an orgy.');
      scene.actions([
        { label: 'Return to dance', goto: ['pav_disco', ''] },
      ]);
    } else {
      scene.text('Just as you kiss the last boy, you turn around to see how Katja is doing with her kissing, but the bell rings and you all rush to class.');
      scene.actions([
        { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
      ]);
    }
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep silent', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/punch.jpg');
    scene.text('Ivan turns to glare at the guy. "Shut the fuck up!" he says in a menacing tone.');
    scene.text('They snort at Ivan. "Lesbian lover."');
    scene.text('Ivan doesn\'t reply, and just punches him in the face, dropping him with a single hit.');
    scene.text('A bit shocked, but also pleased Ivan would defend you like that, you smile at him. "Thank you, Ivan. Seriously, that was sweet."');
    scene.text('Katja just nods, dumbfounded, and Ivan shrugs, looking a little embarrassed, but it\'s obvious he\'s pleased with himself.');
    scene.actions([
      { label: 'Thank Ivan', handler: (st: GameState) => {
    if (((st as any).katjaQW ?? 0)?.['sex_clossedness'] === 0  &&  ((st as any).katjaQW ?? 0)?.['boy_block'] !== 1) {
      if (((st as any).npc_had_sex ?? 0)?.['A3']  &&  ((st as any).npc_had_sex ?? 0)?.['A14']  &&  ((st as any).loc ?? 0) !== 'pav_disco'  &&  ((st as any).katjaQW ?? 0)?.['slut'] >= 40  &&  ((st as any).katjaQW ?? 0)?.['horny'] >= 40) {
        if (((st as any).katjaQW ?? 0)?.['school_kiss'] === 2) {
          ((st as any).katjaQW = (st as any).katjaQW ?? {})['school_kiss'] = 3;
        }
        scene.img('images/characters/pavlovsk/school/girl/katja/whisper.jpg');
        scene.text('Approaching Ivan, you get up on your tiptoes and, clasping your arms around his neck, give him a kiss before whispering to him. "Like kissing girls?" Ivan replies with only a dumbfounded nod. "Well, then we can show you our appreciation, right Katja?"');
        scene.text('Katja nods, only half paying attention before she realizes what you said and looks at you and Ivan as her eyes light up with lustful fire. "Right."');
        scene.actions([
          { label: 'Hug Katja', goto: ['katja_sex', 'prohorov_sex'] },
        ]);
      } else {
        scene.img('images/characters/pavlovsk/school/girl/katja/frenchkiss.jpg');
        scene.text('"Thank you, Ivan," you smile before you make out with him.');
        scene.text('He responds by passionately kissing you back before quickly leaving.');
        scene.text('"Well, these athletes are hot..." Katja says with a sigh while looking at Ivan\'s ass as he walks away.');
        if (((st as any).knowKatjaPreg ?? 0) === 1) {
          scene.text('You snort. "Just what you need when you already have one inside."');
        } else {
          scene.text('You snort, although Ivan does have a fine-looking ass...');
        }
        if (((st as any).loc ?? 0) === 'pav_disco') {
          scene.actions([
            { label: 'Return to the dance', goto: ['pav_disco', ''] },
          ]);
        } else {
          scene.actions([
            { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
          ]);
        }
      }
    } else {
      scene.text('You give Ivan a quick hug. "Thank you, Ivan"');
      scene.text('Katja also thanks him and gives him a hug.');
      if (((st as any).katjaQW ?? 0)?.['boy_block'] !== 1) {
        scene.text('"Well, these athletes are hot..." Katja says with a sigh while looking at Ivan\'s ass as he walks away.');
        if (((st as any).knowKatjaPreg ?? 0) === 1) {
          scene.text('You snort. "Just what you need when you already have one inside."');
        } else {
          scene.text('You snort, although Ivan does have a fine-looking ass...');
        }
      }
      if (((st as any).loc ?? 0) === 'pav_disco') {
        scene.actions([
          { label: 'Return to the dance', goto: ['pav_disco', ''] },
        ]);
      } else {
        scene.actions([
          { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
        ]);
      }
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterShower(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  if (((s as any).katjaQW ?? 0)?.['horny'] >= 50  &&  ((s as any).katjaQW ?? 0)?.['QWstage'] > 2  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] < 2) {
    scene.text('Katja takes you into the bathroom.');
    scene.text('"I think I\'ll join you..." she blushes.');
    scene.actions([
      { label: 'Have a shower alone', handler: (st: GameState) => {
    (st as any).noshampoo = 1;
    qspCall(st, 'din_van', 'showerdin');
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    (st as any).pcs_hairbsh = 1;
    (st as any).pcs_makeup = 1;
    if (((st as any).frost ?? 0) > 0) {
      (st as any).frost = 0;
    }
    qspCall(st, 'stat', '');
    scene.img('images/shared/home/bathroom/dush.mp4');
    scene.text('You kick Katja out of the bathroom and close the door before you get into the shower and lather your body with a cloth.');
    scene.text('After washing off the soap, you wash your hair with shampoo. Once you rinse the shampoo off, you\'re completely clean.');
    if (((st as any).deodorant_on ?? 0) === 1) {
      qspCall(st, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the shower.');
    }
    scene.actions([
      { label: 'Get out of the shower', goto: ['KatjaHomeTalk', ''] },
    ]);
  } },
      { label: 'Shower together', handler: (st: GameState) => {
    (st as any).noshampoo = 1;
    qspCall(st, 'din_van', 'showerdin');
    (st as any).pcs_hairbsh = 1;
    (st as any).pcs_makeup = 1;
    if (((st as any).frost ?? 0) > 0) {
      (st as any).frost = 0;
    }
    qspCall(st, 'arousal', 'erotic_nudity', 15);
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (10);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/shower.jpg');
    scene.text('You and Katja undress and climb into the shower together.');
    if (((st as any).pcs_pubes ?? 0) <= 3) {
      scene.text('Katja\'s eyes glance over your body, lingering a little on your breasts and pussy before she moves closer to you as you rinse yourself off.');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/shower2.jpg');
    scene.text('Katja gently rubs shampoo into your hair before rinsing it out.');
    if (((st as any).katjaQW ?? 0)?.['horny'] >= 80  &&  ((st as any).npc_had_sex ?? 0)?.['A14']) {
      scene.text('Katja washes your pussy and breasts with soap, gently stroking her palms against you. Her cheeks are flushed and her eyes are glistening.');
      scene.actions([
        { label: 'Continue', goto: ['KatjaHomeTalk', 'shower_kiss_home'] },
      ]);
    } else {
      scene.text('You and Katja wash yourselves.');
      scene.actions([
        { label: 'Get out of the shower', goto: ['KatjaHomeTalk', ''] },
      ]);
    }
    if (((st as any).deodorant_on ?? 0) === 1) {
      qspCall(st, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the shower.');
    }
  } },
      ]);
    } else {
      scene.text('Katja eyes glance over your body, lingering a little on your breasts and pubic hair.');
      // TODO-QSP: dynamic text: She then smiles at you. "You''ve got too much hair down there, <<$pcs_nickname>>...
      scene.text(`She then smiles at you. "You've got too much hair down there, ${((st as any).pcs_nickname ?? '')}! It's not fashionable! I'll shave it off."`);
      scene.actions([
        { label: 'Get shaved', handler: (st: GameState) => {
    (st as any).pcs_pubes = 0;
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (10);
    scene.img('images/characters/pavlovsk/school/girl/katja/lobok.jpg');
    scene.text('Katja sits in the bath as you lather yourself up with shaving gel. She then takes a razor and begins to gently shave the hair between your legs.');
    if (((st as any).katjaQW ?? 0)?.['horny'] >= 80  &&  ((st as any).npc_had_sex ?? 0)?.['A14']) {
      qspCall(st, 'arousal', 'foreplay', 5);
      qspCall(st, 'stat', '');
      scene.text('Katja washes your pussy and breasts with soap, gently stroking her palms against you. Her cheeks are flushed and her eyes are glistening.');
      scene.actions([
        { label: 'Continue', goto: ['KatjaHomeTalk', 'shower_kiss_home'] },
      ]);
    } else {
      qspCall(st, 'arousal', 'massage', 5);
      qspCall(st, 'stat', '');
      scene.text('Katja, having finally shaved all the hair between your legs, washes you off with soap.');
      scene.actions([
        { label: 'Get out of the shower', goto: ['KatjaHomeTalk', ''] },
      ]);
    }
    if (((st as any).deodorant_on ?? 0) === 1) {
      qspCall(st, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the shower.');
    }
  } },
      ]);
    }
  } },
    ]);
  } else {
    (s as any).noshampoo = 1;
    qspCall(s, 'din_van', 'showerdin');
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).pcs_hairbsh = 1;
    (s as any).pcs_makeup = 1;
    if (((s as any).frost ?? 0) > 0) {
      (s as any).frost = 0;
    }
    qspCall(s, 'stat', '');
    scene.img('images/shared/home/bathroom/dush.mp4');
    scene.text('Katja shows you where the toiletries are and leaves you to have a shower. You get into the shower and begin to lather your body with a cloth.');
    scene.text('After washing off the soap, you wash your hair with shampoo. Once you rinse off the shampoo, you\'re completely clean.');
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the shower.');
    }
    scene.actions([
      { label: 'Get out of the shower', goto: ['KatjaHomeTalk', ''] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'kiss':
      enterKiss(s, scene);
      break;
    case 'strapon_main':
      enterStraponMain(s, scene);
      break;
    case 'strapon_bj':
      enterStraponBj(s, scene);
      break;
    case 'strapon_miss':
      enterStraponMiss(s, scene);
      break;
    case 'strapon_anal':
      enterStraponAnal(s, scene);
      break;
    case 'strapon_start':
      enterStraponStart(s, scene);
      break;
    case 'sex':
      enterSex(s, scene);
      break;
    case 'kuni':
      enterKuni(s, scene);
      break;
    case 'fisting':
      enterFisting(s, scene);
      break;
    case 'kuni_p':
      enterKuniP(s, scene);
      break;
    case 'kuni_dom':
      enterKuniDom(s, scene);
      break;
    case 'kiss_events':
      enterKissEvents(s, scene);
      break;
    case 'moron':
      enterMoron(s, scene);
      break;
    case 'shower':
      enterShower(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const katjaEvDin: LocationDef = {
  name: 'katjaEvDin',
  title: 'You bring your face to Katja\'s and feel her hot breath on yo',
  region: 'other',
  enter: enter,
};
