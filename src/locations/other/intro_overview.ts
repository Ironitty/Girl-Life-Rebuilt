import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_hairbsh = 1;
  // TODO-QSP: view $func('$face_image')
  (s as any).temp_cell_td_1 = '<td colspan="12" align="center" valign="middle" bgcolor="' + (((s as any).theme_hex ?? 0)?.['table_bg_alt']) + '" style="border:1px solid ' + (((s as any).theme_hex ?? 0)?.['goth']) + '; background-color: ' + (((s as any).theme_hex ?? 0)?.['table_bg_alt']) + '; text-align: center; vertical-align:middle; padding:5px;">';
  (s as any).temp_cell_td_1_end = '</td>';
  (s as any).temp_cell_td_3 = '<td colspan="4" align="center" valign="middle" bgcolor="' + (((s as any).theme_hex ?? 0)?.['table_bg_alt']) + '" style="border:1px solid ' + (((s as any).theme_hex ?? 0)?.['goth']) + '; background-color: ' + (((s as any).theme_hex ?? 0)?.['table_bg_alt']) + '; text-align: center; vertical-align:middle; padding:5px;">';
  (s as any).temp_cell_td_3_end = '</td>';
  scene.text('<center>');
  // TODO-QSP: dynamic text: <table width="70%" cellspacing="10" bgcolor="<<$theme_hex['table_bg']>>" style="...
  scene.text(`<table width="70%" cellspacing="10" bgcolor="${(((s as any).theme_hex ?? 0)?.['table_bg'] ?? '')}" style="border:4px solid ${(((s as any).theme_hex ?? 0)?.['goth'] ?? '')}; margin:10px; padding:10px; border-spacing:10px; background-color: ${(((s as any).theme_hex ?? 0)?.['table_bg'] ?? '')};">`);
  scene.text('<colgroup>');
  scene.text('<col width="8%">');
  scene.text('<col width="8%">');
  scene.text('<col width="8%">');
  scene.text('<col width="8%">');
  scene.text('<col width="8%">');
  scene.text('<col width="8%">');
  scene.text('<col width="8%">');
  scene.text('<col width="8%">');
  scene.text('<col width="8%">');
  scene.text('<col width="8%">');
  scene.text('<col width="8%">');
  scene.text('<col width="8%">');
  scene.text('</colgroup>');
  scene.text('<tr>');
  // TODO-QSP: dynamic text: $temp_cell_td_1
  scene.text(String((s as any).temp_cell_td_1 ?? ''));
  scene.text('<big><b>Character Overview</b></big><br><small>Changing Game Type or Setting may result in inconsistencies in the prologue.</small>');
  // TODO-QSP: dynamic text: $temp_cell_td_1_end
  scene.text(String((s as any).temp_cell_td_1_end ?? ''));
  scene.text('</tr>');
  scene.text('<tr style="height:0; font-size:0; line-height:0; visibility:hidden;">');
  scene.text('<td style="padding:0; border:0; height:0;"></td>');
  scene.text('<td style="padding:0; border:0; height:0;"></td>');
  scene.text('<td style="padding:0; border:0; height:0;"></td>');
  scene.text('<td style="padding:0; border:0; height:0;"></td>');
  scene.text('<td style="padding:0; border:0; height:0;"></td>');
  scene.text('<td style="padding:0; border:0; height:0;"></td>');
  scene.text('<td style="padding:0; border:0; height:0;"></td>');
  scene.text('<td style="padding:0; border:0; height:0;"></td>');
  scene.text('<td style="padding:0; border:0; height:0;"></td>');
  scene.text('<td style="padding:0; border:0; height:0;"></td>');
  scene.text('<td style="padding:0; border:0; height:0;"></td>');
  scene.text('<td style="padding:0; border:0; height:0;"></td>');
  scene.text('</tr>');
  scene.text('<tr>');
  // TODO-QSP: dynamic text: $temp_cell_td_3
  scene.text(String((s as any).temp_cell_td_3 ?? ''));
  // TODO-QSP: dynamic text: $func('intro_overview', 'get_firstname_setter')
  scene.text(qspFunc(s, 'intro_overview', 'get_firstname_setter'));
  // TODO-QSP: dynamic text: $temp_cell_td_3_end
  scene.text(String((s as any).temp_cell_td_3_end ?? ''));
  // TODO-QSP: dynamic text: $temp_cell_td_3
  scene.text(String((s as any).temp_cell_td_3 ?? ''));
  // TODO-QSP: dynamic text: $func('intro_overview', 'get_lastname_setter')
  scene.text(qspFunc(s, 'intro_overview', 'get_lastname_setter'));
  // TODO-QSP: dynamic text: $temp_cell_td_3_end
  scene.text(String((s as any).temp_cell_td_3_end ?? ''));
  // TODO-QSP: dynamic text: $temp_cell_td_3
  scene.text(String((s as any).temp_cell_td_3 ?? ''));
  // TODO-QSP: dynamic text: $func('intro_overview', 'get_nickname_setter')
  scene.text(qspFunc(s, 'intro_overview', 'get_nickname_setter'));
  // TODO-QSP: dynamic text: $temp_cell_td_3_end
  scene.text(String((s as any).temp_cell_td_3_end ?? ''));
  scene.text('</tr>');
  scene.text('<tr>');
  // TODO-QSP: dynamic text: $temp_cell_td_3
  scene.text(String((s as any).temp_cell_td_3 ?? ''));
  // TODO-QSP: dynamic text: $func('intro_overview', 'get_start_type_magic_setter')
  scene.text(qspFunc(s, 'intro_overview', 'get_start_type_magic_setter'));
  // TODO-QSP: dynamic text: $temp_cell_td_3_end
  scene.text(String((s as any).temp_cell_td_3_end ?? ''));
  // TODO-QSP: dynamic text: $temp_cell_td_3
  scene.text(String((s as any).temp_cell_td_3 ?? ''));
  // TODO-QSP: dynamic text: $func('intro_overview', 'get_start_type_loc_setter')
  scene.text(qspFunc(s, 'intro_overview', 'get_start_type_loc_setter'));
  // TODO-QSP: dynamic text: $temp_cell_td_3_end
  scene.text(String((s as any).temp_cell_td_3_end ?? ''));
  // TODO-QSP: dynamic text: $temp_cell_td_3
  scene.text(String((s as any).temp_cell_td_3 ?? ''));
  // TODO-QSP: dynamic text: $func('intro_overview', 'get_start_location_setter')
  scene.text(qspFunc(s, 'intro_overview', 'get_start_location_setter'));
  // TODO-QSP: dynamic text: $temp_cell_td_3_end
  scene.text(String((s as any).temp_cell_td_3_end ?? ''));
  scene.text('</tr>');
  scene.text('<tr>');
  // TODO-QSP: dynamic text: $temp_cell_td_3
  scene.text(String((s as any).temp_cell_td_3 ?? ''));
  // TODO-QSP: dynamic text: $func('intro_overview', 'get_start_type_group_setter')
  scene.text(qspFunc(s, 'intro_overview', 'get_start_type_group_setter'));
  // TODO-QSP: dynamic text: $temp_cell_td_3_end
  scene.text(String((s as any).temp_cell_td_3_end ?? ''));
  // TODO-QSP: dynamic text: $temp_cell_td_3
  scene.text(String((s as any).temp_cell_td_3 ?? ''));
  // TODO-QSP: dynamic text: $func('intro_overview', 'get_start_type_cat_setter')
  scene.text(qspFunc(s, 'intro_overview', 'get_start_type_cat_setter'));
  // TODO-QSP: dynamic text: $temp_cell_td_3_end
  scene.text(String((s as any).temp_cell_td_3_end ?? ''));
  // TODO-QSP: dynamic text: $temp_cell_td_3
  scene.text(String((s as any).temp_cell_td_3 ?? ''));
  // TODO-QSP: dynamic text: $func('intro_overview', 'get_start_time_setter')
  scene.text(qspFunc(s, 'intro_overview', 'get_start_time_setter'));
  // TODO-QSP: dynamic text: $temp_cell_td_3_end
  scene.text(String((s as any).temp_cell_td_3_end ?? ''));
  scene.text('</tr>');
  scene.text('<tr>');
  // TODO-QSP: dynamic text: $temp_cell_td_3
  scene.text(String((s as any).temp_cell_td_3 ?? ''));
  // TODO-QSP: dynamic text: $func('intro_overview', 'get_birthday_setter')
  scene.text(qspFunc(s, 'intro_overview', 'get_birthday_setter'));
  // TODO-QSP: dynamic text: $temp_cell_td_3_end
  scene.text(String((s as any).temp_cell_td_3_end ?? ''));
  // TODO-QSP: dynamic text: $temp_cell_td_3
  scene.text(String((s as any).temp_cell_td_3 ?? ''));
  // TODO-QSP: dynamic text: $func('intro_overview', 'get_birthmonth_setter')
  scene.text(qspFunc(s, 'intro_overview', 'get_birthmonth_setter'));
  // TODO-QSP: dynamic text: $temp_cell_td_3_end
  scene.text(String((s as any).temp_cell_td_3_end ?? ''));
  // TODO-QSP: dynamic text: $temp_cell_td_3
  scene.text(String((s as any).temp_cell_td_3 ?? ''));
  // TODO-QSP: dynamic text: $func('intro_overview', 'get_birthyear_setter')
  scene.text(qspFunc(s, 'intro_overview', 'get_birthyear_setter'));
  // TODO-QSP: dynamic text: $temp_cell_td_3_end
  scene.text(String((s as any).temp_cell_td_3_end ?? ''));
  scene.text('</tr>');
  scene.text('<tr>');
  // TODO-QSP: dynamic text: $temp_cell_td_3
  scene.text(String((s as any).temp_cell_td_3 ?? ''));
  // TODO-QSP: dynamic text: $func('intro_overview', 'get_haircolor_setter')
  scene.text(qspFunc(s, 'intro_overview', 'get_haircolor_setter'));
  // TODO-QSP: dynamic text: $temp_cell_td_3_end
  scene.text(String((s as any).temp_cell_td_3_end ?? ''));
  // TODO-QSP: dynamic text: $temp_cell_td_3
  scene.text(String((s as any).temp_cell_td_3 ?? ''));
  // TODO-QSP: dynamic text: $func('intro_overview', 'get_hairlength_setter')
  scene.text(qspFunc(s, 'intro_overview', 'get_hairlength_setter'));
  // TODO-QSP: dynamic text: $temp_cell_td_3_end
  scene.text(String((s as any).temp_cell_td_3_end ?? ''));
  // TODO-QSP: dynamic text: $temp_cell_td_3
  scene.text(String((s as any).temp_cell_td_3 ?? ''));
  // TODO-QSP: dynamic text: $func('intro_overview', 'get_hairtype_setter')
  scene.text(qspFunc(s, 'intro_overview', 'get_hairtype_setter'));
  // TODO-QSP: dynamic text: $temp_cell_td_3_end
  scene.text(String((s as any).temp_cell_td_3_end ?? ''));
  scene.text('</tr>');
  scene.text('<tr>');
  // TODO-QSP: dynamic text: $temp_cell_td_3
  scene.text(String((s as any).temp_cell_td_3 ?? ''));
  // TODO-QSP: dynamic text: $func('intro_overview', 'get_eyecolor_setter')
  scene.text(qspFunc(s, 'intro_overview', 'get_eyecolor_setter'));
  // TODO-QSP: dynamic text: $temp_cell_td_3_end
  scene.text(String((s as any).temp_cell_td_3_end ?? ''));
  // TODO-QSP: dynamic text: $temp_cell_td_3
  scene.text(String((s as any).temp_cell_td_3 ?? ''));
  // TODO-QSP: dynamic text: $func('intro_overview', 'get_height_setter')
  scene.text(qspFunc(s, 'intro_overview', 'get_height_setter'));
  // TODO-QSP: dynamic text: $temp_cell_td_3_end
  scene.text(String((s as any).temp_cell_td_3_end ?? ''));
  // TODO-QSP: dynamic text: $temp_cell_td_3
  scene.text(String((s as any).temp_cell_td_3 ?? ''));
  // TODO-QSP: dynamic text: $func('intro_overview', 'get_portrait_setter')
  scene.text(qspFunc(s, 'intro_overview', 'get_portrait_setter'));
  // TODO-QSP: dynamic text: $temp_cell_td_3_end
  scene.text(String((s as any).temp_cell_td_3_end ?? ''));
  scene.text('</tr>');
  scene.text('</table>');
  scene.text('</center>');
  scene.text('<center>');
  // TODO-QSP: dynamic text: <table width="70%" cellspacing="10" bgcolor="<<$theme_hex['table_bg']>>" style="...
  scene.text(`<table width="70%" cellspacing="10" bgcolor="${(((s as any).theme_hex ?? 0)?.['table_bg'] ?? '')}" style="border:4px solid ${(((s as any).theme_hex ?? 0)?.['goth'] ?? '')}; margin:10px; padding:10px; border-spacing:10px; background-color: ${(((s as any).theme_hex ?? 0)?.['table_bg'] ?? '')};">`);
  scene.text('<colgroup>');
  scene.text('<col width="8%">');
  scene.text('<col width="8%">');
  scene.text('<col width="8%">');
  scene.text('<col width="8%">');
  scene.text('<col width="8%">');
  scene.text('<col width="8%">');
  scene.text('<col width="8%">');
  scene.text('<col width="8%">');
  scene.text('<col width="8%">');
  scene.text('<col width="8%">');
  scene.text('<col width="8%">');
  scene.text('<col width="8%">');
  scene.text('</colgroup>');
  scene.text('<tr>');
  // TODO-QSP: dynamic text: $temp_cell_td_1
  scene.text(String((s as any).temp_cell_td_1 ?? ''));
  // TODO-QSP: dynamic text: $func('intro_overview', 'render_cell', 'Advanced Options', '<small>These options...
  scene.text(qspFunc(s, 'intro_overview', 'render_cell', 'Advanced Options', '<small>These options may affect game balance or deviate from the intended experience for a start path.<br>We strongly recommend new players avoid changing them. You should probably only touch these if you\'ve already tried every default path that interests you</small>', 2));
  // TODO-QSP: dynamic text: $temp_cell_td_1_end
  scene.text(String((s as any).temp_cell_td_1_end ?? ''));
  scene.text('</tr>');
  scene.text('<tr style="height:0; font-size:0; line-height:0; visibility:hidden;">');
  scene.text('<td style="padding:0; border:0; height:0;"></td>');
  scene.text('<td style="padding:0; border:0; height:0;"></td>');
  scene.text('<td style="padding:0; border:0; height:0;"></td>');
  scene.text('<td style="padding:0; border:0; height:0;"></td>');
  scene.text('<td style="padding:0; border:0; height:0;"></td>');
  scene.text('<td style="padding:0; border:0; height:0;"></td>');
  scene.text('<td style="padding:0; border:0; height:0;"></td>');
  scene.text('<td style="padding:0; border:0; height:0;"></td>');
  scene.text('<td style="padding:0; border:0; height:0;"></td>');
  scene.text('<td style="padding:0; border:0; height:0;"></td>');
  scene.text('<td style="padding:0; border:0; height:0;"></td>');
  scene.text('<td style="padding:0; border:0; height:0;"></td>');
  scene.text('</tr>');
  scene.text('<tr>');
  // TODO-QSP: dynamic text: $temp_cell_td_1
  scene.text(String((s as any).temp_cell_td_1 ?? ''));
  // TODO-QSP: dynamic text: $func('intro_overview', 'render_cell', 'Body', iif(overview_show_body_options = ...
  scene.text(qspFunc(s, 'intro_overview', 'render_cell', 'Body', ((((s as any).overview_show_body_options ?? 0) === 1) ? ('Visible') : ('Hidden')), 1, 'overview_show_body_options = 1 - overview_show_body_options'));
  // TODO-QSP: dynamic text: $temp_cell_td_1_end
  scene.text(String((s as any).temp_cell_td_1_end ?? ''));
  scene.text('</tr>');
  if (((s as any).overview_show_body_options ?? 0) === 1) {
    scene.text('<tr>');
    // TODO-QSP: dynamic text: $temp_cell_td_3
    scene.text(String((s as any).temp_cell_td_3 ?? ''));
    // TODO-QSP: dynamic text: $func('intro_overview', 'get_eyesight_setter')
    scene.text(qspFunc(s, 'intro_overview', 'get_eyesight_setter'));
    // TODO-QSP: dynamic text: $temp_cell_td_3_end
    scene.text(String((s as any).temp_cell_td_3_end ?? ''));
    // TODO-QSP: dynamic text: $temp_cell_td_3
    scene.text(String((s as any).temp_cell_td_3 ?? ''));
    // TODO-QSP: dynamic text: $func('intro_overview', 'get_eyesize_setter')
    scene.text(qspFunc(s, 'intro_overview', 'get_eyesize_setter'));
    // TODO-QSP: dynamic text: $temp_cell_td_3_end
    scene.text(String((s as any).temp_cell_td_3_end ?? ''));
    // TODO-QSP: dynamic text: $temp_cell_td_3
    scene.text(String((s as any).temp_cell_td_3 ?? ''));
    // TODO-QSP: dynamic text: $func('intro_overview', 'get_eyelashes_setter')
    scene.text(qspFunc(s, 'intro_overview', 'get_eyelashes_setter'));
    // TODO-QSP: dynamic text: $temp_cell_td_3_end
    scene.text(String((s as any).temp_cell_td_3_end ?? ''));
    scene.text('</tr>');
    scene.text('<tr>');
    // TODO-QSP: dynamic text: $temp_cell_td_3
    scene.text(String((s as any).temp_cell_td_3 ?? ''));
    // TODO-QSP: dynamic text: $func('intro_overview', 'get_bodyweight_setter')
    scene.text(qspFunc(s, 'intro_overview', 'get_bodyweight_setter'));
    // TODO-QSP: dynamic text: $temp_cell_td_3_end
    scene.text(String((s as any).temp_cell_td_3_end ?? ''));
    // TODO-QSP: dynamic text: $temp_cell_td_3
    scene.text(String((s as any).temp_cell_td_3 ?? ''));
    // TODO-QSP: dynamic text: $func('intro_overview', 'get_bust_setter')
    scene.text(qspFunc(s, 'intro_overview', 'get_bust_setter'));
    // TODO-QSP: dynamic text: $temp_cell_td_3_end
    scene.text(String((s as any).temp_cell_td_3_end ?? ''));
    // TODO-QSP: dynamic text: $temp_cell_td_3
    scene.text(String((s as any).temp_cell_td_3 ?? ''));
    // TODO-QSP: dynamic text: $func('intro_overview', 'get_butt_setter')
    scene.text(qspFunc(s, 'intro_overview', 'get_butt_setter'));
    // TODO-QSP: dynamic text: $temp_cell_td_3_end
    scene.text(String((s as any).temp_cell_td_3_end ?? ''));
    scene.text('</tr>');
    scene.text('<tr>');
    // TODO-QSP: dynamic text: $temp_cell_td_3
    scene.text(String((s as any).temp_cell_td_3 ?? ''));
    // TODO-QSP: dynamic text: $func('intro_overview', 'get_est_bmi')
    scene.text(qspFunc(s, 'intro_overview', 'get_est_bmi'));
    // TODO-QSP: dynamic text: $temp_cell_td_3_end
    scene.text(String((s as any).temp_cell_td_3_end ?? ''));
    // TODO-QSP: dynamic text: $temp_cell_td_3
    scene.text(String((s as any).temp_cell_td_3 ?? ''));
    // TODO-QSP: dynamic text: $func('intro_overview', 'get_lipsize_setter')
    scene.text(qspFunc(s, 'intro_overview', 'get_lipsize_setter'));
    // TODO-QSP: dynamic text: $temp_cell_td_3_end
    scene.text(String((s as any).temp_cell_td_3_end ?? ''));
    // TODO-QSP: dynamic text: $temp_cell_td_3
    scene.text(String((s as any).temp_cell_td_3 ?? ''));
    // TODO-QSP: dynamic text: $func('intro_overview', 'get_teeth_setter')
    scene.text(qspFunc(s, 'intro_overview', 'get_teeth_setter'));
    // TODO-QSP: dynamic text: $temp_cell_td_3_end
    scene.text(String((s as any).temp_cell_td_3_end ?? ''));
    scene.text('</tr>');
  }
  scene.text('<tr>');
  // TODO-QSP: dynamic text: $temp_cell_td_1
  scene.text(String((s as any).temp_cell_td_1 ?? ''));
  // TODO-QSP: dynamic text: $func('intro_overview', 'render_cell', 'Archetypes', iif(overview_show_archetype...
  scene.text(qspFunc(s, 'intro_overview', 'render_cell', 'Archetypes', ((((s as any).overview_show_archetype_options ?? 0) === 1) ? ('Visible') : ('Hidden')), 1, 'overview_show_archetype_options = 1 - overview_show_archetype_options'));
  // TODO-QSP: dynamic text: $temp_cell_td_1_end
  scene.text(String((s as any).temp_cell_td_1_end ?? ''));
  scene.text('</tr>');
  if (((s as any).overview_show_archetype_options ?? 0) === 1) {
    scene.text('<tr>');
    // TODO-QSP: dynamic text: $temp_cell_td_3
    scene.text(String((s as any).temp_cell_td_3 ?? ''));
    // TODO-QSP: dynamic text: $func('intro_overview', 'get_archetypes', 'bimbo')
    scene.text(qspFunc(s, 'intro_overview', 'get_archetypes', 'bimbo'));
    // TODO-QSP: dynamic text: $temp_cell_td_3_end
    scene.text(String((s as any).temp_cell_td_3_end ?? ''));
    // TODO-QSP: dynamic text: $temp_cell_td_3
    scene.text(String((s as any).temp_cell_td_3 ?? ''));
    // TODO-QSP: dynamic text: $func('intro_overview', 'get_archetypes', 'preppy')
    scene.text(qspFunc(s, 'intro_overview', 'get_archetypes', 'preppy'));
    // TODO-QSP: dynamic text: $temp_cell_td_3_end
    scene.text(String((s as any).temp_cell_td_3_end ?? ''));
    // TODO-QSP: dynamic text: $temp_cell_td_3
    scene.text(String((s as any).temp_cell_td_3 ?? ''));
    // TODO-QSP: dynamic text: $func('intro_overview', 'get_archetypes', 'prude')
    scene.text(qspFunc(s, 'intro_overview', 'get_archetypes', 'prude'));
    // TODO-QSP: dynamic text: $temp_cell_td_3_end
    scene.text(String((s as any).temp_cell_td_3_end ?? ''));
    scene.text('</tr>');
    scene.text('<tr>');
    // TODO-QSP: dynamic text: $temp_cell_td_3
    scene.text(String((s as any).temp_cell_td_3 ?? ''));
    // TODO-QSP: dynamic text: $func('intro_overview', 'get_archetypes', 'punk')
    scene.text(qspFunc(s, 'intro_overview', 'get_archetypes', 'punk'));
    // TODO-QSP: dynamic text: $temp_cell_td_3_end
    scene.text(String((s as any).temp_cell_td_3_end ?? ''));
    // TODO-QSP: dynamic text: $temp_cell_td_3
    scene.text(String((s as any).temp_cell_td_3 ?? ''));
    // TODO-QSP: dynamic text: $func('intro_overview', 'get_archetypes', 'goth')
    scene.text(qspFunc(s, 'intro_overview', 'get_archetypes', 'goth'));
    // TODO-QSP: dynamic text: $temp_cell_td_3_end
    scene.text(String((s as any).temp_cell_td_3_end ?? ''));
    scene.text('</tr>');
  }
  scene.text('<tr>');
  // TODO-QSP: dynamic text: $temp_cell_td_1
  scene.text(String((s as any).temp_cell_td_1 ?? ''));
  // TODO-QSP: dynamic text: $func('intro_overview', 'render_cell', 'Traits', iif(overview_show_trait_options...
  scene.text(qspFunc(s, 'intro_overview', 'render_cell', 'Traits', ((((s as any).overview_show_trait_options ?? 0) === 1) ? ('Visible') : ('Hidden')), 1, 'overview_show_trait_options = 1 - overview_show_trait_options'));
  // TODO-QSP: dynamic text: $temp_cell_td_1_end
  scene.text(String((s as any).temp_cell_td_1_end ?? ''));
  scene.text('</tr>');
  if (((s as any).overview_show_trait_options ?? 0) === 1) {
    scene.text('<tr>');
    // TODO-QSP: dynamic text: $temp_cell_td_3
    scene.text(String((s as any).temp_cell_td_3 ?? ''));
    // TODO-QSP: dynamic text: $func('intro_overview', 'get_trait', 'academic')
    scene.text(qspFunc(s, 'intro_overview', 'get_trait', 'academic'));
    // TODO-QSP: dynamic text: $temp_cell_td_3_end
    scene.text(String((s as any).temp_cell_td_3_end ?? ''));
    // TODO-QSP: dynamic text: $temp_cell_td_3
    scene.text(String((s as any).temp_cell_td_3 ?? ''));
    // TODO-QSP: dynamic text: $func('intro_overview', 'get_trait', 'fertility')
    scene.text(qspFunc(s, 'intro_overview', 'get_trait', 'fertility'));
    // TODO-QSP: dynamic text: $temp_cell_td_3_end
    scene.text(String((s as any).temp_cell_td_3_end ?? ''));
    // TODO-QSP: dynamic text: $temp_cell_td_3
    scene.text(String((s as any).temp_cell_td_3 ?? ''));
    // TODO-QSP: dynamic text: $func('intro_overview', 'get_trait', 'drinking')
    scene.text(qspFunc(s, 'intro_overview', 'get_trait', 'drinking'));
    // TODO-QSP: dynamic text: $temp_cell_td_3_end
    scene.text(String((s as any).temp_cell_td_3_end ?? ''));
    scene.text('</tr>');
    scene.text('<tr>');
    // TODO-QSP: dynamic text: $temp_cell_td_3
    scene.text(String((s as any).temp_cell_td_3 ?? ''));
    // TODO-QSP: dynamic text: $func('intro_overview', 'get_trait', 'sleep_duration')
    scene.text(qspFunc(s, 'intro_overview', 'get_trait', 'sleep_duration'));
    // TODO-QSP: dynamic text: $temp_cell_td_3_end
    scene.text(String((s as any).temp_cell_td_3_end ?? ''));
    // TODO-QSP: dynamic text: $temp_cell_td_3
    scene.text(String((s as any).temp_cell_td_3 ?? ''));
    // TODO-QSP: dynamic text: $func('intro_overview', 'get_trait', 'elasticity')
    scene.text(qspFunc(s, 'intro_overview', 'get_trait', 'elasticity'));
    // TODO-QSP: dynamic text: $temp_cell_td_3_end
    scene.text(String((s as any).temp_cell_td_3_end ?? ''));
    // TODO-QSP: dynamic text: $temp_cell_td_3
    scene.text(String((s as any).temp_cell_td_3 ?? ''));
    // TODO-QSP: dynamic text: $func('intro_overview', 'get_trait', 'body_hair_growth_rate')
    scene.text(qspFunc(s, 'intro_overview', 'get_trait', 'body_hair_growth_rate'));
    // TODO-QSP: dynamic text: $temp_cell_td_3_end
    scene.text(String((s as any).temp_cell_td_3_end ?? ''));
    scene.text('</tr>');
    scene.text('<tr>');
    // TODO-QSP: dynamic text: $temp_cell_td_3
    scene.text(String((s as any).temp_cell_td_3 ?? ''));
    // TODO-QSP: dynamic text: $func('intro_overview', 'get_trait', 'hair_growth_rate')
    scene.text(qspFunc(s, 'intro_overview', 'get_trait', 'hair_growth_rate'));
    // TODO-QSP: dynamic text: $temp_cell_td_3_end
    scene.text(String((s as any).temp_cell_td_3_end ?? ''));
    scene.text('</tr>');
  }
  scene.text('<tr>');
  // TODO-QSP: dynamic text: $temp_cell_td_1
  scene.text(String((s as any).temp_cell_td_1 ?? ''));
  // TODO-QSP: dynamic text: $func('intro_overview', 'render_cell', 'Documents', iif(overview_show_document_o...
  scene.text(qspFunc(s, 'intro_overview', 'render_cell', 'Documents', ((((s as any).overview_show_document_options ?? 0) === 1) ? ('Visible') : ('Hidden')), 1, 'overview_show_document_options = 1 - overview_show_document_options'));
  // TODO-QSP: dynamic text: $temp_cell_td_1_end
  scene.text(String((s as any).temp_cell_td_1_end ?? ''));
  scene.text('</tr>');
  if (((s as any).overview_show_document_options ?? 0) === 1) {
    scene.text('<tr>');
    // TODO-QSP: dynamic text: $temp_cell_td_3
    scene.text(String((s as any).temp_cell_td_3 ?? ''));
    // TODO-QSP: *P      $func('intro_overview', 'get_passport_setter')
    // TODO-QSP: dynamic text: $temp_cell_td_3_end
    scene.text(String((s as any).temp_cell_td_3_end ?? ''));
    // TODO-QSP: dynamic text: $temp_cell_td_3
    scene.text(String((s as any).temp_cell_td_3 ?? ''));
    // TODO-QSP: dynamic text: $func('intro_overview', 'get_secretary_licence_setter')
    scene.text(qspFunc(s, 'intro_overview', 'get_secretary_licence_setter'));
    // TODO-QSP: dynamic text: $temp_cell_td_3_end
    scene.text(String((s as any).temp_cell_td_3_end ?? ''));
    // TODO-QSP: dynamic text: $temp_cell_td_3
    scene.text(String((s as any).temp_cell_td_3 ?? ''));
    // TODO-QSP: dynamic text: $func('intro_overview', 'get_masseuse_licence_setter')
    scene.text(qspFunc(s, 'intro_overview', 'get_masseuse_licence_setter'));
    // TODO-QSP: dynamic text: $temp_cell_td_3_end
    scene.text(String((s as any).temp_cell_td_3_end ?? ''));
    scene.text('</tr>');
  }
  scene.text('<tr>');
  // TODO-QSP: dynamic text: $temp_cell_td_1
  scene.text(String((s as any).temp_cell_td_1 ?? ''));
  // TODO-QSP: dynamic text: $func('intro_overview', 'render_cell', 'Items', iif(overview_show_item_options =...
  scene.text(qspFunc(s, 'intro_overview', 'render_cell', 'Items', ((((s as any).overview_show_item_options ?? 0) === 1) ? ('Visible') : ('Hidden')), 1, 'overview_show_item_options = 1 - overview_show_item_options'));
  // TODO-QSP: dynamic text: $temp_cell_td_1_end
  scene.text(String((s as any).temp_cell_td_1_end ?? ''));
  scene.text('</tr>');
  if (((s as any).overview_show_item_options ?? 0) === 1) {
    scene.text('<tr>');
    // TODO-QSP: dynamic text: $temp_cell_td_3
    scene.text(String((s as any).temp_cell_td_3 ?? ''));
    // TODO-QSP: dynamic text: $func('intro_overview', 'get_umbrella_setter')
    scene.text(qspFunc(s, 'intro_overview', 'get_umbrella_setter'));
    // TODO-QSP: dynamic text: $temp_cell_td_3_end
    scene.text(String((s as any).temp_cell_td_3_end ?? ''));
    // TODO-QSP: dynamic text: $temp_cell_td_3
    scene.text(String((s as any).temp_cell_td_3 ?? ''));
    // TODO-QSP: dynamic text: $func('intro_overview', 'get_comb_setter')
    scene.text(qspFunc(s, 'intro_overview', 'get_comb_setter'));
    // TODO-QSP: dynamic text: $temp_cell_td_3_end
    scene.text(String((s as any).temp_cell_td_3_end ?? ''));
    // TODO-QSP: dynamic text: $temp_cell_td_3
    scene.text(String((s as any).temp_cell_td_3 ?? ''));
    // TODO-QSP: dynamic text: $func('intro_overview', 'get_mirror_setter')
    scene.text(qspFunc(s, 'intro_overview', 'get_mirror_setter'));
    // TODO-QSP: dynamic text: $temp_cell_td_3_end
    scene.text(String((s as any).temp_cell_td_3_end ?? ''));
    scene.text('</tr>');
    scene.text('<tr>');
    // TODO-QSP: dynamic text: $temp_cell_td_3
    scene.text(String((s as any).temp_cell_td_3 ?? ''));
    // TODO-QSP: dynamic text: $func('intro_overview', 'get_water_bottle_setter')
    scene.text(qspFunc(s, 'intro_overview', 'get_water_bottle_setter'));
    // TODO-QSP: dynamic text: $temp_cell_td_3_end
    scene.text(String((s as any).temp_cell_td_3_end ?? ''));
    // TODO-QSP: dynamic text: $temp_cell_td_3
    scene.text(String((s as any).temp_cell_td_3 ?? ''));
    // TODO-QSP: dynamic text: $func('intro_overview', 'get_skipping_rope_setter')
    scene.text(qspFunc(s, 'intro_overview', 'get_skipping_rope_setter'));
    // TODO-QSP: dynamic text: $temp_cell_td_3_end
    scene.text(String((s as any).temp_cell_td_3_end ?? ''));
    // TODO-QSP: dynamic text: $temp_cell_td_3
    scene.text(String((s as any).temp_cell_td_3 ?? ''));
    // TODO-QSP: dynamic text: $func('intro_overview', 'get_hula_hoop_setter')
    scene.text(qspFunc(s, 'intro_overview', 'get_hula_hoop_setter'));
    // TODO-QSP: dynamic text: $temp_cell_td_3_end
    scene.text(String((s as any).temp_cell_td_3_end ?? ''));
    scene.text('</tr>');
    scene.text('<tr>');
    // TODO-QSP: dynamic text: $temp_cell_td_3
    scene.text(String((s as any).temp_cell_td_3 ?? ''));
    // TODO-QSP: dynamic text: $func('intro_overview', 'get_yoga_book_setter')
    scene.text(qspFunc(s, 'intro_overview', 'get_yoga_book_setter'));
    // TODO-QSP: dynamic text: $temp_cell_td_3_end
    scene.text(String((s as any).temp_cell_td_3_end ?? ''));
    // TODO-QSP: dynamic text: $temp_cell_td_3
    scene.text(String((s as any).temp_cell_td_3 ?? ''));
    // TODO-QSP: dynamic text: $func('intro_overview', 'get_ice_skates_setter')
    scene.text(qspFunc(s, 'intro_overview', 'get_ice_skates_setter'));
    // TODO-QSP: dynamic text: $temp_cell_td_3_end
    scene.text(String((s as any).temp_cell_td_3_end ?? ''));
    // TODO-QSP: dynamic text: $temp_cell_td_3
    scene.text(String((s as any).temp_cell_td_3 ?? ''));
    // TODO-QSP: dynamic text: $func('intro_overview', 'get_sewing_kit_setter')
    scene.text(qspFunc(s, 'intro_overview', 'get_sewing_kit_setter'));
    // TODO-QSP: dynamic text: $temp_cell_td_3_end
    scene.text(String((s as any).temp_cell_td_3_end ?? ''));
    scene.text('</tr>');
    scene.text('<tr>');
    // TODO-QSP: dynamic text: $temp_cell_td_3
    scene.text(String((s as any).temp_cell_td_3 ?? ''));
    // TODO-QSP: dynamic text: $func('intro_overview', 'get_vibrator_setter')
    scene.text(qspFunc(s, 'intro_overview', 'get_vibrator_setter'));
    // TODO-QSP: dynamic text: $temp_cell_td_3_end
    scene.text(String((s as any).temp_cell_td_3_end ?? ''));
    // TODO-QSP: dynamic text: $temp_cell_td_3
    scene.text(String((s as any).temp_cell_td_3 ?? ''));
    // TODO-QSP: dynamic text: $func('intro_overview', 'get_butt_plug_setter')
    scene.text(qspFunc(s, 'intro_overview', 'get_butt_plug_setter'));
    // TODO-QSP: dynamic text: $temp_cell_td_3_end
    scene.text(String((s as any).temp_cell_td_3_end ?? ''));
    // TODO-QSP: dynamic text: $temp_cell_td_3
    scene.text(String((s as any).temp_cell_td_3 ?? ''));
    // TODO-QSP: dynamic text: $func('intro_overview', 'get_money_setter')
    scene.text(qspFunc(s, 'intro_overview', 'get_money_setter'));
    // TODO-QSP: dynamic text: $temp_cell_td_3_end
    scene.text(String((s as any).temp_cell_td_3_end ?? ''));
    scene.text('</tr>');
  }
  scene.text('</table>');
  scene.text('</center>');
  // TODO-QSP: view $func('$face_image')
  scene.actions([
{ label: '<b>Continue</b>', goto: ['intro_overview', 'leave'] },
{ label: '<b>Skip Intro</b>', goto: ['intro_overview', 'quick_leave'] },
{ label: 'Change theme', handler: (st: GameState) => {
    (st as any).themes_menu_ret_loc = 'intro_overview';
    (st as any).themes_menu_ret_arg = '';
    qspGoto(st, 'themes', 'menu');
  } },
{ label: 'Return to Start', handler: (st: GameState) => {
    scene.actions([
      { label: 'Return to Start', goto: ['start', ''] },
      { label: 'Cancel', goto: ['intro_overview', ''] },
    ]);
  } },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterLeave(s: GameState, scene: SceneBuilder): void {
  (s as any).tsg = ((((s as any).start_type ?? 0)?.['loc'] === 'sg') ? (1) : (0));
  qspGoto(s, 'intro_end', 'start');
  // TODO-QSP: end
  scene.build();
}

function enterQuickLeave(s: GameState, scene: SceneBuilder): void {
  (s as any).tsg = ((((s as any).start_type ?? 0)?.['loc'] === 'sg') ? (1) : (0));
  qspGoto(s, 'intro_end', 'quick_start');
  // TODO-QSP: end
  scene.build();
}

function enterRenderCell(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_header = ((String((s as any).locArgs?.[1] ?? '') !== '') ? (((s as any).locArgs?.[1] ?? 0)) : (String(((s as any).locArgs?.[1] ?? 0))));
  (s as any).temp_value = ((String((s as any).locArgs?.[2] ?? '') !== '') ? (((s as any).locArgs?.[2] ?? 0)) : (String(((s as any).locArgs?.[2] ?? 0))));
  if (String((s as any).locArgs?.[3] ?? '') === 0) {
    (s as any).result = '<table width="100%" cellpadding="0" cellspacing="0" border="0">';
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
    if (String((s as any).locArgs?.[3] ?? '') === 1) {
      (s as any).result = '<a style="text-decoration: none; color: inherit;" href="exec:' + ((s as any).locArgs?.[4] ?? 0) + ' & gt \'intro_overview\'">';
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
      if (String((s as any).locArgs?.[3] ?? '') === 2) {
        (s as any).result = '<table width="100%" cellpadding="0" cellspacing="0" border="0">';
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
  // TODO-QSP: end
  scene.build();
}

function enterGetFirstnameSetter(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_action_firstname = '$temp = input(\'What is your first name? (Leave blank for /"' + ((s as any).pcs_firstname ?? 0) + '/")\') & $pcs_firstname = iif($temp = \'\', $pcs_firstname, $temp)';
  (s as any).result = qspFunc(s, 'intro_overview', 'render_cell', 'First Name', ((s as any).pcs_firstname ?? 0), 1, ((s as any).temp_action_firstname ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetNicknameSetter(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_action_nickname = '$temp = input(\'What is your nickname? (Leave blank for /"' + ((s as any).pcs_nickname ?? 0) + '/")\') & $pcs_nickname = iif($temp = \'\', $pcs_nickname, $temp)';
  (s as any).result = qspFunc(s, 'intro_overview', 'render_cell', 'Nickname', ((s as any).pcs_nickname ?? 0), 1, ((s as any).temp_action_nickname ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetLastnameSetter(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_action_lastname = '$temp = input(\'What is your last name? (Leave blank for /"' + ((s as any).pcs_lastname ?? 0) + '/")\') & $pcs_lastname = iif($temp = \'\', $pcs_lastname, $temp)';
  (s as any).result = qspFunc(s, 'intro_overview', 'render_cell', 'Last Name', ((s as any).pcs_lastname ?? 0), 1, ((s as any).temp_action_lastname ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetBirthdaySetter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'init_monthends', ((s as any).birthyear ?? 0));
  (s as any).temp_action_left_day = 'birthday = ((birthday - 2 + ' + (((s as any).monthsend ?? 0)?.[String((s as any).birthmonth ?? 0)] ?? 0) + ') mod ' + (((s as any).monthsend ?? 0)?.[String((s as any).birthmonth ?? 0)] ?? 0) + ') + 1';
  (s as any).temp_action_right_day = 'birthday = ((birthday + ' + (((s as any).monthsend ?? 0)?.[String((s as any).birthmonth ?? 0)] ?? 0) + ') mod ' + (((s as any).monthsend ?? 0)?.[String((s as any).birthmonth ?? 0)] ?? 0) + ') + 1';
  (s as any).temp_value_day = '' + ((s as any).birthday ?? 0) + '' + qspFunc(s, 'shortgs', 'get_number_suffix', ((s as any).birthday ?? 0));
  (s as any).result = qspFunc(s, 'intro_overview', 'render_cell', 'Birth Day', ((s as any).temp_value_day ?? 0), 0, ((s as any).temp_action_left_day ?? 0), ((s as any).temp_action_right_day ?? 0));
  qspCall(s, 'time', 'init_monthends', ((s as any).year ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetBirthmonthSetter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'init_monthnames');
  (s as any).temp_action_left_month = 'birthmonth = ((birthmonth - 2 + 12) mod 12) + 1';
  (s as any).temp_action_right_month = 'birthmonth = ((birthmonth + 12) mod 12) + 1';
  (s as any).result = qspFunc(s, 'intro_overview', 'render_cell', 'Birth Month', (((s as any).monthName ?? 0)?.[String((s as any).birthmonth ?? 0)] ?? 0), 0, ((s as any).temp_action_left_month ?? 0), ((s as any).temp_action_right_month ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetBirthyearSetter(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_dob = (((s as any).birthyear ?? 0) * 10000) + (((s as any).birthmonth ?? 0) * 100) + ((s as any).birthday ?? 0);
  qspCall(s, 'time', 'to_date', ((s as any).daystart_start ?? 0));
  (s as any).temp_age_start = (((s as any).dateVars ?? {})?.['year'] ?? 0) - ((s as any).birthyear ?? 0);
  if ((((s as any).dateVars ?? 0)?.['month'] * 100) + ((s as any).dateVars ?? 0)?.['day'] < (((s as any).birthmonth ?? 0) * 100) + ((s as any).birthday ?? 0)) {
    (s as any).temp_age_start = ((s as any).temp_age_start ?? 0) - (1);
  }
  (s as any).result = qspFunc(s, 'intro_overview', 'render_cell', 'Birth Year', '' + ((s as any).birthyear ?? 0) + ' (Age ' + ((s as any).temp_age_start ?? 0) + ')', 2);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetHaircolorSetter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'body_desc', 'hair');
  (s as any).temp_action_left_hair = 'pcs_haircol = (pcs_haircol + 3) mod 4';
  (s as any).temp_action_right_hair = 'pcs_haircol = (pcs_haircol + 1) mod 4';
  (s as any).temp_value_hair = (String((String(((s as any).pcs_haircolor ?? 0)).slice((1)-1, ((1)-1)+(1)))).toUpperCase()) + (String(((s as any).pcs_haircolor ?? 0)).slice((2)-1));
  (s as any).result = qspFunc(s, 'intro_overview', 'render_cell', 'Hair Color', ((s as any).temp_value_hair ?? 0), 0, ((s as any).temp_action_left_hair ?? 0), ((s as any).temp_action_right_hair ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetHairlengthSetter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'body_desc', 'hair');
  qspCall(s, 'intro_character_creation', 'set_hair_next_prev');
  (s as any).temp_action_left_hair_length = 'pcs_hairlng = ' + ((s as any).hairlng_prev ?? 0);
  (s as any).temp_action_right_hair_length = 'pcs_hairlng = ' + ((s as any).hairlng_next ?? 0);
  (s as any).temp_value_hair_length = (String((String((((s as any).pc_descWordy ?? 0)?.['hair length'])).slice((1)-1, ((1)-1)+(1)))).toUpperCase()) + (String((((s as any).pc_descWordy ?? 0)?.['hair length'])).slice((2)-1));
  (s as any).result = qspFunc(s, 'intro_overview', 'render_cell', 'Hair Length', ((s as any).temp_value_hair_length ?? 0), 0, ((s as any).temp_action_left_hair_length ?? 0), ((s as any).temp_action_right_hair_length ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetHairtypeSetter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'body_desc', 'hair');
  (s as any).temp_action_hair_type = (((!((s as any).defcurly ?? 0))) ? ('defcurly = 1 & curly = 2147483647') : ('defcurly = 0 & curly = 0'));
  (s as any).temp_value_hair_type = (((!((s as any).defcurly ?? 0))) ? ('Straight') : ('Curly'));
  (s as any).result = qspFunc(s, 'intro_overview', 'render_cell', 'Hair Type', ((s as any).temp_value_hair_type ?? 0), 0, ((s as any).temp_action_hair_type ?? 0), ((s as any).temp_action_hair_type ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetEyecolorSetter(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).pcs_eyecol ?? 0))) {
    (s as any).temp_value_eye_color = 'Brown';
  }
  if (((s as any).pcs_eyecol ?? 0) === 1) {
    (s as any).temp_value_eye_color = 'Grey';
  }
  if (((s as any).pcs_eyecol ?? 0) === 2) {
    (s as any).temp_value_eye_color = 'Green';
  }
  if (((s as any).pcs_eyecol ?? 0) === 3) {
    (s as any).temp_value_eye_color = 'Blue';
  }
  (s as any).temp_action_left_eye_color = 'pcs_eyecol = (pcs_eyecol + 3) mod 4';
  (s as any).temp_action_right_eye_color = 'pcs_eyecol = (pcs_eyecol + 1) mod 4';
  (s as any).result = qspFunc(s, 'intro_overview', 'render_cell', 'Eye Color', ((s as any).temp_value_eye_color ?? 0), 0, ((s as any).temp_action_left_eye_color ?? 0), ((s as any).temp_action_right_eye_color ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetEyesizeSetter(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).pcs_eyesize ?? 0))) {
    (s as any).temp_value_eye_size = 'Small';
  }
  if (((s as any).pcs_eyesize ?? 0) === 1) {
    (s as any).temp_value_eye_size = 'Average';
  }
  if (((s as any).pcs_eyesize ?? 0) === 2) {
    (s as any).temp_value_eye_size = 'Large';
  }
  if (((s as any).pcs_eyesize ?? 0) === 3) {
    (s as any).temp_value_eye_size = 'Huge';
  }
  (s as any).temp_action_left_eye_size = 'pcs_eyesize = (pcs_eyesize + 3) mod 4';
  (s as any).temp_action_right_eye_size = 'pcs_eyesize = (pcs_eyesize + 1) mod 4';
  (s as any).result = qspFunc(s, 'intro_overview', 'render_cell', 'Eye Size', ((s as any).temp_value_eye_size ?? 0), 0, ((s as any).temp_action_left_eye_size ?? 0), ((s as any).temp_action_right_eye_size ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetEyelashesSetter(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).pcs_lashes ?? 0))) {
    (s as any).temp_value_lashes = 'Short';
  }
  if (((s as any).pcs_lashes ?? 0) === 1) {
    (s as any).temp_value_lashes = 'Average';
  }
  if (((s as any).pcs_lashes ?? 0) === 2) {
    (s as any).temp_value_lashes = 'Long';
  }
  if (((s as any).pcs_lashes ?? 0) === 3) {
    (s as any).temp_value_lashes = 'Lavish';
  }
  (s as any).temp_action_left_lashes = 'pcs_lashes = (pcs_lashes + 3) mod 4';
  (s as any).temp_action_right_lashes = 'pcs_lashes = (pcs_lashes + 1) mod 4';
  (s as any).result = qspFunc(s, 'intro_overview', 'render_cell', 'Eyelashes', ((s as any).temp_value_lashes ?? 0), 0, ((s as any).temp_action_left_lashes ?? 0), ((s as any).temp_action_right_lashes ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetEyesightSetter(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_action_sight = (((!((s as any).glass ?? 0))) ? ('glass = 1') : ('glass = 0'));
  (s as any).temp_value_sight = (((!((s as any).glass ?? 0))) ? ('Normal') : ('Glasses'));
  (s as any).result = qspFunc(s, 'intro_overview', 'render_cell', 'Eyesight', ((s as any).temp_value_sight ?? 0), 0, ((s as any).temp_action_sight ?? 0), ((s as any).temp_action_sight ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetLipsizeSetter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'body_desc', 'lips');
  (s as any).temp_action_left_lipsize = 'pcs_lip = (pcs_lip + 4) mod 5';
  (s as any).temp_action_right_lipsize = 'pcs_lip = (pcs_lip + 1) mod 5';
  (s as any).temp_value_lipsize = (String((String(((s as any).pcs_lipSize ?? 0)).slice((1)-1, ((1)-1)+(1)))).toUpperCase()) + (String(((s as any).pcs_lipSize ?? 0)).slice((2)-1));
  (s as any).result = qspFunc(s, 'intro_overview', 'render_cell', 'Lip Size', ((s as any).temp_value_lipsize ?? 0), 0, ((s as any).temp_action_left_lipsize ?? 0), ((s as any).temp_action_right_lipsize ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetTeethSetter(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_action_left_teeth = 'pcs_teeth = ((pcs_teeth + 1 + 3) mod 4) - 1';
  (s as any).temp_action_right_teeth = 'pcs_teeth = ((pcs_teeth + 1 + 1) mod 4) - 1';
  (s as any).temp_value_teeth = ((((s as any).pcs_teeth ?? 0) === -1) ? ('Good') : ((((!((s as any).pcs_teeth ?? 0))) ? ('Average') : (((((s as any).pcs_teeth ?? 0) === 1) ? ('Bad') : ('Very Bad'))))));
  (s as any).result = qspFunc(s, 'intro_overview', 'render_cell', 'Teeth Health', ((s as any).temp_value_teeth ?? 0), 0, ((s as any).temp_action_left_teeth ?? 0), ((s as any).temp_action_right_teeth ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetHeightSetter(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_action_left_height = 'pcs_hgt = $func(\'math\', \'int_clamp\', pcs_hgt - 1, 150, 180)';
  (s as any).temp_action_right_height = 'pcs_hgt = $func(\'math\', \'int_clamp\', pcs_hgt + 1, 150, 180)';
  (s as any).temp_inches = (((s as any).pcs_hgt ?? 0) * 100 + 127) / 254;
  (s as any).temp_value_height = ((s as any).pcs_hgt ?? 0) + ' cm (' + ((s as any).temp_inches ?? 0) / 12 + '\'' + ((s as any).temp_inches ?? 0) % 12 + '")';
  (s as any).result = qspFunc(s, 'intro_overview', 'render_cell', 'Height', ((s as any).temp_value_height ?? 0), 0, ((s as any).temp_action_left_height ?? 0), ((s as any).temp_action_right_height ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetPortraitSetter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).face_style ?? 0)?.['type'] === 0) {
    (s as any).temp_value_portrait = 'Dynamic';
    (s as any).temp_action_left_portrait = 'gs \'intro_overview\', \'set_portrait_mode\', 2';
    (s as any).temp_action_right_portrait = 'gs \'intro_overview\', \'set_portrait_mode\', 1';
  } else {
    if (((s as any).face_style ?? 0)?.['type'] === 1) {
      (s as any).temp_value_portrait = 'Custom';
      (s as any).temp_action_left_portrait = 'gs \'intro_overview\', \'set_portrait_mode\', 0';
      (s as any).temp_action_right_portrait = 'gs \'intro_overview\', \'set_portrait_mode\', 2';
    } else {
      if (((s as any).face_style ?? 0)?.['type'] === 2) {
        (s as any).temp_value_portrait = 'Rendered';
        (s as any).temp_action_left_portrait = 'gs \'intro_overview\', \'set_portrait_mode\', 1';
        (s as any).temp_action_right_portrait = 'gs \'intro_overview\', \'set_portrait_mode\', 0';
      }
    }
  }
  (s as any).result = qspFunc(s, 'intro_overview', 'render_cell', 'Portrait Mode', ((s as any).temp_value_portrait ?? 0), 0, ((s as any).temp_action_left_portrait ?? 0), ((s as any).temp_action_right_portrait ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetBodyweightSetter(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_action_left_bodyweight = 'pcs_mass[\'body\'] = func(\'math\', \'int_clamp\', pcs_mass[\'body\'] - 5, 5, 200)';
  (s as any).temp_action_right_bodyweight = 'pcs_mass[\'body\'] = func(\'math\', \'int_clamp\', pcs_mass[\'body\'] + 5, 5, 200)';
  (s as any).temp_est_weight_bw = (2820 + 33 * ((((s as any).pcs_mass ?? {})?.['body'] ?? 0) + (((s as any).pcs_mass ?? {})?.['bust_gen'] ?? 0) + (((s as any).pcs_mass ?? {})?.['butt_gen'] ?? 0)) + 70 * (((s as any).pcs_hgt ?? 0) - 165)) / 100;
  (s as any).temp_lbs = (((s as any).temp_est_weight_bw ?? 0) * 1000 + 453) / 454;
  (s as any).temp_value_bodyweight = ((s as any).temp_est_weight_bw ?? 0) + ' kg (' + ((s as any).temp_lbs ?? 0) + ' lbs)';
  (s as any).result = qspFunc(s, 'intro_overview', 'render_cell', 'Est. Body Weight', ((s as any).temp_value_bodyweight ?? 0), 0, ((s as any).temp_action_left_bodyweight ?? 0), ((s as any).temp_action_right_bodyweight ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetBustSetter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_mass ?? 0)?.['bust_gen'] <= 2) {
    (s as any).temp_value_bust = 'Very Small';
  } else {
    if (((s as any).pcs_mass ?? 0)?.['bust_gen'] <= 7) {
      (s as any).temp_value_bust = 'Below Average';
    } else {
      if (((s as any).pcs_mass ?? 0)?.['bust_gen'] <= 12) {
        (s as any).temp_value_bust = 'Average';
      } else {
        if (((s as any).pcs_mass ?? 0)?.['bust_gen'] <= 17) {
          (s as any).temp_value_bust = 'Above Average';
        } else {
          if (((s as any).pcs_mass ?? 0)?.['bust_gen'] <= 22) {
            (s as any).temp_value_bust = 'Large';
          } else {
            if (((s as any).pcs_mass ?? 0)?.['bust_gen'] <= 27) {
              (s as any).temp_value_bust = 'Extra Large';
            } else {
              if (((s as any).pcs_mass ?? 0)?.['bust_gen'] <= 32) {
                (s as any).temp_value_bust = 'Really Big';
              } else {
                if (((s as any).pcs_mass ?? 0)?.['bust_gen'] <= 37) {
                  (s as any).temp_value_bust = 'Massive';
                } else {
                  if (((s as any).pcs_mass ?? 0)?.['bust_gen'] <= 42) {
                    (s as any).temp_value_bust = 'Enormous';
                  } else {
                    (s as any).temp_value_bust = 'Silly Big';
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  (s as any).temp_action_left_bust = 'pcs_mass[\'bust_gen\'] = iif(pcs_mass[\'bust_gen\'] <= 2, 42, func(\'math\', \'int_clamp\', pcs_mass[\'bust_gen\'] - 5, 2, 42))';
  (s as any).temp_action_right_bust = 'pcs_mass[\'bust_gen\'] = iif(pcs_mass[\'bust_gen\'] >= 42, 2, func(\'math\', \'int_clamp\', pcs_mass[\'bust_gen\'] + 5, 2, 42))';
  (s as any).result = qspFunc(s, 'intro_overview', 'render_cell', 'Genetic Bust Size', ((s as any).temp_value_bust ?? 0), 0, ((s as any).temp_action_left_bust ?? 0), ((s as any).temp_action_right_bust ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetButtSetter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_mass ?? 0)?.['butt_gen'] <= 2) {
    (s as any).temp_value_butt = 'Flat';
  } else {
    if (((s as any).pcs_mass ?? 0)?.['butt_gen'] <= 7) {
      (s as any).temp_value_butt = 'Mostly Flat';
    } else {
      if (((s as any).pcs_mass ?? 0)?.['butt_gen'] <= 12) {
        (s as any).temp_value_butt = 'Small';
      } else {
        if (((s as any).pcs_mass ?? 0)?.['butt_gen'] <= 17) {
          (s as any).temp_value_butt = 'Below Average';
        } else {
          if (((s as any).pcs_mass ?? 0)?.['butt_gen'] <= 22) {
            (s as any).temp_value_butt = 'Average';
          } else {
            if (((s as any).pcs_mass ?? 0)?.['butt_gen'] <= 27) {
              (s as any).temp_value_butt = 'Above Average';
            } else {
              if (((s as any).pcs_mass ?? 0)?.['butt_gen'] <= 32) {
                (s as any).temp_value_butt = 'Big';
              } else {
                if (((s as any).pcs_mass ?? 0)?.['butt_gen'] <= 37) {
                  (s as any).temp_value_butt = 'Massive';
                } else {
                  if (((s as any).pcs_mass ?? 0)?.['butt_gen'] <= 42) {
                    (s as any).temp_value_butt = 'Enormous';
                  } else {
                    (s as any).temp_value_butt = 'Silly Big';
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  (s as any).temp_action_left_butt = 'pcs_mass[\'butt_gen\'] = iif(pcs_mass[\'butt_gen\'] > 2, func(\'math\', \'int_clamp\', pcs_mass[\'butt_gen\'] - 5, 2, 42), 42)';
  (s as any).temp_action_right_butt = 'pcs_mass[\'butt_gen\'] = iif(pcs_mass[\'butt_gen\'] < 42, func(\'math\', \'int_clamp\', pcs_mass[\'butt_gen\'] + 5, 2, 42), 2)';
  (s as any).result = qspFunc(s, 'intro_overview', 'render_cell', 'Genetic Butt Size', ((s as any).temp_value_butt ?? 0), 0, ((s as any).temp_action_left_butt ?? 0), ((s as any).temp_action_right_butt ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetEstBmi(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_est_weight = (2820 + 33 * ((((s as any).pcs_mass ?? {})?.['body'] ?? 0) + (((s as any).pcs_mass ?? {})?.['bust_gen'] ?? 0) + (((s as any).pcs_mass ?? {})?.['butt_gen'] ?? 0)) + 70 * (((s as any).pcs_hgt ?? 0) - 165));
  (s as any).temp_est_bmi2 = ((s as any).temp_est_weight ?? 0) * 1000 / (((s as any).pcs_hgt ?? 0) * ((s as any).pcs_hgt ?? 0));
  (s as any).temp_est_bmi_str = (((s as any).temp_est_bmi2 ?? 0) / 10) + '.' + (((s as any).temp_est_bmi2 ?? 0) % 10);
  if (((s as any).temp_est_bmi2 ?? 0) < 160) {
    (s as any).temp_est_bmi_cat = 'Starving';
  } else {
    if (((s as any).temp_est_bmi2 ?? 0) < 190) {
      (s as any).temp_est_bmi_cat = 'Underweight';
    } else {
      if (((s as any).temp_est_bmi2 ?? 0) < 220) {
        (s as any).temp_est_bmi_cat = 'Slender';
      } else {
        if (((s as any).temp_est_bmi2 ?? 0) < 250) {
          (s as any).temp_est_bmi_cat = 'Healthy';
        } else {
          if (((s as any).temp_est_bmi2 ?? 0) < 300) {
            (s as any).temp_est_bmi_cat = 'Overweight';
          } else {
            if (((s as any).temp_est_bmi2 ?? 0) < 350) {
              (s as any).temp_est_bmi_cat = 'Very Overweight';
            } else {
              if (((s as any).temp_est_bmi2 ?? 0) < 400) {
                (s as any).temp_est_bmi_cat = 'Moderately Obese';
              } else {
                if (((s as any).temp_est_bmi2 ?? 0) < 450) {
                  (s as any).temp_est_bmi_cat = 'Severely Obese';
                } else {
                  (s as any).temp_est_bmi_cat = 'Morbidly Obese';
                }
              }
            }
          }
        }
      }
    }
  }
  (s as any).result = qspFunc(s, 'intro_overview', 'render_cell', 'Est. BMI', ((s as any).temp_est_bmi_str ?? 0) + ' (' + ((s as any).temp_est_bmi_cat ?? 0) + ')', 2);
  // TODO-QSP: end
  scene.build();
}

function enterGetStartTypeLocSetter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).start_type ?? 0)?.['cat'] === 'custom') {
    (s as any).temp_template_call = '';
  } else {
    (s as any).temp_template_call = ' & gs \'intro_character_templates\', \'set_template\', $start_type[\'cat\']';
  }
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
    (s as any).temp_value_setting = 'School Girl';
    (s as any).temp_action_left_setting = '$start_type[\'loc\'] = \'city\' & gs \'intro_initialization\', \'init_time\'' + ((s as any).temp_template_call ?? 0);
    (s as any).temp_action_right_setting = '$start_type[\'loc\'] = \'uni\' & gs \'intro_initialization\', \'init_time\'' + ((s as any).temp_template_call ?? 0);
  } else {
    if (((s as any).start_type ?? 0)?.['loc'] === 'uni') {
      (s as any).temp_value_setting = 'University';
      (s as any).temp_action_left_setting = '$start_type[\'loc\'] = \'sg\' & gs \'intro_initialization\', \'init_time\'' + ((s as any).temp_template_call ?? 0);
      (s as any).temp_action_right_setting = '$start_type[\'loc\'] = \'city\' & gs \'intro_initialization\', \'init_time\'' + ((s as any).temp_template_call ?? 0);
    } else {
      (s as any).temp_value_setting = 'City';
      (s as any).temp_action_left_setting = '$start_type[\'loc\'] = \'uni\' & gs \'intro_initialization\', \'init_time\'' + ((s as any).temp_template_call ?? 0);
      (s as any).temp_action_right_setting = '$start_type[\'loc\'] = \'sg\' & gs \'intro_initialization\', \'init_time\'' + ((s as any).temp_template_call ?? 0);
    }
  }
  (s as any).result = qspFunc(s, 'intro_overview', 'render_cell', 'Setting', ((s as any).temp_value_setting ?? 0), 0, ((s as any).temp_action_left_setting ?? 0), ((s as any).temp_action_right_setting ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetStartTypeMagicSetter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).start_type ?? 0)?.['magic'] === 'nomagic') {
    (s as any).temp_action_left_type = '$start_type[\'magic\'] = \'magic\'';
    (s as any).temp_action_right_type = '$start_type[\'magic\'] = \'tg\'';
    (s as any).temp_value_type = 'Regular';
  } else {
    if (((s as any).start_type ?? 0)?.['magic'] === 'magic') {
      (s as any).temp_action_left_type = '$start_type[\'magic\'] = \'tg\'';
      (s as any).temp_action_right_type = '$start_type[\'magic\'] = \'nomagic\'';
      (s as any).temp_value_type = 'Magical';
    } else {
      (s as any).temp_action_left_type = '$start_type[\'magic\'] = \'nomagic\'';
      (s as any).temp_action_right_type = '$start_type[\'magic\'] = \'magic\'';
      (s as any).temp_value_type = 'Transformation';
    }
  }
  (s as any).result = qspFunc(s, 'intro_overview', 'render_cell', 'Game Type', ((s as any).temp_value_type ?? 0), 0, ((s as any).temp_action_left_type ?? 0), ((s as any).temp_action_right_type ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetStartTypeGroupSetter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).start_type ?? 0)?.['group'] === 'cool') {
    (s as any).temp_value_group = 'Popular';
  } else {
    (s as any).temp_value_group = (String((String((((s as any).start_type ?? 0)?.['group'])).slice((1)-1, ((1)-1)+(1)))).toUpperCase()) + (String((((s as any).start_type ?? 0)?.['group'])).slice((2)-1));
  }
  if (((s as any).start_type ?? 0)?.['cat'] === 'custom') {
    (s as any).result = qspFunc(s, 'intro_overview', 'render_cell', 'Social Group', ((s as any).temp_value_group ?? 0), 2);
  } else {
    (s as any).temp_action_left_group = 'gs \'intro_overview\', \'cycle_group\', -1';
    (s as any).temp_action_right_group = 'gs \'intro_overview\', \'cycle_group\', 1';
    (s as any).result = qspFunc(s, 'intro_overview', 'render_cell', 'Social Group', ((s as any).temp_value_group ?? 0), 0, ((s as any).temp_action_left_group ?? 0), ((s as any).temp_action_right_group ?? 0));
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetStartTypeCatSetter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).start_type ?? 0)?.['cat'] === 'custom') {
    (s as any).result = qspFunc(s, 'intro_overview', 'render_cell', 'Background', 'Custom', 2);
  } else {
    if (((s as any).start_type ?? 0)?.['cat'] === 'goodgirl') {
      (s as any).temp_value_cat = 'Good Girl';
    } else {
      if (((s as any).start_type ?? 0)?.['cat'] === 'uglyduckling') {
        (s as any).temp_value_cat = 'Ugly Duckling';
      } else {
        if (((s as any).start_type ?? 0)?.['cat'] === 'gopnikstart') {
          (s as any).temp_value_cat = 'Gopnik';
        } else {
          if (((s as any).start_type ?? 0)?.['cat'] === 'vitekgf') {
            (s as any).temp_value_cat = 'Vitek\'s Girlfriend';
          } else {
            if (((s as any).start_type ?? 0)?.['cat'] === 'nerdqueen') {
              (s as any).temp_value_cat = 'Nerd Queen';
            } else {
              if (((s as any).start_type ?? 0)?.['cat'] === 'goodstudent') {
                (s as any).temp_value_cat = 'Good Student';
              } else {
                if (((s as any).start_type ?? 0)?.['cat'] === 'computergeek') {
                  (s as any).temp_value_cat = 'Computer Geek';
                } else {
                  if (((s as any).start_type ?? 0)?.['cat'] === 'chessplayer') {
                    (s as any).temp_value_cat = 'Chess Player';
                  } else {
                    (s as any).temp_value_cat = (String((String((((s as any).start_type ?? 0)?.['cat'])).slice((1)-1, ((1)-1)+(1)))).toUpperCase()) + (String((((s as any).start_type ?? 0)?.['cat'])).slice((2)-1));
                  }
                }
              }
            }
          }
        }
      }
    }
    (s as any).temp_action_left_cat = 'gs \'intro_overview\', \'cycle_subgroup\', -1';
    (s as any).temp_action_right_cat = 'gs \'intro_overview\', \'cycle_subgroup\', 1';
    (s as any).result = qspFunc(s, 'intro_overview', 'render_cell', 'Background', ((s as any).temp_value_cat ?? 0), 0, ((s as any).temp_action_left_cat ?? 0), ((s as any).temp_action_right_cat ?? 0));
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetStartLocationSetter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
    (s as any).temp_action_left_loc = 'start_location = (start_location + 3) mod 4';
    (s as any).temp_action_right_loc = 'start_location = (start_location + 1) mod 4';
    if (((s as any).start_location ?? 0) === 1) {
      (s as any).temp_value_loc = 'Grandparents (Gadukino)';
    } else {
      if (((s as any).start_location ?? 0) === 2) {
        (s as any).temp_value_loc = 'Renting (Pushkin)';
      } else {
        if (((s as any).start_location ?? 0) === 3) {
          (s as any).temp_value_loc = 'Sharing (Pavlovsk)';
        } else {
          (s as any).temp_value_loc = 'Parents (Pavlovsk)';
        }
      }
    }
    (s as any).result = qspFunc(s, 'intro_overview', 'render_cell', 'Start Location', ((s as any).temp_value_loc ?? 0), 0, ((s as any).temp_action_left_loc ?? 0), ((s as any).temp_action_right_loc ?? 0));
  } else {
    if (((s as any).start_type ?? 0)?.['loc'] === 'uni') {
      (s as any).result = qspFunc(s, 'intro_overview', 'render_cell', 'Start Location', 'University Dorms', 2);
    } else {
      (s as any).result = qspFunc(s, 'intro_overview', 'render_cell', 'Start Location', 'City Apartment', 2);
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetStartTimeSetter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
    if (((s as any).daystart_start ?? 0) === 153) {
      (s as any).temp_value_starttime = 'June 1st, 2016';
    }
    if (((s as any).daystart_start ?? 0) === 183) {
      (s as any).temp_value_starttime = 'July 1st, 2016';
    }
    if (((s as any).daystart_start ?? 0) === 214) {
      (s as any).temp_value_starttime = 'August 1st, 2016';
    }
    if (((s as any).daystart_start ?? 0) !== 153  &&  ((s as any).daystart_start ?? 0) !== 183  &&  ((s as any).daystart_start ?? 0) !== 214) {
      (s as any).temp_value_starttime = 'August 26th, 2016';
    }
    (s as any).temp_action_left_starttime = 'gs \'intro_overview\', \'cycle_sg_time\', -1';
    (s as any).temp_action_right_starttime = 'gs \'intro_overview\', \'cycle_sg_time\', 1';
    (s as any).result = qspFunc(s, 'intro_overview', 'render_cell', 'Start Date', ((s as any).temp_value_starttime ?? 0), 0, ((s as any).temp_action_left_starttime ?? 0), ((s as any).temp_action_right_starttime ?? 0));
  } else {
    if (((s as any).start_type ?? 0)?.['loc'] === 'city') {
      (s as any).result = qspFunc(s, 'intro_overview', 'render_cell', 'Start Date', 'June 4th, 2017', 2);
    } else {
      (s as any).result = qspFunc(s, 'intro_overview', 'render_cell', 'Start Date', 'August 25th, 2017', 2);
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetTrait(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'traits', '$ARGS[1]', 'overview');
  (s as any).result = qspFunc(s, 'intro_overview', 'render_cell', (((s as any).trait_temp ?? 0)?.['ov_label']), (((s as any).trait_temp ?? 0)?.['ov_val']), 0, (((s as any).trait_temp ?? 0)?.['ov_left']), (((s as any).trait_temp ?? 0)?.['ov_right']));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetArchetypes(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_tr_name = ((s as any).locArgs?.[1] ?? 0);
  (s as any).temp_tr_display = (String((String(((s as any).temp_tr_name ?? 0)).slice((1)-1, ((1)-1)+(1)))).toUpperCase()) + (String(((s as any).temp_tr_name ?? 0)).slice((2)-1));
  (s as any).temp_tr_val_label = qspFunc(s, 'intro_overview', 'get_archetype_label', (((s as any).arch_vars ?? 0)?.[((s as any).temp_tr_name ?? 0) + '_points'] ?? 0));
  // TODO-QSP: $temp_tr_val_label += ' (' + arch_vars[$temp_tr_name + '_points'] / 250 + ')'
  (s as any).temp_tr_left = 'arch_vars[\'' + ((s as any).temp_tr_name ?? 0) + '_points\'] = func(\'math\', \'int_clamp\', arch_vars[\'' + ((s as any).temp_tr_name ?? 0) + '_points\'] - 25000, 0, 500000)';
  (s as any).temp_tr_right = 'arch_vars[\'' + ((s as any).temp_tr_name ?? 0) + '_points\'] = func(\'math\', \'int_clamp\', arch_vars[\'' + ((s as any).temp_tr_name ?? 0) + '_points\'] + 25000, 0, 500000)';
  (s as any).result = qspFunc(s, 'intro_overview', 'render_cell', ((s as any).temp_tr_display ?? 0), ((s as any).temp_tr_val_label ?? 0), 0, ((s as any).temp_tr_left ?? 0), ((s as any).temp_tr_right ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetPassportSetter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).start_type ?? 0) === 'sg') {
    (s as any).result = qspFunc(s, 'intro_overview', 'render_cell', 'Fake Passport', ((((s as any).fakepassport ?? 0) > 0) ? ('Yes') : ('No')), 1, 'fakepassport = 1 - fakepassport');
  } else {
    (s as any).result = qspFunc(s, 'intro_overview', 'render_cell', 'Passport', 'Yes', 2);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetSecretaryLicenceSetter(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'intro_overview', 'render_cell', 'Secretary Certificate', ((((s as any).license ?? 0)?.['secretary'] > 0) ? ('Yes') : ('No')), 1, 'license[\'secretary\'] = 1 - license[\'secretary\']');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetMasseuseLicenceSetter(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'intro_overview', 'render_cell', 'Masseuse Certificate', ((((s as any).license ?? 0)?.['masseuse'] > 0) ? ('Yes') : ('No')), 1, 'license[\'masseuse\'] = 1 - license[\'masseuse\']');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetUmbrellaSetter(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'intro_overview', 'render_cell', 'Umbrella', ((((s as any).mc_inventory ?? 0)?.['umbrella'] > 0) ? ('Yes') : ('No')), 1, 'mc_inventory[\'umbrella\'] = 1 - mc_inventory[\'umbrella\']');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetCombSetter(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'intro_overview', 'render_cell', 'Comb', ((((s as any).mc_inventory ?? 0)?.['comb'] > 0) ? ('Yes') : ('No')), 1, 'mc_inventory[\'comb\'] = 1 - mc_inventory[\'comb\']');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetMirrorSetter(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'intro_overview', 'render_cell', 'Portable Mirror', ((((s as any).mc_inventory ?? 0)?.['travel_mirror'] > 0) ? ('Yes') : ('No')), 1, 'mc_inventory[\'travel_mirror\'] = 1 - mc_inventory[\'travel_mirror\']');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetWaterBottleSetter(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'intro_overview', 'render_cell', 'Water Bottle', ((((s as any).mc_inventory ?? 0)?.['refill_bottle'] > 0) ? ('Yes') : ('No')), 1, 'mc_inventory[\'refill_bottle\'] = 1 - mc_inventory[\'refill_bottle\']');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetSkippingRopeSetter(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'intro_overview', 'render_cell', 'Skipping Rope', ((((s as any).mc_inventory ?? 0)?.['skipping_rope'] > 0) ? ('Yes') : ('No')), 1, 'mc_inventory[\'skipping_rope\'] = 1 - mc_inventory[\'skipping_rope\']');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetHulaHoopSetter(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'intro_overview', 'render_cell', 'Hula Hoop', ((((s as any).mc_inventory ?? 0)?.['hula_hoop'] > 0) ? ('Yes') : ('No')), 1, 'mc_inventory[\'hula_hoop\'] = 1 - mc_inventory[\'hula_hoop\']');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetYogaBookSetter(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'intro_overview', 'render_cell', 'Yoga Book', ((((s as any).mc_inventory ?? 0)?.['book_yoga'] > 0) ? ('Yes') : ('No')), 1, 'mc_inventory[\'book_yoga\'] = 1 - mc_inventory[\'book_yoga\']');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetIceSkatesSetter(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'intro_overview', 'render_cell', 'Ice Skates', ((((s as any).mc_inventory ?? 0)?.['ice_skates'] > 0) ? ('Yes') : ('No')), 1, 'mc_inventory[\'ice_skates\'] = 1 - mc_inventory[\'ice_skates\']');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetSewingKitSetter(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'intro_overview', 'render_cell', 'Sewing Kit', ((((s as any).mc_inventory ?? 0)?.['sewing_kit'] > 0) ? ('Yes') : ('No')), 1, 'mc_inventory[\'sewing_kit\'] = 1 - mc_inventory[\'sewing_kit\']');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetVibratorSetter(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'intro_overview', 'render_cell', 'Vibrator', ((((s as any).mc_inventory ?? 0)?.['vibe'] > 0) ? ('Yes') : ('No')), 1, 'mc_inventory[\'vibe\'] = 1 - mc_inventory[\'vibe\']');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetButtPlugSetter(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'intro_overview', 'render_cell', 'Butt Plug', ((((s as any).mc_inventory ?? 0)?.['buttplug'] > 0) ? ('Yes') : ('No')), 1, 'mc_inventory[\'buttplug\'] = 1 - mc_inventory[\'buttplug\']');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetMoneySetter(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'intro_overview', 'render_cell', 'Starting Money', '' + ((s as any).money ?? 0) + '₽', 0, 'money = func(math, int_clamp, money - 1000, 0, 10000)', 'money = func(math, int_clamp, money + 1000, 0, 10000)');
  return;
  // TODO-QSP: end
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
  (s as any).temp_group_idx = (((s as any).temp_group_idx ?? 0) + ((s as any).locArgs?.[1] ?? 0) + 5) % 5;
  if ((!((s as any).temp_group_idx ?? 0))) {
    ((s as any).start_type = (s as any).start_type ?? {})['group'] = 'nerd';
    ((s as any).start_type = (s as any).start_type ?? {})['cat'] = 'nerdqueen';
  } else {
    if (((s as any).temp_group_idx ?? 0) === 1) {
      ((s as any).start_type = (s as any).start_type ?? {})['group'] = 'jock';
      ((s as any).start_type = (s as any).start_type ?? {})['cat'] = 'volleyball';
    } else {
      if (((s as any).temp_group_idx ?? 0) === 2) {
        ((s as any).start_type = (s as any).start_type ?? {})['group'] = 'cool';
        ((s as any).start_type = (s as any).start_type ?? {})['cat'] = 'socialite';
      } else {
        if (((s as any).temp_group_idx ?? 0) === 3) {
          ((s as any).start_type = (s as any).start_type ?? {})['group'] = 'gopnik';
          ((s as any).start_type = (s as any).start_type ?? {})['cat'] = 'gopnikstart';
        } else {
          if (((s as any).temp_group_idx ?? 0) === 4) {
            ((s as any).start_type = (s as any).start_type ?? {})['group'] = 'outcast';
            ((s as any).start_type = (s as any).start_type ?? {})['cat'] = 'friendless';
          }
        }
      }
    }
  }
  qspCall(s, 'intro_character_templates', 'set_template', (((s as any).start_type ?? 0)?.['cat']));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCycleSubgroup(s: GameState, scene: SceneBuilder): void {
  if (((s as any).start_type ?? 0)?.['cat'] === 'custom') {
    // TODO-QSP: exit
  }
  if (((s as any).start_type ?? 0)?.['group'] === 'nerd') {
    if (((s as any).start_type ?? 0)?.['cat'] === 'nerdqueen') {
      ((s as any).start_type = (s as any).start_type ?? {})['cat'] = ((String((s as any).locArgs?.[1] ?? '') === 1) ? ('goodstudent') : ('chessplayer'));
    } else {
      if (((s as any).start_type ?? 0)?.['cat'] === 'goodstudent') {
        ((s as any).start_type = (s as any).start_type ?? {})['cat'] = ((String((s as any).locArgs?.[1] ?? '') === 1) ? ('computergeek') : ('nerdqueen'));
      } else {
        if (((s as any).start_type ?? 0)?.['cat'] === 'computergeek') {
          ((s as any).start_type = (s as any).start_type ?? {})['cat'] = ((String((s as any).locArgs?.[1] ?? '') === 1) ? ('chessplayer') : ('goodstudent'));
        } else {
          if (((s as any).start_type ?? 0)?.['cat'] === 'chessplayer') {
            ((s as any).start_type = (s as any).start_type ?? {})['cat'] = ((String((s as any).locArgs?.[1] ?? '') === 1) ? ('nerdqueen') : ('computergeek'));
          }
        }
      }
    }
  } else {
    if (((s as any).start_type ?? 0)?.['group'] === 'jock') {
      if (((s as any).start_type ?? 0)?.['cat'] === 'volleyball') {
        ((s as any).start_type = (s as any).start_type ?? {})['cat'] = ((String((s as any).locArgs?.[1] ?? '') === 1) ? ('dancer') : ('football'));
      } else {
        if (((s as any).start_type ?? 0)?.['cat'] === 'dancer') {
          ((s as any).start_type = (s as any).start_type ?? {})['cat'] = ((String((s as any).locArgs?.[1] ?? '') === 1) ? ('runner') : ('volleyball'));
        } else {
          if (((s as any).start_type ?? 0)?.['cat'] === 'runner') {
            ((s as any).start_type = (s as any).start_type ?? {})['cat'] = ((String((s as any).locArgs?.[1] ?? '') === 1) ? ('football') : ('dancer'));
          } else {
            if (((s as any).start_type ?? 0)?.['cat'] === 'football') {
              ((s as any).start_type = (s as any).start_type ?? {})['cat'] = ((String((s as any).locArgs?.[1] ?? '') === 1) ? ('volleyball') : ('runner'));
            }
          }
        }
      }
    } else {
      if (((s as any).start_type ?? 0)?.['group'] === 'cool') {
        if (((s as any).start_type ?? 0)?.['cat'] === 'socialite') {
          ((s as any).start_type = (s as any).start_type ?? {})['cat'] = ((String((s as any).locArgs?.[1] ?? '') === 1) ? ('beautiful') : ('bimbo'));
        } else {
          if (((s as any).start_type ?? 0)?.['cat'] === 'beautiful') {
            ((s as any).start_type = (s as any).start_type ?? {})['cat'] = ((String((s as any).locArgs?.[1] ?? '') === 1) ? ('anorexic') : ('socialite'));
          } else {
            if (((s as any).start_type ?? 0)?.['cat'] === 'anorexic') {
              ((s as any).start_type = (s as any).start_type ?? {})['cat'] = ((String((s as any).locArgs?.[1] ?? '') === 1) ? ('bimbo') : ('beautiful'));
            } else {
              if (((s as any).start_type ?? 0)?.['cat'] === 'bimbo') {
                ((s as any).start_type = (s as any).start_type ?? {})['cat'] = ((String((s as any).locArgs?.[1] ?? '') === 1) ? ('socialite') : ('anorexic'));
              }
            }
          }
        }
      } else {
        if (((s as any).start_type ?? 0)?.['group'] === 'gopnik') {
          if (((s as any).start_type ?? 0)?.['cat'] === 'gopnikstart') {
            ((s as any).start_type = (s as any).start_type ?? {})['cat'] = ((String((s as any).locArgs?.[1] ?? '') === 1) ? ('troublemaker') : ('alternative'));
          } else {
            if (((s as any).start_type ?? 0)?.['cat'] === 'troublemaker') {
              if (String((s as any).locArgs?.[1] ?? '') === 1) {
                ((s as any).start_type = (s as any).start_type ?? {})['cat'] = ((((s as any).tsg ?? 0) === 1) ? ('vitekgf') : ('alternative'));
              } else {
                ((s as any).start_type = (s as any).start_type ?? {})['cat'] = 'gopnikstart';
              }
            } else {
              if (((s as any).start_type ?? 0)?.['cat'] === 'vitekgf') {
                ((s as any).start_type = (s as any).start_type ?? {})['cat'] = ((String((s as any).locArgs?.[1] ?? '') === 1) ? ('alternative') : ('troublemaker'));
              } else {
                if (((s as any).start_type ?? 0)?.['cat'] === 'alternative') {
                  if (String((s as any).locArgs?.[1] ?? '') === 1) {
                    ((s as any).start_type = (s as any).start_type ?? {})['cat'] = 'gopnikstart';
                  } else {
                    ((s as any).start_type = (s as any).start_type ?? {})['cat'] = ((((s as any).tsg ?? 0) === 1) ? ('vitekgf') : ('troublemaker'));
                  }
                }
              }
            }
          }
        } else {
          if (((s as any).start_type ?? 0)?.['group'] === 'outcast') {
            if (((s as any).start_type ?? 0)?.['cat'] === 'friendless') {
              ((s as any).start_type = (s as any).start_type ?? {})['cat'] = ((String((s as any).locArgs?.[1] ?? '') === 1) ? ('uglyduckling') : ('poor'));
            } else {
              if (((s as any).start_type ?? 0)?.['cat'] === 'uglyduckling') {
                ((s as any).start_type = (s as any).start_type ?? {})['cat'] = ((String((s as any).locArgs?.[1] ?? '') === 1) ? ('goodgirl') : ('friendless'));
              } else {
                if (((s as any).start_type ?? 0)?.['cat'] === 'goodgirl') {
                  ((s as any).start_type = (s as any).start_type ?? {})['cat'] = ((String((s as any).locArgs?.[1] ?? '') === 1) ? ('slut') : ('uglyduckling'));
                } else {
                  if (((s as any).start_type ?? 0)?.['cat'] === 'slut') {
                    ((s as any).start_type = (s as any).start_type ?? {})['cat'] = ((String((s as any).locArgs?.[1] ?? '') === 1) ? ('goth') : ('goodgirl'));
                  } else {
                    if (((s as any).start_type ?? 0)?.['cat'] === 'goth') {
                      ((s as any).start_type = (s as any).start_type ?? {})['cat'] = ((String((s as any).locArgs?.[1] ?? '') === 1) ? ('poor') : ('slut'));
                    } else {
                      if (((s as any).start_type ?? 0)?.['cat'] === 'poor') {
                        ((s as any).start_type = (s as any).start_type ?? {})['cat'] = ((String((s as any).locArgs?.[1] ?? '') === 1) ? ('friendless') : ('goth'));
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
  qspCall(s, 'intro_character_templates', 'set_template', (((s as any).start_type ?? 0)?.['cat']));
  return;
  // TODO-QSP: end
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
  (s as any).temp_sg_idx = (((s as any).temp_sg_idx ?? 0) + ((s as any).locArgs?.[1] ?? 0) + 4) % 4;
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
  // TODO-QSP: end
  scene.build();
}

function enterSetPortraitMode(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 1) {
    if (((s as any).face_style ?? 0)?.['avatar_path'] === '') {
      ((s as any).face_style = (s as any).face_style ?? {})['avatar_path'] = window.prompt("Where is the avatar image located? (Leave blank for \"images/avatar.jpg\")") ?? '';
      if (((s as any).face_style ?? 0)?.['avatar_path'] === '') {
        ((s as any).face_style = (s as any).face_style ?? {})['avatar_path'] = 'images/avatar.jpg';
      }
    }
  }
  ((s as any).face_style = (s as any).face_style ?? {})['type'] = ((s as any).locArgs?.[1] ?? 0);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetArchetypeLabel(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') <= 0) {
    (s as any).result = 'None';
  } else {
    if (String((s as any).locArgs?.[1] ?? '') <= 25000) {
      (s as any).result = 'Trace';
    } else {
      if (String((s as any).locArgs?.[1] ?? '') <= 50000) {
        (s as any).result = 'Active';
      } else {
        if (String((s as any).locArgs?.[1] ?? '') <= 75000) {
          (s as any).result = 'Low';
        } else {
          if (String((s as any).locArgs?.[1] ?? '') <= 100000) {
            (s as any).result = 'Moderate';
          } else {
            if (String((s as any).locArgs?.[1] ?? '') <= 125000) {
              (s as any).result = 'Strong';
            } else {
              if (String((s as any).locArgs?.[1] ?? '') <= 150000) {
                (s as any).result = 'Very Strong';
              } else {
                if (String((s as any).locArgs?.[1] ?? '') <= 200000) {
                  (s as any).result = 'Dominant';
                } else {
                  if (String((s as any).locArgs?.[1] ?? '') <= 300000) {
                    (s as any).result = 'Intense';
                  } else {
                    if (String((s as any).locArgs?.[1] ?? '') <= 400000) {
                      (s as any).result = 'Extreme';
                    } else {
                      (s as any).result = 'Full';
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
  // TODO-QSP: end
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
  title: 'We strongly recommend new players avoid changing them. You s',
  region: 'other',
  enter: enter,
};
