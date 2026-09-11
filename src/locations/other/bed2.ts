import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (((s as any).clo_flag ?? 0)?.['bed'] === 1) {
    ((s as any).clo_flag ?? {})['bed'] = 0;
    qspCall(s, 'outfit', 'restore', 'bed');
  }
  qspCall(s, 'stat', '');
  scene.actions([{ label: 'Continue', goto: ['bed2', 'mod_sleeptriggers'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterModSleeptriggers(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mod_system', 'sleep', 'bed2', 'mod_sleeptriggers');
  scene.actions([{ label: 'Continue', goto: ['bed2', 'main'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterMain(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_makeup ?? 0) !== 1  &&  (!((s as any).cosmetic_tattoo ?? 0))) {
  }
  if (((s as any).clothingworntype ?? 0) !== 'nude') {
    scene.img('images/shared/home/bed.jpg');
  } else {
    scene.img('images/shared/home/bedroom/son.jpg');
  }
  // TODO-QSP: $func('alarmclock', 'base_alarmclock_text')
  qspCall(s, 'bed2', 'wear_panties_decider');
  qspCall(s, 'bed2', 'wear_buttplug_decider');
  qspCall(s, 'bed2', 'wear_vibe_decider');
  if (((s as any).pcs_sleep ?? 0) <= 80) {
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      scene.actions([
        { label: 'Go to bed', handler: (st: GameState) => {
    qspCall(st, 'shortgs', 'autosave');
  }, goto: ['pre_sleep', 'start'] },
      ]);
    } else {
      scene.actions([
        { label: 'Undress and go to bed', handler: (st: GameState) => {
    qspCall(st, 'shortgs', 'autosave');
  }, goto: ['pre_sleep', 'start'] },
      ]);
    }
  }
  qspCall(s, 'library_functions', 'set_home_read_acts');
  if (((s as any).loc ?? 0) !== 'bedrPar'  ||  ((s as any).locat ?? 0)?.['Anya_inroom'] === 0  ||  ((s as any).locat ?? 0)?.['Anya'] === 1  ||  ((s as any).locat ?? 0)?.['Anya'] === 26) {
    qspCall(s, 'library_functions', 'set_read_porn_act');
    if ((((s as any).pcs_horny ?? 0) > 75  &&  ((s as any).pcs_inhib ?? 0) >= 60)  ||  (((s as any).pcs_horny ?? 0) > 50  &&  (((s as any).fame ?? 0)?.['pav_slut'] >= 150  ||  (((s as any).fame ?? 0)?.['pav_slut'] >= 50  &&  ((s as any).pcs_inhib ?? 0) >= 60)))) {
      scene.actions([
        { label: 'Masturbate', handler: (st: GameState) => {
    (s as any).inSleep = 0;
  }, goto: ['selfplay', 'start'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Get out of bed', goto: ['bed_get_out', 'start'] },
    { label: 'Take a nap (1:00)', handler: (st: GameState) => {
    qspCall(st, 'sleep_simple', 'nap_bed');
  } },
  ]);
  scene.build();
}

function enterWearPantiesDecider(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hypnoPanty ?? 0) <= 0) {
    if (((s as any).sleepVars ?? 0)?.['bedPanty'] === 0) {
      scene.text('Will you always wear your underwear to bed? Currently - <a href="exec:sleepVars[\'bedPanty\'] = 1 & gs \'stat\' & gt \'bed2\', \'main\'">AS IS</a>.');
    } else {
      if (((s as any).sleepVars ?? 0)?.['bedPanty'] === 1) {
        scene.text('Will you always wear your underwear to bed? Currently - <a href="exec:sleepVars[\'bedPanty\'] = 2 & gs \'stat\' & gt \'bed2\', \'main\'">YES</a>.');
      } else {
        if (((s as any).sleepVars ?? 0)?.['bedPanty'] === 2) {
          scene.text('Will you always wear your underwear to bed? Currently - <a href="exec:sleepVars[\'bedPanty\'] = 0 & gs \'stat\' & gt \'bed2\', \'main\'">NO</a>.');
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterWearButtplugDecider(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mc_inventory ?? 0)?.['buttplug'] === 1) {
    if (((s as any).sleepVars ?? 0)?.['bedAnal'] === 0) {
      scene.text('Should you always remove your anal plug before bed? Currently - <a href="exec:sleepVars[\'bedAnal\'] = 1 & gs \'stat\' & gt \'bed2\', \'main\'">NO</a>.');
    } else {
      if (((s as any).sleepVars ?? 0)?.['bedAnal'] === 1) {
        scene.text('Should you always remove your anal plug before bed? Currently - <a href="exec:sleepVars[\'bedAnal\'] = 0 & gs \'stat\' & gt \'bed2\', \'main\'">YES</a>.');
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterWearVibeDecider(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mc_inventory ?? 0)?.['vibe'] === 1  &&  ((s as any).cheatVars ?? 0)?.['sleep_vib'] === 1) {
    if (((s as any).sleepVars ?? 0)?.['bedVibrator'] === 0) {
      scene.text('Should you always remove your vibrator before bed? Currently - <a href="exec:sleepVars[\'bedVibrator\'] = 1 & gs \'stat\' & gt \'bed2\', \'main\'">NO</a>.');
    } else {
      if (((s as any).sleepVars ?? 0)?.['bedVibrator'] === 1) {
        scene.text('Should you always remove your vibrator before bed? Currently - <a href="exec:sleepVars[\'bedVibrator\'] = 0 & gs \'stat\' & gt \'bed2\', \'main\'">YES</a>.');
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterFin(s: GameState, scene: SceneBuilder): void {
  if ((('bedr;korr').indexOf((((s as any).loc ?? 0)))) + 1) {
    scene.actions([{ label: 'Continue', goto: ['bedr', ''] }]);
  }
  if ((('bedr2x;korr2x').indexOf((((s as any).loc ?? 0)))) + 1) {
    scene.actions([{ label: 'Continue', goto: ['bedr2x', ''] }]);
  }
  if (((s as any).loc ?? 0) === 'uni_dorm') {
    scene.actions([{ label: 'Continue', goto: ['uni_dorm', 'dorm_room'] }]);
  }
  if (((s as any).loc ?? 0) === 'nichBedroomServant') {
    scene.actions([{ label: 'Continue', goto: ['nichBedroomServant', ''] }]);
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'mod_sleeptriggers':
      enterModSleeptriggers(s, scene);
      break;
    case 'main':
      enterMain(s, scene);
      break;
    case 'wear_panties_decider':
      enterWearPantiesDecider(s, scene);
      break;
    case 'wear_buttplug_decider':
      enterWearButtplugDecider(s, scene);
      break;
    case 'wear_vibe_decider':
      enterWearVibeDecider(s, scene);
      break;
    case 'fin':
      enterFin(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const bed2: LocationDef = {
  name: 'bed2',
  title: 'You need to wash off your makeup before going to bed.',
  region: 'other',
  enter: enter,
};
