import { qspUntranslated } from '../_shared/qspUntranslated';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).cleanHTML) (s as any).cleanHTML = {}; (s as any).cleanHTML['ReturnStr'] = qspUntranslated(s, "trim(ARGS[0])", { location: "cleanHTML" });
  if (!(s as any).cleanHTML) (s as any).cleanHTML = {}; (s as any).cleanHTML['tab'] = '  ';
  if (!(s as any).cleanHTML) (s as any).cleanHTML = {}; (s as any).cleanHTML['newline'] = '';
  // TODO-QSP: "
  if (!(s as any).cleanHTML) (s as any).cleanHTML = {}; (s as any).cleanHTML['ReturnStr'] = qspUntranslated(s, "replace(cleanHTML['ReturnStr'], cleanHTML['newline'],  '')", { location: "cleanHTML" });
  if (!(s as any).cleanHTML) (s as any).cleanHTML = {}; (s as any).cleanHTML['ReturnStr'] = qspUntranslated(s, "replace(cleanHTML['ReturnStr'], cleanHTML['tab'],    '')", { location: "cleanHTML" });
  if ((!((s as any).locArgs?.[1] ?? 0))) {
    if (!(s as any).cleanHTML) (s as any).cleanHTML = {}; (s as any).cleanHTML['ReturnStr'] = ((((s as any).cleanHTML ?? 0)?.['ReturnStr']).split('<tr></tr>').join(''));
    if (!(s as any).cleanHTML) (s as any).cleanHTML = {}; (s as any).cleanHTML['ReturnStr'] = ((((s as any).cleanHTML ?? 0)?.['ReturnStr']).split('<td></td>').join(''));
  }
  scene.build();
}

export const cleanHTML: LocationDef = {
  name: 'cleanHTML',
  region: 'other',
  enter: enter,
};
