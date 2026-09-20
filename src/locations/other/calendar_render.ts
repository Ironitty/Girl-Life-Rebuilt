import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGetEventColor(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_color_idx = (((s as any).locArgs?.[1] ?? 0) - 1) % 20;
  if (((s as any).theme ?? 0)?.['is_dark'] === 1) {
    if ((!((s as any).temp_color_idx ?? 0))) {
      (s as any).result = '100, 120, 150';
    } else {
      if (((s as any).temp_color_idx ?? 0) === 1) {
        (s as any).result = '120, 100, 140';
      } else {
        if (((s as any).temp_color_idx ?? 0) === 2) {
          (s as any).result = '100, 140, 120';
        } else {
          if (((s as any).temp_color_idx ?? 0) === 3) {
            (s as any).result = '140, 120, 100';
          } else {
            if (((s as any).temp_color_idx ?? 0) === 4) {
              (s as any).result = '140, 100, 100';
            } else {
              if (((s as any).temp_color_idx ?? 0) === 5) {
                (s as any).result = '100, 140, 140';
              } else {
                if (((s as any).temp_color_idx ?? 0) === 6) {
                  (s as any).result = '140, 140, 100';
                } else {
                  if (((s as any).temp_color_idx ?? 0) === 7) {
                    (s as any).result = '140, 100, 140';
                  } else {
                    if (((s as any).temp_color_idx ?? 0) === 8) {
                      (s as any).result = '100, 130, 110';
                    } else {
                      if (((s as any).temp_color_idx ?? 0) === 9) {
                        (s as any).result = '130, 110, 100';
                      } else {
                        if (((s as any).temp_color_idx ?? 0) === 10) {
                          (s as any).result = '110, 100, 130';
                        } else {
                          if (((s as any).temp_color_idx ?? 0) === 11) {
                            (s as any).result = '100, 130, 130';
                          } else {
                            if (((s as any).temp_color_idx ?? 0) === 12) {
                              (s as any).result = '130, 100, 110';
                            } else {
                              if (((s as any).temp_color_idx ?? 0) === 13) {
                                (s as any).result = '110, 130, 100';
                              } else {
                                if (((s as any).temp_color_idx ?? 0) === 14) {
                                  (s as any).result = '130, 130, 100';
                                } else {
                                  if (((s as any).temp_color_idx ?? 0) === 15) {
                                    (s as any).result = '100, 110, 130';
                                  } else {
                                    if (((s as any).temp_color_idx ?? 0) === 16) {
                                      (s as any).result = '130, 110, 130';
                                    } else {
                                      if (((s as any).temp_color_idx ?? 0) === 17) {
                                        (s as any).result = '110, 130, 130';
                                      } else {
                                        if (((s as any).temp_color_idx ?? 0) === 18) {
                                          (s as any).result = '130, 100, 120';
                                        } else {
                                          if (((s as any).temp_color_idx ?? 0) === 19) {
                                            (s as any).result = '110, 120, 100';
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
  } else {
    if ((!((s as any).temp_color_idx ?? 0))) {
      (s as any).result = '100, 150, 220';
    } else {
      if (((s as any).temp_color_idx ?? 0) === 1) {
        (s as any).result = '180, 100, 220';
      } else {
        if (((s as any).temp_color_idx ?? 0) === 2) {
          (s as any).result = '100, 200, 180';
        } else {
          if (((s as any).temp_color_idx ?? 0) === 3) {
            (s as any).result = '220, 170, 100';
          } else {
            if (((s as any).temp_color_idx ?? 0) === 4) {
              (s as any).result = '220, 100, 100';
            } else {
              if (((s as any).temp_color_idx ?? 0) === 5) {
                (s as any).result = '100, 220, 220';
              } else {
                if (((s as any).temp_color_idx ?? 0) === 6) {
                  (s as any).result = '230, 220, 100';
                } else {
                  if (((s as any).temp_color_idx ?? 0) === 7) {
                    (s as any).result = '220, 100, 180';
                  } else {
                    if (((s as any).temp_color_idx ?? 0) === 8) {
                      (s as any).result = '120, 200, 120';
                    } else {
                      if (((s as any).temp_color_idx ?? 0) === 9) {
                        (s as any).result = '240, 150, 100';
                      } else {
                        if (((s as any).temp_color_idx ?? 0) === 10) {
                          (s as any).result = '180, 140, 220';
                        } else {
                          if (((s as any).temp_color_idx ?? 0) === 11) {
                            (s as any).result = '100, 200, 200';
                          } else {
                            if (((s as any).temp_color_idx ?? 0) === 12) {
                              (s as any).result = '220, 120, 160';
                            } else {
                              if (((s as any).temp_color_idx ?? 0) === 13) {
                                (s as any).result = '160, 220, 100';
                              } else {
                                if (((s as any).temp_color_idx ?? 0) === 14) {
                                  (s as any).result = '220, 200, 100';
                                } else {
                                  if (((s as any).temp_color_idx ?? 0) === 15) {
                                    (s as any).result = '120, 160, 200';
                                  } else {
                                    if (((s as any).temp_color_idx ?? 0) === 16) {
                                      (s as any).result = '200, 140, 220';
                                    } else {
                                      if (((s as any).temp_color_idx ?? 0) === 17) {
                                        (s as any).result = '100, 210, 210';
                                      } else {
                                        if (((s as any).temp_color_idx ?? 0) === 18) {
                                          (s as any).result = '240, 130, 140';
                                        } else {
                                          if (((s as any).temp_color_idx ?? 0) === 19) {
                                            (s as any).result = '140, 190, 120';
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
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetTimeslotBgColor(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_hour = ((s as any).locArgs?.[1] ?? 0) / 4;
  if (((s as any).temp_hour ?? 0) % 2 === 0) {
    (s as any).result = ((s as any).theme_hex ?? 0)?.['table_bg'];
  } else {
    (s as any).result = ((s as any).theme_hex ?? 0)?.['table_bg_alt'];
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIsTodayBusyAtTimeslot(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_check_ts = ((s as any).locArgs?.[1] ?? 0);
  (s as any).result = 0;
  (s as any).temp_week_start = ((s as any).week_schedule ?? 0)?.['start_daystart'];
  (s as any).temp_days_from_monday = ((s as any).daystart ?? 0) - ((s as any).temp_week_start ?? 0);
  if (((s as any).temp_days_from_monday ?? 0) >= 0  &&  ((s as any).temp_days_from_monday ?? 0) <= 6) {
    (s as any).result = ((((s as any).week_schedule ?? 0)['days=' + ((s as any).temp_days_from_monday ?? 0) + 1 + ', timeslots=' + ((s as any).temp_check_ts ?? 0) + ', busy_count'] > 0) ? (1) : (0));
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRenderCalendar(s: GameState, scene: SceneBuilder): void {
  (s as any).result = '<div style="text-align: center;"><table class="calendar-table" border="1" cellspacing="0" cellpadding="2" style="width: 98%; table-layout: fixed; margin: 0 auto;">';
  // TODO-QSP: $result += $func('calendar_render', 'render_header')
  // TODO-QSP: $result += $func('calendar_render', 'render_allday_section')
  (s as any).temp_cal_first_slot = qspFunc(s, 'calendar_render', 'get_first_timeslot');
  (s as any).temp_cal_ts = ((s as any).temp_cal_first_slot ?? 0);
  // TODO-QSP: :loop_timeslots_cal
  // TODO-QSP: $result += $func('calendar_render', 'render_timeslot_row', temp_cal_ts)
  (s as any).temp_cal_ts = ((s as any).temp_cal_ts ?? 0) + (1);
  if (((s as any).temp_cal_ts ?? 0) < 96) {
    // TODO-QSP: jump 'loop_timeslots_cal'
  }
  // TODO-QSP: $result += '</table></div>'
  // TODO-QSP: $result += '<center><small>❀ = Current timeslot, ⚘ = Busy timeslot today, Timeslot = 15 minute perio...
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRenderHeader(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_hdr_first_slot = qspFunc(s, 'calendar_render', 'get_first_timeslot');
  (s as any).temp_hdr_bg = qspFunc(s, 'calendar_render', 'get_timeslot_bg_color', ((s as any).temp_hdr_first_slot ?? 0) + 4);
  (s as any).result = '<tr style="background-color: ' + ((s as any).temp_hdr_bg ?? 0) + ';">';
  // TODO-QSP: $result += '<th style="width: 80px;">Time</th>'
  // TODO-QSP: $result += '<th style="width: 20px; text-align: center;">❀</th>'
  (s as any).temp_hdr_d = 1;
  // TODO-QSP: :loop_days_hdr
  (s as any).temp_hdr_day_date = ((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_hdr_d ?? 0)) + ', date'];
  (s as any).temp_hdr_max_cols = ((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_hdr_d ?? 0)) + ', max_columns'];
  if (((s as any).temp_hdr_max_cols ?? 0) < 1) {
    (s as any).temp_hdr_max_cols = 1;
  }
  if (((s as any).temp_hdr_d ?? 0) === 1) {
    (s as any).temp_hdr_day_name = 'Monday';
  }
  if (((s as any).temp_hdr_d ?? 0) === 2) {
    (s as any).temp_hdr_day_name = 'Tuesday';
  }
  if (((s as any).temp_hdr_d ?? 0) === 3) {
    (s as any).temp_hdr_day_name = 'Wednesday';
  }
  if (((s as any).temp_hdr_d ?? 0) === 4) {
    (s as any).temp_hdr_day_name = 'Thursday';
  }
  if (((s as any).temp_hdr_d ?? 0) === 5) {
    (s as any).temp_hdr_day_name = 'Friday';
  }
  if (((s as any).temp_hdr_d ?? 0) === 6) {
    (s as any).temp_hdr_day_name = 'Saturday';
  }
  if (((s as any).temp_hdr_d ?? 0) === 7) {
    (s as any).temp_hdr_day_name = 'Sunday';
  }
  qspCall(s, 'time', 'to_date', ((s as any).temp_hdr_day_date ?? 0));
  (s as any).temp_hdr_month = ((s as any).dateVars ?? 0)?.['month'];
  (s as any).temp_hdr_day = ((s as any).dateVars ?? 0)?.['day'];
  if (((s as any).temp_hdr_month ?? 0) === 1) {
    (s as any).temp_hdr_month_name = 'January';
  }
  if (((s as any).temp_hdr_month ?? 0) === 2) {
    (s as any).temp_hdr_month_name = 'February';
  }
  if (((s as any).temp_hdr_month ?? 0) === 3) {
    (s as any).temp_hdr_month_name = 'March';
  }
  if (((s as any).temp_hdr_month ?? 0) === 4) {
    (s as any).temp_hdr_month_name = 'April';
  }
  if (((s as any).temp_hdr_month ?? 0) === 5) {
    (s as any).temp_hdr_month_name = 'May';
  }
  if (((s as any).temp_hdr_month ?? 0) === 6) {
    (s as any).temp_hdr_month_name = 'June';
  }
  if (((s as any).temp_hdr_month ?? 0) === 7) {
    (s as any).temp_hdr_month_name = 'July';
  }
  if (((s as any).temp_hdr_month ?? 0) === 8) {
    (s as any).temp_hdr_month_name = 'August';
  }
  if (((s as any).temp_hdr_month ?? 0) === 9) {
    (s as any).temp_hdr_month_name = 'September';
  }
  if (((s as any).temp_hdr_month ?? 0) === 10) {
    (s as any).temp_hdr_month_name = 'October';
  }
  if (((s as any).temp_hdr_month ?? 0) === 11) {
    (s as any).temp_hdr_month_name = 'November';
  }
  if (((s as any).temp_hdr_month ?? 0) === 12) {
    (s as any).temp_hdr_month_name = 'December';
  }
  if ((((s as any).temp_hdr_day ?? 0) >= 4  &&  ((s as any).temp_hdr_day ?? 0) <= 20)) {
    (s as any).temp_hdr_suffix = 'th';
  } else {
    if (((s as any).temp_hdr_day ?? 0) % 10 === 1) {
      (s as any).temp_hdr_suffix = 'st';
    } else {
      if (((s as any).temp_hdr_day ?? 0) % 10 === 2) {
        (s as any).temp_hdr_suffix = 'nd';
      } else {
        if (((s as any).temp_hdr_day ?? 0) % 10 === 3) {
          (s as any).temp_hdr_suffix = 'rd';
        } else {
          (s as any).temp_hdr_suffix = 'th';
        }
      }
    }
  }
  (s as any).temp_hdr_date_str = ((s as any).temp_hdr_month_name ?? 0) + ' ' + String(((s as any).temp_hdr_day ?? 0)) + ((s as any).temp_hdr_suffix ?? 0);
  (s as any).temp_hdr_style = '';
  if (((s as any).temp_hdr_day_date ?? 0) === ((s as any).daystart ?? 0)) {
    (s as any).temp_hdr_style = ' color: ' + ((s as any).theme_hex ?? 0)?.['accent'] + ';';
  }
  // TODO-QSP: $result += '<th style="width: 13%;' + $temp_hdr_style + '" colspan="' + $str(temp_hdr_max_cols) + '"...
  // TODO-QSP: $result += $temp_hdr_day_name + '<br>' + $temp_hdr_date_str + '</th>'
  (s as any).temp_hdr_d = ((s as any).temp_hdr_d ?? 0) + (1);
  if (((s as any).temp_hdr_d ?? 0) <= 7) {
    // TODO-QSP: jump 'loop_days_hdr'
  }
  // TODO-QSP: $result += '</tr>'
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRenderAlldaySection(s: GameState, scene: SceneBuilder): void {
  (s as any).result = '';
  (s as any).temp_ad_max_rows = ((s as any).week_schedule ?? 0)?.['days=1, max_allday_rows'];
  if ((!((s as any).temp_ad_max_rows ?? 0))) {
    return;
  }
  (s as any).temp_ad_first_slot = qspFunc(s, 'calendar_render', 'get_first_timeslot');
  (s as any).temp_ad_empty_bg = qspFunc(s, 'calendar_render', 'get_timeslot_bg_color', ((s as any).temp_ad_first_slot ?? 0) + 4);
  (s as any).temp_ad_row = 0;
  // TODO-QSP: :loop_allday_rows_ad
  // TODO-QSP: $result += '<tr class="allday-row">'
  if ((!((s as any).temp_ad_row ?? 0))) {
    // TODO-QSP: $result += '<td class="time-cell allday-label" rowspan="<<$str(temp_ad_max_rows)>>" style="vertical-...
    // TODO-QSP: $result += '<td rowspan="<<$str(temp_ad_max_rows)>>" style="width: 20px; border: 1; background-color...
  }
  (s as any).temp_ad_d = 1;
  // TODO-QSP: :loop_days_ad
  (s as any).temp_ad_max_cols = ((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_ad_d ?? 0)) + ', max_columns'];
  if (((s as any).temp_ad_max_cols ?? 0) < 1) {
    (s as any).temp_ad_max_cols = 1;
  }
  (s as any).temp_ad_event_id = ((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_ad_d ?? 0)) + ', allday=' + String(((s as any).temp_ad_row ?? 0)) + ', id'];
  if (((s as any).temp_ad_event_id ?? 0) !== '') {
    (s as any).temp_ad_event_colspan = ((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_ad_d ?? 0)) + ', allday=' + String(((s as any).temp_ad_row ?? 0)) + ', colspan'];
    (s as any).temp_ad_title = ((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_ad_d ?? 0)) + ', allday=' + String(((s as any).temp_ad_row ?? 0)) + ', title'];
    (s as any).temp_ad_color = ((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_ad_d ?? 0)) + ', allday=' + String(((s as any).temp_ad_row ?? 0)) + ', color'];
    (s as any).temp_ad_color_rgb = qspFunc(s, 'calendar_render', 'get_event_color', ((s as any).temp_ad_color ?? 0));
    (s as any).temp_ad_html_colspan = 0;
    (s as any).temp_ad_span_day = ((s as any).temp_ad_d ?? 0);
    // TODO-QSP: :calc_html_colspan
    (s as any).temp_ad_span_max_cols = ((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_ad_span_day ?? 0)) + ', max_columns'];
    if (((s as any).temp_ad_span_max_cols ?? 0) < 1) {
      (s as any).temp_ad_span_max_cols = 1;
    }
    (s as any).temp_ad_html_colspan = ((s as any).temp_ad_html_colspan ?? 0) + (((s as any).temp_ad_span_max_cols ?? 0));
    (s as any).temp_ad_span_day = ((s as any).temp_ad_span_day ?? 0) + (1);
    if (((s as any).temp_ad_span_day ?? 0) < ((s as any).temp_ad_d ?? 0) + ((s as any).temp_ad_event_colspan ?? 0)) {
      // TODO-QSP: jump 'calc_html_colspan'
    }
    // TODO-QSP: $result += '<td class="allday-event" colspan="' + $str(temp_ad_html_colspan) + '" '
    // TODO-QSP: $result += 'style="background-color: rgb(' + $temp_ad_color_rgb + '); text-align: center; vertical-a...
    // TODO-QSP: $result += '<div class="event-title" style="word-wrap: break-word; overflow-wrap: break-word;">' + $...
    // TODO-QSP: $result += '</td>'
    (s as any).temp_ad_d = ((s as any).temp_ad_d ?? 0) + ((((s as any).temp_ad_event_colspan ?? 0) - 1));
  } else {
    if (((s as any).week_schedule ?? 0)['days=' + ((s as any).temp_ad_d ?? 0) + ', allday=' + ((s as any).temp_ad_row ?? 0) + ', continued'] === 1) {
    } else {
      (s as any).temp_ad_empty_colspan = 0;
      (s as any).temp_ad_check_day = ((s as any).temp_ad_d ?? 0);
      // TODO-QSP: :count_empty_days
      if (((s as any).temp_ad_check_day ?? 0) <= 7) {
        (s as any).temp_ad_check_id = ((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_ad_check_day ?? 0)) + ', allday=' + String(((s as any).temp_ad_row ?? 0)) + ', id'];
        (s as any).temp_ad_check_continued = ((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_ad_check_day ?? 0)) + ', allday=' + String(((s as any).temp_ad_row ?? 0)) + ', continued'];
        if (((s as any).temp_ad_check_id ?? 0) === ''  &&  (!((s as any).temp_ad_check_continued ?? 0))) {
          (s as any).temp_ad_check_cols = ((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_ad_check_day ?? 0)) + ', max_columns'];
          if (((s as any).temp_ad_check_cols ?? 0) < 1) {
            (s as any).temp_ad_check_cols = 1;
          }
          (s as any).temp_ad_empty_colspan = ((s as any).temp_ad_empty_colspan ?? 0) + (((s as any).temp_ad_check_cols ?? 0));
          (s as any).temp_ad_check_day = ((s as any).temp_ad_check_day ?? 0) + (1);
          // TODO-QSP: jump 'count_empty_days'
        }
      }
      if (((s as any).temp_ad_empty_colspan ?? 0) > 0) {
        // TODO-QSP: $result += '<td class="allday-empty" colspan="' + $str(temp_ad_empty_colspan) + '" style="background...
        (s as any).temp_ad_d = ((s as any).temp_ad_check_day ?? 0) - 1;
      }
    }
  }
  (s as any).temp_ad_d = ((s as any).temp_ad_d ?? 0) + (1);
  if (((s as any).temp_ad_d ?? 0) <= 7) {
    // TODO-QSP: jump 'loop_days_ad'
  }
  // TODO-QSP: $result += '</tr>'
  (s as any).temp_ad_row = ((s as any).temp_ad_row ?? 0) + (1);
  if (((s as any).temp_ad_row ?? 0) < ((s as any).temp_ad_max_rows ?? 0)) {
    // TODO-QSP: jump 'loop_allday_rows_ad'
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetFirstTimeslot(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_gfs_first = 28;
  (s as any).temp_gfs_d = 1;
  // TODO-QSP: :loop_check_days_gfs
  (s as any).temp_gfs_t = 0;
  // TODO-QSP: :loop_check_timeslots_gfs
  (s as any).temp_gfs_count = ((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_gfs_d ?? 0)) + ', timeslots=' + String(((s as any).temp_gfs_t ?? 0)) + ', event_count'];
  if (((s as any).temp_gfs_count ?? 0) > 0) {
    (s as any).temp_gfs_event_hour = ((s as any).temp_gfs_t ?? 0) / 4 * 4;
    if (((s as any).temp_gfs_event_hour ?? 0) < ((s as any).temp_gfs_first ?? 0)) {
      (s as any).temp_gfs_first = ((s as any).temp_gfs_event_hour ?? 0);
    }
  }
  (s as any).temp_gfs_t = ((s as any).temp_gfs_t ?? 0) + (1);
  if (((s as any).temp_gfs_t ?? 0) < 96) {
    // TODO-QSP: jump 'loop_check_timeslots_gfs'
  }
  (s as any).temp_gfs_d = ((s as any).temp_gfs_d ?? 0) + (1);
  if (((s as any).temp_gfs_d ?? 0) <= 7) {
    // TODO-QSP: jump 'loop_check_days_gfs'
  }
  (s as any).result = ((s as any).temp_gfs_first ?? 0);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRenderTimeslotRow(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_rtr_ts = ((s as any).locArgs?.[1] ?? 0);
  (s as any).result = '<tr>';
  if (((s as any).temp_rtr_ts ?? 0) % 4 === 0) {
    (s as any).temp_rtr_hours = ((s as any).temp_rtr_ts ?? 0) / 4;
    (s as any).temp_rtr_bg = qspFunc(s, 'calendar_render', 'get_timeslot_bg_color', ((s as any).temp_rtr_ts ?? 0));
    (s as any).temp_rtr_time_style = 'vertical-align: middle; text-align: center; background-color: ' + ((s as any).temp_rtr_bg ?? 0) + ';';
    // TODO-QSP: $result += '<td class="time-cell" rowspan="4" style="' + $temp_rtr_time_style + '">'
    // TODO-QSP: $result += $func('time', 'get_time_string', temp_rtr_hours, 0, 0)
    // TODO-QSP: $result += '</td>'
  }
  (s as any).temp_current_ts = (((s as any).hour ?? 0) * 4) + (((s as any).minut ?? 0) / 15);
  (s as any).temp_is_current = ((((s as any).temp_rtr_ts ?? 0) === ((s as any).temp_current_ts ?? 0)) ? (1) : (0));
  (s as any).temp_is_busy = qspFunc(s, 'calendar_render', 'is_today_busy_at_timeslot', ((s as any).temp_rtr_ts ?? 0));
  if (((s as any).temp_is_current ?? 0) === 1) {
    if (((s as any).temp_is_busy ?? 0) === 1) {
      (s as any).temp_indicator_char = '✿';
    } else {
      (s as any).temp_indicator_char = '❀';
    }
    // TODO-QSP: $result += '<td style="width: 20px; padding: 2px; border: 1; text-align: center; background-color: '...
  } else {
    (s as any).temp_indicator_bg = qspFunc(s, 'calendar_render', 'get_timeslot_bg_color', ((s as any).temp_rtr_ts ?? 0));
    if (((s as any).temp_is_busy ?? 0) === 1) {
      (s as any).temp_indicator_char = '⚘';
    } else {
      (s as any).temp_indicator_char = '&nbsp;';
    }
    // TODO-QSP: $result += '<td style="width: 20px; padding: 2px; border: 1; text-align: center; background-color: '...
  }
  (s as any).temp_rtr_d = 1;
  // TODO-QSP: :loop_days_rtr
  // TODO-QSP: $result += $func('calendar_render', 'render_day_cell', temp_rtr_d, temp_rtr_ts)
  (s as any).temp_rtr_d = ((s as any).temp_rtr_d ?? 0) + (1);
  if (((s as any).temp_rtr_d ?? 0) <= 7) {
    // TODO-QSP: jump 'loop_days_rtr'
  }
  // TODO-QSP: $result += '</tr>'
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRenderDayCell(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_d = ((s as any).locArgs?.[1] ?? 0);
  (s as any).temp_t = ((s as any).locArgs?.[2] ?? 0);
  (s as any).result = '';
  (s as any).temp_max_cols = ((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', max_columns'];
  if (((s as any).temp_max_cols ?? 0) < 1) {
    (s as any).temp_max_cols = 1;
  }
  (s as any).temp_event_count = ((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_t ?? 0)) + ', event_count'];
  (s as any).temp_scan_ts = 0;
  // TODO-QSP: :scan_earlier_events
  if (((s as any).temp_scan_ts ?? 0) >= ((s as any).temp_t ?? 0)) {
    // TODO-QSP: jump 'done_scanning'
  }
  (s as any).temp_scan_count = ((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_scan_ts ?? 0)) + ', event_count'];
  if (((s as any).temp_scan_count ?? 0) > 0) {
    (s as any).temp_scan_e = 0;
    // TODO-QSP: :loop_scan_events
    (s as any).temp_scan_hidden = ((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_scan_ts ?? 0)) + ', events=' + String(((s as any).temp_scan_e ?? 0)) + ', is_hidden'];
    if ((!((s as any).temp_scan_hidden ?? 0))) {
      (s as any).temp_scan_span = ((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_scan_ts ?? 0)) + ', events=' + String(((s as any).temp_scan_e ?? 0)) + ', span'];
      (s as any).temp_scan_end = ((s as any).temp_scan_ts ?? 0) + ((s as any).temp_scan_span ?? 0) - 1;
      if (((s as any).temp_scan_end ?? 0) >= ((s as any).temp_t ?? 0)) {
        (s as any).temp_scan_col = ((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_scan_ts ?? 0)) + ', events=' + String(((s as any).temp_scan_e ?? 0)) + ', column'];
        (s as any).temp_scan_colspan = ((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_scan_ts ?? 0)) + ', events=' + String(((s as any).temp_scan_e ?? 0)) + ', colspan'];
        (s as any).temp_c = ((s as any).temp_scan_col ?? 0);
        // TODO-QSP: :mark_continuing
        ((s as any).temp_column_filled = (s as any).temp_column_filled ?? {})[String((s as any).temp_c ?? 0)] = 1;
        (s as any).temp_c = ((s as any).temp_c ?? 0) + (1);
        if (((s as any).temp_c ?? 0) < ((s as any).temp_scan_col ?? 0) + ((s as any).temp_scan_colspan ?? 0)) {
          // TODO-QSP: jump 'mark_continuing'
        }
      }
    }
    (s as any).temp_scan_e = ((s as any).temp_scan_e ?? 0) + (1);
    if (((s as any).temp_scan_e ?? 0) < ((s as any).temp_scan_count ?? 0)) {
      // TODO-QSP: jump 'loop_scan_events'
    }
  }
  (s as any).temp_scan_ts = ((s as any).temp_scan_ts ?? 0) + (1);
  // TODO-QSP: jump 'scan_earlier_events'
  // TODO-QSP: :done_scanning
  (s as any).temp_init_col = 0;
  // TODO-QSP: :init_event_index
  ((s as any).temp_column_event_index = (s as any).temp_column_event_index ?? {})[String((s as any).temp_init_col ?? 0)] = (-1);
  (s as any).temp_init_col = ((s as any).temp_init_col ?? 0) + (1);
  if (((s as any).temp_init_col ?? 0) < ((s as any).temp_max_cols ?? 0)) {
    // TODO-QSP: jump 'init_event_index'
  }
  if (((s as any).temp_event_count ?? 0) > 0) {
    (s as any).temp_e = 0;
    // TODO-QSP: :loop_map_events
    (s as any).temp_is_hidden = ((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_t ?? 0)) + ', events=' + String(((s as any).temp_e ?? 0)) + ', is_hidden'];
    if ((!((s as any).temp_is_hidden ?? 0))) {
      (s as any).temp_col = ((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_t ?? 0)) + ', events=' + String(((s as any).temp_e ?? 0)) + ', column'];
      (s as any).temp_colspan = ((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_t ?? 0)) + ', events=' + String(((s as any).temp_e ?? 0)) + ', colspan'];
      ((s as any).temp_column_event_index = (s as any).temp_column_event_index ?? {})[String((s as any).temp_col ?? 0)] = ((s as any).temp_e ?? 0);
      (s as any).temp_c = ((s as any).temp_col ?? 0);
      // TODO-QSP: :mark_columns
      ((s as any).temp_column_filled = (s as any).temp_column_filled ?? {})[String((s as any).temp_c ?? 0)] = 1;
      (s as any).temp_c = ((s as any).temp_c ?? 0) + (1);
      if (((s as any).temp_c ?? 0) < ((s as any).temp_col ?? 0) + ((s as any).temp_colspan ?? 0)) {
        // TODO-QSP: jump 'mark_columns'
      }
    }
    (s as any).temp_e = ((s as any).temp_e ?? 0) + (1);
    if (((s as any).temp_e ?? 0) < ((s as any).temp_event_count ?? 0)) {
      // TODO-QSP: jump 'loop_map_events'
    }
  }
  if (((s as any).temp_max_cols ?? 0) > 1) {
    (s as any).temp_col = 0;
    // TODO-QSP: :render_columns
    if (((s as any).temp_column_filled ?? 0)?.[String((s as any).temp_col ?? 0)] === 1) {
      if (((s as any).temp_column_event_index ?? 0)?.[String((s as any).temp_col ?? 0)] >= 0) {
        (s as any).temp_e = ((s as any).temp_column_event_index ?? 0)?.[String((s as any).temp_col ?? 0)];
        (s as any).temp_colspan = ((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_t ?? 0)) + ', events=' + String(((s as any).temp_e ?? 0)) + ', colspan'];
        (s as any).temp_rowspan = ((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_t ?? 0)) + ', events=' + String(((s as any).temp_e ?? 0)) + ', span'];
        // TODO-QSP: $result += $func('calendar_render', 'render_event_cell', temp_d, temp_t, temp_e, temp_rowspan, temp_...
        (s as any).temp_col = ((s as any).temp_col ?? 0) + (((s as any).temp_colspan ?? 0) - 1);
      }
    } else {
      (s as any).temp_empty_colspan = 0;
      (s as any).temp_check_col = ((s as any).temp_col ?? 0);
      // TODO-QSP: :count_empty
      (s as any).temp_empty_colspan = ((s as any).temp_empty_colspan ?? 0) + (1);
      (s as any).temp_check_col = ((s as any).temp_check_col ?? 0) + (1);
      if (((s as any).temp_check_col ?? 0) < ((s as any).temp_max_cols ?? 0)  &&  ((s as any).temp_column_filled ?? 0)?.[String((s as any).temp_check_col ?? 0)] === 0) {
        // TODO-QSP: jump 'count_empty'
      }
      // TODO-QSP: $result += $func('calendar_render', 'render_empty_cell', 1, temp_empty_colspan, temp_t, temp_d)
      (s as any).temp_col = ((s as any).temp_col ?? 0) + (((s as any).temp_empty_colspan ?? 0) - 1);
    }
    (s as any).temp_col = ((s as any).temp_col ?? 0) + (1);
    if (((s as any).temp_col ?? 0) < ((s as any).temp_max_cols ?? 0)) {
      // TODO-QSP: jump 'render_columns'
    }
  } else {
    if (((s as any).temp_event_count ?? 0) > 0) {
      (s as any).temp_is_hidden = ((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_t ?? 0)) + ', events=0, is_hidden'];
      if ((!((s as any).temp_is_hidden ?? 0))) {
        (s as any).temp_rowspan = ((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_t ?? 0)) + ', events=0, span'];
        // TODO-QSP: $result += $func('calendar_render', 'render_event_cell', temp_d, temp_t, 0, temp_rowspan, 1)
      } else {
        if (((s as any).temp_column_filled ?? 0)[0] === 0) {
          // TODO-QSP: $result += $func('calendar_render', 'render_empty_cell', 1, 1, temp_t, temp_d)
        }
      }
    } else {
      if (((s as any).temp_column_filled ?? 0)[0] === 0) {
        // TODO-QSP: $result += $func('calendar_render', 'render_empty_cell', 1, 1, temp_t, temp_d)
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRenderEventCell(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_d = ((s as any).locArgs?.[1] ?? 0);
  (s as any).temp_t = ((s as any).locArgs?.[2] ?? 0);
  (s as any).temp_e = ((s as any).locArgs?.[3] ?? 0);
  (s as any).temp_rowspan = ((s as any).locArgs?.[4] ?? 0);
  (s as any).temp_colspan = ((s as any).locArgs?.[5] ?? 0);
  (s as any).temp_is_hidden = ((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_t ?? 0)) + ', events=' + String(((s as any).temp_e ?? 0)) + ', is_hidden'];
  if (((s as any).temp_is_hidden ?? 0) === 1) {
    (s as any).result = qspFunc(s, 'calendar_render', 'render_empty_cell', ((s as any).temp_rowspan ?? 0), ((s as any).temp_colspan ?? 0), ((s as any).temp_t ?? 0), ((s as any).temp_d ?? 0));
    return;
  }
  (s as any).temp_event_id = ((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_t ?? 0)) + ', events=' + String(((s as any).temp_e ?? 0)) + ', id'];
  (s as any).temp_title = ((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_t ?? 0)) + ', events=' + String(((s as any).temp_e ?? 0)) + ', title'];
  (s as any).temp_location = ((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_t ?? 0)) + ', events=' + String(((s as any).temp_e ?? 0)) + ', location'];
  (s as any).temp_desc = ((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_t ?? 0)) + ', events=' + String(((s as any).temp_e ?? 0)) + ', description'];
  (s as any).temp_color = ((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_t ?? 0)) + ', events=' + String(((s as any).temp_e ?? 0)) + ', color'];
  (s as any).temp_is_flex = ((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_t ?? 0)) + ', events=' + String(((s as any).temp_e ?? 0)) + ', is_flex'];
  (s as any).temp_color_rgb = qspFunc(s, 'calendar_render', 'get_event_color', ((s as any).temp_color ?? 0));
  if (((s as any).temp_is_flex ?? 0) === 1) {
    (s as any).temp_window_slots = ((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_t ?? 0)) + ', events=' + String(((s as any).temp_e ?? 0)) + ', window_slots'];
    (s as any).temp_event_slots = ((s as any).week_schedule ?? 0)?.['days=' + String(((s as any).temp_d ?? 0)) + ', timeslots=' + String(((s as any).temp_t ?? 0)) + ', events=' + String(((s as any).temp_e ?? 0)) + ', event_slots'];
    (s as any).temp_total_slots = ((s as any).temp_window_slots ?? 0) + ((s as any).temp_event_slots ?? 0);
    (s as any).temp_window_percent_int = (((s as any).temp_window_slots ?? 0) * 1000000) / ((s as any).temp_total_slots ?? 0);
    (s as any).temp_event_percent_int = (((s as any).temp_event_slots ?? 0) * 1000000) / ((s as any).temp_total_slots ?? 0);
    (s as any).temp_window_percent = String(((s as any).temp_window_percent_int ?? 0) / 10000) + '.' + String(((s as any).temp_window_percent_int ?? 0) % 10000);
    (s as any).temp_event_percent = String(((s as any).temp_event_percent_int ?? 0) / 10000) + '.' + String(((s as any).temp_event_percent_int ?? 0) % 10000);
    (s as any).result = '<td rowspan="' + String(((s as any).temp_rowspan ?? 0)) + '" colspan="' + String(((s as any).temp_colspan ?? 0)) + '" ';
    // TODO-QSP: $result += 'class="event-cell" style="padding: 0 !important; position: relative;">'
    // TODO-QSP: $result += '<div class="event-window" style="position: absolute; top: 0; left: 0; right: 0; height: ...
    // TODO-QSP: $result += 'margin: 0; padding: 0; box-sizing: border-box; overflow: hidden; '
    // TODO-QSP: $result += 'display: flex; flex-direction: column; justify-content: center; '
    // TODO-QSP: $result += 'background: repeating-linear-gradient(45deg, rgba(' + $temp_color_rgb + ', 0.9), rgba(' ...
    // TODO-QSP: $result += 'rgba(' + $temp_color_rgb + ', 0.7) 10px, rgba(' + $temp_color_rgb + ', 0.7) 20px);">'
    if (((s as any).temp_window_slots ?? 0) >= 6) {
      (s as any).temp_window_start = ((s as any).temp_t ?? 0);
      (s as any).temp_window_end = ((s as any).temp_t ?? 0) + ((s as any).temp_window_slots ?? 0) - 1;
      (s as any).temp_window_time = qspFunc(s, 'calendar_query', 'ts_to_str', ((s as any).temp_window_start ?? 0)) + '-' + qspFunc(s, 'calendar_query', 'ts_to_str', ((s as any).temp_window_end ?? 0));
      // TODO-QSP: $result += '<div class="event-time" style="font-size: 0.9em; opacity: 0.8; word-wrap: break-word; ov...
    }
    // TODO-QSP: $result += '</div>'
    (s as any).temp_event_space = ((s as any).temp_colspan ?? 0) * ((s as any).temp_event_slots ?? 0);
    // TODO-QSP: $result += '<div class="event-main" style="position: absolute; top: ' + $temp_window_percent + '%; l...
    // TODO-QSP: $result += 'margin: 0; padding: 0; box-sizing: border-box; overflow: hidden; '
    // TODO-QSP: $result += 'display: flex; flex-direction: column; justify-content: center; '
    // TODO-QSP: $result += 'background-color: rgb(' + $temp_color_rgb + ');">'
    // TODO-QSP: $result += '<div class="event-title" style="word-wrap: break-word; overflow-wrap: break-word;">' + $...
    if (((s as any).temp_event_space ?? 0) >= 5) {
      if (((s as any).temp_location ?? 0) !== '') {
        // TODO-QSP: $result += '<div class="event-location" style="font-size: 0.85em; opacity: 0.7; word-wrap: break-wor...
      }
      if (((s as any).temp_desc ?? 0) !== '') {
        // TODO-QSP: $result += '<div class="event-desc" style="font-size: 0.8em; opacity: 0.6; word-wrap: break-word; ov...
      }
    }
    // TODO-QSP: $result += '</div>'
    // TODO-QSP: $result += '</td>'
  } else {
    (s as any).temp_event_space = ((s as any).temp_colspan ?? 0) * ((s as any).temp_rowspan ?? 0);
    (s as any).result = '<td rowspan="' + String(((s as any).temp_rowspan ?? 0)) + '" colspan="' + String(((s as any).temp_colspan ?? 0)) + '" ';
    // TODO-QSP: $result += 'class="event-cell" style="background-color: rgb(' + $temp_color_rgb + '); padding: 2px;"...
    // TODO-QSP: $result += '<div class="event-title" style="word-wrap: break-word; overflow-wrap: break-word;">' + $...
    if (((s as any).temp_event_space ?? 0) >= 5) {
      if (((s as any).temp_location ?? 0) !== '') {
        // TODO-QSP: $result += '<div class="event-location" style="font-size: 0.85em; opacity: 0.7; word-wrap: break-wor...
      }
      if (((s as any).temp_desc ?? 0) !== '') {
        // TODO-QSP: $result += '<div class="event-desc" style="font-size: 0.8em; opacity: 0.6; word-wrap: break-word; ov...
      }
    }
    // TODO-QSP: $result += '</td>'
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRenderEmptyCell(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_ec_rowspan = ((s as any).locArgs?.[1] ?? 0);
  (s as any).temp_ec_colspan = ((s as any).locArgs?.[2] ?? 0);
  (s as any).temp_ec_timeslot = ((s as any).locArgs?.[3] ?? 0);
  (s as any).temp_ec_day = ((s as any).locArgs?.[4] ?? 0);
  (s as any).temp_ec_bg = qspFunc(s, 'calendar_render', 'get_timeslot_bg_color', ((s as any).temp_ec_timeslot ?? 0));
  (s as any).result = '<td rowspan="' + String(((s as any).temp_ec_rowspan ?? 0)) + '" colspan="' + String(((s as any).temp_ec_colspan ?? 0)) + '" ';
  // TODO-QSP: $result += 'class="empty-cell" style="background-color: ' + $temp_ec_bg + ';">&nbsp;</td>'
  return;
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'get_event_color':
      enterGetEventColor(s, scene);
      break;
    case 'get_timeslot_bg_color':
      enterGetTimeslotBgColor(s, scene);
      break;
    case 'is_today_busy_at_timeslot':
      enterIsTodayBusyAtTimeslot(s, scene);
      break;
    case 'render_calendar':
      enterRenderCalendar(s, scene);
      break;
    case 'render_header':
      enterRenderHeader(s, scene);
      break;
    case 'render_allday_section':
      enterRenderAlldaySection(s, scene);
      break;
    case 'get_first_timeslot':
      enterGetFirstTimeslot(s, scene);
      break;
    case 'render_timeslot_row':
      enterRenderTimeslotRow(s, scene);
      break;
    case 'render_day_cell':
      enterRenderDayCell(s, scene);
      break;
    case 'render_event_cell':
      enterRenderEventCell(s, scene);
      break;
    case 'render_empty_cell':
      enterRenderEmptyCell(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const calendar_render: LocationDef = {
  name: 'calendar_render',
  region: 'other',
  enter: enter,
};
