import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/arthur/artur.jpg');
  scene.text('Arthur stands up and helps you to your feet.');
  scene.actions([
    { label: 'Brush up', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    (st as any).artfucktimes = 0;
    (st as any).artfacefucktimes = 0;
    (st as any).pose = 0;
    (st as any).cumspclnt = 11;
    qspCall(st, 'cum_cleanup', '');
    if (((st as any).artbj ?? 0) > 0) {
      (st as any).artbj = 0;
      ((st as any).stat = (st as any).stat ?? {})['bj'] = ((st as any).stat['bj'] ?? 0) + (1);
    }
    if (((st as any).artsex ?? 0) > 0) {
      (st as any).artsex = 0;
      ((st as any).stat = (st as any).stat ?? {})['vaginal'] = ((st as any).stat['vaginal'] ?? 0) + (1);
    }
    if (((st as any).artanal ?? 0) > 0) {
      (st as any).artanal = 0;
      ((st as any).stat = (st as any).stat ?? {})['anal'] = ((st as any).stat['anal'] ?? 0) + (1);
    }
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/arthur/artur.jpg');
    scene.text('You quickly wipe your face, doing your best to clean up a bit as Arthur goes to retrieve your gift.');
    if ((!((st as any).bag ?? 0))) {
      qspCall(st, 'purses', 'add_item', 'gm', 13);
      qspCall(st, 'purses', 'wear', 'gm', 13);
      scene.text('Arthur gives you a quality handbag. You take it, feeling a mixture of joy and guilt welling up inside you. "Did I really just sleep with a stranger for a purse? Does this make me a whore, or a slut?" You think to yourself');
    } else {
      (st as any).temp_rand = (Math.floor(Math.random() * 3) + 0);
      if ((!((st as any).temp_rand ?? 0))) {
        ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['travel_makeup'] = ((st as any).mc_inventory['travel_makeup'] ?? 0) + (20);
        scene.text('Arthur hands you a portable set of cosmetics.');
      } else {
        if (((st as any).temp_rand ?? 0) === 1) {
          ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['cosmetics'] = ((st as any).mc_inventory['cosmetics'] ?? 0) + (20);
          scene.text('Arthur gives you a set of cosmetics.');
        } else {
          if (((st as any).temp_rand ?? 0) === 2) {
            qspCall(st, 'money', 'earn', 1000);
            // TODO-QSP: dynamic text: Arthur looks away guiltily and says "Uh, so I did not have time to look for a gi...
            scene.text(`Arthur looks away guiltily and says "Uh, so I did not have time to look for a gift for you. But here is some money, ${qspFunc(s, 'money', 'string_profit', 1000)}. Buy what do you like, sweet girl."`);
          }
        }
      }
    }
    scene.actions([
      { label: 'Leave', goto: ['pav_commercial', ''] },
    ]);
  } },
  ]);
  scene.build();
}

export const arturend: LocationDef = {
  name: 'arturend',
  title: 'Arthur stands up and helps you to your feet.',
  region: 'other',
  description: ['Arthur stands up and helps you to your feet.'],
  enter: enter,
};
