import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterRegister(s: GameState, scene: SceneBuilder): void {
  if (((s as any).rand_events_list_last ?? 0)[((s as any).rand_events_temp ?? 0)?.['loc'] + '_' + ((s as any).rand_events_temp ?? 0)?.['name']] + ((s as any).rand_events_temp ?? 0)?.['cooldown'] * 60 > ((s as any).totminut ?? 0)) {
    // TODO-QSP: exit
  }
  (s as any).temp_freq = qspUntranslated(s, "max(0, rand_events_temp['freq'])", { location: "random_events" });
  if ((!((s as any).temp_freq ?? 0))) {
    // TODO-QSP: exit
  }
  (s as any).rand_events_total_weight = ((s as any).rand_events_total_weight ?? 0) + (((s as any).temp_freq ?? 0));
  // TODO-QSP: rand_events_cumweight[] = rand_events_total_weight
  // TODO-QSP: $rand_events_list_locs[] = $rand_events_temp['loc']
  // TODO-QSP: $rand_events_list_name[] = $rand_events_temp['name']
  return;
  // TODO-QSP: end
  if (((s as any).update_report_last ?? 0) < ((s as any).update_report_new ?? 0)) {
    // TODO-QSP: gt 'feature_updates', 'show', $loc
  }
  if (((s as any).loc ?? 0) === 'city_residential') {
  } else {
    if (((s as any).loc ?? 0) === 'city_center') {
    } else {
      if (((s as any).loc ?? 0) === 'city_industrial') {
      } else {
        if (((s as any).loc ?? 0) === 'city_island') {
        } else {
          if (((s as any).loc ?? 0) === 'pav_residential') {
          } else {
            if (((s as any).loc ?? 0) === 'pav_commercial') {
            } else {
              if (((s as any).loc ?? 0) === 'pav_industrial') {
              } else {
                if (((s as any).loc ?? 0) === 'pushkin_center') {
                } else {
                  if (((s as any).loc ?? 0) === 'pushkin_square') {
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).shantpopala ?? 0) > 0) {
    (s as any).rand_events_must_happen = 1;
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['loc'] = 'street_events_' + ((((s as any).rand_events_area ?? 0) === 'city') ? ('city') : ('general'));
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['name'] = 'failed_celeb_blackmail';
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = 100;
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['cooldown'] = 12;
    qspCall(s, 'random_events', 'register');
  }
  if (((s as any).nichGalaTarasPlan ?? 0) >= 110  &&  ((s as any).nichGalaTarasPlan ?? 0) < 120  &&  (Math.floor(Math.random() * 2) + 1) === 1  &&  ((s as any).nichDebug ?? 0) === 1) {
    (s as any).rand_events_must_happen = 1;
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['loc'] = 'street_events_general';
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['name'] = 'nich_taras_abduct';
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = 100;
    qspCall(s, 'random_events', 'register');
  }
  if (((s as any).workDolgDay ?? 0) <= 0  &&  ((s as any).workDolg ?? 0) > 0) {
    (s as any).rand_events_must_happen = 1;
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['loc'] = 'street_events_home';
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['name'] = 'minor_debt_payoff';
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = 100;
    qspCall(s, 'random_events', 'register');
  }
  if (((s as any).workDiskAtkPlayer ?? 0) === 1) {
    (s as any).rand_events_must_happen = 1;
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['loc'] = 'street_events_home';
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['name'] = 'minor_didnt_deliver_disk';
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = 100;
    qspCall(s, 'random_events', 'register');
  }
  if (((s as any).pcs_magik ?? 0) >= 1  &&  ((s as any).mainQW ?? 0) === 0  &&  ((s as any).start_type ?? 0)?.['loc'] === 'city') {
    (s as any).rand_events_must_happen = 1;
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['loc'] = 'street_events_home';
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['name'] = 'minor_tatiana_unlock_magic';
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = 100;
    qspCall(s, 'random_events', 'register');
  }
  if (((s as any).rand_events_must_happen ?? 0) === 0  &&  (((s as any).rand_events_last ?? 0) + 120 > ((s as any).totminut ?? 0)  ||  (Math.floor(Math.random() * 100) + 1) > 15)) {
    // TODO-QSP: exit
  }
  if (((s as any).cheatVars ?? 0)?.['random_rapists'] !== 1  &&  ((s as any).DayStage ?? 0) >= 4) {
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['loc'] = 'street_events_general';
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['name'] = 'random_rape';
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = 2;
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      // TODO-QSP: rand_events_temp['freq'] *= 12
    } else {
      // TODO-QSP: rand_events_temp['freq'] *= max(1, ((PCloInhibit * 3) / 2) / 10)
    }
    if (((s as any).PCloCoverFront ?? 0) >= 3  &&  ((s as any).PCloPanties ?? 0) === 0  &&  ((s as any).pantyworntype ?? 0) === 'none') {
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = (((s as any).rand_events_temp ?? {})?.['freq'] * 3) / 2;
    }
    if (((s as any).PCloCoverTop ?? 0) >= 3   &&  ((s as any).braworntype ?? 0) === 'none') {
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = (((s as any).rand_events_temp ?? {})?.['freq'] * 3) / 2;
    }
    if (((s as any).PCloBimbo ?? 0) === 1) {
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = (((s as any).rand_events_temp ?? {})?.['freq'] * 3) / 2;
    }
    if (((s as any).loc ?? 0) === 'pav_residential'  ||  ((s as any).loc ?? 0) === 'pav_commercial') {
      // TODO-QSP: rand_events_temp['freq'] /= 2
    }
    if (((s as any).alko ?? 0) >= 6) {
      // TODO-QSP: rand_events_temp['freq'] *= 2
    }
    if (((s as any).DayStage ?? 0) === 5) {
      // TODO-QSP: rand_events_temp['freq'] *= 2
    }
    if (((s as any).cheatVars ?? 0)?.['random_rapists'] === 2  &&  ((s as any).rand_events_temp ?? 0)?.['freq'] > 0) {
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = Math.max(1, ((s as any).rand_events_temp ?? {})?.['freq'] / 2);
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['cooldown'] = 24 * 14;
    } else {
      if (((s as any).cheatVars ?? 0)?.['random_rapists'] === 3) {
        if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = ((s as any).rand_events_temp ?? {})?.['freq'] * 2;
        if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['cooldown'] = 24 * 6;
      } else {
        if (((s as any).cheatVars ?? 0)?.['random_rapists'] === 4) {
          if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = ((s as any).rand_events_temp ?? {})?.['freq'] * 3;
          if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['cooldown'] = 24 * 3;
        } else {
          if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['cooldown'] = 24 * 10;
        }
      }
    }
    qspCall(s, 'random_events', 'register');
  }
  if (((s as any).cheatVars ?? 0)?.['random_robbers'] !== 1  &&  ((s as any).bag ?? 0) === 1  &&  ((s as any).daystart ?? 0) >= 10  &&  ((s as any).DayStage ?? 0) >= 4) {
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['loc'] = 'street_events_general';
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['name'] = 'random_robbery';
    if (((s as any).loc ?? 0) === 'city_industrial'  ||  ((s as any).loc ?? 0) === 'pav_industrial') {
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = 3;
    } else {
      if (((s as any).loc ?? 0) === 'city_center'  ||  ((s as any).loc ?? 0) === 'pav_commercial'  ||  ((s as any).loc ?? 0) === 'city_island') {
        if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = 0;
      } else {
        if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = 1;
      }
    }
    if (((s as any).DayStage ?? 0) === 5) {
      // TODO-QSP: rand_events_temp['freq'] *= 2
    }
    if (((s as any).currentpursetype ?? 0) === 'fashionista') {
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = ((((s as any).rand_events_temp ?? {})?.['freq'] + 1) * 3) / 2;
    } else {
      if (((s as any).currentpursetype ?? 0) === 'moncheri') {
        if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = (((s as any).rand_events_temp ?? {})?.['freq'] + 1) * 2;
      }
    }
    if (((s as any).PCloQuality ?? 0) === 1) {
      // TODO-QSP: rand_events_temp['freq'] /= 2
    } else {
      if (((s as any).PCloQuality ?? 0) === 6) {
        // TODO-QSP: rand_events_temp['freq'] *= 2
      } else {
        if (((s as any).PCloQuality ?? 0) === 7) {
          // TODO-QSP: rand_events_temp['freq'] *= 3
        }
      }
    }
    if (((s as any).pcs_stren ?? 0) >= 70) {
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = Math.max(1, ((s as any).rand_events_temp ?? {})?.['freq'] / 2);
    }
    if (((s as any).cheatVars ?? 0)?.['random_robbers'] === 2  &&  ((s as any).rand_events_temp ?? 0)?.['freq'] > 0) {
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = Math.max(1, ((s as any).rand_events_temp ?? {})?.['freq'] / 2);
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['cooldown'] = 24 * 14;
    } else {
      if (((s as any).cheatVars ?? 0)?.['random_robbers'] === 3) {
        if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = ((s as any).rand_events_temp ?? {})?.['freq'] * 2;
        if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['cooldown'] = 24 * 6;
      } else {
        if (((s as any).cheatVars ?? 0)?.['random_robbers'] === 4) {
          if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = ((s as any).rand_events_temp ?? {})?.['freq'] * 3;
          if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['cooldown'] = 24 * 3;
        } else {
          if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['cooldown'] = 24 * 10;
        }
      }
    }
    qspCall(s, 'random_events', 'register');
  }
  if (((s as any).cheatVars ?? 0)?.['random_snatchers'] !== 1  &&  ((s as any).bag ?? 0) === 1  &&  ((s as any).daystart ?? 0) >= 10  &&  ((s as any).DayStage ?? 0) < 4) {
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['loc'] = 'street_events_general';
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['name'] = 'random_snatching';
    if (((s as any).loc ?? 0) === 'city_industrial'  ||  ((s as any).loc ?? 0) === 'pav_industrial') {
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = 0;
    } else {
      if (((s as any).loc ?? 0) === 'city_center'  ||  ((s as any).loc ?? 0) === 'pav_commercial'  ||  ((s as any).loc ?? 0) === 'city_island') {
        if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = 3;
      } else {
        if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = 1;
      }
    }
    if (((s as any).currentpursetype ?? 0) === 'fashionista') {
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = ((((s as any).rand_events_temp ?? {})?.['freq'] + 1) * 3) / 2;
    } else {
      if (((s as any).currentpursetype ?? 0) === 'moncheri') {
        if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = (((s as any).rand_events_temp ?? {})?.['freq'] + 1) * 2;
      }
    }
    if (((s as any).PCloQuality ?? 0) === 5) {
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = (((s as any).rand_events_temp ?? {})?.['freq'] * 3) / 2;
    } else {
      if (((s as any).PCloQuality ?? 0) === 6) {
        // TODO-QSP: rand_events_temp['freq'] *= 2
      } else {
        if (((s as any).PCloQuality ?? 0) === 7) {
          // TODO-QSP: rand_events_temp['freq'] *= 3
        }
      }
    }
    if (((s as any).DayStage ?? 0) < 3) {
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = Math.max(1, ((s as any).rand_events_temp ?? {})?.['freq'] / 2);
    }
    if (((s as any).pcs_stren ?? 0) >= 70) {
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = Math.max(1, ((s as any).rand_events_temp ?? {})?.['freq'] / 2);
    }
    if (((s as any).cheatVars ?? 0)?.['random_snatchers'] === 2  &&  ((s as any).rand_events_temp ?? 0)?.['freq'] > 0) {
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = Math.max(1, ((s as any).rand_events_temp ?? {})?.['freq'] / 2);
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['cooldown'] = 24 * 14;
    } else {
      if (((s as any).cheatVars ?? 0)?.['random_snatchers'] === 3) {
        if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = ((s as any).rand_events_temp ?? {})?.['freq'] * 2;
        if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['cooldown'] = 24 * 6;
      } else {
        if (((s as any).cheatVars ?? 0)?.['random_snatchers'] === 4) {
          if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = ((s as any).rand_events_temp ?? {})?.['freq'] * 3;
          if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['cooldown'] = 24 * 3;
        } else {
          if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['cooldown'] = 24 * 10;
        }
      }
    }
    qspCall(s, 'random_events', 'register');
  }
  if (((s as any).lesbiday ?? 0) + 21 <= ((s as any).daystart ?? 0)  &&  ((s as any).lesbiQW ?? 0) >= 11  &&  (((s as any).DayStage ?? 0) <= 4  &&  ((s as any).month ?? 0) >= 3  &&  ((s as any).month ?? 0) !== 12)  &&  ((s as any).pantyworntype ?? 0) !== 'none') {
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['loc'] = 'street_events_general';
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['name'] = 'mistmeet';
    if (((s as any).loc ?? 0) === 'city_center'  ||  ((s as any).loc ?? 0) === 'pav_commercial'  ||  ((s as any).loc ?? 0) === 'city_island') {
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = 10;
    } else {
      if (((s as any).loc ?? 0) === 'city_residential'  ||  ((s as any).loc ?? 0) === 'pav_residential') {
        if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = 7;
      } else {
        if (((s as any).loc ?? 0) === 'city_industrial'  ||  ((s as any).loc ?? 0) === 'pav_industrial') {
          if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = 2;
        }
      }
    }
    qspCall(s, 'random_events', 'register');
  }
  if ((((s as any).weatherFall ?? 0) < 60  ||  ((s as any).sunWeather ?? 0) === 1)  &&  ((s as any).cheatVars ?? 0)?.['random_lovers'] !== 1) {
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['loc'] = 'street_events_general';
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['name'] = 'random_lover';
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = 5;
    if (((s as any).loc ?? 0) === 'city_center'  ||  ((s as any).loc ?? 0) === 'pav_commercial'  ||  ((s as any).loc ?? 0) === 'city_island') {
      // TODO-QSP: rand_events_temp['freq'] *= 3
    } else {
      if (((s as any).loc ?? 0) === 'city_industrial'  ||  ((s as any).loc ?? 0) === 'pav_industrial') {
        // TODO-QSP: rand_events_temp['freq'] /= 3
      }
    }
    if (((s as any).pcs_hotcat ?? 0) >= 6) {
      // TODO-QSP: rand_events_temp['freq'] *= (pcs_hotcat - 4)
    } else {
      if (((s as any).pcs_hotcat ?? 0) <= 3) {
        // TODO-QSP: rand_events_temp['freq'] /= (5 - pcs_hotcat)
      }
    }
    if (((s as any).PCloQuality ?? 0) <= 2) {
      // TODO-QSP: rand_events_temp['freq'] /= 4 - PCloQuality
    } else {
      if (((s as any).PCloQuality ?? 0) >= 6) {
        // TODO-QSP: rand_events_temp['freq'] *= 2
      }
    }
    // TODO-QSP: rand_events_temp['freq'] *= max(1, (PCloInhibit / 10) - 2)
    if (((s as any).cheatVars ?? 0)?.['random_lovers'] === 2  &&  ((s as any).rand_events_temp ?? 0)?.['freq'] > 0) {
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = Math.max(1, ((s as any).rand_events_temp ?? {})?.['freq'] / 2);
    } else {
      if (((s as any).cheatVars ?? 0)?.['random_lovers'] === 3) {
        // TODO-QSP: rand_events_temp['freq'] *= 2
      } else {
        if (((s as any).cheatVars ?? 0)?.['random_lovers'] === 4) {
          // TODO-QSP: rand_events_temp['freq'] *= 3
        }
      }
    }
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['cooldown'] = 1;
    qspCall(s, 'random_events', 'register');
  }
  if (((s as any).DayStage ?? 0) <= 3) {
    if (((s as any).sunWeather ?? 0) === 1  &&  ((s as any).weatherFall ?? 0) < 60) {
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['loc'] = 'street_events_general';
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['name'] = 'minor_guitar_man';
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = 2;
      qspCall(s, 'random_events', 'register');
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['loc'] = 'street_events_general';
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['name'] = 'minor_guitar_girl';
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = 2;
      qspCall(s, 'random_events', 'register');
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['loc'] = 'street_events_general';
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['name'] = 'minor_violin_man';
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = 2;
      qspCall(s, 'random_events', 'register');
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['loc'] = 'street_events_general';
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['name'] = 'minor_violin_girl';
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = 2;
      qspCall(s, 'random_events', 'register');
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['loc'] = 'street_events_general';
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['name'] = 'minor_portraits';
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = 2;
      qspCall(s, 'random_events', 'register');
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['loc'] = 'street_events_general';
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['name'] = 'minor_naked_woman';
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = 2;
      qspCall(s, 'random_events', 'register');
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['loc'] = 'street_events_general';
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['name'] = 'minor_motorcycle_naked';
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = 2;
      qspCall(s, 'random_events', 'register');
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['loc'] = 'street_events_general';
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['name'] = 'minor_girl_split';
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = 2;
      qspCall(s, 'random_events', 'register');
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['loc'] = 'street_events_general';
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['name'] = 'minor_girl_flashing';
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = 2;
      qspCall(s, 'random_events', 'register');
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['loc'] = 'street_events_general';
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['name'] = 'minor_handout_flyers';
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = 2;
      qspCall(s, 'random_events', 'register');
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['loc'] = 'street_events_general';
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['name'] = 'minor_girls_gossiping';
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = 2;
      qspCall(s, 'random_events', 'register');
    } else {
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['loc'] = 'street_events_general';
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['name'] = 'minor_woman_flashing';
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = 2;
      qspCall(s, 'random_events', 'register');
    }
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['loc'] = 'street_events_general';
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['name'] = 'minor_hetero_couple';
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = 2;
    qspCall(s, 'random_events', 'register');
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['loc'] = 'street_events_general';
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['name'] = 'minor_lesbian_couple';
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = 2;
    qspCall(s, 'random_events', 'register');
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['loc'] = 'street_events_general';
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['name'] = 'minor_guys_fighting';
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = 2;
    qspCall(s, 'random_events', 'register');
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['loc'] = 'street_events_general';
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['name'] = 'minor_girls_fighting';
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = 2;
    qspCall(s, 'random_events', 'register');
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['loc'] = 'street_events_general';
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['name'] = 'minor_woman_window';
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = 2;
    qspCall(s, 'random_events', 'register');
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['loc'] = 'street_events_general';
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['name'] = 'minor_girl_beggar';
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = 2;
    qspCall(s, 'random_events', 'register');
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['loc'] = 'street_events_general';
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['name'] = 'minor_unconscious';
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = 2;
    qspCall(s, 'random_events', 'register');
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['loc'] = 'street_events_general';
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['name'] = 'minor_clothes_grabbed';
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = 2;
    qspCall(s, 'random_events', 'register');
  } else {
    if (((s as any).sunWeather ?? 0) === 1  &&  ((s as any).weatherFall ?? 0) < 60) {
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['loc'] = 'street_events_general';
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['name'] = 'minor_boys_beer';
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = 2;
      qspCall(s, 'random_events', 'register');
    }
    if (((s as any).loc ?? 0) !== 'pav_industrial'  &&  ((s as any).loc ?? 0) !== 'city_industrial'  &&  ((s as any).divorce_party ?? 0) < 2  &&  ((s as any).pcs_hotcat ?? 0) > 4) {
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['loc'] = 'street_events_general';
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['name'] = 'divorce_party';
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = 2;
      qspCall(s, 'random_events', 'register');
    }
  }
  if (((s as any).sunWeather ?? 0) === 1  ||  ((s as any).weatherFall ?? 0) < 60) {
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['loc'] = 'street_events_general';
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['name'] = 'minor_groping_1';
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = 2;
    qspCall(s, 'random_events', 'register');
  }
  if ((((s as any).PCloSkirt ?? 0) > 0  &&  ((s as any).PCloOnePiece ?? 0) === 1)  &&  (((s as any).hour ?? 0) >= 10  ||  ((s as any).hour ?? 0) < 2)) {
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['loc'] = 'street_events_general';
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['name'] = 'minor_groping_2';
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = 2;
    qspCall(s, 'random_events', 'register');
  }
  if (((s as any).weatherFall ?? 0) >= 30  &&  ((s as any).hour ?? 0) >= 5) {
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['loc'] = 'street_events_general';
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['name'] = 'minor_wind_skirt';
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = 2;
    qspCall(s, 'random_events', 'register');
  }
  if ((((s as any).braworntype ?? 0) === 'none'  &&  ((s as any).PCloThinness ?? 0) >= 4)  &&  (((s as any).hour ?? 0) >= 7  ||  ((s as any).hour ?? 0) <= 3)) {
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['loc'] = 'street_events_general';
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['name'] = 'minor_no_bra';
    if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = 2;
    qspCall(s, 'random_events', 'register');
  }
  if (((s as any).rand_events_area ?? 0) === 'city') {
    if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) <= 21) {
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['loc'] = 'street_events_city';
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['name'] = 'minor_girl_beggar_2';
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = 2;
      qspCall(s, 'random_events', 'register');
    }
    if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['loc'] = 'street_events_city';
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['name'] = 'minor_homeless_men';
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = 2;
      qspCall(s, 'random_events', 'register');
    }
    if ((((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3)  &&  ((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 18) {
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['loc'] = 'street_events_city';
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['name'] = 'minor_old_couple';
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = 2;
      qspCall(s, 'random_events', 'register');
    }
    if (((s as any).hour ?? 0) >= 8  ||  ((s as any).hour ?? 0) < 2) {
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['loc'] = 'street_events_city';
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['name'] = 'minor_gay_couple';
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = 2;
      qspCall(s, 'random_events', 'register');
    }
    if ((((s as any).weatherFall ?? 0) < 60  ||  ((s as any).sunWeather ?? 0) === 1)  &&  ((s as any).fame ?? 0)?.['event_day'] !== ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 21  &&  ((s as any).loc ?? 0) === 'city_center') {
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['loc'] = 'street_events_city';
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['name'] = 'fame_events';
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = 2;
      qspCall(s, 'random_events', 'register');
    }
  }
  if (((s as any).rand_events_area ?? 0) === 'pav'  ||  ((s as any).rand_events_area ?? 0) === 'pushkin') {
    if (((s as any).hour ?? 0) >= 12  ||  ((s as any).hour ?? 0) <= 3) {
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['loc'] = 'street_events_pav';
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['name'] = 'minor_prostitutes';
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = 2;
      qspCall(s, 'random_events', 'register');
    }
    if ((((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3)  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 17) {
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['loc'] = 'street_events_pav';
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['name'] = 'minor_naked_hawker';
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = 2;
      qspCall(s, 'random_events', 'register');
    }
    if (((s as any).sunWeather ?? 0) === 1  &&  ((s as any).weatherFall ?? 0) < 60  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 17) {
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['loc'] = 'street_events_pav';
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['name'] = 'minor_improvised_market';
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = 2;
      qspCall(s, 'random_events', 'register');
    }
  }
  if (((s as any).rand_events_area ?? 0) === 'pav') {
    if (((s as any).sunWeather ?? 0) === 1  &&  ((s as any).weatherFall ?? 0) < 60  &&  ((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).PCloSkirt ?? 0) > 2  &&  ((s as any).hour ?? 0) > 6  &&  ((s as any).hour ?? 0) <= 20) {
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['loc'] = 'street_events_pav';
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['name'] = 'minor_older_women_shaming';
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = 2;
      qspCall(s, 'random_events', 'register');
    }
    if ((((s as any).weatherFall ?? 0) < 60  ||  ((s as any).sunWeather ?? 0) === 1)  &&  ((s as any).fame ?? 0)?.['event_day'] !== ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 21  &&  ((s as any).loc ?? 0) === 'pav_commercial') {
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['loc'] = 'street_events_pav';
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['name'] = 'fame_events';
      if (!(s as any).rand_events_temp) (s as any).rand_events_temp = {}; (s as any).rand_events_temp['freq'] = 2;
      qspCall(s, 'random_events', 'register');
    }
  }
  if (Object.keys((s as any).rand_events_list_name ?? {}).length === 0) {
    // TODO-QSP: exit
  }
  (s as any).temp = 0;
  (s as any).temp_i = 0;
  // TODO-QSP: :rand_events_pick_loop
  if (((s as any).temp ?? 0) > ((s as any).rand_events_cumweight ?? 0)?.[String((s as any).temp_i ?? 0)]) {
    (s as any).temp_i = ((s as any).temp_i ?? 0) + (1);
    // TODO-QSP: jump 'rand_events_pick_loop'
  }
  // TODO-QSP: $temp[1] = $rand_events_list_locs[temp_i]
  // TODO-QSP: $temp[2] = $rand_events_list_name[temp_i]
  (s as any).rand_events_last = ((s as any).totminut ?? 0);
  // TODO-QSP: rand_events_list_last[$temp[1] + '_' + $temp[2]] = totminut
  // TODO-QSP: gt $temp[1], $temp[2]
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'register':
      enterRegister(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const random_events: LocationDef = {
  name: 'random_events',
  region: 'other',
  enter: enter,
};
