import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterComputeStatDisplay(s: GameState, scene: SceneBuilder): void {
  if (((s as any).magik_alert_loc ?? 0) !== ''  &&  ((s as any).loc ?? 0) === ((s as any).magik_alert_loc ?? 0)) {
    qspCall(s, 'stat_display_compute', 'queue_alert', 'You feel a strength revealed within you, brimming with magic at level ' + qspUntranslated(s, "pcs_magik>", { location: "stat" }) + '!', 'pos');
  }
  if (((s as any).HotelRoom ?? 0)?.['pav'] > 0) {
    if (((s as any).hotelRoomDays ?? 0)?.['pav'] - 1 === ((s as any).daystart ?? 0)) {
      (s as any).stat_texts['hotel_pav'] = 'You have 1 night left on your Pavlosk hotel booking.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'hotel_pav');
    } else {
      if (((s as any).hotelRoomDays ?? 0)?.['pav'] === ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) < 11) {
        (s as any).stat_texts['hotel_pav'] = 'Your room at the Pavlosk hotel checks out today at \' + $func(\'time\', \'get_time_string\', 11, 0) + \'.';
        qspCall(s, 'stat_display_compute', 'queue_msg', 'hotel_pav', 'neg');
        // TODO-QSP: gs 'stat_display_compute', 'queue_alert', $stat_texts['hotel_pav'], 'neg'
      }
    }
  }
  if (((s as any).HotelRoom ?? 0)?.['city'] > 0) {
    if (((s as any).hotelRoomDays ?? 0)?.['city'] - 1 === ((s as any).daystart ?? 0)) {
      (s as any).stat_texts['hotel_city'] = 'You have 1 night left on your St Petersburg hotel booking.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'hotel_city');
    } else {
      if (((s as any).hotelRoomDays ?? 0)?.['city'] === ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) < 11) {
        (s as any).stat_texts['hotel_city'] = 'Your room at the St Petersburg hotel checks out today at \' + $func(\'time\', \'get_time_string\', 11, 0) + \'.';
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
  scene.build();
}

function enterApplyCaps(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_vag = 0;
  (s as any).pcs_ass = 0;
  (s as any).pcs_throat = 0;
  (s as any).pcs_inhib = 0;
  (s as any).pcs_sweat = 0;
  (s as any).pcs_sleep = 0;
  (s as any).min_arousal = 0;
  (s as any).willpowermax = 0;
  (s as any).healthmax = Math.max(1, ((s as any).pcs_vital ?? 0) * 10 + ((s as any).pcs_stren ?? 0) * 5);
  (s as any).manamax = Math.max(1, (((s as any).pcs_intel ?? 0) + 100) * ((s as any).pcs_magik ?? 0) + ((s as any).pcs_vital ?? 0) * 10 + ((s as any).rikudo ?? 0));
  (s as any).stammax['base'] = (30 * (2 * ((s as any).pcs_vital ?? 0) + ((s as any).pcs_agil ?? 0) + ((s as any).pcs_stren ?? 0)) + 1000) / 13;
  (s as any).stammax = Math.max(1, Math.max(((s as any).stammax ?? {})?.['base'] / 10, ((s as any).stammax ?? {})?.['base'] - ((s as any).pregChem ?? 0) / 10));
  (s as any).pcs_horny = Math.max(0, ((s as any).pcs_horny ?? 0));
  (s as any).pcs_willpwr = 0;
  (s as any).pcs_health = 0;
  (s as any).pcs_mana = 0;
  (s as any).pcs_stam = 0;
  if (((s as any).arch_vars ?? 0)?.['main_active'] === 'prude') {
    (s as any).pcs_faith = 0;
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
  (s as any).pcs_dom = 0;
  (s as any).sub = 0;
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
    (s as any).pcs_energy = 0;
  }
  if (((s as any).cheatVars ?? 0)?.['no_leghair'] === 1) {
    (s as any).pcs_leghair = 0;
  }
  if (((s as any).cheatVars ?? 0)?.['thirst'] === 1) {
    (s as any).pcs_hydra = 0;
  }
  if (((s as any).cheatVars ?? 0)?.['sleep'] === 1) {
    (s as any).pcs_sleep = 0;
  }
  if (((s as any).cheatVars ?? 0)?.['always_horny'] === 1) {
    (s as any).pcs_horny = 0;
  }
  if (((s as any).cheatVars ?? 0)?.['makeup_smear'] === 1) {
    if (((s as any).cosmetic_tattoo ?? 0) === 0  &&  (!((s as any).pcs_makeup ?? 0))) {
      (s as any).pcs_makeup = 1;
    }
  }
  return;
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
        (s as any).scfeed = ((s as any).succublvl ?? 0) + ((s as any).rand ?? 0)(1, 4);
        (s as any).sexnutrition = ((s as any).sexnutrition ?? 0) + (30 * ((s as any).scfeed ?? 0));
        (s as any).succubxp = ((s as any).succubxp ?? 0) + (5);
        (s as any).sucabscum = 1;
        qspCall(s, 'cum_cleanup', 'cleandeposit', ((s as any).suctempi ?? 0));
        (s as any).cumloc[String((s as any).suctemploc ?? 0)] = 0;
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
    } else {
      if (((s as any).sucabscum ?? 0) === 1) {
      } else {
        if (((s as any).sucabslez ?? 0) === 1) {
        }
      }
    }
    if (((s as any).sucabsmsg ?? 0) !== '') {
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
  scene.build();
}

function enterApplyStretch(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).analplay ?? 0) >= 2  &&  ((s as any).pcs_ass ?? 0) <= 10)  ||  (((s as any).analplay ?? 0) >= 4  &&  ((s as any).pcs_ass ?? 0) <= 15)  ||  (((s as any).analplay ?? 0) >= 8  &&  ((s as any).pcs_ass ?? 0) <= 20)) {
    // TODO-QSP: gs 'arousal_funcs', 'stretch', 'anal', 1 & analplay = 0
  }
  if (((s as any).succubusflag ?? 0) === 1  &&  ((s as any).sucskill ?? 0) >= 4) {
    if (((s as any).pain ?? 0)?.['throat'] > 0) {
      (s as any).pain['throat'] = 0;
      (s as any).sucexcess = ((s as any).sucexcess ?? 0) - (1);
    }
    if (((s as any).pain ?? 0)?.['asshole'] > 0) {
      (s as any).pain['asshole'] = 0;
      (s as any).sucexcess = ((s as any).sucexcess ?? 0) - (1);
    }
    if (((s as any).pain ?? 0)?.['vaginal'] > 0) {
      (s as any).pain['vaginal'] = 0;
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
    (s as any).agape[4] = 10;
  }
  if (((s as any).vgape ?? 0)[4] === 0) {
    (s as any).vgape[4] = 10;
  }
  if (((s as any).trait_vars ?? 0)?.['elasticity'] < 0) {
    (s as any).agape[5] = ((s as any).agape ?? 0)[4] * 5;
    (s as any).vgape[5] = ((s as any).vgape ?? 0)[4] * 5;
  } else {
    (s as any).agape[5] = qspUntranslated(s, "agape[4]", { location: "stat" });
    (s as any).vgape[5] = qspUntranslated(s, "vgape[4]", { location: "stat" });
  }
  if (((s as any).vgape ?? 0) > ((s as any).vgape ?? 0)[1]) {
    (s as any).vgape[3] = ((s as any).totminut ?? 0);
    (s as any).vgape[1] = ((s as any).vgape ?? 0);
  } else {
    if (((s as any).vgape ?? 0) > 0) {
      if ((((s as any).totminut ?? 0) - ((s as any).vgape ?? 0)[3])/((s as any).vgape ?? 0)[5] >= 1) {
        (s as any).vgape = ((s as any).vgape ?? 0) - (1);
      }
      (s as any).vgape[1] = ((s as any).vgape ?? 0);
    } else {
      (s as any).vgape[3] = 0;
    }
  }
  if (((s as any).agape ?? 0) > ((s as any).agape ?? 0)[1]) {
    (s as any).agape[3] = ((s as any).totminut ?? 0);
    (s as any).agape[1] = ((s as any).agape ?? 0);
  } else {
    if (((s as any).agape ?? 0) > 0) {
      if ((((s as any).totminut ?? 0) - ((s as any).agape ?? 0)[3])/((s as any).agape ?? 0)[5] >= 1) {
        (s as any).agape = ((s as any).agape ?? 0) - (1);
      }
      if ((!((s as any).agape ?? 0))) {
        (s as any).agape[3] = 0;
      }
      (s as any).agape[1] = ((s as any).agape ?? 0);
    } else {
      (s as any).agape[3] = 0;
    }
  }
  return;
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
      enterComputeStatDisplay(s, scene);
      break;
  }
}

export const stat: LocationDef = {
  name: 'stat',
  region: 'other',
  enter: enter,
};
