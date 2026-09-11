import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).kafe_rand = Math.floor(Math.random() * 16) + 0;
  if ((!((s as any).kafe_rand ?? 0))) {
    scene.img('images/locations/city/residential/cafe/sex/arand.jpg');
    scene.text('On leaving the cafe, you see a large crowd of young people deciding where to go next. You also notice that one of the girls wasted no time and has started sucking her boyfriend\'s dick, completely undeterred by the crowd.');
    qspCall(s, 'city_kafeend', 'end_sex');
  } else {
    if (((s as any).kafe_rand ?? 0) === 1) {
      scene.img('images/locations/city/residential/cafe/sex/arand1.jpg');
      scene.text('Coming out of the cafe, you notice a car parked in the dark. Passing by, you see a light in the open trunk and see a man fucking a girl so hard that the shocks are creaking as the car bounces. The girl just moans loudly. "Faster! Harder!"');
      qspCall(s, 'city_kafeend', 'end_sex');
    } else {
      if (((s as any).kafe_rand ?? 0) === 2) {
        scene.img('images/locations/city/residential/cafe/sex/arand2.jpg');
        scene.text('On leaving the cafe, you see a large crowd of young people deciding where to go next. In the crowd you are surprised to see one of the girls licking the pussy of another oblivious to the other people there.');
        qspCall(s, 'city_kafeend', 'end_sex');
      } else {
        if (((s as any).kafe_rand ?? 0) === 3) {
          scene.img('images/locations/city/residential/cafe/sex/arand3.jpg');
          scene.text('Coming out of the cafe, you see a woman sitting on her heels behind a car giving a contented guy a blowjob.');
          qspCall(s, 'city_kafeend', 'end_sex');
        } else {
          if (((s as any).kafe_rand ?? 0) === 4) {
            scene.img('images/locations/city/residential/cafe/sex/arand4.jpg');
            scene.text('Coming out of the cafe, you notice a girl squatting and giving a guy a blowjob at the side of the building.');
            qspCall(s, 'city_kafeend', 'end_sex');
          } else {
            if (((s as any).kafe_rand ?? 0) === 5) {
              scene.img('images/locations/city/residential/cafe/sex/arand5.jpg');
              scene.text('You walk past a car on your way out. A woman is sitting in the front seat of the car blowing a guy as he stands by the door.');
              qspCall(s, 'city_kafeend', 'end_sex');
            } else {
              if (((s as any).kafe_rand ?? 0) === 6) {
                scene.img('images/locations/city/residential/cafe/sex/arand6.jpg');
                scene.text('Coming out of the cafe, you notice a girl squatting between some parked cars with her pants down, pissing while smiling blissfully.');
                qspCall(s, 'city_kafeend', 'end');
              } else {
                if (((s as any).kafe_rand ?? 0) === 7) {
                  scene.img('images/locations/city/residential/cafe/sex/arand7.jpg');
                  scene.text('Coming out of the cafe, you see a laughing woman dancing badly and showing off her panties, but still managing to drink from a cup.');
                  qspCall(s, 'city_kafeend', 'end');
                } else {
                  if (((s as any).kafe_rand ?? 0) === 8) {
                    scene.img('images/locations/city/residential/cafe/sex/arand8.jpg');
                    scene.text('Coming out of the cafe, you notice a girl lying on the pavement wearing just a sweater, her pussy completely exposed. She\'s passed out, drunk as a skunk.');
                    qspCall(s, 'city_kafeend', 'end');
                  } else {
                    if (((s as any).kafe_rand ?? 0) === 9) {
                      scene.img('images/locations/city/residential/cafe/sex/arand9.jpg');
                      scene.text('Coming out of the cafe, you notice a drunk guy and girl asleep on a bench.');
                      qspCall(s, 'city_kafeend', 'end');
                    } else {
                      if (((s as any).kafe_rand ?? 0) === 10) {
                        scene.img('images/locations/city/residential/cafe/sex/arand10.jpg');
                        scene.text('Coming out of the cafe, you notice a man and a drunk girl in the car park, trying to drag another girl off the path.');
                        qspCall(s, 'city_kafeend', 'end');
                      } else {
                        if (((s as any).kafe_rand ?? 0) === 11) {
                          scene.img('images/locations/city/residential/cafe/sex/arand11.jpg');
                          scene.text('Coming out of the cafe, you have to step over a drunk girl passed out right in front of the entrance lying on the pavement.');
                          qspCall(s, 'city_kafeend', 'end');
                        } else {
                          if (((s as any).kafe_rand ?? 0) === 12) {
                            scene.img('images/locations/city/residential/cafe/sex/arand12.jpg');
                            scene.text('Coming out of the cafe, you see that a girl has drunkenly fallen asleep while sitting on a bin.');
                            qspCall(s, 'city_kafeend', 'end');
                          } else {
                            if (((s as any).kafe_rand ?? 0) === 13) {
                              scene.img('images/locations/city/residential/cafe/sex/arand13.jpg');
                              scene.text('Coming out of the cafe, you notice a girl trying to get her friend off the road, her friend mumbling something while drunkenly giggling.');
                              qspCall(s, 'city_kafeend', 'end');
                            } else {
                              if (((s as any).kafe_rand ?? 0) === 14) {
                                scene.img('images/locations/city/residential/cafe/sex/arand14.jpg');
                                scene.text('Coming out of the cafe, you notice a drunk girl lying on the ground without any panties.');
                                qspCall(s, 'city_kafeend', 'end');
                              } else {
                                if (((s as any).kafe_rand ?? 0) === 15) {
                                  scene.img('images/locations/city/residential/cafe/sex/arand15.jpg');
                                  scene.text('Coming out of the cafe, you see a man leading his wife somewhere. She\'s clearly very drunk since she\'s started to strip on the street and is nearly naked.');
                                  qspCall(s, 'city_kafeend', 'end');
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterEnd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'erotic_nudity', 5);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enterEndSex(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'voyeur_sex', 5);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'end':
      enterEnd(s, scene);
      break;
    case 'end_sex':
      enterEndSex(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const city_kafeend: LocationDef = {
  name: 'city_kafeend',
  title: 'On leaving the cafe, you see a large crowd of young people d',
  region: 'city',
  description: ['On leaving the cafe, you see a large crowd of young people deciding where to go next. You also notice that one of the girls wasted no time and has started sucking her boyfriend\'s dick, completely undeterred by the crowd.'],
  enter: enter,
};
