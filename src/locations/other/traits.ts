import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterInit(s: GameState, scene: SceneBuilder): void {
  (s as any).trait_vars['list, 0'] = 'cumeater';
  (s as any).trait_vars['list, 1'] = 'creampie_fetish';
  (s as any).trait_vars['list, 2'] = 'fertility';
  (s as any).trait_vars['list, 3'] = 'sensitivity';
  (s as any).trait_vars['list, 4'] = 'new_again';
  (s as any).trait_vars['list, 5'] = 'heel_preference';
  (s as any).trait_vars['list, 6'] = 'addictive_personality';
  (s as any).trait_vars['list, 7'] = 'buttslut';
  (s as any).trait_vars['list, 8'] = 'exhibitionist';
  (s as any).trait_vars['list, 9'] = 'panty_preference';
  (s as any).trait_vars['list, 10'] = 'drinking';
  (s as any).trait_vars['list, 11'] = 'academic';
  (s as any).trait_vars['list, 12'] = 'bookworm';
  (s as any).trait_vars['list, 13'] = 'sizequeen';
  (s as any).trait_vars['list, 14'] = 'fitness_freak';
  (s as any).trait_vars['list, 15'] = 'doormat';
  (s as any).trait_vars['list, 16'] = 'cumslut';
  (s as any).trait_vars['list, 17'] = 'cum_addict';
  (s as any).trait_vars['list, 18'] = 'elasticity';
  (s as any).trait_vars['list, 19'] = 'sleep_duration';
  (s as any).trait_vars['list, 20'] = 'body_hair_growth_rate';
  (s as any).trait_vars['list, 21'] = 'body_hair_attitude';
  (s as any).trait_vars['list, 22'] = 'hair_growth_rate';
  (s as any).trait_vars['list, 23'] = 'pain_tolerance';
  (s as any).trait_vars['count'] = 24;
  (s as any).trait_vars['last_update'] = ((s as any).totminut ?? 0);
  (s as any).traits_i = 0;
  // TODO-QSP: :traits_init_loop
  if (((s as any).trait_vars ?? 0)?.['list, ' + String(((s as any).traits_i ?? 0))] !== '') {
    // TODO-QSP: gs 'traits', $trait_vars['list, <<traits_i>>'], 'init'
    (s as any).traits_i = ((s as any).traits_i ?? 0) + (1);
    // TODO-QSP: jump 'traits_init_loop'
  }
  return;
  scene.build();
}

function enterDaily(s: GameState, scene: SceneBuilder): void {
  (s as any).traits_i = 0;
  // TODO-QSP: :traits_daily_loop
  if (((s as any).trait_vars ?? 0)?.['list, ' + String(((s as any).traits_i ?? 0))] !== '') {
    // TODO-QSP: gs 'traits', $trait_vars['list, <<traits_i>>'], 'daily'
    (s as any).traits_i = ((s as any).traits_i ?? 0) + (1);
    // TODO-QSP: jump 'traits_daily_loop'
  }
  return;
  scene.build();
}

function enterHourly(s: GameState, scene: SceneBuilder): void {
  (s as any).traits_i = 0;
  // TODO-QSP: :traits_hourly_loop
  if (((s as any).trait_vars ?? 0)?.['list, ' + String(((s as any).traits_i ?? 0))] !== '') {
    // TODO-QSP: gs 'traits', $trait_vars['list, <<traits_i>>'], 'hourly'
    (s as any).traits_i = ((s as any).traits_i ?? 0) + (1);
    // TODO-QSP: jump 'traits_hourly_loop'
  }
  return;
  scene.build();
}

function enterMinute(s: GameState, scene: SceneBuilder): void {
  if (((s as any).totminut ?? 0) <= 0) {
    (s as any).trait_vars['last_update'] = (((s as any).minut ?? 0) + ((s as any).hour ?? 0) * 60 + ((s as any).daystart ?? 0) * 1440) - 1;
    return;
  }
  if (((s as any).inSleep ?? 0) !== 0) {
    (s as any).trait_vars['last_update'] = ((s as any).totminut ?? 0);
    return;
  }
  (s as any).temp_loop_mul = ((s as any).totminut ?? 0) - ((s as any).trait_vars ?? 0)?.['last_update'];
  if ((!((s as any).temp_loop_mul ?? 0))) {
    // TODO-QSP: killvar 'temp_loop_mul'
    // TODO-QSP: exit
  }
  (s as any).trait_vars['last_update'] = ((s as any).totminut ?? 0);
  (s as any).traits_i = 0;
  // TODO-QSP: :traits_minute_loop
  if (((s as any).trait_vars ?? 0)?.['list, ' + String(((s as any).traits_i ?? 0))] !== '') {
    // TODO-QSP: gs 'traits', $trait_vars['list, <<traits_i>>'], 'minute'
    (s as any).traits_i = ((s as any).traits_i ?? 0) + (1);
    // TODO-QSP: jump 'traits_minute_loop'
  }
  return;
  scene.build();
}

function enterCheat(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'traits', $ARGS[1], 'cheat', ARGS[2]
  return;
  scene.build();
}

function enterComputeStatDisplay(s: GameState, scene: SceneBuilder): void {
  (s as any).traits_i = 0;
  // TODO-QSP: :traits_stat_display_loop
  if (((s as any).trait_vars ?? 0)?.['list, ' + String(((s as any).traits_i ?? 0))] !== '') {
    // TODO-QSP: gs 'traits', $trait_vars['list, <<traits_i>>'], 'stat_display'
    (s as any).traits_i = ((s as any).traits_i ?? 0) + (1);
    // TODO-QSP: jump 'traits_stat_display_loop'
  }
  return;
  scene.build();
}

function enterGetDetails(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'traits', '', ((s as any).locArgs?.[1] ?? 0), 'details');
  return;
  scene.build();
}

function enterLevel(s: GameState, scene: SceneBuilder): void {
  if (((s as any).ARGS ?? 0)[2] !== ((s as any).trait_vars ?? 0)[((s as any).locArgs?.[1] ?? 0)]) {
    (s as any).temp_level['dir'] = ((((s as any).ARGS ?? 0)[2] > ((s as any).trait_vars ?? 0)[((s as any).locArgs?.[1] ?? 0)]) ? ('up') : ('down'));
    // TODO-QSP: trait_vars[$ARGS[1]] = ARGS[2]
    if (((s as any).temp_level ?? 0)?.['dir'] === 'up') {
      // TODO-QSP: trait_vars[$ARGS[1] + '_discovered'] = 1
    }
    // TODO-QSP: gs 'traits', '_notify', $ARGS[1], $temp_level['dir'], ARGS[2]
    // TODO-QSP: gs 'traits', $ARGS[1], 'level', ARGS[2]
  }
  return;
  scene.build();
}

function enterRegisterAttskl(s: GameState, scene: SceneBuilder): void {
  if ((Array.isArray((s as any).traitattskl) ? ((s as any).traitattskl as any[]).indexOf(((s as any).locArgs?.[1] ?? 0)) : -1) < 0) {
    // TODO-QSP: $traitattskl[] = $ARGS[1]
  }
  return;
  scene.build();
}

function enterDeregisterAttskl(s: GameState, scene: SceneBuilder): void {
  if ((Array.isArray((s as any).traitattskl) ? ((s as any).traitattskl as any[]).indexOf(((s as any).locArgs?.[1] ?? 0)) : -1) >= 0) {
    qspCall(s, 'array', 'remove_element', '$traitattskl', ((s as any).locArgs?.[1] ?? 0));
  }
  return;
  scene.build();
}

function enterNotify(s: GameState, scene: SceneBuilder): void {
  if (((s as any).opPRE ?? 0) > 0) {
    // TODO-QSP: exit
  }
  qspCall(s, 'traits', 'get_details', ((s as any).locArgs?.[1] ?? 0));
  if (((s as any).trait_temp ?? 0)?.['msg-' + String(((s as any).locArgs?.[2] ?? 0))] !== '') {
  }
  if (((s as any).temp_notify ?? 0) !== '') {
    // TODO-QSP: msg $temp_notify
  }
  return;
  scene.build();
}

function enterCard(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'traits', 'get_details', ((s as any).locArgs?.[1] ?? 0));
  (s as any).temp_card['icon'] = 'images/system/icons/traits/' + ((s as any).iif ?? 0)(((s as any).trait_temp ?? 0)?.['icon'] !== '', ((s as any).trait_temp ?? 0)?.['icon'], 'hidden.png');
  (s as any).temp_card['bg'] = ((s as any).temp_bcolor ?? 0);
  (s as any).temp_card['border'] = ((s as any).theme_hex ?? 0)?.['accent'];
  (s as any).temp_card['desc'] = ((s as any).trait_temp ?? 0)?.['desc'];
  (s as any).temp_card['name'] = ((s as any).trait_temp ?? 0)?.['name'];
  (s as any).temp_card['prog'] = '';
  if (((s as any).trait_temp ?? 0)?.['tooltip'] !== '') {
    if (((s as any).trait_temp ?? 0)?.['exp_down'] === -1) {
    }
    // TODO-QSP: $temp_pw += '<b>' + $str(trait_temp['exp']) + '</b>'
    if (((s as any).trait_temp ?? 0)?.['exp_up'] === -1) {
    } else {
      // TODO-QSP: $temp_pw += '&nbsp|&nbsp' + $str(trait_temp['exp_up'] / 1000) + 'k&nbsp↑'
      // TODO-QSP: $temp_pw += '&nbsp|&nbsp' + $str(trait_temp['exp_up']) + '&nbsp↑'
    }
    (s as any).temp_card['prog'] = '<span title="\' + $trait_temp[\'tooltip\'] + \'" style="cursor:help;font-size:0.8em;white-space:nowrap;font-family:monospace;opacity:0.7;">[\' + $temp_pw + \']</span>';
  }
  if (((s as any).trait_temp ?? 0)?.['hidden'] === 1  &&  ((s as any).ARGS ?? 0)[2] === 0  &&  ((s as any).trait_vars ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_discovered'] === 0  &&  ((s as any).cheatVars ?? 0)?.['show_hidden_traits'] === 0) {
    (s as any).temp_card['name'] = '???';
    (s as any).temp_card['desc'] = 'This trait is inactive and unknown; who knows what it could be?<br>Unlock the trait to find out.';
    (s as any).temp_card['icon'] = 'images/system/icons/traits/hidden.png';
    (s as any).temp_card['prog'] = '';
  }
  if (((s as any).ARGS ?? 0)[2] !== 0) {
    (s as any).temp_card['opac'] = '1.0';
  } else {
    (s as any).temp_card['opac'] = '0.5';
    (s as any).temp_card['border'] = ((((s as any).theme ?? 0)?.['is_dark'] === 1) ? ('#555555') : ('#aaaaaa'));
  }
  (s as any).card_in['icon'] = ((s as any).temp_card ?? 0)?.['icon'];
  (s as any).card_in['title'] = ((s as any).temp_card ?? 0)?.['name'];
  (s as any).card_in['extra'] = ((s as any).temp_card ?? 0)?.['prog'];
  (s as any).card_in['body'] = '<div><<$temp_card[\'desc\']>></div>';
  (s as any).card_in['border'] = ((s as any).temp_card ?? 0)?.['border'];
  (s as any).card_in['bg'] = ((s as any).temp_card ?? 0)?.['bg'];
  (s as any).card_in['opacity'] = ((s as any).temp_card ?? 0)?.['opac'];
  qspCall(s, 'cards', 'shell');
  return;
  scene.build();
}

function enterShowAll(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><font size="2" color="#888888">Hover the mouse over the EXP widget on the top right of a card for information on how to gain or lose EXP.</font></center>');
  (s as any).temp_show_all['i'] = 0;
  // TODO-QSP: :show_all_loop
  if (((s as any).temp_show_all ?? 0)?.['i'] < ((s as any).trait_vars ?? 0)?.['count']) {
    (s as any).temp_show_all['trait'] = ((s as any).trait_vars ?? 0)?.['((s as any).list ?? 0), ' + String(((s as any).temp_show_all ?? 0)?.['i'])];
    // TODO-QSP: gs 'traits', $temp_show_all['trait'], 'details'
    if (((s as any).trait_vars ?? 0)[((s as any).temp_show_all ?? 0)?.['trait']] !== 0) {
      // TODO-QSP: $temp_active[] = $temp_show_all['trait']
    } else {
      // TODO-QSP: $temp_visible[] = $temp_show_all['trait']
      // TODO-QSP: $temp_hidden[] = $temp_show_all['trait']
    }
    (s as any).temp_show_all['i'] = ((s as any).temp_show_all['i'] ?? 0) + (1);
    // TODO-QSP: jump 'show_all_loop'
  }
  (s as any).temp_show_all['i'] = 0;
  // TODO-QSP: :sa_render_act
  if (((s as any).temp_show_all ?? 0)?.['i'] < Object.keys((s as any).temp_active ?? {}).length) {
    // TODO-QSP: $result += $func('traits', 'card', $temp_active[temp_show_all['i']], trait_vars[$temp_active[temp_sh...
    (s as any).temp_show_all['i'] = ((s as any).temp_show_all['i'] ?? 0) + (1);
    // TODO-QSP: jump 'sa_render_act'
  }
  (s as any).temp_show_all['i'] = 0;
  // TODO-QSP: :sa_render_vis
  if (((s as any).temp_show_all ?? 0)?.['i'] < Object.keys((s as any).temp_visible ?? {}).length) {
    // TODO-QSP: $result += $func('traits', 'card', $temp_visible[temp_show_all['i']], 0)
    (s as any).temp_show_all['i'] = ((s as any).temp_show_all['i'] ?? 0) + (1);
    // TODO-QSP: jump 'sa_render_vis'
  }
  (s as any).temp_show_all['i'] = 0;
  // TODO-QSP: :sa_render_hid
  if (((s as any).temp_show_all ?? 0)?.['i'] < Object.keys((s as any).temp_hidden ?? {}).length) {
    // TODO-QSP: $result += $func('traits', 'card', $temp_hidden[temp_show_all['i']], 0)
    (s as any).temp_show_all['i'] = ((s as any).temp_show_all['i'] ?? 0) + (1);
    // TODO-QSP: jump 'sa_render_hid'
  }
  return;
  scene.build();
}

function enterCumeater(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'daily') {
    if (((s as any).cheatVars ?? 0)?.['cumeater_disabled']) {
      // TODO-QSP: exit
    }
    if (((s as any).trait_vars ?? 0)?.['cumeater'] === 0) {
      (s as any).trait_vars['cumeater_exp'] = ((s as any).trait_vars['cumeater_exp'] ?? 0) + ((((s as any).stat ?? 0)?.['swallow'] - ((s as any).stat ?? 0)?.['swallow_unaware']) - ((s as any).trait_vars ?? 0)?.['cumeater_prev']);
      (s as any).trait_vars['cumeater_prev'] = ((s as any).stat ?? 0)?.['swallow'] - ((s as any).stat ?? 0)?.['swallow_unaware'];
      if (((s as any).trait_vars ?? 0)?.['cumeater_exp'] >= 50) {
        qspCall(s, 'traits', 'level', 'cumeater', 1);
      }
    }
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'details') {
    (s as any).trait_temp['name'] = 'Cumeater';
    (s as any).trait_temp['icon'] = 'cumeater.png';
    (s as any).trait_temp['hidden'] = 0;
    if (((s as any).trait_vars ?? 0)?.['cumeater'] === 0) {
      (s as any).trait_temp['desc'] = 'You don\'t have a particular taste for cum.';
      (s as any).trait_temp['msg'] = 'You\'ve lost the trait <b>Cumeater</b>.';
      (s as any).trait_temp['exp'] = ((s as any).trait_vars ?? 0)?.['cumeater_exp'];
      (s as any).trait_temp['exp_down'] = (-1);
      (s as any).trait_temp['exp_up'] = 50;
      (s as any).trait_temp['tooltip'] = 'You have <<trait_vars[\'cumeater_exp\']>> EXP. Gain EXP by swallowing loads knowingly.';
    } else {
      (s as any).trait_temp['desc'] = 'Experience led you to develop a taste for cum. Swallowing comes naturally, and new possibilities are open for dealing with spunk.';
      (s as any).trait_temp['msg'] = 'You\'ve gained the trait <b>Cumeater</b>.';
      (s as any).trait_temp['exp'] = ((s as any).trait_vars ?? 0)?.['cumeater_exp'];
      (s as any).trait_temp['exp_down'] = (-1);
      (s as any).trait_temp['exp_up'] = (-1);
      (s as any).trait_temp['tooltip'] = 'Lifetime loads swallowed: <<trait_vars[\'cumeater_exp\']>>.';
    }
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'cheat') {
    if (((s as any).ARGS ?? 0)[2] === -99  ||  ((s as any).ARGS ?? 0)[2] === 0) {
      (s as any).trait_vars['cumeater_exp'] = 0;
      qspCall(s, 'traits', 'level', 'cumeater', 0);
    } else {
      (s as any).trait_vars['cumeater_exp'] = 50;
      qspCall(s, 'traits', 'level', 'cumeater', 1);
    }
  }
  return;
  scene.build();
}

function enterCreampieFetish(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'daily') {
    if (((s as any).cheatVars ?? 0)?.['creampie_fetish_disabled']) {
      // TODO-QSP: exit
    }
    (s as any).temp_risky_exp = ((s as any).stat ?? 0)?.['creampies_notsafe_known'] + ((s as any).stat ?? 0)?.['creampies_risky_known'] * 2;
    (s as any).trait_vars['creampie_fetish_exp_risky'] = ((s as any).trait_vars['creampie_fetish_exp_risky'] ?? 0) + (((s as any).max ?? 0)(0, ((s as any).temp_risky_exp ?? 0) - ((s as any).trait_vars ?? 0)?.['creampie_fetish_exp_prev_risky']));
    (s as any).trait_vars['creampie_fetish_exp'] = ((s as any).trait_vars['creampie_fetish_exp'] ?? 0) + (((s as any).max ?? 0)(0, ((s as any).stat ?? 0)?.['creampies_safe_known'] + ((s as any).temp_risky_exp ?? 0) * 2 - ((s as any).trait_vars ?? 0)?.['creampie_fetish_exp_prev']));
    (s as any).trait_vars['creampie_fetish_exp_prev'] = ((s as any).trait_vars ?? 0)?.['creampie_fetish_exp'];
    (s as any).trait_vars['creampie_fetish_exp_risky_prev'] = ((s as any).trait_vars ?? 0)?.['creampie_fetish_exp_risky'];
    if (((s as any).trait_vars ?? 0)?.['creampie_fetish_exp'] >= 200  &&  ((s as any).trait_vars ?? 0)?.['creampie_fetish_exp_risky'] >= 100) {
      if (((s as any).trait_vars ?? 0)?.['creampie_fetish'] !== 2) {
        qspCall(s, 'traits', 'level', 'creampie_fetish', 2);
      }
    } else {
      if (((s as any).trait_vars ?? 0)?.['creampie_fetish'] !== 1) {
        qspCall(s, 'traits', 'level', 'creampie_fetish', 1);
      }
      if (((s as any).trait_vars ?? 0)?.['creampie_fetish'] !== 0) {
        qspCall(s, 'traits', 'level', 'creampie_fetish', 0);
      }
    }
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'details') {
    (s as any).trait_temp['hidden'] = 0;
    if (((s as any).trait_vars ?? 0)?.['creampie_fetish'] === 0) {
      (s as any).trait_temp['name'] = 'Creampie Fetish';
      (s as any).trait_temp['icon'] = 'creampie_fetish.png';
      (s as any).trait_temp['desc'] = 'Some women are really into creampies, for one reason or another. You aren\'t one of them.';
      (s as any).trait_temp['msg'] = 'You\'ve lost the trait <b>Creampie Fetish</b>.';
      (s as any).trait_temp['exp'] = ((s as any).trait_vars ?? 0)?.['creampie_fetish_exp'];
      (s as any).trait_temp['exp_down'] = (-1);
      (s as any).trait_temp['exp_up'] = 150;
      (s as any).trait_temp['tooltip'] = 'You have <<trait_vars[\'creampie_fetish_exp\']>> EXP. Gain EXP by receiving vaginal creampies.';
    } else {
      (s as any).trait_temp['name'] = 'Creampie Lover';
      (s as any).trait_temp['icon'] = 'creampie_fetish.png';
      (s as any).trait_temp['desc'] = 'Your desire for creampies is so strong that you can\'t help but orgasm almost every time a big load is poured into your pussy.';
      (s as any).trait_temp['msg'] = 'You\'ve gained the trait <b>Creampie Fetish</b>.';
      (s as any).trait_temp['exp'] = ((s as any).trait_vars ?? 0)?.['creampie_fetish_exp'];
      (s as any).trait_temp['exp_down'] = (-1);
      (s as any).trait_temp['exp_up'] = 200;
      (s as any).trait_temp['tooltip'] = 'EXP: <<trait_vars[\'creampie_fetish_exp\']>>/200. Risky/unsafe EXP: <<trait_vars[\'creampie_fetish_exp_risky\']>>/100. Keep taking risky creampies to unlock the next level.';
      if (((s as any).trait_vars ?? 0)?.['creampie_fetish'] === 2) {
        (s as any).trait_temp['name'] = 'Breeding Slut';
        (s as any).trait_temp['icon'] = 'creampie_fetish_breeding.png';
        (s as any).trait_temp['desc'] = 'The only thing you love more than being filled with cum is being filled when you really shouldn\'t be. Risky creampies lead you to instant orgasm, but you\'ve grown to dislike condoms.';
        (s as any).trait_temp['msg'] = 'You\'ve gained the trait <b>Breeding Slut</b>! The thrill of risky creampies has awakened something primal in you.';
        (s as any).trait_temp['exp'] = ((s as any).trait_vars ?? 0)?.['creampie_fetish_exp'];
        (s as any).trait_temp['exp_down'] = (-1);
        (s as any).trait_temp['exp_up'] = (-1);
        (s as any).trait_temp['tooltip'] = 'EXP: <<trait_vars[\'creampie_fetish_exp\']>>. Risky/unsafe EXP: <<trait_vars[\'creampie_fetish_exp_risky\']>>.';
      }
    }
    if (((s as any).locArgs?.[1] ?? 0) === 'cheat') {
      if (((s as any).ARGS ?? 0)[2] === -99  ||  ((s as any).ARGS ?? 0)[2] === 0) {
        (s as any).trait_vars['creampie_fetish_exp'] = 0;
        (s as any).trait_vars['creampie_fetish_exp_risky'] = 0;
        (s as any).trait_vars['creampie_fetish_prev'] = 0;
        (s as any).trait_vars['creampie_fetish_prev_risky'] = 0;
        qspCall(s, 'traits', 'level', 'creampie_fetish', 0);
      } else {
        (s as any).trait_vars['creampie_fetish_exp'] = 150;
        (s as any).trait_vars['creampie_fetish_exp_risky'] = 0;
        (s as any).trait_vars['creampie_fetish_prev'] = 0;
        (s as any).trait_vars['creampie_fetish_prev_risky'] = 0;
        qspCall(s, 'traits', 'level', 'creampie_fetish', 1);
        if (((s as any).ARGS ?? 0)[2] === 2) {
          (s as any).trait_vars['creampie_fetish_exp'] = 200;
          (s as any).trait_vars['creampie_fetish_exp_risky'] = 100;
          (s as any).trait_vars['creampie_fetish_prev'] = 0;
          (s as any).trait_vars['creampie_fetish_prev_risky'] = 0;
          qspCall(s, 'traits', 'level', 'creampie_fetish', 2);
        }
      }
      return;
    }
  }
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
    default:
      enterInit(s, scene);
      break;
  }
}

export const traits: LocationDef = {
  name: 'traits',
  title: '<center><font size="2" color="#888888">Hover the mouse over ',
  region: 'other',
  locationType: 'public_outdoors',
  enter: enter,
};
