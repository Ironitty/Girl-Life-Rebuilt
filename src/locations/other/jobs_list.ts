import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterCityOfficeSecretary(s: GameState, scene: SceneBuilder): void {
  ((s as any).job_card_hidden ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
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
  ((s as any).job_pay_rate_def ?? {})[String((s as any).temp_job_id ?? 0)] = 1500;
  ((s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_schedule_switchable ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
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
  ((s as any).job_pay_rate_def ?? {})[String((s as any).temp_job_id ?? 0)] = 600;
  ((s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_schedule_switchable ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  scene.build();
}

function enterCityHospitalNurse(s: GameState, scene: SceneBuilder): void {
  ((s as any).job_card_hidden ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
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
  ((s as any).job_pay_rate_def ?? {})[String((s as any).temp_job_id ?? 0)] = 1500;
  ((s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_schedule_switchable ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
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
  ((s as any).job_pay_rate_def ?? {})[String((s as any).temp_job_id ?? 0)] = 70;
  ((s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_schedule_switchable ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  return;
  scene.build();
}

function enterCityDinerFloorWasher(s: GameState, scene: SceneBuilder): void {
  ((s as any).job_card_hidden ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
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
  ((s as any).job_pay_rate_def ?? {})[String((s as any).temp_job_id ?? 0)] = 70;
  ((s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_schedule_switchable ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  return;
  scene.build();
}

function enterCityOfficeCleaner(s: GameState, scene: SceneBuilder): void {
  ((s as any).job_card_hidden ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
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
  ((s as any).job_pay_rate_def ?? {})[String((s as any).temp_job_id ?? 0)] = 65;
  ((s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_schedule_switchable ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  return;
  scene.build();
}

function enterCityOfficeToiletCleaner(s: GameState, scene: SceneBuilder): void {
  ((s as any).job_card_hidden ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
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
  ((s as any).job_pay_rate_def ?? {})[String((s as any).temp_job_id ?? 0)] = 65;
  ((s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_schedule_switchable ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  return;
  scene.build();
}

function enterCityDinerSecretary(s: GameState, scene: SceneBuilder): void {
  ((s as any).job_card_hidden ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
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
  ((s as any).job_pay_rate_def ?? {})[String((s as any).temp_job_id ?? 0)] = 1250;
  ((s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_schedule_switchable ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
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
  ((s as any).job_pay_rate_def ?? {})[String((s as any).temp_job_id ?? 0)] = 1125;
  ((s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_schedule_switchable ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  scene.build();
}

function enterCityStripStripper(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $job_title[$temp_job_id]        = 'Stripper'
  // TODO-QSP: $job_location[$temp_job_id]        = 'Golden Girls'
  // TODO-QSP: $job_desc[$temp_job_id]          = 'Dance and strip at the Golden Girls club. Sign up for shifts on ...
  // TODO-QSP: $job_hire_hint[$temp_job_id + ', 0']  = 'Ask the manager at the Golden Girls strip club about stripp...
  // TODO-QSP: $job_schedule_mode[$temp_job_id]    = 'booking'
  ((s as any).job_booking_window_days ?? {})[String((s as any).temp_job_id ?? 0)] = 14;
  ((s as any).job_booking_slots_per_day ?? {})[String((s as any).temp_job_id ?? 0)] = 2;
  ((s as any).job_booking_max_concurrent ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_booking_min_gap_days ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_arrival_start ?? {})[String((s as any).temp_job_id ?? 0)] = 1020;
  ((s as any).job_arrival_end ?? {})[String((s as any).temp_job_id ?? 0)] = 1080;
  // TODO-QSP: job_slot_arrival[$temp_job_id + ', 0']  = 1020  & !! 17:00 — arrival window opens
  // TODO-QSP: job_slot_start[$temp_job_id + ', 0']  = 1080  & !! 18:00 — shift starts (arrival deadline)
  // TODO-QSP: job_slot_shift[$temp_job_id + ', 0']  = 300  & !! 5 hours (18:00-23:00)
  // TODO-QSP: job_slot_arrival[$temp_job_id + ', 1']  = 1230  & !! 20:30 — arrival window opens
  // TODO-QSP: job_slot_start[$temp_job_id + ', 1']  = 1260  & !! 21:00 — shift starts (arrival deadline)
  // TODO-QSP: job_slot_shift[$temp_job_id + ', 1']  = 360  & !! 6 hours (21:00-03:00, crosses midnight)
  // TODO-QSP: $job_pay_interval_def[$temp_job_id]    = 'none'
  ((s as any).job_pay_rate_def ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_penalty_per_miss ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_penalty_max_debt ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_schedule_switchable ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
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
  ((s as any).job_pay_rate_def ?? {})[String((s as any).temp_job_id ?? 0)] = 205;
  ((s as any).job_penalty_per_miss ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_penalty_max_debt ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_schedule_switchable ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  return;
  scene.build();
}

function enterCityPornstudioActress(s: GameState, scene: SceneBuilder): void {
  ((s as any).job_card_hidden ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  // TODO-QSP: $job_hire_hint[$temp_job_id + ', 0']  = 'Visit the porn studio in the city''s red light district and...
  // TODO-QSP: $job_title[$temp_job_id]        = 'Porn Actress'
  // TODO-QSP: $job_location[$temp_job_id]        = 'Porn Studio'
  if (((s as any).job_bookings_active ?? 0)?.[String((s as any).temp_job_id ?? 0)] > 0) {
    if (qspFunc(s, 'jobs', 'has_booking_for_day', ((s as any).temp_job_id ?? 0), ((s as any).daystart ?? 0)) === 1  &&  ((s as any).job_last_work_day ?? 0)?.[String((s as any).temp_job_id ?? 0)] !== ((s as any).daystart ?? 0)) {
      // TODO-QSP: $temp_jl_desc += ' You have a shoot today.'
    } else {
      if (qspFunc(s, 'jobs', 'has_booking_for_day', ((s as any).temp_job_id ?? 0), ((s as any).daystart ?? 0) + 1) === 1) {
        // TODO-QSP: $temp_jl_desc += ' Your next shoot is tomorrow.'
      } else {
        if (((s as any).porndays ?? 0) > 1) {
          // TODO-QSP: $temp_jl_desc += ' Your next shoot is in <<porndays>> days.'
        }
      }
    }
  }
  if (((s as any).firstkasting ?? 0) > 0  &&  ((s as any).pfilmNO ?? 0) < 1) {
    (s as any).temp_avail = ((s as any).job_booking_max_concurrent ?? 0)?.[String((s as any).temp_job_id ?? 0)] - ((s as any).job_bookings_active ?? 0)?.[String((s as any).temp_job_id ?? 0)];
    if (((s as any).temp_avail ?? 0) <= 0) {
      // TODO-QSP: $temp_jl_desc += ' You have reached the booking limit.'
    } else {
      if (((s as any).temp_avail ?? 0) === 1) {
        // TODO-QSP: $temp_jl_desc += ' You can book 1 more shoot.'
      } else {
        // TODO-QSP: $temp_jl_desc += ' You can book up to <<temp_avail>> more shoots.'
      }
    }
  }
  // TODO-QSP: $job_desc[$temp_job_id] = $temp_jl_desc
  // TODO-QSP: $job_schedule_mode[$temp_job_id]    = 'booking'
  ((s as any).job_booking_window_days ?? {})[String((s as any).temp_job_id ?? 0)] = 42;
  ((s as any).job_booking_slots_per_day ?? {})[String((s as any).temp_job_id ?? 0)] = 4;
  ((s as any).job_booking_max_concurrent ?? {})[String((s as any).temp_job_id ?? 0)] = 5;
  ((s as any).job_booking_min_gap_days ?? {})[String((s as any).temp_job_id ?? 0)] = 6;
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
  ((s as any).job_pay_rate_def ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_penalty_per_miss ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_penalty_max_debt ?? {})[String((s as any).temp_job_id ?? 0)] = 20000;
  // TODO-QSP: $job_on_miss_handler[$temp_job_id]    = 'pornschedule'  & !! Location file for custom miss handler
  // TODO-QSP: $job_on_miss_handler_func[$temp_job_id]  = 'on_booking_miss'  & !! Function name within that locatio...
  ((s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_schedule_switchable ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_refresh_desc ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  return;
  scene.build();
}

function enterCityPornstudioDelivery(s: GameState, scene: SceneBuilder): void {
  ((s as any).job_card_hidden ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  // TODO-QSP: $job_desc[$temp_job_id]          = 'Make weekly deliveries for the studio. Pick up a drive on Friday...
  // TODO-QSP: $job_hire_hint[$temp_job_id + ', 0']  = 'A contact near the residential trash area may be able to ge...
  // TODO-QSP: $job_hire_hint[$temp_job_id + ', 1']  = 'You''ve been offered the job. Visit the porn studio and sho...
  // TODO-QSP: $job_title[$temp_job_id]        = 'Delivery Courier'
  // TODO-QSP: $job_location[$temp_job_id]        = 'City Porn Studio'
  // TODO-QSP: $job_schedule_mode[$temp_job_id]    = 'on_demand'
  // TODO-QSP: $job_available_days[$temp_job_id]    = '5'      & !! Friday
  ((s as any).job_available_start ?? {})[String((s as any).temp_job_id ?? 0)] = 9 * 60;
  ((s as any).job_available_end ?? {})[String((s as any).temp_job_id ?? 0)] = 22 * 60;
  ((s as any).job_create_availability_events ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  // TODO-QSP: $job_pay_interval_def[$temp_job_id]    = 'none'
  ((s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_schedule_switchable ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  scene.build();
}

function enterCityAphroditeModel(s: GameState, scene: SceneBuilder): void {
  if (((s as any).model ?? 0)?.['type'] !== '') {
  }
  if (((s as any).model_week ?? 0) === (((s as any).daystart ?? 0) - ((s as any).week ?? 0)) / 7  &&  ((s as any).model_job_week ?? 0) >= 2) {
    // TODO-QSP: $temp_jl_desc += ' You have no more paid shoots available this week, but can still come in to practi...
  } else {
    if (((s as any).model_week ?? 0) < (((s as any).daystart ?? 0) - ((s as any).week ?? 0)) / 7  &&  ((s as any).model_job_week ?? 0) === 1) {
      // TODO-QSP: $temp_jl_desc += ' You can get paid for 1 more shoot this week. Practice is always free.'
    } else {
      if (((s as any).model_week ?? 0) < (((s as any).daystart ?? 0) - ((s as any).week ?? 0)) / 7  &&  ((s as any).model_job_week ?? 0) < 1) {
        // TODO-QSP: $temp_jl_desc += ' You can do up to 2 paid shoots this week. Practice is always free.'
      }
    }
  }
  // TODO-QSP: $job_desc[$temp_job_id] = $temp_jl_desc
  // TODO-QSP: $job_hire_hint[$temp_job_id + ', 0']  = 'Visit the Aphrodite Photography studio in the city center a...
  // TODO-QSP: $job_title[$temp_job_id]        = 'Model'
  // TODO-QSP: $job_location[$temp_job_id]        = 'Aphrodite Photography'
  // TODO-QSP: $job_schedule_mode[$temp_job_id]    = 'on_demand'
  // TODO-QSP: $job_available_days[$temp_job_id]    = '1 2 3 4 5 6 7'  & !! All week
  ((s as any).job_available_start ?? {})[String((s as any).temp_job_id ?? 0)] = 7 * 60;
  ((s as any).job_available_end ?? {})[String((s as any).temp_job_id ?? 0)] = 21 * 60;
  ((s as any).job_create_availability_events ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  // TODO-QSP: $job_pay_interval_def[$temp_job_id]    = 'none'
  ((s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_schedule_switchable ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_refresh_desc ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  scene.build();
}

function enterPavHotelMaid(s: GameState, scene: SceneBuilder): void {
  ((s as any).job_card_hidden ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  // TODO-QSP: $job_desc[$temp_job_id]          = 'Clean guest rooms and common areas to standard. Tips from guests...
  // TODO-QSP: $job_hire_hint[$temp_job_id + ', 0']  = 'Check newspaper job listings or online job boards for the h...
  // TODO-QSP: $job_hire_hint[$temp_job_id + ', 1']  = 'You''ve seen a maid-wanted ad at the Pavlovsk Hotel. Ask th...
  // TODO-QSP: $job_hire_hint[$temp_job_id + ', 2']  = 'Speak with the hotel manager — available between ' + $func(...
  // TODO-QSP: $job_title[$temp_job_id]        = 'Hotel Cleaning Gig'
  // TODO-QSP: $job_location[$temp_job_id]        = 'Pavlovsk Hotel'
  // TODO-QSP: $job_schedule_mode[$temp_job_id]    = 'fixed'
  // TODO-QSP: $job_work_days[$temp_job_id + ', 0']  = '1 2 3 4 5 6 7'  & !! All week
  // TODO-QSP: job_arrival[$temp_job_id + ', 0']    = 16 * 60 + 0    & !! 16:00
  // TODO-QSP: job_start[$temp_job_id + ', 0']      = 17 * 60 + 0    & !! 17:00
  // TODO-QSP: job_shift[$temp_job_id + ', 0']      = 2 * 60 + 30    & !! 2.5 hours (ends ~19:30)
  // TODO-QSP: $job_pay_interval_def[$temp_job_id]    = 'shift'
  ((s as any).job_pay_rate_def ?? {})[String((s as any).temp_job_id ?? 0)] = 375;
  ((s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_schedule_switchable ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  return;
  scene.build();
}

function enterPavClinicCleaner(s: GameState, scene: SceneBuilder): void {
  ((s as any).job_card_hidden ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  // TODO-QSP: $job_desc[$temp_job_id]          = 'Keep the building spotless during afternoon and evening hours.'
  // TODO-QSP: $job_hire_hint[$temp_job_id + ', 0']  = 'Head to the Pavlovsk clinic and look for the job listing po...
  // TODO-QSP: $job_hire_hint[$temp_job_id + ', 1']  = 'You''ve seen the job listing. Ask the head doctor directly ...
  // TODO-QSP: $job_title[$temp_job_id]        = 'Clinic Cleaning Gig'
  // TODO-QSP: $job_location[$temp_job_id]        = 'Pavlovsk Clinic'
  // TODO-QSP: $job_schedule_mode[$temp_job_id]    = 'windowed'
  // TODO-QSP: $job_work_days[$temp_job_id + ', 0']  = '1 2 3 4 5 6 7'  & !! All week
  // TODO-QSP: job_arrival[$temp_job_id + ', 0']    = 14 * 60 + 0    & !! 14:00 (840)
  // TODO-QSP: job_start[$temp_job_id + ', 0']      = 21 * 60 + 0    & !! 21:00 (1260) — latest start deadline
  // TODO-QSP: job_shift[$temp_job_id + ', 0']      = 1 * 60 + 0    & !! 1 hour (60 min)
  // TODO-QSP: $job_pay_interval_def[$temp_job_id]    = 'shift'
  ((s as any).job_pay_rate_def ?? {})[String((s as any).temp_job_id ?? 0)] = 100;
  ((s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_schedule_switchable ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  return;
  scene.build();
}

function enterPavFactory(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $job_desc[$temp_job_id]          = 'Sew garments on the production line. Mandatory weekday shifts.'
  // TODO-QSP: $job_hire_hint[$temp_job_id + ', 0']  = 'Apply at the Pavlovsk textile factory during working hours....
  // TODO-QSP: $job_title[$temp_job_id]        = 'Factory Worker'
  // TODO-QSP: $job_location[$temp_job_id]        = 'Pavlovsk Factory'
  // TODO-QSP: $job_schedule_mode[$temp_job_id]    = 'fixed'
  // TODO-QSP: $job_work_days[$temp_job_id + ', 0']  = '1 2 3 4 5'    & !! Mon-Fri
  // TODO-QSP: job_arrival[$temp_job_id + ', 0']    = 15 * 60 + 0    & !! 15:00 (900) — arrive 1h early
  // TODO-QSP: job_start[$temp_job_id + ', 0']      = 16 * 60 + 0    & !! 16:00 (960)
  // TODO-QSP: job_shift[$temp_job_id + ', 0']      = 4 * 60 + 0    & !! 4 hours (240 min)
  // TODO-QSP: $job_work_days[$temp_job_id + ', 1']  = '1 2 3 4 5'    & !! Mon-Fri
  // TODO-QSP: job_arrival[$temp_job_id + ', 1']    = 7 * 60 + 0    & !! 07:00 (420) — arrive 1h early
  // TODO-QSP: job_start[$temp_job_id + ', 1']      = 8 * 60 + 0    & !! 08:00 (480)
  // TODO-QSP: job_shift[$temp_job_id + ', 1']      = 8 * 60 + 0    & !! 8 hours (480 min)
  // TODO-QSP: $job_pay_interval_def[$temp_job_id]    = 'hourly'
  ((s as any).job_pay_rate_def ?? {})[String((s as any).temp_job_id ?? 0)] = 150;
  ((s as any).job_penalty_per_miss ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_penalty_max_debt ?? {})[String((s as any).temp_job_id ?? 0)] = 3;
  ((s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_schedule_switchable ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  return;
  scene.build();
}

function enterPavMailgirl(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $job_desc[$temp_job_id]          = 'Carry and deliver the town''s mail on your assigned routes.'
  // TODO-QSP: $job_hire_hint[$temp_job_id + ', 0']  = 'Ask the postmaster at the Pavlovsk post office about mail d...
  // TODO-QSP: $job_hire_hint[$temp_job_id + ', 1']  = 'You turned down the Saturday delivery offer. Head back to t...
  // TODO-QSP: $job_hire_hint[$temp_job_id + ', 2']  = 'The postmaster is expecting you at the post office on Satur...
  // TODO-QSP: $job_hire_hint[$temp_job_id + ', 3']  = 'You completed your trial shift. Go back to the post office ...
  // TODO-QSP: $job_title[$temp_job_id]        = 'Mail delivery Gig'
  // TODO-QSP: $job_location[$temp_job_id]        = 'Pavlovsk Post Office'
  // TODO-QSP: $job_schedule_mode[$temp_job_id]    = 'fixed'
  // TODO-QSP: $job_work_days[$temp_job_id + ', 0']  = '6'        & !! Saturday only
  // TODO-QSP: job_arrival[$temp_job_id + ', 0']    = 11 * 60 + 0    & !! 11:00 (660)
  // TODO-QSP: job_start[$temp_job_id + ', 0']      = 12 * 60 + 0    & !! 12:00 (720)
  // TODO-QSP: job_shift[$temp_job_id + ', 0']      = 3 * 60 + 0    & !! 3 hours (180 min, ends ~15:00)
  // TODO-QSP: $job_pay_interval_def[$temp_job_id]    = 'shift'
  ((s as any).job_pay_rate_def ?? {})[String((s as any).temp_job_id ?? 0)] = 450;
  ((s as any).job_penalty_per_miss ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_penalty_max_debt ?? {})[String((s as any).temp_job_id ?? 0)] = 4;
  ((s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_schedule_switchable ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  return;
  scene.build();
}

function enterPavTourGuide(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $job_desc[$temp_job_id]          = 'Escort tourists around the park and share its history. Summer on...
  // TODO-QSP: $job_hire_hint[$temp_job_id + ', 0']  = 'Ask about tour guide positions at the Pavlovsk Park entranc...
  // TODO-QSP: $job_title[$temp_job_id]        = 'Tour Guide Gig'
  // TODO-QSP: $job_location[$temp_job_id]        = 'Pavlovsk Park'
  // TODO-QSP: $job_schedule_mode[$temp_job_id]    = 'windowed'
  // TODO-QSP: $job_work_dates[$temp_job_id]      = '0601-0831'
  // TODO-QSP: $job_work_days[$temp_job_id + ', 0']  = '1 2 3 4 5 6 7'  & !! All week
  // TODO-QSP: job_arrival[$temp_job_id + ', 0']    = 8 * 60 + 0    & !! 08:00 (480)
  // TODO-QSP: job_start[$temp_job_id + ', 0']      = 12 * 60 + 0    & !! 12:00 (720) — latest start
  // TODO-QSP: job_shift[$temp_job_id + ', 0']      = 8 * 60 + 0    & !! 8 hours (480 min)
  // TODO-QSP: $job_pay_interval_def[$temp_job_id]    = 'shift'
  ((s as any).job_pay_rate_def ?? {})[String((s as any).temp_job_id ?? 0)] = 1000;
  ((s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_schedule_switchable ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  return;
  scene.build();
}

function enterPavBarbershopCleaner(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $job_desc[$temp_job_id]          = 'Sweep up hair and keep the place tidy. Come by any time the shop...
  // TODO-QSP: $job_hire_hint[$temp_job_id + ', 0']  = 'Visit the Pavlovsk barbershop and ask Mr. Syomin if he need...
  // TODO-QSP: $job_title[$temp_job_id]        = 'Barbershop Cleaning Gig'
  // TODO-QSP: $job_location[$temp_job_id]        = 'Pavlovsk Barbershop'
  // TODO-QSP: $job_schedule_mode[$temp_job_id]    = 'windowed'
  // TODO-QSP: $job_work_days[$temp_job_id + ', 0']  = '1 2 3 4 5 6 7'  & !! All week
  // TODO-QSP: job_arrival[$temp_job_id + ', 0']    = 8 * 60 + 0    & !! 08:00 (480)
  // TODO-QSP: job_start[$temp_job_id + ', 0']      = 18 * 60 + 0    & !! 18:00 (1080) — latest start
  // TODO-QSP: job_shift[$temp_job_id + ', 0']      = 1 * 60 + 0    & !! 1 hour (60 min)
  // TODO-QSP: $job_pay_interval_def[$temp_job_id]    = 'shift'
  ((s as any).job_pay_rate_def ?? {})[String((s as any).temp_job_id ?? 0)] = 125;
  ((s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_schedule_switchable ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  return;
  scene.build();
}

function enterPavTrainCleaner(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $job_desc[$temp_job_id]          = 'Clean the train station waiting room and restrooms. Work any tim...
  // TODO-QSP: $job_hire_hint[$temp_job_id + ', 0']  = 'Visit the station manager''s office at the Pavlovsk railway...
  // TODO-QSP: $job_title[$temp_job_id]        = 'Train Station Cleaning Gig'
  // TODO-QSP: $job_location[$temp_job_id]        = 'Pavlovsk Train Station'
  // TODO-QSP: $job_schedule_mode[$temp_job_id]    = 'on_demand'
  // TODO-QSP: $job_available_days[$temp_job_id]    = '1 2 3 4 5 6 7'  & !! All week
  ((s as any).job_available_start ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_available_end ?? {})[String((s as any).temp_job_id ?? 0)] = 23 * 60 + 59;
  // TODO-QSP: $job_pay_interval_def[$temp_job_id]    = 'shift'
  ((s as any).job_pay_rate_def ?? {})[String((s as any).temp_job_id ?? 0)] = 250;
  ((s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_schedule_switchable ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  return;
  scene.build();
}

function enterPavPoolLifeguard(s: GameState, scene: SceneBuilder): void {
  ((s as any).job_card_hidden ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  // TODO-QSP: $job_desc[$temp_job_id]          = 'Watch over swimmers and keep the pool safe. Weekend shifts at th...
  // TODO-QSP: $job_hire_hint[$temp_job_id + ', 0']  = 'Look for the lifeguard-wanted sign at the Pavlovsk swimming...
  // TODO-QSP: $job_hire_hint[$temp_job_id + ', 1']  = 'You''ve applied for the lifeguard position. Training begins...
  // TODO-QSP: $job_hire_hint[$temp_job_id + ', 2']  = 'You''ve completed your first training day. Come back Sunday...
  // TODO-QSP: $job_title[$temp_job_id]        = 'Lifeguard'
  // TODO-QSP: $job_location[$temp_job_id]        = 'Pavlovsk Swimming Pool'
  // TODO-QSP: $job_schedule_mode[$temp_job_id]    = 'fixed'
  // TODO-QSP: $job_work_days[$temp_job_id + ', 0']  = '6 7'        & !! Sat, Sun
  // TODO-QSP: job_arrival[$temp_job_id + ', 0']    = 11 * 60 + 0    & !! 11:00 (660)
  // TODO-QSP: job_start[$temp_job_id + ', 0']      = 13 * 60 + 0    & !! 13:00 (780) - hour>12 is the miss gate
  // TODO-QSP: job_shift[$temp_job_id + ', 0']      = 6 * 60 + 0    & !! 6 hours (ends 18:00)
  // TODO-QSP: $job_work_days[$temp_job_id + ', 1']  = '4 5 6 7'      & !! Thu, Fri, Sat, Sun
  // TODO-QSP: job_arrival[$temp_job_id + ', 1']    = 11 * 60 + 0    & !! 11:00 (660)
  // TODO-QSP: job_start[$temp_job_id + ', 1']      = 13 * 60 + 0    & !! 13:00 (780) - hour>12 is the miss gate
  // TODO-QSP: job_shift[$temp_job_id + ', 1']      = 6 * 60 + 0    & !! 6 hours (ends 18:00)
  // TODO-QSP: $job_pay_interval_def[$temp_job_id]    = 'shift'
  ((s as any).job_pay_rate_def ?? {})[String((s as any).temp_job_id ?? 0)] = 250;
  ((s as any).job_penalty_per_miss ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_penalty_max_debt ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_schedule_switchable ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  return;
  scene.build();
}

function enterPavVocSchoolTeacher(s: GameState, scene: SceneBuilder): void {
  ((s as any).job_card_hidden ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  // TODO-QSP: $job_desc[$temp_job_id]          = 'Teach classes at the Pavlovsk Lyceum on weekdays. Requires a uni...
  // TODO-QSP: $job_hire_hint[$temp_job_id + ', 0']  = 'The Pavlovsk Lyceum personnel department is hiring a certif...
  // TODO-QSP: $job_title[$temp_job_id]      = 'Teacher'
  // TODO-QSP: $job_location[$temp_job_id]      = 'Pavlovsk Lyceum'
  // TODO-QSP: $job_schedule_mode[$temp_job_id]  = 'fixed'
  // TODO-QSP: $job_work_days[$temp_job_id + ', 0']  = '1 2 3 4 5 6'  & !! Mon-Sat
  // TODO-QSP: job_arrival[$temp_job_id + ', 0']    = 14 * 60      & !! 14:00 (840) — Start teaching act appears
  // TODO-QSP: job_start[$temp_job_id + ', 0']      = 15 * 60      & !! 15:00 (900) — Start teaching act disappears
  // TODO-QSP: job_shift[$temp_job_id + ', 0']      = 2 * 60      & !! 2 hours (ends 16:00)
  // TODO-QSP: $job_pay_interval_def[$temp_job_id]  = 'none'
  ((s as any).job_pay_rate_def ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_penalty_per_miss ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_penalty_max_debt ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  return;
  scene.build();
}

function enterCityMarketSaleswoman(s: GameState, scene: SceneBuilder): void {
  ((s as any).job_card_hidden ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  // TODO-QSP: $job_desc[$temp_job_id]          = 'Sell clothing from Arthur''s market stall in the city. Pay is co...
  // TODO-QSP: $job_hire_hint[$temp_job_id + ', 0']  = 'Look for the ad on a stall at the city market. Arthur is hi...
  // TODO-QSP: $job_title[$temp_job_id]      = 'Market Saleswoman'
  // TODO-QSP: $job_location[$temp_job_id]      = 'City Market'
  // TODO-QSP: $job_schedule_mode[$temp_job_id]  = 'fixed'
  // TODO-QSP: $job_work_days[$temp_job_id + ', 0']  = '2 4 6'    & !! Tue, Thu, Sat
  // TODO-QSP: job_arrival[$temp_job_id + ', 0']    = 8 * 60    & !! 8:00 (480)
  // TODO-QSP: job_start[$temp_job_id + ', 0']      = 9 * 60    & !! 9:00 (540)
  // TODO-QSP: job_shift[$temp_job_id + ', 0']      = 5 * 60    & !! 5 hours (ends 14:00)
  // TODO-QSP: $job_pay_interval_def[$temp_job_id]  = 'none'
  ((s as any).job_pay_rate_def ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_penalty_per_miss ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_penalty_max_debt ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  return;
  scene.build();
}

function enterHighwayBrothelProstitute(s: GameState, scene: SceneBuilder): void {
  ((s as any).job_card_hidden ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  // TODO-QSP: $job_desc[$temp_job_id]          = 'Work as a prostitute at the highway S&M brothel. On-demand shift...
  // TODO-QSP: $job_hire_hint[$temp_job_id + ', 0']  = 'Get wasted in the highway hotel bar and see where life take...
  // TODO-QSP: $job_title[$temp_job_id]        = 'Highway Brothel Prostitute'
  // TODO-QSP: $job_location[$temp_job_id]        = 'Pavlovsk Highway Brothel'
  // TODO-QSP: $job_schedule_mode[$temp_job_id]    = 'on_demand'
  // TODO-QSP: $job_available_days[$temp_job_id]    = '1 2 3 4 5 6 7'  & !! All week
  ((s as any).job_available_start ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_available_end ?? {})[String((s as any).temp_job_id ?? 0)] = 23 * 60 + 59;
  // TODO-QSP: $job_pay_interval_def[$temp_job_id]    = 'hourly'
  ((s as any).job_pay_rate_def ?? {})[String((s as any).temp_job_id ?? 0)] = 500;
  ((s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_schedule_switchable ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  return;
  scene.build();
}

function enterNichMaid(s: GameState, scene: SceneBuilder): void {
  ((s as any).job_card_hidden ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  // TODO-QSP: $job_desc[$temp_job_id]          = 'Cook, clean, and manage the household. Salary paid monthly via l...
  // TODO-QSP: $job_hire_hint[$temp_job_id + ', 0']  = 'Build a close friendship with Tanya — she may know of an op...
  // TODO-QSP: $job_hire_hint[$temp_job_id + ', 1']  = 'Tanya wants to set up a job interview with her parents. Get...
  // TODO-QSP: $job_title[$temp_job_id]        = 'Live-in Maid'
  // TODO-QSP: $job_location[$temp_job_id]        = 'Nicholas'' Apartment'
  // TODO-QSP: $job_schedule_mode[$temp_job_id]    = 'fixed'
  // TODO-QSP: $job_work_days[$temp_job_id + ', 0']  = '4 5 6 7 1 2'    & !! Thu, Fri, Sat, Sun, Mon, Tue
  // TODO-QSP: job_arrival[$temp_job_id + ', 0']    = 8 * 60 + 0    & !! 08:00 (480)
  // TODO-QSP: job_start[$temp_job_id + ', 0']      = 9 * 60 + 0    & !! 09:00 (540)
  // TODO-QSP: job_shift[$temp_job_id + ', 0']      = 8 * 60 + 0    & !! 8 hours (480 min, ends 17:00)
  // TODO-QSP: $job_pay_interval_def[$temp_job_id]    = 'none'
  ((s as any).job_pay_rate_def ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_penalty_per_miss ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_penalty_max_debt ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_schedule_switchable ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  return;
  scene.build();
}

function enterCitySalonMasseuse(s: GameState, scene: SceneBuilder): void {
  if (((s as any).job_rank ?? 0)?.[String((s as any).temp_job_id ?? 0)] === 2) {
  } else {
    if (((s as any).job_rank ?? 0)?.[String((s as any).temp_job_id ?? 0)] === 3) {
    } else {
      if (((s as any).job_rank ?? 0)?.[String((s as any).temp_job_id ?? 0)] === 4) {
      } else {
        if (((s as any).job_rank ?? 0)?.[String((s as any).temp_job_id ?? 0)] >= 5) {
        }
      }
    }
  }
  if (((s as any).job_shifts_this_period ?? 0)?.[String((s as any).temp_job_id ?? 0)] > 0) {
    // TODO-QSP: $temp_jl_desc += ' You have worked <<job_shifts_this_period[$temp_job_id]>> shift<<iif(job_shifts_th...
  }
  if (((s as any).job_bonus_pay ?? 0)?.[String((s as any).temp_job_id ?? 0)] > 0) {
    // TODO-QSP: $temp_jl_desc += ' <<$func(''money'', ''format'', job_bonus_pay[$temp_job_id])>> waiting for collect...
  }
  // TODO-QSP: $job_desc[$temp_job_id] = $temp_jl_desc
  // TODO-QSP: $job_hire_hint[$temp_job_id + ', 0'] = 'Visit the Beauty Bar salon in the city mall and speak to the...
  // TODO-QSP: $job_title[$temp_job_id]      = 'Masseuse'
  // TODO-QSP: $job_location[$temp_job_id]      = 'Beauty Bar Salon'
  // TODO-QSP: $job_schedule_mode[$temp_job_id]  = 'booking'
  ((s as any).job_booking_window_days ?? {})[String((s as any).temp_job_id ?? 0)] = 14;
  ((s as any).job_booking_slots_per_day ?? {})[String((s as any).temp_job_id ?? 0)] = 3;
  ((s as any).job_booking_max_concurrent ?? {})[String((s as any).temp_job_id ?? 0)] = 21;
  ((s as any).job_booking_min_gap_days ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  // TODO-QSP: job_slot_arrival[$temp_job_id + ', 0']  = 8 * 60 + 30  & !! 08:30
  // TODO-QSP: job_slot_start[$temp_job_id + ', 0']  = 9 * 60    & !! 09:00
  // TODO-QSP: job_slot_shift[$temp_job_id + ', 0']  = 4 * 60    & !! 4h
  // TODO-QSP: job_slot_arrival[$temp_job_id + ', 1']  = 12 * 60 + 30  & !! 12:30
  // TODO-QSP: job_slot_start[$temp_job_id + ', 1']  = 13 * 60    & !! 13:00
  // TODO-QSP: job_slot_shift[$temp_job_id + ', 1']  = 4 * 60    & !! 4h
  // TODO-QSP: job_slot_arrival[$temp_job_id + ', 2']  = 16 * 60 + 30  & !! 16:30
  // TODO-QSP: job_slot_start[$temp_job_id + ', 2']  = 17 * 60    & !! 17:00
  // TODO-QSP: job_slot_shift[$temp_job_id + ', 2']  = 4 * 60    & !! 4h
  // TODO-QSP: $job_pay_interval_def[$temp_job_id]  = 'none'
  ((s as any).job_pay_rate_def ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_penalty_per_miss ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_schedule_switchable ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_refresh_desc ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  return;
  scene.build();
}

function enterPavLeonidSlave(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $job_desc[$temp_job_id]    = 'You are obligated to present yourself to Leonid Nosov at his office wh...
  // TODO-QSP: $job_title[$temp_job_id]  = 'Slave'
  // TODO-QSP: $job_location[$temp_job_id]  = "Leonid's Office"
  // TODO-QSP: $job_schedule_mode[$temp_job_id] = 'booking'
  ((s as any).job_booking_window_days ?? {})[String((s as any).temp_job_id ?? 0)] = 7;
  ((s as any).job_booking_slots_per_day ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_booking_max_concurrent ?? {})[String((s as any).temp_job_id ?? 0)] = 7;
  ((s as any).job_booking_min_gap_days ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  // TODO-QSP: job_slot_arrival[$temp_job_id + ', 0']  = 19 * 60    & !! 19:00
  // TODO-QSP: job_slot_start[$temp_job_id + ', 0']  = 20 * 60    & !! 20:00
  // TODO-QSP: job_slot_shift[$temp_job_id + ', 0']  = 2 * 60    & !! 2h
  // TODO-QSP: $job_pay_interval_def[$temp_job_id]  = 'none'
  ((s as any).job_pay_rate_def ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_penalty_per_miss ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  // TODO-QSP: $job_on_miss_handler[$temp_job_id]    = 'leonid'
  // TODO-QSP: $job_on_miss_handler_func[$temp_job_id]  = 'on_miss'
  ((s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_schedule_switchable ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  return;
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
    case 'city_pornstudio_delivery':
      enterCityPornstudioDelivery(s, scene);
      break;
    case 'city_aphrodite_model':
      enterCityAphroditeModel(s, scene);
      break;
    case 'pav_hotel_maid':
      enterPavHotelMaid(s, scene);
      break;
    case 'pav_clinic_cleaner':
      enterPavClinicCleaner(s, scene);
      break;
    case 'pav_factory':
      enterPavFactory(s, scene);
      break;
    case 'pav_mailgirl':
      enterPavMailgirl(s, scene);
      break;
    case 'pav_tour_guide':
      enterPavTourGuide(s, scene);
      break;
    case 'pav_barbershop_cleaner':
      enterPavBarbershopCleaner(s, scene);
      break;
    case 'pav_train_cleaner':
      enterPavTrainCleaner(s, scene);
      break;
    case 'pav_pool_lifeguard':
      enterPavPoolLifeguard(s, scene);
      break;
    case 'pav_voc_school_teacher':
      enterPavVocSchoolTeacher(s, scene);
      break;
    case 'city_market_saleswoman':
      enterCityMarketSaleswoman(s, scene);
      break;
    case 'highway_brothel_prostitute':
      enterHighwayBrothelProstitute(s, scene);
      break;
    case 'nich_maid':
      enterNichMaid(s, scene);
      break;
    case 'city_salon_masseuse':
      enterCitySalonMasseuse(s, scene);
      break;
    case 'pav_leonid_slave':
      enterPavLeonidSlave(s, scene);
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
