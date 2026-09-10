import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  scene.text('<b><center><font size="4">Manager Andrew M. Sobulyagin</font></center></b>');
  if (((s as any).job_status ?? 0)?.['city_pussycats_clerk'] === 'fired') {
    scene.img('images/locations/city/citycenter/mall/cats/manager_andrew.jpg');
    scene.text('You knock on Mr. Sobulyagin\'s office door, and when he sees you enter, his expression hardens. "What do you want," he questions you with a scowl.');
  }
  if (((s as any).hour ?? 0) >= 20  ||  (((s as any).week ?? 0) > 5  &&  ((s as any).hour ?? 0) >= 16)) {
    scene.actions([{ label: 'Continue', goto: ['shop_pussycats', 'start'] }]);
  }
  if (((s as any).job_status ?? 0)?.['city_pussycats_clerk'] === 'employed'  &&  ((s as any).job_booking_debt ?? 0)?.['city_pussycats_clerk'] >= 3) {
    qspCall(s, 'andrey', 'punish');
  } else {
    qspCall(s, 'andrey', 'beg');
    if (((s as any).job_status ?? 0)?.['city_pussycats_clerk'] === 'terminated') {
      qspCall(s, 'andrey', 'reapply');
    } else {
      qspCall(s, 'andrey', 'apply');
      if (((s as any).job_status ?? 0)?.['city_pussycats_clerk'] === 'employed') {
        qspCall(s, 'andrey', 'regular');
      }
    }
  }
  scene.build();
}

export const andrey: LocationDef = {
  name: 'andrey',
  title: 'Unfortunately, both shifts conflict with your existing schedule.',
  region: 'other',
  description: ['You knock on Mr. Sobulyagin\'s office door, and when he sees you enter, his expression hardens. "What do you want," he questions you with a scowl.'],
  enter: enter,
};
