import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Ilyich and Biryukov construction</b></center>');
  scene.img('images/locations/shared/store/shopdacha.jpg');
  scene.text('In this storefront office, you can upgrade your existing properties or start a new construction project upon any land you may own.');
  // TODO-QSP: dynamic text: All payments must be made from you bank account. Current balance - <<karta>> <b>...
  scene.text(`All payments must be made from you bank account. Current balance - ${((s as any).karta ?? '')} <b>₽</b>.`);
  if (((s as any).hour ?? 0) < 8  ||  ((s as any).hour ?? 0) > 20) {
    scene.text('Shop closed.');
  } else {
    if (qspFunc(s, 'homes_properties', 'is_property_of_status', 'purchased', 'city_apartment')) {
      if ((!((s as any).rembedr ?? 0))) {
        scene.actions([
          { label: 'Renovate city apartment bedroom ( [50000₽]...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 50000, 'card') === 1) {
      (st as any).rembedr = 1;
      qspCall(st, 'money', 'pay', 50000, 'card');
      qspCall(st, 'homes_properties', 'renovate_property', 'city_apartment', qspFunc(s, 'money', 'price', 50000), 'bedroom');
      scene.text('You upgrade your apartment bedroom.');
    } else {
      scene.text('Unfortunately, you do not have enough money in your bank account.');
    }
    scene.actions([
      { label: 'Return', goto: ['shopdacha', ''] },
    ]);
  } },
        ]);
      }
      if ((!((s as any).remsitr ?? 0))) {
        scene.actions([
          { label: 'Renovate city apartment living room ( [50000₽]...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 50000, 'card') === 1) {
      (st as any).remsitr = 1;
      qspCall(st, 'money', 'pay', 50000, 'card');
      qspCall(st, 'homes_properties', 'renovate_property', 'city_apartment', qspFunc(s, 'money', 'price', 50000), 'living room');
      scene.text('You upgrade your apartment living room.');
    } else {
      scene.text('Unfortunately, you do not have enough money in your bank account.');
    }
    scene.actions([
      { label: 'Return', goto: ['shopdacha', ''] },
    ]);
  } },
        ]);
      }
      if ((!((s as any).remkorr ?? 0))) {
        scene.actions([
          { label: 'Renovate city apartment hallway ( [50000₽]...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 50000, 'card') === 1) {
      (st as any).remkorr = 1;
      qspCall(st, 'money', 'pay', 50000, 'card');
      qspCall(st, 'homes_properties', 'renovate_property', 'city_apartment', qspFunc(s, 'money', 'price', 50000), 'hallway');
      scene.text('You upgrade your apartment hallway.');
    } else {
      scene.text('Unfortunately, you do not have enough money in your bank account.');
    }
    scene.actions([
      { label: 'Return', goto: ['shopdacha', ''] },
    ]);
  } },
        ]);
      }
      if ((!((s as any).remvanr ?? 0))) {
        scene.actions([
          { label: 'Renovate city apartment bathroom ( [50000₽]...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 50000, 'card') === 1) {
      (st as any).remvanr = 1;
      qspCall(st, 'money', 'pay', 50000, 'card');
      qspCall(st, 'homes_properties', 'renovate_property', 'city_apartment', qspFunc(s, 'money', 'price', 50000), 'bathroom');
      scene.text('You upgrade your apartment bathroom.');
    } else {
      scene.text('Unfortunately, you do not have enough money in your bank account.');
    }
    scene.actions([
      { label: 'Return', goto: ['shopdacha', ''] },
    ]);
  } },
        ]);
      }
      if ((!((s as any).remkuhr ?? 0))) {
        scene.actions([
          { label: 'Renovate city apartment kitchen ( [50000₽]...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 50000, 'card') === 1) {
      (st as any).remkuhr = 1;
      qspCall(st, 'money', 'pay', 50000, 'card');
      qspCall(st, 'homes_properties', 'renovate_property', 'city_apartment', qspFunc(s, 'money', 'price', 50000), 'kitchen');
      scene.text('You upgrade your apartment kitchen.');
    } else {
      scene.text('Unfortunately, you do not have enough money in your bank account.');
    }
    scene.actions([
      { label: 'Return', goto: ['shopdacha', ''] },
    ]);
  } },
        ]);
      }
    }
    if (qspFunc(s, 'homes_properties', 'is_property_of_status', 'owned', 'village_cottage')  &&  qspFunc(s, 'homes_properties', 'is_property_renovated', 'village_cottage') === 0) {
      scene.actions([
        { label: 'Upgrade your cottage', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 200000, 'card') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 200000, 'card');
      qspCall(st, 'homes_properties', 'renovate_property', 'village_cottage', qspFunc(s, 'money', 'price', 200000));
      (st as any).minut = ((st as any).minut ?? 0) + 15;
      qspCall(st, 'stat', '');
      scene.text('You upgrade your dacha in the cooperative.');
      scene.actions([
        { label: 'Return', goto: ['shopdacha', ''] },
      ]);
    }
  } },
      ]);
    }
    if (qspFunc(s, 'homes_properties', 'is_property_of_status', 'owned', 'matryona_mansion')) {
      if (qspFunc(s, 'homes_properties', 'get_property_construction_status', 'matryona_mansion') === 0) {
        scene.actions([
          { label: 'Connect water, electricity', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 500000, 'card') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 500000, 'card');
      qspCall(st, 'homes_properties', 'progress_construction_status', 'matryona_mansion');
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('You pay for a connection of services to the site.');
      scene.actions([
        { label: 'Return', goto: ['shopdacha', ''] },
      ]);
    }
  } },
        ]);
      }
      if (qspFunc(s, 'homes_properties', 'get_property_construction_status', 'matryona_mansion') === 1) {
        scene.actions([
          { label: 'Build mansion\'s shell', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 1500000, 'card') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 1500000, 'card');
      qspCall(st, 'homes_properties', 'progress_construction_status', 'matryona_mansion');
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('You pay for the construction of the mansion\'s shell.');
      scene.actions([
        { label: 'Return', goto: ['shopdacha', ''] },
      ]);
    }
  } },
        ]);
      }
      if (qspFunc(s, 'homes_properties', 'get_property_construction_status', 'matryona_mansion') === 2  &&  ((s as any).ymanrem ?? 0)[3] === 0) {
        scene.actions([
          { label: 'Build internal walls', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 500000, 'card') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 500000, 'card');
      ((st as any).ymanrem = (st as any).ymanrem ?? {})[3] = 1;
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('You pay for the construction of the mansion\'s internal walls.');
      scene.actions([
        { label: 'Return', goto: ['shopdacha', ''] },
      ]);
    }
  } },
        ]);
      }
      if (qspFunc(s, 'homes_properties', 'get_property_construction_status', 'matryona_mansion') > 0) {
        if ((!((s as any).banaMansion ?? 0))) {
          scene.actions([
            { label: 'Install electrics and plumbing', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 800000, 'card') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 800000, 'card');
      (st as any).banaMansion = 1;
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('You pay for the electrics and plumbing to be installed.');
      scene.actions([
        { label: 'Return', goto: ['shopdacha', ''] },
      ]);
    }
  } },
          ]);
        }
        if ((!((s as any).bassMansion ?? 0))) {
          scene.actions([
            { label: 'Build a pool', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 500000, 'card') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 500000, 'card');
      (st as any).bassMansion = 1;
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('You pay for the construction of the mansion\'s pool.');
      scene.actions([
        { label: 'Return', goto: ['shopdacha', ''] },
      ]);
    }
  } },
          ]);
        }
      }
      if (qspFunc(s, 'homes_properties', 'get_property_construction_status', 'matryona_mansion') === 2) {
        if (((s as any).ymanrem ?? 0)[3] === 1) {
          scene.actions([
            { label: 'Build hallways', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 250000, 'card') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 250000, 'card');
      ((st as any).ymanrem = (st as any).ymanrem ?? {})[3] = 2;
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('You pay for hallways to be built.');
      scene.actions([
        { label: 'Return', goto: ['shopdacha', ''] },
      ]);
    }
  } },
          ]);
        } else {
          if (((s as any).ymanrem ?? 0)[3] === 2) {
            scene.actions([
              { label: 'Buy lounge furniture', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 150000, 'card') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 150000, 'card');
      ((st as any).ymanrem = (st as any).ymanrem ?? {})[3] = 3;
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('You buy lounge furniture.');
      scene.actions([
        { label: 'Return', goto: ['shopdacha', ''] },
      ]);
    }
  } },
            ]);
          }
        }
        if (((s as any).ymanrem ?? 0)[4] === 0) {
          scene.actions([
            { label: 'Build main bedroom', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 250000, 'card') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 250000, 'card');
      ((st as any).ymanrem = (st as any).ymanrem ?? {})[4] = 1;
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('You pay for the main bedroom to be built.');
      scene.actions([
        { label: 'Return', goto: ['shopdacha', ''] },
      ]);
    }
  } },
          ]);
        } else {
          if (((s as any).ymanrem ?? 0)[4] === 1) {
            scene.actions([
              { label: 'Buy bedroom furniture', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 300000, 'card') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 300000, 'card');
      ((st as any).ymanrem = (st as any).ymanrem ?? {})[4] = 2;
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('You buy bedroom furniture.');
      scene.actions([
        { label: 'Return', goto: ['shopdacha', ''] },
      ]);
    }
  } },
            ]);
          }
        }
        if (((s as any).ymanrem ?? 0)[5] === 0) {
          scene.actions([
            { label: 'Pay for bathroom', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 250000, 'card') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 250000, 'card');
      ((st as any).ymanrem = (st as any).ymanrem ?? {})[5] = 1;
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('You pay for the bathroom to be built.');
      scene.actions([
        { label: 'Return', goto: ['shopdacha', ''] },
      ]);
    }
  } },
          ]);
        } else {
          if (((s as any).ymanrem ?? 0)[5] === 1) {
            scene.actions([
              { label: 'Pay for bathroom fixtures and fittings', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 250000, 'card') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 250000, 'card');
      ((st as any).ymanrem = (st as any).ymanrem ?? {})[5] = 2;
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('You purchase the bathroom suite.');
      scene.actions([
        { label: 'Return', goto: ['shopdacha', ''] },
      ]);
    }
  } },
            ]);
          }
        }
        if (((s as any).ymanrem ?? 0)[6] === 0) {
          scene.actions([
            { label: 'Pay for kitchen installation', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 250000, 'card') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 250000, 'card');
      ((st as any).ymanrem = (st as any).ymanrem ?? {})[6] = 1;
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('You pay for the kitchen installation.');
      scene.actions([
        { label: 'Return', goto: ['shopdacha', ''] },
      ]);
    }
  } },
          ]);
        } else {
          if (((s as any).ymanrem ?? 0)[6] === 1) {
            scene.actions([
              { label: 'Pay for kitchen units', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 250000, 'card') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 250000, 'card');
      ((st as any).ymanrem = (st as any).ymanrem ?? {})[6] = 2;
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('You purchase the kitchen units.');
      scene.actions([
        { label: 'Return', goto: ['shopdacha', ''] },
      ]);
    }
  } },
            ]);
          }
        }
        if (((s as any).ymanrem ?? 0)[7] === 0) {
          scene.actions([
            { label: 'Pay for the living room', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 250000, 'card') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 250000, 'card');
      ((st as any).ymanrem = (st as any).ymanrem ?? {})[7] = 1;
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('You pay for your living room.');
      scene.actions([
        { label: 'Return', goto: ['shopdacha', ''] },
      ]);
    }
  } },
          ]);
        } else {
          if (((s as any).ymanrem ?? 0)[7] === 1) {
            scene.actions([
              { label: 'Buy furniture for the living room', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 250000, 'card') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 250000, 'card');
      ((st as any).ymanrem = (st as any).ymanrem ?? {})[7] = 2;
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('You buy furniture for your living room.');
      scene.actions([
        { label: 'Return', goto: ['shopdacha', ''] },
      ]);
    }
  } },
            ]);
          }
        }
        if (((s as any).ymanrem ?? 0)[8] === 0) {
          scene.actions([
            { label: 'Pay for your lounge', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 250000, 'card') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 250000, 'card');
      ((st as any).ymanrem = (st as any).ymanrem ?? {})[8] = 1;
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('You pay for your lounge.');
      scene.actions([
        { label: 'Return', goto: ['shopdacha', ''] },
      ]);
    }
  } },
          ]);
        } else {
          if (((s as any).ymanrem ?? 0)[8] === 1) {
            scene.actions([
              { label: 'Purchase furniture for the lounge', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 250000, 'card') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 250000, 'card');
      ((st as any).ymanrem = (st as any).ymanrem ?? {})[8] = 2;
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('You purchase furniture for your lounge.');
      scene.actions([
        { label: 'Return', goto: ['shopdacha', ''] },
      ]);
    }
  } },
            ]);
          }
        }
        if (((s as any).ymanrem ?? 0)[9] === 0) {
          scene.actions([
            { label: 'Build a children\'s room', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 250000, 'card') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 250000, 'card');
      ((st as any).ymanrem = (st as any).ymanrem ?? {})[9] = 1;
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('You pay for a children\'s room.');
      scene.actions([
        { label: 'Return', goto: ['shopdacha', ''] },
      ]);
    }
  } },
          ]);
        } else {
          if (((s as any).ymanrem ?? 0)[9] === 1) {
            scene.actions([
              { label: 'Buy furniture for the nursery', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 250000, 'card') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 250000, 'card');
      ((st as any).ymanrem = (st as any).ymanrem ?? {})[9] = 2;
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('You pay furniture for the nursery.');
      scene.actions([
        { label: 'Return', goto: ['shopdacha', ''] },
      ]);
    }
  } },
            ]);
          }
        }
        if (((s as any).ymanrem ?? 0)[10] === 0) {
          scene.actions([
            { label: 'Pay for a library', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 250000, 'card') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 250000, 'card');
      ((st as any).ymanrem = (st as any).ymanrem ?? {})[10] = 1;
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('You pay for a library.');
      scene.actions([
        { label: 'Return', goto: ['shopdacha', ''] },
      ]);
    }
  } },
          ]);
        } else {
          if (((s as any).ymanrem ?? 0)[10] === 1) {
            scene.actions([
              { label: 'Purchase furniture for your library', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 250000, 'card') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 250000, 'card');
      ((st as any).ymanrem = (st as any).ymanrem ?? {})[10] = 2;
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('You buy furniture for the library.');
      scene.actions([
        { label: 'Return', goto: ['shopdacha', ''] },
      ]);
    }
  } },
            ]);
          }
        }
        if (((s as any).ymanrem ?? 0)[11] === 0) {
          scene.actions([
            { label: 'Buy a gym', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 250000, 'card') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 250000, 'card');
      ((st as any).ymanrem = (st as any).ymanrem ?? {})[11] = 1;
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('You buy a gym.');
      scene.actions([
        { label: 'Return', goto: ['shopdacha', ''] },
      ]);
    }
  } },
          ]);
        } else {
          if (((s as any).ymanrem ?? 0)[11] === 1) {
            scene.actions([
              { label: 'Buy gym equipment', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 250000, 'card') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 250000, 'card');
      ((st as any).ymanrem = (st as any).ymanrem ?? {})[11] = 2;
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('You buy gym equipment.');
      scene.actions([
        { label: 'Return', goto: ['shopdacha', ''] },
      ]);
    }
  } },
            ]);
          }
        }
        if (((s as any).ymanrem ?? 0)[12] === 0) {
          scene.actions([
            { label: 'Buy an office', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 250000, 'card') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 250000, 'card');
      ((st as any).ymanrem = (st as any).ymanrem ?? {})[12] = 1;
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('You pay for an office to be built.');
      scene.actions([
        { label: 'Return', goto: ['shopdacha', ''] },
      ]);
    }
  } },
          ]);
        } else {
          if (((s as any).ymanrem ?? 0)[12] === 1) {
            scene.actions([
              { label: 'Purchase furniture for the office', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 250000, 'card') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 250000, 'card');
      ((st as any).ymanrem = (st as any).ymanrem ?? {})[12] = 2;
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('You buy office furniture.');
      scene.actions([
        { label: 'Return', goto: ['shopdacha', ''] },
      ]);
    }
  } },
            ]);
          }
        }
      }
    }
  }
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['city_mall', ''] },
  ]);
  scene.build();
}

export const shopdacha: LocationDef = {
  name: 'shopdacha',
  title: 'Ilyich and Biryukov construction',
  region: 'other',
  description: ['In this storefront office, you can upgrade your existing properties or start a new construction project upon any land you may own.'],
  enter: enter,
};
