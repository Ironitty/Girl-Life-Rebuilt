import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) < 8  ||  ((s as any).hour ?? 0) > 20) {
    scene.text('The shop is currently closed.');
    return;
    scene.actions([
      { label: 'Leave', goto: ['gadukino', ''] },
    ]);
  }
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'item_cart', 'shopping_aisle', 'gad_store');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Exit shopping cart', handler: (st: GameState) => {
    // TODO-QSP: $backimage = ''
  }, goto: ['gad_store', ''] },
    { label: 'Leave the store', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['gadukino', ''] },
  ]);
  scene.build();
}

export const gad_store: LocationDef = {
  name: 'gad_store',
  title: 'Village Shop',
  region: 'gadukino',
  locationType: 'public_indoors',
  description: ['The shop is currently closed.'],
  enter: enter,
};
