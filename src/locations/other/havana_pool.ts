import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'havana_pool', 'start');
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.img('images/locations/city/citycenter/gym/pool/bass.jpg');
  scene.text('You stand beside the large pool, the peaceful tranquility of the water feeling very inviting.');
  scene.text('A large sign states that you must wear swimwear and shower before entering the water.');
  if (((s as any).db ?? 0) >= 1  &&  ((s as any).Goraday ?? 0) !== ((s as any).daystart ?? 0)) {
    // TODO-QSP: act 'Search ZHoru': Goraday = daystart
    scene.actions([{ label: 'Continue', goto: ['city_jorahouse', 'ev42'] }]);
  }
  scene.actions([
    { label: 'Go for a swim', goto: ['havana_pool', 'swim'] },
    { label: 'Return to the dressing room', goto: ['havana', 'dressing_room'] },
  ]);
  scene.build();
}

function enterSwim(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_stam ?? 0) >= (20 * (10 - ((s as any).sport_clothes_exercise_bonus ?? 0))) / 2) {
    scene.actions([
      { label: 'Go for a swim (1:00)', handler: (st: GameState) => {
    (s as any).pcs_makeup = 1;
    (s as any).cumspclnt = 10;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'exercise', 'tier1', 60, 'stren', 'vital');
    (s as any).pcs_sweat = 10 + ((s as any).rand ?? 0)(0, 4);
    if (((s as any).pcs_inhib ?? 0) < 50) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
    }
    if (qspFunc(s, 'body_din', 'pregnancyVisibility') === 0) {
      scene.img('images/locations/city/citycenter/gym/pool/swim.jpg');
    } else {
      scene.img('images/locations/city/citycenter/gym/pool/swimpreg.jpg');
    }
    scene.text('You take a swim in the pool, which invigorates you and leaves you feeling refreshed.');
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the water.');
    }
    scene.actions([
      { label: 'Climb out of the pool', goto: ['havana_pool', 'start'] },
    ]);
  } },
    ]);
  } else {
    scene.text('You\'re too tired to swim. You should recover some of your stamina first.');
  }
  scene.actions([
    { label: 'Leave', goto: ['havana_pool', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'swim':
      enterSwim(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const havana_pool: LocationDef = {
  name: 'havana_pool',
  title: 'You stand beside the large pool, the peaceful tranquility of',
  region: 'other',
  locationType: 'public_indoors',
  description: ['You stand beside the large pool, the peaceful tranquility of the water feeling very inviting.'],
  enter: enter,
};
