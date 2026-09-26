import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterOpen(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'state', 'push');
  (s as any).help_from_curloc = ((s as any).curloc ?? 0);
  (s as any).help_from_loc_arg = ((s as any).loc_arg ?? 0);
  (s as any).help_from_location_type = ((s as any).location_type ?? 0);
  qspGoto(s, 'help', ((String((s as any).locArgs?.[1] ?? '') !== '') ? (((s as any).locArgs?.[1] ?? 0)) : ('show')));
  scene.build();
}

function enterShow(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'help', 'generic');
  scene.build();
}

function enterBack(s: GameState, scene: SceneBuilder): void {
  (s as any).help_from_curloc = undefined;
  (s as any).help_from_loc_arg = undefined;
  (s as any).help_from_location_type = undefined;
  (s as any).help_page_title = undefined;
  (s as any).help_page_key = undefined;
  (s as any).help_page_loc = undefined;
  (s as any).help_page_content = undefined;
  (s as any).help_gen_c = undefined;
  (s as any).help_gen_cs = undefined;
  qspCall(s, 'state', 'pop');
  scene.build();
}

function enterDefSection(s: GameState, scene: SceneBuilder): void {
  (s as any).help_toc_sections = [...((s as any).help_toc_sections ?? []), ((s as any).locArgs?.[1] ?? 0)];
  ((s as any).help_toc_label = (s as any).help_toc_label ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).locArgs?.[3] ?? 0);
  ((s as any).help_toc_page = (s as any).help_toc_page ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).help_toc_loc = (s as any).help_toc_loc ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((String((s as any).locArgs?.[4] ?? '') !== '') ? (((s as any).locArgs?.[4] ?? 0)) : ('help'));
  scene.build();
}

function enterDefGroup(s: GameState, scene: SceneBuilder): void {
  ((s as any).help_toc_label = (s as any).help_toc_label ?? {})[((s as any).locArgs?.[2] ?? 0)] = ((s as any).locArgs?.[3] ?? 0);
  ((s as any).help_toc_page = (s as any).help_toc_page ?? {})[((s as any).locArgs?.[2] ?? 0)] = '';
  ((s as any).help_toc_loc = (s as any).help_toc_loc ?? {})[((s as any).locArgs?.[2] ?? 0)] = 'help';
  ((s as any).help_toc_is_group = (s as any).help_toc_is_group ?? {})[((s as any).locArgs?.[2] ?? 0)] = 1;
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    (s as any).help_toc_sections = [...((s as any).help_toc_sections ?? []), ((s as any).locArgs?.[2] ?? 0)];
  } else {
    if (((s as any).help_toc_children ?? 0)[String((s as any).locArgs?.[1] ?? '')] === '') {
      ((s as any).help_toc_children = (s as any).help_toc_children ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).locArgs?.[2] ?? 0);
    } else {
      ((s as any).help_toc_children = (s as any).help_toc_children ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).help_toc_children[((s as any).locArgs?.[1] ?? 0)] ?? 0) + (' ' + ((s as any).locArgs?.[2] ?? 0));
    }
  }
  scene.build();
}

function enterDefChild(s: GameState, scene: SceneBuilder): void {
  if (((s as any).help_toc_children ?? 0)[String((s as any).locArgs?.[1] ?? '')] === '') {
    ((s as any).help_toc_children = (s as any).help_toc_children ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).locArgs?.[2] ?? 0);
  } else {
    ((s as any).help_toc_children = (s as any).help_toc_children ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).help_toc_children[((s as any).locArgs?.[1] ?? 0)] ?? 0) + (' ' + ((s as any).locArgs?.[2] ?? 0));
  }
  ((s as any).help_toc_label = (s as any).help_toc_label ?? {})[((s as any).locArgs?.[2] ?? 0)] = ((s as any).locArgs?.[3] ?? 0);
  ((s as any).help_toc_page = (s as any).help_toc_page ?? {})[((s as any).locArgs?.[2] ?? 0)] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).help_toc_loc = (s as any).help_toc_loc ?? {})[((s as any).locArgs?.[2] ?? 0)] = ((String((s as any).locArgs?.[4] ?? '') !== '') ? (((s as any).locArgs?.[4] ?? 0)) : ('help'));
  scene.build();
}

function enterTocInit(s: GameState, scene: SceneBuilder): void {
  (s as any).help_toc_sections = undefined;
  (s as any).help_toc_label = undefined;
  (s as any).help_toc_page = undefined;
  (s as any).help_toc_children = undefined;
  (s as any).help_toc_loc = undefined;
  (s as any).help_toc_is_group = undefined;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ui', 'ui_overview', 'User Interface']; enterDefSection(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ui', 'ui_statbar', 'Stat Bar']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ui', 'ui_menu', 'Navigation Menu']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ui', 'ui_actions', 'Action Buttons']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'mechanics', 'mech_overview', 'Game Mechanics']; enterDefSection(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'mechanics', 'mech_time', 'Time & Schedule']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'mechanics', 'mech_stats', 'Stats & Attributes']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'mechanics', 'mech_money', 'Money & Finances']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'chars', 'chars_overview', 'Characters']; enterDefSection(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'chars', 'chars_pc', 'Your Character', 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'chars', 'family', 'Family']; enterDefGroup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'family', 'char_dad', (((s as any).npc_usedname ?? 0)?.['A28']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'family', 'char_mom', (((s as any).npc_usedname ?? 0)?.['A29']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'family', 'char_luda', (((s as any).npc_usedname ?? 0)?.['A30']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'family', 'char_grandma', (((s as any).npc_usedname ?? 0)?.['A31']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'family', 'char_grandpa', (((s as any).npc_usedname ?? 0)?.['A32']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'family', 'char_anya', (((s as any).npc_usedname ?? 0)?.['A33']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'family', 'char_kolka', (((s as any).npc_usedname ?? 0)?.['A34']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'family', 'char_uncle_misha', (((s as any).npc_usedname ?? 0)?.['A54']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'chars', 'sch_cool', 'School: Cool Kids']; enterDefGroup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_cool', 'char_dimka', (((s as any).npc_usedname ?? 0)?.['A1']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_cool', 'char_igor', (((s as any).npc_usedname ?? 0)?.['A4']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_cool', 'char_marcus', (((s as any).npc_usedname ?? 0)?.['A146']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_cool', 'char_andrey', (((s as any).npc_usedname ?? 0)?.['A147']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_cool', 'char_mefodiy', (((s as any).npc_usedname ?? 0)?.['A148']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_cool', 'char_katja', (((s as any).npc_usedname ?? 0)?.['A14']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_cool', 'char_vicky', (((s as any).npc_usedname ?? 0)?.['A15']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_cool', 'char_irina', (((s as any).npc_usedname ?? 0)?.['A17']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_cool', 'char_bella', (((s as any).npc_usedname ?? 0)?.['A22']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_cool', 'char_stasya', (((s as any).npc_usedname ?? 0)?.['A139']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_cool', 'char_lizaveta', (((s as any).npc_usedname ?? 0)?.['A140']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_cool', 'char_sonia', (((s as any).npc_usedname ?? 0)?.['A25']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'chars', 'sch_jock', 'School: Jocks']; enterDefGroup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_jock', 'char_ivan', (((s as any).npc_usedname ?? 0)?.['A3']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_jock', 'char_fedor', (((s as any).npc_usedname ?? 0)?.['A5']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_jock', 'char_svyatoslav', (((s as any).npc_usedname ?? 0)?.['A8']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_jock', 'char_lazar', (((s as any).npc_usedname ?? 0)?.['A149']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_jock', 'char_erast', (((s as any).npc_usedname ?? 0)?.['A150']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_jock', 'char_vanya', (((s as any).npc_usedname ?? 0)?.['A165']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_jock', 'char_lariska', (((s as any).npc_usedname ?? 0)?.['A13']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_jock', 'char_christina', (((s as any).npc_usedname ?? 0)?.['A18']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_jock', 'char_lina', (((s as any).npc_usedname ?? 0)?.['A19']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_jock', 'char_albina', (((s as any).npc_usedname ?? 0)?.['A23']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_jock', 'char_ronnie', (((s as any).npc_usedname ?? 0)?.['A141']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'chars', 'sch_nerd', 'School: Nerds']; enterDefGroup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_nerd', 'char_artem', (((s as any).npc_usedname ?? 0)?.['A2']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_nerd', 'char_petka', (((s as any).npc_usedname ?? 0)?.['A6']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_nerd', 'char_evgeny', (((s as any).npc_usedname ?? 0)?.['A151']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_nerd', 'char_feofan', (((s as any).npc_usedname ?? 0)?.['A152']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_nerd', 'char_gerasim', (((s as any).npc_usedname ?? 0)?.['A153']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_nerd', 'char_julia', (((s as any).npc_usedname ?? 0)?.['A12']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_nerd', 'char_natasha_s', (((s as any).npc_usedname ?? 0)?.['A16']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_nerd', 'char_zina', (((s as any).npc_usedname ?? 0)?.['A142']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_nerd', 'char_natalia', (((s as any).npc_usedname ?? 0)?.['A240']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'chars', 'sch_gopnik', 'School: Gopniks']; enterDefGroup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_gopnik', 'char_vitek', (((s as any).npc_usedname ?? 0)?.['A9']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_gopnik', 'char_dan', (((s as any).npc_usedname ?? 0)?.['A10']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_gopnik', 'char_shulga', (((s as any).npc_usedname ?? 0)?.['A11']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_gopnik', 'char_radomir', (((s as any).npc_usedname ?? 0)?.['A154']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_gopnik', 'char_lavrenti', (((s as any).npc_usedname ?? 0)?.['A155']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_gopnik', 'char_arkadi', (((s as any).npc_usedname ?? 0)?.['A156']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_gopnik', 'char_roman_y', (((s as any).npc_usedname ?? 0)?.['A157']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_gopnik', 'char_valentin', (((s as any).npc_usedname ?? 0)?.['A158']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_gopnik', 'char_niko', (((s as any).npc_usedname ?? 0)?.['A189']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_gopnik', 'char_lena', (((s as any).npc_usedname ?? 0)?.['A20']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_gopnik', 'char_lera', (((s as any).npc_usedname ?? 0)?.['A21']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_gopnik', 'char_pauline', (((s as any).npc_usedname ?? 0)?.['A24']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_gopnik', 'char_alyona', (((s as any).npc_usedname ?? 0)?.['A143']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_gopnik', 'char_anushka', (((s as any).npc_usedname ?? 0)?.['A144']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_gopnik', 'char_katyusha', (((s as any).npc_usedname ?? 0)?.['A145']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'chars', 'sch_outcast', 'School: Outcasts']; enterDefGroup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_outcast', 'char_lesco', (((s as any).npc_usedname ?? 0)?.['A7']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_outcast', 'char_petia', (((s as any).npc_usedname ?? 0)?.['A159']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'chars', 'sch_teacher', 'School: Teachers']; enterDefGroup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_teacher', 'char_coach', (((s as any).npc_usedname ?? 0)?.['A69']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_teacher', 'char_vasilyev', (((s as any).npc_usedname ?? 0)?.['A128']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_teacher', 'char_ivanov', (((s as any).npc_usedname ?? 0)?.['A129']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_teacher', 'char_yenotin', (((s as any).npc_usedname ?? 0)?.['A130']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_teacher', 'char_pavlovich', (((s as any).npc_usedname ?? 0)?.['A131']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_teacher', 'char_kuznetsov_t', (((s as any).npc_usedname ?? 0)?.['A132']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_teacher', 'char_matveev', (((s as any).npc_usedname ?? 0)?.['A133']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_teacher', 'char_miss_volkov', (((s as any).npc_usedname ?? 0)?.['A134']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_teacher', 'char_miss_sokoloff', (((s as any).npc_usedname ?? 0)?.['A135']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_teacher', 'char_miss_aleksand', (((s as any).npc_usedname ?? 0)?.['A136']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_teacher', 'char_miss_braakman', (((s as any).npc_usedname ?? 0)?.['A137']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_teacher', 'char_miss_orlov', (((s as any).npc_usedname ?? 0)?.['A138']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sch_teacher', 'char_anatoly', (((s as any).npc_usedname ?? 0)?.['A26']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'chars', 'pav_resident', 'Pavlovsk: Residents']; enterDefGroup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pav_resident', 'char_vera', (((s as any).npc_usedname ?? 0)?.['A27']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pav_resident', 'char_olu', (((s as any).npc_usedname ?? 0)?.['A55']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pav_resident', 'char_roma', (((s as any).npc_usedname ?? 0)?.['A56']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pav_resident', 'char_rex', (((s as any).npc_usedname ?? 0)?.['A57']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pav_resident', 'char_arthur', (((s as any).npc_usedname ?? 0)?.['A73']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pav_resident', 'char_marisha', (((s as any).npc_usedname ?? 0)?.['A93']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pav_resident', 'char_sergey', (((s as any).npc_usedname ?? 0)?.['A112']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pav_resident', 'char_vadim', (((s as any).npc_usedname ?? 0)?.['A113']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pav_resident', 'char_shulyov', (((s as any).npc_usedname ?? 0)?.['A127']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pav_resident', 'char_pavlin', (((s as any).npc_usedname ?? 0)?.['A217']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'chars', 'gadukino', 'Gadukino']; enterDefGroup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'gadukino', 'char_mira', (((s as any).npc_usedname ?? 0)?.['A60']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'gadukino', 'char_kolyamba', (((s as any).npc_usedname ?? 0)?.['A61']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'gadukino', 'char_vasyan', (((s as any).npc_usedname ?? 0)?.['A62']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'gadukino', 'char_mitka', (((s as any).npc_usedname ?? 0)?.['A63']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'gadukino', 'char_afanasiy', (((s as any).npc_usedname ?? 0)?.['A64']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'gadukino', 'char_vitaliy', (((s as any).npc_usedname ?? 0)?.['A65']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'gadukino', 'char_andrei_g', (((s as any).npc_usedname ?? 0)?.['A172']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'gadukino', 'char_igor_g', (((s as any).npc_usedname ?? 0)?.['A173']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'gadukino', 'char_sergei_g', (((s as any).npc_usedname ?? 0)?.['A174']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'chars', 'city', 'City']; enterDefGroup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'city', 'char_jora', (((s as any).npc_usedname ?? 0)?.['A44']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'city', 'char_nicholas', (((s as any).npc_usedname ?? 0)?.['A52']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'city', 'char_ilyushkin', (((s as any).npc_usedname ?? 0)?.['A76']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'city', 'char_tryndin', (((s as any).npc_usedname ?? 0)?.['A77']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'city', 'char_eugene', (((s as any).npc_usedname ?? 0)?.['A89']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'city', 'char_tatiana', (((s as any).npc_usedname ?? 0)?.['A176']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'city', 'char_nastja', (((s as any).npc_usedname ?? 0)?.['A192']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'city', 'char_savva', (((s as any).npc_usedname ?? 0)?.['A204']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'city', 'char_tanya', (((s as any).npc_usedname ?? 0)?.['A218']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'city', 'char_kat', (((s as any).npc_usedname ?? 0)?.['A219']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'city', 'char_grigory', (((s as any).npc_usedname ?? 0)?.['A221']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'city', 'char_alex', (((s as any).npc_usedname ?? 0)?.['A241']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'city', 'char_amelia', (((s as any).npc_usedname ?? 0)?.['A267']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'chars', 'university', 'University']; enterDefGroup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'university', 'char_djibril', (((s as any).npc_usedname ?? 0)?.['A82']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'university', 'char_goshi', (((s as any).npc_usedname ?? 0)?.['A83']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'university', 'char_kendra', (((s as any).npc_usedname ?? 0)?.['A84']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'university', 'char_vika_u', (((s as any).npc_usedname ?? 0)?.['A220']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'university', 'char_ermias', (((s as any).npc_usedname ?? 0)?.['A243']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'university', 'char_haruna', (((s as any).npc_usedname ?? 0)?.['A245']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'university', 'char_lilly', (((s as any).npc_usedname ?? 0)?.['A247']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'university', 'char_silvestr', (((s as any).npc_usedname ?? 0)?.['A248']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'university', 'char_sofia_u', (((s as any).npc_usedname ?? 0)?.['A260']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'university', 'char_prof_marinova', (((s as any).npc_usedname ?? 0)?.['A269']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'university', 'char_prof_kudelina', (((s as any).npc_usedname ?? 0)?.['A270']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'university', 'char_prof_borisov', (((s as any).npc_usedname ?? 0)?.['A271']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'chars', 'pushkin', 'Pushkin &amp; Ballet']; enterDefGroup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pushkin', 'char_maya', (((s as any).npc_usedname ?? 0)?.['A274']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pushkin', 'char_tanis', (((s as any).npc_usedname ?? 0)?.['A276']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pushkin', 'char_gasha', (((s as any).npc_usedname ?? 0)?.['A280']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pushkin', 'char_rudolf', (((s as any).npc_usedname ?? 0)?.['A283']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pushkin', 'char_bronya', (((s as any).npc_usedname ?? 0)?.['A286']), 'help_characters']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'locs', 'locs_overview', 'Locations']; enterDefSection(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'locs', 'locs_home', 'Home']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'locs', 'locs_school', 'School']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'locs', 'locs_town', 'Town']; enterDefChild(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterRenderBanner(s: GameState, scene: SceneBuilder): void {
  (s as any).result = '<div style="position:relative;padding:2px 0 8px 0;border-bottom:1px solid;margin-bottom:10px;text-align:center">';
  (s as any).result = ((s as any).result ?? 0) + ('<span style="position:absolute;left:0;top:2px"><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027help\u0027, \u0027back\u0027); return false;">&#8592; Back</a></span>');
  (s as any).result = ((s as any).result ?? 0) + ('<b style="font-size:1.1em">' + ((s as any).help_page_title ?? 0) + '</b>');
  if (((s as any).help_from_location_type ?? 0) !== '') {
    (s as any).result = ((s as any).result ?? 0) + (' <small style="opacity:0.4"> [' + ((s as any).help_from_location_type ?? 0) + ']</small>');
  }
  (s as any).result = ((s as any).result ?? 0) + ('</div>');
  scene.build();
}

function enterRenderToc(s: GameState, scene: SceneBuilder): void {
  (s as any).rt_ao_i = 0;
  while (true) {
    if (((s as any).rt_ao_i ?? 0) < Object.keys((s as any).help_toc_sections ?? {}).length) {
      (s as any).rt_ao_key = (((s as any).help_toc_sections ?? 0)?.[String((s as any).rt_ao_i ?? 0)] ?? 0);
      if (((s as any).help_toc_page ?? 0)?.[String((s as any).rt_ao_key ?? 0)] === ((s as any).help_page_key ?? 0)) {
        ((s as any).help_toc_open = (s as any).help_toc_open ?? {})[String((s as any).rt_ao_key ?? 0)] = 1;
      } else {
        if (((String(' ' + (((s as any).help_toc_children ?? 0)?.[String((s as any).rt_ao_key ?? 0)] ?? 0) + ' ').indexOf(String(' ' + ((s as any).help_page_key ?? 0) + ' '))) + 1) > 0) {
          ((s as any).help_toc_open = (s as any).help_toc_open ?? {})[String((s as any).rt_ao_key ?? 0)] = 1;
        } else {
          (s as any).rt_ao_grem = (((s as any).help_toc_children ?? 0)?.[String((s as any).rt_ao_key ?? 0)] ?? 0);
          while (true) {
            if (((s as any).rt_ao_grem ?? 0) !== '') {
              (s as any).rt_ao_gsp = ((String(((s as any).rt_ao_grem ?? 0)).indexOf(String(' '))) + 1);
              if (((s as any).rt_ao_gsp ?? 0) > 0) {
                (s as any).rt_ao_gk = (String(((s as any).rt_ao_grem ?? 0)).slice((1)-1, ((1)-1)+(((s as any).rt_ao_gsp ?? 0) - 1)));
                (s as any).rt_ao_grem = (String(((s as any).rt_ao_grem ?? 0)).slice((((s as any).rt_ao_gsp ?? 0) + 1)-1));
              } else {
                (s as any).rt_ao_gk = ((s as any).rt_ao_grem ?? 0);
                (s as any).rt_ao_grem = '';
              }
              if (((s as any).help_toc_is_group ?? 0)?.[String((s as any).rt_ao_gk ?? 0)]) {
                if (((String(' ' + (((s as any).help_toc_children ?? 0)?.[String((s as any).rt_ao_gk ?? 0)] ?? 0) + ' ').indexOf(String(' ' + ((s as any).help_page_key ?? 0) + ' '))) + 1) > 0) {
                  ((s as any).help_toc_open = (s as any).help_toc_open ?? {})[String((s as any).rt_ao_key ?? 0)] = 1;
                  ((s as any).help_toc_open = (s as any).help_toc_open ?? {})[String((s as any).rt_ao_gk ?? 0)] = 1;
                }
              }
              break;
            }
          }
        }
      }
      (s as any).rt_ao_i = ((s as any).rt_ao_i ?? 0) + (1);
      break;
    }
    (s as any).rt_ao_i = undefined;
    (s as any).rt_ao_key = undefined;
    (s as any).rt_ao_grem = undefined;
    (s as any).rt_ao_gsp = undefined;
    (s as any).rt_ao_gk = undefined;
    (s as any).rt_html = '<div style="font-weight:bold;font-size:0.95em;padding:0 0 6px 0;border-bottom:2px solid;margin-bottom:8px">Contents</div>';
    if (Object.keys((s as any).help_toc_sections ?? {}).length === 0) {
      (s as any).rt_html = ((s as any).rt_html ?? 0) + ('<small><i>No topics yet.</i></small>');
    } else {
      (s as any).rt_i = 0;
      while (true) {
        if (((s as any).rt_i ?? 0) < Object.keys((s as any).help_toc_sections ?? {}).length) {
          (s as any).rt_key = (((s as any).help_toc_sections ?? 0)?.[String((s as any).rt_i ?? 0)] ?? 0);
          (s as any).rt_label = (((s as any).help_toc_label ?? 0)?.[String((s as any).rt_key ?? 0)] ?? 0);
          (s as any).rt_page = (((s as any).help_toc_page ?? 0)?.[String((s as any).rt_key ?? 0)] ?? 0);
          (s as any).rt_loc = (((s as any).help_toc_loc ?? 0)?.[String((s as any).rt_key ?? 0)] ?? 0);
          (s as any).rt_kids = (((s as any).help_toc_children ?? 0)?.[String((s as any).rt_key ?? 0)] ?? 0);
          (s as any).rt_open = (((s as any).help_toc_open ?? 0)?.[String((s as any).rt_key ?? 0)] ?? 0);
          (s as any).rt_has_kids = ((((s as any).rt_kids ?? 0) !== '') ? (1) : (0));
          if (((s as any).rt_has_kids ?? 0)) {
            (s as any).rt_tri = ((((s as any).rt_open ?? 0)) ? ('&#9660;') : ('&#9654;'));
            (s as any).rt_toggle = '<a href="#" onclick="window.__gameStore.setState((s) => { (s.help_toc_open ??= {})String((s as any).rt_key ?? \u0027\u0027) = 1 - help_toc_open[\u0027' + ((s as any).rt_key ?? 0) + '\u0027]; return s; }); window.__gameStore.getState().doGoto(String((s as any).help_page_loc ?? \u0027\u0027), String((s as any).help_page_key ?? \u0027\u0027)); return false;">' + ((s as any).rt_tri ?? 0) + '</a> ';
          } else {
            (s as any).rt_toggle = '&nbsp;&nbsp; ';
          }
          if (((s as any).rt_page ?? 0) !== '') {
            if (((s as any).rt_page ?? 0) === ((s as any).help_page_key ?? 0)) {
              (s as any).rt_active = ' style="font-weight:bold;border-left:3px solid;padding-left:4px;margin-left:-7px;display:inline-block"';
            } else {
              (s as any).rt_active = '';
            }
            (s as any).rt_lnk = '<a href="#" onclick="window.__gameStore.getState().doGoto(String((s as any).rt_loc ?? \u0027\u0027), String((s as any).rt_page ?? \u0027\u0027)); return false;">' + ((s as any).rt_label ?? 0) + '</a>';
          } else {
            if (((s as any).help_toc_is_group ?? 0)?.[String((s as any).rt_key ?? 0)]) {
              (s as any).rt_lnk = '<a href="#" onclick="window.__gameStore.setState((s) => { (s.help_toc_open ??= {})String((s as any).rt_key ?? \u0027\u0027) = 1 - help_toc_open[\u0027' + ((s as any).rt_key ?? 0) + '\u0027]; return s; }); window.__gameStore.getState().doGoto(String((s as any).help_page_loc ?? \u0027\u0027), String((s as any).help_page_key ?? \u0027\u0027)); return false;">' + ((s as any).rt_label ?? 0) + '</a>';
            } else {
              (s as any).rt_lnk = ((s as any).rt_label ?? 0);
            }
          }
          (s as any).rt_html = ((s as any).rt_html ?? 0) + ('<div style="margin:4px 0;font-weight:bold;font-size:0.95em">' + ((s as any).rt_toggle ?? 0) + ((s as any).rt_lnk ?? 0) + '</div>');
          if (((s as any).rt_open ?? 0)  &&  ((s as any).rt_kids ?? 0) !== '') {
            (s as any).rt_remaining = ((s as any).rt_kids ?? 0);
            while (true) {
              if (((s as any).rt_remaining ?? 0) !== '') {
                (s as any).rt_sp = ((String(((s as any).rt_remaining ?? 0)).indexOf(String(' '))) + 1);
                if (((s as any).rt_sp ?? 0) > 0) {
                  (s as any).rt_ck = (String(((s as any).rt_remaining ?? 0)).slice((1)-1, ((1)-1)+(((s as any).rt_sp ?? 0) - 1)));
                  (s as any).rt_remaining = (String(((s as any).rt_remaining ?? 0)).slice((((s as any).rt_sp ?? 0) + 1)-1));
                } else {
                  (s as any).rt_ck = ((s as any).rt_remaining ?? 0);
                  (s as any).rt_remaining = '';
                }
                if (((s as any).help_toc_is_group ?? 0)?.[String((s as any).rt_ck ?? 0)]) {
                  (s as any).rt_cg_open = (((s as any).help_toc_open ?? 0)?.[String((s as any).rt_ck ?? 0)] ?? 0);
                  (s as any).rt_cg_tri = ((((s as any).rt_cg_open ?? 0)) ? ('&#9660;') : ('&#9654;'));
                  (s as any).rt_cg_toggle = '<a href="#" onclick="window.__gameStore.setState((s) => { (s.help_toc_open ??= {})String((s as any).rt_ck ?? \u0027\u0027) = 1 - help_toc_open[\u0027' + ((s as any).rt_ck ?? 0) + '\u0027]; return s; }); window.__gameStore.getState().doGoto(String((s as any).help_page_loc ?? \u0027\u0027), String((s as any).help_page_key ?? \u0027\u0027)); return false;">' + ((s as any).rt_cg_tri ?? 0) + '</a> ';
                  (s as any).rt_cg_lnk = '<a href="#" onclick="window.__gameStore.setState((s) => { (s.help_toc_open ??= {})String((s as any).rt_ck ?? \u0027\u0027) = 1 - help_toc_open[\u0027' + ((s as any).rt_ck ?? 0) + '\u0027]; return s; }); window.__gameStore.getState().doGoto(String((s as any).help_page_loc ?? \u0027\u0027), String((s as any).help_page_key ?? \u0027\u0027)); return false;">' + (((s as any).help_toc_label ?? 0)?.[String((s as any).rt_ck ?? 0)] ?? 0) + '</a>';
                  (s as any).rt_html = ((s as any).rt_html ?? 0) + ('<div style="margin:3px 0 1px 0;padding-left:14px;font-style:italic;font-size:0.88em;opacity:0.75">' + ((s as any).rt_cg_toggle ?? 0) + ((s as any).rt_cg_lnk ?? 0) + '</div>');
                  if (((s as any).rt_cg_open ?? 0)  &&  ((s as any).help_toc_children ?? 0)?.[String((s as any).rt_ck ?? 0)] !== '') {
                    (s as any).rt_gc_rem = (((s as any).help_toc_children ?? 0)?.[String((s as any).rt_ck ?? 0)] ?? 0);
                    while (true) {
                      if (((s as any).rt_gc_rem ?? 0) !== '') {
                        (s as any).rt_gc_sp = ((String(((s as any).rt_gc_rem ?? 0)).indexOf(String(' '))) + 1);
                        if (((s as any).rt_gc_sp ?? 0) > 0) {
                          (s as any).rt_gc_k = (String(((s as any).rt_gc_rem ?? 0)).slice((1)-1, ((1)-1)+(((s as any).rt_gc_sp ?? 0) - 1)));
                          (s as any).rt_gc_rem = (String(((s as any).rt_gc_rem ?? 0)).slice((((s as any).rt_gc_sp ?? 0) + 1)-1));
                        } else {
                          (s as any).rt_gc_k = ((s as any).rt_gc_rem ?? 0);
                          (s as any).rt_gc_rem = '';
                        }
                        (s as any).rt_gc_l = (((s as any).help_toc_label ?? 0)?.[String((s as any).rt_gc_k ?? 0)] ?? 0);
                        (s as any).rt_gc_p = (((s as any).help_toc_page ?? 0)?.[String((s as any).rt_gc_k ?? 0)] ?? 0);
                        (s as any).rt_gc_loc = (((s as any).help_toc_loc ?? 0)?.[String((s as any).rt_gc_k ?? 0)] ?? 0);
                        if (((s as any).rt_gc_p ?? 0) === ((s as any).help_page_key ?? 0)) {
                          (s as any).rt_gc_act = ' style="font-weight:bold;border-left:3px solid;padding-left:3px;margin-left:-6px;display:inline-block"';
                        } else {
                          (s as any).rt_gc_act = '';
                        }
                        (s as any).rt_html = ((s as any).rt_html ?? 0) + ('<div style="margin:1px 0;padding-left:28px;font-size:0.88em"><a href="#" onclick="window.__gameStore.getState().doGoto(String((s as any).rt_gc_loc ?? \u0027\u0027), String((s as any).rt_gc_p ?? \u0027\u0027)); return false;">' + ((s as any).rt_gc_l ?? 0) + '</a></div>');
                        break;
                      }
                    }
                  }
                } else {
                  (s as any).rt_cl = (((s as any).help_toc_label ?? 0)?.[String((s as any).rt_ck ?? 0)] ?? 0);
                  (s as any).rt_cp = (((s as any).help_toc_page ?? 0)?.[String((s as any).rt_ck ?? 0)] ?? 0);
                  (s as any).rt_cloc = (((s as any).help_toc_loc ?? 0)?.[String((s as any).rt_ck ?? 0)] ?? 0);
                  if (((s as any).rt_cp ?? 0) === ((s as any).help_page_key ?? 0)) {
                    (s as any).rt_cactive = ' style="font-weight:bold;border-left:3px solid;padding-left:4px;margin-left:-7px;display:inline-block"';
                  } else {
                    (s as any).rt_cactive = '';
                  }
                  (s as any).rt_html = ((s as any).rt_html ?? 0) + ('<div style="margin:2px 0;padding-left:14px"><a href="#" onclick="window.__gameStore.getState().doGoto(String((s as any).rt_cloc ?? \u0027\u0027), String((s as any).rt_cp ?? \u0027\u0027)); return false;">' + ((s as any).rt_cl ?? 0) + '</a></div>');
                }
                break;
              }
            }
          }
          (s as any).rt_i = ((s as any).rt_i ?? 0) + (1);
          break;
        }
      }
    }
    (s as any).result = ((s as any).rt_html ?? 0);
  }
  scene.build();
}

function enterRender(s: GameState, scene: SceneBuilder): void {
  (s as any).help_page_key = ((s as any).locArgs?.[1] ?? 0);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTocInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).help_page_loc = ((((s as any).help_toc_loc ?? 0)?.[String((s as any).help_page_key ?? 0)] !== '') ? ((((s as any).help_toc_loc ?? 0)?.[String((s as any).help_page_key ?? 0)] ?? 0)) : ('help'));
  if (((s as any).help_page_title ?? 0) === ''  &&  ((s as any).help_toc_label ?? 0)?.[String((s as any).help_page_key ?? 0)] !== '') {
    (s as any).help_page_title = (((s as any).help_toc_label ?? 0)?.[String((s as any).help_page_key ?? 0)] ?? 0);
  }
  (s as any).help_layout = '<table width="100%" cellspacing="0" cellpadding="0"><tr>';
  (s as any).help_layout = ((s as any).help_layout ?? 0) + ('<td width="20%" valign="top" style="border-right:1px solid;padding:8px 12px 8px 0">');
  (s as any).help_layout = ((s as any).help_layout ?? 0) + (qspFunc(s, 'help', 'render_toc'));
  (s as any).help_layout = ((s as any).help_layout ?? 0) + ('</td>');
  (s as any).help_layout = ((s as any).help_layout ?? 0) + ('<td valign="top" style="padding:0 0 8px 16px">');
  (s as any).help_layout = ((s as any).help_layout ?? 0) + (qspFunc(s, 'help', 'render_banner'));
  (s as any).help_layout = ((s as any).help_layout ?? 0) + (((s as any).help_page_content ?? 0));
  (s as any).help_layout = ((s as any).help_layout ?? 0) + ('</td>');
  (s as any).help_layout = ((s as any).help_layout ?? 0) + ('</tr></table>');
  scene.text(String((s as any).help_layout ?? ''));
  scene.actions([
    { label: 'Back', handler: (st: GameState) => {
    qspCall(st, 'help', '');
  } },
  ]);
  scene.build();
}

function enterGeneric(s: GameState, scene: SceneBuilder): void {
  (s as any).help_page_title = 'Help & Glossary';
  (s as any).help_gen_cs = 'border:1px solid;border-radius:4px;padding:10px 14px;vertical-align:top;width:50%';
  (s as any).help_page_content = '<p style="font-size:0.9em;margin-bottom:12px">Select a topic below or use the Contents panel on the left.</p>';
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('<table width="100%" cellspacing="6" cellpadding="0"><tr>');
  (s as any).help_gen_c = '<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027help\u0027, \u0027ui_overview\u0027); return false;">User Interface</a><br>';
  (s as any).help_gen_c = ((s as any).help_gen_c ?? 0) + ('<small>');
  (s as any).help_gen_c = ((s as any).help_gen_c ?? 0) + ('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027help\u0027, \u0027ui_statbar\u0027); return false;">Stat Bar</a><br>');
  (s as any).help_gen_c = ((s as any).help_gen_c ?? 0) + ('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027help\u0027, \u0027ui_menu\u0027); return false;">Navigation Menu</a><br>');
  (s as any).help_gen_c = ((s as any).help_gen_c ?? 0) + ('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027help\u0027, \u0027ui_actions\u0027); return false;">Action Buttons</a>');
  (s as any).help_gen_c = ((s as any).help_gen_c ?? 0) + ('</small>');
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('<td style="' + ((s as any).help_gen_cs ?? 0) + '">' + ((s as any).help_gen_c ?? 0) + '</td>');
  (s as any).help_gen_c = '<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027help\u0027, \u0027mech_overview\u0027); return false;">Game Mechanics</a><br>';
  (s as any).help_gen_c = ((s as any).help_gen_c ?? 0) + ('<small>');
  (s as any).help_gen_c = ((s as any).help_gen_c ?? 0) + ('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027help\u0027, \u0027mech_time\u0027); return false;">Time &amp; Schedule</a><br>');
  (s as any).help_gen_c = ((s as any).help_gen_c ?? 0) + ('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027help\u0027, \u0027mech_stats\u0027); return false;">Stats &amp; Attributes</a><br>');
  (s as any).help_gen_c = ((s as any).help_gen_c ?? 0) + ('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027help\u0027, \u0027mech_money\u0027); return false;">Money &amp; Finances</a>');
  (s as any).help_gen_c = ((s as any).help_gen_c ?? 0) + ('</small>');
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('<td style="' + ((s as any).help_gen_cs ?? 0) + '">' + ((s as any).help_gen_c ?? 0) + '</td>');
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('</tr><tr>');
  (s as any).help_gen_c = '<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027help\u0027, \u0027chars_overview\u0027); return false;">Characters</a><br>';
  (s as any).help_gen_c = ((s as any).help_gen_c ?? 0) + ('<small>');
  (s as any).help_gen_c = ((s as any).help_gen_c ?? 0) + ('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027help_characters\u0027, \u0027chars_pc\u0027); return false;">Your Character</a><br>');
  (s as any).help_gen_c = ((s as any).help_gen_c ?? 0) + ('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027help\u0027, \u0027chars_overview\u0027); return false;">Family &amp; School</a>');
  (s as any).help_gen_c = ((s as any).help_gen_c ?? 0) + ('</small>');
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('<td style="' + ((s as any).help_gen_cs ?? 0) + '">' + ((s as any).help_gen_c ?? 0) + '</td>');
  (s as any).help_gen_c = '<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027help\u0027, \u0027locs_overview\u0027); return false;">Locations</a><br>';
  (s as any).help_gen_c = ((s as any).help_gen_c ?? 0) + ('<small>');
  (s as any).help_gen_c = ((s as any).help_gen_c ?? 0) + ('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027help\u0027, \u0027locs_home\u0027); return false;">Home</a><br>');
  (s as any).help_gen_c = ((s as any).help_gen_c ?? 0) + ('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027help\u0027, \u0027locs_school\u0027); return false;">School</a><br>');
  (s as any).help_gen_c = ((s as any).help_gen_c ?? 0) + ('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027help\u0027, \u0027locs_town\u0027); return false;">Town</a>');
  (s as any).help_gen_c = ((s as any).help_gen_c ?? 0) + ('</small>');
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('<td style="' + ((s as any).help_gen_cs ?? 0) + '">' + ((s as any).help_gen_c ?? 0) + '</td>');
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('</tr></table>');
  (s as any).help_gen_c = undefined;
  (s as any).help_gen_cs = undefined;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[0] ?? 0)]; enterRender(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterUiOverview(s: GameState, scene: SceneBuilder): void {
  (s as any).help_page_title = 'User Interface';
  (s as any).help_page_content = '<b>User Interface</b><br><br>';
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('The game screen is divided into two main areas: the <b>main window</b> on the left ');
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('shows the current scene and your action choices, while the <b>stat panel</b> on the ');
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('right shows your character information and navigation icons.<br><br>');
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('Select a subtopic on the left for more detail.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[0] ?? 0)]; enterRender(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterUiStatbar(s: GameState, scene: SceneBuilder): void {
  (s as any).help_page_title = 'Stat Bar';
  (s as any).help_page_content = '<b>Stat Bar</b><br><br>';
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('The stat panel on the right side of the screen displays your key stats at a glance: ');
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('money, energy, mood, and appearance among others.<br><br>');
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('<i>(Placeholder — fill in with real stat descriptions.)</i>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[0] ?? 0)]; enterRender(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterUiMenu(s: GameState, scene: SceneBuilder): void {
  (s as any).help_page_title = 'Navigation Menu';
  (s as any).help_page_content = '<b>Navigation Menu</b><br><br>';
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('The row of icons at the bottom of the stat panel lets you jump to key screens: ');
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('your inventory, phone, map, calendar, and this help system.<br><br>');
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('<i>(Placeholder — fill in with icon-by-icon descriptions.)</i>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[0] ?? 0)]; enterRender(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterUiActions(s: GameState, scene: SceneBuilder): void {
  (s as any).help_page_title = 'Action Buttons';
  (s as any).help_page_content = '<b>Action Buttons</b><br><br>';
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('The list of clickable links in the main window represents the actions available ');
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('to you in the current scene. Actions can move you to a new location, trigger ');
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('events, or change your stats.<br><br>');
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('<i>(Placeholder — fill in with further detail.)</i>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[0] ?? 0)]; enterRender(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterMechOverview(s: GameState, scene: SceneBuilder): void {
  (s as any).help_page_title = 'Game Mechanics';
  (s as any).help_page_content = '<b>Game Mechanics</b><br><br>';
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('Girl Life simulates day-to-day life. Time passes as you take actions; ');
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('your stats rise and fall based on your choices, and money must be managed ');
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('to cover living expenses.<br><br>');
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('Select a subtopic on the left for more detail.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[0] ?? 0)]; enterRender(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterMechTime(s: GameState, scene: SceneBuilder): void {
  (s as any).help_page_title = 'Time & Schedule';
  (s as any).help_page_content = '<b>Time & Schedule</b><br><br>';
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('The game runs on a clock divided into periods (morning, afternoon, evening, night). ');
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('Most actions consume one or more time periods. The week follows a school/work ');
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('schedule, and certain events only occur on specific days.<br><br>');
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('<i>(Placeholder — fill in with real time system details.)</i>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[0] ?? 0)]; enterRender(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterMechStats(s: GameState, scene: SceneBuilder): void {
  (s as any).help_page_title = 'Stats & Attributes';
  (s as any).help_page_content = '<b>Stats & Attributes</b><br><br>';
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('Your character has a range of numeric stats — beauty, fitness, intelligence, ');
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('confidence, and more. Stats have upper and lower bounds and change through ');
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('activities, sleep, eating, and events.<br><br>');
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('<i>(Placeholder — fill in with stat list and ranges.)</i>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[0] ?? 0)]; enterRender(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterMechMoney(s: GameState, scene: SceneBuilder): void {
  (s as any).help_page_title = 'Money & Finances';
  (s as any).help_page_content = '<b>Money & Finances</b><br><br>';
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('Money is spent on food, clothing, rent, and social activities. ');
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('Income comes from jobs, allowances, and other sources depending on ');
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('your current living situation.<br><br>');
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('<i>(Placeholder — fill in with income/expense breakdown.)</i>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[0] ?? 0)]; enterRender(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterCharsOverview(s: GameState, scene: SceneBuilder): void {
  (s as any).help_page_title = 'Characters';
  (s as any).help_page_content = '<b>Characters</b><br><br>';
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('The game world is populated by recurring NPCs who each have their own ');
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('relationship score with your character. How they treat you depends on ');
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('that score and your stats.<br><br>');
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('Select a subtopic on the left for more detail.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[0] ?? 0)]; enterRender(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterCharsFamily(s: GameState, scene: SceneBuilder): void {
  (s as any).help_page_title = 'Family';
  (s as any).help_page_content = '<b>Family</b><br><br>';
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('Your family members affect your starting home situation, available allowance, ');
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('and certain story paths. Relationships with them can be improved or damaged ');
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('over time.<br><br>');
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('<i>(Placeholder — fill in with family member profiles.)</i>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[0] ?? 0)]; enterRender(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterCharsNpc(s: GameState, scene: SceneBuilder): void {
  (s as any).help_page_title = 'Other People';
  (s as any).help_page_content = '<b>Other People</b><br><br>';
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('Classmates, teachers, shopkeepers, and others populate the game world. ');
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('Building relationships with them unlocks new events and options.<br><br>');
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('<i>(Placeholder — fill in with NPC roster.)</i>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[0] ?? 0)]; enterRender(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterLocsOverview(s: GameState, scene: SceneBuilder): void {
  (s as any).help_page_title = 'Locations';
  (s as any).help_page_content = '<b>Locations</b><br><br>';
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('The game world contains many distinct locations, each with their own ');
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('available actions and time costs to reach. You can travel between them ');
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('using the map or direct action links.<br><br>');
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('Select a subtopic on the left for more detail.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[0] ?? 0)]; enterRender(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterLocsHome(s: GameState, scene: SceneBuilder): void {
  (s as any).help_page_title = 'Home';
  (s as any).help_page_content = '<b>Home</b><br><br>';
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('Home is your base of operations. Here you can sleep, eat, change clothes, ');
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('study, and spend time with family members who live with you.<br><br>');
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('<i>(Placeholder — fill in with room-by-room breakdown.)</i>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[0] ?? 0)]; enterRender(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterLocsSchool(s: GameState, scene: SceneBuilder): void {
  (s as any).help_page_title = 'School';
  (s as any).help_page_content = '<b>School</b><br><br>';
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('School runs on weekdays. Attending classes raises your grades and intelligence. ');
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('Between lessons you can socialise, join clubs, or sneak off campus.<br><br>');
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('<i>(Placeholder — fill in with school map and schedule.)</i>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[0] ?? 0)]; enterRender(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterLocsTown(s: GameState, scene: SceneBuilder): void {
  (s as any).help_page_title = 'Town';
  (s as any).help_page_content = '<b>Town</b><br><br>';
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('The town centre has shops, a park, cafes, and various venues to visit. ');
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('Most town locations are accessible in the afternoon and evening.<br><br>');
  (s as any).help_page_content = ((s as any).help_page_content ?? 0) + ('<i>(Placeholder — fill in with venue list and opening hours.)</i>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[0] ?? 0)]; enterRender(s, scene); (s as any).locArgs = __savedLocArgs; }
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
