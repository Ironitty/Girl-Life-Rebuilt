import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterExport(s: GameState, scene: SceneBuilder): void {
  scene.text('Your current settings will be displayed on the next screen. Copy the entire block and save it to a text file. To restore, use Import and paste the text back.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: showstat 0
    (st as any).usehtml = 0;
    (st as any).export_str = 'cfg_vars[\'disable_autosave\'] = ' + ((st as any).cfg_vars ?? 0)?.['disable_autosave'] + '';
    // TODO-QSP: $export_str += ' & ' + "cheatVars['gameover'] = <<cheatVars['gameover']>>"
    // TODO-QSP: $export_str += ' & ' + "sound_settings['music_off'] = <<sound_settings['music_off']>>"
    // TODO-QSP: $export_str += ' & ' + "sound_settings['environment_off'] = <<sound_settings['environment_off']>>"
    // TODO-QSP: $export_str += ' & ' + "sound_settings['menu_off'] = <<sound_settings['menu_off']>>"
    // TODO-QSP: $export_str += ' & ' + "cheatVars['auto_brush'] = <<cheatVars['auto_brush']>>"
    // TODO-QSP: $export_str += ' & ' + "cheatVars['enema'] = <<cheatVars['enema']>>"
    // TODO-QSP: $export_str += ' & ' + "cheatVars['pee'] = <<cheatVars['pee']>>"
    // TODO-QSP: $export_str += ' & ' + "cheatVars['rename_porn'] = <<cheatVars['rename_porn']>>"
    // TODO-QSP: $export_str += ' & ' + "cheatVars['therapist_schedule'] = <<cheatVars['therapist_schedule']>>"
    // TODO-QSP: $export_str += ' & ' + "cfg_vars['pay_opt'] = <<cfg_vars['pay_opt']>>"
    // TODO-QSP: $export_str += ' & ' + "cfg_vars['pay_opt_backup'] = <<cfg_vars['pay_opt_backup']>>"
    // TODO-QSP: $export_str += ' & ' + "cfg_vars['income_opt'] = <<cfg_vars['income_opt']>>"
    // TODO-QSP: $export_str += ' & ' + "cfg_vars['allow_overdraft'] = <<cfg_vars['allow_overdraft']>>"
    // TODO-QSP: $export_str += ' & ' + "droutine_settings['disabled'] = <<droutine_settings['disabled']>>"
    // TODO-QSP: $export_str += ' & ' + "droutine_settings['morning_use_wake'] = <<droutine_settings['morning_use_wak...
    // TODO-QSP: $export_str += ' & ' + "droutine_settings['morning_wake_min'] = <<droutine_settings['morning_wake_mi...
    // TODO-QSP: $export_str += ' & ' + "droutine_settings['morning_use_abs'] = <<droutine_settings['morning_use_abs'...
    // TODO-QSP: $export_str += ' & ' + "droutine_settings['morning_abs_start'] = <<droutine_settings['morning_abs_st...
    // TODO-QSP: $export_str += ' & ' + "droutine_settings['morning_abs_end'] = <<droutine_settings['morning_abs_end'...
    // TODO-QSP: $export_str += ' & ' + "droutine_settings['evening_use_abs'] = <<droutine_settings['evening_use_abs'...
    // TODO-QSP: $export_str += ' & ' + "droutine_settings['evening_abs_start'] = <<droutine_settings['evening_abs_st...
    // TODO-QSP: $export_str += ' & ' + "droutine_settings['evening_abs_end'] = <<droutine_settings['evening_abs_end'...
    // TODO-QSP: $export_str += ' & ' + "droutine_settings['makeup_level'] = <<droutine_settings['makeup_level']>>"
    // TODO-QSP: $export_str += ' & ' + "droutine_settings['lashes_type'] = <<droutine_settings['lashes_type']>>"
    // TODO-QSP: $export_str += ' & ' + "calendar_show['disco_party'] = <<calendar_show['disco_party']>>"
    // TODO-QSP: $export_str += ' & ' + "calendar_show['church'] = <<calendar_show['church']>>"
    // TODO-QSP: $export_str += ' & ' + "calendar_show['intercity_trains'] = <<calendar_show['intercity_trains']>>"
    // TODO-QSP: $export_str += ' & ' + "calCycleOpts['show_0'] = <<calCycleOpts['show_0']>>"
    // TODO-QSP: $export_str += ' & ' + "calCycleOpts['show_1'] = <<calCycleOpts['show_1']>>"
    // TODO-QSP: $export_str += ' & ' + "calCycleOpts['show_2'] = <<calCycleOpts['show_2']>>"
    // TODO-QSP: $export_str += ' & ' + "calCycleOpts['show_3'] = <<calCycleOpts['show_3']>>"
    // TODO-QSP: $export_str += ' & ' + "cheatVars['skill_gain'] = <<cheatVars['skill_gain']>>"
    // TODO-QSP: $export_str += ' & ' + "cheatVars['deg_speed_opt'] = <<cheatVars['deg_speed_opt']>>"
    // TODO-QSP: $export_str += ' & ' + "cheatVars['deg_speed_custom'] = <<cheatVars['deg_speed_custom']>>"
    // TODO-QSP: $export_str += ' & ' + "cfg_vars['pos_mult_opt'] = <<cfg_vars['pos_mult_opt']>>"
    // TODO-QSP: $export_str += ' & ' + "cfg_vars['pos_mult'] = <<cfg_vars['pos_mult']>>"
    // TODO-QSP: $export_str += ' & ' + "cfg_vars['neg_mult_opt'] = <<cfg_vars['neg_mult_opt']>>"
    // TODO-QSP: $export_str += ' & ' + "cfg_vars['neg_mult'] = <<cfg_vars['neg_mult']>>"
    // TODO-QSP: $export_str += ' & ' + "cheatVars['pos_mood_opt'] = <<cheatVars['pos_mood_opt']>>"
    // TODO-QSP: $export_str += ' & ' + "cheatVars['pos_mood_mult'] = <<cheatVars['pos_mood_mult']>>"
    // TODO-QSP: $export_str += ' & ' + "cheatVars['neg_mood_opt'] = <<cheatVars['neg_mood_opt']>>"
    // TODO-QSP: $export_str += ' & ' + "cheatVars['neg_mood_mult'] = <<cheatVars['neg_mood_mult']>>"
    // TODO-QSP: $export_str += ' & ' + "cheatVars['wp_cost_opt'] = <<cheatVars['wp_cost_opt']>>"
    // TODO-QSP: $export_str += ' & ' + "cheatVars['wp_cost_mult'] = <<cheatVars['wp_cost_mult']>>"
    // TODO-QSP: $export_str += ' & ' + "cheatVars['preg_chance'] = <<cheatVars['preg_chance']>>"
    // TODO-QSP: $export_str += ' & ' + "cheatVars['preg_chance_custom'] = <<cheatVars['preg_chance_custom']>>"
    // TODO-QSP: $export_str += ' & ' + "cheatVars['preg_speed'] = <<cheatVars['preg_speed']>>"
    // TODO-QSP: $export_str += ' & ' + "cheatVars['preg_speed_custom'] = <<cheatVars['preg_speed_custom']>>"
    // TODO-QSP: $export_str += ' & ' + "cheatVars['random_lovers'] = <<cheatVars['random_lovers']>>"
    // TODO-QSP: $export_str += ' & ' + "cheatVars['random_robbers'] = <<cheatVars['random_robbers']>>"
    // TODO-QSP: $export_str += ' & ' + "cheatVars['random_snatchers'] = <<cheatVars['random_snatchers']>>"
    // TODO-QSP: $export_str += ' & ' + "cheatVars['random_rapists'] = <<cheatVars['random_rapists']>>"
    // TODO-QSP: $export_str += ' & ' + "cheatVars['abduction_chance'] = <<cheatVars['abduction_chance']>>"
    // TODO-QSP: $export_str += ' & ' + "cheatVars['auto_tampons'] = <<cheatVars['auto_tampons']>>"
    // TODO-QSP: $export_str += ' & ' + "cheatVars['track_period'] = <<cheatVars['track_period']>>"
    // TODO-QSP: $export_str += ' & ' + "cheatVars['tatiana_apprnc_change'] = <<cheatVars['tatiana_apprnc_change']>>"
    // TODO-QSP: $export_str += ' & ' + "cheatVars['arch_difficulty'] = <<cheatVars['arch_difficulty']>>"
    // TODO-QSP: $export_str += ' & ' + "cfg_vars['themetype'] = <<cfg_vars['themetype']>>"
    // TODO-QSP: $export_str += ' & ' + "$cfg_vars['theme_main_name'] = '<<$cfg_vars['theme_main_name']>>'"
    // TODO-QSP: $export_str += ' & ' + "$theme['name'] = '<<$theme['name']>>'"
    // TODO-QSP: $export_str += ' & ' + "$theme['type'] = '<<$theme['type']>>'"
    // TODO-QSP: $export_str += ' & ' + "cfg_vars['use_popups'] = <<cfg_vars['use_popups']>>"
    // TODO-QSP: $export_str += ' & ' + "cfg_vars['imgw'] = <<cfg_vars['imgw']>>"
    // TODO-QSP: $export_str += ' & ' + "cfg_vars['imgh'] = <<cfg_vars['imgh']>>"
    // TODO-QSP: $export_str += ' & ' + "cfg_vars['tablemap'] = <<cfg_vars['tablemap']>>"
    // TODO-QSP: $export_str += ' & ' + "cfg_vars['debug'] = <<cfg_vars['debug']>>"
    // TODO-QSP: $export_str += ' & ' + "cheatVars['willcost_style'] = <<cheatVars['willcost_style']>>"
    // TODO-QSP: $export_str += ' & ' + "cfg_vars['faceturn'] = <<cfg_vars['faceturn']>>"
    // TODO-QSP: $export_str += ' & ' + "face_style['type'] = <<face_style['type']>>"
    // TODO-QSP: $export_str += ' & ' + "$face_style['avatar_path'] = '<<$face_style['avatar_path']>>'"
    // TODO-QSP: $export_str += ' & ' + "face_style['custom_hair_toggle'] = <<face_style['custom_hair_toggle']>>"
    // TODO-QSP: $export_str += ' & ' + "$face_style['avatar_hair'] = '<<$face_style['avatar_hair']>>'"
    // TODO-QSP: $export_str += ' & ' + "$openInnerThought = '<<$openInnerThought>>'"
    // TODO-QSP: $export_str += ' & ' + "$closeInnerThought = '<<$closeInnerThought>>'"
    // TODO-QSP: $export_str += ' & ' + "cheatVars['shop_alt_color'] = <<cheatVars['shop_alt_color']>>"
    // TODO-QSP: $export_str += ' & ' + "$custom_theme['fname'] = '<<$custom_theme['fname']>>'"
    // TODO-QSP: $export_str += ' & ' + "custom_theme['fsize'] = <<custom_theme['fsize']>>"
    // TODO-QSP: $export_str += ' & ' + "custom_theme['bcolor'] = <<custom_theme['bcolor']>>"
    // TODO-QSP: $export_str += ' & ' + "custom_theme['fcolor'] = <<custom_theme['fcolor']>>"
    // TODO-QSP: $export_str += ' & ' + "custom_theme['lcolor'] = <<custom_theme['lcolor']>>"
    // TODO-QSP: $export_str += ' & ' + "$custom_theme['table_bg'] = '<<$custom_theme['table_bg']>>'"
    // TODO-QSP: $export_str += ' & ' + "$custom_theme['table_bg_alt'] = '<<$custom_theme['table_bg_alt']>>'"
    // TODO-QSP: $export_str += ' & ' + "custom_theme['is_dark'] = <<custom_theme['is_dark']>>"
    // TODO-QSP: $export_str += ' & ' + "$custom_theme['accent'] = '<<$custom_theme['accent']>>'"
    // TODO-QSP: $export_str += ' & ' + "$custom_theme['v_pos'] = '<<$custom_theme['v_pos']>>'"
    // TODO-QSP: $export_str += ' & ' + "$custom_theme['pos'] = '<<$custom_theme['pos']>>'"
    // TODO-QSP: $export_str += ' & ' + "$custom_theme['neutral'] = '<<$custom_theme['neutral']>>'"
    // TODO-QSP: $export_str += ' & ' + "$custom_theme['neg'] = '<<$custom_theme['neg']>>'"
    // TODO-QSP: $export_str += ' & ' + "$custom_theme['v_neg'] = '<<$custom_theme['v_neg']>>'"
    // TODO-QSP: $export_str += ' & ' + "$custom_theme['punk'] = '<<$custom_theme['punk']>>'"
    // TODO-QSP: $export_str += ' & ' + "$custom_theme['bimbo'] = '<<$custom_theme['bimbo']>>'"
    // TODO-QSP: $export_str += ' & ' + "$custom_theme['goth'] = '<<$custom_theme['goth']>>'"
    // TODO-QSP: $export_str += ' & ' + "$custom_theme['hypno'] = '<<$custom_theme['hypno']>>'"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['android'] = <<stat_cfg['android']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['global_align'] = <<stat_cfg['global_align']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['sec_headers'] = <<stat_cfg['sec_headers']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['separator_style'] = <<stat_cfg['separator_style']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['font_size'] = <<stat_cfg['font_size']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['align_weather'] = <<stat_cfg['align_weather']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['align_time'] = <<stat_cfg['align_time']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['align_menu_bar'] = <<stat_cfg['align_menu_bar']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['align_money'] = <<stat_cfg['align_money']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['align_icons'] = <<stat_cfg['align_icons']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['align_alerts'] = <<stat_cfg['align_alerts']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['align_status'] = <<stat_cfg['align_status']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['align_attributes'] = <<stat_cfg['align_attributes']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['align_calendar'] = <<stat_cfg['align_calendar']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['align_texts'] = <<stat_cfg['align_texts']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['align_images'] = <<stat_cfg['align_images']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['align_skills'] = <<stat_cfg['align_skills']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['align_relations'] = <<stat_cfg['align_relations']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['align_loadsave'] = <<stat_cfg['align_loadsave']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_hide['weather'] = <<stat_hide['weather']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_hide['time'] = <<stat_hide['time']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_hide['menu_bar'] = <<stat_hide['menu_bar']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_hide['money'] = <<stat_hide['money']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_hide['icons'] = <<stat_hide['icons']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_hide['alerts'] = <<stat_hide['alerts']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_hide['status'] = <<stat_hide['status']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_hide['attributes'] = <<stat_hide['attributes']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_hide['calendar'] = <<stat_hide['calendar']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_hide['texts'] = <<stat_hide['texts']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_hide['images'] = <<stat_hide['images']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_hide['skills'] = <<stat_hide['skills']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_hide['relations'] = <<stat_hide['relations']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_hide['loadsave'] = <<stat_hide['loadsave']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['temp_scale'] = <<stat_cfg['temp_scale']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['temp_pos'] = <<stat_cfg['temp_pos']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['weather_visual'] = <<stat_cfg['weather_visual']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['weather_height'] = <<stat_cfg['weather_height']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['time_format'] = <<stat_cfg['time_format']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['date_format'] = <<stat_cfg['date_format']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['time_hidden'] = <<stat_cfg['time_hidden']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['icon_height'] = <<stat_cfg['icon_height']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['show_positive_icons'] = <<stat_cfg['show_positive_icons']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['job_icon_themed'] = <<stat_cfg['job_icon_themed']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['newline_alerts'] = <<stat_cfg['newline_alerts']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['notify_exp'] = <<stat_cfg['notify_exp']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['notify_archetypes'] = <<stat_cfg['notify_archetypes']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['notify_archetypes_opposite'] = <<stat_cfg['notify_archetypes_oppos...
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['notify_archetypes_state'] = <<stat_cfg['notify_archetypes_state']>...
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['arch_log_enabled'] = <<stat_cfg['arch_log_enabled']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['cal_count'] = <<stat_cfg['cal_count']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['cal_today_only'] = <<stat_cfg['cal_today_only']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['cal_show_all_day'] = <<stat_cfg['cal_show_all_day']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['newline_texts'] = <<stat_cfg['newline_texts']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['show_positive_texts'] = <<stat_cfg['show_positive_texts']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['loadsave_mode'] = <<stat_cfg['loadsave_mode']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['menu_icon_height'] = <<stat_cfg['menu_icon_height']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['magic_separate'] = <<stat_cfg['magic_separate']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['render_mode_status'] = <<stat_cfg['render_mode_status']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['bar_width'] = <<stat_cfg['bar_width']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['bar_size'] = <<stat_cfg['bar_size']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['name_side_status'] = <<stat_cfg['name_side_status']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['overlay'] = <<stat_cfg['overlay']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['newline_status'] = <<stat_cfg['newline_status']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['render_mode_attrs'] = <<stat_cfg['render_mode_attrs']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['name_side_attrs'] = <<stat_cfg['name_side_attrs']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['show_attr_xp'] = <<stat_cfg['show_attr_xp']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['show_apprnc_base'] = <<stat_cfg['show_apprnc_base']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['newline_attributes'] = <<stat_cfg['newline_attributes']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['image_columns'] = <<stat_cfg['image_columns']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['image_spacing'] = <<stat_cfg['image_spacing']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['image_size'] = <<stat_cfg['image_size']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['image_size_px'] = <<stat_cfg['image_size_px']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['image_headers'] = <<stat_cfg['image_headers']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['image_header_pos'] = <<stat_cfg['image_header_pos']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['image_header_font'] = <<stat_cfg['image_header_font']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['skills_mode'] = <<stat_cfg['skills_mode']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['name_side_skills'] = <<stat_cfg['name_side_skills']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['skills_columns'] = <<stat_cfg['skills_columns']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['skills_group_mode'] = <<stat_cfg['skills_group_mode']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['show_skills_mental'] = <<stat_cfg['show_skills_mental']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['show_skills_sport'] = <<stat_cfg['show_skills_sport']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['show_skills_combat'] = <<stat_cfg['show_skills_combat']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['show_skills_beauty'] = <<stat_cfg['show_skills_beauty']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['show_skills_artistic'] = <<stat_cfg['show_skills_artistic']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['show_skills_job'] = <<stat_cfg['show_skills_job']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['relations_mode'] = <<stat_cfg['relations_mode']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['name_side_relations'] = <<stat_cfg['name_side_relations']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['relations_columns'] = <<stat_cfg['relations_columns']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['relations_group_mode'] = <<stat_cfg['relations_group_mode']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['rel_name_mode'] = <<stat_cfg['rel_name_mode']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['rel_color_mode'] = <<stat_cfg['rel_color_mode']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['show_rels_family'] = <<stat_cfg['show_rels_family']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['show_rels_coolkid'] = <<stat_cfg['show_rels_coolkid']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['show_rels_jock'] = <<stat_cfg['show_rels_jock']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['show_rels_nerd'] = <<stat_cfg['show_rels_nerd']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['show_rels_gopnik'] = <<stat_cfg['show_rels_gopnik']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['show_rels_staff'] = <<stat_cfg['show_rels_staff']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['show_rels_pavlovsk'] = <<stat_cfg['show_rels_pavlovsk']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_cfg['show_rels_city'] = <<stat_cfg['show_rels_city']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_hide_bar['arousal'] = <<stat_hide_bar['arousal']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_hide_bar['pain'] = <<stat_hide_bar['pain']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_hide_bar['health'] = <<stat_hide_bar['health']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_hide_bar['mana'] = <<stat_hide_bar['mana']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_hide_bar['willpower'] = <<stat_hide_bar['willpower']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_hide_bar['stamina'] = <<stat_hide_bar['stamina']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_hide_bar['mood'] = <<stat_hide_bar['mood']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_hide_bar['disposition'] = <<stat_hide_bar['disposition']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_hide_bar['weight'] = <<stat_hide_bar['weight']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_hide_bar['energy'] = <<stat_hide_bar['energy']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_hide_bar['thirst'] = <<stat_hide_bar['thirst']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_hide_bar['sleep'] = <<stat_hide_bar['sleep']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_hide_bar['faith'] = <<stat_hide_bar['faith']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_hide_bar['inhib'] = <<stat_hide_bar['inhib']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_hide_bar['stren'] = <<stat_hide_bar['stren']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_hide_bar['agil'] = <<stat_hide_bar['agil']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_hide_bar['vital'] = <<stat_hide_bar['vital']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_hide_bar['intel'] = <<stat_hide_bar['intel']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_hide_bar['sprt'] = <<stat_hide_bar['sprt']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_hide_bar['react'] = <<stat_hide_bar['react']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_hide_bar['chrsm'] = <<stat_hide_bar['chrsm']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_hide_bar['prcptn'] = <<stat_hide_bar['prcptn']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_hide_bar['apprnc'] = <<stat_hide_bar['apprnc']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_hide_bar['magik'] = <<stat_hide_bar['magik']>>"
    // TODO-QSP: $export_str += ' & ' + "stat_hide_bar['sucexcess'] = <<stat_hide_bar['sucexcess']>>"
    // TODO-QSP: $export_str += ' & ' + "$stat_order[0] = '<<$stat_order[0]>>'"
    // TODO-QSP: $export_str += ' & ' + "$stat_order[1] = '<<$stat_order[1]>>'"
    // TODO-QSP: $export_str += ' & ' + "$stat_order[2] = '<<$stat_order[2]>>'"
    // TODO-QSP: $export_str += ' & ' + "$stat_order[3] = '<<$stat_order[3]>>'"
    // TODO-QSP: $export_str += ' & ' + "$stat_order[4] = '<<$stat_order[4]>>'"
    // TODO-QSP: $export_str += ' & ' + "$stat_order[5] = '<<$stat_order[5]>>'"
    // TODO-QSP: $export_str += ' & ' + "$stat_order[6] = '<<$stat_order[6]>>'"
    // TODO-QSP: $export_str += ' & ' + "$stat_order[7] = '<<$stat_order[7]>>'"
    // TODO-QSP: $export_str += ' & ' + "$stat_order[8] = '<<$stat_order[8]>>'"
    // TODO-QSP: $export_str += ' & ' + "$stat_order[9] = '<<$stat_order[9]>>'"
    // TODO-QSP: $export_str += ' & ' + "$stat_order[10] = '<<$stat_order[10]>>'"
    // TODO-QSP: $export_str += ' & ' + "$stat_order[11] = '<<$stat_order[11]>>'"
    // TODO-QSP: $export_str += ' & ' + "$stat_order[12] = '<<$stat_order[12]>>'"
    // TODO-QSP: $export_str += ' & ' + "$stat_order[13] = '<<$stat_order[13]>>'"
    // TODO-QSP: $export_str += ' & ' + "$menu_bar_order[0] = '<<$menu_bar_order[0]>>'"
    // TODO-QSP: $export_str += ' & ' + "$menu_bar_order[1] = '<<$menu_bar_order[1]>>'"
    // TODO-QSP: $export_str += ' & ' + "$menu_bar_order[2] = '<<$menu_bar_order[2]>>'"
    // TODO-QSP: $export_str += ' & ' + "$menu_bar_order[3] = '<<$menu_bar_order[3]>>'"
    // TODO-QSP: $export_str += ' & ' + "$menu_bar_order[4] = '<<$menu_bar_order[4]>>'"
    // TODO-QSP: $export_str += ' & ' + "$menu_bar_order[5] = '<<$menu_bar_order[5]>>'"
    // TODO-QSP: $export_str += ' & ' + "$menu_bar_order[6] = '<<$menu_bar_order[6]>>'"
    // TODO-QSP: $export_str += ' & ' + "$menu_bar_order[7] = '<<$menu_bar_order[7]>>'"
    // TODO-QSP: $export_str += ' & ' + "$status_bar_order[0] = '<<$status_bar_order[0]>>'"
    // TODO-QSP: $export_str += ' & ' + "$status_bar_order[1] = '<<$status_bar_order[1]>>'"
    // TODO-QSP: $export_str += ' & ' + "$status_bar_order[2] = '<<$status_bar_order[2]>>'"
    // TODO-QSP: $export_str += ' & ' + "$status_bar_order[3] = '<<$status_bar_order[3]>>'"
    // TODO-QSP: $export_str += ' & ' + "$status_bar_order[4] = '<<$status_bar_order[4]>>'"
    // TODO-QSP: $export_str += ' & ' + "$status_bar_order[5] = '<<$status_bar_order[5]>>'"
    // TODO-QSP: $export_str += ' & ' + "$status_bar_order[6] = '<<$status_bar_order[6]>>'"
    // TODO-QSP: $export_str += ' & ' + "$status_bar_order[7] = '<<$status_bar_order[7]>>'"
    // TODO-QSP: $export_str += ' & ' + "$status_bar_order[8] = '<<$status_bar_order[8]>>'"
    // TODO-QSP: $export_str += ' & ' + "$status_bar_order[9] = '<<$status_bar_order[9]>>'"
    // TODO-QSP: $export_str += ' & ' + "$status_bar_order[10] = '<<$status_bar_order[10]>>'"
    // TODO-QSP: $export_str += ' & ' + "$attr_bar_order[0] = '<<$attr_bar_order[0]>>'"
    // TODO-QSP: $export_str += ' & ' + "$attr_bar_order[1] = '<<$attr_bar_order[1]>>'"
    // TODO-QSP: $export_str += ' & ' + "$attr_bar_order[2] = '<<$attr_bar_order[2]>>'"
    // TODO-QSP: $export_str += ' & ' + "$attr_bar_order[3] = '<<$attr_bar_order[3]>>'"
    // TODO-QSP: $export_str += ' & ' + "$attr_bar_order[4] = '<<$attr_bar_order[4]>>'"
    // TODO-QSP: $export_str += ' & ' + "$attr_bar_order[5] = '<<$attr_bar_order[5]>>'"
    // TODO-QSP: $export_str += ' & ' + "$attr_bar_order[6] = '<<$attr_bar_order[6]>>'"
    // TODO-QSP: $export_str += ' & ' + "$attr_bar_order[7] = '<<$attr_bar_order[7]>>'"
    // TODO-QSP: $export_str += ' & ' + "$attr_bar_order[8] = '<<$attr_bar_order[8]>>'"
    // TODO-QSP: $export_str += ' & ' + "$attr_bar_order[9] = '<<$attr_bar_order[9]>>'"
    // TODO-QSP: $export_str += ' & ' + "$attr_bar_order[10] = '<<$attr_bar_order[10]>>'"
    // TODO-QSP: $export_str += ' & ' + "$attr_bar_order[11] = '<<$attr_bar_order[11]>>'"
    // TODO-QSP: $export_str += ' & ' + "$image_order[0] = '<<$image_order[0]>>'"
    // TODO-QSP: $export_str += ' & ' + "$image_order[1] = '<<$image_order[1]>>'"
    // TODO-QSP: $export_str += ' & ' + "$image_order[2] = '<<$image_order[2]>>'"
    // TODO-QSP: $export_str += ' & ' + "$image_order[3] = '<<$image_order[3]>>'"
    // TODO-QSP: $export_str += ' & ' + "$image_order[4] = '<<$image_order[4]>>'"
    // TODO-QSP: $export_str += ' & ' + "$image_order[5] = '<<$image_order[5]>>'"
    // TODO-QSP: $export_str += ' & ' + "$image_order[6] = '<<$image_order[6]>>'"
    // TODO-QSP: $export_str += ' & ' + "$image_order[7] = '<<$image_order[7]>>'"
    // TODO-QSP: $export_str += ' & ' + "$skill_group_order[0] = '<<$skill_group_order[0]>>'"
    // TODO-QSP: $export_str += ' & ' + "$skill_group_order[1] = '<<$skill_group_order[1]>>'"
    // TODO-QSP: $export_str += ' & ' + "$skill_group_order[2] = '<<$skill_group_order[2]>>'"
    // TODO-QSP: $export_str += ' & ' + "$skill_group_order[3] = '<<$skill_group_order[3]>>'"
    // TODO-QSP: $export_str += ' & ' + "$skill_group_order[4] = '<<$skill_group_order[4]>>'"
    // TODO-QSP: $export_str += ' & ' + "$skill_group_order[5] = '<<$skill_group_order[5]>>'"
    // TODO-QSP: $export_str += ' & ' + "$rel_group_order[0] = '<<$rel_group_order[0]>>'"
    // TODO-QSP: $export_str += ' & ' + "$rel_group_order[1] = '<<$rel_group_order[1]>>'"
    // TODO-QSP: $export_str += ' & ' + "$rel_group_order[2] = '<<$rel_group_order[2]>>'"
    // TODO-QSP: $export_str += ' & ' + "$rel_group_order[3] = '<<$rel_group_order[3]>>'"
    // TODO-QSP: $export_str += ' & ' + "$rel_group_order[4] = '<<$rel_group_order[4]>>'"
    // TODO-QSP: $export_str += ' & ' + "$rel_group_order[5] = '<<$rel_group_order[5]>>'"
    // TODO-QSP: $export_str += ' & ' + "$rel_group_order[6] = '<<$rel_group_order[6]>>'"
    // TODO-QSP: $export_str += ' & ' + "$rel_group_order[7] = '<<$rel_group_order[7]>>'"
    // TODO-QSP: $export_str += ' & ' + "$rel_group_order[8] = '<<$rel_group_order[8]>>'"
    // TODO-QSP: dynamic text: $export_str
    scene.text(String((st as any).export_str ?? ''));
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (st as any).usehtml = 1;
    // TODO-QSP: showstat 1
    // TODO-QSP: gs '$menu_settings'
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterImport(s: GameState, scene: SceneBuilder): void {
  scene.text('Paste your saved game settings into the input box (Likely at the bottom of the screen), then click Continue.');
  // TODO-QSP: showinput 1
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (st as any).initext = String(((st as any).usrtxt ?? 0));
    // TODO-QSP: cmdclear
    // TODO-QSP: showinput 0
    if (((st as any).initext ?? 0) === '') {
      // TODO-QSP: exit
    }
    if (((st as any).calendar_show ?? 0)?.['disco_party'] === 1) {
      qspCall(st, 'calendar', 'add', 'disco_party');
    } else {
      qspCall(st, 'calendar', 'remove', 'disco_party');
    }
    if (((st as any).calendar_show ?? 0)?.['church'] === 1) {
      qspCall(st, 'calendar', 'pack', 'add', 'church');
    } else {
      qspCall(st, 'calendar', 'pack', 'remove', 'church');
    }
    if (((st as any).calendar_show ?? 0)?.['intercity_trains'] === 1) {
      qspCall(st, 'calendar', 'pack', 'add', 'intercity_trains');
    } else {
      qspCall(st, 'calendar', 'pack', 'remove', 'intercity_trains');
    }
    qspCall(st, 'calendar', 'cycle_rebuild', 1);
    // TODO-QSP: showobjs cfg_vars['debug']
    qspCall(st, 'stat', '');
    dynamicGoto(st, 'menu_settings');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'export':
      enterExport(s, scene);
      break;
    case 'import':
      enterImport(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const import_export: LocationDef = {
  name: 'import_export',
  title: 'Your current settings will be displayed on the next screen. ',
  region: 'other',
  enter: enter,
};
