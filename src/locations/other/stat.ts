import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterComputeStatDisplay(s: GameState, scene: SceneBuilder): void {
  if (((s as any).magik_alert_loc ?? 0) !== ''  &&  ((s as any).loc ?? 0) === ((s as any).magik_alert_loc ?? 0)) {
    qspCall(s, 'stat_display_compute', 'queue_alert', 'You feel a strength revealed within you, brimming with magic at level ' + ((s as any).pcs_magik ?? 0) + '!', 'pos');
  }
  if (((s as any).HotelRoom ?? 0)?.['pav'] > 0) {
    if (((s as any).hotelRoomDays ?? 0)?.['pav'] - 1 === ((s as any).daystart ?? 0)) {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['hotel_pav'] = 'You have 1 night left on your Pavlosk hotel booking.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'hotel_pav');
    } else {
      if (((s as any).hotelRoomDays ?? 0)?.['pav'] === ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) < 11) {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['hotel_pav'] = 'Your room at the Pavlosk hotel checks out today at ' + qspFunc(s, 'time', 'get_time_string', 11, 0) + '.';
        qspCall(s, 'stat_display_compute', 'queue_msg', 'hotel_pav', 'neg');
        // TODO-QSP: gs 'stat_display_compute', 'queue_alert', $stat_texts['hotel_pav'], 'neg'
      }
    }
  }
  if (((s as any).HotelRoom ?? 0)?.['city'] > 0) {
    if (((s as any).hotelRoomDays ?? 0)?.['city'] - 1 === ((s as any).daystart ?? 0)) {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['hotel_city'] = 'You have 1 night left on your St Petersburg hotel booking.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'hotel_city');
    } else {
      if (((s as any).hotelRoomDays ?? 0)?.['city'] === ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) < 11) {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['hotel_city'] = 'Your room at the St Petersburg hotel checks out today at ' + qspFunc(s, 'time', 'get_time_string', 11, 0) + '.';
        qspCall(s, 'stat_display_compute', 'queue_msg', 'hotel_city', 'neg');
        // TODO-QSP: gs 'stat_display_compute', 'queue_alert', $stat_texts['hotel_city'], 'neg'
      }
    }
  }
  if (((s as any).cheat_death_alert ?? 0) !== '') {
    qspCall(s, 'stat_display_compute', 'queue_alert', ((s as any).cheat_death_alert ?? 0), 'v_neg');
  }
  if (((s as any).sucabs_queued_alert ?? 0) !== '') {
    qspCall(s, 'stat_display_compute', 'queue_alert', ((s as any).sucabs_queued_alert ?? 0));
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterApplyCaps(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_vag = Math.max(0, Math.min(36, ((s as any).pcs_vag ?? 0)));
  (s as any).pcs_ass = Math.max(0, Math.min(36, ((s as any).pcs_ass ?? 0)));
  (s as any).pcs_throat = Math.max(0, Math.min(36, ((s as any).pcs_throat ?? 0)));
  (s as any).pcs_inhib = Math.max(0, Math.min(100, ((s as any).pcs_inhib ?? 0)));
  (s as any).pcs_sweat = Math.max(0, Math.min(69, ((s as any).pcs_sweat ?? 0)));
  (s as any).pcs_sleep = Math.min(100, ((s as any).pcs_sleep ?? 0));
  (s as any).min_arousal = Math.max(0, ((s as any).min_arousal ?? 0));
  (s as any).willpowermax = Math.max(50, ((s as any).willpowermax ?? 0));
  (s as any).healthmax = Math.max(1, ((s as any).pcs_vital ?? 0) * 10 + ((s as any).pcs_stren ?? 0) * 5);
  (s as any).manamax = Math.max(1, (((s as any).pcs_intel ?? 0) + 100) * ((s as any).pcs_magik ?? 0) + ((s as any).pcs_vital ?? 0) * 10 + ((s as any).rikudo ?? 0));
  ((s as any).stammax = (s as any).stammax ?? {})['base'] = (30 * (2 * ((s as any).pcs_vital ?? 0) + ((s as any).pcs_agil ?? 0) + ((s as any).pcs_stren ?? 0)) + 1000) / 13;
  (s as any).stammax = Math.max(1, Math.max((((s as any).stammax ?? {})?.['base'] ?? 0) / 10, (((s as any).stammax ?? {})?.['base'] ?? 0) - ((s as any).pregChem ?? 0) / 10));
  (s as any).pcs_horny = Math.max(Math.max(((((s as any).daystart ?? 0) <= ((s as any).fairycurse ?? 0)  &&  ((s as any).fairyshoo ?? 0) > 0) ? (90) : (0)), ((s as any).min_arousal ?? 0)), ((s as any).pcs_horny ?? 0));
  (s as any).pcs_willpwr = Math.max(0, Math.min(((s as any).willpowermax ?? 0), ((s as any).pcs_willpwr ?? 0)));
  (s as any).pcs_health = Math.min(((s as any).healthmax ?? 0), ((s as any).pcs_health ?? 0));
  (s as any).pcs_mana = Math.min(((s as any).manamax ?? 0), ((s as any).pcs_mana ?? 0));
  (s as any).pcs_stam = Math.min(((s as any).stammax ?? 0), ((s as any).pcs_stam ?? 0));
  if (((s as any).arch_vars ?? 0)?.['main_active'] === 'prude') {
    (s as any).pcs_faith = Math.min(100, ((s as any).pcs_faith ?? 0));
  } else {
    (s as any).pcs_faith = 100;
  }
  (s as any).dom_net = ((s as any).pcs_dom ?? 0) - ((s as any).sub ?? 0);
  if (((s as any).dom_net ?? 0) >= 0) {
    (s as any).pcs_dom = ((s as any).dom_net ?? 0);
    (s as any).sub = 0;
  } else {
    (s as any).pcs_dom = 0;
    (s as any).sub = -((s as any).dom_net ?? 0);
  }
  (s as any).pcs_dom = Math.min(100, ((s as any).pcs_dom ?? 0));
  (s as any).sub = Math.min(100, ((s as any).sub ?? 0));
  if (((s as any).cheatVars ?? 0)?.['std'] === 1) {
    qspCall(s, 'cheatmenu_din', 'std_cure');
  }
  if (((s as any).cheatVars ?? 0)?.['no_periods'] === 1  ||  ((s as any).succubusflag ?? 0) === 1) {
    qspCall(s, 'cheatmenu_din', 'set_no_periods');
  }
  if (((s as any).cheatVars ?? 0)?.['inf_willpower'] === 1) {
    (s as any).pcs_willpwr = ((s as any).willpowermax ?? 0);
  }
  if (((s as any).cheatVars ?? 0)?.['always_brushed'] === 1) {
    (s as any).pcs_hairbsh = 1;
  }
  if (((s as any).cheatVars ?? 0)?.['enema'] === 1) {
    (s as any).klismaday = ((s as any).daystart ?? 0);
    (s as any).klismaday1 = 1;
  }
  if (((s as any).cheatVars ?? 0)?.['no_sweat'] === 1) {
    (s as any).pcs_sweat = 0;
  }
  if (((s as any).cheatVars ?? 0)?.['hunger'] === 1) {
    (s as any).pcs_energy = Math.max(60, ((s as any).pcs_energy ?? 0));
  }
  if (((s as any).cheatVars ?? 0)?.['no_leghair'] === 1) {
    (s as any).pcs_leghair = 0;
  }
  if (((s as any).cheatVars ?? 0)?.['thirst'] === 1) {
    (s as any).pcs_hydra = Math.max(60, ((s as any).pcs_hydra ?? 0));
  }
  if (((s as any).cheatVars ?? 0)?.['sleep'] === 1) {
    (s as any).pcs_sleep = Math.max(35, ((s as any).pcs_sleep ?? 0));
  }
  if (((s as any).cheatVars ?? 0)?.['always_horny'] === 1) {
    (s as any).pcs_horny = Math.max(50, ((s as any).pcs_horny ?? 0));
  }
  if (((s as any).cheatVars ?? 0)?.['makeup_smear'] === 1) {
    if (((s as any).cosmetic_tattoo ?? 0) === 0  &&  (!((s as any).pcs_makeup ?? 0))) {
      (s as any).pcs_makeup = 1;
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSuccubusNutrition(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).sparrvol ?? {}).length > 0) {
    (s as any).suctempi = 0;
    // TODO-QSP: :SuccAbsorbLoop
    if (((s as any).sparrvol ?? 0)?.[String((s as any).suctempi ?? 0)] > 0) {
      (s as any).suctemploc = ((s as any).sparrloc ?? 0)?.[String((s as any).suctempi ?? 0)];
      if ((((s as any).suctemploc ?? 0) <= 1  ||  ((s as any).suctemploc ?? 0) === 3  ||  ((s as any).suctemploc ?? 0) === 4  ||  ((s as any).suctemploc ?? 0) >= 8)) {
        (s as any).cumsumbod = ((s as any).cumsumbod ?? 0) - (((s as any).sparrvol ?? 0)?.[String((s as any).suctempi ?? 0)]);
        (s as any).scfeed = ((s as any).succublvl ?? 0) + (Math.floor(Math.random() * 4) + 1);
        (s as any).sexnutrition = ((s as any).sexnutrition ?? 0) + (30 * ((s as any).scfeed ?? 0));
        (s as any).succubxp = ((s as any).succubxp ?? 0) + (5);
        (s as any).sucabscum = 1;
        qspCall(s, 'cum_cleanup', 'cleandeposit', ((s as any).suctempi ?? 0));
        ((s as any).cumloc = (s as any).cumloc ?? {})[String((s as any).suctemploc ?? 0)] = 0;
      }
    }
    (s as any).suctempi = ((s as any).suctempi ?? 0) - (1);
    if (((s as any).suctempi ?? 0) >= 0) {
      // TODO-QSP: jump 'SuccAbsorbLoop'
    }
    (s as any).cumspclnt = 20;
    qspCall(s, 'cum_cleanup', '');
  }
  if (((s as any).sexnutrition ?? 0) > 0) {
    if (((s as any).sucskill ?? 0) >= 3  &&  ((s as any).succublvl ?? 0) >= 2) {
      (s as any).sexnutrition = ((s as any).sexnutrition ?? 0) + ((((s as any).sexnutrition ?? 0) * 2) / 10);
    }
    if (((s as any).sucabslez ?? 0) === 1  &&  ((s as any).sucabscum ?? 0) === 1) {
      (s as any).sucabsmsg = 'absorbed energy from the woman you had sex with and you absorb the semen in your body';
    } else {
      if (((s as any).sucabscum ?? 0) === 1) {
        (s as any).sucabsmsg = 'absorb the semen in your body';
      } else {
        if (((s as any).sucabslez ?? 0) === 1) {
          (s as any).sucabsmsg = 'absorbed energy from the woman you had sex with';
        } else {
          (s as any).sucabs_queued_alert = 'SOMETHING HAPPENED! (succubus debug: no absorption source)';
        }
      }
    }
    if (((s as any).sucabsmsg ?? 0) !== '') {
      (s as any).sucabs_queued_alert = 'You ' + ((s as any).sucabsmsg ?? 0) + ', gaining nourishment.';
    }
    (s as any).sucabslez = 0;
    (s as any).sucabscum = 0;
    // TODO-QSP: gs 'mood', 'raise', 5 * pcs_mood / 100
    if (((s as any).pcs_energy ?? 0) > 100) {
      (s as any).entemp = (((s as any).pcs_energy ?? 0) - 100);
    }
    if (((s as any).sucexcess ?? 0) < 0  &&  ((s as any).sexnutrition ?? 0) > 20  &&  ((s as any).pcs_energy ?? 0) > 30) {
      if (((s as any).sexnutrition ?? 0) - 20 >= (0 - ((s as any).sucexcess ?? 0)) * 2) {
        (s as any).sexnutrition = ((s as any).sexnutrition ?? 0) + (((s as any).sucexcess ?? 0) * 2);
        (s as any).sucexcess = 0;
      } else {
        (s as any).sucexcess = ((s as any).sucexcess ?? 0) + ((((s as any).sexnutrition ?? 0) - 20) / 2);
        (s as any).sexnutrition = 20;
      }
    }
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (((s as any).sexnutrition ?? 0) / 2);
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (((s as any).sexnutrition ?? 0));
    (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) + (((s as any).sexnutrition ?? 0) / 20);
    if (((s as any).succhungry ?? 0) > 0) {
      (s as any).succhungry = 0;
    }
    (s as any).sexnutrition = 0;
    if (((s as any).pcs_energy ?? 0) > 100) {
      (s as any).sucexcess = ((s as any).sucexcess ?? 0) + ((((s as any).pcs_energy ?? 0) - ((s as any).entemp ?? 0) - 100));
      (s as any).pcs_energy = 100 + ((s as any).entemp ?? 0);
    }
  }
  if (((s as any).pcs_energy ?? 0) < 0) {
    if (((s as any).fat ?? 0) >= 1) {
      if (((s as any).cheatVars ?? 0)?.['fat'] === 0) {
        (s as any).fat = ((s as any).fat ?? 0) - (2);
      }
      (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (8 + ((s as any).succublvl ?? 0));
    } else {
      (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (8 + ((s as any).succublvl ?? 0));
      (s as any).sucexcess = ((s as any).sucexcess ?? 0) - ((8 + ((s as any).succublvl ?? 0)) * (6 - ((s as any).succublvl ?? 0)));
    }
  }
  if (((s as any).pcs_health ?? 0) < 0) {
    (s as any).pcs_health = 10;
    (s as any).sucexcess = ((s as any).sucexcess ?? 0) - (25 * (9 - ((s as any).succublvl ?? 0)));
  }
  if (((s as any).pcs_willpwr ?? 0) < 0) {
    (s as any).pcs_willpwr = 10;
    (s as any).sucexcess = ((s as any).sucexcess ?? 0) - (20 * (9 - ((s as any).succublvl ?? 0)));
    (s as any).sucpowzeroed = 4;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterApplyStretch(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).analplay ?? 0) >= 2  &&  ((s as any).pcs_ass ?? 0) <= 10)  ||  (((s as any).analplay ?? 0) >= 4  &&  ((s as any).pcs_ass ?? 0) <= 15)  ||  (((s as any).analplay ?? 0) >= 8  &&  ((s as any).pcs_ass ?? 0) <= 20)) {
    // TODO-QSP: gs 'arousal_funcs', 'stretch', 'anal', 1 & analplay = 0
  }
  if (((s as any).succubusflag ?? 0) === 1  &&  ((s as any).sucskill ?? 0) >= 4) {
    if (((s as any).pain ?? 0)?.['throat'] > 0) {
      ((s as any).pain = (s as any).pain ?? {})['throat'] = 0;
      (s as any).sucexcess = ((s as any).sucexcess ?? 0) - (1);
    }
    if (((s as any).pain ?? 0)?.['asshole'] > 0) {
      ((s as any).pain = (s as any).pain ?? {})['asshole'] = 0;
      (s as any).sucexcess = ((s as any).sucexcess ?? 0) - (1);
    }
    if (((s as any).pain ?? 0)?.['vaginal'] > 0) {
      ((s as any).pain = (s as any).pain ?? {})['vaginal'] = 0;
      (s as any).sucexcess = ((s as any).sucexcess ?? 0) - (1);
    }
    if (((s as any).vgape ?? 0) > 0) {
      (s as any).vgape = 0;
      (s as any).vgapetime = 0;
      (s as any).sucexcess = ((s as any).sucexcess ?? 0) - (1);
    }
    if (((s as any).agape ?? 0) > 0) {
      (s as any).agape = 0;
      (s as any).agapetime = 0;
      (s as any).sucexcess = ((s as any).sucexcess ?? 0) - (1);
    }
  }
  if (((s as any).agape ?? 0)[4] === 0) {
    ((s as any).agape = (s as any).agape ?? {})[4] = 10;
  }
  if (((s as any).vgape ?? 0)[4] === 0) {
    ((s as any).vgape = (s as any).vgape ?? {})[4] = 10;
  }
  if (((s as any).trait_vars ?? 0)?.['elasticity'] < 0) {
    ((s as any).agape = (s as any).agape ?? {})[5] = ((s as any).agape ?? 0)[4] * 5;
    ((s as any).vgape = (s as any).vgape ?? {})[5] = ((s as any).vgape ?? 0)[4] * 5;
  } else {
    ((s as any).agape = (s as any).agape ?? {})[5] = qspUntranslated(s, "agape[4]", { location: "stat" });
    ((s as any).vgape = (s as any).vgape ?? {})[5] = qspUntranslated(s, "vgape[4]", { location: "stat" });
  }
  if (((s as any).vgape ?? 0) > ((s as any).vgape ?? 0)[1]) {
    ((s as any).vgape = (s as any).vgape ?? {})[3] = ((s as any).totminut ?? 0);
    ((s as any).vgape = (s as any).vgape ?? {})[1] = ((s as any).vgape ?? 0);
  } else {
    if (((s as any).vgape ?? 0) > 0) {
      if ((((s as any).totminut ?? 0) - ((s as any).vgape ?? 0)[3])/((s as any).vgape ?? 0)[5] >= 1) {
        (s as any).vgape = ((s as any).vgape ?? 0) - (1);
      }
      ((s as any).vgape = (s as any).vgape ?? {})[1] = ((s as any).vgape ?? 0);
    } else {
      ((s as any).vgape = (s as any).vgape ?? {})[3] = 0;
    }
  }
  if (((s as any).agape ?? 0) > ((s as any).agape ?? 0)[1]) {
    ((s as any).agape = (s as any).agape ?? {})[3] = ((s as any).totminut ?? 0);
    ((s as any).agape = (s as any).agape ?? {})[1] = ((s as any).agape ?? 0);
  } else {
    if (((s as any).agape ?? 0) > 0) {
      if ((((s as any).totminut ?? 0) - ((s as any).agape ?? 0)[3])/((s as any).agape ?? 0)[5] >= 1) {
        (s as any).agape = ((s as any).agape ?? 0) - (1);
      }
      if ((!((s as any).agape ?? 0))) {
        ((s as any).agape = (s as any).agape ?? {})[3] = 0;
      }
      ((s as any).agape = (s as any).agape ?? {})[1] = ((s as any).agape ?? 0);
    } else {
      ((s as any).agape = (s as any).agape ?? {})[3] = 0;
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enter15MinuteLoop(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: :Trig15MinuteLoop
  (s as any).flash_heat = Math.max(0, ((s as any).flash_heat ?? 0) - 2);
  qspCall(s, 'mood', 'update');
  (s as any).hornystat = 0;
  if (((s as any).pcs_piercings ?? 0)?.['ears']  > 0) {
    (s as any).hornystat = ((s as any).hornystat ?? 0) + (1);
  }
  if (((s as any).pcs_piercings ?? 0)?.['nose']  > 0) {
    (s as any).hornystat = ((s as any).hornystat ?? 0) + (1);
  }
  if (((s as any).pcs_piercings ?? 0)?.['brow']  > 0) {
    (s as any).hornystat = ((s as any).hornystat ?? 0) + (1);
  }
  if (((s as any).pcs_piercings ?? 0)?.['lip']    > 0) {
    (s as any).hornystat = ((s as any).hornystat ?? 0) + (1);
  }
  if (((s as any).pcs_piercings ?? 0)?.['tongue']  > 0) {
    (s as any).hornystat = ((s as any).hornystat ?? 0) + (1);
  }
  if (((s as any).pcs_piercings ?? 0)?.['navel']  > 0) {
    (s as any).hornystat = ((s as any).hornystat ?? 0) + (1);
  }
  if (((s as any).pcs_piercings ?? 0)?.['nipples']  > 0) {
    (s as any).hornystat = ((s as any).hornystat ?? 0) + (4);
  }
  if (((s as any).pcs_piercings ?? 0)?.['pussy']  > 0) {
    (s as any).hornystat = ((s as any).hornystat ?? 0) + (4);
  }
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + ((((s as any).hornystat ?? 0) + 2) / 4);
  if (((s as any).vibratorin ?? 0) === 1) {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 5) + 1);
  }
  if (((s as any).PCloStyle ?? 0) === 4  ||  ((s as any).PCloProstitute ?? 0) === 1) {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 3) + 0);
  }
  if (((s as any).PCloTopCut ?? 0) === 4) {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 2) + 0);
  }
  if (((s as any).PCloSkirt ?? 0) > 5) {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 2) + 0);
  }
  if (((s as any).PCloPants ?? 0) > 5) {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 2) + 0);
  }
  if (((s as any).succubusflag ?? 0) === 1) {
    if (((s as any).trait_vars ?? 0)?.['cum_addict'] > 0) {
      qspCall(s, 'therapist', 'restTherapyVariables');
    }
    if (((s as any).pcs_horny ?? 0)  < 50) {
      (s as any).pcs_horny = 50;
    }
    if (((s as any).pcs_horny ?? 0)  < 100) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (((s as any).succublvl ?? 0));
    }
    if (((s as any).succhungry ?? 0)   > 0) {
      (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) - (((s as any).succhungry ?? 0) * ((s as any).succublvl ?? 0));
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (((s as any).succhungry ?? 0) * ((s as any).succublvl ?? 0));
      (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) - (((s as any).succhungry ?? 0) * ((s as any).succublvl ?? 0));
    }
  }
  if (((s as any).arch_vars ?? 0)?.['main_active'] === 'prude') {
    if ((Math.floor(Math.random() * 5) + 1) <= 2) {
      (s as any).pcs_faith = ((s as any).pcs_faith ?? 0) - (1);
    }
  }
  (s as any).Trig15Minute = ((s as any).Trig15Minute ?? 0) + (15);
  if ((((s as any).totminut ?? 0) - ((s as any).Trig15Minute ?? 0)) >= 15) {
    // TODO-QSP: jump 'Trig15MinuteLoop'
  }
  return;
  // TODO-QSP: end
  if (((s as any).opPRE ?? 0) > 0) {
    // TODO-QSP: exit
  }
  if (((s as any).daystart_start ?? 0) < 100) {
    // TODO-QSP: pl '<br>Did you start at the <a href="exec:daystart_start = 239 & gs ''time'' & gs''stat''">end of A...
    return;
  }
  (s as any).BACKIMAGE = '';
  // TODO-QSP: view
  if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic') {
    (s as any).magik_exp = ((s as any).orgasm ?? 0) + ((s as any).magik_adj ?? 0);
  }
  qspCall(s, 'archetypes', 'loop');
  qspCall(s, 'traits', 'minute');
  if ((!((s as any).inSleep ?? 0))) {
    qspCall(s, 'stat_sklattrib', '');
  }
  if (((s as any).pcs_hydra ?? 0) > ((s as any).hydra_check ?? 0)) {
    (s as any).cumspclnt = 2;
    qspCall(s, 'cum_cleanup', '');
  }
  if (((s as any).alko ?? 0) > 0  &&  ((s as any).frost ?? 0) > 0) {
    (s as any).frost = 0;
  }
  if (((s as any).lernSkill ?? 0) >= 8) {
    qspCall(s, 'exp_gain', 'intel', 1);
    (s as any).lernSkill = 0;
  }
  if (((s as any).lern ?? 0) >= 10) {
    qspCall(s, 'exp_gain', 'intel', 1);
    (s as any).lern = 0;
  }
  (s as any).cumSUM = ((s as any).cumsumbod ?? 0)/40;
  if (((s as any).husID ?? 0) !== '') {
    if (((s as any).spouseVars ?? 0)?.['pervert_add'] > 5) {
      ((s as any).npc_pervert = (s as any).npc_pervert ?? {})[String((s as any).husID ?? 0)] = 1;
    }
    if (((s as any).spouseVars ?? 0)?.['gentle_add'] > 10) {
      ((s as any).npc_gentle = (s as any).npc_gentle ?? {})[String((s as any).husID ?? 0)] = 1;
      ((s as any).npc_rough = (s as any).npc_rough ?? {})[String((s as any).husID ?? 0)] = 0;
    }
  }
  if (((s as any).food_loc_last ?? 0) !== ((s as any).loc ?? 0)) {
  }
  if (((s as any).gopota ?? 0) >= 20  &&  ((s as any).gnewQW ?? 0) === 1) {
    (s as any).gnewQW = 2;
  }
  qspCall(s, 'brother', 'brotherSexCount');
  if (((s as any).karta ?? 0) - ((s as any).bankDebtLimit ?? 0) < 10000) {
    (s as any).bank_last_less_than_10k = ((s as any).daystart ?? 0);
  }
  if (((s as any).karta ?? 0) - ((s as any).bankDebtLimit ?? 0) < 100000) {
    (s as any).bank_last_less_than_100k = ((s as any).daystart ?? 0);
  }
  if (((s as any).orgasm ?? 0) > ((s as any).orgasm_count ?? 0)) {
    (s as any).temp_orgasm = ((s as any).temp_orgasm ?? 0) + (((s as any).orgasm ?? 0) - ((s as any).orgasm_count ?? 0));
    // TODO-QSP: gs 'mood', 'raise', 30 / temp_orgasm
    (s as any).orgasm_count = ((s as any).orgasm ?? 0);
  }
  if (((s as any).succubusflag ?? 0) === 1  &&  ((s as any).succublvl ?? 0) > 2  &&  ((s as any).stat ?? 0)?.['rape_count'] !== ((s as any).rape_count ?? 0)) {
    ((s as any).stat = (s as any).stat ?? {})['rape_count'] = ((s as any).rape_count ?? 0);
  } else {
    if (((s as any).stat ?? 0)?.['rape_count'] !== ((s as any).rape_count ?? 0)) {
      qspCall(s, 'mood', 'lower', 'min');
      // TODO-QSP: gs 'mood', 'raise_trauma', (stat['rape_count'] - rape_count) * 3
      (s as any).rape_count = ((s as any).stat ?? 0)?.['rape_count'];
      (s as any).rape_day = ((s as any).daystart ?? 0);
    }
  }
  if (((s as any).stat ?? 0)?.['vaginal'] === 0  &&  ((s as any).stat ?? 0)?.['vaginal_fist'] === 0  &&  ((s as any).stat ?? 0)?.['vaginal_dildo'] === 0  &&  ((s as any).stat ?? 0)?.['vaginal_strap'] === 0  &&  ((s as any).tatiana ?? 0)?.['virginity_restore'] === 0) {
    ((s as any).stat = (s as any).stat ?? {})['think_virgin'] = 1;
  } else {
    ((s as any).stat = (s as any).stat ?? {})['think_virgin'] = 0;
  }
  ((s as any).stat = (s as any).stat ?? {})['vaginal'] = ((s as any).stat['vaginal'] ?? 0) + (((s as any).sex ?? 0));
  (s as any).sex = 0;
  ((s as any).stat = (s as any).stat ?? {})['anal'] = ((s as any).stat['anal'] ?? 0) + (((s as any).anal ?? 0));
  (s as any).anal = 0;
  (s as any).temp_rape_count = ((s as any).stat ?? 0)?.['rape_count'];
  (s as any).temp_rape_this_tick = 0;
  (s as any).temp_base_act_fired = 0;
  (s as any).temp_prev_last_sex_day = ((s as any).stat ?? 0)?.['last_sex_day'];
  (s as any).temp_vaginal = ((s as any).stat ?? 0)?.['vaginal'];
  if (((s as any).temp_vaginal ?? 0) > ((s as any).stat_seen_vaginal ?? 0)) {
    ((s as any).stat = (s as any).stat ?? {})['last_sex_day'] = ((s as any).daystart ?? 0);
    ((s as any).stat = (s as any).stat ?? {})['last_sex_day_vaginal'] = ((s as any).daystart ?? 0);
    if ((!((s as any).temp_rape_this_tick ?? 0))) {
      qspCall(s, 'archetypes', 'sex_change', 250, (-2000), 'Vaginal sex');
      (s as any).temp_base_act_fired = 1;
    }
  }
  (s as any).stat_seen_vaginal = ((s as any).temp_vaginal ?? 0);
  (s as any).temp_anal = ((s as any).stat ?? 0)?.['anal'];
  if (((s as any).temp_anal ?? 0) > ((s as any).stat_seen_anal ?? 0)) {
    ((s as any).stat = (s as any).stat ?? {})['last_sex_day'] = ((s as any).daystart ?? 0);
    ((s as any).stat = (s as any).stat ?? {})['last_sex_day_anal'] = ((s as any).daystart ?? 0);
    if ((!((s as any).temp_rape_this_tick ?? 0))) {
      qspCall(s, 'archetypes', 'sex_change', 300, (-2400), 'Anal sex');
      (s as any).temp_base_act_fired = 1;
    }
  }
  (s as any).stat_seen_anal = ((s as any).temp_anal ?? 0);
  (s as any).temp_oral = (((s as any).stat ?? {})?.['bj'] ?? 0) + (((s as any).stat ?? {})?.['cuni'] ?? 0);
  if (((s as any).temp_oral ?? 0) > ((s as any).stat_seen_oral ?? 0)) {
    ((s as any).stat = (s as any).stat ?? {})['last_sex_day'] = ((s as any).daystart ?? 0);
    ((s as any).stat = (s as any).stat ?? {})['last_sex_day_oral'] = ((s as any).daystart ?? 0);
    if ((!((s as any).temp_rape_this_tick ?? 0))) {
      qspCall(s, 'archetypes', 'sex_change', 150, (-1200), 'Oral sex');
      (s as any).temp_base_act_fired = 1;
    }
  }
  (s as any).stat_seen_oral = ((s as any).temp_oral ?? 0);
  if (((s as any).temp_base_act_fired ?? 0) === 1) {
    if (((s as any).daystart ?? 0) - ((s as any).temp_prev_last_sex_day ?? 0) >= ((s as any).arch_const ?? 0)?.['sex_chastity_days']) {
      // TODO-QSP: gs 'archetypes', 'change', 0, 0, -arch_const['sex_chastity_bonus_prude'], 0, 0, 1, 'story', 'Breakin...
    }
  }
  (s as any).temp_mast = ((s as any).stat ?? 0)?.['mast'];
  if (((s as any).temp_mast ?? 0) > ((s as any).stat_seen_mast ?? 0)) {
    ((s as any).stat = (s as any).stat ?? {})['last_mast_day'] = ((s as any).daystart ?? 0);
  }
  (s as any).stat_seen_mast = ((s as any).temp_mast ?? 0);
  if (((s as any).temp_rape_count ?? 0) > ((s as any).stat_seen_rape ?? 0)) {
    ((s as any).stat = (s as any).stat ?? {})['last_sex_day'] = ((s as any).daystart ?? 0);
    ((s as any).stat = (s as any).stat ?? {})['last_sex_day_rape'] = ((s as any).daystart ?? 0);
  }
  (s as any).stat_seen_rape = ((s as any).temp_rape_count ?? 0);
  (s as any).temp_gangbang = ((s as any).stat ?? 0)?.['gangbang_count'];
  if (((s as any).temp_gangbang ?? 0) > ((s as any).stat_seen_gangbang ?? 0)) {
    if ((!((s as any).temp_rape_this_tick ?? 0))) {
      qspCall(s, 'archetypes', 'sex_change', 600, (-4000), 'Gangbang');
    }
  }
  (s as any).stat_seen_gangbang = ((s as any).temp_gangbang ?? 0);
  (s as any).temp_prostitution = ((s as any).stat ?? 0)?.['prostitution_count'];
  if (((s as any).temp_prostitution ?? 0) > ((s as any).stat_seen_prostitution ?? 0)) {
    if ((!((s as any).temp_rape_this_tick ?? 0))) {
      qspCall(s, 'archetypes', 'sex_change', 500, (-2400), 'Prostitution');
    }
  }
  (s as any).stat_seen_prostitution = ((s as any).temp_prostitution ?? 0);
  (s as any).shameless = (((s as any).stat ?? {})?.['men_fucked'] ?? 0) + (((s as any).stat ?? {})?.['bj'] ?? 0) + (((s as any).stat ?? {})?.['anal'] ?? 0) + (((s as any).stat ?? {})?.['hj'] ?? 0) + (((((s as any).stat ?? {})?.['prostitution_count'] ?? 0) + (((s as any).stat ?? {})?.['gangbang_count'] ?? 0)) * 2);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterApplyCaps(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'time', '');
  qspCall(s, 'outdoors', 'weather');
  if (((s as any).daystage ?? 0) === 1) {
    ((s as any).daystage = (s as any).daystage ?? {})['desc'] = 'dawn';
  } else {
    if (((s as any).daystage ?? 0) === 2) {
      ((s as any).daystage = (s as any).daystage ?? {})['desc'] = 'mid_day';
    } else {
      if (((s as any).daystage ?? 0) === 3) {
        ((s as any).daystage = (s as any).daystage ?? {})['desc'] = 'sunset';
      } else {
        if (((s as any).daystage ?? 0) === 4) {
          ((s as any).daystage = (s as any).daystage ?? {})['desc'] = 'early_night';
        } else {
          if (((s as any).daystage ?? 0) === 5) {
            ((s as any).daystage = (s as any).daystage ?? {})['desc'] = 'mid_night';
          } else {
            if (((s as any).daystage ?? 0) === 6) {
              ((s as any).daystage = (s as any).daystage ?? {})['desc'] = 'pre_dawn';
            }
          }
        }
      }
    }
  }
  if (((s as any).prevtotmin ?? 0) !== ((s as any).totminut ?? 0)) {
    qspCall(s, 'spellTimer', '', ((s as any).prevtotmin ?? 0), ((s as any).totminut ?? 0));
    if (((s as any).deodorant_on ?? 0) === 1  &&  ((s as any).totminut ?? 0) > ((s as any).deodorant_time ?? 0)) {
      qspCall(s, 'sweat', 'remove_deo');
    }
    if (((s as any).spanked ?? 0) > 0) {
      if ((!((s as any).spankedtime ?? 0))) {
        (s as any).spankedtime = ((s as any).totminut ?? 0);
      }
      if ((((s as any).spankedtime ?? 0) + 2040) <= ((s as any).totminut ?? 0)) {
        (s as any).spanked = ((s as any).spanked ?? 0) - (1);
        (s as any).spankedtime = 0;
      }
    } else {
      if (((s as any).spankedtime ?? 0) !== 0) {
      }
    }
    if (((s as any).orgasmic ?? 0) !== 0) {
      if (((s as any).orgasmic ?? 0) < ((s as any).totminut ?? 0) - 30) {
        (s as any).orgasmic = 0;
        (s as any).pcs_horny = 0;
      }
    }
  }
  if (((s as any).stat ?? 0)?.['last_workout_trig'] === 1) {
    ((s as any).stat = (s as any).stat ?? {})['last_workout_trig'] = 0;
    ((s as any).stat = (s as any).stat ?? {})['last_workout'] = ((s as any).totminut ?? 0);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterApplyStretch(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: gs 'outfit', 'stat', totminut - prevtotmin
  if (((s as any).kid ?? 0) > 0) {
    (s as any).i = 0;
    // TODO-QSP: :LoopKidAgeCounter
    if (((s as any).i ?? 0) >= 0) {
      if (((s as any).yearkid ?? 0)?.[String((s as any).i ?? 0)] === ((s as any).year ?? 0) + 1  &&  ((s as any).monthkid ?? 0)?.[String((s as any).i ?? 0)] === ((s as any).month ?? 0)  &&  ((s as any).daykid ?? 0)?.[String((s as any).i ?? 0)] === ((s as any).day ?? 0)) {
        // TODO-QSP: msg 'It is <<$kidname[i]>>''s birthday today.'
      }
      (s as any).i = ((s as any).i ?? 0) - (1);
      // TODO-QSP: jump 'LoopKidAgeCounter'
    }
  }
  if (((s as any).inSleep ?? 0) !== 0  ||  ((s as any).Trig15Minute ?? 0) > ((s as any).totminut ?? 0)) {
    (s as any).Trig15Minute = ((s as any).totminut ?? 0);
  } else {
    if (((s as any).totminut ?? 0) - ((s as any).Trig15Minute ?? 0) > 1440) {
      (s as any).Trig15Minute = ((s as any).totminut ?? 0) - 1440;
    }
    if (((s as any).totminut ?? 0) - ((s as any).Trig15Minute ?? 0) >= 15) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enter15MinuteLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  if (((s as any).succubusflag ?? 0) === 1) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSuccubusNutrition(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).pcs_sleep ?? 0) < 0) {
    (s as any).pcs_sleep = 0;
    qspCall(s, 'mood', 'lower', 'tiny');
  }
  (s as any).temp_death_cause_energy = 0;
  if (((s as any).pcs_energy ?? 0) < 0) {
    (s as any).temp_death_cause_energy = 1;
    (s as any).pcs_energy = 0;
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) - (5);
    if (((s as any).pcs_mass ?? 0)?.['body'] > 0) {
      if (((s as any).cheatVars ?? 0)?.['fat'] === 0) {
        (s as any).fat = ((s as any).fat ?? 0) - (1);
      }
      (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (8);
    } else {
      if (((s as any).pcs_stren ?? 0) + ((s as any).pcs_vital ?? 0) > 0) {
        qspCall(s, 'exp_deg', 'stren', 1);
        qspCall(s, 'exp_deg', 'vital', 1);
        (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (8);
      } else {
        qspCall(s, 'gameover', 'check', 3);
        (s as any).cheat_death_alert = 'You starved to death, but Cheat Mode keeps you Alive.';
        (s as any).fat = 1;
      }
    }
  }
  (s as any).temp_death_cause_hydra = 0;
  if (((s as any).pcs_hydra ?? 0) <= 0) {
    (s as any).temp_death_cause_hydra = 1;
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) - ((Math.floor(Math.random() * (1 - ((s as any).pcs_hydra ?? 0) - 0 + 1)) + (0)));
    (s as any).pcs_hydra = 1;
  }
  (s as any).hydra_check = ((s as any).pcs_hydra ?? 0);
  if (((s as any).arch_vars ?? 0)?.['main_active'] === 'prude'  &&  ((s as any).pcs_faith ?? 0) <= 0) {
    // TODO-QSP: gs 'mood', 'lower', 3 * (1 - pcs_faith)
    qspCall(s, 'archetypes', 'lose', 'prude', 200, 'Neglecting faith');
    (s as any).pcs_faith = 1;
  }
  if (((s as any).pcs_willpwr ?? 0) <= 0  &&  ((s as any).pcs_mood ?? 0) <= 1) {
    qspCall(s, 'gameover', 'check', 2);
    (s as any).cheat_death_alert = 'You are insane, but Cheat Mode keeps you Alive.';
  }
  if (((s as any).pcs_health ?? 0) < 0) {
    if (((s as any).temp_death_cause_hydra ?? 0) === 1  &&  ((s as any).temp_death_cause_energy ?? 0) === 1) {
      qspCall(s, 'gameover', 'check', 17);
      (s as any).cheat_death_alert = 'You died of dehydration and malnutrition, but Cheat Mode keeps you Alive.';
    } else {
      if (((s as any).temp_death_cause_hydra ?? 0) === 1) {
        qspCall(s, 'gameover', 'check', 15);
        (s as any).cheat_death_alert = 'You died of dehydration, but Cheat Mode keeps you Alive.';
      } else {
        if (((s as any).temp_death_cause_energy ?? 0) === 1) {
          qspCall(s, 'gameover', 'check', 16);
          (s as any).cheat_death_alert = 'You died of malnutrition, but Cheat Mode keeps you Alive.';
        } else {
          qspCall(s, 'gameover', 'check', 1);
          (s as any).cheat_death_alert = 'You died from injuries, but Cheat Mode keeps you Alive.';
        }
      }
    }
    (s as any).pcs_health = 0;
  }
  if (((s as any).tabletkicheck ?? 0) === 2  ||  ((s as any).thinkpreg ?? 0) === 1  ||  ((s as any).knowpreg ?? 0) === 1) {
    if (((s as any).tabletkicheck ?? 0) === 1) {
      (s as any).tabletkicheck = 0;
    }
    ((s as any).birth_control = (s as any).birth_control ?? {})['remind_hour'] = 0;
    ((s as any).birth_control = (s as any).birth_control ?? {})['auto_hour'] = 0;
  }
  if (((s as any).therapistFuckedPussyStage ?? 0) > 1  &&  ((s as any).tabletkicheck ?? 0) === 1  &&  ((s as any).birth_control ?? 0)?.['auto_hour'] === 0) {
    ((s as any).birth_control = (s as any).birth_control ?? {})['auto_hour'] = 18;
  }
  if (((s as any).tabletkicheck ?? 0) === 1  &&  ((s as any).tabletkichday ?? 0) < ((s as any).daystart ?? 0)  &&  ((s as any).birth_control ?? 0)?.['auto_hour'] > 0  &&  ((s as any).hour ?? 0) >= ((s as any).birth_control ?? 0)?.['auto_hour']  &&  ((s as any).hour ?? 0) < ((s as any).birth_control ?? 0)?.['auto_hour'] + 2  &&  ((s as any).inSleep ?? 0) === 0  &&  ((s as any).menu_off ?? 0) === 0  &&  ((s as any).location_type ?? 0) !== 'event'  &&  ((s as any).location_type ?? 0) !== 'event_outdoors') {
    qspCall(s, 'fertility', 'auto_pill');
  }
  if (((s as any).pillcon ?? 0) !== ((s as any).birth_control ?? 0)?.['old_pillcon']  ||  ((s as any).pillcon2 ?? 0) !== ((s as any).birth_control ?? 0)?.['old_pillcon2']) {
    qspCall(s, 'fertility', 'birth_control_status_update');
  }
  qspCall(s, 'drugs', 'stat');
  if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic') {
    if (((s as any).pcs_magik ?? 0) > ((s as any).magikhigh ?? 0)) {
      (s as any).magikhigh = ((s as any).pcs_magik ?? 0);
      (s as any).rikudo = ((s as any).rikudo ?? 0) + (((s as any).pcs_magik ?? 0) * 100);
      (s as any).magik_alert_loc = ((s as any).loc ?? 0);
      if ((((s as any).pcs_magik ?? 0) % 2 !== 0)  &&  ((s as any).pcs_eyesize ?? 0) < 2) {
        (s as any).pcs_eyesize = ((s as any).pcs_eyesize ?? 0) + (1);
      }
      if ((((s as any).pcs_magik ?? 0) % 2 === 0)  &&  ((s as any).pcs_lashes ?? 0) < 2) {
        (s as any).pcs_lashes = ((s as any).pcs_lashes ?? 0) + (1);
      }
    } else {
      if (((s as any).magik_alert_loc ?? 0) !== ''  &&  ((s as any).loc ?? 0) !== ((s as any).magik_alert_loc ?? 0)) {
        (s as any).magik_alert_loc = '';
      }
    }
  }
  if (((s as any).cosmetic_tattoo ?? 0) > 0) {
    ((s as any).makeup = (s as any).makeup ?? {})['base'] = ((s as any).cosmetic_tattoo ?? 0) + 1;
    if (((s as any).pcs_makeup ?? 0) < ((s as any).makeup ?? 0)?.['base']) {
      (s as any).pcs_makeup = ((s as any).makeup ?? 0)?.['base'];
    }
  } else {
    ((s as any).makeup = (s as any).makeup ?? {})['base'] = 1;
  }
  qspCall(s, 'body', 'RegularUpdate');
  qspCall(s, 'body', 'Update_Appearance');
  qspCall(s, 'cum_manage', 'cum_decay');
  if (((s as any).cumcondslip ?? 0) <= 0) {
    (s as any).cumcondslip_deep = 0;
  }
  qspCall(s, 'pain', 'manage');
  if (((s as any).birth_control ?? 0)?.['remind_hour'] > 0  &&  ((s as any).birth_control ?? 0)?.['auto_hour'] === 0  &&  ((s as any).hour ?? 0) >= ((s as any).birth_control ?? 0)?.['remind_hour']  &&  ((s as any).hour ?? 0) <= ((s as any).birth_control ?? 0)?.['remind_hour'] + 1  &&  ((s as any).tabletkiday ?? 0) !== ((s as any).daystart ?? 0)) {
    ((s as any).birth_control = (s as any).birth_control ?? {})['remind_icon'] = 1;
  } else {
    ((s as any).birth_control = (s as any).birth_control ?? {})['remind_icon'] = 0;
  }
  if ((((s as any).acting ?? 0)?.['shoot_day'] === ((s as any).daystart ?? 0)  &&  ((s as any).actress_cast ?? 0) === 1)  ||  (((s as any).audition ?? 0)?.['day'] === ((s as any).daystart ?? 0))) {
    ((s as any).acting = (s as any).acting ?? {})['icon'] = 1;
  } else {
    ((s as any).acting = (s as any).acting ?? {})['icon'] = 0;
  }
  qspCall(s, 'stat_sklattrib_lvlset', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterApplyCaps(s, scene); (s as any).locArgs = __savedLocArgs; }
  if ((((s as any).inSleep ?? 0) === 0  ||  ((s as any).sleepVars ?? 0)?.['stat_display'] === 1)  &&  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('no_display') : -1) < 0) {
    qspCall(s, 'outdoors', 'main');
    qspCall(s, 'stat_display', '');
  }
  qspCall(s, 'schedule', 'Family');
  if (((s as any).prevtotmin ?? 0) !== ((s as any).totminut ?? 0)) {
    qspCall(s, 'telefon', 'IncomingSMSCheck');
  }
  if (((s as any).cheatVars ?? 0)?.['mood'] === 1) {
    qspCall(s, 'mood', 'raise', 'max');
    (s as any).mood_trauma = 0;
  }
  if (((s as any).stat_cfg ?? 0)?.['android'] === 0) {
    qspCall(s, 'obj_din', 'old');
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'compute_stat_display':
      enterComputeStatDisplay(s, scene);
      break;
    case 'apply_caps':
      enterApplyCaps(s, scene);
      break;
    case 'succubus_nutrition':
      enterSuccubusNutrition(s, scene);
      break;
    case 'apply_stretch':
      enterApplyStretch(s, scene);
      break;
    case '15_minute_loop':
      enter15MinuteLoop(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const stat: LocationDef = {
  name: 'stat',
  region: 'other',
  enter: enter,
};
