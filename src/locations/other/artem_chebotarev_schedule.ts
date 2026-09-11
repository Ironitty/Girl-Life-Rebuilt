import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterIsHome(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((((s as any).locat ?? 0)?.['A2']).slice((1)-1, ((1)-1)+(4))) === 'home');
  return;
  scene.build();
}

function enterForce(s: GameState, scene: SceneBuilder): void {
  (s as any).artemLoc = 0;
  if (((s as any).locArgs?.[1] ?? 0) === 'home_hallway') {
    (s as any).artemLoc = 1;
    (s as any).locat['A2_rand1'] = ((s as any).daystart ?? 0);
    (s as any).locat['A2_save1'] = 'home_hallway';
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'home_bedroom') {
      (s as any).artemLoc = 2;
      (s as any).locat['A2_rand1'] = ((s as any).daystart ?? 0);
      (s as any).locat['A2_save1'] = 'home_bedroom';
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'home_bathroom') {
        (s as any).artemLoc = 3;
        (s as any).locat['A2_rand1'] = ((s as any).daystart ?? 0);
        (s as any).locat['A2_save1'] = 'home_bathroom';
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 'home_kitchen') {
          (s as any).artemLoc = 4;
          (s as any).locat['A2_rand1'] = ((s as any).daystart ?? 0);
          (s as any).locat['A2_save1'] = 'home_kitchen';
        } else {
          if (((s as any).locArgs?.[1] ?? 0) === 'home_livingroom') {
            (s as any).artemLoc = 5;
            (s as any).locat['A2_rand1'] = ((s as any).daystart ?? 0);
            (s as any).locat['A2_save1'] = 'home_livingroom';
          } else {
            if (((s as any).locArgs?.[1] ?? 0) === 'home_parents') {
              (s as any).artemLoc = 6;
              (s as any).locat['A2_rand1'] = ((s as any).daystart ?? 0);
              (s as any).locat['A2_save1'] = 'home_parents';
            } else {
              (s as any).locat['A2_rand1'] = ((s as any).daystart ?? 0);
              (s as any).locat['A2_save1'] = ((s as any).locArgs?.[1] ?? 0);
            }
          }
        }
      }
    }
  }
  qspCall(s, 'artem_chebotarev_schedule', 'set_schedule');
  return;
  scene.build();
}

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).locat['A2'] = '';
  (s as any).artemLoc = 0;
  qspCall(s, 'artem_chebotarev_schedule', 'set_schedule');
  return;
  scene.build();
}

function enterSetSchedule(s: GameState, scene: SceneBuilder): void {
  if (((s as any).yearstart ?? 0) === 1) {
    if ((!((s as any).kanikuli ?? 0))) {
      if (((s as any).week ?? 0) < 6) {
        if (((s as any).hour ?? 0) <  6  ||  (((s as any).hour ?? 0) === 6  &&  ((s as any).minut ?? 0) < 30)) {
          (s as any).artemLoc = 2;
          (s as any).locat['A2'] = 'home_asleep';
        } else {
          if (((s as any).hour ?? 0) === 6  &&  ((s as any).minut ?? 0) < 45) {
            (s as any).artemLoc = 3;
            (s as any).locat['A2'] = 'home_bathroom';
          } else {
            if (((s as any).hour ?? 0) < 7  ||  (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) < 15)) {
              (s as any).artemLoc = 4;
              (s as any).locat['A2'] = 'home_breakfast';
            } else {
              if (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) < 45) {
                (s as any).artemLoc = 5;
                (s as any).locat['A2'] = 'home:preparing_for_school';
              } else {
                if (((s as any).hour ?? 0) < 8) {
                  (s as any).loact['A2'] = 'walking_to_school';
                } else {
                  if (((s as any).hour ?? 0) < 14) {
                    (s as any).locat['A2'] = 'school';
                  } else {
                    if (((s as any).hour ?? 0) < 15) {
                      if (((s as any).locat ?? 0)?.['A2_rand1'] !== ((s as any).daystart ?? 0)) {
                        (s as any).locat['A2'] = 'Haninginout_outside_school';
                      } else {
                        (s as any).locat['A2'] = ((s as any).locat ?? 0)?.['A2_save1'];
                      }
                    } else {
                      if (((s as any).hour ?? 0) < 18) {
                        if (((s as any).locat ?? 0)?.['A2_rand1'] !== ((s as any).daystart ?? 0)) {
                          (s as any).locat['A2'] = 'library_nerd_study_group';
                        } else {
                          (s as any).locat['A2'] = ((s as any).locat ?? 0)?.['A2_save1'];
                        }
                      } else {
                        if (((s as any).hour ?? 0) < 20) {
                          if (((s as any).week ?? 0) !== 3) {
                            (s as any).artemLoc = 2;
                            (s as any).locat['A2'] = 'home';
                          } else {
                            (s as any).locat['A2'] = 'out';
                          }
                        } else {
                          if (((s as any).hour ?? 0) < 22) {
                            if (((s as any).nerd_game ?? 0)?.['game_day'] === ((s as any).daystart ?? 0)  ||  (((s as any).grupTipe ?? 0) !== 3  &&  ((s as any).week ?? 0) === 3)) {
                              (s as any).locat['A2'] = 'library_nerd_game_night';
                            } else {
                              if (((s as any).week ?? 0) === 3) {
                                (s as any).locat['A2'] = 'out';
                              } else {
                                (s as any).artemLoc = 2;
                                (s as any).locat['A2'] = 'home';
                              }
                            }
                          } else {
                            if (((s as any).hour ?? 0) < 23) {
                              if (((s as any).nerd_game ?? 0)?.['game_day'] === ((s as any).daystart ?? 0)  ||  (((s as any).grupTipe ?? 0) !== 3  &&  ((s as any).week ?? 0) === 3)) {
                                (s as any).locat['A2'] = 'library_nerd_game_night';
                              } else {
                                (s as any).artemLoc = 2;
                                (s as any).locat['A2'] = 'home';
                              }
                            } else {
                              (s as any).locat['A2'] = 'home_asleep';
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
      } else {
        if (((s as any).hour ?? 0) <  7  ||  (((s as any).hore ?? 0) === 7  &&  ((s as any).minut ?? 0) < 30)) {
          (s as any).artemLoc = 2;
          (s as any).locat['A2'] = 'home_asleep';
        } else {
          if (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) < 45) {
            (s as any).artemLoc = 3;
            (s as any).locat['A2'] = 'home_bathroom';
          } else {
            if (((s as any).hour ?? 0) < 8  ||  (((s as any).hour ?? 0) === 8  &&  ((s as any).minut ?? 0) < 15)) {
              (s as any).artemLoc = 4;
              (s as any).locat['A2'] = 'home_breakfast';
            } else {
              if (((s as any).hour ?? 0) < 23) {
                (s as any).artemLoc = 2;
                (s as any).locat['A2'] = 'home';
              } else {
                (s as any).artemLoc = 2;
                (s as any).locat['A2'] = 'home_asleep';
              }
            }
          }
        }
      }
    }
  } else {
    if (((s as any).university ?? 0)?.['semester_week'] > 0) {
      if (((s as any).week ?? 0) < 6) {
        if (((s as any).hour ?? 0) < 7) {
          (s as any).locat['A2'] = 'dormroom_asleep';
        } else {
          if (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) < 15) {
            (s as any).locat['A2'] = 'dorm_shared_shower';
          } else {
            if (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) < 30) {
              (s as any).locat['A2'] = 'dorm_shared_kitchen_breakfast';
            } else {
              if (((s as any).hour ?? 0) < 9) {
                (s as any).locat['A2'] = 'dormroom_studying_or_relaxing';
              } else {
                if (((s as any).hour ?? 0) < 12) {
                  if (((s as any).week ?? 0) === 5) {
                    (s as any).locat['A2'] = 'dormroom_studying_or_relaxing';
                  } else {
                    if (((s as any).hour ?? 0) === 11  &&  ((s as any).minut ?? 0) >= 30) {
                      if (((s as any).sunWeather ?? 0) === 1  &&  ((s as any).temper ?? 0) > 15) {
                        (s as any).locat['A2'] = 'uni_grounds_waiting_for_class';
                      } else {
                        (s as any).locat['A2'] = 'uni_student_center_waiting_for_class';
                      }
                    } else {
                      (s as any).locat['A2'] = 'uni_attending_class';
                    }
                  }
                } else {
                  if (((s as any).hour ?? 0) < 13) {
                    if (((s as any).minut ?? 0) < 30) {
                      if (((s as any).week ?? 0) < 5) {
                        (s as any).locat['A2'] = 'uni_attending_class';
                      } else {
                        (s as any).locat['A2'] = 'dormroom_studying_or_relaxing';
                      }
                    } else {
                      (s as any).locat['A2'] = 'uni_cafe_lunch';
                    }
                  } else {
                    if (((s as any).hour ?? 0) < 14) {
                      if (((s as any).week ?? 0) < 5) {
                        if (((s as any).minut ?? 0) < 15) {
                          if (((s as any).sunWeather ?? 0) === 1  &&  ((s as any).temper ?? 0) > 15) {
                            (s as any).locat['A2'] = 'uni_grounds_waiting_for_class';
                          } else {
                            (s as any).locat['A2'] = 'uni_student_center_waiting_for_class';
                          }
                        } else {
                          (s as any).locat['A2'] = 'uni_attending_class';
                        }
                      } else {
                        (s as any).locat['A2'] = 'dormroom_studying_or_relaxing';
                      }
                    } else {
                      if (((s as any).hour ?? 0) < 15) {
                        if (((s as any).week ?? 0) < 5) {
                          if (((s as any).minut ?? 0) > 45) {
                            if (((s as any).sunWeather ?? 0) === 1  &&  ((s as any).temper ?? 0) > 15) {
                              (s as any).locat['A2'] = 'uni_grounds_waiting_for_class';
                            } else {
                              (s as any).locat['A2'] = 'uni_student_center_waiting_for_class';
                            }
                          } else {
                            (s as any).locat['A2'] = 'uni_attending_class';
                          }
                        } else {
                          (s as any).locat['A2'] = 'dormroom_studying_or_relaxing';
                        }
                      } else {
                        if (((s as any).hour ?? 0) < 17) {
                          (s as any).locat['A2'] = 'library_studying';
                        } else {
                          if (((s as any).hour ?? 0) < 18) {
                            (s as any).locat['A2'] = 'shared_kitchen_dinner';
                          } else {
                            if (((s as any).hour ?? 0) < 22) {
                              if (((s as any).week ?? 0) % 2 === 0) {
                                (s as any).locat['A2'] = 'playing_games_at_coffee_hole_or_friends_places';
                              } else {
                                (s as any).locat['A2'] = 'dormroom_studying_or_relaxing';
                              }
                            } else {
                              (s as any).locat['A2'] = 'dormroom_asleep';
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
      } else {
        if (((s as any).week ?? 0) === 6) {
          if (((s as any).hour ?? 0) < 7) {
            (s as any).locat['A2'] = 'dormroom_asleep';
          } else {
            if (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) < 15) {
              (s as any).locat['A2'] = 'dorm_shared_shower';
            } else {
              if (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) < 30) {
                (s as any).locat['A2'] = 'dorm_shared_kitchen_breakfast';
              } else {
                if (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) < 45) {
                  (s as any).locat['A2'] = 'traveling_in_city_dorm_to_train_station';
                } else {
                  if (((s as any).hour ?? 0) < 9) {
                    (s as any).locat['A2'] = 'train_city_to_pav';
                  } else {
                    if (((s as any).hour ?? 0) === 9  &&  ((s as any).minut ?? 0) < 15) {
                      (s as any).locat['A2'] = 'walking_in_pav_station_to_five_eight';
                    } else {
                      if (((s as any).hour ?? 0) < 22) {
                        (s as any).locat['A2'] = 'parents_apartment';
                      } else {
                        if (((s as any).hour ?? 0) < 23) {
                          (s as any).locat['A2'] = 'parents_apartment_getting_ready_for_bed';
                        } else {
                          (s as any).locat['A2'] = 'parents_asleep';
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        } else {
          if (((s as any).hour ?? 0) < 7) {
            (s as any).locat['A2'] = 'parents_asleep';
          } else {
            if (((s as any).hour ?? 0) < 8) {
              (s as any).locat['A2'] = 'parents_getting_out_of_bed';
            } else {
              if (((s as any).hour ?? 0) < 17) {
                (s as any).locat['A2'] = 'parents_apartment';
              } else {
                if (((s as any).hour ?? 0) === 17  &&  ((s as any).minut ?? 0) < 15) {
                  (s as any).locat['A2'] = 'traveling_pav_five_eight_to_train_station';
                } else {
                  if (((s as any).hour ?? 0) === 17) {
                    (s as any).locat['A2'] = 'train_pav_to_city';
                  } else {
                    if (((s as any).hour ?? 0) === 18  &&  ((s as any).minut ?? 0) < 30) {
                      (s as any).locat['A2'] = 'traveling_in_city_train_station_to_dorm';
                    } else {
                      if (((s as any).hour ?? 0) < 22) {
                        (s as any).locat['A2'] = 'dormroom_studying_or_relaxing';
                      } else {
                        (s as any).locat['A2'] = 'dormroom_asleep';
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    } else {
      if (((s as any).university ?? 0)?.['exam_week'] > 0) {
        if (((s as any).week ?? 0) < 6) {
          if (((s as any).hour ?? 0) < 7) {
            (s as any).locat['A2'] = 'dormroom_asleep';
          } else {
            if (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) < 15) {
              (s as any).locat['A2'] = 'dorm_shared_shower';
            } else {
              if (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) < 30) {
                (s as any).locat['A2'] = 'dorm_shared_kitchen_breakfast';
              } else {
                if (((s as any).hour ?? 0) < 9) {
                  (s as any).locat['A2'] = 'dormroom_studying_or_relaxing';
                } else {
                  if (((s as any).hour ?? 0) < 12) {
                    if (((s as any).week ?? 0) === 4  ||  (((s as any).week ?? 0) === 2  &&  ((s as any).university ?? 0)?.['exam_week'] === 2)) {
                      (s as any).locat['A2'] = 'taking_uni_exam';
                    } else {
                      if ((((s as any).university ?? 0)?.['exam_week'] === 2  &&  ((s as any).week ?? 0) === 5)) {
                        (s as any).locat['A2'] = 'celebrating_exam_is_over';
                      } else {
                        (s as any).locat['A2'] = 'library_studying';
                      }
                    }
                  } else {
                    if (((s as any).hour ?? 0) < 13) {
                      (s as any).locat['A2'] = 'uni_cafe_lunch';
                    } else {
                      if (((s as any).hour ?? 0) < 17) {
                        if (((s as any).university ?? 0)?.['exam_week'] === 2  &&  ((s as any).week ?? 0) > 3) {
                          (s as any).locat['A2'] = 'celebrating_exam_is_over';
                        } else {
                          (s as any).locat['A2'] = 'dormroom_studying_or_relaxing';
                        }
                      } else {
                        if (((s as any).hour ?? 0) < 18) {
                          if (((s as any).university ?? 0)?.['exam_week'] === 2  &&  ((s as any).week ?? 0) > 3) {
                            (s as any).locat['A2'] = 'celebrating_exam_is_over';
                          } else {
                            (s as any).locat['A2'] = 'shared_kitchen_dinner';
                          }
                        } else {
                          if (((s as any).hour ?? 0) < 22) {
                            if (((s as any).week ?? 0) % 2 === 0) {
                              (s as any).locat['A2'] = 'playing_games_at_coffee_hole_or_friends_places';
                            } else {
                              if (((s as any).university ?? 0)?.['exam_week'] === 2  &&  ((s as any).week ?? 0) === 5) {
                                (s as any).locat['A2'] = 'celebrating_exam_is_over';
                              } else {
                                (s as any).locat['A2'] = 'dormroom_studying_or_relaxing';
                              }
                            }
                          } else {
                            (s as any).locat['A2'] = 'dormroom_asleep';
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        } else {
          if (((s as any).week ?? 0) === 6) {
            if (((s as any).hour ?? 0) < 7) {
              (s as any).locat['A2'] = 'dormroom_asleep';
            } else {
              if (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) < 15) {
                (s as any).locat['A2'] = 'dorm_shared_shower';
              } else {
                if (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) < 30) {
                  (s as any).locat['A2'] = 'dorm_shared_kitchen_breakfast';
                } else {
                  if (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) < 45) {
                    (s as any).locat['A2'] = 'traveling_in_city_dorm_to_train_station';
                  } else {
                    if (((s as any).hour ?? 0) < 9) {
                      (s as any).locat['A2'] = 'train_city_to_pav';
                    } else {
                      if (((s as any).hour ?? 0) === 9  &&  ((s as any).minut ?? 0) < 15) {
                        (s as any).locat['A2'] = 'walking_in_pav_station_to_five_eight';
                      } else {
                        if (((s as any).hour ?? 0) < 22) {
                          (s as any).locat['A2'] = 'parents_apartment';
                        } else {
                          if (((s as any).hour ?? 0) < 23) {
                            (s as any).locat['A2'] = 'parents_apartment_getting_ready_for_bed';
                          } else {
                            (s as any).locat['A2'] = 'parents_asleep';
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          } else {
            if (((s as any).hour ?? 0) < 7) {
              (s as any).locat['A2'] = 'parents_asleep';
            } else {
              if (((s as any).hour ?? 0) < 8) {
                (s as any).locat['A2'] = 'parents_getting_out_of_bed';
              } else {
                if (((s as any).hour ?? 0) < 21) {
                  (s as any).locat['A2'] = 'parents_apartment';
                } else {
                  if (((s as any).hour ?? 0) === 21  &&  ((s as any).minut ?? 0) < 45) {
                    (s as any).locat['A2'] = 'traveling_pav_five_eight_to_train_station';
                  } else {
                    if (((s as any).hour ?? 0) === 21  ||  (((s as any).hour ?? 0) === 22  &&  ((s as any).minut ?? 0) < 15)) {
                      (s as any).locat['A2'] = 'train_pav_to_city';
                    } else {
                      if (((s as any).hour ?? 0) === 22  &&  ((s as any).minut ?? 0) < 20) {
                        (s as any).locat['A2'] = 'traveling_in_city_train_station_to_dorm';
                      } else {
                        (s as any).locat['A2'] = 'dormroom_asleep';
                      }
                    }
                  }
                }
              }
            }
          }
        }
      } else {
        if (((s as any).week ?? 0) < 6) {
          if (((s as any).hour ?? 0) < 7) {
            (s as any).locat['A2'] = 'dormroom_asleep';
          } else {
            if (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) < 15) {
              (s as any).locat['A2'] = 'dorm_shared_shower';
            } else {
              if (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) < 30) {
                (s as any).locat['A2'] = 'dorm_shared_kitchen_breakfast';
              } else {
                if (((s as any).hour ?? 0) < 12) {
                  (s as any).locat['A2'] = 'dormroom_studying_or_relaxing';
                } else {
                  if (((s as any).hour ?? 0) < 13) {
                    (s as any).locat['A2'] = 'uni_cafe_lunch';
                  } else {
                    if (((s as any).hour ?? 0) < 17) {
                      (s as any).locat['A2'] = 'dormroom_studying_or_relaxing';
                    } else {
                      if (((s as any).hour ?? 0) < 18) {
                        (s as any).locat['A2'] = 'shared_kitchen_dinner';
                      } else {
                        if (((s as any).hour ?? 0) < 22) {
                          if (((s as any).week ?? 0) % 2 === 0) {
                            (s as any).locat['A2'] = 'playing_games_at_coffee_hole_or_friends_places';
                          } else {
                            (s as any).locat['A2'] = 'dormroom_studying_or_relaxing';
                          }
                        } else {
                          (s as any).locat['A2'] = 'dormroom_asleep';
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        } else {
          if (((s as any).week ?? 0) === 6) {
            if (((s as any).hour ?? 0) < 7) {
              (s as any).locat['A2'] = 'dormroom_asleep';
            } else {
              if (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) < 15) {
                (s as any).locat['A2'] = 'dorm_shared_shower';
              } else {
                if (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) < 30) {
                  (s as any).locat['A2'] = 'dorm_shared_kitchen_breakfast';
                } else {
                  if (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) < 45) {
                    (s as any).locat['A2'] = 'traveling_in_city_dorm_to_train_station';
                  } else {
                    if (((s as any).hour ?? 0) < 9) {
                      (s as any).locat['A2'] = 'train_city_to_pav';
                    } else {
                      if (((s as any).hour ?? 0) === 9  &&  ((s as any).minut ?? 0) < 15) {
                        (s as any).locat['A2'] = 'walking_in_pav_station_to_five_eight';
                      } else {
                        if (((s as any).hour ?? 0) < 22) {
                          (s as any).locat['A2'] = 'parents_apartment';
                        } else {
                          if (((s as any).hour ?? 0) < 23) {
                            (s as any).locat['A2'] = 'parents_apartment_getting_ready_for_bed';
                          } else {
                            (s as any).locat['A2'] = 'parents_asleep';
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          } else {
            if (((s as any).hour ?? 0) < 7) {
              (s as any).locat['A2'] = 'parents_asleep';
            } else {
              if (((s as any).hour ?? 0) < 8) {
                (s as any).locat['A2'] = 'parents_getting_out_of_bed';
              } else {
                if (((s as any).hour ?? 0) < 17) {
                  (s as any).locat['A2'] = 'parents_apartment';
                } else {
                  if (((s as any).hour ?? 0) === 17  &&  ((s as any).minut ?? 0) < 15) {
                    (s as any).locat['A2'] = 'traveling_pav_five_eight_to_train_station';
                  } else {
                    if (((s as any).hour ?? 0) === 17) {
                      (s as any).locat['A2'] = 'train_pav_to_city';
                    } else {
                      if (((s as any).hour ?? 0) === 18  &&  ((s as any).minut ?? 0) < 30) {
                        (s as any).locat['A2'] = 'traveling_in_city_train_station_to_dorm';
                      } else {
                        if (((s as any).hour ?? 0) < 22) {
                          (s as any).locat['A2'] = 'dormroom_studying_or_relaxing';
                        } else {
                          (s as any).locat['A2'] = 'dormroom_asleep';
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
    case 'is_home':
      enterIsHome(s, scene);
      break;
    case 'force':
      enterForce(s, scene);
      break;
    case 'set_schedule':
      enterSetSchedule(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const artem_chebotarev_schedule: LocationDef = {
  name: 'artem_chebotarev_schedule',
  region: 'other',
  enter: enter,
};
