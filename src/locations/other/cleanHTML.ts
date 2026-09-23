// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  ((s as any).cleanHTML = (s as any).cleanHTML ?? {})['ReturnStr'] = (String(((s as any).locArgs?.[0] ?? 0)).trim());
  ((s as any).cleanHTML = (s as any).cleanHTML ?? {})['tab'] = '  ';
  ((s as any).cleanHTML = (s as any).cleanHTML ?? {})['newline'] = '';
  // TODO-QSP: "
  ((s as any).cleanHTML = (s as any).cleanHTML ?? {})['ReturnStr'] = (String(((s as any).cleanHTML ?? 0)?.['ReturnStr']).split(((s as any).cleanHTML ?? 0)?.['newline']).join(''));
  ((s as any).cleanHTML = (s as any).cleanHTML ?? {})['ReturnStr'] = (String(((s as any).cleanHTML ?? 0)?.['ReturnStr']).split(((s as any).cleanHTML ?? 0)?.['tab']).join(''));
  if (String((s as any).locArgs?.[1] ?? '') === 0) {
    ((s as any).cleanHTML = (s as any).cleanHTML ?? {})['ReturnStr'] = (String(((s as any).cleanHTML ?? 0)?.['ReturnStr']).split('<tr></tr>').join(''));
    ((s as any).cleanHTML = (s as any).cleanHTML ?? {})['ReturnStr'] = (String(((s as any).cleanHTML ?? 0)?.['ReturnStr']).split('<td></td>').join(''));
  }
  (s as any).result = ((s as any).cleanHTML ?? 0)?.['ReturnStr'];
  scene.build();
}

export const cleanHTML: LocationDef = {
  name: 'cleanHTML',
  region: 'other',
  enter: enter,
};
