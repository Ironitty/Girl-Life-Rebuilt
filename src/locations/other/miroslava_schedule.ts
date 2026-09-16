import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterIsHere(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).loc ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).loc_arg ?? 0);
  }
  (s as any).result = qspFunc(s, 'miroslava_schedule', 'here_core', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).locat ?? 0)?.['A60_loc'], ((s as any).locat ?? 0)?.['A60_arg']);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterWasHere(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).loc ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 2) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((s as any).loc_arg ?? 0);
  }
  (s as any).result = qspFunc(s, 'miroslava_schedule', 'here_core', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).locat ?? 0)?.['A60_loc_prev'], ((s as any).locat ?? 0)?.['A60_arg_prev']);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterHereCore(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'forest') {
    (s as any).result = (((s as any).locArgs?.[3] ?? 0) === 'gad_forest'  ||  ((s as any).locArgs?.[3] ?? 0) === 'gad_meadow'  ||  ((s as any).locArgs?.[3] ?? 0) === 'gad_swamp');
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'gp') {
      (s as any).result = ((String(((s as any).locArgs?.[3] ?? 0)).slice((1)-1, ((1)-1)+(6))) === 'gad_gp');
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'forest_road') {
        (s as any).result = (((s as any).locArgs?.[3] ?? 0) === 'gad_road'  ||  ((s as any).locArgs?.[3] ?? 0) === 'mitkabuh_group'  ||  (((s as any).locArgs?.[3] ?? 0) === 'bus'  &&  ((String('gadukino;gadukino_tickets').indexOf(String(((s as any).locArgs?.[4] ?? 0)))) + 1)));
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 'river') {
          (s as any).result = (((s as any).locArgs?.[3] ?? 0) === 'gad_river'  ||  ((s as any).locArgs?.[3] ?? 0) === 'gad_beach');
        } else {
          (s as any).result = (((s as any).locArgs?.[3] ?? 0) === ((s as any).locArgs?.[1] ?? 0)  &&  ((s as any).locArgs?.[4] ?? 0) === ((s as any).locArgs?.[2] ?? 0));
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetLocatFromLoc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).loc ?? 0) === 'gad_miroslava_home') {
    (s as any).result = 10;
  } else {
    if (((s as any).loc ?? 0) === 'gad_gpyard') {
      (s as any).result = 20;
    } else {
      if (((s as any).loc ?? 0) === 'gad_gphouse') {
        (s as any).result = 21;
      } else {
        if (((s as any).loc ?? 0) === 'gad_gpbath') {
          (s as any).result = 22;
        } else {
          if (((s as any).loc ?? 0) === 'gad_gpbarn') {
            (s as any).result = 23;
          } else {
            if (((s as any).loc ?? 0) === 'gadukino') {
              (s as any).result = 30;
            } else {
              if (((s as any).loc ?? 0) === 'gad_church') {
                (s as any).result = 31;
              } else {
                if (((s as any).loc ?? 0) === 'gad_road') {
                  (s as any).result = 40;
                } else {
                  if (((s as any).loc ?? 0) === 'bus'  &&  ((String('gadukino;gadukino_tickets').indexOf(String(((s as any).loc_arg ?? 0)))) + 1) > 0) {
                    (s as any).result = 41;
                  } else {
                    if (((s as any).loc ?? 0) === 'mitkabuh'  ||  ((s as any).loc ?? 0) === 'mitkabuh_group') {
                      (s as any).result = 42;
                    } else {
                      if (((s as any).loc ?? 0) === 'gad_river') {
                        (s as any).result = 50;
                      } else {
                        if (((s as any).loc ?? 0) === 'gad_beach') {
                          (s as any).result = 51;
                        } else {
                          if (((s as any).loc ?? 0) === 'gad_forest'  &&  ((s as any).loc_arg ?? 0) === 'forest_edge') {
                            (s as any).result = 60;
                          } else {
                            if (((s as any).loc ?? 0) === 'gad_meadow') {
                              (s as any).result = 61;
                            } else {
                              if (((s as any).loc ?? 0) === 'gad_forest'  &&  ((s as any).loc_arg ?? 0) === 'forest_outskirts') {
                                (s as any).result = 62;
                              } else {
                                if (((s as any).loc ?? 0) === 'gad_forest'  &&  ((s as any).loc_arg ?? 0) === 'forest_center') {
                                  (s as any).result = 63;
                                } else {
                                  if (((s as any).loc ?? 0) === 'gad_swamp') {
                                    (s as any).result = 64;
                                  } else {
                                    if (((s as any).loc ?? 0) === 'gad_field') {
                                      (s as any).result = 70;
                                    } else {
                                      if (((s as any).loc ?? 0) === 'road'  &&  ((s as any).nroad ?? 0) === 10) {
                                        (s as any).result = 80;
                                      } else {
                                        if (((s as any).loc ?? 0) === 'train'  &&  ((s as any).loc_arg ?? 0) === 'gadukino') {
                                          (s as any).result = 81;
                                        } else {
                                          if (((s as any).loc ?? 0) === 'furi'  &&  ((s as any).nroad ?? 0) === 10) {
                                            (s as any).result = 82;
                                          } else {
                                            (s as any).result = 10;
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
  // TODO-QSP: end
  scene.build();
}

function enterCikl(s: GameState, scene: SceneBuilder): void {
  ((s as any).locat = (s as any).locat ?? {})['A60_rand'] = Math.floor(Math.random() * 6) + 0;
  ((s as any).locat = (s as any).locat ?? {})['A60_prost'] = ((Math.floor(Math.random() * 3) + 0) > 0);
  // TODO-QSP: end
  scene.build();
}

function enterForceChange(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locat ?? 0)?.['A60_loc'] === 'gad_miroslava_home') {
    // TODO-QSP: exit
  }
  (s as any).temp_start_loc = ((s as any).locat ?? 0)?.['A60_loc'];
  ((s as any).MiraVars = (s as any).MiraVars ?? {})['guest'] = 0;
  ((s as any).MiraVars = (s as any).MiraVars ?? {})['follow_time'] = 0;
  ((s as any).MiraVars = (s as any).MiraVars ?? {})['follower'] = 0;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDefault(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).mss_i = 0;
  // TODO-QSP: :mira_loop_start
  if (((s as any).locat ?? 0)?.['A60_loc'] === ((s as any).temp_start_loc ?? 0)) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCikl(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterUpdateLocat(s, scene); (s as any).locArgs = __savedLocArgs; }
    (s as any).mss_i = ((s as any).mss_i ?? 0) + (1);
    if (((s as any).mss_i ?? 0) < 10) {
      // TODO-QSP: jump 'mira_loop_start'
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDefault(s: GameState, scene: SceneBuilder): void {
  ((s as any).locat = (s as any).locat ?? {})['A60_loc_prev'] = ((s as any).locat ?? 0)?.['A60_loc'];
  ((s as any).locat = (s as any).locat ?? {})['A60_arg_prev'] = ((s as any).locat ?? 0)?.['A60_arg'];
  ((s as any).locat = (s as any).locat ?? {})['A60_arg1_prev'] = ((s as any).locat ?? 0)?.['A60_arg1'];
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterUpdateLocat(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterUpdateLocat(s: GameState, scene: SceneBuilder): void {
  if (((s as any).daystart ?? 0) < ((s as any).MiraVars ?? 0)?.['emb_day']) {
    (s as any).MiraLoc = 10;
    // TODO-QSP: jump 'set_locarg'
  }
  if (((s as any).MiraVars ?? 0)?.['guest'] === 1) {
    if (((s as any).MiraVars ?? 0)?.['guestday'] <= ((s as any).daystart ?? 0)) {
      ((s as any).MiraVars = (s as any).MiraVars ?? {})['guestday'] = ((s as any).daystart ?? 0) + 1;
    }
    if ((String(((s as any).loc ?? 0)).slice((1)-1, ((1)-1)+(6))) === 'gad_gp'  ||  ((s as any).loc ?? 0) === 'gad_field') {
      ((s as any).locat = (s as any).locat ?? {})['A60_loc'] = ((s as any).loc ?? 0);
      ((s as any).locat = (s as any).locat ?? {})['A60_arg'] = ((s as any).loc_arg ?? 0);
      ((s as any).locat = (s as any).locat ?? {})['A60_arg1'] = '';
    } else {
      ((s as any).MiraVars = (s as any).MiraVars ?? {})['guest'] = 0;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterUpdateLocat(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    return;
  }
  if (((s as any).MiraVars ?? 0)?.['follower'] === 1) {
    ((s as any).MiraVars = (s as any).MiraVars ?? {})['follower'] = 0;
    (s as any).MiraLoc = qspFunc(s, 'miroslava_schedule', 'get_locat_from_loc');
    // TODO-QSP: jump 'set_locarg'
  } else {
    if (((s as any).MiraVars ?? 0)?.['follow_time'] > 0) {
      ((s as any).locat = (s as any).locat ?? {})['A60_loc'] = ((s as any).locat ?? 0)?.['A60_loc_prev'];
      ((s as any).locat = (s as any).locat ?? {})['A60_arg'] = ((s as any).locat ?? 0)?.['A60_arg_prev'];
      ((s as any).locat = (s as any).locat ?? {})['A60_arg1'] = ((s as any).locat ?? 0)?.['A60_arg1_prev'];
      return;
    }
  }
  (s as any).MiraLoc = qspFunc(s, 'miroslava_schedule', 'get_base_schedule');
  if (((s as any).hour ?? 0) <= 7) {
    (s as any).MiraLoc = 11;
    // TODO-QSP: jump 'set_locarg'
    return;
  }
  if (((s as any).npc_known ?? 0)?.['A60'] === 0  &&  ((s as any).MiraLoc ?? 0) >= 20) {
    (s as any).MiraLoc = 30;
    // TODO-QSP: !! Sveta and Mira aren''t friends yet.
  }
  if ((!((s as any).sunWeather ?? 0))) {
    if (((s as any).MiraLoc ?? 0) >= 30  &&  ((s as any).MiraLoc ?? 0) !== 42) {
      if (((s as any).MiraVars ?? 0)?.['invite_day'] >= ((s as any).daystart ?? 0)  ||  ((s as any).npc_known ?? 0)?.['A60'] === 0  ||  ((s as any).locat ?? 0)?.['A60_loc'] === 'gad_miroslava_home'  ||  ((s as any).npc_rel ?? 0)?.['A60'] < 15  ||  (((s as any).npc_QW ?? 0)?.['A63'] >= 11  &&  ((s as any).MiraVars ?? 0)?.['QW'] < 11  &&  ((s as any).MiraVars ?? 0)?.['had_sex'] <= 1)) {
        (s as any).MiraLoc = 10;
      } else {
        ((s as any).MiraVars = (s as any).MiraVars ?? {})['invite_rand'] = Math.floor(Math.random() * 2) + 0;
        ((s as any).MiraVars = (s as any).MiraVars ?? {})['invite_day'] = ((s as any).daystart ?? 0);
        if (((s as any).MiraVars ?? 0)?.['invite_rand'] === 0) {
          (s as any).MiraLoc = 20;
          ((s as any).MiraVars = (s as any).MiraVars ?? {})['follow_time'] = 2;
        } else {
          (s as any).MiraLoc = 10;
        }
      }
    }
  } else {
    if (((s as any).MiraVars ?? 0)?.['QW'] > 15  &&  ((s as any).locat ?? 0)?.['A60_prost']  &&  ((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) < 20) {
      (s as any).MiraLoc = 80;
      // TODO-QSP: !! Prostitution
    }
    if (((s as any).MiraLoc ?? 0) === 61  &&  (((s as any).MiraVars ?? 0)?.['meadow'] !== 2  &&  ((s as any).MiraVars ?? 0)?.['meadow'] !== 5)) {
      (s as any).MiraLoc = 60;
      // TODO-QSP: !! If meadow not unlocked -> Forest edge
    }
    if (((s as any).MiraLoc ?? 0) === 51  &&  (((s as any).sunWeather ?? 0) === 0  ||  ((s as any).temper ?? 0) < 15  ||  ((s as any).month ?? 0) < 5  ||  ((s as any).month ?? 0) > 9)) {
      (s as any).MiraLoc = 10;
      // TODO-QSP: !! Winter = No Beach
    }
    if (((s as any).MiraLoc ?? 0) === 42  &&  (((s as any).MiraVars ?? 0)?.['QW'] === 0  ||  ((s as any).npc_drunk ?? 0)?.['A60'] > 0)) {
      (s as any).MiraLoc = 10;
      // TODO-QSP: !! drunk or doesn''t know the guys
    }
    if ((((s as any).MiraLoc ?? 0) / 10) === 2  &&  ((s as any).grandpaQW ?? 0)?.['chore_herd_cattle'] === 1  &&  ((s as any).loc ?? 0) === 'gad_field'  &&  ((s as any).npc_rel ?? 0)?.['A60'] >= 15  &&  (((s as any).npc_QW ?? 0)?.['A63'] < 13  ||  ((s as any).MiraVars ?? 0)?.['QW'] >= 10  ||  ((s as any).MiraVars ?? 0)?.['had_sex'] > 1)) {
      (s as any).MiraLoc = 70;
    }
  }
  if (((s as any).MiraVars ?? 0)?.['guest'] === 0  &&  (((s as any).MiraLoc ?? 0) / 10 === 2)  &&  ((s as any).MiraVars ?? 0)?.['guestday'] > ((s as any).daystart ?? 0)) {
    (s as any).MiraLoc = 10;
  }
  // TODO-QSP: :set_locarg
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).MiraLoc ?? 0)]; enterSetLocarg(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterSetLocarg(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 10) {
    ((s as any).locat = (s as any).locat ?? {})['A60_loc'] = 'gad_miroslava_home';
    ((s as any).locat = (s as any).locat ?? {})['A60_arg'] = 'start';
    ((s as any).locat = (s as any).locat ?? {})['A60_arg1'] = '';
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 11) {
      ((s as any).locat = (s as any).locat ?? {})['A60_loc'] = 'gad_miroslava_home';
      ((s as any).locat = (s as any).locat ?? {})['A60_arg'] = 'start';
      ((s as any).locat = (s as any).locat ?? {})['A60_arg1'] = 'sleep';
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 20) {
        ((s as any).locat = (s as any).locat ?? {})['A60_loc'] = 'gad_gpyard';
        ((s as any).locat = (s as any).locat ?? {})['A60_arg'] = 'start';
        ((s as any).locat = (s as any).locat ?? {})['A60_arg1'] = '';
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 21) {
          ((s as any).locat = (s as any).locat ?? {})['A60_loc'] = 'gad_gphouse';
          ((s as any).locat = (s as any).locat ?? {})['A60_arg'] = 'main';
          ((s as any).locat = (s as any).locat ?? {})['A60_arg1'] = '';
        } else {
          if (((s as any).locArgs?.[1] ?? 0) === 22) {
            ((s as any).locat = (s as any).locat ?? {})['A60_loc'] = 'gad_gpbath';
            ((s as any).locat = (s as any).locat ?? {})['A60_arg'] = 'start';
            ((s as any).locat = (s as any).locat ?? {})['A60_arg1'] = '';
          } else {
            if (((s as any).locArgs?.[1] ?? 0) === 23) {
              ((s as any).locat = (s as any).locat ?? {})['A60_loc'] = 'gad_gpbarn';
              ((s as any).locat = (s as any).locat ?? {})['A60_arg'] = '';
              ((s as any).locat = (s as any).locat ?? {})['A60_arg1'] = '';
            } else {
              if (((s as any).locArgs?.[1] ?? 0) === 30) {
                ((s as any).locat = (s as any).locat ?? {})['A60_loc'] = 'gadukino';
                ((s as any).locat = (s as any).locat ?? {})['A60_arg'] = '';
                ((s as any).locat = (s as any).locat ?? {})['A60_arg1'] = '';
              } else {
                if (((s as any).locArgs?.[1] ?? 0) === 31) {
                  ((s as any).locat = (s as any).locat ?? {})['A60_loc'] = 'gad_church';
                  ((s as any).locat = (s as any).locat ?? {})['A60_arg'] = 'start';
                  ((s as any).locat = (s as any).locat ?? {})['A60_arg1'] = '';
                } else {
                  if (((s as any).locArgs?.[1] ?? 0) === 40) {
                    ((s as any).locat = (s as any).locat ?? {})['A60_loc'] = 'gad_road';
                    ((s as any).locat = (s as any).locat ?? {})['A60_arg'] = 'start';
                    ((s as any).locat = (s as any).locat ?? {})['A60_arg1'] = '';
                  } else {
                    if (((s as any).locArgs?.[1] ?? 0) === 41) {
                      ((s as any).locat = (s as any).locat ?? {})['A60_loc'] = 'bus';
                      ((s as any).locat = (s as any).locat ?? {})['A60_arg'] = 'gadukino';
                      ((s as any).locat = (s as any).locat ?? {})['A60_arg1'] = '';
                    } else {
                      if (((s as any).locArgs?.[1] ?? 0) === 42) {
                        ((s as any).locat = (s as any).locat ?? {})['A60_loc'] = 'mitkabuh_group';
                        ((s as any).locat = (s as any).locat ?? {})['A60_arg'] = 'start';
                        ((s as any).locat = (s as any).locat ?? {})['A60_arg1'] = '';
                      } else {
                        if (((s as any).locArgs?.[1] ?? 0) === 50) {
                          ((s as any).locat = (s as any).locat ?? {})['A60_loc'] = 'gad_river';
                          ((s as any).locat = (s as any).locat ?? {})['A60_arg'] = 'start';
                          ((s as any).locat = (s as any).locat ?? {})['A60_arg1'] = '';
                        } else {
                          if (((s as any).locArgs?.[1] ?? 0) === 51) {
                            ((s as any).locat = (s as any).locat ?? {})['A60_loc'] = 'gad_beach';
                            ((s as any).locat = (s as any).locat ?? {})['A60_arg'] = 'start';
                            ((s as any).locat = (s as any).locat ?? {})['A60_arg1'] = '';
                          } else {
                            if (((s as any).locArgs?.[1] ?? 0) === 60) {
                              ((s as any).locat = (s as any).locat ?? {})['A60_loc'] = 'gad_forest';
                              ((s as any).locat = (s as any).locat ?? {})['A60_arg'] = 'forest_edge';
                              ((s as any).locat = (s as any).locat ?? {})['A60_arg1'] = '';
                            } else {
                              if (((s as any).locArgs?.[1] ?? 0) === 61) {
                                ((s as any).locat = (s as any).locat ?? {})['A60_loc'] = 'gad_meadow';
                                ((s as any).locat = (s as any).locat ?? {})['A60_arg'] = 'start';
                                ((s as any).locat = (s as any).locat ?? {})['A60_arg1'] = '';
                              } else {
                                if (((s as any).locArgs?.[1] ?? 0) === 62) {
                                  ((s as any).locat = (s as any).locat ?? {})['A60_loc'] = 'gad_forest';
                                  ((s as any).locat = (s as any).locat ?? {})['A60_arg'] = 'forest_outskirts';
                                  ((s as any).locat = (s as any).locat ?? {})['A60_arg1'] = '';
                                } else {
                                  if (((s as any).locArgs?.[1] ?? 0) === 63) {
                                    ((s as any).locat = (s as any).locat ?? {})['A60_loc'] = 'gad_forest';
                                    ((s as any).locat = (s as any).locat ?? {})['A60_arg'] = 'forest_center';
                                    ((s as any).locat = (s as any).locat ?? {})['A60_arg1'] = '';
                                  } else {
                                    if (((s as any).locArgs?.[1] ?? 0) === 64) {
                                      ((s as any).locat = (s as any).locat ?? {})['A60_loc'] = 'gad_swamp';
                                      ((s as any).locat = (s as any).locat ?? {})['A60_arg'] = 'start';
                                      ((s as any).locat = (s as any).locat ?? {})['A60_arg1'] = '';
                                    } else {
                                      if (((s as any).locArgs?.[1] ?? 0) === 70) {
                                        ((s as any).locat = (s as any).locat ?? {})['A60_loc'] = 'gad_field';
                                        ((s as any).locat = (s as any).locat ?? {})['A60_arg'] = 'field';
                                        ((s as any).locat = (s as any).locat ?? {})['A60_arg1'] = '';
                                      } else {
                                        if (((s as any).locArgs?.[1] ?? 0) === 80) {
                                          ((s as any).locat = (s as any).locat ?? {})['A60_loc'] = 'gad_prostitutes';
                                          ((s as any).locat = (s as any).locat ?? {})['A60_arg'] = 'start';
                                          ((s as any).locat = (s as any).locat ?? {})['A60_arg1'] = '';
                                        } else {
                                          if (((s as any).locArgs?.[1] ?? 0) === 81) {
                                            ((s as any).locat = (s as any).locat ?? {})['A60_loc'] = 'train';
                                            ((s as any).locat = (s as any).locat ?? {})['A60_arg'] = 'gadukino';
                                            ((s as any).locat = (s as any).locat ?? {})['A60_arg1'] = '';
                                          } else {
                                            if (((s as any).locArgs?.[1] ?? 0) === 82) {
                                              ((s as any).locat = (s as any).locat ?? {})['A60_loc'] = 'furi';
                                              ((s as any).locat = (s as any).locat ?? {})['A60_arg'] = '';
                                              ((s as any).locat = (s as any).locat ?? {})['A60_arg1'] = '';
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
  }
  // TODO-QSP: end
  scene.build();
}

function enterGetBaseSchedule(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locat ?? 0)?.['A60_rand'] === 0) {
    if (((s as any).hour ?? 0) < 8) {
      (s as any).result = 10;
    } else {
      if (((s as any).hour ?? 0) < 10) {
        (s as any).result = 60;
      } else {
        if (((s as any).hour ?? 0) < 14) {
          (s as any).result = 51;
        } else {
          if (((s as any).hour ?? 0) < 16) {
            (s as any).result = 30;
          } else {
            if (((s as any).hour ?? 0) < 18) {
              (s as any).result = 61;
            } else {
              if (((s as any).hour ?? 0) < 20) {
                (s as any).result = 30;
              } else {
                (s as any).result = 42;
              }
            }
          }
        }
      }
    }
  } else {
    if (((s as any).locat ?? 0)?.['A60_rand'] === 1) {
      if (((s as any).hour ?? 0) < 10) {
        (s as any).result = 10;
      } else {
        if (((s as any).hour ?? 0) < 16) {
          (s as any).result = 51;
        } else {
          if (((s as any).hour ?? 0) < 20) {
            (s as any).result = 20;
          } else {
            (s as any).result = 10;
          }
        }
      }
    } else {
      if (((s as any).locat ?? 0)?.['A60_rand'] === 2) {
        if (((s as any).hour ?? 0) < 8) {
          (s as any).result = 10;
        } else {
          if (((s as any).hour ?? 0) < 10) {
            (s as any).result = 60;
          } else {
            if (((s as any).hour ?? 0) < 14) {
              (s as any).result = 61;
            } else {
              if (((s as any).hour ?? 0) < 16) {
                (s as any).result = 51;
              } else {
                if (((s as any).hour ?? 0) < 18) {
                  (s as any).result = 61;
                } else {
                  if (((s as any).hour ?? 0) < 20) {
                    (s as any).result = 60;
                  } else {
                    (s as any).result = 42;
                  }
                }
              }
            }
          }
        }
      } else {
        if (((s as any).locat ?? 0)?.['A60_rand'] === 3) {
          if (((s as any).hour ?? 0) < 8) {
            (s as any).result = 10;
          } else {
            if (((s as any).hour ?? 0) < 14) {
              (s as any).result = 20;
            } else {
              if (((s as any).hour ?? 0) < 18) {
                (s as any).result = 51;
              } else {
                (s as any).result = 10;
              }
            }
          }
        } else {
          if (((s as any).locat ?? 0)?.['A60_rand'] === 4) {
            if (((s as any).hour ?? 0) < 8) {
              (s as any).result = 10;
            } else {
              if (((s as any).hour ?? 0) < 10) {
                (s as any).result = 60;
              } else {
                if (((s as any).hour ?? 0) < 14) {
                  (s as any).result = 61;
                } else {
                  if (((s as any).hour ?? 0) < 20) {
                    (s as any).result = 51;
                  } else {
                    (s as any).result = 10;
                  }
                }
              }
            }
          } else {
            if (((s as any).locat ?? 0)?.['A60_rand'] === 5) {
              if (((s as any).hour ?? 0) < 8) {
                (s as any).result = 10;
              } else {
                if (((s as any).hour ?? 0) < 10) {
                  (s as any).result = 61;
                } else {
                  if (((s as any).hour ?? 0) < 14) {
                    (s as any).result = 60;
                  } else {
                    if (((s as any).hour ?? 0) < 18) {
                      (s as any).result = 30;
                    } else {
                      if (((s as any).hour ?? 0) < 20) {
                        (s as any).result = 20;
                      } else {
                        (s as any).result = 10;
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

function enterGetLocation(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterUpdateLocat(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).locat ?? 0)?.['A60_loc'] === 'gad_miroslava_home') {
    ((s as any).npcLocation = (s as any).npcLocation ?? {})['A60'] = 'Mira is at home';
  } else {
    if (((s as any).locat ?? 0)?.['A60_loc'] === 'gad_gpyard') {
      ((s as any).npcLocation = (s as any).npcLocation ?? {})['A60'] = 'Mira is in your Grandparents yard';
    } else {
      if (((s as any).locat ?? 0)?.['A60_loc'] === 'gad_gphouse') {
        ((s as any).npcLocation = (s as any).npcLocation ?? {})['A60'] = 'Mira is at your Grandparents house';
      } else {
        if (((s as any).locat ?? 0)?.['A60_loc'] === 'gadukino') {
          ((s as any).npcLocation = (s as any).npcLocation ?? {})['A60'] = 'Mira is walking around Gad';
        } else {
          if (((s as any).locat ?? 0)?.['A60_loc'] === 'gad_church') {
            ((s as any).npcLocation = (s as any).npcLocation ?? {})['A60'] = 'Mira is at the church';
          } else {
            if (((s as any).locat ?? 0)?.['A60_loc'] === 'gad_road') {
              ((s as any).npcLocation = (s as any).npcLocation ?? {})['A60'] = 'Mira at the forest road';
            } else {
              if (((s as any).locat ?? 0)?.['A60_loc'] === 'bus') {
                ((s as any).npcLocation = (s as any).npcLocation ?? {})['A60'] = 'Mira is at the bus station';
              } else {
                if (((s as any).locat ?? 0)?.['A60_loc'] === 'mitkabuh_group') {
                  ((s as any).npcLocation = (s as any).npcLocation ?? {})['A60'] = 'Mira is with the gopniks';
                } else {
                  if (((s as any).locat ?? 0)?.['A60_loc'] === 'gad_river') {
                    ((s as any).npcLocation = (s as any).npcLocation ?? {})['A60'] = 'Mira is at the river';
                  } else {
                    if (((s as any).locat ?? 0)?.['A60_loc'] === 'gad_beach') {
                      ((s as any).npcLocation = (s as any).npcLocation ?? {})['A60'] = 'Mira is at the beach';
                    } else {
                      if (((s as any).locat ?? 0)?.['A60_loc'] === 'gad_forest') {
                        if (((s as any).locat ?? 0)?.['A60_arg'] === 'forest_edge') {
                          ((s as any).npcLocation = (s as any).npcLocation ?? {})['A60'] = 'Mira is at the forest edge';
                        } else {
                          if (((s as any).locat ?? 0)?.['A60_arg'] === 'forest_outskirts') {
                            ((s as any).npcLocation = (s as any).npcLocation ?? {})['A60'] = 'Mira is in the forest outskirts';
                          } else {
                            if (((s as any).locat ?? 0)?.['A60_arg'] === 'forest_center') {
                              ((s as any).npcLocation = (s as any).npcLocation ?? {})['A60'] = 'Mira is in the center of the forest';
                            }
                          }
                        }
                      } else {
                        if (((s as any).locat ?? 0)?.['A60_loc'] === 'gad_meadow') {
                          ((s as any).npcLocation = (s as any).npcLocation ?? {})['A60'] = 'Mira is at the meadow';
                        } else {
                          if (((s as any).locat ?? 0)?.['A60_loc'] === 'gad_swamp') {
                            ((s as any).npcLocation = (s as any).npcLocation ?? {})['A60'] = 'Mira is at the swamps';
                          } else {
                            if (((s as any).locat ?? 0)?.['A60_loc'] === 'gad_field') {
                              ((s as any).npcLocation = (s as any).npcLocation ?? {})['A60'] = 'Mira is at field';
                            } else {
                              if (((s as any).locat ?? 0)?.['A60_loc'] === 'gad_prostitution') {
                                ((s as any).npcLocation = (s as any).npcLocation ?? {})['A60'] = 'Mira is at the highway';
                              } else {
                                if (((s as any).locat ?? 0)?.['A60_loc'] === 'train') {
                                  ((s as any).npcLocation = (s as any).npcLocation ?? {})['A60'] = 'Mira is at the train station';
                                } else {
                                  if (((s as any).locat ?? 0)?.['A60_loc'] === 'furi') {
                                    ((s as any).npcLocation = (s as any).npcLocation ?? {})['A60'] = 'Mira is at the lorry';
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
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'is_here':
      enterIsHere(s, scene);
      break;
    case 'was_here':
      enterWasHere(s, scene);
      break;
    case 'here_core':
      enterHereCore(s, scene);
      break;
    case 'get_locat_from_loc':
      enterGetLocatFromLoc(s, scene);
      break;
    case 'cikl':
      enterCikl(s, scene);
      break;
    case 'force_change':
      enterForceChange(s, scene);
      break;
    case 'update_locat':
      enterUpdateLocat(s, scene);
      break;
    case 'set_locarg':
      enterSetLocarg(s, scene);
      break;
    case 'get_base_schedule':
      enterGetBaseSchedule(s, scene);
      break;
    case 'getLocation':
      enterGetLocation(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const miroslava_schedule: LocationDef = {
  name: 'miroslava_schedule',
  region: 'other',
  enter: enter,
};
