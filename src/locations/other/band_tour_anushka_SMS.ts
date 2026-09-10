import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).anushkaQW['num_tour_SMS_send'] = ((s as any).anushkaQW['num_tour_SMS_send'] ?? 0) + (1);
  (s as any).anushkaQW['tour_SMS_send'] = ((s as any).daystart ?? 0);
  if (((s as any).anushkaQW ?? 0)?.['num_tour_SMS_send'] === 1) {
    qspCall(s, 'band_tour_anushka_SMS', 'Week1', 'Add SMS');
  } else {
    qspCall(s, 'band_tour_anushka_SMS', 'Week2', 'Add SMS');
    if (((s as any).anushkaQW ?? 0)?.['num_tour_SMS_send'] === 3) {
      qspCall(s, 'band_tour_anushka_SMS', 'Week3', 'Add SMS');
    } else {
      qspCall(s, 'band_tour_anushka_SMS', 'Week4', 'Add SMS');
      if (((s as any).anushkaQW ?? 0)?.['num_tour_SMS_send'] === 5) {
        qspCall(s, 'band_tour_anushka_SMS', 'Week5', 'Add SMS');
      } else {
        qspCall(s, 'band_tour_anushka_SMS', 'Week6', 'Add SMS');
        if (((s as any).anushkaQW ?? 0)?.['num_tour_SMS_send'] === 7) {
          qspCall(s, 'band_tour_anushka_SMS', 'Week7', 'Add SMS');
        } else {
          qspCall(s, 'band_tour_anushka_SMS', 'Week8', 'Add SMS');
          if (((s as any).anushkaQW ?? 0)?.['num_tour_SMS_send'] === 9) {
            qspCall(s, 'band_tour_anushka_SMS', 'Week9', 'Add SMS');
          } else {
            qspCall(s, 'band_tour_anushka_SMS', 'Week10', 'Add SMS');
            if (((s as any).anushkaQW ?? 0)?.['num_tour_SMS_send'] === 11) {
              qspCall(s, 'band_tour_anushka_SMS', 'Week11', 'Add SMS');
              (s as any).gopnikbandQW['on_tour'] = 0;
            }
            qspCall(s, 'telefon', 'ClearInSMSSchedule', 'A144');
          }
        }
      }
    }
  }
  scene.build();
}

export const band_tour_anushka_SMS: LocationDef = {
  name: 'band_tour_anushka_SMS',
  region: 'other',
  enter: enter,
};
