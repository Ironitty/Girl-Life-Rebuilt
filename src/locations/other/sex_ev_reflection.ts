import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['thought_mood'] === '') {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 7);
  } else {
    if ((Math.floor(Math.random() * 2) + 1) === 1) {
      qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 7);
    } else {
      qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 'upset1', 'jpg');
    }
    if (((s as any).sex_ev ?? 0)?.['thought_mood'] === 'happy') {
      qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 'happy1', 'jpg');
    }
    if (((s as any).sex_ev ?? 0)?.['boy_asleep'] === 0) {
      // TODO-QSP: dynamic text: A quiet lapses between you and <<$npcdesc>>. In the silence, you find your thoug...
      scene.text(`A quiet lapses between you and ${((s as any).npcdesc ?? 0)}. In the silence, you find your thoughts wandering...`);
    } else {
      // TODO-QSP: dynamic text: With <<$npcdesc>> snoring to your side, you find yourself suddenly alone with yo...
      scene.text(`With ${((s as any).npcdesc ?? 0)} snoring to your side, you find yourself suddenly alone with your thoughts...`);
    }
    qspCall(s, 'sex_ev_reflection', 'top_menu');
  }
  scene.build();
}

export const sex_ev_reflection: LocationDef = {
  name: 'sex_ev_reflection',
  title: '<i>What did I do...?</i>',
  region: 'other',
  enter: enter,
};
