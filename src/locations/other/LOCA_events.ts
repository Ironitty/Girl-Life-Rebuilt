import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).menu_off ?? 0) === 1) {
    // TODO-QSP: exit
  }
  if (((s as any).hypnoSchedule ?? 0) === 1  &&  (!((s as any).workDolg ?? 0))) {
    if (((s as any).therapist_weekly_block ?? 0) === 0  &&  ((s as any).week ?? 0) === 4  &&  ((s as any).therapistday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).remindedtherapyday ?? 0) !== ((s as any).daystart ?? 0)) {
      if ((((s as any).hour ?? 0) === 18  &&  ((s as any).minut ?? 0) >= 45)  ||  (((s as any).hour ?? 0) === 19  &&  ((s as any).minut ?? 0) < 15)) {
        scene.actions([{ label: 'Continue', goto: ['therapist_reminder', ''] }]);
      }
    }
  }
  if (((s as any).prevtotmin ?? 0) !== ((s as any).totminut ?? 0)) {
    qspCall(s, 'telefon', 'IncomingCheck', ((s as any).prevtotmin ?? 0), ((s as any).totminut ?? 0));
    qspCall(s, 'telefon', 'IncomingSMSCheck');
  }
  scene.build();
}

export const LOCA_events: LocationDef = {
  name: 'LOCA_events',
  region: 'other',
  enter: enter,
};
