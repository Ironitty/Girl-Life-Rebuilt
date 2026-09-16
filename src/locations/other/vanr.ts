import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'vanr', '');
  (s as any).location_type = 'bathroom';
  (s as any).bathtype = 'bathtub shower';
  (s as any).elektro = ((s as any).elektro ?? 0) + (1);
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  if (((s as any).fullmorrout ?? 0) === 1) {
    scene.actions([
      { label: 'Finish and go to the kitchen', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['kuhr', ''] },
    ]);
  } else {
    scene.actions([
      { label: 'Go to the corridor', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['korr', ''] },
    ]);
  }
  scene.text('<center><b>Bathroom</b></center>');
  if ((!((s as any).remvanr ?? 0))) {
    scene.img('images/locations/city/residential/apartment/vanr.jpg');
    scene.text('Your bathroom is old and in a bad state. The suite is unattractive and stained, but at least the <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027mirror\\u0027, \\u0027start\\u0027); return false;">mirror</a> is reasonably new.');
  } else {
    if (((s as any).remvanr ?? 0) === 1) {
      scene.img('images/locations/shared/bathroom/vanr2.jpg');
      scene.text('Your bathroom is new and in good condition. The suite is modern, your <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027mirror\\u0027, \\u0027start\\u0027); return false;">mirror</a> is perfect and everything looks clean and fresh.');
    }
  }
  // TODO-QSP: dynamic text: Your ' + iif(pcs_hairbsh < 1, '<a href="exec:gt 'mirror','brush'">brush</a>', 'b...
  scene.text('Your \' + iif(pcs_hairbsh < 1, \'<a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027mirror\\u0027, \\u0027brush\\u0027); return false;">brush</a>\', \'brush\') + \' sits on the small shelf, below the mirror.');
  qspCall(s, 'selfplay', 'suction_dildo');
  qspCall(s, 'din_van', 'private');
  qspCall(s, 'din_van', 'misery');
  qspCall(s, 'home_events', 'bathroom');
  // TODO-QSP: end
  scene.build();
}

export const vanr: LocationDef = {
  name: 'vanr',
  title: 'Bathroom',
  region: 'other',
  locationType: 'bathroom',
  enter: enter,
};
