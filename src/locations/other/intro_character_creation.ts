import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterCoreBirthday(s: GameState, scene: SceneBuilder): void {
  if (((s as any).birthday ?? 0) === 0) {
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
      scene.img(`${qspUntranslated(s, "FUNC(''face_image'')", { location: "intro_character_creation" })}`);
    }
    scene.text('<center>Choose your date of birth:</center>');
    if (((s as any).birthmonth ?? 0) === 2) {
      if ((((s as any).birthyear ?? 0) % 4 === 0  &&  ((s as any).birthyear ?? 0) % 100 !== 0)  ||  (((s as any).birthyear ?? 0) % 400 === 0)) {
        (s as any).monthdays = 29;
      } else {
        (s as any).monthdays = 28;
      }
    } else {
      (s as any).monthdays = 30;
      (s as any).monthdays = 31;
    }
    (s as any).birthmonth = qspFunc(s, 'math', 'int_clamp', ((s as any).birthmonth ?? 0), 1, 12);
    (s as any).birthday = qspFunc(s, 'math', 'int_clamp', ((s as any).birthday ?? 0), 1, ((s as any).monthdays ?? 0));
    // TODO-QSP: dynamic text: <center><<iif($start_type['magic'] = 'tg', 'Her', 'Your')>> birthday: <b><<$mont...
    scene.text(`<center>${(((s as any).start_type ?? 0)?.['magic'] === 'tg') ? ('Her') : ('Your')} birthday: <b>${((s as any).monthName ?? 0)?.[String((s as any).birthmonth ?? 0)]} ${((s as any).birthday ?? 0)}${qspFunc(s, 'shortgs', 'get_number_suffix', ((s as any).birthday ?? 0))}, ${((s as any).birthyear ?? 0)}</b></center>`);
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
  (s as any).tsg = (((s as any).start_type ?? 0)?.['loc'] === 'sg') ? (1) : (0);
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
  if (((s as any).birthday ?? 0) === 0) {
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
      if (((s as any).temp_rand ?? 0) === 0) {
        (s as any).result = 153;
      } else {
        (s as any).result = 183;
        if (((s as any).temp_rand ?? 0) === 2) {
          (s as any).result = 214;
        } else {
          (s as any).result = 239;
        }
        if (((s as any).start_type ?? 0)?.['loc'] === 'uni') {
          (s as any).result = 603;
        } else {
          (s as any).result = 521;
        }
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
        return;
      }
    }
  }
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
    default:
      enterCoreBirthday(s, scene);
      break;
  }
}

export const intro_character_creation: LocationDef = {
  name: 'intro_character_creation',
  title: 'Birthday Picker',
  region: 'other',
  enter: enter,
};
