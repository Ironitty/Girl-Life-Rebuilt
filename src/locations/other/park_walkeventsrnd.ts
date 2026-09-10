import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).suchunt ?? 0) === 1) {
    (s as any).minut = ((s as any).minut ?? 0) + (40 + ((s as any).rand ?? 0)(0, 20) - 5 * ((s as any).succublvl ?? 0));
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'park_walkevents', '');
  (s as any).parkrand = Math.floor(Math.random() * 20) + 1;
  if (((s as any).hour ?? 0) > 7  &&  ((s as any).hour ?? 0) < 21) {
    if (((s as any).parkrand ?? 0) < 10) {
      scene.actions([{ label: 'Continue', goto: ['park_walkevents', '<<parkrand>>'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['park_walkevents', 'find_baby'] }]);
      scene.actions([{ label: 'Continue', goto: ['park_walkevents', 'empty'] }]);
    }
  } else {
    if (((s as any).suchunt ?? 0) === 1) {
      (s as any).parkrand = ((s as any).parkrand ?? 0) - ((((s as any).succublvl ?? 0)-1));
    }
    if (((s as any).knowsfairy ?? 0) < 1  &&  ((s as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  ((s as any).fairyskip ?? 0) !== ((s as any).daystart ?? 0)) {
      if ((Math.floor(Math.random() * 4) + 1) <= ((s as any).pcs_magik ?? 0)) {
        (s as any).fairyrand = 19;
      } else {
        (s as any).fairyrand = 21;
      }
    } else {
      if ((((s as any).fairychat ?? 0) - ((s as any).fairyshoo ?? 0)) < 5  ||  ((((s as any).fairychat ?? 0) - ((s as any).fairyshoo ?? 0)) < 10  &&  ((s as any).fairylooking ?? 0) === 1)) {
        (s as any).fairyrand = 19 - (((s as any).fairychat ?? 0) - ((s as any).fairyshoo ?? 0));
      } else {
        (s as any).fairyrand = 10;
        (s as any).fairyrand = 15;
      }
    }
    if (((s as any).parkrand ?? 0) <= 5) {
      scene.actions([{ label: 'Continue', goto: ['park_walkevents', '1'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['MagEncounterFairy', ''] }]);
      scene.actions([{ label: 'Continue', goto: ['park_walkevents', 'empty'] }]);
    }
  }
  scene.build();
}

export const park_walkeventsrnd: LocationDef = {
  name: 'park_walkeventsrnd',
  region: 'other',
  enter: enter,
};
