import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'lact_lib', 'set_useable_cupsize');
  if (((s as any).lactation ?? 0)?.['useable_cupsize'] > 0) {
    (s as any).lactation['breasttissueinitiated'] = 1;
    (s as any).lactation['last_useable_cupsize'] = ((s as any).lactation ?? 0)?.['useable_cupsize'];
    (s as any).lactation['breastcount'] = 2;
    if (((s as any).lactation ?? 0)?.['breastdensitytype'] < 3) {
      (s as any).lactation['breastdensitytype'] = Math.floor(Math.random() * 3) + 3;
      (s as any).lactation['lactlib_change'] = 1;
    }
    if (((s as any).lactation ?? 0)?.['maturebreast'] > 0) {
      (s as any).lactation['breastdensitytype'] = 5;
      (s as any).lactation['breastdensitypercent'] = 93;
    } else {
      (s as any).lactation['breastdensitypercent'] = 93;
      if (((s as any).lactation ?? 0)?.['breastdensitytype'] === 4) {
        (s as any).lactation['breastdensitypercent'] = 74;
      } else {
        (s as any).lactation['breastdensitypercent'] = 55;
      }
      (s as any).lactation['breastglandtissue'] = (qspFunc(s, 'lact_lib', 'bsizetoccm', ((s as any).lactation ?? 0)?.['useable_cupsize'])*((s as any).lactation ?? 0)?.['breastdensitypercent'])/100 + (((s as any).lactation ?? 0)?.['preggrowth']/100);
      (s as any).lactation['breastmm'] = (((s as any).lactation ?? 0)?.['breastglandtissue']*(100 + (((s as any).lactation ?? 0)?.['alveoliexpandlvl'] * 40)))*((s as any).lactation ?? 0)?.['breastcount'];
      (s as any).lactation['breastcount'] = 0;
      (s as any).lactation['breasttissueinitiated'] = 0;
      (s as any).lactation['breastdensitypercent'] = 0;
      (s as any).lactation['breastmm'] = 0;
      (s as any).lactation['active'] = 0;
      (s as any).lactation['lactlib_change'] = 0;
      (s as any).lactation['alveoliexpandlvl'] = 0;
      (s as any).lactation['alveoliexpandlvl_change'] = 0;
    }
    return;
  }
  scene.build();
}

export const lact_lib: LocationDef = {
  name: 'lact_lib',
  region: 'other',
  enter: enter,
};
