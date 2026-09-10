import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterCityOfficeSecretary(s: GameState, scene: SceneBuilder): void {
  (s as any).job_card_hidden[String((s as any).temp_job_id ?? 0)] = 1;
  // TODO-QSP: $job_desc[$temp_job_id]            = 'Manage schedules, handle correspondence, and keep the office r...
  // TODO-QSP: $job_hire_hint[$temp_job_id + ', 0']    = 'Find the job listing for Titran-Express online or at vari...
  // TODO-QSP: $job_hire_hint[$temp_job_id + ', 1']    = 'You''ve seen the job listing. Visit Titran-Express and as...
  // TODO-QSP: $job_title[$temp_job_id] = 'Office Secretary'
  // TODO-QSP: $job_location[$temp_job_id] = 'Titran-Express'
  // TODO-QSP: $job_schedule_mode[$temp_job_id] = 'fixed'
  // TODO-QSP: $job_work_days[$temp_job_id + ', 0'] = '1 2 3 4 5'
  // TODO-QSP: job_arrival[$temp_job_id + ', 0'] = 480 & !! 08:00
  // TODO-QSP: job_start[$temp_job_id + ', 0'] = 540 & !! 09:00
  // TODO-QSP: job_shift[$temp_job_id + ', 0'] = 480 & !! 8 hours
  // TODO-QSP: $job_pay_interval_def[$temp_job_id] = 'shift'
  (s as any).job_pay_rate_def[String((s as any).temp_job_id ?? 0)] = 1500;
  (s as any).job_blocking[String((s as any).temp_job_id ?? 0)] = 1;
  (s as any).job_add_to_calendar[String((s as any).temp_job_id ?? 0)] = 1;
  (s as any).job_show_stat_icon[String((s as any).temp_job_id ?? 0)] = 1;
  (s as any).job_schedule_switchable[String((s as any).temp_job_id ?? 0)] = 0;
  scene.build();
}

function enterCityCafeWaitress(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $job_desc[$temp_job_id]        = 'Take orders, serve tables, and keep customers happy. Tips can supp...
  // TODO-QSP: $job_hire_hint[$temp_job_id + ', 0']  = 'Stop by the Roadhouse Cafe during opening hours and ask abo...
  // TODO-QSP: $job_title[$temp_job_id] = 'Cafe Waitress'
  // TODO-QSP: $job_location[$temp_job_id] = 'the Roadhouse Cafe'
  // TODO-QSP: $job_schedule_mode[$temp_job_id] = 'fixed'
  // TODO-QSP: $job_work_days[$temp_job_id + ', 0'] = '2 3 4 5 6'
  // TODO-QSP: job_arrival[$temp_job_id + ', 0'] = 660 & !! 11:00
  // TODO-QSP: job_start[$temp_job_id + ', 0'] = 720 & !! 12:00
  // TODO-QSP: job_shift[$temp_job_id + ', 0'] = 480 & !! 8 hours
  // TODO-QSP: $job_pay_interval_def[$temp_job_id] = 'shift'
  (s as any).job_pay_rate_def[String((s as any).temp_job_id ?? 0)] = 600;
  (s as any).job_blocking[String((s as any).temp_job_id ?? 0)] = 1;
  (s as any).job_add_to_calendar[String((s as any).temp_job_id ?? 0)] = 1;
  (s as any).job_show_stat_icon[String((s as any).temp_job_id ?? 0)] = 1;
  (s as any).job_schedule_switchable[String((s as any).temp_job_id ?? 0)] = 0;
  scene.build();
}

function enterCityHospitalNurse(s: GameState, scene: SceneBuilder): void {
  (s as any).job_card_hidden[String((s as any).temp_job_id ?? 0)] = 1;
  // TODO-QSP: $job_desc[$temp_job_id]          = 'Assist with patient care, take vitals, and support the nursing t...
  // TODO-QSP: $job_hire_hint[$temp_job_id + ', 1']  = 'Kat put in a good word for you at the clinic. Visit the cit...
  // TODO-QSP: $job_title[$temp_job_id] = 'Hospital Nurse'
  // TODO-QSP: $job_location[$temp_job_id] = 'City Hospital'
  // TODO-QSP: $job_schedule_mode[$temp_job_id] = 'fixed'
  // TODO-QSP: $job_work_days[$temp_job_id + ', 0'] = '1 2 3 4 5'
  // TODO-QSP: job_arrival[$temp_job_id + ', 0'] = 8 * 60 & !! 08:00
  // TODO-QSP: job_start[$temp_job_id + ', 0'] = 9 * 60 & !! 09:00
  // TODO-QSP: job_shift[$temp_job_id + ', 0'] = 7 * 60 & !! 7 hours
  // TODO-QSP: $job_pay_interval_def[$temp_job_id] = 'shift'
  (s as any).job_pay_rate_def[String((s as any).temp_job_id ?? 0)] = 1500;
  (s as any).job_blocking[String((s as any).temp_job_id ?? 0)] = 1;
  (s as any).job_add_to_calendar[String((s as any).temp_job_id ?? 0)] = 1;
  (s as any).job_show_stat_icon[String((s as any).temp_job_id ?? 0)] = 1;
  (s as any).job_schedule_switchable[String((s as any).temp_job_id ?? 0)] = 0;
  scene.build();
}

function enterCityDinerDishwasher(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $job_desc[$temp_job_id]          = 'Wash dishes and keep the kitchen clean. Come by any time during ...
  // TODO-QSP: $job_hire_hint[$temp_job_id + ', 0']  = 'Head into the City Diner kitchen and ask to wash dishes. No...
  // TODO-QSP: $job_title[$temp_job_id]        = 'Diner Cleaning Gig'
  // TODO-QSP: $job_location[$temp_job_id]        = 'City Diner'
  // TODO-QSP: $job_schedule_mode[$temp_job_id]    = 'windowed'
  // TODO-QSP: $job_work_days[$temp_job_id + ', 0']  = '1 2 3 4 5 6 7'  & !! All week
  // TODO-QSP: job_arrival[$temp_job_id + ', 0']    = 6 * 60 + 0    & !! 06:00 (360) — earliest arrival
  // TODO-QSP: job_start[$temp_job_id + ', 0']      = 23 * 60 + 0    & !! 23:00 (1380) — latest start deadline
  // TODO-QSP: job_shift[$temp_job_id + ', 0']      = 1 * 60 + 0    & !! 1 hour (60 min)
  // TODO-QSP: $job_pay_interval_def[$temp_job_id]    = 'shift'
  (s as any).job_pay_rate_def[String((s as any).temp_job_id ?? 0)] = 70;
  (s as any).job_blocking[String((s as any).temp_job_id ?? 0)] = 0;
  (s as any).job_add_to_calendar[String((s as any).temp_job_id ?? 0)] = 0;
  (s as any).job_show_stat_icon[String((s as any).temp_job_id ?? 0)] = 0;
  (s as any).job_schedule_switchable[String((s as any).temp_job_id ?? 0)] = 0;
  return;
  scene.build();
}

function enterCityDinerFloorWasher(s: GameState, scene: SceneBuilder): void {
  (s as any).job_card_hidden[String((s as any).temp_job_id ?? 0)] = 1;
  // TODO-QSP: $job_desc[$temp_job_id]          = 'Mop and clean the dining area floor each morning before the rush...
  // TODO-QSP: $job_hire_hint[$temp_job_id + ', 0']  = 'Complete a few dishwashing shifts at the City Diner first, ...
  // TODO-QSP: $job_title[$temp_job_id]        = 'Diner Floor Washing'
  // TODO-QSP: $job_location[$temp_job_id]        = 'City Diner'
  // TODO-QSP: $job_schedule_mode[$temp_job_id]    = 'windowed'
  // TODO-QSP: $job_work_days[$temp_job_id + ', 0']  = '1 2 3 4 5 6 7'  & !! All week
  // TODO-QSP: job_arrival[$temp_job_id + ', 0']    = 6 * 60 + 0    & !! 06:00 (360) — earliest arrival
  // TODO-QSP: job_start[$temp_job_id + ', 0']      = 10 * 60 + 0    & !! 10:00 (600) — latest start deadline
  // TODO-QSP: job_shift[$temp_job_id + ', 0']      = 1 * 60 + 0    & !! 1 hour (60 min)
  // TODO-QSP: $job_pay_interval_def[$temp_job_id]    = 'shift'
  (s as any).job_pay_rate_def[String((s as any).temp_job_id ?? 0)] = 70;
  (s as any).job_blocking[String((s as any).temp_job_id ?? 0)] = 0;
  (s as any).job_add_to_calendar[String((s as any).temp_job_id ?? 0)] = 0;
  (s as any).job_show_stat_icon[String((s as any).temp_job_id ?? 0)] = 0;
  (s as any).job_schedule_switchable[String((s as any).temp_job_id ?? 0)] = 0;
  return;
  scene.build();
}

function enterCityOfficeCleaner(s: GameState, scene: SceneBuilder): void {
  (s as any).job_card_hidden[String((s as any).temp_job_id ?? 0)] = 1;
  // TODO-QSP: $job_desc[$temp_job_id]          = 'Sweep and mop the floors of the building. Come by any time durin...
  // TODO-QSP: $job_hire_hint[$temp_job_id + ', 0']  = 'You''ll hear about this job by word of mouth. Try chatting ...
  // TODO-QSP: $job_hire_hint[$temp_job_id + ', 1']  = 'You''ve heard about a cleaning job in a small office buildi...
  // TODO-QSP: $job_title[$temp_job_id]        = 'Office Cleaning Gig'
  // TODO-QSP: $job_location[$temp_job_id]        = 'Small Office Building'
  // TODO-QSP: $job_schedule_mode[$temp_job_id]    = 'windowed'
  // TODO-QSP: $job_work_days[$temp_job_id + ', 0']  = '1 2 3 4 5 6 7'  & !! All week
  // TODO-QSP: job_arrival[$temp_job_id + ', 0']    = 7 * 60 + 0    & !! 07:00 (420)
  // TODO-QSP: job_start[$temp_job_id + ', 0']      = 22 * 60 + 0    & !! 22:00 (1320)
  // TODO-QSP: job_shift[$temp_job_id + ', 0']      = 1 * 60 + 0    & !! 1 hour (60 min)
  // TODO-QSP: $job_pay_interval_def[$temp_job_id]  = 'shift'
  (s as any).job_pay_rate_def[String((s as any).temp_job_id ?? 0)] = 65;
  (s as any).job_blocking[String((s as any).temp_job_id ?? 0)] = 0;
  (s as any).job_add_to_calendar[String((s as any).temp_job_id ?? 0)] = 0;
  (s as any).job_show_stat_icon[String((s as any).temp_job_id ?? 0)] = 0;
  (s as any).job_schedule_switchable[String((s as any).temp_job_id ?? 0)] = 0;
  return;
  scene.build();
}

function enterCityOfficeToiletCleaner(s: GameState, scene: SceneBuilder): void {
  (s as any).job_card_hidden[String((s as any).temp_job_id ?? 0)] = 1;
  // TODO-QSP: $job_desc[$temp_job_id]          = 'Clean and maintain the restrooms at the office building.'
  // TODO-QSP: $job_hire_hint[$temp_job_id + ', 0']  = 'This position opens up after you''ve spent some time cleani...
  // TODO-QSP: $job_hire_hint[$temp_job_id + ', 1']  = 'Boris Ivanovich mentioned he needs someone for the restroom...
  // TODO-QSP: $job_title[$temp_job_id]        = 'Toilet Cleaning Gig'
  // TODO-QSP: $job_location[$temp_job_id]        = 'Small Office Building'
  // TODO-QSP: $job_schedule_mode[$temp_job_id]    = 'windowed'
  // TODO-QSP: $job_work_days[$temp_job_id + ', 0']  = '1 2 3 4 5 6 7'  & !! All week
  // TODO-QSP: job_arrival[$temp_job_id + ', 0']    = 7 * 60 + 0    & !! 07:00 (420)
  // TODO-QSP: job_start[$temp_job_id + ', 0']      = 22 * 60 + 0    & !! 22:00 (1320)
  // TODO-QSP: job_shift[$temp_job_id + ', 0']      = 1 * 60 + 0    & !! 1 hour (60 min)
  // TODO-QSP: $job_pay_interval_def[$temp_job_id]  = 'shift'
  (s as any).job_pay_rate_def[String((s as any).temp_job_id ?? 0)] = 65;
  (s as any).job_blocking[String((s as any).temp_job_id ?? 0)] = 0;
  (s as any).job_add_to_calendar[String((s as any).temp_job_id ?? 0)] = 0;
  (s as any).job_show_stat_icon[String((s as any).temp_job_id ?? 0)] = 0;
  (s as any).job_schedule_switchable[String((s as any).temp_job_id ?? 0)] = 0;
  return;
  scene.build();
}

function enterCityDinerSecretary(s: GameState, scene: SceneBuilder): void {
  (s as any).job_card_hidden[String((s as any).temp_job_id ?? 0)] = 1;
  // TODO-QSP: $job_desc[$temp_job_id]          = 'Handle office administration and paperwork. Requires a secretary...
  // TODO-QSP: $job_hire_hint[$temp_job_id + ', 0']  = 'Obtain a secretary diploma, then show it to Anatoly Borisov...
  // TODO-QSP: $job_title[$temp_job_id]        = 'Diner Secretary'
  // TODO-QSP: $job_location[$temp_job_id]        = 'City Diner'
  // TODO-QSP: $job_schedule_mode[$temp_job_id]    = 'fixed'
  // TODO-QSP: $job_work_days[$temp_job_id + ', 0']  = '1 2 3 4 5'  & !! Mon-Fri (week < 6)
  // TODO-QSP: job_arrival[$temp_job_id + ', 0']    = 9 * 60 + 0  & !! 09:00 (540) — latest arrival time
  // TODO-QSP: job_start[$temp_job_id + ', 0']      = 10 * 60 + 0  & !! 10:00 (600) — shift start
  // TODO-QSP: job_shift[$temp_job_id + ', 0']      = 7 * 60 + 0  & !! 7 hours (420 min, until 17:00)
  // TODO-QSP: $job_pay_interval_def[$temp_job_id]    = 'shift'
  (s as any).job_pay_rate_def[String((s as any).temp_job_id ?? 0)] = 1250;
  (s as any).job_blocking[String((s as any).temp_job_id ?? 0)] = 1;
  (s as any).job_add_to_calendar[String((s as any).temp_job_id ?? 0)] = 1;
  (s as any).job_show_stat_icon[String((s as any).temp_job_id ?? 0)] = 1;
  (s as any).job_schedule_switchable[String((s as any).temp_job_id ?? 0)] = 0;
  return;
  scene.build();
}

function enterCityStripBargirl(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $job_desc[$temp_job_id]        = 'Serve drinks and tend the bar on fixed evening and night shifts.'
  // TODO-QSP: $job_hire_hint[$temp_job_id + ', 0']  = 'Ask at the Golden Girls strip club about bar work during ev...
  // TODO-QSP: $job_title[$temp_job_id] = 'Strip Club Bargirl'
  // TODO-QSP: $job_location[$temp_job_id] = 'Golden Girls'
  // TODO-QSP: $job_schedule_mode[$temp_job_id] = 'fixed'
  // TODO-QSP: $job_work_days[$temp_job_id + ', 0'] = '3 4'
  // TODO-QSP: job_arrival[$temp_job_id + ', 0'] = 1020 & !! 17:00
  // TODO-QSP: job_start[$temp_job_id + ', 0'] = 1080 & !! 18:00
  // TODO-QSP: job_shift[$temp_job_id + ', 0'] = 540 & !! 9 hours (until 03:00)
  // TODO-QSP: $job_work_days[$temp_job_id + ', 1'] = '5 6'
  // TODO-QSP: job_arrival[$temp_job_id + ', 1'] = 1020 & !! 17:00
  // TODO-QSP: job_start[$temp_job_id + ', 1'] = 1080 & !! 18:00
  // TODO-QSP: job_shift[$temp_job_id + ', 1'] = 540 & !! 9 hours (until 03:00)
  // TODO-QSP: $job_pay_interval_def[$temp_job_id] = 'shift'
  (s as any).job_pay_rate_def[String((s as any).temp_job_id ?? 0)] = 1125;
  (s as any).job_blocking[String((s as any).temp_job_id ?? 0)] = 1;
  (s as any).job_add_to_calendar[String((s as any).temp_job_id ?? 0)] = 1;
  (s as any).job_show_stat_icon[String((s as any).temp_job_id ?? 0)] = 1;
  (s as any).job_schedule_switchable[String((s as any).temp_job_id ?? 0)] = 1;
  scene.build();
}

function enterCityStripStripper(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $job_title[$temp_job_id]        = 'Stripper'
  // TODO-QSP: $job_location[$temp_job_id]        = 'Golden Girls'
  // TODO-QSP: $job_desc[$temp_job_id]          = 'Dance and strip at the Golden Girls club. Sign up for shifts on ...
  // TODO-QSP: $job_hire_hint[$temp_job_id + ', 0']  = 'Ask the manager at the Golden Girls strip club about stripp...
  // TODO-QSP: $job_schedule_mode[$temp_job_id]    = 'booking'
  (s as any).job_booking_window_days[String((s as any).temp_job_id ?? 0)] = 14;
  (s as any).job_booking_slots_per_day[String((s as any).temp_job_id ?? 0)] = 2;
  (s as any).job_booking_max_concurrent[String((s as any).temp_job_id ?? 0)] = 0;
  (s as any).job_booking_min_gap_days[String((s as any).temp_job_id ?? 0)] = 0;
  (s as any).job_arrival_start[String((s as any).temp_job_id ?? 0)] = 1020;
  (s as any).job_arrival_end[String((s as any).temp_job_id ?? 0)] = 1080;
  // TODO-QSP: job_slot_arrival[$temp_job_id + ', 0']  = 1020  & !! 17:00 — arrival window opens
  // TODO-QSP: job_slot_start[$temp_job_id + ', 0']  = 1080  & !! 18:00 — shift starts (arrival deadline)
  // TODO-QSP: job_slot_shift[$temp_job_id + ', 0']  = 300  & !! 5 hours (18:00-23:00)
  // TODO-QSP: job_slot_arrival[$temp_job_id + ', 1']  = 1230  & !! 20:30 — arrival window opens
  // TODO-QSP: job_slot_start[$temp_job_id + ', 1']  = 1260  & !! 21:00 — shift starts (arrival deadline)
  // TODO-QSP: job_slot_shift[$temp_job_id + ', 1']  = 360  & !! 6 hours (21:00-03:00, crosses midnight)
  // TODO-QSP: $job_pay_interval_def[$temp_job_id]    = 'none'
  (s as any).job_pay_rate_def[String((s as any).temp_job_id ?? 0)] = 0;
  (s as any).job_penalty_per_miss[String((s as any).temp_job_id ?? 0)] = 0;
  (s as any).job_penalty_max_debt[String((s as any).temp_job_id ?? 0)] = 0;
  (s as any).job_blocking[String((s as any).temp_job_id ?? 0)] = 1;
  (s as any).job_add_to_calendar[String((s as any).temp_job_id ?? 0)] = 1;
  (s as any).job_show_stat_icon[String((s as any).temp_job_id ?? 0)] = 1;
  (s as any).job_schedule_switchable[String((s as any).temp_job_id ?? 0)] = 0;
  return;
  scene.build();
}

function enterCityPussycatsClerk(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $job_desc[$temp_job_id]          = 'Work the register, fold stock, and help customers find what they...
  // TODO-QSP: $job_hire_hint[$temp_job_id + ', 0']  = 'Visit the Pussy-Cats clothing store and ask the manager abo...
  // TODO-QSP: $job_title[$temp_job_id]        = 'Shop Clerk'
  // TODO-QSP: $job_location[$temp_job_id]        = 'Pussy-Cats, City Mall'
  // TODO-QSP: $job_schedule_mode[$temp_job_id]    = 'fixed'
  // TODO-QSP: $job_work_days[$temp_job_id + ', 0']  = '1 2 3 4 5'    & !! Mon-Fri
  // TODO-QSP: job_arrival[$temp_job_id + ', 0']    = 15 * 60 + 30    & !! 15:30 (930)
  // TODO-QSP: job_start[$temp_job_id + ', 0']      = 16 * 60 + 0    & !! 16:00 (960)
  // TODO-QSP: job_shift[$temp_job_id + ', 0']      = 4 * 60 + 0    & !! 4 hours (240 min)
  // TODO-QSP: $job_work_days[$temp_job_id + ', 1']  = '6 7'        & !! Sat-Sun
  // TODO-QSP: job_arrival[$temp_job_id + ', 1']    = 8 * 60 + 30    & !! 08:30 (510)
  // TODO-QSP: job_start[$temp_job_id + ', 1']      = 9 * 60 + 0    & !! 09:00 (540)
  // TODO-QSP: job_shift[$temp_job_id + ', 1']      = 6 * 60 + 0    & !! 6 hours (360 min)
  // TODO-QSP: $job_work_days[$temp_job_id + ', 2']  = '1 2 3 4 5'    & !! Mon-Fri
  // TODO-QSP: job_arrival[$temp_job_id + ', 2']    = 8 * 60 + 30    & !! 08:30 (510)
  // TODO-QSP: job_start[$temp_job_id + ', 2']      = 9 * 60 + 0    & !! 09:00 (540)
  // TODO-QSP: job_shift[$temp_job_id + ', 2']      = 6 * 60 + 0    & !! 6 hours (360 min)
  // TODO-QSP: $job_pay_interval_def[$temp_job_id]    = 'hourly'
  (s as any).job_pay_rate_def[String((s as any).temp_job_id ?? 0)] = 205;
  (s as any).job_penalty_per_miss[String((s as any).temp_job_id ?? 0)] = 1;
  (s as any).job_penalty_max_debt[String((s as any).temp_job_id ?? 0)] = 0;
  (s as any).job_blocking[String((s as any).temp_job_id ?? 0)] = 1;
  (s as any).job_add_to_calendar[String((s as any).temp_job_id ?? 0)] = 1;
  (s as any).job_show_stat_icon[String((s as any).temp_job_id ?? 0)] = 1;
  (s as any).job_schedule_switchable[String((s as any).temp_job_id ?? 0)] = 1;
  return;
  scene.build();
}

function enterCityPornstudioActress(s: GameState, scene: SceneBuilder): void {
  (s as any).job_card_hidden[String((s as any).temp_job_id ?? 0)] = 1;
  // TODO-QSP: $job_hire_hint[$temp_job_id + ', 0']  = 'Visit the porn studio in the city''s red light district and...
  // TODO-QSP: $job_title[$temp_job_id]        = 'Porn Actress'
  // TODO-QSP: $job_location[$temp_job_id]        = 'Porn Studio'
  if (((s as any).job_bookings_active ?? 0)?.[String((s as any).temp_job_id ?? 0)] > 0) {
    if (qspFunc(s, 'jobs', 'has_booking_for_day', ((s as any).temp_job_id ?? 0), ((s as any).daystart ?? 0)) === 1  &&  ((s as any).job_last_work_day ?? 0)?.[String((s as any).temp_job_id ?? 0)] !== ((s as any).daystart ?? 0)) {
      // TODO-QSP: $temp_jl_desc += ' You have a shoot today.'
    } else {
      // TODO-QSP: $temp_jl_desc += ' Your next shoot is tomorrow.'
      if (((s as any).porndays ?? 0) > 1) {
        // TODO-QSP: $temp_jl_desc += ' Your next shoot is in <<porndays>> days.'
      }
    }
    if (((s as any).firstkasting ?? 0) > 0  &&  ((s as any).pfilmNO ?? 0) < 1) {
      (s as any).temp_avail = ((s as any).job_booking_max_concurrent ?? 0)?.[String((s as any).temp_job_id ?? 0)] - ((s as any).job_bookings_active ?? 0)?.[String((s as any).temp_job_id ?? 0)];
      if (((s as any).temp_avail ?? 0) <= 0) {
        // TODO-QSP: $temp_jl_desc += ' You have reached the booking limit.'
      } else {
        // TODO-QSP: $temp_jl_desc += ' You can book 1 more shoot.'
        // TODO-QSP: $temp_jl_desc += ' You can book up to <<temp_avail>> more shoots.'
      }
    }
    // TODO-QSP: $job_desc[$temp_job_id] = $temp_jl_desc
    // TODO-QSP: $job_schedule_mode[$temp_job_id]    = 'booking'
    (s as any).job_booking_window_days[String((s as any).temp_job_id ?? 0)] = 42;
    (s as any).job_booking_slots_per_day[String((s as any).temp_job_id ?? 0)] = 4;
    (s as any).job_booking_max_concurrent[String((s as any).temp_job_id ?? 0)] = 5;
    (s as any).job_booking_min_gap_days[String((s as any).temp_job_id ?? 0)] = 6;
    // TODO-QSP: job_slot_arrival[$temp_job_id + ', 0']  = 09 * 60 + 0
    // TODO-QSP: job_slot_start[$temp_job_id + ', 0']  = 10 * 60 + 0
    // TODO-QSP: job_slot_shift[$temp_job_id + ', 0']  = 04 * 60 + 0
    // TODO-QSP: job_slot_arrival[$temp_job_id + ', 1']  = 11 * 60 + 0
    // TODO-QSP: job_slot_start[$temp_job_id + ', 1']  = 12 * 60 + 0
    // TODO-QSP: job_slot_shift[$temp_job_id + ', 1']  = 04 * 60 + 0
    // TODO-QSP: job_slot_arrival[$temp_job_id + ', 2']  = 13 * 60 + 0
    // TODO-QSP: job_slot_start[$temp_job_id + ', 2']  = 14 * 60 + 0
    // TODO-QSP: job_slot_shift[$temp_job_id + ', 2']  = 04 * 60 + 0
    // TODO-QSP: job_slot_arrival[$temp_job_id + ', 3']  = 15 * 60 + 0
    // TODO-QSP: job_slot_start[$temp_job_id + ', 3']  = 16 * 60 + 0
    // TODO-QSP: job_slot_shift[$temp_job_id + ', 3']  = 04 * 60 + 0
    // TODO-QSP: $job_pay_interval_def[$temp_job_id]    = 'shift'
    (s as any).job_pay_rate_def[String((s as any).temp_job_id ?? 0)] = 0;
    (s as any).job_penalty_per_miss[String((s as any).temp_job_id ?? 0)] = 0;
    (s as any).job_penalty_max_debt[String((s as any).temp_job_id ?? 0)] = 20000;
    // TODO-QSP: $job_on_miss_handler[$temp_job_id]    = 'pornschedule'  & !! Location file for custom miss handler
    // TODO-QSP: $job_on_miss_handler_func[$temp_job_id]  = 'on_booking_miss'  & !! Function name within that locatio...
    (s as any).job_blocking[String((s as any).temp_job_id ?? 0)] = 1;
    (s as any).job_add_to_calendar[String((s as any).temp_job_id ?? 0)] = 1;
    (s as any).job_show_stat_icon[String((s as any).temp_job_id ?? 0)] = 1;
    (s as any).job_schedule_switchable[String((s as any).temp_job_id ?? 0)] = 0;
    (s as any).job_refresh_desc[String((s as any).temp_job_id ?? 0)] = 1;
    return;
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'city_office_secretary':
      enterCityOfficeSecretary(s, scene);
      break;
    case 'city_cafe_waitress':
      enterCityCafeWaitress(s, scene);
      break;
    case 'city_hospital_nurse':
      enterCityHospitalNurse(s, scene);
      break;
    case 'city_diner_dishwasher':
      enterCityDinerDishwasher(s, scene);
      break;
    case 'city_diner_floor_washer':
      enterCityDinerFloorWasher(s, scene);
      break;
    case 'city_office_cleaner':
      enterCityOfficeCleaner(s, scene);
      break;
    case 'city_office_toilet_cleaner':
      enterCityOfficeToiletCleaner(s, scene);
      break;
    case 'city_diner_secretary':
      enterCityDinerSecretary(s, scene);
      break;
    case 'city_strip_bargirl':
      enterCityStripBargirl(s, scene);
      break;
    case 'city_strip_stripper':
      enterCityStripStripper(s, scene);
      break;
    case 'city_pussycats_clerk':
      enterCityPussycatsClerk(s, scene);
      break;
    case 'city_pornstudio_actress':
      enterCityPornstudioActress(s, scene);
      break;
    default:
      enterCityOfficeSecretary(s, scene);
      break;
  }
}

export const jobs_list: LocationDef = {
  name: 'jobs_list',
  region: 'other',
  enter: enter,
};
