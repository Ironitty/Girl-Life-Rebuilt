import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'end');
  (s as any).stat['hookup'] = ((s as any).stat['hookup'] ?? 0) + (1);
  (s as any).npc_hookup[String((s as any).npcID ?? 0)] = ((s as any).npc_hookup[String((s as any).npcID ?? 0)] ?? 0) + (1);
  (s as any).npc_last_sex[String((s as any).npcID ?? 0)] = ((s as any).daystart ?? 0);
  if (((s as any).hookup ?? 0)?.['virgin'] === 1  &&  ((s as any).hookup ?? 0)?.['fuck'] > 0) {
    (s as any).npc_virgin_take[String((s as any).npcID ?? 0)] = 1;
  }
  qspCall(s, 'hookup_after', 'dress');
  if (((s as any).hookup ?? 0)?.['fuckbuddy'] > 0) {
    (s as any).know_virgin[String((s as any).npcID ?? 0)] = ((s as any).hookup ?? 0)?.['virgin'];
    qspCall(s, 'lover', 'add_fuckbuddy', ((s as any).npcID ?? 0));
    (s as any).npc_no_booty_call[String((s as any).npcID ?? 0)] = ((s as any).daystart ?? 0);
  }
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 'pav_residential') {
    qspCall(s, 'fame', 'pav', 'sex', Math.floor(Math.random() * 4) + 2);
    scene.actions([{ label: 'Continue', goto: ['pav_residential', ''] }]);
  } else {
    qspCall(s, 'fame', 'city', 'sex', Math.floor(Math.random() * 4) + 2);
    scene.actions([{ label: 'Continue', goto: ['uni_grounds', ''] }]);
    if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 'city_residential') {
      qspCall(s, 'fame', 'city', 'sex', Math.floor(Math.random() * 4) + 2);
      scene.actions([{ label: 'Continue', goto: ['city_residential', ''] }]);
    } else {
      qspCall(s, 'fame', 'city', 'sex', Math.floor(Math.random() * 4) + 2);
      scene.actions([{ label: 'Continue', goto: ['city_center', ''] }]);
      if (((s as any).region ?? 0) === 'pav') {
        scene.actions([{ label: 'Continue', goto: ['pav_residential', ''] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['city_residential', ''] }]);
        scene.actions([{ label: 'Continue', goto: ['pav_residential', ''] }]);
      }
    }
  }
  scene.build();
}

export const hookup_after: LocationDef = {
  name: 'hookup_after',
  title: '<<$npcdesc>>\'s Bedroom',
  region: 'other',
  enter: enter,
};
