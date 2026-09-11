import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_hairbsh = 1;
  // TODO-QSP: view $func('$face_image')
  // TODO-QSP: *p '<center>'
  // TODO-QSP: *p  '<table width="70%" cellspacing="10" bgcolor="<<$theme_hex[''table_bg'']>>" style="border:4px so...
  // TODO-QSP: *p    '<colgroup>'
  // TODO-QSP: *p      '<col width="8%">'
  // TODO-QSP: *p      '<col width="8%">'
  // TODO-QSP: *p      '<col width="8%">'
  // TODO-QSP: *p      '<col width="8%">'
  // TODO-QSP: *p      '<col width="8%">'
  // TODO-QSP: *p      '<col width="8%">'
  // TODO-QSP: *p      '<col width="8%">'
  // TODO-QSP: *p      '<col width="8%">'
  // TODO-QSP: *p      '<col width="8%">'
  // TODO-QSP: *p      '<col width="8%">'
  // TODO-QSP: *p      '<col width="8%">'
  // TODO-QSP: *p      '<col width="8%">'
  // TODO-QSP: *p    '</colgroup>'
  // TODO-QSP: *p    '<tr>'
  // TODO-QSP: *p      $temp_cell_td_1
  // TODO-QSP: *p        '<big><b>Character Overview</b></big><br><small>Changing Game Type or Setting may result i...
  // TODO-QSP: *p      $temp_cell_td_1_end
  // TODO-QSP: *p    '</tr>'
  // TODO-QSP: *p    '<tr style="height:0; font-size:0; line-height:0; visibility:hidden;">'
  // TODO-QSP: *p      '<td style="padding:0; border:0; height:0;"></td>'
  // TODO-QSP: *p      '<td style="padding:0; border:0; height:0;"></td>'
  // TODO-QSP: *p      '<td style="padding:0; border:0; height:0;"></td>'
  // TODO-QSP: *p      '<td style="padding:0; border:0; height:0;"></td>'
  // TODO-QSP: *p      '<td style="padding:0; border:0; height:0;"></td>'
  // TODO-QSP: *p      '<td style="padding:0; border:0; height:0;"></td>'
  // TODO-QSP: *p      '<td style="padding:0; border:0; height:0;"></td>'
  // TODO-QSP: *p      '<td style="padding:0; border:0; height:0;"></td>'
  // TODO-QSP: *p      '<td style="padding:0; border:0; height:0;"></td>'
  // TODO-QSP: *p      '<td style="padding:0; border:0; height:0;"></td>'
  // TODO-QSP: *p      '<td style="padding:0; border:0; height:0;"></td>'
  // TODO-QSP: *p      '<td style="padding:0; border:0; height:0;"></td>'
  // TODO-QSP: *p    '</tr>'
  // TODO-QSP: *p    '<tr>'
  // TODO-QSP: *p      $temp_cell_td_3
  // TODO-QSP: *p        $func('intro_overview', 'get_firstname_setter')
  // TODO-QSP: *p      $temp_cell_td_3_end
  // TODO-QSP: *p      $temp_cell_td_3
  // TODO-QSP: *p        $func('intro_overview', 'get_lastname_setter')
  // TODO-QSP: *p      $temp_cell_td_3_end
  // TODO-QSP: *p      $temp_cell_td_3
  // TODO-QSP: *p        $func('intro_overview', 'get_nickname_setter')
  // TODO-QSP: *p      $temp_cell_td_3_end
  // TODO-QSP: *p    '</tr>'
  // TODO-QSP: *p    '<tr>'
  // TODO-QSP: *p      $temp_cell_td_3
  // TODO-QSP: *p        $func('intro_overview', 'get_start_type_magic_setter')
  // TODO-QSP: *p      $temp_cell_td_3_end
  // TODO-QSP: *p      $temp_cell_td_3
  // TODO-QSP: *p        $func('intro_overview', 'get_start_type_loc_setter')
  // TODO-QSP: *p      $temp_cell_td_3_end
  // TODO-QSP: *p      $temp_cell_td_3
  // TODO-QSP: *p        $func('intro_overview', 'get_start_location_setter')
  // TODO-QSP: *p      $temp_cell_td_3_end
  // TODO-QSP: *p    '</tr>'
  // TODO-QSP: *p    '<tr>'
  // TODO-QSP: *p      $temp_cell_td_3
  // TODO-QSP: *p        $func('intro_overview', 'get_start_type_group_setter')
  // TODO-QSP: *p      $temp_cell_td_3_end
  // TODO-QSP: *p      $temp_cell_td_3
  // TODO-QSP: *p        $func('intro_overview', 'get_start_type_cat_setter')
  // TODO-QSP: *p      $temp_cell_td_3_end
  // TODO-QSP: *p      $temp_cell_td_3
  // TODO-QSP: *p        $func('intro_overview', 'get_start_time_setter')
  // TODO-QSP: *p      $temp_cell_td_3_end
  // TODO-QSP: *p    '</tr>'
  // TODO-QSP: *p    '<tr>'
  // TODO-QSP: *p      $temp_cell_td_3
  // TODO-QSP: *p        $func('intro_overview', 'get_birthday_setter')
  // TODO-QSP: *p      $temp_cell_td_3_end
  // TODO-QSP: *p      $temp_cell_td_3
  // TODO-QSP: *p        $func('intro_overview', 'get_birthmonth_setter')
  // TODO-QSP: *p      $temp_cell_td_3_end
  // TODO-QSP: *p      $temp_cell_td_3
  // TODO-QSP: *p        $func('intro_overview', 'get_birthyear_setter')
  // TODO-QSP: *p      $temp_cell_td_3_end
  // TODO-QSP: *p    '</tr>'
  // TODO-QSP: *p    '<tr>'
  // TODO-QSP: *p      $temp_cell_td_3
  // TODO-QSP: *p        $func('intro_overview', 'get_haircolor_setter')
  // TODO-QSP: *p      $temp_cell_td_3_end
  // TODO-QSP: *p      $temp_cell_td_3
  // TODO-QSP: *p        $func('intro_overview', 'get_hairlength_setter')
  // TODO-QSP: *p      $temp_cell_td_3_end
  // TODO-QSP: *p      $temp_cell_td_3
  // TODO-QSP: *p        $func('intro_overview', 'get_hairtype_setter')
  // TODO-QSP: *p      $temp_cell_td_3_end
  // TODO-QSP: *p    '</tr>'
  // TODO-QSP: *p    '<tr>'
  // TODO-QSP: *p      $temp_cell_td_3
  // TODO-QSP: *p        $func('intro_overview', 'get_eyecolor_setter')
  // TODO-QSP: *p      $temp_cell_td_3_end
  // TODO-QSP: *p      $temp_cell_td_3
  // TODO-QSP: *p        $func('intro_overview', 'get_height_setter')
  // TODO-QSP: *p      $temp_cell_td_3_end
  // TODO-QSP: *p      $temp_cell_td_3
  // TODO-QSP: *p        $func('intro_overview', 'get_portrait_setter')
  // TODO-QSP: *p      $temp_cell_td_3_end
  // TODO-QSP: *p    '</tr>'
  // TODO-QSP: *p  '</table>'
  // TODO-QSP: *p '</center>'
  // TODO-QSP: *p '<center>'
  // TODO-QSP: *p  '<table width="70%" cellspacing="10" bgcolor="<<$theme_hex[''table_bg'']>>" style="border:4px so...
  // TODO-QSP: *p    '<colgroup>'
  // TODO-QSP: *p      '<col width="8%">'
  // TODO-QSP: *p      '<col width="8%">'
  // TODO-QSP: *p      '<col width="8%">'
  // TODO-QSP: *p      '<col width="8%">'
  // TODO-QSP: *p      '<col width="8%">'
  // TODO-QSP: *p      '<col width="8%">'
  // TODO-QSP: *p      '<col width="8%">'
  // TODO-QSP: *p      '<col width="8%">'
  // TODO-QSP: *p      '<col width="8%">'
  // TODO-QSP: *p      '<col width="8%">'
  // TODO-QSP: *p      '<col width="8%">'
  // TODO-QSP: *p      '<col width="8%">'
  // TODO-QSP: *p    '</colgroup>'
  // TODO-QSP: *p    '<tr>'
  // TODO-QSP: *p      $temp_cell_td_1
  // TODO-QSP: *p        $func('intro_overview', 'render_cell', 'Advanced Options', '<small>These options may affec...
  // TODO-QSP: *p      $temp_cell_td_1_end
  // TODO-QSP: *p    '</tr>'
  // TODO-QSP: *p    '<tr style="height:0; font-size:0; line-height:0; visibility:hidden;">'
  // TODO-QSP: *p      '<td style="padding:0; border:0; height:0;"></td>'
  // TODO-QSP: *p      '<td style="padding:0; border:0; height:0;"></td>'
  // TODO-QSP: *p      '<td style="padding:0; border:0; height:0;"></td>'
  // TODO-QSP: *p      '<td style="padding:0; border:0; height:0;"></td>'
  // TODO-QSP: *p      '<td style="padding:0; border:0; height:0;"></td>'
  // TODO-QSP: *p      '<td style="padding:0; border:0; height:0;"></td>'
  // TODO-QSP: *p      '<td style="padding:0; border:0; height:0;"></td>'
  // TODO-QSP: *p      '<td style="padding:0; border:0; height:0;"></td>'
  // TODO-QSP: *p      '<td style="padding:0; border:0; height:0;"></td>'
  // TODO-QSP: *p      '<td style="padding:0; border:0; height:0;"></td>'
  // TODO-QSP: *p      '<td style="padding:0; border:0; height:0;"></td>'
  // TODO-QSP: *p      '<td style="padding:0; border:0; height:0;"></td>'
  // TODO-QSP: *p    '</tr>'
  // TODO-QSP: *p    '<tr>'
  // TODO-QSP: *p      $temp_cell_td_1
  // TODO-QSP: *p        $func('intro_overview', 'render_cell', 'Body', iif(overview_show_body_options = 1, 'Visibl...
  // TODO-QSP: *p      $temp_cell_td_1_end
  // TODO-QSP: *p    '</tr>'
  if (((s as any).overview_show_body_options ?? 0) === 1) {
    // TODO-QSP: *p  '<tr>'
    // TODO-QSP: *p    $temp_cell_td_3
    // TODO-QSP: *p      $func('intro_overview', 'get_eyesight_setter')
    // TODO-QSP: *p    $temp_cell_td_3_end
    // TODO-QSP: *p    $temp_cell_td_3
    // TODO-QSP: *p      $func('intro_overview', 'get_eyesize_setter')
    // TODO-QSP: *p    $temp_cell_td_3_end
    // TODO-QSP: *p    $temp_cell_td_3
    // TODO-QSP: *p      $func('intro_overview', 'get_eyelashes_setter')
    // TODO-QSP: *p    $temp_cell_td_3_end
    // TODO-QSP: *p  '</tr>'
    // TODO-QSP: *p  '<tr>'
    // TODO-QSP: *p    $temp_cell_td_3
    // TODO-QSP: *p      $func('intro_overview', 'get_bodyweight_setter')
    // TODO-QSP: *p    $temp_cell_td_3_end
    // TODO-QSP: *p    $temp_cell_td_3
    // TODO-QSP: *p      $func('intro_overview', 'get_bust_setter')
    // TODO-QSP: *p    $temp_cell_td_3_end
    // TODO-QSP: *p    $temp_cell_td_3
    // TODO-QSP: *p      $func('intro_overview', 'get_butt_setter')
    // TODO-QSP: *p    $temp_cell_td_3_end
    // TODO-QSP: *p  '</tr>'
    // TODO-QSP: *p  '<tr>'
    // TODO-QSP: *p    $temp_cell_td_3
    // TODO-QSP: *p      $func('intro_overview', 'get_est_bmi')
    // TODO-QSP: *p    $temp_cell_td_3_end
    // TODO-QSP: *p    $temp_cell_td_3
    // TODO-QSP: *p      $func('intro_overview', 'get_lipsize_setter')
    // TODO-QSP: *p    $temp_cell_td_3_end
    // TODO-QSP: *p    $temp_cell_td_3
    // TODO-QSP: *p      $func('intro_overview', 'get_teeth_setter')
    // TODO-QSP: *p    $temp_cell_td_3_end
    // TODO-QSP: *p  '</tr>'
  }
  // TODO-QSP: *p    '<tr>'
  // TODO-QSP: *p      $temp_cell_td_1
  // TODO-QSP: *p        $func('intro_overview', 'render_cell', 'Archetypes', iif(overview_show_archetype_options =...
  // TODO-QSP: *p      $temp_cell_td_1_end
  // TODO-QSP: *p    '</tr>'
  if (((s as any).overview_show_archetype_options ?? 0) === 1) {
    // TODO-QSP: *p  '<tr>'
    // TODO-QSP: *p    $temp_cell_td_3
    // TODO-QSP: *p      $func('intro_overview', 'get_archetypes', 'bimbo')
    // TODO-QSP: *p    $temp_cell_td_3_end
    // TODO-QSP: *p    $temp_cell_td_3
    // TODO-QSP: *p      $func('intro_overview', 'get_archetypes', 'preppy')
    // TODO-QSP: *p    $temp_cell_td_3_end
    // TODO-QSP: *p    $temp_cell_td_3
    // TODO-QSP: *p      $func('intro_overview', 'get_archetypes', 'prude')
    // TODO-QSP: *p    $temp_cell_td_3_end
    // TODO-QSP: *p  '</tr>'
    // TODO-QSP: *p  '<tr>'
    // TODO-QSP: *p    $temp_cell_td_3
    // TODO-QSP: *p      $func('intro_overview', 'get_archetypes', 'punk')
    // TODO-QSP: *p    $temp_cell_td_3_end
    // TODO-QSP: *p    $temp_cell_td_3
    // TODO-QSP: *p      $func('intro_overview', 'get_archetypes', 'goth')
    // TODO-QSP: *p    $temp_cell_td_3_end
    // TODO-QSP: *p  '</tr>'
  }
  // TODO-QSP: *p    '<tr>'
  // TODO-QSP: *p      $temp_cell_td_1
  // TODO-QSP: *p        $func('intro_overview', 'render_cell', 'Traits', iif(overview_show_trait_options = 1, 'Vis...
  // TODO-QSP: *p      $temp_cell_td_1_end
  // TODO-QSP: *p    '</tr>'
  if (((s as any).overview_show_trait_options ?? 0) === 1) {
    // TODO-QSP: *p  '<tr>'
    // TODO-QSP: *p    $temp_cell_td_3
    // TODO-QSP: *p      $func('intro_overview', 'get_trait', 'academic')
    // TODO-QSP: *p    $temp_cell_td_3_end
    // TODO-QSP: *p    $temp_cell_td_3
    // TODO-QSP: *p      $func('intro_overview', 'get_trait', 'fertility')
    // TODO-QSP: *p    $temp_cell_td_3_end
    // TODO-QSP: *p    $temp_cell_td_3
    // TODO-QSP: *p      $func('intro_overview', 'get_trait', 'drinking')
    // TODO-QSP: *p    $temp_cell_td_3_end
    // TODO-QSP: *p  '</tr>'
    // TODO-QSP: *p  '<tr>'
    // TODO-QSP: *p    $temp_cell_td_3
    // TODO-QSP: *p      $func('intro_overview', 'get_trait', 'sleep_duration')
    // TODO-QSP: *p    $temp_cell_td_3_end
    // TODO-QSP: *p    $temp_cell_td_3
    // TODO-QSP: *p      $func('intro_overview', 'get_trait', 'elasticity')
    // TODO-QSP: *p    $temp_cell_td_3_end
    // TODO-QSP: *p    $temp_cell_td_3
    // TODO-QSP: *p      $func('intro_overview', 'get_trait', 'body_hair_growth_rate')
    // TODO-QSP: *p    $temp_cell_td_3_end
    // TODO-QSP: *p  '</tr>'
    // TODO-QSP: *p  '<tr>'
    // TODO-QSP: *p    $temp_cell_td_3
    // TODO-QSP: *p      $func('intro_overview', 'get_trait', 'hair_growth_rate')
    // TODO-QSP: *p    $temp_cell_td_3_end
    // TODO-QSP: *p  '</tr>'
  }
  // TODO-QSP: *p    '<tr>'
  // TODO-QSP: *p      $temp_cell_td_1
  // TODO-QSP: *p        $func('intro_overview', 'render_cell', 'Documents', iif(overview_show_document_options = 1...
  // TODO-QSP: *p      $temp_cell_td_1_end
  // TODO-QSP: *p    '</tr>'
  if (((s as any).overview_show_document_options ?? 0) === 1) {
    // TODO-QSP: *p  '<tr>'
    // TODO-QSP: *p    $temp_cell_td_3
    // TODO-QSP: *P      $func('intro_overview', 'get_passport_setter')
    // TODO-QSP: *p    $temp_cell_td_3_end
    // TODO-QSP: *p    $temp_cell_td_3
    // TODO-QSP: *p      $func('intro_overview', 'get_secretary_licence_setter')
    // TODO-QSP: *p    $temp_cell_td_3_end
    // TODO-QSP: *p    $temp_cell_td_3
    // TODO-QSP: *p      $func('intro_overview', 'get_masseuse_licence_setter')
    // TODO-QSP: *p    $temp_cell_td_3_end
    // TODO-QSP: *p  '</tr>'
  }
  // TODO-QSP: *p    '<tr>'
  // TODO-QSP: *p      $temp_cell_td_1
  // TODO-QSP: *p        $func('intro_overview', 'render_cell', 'Items', iif(overview_show_item_options = 1, 'Visib...
  // TODO-QSP: *p      $temp_cell_td_1_end
  // TODO-QSP: *p    '</tr>'
  if (((s as any).overview_show_item_options ?? 0) === 1) {
    // TODO-QSP: *p  '<tr>'
    // TODO-QSP: *p    $temp_cell_td_3
    // TODO-QSP: *p      $func('intro_overview', 'get_umbrella_setter')
    // TODO-QSP: *p    $temp_cell_td_3_end
    // TODO-QSP: *p    $temp_cell_td_3
    // TODO-QSP: *p      $func('intro_overview', 'get_comb_setter')
    // TODO-QSP: *p    $temp_cell_td_3_end
    // TODO-QSP: *p    $temp_cell_td_3
    // TODO-QSP: *p      $func('intro_overview', 'get_mirror_setter')
    // TODO-QSP: *p    $temp_cell_td_3_end
    // TODO-QSP: *p  '</tr>'
    // TODO-QSP: *p  '<tr>'
    // TODO-QSP: *p    $temp_cell_td_3
    // TODO-QSP: *p      $func('intro_overview', 'get_water_bottle_setter')
    // TODO-QSP: *p    $temp_cell_td_3_end
    // TODO-QSP: *p    $temp_cell_td_3
    // TODO-QSP: *p      $func('intro_overview', 'get_skipping_rope_setter')
    // TODO-QSP: *p    $temp_cell_td_3_end
    // TODO-QSP: *p    $temp_cell_td_3
    // TODO-QSP: *p      $func('intro_overview', 'get_hula_hoop_setter')
    // TODO-QSP: *p    $temp_cell_td_3_end
    // TODO-QSP: *p  '</tr>'
    // TODO-QSP: *p  '<tr>'
    // TODO-QSP: *p    $temp_cell_td_3
    // TODO-QSP: *p      $func('intro_overview', 'get_yoga_book_setter')
    // TODO-QSP: *p    $temp_cell_td_3_end
    // TODO-QSP: *p    $temp_cell_td_3
    // TODO-QSP: *p      $func('intro_overview', 'get_ice_skates_setter')
    // TODO-QSP: *p    $temp_cell_td_3_end
    // TODO-QSP: *p    $temp_cell_td_3
    // TODO-QSP: *p      $func('intro_overview', 'get_sewing_kit_setter')
    // TODO-QSP: *p    $temp_cell_td_3_end
    // TODO-QSP: *p  '</tr>'
    // TODO-QSP: *p  '<tr>'
    // TODO-QSP: *p    $temp_cell_td_3
    // TODO-QSP: *p      $func('intro_overview', 'get_vibrator_setter')
    // TODO-QSP: *p    $temp_cell_td_3_end
    // TODO-QSP: *p    $temp_cell_td_3
    // TODO-QSP: *p      $func('intro_overview', 'get_butt_plug_setter')
    // TODO-QSP: *p    $temp_cell_td_3_end
    // TODO-QSP: *p    $temp_cell_td_3
    // TODO-QSP: *p      $func('intro_overview', 'get_money_setter')
    // TODO-QSP: *p    $temp_cell_td_3_end
    // TODO-QSP: *p  '</tr>'
  }
  // TODO-QSP: *p  '</table>'
  // TODO-QSP: *p '</center>'
  // TODO-QSP: view $func('$face_image')
  return;
  scene.actions([
    { label: '<b>Continue</b>', goto: ['intro_overview', 'leave'] },
    { label: '<b>Skip Intro</b>', goto: ['intro_overview', 'quick_leave'] },
    { label: 'Change theme', goto: ['themes', 'menu'] },
    { label: 'Return to Start', handler: (st: GameState) => {
    scene.actions([
      { label: 'Return to Start', goto: ['start', ''] },
      { label: 'Cancel', goto: ['intro_overview', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterLeave(s: GameState, scene: SceneBuilder): void {
  (s as any).tsg = ((((s as any).start_type ?? 0)?.['loc'] === 'sg') ? (1) : (0));
  scene.actions([{ label: 'Continue', goto: ['intro_end', 'start'] }]);
  scene.build();
}

function enterQuickLeave(s: GameState, scene: SceneBuilder): void {
  (s as any).tsg = ((((s as any).start_type ?? 0)?.['loc'] === 'sg') ? (1) : (0));
  scene.actions([{ label: 'Continue', goto: ['intro_end', 'quick_start'] }]);
  scene.build();
}

function enterRenderCell(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).locArgs?.[3] ?? 0))) {
    // TODO-QSP: $result +=    '<tr>'
    // TODO-QSP: $result +=      '<td width="1%" nowrap rowspan="3" align="center" valign="middle" style="text-align:...
    // TODO-QSP: $result +=        '<a style="text-decoration: none" href="exec:<<$ARGS[4]>> & gt ''intro_overview''"...
    // TODO-QSP: $result +=          '<big>◀</big>'
    // TODO-QSP: $result +=        '</a>'
    // TODO-QSP: $result +=      '</td>'
    // TODO-QSP: $result +=      '<td width="98%" align="center" valign="middle" style="text-align: center; vertical-...
    // TODO-QSP: $result +=        '<b><<$temp_header>></b>'
    // TODO-QSP: $result +=      '</td>'
    // TODO-QSP: $result +=      '<td width="1%" nowrap rowspan="3" align="center" valign="middle" style="text-align:...
    // TODO-QSP: $result +=        '<a style="text-decoration: none" href="exec:<<$ARGS[5]>> & gt ''intro_overview''"...
    // TODO-QSP: $result +=          '<big>▶</big>'
    // TODO-QSP: $result +=        '</a>'
    // TODO-QSP: $result +=      '</td>'
    // TODO-QSP: $result +=    '</tr>'
    // TODO-QSP: $result +=    '<tr>'
    // TODO-QSP: $result +=      '<td rowspan="2" align="center" valign="middle" style="text-align: center; vertical-...
    // TODO-QSP: $result +=        $temp_value
    // TODO-QSP: $result +=      '</td>'
    // TODO-QSP: $result +=    '</tr>'
    // TODO-QSP: $result +=  '</table>'
  } else {
    if (((s as any).locArgs?.[3] ?? 0) === 1) {
      // TODO-QSP: $result +=    '<table width="100%" cellpadding="0" cellspacing="0" border="0">'
      // TODO-QSP: $result +=      '<tr>'
      // TODO-QSP: $result +=        '<td align="center" valign="middle" style="text-align: center; vertical-align:midd...
      // TODO-QSP: $result +=          '<b><<$temp_header>></b>'
      // TODO-QSP: $result +=        '</td>'
      // TODO-QSP: $result +=      '</tr>'
      // TODO-QSP: $result +=      '<tr style="height:67%">'
      // TODO-QSP: $result +=        '<td align="center" valign="middle" style="text-align: center; vertical-align:midd...
      // TODO-QSP: $result +=          $temp_value
      // TODO-QSP: $result +=        '</td>'
      // TODO-QSP: $result +=      '</tr>'
      // TODO-QSP: $result +=    '</table>'
      // TODO-QSP: $result +=  '</a>'
    } else {
      if (((s as any).locArgs?.[3] ?? 0) === 2) {
        // TODO-QSP: $result +=    '<tr>'
        // TODO-QSP: $result +=      '<td align="center" valign="middle" style="text-align: center; vertical-align:middle...
        // TODO-QSP: $result +=        '<b><<$temp_header>></b>'
        // TODO-QSP: $result +=      '</td>'
        // TODO-QSP: $result +=    '</tr>'
        // TODO-QSP: $result +=    '<tr style="height:67%">'
        // TODO-QSP: $result +=      '<td align="center" valign="middle" style="text-align: center; vertical-align:middle...
        // TODO-QSP: $result +=        $temp_value
        // TODO-QSP: $result +=      '</td>'
        // TODO-QSP: $result +=    '</tr>'
        // TODO-QSP: $result +=  '</table>'
      }
    }
  }
  return;
  scene.build();
}

function enterGetFirstnameSetter(s: GameState, scene: SceneBuilder): void {
  return;
  scene.build();
}

function enterGetNicknameSetter(s: GameState, scene: SceneBuilder): void {
  return;
  scene.build();
}

function enterGetLastnameSetter(s: GameState, scene: SceneBuilder): void {
  return;
  scene.build();
}

function enterGetBirthdaySetter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'init_monthends', ((s as any).birthyear ?? 0));
  qspCall(s, 'time', 'init_monthends', ((s as any).year ?? 0));
  return;
  scene.build();
}

function enterGetBirthmonthSetter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'init_monthnames');
  return;
  scene.build();
}

function enterGetBirthyearSetter(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_dob = (((s as any).birthyear ?? 0) * 10000) + (((s as any).birthmonth ?? 0) * 100) + ((s as any).birthday ?? 0);
  qspCall(s, 'time', 'to_date', ((s as any).daystart_start ?? 0));
  (s as any).temp_age_start = ((s as any).dateVars ?? {})?.['year'] - ((s as any).birthyear ?? 0);
  if ((((s as any).dateVars ?? 0)?.['month'] * 100) + ((s as any).dateVars ?? 0)?.['day'] < (((s as any).birthmonth ?? 0) * 100) + ((s as any).birthday ?? 0)) {
    (s as any).temp_age_start = ((s as any).temp_age_start ?? 0) - (1);
  }
  return;
  scene.build();
}

function enterGetHaircolorSetter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'body_desc', 'hair');
  return;
  scene.build();
}

function enterGetHairlengthSetter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'body_desc', 'hair');
  qspCall(s, 'intro_character_creation', 'set_hair_next_prev');
  return;
  scene.build();
}

function enterGetHairtypeSetter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'body_desc', 'hair');
  return;
  scene.build();
}

function enterGetEyecolorSetter(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).pcs_eyecol ?? 0))) {
  }
  if (((s as any).pcs_eyecol ?? 0) === 1) {
  }
  if (((s as any).pcs_eyecol ?? 0) === 2) {
  }
  if (((s as any).pcs_eyecol ?? 0) === 3) {
  }
  return;
  scene.build();
}

function enterGetEyesizeSetter(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).pcs_eyesize ?? 0))) {
  }
  if (((s as any).pcs_eyesize ?? 0) === 1) {
  }
  if (((s as any).pcs_eyesize ?? 0) === 2) {
  }
  if (((s as any).pcs_eyesize ?? 0) === 3) {
  }
  return;
  scene.build();
}

function enterGetEyelashesSetter(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).pcs_lashes ?? 0))) {
  }
  if (((s as any).pcs_lashes ?? 0) === 1) {
  }
  if (((s as any).pcs_lashes ?? 0) === 2) {
  }
  if (((s as any).pcs_lashes ?? 0) === 3) {
  }
  return;
  scene.build();
}

function enterGetEyesightSetter(s: GameState, scene: SceneBuilder): void {
  return;
  scene.build();
}

function enterGetLipsizeSetter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'body_desc', 'lips');
  return;
  scene.build();
}

function enterGetTeethSetter(s: GameState, scene: SceneBuilder): void {
  return;
  scene.build();
}

function enterGetHeightSetter(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_inches = (((s as any).pcs_hgt ?? 0) * 100 + 127) / 254;
  return;
  scene.build();
}

function enterGetPortraitSetter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).face_style ?? 0)?.['type'] === 0) {
  } else {
    if (((s as any).face_style ?? 0)?.['type'] === 1) {
    } else {
      if (((s as any).face_style ?? 0)?.['type'] === 2) {
      }
    }
  }
  return;
  scene.build();
}

function enterGetBodyweightSetter(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_est_weight_bw = (2820 + 33 * (((s as any).pcs_mass ?? {})?.['body'] + ((s as any).pcs_mass ?? {})?.['bust_gen'] + ((s as any).pcs_mass ?? {})?.['butt_gen']) + 70 * (((s as any).pcs_hgt ?? 0) - 165)) / 100;
  (s as any).temp_lbs = (((s as any).temp_est_weight_bw ?? 0) * 1000 + 453) / 454;
  return;
  scene.build();
}

function enterGetBustSetter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_mass ?? 0)?.['bust_gen'] <= 2) {
  } else {
    if (((s as any).pcs_mass ?? 0)?.['bust_gen'] <= 7) {
    } else {
      if (((s as any).pcs_mass ?? 0)?.['bust_gen'] <= 12) {
      } else {
        if (((s as any).pcs_mass ?? 0)?.['bust_gen'] <= 17) {
        } else {
          if (((s as any).pcs_mass ?? 0)?.['bust_gen'] <= 22) {
          } else {
            if (((s as any).pcs_mass ?? 0)?.['bust_gen'] <= 27) {
            } else {
              if (((s as any).pcs_mass ?? 0)?.['bust_gen'] <= 32) {
              } else {
                if (((s as any).pcs_mass ?? 0)?.['bust_gen'] <= 37) {
                } else {
                  if (((s as any).pcs_mass ?? 0)?.['bust_gen'] <= 42) {
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return;
  scene.build();
}

function enterGetButtSetter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_mass ?? 0)?.['butt_gen'] <= 2) {
  } else {
    if (((s as any).pcs_mass ?? 0)?.['butt_gen'] <= 7) {
    } else {
      if (((s as any).pcs_mass ?? 0)?.['butt_gen'] <= 12) {
      } else {
        if (((s as any).pcs_mass ?? 0)?.['butt_gen'] <= 17) {
        } else {
          if (((s as any).pcs_mass ?? 0)?.['butt_gen'] <= 22) {
          } else {
            if (((s as any).pcs_mass ?? 0)?.['butt_gen'] <= 27) {
            } else {
              if (((s as any).pcs_mass ?? 0)?.['butt_gen'] <= 32) {
              } else {
                if (((s as any).pcs_mass ?? 0)?.['butt_gen'] <= 37) {
                } else {
                  if (((s as any).pcs_mass ?? 0)?.['butt_gen'] <= 42) {
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return;
  scene.build();
}

function enterGetEstBmi(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_est_weight = (2820 + 33 * (((s as any).pcs_mass ?? {})?.['body'] + ((s as any).pcs_mass ?? {})?.['bust_gen'] + ((s as any).pcs_mass ?? {})?.['butt_gen']) + 70 * (((s as any).pcs_hgt ?? 0) - 165));
  (s as any).temp_est_bmi2 = ((s as any).temp_est_weight ?? 0) * 1000 / (((s as any).pcs_hgt ?? 0) * ((s as any).pcs_hgt ?? 0));
  if (((s as any).temp_est_bmi2 ?? 0) < 160) {
  } else {
    if (((s as any).temp_est_bmi2 ?? 0) < 190) {
    } else {
      if (((s as any).temp_est_bmi2 ?? 0) < 220) {
      } else {
        if (((s as any).temp_est_bmi2 ?? 0) < 250) {
        } else {
          if (((s as any).temp_est_bmi2 ?? 0) < 300) {
          } else {
            if (((s as any).temp_est_bmi2 ?? 0) < 350) {
            } else {
              if (((s as any).temp_est_bmi2 ?? 0) < 400) {
              } else {
                if (((s as any).temp_est_bmi2 ?? 0) < 450) {
                }
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterGetStartTypeLocSetter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).start_type ?? 0)?.['cat'] === 'custom') {
  }
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
  } else {
    if (((s as any).start_type ?? 0)?.['loc'] === 'uni') {
    }
  }
  return;
  scene.build();
}

function enterGetStartTypeMagicSetter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).start_type ?? 0)?.['magic'] === 'nomagic') {
  } else {
    if (((s as any).start_type ?? 0)?.['magic'] === 'magic') {
    }
  }
  return;
  scene.build();
}

function enterGetStartTypeGroupSetter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).start_type ?? 0)?.['group'] === 'cool') {
  }
  if (((s as any).start_type ?? 0)?.['cat'] === 'custom') {
  }
  return;
  scene.build();
}

function enterGetStartTypeCatSetter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).start_type ?? 0)?.['cat'] === 'custom') {
  } else {
    if (((s as any).start_type ?? 0)?.['cat'] === 'goodgirl') {
    } else {
      if (((s as any).start_type ?? 0)?.['cat'] === 'uglyduckling') {
      } else {
        if (((s as any).start_type ?? 0)?.['cat'] === 'gopnikstart') {
        } else {
          if (((s as any).start_type ?? 0)?.['cat'] === 'vitekgf') {
          } else {
            if (((s as any).start_type ?? 0)?.['cat'] === 'nerdqueen') {
            } else {
              if (((s as any).start_type ?? 0)?.['cat'] === 'goodstudent') {
              } else {
                if (((s as any).start_type ?? 0)?.['cat'] === 'computergeek') {
                } else {
                  if (((s as any).start_type ?? 0)?.['cat'] === 'chessplayer') {
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return;
  scene.build();
}

function enterGetStartLocationSetter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
    if (((s as any).start_location ?? 0) === 1) {
    } else {
      if (((s as any).start_location ?? 0) === 2) {
      } else {
        if (((s as any).start_location ?? 0) === 3) {
        }
      }
    }
  } else {
    if (((s as any).start_type ?? 0)?.['loc'] === 'uni') {
    }
  }
  return;
  scene.build();
}

function enterGetStartTimeSetter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
    if (((s as any).daystart_start ?? 0) === 153) {
    }
    if (((s as any).daystart_start ?? 0) === 183) {
    }
    if (((s as any).daystart_start ?? 0) === 214) {
    }
    if (((s as any).daystart_start ?? 0) !== 153  &&  ((s as any).daystart_start ?? 0) !== 183  &&  ((s as any).daystart_start ?? 0) !== 214) {
    }
  } else {
    if (((s as any).start_type ?? 0)?.['loc'] === 'city') {
    }
  }
  return;
  scene.build();
}

function enterGetTrait(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'traits', '', ((s as any).locArgs?.[1] ?? 0), 'overview');
  return;
  scene.build();
}

function enterGetArchetypes(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $temp_tr_val_label += ' (' + arch_vars[$temp_tr_name + '_points'] / 250 + ')'
  return;
  scene.build();
}

function enterGetPassportSetter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).start_type ?? 0) === 'sg') {
  }
  return;
  scene.build();
}

function enterGetSecretaryLicenceSetter(s: GameState, scene: SceneBuilder): void {
  return;
  scene.build();
}

function enterGetMasseuseLicenceSetter(s: GameState, scene: SceneBuilder): void {
  return;
  scene.build();
}

function enterGetUmbrellaSetter(s: GameState, scene: SceneBuilder): void {
  return;
  scene.build();
}

function enterGetCombSetter(s: GameState, scene: SceneBuilder): void {
  return;
  scene.build();
}

function enterGetMirrorSetter(s: GameState, scene: SceneBuilder): void {
  return;
  scene.build();
}

function enterGetWaterBottleSetter(s: GameState, scene: SceneBuilder): void {
  return;
  scene.build();
}

function enterGetSkippingRopeSetter(s: GameState, scene: SceneBuilder): void {
  return;
  scene.build();
}

function enterGetHulaHoopSetter(s: GameState, scene: SceneBuilder): void {
  return;
  scene.build();
}

function enterGetYogaBookSetter(s: GameState, scene: SceneBuilder): void {
  return;
  scene.build();
}

function enterGetIceSkatesSetter(s: GameState, scene: SceneBuilder): void {
  return;
  scene.build();
}

function enterGetSewingKitSetter(s: GameState, scene: SceneBuilder): void {
  return;
  scene.build();
}

function enterGetVibratorSetter(s: GameState, scene: SceneBuilder): void {
  return;
  scene.build();
}

function enterGetButtPlugSetter(s: GameState, scene: SceneBuilder): void {
  return;
  scene.build();
}

function enterGetMoneySetter(s: GameState, scene: SceneBuilder): void {
  return;
  scene.build();
}

function enterCycleGroup(s: GameState, scene: SceneBuilder): void {
  if (((s as any).start_type ?? 0)?.['cat'] === 'custom') {
    // TODO-QSP: exit
  }
  if (((s as any).start_type ?? 0)?.['group'] === 'nerd') {
    (s as any).temp_group_idx = 0;
  } else {
    if (((s as any).start_type ?? 0)?.['group'] === 'jock') {
      (s as any).temp_group_idx = 1;
    } else {
      if (((s as any).start_type ?? 0)?.['group'] === 'cool') {
        (s as any).temp_group_idx = 2;
      } else {
        if (((s as any).start_type ?? 0)?.['group'] === 'gopnik') {
          (s as any).temp_group_idx = 3;
        } else {
          if (((s as any).start_type ?? 0)?.['group'] === 'outcast') {
            (s as any).temp_group_idx = 4;
          }
        }
      }
    }
  }
  (s as any).temp_group_idx = (((s as any).temp_group_idx ?? 0) + ((s as any).ARGS ?? 0)[1] + 5) % 5;
  if ((!((s as any).temp_group_idx ?? 0))) {
    (s as any).start_type['group'] = 'nerd';
    (s as any).start_type['cat'] = 'nerdqueen';
  } else {
    if (((s as any).temp_group_idx ?? 0) === 1) {
      (s as any).start_type['group'] = 'jock';
      (s as any).start_type['cat'] = 'volleyball';
    } else {
      if (((s as any).temp_group_idx ?? 0) === 2) {
        (s as any).start_type['group'] = 'cool';
        (s as any).start_type['cat'] = 'socialite';
      } else {
        if (((s as any).temp_group_idx ?? 0) === 3) {
          (s as any).start_type['group'] = 'gopnik';
          (s as any).start_type['cat'] = 'gopnikstart';
        } else {
          if (((s as any).temp_group_idx ?? 0) === 4) {
            (s as any).start_type['group'] = 'outcast';
            (s as any).start_type['cat'] = 'friendless';
          }
        }
      }
    }
  }
  // TODO-QSP: gs 'intro_character_templates', 'set_template', $start_type['cat']
  return;
  scene.build();
}

function enterCycleSubgroup(s: GameState, scene: SceneBuilder): void {
  if (((s as any).start_type ?? 0)?.['cat'] === 'custom') {
    // TODO-QSP: exit
  }
  if (((s as any).start_type ?? 0)?.['group'] === 'nerd') {
    if (((s as any).start_type ?? 0)?.['cat'] === 'nerdqueen') {
      (s as any).start_type['cat'] = ((((s as any).locArgs?.[1] ?? 0) === 1) ? ('goodstudent') : ('chessplayer'));
    } else {
      if (((s as any).start_type ?? 0)?.['cat'] === 'goodstudent') {
        (s as any).start_type['cat'] = ((((s as any).locArgs?.[1] ?? 0) === 1) ? ('computergeek') : ('nerdqueen'));
      } else {
        if (((s as any).start_type ?? 0)?.['cat'] === 'computergeek') {
          (s as any).start_type['cat'] = ((((s as any).locArgs?.[1] ?? 0) === 1) ? ('chessplayer') : ('goodstudent'));
        } else {
          if (((s as any).start_type ?? 0)?.['cat'] === 'chessplayer') {
            (s as any).start_type['cat'] = ((((s as any).locArgs?.[1] ?? 0) === 1) ? ('nerdqueen') : ('computergeek'));
          }
        }
      }
    }
  } else {
    if (((s as any).start_type ?? 0)?.['group'] === 'jock') {
      if (((s as any).start_type ?? 0)?.['cat'] === 'volleyball') {
        (s as any).start_type['cat'] = ((((s as any).locArgs?.[1] ?? 0) === 1) ? ('dancer') : ('football'));
      } else {
        if (((s as any).start_type ?? 0)?.['cat'] === 'dancer') {
          (s as any).start_type['cat'] = ((((s as any).locArgs?.[1] ?? 0) === 1) ? ('runner') : ('volleyball'));
        } else {
          if (((s as any).start_type ?? 0)?.['cat'] === 'runner') {
            (s as any).start_type['cat'] = ((((s as any).locArgs?.[1] ?? 0) === 1) ? ('football') : ('dancer'));
          } else {
            if (((s as any).start_type ?? 0)?.['cat'] === 'football') {
              (s as any).start_type['cat'] = ((((s as any).locArgs?.[1] ?? 0) === 1) ? ('volleyball') : ('runner'));
            }
          }
        }
      }
    } else {
      if (((s as any).start_type ?? 0)?.['group'] === 'cool') {
        if (((s as any).start_type ?? 0)?.['cat'] === 'socialite') {
          (s as any).start_type['cat'] = ((((s as any).locArgs?.[1] ?? 0) === 1) ? ('beautiful') : ('bimbo'));
        } else {
          if (((s as any).start_type ?? 0)?.['cat'] === 'beautiful') {
            (s as any).start_type['cat'] = ((((s as any).locArgs?.[1] ?? 0) === 1) ? ('anorexic') : ('socialite'));
          } else {
            if (((s as any).start_type ?? 0)?.['cat'] === 'anorexic') {
              (s as any).start_type['cat'] = ((((s as any).locArgs?.[1] ?? 0) === 1) ? ('bimbo') : ('beautiful'));
            } else {
              if (((s as any).start_type ?? 0)?.['cat'] === 'bimbo') {
                (s as any).start_type['cat'] = ((((s as any).locArgs?.[1] ?? 0) === 1) ? ('socialite') : ('anorexic'));
              }
            }
          }
        }
      } else {
        if (((s as any).start_type ?? 0)?.['group'] === 'gopnik') {
          if (((s as any).start_type ?? 0)?.['cat'] === 'gopnikstart') {
            (s as any).start_type['cat'] = ((((s as any).locArgs?.[1] ?? 0) === 1) ? ('troublemaker') : ('alternative'));
          } else {
            if (((s as any).start_type ?? 0)?.['cat'] === 'troublemaker') {
              if (((s as any).locArgs?.[1] ?? 0) === 1) {
                (s as any).start_type['cat'] = ((((s as any).tsg ?? 0) === 1) ? ('vitekgf') : ('alternative'));
              } else {
                (s as any).start_type['cat'] = 'gopnikstart';
              }
            } else {
              if (((s as any).start_type ?? 0)?.['cat'] === 'vitekgf') {
                (s as any).start_type['cat'] = ((((s as any).locArgs?.[1] ?? 0) === 1) ? ('alternative') : ('troublemaker'));
              } else {
                if (((s as any).start_type ?? 0)?.['cat'] === 'alternative') {
                  if (((s as any).locArgs?.[1] ?? 0) === 1) {
                    (s as any).start_type['cat'] = 'gopnikstart';
                  } else {
                    (s as any).start_type['cat'] = ((((s as any).tsg ?? 0) === 1) ? ('vitekgf') : ('troublemaker'));
                  }
                }
              }
            }
          }
        } else {
          if (((s as any).start_type ?? 0)?.['group'] === 'outcast') {
            if (((s as any).start_type ?? 0)?.['cat'] === 'friendless') {
              (s as any).start_type['cat'] = ((((s as any).locArgs?.[1] ?? 0) === 1) ? ('uglyduckling') : ('poor'));
            } else {
              if (((s as any).start_type ?? 0)?.['cat'] === 'uglyduckling') {
                (s as any).start_type['cat'] = ((((s as any).locArgs?.[1] ?? 0) === 1) ? ('goodgirl') : ('friendless'));
              } else {
                if (((s as any).start_type ?? 0)?.['cat'] === 'goodgirl') {
                  (s as any).start_type['cat'] = ((((s as any).locArgs?.[1] ?? 0) === 1) ? ('slut') : ('uglyduckling'));
                } else {
                  if (((s as any).start_type ?? 0)?.['cat'] === 'slut') {
                    (s as any).start_type['cat'] = ((((s as any).locArgs?.[1] ?? 0) === 1) ? ('goth') : ('goodgirl'));
                  } else {
                    if (((s as any).start_type ?? 0)?.['cat'] === 'goth') {
                      (s as any).start_type['cat'] = ((((s as any).locArgs?.[1] ?? 0) === 1) ? ('poor') : ('slut'));
                    } else {
                      if (((s as any).start_type ?? 0)?.['cat'] === 'poor') {
                        (s as any).start_type['cat'] = ((((s as any).locArgs?.[1] ?? 0) === 1) ? ('friendless') : ('goth'));
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: gs 'intro_character_templates', 'set_template', $start_type['cat']
  return;
  scene.build();
}

function enterCycleSgTime(s: GameState, scene: SceneBuilder): void {
  if (((s as any).daystart_start ?? 0) === 153) {
    (s as any).temp_sg_idx = 0;
  } else {
    if (((s as any).daystart_start ?? 0) === 183) {
      (s as any).temp_sg_idx = 1;
    } else {
      if (((s as any).daystart_start ?? 0) === 214) {
        (s as any).temp_sg_idx = 2;
      } else {
        (s as any).temp_sg_idx = 3;
      }
    }
  }
  (s as any).temp_sg_idx = (((s as any).temp_sg_idx ?? 0) + ((s as any).ARGS ?? 0)[1] + 4) % 4;
  if ((!((s as any).temp_sg_idx ?? 0))) {
    (s as any).daystart_start = 153;
  } else {
    if (((s as any).temp_sg_idx ?? 0) === 1) {
      (s as any).daystart_start = 183;
    } else {
      if (((s as any).temp_sg_idx ?? 0) === 2) {
        (s as any).daystart_start = 214;
      } else {
        (s as any).daystart_start = 239;
      }
    }
  }
  qspCall(s, 'intro_initialization', 'init_time');
  return;
  scene.build();
}

function enterSetPortraitMode(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 1) {
    if (((s as any).face_style ?? 0)?.['avatar_path'] === '') {
      (s as any).face_style['avatar_path'] = 0;
      if (((s as any).face_style ?? 0)?.['avatar_path'] === '') {
        (s as any).face_style['avatar_path'] = 'images/avatar.jpg';
      }
    }
  }
  (s as any).face_style['type'] = qspUntranslated(s, "ARGS[1]", { location: "intro_overview" });
  return;
  scene.build();
}

function enterGetArchetypeLabel(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) <= 0) {
  } else {
    if (((s as any).locArgs?.[1] ?? 0) <= 25000) {
    } else {
      if (((s as any).locArgs?.[1] ?? 0) <= 50000) {
      } else {
        if (((s as any).locArgs?.[1] ?? 0) <= 75000) {
        } else {
          if (((s as any).locArgs?.[1] ?? 0) <= 100000) {
          } else {
            if (((s as any).locArgs?.[1] ?? 0) <= 125000) {
            } else {
              if (((s as any).locArgs?.[1] ?? 0) <= 150000) {
              } else {
                if (((s as any).locArgs?.[1] ?? 0) <= 200000) {
                } else {
                  if (((s as any).locArgs?.[1] ?? 0) <= 300000) {
                  } else {
                    if (((s as any).locArgs?.[1] ?? 0) <= 400000) {
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return;
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'leave':
      enterLeave(s, scene);
      break;
    case 'quick_leave':
      enterQuickLeave(s, scene);
      break;
    case 'render_cell':
      enterRenderCell(s, scene);
      break;
    case 'get_firstname_setter':
      enterGetFirstnameSetter(s, scene);
      break;
    case 'get_nickname_setter':
      enterGetNicknameSetter(s, scene);
      break;
    case 'get_lastname_setter':
      enterGetLastnameSetter(s, scene);
      break;
    case 'get_birthday_setter':
      enterGetBirthdaySetter(s, scene);
      break;
    case 'get_birthmonth_setter':
      enterGetBirthmonthSetter(s, scene);
      break;
    case 'get_birthyear_setter':
      enterGetBirthyearSetter(s, scene);
      break;
    case 'get_haircolor_setter':
      enterGetHaircolorSetter(s, scene);
      break;
    case 'get_hairlength_setter':
      enterGetHairlengthSetter(s, scene);
      break;
    case 'get_hairtype_setter':
      enterGetHairtypeSetter(s, scene);
      break;
    case 'get_eyecolor_setter':
      enterGetEyecolorSetter(s, scene);
      break;
    case 'get_eyesize_setter':
      enterGetEyesizeSetter(s, scene);
      break;
    case 'get_eyelashes_setter':
      enterGetEyelashesSetter(s, scene);
      break;
    case 'get_eyesight_setter':
      enterGetEyesightSetter(s, scene);
      break;
    case 'get_lipsize_setter':
      enterGetLipsizeSetter(s, scene);
      break;
    case 'get_teeth_setter':
      enterGetTeethSetter(s, scene);
      break;
    case 'get_height_setter':
      enterGetHeightSetter(s, scene);
      break;
    case 'get_portrait_setter':
      enterGetPortraitSetter(s, scene);
      break;
    case 'get_bodyweight_setter':
      enterGetBodyweightSetter(s, scene);
      break;
    case 'get_bust_setter':
      enterGetBustSetter(s, scene);
      break;
    case 'get_butt_setter':
      enterGetButtSetter(s, scene);
      break;
    case 'get_est_bmi':
      enterGetEstBmi(s, scene);
      break;
    case 'get_start_type_loc_setter':
      enterGetStartTypeLocSetter(s, scene);
      break;
    case 'get_start_type_magic_setter':
      enterGetStartTypeMagicSetter(s, scene);
      break;
    case 'get_start_type_group_setter':
      enterGetStartTypeGroupSetter(s, scene);
      break;
    case 'get_start_type_cat_setter':
      enterGetStartTypeCatSetter(s, scene);
      break;
    case 'get_start_location_setter':
      enterGetStartLocationSetter(s, scene);
      break;
    case 'get_start_time_setter':
      enterGetStartTimeSetter(s, scene);
      break;
    case 'get_trait':
      enterGetTrait(s, scene);
      break;
    case 'get_archetypes':
      enterGetArchetypes(s, scene);
      break;
    case 'get_passport_setter':
      enterGetPassportSetter(s, scene);
      break;
    case 'get_secretary_licence_setter':
      enterGetSecretaryLicenceSetter(s, scene);
      break;
    case 'get_masseuse_licence_setter':
      enterGetMasseuseLicenceSetter(s, scene);
      break;
    case 'get_umbrella_setter':
      enterGetUmbrellaSetter(s, scene);
      break;
    case 'get_comb_setter':
      enterGetCombSetter(s, scene);
      break;
    case 'get_mirror_setter':
      enterGetMirrorSetter(s, scene);
      break;
    case 'get_water_bottle_setter':
      enterGetWaterBottleSetter(s, scene);
      break;
    case 'get_skipping_rope_setter':
      enterGetSkippingRopeSetter(s, scene);
      break;
    case 'get_hula_hoop_setter':
      enterGetHulaHoopSetter(s, scene);
      break;
    case 'get_yoga_book_setter':
      enterGetYogaBookSetter(s, scene);
      break;
    case 'get_ice_skates_setter':
      enterGetIceSkatesSetter(s, scene);
      break;
    case 'get_sewing_kit_setter':
      enterGetSewingKitSetter(s, scene);
      break;
    case 'get_vibrator_setter':
      enterGetVibratorSetter(s, scene);
      break;
    case 'get_butt_plug_setter':
      enterGetButtPlugSetter(s, scene);
      break;
    case 'get_money_setter':
      enterGetMoneySetter(s, scene);
      break;
    case 'cycle_group':
      enterCycleGroup(s, scene);
      break;
    case 'cycle_subgroup':
      enterCycleSubgroup(s, scene);
      break;
    case 'cycle_sg_time':
      enterCycleSgTime(s, scene);
      break;
    case 'set_portrait_mode':
      enterSetPortraitMode(s, scene);
      break;
    case 'get_archetype_label':
      enterGetArchetypeLabel(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const intro_overview: LocationDef = {
  name: 'intro_overview',
  title: 'We strongly recommend new players avoid changing them. You should probably only touch these if you\'ve already tried every default path that interests you',
  region: 'other',
  enter: enter,
};
