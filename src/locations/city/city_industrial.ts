import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterInit(s: GameState, scene: SceneBuilder): void {
  (s as any).setloc['imagepath'] = 'locations/city/industrial';
  scene.build();
}

function enterSetup(s: GameState, scene: SceneBuilder): void {
  if (((s as any).loc ?? 0) !== 'city_industrial'  ||  ((s as any).menu_loc ?? 0) !== 'city_industrial') {
    qspCall(s, 'city_industrial', 'init');
  }
  qspCall(s, 'core_library', 'setloc', 'city_industrial', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'stat', '');
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) < 4) {
      if (((s as any).hour ?? 0) >= 8) {
      }
    } else {
      if (((s as any).hour ?? 0) >= 8) {
      }
    }
  }
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) < 4) {
    if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
      (s as any).setloc['StageImage'] = ((s as any).setloc ?? {})?.['imagepath'] + '/industw.jpg';
    } else {
      (s as any).setloc['StageImage'] = ((s as any).setloc ?? {})?.['imagepath'] + '/industwn.jpg';
    }
  } else {
    if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
      (s as any).setloc['StageImage'] = ((s as any).setloc ?? {})?.['imagepath'] + '/nord.jpg';
    } else {
      (s as any).setloc['StageImage'] = ((s as any).setloc ?? {})?.['imagepath'] + '/nord2.jpg';
    }
  }
  qspCall(s, 'core_library', 'stage_title');
  scene.build();
}

function enterExit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'pavlovsk') {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    scene.actions([{ label: 'Continue', goto: ['road', '0'] }]);
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'redlight') {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      scene.actions([{ label: 'Continue', goto: ['city_redlight', 'start'] }]);
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'citypark') {
        (s as any).minut = ((s as any).minut ?? 0) + 60;
        scene.actions([{ label: 'Continue', goto: ['city_park', 'start'] }]);
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 'train') {
          (s as any).minut = ((s as any).minut ?? 0) + 15;
          scene.actions([{ label: 'Continue', goto: ['city_industrial_train', 'outside'] }]);
        } else {
          if (((s as any).locArgs?.[1] ?? 0) === 'metro') {
            (s as any).minut = ((s as any).minut ?? 0) + 5;
            scene.actions([{ label: 'Continue', goto: ['metro', 'industrial'] }]);
          } else {
            if (((s as any).locArgs?.[1] ?? 0) === 'canals') {
              (s as any).minut = ((s as any).minut ?? 0) + 15;
              scene.actions([{ label: 'Continue', goto: ['city_canals', 'start'] }]);
            } else {
              // TODO-QSP: gt $ARGS[1], $ARGS[2]
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'init':
      enterInit(s, scene);
      break;
    case 'setup':
      enterSetup(s, scene);
      break;
    case 'exit':
      enterExit(s, scene);
      break;
    default:
      enterInit(s, scene);
      break;
  }
}

export const city_industrial: LocationDef = {
  name: 'city_industrial',
  title: 'The town\'s <a href="exec: gt \'city_industrial\', \'exit\', \'cit',
  region: 'city',
  locationType: 'public_outdoors',
  enter: enter,
};
