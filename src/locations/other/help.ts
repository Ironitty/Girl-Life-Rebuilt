import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterOpen(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'state', 'push');
  // TODO-QSP: gt 'help', iif($ARGS[1] <> '', $ARGS[1], 'show')
  scene.build();
}

function enterShow(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['help', 'generic'] }]);
  scene.build();
}

function enterBack(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'state', 'pop');
  scene.build();
}

function enterDefSection(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $help_toc_sections[] = $ARGS[1]
  // TODO-QSP: $help_toc_label[$ARGS[1]] = $ARGS[3]
  // TODO-QSP: $help_toc_page[$ARGS[1]] = $ARGS[2]
  // TODO-QSP: $help_toc_loc[$ARGS[1]] = iif($ARGS[4] <> '', $ARGS[4], 'help')
  scene.build();
}

function enterDefGroup(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $help_toc_label[$ARGS[2]] = $ARGS[3]
  // TODO-QSP: $help_toc_page[$ARGS[2]] = ''
  // TODO-QSP: $help_toc_loc[$ARGS[2]] = 'help'
  // TODO-QSP: help_toc_is_group[$ARGS[2]] = 1
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    // TODO-QSP: $help_toc_sections[] = $ARGS[2]
  } else {
    if (((s as any).help_toc_children ?? 0)[((s as any).locArgs?.[1] ?? 0)] === '') {
      // TODO-QSP: $help_toc_children[$ARGS[1]] = $ARGS[2]
    } else {
      // TODO-QSP: $help_toc_children[$ARGS[1]] += ' ' + $ARGS[2]
    }
  }
  scene.build();
}

function enterDefChild(s: GameState, scene: SceneBuilder): void {
  if (((s as any).help_toc_children ?? 0)[((s as any).locArgs?.[1] ?? 0)] === '') {
    // TODO-QSP: $help_toc_children[$ARGS[1]]  = $ARGS[2]
  } else {
    // TODO-QSP: $help_toc_children[$ARGS[1]] += ' ' + $ARGS[2]
  }
  // TODO-QSP: $help_toc_label[$ARGS[2]] = $ARGS[3]
  // TODO-QSP: $help_toc_page[$ARGS[2]] = $ARGS[2]
  // TODO-QSP: $help_toc_loc[$ARGS[2]] = iif($ARGS[4] <> '', $ARGS[4], 'help')
  scene.build();
}

function enterTocInit(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help', 'def_section', 'ui', 'ui_overview', 'User Interface');
  qspCall(s, 'help', 'def_child', 'ui', 'ui_statbar', 'Stat Bar');
  qspCall(s, 'help', 'def_child', 'ui', 'ui_menu', 'Navigation Menu');
  qspCall(s, 'help', 'def_child', 'ui', 'ui_actions', 'Action Buttons');
  qspCall(s, 'help', 'def_section', 'mechanics', 'mech_overview', 'Game Mechanics');
  qspCall(s, 'help', 'def_child', 'mechanics', 'mech_time', 'Time & Schedule');
  qspCall(s, 'help', 'def_child', 'mechanics', 'mech_stats', 'Stats & Attributes');
  qspCall(s, 'help', 'def_child', 'mechanics', 'mech_money', 'Money & Finances');
  qspCall(s, 'help', 'def_section', 'chars', 'chars_overview', 'Characters');
  qspCall(s, 'help', 'def_child', 'chars', 'chars_pc', 'Your Character', 'help_characters');
  qspCall(s, 'help', 'def_group', 'chars', 'family', 'Family');
  // TODO-QSP: gs 'help', 'def_child',    'family',    'char_dad',        $npc_usedname['A28'],    'help_characters...
  // TODO-QSP: gs 'help', 'def_child',    'family',    'char_mom',        $npc_usedname['A29'],    'help_characters...
  // TODO-QSP: gs 'help', 'def_child',    'family',    'char_luda',      $npc_usedname['A30'],    'help_characters'
  // TODO-QSP: gs 'help', 'def_child',    'family',    'char_grandma',      $npc_usedname['A31'],    'help_characte...
  // TODO-QSP: gs 'help', 'def_child',    'family',    'char_grandpa',      $npc_usedname['A32'],    'help_characte...
  // TODO-QSP: gs 'help', 'def_child',    'family',    'char_anya',      $npc_usedname['A33'],    'help_characters'
  // TODO-QSP: gs 'help', 'def_child',    'family',    'char_kolka',      $npc_usedname['A34'],    'help_characters...
  // TODO-QSP: gs 'help', 'def_child',    'family',    'char_uncle_misha',    $npc_usedname['A54'],    'help_charac...
  qspCall(s, 'help', 'def_group', 'chars', 'sch_cool', 'School: Cool Kids');
  // TODO-QSP: gs 'help', 'def_child',    'sch_cool',    'char_dimka',      $npc_usedname['A1'],    'help_character...
  // TODO-QSP: gs 'help', 'def_child',    'sch_cool',    'char_igor',      $npc_usedname['A4'],    'help_characters...
  // TODO-QSP: gs 'help', 'def_child',    'sch_cool',    'char_marcus',      $npc_usedname['A146'],    'help_charac...
  // TODO-QSP: gs 'help', 'def_child',    'sch_cool',    'char_andrey',      $npc_usedname['A147'],    'help_charac...
  // TODO-QSP: gs 'help', 'def_child',    'sch_cool',    'char_mefodiy',      $npc_usedname['A148'],    'help_chara...
  // TODO-QSP: gs 'help', 'def_child',    'sch_cool',    'char_katja',      $npc_usedname['A14'],    'help_characte...
  // TODO-QSP: gs 'help', 'def_child',    'sch_cool',    'char_vicky',      $npc_usedname['A15'],    'help_characte...
  // TODO-QSP: gs 'help', 'def_child',    'sch_cool',    'char_irina',      $npc_usedname['A17'],    'help_characte...
  // TODO-QSP: gs 'help', 'def_child',    'sch_cool',    'char_bella',      $npc_usedname['A22'],    'help_characte...
  // TODO-QSP: gs 'help', 'def_child',    'sch_cool',    'char_stasya',      $npc_usedname['A139'],    'help_charac...
  // TODO-QSP: gs 'help', 'def_child',    'sch_cool',    'char_lizaveta',    $npc_usedname['A140'],    'help_charac...
  // TODO-QSP: gs 'help', 'def_child',    'sch_cool',    'char_sonia',      $npc_usedname['A25'],    'help_characte...
  qspCall(s, 'help', 'def_group', 'chars', 'sch_jock', 'School: Jocks');
  // TODO-QSP: gs 'help', 'def_child',    'sch_jock',    'char_ivan',      $npc_usedname['A3'],    'help_characters...
  // TODO-QSP: gs 'help', 'def_child',    'sch_jock',    'char_fedor',      $npc_usedname['A5'],    'help_character...
  // TODO-QSP: gs 'help', 'def_child',    'sch_jock',    'char_svyatoslav',    $npc_usedname['A8'],    'help_charac...
  // TODO-QSP: gs 'help', 'def_child',    'sch_jock',    'char_lazar',      $npc_usedname['A149'],    'help_charact...
  // TODO-QSP: gs 'help', 'def_child',    'sch_jock',    'char_erast',      $npc_usedname['A150'],    'help_charact...
  // TODO-QSP: gs 'help', 'def_child',    'sch_jock',    'char_vanya',      $npc_usedname['A165'],    'help_charact...
  // TODO-QSP: gs 'help', 'def_child',    'sch_jock',    'char_lariska',      $npc_usedname['A13'],    'help_charac...
  // TODO-QSP: gs 'help', 'def_child',    'sch_jock',    'char_christina',    $npc_usedname['A18'],    'help_charac...
  // TODO-QSP: gs 'help', 'def_child',    'sch_jock',    'char_lina',      $npc_usedname['A19'],    'help_character...
  // TODO-QSP: gs 'help', 'def_child',    'sch_jock',    'char_albina',      $npc_usedname['A23'],    'help_charact...
  // TODO-QSP: gs 'help', 'def_child',    'sch_jock',    'char_ronnie',      $npc_usedname['A141'],    'help_charac...
  qspCall(s, 'help', 'def_group', 'chars', 'sch_nerd', 'School: Nerds');
  // TODO-QSP: gs 'help', 'def_child',    'sch_nerd',    'char_artem',      $npc_usedname['A2'],    'help_character...
  // TODO-QSP: gs 'help', 'def_child',    'sch_nerd',    'char_petka',      $npc_usedname['A6'],    'help_character...
  // TODO-QSP: gs 'help', 'def_child',    'sch_nerd',    'char_evgeny',      $npc_usedname['A151'],    'help_charac...
  // TODO-QSP: gs 'help', 'def_child',    'sch_nerd',    'char_feofan',      $npc_usedname['A152'],    'help_charac...
  // TODO-QSP: gs 'help', 'def_child',    'sch_nerd',    'char_gerasim',      $npc_usedname['A153'],    'help_chara...
  // TODO-QSP: gs 'help', 'def_child',    'sch_nerd',    'char_julia',      $npc_usedname['A12'],    'help_characte...
  // TODO-QSP: gs 'help', 'def_child',    'sch_nerd',    'char_natasha_s',    $npc_usedname['A16'],    'help_charac...
  // TODO-QSP: gs 'help', 'def_child',    'sch_nerd',    'char_zina',      $npc_usedname['A142'],    'help_characte...
  // TODO-QSP: gs 'help', 'def_child',    'sch_nerd',    'char_natalia',      $npc_usedname['A240'],    'help_chara...
  qspCall(s, 'help', 'def_group', 'chars', 'sch_gopnik', 'School: Gopniks');
  // TODO-QSP: gs 'help', 'def_child',    'sch_gopnik',  'char_vitek',      $npc_usedname['A9'],    'help_character...
  // TODO-QSP: gs 'help', 'def_child',    'sch_gopnik',  'char_dan',        $npc_usedname['A10'],    'help_characte...
  // TODO-QSP: gs 'help', 'def_child',    'sch_gopnik',  'char_shulga',      $npc_usedname['A11'],    'help_charact...
  // TODO-QSP: gs 'help', 'def_child',    'sch_gopnik',  'char_radomir',      $npc_usedname['A154'],    'help_chara...
  // TODO-QSP: gs 'help', 'def_child',    'sch_gopnik',  'char_lavrenti',    $npc_usedname['A155'],    'help_charac...
  // TODO-QSP: gs 'help', 'def_child',    'sch_gopnik',  'char_arkadi',      $npc_usedname['A156'],    'help_charac...
  // TODO-QSP: gs 'help', 'def_child',    'sch_gopnik',  'char_roman_y',      $npc_usedname['A157'],    'help_chara...
  // TODO-QSP: gs 'help', 'def_child',    'sch_gopnik',  'char_valentin',    $npc_usedname['A158'],    'help_charac...
  // TODO-QSP: gs 'help', 'def_child',    'sch_gopnik',  'char_niko',      $npc_usedname['A189'],    'help_characte...
  // TODO-QSP: gs 'help', 'def_child',    'sch_gopnik',  'char_lena',      $npc_usedname['A20'],    'help_character...
  // TODO-QSP: gs 'help', 'def_child',    'sch_gopnik',  'char_lera',      $npc_usedname['A21'],    'help_character...
  // TODO-QSP: gs 'help', 'def_child',    'sch_gopnik',  'char_pauline',      $npc_usedname['A24'],    'help_charac...
  // TODO-QSP: gs 'help', 'def_child',    'sch_gopnik',  'char_alyona',      $npc_usedname['A143'],    'help_charac...
  // TODO-QSP: gs 'help', 'def_child',    'sch_gopnik',  'char_anushka',      $npc_usedname['A144'],    'help_chara...
  // TODO-QSP: gs 'help', 'def_child',    'sch_gopnik',  'char_katyusha',    $npc_usedname['A145'],    'help_charac...
  qspCall(s, 'help', 'def_group', 'chars', 'sch_outcast', 'School: Outcasts');
  // TODO-QSP: gs 'help', 'def_child',    'sch_outcast',  'char_lesco',      $npc_usedname['A7'],    'help_characte...
  // TODO-QSP: gs 'help', 'def_child',    'sch_outcast',  'char_petia',      $npc_usedname['A159'],    'help_charac...
  qspCall(s, 'help', 'def_group', 'chars', 'sch_teacher', 'School: Teachers');
  // TODO-QSP: gs 'help', 'def_child',    'sch_teacher',  'char_coach',      $npc_usedname['A69'],    'help_charact...
  // TODO-QSP: gs 'help', 'def_child',    'sch_teacher',  'char_vasilyev',    $npc_usedname['A128'],    'help_chara...
  // TODO-QSP: gs 'help', 'def_child',    'sch_teacher',  'char_ivanov',      $npc_usedname['A129'],    'help_chara...
  // TODO-QSP: gs 'help', 'def_child',    'sch_teacher',  'char_yenotin',      $npc_usedname['A130'],    'help_char...
  // TODO-QSP: gs 'help', 'def_child',    'sch_teacher',  'char_pavlovich',    $npc_usedname['A131'],    'help_char...
  // TODO-QSP: gs 'help', 'def_child',    'sch_teacher',  'char_kuznetsov_t',    $npc_usedname['A132'],    'help_ch...
  // TODO-QSP: gs 'help', 'def_child',    'sch_teacher',  'char_matveev',      $npc_usedname['A133'],    'help_char...
  // TODO-QSP: gs 'help', 'def_child',    'sch_teacher',  'char_miss_volkov',    $npc_usedname['A134'],    'help_ch...
  // TODO-QSP: gs 'help', 'def_child',    'sch_teacher',  'char_miss_sokoloff',  $npc_usedname['A135'],    'help_ch...
  // TODO-QSP: gs 'help', 'def_child',    'sch_teacher',  'char_miss_aleksand',  $npc_usedname['A136'],    'help_ch...
  // TODO-QSP: gs 'help', 'def_child',    'sch_teacher',  'char_miss_braakman',  $npc_usedname['A137'],    'help_ch...
  // TODO-QSP: gs 'help', 'def_child',    'sch_teacher',  'char_miss_orlov',    $npc_usedname['A138'],    'help_cha...
  // TODO-QSP: gs 'help', 'def_child',    'sch_teacher',  'char_anatoly',      $npc_usedname['A26'],    'help_chara...
  qspCall(s, 'help', 'def_group', 'chars', 'pav_resident', 'Pavlovsk: Residents');
  // TODO-QSP: gs 'help', 'def_child',    'pav_resident',  'char_vera',      $npc_usedname['A27'],    'help_charact...
  // TODO-QSP: gs 'help', 'def_child',    'pav_resident',  'char_olu',        $npc_usedname['A55'],    'help_charac...
  // TODO-QSP: gs 'help', 'def_child',    'pav_resident',  'char_roma',      $npc_usedname['A56'],    'help_charact...
  // TODO-QSP: gs 'help', 'def_child',    'pav_resident',  'char_rex',        $npc_usedname['A57'],    'help_charac...
  // TODO-QSP: gs 'help', 'def_child',    'pav_resident',  'char_arthur',      $npc_usedname['A73'],    'help_chara...
  // TODO-QSP: gs 'help', 'def_child',    'pav_resident',  'char_marisha',      $npc_usedname['A93'],    'help_char...
  // TODO-QSP: gs 'help', 'def_child',    'pav_resident',  'char_sergey',      $npc_usedname['A112'],    'help_char...
  // TODO-QSP: gs 'help', 'def_child',    'pav_resident',  'char_vadim',      $npc_usedname['A113'],    'help_chara...
  // TODO-QSP: gs 'help', 'def_child',    'pav_resident',  'char_shulyov',      $npc_usedname['A127'],    'help_cha...
  // TODO-QSP: gs 'help', 'def_child',    'pav_resident',  'char_pavlin',      $npc_usedname['A217'],    'help_char...
  qspCall(s, 'help', 'def_group', 'chars', 'gadukino', 'Gadukino');
  // TODO-QSP: gs 'help', 'def_child',    'gadukino',    'char_mira',      $npc_usedname['A60'],    'help_character...
  // TODO-QSP: gs 'help', 'def_child',    'gadukino',    'char_kolyamba',    $npc_usedname['A61'],    'help_charact...
  // TODO-QSP: gs 'help', 'def_child',    'gadukino',    'char_vasyan',      $npc_usedname['A62'],    'help_charact...
  // TODO-QSP: gs 'help', 'def_child',    'gadukino',    'char_mitka',      $npc_usedname['A63'],    'help_characte...
  // TODO-QSP: gs 'help', 'def_child',    'gadukino',    'char_afanasiy',    $npc_usedname['A64'],    'help_charact...
  // TODO-QSP: gs 'help', 'def_child',    'gadukino',    'char_vitaliy',      $npc_usedname['A65'],    'help_charac...
  // TODO-QSP: gs 'help', 'def_child',    'gadukino',    'char_andrei_g',    $npc_usedname['A172'],    'help_charac...
  // TODO-QSP: gs 'help', 'def_child',    'gadukino',    'char_igor_g',      $npc_usedname['A173'],    'help_charac...
  // TODO-QSP: gs 'help', 'def_child',    'gadukino',    'char_sergei_g',    $npc_usedname['A174'],    'help_charac...
  qspCall(s, 'help', 'def_group', 'chars', 'city', 'City');
  // TODO-QSP: gs 'help', 'def_child',    'city',      'char_jora',      $npc_usedname['A44'],    'help_characters'
  // TODO-QSP: gs 'help', 'def_child',    'city',      'char_nicholas',    $npc_usedname['A52'],    'help_character...
  // TODO-QSP: gs 'help', 'def_child',    'city',      'char_ilyushkin',    $npc_usedname['A76'],    'help_characte...
  // TODO-QSP: gs 'help', 'def_child',    'city',      'char_tryndin',      $npc_usedname['A77'],    'help_characte...
  // TODO-QSP: gs 'help', 'def_child',    'city',      'char_eugene',      $npc_usedname['A89'],    'help_character...
  // TODO-QSP: gs 'help', 'def_child',    'city',      'char_tatiana',      $npc_usedname['A176'],    'help_charact...
  // TODO-QSP: gs 'help', 'def_child',    'city',      'char_nastja',      $npc_usedname['A192'],    'help_characte...
  // TODO-QSP: gs 'help', 'def_child',    'city',      'char_savva',      $npc_usedname['A204'],    'help_character...
  // TODO-QSP: gs 'help', 'def_child',    'city',      'char_tanya',      $npc_usedname['A218'],    'help_character...
  // TODO-QSP: gs 'help', 'def_child',    'city',      'char_kat',        $npc_usedname['A219'],    'help_character...
  // TODO-QSP: gs 'help', 'def_child',    'city',      'char_grigory',      $npc_usedname['A221'],    'help_charact...
  // TODO-QSP: gs 'help', 'def_child',    'city',      'char_alex',      $npc_usedname['A241'],    'help_characters...
  // TODO-QSP: gs 'help', 'def_child',    'city',      'char_amelia',      $npc_usedname['A267'],    'help_characte...
  qspCall(s, 'help', 'def_group', 'chars', 'university', 'University');
  // TODO-QSP: gs 'help', 'def_child',    'university',  'char_djibril',      $npc_usedname['A82'],    'help_charac...
  // TODO-QSP: gs 'help', 'def_child',    'university',  'char_goshi',      $npc_usedname['A83'],    'help_characte...
  // TODO-QSP: gs 'help', 'def_child',    'university',  'char_kendra',      $npc_usedname['A84'],    'help_charact...
  // TODO-QSP: gs 'help', 'def_child',    'university',  'char_vika_u',      $npc_usedname['A220'],    'help_charac...
  // TODO-QSP: gs 'help', 'def_child',    'university',  'char_ermias',      $npc_usedname['A243'],    'help_charac...
  // TODO-QSP: gs 'help', 'def_child',    'university',  'char_haruna',      $npc_usedname['A245'],    'help_charac...
  // TODO-QSP: gs 'help', 'def_child',    'university',  'char_lilly',      $npc_usedname['A247'],    'help_charact...
  // TODO-QSP: gs 'help', 'def_child',    'university',  'char_silvestr',    $npc_usedname['A248'],    'help_charac...
  // TODO-QSP: gs 'help', 'def_child',    'university',  'char_sofia_u',      $npc_usedname['A260'],    'help_chara...
  // TODO-QSP: gs 'help', 'def_child',    'university',  'char_prof_marinova',  $npc_usedname['A269'],    'help_cha...
  // TODO-QSP: gs 'help', 'def_child',    'university',  'char_prof_kudelina',  $npc_usedname['A270'],    'help_cha...
  // TODO-QSP: gs 'help', 'def_child',    'university',  'char_prof_borisov',  $npc_usedname['A271'],    'help_char...
  qspCall(s, 'help', 'def_group', 'chars', 'pushkin', 'Pushkin &amp; Ballet');
  // TODO-QSP: gs 'help', 'def_child',    'pushkin',    'char_maya',      $npc_usedname['A274'],    'help_character...
  // TODO-QSP: gs 'help', 'def_child',    'pushkin',    'char_tanis',      $npc_usedname['A276'],    'help_characte...
  // TODO-QSP: gs 'help', 'def_child',    'pushkin',    'char_gasha',      $npc_usedname['A280'],    'help_characte...
  // TODO-QSP: gs 'help', 'def_child',    'pushkin',    'char_rudolf',      $npc_usedname['A283'],    'help_charact...
  // TODO-QSP: gs 'help', 'def_child',    'pushkin',    'char_bronya',      $npc_usedname['A286'],    'help_charact...
  qspCall(s, 'help', 'def_section', 'locs', 'locs_overview', 'Locations');
  qspCall(s, 'help', 'def_child', 'locs', 'locs_home', 'Home');
  qspCall(s, 'help', 'def_child', 'locs', 'locs_school', 'School');
  qspCall(s, 'help', 'def_child', 'locs', 'locs_town', 'Town');
  scene.build();
}

function enterRenderBanner(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $result += '<span style="position:absolute;left:0;top:2px"><a style="text-decoration:none;font-size:...
  // TODO-QSP: $result += '<b style="font-size:1.1em">' + $help_page_title + '</b>'
  if (((s as any).help_from_location_type ?? 0) !== '') {
    // TODO-QSP: $result += ' <small style="opacity:0.4"> [' + $help_from_location_type + ']</small>'
  }
  // TODO-QSP: $result += '</div>'
  scene.build();
}

function enterRenderToc(s: GameState, scene: SceneBuilder): void {
  (s as any).rt_ao_i = 0;
  // TODO-QSP: :rt_ao_loop
  if (((s as any).rt_ao_i ?? 0) < Object.keys((s as any).help_toc_sections ?? {}).length) {
    if (((s as any).help_toc_page ?? 0)?.[String((s as any).rt_ao_key ?? 0)] === ((s as any).help_page_key ?? 0)) {
      ((s as any).help_toc_open ?? {})[String((s as any).rt_ao_key ?? 0)] = 1;
    } else {
      if (((' \' + $help_toc_children[$rt_ao_key] + \' ').indexOf((' \' + $help_page_key + \' '))) + 1 > 0) {
        ((s as any).help_toc_open ?? {})[String((s as any).rt_ao_key ?? 0)] = 1;
      } else {
        // TODO-QSP: :rt_ao_gloop
        if (((s as any).rt_ao_grem ?? 0) !== '') {
          (s as any).rt_ao_gsp = qspUntranslated(s, "instr(rt_ao_grem, ' ')", { location: "help" });
          if (((s as any).rt_ao_gsp ?? 0) > 0) {
          }
          if (((s as any).help_toc_is_group ?? 0)?.[String((s as any).rt_ao_gk ?? 0)]) {
            if (((' \' + $help_toc_children[$rt_ao_gk] + \' ').indexOf((' \' + $help_page_key + \' '))) + 1 > 0) {
              ((s as any).help_toc_open ?? {})[String((s as any).rt_ao_key ?? 0)] = 1;
              ((s as any).help_toc_open ?? {})[String((s as any).rt_ao_gk ?? 0)] = 1;
            }
          }
          // TODO-QSP: jump 'rt_ao_gloop'
        }
      }
    }
    (s as any).rt_ao_i = ((s as any).rt_ao_i ?? 0) + (1);
    // TODO-QSP: jump 'rt_ao_loop'
  }
  if (Object.keys((s as any).help_toc_sections ?? {}).length === 0) {
    // TODO-QSP: $rt_html += '<small><i>No topics yet.</i></small>'
  } else {
    (s as any).rt_i = 0;
    // TODO-QSP: :rt_sec_loop
    if (((s as any).rt_i ?? 0) < Object.keys((s as any).help_toc_sections ?? {}).length) {
      (s as any).rt_open = ((s as any).help_toc_open ?? 0)?.[String((s as any).rt_key ?? 0)];
      (s as any).rt_has_kids = ((((s as any).rt_kids ?? 0) !== '') ? (1) : (0));
      if (((s as any).rt_has_kids ?? 0)) {
      }
      if (((s as any).rt_page ?? 0) !== '') {
        if (((s as any).rt_page ?? 0) === ((s as any).help_page_key ?? 0)) {
        }
      } else {
        if (((s as any).help_toc_is_group ?? 0)?.[String((s as any).rt_key ?? 0)]) {
        }
      }
      // TODO-QSP: $rt_html += '<div style="margin:4px 0;font-weight:bold;font-size:0.95em">' + $rt_toggle + $rt_lnk + ...
      if (((s as any).rt_open ?? 0)  &&  ((s as any).rt_kids ?? 0) !== '') {
        // TODO-QSP: :rt_child_loop
        if (((s as any).rt_remaining ?? 0) !== '') {
          (s as any).rt_sp = qspUntranslated(s, "instr(rt_remaining, ' ')", { location: "help" });
          if (((s as any).rt_sp ?? 0) > 0) {
          }
          if (((s as any).help_toc_is_group ?? 0)?.[String((s as any).rt_ck ?? 0)]) {
            (s as any).rt_cg_open = ((s as any).help_toc_open ?? 0)?.[String((s as any).rt_ck ?? 0)];
            // TODO-QSP: $rt_html += '<div style="margin:3px 0 1px 0;padding-left:14px;font-style:italic;font-size:0.88em;opa...
            if (((s as any).rt_cg_open ?? 0)  &&  ((s as any).help_toc_children ?? 0)?.[String((s as any).rt_ck ?? 0)] !== '') {
              // TODO-QSP: :rt_gc_loop
              if (((s as any).rt_gc_rem ?? 0) !== '') {
                (s as any).rt_gc_sp = qspUntranslated(s, "instr(rt_gc_rem, ' ')", { location: "help" });
                if (((s as any).rt_gc_sp ?? 0) > 0) {
                }
                if (((s as any).rt_gc_p ?? 0) === ((s as any).help_page_key ?? 0)) {
                }
                // TODO-QSP: $rt_html += '<div style="margin:1px 0;padding-left:28px;font-size:0.88em"><a href="exec: gs ''<<$rt_...
                // TODO-QSP: jump 'rt_gc_loop'
              }
            }
          } else {
            if (((s as any).rt_cp ?? 0) === ((s as any).help_page_key ?? 0)) {
            }
            // TODO-QSP: $rt_html += '<div style="margin:2px 0;padding-left:14px"><a href="exec: gs ''<<$rt_cloc>>'', ''<<$rt...
          }
          // TODO-QSP: jump 'rt_child_loop'
        }
      }
      (s as any).rt_i = ((s as any).rt_i ?? 0) + (1);
      // TODO-QSP: jump 'rt_sec_loop'
    }
  }
  scene.build();
}

function enterRender(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'help', 'toc_init');
  if (((s as any).help_page_title ?? 0) === ''  &&  ((s as any).help_toc_label ?? 0)?.[String((s as any).help_page_key ?? 0)] !== '') {
  }
  // TODO-QSP: $help_layout +=    '<td width="20%" valign="top" style="border-right:1px solid;padding:8px 12px 8px ...
  // TODO-QSP: $help_layout +=      $func('help', 'render_toc')
  // TODO-QSP: $help_layout +=    '</td>'
  // TODO-QSP: $help_layout +=    '<td valign="top" style="padding:0 0 8px 16px">'
  // TODO-QSP: $help_layout +=      $func('help', 'render_banner')
  // TODO-QSP: $help_layout +=      $help_page_content
  // TODO-QSP: $help_layout +=    '</td>'
  // TODO-QSP: $help_layout += '</tr></table>'
  // TODO-QSP: *p $help_layout
  scene.actions([
    { label: 'Back', handler: (st: GameState) => {
    qspCall(st, 'help', 'back');
  } },
  ]);
  scene.build();
}

function enterGeneric(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $help_page_content += '<table width="100%" cellspacing="6" cellpadding="0"><tr>'
  // TODO-QSP: $help_gen_c += '<small>'
  // TODO-QSP: $help_gen_c += '<a href="exec: gs ''help'', ''ui_statbar''">Stat Bar</a><br>'
  // TODO-QSP: $help_gen_c += '<a href="exec: gs ''help'', ''ui_menu''">Navigation Menu</a><br>'
  // TODO-QSP: $help_gen_c += '<a href="exec: gs ''help'', ''ui_actions''">Action Buttons</a>'
  // TODO-QSP: $help_gen_c += '</small>'
  // TODO-QSP: $help_page_content += '<td style="' + $help_gen_cs + '">' + $help_gen_c + '</td>'
  // TODO-QSP: $help_gen_c += '<small>'
  // TODO-QSP: $help_gen_c += '<a href="exec: gs ''help'', ''mech_time''">Time &amp; Schedule</a><br>'
  // TODO-QSP: $help_gen_c += '<a href="exec: gs ''help'', ''mech_stats''">Stats &amp; Attributes</a><br>'
  // TODO-QSP: $help_gen_c += '<a href="exec: gs ''help'', ''mech_money''">Money &amp; Finances</a>'
  // TODO-QSP: $help_gen_c += '</small>'
  // TODO-QSP: $help_page_content += '<td style="' + $help_gen_cs + '">' + $help_gen_c + '</td>'
  // TODO-QSP: $help_page_content += '</tr><tr>'
  // TODO-QSP: $help_gen_c += '<small>'
  // TODO-QSP: $help_gen_c += '<a href="exec: gs ''help_characters'', ''chars_pc''">Your Character</a><br>'
  // TODO-QSP: $help_gen_c += '<a href="exec: gs ''help'', ''chars_overview''">Family &amp; School</a>'
  // TODO-QSP: $help_gen_c += '</small>'
  // TODO-QSP: $help_page_content += '<td style="' + $help_gen_cs + '">' + $help_gen_c + '</td>'
  // TODO-QSP: $help_gen_c += '<small>'
  // TODO-QSP: $help_gen_c += '<a href="exec: gs ''help'', ''locs_home''">Home</a><br>'
  // TODO-QSP: $help_gen_c += '<a href="exec: gs ''help'', ''locs_school''">School</a><br>'
  // TODO-QSP: $help_gen_c += '<a href="exec: gs ''help'', ''locs_town''">Town</a>'
  // TODO-QSP: $help_gen_c += '</small>'
  // TODO-QSP: $help_page_content += '<td style="' + $help_gen_cs + '">' + $help_gen_c + '</td>'
  // TODO-QSP: $help_page_content += '</tr></table>'
  qspCall(s, 'help', 'render', ((s as any).locArgs?.[0] ?? 0));
  scene.build();
}

function enterUiOverview(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $help_page_content  += 'The game screen is divided into two main areas: the <b>main window</b> on th...
  // TODO-QSP: $help_page_content  += 'shows the current scene and your action choices, while the <b>stat panel</b>...
  // TODO-QSP: $help_page_content  += 'right shows your character information and navigation icons.<br><br>'
  // TODO-QSP: $help_page_content  += 'Select a subtopic on the left for more detail.'
  qspCall(s, 'help', 'render', ((s as any).locArgs?.[0] ?? 0));
  scene.build();
}

function enterUiStatbar(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $help_page_content  += 'The stat panel on the right side of the screen displays your key stats at a ...
  // TODO-QSP: $help_page_content  += 'money, energy, mood, and appearance among others.<br><br>'
  // TODO-QSP: $help_page_content  += '<i>(Placeholder — fill in with real stat descriptions.)</i>'
  qspCall(s, 'help', 'render', ((s as any).locArgs?.[0] ?? 0));
  scene.build();
}

function enterUiMenu(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $help_page_content  += 'The row of icons at the bottom of the stat panel lets you jump to key screen...
  // TODO-QSP: $help_page_content  += 'your inventory, phone, map, calendar, and this help system.<br><br>'
  // TODO-QSP: $help_page_content  += '<i>(Placeholder — fill in with icon-by-icon descriptions.)</i>'
  qspCall(s, 'help', 'render', ((s as any).locArgs?.[0] ?? 0));
  scene.build();
}

function enterUiActions(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $help_page_content  += 'The list of clickable links in the main window represents the actions availa...
  // TODO-QSP: $help_page_content  += 'to you in the current scene. Actions can move you to a new location, trigger...
  // TODO-QSP: $help_page_content  += 'events, or change your stats.<br><br>'
  // TODO-QSP: $help_page_content  += '<i>(Placeholder — fill in with further detail.)</i>'
  qspCall(s, 'help', 'render', ((s as any).locArgs?.[0] ?? 0));
  scene.build();
}

function enterMechOverview(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $help_page_content  += 'Girl Life simulates day-to-day life. Time passes as you take actions; '
  // TODO-QSP: $help_page_content  += 'your stats rise and fall based on your choices, and money must be managed '
  // TODO-QSP: $help_page_content  += 'to cover living expenses.<br><br>'
  // TODO-QSP: $help_page_content  += 'Select a subtopic on the left for more detail.'
  qspCall(s, 'help', 'render', ((s as any).locArgs?.[0] ?? 0));
  scene.build();
}

function enterMechTime(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $help_page_content  += 'The game runs on a clock divided into periods (morning, afternoon, evening, ...
  // TODO-QSP: $help_page_content  += 'Most actions consume one or more time periods. The week follows a school/wor...
  // TODO-QSP: $help_page_content  += 'schedule, and certain events only occur on specific days.<br><br>'
  // TODO-QSP: $help_page_content  += '<i>(Placeholder — fill in with real time system details.)</i>'
  qspCall(s, 'help', 'render', ((s as any).locArgs?.[0] ?? 0));
  scene.build();
}

function enterMechStats(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $help_page_content  += 'Your character has a range of numeric stats — beauty, fitness, intelligence,...
  // TODO-QSP: $help_page_content  += 'confidence, and more. Stats have upper and lower bounds and change through '
  // TODO-QSP: $help_page_content  += 'activities, sleep, eating, and events.<br><br>'
  // TODO-QSP: $help_page_content  += '<i>(Placeholder — fill in with stat list and ranges.)</i>'
  qspCall(s, 'help', 'render', ((s as any).locArgs?.[0] ?? 0));
  scene.build();
}

function enterMechMoney(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $help_page_content  += 'Money is spent on food, clothing, rent, and social activities. '
  // TODO-QSP: $help_page_content  += 'Income comes from jobs, allowances, and other sources depending on '
  // TODO-QSP: $help_page_content  += 'your current living situation.<br><br>'
  // TODO-QSP: $help_page_content  += '<i>(Placeholder — fill in with income/expense breakdown.)</i>'
  qspCall(s, 'help', 'render', ((s as any).locArgs?.[0] ?? 0));
  scene.build();
}

function enterCharsOverview(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $help_page_content  += 'The game world is populated by recurring NPCs who each have their own '
  // TODO-QSP: $help_page_content  += 'relationship score with your character. How they treat you depends on '
  // TODO-QSP: $help_page_content  += 'that score and your stats.<br><br>'
  // TODO-QSP: $help_page_content  += 'Select a subtopic on the left for more detail.'
  qspCall(s, 'help', 'render', ((s as any).locArgs?.[0] ?? 0));
  scene.build();
}

function enterCharsFamily(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $help_page_content  += 'Your family members affect your starting home situation, available allowance...
  // TODO-QSP: $help_page_content  += 'and certain story paths. Relationships with them can be improved or damaged ...
  // TODO-QSP: $help_page_content  += 'over time.<br><br>'
  // TODO-QSP: $help_page_content  += '<i>(Placeholder — fill in with family member profiles.)</i>'
  qspCall(s, 'help', 'render', ((s as any).locArgs?.[0] ?? 0));
  scene.build();
}

function enterCharsNpc(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $help_page_content  += 'Classmates, teachers, shopkeepers, and others populate the game world. '
  // TODO-QSP: $help_page_content  += 'Building relationships with them unlocks new events and options.<br><br>'
  // TODO-QSP: $help_page_content  += '<i>(Placeholder — fill in with NPC roster.)</i>'
  qspCall(s, 'help', 'render', ((s as any).locArgs?.[0] ?? 0));
  scene.build();
}

function enterLocsOverview(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $help_page_content  += 'The game world contains many distinct locations, each with their own '
  // TODO-QSP: $help_page_content  += 'available actions and time costs to reach. You can travel between them '
  // TODO-QSP: $help_page_content  += 'using the map or direct action links.<br><br>'
  // TODO-QSP: $help_page_content  += 'Select a subtopic on the left for more detail.'
  qspCall(s, 'help', 'render', ((s as any).locArgs?.[0] ?? 0));
  scene.build();
}

function enterLocsHome(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $help_page_content  += 'Home is your base of operations. Here you can sleep, eat, change clothes, '
  // TODO-QSP: $help_page_content  += 'study, and spend time with family members who live with you.<br><br>'
  // TODO-QSP: $help_page_content  += '<i>(Placeholder — fill in with room-by-room breakdown.)</i>'
  qspCall(s, 'help', 'render', ((s as any).locArgs?.[0] ?? 0));
  scene.build();
}

function enterLocsSchool(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $help_page_content  += 'School runs on weekdays. Attending classes raises your grades and intelligen...
  // TODO-QSP: $help_page_content  += 'Between lessons you can socialise, join clubs, or sneak off campus.<br><br>'
  // TODO-QSP: $help_page_content  += '<i>(Placeholder — fill in with school map and schedule.)</i>'
  qspCall(s, 'help', 'render', ((s as any).locArgs?.[0] ?? 0));
  scene.build();
}

function enterLocsTown(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $help_page_content  += 'The town centre has shops, a park, cafes, and various venues to visit. '
  // TODO-QSP: $help_page_content  += 'Most town locations are accessible in the afternoon and evening.<br><br>'
  // TODO-QSP: $help_page_content  += '<i>(Placeholder — fill in with venue list and opening hours.)</i>'
  qspCall(s, 'help', 'render', ((s as any).locArgs?.[0] ?? 0));
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'open':
      enterOpen(s, scene);
      break;
    case 'show':
      enterShow(s, scene);
      break;
    case 'back':
      enterBack(s, scene);
      break;
    case 'def_section':
      enterDefSection(s, scene);
      break;
    case 'def_group':
      enterDefGroup(s, scene);
      break;
    case 'def_child':
      enterDefChild(s, scene);
      break;
    case 'toc_init':
      enterTocInit(s, scene);
      break;
    case 'render_banner':
      enterRenderBanner(s, scene);
      break;
    case 'render_toc':
      enterRenderToc(s, scene);
      break;
    case 'render':
      enterRender(s, scene);
      break;
    case 'generic':
      enterGeneric(s, scene);
      break;
    case 'ui_overview':
      enterUiOverview(s, scene);
      break;
    case 'ui_statbar':
      enterUiStatbar(s, scene);
      break;
    case 'ui_menu':
      enterUiMenu(s, scene);
      break;
    case 'ui_actions':
      enterUiActions(s, scene);
      break;
    case 'mech_overview':
      enterMechOverview(s, scene);
      break;
    case 'mech_time':
      enterMechTime(s, scene);
      break;
    case 'mech_stats':
      enterMechStats(s, scene);
      break;
    case 'mech_money':
      enterMechMoney(s, scene);
      break;
    case 'chars_overview':
      enterCharsOverview(s, scene);
      break;
    case 'chars_family':
      enterCharsFamily(s, scene);
      break;
    case 'chars_npc':
      enterCharsNpc(s, scene);
      break;
    case 'locs_overview':
      enterLocsOverview(s, scene);
      break;
    case 'locs_home':
      enterLocsHome(s, scene);
      break;
    case 'locs_school':
      enterLocsSchool(s, scene);
      break;
    case 'locs_town':
      enterLocsTown(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const help: LocationDef = {
  name: 'help',
  region: 'other',
  enter: enter,
};
