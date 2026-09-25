import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterCityOfficeSecretary(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_job_id = 'city_office_secretary';
  ((s as any).job_card_hidden = (s as any).job_card_hidden ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_desc = (s as any).job_desc ?? {})[String((s as any).temp_job_id ?? 0)] = 'Manage schedules, handle correspondence, and keep the office running smoothly.';
  ((s as any).job_hire_hint = (s as any).job_hire_hint ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 'Find the job listing for Titran-Express online or at various notice boards.';
  ((s as any).job_hire_hint = (s as any).job_hire_hint ?? {})[((s as any).temp_job_id ?? 0) + ', 1'] = 'You\'ve seen the job listing. Visit Titran-Express and ask for an interview. A secretary certificate is required.';
  ((s as any).job_title = (s as any).job_title ?? {})[String((s as any).temp_job_id ?? 0)] = 'Office Secretary';
  ((s as any).job_location = (s as any).job_location ?? {})[String((s as any).temp_job_id ?? 0)] = 'Titran-Express';
  ((s as any).job_schedule_mode = (s as any).job_schedule_mode ?? {})[String((s as any).temp_job_id ?? 0)] = 'fixed';
  ((s as any).job_work_days = (s as any).job_work_days ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = '1 2 3 4 5';
  ((s as any).job_arrival = (s as any).job_arrival ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 480;
  ((s as any).job_start = (s as any).job_start ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 540;
  ((s as any).job_shift = (s as any).job_shift ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 480;
  ((s as any).job_pay_interval_def = (s as any).job_pay_interval_def ?? {})[String((s as any).temp_job_id ?? 0)] = 'shift';
  ((s as any).job_pay_rate_def = (s as any).job_pay_rate_def ?? {})[String((s as any).temp_job_id ?? 0)] = 1500;
  ((s as any).job_blocking = (s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_add_to_calendar = (s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_show_stat_icon = (s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_schedule_switchable = (s as any).job_schedule_switchable ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  scene.build();
}

function enterCityCafeWaitress(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_job_id = 'city_cafe_waitress';
  ((s as any).job_desc = (s as any).job_desc ?? {})[String((s as any).temp_job_id ?? 0)] = 'Take orders, serve tables, and keep customers happy. Tips can supplement your wages.';
  ((s as any).job_hire_hint = (s as any).job_hire_hint ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 'Stop by the Roadhouse Cafe during opening hours and ask about waitress work.';
  ((s as any).job_title = (s as any).job_title ?? {})[String((s as any).temp_job_id ?? 0)] = 'Cafe Waitress';
  ((s as any).job_location = (s as any).job_location ?? {})[String((s as any).temp_job_id ?? 0)] = 'the Roadhouse Cafe';
  ((s as any).job_schedule_mode = (s as any).job_schedule_mode ?? {})[String((s as any).temp_job_id ?? 0)] = 'fixed';
  ((s as any).job_work_days = (s as any).job_work_days ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = '2 3 4 5 6';
  ((s as any).job_arrival = (s as any).job_arrival ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 660;
  ((s as any).job_start = (s as any).job_start ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 720;
  ((s as any).job_shift = (s as any).job_shift ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 480;
  ((s as any).job_pay_interval_def = (s as any).job_pay_interval_def ?? {})[String((s as any).temp_job_id ?? 0)] = 'shift';
  ((s as any).job_pay_rate_def = (s as any).job_pay_rate_def ?? {})[String((s as any).temp_job_id ?? 0)] = 600;
  ((s as any).job_blocking = (s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_add_to_calendar = (s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_show_stat_icon = (s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_schedule_switchable = (s as any).job_schedule_switchable ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  scene.build();
}

function enterCityHospitalNurse(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_job_id = 'city_hospital_nurse';
  ((s as any).job_card_hidden = (s as any).job_card_hidden ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_desc = (s as any).job_desc ?? {})[String((s as any).temp_job_id ?? 0)] = 'Assist with patient care, take vitals, and support the nursing team.';
  ((s as any).job_hire_hint = (s as any).job_hire_hint ?? {})[((s as any).temp_job_id ?? 0) + ', 1'] = 'Kat put in a good word for you at the clinic. Visit the city clinic and ask to see the chief doctor.';
  ((s as any).job_title = (s as any).job_title ?? {})[String((s as any).temp_job_id ?? 0)] = 'Hospital Nurse';
  ((s as any).job_location = (s as any).job_location ?? {})[String((s as any).temp_job_id ?? 0)] = 'City Hospital';
  ((s as any).job_schedule_mode = (s as any).job_schedule_mode ?? {})[String((s as any).temp_job_id ?? 0)] = 'fixed';
  ((s as any).job_work_days = (s as any).job_work_days ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = '1 2 3 4 5';
  ((s as any).job_arrival = (s as any).job_arrival ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 8 * 60;
  ((s as any).job_start = (s as any).job_start ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 9 * 60;
  ((s as any).job_shift = (s as any).job_shift ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 7 * 60;
  ((s as any).job_pay_interval_def = (s as any).job_pay_interval_def ?? {})[String((s as any).temp_job_id ?? 0)] = 'shift';
  ((s as any).job_pay_rate_def = (s as any).job_pay_rate_def ?? {})[String((s as any).temp_job_id ?? 0)] = 1500;
  ((s as any).job_blocking = (s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_add_to_calendar = (s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_show_stat_icon = (s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_schedule_switchable = (s as any).job_schedule_switchable ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  scene.build();
}

function enterCityDinerDishwasher(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_job_id = 'city_diner_dishwasher';
  ((s as any).job_desc = (s as any).job_desc ?? {})[String((s as any).temp_job_id ?? 0)] = 'Wash dishes and keep the kitchen clean. Come by any time during opening hours.';
  ((s as any).job_hire_hint = (s as any).job_hire_hint ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 'Head into the City Diner kitchen and ask to wash dishes. No experience needed.';
  ((s as any).job_title = (s as any).job_title ?? {})[String((s as any).temp_job_id ?? 0)] = 'Diner Cleaning Gig';
  ((s as any).job_location = (s as any).job_location ?? {})[String((s as any).temp_job_id ?? 0)] = 'City Diner';
  ((s as any).job_schedule_mode = (s as any).job_schedule_mode ?? {})[String((s as any).temp_job_id ?? 0)] = 'windowed';
  ((s as any).job_work_days = (s as any).job_work_days ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = '1 2 3 4 5 6 7';
  ((s as any).job_arrival = (s as any).job_arrival ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 6 * 60 + 0;
  ((s as any).job_start = (s as any).job_start ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 23 * 60 + 0;
  ((s as any).job_shift = (s as any).job_shift ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 1 * 60 + 0;
  ((s as any).job_pay_interval_def = (s as any).job_pay_interval_def ?? {})[String((s as any).temp_job_id ?? 0)] = 'shift';
  ((s as any).job_pay_rate_def = (s as any).job_pay_rate_def ?? {})[String((s as any).temp_job_id ?? 0)] = 70;
  ((s as any).job_blocking = (s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_add_to_calendar = (s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_show_stat_icon = (s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_schedule_switchable = (s as any).job_schedule_switchable ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  return;
  scene.build();
}

function enterCityDinerFloorWasher(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_job_id = 'city_diner_floor_washer';
  ((s as any).job_card_hidden = (s as any).job_card_hidden ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_desc = (s as any).job_desc ?? {})[String((s as any).temp_job_id ?? 0)] = 'Mop and clean the dining area floor each morning before the rush.';
  ((s as any).job_hire_hint = (s as any).job_hire_hint ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 'Complete a few dishwashing shifts at the City Diner first, then ask about floor washing too.';
  ((s as any).job_title = (s as any).job_title ?? {})[String((s as any).temp_job_id ?? 0)] = 'Diner Floor Washing';
  ((s as any).job_location = (s as any).job_location ?? {})[String((s as any).temp_job_id ?? 0)] = 'City Diner';
  ((s as any).job_schedule_mode = (s as any).job_schedule_mode ?? {})[String((s as any).temp_job_id ?? 0)] = 'windowed';
  ((s as any).job_work_days = (s as any).job_work_days ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = '1 2 3 4 5 6 7';
  ((s as any).job_arrival = (s as any).job_arrival ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 6 * 60 + 0;
  ((s as any).job_start = (s as any).job_start ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 10 * 60 + 0;
  ((s as any).job_shift = (s as any).job_shift ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 1 * 60 + 0;
  ((s as any).job_pay_interval_def = (s as any).job_pay_interval_def ?? {})[String((s as any).temp_job_id ?? 0)] = 'shift';
  ((s as any).job_pay_rate_def = (s as any).job_pay_rate_def ?? {})[String((s as any).temp_job_id ?? 0)] = 70;
  ((s as any).job_blocking = (s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_add_to_calendar = (s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_show_stat_icon = (s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_schedule_switchable = (s as any).job_schedule_switchable ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  return;
  scene.build();
}

function enterCityOfficeCleaner(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_job_id = 'city_office_cleaner';
  ((s as any).job_card_hidden = (s as any).job_card_hidden ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_desc = (s as any).job_desc ?? {})[String((s as any).temp_job_id ?? 0)] = 'Sweep and mop the floors of the building. Come by any time during business hours.';
  ((s as any).job_hire_hint = (s as any).job_hire_hint ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 'You\'ll hear about this job by word of mouth. Try chatting with people at the city market.';
  ((s as any).job_hire_hint = (s as any).job_hire_hint ?? {})[((s as any).temp_job_id ?? 0) + ', 1'] = 'You\'ve heard about a cleaning job in a small office building. Stop by and ask about available work.';
  ((s as any).job_title = (s as any).job_title ?? {})[String((s as any).temp_job_id ?? 0)] = 'Office Cleaning Gig';
  ((s as any).job_location = (s as any).job_location ?? {})[String((s as any).temp_job_id ?? 0)] = 'Small Office Building';
  ((s as any).job_schedule_mode = (s as any).job_schedule_mode ?? {})[String((s as any).temp_job_id ?? 0)] = 'windowed';
  ((s as any).job_work_days = (s as any).job_work_days ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = '1 2 3 4 5 6 7';
  ((s as any).job_arrival = (s as any).job_arrival ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 7 * 60 + 0;
  ((s as any).job_start = (s as any).job_start ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 22 * 60 + 0;
  ((s as any).job_shift = (s as any).job_shift ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 1 * 60 + 0;
  ((s as any).job_pay_interval_def = (s as any).job_pay_interval_def ?? {})[String((s as any).temp_job_id ?? 0)] = 'shift';
  ((s as any).job_pay_rate_def = (s as any).job_pay_rate_def ?? {})[String((s as any).temp_job_id ?? 0)] = 65;
  ((s as any).job_blocking = (s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_add_to_calendar = (s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_show_stat_icon = (s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_schedule_switchable = (s as any).job_schedule_switchable ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  return;
  scene.build();
}

function enterCityOfficeToiletCleaner(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_job_id = 'city_office_toilet_cleaner';
  ((s as any).job_card_hidden = (s as any).job_card_hidden ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_desc = (s as any).job_desc ?? {})[String((s as any).temp_job_id ?? 0)] = 'Clean and maintain the restrooms at the office building.';
  ((s as any).job_hire_hint = (s as any).job_hire_hint ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 'This position opens up after you\'ve spent some time cleaning floors at the office building.';
  ((s as any).job_hire_hint = (s as any).job_hire_hint ?? {})[((s as any).temp_job_id ?? 0) + ', 1'] = 'Boris Ivanovich mentioned he needs someone for the restrooms. Ask him about more work at the office.';
  ((s as any).job_title = (s as any).job_title ?? {})[String((s as any).temp_job_id ?? 0)] = 'Toilet Cleaning Gig';
  ((s as any).job_location = (s as any).job_location ?? {})[String((s as any).temp_job_id ?? 0)] = 'Small Office Building';
  ((s as any).job_schedule_mode = (s as any).job_schedule_mode ?? {})[String((s as any).temp_job_id ?? 0)] = 'windowed';
  ((s as any).job_work_days = (s as any).job_work_days ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = '1 2 3 4 5 6 7';
  ((s as any).job_arrival = (s as any).job_arrival ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 7 * 60 + 0;
  ((s as any).job_start = (s as any).job_start ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 22 * 60 + 0;
  ((s as any).job_shift = (s as any).job_shift ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 1 * 60 + 0;
  ((s as any).job_pay_interval_def = (s as any).job_pay_interval_def ?? {})[String((s as any).temp_job_id ?? 0)] = 'shift';
  ((s as any).job_pay_rate_def = (s as any).job_pay_rate_def ?? {})[String((s as any).temp_job_id ?? 0)] = 65;
  ((s as any).job_blocking = (s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_add_to_calendar = (s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_show_stat_icon = (s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_schedule_switchable = (s as any).job_schedule_switchable ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  return;
  scene.build();
}

function enterCityDinerSecretary(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_job_id = 'city_diner_secretary';
  ((s as any).job_card_hidden = (s as any).job_card_hidden ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_desc = (s as any).job_desc ?? {})[String((s as any).temp_job_id ?? 0)] = 'Handle office administration and paperwork. Requires a secretary certificate.';
  ((s as any).job_hire_hint = (s as any).job_hire_hint ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 'Obtain a secretary diploma, then show it to Anatoly Borisovich at the diner when the opportunity arises.';
  ((s as any).job_title = (s as any).job_title ?? {})[String((s as any).temp_job_id ?? 0)] = 'Diner Secretary';
  ((s as any).job_location = (s as any).job_location ?? {})[String((s as any).temp_job_id ?? 0)] = 'City Diner';
  ((s as any).job_schedule_mode = (s as any).job_schedule_mode ?? {})[String((s as any).temp_job_id ?? 0)] = 'fixed';
  ((s as any).job_work_days = (s as any).job_work_days ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = '1 2 3 4 5';
  ((s as any).job_arrival = (s as any).job_arrival ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 9 * 60 + 0;
  ((s as any).job_start = (s as any).job_start ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 10 * 60 + 0;
  ((s as any).job_shift = (s as any).job_shift ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 7 * 60 + 0;
  ((s as any).job_pay_interval_def = (s as any).job_pay_interval_def ?? {})[String((s as any).temp_job_id ?? 0)] = 'shift';
  ((s as any).job_pay_rate_def = (s as any).job_pay_rate_def ?? {})[String((s as any).temp_job_id ?? 0)] = 1250;
  ((s as any).job_blocking = (s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_add_to_calendar = (s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_show_stat_icon = (s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_schedule_switchable = (s as any).job_schedule_switchable ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  return;
  scene.build();
}

function enterCityStripBargirl(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_job_id = 'city_strip_bargirl';
  ((s as any).job_desc = (s as any).job_desc ?? {})[String((s as any).temp_job_id ?? 0)] = 'Serve drinks and tend the bar on fixed evening and night shifts.';
  ((s as any).job_hire_hint = (s as any).job_hire_hint ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 'Ask at the Golden Girls strip club about bar work during evening opening hours.';
  ((s as any).job_title = (s as any).job_title ?? {})[String((s as any).temp_job_id ?? 0)] = 'Strip Club Bargirl';
  ((s as any).job_location = (s as any).job_location ?? {})[String((s as any).temp_job_id ?? 0)] = 'Golden Girls';
  ((s as any).job_schedule_mode = (s as any).job_schedule_mode ?? {})[String((s as any).temp_job_id ?? 0)] = 'fixed';
  ((s as any).job_work_days = (s as any).job_work_days ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = '3 4';
  ((s as any).job_arrival = (s as any).job_arrival ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 1020;
  ((s as any).job_start = (s as any).job_start ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 1080;
  ((s as any).job_shift = (s as any).job_shift ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 540;
  ((s as any).job_work_days = (s as any).job_work_days ?? {})[((s as any).temp_job_id ?? 0) + ', 1'] = '5 6';
  ((s as any).job_arrival = (s as any).job_arrival ?? {})[((s as any).temp_job_id ?? 0) + ', 1'] = 1020;
  ((s as any).job_start = (s as any).job_start ?? {})[((s as any).temp_job_id ?? 0) + ', 1'] = 1080;
  ((s as any).job_shift = (s as any).job_shift ?? {})[((s as any).temp_job_id ?? 0) + ', 1'] = 540;
  ((s as any).job_pay_interval_def = (s as any).job_pay_interval_def ?? {})[String((s as any).temp_job_id ?? 0)] = 'shift';
  ((s as any).job_pay_rate_def = (s as any).job_pay_rate_def ?? {})[String((s as any).temp_job_id ?? 0)] = 1125;
  ((s as any).job_blocking = (s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_add_to_calendar = (s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_show_stat_icon = (s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_schedule_switchable = (s as any).job_schedule_switchable ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  scene.build();
}

function enterCityStripStripper(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_job_id = 'city_strip_stripper';
  ((s as any).job_title = (s as any).job_title ?? {})[String((s as any).temp_job_id ?? 0)] = 'Stripper';
  ((s as any).job_location = (s as any).job_location ?? {})[String((s as any).temp_job_id ?? 0)] = 'Golden Girls';
  ((s as any).job_desc = (s as any).job_desc ?? {})[String((s as any).temp_job_id ?? 0)] = 'Dance and strip at the Golden Girls club. Sign up for shifts on the backstage whiteboard.';
  ((s as any).job_hire_hint = (s as any).job_hire_hint ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 'Ask the manager at the Golden Girls strip club about stripper work. You\'ll need erotic and pole dancing skills to pass the audition.';
  ((s as any).job_schedule_mode = (s as any).job_schedule_mode ?? {})[String((s as any).temp_job_id ?? 0)] = 'booking';
  ((s as any).job_booking_window_days = (s as any).job_booking_window_days ?? {})[String((s as any).temp_job_id ?? 0)] = 14;
  ((s as any).job_booking_slots_per_day = (s as any).job_booking_slots_per_day ?? {})[String((s as any).temp_job_id ?? 0)] = 2;
  ((s as any).job_booking_max_concurrent = (s as any).job_booking_max_concurrent ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_booking_min_gap_days = (s as any).job_booking_min_gap_days ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_arrival_start = (s as any).job_arrival_start ?? {})[String((s as any).temp_job_id ?? 0)] = 1020;
  ((s as any).job_arrival_end = (s as any).job_arrival_end ?? {})[String((s as any).temp_job_id ?? 0)] = 1080;
  ((s as any).job_slot_arrival = (s as any).job_slot_arrival ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 1020;
  ((s as any).job_slot_start = (s as any).job_slot_start ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 1080;
  ((s as any).job_slot_shift = (s as any).job_slot_shift ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 300;
  ((s as any).job_slot_arrival = (s as any).job_slot_arrival ?? {})[((s as any).temp_job_id ?? 0) + ', 1'] = 1230;
  ((s as any).job_slot_start = (s as any).job_slot_start ?? {})[((s as any).temp_job_id ?? 0) + ', 1'] = 1260;
  ((s as any).job_slot_shift = (s as any).job_slot_shift ?? {})[((s as any).temp_job_id ?? 0) + ', 1'] = 360;
  ((s as any).job_pay_interval_def = (s as any).job_pay_interval_def ?? {})[String((s as any).temp_job_id ?? 0)] = 'none';
  ((s as any).job_pay_rate_def = (s as any).job_pay_rate_def ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_penalty_per_miss = (s as any).job_penalty_per_miss ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_penalty_max_debt = (s as any).job_penalty_max_debt ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_blocking = (s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_add_to_calendar = (s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_show_stat_icon = (s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_schedule_switchable = (s as any).job_schedule_switchable ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  return;
  scene.build();
}

function enterCityPussycatsClerk(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_job_id = 'city_pussycats_clerk';
  ((s as any).job_desc = (s as any).job_desc ?? {})[String((s as any).temp_job_id ?? 0)] = 'Work the register, fold stock, and help customers find what they\'re looking for.';
  ((s as any).job_hire_hint = (s as any).job_hire_hint ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 'Visit the Pussy-Cats clothing store and ask the manager about available clerk positions.';
  ((s as any).job_title = (s as any).job_title ?? {})[String((s as any).temp_job_id ?? 0)] = 'Shop Clerk';
  ((s as any).job_location = (s as any).job_location ?? {})[String((s as any).temp_job_id ?? 0)] = 'Pussy-Cats, City Mall';
  ((s as any).job_schedule_mode = (s as any).job_schedule_mode ?? {})[String((s as any).temp_job_id ?? 0)] = 'fixed';
  ((s as any).job_work_days = (s as any).job_work_days ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = '1 2 3 4 5';
  ((s as any).job_arrival = (s as any).job_arrival ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 15 * 60 + 30;
  ((s as any).job_start = (s as any).job_start ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 16 * 60 + 0;
  ((s as any).job_shift = (s as any).job_shift ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 4 * 60 + 0;
  ((s as any).job_work_days = (s as any).job_work_days ?? {})[((s as any).temp_job_id ?? 0) + ', 1'] = '6 7';
  ((s as any).job_arrival = (s as any).job_arrival ?? {})[((s as any).temp_job_id ?? 0) + ', 1'] = 8 * 60 + 30;
  ((s as any).job_start = (s as any).job_start ?? {})[((s as any).temp_job_id ?? 0) + ', 1'] = 9 * 60 + 0;
  ((s as any).job_shift = (s as any).job_shift ?? {})[((s as any).temp_job_id ?? 0) + ', 1'] = 6 * 60 + 0;
  ((s as any).job_work_days = (s as any).job_work_days ?? {})[((s as any).temp_job_id ?? 0) + ', 2'] = '1 2 3 4 5';
  ((s as any).job_arrival = (s as any).job_arrival ?? {})[((s as any).temp_job_id ?? 0) + ', 2'] = 8 * 60 + 30;
  ((s as any).job_start = (s as any).job_start ?? {})[((s as any).temp_job_id ?? 0) + ', 2'] = 9 * 60 + 0;
  ((s as any).job_shift = (s as any).job_shift ?? {})[((s as any).temp_job_id ?? 0) + ', 2'] = 6 * 60 + 0;
  ((s as any).job_pay_interval_def = (s as any).job_pay_interval_def ?? {})[String((s as any).temp_job_id ?? 0)] = 'hourly';
  ((s as any).job_pay_rate_def = (s as any).job_pay_rate_def ?? {})[String((s as any).temp_job_id ?? 0)] = 205;
  ((s as any).job_penalty_per_miss = (s as any).job_penalty_per_miss ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_penalty_max_debt = (s as any).job_penalty_max_debt ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_blocking = (s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_add_to_calendar = (s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_show_stat_icon = (s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_schedule_switchable = (s as any).job_schedule_switchable ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  return;
  scene.build();
}

function enterCityPornstudioActress(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_job_id = 'city_pornstudio_actress';
  ((s as any).job_card_hidden = (s as any).job_card_hidden ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_hire_hint = (s as any).job_hire_hint ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 'Visit the porn studio in the city\'s red light district and ask about casting. You\'ll need to be comfortable showing off your body.';
  ((s as any).job_title = (s as any).job_title ?? {})[String((s as any).temp_job_id ?? 0)] = 'Porn Actress';
  ((s as any).job_location = (s as any).job_location ?? {})[String((s as any).temp_job_id ?? 0)] = 'Porn Studio';
  (s as any).temp_jl_desc = 'Film adult movies at the porn studio. Book shoots from the available schedule.';
  if (((s as any).job_bookings_active ?? 0)?.[String((s as any).temp_job_id ?? 0)] > 0) {
    if (qspFunc(s, 'jobs', 'has_booking_for_day', ((s as any).temp_job_id ?? 0), ((s as any).daystart ?? 0)) === 1  &&  ((s as any).job_last_work_day ?? 0)?.[String((s as any).temp_job_id ?? 0)] !== ((s as any).daystart ?? 0)) {
      (s as any).temp_jl_desc = ((s as any).temp_jl_desc ?? 0) + (' You have a shoot today.');
    } else {
      if (qspFunc(s, 'jobs', 'has_booking_for_day', ((s as any).temp_job_id ?? 0), ((s as any).daystart ?? 0) + 1) === 1) {
        (s as any).temp_jl_desc = ((s as any).temp_jl_desc ?? 0) + (' Your next shoot is tomorrow.');
      } else {
        if (((s as any).porndays ?? 0) > 1) {
          (s as any).temp_jl_desc = ((s as any).temp_jl_desc ?? 0) + (' Your next shoot is in ' + ((s as any).porndays ?? 0) + ' days.');
        }
      }
    }
  }
  if (((s as any).firstkasting ?? 0) > 0  &&  ((s as any).pfilmNO ?? 0) < 1) {
    (s as any).temp_avail = (((s as any).job_booking_max_concurrent ?? 0)?.[String((s as any).temp_job_id ?? 0)] ?? 0) - (((s as any).job_bookings_active ?? 0)?.[String((s as any).temp_job_id ?? 0)] ?? 0);
    if (((s as any).temp_avail ?? 0) <= 0) {
      (s as any).temp_jl_desc = ((s as any).temp_jl_desc ?? 0) + (' You have reached the booking limit.');
    } else {
      if (((s as any).temp_avail ?? 0) === 1) {
        (s as any).temp_jl_desc = ((s as any).temp_jl_desc ?? 0) + (' You can book 1 more shoot.');
      } else {
        (s as any).temp_jl_desc = ((s as any).temp_jl_desc ?? 0) + (' You can book up to ' + ((s as any).temp_avail ?? 0) + ' more shoots.');
      }
    }
    (s as any).temp_avail = undefined;
  }
  ((s as any).job_desc = (s as any).job_desc ?? {})[String((s as any).temp_job_id ?? 0)] = ((s as any).temp_jl_desc ?? 0);
  (s as any).temp_jl_desc = undefined;
  ((s as any).job_schedule_mode = (s as any).job_schedule_mode ?? {})[String((s as any).temp_job_id ?? 0)] = 'booking';
  ((s as any).job_booking_window_days = (s as any).job_booking_window_days ?? {})[String((s as any).temp_job_id ?? 0)] = 42;
  ((s as any).job_booking_slots_per_day = (s as any).job_booking_slots_per_day ?? {})[String((s as any).temp_job_id ?? 0)] = 4;
  ((s as any).job_booking_max_concurrent = (s as any).job_booking_max_concurrent ?? {})[String((s as any).temp_job_id ?? 0)] = 5;
  ((s as any).job_booking_min_gap_days = (s as any).job_booking_min_gap_days ?? {})[String((s as any).temp_job_id ?? 0)] = 6;
  ((s as any).job_slot_arrival = (s as any).job_slot_arrival ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 9 * 60 + 0;
  ((s as any).job_slot_start = (s as any).job_slot_start ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 10 * 60 + 0;
  ((s as any).job_slot_shift = (s as any).job_slot_shift ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 4 * 60 + 0;
  ((s as any).job_slot_arrival = (s as any).job_slot_arrival ?? {})[((s as any).temp_job_id ?? 0) + ', 1'] = 11 * 60 + 0;
  ((s as any).job_slot_start = (s as any).job_slot_start ?? {})[((s as any).temp_job_id ?? 0) + ', 1'] = 12 * 60 + 0;
  ((s as any).job_slot_shift = (s as any).job_slot_shift ?? {})[((s as any).temp_job_id ?? 0) + ', 1'] = 4 * 60 + 0;
  ((s as any).job_slot_arrival = (s as any).job_slot_arrival ?? {})[((s as any).temp_job_id ?? 0) + ', 2'] = 13 * 60 + 0;
  ((s as any).job_slot_start = (s as any).job_slot_start ?? {})[((s as any).temp_job_id ?? 0) + ', 2'] = 14 * 60 + 0;
  ((s as any).job_slot_shift = (s as any).job_slot_shift ?? {})[((s as any).temp_job_id ?? 0) + ', 2'] = 4 * 60 + 0;
  ((s as any).job_slot_arrival = (s as any).job_slot_arrival ?? {})[((s as any).temp_job_id ?? 0) + ', 3'] = 15 * 60 + 0;
  ((s as any).job_slot_start = (s as any).job_slot_start ?? {})[((s as any).temp_job_id ?? 0) + ', 3'] = 16 * 60 + 0;
  ((s as any).job_slot_shift = (s as any).job_slot_shift ?? {})[((s as any).temp_job_id ?? 0) + ', 3'] = 4 * 60 + 0;
  ((s as any).job_pay_interval_def = (s as any).job_pay_interval_def ?? {})[String((s as any).temp_job_id ?? 0)] = 'shift';
  ((s as any).job_pay_rate_def = (s as any).job_pay_rate_def ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_penalty_per_miss = (s as any).job_penalty_per_miss ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_penalty_max_debt = (s as any).job_penalty_max_debt ?? {})[String((s as any).temp_job_id ?? 0)] = 20000;
  ((s as any).job_on_miss_handler = (s as any).job_on_miss_handler ?? {})[String((s as any).temp_job_id ?? 0)] = 'pornschedule';
  ((s as any).job_on_miss_handler_func = (s as any).job_on_miss_handler_func ?? {})[String((s as any).temp_job_id ?? 0)] = 'on_booking_miss';
  ((s as any).job_blocking = (s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_add_to_calendar = (s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_show_stat_icon = (s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_schedule_switchable = (s as any).job_schedule_switchable ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_refresh_desc = (s as any).job_refresh_desc ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  return;
  scene.build();
}

function enterCityPornstudioDelivery(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_job_id = 'city_pornstudio_delivery';
  ((s as any).job_card_hidden = (s as any).job_card_hidden ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_desc = (s as any).job_desc ?? {})[String((s as any).temp_job_id ?? 0)] = 'Make weekly deliveries for the studio. Pick up a drive on Friday, deliver to the sauna, and return with the payment envelope the same day.';
  ((s as any).job_hire_hint = (s as any).job_hire_hint ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 'A contact near the residential trash area may be able to get you this gig.';
  ((s as any).job_hire_hint = (s as any).job_hire_hint ?? {})[((s as any).temp_job_id ?? 0) + ', 1'] = 'You\'ve been offered the job. Visit the porn studio and show your passport to Dimitri.';
  ((s as any).job_title = (s as any).job_title ?? {})[String((s as any).temp_job_id ?? 0)] = 'Delivery Courier';
  ((s as any).job_location = (s as any).job_location ?? {})[String((s as any).temp_job_id ?? 0)] = 'City Porn Studio';
  ((s as any).job_schedule_mode = (s as any).job_schedule_mode ?? {})[String((s as any).temp_job_id ?? 0)] = 'on_demand';
  ((s as any).job_available_days = (s as any).job_available_days ?? {})[String((s as any).temp_job_id ?? 0)] = '5';
  ((s as any).job_available_start = (s as any).job_available_start ?? {})[String((s as any).temp_job_id ?? 0)] = 9 * 60;
  ((s as any).job_available_end = (s as any).job_available_end ?? {})[String((s as any).temp_job_id ?? 0)] = 22 * 60;
  ((s as any).job_create_availability_events = (s as any).job_create_availability_events ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_pay_interval_def = (s as any).job_pay_interval_def ?? {})[String((s as any).temp_job_id ?? 0)] = 'none';
  ((s as any).job_blocking = (s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_add_to_calendar = (s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_show_stat_icon = (s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_schedule_switchable = (s as any).job_schedule_switchable ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  scene.build();
}

function enterCityAphroditeModel(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_job_id = 'city_aphrodite_model';
  if (((s as any).model ?? 0)?.['type'] !== '') {
    (s as any).temp_jl_desc = 'You are working as a ' + (((s as any).model ?? 0)?.['type']) + ' model at Aphrodite Photography.';
  } else {
    (s as any).temp_jl_desc = 'Freelance glamour and erotic modelling for Aphrodite Photography.';
  }
  if (((s as any).model_week ?? 0) === (((s as any).daystart ?? 0) - ((s as any).week ?? 0)) / 7  &&  ((s as any).model_job_week ?? 0) >= 2) {
    (s as any).temp_jl_desc = ((s as any).temp_jl_desc ?? 0) + (' You have no more paid shoots available this week, but can still come in to practice.');
  } else {
    if (((s as any).model_week ?? 0) < (((s as any).daystart ?? 0) - ((s as any).week ?? 0)) / 7  &&  ((s as any).model_job_week ?? 0) === 1) {
      (s as any).temp_jl_desc = ((s as any).temp_jl_desc ?? 0) + (' You can get paid for 1 more shoot this week. Practice is always free.');
    } else {
      if (((s as any).model_week ?? 0) < (((s as any).daystart ?? 0) - ((s as any).week ?? 0)) / 7  &&  ((s as any).model_job_week ?? 0) < 1) {
        (s as any).temp_jl_desc = ((s as any).temp_jl_desc ?? 0) + (' You can do up to 2 paid shoots this week. Practice is always free.');
      }
    }
  }
  ((s as any).job_desc = (s as any).job_desc ?? {})[String((s as any).temp_job_id ?? 0)] = ((s as any).temp_jl_desc ?? 0);
  (s as any).temp_jl_desc = undefined;
  ((s as any).job_hire_hint = (s as any).job_hire_hint ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 'Visit the Aphrodite Photography studio in the city center and ask about modelling work.';
  ((s as any).job_title = (s as any).job_title ?? {})[String((s as any).temp_job_id ?? 0)] = 'Model';
  ((s as any).job_location = (s as any).job_location ?? {})[String((s as any).temp_job_id ?? 0)] = 'Aphrodite Photography';
  ((s as any).job_schedule_mode = (s as any).job_schedule_mode ?? {})[String((s as any).temp_job_id ?? 0)] = 'on_demand';
  ((s as any).job_available_days = (s as any).job_available_days ?? {})[String((s as any).temp_job_id ?? 0)] = '1 2 3 4 5 6 7';
  ((s as any).job_available_start = (s as any).job_available_start ?? {})[String((s as any).temp_job_id ?? 0)] = 7 * 60;
  ((s as any).job_available_end = (s as any).job_available_end ?? {})[String((s as any).temp_job_id ?? 0)] = 21 * 60;
  ((s as any).job_create_availability_events = (s as any).job_create_availability_events ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_pay_interval_def = (s as any).job_pay_interval_def ?? {})[String((s as any).temp_job_id ?? 0)] = 'none';
  ((s as any).job_blocking = (s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_add_to_calendar = (s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_show_stat_icon = (s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_schedule_switchable = (s as any).job_schedule_switchable ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_refresh_desc = (s as any).job_refresh_desc ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  scene.build();
}

function enterPavHotelMaid(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_job_id = 'pav_hotel_maid';
  ((s as any).job_card_hidden = (s as any).job_card_hidden ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_desc = (s as any).job_desc ?? {})[String((s as any).temp_job_id ?? 0)] = 'Clean guest rooms and common areas to standard. Tips from guests are common.';
  ((s as any).job_hire_hint = (s as any).job_hire_hint ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 'Check newspaper job listings or online job boards for the hotel maid advertisement.';
  ((s as any).job_hire_hint = (s as any).job_hire_hint ?? {})[((s as any).temp_job_id ?? 0) + ', 1'] = 'You\'ve seen a maid-wanted ad at the Pavlovsk Hotel. Ask the receptionist for details.';
  ((s as any).job_hire_hint = (s as any).job_hire_hint ?? {})[((s as any).temp_job_id ?? 0) + ', 2'] = 'Speak with the hotel manager — available between ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ' and ' + qspFunc(s, 'time', 'get_time_string', 14, 0) + ' — to discuss starting as a maid.';
  ((s as any).job_title = (s as any).job_title ?? {})[String((s as any).temp_job_id ?? 0)] = 'Hotel Cleaning Gig';
  ((s as any).job_location = (s as any).job_location ?? {})[String((s as any).temp_job_id ?? 0)] = 'Pavlovsk Hotel';
  ((s as any).job_schedule_mode = (s as any).job_schedule_mode ?? {})[String((s as any).temp_job_id ?? 0)] = 'fixed';
  ((s as any).job_work_days = (s as any).job_work_days ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = '1 2 3 4 5 6 7';
  ((s as any).job_arrival = (s as any).job_arrival ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 16 * 60 + 0;
  ((s as any).job_start = (s as any).job_start ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 17 * 60 + 0;
  ((s as any).job_shift = (s as any).job_shift ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 2 * 60 + 30;
  ((s as any).job_pay_interval_def = (s as any).job_pay_interval_def ?? {})[String((s as any).temp_job_id ?? 0)] = 'shift';
  ((s as any).job_pay_rate_def = (s as any).job_pay_rate_def ?? {})[String((s as any).temp_job_id ?? 0)] = 375;
  ((s as any).job_blocking = (s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_add_to_calendar = (s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_show_stat_icon = (s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_schedule_switchable = (s as any).job_schedule_switchable ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  return;
  scene.build();
}

function enterPavClinicCleaner(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_job_id = 'pav_clinic_cleaner';
  ((s as any).job_card_hidden = (s as any).job_card_hidden ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_desc = (s as any).job_desc ?? {})[String((s as any).temp_job_id ?? 0)] = 'Keep the building spotless during afternoon and evening hours.';
  ((s as any).job_hire_hint = (s as any).job_hire_hint ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 'Head to the Pavlovsk clinic and look for the job listing posted near the entrance.';
  ((s as any).job_hire_hint = (s as any).job_hire_hint ?? {})[((s as any).temp_job_id ?? 0) + ', 1'] = 'You\'ve seen the job listing. Ask the head doctor directly — they\'re available between ' + qspFunc(s, 'time', 'get_time_string', 14, 0) + ' and ' + qspFunc(s, 'time', 'get_time_string', 21, 0) + '.';
  ((s as any).job_title = (s as any).job_title ?? {})[String((s as any).temp_job_id ?? 0)] = 'Clinic Cleaning Gig';
  ((s as any).job_location = (s as any).job_location ?? {})[String((s as any).temp_job_id ?? 0)] = 'Pavlovsk Clinic';
  ((s as any).job_schedule_mode = (s as any).job_schedule_mode ?? {})[String((s as any).temp_job_id ?? 0)] = 'windowed';
  ((s as any).job_work_days = (s as any).job_work_days ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = '1 2 3 4 5 6 7';
  ((s as any).job_arrival = (s as any).job_arrival ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 14 * 60 + 0;
  ((s as any).job_start = (s as any).job_start ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 21 * 60 + 0;
  ((s as any).job_shift = (s as any).job_shift ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 1 * 60 + 0;
  ((s as any).job_pay_interval_def = (s as any).job_pay_interval_def ?? {})[String((s as any).temp_job_id ?? 0)] = 'shift';
  ((s as any).job_pay_rate_def = (s as any).job_pay_rate_def ?? {})[String((s as any).temp_job_id ?? 0)] = 100;
  ((s as any).job_blocking = (s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_add_to_calendar = (s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_show_stat_icon = (s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_schedule_switchable = (s as any).job_schedule_switchable ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  return;
  scene.build();
}

function enterPavFactory(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_job_id = 'pav_factory';
  ((s as any).job_desc = (s as any).job_desc ?? {})[String((s as any).temp_job_id ?? 0)] = 'Sew garments on the production line. Mandatory weekday shifts.';
  ((s as any).job_hire_hint = (s as any).job_hire_hint ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 'Apply at the Pavlovsk textile factory during working hours.';
  ((s as any).job_title = (s as any).job_title ?? {})[String((s as any).temp_job_id ?? 0)] = 'Factory Worker';
  ((s as any).job_location = (s as any).job_location ?? {})[String((s as any).temp_job_id ?? 0)] = 'Pavlovsk Factory';
  ((s as any).job_schedule_mode = (s as any).job_schedule_mode ?? {})[String((s as any).temp_job_id ?? 0)] = 'fixed';
  ((s as any).job_work_days = (s as any).job_work_days ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = '1 2 3 4 5';
  ((s as any).job_arrival = (s as any).job_arrival ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 15 * 60 + 0;
  ((s as any).job_start = (s as any).job_start ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 16 * 60 + 0;
  ((s as any).job_shift = (s as any).job_shift ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 4 * 60 + 0;
  ((s as any).job_work_days = (s as any).job_work_days ?? {})[((s as any).temp_job_id ?? 0) + ', 1'] = '1 2 3 4 5';
  ((s as any).job_arrival = (s as any).job_arrival ?? {})[((s as any).temp_job_id ?? 0) + ', 1'] = 7 * 60 + 0;
  ((s as any).job_start = (s as any).job_start ?? {})[((s as any).temp_job_id ?? 0) + ', 1'] = 8 * 60 + 0;
  ((s as any).job_shift = (s as any).job_shift ?? {})[((s as any).temp_job_id ?? 0) + ', 1'] = 8 * 60 + 0;
  ((s as any).job_pay_interval_def = (s as any).job_pay_interval_def ?? {})[String((s as any).temp_job_id ?? 0)] = 'hourly';
  ((s as any).job_pay_rate_def = (s as any).job_pay_rate_def ?? {})[String((s as any).temp_job_id ?? 0)] = 150;
  ((s as any).job_penalty_per_miss = (s as any).job_penalty_per_miss ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_penalty_max_debt = (s as any).job_penalty_max_debt ?? {})[String((s as any).temp_job_id ?? 0)] = 3;
  ((s as any).job_blocking = (s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_add_to_calendar = (s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_show_stat_icon = (s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_schedule_switchable = (s as any).job_schedule_switchable ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  return;
  scene.build();
}

function enterPavMailgirl(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_job_id = 'pav_mailgirl';
  ((s as any).job_desc = (s as any).job_desc ?? {})[String((s as any).temp_job_id ?? 0)] = 'Carry and deliver the town\'s mail on your assigned routes.';
  ((s as any).job_hire_hint = (s as any).job_hire_hint ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 'Ask the postmaster at the Pavlovsk post office about mail delivery work on Saturdays.';
  ((s as any).job_hire_hint = (s as any).job_hire_hint ?? {})[((s as any).temp_job_id ?? 0) + ', 1'] = 'You turned down the Saturday delivery offer. Head back to the post office if you\'ve changed your mind.';
  ((s as any).job_hire_hint = (s as any).job_hire_hint ?? {})[((s as any).temp_job_id ?? 0) + ', 2'] = 'The postmaster is expecting you at the post office on Saturday between ' + qspFunc(s, 'time', 'get_time_string', 11, 0) + ' and ' + qspFunc(s, 'time', 'get_time_string', 12, 0) + ' for a trial shift.';
  ((s as any).job_hire_hint = (s as any).job_hire_hint ?? {})[((s as any).temp_job_id ?? 0) + ', 3'] = 'You completed your trial shift. Go back to the post office and tell the postmaster you\'d like the regular Saturday job.';
  ((s as any).job_title = (s as any).job_title ?? {})[String((s as any).temp_job_id ?? 0)] = 'Mail delivery Gig';
  ((s as any).job_location = (s as any).job_location ?? {})[String((s as any).temp_job_id ?? 0)] = 'Pavlovsk Post Office';
  ((s as any).job_schedule_mode = (s as any).job_schedule_mode ?? {})[String((s as any).temp_job_id ?? 0)] = 'fixed';
  ((s as any).job_work_days = (s as any).job_work_days ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = '6';
  ((s as any).job_arrival = (s as any).job_arrival ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 11 * 60 + 0;
  ((s as any).job_start = (s as any).job_start ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 12 * 60 + 0;
  ((s as any).job_shift = (s as any).job_shift ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 3 * 60 + 0;
  ((s as any).job_pay_interval_def = (s as any).job_pay_interval_def ?? {})[String((s as any).temp_job_id ?? 0)] = 'shift';
  ((s as any).job_pay_rate_def = (s as any).job_pay_rate_def ?? {})[String((s as any).temp_job_id ?? 0)] = 450;
  ((s as any).job_penalty_per_miss = (s as any).job_penalty_per_miss ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_penalty_max_debt = (s as any).job_penalty_max_debt ?? {})[String((s as any).temp_job_id ?? 0)] = 4;
  ((s as any).job_blocking = (s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_add_to_calendar = (s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_show_stat_icon = (s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_schedule_switchable = (s as any).job_schedule_switchable ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  return;
  scene.build();
}

function enterPavTourGuide(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_job_id = 'pav_tour_guide';
  ((s as any).job_desc = (s as any).job_desc ?? {})[String((s as any).temp_job_id ?? 0)] = 'Escort tourists around the park and share its history. Summer only.';
  ((s as any).job_hire_hint = (s as any).job_hire_hint ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 'Ask about tour guide positions at the Pavlovsk Park entrance. Only available in summer.';
  ((s as any).job_title = (s as any).job_title ?? {})[String((s as any).temp_job_id ?? 0)] = 'Tour Guide Gig';
  ((s as any).job_location = (s as any).job_location ?? {})[String((s as any).temp_job_id ?? 0)] = 'Pavlovsk Park';
  ((s as any).job_schedule_mode = (s as any).job_schedule_mode ?? {})[String((s as any).temp_job_id ?? 0)] = 'windowed';
  ((s as any).job_work_dates = (s as any).job_work_dates ?? {})[String((s as any).temp_job_id ?? 0)] = '0601-0831';
  ((s as any).job_work_days = (s as any).job_work_days ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = '1 2 3 4 5 6 7';
  ((s as any).job_arrival = (s as any).job_arrival ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 8 * 60 + 0;
  ((s as any).job_start = (s as any).job_start ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 12 * 60 + 0;
  ((s as any).job_shift = (s as any).job_shift ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 8 * 60 + 0;
  ((s as any).job_pay_interval_def = (s as any).job_pay_interval_def ?? {})[String((s as any).temp_job_id ?? 0)] = 'shift';
  ((s as any).job_pay_rate_def = (s as any).job_pay_rate_def ?? {})[String((s as any).temp_job_id ?? 0)] = 1000;
  ((s as any).job_blocking = (s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_add_to_calendar = (s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_show_stat_icon = (s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_schedule_switchable = (s as any).job_schedule_switchable ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  return;
  scene.build();
}

function enterPavBarbershopCleaner(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_job_id = 'pav_barbershop_cleaner';
  ((s as any).job_desc = (s as any).job_desc ?? {})[String((s as any).temp_job_id ?? 0)] = 'Sweep up hair and keep the place tidy. Come by any time the shop is open.';
  ((s as any).job_hire_hint = (s as any).job_hire_hint ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 'Visit the Pavlovsk barbershop and ask Mr. Syomin if he needs help keeping the place clean.';
  ((s as any).job_title = (s as any).job_title ?? {})[String((s as any).temp_job_id ?? 0)] = 'Barbershop Cleaning Gig';
  ((s as any).job_location = (s as any).job_location ?? {})[String((s as any).temp_job_id ?? 0)] = 'Pavlovsk Barbershop';
  ((s as any).job_schedule_mode = (s as any).job_schedule_mode ?? {})[String((s as any).temp_job_id ?? 0)] = 'windowed';
  ((s as any).job_work_days = (s as any).job_work_days ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = '1 2 3 4 5 6 7';
  ((s as any).job_arrival = (s as any).job_arrival ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 8 * 60 + 0;
  ((s as any).job_start = (s as any).job_start ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 18 * 60 + 0;
  ((s as any).job_shift = (s as any).job_shift ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 1 * 60 + 0;
  ((s as any).job_pay_interval_def = (s as any).job_pay_interval_def ?? {})[String((s as any).temp_job_id ?? 0)] = 'shift';
  ((s as any).job_pay_rate_def = (s as any).job_pay_rate_def ?? {})[String((s as any).temp_job_id ?? 0)] = 125;
  ((s as any).job_blocking = (s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_add_to_calendar = (s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_show_stat_icon = (s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_schedule_switchable = (s as any).job_schedule_switchable ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  return;
  scene.build();
}

function enterPavTrainCleaner(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_job_id = 'pav_train_cleaner';
  ((s as any).job_desc = (s as any).job_desc ?? {})[String((s as any).temp_job_id ?? 0)] = 'Clean the train station waiting room and restrooms. Work any time you like.';
  ((s as any).job_hire_hint = (s as any).job_hire_hint ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 'Visit the station manager\'s office at the Pavlovsk railway station between ' + qspFunc(s, 'time', 'get_time_string', 8, 0) + ' and ' + qspFunc(s, 'time', 'get_time_string', 17, 0) + ' and ask about the cleaning job.';
  ((s as any).job_title = (s as any).job_title ?? {})[String((s as any).temp_job_id ?? 0)] = 'Train Station Cleaning Gig';
  ((s as any).job_location = (s as any).job_location ?? {})[String((s as any).temp_job_id ?? 0)] = 'Pavlovsk Train Station';
  ((s as any).job_schedule_mode = (s as any).job_schedule_mode ?? {})[String((s as any).temp_job_id ?? 0)] = 'on_demand';
  ((s as any).job_available_days = (s as any).job_available_days ?? {})[String((s as any).temp_job_id ?? 0)] = '1 2 3 4 5 6 7';
  ((s as any).job_available_start = (s as any).job_available_start ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_available_end = (s as any).job_available_end ?? {})[String((s as any).temp_job_id ?? 0)] = 23 * 60 + 59;
  ((s as any).job_pay_interval_def = (s as any).job_pay_interval_def ?? {})[String((s as any).temp_job_id ?? 0)] = 'shift';
  ((s as any).job_pay_rate_def = (s as any).job_pay_rate_def ?? {})[String((s as any).temp_job_id ?? 0)] = 250;
  ((s as any).job_blocking = (s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_add_to_calendar = (s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_show_stat_icon = (s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_schedule_switchable = (s as any).job_schedule_switchable ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  return;
  scene.build();
}

function enterPavPoolLifeguard(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_job_id = 'pav_pool_lifeguard';
  ((s as any).job_card_hidden = (s as any).job_card_hidden ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_desc = (s as any).job_desc ?? {})[String((s as any).temp_job_id ?? 0)] = 'Watch over swimmers and keep the pool safe. Weekend shifts at the Pavlovsk pool.';
  ((s as any).job_hire_hint = (s as any).job_hire_hint ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 'Look for the lifeguard-wanted sign at the Pavlovsk swimming pool entrance. Available in summer.';
  ((s as any).job_hire_hint = (s as any).job_hire_hint ?? {})[((s as any).temp_job_id ?? 0) + ', 1'] = 'You\'ve applied for the lifeguard position. Training begins next Saturday morning between 8:00 and 9:00.';
  ((s as any).job_hire_hint = (s as any).job_hire_hint ?? {})[((s as any).temp_job_id ?? 0) + ', 2'] = 'You\'ve completed your first training day. Come back Sunday morning between 8:00 and 9:00 to finish training.';
  ((s as any).job_title = (s as any).job_title ?? {})[String((s as any).temp_job_id ?? 0)] = 'Lifeguard';
  ((s as any).job_location = (s as any).job_location ?? {})[String((s as any).temp_job_id ?? 0)] = 'Pavlovsk Swimming Pool';
  ((s as any).job_schedule_mode = (s as any).job_schedule_mode ?? {})[String((s as any).temp_job_id ?? 0)] = 'fixed';
  ((s as any).job_work_days = (s as any).job_work_days ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = '6 7';
  ((s as any).job_arrival = (s as any).job_arrival ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 11 * 60 + 0;
  ((s as any).job_start = (s as any).job_start ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 13 * 60 + 0;
  ((s as any).job_shift = (s as any).job_shift ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 6 * 60 + 0;
  ((s as any).job_work_days = (s as any).job_work_days ?? {})[((s as any).temp_job_id ?? 0) + ', 1'] = '4 5 6 7';
  ((s as any).job_arrival = (s as any).job_arrival ?? {})[((s as any).temp_job_id ?? 0) + ', 1'] = 11 * 60 + 0;
  ((s as any).job_start = (s as any).job_start ?? {})[((s as any).temp_job_id ?? 0) + ', 1'] = 13 * 60 + 0;
  ((s as any).job_shift = (s as any).job_shift ?? {})[((s as any).temp_job_id ?? 0) + ', 1'] = 6 * 60 + 0;
  ((s as any).job_pay_interval_def = (s as any).job_pay_interval_def ?? {})[String((s as any).temp_job_id ?? 0)] = 'shift';
  ((s as any).job_pay_rate_def = (s as any).job_pay_rate_def ?? {})[String((s as any).temp_job_id ?? 0)] = 250;
  ((s as any).job_penalty_per_miss = (s as any).job_penalty_per_miss ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_penalty_max_debt = (s as any).job_penalty_max_debt ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_blocking = (s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_add_to_calendar = (s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_show_stat_icon = (s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_schedule_switchable = (s as any).job_schedule_switchable ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  return;
  scene.build();
}

function enterPavVocSchoolTeacher(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_job_id = 'pav_voc_school_teacher';
  ((s as any).job_card_hidden = (s as any).job_card_hidden ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_desc = (s as any).job_desc ?? {})[String((s as any).temp_job_id ?? 0)] = 'Teach classes at the Pavlovsk Lyceum on weekdays. Requires a university diploma. Pay is 150 per teaching hour.';
  ((s as any).job_hire_hint = (s as any).job_hire_hint ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 'The Pavlovsk Lyceum personnel department is hiring a certified teacher. Requires a university diploma. Monday to Saturday, ' + qspFunc(s, 'time', 'get_time_string', 14, 0) + '-16:00.';
  ((s as any).job_title = (s as any).job_title ?? {})[String((s as any).temp_job_id ?? 0)] = 'Teacher';
  ((s as any).job_location = (s as any).job_location ?? {})[String((s as any).temp_job_id ?? 0)] = 'Pavlovsk Lyceum';
  ((s as any).job_schedule_mode = (s as any).job_schedule_mode ?? {})[String((s as any).temp_job_id ?? 0)] = 'fixed';
  ((s as any).job_work_days = (s as any).job_work_days ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = '1 2 3 4 5 6';
  ((s as any).job_arrival = (s as any).job_arrival ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 14 * 60;
  ((s as any).job_start = (s as any).job_start ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 15 * 60;
  ((s as any).job_shift = (s as any).job_shift ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 2 * 60;
  ((s as any).job_pay_interval_def = (s as any).job_pay_interval_def ?? {})[String((s as any).temp_job_id ?? 0)] = 'none';
  ((s as any).job_pay_rate_def = (s as any).job_pay_rate_def ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_penalty_per_miss = (s as any).job_penalty_per_miss ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_penalty_max_debt = (s as any).job_penalty_max_debt ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_blocking = (s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_add_to_calendar = (s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_show_stat_icon = (s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  return;
  scene.build();
}

function enterCityMarketSaleswoman(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_job_id = 'city_market_saleswoman';
  ((s as any).job_card_hidden = (s as any).job_card_hidden ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_desc = (s as any).job_desc ?? {})[String((s as any).temp_job_id ?? 0)] = 'Sell clothing from Arthur\'s market stall in the city. Pay is commission-based, settled at end of each shift.';
  ((s as any).job_hire_hint = (s as any).job_hire_hint ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 'Look for the ad on a stall at the city market. Arthur is hiring a female saleswoman for Tuesday, Thursday and Saturday shifts.';
  ((s as any).job_title = (s as any).job_title ?? {})[String((s as any).temp_job_id ?? 0)] = 'Market Saleswoman';
  ((s as any).job_location = (s as any).job_location ?? {})[String((s as any).temp_job_id ?? 0)] = 'City Market';
  ((s as any).job_schedule_mode = (s as any).job_schedule_mode ?? {})[String((s as any).temp_job_id ?? 0)] = 'fixed';
  ((s as any).job_work_days = (s as any).job_work_days ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = '2 4 6';
  ((s as any).job_arrival = (s as any).job_arrival ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 8 * 60;
  ((s as any).job_start = (s as any).job_start ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 9 * 60;
  ((s as any).job_shift = (s as any).job_shift ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 5 * 60;
  ((s as any).job_pay_interval_def = (s as any).job_pay_interval_def ?? {})[String((s as any).temp_job_id ?? 0)] = 'none';
  ((s as any).job_pay_rate_def = (s as any).job_pay_rate_def ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_penalty_per_miss = (s as any).job_penalty_per_miss ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_penalty_max_debt = (s as any).job_penalty_max_debt ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_blocking = (s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_add_to_calendar = (s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_show_stat_icon = (s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  return;
  scene.build();
}

function enterHighwayBrothelProstitute(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_job_id = 'highway_brothel_prostitute';
  ((s as any).job_card_hidden = (s as any).job_card_hidden ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_desc = (s as any).job_desc ?? {})[String((s as any).temp_job_id ?? 0)] = 'Work as a prostitute at the highway S&M brothel. On-demand shifts.';
  ((s as any).job_hire_hint = (s as any).job_hire_hint ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 'Get wasted in the highway hotel bar and see where life takes you.';
  ((s as any).job_title = (s as any).job_title ?? {})[String((s as any).temp_job_id ?? 0)] = 'Highway Brothel Prostitute';
  ((s as any).job_location = (s as any).job_location ?? {})[String((s as any).temp_job_id ?? 0)] = 'Pavlovsk Highway Brothel';
  ((s as any).job_schedule_mode = (s as any).job_schedule_mode ?? {})[String((s as any).temp_job_id ?? 0)] = 'on_demand';
  ((s as any).job_available_days = (s as any).job_available_days ?? {})[String((s as any).temp_job_id ?? 0)] = '1 2 3 4 5 6 7';
  ((s as any).job_available_start = (s as any).job_available_start ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_available_end = (s as any).job_available_end ?? {})[String((s as any).temp_job_id ?? 0)] = 23 * 60 + 59;
  ((s as any).job_pay_interval_def = (s as any).job_pay_interval_def ?? {})[String((s as any).temp_job_id ?? 0)] = 'hourly';
  ((s as any).job_pay_rate_def = (s as any).job_pay_rate_def ?? {})[String((s as any).temp_job_id ?? 0)] = 500;
  ((s as any).job_blocking = (s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_add_to_calendar = (s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_show_stat_icon = (s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_schedule_switchable = (s as any).job_schedule_switchable ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  return;
  scene.build();
}

function enterNichMaid(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_job_id = 'nich_maid';
  ((s as any).job_card_hidden = (s as any).job_card_hidden ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_desc = (s as any).job_desc ?? {})[String((s as any).temp_job_id ?? 0)] = 'Cook, clean, and manage the household. Salary paid monthly via letter.';
  ((s as any).job_hire_hint = (s as any).job_hire_hint ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 'Build a close friendship with Tanya — she may know of an opportunity.';
  ((s as any).job_hire_hint = (s as any).job_hire_hint ?? {})[((s as any).temp_job_id ?? 0) + ', 1'] = 'Tanya wants to set up a job interview with her parents. Get a maid uniform and visit their apartment dressed the part.';
  ((s as any).job_title = (s as any).job_title ?? {})[String((s as any).temp_job_id ?? 0)] = 'Live-in Maid';
  ((s as any).job_location = (s as any).job_location ?? {})[String((s as any).temp_job_id ?? 0)] = 'Nicholas\' Apartment';
  ((s as any).job_schedule_mode = (s as any).job_schedule_mode ?? {})[String((s as any).temp_job_id ?? 0)] = 'fixed';
  ((s as any).job_work_days = (s as any).job_work_days ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = '4 5 6 7 1 2';
  ((s as any).job_arrival = (s as any).job_arrival ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 8 * 60 + 0;
  ((s as any).job_start = (s as any).job_start ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 9 * 60 + 0;
  ((s as any).job_shift = (s as any).job_shift ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 8 * 60 + 0;
  ((s as any).job_pay_interval_def = (s as any).job_pay_interval_def ?? {})[String((s as any).temp_job_id ?? 0)] = 'none';
  ((s as any).job_pay_rate_def = (s as any).job_pay_rate_def ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_penalty_per_miss = (s as any).job_penalty_per_miss ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_penalty_max_debt = (s as any).job_penalty_max_debt ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_blocking = (s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_add_to_calendar = (s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_show_stat_icon = (s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_schedule_switchable = (s as any).job_schedule_switchable ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  return;
  scene.build();
}

function enterCitySalonMasseuse(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_job_id = 'city_salon_masseuse';
  if (((s as any).job_rank ?? 0)?.[String((s as any).temp_job_id ?? 0)] === 2) {
    (s as any).temp_jl_desc = 'Work as a nude masseuse at the Beauty Bar salon in the city mall.';
  } else {
    if (((s as any).job_rank ?? 0)?.[String((s as any).temp_job_id ?? 0)] === 3) {
      (s as any).temp_jl_desc = 'Work as a happy-end masseuse at the Beauty Bar salon in the city mall.';
    } else {
      if (((s as any).job_rank ?? 0)?.[String((s as any).temp_job_id ?? 0)] === 4) {
        (s as any).temp_jl_desc = 'Work as an oral masseuse at the Beauty Bar salon in the city mall.';
      } else {
        if (((s as any).job_rank ?? 0)?.[String((s as any).temp_job_id ?? 0)] >= 5) {
          (s as any).temp_jl_desc = 'Work as a full-service masseuse at the Beauty Bar salon in the city mall.';
        } else {
          (s as any).temp_jl_desc = 'Work as a masseuse at the Beauty Bar salon in the city mall.';
        }
      }
    }
  }
  if (((s as any).job_shifts_this_period ?? 0)?.[String((s as any).temp_job_id ?? 0)] > 0) {
    (s as any).temp_jl_desc = ((s as any).temp_jl_desc ?? 0) + (' You have worked ' + (((s as any).job_shifts_this_period ?? 0)?.[String((s as any).temp_job_id ?? 0)] ?? 0) + ' shift' + ((((s as any).job_shifts_this_period ?? 0)?.[String((s as any).temp_job_id ?? 0)] === 1) ? ('') : ('s')) + ' this week.');
  }
  if (((s as any).job_bonus_pay ?? 0)?.[String((s as any).temp_job_id ?? 0)] > 0) {
    (s as any).temp_jl_desc = ((s as any).temp_jl_desc ?? 0) + (' ' + qspFunc(s, 'money', 'format', (((s as any).job_bonus_pay ?? 0)?.[String((s as any).temp_job_id ?? 0)] ?? 0)) + ' waiting for collection on Friday.');
  }
  ((s as any).job_desc = (s as any).job_desc ?? {})[String((s as any).temp_job_id ?? 0)] = ((s as any).temp_jl_desc ?? 0);
  (s as any).temp_jl_desc = undefined;
  ((s as any).job_hire_hint = (s as any).job_hire_hint ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 'Visit the Beauty Bar salon in the city mall and speak to the receptionist about available masseuse positions.';
  ((s as any).job_title = (s as any).job_title ?? {})[String((s as any).temp_job_id ?? 0)] = 'Masseuse';
  ((s as any).job_location = (s as any).job_location ?? {})[String((s as any).temp_job_id ?? 0)] = 'Beauty Bar Salon';
  ((s as any).job_schedule_mode = (s as any).job_schedule_mode ?? {})[String((s as any).temp_job_id ?? 0)] = 'booking';
  ((s as any).job_booking_window_days = (s as any).job_booking_window_days ?? {})[String((s as any).temp_job_id ?? 0)] = 14;
  ((s as any).job_booking_slots_per_day = (s as any).job_booking_slots_per_day ?? {})[String((s as any).temp_job_id ?? 0)] = 3;
  ((s as any).job_booking_max_concurrent = (s as any).job_booking_max_concurrent ?? {})[String((s as any).temp_job_id ?? 0)] = 21;
  ((s as any).job_booking_min_gap_days = (s as any).job_booking_min_gap_days ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_slot_arrival = (s as any).job_slot_arrival ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 8 * 60 + 30;
  ((s as any).job_slot_start = (s as any).job_slot_start ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 9 * 60;
  ((s as any).job_slot_shift = (s as any).job_slot_shift ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 4 * 60;
  ((s as any).job_slot_arrival = (s as any).job_slot_arrival ?? {})[((s as any).temp_job_id ?? 0) + ', 1'] = 12 * 60 + 30;
  ((s as any).job_slot_start = (s as any).job_slot_start ?? {})[((s as any).temp_job_id ?? 0) + ', 1'] = 13 * 60;
  ((s as any).job_slot_shift = (s as any).job_slot_shift ?? {})[((s as any).temp_job_id ?? 0) + ', 1'] = 4 * 60;
  ((s as any).job_slot_arrival = (s as any).job_slot_arrival ?? {})[((s as any).temp_job_id ?? 0) + ', 2'] = 16 * 60 + 30;
  ((s as any).job_slot_start = (s as any).job_slot_start ?? {})[((s as any).temp_job_id ?? 0) + ', 2'] = 17 * 60;
  ((s as any).job_slot_shift = (s as any).job_slot_shift ?? {})[((s as any).temp_job_id ?? 0) + ', 2'] = 4 * 60;
  ((s as any).job_pay_interval_def = (s as any).job_pay_interval_def ?? {})[String((s as any).temp_job_id ?? 0)] = 'none';
  ((s as any).job_pay_rate_def = (s as any).job_pay_rate_def ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_penalty_per_miss = (s as any).job_penalty_per_miss ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_blocking = (s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_add_to_calendar = (s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_show_stat_icon = (s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_schedule_switchable = (s as any).job_schedule_switchable ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_refresh_desc = (s as any).job_refresh_desc ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  return;
  scene.build();
}

function enterPavLeonidSlave(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_job_id = 'pav_leonid_slave';
  ((s as any).job_desc = (s as any).job_desc ?? {})[String((s as any).temp_job_id ?? 0)] = 'You are obligated to present yourself to Leonid Nosov at his office when summoned.';
  ((s as any).job_title = (s as any).job_title ?? {})[String((s as any).temp_job_id ?? 0)] = 'Slave';
  ((s as any).job_location = (s as any).job_location ?? {})[String((s as any).temp_job_id ?? 0)] = 'Leonid\'s Office';
  ((s as any).job_schedule_mode = (s as any).job_schedule_mode ?? {})[String((s as any).temp_job_id ?? 0)] = 'booking';
  ((s as any).job_booking_window_days = (s as any).job_booking_window_days ?? {})[String((s as any).temp_job_id ?? 0)] = 7;
  ((s as any).job_booking_slots_per_day = (s as any).job_booking_slots_per_day ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_booking_max_concurrent = (s as any).job_booking_max_concurrent ?? {})[String((s as any).temp_job_id ?? 0)] = 7;
  ((s as any).job_booking_min_gap_days = (s as any).job_booking_min_gap_days ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_slot_arrival = (s as any).job_slot_arrival ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 19 * 60;
  ((s as any).job_slot_start = (s as any).job_slot_start ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 20 * 60;
  ((s as any).job_slot_shift = (s as any).job_slot_shift ?? {})[((s as any).temp_job_id ?? 0) + ', 0'] = 2 * 60;
  ((s as any).job_pay_interval_def = (s as any).job_pay_interval_def ?? {})[String((s as any).temp_job_id ?? 0)] = 'none';
  ((s as any).job_pay_rate_def = (s as any).job_pay_rate_def ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_penalty_per_miss = (s as any).job_penalty_per_miss ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_on_miss_handler = (s as any).job_on_miss_handler ?? {})[String((s as any).temp_job_id ?? 0)] = 'leonid';
  ((s as any).job_on_miss_handler_func = (s as any).job_on_miss_handler_func ?? {})[String((s as any).temp_job_id ?? 0)] = 'on_miss';
  ((s as any).job_blocking = (s as any).job_blocking ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
  ((s as any).job_add_to_calendar = (s as any).job_add_to_calendar ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_show_stat_icon = (s as any).job_show_stat_icon ?? {})[String((s as any).temp_job_id ?? 0)] = 1;
  ((s as any).job_schedule_switchable = (s as any).job_schedule_switchable ?? {})[String((s as any).temp_job_id ?? 0)] = 0;
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
      enterDefault(s, scene);
      break;
  }
}

export const jobs_list: LocationDef = {
  name: 'jobs_list',
  region: 'other',
  enter: enter,
};
