import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStat(s: GameState, scene: SceneBuilder): void {
  return;
  scene.build();
}

function enterGeneral(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_reaction_first_time ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '_tan'] === 1  &&  (!((s as any).pcs_tan ?? 0))) {
    (s as any).npc_reaction_first_time['' + String((s as any).$ARGS[1] || '') + '_tan'] = 0;
  }
  if (qspFunc(s, 'pcs_has_attr', 'cum_face')  &&  ((s as any).npc_reaction_hourly ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '_cum_on_face'] === 0) {
  } else {
    if (qspFunc(s, 'pcs_has_attr', 'body_pregnant')  &&  ((s as any).npc_reaction_pregnant ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0))] === 0) {
    } else {
      if (((s as any).npc_reaction_weekly ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '_fit'] === 0) {
        if (qspFunc(s, 'pcs_has_attr', 'body_fit')) {
          // TODO-QSP: $npc_reaction_choice[] = 'fit'
        }
      }
      if (((s as any).npc_reaction_weekly ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '_piercing'] === 0) {
        if (qspFunc(s, 'pcs_has_attr', 'cosmetics_piercing_visible')) {
          // TODO-QSP: $npc_reaction_choice[] = 'piercing'
        }
      }
      if (((s as any).npc_reaction_weekly ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '_strong'] === 0) {
        if (qspFunc(s, 'pcs_has_attr', 'stats_strength_strong')) {
          // TODO-QSP: $npc_reaction_choice[] = 'strong'
        }
      }
      if (((s as any).npc_reaction_first_time ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '_tan'] === 0) {
        if (qspFunc(s, 'pcs_has_attr', 'body_tan')) {
          // TODO-QSP: $npc_reaction_choice[] = 'tan'
        }
      }
      if (((s as any).npc_reaction_first_time ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '_tattoo'] === 0) {
        if (qspFunc(s, 'pcs_has_attr', 'cosmetics_tattoo_visible')) {
          // TODO-QSP: $npc_reaction_choice[] = 'tattoo'
        }
      }
      if (((s as any).npc_reaction_weekly ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '_bimbo'] === 0) {
        if (qspFunc(s, 'pcs_has_attr', 'clothes_style_bimbo')) {
          // TODO-QSP: $npc_reaction_choice[] = 'bimbo_look'
        }
      }
      if (((s as any).npc_reaction_weekly ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '_goth'] === 0) {
        if (qspFunc(s, 'pcs_has_attr', 'clothes_style_goth')) {
          // TODO-QSP: $npc_reaction_choice[] = 'goth_look'
        }
      }
      if (((s as any).npc_reaction_weekly ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '_punk'] === 0) {
        if (qspFunc(s, 'pcs_has_attr', 'clothes_style_punk')) {
          // TODO-QSP: $npc_reaction_choice[] = 'punk_look'
        }
      }
      if (((s as any).npc_reaction_daily ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '_short_skirt'] === 0) {
        if (qspFunc(s, 'pcs_has_attr', 'clothes_skirt_short')) {
          // TODO-QSP: $npc_reaction_choice[] = 'short_skirt'
        }
      }
      if (((s as any).npc_reaction_daily ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '_clothes_thinnes'] === 0) {
        if (qspFunc(s, 'pcs_has_attr', 'clothes_thin_high')) {
          // TODO-QSP: $npc_reaction_choice[] = 'clothes_thinnes'
        }
      }
      if (((s as any).npc_reaction_weekly ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '_makeup'] === 0) {
        if (qspFunc(s, 'pcs_has_attr', 'cosmetics_makeup_any')) {
          // TODO-QSP: $npc_reaction_choice[] = 'makeup'
        }
      }
      if (((s as any).npc_reaction_chosen ?? 0) === '') {
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'stat':
      enterStat(s, scene);
      break;
    case 'general':
      enterGeneral(s, scene);
      break;
    default:
      enterStat(s, scene);
      break;
  }
}

export const npc_reactions: LocationDef = {
  name: 'npc_reactions',
  region: 'other',
  enter: enter,
};
