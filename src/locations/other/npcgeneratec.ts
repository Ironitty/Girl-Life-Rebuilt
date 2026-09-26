import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterInit(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAssignIndex(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).npclastgenerated ?? 0)]; enterAssignDob(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'npcgeneratec', 'assign_stats', ((s as any).npclastgenerated ?? 0));
  qspCall(s, 'npcgeneratec', 'set_details', ((s as any).npclastgenerated ?? 0));
  qspCall(s, 'npcgeneratec', 'set_lifestyle', ((s as any).npclastgenerated ?? 0));
  qspCall(s, 'npcgeneratec', 'set_occupation', ((s as any).npclastgenerated ?? 0));
  qspCall(s, 'npcgeneratec', 'set_personality', ((s as any).npclastgenerated ?? 0));
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).npclastgenerated ?? 0)]; enterSetPreferences(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).npclastgenerated ?? 0)]; enterSetApprnc(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).npclastgenerated ?? 0)]; enterSetOtherVars(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCleanup(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterAssignIndex(s: GameState, scene: SceneBuilder): void {
  if ((String((((s as any).cemptyarray ?? 0)?.[0] ?? 0)).slice((1)-1, ((1)-1)+(1))) === 'C') {
    (s as any).npclastgenerated = (((s as any).cemptyarray ?? 0)?.[0] ?? 0);
    (s as any).cemptyarray = undefined;
  } else {
    do {
      (s as any).ngc_scheck = 0;
      (s as any).npclastgenerated = 'C' + '' + ((s as any).carraynumber ?? 0) + '';
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['npcID'] = 'C' + '' + ((s as any).carraynumber ?? 0)-1 + '';
      if (((s as any).npc_perstype ?? 0)[((s as any).npcgeneratecVars ?? 0)?.['npcID']] === ''  &&  ((s as any).carraynumber ?? 0) > 0) {
        (s as any).carraynumber = ((s as any).carraynumber ?? 0) - (1);
        (s as any).ngc_scheck = 1;
      } else {
        if (((s as any).npc_perstype ?? 0)?.[String((s as any).npclastgenerated ?? 0)] === '') {
          (s as any).ngc_scheck = 0;
        } else {
          (s as any).carraynumber = ((s as any).carraynumber ?? 0) + (1);
          (s as any).ngc_scheck = 1;
        }
      }
      (s as any).ngc_scheck = undefined;
    } while (((s as any).ngc_scheck ?? 0) === 1);
  }
  (s as any).carraynumber = ((s as any).carraynumber ?? 0) + (1);
  ((s as any).npc_index = (s as any).npc_index ?? {})[String((s as any).npclastgenerated ?? 0)] = ((s as any).npclastgenerated ?? 0);
  scene.build();
}

function enterAssignDob(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', ((s as any).year ?? 0) - (((s as any).npcgeneratecVars ?? {})?.['age'] ?? 0) - 1, ((s as any).month ?? 0), ((s as any).day ?? 0));
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['min_daystart'] = (((s as any).dateVars ?? {})?.['daystart'] ?? 0) + 1;
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['birth_daystart'] = (Math.floor(Math.random() * ((((s as any).npcgeneratecVars ?? {})?.['min_daystart'] ?? 0) + 364 - (((s as any).npcgeneratecVars ?? 0)?.['min_daystart']) + 1)) + ((((s as any).npcgeneratecVars ?? 0)?.['min_daystart'])));
  qspCall(s, 'time', 'to_date', (((s as any).npcgeneratecVars ?? 0)?.['birth_daystart']));
  ((s as any).npc_dob = (s as any).npc_dob ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((s as any).dateVars ?? {})?.['year'] ?? 0) * 10000;
  ((s as any).npc_dob = (s as any).npc_dob ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).npc_dob[((s as any).locArgs?.[1] ?? 0)] ?? 0) + ((((s as any).dateVars ?? {})?.['month'] ?? 0) * 100);
  ((s as any).npc_dob = (s as any).npc_dob ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).npc_dob[((s as any).locArgs?.[1] ?? 0)] ?? 0) + ((((s as any).dateVars ?? 0)?.['day']));
  ((s as any).npc_sex_spanker = (s as any).npc_sex_spanker ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((!(Math.floor(Math.random() * 3) + 0))) ? (1) : (0));
  ((s as any).npc_childfree = (s as any).npc_childfree ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((!(Math.floor(Math.random() * 5) + 0))) ? (1) : (0));
  ((s as any).npc_pussyeater = (s as any).npc_pussyeater ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((!(Math.floor(Math.random() * 3) + 0))) ? (1) : (0));
  ((s as any).npc_cuddler = (s as any).npc_cuddler ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((!(Math.floor(Math.random() * 3) + 0))) ? (1) : (0));
  ((s as any).npc_cum_cannon = (s as any).npc_cum_cannon ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((!(Math.floor(Math.random() * 5) + 0))) ? (1) : (0));
  ((s as any).npc_sex_filmer = (s as any).npc_sex_filmer ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((!(Math.floor(Math.random() * 5) + 0))) ? (1) : (0));
  ((s as any).npc_two_pump = (s as any).npc_two_pump ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((!(Math.floor(Math.random() * 6) + 0))) ? (1) : (0));
  if (((s as any).npc_door_pref ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'indoor') {
    if (((s as any).npc_apt_sparetype ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'gaming') {
      ((s as any).npc_hobbies = (s as any).npc_hobbies ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).npc_hobbies[((s as any).locArgs?.[1] ?? 0)] ?? 0) + (';video_games;');
    } else {
      if ((!(Math.floor(Math.random() * 5) + 0))) {
        ((s as any).npc_hobbies = (s as any).npc_hobbies ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).npc_hobbies[((s as any).locArgs?.[1] ?? 0)] ?? 0) + (';video_games;');
      }
    }
    if ((!(Math.floor(Math.random() * 5) + 0))) {
      ((s as any).npc_hobbies = (s as any).npc_hobbies ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).npc_hobbies[((s as any).locArgs?.[1] ?? 0)] ?? 0) + (';reading_books;');
    }
    if ((!(Math.floor(Math.random() * 5) + 0))) {
      ((s as any).npc_hobbies = (s as any).npc_hobbies ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).npc_hobbies[((s as any).locArgs?.[1] ?? 0)] ?? 0) + (';film_and_tv;');
    }
  } else {
    if (((s as any).npc_door_pref ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'outdoor') {
      if ((!(Math.floor(Math.random() * 5) + 0))) {
        ((s as any).npc_hobbies = (s as any).npc_hobbies ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).npc_hobbies[((s as any).locArgs?.[1] ?? 0)] ?? 0) + (';going_out;');
      }
    }
  }
  if (((s as any).npc_foodie ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 0) {
    ((s as any).npc_hobbies = (s as any).npc_hobbies ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).npc_hobbies[((s as any).locArgs?.[1] ?? 0)] ?? 0) + (';dining_out;');
  } else {
    if ((!(Math.floor(Math.random() * 5) + 0))) {
      ((s as any).npc_hobbies = (s as any).npc_hobbies ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).npc_hobbies[((s as any).locArgs?.[1] ?? 0)] ?? 0) + (';dining_out;');
    }
  }
  if ((!(Math.floor(Math.random() * 5) + 0))) {
    ((s as any).npc_hobbies = (s as any).npc_hobbies ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).npc_hobbies[((s as any).locArgs?.[1] ?? 0)] ?? 0) + (';cooking;');
  }
  if ((!(Math.floor(Math.random() * 5) + 0))) {
    ((s as any).npc_hobbies = (s as any).npc_hobbies ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).npc_hobbies[((s as any).locArgs?.[1] ?? 0)] ?? 0) + (';sports;');
  }
  if (((s as any).npc_gymrat ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 0) {
    ((s as any).npc_hobbies = (s as any).npc_hobbies ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).npc_hobbies[((s as any).locArgs?.[1] ?? 0)] ?? 0) + (';exercising;');
  } else {
    if ((!(Math.floor(Math.random() * 5) + 0))) {
      ((s as any).npc_hobbies = (s as any).npc_hobbies ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).npc_hobbies[((s as any).locArgs?.[1] ?? 0)] ?? 0) + (';exercising;');
    }
  }
  if ((((s as any).npc_door_pref ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'indoor'  &&  (Math.floor(Math.random() * 3) + 0) !== 0)  ||  (((s as any).npc_door_pref ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'outdoor'  &&  (Math.floor(Math.random() * 3) + 0) === 0)) {
    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * 5) + 0);
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 0) {
      ((s as any).npc_fav_date = (s as any).npc_fav_date ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'casual_meal';
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 1) {
        ((s as any).npc_fav_date = (s as any).npc_fav_date ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'coffee_date';
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 2) {
          ((s as any).npc_fav_date = (s as any).npc_fav_date ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'takeout_date';
        } else {
          if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 3) {
            ((s as any).npc_fav_date = (s as any).npc_fav_date ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'netflix_chill';
          } else {
            ((s as any).npc_fav_date = (s as any).npc_fav_date ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'movie_date';
          }
        }
      }
    }
  } else {
    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * 6) + 0);
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 0) {
      ((s as any).npc_fav_date = (s as any).npc_fav_date ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'casual_meal';
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 1) {
        ((s as any).npc_fav_date = (s as any).npc_fav_date ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'picnic_date';
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 2) {
          ((s as any).npc_fav_date = (s as any).npc_fav_date ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'beach_date';
        } else {
          if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 3) {
            ((s as any).npc_fav_date = (s as any).npc_fav_date ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'fancy_meal';
          } else {
            if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 4) {
              ((s as any).npc_fav_date = (s as any).npc_fav_date ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'amusement_park';
            } else {
              ((s as any).npc_fav_date = (s as any).npc_fav_date ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'shopping_date';
            }
          }
        }
      }
    }
  }
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * 50) + 0);
  if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 15) {
    ((s as any).npc_fav_genre = (s as any).npc_fav_genre ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'action';
  } else {
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 30) {
      ((s as any).npc_fav_genre = (s as any).npc_fav_genre ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'horror';
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 42) {
        if ((Math.floor(Math.random() * 10) + 1) < ((s as any).npc_sexdrive ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
          ((s as any).npc_fav_genre = (s as any).npc_fav_genre ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'raunchy_comedy';
        } else {
          ((s as any).npc_fav_genre = (s as any).npc_fav_genre ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'comedy';
        }
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 46) {
          ((s as any).npc_fav_genre = (s as any).npc_fav_genre ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'drama';
        } else {
          ((s as any).npc_fav_genre = (s as any).npc_fav_genre ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'romance';
        }
      }
    }
  }
  scene.build();
}

function enterSetPreferences(s: GameState, scene: SceneBuilder): void {
  (s as any).pref_ids = undefined;
  (s as any).prefdin = 'gs \'npc_set_preference\', \'' + ((s as any).locArgs?.[1] ?? 0) + '\', $ARGS[1],  iif($ARGS[2] <> \', $ARGS[2], $dyneval($ARGS[0], ARGS[2]-pref_ids[$ARGS[1]], ARGS[3], ARGS[4]))';
  (s as any).prefdin2 = '$result = iif(ARGS[0] >= -ARGS[1] and ARGS[0] <= ARGS[1], \'like\', iif(ARGS[0] >= -(1 + ARGS[1]+ARGS[2]) and ARGS[0] <= 1 + ARGS[1] + ARGS[2], \'neutral\', \'dislike\'))';
  (s as any).prefdin3 = '$result = iif(ARGS[0] >= -ARGS[1] and ARGS[0] <= ARGS[1], \'dislike\', iif(ARGS[0] >= -(1 + ARGS[1]+ARGS[2]) and ARGS[0] <= 1 + ARGS[1] + ARGS[2], \'neutral\', \'like\'))';
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['body_tits_small'] = 1;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['body_tits_average'] = 2;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['body_tits_big'] = 3;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['body_tits_huge'] = 4;
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin2 ?? 0);
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * 5) + 0);
  if ((Math.floor(Math.random() * 10) + 0) < 3) {
    if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] !== '') {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['pref_attr'] = qspFunc(s, 'pcs_get_attr', 'body_tits');
      if (((s as any).npcgeneratecVars ?? 0)?.['pref_attr'] !== '') {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (((s as any).pref_ids ?? 0)?.[(((s as any).npcgeneratecVars ?? 0)?.['pref_attr'])] ?? 0);
        if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] === 'dislike') {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin3 ?? 0);
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['rand'] > 0) {
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'body_tits_small', (((s as any).npcgeneratecVars ?? 0)?.['rand']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'body_tits_average', (((s as any).npcgeneratecVars ?? 0)?.['rand']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'body_tits_big', (((s as any).npcgeneratecVars ?? 0)?.['rand']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'body_tits_huge', (((s as any).npcgeneratecVars ?? 0)?.['rand']));
  }
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['hair_pubes_shaven'] = 1;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['hair_pubes_stubble'] = 2;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['hair_pubes_patch'] = 2;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['hair_pubes_trimmed'] = 2;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['hair_pubes_bush'] = 3;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['hair_pubes_untrimmed'] = 3;
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin2 ?? 0);
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * 4) + 0);
  if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] !== '') {
    if ((Math.floor(Math.random() * 10) + 0) < 3) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['pref_attr'] = qspFunc(s, 'pcs_get_attr', 'hair_pube_length');
      if (((s as any).npcgeneratecVars ?? 0)?.['pref_attr'] !== '') {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (((s as any).pref_ids ?? 0)?.[(((s as any).npcgeneratecVars ?? 0)?.['pref_attr'])] ?? 0);
        if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] === 'dislike') {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin3 ?? 0);
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['rand'] > 0) {
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'hair_pubes_shaven', (((s as any).npcgeneratecVars ?? 0)?.['rand']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'hair_pubes_stubble', (((s as any).npcgeneratecVars ?? 0)?.['rand']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'hair_pubes_patch', (((s as any).npcgeneratecVars ?? 0)?.['rand']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'hair_pubes_trimmed', (((s as any).npcgeneratecVars ?? 0)?.['rand']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'hair_pubes_bush', (((s as any).npcgeneratecVars ?? 0)?.['rand']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'hair_pubes_untrimmed', (((s as any).npcgeneratecVars ?? 0)?.['rand']));
  }
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['body_bmi_starving'] = 1;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['body_bmi_underweight'] = 1;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['body_bmi_normal'] = 2;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['body_bmi_overweight'] = 3;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['body_bmi_obese'] = 3;
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin2 ?? 0);
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * 4) + 0);
  if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] !== '') {
    if ((Math.floor(Math.random() * 10) + 0) < 3) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['pref_attr'] = qspFunc(s, 'pcs_get_attr', 'body_bmi');
      if (((s as any).npcgeneratecVars ?? 0)?.['pref_attr'] !== '') {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (((s as any).pref_ids ?? 0)?.[(((s as any).npcgeneratecVars ?? 0)?.['pref_attr'])] ?? 0);
        if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] === 'dislike') {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin3 ?? 0);
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['rand'] > 0) {
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'body_bmi_starving', (((s as any).npcgeneratecVars ?? 0)?.['rand']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'body_bmi_underweight', (((s as any).npcgeneratecVars ?? 0)?.['rand']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'body_bmi_normal', (((s as any).npcgeneratecVars ?? 0)?.['rand']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'body_bmi_overweight', (((s as any).npcgeneratecVars ?? 0)?.['rand']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'body_bmi_obese', (((s as any).npcgeneratecVars ?? 0)?.['rand']));
  }
  if ((Math.floor(Math.random() * 10) + 0) < 3) {
    if (((s as any).npc_pervert ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 1  &&  (!(Math.floor(Math.random() * (1 + (((s as any).npc_finance ?? 0)[String((s as any).locArgs?.[1] ?? '')] % 2 - 0 + 1)) + (0))))) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['CloTypePref'] = 4;
    } else {
      if (((s as any).npc_finance ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 0) {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['CloTypePref'] = 0;
      } else {
        if (((s as any).npc_finance ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 1) {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['CloTypePref'] = (Math.floor(Math.random() * 3) + 1);
        } else {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['CloTypePref'] = (Math.floor(Math.random() * 2) + 2);
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['CloTypePref'] === 1) {
    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['CloQualPref'] = 1;
  } else {
    if (((s as any).npcgeneratecVars ?? 0)?.['CloTypePref'] === 2) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['CloQualPref'] = (Math.floor(Math.random() * 2) + 1);
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['CloTypePref'] === 3) {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['CloQualPref'] = 2;
        qspCall(s, 'npc_set_preference', '$ARGS[1]', 'clothes_style_wealthy', 'like');
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['CloTypePref'] === 4) {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['CloQualPref'] = 1;
          qspCall(s, 'npc_set_preference', '$ARGS[1]', 'clothes_style_fetish', 'like');
        }
      }
    }
  }
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['clothes_quality_low'] = 1;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['clothes_quality_medium'] = 1;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['clothes_quality_high'] = 2;
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin2 ?? 0);
  if ((Math.floor(Math.random() * 3) + 0) === 0  &&  ((s as any).npcgeneratecVars ?? 0)?.['CloQualPref'] === 0) {
    if (((s as any).npc_finance ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 0) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['CloQualPref'] = 1;
    } else {
      if (((s as any).npc_finance ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 1) {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['CloQualPref'] = (Math.floor(Math.random() * 2) + 1);
      } else {
        if (((s as any).npc_finance ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 2) {
          if ((!(Math.floor(Math.random() * 3) + 0))) {
            ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['CloQualPref'] = 2;
          }
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] !== '') {
    if ((Math.floor(Math.random() * 10) + 0) < 3) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['pref_attr'] = qspFunc(s, 'pcs_get_attr', 'clothes_quality');
      if (((s as any).npcgeneratecVars ?? 0)?.['pref_attr'] !== '') {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['CloQualPref'] = (((s as any).pref_ids ?? 0)?.[(((s as any).npcgeneratecVars ?? 0)?.['pref_attr'])] ?? 0);
        if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] === 'dislike') {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin3 ?? 0);
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['CloQualPref'] > 0) {
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'clothes_quality_low', (((s as any).npcgeneratecVars ?? 0)?.['CloQualPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'clothes_quality_medium', (((s as any).npcgeneratecVars ?? 0)?.['CloQualPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'clothes_quality_high', (((s as any).npcgeneratecVars ?? 0)?.['CloQualPref']));
  }
  if (((s as any).npc_pervert ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 1  &&  (!(Math.floor(Math.random() * (1 + ((s as any).npc_gender ?? 0)[String((s as any).locArgs?.[1] ?? '')] - 0 + 1)) + (0)))) {
    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['slutconstant'] = 1;
  }
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['clothes_cleavage_none'] = 1;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['clothes_cleavage_small'] = 2;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['clothes_cleavage_medium'] = 3;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['clothes_cleavage_large'] = 4;
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin2 ?? 0);
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * (5 - 0 + 1)) + (0));
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 2  &&  ((s as any).npcgeneratecVars ?? 0)?.['CloTypePref'] !== 4) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['CloTopPref'] = 1 + (((s as any).npcgeneratecVars ?? {})?.['slutconstant'] ?? 0);
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 4  &&  ((s as any).npcgeneratecVars ?? 0)?.['CloTypePref'] !== 4) {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['CloTopPref'] = 2 + (((s as any).npcgeneratecVars ?? {})?.['slutconstant'] ?? 0);
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['CloTypePref'] !== 3) {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['CloTopPref'] = 3;
        }
      }
    }
    if (((s as any).npcgeneratecVars ?? 0)?.['CloTopPref'] !== 0  &&  ((s as any).npc_bust ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 2) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['CloTopPref'] = ((s as any).npcgeneratecVars['CloTopPref'] ?? 0) + (1);
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] !== '') {
    if ((Math.floor(Math.random() * 10) + 0) < 3) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['pref_attr'] = qspFunc(s, 'pcs_get_attr', 'clothes_cleavage');
      if (((s as any).npcgeneratecVars ?? 0)?.['pref_attr'] !== '') {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['CloTopPref'] = (((s as any).pref_ids ?? 0)?.[(((s as any).npcgeneratecVars ?? 0)?.['pref_attr'])] ?? 0);
        if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] === 'dislike') {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin3 ?? 0);
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['CloTopPref'] > 0) {
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'clothes_cleavage_none', (((s as any).npcgeneratecVars ?? 0)?.['CloTopPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'clothes_cleavage_small', (((s as any).npcgeneratecVars ?? 0)?.['CloTopPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'clothes_cleavage_medium', (((s as any).npcgeneratecVars ?? 0)?.['CloTopPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'clothes_cleavage_large', (((s as any).npcgeneratecVars ?? 0)?.['CloTopPref']));
  }
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['clothes_pants_long'] = 1;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['clothes_skirt_long'] = 1;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['clothes_pants_normal'] = 2;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['clothes_skirt_normal'] = 2;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['clothes_pants_short'] = 3;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['clothes_skirt_short'] = 3;
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin2 ?? 0);
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * (5 - 0 + 1)) + (0));
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 2  &&  ((s as any).npcgeneratecVars ?? 0)?.['CloTypePref'] !== 4) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['PanShorPref'] = 1;
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 4) {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['PanShorPref'] = 2;
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['CloTypePref'] !== 3) {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['PanShorPref'] = 3;
        }
      }
    }
    if (((s as any).npcgeneratecVars ?? 0)?.['slutconstant'] === 1  &&  (Math.floor(Math.random() * 2) + 0) === 0  &&  ((s as any).npcgeneratecVars ?? 0)?.['CloTypePref'] === 4) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['PanShorPref'] = 3;
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] !== '') {
    if ((Math.floor(Math.random() * 10) + 0) < 3) {
      if (((s as any).PCloSkirt ?? 0) > 0) {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['pref_attr'] = qspFunc(s, 'pcs_get_attr', 'clothes_skirt');
      } else {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['pref_attr'] = qspFunc(s, 'pcs_get_attr', 'clothes_pants');
      }
      if (((s as any).npcgeneratecVars ?? 0)?.['pref_attr'] !== '') {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['PanShorPref'] = (((s as any).pref_ids ?? 0)?.[(((s as any).npcgeneratecVars ?? 0)?.['pref_attr'])] ?? 0);
        if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] === 'dislike') {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin3 ?? 0);
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['PanShorPref'] > 0) {
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'clothes_pants_long', (((s as any).npcgeneratecVars ?? 0)?.['PanShorPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'clothes_skirt_long', (((s as any).npcgeneratecVars ?? 0)?.['PanShorPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'clothes_pants_normal', (((s as any).npcgeneratecVars ?? 0)?.['PanShorPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'clothes_skirt_normal', (((s as any).npcgeneratecVars ?? 0)?.['PanShorPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'clothes_pants_short', (((s as any).npcgeneratecVars ?? 0)?.['PanShorPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'clothes_skirt_short', (((s as any).npcgeneratecVars ?? 0)?.['PanShorPref']));
  }
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['clothes_thin_low'] = 1;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['clothes_thin_medium'] = 2;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['clothes_thin_high'] = 3;
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin2 ?? 0);
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * (5 - 0 + 1)) + (0));
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 2) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['CloThinPref'] = 1 + (((s as any).npcgeneratecVars ?? {})?.['slutconstant'] ?? 0);
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 4) {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['CloThinPref'] = 2 + (((s as any).npcgeneratecVars ?? {})?.['slutconstant'] ?? 0);
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['CloTypePref'] !== 3) {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['CloThinPref'] = 3;
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] !== '') {
    if ((Math.floor(Math.random() * 10) + 0) < 3) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['pref_attr'] = qspFunc(s, 'pcs_get_attr', 'clothes_thin');
      if (((s as any).npcgeneratecVars ?? 0)?.['pref_attr'] !== '') {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['CloThinPref'] = (((s as any).pref_ids ?? 0)?.[(((s as any).npcgeneratecVars ?? 0)?.['pref_attr'])] ?? 0);
        if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] === 'dislike') {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin3 ?? 0);
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['CloThinPref'] > 0) {
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'clothes_thin_low', (((s as any).npcgeneratecVars ?? 0)?.['CloThinPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'clothes_thin_medium', (((s as any).npcgeneratecVars ?? 0)?.['CloThinPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'clothes_thin_high', (((s as any).npcgeneratecVars ?? 0)?.['CloThinPref']));
  }
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['shoes_heels_flat'] = 1;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['shoes_heels_low'] = 1;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['shoes_heels_medium'] = 2;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['shoes_heels_high'] = 3;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['shoes_heels_ultra'] = 4;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['shoes_heels_fetish'] = 4;
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin2 ?? 0);
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * (5 - 0 + 1)) + (0));
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 2  &&  ((s as any).npcgeneratecVars ?? 0)?.['CloTypePref'] !== 4) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['ShoHeelPref'] = 1 + (((s as any).npcgeneratecVars ?? {})?.['slutconstant'] ?? 0);
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 4  &&  ((s as any).npcgeneratecVars ?? 0)?.['CloTypePref'] !== 4) {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['ShoHeelPref'] = 2 + (((s as any).npcgeneratecVars ?? {})?.['slutconstant'] ?? 0);
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 5  &&  ((s as any).npcgeneratecVars ?? 0)?.['CloTypePref'] !== 3) {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['ShoHeelPref'] = 3 + (((s as any).npcgeneratecVars ?? {})?.['slutconstant'] ?? 0);
        } else {
          if (((s as any).npcgeneratecVars ?? 0)?.['CloTypePref'] !== 3) {
            ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['ShoHeelPref'] = 4;
          }
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] !== '') {
    if ((Math.floor(Math.random() * 10) + 0) < 3) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['pref_attr'] = qspFunc(s, 'pcs_get_attr', 'shoes_heels');
      if (((s as any).npcgeneratecVars ?? 0)?.['pref_attr'] !== '') {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['ShoHeelPref'] = (((s as any).pref_ids ?? 0)?.[(((s as any).npcgeneratecVars ?? 0)?.['pref_attr'])] ?? 0);
        if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] === 'dislike') {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin3 ?? 0);
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['ShoHeelPref'] > 0) {
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'shoes_heels_flat', (((s as any).npcgeneratecVars ?? 0)?.['ShoHeelPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'shoes_heels_low', (((s as any).npcgeneratecVars ?? 0)?.['ShoHeelPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'shoes_heels_medium', (((s as any).npcgeneratecVars ?? 0)?.['ShoHeelPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'shoes_heels_high', (((s as any).npcgeneratecVars ?? 0)?.['ShoHeelPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'shoes_heels_ultra', (((s as any).npcgeneratecVars ?? 0)?.['ShoHeelPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'shoes_heels_fetish', (((s as any).npcgeneratecVars ?? 0)?.['ShoHeelPref']));
  }
  if ((Math.floor(Math.random() * (2 + 8 * ((s as any).npc_gender ?? 0)[String((s as any).locArgs?.[1] ?? '')] - 0 + 1)) + (0)) === 0  &&  ((s as any).npcgeneratecVars ?? 0)?.['CloTypePref'] !== 3) {
    qspCall(s, 'npc_set_preference', '$ARGS[1]', 'clothes_style_bimbo', 'like');
    ((s as any).npcgeneratec = (s as any).npcgeneratec ?? {})['bimbo_pref'] = 1;
  }
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['cosmetics_piercings_none'] = 1;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['cosmetics_piercings_few'] = 1;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['cosmetics_piercings_multiple'] = 2;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['cosmetics_piercings_lot'] = 3;
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin2 ?? 0);
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['pierPref'] = Math.min(3, (Math.floor(Math.random() * (3 - 1 + 1)) + (1)));
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] !== '') {
    if ((Math.floor(Math.random() * 10) + 0) < 3) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['pref_attr'] = qspFunc(s, 'pcs_get_attr', 'cosmetics_piercings');
      if (((s as any).npcgeneratecVars ?? 0)?.['pref_attr'] !== '') {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['pierPref'] = (((s as any).pref_ids ?? 0)?.[(((s as any).npcgeneratecVars ?? 0)?.['pref_attr'])] ?? 0);
        if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] === 'dislike') {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin3 ?? 0);
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['pierPref'] > 0) {
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'cosmetics_piercings_none', (((s as any).npcgeneratecVars ?? 0)?.['pierPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'cosmetics_piercings_few', (((s as any).npcgeneratecVars ?? 0)?.['pierPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'cosmetics_piercings_multiple', (((s as any).npcgeneratecVars ?? 0)?.['pierPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'cosmetics_piercings_lot', (((s as any).npcgeneratecVars ?? 0)?.['pierPref']));
  }
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['cosmetics_tattoos_none'] = 1;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['cosmetics_tattoos_few'] = 1;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['cosmetics_tattoos_multiple'] = 2;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['cosmetics_tattoos_lot'] = 3;
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin2 ?? 0);
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * 3) + 0);
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 0) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['tatPref'] = 1 + (((s as any).npcgeneratecVars ?? {})?.['slutconstant'] ?? 0);
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 1) {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['tatPref'] = 2 + (((s as any).npcgeneratecVars ?? {})?.['slutconstant'] ?? 0);
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 2) {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['tatPref'] = 3;
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] !== '') {
    if ((Math.floor(Math.random() * 10) + 0) < 3) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['pref_attr'] = qspFunc(s, 'pcs_get_attr', 'cosmetics_tattoos');
      if (((s as any).npcgeneratecVars ?? 0)?.['pref_attr'] !== '') {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['tatPref'] = (((s as any).pref_ids ?? 0)?.[(((s as any).npcgeneratecVars ?? 0)?.['pref_attr'])] ?? 0);
        if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] === 'dislike') {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin3 ?? 0);
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['tatPref'] > 0) {
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'cosmetics_tattoos_none', (((s as any).npcgeneratecVars ?? 0)?.['tatPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'cosmetics_tattoos_few', (((s as any).npcgeneratecVars ?? 0)?.['tatPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'cosmetics_tattoos_multiple', (((s as any).npcgeneratecVars ?? 0)?.['tatPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'cosmetics_tattoos_lot', (((s as any).npcgeneratecVars ?? 0)?.['tatPref']));
  }
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['body_lips_normal'] = 1;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['body_lips_plump'] = 1;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['body_lips_big'] = 2;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['body_lips_pillowy'] = 2;
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin2 ?? 0);
  if ((!(Math.floor(Math.random() * (2 + ((s as any).npc_gender ?? 0)[String((s as any).locArgs?.[1] ?? '')] - 0 + 1)) + (0)))) {
    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * 3) + 0);
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 0) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['lipPref'] = 1 + (((s as any).npcgeneratecVars ?? {})?.['slutconstant'] ?? 0);
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 2) {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['lipPref'] = 2;
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] !== '') {
    if ((Math.floor(Math.random() * 10) + 0) < 3) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['pref_attr'] = qspFunc(s, 'pcs_get_attr', 'body_lips');
      if (((s as any).npcgeneratecVars ?? 0)?.['pref_attr'] !== '') {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['lipPref'] = (((s as any).pref_ids ?? 0)?.[(((s as any).npcgeneratecVars ?? 0)?.['pref_attr'])] ?? 0);
        if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] === 'dislike') {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin3 ?? 0);
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['lipPref'] > 0) {
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'body_lips_normal', (((s as any).npcgeneratecVars ?? 0)?.['lipPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'body_lips_plump', (((s as any).npcgeneratecVars ?? 0)?.['lipPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'body_lips_big', (((s as any).npcgeneratecVars ?? 0)?.['lipPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'body_lips_pillowy', (((s as any).npcgeneratecVars ?? 0)?.['lipPref']));
  }
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['cosmetics_makeup_light'] = 1;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['cosmetics_makeup_moderate'] = 2;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['cosmetics_makeup_heavy'] = 3;
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin2 ?? 0);
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * (5 - 0 + 1)) + (0));
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 2) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['makeupPref'] = 1 + (((s as any).npcgeneratecVars ?? {})?.['slutconstant'] ?? 0);
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 4) {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['makeupPref'] = 2 + (((s as any).npcgeneratecVars ?? {})?.['slutconstant'] ?? 0);
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['rand'] >= 4  &&  ((s as any).npcgeneratecVars ?? 0)?.['CloTypePref'] !== 3) {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['makeupPref'] = 3;
        }
      }
    }
    if (((s as any).npcgeneratecVars ?? 0)?.['bimbo_pref'] === 1) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['makeupPref'] = 3;
    }
  }
  if ((Math.floor(Math.random() * 10) + 0) < 3  &&  ((s as any).npcgeneratecVars ?? 0)?.['bimbo_pref'] === 0) {
    if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] !== '') {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['pref_attr'] = qspFunc(s, 'pcs_get_attr', 'cosmetics_makeup');
      if (((s as any).npcgeneratecVars ?? 0)?.['pref_attr'] !== '') {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['makeupPref'] = (((s as any).pref_ids ?? 0)?.[(((s as any).npcgeneratecVars ?? 0)?.['pref_attr'])] ?? 0);
        if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] === 'dislike') {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin3 ?? 0);
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['makeupPref'] > 0) {
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'cosmetics_makeup_light', (((s as any).npcgeneratecVars ?? 0)?.['makeupPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'cosmetics_makeup_moderate', (((s as any).npcgeneratecVars ?? 0)?.['makeupPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'cosmetics_makeup_heavy', (((s as any).npcgeneratecVars ?? 0)?.['makeupPref']));
  }
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['hair_color_black'] = 1;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['hair_color_brown'] = 1;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['hair_color_red'] = 1;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['hair_color_blonde'] = 1;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['hair_color_dyed'] = 1;
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin2 ?? 0);
  qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'hair_color_black', (Math.floor(Math.random() * 4) + 0));
  qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'hair_color_brown', (Math.floor(Math.random() * 4) + 0));
  qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'hair_color_red', (Math.floor(Math.random() * 4) + 0));
  qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'hair_color_blonde', (Math.floor(Math.random() * 4) + 0));
  qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'hair_color_dyed', (Math.floor(Math.random() * 4) + 0));
  if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] !== '') {
    if ((Math.floor(Math.random() * 10) + 0) < 3) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['pref_attr'] = qspFunc(s, 'pcs_get_attr', 'hair_color');
      if (((s as any).npcgeneratecVars ?? 0)?.['pref_attr'] !== '') {
        qspCall(s, 'npc_set_preference', '$ARGS[1]', (((s as any).npcgeneratecVars ?? 0)?.['pref_attr']), (((s as any).npcgeneratecVars ?? 0)?.['attracted']));
      }
    }
  }
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['stats_intel_dumb'] = 1;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['stats_intel_normal'] = 2;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['stats_intel_smart'] = 3;
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin2 ?? 0);
  if ((!(Math.floor(Math.random() * 3) + 0))) {
    if (((s as any).npc_gender ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 0) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['IQPref'] = (Math.floor(Math.random() * 3) + 1);
    } else {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['IQPref'] = Math.min((Math.floor(Math.random() * 8) + 2), 3);
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] !== '') {
    if ((Math.floor(Math.random() * 10) + 0) < 3) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['pref_attr'] = qspFunc(s, 'pcs_get_attr', 'stats_intel');
      if (((s as any).npcgeneratecVars ?? 0)?.['pref_attr'] !== '') {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['IQPref'] = (((s as any).pref_ids ?? 0)?.[(((s as any).npcgeneratecVars ?? 0)?.['pref_attr'])] ?? 0);
        if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] === 'dislike') {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin3 ?? 0);
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['IQPref'] > 0) {
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'stats_intel_dumb', (((s as any).npcgeneratecVars ?? 0)?.['IQPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'stats_intel_normal', (((s as any).npcgeneratecVars ?? 0)?.['IQPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'stats_intel_smart', (((s as any).npcgeneratecVars ?? 0)?.['IQPref']));
  }
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['stats_strength_weak'] = 1;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['stats_strength_normal'] = 2;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['stats_strength_athletic'] = 3;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['stats_strength_strong'] = 4;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['stats_strength_manly'] = 4;
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin2 ?? 0);
  if ((!(Math.floor(Math.random() * 3) + 0))) {
    if (((s as any).npc_gender ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 0) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['MusclePref'] = (Math.floor(Math.random() * 3) + 1);
    } else {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['MusclePref'] = Math.max(2, (Math.floor(Math.random() * 4) + 1));
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] !== '') {
    if ((Math.floor(Math.random() * 10) + 0) < 3) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['pref_attr'] = qspFunc(s, 'pcs_get_attr', 'stats_strength');
      if (((s as any).npcgeneratecVars ?? 0)?.['pref_attr'] !== '') {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['MusclePref'] = (((s as any).pref_ids ?? 0)?.[(((s as any).npcgeneratecVars ?? 0)?.['pref_attr'])] ?? 0);
        if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] === 'dislike') {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin3 ?? 0);
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['MusclePref'] > 0) {
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'stats_strength_weak', (((s as any).npcgeneratecVars ?? 0)?.['MusclePref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'stats_strength_normal', (((s as any).npcgeneratecVars ?? 0)?.['MusclePref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'stats_strength_athletic', (((s as any).npcgeneratecVars ?? 0)?.['MusclePref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'stats_strength_strong', (((s as any).npcgeneratecVars ?? 0)?.['MusclePref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'stats_strength_manly', (((s as any).npcgeneratecVars ?? 0)?.['MusclePref']));
  }
  (s as any).pref_ids = undefined;
  (s as any).prefdin = undefined;
  (s as any).prefdin = undefined;
  scene.build();
}

function enterSetApprnc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_finance ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 0) {
    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['apprnc'] = (Math.floor(Math.random() * 81) + 60);
  } else {
    if (((s as any).npc_finance ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 1) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['apprnc'] = (Math.floor(Math.random() * 71) + 90);
    } else {
      if (((s as any).npc_finance ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 2) {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['apprnc'] = (Math.floor(Math.random() * 41) + 130);
      }
    }
  }
  if (((s as any).npc_gentle ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 0) {
    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['apprnc'] = ((s as any).npcgeneratecVars['apprnc'] ?? 0) - ((Math.floor(Math.random() * 21) + 10));
  } else {
    if (((s as any).npc_rough ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 1) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['apprnc'] = ((s as any).npcgeneratecVars['apprnc'] ?? 0) + ((Math.floor(Math.random() * 21) + 10));
    } else {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['apprnc'] = ((s as any).npcgeneratecVars['apprnc'] ?? 0) + ((Math.floor(Math.random() * (10 - (-10) + 1)) + ((-10))));
    }
  }
  ((s as any).npc_apprnc = (s as any).npc_apprnc ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((s as any).npcgeneratecVars ?? 0)?.['apprnc']);
  ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})[((s as any).locArgs?.[1] ?? 0)] = qspFunc(s, 'AppearanceSystem', 'ConvertToHotcat', (((s as any).npcgeneratecVars ?? 0)?.['apprnc']));
  if (((s as any).npc_height ?? 0)[String((s as any).locArgs?.[1] ?? '')] < ((s as any).npcgeneratecVars ?? 0)?.['av_height'] - 5) {
    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['body_type'] = 1;
    ((s as any).npc_height_desc = (s as any).npc_height_desc ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'short';
  } else {
    if (((s as any).npc_height ?? 0)[String((s as any).locArgs?.[1] ?? '')] <= ((s as any).npcgeneratecVars ?? 0)?.['av_height'] + 5) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['body_type'] = 2;
      ((s as any).npc_height_desc = (s as any).npc_height_desc ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'average';
    } else {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['body_type'] = 3;
      ((s as any).npc_height_desc = (s as any).npc_height_desc ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'tall';
    }
  }
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['bmi'] = 100000 * ((s as any).npc_weight ?? 0)[((s as any).locArgs?.[1] ?? 0)] / (((s as any).npc_height ?? 0)[((s as any).locArgs?.[1] ?? 0)] * ((s as any).npc_height ?? 0)[((s as any).locArgs?.[1] ?? 0)]);
  if (((s as any).npcgeneratecVars ?? 0)?.['gender'] === 0) {
    if (((s as any).npcgeneratecVars ?? 0)?.['bmi'] < 190) {
      ((s as any).npc_build_desc = (s as any).npc_build_desc ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'thin';
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['bmi'] < 225) {
        ((s as any).npc_build_desc = (s as any).npc_build_desc ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'athletic';
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['bmi'] < 250) {
          ((s as any).npc_build_desc = (s as any).npc_build_desc ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'chunky';
        } else {
          ((s as any).npc_build_desc = (s as any).npc_build_desc ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'fat';
        }
      }
    }
  } else {
    if (((s as any).npcgeneratecVars ?? 0)?.['bmi'] < 190) {
      if (((s as any).npcgeneratecVars ?? 0)?.['body_type'] === 1) {
        ((s as any).npc_build_desc = (s as any).npc_build_desc ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'petite';
      } else {
        ((s as any).npc_build_desc = (s as any).npc_build_desc ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'slender';
      }
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['bmi'] < 225) {
        ((s as any).npc_build_desc = (s as any).npc_build_desc ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'toned';
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['bmi'] < 250) {
          ((s as any).npc_build_desc = (s as any).npc_build_desc ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'average';
        } else {
          ((s as any).npc_build_desc = (s as any).npc_build_desc ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'chubby';
        }
      }
    }
  }
  if (((s as any).npc_gender ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 1) {
    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * 30) + 31);
    ((s as any).npc_icon = (s as any).npc_icon ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'images/system/phone/icons/icon_bf' + (((s as any).npcgeneratecVars ?? 0)?.['rand']) + '.png';
    ((s as any).npc_pic = (s as any).npc_pic ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'images/characters/shared/headshots_generic/' + (((s as any).npcgeneratecVars ?? 0)?.['rand']) + '.jpg';
  } else {
    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * 30) + 1);
    ((s as any).npc_icon = (s as any).npc_icon ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'images/system/phone/icons/icon_bf' + (((s as any).npcgeneratecVars ?? 0)?.['rand']) + '.png';
    ((s as any).npc_pic = (s as any).npc_pic ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'images/characters/shared/headshots_generic/' + (((s as any).npcgeneratecVars ?? 0)?.['rand']) + '.jpg';
  }
  scene.build();
}

function enterSetOtherVars(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_drunk = (s as any).npc_drunk ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).npc_horny = (s as any).npc_horny ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * (8 * ((s as any).pcs_hotcat ?? 0) - 2 * ((s as any).pcs_hotcat ?? 0) + 1)) + (2 * ((s as any).pcs_hotcat ?? 0)));
  if (((s as any).npcgeneratecVars ?? 0)?.['gender'] === 1  ||  ((s as any).npcgeneratecVars ?? 0)?.['gender'] === 2) {
    ((s as any).npc_horny = (s as any).npc_horny ?? {})[((s as any).locArgs?.[1] ?? 0)] = Math.max(0, ((s as any).npc_horny ?? 0)[((s as any).locArgs?.[1] ?? 0)] - 20);
  }
  ((s as any).npc_lover_days = (s as any).npc_lover_days ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).npc_daygenerated = (s as any).npc_daygenerated ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).daystart ?? 0);
  ((s as any).npc_eventday = (s as any).npc_eventday ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).npc_meetday = (s as any).npc_meetday ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).npc_meethour = (s as any).npc_meethour ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).npc_dates = (s as any).npc_dates ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).npc_compliance = (s as any).npc_compliance ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).npc_lover_keys = (s as any).npc_lover_keys ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).npc_QW = (s as any).npc_QW ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).npc_rel = (s as any).npc_rel ?? {})[((s as any).locArgs?.[1] ?? 0)] = 40;
  ((s as any).npc_love = (s as any).npc_love ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).npc_perv = (s as any).npc_perv ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).npc_herpes = (s as any).npc_herpes ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).npc_syth = (s as any).npc_syth ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).npc_gon = (s as any).npc_gon ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).npc_thrush = (s as any).npc_thrush ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  (s as any).ngp_pref = undefined;
  (s as any)[npc_pref_traits] ? (s as any)[npc_pref_traits] = { ...(s as any)[ngp_pref] } : (s as any)[npc_pref_traits] = { ...(s as any)[ngp_pref] };
  qspCall(s, 'npc_get_preference', '$ARGS[1]', 'randomPosIndNeg', 'no_clear');
  ((s as any).npc_origin_attract = (s as any).npc_origin_attract ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((s as any).ngpPrefResult ?? 0)?.['HasPos']);
  scene.build();
}

function enterCleanup(s: GameState, scene: SceneBuilder): void {
  (s as any).npcgeneratecVars = undefined;
  (s as any).npcgeneratecVars = undefined;
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[0] ?? '') === ''  ||  !isNaN(String((s as any).locArgs?.[0] ?? '')) && String((s as any).locArgs?.[0] ?? '') !== '') {
    if (String((s as any).locArgs?.[0] ?? '') !== '') {
      ((s as any).ARGS = (s as any).ARGS ?? {})[0] = parseFloat(((s as any).locArgs?.[0] ?? 0));
    }
    (s as any).npcgen_lastrun = 1;
    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['gender'] = ((s as any).locArgs?.[0] ?? 0);
    if (String((s as any).locArgs?.[2] ?? '') !== 0) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['age'] = ((s as any).locArgs?.[2] ?? 0);
    } else {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['age'] = (Math.floor(Math.random() * 18) + 18);
    }
    if (String((s as any).locArgs?.[1] ?? '') !== '') {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['name'] = ((s as any).locArgs?.[1] ?? 0);
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['gender'] === 0) {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['name'] = 'A Male';
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['gender'] === 1) {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['name'] = ((((s as any).npcgeneratecVars ?? 0)?.['age'] <= 25) ? ('A Girl') : ('A Woman'));
        } else {
          if (((s as any).npcgeneratecVars ?? 0)?.['gender'] === 2) {
            ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['name'] = ((((s as any).npcgeneratecVars ?? 0)?.['age'] <= 25) ? ('A Girl') : ('A Woman'));
          } else {
            ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['name'] = 'A Male';
          }
        }
      }
    }
    if (String((s as any).locArgs?.[3] ?? '') !== 0) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['loc'] = ((s as any).locArgs?.[3] ?? 0);
    } else {
      if (((s as any).region ?? 0) === 'pav') {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['loc'] = 1;
      } else {
        if (((s as any).region ?? 0) === 'city') {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['loc'] = (Math.floor(Math.random() * 2) + 3);
        }
      }
    }
    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['anonymous'] = ((s as any).locArgs?.[4] ?? 0);
    if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('attracted') : -1) > 0  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('like') : -1) > 0) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['attracted'] = 'like';
    } else {
      if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('unattracted') : -1) > 0  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('dislike') : -1) > 0) {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['attracted'] = 'dislike';
      } else {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['attracted'] = '';
      }
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  const arg = s.locArg;
  switch (arg) {
    case 'init':
      enterInit(s, scene);
      break;
    case 'assign_index':
      enterAssignIndex(s, scene);
      break;
    case 'assign_dob':
      enterAssignDob(s, scene);
      break;
    case 'set_preferences':
      enterSetPreferences(s, scene);
      break;
    case 'set_apprnc':
      enterSetApprnc(s, scene);
      break;
    case 'set_other_vars':
      enterSetOtherVars(s, scene);
      break;
    case 'cleanup':
      enterCleanup(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const npcgeneratec: LocationDef = {
  name: 'npcgeneratec',
  region: 'other',
  enter: enter,
};
