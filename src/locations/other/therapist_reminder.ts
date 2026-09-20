import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).remindedtherapyday = ((s as any).daystart ?? 0);
  (s as any).reminderCount = ((s as any).reminderCount ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/pc/reactions/forget.jpg');
  scene.text('');
  // TODO-QSP: dynamic text: You remember that you have an appointment with your therapist today at '+func('t...
  scene.text(`You remember that you have an appointment with your therapist today at 18:00. It's already <b>${(String(100+((s as any).hour ?? '')).slice((2)-1, ((2)-1)+(2)))}:${(String(100+((s as any).minut ?? '')).slice((2)-1, ((2)-1)+(2)))}</b>. You should go now.`);
  if (((s as any).region ?? 0) === 'pav') {
    if (((s as any).reminderFreebee ?? 0) < 4) {
      qspCall(s, 'willpower', 'misc', 'resist', 'easy');
      if (((s as any).cheatVars ?? 0)?.['willpower'] === 0) {
        (s as any).will_cost = ((s as any).will_cost ?? 0) + ((((s as any).hypnoTime ?? 0) * 2));
      }
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Return to what you were doing', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Return to what you were doing', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterIgnoreCost(s, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'stat', '');
    scene.img('images/pc/reactions/Sad.jpg');
    scene.text('');
    scene.text('You feel bad about missing your appointment, but you have other things to do now. You tell yourself that you\'ll see him again as soon as possible.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReturn(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
        ]);
      }
    } else {
      scene.actions([
        { label: 'Return to what you were doing', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterIgnoreCost(s, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'stat', '');
    scene.img('images/pc/reactions/Sad.jpg');
    scene.text('');
    scene.text('You feel bad about missing your appointment, but you have other things to do now. You tell yourself that you\'ll see him again as soon as possible.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'therapist_reminder', 'return');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Go see your therapist', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMoveToTherapist(s, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/clinic/therapist/schoolWalk.mp4');
    scene.text('You walk to your therapist\'s office.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'therapist_reminder', 'therapist');
  } },
    ]);
  } },
    ]);
  } else {
    scene.text('');
    scene.text('… But you realize you are much to far away, there\'s no way you can make it on time.');
    scene.actions([
      { label: 'Return to what you were doing', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterIgnoreCost(s, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'stat', '');
    scene.img('images/pc/reactions/Sad.jpg');
    scene.text('');
    scene.text('You feel terrible about missing your appointment. You tell yourself that you\'ll see him again as soon as possible.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'therapist_reminder', 'return');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterIgnoreCost(s: GameState, scene: SceneBuilder): void {
  if (((s as any).reminderFreebee ?? 0) < 4) {
    ((s as any).tempReminderVars = (s as any).tempReminderVars ?? {})['CostLow'] = 10;
    ((s as any).tempReminderVars = (s as any).tempReminderVars ?? {})['CostHigh'] = 20;
    (s as any).reminderMoodCostLow = 10;
    (s as any).reminderMoodCostHigh = 20;
  } else {
    ((s as any).tempReminderVars = (s as any).tempReminderVars ?? {})['Mult'] = ((s as any).reminderCount ?? 0);
    if (((s as any).reminderCount ?? 0) > 10) {
      ((s as any).tempReminderVars = (s as any).tempReminderVars ?? {})['Mult'] = 10;
    }
    ((s as any).tempReminderVars = (s as any).tempReminderVars ?? {})['CostLow'] = qspFunc(s, 'shortgs', 'sqrt', 30 * (((s as any).tempReminderVars ?? {})?.['Mult'] ?? 0));
    ((s as any).tempReminderVars = (s as any).tempReminderVars ?? {})['CostHigh'] = qspFunc(s, 'shortgs', 'sqrt', 90 * (((s as any).tempReminderVars ?? {})?.['Mult'] ?? 0));
  }
  qspCall(s, 'mood', 'lower', qspUntranslated(s, "rand(tempReminderVars['CostLow'], tempReminderVars['CostHigh'])", { location: "therapist_reminder" }));
  (s as any).daysSkippedHypno = ((s as any).daysSkippedHypno ?? 0) + (1);
  if (((s as any).daysSkippedHypno ?? 0) >= 5) {
    (s as any).hypnoTime = ((s as any).hypnoTime ?? 0) - (1);
  }
  if (((s as any).hypnoTime ?? 0) <= 5) {
    if (((s as any).trait_vars ?? 0)?.['cum_addict'] > 0) {
      qspCall(s, 'traits', 'level', 'cum_addict', 0);
    }
  } else {
    if ((!((s as any).hypnoTime ?? 0))) {
      qspCall(s, 'therapist', 'restTherapyVariables');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMoveToTherapist(s: GameState, scene: SceneBuilder): void {
  if (((s as any).loc ?? 0) === 'pav_lake') {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
  } else {
    if (((s as any).loc ?? 0) === 'pav_park') {
      (s as any).minut = ((s as any).minut ?? 0) + 10;
    } else {
      if (((s as any).region ?? 0) === 'pav') {
        (s as any).minut = ((s as any).minut ?? 0) + 10;
      } else {
        (s as any).minut = ((s as any).minut ?? 0) + 5;
      }
    }
  }
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    qspCall(s, 'outfit', 'wear_last_worn');
    qspCall(s, 'shoes', 'wear', 'last_worn');
  }
  // TODO-QSP: end
  scene.build();
}

function enterReturn(s: GameState, scene: SceneBuilder): void {
  dynamicGoto(s, 'menu_loc', 'menu_arg');
  // TODO-QSP: end
  scene.build();
}

function enterTherapist(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'therapist', 'start');
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'ignore_cost':
      enterIgnoreCost(s, scene);
      break;
    case 'move_to_therapist':
      enterMoveToTherapist(s, scene);
      break;
    case 'return':
      enterReturn(s, scene);
      break;
    case 'therapist':
      enterTherapist(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const therapist_reminder: LocationDef = {
  name: 'therapist_reminder',
  region: 'other',
  enter: enter,
};
