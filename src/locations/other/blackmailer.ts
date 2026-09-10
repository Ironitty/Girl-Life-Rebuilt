import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).blackmailQW ?? 0)?.['day'] !== 0) {
    // TODO-QSP: exit
  }
  if ((((s as any).locArgs?.[2] ?? 0) === 'inside'  ||  ((s as any).locArgs?.[2] ?? 0) === 'indoors')) {
    if (((((s as any).loc ?? 0)).indexOf(('church'))) + 1 <= 0) {
      // TODO-QSP: exit
    }
  } else {
    return;
  }
  if (((s as any).flash_image ?? 0) === '') {
    // TODO-QSP: exit
  }
  (s as any).temp_prob_chance = 300;
  (s as any).temp_prob_chance = ((s as any).temp_prob_chance ?? 0) + (qspUntranslated(s, "max(fame['pav_slut'], fame['city_slut'])", { location: "blackmailer" }));
  (s as any).temp_prob_chance = ((s as any).temp_prob_chance ?? 0) + (((s as any).max ?? 0)(((s as any).fame ?? 0)?.['pav_modelling'], ((s as any).fame ?? 0)?.['city_modelling']) / 10);
  (s as any).temp_prob_chance = ((s as any).temp_prob_chance ?? 0) + (((s as any).max ?? 0)(((s as any).fame ?? 0)?.['pav_porn'], ((s as any).fame ?? 0)?.['city_porn']) / 10);
  (s as any).temp_prob_chance = ((s as any).temp_prob_chance ?? 0) + (((s as any).trait_vars ?? 0)?.['exhibitionist_exp']);
  (s as any).temp_prob_chance = ((s as any).temp_prob_chance ?? 0) - (20 * ((s as any).min ?? 0)(((s as any).trait_vars ?? 0)?.['exhibitionist'] * ((s as any).trait_vars ?? 0)?.['exhibitionist'], 9));
  if (((s as any).temp_prob_chance ?? 0) > 600) {
    // TODO-QSP: killvar 'temp_prob_chance'
    // TODO-QSP: exit
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'tits') {
    (s as any).temp_prob_chance = ((s as any).temp_prob_chance ?? 0) - (50);
  } else {
    (s as any).temp_prob_chance = ((s as any).temp_prob_chance ?? 0) - (75);
    if (((s as any).locArgs?.[1] ?? 0) === 'pussy') {
      (s as any).temp_prob_chance = ((s as any).temp_prob_chance ?? 0) - (85);
    } else {
      (s as any).temp_prob_chance = ((s as any).temp_prob_chance ?? 0) - (120);
    }
    if ((Math.floor(Math.random() * (((s as any).temp_prob_chance ?? 0) - 0 + 1)) + (0)) >= 5) {
      // TODO-QSP: killvar 'temp_prob_chance'
      // TODO-QSP: exit
    }
    qspCall(s, 'blackmailer', 'init_blackmail', ((s as any).locArgs?.[1] ?? 0));
  }
  scene.build();
}

export const blackmailer: LocationDef = {
  name: 'blackmailer',
  title: 'WARNING: You have an unpaid debt.',
  region: 'other',
  enter: enter,
};
