import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterClo(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_market', 'clo');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'clothing', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'market_outfits');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  scene.text('<center><b>Clothes.</b></center>');
  scene.text('You inspect the cheap clothing the stall has to offer.');
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['city_market', 'start'] },
  ]);
  scene.build();
}

function enterWares(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'themes', 'outdoors');
  qspCall(s, 'item_cart', 'shopping_aisle', 'market');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Stop looking at the wares', goto: ['city_market', 'start'] },
  ]);
  scene.build();
}

function enterTailor(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_market', 'tailor');
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/market/tailor.jpg');
  // TODO-QSP: dynamic text: A sign reads, "Jacob Solomonovich Schneersohn, tailor, '+func('time', 'get_time_...
  scene.text('A sign reads, "Jacob Solomonovich Schneersohn, tailor, \'+func(\'time\', \'get_time_string\', 8, 0)+\'-\'+func(\'time\', \'get_time_string\', 16, 0)+\' Monday - Friday"');
  scene.text('An elderly Jewish man is sitting at a table. He pulls his glasses down a little and looks over the top of them as he points at you.');
  if (((s as any).portnoyQW ?? 0) > 0) {
    qspCall(s, 'city_market', 'tailor_acts');
  } else {
    scene.text('"Hello young lady. I am Jacob Solomonovich, but you can call me Yasha. And what is your name?"');
    scene.actions([
      { label: 'Tell him your name', handler: (st: GameState) => {
    (s as any).portnoyQW = 1;
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>"
    scene.text(`"${((s as any).pcs_nickname ?? 0)}"`);
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>…What a pretty name. Come, sit here on this chair. How can I h...
    scene.text(`"${((s as any).pcs_nickname ?? 0)}…What a pretty name. Come, sit here on this chair. How can I help you?"`);
    scene.actions([
      { label: 'Ask him about your clothes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('"Can you tailor my clothes to fit me better?"');
    scene.text('"Of course I can! Otherwise, what kind of tailor would I be? Here, let me see what you\'re wearing."');
    scene.text('He jumps up and nimbly removes the tape from his neck and begins to measure your chest, waist and hips.');
    // TODO-QSP: dynamic text: "I can adjust any clothing that doesn't fit you for <<$func('money', 'string_pri...
    scene.text(`"I can adjust any clothing that doesn't fit you for ${qspFunc(s, 'money', 'string_price', 500)} per item."`);
    qspCall(s, 'city_market', 'tailor_acts');
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterTailorActs(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: "So <<$pcs_nickname>>. Do you need any clothing adjusted?"
  scene.text(`"So ${((s as any).pcs_nickname ?? 0)}. Do you need any clothing adjusted?"`);
  qspCall(s, 'tailor', 'set_tailor_acts');
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'clo':
      enterClo(s, scene);
      break;
    case 'wares':
      enterWares(s, scene);
      break;
    case 'tailor':
      enterTailor(s, scene);
      break;
    case 'tailor_acts':
      enterTailorActs(s, scene);
      break;
    default:
      enterClo(s, scene);
      break;
  }
}

export const city_market: LocationDef = {
  name: 'city_market',
  title: 'Clothes.',
  region: 'city',
  locationType: 'public_outdoors',
  description: ['You inspect the cheap clothing the stall has to offer.'],
  enter: enter,
};
