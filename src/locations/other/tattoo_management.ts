import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGetTotal(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
  if (Number((s as any).locArgs?.[1] ?? 0) === 'ankle') {
    (s as any).result = 25;
  } else {
    if (Number((s as any).locArgs?.[1] ?? 0) === 'arm') {
      (s as any).result = 77;
    } else {
      if (Number((s as any).locArgs?.[1] ?? 0) === 'ass') {
        (s as any).result = 25;
      } else {
        if (Number((s as any).locArgs?.[1] ?? 0) === 'back') {
          (s as any).result = 61;
        } else {
          if (Number((s as any).locArgs?.[1] ?? 0) === 'belly') {
            (s as any).result = 21;
          } else {
            if (Number((s as any).locArgs?.[1] ?? 0) === 'breast') {
              (s as any).result = 11;
            } else {
              if (Number((s as any).locArgs?.[1] ?? 0) === 'chest') {
                (s as any).result = 15;
              } else {
                if (Number((s as any).locArgs?.[1] ?? 0) === 'face') {
                  (s as any).result = 8;
                } else {
                  if (Number((s as any).locArgs?.[1] ?? 0) === 'hand') {
                    (s as any).result = 9;
                  } else {
                    if (Number((s as any).locArgs?.[1] ?? 0) === 'leg') {
                      (s as any).result = 47;
                    } else {
                      if (Number((s as any).locArgs?.[1] ?? 0) === 'lip') {
                        (s as any).result = 9;
                      } else {
                        if (Number((s as any).locArgs?.[1] ?? 0) === 'neck') {
                          (s as any).result = 30;
                        } else {
                          if (Number((s as any).locArgs?.[1] ?? 0) === 'pussy') {
                            (s as any).result = 53;
                          } else {
                            if (Number((s as any).locArgs?.[1] ?? 0) === 'shoulder') {
                              (s as any).result = 25;
                            } else {
                              if (Number((s as any).locArgs?.[1] ?? 0) === 'side') {
                                (s as any).result = 23;
                              } else {
                                if (Number((s as any).locArgs?.[1] ?? 0) === 'tramp') {
                                  (s as any).result = 32;
                                } else {
                                  if (Number((s as any).locArgs?.[1] ?? 0) === 'under') {
                                    (s as any).result = 22;
                                  } else {
                                    if (Number((s as any).locArgs?.[1] ?? 0) === 'wrist') {
                                      (s as any).result = 51;
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
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterTotals(s: GameState, scene: SceneBuilder): void {
  (s as any).total = qspFunc(s, 'tattoo_management', 'get_total', ((s as any).locArgs?.[1] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsOwned(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === '') {
    // TODO-QSP: exit
  }
  if (Number((s as any).locArgs?.[2] ?? 0) === 0) {
    // TODO-QSP: exit
  }
  (s as any).result = (((s as any).pcs_tattoos ?? 0)[Number((s as any).locArgs?.[1] ?? 0)] === Number((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsWearing(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === '') {
    // TODO-QSP: exit
  }
  if (Number((s as any).locArgs?.[2] ?? 0) === 0) {
    // TODO-QSP: exit
  }
  (s as any).result = (((s as any).pcs_tattoos ?? 0)[Number((s as any).locArgs?.[1] ?? 0)] === Number((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsWearingAny(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === '') {
    (s as any).result = (((s as any).pcs_tattoos ?? 0)?.['total'] > 0);
  } else {
    (s as any).result = (((s as any).pcs_tattoos ?? 0)[Number((s as any).locArgs?.[1] ?? 0)] > 0);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterImage(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'tattoo_management', ((s as any).locArgs?.[1] ?? 0) + '_image', ((s as any).locArgs?.[2] ?? 0));
  // TODO-QSP: end
  scene.build();
}

function enterAdd(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[2] ?? 0) <= 0) {
    // TODO-QSP: exit
  }
  if (qspFunc(s, 'tattoo_management', 'get_total', ((s as any).locArgs?.[1] ?? 0)) < Number((s as any).locArgs?.[2] ?? 0)) {
    // TODO-QSP: exit
  }
  if (((s as any).pcs_tattoos ?? 0)[Number((s as any).locArgs?.[1] ?? 0)] <= 0) {
    ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['total'] = ((s as any).pcs_tattoos['total'] ?? 0) + (1);
  }
  ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['any'] = 1;
  // TODO-QSP: pcs_tattoos[$ARGS[1]] = ARGS[2]
  if (Number((s as any).locArgs?.[1] ?? 0) === 'face'  ||  Number((s as any).locArgs?.[1] ?? 0) === 'lip'  ||  Number((s as any).locArgs?.[1] ?? 0) === 'neck'  ||  Number((s as any).locArgs?.[1] ?? 0) === 'back'  ||  Number((s as any).locArgs?.[1] ?? 0) === 'shoulder'  ||  Number((s as any).locArgs?.[1] ?? 0) === 'chest'  ||  Number((s as any).locArgs?.[1] ?? 0) === 'side'  ||  Number((s as any).locArgs?.[1] ?? 0) === 'belly'  ||  Number((s as any).locArgs?.[1] ?? 0) === 'arm'  ||  Number((s as any).locArgs?.[1] ?? 0) === 'wrist'  ||  Number((s as any).locArgs?.[1] ?? 0) === 'hand'  ||  Number((s as any).locArgs?.[1] ?? 0) === 'leg'  ||  Number((s as any).locArgs?.[1] ?? 0) === 'ankle') {
    qspCall(s, 'archetypes', 'gain', 'punk', 'tiny', 'Got a visible tattoo');
    qspCall(s, 'archetypes', 'gain', 'goth', 'tiny', 'Got a visible tattoo');
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRemove(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_tattoos ?? 0)[Number((s as any).locArgs?.[1] ?? 0)] <= 0) {
    // TODO-QSP: exit
  }
  ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['total'] = ((s as any).pcs_tattoos['total'] ?? 0) - (1);
  // TODO-QSP: pcs_tattoos[$ARGS[1]] = -pcs_tattoos[$ARGS[1]]
  if (((s as any).pcs_tattoos ?? 0)?.['total'] <= 0) {
    ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['total'] = 0;
    ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['any'] = 0;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterFullReset(s: GameState, scene: SceneBuilder): void {
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCount(s: GameState, scene: SceneBuilder): void {
  ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['total'] = 0;
  ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['any'] = 0;
  if (((s as any).pcs_tattoos ?? 0)?.['ankle']    > 0) {
    ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['total'] = ((s as any).pcs_tattoos['total'] ?? 0) + (1);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['arm']    > 0) {
    ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['total'] = ((s as any).pcs_tattoos['total'] ?? 0) + (1);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['ass']    > 0) {
    ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['total'] = ((s as any).pcs_tattoos['total'] ?? 0) + (1);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['back']    > 0) {
    ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['total'] = ((s as any).pcs_tattoos['total'] ?? 0) + (1);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['belly']    > 0) {
    ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['total'] = ((s as any).pcs_tattoos['total'] ?? 0) + (1);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['breast']  > 0) {
    ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['total'] = ((s as any).pcs_tattoos['total'] ?? 0) + (1);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['chest']    > 0) {
    ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['total'] = ((s as any).pcs_tattoos['total'] ?? 0) + (1);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['face']    > 0) {
    ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['total'] = ((s as any).pcs_tattoos['total'] ?? 0) + (1);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['hand']    > 0) {
    ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['total'] = ((s as any).pcs_tattoos['total'] ?? 0) + (1);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['leg']    > 0) {
    ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['total'] = ((s as any).pcs_tattoos['total'] ?? 0) + (1);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['lip']    > 0) {
    ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['total'] = ((s as any).pcs_tattoos['total'] ?? 0) + (1);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['neck']    > 0) {
    ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['total'] = ((s as any).pcs_tattoos['total'] ?? 0) + (1);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['pussy']    > 0) {
    ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['total'] = ((s as any).pcs_tattoos['total'] ?? 0) + (1);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['shoulder']  > 0) {
    ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['total'] = ((s as any).pcs_tattoos['total'] ?? 0) + (1);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['side']    > 0) {
    ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['total'] = ((s as any).pcs_tattoos['total'] ?? 0) + (1);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['tramp']    > 0) {
    ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['total'] = ((s as any).pcs_tattoos['total'] ?? 0) + (1);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['under']    > 0) {
    ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['total'] = ((s as any).pcs_tattoos['total'] ?? 0) + (1);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['wrist']    > 0) {
    ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['total'] = ((s as any).pcs_tattoos['total'] ?? 0) + (1);
  }
  if (((s as any).pcs_tattoos ?? 0)?.['total']    > 0) {
    ((s as any).pcs_tattoos = (s as any).pcs_tattoos ?? {})['any'] = 1;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSetShopDisplayExceptions(s: GameState, scene: SceneBuilder): void {
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBuy(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[2] ?? 0) === '') {
    // TODO-QSP: exit
  }
  if (Number((s as any).locArgs?.[3] ?? 0) === 0) {
    // TODO-QSP: exit
  }
  if (Object.keys((s as any).ARGS ?? {}).length <= 4) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[4] = ((s as any).price ?? 0);
  }
  // TODO-QSP: gs 'money', 'pay', ARGS[4]
  // TODO-QSP: gs 'tattoo_management', 'add', $ARGS[2], ARGS[3]
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCount(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'stat', '');
  dynamicGoto(s, 'prevLoc', 'prevArg');
  // TODO-QSP: end
  scene.build();
}

function enterAnkleImage(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).pcs_tattoos ?? 0)?.['ankle'];
  }
  if (Number((s as any).locArgs?.[1] ?? 0) < 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = -((s as any).locArgs?.[1] ?? 0);
  }
  (s as any).result = 'images/pc/body/tattoos/foot/tatankle' + ((s as any).locArgs?.[1] ?? 0) + '.jpg';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterArmImage(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).pcs_tattoos ?? 0)?.['arm'];
  }
  if (Number((s as any).locArgs?.[1] ?? 0) < 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = -((s as any).locArgs?.[1] ?? 0);
  }
  (s as any).result = 'images/pc/body/tattoos/arms/tatarm' + ((s as any).locArgs?.[1] ?? 0) + '.jpg';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterAssImage(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).pcs_tattoos ?? 0)?.['ass'];
  }
  if (Number((s as any).locArgs?.[1] ?? 0) < 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = -((s as any).locArgs?.[1] ?? 0);
  }
  (s as any).result = 'images/pc/body/tattoos/ass/tatass' + ((s as any).locArgs?.[1] ?? 0) + '.jpg';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBackImage(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).pcs_tattoos ?? 0)?.['back'];
  }
  if (Number((s as any).locArgs?.[1] ?? 0) < 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = -((s as any).locArgs?.[1] ?? 0);
  }
  (s as any).result = 'images/pc/body/tattoos/back/tatback' + ((s as any).locArgs?.[1] ?? 0) + '.jpg';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBellyImage(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).pcs_tattoos ?? 0)?.['belly'];
  }
  if (Number((s as any).locArgs?.[1] ?? 0) < 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = -((s as any).locArgs?.[1] ?? 0);
  }
  (s as any).result = 'images/pc/body/tattoos/belly/tatblly' + ((s as any).locArgs?.[1] ?? 0) + '.jpg';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBreastImage(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).pcs_tattoos ?? 0)?.['breast'];
  }
  if (Number((s as any).locArgs?.[1] ?? 0) < 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = -((s as any).locArgs?.[1] ?? 0);
  }
  (s as any).result = 'images/pc/body/tattoos/breasts/tatbrst' + ((s as any).locArgs?.[1] ?? 0) + '.jpg';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterChestImage(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).pcs_tattoos ?? 0)?.['chest'];
  }
  if (Number((s as any).locArgs?.[1] ?? 0) < 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = -((s as any).locArgs?.[1] ?? 0);
  }
  (s as any).result = 'images/pc/body/tattoos/chest/tatchst' + ((s as any).locArgs?.[1] ?? 0) + '.jpg';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterFaceImage(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).pcs_tattoos ?? 0)?.['face'];
  }
  if (Number((s as any).locArgs?.[1] ?? 0) < 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = -((s as any).locArgs?.[1] ?? 0);
  }
  (s as any).result = 'images/pc/body/tattoos/face/tatfce' + ((s as any).locArgs?.[1] ?? 0) + '.jpg';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterHandImage(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).pcs_tattoos ?? 0)?.['hand'];
  }
  if (Number((s as any).locArgs?.[1] ?? 0) < 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = -((s as any).locArgs?.[1] ?? 0);
  }
  (s as any).result = 'images/pc/body/tattoos/hand/tathnd' + ((s as any).locArgs?.[1] ?? 0) + '.jpg';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterLegImage(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).pcs_tattoos ?? 0)?.['leg'];
  }
  if (Number((s as any).locArgs?.[1] ?? 0) < 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = -((s as any).locArgs?.[1] ?? 0);
  }
  (s as any).result = 'images/pc/body/tattoos/legs/tatleg' + ((s as any).locArgs?.[1] ?? 0) + '.jpg';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterLipImage(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).pcs_tattoos ?? 0)?.['lip'];
  }
  if (Number((s as any).locArgs?.[1] ?? 0) < 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = -((s as any).locArgs?.[1] ?? 0);
  }
  (s as any).result = 'images/pc/body/tattoos/lip/tatlip' + ((s as any).locArgs?.[1] ?? 0) + '.jpg';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterNeckImage(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).pcs_tattoos ?? 0)?.['neck'];
  }
  if (Number((s as any).locArgs?.[1] ?? 0) < 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = -((s as any).locArgs?.[1] ?? 0);
  }
  (s as any).result = 'images/pc/body/tattoos/neck/tatnck' + ((s as any).locArgs?.[1] ?? 0) + '.jpg';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterPussyImage(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).pcs_tattoos ?? 0)?.['pussy'];
  }
  if (Number((s as any).locArgs?.[1] ?? 0) < 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = -((s as any).locArgs?.[1] ?? 0);
  }
  (s as any).result = 'images/pc/body/tattoos/pubic/tatvag' + ((s as any).locArgs?.[1] ?? 0) + '.jpg';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterShoulderImage(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).pcs_tattoos ?? 0)?.['shoulder'];
  }
  if (Number((s as any).locArgs?.[1] ?? 0) < 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = -((s as any).locArgs?.[1] ?? 0);
  }
  (s as any).result = 'images/pc/body/tattoos/shoulder/tatshldr' + ((s as any).locArgs?.[1] ?? 0) + '.jpg';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSideImage(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).pcs_tattoos ?? 0)?.['side'];
  }
  if (Number((s as any).locArgs?.[1] ?? 0) < 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = -((s as any).locArgs?.[1] ?? 0);
  }
  (s as any).result = 'images/pc/body/tattoos/side/tatside' + ((s as any).locArgs?.[1] ?? 0) + '.jpg';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterTrampImage(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).pcs_tattoos ?? 0)?.['tramp'];
  }
  if (Number((s as any).locArgs?.[1] ?? 0) < 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = -((s as any).locArgs?.[1] ?? 0);
  }
  (s as any).result = 'images/pc/body/tattoos/trampStamp/tatlowbck' + ((s as any).locArgs?.[1] ?? 0) + '.jpg';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterUnderImage(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).pcs_tattoos ?? 0)?.['under'];
  }
  if (Number((s as any).locArgs?.[1] ?? 0) < 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = -((s as any).locArgs?.[1] ?? 0);
  }
  (s as any).result = 'images/pc/body/tattoos/underBreast/tatundbreast' + ((s as any).locArgs?.[1] ?? 0) + '.jpg';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterWristImage(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).pcs_tattoos ?? 0)?.['wrist'];
  }
  if (Number((s as any).locArgs?.[1] ?? 0) < 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = -((s as any).locArgs?.[1] ?? 0);
  }
  (s as any).result = 'images/pc/body/tattoos/wrists/tatwrst' + ((s as any).locArgs?.[1] ?? 0) + '.jpg';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDisplayGridShop(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterViewItem(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'tattoo_view', 'view_item', 'shop', $ARGS[1], ARGS[2], ARGS[3], ARGS[4]
  return;
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'get_total':
      enterGetTotal(s, scene);
      break;
    case 'totals':
      enterTotals(s, scene);
      break;
    case 'is_owned':
      enterIsOwned(s, scene);
      break;
    case 'is_wearing':
      enterIsWearing(s, scene);
      break;
    case 'is_wearing_any':
      enterIsWearingAny(s, scene);
      break;
    case 'image':
      enterImage(s, scene);
      break;
    case 'add':
      enterAdd(s, scene);
      break;
    case 'remove':
      enterRemove(s, scene);
      break;
    case 'full_reset':
      enterFullReset(s, scene);
      break;
    case 'count':
      enterCount(s, scene);
      break;
    case 'set_shop_display_exceptions':
      enterSetShopDisplayExceptions(s, scene);
      break;
    case 'buy':
      enterBuy(s, scene);
      break;
    case 'ankle_image':
      enterAnkleImage(s, scene);
      break;
    case 'arm_image':
      enterArmImage(s, scene);
      break;
    case 'ass_image':
      enterAssImage(s, scene);
      break;
    case 'back_image':
      enterBackImage(s, scene);
      break;
    case 'belly_image':
      enterBellyImage(s, scene);
      break;
    case 'breast_image':
      enterBreastImage(s, scene);
      break;
    case 'chest_image':
      enterChestImage(s, scene);
      break;
    case 'face_image':
      enterFaceImage(s, scene);
      break;
    case 'hand_image':
      enterHandImage(s, scene);
      break;
    case 'leg_image':
      enterLegImage(s, scene);
      break;
    case 'lip_image':
      enterLipImage(s, scene);
      break;
    case 'neck_image':
      enterNeckImage(s, scene);
      break;
    case 'pussy_image':
      enterPussyImage(s, scene);
      break;
    case 'shoulder_image':
      enterShoulderImage(s, scene);
      break;
    case 'side_image':
      enterSideImage(s, scene);
      break;
    case 'tramp_image':
      enterTrampImage(s, scene);
      break;
    case 'under_image':
      enterUnderImage(s, scene);
      break;
    case 'wrist_image':
      enterWristImage(s, scene);
      break;
    case 'display_grid_shop':
      enterDisplayGridShop(s, scene);
      break;
    case 'view_item':
      enterViewItem(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const tattoo_management: LocationDef = {
  name: 'tattoo_management',
  region: 'other',
  enter: enter,
};
