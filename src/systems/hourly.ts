import type { GameState } from '../core/types';
import { lowerMood } from './mood';

function rand(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function hourlyEvents(s: GameState): void {
  if (s.inSleep === 1) {
    s.pcs_energy -= (8 + s.succublvl) / 2;
    s.pcs_hydra -= (16 + s.succublvl) / 2;

    if (s.pcs_sleep > 90) {
      s.pcs_stam += s.stammax / 2;
    } else if (s.pcs_sleep > 80) {
      s.pcs_stam += s.stammax / 4;
    } else {
      s.pcs_stam += s.stammax / 8;
    }

    if (s.alko > 0) s.alko -= 1;

    s.pcs_willpower_feeder += s.willpowermax * 4;
    s.pcs_willpwr += s.pcs_willpower_feeder / 100;
    s.pcs_willpower_feeder = s.pcs_willpower_feeder % 100;
  } else {
    s.pcs_energy -= 8 + s.succublvl;
    s.pcs_hydra -= 16 + s.succublvl;

    if (s.sleepVars['no_sleep_loss'] === 0) {
      const sleepDur = s.trait_vars['sleep_duration'] ?? 0;
      if (sleepDur === 1) {
        s.pcs_sleep -= 4;
        if (rand(0, 1) === 0) s.pcs_sleep -= 1;
      } else if (sleepDur === -1) {
        s.pcs_sleep -= 5;
        if (rand(0, 2) <= 1) s.pcs_sleep -= 1;
      } else {
        s.pcs_sleep -= 5;
      }
    } else {
      s.sleepVars['no_sleep_loss'] = 0;
    }

    if (s.pcs_sleep <= 0 && s.succublvl === 0) {
      s.pcs_condition['lack_of_sleep'] = (s.pcs_condition['lack_of_sleep'] ?? 0) + 2;
      if (s.pcs_mood_effects['slpredcheck'] === 1) lowerMood(s, 'tiny');
      s.pcs_mood_effects['slpredcheck'] = 1;
    } else {
      s.pcs_mood_effects['slpredcheck'] = 0;
    }

    if (s.pcs_energy <= 0) {
      if (s.pcs_mood_effects['nrgredcheck'] === 1) lowerMood(s, 'tiny');
      s.pcs_mood_effects['nrgredcheck'] = 1;
    } else {
      s.pcs_mood_effects['nrgredcheck'] = 0;
    }

    if (s.pcs_hydra <= 0) {
      if (s.pcs_mood_effects['hydredcheck'] === 1) lowerMood(s, 'tiny');
      s.pcs_mood_effects['hydredcheck'] = 1;
    } else {
      s.pcs_mood_effects['hydredcheck'] = 0;
    }

    if (s.arch_vars['main_active'] === 'prude' && s.pcs_faith <= 25) {
      if (s.pcs_mood_effects['faithredcheck'] === 1) lowerMood(s, 'tiny');
      s.pcs_mood_effects['faithredcheck'] = 1;
    } else {
      s.pcs_mood_effects['faithredcheck'] = 0;
    }

    if (s.pcs_stam <= 0) {
      lowerMood(s, rand(5, 10));
      s.pcs_sleep -= rand(3, 6);
    } else if (s.pcs_stam < s.stammax / 5 && s.stammax > 50) {
      lowerMood(s, rand(2, 5));
    }

    if (s.pcs_energy > 20) {
      s.pcs_stam += s.stammax / Math.max(5, 110 - s.pcs_energy);
    }

    s.pcs_willpower_feeder += (s.willpowermax * 4) / 3;
    s.pcs_willpwr += s.pcs_willpower_feeder / 100;
    s.pcs_willpower_feeder = s.pcs_willpower_feeder % 100;
  }

  if (s.pcs_willpwr > s.willpowermax) s.pcs_willpwr = s.willpowermax;
  if (s.pcs_mood <= 20) s.will_counter -= 2;

  if (s.willpowermax > 100) {
    if (s.pcs_willpwr < 25) s.will_counter -= 1;
  } else {
    if (s.pcs_willpwr < s.willpowermax / 4) s.will_counter -= 1;
  }

  if (s.will_counter <= -10) {
    s.willpowermax -= 1;
    s.will_counter = 0;
  }

  if (s.pcs_stam > s.stammax) s.pcs_stam = s.stammax;

  s.pcs_mana += s.manamax / 20;
  if (s.pcs_mana > s.manamax) s.pcs_mana = s.manamax;

  if (s.alko > 0 && s.alkoblock === 0) {
    if (s.alko >= 6) {
      if (s.alko >= 10) {
        s.alko -= rand(0, 1);
      }
    }
    s.alko -= rand(0, 1);
  } else if (s.alko < 0) {
    s.alko = 0;
  }

  if (s.shame > 0) {
    s.shame -= 1;
    lowerMood(s, 'tiny');
  }

  if (s.trait_vars['panty_preference'] !== undefined && s.trait_vars['panty_preference'] >= 2) {
    s.mosol = 0;
  } else {
    if (s.pantyworntype === 'none' && s.PCloPants > 0 && s.PCloPanties === 0 && s.clothingworntype !== 'nude') {
      s.mosol += Math.max(0, 2 - (s.trait_vars['panty_preference'] ?? 0));
      if (s.mosol >= 100) lowerMood(s, 'tiny');
    }
  }

  if (s.pcs_energy <= (10 + s.vitalbuf / 20) && s.fat > (2 + s.vitalbuf / 20)) {
    s.fat -= 2;
    s.pcs_energy += 6;
  } else if (s.pcs_energy <= (25 + s.vitalbuf / 10) && s.fat > 0) {
    s.fat -= 1;
    s.pcs_energy += 3;
  } else if (s.pcs_energy > 100) {
    s.fat += (s.pcs_energy - 100) / 4;
    s.pcs_energy = 100;
  }

  if (s.pcs_hydra > 200) s.pcs_hydra = 200;

  if (s.mosol > 0) {
    if (s.pantyworntype !== 'none' || s.clothingworntype === 'nude' || s.PCloPanties > 0) {
      s.mosol -= rand(0, 1);
    }
  }

  if (s.pcs_lipbalm > 0) s.pcs_lipbalm -= 1;

  if (s.sickstage === 1) {
    s.sick += 1;
    s.sicktimer += 1;
    if (s.sicktimer >= 80) {
      s.sickstage = 2;
      s.sicktimer = 0;
    }
  }

  if (s.sickstage === 2) {
    if (s.sick > 0) s.sick -= 1;
    if (s.sick <= 0) {
      s.sick = 0;
      s.sickstage = 0;
    }
  }

  if (s.perkice > 0) s.perkice -= 1;
  if (s.frost > 0) s.frost -= 1;

  if (s.KGOLpers > 0) {
    if (s.KGHP < s.KGHPMAX) s.KGHP += 10;
    if (s.KGMana < s.KGManaMax) s.KGMana += 10;
  }

  if (s.pcs_horny < 25 && s.PPanThinness >= 5 && s.PBraThinness >= 5) {
    s.pcs_horny += 10;
  } else if (s.pcs_horny < 10 && (s.PPanThinness >= 5 || s.PBraThinness >= 5)) {
    s.pcs_horny += 5;
  }

  if (s.pantyworntype !== 'none' && s.clit_size >= 40 && s.pcs_horny < 60) {
    s.pcs_horny += 20;
  }

  if (s.inSleep === 0) {
    s.pcs_sweat += rand(0, 1);
    if (s.temper >= 20) s.pcs_sweat += rand(0, 1);
  }

  if (s.HotelRoom['pav'] > 0) {
    if (s.hotelRoomDays['pav'] === s.daystart && s.hour >= 11) {
      s.HotelRoom['pav'] = 0;
    }
  }
  if (s.HotelRoom['city'] > 0) {
    if (s.hotelRoomDays['city'] === s.daystart && s.hour >= 11) {
      s.HotelRoom['city'] = 0;
    }
  }

  if (s.hour >= 8 && s.hour < 14 && s.week < 6 && s.start_type['loc'] === 'sg' &&
      (s.gschoolVars['school_diploma'] as number) === 0 && s.kanikuli === 0 &&
      (s.gschoolVars['last_absence'] as number) !== s.daystart) {
    s.gschoolVars['absence_count'] = ((s.gschoolVars['absence_count'] as number) ?? 0) + 1;
    s.gschoolVars['last_absence'] = s.daystart;
  }

  s.pcs_energy = Math.max(0, s.pcs_energy);
  s.pcs_hydra = Math.max(0, s.pcs_hydra);
}
