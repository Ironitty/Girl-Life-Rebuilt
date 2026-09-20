// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).VasanTut = 1;
  (s as any).brand = (Math.floor(Math.random() * 100) + 1);
  if (((s as any).brand ?? 0) >= 40) {
    (s as any).BerezaTut = 1;
  } else {
    (s as any).BerezaTut = 0;
  }
  (s as any).vrand = (Math.floor(Math.random() * 100) + 1);
  if (((s as any).vrand ?? 0) >= 50) {
    (s as any).VitekTut = 1;
  } else {
    (s as any).VitekTut = 0;
  }
  (s as any).krand = (Math.floor(Math.random() * 100) + 1);
  if (((s as any).krand ?? 0) >= 60) {
    (s as any).KostilTut = 1;
  } else {
    (s as any).KostilTut = 0;
  }
  (s as any).urand = (Math.floor(Math.random() * 100) + 1);
  if (((s as any).urand ?? 0) >= 70) {
    (s as any).UdmurtTut = 1;
  } else {
    (s as any).UdmurtTut = 0;
  }
  (s as any).srand = (Math.floor(Math.random() * 100) + 1);
  if (((s as any).srand ?? 0) >= 80) {
    (s as any).SeriTut = 1;
  } else {
    (s as any).SeriTut = 0;
  }
  scene.build();
}

export const gopwho: LocationDef = {
  name: 'gopwho',
  region: 'other',
  enter: enter,
};
