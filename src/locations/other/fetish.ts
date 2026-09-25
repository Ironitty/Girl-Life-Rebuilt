import { qspUntranslated } from '../_shared/qspUntranslated';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterCikl(s: GameState, scene: SceneBuilder): void {
  ((s as any).tempFetish = (s as any).tempFetish ?? {})['i'] = 0;
  ((s as any).tempFetish = (s as any).tempFetish ?? {})['maxi'] = 0;
  do {
    ((s as any).tempFetish = (s as any).tempFetish ?? {})['name'] = qspUntranslated(s, "fetish_name[tempFetish['i']]", { location: "fetish" });
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).tempFetish ?? 0)?.['name'])]; enterAddBonuses(s, scene); (s as any).locArgs = __savedLocArgs; }
    ((s as any).fetishes = (s as any).fetishes ?? {})[(((s as any).tempFetish ?? 0)?.['name']) + '_pref'] = Math.max((-100), Math.min((((s as any).fetishes ?? 0)?.[(((s as any).tempFetish ?? 0)?.['name']) + '_pref'] ?? 0), 100));
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).tempFetish ?? 0)?.['name'])]; enterCheckForTraits(s, scene); (s as any).locArgs = __savedLocArgs; }
    ((s as any).tempFetish = (s as any).tempFetish ?? {})['i'] = ((s as any).tempFetish['i'] ?? 0) + (1);
    (s as any).tempFetish = undefined;
  } while (((s as any).tempFetish ?? 0)?.['i'] < ((s as any).tempFetish ?? 0)?.['maxi']);
  scene.build();
}

function enterAddBonuses(s: GameState, scene: SceneBuilder): void {
  if (((s as any).fetishes ?? 0)[String((s as any).locArgs?.[1] ?? '') + '_exp_bonus'] !== 0  ||  ((s as any).fetishes ?? 0)[String((s as any).locArgs?.[1] ?? '') + '_pref_bonus'] !== 0) {
    ((s as any).temp = (s as any).temp ?? {})['j'] = 0;
    while (true) {
      ((s as any).temp = (s as any).temp ?? {})['link'] = (((s as any).fetish_link ?? 0)?.[((s as any).locArgs?.[1] ?? 0) + '_' + (((s as any).temp ?? 0)?.['j']) + '' + '_name'] ?? 0);
      ((s as any).temp = (s as any).temp ?? {})['strength'] = (((s as any).fetish_link ?? 0)?.[((s as any).locArgs?.[1] ?? 0) + '_' + (((s as any).temp ?? 0)?.['j']) + '' + '_strength'] ?? 0);
      if (((s as any).temp ?? 0)?.['link'] !== '') {
        ((s as any).temp = (s as any).temp ?? {})['exp_bonus'] = ((s as any).fetishes ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_exp_bonus'] * (((s as any).temp ?? {})?.['strength'] ?? 0) / 100;
        ((s as any).temp = (s as any).temp ?? {})['pref_bonus'] = ((s as any).fetishes ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_pref_bonus'] * (((s as any).temp ?? {})?.['strength'] ?? 0) / 100;
        if (((s as any).temp ?? 0)?.['exp_bonus'] !== 0) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).temp ?? 0)?.['link']), (((s as any).temp ?? 0)?.['exp_bonus']), 'no_bonus']; enterAddExp(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
        if (((s as any).temp ?? 0)?.['pref_bonus'] !== 0) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (((s as any).temp ?? 0)?.['link']), (((s as any).temp ?? 0)?.['pref_bonus']), 'no_bonus']; enterAddPref(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
        ((s as any).temp = (s as any).temp ?? {})['j'] = ((s as any).temp['j'] ?? 0) + (1);
        break;
      }
    }
  }
  ((s as any).fetishes = (s as any).fetishes ?? {})[((s as any).locArgs?.[1] ?? 0) + '_exp_bonus'] = 0;
  ((s as any).fetishes = (s as any).fetishes ?? {})[((s as any).locArgs?.[1] ?? 0) + '_pref_bonus'] = 0;
  (s as any).temp = undefined;
  scene.build();
}

function enterCheckForTraits(s: GameState, scene: SceneBuilder): void {
  if (((s as any).fetish_trait ?? 0)[String((s as any).locArgs?.[1] ?? '')] !== '') {
    // TODO-QSP: dynamic $fetish_trait[$ARGS[1]]
  }
  return;
  scene.build();
}

function enterAddExp(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    return;
  }
  if ((Array.isArray((s as any).fetish_name) ? ((s as any).fetish_name as any[]).indexOf(String((s as any).locArgs?.[1] ?? '')) : -1) < 0) {
    scene.text(`Error in gs 'fetish', 'add_exp': ${((s as any).locArgs?.[1] ?? '')} is not in $fetish_name`);
    return;
  }
  if (String((s as any).locArgs?.[2] ?? '') === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = 1;
  }
  ((s as any).fetishes = (s as any).fetishes ?? {})[((s as any).locArgs?.[1] ?? 0) + '_exp'] = ((s as any).fetishes[((s as any).locArgs?.[1] ?? 0) + '_exp'] ?? 0) + (((s as any).locArgs?.[2] ?? 0));
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('no_bonus') : -1) < 0) {
    ((s as any).fetishes = (s as any).fetishes ?? {})[((s as any).locArgs?.[1] ?? 0) + '_exp_bonus'] = ((s as any).fetishes[((s as any).locArgs?.[1] ?? 0) + '_exp_bonus'] ?? 0) + (((s as any).locArgs?.[2] ?? 0));
  }
  scene.build();
}

function enterSetExp(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    return;
  }
  if ((Array.isArray((s as any).fetish_name) ? ((s as any).fetish_name as any[]).indexOf(String((s as any).locArgs?.[1] ?? '')) : -1) < 0) {
    scene.text(`Error in gs 'fetish', 'set_exp': ${((s as any).locArgs?.[1] ?? '')} is not in $fetish_name`);
    return;
  }
  ((s as any).fetishes = (s as any).fetishes ?? {})[((s as any).locArgs?.[1] ?? 0) + '_exp'] = ((s as any).locArgs?.[2] ?? 0);
  scene.build();
}

function enterGetExp(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    return;
  }
  if ((Array.isArray((s as any).fetish_name) ? ((s as any).fetish_name as any[]).indexOf(String((s as any).locArgs?.[1] ?? '')) : -1) < 0) {
    scene.text(`Error in gs 'fetish', 'get_exp': ${((s as any).locArgs?.[1] ?? '')} is not in $fetish_name`);
    return;
  }
  (s as any).result = (((s as any).fetishes ?? 0)?.[((s as any).locArgs?.[1] ?? 0) + '_exp'] ?? 0);
  scene.build();
}

function enterAddPref(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    return;
  }
  if ((Array.isArray((s as any).fetish_name) ? ((s as any).fetish_name as any[]).indexOf(String((s as any).locArgs?.[1] ?? '')) : -1) < 0) {
    scene.text(`Error in gs 'fetish', 'add_pref': ${((s as any).locArgs?.[1] ?? '')} is not in $fetish_name`);
    return;
  }
  if (String((s as any).locArgs?.[2] ?? '') === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[2] = 1;
  }
  ((s as any).fetishes = (s as any).fetishes ?? {})[((s as any).locArgs?.[1] ?? 0) + '_pref'] = ((s as any).fetishes[((s as any).locArgs?.[1] ?? 0) + '_pref'] ?? 0) + (((s as any).locArgs?.[2] ?? 0));
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('no_bonus') : -1) < 0) {
    ((s as any).fetishes = (s as any).fetishes ?? {})[((s as any).locArgs?.[1] ?? 0) + '_pref_bonus'] = ((s as any).fetishes[((s as any).locArgs?.[1] ?? 0) + '_pref_bonus'] ?? 0) + (((s as any).locArgs?.[2] ?? 0));
  }
  ((s as any).fetishes = (s as any).fetishes ?? {})[((s as any).locArgs?.[1] ?? 0) + '_pref'] = Math.max((-100), Math.min((((s as any).fetishes ?? 0)?.[((s as any).locArgs?.[1] ?? 0) + '_pref'] ?? 0), 100));
  scene.build();
}

function enterSetPref(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    return;
  }
  if ((Array.isArray((s as any).fetish_name) ? ((s as any).fetish_name as any[]).indexOf(String((s as any).locArgs?.[1] ?? '')) : -1) < 0) {
    scene.text(`Error in gs 'fetish', 'set_pref': ${((s as any).locArgs?.[1] ?? '')} is not in $fetish_name`);
    return;
  }
  ((s as any).fetishes = (s as any).fetishes ?? {})[((s as any).locArgs?.[1] ?? 0) + '_pref'] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).fetishes = (s as any).fetishes ?? {})[((s as any).locArgs?.[1] ?? 0) + '_pref'] = Math.max((-100), Math.min((((s as any).fetishes ?? 0)?.[((s as any).locArgs?.[1] ?? 0) + '_pref'] ?? 0), 100));
  scene.build();
}

function enterGetPref(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    return;
  }
  if ((Array.isArray((s as any).fetish_name) ? ((s as any).fetish_name as any[]).indexOf(String((s as any).locArgs?.[1] ?? '')) : -1) < 0) {
    scene.text(`Error in gs 'fetish', 'get_pref': ${((s as any).locArgs?.[1] ?? '')} is not in $fetish_name`);
    return;
  }
  ((s as any).fetishes = (s as any).fetishes ?? {})[((s as any).locArgs?.[1] ?? 0) + '_pref'] = Math.max((-100), Math.min((((s as any).fetishes ?? 0)?.[((s as any).locArgs?.[1] ?? 0) + '_pref'] ?? 0), 100));
  (s as any).result = (((s as any).fetishes ?? 0)?.[((s as any).locArgs?.[1] ?? 0) + '_pref'] ?? 0);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  ((s as any).fetish_name = (s as any).fetish_name ?? {})[0] = 'maso';
  ((s as any).fetish_name = (s as any).fetish_name ?? {})[1] = 'bound';
  ((s as any).fetish_name = (s as any).fetish_name ?? {})[2] = 'beast';
  ((s as any).fetish_name = (s as any).fetish_name ?? {})[3] = 'exhibitionism';
  ((s as any).fetish_name = (s as any).fetish_name ?? {})[4] = 'rough';
  ((s as any).fetish_name = (s as any).fetish_name ?? {})[5] = 'prostitution';
  ((s as any).fetish_name = (s as any).fetish_name ?? {})[6] = 'dom';
  ((s as any).fetish_name = (s as any).fetish_name ?? {})[7] = 'sub';
  ((s as any).fetish_name = (s as any).fetish_name ?? {})[8] = 'incest';
  ((s as any).fetish_name = (s as any).fetish_name ?? {})[9] = 'feet';
  ((s as any).fetish_name = (s as any).fetish_name ?? {})[10] = 'lesbian';
  ((s as any).fetish_name = (s as any).fetish_name ?? {})[11] = 'group';
  ((s as any).fetish_name = (s as any).fetish_name ?? {})[12] = 'gangbang';
  ((s as any).fetish_name = (s as any).fetish_name ?? {})[13] = 'humiliation';
  ((s as any).fetish_name = (s as any).fetish_name ?? {})[14] = 'deepthroat';
  ((s as any).fetish_name = (s as any).fetish_name ?? {})[15] = 'unknown';
  ((s as any).fetish_name = (s as any).fetish_name ?? {})[16] = 'gloryhole';
  ((s as any).fetish_name = (s as any).fetish_name ?? {})[17] = 'rape';
  ((s as any).fetish_name = (s as any).fetish_name ?? {})[18] = 'shemale';
  ((s as any).fetish_name = (s as any).fetish_name ?? {})[19] = 'masturbate';
  ((s as any).fetish_name = (s as any).fetish_name ?? {})[20] = 'creampie';
  ((s as any).fetish_name = (s as any).fetish_name ?? {})[21] = 'pregnant';
  ((s as any).fetish_name = (s as any).fetish_name ?? {})[22] = 'orgy';
  const arg = s.locArg;
  switch (arg) {
    case 'cikl':
      enterCikl(s, scene);
      break;
    case 'add_bonuses':
      enterAddBonuses(s, scene);
      break;
    case 'check_for_traits':
      enterCheckForTraits(s, scene);
      break;
    case 'add_exp':
      enterAddExp(s, scene);
      break;
    case 'set_exp':
      enterSetExp(s, scene);
      break;
    case 'get_exp':
      enterGetExp(s, scene);
      break;
    case 'add_pref':
      enterAddPref(s, scene);
      break;
    case 'set_pref':
      enterSetPref(s, scene);
      break;
    case 'get_pref':
      enterGetPref(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const fetish: LocationDef = {
  name: 'fetish',
  title: 'Error in gs \'fetish\', \'add_exp\':  is not in $fetish_name',
  region: 'other',
  enter: enter,
};
