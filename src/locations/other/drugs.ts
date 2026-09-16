import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterCikl(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCocaineCikl(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMentatsCikl(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSteroidsCikl(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAphrodisiacCikl(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterHairExtensioncreamCikl(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterButtInjectionCikl(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBreastcreamCikl(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCaffeineCikl(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPainkillerCikl(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterHourlyEvents(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCigaretteHourlyEvents(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterWeedHourlyEvents(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterHeroinHourlyEvents(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCocaineHourlyEvents(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAmphetamineHourlyEvents(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSteroidsHourlyEvents(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAphrodisiacHourlyEvents(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCaffeineHourlyEvents(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPainkillerHourlyEvents(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterStat(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterHeroinStat(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCocaineStat(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAmphetamineStat(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCaffeineStat(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPainkillerStat(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterComputeStatDisplay(s: GameState, scene: SceneBuilder): void {
  if (((s as any).alko ?? 0) >= 12) {
    ((s as any).stat_texts = (s as any).stat_texts ?? {})['alcohol'] = 'You\'re wasted.';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'alcohol', 'v_neg', 'drugs/alcohol_5', 2);
    qspCall(s, 'stat_display_compute', 'queue_alert', 'You are wasted.', 'v_neg');
  } else {
    if (((s as any).alko ?? 0) >= 6) {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['alcohol'] = 'You\'re very drunk.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'alcohol', 'neg', 'drugs/alcohol_4', 2);
      qspCall(s, 'stat_display_compute', 'queue_alert', 'You are very drunk.', 'neg');
    } else {
      if (((s as any).alko ?? 0) >= 4) {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['alcohol'] = 'You\'re drunk.';
        qspCall(s, 'stat_display_compute', 'queue_msg', 'alcohol', 'neutral', 'drugs/alcohol_3', 2);
      } else {
        if (((s as any).alko ?? 0) >= 2) {
          ((s as any).stat_texts = (s as any).stat_texts ?? {})['alcohol'] = 'You\'re feeling a little tipsy.';
          qspCall(s, 'stat_display_compute', 'queue_msg', 'alcohol', 'neutral', 'drugs/alcohol_2', 2);
        } else {
          if (((s as any).alko ?? 0) === 1) {
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['alcohol'] = 'You feel a little buzz from drinking.';
            qspCall(s, 'stat_display_compute', 'queue_msg', 'alcohol', 'neutral', 'drugs/alcohol_1', 2);
          }
        }
      }
    }
  }
  if (((s as any).totminut ?? 0) <= ((s as any).drugVars ?? 0)?.['cigarettes_minute']) {
    ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_cig_partake'] = 'You are smoking a cigarette.';
    if (((s as any).mc_inventory ?? 0)?.['cigarettes'] > 0) {
      qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_cig_partake', 'v_pos', 'drugs/cig_use', 2, 'gs \'drugs\', \'smoke\'');
    } else {
      qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_cig_partake', 'v_pos', 'drugs/cig_use', 2);
    }
  } else {
    if (((s as any).mc_inventory ?? 0)?.['cigarettes'] > 0) {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_cig_inv_tooltip'] = 'You have ' + ((s as any).mc_inventory ?? 0)?.['cigarettes'] + ' cigarettes. Click to smoke.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_cig_inv', '', 'drugs/cig_have', 2, 'gs \'drugs\', \'smoke\'');
    }
  }
  if (((s as any).drugVars ?? 0)?.['cigarettes_need'] > 0  &&  ((s as any).cheatVars ?? 0)?.['drugs_immune'] === 0) {
    if (((s as any).drugVars ?? 0)?.['cigarettes_need'] > 50) {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_cig_withdraw'] = 'You are desperate for a smoke. Your hands are shaking and you can\'t focus on anything.';
      qspCall(s, 'stat_display_compute', 'queue_alert', 'You are desperate for a smoke.', 'v_neg');
    } else {
      if (((s as any).drugVars ?? 0)?.['cigarettes_need'] > 25) {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_cig_withdraw'] = 'You really need a cigarette. Your nerves are on edge and everything irritates you.';
      } else {
        if (((s as any).drugVars ?? 0)?.['cigarettes_need'] > 10) {
          ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_cig_withdraw'] = 'You want to smoke. The craving is gnawing at you.';
        } else {
          ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_cig_withdraw'] = 'You could use a smoke right about now.';
        }
      }
    }
    if (((s as any).mc_inventory ?? 0)?.['cigarettes'] > 0) {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_cig_withdraw'] = ((s as any).stat_texts['drug_cig_withdraw'] ?? 0) + (' You have ' + ((s as any).mc_inventory ?? 0)?.['cigarettes'] + ' cigarettes.');
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_cig_withdraw_tooltip'] = ((s as any).stat_texts ?? 0)?.['drug_cig_withdraw'] + ' Click to smoke.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_cig_withdraw', 'v_neg', 'drugs/cig_crave', 2, 'gs \'drugs\', \'smoke\'');
    } else {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_cig_withdraw'] = ((s as any).stat_texts['drug_cig_withdraw'] ?? 0) + (' You have no cigarettes left.');
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_cig_withdraw_tooltip'] = ((s as any).stat_texts ?? 0)?.['drug_cig_withdraw'];
      qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_cig_withdraw', 'v_neg', 'drugs/cig_crave', 2);
    }
  }
  if (((s as any).drugVars ?? 0)?.['cigarettes_used'] >= 20  &&  ((s as any).cheatVars ?? 0)?.['drugs_immune'] === 0  &&  ((s as any).drugVars ?? 0)?.['cigarettes_need'] === 0) {
    ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_cig_addict_tooltip'] = 'You are addicted to nicotine. If you stop smoking, cravings will start within hours.';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_cig_addict', 'neg', 'drugs/cig_addict', 2);
  }
  if (((s as any).totminut ?? 0) <= ((s as any).drugVars ?? 0)?.['weed_minute']) {
    ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_weed_partake'] = 'You are smoking a joint.';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_weed_partake', 'v_pos', 'drugs/weed_use', 2);
  }
  if (((s as any).drugVars ?? 0)?.['weed_high'] > 0) {
    if (((s as any).drugVars ?? 0)?.['weed_high'] >= 2) {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_weed_high'] = 'You are very stoned. Everything seems hilarious and far away. You\'ve got the munchies bad.';
      qspCall(s, 'stat_display_compute', 'queue_alert', 'You\'re completely stoned.', 'accent');
    } else {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_weed_high'] = 'You are stoned. The world feels soft and mellow. You\'re feeling a little peckish.';
    }
    qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_weed_high', 'accent', 'drugs/weed_high', 2);
  }
  if (((s as any).drugVars ?? 0)?.['heroin_high'] > 0) {
    if (((s as any).drugVars ?? 0)?.['heroin_high'] >= 20) {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_heroin_high'] = 'You are riding an intense heroin high. Nothing else matters.';
      qspCall(s, 'stat_display_compute', 'queue_alert', 'You are on an intense heroin high.', 'accent');
    } else {
      if (((s as any).drugVars ?? 0)?.['heroin_high'] >= 10) {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_heroin_high'] = 'You feel warm and numb. The heroin is still coursing through you.';
      } else {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_heroin_high'] = 'The heroin high is fading. The world is slowly creeping back in.';
      }
    }
    qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_heroin_high', 'accent', 'drugs/heroin_high', 2);
  }
  if (((s as any).drugVars ?? 0)?.['heroin_need'] > 0  &&  ((s as any).drugVars ?? 0)?.['heroin_high'] === 0) {
    if (((s as any).drugVars ?? 0)?.['heroin_taper'] > 0) {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_heroin_withdraw'] = 'The physical agony has faded, but the craving for heroin still gnaws at you. It will take time to fully let go.';
    } else {
      if (((s as any).drugVars ?? 0)?.['heroin_need'] > 48) {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_heroin_withdraw'] = 'You are in agony. Every bone in your body aches. You desperately need heroin. Your mood and disposition are suffering severely.';
        qspCall(s, 'stat_display_compute', 'queue_alert', 'Your craving for heroin is overwhelming.', 'v_neg');
      } else {
        if (((s as any).drugVars ?? 0)?.['heroin_need'] > 24) {
          ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_heroin_withdraw'] = 'You are very weak and hurt to the bone. The withdrawal is making you miserable.';
          qspCall(s, 'stat_display_compute', 'queue_alert', 'Heroin withdrawal is hitting hard.', 'v_neg');
        } else {
          if (((s as any).drugVars ?? 0)?.['heroin_need'] > 10) {
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_heroin_withdraw'] = 'Your body is aching and you feel awful. You need a fix.';
            qspCall(s, 'stat_display_compute', 'queue_alert', 'You need a heroin fix.', 'neg');
          } else {
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_heroin_withdraw'] = 'You are starting to feel sick. Your body wants more heroin.';
          }
        }
      }
    }
    ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_heroin_withdraw_tooltip'] = ((s as any).stat_texts ?? 0)?.['drug_heroin_withdraw'];
    qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_heroin_withdraw', ((((s as any).drugVars ?? 0)?.['heroin_taper'] > 0) ? ('neg') : ('v_neg')), 'drugs/heroin_crave', 2);
  } else {
    if (((s as any).drugVars ?? 0)?.['heroin_used'] >= 3  &&  ((s as any).drugVars ?? 0)?.['heroin_high'] > 0) {
      if (((s as any).drugVars ?? 0)?.['heroin_high'] === 1) {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_heroin_addict_tooltip'] = 'You are addicted to heroin. The high is almost gone — withdrawal will begin within the hour.';
      } else {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_heroin_addict_tooltip'] = 'You are addicted to heroin. Withdrawal will begin in ' + ((s as any).drugVars ?? 0)?.['heroin_high'] + ' hours when the high wears off.';
      }
      qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_heroin_addict', 'neg', 'drugs/heroin_addict', 2);
    }
  }
  if (((s as any).drugVars ?? 0)?.['cocaine_high'] > 0) {
    if (((s as any).drugVars ?? 0)?.['cocaine_high'] >= 100) {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_cocaine_high'] = 'You feel invincible. Cocaine is surging through your veins.';
      qspCall(s, 'stat_display_compute', 'queue_alert', 'You are high on cocaine.', 'accent');
    } else {
      if (((s as any).drugVars ?? 0)?.['cocaine_high'] >= 40) {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_cocaine_high'] = 'You feel powerful and alert. Your heart is racing from the cocaine.';
      } else {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_cocaine_high'] = 'The cocaine buzz is fading but you still feel a residual edge.';
      }
    }
    qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_cocaine_high', 'accent', 'drugs/cocaine_high', 2);
  }
  if (((s as any).drugVars ?? 0)?.['cocaine_crash'] > 0  &&  ((s as any).drugVars ?? 0)?.['cocaine_high'] === 0) {
    if (((s as any).drugVars ?? 0)?.['cocaine_crash'] > 30) {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_cocaine_crash'] = 'You are crashing hard. You\'re exhausted, irritable, and craving more cocaine.';
    } else {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_cocaine_crash'] = 'You\'re coming down from cocaine. You feel flat and tired.';
    }
    qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_cocaine_crash', 'neg', 'drugs/cocaine_crave', 2);
  }
  if (((s as any).drugVars ?? 0)?.['cocaine_addict'] === 1  &&  ((s as any).drugVars ?? 0)?.['cocaine_day'] !== ((s as any).daystart ?? 0)) {
    if (((s as any).drugVars ?? 0)?.['cocaine_need'] > 144) {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_cocaine_withdraw'] = 'You are destroying yourself. Every hour without cocaine costs you health and sanity. Your mood and disposition are tanking.';
      qspCall(s, 'stat_display_compute', 'queue_alert', 'You <i>need</i> cocaine.', 'v_neg');
    } else {
      if (((s as any).drugVars ?? 0)?.['cocaine_need'] > 72) {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_cocaine_withdraw'] = 'You urgently need cocaine. You feel very weak and your health is deteriorating fast.';
        qspCall(s, 'stat_display_compute', 'queue_alert', 'Cocaine withdrawal is hitting hard.', 'v_neg');
      } else {
        if (((s as any).drugVars ?? 0)?.['cocaine_need'] > 24) {
          ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_cocaine_withdraw'] = 'You need cocaine. The craving is intense and your body is weakening.';
          qspCall(s, 'stat_display_compute', 'queue_alert', 'You need cocaine.', 'neg');
        } else {
          ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_cocaine_withdraw'] = 'You haven\'t had cocaine today. The craving is building.';
        }
      }
    }
    if (((s as any).mc_inventory ?? 0)?.['cocaine'] > 0) {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_cocaine_withdraw'] = ((s as any).stat_texts['drug_cocaine_withdraw'] ?? 0) + (' You have ' + ((s as any).mc_inventory ?? 0)?.['cocaine'] + ' doses.');
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_cocaine_withdraw_tooltip'] = ((s as any).stat_texts ?? 0)?.['drug_cocaine_withdraw'] + ' Click to use.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_cocaine_withdraw', 'v_neg', 'drugs/cocaine_crave', 2, 'gs \'drugs\', \'cocaine\'');
    } else {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_cocaine_withdraw_tooltip'] = ((s as any).stat_texts ?? 0)?.['drug_cocaine_withdraw'];
      qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_cocaine_withdraw', 'v_neg', 'drugs/cocaine_crave', 2);
    }
  } else {
    if (((s as any).drugVars ?? 0)?.['cocaine_addict'] === 1  &&  ((s as any).drugVars ?? 0)?.['cocaine_day'] === ((s as any).daystart ?? 0)) {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_cocaine_addict_tooltip'] = 'You are addicted to cocaine. If you don\'t use again tomorrow, withdrawal will begin.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_cocaine_addict', 'neg', 'drugs/cocaine_addict', 2);
    }
  }
  if (((s as any).drugVars ?? 0)?.['amphetamine_high'] > 0) {
    if (((s as any).drugVars ?? 0)?.['amphetamine_high'] >= 8) {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_amphet_high'] = 'You are wired! Your heart is pounding and you feel unstoppable.';
      qspCall(s, 'stat_display_compute', 'queue_alert', 'You are wired on amphetamines.', 'accent');
    } else {
      if (((s as any).drugVars ?? 0)?.['amphetamine_high'] >= 4) {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_amphet_high'] = 'You feel wired and jittery. The amphetamine rush is going strong.';
      } else {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_amphet_high'] = 'The amphetamine buzz is wearing off. You feel edgy.';
      }
    }
    qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_amphet_high', 'accent', 'drugs/amphet_high', 2);
  }
  if (((s as any).drugVars ?? 0)?.['amphetamine_withdrawl'] >= 5  &&  ((s as any).drugVars ?? 0)?.['amphetamine_high'] <= 0) {
    if (((s as any).drugVars ?? 0)?.['amphetamine_withdrawl'] > 100) {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_amphet_withdraw'] = 'The amphetamine crash is unbearable. You can barely function. Your mood is plummeting.';
      qspCall(s, 'stat_display_compute', 'queue_alert', 'The amphetamine crash is unbearable.', 'v_neg');
    } else {
      if (((s as any).drugVars ?? 0)?.['amphetamine_withdrawl'] > 50) {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_amphet_withdraw'] = 'Amphetamine withdrawal is hitting hard. You feel exhausted and deeply depressed.';
        qspCall(s, 'stat_display_compute', 'queue_alert', 'Amphetamine withdrawal is hitting hard.', 'v_neg');
      } else {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_amphet_withdraw'] = 'You are coming down from amphetamines. You feel tired, irritable, and drained.';
        qspCall(s, 'stat_display_compute', 'queue_alert', 'You are coming down from amphetamines.', 'neg');
      }
    }
    if (((s as any).mc_inventory ?? 0)?.['amphetamine'] > 0) {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_amphet_withdraw'] = ((s as any).stat_texts['drug_amphet_withdraw'] ?? 0) + (' You have ' + ((s as any).mc_inventory ?? 0)?.['amphetamine'] + ' pills.');
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_amphet_withdraw_tooltip'] = ((s as any).stat_texts ?? 0)?.['drug_amphet_withdraw'] + ' Click to take one.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_amphet_withdraw', 'v_neg', 'drugs/amphet_crave', 2, 'gs \'drugs\', \'amphetamine\'');
    } else {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_amphet_withdraw_tooltip'] = ((s as any).stat_texts ?? 0)?.['drug_amphet_withdraw'];
      qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_amphet_withdraw', 'v_neg', 'drugs/amphet_crave', 2);
    }
  } else {
    if (((s as any).drugVars ?? 0)?.['amphetamine_withdrawl'] === 2  &&  ((s as any).drugVars ?? 0)?.['amphetamine_high'] <= 0) {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_amphet_comedown'] = 'The amphetamine high has worn off. You feel drained and sluggish.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_amphet_comedown', 'neg', 'drugs/amphet_crave', 2);
    }
  }
  if (((s as any).drugVars ?? 0)?.['amphetamine_used'] >= 10  &&  ((s as any).drugVars ?? 0)?.['amphetamine_high'] <= 0  &&  ((s as any).drugVars ?? 0)?.['amphetamine_withdrawl'] === 0) {
    ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_amphet_addict'] = 'You are dependent on amphetamines.';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_amphet_addict', 'neg', 'drugs/amphet_addict', 2);
  }
  if (((s as any).drugVars ?? 0)?.['caffeine_dose'] > 0) {
    ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_caffeine_high'] = 'You are buzzing from caffeine.';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_caffeine_high', 'pos', 'drugs/caffeine_high', 2);
  }
  if (((s as any).drugVars ?? 0)?.['caffeine_need'] > 0) {
    ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_caffeine_withdraw'] = 'You are craving caffeine. You feel sluggish and irritable.';
    ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_caffeine_withdraw_tooltip'] = 'You are craving caffeine. Your mood suffers each hour without it.';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_caffeine_withdraw', 'v_neg', 'drugs/caffeine_crave', 2);
    qspCall(s, 'stat_display_compute', 'queue_alert', 'You are craving caffeine.', 'neg');
  }
  if (((s as any).drugVars ?? 0)?.['caffeine_addict'] === 1  &&  ((s as any).drugVars ?? 0)?.['caffeine_need'] === 0  &&  ((s as any).drugVars ?? 0)?.['caffeine_dose'] === 0) {
    ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_caffeine_addict_tooltip'] = 'You are addicted to caffeine. Cravings will start if you go without it.';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_caffeine_addict', 'neg', 'drugs/caffeine_addict', 2);
  }
  if (((s as any).drugVars ?? 0)?.['painkiller_points'] >= 10) {
    ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_pk_high'] = 'Painkillers are dulling your pain.';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_pk_high', 'pos', 'drugs/painkiller_high', 2);
  }
  if (((s as any).drugVars ?? 0)?.['painkiller_weak'] === 1) {
    if (((s as any).drugVars ?? 0)?.['painkiller_need'] > 12) {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_pk_withdraw'] = 'Your body is wracked with pain. Your head pounds and your stomach cramps violently. You desperately need painkillers.';
      qspCall(s, 'stat_display_compute', 'queue_alert', 'You suffer from severe painkiller withdrawal.', 'v_neg');
    } else {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_pk_withdraw'] = 'Your body is aching with withdrawal. You need painkillers.';
      qspCall(s, 'stat_display_compute', 'queue_alert', 'You need painkillers.', 'neg');
    }
    if (((s as any).mc_inventory ?? 0)?.['painkillers'] > 0) {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_pk_withdraw'] = ((s as any).stat_texts['drug_pk_withdraw'] ?? 0) + (' You have ' + ((s as any).mc_inventory ?? 0)?.['painkillers'] + '.');
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_pk_withdraw_tooltip'] = ((s as any).stat_texts ?? 0)?.['drug_pk_withdraw'] + ' Click to take one.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_pk_withdraw', 'v_neg', 'drugs/painkiller_crave', 2, 'gs \'drugs\', \'painkiller\'');
    } else {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_pk_withdraw_tooltip'] = ((s as any).stat_texts ?? 0)?.['drug_pk_withdraw'];
      qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_pk_withdraw', 'v_neg', 'drugs/painkiller_crave', 2);
    }
  } else {
    if (((s as any).drugVars ?? 0)?.['painkiller_addict'] === 1  &&  ((s as any).drugVars ?? 0)?.['painkiller_points'] >= 10) {
      (s as any).sd_tmp_pk_hrs = ((((s as any).drugVars ?? {})?.['painkiller_points'] ?? 0) - 10) / 20;
      if (((s as any).sd_tmp_pk_hrs ?? 0) < 1) {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_pk_addict_tooltip'] = 'You are addicted to painkillers. Withdrawal will set in within the hour.';
      } else {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_pk_addict_tooltip'] = 'You are addicted to painkillers. Withdrawal will set in within ' + ((s as any).sd_tmp_pk_hrs ?? 0) + ' hours.';
      }
      qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_pk_addict', 'neg', 'drugs/painkiller_addict', 2);
    }
  }
  if (((s as any).drugVars ?? 0)?.['aphrodisiac_timer'] > 0) {
    ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_aphro_high'] = 'You are feeling hot, and every move causes your groin to tingle.';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_aphro_high', 'bimbo', 'drugs/aphro_high', 2);
    qspCall(s, 'stat_display_compute', 'queue_alert', 'An aphrodisiac is making you hot and distracted.', 'bimbo');
  }
  if (((s as any).drugVars ?? 0)?.['mentats_dose'] > 0) {
    if (((s as any).drugVars ?? 0)?.['mentats_dose'] > 1) {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_mentats_high'] = 'Your brain feels overcharged. Taking more than one neurobooster is going to hurt.';
    } else {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_mentats_high'] = 'You feel sharp and focused.';
    }
    qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_mentats_high', 'accent', 'drugs/mentats_high', 2);
  }
  if (((s as any).drugVars ?? 0)?.['steroids_dose'] > 0) {
    if (((s as any).drugVars ?? 0)?.['steroids_dose'] >= 3) {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_steroids_high'] = 'You are pumped full of steroids. You really shouldn\'t take any more today.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_steroids_high', 'neg', 'drugs/steroids_high', 2);
      qspCall(s, 'stat_display_compute', 'queue_alert', 'You\'ve taken too many steroids today.', 'neg');
    } else {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_steroids_high'] = 'You can feel the steroids working through your body.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_steroids_high', 'accent', 'drugs/steroids_high', 2);
    }
  }
  if (((s as any).drugVars ?? 0)?.['breastcream_dose'] > 0) {
    ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_breastcream_high'] = 'Your breasts are feeling hot and tingly.';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_breastcream_high', 'bimbo', 'drugs/breastcream_high', 2);
  }
  if (((s as any).drugVars ?? 0)?.['hair_extensioncream_dose'] > 0) {
    ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_haircream_high'] = 'Your scalp feels hot and tingly.';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_haircream_high', 'accent', 'drugs/haircream_high', 2);
  }
  if (((s as any).drugVars ?? 0)?.['butt_injection_dose'] > 0) {
    ((s as any).stat_texts = (s as any).stat_texts ?? {})['drug_buttinj_high'] = 'Your butt feels hot and tingly.';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'drug_buttinj_high', 'accent', 'drugs/buttinj_high', 2);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterPainRelief(s: GameState, scene: SceneBuilder): void {
  ((s as any).pain = (s as any).pain ?? {})['relief'] = 0;
  if (((s as any).alko ?? 0) <= 3) {
  } else {
    if (((s as any).alko ?? 0) <= 6) {
      ((s as any).pain = (s as any).pain ?? {})['relief'] = ((s as any).pain['relief'] ?? 0) + (15);
    } else {
      if (((s as any).alko ?? 0) <= 9) {
        ((s as any).pain = (s as any).pain ?? {})['relief'] = ((s as any).pain['relief'] ?? 0) + (30);
      } else {
        ((s as any).pain = (s as any).pain ?? {})['relief'] = ((s as any).pain['relief'] ?? 0) + (60);
      }
    }
  }
  if (((s as any).drugVars ?? 0)?.['heroin_high'] > 0) {
    ((s as any).pain = (s as any).pain ?? {})['relief'] = ((s as any).pain['relief'] ?? 0) + (90);
  } else {
    if (((s as any).drugVars ?? 0)?.['cocaine_high'] > 0) {
      ((s as any).pain = (s as any).pain ?? {})['relief'] = ((s as any).pain['relief'] ?? 0) + (50);
    } else {
      if (((s as any).drugVars ?? 0)?.['painkiller_points'] > 0) {
        (s as any).painkiller_ceiling = 60 - (((s as any).drugVars ?? {})?.['painkiller_tolerance'] ?? 0) / 3;
        (s as any).painkiller_saturation = 140 + (((s as any).drugVars ?? {})?.['painkiller_tolerance'] ?? 0) * 2;
        ((s as any).pain = (s as any).pain ?? {})['relief'] = ((s as any).pain['relief'] ?? 0) + ((((s as any).painkiller_ceiling ?? 0) * (((s as any).drugVars ?? {})?.['painkiller_points'] ?? 0)) / ((((s as any).drugVars ?? {})?.['painkiller_points'] ?? 0) + ((s as any).painkiller_saturation ?? 0)));
      }
    }
  }
  ((s as any).pain = (s as any).pain ?? {})['relief'] = Math.max(0, Math.min(((s as any).pain ?? 0)?.['relief'], 95));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterAlcohol(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cheatVars ?? 0)?.['drugs_immune'] === 0) {
    ((s as any).drugVars = (s as any).drugVars ?? {})['alcohol_used'] = ((s as any).drugVars['alcohol_used'] ?? 0) + (1);
    if (((s as any).drugVars ?? 0)?.['alcohol_used'] > 15  &&  ((s as any).drugVars ?? 0)?.['alcohol_exp'] === 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['alcohol_exp'] = 1;
    }
  }
  // TODO-QSP: $ARGS[1] = $lcase($ARGS[1])
  ((s as any).ARGS = (s as any).ARGS ?? {})[2] = ((((s as any).locArgs?.[2] ?? 0) <= 1) ? (1) : (((s as any).locArgs?.[2] ?? 0)));
  (s as any).temp_alc_count = 0;
  // TODO-QSP: :alcohol_jump
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) - (5);
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) - (5);
  if (((s as any).locArgs?.[1] ?? 0) === 'beer') {
    if (((s as any).trait_vars ?? 0)?.['drinking'] < 0) {
      (s as any).alko = ((s as any).alko ?? 0) + (Math.floor(Math.random() * 2) + 1);
    } else {
      if (((s as any).trait_vars ?? 0)?.['drinking'] === 0) {
        (s as any).alko = ((s as any).alko ?? 0) + (1);
      } else {
        (s as any).alko = ((s as any).alko ?? 0) + (Math.floor(Math.random() * 2) + 0);
      }
    }
    ((s as any).trait_vars = (s as any).trait_vars ?? {})['alko_today'] = ((s as any).trait_vars['alko_today'] ?? 0) + (1);
    qspCall(s, 'mood', 'raise', 'tiny');
    (s as any).fat = ((s as any).fat ?? 0) + (3);
    if (((s as any).pcs_hydra ?? 0) >= 100) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (5);
    } else {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (10);
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'wine'  ||  ((s as any).locArgs?.[1] ?? 0) === 'champagne') {
      if (((s as any).trait_vars ?? 0)?.['drinking'] < 0) {
        (s as any).alko = ((s as any).alko ?? 0) + (3);
      } else {
        if (((s as any).trait_vars ?? 0)?.['drinking'] === 0) {
          (s as any).alko = ((s as any).alko ?? 0) + (2);
        } else {
          (s as any).alko = ((s as any).alko ?? 0) + (1);
        }
      }
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['alko_today'] = ((s as any).trait_vars['alko_today'] ?? 0) + (2);
      qspCall(s, 'mood', 'raise', 'small');
      (s as any).fat = ((s as any).fat ?? 0) + (4);
      if (((s as any).pcs_hydra ?? 0) >= 100) {
        (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (5);
      } else {
        (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (10);
      }
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'vodka'  ||  ((s as any).locArgs?.[1] ?? 0) === 'whiskey'  ||  ((s as any).locArgs?.[1] ?? 0) === 'scotch'  ||  ((s as any).locArgs?.[1] ?? 0) === 'rum') {
        if (((s as any).trait_vars ?? 0)?.['drinking'] < 0) {
          (s as any).alko = ((s as any).alko ?? 0) + (Math.floor(Math.random() * 2) + 4);
        } else {
          if (((s as any).trait_vars ?? 0)?.['drinking'] === 0) {
            (s as any).alko = ((s as any).alko ?? 0) + (3);
          } else {
            (s as any).alko = ((s as any).alko ?? 0) + (Math.floor(Math.random() * 2) + 1);
          }
        }
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['alko_today'] = ((s as any).trait_vars['alko_today'] ?? 0) + (3);
        (s as any).fat = ((s as any).fat ?? 0) + (6);
        if (((s as any).pcs_hydra ?? 0) >= 100) {
          (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (5);
        } else {
          (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (10);
        }
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 'moonshine') {
          if (((s as any).trait_vars ?? 0)?.['drinking'] < 0) {
            (s as any).alko = ((s as any).alko ?? 0) + (Math.floor(Math.random() * 2) + 7);
          } else {
            if (((s as any).trait_vars ?? 0)?.['drinking'] === 0) {
              (s as any).alko = ((s as any).alko ?? 0) + (5);
            } else {
              (s as any).alko = ((s as any).alko ?? 0) + (Math.floor(Math.random() * 2) + 2);
            }
          }
          ((s as any).trait_vars = (s as any).trait_vars ?? {})['alko_today'] = ((s as any).trait_vars['alko_today'] ?? 0) + (5);
          (s as any).fat = ((s as any).fat ?? 0) + (Math.floor(Math.random() * 2) + 1);
          if (((s as any).pcs_hydra ?? 0) >= 100) {
            (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (5);
          } else {
            (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (10);
          }
        }
      }
    }
  }
  (s as any).temp_alc_count = ((s as any).temp_alc_count ?? 0) + (1);
  if (((s as any).temp_alc_count ?? 0) < ((s as any).locArgs?.[2] ?? 0)) {
    // TODO-QSP: jump 'alcohol_jump'
  }
  if (((s as any).drugVars ?? 0)?.['painkiller_points'] >= 50) {
    if (((s as any).alko ?? 0) >= 12) {
      (s as any).pcs_health = ((s as any).pcs_health ?? 0) - (150);
    } else {
      if (((s as any).alko ?? 0) >= 6) {
        (s as any).pcs_health = ((s as any).pcs_health ?? 0) - (50);
      }
    }
  }
  (s as any).frost = 0;
  (s as any).pcs_breath = 0;
  qspCall(s, 'cum_cleanup', '', 2);
  qspCall(s, 'stat', '');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCaffeine(s: GameState, scene: SceneBuilder): void {
  if (((s as any).drugVars ?? 0)?.['caffeine_dose'] > 0) {
    // TODO-QSP: exit
  }
  if (((s as any).locArgs?.[1] ?? 0) <= 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = 4;
  }
  if (((s as any).locArgs?.[2] ?? 0) <= 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = 1;
  }
  ((s as any).drugVars = (s as any).drugVars ?? {})['caffeine_dose'] = ((s as any).locArgs?.[2] ?? 0);
  if (((s as any).cheatVars ?? 0)?.['drugs_immune'] === 0) {
    ((s as any).drugVars = (s as any).drugVars ?? {})['caffeine_used'] = ((s as any).drugVars['caffeine_used'] ?? 0) + (1);
    ((s as any).drugVars = (s as any).drugVars ?? {})['caffeine_system'] = ((s as any).drugVars['caffeine_system'] ?? 0) + (((s as any).locArgs?.[1] ?? 0) * (((s as any).drugVars ?? {})?.['caffeine_dose'] ?? 0));
  }
  ((s as any).drugVars = (s as any).drugVars ?? {})['caffeine_minut'] = ((s as any).totminut ?? 0) + (((s as any).locArgs?.[1] ?? 0) - 1) * 60 + (Math.floor(Math.random() * 31) + 0) + (Math.floor(Math.random() * 31) + 0) + (Math.floor(Math.random() * 31) + 0) + (Math.floor(Math.random() * 31) + 0);
  ((s as any).drugVars = (s as any).drugVars ?? {})['sleep_actual'] = ((s as any).pcs_sleep ?? 0);
  if (((s as any).drugVars ?? 0)?.['caffeine_addict'] === 0) {
    ((s as any).drugVars = (s as any).drugVars ?? {})['sleep_displayed'] = (101 * (((s as any).drugVars ?? {})?.['caffeine_dose'] ?? 0) + ((s as any).pcs_sleep ?? 0)) / (1 + (((s as any).drugVars ?? {})?.['caffeine_dose'] ?? 0));
  } else {
    ((s as any).drugVars = (s as any).drugVars ?? {})['sleep_displayed'] = (102 * (((s as any).drugVars ?? {})?.['caffeine_dose'] ?? 0) + ((s as any).pcs_sleep ?? 0) * ((((s as any).drugVars ?? {})?.['caffeine_dose'] ?? 0) + 2)) / (2 * (((s as any).drugVars ?? {})?.['caffeine_dose'] ?? 0) + 2);
  }
  qspCall(s, 'stat', '');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCaffeineCikl(s: GameState, scene: SceneBuilder): void {
  if (((s as any).drugVars ?? 0)?.['caffeine_system'] <= 0) {
    ((s as any).drugVars = (s as any).drugVars ?? {})['caffeine_system'] = 0;
  } else {
    if (((s as any).drugVars ?? 0)?.['caffeine_system'] < 20) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['caffeine_system'] = ((s as any).drugVars['caffeine_system'] ?? 0) - (1);
    } else {
      if (((s as any).drugVars ?? 0)?.['caffeine_system'] < 40) {
        ((s as any).drugVars = (s as any).drugVars ?? {})['caffeine_system'] = ((s as any).drugVars['caffeine_system'] ?? 0) - (2);
      } else {
        if (((s as any).drugVars ?? 0)?.['caffeine_system'] < 60) {
          ((s as any).drugVars = (s as any).drugVars ?? {})['caffeine_system'] = ((s as any).drugVars['caffeine_system'] ?? 0) - (3);
        } else {
          ((s as any).drugVars = (s as any).drugVars ?? {})['caffeine_system'] = 60;
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCaffeineHourlyEvents(s: GameState, scene: SceneBuilder): void {
  if (((s as any).drugVars ?? 0)?.['caffeine_addict'] === 1  &&  ((s as any).drugVars ?? 0)?.['caffeine_dose'] === 0) {
    ((s as any).drugVars = (s as any).drugVars ?? {})['caffeine_need'] = ((s as any).drugVars['caffeine_need'] ?? 0) + (1);
  }
  if (((s as any).drugVars ?? 0)?.['caffeine_need'] > 0) {
    qspCall(s, 'mood', 'lower', 'small');
  }
  if (((s as any).drugVars ?? 0)?.['caffeine_dose'] > 0) {
    (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) + (Math.max(0, Math.min((Math.floor(Math.random() * ((((s as any).drugVars ?? {})?.['caffeine_dose'] ?? 0) - (-1) + 1)) + ((-1))), 1)));
  }
  if (((s as any).drugVars ?? 0)?.['caffeine_addict'] > 0) {
    (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) - (Math.floor(Math.random() * 2) + 0);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCaffeineStat(s: GameState, scene: SceneBuilder): void {
  if (((s as any).drugVars ?? 0)?.['caffeine_system'] >= 60) {
    ((s as any).drugVars = (s as any).drugVars ?? {})['caffeine_addict'] = 1;
  } else {
    if (((s as any).drugVars ?? 0)?.['caffeine_system'] <= 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['caffeine_addict'] = 0;
    }
  }
  if (((s as any).drugVars ?? 0)?.['caffeine_dose'] > 0) {
    ((s as any).drugVars = (s as any).drugVars ?? {})['caffeine_need'] = 0;
    if (((s as any).pcs_sleep ?? 0) < ((s as any).drugVars ?? 0)?.['sleep_displayed']) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['sleep_actual'] = ((s as any).drugVars['sleep_actual'] ?? 0) - (((((s as any).drugVars ?? {})?.['sleep_displayed'] ?? 0) - ((s as any).pcs_sleep ?? 0)));
    }
    if (((s as any).totminut ?? 0) <= ((s as any).drugVars ?? 0)?.['caffeine_minut']) {
      (s as any).pcs_sleep = ((s as any).drugVars ?? 0)?.['sleep_displayed'];
    } else {
      (s as any).pcs_sleep = ((s as any).drugVars ?? 0)?.['sleep_actual'];
      ((s as any).drugVars = (s as any).drugVars ?? {})['caffeine_dose'] = 0;
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSmoke(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 0  &&  ((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['cigarettes'] = ((s as any).mc_inventory['cigarettes'] ?? 0) - (1);
    if (((s as any).mc_inventory ?? 0)?.['cigarettes'] <= 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['cigarettes'] = 0;
      // TODO-QSP: msg 'That was your last cigarette.'
    }
  }
  if (((s as any).cheatVars ?? 0)?.['drugs_immune'] === 0) {
    ((s as any).drugVars = (s as any).drugVars ?? {})['cigarettes_used'] = ((s as any).drugVars['cigarettes_used'] ?? 0) + (1);
    ((s as any).drugVars = (s as any).drugVars ?? {})['cigarettes_ever'] = ((s as any).drugVars['cigarettes_ever'] ?? 0) + (1);
    if (((s as any).drugVars ?? 0)?.['cigarettes_used'] > 20  &&  ((s as any).drugVars ?? 0)?.['cigarettes_exp'] === 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['cigarettes_exp'] = 1;
    }
  }
  ((s as any).stat = (s as any).stat ?? {})['cigarettes_smoked'] = ((s as any).stat['cigarettes_smoked'] ?? 0) + (1);
  ((s as any).drugVars = (s as any).drugVars ?? {})['cigarettes_minute'] = ((s as any).totminut ?? 0) + 3;
  ((s as any).drugVars = (s as any).drugVars ?? {})['cigarettes_need'] = 0;
  ((s as any).teeth = (s as any).teeth ?? {})['smoked'] = ((s as any).teeth['smoked'] ?? 0) + (1);
  (s as any).pcs_breath = 0;
  qspCall(s, 'mood', 'raise', 'medium');
  qspCall(s, 'mood', 'hold', 15);
  if (((s as any).pcs_hydra ?? 0) >= 100) {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (5);
  } else {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (10);
  }
  if (((s as any).pcs_energy ?? 0) < 80) {
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (4);
  }
  (s as any).cumspclnt = 2;
  qspCall(s, 'cum_cleanup', '');
  qspCall(s, 'body', 'SkinLoss', 'Smoke');
  qspCall(s, 'stat', '');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCigaretteHourlyEvents(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cheatVars ?? 0)?.['drugs_immune'] === 0) {
    if (((s as any).drugVars ?? 0)?.['cigarettes_used'] >= 20  ||  (((s as any).drugVars ?? 0)?.['cigarettes_ever'] >= 150  &&  ((s as any).drugVars ?? 0)?.['cigarettes_used'] >= 5)) {
      if ((Math.floor(Math.random() * 100) + 1) <= 40 + Math.min(((s as any).drugVars ?? 0)?.['cigarettes_used'] - 20, 240) / 4) {
        ((s as any).drugVars = (s as any).drugVars ?? {})['cigarettes_need'] = ((s as any).drugVars['cigarettes_need'] ?? 0) + (1);
      }
      if ((Math.floor(Math.random() * 3) + 1) <= Math.max(0, Math.min(((s as any).drugVars ?? 0)?.['cigarettes_used'] - 260, 740)) / 370) {
        ((s as any).drugVars = (s as any).drugVars ?? {})['cigarettes_need'] = ((s as any).drugVars['cigarettes_need'] ?? 0) + (1);
      }
    }
    if ((!((s as any).inSleep ?? 0))) {
      if (((s as any).drugVars ?? 0)?.['cigarettes_need'] > 50) {
        qspCall(s, 'mood', 'lower', 'large');
        if (((s as any).drugVars ?? 0)?.['disp_day_smoke'] < ((s as any).daystart ?? 0)) {
          ((s as any).drugVars = (s as any).drugVars ?? {})['disp_day_smoke'] = ((s as any).daystart ?? 0);
          qspCall(s, 'mood', 'lower_disposition', 'tiny');
        }
      } else {
        if (((s as any).drugVars ?? 0)?.['cigarettes_need'] > 25) {
          qspCall(s, 'mood', 'lower', 'medium');
        } else {
          if (((s as any).drugVars ?? 0)?.['cigarettes_need'] > 10) {
            qspCall(s, 'mood', 'lower', 'tiny');
          }
        }
      }
    }
  }
  if (((s as any).drugVars ?? 0)?.['cigarettes_need'] > 80 + ((s as any).drugVars ?? 0)?.['cigarettes_used'] * 3 / 5) {
    ((s as any).drugVars = (s as any).drugVars ?? {})['cigarettes_need'] = 0;
    ((s as any).drugVars = (s as any).drugVars ?? {})['cigarettes_used'] = 0;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterWeed(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 0  &&  ((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['joints'] = ((s as any).mc_inventory['joints'] ?? 0) - (1);
    if (((s as any).mc_inventory ?? 0)?.['joints'] <= 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['joints'] = 0;
      // TODO-QSP: msg 'That was your last joint.'
    }
  }
  if (((s as any).cheatVars ?? 0)?.['drugs_immune'] === 0) {
    ((s as any).drugVars = (s as any).drugVars ?? {})['weed_used'] = ((s as any).drugVars['weed_used'] ?? 0) + (1);
    if (((s as any).drugVars ?? 0)?.['weed_used'] > 5  &&  ((s as any).drugVars ?? 0)?.['weed_exp'] === 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['weed_exp'] = 1;
    }
  }
  if (((s as any).minut ?? 0) > 30) {
    ((s as any).drugVars = (s as any).drugVars ?? {})['weed_high'] = 2;
  } else {
    ((s as any).drugVars = (s as any).drugVars ?? {})['weed_high'] = 1;
  }
  ((s as any).drugVars = (s as any).drugVars ?? {})['weed_day'] = ((s as any).daystart ?? 0);
  ((s as any).drugVars = (s as any).drugVars ?? {})['weed_hour'] = ((s as any).hour ?? 0);
  ((s as any).drugVars = (s as any).drugVars ?? {})['weed_minute'] = ((s as any).totminut ?? 0) + 2;
  (s as any).pcs_breath = 0;
  qspCall(s, 'mood', 'raise', 'large');
  qspCall(s, 'archetypes', 'gain', 'punk', 'tiny', 'Smoking weed');
  qspCall(s, 'mood', 'hold', 15);
  if (((s as any).pcs_hydra ?? 0) >= 100) {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (5);
  } else {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (10);
  }
  (s as any).pcs_energy = Math.max(0, ((s as any).pcs_energy ?? 0) - 20);
  (s as any).cumspclnt = 2;
  qspCall(s, 'cum_cleanup', '');
  qspCall(s, 'stat', '');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterWeedHourlyEvents(s: GameState, scene: SceneBuilder): void {
  if (((s as any).drugVars ?? 0)?.['weed_high'] > 0) {
    ((s as any).drugVars = (s as any).drugVars ?? {})['weed_high'] = ((s as any).drugVars['weed_high'] ?? 0) - (1);
    if (((s as any).drugVars ?? 0)?.['weed_high'] > 1) {
      (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) - (8);
    } else {
      (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) - (4);
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterAmphetamine(s: GameState, scene: SceneBuilder): void {
  if (((s as any).drugVars ?? 0)?.['amphetamine_intake'] >= 2) {
    scene.text('Your heart is already beating uncontrollably in your chest, you should avoid taking anymore pills.');
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 0  &&  ((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['amphetamine'] = ((s as any).mc_inventory['amphetamine'] ?? 0) - (1);
    if (((s as any).mc_inventory ?? 0)?.['amphetamine'] <= 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['amphetamine'] = 0;
      // TODO-QSP: msg 'That was your last amphetamine pill.'
    }
  }
  if (((s as any).cheatVars ?? 0)?.['drugs_immune'] === 0) {
    ((s as any).drugVars = (s as any).drugVars ?? {})['amphetamine_used'] = ((s as any).drugVars['amphetamine_used'] ?? 0) + (1);
    if (((s as any).drugVars ?? 0)?.['amphetamine_used'] > 5  &&  ((s as any).drugVars ?? 0)?.['amphetamine_exp'] === 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['amphetamine_exp'] = 1;
    }
  }
  ((s as any).drugVars = (s as any).drugVars ?? {})['amphetamine_intake'] = ((s as any).drugVars['amphetamine_intake'] ?? 0) + (1);
  ((s as any).drugVars = (s as any).drugVars ?? {})['amphetamine_high'] = 12;
  qspCall(s, 'stat', '');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterAmphetamineHourlyEvents(s: GameState, scene: SceneBuilder): void {
  if (((s as any).drugVars ?? 0)?.['amphetamine_withdrawl'] >= 5) {
    ((s as any).drugVars = (s as any).drugVars ?? {})['amphetamine_withdrawl'] = ((s as any).drugVars['amphetamine_withdrawl'] ?? 0) + (1);
    // TODO-QSP: gs 'mood', 'lower', drugVars['amphetamine_withdrawl'] / 5
  }
  if (((s as any).drugVars ?? 0)?.['amphetamine_high'] > 0) {
    if (((s as any).drugVars ?? 0)?.['amphetamine_withdrawl'] < 2) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['amphetamine_withdrawl'] = 2;
    }
    ((s as any).drugVars = (s as any).drugVars ?? {})['amphetamine_bonus'] = 2;
    ((s as any).drugVars = (s as any).drugVars ?? {})['amphetamine_high'] = ((s as any).drugVars['amphetamine_high'] ?? 0) - (4);
    // TODO-QSP: gs 'mood', 'raise', 2 * drugVars['amphetamine_high']
  } else {
    if (((s as any).drugVars ?? 0)?.['amphetamine_withdrawl'] === 2) {
      if (((s as any).drugVars ?? 0)?.['amphetamine_intake'] > 0) {
        ((s as any).drugVars = (s as any).drugVars ?? {})['amphetamine_intake'] = ((s as any).drugVars['amphetamine_intake'] ?? 0) - (1);
      } else {
        ((s as any).drugVars = (s as any).drugVars ?? {})['amphetamine_withdrawl'] = 0;
      }
      ((s as any).drugVars = (s as any).drugVars ?? {})['amphetamine_high'] = 0;
      ((s as any).drugVars = (s as any).drugVars ?? {})['amphetamine_bonus'] = 1;
      qspCall(s, 'mood', 'lower', 'small');
    } else {
      if (((s as any).drugVars ?? 0)?.['amphetamine_intake'] > 0) {
        ((s as any).drugVars = (s as any).drugVars ?? {})['amphetamine_withdrawl'] = ((s as any).drugVars['amphetamine_withdrawl'] ?? 0) + (1);
      } else {
        if (((s as any).drugVars ?? 0)?.['amphetamine_withdrawl'] === 0) {
          ((s as any).drugVars = (s as any).drugVars ?? {})['amphetamine_bonus'] = 0;
        }
      }
    }
  }
  if (((s as any).drugVars ?? 0)?.['amphetamine_withdrawl'] > 169) {
    ((s as any).drugVars = (s as any).drugVars ?? {})['amphetamine_withdrawl'] = 1;
    ((s as any).drugVars = (s as any).drugVars ?? {})['amphetamine_bonus'] = 0;
    ((s as any).drugVars = (s as any).drugVars ?? {})['amphetamine_used'] = 0;
  }
  if (((s as any).drugVars ?? 0)?.['amphetamine_high'] <= 0) {
    if (((s as any).inSleep ?? 0) === 1) {
      (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) - (4 * (((s as any).drugVars ?? {})?.['amphetamine_bonus'] ?? 0));
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (8 * (((s as any).drugVars ?? {})?.['amphetamine_bonus'] ?? 0));
    } else {
      (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) - (8 * (((s as any).drugVars ?? {})?.['amphetamine_bonus'] ?? 0));
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (16 * (((s as any).drugVars ?? {})?.['amphetamine_bonus'] ?? 0));
    }
  } else {
    if (((s as any).inSleep ?? 0) === 1) {
      (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (4 * (((s as any).drugVars ?? {})?.['amphetamine_bonus'] ?? 0) / (1 + (((s as any).drugVars ?? {})?.['amphetamine_bonus'] ?? 0)));
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (8 * (((s as any).drugVars ?? {})?.['amphetamine_bonus'] ?? 0) / (1 + (((s as any).drugVars ?? {})?.['amphetamine_bonus'] ?? 0)));
    } else {
      (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (8 * (((s as any).drugVars ?? {})?.['amphetamine_bonus'] ?? 0) / (1 + (((s as any).drugVars ?? {})?.['amphetamine_bonus'] ?? 0)));
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (16 * (((s as any).drugVars ?? {})?.['amphetamine_bonus'] ?? 0) / (1 + (((s as any).drugVars ?? {})?.['amphetamine_bonus'] ?? 0)));
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterAmphetamineStat(s: GameState, scene: SceneBuilder): void {
  if (((s as any).drugVars ?? 0)?.['amphetamine_used'] <= 3  ||  ((s as any).drugVars ?? 0)?.['amphetamine_high'] > 0) {
    // TODO-QSP: exit
  }
  if ((Math.floor(Math.random() * 5) + 1) > 4) {
    ((s as any).drugVars = (s as any).drugVars ?? {})['amphetamine_withdrawl'] = 2;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCocaine(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 0  &&  ((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['cocaine'] = ((s as any).mc_inventory['cocaine'] ?? 0) - (1);
    if (((s as any).mc_inventory ?? 0)?.['cocaine'] <= 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['cocaine'] = 0;
      // TODO-QSP: msg 'That was your last line of cocaine.'
    }
  }
  if (((s as any).cheatVars ?? 0)?.['drugs_immune'] === 0) {
    ((s as any).drugVars = (s as any).drugVars ?? {})['cocaine_used'] = ((s as any).drugVars['cocaine_used'] ?? 0) + (1);
    if (((s as any).drugVars ?? 0)?.['cocaine_used'] > 3  &&  ((s as any).drugVars ?? 0)?.['cocaine_exp'] === 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['cocaine_exp'] = 1;
    }
  }
  ((s as any).drugVars = (s as any).drugVars ?? {})['cocaine_high'] = Math.min(200, (((s as any).drugVars ?? {})?.['cocaine_high'] ?? 0) + 100);
  ((s as any).drugVars = (s as any).drugVars ?? {})['cocaine_system'] = Math.min(60, (((s as any).drugVars ?? {})?.['cocaine_system'] ?? 0) + 8);
  ((s as any).drugVars = (s as any).drugVars ?? {})['cocaine_day'] = ((s as any).daystart ?? 0);
  ((s as any).drugVars = (s as any).drugVars ?? {})['cocaine_crash'] = 0;
  ((s as any).drugVars = (s as any).drugVars ?? {})['cocaine_need'] = 0;
  if (((s as any).drugVars ?? 0)?.['cocaine_willday'] !== ((s as any).daystart ?? 0)) {
    ((s as any).drugVars = (s as any).drugVars ?? {})['cocaine_willday'] = ((s as any).daystart ?? 0);
    (s as any).pcs_willpwr = ((s as any).pcs_willpwr ?? 0) + (10);
  }
  (s as any).pcs_health = ((s as any).pcs_vital ?? 0) * 10 + ((s as any).pcs_stren ?? 0) * 5;
  qspCall(s, 'mood', 'raise', 'huge');
  (s as any).pcs_horny = Math.max(100, ((s as any).pcs_horny ?? 0));
  qspCall(s, 'stat', '');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCocaineCikl(s: GameState, scene: SceneBuilder): void {
  if (((s as any).drugVars ?? 0)?.['cocaine_system'] < 20) {
    ((s as any).drugVars = (s as any).drugVars ?? {})['cocaine_system'] = Math.max(0, (((s as any).drugVars ?? {})?.['cocaine_system'] ?? 0) - 1);
  } else {
    if (((s as any).drugVars ?? 0)?.['cocaine_system'] < 40) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['cocaine_system'] = ((s as any).drugVars['cocaine_system'] ?? 0) - (2);
    } else {
      if (((s as any).drugVars ?? 0)?.['cocaine_system'] < 60) {
        ((s as any).drugVars = (s as any).drugVars ?? {})['cocaine_system'] = ((s as any).drugVars['cocaine_system'] ?? 0) - (3);
      } else {
        ((s as any).drugVars = (s as any).drugVars ?? {})['cocaine_system'] = 60;
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCocaineHourlyEvents(s: GameState, scene: SceneBuilder): void {
  if (((s as any).drugVars ?? 0)?.['cocaine_high'] > 0) {
    ((s as any).drugVars = (s as any).drugVars ?? {})['cocaine_high'] = Math.max(0, (((s as any).drugVars ?? {})?.['cocaine_high'] ?? 0) - 20);
    if (((s as any).drugVars ?? 0)?.['cocaine_high'] === 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['cocaine_crash'] = 60;
    }
  }
  if (((s as any).drugVars ?? 0)?.['cocaine_crash'] > 0  &&  ((s as any).drugVars ?? 0)?.['cocaine_high'] === 0) {
    ((s as any).drugVars = (s as any).drugVars ?? {})['cocaine_crash'] = Math.max(0, (((s as any).drugVars ?? {})?.['cocaine_crash'] ?? 0) - 10);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (10);
  }
  if (((s as any).drugVars ?? 0)?.['cocaine_addict'] === 0) {
    // TODO-QSP: exit
  }
  if (((s as any).drugVars ?? 0)?.['cocaine_high'] > 0) {
    // TODO-QSP: exit
  }
  if (((s as any).drugVars ?? 0)?.['cocaine_day'] === ((s as any).daystart ?? 0)) {
    // TODO-QSP: exit
  }
  ((s as any).drugVars = (s as any).drugVars ?? {})['cocaine_need'] = ((s as any).drugVars['cocaine_need'] ?? 0) + (1);
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) - (2 + (((s as any).drugVars ?? {})?.['cocaine_need'] ?? 0) / 10);
  if (((s as any).drugVars ?? 0)?.['cocaine_need'] > 144) {
    qspCall(s, 'mood', 'lower', 'large');
    if (((s as any).drugVars ?? 0)?.['disp_day_cocaine'] < ((s as any).daystart ?? 0)) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['disp_day_cocaine'] = ((s as any).daystart ?? 0);
      qspCall(s, 'mood', 'lower_disposition', 'tiny');
    }
  } else {
    if (((s as any).drugVars ?? 0)?.['cocaine_need'] > 72) {
      qspCall(s, 'mood', 'lower', 'medium');
    } else {
      if (((s as any).drugVars ?? 0)?.['cocaine_need'] > 24) {
        qspCall(s, 'mood', 'lower', 'small');
      } else {
        if (((s as any).drugVars ?? 0)?.['cocaine_need'] > 6) {
          qspCall(s, 'mood', 'lower', 'tiny');
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCocaineStat(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cheatVars ?? 0)?.['drugs_immune'] === 1) {
    ((s as any).drugVars = (s as any).drugVars ?? {})['cocaine_addict'] = 0;
    ((s as any).drugVars = (s as any).drugVars ?? {})['cocaine_need'] = 0;
  } else {
    if (((s as any).drugVars ?? 0)?.['cocaine_system'] >= 25) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['cocaine_addict'] = 1;
    } else {
      if (((s as any).drugVars ?? 0)?.['cocaine_system'] <= 0) {
        ((s as any).drugVars = (s as any).drugVars ?? {})['cocaine_addict'] = 0;
        ((s as any).drugVars = (s as any).drugVars ?? {})['cocaine_need'] = 0;
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterHeroin(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cheatVars ?? 0)?.['drugs_immune'] === 0) {
    ((s as any).drugVars = (s as any).drugVars ?? {})['heroin_used'] = ((s as any).drugVars['heroin_used'] ?? 0) + (1);
    if (((s as any).drugVars ?? 0)?.['heroin_used'] > 1  &&  ((s as any).drugVars ?? 0)?.['heroin_exp'] === 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['heroin_exp'] = 1;
    }
  }
  qspCall(s, 'mood', 'raise', 'max');
  qspCall(s, 'mood', 'hold', 180);
  ((s as any).drugVars = (s as any).drugVars ?? {})['heroin_high'] = ((s as any).drugVars['heroin_high'] ?? 0) + (25);
  ((s as any).drugVars = (s as any).drugVars ?? {})['heroin_day'] = ((s as any).daystart ?? 0);
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) - (10);
  qspCall(s, 'stat', '');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterHeroinHourlyEvents(s: GameState, scene: SceneBuilder): void {
  if (((s as any).drugVars ?? 0)?.['heroin_used'] >= 3) {
    ((s as any).drugVars = (s as any).drugVars ?? {})['heroin_hours_addicted'] = ((s as any).drugVars['heroin_hours_addicted'] ?? 0) + (1);
  }
  if (((s as any).drugVars ?? 0)?.['heroin_high'] > 0) {
    // TODO-QSP: gs 'mood', 'lower', 40 / drugVars['heroin_high']
    ((s as any).drugVars = (s as any).drugVars ?? {})['heroin_high'] = ((s as any).drugVars['heroin_high'] ?? 0) - (1);
  } else {
    if (((s as any).drugVars ?? 0)?.['heroin_taper'] > 0) {
      qspCall(s, 'mood', 'lower', 'small');
      ((s as any).drugVars = (s as any).drugVars ?? {})['heroin_taper'] = ((s as any).drugVars['heroin_taper'] ?? 0) - (1);
      if (((s as any).drugVars ?? 0)?.['heroin_taper'] <= 0) {
        ((s as any).drugVars = (s as any).drugVars ?? {})['heroin_need'] = 0;
        ((s as any).drugVars = (s as any).drugVars ?? {})['heroin_used'] = 0;
        ((s as any).drugVars = (s as any).drugVars ?? {})['heroin_hours_addicted'] = 0;
      }
    } else {
      if (((s as any).drugVars ?? 0)?.['heroin_need'] > 0) {
        ((s as any).drugVars = (s as any).drugVars ?? {})['heroin_need'] = ((s as any).drugVars['heroin_need'] ?? 0) + (1);
        if (((s as any).drugVars ?? 0)?.['heroin_need'] > 48) {
          qspCall(s, 'mood', 'lower', 'large');
          if (((s as any).drugVars ?? 0)?.['disp_day_heroin'] < ((s as any).daystart ?? 0)) {
            ((s as any).drugVars = (s as any).drugVars ?? {})['disp_day_heroin'] = ((s as any).daystart ?? 0);
            qspCall(s, 'mood', 'lower_disposition', 'small');
          }
        } else {
          if (((s as any).drugVars ?? 0)?.['heroin_need'] > 24) {
            qspCall(s, 'mood', 'lower', 'medium');
          } else {
            if (((s as any).drugVars ?? 0)?.['heroin_need'] > 10) {
              qspCall(s, 'mood', 'lower', 'small');
            }
          }
        }
        if (((s as any).drugVars ?? 0)?.['heroin_need'] >= Math.min(120, 24 + ((s as any).drugVars ?? 0)?.['heroin_used'] * 2)) {
          ((s as any).drugVars = (s as any).drugVars ?? {})['heroin_taper'] = Math.min(1200, 24 + (((s as any).drugVars ?? {})?.['heroin_hours_addicted'] ?? 0) * 2);
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterHeroinStat(s: GameState, scene: SceneBuilder): void {
  if (((s as any).drugVars ?? 0)?.['heroin_high'] > 0) {
    if (((s as any).drugVars ?? 0)?.['heroin_high'] >= 20  &&  ((s as any).alko ?? 0) > 0) {
      (s as any).alko = 0;
    }
    ((s as any).drugVars = (s as any).drugVars ?? {})['heroin_need'] = 0;
    ((s as any).drugVars = (s as any).drugVars ?? {})['heroin_taper'] = 0;
    qspCall(s, 'mood', 'raise', 'large');
  } else {
    if (((s as any).drugVars ?? 0)?.['heroin_used'] >= 3) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['heroin_need'] = Math.max(1, ((s as any).drugVars ?? 0)?.['heroin_need']);
    }
  }
  if (((s as any).drugVars ?? 0)?.['heroin_used'] >= ((s as any).drugVars ?? 0)?.['heroin_penalty'] * 25) {
    if (((s as any).drugVars ?? 0)?.['heroin_penalty'] > 0) {
      (s as any).vidage = ((s as any).vidage ?? 0) + (1);
    }
    ((s as any).drugVars = (s as any).drugVars ?? {})['heroin_penalty'] = ((s as any).drugVars['heroin_penalty'] ?? 0) + (1);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterPainkiller(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 0  &&  ((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['painkillers'] = ((s as any).mc_inventory['painkillers'] ?? 0) - (1);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAddPainkillerTimer(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).mc_inventory ?? 0)?.['painkillers'] <= 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['painkillers'] = 0;
    }
  }
  ((s as any).drugVars = (s as any).drugVars ?? {})['painkiller_points'] = ((s as any).drugVars['painkiller_points'] ?? 0) + (100);
  if (((s as any).cheatVars ?? 0)?.['drugs_immune'] === 0  &&  ((s as any).locArgs?.[1] ?? 0) !== 'spell') {
    ((s as any).drugVars = (s as any).drugVars ?? {})['painkiller_tolerance'] = ((s as any).drugVars['painkiller_tolerance'] ?? 0) + (2);
    if (((s as any).drugVars ?? 0)?.['painkiller_tolerance'] > 60) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['painkiller_tolerance'] = 60;
    }
  }
  if (((s as any).locArgs?.[1] ?? 0) !== 'spell') {
    if (((s as any).alko ?? 0) >= 12) {
      (s as any).pcs_health = ((s as any).pcs_health ?? 0) - (150);
    } else {
      if (((s as any).alko ?? 0) >= 6) {
        (s as any).pcs_health = ((s as any).pcs_health ?? 0) - (50);
      }
    }
  }
  qspCall(s, 'stat', '');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterAddPainkillerTimer(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRefreshPainkillerTimer(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: painkiller_timer[] = 180
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCountPainkillerTimer(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRefreshPainkillerTimer(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).result = 0;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRefreshPainkillerTimer(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_pk_gap = ((s as any).totminut ?? 0) - (((s as any).drugVars ?? {})?.['painkiller_timer_refresh'] ?? 0);
  ((s as any).drugVars = (s as any).drugVars ?? {})['painkiller_timer_refresh'] = ((s as any).totminut ?? 0);
  if (Object.keys((s as any).painkiller_timer ?? {}).length > 0) {
    (s as any).temp_pk_index = 0;
    // TODO-QSP: :painkiller_refresh_loop
    ((s as any).painkiller_timer = (s as any).painkiller_timer ?? {})[String((s as any).temp_pk_index ?? 0)] = ((s as any).painkiller_timer[String((s as any).temp_pk_index ?? 0)] ?? 0) - (((s as any).temp_pk_gap ?? 0));
    if (((s as any).painkiller_timer ?? 0)?.[String((s as any).temp_pk_index ?? 0)] <= 0) {
    } else {
      (s as any).temp_pk_index = ((s as any).temp_pk_index ?? 0) + (1);
    }
    if (((s as any).temp_pk_index ?? 0) < Object.keys((s as any).painkiller_timer ?? {}).length) {
      // TODO-QSP: jump 'painkiller_refresh_loop'
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterPainkillerActStr(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_pk_num = qspFunc(s, 'drugs', 'count_painkiller_timer');
  (s as any).temp_pk_str = String(((s as any).temp_pk_num ?? 0) + 1) + qspFunc(s, 'shortgs', 'get_number_suffix', ((s as any).temp_pk_num ?? 0) + 1);
  if ((!((s as any).temp_pk_num ?? 0))) {
    (s as any).result = 'Take a painkiller';
  } else {
    if (((s as any).temp_pk_num ?? 0) <= 2) {
      (s as any).result = 'Take another painkiller ' + qspFunc(s, 'wrap', 'neutral', '(' + ((s as any).temp_pk_str ?? 0) + ' in the last three hours)');
    } else {
      (s as any).result = 'Take another painkiller ' + qspFunc(s, 'wrap', 'v_neg', '(' + ((s as any).temp_pk_str ?? 0) + ' in the last three hours!)');
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterPainkillerCikl(s: GameState, scene: SceneBuilder): void {
  if (((s as any).drugVars ?? 0)?.['painkiller_tolerance'] > 40) {
    ((s as any).drugVars = (s as any).drugVars ?? {})['painkiller_tolerance'] = ((s as any).drugVars['painkiller_tolerance'] ?? 0) - (3);
  } else {
    if (((s as any).drugVars ?? 0)?.['painkiller_tolerance'] > 20) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['painkiller_tolerance'] = ((s as any).drugVars['painkiller_tolerance'] ?? 0) - (2);
    } else {
      if (((s as any).drugVars ?? 0)?.['painkiller_tolerance'] > 0) {
        ((s as any).drugVars = (s as any).drugVars ?? {})['painkiller_tolerance'] = ((s as any).drugVars['painkiller_tolerance'] ?? 0) - (1);
      } else {
        ((s as any).drugVars = (s as any).drugVars ?? {})['painkiller_tolerance'] = 0;
        ((s as any).drugVars = (s as any).drugVars ?? {})['painkiller_addict'] = 0;
        ((s as any).drugVars = (s as any).drugVars ?? {})['painkiller_need'] = 0;
      }
    }
  }
  if (((s as any).drugVars ?? 0)?.['painkiller_tolerance'] >= 30) {
    ((s as any).drugVars = (s as any).drugVars ?? {})['painkiller_addict'] = 1;
    if (((s as any).drugVars ?? 0)?.['painkiller_exp'] === 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['painkiller_exp'] = 1;
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterPainkillerHourlyEvents(s: GameState, scene: SceneBuilder): void {
  if (((s as any).drugVars ?? 0)?.['painkiller_points'] > 0) {
    ((s as any).drugVars = (s as any).drugVars ?? {})['painkiller_points'] = ((s as any).drugVars['painkiller_points'] ?? 0) - (20);
    if (((s as any).drugVars ?? 0)?.['painkiller_points'] < 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['painkiller_points'] = 0;
    }
  }
  if (((s as any).drugVars ?? 0)?.['painkiller_addict'] === 0) {
    // TODO-QSP: exit
  }
  if (((s as any).drugVars ?? 0)?.['painkiller_points'] < 10) {
    ((s as any).drugVars = (s as any).drugVars ?? {})['painkiller_need'] = ((s as any).drugVars['painkiller_need'] ?? 0) + (1);
    if (((s as any).drugVars ?? 0)?.['painkiller_need'] > 24) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['painkiller_need'] = 24;
    }
    qspCall(s, 'mood', 'lower', 'tiny');
    if (((s as any).drugVars ?? 0)?.['painkiller_need'] >= 12) {
      qspCall(s, 'mood', 'lower', 'tiny');
    }
    ((s as any).pain = (s as any).pain ?? {})['head'] = ((s as any).pain['head'] ?? 0) + ((((s as any).drugVars ?? {})?.['painkiller_need'] ?? 0) / 6);
    ((s as any).pain = (s as any).pain ?? {})['tummy'] = ((s as any).pain['tummy'] ?? 0) + ((((s as any).drugVars ?? {})?.['painkiller_need'] ?? 0) / 6);
  } else {
    if (((s as any).drugVars ?? 0)?.['painkiller_need'] > 0) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['painkiller_need'] = ((s as any).drugVars['painkiller_need'] ?? 0) - (2);
      if (((s as any).drugVars ?? 0)?.['painkiller_need'] < 0) {
        ((s as any).drugVars = (s as any).drugVars ?? {})['painkiller_need'] = 0;
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterPainkillerStat(s: GameState, scene: SceneBuilder): void {
  ((s as any).drugVars = (s as any).drugVars ?? {})['painkiller_weak'] = 0;
  if (((s as any).drugVars ?? 0)?.['painkiller_addict'] === 1  &&  ((s as any).drugVars ?? 0)?.['painkiller_points'] < 10) {
    ((s as any).drugVars = (s as any).drugVars ?? {})['painkiller_weak'] = 1;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterAphrodisiac(s: GameState, scene: SceneBuilder): void {
  if (((s as any).drugVars ?? 0)?.['aphrodisiac_overdose'] === 1) {
    ((s as any).drugVars = (s as any).drugVars ?? {})['aphrodisiac_msg'] = '<br>You\'ve had enough aphrodisiac for today.';
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 0  &&  ((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['aphrodisiac'] = ((s as any).mc_inventory['aphrodisiac'] ?? 0) - (1);
    if (((s as any).mc_inventory ?? 0)?.['aphrodisiac'] <= 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['aphrodisiac'] = 0;
      // TODO-QSP: msg 'That was your last aphrodisiac pill.'
    }
  }
  if (((s as any).cheatVars ?? 0)?.['drugs_immune'] === 0) {
    ((s as any).drugVars = (s as any).drugVars ?? {})['aphrodisiac_used'] = ((s as any).drugVars['aphrodisiac_used'] ?? 0) + (1);
  }
  if (((s as any).drugVars ?? 0)?.['aphrodisiac_timer'] <= 0) {
    ((s as any).drugVars = (s as any).drugVars ?? {})['aphrodisiac_msg'] = qspFunc(s, 'wrap', 'bimbo', '<br>You take a gum  &&  chew it. It tastes like strawberry, but is also kind of spicy.');
    ((s as any).drugVars = (s as any).drugVars ?? {})['aphrodisiac_timer'] = 8;
    (s as any).pcs_horny = Math.max(80, ((s as any).pcs_horny ?? 0));
  } else {
    if (((s as any).drugVars ?? 0)?.['aphrodisiac_timer'] >= 1  &&  ((s as any).drugVars ?? 0)?.['aphrodisiac_timer'] < 9) {
      ((s as any).drugVars = (s as any).drugVars ?? {})['aphrodisiac_msg'] = qspFunc(s, 'wrap', 'bimbo', '<br>You take another gum  &&  chew it. It makes your mouth feel kinda tingly.');
      ((s as any).drugVars = (s as any).drugVars ?? {})['aphrodisiac_timer'] = ((s as any).drugVars['aphrodisiac_timer'] ?? 0) + (8);
      (s as any).pcs_horny = Math.max(100, ((s as any).pcs_horny ?? 0));
    } else {
      if (((s as any).min_arousal ?? 0) < 60) {
        ((s as any).drugVars = (s as any).drugVars ?? {})['aphrodisiac_msg'] = qspFunc(s, 'wrap', 'v_neg b', '<br>You take yet another gum  &&  start chewing it. Suddenly you find yourself in grip of an intense orgasm!<br>It goes on  &&  on  &&  you sink to the ground  &&  do your best to endure it.');
        ((s as any).drugVars = (s as any).drugVars ?? {})['aphrodisiac_overdose'] = 1;
        (s as any).pcs_horny = ((s as any).min_arousal ?? 0);
        (s as any).orgasm = ((s as any).orgasm ?? 0) + (1);
        qspCall(s, 'mood', 'raise', 'medium');
        (s as any).min_arousal = ((s as any).min_arousal ?? 0) + (10);
        if (((s as any).min_arousal ?? 0) <= 10) {
          (s as any).min_arousal_msg = qspFunc(s, 'wrap', 'bimbo', 'That was intense! You can still feel the tingles.');
        } else {
          if (((s as any).min_arousal ?? 0) <= 20) {
            (s as any).min_arousal_msg = qspFunc(s, 'wrap', 'bimbo', 'You are really starting to enjoy these! Your crotch still feels kinda hot though.');
          } else {
            if (((s as any).min_arousal ?? 0) <= 30) {
              (s as any).min_arousal_msg = qspFunc(s, 'wrap', 'bimbo', 'As you are trying to get back to your feet you notice that you are still horny. What is happening to you?');
            } else {
              if (((s as any).min_arousal ?? 0) <= 40) {
                (s as any).min_arousal_msg = qspFunc(s, 'wrap', 'bimbo', 'You are certain of it. Every time those gums give you an orgasm they also increase your libido.');
              } else {
                if (((s as any).min_arousal ?? 0) <= 50) {
                  (s as any).min_arousal_msg = qspFunc(s, 'wrap', 'bimbo', 'You run a finger across your slit  &&  shudder. You really should stop chewing these gums while you can still think of something other than sex.');
                } else {
                  (s as any).min_arousal_msg = qspFunc(s, 'wrap', 'bimbo', 'You are burning up. You feel like you could fuck anything  &&  everything all day long.');
                }
              }
            }
          }
        }
      } else {
        ((s as any).drugVars = (s as any).drugVars ?? {})['aphrodisiac_msg'] = qspFunc(s, 'wrap', 'bimbo', 'You chew another gum with trepidation, looking forward to more orgasms but nothing happens. Huh. Have you become immune?');
      }
    }
  }
  qspCall(s, 'stat', '');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterAphrodisiacCikl(s: GameState, scene: SceneBuilder): void {
  if (((s as any).drugVars ?? 0)?.['aphrodisiac_overdose'] === 1) {
    ((s as any).drugVars = (s as any).drugVars ?? {})['aphrodisiac_overdose'] = 0;
  }
  ((s as any).drugVars = (s as any).drugVars ?? {})['aphrodisiac_timer'] = 0;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterAphrodisiacHourlyEvents(s: GameState, scene: SceneBuilder): void {
  if (((s as any).drugVars ?? 0)?.['aphrodisiac_timer'] <= 0) {
    // TODO-QSP: exit
  }
  ((s as any).drugVars = (s as any).drugVars ?? {})['aphrodisiac_timer'] = ((s as any).drugVars['aphrodisiac_timer'] ?? 0) - (1);
  if (((s as any).pcs_horny ?? 0) < 70) {
    (s as any).pcs_horny = 80;
  } else {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterMentats(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 0  &&  ((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['mentats'] = ((s as any).mc_inventory['mentats'] ?? 0) - (1);
    if (((s as any).mc_inventory ?? 0)?.['mentats'] <= 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['mentats'] = 0;
      // TODO-QSP: msg 'That was your last neurobooster pill.'
    }
  }
  if (((s as any).cheatVars ?? 0)?.['drugs_immune'] === 0) {
    ((s as any).drugVars = (s as any).drugVars ?? {})['mentats_used'] = ((s as any).drugVars['mentats_used'] ?? 0) + (1);
  }
  ((s as any).drugVars = (s as any).drugVars ?? {})['mentats_dose'] = ((s as any).drugVars['mentats_dose'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterMentatsCikl(s: GameState, scene: SceneBuilder): void {
  if (((s as any).drugVars ?? 0)?.['mentats_expgain'] > 0) {
    (s as any).intel_exp = ((s as any).intel_exp ?? 0) + ((Math.floor(Math.random() * ((((s as any).drugVars ?? {})?.['mentats_expgain'] ?? 0) / 2 - 0 + 1)) + (0)));
    ((s as any).drugVars = (s as any).drugVars ?? {})['mentats_expgain'] = 0;
  }
  if (((s as any).drugVars ?? 0)?.['mentats_dose'] === 1) {
    ((s as any).drugVars = (s as any).drugVars ?? {})['mentats_dose'] = 0;
  } else {
    if (((s as any).drugVars ?? 0)?.['mentats_dose'] > 1) {
      ((s as any).pain = (s as any).pain ?? {})['head'] = ((s as any).pain['head'] ?? 0) + (20 * (((s as any).drugVars ?? {})?.['mentats_dose'] ?? 0));
      ((s as any).drugVars = (s as any).drugVars ?? {})['mentats_dose'] = 0;
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSteroids(s: GameState, scene: SceneBuilder): void {
  if (((s as any).drugVars ?? 0)?.['steroids_dose'] >= 3) {
    scene.text('You really shouldn\'t take any more pills today.');
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 0  &&  ((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['steroids'] = ((s as any).mc_inventory['steroids'] ?? 0) - (1);
    if (((s as any).mc_inventory ?? 0)?.['steroids'] <= 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['steroids'] = 0;
      // TODO-QSP: msg 'That was your last steroid pill.'
    }
  }
  if (((s as any).cheatVars ?? 0)?.['drugs_immune'] === 0) {
    ((s as any).drugVars = (s as any).drugVars ?? {})['steroids_used'] = ((s as any).drugVars['steroids_used'] ?? 0) + (1);
  }
  ((s as any).drugVars = (s as any).drugVars ?? {})['steroids_dose'] = ((s as any).drugVars['steroids_dose'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSteroidsCikl(s: GameState, scene: SceneBuilder): void {
  if (((s as any).drugVars ?? 0)?.['steroids_stren_expgain'] > 0) {
    (s as any).stren_exp = ((s as any).stren_exp ?? 0) + ((Math.floor(Math.random() * ((((s as any).drugVars ?? {})?.['steroids_stren_expgain'] ?? 0) / 2 - 0 + 1)) + (0)));
    ((s as any).drugVars = (s as any).drugVars ?? {})['steroids_stren_expgain'] = 0;
  }
  if (((s as any).drugVars ?? 0)?.['steroids_vital_expgain'] > 0) {
    (s as any).vital_exp = ((s as any).vital_exp ?? 0) + ((Math.floor(Math.random() * ((((s as any).drugVars ?? {})?.['steroids_vital_expgain'] ?? 0) / 2 - 0 + 1)) + (0)));
    ((s as any).drugVars = (s as any).drugVars ?? {})['steroids_vital_expgain'] = 0;
  }
  if (((s as any).drugVars ?? 0)?.['steroids_dose'] >= 1) {
    if (((s as any).lashair ?? 0) < 1) {
      (s as any).pcs_pubes = ((s as any).pcs_pubes ?? 0) + (((s as any).drugVars ?? 0)?.['steroids_dose']);
      (s as any).pcs_leghair = ((s as any).pcs_leghair ?? 0) + (((s as any).drugVars ?? 0)?.['steroids_dose']);
    }
    ((s as any).drugVars = (s as any).drugVars ?? {})['steroids_dose'] = 0;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSteroidsHourlyEvents(s: GameState, scene: SceneBuilder): void {
  if (((s as any).drugVars ?? 0)?.['steroids_check'] === 0) {
    // TODO-QSP: exit
  }
  if ((Math.floor(Math.random() * 5) + 0) < ((s as any).drugVars ?? 0)?.['steroids_dose']) {
    (s as any).clit_size = ((s as any).clit_size ?? 0) + (Math.floor(Math.random() * 2) + 0);
  }
  ((s as any).drugVars = (s as any).drugVars ?? {})['steroids_check'] = 0;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBreastcream(s: GameState, scene: SceneBuilder): void {
  if (((s as any).drugVars ?? 0)?.['breastcream_dose'] >= 1) {
    scene.text('Using any more cream won\'t have any effect.');
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 0  &&  ((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['breastcream'] = ((s as any).mc_inventory['breastcream'] ?? 0) - (1);
    if (((s as any).mc_inventory ?? 0)?.['breastcream'] <= 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['breastcream'] = 0;
      // TODO-QSP: msg 'That was your last bit of breast cream.'
    }
  }
  if (((s as any).cheatVars ?? 0)?.['drugs_immune'] === 0) {
    ((s as any).drugVars = (s as any).drugVars ?? {})['breastcream_used'] = ((s as any).drugVars['breastcream_used'] ?? 0) + (1);
  }
  ((s as any).drugVars = (s as any).drugVars ?? {})['breastcream_dose'] = 1;
  qspCall(s, 'stat', '');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBreastcreamCikl(s: GameState, scene: SceneBuilder): void {
  if (((s as any).drugVars ?? 0)?.['breastcream_dose'] <= 0) {
    // TODO-QSP: exit
  }
  ((s as any).drugVars = (s as any).drugVars ?? {})['breastcream_dose'] = 0;
  (s as any).temp_bust_diff = (((s as any).pcs_mass ?? {})?.['bust'] ?? 0) - (((s as any).pcs_mass ?? {})?.['bust_gen'] ?? 0);
  (s as any).temp_bust_diff = (Math.floor(Math.random() * (10 + Math.max(0, ((s as any).temp_bust_diff ?? 0)) - 0 + 1)) + (0)) / Math.max(1, ((s as any).temp_bust_diff ?? 0));
  if (((s as any).temp_bust_diff ?? 0) > 0) {
    ((s as any).bodyVars = (s as any).bodyVars ?? {})['bust_other'] = ((s as any).bodyVars['bust_other'] ?? 0) + (1);
    scene.text('Feels like your breasts have grown slightly.');
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterHairExtensioncream(s: GameState, scene: SceneBuilder): void {
  if (((s as any).drugVars ?? 0)?.['hair_extensioncream_dose'] >= 1) {
    scene.text('Using any more hair extension shampoo won\'t have any effect.');
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 0  &&  ((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['hair_extensioncream'] = ((s as any).mc_inventory['hair_extensioncream'] ?? 0) - (1);
    if (((s as any).mc_inventory ?? 0)?.['hair_extensioncream'] <= 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['hair_extensioncream'] = 0;
      // TODO-QSP: msg 'That was your last bit of hair extension shampoo.'
    }
  }
  if (((s as any).cheatVars ?? 0)?.['drugs_immune'] === 0) {
    ((s as any).drugVars = (s as any).drugVars ?? {})['hair_extensioncream_used'] = ((s as any).drugVars['hair_extensioncream_used'] ?? 0) + (1);
  }
  ((s as any).drugVars = (s as any).drugVars ?? {})['hair_extensioncream_dose'] = 1;
  qspCall(s, 'stat', '');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterHairExtensioncreamCikl(s: GameState, scene: SceneBuilder): void {
  if (((s as any).drugVars ?? 0)?.['hair_extensioncream_dose'] <= 0) {
    // TODO-QSP: exit
  }
  ((s as any).drugVars = (s as any).drugVars ?? {})['hair_extensioncream_dose'] = 0;
  if (((s as any).pcs_hairlng ?? 0) < 999) {
    (s as any).pcs_hairlng = ((s as any).pcs_hairlng ?? 0) + (2);
    scene.text('Feels like your hair has grown slightly.');
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterButtInjection(s: GameState, scene: SceneBuilder): void {
  if (((s as any).drugVars ?? 0)?.['butt_injection_dose'] >= 1) {
    scene.text('Using any more injections won\'t have any effect.');
    return;
  }
  if (((s as any).locArgs?.[1] ?? 0) === 0  &&  ((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['butt_injection'] = ((s as any).mc_inventory['butt_injection'] ?? 0) - (1);
    if (((s as any).mc_inventory ?? 0)?.['butt_injection'] <= 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['butt_injection'] = 0;
      // TODO-QSP: msg 'That was your last KBI shot.'
    }
  }
  if (((s as any).cheatVars ?? 0)?.['drugs_immune'] === 0) {
    ((s as any).drugVars = (s as any).drugVars ?? {})['butt_injection_used'] = ((s as any).drugVars['butt_injection_used'] ?? 0) + (1);
  }
  ((s as any).drugVars = (s as any).drugVars ?? {})['butt_injection_dose'] = 1;
  qspCall(s, 'stat', '');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterButtInjectionCikl(s: GameState, scene: SceneBuilder): void {
  if (((s as any).drugVars ?? 0)?.['butt_injection_dose'] <= 0) {
    // TODO-QSP: exit
  }
  ((s as any).drugVars = (s as any).drugVars ?? {})['butt_injection_dose'] = 0;
  (s as any).temp = (((s as any).pcs_mass ?? {})?.['butt'] ?? 0) - (((s as any).pcs_mass ?? {})?.['butt_gen'] ?? 0);
  (s as any).temp = (Math.floor(Math.random() * (10 + Math.max(0, ((s as any).temp ?? 0)) - 0 + 1)) + (0)) / Math.max(1, ((s as any).temp ?? 0));
  if (((s as any).temp ?? 0) > 0) {
    ((s as any).bodyVars = (s as any).bodyVars ?? {})['butt_other'] = ((s as any).bodyVars['butt_other'] ?? 0) + (1);
    scene.text('Feels like your butt has grown slightly.');
  }
  return;
  // TODO-QSP: end
  scene.text(`<br><br>Error: The drug given: ${((s as any).locArgs?.[0] ?? '')}, does not exist or is missing. Please report this and a small part of the text of the current scene as a bug.<br>`);
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
    case 'pain_relief':
      enterPainRelief(s, scene);
      break;
    case 'alcohol':
      enterAlcohol(s, scene);
      break;
    case 'caffeine':
      enterCaffeine(s, scene);
      break;
    case 'caffeine_cikl':
      enterCaffeineCikl(s, scene);
      break;
    case 'caffeine_hourly_events':
      enterCaffeineHourlyEvents(s, scene);
      break;
    case 'caffeine_stat':
      enterCaffeineStat(s, scene);
      break;
    case 'smoke':
      enterSmoke(s, scene);
      break;
    case 'cigarette_hourly_events':
      enterCigaretteHourlyEvents(s, scene);
      break;
    case 'weed':
      enterWeed(s, scene);
      break;
    case 'weed_hourly_events':
      enterWeedHourlyEvents(s, scene);
      break;
    case 'amphetamine':
      enterAmphetamine(s, scene);
      break;
    case 'amphetamine_hourly_events':
      enterAmphetamineHourlyEvents(s, scene);
      break;
    case 'amphetamine_stat':
      enterAmphetamineStat(s, scene);
      break;
    case 'cocaine':
      enterCocaine(s, scene);
      break;
    case 'cocaine_cikl':
      enterCocaineCikl(s, scene);
      break;
    case 'cocaine_hourly_events':
      enterCocaineHourlyEvents(s, scene);
      break;
    case 'cocaine_stat':
      enterCocaineStat(s, scene);
      break;
    case 'heroin':
      enterHeroin(s, scene);
      break;
    case 'heroin_hourly_events':
      enterHeroinHourlyEvents(s, scene);
      break;
    case 'heroin_stat':
      enterHeroinStat(s, scene);
      break;
    case 'painkiller':
      enterPainkiller(s, scene);
      break;
    case 'add_painkiller_timer':
      enterAddPainkillerTimer(s, scene);
      break;
    case 'count_painkiller_timer':
      enterCountPainkillerTimer(s, scene);
      break;
    case 'refresh_painkiller_timer':
      enterRefreshPainkillerTimer(s, scene);
      break;
    case 'painkiller_act_str':
      enterPainkillerActStr(s, scene);
      break;
    case 'painkiller_cikl':
      enterPainkillerCikl(s, scene);
      break;
    case 'painkiller_hourly_events':
      enterPainkillerHourlyEvents(s, scene);
      break;
    case 'painkiller_stat':
      enterPainkillerStat(s, scene);
      break;
    case 'aphrodisiac':
      enterAphrodisiac(s, scene);
      break;
    case 'aphrodisiac_cikl':
      enterAphrodisiacCikl(s, scene);
      break;
    case 'aphrodisiac_hourly_events':
      enterAphrodisiacHourlyEvents(s, scene);
      break;
    case 'mentats':
      enterMentats(s, scene);
      break;
    case 'mentats_cikl':
      enterMentatsCikl(s, scene);
      break;
    case 'steroids':
      enterSteroids(s, scene);
      break;
    case 'steroids_cikl':
      enterSteroidsCikl(s, scene);
      break;
    case 'steroids_hourly_events':
      enterSteroidsHourlyEvents(s, scene);
      break;
    case 'breastcream':
      enterBreastcream(s, scene);
      break;
    case 'breastcream_cikl':
      enterBreastcreamCikl(s, scene);
      break;
    case 'hair_extensioncream':
      enterHairExtensioncream(s, scene);
      break;
    case 'hair_extensioncream_cikl':
      enterHairExtensioncreamCikl(s, scene);
      break;
    case 'butt_injection':
      enterButtInjection(s, scene);
      break;
    case 'butt_injection_cikl':
      enterButtInjectionCikl(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const drugs: LocationDef = {
  name: 'drugs',
  title: '<br>Developer note: The type of alcohol: () is missing in th',
  region: 'other',
  enter: enter,
};
