import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gad_swamp', 'start');
  (s as any).location_type = 'secluded';
  qspCall(s, 'gadukino_event', 'sound');
  qspCall(s, 'stat', '');
  scene.text('<center><h4>Swamp</h4></center>');
  if (((s as any).month ?? 0) >= 4  &&  ((s as any).month ?? 0) <= 10) {
    scene.img('images/locations/gadukino/hunters/\' + iif(DayStage < 4, \'swamp.jpg\', \'swamp_night.jpg\') + \'');
  } else {
    scene.img('images/locations/gadukino/hunters/\' + iif(DayStage < 4, \'swamp_winter.jpg\', \'swamp_winter_night.jpg\') + \'');
  }
  scene.text('You are at the village\'s swamp on the far side of the woods.');
  scene.text('It can be dangerous to hike in this area unless you are physically fit or know the forest well.');
  if (((s as any).hunterVars ?? 0)?.['cabin'] === 1) {
    scene.text('You can see the small path to the clearing that contains the hunters\' cabin.');
    scene.actions([
      { label: 'Walk to the hunters\' cabin (0:15)', handler: (st: GameState) => {
    if (((s as any).DayStage ?? 0) < 4) {
      if ((!(Math.floor(Math.random() * 10) + 0))) {
        qspGoto(s, 'gad_swamp_yard', 'start');
      } else {
        (s as any).swamp_stuck = 0;
        qspGoto(s, 'gad_swamp', 'stuck', 'swamp');
      }
    } else {
      qspGoto(s, 'gad_forest_lost', 'wolves', 'swamp');
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Head back to the forest (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['gad_forest', 'forest_center'] },
  ]);
  scene.build();
}

function enterStuck(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_bushcraft ?? 0) < 80  &&  ((s as any).pcs_agil ?? 0) < 70  &&  ((s as any).pcs_stren ?? 0) < 70) {
    qspCall(s, 'core_library', 'setloc', 'gad_swamp', 'stuck');
    (s as any).location_type = 'secluded';
    qspCall(s, 'gadukino_event', 'sound');
    qspCall(s, 'stat', '');
    scene.text('<center><h4>Swamp</h4></center>');
    if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  (!((s as any).PCloSkirt ?? 0))) {
      scene.img('images/locations/gadukino/hunters/goswamp1.jpg');
    } else {
      if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).PCloSkirt ?? 0) > 0) {
        scene.img('images/locations/gadukino/hunters/goswamp_ski1.jpg');
      } else {
        if (((s as any).clothingworntype ?? 0) === 'nude') {
          scene.img('images/locations/gadukino/hunters/goswamp_nude0.\' + rand(4, 5) + \'.jpg');
        }
      }
    }
    scene.text('As you walk through the swamp, you feel yourself begin to sink into the mud with each step.');
    scene.text('You know you\'re so close to your destination, but you\'re not sure you can make it.');
    if (((s as any).month ?? 0) >= 4  &&  ((s as any).month ?? 0) <= 10) {
      scene.actions([
        { label: 'Scream for help', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    if (((((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 12)  ||  (((s as any).hour ?? 0) >= 14  &&  ((s as any).hour ?? 0) < 18))) {
      (s as any).swamprand = Math.floor(Math.random() * 4) + 1;
    } else {
      if ((((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) < 23)) {
        (s as any).swamprand = Math.floor(Math.random() * 5) + 1;
      } else {
        (s as any).swamprand = Math.floor(Math.random() * 6) + 1;
      }
    }
    scene.text('<center><h4>Swamp</h4></center>');
    scene.img('images/locations/gadukino/hunters/gadforestlosthelp.jpg');
    scene.text('You don\'t think you\'re strong enough to break free of the mud and decide your best chance is to simply yell for help. Hopefully, you\'re close enough to the hunters\' cabin that they\'ll hear you.');
    if (((s as any).swamprand ?? 0) === 1) {
      scene.actions([
        { label: 'Success!', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/handshelp.jpg');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Relax', goto: ['gad_swamp_yard', 'start'] },
    ]);
  } },
      ]);
    } else {
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Failure', goto: ['gad_swamp', 'stuck'] },
      ]);
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Struggle', handler: (st: GameState) => {
    (s as any).swamp_stuck = ((s as any).swamp_stuck ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'sweat', 'add', 15);
    qspCall(s, 'stat', '');
    if (((s as any).swamp_stuck ?? 0) % 3 === 0) {
      (s as any).swamp_check = ((s as any).pcs_stren ?? 0) + ((s as any).pcs_agil ?? 0) + ((s as any).pcs_bushcraft ?? 0);
      (s as any).swamprand = Math.floor(Math.random() * 226) + 0;
    } else {
      if (((s as any).swamp_stuck ?? 0) % 2 === 0) {
        (s as any).swamp_check = ((s as any).pcs_stren ?? 0) + ((s as any).pcs_agil ?? 0);
        (s as any).swamprand = Math.floor(Math.random() * 151) + 0;
      } else {
        (s as any).swamp_check = ((s as any).pcs_stren ?? 0);
        (s as any).swamprand = Math.floor(Math.random() * 76) + 0;
      }
    }
    if (((s as any).swamp_stuck ?? 0) === 10) {
      qspCall(s, 'gameover', 'check', 10);
    }
    if (((s as any).swamp_check ?? 0) > ((s as any).swamprand ?? 0)) {
      scene.text('<center><h4>Swamp</h4></center>');
      if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  (!((s as any).PCloSkirt ?? 0))) {
        scene.img('images/locations/gadukino/hunters/goswamp.jpg');
      } else {
        if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).PCloSkirt ?? 0) > 0) {
          scene.img('images/locations/gadukino/hunters/goswamp_ski.jpg');
        } else {
          if (((s as any).clothingworntype ?? 0) === 'nude') {
            (s as any).swamprand = Math.floor(Math.random() * 4) + 0;
            if ((!((s as any).swamprand ?? 0))) {
              scene.img('images/locations/gadukino/hunters/goswamp_nude0..jpg');
            } else {
              scene.img('images/locations/gadukino/hunters/goswamp_nude0.\' + rand(1, 3) + \'.jpg');
            }
          }
        }
      }
      scene.text('Your efforts are not vain as you begin to feel the mud\'s hold loosen. Then, with another burst of strength, you free yourself and sigh in relief.');
      scene.actions([
        { label: 'Success!', goto: ['gad_swamp_yard', 'start'] },
      ]);
    } else {
      scene.text('<center><h4>Swamp</h4></center>');
      if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  (!((s as any).PCloSkirt ?? 0))) {
        scene.img('images/locations/gadukino/hunters/goswamp1.jpg');
      } else {
        if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).PCloSkirt ?? 0) > 0) {
          scene.img('images/locations/gadukino/hunters/goswamp_ski1.jpg');
        } else {
          if (((s as any).clothingworntype ?? 0) === 'nude') {
            scene.img('images/locations/gadukino/hunters/goswamp_nude0.\' + rand(4, 5) + \'.jpg');
          }
        }
      }
      scene.text('Your efforts are for nothing. The mud\'s hold feels as tight as ever. In fact, you feel yourself sinking even deeper.');
      scene.actions([
        { label: 'Failure', goto: ['gad_swamp', 'stuck'] },
      ]);
    }
  } },
    ]);
  } else {
    scene.text('<center><h4>Swamp</h4></center>');
    if (((s as any).month ?? 0) >= 4  &&  ((s as any).month ?? 0) <= 10) {
      scene.img('images/locations/gadukino/hunters/\' + iif(DayStage < 4, \'gadforestlostswamp.jpg\', \'gadforestlostswamp_night.jpg\') + \'');
    } else {
      scene.img('images/locations/gadukino/hunters/\' + iif(DayStage < 4, \'gadforestlostswamp_winter.jpg\', \'gadforestlostswamp_winter_night.jpg\') + \'');
    }
    if (((s as any).locArgs?.[1] ?? 0) === 'forest_edge') {
      (s as any).minut = ((s as any).minut ?? 0) + 60;
      scene.text('After an hour of walking through the forest, you finally see the hunters\' cabin ahead.');
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'swamp') {
        (s as any).minut = ((s as any).minut ?? 0) + 15;
        scene.text('After walking through the swamp for a few minutes, you finally see the hunters\' cabin ahead.');
      }
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['gad_swamp_yard', 'start'] },
    ]);
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
    case 'stuck':
      enterStuck(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gad_swamp: LocationDef = {
  name: 'gad_swamp',
  title: '<center><h4>Swamp</h4></center>',
  region: 'gadukino',
  locationType: 'secluded',
  enter: enter,
};
