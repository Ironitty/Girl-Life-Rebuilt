import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterModSleepevents(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mod_system', 'sleep', 'dream_events', 'mod_sleepevents');
  // TODO-QSP: xgt 'dream_events', 'event_handler'
  scene.build();
}

function enterEventHandler(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sleepVars ?? 0)?.['events_done'] < 1) {
    if (((s as any).arrsize ?? 0)('sleep_events_priority') > 0) {
      // TODO-QSP: gt 'dream_events', 'event_handler2', 'priority'
    } else {
      scene.actions([{ label: 'Continue', goto: ['dream_events', 'event_handler2'] }]);
    }
  }
  // TODO-QSP: xgt 'dream_events', 'continue'
  scene.build();
}

function enterEventHandler2(s: GameState, scene: SceneBuilder): void {
  (s as any).sleepVars['events_done'] = ((s as any).sleepVars['events_done'] ?? 0) + (1);
  if (((s as any).locArgs?.[1] ?? 0) === 'priority') {
    (s as any).temp_slev_id = ((s as any).rand ?? 0)(0, ((s as any).arrsize ?? 0)('((s as any).sleep_events_priority ?? 0)')-1);
  } else {
    (s as any).temp_slev_id = ((s as any).rand ?? 0)(0, ((s as any).arrsize ?? 0)('((s as any).sleep_events ?? 0)')-1);
  }
  // TODO-QSP: xgt 'dream_events', 'event_end'
  scene.build();
}

function enterEventEnd(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: xgt 'dream_events', 'event_handler'
  scene.build();
}

function enterExit(s: GameState, scene: SceneBuilder): void {
  (s as any).sleepVars['events_done'] = 0;
  (s as any).sleepVars['stat_display'] = 0;
  (s as any).inSleep = 0;
  qspCall(s, 'wakeup', 'wear_bed_clothes');
  scene.build();
}

function enterContinue(s: GameState, scene: SceneBuilder): void {
  (s as any).sleepVars['events_done'] = 0;
  (s as any).sleepVars['stat_display'] = 0;
  // TODO-QSP: xgt 'sleep', 'post_dream'
  scene.build();
}

function enterStepdadDream(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/resident/vladimir/sex/bath_voyer_1.jpg');
  scene.text('You had a very strange dream: You were blindfolded while having sex with a stranger. When you were done, you removed the blindfold to see your stepfather grinning at you.');
  (s as any).pcs_horny = 0;
  (s as any).stepdadQW = ((s as any).stepdadQW ?? 0) + (1);
  qspCall(s, 'dream_events', 'event_end');
  scene.build();
}

function enterBraidHairDream(s: GameState, scene: SceneBuilder): void {
  (s as any).canBraidHair = 1;
  scene.img('images/characters/pavlovsk/resident/anya/braid.jpg');
  scene.text('You dream about the time your sister taught you how to braid your hair. It was one of the more memorable bonding moments you had not long before you moved out.');
  qspCall(s, 'dream_events', 'event_end');
  scene.build();
}

function enterSuccubusDream(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/home/bedroom/dream/sex/succubdream.jpg');
  if (((s as any).succubusQW ?? 0) === 1) {
    (s as any).succubusQW = 2;
    scene.text('You dream of sex with multiple partners, absorbing energy from each of them.');
  } else {
    scene.text('You have the same dream of absorbing energy from multiple partners.');
  }
  (s as any).pcs_horny = 0;
  qspCall(s, 'dream_events', 'event_end');
  scene.build();
}

function enterNoDream(s: GameState, scene: SceneBuilder): void {
  if (((s as any).start_type ?? 0)?.['magic'] !== 'tg'  ||  Math.floor(Math.random() * 10) + 0 > 2) {
    scene.text('You sleep without dreaming.');
  } else {
    (s as any).temp = Math.floor(Math.random() * 3) + 0;
    if (((s as any).temp ?? 0) === 0) {
      scene.text('You have hazy dreams about your past.');
    } else {
      scene.text('You dream about the moon looking at the world with his one bloody eye.');
      scene.text('You dream that you are a man again.');
    }
  }
  qspCall(s, 'dream_events', 'event_end');
  scene.build();
}

function enterEroticDreamSwitch(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 1  &&  ((s as any).pcs_ass ?? 0) === 0  &&  (((s as any).stat ?? 0)?.['anal'] + ((s as any).stat ?? 0)?.['bj'] + ((s as any).stat ?? 0)?.['hj'] + ((s as any).stat ?? 0)?.['cuni']+ ((s as any).stat ?? 0)?.['female_sexual_partners'] + ((s as any).stat ?? 0)?.['male_sexual_partners'] + ((s as any).stat ?? 0)?.['herm_sexual_partners']) === 0) {
    (s as any).temp_rand = Math.floor(Math.random() * 6) + 1;
  } else {
    (s as any).temp_rand = ((s as any).rand ?? 0)(1, 7 + ((s as any).succublvl ?? 0));
  }
  if (((s as any).temp_rand ?? 0) <= 1) {
    qspCall(s, 'dream_events', 'd_dreams');
  } else {
    qspCall(s, 'dream_events', 'ero_dreams');
    if (((s as any).temp_rand ?? 0) === 3) {
      qspCall(s, 'dream_events', 'sex_dreams');
    } else {
      qspCall(s, 'dream_events', 'bj_dreams');
      if (((s as any).temp_rand ?? 0) === 5) {
        qspCall(s, 'dream_events', 'anal_dreams');
      } else {
        qspCall(s, 'dream_events', 'preg_dreams');
        if (((s as any).temp_rand ?? 0) === 7) {
          qspCall(s, 'dream_events', 'gang_dreams');
        } else {
          qspCall(s, 'dream_events', 'succub_dreams');
        }
      }
    }
  }
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
    case 'stepdad_dream':
      enterStepdadDream(s, scene);
      break;
    case 'braid_hair_dream':
      enterBraidHairDream(s, scene);
      break;
    case 'succubus_dream':
      enterSuccubusDream(s, scene);
      break;
    case 'no_dream':
      enterNoDream(s, scene);
      break;
    case 'erotic_dream_switch':
      enterEroticDreamSwitch(s, scene);
      break;
    default:
      enterModSleepevents(s, scene);
      break;
  }
}

export const dream_events: LocationDef = {
  name: 'dream_events',
  title: 'You had a very strange dream: You were blindfolded while hav',
  region: 'other',
  enter: enter,
};
