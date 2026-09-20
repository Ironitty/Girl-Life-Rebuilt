import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'traits', 'hourly');
  if (((s as any).obkvsdam ?? 0) > 0) {
    (s as any).obkvsdam = (Math.floor(Math.random() * 4) + 2);
  }
  if (((s as any).scpopt ?? 0) > 1) {
    (s as any).scpopt = 0;
  }
  if (((s as any).mirror_steam ?? 0) !== ((s as any).hour ?? 0)) {
    (s as any).mirror_steam = (-1);
  }
  if (((s as any).inSleep ?? 0) === 1) {
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) - ((8 + ((s as any).succublvl ?? 0)) / 2);
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - ((16 + ((s as any).succublvl ?? 0)) / 2);
    (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) + (((((s as any).pcs_sleep ?? 0) > 90) ? (((s as any).stammax ?? 0)/2) : (((((s as any).pcs_sleep ?? 0) > 80) ? (((s as any).stammax ?? 0)/4) : (((s as any).stammax ?? 0)/8)))));
    if (((s as any).alko ?? 0) > 0) {
      (s as any).alko = ((s as any).alko ?? 0) - (1);
    }
    (s as any).pcs_willpower_feeder = ((s as any).pcs_willpower_feeder ?? 0) + (((s as any).willpowermax ?? 0) * 4);
    (s as any).pcs_willpwr = ((s as any).pcs_willpwr ?? 0) + (((s as any).pcs_willpower_feeder ?? 0) / 100);
    (s as any).pcs_willpower_feeder = ((s as any).pcs_willpower_feeder ?? 0) % 100;
  } else {
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) - (8 + ((s as any).succublvl ?? 0));
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (16 + ((s as any).succublvl ?? 0));
    if (((s as any).hypnoWithdrawal ?? 0) > 0) {
      qspCall(s, 'dina', 'hypnoAddiction');
    }
    if (((s as any).sleepVars ?? 0)?.['no_sleep_loss'] === 0) {
      if (((s as any).trait_vars ?? 0)?.['sleep_duration'] === 1) {
        (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) - (4);
        if ((!(Math.floor(Math.random() * 2) + 0))) {
          (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) - (1);
        }
      } else {
        if (((s as any).trait_vars ?? 0)?.['sleep_duration'] === -1) {
          (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) - (5);
          if ((Math.floor(Math.random() * 3) + 0) <= 1) {
            (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) - (1);
          }
        } else {
          (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) - (5);
        }
      }
    } else {
      ((s as any).sleepVars = (s as any).sleepVars ?? {})['no_sleep_loss'] = 0;
    }
    if (((s as any).pcs_sleep ?? 0) <= 0  &&  (!((s as any).succublvl ?? 0))) {
      ((s as any).pcs_condition = (s as any).pcs_condition ?? {})['lack_of_sleep'] = ((s as any).pcs_condition['lack_of_sleep'] ?? 0) + (2);
      if (((s as any).pcs_mood_effects ?? 0)?.['slpredcheck'] === 1) {
        qspCall(s, 'mood', 'lower', 'tiny');
      }
      ((s as any).pcs_mood_effects = (s as any).pcs_mood_effects ?? {})['slpredcheck'] = 1;
    } else {
      ((s as any).pcs_mood_effects = (s as any).pcs_mood_effects ?? {})['slpredcheck'] = 0;
    }
    if (((s as any).pcs_energy ?? 0) <= 0) {
      if (((s as any).pcs_mood_effects ?? 0)?.['nrgredcheck'] === 1) {
        qspCall(s, 'mood', 'lower', 'tiny');
      }
      ((s as any).pcs_mood_effects = (s as any).pcs_mood_effects ?? {})['nrgredcheck'] = 1;
    } else {
      ((s as any).pcs_mood_effects = (s as any).pcs_mood_effects ?? {})['nrgredcheck'] = 0;
    }
    if (((s as any).pcs_hydra ?? 0) <= 0) {
      if (((s as any).pcs_mood_effects ?? 0)?.['hydredcheck'] === 1) {
        qspCall(s, 'mood', 'lower', 'tiny');
      }
      ((s as any).pcs_mood_effects = (s as any).pcs_mood_effects ?? {})['hydredcheck'] = 1;
    } else {
      ((s as any).pcs_mood_effects = (s as any).pcs_mood_effects ?? {})['hydredcheck'] = 0;
    }
    if (((s as any).arch_vars ?? 0)?.['main_active'] === 'prude'  &&  ((s as any).pcs_faith ?? 0) <= 25) {
      if (((s as any).pcs_mood_effects ?? 0)?.['faithredcheck'] === 1) {
        qspCall(s, 'mood', 'lower', 'tiny');
      }
      ((s as any).pcs_mood_effects = (s as any).pcs_mood_effects ?? {})['faithredcheck'] = 1;
    } else {
      ((s as any).pcs_mood_effects = (s as any).pcs_mood_effects ?? {})['faithredcheck'] = 0;
    }
    if (((s as any).pcs_stam ?? 0) <= 0) {
      qspCall(s, 'mood', 'lower', (Math.floor(Math.random() * 6) + 5));
      (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) - ((Math.floor(Math.random() * 4) + 3));
    } else {
      if (((s as any).pcs_stam ?? 0) < ((s as any).stammax ?? 0) / 5  &&  ((s as any).stammax ?? 0) > 50) {
        qspCall(s, 'mood', 'lower', (Math.floor(Math.random() * 4) + 2));
      }
    }
    if (((s as any).pcs_energy ?? 0) > 20) {
      (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) + (((s as any).stammax ?? 0) / Math.max(5, 110-((s as any).pcs_energy ?? 0)));
    }
    (s as any).pcs_willpower_feeder = ((s as any).pcs_willpower_feeder ?? 0) + (((s as any).willpowermax ?? 0)*4/3);
    (s as any).pcs_willpwr = ((s as any).pcs_willpwr ?? 0) + (((s as any).pcs_willpower_feeder ?? 0)/100);
    (s as any).pcs_willpower_feeder = ((s as any).pcs_willpower_feeder ?? 0) % 100;
  }
  qspCall(s, 'drugs', 'hourly_events');
  if (((s as any).pcs_willpwr ?? 0) > ((s as any).willpowermax ?? 0)) {
    (s as any).pcs_willpwr = ((s as any).willpowermax ?? 0);
  }
  if (((s as any).pcs_mood ?? 0) <= 20) {
    (s as any).will_counter = ((s as any).will_counter ?? 0) - (2);
  }
  if (((s as any).willpowermax ?? 0) > 100) {
    if (((s as any).pcs_willpwr ?? 0) < 25) {
      (s as any).will_counter = ((s as any).will_counter ?? 0) - (1);
    }
  } else {
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).willpowermax ?? 0)/4) {
      (s as any).will_counter = ((s as any).will_counter ?? 0) - (1);
    }
  }
  if (((s as any).will_counter ?? 0) <= -10) {
    (s as any).willpowermax = ((s as any).willpowermax ?? 0) - (1);
    (s as any).will_counter = 0;
  }
  if (((s as any).pcs_stam ?? 0) > ((s as any).stammax ?? 0)) {
    (s as any).pcs_stam = ((s as any).stammax ?? 0);
  }
  qspCall(s, 'femcyc', '');
  if (((s as any).hour ?? 0) === ((s as any).birth_control ?? 0)?.['auto_hour']  &&  ((s as any).birth_control ?? 0)?.['auto_hour'] > 0  &&  (!((s as any).inSleep ?? 0))) {
    qspCall(s, 'fertility', 'birth_control_status_update');
  } else {
    if (((s as any).hour ?? 0) === 8) {
      qspCall(s, 'fertility', 'birth_control_status_update');
    } else {
      if (((s as any).birth_control ?? 0)?.['auto_hour'] === 0  &&  ((s as any).birth_control ?? 0)?.['status_update'] <= ((s as any).daystart ?? 0) - 1) {
        qspCall(s, 'fertility', 'birth_control_status_update');
      }
    }
  }
  if (((s as any).inSleep ?? 0) === 1) {
    ((s as any).pcs_period = (s as any).pcs_period ?? {})['period_warning'] = 0;
  } else {
    if (((s as any).pcs_period ?? 0)?.['period_warning'] === 0  &&  ((s as any).placebopart ?? 0) > 0  &&  ((s as any).lutH ?? 0) > 0  &&  (!((s as any).knowpreg ?? 0))) {
      ((s as any).pcs_period = (s as any).pcs_period ?? {})['period_warning'] = 1;
    } else {
      if (((s as any).pcs_period ?? 0)?.['period_warning'] === 1  &&  ((s as any).lutH_max ?? 0) - ((s as any).lutH ?? 0) <= 2) {
        ((s as any).pcs_period = (s as any).pcs_period ?? {})['period_warning'] = 2;
        if (((s as any).isprok ?? 0) === 1) {
        } else {
          if (((s as any).location_type ?? 0) === 'private'  &&  ((s as any).isprokp ?? 0) === 1) {
          } else {
            if (((s as any).location_type ?? 0) === 'private'  &&  ((s as any).pantyworntype ?? 0) !== 'none') {
            }
          }
        }
      } else {
        if (((s as any).mesec ?? 0) > 0) {
          ((s as any).pcs_period = (s as any).pcs_period ?? {})['period_warning'] = 0;
        }
      }
    }
  }
  if ((!((s as any).inSleep ?? 0))) {
    ((s as any).vomit = (s as any).vomit ?? {})['daily_check'] = 0;
  } else {
    if (((s as any).vomit ?? 0)?.['daily_check'] === 0) {
      ((s as any).vomit = (s as any).vomit ?? {})['daily_check'] = 1;
      if (((s as any).alko ?? 0) > 4) {
        ((s as any).vomit = (s as any).vomit ?? {})['hangover'] = 1;
      } else {
        if (((s as any).pregChem ?? 0) > 600  &&  ((s as any).pregChem ?? 0) < 2160  &&  (Math.floor(Math.random() * 4) + 1) === 4) {
          ((s as any).vomit = (s as any).vomit ?? {})['morning_sick'] = 1;
        } else {
          if ((Math.floor(Math.random() * 1000) + 1) === 1) {
            ((s as any).vomit = (s as any).vomit ?? {})['unlucky'] = 1;
          }
        }
      }
    }
  }
  (s as any).pcs_mana = ((s as any).pcs_mana ?? 0) + (((s as any).manamax ?? 0) / 20);
  if (((s as any).alko ?? 0) > 0  &&  (!((s as any).alkoblock ?? 0))) {
    if (((s as any).alko ?? 0) >= 6) {
      qspCall(s, 'exp_deg', 'run', 1);
      qspCall(s, 'exp_deg', 'vball', 1);
      if (((s as any).alko ?? 0) >= 10) {
        qspCall(s, 'exp_deg', 'stren', 1);
        qspCall(s, 'exp_deg', 'vital', 1);
        qspCall(s, 'exp_deg', 'int', 1);
        (s as any).alko = ((s as any).alko ?? 0) - ((Math.floor(Math.random() * 2) + 0));
      }
    }
    (s as any).alko = ((s as any).alko ?? 0) - ((Math.floor(Math.random() * 2) + 0));
  } else {
    if (((s as any).alko ?? 0) < 0) {
      (s as any).alko = 0;
    }
  }
  if (((s as any).shame ?? 0) > 0) {
    (s as any).shame = ((s as any).shame ?? 0) - (1);
    qspCall(s, 'mood', 'lower', 'tiny');
  }
  if (((s as any).trait_vars ?? 0)?.['panty_preference'] >= 2) {
    (s as any).mosol = 0;
  } else {
    if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).PCloPants ?? 0) > 0  &&  ((s as any).PCloPanties ?? 0) === 0  &&  ((s as any).clothingworntype ?? 0) !== 'nude') {
      (s as any).mosol = ((s as any).mosol ?? 0) + (Math.max(0, 2 - (((s as any).trait_vars ?? {})?.['panty_preference'] ?? 0)));
      if (((s as any).mosol ?? 0) >= 100) {
        qspCall(s, 'mood', 'lower', 'tiny');
      }
      if (((s as any).mosol ?? 0) >= 60  &&  ((s as any).pain ?? 0)?.['pubic'] < 80) {
        qspCall(s, 'pain', '', 1, 'pubic', 'ache');
      }
    }
  }
  if (((s as any).pcs_energy ?? 0) <= (10 + ((s as any).vitalbuf ?? 0) / 20)  &&  ((s as any).fat ?? 0) > (2 + ((s as any).vitalbuf ?? 0) / 20)) {
    (s as any).fat = ((s as any).fat ?? 0) - (2);
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (6);
  } else {
    if (((s as any).pcs_energy ?? 0) <= (25 + ((s as any).vitalbuf ?? 0) / 10)  &&  ((s as any).fat ?? 0) > 0) {
      (s as any).fat = ((s as any).fat ?? 0) - (1);
      (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (3);
    } else {
      if (((s as any).pcs_energy ?? 0) > 100) {
        (s as any).fat = ((s as any).fat ?? 0) + ((((s as any).pcs_energy ?? 0) - 100) / 4);
        (s as any).pcs_energy = 100;
      }
    }
  }
  if (((s as any).pcs_hydra ?? 0) > 200) {
    (s as any).pcs_hydra = 200;
  }
  if (((s as any).mosol ?? 0) > 0) {
    if (((s as any).pantyworntype ?? 0) !== 'none'  ||  ((s as any).clothingworntype ?? 0) === 'nude'  ||  ((s as any).PCloPanties ?? 0) > 0) {
      (s as any).mosol = ((s as any).mosol ?? 0) - ((Math.floor(Math.random() * 2) + 0));
    }
  }
  if (((s as any).pcs_lipbalm ?? 0) > 0) {
    (s as any).pcs_lipbalm = ((s as any).pcs_lipbalm ?? 0) - (1);
  }
  if (((s as any).sickstage ?? 0) === 1) {
    (s as any).sick = ((s as any).sick ?? 0) + (1);
    (s as any).sicktimer = ((s as any).sicktimer ?? 0) + (1);
    if (((s as any).sicktimer ?? 0) >= 80) {
      (s as any).sickstage = 2;
      (s as any).sicktimer = 0;
    }
  }
  if (((s as any).sickstage ?? 0) === 2) {
    if (((s as any).sick ?? 0) > 0) {
      (s as any).sick = ((s as any).sick ?? 0) - (1);
    }
    if (((s as any).sick ?? 0) <= 0) {
      (s as any).sick = 0;
      (s as any).sickstage = 0;
    }
  }
  if (((s as any).perkice ?? 0) > 0) {
    (s as any).perkice = ((s as any).perkice ?? 0) - (1);
  }
  if (((s as any).frost ?? 0) > 0) {
    (s as any).frost = ((s as any).frost ?? 0) - (1);
  }
  if (((s as any).KGOLpers ?? 0) > 0) {
    if (((s as any).KGHP ?? 0) < ((s as any).KGHPMAX ?? 0)) {
      (s as any).KGHP = ((s as any).KGHP ?? 0) + (10);
    }
    if (((s as any).KGMana ?? 0) < ((s as any).KGManaMax ?? 0)) {
      (s as any).KGMana = ((s as any).KGMana ?? 0) + (10);
    }
  }
  qspCall(s, 'mood', 'raise', qspFunc(s, 'outfit', 'hourly_mood_bonus'));
  if (((s as any).pcs_horny ?? 0) < 25  &&  (((s as any).PPanThinness ?? 0) >= 5  &&  ((s as any).PBraThinness ?? 0) >= 5)) {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  } else {
    if (((s as any).pcs_horny ?? 0) < 10  &&  (((s as any).PPanThinness ?? 0) >= 5  ||  ((s as any).PBraThinness ?? 0) >= 5)) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    }
  }
  if (((s as any).pantyworntype ?? 0) !== 'none'  &&  ((s as any).clit_size ?? 0) >= 40  &&  ((s as any).pcs_horny ?? 0) < 60) {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (20);
  }
  if ((!((s as any).inSleep ?? 0))) {
    qspCall(s, 'sweat', 'add', (Math.floor(Math.random() * 2) + 0));
    if (((s as any).temper ?? 0) >= 20) {
      qspCall(s, 'sweat', 'add', (Math.floor(Math.random() * 2) + 0));
    }
  }
  if (((s as any).lashair ?? 0) === 1) {
    (s as any).pcs_pubes = 0;
    (s as any).pcs_leghair = 0;
    qspCall(s, 'body_desc', 'pube_desc_update');
  } else {
    (s as any).temp_hair_interval = ((((s as any).trait_vars ?? 0)?.['body_hair_growth_rate'] === 1) ? (720) : (((((s as any).trait_vars ?? 0)?.['body_hair_growth_rate'] === 0) ? (1440) : (1800))));
    if (((s as any).totminut ?? 0) > ((s as any).stat ?? 0)?.['leg_hair_growth_timer'] + ((s as any).temp_hair_interval ?? 0)) {
      ((s as any).stat = (s as any).stat ?? {})['leg_hair_growth_timer'] = ((s as any).totminut ?? 0);
      (s as any).pcs_leghair = ((s as any).pcs_leghair ?? 0) + (1);
    }
    if (((s as any).totminut ?? 0) > ((s as any).stat ?? 0)?.['pube_growth_timer'] + ((s as any).temp_hair_interval ?? 0) * 2) {
      ((s as any).stat = (s as any).stat ?? {})['pube_growth_timer'] = ((s as any).totminut ?? 0);
      (s as any).pcs_pubes = ((s as any).pcs_pubes ?? 0) + (1);
    }
    qspCall(s, 'body_desc', 'pube_desc_update');
  }
  qspCall(s, 'komp_cam_functions', 'hourly_events');
  if (((s as any).hunterVars ?? 0)?.['Andreisex'] > 0) {
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['Andreisex'] = ((s as any).hunterVars['Andreisex'] ?? 0) - (1);
  }
  if (((s as any).hunterVars ?? 0)?.['Sergeisex'] > 0) {
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['Sergeisex'] = ((s as any).hunterVars['Sergeisex'] ?? 0) - (1);
  }
  if (((s as any).hunterVars ?? 0)?.['Igorsex'] > 0) {
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['Igorsex'] = ((s as any).hunterVars['Igorsex'] ?? 0) - (1);
  }
  if (((s as any).huntslutsex ?? 0) > 0) {
    (s as any).huntslutsex = ((s as any).huntslutsex ?? 0) - (1);
  }
  if (((s as any).MiraVars ?? 0)?.['follow_time'] > 0) {
    ((s as any).MiraVars = (s as any).MiraVars ?? {})['follow_time'] = ((s as any).MiraVars['follow_time'] ?? 0) - (1);
  }
  if (((s as any).npc_drunk ?? 0)?.['A60'] > 0  &&  ((s as any).locat ?? 0)?.['A60_loc'] !== 'mitkabuh_group') {
    ((s as any).npc_drunk = (s as any).npc_drunk ?? {})['A60'] = ((s as any).npc_drunk['A60'] ?? 0) - (1);
  }
  qspCall(s, 'katja_procedural', 'hourly');
  if (((s as any).HotelRoom ?? 0)?.['pav'] > 0) {
    if (((s as any).hotelRoomDays ?? 0)?.['pav'] === ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) >= 11) {
      ((s as any).HotelRoom = (s as any).HotelRoom ?? {})['pav'] = 0;
    }
  }
  if (((s as any).HotelRoom ?? 0)?.['city'] > 0) {
    if (((s as any).hotelRoomDays ?? 0)?.['city'] === ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) >= 11) {
      ((s as any).HotelRoom = (s as any).HotelRoom ?? {})['city'] = 0;
    }
  }
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 14  &&  ((s as any).week ?? 0) < 6  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).kanikuli ?? 0) === 0  &&  ((s as any).gschoolVars ?? 0)?.['last_absence'] !== ((s as any).daystart ?? 0)) {
    ((s as any).gschoolVars = (s as any).gschoolVars ?? {})['absence_count'] = ((s as any).gschoolVars['absence_count'] ?? 0) + (1);
    ((s as any).gschoolVars = (s as any).gschoolVars ?? {})['last_absence'] = ((s as any).daystart ?? 0);
  }
  scene.build();
}

export const hourly_events: LocationDef = {
  name: 'hourly_events',
  region: 'other',
  locationType: 'private',
  enter: enter,
};
