import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterResetAll(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterResetTraits(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterResetBody(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterResetInventory(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterResetFame(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterResetOther(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterResetSkills(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterResetRelationships(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterResetSchool(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterResetSex(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterResetTraits(s: GameState, scene: SceneBuilder): void {
  ((s as any).arch_vars = (s as any).arch_vars ?? {})['bimbo_points'] = 0;
  ((s as any).arch_vars = (s as any).arch_vars ?? {})['preppy_points'] = 0;
  ((s as any).arch_vars = (s as any).arch_vars ?? {})['prude_points'] = 0;
  ((s as any).arch_vars = (s as any).arch_vars ?? {})['punk_points'] = 0;
  ((s as any).arch_vars = (s as any).arch_vars ?? {})['goth_points'] = 0;
  qspCall(s, 'traits', 'cheat', 'cumeater', (-99));
  qspCall(s, 'traits', 'cheat', 'creampie_fetish', (-99));
  qspCall(s, 'traits', 'cheat', 'fertility', (-99));
  qspCall(s, 'traits', 'cheat', 'sensitivity', (-99));
  qspCall(s, 'traits', 'cheat', 'new_again', (-99));
  qspCall(s, 'traits', 'cheat', 'heel_preference', (-99));
  qspCall(s, 'traits', 'cheat', 'addictive_personality', (-99));
  qspCall(s, 'traits', 'cheat', 'buttslut', (-99));
  qspCall(s, 'traits', 'cheat', 'exhibitionist', (-99));
  qspCall(s, 'traits', 'cheat', 'panty_preference', (-99));
  qspCall(s, 'traits', 'cheat', 'drinking', (-99));
  qspCall(s, 'traits', 'cheat', 'academic', (-99));
  qspCall(s, 'traits', 'cheat', 'bookworm', (-99));
  qspCall(s, 'traits', 'cheat', 'sizequeen', (-99));
  qspCall(s, 'traits', 'cheat', 'fitness_freak', (-99));
  qspCall(s, 'traits', 'cheat', 'doormat', (-99));
  qspCall(s, 'traits', 'cheat', 'cumslut', (-99));
  qspCall(s, 'traits', 'cheat', 'cum_addict', (-99));
  qspCall(s, 'traits', 'cheat', 'elasticity', (-99));
  qspCall(s, 'traits', 'cheat', 'sleep_duration', (-99));
  qspCall(s, 'traits', 'cheat', 'body_hair_growth_rate', (-99));
  qspCall(s, 'traits', 'cheat', 'body_hair_attitude', (-99));
  qspCall(s, 'traits', 'cheat', 'hair_growth_rate', (-99));
  qspCall(s, 'traits', 'cheat', 'pain_tolerance', (-99));
  ((s as any).trait_vars = (s as any).trait_vars ?? {})['nerd_learn_home'] = 0;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterResetBody(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_hgt = 165;
  (s as any).dick = 0;
  ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['bust_gen'] = 17;
  ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['butt_gen'] = 22;
  ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = 60;
  (s as any).pcs_skin = 500;
  (s as any).pcs_tan = 0;
  (s as any).pcs_haircol = 1;
  (s as any).pcs_hairlng = 300;
  (s as any).pcs_eyecol = 0;
  (s as any).pcs_eyesize = 2;
  (s as any).pcs_lashes = 1;
  (s as any).pcs_lip = 1;
  (s as any).pcs_pubes = 30;
  (s as any).pcs_leghair = 12;
  (s as any).pcs_teeth = 0;
  (s as any).pcs_makeup = ((((s as any).start_type ?? 0)?.['loc'] === 'sg') ? (1) : (5));
  (s as any).hscrunchw = 0;
  (s as any).glass = 0;
  (s as any).pcs_throat = 0;
  (s as any).pcs_vag = 15;
  (s as any).pcs_ass = 0;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterResetInventory(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'outfit', 'clear_all');
  qspCall(s, 'piercing_management', 'full_reset');
  qspCall(s, 'purses', 'remove_item', 'fashionista', 4);
  qspCall(s, 'purses', 'remove_item', 'fashionista', 9);
  qspCall(s, 'purses', 'remove_item', 'fashionista', 11);
  qspCall(s, 'purses', 'remove_item', 'fashionista', 13);
  qspCall(s, 'purses', 'remove_item', 'gm', 3);
  qspCall(s, 'purses', 'remove_item', 'gm', 7);
  qspCall(s, 'purses', 'remove_item', 'gm', 8);
  qspCall(s, 'purses', 'remove_item', 'gm', 14);
  qspCall(s, 'purses', 'remove_item', 'coco', 29);
  qspCall(s, 'purses', 'remove_item', 'cats', 2);
  qspCall(s, 'purses', 'remove_item', 'cats', 5);
  qspCall(s, 'purses', 'remove_item', 'cats', 10);
  qspCall(s, 'purses', 'remove_item', 'danilovich', 12);
  qspCall(s, 'purses', 'remove_item', 'dolls', 15);
  qspCall(s, 'purses', 'remove_item', 'dolls', 18);
  qspCall(s, 'purses', 'remove_item', 'dolls', 19);
  qspCall(s, 'purses', 'remove_item', 'dolls', 32);
  (s as any).money = 2000;
  (s as any).fakepassport = 0;
  (s as any).school_diploma = 0;
  ((s as any).license = (s as any).license ?? {})['drive'] = 0;
  ((s as any).license = (s as any).license ?? {})['secretary'] = 0;
  ((s as any).license = (s as any).license ?? {})['masseuse'] = 0;
  ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['shampoo'] = 10;
  (s as any).internet = 0;
  (s as any).bag = 0;
  ((s as any).BookVars = (s as any).BookVars ?? {})['fantasy_pages'] = 0;
  if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['shampoo'] = 20;
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['tampons'] = 15;
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['sanitary_pads'] = 10;
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['food_basic'] = 5;
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['dish_plates'] = 1;
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['dish_soap'] = 10;
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['laundry_soap'] = 5;
    qspCall(s, 'purses', 'add_item', 'gm', 7);
    qspCall(s, 'purses', 'wear', 'gm', 7);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterResetFame(s: GameState, scene: SceneBuilder): void {
  return;
  // TODO-QSP: end
  scene.build();
}

function enterResetOther(s: GameState, scene: SceneBuilder): void {
  (s as any).chessyear = 0;
  (s as any).chessmonth = 0;
  ((s as any).vballVars = (s as any).vballVars ?? {})['lessons_remaining'] = 0;
  ((s as any).ballet = (s as any).ballet ?? {})['blocker'] = 0;
  (s as any).gsAboDance = 0;
  (s as any).gsAboBeg = 0;
  (s as any).church_moral = 0;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterResetSex(s: GameState, scene: SceneBuilder): void {
  (s as any).guy = 0;
  (s as any).orgasm = 0;
  (s as any).motherKnowSpravka = 0;
  (s as any).motherKnowWhore = 0;
  (s as any).sisterknowslut = 0;
  ((s as any).brotherQW = (s as any).brotherQW ?? {})['know_slut'] = 0;
  (s as any).GspravkaT = 0;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterResetSkills(s: GameState, scene: SceneBuilder): void {
  ((s as any).moodVars = (s as any).moodVars ?? {})['disp_base'] = 50;
  (s as any).pcs_stren = 35;
  (s as any).pcs_agil = 35;
  (s as any).pcs_vital = 35;
  (s as any).pcs_intel = 35;
  (s as any).pcs_react = 35;
  (s as any).pcs_sprt = 35;
  (s as any).pcs_chrsm = 35;
  (s as any).pcs_prcptn = 35;
  (s as any).pcs_magik = 0;
  (s as any).strenbuf = 35;
  (s as any).agilbuf = 35;
  (s as any).vitalbuf = 35;
  (s as any).pcs_inhib = 15;
  (s as any).willpowermax = 75;
  (s as any).pcs_humint = 0;
  (s as any).pcs_persuas = 0;
  (s as any).pcs_observ = 0;
  (s as any).pcs_run = 0;
  (s as any).pcs_vball = 0;
  (s as any).pcs_ftbll = 0;
  (s as any).pcs_wrstlng = 0;
  (s as any).pcs_chess = 0;
  (s as any).pcs_icesktng = 0;
  (s as any).pcs_gaming = 0;
  (s as any).pcs_pool = 0;
  (s as any).pcs_jab = 0;
  (s as any).pcs_punch = 0;
  (s as any).pcs_kick = 0;
  (s as any).pcs_def = 0;
  (s as any).pcs_shoot = 0;
  (s as any).pcs_bushcraft = 0;
  (s as any).pcs_makupskl = ((((s as any).start_type ?? 0)?.['magic'] === 'tg') ? (0) : (10));
  (s as any).pcs_heels = ((((s as any).start_type ?? 0)?.['magic'] === 'tg') ? (0) : (5));
  (s as any).pcs_danc = 0;
  (s as any).pcs_dancero = 0;
  (s as any).pcs_dancpol = 0;
  (s as any).pcs_cheer = 0;
  (s as any).pcs_mdlng = 0;
  (s as any).pcs_vokal = 0;
  (s as any).pcs_instrmusic = 0;
  (s as any).pcs_photoskl = 0;
  (s as any).pcs_artskls = 0;
  (s as any).pcs_perform = 0;
  (s as any).pcs_musicprod = 0;
  (s as any).pcs_cleaning = 0;
  (s as any).pcs_compskl = 0;
  (s as any).pcs_comphckng = 0;
  (s as any).pcs_hndiwrk = 0;
  (s as any).pcs_sewng = 0;
  (s as any).pcs_medcn = 0;
  if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
    (s as any).pcs_stren = ((s as any).pcs_stren ?? 0) + (5);
    (s as any).pcs_agil = ((s as any).pcs_agil ?? 0) + (5);
    (s as any).pcs_vital = ((s as any).pcs_vital ?? 0) + (5);
    (s as any).pcs_intel = ((s as any).pcs_intel ?? 0) + (5);
    (s as any).pcs_react = ((s as any).pcs_react ?? 0) + (5);
    (s as any).pcs_sprt = ((s as any).pcs_sprt ?? 0) + (5);
    (s as any).pcs_chrsm = ((s as any).pcs_chrsm ?? 0) + (5);
    (s as any).pcs_prcptn = ((s as any).pcs_prcptn ?? 0) + (5);
    (s as any).strenbuf = ((s as any).strenbuf ?? 0) + (5);
    (s as any).agilbuf = ((s as any).agilbuf ?? 0) + (5);
    (s as any).vitalbuf = ((s as any).vitalbuf ?? 0) + (5);
    (s as any).willpowermax = ((s as any).willpowermax ?? 0) - (15);
    (s as any).pcs_chess = ((s as any).pcs_chess ?? 0) + (15);
    (s as any).pcs_makupskl = ((s as any).pcs_makupskl ?? 0) + (5);
    (s as any).pcs_danc = ((s as any).pcs_danc ?? 0) + (30);
    (s as any).pcs_heels = ((s as any).pcs_heels ?? 0) + (15);
    (s as any).pcs_artskls = ((s as any).pcs_artskls ?? 0) + (15);
    (s as any).pcs_compskl = ((s as any).pcs_compskl ?? 0) + (20);
    (s as any).pcs_comphckng = ((s as any).pcs_comphckng ?? 0) + (10);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterResetRelationships(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'default');
  qspCall(s, 'npc_relationship', 'default_family_friends');
  qspCall(s, 'npc_relationship', 'set', 'A18', 1);
  qspCall(s, 'array', 'remove_element', 'npc_vaginal_count', 'A9');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterResetSchool(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'grades', 'createclass', 'school', 'math', 3, 2, 'yes', 'yes', 0, 0);
  qspCall(s, 'grades', 'createclass', 'school', 'rus', 3, 2, 'yes', 'yes', 0, 0);
  qspCall(s, 'grades', 'createclass', 'school', 'lit', 2, 2, 'yes', 'yes', 0, 0);
  qspCall(s, 'grades', 'createclass', 'school', 'art', 2, 2, 'yes', 'no', 0, 0);
  qspCall(s, 'grades', 'createclass', 'school', 'bio', 2, 2, 'yes', 'yes', 0, 0);
  qspCall(s, 'grades', 'createclass', 'school', 'eng', 2, 2, 'yes', 'yes', 0, 0);
  qspCall(s, 'grades', 'createclass', 'school', 'geo', 2, 2, 'yes', 'yes', 0, 0);
  qspCall(s, 'grades', 'createclass', 'school', 'sci', 2, 2, 'yes', 'yes', 0, 0);
  qspCall(s, 'grades', 'createclass', 'school', 'his', 2, 2, 'yes', 'yes', 0, 0);
  qspCall(s, 'grades', 'createclass', 'school', 'shop', 2, 2, 'yes', 'no', 0, 0);
  qspCall(s, 'grades', 'createclass', 'school', 'comp', 3, 2, 'yes', 'yes', 0, 0);
  qspCall(s, 'grades', 'createclass', 'school', 'mus', 2, 2, 'yes', 'no', 0, 0);
  qspCall(s, 'grades', 'createclass', 'school', 'pe', 3, 1, 'yes', 'no', 0, 0);
  qspCall(s, 'grades', 'grade_award', 'school', 'math', 55);
  qspCall(s, 'grades', 'grade_award', 'school', 'rus', 55);
  qspCall(s, 'grades', 'grade_award', 'school', 'lit', 55);
  qspCall(s, 'grades', 'grade_award', 'school', 'art', 55);
  qspCall(s, 'grades', 'grade_award', 'school', 'bio', 55);
  qspCall(s, 'grades', 'grade_award', 'school', 'eng', 55);
  qspCall(s, 'grades', 'grade_award', 'school', 'geo', 55);
  qspCall(s, 'grades', 'grade_award', 'school', 'sci', 55);
  qspCall(s, 'grades', 'grade_award', 'school', 'his', 55);
  qspCall(s, 'grades', 'grade_award', 'school', 'shop', 55);
  qspCall(s, 'grades', 'grade_award', 'school', 'comp', 55);
  qspCall(s, 'grades', 'grade_award', 'school', 'mus', 55);
  qspCall(s, 'grades', 'grade_award', 'school', 'pe', 55);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSetUniTeacherCourse(s: GameState, scene: SceneBuilder): void {
  ((s as any).university = (s as any).university ?? {})['enrolled_in'] = 'teaching_studies';
  qspCall(s, 'grades', 'createclass', 'uni_teaching_studies_semester_1', 'general education 101', 3, 2, 'no', 'no', 1, 12);
  qspCall(s, 'grades', 'createclass', 'uni_teaching_studies_semester_1', 'teaching methods 101', 3, 2, 'no', 'no', 1, 12);
  qspCall(s, 'grades', 'createclass', 'uni_teaching_studies_semester_1', 'learning theories 101', 3, 2, 'no', 'no', 1, 12);
  qspCall(s, 'grades', 'grade_award', 'uni_teaching_studies_semester_1', 'general education 101', 35);
  qspCall(s, 'grades', 'grade_award', 'uni_teaching_studies_semester_1', 'teaching methods 101', 35);
  qspCall(s, 'grades', 'grade_award', 'uni_teaching_studies_semester_1', 'learning theories 101', 35);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSetUniNursingCourse(s: GameState, scene: SceneBuilder): void {
  ((s as any).university = (s as any).university ?? {})['enrolled_in'] = 'nursing';
  qspCall(s, 'grades', 'createclass', 'uni_nursing_semester_1', 'patient care 101', 3, 2, 'no', 'no', 1, 12);
  qspCall(s, 'grades', 'createclass', 'uni_nursing_semester_1', 'anatomy and physiology 101', 3, 2, 'no', 'no', 1, 12);
  qspCall(s, 'grades', 'createclass', 'uni_nursing_semester_1', 'examination and treatment 101', 3, 2, 'no', 'no', 1, 12);
  qspCall(s, 'grades', 'grade_award', 'uni_nursing_semester_1', 'patient care 101', 35);
  qspCall(s, 'grades', 'grade_award', 'uni_nursing_semester_1', 'anatomy and physiology 101', 35);
  qspCall(s, 'grades', 'grade_award', 'uni_nursing_semester_1', 'examination and treatment 101', 35);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSetDefault(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'name') {
    (s as any).pcs_firstname = 'Svetlana';
    (s as any).pcs_lastname = 'Lebedev';
    (s as any).pcs_nickname = 'Sveta';
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'birthday') {
      (s as any).birthday = 1;
      (s as any).birthmonth = 4;
      (s as any).birthyear = 1999;
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'reset_all':
      enterResetAll(s, scene);
      break;
    case 'reset_traits':
      enterResetTraits(s, scene);
      break;
    case 'reset_body':
      enterResetBody(s, scene);
      break;
    case 'reset_inventory':
      enterResetInventory(s, scene);
      break;
    case 'reset_fame':
      enterResetFame(s, scene);
      break;
    case 'reset_other':
      enterResetOther(s, scene);
      break;
    case 'reset_sex':
      enterResetSex(s, scene);
      break;
    case 'reset_skills':
      enterResetSkills(s, scene);
      break;
    case 'reset_relationships':
      enterResetRelationships(s, scene);
      break;
    case 'reset_school':
      enterResetSchool(s, scene);
      break;
    case 'set_uni_teacher_course':
      enterSetUniTeacherCourse(s, scene);
      break;
    case 'set_uni_nursing_course':
      enterSetUniNursingCourse(s, scene);
      break;
    case 'set_default':
      enterSetDefault(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const intro_functions: LocationDef = {
  name: 'intro_functions',
  region: 'other',
  enter: enter,
};
