import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).placerParameter ?? 0)?.['friend_index'] === 14) {
    (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (10);
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('You walk back home with Katja.');
    if (((s as any).katjaQW ?? 0)?.['sex_in_the_park_comment'] > 0) {
      if (((s as any).katjaQW ?? 0)?.['sex_in_the_park_comment'] === 1) {
        scene.text('She is silent the whole way, then suddenly mutters, "Damn, I just fucked a stranger."');
      } else {
        scene.text('She is silent the whole way, then suddenly mutters, "Damn, I just fucked two complete strangers."');
        if (((s as any).katjaQW ?? 0)?.['sex_in_the_park_comment'] === 3) {
          scene.text('She is silent the whole way, then suddenly mutters, "Holy shit, we just fucked a whole pack of Gopnik."');
        } else {
          scene.text('She is silent the whole way, then suddenly mutters, "Oh shit, we just fucked those strangers like a pair of complete sluts."');
          if (((s as any).katjaQW ?? 0)?.['sex_in_the_park_comment'] === 5) {
            scene.text('She is silent the whole way, then suddenly mutters, "Shit, we just had a threesome with a stranger."');
          }
          (s as any).katjaQW['sex_in_the_park_comment'] = 0;
        }
        scene.text('You say goodbye and Katja disappears into her house.');
        scene.actions([
          { label: 'Leave', handler: (st: GameState) => {
    (s as any).placerParameter['friend_index'] = 0;
  }, goto: ['pav_residential', ''] },
        ]);
      }
    }
  }
  scene.build();
}

export const placer_end: LocationDef = {
  name: 'placer_end',
  title: 'You walk back home with Katja.',
  region: 'other',
  description: ['You walk back home with Katja.'],
  enter: enter,
};
