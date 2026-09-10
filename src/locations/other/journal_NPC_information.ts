import { qspUntranslated } from '../_shared/qspUntranslated';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_npc_rel = qspUntranslated(s, "ARGS[1]", { location: "journal_NPC_information" });
  if (((s as any).locArgs?.[2] ?? 0) === 'm') {
    if (((s as any).temp_npc_rel ?? 0) >= 80) {
      scene.text('He really likes you and considers you one of his best friends.');
    } else {
      scene.text('He really likes you and considers you to be one of his friends.');
      if (((s as any).temp_npc_rel ?? 0) <= 20) {
        scene.text('He really dislikes you, maybe even hates you. Either way, he can\'t stand you.');
      } else {
        scene.text('You are acquaintances with him, but he doesn\'t seem to care much about you either way.');
      }
      if (((s as any).locArgs?.[2] ?? 0) === 'f') {
        if (((s as any).temp_npc_rel ?? 0) >= 80) {
          scene.text('She really likes you and considers you one of her best friends.');
        } else {
          scene.text('She really likes you and considers you to be one of her friends.');
          if (((s as any).temp_npc_rel ?? 0) <= 20) {
            scene.text('She really dislikes you, maybe even hates you. Either way, she can\'t stand you.');
          } else {
            scene.text('You are acquaintances with her, but she doesn\'t seem to care much about you either way.');
          }
          if (((s as any).temp_npc_rel ?? 0) >= 80) {
            scene.text('They really like you and considers you one of their best friends.');
          } else {
            scene.text('They really like you and considers you to be one of their friends.');
            if (((s as any).temp_npc_rel ?? 0) <= 20) {
              scene.text('They really dislikes you, maybe even hates you. Either way, they can\'t stand you.');
            } else {
              scene.text('You are acquaintances with them, but they don\'t seem to care much about you either way.');
            }
          }
        }
      }
    }
  }
  scene.build();
}

export const journal_NPC_information: LocationDef = {
  name: 'journal_NPC_information',
  title: 'He really likes you and considers you one of his best friend',
  region: 'other',
  description: ['He really likes you and considers you one of his best friends.'],
  enter: enter,
};
