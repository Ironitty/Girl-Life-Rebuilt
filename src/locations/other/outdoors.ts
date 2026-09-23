import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterSetWeather_TempFall(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).month ?? 0);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 1) {
    (s as any).weatherMeanTemp = (-48);
    (s as any).weatherTempDelta = 47;
    (s as any).weatherFallM = 50;
    (s as any).weatherFallDelta = 25;
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 2) {
      (s as any).weatherMeanTemp = (-50);
      (s as any).weatherTempDelta = 52;
      (s as any).weatherFallM = 40;
      (s as any).weatherFallDelta = 20;
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 3) {
        (s as any).weatherMeanTemp = (-10);
        (s as any).weatherTempDelta = 63;
        (s as any).weatherFallM = 30;
        (s as any).weatherFallDelta = 20;
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 4) {
          (s as any).weatherMeanTemp = 52;
          (s as any).weatherTempDelta = 78;
          (s as any).weatherFallM = 20;
          (s as any).weatherFallDelta = 15;
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 5) {
            (s as any).weatherMeanTemp = 115;
            (s as any).weatherTempDelta = 91;
            (s as any).weatherFallM = 20;
            (s as any).weatherFallDelta = 15;
          } else {
            if (String((s as any).locArgs?.[1] ?? '') === 6) {
              (s as any).weatherMeanTemp = 161;
              (s as any).weatherTempDelta = 83;
              (s as any).weatherFallM = 10;
              (s as any).weatherFallDelta = 10;
            } else {
              if (String((s as any).locArgs?.[1] ?? '') === 7) {
                (s as any).weatherMeanTemp = 191;
                (s as any).weatherTempDelta = 80;
                (s as any).weatherFallM = 5;
                (s as any).weatherFallDelta = 5;
              } else {
                if (String((s as any).locArgs?.[1] ?? '') === 8) {
                  (s as any).weatherMeanTemp = 174;
                  (s as any).weatherTempDelta = 75;
                  (s as any).weatherFallM = 10;
                  (s as any).weatherFallDelta = 10;
                } else {
                  if (String((s as any).locArgs?.[1] ?? '') === 9) {
                    (s as any).weatherMeanTemp = 124;
                    (s as any).weatherTempDelta = 65;
                    (s as any).weatherFallM = 20;
                    (s as any).weatherFallDelta = 15;
                  } else {
                    if (String((s as any).locArgs?.[1] ?? '') === 10) {
                      (s as any).weatherMeanTemp = 62;
                      (s as any).weatherTempDelta = 46;
                      (s as any).weatherFallM = 20;
                      (s as any).weatherFallDelta = 15;
                    } else {
                      if (String((s as any).locArgs?.[1] ?? '') === 11) {
                        (s as any).weatherMeanTemp = 9;
                        (s as any).weatherTempDelta = 37;
                        (s as any).weatherFallM = 30;
                        (s as any).weatherFallDelta = 20;
                      } else {
                        (s as any).weatherMeanTemp = (-25);
                        (s as any).weatherTempDelta = 40;
                        (s as any).weatherFallM = 40;
                        (s as any).weatherFallDelta = 20;
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
  (s as any).weatherMeanTemp = ((s as any).weatherMeanTemp ?? 0) + (40);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterWeather(s: GameState, scene: SceneBuilder): void {
  if (((s as any).weatherDay ?? 0) !== ((s as any).daystart ?? 0)) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).month ?? 0)]; enterSetWeather_TempFall(s, scene); (s as any).locArgs = __savedLocArgs; }
    (s as any).weatherTemper = ((s as any).weatherMeanTemp ?? 0) + ((Math.floor(Math.random() * (((s as any).weatherTempDelta ?? 0) - -((s as any).weatherTempDelta ?? 0) + 1)) + (-((s as any).weatherTempDelta ?? 0))) + (Math.floor(Math.random() * (((s as any).weatherTempDelta ?? 0) - -((s as any).weatherTempDelta ?? 0) + 1)) + (-((s as any).weatherTempDelta ?? 0)))) / 2;
    (s as any).weatherFall = ((s as any).weatherFallM ?? 0) + (Math.floor(Math.random() * (((s as any).weatherFallDelta ?? 0) - -((s as any).weatherFallDelta ?? 0) + 1)) + (-((s as any).weatherFallDelta ?? 0)));
  }
  (s as any).weatherDay = ((s as any).daystart ?? 0);
  if (((s as any).totminut ?? 0) < ((s as any).sunWeather ?? 0)[1]-240) {
    ((s as any).sunWeather = (s as any).sunWeather ?? {})[1] = ((s as any).totminut ?? 0);
    // TODO-QSP: !! Time cheat
  }
  if (((s as any).totminut ?? 0) > ((s as any).sunWeather ?? 0)[1]) {
    ((s as any).sunWeather = (s as any).sunWeather ?? {})[1] = ((s as any).totminut ?? 0) + (Math.floor(Math.random() * 121) + 30);
    (s as any).sunWeather = (((Math.floor(Math.random() * 100) + 0) < ((s as any).weatherFall ?? 0)) ? (0) : (1));
  }
  (s as any).temper = (((s as any).totminut ?? 0) % 1440);
  if (((s as any).temper ?? 0) < 210) {
    (s as any).temper = -120 - ((s as any).temper ?? 0);
  } else {
    if (((s as any).temper ?? 0) < 930) {
      (s as any).temper = ((s as any).temper ?? 0) - (540);
    } else {
      (s as any).temper = 1320 - ((s as any).temper ?? 0);
    }
  }
  (s as any).temper = ((s as any).weatherTemper ?? 0) + (((s as any).weatherTempDelta ?? 0) * ((s as any).temper ?? 0)) / 360;
  ((s as any).temper = (s as any).temper ?? {})[1] = ((s as any).temper ?? 0) % 10;
  if (((s as any).temper ?? 0)[1] < 0) {
    // TODO-QSP: temper[1] *= -1
  }
  ((s as any).temper = (s as any).temper ?? {})[0] = ((s as any).temper ?? 0) / 10;
  if (((s as any).temper ?? 0) < -5) {
    if (((s as any).weatherFall ?? 0) < 30) {
      if (((s as any).sunWeather ?? 0) === 1) {
        (s as any).osadki = 'Clear and cloudless.';
      } else {
        (s as any).osadki = 'Clear sky, but light snow falls.';
      }
    } else {
      if (((s as any).weatherFall ?? 0) < 60) {
        if (((s as any).sunWeather ?? 0) === 1) {
          (s as any).osadki = 'Partly cloudy and light breeze.';
        } else {
          (s as any).osadki = 'Clouds and it is snowing.';
        }
      } else {
        if (((s as any).sunWeather ?? 0) === 1) {
          (s as any).osadki = 'Clouds all over the sky and a sharp cold wind.';
        } else {
          (s as any).osadki = 'Strong snow with wind.';
        }
      }
    }
  } else {
    if (((s as any).temper ?? 0) < 5) {
      if (((s as any).weatherFall ?? 0) < 30) {
        if (((s as any).sunWeather ?? 0) === 1) {
          (s as any).osadki = 'Clear and cloudless.';
        } else {
          (s as any).osadki = 'Slightly wet snow.';
        }
      } else {
        if (((s as any).weatherFall ?? 0) < 60) {
          if (((s as any).sunWeather ?? 0) === 1) {
            (s as any).osadki = 'Partly cloudy and light breeze.';
          } else {
            (s as any).osadki = 'Clouds and wet snow.';
          }
        } else {
          if (((s as any).sunWeather ?? 0) === 1) {
            (s as any).osadki = 'Clouds all over the sky and a sharp wind.';
          } else {
            (s as any).osadki = 'Heavy snow, sticking wet snow.';
          }
        }
      }
    } else {
      if (((s as any).weatherFall ?? 0) < 30) {
        if (((s as any).sunWeather ?? 0) === 1) {
          (s as any).osadki = 'Clear and cloudless.';
        } else {
          (s as any).osadki = 'Light mushroom rain.';
        }
      } else {
        if (((s as any).weatherFall ?? 0) < 60) {
          if (((s as any).sunWeather ?? 0) === 1) {
            (s as any).osadki = 'Partly cloudy skies.';
          } else {
            (s as any).osadki = 'It is raining.';
          }
        } else {
          if (((s as any).sunWeather ?? 0) === 1) {
            (s as any).osadki = 'Clouds all over the sky and a sharp wind.';
          } else {
            (s as any).osadki = 'Heavy rain and wind.';
          }
        }
      }
    }
  }
  (s as any).temperature = qspFunc(s, 'outdoors', 'get_temp_string', qspUntranslated(s, "temper[0]", { location: "outdoors" }), qspUntranslated(s, "temper[1]", { location: "outdoors" }));
  if (((s as any).month ?? 0) === 1) {
    (s as any).weather = '' + ((s as any).osadki ?? 0) + ' The temperature is ' + ((s as any).temperature ?? 0) + '.<br>There is snow on the street.';
  } else {
    if (((s as any).month ?? 0) === 2) {
      (s as any).weather = '' + ((s as any).osadki ?? 0) + ' The temperature is ' + ((s as any).temperature ?? 0) + '.<br>There is snow on the street.';
    } else {
      if (((s as any).month ?? 0) === 3) {
        (s as any).weather = '' + ((s as any).osadki ?? 0) + ' The temperature is ' + ((s as any).temperature ?? 0) + '.<br>There is snow on the street.';
      } else {
        if (((s as any).month ?? 0) === 4) {
          (s as any).weather = '' + ((s as any).osadki ?? 0) + ' The temperature is ' + ((s as any).temperature ?? 0) + '.<br>The snow melts on the street.';
        } else {
          if (((s as any).month ?? 0) === 5) {
            (s as any).weather = '' + ((s as any).osadki ?? 0) + ' The temperature is ' + ((s as any).temperature ?? 0) + '.<br>Puddles in the street left by snow, winter has covered everything in dirt and debris, some places where new grass grows are pleasantly green.';
          } else {
            if (((s as any).month ?? 0) === 6) {
              (s as any).weather = '' + ((s as any).osadki ?? 0) + ' The temperature is ' + ((s as any).temperature ?? 0) + '.<br>Green grass lines the streets.';
            } else {
              if (((s as any).month ?? 0) === 7) {
                (s as any).weather = '' + ((s as any).osadki ?? 0) + ' The temperature is ' + ((s as any).temperature ?? 0) + '.<br>Green grass lines the streets.';
              } else {
                if (((s as any).month ?? 0) === 8) {
                  (s as any).weather = '' + ((s as any).osadki ?? 0) + ' The temperature is ' + ((s as any).temperature ?? 0) + '.<br>The grass is green, the leaves in the trees are already turning yellow.';
                } else {
                  if (((s as any).month ?? 0) === 9) {
                    (s as any).weather = '' + ((s as any).osadki ?? 0) + ' The temperature is ' + ((s as any).temperature ?? 0) + '.<br>Streets lined with green grass, visible yellow leaves.';
                  } else {
                    if (((s as any).month ?? 0) === 10) {
                      (s as any).weather = '' + ((s as any).osadki ?? 0) + ' Temperature is ' + ((s as any).temperature ?? 0) + '.<br>The grass is fading and patchy, yellow and brown leaves fall from the trees, mud and puddles dot the street.';
                    } else {
                      if (((s as any).month ?? 0) === 11) {
                        (s as any).weather = '' + ((s as any).osadki ?? 0) + ' Temperature is ' + ((s as any).temperature ?? 0) + '.<br>The street is dirty with a thin snow cover.';
                      } else {
                        if (((s as any).month ?? 0) === 12) {
                          (s as any).weather = '' + ((s as any).osadki ?? 0) + ' The temperature is ' + ((s as any).temperature ?? 0) + '.<br>The street is covered in snow.';
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

function enterGetTempString(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_sd_scale = ((Object.keys((s as any).ARGS ?? {}).length <= 3) ? (((s as any).stat_cfg ?? 0)?.['temp_scale']) : (((s as any).locArgs?.[3] ?? 0)));
  if ((!((s as any).temp_sd_scale ?? 0))) {
    (s as any).result = '' + ((s as any).locArgs?.[1] ?? 0) + '.' + ((s as any).locArgs?.[2] ?? 0) + '°C';
  } else {
    if (((s as any).temp_sd_scale ?? 0) === 1) {
      (s as any).result = '' + (1625 + 90*((s as any).locArgs?.[1] ?? 0) + 9*((s as any).locArgs?.[2] ?? 0))/50 + '°F';
    } else {
      if (((s as any).temp_sd_scale ?? 0) === 2) {
        (s as any).result = '' + (((s as any).locArgs?.[1] ?? 0)*10 + ((s as any).locArgs?.[2] ?? 0) + 2732)/10 + '.' + (((s as any).locArgs?.[1] ?? 0)*10 + ((s as any).locArgs?.[2] ?? 0) + 2732) % 10 + ' K';
      } else {
        if (((s as any).temp_sd_scale ?? 0) === 3) {
          (s as any).result = '' + (1000 - ((s as any).locArgs?.[1] ?? 0)*10 - ((s as any).locArgs?.[2] ?? 0))*3/20 + '°De';
        } else {
          if (((s as any).temp_sd_scale ?? 0) === 4) {
            if (String((s as any).locArgs?.[1] ?? '') < -10) {
              (s as any).result = '❄️🧊';
            } else {
              if (String((s as any).locArgs?.[1] ?? '') < -5) {
                (s as any).result = '🥶😬';
              } else {
                if (String((s as any).locArgs?.[1] ?? '') < 5) {
                  (s as any).result = '🌨️😐';
                } else {
                  if (String((s as any).locArgs?.[1] ?? '') < 15) {
                    (s as any).result = '🌤️🙂';
                  } else {
                    if (String((s as any).locArgs?.[1] ?? '') < 22) {
                      (s as any).result = '☀️😊';
                    } else {
                      if (String((s as any).locArgs?.[1] ?? '') < 28) {
                        (s as any).result = '🌞😅';
                      } else {
                        if (String((s as any).locArgs?.[1] ?? '') < 33) {
                          (s as any).result = '🔆😤';
                        } else {
                          if (String((s as any).locArgs?.[1] ?? '') < 38) {
                            (s as any).result = '🔥😡';
                          } else {
                            (s as any).result = '☢️🤬';
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            return;
          } else {
            (s as any).result = '' + ((s as any).locArgs?.[1] ?? 0) + '.' + ((s as any).locArgs?.[2] ?? 0) + '°C';
          }
        }
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') < 0) {
    (s as any).result = qspFunc(s, 'wrap', 'accent', ((s as any).result ?? 0));
  } else {
    if (String((s as any).locArgs?.[1] ?? '') < 10) {
      (s as any).result = qspFunc(s, 'wrap', 'v_pos', ((s as any).result ?? 0));
    } else {
      if (String((s as any).locArgs?.[1] ?? '') < 20) {
        (s as any).result = qspFunc(s, 'wrap', 'pos', ((s as any).result ?? 0));
      } else {
        if (String((s as any).locArgs?.[1] ?? '') < 30) {
          (s as any).result = qspFunc(s, 'wrap', 'neg', ((s as any).result ?? 0));
        } else {
          (s as any).result = qspFunc(s, 'wrap', 'v_neg', ((s as any).result ?? 0));
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterMain(s: GameState, scene: SceneBuilder): void {
  (s as any).weatherImage = '<img height = ' + ((s as any).stat_cfg ?? 0)?.['weather_height'] + ' src="images/system/weather/wthr' + ((s as any).DayStage ?? 0) + '';
  if (((s as any).temper ?? 0) < -10) {
    // TODO-QSP: $weatherImage += '1'
  } else {
    if (((s as any).temper ?? 0) <= 5) {
      // TODO-QSP: $weatherImage += '2'
    } else {
      if (((s as any).temper ?? 0) <= 19) {
        // TODO-QSP: $weatherImage += '3'
      } else {
        // TODO-QSP: $weatherImage += '4'
      }
    }
  }
  if (((s as any).weatherFall ?? 0) < 30) {
    // TODO-QSP: $weatherImage += '1'
  } else {
    if (((s as any).weatherFall ?? 0) < 60) {
      // TODO-QSP: $weatherImage += '2'
    } else {
      // TODO-QSP: $weatherImage += '3'
    }
  }
  if (((s as any).sunWeather ?? 0) === 1) {
    // TODO-QSP: $weatherImage += '1'
  } else {
    // TODO-QSP: $weatherImage += '2'
  }
  // TODO-QSP: $weatherImage += '.jpg">'
  if (((s as any).location_type ?? 0) === 'public_outdoors'  ||  ((s as any).location_type ?? 0) === 'secluded'  ||  ((s as any).location_type ?? 0) === 'event_outdoors') {
    ((s as any).location_type = (s as any).location_type ?? {})['is_outdoors'] = 1;
    qspCall(s, 'themes', 'outdoors');
    if (((s as any).sunWeather ?? 0) === 0  &&  ((s as any).mc_inventory ?? 0)?.['umbrella'] === 0) {
      // TODO-QSP: *NL 'It is raining and you do not have an umbrella.'
      if (((s as any).pcs_makeup ?? 0) > ((s as any).cosmetic_tattoo ?? 0) + 1) {
        (s as any).pcs_makeup = 0;
        scene.text(' The rain has ruined your makeup.');
      }
      if (((s as any).pcs_hairbsh ?? 0) === 1) {
        (s as any).pcs_hairbsh = 0;
        if (((s as any).curly ?? 0) > 0) {
          (s as any).curly = ((s as any).curly ?? 0) - (1);
        }
        scene.text(' Your hair is soaked.');
      }
    }
    if (((s as any).temper ?? 0) <= 0) {
      if (((s as any).Time15Minute ?? 0) > ((s as any).totminut ?? 0)) {
        (s as any).Time15Minute = ((s as any).totminut ?? 0);
      }
      if ((((s as any).totminut ?? 0) - ((s as any).Time15Minute ?? 0)) >= 15) {
        if ((!((s as any).frost ?? 0))) {
          (s as any).Time15Minute = ((s as any).totminut ?? 0);
        }
        // TODO-QSP: :Time15MinuteLoop
        if (((s as any).coatworntype ?? 0) === 'none') {
          (s as any).coatQualityBonus = 0;
        } else {
          (s as any).coatQualityBonus = ((s as any).PCoatQuality ?? 0) - 2;
        }
        if (((s as any).coatworntype ?? 0) === 'none') {
          if (((s as any).temper ?? 0) < 0) {
            (s as any).frost = ((s as any).frost ?? 0) + (1);
          }
          if (((s as any).temper ?? 0) < -20) {
            (s as any).frost = ((s as any).frost ?? 0) + (2);
          }
          if (((s as any).temper ?? 0) < -30) {
            (s as any).frost = ((s as any).frost ?? 0) + (5);
          }
          if (((s as any).pcs_energy ?? 0) < 20) {
            (s as any).frost = ((s as any).frost ?? 0) + (1);
          }
          if (((s as any).pcs_hydra ?? 0) < 20) {
            (s as any).frost = ((s as any).frost ?? 0) + (1);
          }
          if (((s as any).pantyworntype ?? 0) === 'none') {
            (s as any).frost = ((s as any).frost ?? 0) + (1);
          }
          if (((s as any).pcs_sweat ?? 0) > 20) {
            (s as any).frost = ((s as any).frost ?? 0) + (1);
          }
        } else {
          if (((s as any).temper ?? 0) < -10  &&  ((s as any).PCoatWarm ?? 0) === 1) {
            if (((s as any).temper ?? 0) < -30) {
              (s as any).frost = ((s as any).frost ?? 0) + (2);
            } else {
              (s as any).frost = ((s as any).frost ?? 0) + (1);
            }
            if (((s as any).pcs_energy ?? 0) < 20) {
              (s as any).frost = ((s as any).frost ?? 0) + (1);
            }
            if (((s as any).pcs_hydra ?? 0) < 20) {
              (s as any).frost = ((s as any).frost ?? 0) + (1);
            }
            if (((s as any).pantyworntype ?? 0) === 'none') {
              (s as any).frost = ((s as any).frost ?? 0) + (1);
            }
            if (((s as any).pcs_sweat ?? 0) > 20) {
              (s as any).frost = ((s as any).frost ?? 0) + (1);
            }
          } else {
            if (((s as any).temper ?? 0) < -20  &&  ((s as any).PCoatWarm ?? 0) === 2) {
              (s as any).frost = ((s as any).frost ?? 0) + (1);
              if (((s as any).pcs_energy ?? 0) < 20) {
                (s as any).frost = ((s as any).frost ?? 0) + (1);
              }
              if (((s as any).pcs_hydra ?? 0) < 20) {
                (s as any).frost = ((s as any).frost ?? 0) + (1);
              }
              if (((s as any).pcs_sweat ?? 0) > 20) {
                (s as any).frost = ((s as any).frost ?? 0) + (1);
              }
            } else {
              if (((s as any).temper ?? 0) < -30  &&  ((s as any).PCoatWarm ?? 0) === 3) {
                (s as any).frost = ((s as any).frost ?? 0) + (1);
              }
            }
          }
        }
        if (((s as any).frost ?? 0) >= 12) {
          (s as any).sickstage = 1;
        }
        (s as any).Time15Minute = ((s as any).Time15Minute ?? 0) + (15);
        if ((((s as any).totminut ?? 0) - ((s as any).Time15Minute ?? 0)) >= 15) {
          // TODO-QSP: jump 'Time15MinuteLoop'
        }
      }
    }
    if (((s as any).outdoors_checks ?? 0) + 15 < ((s as any).totminut ?? 0)) {
      (s as any).outdoors_checks = ((s as any).totminut ?? 0);
      if (((s as any).isprok ?? 0) === 0  &&  ((s as any).isprokp ?? 0) === 0  &&  ((s as any).mesec ?? 0) > 0  &&  ((s as any).preg ?? 0) === 0  &&  ((s as any).loc ?? 0) !== 'gad_gpyard'  &&  (((s as any).isprok_lastday ?? 0) === 0  ||  (((s as any).hour ?? 0) > 4  &&  ((s as any).isprok_lastday ?? 0) === 1))) {
        if (((s as any).pantyworntype ?? 0) === 'none') {
          if (((s as any).PCloSkirt ?? 0) > 0) {
            scene.text('<center><b>You have blood flowing down your legs and staining your clothes.</b></center>');
          } else {
            scene.text('<center><b>You have blood flowing from your snatch and staining your pants.</b></center>');
          }
        }
        qspCall(s, 'sweat', 'add', 10);
        if (((s as any).pcs_mood ?? 0) > 20) {
          qspCall(s, 'mood', 'lower', 'medium');
        }
        qspCall(s, 'clothing', 'decrease_cur_strength', (Math.floor(Math.random() * 1001) + 500));
      }
      if (((s as any).PCloInhibit ?? 0) >= ((s as any).pcs_inhib ?? 0) - 10  &&  ((s as any).loc ?? 0) !== 'gad_gpyard') {
        (s as any).exhibition_outdoors = ((s as any).exhibition_outdoors ?? 0) + (1);
        if (((s as any).pcs_inhib ?? 0) < 45  &&  ((s as any).PCloPanties ?? 0) > 0) {
          (s as any).exhibition_outdoors = ((s as any).exhibition_outdoors ?? 0) + (1);
        }
      }
      if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).loc ?? 0) !== 'gad_gpyard') {
        if (((s as any).PCloSkirt ?? 0) === 3) {
          (s as any).exhibition_outdoors = ((s as any).exhibition_outdoors ?? 0) + (1);
        } else {
          if (((s as any).PCloSkirt ?? 0) === 4) {
            (s as any).exhibition_outdoors = ((s as any).exhibition_outdoors ?? 0) + (2);
          } else {
            if (((s as any).PCloSkirt ?? 0) === 5) {
              (s as any).exhibition_outdoors = ((s as any).exhibition_outdoors ?? 0) + (3);
            } else {
              if (((s as any).PCloSkirt ?? 0) === 6) {
                (s as any).exhibition_outdoors = ((s as any).exhibition_outdoors ?? 0) + (4);
              }
            }
          }
        }
      }
    }
  } else {
    ((s as any).location_type = (s as any).location_type ?? {})['is_outdoors'] = 0;
    qspCall(s, 'themes', 'indoors');
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'set_weather_TempFall':
      enterSetWeather_TempFall(s, scene);
      break;
    case 'weather':
      enterWeather(s, scene);
      break;
    case 'get_temp_string':
      enterGetTempString(s, scene);
      break;
    case 'main':
      enterMain(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const outdoors: LocationDef = {
  name: 'outdoors',
  title: 'You have blood flowing down your legs and staining your clot',
  region: 'other',
  locationType: 'public_outdoors',
  enter: enter,
};
