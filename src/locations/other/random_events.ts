import { dynamicGoto, qspGoto } from '../_shared/qspBridge';

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
  (s as any).temp_freq = Math.max(0, (((s as any).rand_events_temp ?? 0)?.['freq']));
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
    qspGoto(s, 'feature_updates', 'show', ((s as any).loc ?? ''));
  }
  if (((s as any).loc ?? 0) === 'city_residential') {
    (s as any).streetev_title = '<center><b>Residential Area</b></center>';
    (s as any).rand_events_area = 'city';
  } else {
    if (((s as any).loc ?? 0) === 'city_center') {
      (s as any).streetev_title = '<center><b>City center</b></center>';
      (s as any).rand_events_area = 'city';
    } else {
      if (((s as any).loc ?? 0) === 'city_industrial') {
        (s as any).streetev_title = '<center><b>City industrial region</b></center>';
        (s as any).rand_events_area = 'city';
      } else {
        if (((s as any).loc ?? 0) === 'city_island') {
          (s as any).streetev_title = '<center><b>Island</b></center>';
          (s as any).rand_events_area = 'city';
        } else {
          if (((s as any).loc ?? 0) === 'pav_residential') {
            (s as any).streetev_title = '<center><b>Pavlovsk residential area</b></center>';
            (s as any).rand_events_area = 'pav';
          } else {
            if (((s as any).loc ?? 0) === 'pav_commercial') {
              (s as any).streetev_title = '<center><b>Pavlovsk high street</b></center>';
              (s as any).rand_events_area = 'pav';
            } else {
              if (((s as any).loc ?? 0) === 'pav_industrial') {
                (s as any).streetev_title = '<center><b>Pavlovsk Industrial District</b></center>';
                (s as any).rand_events_area = 'pav';
              } else {
                if (((s as any).loc ?? 0) === 'pushkin_center') {
                  (s as any).streetev_title = '<center><b>Pushkin City Center</b></center>';
                  (s as any).rand_events_area = 'pushkin';
                } else {
                  if (((s as any).loc ?? 0) === 'pushkin_square') {
                    (s as any).streetev_title = '<center><b>Okhlopkov Square</b></center>';
                    (s as any).rand_events_area = 'pushkin';
                  } else {
                    (s as any).streetev_title = '<center><b>In the Dark</b></center>';
                    (s as any).rand_events_area = 'unknown';
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
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['loc'] = 'street_events_' + ((((s as any).rand_events_area ?? 0) === 'city') ? ('city') : ('general'));
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['name'] = 'failed_celeb_blackmail';
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = 100;
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['cooldown'] = 12;
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRegister(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).nichGalaTarasPlan ?? 0) >= 110  &&  ((s as any).nichGalaTarasPlan ?? 0) < 120  &&  (Math.floor(Math.random() * 2) + 1) === 1  &&  ((s as any).nichDebug ?? 0) === 1) {
    (s as any).rand_events_must_happen = 1;
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['loc'] = 'street_events_general';
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['name'] = 'nich_taras_abduct';
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = 100;
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRegister(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).workDolgDay ?? 0) <= 0  &&  ((s as any).workDolg ?? 0) > 0) {
    (s as any).rand_events_must_happen = 1;
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['loc'] = 'street_events_home';
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['name'] = 'minor_debt_payoff';
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = 100;
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRegister(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).workDiskAtkPlayer ?? 0) === 1) {
    (s as any).rand_events_must_happen = 1;
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['loc'] = 'street_events_home';
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['name'] = 'minor_didnt_deliver_disk';
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = 100;
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRegister(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).pcs_magik ?? 0) >= 1  &&  ((s as any).mainQW ?? 0) === 0  &&  ((s as any).start_type ?? 0)?.['loc'] === 'city') {
    (s as any).rand_events_must_happen = 1;
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['loc'] = 'street_events_home';
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['name'] = 'minor_tatiana_unlock_magic';
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = 100;
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRegister(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).rand_events_must_happen ?? 0) === 0  &&  (((s as any).rand_events_last ?? 0) + 120 > ((s as any).totminut ?? 0)  ||  (Math.floor(Math.random() * 100) + 1) > 15)) {
    // TODO-QSP: exit
  }
  if (((s as any).cheatVars ?? 0)?.['random_rapists'] !== 1  &&  ((s as any).DayStage ?? 0) >= 4) {
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['loc'] = 'street_events_general';
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['name'] = 'random_rape';
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = 2;
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      // TODO-QSP: rand_events_temp['freq'] *= 12
    } else {
      // TODO-QSP: rand_events_temp['freq'] *= max(1, ((PCloInhibit * 3) / 2) / 10)
    }
    if (((s as any).PCloCoverFront ?? 0) >= 3  &&  ((s as any).PCloPanties ?? 0) === 0  &&  ((s as any).pantyworntype ?? 0) === 'none') {
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = ((((s as any).rand_events_temp ?? {})?.['freq'] ?? 0) * 3) / 2;
    }
    if (((s as any).PCloCoverTop ?? 0) >= 3   &&  ((s as any).braworntype ?? 0) === 'none') {
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = ((((s as any).rand_events_temp ?? {})?.['freq'] ?? 0) * 3) / 2;
    }
    if (((s as any).PCloBimbo ?? 0) === 1) {
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = ((((s as any).rand_events_temp ?? {})?.['freq'] ?? 0) * 3) / 2;
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
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = Math.max(1, (((s as any).rand_events_temp ?? {})?.['freq'] ?? 0) / 2);
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['cooldown'] = 24 * 14;
    } else {
      if (((s as any).cheatVars ?? 0)?.['random_rapists'] === 3) {
        ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = (((s as any).rand_events_temp ?? {})?.['freq'] ?? 0) * 2;
        ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['cooldown'] = 24 * 6;
      } else {
        if (((s as any).cheatVars ?? 0)?.['random_rapists'] === 4) {
          ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = (((s as any).rand_events_temp ?? {})?.['freq'] ?? 0) * 3;
          ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['cooldown'] = 24 * 3;
        } else {
          ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['cooldown'] = 24 * 10;
        }
      }
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRegister(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).cheatVars ?? 0)?.['random_robbers'] !== 1  &&  ((s as any).bag ?? 0) === 1  &&  ((s as any).daystart ?? 0) >= 10  &&  ((s as any).DayStage ?? 0) >= 4) {
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['loc'] = 'street_events_general';
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['name'] = 'random_robbery';
    if (((s as any).loc ?? 0) === 'city_industrial'  ||  ((s as any).loc ?? 0) === 'pav_industrial') {
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = 3;
    } else {
      if (((s as any).loc ?? 0) === 'city_center'  ||  ((s as any).loc ?? 0) === 'pav_commercial'  ||  ((s as any).loc ?? 0) === 'city_island') {
        ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = 0;
      } else {
        ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = 1;
      }
    }
    if (((s as any).DayStage ?? 0) === 5) {
      // TODO-QSP: rand_events_temp['freq'] *= 2
    }
    if (((s as any).currentpursetype ?? 0) === 'fashionista') {
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = (((((s as any).rand_events_temp ?? {})?.['freq'] ?? 0) + 1) * 3) / 2;
    } else {
      if (((s as any).currentpursetype ?? 0) === 'moncheri') {
        ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = ((((s as any).rand_events_temp ?? {})?.['freq'] ?? 0) + 1) * 2;
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
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = Math.max(1, (((s as any).rand_events_temp ?? {})?.['freq'] ?? 0) / 2);
    }
    if (((s as any).cheatVars ?? 0)?.['random_robbers'] === 2  &&  ((s as any).rand_events_temp ?? 0)?.['freq'] > 0) {
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = Math.max(1, (((s as any).rand_events_temp ?? {})?.['freq'] ?? 0) / 2);
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['cooldown'] = 24 * 14;
    } else {
      if (((s as any).cheatVars ?? 0)?.['random_robbers'] === 3) {
        ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = (((s as any).rand_events_temp ?? {})?.['freq'] ?? 0) * 2;
        ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['cooldown'] = 24 * 6;
      } else {
        if (((s as any).cheatVars ?? 0)?.['random_robbers'] === 4) {
          ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = (((s as any).rand_events_temp ?? {})?.['freq'] ?? 0) * 3;
          ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['cooldown'] = 24 * 3;
        } else {
          ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['cooldown'] = 24 * 10;
        }
      }
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRegister(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).cheatVars ?? 0)?.['random_snatchers'] !== 1  &&  ((s as any).bag ?? 0) === 1  &&  ((s as any).daystart ?? 0) >= 10  &&  ((s as any).DayStage ?? 0) < 4) {
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['loc'] = 'street_events_general';
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['name'] = 'random_snatching';
    if (((s as any).loc ?? 0) === 'city_industrial'  ||  ((s as any).loc ?? 0) === 'pav_industrial') {
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = 0;
    } else {
      if (((s as any).loc ?? 0) === 'city_center'  ||  ((s as any).loc ?? 0) === 'pav_commercial'  ||  ((s as any).loc ?? 0) === 'city_island') {
        ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = 3;
      } else {
        ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = 1;
      }
    }
    if (((s as any).currentpursetype ?? 0) === 'fashionista') {
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = (((((s as any).rand_events_temp ?? {})?.['freq'] ?? 0) + 1) * 3) / 2;
    } else {
      if (((s as any).currentpursetype ?? 0) === 'moncheri') {
        ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = ((((s as any).rand_events_temp ?? {})?.['freq'] ?? 0) + 1) * 2;
      }
    }
    if (((s as any).PCloQuality ?? 0) === 5) {
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = ((((s as any).rand_events_temp ?? {})?.['freq'] ?? 0) * 3) / 2;
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
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = Math.max(1, (((s as any).rand_events_temp ?? {})?.['freq'] ?? 0) / 2);
    }
    if (((s as any).pcs_stren ?? 0) >= 70) {
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = Math.max(1, (((s as any).rand_events_temp ?? {})?.['freq'] ?? 0) / 2);
    }
    if (((s as any).cheatVars ?? 0)?.['random_snatchers'] === 2  &&  ((s as any).rand_events_temp ?? 0)?.['freq'] > 0) {
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = Math.max(1, (((s as any).rand_events_temp ?? {})?.['freq'] ?? 0) / 2);
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['cooldown'] = 24 * 14;
    } else {
      if (((s as any).cheatVars ?? 0)?.['random_snatchers'] === 3) {
        ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = (((s as any).rand_events_temp ?? {})?.['freq'] ?? 0) * 2;
        ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['cooldown'] = 24 * 6;
      } else {
        if (((s as any).cheatVars ?? 0)?.['random_snatchers'] === 4) {
          ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = (((s as any).rand_events_temp ?? {})?.['freq'] ?? 0) * 3;
          ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['cooldown'] = 24 * 3;
        } else {
          ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['cooldown'] = 24 * 10;
        }
      }
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRegister(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).lesbiday ?? 0) + 21 <= ((s as any).daystart ?? 0)  &&  ((s as any).lesbiQW ?? 0) >= 11  &&  (((s as any).DayStage ?? 0) <= 4  &&  ((s as any).month ?? 0) >= 3  &&  ((s as any).month ?? 0) !== 12)  &&  ((s as any).pantyworntype ?? 0) !== 'none') {
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['loc'] = 'street_events_general';
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['name'] = 'mistmeet';
    if (((s as any).loc ?? 0) === 'city_center'  ||  ((s as any).loc ?? 0) === 'pav_commercial'  ||  ((s as any).loc ?? 0) === 'city_island') {
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = 10;
    } else {
      if (((s as any).loc ?? 0) === 'city_residential'  ||  ((s as any).loc ?? 0) === 'pav_residential') {
        ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = 7;
      } else {
        if (((s as any).loc ?? 0) === 'city_industrial'  ||  ((s as any).loc ?? 0) === 'pav_industrial') {
          ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = 2;
        }
      }
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRegister(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if ((((s as any).weatherFall ?? 0) < 60  ||  ((s as any).sunWeather ?? 0) === 1)  &&  ((s as any).cheatVars ?? 0)?.['random_lovers'] !== 1) {
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['loc'] = 'street_events_general';
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['name'] = 'random_lover';
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = 5;
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
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = Math.max(1, (((s as any).rand_events_temp ?? {})?.['freq'] ?? 0) / 2);
    } else {
      if (((s as any).cheatVars ?? 0)?.['random_lovers'] === 3) {
        // TODO-QSP: rand_events_temp['freq'] *= 2
      } else {
        if (((s as any).cheatVars ?? 0)?.['random_lovers'] === 4) {
          // TODO-QSP: rand_events_temp['freq'] *= 3
        }
      }
    }
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['cooldown'] = 1;
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRegister(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).DayStage ?? 0) <= 3) {
    if (((s as any).sunWeather ?? 0) === 1  &&  ((s as any).weatherFall ?? 0) < 60) {
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['loc'] = 'street_events_general';
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['name'] = 'minor_guitar_man';
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = 2;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRegister(s, scene); (s as any).locArgs = __savedLocArgs; }
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['loc'] = 'street_events_general';
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['name'] = 'minor_guitar_girl';
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = 2;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRegister(s, scene); (s as any).locArgs = __savedLocArgs; }
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['loc'] = 'street_events_general';
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['name'] = 'minor_violin_man';
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = 2;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRegister(s, scene); (s as any).locArgs = __savedLocArgs; }
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['loc'] = 'street_events_general';
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['name'] = 'minor_violin_girl';
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = 2;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRegister(s, scene); (s as any).locArgs = __savedLocArgs; }
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['loc'] = 'street_events_general';
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['name'] = 'minor_portraits';
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = 2;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRegister(s, scene); (s as any).locArgs = __savedLocArgs; }
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['loc'] = 'street_events_general';
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['name'] = 'minor_naked_woman';
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = 2;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRegister(s, scene); (s as any).locArgs = __savedLocArgs; }
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['loc'] = 'street_events_general';
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['name'] = 'minor_motorcycle_naked';
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = 2;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRegister(s, scene); (s as any).locArgs = __savedLocArgs; }
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['loc'] = 'street_events_general';
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['name'] = 'minor_girl_split';
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = 2;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRegister(s, scene); (s as any).locArgs = __savedLocArgs; }
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['loc'] = 'street_events_general';
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['name'] = 'minor_girl_flashing';
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = 2;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRegister(s, scene); (s as any).locArgs = __savedLocArgs; }
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['loc'] = 'street_events_general';
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['name'] = 'minor_handout_flyers';
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = 2;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRegister(s, scene); (s as any).locArgs = __savedLocArgs; }
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['loc'] = 'street_events_general';
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['name'] = 'minor_girls_gossiping';
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = 2;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRegister(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['loc'] = 'street_events_general';
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['name'] = 'minor_woman_flashing';
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = 2;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRegister(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['loc'] = 'street_events_general';
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['name'] = 'minor_hetero_couple';
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = 2;
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRegister(s, scene); (s as any).locArgs = __savedLocArgs; }
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['loc'] = 'street_events_general';
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['name'] = 'minor_lesbian_couple';
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = 2;
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRegister(s, scene); (s as any).locArgs = __savedLocArgs; }
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['loc'] = 'street_events_general';
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['name'] = 'minor_guys_fighting';
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = 2;
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRegister(s, scene); (s as any).locArgs = __savedLocArgs; }
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['loc'] = 'street_events_general';
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['name'] = 'minor_girls_fighting';
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = 2;
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRegister(s, scene); (s as any).locArgs = __savedLocArgs; }
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['loc'] = 'street_events_general';
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['name'] = 'minor_woman_window';
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = 2;
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRegister(s, scene); (s as any).locArgs = __savedLocArgs; }
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['loc'] = 'street_events_general';
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['name'] = 'minor_girl_beggar';
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = 2;
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRegister(s, scene); (s as any).locArgs = __savedLocArgs; }
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['loc'] = 'street_events_general';
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['name'] = 'minor_unconscious';
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = 2;
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRegister(s, scene); (s as any).locArgs = __savedLocArgs; }
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['loc'] = 'street_events_general';
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['name'] = 'minor_clothes_grabbed';
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = 2;
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRegister(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).sunWeather ?? 0) === 1  &&  ((s as any).weatherFall ?? 0) < 60) {
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['loc'] = 'street_events_general';
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['name'] = 'minor_boys_beer';
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = 2;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRegister(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).loc ?? 0) !== 'pav_industrial'  &&  ((s as any).loc ?? 0) !== 'city_industrial'  &&  ((s as any).divorce_party ?? 0) < 2  &&  ((s as any).pcs_hotcat ?? 0) > 4) {
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['loc'] = 'street_events_general';
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['name'] = 'divorce_party';
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = 2;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRegister(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  if (((s as any).sunWeather ?? 0) === 1  ||  ((s as any).weatherFall ?? 0) < 60) {
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['loc'] = 'street_events_general';
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['name'] = 'minor_groping_1';
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = 2;
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRegister(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if ((((s as any).PCloSkirt ?? 0) > 0  &&  ((s as any).PCloOnePiece ?? 0) === 1)  &&  (((s as any).hour ?? 0) >= 10  ||  ((s as any).hour ?? 0) < 2)) {
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['loc'] = 'street_events_general';
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['name'] = 'minor_groping_2';
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = 2;
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRegister(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).weatherFall ?? 0) >= 30  &&  ((s as any).hour ?? 0) >= 5) {
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['loc'] = 'street_events_general';
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['name'] = 'minor_wind_skirt';
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = 2;
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRegister(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if ((((s as any).braworntype ?? 0) === 'none'  &&  ((s as any).PCloThinness ?? 0) >= 4)  &&  (((s as any).hour ?? 0) >= 7  ||  ((s as any).hour ?? 0) <= 3)) {
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['loc'] = 'street_events_general';
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['name'] = 'minor_no_bra';
    ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = 2;
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRegister(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).rand_events_area ?? 0) === 'city') {
    if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) <= 21) {
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['loc'] = 'street_events_city';
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['name'] = 'minor_girl_beggar_2';
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = 2;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRegister(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['loc'] = 'street_events_city';
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['name'] = 'minor_homeless_men';
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = 2;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRegister(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if ((((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3)  &&  ((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 18) {
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['loc'] = 'street_events_city';
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['name'] = 'minor_old_couple';
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = 2;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRegister(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).hour ?? 0) >= 8  ||  ((s as any).hour ?? 0) < 2) {
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['loc'] = 'street_events_city';
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['name'] = 'minor_gay_couple';
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = 2;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRegister(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if ((((s as any).weatherFall ?? 0) < 60  ||  ((s as any).sunWeather ?? 0) === 1)  &&  ((s as any).fame ?? 0)?.['event_day'] !== ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 21  &&  ((s as any).loc ?? 0) === 'city_center') {
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['loc'] = 'street_events_city';
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['name'] = 'fame_events';
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = 2;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRegister(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  if (((s as any).rand_events_area ?? 0) === 'pav'  ||  ((s as any).rand_events_area ?? 0) === 'pushkin') {
    if (((s as any).hour ?? 0) >= 12  ||  ((s as any).hour ?? 0) <= 3) {
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['loc'] = 'street_events_pav';
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['name'] = 'minor_prostitutes';
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = 2;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRegister(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if ((((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3)  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 17) {
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['loc'] = 'street_events_pav';
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['name'] = 'minor_naked_hawker';
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = 2;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRegister(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).sunWeather ?? 0) === 1  &&  ((s as any).weatherFall ?? 0) < 60  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 17) {
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['loc'] = 'street_events_pav';
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['name'] = 'minor_improvised_market';
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = 2;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRegister(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  if (((s as any).rand_events_area ?? 0) === 'pav') {
    if (((s as any).sunWeather ?? 0) === 1  &&  ((s as any).weatherFall ?? 0) < 60  &&  ((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).PCloSkirt ?? 0) > 2  &&  ((s as any).hour ?? 0) > 6  &&  ((s as any).hour ?? 0) <= 20) {
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['loc'] = 'street_events_pav';
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['name'] = 'minor_older_women_shaming';
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = 2;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRegister(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if ((((s as any).weatherFall ?? 0) < 60  ||  ((s as any).sunWeather ?? 0) === 1)  &&  ((s as any).fame ?? 0)?.['event_day'] !== ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 21  &&  ((s as any).loc ?? 0) === 'pav_commercial') {
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['loc'] = 'street_events_pav';
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['name'] = 'fame_events';
      ((s as any).rand_events_temp = (s as any).rand_events_temp ?? {})['freq'] = 2;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRegister(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  if (Object.keys((s as any).rand_events_list_name ?? {}).length === 0) {
    // TODO-QSP: exit
  }
  (s as any).temp = (Math.floor(Math.random() * (((s as any).rand_events_total_weight ?? 0) - 1 + 1)) + (1));
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
  dynamicGoto(s, 'temp[1]', 'temp[2]');
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
