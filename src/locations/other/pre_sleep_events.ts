import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).sleepVars) (s as any).sleepVars = {}; (s as any).sleepVars['stat_display'] = 1;
  if (((s as any).sleepVars ?? 0)?.['events_active'] === 1) {
    if (!(s as any).sleepVars) (s as any).sleepVars = {}; (s as any).sleepVars['events_done'] = 0;
    if (((s as any).succubusQW ?? 0) === 2) {
      // TODO-QSP: $sleep_events_priority[] = 'gs ''pre_sleep_events'', ''suc_event'' '
    }
    if (((s as any).magf2bdo ?? 0) === 2) {
      // TODO-QSP: $sleep_events_priority[] = 'gs ''pre_sleep_events'', ''magb_event'' '
    }
    if (((s as any).nichGalaOpponent ?? 0) === 30  &&  ((s as any).hour ?? 0) >= 19  &&  ((s as any).nichDebug ?? 0) === 1) {
      // TODO-QSP: $sleep_events_priority[] = 'gs ''pre_sleep_events'', ''nichServentSleepEvents_handler'', 2 '
    } else {
      if (((s as any).nichGalaContractTaras ?? 0) === 1  &&  ((s as any).daystart ?? 0) >= ((s as any).nichGalaContractTarasLast ?? 0) + (Math.floor(Math.random() * 8) + 3)  &&  (((s as any).nichWork ?? 0) === 1  ||  ((s as any).nichWork ?? 0) === 2)) {
        // TODO-QSP: $sleep_events_priority[] = 'gs ''pre_sleep_events'', ''nichServentSleepEvents_handler'', 1 '
      }
    }
    if (((s as any).loc ?? 0) === 'HotelRoom'  &&  ((s as any).loc_arg ?? 0) === 'therapist'  &&  ((s as any).locat ?? 0)?.['A186'] === 2) {
      // TODO-QSP: $sleep_events_priority[] = 'gs ''therapist_home'', ''pre_sleep'' '
    }
    if (((s as any).daystart ?? 0) > ((s as any).sleepVars ?? 0)?.['sleep_reflection_day']) {
      qspCall(s, 'sleep_reflections', 'event_check');
    }
    scene.actions([{ label: 'Continue', goto: ['pre_sleep_events', 'mod_sleepevents'] }]);
  }
  scene.actions([{ label: 'Continue', goto: ['pre_sleep_events', 'continue'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterModSleepevents(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mod_system', 'sleep', 'pre_sleep_events', 'mod_sleepevents');
  scene.actions([{ label: 'Continue', goto: ['pre_sleep_events', 'event_handler'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterEventHandler(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sleepVars ?? 0)?.['events_done'] < 1) {
    if (Object.keys((s as any).sleep_events_priority ?? {}).length > 0) {
      scene.actions([{ label: 'Continue', goto: ['pre_sleep_events', 'event_handler2', '\'priority\''] }]);
    } else {
      if (Object.keys((s as any).sleep_events ?? {}).length > 0) {
        scene.actions([{ label: 'Continue', goto: ['pre_sleep_events', 'event_handler2'] }]);
      }
    }
  }
  scene.actions([{ label: 'Continue', goto: ['pre_sleep_events', 'continue'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterEventHandler2(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).sleepVars) (s as any).sleepVars = {}; (s as any).sleepVars['events_done'] = ((s as any).sleepVars['events_done'] ?? 0) + (1);
  if (((s as any).locArgs?.[1] ?? 0) === 'priority') {
    (s as any).temp_slev_id = ((s as any).rand ?? 0)(0, ((s as any).arrsize ?? 0)('sleep_events_priority')-1);
  } else {
    (s as any).temp_slev_id = ((s as any).rand ?? 0)(0, ((s as any).arrsize ?? 0)('sleep_events')-1);
  }
  scene.actions([{ label: 'Continue', goto: ['pre_sleep_events', 'event_end'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterEventEnd(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['pre_sleep_events', 'event_handler'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterExit(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).sleepVars) (s as any).sleepVars = {}; (s as any).sleepVars['events_done'] = 0;
  if (!(s as any).sleepVars) (s as any).sleepVars = {}; (s as any).sleepVars['stat_display'] = 0;
  (s as any).inSleep = 0;
  // TODO-QSP: end
  scene.build();
}

function enterContinue(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).sleepVars) (s as any).sleepVars = {}; (s as any).sleepVars['events_done'] = 0;
  if (!(s as any).sleepVars) (s as any).sleepVars = {}; (s as any).sleepVars['stat_display'] = 0;
  scene.actions([{ label: 'Continue', goto: ['pre_sleep', 'pre_sleep2'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterSucEvent(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['pre_sleep_events', 'succhoice'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterMagbEvent(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['pre_sleep_events', 'magbstchoice'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterNichServentSleepEventsHandler(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 1) {
    scene.actions([{ label: 'Continue', goto: ['nichBedroomServant', 'sleepEvents', '100'] }]);
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 2) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterExit(s, scene); (s as any).locArgs = __savedLocArgs; }
      scene.actions([{ label: 'Continue', goto: ['nichBedroomServant', 'sleepEvents', '1000'] }]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSucchoice(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  if (((s as any).clothingworntype ?? 0) !== 'nude') {
    scene.img('images/shared/home/bed.jpg');
  } else {
    scene.img('images/shared/home/bedroom/son.jpg');
  }
  scene.text('');
  scene.text('You toss and turn for a while, but the energy that has been buzzing under your skin since that dream just won\'t let you sleep.');
  scene.text('');
  scene.text('Thinking about it you realize that you could push the energy out or pull it in!');
  scene.text('');
  scene.text('<center><b>You also feel that both are <i>permanent</i> choices.</b></center>');
  // TODO-QSP: end
  scene.actions([
    { label: 'Try to ignore it and go to sleep', handler: (st: GameState) => {
    qspCall(st, 'pre_sleep_events', 'event_end');
  } },
    { label: 'Push the Energy out for all time', goto: ['pre_sleep_events', 'succhoiceNO'] },
    { label: 'Pull the Energy in and let it change you permanently', goto: ['pre_sleep_events', 'succhoiceYES'] },
  ]);
  scene.build();
}

function enterSucchoiceNO(s: GameState, scene: SceneBuilder): void {
  if (((s as any).clothingworntype ?? 0) !== 'nude') {
    scene.img('images/shared/home/bed.jpg');
  } else {
    scene.img('images/shared/home/bedroom/son.jpg');
  }
  scene.text('');
  scene.text('You push the energy out of you and it dissipates.');
  (s as any).succubusQW = 12;
  (s as any).pcs_horny = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to sleep', handler: (st: GameState) => {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEventEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterSucchoiceYES(s: GameState, scene: SceneBuilder): void {
  if (((s as any).clothingworntype ?? 0) !== 'nude') {
    scene.img('images/shared/home/bed.jpg');
  } else {
    scene.img('images/shared/home/bedroom/son.jpg');
  }
  (s as any).succubusQW = 11;
  scene.text('');
  scene.text('You pull the energy deeper into yourself and hold it there.');
  scene.text('');
  scene.text('Then you feel pressure building…');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('BUILDING…');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<b>BUILDING…</b>');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('Power bursts through your body causing you to hop out of bed.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['pre_sleep_events', 'succubinit'] },
  ]);
  scene.build();
}

function enterSuccubinit(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  (s as any).succubusflag = 1;
  (s as any).succublvl = 1;
  (s as any).suclezsnapshot = ((s as any).stat ?? 0)?.['lesbian_count'];
  (s as any).succhungry = (-2);
  (s as any).sucwalkday = ((s as any).daystart ?? 0) + 2 + (Math.floor(Math.random() * 6) + 0);
  (s as any).pcs_horny = 0;
  if (!(s as any).sleepVars) (s as any).sleepVars = {}; (s as any).sleepVars['slept_in'] = 0;
  (s as any).strip_here = 0;
  scene.img('images/pc/body/succubusself.jpg');
  scene.text('You feel the power flowing around your body for several minutes, leaking through your skin and making changes all throughout you, before fading to a presence deep in your core leaving you looking the same as before… but feeling so different! ');
  if (((s as any).preg ?? 0) === 1) {
    qspCall(s, 'medical_din', 'remove_preg');
    (s as any).RecovH = 0;
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'pre_sleep_events', 'event_end');
  } },
  ]);
  scene.build();
}

function enterMagbstchoice(s: GameState, scene: SceneBuilder): void {
  (s as any).tittmp = ((s as any).tits ?? 0) + 1;
  scene.img(`images/pc/body/tits/t${((s as any).tittmp || '')}.jpg`);
  scene.text('You have an odd dream where you are looking at your naked chest in a mirror and your breasts seem larger…');
  scene.text('As the dream starts to drift away, you find yourself gazing at the reflection of your breasts and think:');
  // TODO-QSP: end
  scene.actions([
    { label: 'Nice, I wish my breasts really would grow.', handler: (st: GameState) => {
    (s as any).magf2bdo = 1;
    (s as any).magtarcup = ((s as any).magtarcup ?? 0) + (1);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEventEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Eh, I don\'t like them like that.', handler: (st: GameState) => {
    (s as any).magf2bdo = 0;
    (s as any).mgf2bnocnt = ((s as any).mgf2bnocnt ?? 0) + (1);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEventEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
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
    case 'suc_event':
      enterSucEvent(s, scene);
      break;
    case 'magb_event':
      enterMagbEvent(s, scene);
      break;
    case 'nichServentSleepEvents_handler':
      enterNichServentSleepEventsHandler(s, scene);
      break;
    case 'succhoice':
      enterSucchoice(s, scene);
      break;
    case 'succhoiceNO':
      enterSucchoiceNO(s, scene);
      break;
    case 'succhoiceYES':
      enterSucchoiceYES(s, scene);
      break;
    case 'succubinit':
      enterSuccubinit(s, scene);
      break;
    case 'magbstchoice':
      enterMagbstchoice(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pre_sleep_events: LocationDef = {
  name: 'pre_sleep_events',
  title: 'You also feel that both are <i>permanent</i> choices.',
  region: 'other',
  enter: enter,
};
