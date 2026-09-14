import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).locArgs?.[0] ?? 0) === 'gad_gpbarn'  &&  ((s as any).BikeLoc ?? 0) === 1)  ||  (((s as any).locArgs?.[0] ?? 0) === 'gad_forest'  &&  ((s as any).BikeLoc ?? 0) === 2)  ||  (((s as any).locArgs?.[0] ?? 0) === 'gad_swamp_yard'  &&  ((s as any).BikeLoc ?? 0) === 3)) {
    scene.actions([
      { label: 'Ride your bicycle', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      scene.img('images/locations/gadukino/village/findvel_nude.jpg');
    } else {
      scene.img('images/locations/gadukino/village/findvel.jpg');
    }
    scene.text('You see your old bike. It looks like it\'s still in good condition. You can probably ride it without any trouble.');
    if (((s as any).BikeLoc ?? 0) === 1) {
      scene.actions([
        { label: 'Leave your bike alone', goto: ['gad_gpbarn', ''] },
      ]);
    } else {
      if (((s as any).BikeLoc ?? 0) === 2) {
        scene.actions([
          { label: 'Leave your bike alone', goto: ['gad_forest', 'forest_edge'] },
        ]);
      } else {
        if (((s as any).BikeLoc ?? 0) === 3) {
          scene.actions([
            { label: 'Leave your bike alone', goto: ['gad_swamp_yard', 'start'] },
          ]);
        }
      }
    }
    if (((s as any).BikeLoc ?? 0) === 1  &&  ((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 20  &&  ((s as any).sunWeather ?? 0) === 1  &&  ((s as any).month ?? 0) >= 4  &&  ((s as any).month ?? 0) <= 10  &&  ((s as any).gadbikeday ?? 0) !== ((s as any).daystart ?? 0)) {
      scene.actions([
        { label: 'Bike around the village (1:00)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'exp_gain', 'run', Math.floor(Math.random() * 3) + 0);
    qspCall(s, 'exp_gain', 'stren', Math.floor(Math.random() * 3) + 0);
    (s as any).fat = ((s as any).fat ?? 0) - (2);
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'sweat', 'add', 2);
    (s as any).gadbikeday = ((s as any).daystart ?? 0);
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (15);
      qspCall(s, 'mood', 'raise', 'small');
      if (((s as any).pcs_inhib ?? 0) < 50) {
        (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 0);
      }
      qspCall(s, 'arousal', 'flash', 5);
      qspCall(s, 'arousal', 'end');
      scene.img('images/locations/gadukino/village/bike_nude.jpg');
      scene.text('You ride nude, avoiding crowded places, exulting from this newfound courage. It\'s hard to say what excites you more, fear or desire to be noticed.');
    } else {
      if (((s as any).PCloSkirt ?? 0) > 0) {
        (s as any).bikerand = Math.floor(Math.random() * 11) + 0;
        if (((s as any).bikerand ?? 0) >= 8) {
          if (((s as any).pantyworntype ?? 0) !== 'none') {
            (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
            qspCall(s, 'mood', 'raise', 'tiny');
            if (((s as any).pcs_inhib ?? 0) < 20) {
              (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 0);
            }
            qspCall(s, 'arousal', 'flash', 5);
            qspCall(s, 'arousal', 'end');
            qspCall(s, 'stat', '');
            scene.img('images/locations/gadukino/village/bike_tanga_1.jpg');
            scene.text('You lift your skirt several times during your ride, showing a glimpse of your panties to a few lucky villagers passing by.');
          } else {
            (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
            qspCall(s, 'mood', 'raise', 'tiny');
            if (((s as any).pcs_inhib ?? 0) < 30) {
              (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 0);
            }
            qspCall(s, 'arousal', 'flash', 5);
            qspCall(s, 'arousal', 'end');
            qspCall(s, 'stat', '');
            scene.img('images/locations/gadukino/village/bike_tanga_2.jpg');
            scene.text('You lift your skirt several times during your ride, showing your bare ass to a few lucky villagers passing by.');
          }
        } else {
          qspCall(s, 'mood', 'raise', 'tiny');
          qspCall(s, 'stat', '');
          scene.img('images/locations/gadukino/village/bike_2.jpg');
          scene.text('You enjoy the breath of fresh air from riding your bike by the seemingly endless fields of the village.');
        }
      } else {
        if ((!((s as any).PCloSkirt ?? 0))) {
          qspCall(s, 'mood', 'raise', 'tiny');
          qspCall(s, 'stat', '');
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
    if (((s as any).BikeLoc ?? 0) !== 1) {
      if (((s as any).BikeLoc ?? 0) === 2) {
      } else {
        if (((s as any).BikeLoc ?? 0) === 3) {
        }
      }
      scene.actions([
        { label: '<<$bikeaction>>', handler: (st: GameState) => {
    if (((s as any).BikeLoc ?? 0) === 2) {
      (s as any).minut = ((s as any).minut ?? 0) + 12;
      qspCall(s, 'exp_gain', 'run', Math.floor(Math.random() * 2) + 0);
      qspCall(s, 'exp_gain', 'stren', Math.floor(Math.random() * 2) + 0);
      (s as any).fat = ((s as any).fat ?? 0) - (1);
      qspCall(s, 'mood', 'raise', 'tiny');
      qspCall(s, 'sweat', 'add', 1);
      if (((s as any).swamp_clothes ?? 0) === 1) {
        scene.text('You remove the terrible excuse for clothing the hunters gave you. You\'re sure you can find something better to wear at your grandparents\' house.');
        qspCall(s, 'clothing', 'strip', 'gad_forest');
        qspCall(s, 'clothing', 'gad_swamp_clothes', 0);
      }
    } else {
      if (((s as any).BikeLoc ?? 0) === 3) {
        (s as any).minut = ((s as any).minut ?? 0) + 44;
        qspCall(s, 'exp_gain', 'run', Math.floor(Math.random() * 4) + 0);
        qspCall(s, 'exp_gain', 'stren', Math.floor(Math.random() * 4) + 0);
        (s as any).fat = ((s as any).fat ?? 0) - (3);
        qspCall(s, 'mood', 'raise', 'small');
        qspCall(s, 'sweat', 'add', 3);
        if (((s as any).swamp_clothes ?? 0) === 1) {
          scene.text('You remove the terrible excuse for clothing the hunters gave you. You\'re sure you can find something better to wear at your grandparents\' house.');
          qspCall(s, 'clothing', 'strip', 'gad_forest');
          qspCall(s, 'clothing', 'gad_swamp_clothes', 0);
        }
      }
    }
    (s as any).BikeLoc = 1;
    qspCall(s, 'stat', '');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterClothes(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.text('You jump onto your bike and ride to your grandparents\' barn.');
    scene.actions([
      { label: 'Finish your ride', goto: ['gad_gpbarn', ''] },
    ]);
  } },
      ]);
    }
    if (((s as any).BikeLoc ?? 0) !== 2  &&  ((s as any).pcs_bushcraft ?? 0) > 10) {
      if (((s as any).BikeLoc ?? 0) === 1) {
      } else {
        if (((s as any).BikeLoc ?? 0) === 3) {
        }
      }
      scene.actions([
        { label: '<<$bikeaction>>', handler: (st: GameState) => {
    if (((s as any).BikeLoc ?? 0) === 1) {
      (s as any).minut = ((s as any).minut ?? 0) + 12;
      qspCall(s, 'exp_gain', 'run', Math.floor(Math.random() * 2) + 0);
      qspCall(s, 'exp_gain', 'stren', Math.floor(Math.random() * 2) + 0);
      (s as any).fat = ((s as any).fat ?? 0) - (1);
      qspCall(s, 'mood', 'raise', 'tiny');
      qspCall(s, 'sweat', 'add', 1);
    } else {
      if (((s as any).BikeLoc ?? 0) === 3) {
        (s as any).minut = ((s as any).minut ?? 0) + 32;
        qspCall(s, 'exp_gain', 'run', Math.floor(Math.random() * 3) + 0);
        qspCall(s, 'exp_gain', 'stren', Math.floor(Math.random() * 3) + 0);
        (s as any).fat = ((s as any).fat ?? 0) - (2);
        qspCall(s, 'sweat', 'add', 2);
      }
    }
    (s as any).BikeLoc = 2;
    qspCall(s, 'stat', '');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterClothes(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.text('You jump onto your bike and ride to the edge of the forest.');
    scene.actions([
      { label: 'Finish your ride', goto: ['gad_forest', 'forest_edge'] },
    ]);
  } },
      ]);
    }
    if (((s as any).BikeLoc ?? 0) !== 3  &&  ((s as any).hunterVars ?? 0)?.['cabin'] === 1  &&  ((s as any).hunterVars ?? 0)?.['were_met'] === 1) {
      if (((s as any).BikeLoc ?? 0) === 1) {
      } else {
        if (((s as any).BikeLoc ?? 0) === 2) {
        }
      }
      scene.actions([
        { label: '<<$bikeaction>>', handler: (st: GameState) => {
    if (((s as any).BikeLoc ?? 0) === 1) {
      (s as any).minut = ((s as any).minut ?? 0) + 44;
      qspCall(s, 'exp_gain', 'run', Math.floor(Math.random() * 4) + 0);
      qspCall(s, 'exp_gain', 'stren', Math.floor(Math.random() * 4) + 0);
      (s as any).fat = ((s as any).fat ?? 0) - (3);
      qspCall(s, 'mood', 'raise', 'small');
      qspCall(s, 'sweat', 'add', 3);
    } else {
      if (((s as any).BikeLoc ?? 0) === 2) {
        (s as any).minut = ((s as any).minut ?? 0) + 32;
        qspCall(s, 'exp_gain', 'run', Math.floor(Math.random() * 3) + 0);
        qspCall(s, 'exp_gain', 'stren', Math.floor(Math.random() * 3) + 0);
        (s as any).fat = ((s as any).fat ?? 0) - (2);
        qspCall(s, 'mood', 'raise', 'tiny');
        qspCall(s, 'sweat', 'add', 2);
      }
    }
    (s as any).BikeLoc = 3;
    qspCall(s, 'stat', '');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterClothes(s, scene); (s as any).locArgs = __savedLocArgs; }
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
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
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
