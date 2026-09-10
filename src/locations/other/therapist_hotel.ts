import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterLeave(s: GameState, scene: SceneBuilder): void {
  if (((s as any).trait_vars ?? 0)?.['sensitivity_override'] === 1) {
    (s as any).trait_vars['sensitivity_override'] = 0;
  }
  // TODO-QSP: gt $ARGS[1]
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/therapist/room.jpg');
  scene.text('Upon entering the room you hear the shower running which gives you a moment to look around the large suite. To start off, it looks lived in. There is a small kitchen in the corner with a mini fridge and a small portable stove with a tea kettle on it letting off some steam, letting the owner of the room know the water is soon to be ready. There is a laptop, open, on the desk with lots of papers lying around it, as if someone is transcribing them into digital form. There is one book on the bed, open and face down, as if someone was reading it.');
  scene.text('Suddenly the water in the shower stopped!');
  qspCall(s, 'willpower', 'misc', 'resist', 'medium');
  if (((s as any).pcs_willpwr ?? 0) >= ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'RUN!!!', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'medium');
    qspCall(s, 'therapist_hotel', 'leave', 'pav_hotel');
  } },
    ]);
  }
  scene.actions([
    { label: 'Wait', goto: ['therapist_hotel', 'event_switch'] },
  ]);
  scene.build();
}

function enterEventSwitch(s: GameState, scene: SceneBuilder): void {
  if (((s as any).therapistQW ?? 0)?.['hotel_visits'] === 0) {
    scene.actions([{ label: 'Continue', goto: ['therapist_hotel', 'event1'] }]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['therapist_hotel', 'event2'] }]);
    if (((s as any).therapistQW ?? 0)?.['hotel_visits'] === 2) {
      scene.actions([{ label: 'Continue', goto: ['therapist_hotel', 'event3'] }]);
    } else {
      if (((s as any).therapistQW ?? 0)?.['hotel_submit'] < 4) {
        scene.actions([{ label: 'Continue', goto: ['therapist_hotel', 'event4'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['therapist_hotel', 'event5_submit'] }]);
        if (((s as any).therapistQW ?? 0)?.['hotel_submit'] === 10) {
          scene.actions([{ label: 'Continue', goto: ['therapist_hotel', 'event6_submit'] }]);
        } else {
          scene.actions([{ label: 'Continue', goto: ['therapist_hotel', 'event4'] }]);
        }
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'leave':
      enterLeave(s, scene);
      break;
    case 'start':
      enterStart(s, scene);
      break;
    case 'event_switch':
      enterEventSwitch(s, scene);
      break;
    default:
      enterLeave(s, scene);
      break;
  }
}

export const therapist_hotel: LocationDef = {
  name: 'therapist_hotel',
  title: '"Every Saturday, you will show up here and we will do some more training. You can still meet me at the clinic but here?"',
  region: 'other',
  locationType: 'private',
  enter: enter,
};
