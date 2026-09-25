import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterExport(s: GameState, scene: SceneBuilder): void {
  scene.text('Your current settings will be displayed on the next screen. Copy the entire block and save it to a text file. To restore, use Import and paste the text back.');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (st as any).usehtml = 0;
    (st as any).export_str = 'cfg_vars[\'disable_autosave\'] = ' + (((st as any).cfg_vars ?? 0)?.['disable_autosave']) + '';
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'cheatVars[\'gameover\'] = ' + (((st as any).cheatVars ?? 0)?.['gameover']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'sound_settings[\'music_off\'] = ' + (((st as any).sound_settings ?? 0)?.['music_off']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'sound_settings[\'environment_off\'] = ' + (((st as any).sound_settings ?? 0)?.['environment_off']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'sound_settings[\'menu_off\'] = ' + (((st as any).sound_settings ?? 0)?.['menu_off']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'cheatVars[\'auto_brush\'] = ' + (((st as any).cheatVars ?? 0)?.['auto_brush']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'cheatVars[\'enema\'] = ' + (((st as any).cheatVars ?? 0)?.['enema']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'cheatVars[\'pee\'] = ' + (((st as any).cheatVars ?? 0)?.['pee']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'cheatVars[\'rename_porn\'] = ' + (((st as any).cheatVars ?? 0)?.['rename_porn']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'cheatVars[\'therapist_schedule\'] = ' + (((st as any).cheatVars ?? 0)?.['therapist_schedule']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'cfg_vars[\'pay_opt\'] = ' + (((st as any).cfg_vars ?? 0)?.['pay_opt']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'cfg_vars[\'pay_opt_backup\'] = ' + (((st as any).cfg_vars ?? 0)?.['pay_opt_backup']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'cfg_vars[\'income_opt\'] = ' + (((st as any).cfg_vars ?? 0)?.['income_opt']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'cfg_vars[\'allow_overdraft\'] = ' + (((st as any).cfg_vars ?? 0)?.['allow_overdraft']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'droutine_settings[\'disabled\'] = ' + (((st as any).droutine_settings ?? 0)?.['disabled']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'droutine_settings[\'morning_use_wake\'] = ' + (((st as any).droutine_settings ?? 0)?.['morning_use_wake']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'droutine_settings[\'morning_wake_min\'] = ' + (((st as any).droutine_settings ?? 0)?.['morning_wake_min']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'droutine_settings[\'morning_use_abs\'] = ' + (((st as any).droutine_settings ?? 0)?.['morning_use_abs']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'droutine_settings[\'morning_abs_start\'] = ' + (((st as any).droutine_settings ?? 0)?.['morning_abs_start']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'droutine_settings[\'morning_abs_end\'] = ' + (((st as any).droutine_settings ?? 0)?.['morning_abs_end']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'droutine_settings[\'evening_use_abs\'] = ' + (((st as any).droutine_settings ?? 0)?.['evening_use_abs']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'droutine_settings[\'evening_abs_start\'] = ' + (((st as any).droutine_settings ?? 0)?.['evening_abs_start']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'droutine_settings[\'evening_abs_end\'] = ' + (((st as any).droutine_settings ?? 0)?.['evening_abs_end']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'droutine_settings[\'makeup_level\'] = ' + (((st as any).droutine_settings ?? 0)?.['makeup_level']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'droutine_settings[\'lashes_type\'] = ' + (((st as any).droutine_settings ?? 0)?.['lashes_type']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'calendar_show[\'disco_party\'] = ' + (((st as any).calendar_show ?? 0)?.['disco_party']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'calendar_show[\'church\'] = ' + (((st as any).calendar_show ?? 0)?.['church']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'calendar_show[\'intercity_trains\'] = ' + (((st as any).calendar_show ?? 0)?.['intercity_trains']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'calCycleOpts[\'show_0\'] = ' + (((st as any).calCycleOpts ?? 0)?.['show_0']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'calCycleOpts[\'show_1\'] = ' + (((st as any).calCycleOpts ?? 0)?.['show_1']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'calCycleOpts[\'show_2\'] = ' + (((st as any).calCycleOpts ?? 0)?.['show_2']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'calCycleOpts[\'show_3\'] = ' + (((st as any).calCycleOpts ?? 0)?.['show_3']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'cheatVars[\'skill_gain\'] = ' + (((st as any).cheatVars ?? 0)?.['skill_gain']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'cheatVars[\'deg_speed_opt\'] = ' + (((st as any).cheatVars ?? 0)?.['deg_speed_opt']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'cheatVars[\'deg_speed_custom\'] = ' + (((st as any).cheatVars ?? 0)?.['deg_speed_custom']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'cfg_vars[\'pos_mult_opt\'] = ' + (((st as any).cfg_vars ?? 0)?.['pos_mult_opt']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'cfg_vars[\'pos_mult\'] = ' + (((st as any).cfg_vars ?? 0)?.['pos_mult']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'cfg_vars[\'neg_mult_opt\'] = ' + (((st as any).cfg_vars ?? 0)?.['neg_mult_opt']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'cfg_vars[\'neg_mult\'] = ' + (((st as any).cfg_vars ?? 0)?.['neg_mult']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'cheatVars[\'pos_mood_opt\'] = ' + (((st as any).cheatVars ?? 0)?.['pos_mood_opt']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'cheatVars[\'pos_mood_mult\'] = ' + (((st as any).cheatVars ?? 0)?.['pos_mood_mult']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'cheatVars[\'neg_mood_opt\'] = ' + (((st as any).cheatVars ?? 0)?.['neg_mood_opt']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'cheatVars[\'neg_mood_mult\'] = ' + (((st as any).cheatVars ?? 0)?.['neg_mood_mult']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'cheatVars[\'wp_cost_opt\'] = ' + (((st as any).cheatVars ?? 0)?.['wp_cost_opt']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'cheatVars[\'wp_cost_mult\'] = ' + (((st as any).cheatVars ?? 0)?.['wp_cost_mult']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'cheatVars[\'preg_chance\'] = ' + (((st as any).cheatVars ?? 0)?.['preg_chance']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'cheatVars[\'preg_chance_custom\'] = ' + (((st as any).cheatVars ?? 0)?.['preg_chance_custom']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'cheatVars[\'preg_speed\'] = ' + (((st as any).cheatVars ?? 0)?.['preg_speed']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'cheatVars[\'preg_speed_custom\'] = ' + (((st as any).cheatVars ?? 0)?.['preg_speed_custom']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'cheatVars[\'random_lovers\'] = ' + (((st as any).cheatVars ?? 0)?.['random_lovers']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'cheatVars[\'random_robbers\'] = ' + (((st as any).cheatVars ?? 0)?.['random_robbers']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'cheatVars[\'random_snatchers\'] = ' + (((st as any).cheatVars ?? 0)?.['random_snatchers']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'cheatVars[\'random_rapists\'] = ' + (((st as any).cheatVars ?? 0)?.['random_rapists']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'cheatVars[\'abduction_chance\'] = ' + (((st as any).cheatVars ?? 0)?.['abduction_chance']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'cheatVars[\'auto_tampons\'] = ' + (((st as any).cheatVars ?? 0)?.['auto_tampons']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'cheatVars[\'track_period\'] = ' + (((st as any).cheatVars ?? 0)?.['track_period']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'cheatVars[\'tatiana_apprnc_change\'] = ' + (((st as any).cheatVars ?? 0)?.['tatiana_apprnc_change']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'cheatVars[\'arch_difficulty\'] = ' + (((st as any).cheatVars ?? 0)?.['arch_difficulty']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'cfg_vars[\'themetype\'] = ' + (((st as any).cfg_vars ?? 0)?.['themetype']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$cfg_vars[\'theme_main_name\'] = \'' + (((st as any).cfg_vars ?? 0)?.['theme_main_name']) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$theme[\'name\'] = \'' + (((st as any).theme ?? 0)?.['name']) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$theme[\'type\'] = \'' + (((st as any).theme ?? 0)?.['type']) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'cfg_vars[\'use_popups\'] = ' + (((st as any).cfg_vars ?? 0)?.['use_popups']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'cfg_vars[\'imgw\'] = ' + (((st as any).cfg_vars ?? 0)?.['imgw']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'cfg_vars[\'imgh\'] = ' + (((st as any).cfg_vars ?? 0)?.['imgh']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'cfg_vars[\'tablemap\'] = ' + (((st as any).cfg_vars ?? 0)?.['tablemap']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'cfg_vars[\'debug\'] = ' + (((st as any).cfg_vars ?? 0)?.['debug']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'cheatVars[\'willcost_style\'] = ' + (((st as any).cheatVars ?? 0)?.['willcost_style']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'cfg_vars[\'faceturn\'] = ' + (((st as any).cfg_vars ?? 0)?.['faceturn']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'face_style[\'type\'] = ' + (((st as any).face_style ?? 0)?.['type']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$face_style[\'avatar_path\'] = \'' + (((st as any).face_style ?? 0)?.['avatar_path']) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'face_style[\'custom_hair_toggle\'] = ' + (((st as any).face_style ?? 0)?.['custom_hair_toggle']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$face_style[\'avatar_hair\'] = \'' + (((st as any).face_style ?? 0)?.['avatar_hair']) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$openInnerThought = \'' + ((st as any).openInnerThought ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$closeInnerThought = \'' + ((st as any).closeInnerThought ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'cheatVars[\'shop_alt_color\'] = ' + (((st as any).cheatVars ?? 0)?.['shop_alt_color']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$custom_theme[\'fname\'] = \'' + (((st as any).custom_theme ?? 0)?.['fname']) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'custom_theme[\'fsize\'] = ' + (((st as any).custom_theme ?? 0)?.['fsize']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'custom_theme[\'bcolor\'] = ' + (((st as any).custom_theme ?? 0)?.['bcolor']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'custom_theme[\'fcolor\'] = ' + (((st as any).custom_theme ?? 0)?.['fcolor']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'custom_theme[\'lcolor\'] = ' + (((st as any).custom_theme ?? 0)?.['lcolor']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$custom_theme[\'table_bg\'] = \'' + (((st as any).custom_theme ?? 0)?.['table_bg']) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$custom_theme[\'table_bg_alt\'] = \'' + (((st as any).custom_theme ?? 0)?.['table_bg_alt']) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'custom_theme[\'is_dark\'] = ' + (((st as any).custom_theme ?? 0)?.['is_dark']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$custom_theme[\'accent\'] = \'' + (((st as any).custom_theme ?? 0)?.['accent']) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$custom_theme[\'v_pos\'] = \'' + (((st as any).custom_theme ?? 0)?.['v_pos']) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$custom_theme[\'pos\'] = \'' + (((st as any).custom_theme ?? 0)?.['pos']) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$custom_theme[\'neutral\'] = \'' + (((st as any).custom_theme ?? 0)?.['neutral']) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$custom_theme[\'neg\'] = \'' + (((st as any).custom_theme ?? 0)?.['neg']) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$custom_theme[\'v_neg\'] = \'' + (((st as any).custom_theme ?? 0)?.['v_neg']) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$custom_theme[\'punk\'] = \'' + (((st as any).custom_theme ?? 0)?.['punk']) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$custom_theme[\'bimbo\'] = \'' + (((st as any).custom_theme ?? 0)?.['bimbo']) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$custom_theme[\'goth\'] = \'' + (((st as any).custom_theme ?? 0)?.['goth']) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$custom_theme[\'hypno\'] = \'' + (((st as any).custom_theme ?? 0)?.['hypno']) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'android\'] = ' + (((st as any).stat_cfg ?? 0)?.['android']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'global_align\'] = ' + (((st as any).stat_cfg ?? 0)?.['global_align']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'sec_headers\'] = ' + (((st as any).stat_cfg ?? 0)?.['sec_headers']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'separator_style\'] = ' + (((st as any).stat_cfg ?? 0)?.['separator_style']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'font_size\'] = ' + (((st as any).stat_cfg ?? 0)?.['font_size']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'align_weather\'] = ' + (((st as any).stat_cfg ?? 0)?.['align_weather']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'align_time\'] = ' + (((st as any).stat_cfg ?? 0)?.['align_time']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'align_menu_bar\'] = ' + (((st as any).stat_cfg ?? 0)?.['align_menu_bar']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'align_money\'] = ' + (((st as any).stat_cfg ?? 0)?.['align_money']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'align_icons\'] = ' + (((st as any).stat_cfg ?? 0)?.['align_icons']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'align_alerts\'] = ' + (((st as any).stat_cfg ?? 0)?.['align_alerts']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'align_status\'] = ' + (((st as any).stat_cfg ?? 0)?.['align_status']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'align_attributes\'] = ' + (((st as any).stat_cfg ?? 0)?.['align_attributes']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'align_calendar\'] = ' + (((st as any).stat_cfg ?? 0)?.['align_calendar']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'align_texts\'] = ' + (((st as any).stat_cfg ?? 0)?.['align_texts']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'align_images\'] = ' + (((st as any).stat_cfg ?? 0)?.['align_images']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'align_skills\'] = ' + (((st as any).stat_cfg ?? 0)?.['align_skills']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'align_relations\'] = ' + (((st as any).stat_cfg ?? 0)?.['align_relations']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'align_loadsave\'] = ' + (((st as any).stat_cfg ?? 0)?.['align_loadsave']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_hide[\'weather\'] = ' + (((st as any).stat_hide ?? 0)?.['weather']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_hide[\'time\'] = ' + (((st as any).stat_hide ?? 0)?.['time']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_hide[\'menu_bar\'] = ' + (((st as any).stat_hide ?? 0)?.['menu_bar']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_hide[\'money\'] = ' + (((st as any).stat_hide ?? 0)?.['money']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_hide[\'icons\'] = ' + (((st as any).stat_hide ?? 0)?.['icons']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_hide[\'alerts\'] = ' + (((st as any).stat_hide ?? 0)?.['alerts']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_hide[\'status\'] = ' + (((st as any).stat_hide ?? 0)?.['status']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_hide[\'attributes\'] = ' + (((st as any).stat_hide ?? 0)?.['attributes']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_hide[\'calendar\'] = ' + (((st as any).stat_hide ?? 0)?.['calendar']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_hide[\'texts\'] = ' + (((st as any).stat_hide ?? 0)?.['texts']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_hide[\'images\'] = ' + (((st as any).stat_hide ?? 0)?.['images']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_hide[\'skills\'] = ' + (((st as any).stat_hide ?? 0)?.['skills']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_hide[\'relations\'] = ' + (((st as any).stat_hide ?? 0)?.['relations']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_hide[\'loadsave\'] = ' + (((st as any).stat_hide ?? 0)?.['loadsave']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'temp_scale\'] = ' + (((st as any).stat_cfg ?? 0)?.['temp_scale']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'temp_pos\'] = ' + (((st as any).stat_cfg ?? 0)?.['temp_pos']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'weather_visual\'] = ' + (((st as any).stat_cfg ?? 0)?.['weather_visual']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'weather_height\'] = ' + (((st as any).stat_cfg ?? 0)?.['weather_height']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'time_format\'] = ' + (((st as any).stat_cfg ?? 0)?.['time_format']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'date_format\'] = ' + (((st as any).stat_cfg ?? 0)?.['date_format']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'time_hidden\'] = ' + (((st as any).stat_cfg ?? 0)?.['time_hidden']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'icon_height\'] = ' + (((st as any).stat_cfg ?? 0)?.['icon_height']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'show_positive_icons\'] = ' + (((st as any).stat_cfg ?? 0)?.['show_positive_icons']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'job_icon_themed\'] = ' + (((st as any).stat_cfg ?? 0)?.['job_icon_themed']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'newline_alerts\'] = ' + (((st as any).stat_cfg ?? 0)?.['newline_alerts']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'notify_exp\'] = ' + (((st as any).stat_cfg ?? 0)?.['notify_exp']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'notify_archetypes\'] = ' + (((st as any).stat_cfg ?? 0)?.['notify_archetypes']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'notify_archetypes_opposite\'] = ' + (((st as any).stat_cfg ?? 0)?.['notify_archetypes_opposite']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'notify_archetypes_state\'] = ' + (((st as any).stat_cfg ?? 0)?.['notify_archetypes_state']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'arch_log_enabled\'] = ' + (((st as any).stat_cfg ?? 0)?.['arch_log_enabled']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'cal_count\'] = ' + (((st as any).stat_cfg ?? 0)?.['cal_count']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'cal_today_only\'] = ' + (((st as any).stat_cfg ?? 0)?.['cal_today_only']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'cal_show_all_day\'] = ' + (((st as any).stat_cfg ?? 0)?.['cal_show_all_day']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'newline_texts\'] = ' + (((st as any).stat_cfg ?? 0)?.['newline_texts']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'show_positive_texts\'] = ' + (((st as any).stat_cfg ?? 0)?.['show_positive_texts']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'loadsave_mode\'] = ' + (((st as any).stat_cfg ?? 0)?.['loadsave_mode']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'menu_icon_height\'] = ' + (((st as any).stat_cfg ?? 0)?.['menu_icon_height']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'magic_separate\'] = ' + (((st as any).stat_cfg ?? 0)?.['magic_separate']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'render_mode_status\'] = ' + (((st as any).stat_cfg ?? 0)?.['render_mode_status']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'bar_width\'] = ' + (((st as any).stat_cfg ?? 0)?.['bar_width']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'bar_size\'] = ' + (((st as any).stat_cfg ?? 0)?.['bar_size']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'name_side_status\'] = ' + (((st as any).stat_cfg ?? 0)?.['name_side_status']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'overlay\'] = ' + (((st as any).stat_cfg ?? 0)?.['overlay']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'newline_status\'] = ' + (((st as any).stat_cfg ?? 0)?.['newline_status']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'render_mode_attrs\'] = ' + (((st as any).stat_cfg ?? 0)?.['render_mode_attrs']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'name_side_attrs\'] = ' + (((st as any).stat_cfg ?? 0)?.['name_side_attrs']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'show_attr_xp\'] = ' + (((st as any).stat_cfg ?? 0)?.['show_attr_xp']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'show_apprnc_base\'] = ' + (((st as any).stat_cfg ?? 0)?.['show_apprnc_base']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'newline_attributes\'] = ' + (((st as any).stat_cfg ?? 0)?.['newline_attributes']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'image_columns\'] = ' + (((st as any).stat_cfg ?? 0)?.['image_columns']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'image_spacing\'] = ' + (((st as any).stat_cfg ?? 0)?.['image_spacing']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'image_size\'] = ' + (((st as any).stat_cfg ?? 0)?.['image_size']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'image_size_px\'] = ' + (((st as any).stat_cfg ?? 0)?.['image_size_px']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'image_headers\'] = ' + (((st as any).stat_cfg ?? 0)?.['image_headers']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'image_header_pos\'] = ' + (((st as any).stat_cfg ?? 0)?.['image_header_pos']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'image_header_font\'] = ' + (((st as any).stat_cfg ?? 0)?.['image_header_font']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'skills_mode\'] = ' + (((st as any).stat_cfg ?? 0)?.['skills_mode']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'name_side_skills\'] = ' + (((st as any).stat_cfg ?? 0)?.['name_side_skills']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'skills_columns\'] = ' + (((st as any).stat_cfg ?? 0)?.['skills_columns']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'skills_group_mode\'] = ' + (((st as any).stat_cfg ?? 0)?.['skills_group_mode']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'show_skills_mental\'] = ' + (((st as any).stat_cfg ?? 0)?.['show_skills_mental']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'show_skills_sport\'] = ' + (((st as any).stat_cfg ?? 0)?.['show_skills_sport']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'show_skills_combat\'] = ' + (((st as any).stat_cfg ?? 0)?.['show_skills_combat']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'show_skills_beauty\'] = ' + (((st as any).stat_cfg ?? 0)?.['show_skills_beauty']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'show_skills_artistic\'] = ' + (((st as any).stat_cfg ?? 0)?.['show_skills_artistic']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'show_skills_job\'] = ' + (((st as any).stat_cfg ?? 0)?.['show_skills_job']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'relations_mode\'] = ' + (((st as any).stat_cfg ?? 0)?.['relations_mode']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'name_side_relations\'] = ' + (((st as any).stat_cfg ?? 0)?.['name_side_relations']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'relations_columns\'] = ' + (((st as any).stat_cfg ?? 0)?.['relations_columns']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'relations_group_mode\'] = ' + (((st as any).stat_cfg ?? 0)?.['relations_group_mode']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'rel_name_mode\'] = ' + (((st as any).stat_cfg ?? 0)?.['rel_name_mode']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'rel_color_mode\'] = ' + (((st as any).stat_cfg ?? 0)?.['rel_color_mode']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'show_rels_family\'] = ' + (((st as any).stat_cfg ?? 0)?.['show_rels_family']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'show_rels_coolkid\'] = ' + (((st as any).stat_cfg ?? 0)?.['show_rels_coolkid']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'show_rels_jock\'] = ' + (((st as any).stat_cfg ?? 0)?.['show_rels_jock']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'show_rels_nerd\'] = ' + (((st as any).stat_cfg ?? 0)?.['show_rels_nerd']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'show_rels_gopnik\'] = ' + (((st as any).stat_cfg ?? 0)?.['show_rels_gopnik']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'show_rels_staff\'] = ' + (((st as any).stat_cfg ?? 0)?.['show_rels_staff']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'show_rels_pavlovsk\'] = ' + (((st as any).stat_cfg ?? 0)?.['show_rels_pavlovsk']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_cfg[\'show_rels_city\'] = ' + (((st as any).stat_cfg ?? 0)?.['show_rels_city']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_hide_bar[\'arousal\'] = ' + (((st as any).stat_hide_bar ?? 0)?.['arousal']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_hide_bar[\'pain\'] = ' + (((st as any).stat_hide_bar ?? 0)?.['pain']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_hide_bar[\'health\'] = ' + (((st as any).stat_hide_bar ?? 0)?.['health']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_hide_bar[\'mana\'] = ' + (((st as any).stat_hide_bar ?? 0)?.['mana']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_hide_bar[\'willpower\'] = ' + (((st as any).stat_hide_bar ?? 0)?.['willpower']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_hide_bar[\'stamina\'] = ' + (((st as any).stat_hide_bar ?? 0)?.['stamina']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_hide_bar[\'mood\'] = ' + (((st as any).stat_hide_bar ?? 0)?.['mood']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_hide_bar[\'disposition\'] = ' + (((st as any).stat_hide_bar ?? 0)?.['disposition']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_hide_bar[\'weight\'] = ' + (((st as any).stat_hide_bar ?? 0)?.['weight']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_hide_bar[\'energy\'] = ' + (((st as any).stat_hide_bar ?? 0)?.['energy']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_hide_bar[\'thirst\'] = ' + (((st as any).stat_hide_bar ?? 0)?.['thirst']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_hide_bar[\'sleep\'] = ' + (((st as any).stat_hide_bar ?? 0)?.['sleep']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_hide_bar[\'faith\'] = ' + (((st as any).stat_hide_bar ?? 0)?.['faith']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_hide_bar[\'inhib\'] = ' + (((st as any).stat_hide_bar ?? 0)?.['inhib']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_hide_bar[\'stren\'] = ' + (((st as any).stat_hide_bar ?? 0)?.['stren']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_hide_bar[\'agil\'] = ' + (((st as any).stat_hide_bar ?? 0)?.['agil']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_hide_bar[\'vital\'] = ' + (((st as any).stat_hide_bar ?? 0)?.['vital']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_hide_bar[\'intel\'] = ' + (((st as any).stat_hide_bar ?? 0)?.['intel']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_hide_bar[\'sprt\'] = ' + (((st as any).stat_hide_bar ?? 0)?.['sprt']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_hide_bar[\'react\'] = ' + (((st as any).stat_hide_bar ?? 0)?.['react']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_hide_bar[\'chrsm\'] = ' + (((st as any).stat_hide_bar ?? 0)?.['chrsm']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_hide_bar[\'prcptn\'] = ' + (((st as any).stat_hide_bar ?? 0)?.['prcptn']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_hide_bar[\'apprnc\'] = ' + (((st as any).stat_hide_bar ?? 0)?.['apprnc']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_hide_bar[\'magik\'] = ' + (((st as any).stat_hide_bar ?? 0)?.['magik']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + 'stat_hide_bar[\'sucexcess\'] = ' + (((st as any).stat_hide_bar ?? 0)?.['sucexcess']) + '');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$stat_order[0] = \'' + (((st as any).stat_order ?? 0)?.[0] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$stat_order[1] = \'' + (((st as any).stat_order ?? 0)?.[1] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$stat_order[2] = \'' + (((st as any).stat_order ?? 0)?.[2] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$stat_order[3] = \'' + (((st as any).stat_order ?? 0)?.[3] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$stat_order[4] = \'' + (((st as any).stat_order ?? 0)?.[4] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$stat_order[5] = \'' + (((st as any).stat_order ?? 0)?.[5] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$stat_order[6] = \'' + (((st as any).stat_order ?? 0)?.[6] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$stat_order[7] = \'' + (((st as any).stat_order ?? 0)?.[7] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$stat_order[8] = \'' + (((st as any).stat_order ?? 0)?.[8] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$stat_order[9] = \'' + (((st as any).stat_order ?? 0)?.[9] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$stat_order[10] = \'' + (((st as any).stat_order ?? 0)?.[10] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$stat_order[11] = \'' + (((st as any).stat_order ?? 0)?.[11] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$stat_order[12] = \'' + (((st as any).stat_order ?? 0)?.[12] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$stat_order[13] = \'' + (((st as any).stat_order ?? 0)?.[13] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$menu_bar_order[0] = \'' + (((st as any).menu_bar_order ?? 0)?.[0] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$menu_bar_order[1] = \'' + (((st as any).menu_bar_order ?? 0)?.[1] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$menu_bar_order[2] = \'' + (((st as any).menu_bar_order ?? 0)?.[2] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$menu_bar_order[3] = \'' + (((st as any).menu_bar_order ?? 0)?.[3] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$menu_bar_order[4] = \'' + (((st as any).menu_bar_order ?? 0)?.[4] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$menu_bar_order[5] = \'' + (((st as any).menu_bar_order ?? 0)?.[5] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$menu_bar_order[6] = \'' + (((st as any).menu_bar_order ?? 0)?.[6] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$menu_bar_order[7] = \'' + (((st as any).menu_bar_order ?? 0)?.[7] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$status_bar_order[0] = \'' + (((st as any).status_bar_order ?? 0)?.[0] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$status_bar_order[1] = \'' + (((st as any).status_bar_order ?? 0)?.[1] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$status_bar_order[2] = \'' + (((st as any).status_bar_order ?? 0)?.[2] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$status_bar_order[3] = \'' + (((st as any).status_bar_order ?? 0)?.[3] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$status_bar_order[4] = \'' + (((st as any).status_bar_order ?? 0)?.[4] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$status_bar_order[5] = \'' + (((st as any).status_bar_order ?? 0)?.[5] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$status_bar_order[6] = \'' + (((st as any).status_bar_order ?? 0)?.[6] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$status_bar_order[7] = \'' + (((st as any).status_bar_order ?? 0)?.[7] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$status_bar_order[8] = \'' + (((st as any).status_bar_order ?? 0)?.[8] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$status_bar_order[9] = \'' + (((st as any).status_bar_order ?? 0)?.[9] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$status_bar_order[10] = \'' + (((st as any).status_bar_order ?? 0)?.[10] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$attr_bar_order[0] = \'' + (((st as any).attr_bar_order ?? 0)?.[0] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$attr_bar_order[1] = \'' + (((st as any).attr_bar_order ?? 0)?.[1] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$attr_bar_order[2] = \'' + (((st as any).attr_bar_order ?? 0)?.[2] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$attr_bar_order[3] = \'' + (((st as any).attr_bar_order ?? 0)?.[3] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$attr_bar_order[4] = \'' + (((st as any).attr_bar_order ?? 0)?.[4] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$attr_bar_order[5] = \'' + (((st as any).attr_bar_order ?? 0)?.[5] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$attr_bar_order[6] = \'' + (((st as any).attr_bar_order ?? 0)?.[6] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$attr_bar_order[7] = \'' + (((st as any).attr_bar_order ?? 0)?.[7] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$attr_bar_order[8] = \'' + (((st as any).attr_bar_order ?? 0)?.[8] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$attr_bar_order[9] = \'' + (((st as any).attr_bar_order ?? 0)?.[9] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$attr_bar_order[10] = \'' + (((st as any).attr_bar_order ?? 0)?.[10] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$attr_bar_order[11] = \'' + (((st as any).attr_bar_order ?? 0)?.[11] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$image_order[0] = \'' + (((st as any).image_order ?? 0)?.[0] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$image_order[1] = \'' + (((st as any).image_order ?? 0)?.[1] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$image_order[2] = \'' + (((st as any).image_order ?? 0)?.[2] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$image_order[3] = \'' + (((st as any).image_order ?? 0)?.[3] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$image_order[4] = \'' + (((st as any).image_order ?? 0)?.[4] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$image_order[5] = \'' + (((st as any).image_order ?? 0)?.[5] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$image_order[6] = \'' + (((st as any).image_order ?? 0)?.[6] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$image_order[7] = \'' + (((st as any).image_order ?? 0)?.[7] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$skill_group_order[0] = \'' + (((st as any).skill_group_order ?? 0)?.[0] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$skill_group_order[1] = \'' + (((st as any).skill_group_order ?? 0)?.[1] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$skill_group_order[2] = \'' + (((st as any).skill_group_order ?? 0)?.[2] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$skill_group_order[3] = \'' + (((st as any).skill_group_order ?? 0)?.[3] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$skill_group_order[4] = \'' + (((st as any).skill_group_order ?? 0)?.[4] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$skill_group_order[5] = \'' + (((st as any).skill_group_order ?? 0)?.[5] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$rel_group_order[0] = \'' + (((st as any).rel_group_order ?? 0)?.[0] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$rel_group_order[1] = \'' + (((st as any).rel_group_order ?? 0)?.[1] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$rel_group_order[2] = \'' + (((st as any).rel_group_order ?? 0)?.[2] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$rel_group_order[3] = \'' + (((st as any).rel_group_order ?? 0)?.[3] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$rel_group_order[4] = \'' + (((st as any).rel_group_order ?? 0)?.[4] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$rel_group_order[5] = \'' + (((st as any).rel_group_order ?? 0)?.[5] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$rel_group_order[6] = \'' + (((st as any).rel_group_order ?? 0)?.[6] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$rel_group_order[7] = \'' + (((st as any).rel_group_order ?? 0)?.[7] ?? 0) + '\'');
    (st as any).export_str = ((st as any).export_str ?? 0) + (' & ' + '$rel_group_order[8] = \'' + (((st as any).rel_group_order ?? 0)?.[8] ?? 0) + '\'');
    scene.text(String((st as any).export_str ?? ''));
    (st as any).export_str = undefined;
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (st as any).usehtml = 1;
    // TODO-QSP: showstat 1
    qspCall(st, '$menu_settings', '');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterImport(s: GameState, scene: SceneBuilder): void {
  scene.text('Paste your saved game settings into the input box (Likely at the bottom of the screen), then click Continue.');
  // TODO-QSP: showinput 1
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (st as any).initext = String(((st as any).usrtxt ?? 0));
    // TODO-QSP: cmdclear
    // TODO-QSP: showinput 0
    if (((st as any).initext ?? 0) === '') {
      return;
    }
    qspFunc(s, 'initext');
    (st as any).initext = undefined;
    qspCall(st, 'themes', 'set_theme', (((st as any).theme ?? 0)?.['name']), (((st as any).theme ?? 0)?.['type']));
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
    alert('Import complete');
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
