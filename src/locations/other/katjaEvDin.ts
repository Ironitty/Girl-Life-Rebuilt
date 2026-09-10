import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterKiss(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A14');
  qspCall(s, 'mood', 'raise', 'small');
  qspCall(s, 'arousal', 'kiss', 3, 'lesbian');
  (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (10);
  if (((s as any).katjaQW ?? 0)?.['QWstage'] < 3) {
    if (((s as any).katjaQW ?? 0)?.['slut'] < 5) {
      (s as any).katjaQW['slut'] = 10;
    } else {
      (s as any).katjaQW['slut'] = ((s as any).katjaQW['slut'] ?? 0) + (5);
    }
    (s as any).katjaQW['QWstage'] = 3;
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
        { label: 'Remove her hands [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Remove her hands', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 3, 'lesbian');
    (s as any).katjaQW['dom'] = ((s as any).katjaQW['dom'] ?? 0) - (1);
    (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) - (10);
    (s as any).katjaQW['horny'] = qspUntranslated(s, "min(katjaQW['horny'], 60)", { location: "katjaEvDin" });
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('You remove her hands and smile at Katja.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    if (((s as any).loc ?? 0) === 'katja_dorm') {
      scene.actions([{ label: 'Continue', goto: ['katja_dorm', 'talk'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['KatjaHomeTalk', ''] }]);
    }
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Let her', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 3, 'lesbian');
    (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (10);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/school/tits.jpg');
    scene.text('She bares your breasts and touches them with her fingers before she bows her head and starts licking your nipple.');
    qspCall(s, 'KatjaEvDin', 'sex');
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
      { label: 'Touch her chest', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay_give', 3, 'lesbian');
    (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (10);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/school/touch.jpg');
    scene.text('You touch Katja\'s tender breasts and she sighs deeply, biting her lip.');
    if (((s as any).katjaQW ?? 0)?.['horny'] < Math.floor(Math.random() * 61) + 0) {
      scene.text('You play with her breasts a little before she moves away from you.');
      // TODO-QSP: dynamic text: "I'm not in the mood right now, <<$pcs_nickname>>. Another time maybe?"
      scene.text(`"I'm not in the mood right now, ${((s as any).pcs_nickname ?? 0)}. Another time maybe?"`);
      qspCall(s, 'willpower', 'sex', 'force', 'hard');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Grab her [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Grab her', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay_give', 3, 'lesbian');
    (s as any).katjaQW['dom'] = ((s as any).katjaQW['dom'] ?? 0) - (1);
    (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) - (10);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/school/grab.jpg');
    scene.text('You grab Katja firmly so she can\'t back away.');
    scene.text('Katja freezes in your arms and you stroke her body and kiss her neck.');
    scene.actions([
      { label: 'Lick her breast', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay_give', 3, 'lesbian');
    (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (10);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/school/tits_katja_get.jpg');
    scene.text('You free Katja\'s small, firm breasts from under her clothes and begin to lick them, paying special attention to her nipples. Katja closes her eyes in pleasure and bites her lip.');
    qspCall(s, 'KatjaEvDin', 'sex');
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Accept her decision', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
    if (((s as any).loc ?? 0) === 'katja_dorm') {
      scene.actions([{ label: 'Continue', goto: ['katja_dorm', 'talk'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['KatjaHomeTalk', ''] }]);
    }
  } },
      ]);
    } else {
      scene.text('Katja moves her hands to your breasts and gently touches them with her finger before she starts squeezing them and you feel her undoing your bra.');
      scene.actions([
        { label: 'Let her', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 3, 'lesbian');
    (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (10);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/school/tits.jpg');
    scene.text('Katja bares your breasts and touches them with her fingers before she bows her head and begins to lick your nipple.');
    qspCall(s, 'KatjaEvDin', 'sex');
  } },
        { label: 'Ask her to stop', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/school/touch.jpg');
    scene.text('You ask Katja to stop, but she ignores you.');
    qspCall(s, 'willpower', 'foreplay', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Remove her hands [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Remove her hands', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 3, 'lesbian');
    (s as any).katjaQW['dom'] = ((s as any).katjaQW['dom'] ?? 0) - (1);
    (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) - (10);
    (s as any).katjaQW['horny'] = qspUntranslated(s, "min(katjaQW['horny'], 60)", { location: "katjaEvDin" });
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('You remove her hands and smile at Katja.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    if (((s as any).loc ?? 0) === 'katja_dorm') {
      scene.actions([{ label: 'Continue', goto: ['katja_dorm', 'talk'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['KatjaHomeTalk', ''] }]);
    }
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Give in to her touch', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 3, 'lesbian');
    (s as any).katjaQW['dom'] = ((s as any).katjaQW['dom'] ?? 0) + (1);
    (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (10);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/school/tits.jpg');
    scene.text('Katja bares your breasts and touches them with her fingers before she bows her head and begins to lick your nipple.');
    qspCall(s, 'KatjaEvDin', 'sex');
  } },
    ]);
  } },
      ]);
    }
  } },
      { label: 'Talk about something else', handler: (st: GameState) => {
    if (((s as any).loc ?? 0) === 'katja_dorm') {
      scene.actions([{ label: 'Continue', goto: ['katja_dorm', 'talk'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['KatjaHomeTalk', ''] }]);
    }
  } },
    ]);
  }
  scene.build();
}

function enterStraponMain(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/sex/school/strapon_ready.jpg');
  if (((s as any).katjaQW ?? 0)?.['orgasm_day'] !== ((s as any).daystart ?? 0)) {
    if (((s as any).katjaQW ?? 0)?.['horny'] < 20) {
      scene.text('Katja looks calm and indifferent.');
    } else {
      scene.text('Katja looks at you with amusement.');
      if (((s as any).katjaQW ?? 0)?.['horny'] < 60) {
        scene.text('Katja has a slight blush on her cheeks as she looks at you mischievously.');
      } else {
        scene.text('Katja blushes and languidly looks at you.');
        scene.text('Katja\'s face is flushed bright red and her chest heaves from deep breathing.');
      }
      if (((s as any).katjaQW ?? 0)?.['horny'] < 20) {
        scene.text('Katja looks calm and in control of her breathing again.');
      } else {
        scene.text('Katja looks at you with amusement. Her breathing seems to be almost back to normal.');
        if (((s as any).katjaQW ?? 0)?.['horny'] < 60) {
          scene.text('Katja has a slight blush on her cheeks and she looks at you mischievously, still breathing a bit hard.');
        } else {
          scene.text('Katja blushes and languidly looks at you, obviously still unable to get her breath fully under control again.');
          scene.text('Katja\'s face is flushed red and her chest heaves from gulping down all the air she can manage. You delight in the fact that you pushed her over the edge so hard.');
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
        (s as any).katjaQW['horny'] = 0;
      }
      if (((s as any).loc ?? 0) === 'katja_dorm') {
        scene.actions([
          { label: 'Get dressed and stop talking', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
  }, goto: ['katja_dorm', 'start'] },
        ]);
      } else {
        scene.actions([
          { label: 'Smile and leave the room', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
  }, goto: ['mey_home', 'start'] },
        ]);
      }
      scene.actions([
        { label: 'Get dressed and talk about something else', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
    if (((s as any).loc ?? 0) === 'katja_dorm') {
      scene.actions([{ label: 'Continue', goto: ['katja_dorm', 'talk'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['KatjaHomeTalk', ''] }]);
    }
  } },
      ]);
    }
  }
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
    default:
      enterKiss(s, scene);
      break;
  }
}

export const katjaEvDin: LocationDef = {
  name: 'katjaEvDin',
  title: 'You bring your face to Katja\'s and feel her hot breath on yo',
  region: 'other',
  description: ['You bring your face to Katja\'s and feel her hot breath on your lips as she closes her eyes and presses her lips to yours.'],
  enter: enter,
};
