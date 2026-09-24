import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterInit(s: GameState, scene: SceneBuilder): void {
  ((s as any).trait_vars = (s as any).trait_vars ?? {})['list, 0'] = 'cumeater';
  ((s as any).trait_vars = (s as any).trait_vars ?? {})['list, 1'] = 'creampie_fetish';
  ((s as any).trait_vars = (s as any).trait_vars ?? {})['list, 2'] = 'fertility';
  ((s as any).trait_vars = (s as any).trait_vars ?? {})['list, 3'] = 'sensitivity';
  ((s as any).trait_vars = (s as any).trait_vars ?? {})['list, 4'] = 'new_again';
  ((s as any).trait_vars = (s as any).trait_vars ?? {})['list, 5'] = 'heel_preference';
  ((s as any).trait_vars = (s as any).trait_vars ?? {})['list, 6'] = 'addictive_personality';
  ((s as any).trait_vars = (s as any).trait_vars ?? {})['list, 7'] = 'buttslut';
  ((s as any).trait_vars = (s as any).trait_vars ?? {})['list, 8'] = 'exhibitionist';
  ((s as any).trait_vars = (s as any).trait_vars ?? {})['list, 9'] = 'panty_preference';
  ((s as any).trait_vars = (s as any).trait_vars ?? {})['list, 10'] = 'drinking';
  ((s as any).trait_vars = (s as any).trait_vars ?? {})['list, 11'] = 'academic';
  ((s as any).trait_vars = (s as any).trait_vars ?? {})['list, 12'] = 'bookworm';
  ((s as any).trait_vars = (s as any).trait_vars ?? {})['list, 13'] = 'sizequeen';
  ((s as any).trait_vars = (s as any).trait_vars ?? {})['list, 14'] = 'fitness_freak';
  ((s as any).trait_vars = (s as any).trait_vars ?? {})['list, 15'] = 'doormat';
  ((s as any).trait_vars = (s as any).trait_vars ?? {})['list, 16'] = 'cumslut';
  ((s as any).trait_vars = (s as any).trait_vars ?? {})['list, 17'] = 'cum_addict';
  ((s as any).trait_vars = (s as any).trait_vars ?? {})['list, 18'] = 'elasticity';
  ((s as any).trait_vars = (s as any).trait_vars ?? {})['list, 19'] = 'sleep_duration';
  ((s as any).trait_vars = (s as any).trait_vars ?? {})['list, 20'] = 'body_hair_growth_rate';
  ((s as any).trait_vars = (s as any).trait_vars ?? {})['list, 21'] = 'body_hair_attitude';
  ((s as any).trait_vars = (s as any).trait_vars ?? {})['list, 22'] = 'hair_growth_rate';
  ((s as any).trait_vars = (s as any).trait_vars ?? {})['list, 23'] = 'pain_tolerance';
  ((s as any).trait_vars = (s as any).trait_vars ?? {})['count'] = 24;
  ((s as any).trait_vars = (s as any).trait_vars ?? {})['last_update'] = ((s as any).totminut ?? 0);
  (s as any).traits_i = 0;
  // TODO-QSP: :traits_init_loop
  if (((s as any).trait_vars ?? 0)['list, ' + (((s as any).traits_i ?? 0))] !== '') {
    qspCall(s, 'traits', '$trait_vars[\'list, ' + ((s as any).traits_i ?? 0) + '\']', 'init');
    (s as any).traits_i = ((s as any).traits_i ?? 0) + (1);
    // TODO-QSP: jump 'traits_init_loop'
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDaily(s: GameState, scene: SceneBuilder): void {
  (s as any).traits_i = 0;
  // TODO-QSP: :traits_daily_loop
  if (((s as any).trait_vars ?? 0)['list, ' + (((s as any).traits_i ?? 0))] !== '') {
    qspCall(s, 'traits', '$trait_vars[\'list, ' + ((s as any).traits_i ?? 0) + '\']', 'daily');
    (s as any).traits_i = ((s as any).traits_i ?? 0) + (1);
    // TODO-QSP: jump 'traits_daily_loop'
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterHourly(s: GameState, scene: SceneBuilder): void {
  (s as any).traits_i = 0;
  // TODO-QSP: :traits_hourly_loop
  if (((s as any).trait_vars ?? 0)['list, ' + (((s as any).traits_i ?? 0))] !== '') {
    qspCall(s, 'traits', '$trait_vars[\'list, ' + ((s as any).traits_i ?? 0) + '\']', 'hourly');
    (s as any).traits_i = ((s as any).traits_i ?? 0) + (1);
    // TODO-QSP: jump 'traits_hourly_loop'
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterMinute(s: GameState, scene: SceneBuilder): void {
  if (((s as any).totminut ?? 0) <= 0) {
    ((s as any).trait_vars = (s as any).trait_vars ?? {})['last_update'] = (((s as any).minut ?? 0) + ((s as any).hour ?? 0) * 60 + ((s as any).daystart ?? 0) * 1440) - 1;
    return;
  }
  if (((s as any).inSleep ?? 0) !== 0) {
    ((s as any).trait_vars = (s as any).trait_vars ?? {})['last_update'] = ((s as any).totminut ?? 0);
    return;
  }
  (s as any).temp_loop_mul = ((s as any).totminut ?? 0) - (((s as any).trait_vars ?? {})?.['last_update'] ?? 0);
  if ((!((s as any).temp_loop_mul ?? 0))) {
    // TODO-QSP: killvar 'temp_loop_mul'
    // TODO-QSP: exit
  }
  ((s as any).trait_vars = (s as any).trait_vars ?? {})['last_update'] = ((s as any).totminut ?? 0);
  (s as any).traits_i = 0;
  // TODO-QSP: :traits_minute_loop
  if (((s as any).trait_vars ?? 0)['list, ' + (((s as any).traits_i ?? 0))] !== '') {
    qspCall(s, 'traits', '$trait_vars[\'list, ' + ((s as any).traits_i ?? 0) + '\']', 'minute');
    (s as any).traits_i = ((s as any).traits_i ?? 0) + (1);
    // TODO-QSP: jump 'traits_minute_loop'
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCheat(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'traits', '$ARGS[1]', 'cheat', ((s as any).locArgs?.[2] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterComputeStatDisplay(s: GameState, scene: SceneBuilder): void {
  (s as any).traits_i = 0;
  // TODO-QSP: :traits_stat_display_loop
  if (((s as any).trait_vars ?? 0)['list, ' + (((s as any).traits_i ?? 0))] !== '') {
    qspCall(s, 'traits', '$trait_vars[\'list, ' + ((s as any).traits_i ?? 0) + '\']', 'stat_display');
    (s as any).traits_i = ((s as any).traits_i ?? 0) + (1);
    // TODO-QSP: jump 'traits_stat_display_loop'
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetDetails(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'traits', '$ARGS[1]', 'details');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterLevel(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[2] ?? '') !== ((s as any).trait_vars ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
    ((s as any).temp_level = (s as any).temp_level ?? {})['dir'] = ((String((s as any).locArgs?.[2] ?? '') > ((s as any).trait_vars ?? 0)[String((s as any).locArgs?.[1] ?? '')]) ? ('up') : ('down'));
    // TODO-QSP: trait_vars[$ARGS[1]] = ARGS[2]
    if (((s as any).temp_level ?? 0)?.['dir'] === 'up') {
      // TODO-QSP: trait_vars[$ARGS[1] + '_discovered'] = 1
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), (((s as any).temp_level ?? 0)?.['dir']), ((s as any).locArgs?.[2] ?? 0)]; enterNotify(s, scene); (s as any).locArgs = __savedLocArgs; }
    qspCall(s, 'traits', '$ARGS[1]', 'level', ((s as any).locArgs?.[2] ?? 0));
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRegisterAttskl(s: GameState, scene: SceneBuilder): void {
  if ((Array.isArray((s as any).traitattskl) ? ((s as any).traitattskl as any[]).indexOf(String((s as any).locArgs?.[1] ?? '')) : -1) < 0) {
    // TODO-QSP: $traitattskl[] = $ARGS[1]
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDeregisterAttskl(s: GameState, scene: SceneBuilder): void {
  if ((Array.isArray((s as any).traitattskl) ? ((s as any).traitattskl as any[]).indexOf(String((s as any).locArgs?.[1] ?? '')) : -1) >= 0) {
    qspCall(s, 'array', 'remove_element', '$traitattskl', ((s as any).locArgs?.[1] ?? 0));
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterNotify(s: GameState, scene: SceneBuilder): void {
  if (((s as any).opPRE ?? 0) > 0) {
    // TODO-QSP: exit
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterGetDetails(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).trait_temp ?? 0)['msg-' + (String((s as any).locArgs?.[2] ?? ''))] !== '') {
    (s as any).temp_notify = (((s as any).trait_temp ?? 0)?.['msg-' + String(((s as any).locArgs?.[2] ?? 0))]);
  } else {
    (s as any).temp_notify = (((s as any).trait_temp ?? 0)?.['msg']);
  }
  if (((s as any).temp_notify ?? 0) !== '') {
    // TODO-QSP: msg $temp_notify
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCard(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterGetDetails(s, scene); (s as any).locArgs = __savedLocArgs; }
  ((s as any).temp_card = (s as any).temp_card ?? {})['icon'] = 'images/system/icons/traits/' + ((((s as any).trait_temp ?? 0)?.['icon'] !== '') ? ((((s as any).trait_temp ?? 0)?.['icon'])) : ('hidden.png'));
  (s as any).temp_bcolor = qspFunc(s, 'themes', 'alt_color', ((s as any).temp_bcolor ?? 0));
  ((s as any).temp_card = (s as any).temp_card ?? {})['bg'] = ((s as any).temp_bcolor ?? 0);
  ((s as any).temp_card = (s as any).temp_card ?? {})['border'] = (((s as any).theme_hex ?? 0)?.['accent']);
  ((s as any).temp_card = (s as any).temp_card ?? {})['desc'] = (((s as any).trait_temp ?? 0)?.['desc']);
  ((s as any).temp_card = (s as any).temp_card ?? {})['name'] = (((s as any).trait_temp ?? 0)?.['name']);
  ((s as any).temp_card = (s as any).temp_card ?? {})['prog'] = '';
  if (((s as any).trait_temp ?? 0)?.['tooltip'] !== '') {
    if (((s as any).trait_temp ?? 0)?.['exp_down'] === -1) {
    } else {
      if (((s as any).trait_temp ?? 0)?.['exp_down'] >= 1000  ||  ((s as any).trait_temp ?? 0)?.['exp_down'] <= -1000) {
        (s as any).temp_pw = '↓&nbsp\' + $str(trait_temp[\'exp_down\'] / 1000) + \'k\' + \'&nbsp|&nbsp';
      } else {
        (s as any).temp_pw = '↓&nbsp' + String((((s as any).trait_temp ?? 0)?.['exp_down'])) + '&nbsp|&nbsp';
      }
    }
    // TODO-QSP: $temp_pw += '<b>' + $str(trait_temp['exp']) + '</b>'
    if (((s as any).trait_temp ?? 0)?.['exp_up'] === -1) {
    } else {
      if (((s as any).trait_temp ?? 0)?.['exp_up'] >= 1000  ||  ((s as any).trait_temp ?? 0)?.['exp_up'] <= -1000) {
        // TODO-QSP: $temp_pw += '&nbsp|&nbsp' + $str(trait_temp['exp_up'] / 1000) + 'k&nbsp↑'
      } else {
        // TODO-QSP: $temp_pw += '&nbsp|&nbsp' + $str(trait_temp['exp_up']) + '&nbsp↑'
      }
    }
    ((s as any).temp_card = (s as any).temp_card ?? {})['prog'] = '<span title="' + (((s as any).trait_temp ?? 0)?.['tooltip']) + '" style="cursor:help;font-size:0.8em;white-space:nowrap;font-family:monospace;opacity:0.7;">[' + ((s as any).temp_pw ?? 0) + ']</span>';
  }
  if (((s as any).trait_temp ?? 0)?.['hidden'] === 1  &&  String((s as any).locArgs?.[2] ?? '') === 0  &&  ((s as any).trait_vars ?? 0)[String((s as any).locArgs?.[1] ?? '') + '_discovered'] === 0  &&  ((s as any).cheatVars ?? 0)?.['show_hidden_traits'] === 0) {
    ((s as any).temp_card = (s as any).temp_card ?? {})['name'] = '???';
    ((s as any).temp_card = (s as any).temp_card ?? {})['desc'] = 'This trait is inactive and unknown; who knows what it could be?<br>Unlock the trait to find out.';
    ((s as any).temp_card = (s as any).temp_card ?? {})['icon'] = 'images/system/icons/traits/hidden.png';
    ((s as any).temp_card = (s as any).temp_card ?? {})['prog'] = '';
  }
  if (String((s as any).locArgs?.[2] ?? '') !== 0) {
    ((s as any).temp_card = (s as any).temp_card ?? {})['opac'] = '1.0';
  } else {
    ((s as any).temp_card = (s as any).temp_card ?? {})['opac'] = '0.5';
    ((s as any).temp_card = (s as any).temp_card ?? {})['border'] = ((((s as any).theme ?? 0)?.['is_dark'] === 1) ? ('#555555') : ('#aaaaaa'));
  }
  ((s as any).card_in = (s as any).card_in ?? {})['icon'] = (((s as any).temp_card ?? 0)?.['icon']);
  ((s as any).card_in = (s as any).card_in ?? {})['title'] = (((s as any).temp_card ?? 0)?.['name']);
  ((s as any).card_in = (s as any).card_in ?? {})['extra'] = (((s as any).temp_card ?? 0)?.['prog']);
  ((s as any).card_in = (s as any).card_in ?? {})['body'] = '<div>' + (((s as any).temp_card ?? 0)?.['desc']) + '</div>';
  ((s as any).card_in = (s as any).card_in ?? {})['border'] = (((s as any).temp_card ?? 0)?.['border']);
  ((s as any).card_in = (s as any).card_in ?? {})['bg'] = (((s as any).temp_card ?? 0)?.['bg']);
  ((s as any).card_in = (s as any).card_in ?? {})['opacity'] = (((s as any).temp_card ?? 0)?.['opac']);
  qspCall(s, 'cards', 'shell');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterShowAll(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><font size="2" color="#888888">Hover the mouse over the EXP widget on the top right of a card for information on how to gain or lose EXP.</font></center>');
  ((s as any).temp_show_all = (s as any).temp_show_all ?? {})['i'] = 0;
  // TODO-QSP: :show_all_loop
  if (((s as any).temp_show_all ?? 0)?.['i'] < ((s as any).trait_vars ?? 0)?.['count']) {
    ((s as any).temp_show_all = (s as any).temp_show_all ?? {})['trait'] = (((s as any).trait_vars ?? 0)?.['list, ' + String((((s as any).temp_show_all ?? 0)?.['i']))] ?? 0);
    qspCall(s, 'traits', '$temp_show_all[\'trait\']', 'details');
    if (((s as any).trait_vars ?? 0)[((s as any).temp_show_all ?? 0)?.['trait']] !== 0) {
      // TODO-QSP: $temp_active[] = $temp_show_all['trait']
    } else {
      if (((s as any).trait_temp ?? 0)?.['hidden'] === 0  ||  ((s as any).trait_vars ?? 0)[((s as any).temp_show_all ?? 0)?.['trait'] + '_discovered'] === 1) {
        // TODO-QSP: $temp_visible[] = $temp_show_all['trait']
      } else {
        // TODO-QSP: $temp_hidden[] = $temp_show_all['trait']
      }
    }
    ((s as any).temp_show_all = (s as any).temp_show_all ?? {})['i'] = ((s as any).temp_show_all['i'] ?? 0) + (1);
    // TODO-QSP: jump 'show_all_loop'
  }
  (s as any).result = '';
  ((s as any).temp_show_all = (s as any).temp_show_all ?? {})['i'] = 0;
  // TODO-QSP: :sa_render_act
  if (((s as any).temp_show_all ?? 0)?.['i'] < Object.keys((s as any).temp_active ?? {}).length) {
    // TODO-QSP: $result += $func('traits', 'card', $temp_active[temp_show_all['i']], trait_vars[$temp_active[temp_sh...
    ((s as any).temp_show_all = (s as any).temp_show_all ?? {})['i'] = ((s as any).temp_show_all['i'] ?? 0) + (1);
    // TODO-QSP: jump 'sa_render_act'
  }
  ((s as any).temp_show_all = (s as any).temp_show_all ?? {})['i'] = 0;
  // TODO-QSP: :sa_render_vis
  if (((s as any).temp_show_all ?? 0)?.['i'] < Object.keys((s as any).temp_visible ?? {}).length) {
    // TODO-QSP: $result += $func('traits', 'card', $temp_visible[temp_show_all['i']], 0)
    ((s as any).temp_show_all = (s as any).temp_show_all ?? {})['i'] = ((s as any).temp_show_all['i'] ?? 0) + (1);
    // TODO-QSP: jump 'sa_render_vis'
  }
  ((s as any).temp_show_all = (s as any).temp_show_all ?? {})['i'] = 0;
  // TODO-QSP: :sa_render_hid
  if (((s as any).temp_show_all ?? 0)?.['i'] < Object.keys((s as any).temp_hidden ?? {}).length) {
    // TODO-QSP: $result += $func('traits', 'card', $temp_hidden[temp_show_all['i']], 0)
    ((s as any).temp_show_all = (s as any).temp_show_all ?? {})['i'] = ((s as any).temp_show_all['i'] ?? 0) + (1);
    // TODO-QSP: jump 'sa_render_hid'
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCumeater(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'daily') {
    if (((s as any).cheatVars ?? 0)?.['cumeater_disabled']) {
      // TODO-QSP: exit
    }
    if (((s as any).trait_vars ?? 0)?.['cumeater'] === 0) {
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['cumeater_exp'] = ((s as any).trait_vars['cumeater_exp'] ?? 0) + (((((s as any).stat ?? {})?.['swallow'] ?? 0) - (((s as any).stat ?? {})?.['swallow_unaware'] ?? 0)) - (((s as any).trait_vars ?? {})?.['cumeater_prev'] ?? 0));
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['cumeater_prev'] = (((s as any).stat ?? {})?.['swallow'] ?? 0) - (((s as any).stat ?? {})?.['swallow_unaware'] ?? 0);
      if (((s as any).trait_vars ?? 0)?.['cumeater_exp'] >= 50) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'cumeater', 1]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'details') {
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Cumeater';
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['icon'] = 'cumeater.png';
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['hidden'] = 0;
    if (((s as any).trait_vars ?? 0)?.['cumeater'] === 0) {
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'You don\'t have a particular taste for cum.';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'You\'ve lost the trait <b>Cumeater</b>.';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp'] = (((s as any).trait_vars ?? 0)?.['cumeater_exp']);
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = (-1);
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = 50;
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'You have ' + (((s as any).trait_vars ?? 0)?.['cumeater_exp']) + ' EXP. Gain EXP by swallowing loads knowingly.';
    } else {
      if (((s as any).trait_vars ?? 0)?.['cumeater'] === 1) {
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'Experience led you to develop a taste for cum. Swallowing comes naturally, and new possibilities are open for dealing with spunk.';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'You\'ve gained the trait <b>Cumeater</b>.';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp'] = (((s as any).trait_vars ?? 0)?.['cumeater_exp']);
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = (-1);
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = (-1);
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'Lifetime loads swallowed: ' + (((s as any).trait_vars ?? 0)?.['cumeater_exp']) + '.';
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'cheat') {
    if (String((s as any).locArgs?.[2] ?? '') === -99  ||  String((s as any).locArgs?.[2] ?? '') === 0) {
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['cumeater_exp'] = 0;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'cumeater', 0]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (String((s as any).locArgs?.[2] ?? '') === 1) {
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['cumeater_exp'] = 50;
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'cumeater', 1]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCreampieFetish(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'daily') {
    if (((s as any).cheatVars ?? 0)?.['creampie_fetish_disabled']) {
      // TODO-QSP: exit
    }
    (s as any).temp_risky_exp = (((s as any).stat ?? {})?.['creampies_notsafe_known'] ?? 0) + (((s as any).stat ?? {})?.['creampies_risky_known'] ?? 0) * 2;
    ((s as any).trait_vars = (s as any).trait_vars ?? {})['creampie_fetish_exp_risky'] = ((s as any).trait_vars['creampie_fetish_exp_risky'] ?? 0) + (Math.max(0, ((s as any).temp_risky_exp ?? 0) - (((s as any).trait_vars ?? {})?.['creampie_fetish_exp_prev_risky'] ?? 0)));
    ((s as any).trait_vars = (s as any).trait_vars ?? {})['creampie_fetish_exp'] = ((s as any).trait_vars['creampie_fetish_exp'] ?? 0) + (Math.max(0, (((s as any).stat ?? {})?.['creampies_safe_known'] ?? 0) + ((s as any).temp_risky_exp ?? 0) * 2 - (((s as any).trait_vars ?? {})?.['creampie_fetish_exp_prev'] ?? 0)));
    ((s as any).trait_vars = (s as any).trait_vars ?? {})['creampie_fetish_exp_prev'] = (((s as any).trait_vars ?? 0)?.['creampie_fetish_exp']);
    ((s as any).trait_vars = (s as any).trait_vars ?? {})['creampie_fetish_exp_risky_prev'] = (((s as any).trait_vars ?? 0)?.['creampie_fetish_exp_risky']);
    if (((s as any).trait_vars ?? 0)?.['creampie_fetish_exp'] >= 200  &&  ((s as any).trait_vars ?? 0)?.['creampie_fetish_exp_risky'] >= 100) {
      if (((s as any).trait_vars ?? 0)?.['creampie_fetish'] !== 2) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'creampie_fetish', 2]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    } else {
      if (((s as any).trait_vars ?? 0)?.['creampie_fetish_exp'] >= 150) {
        if (((s as any).trait_vars ?? 0)?.['creampie_fetish'] !== 1) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'creampie_fetish', 1]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      } else {
        if (((s as any).trait_vars ?? 0)?.['creampie_fetish'] !== 0) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'creampie_fetish', 0]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'details') {
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['hidden'] = 0;
    if (((s as any).trait_vars ?? 0)?.['creampie_fetish'] === 0) {
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Creampie Fetish';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['icon'] = 'creampie_fetish.png';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'Some women are really into creampies, for one reason or another. You aren\'t one of them.';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'You\'ve lost the trait <b>Creampie Fetish</b>.';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp'] = (((s as any).trait_vars ?? 0)?.['creampie_fetish_exp']);
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = (-1);
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = 150;
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'You have ' + (((s as any).trait_vars ?? 0)?.['creampie_fetish_exp']) + ' EXP. Gain EXP by receiving vaginal creampies.';
    } else {
      if (((s as any).trait_vars ?? 0)?.['creampie_fetish'] === 1) {
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Creampie Lover';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['icon'] = 'creampie_fetish.png';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'Your desire for creampies is so strong that you can\'t help but orgasm almost every time a big load is poured into your pussy.';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'You\'ve gained the trait <b>Creampie Fetish</b>.';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp'] = (((s as any).trait_vars ?? 0)?.['creampie_fetish_exp']);
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = (-1);
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = 200;
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'EXP: ' + (((s as any).trait_vars ?? 0)?.['creampie_fetish_exp']) + '/200. Risky/unsafe EXP: ' + (((s as any).trait_vars ?? 0)?.['creampie_fetish_exp_risky']) + '/100. Keep taking risky creampies to unlock the next level.';
      } else {
        if (((s as any).trait_vars ?? 0)?.['creampie_fetish'] === 2) {
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Breeding Slut';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['icon'] = 'creampie_fetish_breeding.png';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'The only thing you love more than being filled with cum is being filled when you really shouldn\'t be. Risky creampies lead you to instant orgasm, but you\'ve grown to dislike condoms.';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'You\'ve gained the trait <b>Breeding Slut</b>! The thrill of risky creampies has awakened something primal in you.';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp'] = (((s as any).trait_vars ?? 0)?.['creampie_fetish_exp']);
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = (-1);
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = (-1);
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'EXP: ' + (((s as any).trait_vars ?? 0)?.['creampie_fetish_exp']) + '. Risky/unsafe EXP: ' + (((s as any).trait_vars ?? 0)?.['creampie_fetish_exp_risky']) + '.';
        }
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'cheat') {
    if (String((s as any).locArgs?.[2] ?? '') === -99  ||  String((s as any).locArgs?.[2] ?? '') === 0) {
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['creampie_fetish_exp'] = 0;
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['creampie_fetish_exp_risky'] = 0;
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['creampie_fetish_prev'] = 0;
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['creampie_fetish_prev_risky'] = 0;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'creampie_fetish', 0]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (String((s as any).locArgs?.[2] ?? '') === 1) {
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['creampie_fetish_exp'] = 150;
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['creampie_fetish_exp_risky'] = 0;
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['creampie_fetish_prev'] = 0;
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['creampie_fetish_prev_risky'] = 0;
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'creampie_fetish', 1]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (String((s as any).locArgs?.[2] ?? '') === 2) {
          ((s as any).trait_vars = (s as any).trait_vars ?? {})['creampie_fetish_exp'] = 200;
          ((s as any).trait_vars = (s as any).trait_vars ?? {})['creampie_fetish_exp_risky'] = 100;
          ((s as any).trait_vars = (s as any).trait_vars ?? {})['creampie_fetish_prev'] = 0;
          ((s as any).trait_vars = (s as any).trait_vars ?? {})['creampie_fetish_prev_risky'] = 0;
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'creampie_fetish', 2]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterFertility(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'daily') {
    if (((s as any).cheatVars ?? 0)?.['fertility_disabled']) {
      // TODO-QSP: exit
    }
    if (((s as any).pilldaychk ?? 0) === ((s as any).daystart ?? 0)  &&  (!((s as any).ptype ?? 0))) {
      if (((s as any).trait_vars ?? 0)?.['fertility_bc_conditioning'] > 0) {
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['fertility_bc_conditioning'] = ((s as any).trait_vars['fertility_bc_conditioning'] ?? 0) - (4);
      }
    } else {
      if (((s as any).pilldaychk ?? 0) < ((s as any).daystart ?? 0)) {
        if (((s as any).trait_vars ?? 0)?.['fertility_bc_conditioning'] > 0) {
          ((s as any).trait_vars = (s as any).trait_vars ?? {})['fertility_bc_conditioning'] = ((s as any).trait_vars['fertility_bc_conditioning'] ?? 0) - (2);
        }
      }
    }
    if (((s as any).trait_vars ?? 0)?.['fertility_bc_conditioning'] < 0) {
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['fertility_bc_conditioning'] = 0;
    }
    if (((s as any).trait_vars ?? 0)?.['fertility_bc_conditioning'] >= 10) {
      if (((s as any).trait_vars ?? 0)?.['fertility'] < 2) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'hypno_grant']; enterFertility(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    } else {
      if (((s as any).trait_vars ?? 0)?.['fertility'] === 2) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'fertility', (((s as any).trait_vars ?? 0)?.['fertility_precond'])]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'hypno_grant') {
    ((s as any).trait_vars = (s as any).trait_vars ?? {})['fertility_precond'] = (((s as any).trait_vars ?? 0)?.['fertility']);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'fertility', 2]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'details') {
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['hidden'] = 0;
    if (((s as any).trait_vars ?? 0)?.['fertility'] === 0) {
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Fertility';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['icon'] = 'hyper_fertile.png';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'You\'re not particularly fertile or infertile. Your chances of conception are average.';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'Your fertility has returned to normal.';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = (-1);
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = (-1);
    } else {
      if (((s as any).trait_vars ?? 0)?.['fertility'] === 1) {
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Hyper Fertile';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['icon'] = 'hyper_fertile.png';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'Your body is extremely fertile. Your chances of conception are significantly increased.';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'You\'ve gained the trait <b>Hyper Fertile</b>.';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = (-1);
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = (-1);
      } else {
        if (((s as any).trait_vars ?? 0)?.['fertility'] === 2) {
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Hormonally Conditioned';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['icon'] = 'hyper_fertile.png';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'For some reason, your body is extremely fertile. You can\'t explain why, but your chances of conception are significantly increased.<br>Luckily, you\'re already using the birth control pills Dr. Pavlov gave you, so there\'s nothing to worry about.';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'For some reason, you\'ve become <b>Hormonally Conditioned</b>. Thankfully you\'re already on birth control, so there\'s nothing to worry about.';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp'] = (((s as any).trait_vars ?? 0)?.['fertility_bc_conditioning']);
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = (-1);
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = (-1);
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'Conditioning: ' + (((s as any).trait_vars ?? 0)?.['fertility_bc_conditioning']) + '/50. Decays if the original cause is removed.';
        } else {
          if (((s as any).trait_vars ?? 0)?.['fertility'] === -1) {
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Infertile';
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['icon'] = 'infertile.png';
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'Your body is mostly infertile. You\'d struggle to conceive, even if you wanted to.';
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'You\'ve gained the trait <b>Infertile</b>.';
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = (-1);
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = (-1);
          } else {
            if (((s as any).trait_vars ?? 0)?.['fertility'] === -2) {
              ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Sterile';
              ((s as any).trait_temp = (s as any).trait_temp ?? {})['icon'] = 'infertile.png';
              ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'Your body is completely sterile. Conception is impossible for you.';
              ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'You\'ve gained the trait <b>Sterile</b>. Your body has become completely infertile.';
              ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = (-1);
              ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = (-1);
            }
          }
        }
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'cheat') {
    if (String((s as any).locArgs?.[2] ?? '') === -99) {
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['fertility_bc_conditioning'] = 0;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'fertility', 0]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'fertility', qspFunc(s, 'math', 'int_clamp', ((s as any).locArgs?.[2] ?? 0), (-2), 2)]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'overview') {
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['ov_label'] = 'Fertility';
    if (((s as any).trait_vars ?? 0)?.['fertility'] === 2) {
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['ov_val'] = 'Hormonally Conditioned';
    } else {
      if (((s as any).trait_vars ?? 0)?.['fertility'] === 1) {
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['ov_val'] = 'Hyper Fertile';
      } else {
        if (((s as any).trait_vars ?? 0)?.['fertility'] === 0) {
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['ov_val'] = 'Normal';
        } else {
          if (((s as any).trait_vars ?? 0)?.['fertility'] === -1) {
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['ov_val'] = 'Infertile';
          } else {
            if (((s as any).trait_vars ?? 0)?.['fertility'] === -2) {
              ((s as any).trait_temp = (s as any).trait_temp ?? {})['ov_val'] = 'Sterile';
            }
          }
        }
      }
    }
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['ov_left'] = 'gs \'traits\', \'fertility\', \'ov_set\', ' + qspFunc(s, 'math', 'int_clamp', (((s as any).trait_vars ?? {})?.['fertility'] ?? 0) - 1, (-2), 1);
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['ov_right'] = 'gs \'traits\', \'fertility\', \'ov_set\', ' + qspFunc(s, 'math', 'int_clamp', (((s as any).trait_vars ?? {})?.['fertility'] ?? 0) + 1, (-2), 1);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'ov_set') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'fertility', qspFunc(s, 'math', 'int_clamp', ((s as any).locArgs?.[2] ?? 0), (-2), 1)]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSensitivity(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'details') {
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['hidden'] = 1;
    if (((s as any).trait_vars ?? 0)?.['sensitivity'] <= -2) {
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Anorgasmia';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['icon'] = 'hard_to_cum_hypno.png';
      if (((s as any).therapistQW ?? 0)?.['hotel_key'] === 3) {
        if (((s as any).hypnoTime ?? 0) >= 10) {
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'It would be inappropriate for you to cum without permission from your husband. Orgasming without him feels wrong — almost unthinkable. You belong to him.';
        } else {
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'You find it nearly impossible to orgasm unless your husband is the one making you cum. You don\'t question it — it just feels right that way.';
        }
      } else {
        if (((s as any).trait_vars ?? 0)?.['sensitivity_override'] === 1) {
          if (((s as any).hypnoTime ?? 0) >= 10) {
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'It would be inappropriate to cum without your master\'s permission. Right now, in his presence, that restriction is lifted — as it should be.';
          } else {
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'You struggle to orgasm unless your master is the one making you cum. While you are with him, the difficulty lifts.';
          }
        } else {
          if (((s as any).hypnoTime ?? 0) >= 10) {
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'For some reason, orgasming feels inappropriate — almost forbidden — unless a specific, unnamed condition is met. You can\'t explain why. It just feels wrong to let yourself go.';
          } else {
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'For some reason you can\'t quite explain, it has become almost impossible for you to orgasm. It\'s a frustrating mystery.';
          }
        }
      }
    } else {
      if (((s as any).trait_vars ?? 0)?.['sensitivity'] === -1) {
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Hard to Please';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['icon'] = 'hard_to_please.png';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'Orgasms don\'t come easily to you. Your buildup rate is halved.';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'You\'ve developed the condition <b>Hard to Please</b>. It\'s become much harder to reach orgasm.';
      } else {
        if (((s as any).trait_vars ?? 0)?.['sensitivity'] === 0) {
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Normal Sensitivity';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['icon'] = 'easy_orgasms.png';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'Your sensitivity is perfectly average. Orgasms take their natural course.';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'Your sensitivity has returned to normal.';
        } else {
          if (((s as any).trait_vars ?? 0)?.['sensitivity'] === 1) {
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Easy Orgasms';
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['icon'] = 'easy_orgasms.png';
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'Orgasms come easily to you. Sometimes all it takes is one thrust. Your orgasm buildup rate is doubled.';
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'You\'ve gained the trait <b>Easy Orgasms</b>!';
          }
        }
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'cheat') {
    if (String((s as any).locArgs?.[2] ?? '') === -99  ||  String((s as any).locArgs?.[2] ?? '') === 0) {
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['sensitivity_override'] = 0;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sensitivity', 0]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (String((s as any).locArgs?.[2] ?? '') === -2) {
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['sensitivity_override'] = 0;
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sensitivity', (-2)]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (String((s as any).locArgs?.[2] ?? '') === -1  ||  String((s as any).locArgs?.[2] ?? '') === 1) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sensitivity', ((s as any).locArgs?.[2] ?? 0)]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterNewAgain(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'level') {
    if (String((s as any).locArgs?.[2] ?? '') === 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'new_again']; enterDeregisterAttskl(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['new_again-all-exp_gain'] = 100;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'new_again']; enterRegisterAttskl(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'daily') {
    if (((s as any).cheatVars ?? 0)?.['new_again_disabled']) {
      if (((s as any).trait_vars ?? 0)?.['new_again'] !== 0) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'new_again', 0]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
      return;
    }
    if (((s as any).trait_vars ?? 0)?.['new_again'] === 0) {
      if (((s as any).trait_vars ?? 0)?.['new_again_exp'] > 0) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'new_again', 1]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    } else {
      if (((s as any).trait_vars ?? 0)?.['new_again_exp'] > 0) {
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['new_again_exp'] = ((s as any).trait_vars['new_again_exp'] ?? 0) - (1);
      } else {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'new_again', 0]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'details') {
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Everything Is New Again';
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['icon'] = 'new_again.png';
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['hidden'] = 1;
    if (((s as any).trait_vars ?? 0)?.['new_again'] === 0) {
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'You\'ve been in this situation long enough to get used to it. You don\'t feel like a fish out of water anymore.';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'You\'ve lost the trait <b>Everything Is New Again</b>.';
    } else {
      if (((s as any).trait_vars ?? 0)?.['new_again'] === 1) {
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'Being thrust into a new life has forced you to re-evaluate and relearn everything. You pick up new skills more quickly for a short time.';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'You\'ve gained the trait <b>Everything Is New Again</b>.';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp'] = (((s as any).trait_vars ?? 0)?.['new_again_exp']);
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = 0;
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = (-1);
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = '' + (((s as any).trait_vars ?? 0)?.['new_again_exp']) + ' days remaining. ';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('Wears off on its own over time.');
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'cheat') {
    if (String((s as any).locArgs?.[2] ?? '') === -99  ||  String((s as any).locArgs?.[2] ?? '') === 0) {
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['new_again_exp'] = 0;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'new_again', 0]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (String((s as any).locArgs?.[2] ?? '') === 1) {
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['new_again_exp'] = 84;
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'new_again', 1]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterHeelPreference(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'minute') {
    if (((s as any).cheatVars ?? 0)?.['heel_preference_disabled']) {
      // TODO-QSP: exit
    }
    if (((s as any).temp_loop_mul ?? 0) <= 0) {
      // TODO-QSP: exit
    }
    if (((s as any).trait_vars ?? 0)?.['heel_preference'] >= 0) {
      if (((s as any).PShoHeels ?? 0) >= 6) {
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['heel_preference_exp'] = ((s as any).trait_vars['heel_preference_exp'] ?? 0) + (3 * ((s as any).temp_loop_mul ?? 0));
      } else {
        if (((s as any).PShoHeels ?? 0) === 5) {
          ((s as any).trait_vars = (s as any).trait_vars ?? {})['heel_preference_exp'] = ((s as any).trait_vars['heel_preference_exp'] ?? 0) + (2 * ((s as any).temp_loop_mul ?? 0));
        } else {
          if (((s as any).PShoHeels ?? 0) === 4) {
            ((s as any).trait_vars = (s as any).trait_vars ?? {})['heel_preference_exp'] = ((s as any).trait_vars['heel_preference_exp'] ?? 0) + (((s as any).temp_loop_mul ?? 0));
          } else {
            if (((s as any).PShoHeels ?? 0) === 3) {
              if (((s as any).trait_vars ?? 0)?.['heel_preference_exp'] < 50000) {
                if (((s as any).temp_loop_mul ?? 0) < 2  &&  (!(Math.floor(Math.random() * 2) + 0))) {
                  ((s as any).trait_vars = (s as any).trait_vars ?? {})['heel_preference_exp'] = ((s as any).trait_vars['heel_preference_exp'] ?? 0) + (1);
                } else {
                  ((s as any).trait_vars = (s as any).trait_vars ?? {})['heel_preference_exp'] = ((s as any).trait_vars['heel_preference_exp'] ?? 0) + (((s as any).temp_loop_mul ?? 0) / 2);
                }
              }
            } else {
              if (((s as any).PShoeHeels ?? 0) === 2) {
                if (((s as any).trait_vars ?? 0)?.['heel_preference_exp'] < 15000) {
                  if (((s as any).temp_loop_mul ?? 0) < 4  &&  (!(Math.floor(Math.random() * 4) + 0))) {
                    ((s as any).trait_vars = (s as any).trait_vars ?? {})['heel_preference_exp'] = ((s as any).trait_vars['heel_preference_exp'] ?? 0) + (1);
                  } else {
                    ((s as any).trait_vars = (s as any).trait_vars ?? {})['heel_preference_exp'] = ((s as any).trait_vars['heel_preference_exp'] ?? 0) + (((s as any).temp_loop_mul ?? 0) / 4);
                  }
                }
              } else {
                if (((s as any).PShoHeels ?? 0) === 1) {
                  ((s as any).trait_vars = (s as any).trait_vars ?? {})['heel_preference_exp'] = ((s as any).trait_vars['heel_preference_exp'] ?? 0) - (Math.min(2 * ((s as any).temp_loop_mul ?? 0), (((s as any).trait_vars ?? 0)?.['heel_preference_exp'])));
                }
              }
            }
          }
        }
      }
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['heel_preference_exp'] = Math.min((((s as any).trait_vars ?? 0)?.['heel_preference_exp']), 150000);
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'daily') {
    if (((s as any).cheatVars ?? 0)?.['heel_preference_disabled']) {
      // TODO-QSP: exit
    }
    if (((s as any).trait_vars ?? 0)?.['heel_preference'] < 0) {
      if (((s as any).trait_vars ?? 0)?.['heel_preference_exp'] >= 0) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'heel_preference', 0]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['heel_preference_daily_limit'] = 120;
    }
    if (((s as any).trait_vars ?? 0)?.['heel_preference'] >= 0  &&  ((s as any).trait_vars ?? 0)?.['heel_preference_exp'] > 0) {
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['heel_preference_exp'] = ((s as any).trait_vars['heel_preference_exp'] ?? 0) - (Math.min(100, (((s as any).trait_vars ?? 0)?.['heel_preference_exp'])));
    }
    if (((s as any).trait_vars ?? 0)?.['heel_preference'] >= 0) {
      if (((s as any).trait_vars ?? 0)?.['heel_preference_exp'] >= 120000) {
        if (((s as any).trait_vars ?? 0)?.['heel_preference'] !== 3) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'heel_preference', 3]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      } else {
        if (((s as any).trait_vars ?? 0)?.['heel_preference_exp'] >= 70000) {
          if (((s as any).trait_vars ?? 0)?.['heel_preference'] !== 2) {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'heel_preference', 2]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
          }
        } else {
          if (((s as any).trait_vars ?? 0)?.['heel_preference_exp'] >= 30000) {
            if (((s as any).trait_vars ?? 0)?.['heel_preference'] !== 1) {
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'heel_preference', 1]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
            }
          } else {
            if (((s as any).trait_vars ?? 0)?.['heel_preference'] !== 0) {
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'heel_preference', 0]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
            }
          }
        }
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'details') {
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['icon'] = 'heel_preference.png';
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['hidden'] = 0;
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp'] = (((s as any).trait_vars ?? 0)?.['heel_preference_exp']);
    if (((s as any).trait_vars ?? 0)?.['heel_preference'] === -1) {
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Bambi\'s First Steps';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['icon'] = 'heel_preference_bambi.png';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'You are still learning to walk in heels. Moving around in them feels awkward and clumsy.';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'You\'ve gained the trait <b>Bambi\'s First Steps</b>.';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = (-1);
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = 0;
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = '' + -(((s as any).trait_vars ?? {})?.['heel_preference_exp'] ?? 0) + ' progress steps remaining. ';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('Wear heels to recover — higher heels help more, up to 2 hours per day.');
    } else {
      if (((s as any).trait_vars ?? 0)?.['heel_preference'] === 0) {
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Heel Preference';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'You can walk in heels without much trouble.';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'You\'ve lost the trait <b>Bambi\'s First Steps</b>.';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = (-1);
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = 30000;
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'EXP: ' + (((s as any).trait_vars ?? 0)?.['heel_preference_exp']) + '. ';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('Wear heels to build a preference. The higher, the faster. Low heels only help up to 15k. ');
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('EXP decays by 100 daily and while wearing flats.');
      } else {
        if (((s as any).trait_vars ?? 0)?.['heel_preference'] === 1) {
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Heel Accustomed';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'You\'ve gotten so used to wearing heels that going flat feels a bit off. Your feet ache slightly in flats or when barefoot, and handling heels is easier.';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'You\'ve gained the trait <b>Heel Accustomed</b>. Going flat feels awkward now, and heels are slightly easier to handle.';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = 30000;
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = 70000;
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'EXP: ' + (((s as any).trait_vars ?? 0)?.['heel_preference_exp']) + '. ';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('Wear heels to progress. The higher, the faster. Low heels no longer help, and mid heels only help up to 50k. ');
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('EXP decays by 100 daily and while wearing flats.');
        } else {
          if (((s as any).trait_vars ?? 0)?.['heel_preference'] === 2) {
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Heel Dependent';
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'Your feet have adapted to heels so completely that anything below mid heels causes discomfort. Low heels ache, and flats are worse. You find walking in heels easier.';
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'You\'ve gained the trait <b>Heel Dependent</b>. You need your heels, and are better at handling them.';
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = 70000;
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = 120000;
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'EXP: ' + (((s as any).trait_vars ?? 0)?.['heel_preference_exp']) + '. ';
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('Wear high heels to progress. The higher, the faster. Low and medium heels no longer help. ');
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('EXP decays by 100 daily and while wearing flats.');
          } else {
            if (((s as any).trait_vars ?? 0)?.['heel_preference'] === 3) {
              ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Heel Addict';
              ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'Your feet were reshaped by your time in heels. Anything below high heels hurts — mid heels ache, low heels are worse, and flats are agony. Walking in heels is natural to you.';
              ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'You\'ve gained the trait <b>Heel Addict</b>. Heels are a necessity now, and easier to handle.';
              ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = 120000;
              ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = (-1);
              ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'EXP: ' + (((s as any).trait_vars ?? 0)?.['heel_preference_exp']) + '. ';
              ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('Wear high heels to maintain this trait. ');
              ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('EXP decays by 100 daily and while wearing flats.');
            }
          }
        }
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'cheat') {
    if (String((s as any).locArgs?.[2] ?? '') === -99  ||  String((s as any).locArgs?.[2] ?? '') === 0) {
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['heel_preference_exp'] = 0;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'heel_preference', 0]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (String((s as any).locArgs?.[2] ?? '') === -1) {
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['heel_preference_exp'] = (-1000);
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'heel_preference', (-1)]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (String((s as any).locArgs?.[2] ?? '') === 1) {
          ((s as any).trait_vars = (s as any).trait_vars ?? {})['heel_preference_exp'] = 50000;
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'heel_preference', 1]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          if (String((s as any).locArgs?.[2] ?? '') === 2) {
            ((s as any).trait_vars = (s as any).trait_vars ?? {})['heel_preference_exp'] = 95000;
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'heel_preference', 2]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
          } else {
            if (String((s as any).locArgs?.[2] ?? '') === 3) {
              ((s as any).trait_vars = (s as any).trait_vars ?? {})['heel_preference_exp'] = 135000;
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'heel_preference', 3]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
            }
          }
        }
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'stat_display') {
    if (((s as any).cheatVars ?? 0)?.['heel_preference_disabled']) {
      // TODO-QSP: exit
    }
    if (((s as any).trait_vars ?? 0)?.['heel_preference'] === -1) {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['heel_preference'] = 'You are still learning to walk in heels (Bambi\'s First Steps).';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'heel_preference', 'neg', 'traits/heel_preference_bambi', 4);
    } else {
      if (((s as any).trait_vars ?? 0)?.['heel_preference'] === 3  &&  ((s as any).PShoHeels ?? 0) <= 2) {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['heel_preference'] = 'Your feet ache wearing flats — you need your heels.';
        qspCall(s, 'stat_display_compute', 'queue_msg', 'heel_preference', 'neg', 'traits/heel_preference', 4);
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterAddictivePersonality(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'daily') {
    if (((s as any).cheatVars ?? 0)?.['addictive_personality_disabled']) {
      // TODO-QSP: exit
    }
    (s as any).temp_addictive_exp = (((s as any).drugVars ?? {})?.['cigarettes_exp'] ?? 0) + (((s as any).drugVars ?? {})?.['weed_exp'] ?? 0) + (((s as any).drugVars ?? {})?.['heroin_exp'] ?? 0) + (((s as any).drugVars ?? {})?.['cocaine_exp'] ?? 0) + (((s as any).drugVars ?? {})?.['alcohol_exp'] ?? 0) + (((s as any).drugVars ?? {})?.['amphetamine_exp'] ?? 0) + (((s as any).drugVars ?? {})?.['painkiller_exp'] ?? 0);
    ((s as any).trait_vars = (s as any).trait_vars ?? {})['addictive_personality_exp'] = ((s as any).trait_vars['addictive_personality_exp'] ?? 0) + (((s as any).temp_addictive_exp ?? 0) - (((s as any).trait_vars ?? {})?.['addictive_personality_prev'] ?? 0));
    ((s as any).trait_vars = (s as any).trait_vars ?? {})['addictive_personality_prev'] = ((s as any).temp_addictive_exp ?? 0);
    if (((s as any).trait_vars ?? 0)?.['addictive_personality_exp'] >= 4) {
      if (((s as any).trait_vars ?? 0)?.['addictive_personality'] !== 3) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'addictive_personality', 3]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    } else {
      if (((s as any).trait_vars ?? 0)?.['addictive_personality_exp'] >= 3) {
        if (((s as any).trait_vars ?? 0)?.['addictive_personality'] !== 2) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'addictive_personality', 2]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      } else {
        if (((s as any).trait_vars ?? 0)?.['addictive_personality_exp'] >= 2) {
          if (((s as any).trait_vars ?? 0)?.['addictive_personality'] !== 1) {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'addictive_personality', 1]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
          }
        } else {
          if (((s as any).trait_vars ?? 0)?.['addictive_personality_exp'] === 0) {
            if (((s as any).trait_vars ?? 0)?.['addictive_personality'] !== 0) {
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'addictive_personality', 0]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
            }
          }
        }
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'details') {
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['icon'] = 'addictive_personality.png';
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['hidden'] = 0;
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp'] = (((s as any).trait_vars ?? 0)?.['addictive_personality_exp']);
    if (((s as any).trait_vars ?? 0)?.['addictive_personality'] === 0) {
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Addictive Personality';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'You\'re not particularly prone to addiction. Your relationship with substances is no different from most.';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'You\'ve lost the trait <b>Addictive Personality</b>.';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = (-1);
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = 2;
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'Addictive substances encountered: ' + (((s as any).trait_vars ?? 0)?.['addictive_personality_exp']) + '. ';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('Try more addictive substances to develop this trait.');
    } else {
      if (((s as any).trait_vars ?? 0)?.['addictive_personality'] === 1) {
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Addictive Personality (Level 1)';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'You\'re somewhat prone to addiction. Refusing substances costs more willpower than it used to.';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg-up'] = 'You\'ve gained the trait <b>Addictive Personality</b>.';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg-down'] = '<b>Addictive Personality</b> has decreased to Lv. 1.';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = (-1);
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = 3;
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'Addictive substances encountered: ' + (((s as any).trait_vars ?? 0)?.['addictive_personality_exp']) + '. ';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('Encounter more addictive substances to progress.');
      } else {
        if (((s as any).trait_vars ?? 0)?.['addictive_personality'] === 2) {
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Addictive Personality (Level 2)';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'You\'re quite prone to addiction. Refusing substances takes a significant amount of willpower.';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg-up'] = '<b>Addictive Personality</b> has increased to Lv. 2.';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg-down'] = '<b>Addictive Personality</b> has decreased to Lv. 2.';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = (-1);
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = 4;
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'Addictive substances encountered: ' + (((s as any).trait_vars ?? 0)?.['addictive_personality_exp']) + '. ';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('Encounter more addictive substances to progress.');
        } else {
          if (((s as any).trait_vars ?? 0)?.['addictive_personality'] === 3) {
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Addictive Personality (Level 3)';
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'You\'re deeply prone to addiction. Refusing substances is extremely difficult.';
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg-up'] = '<b>Addictive Personality</b> has increased to Lv. 3.';
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = (-1);
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = (-1);
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'Addictive substances encountered: ' + (((s as any).trait_vars ?? 0)?.['addictive_personality_exp']) + '.';
          }
        }
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'cheat') {
    if (String((s as any).locArgs?.[2] ?? '') === -99  ||  String((s as any).locArgs?.[2] ?? '') === 0) {
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['addictive_personality_exp'] = 0;
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['addictive_personality_prev'] = 0;
      ((s as any).drugVars = (s as any).drugVars ?? {})['cigarettes_exp'] = 0;
      ((s as any).drugVars = (s as any).drugVars ?? {})['weed_exp'] = 0;
      ((s as any).drugVars = (s as any).drugVars ?? {})['heroin_exp'] = 0;
      ((s as any).drugVars = (s as any).drugVars ?? {})['cocaine_exp'] = 0;
      ((s as any).drugVars = (s as any).drugVars ?? {})['alcohol_exp'] = 0;
      ((s as any).drugVars = (s as any).drugVars ?? {})['amphetamine_exp'] = 0;
      ((s as any).drugVars = (s as any).drugVars ?? {})['painkiller_exp'] = 0;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'addictive_personality', 0]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (String((s as any).locArgs?.[2] ?? '') === 1) {
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['addictive_personality_exp'] = 2;
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'addictive_personality', 1]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (String((s as any).locArgs?.[2] ?? '') === 2) {
          ((s as any).trait_vars = (s as any).trait_vars ?? {})['addictive_personality_exp'] = 3;
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'addictive_personality', 2]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          if (String((s as any).locArgs?.[2] ?? '') === 3) {
            ((s as any).trait_vars = (s as any).trait_vars ?? {})['addictive_personality_exp'] = 4;
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'addictive_personality', 3]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
          }
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterButtslut(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'daily') {
    if (((s as any).cheatVars ?? 0)?.['buttslut_disabled']) {
      // TODO-QSP: exit
    }
    (s as any).temp_anal_orgasms_today = ((s as any).orgasm_anal ?? 0) - (((s as any).trait_vars ?? {})?.['buttslut_prev_anal'] ?? 0);
    if (((s as any).temp_anal_orgasms_today ?? 0) > 0) {
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['buttslut_exp'] = ((s as any).trait_vars['buttslut_exp'] ?? 0) + (((s as any).temp_anal_orgasms_today ?? 0));
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['buttslut_prev_anal'] = ((s as any).orgasm_anal ?? 0);
    } else {
      if (((s as any).trait_vars ?? 0)?.['buttslut_exp'] > 10) {
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['buttslut_exp'] = ((s as any).trait_vars['buttslut_exp'] ?? 0) - (1);
      }
    }
    if (((s as any).trait_vars ?? 0)?.['buttslut_exp'] >= 75) {
      if (((s as any).trait_vars ?? 0)?.['buttslut'] !== 3) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'buttslut', 3]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    } else {
      if (((s as any).trait_vars ?? 0)?.['buttslut_exp'] >= 25) {
        if (((s as any).trait_vars ?? 0)?.['buttslut'] !== 2) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'buttslut', 2]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      } else {
        if (((s as any).trait_vars ?? 0)?.['buttslut_exp'] >= 10) {
          if (((s as any).trait_vars ?? 0)?.['buttslut'] !== 1) {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'buttslut', 1]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
          }
        } else {
          if (((s as any).trait_vars ?? 0)?.['buttslut_exp'] === 0) {
            if (((s as any).trait_vars ?? 0)?.['buttslut'] !== 0) {
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'buttslut', 0]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
            }
          }
        }
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'details') {
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['icon'] = 'buttslut.png';
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['hidden'] = 0;
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp'] = (((s as any).trait_vars ?? 0)?.['buttslut_exp']);
    if (((s as any).trait_vars ?? 0)?.['buttslut'] === 0) {
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Buttslut';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'Anal sex doesn\'t particularly do it for you. You could take it or leave it.';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'You\'ve lost the trait <b>Buttslut</b>.';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = (-1);
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = 10;
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'Anal orgasms: ' + (((s as any).trait_vars ?? 0)?.['buttslut_exp']) + '. ';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('Have anal orgasms to gain this trait.');
    } else {
      if (((s as any).trait_vars ?? 0)?.['buttslut'] === 1) {
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Buttslut (Level 1)';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'You\'ve developed a taste for anal sex. The stimulation you get from it is noticeably more intense.';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg-up'] = 'You\'ve gained the trait <b>Buttslut</b>.';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg-down'] = '<b>Buttslut</b> has decreased to Lv. 1.';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = (-1);
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = 25;
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'EXP: ' + (((s as any).trait_vars ?? 0)?.['buttslut_exp']) + '. ';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('Have more anal orgasms to progress. ');
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('EXP decays by 1 daily without anal orgasms, but this level cannot be lost naturally.');
      } else {
        if (((s as any).trait_vars ?? 0)?.['buttslut'] === 2) {
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Buttslut (Level 2)';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'You really enjoy anal sex. What once was uncomfortable is now a source of real pleasure.';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg-up'] = '<b>Buttslut</b> has increased to Lv. 2.';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg-down'] = '<b>Buttslut</b> has decreased to Lv. 2.';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = 25;
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = 75;
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'EXP: ' + (((s as any).trait_vars ?? 0)?.['buttslut_exp']) + '. ';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('Have more anal orgasms to progress. ');
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('EXP decays by 1 daily without anal orgasms.');
        } else {
          if (((s as any).trait_vars ?? 0)?.['buttslut'] === 3) {
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Buttslut (Level 3)';
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'You are an anal addict. Nothing gets you going quite like being taken from behind.';
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg-up'] = '<b>Buttslut</b> has increased to Lv. 3.';
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = 75;
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = (-1);
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'EXP: ' + (((s as any).trait_vars ?? 0)?.['buttslut_exp']) + '. ';
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('EXP decays by 1 daily without anal orgasms.');
          }
        }
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'cheat') {
    if (String((s as any).locArgs?.[2] ?? '') === -99  ||  String((s as any).locArgs?.[2] ?? '') === 0) {
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['buttslut_exp'] = 0;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'buttslut', 0]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (String((s as any).locArgs?.[2] ?? '') === 1) {
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['buttslut_exp'] = 10;
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'buttslut', 1]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (String((s as any).locArgs?.[2] ?? '') === 2) {
          ((s as any).trait_vars = (s as any).trait_vars ?? {})['buttslut_exp'] = 50;
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'buttslut', 2]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          if (String((s as any).locArgs?.[2] ?? '') === 3) {
            ((s as any).trait_vars = (s as any).trait_vars ?? {})['buttslut_exp'] = 100;
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'buttslut', 3]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
          }
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterExhibitionist(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'daily') {
    if (((s as any).cheatVars ?? 0)?.['exhibitionist_disabled']) {
      // TODO-QSP: exit
    }
    if (((s as any).trait_vars ?? 0)?.['exhibitionist_exp'] > 0) {
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['exhibitionist_exp'] = ((s as any).trait_vars['exhibitionist_exp'] ?? 0) - (1);
    }
    if (((s as any).trait_vars ?? 0)?.['exhibitionist_exp'] >= 100) {
      if (((s as any).exhibitionQW ?? 0) >= 3  &&  ((s as any).trait_vars ?? 0)?.['exhibitionist'] !== 3) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'exhibitionist', 3]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    } else {
      if (((s as any).trait_vars ?? 0)?.['exhibitionist_exp'] >= 50) {
        if (((s as any).trait_vars ?? 0)?.['exhibitionist'] !== 2) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'exhibitionist', 2]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      } else {
        if (((s as any).trait_vars ?? 0)?.['exhibitionist_exp'] >= 10) {
          if (((s as any).trait_vars ?? 0)?.['exhibitionist'] !== 1) {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'exhibitionist', 1]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
          }
        } else {
          if (((s as any).trait_vars ?? 0)?.['exhibitionist'] !== 0) {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'exhibitionist', 0]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
          }
        }
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'details') {
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['icon'] = 'exhibitionist.png';
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['hidden'] = 0;
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp'] = (((s as any).trait_vars ?? 0)?.['exhibitionist_exp']);
    if (((s as any).trait_vars ?? 0)?.['exhibitionist'] === 0) {
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Exhibitionist';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'You don\'t have much interest in exhibitionism. The idea of being seen naked makes you uncomfortable.';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'You\'ve lost the trait <b>Exhibitionist</b>.';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = (-1);
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = 10;
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'EXP: ' + (((s as any).trait_vars ?? 0)?.['exhibitionist_exp']) + '. ';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('Engage in exhibitionism to gain this trait. ');
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('EXP decays by 1 daily.');
    } else {
      if (((s as any).trait_vars ?? 0)?.['exhibitionist'] === 1) {
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Exhibitionist (Level 1)';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'You\'ve started to enjoy the thrill of being seen. There\'s something exciting about it.';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg-up'] = 'You\'ve gained the trait <b>Exhibitionist</b>.';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg-down'] = '<b>Exhibitionist</b> has decreased to Lv. 1.';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = 10;
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = 50;
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'EXP: ' + (((s as any).trait_vars ?? 0)?.['exhibitionist_exp']) + '. ';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('Engage in exhibitionism to progress. ');
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('EXP decays by 1 daily.');
      } else {
        if (((s as any).trait_vars ?? 0)?.['exhibitionist'] === 2) {
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Exhibitionist (Level 2)';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'You get a real kick out of exposing yourself. The rush is hard to replicate any other way.';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg-up'] = '<b>Exhibitionist</b> has increased to Lv. 2.';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg-down'] = '<b>Exhibitionist</b> has decreased to Lv. 2.';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = 50;
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = 100;
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'EXP: ' + (((s as any).trait_vars ?? 0)?.['exhibitionist_exp']) + '. ';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('Engage in exhibitionism to progress. Lv. 3 requires a specific story event. ');
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('EXP decays by 1 daily.');
        } else {
          if (((s as any).trait_vars ?? 0)?.['exhibitionist'] === 3) {
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Exhibitionist (Level 3)';
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'You are a shameless exhibitionist. Being exposed in public feels more natural than being covered.';
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg-up'] = '<b>Exhibitionist</b> has increased to Lv. 3.';
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = 100;
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = (-1);
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'EXP: ' + (((s as any).trait_vars ?? 0)?.['exhibitionist_exp']) + '. ';
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('EXP decays by 1 daily.');
          }
        }
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'cheat') {
    if (String((s as any).locArgs?.[2] ?? '') === -99  ||  String((s as any).locArgs?.[2] ?? '') === 0) {
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['exhibitionist_exp'] = 0;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'exhibitionist', 0]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (String((s as any).locArgs?.[2] ?? '') === 1) {
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['exhibitionist_exp'] = 30;
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'exhibitionist', 1]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (String((s as any).locArgs?.[2] ?? '') === 2) {
          ((s as any).trait_vars = (s as any).trait_vars ?? {})['exhibitionist_exp'] = 74;
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'exhibitionist', 2]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          if (String((s as any).locArgs?.[2] ?? '') === 3) {
            ((s as any).trait_vars = (s as any).trait_vars ?? {})['exhibitionist_exp'] = 150;
            if (((s as any).exhibitionQW ?? 0) < 3) {
              (s as any).exhibitionQW = 3;
            }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'exhibitionist', 3]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
          }
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterPantyPreference(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'minute') {
    if (((s as any).cheatVars ?? 0)?.['panty_preference_disabled']) {
      // TODO-QSP: exit
    }
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      // TODO-QSP: exit
    }
    if ((((s as any).pantyworntype ?? 0) === 'none'  ||  ((s as any).PPanCoverFront ?? 0) === 4)  &&  (!((s as any).PCloPanties ?? 0))) {
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['panty_preference_exp'] = ((s as any).trait_vars['panty_preference_exp'] ?? 0) + (((((s as any).trait_vars ?? 0)?.['panty_preference'] === 0) ? (((((s as any).PCloSkirt ?? 0) > 0) ? (2) : (1))) : (1)));
    } else {
      if ((Math.floor(Math.random() * 2) + 0) === 0  &&  ((s as any).trait_vars ?? 0)?.['panty_preference_exp'] > 0) {
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['panty_preference_exp'] = ((s as any).trait_vars['panty_preference_exp'] ?? 0) - (1);
        if (((s as any).trait_vars ?? 0)?.['panty_preference'] === 3) {
          qspCall(s, 'mood', 'lower', 'tiny');
        }
      }
    }
    if (((s as any).trait_vars ?? 0)?.['panty_preference_exp'] >= 40000) {
      if (((s as any).trait_vars ?? 0)?.['panty_preference'] !== 3) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'panty_preference', 3]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    } else {
      if (((s as any).trait_vars ?? 0)?.['panty_preference_exp'] >= 30000) {
        if (((s as any).trait_vars ?? 0)?.['panty_preference'] !== 2) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'panty_preference', 2]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      } else {
        if (((s as any).trait_vars ?? 0)?.['panty_preference_exp'] >= 15000) {
          if (((s as any).trait_vars ?? 0)?.['panty_preference'] !== 1) {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'panty_preference', 1]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
          }
        } else {
          if (((s as any).trait_vars ?? 0)?.['panty_preference'] !== 0) {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'panty_preference', 0]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
          }
        }
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'details') {
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['icon'] = 'commando.png';
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['hidden'] = 0;
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp'] = (((s as any).trait_vars ?? 0)?.['panty_preference_exp']);
    if (((s as any).trait_vars ?? 0)?.['panty_preference'] === 0) {
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Commando';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['icon'] = 'commando-panties.png';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'The idea of going without panties is uncomfortable to you. You prefer to wear panties with any outfit.';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'You\'ve lost the trait <b>Commando</b>.';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = (-1);
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = 15000;
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'EXP: ' + (((s as any).trait_vars ?? 0)?.['panty_preference_exp']) + '. ';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('Go without panties to gain this trait. ');
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('EXP decays while wearing panties.');
    } else {
      if (((s as any).trait_vars ?? 0)?.['panty_preference'] === 1) {
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Commando (Level 1)';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'You\'re comfortable going without panties in skirts. Pants still feel a little off without them, though.';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg-up'] = 'You\'ve gained the trait <b>Commando</b>.';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg-down'] = '<b>Commando</b> has decreased to Lv. 1.';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = 15000;
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = 30000;
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'EXP: ' + (((s as any).trait_vars ?? 0)?.['panty_preference_exp']) + '. ';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('Continue going without panties to progress. ');
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('EXP decays while wearing panties.');
      } else {
        if (((s as any).trait_vars ?? 0)?.['panty_preference'] === 2) {
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Commando (Level 2)';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'You\'re comfortable going without panties entirely, even when wearing pants.';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg-up'] = '<b>Commando</b> has increased to Lv. 2.';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg-down'] = '<b>Commando</b> has decreased to Lv. 2.';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = 30000;
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = 40000;
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'EXP: ' + (((s as any).trait_vars ?? 0)?.['panty_preference_exp']) + '. ';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('Continue going without panties to progress. ');
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('EXP decays while wearing panties.');
        } else {
          if (((s as any).trait_vars ?? 0)?.['panty_preference'] === 3) {
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Commando (Level 3)';
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'Going commando has become second nature. Wearing panties actually feels wrong — uncomfortable and suffocating.';
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = '<b>Commando</b> has increased to Lv. 3.';
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = 40000;
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = (-1);
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'EXP: ' + (((s as any).trait_vars ?? 0)?.['panty_preference_exp']) + '. ';
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('EXP decays while wearing panties, causing mood loss at this level.');
          }
        }
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'cheat') {
    if (String((s as any).locArgs?.[2] ?? '') === -99  ||  String((s as any).locArgs?.[2] ?? '') === 0) {
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['panty_preference_exp'] = 0;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'panty_preference', 0]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (String((s as any).locArgs?.[2] ?? '') === 1) {
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['panty_preference_exp'] = 22000;
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'panty_preference', 1]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (String((s as any).locArgs?.[2] ?? '') === 2) {
          ((s as any).trait_vars = (s as any).trait_vars ?? {})['panty_preference_exp'] = 35000;
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'panty_preference', 2]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          if (String((s as any).locArgs?.[2] ?? '') === 3) {
            ((s as any).trait_vars = (s as any).trait_vars ?? {})['panty_preference_exp'] = 45000;
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'panty_preference', 3]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
          }
        }
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'stat_display') {
    if (((s as any).cheatVars ?? 0)?.['panty_preference_disabled']) {
      // TODO-QSP: exit
    }
    if (((s as any).trait_vars ?? 0)?.['panty_preference'] === 3  &&  ((s as any).PCloPanties ?? 0) === 1) {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['panty_preference'] = 'Wearing panties feels wrong — you\'re so used to going commando.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'panty_preference', 'neg', 'traits/commando', 4);
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDrinking(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'daily') {
    if (((s as any).cheatVars ?? 0)?.['drinking_disabled']) {
      // TODO-QSP: exit
    }
    if (((s as any).trait_vars ?? 0)?.['alko_today'] > 0) {
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['drinking_days_sober'] = 0;
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['drinking_exp'] = ((s as any).trait_vars['drinking_exp'] ?? 0) + (Math.min((((s as any).trait_vars ?? 0)?.['alko_today']), 9));
    } else {
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['drinking_days_sober'] = ((s as any).trait_vars['drinking_days_sober'] ?? 0) + (1);
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['drinking_exp'] = ((s as any).trait_vars['drinking_exp'] ?? 0) - (qspFunc(s, 'math', 'int_clamp', (((s as any).trait_vars ?? {})?.['drinking_days_sober'] ?? 0) / 3, 1, 9));
    }
    ((s as any).trait_vars = (s as any).trait_vars ?? {})['alko_today'] = 0;
    ((s as any).trait_vars = (s as any).trait_vars ?? {})['drinking_exp'] = qspFunc(s, 'math', 'int_clamp', (((s as any).trait_vars ?? 0)?.['drinking_exp']), (-100), 100);
    if (((s as any).trait_vars ?? 0)?.['drinking_exp'] >= 50) {
      if (((s as any).trait_vars ?? 0)?.['drinking'] !== 1) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'drinking', 1]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    } else {
      if (((s as any).trait_vars ?? 0)?.['drinking_exp'] <= -50) {
        if (((s as any).trait_vars ?? 0)?.['drinking'] !== -1) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'drinking', (-1)]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      } else {
        if (((s as any).trait_vars ?? 0)?.['drinking'] !== 0) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'drinking', 0]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'details') {
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['hidden'] = 0;
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp'] = (((s as any).trait_vars ?? 0)?.['drinking_exp']);
    if (((s as any).trait_vars ?? 0)?.['drinking'] === 0) {
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Alcohol Tolerance';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['icon'] = 'alko.png';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'You have an average tolerance for alcohol. Nothing to write home about.';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg-up'] = 'You\'ve lost the trait <b>Lightweight</b>. Your alcohol tolerance is now average.';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg-down'] = 'You\'ve lost the trait <b>Heavyweight</b>. Your alcohol tolerance is now average.';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = (-50);
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = 50;
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'Tolerance EXP: ' + (((s as any).trait_vars ?? 0)?.['drinking_exp']) + '. ';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('Drink regularly to build tolerance. ');
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('Going sober reduces tolerance over time.');
    } else {
      if (((s as any).trait_vars ?? 0)?.['drinking'] === 1) {
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Alcohol Tolerance — Heavyweight';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['icon'] = 'alko-heavy.png';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'You have a high tolerance for alcohol. You can drink most people under the table without breaking a sweat.';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg-up'] = 'You\'ve gained the trait <b>Heavyweight</b>.';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = 50;
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = (-1);
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'Tolerance EXP: ' + (((s as any).trait_vars ?? 0)?.['drinking_exp']) + '. ';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('Going sober reduces tolerance over time.');
      } else {
        if (((s as any).trait_vars ?? 0)?.['drinking'] === -1) {
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Alcohol Tolerance — Lightweight';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['icon'] = 'alko-light.png';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'You have a low tolerance for alcohol. Even a small amount hits you harder than most.';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg-up'] = 'You\'ve gained the trait <b>Lightweight</b>.';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = (-1);
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = (-50);
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'Tolerance EXP: ' + (((s as any).trait_vars ?? 0)?.['drinking_exp']) + '. ';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('Drink alcohol regularly to recover.');
        }
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'cheat') {
    if (String((s as any).locArgs?.[2] ?? '') === -99  ||  String((s as any).locArgs?.[2] ?? '') === 0) {
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['drinking_exp'] = 0;
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['drinking_days_sober'] = 0;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'drinking', 0]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (String((s as any).locArgs?.[2] ?? '') === -1) {
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['drinking_exp'] = (-75);
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['drinking_days_sober'] = 0;
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'drinking', (-1)]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (String((s as any).locArgs?.[2] ?? '') === 1) {
          ((s as any).trait_vars = (s as any).trait_vars ?? {})['drinking_exp'] = 75;
          ((s as any).trait_vars = (s as any).trait_vars ?? {})['drinking_days_sober'] = 0;
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'drinking', 1]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'overview') {
    if (((s as any).trait_vars ?? 0)?.['drinking'] === -1) {
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['ov_val'] = 'Lightweight';
    } else {
      if (((s as any).trait_vars ?? 0)?.['drinking'] === 1) {
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['ov_val'] = 'Heavyweight';
      } else {
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['ov_val'] = 'Normal';
      }
    }
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['ov_label'] = 'Alcohol Tolerance';
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['ov_left'] = 'gs \'traits\', \'drinking\', \'ov_set\', ' + qspFunc(s, 'math', 'int_clamp', (((s as any).trait_vars ?? {})?.['drinking'] ?? 0) - 1, (-1), 1);
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['ov_right'] = 'gs \'traits\', \'drinking\', \'ov_set\', ' + qspFunc(s, 'math', 'int_clamp', (((s as any).trait_vars ?? {})?.['drinking'] ?? 0) + 1, (-1), 1);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'ov_set') {
    if (String((s as any).locArgs?.[2] ?? '') === -1) {
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['drinking_exp'] = (-50);
    } else {
      if (String((s as any).locArgs?.[2] ?? '') === 1) {
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['drinking_exp'] = 50;
      } else {
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['drinking_exp'] = 0;
      }
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'drinking', qspFunc(s, 'math', 'int_clamp', ((s as any).locArgs?.[2] ?? 0), (-1), 1)]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterAcademic(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'daily') {
    if (((s as any).cheatVars ?? 0)?.['academic_disabled']) {
      // TODO-QSP: exit
    }
    if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).kanikuli ?? 0) === 0  &&  ((s as any).week ?? 0) <= 5) {
      (s as any).temp_lessons_today = ((((s as any).week ?? 0) === 1  ||  ((s as any).week ?? 0) === 3  ||  ((s as any).week ?? 0) === 5) ? (5) : (6));
      if (((s as any).trait_vars ?? 0)?.['academic_lessons'] >= ((s as any).temp_lessons_today ?? 0)) {
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['academic_exp'] = ((s as any).trait_vars['academic_exp'] ?? 0) + (1);
      } else {
        if (((s as any).trait_vars ?? 0)?.['academic_lessons'] === ((s as any).temp_lessons_today ?? 0) - 1) {
          ((s as any).trait_vars = (s as any).trait_vars ?? {})['academic_exp'] = ((s as any).trait_vars['academic_exp'] ?? 0) - (((((s as any).trait_vars ?? 0)?.['academic'] > 0) ? (1) : ((Math.floor(Math.random() * 2) + 0))));
        } else {
          if (((s as any).trait_vars ?? 0)?.['academic_lessons'] <= ((s as any).temp_lessons_today ?? 0) - 2) {
            ((s as any).trait_vars = (s as any).trait_vars ?? {})['academic_exp'] = ((s as any).trait_vars['academic_exp'] ?? 0) - (((((s as any).trait_vars ?? 0)?.['academic'] > 0) ? (2) : ((Math.floor(Math.random() * 2) + 1))));
          }
        }
      }
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['academic_lessons'] = 0;
    } else {
      if (((s as any).university ?? 0)?.['semester_week'] > 0  &&  ((s as any).university ?? 0)?.['student'] === 1  &&  ((s as any).week ?? 0) === 5) {
        if (((s as any).trait_vars ?? 0)?.['academic_started'] === 0) {
          ((s as any).trait_vars = (s as any).trait_vars ?? {})['academic_started'] = 1;
          // TODO-QSP: exit
        }
        if (((s as any).trait_vars ?? 0)?.['academic_lessons'] >= 8) {
          ((s as any).trait_vars = (s as any).trait_vars ?? {})['academic_exp'] = ((s as any).trait_vars['academic_exp'] ?? 0) + (20 * ((((s as any).trait_vars ?? {})?.['academic_lessons'] ?? 0) - 7));
        } else {
          if (((s as any).trait_vars ?? 0)?.['academic_lessons'] <= 3) {
            ((s as any).trait_vars = (s as any).trait_vars ?? {})['academic_exp'] = ((s as any).trait_vars['academic_exp'] ?? 0) - (20 * ((((s as any).trait_vars ?? 0)?.['academic'] > 0) ? (2) : ((Math.floor(Math.random() * 2) + 1))));
          }
        }
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['academic_lessons'] = 0;
      }
    }
    ((s as any).trait_vars = (s as any).trait_vars ?? {})['academic_exp'] = qspFunc(s, 'math', 'int_clamp', (((s as any).trait_vars ?? 0)?.['academic_exp']), (-500), 500);
    if (((s as any).trait_vars ?? 0)?.['academic'] === 0) {
      if (((s as any).trait_vars ?? 0)?.['academic_exp'] > 200) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'academic', 1]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    } else {
      if (((s as any).trait_vars ?? 0)?.['academic'] === 1) {
        if (((s as any).trait_vars ?? 0)?.['academic_exp'] > 300) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'academic', 2]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
        if (((s as any).trait_vars ?? 0)?.['academic_exp'] < 150) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'academic', 0]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      } else {
        if (((s as any).trait_vars ?? 0)?.['academic'] === 2) {
          if (((s as any).trait_vars ?? 0)?.['academic_exp'] > 400) {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'academic', 3]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
          }
          if (((s as any).trait_vars ?? 0)?.['academic_exp'] < 250) {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'academic', 1]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
          }
        } else {
          if (((s as any).trait_vars ?? 0)?.['academic'] === 3) {
            if (((s as any).trait_vars ?? 0)?.['academic_exp'] < 350) {
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'academic', 2]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
            }
          }
        }
      }
    }
    if (((s as any).trait_vars ?? 0)?.['academic'] === 3) {
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[1] = ((s as any).grupvalue[1] ?? 0) - (1);
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = ((s as any).grupvalue[3] ?? 0) + ((Math.floor(Math.random() * 2) + 1));
      ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).grupvalue[4] ?? 0) - ((Math.floor(Math.random() * 2) + 1));
    } else {
      if (((s as any).trait_vars ?? 0)?.['academic'] === 2) {
        ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = ((s as any).grupvalue[3] ?? 0) + (1);
        ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).grupvalue[4] ?? 0) - (1);
      } else {
        if (((s as any).trait_vars ?? 0)?.['academic'] === 1) {
          ((s as any).grupvalue = (s as any).grupvalue ?? {})[3] = ((s as any).grupvalue[3] ?? 0) + ((Math.floor(Math.random() * 2) + 0));
        }
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'details') {
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['icon'] = 'nerd.png';
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['hidden'] = 0;
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp'] = (((s as any).trait_vars ?? 0)?.['academic_exp']);
    if (((s as any).trait_vars ?? 0)?.['academic'] === 0) {
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Normal Student';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'You\'re not particularly studious or interested in academics. School is just something you get through.';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'You\'ve lost the <b>academic</b> trait.';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = (-1);
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = 200;
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'EXP: ' + (((s as any).trait_vars ?? 0)?.['academic_exp']) + '. ';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('Attend classes regularly to develop academic habits. ');
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('Missing classes reduces EXP.');
    } else {
      if (((s as any).trait_vars ?? 0)?.['academic'] === 1) {
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Likes Learning';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'You like learning. Studying comes a little more naturally, and academic peers seem to warm up to you.';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg-up'] = 'The academic trait has upgraded to <b>Likes Learning</b>.';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg-down'] = 'The academic trait has downgraded to <b>Likes Learning</b>.';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = 150;
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = 300;
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'EXP: ' + (((s as any).trait_vars ?? 0)?.['academic_exp']) + '. ';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('Keep attending classes to progress. ');
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('Missing classes reduces EXP.');
      } else {
        if (((s as any).trait_vars ?? 0)?.['academic'] === 2) {
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Loves to Learn';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'You love to learn. Concentration comes easily, schoolwork feels rewarding, and studious peers respect you.';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg-up'] = 'The academic trait has upgraded to <b>Loves to Learn</b>.';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg-down'] = 'The academic trait has downgraded to <b>Loves to Learn</b>.';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = 250;
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = 400;
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'EXP: ' + (((s as any).trait_vars ?? 0)?.['academic_exp']) + '. ';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('Keep attending classes to progress. ');
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('Missing classes reduces EXP.');
        } else {
          if (((s as any).trait_vars ?? 0)?.['academic'] === 3) {
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Teacher\'s Pet';
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'You are the teacher\'s pet. Your focus and dedication are unmatched in class — though not everyone admires it.';
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg-up'] = 'The academic trait has upgraded to <b>Teacher\'s Pet</b>.';
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = 350;
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = (-1);
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'EXP: ' + (((s as any).trait_vars ?? 0)?.['academic_exp']) + '. ';
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('Missing classes will cause this trait to regress.');
          }
        }
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'cheat') {
    if (String((s as any).locArgs?.[2] ?? '') === -99  ||  String((s as any).locArgs?.[2] ?? '') === 0) {
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['academic_exp'] = 0;
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['academic_lessons'] = 0;
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['nerd_learn_home'] = 0;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'academic', 0]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (String((s as any).locArgs?.[2] ?? '') === 1) {
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['academic_exp'] = 200;
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'academic', 1]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (String((s as any).locArgs?.[2] ?? '') === 2) {
          ((s as any).trait_vars = (s as any).trait_vars ?? {})['academic_exp'] = 325;
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'academic', 2]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          if (String((s as any).locArgs?.[2] ?? '') === 3) {
            ((s as any).trait_vars = (s as any).trait_vars ?? {})['academic_exp'] = 400;
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'academic', 3]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
          }
        }
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'overview') {
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['ov_label'] = 'Academic Pattern';
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['ov_val'] = ((((s as any).trait_vars ?? 0)?.['academic'] === 0) ? ('Normal Student') : (((((s as any).trait_vars ?? 0)?.['academic'] === 1) ? ('Likes Learning') : (((((s as any).trait_vars ?? 0)?.['academic'] === 2) ? ('Loves to Learn') : ('Teacher\'s Pet'))))));
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['ov_left'] = 'gs \'traits\', \'academic\', \'ov_set\', ' + qspFunc(s, 'math', 'int_clamp', (((s as any).trait_vars ?? {})?.['academic'] ?? 0) - 1, 0, 3);
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['ov_right'] = 'gs \'traits\', \'academic\', \'ov_set\', ' + qspFunc(s, 'math', 'int_clamp', (((s as any).trait_vars ?? {})?.['academic'] ?? 0) + 1, 0, 3);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'ov_set') {
    if (String((s as any).locArgs?.[2] ?? '') === 0) {
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['academic_exp'] = 0;
    } else {
      if (String((s as any).locArgs?.[2] ?? '') === 1) {
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['academic_exp'] = 250;
      } else {
        if (String((s as any).locArgs?.[2] ?? '') === 2) {
          ((s as any).trait_vars = (s as any).trait_vars ?? {})['academic_exp'] = 350;
        } else {
          if (String((s as any).locArgs?.[2] ?? '') === 3) {
            ((s as any).trait_vars = (s as any).trait_vars ?? {})['academic_exp'] = 450;
          }
        }
      }
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'academic', qspFunc(s, 'math', 'int_clamp', ((s as any).locArgs?.[2] ?? 0), 0, 3)]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBookworm(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'hourly') {
    if (((s as any).cheatVars ?? 0)?.['bookworm_disabled']) {
      // TODO-QSP: exit
    }
    if (((s as any).trait_vars ?? 0)?.['bookworm'] > 0) {
      if (((s as any).daystart ?? 0) === ((s as any).lastreadday ?? 0)) {
        if (((s as any).pcs_mood ?? 0) < 90) {
          qspCall(s, 'mood', 'raise', 'tiny');
        }
      } else {
        if (((s as any).daystart ?? 0) === ((s as any).lastreadday ?? 0) + 2) {
          if (((s as any).pcs_mood ?? 0) > 50) {
            qspCall(s, 'mood', 'lower', 'tiny');
          }
        } else {
          if (((s as any).pcs_mood ?? 0) > 10) {
            qspCall(s, 'mood', 'lower', 'tiny');
          }
        }
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'daily') {
    if (((s as any).cheatVars ?? 0)?.['bookworm_disabled']) {
      // TODO-QSP: exit
    }
    if (((s as any).trait_vars ?? 0)?.['bookworm'] > 0  &&  ((s as any).daystart ?? 0) > ((s as any).lastreadday ?? 0) + 2) {
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['bookworm_exp'] = Math.max(0, (((s as any).trait_vars ?? {})?.['bookworm_exp'] ?? 0) / 10 - (((s as any).stat ?? {})?.['men_fucked'] ?? 0) - (((s as any).stat ?? {})?.['women_fucked'] ?? 0) - (((s as any).stat ?? {})?.['herm_fucked'] ?? 0));
    }
    if (((s as any).trait_vars ?? 0)?.['bookworm_exp'] >= 1) {
      if (((s as any).trait_vars ?? 0)?.['bookworm'] === 0) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'bookworm', 1]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    } else {
      if (((s as any).trait_vars ?? 0)?.['bookworm'] === 1) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'bookworm', 0]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'details') {
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Bookworm';
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['icon'] = 'bookworm.png';
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['hidden'] = 1;
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp'] = (((s as any).trait_vars ?? 0)?.['bookworm_exp']);
    if (((s as any).trait_vars ?? 0)?.['bookworm'] === 0) {
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'You don\'t have a particular love of reading. Books are fine, but you can take them or leave them.';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'You\'ve lost the trait <b>Bookworm</b>.';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = (-1);
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = 1;
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'Reading EXP: ' + (((s as any).trait_vars ?? 0)?.['bookworm_exp']) + '. ';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('Read so much that your eyesight starts to suffer.');
    } else {
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'You read so obsessively that your eyesight has started to suffer for it. You feel best with a book in your hand, and get restless when you go too long without one.';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'You\'ve gained the trait <b>Bookworm</b>.';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = 0;
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = (-1);
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'Reading EXP: ' + (((s as any).trait_vars ?? 0)?.['bookworm_exp']) + '. Last read: \' + iif(daystart = lastreadday, \'today\', iif(daystart = lastreadday + 1, \'yesterday\', \'' + ((s as any).daystart ?? 0) - ((s as any).lastreadday ?? 0) + ' days ago\')) + \'. ';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('EXP drops rapidly if you go more than 2 days without reading.');
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'stat_display') {
    if (((s as any).cheatVars ?? 0)?.['bookworm_disabled']) {
      // TODO-QSP: exit
    }
    if (((s as any).trait_vars ?? 0)?.['bookworm'] > 0) {
      if (((s as any).daystart ?? 0) === ((s as any).lastreadday ?? 0)) {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['bookworm'] = 'You are lost in a fantasy after reading a book.';
        qspCall(s, 'stat_display_compute', 'queue_msg', 'bookworm', 'v_pos');
      } else {
        if (((s as any).daystart ?? 0) === ((s as any).lastreadday ?? 0) + 1) {
          ((s as any).stat_texts = (s as any).stat_texts ?? {})['bookworm'] = 'You are a little bored and want to plunge into a book.';
          qspCall(s, 'stat_display_compute', 'queue_msg', 'bookworm', 'neutral');
        } else {
          if (((s as any).daystart ?? 0) === ((s as any).lastreadday ?? 0) + 2) {
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['bookworm'] = 'You really want to read something.';
            qspCall(s, 'stat_display_compute', 'queue_msg', 'bookworm', 'neg');
          } else {
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['bookworm'] = 'You have an incredibly strong desire to read!';
            qspCall(s, 'stat_display_compute', 'queue_msg', 'bookworm', 'v_neg');
            qspCall(s, 'stat_display_compute', 'queue_alert', 'You desperately want to read.', 'v_neg');
          }
        }
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'cheat') {
    if (String((s as any).locArgs?.[2] ?? '') === -99  ||  String((s as any).locArgs?.[2] ?? '') === 0) {
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['bookworm_exp'] = 0;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'bookworm', 0]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (String((s as any).locArgs?.[2] ?? '') === 1) {
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['bookworm_exp'] = 100;
        (s as any).lastreadday = ((s as any).daystart ?? 0);
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'bookworm', 1]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSleepDuration(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'details') {
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['hidden'] = 1;
    if (((s as any).trait_vars ?? 0)?.['sleep_duration'] === 0) {
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Normal Sleeper';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['icon'] = 'sleep.png';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'You have a normal sleep pattern. You feel well-rested after a normal night\'s sleep, and can function on a reasonable amount of sleep.';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'Your natural sleep pattern has returned to normal.';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'Set by genetics or story events.';
    } else {
      if (((s as any).trait_vars ?? 0)?.['sleep_duration'] === 1) {
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Short Sleeper';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['icon'] = 'sleep.png';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'You\'re a short sleeper. You feel well-rested after only a few hours of sleep, and can function on less sleep than most people.';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'You\'ve become a <b>Short Sleeper</b>.';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'Sleep restores energy faster than normal. Sleep drains slightly faster while awake.';
      } else {
        if (((s as any).trait_vars ?? 0)?.['sleep_duration'] === -1) {
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Long Sleeper';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['icon'] = 'sleep_long.png';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'You\'re a long sleeper. You need more sleep than most people to feel rested, and struggle to function on less sleep.';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'You\'ve become a <b>Long Sleeper</b>.';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'Sleep restores energy more slowly than normal. Sleep drains faster while awake.';
        }
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'overview') {
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['ov_label'] = 'Sleep Pattern';
    if (((s as any).trait_vars ?? 0)?.['sleep_duration'] === 1) {
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['ov_val'] = 'Short Sleeper';
    } else {
      if (((s as any).trait_vars ?? 0)?.['sleep_duration'] === 0) {
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['ov_val'] = 'Normal';
      } else {
        if (((s as any).trait_vars ?? 0)?.['sleep_duration'] === -1) {
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['ov_val'] = 'Long Sleeper';
        }
      }
    }
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['ov_left'] = 'gs \'traits\', \'sleep_duration\', \'ov_set\', ' + qspFunc(s, 'math', 'int_clamp', (((s as any).trait_vars ?? {})?.['sleep_duration'] ?? 0) - 1, (-1), 1);
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['ov_right'] = 'gs \'traits\', \'sleep_duration\', \'ov_set\', ' + qspFunc(s, 'math', 'int_clamp', (((s as any).trait_vars ?? {})?.['sleep_duration'] ?? 0) + 1, (-1), 1);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'ov_set') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sleep_duration', qspFunc(s, 'math', 'int_clamp', ((s as any).locArgs?.[2] ?? 0), (-1), 1)]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'cheat') {
    if (String((s as any).locArgs?.[2] ?? '') === -99  ||  String((s as any).locArgs?.[2] ?? '') === 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sleep_duration', 0]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (String((s as any).locArgs?.[2] ?? '') === -1  ||  String((s as any).locArgs?.[2] ?? '') === 1) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sleep_duration', ((s as any).locArgs?.[2] ?? 0)]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterElasticity(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'details') {
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['hidden'] = 1;
    if (((s as any).trait_vars ?? 0)?.['elasticity'] === 0) {
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Normal Elasticity';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['icon'] = 'elasticity.png';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'Your body has a normal level of elasticity. You can stretch over time to accommodate larger objects.';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'Your natural elasticity has returned to normal.';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'Changes via a specific event.';
    } else {
      if (((s as any).trait_vars ?? 0)?.['elasticity'] === 1) {
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Naturally Elastic';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['icon'] = 'elasticity.png';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'Your body is naturally elastic. You accommodate objects of greater size more easily than most, and adapt quickly.';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'Your body has become <b>Naturally Elastic</b>.';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'Set by a specific event. Permanent.';
      } else {
        if (((s as any).trait_vars ?? 0)?.['elasticity'] === -1) {
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Inelastic';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['icon'] = 'elasticity_low.png';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'Your canals are unusually rigid. Accommodating larger objects is harder than usual, and you are slow to adapt and slow to recover from gaping.';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'Your body has become <b>Inelastic</b>.';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'Set by a specific event. Permanent.';
        }
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'overview') {
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['ov_label'] = 'Elasticity';
    if (((s as any).trait_vars ?? 0)?.['elasticity'] === 1) {
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['ov_val'] = 'Naturally Elastic';
    } else {
      if (((s as any).trait_vars ?? 0)?.['elasticity'] === 0) {
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['ov_val'] = 'Normal';
      } else {
        if (((s as any).trait_vars ?? 0)?.['elasticity'] === -1) {
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['ov_val'] = 'Inelastic';
        }
      }
    }
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['ov_left'] = 'gs \'traits\', \'elasticity\', \'ov_set\', ' + qspFunc(s, 'math', 'int_clamp', (((s as any).trait_vars ?? {})?.['elasticity'] ?? 0) - 1, (-1), 1);
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['ov_right'] = 'gs \'traits\', \'elasticity\', \'ov_set\', ' + qspFunc(s, 'math', 'int_clamp', (((s as any).trait_vars ?? {})?.['elasticity'] ?? 0) + 1, (-1), 1);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'ov_set') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'elasticity', qspFunc(s, 'math', 'int_clamp', ((s as any).locArgs?.[2] ?? 0), (-1), 1)]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'cheat') {
    if (String((s as any).locArgs?.[2] ?? '') === -99  ||  String((s as any).locArgs?.[2] ?? '') === 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'elasticity', 0]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (String((s as any).locArgs?.[2] ?? '') === -1  ||  String((s as any).locArgs?.[2] ?? '') === 1) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'elasticity', ((s as any).locArgs?.[2] ?? 0)]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSizequeen(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'update') {
    if (((s as any).cheatVars ?? 0)?.['sizequeen_disabled']) {
      // TODO-QSP: exit
    }
    ((s as any).trait_vars = (s as any).trait_vars ?? {})['sizequeen_exp'] = ((s as any).trait_vars['sizequeen_exp'] ?? 0) + (Math.min((((s as any).trait_vars ?? 0)?.['sizequeen_temp']), 6));
    ((s as any).trait_vars = (s as any).trait_vars ?? {})['sizequeen_temp'] = 0;
    return;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'calc_effect') {
    ((s as any).arousalVars = (s as any).arousalVars ?? {})['sizequeen_turnoff'] = 0;
    (s as any).temp_size_rel = ((s as any).locArgs?.[3] ?? 0) - ((s as any).locArgs?.[4] ?? 0);
    if (((s as any).trait_vars ?? 0)?.['sizequeen'] === 2) {
      if (((s as any).temp_size_rel ?? 0) > 15) {
        (s as any).result = ((s as any).locArgs?.[2] ?? 0) * 3;
      } else {
        if (((s as any).temp_size_rel ?? 0) > 5) {
          (s as any).result = ((s as any).locArgs?.[2] ?? 0) * 2;
        } else {
          if (((s as any).temp_size_rel ?? 0) < -10) {
            (s as any).result = 0;
            ((s as any).arousalVars = (s as any).arousalVars ?? {})['sizequeen_turnoff'] = 1;
          } else {
            if (((s as any).temp_size_rel ?? 0) < -5) {
              (s as any).result = 0;
            } else {
              (s as any).result = ((s as any).locArgs?.[2] ?? 0);
            }
          }
        }
      }
    } else {
      if (((s as any).trait_vars ?? 0)?.['sizequeen'] === 1) {
        if (((s as any).temp_size_rel ?? 0) > 15) {
          (s as any).result = ((s as any).locArgs?.[2] ?? 0) * 2;
        } else {
          if (((s as any).temp_size_rel ?? 0) > 5) {
            (s as any).result = (((s as any).locArgs?.[2] ?? 0) * 3) / 2;
          } else {
            if (((s as any).temp_size_rel ?? 0) < -10) {
              (s as any).result = 0;
            } else {
              if (((s as any).temp_size_rel ?? 0) < -5) {
                (s as any).result = ((s as any).locArgs?.[2] ?? 0) / 2;
              } else {
                (s as any).result = ((s as any).locArgs?.[2] ?? 0);
              }
            }
          }
        }
      } else {
        if (((s as any).temp_size_rel ?? 0) < -5) {
          (s as any).temp_understim_pct = Math.min(75, (-((s as any).temp_size_rel ?? 0) - 5) * 5);
          (s as any).result = Math.max(1, ((s as any).locArgs?.[2] ?? 0) * (100 - ((s as any).temp_understim_pct ?? 0)) / 100);
        } else {
          (s as any).result = ((s as any).locArgs?.[2] ?? 0);
        }
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'daily') {
    if (((s as any).cheatVars ?? 0)?.['sizequeen_disabled']) {
      // TODO-QSP: exit
    }
    if (((s as any).trait_vars ?? 0)?.['sizequeen_exp'] >= 120) {
      if (((s as any).trait_vars ?? 0)?.['sizequeen'] !== 2) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sizequeen', 2]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    } else {
      if (((s as any).trait_vars ?? 0)?.['sizequeen_exp'] >= 60) {
        if (((s as any).trait_vars ?? 0)?.['sizequeen'] !== 1) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sizequeen', 1]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      }
    }
    ((s as any).trait_vars = (s as any).trait_vars ?? {})['sizequeen_exp'] = Math.max((((s as any).trait_vars ?? {})?.['sizequeen_exp'] ?? 0) - 1, 0);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'details') {
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['icon'] = 'sizequeen.png';
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['hidden'] = 1;
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp'] = (((s as any).trait_vars ?? 0)?.['sizequeen_exp']);
    if (((s as any).trait_vars ?? 0)?.['sizequeen'] === 0) {
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Size Preference';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'You can enjoy sex with partners of all sizes, with no particular preference.';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'You\'ve lost the trait <b>Size Queen</b>. If this wasn\'t a cheat reset, something went wrong, so please report this.';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = (-1);
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = 60;
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'EXP: ' + (((s as any).trait_vars ?? 0)?.['sizequeen_exp']) + '. ';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('Have sex with well-endowed partners. ');
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('EXP decays by 1 daily and from small partners.');
    } else {
      if (((s as any).trait_vars ?? 0)?.['sizequeen'] === 1) {
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Size Queen';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'Whoever said size doesn\'t matter was lying. You get extra pleasure from well-endowed partners, and less from smaller ones.';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg-up'] = 'You\'ve gained the trait <b>Size Queen</b>! You now prefer larger partners and toys.';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg-down'] = 'The trait <b>Size Queen</b> has decreased to Level 1. You still prefer larger partners and toys, but your preferences have softened a bit.';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = (-1);
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = 120;
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'EXP: ' + (((s as any).trait_vars ?? 0)?.['sizequeen_exp']) + '. ';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('Have sex with well-endowed partners. ');
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('EXP decays by 1 daily and from small partners. This level cannot be lost naturally.');
      } else {
        if (((s as any).trait_vars ?? 0)?.['sizequeen'] === 2) {
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Size Addict';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'You can\'t get enough of giant dicks, and the bigger the better. Small partners have become a complete turn-off.';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'The trait Size Queen has increased to level 2 - <b>Size Addict</b>! You can\'t get enough of giant dicks.';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = 120;
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = (-1);
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'EXP: ' + (((s as any).trait_vars ?? 0)?.['sizequeen_exp']) + '. ';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('EXP decays by 1 daily and from small partners. Drops to Lv. 1 below 120.');
        }
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'cheat') {
    if (String((s as any).locArgs?.[2] ?? '') === -99  ||  String((s as any).locArgs?.[2] ?? '') === 0) {
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['sizequeen_exp'] = 0;
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['sizequeen_temp'] = 0;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sizequeen', 0]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (String((s as any).locArgs?.[2] ?? '') === 1) {
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['sizequeen_exp'] = 80;
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sizequeen', 1]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (String((s as any).locArgs?.[2] ?? '') === 2) {
          ((s as any).trait_vars = (s as any).trait_vars ?? {})['sizequeen_exp'] = 130;
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sizequeen', 2]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterFitnessFreak(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'workout') {
    if (((s as any).cheatVars ?? 0)?.['fitness_freak_disabled']) {
      // TODO-QSP: exit
    }
    if (((s as any).trait_vars ?? 0)?.['fitness_freak_today'] >= 10) {
      // TODO-QSP: exit
    }
    (s as any).temp_ff_gain = 0;
    if (((s as any).pcs_horny ?? 0) >= 100) {
      (s as any).temp_ff_gain = 3;
    } else {
      if (((s as any).pcs_horny ?? 0) >= 60) {
        (s as any).temp_ff_gain = 2;
      } else {
        (s as any).temp_ff_gain = - 2;
      }
    }
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      (s as any).temp_ff_gain = ((s as any).temp_ff_gain ?? 0) + (1);
    }
    (s as any).temp_ff_gain = (((s as any).temp_ff_gain ?? 0) * Math.max(((s as any).locArgs?.[2] ?? 0), 1) + 2) / 4;
    ((s as any).trait_vars = (s as any).trait_vars ?? {})['fitness_freak_exp'] = ((s as any).trait_vars['fitness_freak_exp'] ?? 0) + (((s as any).temp_ff_gain ?? 0));
    ((s as any).trait_vars = (s as any).trait_vars ?? {})['fitness_freak_exp'] = qspFunc(s, 'math', 'int_clamp', (((s as any).trait_vars ?? 0)?.['fitness_freak_exp']), (-10), 100);
    if (((s as any).temp_ff_gain ?? 0) > 0) {
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['fitness_freak_today'] = ((s as any).trait_vars['fitness_freak_today'] ?? 0) + (((s as any).temp_ff_gain ?? 0));
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'daily') {
    if (((s as any).cheatVars ?? 0)?.['fitness_freak_disabled']) {
      // TODO-QSP: exit
    }
    ((s as any).trait_vars = (s as any).trait_vars ?? {})['fitness_freak_today'] = 0;
    ((s as any).trait_vars = (s as any).trait_vars ?? {})['fitness_freak_exp'] = ((s as any).trait_vars['fitness_freak_exp'] ?? 0) - (1);
    ((s as any).trait_vars = (s as any).trait_vars ?? {})['fitness_freak_exp'] = qspFunc(s, 'math', 'int_clamp', (((s as any).trait_vars ?? 0)?.['fitness_freak_exp']), (-10), 100);
    if (((s as any).trait_vars ?? 0)?.['fitness_freak_exp'] >= 60) {
      if (((s as any).trait_vars ?? 0)?.['fitness_freak'] === 0) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'fitness_freak', 1]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    } else {
      if (((s as any).trait_vars ?? 0)?.['fitness_freak_exp'] <= 40) {
        if (((s as any).trait_vars ?? 0)?.['fitness_freak'] === 1) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'fitness_freak', 0]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'details') {
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Fitness Freak';
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['icon'] = 'fitness_freak.png';
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['hidden'] = 1;
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp'] = (((s as any).trait_vars ?? 0)?.['fitness_freak_exp']);
    if (((s as any).trait_vars ?? 0)?.['fitness_freak'] === 0) {
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'Exercise is just exercise for you.';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'You\'ve lost the trait <b>Fitness Freak</b>. Exercise no longer turns you on.';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = (-1);
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = 60;
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'EXP: ' + (((s as any).trait_vars ?? 0)?.['fitness_freak_exp']) + '. ';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('Work out while aroused or naked. ');
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('EXP decays by 1 daily.');
    } else {
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'Working out gets you hot and bothered. The gym is a different kind of thrill for you.';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'You\'ve gained the trait <b>Fitness Freak</b>! Exercise now turns you on.';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = 40;
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = (-1);
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'EXP: ' + (((s as any).trait_vars ?? 0)?.['fitness_freak_exp']) + '. ';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('EXP decays by 1 daily. Working out while not aroused lowers EXP.');
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'cheat') {
    if (String((s as any).locArgs?.[2] ?? '') === -99  ||  String((s as any).locArgs?.[2] ?? '') === 0) {
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['fitness_freak_exp'] = 0;
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['fitness_freak_today'] = 0;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'fitness_freak', 0]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (String((s as any).locArgs?.[2] ?? '') === 1) {
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['fitness_freak_exp'] = 80;
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'fitness_freak', 1]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterHairGrowthRate(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'details') {
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['hidden'] = 0;
    if (((s as any).trait_vars ?? 0)?.['hair_growth_rate'] === 1) {
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['icon'] = 'long_hair.png';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Lush Growth';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'Your hair grows faster than normal.';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'You\'ve gained the trait <b>Lush Growth</b>! Your hair grows about 50% faster than normal.';
    } else {
      if (((s as any).trait_vars ?? 0)?.['hair_growth_rate'] === 0) {
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['icon'] = 'long_hair.png';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Hair Growth Rate';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'Your hair grows at a normal rate.';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'Your head hair growth rate has returned to normal.';
      } else {
        if (((s as any).trait_vars ?? 0)?.['hair_growth_rate'] === -1) {
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['icon'] = 'short_hair.png';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Slow Grower';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'Your hair grows about a third more slowly than average.';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'You\'ve gained the trait <b>Slow Grower</b>! Your hair seems to grow more slowly than usual.';
        }
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'overview') {
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['ov_label'] = 'Hair Growth';
    if (((s as any).trait_vars ?? 0)?.['hair_growth_rate'] === 1) {
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['ov_val'] = 'Fast';
    } else {
      if (((s as any).trait_vars ?? 0)?.['hair_growth_rate'] === 0) {
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['ov_val'] = 'Normal';
      } else {
        if (((s as any).trait_vars ?? 0)?.['hair_growth_rate'] === -1) {
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['ov_val'] = 'Slow';
        }
      }
    }
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['ov_left'] = 'gs \'traits\', \'hair_growth_rate\', \'ov_set\', ' + qspFunc(s, 'math', 'int_clamp', (((s as any).trait_vars ?? {})?.['hair_growth_rate'] ?? 0) - 1, (-1), 1);
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['ov_right'] = 'gs \'traits\', \'hair_growth_rate\', \'ov_set\', ' + qspFunc(s, 'math', 'int_clamp', (((s as any).trait_vars ?? {})?.['hair_growth_rate'] ?? 0) + 1, (-1), 1);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'ov_set') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'hair_growth_rate', ((s as any).locArgs?.[2] ?? 0)]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'cheat') {
    if (String((s as any).locArgs?.[2] ?? '') === -99  ||  String((s as any).locArgs?.[2] ?? '') === 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'hair_growth_rate', 0]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (String((s as any).locArgs?.[2] ?? '') === -1) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'hair_growth_rate', (-1)]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (String((s as any).locArgs?.[2] ?? '') === 1) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'hair_growth_rate', 1]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBodyHairGrowthRate(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'details') {
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['hidden'] = 1;
    if (((s as any).lashair ?? 0) === 1) {
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Body Hair Growth Rate';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'You had laser hair removal — body hair growth rate no longer matters.';
    } else {
      if (((s as any).trait_vars ?? 0)?.['body_hair_growth_rate'] === 1) {
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Jungle Jane';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['icon'] = 'body_hair_fast.png';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'Your body hair grows at twice the normal rate.';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'You\'ve gained the trait <b>Jungle Jane</b>! Your body hair now grows twice as fast.';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'Your hair grows about twice as fast as normal.';
      } else {
        if (((s as any).trait_vars ?? 0)?.['body_hair_growth_rate'] === 0) {
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Body Hair Growth Rate';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['icon'] = 'body_hair_normal.png';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'Your body hair grows at a normal rate.';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'Your body hair growth rate has returned to normal.';
        } else {
          if (((s as any).trait_vars ?? 0)?.['body_hair_growth_rate'] === -1) {
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Slow Growth';
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['icon'] = 'body_hair_slow.png';
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'Your body hair grows more slowly than average.';
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'Your body hair seems to grow more slowly than usual.';
          }
        }
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'stat_display') {
    if (((s as any).cheatVars ?? 0)?.['body_hair_growth_rate_disabled']) {
      // TODO-QSP: exit
    }
    if (((s as any).lashair ?? 0) === 1) {
      // TODO-QSP: exit
    }
    if (((s as any).trait_vars ?? 0)?.['body_hair_growth_rate'] === 1) {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['body_hair_growth_rate'] = 'Your body hair grows twice as fast as normal.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'body_hair_growth_rate', 'neutral');
    } else {
      if (((s as any).trait_vars ?? 0)?.['body_hair_growth_rate'] === -1) {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['body_hair_growth_rate'] = 'Your body hair grows more slowly than average.';
        qspCall(s, 'stat_display_compute', 'queue_msg', 'body_hair_growth_rate', 'v_pos');
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'overview') {
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['ov_label'] = 'Body Hair Growth';
    if (((s as any).trait_vars ?? 0)?.['body_hair_growth_rate'] === 1) {
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['ov_val'] = 'Fast';
    } else {
      if (((s as any).trait_vars ?? 0)?.['body_hair_growth_rate'] === 0) {
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['ov_val'] = 'Normal';
      } else {
        if (((s as any).trait_vars ?? 0)?.['body_hair_growth_rate'] === -1) {
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['ov_val'] = 'Slow';
        }
      }
    }
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['ov_left'] = 'gs \'traits\', \'body_hair_growth_rate\', \'ov_set\', ' + qspFunc(s, 'math', 'int_clamp', (((s as any).trait_vars ?? {})?.['body_hair_growth_rate'] ?? 0) - 1, (-1), 1);
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['ov_right'] = 'gs \'traits\', \'body_hair_growth_rate\', \'ov_set\', ' + qspFunc(s, 'math', 'int_clamp', (((s as any).trait_vars ?? {})?.['body_hair_growth_rate'] ?? 0) + 1, (-1), 1);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'ov_set') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'body_hair_growth_rate', ((s as any).locArgs?.[2] ?? 0)]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'cheat') {
    if (String((s as any).locArgs?.[2] ?? '') === -99  ||  String((s as any).locArgs?.[2] ?? '') === 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'body_hair_growth_rate', 0]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (String((s as any).locArgs?.[2] ?? '') === -1) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'body_hair_growth_rate', (-1)]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (String((s as any).locArgs?.[2] ?? '') === 1) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'body_hair_growth_rate', 1]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBodyHairAttitude(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'hourly') {
    if (((s as any).cheatVars ?? 0)?.['body_hair_attitude_disabled']) {
      // TODO-QSP: exit
    }
    if (((s as any).lashair ?? 0) === 1) {
      // TODO-QSP: exit
    }
    if (((s as any).trait_vars ?? 0)?.['body_hair_attitude'] === -2  &&  ((s as any).pcs_mood ?? 0) > 10) {
      if (((s as any).pcs_pubes ?? 0) > 3) {
        qspCall(s, 'mood', 'lower', 'tiny');
      }
      if (((s as any).pcs_leghair ?? 0) > 3) {
        qspCall(s, 'mood', 'lower', 'tiny');
      }
    } else {
      if (((s as any).trait_vars ?? 0)?.['body_hair_attitude'] === -1  &&  ((s as any).pcs_mood ?? 0) > 20) {
        if (((s as any).pcs_pubes ?? 0) > 3) {
          qspCall(s, 'mood', 'lower', (Math.floor(Math.random() * 2) + 1));
        }
        if (((s as any).pcs_leghair ?? 0) > 3) {
          qspCall(s, 'mood', 'lower', (Math.floor(Math.random() * 2) + 1));
        }
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'on_shave') {
    if (((s as any).trait_vars ?? 0)?.['body_hair_attitude'] === 1) {
      qspCall(s, 'mood', 'lower', (Math.floor(Math.random() * 3) + 2));
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'daily') {
    if (((s as any).cheatVars ?? 0)?.['body_hair_attitude_disabled']) {
      // TODO-QSP: exit
    }
    if (((s as any).trait_vars ?? 0)?.['body_hair_attitude'] === -2) {
      // TODO-QSP: exit
    }
    if (((s as any).lashair ?? 0) === 1) {
      if (((s as any).trait_vars ?? 0)?.['body_hair_attitude'] !== 0) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'body_hair_attitude', 0]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
      return;
    }
    if (((s as any).pcs_leghair ?? 0) > 6) {
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['body_hair_attitude_exp'] = ((s as any).trait_vars['body_hair_attitude_exp'] ?? 0) + (2);
    } else {
      if (((s as any).pcs_leghair ?? 0) <= 3) {
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['body_hair_attitude_exp'] = ((s as any).trait_vars['body_hair_attitude_exp'] ?? 0) - (3);
      }
    }
    if (((s as any).pcs_pubes ?? 0) > 30) {
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['body_hair_attitude_exp'] = ((s as any).trait_vars['body_hair_attitude_exp'] ?? 0) + (1);
    } else {
      if (((s as any).pcs_pubes ?? 0) <= 5) {
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['body_hair_attitude_exp'] = ((s as any).trait_vars['body_hair_attitude_exp'] ?? 0) - ((Math.floor(Math.random() * 2) + 1));
      }
    }
    ((s as any).trait_vars = (s as any).trait_vars ?? {})['body_hair_attitude_exp'] = qspFunc(s, 'math', 'int_clamp', (((s as any).trait_vars ?? 0)?.['body_hair_attitude_exp']), (-500), 500);
    if (((s as any).trait_vars ?? 0)?.['body_hair_attitude'] === 1) {
      if (((s as any).trait_vars ?? 0)?.['body_hair_attitude_exp'] < 150) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'body_hair_attitude', 0]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    } else {
      if (((s as any).trait_vars ?? 0)?.['body_hair_attitude'] === 0) {
        if (((s as any).trait_vars ?? 0)?.['body_hair_attitude_exp'] >= 400) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'body_hair_attitude', 1]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          if (((s as any).trait_vars ?? 0)?.['body_hair_attitude_exp'] <= -400) {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'body_hair_attitude', (-1)]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
          }
        }
      } else {
        if (((s as any).trait_vars ?? 0)?.['body_hair_attitude'] === -1) {
          if (((s as any).trait_vars ?? 0)?.['body_hair_attitude_exp'] > -150) {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'body_hair_attitude', 0]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
          }
        }
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'details') {
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['hidden'] = 1;
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp'] = (((s as any).trait_vars ?? 0)?.['body_hair_attitude_exp']);
    if (((s as any).lashair ?? 0) === 1  &&  ((s as any).trait_vars ?? 0)?.['body_hair_attitude'] !== -2) {
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Hair Attitude';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'You had laser hair removal — how you feel about body hair no longer matters.';
    } else {
      if (((s as any).trait_vars ?? 0)?.['body_hair_attitude'] === 1) {
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Natural';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['icon'] = 'body_hair_jungle_jane.png';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'You\'ve embraced your natural body hair. Shaving feels unnecessary and a little wrong.';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'You\'ve gained the trait <b>Natural</b>. Body hair just feels right on you.';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = 150;
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = (-1);
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'EXP: ' + (((s as any).trait_vars ?? 0)?.['body_hair_attitude_exp']) + '. ';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('Shave consistently to lose this trait.');
      } else {
        if (((s as any).trait_vars ?? 0)?.['body_hair_attitude'] === 0) {
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Hair Attitude';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['icon'] = 'body_hair_shave.png';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'You have no strong feelings about body hair either way.';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'Your feelings about body hair have returned to neutral.';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = (-400);
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = 400;
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'EXP: ' + (((s as any).trait_vars ?? 0)?.['body_hair_attitude_exp']) + '. ';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('Let body hair grow for Natural. ');
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('Shave consistently for Silky.');
        } else {
          if (((s as any).trait_vars ?? 0)?.['body_hair_attitude'] === -1) {
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Silky';
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['icon'] = 'body_hair_wax.png';
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'Smooth skin just feels right. Any body hair makes you feel a little off.';
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'You\'ve gained the trait <b>Silky</b>. Smooth skin just feels right.';
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = (-1);
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = (-150);
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'EXP: ' + (((s as any).trait_vars ?? 0)?.['body_hair_attitude_exp']) + '. ';
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('Let body hair grow to lose this trait.');
          } else {
            if (((s as any).trait_vars ?? 0)?.['body_hair_attitude'] === -2) {
              ((s as any).trait_temp = (s as any).trait_temp ?? {})['icon'] = 'body_hair_wax.png';
              ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Smooth Compulsion';
              if (((s as any).lashair ?? 0) === 1) {
                ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'You feel a compulsive need to keep your body perfectly smooth. Thankfully, laser hair removal means body hair is no longer a problem for you.';
              } else {
                ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'You feel a compulsive need to keep your body perfectly smooth. Any body hair causes distress.';
              }
              ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'You\'ve gained the trait <b>Smooth Compulsion</b>. You can\'t stand any body hair.';
            }
          }
        }
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'hypno_grant') {
    ((s as any).trait_vars = (s as any).trait_vars ?? {})['body_hair_attitude'] = (-2);
    ((s as any).trait_vars = (s as any).trait_vars ?? {})['body_hair_attitude_exp'] = (-500);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'cheat') {
    if (String((s as any).locArgs?.[2] ?? '') === -99  ||  String((s as any).locArgs?.[2] ?? '') === 0) {
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['body_hair_attitude_exp'] = 0;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'body_hair_attitude', 0]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (String((s as any).locArgs?.[2] ?? '') === -2) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'body_hair_attitude', (-2)]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (String((s as any).locArgs?.[2] ?? '') === -1) {
          ((s as any).trait_vars = (s as any).trait_vars ?? {})['body_hair_attitude_exp'] = (-450);
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'body_hair_attitude', (-1)]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          if (String((s as any).locArgs?.[2] ?? '') === 1) {
            ((s as any).trait_vars = (s as any).trait_vars ?? {})['body_hair_attitude_exp'] = 450;
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'body_hair_attitude', 1]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
          }
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterPainTolerance(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'details') {
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['hidden'] = 0;
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = (-1);
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = (-1);
    if (((s as any).trait_vars ?? 0)?.['pain_tolerance'] === -1) {
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Pain Sensitive';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['icon'] = 'pain_sensitive.png';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'You have a low tolerance for pain. Even mild discomfort hits you harder than most, dragging your mood down faster and further than it otherwise would.';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'You\'ve gained the trait <b>Pain Sensitive</b>.';
    } else {
      if (((s as any).trait_vars ?? 0)?.['pain_tolerance'] === 0) {
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Pain Tolerance';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['icon'] = 'pain_sensitive.png';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'You handle pain about as well as anyone. Nothing exceptional in either direction.';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'Your pain tolerance has returned to normal.';
      } else {
        if (((s as any).trait_vars ?? 0)?.['pain_tolerance'] === 1) {
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Pain Tolerant';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['icon'] = 'pain_tolerance.png';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'You have a high tolerance for pain. Discomfort that would wear other people down barely registers for you.';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'You\'ve gained the trait <b>Pain Tolerant</b>.';
        }
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'cheat') {
    if (String((s as any).locArgs?.[2] ?? '') === -99  ||  String((s as any).locArgs?.[2] ?? '') === 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pain_tolerance', 0]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (String((s as any).locArgs?.[2] ?? '') === -1) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pain_tolerance', (-1)]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (String((s as any).locArgs?.[2] ?? '') === 1) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pain_tolerance', 1]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'overview') {
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['ov_label'] = 'Pain Tolerance';
    if (((s as any).trait_vars ?? 0)?.['pain_tolerance'] === -1) {
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['ov_val'] = 'Low';
    } else {
      if (((s as any).trait_vars ?? 0)?.['pain_tolerance'] === 0) {
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['ov_val'] = 'Normal';
      } else {
        if (((s as any).trait_vars ?? 0)?.['pain_tolerance'] === 1) {
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['ov_val'] = 'High';
        }
      }
    }
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['ov_left'] = 'gs \'traits\', \'pain_tolerance\', \'ov_set\', ' + qspFunc(s, 'math', 'int_clamp', (((s as any).trait_vars ?? {})?.['pain_tolerance'] ?? 0) - 1, (-1), 1);
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['ov_right'] = 'gs \'traits\', \'pain_tolerance\', \'ov_set\', ' + qspFunc(s, 'math', 'int_clamp', (((s as any).trait_vars ?? {})?.['pain_tolerance'] ?? 0) + 1, (-1), 1);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'ov_set') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'pain_tolerance', qspFunc(s, 'math', 'int_clamp', ((s as any).locArgs?.[2] ?? 0), (-1), 1)]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDoormat(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'daily') {
    if (((s as any).cheatVars ?? 0)?.['doormat_disabled']) {
      // TODO-QSP: exit
    }
    if (((s as any).trait_vars ?? 0)?.['doormat_exp'] >= 10) {
      if (((s as any).trait_vars ?? 0)?.['doormat'] !== 3) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'doormat', 3]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    } else {
      if (((s as any).trait_vars ?? 0)?.['doormat_exp'] >= 5) {
        if (((s as any).trait_vars ?? 0)?.['doormat'] !== 2) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'doormat', 2]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      } else {
        if (((s as any).trait_vars ?? 0)?.['doormat_exp'] >= 2) {
          if (((s as any).trait_vars ?? 0)?.['doormat'] !== 1) {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'doormat', 1]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
          }
        } else {
          if (((s as any).trait_vars ?? 0)?.['doormat'] !== 0) {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'doormat', 0]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
          }
        }
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'details') {
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['hidden'] = 1;
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp'] = (((s as any).trait_vars ?? 0)?.['doormat_exp']);
    if (((s as any).trait_vars ?? 0)?.['doormat'] === 0) {
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Confidence';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['icon'] = 'doormat.png';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'You have a normal sense of self-worth.';
    } else {
      if (((s as any).trait_vars ?? 0)?.['doormat'] === 1) {
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Pushover';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['icon'] = 'doormat.png';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'You find it hard to stand up for yourself. Giving in comes easier than it used to.';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'You\'ve developed the trait <b>Pushover</b>. Standing up for yourself feels harder.';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = (-1);
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = 5;
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'EXP: ' + (((s as any).trait_vars ?? 0)?.['doormat_exp']) + '. Changes via specific story events.';
      } else {
        if (((s as any).trait_vars ?? 0)?.['doormat'] === 2) {
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Doormat';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['icon'] = 'doormat.png';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'Being pushed around feels normal to you. You comply almost without thinking.';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'Your sense of self-worth has deteriorated further. You are now a <b>Doormat</b>.';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = (-1);
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = 10;
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'EXP: ' + (((s as any).trait_vars ?? 0)?.['doormat_exp']) + '. Changes via specific story events.';
        } else {
          if (((s as any).trait_vars ?? 0)?.['doormat'] === 3) {
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Broken';
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['icon'] = 'doormat.png';
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'You feel like you don\'t deserve any better than this. Some things simply feel impossible to refuse.';
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'Something inside you has <b>Broken</b>. Resistance feels almost unthinkable.';
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = (-1);
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = (-1);
            ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'EXP: ' + (((s as any).trait_vars ?? 0)?.['doormat_exp']) + '. Set by specific story events.';
          }
        }
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'cheat') {
    if (String((s as any).locArgs?.[2] ?? '') === -99  ||  String((s as any).locArgs?.[2] ?? '') === 0) {
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['doormat_exp'] = 0;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'doormat', 0]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (String((s as any).locArgs?.[2] ?? '') === 1) {
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['doormat_exp'] = 2;
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'doormat', 1]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (String((s as any).locArgs?.[2] ?? '') === 2) {
          ((s as any).trait_vars = (s as any).trait_vars ?? {})['doormat_exp'] = 5;
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'doormat', 2]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          if (String((s as any).locArgs?.[2] ?? '') === 3) {
            ((s as any).trait_vars = (s as any).trait_vars ?? {})['doormat_exp'] = 10;
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'doormat', 3]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
          }
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCumslut(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'minute') {
    if (((s as any).cheatVars ?? 0)?.['cumslut_disabled']) {
      // TODO-QSP: exit
    }
    ((s as any).temp_cumslut = (s as any).temp_cumslut ?? {})['is_public'] = 0;
    if (((s as any).location_type ?? 0) === 'public_outdoors'  ||  ((s as any).location_type ?? 0) === 'public_indoors') {
      ((s as any).temp_cumslut = (s as any).temp_cumslut ?? {})['is_public'] = 1;
    }
    ((s as any).temp_cumslut = (s as any).temp_cumslut ?? {})['visible_cum'] = 0;
    if (((s as any).cumloc ?? 0)[6] > 0) {
      ((s as any).temp_cumslut = (s as any).temp_cumslut ?? {})['visible_cum'] = ((s as any).temp_cumslut['visible_cum'] ?? 0) + (1);
    }
    if (((s as any).cumloc ?? 0)[7] > 0) {
      ((s as any).temp_cumslut = (s as any).temp_cumslut ?? {})['visible_cum'] = ((s as any).temp_cumslut['visible_cum'] ?? 0) + (1);
    }
    if (((s as any).cumloc ?? 0)[11] > 0) {
      ((s as any).temp_cumslut = (s as any).temp_cumslut ?? {})['visible_cum'] = ((s as any).temp_cumslut['visible_cum'] ?? 0) + (1);
    }
    if (((s as any).cumloc ?? 0)[13] > 0) {
      ((s as any).temp_cumslut = (s as any).temp_cumslut ?? {})['visible_cum'] = ((s as any).temp_cumslut['visible_cum'] ?? 0) + (1);
    }
    if (((s as any).cumloc ?? 0)[16] > 0) {
      ((s as any).temp_cumslut = (s as any).temp_cumslut ?? {})['visible_cum'] = ((s as any).temp_cumslut['visible_cum'] ?? 0) + (1);
    }
    if (((s as any).temp_cumslut ?? 0)?.['visible_cum'] > 0) {
      if (((s as any).trait_vars ?? 0)?.['cum_addict'] >= 2  &&  (Math.floor(Math.random() * 100) + 1) <= 40) {
        // TODO-QSP: temp_cumslut['exp_gain'] *= 2
      } else {
        if (((s as any).trait_vars ?? 0)?.['cum_addict'] >= 1  &&  (Math.floor(Math.random() * 100) + 1) <= 20) {
          // TODO-QSP: temp_cumslut['exp_gain'] *= 2
        }
      }
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['cumslut_exp'] = ((s as any).trait_vars['cumslut_exp'] ?? 0) + ((((s as any).temp_cumslut ?? 0)?.['exp_gain']));
      if (((s as any).temp_cumslut ?? 0)?.['is_public'] === 1) {
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['cumslut_exp_public'] = ((s as any).trait_vars['cumslut_exp_public'] ?? 0) + ((((s as any).temp_cumslut ?? 0)?.['exp_gain']));
      }
      if ((Math.floor(Math.random() * 100) + 1) <= 10) {
        if (((s as any).trait_vars ?? 0)?.['cumslut'] === 2) {
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (2);
          if (((s as any).temp_cumslut ?? 0)?.['is_public'] === 1) {
            (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (2);
            qspCall(s, 'mood', 'raise', 'tiny');
          }
        } else {
          if (((s as any).trait_vars ?? 0)?.['cumslut'] === 1) {
            if (((s as any).temp_cumslut ?? 0)?.['is_public'] === 0) {
              (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (2);
            }
          }
        }
      }
    }
    ((s as any).trait_vars = (s as any).trait_vars ?? {})['cumslut_exp'] = qspFunc(s, 'math', 'int_clamp', (((s as any).trait_vars ?? 0)?.['cumslut_exp']), 0, 4000);
    ((s as any).trait_vars = (s as any).trait_vars ?? {})['cumslut_exp_public'] = qspFunc(s, 'math', 'int_clamp', (((s as any).trait_vars ?? 0)?.['cumslut_exp_public']), 0, 2000);
    if (((s as any).trait_vars ?? 0)?.['cumslut_exp'] >= 2000  &&  ((s as any).trait_vars ?? 0)?.['cumslut_exp_public'] >= 1000) {
      if (((s as any).trait_vars ?? 0)?.['cumslut'] !== 2) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'cumslut', 2]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    } else {
      if (((s as any).trait_vars ?? 0)?.['cumslut_exp'] >= 300) {
        if (((s as any).trait_vars ?? 0)?.['cumslut'] !== 1) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'cumslut', 1]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      } else {
        if (((s as any).trait_vars ?? 0)?.['cumslut'] !== 0) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'cumslut', 0]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'daily') {
    if (((s as any).cheatVars ?? 0)?.['cumslut_disabled']) {
      // TODO-QSP: exit
    }
    if (((s as any).trait_vars ?? 0)?.['cumslut_exp'] > 0) {
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['cumslut_exp'] = ((s as any).trait_vars['cumslut_exp'] ?? 0) - (Math.min(60, (((s as any).trait_vars ?? 0)?.['cumslut_exp'])));
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['cumslut_exp_public'] = ((s as any).trait_vars['cumslut_exp_public'] ?? 0) - (Math.min(60, (((s as any).trait_vars ?? 0)?.['cumslut_exp_public'])));
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'details') {
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['icon'] = 'cumslut.png';
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['hidden'] = 1;
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp'] = (((s as any).trait_vars ?? 0)?.['cumslut_exp']);
    if (((s as any).trait_vars ?? 0)?.['cumslut'] === 2) {
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Cumbucket';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'You\'re addicted to being glazed. Wearing cum anywhere — public or private — gets you dripping. The humiliation of being seen with it only makes it better.';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'You\'ve gained the trait <b>Cumbucket</b>. You can\'t get enough of being seen covered in cum.';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = 2000;
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = (-1);
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'EXP: ' + (((s as any).trait_vars ?? 0)?.['cumslut_exp']) + '. ';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('EXP decays by 60 daily.');
    } else {
      if (((s as any).trait_vars ?? 0)?.['cumslut'] === 1) {
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Cumslut';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'Being covered in cum turns you on — as long as no one else can see. The feeling of it on your skin is enough to get you going.';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'You\'ve gained the trait <b>Cumslut</b>. Wearing cum in private makes you feel dirty — and you love it.';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = 300;
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = 2000;
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'EXP: ' + (((s as any).trait_vars ?? 0)?.['cumslut_exp']) + ' (public: ' + (((s as any).trait_vars ?? 0)?.['cumslut_exp_public']) + '/1000). ';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('Wear cum in public to advance to Lv. 2. ');
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('EXP decays by 60 daily.');
      } else {
        if (((s as any).trait_vars ?? 0)?.['cumslut'] === 0) {
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Cum Display';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'You don\'t have strong feelings about visible cum. Most people would rather not walk around covered in it.';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'You\'ve lost the trait <b>Cumslut</b>.';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_down'] = (-1);
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['exp_up'] = 300;
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = 'EXP: ' + (((s as any).trait_vars ?? 0)?.['cumslut_exp']) + '. ';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('Walk around with visible cum on you to gain EXP. ');
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['tooltip'] = ((s as any).trait_temp['tooltip'] ?? 0) + ('EXP decays by 60 daily.');
        }
      }
    }
    if (((s as any).trait_vars ?? 0)?.['cum_addict'] > 0) {
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = ((s as any).trait_temp['desc'] ?? 0) + (((((s as any).trait_vars ?? 0)?.['cum_addict'] === 1) ? (' 20%') : (' 40%')) + ' to receive bonus EXP thanks to the <b>Cum Addict</b> trait.');
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'cheat') {
    if (String((s as any).locArgs?.[2] ?? '') === -99  ||  String((s as any).locArgs?.[2] ?? '') === 0) {
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['cumslut_exp'] = 0;
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['cumslut_exp_public'] = 0;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'cumslut', 0]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (String((s as any).locArgs?.[2] ?? '') === 1) {
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['cumslut_exp'] = 1000;
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['cumslut_exp_public'] = 0;
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'cumslut', 1]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (String((s as any).locArgs?.[2] ?? '') === 2) {
          ((s as any).trait_vars = (s as any).trait_vars ?? {})['cumslut_exp'] = 4000;
          ((s as any).trait_vars = (s as any).trait_vars ?? {})['cumslut_exp_public'] = 2000;
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'cumslut', 2]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCumAddict(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'minute') {
    if (((s as any).trait_vars ?? 0)?.['cum_addict'] === 0) {
      // TODO-QSP: exit
    }
    if (((s as any).cumloc ?? 0)[0] > 0  ||  ((s as any).cumloc ?? 0)[3] > 0) {
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['cum_addict_sensed'] = 1;
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'hourly') {
    if (((s as any).trait_vars ?? 0)?.['cum_addict'] === 0) {
      // TODO-QSP: exit
    }
    if (((s as any).trait_vars ?? 0)?.['cum_addict_sensed'] === 1) {
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['cum_addict_sensed'] = 0;
      qspCall(s, 'mood', 'raise', 'tiny');
    } else {
      (s as any).missCum = ((s as any).missCum ?? 0) + (1);
    }
    if (((s as any).missCum ?? 0) > ((s as any).timeTresh ?? 0)) {
      if (((s as any).trait_vars ?? 0)?.['cum_addict'] === 1) {
        qspCall(s, 'mood', 'lower', 'tiny');
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
      } else {
        qspCall(s, 'mood', 'lower', 'small');
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (20);
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'daily') {
    if (((s as any).trait_vars ?? 0)?.['cum_addict'] === 1) {
      (s as any).min_arousal = Math.max(((s as any).min_arousal ?? 0), 30);
    } else {
      if (((s as any).trait_vars ?? 0)?.['cum_addict'] === 2) {
        (s as any).min_arousal = Math.max(((s as any).min_arousal ?? 0), 50);
      }
    }
    if (((s as any).trait_vars ?? 0)?.['cum_addict'] > 0  &&  ((s as any).missCum ?? 0) > ((s as any).timeTresh ?? 0)) {
      (s as any).pcs_horny = Math.max(((s as any).pcs_horny ?? 0), 90);
      if (((s as any).preziktype ?? 0) === 0  ||  ((s as any).preziktype ?? 0) === 2) {
        if (((s as any).mc_inventory ?? 0)?.['normal_condoms'] > 0  &&  ((s as any).mc_inventory ?? 0)?.['sabotaged_condoms'] < (Math.floor(Math.random() * 2) + 2)) {
          qspCall(s, 'din_bad', 'sabotage_a_condom', 'no_text');
        }
        if (((s as any).preziktype ?? 0) === 0  &&  ((s as any).mc_inventory ?? 0)?.['sabotaged_condoms'] > 0) {
          qspCall(s, 'din_bad', 'set_condom_used', 'sabotaged');
        }
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'details') {
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['icon'] = 'cum_addict.png';
    ((s as any).trait_temp = (s as any).trait_temp ?? {})['hidden'] = 1;
    if (((s as any).trait_vars ?? 0)?.['cum_addict'] === 1) {
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Cum Craving';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'You feel better with cum inside you. Going too long without it makes you restless and moody. You are always at least a bit aroused (minimum 30).';
      ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'You\'ve developed a <b>Cum Craving</b>. You feel incomplete without it.';
    } else {
      if (((s as any).trait_vars ?? 0)?.['cum_addict'] === 2) {
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Cum Addicted';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'You need cum inside you. Without it, you can barely think straight — your mood crashes and your body aches for it. You are always aroused (minimum 50).';
        ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'You\'ve become <b>Cum Addicted</b>. You need it desperately.';
      } else {
        if (((s as any).trait_vars ?? 0)?.['cum_addict'] === 0) {
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['name'] = 'Cum Dependency';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['desc'] = 'You have no particular craving for cum.';
          ((s as any).trait_temp = (s as any).trait_temp ?? {})['msg'] = 'Your cum dependency has faded.';
        }
      }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'hypno_grant') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'cum_addict', ((s as any).locArgs?.[2] ?? 0)]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'cheat') {
    if (String((s as any).locArgs?.[2] ?? '') === -99  ||  String((s as any).locArgs?.[2] ?? '') === 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'cum_addict', 0]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (String((s as any).locArgs?.[2] ?? '') === 1  ||  String((s as any).locArgs?.[2] ?? '') === 2) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'cum_addict', ((s as any).locArgs?.[2] ?? 0)]; enterLevel(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCharming(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'level'  ||  String((s as any).locArgs?.[1] ?? '') === 'init') {
    if (((s as any).trait_vars ?? 0)?.['charming'] === 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'charming']; enterDeregisterAttskl(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).trait_vars ?? 0)?.['charming'] > 0) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'charming']; enterRegisterAttskl(s, scene); (s as any).locArgs = __savedLocArgs; }
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['charming-humint-exp_gain'] = 10;
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['charming-humint-deg_loss'] = (-10);
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['charming-persuas-exp_gain'] = 10;
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['charming-persuas-deg_loss'] = (-10);
      } else {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'charming']; enterRegisterAttskl(s, scene); (s as any).locArgs = __savedLocArgs; }
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['charming-humint-exp_gain'] = (-10);
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['charming-humint-deg_loss'] = 10;
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['charming-persuas-exp_gain'] = (-10);
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['charming-persuas-deg_loss'] = 10;
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterFlexible(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'level'  ||  String((s as any).locArgs?.[1] ?? '') === 'init') {
    if (((s as any).trait_vars ?? 0)?.['flexible'] === 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'flexible']; enterDeregisterAttskl(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'flexible']; enterRegisterAttskl(s, scene); (s as any).locArgs = __savedLocArgs; }
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['flexible-dancero-exp_gain'] = 10;
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['flexible-dancero-deg_loss'] = (-10);
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['flexible-dancpol-exp_gain'] = 10;
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['flexible-dancpol-deg_loss'] = (-10);
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterLogical(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'level'  ||  String((s as any).locArgs?.[1] ?? '') === 'init') {
    if (((s as any).trait_vars ?? 0)?.['logical'] === 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'logical']; enterDeregisterAttskl(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'logical']; enterRegisterAttskl(s, scene); (s as any).locArgs = __savedLocArgs; }
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['logical-compskl-exp_gain'] = 10;
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['logical-compskl-deg_loss'] = (-10);
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['logical-comphckng-exp_gain'] = 10;
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['logical-comphckng-deg_loss'] = (-10);
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['logical-chess-exp_gain'] = 10;
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['logical-chess-deg_loss'] = (-10);
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterNatAthlete(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'level'  ||  String((s as any).locArgs?.[1] ?? '') === 'init') {
    if (((s as any).trait_vars ?? 0)?.['nat_athlete'] === 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'nat_athlete']; enterDeregisterAttskl(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'nat_athlete']; enterRegisterAttskl(s, scene); (s as any).locArgs = __savedLocArgs; }
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['nat_athlete-run-exp_gain'] = 10;
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['nat_athlete-run-deg_loss'] = (-10);
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['nat_athlete-icesktng-exp_gain'] = 10;
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['nat_athlete-icesktng-deg_loss'] = (-10);
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['nat_athlete-wrstlng-exp_gain'] = 10;
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['nat_athlete-wrstlng-deg_loss'] = (-10);
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['nat_athlete-ftbll-exp_gain'] = 10;
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['nat_athlete-ftbll-deg_loss'] = (-10);
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['nat_athlete-bkbll-exp_gain'] = 10;
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['nat_athlete-bkbll-deg_loss'] = (-10);
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['nat_athlete-vbll-exp_gain'] = 10;
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['nat_athlete-vbll-deg_loss'] = (-10);
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterNatDancer(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'level'  ||  String((s as any).locArgs?.[1] ?? '') === 'init') {
    if (((s as any).trait_vars ?? 0)?.['nat_dancer'] === 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'nat_dancer']; enterDeregisterAttskl(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'nat_dancer']; enterRegisterAttskl(s, scene); (s as any).locArgs = __savedLocArgs; }
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['nat_dancer-danc-exp_gain'] = 10;
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['nat_dancer-danc-deg_loss'] = (-10);
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['nat_dancer-dancero-exp_gain'] = 10;
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['nat_dancer-dancero-deg_loss'] = (-10);
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['nat_dancer-dancpol-exp_gain'] = 10;
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['nat_dancer-dancpol-deg_loss'] = (-10);
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterScholarly(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'level') {
    if (((s as any).trait_vars ?? 0)?.['scholarly'] === 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'scholarly']; enterDeregisterAttskl(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'scholarly']; enterRegisterAttskl(s, scene); (s as any).locArgs = __savedLocArgs; }
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['scholarly-intel-exp_gain'] = 10;
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['scholarly-intel-deg_loss'] = (-10);
    }
  }
  return;
  // TODO-QSP: end
  // TODO-QSP: --- traits ---------------------------------
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'init':
      enterInit(s, scene);
      break;
    case 'daily':
      enterDaily(s, scene);
      break;
    case 'hourly':
      enterHourly(s, scene);
      break;
    case 'minute':
      enterMinute(s, scene);
      break;
    case 'cheat':
      enterCheat(s, scene);
      break;
    case 'compute_stat_display':
      enterComputeStatDisplay(s, scene);
      break;
    case 'get_details':
      enterGetDetails(s, scene);
      break;
    case 'level':
      enterLevel(s, scene);
      break;
    case 'register_attskl':
      enterRegisterAttskl(s, scene);
      break;
    case 'deregister_attskl':
      enterDeregisterAttskl(s, scene);
      break;
    case '_notify':
      enterNotify(s, scene);
      break;
    case 'card':
      enterCard(s, scene);
      break;
    case 'show_all':
      enterShowAll(s, scene);
      break;
    case 'cumeater':
      enterCumeater(s, scene);
      break;
    case 'creampie_fetish':
      enterCreampieFetish(s, scene);
      break;
    case 'fertility':
      enterFertility(s, scene);
      break;
    case 'sensitivity':
      enterSensitivity(s, scene);
      break;
    case 'new_again':
      enterNewAgain(s, scene);
      break;
    case 'heel_preference':
      enterHeelPreference(s, scene);
      break;
    case 'addictive_personality':
      enterAddictivePersonality(s, scene);
      break;
    case 'buttslut':
      enterButtslut(s, scene);
      break;
    case 'exhibitionist':
      enterExhibitionist(s, scene);
      break;
    case 'panty_preference':
      enterPantyPreference(s, scene);
      break;
    case 'drinking':
      enterDrinking(s, scene);
      break;
    case 'academic':
      enterAcademic(s, scene);
      break;
    case 'bookworm':
      enterBookworm(s, scene);
      break;
    case 'sleep_duration':
      enterSleepDuration(s, scene);
      break;
    case 'elasticity':
      enterElasticity(s, scene);
      break;
    case 'sizequeen':
      enterSizequeen(s, scene);
      break;
    case 'fitness_freak':
      enterFitnessFreak(s, scene);
      break;
    case 'hair_growth_rate':
      enterHairGrowthRate(s, scene);
      break;
    case 'body_hair_growth_rate':
      enterBodyHairGrowthRate(s, scene);
      break;
    case 'body_hair_attitude':
      enterBodyHairAttitude(s, scene);
      break;
    case 'pain_tolerance':
      enterPainTolerance(s, scene);
      break;
    case 'doormat':
      enterDoormat(s, scene);
      break;
    case 'cumslut':
      enterCumslut(s, scene);
      break;
    case 'cum_addict':
      enterCumAddict(s, scene);
      break;
    case 'charming':
      enterCharming(s, scene);
      break;
    case 'flexible':
      enterFlexible(s, scene);
      break;
    case 'logical':
      enterLogical(s, scene);
      break;
    case 'nat_athlete':
      enterNatAthlete(s, scene);
      break;
    case 'nat_dancer':
      enterNatDancer(s, scene);
      break;
    case 'scholarly':
      enterScholarly(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const traits: LocationDef = {
  name: 'traits',
  title: '<center><font size="2" color="#888888">Hover the mouse over ',
  region: 'other',
  enter: enter,
};
