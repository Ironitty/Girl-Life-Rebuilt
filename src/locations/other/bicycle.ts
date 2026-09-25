import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterClothes(s: GameState, scene: SceneBuilder): void {
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    scene.img('images/locations/gadukino/village/bike_nude.jpg');
  } else {
    if (((s as any).PCloSkirt ?? 0) > 0) {
      scene.img('images/locations/gadukino/village/bike_2.jpg');
    } else {
      scene.img('images/locations/gadukino/village/bike.jpg');
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  if ((String((s as any).locArgs?.[0] ?? '') === 'gad_gpbarn'  &&  ((s as any).BikeLoc ?? 0) === 1)  ||  (String((s as any).locArgs?.[0] ?? '') === 'gad_forest'  &&  ((s as any).BikeLoc ?? 0) === 2)  ||  (String((s as any).locArgs?.[0] ?? '') === 'gad_swamp_yard'  &&  ((s as any).BikeLoc ?? 0) === 3)) {
    scene.actions([
      { label: 'Ride your bicycle', handler: (st: GameState) => {
    if (((st as any).clothingworntype ?? 0) === 'nude') {
      scene.img('images/locations/gadukino/village/findvel_nude.jpg');
    } else {
      scene.img('images/locations/gadukino/village/findvel.jpg');
    }
    scene.text('You see your old bike. It looks like it\'s still in good condition. You can probably ride it without any trouble.');
    if (((st as any).BikeLoc ?? 0) === 1) {
      scene.actions([
        { label: 'Leave your bike alone', goto: ['gad_gpbarn', ''] },
      ]);
    } else {
      if (((st as any).BikeLoc ?? 0) === 2) {
        scene.actions([
          { label: 'Leave your bike alone', goto: ['gad_forest', 'forest_edge'] },
        ]);
      } else {
        if (((st as any).BikeLoc ?? 0) === 3) {
          scene.actions([
            { label: 'Leave your bike alone', goto: ['gad_swamp_yard', 'start'] },
          ]);
        }
      }
    }
    if (((st as any).BikeLoc ?? 0) === 1  &&  ((st as any).hour ?? 0) >= 6  &&  ((st as any).hour ?? 0) < 20  &&  ((st as any).sunWeather ?? 0) === 1  &&  ((st as any).month ?? 0) >= 4  &&  ((st as any).month ?? 0) <= 10  &&  ((st as any).gadbikeday ?? 0) !== ((st as any).daystart ?? 0)) {
      scene.actions([
        { label: 'Bike around the village (1:00)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    qspCall(st, 'exp_gain', 'run', (Math.floor(Math.random() * 3) + 0));
    qspCall(st, 'exp_gain', 'stren', (Math.floor(Math.random() * 3) + 0));
    (st as any).fat = ((st as any).fat ?? 0) - (2);
    qspCall(st, 'mood', 'raise', 'tiny');
    qspCall(st, 'sweat', 'add', 2);
    (st as any).gadbikeday = ((st as any).daystart ?? 0);
    if (((st as any).clothingworntype ?? 0) === 'nude') {
      (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (15);
      qspCall(st, 'mood', 'raise', 'small');
      if (((st as any).pcs_inhib ?? 0) < 50) {
        (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 3) + 0));
      }
      qspCall(st, 'arousal', 'flash', 5);
      qspCall(st, 'arousal', 'end');
      scene.img('images/locations/gadukino/village/bike_nude.jpg');
      scene.text('You ride nude, avoiding crowded places, exulting from this newfound courage. It\'s hard to say what excites you more, fear or desire to be noticed.');
    } else {
      if (((st as any).PCloSkirt ?? 0) > 0) {
        (st as any).bikerand = (Math.floor(Math.random() * 11) + 0);
        if (((st as any).bikerand ?? 0) >= 8) {
          if (((st as any).pantyworntype ?? 0) !== 'none') {
            (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
            qspCall(st, 'mood', 'raise', 'tiny');
            if (((st as any).pcs_inhib ?? 0) < 20) {
              (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 3) + 0));
            }
            qspCall(st, 'arousal', 'flash', 5);
            qspCall(st, 'arousal', 'end');
            qspCall(st, 'stat', '');
            scene.img('images/locations/gadukino/village/bike_tanga_1.jpg');
            scene.text('You lift your skirt several times during your ride, showing a glimpse of your panties to a few lucky villagers passing by.');
          } else {
            (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
            qspCall(st, 'mood', 'raise', 'tiny');
            if (((st as any).pcs_inhib ?? 0) < 30) {
              (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 3) + 0));
            }
            qspCall(st, 'arousal', 'flash', 5);
            qspCall(st, 'arousal', 'end');
            qspCall(st, 'stat', '');
            scene.img('images/locations/gadukino/village/bike_tanga_2.jpg');
            scene.text('You lift your skirt several times during your ride, showing your bare ass to a few lucky villagers passing by.');
          }
        } else {
          qspCall(st, 'mood', 'raise', 'tiny');
          qspCall(st, 'stat', '');
          scene.img('images/locations/gadukino/village/bike_2.jpg');
          scene.text('You enjoy the breath of fresh air from riding your bike by the seemingly endless fields of the village.');
        }
      } else {
        if ((!((st as any).PCloSkirt ?? 0))) {
          qspCall(st, 'mood', 'raise', 'tiny');
          qspCall(st, 'stat', '');
          scene.img('images/locations/gadukino/village/bike.jpg');
          scene.text('You ride your bike, enjoying the surrounding countryside.');
        }
      }
    }
    scene.actions([
      { label: 'Finish your ride', goto: ['gad_gpbarn', ''] },
    ]);
  } },
      ]);
    }
    if (((st as any).BikeLoc ?? 0) !== 1) {
      if (((st as any).BikeLoc ?? 0) === 2) {
        (st as any).bikeaction = 'Bike to your grandparents\' barn (0:12)';
      } else {
        if (((st as any).BikeLoc ?? 0) === 3) {
          (st as any).bikeaction = 'Bike to your grandparents\' barn (0:44)';
        }
      }
      scene.actions([
        { label: '', labelFn: (s: GameState) => String(((st as any).bikeaction ?? '') ?? ''), handler: (st: GameState) => {
    if (((st as any).BikeLoc ?? 0) === 2) {
      (st as any).minut = ((st as any).minut ?? 0) + 12;
      qspCall(st, 'exp_gain', 'run', (Math.floor(Math.random() * 2) + 0));
      qspCall(st, 'exp_gain', 'stren', (Math.floor(Math.random() * 2) + 0));
      (st as any).fat = ((st as any).fat ?? 0) - (1);
      qspCall(st, 'mood', 'raise', 'tiny');
      qspCall(st, 'sweat', 'add', 1);
      if (((st as any).swamp_clothes ?? 0) === 1) {
        scene.text('You remove the terrible excuse for clothing the hunters gave you. You\'re sure you can find something better to wear at your grandparents\' house.');
        qspCall(st, 'clothing', 'strip', 'gad_forest');
        qspCall(st, 'clothing', 'gad_swamp_clothes', 0);
      }
    } else {
      if (((st as any).BikeLoc ?? 0) === 3) {
        (st as any).minut = ((st as any).minut ?? 0) + 44;
        qspCall(st, 'exp_gain', 'run', (Math.floor(Math.random() * 4) + 0));
        qspCall(st, 'exp_gain', 'stren', (Math.floor(Math.random() * 4) + 0));
        (st as any).fat = ((st as any).fat ?? 0) - (3);
        qspCall(st, 'mood', 'raise', 'small');
        qspCall(st, 'sweat', 'add', 3);
        if (((st as any).swamp_clothes ?? 0) === 1) {
          scene.text('You remove the terrible excuse for clothing the hunters gave you. You\'re sure you can find something better to wear at your grandparents\' house.');
          qspCall(st, 'clothing', 'strip', 'gad_forest');
          qspCall(st, 'clothing', 'gad_swamp_clothes', 0);
        }
      }
    }
    (st as any).BikeLoc = 1;
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterClothes(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('You jump onto your bike and ride to your grandparents\' barn.');
    scene.actions([
      { label: 'Finish your ride', goto: ['gad_gpbarn', ''] },
    ]);
  } },
      ]);
    }
    if (((st as any).BikeLoc ?? 0) !== 2  &&  ((st as any).pcs_bushcraft ?? 0) > 10) {
      if (((st as any).BikeLoc ?? 0) === 1) {
        (st as any).bikeaction = 'Bike to the forest edge (0:12)';
      } else {
        if (((st as any).BikeLoc ?? 0) === 3) {
          (st as any).bikeaction = 'Bike to the forest edge (0:32)';
        }
      }
      scene.actions([
        { label: '', labelFn: (s: GameState) => String(((st as any).bikeaction ?? '') ?? ''), handler: (st: GameState) => {
    if (((st as any).BikeLoc ?? 0) === 1) {
      (st as any).minut = ((st as any).minut ?? 0) + 12;
      qspCall(st, 'exp_gain', 'run', (Math.floor(Math.random() * 2) + 0));
      qspCall(st, 'exp_gain', 'stren', (Math.floor(Math.random() * 2) + 0));
      (st as any).fat = ((st as any).fat ?? 0) - (1);
      qspCall(st, 'mood', 'raise', 'tiny');
      qspCall(st, 'sweat', 'add', 1);
    } else {
      if (((st as any).BikeLoc ?? 0) === 3) {
        (st as any).minut = ((st as any).minut ?? 0) + 32;
        qspCall(st, 'exp_gain', 'run', (Math.floor(Math.random() * 3) + 0));
        qspCall(st, 'exp_gain', 'stren', (Math.floor(Math.random() * 3) + 0));
        (st as any).fat = ((st as any).fat ?? 0) - (2);
        qspCall(st, 'sweat', 'add', 2);
      }
    }
    (st as any).BikeLoc = 2;
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterClothes(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('You jump onto your bike and ride to the edge of the forest.');
    scene.actions([
      { label: 'Finish your ride', goto: ['gad_forest', 'forest_edge'] },
    ]);
  } },
      ]);
    }
    if (((st as any).BikeLoc ?? 0) !== 3  &&  ((st as any).hunterVars ?? 0)?.['cabin'] === 1  &&  ((st as any).hunterVars ?? 0)?.['were_met'] === 1) {
      if (((st as any).BikeLoc ?? 0) === 1) {
        (st as any).bikeaction = 'Bike to the hunters cabin (0:44)';
      } else {
        if (((st as any).BikeLoc ?? 0) === 2) {
          (st as any).bikeaction = 'Bike to the hunters cabin (0:32)';
        }
      }
      scene.actions([
        { label: '', labelFn: (s: GameState) => String(((st as any).bikeaction ?? '') ?? ''), handler: (st: GameState) => {
    if (((st as any).BikeLoc ?? 0) === 1) {
      (st as any).minut = ((st as any).minut ?? 0) + 44;
      qspCall(st, 'exp_gain', 'run', (Math.floor(Math.random() * 4) + 0));
      qspCall(st, 'exp_gain', 'stren', (Math.floor(Math.random() * 4) + 0));
      (st as any).fat = ((st as any).fat ?? 0) - (3);
      qspCall(st, 'mood', 'raise', 'small');
      qspCall(st, 'sweat', 'add', 3);
    } else {
      if (((st as any).BikeLoc ?? 0) === 2) {
        (st as any).minut = ((st as any).minut ?? 0) + 32;
        qspCall(st, 'exp_gain', 'run', (Math.floor(Math.random() * 3) + 0));
        qspCall(st, 'exp_gain', 'stren', (Math.floor(Math.random() * 3) + 0));
        (st as any).fat = ((st as any).fat ?? 0) - (2);
        qspCall(st, 'mood', 'raise', 'tiny');
        qspCall(st, 'sweat', 'add', 2);
      }
    }
    (st as any).BikeLoc = 3;
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterClothes(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('You jump onto your bike and ride to the hunters\' cabin.');
    scene.actions([
      { label: 'Finish your ride', goto: ['gad_swamp_yard', 'start'] },
    ]);
  } },
      ]);
    }
  } },
    ]);
  }
  const arg = s.locArg;
  switch (arg) {
    case 'clothes':
      enterClothes(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const bicycle: LocationDef = {
  name: 'bicycle',
  region: 'other',
  enter: enter,
};
