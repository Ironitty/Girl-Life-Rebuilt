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
    scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/gadukino/hunters/` + ((((s as any).DayStage ?? 0) < 4) ? ('swamp.jpg') : ('swamp_night.jpg')) + '"></center>');
  } else {
    scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/gadukino/hunters/` + ((((s as any).DayStage ?? 0) < 4) ? ('swamp_winter.jpg') : ('swamp_winter_night.jpg')) + '"></center>');
  }
  scene.text('You are at the village\'s swamp on the far side of the woods.');
  scene.text('It can be dangerous to hike in this area unless you are physically fit or know the forest well.');
  if (((s as any).hunterVars ?? 0)?.['cabin'] === 1) {
    scene.text('You can see the small path to the clearing that contains the hunters\' cabin.');
    scene.actions([
      { label: 'Walk to the hunters\' cabin (0:15)', handler: (st: GameState) => {
    if (((st as any).DayStage ?? 0) < 4) {
      if ((!(Math.floor(Math.random() * 10) + 0))) {
        qspGoto(st, 'gad_swamp_yard', 'start');
      } else {
        (st as any).swamp_stuck = 0;
        qspGoto(st, 'gad_swamp', 'stuck', 'swamp');
      }
    } else {
      qspGoto(st, 'gad_forest_lost', 'wolves', 'swamp');
    }
  } },
    ]);
  }
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
          scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/gadukino/hunters/goswamp_nude0.` + (Math.floor(Math.random() * 2) + 4) + '.jpg"></center>');
        }
      }
    }
    scene.text('As you walk through the swamp, you feel yourself begin to sink into the mud with each step.');
    scene.text('You know you\'re so close to your destination, but you\'re not sure you can make it.');
    if (((s as any).month ?? 0) >= 4  &&  ((s as any).month ?? 0) <= 10) {
      scene.actions([
        { label: 'Scream for help', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    if (((((st as any).hour ?? 0) >= 8  &&  ((st as any).hour ?? 0) < 12)  ||  (((st as any).hour ?? 0) >= 14  &&  ((st as any).hour ?? 0) < 18))) {
      (st as any).swamprand = (Math.floor(Math.random() * 4) + 1);
    } else {
      if ((((st as any).hour ?? 0) >= 7  &&  ((st as any).hour ?? 0) < 23)) {
        (st as any).swamprand = (Math.floor(Math.random() * 5) + 1);
      } else {
        (st as any).swamprand = (Math.floor(Math.random() * 6) + 1);
      }
    }
    scene.text('<center><h4>Swamp</h4></center>');
    scene.img('images/locations/gadukino/hunters/gadforestlosthelp.jpg');
    scene.text('You don\'t think you\'re strong enough to break free of the mud and decide your best chance is to simply yell for help. Hopefully, you\'re close enough to the hunters\' cabin that they\'ll hear you.');
    if (((st as any).swamprand ?? 0) === 1) {
      scene.actions([
        { label: 'Success!', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/handshelp.jpg');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Relax', goto: ['gad_swamp_yard', 'start'] },
    ]);
  } },
      ]);
    } else {
      qspCall(st, 'stat', '');
      scene.actions([
        { label: 'Failure', goto: ['gad_swamp', 'stuck'] },
      ]);
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Struggle', handler: (st: GameState) => {
    (st as any).swamp_stuck = ((st as any).swamp_stuck ?? 0) + (1);
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'sweat', 'add', 15);
    qspCall(st, 'stat', '');
    if (((st as any).swamp_stuck ?? 0) % 3 === 0) {
      (st as any).swamp_check = ((st as any).pcs_stren ?? 0) + ((st as any).pcs_agil ?? 0) + ((st as any).pcs_bushcraft ?? 0);
      (st as any).swamprand = (Math.floor(Math.random() * 226) + 0);
    } else {
      if (((st as any).swamp_stuck ?? 0) % 2 === 0) {
        (st as any).swamp_check = ((st as any).pcs_stren ?? 0) + ((st as any).pcs_agil ?? 0);
        (st as any).swamprand = (Math.floor(Math.random() * 151) + 0);
      } else {
        (st as any).swamp_check = ((st as any).pcs_stren ?? 0);
        (st as any).swamprand = (Math.floor(Math.random() * 76) + 0);
      }
    }
    if (((st as any).swamp_stuck ?? 0) === 10) {
      qspCall(st, 'gameover', 'check', 10);
      alert('<font color=red><b>You should die in this swamp, but Cheat Mode keeps you Alive.</b></font>');
    }
    if (((st as any).swamp_check ?? 0) > ((st as any).swamprand ?? 0)) {
      scene.text('<center><h4>Swamp</h4></center>');
      if (((st as any).clothingworntype ?? 0) !== 'nude'  &&  (!((st as any).PCloSkirt ?? 0))) {
        scene.img('images/locations/gadukino/hunters/goswamp.jpg');
      } else {
        if (((st as any).clothingworntype ?? 0) !== 'nude'  &&  ((st as any).PCloSkirt ?? 0) > 0) {
          scene.img('images/locations/gadukino/hunters/goswamp_ski.jpg');
        } else {
          if (((st as any).clothingworntype ?? 0) === 'nude') {
            (st as any).swamprand = (Math.floor(Math.random() * 4) + 0);
            if ((!((st as any).swamprand ?? 0))) {
              scene.img('images/locations/gadukino/hunters/goswamp_nude0..jpg');
            } else {
              scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/gadukino/hunters/goswamp_nude0.` + (Math.floor(Math.random() * 3) + 1) + '.jpg"></center>');
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
      if (((st as any).clothingworntype ?? 0) !== 'nude'  &&  (!((st as any).PCloSkirt ?? 0))) {
        scene.img('images/locations/gadukino/hunters/goswamp1.jpg');
      } else {
        if (((st as any).clothingworntype ?? 0) !== 'nude'  &&  ((st as any).PCloSkirt ?? 0) > 0) {
          scene.img('images/locations/gadukino/hunters/goswamp_ski1.jpg');
        } else {
          if (((st as any).clothingworntype ?? 0) === 'nude') {
            scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/gadukino/hunters/goswamp_nude0.` + (Math.floor(Math.random() * 2) + 4) + '.jpg"></center>');
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
      scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/gadukino/hunters/` + ((((s as any).DayStage ?? 0) < 4) ? ('gadforestlostswamp.jpg') : ('gadforestlostswamp_night.jpg')) + '"></center>');
    } else {
      scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/gadukino/hunters/` + ((((s as any).DayStage ?? 0) < 4) ? ('gadforestlostswamp_winter.jpg') : ('gadforestlostswamp_winter_night.jpg')) + '"></center>');
    }
    if (String((s as any).locArgs?.[1] ?? '') === 'forest_edge') {
      (s as any).minut = ((s as any).minut ?? 0) + 60;
      scene.text('After an hour of walking through the forest, you finally see the hunters\' cabin ahead.');
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'swamp') {
        (s as any).minut = ((s as any).minut ?? 0) + 15;
        scene.text('After walking through the swamp for a few minutes, you finally see the hunters\' cabin ahead.');
      }
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['gad_swamp_yard', 'start'] },
    ]);
  }
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
