import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterUpdate(s: GameState, scene: SceneBuilder): void {
  ((s as any).shared_apt = (s as any).shared_apt ?? {})['rentWeekly'] = 2000;
  if (((s as any).shared_apt ?? 0)?.['rentLeft'] <= 0) {
    ((s as any).shared_apt = (s as any).shared_apt ?? {})['rentLeft'] = 0;
  }
  if (((s as any).daystart ?? 0) - ((s as any).shared_apt ?? 0)?.['intro_daystart'] >= 7) {
    ((s as any).shared_apt = (s as any).shared_apt ?? {})['weekNum'] = (((s as any).daystart ?? 0) - (((s as any).shared_apt ?? {})?.['intro_daystart'] ?? 0)) / 7;
  } else {
    ((s as any).shared_apt = (s as any).shared_apt ?? {})['weekNum'] = 0;
  }
  if (((s as any).orgB ?? 0) > 100) {
    (s as any).orgB = 100;
  }
  ((s as any).shared_apt = (s as any).shared_apt ?? {})['price_cook'] = 50;
  ((s as any).shared_apt = (s as any).shared_apt ?? {})['price_clean'] = 50;
  ((s as any).shared_apt = (s as any).shared_apt ?? {})['price_handjob'] = 50;
  ((s as any).shared_apt = (s as any).shared_apt ?? {})['price_blowjob'] = 100;
  ((s as any).shared_apt = (s as any).shared_apt ?? {})['price_vaginal'] = 150;
  ((s as any).shared_apt = (s as any).shared_apt ?? {})['price_anal'] = 200;
  ((s as any).shared_apt = (s as any).shared_apt ?? {})['price_special'] = 250;
  (s as any).pcs_font = '990099';
  ((s as any).Oleg = (s as any).Oleg ?? {})['font'] = '007bff';
  ((s as any).Oleg = (s as any).Oleg ?? {})['leaves'] = 9;
  ((s as any).Oleg = (s as any).Oleg ?? {})['comes'] = 18;
  ((s as any).Oleg = (s as any).Oleg ?? {})['sleeps'] = 23;
  ((s as any).Oleg = (s as any).Oleg ?? {})['wakes'] = 8;
  ((s as any).Nestor = (s as any).Nestor ?? {})['font'] = '8a0000';
  ((s as any).Nestor = (s as any).Nestor ?? {})['leaves'] = 11;
  ((s as any).Nestor = (s as any).Nestor ?? {})['comes'] = 19;
  ((s as any).Nestor = (s as any).Nestor ?? {})['sleeps'] = 23;
  ((s as any).Nestor = (s as any).Nestor ?? {})['wakes'] = 9;
  ((s as any).Yakov = (s as any).Yakov ?? {})['font'] = '017a01';
  ((s as any).Yakov = (s as any).Yakov ?? {})['leaves'] = 7;
  ((s as any).Yakov = (s as any).Yakov ?? {})['comes'] = 16;
  ((s as any).Yakov = (s as any).Yakov ?? {})['sleeps'] = 22;
  ((s as any).Yakov = (s as any).Yakov ?? {})['wakes'] = 5;
  ((s as any).Oleg = (s as any).Oleg ?? {})['mood_txt'] = 'TODO';
  ((s as any).Nestor = (s as any).Nestor ?? {})['mood_txt'] = 'TODO';
  ((s as any).Yakov = (s as any).Yakov ?? {})['mood_txt'] = 'TODO';
  if (((s as any).shared_apt ?? 0)?.['childWarning'] === 1  &&  ((s as any).shared_apt ?? 0)?.['childWarningDay'] === 0) {
    ((s as any).shared_apt = (s as any).shared_apt ?? {})['childWarningDay'] = ((s as any).daystart ?? 0);
  }
  qspCall(s, 'stat', '');
  if (((s as any).shared_apt ?? 0)?.['debug'] === 1) {
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { (s.shared_apt ??= {})\u0027debug\u0027 = 2; return s; }); return false;">Debug</a>');
  } else {
    if (((s as any).shared_apt ?? 0)?.['debug'] === 2) {
      scene.actions([
        { label: 'Debug', handler: (st: GameState) => {
    qspCall(st, 'pav_shared_apt', '');
  } },
      ]);
    }
  }
  return;
  scene.build();
}

function enterDailyUpdate(s: GameState, scene: SceneBuilder): void {
  if (((s as any).shared_apt ?? 0)?.['enabled'] === 1) {
    if (((s as any).shared_apt ?? 0)?.['alreadyProcessed'] !== ((s as any).daystart ?? 0)) {
      if (((s as any).daystart ?? 0) - ((s as any).shared_apt ?? 0)?.['intro_daystart'] >= 7) {
        ((s as any).shared_apt = (s as any).shared_apt ?? {})['weekNum'] = (((s as any).daystart ?? 0) - (((s as any).shared_apt ?? {})?.['intro_daystart'] ?? 0)) / 7;
      } else {
        ((s as any).shared_apt = (s as any).shared_apt ?? {})['weekNum'] = 0;
      }
      if (((s as any).shared_apt ?? 0)?.['weekNum'] >= ((s as any).shared_apt ?? 0)?.['rentWeekNum']) {
        if (((s as any).shared_apt ?? 0)?.['rentLeft'] > 0) {
          ((s as any).shared_apt = (s as any).shared_apt ?? {})['rentLeft'] = ((s as any).shared_apt['rentLeft'] ?? 0) + ((((s as any).shared_apt ?? 0)?.['rentWeekly']));
          ((s as any).shared_apt = (s as any).shared_apt ?? {})['missedWeeks'] = ((s as any).shared_apt['missedWeeks'] ?? 0) + (1);
          ((s as any).shared_apt = (s as any).shared_apt ?? {})['Lockrent'] = 1;
          ((s as any).shared_apt = (s as any).shared_apt ?? {})['rentPaid'] = 0;
        } else {
          ((s as any).shared_apt = (s as any).shared_apt ?? {})['rentLeft'] = (((s as any).shared_apt ?? 0)?.['rentWeekly']);
          ((s as any).shared_apt = (s as any).shared_apt ?? {})['missedWeeks'] = 0;
          ((s as any).shared_apt = (s as any).shared_apt ?? {})['rentPaid'] = 1;
        }
        ((s as any).shared_apt = (s as any).shared_apt ?? {})['rentWeekNum'] = (((s as any).shared_apt ?? {})?.['weekNum'] ?? 0) + 1;
        if (((s as any).shared_apt ?? 0)?.['missedWeeks'] >= 2) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 1]; enterBlockApt(s, scene); (s as any).locArgs = __savedLocArgs; }
          qspCall(s, 'notification', 'add', 0);
        } else {
          if (((s as any).shared_apt ?? 0)?.['missedWeeks'] > 0) {
            qspCall(s, 'notification', 'add', qspFunc(s, 'wrap', 'neg', 'Your rent is now overdue! You owe ' + qspFunc(s, 'money', 'string_price', (((s as any).shared_apt ?? 0)?.['rentLeft'])) + ' for ' + (((s as any).shared_apt ?? 0)?.['missedWeeks']) + ' week' + ((((s as any).shared_apt ?? 0)?.['missedWeeks'] > 1) ? ('s') : ('')) + ' at the shared apartment.'));
          } else {
            qspCall(s, 'notification', 'add', qspFunc(s, 'wrap', 'accent', 'Your weekly rent of ' + qspFunc(s, 'money', 'string_price', (((s as any).shared_apt ?? 0)?.['rentWeekly'])) + ' for the shared apartment is now due.'));
          }
        }
      }
      ((s as any).shared_apt = (s as any).shared_apt ?? {})['alreadyProcessed'] = ((s as any).daystart ?? 0);
    }
  }
  scene.build();
}

function enterGetRentStatus(s: GameState, scene: SceneBuilder): void {
  if (((s as any).shared_apt ?? 0)?.['rentLeft'] > 0) {
    if (((s as any).shared_apt ?? 0)?.['missedWeeks'] > 1) {
      (s as any).result = '<font color=red>You owe ' + qspFunc(s, 'money', 'string_price', (((s as any).shared_apt ?? 0)?.['rentLeft'])) + ' for ' + qspFunc(s, 'string', 'parse_number', (((s as any).shared_apt ?? 0)?.['missedWeeks'])) + ' week' + ((((s as any).shared_apt ?? 0)?.['missedWeeks'] > 1) ? ('s') : ('')) + ' of overdue rent.</font>';
    } else {
      if (((s as any).shared_apt ?? 0)?.['missedWeeks'] === 1) {
        (s as any).result = '<font color=red>You have ' + qspFunc(s, 'money', 'string_price', (((s as any).shared_apt ?? 0)?.['rentLeft'])) + ' of overdue rent to pay.</font>';
      } else {
        (s as any).result = 'You have ' + qspFunc(s, 'money', 'string_price', (((s as any).shared_apt ?? 0)?.['rentLeft'])) + ' of rent left to pay for next week.';
      }
    }
    if (qspFunc(s, 'money', 'can_afford', ((s as any).shared_apt ?? 0)?.['rentLeft'])) {
      (s as any).result = ((s as any).result ?? 0) + ('<br>You may pay it in <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027pav_shared_apt\u0027, \u0027payCash\u0027); return false;">cash</a> now.');
    } else {
      (s as any).result = ((s as any).result ?? 0) + ('<br>You may pay it in cash when you have enough money.');
    }
  } else {
    (s as any).result = 'You have already paid the full rent for next week.';
  }
  scene.build();
}

function enterBlockApt(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'homes_properties', 'block_access', 'shared_apartment', 0);
  (s as any).servitudelvl_bak = (((s as any).shared_apt ?? 0)?.['servitudeLvl']);
  (s as any).shared_apt = undefined;
  ((s as any).shared_apt = (s as any).shared_apt ?? {})['seenAd'] = 1;
  if (String((s as any).locArgs?.[1] ?? '') === 1) {
    ((s as any).shared_apt = (s as any).shared_apt ?? {})['evicted'] = 1;
  }
  ((s as any).shared_apt = (s as any).shared_apt ?? {})['previousTenant'] = 1;
  ((s as any).shared_apt = (s as any).shared_apt ?? {})['servitudeLvl'] = ((s as any).servitudelvl_bak ?? 0);
  (s as any).servitudelvl_bak = undefined;
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_shared_apt', ((s as any).locArgs?.[0] ?? 0));
  (s as any).location_type = 'private';
  qspCall(s, 'themes', 'indoors');
  (s as any).locclass = undefined;
  if (((s as any).shared_apt ?? 0)?.['introDone'] === 0) {
    qspGoto(s, 'pav_shared_apt', 'intro');
  }
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  qspCall(s, 'courtletter', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterWeeklyReset(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).daystart ?? 0) >= ((s as any).tomorrow ?? 0)) {
    (s as any).tomorrow = ((s as any).daystart ?? 0) + 1;
    ((s as any).Oleg = (s as any).Oleg ?? {})['mood'] = (Math.floor(Math.random() * 10) + 1);
    ((s as any).Oleg = (s as any).Oleg ?? {})['cleaned'] = 0;
    ((s as any).Nestor = (s as any).Nestor ?? {})['mood'] = (Math.floor(Math.random() * 10) + 1);
    ((s as any).Nestor = (s as any).Nestor ?? {})['cleaned'] = 0;
    ((s as any).Yakov = (s as any).Yakov ?? {})['mood'] = (Math.floor(Math.random() * 10) + 1);
    ((s as any).Yakov = (s as any).Yakov ?? {})['cleaned'] = 0;
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterUpdate(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('<center><h3>Hallway</h3></center>');
  scene.img('images/locations/pavlovsk/resident/sharedapt/hallway.jpg');
  scene.text(`It's been ${(((s as any).shared_apt ?? 0)?.['weekNum'] ?? '')} weeks since you moved in.`);
  if (((s as any).NatbelQW ?? 0)?.['QWstage'] >= 4  &&  ((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) === 7  &&  ((s as any).kanikuli ?? 0) === 0  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0  &&  (((s as any).PSchool ?? 0) === 1  ||  ((s as any).cheatVars ?? 0)?.['school_clothing'] === 1)) {
    scene.actions([
      { label: 'Go pick up Natasha before school', goto: ['natbelEv', 'carrybooks'] },
    ]);
  }
  scene.text(`A large apartment currently serves as shared living. As well as the normal living spaces, there are four bedrooms, one rented by you and three occupied by <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027pav_shared_oleg/u0027, /u0027oleg_dick/u0027); return false;"><font color=#${(((s as any).Oleg ?? 0)?.['font'] ?? '')}>${(((s as any).npc_firstname ?? 0)?.['A266'] ?? '')}</font></a>, <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027pav_shared_nestor/u0027, /u0027nestor_dick/u0027); return false;"><font color=#${(((s as any).Nestor ?? 0)?.['font'] ?? '')}>${(((s as any).npc_firstname ?? 0)?.['A265'] ?? '')}</font></a>, <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027pav_shared_yakov/u0027, /u0027yakov_dick/u0027); return false;"><font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>${(((s as any).npc_firstname ?? 0)?.['A264'] ?? '')}</font></a>.`);
  scene.text('You stand in the hallway.');
  if (((s as any).shared_apt ?? 0)?.['rentPaid'] === 1) {
    scene.text(`From the hallway, several doors lead to <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027pav_shared_apt/u0027, /u0027Oleg_Room/u0027); return false;">${(((s as any).npc_firstname ?? 0)?.['A266'] ?? '')}'s</a>, <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027pav_shared_apt/u0027, /u0027Nestor_Room/u0027); return false;">${(((s as any).npc_firstname ?? 0)?.['A265'] ?? '')}'s</a>, and <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027pav_shared_apt/u0027, /u0027Yakov_Room/u0027); return false;">${(((s as any).npc_firstname ?? 0)?.['A264'] ?? '')}'s</a> rooms.`);
    scene.text('The last doors lead to the <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027pav_shared_apt\u0027, \u0027pcsRoom\u0027); return false;">room</a> you have rented.');
  }
  if (((s as any).shared_apt ?? 0)?.['rentPaid'] === 1  ||  ((s as any).clothingworntype ?? 0) === 'nude') {
    scene.text('Your bedroom doesn\'t have any cupboards, but there are several hallway <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027wardrobe\u0027, \u0027start\u0027); return false;">closets</a> you can use to store your clothes. One of them has a large, tall <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027mirror\u0027, \u0027start\u0027); return false;">mirror</a> attached.');
  }
  if (((s as any).shared_apt ?? 0)?.['rentPaid'] === 1) {
    if (((s as any).shared_apt ?? 0)?.['servitudeLvl'] >= 1) {
      scene.text('A computer-printed <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027pav_shared_apt\u0027, \u0027list\u0027); return false;">list</a> hangs on the exit door.');
    }
    scene.actions([
      { label: 'Go to your room', goto: ['pav_shared_apt', 'pcsRoom'] },
      { label: 'Go to the bathroom', goto: ['pav_shared_apt', 'bathroom'] },
      { label: 'Go to the kitchen', goto: ['pav_shared_apt', 'kitchen'] },
      { label: '', labelFn: (s: GameState) => '<font color=#' + String((((s as any).Oleg ?? 0)?.['font'] ?? '') ?? '') + '>' + String((((s as any).npc_firstname ?? 0)?.['A266'] ?? '') ?? '') + '\'s room</font>', goto: ['pav_shared_apt', 'Oleg_Room'] },
      { label: '', labelFn: (s: GameState) => '<font color=#' + String((((s as any).Nestor ?? 0)?.['font'] ?? '') ?? '') + '>' + String((((s as any).npc_firstname ?? 0)?.['A265'] ?? '') ?? '') + '\'s room</font>', goto: ['pav_shared_apt', 'Nestor_Room'] },
      { label: '', labelFn: (s: GameState) => '<font color=#' + String((((s as any).Yakov ?? 0)?.['font'] ?? '') ?? '') + '>' + String((((s as any).npc_firstname ?? 0)?.['A264'] ?? '') ?? '') + '\'s room</font>', goto: ['pav_shared_apt', 'Yakov_Room'] },
    ]);
  }
  qspCall(s, 'wardrobe', 'default_clothing_options');
  if (((s as any).shared_apt ?? 0)?.['rentPaid'] === 1) {
    if (qspFunc(s, 'homes_properties', 'is_current_home') === 0) {
      scene.actions([
        { label: 'Set this apartment as your main home', handler: (st: GameState) => {
    qspCall(st, 'homes_properties', '');
  }, goto: ['pav_shared_apt', 'start'] },
      ]);
    }
  }
  if (qspFunc(s, 'homes_properties', 'has_access', 'parents_home') === 0  &&  ((s as any).kid ?? 0) > 0) {
    if (((s as any).shared_apt ?? 0)?.['childWarning'] === 0) {
      ((s as any).shared_apt = (s as any).shared_apt ?? {})['childWarning'] = 1;
      ((s as any).shared_apt = (s as any).shared_apt ?? {})['childWarningDay'] = ((s as any).daystart ?? 0);
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      scene.img('images/characters/pavlovsk/school/boy/dimka/revenge/crying.jpg');
      scene.text('The guys call you for a house meeting. They look uncomfortable.');
      scene.text(`<font color=#${(((s as any).Oleg ?? 0)?.['font'] ?? '')}>"${((s as any).pcs_firstname ?? '')}, we need to talk about your child situation. Our agreement was very clear about no children in the apartment."</font>`);
      scene.text(`<font color=#${(((s as any).Nestor ?? 0)?.['font'] ?? '')}>"You have one week to make other arrangements, or we'll have to ask you to leave."</font>`);
      scene.actions([
        { label: 'Understand', goto: ['pav_shared_apt', 'start'] },
      ]);
    } else {
      if (((s as any).daystart ?? 0) >= ((s as any).shared_apt ?? 0)?.['childWarningDay'] + 7) {
        ((s as any).shared_apt = (s as any).shared_apt ?? {})['pavIntroStep'] = 0;
        ((s as any).shared_apt = (s as any).shared_apt ?? {})['introDone'] = 0;
        (s as any).minut = ((s as any).minut ?? 0) + 5;
        scene.img('images/characters/pavlovsk/school/boy/dimka/revenge/crying.jpg');
        scene.text('You\'ve been asked to leave the apartment due to having children against the house rules.');
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 1]; enterBlockApt(s, scene); (s as any).locArgs = __savedLocArgs; }
        scene.actions([
          { label: 'Leave', goto: ['pav_complex', 'start'] },
        ]);
      }
    }
  } else {
    ((s as any).shared_apt = (s as any).shared_apt ?? {})['childWarning'] = 0;
    ((s as any).shared_apt = (s as any).shared_apt ?? {})['childWarningDay'] = 0;
  }
  if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).shared_apt ?? 0)?.['enabled'] === 0) {
    qspCall(s, 'outfit', 'wear_last_worn');
    qspCall(s, 'stat', '');
  }
  scene.actions([
    { label: '<b>Leave and go outside</b>', handler: (st: GameState) => {
    if (((st as any).clothingworntype ?? 0) !== 'nude') {
      qspGoto(st, 'pav_complex', 'start');
    } else {
      alert('<b><font color = red>You need to get dressed.</font></b>');
      qspGoto(st, 'pav_shared_apt', 'start');
    }
  } },
    { label: '<font color=red>End your rental agreement and move out</font>', goto: ['pav_shared_apt', 'eoleg_agreement'] },
  ]);
  scene.build();
}

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_shared_apt', ((s as any).locArgs?.[0] ?? 0));
  (s as any).location_type = 'private';
  qspCall(s, 'themes', 'indoors');
  (s as any).locclass = undefined;
  if (((s as any).shared_apt ?? 0)?.['introDone'] === 0) {
    qspGoto(s, 'pav_shared_apt', 'intro');
  }
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  qspCall(s, 'courtletter', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterWeeklyReset(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).daystart ?? 0) >= ((s as any).tomorrow ?? 0)) {
    (s as any).tomorrow = ((s as any).daystart ?? 0) + 1;
    ((s as any).Oleg = (s as any).Oleg ?? {})['mood'] = (Math.floor(Math.random() * 10) + 1);
    ((s as any).Oleg = (s as any).Oleg ?? {})['cleaned'] = 0;
    ((s as any).Nestor = (s as any).Nestor ?? {})['mood'] = (Math.floor(Math.random() * 10) + 1);
    ((s as any).Nestor = (s as any).Nestor ?? {})['cleaned'] = 0;
    ((s as any).Yakov = (s as any).Yakov ?? {})['mood'] = (Math.floor(Math.random() * 10) + 1);
    ((s as any).Yakov = (s as any).Yakov ?? {})['cleaned'] = 0;
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterUpdate(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('<center><h3>Hallway</h3></center>');
  scene.img('images/locations/pavlovsk/resident/sharedapt/hallway.jpg');
  scene.text(`It's been ${(((s as any).shared_apt ?? 0)?.['weekNum'] ?? '')} weeks since you moved in.`);
  if (((s as any).NatbelQW ?? 0)?.['QWstage'] >= 4  &&  ((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) === 7  &&  ((s as any).kanikuli ?? 0) === 0  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0  &&  (((s as any).PSchool ?? 0) === 1  ||  ((s as any).cheatVars ?? 0)?.['school_clothing'] === 1)) {
    scene.actions([
      { label: 'Go pick up Natasha before school', goto: ['natbelEv', 'carrybooks'] },
    ]);
  }
  scene.text(`A large apartment currently serves as shared living. As well as the normal living spaces, there are four bedrooms, one rented by you and three occupied by <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027pav_shared_oleg/u0027, /u0027oleg_dick/u0027); return false;"><font color=#${(((s as any).Oleg ?? 0)?.['font'] ?? '')}>${(((s as any).npc_firstname ?? 0)?.['A266'] ?? '')}</font></a>, <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027pav_shared_nestor/u0027, /u0027nestor_dick/u0027); return false;"><font color=#${(((s as any).Nestor ?? 0)?.['font'] ?? '')}>${(((s as any).npc_firstname ?? 0)?.['A265'] ?? '')}</font></a>, <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027pav_shared_yakov/u0027, /u0027yakov_dick/u0027); return false;"><font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>${(((s as any).npc_firstname ?? 0)?.['A264'] ?? '')}</font></a>.`);
  scene.text('You stand in the hallway.');
  if (((s as any).shared_apt ?? 0)?.['rentPaid'] === 1) {
    scene.text(`From the hallway, several doors lead to <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027pav_shared_apt/u0027, /u0027Oleg_Room/u0027); return false;">${(((s as any).npc_firstname ?? 0)?.['A266'] ?? '')}'s</a>, <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027pav_shared_apt/u0027, /u0027Nestor_Room/u0027); return false;">${(((s as any).npc_firstname ?? 0)?.['A265'] ?? '')}'s</a>, and <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027pav_shared_apt/u0027, /u0027Yakov_Room/u0027); return false;">${(((s as any).npc_firstname ?? 0)?.['A264'] ?? '')}'s</a> rooms.`);
    scene.text('The last doors lead to the <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027pav_shared_apt\u0027, \u0027pcsRoom\u0027); return false;">room</a> you have rented.');
  }
  if (((s as any).shared_apt ?? 0)?.['rentPaid'] === 1  ||  ((s as any).clothingworntype ?? 0) === 'nude') {
    scene.text('Your bedroom doesn\'t have any cupboards, but there are several hallway <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027wardrobe\u0027, \u0027start\u0027); return false;">closets</a> you can use to store your clothes. One of them has a large, tall <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027mirror\u0027, \u0027start\u0027); return false;">mirror</a> attached.');
  }
  if (((s as any).shared_apt ?? 0)?.['rentPaid'] === 1) {
    if (((s as any).shared_apt ?? 0)?.['servitudeLvl'] >= 1) {
      scene.text('A computer-printed <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027pav_shared_apt\u0027, \u0027list\u0027); return false;">list</a> hangs on the exit door.');
    }
    scene.actions([
      { label: 'Go to your room', goto: ['pav_shared_apt', 'pcsRoom'] },
      { label: 'Go to the bathroom', goto: ['pav_shared_apt', 'bathroom'] },
      { label: 'Go to the kitchen', goto: ['pav_shared_apt', 'kitchen'] },
      { label: '', labelFn: (s: GameState) => '<font color=#' + String((((s as any).Oleg ?? 0)?.['font'] ?? '') ?? '') + '>' + String((((s as any).npc_firstname ?? 0)?.['A266'] ?? '') ?? '') + '\'s room</font>', goto: ['pav_shared_apt', 'Oleg_Room'] },
      { label: '', labelFn: (s: GameState) => '<font color=#' + String((((s as any).Nestor ?? 0)?.['font'] ?? '') ?? '') + '>' + String((((s as any).npc_firstname ?? 0)?.['A265'] ?? '') ?? '') + '\'s room</font>', goto: ['pav_shared_apt', 'Nestor_Room'] },
      { label: '', labelFn: (s: GameState) => '<font color=#' + String((((s as any).Yakov ?? 0)?.['font'] ?? '') ?? '') + '>' + String((((s as any).npc_firstname ?? 0)?.['A264'] ?? '') ?? '') + '\'s room</font>', goto: ['pav_shared_apt', 'Yakov_Room'] },
    ]);
  }
  qspCall(s, 'wardrobe', 'default_clothing_options');
  if (((s as any).shared_apt ?? 0)?.['rentPaid'] === 1) {
    if (qspFunc(s, 'homes_properties', 'is_current_home') === 0) {
      scene.actions([
        { label: 'Set this apartment as your main home', handler: (st: GameState) => {
    qspCall(st, 'homes_properties', '');
  }, goto: ['pav_shared_apt', 'start'] },
      ]);
    }
  }
  if (qspFunc(s, 'homes_properties', 'has_access', 'parents_home') === 0  &&  ((s as any).kid ?? 0) > 0) {
    if (((s as any).shared_apt ?? 0)?.['childWarning'] === 0) {
      ((s as any).shared_apt = (s as any).shared_apt ?? {})['childWarning'] = 1;
      ((s as any).shared_apt = (s as any).shared_apt ?? {})['childWarningDay'] = ((s as any).daystart ?? 0);
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      scene.img('images/characters/pavlovsk/school/boy/dimka/revenge/crying.jpg');
      scene.text('The guys call you for a house meeting. They look uncomfortable.');
      scene.text(`<font color=#${(((s as any).Oleg ?? 0)?.['font'] ?? '')}>"${((s as any).pcs_firstname ?? '')}, we need to talk about your child situation. Our agreement was very clear about no children in the apartment."</font>`);
      scene.text(`<font color=#${(((s as any).Nestor ?? 0)?.['font'] ?? '')}>"You have one week to make other arrangements, or we'll have to ask you to leave."</font>`);
      scene.actions([
        { label: 'Understand', goto: ['pav_shared_apt', 'start'] },
      ]);
    } else {
      if (((s as any).daystart ?? 0) >= ((s as any).shared_apt ?? 0)?.['childWarningDay'] + 7) {
        ((s as any).shared_apt = (s as any).shared_apt ?? {})['pavIntroStep'] = 0;
        ((s as any).shared_apt = (s as any).shared_apt ?? {})['introDone'] = 0;
        (s as any).minut = ((s as any).minut ?? 0) + 5;
        scene.img('images/characters/pavlovsk/school/boy/dimka/revenge/crying.jpg');
        scene.text('You\'ve been asked to leave the apartment due to having children against the house rules.');
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 1]; enterBlockApt(s, scene); (s as any).locArgs = __savedLocArgs; }
        scene.actions([
          { label: 'Leave', goto: ['pav_complex', 'start'] },
        ]);
      }
    }
  } else {
    ((s as any).shared_apt = (s as any).shared_apt ?? {})['childWarning'] = 0;
    ((s as any).shared_apt = (s as any).shared_apt ?? {})['childWarningDay'] = 0;
  }
  if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).shared_apt ?? 0)?.['enabled'] === 0) {
    qspCall(s, 'outfit', 'wear_last_worn');
    qspCall(s, 'stat', '');
  }
  scene.actions([
    { label: '<b>Leave and go outside</b>', handler: (st: GameState) => {
    if (((st as any).clothingworntype ?? 0) !== 'nude') {
      qspGoto(st, 'pav_complex', 'start');
    } else {
      alert('<b><font color = red>You need to get dressed.</font></b>');
      qspGoto(st, 'pav_shared_apt', 'start');
    }
  } },
    { label: '<font color=red>End your rental agreement and move out</font>', goto: ['pav_shared_apt', 'eoleg_agreement'] },
  ]);
  scene.build();
}

function enterList(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_shared_apt', ((s as any).locArgs?.[0] ?? 0));
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  scene.text(`<center><h3>${((s as any).pcs_firstname ?? '')}'s pricelist</h3></center>`);
  scene.img('images/locations/pavlovsk/resident/sharedapt/list.jpg');
  scene.text(`The basic weekly rent is ${qspFunc(s, 'money', 'string_price', (((s as any).shared_apt ?? 0)?.['rentWeekly'] ?? ''))}.`);
  scene.text('It is possible to pay it in cash or offer services instead. The prices are following:');
  scene.text('---------------------');
  scene.text('Cook a warm meal: ' + (((s as any).shared_apt ?? 0)?.['price_cook'] ?? ''));
  scene.text('Clean the apartment: ' + (((s as any).shared_apt ?? 0)?.['price_clean'] ?? ''));
  if (((s as any).shared_apt ?? 0)?.['servitudeLvl'] >= 2) {
    scene.text('---------------------');
    scene.text('Written in marker on the paper, are sexual favours you can offer as well.');
    scene.text('---------------------');
    scene.text('Rent discounts for the slut: ');
    scene.text('Handjob: ' + (((s as any).shared_apt ?? 0)?.['price_handjob'] ?? ''));
    scene.text('Blowjob: ' + (((s as any).shared_apt ?? 0)?.['price_blowjob'] ?? ''));
    scene.text('Sex: ' + (((s as any).shared_apt ?? 0)?.['price_vaginal'] ?? ''));
    scene.text('Anal sex: ' + (((s as any).shared_apt ?? 0)?.['price_anal'] ?? ''));
    scene.text('Special treats: ' + (((s as any).shared_apt ?? 0)?.['price_special'] ?? ''));
  }
  scene.text('---------------------');
  scene.text('Not having paid the full weekly rent at the beginning of a new week will lead to termination of the accommodation services.');
  scene.text(`Signed: <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027pav_shared_oleg/u0027, /u0027oleg_dick/u0027); return false;"><font color=#${(((s as any).Oleg ?? 0)?.['font'] ?? '')}>${(((s as any).npc_firstname ?? 0)?.['A266'] ?? '')}</font></a>, <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027pav_shared_nestor/u0027, /u0027nestor_dick/u0027); return false;"><font color=#${(((s as any).Nestor ?? 0)?.['font'] ?? '')}>${(((s as any).npc_firstname ?? 0)?.['A265'] ?? '')}</font></a>, <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027pav_shared_yakov/u0027, /u0027yakov_dick/u0027); return false;"><font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>${(((s as any).npc_firstname ?? 0)?.['A264'] ?? '')}</font></a>, ${((s as any).pcs_firstname ?? '')}.`);
  scene.text('---------------------');
  scene.actions([
    { label: 'Continue', goto: ['pav_shared_apt', 'start'] },
  ]);
  scene.build();
}

function enterBathroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_shared_apt', 'bathroom');
  (s as any).location_type = 'bathroom';
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><h3>Bathroom</h3></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/home/vanrpar.jpg');
  scene.text('This is a modest bathroom, containing everything that young people need for their daily life, such as:');
  scene.text('A shower, toilet, <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027mirror\u0027, \u0027start\u0027); return false;">mirror</a>, where you can ' + ((((s as any).pcs_hairbsh ?? 0) < 1) ? ('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027mirror\u0027, \u0027brush\u0027); return false;">brush</a>') : ('brush')) + ' your hair, a sink and even a bath tub.');
  qspCall(s, 'din_van', 'private');
  qspCall(s, 'home_events', 'bathroom');
  scene.actions([
    { label: 'Leave', goto: ['pav_shared_apt', 'start'] },
  ]);
  scene.build();
}

function enterKitchen(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_shared_apt', 'kitchen');
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  (s as any).location_type = 'private';
  (s as any).locclass = 'kitr';
  qspCall(s, 'stat', '');
  qspCall(s, 'kit_din', '');
  scene.text('<center><h3>Kitchen</h3></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/home/kuhrpar.jpg');
  scene.text('It\'s a modest kitchen, but has all that is needed.');
  scene.text('\'You can cook breakfast for the guys between 6:00 and 7:00 and dinner for them between 18:00 and 19:00\'');
  if (((s as any).mc_inventory ?? 0)?.['dish_plates'] > 0) {
    scene.text(`Above the sink are <b>${(((s as any).mc_inventory ?? 0)?.['dish_plates'] ?? '')}</b> the clean plates`);
  } else {
    scene.text('<b><font color = red>You have no clean dishes left.</font></b>');
  }
  if (((s as any).dirttarelka ?? 0) > 0) {
    scene.text(`The sink has <b>${((s as any).dirttarelka ?? '')}</b> dirty dishes. <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027kit_din/u0027, /u0027dirtarm/u0027); return false;">that need to be washed</a>.`);
  }
  if (((s as any).mc_inventory ?? 0)?.['dish_soap'] > 0) {
    scene.text(`Above the sink is some detergent to wash the dishes with. There is enough for <b>${(((s as any).mc_inventory ?? 0)?.['dish_soap'] ?? '')}</b> uses.`);
  } else {
    scene.text('<b><font color = red>You do not have enough detergent, you should buy some from the supermarket.</font></b>');
  }
  if (((s as any).mc_inventory ?? 0)?.['food_basic'] > 0) {
    if (((s as any).mc_inventory ?? 0)?.['dish_plates'] === 0  ||  ((s as any).edahot ?? 0) > 0) {
      (s as any).edagot = '';
    }
    if (((s as any).mc_inventory ?? 0)?.['dish_plates'] > 0  &&  (!((s as any).edahot ?? 0))) {
      (s as any).edagot = '<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027kit_din\u0027, \u0027edagotd\u0027); return false;">Cook a meal for yourself (0:30)</a>';
    }
    scene.text(`In the refrigerator there's enough (your own) food for <b>${(((s as any).mc_inventory ?? 0)?.['food_basic'] ?? '')}</b> servings. ${((s as any).edagot ?? '')}`);
  }
  qspCall(s, 'kit_din', 'edahota');
  if (((s as any).mc_inventory ?? 0)?.['food_diet'] === 0  &&  ((s as any).mc_inventory ?? 0)?.['food_basic'] === 0) {
    scene.text(qspFunc(s, 'wrap', 'v_neg b', 'You have nothing to eat, the refrigerator is empty!'));
  }
  if (((s as any).hour ?? 0) === 6  ||  ((s as any).hour ?? 0) === 18) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027pav_shared_apt\u0027, \u0027cookForGuys\u0027); return false;">Cook meals for the guys (1:30)</a>');
  }
  qspCall(s, 'core_library', 'kitchen', 'full');
  scene.actions([
    { label: 'Leave', goto: ['pav_shared_apt', 'start'] },
  ]);
  scene.build();
}

function enterPcsRoom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_shared_apt', ((s as any).locArgs?.[0] ?? 0));
  (s as any).location_type = 'private';
  (s as any).locclass = 'bedr';
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterUpdate(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'music_actions', 'clear_restrictions');
  if (((s as any).pcs_magik ?? 0) >= 6  &&  ((s as any).spellbefshild ?? 0) === 1  &&  (!((s as any).tobiQW ?? 0))) {
    qspGoto(s, 'tobiQW', 'start');
  }
  scene.text('<center><b>Living Room</b></center>');
  scene.img('images/shared/home/bedroom/sofabed.jpg');
  scene.text('The living room was never used by the other apartment occupants, so it\'s now rented out as a bedroom. It\'s sparsely decorated, with, a <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027bed\u0027, \u0027start\u0027); return false;">sofa bed</a>, against the back wall.');
  scene.text('Beside the sofa bed is an old cabinet, with your <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027alarmclock\u0027, \u0027start\u0027); return false;">alarm clock</a> on top.');
  if (((s as any).ml_guitar ?? 0)?.['location'] === ((s as any).loc ?? 0)) {
    scene.text('Your guitar rests on its stand next to your bed.');
  }
  if (((s as any).mc_inventory ?? 0)?.['tech_tv'] === 0  &&  ((s as any).mc_inventory ?? 0)?.['plasma_tv'] === 0) {
    (s as any).temp_TV_text = 'a great place for a TV, if you had one';
  }
  if (((s as any).mc_inventory ?? 0)?.['tech_tv'] >= 1) {
    (s as any).temp_TV_text = 'an old CRT <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027TV\u0027, \u0027start\u0027); return false;">TV</a> sits on the shelf';
  }
  scene.text(`There is an wall unit at the other side of the room, ${((s as any).temp_TV_text ?? '')}. Everyone in the household spends their time in their own rooms, so there was never a reason to use the living room for its intended purpose.`);
  scene.text('In the corner is an old scratched <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027stol\u0027, \u0027start\u0027); return false;">table</a>.');
  scene.text('There is no door to the living room, instead there\'s <a href="#" onclick="window.__gameStore.setState((s) => { s.viewImage = \u0027images/shared/home/bedroom/curtain.jpg\u0027; return s; }); return false;">curtain</a> covering entry to the room, which gives you a modicum of privacy; not much better than the state of the non-existent window curtains.');
  if (((s as any).mc_inventory ?? 0)?.['hula_hoop'] > 0) {
    scene.text('<br>A hula hoop stands in corner of the room. ');
  }
  if (((s as any).mc_inventory ?? 0)?.['skipping_rope'] > 0) {
    scene.text('A jump rope lies on a shelf. ');
  }
  if (((s as any).mc_inventory ?? 0)?.['book_yoga'] > 0) {
    scene.text('A yoga mat is rolled up in a corner. ');
  }
  qspCall(s, 'exercise', 'start');
  if (((s as any).mc_inventory ?? 0)?.['tech_computer'] === 1) {
    qspCall(s, 'internet_mobile', 'get_access', 'free', 'nocamshow');
    if (((s as any).shared_apt ?? 0)?.['servitudeLvl'] === 2) {
      qspCall(s, 'internet_mobile', 'remove_limitation', 'nocamshow');
    }
    scene.text('Your <a href="#" onclick="window.__gameStore.setState((s) => { s.gorodokKomp = 1; return s; }); window.__gameStore.getState().doGoto(\u0027komp\u0027, \u0027start\u0027); return false;">computer</a> is sitting on small table.');
  }
  if (((s as any).mc_inventory ?? 0)?.['vintage_card'] > 0) {
    qspGoto(s, 'card', '');
    scene.actions([
      { label: 'View your vintage porn cards', handler: (st: GameState) => {
    (st as any).card_deck = 0;
  } },
    ]);
  }
  if (((s as any).mc_inventory ?? 0)?.['card'] > 0) {
    qspGoto(s, 'card', '');
    scene.actions([
      { label: 'View your new porn cards', handler: (st: GameState) => {
    (st as any).card_deck = 1;
  } },
    ]);
  }
  if (((s as any).mc_inventory ?? 0)?.['cocaine'] > 0) {
    scene.text(`You have ${(((s as any).mc_inventory ?? 0)?.['cocaine'] ?? '')} doses of Pale Lady, hidden from the other housemates.`);
  }
  if (((s as any).mc_inventory ?? 0)?.['cocaine'] > 0  &&  ((s as any).drugVars ?? 0)?.['cocaine_day'] !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Use some Pale Lady (0:05)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'drugs', 'cocaine');
    scene.img('images/shared/drugs/dur.jpg');
    scene.text('You snort some Pale Lady, feeling dizzy for just a moment. After that, you feel fantastic and incredibly horny.');
    scene.actions([
      { label: 'Continue', goto: ['pav_shared_apt', 'pcsRoom'] },
    ]);
  } },
    ]);
  }
  if (((s as any).mc_inventory ?? 0)?.['tapestry'] > 0) {
    scene.text(`You have ${(((s as any).mc_inventory ?? 0)?.['tapestry'] ?? '')} completed tapestries.`);
  }
  if (((s as any).pcs_sewng ?? 0) >= 40  &&  ((s as any).mc_inventory ?? 0)?.['sewing_fabric'] > 0) {
    scene.text(`You have enough fabric for ${(((s as any).mc_inventory ?? 0)?.['sewing_fabric'] ?? '')} lessons.`);
  }
  if (((s as any).pcs_sewng ?? 0) >= 40  &&  ((s as any).mc_inventory ?? 0)?.['sewing_fabric'] <= 0) {
    scene.text('You do not have any fabric.');
  }
  if (((s as any).pcs_sewng ?? 0) >= 80  &&  ((s as any).mc_inventory ?? 0)?.['sewing_kit'] === 1) {
    if (((s as any).newgobelen ?? 0) === 0  &&  ((s as any).mc_inventory ?? 0)?.['sewing_fabric'] > 0) {
      scene.actions([
        { label: 'Start a new tapestry', goto: ['sewing', 'tapestry'] },
      ]);
    }
    if (((s as any).newgobelen ?? 0)>=1) {
      scene.text(`Your tapestry is ${((s as any).newgobelen ?? '')/10} percent finished.`);
      scene.actions([
        { label: 'Work on the tapestry', goto: ['sewing', 'tapestry'] },
      ]);
    }
  }
  if (((s as any).mc_inventory ?? 0)?.['contraceptive_pill'] > 0  &&  ((s as any).mc_inventory ?? 0)?.['equipped_condoms'] + ((s as any).mc_inventory ?? 0)?.['normal_condoms'] + ((s as any).mc_inventory ?? 0)?.['sabotaged_condoms'] > 0) {
    scene.text('Your <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027stol\u0027, \u0027bc\u0027); return false;">birth control</a> tablets are in the cabinet next to your bed, along with some <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027stol\u0027, \u0027bc\u0027); return false;">condoms</a>.');
  } else {
    if (((s as any).mc_inventory ?? 0)?.['contraceptive_pill'] > 0) {
      scene.text('Your <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027stol\u0027, \u0027bc\u0027); return false;">birth control</a> tablets are in the cabinet next to your bed.');
    } else {
      if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] + ((s as any).mc_inventory ?? 0)?.['normal_condoms'] + ((s as any).mc_inventory ?? 0)?.['sabotaged_condoms'] > 0) {
        scene.text('Your <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027stol\u0027, \u0027bc\u0027); return false;">condoms</a> are in the cabinet next to your bed.');
      }
    }
  }
  if (((s as any).mc_inventory ?? 0)?.['sewing_kit'] === 1) {
    scene.text('Your <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027sewing\u0027, \u0027start\u0027); return false;">sewing kit</a> is stored on a shelf.');
  }
  if (((s as any).mc_inventory ?? 0)?.['trinkets_home'] > 0) {
    scene.text(`You currently have ${(((s as any).mc_inventory ?? 0)?.['trinkets_home'] ?? '')} trinkets to sell at the station. The maximum you can carry with you is 30.`);
  }
  qspCall(s, 'din_van', 'wearpan');
  qspCall(s, 'din_van', 'removepan');
  qspCall(s, 'daily_routine', 'offer_here');
  qspCall(s, 'prostitution_functions', 'prostitute_outfit_at_home');
  qspCall(s, 'music_actions', 'start');
  (s as any).temp_TV_text = undefined;
  scene.actions([
    { label: '<b>Leave the room</b>', goto: ['pav_shared_apt', 'start'] },
    { label: 'Sit on the sofa bed', goto: ['pav_shared_apt', 'sofabed'] },
    { label: 'Relax on your bed', goto: ['bed', 'start'] },
  ]);
  scene.build();
}

function enterSofabed(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_shared_apt', ((s as any).locArgs?.[0] ?? 0));
  qspCall(s, 'stat', '');
  scene.img('images/shared/home/bedroom/sofabed.jpg');
  scene.text('<center>A small sofa bed, when not unfolded, is just big enough for you to curl up on and take a nap.</center>');
  if (((s as any).mc_inventory ?? 0)?.['tech_tv'] === 1) {
    scene.actions([
      { label: 'Watch some TV', goto: ['TV', 'start'] },
    ]);
  }
  if (((s as any).mc_inventory ?? 0)?.['mag_porn'] > 0) {
    scene.text('<br>There is a porn magazine under the sofa cushions');
    qspCall(s, 'library_functions', 'set_read_porn_act');
  }
  qspCall(s, 'library_functions', 'set_home_read_acts');
  if (((s as any).pcs_horny ?? 0) >= 50) {
    scene.actions([
      { label: 'Masturbate', goto: ['selfplay', 'start'] },
    ]);
  }
  scene.actions([
    { label: 'Take a nap (1:00)', handler: (st: GameState) => {
    qspCall(st, 'sleep_simple', '');
  } },
    { label: 'Get up', goto: ['pav_shared_apt', 'pcsRoom'] },
  ]);
  scene.build();
}

function enterOleg_Room(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_shared_apt', ((s as any).locArgs?.[0] ?? 0));
  qspCall(s, 'boyStat', 'A266');
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  scene.text(`<center><h3><font color=#${(((s as any).Oleg ?? 0)?.['font'] ?? '')}>${(((s as any).npc_firstname ?? 0)?.['A266'] ?? '')}'s room</font></h3></center>`);
  scene.img('images/locations/pavlovsk/resident/sharedapt/nd/room.jpg');
  scene.text(`The room isn't as messy as one might expect, given that ${(((s as any).npc_firstname ?? 0)?.['A266'] ?? '')} is an IT guy.`);
  scene.text('There is one large window with a bed below it, but the entire room is dominated by a large table with several computers and monitors.');
  scene.text('At first glance, one might mistake this room for a hacker\'s den.');
  if (((s as any).hour ?? 0) >= ((s as any).Oleg ?? 0)?.['sleeps']  &&  ((s as any).hour ?? 0) < ((s as any).Oleg ?? 0)?.['comes']) {
    scene.text(`${(((s as any).npc_firstname ?? 0)?.['A266'] ?? '')} is sound asleep in his bed.`);
  } else {
    if (((s as any).hour ?? 0) >= ((s as any).Oleg ?? 0)?.['wakes']  &&  ((s as any).hour ?? 0) < ((s as any).Oleg ?? 0)?.['leaves']) {
      scene.text(`${(((s as any).npc_firstname ?? 0)?.['A266'] ?? '')} is already awake and getting ready to leave.`);
      scene.actions([
        { label: 'Approach him', goto: ['pav_shared_oleg', 'Oleg'] },
      ]);
    } else {
      if (((s as any).hour ?? 0) >= ((s as any).Oleg ?? 0)?.['leaves']  &&  ((s as any).hour ?? 0) < ((s as any).Oleg ?? 0)?.['comes']) {
        scene.text(`${(((s as any).npc_firstname ?? 0)?.['A266'] ?? '')} is currently not here.`);
      } else {
        if (((s as any).hour ?? 0) >= ((s as any).Oleg ?? 0)?.['comes']  &&  ((s as any).hour ?? 0) < ((s as any).Oleg ?? 0)?.['sleeps']) {
          scene.text(`${(((s as any).npc_firstname ?? 0)?.['A266'] ?? '')} is behind his desk, engrossed in programming using an esoteric language.`);
          scene.actions([
            { label: 'Approach him', goto: ['pav_shared_oleg', 'Oleg'] },
          ]);
        }
      }
    }
  }
  if (((s as any).shared_apt ?? 0)?.['servitudeLvl'] >= 1  &&  ((s as any).Oleg ?? 0)?.['cleaned'] === 0) {
    if (((s as any).mc_inventory ?? 0)?.['laundry_soap'] >= 1) {
      scene.actions([
        { label: 'Clean the room', handler: (st: GameState) => {
    ((st as any).Oleg = (st as any).Oleg ?? {})['cleaned'] = 1;
  }, goto: ['pav_shared_apt', 'cleanForGuys'] },
      ]);
    } else {
      scene.text('You don\'t have enough laundry detergent to clean the room');
    }
  }
  scene.actions([
    { label: 'Leave', goto: ['pav_shared_apt', 'start'] },
  ]);
  scene.build();
}

function enterNestor_Room(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_shared_apt', ((s as any).locArgs?.[0] ?? 0));
  qspCall(s, 'boyStat', 'A265');
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  scene.text(`<center><h3><font color=#${(((s as any).Nestor ?? 0)?.['font'] ?? '')}>${(((s as any).npc_firstname ?? 0)?.['A265'] ?? '')}'s room</font></h3></center>`);
  scene.img('images/locations/pavlovsk/resident/sharedapt/gp/room.jpg');
  scene.text('This room is a messy disaster, with clothes scattered all over the floor.');
  if (((s as any).hour ?? 0) >= ((s as any).Nestor ?? 0)?.['wakes']  &&  ((s as any).hour ?? 0) < ((s as any).Nestor ?? 0)?.['leaves']) {
    scene.text(`${(((s as any).npc_firstname ?? 0)?.['A265'] ?? '')} is already awake, getting ready to leave.`);
    scene.actions([
      { label: 'Approach him', goto: ['pav_shared_nestor', 'Nestor'] },
    ]);
  } else {
    if (((s as any).hour ?? 0) >= ((s as any).Nestor ?? 0)?.['leaves']  &&  ((s as any).hour ?? 0) < ((s as any).Nestor ?? 0)?.['comes']) {
      scene.text(`${(((s as any).npc_firstname ?? 0)?.['A265'] ?? '')} is not here.`);
    } else {
      if (((s as any).hour ?? 0) >= ((s as any).Nestor ?? 0)?.['comes']  &&  ((s as any).hour ?? 0) < ((s as any).Nestor ?? 0)?.['sleeps']) {
        scene.text(`${(((s as any).npc_firstname ?? 0)?.['A265'] ?? '')} is currently on his bed, listing through some magazines.`);
        scene.actions([
          { label: 'Approach him', goto: ['pav_shared_nestor', 'Nestor'] },
        ]);
      } else {
        if (((s as any).hour ?? 0) >= ((s as any).Nestor ?? 0)?.['sleeps']  ||  ((s as any).hour ?? 0) < ((s as any).Nestor ?? 0)?.['wakes']) {
          scene.text(`${(((s as any).npc_firstname ?? 0)?.['A265'] ?? '')} is sleeping in his bed.`);
        }
      }
    }
  }
  if (((s as any).shared_apt ?? 0)?.['servitudeLvl'] >= 1  &&  ((s as any).Nestor ?? 0)?.['cleaned'] === 0) {
    if (((s as any).mc_inventory ?? 0)?.['laundry_soap'] >= 1) {
      scene.actions([
        { label: 'Clean the room', handler: (st: GameState) => {
    ((st as any).Nestor = (st as any).Nestor ?? {})['cleaned'] = 1;
  }, goto: ['pav_shared_apt', 'cleanForGuys'] },
      ]);
    } else {
      scene.text('You don\'t have enough laundry detergent to clean the room');
    }
  }
  scene.actions([
    { label: 'Leave', goto: ['pav_shared_apt', 'start'] },
  ]);
  scene.build();
}

function enterYakov_Room(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_shared_apt', ((s as any).locArgs?.[0] ?? 0));
  qspCall(s, 'boyStat', 'A264');
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  scene.text(`<center><h3><font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>${(((s as any).npc_firstname ?? 0)?.['A264'] ?? '')}'s room</font></h3></center>`);
  scene.img('images/locations/pavlovsk/resident/sharedapt/sp/room.jpg');
  scene.text('This room is very neat and organized, filled with sporting gear such as dresses, equipment, and trophies. The walls are adorned with several posters of famous athletes and sports teams.');
  if (((s as any).hour ?? 0) >= ((s as any).Yakov ?? 0)?.['wakes']  &&  ((s as any).hour ?? 0) < ((s as any).Yakov ?? 0)?.['leaves']) {
    scene.text(`${(((s as any).npc_firstname ?? 0)?.['A264'] ?? '')} is already awake, packing his gym bags to leave.`);
    scene.actions([
      { label: 'Approach him', goto: ['pav_shared_yakov', 'Yakov'] },
    ]);
  } else {
    if (((s as any).hour ?? 0) >= ((s as any).Yakov ?? 0)?.['leaves']  &&  ((s as any).hour ?? 0) < ((s as any).Yakov ?? 0)?.['comes']) {
      scene.text(`${(((s as any).npc_firstname ?? 0)?.['A264'] ?? '')} is not here.`);
    } else {
      if (((s as any).hour ?? 0) >= ((s as any).Yakov ?? 0)?.['comes']  &&  ((s as any).hour ?? 0) < ((s as any).Yakov ?? 0)?.['sleeps']) {
        (s as any).doesStuff = (Math.floor(Math.random() * 101) + 0);
        if (((s as any).doesStuff ?? 0) < 50) {
          scene.text(`${(((s as any).npc_firstname ?? 0)?.['A264'] ?? '')} is currently on his bed, listing through football magazines.`);
        }
        if (((s as any).doesStuff ?? 0) >= 50) {
          scene.text(`${(((s as any).npc_firstname ?? 0)?.['A264'] ?? '')} is working out on the floor.`);
        }
        scene.actions([
          { label: 'Approach him', goto: ['pav_shared_yakov', 'Yakov'] },
        ]);
      } else {
        if (((s as any).hour ?? 0) >= ((s as any).Yakov ?? 0)?.['sleeps']  ||  ((s as any).hour ?? 0) < ((s as any).Yakov ?? 0)?.['wakes']) {
          scene.text(`${(((s as any).npc_firstname ?? 0)?.['A264'] ?? '')} is sleeping in his bed.`);
        }
      }
    }
  }
  if (((s as any).shared_apt ?? 0)?.['servitudeLvl'] >= 1  &&  ((s as any).Yakov ?? 0)?.['cleaned'] === 0) {
    if (((s as any).mc_inventory ?? 0)?.['laundry_soap'] >= 1) {
      scene.actions([
        { label: 'Clean the room', handler: (st: GameState) => {
    ((st as any).Yakov = (st as any).Yakov ?? {})['cleaned'] = 1;
  }, goto: ['pav_shared_apt', 'cleanForGuys'] },
      ]);
    } else {
      scene.text('You don\'t have enough laundry detergent to clean the room');
    }
  }
  scene.actions([
    { label: 'Leave', goto: ['pav_shared_apt', 'start'] },
  ]);
  scene.build();
}

function enterCookForGuys(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'pav_shared_apt';
  (s as any).loc_arg = 'kitchen';
  (s as any).minut = ((s as any).minut ?? 0) + 90;
  qspCall(s, 'mood', 'lower', 'small');
  qspCall(s, 'stat', '');
  scene.img('images/shared/home/kitchen/cook.jpg');
  scene.text('You prepare three meals, using what you can from the guys\' food. It\'s not very healthy but you\'re not planning to offer to do their shopping too.');
  ((s as any).shared_apt = (s as any).shared_apt ?? {})['price'] = (((s as any).shared_apt ?? 0)?.['price_cook']);
  scene.actions([
    { label: 'Leave the meal', goto: ['pav_shared_apt', 'payService'] },
  ]);
  scene.build();
}

function enterCleanForGuys(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['laundry_soap'] = ((s as any).mc_inventory['laundry_soap'] ?? 0) - (1);
  qspCall(s, 'mood', 'lower', 'small');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/apartment/stir.jpg');
  ((s as any).shared_apt = (s as any).shared_apt ?? {})['price'] = (((s as any).shared_apt ?? 0)?.['price_clean']);
  scene.text('You collect piles of dirty clothes around the room, carry them into the bathroom, put them in a basin and then pour washing powder on them. You wash them until they are finally clean.');
  if (((s as any).shared_apt ?? 0)?.['servitudeLvl'] === 2  &&  (Math.floor(Math.random() * 101) + 0) <= 50) {
    scene.text('<i>You notice bedsheets with what seems as dried out cum. Probably remainder of one of your "servings". Maybe it really is better to swallow every time…</i>');
  }
  (s as any).cumStainCh = undefined;
  scene.actions([
    { label: 'Hang them to dry out and leave', goto: ['pav_shared_apt', 'payService'] },
  ]);
  scene.build();
}

function enterEolegAgreement(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/sharedapt/sp/sp.jpg');
  scene.text('You gather the guys around and explain to them that you wish to move out.');
  scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>${(((s as any).npc_firstname ?? 0)?.['A264'] ?? '')} Looks disappointed as he addresses you. "That is a shame ${((s as any).pcs_firstname ?? '')} we've very much enjoyed having you stay here with us. Are you sure this is what you want?"</font>`);
  scene.actions([
    { label: '"Yes." End agreement', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 0]; enterBlockApt(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspGoto(st, 'pav_complex', 'start');
  } },
    { label: '"Maybe you are right, I\'ll stay here with you guys"', goto: ['pav_shared_apt', 'start'] },
  ]);
  scene.build();
}

function enterWeeklyReset(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_shared_apt', 'start');
  if (((s as any).shared_apt ?? 0)?.['rentLeft'] > 0  &&  ((s as any).shared_apt ?? 0)?.['missedWeeks'] > 0) {
    if (((s as any).shared_apt ?? 0)?.['missedWeeks'] >= 2) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 1]; enterBlockApt(s, scene); (s as any).locArgs = __savedLocArgs; }
      scene.text('<font color=red>You\'ve been evicted from the shared apartment for not paying rent!</font>');
      scene.actions([
        { label: 'Leave with your things', goto: ['pav_complex', 'start'] },
      ]);
    }
  }
  scene.build();
}

function enterPayCash(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  if (qspFunc(s, 'money', 'can_afford', ((s as any).shared_apt ?? 0)?.['rentLeft'], 'cash')) {
    if (((s as any).shared_apt ?? 0)?.['missedWeeks'] > 0) {
      scene.text(`You paid ${qspFunc(s, 'money', 'string_price', (((s as any).shared_apt ?? 0)?.['rentLeft'] ?? ''))} in cash to cover ${qspFunc(s, 'string', 'parse_number', (((s as any).shared_apt ?? 0)?.['missedWeeks'] ?? ''))} week${((((s as any).shared_apt ?? 0)?.['missedWeeks'] > 1) ? ('s') : (''))} of overdue rent.`);
      scene.text('<font color=green>The guys are relieved that you\'ve finally paid up.</font>');
    } else {
      scene.text(`You paid ${qspFunc(s, 'money', 'string_price', (((s as any).shared_apt ?? 0)?.['rentLeft'] ?? ''))} in cash for next week's rent.`);
    }
    qspCall(s, 'money', 'pay', (((s as any).shared_apt ?? 0)?.['rentLeft']), 'cash');
    ((s as any).shared_apt = (s as any).shared_apt ?? {})['cashPaid'] = ((s as any).shared_apt['cashPaid'] ?? 0) + ((((s as any).shared_apt ?? 0)?.['rentLeft']));
    ((s as any).shared_apt = (s as any).shared_apt ?? {})['rentLeft'] = 0;
    ((s as any).shared_apt = (s as any).shared_apt ?? {})['Lockrent'] = 0;
    ((s as any).shared_apt = (s as any).shared_apt ?? {})['rentPaid'] = 1;
    ((s as any).shared_apt = (s as any).shared_apt ?? {})['missedWeeks'] = 0;
    ((s as any).shared_apt = (s as any).shared_apt ?? {})['rentWeekNum'] = (((s as any).shared_apt ?? {})?.['weekNum'] ?? 0) + 1;
    qspCall(s, 'homes_properties', 'give_access');
  } else {
    scene.text('You do not have enough money to pay the rent.');
  }
  scene.actions([
    { label: 'Proceed', goto: ['pav_shared_apt', 'start'] },
  ]);
  scene.build();
}

function enterPayService(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  ((s as any).shared_apt = (s as any).shared_apt ?? {})['servicePaid'] = ((s as any).shared_apt['servicePaid'] ?? 0) + ((((s as any).shared_apt ?? 0)?.['price']));
  ((s as any).shared_apt = (s as any).shared_apt ?? {})['rentLeft'] = ((s as any).shared_apt['rentLeft'] ?? 0) - ((((s as any).shared_apt ?? 0)?.['price']));
  scene.text(`You've performed services worth ${qspFunc(s, 'money', 'string_price', (((s as any).shared_apt ?? 0)?.['price'] ?? ''))}.`);
  if (((s as any).shared_apt ?? 0)?.['rentLeft'] <= 0) {
    ((s as any).shared_apt = (s as any).shared_apt ?? {})['rentLeft'] = 0;
    ((s as any).shared_apt = (s as any).shared_apt ?? {})['rentPaid'] = 1;
    ((s as any).shared_apt = (s as any).shared_apt ?? {})['missedWeeks'] = 0;
    ((s as any).shared_apt = (s as any).shared_apt ?? {})['Lockrent'] = 0;
    ((s as any).shared_apt = (s as any).shared_apt ?? {})['rentWeekNum'] = (((s as any).shared_apt ?? {})?.['weekNum'] ?? 0) + 1;
    scene.text('Your rent is now fully paid for next week!');
    qspCall(s, 'homes_properties', 'give_access');
  } else {
    scene.text(`You still owe ${qspFunc(s, 'money', 'string_price', (((s as any).shared_apt ?? 0)?.['rentLeft'] ?? ''))} for your rent.`);
  }
  ((s as any).shared_apt = (s as any).shared_apt ?? {})['price'] = 0;
  scene.actions([
    { label: 'Continue', goto: ['pav_shared_apt', 'start'] },
  ]);
  scene.build();
}

function enterAdvertNo30(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_shared_apt', ((s as any).locArgs?.[0] ?? 0));
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  ((s as any).shared_apt = (s as any).shared_apt ?? {})['seenAd'] = 1;
  qspCall(s, 'stat', '');
  scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/stairs/pod_ob` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
  scene.text('<br>As you pass by the advertisements, you notice a sign - "сдаeтся в аренду комната" (Room for rent!). Some guys are looking for a roommate. They live in an apartment in one of the other buildings in the apartment complex.');
  scene.actions([
{ label: 'Continue', goto: ['pod_ezd', 'etaj_1'] },
]);
  return;
  scene.build();
}

function enterDoorNo30(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_shared_apt', ((s as any).locArgs?.[0] ?? 0));
  if (((s as any).shared_apt ?? 0)?.['enabled'] === 1) {
    scene.img('images/locations/shared/apartment/podezdhr.jpg');
    scene.text('<br>You stand before the entry door to apartment No 30, the apartment you share with three others');
    scene.actions([
      { label: 'Go inside', goto: ['pav_shared_apt', 'start'] },
    ]);
  } else {
    scene.img('images/locations/pavlovsk/resident/sharedapt/aptno3door.jpg');
    scene.text('<br>You stand before the entry door to apartment No 30. There is a sign on the door saying - "сдаeтся в аренду комната" (Room for rent).');
    scene.actions([
      { label: 'Knock on the door', goto: ['pav_shared_apt', 'intro'] },
    ]);
  }
  scene.actions([
{ label: 'Go back outside', goto: ['pav_complex', 'start'] },
]);
  return;
  scene.build();
}

function enterIntro(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterUpdate(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).shared_apt ?? 0)?.['previousTenant'] === 1  &&  ((s as any).shared_apt ?? 0)?.['enabled'] === 0) {
    if (((s as any).shared_apt ?? 0)?.['step'] > 0) {
      scene.img('images/locations/pavlovsk/resident/sharedapt/sp/sp.jpg');
    }
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    scene.img('images/locations/pavlovsk/resident/sharedapt/sp/sp.jpg');
    scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>${(((s as any).npc_firstname ?? 0)?.['A264'] ?? '')} opens the door, looking surprised to see you. "${((s as any).pcs_firstname ?? '')}! Didn't expect to see you back here."</font>`);
    if (((s as any).shared_apt ?? 0)?.['evicted'] === 1) {
      scene.text(`<font color=#${(((s as any).Oleg ?? 0)?.['font'] ?? '')}>${(((s as any).npc_firstname ?? 0)?.['A266'] ?? '')} appears behind him. "Oh, it's you. Want to give this another try after the rent situation last time?"</font>`);
      scene.text(`<font color=#${((s as any).pcs_font ?? '')}>"Yes, I'd like to rent the room again if it's still available. I promise I'll keep up with the rent this time."</font>`);
      scene.text(`<font color=#${(((s as any).Nestor ?? 0)?.['font'] ?? '')}>${(((s as any).npc_firstname ?? 0)?.['A265'] ?? '')} pushes his way into the doorway. "Well, well, look who's back. I say we make her pay double security deposit this time!"</font>`);
      scene.text(`<font color=#${(((s as any).Oleg ?? 0)?.['font'] ?? '')}>"Ignore him. The room is still available, but we'll need the first week's rent upfront this time."</font>`);
      if (qspFunc(s, 'money', 'can_afford', ((s as any).shared_apt ?? 0)?.['rentWeekly'], 'cash')) {
        scene.actions([
          { label: '', labelFn: (s: GameState) => 'Pay the first week\'s rent (' + String(qspFunc(s, 'money', 'string_price', (((s as any).shared_apt ?? 0)?.['rentWeekly'] ?? '')) ?? '') + ')', handler: (st: GameState) => {
    qspCall(st, 'money', 'pay', (((st as any).shared_apt ?? 0)?.['rentWeekly']), 'cash');
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['cashPaid'] = ((st as any).shared_apt['cashPaid'] ?? 0) + ((((st as any).shared_apt ?? 0)?.['rentWeekly']));
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['enabled'] = 1;
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['rentPaid'] = 1;
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['evicted'] = 0;
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['missedWeeks'] = 0;
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['rentLeft'] = 0;
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['intro_daystart'] = ((st as any).daystart ?? 0);
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['weekNum'] = 0;
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['rentWeekNum'] = 1;
    qspCall(st, 'homes_properties', 'give_access', 'shared_apartment');
    scene.img('images/locations/pavlovsk/resident/sharedapt/hallway.jpg');
    scene.text(`<font color=#${(((st as any).Yakov ?? 0)?.['font'] ?? '')}>"Well, welcome back then. Same rules as before."</font>`);
    if (((st as any).shared_apt ?? 0)?.['servitudeLvl'] === 0) {
      scene.text(`<font color=#${(((st as any).Oleg ?? 0)?.['font'] ?? '')}>"Just pay your rent on time and we'll all get along fine."</font>`);
    } else {
      if (((st as any).shared_apt ?? 0)?.['servitudeLvl'] === 1) {
        scene.text(`<font color=#${(((st as any).Oleg ?? 0)?.['font'] ?? '')}>"Remember you can pay with cleaning and cooking services if you prefer."</font>`);
      } else {
        scene.text(`<font color=#${(((st as any).Nestor ?? 0)?.['font'] ?? '')}>"Looking forward to your… special services again."</font>`);
        scene.text(`<font color=#${(((st as any).Oleg ?? 0)?.['font'] ?? '')}>"Shut up, ${(((st as any).npc_firstname ?? 0)?.['A265'] ?? '')}."</font>`);
      }
    }
    scene.text(`<font color=#${((st as any).pcs_font ?? '')}>"Thanks guys. I'll be a better roommate this time."</font>`);
    scene.actions([
      { label: 'Go to your room', goto: ['pav_shared_apt', 'pcsRoom'] },
    ]);
  } },
        ]);
      } else {
        scene.text(`<font color=#${((s as any).pcs_font ?? '')}>"I don't have enough for the first week right now…"</font>`);
        scene.text(`<font color=#${(((s as any).Oleg ?? 0)?.['font'] ?? '')}>"Sorry, but after last time, we need the money upfront. Come back when you have it."</font>`);
        scene.actions([
          { label: 'Leave', goto: ['pav_complex', 'start'] },
        ]);
      }
    } else {
      scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"Did you change your mind about staying with us?"</font>`);
      scene.text(`<font color=#${((s as any).pcs_font ?? '')}>"Yes, I'd like to move back in if the room is still available."</font>`);
      scene.text(`<font color=#${(((s as any).Oleg ?? 0)?.['font'] ?? '')}>"It is. Same terms as before?"</font>`);
      if (((s as any).shared_apt ?? 0)?.['servitudeLvl'] === 0) {
        scene.text(`<font color=#${(((s as any).Nestor ?? 0)?.['font'] ?? '')}>"Still just paying cash? Boring."</font>`);
      } else {
        if (((s as any).shared_apt ?? 0)?.['servitudeLvl'] === 1) {
          scene.text(`<font color=#${(((s as any).Nestor ?? 0)?.['font'] ?? '')}>"Still doing the cleaning and cooking? Or maybe something more this time?"</font>`);
        } else {
          scene.text(`<font color=#${(((s as any).Nestor ?? 0)?.['font'] ?? '')}>"Oh good, our special arrangement can continue."</font>`);
        }
      }
      if (((s as any).shared_apt ?? 0)?.['servitudeLvl'] === 0) {
        scene.actions([
          { label: 'Ask about housekeeping services', handler: (st: GameState) => {
    scene.text(`<font color=#${((st as any).pcs_font ?? '')}>"I was thinking about helping with cooking and cleaning this time, to reduce my rent costs."</font>`);
    scene.text(`<font color=#${(((st as any).Yakov ?? 0)?.['font'] ?? '')}>"That would be great! We'll put together the list of service charges again."</font>`);
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['enabled'] = 1;
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['servitudeLvl'] = 1;
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['rentLeft'] = (((st as any).shared_apt ?? 0)?.['rentWeekly']);
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['intro_daystart'] = ((st as any).daystart ?? 0);
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['weekNum'] = 0;
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['rentWeekNum'] = 1;
    qspCall(st, 'homes_properties', 'give_access', 'shared_apartment');
    scene.text(`<font color=#${(((st as any).Oleg ?? 0)?.['font'] ?? '')}>"The room is yours. Welcome back."</font>`);
    scene.actions([
      { label: 'Continue', goto: ['pav_shared_apt', 'rentSetup'] },
    ]);
  } },
        ]);
      }
      if (((s as any).shared_apt ?? 0)?.['servitudeLvl'] <= 1) {
        scene.actions([
          { label: 'Offer "special" services', handler: (st: GameState) => {
    scene.text(`<font color=#${((st as any).pcs_font ?? '')}>"I was thinking maybe we could include some… more personal services in our arrangement this time."</font>`);
    scene.text(`<font color=#${(((st as any).Nestor ?? 0)?.['font'] ?? '')}>"Now we're talking!"</font>`);
    scene.text(`<font color=#${(((st as any).Oleg ?? 0)?.['font'] ?? '')}>"Are you sure about this, ${((st as any).pcs_firstname ?? '')}?"</font>`);
    scene.text(`<font color=#${(((st as any).Yakov ?? 0)?.['font'] ?? '')}>"We'll update the service list with those options too."</font>`);
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['enabled'] = 1;
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['servitudeLvl'] = 2;
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['rentLeft'] = (((st as any).shared_apt ?? 0)?.['rentWeekly']);
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['intro_daystart'] = ((st as any).daystart ?? 0);
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['weekNum'] = 0;
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['rentWeekNum'] = 1;
    qspCall(st, 'homes_properties', 'give_access', 'shared_apartment');
    scene.text(`<font color=#${(((st as any).Nestor ?? 0)?.['font'] ?? '')}>"This is gonna be fun."</font>`);
    scene.text(`<font color=#${((st as any).pcs_font ?? '')}>"Don't get too excited. It's just business."</font>`);
    scene.actions([
      { label: 'Continue', goto: ['pav_shared_apt', 'rentSetup'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Continue with the same arrangement', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['enabled'] = 1;
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['rentLeft'] = (((st as any).shared_apt ?? 0)?.['rentWeekly']);
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['intro_daystart'] = ((st as any).daystart ?? 0);
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['weekNum'] = 0;
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['rentWeekNum'] = 1;
    qspCall(st, 'homes_properties', 'give_access', 'shared_apartment');
    scene.img('images/locations/pavlovsk/resident/sharedapt/hallway.jpg');
    scene.text(`<font color=#${(((st as any).Yakov ?? 0)?.['font'] ?? '')}>"Well, welcome back then. We didn't change anything in your room."</font>`);
    scene.text(`<font color=#${((st as any).pcs_font ?? '')}>"Thanks! It's good to be back."</font>`);
    scene.actions([
      { label: 'Continue', goto: ['pav_shared_apt', 'rentSetup'] },
    ]);
  } },
      ]);
    }
  } else {
    if (((s as any).shared_apt ?? 0)?.['pavIntroStep'] === 0) {
      (s as any).minut = ((s as any).minut ?? 0) + 2;
      ((s as any).shared_apt = (s as any).shared_apt ?? {})['pavIntroStep'] = 1;
      scene.img('images/locations/pavlovsk/resident/sharedapt/sp/sp.jpg');
      scene.text('The door is opened by a young, nice-looking athletic man.');
      scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"Hi sweetie! What do you need?"</font>`);
      scene.text(`<font color=#${((s as any).pcs_font ?? '')}>"Hello, my name is ${((s as any).pcs_firstname ?? '')} ${((s as any).pcs_lastname ?? '')}. I've seen the advert that someone here have a spare room for rent?"</font>`);
      scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"Yeah, that's true. Come in, I'll call the guys and we can talk about it. I'm ${(((s as any).npc_firstname ?? 0)?.['A264'] ?? '')} by the way."</font>`);
      scene.actions([
        { label: 'Go in', goto: ['pav_shared_apt', 'intro'] },
      ]);
    } else {
      if (((s as any).shared_apt ?? 0)?.['pavIntroStep'] === 1) {
        (s as any).minut = ((s as any).minut ?? 0) + 3;
        ((s as any).shared_apt = (s as any).shared_apt ?? {})['pavIntroStep'] = 2;
        scene.text('You enter a hallway filled with coats and shoes, indicating that 3 or 4 people live here.');
        scene.text('The guy disappears into one of the rooms, and you overhear him talking to someone.');
        scene.text('They attempt to speak quietly, but you catch a sentence or two…:');
        scene.text('"…a girl, I tell you…" "…nice one, really, with nice round features, man…" "…better than another guy, idiot…" "…ok, ok, just be done with it…"');
        scene.text('After a while, three young men emerge in the hallway.');
        scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"So, that's her, guys. ${((s as any).pcs_firstname ?? '')}, could you introduce yourself to these guys?"</font>`);
        scene.text(`<font color=#${((s as any).pcs_font ?? '')}>"Hello, I'm ${((s as any).pcs_firstname ?? '')} ${((s as any).pcs_lastname ?? '')}. I'd like to rent the empty room in your apartment."</font>`);
        scene.text(`<font color=#${(((s as any).Nestor ?? 0)?.['font'] ?? '')}>"Well, now that's what I like! Finally, this won't be such a dull party!"</font>`);
        scene.text(`<font color=#${(((s as any).Oleg ?? 0)?.['font'] ?? '')}>"${((s as any).pcs_firstname ?? '')}, please excuse my friend, ${(((s as any).npc_firstname ?? 0)?.['A265'] ?? '')}. He can be quite rude. I'm ${(((s as any).npc_firstname ?? 0)?.['A266'] ?? '')}."</font>`);
        scene.text(`<font color=#${(((s as any).Nestor ?? 0)?.['font'] ?? '')}>"Yup, I'm ${(((s as any).npc_firstname ?? 0)?.['A265'] ?? '')}."</font>`);
        scene.text(`<font color=#${(((s as any).Oleg ?? 0)?.['font'] ?? '')}>"So, you want to live here with us?"</font>`);
        scene.text(`<font color=#${((s as any).pcs_font ?? '')}>"Yes, I need a new place to stay."</font>`);
        scene.text(`<font color=#${(((s as any).Nestor ?? 0)?.['font'] ?? '')}>"How old are you, girl?"</font>`);
        scene.text(`<font color=#${(((s as any).Oleg ?? 0)?.['font'] ?? '')}>"${(((s as any).npc_firstname ?? 0)?.['A265'] ?? '')}, not this again!"</font>`);
        scene.text(`<font color=#${((s as any).pcs_font ?? '')}>"It's okay. I'm actually ${((s as any).age ?? '')} years old. Why do you ask?"</font>`);
        scene.text(`<font color=#${(((s as any).Oleg ?? 0)?.['font'] ?? '')}>"He's just an idiot; don't listen to him."</font>`);
        if (((s as any).age ?? 0) < 18) {
          scene.text(`(You can see ${(((s as any).npc_firstname ?? 0)?.['A265'] ?? '')} rub his crotch just a brief moment after you told him your age. What's he up to?)`);
        }
        if (((s as any).knowpreg ?? 0) === 1) {
          scene.actions([
            { label: 'Ask about children', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['pavIntroStep'] = 50;
    scene.text(`<font color=#${((st as any).pcs_font ?? '')}>"I thought I should tell you, I'm currently pregnant. How do you feel about having children in the apartment, will this be a problem?"</font>`);
    scene.actions([
      { label: 'continue', goto: ['pav_shared_apt', 'intro'] },
    ]);
  } },
          ]);
        } else {
          if (((s as any).kid ?? 0) > 0) {
            scene.actions([
              { label: 'Ask about children', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['pavIntroStep'] = 50;
    scene.text(`<font color=#${((st as any).pcs_font ?? '')}>"I thought I should tell, I'm a mother. How do you feel about having children in the apartment, will this be a problem?"</font>`);
    scene.actions([
      { label: 'continue', goto: ['pav_shared_apt', 'intro'] },
    ]);
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Continue', goto: ['pav_shared_apt', 'intro'] },
            ]);
          }
        }
      } else {
        if (((s as any).shared_apt ?? 0)?.['pavIntroStep'] === 2) {
          (s as any).minut = ((s as any).minut ?? 0) + 3;
          ((s as any).shared_apt = (s as any).shared_apt ?? {})['pavIntroStep'] = 3;
          scene.text(`<font color=#${((s as any).pcs_font ?? '')}>"So what do you guys say, will you take me in?"</font>`);
          scene.text(`<font color=#${(((s as any).Oleg ?? 0)?.['font'] ?? '')}>"We may. But first, do you have the money to pay the rent?"</font>`);
          scene.text(`<font color=#${((s as any).pcs_font ?? '')}>"Well, of course I don't expect to let me live here for free. But I hope the rent is reasonable…"</font>`);
          scene.text(`<font color=#${(((s as any).Oleg ?? 0)?.['font'] ?? '')}>"It is indeed."</font>`);
          scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"${qspFunc(s, 'money', 'string_price', (((s as any).shared_apt ?? 0)?.['rentWeekly'] ?? ''))}. Per week."</font>`);
          scene.text(`<font color=#${((s as any).pcs_font ?? '')}>"Uhm. That's quite a lot. I'm not sure if I'll be able to afford this…"</font>`);
          scene.text(`<font color=#${(((s as any).Nestor ?? 0)?.['font'] ?? '')}>"You can pay other ways if you'd like!"</font>`);
          scene.text(`<font color=#${(((s as any).Oleg ?? 0)?.['font'] ?? '')}>"${(((s as any).npc_firstname ?? 0)?.['A265'] ?? '')}!"</font>`);
          scene.text(`<font color=#${((s as any).pcs_font ?? '')}>"What do you mean by other ways?"</font>`);
          scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"Well ${((s as any).pcs_firstname ?? '')}, since we are just guys here, and since we suck at these things, we could use someone as you, a girl I mean, to be something like our, let's say, handmaiden. If you know what I mean."</font>`);
          scene.text(`<font color=#${((s as any).pcs_font ?? '')}>"Like cooking and cleaning?"</font>`);
          scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"Yes, exactly."</font>`);
          scene.text(`<font color=#${(((s as any).Nestor ?? 0)?.['font'] ?? '')}>"And more."</font>`);
          scene.text(`<font color=#${(((s as any).Oleg ?? 0)?.['font'] ?? '')}>"Oh my… I give up."</font>`);
          scene.actions([
            { label: 'More what?', goto: ['pav_shared_apt', 'intro'] },
          ]);
        } else {
          if (((s as any).shared_apt ?? 0)?.['pavIntroStep'] === 3) {
            (s as any).minut = ((s as any).minut ?? 0) + 3;
            scene.text(`<font color=#${(((s as any).Nestor ?? 0)?.['font'] ?? '')}>"More services."</font>`);
            scene.text(`<font color=#${((s as any).pcs_font ?? '')}>"What kind of "services"?"</font>`);
            scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"the adult kind of services."</font>`);
            scene.text(`<font color=#${((s as any).pcs_font ?? '')}>"You mean to be a whore for you? Instead of paying the rent???"</font>`);
            scene.text(`<font color=#${(((s as any).Oleg ?? 0)?.['font'] ?? '')}>"Please ${((s as any).pcs_firstname ?? '')}, don't get mad. ${(((s as any).npc_firstname ?? 0)?.['A265'] ?? '')} is not just an idiot, he is a rude idiot. We are definitely not asking you to be our whore or something like that."</font>`);
            scene.text(`<font color=#${(((s as any).Oleg ?? 0)?.['font'] ?? '')}>" As ${(((s as any).npc_firstname ?? 0)?.['A264'] ?? '')} told you, we could decrease your rent if you would do some housekeeping stuff we really suck at. But only if you want, of course."</font>`);
            scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"So what do you say ${((s as any).pcs_firstname ?? '')}?"</font>`);
            if (((s as any).start_location ?? 0) === 3) {
              qspCall(s, 'homes_properties', 'set_home', 'shared_apartment');
            } else {
              scene.actions([
                { label: 'Say that you changed your mind about this', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['pavIntroStep'] = 40;
  }, goto: ['pav_shared_apt', 'intro'] },
              ]);
            }
            scene.actions([
              { label: 'Say you will pay the rent the normal way', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['enabled'] = 1;
    qspCall(st, 'homes_properties', '');
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['pavIntroStep'] = 10;
  }, goto: ['pav_shared_apt', 'intro'] },
              { label: 'Say you don\'t mind doing the homekeeping stuff', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['enabled'] = 1;
    qspCall(st, 'homes_properties', '');
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['pavIntroStep'] = 20;
  }, goto: ['pav_shared_apt', 'intro'] },
              { label: 'Say you don\'t mind anything', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['enabled'] = 1;
    qspCall(st, 'homes_properties', '');
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['pavIntroStep'] = 30;
  }, goto: ['pav_shared_apt', 'intro'] },
            ]);
          } else {
            if (((s as any).shared_apt ?? 0)?.['pavIntroStep'] === 10) {
              (s as any).minut = ((s as any).minut ?? 0) + 2;
              scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"Fine. So the rest of this week you have free, but you need to prepay the next week. OK?"</font>`);
              scene.text(`<font color=#${((s as any).pcs_font ?? '')}>"Yes, OK, I understand."</font>`);
              scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"So the room is over there.</font>`);
              scene.text(`<font color=#${((s as any).pcs_font ?? '')}>"Wait, Isn't that the living room?"</font>`);
              scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"Yes, it's available, but we're not using it, so we're renting it out. It's fully furnished with a bed, a table, and a chair. We've even added a curtain to separate the space. Feel free to move in whenever you'd like. See you later, ${((s as any).pcs_firstname ?? '')}!"</font>`);
              scene.text(`<font color=#${(((s as any).Oleg ?? 0)?.['font'] ?? '')}>"Have a nice day ${((s as any).pcs_firstname ?? '')}."</font>`);
              scene.text(`<font color=#${(((s as any).Nestor ?? 0)?.['font'] ?? '')}>"See ya later girlie…"</font>`);
              scene.text(`<font color=#${((s as any).pcs_font ?? '')}>"Later guys!"</font>`);
              ((s as any).shared_apt = (s as any).shared_apt ?? {})['servitudeLvl'] = 0;
              scene.actions([
                { label: 'Continue', goto: ['pav_shared_apt', 'rentSetup'] },
              ]);
            } else {
              if (((s as any).shared_apt ?? 0)?.['pavIntroStep'] === 20) {
                (s as any).minut = ((s as any).minut ?? 0) + 2;
                scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"Fine. So the rest of this week you have free, but you need to prepay the next week. OK?"</font>`);
                scene.text(`<font color=#${((s as any).pcs_font ?? '')}>"Yes, OK, I understand."</font>`);
                scene.text(`<font color=#${(((s as any).Oleg ?? 0)?.['font'] ?? '')}>"We will prepare a list of the charges for the housekeeping services you may want to do, so it's clear how much will be deducted from your rent."</font>`);
                scene.text(`<font color=#${((s as any).pcs_font ?? '')}>"Cool!"</font>`);
                scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"So the room is over there."</font>`);
                scene.text(`<font color=#${((s as any).pcs_font ?? '')}>"Wait, Isn't that the living room?"</font>`);
                scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"Yes, it's available, but we're not using it, so we're renting it out. It's fully furnished with a bed, a table, and a chair. We've even added a curtain to separate the space. Feel free to move in whenever you'd like. See you later, ${((s as any).pcs_firstname ?? '')}!"</font>`);
                scene.text(`<font color=#${(((s as any).Oleg ?? 0)?.['font'] ?? '')}>"Have a nice day, ${((s as any).pcs_firstname ?? '')}."</font>`);
                scene.text(`<font color=#${(((s as any).Nestor ?? 0)?.['font'] ?? '')}>"See ya later, girlie…"</font>`);
                scene.text(`<font color=#${((s as any).pcs_font ?? '')}>"Later, guys!"</font>`);
                ((s as any).shared_apt = (s as any).shared_apt ?? {})['servitudeLvl'] = 1;
                scene.actions([
                  { label: 'Continue', goto: ['pav_shared_apt', 'rentSetup'] },
                ]);
              } else {
                if (((s as any).shared_apt ?? 0)?.['pavIntroStep'] === 30) {
                  (s as any).minut = ((s as any).minut ?? 0) + 2;
                  scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"Fine. So, the rest of this week you have free, but you need to prepay the next week. OK?"</font>`);
                  scene.text(`<font color=#${((s as any).pcs_font ?? '')}>"Yes, OK, I understand."</font>`);
                  scene.text(`<font color=#${(((s as any).Oleg ?? 0)?.['font'] ?? '')}>"We will prepare a list of the charges for the housekeeping services you may want to do, so it's clear how much will be deducted from your rent."</font>`);
                  scene.text(`<font color=#${(((s as any).Nestor ?? 0)?.['font'] ?? '')}>"The extra stuff services will be there too, girl."</font>`);
                  scene.text(`<font color=#${((s as any).pcs_font ?? '')}>"OK…"</font>`);
                  scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"So, the room is over there."</font>`);
                  scene.text(`<font color=#${((s as any).pcs_font ?? '')}>"Wait, isn't that the living room?"</font>`);
                  scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"Yes, it is, but we don't use it, so we are renting it out. There is all you need, a bed, a table with a chair, all this stuff. Just move in when you want, we even put a curtain over the doorway. See you later, ${((s as any).pcs_firstname ?? '')}!"</font>`);
                  scene.text(`<font color=#${(((s as any).Oleg ?? 0)?.['font'] ?? '')}>"Have a nice day, ${((s as any).pcs_firstname ?? '')}."</font>`);
                  scene.text(`<font color=#${(((s as any).Nestor ?? 0)?.['font'] ?? '')}>"See ya later, girlie…"</font>`);
                  scene.text(`<font color=#${((s as any).pcs_font ?? '')}>"Later, guys!"</font>`);
                  ((s as any).shared_apt = (s as any).shared_apt ?? {})['servitudeLvl'] = 2;
                  scene.actions([
                    { label: 'Continue', goto: ['pav_shared_apt', 'rentSetup'] },
                  ]);
                } else {
                  if (((s as any).shared_apt ?? 0)?.['pavIntroStep'] === 40) {
                    (s as any).minut = ((s as any).minut ?? 0) + 2;
                    scene.text(`<font color=#${(((s as any).Oleg ?? 0)?.['font'] ?? '')}>"I told you idiot not to scare her away!"</font>`);
                    scene.text(`<font color=#${(((s as any).Nestor ?? 0)?.['font'] ?? '')}>"Sorry man! We can still lock her to the radiator like I suggested in the first place…"</font>`);
                    scene.text(`<font color=#${(((s as any).Oleg ?? 0)?.['font'] ?? '')}>"Just shut up already!"</font>`);
                    scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"Sorry ${((s as any).pcs_firstname ?? '')}. We respect your decision. If you change your mind and the room is still empty, let us know and we can talk again. Goodbye!"</font>`);
                    scene.actions([
                      { label: 'Tell them goodbye and leave', goto: ['pav_complex', 'start'] },
                      { label: 'Change your mind and ask them about those services again', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['pavIntroStep'] = 3;
  }, goto: ['pav_shared_apt', 'intro'] },
                    ]);
                  } else {
                    if (((s as any).shared_apt ?? 0)?.['pavIntroStep'] === 50) {
                      (s as any).minut = ((s as any).minut ?? 0) + 2;
                      scene.text(`<font color=#${(((s as any).Oleg ?? 0)?.['font'] ?? '')}>"I'm sorry ${((s as any).pcs_firstname ?? '')}, but we don't want children or pets in the apartment!"</font>`);
                      scene.text(`<font color=#${(((s as any).Nestor ?? 0)?.['font'] ?? '')}>"If you get rid of the kid, come back and see us."</font>`);
                      scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"Don't mind him. There's simply not enough room for 4 people, plus kids or pets. I hope you understand"</font>`);
                      if (qspFunc(s, 'homes_properties', 'has_access', 'parents_home')) {
                        scene.actions([
                          { label: 'Suggest a compromise', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['pavIntroStep'] = 2;
    scene.text(`<font color=#${((st as any).pcs_font ?? '')}>"I can leave them with my parents for the time being, and keep them away from the apartment, how does this sound?`);
    scene.text(`<font color=#${(((st as any).Yakov ?? 0)?.['font'] ?? '')}>"Are you certain you want to do this?"</font>`);
    scene.text(`<font color=#${(((st as any).Nestor ?? 0)?.['font'] ?? '')}>"Sounds good to me!"</font>`);
    scene.text(`<font color=#${(((st as any).Oleg ?? 0)?.['font'] ?? '')}>"hmmmm"</font>`);
    scene.actions([
      { label: 'Continue', goto: ['pav_shared_apt', 'intro'] },
    ]);
  } },
                          { label: 'I won\'t leave my children', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['pavIntroStep'] = 0;
    scene.text(`<font color=#${((st as any).pcs_font ?? '')}>"OK, I will make do with my current accommodation.`);
    scene.text(`<font color=#${(((st as any).Yakov ?? 0)?.['font'] ?? '')}>"We understand"</font>`);
    scene.text(`<font color=#${(((st as any).Nestor ?? 0)?.['font'] ?? '')}>"Damn"</font>`);
    scene.text(`<font color=#${(((st as any).Oleg ?? 0)?.['font'] ?? '')}>"No problem ${((st as any).pcs_firstname ?? '')}"</font>`);
    scene.actions([
      { label: 'Continue', goto: ['pav_complex', 'start'] },
    ]);
  } },
                        ]);
                      } else {
                        scene.text(`<font color=#${((s as any).pcs_font ?? '')}>OK, I understand.</font>`);
                        scene.actions([
                          { label: 'Thank them and leave', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['pavIntroStep'] = 0;
  }, goto: ['pav_complex', 'start'] },
                        ]);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterRentSetup(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  scene.text(`You signed a rental agreement. The weekly rent is ${qspFunc(s, 'money', 'string_price', (((s as any).shared_apt ?? 0)?.['rentWeekly'] ?? ''))}.`);
  ((s as any).shared_apt = (s as any).shared_apt ?? {})['rentPaid'] = 1;
  ((s as any).shared_apt = (s as any).shared_apt ?? {})['cashPaid'] = 0;
  ((s as any).shared_apt = (s as any).shared_apt ?? {})['rentLeft'] = (((s as any).shared_apt ?? 0)?.['rentWeekly']);
  ((s as any).shared_apt = (s as any).shared_apt ?? {})['introDone'] = 1;
  ((s as any).shared_apt = (s as any).shared_apt ?? {})['intro_daystart'] = ((s as any).daystart ?? 0);
  ((s as any).shared_apt = (s as any).shared_apt ?? {})['pavIntroStep'] = 0;
  ((s as any).shared_apt = (s as any).shared_apt ?? {})['missedWeeks'] = 0;
  ((s as any).shared_apt = (s as any).shared_apt ?? {})['Lockrent'] = 0;
  ((s as any).shared_apt = (s as any).shared_apt ?? {})['weekNum'] = 0;
  ((s as any).shared_apt = (s as any).shared_apt ?? {})['rentWeekNum'] = 1;
  scene.actions([
    { label: 'Continue', goto: ['pav_shared_apt', 'start'] },
  ]);
  scene.build();
}

function enterQuickStart(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterUpdate(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).minut = ((s as any).minut ?? 0) + 7;
  if (((s as any).knowpreg ?? 0) === 1  ||  ((s as any).kid ?? 0) > 0) {
    ((s as any).shared_apt = (s as any).shared_apt ?? {})['pavIntroStep'] = 50;
    alert('You cannot live in the shared home while you are pregnant, or while having one or more children');
    qspGoto(s, 'pav_complex', 'start');
  }
  (s as any).minut = ((s as any).minut ?? 0) + 8;
  ((s as any).shared_apt = (s as any).shared_apt ?? {})['enabled'] = 1;
  ((s as any).shared_apt = (s as any).shared_apt ?? {})['servitudeLvl'] = 0;
  qspCall(s, 'homes_properties', 'set_home', 'shared_apartment');
  ((s as any).shared_apt = (s as any).shared_apt ?? {})['rentPaid'] = 1;
  ((s as any).shared_apt = (s as any).shared_apt ?? {})['cashPaid'] = 0;
  ((s as any).shared_apt = (s as any).shared_apt ?? {})['rentLeft'] = (((s as any).shared_apt ?? 0)?.['rentWeekly']);
  ((s as any).shared_apt = (s as any).shared_apt ?? {})['introDone'] = 1;
  ((s as any).shared_apt = (s as any).shared_apt ?? {})['intro_daystart'] = ((s as any).daystart ?? 0);
  ((s as any).shared_apt = (s as any).shared_apt ?? {})['pavIntroStep'] = 0;
  ((s as any).shared_apt = (s as any).shared_apt ?? {})['missedWeeks'] = 0;
  ((s as any).shared_apt = (s as any).shared_apt ?? {})['Lockrent'] = 0;
  ((s as any).shared_apt = (s as any).shared_apt ?? {})['weekNum'] = 0;
  ((s as any).shared_apt = (s as any).shared_apt ?? {})['rentWeekNum'] = 1;
  qspGoto(s, 'pav_shared_apt', 'start');
  scene.build();
}

function enterDebug(s: GameState, scene: SceneBuilder): void {
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<h4>Debug Controls</h4>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.shared_apt ??= {})\u0027debug\u0027 = 1; return s; }); return false;">Debug Close</a> | ');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.shared_apt ??= {})\u0027debug\u0027 = 0; return s; }); return false;">Debug Disable</a>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<h4>Rent Controls</h4>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.shared_apt ??= {})\u0027rentLeft\u0027 = 0; (s.shared_apt ??= {})\u0027missedWeeks\u0027 = 0; (s.shared_apt ??= {})\u0027Lockrent\u0027 = 0; return s; }); return false;">Set Rent Paid</a> | ');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.shared_apt ??= {})\u0027rentLeft\u0027 = shared_apt[\u0027rentWeekly\u0027]; return s; }); return false;">Reset Rent Due</a> | ');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.shared_apt ??= {})\u0027rentLeft\u0027 +=500; return s; }); return false;">Add 500₽ Rent</a> | ');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.shared_apt ??= {})\u0027rentLeft\u0027 -=500; return s; }); return false;">Reduce 500₽ Rent</a>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<h4>Time & Status Controls</h4>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.shared_apt ??= {})\u0027weekNum\u0027 +=1; return s; }); window.__gameStore.getState().doGoto(\u0027pav_shared_apt\u0027, \u0027daily_update\u0027); return false;">Advance Week + Run Update</a> | ');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.shared_apt ??= {})\u0027missedWeeks\u0027 +=+1; return s; }); return false;">Increase Missed Weeks</a> | ');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.shared_apt ??= {})\u0027missedWeeks\u0027 = 0; return s; }); return false;">Reset Missed Weeks</a>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<h4>Service Controls</h4>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.shared_apt ??= {})\u0027servitudeLvl\u0027 = 0; return s; }); return false;">Set Servitude: None</a> | ');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.shared_apt ??= {})\u0027servitudeLvl\u0027 = 1; return s; }); return false;">Set Servitude: Non-Sexual</a> | ');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.shared_apt ??= {})\u0027servitudeLvl\u0027 = 2; return s; }); return false;">Set Servitude: Full Service</a>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<h4>Reset & Force Events</h4>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.shared_apt ??= {})\u0027alreadyProcessed\u0027 = 0; return s; }); return false;">Enable Processing Today</a> | ');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.shared_apt ??= {})\u0027Lockrent\u0027 = 1; return s; }); return false;">Lock Rent (Bedroom Empty)</a> | ');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.shared_apt ??= {})\u0027Lockrent\u0027 = 0; return s; }); return false;">Unlock Rent (Normal Access)</a> | ');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027homes_properties\u0027, \u0027give_access\u0027, \u0027shared_apartment\u0027); return false;">Restore Access</a>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<h4>NPC Relationships & Moods</h4>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.Oleg ??= {})\u0027mood\u0027 = 1; (s.Nestor ??= {})\u0027mood\u0027 = 1; (s.Yakov ??= {})\u0027mood\u0027 = 1; return s; }); return false;">Set All Moods Good</a> | ');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.Oleg ??= {})\u0027mood\u0027 = 10; (s.Nestor ??= {})\u0027mood\u0027 = 10; (s.Yakov ??= {})\u0027mood\u0027 = 10; return s; }); return false;">Set All Moods Bad</a>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<br>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<b>' + (((s as any).npc_firstname ?? 0)?.['A266']) + ' relationship:</b> ' + (((s as any).npc_rel ?? 0)?.['A266']) + '<br>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<b>' + (((s as any).npc_firstname ?? 0)?.['A265']) + ' relationship:</b> ' + (((s as any).npc_rel ?? 0)?.['A265']) + '<br>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<b>' + (((s as any).npc_firstname ?? 0)?.['A264']) + ' relationship:</b> ' + (((s as any).npc_rel ?? 0)?.['A264']) + '');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<h4>Variable Status</h4>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<table border="1" cellpadding="3" cellspacing="0">');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<tr><th>Variable</th><th>Value</th></tr>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<tr><td>rentLeft</td><td>' + (((s as any).shared_apt ?? 0)?.['rentLeft']) + '</td></tr>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<tr><td>weekNum</td><td>' + (((s as any).shared_apt ?? 0)?.['weekNum']) + '</td></tr>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<tr><td>rentWeekNum</td><td>' + (((s as any).shared_apt ?? 0)?.['rentWeekNum']) + '</td></tr>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<tr><td>missedWeeks</td><td>' + (((s as any).shared_apt ?? 0)?.['missedWeeks']) + '</td></tr>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<tr><td>servitudeLvl</td><td>' + (((s as any).shared_apt ?? 0)?.['servitudeLvl']) + '</td></tr>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<tr><td>servicePaid</td><td>' + (((s as any).shared_apt ?? 0)?.['servicePaid']) + '</td></tr>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<tr><td>cashPaid</td><td>' + (((s as any).shared_apt ?? 0)?.['cashPaid']) + '</td></tr>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<tr><td>step</td><td>' + (((s as any).shared_apt ?? 0)?.['step']) + '</td></tr>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<tr><td>subStep</td><td>' + (((s as any).shared_apt ?? 0)?.['subStep']) + '</td></tr>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<tr><td>Lockrent</td><td>' + (((s as any).shared_apt ?? 0)?.['Lockrent']) + '</td></tr>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<tr><td>alreadyProcessed</td><td>' + (((s as any).shared_apt ?? 0)?.['alreadyProcessed']) + '</td></tr>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<tr><td>today (daystart)</td><td>' + ((s as any).daystart ?? 0) + '</td></tr>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<tr><td>intro_daystart</td><td>' + (((s as any).shared_apt ?? 0)?.['intro_daystart']) + '</td></tr>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('</table>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<h4>NPC Status</h4>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<table border="1" cellpadding="3" cellspacing="0">');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<tr><th>NPC</th><th>Mood</th><th>Served</th><th>Cleaned</th></tr>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<tr><td>' + (((s as any).npc_firstname ?? 0)?.['A266']) + '</td><td>' + (((s as any).Oleg ?? 0)?.['mood']) + ' (' + (((s as any).Oleg ?? 0)?.['mood_txt']) + ')</td><td>' + (((s as any).Oleg ?? 0)?.['served']) + '</td><td>' + (((s as any).Oleg ?? 0)?.['cleaned']) + '</td></tr>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<tr><td>' + (((s as any).npc_firstname ?? 0)?.['A265']) + '</td><td>' + (((s as any).Nestor ?? 0)?.['mood']) + ' (' + (((s as any).Nestor ?? 0)?.['mood_txt']) + ')</td><td>' + (((s as any).Nestor ?? 0)?.['served']) + '</td><td>' + (((s as any).Nestor ?? 0)?.['cleaned']) + '</td></tr>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<tr><td>' + (((s as any).npc_firstname ?? 0)?.['A264']) + '</td><td>' + (((s as any).Yakov ?? 0)?.['mood']) + ' (' + (((s as any).Yakov ?? 0)?.['mood_txt']) + ')</td><td>' + (((s as any).Yakov ?? 0)?.['served']) + '</td><td>' + (((s as any).Yakov ?? 0)?.['cleaned']) + '</td></tr>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('</table>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<h4>Force NPC Reset</h4>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.Oleg ??= {})\u0027served\u0027 = 0; (s.Oleg ??= {})\u0027mood\u0027 = 1; (s.Oleg ??= {})\u0027cleaned\u0027 = 0; (s.Nestor ??= {})\u0027served\u0027 = 0; (s.Nestor ??= {})\u0027mood\u0027 = 1; (s.Nestor ??= {})\u0027cleaned\u0027 = 0; (s.Yakov ??= {})\u0027mood\u0027 = 1; (s.Yakov ??= {})\u0027served\u0027 = 0; (s.Yakov ??= {})\u0027cleaned\u0027 = 0; return s; }); return false;">Reset All NPCs</a>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<h4>Rent Prices</h4>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<table border="1" cellpadding="3" cellspacing="0">');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<tr><th>Service</th><th>Price</th><th>Action</th></tr>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<tr><td>Weekly Rent</td><td>' + (((s as any).shared_apt ?? 0)?.['rentWeekly']) + '</td><td>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.shared_apt ??= {})\u0027rentWeekly\u0027 +=500; return s; }); return false;">+500</a> | ');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.shared_apt ??= {})\u0027rentWeekly\u0027 -=500; return s; }); return false;">-500</a></td></tr>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<tr><td>Cook a meal</td><td>' + (((s as any).shared_apt ?? 0)?.['price_cook']) + '</td><td>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.shared_apt ??= {})\u0027price_cook\u0027 +=10; return s; }); return false;">+10</a> | ');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.shared_apt ??= {})\u0027price_cook\u0027 -=10; return s; }); return false;">-10</a></td></tr>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<tr><td>Clean apartment</td><td>' + (((s as any).shared_apt ?? 0)?.['price_clean']) + '</td><td>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.shared_apt ??= {})\u0027price_clean\u0027 +=10; return s; }); return false;">+10</a> | ');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.shared_apt ??= {})\u0027price_clean\u0027 -=10; return s; }); return false;">-10</a></td></tr>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<tr><td>Handjob</td><td>' + (((s as any).shared_apt ?? 0)?.['price_handjob']) + '</td><td>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.shared_apt ??= {})\u0027price_handjob\u0027 +=10; return s; }); return false;">+10</a> | ');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.shared_apt ??= {})\u0027price_handjob\u0027 -=10; return s; }); return false;">-10</a></td></tr>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<tr><td>Blowjob</td><td>' + (((s as any).shared_apt ?? 0)?.['price_blowjob']) + '</td><td>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.shared_apt ??= {})\u0027price_blowjob\u0027 +=10; return s; }); return false;">+10</a> | ');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.shared_apt ??= {})\u0027price_blowjob\u0027 -=10; return s; }); return false;">-10</a></td></tr>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<tr><td>Vaginal sex</td><td>' + (((s as any).shared_apt ?? 0)?.['price_vaginal']) + '</td><td>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.shared_apt ??= {})\u0027price_vaginal\u0027 +=10; return s; }); return false;">+10</a> | ');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.shared_apt ??= {})\u0027price_vaginal\u0027 -=10; return s; }); return false;">-10</a></td></tr>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<tr><td>Anal sex</td><td>' + (((s as any).shared_apt ?? 0)?.['price_anal']) + '</td><td>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.shared_apt ??= {})\u0027price_anal\u0027 +=10; return s; }); return false;">+10</a> | ');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.shared_apt ??= {})\u0027price_anal\u0027 -=10; return s; }); return false;">-10</a></td></tr>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<tr><td>Special treats</td><td>' + (((s as any).shared_apt ?? 0)?.['price_special']) + '</td><td>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.shared_apt ??= {})\u0027price_special\u0027 +=10; return s; }); return false;">+10</a> | ');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { (s.shared_apt ??= {})\u0027price_special\u0027 -=10; return s; }); return false;">-10</a></td></tr>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('</table>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<h4>Test Notifications</h4>');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027notification\u0027, \u0027add\u0027, \u0027<font color=red>TEST: Rent is overdue!</font>\u0027); return false;">Test Rent Notification</a> | ');
  (s as any).pav_shared_apt_debug = ((s as any).pav_shared_apt_debug ?? 0) + ('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027notification\u0027, \u0027add\u0027, \u0027<font color=green>TEST: Rent has been paid.</font>\u0027); return false;">Test Payment Notification</a>');
  scene.text(String(qspFunc(s, 'cleanHTML', '$pav_shared_apt_debug') || ''));
  (s as any).pav_shared_apt_debug = undefined;
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'update':
      enterUpdate(s, scene);
      break;
    case 'daily_update':
      enterDailyUpdate(s, scene);
      break;
    case 'get_rent_status':
      enterGetRentStatus(s, scene);
      break;
    case 'block_apt':
      enterBlockApt(s, scene);
      break;
    case 'start':
      enterStart(s, scene);
      break;
    case 'list':
      enterList(s, scene);
      break;
    case 'bathroom':
      enterBathroom(s, scene);
      break;
    case 'kitchen':
      enterKitchen(s, scene);
      break;
    case 'pcsRoom':
      enterPcsRoom(s, scene);
      break;
    case 'sofabed':
      enterSofabed(s, scene);
      break;
    case 'Oleg_Room':
      enterOleg_Room(s, scene);
      break;
    case 'Nestor_Room':
      enterNestor_Room(s, scene);
      break;
    case 'Yakov_Room':
      enterYakov_Room(s, scene);
      break;
    case 'cookForGuys':
      enterCookForGuys(s, scene);
      break;
    case 'cleanForGuys':
      enterCleanForGuys(s, scene);
      break;
    case 'eoleg_agreement':
      enterEolegAgreement(s, scene);
      break;
    case 'weeklyReset':
      enterWeeklyReset(s, scene);
      break;
    case 'payCash':
      enterPayCash(s, scene);
      break;
    case 'payService':
      enterPayService(s, scene);
      break;
    case 'advertNo30':
      enterAdvertNo30(s, scene);
      break;
    case 'doorNo30':
      enterDoorNo30(s, scene);
      break;
    case 'intro':
      enterIntro(s, scene);
      break;
    case 'rentSetup':
      enterRentSetup(s, scene);
      break;
    case 'quick_start':
      enterQuickStart(s, scene);
      break;
    case 'debug':
      enterDebug(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pav_shared_apt: LocationDef = {
  name: 'pav_shared_apt',
  title: 'You\'ve been evicted from the shared apartment for not paying',
  region: 'pavlovsk',
  locationType: 'private',
  locclass: 'bedr',
  enter: enter,
};
