import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    if (((s as any).month ?? 0) >=11  &&  ((s as any).month ?? 0) <= 12  ||  ((s as any).month ?? 0) >=1  &&  ((s as any).month ?? 0) <=3) {
      if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 23) {
      }
      if (((s as any).hour ?? 0) >= 0  &&  ((s as any).hour ?? 0) <= 7) {
      }
    } else {
      if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 23) {
      }
      if (((s as any).hour ?? 0) >= 0  &&  ((s as any).hour ?? 0) <= 7) {
      }
    }
  }
  qspCall(s, 'core_library', 'setloc', 'city_market', 'start');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'outdoors');
  scene.img('images/locations/city/residential/market/rinok.jpg');
  scene.text('One of the stalls has a sign attached to it that reads "Cash paid for secondhand clothes". You can <a href="#" onclick="window.__gameStore.setState((s) => { s.cloc = 2; return s; }); window.__gameStore.getState().doGoto(\u0027clothing_view\u0027, \u0027view_lists_list\u0027, \u0027sell\u0027); return false;">sell individual items</a> or <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027portnoi\u0027, \u0027\u0027); return false;">all of your unwanted clothes here</a>.');
  if (((s as any).analPlugIn ?? 0) === 1  &&  ((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).PCloSkirt ?? 0) > 2) {
    (s as any).nurand = (Math.floor(Math.random() * 101) + 0);
    if (((s as any).nurand ?? 0) >= 80) {
      qspCall(s, 'mood', 'lower', 'tiny');
      scene.text('You feel a hand gently pawing at <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027ETO_salon\u0027, \u0027market_grope\u0027); return false;">your ass</a>.');
      qspCall(s, 'arousal', 'foreplay', 3);
      qspCall(s, 'stat', '');
    }
  }
  if (((s as any).job_status ?? 0)?.['city_market_saleswoman'] === 'employed') {
    if (((s as any).week ?? 0) === 2  ||  ((s as any).week ?? 0) === 4  ||  ((s as any).week ?? 0) === 6) {
      if (((s as any).hour ?? 0) < 9) {
        scene.text('Arthur is waiting to set up a stall for you.');
        scene.actions([
          { label: '<b>Set up stall</b>', handler: (st: GameState) => {
    (st as any).hour = 9;
    (st as any).minut = 0;
    (st as any).prodpayum = 1200;
    qspCall(st, 'stat', '');
    scene.text('Arthur unloads boxes from his truck and gives them to you. You start hanging the clothes inside around the stall.');
    scene.text(`Before leaving, Arthur gives you instructions. "Sell it all at whatever price you want, but at the end of your shift, I'll charge you ${qspFunc(s, 'money', 'string_price', 1000)} for each item sold. You should be making me no less than ${qspFunc(s, 'money', 'string_profit', ((st as any).arturplan ?? ''))}."`);
    scene.actions([
      { label: 'Start working', goto: ['city_marketwork', 'start'] },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Quit', handler: (st: GameState) => {
    qspCall(st, 'jobs', 'set_terminated', 'city_market_saleswoman');
    qspCall(st, 'stat', '');
    scene.text('You quit your job at the market and collect your papers.');
    scene.actions([
      { label: 'Leave', goto: ['city_market', 'start'] },
    ]);
  } },
    ]);
  }
  if (((s as any).job_status ?? 0)?.['city_market_saleswoman'] !== 'employed') {
    scene.text('');
    scene.text('A messily written ad hangs from one of the stalls. "Need female market stall staff. Paychecks big."');
    scene.actions([
      { label: 'Approach the owner of the ad', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('Hi, my name is Arthur. I own many stalls here and I need a saleswoman. Want the job?');
    scene.text('\'Pay is a percentage of sales, paid at end of shift. Your shifts would be Tuesdays, Thursdays and Saturdays from 8:00 to 14:00.\'');
    scene.text('Government insist I have your papers, so it would be your main job.');
    scene.actions([
      { label: 'Leave', goto: ['city_market', 'start'] },
      { label: 'Take the job', handler: (st: GameState) => {
    qspCall(st, 'jobs', 'set_employed', 'city_market_saleswoman');
    (st as any).arturplan = 5000;
    scene.text('You give your papers to Arthur and he shakes your hand, welcoming you aboard.');
    scene.actions([
      { label: 'Leave', goto: ['city_market', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'city_residential', '');
  } },
    { label: 'Browse wares', goto: ['city_market', 'wares'] },
    { label: 'Go to the book tray', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.text(`You walk up to the stall and inspect what's on sale. You see a fantasy book, a science fiction book and various romance novels. They all cost ${qspFunc(s, 'money', 'string_price', 350)} each.`);
    qspCall(st, 'library_functions', 'set_book_buy_acts');
    scene.actions([
      { label: 'Leave', goto: ['city_market', 'start'] },
    ]);
  } },
    { label: 'View clothing', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_market', 'clo'] },
  ]);
  scene.build();
}

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
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'shop_utils', 'cleanup');
    qspGoto(st, 'city_market', 'start');
  } },
  ]);
  scene.build();
}

function enterWares(s: GameState, scene: SceneBuilder): void {
  (s as any).loc_s = 'city_market';
  (s as any).args_s = 'wares';
  qspCall(s, 'themes', 'outdoors');
  qspCall(s, 'item_cart', 'shopping_aisle', 'market');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/market/rinok.jpg');
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
  scene.text('\'A sign reads, "Jacob Solomonovich Schneersohn, tailor, 8:00-16:00 Monday - Friday"\'');
  scene.text('An elderly Jewish man is sitting at a table. He pulls his glasses down a little and looks over the top of them as he points at you.');
  if (((s as any).portnoyQW ?? 0) > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTailorActs(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    scene.text('"Hello young lady. I am Jacob Solomonovich, but you can call me Yasha. And what is your name?"');
    scene.actions([
      { label: 'Tell him your name', handler: (st: GameState) => {
    (st as any).portnoyQW = 1;
    scene.text(`"${((st as any).pcs_nickname ?? '')}"`);
    scene.text(`"${((st as any).pcs_nickname ?? '')}…What a pretty name. Come, sit here on this chair. How can I help you?"`);
    scene.actions([
      { label: 'Ask him about your clothes', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.text('"Can you tailor my clothes to fit me better?"');
    scene.text('"Of course I can! Otherwise, what kind of tailor would I be? Here, let me see what you\'re wearing."');
    scene.text('He jumps up and nimbly removes the tape from his neck and begins to measure your chest, waist and hips.');
    scene.text(`"I can adjust any clothing that doesn't fit you for ${qspFunc(s, 'money', 'string_price', 500)} per item."`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTailorActs(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterTailorActs(s: GameState, scene: SceneBuilder): void {
  scene.text(`"So ${((s as any).pcs_nickname ?? '')}. Do you need any clothing adjusted?"`);
  qspCall(s, 'tailor', 'set_tailor_acts');
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'public_outdoors';
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
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
      enterDefault(s, scene);
      break;
  }
}

export const city_market: LocationDef = {
  name: 'city_market',
  title: 'Clothes.',
  region: 'city',
  locationType: 'public_outdoors',
  enter: enter,
};
