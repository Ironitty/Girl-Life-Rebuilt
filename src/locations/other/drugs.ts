import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterCikl(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'drugs', 'cocaine_cikl');
  qspCall(s, 'drugs', 'mentats_cikl');
  qspCall(s, 'drugs', 'steroids_cikl');
  qspCall(s, 'drugs', 'aphrodisiac_cikl');
  qspCall(s, 'drugs', 'hair_extensioncream_cikl');
  qspCall(s, 'drugs', 'butt_injection_cikl');
  qspCall(s, 'drugs', 'breastcream_cikl');
  qspCall(s, 'drugs', 'caffeine_cikl');
  qspCall(s, 'drugs', 'painkiller_cikl');
  return;
  scene.build();
}

function enterHourlyEvents(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'drugs', 'cigarette_hourly_events');
  qspCall(s, 'drugs', 'weed_hourly_events');
  qspCall(s, 'drugs', 'heroin_hourly_events');
  qspCall(s, 'drugs', 'cocaine_hourly_events');
  qspCall(s, 'drugs', 'amphetamine_hourly_events');
  qspCall(s, 'drugs', 'steroids_hourly_events');
  qspCall(s, 'drugs', 'aphrodisiac_hourly_events');
  qspCall(s, 'drugs', 'caffeine_hourly_events');
  qspCall(s, 'drugs', 'painkiller_hourly_events');
  return;
  scene.build();
}

function enterStat(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'drugs', 'heroin_stat');
  qspCall(s, 'drugs', 'cocaine_stat');
  qspCall(s, 'drugs', 'amphetamine_stat');
  qspCall(s, 'drugs', 'caffeine_stat');
  qspCall(s, 'drugs', 'painkiller_stat');
  return;
  scene.build();
}

function enterComputeStatDisplay(s: GameState, scene: SceneBuilder): void {
  if (((s as any).alko ?? 0) >= 12) {
    (s as any).stat_texts['alcohol'] = 'You\'re wasted.';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'alcohol', 'v_neg', 'drugs/alcohol_5', 2);
    qspCall(s, 'stat_display_compute', 'queue_alert', 'You are wasted.', 'v_neg');
  } else {
    (s as any).stat_texts['alcohol'] = 'You\'re very drunk.';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'alcohol', 'neg', 'drugs/alcohol_4', 2);
    qspCall(s, 'stat_display_compute', 'queue_alert', 'You are very drunk.', 'neg');
    if (((s as any).alko ?? 0) >= 4) {
      (s as any).stat_texts['alcohol'] = 'You\'re drunk.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'alcohol', 'neutral', 'drugs/alcohol_3', 2);
    } else {
      (s as any).stat_texts['alcohol'] = 'You\'re feeling a little tipsy.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'alcohol', 'neutral', 'drugs/alcohol_2', 2);
      if (((s as any).alko ?? 0) === 1) {
        (s as any).stat_texts['alcohol'] = 'You feel a little buzz from drinking.';
        qspCall(s, 'stat_display_compute', 'queue_msg', 'alcohol', 'neutral', 'drugs/alcohol_1', 2);
      }
      if (((s as any).totminut ?? 0) <= ((s as any).drugVars ?? 0)?.['cigarettes_minute']) {
        (s as any).stat_texts['drug_cig_partake'] = 'You are smoking a cigarette.';
        if (((s as any).mc_inventory ?? 0)?.['cigarettes'] > 0) {
          qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_cig_partake', 'v_pos', 'drugs/cig_use', 2, 'gs \'drugs\', \'smoke\'');
        } else {
          qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_cig_partake', 'v_pos', 'drugs/cig_use', 2);
        }
      } else {
        if (((s as any).mc_inventory ?? 0)?.['cigarettes'] > 0) {
          (s as any).stat_texts['drug_cig_inv_tooltip'] = 'You have <<mc_inventory[\'cigarettes\']>> cigarettes. Click to smoke.';
          qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_cig_inv', '', 'drugs/cig_have', 2, 'gs \'drugs\', \'smoke\'');
        }
      }
      if (((s as any).drugVars ?? 0)?.['cigarettes_need'] > 0  &&  ((s as any).cheatVars ?? 0)?.['drugs_immune'] === 0) {
        if (((s as any).drugVars ?? 0)?.['cigarettes_need'] > 50) {
          (s as any).stat_texts['drug_cig_withdraw'] = 'You are desperate for a smoke. Your hands are shaking and you can\'t focus on anything.';
          qspCall(s, 'stat_display_compute', 'queue_alert', 'You are desperate for a smoke.', 'v_neg');
        } else {
          (s as any).stat_texts['drug_cig_withdraw'] = 'You really need a cigarette. Your nerves are on edge and everything irritates you.';
          if (((s as any).drugVars ?? 0)?.['cigarettes_need'] > 10) {
            (s as any).stat_texts['drug_cig_withdraw'] = 'You want to smoke. The craving is gnawing at you.';
          } else {
            (s as any).stat_texts['drug_cig_withdraw'] = 'You could use a smoke right about now.';
          }
          if (((s as any).mc_inventory ?? 0)?.['cigarettes'] > 0) {
            (s as any).stat_texts['drug_cig_withdraw'] = ((s as any).stat_texts['drug_cig_withdraw'] ?? 0) + (' You have <<mc_inventory[\'cigarettes\']>> cigarettes.');
            (s as any).stat_texts['drug_cig_withdraw_tooltip'] = ((s as any).stat_texts ?? 0)?.['drug_cig_withdraw'] + ' ((s as any).Click ?? 0) ((s as any).to ?? 0) ((s as any).smoke ?? 0).';
            qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_cig_withdraw', 'v_neg', 'drugs/cig_crave', 2, 'gs \'drugs\', \'smoke\'');
          } else {
            (s as any).stat_texts['drug_cig_withdraw'] = ((s as any).stat_texts['drug_cig_withdraw'] ?? 0) + (' You have no cigarettes left.');
            (s as any).stat_texts['drug_cig_withdraw_tooltip'] = ((s as any).stat_texts ?? 0)?.['drug_cig_withdraw'];
            qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_cig_withdraw', 'v_neg', 'drugs/cig_crave', 2);
          }
        }
        if (((s as any).drugVars ?? 0)?.['cigarettes_used'] >= 20  &&  ((s as any).cheatVars ?? 0)?.['drugs_immune'] === 0  &&  ((s as any).drugVars ?? 0)?.['cigarettes_need'] === 0) {
          (s as any).stat_texts['drug_cig_addict_tooltip'] = 'You are addicted to nicotine. If you stop smoking, cravings will start within hours.';
          qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_cig_addict', 'neg', 'drugs/cig_addict', 2);
        }
        if (((s as any).totminut ?? 0) <= ((s as any).drugVars ?? 0)?.['weed_minute']) {
          (s as any).stat_texts['drug_weed_partake'] = 'You are smoking a joint.';
          qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_weed_partake', 'v_pos', 'drugs/weed_use', 2);
        }
        if (((s as any).drugVars ?? 0)?.['weed_high'] > 0) {
          if (((s as any).drugVars ?? 0)?.['weed_high'] >= 2) {
            (s as any).stat_texts['drug_weed_high'] = 'You are very stoned. Everything seems hilarious and far away. You\'ve got the munchies bad.';
            qspCall(s, 'stat_display_compute', 'queue_alert', 'You\'re completely stoned.', 'accent');
          } else {
            (s as any).stat_texts['drug_weed_high'] = 'You are stoned. The world feels soft and mellow. You\'re feeling a little peckish.';
          }
          qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_weed_high', 'accent', 'drugs/weed_high', 2);
        }
        if (((s as any).drugVars ?? 0)?.['heroin_high'] > 0) {
          if (((s as any).drugVars ?? 0)?.['heroin_high'] >= 20) {
            (s as any).stat_texts['drug_heroin_high'] = 'You are riding an intense heroin high. Nothing else matters.';
            qspCall(s, 'stat_display_compute', 'queue_alert', 'You are on an intense heroin high.', 'accent');
          } else {
            (s as any).stat_texts['drug_heroin_high'] = 'You feel warm and numb. The heroin is still coursing through you.';
            (s as any).stat_texts['drug_heroin_high'] = 'The heroin high is fading. The world is slowly creeping back in.';
          }
          qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_heroin_high', 'accent', 'drugs/heroin_high', 2);
        }
        if (((s as any).drugVars ?? 0)?.['heroin_need'] > 0  &&  ((s as any).drugVars ?? 0)?.['heroin_high'] === 0) {
          if (((s as any).drugVars ?? 0)?.['heroin_taper'] > 0) {
            (s as any).stat_texts['drug_heroin_withdraw'] = 'The physical agony has faded, but the craving for heroin still gnaws at you. It will take time to fully let go.';
          } else {
            (s as any).stat_texts['drug_heroin_withdraw'] = 'You are in agony. Every bone in your body aches. You desperately need heroin. Your mood and disposition are suffering severely.';
            qspCall(s, 'stat_display_compute', 'queue_alert', 'Your craving for heroin is overwhelming.', 'v_neg');
            if (((s as any).drugVars ?? 0)?.['heroin_need'] > 24) {
              (s as any).stat_texts['drug_heroin_withdraw'] = 'You are very weak and hurt to the bone. The withdrawal is making you miserable.';
              qspCall(s, 'stat_display_compute', 'queue_alert', 'Heroin withdrawal is hitting hard.', 'v_neg');
            } else {
              (s as any).stat_texts['drug_heroin_withdraw'] = 'Your body is aching and you feel awful. You need a fix.';
              qspCall(s, 'stat_display_compute', 'queue_alert', 'You need a heroin fix.', 'neg');
              (s as any).stat_texts['drug_heroin_withdraw'] = 'You are starting to feel sick. Your body wants more heroin.';
            }
            (s as any).stat_texts['drug_heroin_withdraw_tooltip'] = ((s as any).stat_texts ?? 0)?.['drug_heroin_withdraw'];
            qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_heroin_withdraw', ((((s as any).drugVars ?? 0)?.['heroin_taper'] > 0) ? ('neg') : ('v_neg')), 'drugs/heroin_crave', 2);
            if (((s as any).drugVars ?? 0)?.['heroin_used'] >= 3  &&  ((s as any).drugVars ?? 0)?.['heroin_high'] > 0) {
              if (((s as any).drugVars ?? 0)?.['heroin_high'] === 1) {
                (s as any).stat_texts['drug_heroin_addict_tooltip'] = 'You are addicted to heroin. The high is almost gone — withdrawal will begin within the hour.';
              } else {
                (s as any).stat_texts['drug_heroin_addict_tooltip'] = 'You are addicted to heroin. Withdrawal will begin in <<drugVars[\'heroin_high\']>> hours when the high wears off.';
              }
              qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_heroin_addict', 'neg', 'drugs/heroin_addict', 2);
            }
            if (((s as any).drugVars ?? 0)?.['cocaine_high'] > 0) {
              if (((s as any).drugVars ?? 0)?.['cocaine_high'] >= 100) {
                (s as any).stat_texts['drug_cocaine_high'] = 'You feel invincible. Cocaine is surging through your veins.';
                qspCall(s, 'stat_display_compute', 'queue_alert', 'You are high on cocaine.', 'accent');
              } else {
                (s as any).stat_texts['drug_cocaine_high'] = 'You feel powerful and alert. Your heart is racing from the cocaine.';
                (s as any).stat_texts['drug_cocaine_high'] = 'The cocaine buzz is fading but you still feel a residual edge.';
              }
              qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_cocaine_high', 'accent', 'drugs/cocaine_high', 2);
            }
            if (((s as any).drugVars ?? 0)?.['cocaine_crash'] > 0  &&  ((s as any).drugVars ?? 0)?.['cocaine_high'] === 0) {
              if (((s as any).drugVars ?? 0)?.['cocaine_crash'] > 30) {
                (s as any).stat_texts['drug_cocaine_crash'] = 'You are crashing hard. You\'re exhausted, irritable, and craving more cocaine.';
              } else {
                (s as any).stat_texts['drug_cocaine_crash'] = 'You\'re coming down from cocaine. You feel flat and tired.';
              }
              qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_cocaine_crash', 'neg', 'drugs/cocaine_crave', 2);
            }
            if (((s as any).drugVars ?? 0)?.['cocaine_addict'] === 1  &&  ((s as any).drugVars ?? 0)?.['cocaine_day'] !== ((s as any).daystart ?? 0)) {
              if (((s as any).drugVars ?? 0)?.['cocaine_need'] > 144) {
                (s as any).stat_texts['drug_cocaine_withdraw'] = 'You are destroying yourself. Every hour without cocaine costs you health and sanity. Your mood and disposition are tanking.';
                qspCall(s, 'stat_display_compute', 'queue_alert', 'You <i>need</i> cocaine.', 'v_neg');
              } else {
                (s as any).stat_texts['drug_cocaine_withdraw'] = 'You urgently need cocaine. You feel very weak and your health is deteriorating fast.';
                qspCall(s, 'stat_display_compute', 'queue_alert', 'Cocaine withdrawal is hitting hard.', 'v_neg');
                if (((s as any).drugVars ?? 0)?.['cocaine_need'] > 24) {
                  (s as any).stat_texts['drug_cocaine_withdraw'] = 'You need cocaine. The craving is intense and your body is weakening.';
                  qspCall(s, 'stat_display_compute', 'queue_alert', 'You need cocaine.', 'neg');
                } else {
                  (s as any).stat_texts['drug_cocaine_withdraw'] = 'You haven\'t had cocaine today. The craving is building.';
                }
                if (((s as any).mc_inventory ?? 0)?.['cocaine'] > 0) {
                  (s as any).stat_texts['drug_cocaine_withdraw'] = ((s as any).stat_texts['drug_cocaine_withdraw'] ?? 0) + (' You have <<mc_inventory[\'cocaine\']>> doses.');
                  (s as any).stat_texts['drug_cocaine_withdraw_tooltip'] = ((s as any).stat_texts ?? 0)?.['drug_cocaine_withdraw'] + ' ((s as any).Click ?? 0) ((s as any).to ?? 0) ((s as any).use ?? 0).';
                  qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_cocaine_withdraw', 'v_neg', 'drugs/cocaine_crave', 2, 'gs \'drugs\', \'cocaine\'');
                } else {
                  (s as any).stat_texts['drug_cocaine_withdraw_tooltip'] = ((s as any).stat_texts ?? 0)?.['drug_cocaine_withdraw'];
                  qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_cocaine_withdraw', 'v_neg', 'drugs/cocaine_crave', 2);
                }
                if (((s as any).drugVars ?? 0)?.['cocaine_addict'] === 1  &&  ((s as any).drugVars ?? 0)?.['cocaine_day'] === ((s as any).daystart ?? 0)) {
                  (s as any).stat_texts['drug_cocaine_addict_tooltip'] = 'You are addicted to cocaine. If you don\'t use again tomorrow, withdrawal will begin.';
                  qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_cocaine_addict', 'neg', 'drugs/cocaine_addict', 2);
                }
                if (((s as any).drugVars ?? 0)?.['amphetamine_high'] > 0) {
                  if (((s as any).drugVars ?? 0)?.['amphetamine_high'] >= 8) {
                    (s as any).stat_texts['drug_amphet_high'] = 'You are wired! Your heart is pounding and you feel unstoppable.';
                    qspCall(s, 'stat_display_compute', 'queue_alert', 'You are wired on amphetamines.', 'accent');
                  } else {
                    (s as any).stat_texts['drug_amphet_high'] = 'You feel wired and jittery. The amphetamine rush is going strong.';
                    (s as any).stat_texts['drug_amphet_high'] = 'The amphetamine buzz is wearing off. You feel edgy.';
                  }
                  qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_amphet_high', 'accent', 'drugs/amphet_high', 2);
                }
                if (((s as any).drugVars ?? 0)?.['amphetamine_withdrawl'] >= 5  &&  ((s as any).drugVars ?? 0)?.['amphetamine_high'] <= 0) {
                  if (((s as any).drugVars ?? 0)?.['amphetamine_withdrawl'] > 100) {
                    (s as any).stat_texts['drug_amphet_withdraw'] = 'The amphetamine crash is unbearable. You can barely function. Your mood is plummeting.';
                    qspCall(s, 'stat_display_compute', 'queue_alert', 'The amphetamine crash is unbearable.', 'v_neg');
                  } else {
                    (s as any).stat_texts['drug_amphet_withdraw'] = 'Amphetamine withdrawal is hitting hard. You feel exhausted and deeply depressed.';
                    qspCall(s, 'stat_display_compute', 'queue_alert', 'Amphetamine withdrawal is hitting hard.', 'v_neg');
                    (s as any).stat_texts['drug_amphet_withdraw'] = 'You are coming down from amphetamines. You feel tired, irritable, and drained.';
                    qspCall(s, 'stat_display_compute', 'queue_alert', 'You are coming down from amphetamines.', 'neg');
                  }
                  if (((s as any).mc_inventory ?? 0)?.['amphetamine'] > 0) {
                    (s as any).stat_texts['drug_amphet_withdraw'] = ((s as any).stat_texts['drug_amphet_withdraw'] ?? 0) + (' You have <<mc_inventory[\'amphetamine\']>> pills.');
                    (s as any).stat_texts['drug_amphet_withdraw_tooltip'] = ((s as any).stat_texts ?? 0)?.['drug_amphet_withdraw'] + ' ((s as any).Click ?? 0) ((s as any).to ?? 0) ((s as any).take ?? 0) ((s as any).one ?? 0).';
                    qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_amphet_withdraw', 'v_neg', 'drugs/amphet_crave', 2, 'gs \'drugs\', \'amphetamine\'');
                  } else {
                    (s as any).stat_texts['drug_amphet_withdraw_tooltip'] = ((s as any).stat_texts ?? 0)?.['drug_amphet_withdraw'];
                    qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_amphet_withdraw', 'v_neg', 'drugs/amphet_crave', 2);
                  }
                } else {
                  (s as any).stat_texts['drug_amphet_comedown'] = 'The amphetamine high has worn off. You feel drained and sluggish.';
                  qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_amphet_comedown', 'neg', 'drugs/amphet_crave', 2);
                }
                if (((s as any).drugVars ?? 0)?.['amphetamine_used'] >= 10  &&  ((s as any).drugVars ?? 0)?.['amphetamine_high'] <= 0  &&  ((s as any).drugVars ?? 0)?.['amphetamine_withdrawl'] === 0) {
                  (s as any).stat_texts['drug_amphet_addict'] = 'You are dependent on amphetamines.';
                  qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_amphet_addict', 'neg', 'drugs/amphet_addict', 2);
                }
                if (((s as any).drugVars ?? 0)?.['caffeine_dose'] > 0) {
                  (s as any).stat_texts['drug_caffeine_high'] = 'You are buzzing from caffeine.';
                  qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_caffeine_high', 'pos', 'drugs/caffeine_high', 2);
                }
                if (((s as any).drugVars ?? 0)?.['caffeine_need'] > 0) {
                  (s as any).stat_texts['drug_caffeine_withdraw'] = 'You are craving caffeine. You feel sluggish and irritable.';
                  (s as any).stat_texts['drug_caffeine_withdraw_tooltip'] = 'You are craving caffeine. Your mood suffers each hour without it.';
                  qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_caffeine_withdraw', 'v_neg', 'drugs/caffeine_crave', 2);
                  qspCall(s, 'stat_display_compute', 'queue_alert', 'You are craving caffeine.', 'neg');
                }
                if (((s as any).drugVars ?? 0)?.['caffeine_addict'] === 1  &&  ((s as any).drugVars ?? 0)?.['caffeine_need'] === 0  &&  ((s as any).drugVars ?? 0)?.['caffeine_dose'] === 0) {
                  (s as any).stat_texts['drug_caffeine_addict_tooltip'] = 'You are addicted to caffeine. Cravings will start if you go without it.';
                  qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_caffeine_addict', 'neg', 'drugs/caffeine_addict', 2);
                }
                if (((s as any).drugVars ?? 0)?.['painkiller_points'] >= 10) {
                  (s as any).stat_texts['drug_pk_high'] = 'Painkillers are dulling your pain.';
                  qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_pk_high', 'pos', 'drugs/painkiller_high', 2);
                }
                if (((s as any).drugVars ?? 0)?.['painkiller_weak'] === 1) {
                  if (((s as any).drugVars ?? 0)?.['painkiller_need'] > 12) {
                    (s as any).stat_texts['drug_pk_withdraw'] = 'Your body is wracked with pain. Your head pounds and your stomach cramps violently. You desperately need painkillers.';
                    qspCall(s, 'stat_display_compute', 'queue_alert', 'You suffer from severe painkiller withdrawal.', 'v_neg');
                  } else {
                    (s as any).stat_texts['drug_pk_withdraw'] = 'Your body is aching with withdrawal. You need painkillers.';
                    qspCall(s, 'stat_display_compute', 'queue_alert', 'You need painkillers.', 'neg');
                  }
                  if (((s as any).mc_inventory ?? 0)?.['painkillers'] > 0) {
                    (s as any).stat_texts['drug_pk_withdraw'] = ((s as any).stat_texts['drug_pk_withdraw'] ?? 0) + (' You have <<mc_inventory[\'painkillers\']>>.');
                    (s as any).stat_texts['drug_pk_withdraw_tooltip'] = ((s as any).stat_texts ?? 0)?.['drug_pk_withdraw'] + ' ((s as any).Click ?? 0) ((s as any).to ?? 0) ((s as any).take ?? 0) ((s as any).one ?? 0).';
                    qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_pk_withdraw', 'v_neg', 'drugs/painkiller_crave', 2, 'gs \'drugs\', \'painkiller\'');
                  } else {
                    (s as any).stat_texts['drug_pk_withdraw_tooltip'] = ((s as any).stat_texts ?? 0)?.['drug_pk_withdraw'];
                    qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_pk_withdraw', 'v_neg', 'drugs/painkiller_crave', 2);
                  }
                } else {
                  (s as any).sd_tmp_pk_hrs = (((s as any).drugVars ?? 0)?.['painkiller_points'] - 10) / 20;
                  if (((s as any).sd_tmp_pk_hrs ?? 0) < 1) {
                    (s as any).stat_texts['drug_pk_addict_tooltip'] = 'You are addicted to painkillers. Withdrawal will set in within the hour.';
                  } else {
                    (s as any).stat_texts['drug_pk_addict_tooltip'] = 'You are addicted to painkillers. Withdrawal will set in within <<sd_tmp_pk_hrs>> hours.';
                  }
                  qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_pk_addict', 'neg', 'drugs/painkiller_addict', 2);
                }
                if (((s as any).drugVars ?? 0)?.['aphrodisiac_timer'] > 0) {
                  (s as any).stat_texts['drug_aphro_high'] = 'You are feeling hot, and every move causes your groin to tingle.';
                  qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_aphro_high', 'bimbo', 'drugs/aphro_high', 2);
                  qspCall(s, 'stat_display_compute', 'queue_alert', 'An aphrodisiac is making you hot and distracted.', 'bimbo');
                }
                if (((s as any).drugVars ?? 0)?.['mentats_dose'] > 0) {
                  if (((s as any).drugVars ?? 0)?.['mentats_dose'] > 1) {
                    (s as any).stat_texts['drug_mentats_high'] = 'Your brain feels overcharged. Taking more than one neurobooster is going to hurt.';
                  } else {
                    (s as any).stat_texts['drug_mentats_high'] = 'You feel sharp and focused.';
                  }
                  qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_mentats_high', 'accent', 'drugs/mentats_high', 2);
                }
                if (((s as any).drugVars ?? 0)?.['steroids_dose'] > 0) {
                  if (((s as any).drugVars ?? 0)?.['steroids_dose'] >= 3) {
                    (s as any).stat_texts['drug_steroids_high'] = 'You are pumped full of steroids. You really shouldn\'t take any more today.';
                    qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_steroids_high', 'neg', 'drugs/steroids_high', 2);
                    qspCall(s, 'stat_display_compute', 'queue_alert', 'You\'ve taken too many steroids today.', 'neg');
                  } else {
                    (s as any).stat_texts['drug_steroids_high'] = 'You can feel the steroids working through your body.';
                    qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_steroids_high', 'accent', 'drugs/steroids_high', 2);
                  }
                }
                if (((s as any).drugVars ?? 0)?.['breastcream_dose'] > 0) {
                  (s as any).stat_texts['drug_breastcream_high'] = 'Your breasts are feeling hot and tingly.';
                  qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_breastcream_high', 'bimbo', 'drugs/breastcream_high', 2);
                }
                if (((s as any).drugVars ?? 0)?.['hair_extensioncream_dose'] > 0) {
                  (s as any).stat_texts['drug_haircream_high'] = 'Your scalp feels hot and tingly.';
                  qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_haircream_high', 'accent', 'drugs/haircream_high', 2);
                }
                if (((s as any).drugVars ?? 0)?.['butt_injection_dose'] > 0) {
                  (s as any).stat_texts['drug_buttinj_high'] = 'Your butt feels hot and tingly.';
                  qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_buttinj_high', 'accent', 'drugs/buttinj_high', 2);
                }
                return;
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
    case 'cikl':
      enterCikl(s, scene);
      break;
    case 'hourly_events':
      enterHourlyEvents(s, scene);
      break;
    case 'stat':
      enterStat(s, scene);
      break;
    case 'compute_stat_display':
      enterComputeStatDisplay(s, scene);
      break;
    default:
      enterCikl(s, scene);
      break;
  }
}

export const drugs: LocationDef = {
  name: 'drugs',
  title: '<br>Developer note: The type of alcohol: (<<$ARGS[1]>>) is missing in this scene. Please report this and a small part of the text of the current scene as a bug.',
  region: 'other',
  enter: enter,
};
