import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).lesbiday = ((s as any).day ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  if (((s as any).mistsexshop ?? 0) === 1  &&  ((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) < 17  &&  ((s as any).slavejobday ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.img('images/characters/city/natalya/doorlock.jpg');
    scene.text('You ring the bell, but no one answers. You then remember that your slave is probably working in the sex shop\'s basement right now.');
    scene.actions([
      { label: 'Leave', goto: ['city_residential', ''] },
    ]);
  } else {
    scene.img('images/characters/city/natalya/doorlock.jpg');
    scene.text('You ring the bell, but no one answers. It seems like nobody\'s home, so where could your slave be?');
    if (((s as any).mistsexshop ?? 0) === 2  &&  ((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) <= 23) {
      scene.img('images/characters/city/natalya/doorlock.jpg');
      scene.text('You ring the bell, but no one answers. You then remember that your slave is probably whoring herself out near the highway right now.');
      scene.actions([
        { label: 'Leave', goto: ['city_residential', ''] },
      ]);
    } else {
      if (((s as any).mistendbound ?? 0) > 50  &&  (!(Math.floor(Math.random() * 4) + 0))) {
        scene.img('images/characters/city/natalya/sex/dom26.jpg');
        scene.text('You ring the bell. Nobody answers, but you can definitely hear somebody inside. You try the handle and to your surprise, the door isn\'t locked. You\'ve barely crossed the threshold when you see your slave sitting on a chair. She seems to have bound herself in anticipation of your arrival. You help her off the chair and bend her over…');
        scene.actions([
          { label: 'Continue', goto: ['lesbisubhouse', 'bound'] },
        ]);
      } else {
        scene.img('images/characters/city/natalya/sex/dom25.jpg');
        scene.text('You ring the bell and the door swings open a few seconds later. You\'re greeted by your slave kneeling in front of you, a whip in her mouth and her eyes as big as a puppy\'s: She\'s practically begging you to punish her.');
        if (((s as any).hour ?? 0) >= 8) {
          scene.img('images/characters/city/natalya/dooropen.jpg');
          scene.text('You ring the bell and within seconds, the door opens.');
        } else {
          scene.img('images/characters/city/natalya/dooropen1.jpg');
          scene.text('You ring the bell. Once. Twice. Thrice. After a minute or so, your slave opens the door, mumbling curses under her breath and rubbing the sleep out of her eyes. Once she sees that it\'s you, she immediately falls silent and steps aside to let you in.');
        }
        scene.actions([
          { label: 'Enter the apartment', goto: ['lesbisubhouse', 'events'] },
          { label: 'Enter the apartment', goto: ['lesbisubhouse', 'events'] },
        ]);
      }
    }
    scene.actions([
      { label: 'Leave', goto: ['city_residential', ''] },
    ]);
  }
  scene.build();
}

export const lesbisubhouse: LocationDef = {
  name: 'lesbisubhouse',
  title: 'You ring the bell, but no one answers. You then remember tha',
  region: 'other',
  locationType: 'public_indoors',
  description: ['You ring the bell, but no one answers. You then remember that your slave is probably working in the sex shop\'s basement right now.'],
  enter: enter,
};
