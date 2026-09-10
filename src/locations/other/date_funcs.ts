import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'love') {
    qspCall(s, 'date_funcs', 'date_mood', 'improve');
    (s as any).date_ev['date_rating'] = ((s as any).date_ev['date_rating'] ?? 0) + (2);
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'love');
  } else {
    qspCall(s, 'date_funcs', 'date_mood', 'improve');
    (s as any).date_ev['date_rating'] = ((s as any).date_ev['date_rating'] ?? 0) + (1);
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
    if (((s as any).locArgs?.[1] ?? 0) === 'dislike') {
      qspCall(s, 'date_funcs', 'date_mood', 'worsen');
      (s as any).date_ev['date_rating'] = ((s as any).date_ev['date_rating'] ?? 0) - (1);
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'dislike');
    } else {
      qspCall(s, 'date_funcs', 'date_mood', 'worsen');
      (s as any).date_ev['date_rating'] = ((s as any).date_ev['date_rating'] ?? 0) - (3);
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'hate');
    }
  }
  scene.build();
}

export const date_funcs: LocationDef = {
  name: 'date_funcs',
  region: 'other',
  enter: enter,
};
