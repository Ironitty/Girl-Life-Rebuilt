import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGetProgramName(s: GameState, scene: SceneBuilder): void {
  if (((s as any).university ?? 0)?.['enrolled_in'] === 'nursing') {
    (s as any).result = 'nursing';
  } else {
    if (((s as any).university ?? 0)?.['enrolled_in'] === 'teaching_studies') {
      (s as any).result = 'teaching studies';
    }
  }
  return;
  scene.build();
}

function enterProgramName(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'uni_programs', 'get_program_name');
  return;
  scene.build();
}

function enterGetFirstPeriod(s: GameState, scene: SceneBuilder): void {
  if (((s as any).university ?? 0)?.['enrolled_in'] === 'nursing') {
    (s as any).result = qspFunc(s, 'uni_programs', 'get_first_period_nursing', ((s as any).locArgs?.[1] ?? 0));
  } else {
    if (((s as any).university ?? 0)?.['enrolled_in'] === 'teaching_studies') {
      (s as any).result = qspFunc(s, 'uni_programs', 'get_first_period_teaching', ((s as any).locArgs?.[1] ?? 0));
    }
  }
  return;
  scene.build();
}

function enterGetFirstPeriodNursing(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_up_timestamp = qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 10, 30);
  if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 1) {
    if (String((s as any).locArgs?.[1] ?? '') === 'monday') {
      (s as any).result = 'Patient Care 101 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'tuesday') {
        (s as any).result = 'Anatomy and Physiology 101 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 'wednesday') {
          (s as any).result = 'Examination and Treatment 101 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 'thursday') {
            (s as any).result = 'Patient Care 101 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
          }
        }
      }
    }
  } else {
    if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 2) {
      if (String((s as any).locArgs?.[1] ?? '') === 'monday') {
        (s as any).result = 'Patient Care 102 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 'tuesday') {
          (s as any).result = 'Anatomy and Physiology 102 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 'wednesday') {
            (s as any).result = 'Examination and Treatment 102 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
          } else {
            if (String((s as any).locArgs?.[1] ?? '') === 'thursday') {
              (s as any).result = 'Patient Care 102 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
            }
          }
        }
      }
    } else {
      if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 3) {
        if (String((s as any).locArgs?.[1] ?? '') === 'monday') {
          (s as any).result = 'Patient Care 201 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 'tuesday') {
            (s as any).result = 'Anatomy and Physiology 201 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
          } else {
            if (String((s as any).locArgs?.[1] ?? '') === 'wednesday') {
              (s as any).result = 'Dosages and Pharmaceuticals 101 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
            } else {
              if (String((s as any).locArgs?.[1] ?? '') === 'thursday') {
                (s as any).result = 'Patient Care 201 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
              }
            }
          }
        }
      } else {
        if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 4) {
          if (String((s as any).locArgs?.[1] ?? '') === 'monday') {
            (s as any).result = 'Patient Care 202 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
          } else {
            if (String((s as any).locArgs?.[1] ?? '') === 'tuesday') {
              (s as any).result = 'Anatomy and Physiology 202 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
            } else {
              if (String((s as any).locArgs?.[1] ?? '') === 'wednesday') {
                (s as any).result = 'Dosages and Pharmaceuticals 102 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
              } else {
                if (String((s as any).locArgs?.[1] ?? '') === 'thursday') {
                  (s as any).result = 'Patient Care 202 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
                }
              }
            }
          }
        }
      }
    }
  }
  (s as any).temp_up_timestamp = undefined;
  return;
  scene.build();
}

function enterGetFirstPeriodTeaching(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_up_timestamp = qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 10, 30);
  if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 1) {
    if (String((s as any).locArgs?.[1] ?? '') === 'monday') {
      (s as any).result = 'General Education 101 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'tuesday') {
        (s as any).result = 'General Education 101 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 'wednesday') {
          (s as any).result = 'General Education 101 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 'thursday') {
            (s as any).result = 'Teaching Methods 101 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
          }
        }
      }
    }
  } else {
    if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 2) {
      if (String((s as any).locArgs?.[1] ?? '') === 'monday') {
        (s as any).result = 'General Education 102 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 'tuesday') {
          (s as any).result = 'General Education 102 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 'wednesday') {
            (s as any).result = 'General Education 102 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
          } else {
            if (String((s as any).locArgs?.[1] ?? '') === 'thursday') {
              (s as any).result = 'Teaching Methods 102 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
            }
          }
        }
      }
    } else {
      if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 3) {
        if (String((s as any).locArgs?.[1] ?? '') === 'monday') {
          (s as any).result = 'General Education 201 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 'tuesday') {
            (s as any).result = 'General Education 201 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
          } else {
            if (String((s as any).locArgs?.[1] ?? '') === 'wednesday') {
              (s as any).result = 'General Education 201 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
            } else {
              if (String((s as any).locArgs?.[1] ?? '') === 'thursday') {
                (s as any).result = 'Assessment 201 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
              }
            }
          }
        }
      } else {
        if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 4) {
          if (String((s as any).locArgs?.[1] ?? '') === 'monday') {
            (s as any).result = 'General Education 202 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
          } else {
            if (String((s as any).locArgs?.[1] ?? '') === 'tuesday') {
              (s as any).result = 'General Education 202 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
            } else {
              if (String((s as any).locArgs?.[1] ?? '') === 'wednesday') {
                (s as any).result = 'General Education 202 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
              } else {
                if (String((s as any).locArgs?.[1] ?? '') === 'thursday') {
                  (s as any).result = 'Learning Theories 202 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
                }
              }
            }
          }
        }
      }
    }
  }
  (s as any).temp_up_timestamp = undefined;
  return;
  scene.build();
}

function enterGetSecondPeriod(s: GameState, scene: SceneBuilder): void {
  if (((s as any).university ?? 0)?.['enrolled_in'] === 'nursing') {
    (s as any).result = qspFunc(s, 'uni_programs', 'get_second_period_nursing', ((s as any).locArgs?.[1] ?? 0));
  } else {
    if (((s as any).university ?? 0)?.['enrolled_in'] === 'teaching_studies') {
      (s as any).result = qspFunc(s, 'uni_programs', 'get_second_period_teaching', ((s as any).locArgs?.[1] ?? 0));
    }
  }
  return;
  scene.build();
}

function enterGetSecondPeriodNursing(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_up_timestamp = qspFunc(s, 'time', 'get_time_string', 11, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 30);
  if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 1) {
    if (String((s as any).locArgs?.[1] ?? '') === 'monday') {
      (s as any).result = 'Anatomy and Physiology 101 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'tuesday') {
        (s as any).result = 'Patient Care 101 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 'wednesday') {
          (s as any).result = 'Patient Care 101 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 'thursday') {
            (s as any).result = 'Anatomy and Physiology 101 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
          }
        }
      }
    }
  } else {
    if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 2) {
      if (String((s as any).locArgs?.[1] ?? '') === 'monday') {
        (s as any).result = 'Anatomy and Physiology 102 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 'tuesday') {
          (s as any).result = 'Patient Care 102 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 'wednesday') {
            (s as any).result = 'Patient Care 102 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
          } else {
            if (String((s as any).locArgs?.[1] ?? '') === 'thursday') {
              (s as any).result = 'Anatomy and Physiology 102 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
            }
          }
        }
      }
    } else {
      if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 3) {
        if (String((s as any).locArgs?.[1] ?? '') === 'monday') {
          (s as any).result = 'Anatomy and Physiology 201 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 'tuesday') {
            (s as any).result = 'Patient Care 201 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
          } else {
            if (String((s as any).locArgs?.[1] ?? '') === 'wednesday') {
              (s as any).result = 'Patient Care 201 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
            } else {
              if (String((s as any).locArgs?.[1] ?? '') === 'thursday') {
                (s as any).result = 'Anatomy and Physiology 201 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
              }
            }
          }
        }
      } else {
        if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 4) {
          if (String((s as any).locArgs?.[1] ?? '') === 'monday') {
            (s as any).result = 'Anatomy and Physiology 202 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
          } else {
            if (String((s as any).locArgs?.[1] ?? '') === 'tuesday') {
              (s as any).result = 'Patient Care 202 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
            } else {
              if (String((s as any).locArgs?.[1] ?? '') === 'wednesday') {
                (s as any).result = 'Patient Care 202 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
              } else {
                if (String((s as any).locArgs?.[1] ?? '') === 'thursday') {
                  (s as any).result = 'Anatomy and Physiology 202 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
                }
              }
            }
          }
        }
      }
    }
  }
  (s as any).temp_up_timestamp = undefined;
  return;
  scene.build();
}

function enterGetSecondPeriodTeaching(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_up_timestamp = qspFunc(s, 'time', 'get_time_string', 11, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 30);
  if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 1) {
    if (String((s as any).locArgs?.[1] ?? '') === 'monday') {
      (s as any).result = 'Teaching Methods 101 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'tuesday') {
        (s as any).result = 'Learning Theories 101 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 'wednesday') {
          (s as any).result = 'Teaching Methods 101 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 'thursday') {
            (s as any).result = 'Learning Theories 101 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
          }
        }
      }
    }
  } else {
    if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 2) {
      if (String((s as any).locArgs?.[1] ?? '') === 'monday') {
        (s as any).result = 'Teaching Methods 102 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 'tuesday') {
          (s as any).result = 'Psychology of a Student 101 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 'wednesday') {
            (s as any).result = 'Teaching Methods 102 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
          } else {
            if (String((s as any).locArgs?.[1] ?? '') === 'thursday') {
              (s as any).result = 'Psychology of a Student 101 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
            }
          }
        }
      }
    } else {
      if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 3) {
        if (String((s as any).locArgs?.[1] ?? '') === 'monday') {
          (s as any).result = 'Assessment 201 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 'tuesday') {
            (s as any).result = 'Learning Theories 201 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
          } else {
            if (String((s as any).locArgs?.[1] ?? '') === 'wednesday') {
              (s as any).result = 'Assessment 201 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
            } else {
              if (String((s as any).locArgs?.[1] ?? '') === 'thursday') {
                (s as any).result = 'Learning Theories 201 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
              }
            }
          }
        }
      } else {
        if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 4) {
          if (String((s as any).locArgs?.[1] ?? '') === 'monday') {
            (s as any).result = 'Learning Theories 202 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
          } else {
            if (String((s as any).locArgs?.[1] ?? '') === 'tuesday') {
              (s as any).result = 'Psychology of a Student 201 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
            } else {
              if (String((s as any).locArgs?.[1] ?? '') === 'wednesday') {
                (s as any).result = 'Learning Theories 202 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
              } else {
                if (String((s as any).locArgs?.[1] ?? '') === 'thursday') {
                  (s as any).result = 'Psychology of a Student 201 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
                }
              }
            }
          }
        }
      }
    }
  }
  (s as any).temp_up_timestamp = undefined;
  return;
  scene.build();
}

function enterGetThirdPeriod(s: GameState, scene: SceneBuilder): void {
  if (((s as any).university ?? 0)?.['enrolled_in'] === 'nursing') {
    (s as any).result = qspFunc(s, 'uni_programs', 'get_third_period_nursing', ((s as any).locArgs?.[1] ?? 0));
  } else {
    if (((s as any).university ?? 0)?.['enrolled_in'] === 'teaching_studies') {
      (s as any).result = qspFunc(s, 'uni_programs', 'get_third_period_teaching', ((s as any).locArgs?.[1] ?? 0));
    }
  }
  return;
  scene.build();
}

function enterGetThirdPeriodNursing(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_up_timestamp = qspFunc(s, 'time', 'get_time_string', 13, 15) + ' to ' + qspFunc(s, 'time', 'get_time_string', 14, 45);
  if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 1) {
    if (String((s as any).locArgs?.[1] ?? '') === 'monday') {
      if (((s as any).university ?? 0)?.['elective_semester_1_1'] !== '') {
        (s as any).result = '' + (((s as any).university ?? 0)?.['elective_semester_1_1']) + ' ' + ((s as any).temp_up_timestamp ?? 0) + '';
      }
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'tuesday') {
        if (((s as any).university ?? 0)?.['elective_semester_1_2'] !== '') {
          (s as any).result = '' + (((s as any).university ?? 0)?.['elective_semester_1_2']) + ' ' + ((s as any).temp_up_timestamp ?? 0) + '';
        }
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 'wednesday') {
          (s as any).result = 'Anatomy and Physiology 101 ' + ((s as any).temp_up_timestamp ?? 0) + '';
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 'thursday') {
            if (((s as any).university ?? 0)?.['elective_semester_1_3'] !== '') {
              (s as any).result = '' + (((s as any).university ?? 0)?.['elective_semester_1_3']) + ' ' + ((s as any).temp_up_timestamp ?? 0) + '';
            }
          }
        }
      }
    }
  } else {
    if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 2) {
      if (String((s as any).locArgs?.[1] ?? '') === 'monday') {
        if (((s as any).university ?? 0)?.['elective_semester_2_1'] !== '') {
          (s as any).result = '' + (((s as any).university ?? 0)?.['elective_semester_2_1']) + ' ' + ((s as any).temp_up_timestamp ?? 0) + '';
        }
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 'tuesday') {
          if (((s as any).university ?? 0)?.['elective_semester_2_2'] !== '') {
            (s as any).result = '' + (((s as any).university ?? 0)?.['elective_semester_2_2']) + ' ' + ((s as any).temp_up_timestamp ?? 0) + '';
          }
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 'wednesday') {
            (s as any).result = 'Anatomy and Physiology 102 ' + ((s as any).temp_up_timestamp ?? 0) + '';
          } else {
            if (String((s as any).locArgs?.[1] ?? '') === 'thursday') {
              if (((s as any).university ?? 0)?.['elective_semester_2_3'] !== '') {
                (s as any).result = '' + (((s as any).university ?? 0)?.['elective_semester_2_3']) + ' ' + ((s as any).temp_up_timestamp ?? 0) + '';
              }
            }
          }
        }
      }
    } else {
      if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 3) {
        if (String((s as any).locArgs?.[1] ?? '') === 'monday') {
          if (((s as any).university ?? 0)?.['elective1'] !== '') {
            (s as any).result = '' + (((s as any).university ?? 0)?.['elective_3_1']) + ' ' + ((s as any).temp_up_timestamp ?? 0) + '';
          }
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 'tuesday') {
            if (((s as any).university ?? 0)?.['elective2'] !== '') {
              (s as any).result = '' + (((s as any).university ?? 0)?.['elective_3_2']) + ' ' + ((s as any).temp_up_timestamp ?? 0) + '';
            }
          } else {
            if (String((s as any).locArgs?.[1] ?? '') === 'wednesday') {
              (s as any).result = 'Anatomy and Physiology 201 ' + ((s as any).temp_up_timestamp ?? 0) + '';
            } else {
              if (String((s as any).locArgs?.[1] ?? '') === 'thursday') {
                if (((s as any).university ?? 0)?.['elective3'] !== '') {
                  (s as any).result = '' + (((s as any).university ?? 0)?.['elective_3_3']) + ' ' + ((s as any).temp_up_timestamp ?? 0) + '';
                }
              }
            }
          }
        }
      } else {
        if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 4) {
          if (String((s as any).locArgs?.[1] ?? '') === 'monday') {
            if (((s as any).university ?? 0)?.['elective1'] !== '') {
              (s as any).result = '' + (((s as any).university ?? 0)?.['elective_4_1']) + ' ' + ((s as any).temp_up_timestamp ?? 0) + '';
            }
          } else {
            if (String((s as any).locArgs?.[1] ?? '') === 'tuesday') {
              if (((s as any).university ?? 0)?.['elective2'] !== '') {
                (s as any).result = '' + (((s as any).university ?? 0)?.['elective_4_2']) + ' ' + ((s as any).temp_up_timestamp ?? 0) + '';
              }
            } else {
              if (String((s as any).locArgs?.[1] ?? '') === 'wednesday') {
                (s as any).result = 'Anatomy and Physiology 202 ' + ((s as any).temp_up_timestamp ?? 0) + '';
              } else {
                if (String((s as any).locArgs?.[1] ?? '') === 'thursday') {
                  if (((s as any).university ?? 0)?.['elective3'] !== '') {
                    (s as any).result = '' + (((s as any).university ?? 0)?.['elective_4_3']) + ' ' + ((s as any).temp_up_timestamp ?? 0) + '';
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  (s as any).temp_up_timestamp = undefined;
  return;
  scene.build();
}

function enterGetThirdPeriodTeaching(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_up_timestamp = qspFunc(s, 'time', 'get_time_string', 13, 15) + ' to ' + qspFunc(s, 'time', 'get_time_string', 14, 45);
  if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 1) {
    if (String((s as any).locArgs?.[1] ?? '') === 'monday') {
      if (((s as any).university ?? 0)?.['elective_semester_1_1'] !== '') {
        (s as any).result = '' + (((s as any).university ?? 0)?.['elective_semester_1_1']) + ' (' + ((s as any).temp_up_timestamp ?? 0) + ')';
      }
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'tuesday') {
        if (((s as any).university ?? 0)?.['elective_semester_1_2'] !== '') {
          (s as any).result = '' + (((s as any).university ?? 0)?.['elective_semester_1_2']) + ' (' + ((s as any).temp_up_timestamp ?? 0) + ')';
        }
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 'wednesday') {
          (s as any).result = 'Learning Theories 101 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 'thursday') {
            if (((s as any).university ?? 0)?.['elective_semester_1_3'] !== '') {
              (s as any).result = '' + (((s as any).university ?? 0)?.['elective_semester_1_3']) + ' (' + ((s as any).temp_up_timestamp ?? 0) + ')';
            }
          }
        }
      }
    }
  } else {
    if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 2) {
      if (String((s as any).locArgs?.[1] ?? '') === 'monday') {
        if (((s as any).university ?? 0)?.['elective_semester_2_1'] !== '') {
          (s as any).result = '' + (((s as any).university ?? 0)?.['elective_semester_2_1']) + ' (' + ((s as any).temp_up_timestamp ?? 0) + ')';
        }
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 'tuesday') {
          if (((s as any).university ?? 0)?.['elective_semester_2_2'] !== '') {
            (s as any).result = '' + (((s as any).university ?? 0)?.['elective_semester_2_2']) + ' (' + ((s as any).temp_up_timestamp ?? 0) + ')';
          }
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 'wednesday') {
            (s as any).result = 'Psychology of a Student 101 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
          } else {
            if (String((s as any).locArgs?.[1] ?? '') === 'thursday') {
              if (((s as any).university ?? 0)?.['elective_semester_2_3'] !== '') {
                (s as any).result = '' + (((s as any).university ?? 0)?.['elective_semester_2_3']) + ' (' + ((s as any).temp_up_timestamp ?? 0) + ')';
              }
            }
          }
        }
      }
    } else {
      if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 3) {
        if (String((s as any).locArgs?.[1] ?? '') === 'monday') {
          if (((s as any).university ?? 0)?.['elective1'] !== '') {
            (s as any).result = '' + (((s as any).university ?? 0)?.['elective_3_1']) + ' (' + ((s as any).temp_up_timestamp ?? 0) + ')';
          }
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 'tuesday') {
            if (((s as any).university ?? 0)?.['elective2'] !== '') {
              (s as any).result = '' + (((s as any).university ?? 0)?.['elective_3_2']) + ' (' + ((s as any).temp_up_timestamp ?? 0) + ')';
            }
          } else {
            if (String((s as any).locArgs?.[1] ?? '') === 'wednesday') {
              (s as any).result = 'Learning Theories 201 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
            } else {
              if (String((s as any).locArgs?.[1] ?? '') === 'thursday') {
                if (((s as any).university ?? 0)?.['elective3'] !== '') {
                  (s as any).result = '' + (((s as any).university ?? 0)?.['elective_3_3']) + ' (' + ((s as any).temp_up_timestamp ?? 0) + ')';
                }
              }
            }
          }
        }
      } else {
        if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 4) {
          if (String((s as any).locArgs?.[1] ?? '') === 'monday') {
            if (((s as any).university ?? 0)?.['elective_4_1'] !== '') {
              (s as any).result = '' + (((s as any).university ?? 0)?.['elective_4_1']) + ' (' + ((s as any).temp_up_timestamp ?? 0) + ')';
            }
          } else {
            if (String((s as any).locArgs?.[1] ?? '') === 'tuesday') {
              if (((s as any).university ?? 0)?.['elective2'] !== '') {
                (s as any).result = '' + (((s as any).university ?? 0)?.['elective_4_2']) + ' (' + ((s as any).temp_up_timestamp ?? 0) + ')';
              }
            } else {
              if (String((s as any).locArgs?.[1] ?? '') === 'wednesday') {
                (s as any).result = 'Psychology of a Student 201 (' + ((s as any).temp_up_timestamp ?? 0) + ')';
              } else {
                if (String((s as any).locArgs?.[1] ?? '') === 'thursday') {
                  if (((s as any).university ?? 0)?.['elective3'] !== '') {
                    (s as any).result = '' + (((s as any).university ?? 0)?.['elective_4_3']) + ' (' + ((s as any).temp_up_timestamp ?? 0) + ')';
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

function enterSetFirstPeriodAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).university ?? 0)?.['enrolled_in'] === 'nursing') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetFirstPeriodActNursing(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).university ?? 0)?.['enrolled_in'] === 'teaching_studies') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetFirstPeriodActTeaching(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  return;
  scene.build();
}

function enterSetFirstPeriodActNursing(s: GameState, scene: SceneBuilder): void {
  if (((s as any).university ?? 0)?.['enrolled_in_semester'] < 1  ||  ((s as any).university ?? 0)?.['enrolled_in_semester'] > 4) {
    return;
  }
  if (((s as any).week ?? 0) > 4) {
    return;
  }
  scene.text('\'Your next class will start at 9:00. You can go to it now or do other things first, but you need to be at the university plaza before it starts if you want to attend it.\'');
  if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 1) {
    if (((s as any).week ?? 0) === 1  ||  ((s as any).week ?? 0) === 4) {
      scene.actions([
        { label: 'Go to your Patient Care 101 class', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (9 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    ((st as any).uni_period = (st as any).uni_period ?? {})['first'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons1', 'patient_care_101');
  } },
      ]);
    } else {
      if (((s as any).week ?? 0) === 2) {
        scene.actions([
          { label: 'Go to your Anatomy and Physiology 101 class', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (9 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    ((st as any).uni_period = (st as any).uni_period ?? {})['first'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons1', 'anatomy_and_physiology_101');
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Go to your Examination and Treatment 101 class', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (9 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    ((st as any).uni_period = (st as any).uni_period ?? {})['first'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons1', 'examination_and_treatment_101');
  } },
        ]);
      }
    }
  } else {
    if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 2) {
      if (((s as any).week ?? 0) === 1  ||  ((s as any).week ?? 0) === 4) {
        scene.actions([
          { label: 'Go to your Patient Care 102 class', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (9 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    ((st as any).uni_period = (st as any).uni_period ?? {})['first'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons2', 'patient_care_102');
  } },
        ]);
      } else {
        if (((s as any).week ?? 0) === 2) {
          scene.actions([
            { label: 'Go to your Anatomy and Physiology 102 class', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (9 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    ((st as any).uni_period = (st as any).uni_period ?? {})['first'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons2', 'anatomy_and_physiology_102');
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Go to your Examination and Treatment 102 class', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (9 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    ((st as any).uni_period = (st as any).uni_period ?? {})['first'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons2', 'examination_and_treatment_102');
  } },
          ]);
        }
      }
    } else {
      if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 3) {
        if (((s as any).week ?? 0) === 1  ||  ((s as any).week ?? 0) === 4) {
          scene.actions([
            { label: 'Go to your Patient Care 201 class', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (9 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    ((st as any).uni_period = (st as any).uni_period ?? {})['first'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons3', 'patient_care_201');
  } },
          ]);
        } else {
          if (((s as any).week ?? 0) === 2) {
            scene.actions([
              { label: 'Go to your Anatomy and Physiology 201 class', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (9 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    ((st as any).uni_period = (st as any).uni_period ?? {})['first'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons3', 'anatomy_and_physiology_201');
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Go to your Dosages and Pharmaceuticals 101 class', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (9 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    ((st as any).uni_period = (st as any).uni_period ?? {})['first'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons3', 'dosages_and_pharmaceuticals_101');
  } },
            ]);
          }
        }
      } else {
        if (((s as any).week ?? 0) === 1  ||  ((s as any).week ?? 0) === 4) {
          scene.actions([
            { label: 'Go to your Patient Care 202 class', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (9 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    ((st as any).uni_period = (st as any).uni_period ?? {})['first'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons4', 'patient_care_202');
  } },
          ]);
        } else {
          if (((s as any).week ?? 0) === 2) {
            scene.actions([
              { label: 'Go to your Anatomy and Physiology 202 class', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (9 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    ((st as any).uni_period = (st as any).uni_period ?? {})['first'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons4', 'anatomy_and_physiology_202');
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Go to your Dosages and Pharmaceuticals 102 class', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (9 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    ((st as any).uni_period = (st as any).uni_period ?? {})['first'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons4', 'dosages_and_pharmaceuticals_102');
  } },
            ]);
          }
        }
      }
    }
  }
  return;
  scene.build();
}

function enterSetFirstPeriodActTeaching(s: GameState, scene: SceneBuilder): void {
  if (((s as any).university ?? 0)?.['enrolled_in_semester'] < 1  ||  ((s as any).university ?? 0)?.['enrolled_in_semester'] > 4) {
    return;
  }
  if (((s as any).week ?? 0) > 4) {
    return;
  }
  scene.text('\'Your next class will start at 9:00. You can go to it now or do other things first, but you need to be at the university plaza before it starts if you want to attend it.\'');
  if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 1) {
    if (((s as any).week ?? 0) >= 1  &&  ((s as any).week ?? 0) < 4) {
      scene.actions([
        { label: 'Go to your General Education 101 class', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (9 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    ((st as any).uni_period = (st as any).uni_period ?? {})['first'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons1', 'general_education_101');
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Go to your Teaching Methods 101 class', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (9 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    ((st as any).uni_period = (st as any).uni_period ?? {})['first'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons1', 'teaching_methods_101');
  } },
      ]);
    }
  } else {
    if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 2) {
      if (((s as any).week ?? 0) >= 1  &&  ((s as any).week ?? 0) < 4) {
        scene.actions([
          { label: 'Go to your General Education 102 class', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (9 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    ((st as any).uni_period = (st as any).uni_period ?? {})['first'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons2', 'general_education_102');
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Go to your Teaching Methods 102 class', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (9 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    ((st as any).uni_period = (st as any).uni_period ?? {})['first'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons2', 'teaching_methods_102');
  } },
        ]);
      }
    } else {
      if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 3) {
        if (((s as any).week ?? 0) >= 1  &&  ((s as any).week ?? 0) < 4) {
          scene.actions([
            { label: 'Go to your General Education 201 class', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (9 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    ((st as any).uni_period = (st as any).uni_period ?? {})['first'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons3', 'general_education_201');
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Go to your Assessment_201 class', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (9 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    ((st as any).uni_period = (st as any).uni_period ?? {})['first'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons3', 'assessment_201');
  } },
          ]);
        }
      } else {
        if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 4) {
          if (((s as any).week ?? 0) >= 1  &&  ((s as any).week ?? 0) < 4) {
            scene.actions([
              { label: 'Go to your General education 202 class', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (9 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    ((st as any).uni_period = (st as any).uni_period ?? {})['first'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons4', 'general_education_202');
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Go to your Assessment_201 class', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (9 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    ((st as any).uni_period = (st as any).uni_period ?? {})['first'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons4', 'learning_theories_202');
  } },
            ]);
          }
        }
      }
    }
  }
  return;
  scene.build();
}

function enterSetSecondPeriodAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).university ?? 0)?.['enrolled_in'] === 'nursing') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetSecondPeriodActNursing(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).university ?? 0)?.['enrolled_in'] === 'teaching_studies') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetSecondPeriodActTeaching(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  return;
  scene.build();
}

function enterSetSecondPeriodActNursing(s: GameState, scene: SceneBuilder): void {
  if (((s as any).university ?? 0)?.['enrolled_in_semester'] < 1  ||  ((s as any).university ?? 0)?.['enrolled_in_semester'] > 4) {
    return;
  }
  if (((s as any).week ?? 0) > 4) {
    return;
  }
  scene.text('\'Your next class will start at 11:00. You can go to it now or do other things first, but you need to be at the university plaza before it starts if you want to attend it.\'');
  if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 1) {
    if (((s as any).week ?? 0) === 1  ||  ((s as any).week ?? 0) === 4) {
      scene.actions([
        { label: 'Go to your Anatomy and Physiology 101 class', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (11 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    ((st as any).uni_period = (st as any).uni_period ?? {})['second'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons1', 'anatomy_and_physiology_101');
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Go to your Patient Care 101 class', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (11 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    ((st as any).uni_period = (st as any).uni_period ?? {})['second'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons1', 'patient_care_101');
  } },
      ]);
    }
  } else {
    if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 2) {
      if (((s as any).week ?? 0) === 1  ||  ((s as any).week ?? 0) === 4) {
        scene.actions([
          { label: 'Go to your Anatomy and Physiology 102 class', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (11 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    ((st as any).uni_period = (st as any).uni_period ?? {})['second'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons2', 'anatomy_and_physiology_102');
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Go to your Patient Care 102 class', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (11 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    ((st as any).uni_period = (st as any).uni_period ?? {})['second'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons2', 'patient_care_102');
  } },
        ]);
      }
    } else {
      if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 3) {
        if (((s as any).week ?? 0) === 1  ||  ((s as any).week ?? 0) === 4) {
          scene.actions([
            { label: 'Go to your Anatomy and Physiology 201 class', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (11 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    ((st as any).uni_period = (st as any).uni_period ?? {})['second'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons3', 'anatomy_and_physiology_201');
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Go to your Patient Care 201 class', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (11 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    ((st as any).uni_period = (st as any).uni_period ?? {})['second'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons3', 'patient_care_201');
  } },
          ]);
        }
      } else {
        if (((s as any).week ?? 0) === 1  ||  ((s as any).week ?? 0) === 4) {
          scene.actions([
            { label: 'Go to your Anatomy and Physiology 202 class', handler: (st: GameState) => {
    if (((st as any).hour ?? 0) === 10) {
      (st as any).minut = ((st as any).minut ?? 0) + (60 - ((st as any).minut ?? 0));
    }
    ((st as any).uni_period = (st as any).uni_period ?? {})['second'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons4', 'anatomy_and_physiology_202');
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Go to your Patient Care 202 class', handler: (st: GameState) => {
    if (((st as any).hour ?? 0) === 10) {
      (st as any).minut = ((st as any).minut ?? 0) + (60 - ((st as any).minut ?? 0));
    }
    ((st as any).uni_period = (st as any).uni_period ?? {})['second'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons4', 'patient_care_202');
  } },
          ]);
        }
      }
    }
  }
  scene.build();
}

function enterSetSecondPeriodActTeaching(s: GameState, scene: SceneBuilder): void {
  if (((s as any).university ?? 0)?.['enrolled_in_semester'] < 1  ||  ((s as any).university ?? 0)?.['enrolled_in_semester'] > 4) {
    return;
  }
  if (((s as any).week ?? 0) > 4) {
    return;
  }
  scene.text('\'Your next class will start at 11:00. You can go to it now or do other things first, but you need to be at the university plaza before it starts if you want to attend it.\'');
  if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 1) {
    if (((s as any).week ?? 0) === 1  ||  ((s as any).week ?? 0) === 3) {
      scene.actions([
        { label: 'Go to your Teaching Methods 101 class', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (11 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    ((st as any).uni_period = (st as any).uni_period ?? {})['second'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons1', 'teaching_methods_101');
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Go to your Learning Theories 101 class', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (11 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    ((st as any).uni_period = (st as any).uni_period ?? {})['second'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons1', 'learning_theories_101');
  } },
      ]);
    }
  } else {
    if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 2) {
      if (((s as any).week ?? 0) === 1  ||  ((s as any).week ?? 0) === 3) {
        scene.actions([
          { label: 'Go to your Teaching Methods 102 class', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (11 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    ((st as any).uni_period = (st as any).uni_period ?? {})['second'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons2', 'teaching_methods_102');
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Go to your Psychology of a Student 101 class', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (11 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    ((st as any).uni_period = (st as any).uni_period ?? {})['second'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons2', 'psychology_of_a_student_101');
  } },
        ]);
      }
    } else {
      if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 3) {
        if (((s as any).week ?? 0) === 1  ||  ((s as any).week ?? 0) === 3) {
          scene.actions([
            { label: 'Go to your Assessment 201 class', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (11 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    ((st as any).uni_period = (st as any).uni_period ?? {})['second'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons3', 'assessment_201');
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Go to your Learning Theories 201 class', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (11 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    ((st as any).uni_period = (st as any).uni_period ?? {})['second'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons3', 'learning_theories_201');
  } },
          ]);
        }
      } else {
        if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 4) {
          if (((s as any).week ?? 0) === 1  ||  ((s as any).week ?? 0) === 3) {
            scene.actions([
              { label: 'Go to your Learning Theories 202 class', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (11 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    ((st as any).uni_period = (st as any).uni_period ?? {})['second'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons4', 'learning_theories_202');
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Go to your Psychology of a Student 201 class', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (11 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    ((st as any).uni_period = (st as any).uni_period ?? {})['second'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons4', 'psychology_of_a_student_201');
  } },
            ]);
          }
        }
      }
    }
  }
  return;
  scene.build();
}

function enterSetThirdPeriodAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).university ?? 0)?.['enrolled_in'] === 'nursing') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetThirdPeriodActNursing(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).university ?? 0)?.['enrolled_in'] === 'teaching_studies') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetThirdPeriodActTeaching(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  return;
  scene.build();
}

function enterSetThirdPeriodActNursing(s: GameState, scene: SceneBuilder): void {
  if (((s as any).university ?? 0)?.['enrolled_in_semester'] < 1  ||  ((s as any).university ?? 0)?.['enrolled_in_semester'] > 4) {
    return;
  }
  if (((s as any).week ?? 0) > 4) {
    return;
  }
  scene.text('\'Your next class will start at 13:15. You can go to it now or do other things first, but you need to be at the university plaza before it starts if you want to attend it.\'');
  if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 1) {
    if (((s as any).week ?? 0) === 1  &&  ((s as any).university ?? 0)?.['elective_semester_1_1'] !== '') {
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Go to your elective ' + String((((s as any).university ?? 0)?.['elective_semester_1_1'] ?? '') ?? ''), handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (13 - ((st as any).hour ?? 0)) * 60 + (15 - ((st as any).minut ?? 0))));
    ((st as any).uni_period = (st as any).uni_period ?? {})['third'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons_electives', (((st as any).university ?? {})['elective_semester_1_1']));
  } },
      ]);
    } else {
      if (((s as any).week ?? 0) === 2  &&  ((s as any).university ?? 0)?.['elective_semester_1_2'] !== '') {
        scene.actions([
          { label: '', labelFn: (s: GameState) => 'Go to your elective ' + String((((s as any).university ?? 0)?.['elective_semester_1_2'] ?? '') ?? ''), handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (13 - ((st as any).hour ?? 0)) * 60 + (15 - ((st as any).minut ?? 0))));
    ((st as any).uni_period = (st as any).uni_period ?? {})['third'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons_electives', (((st as any).university ?? {})['elective_semester_1_2']));
  } },
        ]);
      } else {
        if (((s as any).week ?? 0) === 3) {
          scene.actions([
            { label: 'Go to your Anatomy and Physiology 101 class', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (13 - ((st as any).hour ?? 0)) * 60 + (15 - ((st as any).minut ?? 0))));
    ((st as any).uni_period = (st as any).uni_period ?? {})['third'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons1', 'anatomy_and_physiology_101');
  } },
          ]);
        } else {
          if (((s as any).week ?? 0) === 4  &&  ((s as any).university ?? 0)?.['elective_semester_1_3'] !== '') {
            scene.actions([
              { label: '', labelFn: (s: GameState) => 'Go to your elective ' + String((((s as any).university ?? 0)?.['elective_semester_1_3'] ?? '') ?? ''), handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (13 - ((st as any).hour ?? 0)) * 60 + (15 - ((st as any).minut ?? 0))));
    ((st as any).uni_period = (st as any).uni_period ?? {})['third'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons_electives', (((st as any).university ?? {})['elective_semester_1_3']));
  } },
            ]);
          }
        }
      }
    }
  } else {
    if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 2) {
      if (((s as any).week ?? 0) === 1  &&  ((s as any).university ?? 0)?.['elective_semester_2_1'] !== '') {
        scene.actions([
          { label: '', labelFn: (s: GameState) => 'Go to your elective ' + String((((s as any).university ?? 0)?.['elective_semester_2_1'] ?? '') ?? ''), handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (13 - ((st as any).hour ?? 0)) * 60 + (15 - ((st as any).minut ?? 0))));
    ((st as any).uni_period = (st as any).uni_period ?? {})['third'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons_electives', (((st as any).university ?? {})['elective_semester_2_1']));
  } },
        ]);
      } else {
        if (((s as any).week ?? 0) === 2  &&  ((s as any).university ?? 0)?.['elective_semester_2_2'] !== '') {
          scene.actions([
            { label: '', labelFn: (s: GameState) => 'Go to your elective ' + String((((s as any).university ?? 0)?.['elective_semester_2_2'] ?? '') ?? ''), handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (13 - ((st as any).hour ?? 0)) * 60 + (15 - ((st as any).minut ?? 0))));
    ((st as any).uni_period = (st as any).uni_period ?? {})['third'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons_electives', (((st as any).university ?? {})['elective_semester_2_2']));
  } },
          ]);
        } else {
          if (((s as any).week ?? 0) === 3) {
            scene.actions([
              { label: 'Go to your Anatomy and Physiology 102 class', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (13 - ((st as any).hour ?? 0)) * 60 + (15 - ((st as any).minut ?? 0))));
    ((st as any).uni_period = (st as any).uni_period ?? {})['third'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons2', 'anatomy_and_physiology_102');
  } },
            ]);
          } else {
            if (((s as any).week ?? 0) === 4  &&  ((s as any).university ?? 0)?.['elective_semester_2_3'] !== '') {
              scene.actions([
                { label: '', labelFn: (s: GameState) => 'Go to your elective ' + String((((s as any).university ?? 0)?.['elective_semester_2_3'] ?? '') ?? ''), handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (13 - ((st as any).hour ?? 0)) * 60 + (15 - ((st as any).minut ?? 0))));
    ((st as any).uni_period = (st as any).uni_period ?? {})['third'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons_electives', (((st as any).university ?? {})['elective_semester_2_3']));
  } },
              ]);
            }
          }
        }
      }
    } else {
      if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 3) {
        if (((s as any).week ?? 0) === 1  &&  ((s as any).university ?? 0)?.['elective_3_1'] !== '') {
          scene.actions([
            { label: '', labelFn: (s: GameState) => 'Go to your elective ' + String((((s as any).university ?? 0)?.['elective_semester_3_1'] ?? '') ?? ''), handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (13 - ((st as any).hour ?? 0)) * 60 + (15 - ((st as any).minut ?? 0))));
    ((st as any).uni_period = (st as any).uni_period ?? {})['third'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons_electives', (((st as any).university ?? {})['elective_semester_3_1']));
  } },
          ]);
        } else {
          if (((s as any).week ?? 0) === 2  &&  ((s as any).university ?? 0)?.['elective_3_2'] !== '') {
            scene.actions([
              { label: '', labelFn: (s: GameState) => 'Go to your elective ' + String((((s as any).university ?? 0)?.['elective_semester_3_2'] ?? '') ?? ''), handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (13 - ((st as any).hour ?? 0)) * 60 + (15 - ((st as any).minut ?? 0))));
    ((st as any).uni_period = (st as any).uni_period ?? {})['third'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons_electives', (((st as any).university ?? {})['elective_semester_3_2']));
  } },
            ]);
          } else {
            if (((s as any).week ?? 0) === 3) {
              scene.actions([
                { label: 'Go to your Anatomy and Physiology 201 class', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (13 - ((st as any).hour ?? 0)) * 60 + (15 - ((st as any).minut ?? 0))));
    ((st as any).uni_period = (st as any).uni_period ?? {})['third'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons3', 'anatomy_and_physiology_201');
  } },
              ]);
            } else {
              if (((s as any).week ?? 0) === 4  &&  ((s as any).university ?? 0)?.['elective_3_3'] !== '') {
                scene.actions([
                  { label: '', labelFn: (s: GameState) => 'Go to your elective ' + String((((s as any).university ?? 0)?.['elective_semester_3_3'] ?? '') ?? ''), handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (13 - ((st as any).hour ?? 0)) * 60 + (15 - ((st as any).minut ?? 0))));
    ((st as any).uni_period = (st as any).uni_period ?? {})['third'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons_electives', (((st as any).university ?? {})['elective_semester_3_3']));
  } },
                ]);
              }
            }
          }
        }
      } else {
        if (((s as any).week ?? 0) === 1  &&   ((s as any).university ?? 0)?.['elective_4_1'] !== '') {
          scene.actions([
            { label: '', labelFn: (s: GameState) => 'Go to your elective ' + String((((s as any).university ?? 0)?.['elective_semester_4_1'] ?? '') ?? ''), handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (13 - ((st as any).hour ?? 0)) * 60 + (15 - ((st as any).minut ?? 0))));
    ((st as any).uni_period = (st as any).uni_period ?? {})['third'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons_electives', (((st as any).university ?? {})['elective_semester_4_1']));
  } },
          ]);
        } else {
          if (((s as any).week ?? 0) === 2  &&   ((s as any).university ?? 0)?.['elective_4_2'] !== '') {
            scene.actions([
              { label: '', labelFn: (s: GameState) => 'Go to your elective ' + String((((s as any).university ?? 0)?.['elective_semester_4_2'] ?? '') ?? ''), handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (13 - ((st as any).hour ?? 0)) * 60 + (15 - ((st as any).minut ?? 0))));
    ((st as any).uni_period = (st as any).uni_period ?? {})['third'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons_electives', (((st as any).university ?? {})['elective_semester_4_2']));
  } },
            ]);
          } else {
            if (((s as any).week ?? 0) === 3) {
              scene.actions([
                { label: 'Go to your Anatomy and Physiology 202 class', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (13 - ((st as any).hour ?? 0)) * 60 + (15 - ((st as any).minut ?? 0))));
    ((st as any).uni_period = (st as any).uni_period ?? {})['third'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons4', 'anatomy_and_physiology_202');
  } },
              ]);
            } else {
              if (((s as any).week ?? 0) === 4  &&  ((s as any).university ?? 0)?.['elective_4_3'] !== '') {
                scene.actions([
                  { label: '', labelFn: (s: GameState) => 'Go to your elective ' + String((((s as any).university ?? 0)?.['elective_semester_4_3'] ?? '') ?? ''), handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (13 - ((st as any).hour ?? 0)) * 60 + (15 - ((st as any).minut ?? 0))));
    ((st as any).uni_period = (st as any).uni_period ?? {})['third'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons_electives', (((st as any).university ?? {})['elective_semester_4_3']));
  } },
                ]);
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterSetThirdPeriodActTeaching(s: GameState, scene: SceneBuilder): void {
  if (((s as any).university ?? 0)?.['enrolled_in_semester'] < 1  ||  ((s as any).university ?? 0)?.['enrolled_in_semester'] > 4) {
    return;
  }
  if (((s as any).week ?? 0) > 4) {
    return;
  }
  scene.text('\'Your next class will start at 13:15. You can go to it now or do other things first, but you need to be at the university plaza before it starts if you want to attend it.\'');
  if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 1) {
    if (((s as any).week ?? 0) === 1  &&  ((s as any).university ?? 0)?.['elective_semester_1_1'] !== '') {
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Go to your elective ' + String((((s as any).university ?? 0)?.['elective_semester_1_1'] ?? '') ?? ''), handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (13 - ((st as any).hour ?? 0)) * 60 + (15 - ((st as any).minut ?? 0))));
    ((st as any).uni_period = (st as any).uni_period ?? {})['third'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons_electives', (((st as any).university ?? {})['elective_semester_1_1']));
  } },
      ]);
    } else {
      if (((s as any).week ?? 0) === 2  &&  ((s as any).university ?? 0)?.['elective_semester_1_2'] !== '') {
        scene.actions([
          { label: '', labelFn: (s: GameState) => 'Go to your elective ' + String((((s as any).university ?? 0)?.['elective_semester_1_2'] ?? '') ?? ''), handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (13 - ((st as any).hour ?? 0)) * 60 + (15 - ((st as any).minut ?? 0))));
    ((st as any).uni_period = (st as any).uni_period ?? {})['third'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons_electives', (((st as any).university ?? {})['elective_semester_1_2']));
  } },
        ]);
      } else {
        if (((s as any).week ?? 0) === 3) {
          scene.actions([
            { label: 'Go to your Learning Theories 101 class', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (13 - ((st as any).hour ?? 0)) * 60 + (15 - ((st as any).minut ?? 0))));
    ((st as any).uni_period = (st as any).uni_period ?? {})['third'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons1', 'learning_theories_101');
  } },
          ]);
        } else {
          if (((s as any).week ?? 0) === 4  &&  ((s as any).university ?? 0)?.['elective_semester_1_3'] !== '') {
            scene.actions([
              { label: '', labelFn: (s: GameState) => 'Go to your elective ' + String((((s as any).university ?? 0)?.['elective_semester_1_3'] ?? '') ?? ''), handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (13 - ((st as any).hour ?? 0)) * 60 + (15 - ((st as any).minut ?? 0))));
    ((st as any).uni_period = (st as any).uni_period ?? {})['third'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons_electives', (((st as any).university ?? {})['elective_semester_1_3']));
  } },
            ]);
          }
        }
      }
    }
  } else {
    if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 2) {
      if (((s as any).week ?? 0) === 1  &&  ((s as any).university ?? 0)?.['elective_semester_2_1'] !== '') {
        scene.actions([
          { label: '', labelFn: (s: GameState) => 'Go to your elective ' + String((((s as any).university ?? 0)?.['elective_semester_2_1'] ?? '') ?? ''), handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (13 - ((st as any).hour ?? 0)) * 60 + (15 - ((st as any).minut ?? 0))));
    ((st as any).uni_period = (st as any).uni_period ?? {})['third'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons_electives', (((st as any).university ?? {})['elective_semester_2_1']));
  } },
        ]);
      } else {
        if (((s as any).week ?? 0) === 2  &&  ((s as any).university ?? 0)?.['elective_semester_2_2'] !== '') {
          scene.actions([
            { label: '', labelFn: (s: GameState) => 'Go to your elective ' + String((((s as any).university ?? 0)?.['elective_semester_2_2'] ?? '') ?? ''), handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (13 - ((st as any).hour ?? 0)) * 60 + (15 - ((st as any).minut ?? 0))));
    ((st as any).uni_period = (st as any).uni_period ?? {})['third'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons_electives', (((st as any).university ?? {})['elective_semester_2_2']));
  } },
          ]);
        } else {
          if (((s as any).week ?? 0) === 3) {
            scene.actions([
              { label: 'Go to your Psychology of a Student 101 class', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (13 - ((st as any).hour ?? 0)) * 60 + (15 - ((st as any).minut ?? 0))));
    ((st as any).uni_period = (st as any).uni_period ?? {})['third'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons2', 'psychology_of_a_student_101');
  } },
            ]);
          } else {
            if (((s as any).week ?? 0) === 4  &&  ((s as any).university ?? 0)?.['elective_semester_2_3'] !== '') {
              scene.actions([
                { label: '', labelFn: (s: GameState) => 'Go to your elective ' + String((((s as any).university ?? 0)?.['elective_semester_2_3'] ?? '') ?? ''), handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (13 - ((st as any).hour ?? 0)) * 60 + (15 - ((st as any).minut ?? 0))));
    ((st as any).uni_period = (st as any).uni_period ?? {})['third'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons_electives', (((st as any).university ?? {})['elective_semester_2_3']));
  } },
              ]);
            }
          }
        }
      }
    } else {
      if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 3) {
        if (((s as any).week ?? 0) === 1  &&  ((s as any).university ?? 0)?.['elective_3_1'] !== '') {
          scene.actions([
            { label: '', labelFn: (s: GameState) => 'Go to your elective ' + String((((s as any).university ?? 0)?.['elective_semester_3_1'] ?? '') ?? ''), handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (13 - ((st as any).hour ?? 0)) * 60 + (15 - ((st as any).minut ?? 0))));
    ((st as any).uni_period = (st as any).uni_period ?? {})['third'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons_electives', (((st as any).university ?? {})['elective_semester_3_1']));
  } },
          ]);
        } else {
          if (((s as any).week ?? 0) === 2  &&  ((s as any).university ?? 0)?.['elective_3_2'] !== '') {
            scene.actions([
              { label: '', labelFn: (s: GameState) => 'Go to your elective ' + String((((s as any).university ?? 0)?.['elective_semester_3_2'] ?? '') ?? ''), handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (13 - ((st as any).hour ?? 0)) * 60 + (15 - ((st as any).minut ?? 0))));
    ((st as any).uni_period = (st as any).uni_period ?? {})['third'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons_electives', (((st as any).university ?? {})['elective_semester_3_2']));
  } },
            ]);
          } else {
            if (((s as any).week ?? 0) === 3) {
              scene.actions([
                { label: 'Go to your Learning Theories 201 class', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (13 - ((st as any).hour ?? 0)) * 60 + (15 - ((st as any).minut ?? 0))));
    ((st as any).uni_period = (st as any).uni_period ?? {})['third'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons3', 'learning_theories_201');
  } },
              ]);
            } else {
              if (((s as any).week ?? 0) === 4  &&  ((s as any).university ?? 0)?.['elective_3_3'] !== '') {
                scene.actions([
                  { label: '', labelFn: (s: GameState) => 'Go to your elective ' + String((((s as any).university ?? 0)?.['elective_semester_3_3'] ?? '') ?? ''), handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (13 - ((st as any).hour ?? 0)) * 60 + (15 - ((st as any).minut ?? 0))));
    ((st as any).uni_period = (st as any).uni_period ?? {})['third'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons_electives', (((st as any).university ?? {})['elective_semester_3_3']));
  } },
                ]);
              }
            }
          }
        }
      } else {
        if (((s as any).week ?? 0) === 1  &&  ((s as any).university ?? 0)?.['elective_4_1'] !== '') {
          scene.actions([
            { label: '', labelFn: (s: GameState) => 'Go to your elective ' + String((((s as any).university ?? 0)?.['elective_semester_4_1'] ?? '') ?? ''), handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (13 - ((st as any).hour ?? 0)) * 60 + (15 - ((st as any).minut ?? 0))));
    ((st as any).uni_period = (st as any).uni_period ?? {})['third'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons_electives', (((st as any).university ?? {})['elective_semester_4_1']));
  } },
          ]);
        } else {
          if (((s as any).week ?? 0) === 2  &&  ((s as any).university ?? 0)?.['elective_4_2'] !== '') {
            scene.actions([
              { label: '', labelFn: (s: GameState) => 'Go to your elective ' + String((((s as any).university ?? 0)?.['elective_semester_4_2'] ?? '') ?? ''), handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (13 - ((st as any).hour ?? 0)) * 60 + (15 - ((st as any).minut ?? 0))));
    ((st as any).uni_period = (st as any).uni_period ?? {})['third'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons_electives', (((st as any).university ?? {})['elective_semester_4_2']));
  } },
            ]);
          } else {
            if (((s as any).week ?? 0) === 3) {
              scene.text('\'Your next class will start at 13:15. You can go to it now or do other things first, but you need to be at the university plaza before it starts if you want to attend it.\'');
              scene.actions([
                { label: 'Go to your Psychology of a Student 201 class', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (13 - ((st as any).hour ?? 0)) * 60 + (15 - ((st as any).minut ?? 0))));
    ((st as any).uni_period = (st as any).uni_period ?? {})['third'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons4', 'psychology_of_a_student_201');
  } },
              ]);
            } else {
              if (((s as any).week ?? 0) === 4  &&  ((s as any).university ?? 0)?.['elective_4_3'] !== '') {
                scene.actions([
                  { label: '', labelFn: (s: GameState) => 'Go to your elective ' + String((((s as any).university ?? 0)?.['elective_semester_4_3'] ?? '') ?? ''), handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (13 - ((st as any).hour ?? 0)) * 60 + (15 - ((st as any).minut ?? 0))));
    ((st as any).uni_period = (st as any).uni_period ?? {})['third'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_lessons_electives', (((st as any).university ?? {})['elective_semester_4_3']));
  } },
                ]);
              }
            }
          }
        }
      }
    }
  }
  return;
  scene.build();
}

function enterGetExamSchedule(s: GameState, scene: SceneBuilder): void {
  if (((s as any).university ?? 0)?.['enrolled_in'] === 'nursing') {
    (s as any).result = qspFunc(s, 'uni_programs', 'get_exam_schedule_nursing');
  } else {
    if (((s as any).university ?? 0)?.['enrolled_in'] === 'teaching_studies') {
      (s as any).result = qspFunc(s, 'uni_programs', 'get_exam_schedule_teaching');
    }
  }
  return;
  scene.build();
}

function enterGetExamScheduleNursing(s: GameState, scene: SceneBuilder): void {
  if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 1) {
    if (((s as any).university ?? 0)?.['exam_week'] === 1) {
      if (((s as any).week ?? 0) < 4  ||  (((s as any).week ?? 0) === 4  &&  ((s as any).hour ?? 0) < 9)) {
        (s as any).result = 'Patient Care 101 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Thursday this week. Anatomy and Physiology 101 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Monday next week. Examination and Treatment 101 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Thursday next week.';
      } else {
        (s as any).result = 'Anatomy and Physiology 101 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Tuesday next week. Examination and Treatment 101 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Thursday next week.';
      }
    } else {
      if (((s as any).university ?? 0)?.['exam_week'] === 2) {
        if (((s as any).week ?? 0) < 2  ||  (((s as any).week ?? 0) === 2  &&  ((s as any).hour ?? 0) < 9)) {
          (s as any).result = 'Anatomy and Physiology 101 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Tuesday this week. Examination and Treatment 101 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Thursday this week.';
        } else {
          if (((s as any).week ?? 0) < 4  ||  (((s as any).week ?? 0) === 4  &&  ((s as any).hour ?? 0) < 9)) {
            (s as any).result = 'Examination and Treatment 101 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Thursday this week.';
          } else {
            (s as any).result = 'All your exams are over. Now you just have to wait for your grade to be announced.';
          }
        }
      }
    }
  } else {
    if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 2) {
      if (((s as any).university ?? 0)?.['exam_week'] === 1) {
        if (((s as any).week ?? 0) < 4  ||  (((s as any).week ?? 0) === 4  &&  ((s as any).hour ?? 0) < 9)) {
          (s as any).result = 'Patient Care 102 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Thursday this week. Anatomy and Physiology 102 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Monday next week. Examination and Treatment 102 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Thursday next week.';
        } else {
          (s as any).result = 'Anatomy and Physiology 102 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Tuesday next week. Examination and Treatment 102 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Thursday next week.';
        }
      } else {
        if (((s as any).university ?? 0)?.['exam_week'] === 2) {
          if (((s as any).week ?? 0) < 2  ||  (((s as any).week ?? 0) === 2  &&  ((s as any).hour ?? 0) < 9)) {
            (s as any).result = 'Anatomy and Physiology 102 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Tuesday this week. Examination and Treatment 102 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Thursday this week.';
          } else {
            if (((s as any).week ?? 0) < 4  ||  (((s as any).week ?? 0) === 4  &&  ((s as any).hour ?? 0) < 9)) {
              (s as any).result = 'Examination and Treatment 102 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Thursday this week.';
            } else {
              (s as any).result = 'All your exams are over. Now you just have to wait for your grade to be announced.';
            }
          }
        }
      }
    } else {
      if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 3) {
        if (((s as any).university ?? 0)?.['exam_week'] === 1) {
          if (((s as any).week ?? 0) < 4  ||  (((s as any).week ?? 0) === 4  &&  ((s as any).hour ?? 0) < 9)) {
            (s as any).result = 'Patient Care 201 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Thursday this week. Anatomy and Physiology 201 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Monday next week. Dosages and Pharmaceuticals 101 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Thursday next week.';
          } else {
            (s as any).result = 'Anatomy and Physiology 201 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Tuesday next week. Dosages and Pharmaceuticals 101 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Thursday next week.';
          }
        } else {
          if (((s as any).university ?? 0)?.['exam_week'] === 2) {
            if (((s as any).week ?? 0) < 2  ||  (((s as any).week ?? 0) === 2  &&  ((s as any).hour ?? 0) < 9)) {
              (s as any).result = 'Anatomy and Physiology 201 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Tuesday this week. Dosages and Pharmaceuticals 101 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Thursday this week.';
            } else {
              if (((s as any).week ?? 0) < 4  ||  (((s as any).week ?? 0) === 4  &&  ((s as any).hour ?? 0) < 9)) {
                (s as any).result = 'Dosages and Pharmaceuticals 101 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Thursday this week.';
              } else {
                (s as any).result = 'All your exams are over. Now you just have to wait for your grade to be announced.';
              }
            }
          }
        }
      } else {
        if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 4) {
          if (((s as any).university ?? 0)?.['exam_week'] === 1) {
            if (((s as any).week ?? 0) < 4  ||  (((s as any).week ?? 0) === 4  &&  ((s as any).hour ?? 0) < 9)) {
              (s as any).result = 'Patient Care 202 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Thursday this week. Anatomy and Physiology 202 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Monday next week. Dosages and Pharmaceuticals 102 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Thursday next week.';
            } else {
              (s as any).result = 'Anatomy and Physiology 202 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Tuesday next week. Dosages and Pharmaceuticals 102 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Thursday next week.';
            }
          } else {
            if (((s as any).university ?? 0)?.['exam_week'] === 2) {
              if (((s as any).week ?? 0) < 2  ||  (((s as any).week ?? 0) === 2  &&  ((s as any).hour ?? 0) < 9)) {
                (s as any).result = 'Anatomy and Physiology 202 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Tuesday this week. Dosages and Pharmaceuticals 102 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Thursday this week.';
              } else {
                if (((s as any).week ?? 0) < 4  ||  (((s as any).week ?? 0) === 4  &&  ((s as any).hour ?? 0) < 9)) {
                  (s as any).result = 'Dosages and Pharmaceuticals 102 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Thursday this week.';
                } else {
                  (s as any).result = 'All your exams are over. Now you just have to wait for your grade to be announced.';
                }
              }
            }
          }
        }
      }
    }
  }
  return;
  scene.build();
}

function enterGetExamScheduleTeaching(s: GameState, scene: SceneBuilder): void {
  if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 1) {
    if (((s as any).university ?? 0)?.['exam_week'] === 1) {
      if (((s as any).week ?? 0) < 4  ||  (((s as any).week ?? 0) === 4  &&  ((s as any).hour ?? 0) < 9)) {
        (s as any).result = 'General Education 101 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Thursday this week. Teaching Methods 101 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Monday next week. Learning Theories 101 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Thursday next week.';
      } else {
        (s as any).result = 'Teaching Methods 101 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Tuesday next week. Learning Theories 101 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Thursday next week.';
      }
    } else {
      if (((s as any).university ?? 0)?.['exam_week'] === 2) {
        if (((s as any).week ?? 0) < 2  ||  (((s as any).week ?? 0) === 2  &&  ((s as any).hour ?? 0) < 9)) {
          (s as any).result = 'Teaching Methods 101 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Tuesday this week. Learning Theories 101 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Thursday this week.';
        } else {
          if (((s as any).week ?? 0) < 4  ||  (((s as any).week ?? 0) === 4  &&  ((s as any).hour ?? 0) < 9)) {
            (s as any).result = 'Learning Theories 101 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Thursday this week.';
          } else {
            (s as any).result = 'All your exams are over. Now you just have to wait for your grade to be announced.';
          }
        }
      }
    }
  } else {
    if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 2) {
      if (((s as any).university ?? 0)?.['exam_week'] === 1) {
        if (((s as any).week ?? 0) < 4  ||  (((s as any).week ?? 0) === 4  &&  ((s as any).hour ?? 0) < 9)) {
          (s as any).result = 'General Education 102 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Thursday this week. Teaching Methods 102 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Monday next week. Psychology of a Student 101 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Thursday next week.';
        } else {
          (s as any).result = 'Teaching Methods 102 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Tuesday next week. Psychology of a Student 101 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Thursday next week.';
        }
      } else {
        if (((s as any).university ?? 0)?.['exam_week'] === 2) {
          if (((s as any).week ?? 0) < 2  ||  (((s as any).week ?? 0) === 2  &&  ((s as any).hour ?? 0) < 9)) {
            (s as any).result = 'Teaching Methods 102 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Tuesday this week. Psychology of a Student 101 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Thursday this week.';
          } else {
            if (((s as any).week ?? 0) < 4  ||  (((s as any).week ?? 0) === 4  &&  ((s as any).hour ?? 0) < 9)) {
              (s as any).result = 'Psychology of a Student 101 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Thursday this week.';
            } else {
              (s as any).result = 'All your exams are over. Now you just have to wait for your grade to be announced.';
            }
          }
        }
      }
    } else {
      if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 3) {
        if (((s as any).university ?? 0)?.['exam_week'] === 1) {
          if (((s as any).week ?? 0) < 4  ||  (((s as any).week ?? 0) === 4  &&  ((s as any).hour ?? 0) < 9)) {
            (s as any).result = 'General Education 201 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Thursday this week. Teaching Methods 102 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Monday next week. Psychology of a Student 101 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Thursday next week.';
          } else {
            (s as any).result = 'Assessment 201 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Tuesday next week. Psychology of a Student 101 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Thursday next week.';
          }
        } else {
          if (((s as any).university ?? 0)?.['exam_week'] === 2) {
            if (((s as any).week ?? 0) < 2  ||  (((s as any).week ?? 0) === 2  &&  ((s as any).hour ?? 0) < 9)) {
              (s as any).result = 'Teaching Methods 102 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Tuesday this week. Psychology of a Student 101 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Thursday this week.';
            } else {
              if (((s as any).week ?? 0) < 4  ||  (((s as any).week ?? 0) === 4  &&  ((s as any).hour ?? 0) < 9)) {
                (s as any).result = 'Learning Theories 201 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Thursday this week.';
              } else {
                (s as any).result = 'All your exams are over. Now you just have to wait for your grade to be announced.';
              }
            }
          }
        }
      } else {
        if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 4) {
          if (((s as any).university ?? 0)?.['exam_week'] === 1) {
            if (((s as any).week ?? 0) < 4  ||  (((s as any).week ?? 0) === 4  &&  ((s as any).hour ?? 0) < 9)) {
              (s as any).result = 'General Education 202 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Thursday this week. Teaching Methods 102 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Monday next week. Psychology of a Student 201 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Thursday next week.';
            } else {
              (s as any).result = 'Learning Theories 202 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Tuesday next week. Psychology of a Student 201 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Thursday next week.';
            }
          } else {
            if (((s as any).university ?? 0)?.['exam_week'] === 2) {
              if (((s as any).week ?? 0) < 2  ||  (((s as any).week ?? 0) === 2  &&  ((s as any).hour ?? 0) < 9)) {
                (s as any).result = 'Learning Theories 202 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Tuesday this week. Psychology of a Student 201 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Thursday this week.';
              } else {
                if (((s as any).week ?? 0) < 4  ||  (((s as any).week ?? 0) === 4  &&  ((s as any).hour ?? 0) < 9)) {
                  (s as any).result = 'Psychology of a Student 201 Exam (' + qspFunc(s, 'time', 'get_time_string', 9, 0) + ' to ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ') Thursday this week.';
                } else {
                  (s as any).result = 'All your exams are over. Now you just have to wait for your grade to be announced.';
                }
              }
            }
          }
        }
      }
    }
  }
  return;
  scene.build();
}

function enterIsExamOver(s: GameState, scene: SceneBuilder): void {
  if (((s as any).university ?? 0)?.['enrolled_in'] === 'nursing') {
    (s as any).result = qspFunc(s, 'uni_programs', 'is_exam_over_nursing', ((s as any).locArgs?.[1] ?? 0));
  } else {
    if (((s as any).university ?? 0)?.['enrolled_in'] === 'teaching_studies') {
      (s as any).result = qspFunc(s, 'uni_programs', 'is_exam_over_teaching', ((s as any).locArgs?.[1] ?? 0));
    }
  }
  return;
  scene.build();
}

function enterIsExamOverNursing(s: GameState, scene: SceneBuilder): void {
  if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 1) {
    if (String((s as any).locArgs?.[1] ?? '') === 'patient care 101') {
      if (((s as any).university ?? 0)?.['exam_week'] === 1  &&  (((s as any).week ?? 0) < 4  ||  (((s as any).week ?? 0) === 4  &&  ((s as any).hour ?? 0) < 9))) {
        (s as any).result = 0;
      } else {
        (s as any).result = 1;
      }
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'anatomy  &&  physiology 101') {
        if (((s as any).university ?? 0)?.['exam_week'] === 1  ||  (((s as any).university ?? 0)?.['exam_week'] === 2  &&  (((s as any).week ?? 0) < 2  ||  (((s as any).week ?? 0) === 2  &&  ((s as any).hour ?? 0) < 9)))) {
          (s as any).result = 0;
        } else {
          (s as any).result = 1;
        }
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 'examination  &&  treatment 101') {
          if (((s as any).university ?? 0)?.['exam_week'] === 1  ||  (((s as any).university ?? 0)?.['exam_week'] === 2  &&  (((s as any).week ?? 0) < 4  ||  (((s as any).week ?? 0) === 4  &&  ((s as any).hour ?? 0) < 9)))) {
            (s as any).result = 0;
          } else {
            (s as any).result = 1;
          }
        }
      }
    }
  } else {
    if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 2) {
      if (String((s as any).locArgs?.[1] ?? '') === 'patient care 102') {
        if (((s as any).university ?? 0)?.['exam_week'] === 1  &&  (((s as any).week ?? 0) < 4  ||  (((s as any).week ?? 0) === 4  &&  ((s as any).hour ?? 0) < 9))) {
          (s as any).result = 0;
        } else {
          (s as any).result = 1;
        }
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 'anatomy  &&  physiology 102') {
          if (((s as any).university ?? 0)?.['exam_week'] === 1  ||  (((s as any).university ?? 0)?.['exam_week'] === 2  &&  (((s as any).week ?? 0) < 2  ||  (((s as any).week ?? 0) === 2  &&  ((s as any).hour ?? 0) < 9)))) {
            (s as any).result = 0;
          } else {
            (s as any).result = 1;
          }
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 'examination  &&  treatment 102') {
            if (((s as any).university ?? 0)?.['exam_week'] === 1  ||  (((s as any).university ?? 0)?.['exam_week'] === 2  &&  (((s as any).week ?? 0) < 4  ||  (((s as any).week ?? 0) === 4  &&  ((s as any).hour ?? 0) < 9)))) {
              (s as any).result = 0;
            } else {
              (s as any).result = 1;
            }
          }
        }
      }
    } else {
      if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 3) {
        if (String((s as any).locArgs?.[1] ?? '') === 'patient care 201') {
          if (((s as any).university ?? 0)?.['exam_week'] === 1  &&  (((s as any).week ?? 0) < 4  ||  (((s as any).week ?? 0) === 4  &&  ((s as any).hour ?? 0) < 9))) {
            (s as any).result = 0;
          } else {
            (s as any).result = 1;
          }
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 'anatomy  &&  physiology 201') {
            if (((s as any).university ?? 0)?.['exam_week'] === 1  ||  (((s as any).university ?? 0)?.['exam_week'] === 2  &&  (((s as any).week ?? 0) < 2  ||  (((s as any).week ?? 0) === 2  &&  ((s as any).hour ?? 0) < 9)))) {
              (s as any).result = 0;
            } else {
              (s as any).result = 1;
            }
          } else {
            if (String((s as any).locArgs?.[1] ?? '') === 'dosages  &&  pharmaceuticals 101') {
              if (((s as any).university ?? 0)?.['exam_week'] === 1  ||  (((s as any).university ?? 0)?.['exam_week'] === 2  &&  (((s as any).week ?? 0) < 4  ||  (((s as any).week ?? 0) === 4  &&  ((s as any).hour ?? 0) < 9)))) {
                (s as any).result = 0;
              } else {
                (s as any).result = 1;
              }
            }
          }
        }
      } else {
        if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 4) {
          if (String((s as any).locArgs?.[1] ?? '') === 'patient care 202') {
            if (((s as any).university ?? 0)?.['exam_week'] === 1  &&  (((s as any).week ?? 0) < 4  ||  (((s as any).week ?? 0) === 4  &&  ((s as any).hour ?? 0) < 9))) {
              (s as any).result = 0;
            } else {
              (s as any).result = 1;
            }
          } else {
            if (String((s as any).locArgs?.[1] ?? '') === 'anatomy  &&  physiology 202') {
              if (((s as any).university ?? 0)?.['exam_week'] === 1  ||  (((s as any).university ?? 0)?.['exam_week'] === 2  &&  (((s as any).week ?? 0) < 2  ||  (((s as any).week ?? 0) === 2  &&  ((s as any).hour ?? 0) < 9)))) {
                (s as any).result = 0;
              } else {
                (s as any).result = 1;
              }
            } else {
              if (String((s as any).locArgs?.[1] ?? '') === 'dosages  &&  pharmaceuticals 102') {
                if (((s as any).university ?? 0)?.['exam_week'] === 1  ||  (((s as any).university ?? 0)?.['exam_week'] === 2  &&  (((s as any).week ?? 0) < 4  ||  (((s as any).week ?? 0) === 4  &&  ((s as any).hour ?? 0) < 9)))) {
                  (s as any).result = 0;
                } else {
                  (s as any).result = 1;
                }
              }
            }
          }
        }
      }
    }
  }
  return;
  scene.build();
}

function enterIsExamOverTeaching(s: GameState, scene: SceneBuilder): void {
  if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 1) {
    if (String((s as any).locArgs?.[1] ?? '') === 'general education 101') {
      if (((s as any).university ?? 0)?.['exam_week'] === 1  &&  (((s as any).week ?? 0) < 4  ||  (((s as any).week ?? 0) === 4  &&  ((s as any).hour ?? 0) < 9))) {
        (s as any).result = 0;
      } else {
        (s as any).result = 1;
      }
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'teaching methods 101') {
        if (((s as any).university ?? 0)?.['exam_week'] === 1  ||  (((s as any).university ?? 0)?.['exam_week'] === 2  &&  (((s as any).week ?? 0) < 2  ||  (((s as any).week ?? 0) === 2  &&  ((s as any).hour ?? 0) < 9)))) {
          (s as any).result = 0;
        } else {
          (s as any).result = 1;
        }
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 'learning theories 101') {
          if (((s as any).university ?? 0)?.['exam_week'] === 1  ||  (((s as any).university ?? 0)?.['exam_week'] === 2  &&  (((s as any).week ?? 0) < 4  ||  (((s as any).week ?? 0) === 4  &&  ((s as any).hour ?? 0) < 9)))) {
            (s as any).result = 0;
          } else {
            (s as any).result = 1;
          }
        }
      }
    }
  } else {
    if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 2) {
      if (String((s as any).locArgs?.[1] ?? '') === 'general education 102') {
        if (((s as any).university ?? 0)?.['exam_week'] === 1  &&  (((s as any).week ?? 0) < 4  ||  (((s as any).week ?? 0) === 4  &&  ((s as any).hour ?? 0) < 9))) {
          (s as any).result = 0;
        } else {
          (s as any).result = 1;
        }
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 'teaching methods 102') {
          if (((s as any).university ?? 0)?.['exam_week'] === 1  ||  (((s as any).university ?? 0)?.['exam_week'] === 2  &&  (((s as any).week ?? 0) < 2  ||  (((s as any).week ?? 0) === 2  &&  ((s as any).hour ?? 0) < 9)))) {
            (s as any).result = 0;
          } else {
            (s as any).result = 1;
          }
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 'Psychology of a Student 101') {
            if (((s as any).university ?? 0)?.['exam_week'] === 1  ||  (((s as any).university ?? 0)?.['exam_week'] === 2  &&  (((s as any).week ?? 0) < 4  ||  (((s as any).week ?? 0) === 4  &&  ((s as any).hour ?? 0) < 9)))) {
              (s as any).result = 0;
            } else {
              (s as any).result = 1;
            }
          }
        }
      }
    } else {
      if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 3) {
        if (String((s as any).locArgs?.[1] ?? '') === 'general education 201') {
          if (((s as any).university ?? 0)?.['exam_week'] === 1  &&  (((s as any).week ?? 0) < 4  ||  (((s as any).week ?? 0) === 4  &&  ((s as any).hour ?? 0) < 9))) {
            (s as any).Result = 0;
          } else {
            (s as any).Result = 1;
          }
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 'Assessment 201') {
            if (((s as any).university ?? 0)?.['exam_week'] === 1  ||  (((s as any).university ?? 0)?.['exam_week'] === 2  &&  (((s as any).week ?? 0) < 2  ||  (((s as any).week ?? 0) === 2  &&  ((s as any).hour ?? 0) < 9)))) {
              (s as any).Result = 0;
            } else {
              (s as any).Result = 1;
            }
          } else {
            if (String((s as any).locArgs?.[1] ?? '') === 'Learning Theories 201') {
              if (((s as any).university ?? 0)?.['exam_week'] === 1  ||  (((s as any).university ?? 0)?.['exam_week'] === 2  &&  (((s as any).week ?? 0) < 4  ||  (((s as any).week ?? 0) === 4  &&  ((s as any).hour ?? 0) < 9)))) {
                (s as any).Result = 0;
              } else {
                (s as any).Result = 1;
              }
            }
          }
        }
      } else {
        if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 4) {
          if (String((s as any).locArgs?.[1] ?? '') === 'general education 202') {
            if (((s as any).university ?? 0)?.['exam_week'] === 1  &&  (((s as any).week ?? 0) < 4  ||  (((s as any).week ?? 0) === 4  &&  ((s as any).hour ?? 0) < 9))) {
              (s as any).Result = 0;
            } else {
              (s as any).Result = 1;
            }
          } else {
            if (String((s as any).locArgs?.[1] ?? '') === 'Learning Theories 202') {
              if (((s as any).university ?? 0)?.['exam_week'] === 1  ||  (((s as any).university ?? 0)?.['exam_week'] === 2  &&  (((s as any).week ?? 0) < 2  ||  (((s as any).week ?? 0) === 2  &&  ((s as any).hour ?? 0) < 9)))) {
                (s as any).Result = 0;
              } else {
                (s as any).Result = 1;
              }
            } else {
              if (String((s as any).locArgs?.[1] ?? '') === 'Psychology of a Student 201') {
                if (((s as any).university ?? 0)?.['exam_week'] === 1  ||  (((s as any).university ?? 0)?.['exam_week'] === 2  &&  (((s as any).week ?? 0) < 4  ||  (((s as any).week ?? 0) === 4  &&  ((s as any).hour ?? 0) < 9)))) {
                  (s as any).Result = 0;
                } else {
                  (s as any).Result = 1;
                }
              }
            }
          }
        }
      }
    }
  }
  return;
  scene.build();
}

function enterSetExamAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).university ?? 0)?.['enrolled_in'] === 'nursing') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetExamActNursing(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).university ?? 0)?.['enrolled_in'] === 'teaching_studies') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetExamActTeaching(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  return;
  scene.build();
}

function enterSetExamActNursing(s: GameState, scene: SceneBuilder): void {
  if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 1) {
    if (((s as any).university ?? 0)?.['exam_week'] === 1) {
      if (((s as any).week ?? 0) === 4) {
        scene.text('\'Your Patient Care 101 exam will start at 9:00 today. You can go to it now or do other things first, but you need to be at the university plaza before it starts if you want to attend it.\'');
        scene.actions([
          { label: 'Go to your Patient Care 101 exam', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (9 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_exams1', 'patient_care_101');
  } },
        ]);
      }
    } else {
      if (((s as any).university ?? 0)?.['exam_week'] === 2) {
        if (((s as any).week ?? 0) === 2) {
          scene.text('\'Your Anatomy and Physiology 101 exam will start at 9:00. You can go to it now or do other things first, but you need to be at the university plaza before it starts if you want to attend it.\'');
          scene.actions([
            { label: 'Go to your Anatomy and Physiology 101 exam', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (9 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_exams1', 'anatomy_and_physiology_101');
  } },
          ]);
        } else {
          if (((s as any).week ?? 0) === 4) {
            scene.text('\'Your Examination and Treatment 101 exam will start at 9:00. You can go to it now or do other things first, but you need to be at the university plaza before it starts if you want to attend it.\'');
            scene.actions([
              { label: 'Go to your Examination and Treatment 101 exam', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (9 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_exams1', 'examination_and_treatment_101');
  } },
            ]);
          }
        }
      }
    }
  } else {
    if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 2) {
      if (((s as any).university ?? 0)?.['exam_week'] === 1) {
        if (((s as any).week ?? 0) === 4) {
          scene.text('\'Your Patient Care 102 exam will start at 9:00 today. You can go to it now or do other things first, but you need to be at the university plaza before it starts if you want to attend it.\'');
          scene.actions([
            { label: 'Go to your General Education 102 exam', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (9 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_exams2', 'patient_care_102');
  } },
          ]);
        }
      } else {
        if (((s as any).university ?? 0)?.['exam_week'] === 2) {
          if (((s as any).week ?? 0) === 2) {
            scene.text('\'Your Anatomy and Physiology 102 exam will start at 9:00. You can go to it now or do other things first, but you need to be at the university plaza before it starts if you want to attend it.\'');
            scene.actions([
              { label: 'Go to your Teaching Methods exam 102', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (9 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_exams2', 'anatomy_and_physiology_102');
  } },
            ]);
          } else {
            if (((s as any).week ?? 0) === 4) {
              scene.text('\'Your Examination and Treatment 102 exam will start at 9:00. You can go to it now or do other things first, but you need to be at the university plaza before it starts if you want to attend it.\'');
              scene.actions([
                { label: 'Go to your Psychology of a Student 101 exam', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (9 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_exams2', 'examination_and_treatment_102');
  } },
              ]);
            }
          }
        }
      }
    } else {
      if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 3) {
        if (((s as any).university ?? 0)?.['exam_week'] === 1) {
          if (((s as any).week ?? 0) === 4) {
            scene.text('\'Your Patient Care 201 exam will start at 9:00 today. You can go to it now or do other things first, but you need to be at the university plaza before it starts if you want to attend it.\'');
            scene.actions([
              { label: 'Go to your Patient Care 201 exam', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (9 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_exams3', 'patient_care_201');
  } },
            ]);
          }
        } else {
          if (((s as any).university ?? 0)?.['exam_week'] === 2) {
            if (((s as any).week ?? 0) === 2) {
              scene.text('\'Your Anatomy and Physiology 201 exam will start at 9:00. You can go to it now or do other things first, but you need to be at the university plaza before it starts if you want to attend it.\'');
              scene.actions([
                { label: 'Go to your Anatomy and Physiology 201 exam', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (9 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_exams3', 'anatomy_and_physiology_201');
  } },
              ]);
            } else {
              if (((s as any).week ?? 0) === 4) {
                scene.text('\'Your Dosages and Pharmaceuticals 101 exam will start at 9:00. You can go to it now or do other things first, but you need to be at the university plaza before it starts if you want to attend it.\'');
                scene.actions([
                  { label: 'Go to your Dosages and Pharmaceuticals 101 exam', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (9 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_exams3', 'dosages_and_pharmaceuticals_101');
  } },
                ]);
              }
            }
          }
        }
      } else {
        if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 4) {
          if (((s as any).university ?? 0)?.['exam_week'] === 1) {
            if (((s as any).week ?? 0) === 4) {
              scene.text('\'Your Patient Care 202 exam will start at 9:00 today. You can go to it now or do other things first, but you need to be at the university plaza before it starts if you want to attend it.\'');
              scene.actions([
                { label: 'Go to your Patient Care 202 exam', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (9 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_exams4', 'patient_care_202');
  } },
              ]);
            }
          } else {
            if (((s as any).university ?? 0)?.['exam_week'] === 2) {
              if (((s as any).week ?? 0) === 2) {
                scene.text('\'Your Anatomy and Physiology 202 exam will start at 9:00. You can go to it now or do other things first, but you need to be at the university plaza before it starts if you want to attend it.\'');
                scene.actions([
                  { label: 'Go to your Anatomy and Physiology 202 exam', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (9 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_exams4', 'anatomy_and_physiology_202');
  } },
                ]);
              } else {
                if (((s as any).week ?? 0) === 4) {
                  scene.text('\'Your Dosages and Pharmaceuticals 102 exam will start at 9:00. You can go to it now or do other things first, but you need to be at the university plaza before it starts if you want to attend it.\'');
                  scene.actions([
                    { label: 'Go to your Dosages and Pharmaceuticals 102 exam', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (9 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_exams4', 'dosages_and_pharmaceuticals_102');
  } },
                  ]);
                }
              }
            }
          }
        }
      }
    }
  }
  return;
  scene.build();
}

function enterSetExamActTeaching(s: GameState, scene: SceneBuilder): void {
  if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 1) {
    if (((s as any).university ?? 0)?.['exam_week'] === 1) {
      if (((s as any).week ?? 0) === 4) {
        scene.text('\'Your General Education 101 exam will start at 9:00 today. You can go to it now or do other things first, but you need to be at the university plaza before it starts if you want to attend it.\'');
        scene.actions([
          { label: 'Go to your General Education 101 exam', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (9 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_exams1', 'general_education_101');
  } },
        ]);
      }
    } else {
      if (((s as any).university ?? 0)?.['exam_week'] === 2) {
        if (((s as any).week ?? 0) === 2) {
          scene.text('\'Your Teaching Methods 101 exam will start at 9:00. You can go to it now or do other things first, but you need to be at the university plaza before it starts if you want to attend it.\'');
          scene.actions([
            { label: 'Go to your Teaching Methods 101 exam', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (9 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_exams1', 'teaching_methods_101');
  } },
          ]);
        } else {
          if (((s as any).week ?? 0) === 4) {
            scene.text('\'Your Learning Theories 101 exam will start at 9:00. You can go to it now or do other things first, but you need to be at the university plaza before it starts if you want to attend it.\'');
            scene.actions([
              { label: 'Go to your Learning Theories 101 exam', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (9 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_exams1', 'learning_theories_101');
  } },
            ]);
          }
        }
      }
    }
  } else {
    if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 2) {
      if (((s as any).university ?? 0)?.['exam_week'] === 1) {
        if (((s as any).week ?? 0) === 4) {
          scene.text('\'Your General Education 102 exam will start at 9:00 today. You can go to it now or do other things first, but you need to be at the university plaza before it starts if you want to attend it.\'');
          scene.actions([
            { label: 'Go to your General Education 102 exam', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (9 - ((st as any).hour ?? 0))*60- ((st as any).minut ?? 0)));
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_exams2', 'general_education_102');
  } },
          ]);
        }
      } else {
        if (((s as any).university ?? 0)?.['exam_week'] === 2) {
          if (((s as any).week ?? 0) === 2) {
            scene.text('\'Your Teaching Methods 102 exam will start at 9:00. You can go to it now or do other things first, but you need to be at the university plaza before it starts if you want to attend it.\'');
            scene.actions([
              { label: 'Go to your Teaching Methods exam 102', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (9 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_exams2', 'teaching_methods_102');
  } },
            ]);
          } else {
            if (((s as any).week ?? 0) === 4) {
              scene.text('\'Your Psychology of a Student 101 exam will start at 9:00. You can go to it now or do other things first, but you need to be at the university plaza before it starts if you want to attend it.\'');
              scene.actions([
                { label: 'Go to your Psychology of a Student 101 exam', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (9 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_exams2', 'psychology_of_a_student_101');
  } },
              ]);
            }
          }
        }
      }
    } else {
      if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 3) {
        if (((s as any).university ?? 0)?.['exam_week'] === 1) {
          if (((s as any).week ?? 0) === 4) {
            scene.text('\'Your General Education 102 exam will start at 9:00 today. You can go to it now or do other things first, but you need to be at the university plaza before it starts if you want to attend it.\'');
            scene.actions([
              { label: 'Go to your General Education 102 exam', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (9 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_exams3', 'general_education_201');
  } },
            ]);
          }
        } else {
          if (((s as any).university ?? 0)?.['exam_week'] === 2) {
            if (((s as any).week ?? 0) === 2) {
              scene.text('\'Your Assessment 201 exam will start at 9:00. You can go to it now or do other things first, but you need to be at the university plaza before it starts if you want to attend it.\'');
              scene.actions([
                { label: 'Go to your Assessment 201 exam', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (9 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_exams3', 'assessment_201');
  } },
              ]);
            } else {
              if (((s as any).week ?? 0) === 4) {
                scene.text('\'Your Learning Theories 201 exam will start at 9:00. You can go to it now or do other things first, but you need to be at the university plaza before it starts if you want to attend it.\'');
                scene.actions([
                  { label: 'Go to your Learning Theories 201 exam', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (9 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_exams3', 'learning_theories_201');
  } },
                ]);
              }
            }
          }
        }
      } else {
        if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 4) {
          if (((s as any).university ?? 0)?.['exam_week'] === 1) {
            if (((s as any).week ?? 0) === 4) {
              scene.text('\'Your General Education 202 exam will start at 9:00 today. You can go to it now or do other things first, but you need to be at the university plaza before it starts if you want to attend it.\'');
              scene.actions([
                { label: 'Go to your General Education 202 exam', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (9 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_exams4', 'general_education_202');
  } },
              ]);
            }
          } else {
            if (((s as any).university ?? 0)?.['exam_week'] === 2) {
              if (((s as any).week ?? 0) === 2) {
                scene.text('\'Your Learning Theories 202 exam will start at 9:00. You can go to it now or do other things first, but you need to be at the university plaza before it starts if you want to attend it.\'');
                scene.actions([
                  { label: 'Go to your Learning Theories 202 exam', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (9 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_exams4', 'learning_theories_202');
  } },
                ]);
              } else {
                if (((s as any).week ?? 0) === 4) {
                  scene.text('\'Your Psychology of a Student 201 exam will start at 9:00. You can go to it now or do other things first, but you need to be at the university plaza before it starts if you want to attend it.\'');
                  scene.actions([
                    { label: 'Go to your Psychology of a Student 201 exam', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (Math.max(0, (9 - ((st as any).hour ?? 0))*60 - ((st as any).minut ?? 0)));
    qspCall(st, 'stat', '');
    qspGoto(st, 'uni_exams4', 'psychology_of_a_student_201');
  } },
                  ]);
                }
              }
            }
          }
        }
      }
    }
  }
  return;
  scene.build();
}

function enterUniPeriodFirst(s: GameState, scene: SceneBuilder): void {
  if (((String(';monday;tuesday;wednesday;thursday;').indexOf(String(';' + ((s as any).locArgs?.[1] ?? 0) + ';'))) + 1)) {
    (s as any).result = qspFunc(s, 'uni_programs', 'get_first_period', ((s as any).locArgs?.[1] ?? 0));
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetFirstPeriodAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  scene.build();
}

function enterUniPeriodSecond(s: GameState, scene: SceneBuilder): void {
  if (((String(';monday;tuesday;wednesday;thursday;').indexOf(String(';' + ((s as any).locArgs?.[1] ?? 0) + ';'))) + 1)) {
    (s as any).result = qspFunc(s, 'uni_programs', 'get_second_period', ((s as any).locArgs?.[1] ?? 0));
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetSecondPeriodAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  scene.build();
}

function enterUniPeriodThird(s: GameState, scene: SceneBuilder): void {
  if (((String(';monday;tuesday;wednesday;thursday;').indexOf(String(';' + ((s as any).locArgs?.[1] ?? 0) + ';'))) + 1)) {
    (s as any).result = qspFunc(s, 'uni_programs', 'get_third_period', ((s as any).locArgs?.[1] ?? 0));
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetThirdPeriodAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  scene.build();
}

function enterExam(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'shedule') {
    (s as any).result = qspFunc(s, 'uni_programs', 'get_exam_schedul');
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'is_over') {
      (s as any).result = qspFunc(s, 'uni_programs', 'is_exam_over', ((s as any).locArgs?.[2] ?? 0));
    } else {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetExamAct(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'get_program_name':
      enterGetProgramName(s, scene);
      break;
    case 'program_name':
      enterProgramName(s, scene);
      break;
    case 'get_first_period':
      enterGetFirstPeriod(s, scene);
      break;
    case 'get_first_period_nursing':
      enterGetFirstPeriodNursing(s, scene);
      break;
    case 'get_first_period_teaching':
      enterGetFirstPeriodTeaching(s, scene);
      break;
    case 'get_second_period':
      enterGetSecondPeriod(s, scene);
      break;
    case 'get_second_period_nursing':
      enterGetSecondPeriodNursing(s, scene);
      break;
    case 'get_second_period_teaching':
      enterGetSecondPeriodTeaching(s, scene);
      break;
    case 'get_third_period':
      enterGetThirdPeriod(s, scene);
      break;
    case 'get_third_period_nursing':
      enterGetThirdPeriodNursing(s, scene);
      break;
    case 'get_third_period_teaching':
      enterGetThirdPeriodTeaching(s, scene);
      break;
    case 'set_first_period_act':
      enterSetFirstPeriodAct(s, scene);
      break;
    case 'set_first_period_act_nursing':
      enterSetFirstPeriodActNursing(s, scene);
      break;
    case 'set_first_period_act_teaching':
      enterSetFirstPeriodActTeaching(s, scene);
      break;
    case 'set_second_period_act':
      enterSetSecondPeriodAct(s, scene);
      break;
    case 'set_second_period_act_nursing':
      enterSetSecondPeriodActNursing(s, scene);
      break;
    case 'set_second_period_act_teaching':
      enterSetSecondPeriodActTeaching(s, scene);
      break;
    case 'set_third_period_act':
      enterSetThirdPeriodAct(s, scene);
      break;
    case 'set_third_period_act_nursing':
      enterSetThirdPeriodActNursing(s, scene);
      break;
    case 'set_third_period_act_teaching':
      enterSetThirdPeriodActTeaching(s, scene);
      break;
    case 'get_exam_schedule':
      enterGetExamSchedule(s, scene);
      break;
    case 'get_exam_schedule_nursing':
      enterGetExamScheduleNursing(s, scene);
      break;
    case 'get_exam_schedule_teaching':
      enterGetExamScheduleTeaching(s, scene);
      break;
    case 'is_exam_over':
      enterIsExamOver(s, scene);
      break;
    case 'is_exam_over_nursing':
      enterIsExamOverNursing(s, scene);
      break;
    case 'is_exam_over_teaching':
      enterIsExamOverTeaching(s, scene);
      break;
    case 'set_exam_act':
      enterSetExamAct(s, scene);
      break;
    case 'set_exam_act_nursing':
      enterSetExamActNursing(s, scene);
      break;
    case 'set_exam_act_teaching':
      enterSetExamActTeaching(s, scene);
      break;
    case 'uni_period_first':
      enterUniPeriodFirst(s, scene);
      break;
    case 'uni_period_second':
      enterUniPeriodSecond(s, scene);
      break;
    case 'uni_period_third':
      enterUniPeriodThird(s, scene);
      break;
    case 'exam':
      enterExam(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const uni_programs: LocationDef = {
  name: 'uni_programs',
  region: 'other',
  enter: enter,
};
