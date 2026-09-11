import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterWork(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'prostitution_functions', 'parameters');
  if (((s as any).prostitute_names ?? 0)?.[String((s as any).prostitution_location ?? 0)] === '') {
    scene.text('If you want, you can tell your clients a different name.');
    // TODO-QSP: $prostitute_names[$prostitution_location] = input("What name do you want to tell your clients? (Leav...
    if (((s as any).prostitute_names ?? 0)?.[String((s as any).prostitution_location ?? 0)] === '') {
      ((s as any).prostitute_names ?? {})[String((s as any).prostitution_location ?? 0)] = ((s as any).pcs_nickname ?? 0);
    }
  }
  scene.img('images/shared/prostitution/car/normal/negotiation/search.mp4');
  qspCall(s, 'road_prostitution', 'road_segment');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.text('<br>Almost no men will like dirty anal sex, even with a condom, and it\'s probably a safe bet that they won\'t pay a lot for it. You should start giving yourself an enema before going to work.');
  }
  if (((s as any).mesec ?? 0) > 0) {
    scene.text('<br>You are having your period, most men will pay less for vaginal sex during that time of the month.');
  }
  if (((s as any).prostitute ?? 0)?.['cum_dressed'] === 1) {
    scene.text('<br>You have visible cum stains on you. Most clients won\'t like that and will offer less money.');
  }
  if (((s as any).prostitute ?? 0)?.['earnings_day'] > 0) {
    // TODO-QSP: 'You have earned <<$func(''money'', ''string_profit'', prostitute[''earnings_day''])>> today.'+iif(p...
  }
  if (((s as any).prostitute ?? 0)?.['payment_method'] === 0) {
    qspCall(s, 'road_prostitution', 'event_check');
  }
  qspCall(s, 'willpower', 'prostitution', 'self', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Look for a client (0:30) [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Look for a client (0:30) [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
  }, goto: ['prostitution_car_negotiation', 'look_client'] },
    ]);
  }
  if (((s as any).mc_inventory ?? 0)?.['makeup_wipes'] > 0  &&  (((s as any).prostitute ?? 0)?.['cum_dressed'] === 1  ||  ((s as any).prostitute ?? 0)?.['cum_undressed'] === 1  ||  ((s as any).prostitute ?? 0)?.['cum_vaginal_mod'] === 1  ||  ((s as any).prostitute ?? 0)?.['cum_anal_mod'] === 1)) {
    scene.actions([
      { label: 'Remove the cum from your body (0:02)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    ((s as any).mc_inventory ?? {})['makeup_wipes'] = (((s as any).mc_inventory ?? {})['makeup_wipes'] ?? 0) - (1);
    (s as any).cumspclnt = 20;
    qspCall(s, 'cum_cleanup', '');
  }, goto: ['road_prostitution', 'work'] },
    ]);
  } else {
    if (((s as any).mc_inventory ?? 0)?.['makeup_wipes'] === 0) {
      scene.text('<br>You don\'t have any tissues with you to remove cum from your body.');
    }
  }
  qspCall(s, 'prostitution_car_negotiation', 'general_description');
  scene.actions([
    { label: 'Stop working', goto: ['road', ''] },
  ]);
  scene.build();
}

function enterEventCheck(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterRoadSegment(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).nroad ?? 0))) {
  } else {
    if (((s as any).nroad ?? 0) === 1) {
    } else {
      if (((s as any).nroad ?? 0) === 2) {
        scene.text('');
      } else {
        if (((s as any).nroad ?? 0) === 3) {
        } else {
          if (((s as any).nroad ?? 0) === 4) {
            scene.text('');
          } else {
            if (((s as any).nroad ?? 0) === 5) {
            } else {
              if (((s as any).nroad ?? 0) === 6) {
                scene.text('');
              } else {
                if (((s as any).nroad ?? 0) === 7) {
                  scene.text('');
                } else {
                  if (((s as any).nroad ?? 0) === 8) {
                    scene.text('');
                  } else {
                    if (((s as any).nroad ?? 0) === 9) {
                      scene.text('');
                    } else {
                      if (((s as any).nroad ?? 0) === 10) {
                      } else {
                        if (((s as any).nroad ?? 0) === 11) {
                          scene.text('');
                        } else {
                          if (((s as any).nroad ?? 0) === 12) {
                          } else {
                            if (((s as any).nroad ?? 0) === 13) {
                              scene.text('');
                            } else {
                              if (((s as any).nroad ?? 0) === 14) {
                                scene.text('');
                              } else {
                                if (((s as any).nroad ?? 0) === 15) {
                                  scene.text('');
                                } else {
                                  if (((s as any).nroad ?? 0) === 16) {
                                  } else {
                                    if (((s as any).nroad ?? 0) === 17) {
                                      scene.text('');
                                    } else {
                                      if (((s as any).nroad ?? 0) === 18) {
                                        scene.text('');
                                      } else {
                                        if (((s as any).nroad ?? 0) === 19) {
                                        } else {
                                          if (((s as any).nroad ?? 0) === 20) {
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
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'work':
      enterWork(s, scene);
      break;
    case 'event_check':
      enterEventCheck(s, scene);
      break;
    case 'road_segment':
      enterRoadSegment(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const road_prostitution: LocationDef = {
  name: 'road_prostitution',
  title: 'If you want, you can tell your clients a different name.',
  region: 'other',
  locationType: 'public_outdoors',
  enter: enter,
};
