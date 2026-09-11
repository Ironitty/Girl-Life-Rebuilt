import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterQueueAlert(s: GameState, scene: SceneBuilder): void {
  ((s as any).sd_qa ?? {})['text'] = ((((s as any).locArgs?.[2] ?? 0) !== ''  &&  ((s as any).locArgs?.[2] ?? 0) !== 'none') ? (qspFunc(s, 'wrap', '$ARGS[2]', ((s as any).locArgs?.[1] ?? 0))) : (((s as any).locArgs?.[1] ?? 0)));
  // TODO-QSP: $sd_alerts[] = $sd_qa['text']
  return;
  // TODO-QSP: end
  scene.build();
}

function enterQueueMsg(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[3] ?? 0) === 'pos'  ||  ((s as any).locArgs?.[3] ?? 0) === 'const') {
    ((s as any).sd_qm ?? {})['icon_arg'] = '';
    ((s as any).sd_qm ?? {})['row_arg'] = 0;
    ((s as any).sd_qm ?? {})['action_arg'] = '';
    ((s as any).sd_qm ?? {})['gate'] = ((s as any).locArgs?.[3] ?? 0);
  } else {
    if (((s as any).locArgs?.[5] ?? 0) === 'pos'  ||  ((s as any).locArgs?.[5] ?? 0) === 'const') {
      ((s as any).sd_qm ?? {})['icon_arg'] = ((s as any).locArgs?.[3] ?? 0);
      ((s as any).sd_qm ?? {})['row_arg'] = qspUntranslated(s, "ARGS[4]", { location: "stat_display_compute" });
      ((s as any).sd_qm ?? {})['action_arg'] = '';
      ((s as any).sd_qm ?? {})['gate'] = ((s as any).locArgs?.[5] ?? 0);
    } else {
      ((s as any).sd_qm ?? {})['icon_arg'] = ((s as any).locArgs?.[3] ?? 0);
      ((s as any).sd_qm ?? {})['row_arg'] = qspUntranslated(s, "ARGS[4]", { location: "stat_display_compute" });
      ((s as any).sd_qm ?? {})['action_arg'] = ((s as any).locArgs?.[5] ?? 0);
      ((s as any).sd_qm ?? {})['gate'] = ((s as any).locArgs?.[6] ?? 0);
    }
  }
  ((s as any).sd_qm ?? {})['title'] = ((((s as any).stat_texts ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_tooltip'] !== '') ? (((s as any).stat_texts ?? 0)?.[((s as any).locArgs?.[1] ?? 0) + '_tooltip']) : (((s as any).stat_texts ?? 0)?.[((s as any).locArgs?.[1] ?? 0)]));
  ((s as any).sd_qm ?? {})['display'] = ((s as any).stat_texts ?? 0)?.[((s as any).locArgs?.[1] ?? 0)];
  if (((s as any).sd_qm ?? 0)?.['action_arg'] !== '') {
    ((s as any).sd_qm ?? {})['action'] = ((s as any).sd_qm ?? 0)?.['action_arg'];
  } else {
    if (((s as any).sd_qm ?? 0)?.['display'] !== '') {
      ((s as any).sd_qm ?? {})['action'] = 'msg $stat_texts[\'\' + $ARGS[1] + \'\']';
    } else {
      ((s as any).sd_qm ?? {})['action'] = 'msg $stat_texts[\'\' + $ARGS[1] + \'_tooltip\']';
    }
  }
  if (((s as any).menu_off ?? 0)  &&  ((s as any).sd_qm ?? 0)?.['action_arg'] !== '') {
    ((s as any).sd_qm ?? {})['action'] = 'msg $func(\'wrap\', \'v_neg\', \'You can\'t use the menu right now.\')';
  }
  if (((s as any).sd_qm ?? 0)?.['icon_arg'] !== ''  &&  ((((s as any).sd_qm ?? 0)?.['icon_arg']).indexOf(('|'))) + 1 > 0) {
    if (((s as any).theme ?? 0)?.['is_dark'] === 0) {
      ((s as any).sd_qm ?? {})['icon'] = ((((s as any).sd_qm ?? 0)?.['icon_arg']).slice((1)-1, ((1)-1)+(((((s as any).sd_qm ?? 0)?.['icon_arg']).indexOf(('|'))) + 1 - 1)));
    } else {
      ((s as any).sd_qm ?? {})['icon'] = ((((s as any).sd_qm ?? 0)?.['icon_arg']).slice((((((s as any).sd_qm ?? 0)?.['icon_arg']).indexOf(('|'))) + 1 + 1)-1));
    }
  } else {
    ((s as any).sd_qm ?? {})['icon'] = ((s as any).sd_qm ?? 0)?.['icon_arg'];
  }
  ((s as any).sd_qm ?? {})['bg_color'] = '';
  if (((((s as any).sd_qm ?? 0)?.['icon']).indexOf((':'))) + 1 > 0) {
    ((s as any).sd_qm ?? {})['bg_color'] = ((((s as any).sd_qm ?? 0)?.['icon']).slice((((((s as any).sd_qm ?? 0)?.['icon']).indexOf((':'))) + 1 + 1)-1));
    ((s as any).sd_qm ?? {})['icon'] = ((((s as any).sd_qm ?? 0)?.['icon']).slice((1)-1, ((1)-1)+(((((s as any).sd_qm ?? 0)?.['icon']).indexOf((':'))) + 1 - 1)));
  }
  if (((s as any).sd_qm ?? 0)?.['gate'] === 'pos') {
    if (((s as any).stat_cfg ?? 0)?.['show_positive_icons'] === 0) {
      ((s as any).sd_qm ?? {})['icon'] = '';
    }
    if (((s as any).stat_cfg ?? 0)?.['show_positive_texts'] === 0) {
      ((s as any).sd_qm ?? {})['display'] = '';
    }
  } else {
    if (((s as any).sd_qm ?? 0)?.['gate'] === 'const') {
      if (((s as any).stat_cfg ?? 0)?.['show_constant_texts'] === 0) {
        ((s as any).sd_qm ?? {})['display'] = '';
      }
    }
  }
  if (((s as any).sd_qm ?? 0)?.['icon'] !== ''  &&  (((s as any).stat_cfg ?? 0)?.['msg_display_mode'] === 0  ||  ((s as any).stat_cfg ?? 0)?.['msg_display_mode'] === 1)) {
    if (((s as any).sd_qm ?? 0)?.['bg_color'] !== '') {
      // TODO-QSP: $sd_qm['final_icon'] = '<a href="exec: <<$sd_qm[''action'']>>"><span style="display:inline-block;background:<<$sd_qm[''bg_color'']>>;border-radius:12px;width:<<stat_cfg[''icon_height'']>>px;height:<<stat_cfg[''icon_height'']>>px;padding:5%;box-sizing:border-box;"><img src="images/system/icons/<<$sd_qm[''icon'']>>.png" title="<<$sd_qm[''title'']>>" style="width:100%;height:100%;display:block;"></span></a>'
    } else {
      // TODO-QSP: $sd_qm['final_icon'] = '<a href="exec: <<$sd_qm[''action'']>>"><img src="images/system/icons/<<$sd_qm[''icon'']>>.png" title="<<$sd_qm[''title'']>>" height="<<stat_cfg[''icon_height'']>>"></a>'
    }
    if (((s as any).sd_qm ?? 0)?.['row_arg'] === 1) {
      // TODO-QSP: $sd_icons_1[] = $sd_qm['final_icon']
    } else {
      if (((s as any).sd_qm ?? 0)?.['row_arg'] === 2) {
        // TODO-QSP: $sd_icons_2[] = $sd_qm['final_icon']
      } else {
        if (((s as any).sd_qm ?? 0)?.['row_arg'] === 3) {
          // TODO-QSP: $sd_icons_3[] = $sd_qm['final_icon']
        } else {
          // TODO-QSP: $sd_icons_4[] = $sd_qm['final_icon']
        }
      }
    }
  }
  if (((s as any).sd_qm ?? 0)?.['display'] !== ''  &&  (((s as any).stat_cfg ?? 0)?.['msg_display_mode'] === 0  ||  ((s as any).stat_cfg ?? 0)?.['msg_display_mode'] === 2  ||  ((s as any).sd_qm ?? 0)?.['icon'] === '')) {
    ((s as any).sd_qm ?? {})['final_text'] = ((((s as any).locArgs?.[2] ?? 0) !== '') ? (qspFunc(s, 'wrap', '$ARGS[2]', ((s as any).sd_qm ?? 0)?.['display'])) : (((s as any).sd_qm ?? 0)?.['display']));
    // TODO-QSP: $sd_texts[] = $sd_qm['final_text']
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterComputeData(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat_display_compute', 'compute_stats');
  qspCall(s, 'stat_display_compute', 'compute_body');
  qspCall(s, 'din_bad', 'compute_cycle_state');
  qspCall(s, 'din_bad', 'compute_bc_status');
  qspCall(s, 'archetypes', 'compute_stat_display');
  qspCall(s, 'traits', 'compute_stat_display');
  qspCall(s, 'lact_lib', 'compute_stat_display');
  qspCall(s, 'outfit', 'compute_stat_display');
  qspCall(s, 'drugs', 'compute_stat_display');
  qspCall(s, 'stat_display_compute', 'compute_appearance');
  qspCall(s, 'cum_manage', 'compute_stat_display');
  qspCall(s, 'jobs', 'compute_stat_display');
  qspCall(s, 'gschool', 'compute_stat_display');
  qspCall(s, 'uni_lessons', 'compute_stat_display');
  qspCall(s, 'stat', 'compute_stat_display');
  qspCall(s, 'stat_display_compute', 'compute_misc');
  qspCall(s, 'stat_display_compute', 'compute_images');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterComputeAttributesProse(s: GameState, scene: SceneBuilder): void {
  ((s as any).sd_ap ?? {})['cnt'] = 0;
  ((s as any).sd_ap ?? {})['sum'] = 0;
  ((s as any).sd_ap ?? {})['ai'] = 0;
  ((s as any).sd_ap ?? {})['amax'] = 0;
  // TODO-QSP: :sd_ap_collect
  if (((s as any).sd_ap ?? 0)?.['ai'] < ((s as any).sd_ap ?? 0)?.['amax']) {
    ((s as any).sd_ap ?? {})['ck'] = qspUntranslated(s, "attr_bar_order[sd_ap['ai']]", { location: "stat_display_compute" });
    if (((s as any).stat_hide_bar ?? 0)[((s as any).sd_ap ?? 0)?.['ck']] === 0) {
      ((s as any).sd_ap ?? {})['cv'] = (-1);
      if (((s as any).sd_ap ?? 0)?.['ck'] === 'inhib') {
        ((s as any).sd_ap ?? {})['cv'] = 100 - ((s as any).pcs_inhib ?? 0);
        ((s as any).sd_ap ?? {})['cn'] = 'Inhibition';
      } else {
        if (((s as any).sd_ap ?? 0)?.['ck'] === 'stren') {
          ((s as any).sd_ap ?? {})['cv'] = ((s as any).pcs_stren ?? 0);
          ((s as any).sd_ap ?? {})['cn'] = 'Strength';
        } else {
          if (((s as any).sd_ap ?? 0)?.['ck'] === 'agil') {
            ((s as any).sd_ap ?? {})['cv'] = ((s as any).pcs_agil ?? 0);
            ((s as any).sd_ap ?? {})['cn'] = 'Agility';
          } else {
            if (((s as any).sd_ap ?? 0)?.['ck'] === 'vital') {
              ((s as any).sd_ap ?? {})['cv'] = ((s as any).pcs_vital ?? 0);
              ((s as any).sd_ap ?? {})['cn'] = 'Endurance';
            } else {
              if (((s as any).sd_ap ?? 0)?.['ck'] === 'intel') {
                ((s as any).sd_ap ?? {})['cv'] = ((s as any).pcs_intel ?? 0);
                ((s as any).sd_ap ?? {})['cn'] = 'Intelligence';
              } else {
                if (((s as any).sd_ap ?? 0)?.['ck'] === 'sprt') {
                  ((s as any).sd_ap ?? {})['cv'] = ((s as any).pcs_sprt ?? 0);
                  ((s as any).sd_ap ?? {})['cn'] = 'Spirit';
                } else {
                  if (((s as any).sd_ap ?? 0)?.['ck'] === 'react') {
                    ((s as any).sd_ap ?? {})['cv'] = ((s as any).pcs_react ?? 0);
                    ((s as any).sd_ap ?? {})['cn'] = 'Reaction';
                  } else {
                    if (((s as any).sd_ap ?? 0)?.['ck'] === 'chrsm') {
                      ((s as any).sd_ap ?? {})['cv'] = ((s as any).pcs_chrsm ?? 0);
                      ((s as any).sd_ap ?? {})['cn'] = 'Charisma';
                    } else {
                      if (((s as any).sd_ap ?? 0)?.['ck'] === 'prcptn') {
                        ((s as any).sd_ap ?? {})['cv'] = ((s as any).pcs_prcptn ?? 0);
                        ((s as any).sd_ap ?? {})['cn'] = 'Perception';
                      } else {
                        if (((s as any).sd_ap ?? 0)?.['ck'] === 'apprnc') {
                          ((s as any).sd_ap ?? {})['cv'] = ((s as any).pcs_apprnc ?? 0) * 100 / 200;
                          ((s as any).sd_ap ?? {})['cn'] = 'Attractiveness';
                        } else {
                          if (((s as any).sd_ap ?? 0)?.['ck'] === 'magik') {
                            if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic') {
                              ((s as any).sd_ap ?? {})['cv'] = ((s as any).pcs_magik ?? 0);
                              ((s as any).sd_ap ?? {})['cn'] = 'Magic';
                            }
                          } else {
                            if (((s as any).sd_ap ?? 0)?.['ck'] === 'sucexcess') {
                              if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  ((s as any).succubusflag ?? 0) === 1) {
                                ((s as any).sd_ap ?? {})['cv'] = ((s as any).sucexcess ?? 0);
                                ((s as any).sd_ap ?? {})['cn'] = 'Succubus Energy';
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
      if (((s as any).sd_ap ?? 0)?.['cv'] >= 0) {
        // TODO-QSP: sd_ap['v_' + $str(sd_ap['cnt'])] = sd_ap['cv']
        // TODO-QSP: $sd_ap['n_' + $str(sd_ap['cnt'])] = $sd_ap['cn']
        ((s as any).sd_ap ?? {})['sum'] = (((s as any).sd_ap ?? {})['sum'] ?? 0) + (((s as any).sd_ap ?? 0)?.['cv']);
        ((s as any).sd_ap ?? {})['cnt'] = (((s as any).sd_ap ?? {})['cnt'] ?? 0) + (1);
      }
    }
    ((s as any).sd_ap ?? {})['ai'] = (((s as any).sd_ap ?? {})['ai'] ?? 0) + (1);
    // TODO-QSP: jump 'sd_ap_collect'
  }
  if (((s as any).sd_ap ?? 0)?.['cnt'] > 0) {
    ((s as any).sd_ap ?? {})['mean'] = ((s as any).sd_ap ?? {})?.['sum'] / ((s as any).sd_ap ?? {})?.['cnt'];
  } else {
    ((s as any).sd_ap ?? {})['mean'] = 50;
  }
  ((s as any).sd_ap ?? {})['n_high'] = 0;
  ((s as any).sd_ap ?? {})['n_low'] = 0;
  ((s as any).sd_ap ?? {})['bi'] = 0;
  // TODO-QSP: :sd_ap_bucket
  if (((s as any).sd_ap ?? 0)?.['bi'] < ((s as any).sd_ap ?? 0)?.['cnt']) {
    ((s as any).sd_ap ?? {})['bv'] = ((s as any).sd_ap ?? 0)?.['v_' + String(((s as any).sd_ap ?? 0)?.['bi'])];
    ((s as any).sd_ap ?? {})['dev'] = ((s as any).sd_ap ?? {})?.['bv'] - ((s as any).sd_ap ?? {})?.['mean'];
    if (((s as any).sd_ap ?? 0)?.['bv'] >= 80  ||  ((s as any).sd_ap ?? 0)?.['dev'] >= 15) {
      // TODO-QSP: $sd_ap['high_' + $str(sd_ap['n_high'])] = $sd_ap['n_' + $str(sd_ap['bi'])]
      ((s as any).sd_ap ?? {})['n_high'] = (((s as any).sd_ap ?? {})['n_high'] ?? 0) + (1);
    } else {
      if (((s as any).sd_ap ?? 0)?.['bv'] <= 15  ||  ((s as any).sd_ap ?? 0)?.['dev'] <= -15) {
        // TODO-QSP: $sd_ap['low_' + $str(sd_ap['n_low'])] = $sd_ap['n_' + $str(sd_ap['bi'])]
        ((s as any).sd_ap ?? {})['n_low'] = (((s as any).sd_ap ?? {})['n_low'] ?? 0) + (1);
      }
    }
    ((s as any).sd_ap ?? {})['bi'] = (((s as any).sd_ap ?? {})['bi'] ?? 0) + (1);
    // TODO-QSP: jump 'sd_ap_bucket'
  }
  if (((s as any).sd_ap ?? 0)?.['n_high'] > 0) {
    if (((s as any).sd_ap ?? 0)?.['n_high'] === 1) {
    } else {
      if (((s as any).sd_ap ?? 0)?.['n_high'] === 2) {
      } else {
        ((s as any).sd_ap ?? {})['ji'] = 1;
        // TODO-QSP: :sd_ap_join_high
        if (((s as any).sd_ap ?? 0)?.['ji'] < (((s as any).sd_ap ?? 0)?.['n_high'] - 1)) {
          // TODO-QSP: $sd_attrs_prose += ', ' + $func('wrap', 'pos', $sd_ap['high_' + $str(sd_ap['ji'])])
          ((s as any).sd_ap ?? {})['ji'] = (((s as any).sd_ap ?? {})['ji'] ?? 0) + (1);
          // TODO-QSP: jump 'sd_ap_join_high'
        }
        // TODO-QSP: $sd_attrs_prose += ', and ' + $func('wrap', 'pos', $sd_ap['high_' + $str(sd_ap['n_high'] - 1)]) + ' ...
      }
    }
  }
  if (((s as any).sd_ap ?? 0)?.['n_low'] > 0) {
    if (((s as any).sd_ap ?? 0)?.['n_low'] === 1) {
      ((s as any).sd_ap ?? {})['low_list'] = qspFunc(s, 'wrap', 'neg', ((s as any).sd_ap ?? 0)?.['low_0']);
      ((s as any).sd_ap ?? {})['low_verb'] = 'is lacking';
    } else {
      if (((s as any).sd_ap ?? 0)?.['n_low'] === 2) {
        ((s as any).sd_ap ?? {})['low_list'] = qspFunc(s, 'wrap', 'neg', ((s as any).sd_ap ?? 0)?.['low_0']) + '  &&  ' + qspFunc(s, 'wrap', 'neg', ((s as any).sd_ap ?? 0)?.['low_1']);
        ((s as any).sd_ap ?? {})['low_verb'] = 'are lacking';
      } else {
        ((s as any).sd_ap ?? {})['low_list'] = qspFunc(s, 'wrap', 'neg', ((s as any).sd_ap ?? 0)?.['low_0']);
        ((s as any).sd_ap ?? {})['ji'] = 1;
        // TODO-QSP: :sd_ap_join_low
        if (((s as any).sd_ap ?? 0)?.['ji'] < (((s as any).sd_ap ?? 0)?.['n_low'] - 1)) {
          ((s as any).sd_ap ?? {})['low_list'] = (((s as any).sd_ap ?? {})['low_list'] ?? 0) + (', ' + qspFunc(s, 'wrap', 'neg', ((s as any).sd_ap ?? 0)?.['low_' + String(((s as any).sd_ap ?? 0)?.['ji'])]));
          ((s as any).sd_ap ?? {})['ji'] = (((s as any).sd_ap ?? {})['ji'] ?? 0) + (1);
          // TODO-QSP: jump 'sd_ap_join_low'
        }
        ((s as any).sd_ap ?? {})['low_list'] = (((s as any).sd_ap ?? {})['low_list'] ?? 0) + (',  &&  ' + qspFunc(s, 'wrap', 'neg', ((s as any).sd_ap ?? 0)?.['low_' + String(((s as any).sd_ap ?? 0)?.['n_low'] - 1)]));
        ((s as any).sd_ap ?? {})['low_verb'] = 'are lacking';
      }
    }
    if (((s as any).sd_attrs_prose ?? 0) !== '') {
      // TODO-QSP: $sd_attrs_prose += ', but your ' + $sd_ap['low_list'] + ' ' + $sd_ap['low_verb']
    }
  }
  if (((s as any).sd_attrs_prose ?? 0) !== '') {
    // TODO-QSP: $sd_attrs_prose += '.'
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterComputeStats(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_horny ?? 0) >= 100) {
    ((s as any).stat_texts ?? {})['arousal'] = 'Craving floods your senses. You are <a href="exec: view\'images/pc/body/pussy/aroused/' + ((((s as any).pantyworntype ?? 0) !== 'none') ? ('panties') : ('none')) + '_high.jpg\'">soaked</a> from your juices.';
    ((s as any).stat_texts ?? {})['arousal_tooltip'] = 'Craving floods your senses. You are soaked from your juices.';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'arousal', 'bimbo', 'status/arousal_high', 2);
    qspCall(s, 'stat_display_compute', 'queue_alert', 'You are overwhelmed by arousal.', 'bimbo');
    if (((s as any).stat_cfg ?? 0)?.['render_mode_status'] === 3) {
      // TODO-QSP: $sd_pr_urgent[] = 'overcome with desire'
    }
  } else {
    if (((s as any).pcs_horny ?? 0) >= 75) {
      ((s as any).stat_texts ?? {})['arousal'] = 'You can\'t stop thinking about sex. You are <a href="exec: view\'images/pc/body/pussy/aroused/' + ((((s as any).pantyworntype ?? 0) !== 'none') ? ('panties') : ('none')) + '_low.jpg\'">itching</a> with arousal.';
      ((s as any).stat_texts ?? {})['arousal_tooltip'] = 'You can\'t stop thinking about sex. You are itching with arousal.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'arousal', 'bimbo', 'status/arousal_high', 2);
      if (((s as any).stat_cfg ?? 0)?.['render_mode_status'] === 3) {
        // TODO-QSP: $sd_pr_warning[] = 'very aroused'
      }
    } else {
      if (((s as any).pcs_horny ?? 0) >= 50) {
        ((s as any).stat_texts ?? {})['arousal'] = 'A warm desire quickens your pulse.';
        qspCall(s, 'stat_display_compute', 'queue_msg', 'arousal', 'punk', 'status/arousal_med', 2);
        if (((s as any).stat_cfg ?? 0)?.['render_mode_status'] === 3) {
          // TODO-QSP: $sd_pr_mild[] = 'a bit flushed'
        }
      } else {
        if (((s as any).pcs_horny ?? 0) >= 25) {
          ((s as any).stat_texts ?? {})['arousal'] = 'A faint tug of want pricks at you.';
          qspCall(s, 'stat_display_compute', 'queue_msg', 'arousal', 'neutral', 'status/arousal_low', 2, 'pos');
        } else {
          ((s as any).stat_texts ?? {})['arousal'] = 'Indifference dulls any erotic spark.';
          qspCall(s, 'stat_display_compute', 'queue_msg', 'arousal', 'pos', 'status/arousal_low', 2, 'pos');
        }
      }
    }
  }
  if (((s as any).pain ?? 0)?.['total'] > 75) {
    ((s as any).stat_texts ?? {})['pain'] = 'Agonizing pain wracks your body.';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'pain', 'v_neg', 'status/pain_3', 2, 'gt \'$menu_character\', \'pain\'');
    qspCall(s, 'stat_display_compute', 'queue_alert', 'You are in agony.', 'v_neg');
    if (((s as any).stat_cfg ?? 0)?.['render_mode_status'] === 3) {
      // TODO-QSP: $sd_pr_urgent[] = 'in agony'
    }
  } else {
    if (((s as any).pain ?? 0)?.['total'] > 50) {
      ((s as any).stat_texts ?? {})['pain'] = 'Sharp pain flares through your limbs.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'pain', 'neg', 'status/pain_2', 2, 'gt \'$menu_character\', \'pain\'');
      qspCall(s, 'stat_display_compute', 'queue_alert', 'You are in sharp pain.', 'neg');
      if (((s as any).stat_cfg ?? 0)?.['render_mode_status'] === 3) {
        // TODO-QSP: $sd_pr_warning[] = 'in sharp pain'
      }
    } else {
      if (((s as any).pain ?? 0)?.['total'] > 25) {
        ((s as any).stat_texts ?? {})['pain'] = 'A nagging pain distracts your focus.';
        qspCall(s, 'stat_display_compute', 'queue_msg', 'pain', 'neutral', 'status/pain_1', 2, 'gt \'$menu_character\', \'pain\'');
        if (((s as any).stat_cfg ?? 0)?.['render_mode_status'] === 3) {
          // TODO-QSP: $sd_pr_mild[] = 'a bit achy'
        }
      } else {
        if (((s as any).pain ?? 0)?.['total'] > 5) {
          ((s as any).stat_texts ?? {})['pain'] = 'A small ache tugs at your muscles.';
          qspCall(s, 'stat_display_compute', 'queue_msg', 'pain', 'neutral', 'status/pain_1', 2, 'gt \'$menu_character\', \'pain\'', 'pos');
        } else {
          ((s as any).stat_texts ?? {})['pain'] = 'Your body feels wholly at ease.';
          qspCall(s, 'stat_display_compute', 'queue_msg', 'pain', 'v_pos', 'pos');
        }
      }
    }
  }
  ((s as any).stat_nums ?? {})['health_percent'] = (100 * ((s as any).pcs_health ?? 0)) / ((s as any).healthmax ?? 0);
  if (((s as any).stat_nums ?? 0)?.['health_percent'] < 15) {
    ((s as any).stat_texts ?? {})['health'] = 'You are in critical condition.';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'health', 'v_neg');
    qspCall(s, 'stat_display_compute', 'queue_alert', 'You are in critical condition.', 'v_neg');
    if (((s as any).stat_cfg ?? 0)?.['render_mode_status'] === 3) {
      // TODO-QSP: $sd_pr_urgent[] = 'critically ill'
    }
  } else {
    if (((s as any).stat_nums ?? 0)?.['health_percent'] < 30) {
      ((s as any).stat_texts ?? {})['health'] = 'Your health falters under strain.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'health', 'neg');
      if (((s as any).stat_cfg ?? 0)?.['render_mode_status'] === 3) {
        // TODO-QSP: $sd_pr_warning[] = 'in poor health'
      }
    } else {
      if (((s as any).stat_nums ?? 0)?.['health_percent'] < 60) {
        ((s as any).stat_texts ?? {})['health'] = 'You feel noticeably unwell.';
        qspCall(s, 'stat_display_compute', 'queue_msg', 'health', 'neutral');
        if (((s as any).stat_cfg ?? 0)?.['render_mode_status'] === 3) {
          // TODO-QSP: $sd_pr_mild[] = 'feeling unwell'
        }
      } else {
        if (((s as any).stat_nums ?? 0)?.['health_percent'] < 90) {
          ((s as any).stat_texts ?? {})['health'] = 'A subtle weakness saps your vigor.';
          qspCall(s, 'stat_display_compute', 'queue_msg', 'health', 'neutral', 'pos');
        } else {
          ((s as any).stat_texts ?? {})['health'] = 'You are completely healthy.';
          qspCall(s, 'stat_display_compute', 'queue_msg', 'health', 'v_pos', 'pos');
        }
      }
    }
  }
  if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic') {
    ((s as any).stat_nums ?? {})['mana_percent'] = (100 * ((s as any).pcs_mana ?? 0)) / ((s as any).manamax ?? 0);
    if (((s as any).stat_nums ?? 0)?.['mana_percent'] < 15) {
      ((s as any).stat_texts ?? {})['mana'] = 'You are drained of arcane energy.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'mana', 'v_neg');
      if (((s as any).stat_cfg ?? 0)?.['render_mode_status'] === 3) {
        // TODO-QSP: $sd_pr_warning[] = 'mana-drained'
      }
    } else {
      if (((s as any).stat_nums ?? 0)?.['mana_percent'] < 30) {
        ((s as any).stat_texts ?? {})['mana'] = 'Your magical reserves run thin and strained.';
        qspCall(s, 'stat_display_compute', 'queue_msg', 'mana', 'neg');
        if (((s as any).stat_cfg ?? 0)?.['render_mode_status'] === 3) {
          // TODO-QSP: $sd_pr_mild[] = 'low on mana'
        }
      } else {
        if (((s as any).stat_nums ?? 0)?.['mana_percent'] < 60) {
          ((s as any).stat_texts ?? {})['mana'] = 'Your spellpool holds a steady charge.';
          qspCall(s, 'stat_display_compute', 'queue_msg', 'mana', 'neutral', 'pos');
        } else {
          if (((s as any).stat_nums ?? 0)?.['mana_percent'] < 90) {
            ((s as any).stat_texts ?? {})['mana'] = 'Magic hums lightly beneath your skin.';
            qspCall(s, 'stat_display_compute', 'queue_msg', 'mana', 'pos', 'pos');
          } else {
            ((s as any).stat_texts ?? {})['mana'] = 'Arcane power brims through your veins.';
            qspCall(s, 'stat_display_compute', 'queue_msg', 'mana', 'v_pos', 'pos');
          }
        }
      }
    }
  }
  ((s as any).stat_nums ?? {})['willpower_percent'] = (100 * ((s as any).pcs_willpwr ?? 0)) / ((s as any).willpowermax ?? 0);
  if (((s as any).stat_nums ?? 0)?.['willpower_percent'] < 20) {
    ((s as any).stat_texts ?? {})['willpower'] = 'You are completely at others\' mercy.';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'willpower', 'v_neg', 'status/willpower_low', 2);
    qspCall(s, 'stat_display_compute', 'queue_alert', 'Your willpower is broken.', 'v_neg');
    if (((s as any).stat_cfg ?? 0)?.['render_mode_status'] === 3) {
      // TODO-QSP: $sd_pr_urgent[] = 'broken in will'
    }
  } else {
    if (((s as any).stat_nums ?? 0)?.['willpower_percent'] < 40) {
      ((s as any).stat_texts ?? {})['willpower'] = 'Your resolve wavers under pressure.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'willpower', 'pos', 'status/willpower_low', 2);
      if (((s as any).stat_cfg ?? 0)?.['render_mode_status'] === 3) {
        // TODO-QSP: $sd_pr_warning[] = 'weak-willed'
      }
    } else {
      if (((s as any).stat_nums ?? 0)?.['willpower_percent'] < 60) {
        ((s as any).stat_texts ?? {})['willpower'] = 'Doubt creeps into your thoughts.';
        qspCall(s, 'stat_display_compute', 'queue_msg', 'willpower', 'neutral', 'status/willpower_med', 2);
        if (((s as any).stat_cfg ?? 0)?.['render_mode_status'] === 3) {
          // TODO-QSP: $sd_pr_mild[] = 'irresolute'
        }
      } else {
        if (((s as any).stat_nums ?? 0)?.['willpower_percent'] < 80) {
          ((s as any).stat_texts ?? {})['willpower'] = 'You feel steadfast in purpose.';
          qspCall(s, 'stat_display_compute', 'queue_msg', 'willpower', 'pos', 'status/willpower_high', 2, 'pos');
        } else {
          ((s as any).stat_texts ?? {})['willpower'] = 'Your resolve stands unbreakable.';
          qspCall(s, 'stat_display_compute', 'queue_msg', 'willpower', 'v_pos', 'status/willpower_high', 2, 'pos');
        }
      }
    }
  }
  ((s as any).stat_nums ?? {})['stamina_percent'] = (100 * ((s as any).pcs_stam ?? 0)) / ((s as any).stammax ?? 0);
  if (((s as any).stat_nums ?? 0)?.['stamina_percent'] < 15) {
    ((s as any).stat_texts ?? {})['stamina'] = 'Your energy is utterly spent.';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'stamina', 'v_neg');
    if (((s as any).stat_cfg ?? 0)?.['render_mode_status'] === 3) {
      // TODO-QSP: $sd_pr_urgent[] = 'spent'
    }
  } else {
    if (((s as any).stat_nums ?? 0)?.['stamina_percent'] < 30) {
      ((s as any).stat_texts ?? {})['stamina'] = 'Your limbs tremble from exertion.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'stamina', 'neg');
      if (((s as any).stat_cfg ?? 0)?.['render_mode_status'] === 3) {
        // TODO-QSP: $sd_pr_warning[] = 'exhausted'
      }
    } else {
      if (((s as any).stat_nums ?? 0)?.['stamina_percent'] < 60) {
        ((s as any).stat_texts ?? {})['stamina'] = 'Your breath catches with effort.';
        qspCall(s, 'stat_display_compute', 'queue_msg', 'stamina', 'neutral');
        if (((s as any).stat_cfg ?? 0)?.['render_mode_status'] === 3) {
          // TODO-QSP: $sd_pr_mild[] = 'winded'
        }
      } else {
        if (((s as any).stat_nums ?? 0)?.['stamina_percent'] < 90) {
          ((s as any).stat_texts ?? {})['stamina'] = 'Fatigue flickers at your edge.';
          qspCall(s, 'stat_display_compute', 'queue_msg', 'stamina', 'neutral', 'pos');
        } else {
          ((s as any).stat_texts ?? {})['stamina'] = 'You feel fresh and alert.';
          qspCall(s, 'stat_display_compute', 'queue_msg', 'stamina', 'v_pos', 'pos');
        }
      }
    }
  }
  if (((s as any).pcs_mood ?? 0) < 10) {
    ((s as any).stat_texts ?? {})['mood'] = 'A dark despair closes in around you.';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'mood', 'v_neg', 'status/mood_6', 2);
    qspCall(s, 'stat_display_compute', 'queue_alert', 'You are in deep despair.', 'v_neg');
    if (((s as any).stat_cfg ?? 0)?.['render_mode_status'] === 3) {
      // TODO-QSP: $sd_pr_urgent[] = 'sunk in despair'
    }
  } else {
    if (((s as any).pcs_mood ?? 0) < 25) {
      ((s as any).stat_texts ?? {})['mood'] = 'A sharp melancholy tugs at your thoughts.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'mood', 'v_neg', 'status/mood_5', 2);
      qspCall(s, 'stat_display_compute', 'queue_alert', 'You are very unhappy.', 'v_neg');
      if (((s as any).stat_cfg ?? 0)?.['render_mode_status'] === 3) {
        // TODO-QSP: $sd_pr_warning[] = 'deeply unhappy'
      }
    } else {
      if (((s as any).pcs_mood ?? 0) < 40) {
        ((s as any).stat_texts ?? {})['mood'] = 'A heaviness clouds your mood.';
        qspCall(s, 'stat_display_compute', 'queue_msg', 'mood', 'neg', 'status/mood_4', 2);
        if (((s as any).stat_cfg ?? 0)?.['render_mode_status'] === 3) {
          // TODO-QSP: $sd_pr_mild[] = 'gloomy'
        }
      } else {
        if (((s as any).pcs_mood ?? 0) < 55) {
          ((s as any).stat_texts ?? {})['mood'] = 'Your mood sits quietly even.';
          qspCall(s, 'stat_display_compute', 'queue_msg', 'mood', 'neutral', 'status/mood_3', 2, 'pos');
        } else {
          if (((s as any).pcs_mood ?? 0) < 70) {
            ((s as any).stat_texts ?? {})['mood'] = 'A light warmth colors your thoughts.';
            qspCall(s, 'stat_display_compute', 'queue_msg', 'mood', 'pos', 'status/mood_2', 2, 'pos');
          } else {
            ((s as any).stat_texts ?? {})['mood'] = 'Your spirits lift with a bright ease.';
            qspCall(s, 'stat_display_compute', 'queue_msg', 'mood', 'v_pos', 'status/mood_1', 2, 'pos');
            if (((s as any).stat_cfg ?? 0)?.['render_mode_status'] === 3) {
              // TODO-QSP: $sd_pr_upbeat[] = 'in great spirits'
            }
          }
        }
      }
    }
  }
  if (((s as any).Gerpes ?? 0) >= 3  ||  ((s as any).Sifilis ?? 0) >= 21  ||  ((s as any).Triper ?? 0) > 2) {
    ((s as any).stat_texts ?? {})['mood'] = (((s as any).stat_texts ?? {})['mood'] ?? 0) + (' Your mood is reduced due to an STD.');
  }
  if (((s as any).mood_trauma ?? 0) > 0) {
    ((s as any).stat_texts ?? {})['mood_trauma'] = 'Recent events have lowered your maximum mood to ' + qspUntranslated(s, "moodVars['max']>", { location: "stat_display_compute" }) + '.';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'mood_trauma', 'v_neg', 'status/mood_6', 2);
    if (((s as any).pcs_mood ?? 0) >= ((s as any).moodVars ?? 0)?.['max'] - 10) {
      qspCall(s, 'stat_display_compute', 'queue_alert', 'Your mood is capped by trauma (max: ' + qspUntranslated(s, "moodVars['max']>", { location: "stat_display_compute" }) + ').', 'v_neg');
    }
  }
  if (((s as any).pcs_energy ?? 0) <= 5) {
    ((s as any).stat_texts ?? {})['energy'] = 'You are about to collapse from hunger.';
    if (((s as any).stat_cfg ?? 0)?.['render_mode_status'] === 3) {
      // TODO-QSP: $sd_pr_urgent[] = 'starving'
    }
  } else {
    if (((s as any).pcs_energy ?? 0) <= 25) {
      ((s as any).stat_texts ?? {})['energy'] = 'You are nearly starving.';
      if (((s as any).stat_cfg ?? 0)?.['render_mode_status'] === 3) {
        // TODO-QSP: $sd_pr_warning[] = 'very hungry'
      }
    } else {
      if (((s as any).pcs_energy ?? 0) <= 50) {
        ((s as any).stat_texts ?? {})['energy'] = 'Hunger tugs at your focus.';
        if (((s as any).stat_cfg ?? 0)?.['render_mode_status'] === 3) {
          // TODO-QSP: $sd_pr_mild[] = 'getting hungry'
        }
      } else {
        if (((s as any).pcs_energy ?? 0) <= 75) {
          ((s as any).stat_texts ?? {})['energy'] = 'A soft pang reminds you of food.';
        } else {
          ((s as any).stat_texts ?? {})['energy'] = 'You couldn\'t eat one more bite.';
        }
      }
    }
  }
  if (((s as any).pcs_energy ?? 0) <= 50) {
    if (((s as any).cheatVars ?? 0)?.['hunger'] === 0  &&  ((s as any).mc_inventory ?? 0)?.['food_sandwich'] > 0) {
      ((s as any).stat_texts ?? {})['sandwich_icon_tooltip'] = 'Click to eat your sandwich.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'sandwich_icon', '', 'status/need_food_sandwich', 2, 'mc_inventory[\'food_sandwich\'] -= 1 & pcs_energy += 40 & cumspclnt = 2 & gs \'cum_cleanup\' & fat += 1 & gs \'stat\'');
    } else {
      if (((s as any).pcs_energy ?? 0) <= 5) {
        qspCall(s, 'stat_display_compute', 'queue_msg', 'energy', 'v_neg', 'status/need_food', 2);
        qspCall(s, 'stat_display_compute', 'queue_alert', 'You are starving.', 'v_neg');
      } else {
        if (((s as any).pcs_energy ?? 0) <= 25) {
          qspCall(s, 'stat_display_compute', 'queue_msg', 'energy', 'v_neg', 'status/need_food', 2);
          qspCall(s, 'stat_display_compute', 'queue_alert', 'You are nearly starving.', 'v_neg');
        } else {
          qspCall(s, 'stat_display_compute', 'queue_msg', 'energy', 'neg', 'status/need_food', 2);
        }
      }
    }
  }
  if (((s as any).pcs_hydra ?? 0) <= 5) {
    ((s as any).stat_texts ?? {})['thirst'] = 'You burn with unrelenting thirst.';
    if (((s as any).stat_cfg ?? 0)?.['render_mode_status'] === 3) {
      // TODO-QSP: $sd_pr_urgent[] = 'parched dry'
    }
  } else {
    if (((s as any).pcs_hydra ?? 0) <= 25) {
      ((s as any).stat_texts ?? {})['thirst'] = 'You\'re so thirsty you could faint.';
      if (((s as any).stat_cfg ?? 0)?.['render_mode_status'] === 3) {
        // TODO-QSP: $sd_pr_warning[] = 'parched'
      }
    } else {
      if (((s as any).pcs_hydra ?? 0) <= 50) {
        ((s as any).stat_texts ?? {})['thirst'] = 'Your throat tightens with thirst.';
        if (((s as any).stat_cfg ?? 0)?.['render_mode_status'] === 3) {
          // TODO-QSP: $sd_pr_mild[] = 'thirsty'
        }
      } else {
        if (((s as any).pcs_hydra ?? 0) <= 75) {
          ((s as any).stat_texts ?? {})['thirst'] = 'A mild dryness lingers on your lips.';
        } else {
          ((s as any).stat_texts ?? {})['thirst'] = 'Your throat feels quenched.';
        }
      }
    }
  }
  if (((s as any).pcs_hydra ?? 0) <= 50) {
    if (((s as any).cheatVars ?? 0)?.['thirst'] === 0  &&  (((s as any).mc_inventory ?? 0)?.['refill_bottle_water'] > 0  ||  ((s as any).mc_inventory ?? 0)?.['food_water'] > 0)) {
      if (((s as any).mc_inventory ?? 0)?.['refill_bottle_water'] > 0) {
        ((s as any).stat_texts ?? {})['water_icon_tooltip'] = 'Click to drink from your refillable water bottle.';
        qspCall(s, 'stat_display_compute', 'queue_msg', 'water_icon', '', 'status/need_drink_bottle', 2, 'mc_inventory[\'refill_bottle_water\'] -= 1 & pcs_hydra += 100 & cumspclnt = 2 & gs \'cum_cleanup\' & gs \'stat\'');
      } else {
        ((s as any).stat_texts ?? {})['water_icon_tooltip'] = 'Click to drink from your water bottle.';
        qspCall(s, 'stat_display_compute', 'queue_msg', 'water_icon', '', 'status/need_drink_bottle', 2, 'mc_inventory[\'food_water\'] = 0 & pcs_hydra += 100 & cumspclnt = 2 & gs \'cum_cleanup\' & gs \'stat\'');
      }
    } else {
      if (((s as any).pcs_hydra ?? 0) <= 5) {
        qspCall(s, 'stat_display_compute', 'queue_msg', 'thirst', 'v_neg', 'status/need_drink', 2);
        qspCall(s, 'stat_display_compute', 'queue_alert', 'You are parched.', 'v_neg');
      } else {
        if (((s as any).pcs_hydra ?? 0) <= 25) {
          qspCall(s, 'stat_display_compute', 'queue_msg', 'thirst', 'v_neg', 'status/need_drink', 2);
          qspCall(s, 'stat_display_compute', 'queue_alert', 'You are very thirsty.', 'neg');
        } else {
          qspCall(s, 'stat_display_compute', 'queue_msg', 'thirst', 'neg', 'status/need_drink', 2);
        }
      }
    }
  }
  if (((s as any).pcs_sleep ?? 0) <= 5) {
    ((s as any).stat_texts ?? {})['sleep'] = 'You struggle to keep your eyes open.';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'sleep', 'v_neg', 'status/need_sleep', 2);
    qspCall(s, 'stat_display_compute', 'queue_alert', 'You are dangerously tired.', 'v_neg');
  } else {
    if (((s as any).pcs_sleep ?? 0) <= 25) {
      ((s as any).stat_texts ?? {})['sleep'] = 'Heavy lids tug at your vision.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'sleep', 'v_neg', 'status/need_sleep', 2);
      qspCall(s, 'stat_display_compute', 'queue_alert', 'You are barely awake.', 'v_neg');
    } else {
      if (((s as any).pcs_sleep ?? 0) <= 50) {
        ((s as any).stat_texts ?? {})['sleep'] = 'You can\'t stop yourself from yawning.';
        qspCall(s, 'stat_display_compute', 'queue_msg', 'sleep', 'neg', 'status/need_sleep', 2);
      } else {
        if (((s as any).pcs_sleep ?? 0) <= 75) {
          ((s as any).stat_texts ?? {})['sleep'] = 'A gentle yawn teases you.';
          qspCall(s, 'stat_display_compute', 'queue_msg', 'sleep', 'neutral', 'pos');
        } else {
          ((s as any).stat_texts ?? {})['sleep'] = 'You feel wide awake.';
          qspCall(s, 'stat_display_compute', 'queue_msg', 'sleep', 'v_pos', 'pos');
        }
      }
    }
  }
  if (((s as any).drugVars ?? 0)?.['caffeine_dose'] !== 0  &&  ((s as any).pcs_sleep ?? 0) >= 10) {
    if (((s as any).pcs_sleep ?? 0) <= 50) {
      if (((s as any).drugVars ?? 0)?.['sleep_actual'] > 5) {
        ((s as any).stat_texts ?? {})['sleep'] = 'Heavy lids tug at your vision, and the coffee offers little relief.';
        qspCall(s, 'stat_display_compute', 'queue_msg', 'sleep', 'neg', 'status/need_sleep', 2);
        if (((s as any).drugVars ?? 0)?.['sleep_actual'] <= 25) {
          qspCall(s, 'stat_display_compute', 'queue_alert', 'You are barely awake.', 'v_neg');
        }
      }
    } else {
      if (((s as any).pcs_sleep ?? 0) <= 75) {
        if (((s as any).drugVars ?? 0)?.['sleep_actual'] <= 5) {
          ((s as any).stat_texts ?? {})['sleep'] = 'Your body wants to collapse, but caffeine won\'t let it.';
          qspCall(s, 'stat_display_compute', 'queue_msg', 'sleep', 'v_neg', 'status/need_sleep', 2);
          qspCall(s, 'stat_display_compute', 'queue_alert', 'You are dangerously tired.', 'v_neg');
        } else {
          if (((s as any).drugVars ?? 0)?.['sleep_actual'] <= 50) {
            ((s as any).stat_texts ?? {})['sleep'] = 'Your body is tired beneath a jittery stimulant buzz.';
            qspCall(s, 'stat_display_compute', 'queue_msg', 'sleep', 'neg', 'status/need_sleep', 2);
            if (((s as any).drugVars ?? 0)?.['sleep_actual'] <= 25) {
              qspCall(s, 'stat_display_compute', 'queue_alert', 'You are barely awake.', 'v_neg');
            }
          } else {
            ((s as any).stat_texts ?? {})['sleep'] = 'You\'re a little sleepy, but the coffee keeps you going.';
            qspCall(s, 'stat_display_compute', 'queue_msg', 'sleep', 'neutral', 'status/need_sleep', 2);
          }
        }
      } else {
        if (((s as any).drugVars ?? 0)?.['sleep_actual'] <= 5) {
          ((s as any).stat_texts ?? {})['sleep'] = 'Your blood is made entirely of caffeine.';
          qspCall(s, 'stat_display_compute', 'queue_msg', 'sleep', 'v_neg', 'status/need_sleep', 2);
          qspCall(s, 'stat_display_compute', 'queue_alert', 'You are dangerously tired.', 'v_neg');
        } else {
          if (((s as any).drugVars ?? 0)?.['sleep_actual'] <= 50) {
            ((s as any).stat_texts ?? {})['sleep'] = 'You\'re bone-tired beneath a jittery caffeine edge.';
            qspCall(s, 'stat_display_compute', 'queue_msg', 'sleep', 'neg', 'status/need_sleep', 2);
            if (((s as any).drugVars ?? 0)?.['sleep_actual'] <= 25) {
              qspCall(s, 'stat_display_compute', 'queue_alert', 'You are barely awake.', 'v_neg');
            }
          } else {
            if (((s as any).drugVars ?? 0)?.['sleep_actual'] <= 75) {
              ((s as any).stat_texts ?? {})['sleep'] = 'You feel wide awake, thanks entirely to caffeine.';
              qspCall(s, 'stat_display_compute', 'queue_msg', 'sleep', 'neutral', 'status/need_sleep', 2);
            } else {
              ((s as any).stat_texts ?? {})['sleep'] = 'You feel wide awake, and the coffee helps.';
              qspCall(s, 'stat_display_compute', 'queue_msg', 'sleep', 'pos', 'pos');
            }
          }
        }
      }
    }
  }
  if (((s as any).arch_vars ?? 0)?.['main_active'] === 'prude') {
    if (((s as any).pcs_faith ?? 0) <= 1) {
      ((s as any).stat_texts ?? {})['faith'] = 'You feel completely cut off from your faith, and your mood is badly affected.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'faith', 'v_neg', 'status/faith', 2);
      qspCall(s, 'stat_display_compute', 'queue_alert', 'You badly need to spend time at church.', 'v_neg');
    } else {
      if (((s as any).pcs_faith ?? 0) <= 25) {
        ((s as any).stat_texts ?? {})['faith'] = 'It\'s been a while since you\'ve been to church, and it\'s affecting your mood.';
        qspCall(s, 'stat_display_compute', 'queue_msg', 'faith', 'neg', 'status/faith', 2);
        qspCall(s, 'stat_display_compute', 'queue_alert', 'You need to spend some time at church.', 'neg');
      } else {
        if (((s as any).pcs_faith ?? 0) <= 50) {
          ((s as any).stat_texts ?? {})['faith'] = 'You could do with a trip to church soon.';
          qspCall(s, 'stat_display_compute', 'queue_msg', 'faith', 'neutral', 'pos');
        } else {
          ((s as any).stat_texts ?? {})['faith'] = 'Your faith feels solid.';
          qspCall(s, 'stat_display_compute', 'queue_msg', 'faith', 'v_pos', 'pos');
        }
      }
    }
    (s as any).temp_weekday = qspFunc(s, 'time', 'get_week_from_daystart', ((s as any).daystart ?? 0));
    if (((s as any).temp_weekday ?? 0) === 6  &&  ((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) < 19) {
      qspCall(s, 'stat_display_compute', 'queue_alert', 'Church Vigil is this evening.', 'prude');
    } else {
      if (((s as any).temp_weekday ?? 0) === 7  &&  ((s as any).hour ?? 0) >= 5  &&  ((s as any).hour ?? 0) < 10) {
        qspCall(s, 'stat_display_compute', 'queue_alert', 'Divine Liturgy is this morning.', 'prude');
      }
    }
  }
  if (((s as any).stat_cfg ?? 0)?.['render_mode_status'] === 3  &&  ((s as any).cheatVars ?? 0)?.['sleep'] === 0) {
    if (((s as any).drugVars ?? 0)?.['caffeine_dose'] > 0  &&  ((s as any).drugVars ?? 0)?.['sleep_actual'] < 100) {
      ((s as any).sd_pr ?? {})['sl'] = ((s as any).drugVars ?? 0)?.['sleep_actual'];
    } else {
      ((s as any).sd_pr ?? {})['sl'] = ((s as any).pcs_sleep ?? 0);
    }
    if (((s as any).sd_pr ?? 0)?.['sl'] <= 5) {
      // TODO-QSP: $sd_pr_urgent[] = 'about to collapse'
    } else {
      if (((s as any).sd_pr ?? 0)?.['sl'] <= 25) {
        // TODO-QSP: $sd_pr_warning[] = 'barely awake'
      } else {
        if (((s as any).sd_pr ?? 0)?.['sl'] <= 50) {
          // TODO-QSP: $sd_pr_mild[] = 'sleepy'
        }
      }
    }
    if (((s as any).drugVars ?? 0)?.['caffeine_dose'] > 0  &&  ((s as any).pcs_sleep ?? 0) > ((s as any).drugVars ?? 0)?.['sleep_actual']  &&  ((s as any).drugVars ?? 0)?.['sleep_actual'] <= 50) {
      // TODO-QSP: $sd_pr_mild[] = 'wired on caffeine'
    }
  }
  if (((s as any).stat_cfg ?? 0)?.['render_mode_status'] === 3) {
    ((s as any).sd_pr ?? {})['i'] = 0;
    // TODO-QSP: :sd_pr_flatten_urgent
    if (((s as any).sd_pr ?? 0)?.['i'] < Object.keys((s as any).sd_pr_urgent ?? {}).length) {
      // TODO-QSP: $sd_pr_flat[] = $func('wrap', 'v_neg', $sd_pr_urgent[sd_pr['i']])
      ((s as any).sd_pr ?? {})['i'] = (((s as any).sd_pr ?? {})['i'] ?? 0) + (1);
      // TODO-QSP: jump 'sd_pr_flatten_urgent'
    }
    ((s as any).sd_pr ?? {})['i'] = 0;
    // TODO-QSP: :sd_pr_flatten_warning
    if (((s as any).sd_pr ?? 0)?.['i'] < Object.keys((s as any).sd_pr_warning ?? {}).length) {
      // TODO-QSP: $sd_pr_flat[] = $func('wrap', 'neg', $sd_pr_warning[sd_pr['i']])
      ((s as any).sd_pr ?? {})['i'] = (((s as any).sd_pr ?? {})['i'] ?? 0) + (1);
      // TODO-QSP: jump 'sd_pr_flatten_warning'
    }
    ((s as any).sd_pr ?? {})['i'] = 0;
    // TODO-QSP: :sd_pr_flatten_mild
    if (((s as any).sd_pr ?? 0)?.['i'] < Object.keys((s as any).sd_pr_mild ?? {}).length) {
      // TODO-QSP: $sd_pr_flat[] = $func('wrap', 'neutral', $sd_pr_mild[sd_pr['i']])
      ((s as any).sd_pr ?? {})['i'] = (((s as any).sd_pr ?? {})['i'] ?? 0) + (1);
      // TODO-QSP: jump 'sd_pr_flatten_mild'
    }
    ((s as any).sd_pr ?? {})['total'] = 0;
    if (((s as any).sd_pr ?? 0)?.['total'] === 0) {
      if (Object.keys((s as any).sd_pr_upbeat ?? {}).length > 0) {
      }
    } else {
      if (((s as any).sd_pr ?? 0)?.['total'] === 1) {
      } else {
        if (((s as any).sd_pr ?? 0)?.['total'] === 2) {
        } else {
          ((s as any).sd_pr ?? {})['i'] = 1;
          // TODO-QSP: :sd_pr_join_loop
          if (((s as any).sd_pr ?? 0)?.['i'] < (((s as any).sd_pr ?? 0)?.['total'] - 1)) {
            // TODO-QSP: $sd_status_prose += ', ' + $sd_pr_flat[sd_pr['i']]
            ((s as any).sd_pr ?? {})['i'] = (((s as any).sd_pr ?? {})['i'] ?? 0) + (1);
            // TODO-QSP: jump 'sd_pr_join_loop'
          }
          // TODO-QSP: $sd_status_prose += ', and ' + $sd_pr_flat[sd_pr['total'] - 1]
        }
      }
      if (Object.keys((s as any).sd_pr_upbeat ?? {}).length > 0) {
        // TODO-QSP: $sd_status_prose += '—but ' + $func('wrap', 'v_pos', $sd_pr_upbeat[0])
      }
      // TODO-QSP: $sd_status_prose += '.'
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterComputeBody(s: GameState, scene: SceneBuilder): void {
  ((s as any).stat_texts ?? {})['hotcat'] = 'People would rate your appearance as a ' + qspUntranslated(s, "pcs_hotcat>", { location: "stat_display_compute" }) + ' out of 10.';
  qspCall(s, 'stat_display_compute', 'queue_msg', 'hotcat', '', 'status/appearance', 1, 'const');
  if ((!((s as any).opPRE ?? 0))) {
    // TODO-QSP: $stat_texts['makeup_hair'] = 'Your face is <<$pc_descWordy[''makeup'']>>, and your hair is <<$pcs_hairstate>>.'
    qspCall(s, 'stat_display_compute', 'queue_msg', 'makeup_hair');
  }
  if ((!((s as any).opPRE ?? 0))) {
    if (((s as any).pcs_makeup ?? 0) === 1  &&  ((s as any).mc_inventory ?? 0)?.['travel_mirror'] > 0  &&  ((s as any).mc_inventory ?? 0)?.['travel_makeup'] > 0) {
      ((s as any).stat_texts ?? {})['makeup_icon_tooltip'] = '' + qspUntranslated(s, "pcs_makeup_tooltip>", { location: "stat_display_compute" }) + ' Click to put on light makeup.';
      // TODO-QSP: gs 'stat_display_compute', 'queue_msg', 'makeup_icon', '', 'status/makeup_' + $str(pcs_makeup), 1, '...
    } else {
      ((s as any).stat_texts ?? {})['makeup_icon_tooltip'] = ((s as any).pcs_makeup_tooltip ?? 0);
      // TODO-QSP: gs 'stat_display_compute', 'queue_msg', 'makeup_icon', '', 'status/makeup_' + $str(min(pcs_makeup, 4...
    }
  }
  if ((!((s as any).opPRE ?? 0))) {
    if (((s as any).pcs_hairbsh ?? 0) !== 1  &&  ((s as any).mc_inventory ?? 0)?.['comb'] > 0) {
      // TODO-QSP: $stat_texts['hair_icon_tooltip'] = 'Your hair is <<$pcs_hairstate>>. Click to brush. It would take about <<min(15, max(1, pcs_hairlng / 80))>> minutes.'
      qspCall(s, 'stat_display_compute', 'queue_msg', 'hair_icon', '', 'status/hair_0', 1, 'minut += min(15, max(1, pcs_hairlng / 80)) & pcs_hairbsh = 1 & gs \'stat\'');
    } else {
      ((s as any).stat_texts ?? {})['hair_icon_tooltip'] = 'Your hair is ' + qspUntranslated(s, "pcs_hairstate>", { location: "stat_display_compute" }) + '.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'hair_icon', '', 'status/hair_' + 0 + '', 1);
    }
  }
  if (((s as any).pcs_lipbalm ?? 0) > 0) {
    ((s as any).stat_texts ?? {})['lipbalm'] = 'Your lips are covered in moisturizing balm.';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'lipbalm', 'pos', 'status/lipstick', 1, 'const');
  }
  if (((s as any).false_lashes ?? 0) >= 1) {
    ((s as any).stat_texts ?? {})['lashes'] = 'You\'re wearing false' + ((((s as any).pcs_lashes ?? 0) === 4) ? (' mink ') : (' ')) + 'lashes.';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'lashes', 'pos', 'status/lashes', 1, 'const');
  }
  if (((s as any).pcs_leghair ?? 0) >= 4) {
    ((s as any).stat_texts ?? {})['shave'] = 'Your legs ' + ((((s as any).pubestyle ?? 0) > 0  &&  ((s as any).pcs_pubes ?? 0) >= ((s as any).shave_trigger ?? 0)) ? ('and pussy ') : ('')) + 'are unshaved.';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'shave', '', 'status/need_shave', 1);
  } else {
    if (((s as any).pubestyle ?? 0) > 0  &&  ((s as any).pcs_pubes ?? 0) >= ((s as any).shave_trigger ?? 0)) {
      ((s as any).stat_texts ?? {})['shave'] = 'Your pussy is unshaved.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'shave', '', 'status/need_shave', 1);
    }
  }
  if (((s as any).cheatVars ?? 0)?.['no_sweat'] === 0) {
    if (((s as any).pcs_sweat ?? 0) >= 60) {
      ((s as any).stat_texts ?? {})['sweat'] = 'You\'re dripping wet with sweat and smell like a gym sock.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'sweat', 'v_neg', 'status/need_shower', 1);
      qspCall(s, 'stat_display_compute', 'queue_alert', 'You are soaked in sweat.', 'v_neg');
    } else {
      if (((s as any).pcs_sweat ?? 0) >= 50) {
        ((s as any).stat_texts ?? {})['sweat'] = 'You really stink.';
        qspCall(s, 'stat_display_compute', 'queue_msg', 'sweat', 'v_neg', 'status/need_shower', 1);
        qspCall(s, 'stat_display_compute', 'queue_alert', 'You reek of sweat.', 'v_neg');
      } else {
        if (((s as any).pcs_sweat ?? 0) >= 40) {
          ((s as any).stat_texts ?? {})['sweat'] = 'You stink.';
          qspCall(s, 'stat_display_compute', 'queue_msg', 'sweat', 'neg', 'status/need_shower', 1);
          qspCall(s, 'stat_display_compute', 'queue_alert', 'You smell of sweat.', 'neg');
        } else {
          if (((s as any).pcs_sweat ?? 0) >= 30) {
            ((s as any).stat_texts ?? {})['sweat'] = 'You\'re a little smelly.';
            qspCall(s, 'stat_display_compute', 'queue_msg', 'sweat', 'neutral', 'status/need_shower', 1);
          } else {
            if (((s as any).pcs_sweat ?? 0) >= 20) {
              ((s as any).stat_texts ?? {})['sweat'] = 'You\'re sweating.';
              qspCall(s, 'stat_display_compute', 'queue_msg', 'sweat', 'neutral', 'status/need_shower', 1);
            } else {
              if (((s as any).pcs_sweat ?? 0) >= 10  &&  ((s as any).deodorant_on ?? 0) === 1) {
                ((s as any).stat_texts ?? {})['sweat'] = 'You feel fresh with your deodorant on.';
                qspCall(s, 'stat_display_compute', 'queue_msg', 'sweat', 'pos', 'status/deodorant', 1, 'pos');
              } else {
                if (((s as any).deodorant_on ?? 0) === 1) {
                  ((s as any).stat_texts ?? {})['sweat'] = 'You feel fresh with your deodorant on.';
                  qspCall(s, 'stat_display_compute', 'queue_msg', 'sweat', 'v_pos', 'status/deodorant', 1, 'pos');
                } else {
                  if (Object.keys((s as any).sparrvol ?? {}).length === 0) {
                    ((s as any).stat_texts ?? {})['sweat'] = 'You\'re sparkling clean.';
                    qspCall(s, 'stat_display_compute', 'queue_msg', 'sweat', 'pos', 'pos');
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).sick ?? 0) >= 75) {
    ((s as any).stat_texts ?? {})['sick'] = 'You toss in the heat. You have a stuffy nose and headache, and ache to the bone. Your throat is inflamed and very sore. You think you\'re going to cough up a lung.';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'sick', 'v_neg', 'status/health', 3);
    qspCall(s, 'stat_display_compute', 'queue_alert', 'You are gravely ill.', 'v_neg');
  } else {
    if (((s as any).sick ?? 0) >= 50) {
      ((s as any).stat_texts ?? {})['sick'] = 'You have a high fever, a stuffy nose, a sore head and throat, and you\'re coughing badly. Maybe it\'s the flu?';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'sick', 'v_neg', 'status/health', 3);
      qspCall(s, 'stat_display_compute', 'queue_alert', 'You are very sick.', 'v_neg');
    } else {
      if (((s as any).sick ?? 0) >= 25) {
        ((s as any).stat_texts ?? {})['sick'] = 'You have a fever, your nose is clogged and it hurts to swallow. You continually cough and sneeze.';
        qspCall(s, 'stat_display_compute', 'queue_msg', 'sick', 'v_neg', 'status/health', 3);
        qspCall(s, 'stat_display_compute', 'queue_alert', 'You are sick.', 'neg');
      } else {
        if (((s as any).sick ?? 0) >= 5) {
          ((s as any).stat_texts ?? {})['sick'] = 'Your nose is running and your throat is raw as you cough and sneeze.';
          qspCall(s, 'stat_display_compute', 'queue_msg', 'sick', 'v_neg', 'status/health', 3);
          qspCall(s, 'stat_display_compute', 'queue_alert', 'You feel unwell.', 'neg');
        } else {
          if (((s as any).sick ?? 0) === 1) {
            ((s as any).stat_texts ?? {})['sick'] = 'You have a tickle in your throat and a runny nose.';
            qspCall(s, 'stat_display_compute', 'queue_msg', 'sick', 'v_neg', 'status/health', 3);
          }
        }
      }
    }
  }
  if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] >= 20) {
    ((s as any).stat_texts ?? {})['lack_sleep'] = 'You\'re not getting enough sleep, which is severely inhibiting your ability to learn new things. You need to have a full night\'s rest to be better.';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'lack_sleep', '', 'status/lack_of_sleep_4', 3);
  } else {
    if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] >= 10) {
      ((s as any).stat_texts ?? {})['lack_sleep'] = 'You\'re not getting enough sleep, which has a large negative effect on your ability to learn new things. You need to sleep more, maybe have a full night\'s rest.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'lack_sleep', '', 'status/lack_of_sleep_3', 3);
    } else {
      if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] >= 5) {
        ((s as any).stat_texts ?? {})['lack_sleep'] = 'You\'re not getting enough sleep, which is modestly inhibiting your ability to learn new things. You need to sleep more.';
        qspCall(s, 'stat_display_compute', 'queue_msg', 'lack_sleep', '', 'status/lack_of_sleep_2', 3);
      } else {
        if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] >= 2) {
          ((s as any).stat_texts ?? {})['lack_sleep'] = 'You\'re not sleeping as much as you should, which has a small effect on your ability to learn new things. You should sleep more, or else you risk this getting worse.';
          qspCall(s, 'stat_display_compute', 'queue_msg', 'lack_sleep', '', 'status/lack_of_sleep_1', 3);
        }
      }
    }
  }
  if (((s as any).frost ?? 0) > 10) {
    ((s as any).stat_texts ?? {})['frost'] = 'You are freezing.';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'frost', 'v_neg', 'status/hypothermia', 3);
    qspCall(s, 'stat_display_compute', 'queue_alert', 'You are freezing.', 'v_neg');
  } else {
    if (((s as any).frost ?? 0) > 5) {
      ((s as any).stat_texts ?? {})['frost'] = 'You are cold.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'frost', 'v_neg', 'status/hypothermia', 3);
      qspCall(s, 'stat_display_compute', 'queue_alert', 'You are very cold.', 'neg');
    } else {
      if (((s as any).frost ?? 0) > 0) {
        ((s as any).stat_texts ?? {})['frost'] = 'You are a little chilly.';
        qspCall(s, 'stat_display_compute', 'queue_msg', 'frost', 'v_neg', 'status/hypothermia', 3);
      }
    }
  }
  if (((s as any).recuperation ?? 0) === 1) {
    ((s as any).stat_texts ?? {})['recuperation'] = 'You are still recovering from major surgery.';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'recuperation', 'v_neg', 'status/health', 3);
    qspCall(s, 'stat_display_compute', 'queue_alert', 'You are recovering from surgery.', 'v_neg');
  }
  if (((s as any).body_write ?? 0) >= 1  &&  ((s as any).face_write ?? 0) >= 1) {
    ((s as any).stat_texts ?? {})['writing'] = 'Your body and face are covered in obscene graffiti.';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'writing', 'v_neg', 'status/body_writing', 3);
    qspCall(s, 'stat_display_compute', 'queue_alert', 'You have writing on your body and face.', 'v_neg');
  } else {
    if (((s as any).face_write ?? 0) > 1) {
      ((s as any).stat_texts ?? {})['writing'] = 'You have writing on your face.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'writing', 'v_neg', 'status/body_writing', 3);
      qspCall(s, 'stat_display_compute', 'queue_alert', 'You have writing on your face.', 'v_neg');
    } else {
      if (((s as any).face_write ?? 0) === 1) {
        ((s as any).stat_texts ?? {})['writing'] = 'Your face has a humiliating label written on it.';
        qspCall(s, 'stat_display_compute', 'queue_msg', 'writing', 'v_neg', 'status/body_writing', 3);
        qspCall(s, 'stat_display_compute', 'queue_alert', 'You have a label on your face.', 'v_neg');
      } else {
        if (((s as any).body_write ?? 0) > 1) {
          ((s as any).stat_texts ?? {})['writing'] = 'Your body is inscribed with derogatory graffiti.';
          qspCall(s, 'stat_display_compute', 'queue_msg', 'writing', 'v_neg', 'status/body_writing', 3);
          qspCall(s, 'stat_display_compute', 'queue_alert', 'You have writing on your body.', 'v_neg');
        } else {
          if (((s as any).body_write ?? 0) === 1) {
            ((s as any).stat_texts ?? {})['writing'] = 'Your body has an obscene message written on it.';
            qspCall(s, 'stat_display_compute', 'queue_msg', 'writing', 'v_neg', 'status/body_writing', 3);
            qspCall(s, 'stat_display_compute', 'queue_alert', 'You have writing on your body.', 'v_neg');
          }
        }
      }
    }
  }
  if (((s as any).fingal ?? 0) > 0) {
    ((s as any).stat_texts ?? {})['black_eye'] = 'You have a black eye.';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'black_eye', 'v_neg');
  }
  if (((s as any).mosol ?? 0) >= 50) {
    ((s as any).stat_texts ?? {})['commando'] = 'Your pussy itches a great deal and is affecting your mood. You should use some cream or stop wearing pants without underwear.';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'commando', 'v_neg');
  } else {
    if (((s as any).mosol ?? 0) >= 30) {
      ((s as any).stat_texts ?? {})['commando'] = 'Your pussy feels a little itchy. It seems to be from rubbing against your clothing.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'commando', 'v_neg');
    }
  }
  if (((s as any).pantyworntype ?? 0) !== 'none'  &&  ((s as any).clit_size ?? 0) >= 40) {
    ((s as any).stat_texts ?? {})['panties_rubbing'] = 'Your panties keep rubbing against your clit and making you horny.';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'panties_rubbing', 'bimbo');
  }
  (s as any).temp_std_count = 0;
  if (((s as any).Gerpes ?? 0) >= 10  &&  ((s as any).GenHerpes ?? 0) === 1) {
    (s as any).temp_std_count = ((s as any).temp_std_count ?? 0) + (1);
    ((s as any).stat_texts ?? {})['std_gen_herpes'] = 'Sores have appeared on your vagina. You have genital herpes.';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'std_gen_herpes', 'v_neg', 'status/std', 3);
  } else {
    if (((s as any).Gerpes ?? 0) >= 5  &&  ((s as any).GenHerpes ?? 0) === 1) {
      (s as any).temp_std_count = ((s as any).temp_std_count ?? 0) + (1);
      ((s as any).stat_texts ?? {})['std_gen_herpes'] = 'Your vagina is red and very itchy. You have genital herpes.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'std_gen_herpes', 'v_neg', 'status/std', 3);
    } else {
      if (((s as any).Gerpes ?? 0) >= 3  &&  ((s as any).OrHerpes ?? 0) === 1) {
        (s as any).temp_std_count = ((s as any).temp_std_count ?? 0) + (1);
        ((s as any).stat_texts ?? {})['std_oral_herpes'] = 'You have cold sores on your lips. You have oral herpes.';
        qspCall(s, 'stat_display_compute', 'queue_msg', 'std_oral_herpes', 'v_neg', 'status/std', 3);
      }
    }
  }
  if (((s as any).Gerpes ?? 0) >= 20  &&  ((s as any).GenHerpes ?? 0) === 1) {
    (s as any).temp_std_count = ((s as any).temp_std_count ?? 0) + (1);
    ((s as any).stat_texts ?? {})['std_anal_herpes'] = 'The herpes sores also cover your ass.';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'std_anal_herpes', 'v_neg', 'status/std', 3);
  }
  if (((s as any).Sifilis ?? 0) >= 50) {
    (s as any).temp_std_count = ((s as any).temp_std_count ?? 0) + (1);
    ((s as any).stat_texts ?? {})['std_syphilis'] = 'Syphilitic rashes cover your whole body.';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'std_syphilis', 'v_neg', 'status/std', 3);
  } else {
    if (((s as any).Sifilis ?? 0) >= 21) {
      (s as any).temp_std_count = ((s as any).temp_std_count ?? 0) + (1);
      ((s as any).stat_texts ?? {})['std_syphilis'] = 'You have a single large, hard sore on the lip. You have syphilis.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'std_syphilis', 'v_neg', 'status/std', 3);
    }
  }
  if (((s as any).Triper ?? 0) > 2) {
    (s as any).temp_std_count = ((s as any).temp_std_count ?? 0) + (1);
    ((s as any).stat_texts ?? {})['std_gonorrhea'] = 'It stings when you\'re urinating. You have gonorrhea.';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'std_gonorrhea', 'v_neg', 'status/std', 3);
  }
  if (((s as any).Kandidoz ?? 0) > 30) {
    (s as any).temp_std_count = ((s as any).temp_std_count ?? 0) + (1);
    ((s as any).stat_texts ?? {})['std_yeast'] = 'There\'s a white discharge coming from your vagina. You have a yeast infection.';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'std_yeast', 'v_neg', 'status/std', 3);
  }
  ((s as any).stat_nums ?? {})['std_count'] = ((s as any).temp_std_count ?? 0);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterComputeAppearance(s: GameState, scene: SceneBuilder): void {
  if (((s as any).PShoBimbo ?? 0) === 1) {
    // TODO-QSP: $temp_shoes += ' ' + $func('wrap', 'bimbo', 'bimbo')
    if (((s as any).PCloBimbo ?? 0) === 1  &&  ((s as any).pcs_makeup ?? 0) === 6) {
      // TODO-QSP: $temp_mu += ' ' + $func('wrap', 'bimbo', 'bimbo')
      // TODO-QSP: $temp_tot += ' ' + $func('wrap', 'bimbo', 'bimbo')
    }
  }
  if (((s as any).PShoGoth ?? 0) === 1) {
    // TODO-QSP: $temp_shoes += ' ' + $func('wrap', 'goth', 'goth')
    if (((s as any).PCloGoth ?? 0) === 1  &&  ((s as any).pcs_makeup ?? 0) === 7) {
      // TODO-QSP: $temp_mu += ' ' + $func('wrap', 'goth', 'goth')
      // TODO-QSP: $temp_tot += ' ' + $func('wrap', 'goth', 'goth')
    }
  }
  if (((s as any).PShoPunk ?? 0) === 1) {
    // TODO-QSP: $temp_shoes += ' ' + $func('wrap', 'punk', 'punk')
    if (((s as any).PCloPunk ?? 0) === 1  &&  ((s as any).pcs_makeup ?? 0) >= 1  &&  ((s as any).pcs_makeup ?? 0) < 3) {
      // TODO-QSP: $temp_mu += $iif(pcs_makeup = 1, ' no', ' ' + $func('wrap', 'punk', 'punk'))
      // TODO-QSP: $temp_tot += ' ' + $func('wrap', 'punk', 'punk')
    }
  }
  if (((s as any).temp_shoes ?? 0) !== '') {
    ((s as any).stat_texts ?? {})['clothes_style'] = 'You are wearing' + qspUntranslated(s, "temp_shoes>", { location: "stat_display_compute" }) + ' shoes';
    if (((s as any).temp_mu ?? 0) !== '') {
      ((s as any).stat_texts ?? {})['clothes_style'] = (((s as any).stat_texts ?? {})['clothes_style'] ?? 0) + (' and' + qspUntranslated(s, "temp_mu>", { location: "stat_display_compute" }) + ' make up');
    }
    ((s as any).stat_texts ?? {})['clothes_style'] = (((s as any).stat_texts ?? {})['clothes_style'] ?? 0) + ('.');
    if (((s as any).temp_tot ?? 0) !== '') {
      ((s as any).stat_texts ?? {})['clothes_style'] = (((s as any).stat_texts ?? {})['clothes_style'] ?? 0) + (' You look like a' + qspUntranslated(s, "temp_tot>", { location: "stat_display_compute" }) + '.');
    }
    ((s as any).stat_texts ?? {})['clothes_style_tooltip'] = ((s as any).stat_texts ?? 0)?.['clothes_tooltip'];
    qspCall(s, 'stat_display_compute', 'queue_msg', 'clothes_style');
  }
  if (((s as any).pcs_heels ?? 0) < ((s as any).PShoPain ?? 0)?.['mild']) {
    if (((s as any).pain ?? 0)?.['feet'] >= 70) {
      ((s as any).stat_texts ?? {})['feet_pain'] = 'Your feet are killing you. You should wear more comfortable shoes.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'feet_pain', 'v_neg');
      qspCall(s, 'stat_display_compute', 'queue_alert', 'Your feet are in serious pain.', 'v_neg');
    } else {
      if (((s as any).pain ?? 0)?.['feet'] >= 50) {
        ((s as any).stat_texts ?? {})['feet_pain'] = 'Your feet are aching. You should wear more comfortable shoes.';
        qspCall(s, 'stat_display_compute', 'queue_msg', 'feet_pain', 'neg');
      }
    }
  }
  if (((s as any).analPlugIn ?? 0) === 1  &&  ((s as any).vibratorin ?? 0) === 1) {
    ((s as any).stat_texts ?? {})['toys'] = 'You are wearing both a vibrator and a butt plug.';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'toys', 'bimbo', 'status/tdouble_stuffed', 4);
  } else {
    if (((s as any).analPlugIn ?? 0) === 1) {
      ((s as any).stat_texts ?? {})['toys'] = 'You are wearing a butt plug.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'toys', 'bimbo', 'status/tbutt_plug', 4);
    } else {
      if (((s as any).vibratorin ?? 0) === 1) {
        ((s as any).stat_texts ?? {})['toys'] = 'A vibrator is inserted into your vagina.';
        qspCall(s, 'stat_display_compute', 'queue_msg', 'toys', 'bimbo', 'status/tvibrator', 4);
      }
    }
  }
  if (((s as any).cumcondslip ?? 0) > 0  &&  ((s as any).cumcondslip_aware ?? 0) > 0) {
    ((s as any).stat_texts ?? {})['stuck_condom'] = 'You feel sick, and are wondering about the used condom you never found. Maybe the two are related?';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'stuck_condom', 'v_neg', 'status/stuck_condom', 3);
    qspCall(s, 'stat_display_compute', 'queue_alert', 'A used condom is stuck inside you.', 'v_neg');
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterComputeMisc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).AlbinaQW ?? 0)?.['StarletsJoined'] > 0  &&  ((s as any).AlbinaQW ?? 0)?.['StarletsShutDown'] === 0  &&  ((s as any).npc_pregtalk ?? 0)?.['A23'] === 0  &&  ((s as any).starlets_on ?? 0) === 1  &&  ((s as any).stat_nums ?? 0)?.['starlets_late_msg'] !== ((s as any).daystart ?? 0)) {
    if ((((s as any).hour ?? 0) < 16  ||  ((s as any).starlets_missed ?? 0) > 0)) {
      if ((((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) < 19)  &&  ((s as any).starlets_practice ?? 0) > 0) {
        ((s as any).stat_texts ?? {})['starlets'] = 'You missed practice with the Starlets today!';
        qspCall(s, 'stat_display_compute', 'queue_msg', 'starlets', 'v_neg', 'status/starlets_red', 4, 'stat_nums[\'starlets_late_msg\'] = daystart & msg \'You missed practice with the Starlets today!\'');
      } else {
        // TODO-QSP: $stat_texts['starlets'] = 'You must be at Starlets practice between <<$func(''time'', ''get_time_string'', 15, 0)>> and <<$func(''time'', ''get_time_string'', 16, 0)>> today.'
        qspCall(s, 'stat_display_compute', 'queue_msg', 'starlets', '', 'status/starlets_black|status/starlets_white', 4);
        if (((s as any).hour ?? 0) >= 14) {
          qspCall(s, 'stat_display_compute', 'queue_alert', 'Starlets practice starts soon.', 'neg');
        }
      }
    }
  }
  if (((s as any).vballVars ?? 0)?.['on_team'] === 1  &&  ((s as any).week ?? 0) === 6  &&  ((s as any).vballVars ?? 0)?.['last_match_day'] !== ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) <= 18  &&  (((s as any).daystart ?? 0) % 365) !== 1) {
    ((s as any).stat_texts ?? {})['vball'] = 'There is volleyball tournament today at ' + qspUntranslated(s, "func('time', 'get_time_string', 18, 0)>", { location: "stat_display_compute" }) + '.';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'vball', '', 'status/volleyball', 4);
    if (((s as any).hour ?? 0) >= 16) {
      qspCall(s, 'stat_display_compute', 'queue_alert', 'Volleyball tournament starts soon.', 'neg');
    }
  }
  if (((s as any).daystart ?? 0) === ((s as any).policeQW_courthearing_dates ?? 0)[0] - 1) {
    // TODO-QSP: $stat_texts['court'] = 'You have a court hearing tomorrow between <<$func(''time'', ''get_time_string'', 7, 0)>> and <<$func(''time'', ''get_time_string'', 11, 0)>>. The court is located in the city center of St. Petersburg.'
    qspCall(s, 'stat_display_compute', 'queue_msg', 'court', 'neg', 'status/courtdate', 4);
  } else {
    if (((s as any).daystart ?? 0) === ((s as any).policeQW_courthearing_dates ?? 0)[0]) {
      if (((s as any).hour ?? 0) < 11) {
        // TODO-QSP: $stat_texts['court'] = 'You have a court hearing today between <<$func(''time'', ''get_time_string'', 7, 0)>> and <<$func(''time'', ''get_time_string'', 11, 0)>>. The court is located in the city center of St. Petersburg.'
        qspCall(s, 'stat_display_compute', 'queue_msg', 'court', 'v_neg', 'status/courtdate', 4);
        qspCall(s, 'stat_display_compute', 'queue_alert', 'You have a court hearing today.', 'v_neg');
      }
    }
  }
  if (((s as any).policeQW ?? 0)?.['legal_fine'] > 0) {
    // TODO-QSP: $stat_texts['fines'] = 'You have outstanding fines totalling <<$func(''money'', ''string_debt'', policeQW[''legal_fine''])>> and you have <<policeQW[''fine_deadline'']-daystart>> days left to pay them. You can settle your debt at the post office.'
    if (((s as any).policeQW ?? 0)?.['fine_deadline'] === ((s as any).daystart ?? 0)) {
      qspCall(s, 'stat_display_compute', 'queue_msg', 'fines', '', 'status/fine', 4);
      qspCall(s, 'stat_display_compute', 'queue_alert', 'Your fines are due today.', 'v_neg');
    } else {
      if (((s as any).policeQW ?? 0)?.['fine_deadline'] - ((s as any).daystart ?? 0) <= 3) {
        qspCall(s, 'stat_display_compute', 'queue_msg', 'fines', '', 'status/fine', 4);
      } else {
        qspCall(s, 'stat_display_compute', 'queue_msg', 'fines', '', 'status/fine', 4);
      }
    }
  }
  if (((s as any).ml_guitarlesson ?? 0)?.['nextlesson'] === ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) < 15) {
    ((s as any).stat_texts ?? {})['music_lesson'] = 'You have a guitar lesson scheduled for ' + qspUntranslated(s, "func('time', 'get_time_string', 15, 0)>", { location: "stat_display_compute" }) + ' at the Community Hall.';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'music_lesson', '', 'status/musiclesson', 4);
    if (((s as any).hour ?? 0) >= 13) {
      qspCall(s, 'stat_display_compute', 'queue_alert', 'Your guitar lesson starts soon.', 'neg');
    }
  }
  if (((s as any).nerd_game ?? 0)?.['game_day'] === ((s as any).daystart ?? 0)) {
    if (((s as any).yearstart ?? 0) > 1  &&  ((s as any).hour ?? 0) < 19) {
      ((s as any).stat_texts ?? {})['game_night'] = 'Game night starts tonight at ' + qspUntranslated(s, "func('time', 'get_time_string', 18, 0)>", { location: "stat_display_compute" }) + ' at the Coffee Hole';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'game_night', '', 'status/game_night', 4);
      if (((s as any).hour ?? 0) >= 17) {
        qspCall(s, 'stat_display_compute', 'queue_alert', 'Game night starts soon.', 'neg');
      }
    } else {
      if (((s as any).yearstart ?? 0) <= 1  &&  ((s as any).hour ?? 0) < 21) {
        ((s as any).stat_texts ?? {})['game_night'] = 'Game night starts tonight at ' + qspUntranslated(s, "func('time', 'get_time_string', 20, 0)>", { location: "stat_display_compute" }) + ' at the Community Center';
        qspCall(s, 'stat_display_compute', 'queue_msg', 'game_night', '', 'status/game_night', 4);
        if (((s as any).hour ?? 0) >= 19) {
          qspCall(s, 'stat_display_compute', 'queue_alert', 'Game night starts soon.', 'neg');
        }
      }
    }
  }
  if (((s as any).trait_vars ?? 0)?.['cum_addict'] > 0) {
    if (((s as any).missCum ?? 0) > ((s as any).timeTresh ?? 0)) {
      if (((s as any).trait_vars ?? 0)?.['cum_addict'] === 2) {
        ((s as any).stat_texts ?? {})['cum_craving'] = 'You desperately need cum inside you. Your body aches for it.';
        qspCall(s, 'stat_display_compute', 'queue_msg', 'cum_craving', 'hypno', 'status/hypno_addict', 3);
        qspCall(s, 'stat_display_compute', 'queue_alert', 'You desperately need cum.', 'hypno');
      } else {
        ((s as any).stat_texts ?? {})['cum_craving'] = 'You crave the feeling of cum inside you. You feel restless and on edge.';
        qspCall(s, 'stat_display_compute', 'queue_msg', 'cum_craving', 'hypno', 'status/hypno_addict', 3);
      }
    }
  }
  if (((s as any).hypnoWithdrawal ?? 0) > 0) {
    if (((s as any).hypnoWithdrawal ?? 0) === 2) {
      ((s as any).stat_texts ?? {})['hypno_withdrawal'] = 'You need to talk to your therapist, as soon as possible. You feel deeply unbalanced without your sessions.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'hypno_withdrawal', 'hypno', 'status/hypno_addict', 3);
      qspCall(s, 'stat_display_compute', 'queue_alert', 'You need to see your therapist.', 'hypno');
    } else {
      ((s as any).stat_texts ?? {})['hypno_withdrawal'] = 'You feel like talking to your therapist. You miss your sessions.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'hypno_withdrawal', 'hypno', 'status/hypno_addict', 3);
    }
  }
  if (((s as any).trait_vars ?? 0)?.['body_hair_attitude'] === -2  &&  (((s as any).pcs_pubes ?? 0) >= 4  ||  ((s as any).pcs_leghair ?? 0) >= 4)) {
    ((s as any).stat_texts ?? {})['body_hair_attitude_discomfort'] = 'Your ' + qspUntranslated(s, "temp_area>", { location: "stat_display_compute" }) + ' feel rough to the touch, lowering your mood.';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'body_hair_attitude_discomfort', 'v_neg', 'status/hypno_addict', 3);
  }
  if (((s as any).hypnoSchedule ?? 0) === 1  &&  ((s as any).therapist_weekly_block ?? 0) === 0  &&  ((s as any).week ?? 0) === 4  &&  ((s as any).therapistday ?? 0) !== ((s as any).daystart ?? 0)) {
    if (((s as any).hour ?? 0) < 18) {
      ((s as any).stat_texts ?? {})['hypno_schedule'] = 'You have a meeting scheduled with your therapist today at ' + qspUntranslated(s, "func('time', 'get_time_string', 18, 0, cheatVars['time_format'])>", { location: "stat_display_compute" }) + '.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'hypno_schedule', 'hypno', 'status/hypno_addict', 3);
      if (((s as any).hour ?? 0) > 16) {
        qspCall(s, 'stat_display_compute', 'queue_alert', 'Your therapy session starts soon.', 'hypno');
      }
    } else {
      if (((s as any).hour ?? 0) === 18  ||  (((s as any).hour ?? 0) === 19  &&  ((s as any).minut ?? 0) < 15)) {
        ((s as any).stat_texts ?? {})['hypno_schedule'] = 'You have a meeting scheduled with your therapist right now!';
        qspCall(s, 'stat_display_compute', 'queue_msg', 'hypno_schedule', 'hypno', 'status/hypno_addict', 3);
        qspCall(s, 'stat_display_compute', 'queue_alert', 'Your therapy session starts soon.', 'hypno');
      }
    }
  }
  if (((s as any).hypnoPanty ?? 0) === 1  &&  ((s as any).pantyworntype ?? 0) !== 'none') {
    ((s as any).stat_texts ?? {})['hypno_panty'] = 'You feel uneasy wearing panties.';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'hypno_panty', 'hypno', 'status/hypno_addict', 3);
  }
  if (((s as any).hypnoBra ?? 0) === 1  &&  ((s as any).braworntype ?? 0) !== 'none') {
    ((s as any).stat_texts ?? {})['hypno_bra'] = 'You feel uneasy wearing a bra.';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'hypno_bra', 'hypno', 'status/hypno_addict', 3);
  }
  if (((s as any).succubusflag ?? 0) === 1  &&  ((s as any).succhungry ?? 0) > 0) {
    // TODO-QSP: $stat_texts['succubus_feeding'] = 'You''ve needed to feed for <<succhungry>> day<<iif(succhungry > 1, ''s'', '''')>>.'
    qspCall(s, 'stat_display_compute', 'queue_msg', 'succubus_feeding', '', 'status/need_succubus_feeding', 4);
  }
  if (Object.keys((s as any).spellComplete ?? {}).length > 0) {
    ((s as any).sd_cm ?? {})['spell_text'] = '<br><b>' + qspUntranslated(s, "func('wrap', 'bimbo', 'Active Spells')>", { location: "stat_display_compute" }) + '</b>';
    ((s as any).sd_cm ?? {})['si'] = 0;
    // TODO-QSP: :sd_spell_loop
    if (((s as any).sd_cm ?? 0)?.['si'] < Object.keys((s as any).spellComplete ?? {}).length) {
      ((s as any).sd_cm ?? {})['spell_text'] = (((s as any).sd_cm ?? {})['spell_text'] ?? 0) + (qspFunc(s, 'wrap', 'bimbo', '<br>' + qspUntranslated(s, "spellName[spellTimeName[sd_cm['si']]]>", { location: "stat_display_compute" }) + ''));
      ((s as any).sd_cm ?? {})['si'] = (((s as any).sd_cm ?? {})['si'] ?? 0) + (1);
      // TODO-QSP: jump 'sd_spell_loop'
    }
    ((s as any).stat_texts ?? {})['active_spells'] = qspFunc(s, 'cleanHTML', '$sd_cm[\'spell_text\']');
    qspCall(s, 'stat_display_compute', 'queue_msg', 'active_spells');
  }
  if (((s as any).stat_cfg ?? 0)?.['notify_exp'] !== 1) {
    if (qspFunc(s, 'exp_notification', 'is_empty') === 0) {
    }
    if (((s as any).exp_notif_pending ?? 0) !== '') {
      if (((s as any).loc ?? 0) !== ((s as any).exp_notif_pending_loc ?? 0)) {
      } else {
        qspCall(s, 'stat_display_compute', 'queue_alert', ((s as any).exp_notif_pending ?? 0));
      }
    }
  }
  if (((s as any).stat_cfg ?? 0)?.['notify_archetypes'] !== 1) {
    if (qspFunc(s, 'archetypes', 'is_empty_archetypes') === 0) {
    }
    if (((s as any).archetype_notif_pending ?? 0) !== '') {
      if (((s as any).loc ?? 0) !== ((s as any).archetype_notif_pending_loc ?? 0)) {
      } else {
        qspCall(s, 'stat_display_compute', 'queue_alert', ((s as any).archetype_notif_pending ?? 0));
      }
    }
  }
  if (((s as any).accessible_property ?? 0)?.['city_house'] === 1  &&  ((s as any).accessible_property ?? 0)?.['old_town_apartment'] > 0) {
    // TODO-QSP: $stat_texts['rent'] = 'You''ve rented an apartment in the city residential area, which is paid up for <<func(''homes_properties'', ''get_rent_days'', ''city_apartment'')>> days. You also have an apartment in Pushkin, which is paid up for <<func(''homes_properties'', ''get_rent_days'', ''old_town_apartment'')>> days. Utilities are due on the 25th of <<$monthName>>.'
  } else {
    if (((s as any).accessible_property ?? 0)?.['city_house'] === 1) {
      // TODO-QSP: $stat_texts['rent'] = 'You''ve rented an apartment in the city residential area and you''re paid up for <<func(''homes_properties'', ''get_rent_days'', ''city_apartment'')>> days. Utilities are due on the 25th of <<$monthName>>.'
    } else {
      if (((s as any).accessible_property ?? 0)?.['old_town_apartment'] > 0) {
        // TODO-QSP: $stat_texts['rent'] = 'You''ve rented an apartment in Pushkin and you''re paid up for <<func(''homes_properties'', ''get_rent_days'', ''old_town_apartment'')>> days. Utilities are due on the 25th of <<$monthName>>.'
      }
    }
  }
  if (((s as any).stat_texts ?? 0)?.['rent'] !== '') {
    qspCall(s, 'stat_display_compute', 'queue_msg', 'rent');
  }
  ((s as any).stat_texts ?? {})['nicholas'] = ((s as any).nichStatMsg ?? 0);
  if (((s as any).stat_texts ?? 0)?.['nicholas'] !== '') {
    qspCall(s, 'stat_display_compute', 'queue_msg', 'nicholas');
  }
  if (((s as any).npc_QW ?? 0)?.['A113'] === 1  &&  ((s as any).belgangPay ?? 0) > 0) {
    ((s as any).stat_texts ?? {})['bely_debt'] = 'You owe Vadim Bely ' + qspUntranslated(s, "func('money', 'string_debt', belgangPay)>", { location: "stat_display_compute" }) + '';
    if (((s as any).daybelisex ?? 0) < ((s as any).daystart ?? 0)) {
      ((s as any).stat_texts ?? {})['bely_debt'] = (((s as any).stat_texts ?? {})['bely_debt'] ?? 0) + (', and you need to pay him ' + qspUntranslated(s, "func('money', 'string_debt', belgangpayweek)>", { location: "stat_display_compute" }) + ' this week.');
    } else {
      if (((s as any).daybelisex ?? 0) === ((s as any).daystart ?? 0)) {
        ((s as any).stat_texts ?? {})['bely_debt'] = (((s as any).stat_texts ?? {})['bely_debt'] ?? 0) + (', and you need to pay him ' + qspUntranslated(s, "func('money', 'string_debt', belgangpayweek)>", { location: "stat_display_compute" }) + ' next week.');
      }
    }
    qspCall(s, 'stat_display_compute', 'queue_msg', 'bely_debt');
    if (((s as any).week ?? 0) === 7  &&  ((s as any).belgangpayweek ?? 0) > 0  &&  ((s as any).daybelisex ?? 0) < ((s as any).daystart ?? 0)) {
      qspCall(s, 'stat_display_compute', 'queue_alert', 'Your weekly debt to Vadim Bely is due today.', 'v_neg');
    }
  }
  if (((s as any).region ?? 0) === 'gad') {
    if (((s as any).boletus ?? 0) + ((s as any).boletus_cooked ?? 0) + ((s as any).bilberry ?? 0) > 0) {
      if (((s as any).boletus ?? 0) + ((s as any).boletus_cooked ?? 0) + ((s as any).bilberry ?? 0) >= 5) {
        ((s as any).stat_texts ?? {})['gadukino'] = 'Your basket is full and you cannot carry more.';
      } else {
        ((s as any).stat_texts ?? {})['gadukino'] = 'Your basket is partially full.';
      }
      if (((s as any).boletus ?? 0) > 0) {
        ((s as any).stat_texts ?? {})['gadukino'] = (((s as any).stat_texts ?? {})['gadukino'] ?? 0) + ('<br>Mushrooms: <a href="exec: boletus -= 1 & gs \'stat\'"><b>' + qspUntranslated(s, "boletus>", { location: "stat_display_compute" }) + '</b></a> kg.');
      }
      if (((s as any).boletus_cooked ?? 0) > 0) {
        ((s as any).stat_texts ?? {})['gadukino'] = (((s as any).stat_texts ?? {})['gadukino'] ?? 0) + ('<br>Cooked Mushrooms: <a href="exec: boletus_cooked -= 1 & gs \'stat\'"><b>' + qspUntranslated(s, "boletus_cooked>", { location: "stat_display_compute" }) + '</b></a> kg.');
      }
      if (((s as any).bilberry ?? 0) > 0) {
        ((s as any).stat_texts ?? {})['gadukino'] = (((s as any).stat_texts ?? {})['gadukino'] ?? 0) + ('<br>Berries: <a href="exec: bilberry -= 1 & gs \'stat\'"><b>' + qspUntranslated(s, "bilberry>", { location: "stat_display_compute" }) + '</b></a> kg.');
      }
      ((s as any).stat_texts ?? {})['gadukino'] = (((s as any).stat_texts ?? {})['gadukino'] ?? 0) + ('<br>(Click numbers to throw away one a time)');
    }
    qspCall(s, 'gp_elene', 'stat_display');
    qspCall(s, 'gp_zlatek', 'stat_display');
    if (((s as any).grandpaQW ?? 0)?.['chore_mushroom_quantity'] > 0  &&  ((s as any).grandmaQW ?? 0)?.['chore_mushroom_quantity'] > 0  &&  ((s as any).boletus ?? 0) < (((s as any).grandpaQW ?? 0)?.['chore_mushroom_quantity'] + ((s as any).grandmaQW ?? 0)?.['chore_mushroom_quantity'])) {
      ((s as any).sd_cm ?? {})['need_boletus'] = (((s as any).grandpaQW ?? {})?.['chore_mushroom_quantity'] + ((s as any).grandmaQW ?? {})?.['chore_mushroom_quantity']) - ((s as any).boletus ?? 0);
    } else {
      ((s as any).sd_cm ?? {})['need_boletus'] = 0;
    }
    if (((s as any).grandpaQW ?? 0)?.['chore_berry_quantity'] > 0  &&  ((s as any).grandmaQW ?? 0)?.['chore_berry_quantity'] > 0  &&  ((s as any).bilberry ?? 0) < (((s as any).grandpaQW ?? 0)?.['chore_berry_quantity'] + ((s as any).grandmaQW ?? 0)?.['chore_berry_quantity'])) {
      ((s as any).sd_cm ?? {})['need_bilberry'] = (((s as any).grandpaQW ?? {})?.['chore_berry_quantity'] + ((s as any).grandmaQW ?? {})?.['chore_berry_quantity']) - ((s as any).bilberry ?? 0);
    } else {
      ((s as any).sd_cm ?? {})['need_bilberry'] = 0;
    }
    if (((s as any).sd_cm ?? 0)?.['need_boletus'] > 0  &&  ((s as any).sd_cm ?? 0)?.['need_bilberry'] > 0) {
      // TODO-QSP: $stat_texts['gadukino'] += '<br><b>You need <<sd_cm[''need_boletus'']>> more <<iif(sd_cm[''need_boletus''] = 1, ''kilo'', ''kilos'')>> of mushrooms and <<sd_cm[''need_bilberry'']>> more <<iif(sd_cm[''need_bilberry''] = 1, ''kilo'', ''kilos'')>> of berries to satisfy both of your grandparents requests.</b>'
    } else {
      if (((s as any).sd_cm ?? 0)?.['need_boletus'] > 0) {
        // TODO-QSP: $stat_texts['gadukino'] += '<br><b>You need <<sd_cm[''need_boletus'']>> more <<iif(sd_cm[''need_boletus''] = 1, ''kilo'', ''kilos'')>> of mushrooms to satisfy both of your grandparents requests.</b>'
      } else {
        if (((s as any).sd_cm ?? 0)?.['need_bilberry'] > 0) {
          // TODO-QSP: $stat_texts['gadukino'] += '<br><b>You need <<sd_cm[''need_bilberry'']>> more <<iif(sd_cm[''need_bilberry''] = 1, ''kilo'', ''kilos'')>> of berries to satisfy both of your grandparents requests.</b>'
        }
      }
    }
  }
  if (((s as any).stat_texts ?? 0)?.['gadukino'] !== '') {
    ((s as any).stat_texts ?? {})['gadukino_tooltip'] = qspFunc(s, 'cleanHTML', '$stat_texts[\'gadukino\']');
    qspCall(s, 'stat_display_compute', 'queue_msg', 'gadukino');
  }
  ((s as any).sd_cm ?? {})['lover_max'] = 0;
  if (((s as any).sd_cm ?? 0)?.['lover_max'] > 0) {
    ((s as any).sd_cm ?? {})['li'] = 0;
    // TODO-QSP: :sd_lover_loop
    ((s as any).sd_cm ?? {})['npcid'] = qspUntranslated(s, "lover[sd_cm['li']]", { location: "stat_display_compute" });
    if (((s as any).npc_meetday ?? 0)[((s as any).sd_cm ?? 0)?.['npcid']] === ((s as any).daystart ?? 0)) {
      ((s as any).sd_cm ?? {})['label'] = 'lover_' + ((s as any).sd_cm ?? {})?.['npcid'];
      if (((s as any).hour ?? 0) < ((s as any).npc_meethour ?? 0)[((s as any).sd_cm ?? 0)?.['npcid']]) {
        // TODO-QSP: $stat_texts[$sd_cm['label']] = '<<$npc_usedname[$sd_cm[''npcid'']]>> will be waiting for you near <<...
        // TODO-QSP: gs 'stat_display_compute', 'queue_msg', $sd_cm['label'], 'accent', 'status/date', 4
        if (((s as any).hour ?? 0) >= ((s as any).npc_meethour ?? 0)[((s as any).sd_cm ?? 0)?.['npcid']] - 2) {
          qspCall(s, 'stat_display_compute', 'queue_alert', '' + qspUntranslated(s, "npc_usedname[sd_cm['npcid']]>", { location: "stat_display_compute" }) + ' is expecting you soon.', 'accent');
        }
      } else {
        if (((s as any).hour ?? 0) === ((s as any).npc_meethour ?? 0)[((s as any).sd_cm ?? 0)?.['npcid']]) {
          // TODO-QSP: $stat_texts[$sd_cm['label']] = '<<$npc_usedname[$sd_cm[''npcid'']]>> is waiting for you by <<$func('...
          // TODO-QSP: gs 'stat_display_compute', 'queue_msg', $sd_cm['label'], 'v_neg', 'status/date', 4
          qspCall(s, 'stat_display_compute', 'queue_alert', '' + qspUntranslated(s, "npc_usedname[sd_cm['npcid']]>", { location: "stat_display_compute" }) + ' is waiting for you now.', 'v_neg');
        }
      }
    }
    ((s as any).sd_cm ?? {})['li'] = (((s as any).sd_cm ?? {})['li'] ?? 0) + (1);
    if (((s as any).sd_cm ?? 0)?.['li'] < ((s as any).sd_cm ?? 0)?.['lover_max']) {
      // TODO-QSP: jump 'sd_lover_loop'
    }
  }
  if (Object.keys((s as any).events_list ?? {}).length > 0) {
    if (((s as any).cal_upcoming_dirty ?? 0) === 1  ||  ((s as any).cal_day_cache_key ?? 0) !== ((s as any).daystart ?? 0)) {
      qspCall(s, 'calendar_query', 'get_upcoming', 10, ((s as any).daystart ?? 0), 0);
      ((s as any).cal_r ?? {})['ci'] = 0;
      // TODO-QSP: :cal_cache_copy
      if (((s as any).cal_r ?? 0)?.['ci'] < ((s as any).upcoming_count ?? 0)) {
        // TODO-QSP: $cal_upc_ids[cal_r['ci']]  = $upcoming_ids[cal_r['ci']]
        // TODO-QSP: cal_upc_days[cal_r['ci']]  = upcoming_days[cal_r['ci']]
        // TODO-QSP: cal_upc_ts[cal_r['ci']]    = upcoming_ts[cal_r['ci']]
        // TODO-QSP: gs 'calendar_events', 'get_event', $upcoming_ids[cal_r['ci']]
        // TODO-QSP: cal_upc_all_day[cal_r['ci']] = event_vars['all_day']
        ((s as any).cal_r ?? {})['ci'] = (((s as any).cal_r ?? {})['ci'] ?? 0) + (1);
        // TODO-QSP: jump 'cal_cache_copy'
      }
      (s as any).cal_upc_cache_cnt = ((s as any).upcoming_count ?? 0);
      (s as any).cal_day_cache_key = ((s as any).daystart ?? 0);
      (s as any).cal_upcoming_dirty = 0;
    }
    ((s as any).cal_r ?? {})['now_ts'] = ((s as any).hour ?? 0) * 4 + ((s as any).minut ?? 0) / 15;
    if (((s as any).stat_cfg ?? 0)?.['cal_count'] === 6) {
      ((s as any).cal_r ?? {})['max'] = ((s as any).cal_upc_cache_cnt ?? 0);
      ((s as any).cal_r ?? {})['today_only'] = 1;
    } else {
      ((s as any).cal_r ?? {})['max'] = ((s as any).stat_cfg ?? 0)?.['cal_count'];
      ((s as any).cal_r ?? {})['today_only'] = ((((s as any).stat_cfg ?? 0)?.['cal_today_only'] === 1) ? (0) : (1));
    }
    ((s as any).cal_r ?? {})['shown'] = 0;
    ((s as any).cal_r ?? {})['i'] = 0;
    // TODO-QSP: :cal_render_loop
    if (((s as any).cal_r ?? 0)?.['i'] < ((s as any).cal_upc_cache_cnt ?? 0)  &&  ((s as any).cal_r ?? 0)?.['shown'] < ((s as any).cal_r ?? 0)?.['max']) {
      if (((s as any).cal_r ?? 0)?.['today_only'] === 1  &&  ((s as any).cal_upc_days ?? 0)[((s as any).cal_r ?? 0)?.['i']] !== ((s as any).daystart ?? 0)) {
        ((s as any).cal_r ?? {})['i'] = (((s as any).cal_r ?? {})['i'] ?? 0) + (1);
        // TODO-QSP: jump 'cal_render_loop'
      }
      if (((s as any).cal_upc_days ?? 0)[((s as any).cal_r ?? 0)?.['i']] > ((s as any).daystart ?? 0) + 5) {
        ((s as any).cal_r ?? {})['i'] = (((s as any).cal_r ?? {})['i'] ?? 0) + (1);
        // TODO-QSP: jump 'cal_render_loop'
      }
      if (((s as any).stat_cfg ?? 0)?.['cal_show_all_day'] === 1  &&  ((s as any).cal_upc_all_day ?? 0)[((s as any).cal_r ?? 0)?.['i']] === 1) {
        ((s as any).cal_r ?? {})['i'] = (((s as any).cal_r ?? {})['i'] ?? 0) + (1);
        // TODO-QSP: jump 'cal_render_loop'
      }
      if (((s as any).cal_upc_days ?? 0)[((s as any).cal_r ?? 0)?.['i']] === ((s as any).daystart ?? 0)  &&  ((s as any).cal_upc_all_day ?? 0)[((s as any).cal_r ?? 0)?.['i']] === 0  &&  ((s as any).cal_upc_ts ?? 0)[((s as any).cal_r ?? 0)?.['i']] <= ((s as any).cal_r ?? 0)?.['now_ts']) {
        ((s as any).cal_r ?? {})['i'] = (((s as any).cal_r ?? {})['i'] ?? 0) + (1);
        // TODO-QSP: jump 'cal_render_loop'
      }
      // TODO-QSP: gs 'calendar_events', 'get_event', $cal_upc_ids[cal_r['i']]
      ((s as any).cal_r ?? {})['rgb'] = qspFunc(s, 'calendar_render', 'get_event_color', ((s as any).event_vars ?? 0)?.['color']);
      if (((s as any).cal_upc_days ?? 0)[((s as any).cal_r ?? 0)?.['i']] === ((s as any).daystart ?? 0)) {
        ((s as any).cal_r ?? {})['day_lbl'] = 'Today';
      } else {
        if (((s as any).cal_upc_days ?? 0)[((s as any).cal_r ?? 0)?.['i']] === ((s as any).daystart ?? 0) + 1) {
          ((s as any).cal_r ?? {})['day_lbl'] = 'Tomorrow';
        } else {
          ((s as any).cal_r ?? {})['day_lbl'] = qspUntranslated(s, "weekName[func('time', 'get_week_from_daystart', cal_upc_days[cal_r['i']])]", { location: "stat_display_compute" });
        }
      }
      if (((s as any).event_vars ?? 0)?.['all_day'] === 1) {
        ((s as any).cal_r ?? {})['time_lbl'] = '';
      } else {
        if (((s as any).event_vars ?? 0)?.['flex_type'] === 1) {
          ((s as any).cal_r ?? {})['time_lbl'] = qspFunc(s, 'time', 'get_time_string', ((s as any).event_vars ?? {})?.['window_start_ts'] / 4, (((s as any).event_vars ?? {})?.['window_start_ts'] % 4) * 15, 0) + '&ndash;' + qspFunc(s, 'time', 'get_time_string', ((s as any).event_vars ?? {})?.['window_end_ts'] / 4, (((s as any).event_vars ?? {})?.['window_end_ts'] % 4) * 15, 0);
        } else {
          ((s as any).cal_r ?? {})['time_lbl'] = qspFunc(s, 'time', 'get_time_string', ((s as any).cal_upc_ts ?? 0)[((s as any).cal_r ?? {})?.['i']] / 4, (((s as any).cal_upc_ts ?? 0)[((s as any).cal_r ?? {})?.['i']] % 4) * 15, 0);
        }
      }
      // TODO-QSP: $cal_upcoming_html += iif($cal_upcoming_html <> '', '<br>', '') + '<span style="color:rgb(<<$cal_r['...
      ((s as any).cal_r ?? {})['shown'] = (((s as any).cal_r ?? {})['shown'] ?? 0) + (1);
      ((s as any).cal_r ?? {})['i'] = (((s as any).cal_r ?? {})['i'] ?? 0) + (1);
      // TODO-QSP: jump 'cal_render_loop'
    }
  }
  if (((s as any).loc ?? 0) !== 'map') {
    // TODO-QSP: gs 'stat_display_compute', 'queue_msg', 'Map', '', 'map', 1, "gt 'map_view', '" + $loc + "'"
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCondString(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[2] ?? 0) === 0  &&  (!((s as any).locArgs?.[4] ?? 0))) {
    // TODO-QSP: exit
  }
  ((s as any).sd_cs ?? {})['out'] = '';
  if (((s as any).locArgs?.[2] ?? 0) === 1) {
    ((s as any).sd_cs ?? {})['dirt_pct'] = Math.min(Math.max(0, ((s as any).ARGS ?? 0)[1] / 24), 100);
    if (((s as any).sd_cs ?? 0)?.['dirt_pct'] <= 20) {
      ((s as any).sd_cs ?? {})['dirt_col'] = 'v_pos';
    } else {
      if (((s as any).sd_cs ?? 0)?.['dirt_pct'] <= 60) {
        ((s as any).sd_cs ?? {})['dirt_col'] = 'neutral';
      } else {
        ((s as any).sd_cs ?? {})['dirt_col'] = 'neg';
      }
    }
    ((s as any).sd_cs ?? {})['out'] = qspFunc(s, 'wrap', '$sd_cs[\'dirt_col\']', '[\' + $str(sd_cs[\'dirt_pct\']) + \'% dirt]');
  }
  if (((s as any).locArgs?.[4] ?? 0) === 1) {
    if (((s as any).sd_cs ?? 0)?.['out'] !== '') {
      ((s as any).sd_cs ?? {})['out'] = (((s as any).sd_cs ?? {})['out'] ?? 0) + (' ');
    }
    if (((s as any).locArgs?.[3] ?? 0) <= 5) {
      ((s as any).sd_cs ?? {})['wear_col'] = 'v_neg';
    } else {
      if (((s as any).locArgs?.[3] ?? 0) <= 15) {
        ((s as any).sd_cs ?? {})['wear_col'] = 'neg';
      } else {
        if (((s as any).locArgs?.[3] ?? 0) <= 25) {
          ((s as any).sd_cs ?? {})['wear_col'] = 'neutral';
        } else {
          ((s as any).sd_cs ?? {})['wear_col'] = 'v_pos';
        }
      }
    }
    ((s as any).sd_cs ?? {})['out'] = (((s as any).sd_cs ?? {})['out'] ?? 0) + (qspFunc(s, 'wrap', '$sd_cs[\'wear_col\']', '[wear \' + $str(ARGS[3]) + \']'));
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCondFace(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cumloc ?? 0)[11] > 0) {
  } else {
    if (((s as any).face_write ?? 0) > 0) {
    } else {
      if ((!((s as any).pcs_hairbsh ?? 0))) {
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCondSweat(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_sweat ?? 0) >= 40) {
  } else {
    if (((s as any).pcs_sweat ?? 0) >= 30) {
    } else {
      if (((s as any).pcs_sweat ?? 0) >= 20) {
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCondCoatTemp(s: GameState, scene: SceneBuilder): void {
  if (((s as any).coatworntype ?? 0) === 'none'  ||  ((s as any).coatworntype ?? 0) === '') {
    return;
  }
  ((s as any).sd_cs ?? {})['min_temp'] = ((((s as any).PCoatWarm ?? 0) === 3) ? ((-30)) : (((((s as any).PCoatWarm ?? 0) === 2) ? ((-20)) : ((-10)))));
  if (((s as any).temper ?? 0)[0] > 15) {
  } else {
    if (((s as any).temper ?? 0)[0] >= ((s as any).sd_cs ?? 0)?.['min_temp']) {
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCondHeelSkill(s: GameState, scene: SceneBuilder): void {
  if (((s as any).PShoSkill ?? 0) === 0  &&  ((s as any).PShoPain ?? 0)?.['mild'] === 0) {
    return;
  }
  if (((s as any).PShoPain ?? 0)?.['severe'] > 0  &&  ((s as any).pcs_heels ?? 0) < ((s as any).PShoPain ?? 0)?.['severe']) {
  } else {
    if (((s as any).PShoPain ?? 0)?.['medium'] > 0  &&  ((s as any).pcs_heels ?? 0) < ((s as any).PShoPain ?? 0)?.['medium']) {
    } else {
      if (((s as any).pcs_heels ?? 0) < ((s as any).PShoPain ?? 0)?.['mild']) {
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCondCloStyle(s: GameState, scene: SceneBuilder): void {
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    // TODO-QSP: exit
  }
  if (((s as any).PCloSwimwear ?? 0) === 1) {
    // TODO-QSP: $result += ', ' + $func('wrap', 'bimbo', '[Swimwear]')
  } else {
    if (((s as any).PCloStyle2 ?? 0) === 6) {
      // TODO-QSP: $result += ', ' + $func('wrap', 'bimbo', '[Gym]')
    } else {
      if (((s as any).PCloStyle2 ?? 0) === 5) {
        // TODO-QSP: $result += ', ' + $func('wrap', 'bimbo', '[Office]')
      } else {
        if (((s as any).PCloStyle2 ?? 0) === 4) {
          // TODO-QSP: $result += ', ' + $func('wrap', 'bimbo', '[School]')
        } else {
          if (((s as any).PCloStyle2 ?? 0) === 3) {
            // TODO-QSP: $result += ', ' + $func('wrap', 'bimbo', '[Stripper]')
          } else {
            if (((s as any).PCloStyle2 ?? 0) === 2) {
              // TODO-QSP: $result += ', ' + $func('wrap', 'bimbo', '[Server]')
            } else {
              if (((s as any).PCloStyle2 ?? 0) === 1) {
                // TODO-QSP: $result += ', ' + $func('wrap', 'bimbo', '[Maid]')
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).PCloStyle ?? 0) === 4) {
    // TODO-QSP: $result += ', ' + $func('wrap', 'bimbo', '[Prostitution]')
  }
  if (((s as any).PCloInhibit ?? 0) >= 40  ||  ((s as any).PCloThinness ?? 0) === 6) {
    // TODO-QSP: $result += ', ' + $func('wrap', 'bimbo', '[Exhibitionist]')
  }
  if (((s as any).PCloBimbo ?? 0) === 1  &&  ((s as any).cheatVars ?? 0)?.['bimbo'] === 0) {
    // TODO-QSP: $result += ', ' + $func('wrap', 'bimbo', '[Bimbo]')
  }
  if (((s as any).PCloGoth ?? 0) === 1) {
    // TODO-QSP: $result += ', ' + $func('wrap', 'goth', '[Goth]')
  }
  if (((s as any).PCloPunk ?? 0) === 1) {
    // TODO-QSP: $result += ', ' + $func('wrap', 'punk', '[Punk]')
  }
  if (((s as any).result ?? 0) !== '') {
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterComputeImages(s: GameState, scene: SceneBuilder): void {
  ((s as any).sd_img ?? {})['count'] = 0;
  ((s as any).sd_ci ?? {})['max'] = 0;
  ((s as any).sd_ci ?? {})['i'] = 0;
  // TODO-QSP: :sd_compute_images_loop
  ((s as any).sd_ci ?? {})['key'] = qspUntranslated(s, "image_order[sd_ci['i']]", { location: "stat_display_compute" });
  if (((s as any).stat_hide ?? 0)[((s as any).sd_ci ?? 0)?.['key']] === 1) {
    // TODO-QSP: jump 'sd_compute_images_next'
  }
  if (((s as any).sd_ci ?? 0)?.['key'] === 'face') {
    ((s as any).sd_img ?? {})['url_face'] = qspFunc(s, '$face_image', '');
    if (((s as any).face_style ?? 0)?.['type'] !== 2) {
      ((s as any).sd_img ?? {})['label_face'] = 'Face';
    } else {
      // TODO-QSP: $sd_mu_lbl[0] = 'Smeared makeup'
      // TODO-QSP: $sd_mu_lbl[1] = 'No makeup'
      // TODO-QSP: $sd_mu_lbl[2] = 'Light makeup'
      // TODO-QSP: $sd_mu_lbl[3] = 'Vibrant makeup'
      // TODO-QSP: $sd_mu_lbl[4] = 'Heavy makeup'
      // TODO-QSP: $sd_mu_lbl[5] = 'Pro makeup'
      // TODO-QSP: $sd_mu_lbl[6] = 'Bimbo makeup'
      // TODO-QSP: $sd_mu_lbl[7] = 'Goth makeup'
      ((s as any).sd_img ?? {})['label_face'] = ((((s as any).pcs_makeup ?? 0) >= 1  &&  ((s as any).pcs_makeup ?? 0) <= 7) ? (((s as any).sd_mu_lbl ?? 0)?.[String((s as any).pcs_makeup ?? 0)]) : (((((s as any).pcs_makeup ?? 0) <= 0) ? ('Smeared makeup') : ('Face'))));
    }
    ((s as any).sd_img ?? {})['short_face'] = ((s as any).sd_img ?? 0)?.['label_face'];
    ((s as any).sd_img ?? {})['cond_face'] = qspFunc(s, 'stat_display_compute', 'cond_face');
  } else {
    if (((s as any).sd_ci ?? 0)?.['key'] === 'body') {
      ((s as any).sd_img ?? {})['url_body'] = qspFunc(s, '$body_image', 'body');
      ((s as any).sd_img ?? {})['label_body'] = 'Body';
      ((s as any).sd_img ?? {})['short_body'] = 'Body';
      ((s as any).sd_img ?? {})['cond_body'] = qspFunc(s, 'stat_display_compute', 'cond_sweat');
      if ((((s as any).cumloc ?? 0)[6] + ((s as any).cumloc ?? 0)[7] + ((s as any).cumloc ?? 0)[13] + ((s as any).cumloc ?? 0)[16]) > 0) {
        ((s as any).sd_ci ?? {})['cum_line'] = qspFunc(s, 'wrap', 'v_neg', '[cum on body]');
        ((s as any).sd_img ?? {})['cond_body'] = ((((s as any).sd_img ?? 0)?.['cond_body'] !== '') ? (((s as any).sd_img ?? {})?.['cond_body'] + ' ') : (''));
      }
    } else {
      if (((s as any).sd_ci ?? 0)?.['key'] === 'coat') {
        if (((s as any).coatworntype ?? 0) === 'none'  ||  ((s as any).coatworntype ?? 0) === '') {
          // TODO-QSP: jump 'sd_compute_images_next'
        }
        ((s as any).sd_img ?? {})['url_coat'] = qspFunc(s, '$body_image', 'coat');
        ((s as any).sd_img ?? {})['label_coat'] = 'Coat';
        ((s as any).sd_img ?? {})['short_coat'] = qspFunc(s, '$item_description', 'coat', ((s as any).coatworntype ?? 0), ((s as any).coatwornnumber ?? 0));
        ((s as any).sd_img ?? {})['cond_coat'] = qspFunc(s, 'stat_display_compute', 'cond_coat_temp');
      } else {
        if (((s as any).sd_ci ?? 0)?.['key'] === 'clothes') {
          ((s as any).sd_img ?? {})['url_clothes'] = qspFunc(s, '$body_image', 'clothes');
          if (((s as any).clothingworntype ?? 0) === 'nude') {
            ((s as any).sd_img ?? {})['label_clothes'] = ((((s as any).towel ?? 0) === 1) ? ('Towel') : (((((s as any).robe ?? 0) === 1) ? ('Robe') : ('Naked'))));
            ((s as any).sd_img ?? {})['short_clothes'] = ((s as any).sd_img ?? 0)?.['label_clothes'];
          } else {
            ((s as any).sd_img ?? {})['label_clothes'] = 'Clothes';
            ((s as any).sd_img ?? {})['short_clothes'] = qspFunc(s, '$short_description', '$clothingworntype', ((s as any).clothingwornnumber ?? 0));
            ((s as any).sd_img ?? {})['cond_clothes'] = 0;
            ((s as any).sd_ci ?? {})['style_line'] = qspFunc(s, 'stat_display_compute', 'cond_clo_style');
            if (((s as any).sd_ci ?? 0)?.['style_line'] !== '') {
              ((s as any).sd_img ?? {})['cond_clothes'] = ((((s as any).sd_img ?? 0)?.['cond_clothes'] !== '') ? (((s as any).sd_img ?? {})?.['cond_clothes'] + ' ') : (''));
            }
          }
        } else {
          if (((s as any).sd_ci ?? 0)?.['key'] === 'bra') {
            ((s as any).sd_img ?? {})['url_bra'] = qspFunc(s, '$body_image', 'bra');
            if (((s as any).braworntype ?? 0) === 'none'  ||  ((s as any).braworntype ?? 0) === '') {
              ((s as any).sd_img ?? {})['label_bra'] = 'Breasts';
              ((s as any).sd_img ?? {})['short_bra'] = 'Breasts';
            } else {
              ((s as any).sd_img ?? {})['label_bra'] = 'Bra';
              ((s as any).sd_img ?? {})['short_bra'] = qspFunc(s, '$item_description', 'bra', ((s as any).braworntype ?? 0), ((s as any).brawornnumber ?? 0));
              ((s as any).sd_img ?? {})['cond_bra'] = qspFunc(s, 'stat_display_compute', 'cond_string', ((s as any).PBraDirt ?? 0), 1, 0, 0);
            }
          } else {
            if (((s as any).sd_ci ?? 0)?.['key'] === 'panties') {
              ((s as any).sd_img ?? {})['url_panties'] = qspFunc(s, '$body_image', 'panties');
              if (((s as any).pantyworntype ?? 0) === 'none'  ||  ((s as any).pantyworntype ?? 0) === '') {
                ((s as any).sd_img ?? {})['label_panties'] = 'Pussy';
                ((s as any).sd_img ?? {})['short_panties'] = 'Pussy';
              } else {
                ((s as any).sd_img ?? {})['label_panties'] = 'Panties';
                ((s as any).sd_img ?? {})['short_panties'] = qspFunc(s, '$item_description', 'panty', ((s as any).pantyworntype ?? 0), ((s as any).pantywornnumber ?? 0));
                ((s as any).sd_img ?? {})['cond_panties'] = qspFunc(s, 'stat_display_compute', 'cond_string', ((s as any).PPanDirt ?? 0), 1, 0, 0);
              }
            } else {
              if (((s as any).sd_ci ?? 0)?.['key'] === 'shoes') {
                ((s as any).sd_img ?? {})['url_shoes'] = qspFunc(s, '$body_image', 'shoes');
                if (((s as any).shoeworntype ?? 0) === 'none'  ||  ((s as any).shoeworntype ?? 0) === '') {
                  ((s as any).sd_img ?? {})['label_shoes'] = 'Feet';
                  ((s as any).sd_img ?? {})['short_shoes'] = 'Feet';
                } else {
                  ((s as any).sd_img ?? {})['label_shoes'] = 'Shoes';
                  ((s as any).sd_img ?? {})['short_shoes'] = qspFunc(s, '$shoe_description', '$shoeworntype', ((s as any).shoewornnumber ?? 0));
                }
                ((s as any).sd_img ?? {})['cond_shoes'] = qspFunc(s, 'stat_display_compute', 'cond_heel_skill');
              } else {
                if (((s as any).sd_ci ?? 0)?.['key'] === 'bodysuit') {
                  if (((s as any).bodysuitwornnumber ?? 0) === 0  ||  ((s as any).bodysuitworntype ?? 0) === 'none'  ||  ((s as any).bodysuitworntype ?? 0) === '') {
                    // TODO-QSP: jump 'sd_compute_images_next'
                  }
                  if (((s as any).stat_hide ?? 0)?.['bra'] === 1  &&  ((s as any).stat_hide ?? 0)?.['panties'] === 1) {
                    // TODO-QSP: jump 'sd_compute_images_next'
                  }
                  ((s as any).sd_img ?? {})['url_bodysuit'] = qspFunc(s, '$body_image', 'bodysuit');
                  ((s as any).sd_img ?? {})['label_bodysuit'] = 'Bodysuit';
                  ((s as any).sd_img ?? {})['short_bodysuit'] = qspFunc(s, '$item_description', 'bodysuit', ((s as any).bodysuitworntype ?? 0), ((s as any).bodysuitwornnumber ?? 0));
                  ((s as any).sd_img ?? {})['cond_bodysuit'] = qspFunc(s, 'stat_display_compute', 'cond_string', ((s as any).PPanDirt ?? 0), 1, 0, 0);
                }
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).sd_img ?? 0)['url_' + ((s as any).sd_ci ?? 0)?.['key']] === '') {
    // TODO-QSP: jump 'sd_compute_images_next'
  }
  // TODO-QSP: $sd_img['order_' + $str(sd_img['count'])] = $sd_ci['key']
  ((s as any).sd_img ?? {})['count'] = (((s as any).sd_img ?? {})['count'] ?? 0) + (1);
  // TODO-QSP: :sd_compute_images_next
  ((s as any).sd_ci ?? {})['i'] = (((s as any).sd_ci ?? {})['i'] ?? 0) + (1);
  if (((s as any).sd_ci ?? 0)?.['i'] < ((s as any).sd_ci ?? 0)?.['max']) {
    // TODO-QSP: jump 'sd_compute_images_loop'
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'queue_alert':
      enterQueueAlert(s, scene);
      break;
    case 'queue_msg':
      enterQueueMsg(s, scene);
      break;
    case 'compute_data':
      enterComputeData(s, scene);
      break;
    case 'compute_attributes_prose':
      enterComputeAttributesProse(s, scene);
      break;
    case 'compute_stats':
      enterComputeStats(s, scene);
      break;
    case 'compute_body':
      enterComputeBody(s, scene);
      break;
    case 'compute_appearance':
      enterComputeAppearance(s, scene);
      break;
    case 'compute_misc':
      enterComputeMisc(s, scene);
      break;
    case 'cond_string':
      enterCondString(s, scene);
      break;
    case 'cond_face':
      enterCondFace(s, scene);
      break;
    case 'cond_sweat':
      enterCondSweat(s, scene);
      break;
    case 'cond_coat_temp':
      enterCondCoatTemp(s, scene);
      break;
    case 'cond_heel_skill':
      enterCondHeelSkill(s, scene);
      break;
    case 'cond_clo_style':
      enterCondCloStyle(s, scene);
      break;
    case 'compute_images':
      enterComputeImages(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const stat_display_compute: LocationDef = {
  name: 'stat_display_compute',
  title: 'bimbo',
  region: 'other',
  enter: enter,
};
