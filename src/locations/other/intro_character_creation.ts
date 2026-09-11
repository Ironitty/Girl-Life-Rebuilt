import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterCoreBirthday(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).birthday ?? 0))) {
    qspCall(s, 'intro_functions', 'set_default', 'birthday');
  }
  qspCall(s, 'time', 'init_monthnames');
  if (((s as any).locArgs?.[1] ?? 0) === 'link') {
    if (((s as any).start_type ?? 0)?.['magic'] === 'tg') {
    }
    // TODO-QSP: dynamic text: <a href="exec:gt 'intro_character_creation', 'core_birthday'"><<$startdob>></a>.
    scene.text(`<a href="exec:gt 'intro_character_creation', 'core_birthday'">${((s as any).startdob ?? 0)}</a>.`);
  } else {
    scene.text('<center><b>Birthday Picker</b></center>');
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).start_type ?? 0)?.['magic'] === 'tg') {
      scene.img('images/system/1_openings/4_csb/16.jpg');
    } else {
      scene.img(`${qspUntranslated(s, "FUNC('face_image')", { location: "intro_character_creation" })}`);
    }
    scene.text('<center>Choose your date of birth:</center>');
    if (((s as any).birthmonth ?? 0) === 2) {
      if ((((s as any).birthyear ?? 0) % 4 === 0  &&  ((s as any).birthyear ?? 0) % 100 !== 0)  ||  (((s as any).birthyear ?? 0) % 400 === 0)) {
        (s as any).monthdays = 29;
      } else {
        (s as any).monthdays = 28;
      }
    } else {
      if (((s as any).birthmonth ?? 0) === 4  ||  ((s as any).birthmonth ?? 0) === 6  ||  ((s as any).birthmonth ?? 0) === 9  ||  ((s as any).birthmonth ?? 0) === 11) {
        (s as any).monthdays = 30;
      } else {
        (s as any).monthdays = 31;
      }
    }
    (s as any).birthmonth = qspFunc(s, 'math', 'int_clamp', ((s as any).birthmonth ?? 0), 1, 12);
    (s as any).birthday = qspFunc(s, 'math', 'int_clamp', ((s as any).birthday ?? 0), 1, ((s as any).monthdays ?? 0));
    // TODO-QSP: dynamic text: <center><<iif($start_type['magic'] = 'tg', 'Her', 'Your')>> birthday: <b><<$mont...
    scene.text(`<center>${((((s as any).start_type ?? 0)?.['magic'] === 'tg') ? ('Her') : ('Your'))} birthday: <b>${((s as any).monthName ?? 0)?.[String((s as any).birthmonth ?? 0)]} ${((s as any).birthday ?? 0)}${qspFunc(s, 'shortgs', 'get_number_suffix', ((s as any).birthday ?? 0))}, ${((s as any).birthyear ?? 0)}</b></center>`);
    // TODO-QSP: dynamic text: <center><a href="exec:birthday += 5 & gs 'intro_character_creation', 'core_birth...
    scene.text('<center><a href="exec:birthday += 5 & gs \'intro_character_creation\', \'core_birthday\'">+5 Days</a></center>');
    // TODO-QSP: dynamic text: <center><a href="exec:birthday += 1 & gs 'intro_character_creation', 'core_birth...
    scene.text('<center><a href="exec:birthday += 1 & gs \'intro_character_creation\', \'core_birthday\'">+1 Day</a></center>');
    scene.text('<center><a href="exec:birthday -= 1 & gs \'intro_character_creation\', \'core_birthday\'">-1 Day</a></center>');
    scene.text('<center><a href="exec:birthday -= 5 & gs \'intro_character_creation\', \'core_birthday\'">-5 Days</a></center>');
    (s as any).bm_i = 1;
    // TODO-QSP: :bm_build_loop
    // TODO-QSP: $bm_lnk[bm_i] = '<td style="' + $bm_td + '"><a href="exec:birthmonth = ' + $str(bm_i) + ' & gs ''int...
    (s as any).bm_i = ((s as any).bm_i ?? 0) + (1);
    if (((s as any).bm_i ?? 0) <= 12) {
      // TODO-QSP: jump 'bm_build_loop'
    }
    // TODO-QSP: $bm_lnk[birthmonth] = '<td style="' + $bm_td_sel + '"><b>' + $monthName[birthmonth] + '</b></td>'
    // TODO-QSP: *p '<center><table style="border:2px solid ' + $theme_hex['goth'] + '; background-color:' + $theme_h...
    // TODO-QSP: *p '<tr><<$bm_lnk[1]>><<$bm_lnk[2]>><<$bm_lnk[3]>></tr>'
    // TODO-QSP: *p '<tr><<$bm_lnk[4]>><<$bm_lnk[5]>><<$bm_lnk[6]>></tr>'
    // TODO-QSP: *p '<tr><<$bm_lnk[7]>><<$bm_lnk[8]>><<$bm_lnk[9]>></tr>'
    // TODO-QSP: *p '<tr><<$bm_lnk[10]>><<$bm_lnk[11]>><<$bm_lnk[12]>></tr>'
    // TODO-QSP: *p '</table></center>'
    scene.actions([
      { label: '<b>Done</b>', handler: (st: GameState) => {
    dynamicGoto(st, 'locM', 'locM_arg');
  } },
    ]);
  }
  return;
  scene.build();
}

function enterQuickStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).currentpursetype ?? 0) !== ''  &&  ((s as any).currentpursetype ?? 0) !== 'none') {
  }
  (s as any).tsg = ((((s as any).start_type ?? 0)?.['loc'] === 'sg') ? (1) : (0));
  qspCall(s, 'intro_functions', 'reset_all');
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
    qspCall(s, 'homes_properties', 'give_access', 'parents_home');
    qspCall(s, 'homes_properties', 'set_home', 'parents_home');
    (s as any).kanikuli = 5;
  }
  if (((s as any).pcs_firstname ?? 0) === '') {
    qspCall(s, 'intro_functions', 'set_default', 'name');
  }
  qspCall(s, 'npcstatic1', '');
  qspCall(s, 'npcstatic2', '');
  qspCall(s, 'npcstatic3', '');
  qspCall(s, 'npcstatic4', '');
  qspCall(s, 'npcstatic5', '');
  qspCall(s, 'npcstatic6', '');
  qspCall(s, 'npcstatic_dildos', '');
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).start_type ?? 0)?.['magic'] === 'tg') {
    qspCall(s, 'intro_character_templates', 'set_template', 'goodgirl');
  }
  if ((!((s as any).birthday ?? 0))) {
    qspCall(s, 'intro_functions', 'set_default', 'birthday');
  }
  (s as any).daystart_start = qspFunc(s, 'intro_character_creation', 'get_random', 'daystart');
  qspCall(s, 'intro_initialization', 'init_time');
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
    (s as any).start_location = qspFunc(s, 'intro_character_creation', 'get_random', 'location');
  }
  qspCall(s, 'intro_character_templates', 'set_random_template');
  scene.actions([{ label: 'Continue', goto: ['intro_overview', ''] }]);
  scene.build();
}

function enterGetRandom(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'daystart') {
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
      (s as any).temp_rand = Math.floor(Math.random() * 4) + 0;
      if ((!((s as any).temp_rand ?? 0))) {
        (s as any).result = 153;
      } else {
        if (((s as any).temp_rand ?? 0) === 1) {
          (s as any).result = 183;
        } else {
          if (((s as any).temp_rand ?? 0) === 2) {
            (s as any).result = 214;
          } else {
            (s as any).result = 239;
          }
        }
      }
    } else {
      if (((s as any).start_type ?? 0)?.['loc'] === 'uni') {
        (s as any).result = 603;
      } else {
        (s as any).result = 521;
      }
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'location') {
      if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
        (s as any).result = Math.floor(Math.random() * 4) + 0;
        if (((s as any).knowpreg ?? 0) === 1  ||  ((s as any).kid ?? 0) > 0) {
          if (((s as any).result ?? 0) === 3) {
            (s as any).result = qspFunc(s, 'intro_character_creation', 'get_random', 'location');
            return;
          }
        }
      } else {
        (s as any).result = 0;
      }
    }
  }
  return;
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'themes', 'indoors');
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    if (((s as any).currentpursetype ?? 0) !== ''  &&  ((s as any).currentpursetype ?? 0) !== 'none') {
    }
    (s as any).tsg = ((((s as any).start_type ?? 0)?.['loc'] === 'sg') ? (1) : (0));
    qspCall(s, 'intro_functions', 'reset_all');
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
      qspCall(s, 'homes_properties', 'give_access', 'parents_home');
      qspCall(s, 'homes_properties', 'set_home', 'parents_home');
      (s as any).kanikuli = 5;
    }
    qspCall(s, 'npcstatic1', '');
    qspCall(s, 'npcstatic2', '');
    qspCall(s, 'npcstatic3', '');
    // TODO-QSP: gt 'intro_character_creation', 'start', $ARGS[1], 1
  } else {
    if (((s as any).locArgs?.[2] ?? 0) === 1) {
      if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).start_type ?? 0)?.['magic'] === 'tg') {
        // TODO-QSP: gt 'intro_character_creation', 'start', $ARGS[1], 2
      } else {
        if (((s as any).pcs_firstname ?? 0) === '') {
          qspCall(s, 'intro_functions', 'set_default', 'name');
        }
        if (((s as any).temp ?? 0) !== '') {
        }
        if (((s as any).temp ?? 0) !== '') {
        }
        if (((s as any).temp ?? 0) !== '') {
        }
        scene.img('images/system/1_openings/shared/pre_1.jpg');
        // TODO-QSP: dynamic text: You are <<$pcs_firstname>> <<$pcs_lastname>>, nicknamed <<$pcs_nickname>> for sh...
        scene.text(`You are ${((s as any).pcs_firstname ?? 0)} ${((s as any).pcs_lastname ?? 0)}, nicknamed ${((s as any).pcs_nickname ?? 0)} for short.`);
        // TODO-QSP: dynamic text: Your mother's name is <<$npc_firstname['A29']>> and your biological father left ...
        scene.text(`Your mother's name is ${((s as any).npc_firstname ?? 0)?.['A29']} and your biological father left when you were a baby, your mother marrying your stepfather, ${((s as any).npc_firstname ?? 0)?.['A28']}, shortly afterwards.`);
        // TODO-QSP: dynamic text: <<$npc_firstname['A33']>> is your older sister, who is two years older than you,...
        scene.text(`${((s as any).npc_firstname ?? 0)?.['A33']} is your older sister, who is two years older than you, but is still living at home while working at the local grocery store. She chose not to attend university and instead spends most of her free time drinking and going to parties with her friends, much to your mother's dismay.`);
        // TODO-QSP: dynamic text: You also have a younger half-brother, <<$npc_firstname['A34']>>, who is really i...
        scene.text(`You also have a younger half-brother, ${((s as any).npc_firstname ?? 0)?.['A34']}, who is really into sports, especially football, and is shaping up to be a fine athlete. He is a year younger than you and his father is your stepfather.`);
        if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
          // TODO-QSP: dynamic text: Your <<$npc_usedname['A30']>> lives in the same building as you do, though you r...
          scene.text(`Your ${((s as any).npc_usedname ?? 0)?.['A30']} lives in the same building as you do, though you rarely see her except when you pass her in the stairwell. She is your mother's older sister. ${((s as any).npc_usedname ?? 0)?.['A54']}, as everyone calls him, is best friends with your stepfather. ${((s as any).npc_firstname ?? 0)?.['A11']} ${((s as any).npc_lastname ?? 0)?.['A11']}, your childhood friend, is the same age as you and grew up living in the same apartment building on the floor above yours. His father, ${((s as any).npc_firstname ?? 0)?.['A112']}, is an old friend of your mother.`);
        }
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_creation', 'start', $ARGS[1], 2
  } },
          { label: 'Re-enter name', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_creation', 'start', $ARGS[1], 1
  } },
        ]);
      }
    } else {
      if (((s as any).locArgs?.[2] ?? 0) === 2) {
        qspCall(s, 'npcstatic4', '');
        qspCall(s, 'npcstatic5', '');
        qspCall(s, 'npcstatic6', '');
        qspCall(s, 'npcstatic_dildos', '');
        qspCall(s, 'npc_relationship', 'default');
        qspCall(s, 'npc_relationship', 'default_family_friends');
        qspCall(s, 'npc_relationship', 'set', 'A18', 1);
        if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).start_type ?? 0)?.['magic'] === 'tg') {
          qspCall(s, 'intro_character_templates', 'set_template', ((s as any).tg_init_cat ?? 0));
        }
        // TODO-QSP: gt 'intro_character_creation', 'start2', $ARGS[1]
      }
    }
  }
  return;
  scene.build();
}

function enterStart2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/system/1_openings/shared/pre_2.jpg');
  qspCall(s, 'intro_character_creation', 'core_birthday', 'link');
  return;
  scene.actions([
    { label: 'Confirm', handler: (st: GameState) => {
    if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
      qspCall(s, 'intro_initialization', 'init_time');
      scene.actions([{ label: 'Continue', goto: ['intro_character_creation', 'charselect'] }]);
    } else {
      scene.img('images/system/1_openings/shared/pre_3.jpg');
      scene.text('You have four options when it comes to starting the game:');
      scene.text('1. Starting in August, at the end of the summer holiday, very close to the new school year <i>(recommended for new players)</i>');
      scene.text('2. Starting on August 1st, a month before the start of the new school year.');
      scene.text('3. Starting on July 1st, one month into the summer holiday.');
      scene.text('4. Starting on June 1st, at the beginning of the summer holiday (required for ballet content).');
      scene.actions([
        { label: 'Start at the end of August', handler: (st: GameState) => {
    (s as any).daystart_start = 239;
    qspCall(s, 'intro_initialization', 'init_time');
    // TODO-QSP: gt 'intro_character_creation', 'start3', $start2_dest
  } },
        { label: 'Start at the beginning of August', handler: (st: GameState) => {
    (s as any).daystart_start = 214;
    qspCall(s, 'intro_initialization', 'init_time');
    // TODO-QSP: gt 'intro_character_creation', 'start3', $start2_dest
  } },
        { label: 'Start at the beginning of July', handler: (st: GameState) => {
    (s as any).daystart_start = 183;
    qspCall(s, 'intro_initialization', 'init_time');
    // TODO-QSP: gt 'intro_character_creation', 'start3', $start2_dest
  } },
        { label: 'Start at the beginning of June', handler: (st: GameState) => {
    (s as any).daystart_start = 153;
    qspCall(s, 'intro_initialization', 'init_time');
    // TODO-QSP: gt 'intro_character_creation', 'start3', $start2_dest
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterStart3(s: GameState, scene: SceneBuilder): void {
  scene.img('images/system/1_openings/shared/pre_3.jpg');
  scene.text('In the Gadukino start, you\'re visiting your grandparent\'s house in the small farming village of Gadukino.');
  return;
  scene.actions([
    { label: 'Pavlovsk Start', handler: (st: GameState) => {
    scene.text('<center><h2>Pavlovsk</h2></center>');
    scene.img('images/system/1_openings/shared/site_pavlovsk.jpg');
    scene.text('<center>A provincial town in a rural area of Russia, which looks much like all the other towns in the region. Population: 15,000.</center>');
    scene.text('You have 3 options here:');
    scene.text('"Living with parents" where you awaken at your parent\'s home <i>(Recommended for new players)</i>.');
    scene.text('"Renting in Pushkin" where you will have your own apartment and a need to pay rent each month in the adjacent town of Pushkin.');
    scene.text('"Sharing with the boys" where you are in a flat share with 3 boys having been kicked out of your parents home.');
    if (((s as any).knowpreg ?? 0) === 0  &&  (!((s as any).kid ?? 0))) {
      scene.actions([
        { label: 'Sharing with some boys', handler: (st: GameState) => {
    scene.text('<center><h2>Pavlovsk</h2></center>');
    scene.img('images/system/1_openings/shared/site_pavlovsk.jpg');
    scene.text('<center>A provincial town in a rural area of Russia, which looks much like all the other towns in the region. Population: 15,000.</center>');
    scene.text('<center>You are not welcome back home and have to live with 3 boys.</center>');
    (s as any).start_location = 3;
    scene.actions([
      { label: 'Confirm location', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_creation', $temp_dest
  } },
      { label: 'Change location', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_creation', 'start3', $ARGS[1]
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Living with parents', handler: (st: GameState) => {
    scene.text('<center><h2>Pavlovsk</h2></center>');
    scene.img('images/system/1_openings/shared/site_pavlovsk.jpg');
    scene.text('<center>A provincial town in a rural area of Russia, which looks much like all the other towns in the region. Population: 15,000.</center>');
    (s as any).start_location = 0;
    scene.actions([
      { label: 'Confirm location', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_creation', $temp_dest
  } },
      { label: 'Change location', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_creation', 'start3', $ARGS[1]
  } },
    ]);
  } },
      { label: 'Renting in Pushkin', handler: (st: GameState) => {
    scene.text('<center><h2>Pushkin</h2></center>');
    scene.img('images/locations/pushkin/liam.jpg');
    scene.text('<center>A small tourist town famous for the palaces of Catherine and Paval. It is joined to Pavlovsk and most facilities are there.</center>');
    (s as any).start_location = 2;
    scene.actions([
      { label: 'Confirm location', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_creation', $temp_dest
  } },
      { label: 'Change location', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_creation', 'start3', $ARGS[1]
  } },
    ]);
  } },
      { label: 'Change location', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_creation', 'start3', $ARGS[1]
  } },
    ]);
  } },
    { label: 'Gadukino Start', handler: (st: GameState) => {
    scene.text('<center><h2>Gadukino</h2></center>');
    scene.img('images/system/1_openings/shared/site_gadukino.jpg');
    scene.text('<center>A small farming village with just as many rickety old wooden houses dotting the landscape as ruins. The village has seen better days.</center>');
    (s as any).start_location = 1;
    scene.actions([
      { label: 'Confirm location', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_creation', $temp_dest
  } },
      { label: 'Change location', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_creation', 'start3', $ARGS[1]
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterCharselect(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'themes', 'indoors');
  (s as any).tsg = ((((s as any).start_type ?? 0)?.['loc'] === 'sg') ? (1) : (0));
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    scene.img('images/system/1_openings/shared/pre_4.jpg');
    scene.text('Select your personality/social group. Your social group will have a major defining impact upon your life in school and will determine your starting friends, traits and overall look. While you can always change groups later, it takes time and effort, so choose wisely.');
    scene.actions([
      { label: 'Popular', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_creation', 'charselect', 'cool'
  } },
      { label: 'Jock', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_creation', 'charselect', 'jock'
  } },
      { label: 'Nerd', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_creation', 'charselect', 'nerd'
  } },
      { label: 'Gopnik', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_creation', 'charselect', 'gopnik'
  } },
      { label: 'Outcast', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_creation', 'charselect', 'outcast'
  } },
      { label: 'Full custom setup', goto: ['intro_character_custom', 'start'] },
      { label: 'Random personality', goto: ['intro_character_creation', 'random_start'] },
    ]);
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'cool') {
      qspCall(s, 'intro_character_creation', 'group_desc', 'cool');
      scene.actions([
        { label: 'I <<$temp_have>> a lot of friends', handler: (st: GameState) => {
    qspCall(st, 'intro_character_creation', 'group_desc', 'cool', 'socialite');
  } },
        { label: 'I <<$temp_verb>> beautiful', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'cool', 'beauti...
  } },
        { label: 'I <<$temp_verb>> just hanging in there', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'cool', 'anorex...
  } },
        { label: 'I <<$temp_verb>> like, bubbly and hot', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'cool', 'bimbo'
  } },
      ]);
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'jock') {
        qspCall(s, 'intro_character_creation', 'group_desc', 'jock');
        scene.actions([
          { label: 'I <<$temp_verb>> an avid volleyball player', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'jock', 'volley...
  } },
          { label: 'I <<$temp_verb>> an avid dancer', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'jock', 'dancer...
  } },
          { label: 'I <<$temp_verb>> an avid runner', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'jock', 'runner...
  } },
          { label: 'I <<$temp_verb>> an avid football player', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'jock', 'footba...
  } },
        ]);
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 'nerd') {
          qspCall(s, 'intro_character_creation', 'group_desc', 'nerd');
          scene.actions([
            { label: 'I <<$temp_verb>> the Queen of the Nerds!', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'nerd', 'nerdqu...
  } },
            { label: 'I <<$temp_verb>> a good student', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'nerd', 'goodst...
  } },
            { label: 'I <<$temp_verb>> a computer geek', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'nerd', 'comput...
  } },
            { label: 'I <<$temp_verb>> an avid chess player', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'nerd', 'chessp...
  } },
          ]);
        } else {
          if (((s as any).locArgs?.[1] ?? 0) === 'gopnik') {
            qspCall(s, 'intro_character_creation', 'group_desc', 'gopnik');
            if (((s as any).tsg ?? 0)) {
              scene.actions([
                { label: 'I <<$temp_verb>> <<$npc_nickname[\'A9\']>>\'s girlfriend', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'gopnik', 'vite...
  } },
              ]);
            }
            scene.actions([
              { label: 'I <<$temp_verb>> a gopnik', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'gopnik', 'gopn...
  } },
              { label: 'I <<$temp_verb>> a punk or troublemaker', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'gopnik', 'trou...
  } },
              { label: 'I <<$temp_verb>> an alternative, party girl or rebel', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'gopnik', 'alte...
  } },
            ]);
          } else {
            if (((s as any).locArgs?.[1] ?? 0) === 'outcast') {
              qspCall(s, 'intro_character_creation', 'group_desc', 'outcast');
              scene.actions([
                { label: 'I <<$temp_have>> no friends', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'outcast', 'fri...
  } },
                { label: 'I <<$temp_verb>> an ugly duckling', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'outcast', 'ugl...
  } },
                { label: 'I <<$temp_verb>> a good girl', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'outcast', 'goo...
  } },
                { label: 'I <<$temp_verb>> a slut', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'outcast', 'slu...
  } },
                { label: 'I <<$temp_verb>> the resident goth', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'outcast', 'got...
  } },
                { label: 'I <<$temp_verb>> the poor kid', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_creation', 'group_desc', 'outcast', 'poo...
  } },
              ]);
            }
          }
        }
      }
    }
  }
  if (((s as any).locArgs?.[1] ?? 0) !== '') {
    scene.actions([
      { label: 'Return to starting options', goto: ['intro_character_creation', 'charselect'] },
    ]);
  }
  return;
  scene.build();
}

function enterGroupDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'cool') {
    if (((s as any).locArgs?.[2] ?? 0) === '') {
      scene.text('<center><b>Popular</b></center>');
      scene.img('images/system/1_openings/2_sg/popular_0.jpg');
      // TODO-QSP: dynamic text: You spent most of your childhood outdoors, playing with other boys and girls. As...
      scene.text(`You spent most of your childhood outdoors, playing with other boys and girls. As a result, you're quite healthy and have a keen understanding about how to get yourself out of trouble (or shifting the blame to someone else). You were never very interested in school or sports, however, and are only a sub-par student. Your popularity has negatively impacted your relationship with ${((s as any).npc_firstname ?? 0)?.['A11']}, and ${((((s as any).tsg ?? 0)) ? ('you\'re not') : ('you weren\'t'))} as close as you once were. ${((((s as any).tsg ?? 0)) ? ('Now') : ('You were popular because'))}...`);
    } else {
      if (((s as any).locArgs?.[2] ?? 0) === 'socialite') {
        scene.text('<center><b>Sociable</b></center>');
        scene.img('images/system/1_openings/2_sg/popular_1.jpg');
        // TODO-QSP: dynamic text: <<iif(tsg, "You're", "You were")>> friends with all of the important kids at sch...
        scene.text(`${((((s as any).tsg ?? 0)) ? ('You\'re') : ('You were'))} friends with all of the important kids at school, which is what really ${((((s as any).tsg ?? 0)) ? ('matters') : ('mattered'))}. You were very social growing up and enjoyed being around others, often becoming the center of attention.`);
        scene.text('You\'ve always had a knack for knowing the right thing to say at the right moment, which led to many other students wanting to be your friend. You can, with a little work, get along with nearly anyone if you put your mind to it.');
        if ((!((s as any).tsg ?? 0))) {
          scene.text('Now you find yourself in the big city and you no longer feel like the big important fish in a small pond. Everyone is more busy and there is just so many more people.');
        }
      } else {
        if (((s as any).locArgs?.[2] ?? 0) === 'beautiful') {
          scene.text('<center><b>Beautiful</b></center>');
          scene.img('images/system/1_openings/2_sg/popular_2.jpg');
          // TODO-QSP: dynamic text: You might not <<iif(tsg, "be", "have been")>> the smartest, the most social, the...
          scene.text(`You might not ${((((s as any).tsg ?? 0)) ? ('be') : ('have been'))} the smartest, the most social, the most athletic or ${((((s as any).tsg ?? 0)) ? ('have') : ('had'))} the toughest attitude - but you ${((((s as any).tsg ?? 0)) ? ('do') : ('did'))} have natural good looks. That's not something you can earn!`);
          // TODO-QSP: dynamic text: You blossomed earlier than most girls and the boys took note<<iif(tsg, ", especi...
          scene.text(`You blossomed earlier than most girls and the boys took note${'TODO'}, who started acting differently around you", "")>>. As you got older your looks only improved, and you ${((((s as any).tsg ?? 0)) ? ('are') : ('were'))} often considered one of the best looking girls ${((((s as any).tsg ?? 0)) ? ('wherever you go') : ('in school'))}. You ${((((s as any).tsg ?? 0)) ? ('are') : ('were'))} especially popular with the cool kids and jocks.`);
          if ((!((s as any).tsg ?? 0))) {
            scene.text('Now that you are in the city, you are still better looking than most, but you can\'t help but notice the occasional girl that is even better looking than you. It seems the boys are also not as impressed at your looks as they once were.');
          }
        } else {
          if (((s as any).locArgs?.[2] ?? 0) === 'anorexic') {
            scene.text('<center><b>Barely Hanging on</b></center>');
            scene.img('images/system/1_openings/2_sg/popular_3.jpg');
            scene.text('You had good looks growing up and naturally ended up falling in with the cool crowd. You enjoyed being the center of attention and became obsessed with looking like the models you\'d seen on social media and in magazines. You started dieting, but took it too far and ended up losing a lot of weight, which caused some of your fellow students to start talking about you and make the odd joke at your expense. This led to a vicious cycle and as your looks deteriorated, the jokes got worse, which only spurred you on further.');
            // TODO-QSP: dynamic text: Your family and some of your friends, especially <<$npc_nickname['A15']>> and <<...
            scene.text(`Your family and some of your friends, especially ${((s as any).npc_nickname ?? 0)?.['A15']} and ${((s as any).npc_nickname ?? 0)?.['A148']}, became concerned and with their support, you were able to start recovering. You now have a good relationship with your mother and sister, as well as ${((s as any).npc_nickname ?? 0)?.['A15']} and ${((s as any).npc_nickname ?? 0)?.['A148']}, who defended you and prevented you from becoming an outcast. ${((((s as any).start_type ?? 0)?.['loc'] === 'sg') ? ('You\'re') : ('When you left school you were'))} still a member of your clique, albeit only barely.`);
          } else {
            if (((s as any).locArgs?.[2] ?? 0) === 'bimbo') {
              scene.text('<center><b>Simply Stunning</b></center>');
              scene.img('images/system/1_openings/2_sg/popular_4.jpg');
              // TODO-QSP: dynamic text: In your younger years, you loved playing with dolls and dressing them up in your...
              scene.text(`In your younger years, you loved playing with dolls and dressing them up in your favourite colour, pink. At high school, you looked good and naturally ended up joining the cool crowd in school. You desire to be ${((((s as any).tsg ?? 0)) ? ('the') : ('in the'))} centre of attention and that has affected your relationship with others.`);
              // TODO-QSP: dynamic text: You love dressing up and makeup, which has taken up pretty much all of your spar...
              scene.text(`You love dressing up and makeup, which has taken up pretty much all of your spare time and gradually impacted your school work as you spent a lot of the time in lessons playing with your phone looking at the latest trends. This also meant that your relationship with your schoolmates suffered as a result. ${((((s as any).tsg ?? 0)) ? ('You\'re') : ('When you left school you were'))} still a member of your clique but with a lower relationship with most of the other kids in your clique than would be ideal.`);
              if ((!((s as any).tsg ?? 0))) {
                scene.text('In addition to which as your grades suffered and although you managed to pass, your grades were only barely sufficient to allow you entry into university.');
              }
            }
          }
        }
      }
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'jock') {
      if (((s as any).locArgs?.[2] ?? 0) === '') {
        scene.text('<center><b>Jock</b></center>');
        scene.img('images/system/1_openings/2_sg/jock_0.jpg');
        // TODO-QSP: dynamic text: While you were growing up, you spent virtually all of your free time outdoors. Y...
        scene.text(`While you were growing up, you spent virtually all of your free time outdoors. You loved playing sports, running, biking and hiking. This has kept you in fairly good shape, as well as socially active in a variety of team sports over the years. Doing this, however, negatively impacted your friendship with ${((s as any).npc_firstname ?? 0)?.['A11']}. As you grew up, he became a gopnik and the two of you slowly started hanging out less often, although you still consider${((((s as any).tsg ?? 0)) ? ('') : ('ed'))} each other to be friends. From all the sports available, you ${((((s as any).tsg ?? 0)) ? ('are') : ('were'))} an...`);
      } else {
        if (((s as any).locArgs?.[2] ?? 0) === 'volleyball') {
          scene.text('<center><b>Volleyball player</b></center>');
          scene.img('images/system/1_openings/2_sg/jock_1.jpg');
          // TODO-QSP: dynamic text: Ever since you first played volleyball, you have been in love with the sport. Yo...
          scene.text(`Ever since you first played volleyball, you have been in love with the sport. You spent a lot of your free time trying to improve your ability, and it paid off; you're actually quite good now! Your obsession with volleyball, however, had some repercussions on your school performance. ${((((s as any).tsg ?? 0)) ? ('You\'re') : ('You were'))} a sub-par student, and ${((((s as any).tsg ?? 0)) ? ('you haven\'t') : ('you didn\'t'))} made many friends other than your fellow jocks.`);
          if (((s as any).tsg ?? 0)) {
            // TODO-QSP: dynamic text: You are especially close with <<$npc_firstname['A13']>> and your coach.
            scene.text(`You are especially close with ${((s as any).npc_firstname ?? 0)?.['A13']} and your coach.`);
          } else {
            scene.text('Now that you are in the big city, it seems your talent for volleyball is less respected. Perhaps it\'s time to find something other than sports to be passionate about?');
          }
        } else {
          if (((s as any).locArgs?.[2] ?? 0) === 'dancer') {
            scene.text('<center><b>Avid dancer</b></center>');
            scene.img('images/system/1_openings/2_sg/jock_2.jpg');
            // TODO-QSP: dynamic text: You fell in love with dancing at an early age and never looked back. You spent a...
            scene.text(`You fell in love with dancing at an early age and never looked back. You spent a lot of your free time trying to improve your skills, and it paid off; you're actually quite good now! Your obsession with dancing, however, ${((((s as any).tsg ?? 0)) ? ('has had') : ('had'))} some repercussions on your school performance. ${((((s as any).tsg ?? 0)) ? ('You\'re') : ('You were'))} a sub-par student, and you ${((((s as any).tsg ?? 0)) ? ('haven\'t') : ('didn\'t'))} made many friends other than your fellow jocks.`);
            if (((s as any).tsg ?? 0)) {
              // TODO-QSP: dynamic text: <<$npc_firstname['A11']>> helpfully pointed out that an added benefit of dance w...
              scene.text(`${((s as any).npc_firstname ?? 0)?.['A11']} helpfully pointed out that an added benefit of dance was a greater increase in your flexibility (that is, of course, typical of ${((s as any).npc_firstname ?? 0)?.['A11']}). You're particularly close with ${((s as any).npc_firstname ?? 0)?.['A23']}, who is just as passionate about dancing as you are, and you both have a mutual respect for each other's skill and abilities.`);
              scene.text('At the end of the school year, you took a ballet assessment and are awaiting a letter from the prestigious ballet academy to see if you were accepted into their summer school. NOTE: Ballet is currently under active development and events are character driven, which can lead to inescapable events. You must start in June to activate this content.');
            } else {
              scene.text('You were good friends with Albina Barlovskaya, a girl who was even more passionate about dancing than you. Now that you are in the big city, it seems your dancing talent is less respected. Perhaps it\'s time to find something other than sports to be passionate about?');
            }
          } else {
            if (((s as any).locArgs?.[2] ?? 0) === 'runner') {
              scene.text('<center><b>Track runner</b></center>');
              scene.img('images/system/1_openings/2_sg/jock_3.jpg');
              // TODO-QSP: dynamic text: Ever since you first tried track, you have been in love with the sport. When you...
              scene.text(`Ever since you first tried track, you have been in love with the sport. When you're running, the rest of the world fades away and you experience a natural high like no other. You spent a lot of your free time trying to get better at it, and it paid off; you're actually quite good now! Your obsession with running, however, had some repercussions on your school performance. ${((((s as any).tsg ?? 0)) ? ('You\'re') : ('You were'))} a sub-par student, and you ${((((s as any).tsg ?? 0)) ? ('haven\'t') : ('didn\'t'))} made many friends other than your fellow jocks and your coach.`);
              if ((!((s as any).tsg ?? 0))) {
                scene.text('Now that you are in the big city, it seems your running talents are less respected. Perhaps it\'s time to find something other than sports to be passionate about?');
              }
            } else {
              if (((s as any).locArgs?.[2] ?? 0) === 'football') {
                scene.text('<center><b>Football player</b></center>');
                scene.img('images/system/1_openings/2_sg/jock_4.jpg');
                // TODO-QSP: dynamic text: Ever since your first football game, you have been in love with the sport. You s...
                scene.text(`Ever since your first football game, you have been in love with the sport. You spent a lot of your free time trying to get better at it, and it paid off; you're actually quite good now! Your obsession with football had some repercussions on your school performance, however, and ${((((s as any).tsg ?? 0)) ? ('you\'re now') : ('you were'))} a sub-par student. ${((((s as any).tsg ?? 0)) ? ('You haven\'t made many friends other than your fellow') : ('You didn\'t make many friends other than the'))} jocks, especially ${((s as any).npc_firstname ?? 0)?.['A149']} and your coach.`);
                if ((!((s as any).tsg ?? 0))) {
                  scene.text('Now that you are in the big city, it seems your talent for football is less respected. Perhaps it\'s time to find something other than sports to be passionate about?');
                }
              }
            }
          }
        }
      }
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'nerd') {
        if (((s as any).locArgs?.[2] ?? 0) === '') {
          scene.text('<center><b>Nerd</b></center>');
          scene.img('images/system/1_openings/2_sg/nerd_0.jpg');
          scene.text('Growing up, you spent virtually all of your free time at home, pursuing various cerebral pursuits. These might have included reading comics, fantasy or sci-fi books, learning about chess or computers or playing cards, board games and RPGs with the other nerds, in addition to faithfully going to school. While you gained a huge amount of knowledge from this, your lack of interest in exercising as a child has left your body a little frail.');
          // TODO-QSP: dynamic text: The long nights of trying to read in poor light have also taken a toll on your e...
          scene.text(`The long nights of trying to read in poor light have also taken a toll on your eyesight and you now require glasses. Your cerebral pursuits also had somewhat of a negative impact on your friendship with ${((s as any).npc_firstname ?? 0)?.['A11']} as you grew up. He became a gopnik and the two of you slowly started hanging out less often, although you still consider${((((s as any).tsg ?? 0)) ? ('') : ('ed'))} each other to be friends. On the plus side, doing well in school has made your parents happy and left you with some extra spending money as a reward for your hard work. ${((((s as any).tsg ?? 0)) ? ('Now') : ('You were'))}...`);
        } else {
          if (((s as any).locArgs?.[2] ?? 0) === 'nerdqueen') {
            scene.text('<center><b>Queen of the nerds</b></center>');
            scene.img('images/system/1_openings/2_sg/nerd_1.jpg');
            // TODO-QSP: dynamic text: While you love all things nerdy or geeky, what you <<iif(tsg, "love", "loved")>>...
            scene.text(`While you love all things nerdy or geeky, what you ${((((s as any).tsg ?? 0)) ? ('love') : ('loved'))} the most is hanging out with your fellow nerds and doing nerdy things together. This made you fairly social for a nerd and more general in your areas of knowledge. As you got older and started to develop as a woman, it also made you much more aware of your sexuality than most nerds are comfortable with. As such, you cultivated that awareness more than most and ${((((s as any).tsg ?? 0)) ? ('are now') : ('were'))} more at ease with your body than the other nerds.`);
            // TODO-QSP: dynamic text: By nerd standards, you <<iif(tsg, "are", "were")>> confident, dynamic and attrac...
            scene.text(`By nerd standards, you ${((((s as any).tsg ?? 0)) ? ('are') : ('were'))} confident, dynamic and attractive and this has led to you being the leader of your group of friends. You're more acceptable to other social groups as a result, especially the cool kids, who ${((((s as any).tsg ?? 0)) ? ('seem') : ('seemed'))} to respect your social skills and looks.`);
          } else {
            if (((s as any).locArgs?.[2] ?? 0) === 'goodstudent') {
              scene.text('<center><b>Good student</b></center>');
              scene.img('images/system/1_openings/2_sg/nerd_2.jpg');
              // TODO-QSP: dynamic text: You just <<iif(tsg, "love", "loved")>> school, and your grades <<iif(tsg, "are",...
              scene.text(`You just ${((((s as any).tsg ?? 0)) ? ('love') : ('loved'))} school, and your grades ${((((s as any).tsg ?? 0)) ? ('are') : ('were'))} more than good enough to attend the university of your choosing after graduation${((((s as any).tsg ?? 0)) ? (' - all you have to do is not let them slip') : (''))}. You have always tried to absorb every bit of knowledge possible and ${((((s as any).tsg ?? 0)) ? ('have done everything you can') : ('did everything you could'))} to excel in school. While this attitude gained you a lot of respect from the other nerds, it didn't earn you a lot of friends and you never found the time for sports.`);
              // TODO-QSP: dynamic text: You <<iif(tsg, "are", "were")>> often asked to be a tutor and sometimes <<iif(ts...
              scene.text(`You ${((((s as any).tsg ?? 0)) ? ('are') : ('were'))} often asked to be a tutor and sometimes ${((((s as any).tsg ?? 0)) ? ('find') : ('found'))} yourself forced to do others' homework for them.`);
              if (((s as any).tsg ?? 0)) {
                scene.text('You have excellent grades, and your mother is very proud of you. She has shown her appreciation for your hard work by rewarding you with money.');
              } else {
                scene.text('Now you are in the big city with a whole new world to absorb, although a part of you already misses school.');
              }
            } else {
              if (((s as any).locArgs?.[2] ?? 0) === 'computergeek') {
                scene.text('<center><b>Computer geek</b></center>');
                scene.img('images/system/1_openings/2_sg/nerd_3.jpg');
                // TODO-QSP: dynamic text: You were always into computers, whether it be by playing video games, taking com...
                scene.text(`You were always into computers, whether it be by playing video games, taking computers apart or learning programing and even hacking. You love everything about computers, but this passion left you little time to make friends - real-life friends, at least. You managed to befriend many online players that you ${((((s as any).tsg ?? 0)) ? ('talk') : ('talked'))} to while playing various video games, however, and you rarely ${((((s as any).tsg ?? 0)) ? ('spend') : ('spent'))} any time outdoors, nor money on clothes or other girly stuff. You ${((((s as any).tsg ?? 0)) ? ('are') : ('were'))} far more interested in saving your money for a better computer in order to play even better games.`);
                if (((s as any).tsg ?? 0)) {
                  scene.text('You\'ve considered hosting a web series of video games or vlogs - you even took the time to learn how to video edit - but you aren\'t sure if you want to put yourself out there like that.');
                } else {
                  scene.text('Now you are on your own in the big city, and you will need most of your money to live on instead.');
                }
              } else {
                if (((s as any).locArgs?.[2] ?? 0) === 'chessplayer') {
                  scene.text('<center><b>Avid chess player</b></center>');
                  scene.img('images/system/1_openings/2_sg/nerd_4.jpg');
                  scene.text('You were always into chess as a child, and have studied all the great chess masters. You can name them all, as well as their favorite strategies! You find nothing more interesting than matching your wits against someone else\'s in a game of chess. It has left you with the ability to often see the consequences of your actions better than most as you are used to looking several moves ahead.');
                  // TODO-QSP: dynamic text: All of this left you with little time to make many friends, <<iif(tsg, "and you ...
                  scene.text(`All of this left you with little time to make many friends, ${((((s as any).tsg ?? 0)) ? ('and you rarely spend any') : ('or spend much'))} time outdoors.`);
                  if ((!((s as any).tsg ?? 0))) {
                    scene.text('Now you are on your own living in the big city. You had already planned things out, but now that you\'re here, you have more options than you thought. You can get a job now or go to the university and get a better education like you had originally planned.');
                  }
                }
              }
            }
          }
        }
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 'gopnik') {
          if (((s as any).locArgs?.[2] ?? 0) === '') {
            scene.text('<center><b>Gopnik</b></center>');
            scene.img('images/system/1_openings/2_sg/gopnik_0.jpg');
            scene.text('You spent most of your childhood outdoors, playing with the other boys and girls. As a result, you\'re quite healthy. As you got older, you lost any interest you might have once had with fitting in - now you do your own thing, and you\'re ready to tell anyone where they can stick it if they have a problem with that.');
            // TODO-QSP: dynamic text: As you and <<$npc_firstname['A11']>> walked a similar path, your bond of friends...
            scene.text(`As you and ${((s as any).npc_firstname ?? 0)?.['A11']} walked a similar path, your bond of friendship only deepened. This has had some repercussions on your school performance; you're a sub-par student. It has also had some less than enjoyable consequences, leading you into more than your fair share of fights, into all sorts of problems at home, and landing you in trouble at school. You've even had a few run-ins with the local police. Most people consider${((((s as any).tsg ?? 0)) ? ('') : ('ed'))} you...`);
          } else {
            if (((s as any).locArgs?.[2] ?? 0) === 'gopnikstart') {
              scene.text('<center><b>Gopnik</b></center>');
              scene.img('images/system/1_openings/2_sg/gopnik_1.jpg');
              // TODO-QSP: dynamic text: You <<iif(tsg, "are", "were")>> a gopnik<<iif(tsg, "", " in school")>>. While yo...
              scene.text(`You ${((((s as any).tsg ?? 0)) ? ('are') : ('were'))} a gopnik${((((s as any).tsg ?? 0)) ? ('') : (' in school'))}. While you ${((((s as any).tsg ?? 0)) ? ('are') : ('were'))} still low in the gopnik pecking order, you ${((((s as any).tsg ?? 0)) ? ('have') : ('had'))} already proven yourself to them and most of them ${((((s as any).tsg ?? 0)) ? ('accept') : ('accepted'))} you as an equal. You ${((((s as any).tsg ?? 0)) ? ('have') : ('had'))} problems at home and school due to your antisocial behavior, especially with your mother and stepfather, who ${((((s as any).tsg ?? 0)) ? ('see') : ('saw'))} you going down the wrong path.`);
              if (((s as any).tsg ?? 0)) {
                scene.text('The jocks have a not so friendly rivalry with you and the other gopniks. While you don\'t get along, some of them have mutual respect for you. Albina, however, seems to have a seething hatred for you and your fellow gopniks.');
              } else {
                scene.text('Now you\'re in the big city, a whole new playground to find trouble in.');
              }
            } else {
              if (((s as any).locArgs?.[2] ?? 0) === 'troublemaker') {
                scene.text('<center><b>Troublemaker</b></center>');
                scene.img('images/system/1_openings/2_sg/gopnik_2.jpg');
                // TODO-QSP: dynamic text: You <<iif(tsg, "are", "were")>> a troublemaker<<iif(tsg, "", " in school")>>. No...
                scene.text(`You ${((((s as any).tsg ?? 0)) ? ('are') : ('were'))} a troublemaker${((((s as any).tsg ?? 0)) ? ('') : (' in school'))}. Nothing ${((((s as any).tsg ?? 0)) ? ('makes') : ('made'))} you happier than causing problems, whether it be petty larceny, getting into fights or vandalism. You ${((((s as any).tsg ?? 0)) ? ('live') : ('lived'))} for the thrill of breaking the rules. You ${((((s as any).tsg ?? 0)) ? ('get') : ('got'))} along fairly well with the gopniks and they ${((((s as any).tsg ?? 0)) ? ('accept') : ('accepted'))} you as a kindred spirit, ${((((s as any).tsg ?? 0)) ? ('loving your willingness to jump head first into any and all trouble you run across - and if you can\'t find any, you will') : ('and if you couldn\'t find any trouble, you would'))} happily make your own${((((s as any).tsg ?? 0)) ? (', which keeps things lively') : (''))}.`);
                // TODO-QSP: dynamic text: You <<iif(tsg, "have", "had")>> problems at home and school due to your antisoci...
                scene.text(`You ${((((s as any).tsg ?? 0)) ? ('have') : ('had'))} problems at home and school due to your antisocial behavior, especially with your mother and stepfather, who ${((((s as any).tsg ?? 0)) ? ('see') : ('saw'))} you going down the wrong path.`);
                if (((s as any).tsg ?? 0)) {
                  scene.text('You are well known to both your teachers and the police, and Albina appears to have a seething hatred for you and your fellow gopniks.');
                } else {
                  scene.text('Now you\'re in the big city, a whole new playground to find trouble in.');
                }
              } else {
                if (((s as any).locArgs?.[2] ?? 0) === 'alternative') {
                  scene.text('<center><b>Alternative</b></center>');
                  scene.img('images/system/1_openings/2_sg/gopnik_4.jpg');
                  // TODO-QSP: dynamic text: You <<iif(tsg, "march", "marched")>> to your own tune. You <<iif(tsg, "do", "did...
                  scene.text(`You ${((((s as any).tsg ?? 0)) ? ('march') : ('marched'))} to your own tune. You ${((((s as any).tsg ?? 0)) ? ('do') : ('did'))} what you ${((((s as any).tsg ?? 0)) ? ('want') : ('wanted'))} when you ${((((s as any).tsg ?? 0)) ? ('want') : ('wanted'))}, and ${((((s as any).tsg ?? 0)) ? ('do') : ('did'))} it with a fuck-it-all attitude. The gopniks ${((((s as any).tsg ?? 0)) ? ('respect') : ('respected'))} you and for the most part you ${((((s as any).tsg ?? 0)) ? ('get') : ('got'))} along with them. You ${((((s as any).tsg ?? 0)) ? ('are') : ('were'))} not one of them, however, but rather a kindred spirit looking to walk your own path and raise a little hell along the way.`);
                  if (((s as any).tsg ?? 0)) {
                    scene.text('Unlike the gopniks, you have far less interest in fighting or causing problems, you\'re just looking for a good time - you love to party more than anything else. The cool kids don\'t completely look down their nose at you. Even if they don\'t approve of your clothes, they respect your love of looking nice and having a good time. Albina, however, seems to have it out for you and the other gopniks.');
                    scene.text('You also have problems at home and school due to your behavior. This is especially true with your mother and stepfather, who see you going down the wrong path.');
                  } else {
                    scene.text('You had problems at home and school due to your behavior, especially with your mother and stepfather, who saw you going down the wrong path.');
                    scene.text('That doesn\'t matter now since you\'re out in the city on your own, ready to do as you please.');
                  }
                } else {
                  if (((s as any).locArgs?.[2] ?? 0) === 'vitekgf') {
                    scene.text('<center><b>Vitek\'s girlfriend</b></center>');
                    scene.img('images/system/1_openings/2_sg/gopnik_3.jpg');
                    // TODO-QSP: dynamic text: You are <<$npc_nickname['A9']>>'s girlfriend. You love the thrill and danger of ...
                    scene.text(`You are ${((s as any).npc_nickname ?? 0)?.['A9']}'s girlfriend. You love the thrill and danger of hanging out with the gopniks, even if you lack the true attitude yourself. You met ${((s as any).npc_nickname ?? 0)?.['A9']} after he and ${((s as any).npc_firstname ?? 0)?.['A11']} became friends. There was something about his bad boy attitude that drew you in, and you soon found yourself falling for him.`);
                    scene.text('As you developed, he started to take an interest in you as well and you soon started dating. You\'re not technically a gopnik - you\'re considered more of a wannabe - but the rest of the gopniks seem to accept you anyway.');
                    // TODO-QSP: dynamic text: You're not sure what would happen if you ever broke up with <<$npc_nickname['A9'...
                    scene.text(`You're not sure what would happen if you ever broke up with ${((s as any).npc_nickname ?? 0)?.['A9']}, however, as being his girlfriend and hanging out with the other gopniks has cost you any real, close friends outside of their group. Albina in particular seems to have it out for you and the other gopniks.`);
                  }
                }
              }
            }
          }
        } else {
          if (((s as any).locArgs?.[1] ?? 0) === 'outcast') {
            if (((s as any).locArgs?.[2] ?? 0) === '') {
              scene.text('<center><b>Outcast</b></center>');
              scene.img('images/system/1_openings/2_sg/outcast_0.jpg');
              // TODO-QSP: dynamic text: You never really fit in. You're just one of those individuals who, by choice or ...
              scene.text(`You never really fit in. You're just one of those individuals who, by choice or circumstance, never really clicked with the other kids. As you got older things only got worse, and ${((((s as any).tsg ?? 0)) ? ('now you are') : ('you were'))} seen as an outcast, in the same vein as sluts, losers, gay boys and the like.`);
              // TODO-QSP: dynamic text: Being an outcast has also had a somewhat negative impact on your friendship with...
              scene.text(`Being an outcast has also had a somewhat negative impact on your friendship with ${((s as any).npc_firstname ?? 0)?.['A11']}. As you grew up, he became a gopnik and the two of you slowly started hanging out less and less, although you still consider${((((s as any).tsg ?? 0)) ? ('') : ('ed'))} each other to be friends - if just barely. You ${((((s as any).tsg ?? 0)) ? ('have') : ('had'))} no other real friends, and you ${((((s as any).tsg ?? 0)) ? ('get') : ('were'))} bullied and made fun of all the time because...`);
            } else {
              if (((s as any).locArgs?.[2] ?? 0) === 'friendless') {
                scene.text('<center><b>Friendless</b></center>');
                scene.img('images/system/1_openings/2_sg/outcast_1.jpg');
                // TODO-QSP: dynamic text: You were never very social and never learned how to make friends<<iif(tsg, ", so...
                scene.text(`You were never very social and never learned how to make friends${((((s as any).tsg ?? 0)) ? (', so') : ('.'))} you were often made fun of or bullied by the other kids as you grew up. As such, you naturally shielded away from them, an action that only served to isolate you even further.`);
                if (((s as any).tsg ?? 0)) {
                  scene.text('Now, years later, you have yet to make any real friends - even Vasily, your closest person to a friend, wouldn\'t be considered a particularly close one. In public, he scorns you like all the rest, but is a little nicer in private.');
                } else {
                  scene.text('Now that you have moved to the city, you have a chance to do things differently and make new friends.');
                }
              } else {
                if (((s as any).locArgs?.[2] ?? 0) === 'uglyduckling') {
                  scene.text('<center><b>Ugly duckling</b></center>');
                  scene.img('images/system/1_openings/2_sg/outcast_2.jpg');
                  // TODO-QSP: dynamic text: Some girls blossom early and others have natural good looks - you got neither. I...
                  scene.text(`Some girls blossom early and others have natural good looks - you got neither. In fact, you seem to have been cursed with an androgynous face and ${((((s as any).tsg ?? 0)) ? ('body') : ('fat body'))}, and have been mistaken for a boy more times than you would care to admit.`);
                  if (((s as any).tsg ?? 0)) {
                    scene.text('Your body seems to have grown out of sync, leaving you looking odd and, at best, unattractive for most of your life. Now in your teens, your body is starting to even out in growth, but you\'re still very androgynous and still considered ugly.');
                  }
                  // TODO-QSP: dynamic text: Your lack of good looks <<iif(tsg, "has made", "made")>> you a social pariah<<ii...
                  scene.text(`Your lack of good looks ${((((s as any).tsg ?? 0)) ? ('has made') : ('made'))} you a social pariah${((((s as any).tsg ?? 0)) ? ('') : (' in school'))}. Nobody ${((((s as any).tsg ?? 0)) ? ('seems to like you or want') : ('liked you or wanted'))} to spend time with you unless they ${((((s as any).tsg ?? 0)) ? ('are') : ('were'))} making fun of you.`);
                  if ((!((s as any).tsg ?? 0))) {
                    scene.text('Now that you have moved to the city, you\'re hoping that is all about to change.');
                  }
                } else {
                  if (((s as any).locArgs?.[2] ?? 0) === 'goodgirl') {
                    scene.text('<center><b>Good girl</b></center>');
                    scene.img('images/system/1_openings/2_sg/outcast_3.jpg');
                    // TODO-QSP: dynamic text: You <<iif(tsg, "are", "were")>> a good girl - the kind parents, teachers and adu...
                    scene.text(`You ${((((s as any).tsg ?? 0)) ? ('are') : ('were'))} a good girl - the kind parents, teachers and adults ${((((s as any).tsg ?? 0)) ? ('love') : ('loved'))}, but the other kids ${((((s as any).tsg ?? 0)) ? ('hate') : ('hated'))}. You always reminded the teacher to give out homework and would snitch on anyone for doing anything. You also regularly attend${((((s as any).tsg ?? 0)) ? ('') : ('ed'))} church.`);
                    if (((s as any).tsg ?? 0)) {
                      scene.text('You love the attention you get from adults, and while you can feel lonely at times, you\'re pretty happy knowing you\'re a good girl. The nerds seem to tolerate you the most, likely because they almost never misbehave and always do their homework anyway.');
                    } else {
                      scene.text('Now you are in the big city and have suddenly found there are no teachers or adults to impress. In fact, it seems buttering up to the adults your entire life has become something of a hindrance.');
                    }
                  } else {
                    if (((s as any).locArgs?.[2] ?? 0) === 'slut') {
                      scene.text('<center><b>Slut</b></center>');
                      scene.img('images/system/1_openings/2_sg/outcast_4.jpg');
                      scene.text('You became curious about sex far sooner than other kids your age. You started masturbating long before the others in your year and loved the sensation so much that you wanted to find out how good sex would feel, becoming the first girl in your year to lose your virginity.');
                      if (((s as any).tsg ?? 0)) {
                        scene.text('Boys took advantage of your sexual needs and made you give them handjobs, which then led to blowjobs under the bleachers during recess and after school. You always savored swallowing their cum, loving how it tastes.');
                        scene.text('However, your sex addiction has made you a social pariah. The girls all despise you and the boys publicly mock you, although they don\'t mind using you. The nerds completely avoid you, while the gopniks seem to tolerate you the most, likely because they enjoy taking advantage of you.');
                      } else {
                        scene.text('However, your resultant addiction to sex made you a social pariah, and you were constantly mocked by your peers. Now you are in the big city where nobody knows you, giving you a chance to either start over or continue your life of debauchery.');
                      }
                    } else {
                      if (((s as any).locArgs?.[2] ?? 0) === 'goth') {
                        scene.text('<center><b>Goth</b></center>');
                        scene.img('images/system/1_openings/2_sg/outcast_5.jpg');
                        // TODO-QSP: dynamic text: Every school has their oddball, in your case - You. You never felt like you fit ...
                        scene.text(`Every school has their oddball, in your case - You. You never felt like you fit in, at least until you watched some American movies, saw some goths and suddenly felt like you belonged. You quickly used all the allowance you had to buy new clothes and makeup so you could finally feel good about yourself. Your family and classmates ${((((s as any).start_type ?? 0)?.['loc'] === "((s as any).sg ?? 0)") ? ('don\'t approve, but you don\'t care.') : ('didn\'t approve, but you didn\'t care.'))}`);
                        if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
                          scene.text('You\'re the school\'s resident Goth. The Dark Temptress that all the boys secretly dream of, weaver of morbid poetry and suicide covenants. Everyone seems to think you\'re going to sacrifice someone or commit suicide, and your classmates aren\'t much better, with the so-called "cool girls" leading an ostracism campaign against you.');
                          scene.text('Fortunately, not everyone listens to them. The nerds like your reading proclivity and that you are into some of the same things they are; you think they might even invite you to their game night one day. A few of the gopniks like your party attitude, specifically those in the band, who seem to respect your artistic disposition. Or their lead singer just wants to get in your panties. It\'s hard to tell.');
                        } else {
                          scene.text('With school over, you\'ve moved to the city, where you feel a lot more accepted, although people still give you the odd stare.');
                        }
                      } else {
                        if (((s as any).locArgs?.[2] ?? 0) === 'poor') {
                          scene.text('<center><b>Poor</b></center>');
                          scene.img('images/system/1_openings/2_sg/outcast_6.jpg');
                          scene.text('You found living at home difficult as you struggled with your Mother\'s domineering attitude. Consequently you rebelled and constantly argued with her. Not only that but you started getting into fights and frequently came home bruised and battered. This led to your relationship with both her and your step-father becoming very strained. Sometimes your sister had to pull you away to stop things escalating too far and talked to you especially in the evenings, probably because she struggled with your mother as well. You have a good relationship with your sister. Your brother generally kept out of the way so you don\'t really have a relationship with him.');
                          scene.text('The quality of your home life also impacted your performance at school as you kept getting into trouble and not paying too much attention in most of the classes. You have got a bit of a reputation sexually too as you weren\'t averse to using your mouth to make a few rubles to compensate for your lack of cash. Your behaviour plus the fact you never had much money also meant that you were excluded from the cool kids who looked down on you and the nerds who became wary of you. You got on with most of the gopnik but never made much effort to join them although you have a great relationship with your best friend Vasily and get on with his friends, Vitek and Dan.');
                          scene.text('Your mother became aware of your sexual reputation and considers you a whore. When you tried to tell her you are still a virgin she didn\'t believe you, which led to more arguments, until eventually you stopped bothering to try to defend yourself and just tried to avoid her.');
                          scene.text('You also developed a close relationship with Alyona, most likely because her home life was worse than yours so you were sort of kindred spirits. She also saw the state of you following some of the fights and suggested you start training so you can hold your own. You took her advice and took up kick boxing and running and found the later great as you were at peace when training. As a result the gopnik quite like you and the jocks tolerate you.');
                          scene.text('This new found focus also helped in that your school work started improving slightly. Noticing this your mother tried to encourage you and bought you a couple of new outfits telling you that it was a reward for your efforts at school. Your relationship with your parents is still tense but at least you can talk without arguing.');
                          if ((!((s as any).tsg ?? 0))) {
                            scene.text('You did manage to pass school although just barely. Given the relationship with your parents once school broke up you decided to move to the City and consider if you want to go to university as you parents want, although you feel this might be very difficult for you or just get a job.');
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
    }
  }
  if (((s as any).locArgs?.[1] ?? 0) !== ''  &&  ((s as any).locArgs?.[2] ?? 0) !== '') {
    qspCall(s, 'intro_character_creation', 'setup_personality', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  }
  return;
  scene.build();
}

function enterRandomStart(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_rand = Math.floor(Math.random() * 22) + 0;
  if ((!((s as any).temp_rand ?? 0))) {
    qspCall(s, 'intro_character_creation', 'group_desc', 'nerd', 'nerdqueen');
  } else {
    if (((s as any).temp_rand ?? 0) === 1) {
      qspCall(s, 'intro_character_creation', 'group_desc', 'nerd', 'goodstudent');
    } else {
      if (((s as any).temp_rand ?? 0) === 2) {
        qspCall(s, 'intro_character_creation', 'group_desc', 'nerd', 'computergeek');
      } else {
        if (((s as any).temp_rand ?? 0) === 3) {
          qspCall(s, 'intro_character_creation', 'group_desc', 'nerd', 'chessplayer');
        } else {
          if (((s as any).temp_rand ?? 0) === 4) {
            qspCall(s, 'intro_character_creation', 'group_desc', 'jock', 'volleyball');
          } else {
            if (((s as any).temp_rand ?? 0) === 5) {
              qspCall(s, 'intro_character_creation', 'group_desc', 'jock', 'dancer');
            } else {
              if (((s as any).temp_rand ?? 0) === 6) {
                qspCall(s, 'intro_character_creation', 'group_desc', 'jock', 'runner');
              } else {
                if (((s as any).temp_rand ?? 0) === 7) {
                  qspCall(s, 'intro_character_creation', 'group_desc', 'jock', 'football');
                } else {
                  if (((s as any).temp_rand ?? 0) === 8) {
                    qspCall(s, 'intro_character_creation', 'group_desc', 'cool', 'socialite');
                  } else {
                    if (((s as any).temp_rand ?? 0) === 9) {
                      qspCall(s, 'intro_character_creation', 'group_desc', 'cool', 'beautiful');
                    } else {
                      if (((s as any).temp_rand ?? 0) === 10) {
                        qspCall(s, 'intro_character_creation', 'group_desc', 'cool', 'anorexic');
                      } else {
                        if (((s as any).temp_rand ?? 0) === 11) {
                          qspCall(s, 'intro_character_creation', 'group_desc', 'cool', 'bimbo');
                        } else {
                          if (((s as any).temp_rand ?? 0) === 12) {
                            qspCall(s, 'intro_character_creation', 'group_desc', 'gopnik', 'gopnikstart');
                          } else {
                            if (((s as any).temp_rand ?? 0) === 13) {
                              qspCall(s, 'intro_character_creation', 'group_desc', 'gopnik', 'troublemaker');
                            } else {
                              if (((s as any).temp_rand ?? 0) === 14) {
                                if (((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
                                  qspCall(s, 'intro_character_creation', 'random_start');
                                  return;
                                }
                                qspCall(s, 'intro_character_creation', 'group_desc', 'gopnik', 'vitekgf');
                              } else {
                                if (((s as any).temp_rand ?? 0) === 15) {
                                  qspCall(s, 'intro_character_creation', 'group_desc', 'gopnik', 'alternative');
                                } else {
                                  if (((s as any).temp_rand ?? 0) === 16) {
                                    qspCall(s, 'intro_character_creation', 'group_desc', 'outcast', 'friendless');
                                  } else {
                                    if (((s as any).temp_rand ?? 0) === 17) {
                                      qspCall(s, 'intro_character_creation', 'group_desc', 'outcast', 'uglyduckling');
                                    } else {
                                      if (((s as any).temp_rand ?? 0) === 18) {
                                        qspCall(s, 'intro_character_creation', 'group_desc', 'outcast', 'goodgirl');
                                      } else {
                                        if (((s as any).temp_rand ?? 0) === 19) {
                                          qspCall(s, 'intro_character_creation', 'group_desc', 'outcast', 'slut');
                                        } else {
                                          if (((s as any).temp_rand ?? 0) === 20) {
                                            qspCall(s, 'intro_character_creation', 'group_desc', 'outcast', 'goth');
                                          } else {
                                            qspCall(s, 'intro_character_creation', 'group_desc', 'outcast', 'poor');
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

function enterSetupPersonality(s: GameState, scene: SceneBuilder): void {
  return;
  scene.actions([
    { label: '<b>Confirm this starting option</b>', handler: (st: GameState) => {
    ((s as any).start_type ?? {})['cat'] = ((s as any).temp_cat ?? 0);
    // TODO-QSP: gs 'intro_character_templates', 'set_template', $start_type['cat']
  }, goto: ['intro_character_creation', 'appearance_hub'] },
    { label: 'Select another start at random', goto: ['intro_character_creation', 'random_start'] },
    { label: 'Return to the <<$temp_group>> options', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_creation', 'charselect', $temp_group
  } },
    { label: 'Return to starting options', goto: ['intro_character_creation', 'charselect'] },
  ]);
  scene.build();
}

function enterModSetExitActs(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic "
  // TODO-QSP: "
  scene.actions([
    { label: 'Select another start at random', goto: ['intro_character_creation', 'random_start'] },
    { label: 'Return to the <<$ARGS[1]>> options', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_character_creation', 'charselect', '<<$ARGS[1]>>'
  } },
    { label: 'Return to starting options', goto: ['intro_character_creation', 'charselect'] },
  ]);
  scene.build();
}

function enterModContinueAfterCharselect(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['intro_character_creation', 'appearance_hub'] }]);
  scene.build();
}

function enterSgSettings(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'intro_initialization', 'sg_settings');
  return;
  scene.build();
}

function enterAppearanceHub(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Appearance Customization</b></center>');
  scene.text('<center><b>Allows you to alter hair and eyes, use to match fixed profile picture if in use.</b></center>');
  if (((s as any).start_type ?? 0)?.['magic'] === 'tg'  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg') {
    if (((s as any).face_style ?? 0)?.['type'] === 1) {
      scene.img(`${qspUntranslated(s, "FUNC('face_image')", { location: "intro_character_creation" })}`);
      scene.text('She looks exactly like the picture she sent you.');
    } else {
      scene.img('images/system/1_openings/shared/character_creation_2.jpg');
    }
  } else {
    if (((s as any).start_type ?? 0)?.['magic'] === 'tg') {
      scene.img('images/system/1_openings/shared/character_creation_2.jpg');
      scene.text('As you drift in unconsciousness, an impression of a woman forms in your mind. Many aspects of her appearance are indistinct, but there are some things you can make out.');
    } else {
      scene.img('images/system/1_openings/shared/character_creation_2.jpg');
      scene.text('As you look in the mirror, your face comes into focus. While some aspects of your appearance are already set, you can define the others now.');
    }
  }
  scene.text('<center>Customize your:</center>');
  scene.img('images/system/1_openings/shared/icon_hair.png');
  if (((s as any).start_type ?? 0)?.['magic'] === 'tg'  &&  ((s as any).start_type ?? 0)?.['loc'] !== 'sg') {
    scene.text('Everything else about her is fuzzy…');
  }
  if (((s as any).start_type ?? 0)?.['magic'] === 'tg'  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg') {
    scene.actions([
      { label: 'Meet her', handler: (st: GameState) => {
    if (((s as any).start_type ?? 0)?.['cat']   === '') {
      ((s as any).start_type ?? {})['cat'] = 'goodgirl';
    }
    if (((s as any).start_type ?? 0)?.['group'] === '') {
      ((s as any).start_type ?? {})['group'] = 'outcast';
    }
  }, goto: ['intro_overview', ''] },
    ]);
  } else {
    scene.actions([
      { label: 'Done', goto: ['intro_overview', ''] },
    ]);
  }
  scene.build();
}

function enterHair(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_hairbsh = 1;
  scene.text('<center><b>Appearance Customization</b></center>');
  scene.img(`${qspFunc(s, '$face_image', '')}`);
  if (((s as any).face_style ?? 0)?.['type'] === 1) {
    scene.text('<center>Adjust your hair to match your avatar.</center>');
    scene.text('<center>Please note that this choice is given only once and you will not be able to change it without starting a new game!</center>');
  }
  qspCall(s, 'body_desc', 'hair');
  if (((s as any).face_style ?? 0)?.['type'] === 1) {
    // TODO-QSP: dynamic text: <center><i><<$hair>></i> You may also <a href="exec: $face_style['avatar_hair'] ...
    scene.text(`<center><i>${((s as any).hair ?? 0)}</i> You may also <a href="exec: $face_style['avatar_hair'] = input('Enter a description of your hair:') & gs 'intro_character_creation', 'hair'">manually enter a description</a> if you would prefer.</center>`);
  }
  qspCall(s, 'intro_character_creation', 'set_hair_next_prev');
  // TODO-QSP: dynamic text: <center>Hair length: <<$pc_descWordy['hair length']>> — <a href="exec:pcs_hairln...
  scene.text(`<center>Hair length: ${((s as any).pc_descWordy ?? 0)?.['hair length']} — <a href="exec:pcs_hairlng = ${((s as any).hairlng_next ?? 0)} & gs 'intro_character_creation', 'hair'">Change length</a></center>`);
  if (((s as any).curly ?? 0) <= 0) {
    // TODO-QSP: dynamic text: <center>Hair: <a href="exec:defcurly = 1 & curly = 2147483647 & gs 'intro_charac...
    scene.text(`<center>Hair: <a href="exec:defcurly = 1 & curly = 2147483647 & gs 'intro_character_creation', 'hair'">straight</a>, <a href="exec: pcs_haircol = (pcs_haircol + 1) mod 4 & gs 'intro_character_creation', 'hair'">${((s as any).pcs_haircolor ?? 0)}</a></center>`);
  } else {
    // TODO-QSP: dynamic text: <center>Hair: <a href="exec:defcurly = 0 & curly = 0 & gs 'intro_character_creat...
    scene.text(`<center>Hair: <a href="exec:defcurly = 0 & curly = 0 & gs 'intro_character_creation', 'hair'">curly</a>, <a href="exec: pcs_haircol = (pcs_haircol + 1) mod 4 & gs 'intro_character_creation', 'hair'">${((s as any).pcs_haircolor ?? 0)}</a></center>`);
  }
  return;
  scene.actions([
    { label: '<b>Done</b>', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterEyes(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>CHARACTER CUSTOMIZATION</b></center>');
  qspCall(s, 'body_desc', 'eye_color');
  qspCall(s, 'body_desc', 'eyelashes');
  qspCall(s, 'body_desc', 'glasses');
  qspCall(s, 'body_desc', 'eye_size');
  if (((s as any).face_style ?? 0)?.['type'] === 1) {
    scene.img(`${qspFunc(s, '$face_image', '')}`);
  } else {
    scene.img(`images/pc/body/eyes/${((s as any).pcs_eyecolor ?? 0)}.jpg`);
  }
  if (((s as any).face_style ?? 0)?.['type'] === 1) {
    scene.text('<center>Adjust your eyes and eyelashes to match your avatar.</center>');
  }
  // TODO-QSP: dynamic text: <center><i><<$pc_descFull['eyes']>></i></center>
  scene.text(`<center><i>${((s as any).pc_descFull ?? 0)?.['eyes']}</i></center>`);
  // TODO-QSP: dynamic text: <center><a href="exec: pcs_eyecol = (pcs_eyecol + 1) mod 4 & gs 'intro_character...
  scene.text(`<center><a href="exec: pcs_eyecol = (pcs_eyecol + 1) mod 4 & gs 'intro_character_creation', 'eyes'">Change eye color (${((s as any).pcs_eyecolor ?? 0)})</a></center>`);
  if (((s as any).pcs_lashes ?? 0) < 2) {
    // TODO-QSP: dynamic text: <center><a href="exec:pcs_lashes += 1 & gs 'intro_character_creation', 'eyes'">L...
    scene.text('<center><a href="exec:pcs_lashes += 1 & gs \'intro_character_creation\', \'eyes\'">Lengthen lashes</a></center>');
  }
  if (((s as any).pcs_lashes ?? 0) > 0) {
    scene.text('<center><a href="exec:pcs_lashes -= 1 & gs \'intro_character_creation\', \'eyes\'">Shorten lashes</a></center>');
  }
  if (((s as any).pcs_eyesize ?? 0) < 3) {
    // TODO-QSP: dynamic text: <center><a href="exec:pcs_eyesize += 1 & gs 'intro_character_creation', 'eyes'">...
    scene.text('<center><a href="exec:pcs_eyesize += 1 & gs \'intro_character_creation\', \'eyes\'">Larger eyes</a></center>');
  }
  if (((s as any).pcs_eyesize ?? 0) > 0) {
    scene.text('<center><a href="exec:pcs_eyesize -= 1 & gs \'intro_character_creation\', \'eyes\'">Smaller eyes</a></center>');
  }
  if ((!((s as any).glass ?? 0))) {
    scene.text('<center><a href="exec:glass = 1 & gs \'intro_character_creation\', \'eyes\'">Wear glasses</a></center>');
  }
  if (((s as any).glass ?? 0) === 1) {
    scene.text('<center><a href="exec:glass = 0 & gs \'intro_character_creation\', \'eyes\'">Remove glasses</a></center>');
  }
  return;
  scene.actions([
    { label: '<b>Done</b>', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterLip(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>CHARACTER CUSTOMIZATION</b></center>');
  scene.img(`${qspFunc(s, '$face_image', '')}`);
  qspCall(s, 'body_desc', 'lips');
  scene.text('<center>Adjust the size of your lips to match your <a href="exec: view func(\'$face_image\')">image</a>:</center>');
  // TODO-QSP: dynamic text: <center><i><<$pc_descFull['lip']>></i></center>
  scene.text(`<center><i>${((s as any).pc_descFull ?? 0)?.['lip']}</i></center>`);
  if (((s as any).pcs_lip ?? 0) < 4) {
    // TODO-QSP: dynamic text: <center><a href="exec:pcs_lip += 1 & gs 'intro_character_creation', 'lip'">Bigge...
    scene.text('<center><a href="exec:pcs_lip += 1 & gs \'intro_character_creation\', \'lip\'">Bigger lips</a></center>');
  }
  if (((s as any).pcs_lip ?? 0) > 0) {
    scene.text('<center><a href="exec:pcs_lip -= 1 & gs \'intro_character_creation\', \'lip\'">Smaller lips</a></center>');
  }
  return;
  scene.actions([
    { label: '<b>Done</b>', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterSetHairNextPrev(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_norm_hair = ((s as any).pcs_hairlng ?? 0) * 165 / ((s as any).pcs_hgt ?? 0);
  if (((s as any).temp_norm_hair ?? 0) > 970) {
    (s as any).hairlng_next = 15;
    (s as any).hairlng_prev = 920 * ((s as any).pcs_hgt ?? 0) / 165;
  } else {
    if (((s as any).temp_norm_hair ?? 0) > 870) {
      (s as any).hairlng_next = Math.min(985 * ((s as any).pcs_hgt ?? 0) / 165, 1000);
      (s as any).hairlng_prev = 805 * ((s as any).pcs_hgt ?? 0) / 165;
    } else {
      if (((s as any).temp_norm_hair ?? 0) > 740) {
        (s as any).hairlng_next = 920 * ((s as any).pcs_hgt ?? 0) / 165;
        (s as any).hairlng_prev = 690 * ((s as any).pcs_hgt ?? 0) / 165;
      } else {
        if (((s as any).temp_norm_hair ?? 0) > 640) {
          (s as any).hairlng_next = 805 * ((s as any).pcs_hgt ?? 0) / 165;
          (s as any).hairlng_prev = 590 * ((s as any).pcs_hgt ?? 0) / 165;
        } else {
          if (((s as any).temp_norm_hair ?? 0) > 540) {
            (s as any).hairlng_next = 690 * ((s as any).pcs_hgt ?? 0) / 165;
            (s as any).hairlng_prev = 480 * ((s as any).pcs_hgt ?? 0) / 165;
          } else {
            if (((s as any).temp_norm_hair ?? 0) > 420) {
              (s as any).hairlng_next = 590 * ((s as any).pcs_hgt ?? 0) / 165;
              (s as any).hairlng_prev = 340 * ((s as any).pcs_hgt ?? 0) / 165;
            } else {
              if (((s as any).temp_norm_hair ?? 0) > 260) {
                (s as any).hairlng_next = 480 * ((s as any).pcs_hgt ?? 0) / 165;
                (s as any).hairlng_prev = 225 * ((s as any).pcs_hgt ?? 0) / 165;
              } else {
                if (((s as any).temp_norm_hair ?? 0) > 190) {
                  (s as any).hairlng_next = 340 * ((s as any).pcs_hgt ?? 0) / 165;
                  (s as any).hairlng_prev = 155 * ((s as any).pcs_hgt ?? 0) / 165;
                } else {
                  if (((s as any).temp_norm_hair ?? 0) > 120) {
                    (s as any).hairlng_next = 225 * ((s as any).pcs_hgt ?? 0) / 165;
                    (s as any).hairlng_prev = 100 * ((s as any).pcs_hgt ?? 0) / 165;
                  } else {
                    if (((s as any).temp_norm_hair ?? 0) > 80) {
                      (s as any).hairlng_next = 155 * ((s as any).pcs_hgt ?? 0) / 165;
                      (s as any).hairlng_prev = 55 * ((s as any).pcs_hgt ?? 0) / 165;
                    } else {
                      if (((s as any).pcs_hairlng ?? 0) > 30) {
                        (s as any).hairlng_next = 100 * ((s as any).pcs_hgt ?? 0) / 165;
                        (s as any).hairlng_prev = 15;
                      } else {
                        (s as any).hairlng_next = 55 * ((s as any).pcs_hgt ?? 0) / 165;
                        (s as any).hairlng_prev = Math.min(985 * ((s as any).pcs_hgt ?? 0) / 165, 1000);
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
  return;
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'core_birthday':
      enterCoreBirthday(s, scene);
      break;
    case 'quick_start':
      enterQuickStart(s, scene);
      break;
    case 'get_random':
      enterGetRandom(s, scene);
      break;
    case 'start':
      enterStart(s, scene);
      break;
    case 'start2':
      enterStart2(s, scene);
      break;
    case 'start3':
      enterStart3(s, scene);
      break;
    case 'charselect':
      enterCharselect(s, scene);
      break;
    case 'group_desc':
      enterGroupDesc(s, scene);
      break;
    case 'random_start':
      enterRandomStart(s, scene);
      break;
    case 'setup_personality':
      enterSetupPersonality(s, scene);
      break;
    case 'mod_set_exit_acts':
      enterModSetExitActs(s, scene);
      break;
    case 'mod_continue_after_charselect':
      enterModContinueAfterCharselect(s, scene);
      break;
    case 'sg_settings':
      enterSgSettings(s, scene);
      break;
    case 'appearance_hub':
      enterAppearanceHub(s, scene);
      break;
    case 'hair':
      enterHair(s, scene);
      break;
    case 'eyes':
      enterEyes(s, scene);
      break;
    case 'lip':
      enterLip(s, scene);
      break;
    case 'set_hair_next_prev':
      enterSetHairNextPrev(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const intro_character_creation: LocationDef = {
  name: 'intro_character_creation',
  title: 'Birthday Picker',
  region: 'other',
  enter: enter,
};
