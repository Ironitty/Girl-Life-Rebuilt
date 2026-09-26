// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterDefaults(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_pic = (s as any).npc_pic ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'xPICx';
  ((s as any).npc_perstype = (s as any).npc_perstype ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'XXXX';
  scene.build();
}

function enterBody(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'model') {
    ((s as any).npc_apprnc = (s as any).npc_apprnc ?? {})['A' + String(((s as any).npctemp ?? 0))] = 190;
    ((s as any).npc_height = (s as any).npc_height ?? {})['A' + String(((s as any).npctemp ?? 0))] = 165;
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 40;
    ((s as any).npc_haircol = (s as any).npc_haircol ?? {})['A' + String(((s as any).npctemp ?? 0))] = 2;
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'actor') {
      ((s as any).npc_height = (s as any).npc_height ?? {})['A' + String(((s as any).npctemp ?? 0))] = 188;
    }
  }
  scene.build();
}

function enterGroup(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'defaults':
      enterDefaults(s, scene);
      break;
    case 'body':
      enterBody(s, scene);
      break;
    case 'group':
      enterGroup(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const npcstaticdefaults: LocationDef = {
  name: 'npcstaticdefaults',
  region: 'other',
  enter: enter,
};
