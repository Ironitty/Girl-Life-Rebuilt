import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'vanr2x', '');
  (s as any).location_type = 'bathroom';
  (s as any).bathtype = 'bathtub shower';
  (s as any).elektro = ((s as any).elektro ?? 0) + (1);
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Bathroom</b></center>');
  scene.img('images/locations/pushkin/apartment/vanr2x.jpg');
  // TODO-QSP: dynamic text: A <a href="exec:gt 'mirror','start'">mirror</a> hangs above the sink where you c...
  scene.text('A <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027mirror\\u0027, \\u0027start\\u0027); return false;">mirror</a> hangs above the sink where you can \' + iif(pcs_hairbsh = 0, \'<a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027mirror\\u0027, \\u0027brush\\u0027); return false;">brush</a>\', \'brush\') + \' your hair.');
  qspCall(s, 'selfplay', 'suction_dildo');
  qspCall(s, 'din_van', 'private');
  qspCall(s, 'din_van', 'misery');
  qspCall(s, 'home_events', 'bathroom');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave bathroom', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['korr2x', ''] },
  ]);
  scene.build();
}

export const vanr2x: LocationDef = {
  name: 'vanr2x',
  title: 'Bathroom',
  region: 'other',
  locationType: 'bathroom',
  enter: enter,
};
