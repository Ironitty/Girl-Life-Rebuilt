import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sleepVars ?? 0)?.['events_active'] === 1) {
    ((s as any).sleepVars ?? {})['events_done'] = 0;
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).locat ?? 0)?.['Fam_inGad'] === 0  &&  ((s as any).motherQW ?? 0)?.['bathroom_dildos'] > 0  &&  ((s as any).MarishaQW ?? 0)?.['marisha_sleepover'] === 0) {
      // TODO-QSP: $sleep_events[] = "gs 'wakeup_events', 'mother_sextalk'"
    }
    qspCall(s, 'city_experimental_trials_events', 'check_for_events');
    if (((s as any).week ?? 0) === 1  &&  ((s as any).home_name ?? 0)?.[String((s as any).loc ?? 0)] === 'parents_home') {
      // TODO-QSP: $sleep_events[] = "gs 'wakeup_events', 'mother_laundry'"
    }
    qspCall(s, 'wakeup_events', 'vomiting_check');
    if (((s as any).MarishaQW ?? 0)?.['marisha_sleepover'] === 1) {
      // TODO-QSP: $sleep_events_priority[] = 'gs ''wakeup_events'', ''marisha_ev_morning'' '
    }
    if (((s as any).start_type ?? 0)?.['magic'] === 'tg'  &&  ((s as any).daystart ?? 0) - ((s as any).daystart_start ?? 0) < 9) {
      // TODO-QSP: $sleep_events_priority[] = "gs 'wakeup_events', 'trans_early_shocked'"
    } else {
      if (((s as any).start_type ?? 0)?.['magic'] === 'tg'  &&  ((s as any).daystart ?? 0) - ((s as any).daystart_start ?? 0) < 29) {
        // TODO-QSP: $sleep_events_priority[] = "gs 'wakeup_events', 'trans_little_shocked'"
      }
    }
    if (((s as any).therapistQW ?? 0)?.['hotel_sleep_flag'] === 1) {
      ((s as any).therapistQW ?? {})['hotel_sleep_flag'] = 0;
      // TODO-QSP: $sleep_events_priority[] = "gs 'therapist_home', 'wakeup'"
    }
    if (((s as any).NatbelQW ?? 0)?.['FriendLover'] >= 8  &&  ((s as any).loc ?? 0) === 'natbelapt'  &&  ((s as any).loc_arg ?? 0) === 'natroom') {
      // TODO-QSP: $sleep_events_priority[] = "gs 'wakeup_events', 'nat_wakeup_sex'"
    }
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).sleepVars ?? 0)?.['slept_in'] === 1  &&  ((s as any).kanikuli ?? 0) === 0  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0  &&  ((s as any).week ?? 0) < 6  &&  ((s as any).suspended ?? 0)?.['on'] !== 1) {
      if ((((s as any).hour ?? 0) === 7  ||  ((s as any).hour ?? 0) === 8)) {
        // TODO-QSP: $sleep_events_priority[] = "gs 'wakeup_events', 'sg_go_school'"
      } else {
        if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 14) {
          // TODO-QSP: $sleep_events_priority[] = "gs 'wakeup_events', 'sg_slept_in'"
        }
      }
    }
    scene.actions([{ label: 'Continue', goto: ['wakeup_events', 'mod_sleepevents'] }]);
  }
  scene.actions([{ label: 'Continue', goto: ['wakeup_events', 'continue'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterModSleepevents(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mod_system', 'sleep', 'wakeup_events', 'mod_sleepevents');
  scene.actions([{ label: 'Continue', goto: ['wakeup_events', 'event_handler'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterEventHandler(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sleepVars ?? 0)?.['events_done'] < 10) {
    if (Object.keys((s as any).sleep_events_priority ?? {}).length > 0) {
      scene.actions([{ label: 'Continue', goto: ['wakeup_events', 'event_handler2', 'priority'] }]);
    } else {
      if (Object.keys((s as any).sleep_events ?? {}).length > 0) {
        scene.actions([{ label: 'Continue', goto: ['wakeup_events', 'event_handler2'] }]);
      }
    }
  }
  scene.actions([{ label: 'Continue', goto: ['wakeup_events', 'continue'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterEventHandler2(s: GameState, scene: SceneBuilder): void {
  ((s as any).sleepVars ?? {})['events_done'] = (((s as any).sleepVars ?? {})['events_done'] ?? 0) + (1);
  if (((s as any).locArgs?.[1] ?? 0) === 'priority') {
    (s as any).temp_slev_id = ((s as any).rand ?? 0)(0, ((s as any).arrsize ?? 0)('sleep_events_priority')-1);
  } else {
    (s as any).temp_slev_id = ((s as any).rand ?? 0)(0, ((s as any).arrsize ?? 0)('sleep_events')-1);
  }
  scene.actions([{ label: 'Continue', goto: ['wakeup_events', 'event_end'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterEventEnd(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).sleep_events_priority ?? {}).length > 0) {
    scene.actions([{ label: 'Continue', goto: ['wakeup_events', 'event_handler2', 'priority'] }]);
  }
  scene.actions([{ label: 'Continue', goto: ['wakeup_events', 'event_handler'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterExit(s: GameState, scene: SceneBuilder): void {
  ((s as any).sleepVars ?? {})['events_done'] = 0;
  (s as any).inSleep = 0;
  qspCall(s, 'wakeup', 'wear_bed_clothes');
  // TODO-QSP: end
  scene.build();
}

function enterContinue(s: GameState, scene: SceneBuilder): void {
  ((s as any).sleepVars ?? {})['events_done'] = 0;
  scene.actions([{ label: 'Continue', goto: ['wakeup', 'get_out'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterMotherSextalk(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['mother_sextalk', 'dildo_wakeup1'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterMotherLaundry(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['wakeup_events', 'mother_laundry2'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterMotherLaundry2(s: GameState, scene: SceneBuilder): void {
  scene.text('You mother has done the laundry and you see a fresh pile of clothing in your wardrobe.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'wakeup_events', 'event_end');
  } },
  ]);
  scene.build();
}

function enterVomitingCheck(s: GameState, scene: SceneBuilder): void {
  if (((s as any).vomit ?? 0)?.['hangover'] === 1  &&  (Math.floor(Math.random() * 76) + 50) > ((s as any).trait_vars ?? 0)?.['drinking_exp']  ||  ((s as any).vomit ?? 0)?.['unlucky'] === 1  ||  ((s as any).vomit ?? 0)?.['morning_sick'] === 1) {
    if (((s as any).loc ?? 0) === qspFunc(s, 'homes_properties_attr', 'get_property_attribute', '$bedroom')  &&  qspFunc(s, 'homes_properties', 'is_at_a_home')) {
      // TODO-QSP: $sleep_events[] = 'gs ''wakeup_events'', ''vomiting_event'' '
      return;
    }
  }
  ((s as any).vomit ?? {})['morning_sick'] = 0;
  ((s as any).vomit ?? {})['hangover'] = 0;
  ((s as any).vomit ?? {})['unlucky'] = 0;
  // TODO-QSP: end
  scene.build();
}

function enterVomitingEvent(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'wakeup_events', 'exit');
  qspCall(s, 'home_activity', 'vomiting_images');
  scene.actions([{ label: 'Continue', goto: ['home_activity', 'morning_vomit'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterNatWakeupSex(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['wakeup_events', 'nat_wakeup_sex1'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterNatWakeupSex1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'natbel_kissinggames', 'wakeup_event_text');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get out of bed', handler: (st: GameState) => {
    qspCall(st, 'wakeup_events', 'event_end');
  } },
    { label: 'Have morning sex with Natasha', handler: (st: GameState) => {
    qspCall(s, 'wakeup_events', 'exit');
  }, goto: ['natbel_kissinggames', 'wakeup_sex'] },
  ]);
  scene.build();
}

function enterMarishaEvMorning(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/resident/marisha/marisha.jpg');
  // TODO-QSP: dynamic text: You wake up feeling relaxed then look over to see Marisha already up. She gives ...
  scene.text(`You wake up feeling relaxed then look over to see Marisha already up. She gives you a smile and says, "Thanks for everything ${((s as any).pcs_firstname ?? 0)}. See you later." She then leaves as you continue getting up.`);
  ((s as any).MarishaQW ?? {})['marisha_sleepover'] = 0;
  qspCall(s, 'wakeup_events', 'event_end');
  // TODO-QSP: end
  scene.build();
}

function enterTransEarlyShocked(s: GameState, scene: SceneBuilder): void {
  scene.text('The first thing you think as you wake up is, "Damn! It\'s is not a dream, I really am a woman now."');
  qspCall(s, 'wakeup_events', 'event_end');
  // TODO-QSP: end
  scene.build();
}

function enterTransLittleShocked(s: GameState, scene: SceneBuilder): void {
  scene.text('Looking at your female body, you are still a little surprised it\'s actually you.');
  qspCall(s, 'wakeup_events', 'event_end');
  // TODO-QSP: end
  scene.build();
}

function enterSgGoSchool(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'lower', 'small');
  qspCall(s, 'stat', '');
  qspCall(s, 'wakeup_events', 'event_end');
  // TODO-QSP: end
  scene.build();
}

function enterSgSleptIn(s: GameState, scene: SceneBuilder): void {
  if (((s as any).gschoolVars ?? 0)?.['absence_count'] <= 2) {
    qspCall(s, 'mood', 'lower', 'medium');
    qspCall(s, 'stat', '');
  } else {
    if (((s as any).gschoolVars ?? 0)?.['expell_stage'] === 0) {
      qspCall(s, 'mood', 'lower', 'large');
      qspCall(s, 'stat', '');
    } else {
      if (((s as any).gschoolVars ?? 0)?.['expell_stage'] === 1) {
        qspCall(s, 'mood', 'lower', 'large');
        qspCall(s, 'stat', '');
      } else {
        qspCall(s, 'mood', 'lower', 'large');
        qspCall(s, 'stat', '');
      }
    }
  }
  qspCall(s, 'wakeup_events', 'event_end');
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'mod_sleepevents':
      enterModSleepevents(s, scene);
      break;
    case 'event_handler':
      enterEventHandler(s, scene);
      break;
    case 'event_handler2':
      enterEventHandler2(s, scene);
      break;
    case 'event_end':
      enterEventEnd(s, scene);
      break;
    case 'exit':
      enterExit(s, scene);
      break;
    case 'continue':
      enterContinue(s, scene);
      break;
    case 'mother_sextalk':
      enterMotherSextalk(s, scene);
      break;
    case 'mother_laundry':
      enterMotherLaundry(s, scene);
      break;
    case 'mother_laundry2':
      enterMotherLaundry2(s, scene);
      break;
    case 'vomiting_check':
      enterVomitingCheck(s, scene);
      break;
    case 'vomiting_event':
      enterVomitingEvent(s, scene);
      break;
    case 'nat_wakeup_sex':
      enterNatWakeupSex(s, scene);
      break;
    case 'nat_wakeup_sex1':
      enterNatWakeupSex1(s, scene);
      break;
    case 'marisha_ev_morning':
      enterMarishaEvMorning(s, scene);
      break;
    case 'trans_early_shocked':
      enterTransEarlyShocked(s, scene);
      break;
    case 'trans_little_shocked':
      enterTransLittleShocked(s, scene);
      break;
    case 'sg_go_school':
      enterSgGoSchool(s, scene);
      break;
    case 'sg_slept_in':
      enterSgSleptIn(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const wakeup_events: LocationDef = {
  name: 'wakeup_events',
  title: 'You mother has done the laundry and you see a fresh pile of ',
  region: 'other',
  enter: enter,
};
