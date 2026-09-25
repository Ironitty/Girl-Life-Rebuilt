import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Nicholas\' Bathroom</b></center>');
  scene.img('images/locations/city/citycenter/nichApartment/bathroomMaster.jpg');
  scene.text('The bathroom is modern and well fitted, more than matching the display of wealth in the other rooms, from the elaborate decorations and spacious shower and tub to the underfloor heating.');
  if (((s as any).nichWork ?? 0) === 2) {
    scene.text('You have your own bathroom and should not use this one.');
  }
  (s as any).nichCleanAppropriate = 1;
  (s as any).nichGalaAct = qspFunc(s, 'nichUtil', 'npcActivity', 'gala');
  (s as any).nichNichAct = qspFunc(s, 'nichUtil', 'npcActivity', 'nicholas');
  (s as any).nichTanyAct = qspFunc(s, 'nichUtil', 'npcActivity', 'tanya');
  (s as any).nichGalaPresent = qspFunc(s, 'nichUtil', 'isPresent', 'gala', 'masterBathroom');
  (s as any).nichNichPresent = qspFunc(s, 'nichUtil', 'isPresent', 'nicholas', 'masterBathroom');
  (s as any).nichTanyPresent = qspFunc(s, 'nichUtil', 'isPresent', 'tanya', 'masterBathroom');
  if (((s as any).nichNichAct ?? 0) === 'bathMorning') {
    scene.text('Nicholas is currently in here using the shower.');
    (s as any).nichCleanAppropriate = 0;
  } else {
    if (((s as any).nichNichAct ?? 0) === 'bathClub') {
      scene.text('Nicholas is currently in here preparing himself to go out.');
      (s as any).nichCleanAppropriate = 0;
    } else {
      if (((s as any).nichNichAct ?? 0) === 'bathEvening') {
        scene.text('Nicholas is currently in here brushing his teeth.');
        (s as any).nichCleanAppropriate = 0;
      }
    }
  }
  if (((s as any).nichGalaAct ?? 0) === 'bathMorning') {
    scene.text('Gala is currently in here using the shower.');
    (s as any).nichCleanAppropriate = 0;
  } else {
    if (((s as any).nichGalaAct ?? 0) === 'bathEvening') {
      scene.text('Gala is currently in here brushing her teeth.');
      (s as any).nichCleanAppropriate = 0;
    }
  }
  if (((s as any).nichTanyAct ?? 0) === 'bathMorning') {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027nichTanya\u0027, \u0027bathroom\u0027); return false;">Tanya</a> is currently in here using the shower.');
    (s as any).nichCleanAppropriate = 0;
  } else {
    if (((s as any).nichTanyAct ?? 0) === 'bathEvening') {
      scene.text('Tanya is currently in here brushing her teeth.');
      (s as any).nichCleanAppropriate = 0;
    } else {
      if (((s as any).nichTanyAct ?? 0) === 'prepareClub') {
        scene.text('Tanya is currently in here doing her make-up.');
        (s as any).nichCleanAppropriate = 0;
      }
    }
  }
  if (((s as any).nichWork ?? 0) === 2) {
    if ((!((s as any).nichCleanAppropriate ?? 0))) {
      scene.text('It wouldn\'t be appropriate to clean this room now.');
    } else {
      qspCall(s, 'nichChore', 'inspect', 'masterbath');
    }
  }
  scene.actions([
    { label: 'Go to the master bedroom', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspGoto(st, 'nichBedroomMaster', '');
  } },
    { label: 'Go to Tanya\'s room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspGoto(st, 'nichBedroomTanja', '');
  } },
  ]);
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Nicholas\' Bathroom</b></center>');
  scene.img('images/locations/city/citycenter/nichApartment/bathroomMaster.jpg');
  scene.text('The bathroom is modern and well fitted, more than matching the display of wealth in the other rooms, from the elaborate decorations and spacious shower and tub to the underfloor heating.');
  if (((s as any).nichWork ?? 0) === 2) {
    scene.text('You have your own bathroom and should not use this one.');
  }
  (s as any).nichCleanAppropriate = 1;
  (s as any).nichGalaAct = qspFunc(s, 'nichUtil', 'npcActivity', 'gala');
  (s as any).nichNichAct = qspFunc(s, 'nichUtil', 'npcActivity', 'nicholas');
  (s as any).nichTanyAct = qspFunc(s, 'nichUtil', 'npcActivity', 'tanya');
  (s as any).nichGalaPresent = qspFunc(s, 'nichUtil', 'isPresent', 'gala', 'masterBathroom');
  (s as any).nichNichPresent = qspFunc(s, 'nichUtil', 'isPresent', 'nicholas', 'masterBathroom');
  (s as any).nichTanyPresent = qspFunc(s, 'nichUtil', 'isPresent', 'tanya', 'masterBathroom');
  if (((s as any).nichNichAct ?? 0) === 'bathMorning') {
    scene.text('Nicholas is currently in here using the shower.');
    (s as any).nichCleanAppropriate = 0;
  } else {
    if (((s as any).nichNichAct ?? 0) === 'bathClub') {
      scene.text('Nicholas is currently in here preparing himself to go out.');
      (s as any).nichCleanAppropriate = 0;
    } else {
      if (((s as any).nichNichAct ?? 0) === 'bathEvening') {
        scene.text('Nicholas is currently in here brushing his teeth.');
        (s as any).nichCleanAppropriate = 0;
      }
    }
  }
  if (((s as any).nichGalaAct ?? 0) === 'bathMorning') {
    scene.text('Gala is currently in here using the shower.');
    (s as any).nichCleanAppropriate = 0;
  } else {
    if (((s as any).nichGalaAct ?? 0) === 'bathEvening') {
      scene.text('Gala is currently in here brushing her teeth.');
      (s as any).nichCleanAppropriate = 0;
    }
  }
  if (((s as any).nichTanyAct ?? 0) === 'bathMorning') {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027nichTanya\u0027, \u0027bathroom\u0027); return false;">Tanya</a> is currently in here using the shower.');
    (s as any).nichCleanAppropriate = 0;
  } else {
    if (((s as any).nichTanyAct ?? 0) === 'bathEvening') {
      scene.text('Tanya is currently in here brushing her teeth.');
      (s as any).nichCleanAppropriate = 0;
    } else {
      if (((s as any).nichTanyAct ?? 0) === 'prepareClub') {
        scene.text('Tanya is currently in here doing her make-up.');
        (s as any).nichCleanAppropriate = 0;
      }
    }
  }
  if (((s as any).nichWork ?? 0) === 2) {
    if ((!((s as any).nichCleanAppropriate ?? 0))) {
      scene.text('It wouldn\'t be appropriate to clean this room now.');
    } else {
      qspCall(s, 'nichChore', 'inspect', 'masterbath');
    }
  }
  scene.actions([
    { label: 'Go to the master bedroom', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspGoto(st, 'nichBedroomMaster', '');
  } },
    { label: 'Go to Tanya\'s room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspGoto(st, 'nichBedroomTanja', '');
  } },
  ]);
  scene.build();
}

function enterReturn(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Nicholas\' Bathroom</b></center>');
  scene.img('images/locations/city/citycenter/nichApartment/bathroomMaster.jpg');
  scene.text('The bathroom is modern and well fitted, more than matching the display of wealth in the other rooms, from the elaborate decorations and spacious shower and tub to the underfloor heating.');
  if (((s as any).nichWork ?? 0) === 2) {
    scene.text('You have your own bathroom and should not use this one.');
  }
  (s as any).nichCleanAppropriate = 1;
  (s as any).nichGalaAct = qspFunc(s, 'nichUtil', 'npcActivity', 'gala');
  (s as any).nichNichAct = qspFunc(s, 'nichUtil', 'npcActivity', 'nicholas');
  (s as any).nichTanyAct = qspFunc(s, 'nichUtil', 'npcActivity', 'tanya');
  (s as any).nichGalaPresent = qspFunc(s, 'nichUtil', 'isPresent', 'gala', 'masterBathroom');
  (s as any).nichNichPresent = qspFunc(s, 'nichUtil', 'isPresent', 'nicholas', 'masterBathroom');
  (s as any).nichTanyPresent = qspFunc(s, 'nichUtil', 'isPresent', 'tanya', 'masterBathroom');
  if (((s as any).nichNichAct ?? 0) === 'bathMorning') {
    scene.text('Nicholas is currently in here using the shower.');
    (s as any).nichCleanAppropriate = 0;
  } else {
    if (((s as any).nichNichAct ?? 0) === 'bathClub') {
      scene.text('Nicholas is currently in here preparing himself to go out.');
      (s as any).nichCleanAppropriate = 0;
    } else {
      if (((s as any).nichNichAct ?? 0) === 'bathEvening') {
        scene.text('Nicholas is currently in here brushing his teeth.');
        (s as any).nichCleanAppropriate = 0;
      }
    }
  }
  if (((s as any).nichGalaAct ?? 0) === 'bathMorning') {
    scene.text('Gala is currently in here using the shower.');
    (s as any).nichCleanAppropriate = 0;
  } else {
    if (((s as any).nichGalaAct ?? 0) === 'bathEvening') {
      scene.text('Gala is currently in here brushing her teeth.');
      (s as any).nichCleanAppropriate = 0;
    }
  }
  if (((s as any).nichTanyAct ?? 0) === 'bathMorning') {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027nichTanya\u0027, \u0027bathroom\u0027); return false;">Tanya</a> is currently in here using the shower.');
    (s as any).nichCleanAppropriate = 0;
  } else {
    if (((s as any).nichTanyAct ?? 0) === 'bathEvening') {
      scene.text('Tanya is currently in here brushing her teeth.');
      (s as any).nichCleanAppropriate = 0;
    } else {
      if (((s as any).nichTanyAct ?? 0) === 'prepareClub') {
        scene.text('Tanya is currently in here doing her make-up.');
        (s as any).nichCleanAppropriate = 0;
      }
    }
  }
  if (((s as any).nichWork ?? 0) === 2) {
    if ((!((s as any).nichCleanAppropriate ?? 0))) {
      scene.text('It wouldn\'t be appropriate to clean this room now.');
    } else {
      qspCall(s, 'nichChore', 'inspect', 'masterbath');
    }
  }
  scene.actions([
    { label: 'Go to the master bedroom', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspGoto(st, 'nichBedroomMaster', '');
  } },
    { label: 'Go to Tanya\'s room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspGoto(st, 'nichBedroomTanja', '');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).loc_arg = '';
  (s as any).loc = 'nichBathMaster';
  (s as any).location_type = 'bathroom';
  (s as any).menu_loc = 'nichBathMaster';
  (s as any).nichLoc = 'masterBathroom';
  (s as any).menu_arg = '';
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'return':
      enterReturn(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const nichBathMaster: LocationDef = {
  name: 'nichBathMaster',
  title: 'Nicholas\' Bathroom',
  region: 'other',
  locationType: 'bathroom',
  description: ['The bathroom is modern and well fitted, more than matching the display of wealth in the other rooms, from the elaborate decorations and spacious shower and tub to the underfloor heating.'],
  enter: enter,
};
