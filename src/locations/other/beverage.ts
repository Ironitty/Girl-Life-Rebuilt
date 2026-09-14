import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterSetExit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).food_loc ?? 0) === 1  &&  ((s as any).loc ?? 0) !== 'brothel') {
    scene.actions([
      { label: 'Finish', goto: ['food_menu', ''] },
    ]);
  } else {
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterAfteralcohol(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_hydra ?? 0) < 20) {
  } else {
    if (((s as any).pcs_hydra ?? 0) <= 40) {
    } else {
      if (((s as any).pcs_hydra ?? 0) <= 60) {
      } else {
        if (((s as any).pcs_hydra ?? 0) <= 80) {
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAfterdrink(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_hydra ?? 0) < 40) {
  } else {
    if (((s as any).pcs_hydra ?? 0) < 60) {
    } else {
      if (((s as any).pcs_hydra ?? 0) < 80) {
      } else {
        if (((s as any).pcs_hydra ?? 0) <= 100) {
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterWatercooler(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterWaterStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAfterdrink(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/locations/pavlovsk/community/bathroom/waterfountain.jpg');
  // TODO-QSP: dynamic text: You enjoy a drink of water, and<<$mtxt>>
  scene.text(`You enjoy a drink of water, and${((s as any).mtxt || '')}`);
  qspCall(s, 'kit_din', 'fill_bottle');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterBbr(s: GameState, scene: SceneBuilder): void {
  (s as any).food_loc = 0;
  scene.actions([{ label: 'Continue', goto: ['brothel', 'password'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterWaterText(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAfterdrink(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/locations/shared/brothel/barorderwater.jpg');
  // TODO-QSP: dynamic text: You enjoy a drink of water, and<<$mtxt>>
  scene.text(`You enjoy a drink of water, and${((s as any).mtxt || '')}`);
  // TODO-QSP: end
  scene.build();
}

function enterWaterStats(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 1;
  if (((s as any).alko ?? 0) > 0) {
    (s as any).alko = ((s as any).alko ?? 0) - (1);
  }
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
  if (((s as any).pcs_hydra ?? 0) >= 100) {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (25);
  } else {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (50);
  }
  qspCall(s, 'cum_cleanup', '', 2);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterWater(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  // TODO-QSP: gs 'money', 'pay', _drink['<<args[1]>>,price']
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterWaterStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterWaterText(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetExit(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterOnlyCostWater(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'pay', _drink['<<args[1]>>,price']
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterWaterStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('Added to your order');
  scene.actions([{ label: 'Continue', goto: ['food_menu', ''] }]);
  // TODO-QSP: end
  scene.build();
}

function enterTeaText(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAfterdrink(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/shared/drinks/tea.jpg');
  // TODO-QSP: dynamic text: You enjoy a relaxing cup of tea, and<<$mtxt>>
  scene.text(`You enjoy a relaxing cup of tea, and${((s as any).mtxt || '')}`);
  // TODO-QSP: end
  scene.build();
}

function enterTeaStats(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 0;
  if (((s as any).alko ?? 0) > 0) {
    (s as any).alko = ((s as any).alko ?? 0) - (1);
  }
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
  qspCall(s, 'mood', 'raise', 'small');
  if (((s as any).pcs_hydra ?? 0) >= 100) {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (25);
  } else {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (50);
  }
  qspCall(s, 'cum_cleanup', '', 2);
  (s as any).pcs_breath = 0;
  if (!(s as any).teeth) (s as any).teeth = {}; (s as any).teeth['caffe_or_tea'] = ((s as any).teeth['caffe_or_tea'] ?? 0) + (2);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterTea(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  // TODO-QSP: gs 'money', 'pay', _drink['<<args[1]>>,price']
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTeaStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTeaText(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetExit(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterOnlyCostTea(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'pay', _drink['<<args[1]>>,price']
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTeaStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('Added to your order');
  scene.actions([{ label: 'Continue', goto: ['food_menu', ''] }]);
  // TODO-QSP: end
  scene.build();
}

function enterJuiceText(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAfterdrink(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/shared/drinks/juice.jpg');
  // TODO-QSP: dynamic text: You enjoy a refreshing juice, and<<$mtxt>>
  scene.text(`You enjoy a refreshing juice, and${((s as any).mtxt || '')}`);
  // TODO-QSP: end
  scene.build();
}

function enterJuiceStats(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 1;
  if (((s as any).alko ?? 0) > 0) {
    (s as any).alko = ((s as any).alko ?? 0) - (1);
  }
  (s as any).fat = ((s as any).fat ?? 0) + (3);
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (8);
  qspCall(s, 'mood', 'raise', 'tiny');
  if (((s as any).pcs_hydra ?? 0) >= 100) {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (40);
  } else {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (80);
  }
  (s as any).cumspclnt = 2;
  qspCall(s, 'cum_cleanup', '', 2);
  (s as any).pcs_breath = 0;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterJuice(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  // TODO-QSP: gs 'money', 'pay', _drink['<<args[1]>>,price']
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterJuiceStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterJuiceText(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetExit(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterOnlyCostJuice(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'pay', _drink['<<args[1]>>,price']
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterJuiceStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('Added to your order');
  scene.actions([{ label: 'Continue', goto: ['food_menu', ''] }]);
  // TODO-QSP: end
  scene.build();
}

function enterCoffeeText(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAfterdrink(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/shared/drinks/coffee.jpg');
  // TODO-QSP: dynamic text: You enjoy a hot coffee, and<<$mtxt>>
  scene.text(`You enjoy a hot coffee, and${((s as any).mtxt || '')}`);
  // TODO-QSP: end
  scene.build();
}

function enterCoffeeStats(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 0;
  if (((s as any).alko ?? 0) > 0) {
    (s as any).alko = ((s as any).alko ?? 0) - (1);
  }
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (5);
  (s as any).fat = ((s as any).fat ?? 0) + (1);
  qspCall(s, 'mood', 'raise', 'small');
  if (((s as any).pcs_hydra ?? 0) >= 100) {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (20);
  } else {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (40);
  }
  qspCall(s, 'cum_cleanup', '', 2);
  (s as any).pcs_breath = 0;
  if (!(s as any).teeth) (s as any).teeth = {}; (s as any).teeth['caffe_or_tea'] = ((s as any).teeth['caffe_or_tea'] ?? 0) + (5);
  qspCall(s, 'drugs', 'caffeine', 4, 1);
  // TODO-QSP: end
  scene.build();
}

function enterCoffee(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  // TODO-QSP: gs 'money', 'pay', _drink['<<args[1]>>,price']
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCoffeeStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCoffeeText(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetExit(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterOnlyCostCoffee(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'pay', _drink['<<args[1]>>,price']
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCoffeeStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('Added to your order');
  scene.actions([{ label: 'Continue', goto: ['food_menu', ''] }]);
  // TODO-QSP: end
  scene.build();
}

function enterEspressoText(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAfterdrink(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/shared/drinks/coffee.jpg');
  // TODO-QSP: dynamic text: You enjoy a hot espresso, and<<$mtxt>>
  scene.text(`You enjoy a hot espresso, and${((s as any).mtxt || '')}`);
  // TODO-QSP: end
  scene.build();
}

function enterEspressoStats(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 0;
  if (((s as any).alko ?? 0) > 0) {
    (s as any).alko = ((s as any).alko ?? 0) - (1);
  }
  if (((s as any).pcs_sleep ?? 0) <= 20) {
    (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) + (5);
  }
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (5);
  qspCall(s, 'mood', 'raise', 'small');
  qspCall(s, 'cum_cleanup', '', 2);
  (s as any).pcs_breath = 0;
  qspCall(s, 'drugs', 'caffeine', 2, 5);
  // TODO-QSP: end
  scene.build();
}

function enterEspresso(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  // TODO-QSP: gs 'money', 'pay', _drink['<<args[1]>>,price']
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEspressoStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEspressoText(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetExit(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterOnlyCostEspresso(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'pay', _drink['<<args[1]>>,price']
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEspressoStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('Added to your order');
  scene.actions([{ label: 'Continue', goto: ['food_menu', ''] }]);
  // TODO-QSP: end
  scene.build();
}

function enterKvassText(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAfterdrink(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/shared/drinks/kvass.jpg');
  // TODO-QSP: dynamic text: You enjoy a drink of kvass, and<<$mtxt>>
  scene.text(`You enjoy a drink of kvass, and${((s as any).mtxt || '')}`);
  // TODO-QSP: end
  scene.build();
}

function enterKvassStats(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 1;
  (s as any).fat = ((s as any).fat ?? 0) + (2);
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (5);
  qspCall(s, 'mood', 'raise', 'small');
  if (((s as any).pcs_hydra ?? 0) >= 100) {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (30);
  } else {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (60);
  }
  qspCall(s, 'cum_cleanup', '', 2);
  (s as any).pcs_breath = 0;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterKvass(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  // TODO-QSP: gs 'money', 'pay', _drink['<<args[1]>>,price']
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterKvassStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterKvassText(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetExit(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterOnlyCostKvass(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'pay', _drink['<<args[1]>>,price']
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterKvassStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('Added to your order');
  scene.actions([{ label: 'Continue', goto: ['food_menu', ''] }]);
  // TODO-QSP: end
  scene.build();
}

function enterMilkshakeText(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAfterdrink(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/shared/drinks/milkshake.jpg');
  // TODO-QSP: dynamic text: You enjoy an ice cold milkshake, and<<$mtxt>>
  scene.text(`You enjoy an ice cold milkshake, and${((s as any).mtxt || '')}`);
  // TODO-QSP: end
  scene.build();
}

function enterMilkshakeStats(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 1;
  (s as any).fat = ((s as any).fat ?? 0) + (6);
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (5);
  qspCall(s, 'mood', 'raise', 'small');
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (5);
  if (((s as any).pcs_hydra ?? 0) >= 100) {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (50);
  } else {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (100);
  }
  qspCall(s, 'cum_cleanup', '', 2);
  (s as any).pcs_breath = 0;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterMilkshake(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  // TODO-QSP: gs 'money', 'pay', _drink['<<args[1]>>,price']
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMilkshakeStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMilkshakeText(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetExit(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterOnlyCostMilkshake(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'pay', _drink['<<args[1]>>,price']
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMilkshakeStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('Added to your order');
  scene.actions([{ label: 'Continue', goto: ['food_menu', ''] }]);
  // TODO-QSP: end
  scene.build();
}

function enterEnergyDrinkText(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAfterdrink(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/shared/drinks/energy_drink.jpg');
  // TODO-QSP: dynamic text: You enjoy an energy drink, and<<$mtxt>>
  scene.text(`You enjoy an energy drink, and${((s as any).mtxt || '')}`);
  // TODO-QSP: end
  scene.build();
}

function enterEnergyDrinkStats(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 1;
  if (((s as any).alko ?? 0) > 0) {
    (s as any).alko = ((s as any).alko ?? 0) - (1);
  }
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
  qspCall(s, 'mood', 'raise', 'small');
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (10);
  (s as any).fat = ((s as any).fat ?? 0) + (3);
  if (((s as any).pcs_hydra ?? 0) >= 100) {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (25);
  } else {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (50);
  }
  qspCall(s, 'cum_cleanup', '', 2);
  (s as any).pcs_breath = 0;
  qspCall(s, 'drugs', 'caffeine', 4, 1);
  // TODO-QSP: end
  scene.build();
}

function enterEnergyDrink(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  // TODO-QSP: gs 'money', 'pay', _drink['<<args[1]>>,price']
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEnergyDrinkStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEnergyDrinkText(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetExit(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterOnlyCostEnergyDrink(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'pay', _drink['<<args[1]>>,price']
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEnergyDrinkStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('Added to your order');
  scene.actions([{ label: 'Continue', goto: ['food_menu', ''] }]);
  // TODO-QSP: end
  scene.build();
}

function enterBeerText(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAfteralcohol(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/shared/drinks/darkbeer.jpg');
  // TODO-QSP: dynamic text: You drink the beer, enjoying the fresh, mildly bitter taste, and<<$mtxt>>
  scene.text(`You drink the beer, enjoying the fresh, mildly bitter taste, and${((s as any).mtxt || '')}`);
  // TODO-QSP: end
  scene.build();
}

function enterBeerStats(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'drugs', 'alcohol', 'beer');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterBeer(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_health ?? 0) <= 20) {
    scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc', 'loc_arg'); } }]);
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    // TODO-QSP: gs 'money', 'pay', _drink['<<args[1]>>,price']
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBeerStats(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBeerText(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetExit(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterOnlyCostBeer(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'pay', _drink['<<args[1]>>,price']
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBeerStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('Added to your order');
  scene.actions([{ label: 'Continue', goto: ['food_menu', ''] }]);
  // TODO-QSP: end
  scene.build();
}

function enterWineText(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAfteralcohol(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/shared/drinks/redwine.jpg');
  // TODO-QSP: dynamic text: You drink some red wine, and<<$mtxt>>
  scene.text(`You drink some red wine, and${((s as any).mtxt || '')}`);
  // TODO-QSP: end
  scene.build();
}

function enterWineStats(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'drugs', 'alcohol', 'wine');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterWine(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_health ?? 0) <= 20) {
    scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc', 'loc_arg'); } }]);
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    // TODO-QSP: gs 'money', 'pay', _drink['<<args[1]>>,price']
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterWineStats(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterWineText(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetExit(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterOnlyCostWine(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'pay', _drink['<<args[1]>>,price']
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterWineStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('Added to your order');
  scene.actions([{ label: 'Continue', goto: ['food_menu', ''] }]);
  // TODO-QSP: end
  scene.build();
}

function enterVodkaText(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAfteralcohol(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/locations/shared/brothel/barordervodka.jpg');
  // TODO-QSP: dynamic text: The vodka shot disappears like it was only water, and<<$mtxt>>
  scene.text(`The vodka shot disappears like it was only water, and${((s as any).mtxt || '')}`);
  // TODO-QSP: end
  scene.build();
}

function enterVodkaStats(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'drugs', 'alcohol', 'vodka');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterVodka(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_health ?? 0) <= 20) {
    scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc', 'loc_arg'); } }]);
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    // TODO-QSP: gs 'money', 'pay', _drink['<<args[1]>>,price']
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterVodkaStats(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterVodkaText(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetExit(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterOnlyCostVodka(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'pay', _drink['<<args[1]>>,price']
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterVodkaStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('Added to your order');
  scene.actions([{ label: 'Continue', goto: ['food_menu', ''] }]);
  // TODO-QSP: end
  scene.build();
}

function enterBlackRussianText(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAfteralcohol(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/shared/drinks/blackrussian.jpg');
  // TODO-QSP: dynamic text: You drink a Black Russian, and<<$mtxt>>
  scene.text(`You drink a Black Russian, and${((s as any).mtxt || '')}`);
  // TODO-QSP: end
  scene.build();
}

function enterBlackRussianStats(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'drugs', 'alcohol', 'vodka');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterBlackRussian(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_health ?? 0) <= 20) {
    scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc', 'loc_arg'); } }]);
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    // TODO-QSP: gs 'money', 'pay', _drink['<<args[1]>>,price']
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBlackRussianStats(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBlackRussianText(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetExit(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterOnlyCostBlackRussian(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'pay', _drink['<<args[1]>>,price']
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBlackRussianStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('Added to your order');
  scene.actions([{ label: 'Continue', goto: ['food_menu', ''] }]);
  // TODO-QSP: end
  scene.build();
}

function enterScotchText(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAfteralcohol(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/shared/drinks/scotch.jpg');
  // TODO-QSP: dynamic text: You drink scotch on the rocks, and<<$mtxt>>
  scene.text(`You drink scotch on the rocks, and${((s as any).mtxt || '')}`);
  // TODO-QSP: end
  scene.build();
}

function enterScotchStats(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'drugs', 'alcohol', 'scotch');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterScotch(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_health ?? 0) <= 20) {
    scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc', 'loc_arg'); } }]);
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    // TODO-QSP: gs 'money', 'pay', _drink['<<args[1]>>,price']
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterScotchStats(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterScotchText(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetExit(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterOnlyCostScotch(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'pay', _drink['<<args[1]>>,price']
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterScotchStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('Added to your order');
  scene.actions([{ label: 'Continue', goto: ['food_menu', ''] }]);
  // TODO-QSP: end
  scene.build();
}

function enterVodkaMartiniText(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAfteralcohol(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/shared/drinks/martini.jpg');
  // TODO-QSP: dynamic text: You drink a vodka martini, and<<$mtxt>>
  scene.text(`You drink a vodka martini, and${((s as any).mtxt || '')}`);
  // TODO-QSP: end
  scene.build();
}

function enterVodkaMartiniStats(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'drugs', 'alcohol', 'vodka');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterVodkaMartini(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_health ?? 0) <= 20) {
    scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc', 'loc_arg'); } }]);
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    // TODO-QSP: gs 'money', 'pay', _drink['<<args[1]>>,price']
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterVodkaMartiniStats(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterVodkaMartiniText(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetExit(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterOnlyCostVodkaMartini(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'pay', _drink['<<args[1]>>,price']
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterVodkaMartiniStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('Added to your order');
  scene.actions([{ label: 'Continue', goto: ['food_menu', ''] }]);
  // TODO-QSP: end
  scene.build();
}

function enterChampagneText(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAfteralcohol(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/shared/drinks/champagne.jpg');
  // TODO-QSP: dynamic text: You drink some champagne, and<<$mtxt>>
  scene.text(`You drink some champagne, and${((s as any).mtxt || '')}`);
  // TODO-QSP: end
  scene.build();
}

function enterChampagneStats(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'drugs', 'alcohol', 'champagne');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterChampagne(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_health ?? 0) <= 20) {
    scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc', 'loc_arg'); } }]);
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    // TODO-QSP: gs 'money', 'pay', _drink['<<args[1]>>,price']
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterChampagneStats(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterChampagneText(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetExit(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterOnlyCostChampagne(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'pay', _drink['<<args[1]>>,price']
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterChampagneStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('Added to your order');
  scene.actions([{ label: 'Continue', goto: ['food_menu', ''] }]);
  // TODO-QSP: end
  scene.build();
}

function enterCocktailText(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAfteralcohol(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img(`images/shared/drinks/cocktail${Math.floor(Math.random() * 4) + 1}.jpg`);
  // TODO-QSP: dynamic text: You drink a fancy cocktail and<<$mtxt>>
  scene.text(`You drink a fancy cocktail and${((s as any).mtxt || '')}`);
  // TODO-QSP: end
  scene.build();
}

function enterCocktailStats(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'raise', 'small');
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 41) + 10);
  qspCall(s, 'drugs', 'alcohol', 'rum');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterCocktail(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_health ?? 0) <= 20) {
    scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc', 'loc_arg'); } }]);
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    // TODO-QSP: gs 'money', 'pay', _drink['<<args[1]>>,price']
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCocktailStats(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCocktailText(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetExit(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterOnlyCostCocktail(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'pay', _drink['<<args[1]>>,price']
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCocktailStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('Added to your order');
  scene.actions([{ label: 'Continue', goto: ['food_menu', ''] }]);
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'set_exit':
      enterSetExit(s, scene);
      break;
    case 'afteralcohol':
      enterAfteralcohol(s, scene);
      break;
    case 'afterdrink':
      enterAfterdrink(s, scene);
      break;
    case 'watercooler':
      enterWatercooler(s, scene);
      break;
    case 'bbr':
      enterBbr(s, scene);
      break;
    case 'water_text':
      enterWaterText(s, scene);
      break;
    case 'water_stats':
      enterWaterStats(s, scene);
      break;
    case 'water':
      enterWater(s, scene);
      break;
    case 'only_cost_water':
      enterOnlyCostWater(s, scene);
      break;
    case 'tea_text':
      enterTeaText(s, scene);
      break;
    case 'tea_stats':
      enterTeaStats(s, scene);
      break;
    case 'tea':
      enterTea(s, scene);
      break;
    case 'only_cost_tea':
      enterOnlyCostTea(s, scene);
      break;
    case 'juice_text':
      enterJuiceText(s, scene);
      break;
    case 'juice_stats':
      enterJuiceStats(s, scene);
      break;
    case 'juice':
      enterJuice(s, scene);
      break;
    case 'only_cost_juice':
      enterOnlyCostJuice(s, scene);
      break;
    case 'coffee_text':
      enterCoffeeText(s, scene);
      break;
    case 'coffee_stats':
      enterCoffeeStats(s, scene);
      break;
    case 'coffee':
      enterCoffee(s, scene);
      break;
    case 'only_cost_coffee':
      enterOnlyCostCoffee(s, scene);
      break;
    case 'espresso_text':
      enterEspressoText(s, scene);
      break;
    case 'espresso_stats':
      enterEspressoStats(s, scene);
      break;
    case 'espresso':
      enterEspresso(s, scene);
      break;
    case 'only_cost_espresso':
      enterOnlyCostEspresso(s, scene);
      break;
    case 'kvass_text':
      enterKvassText(s, scene);
      break;
    case 'kvass_stats':
      enterKvassStats(s, scene);
      break;
    case 'kvass':
      enterKvass(s, scene);
      break;
    case 'only_cost_kvass':
      enterOnlyCostKvass(s, scene);
      break;
    case 'milkshake_text':
      enterMilkshakeText(s, scene);
      break;
    case 'milkshake_stats':
      enterMilkshakeStats(s, scene);
      break;
    case 'milkshake':
      enterMilkshake(s, scene);
      break;
    case 'only_cost_milkshake':
      enterOnlyCostMilkshake(s, scene);
      break;
    case 'energy_drink_text':
      enterEnergyDrinkText(s, scene);
      break;
    case 'energy_drink_stats':
      enterEnergyDrinkStats(s, scene);
      break;
    case 'energy_drink':
      enterEnergyDrink(s, scene);
      break;
    case 'only_cost_energy_drink':
      enterOnlyCostEnergyDrink(s, scene);
      break;
    case 'beer_text':
      enterBeerText(s, scene);
      break;
    case 'beer_stats':
      enterBeerStats(s, scene);
      break;
    case 'beer':
      enterBeer(s, scene);
      break;
    case 'only_cost_beer':
      enterOnlyCostBeer(s, scene);
      break;
    case 'wine_text':
      enterWineText(s, scene);
      break;
    case 'wine_stats':
      enterWineStats(s, scene);
      break;
    case 'wine':
      enterWine(s, scene);
      break;
    case 'only_cost_wine':
      enterOnlyCostWine(s, scene);
      break;
    case 'vodka_text':
      enterVodkaText(s, scene);
      break;
    case 'vodka_stats':
      enterVodkaStats(s, scene);
      break;
    case 'vodka':
      enterVodka(s, scene);
      break;
    case 'only_cost_vodka':
      enterOnlyCostVodka(s, scene);
      break;
    case 'black_russian_text':
      enterBlackRussianText(s, scene);
      break;
    case 'black_russian_stats':
      enterBlackRussianStats(s, scene);
      break;
    case 'black_russian':
      enterBlackRussian(s, scene);
      break;
    case 'only_cost_black_russian':
      enterOnlyCostBlackRussian(s, scene);
      break;
    case 'scotch_text':
      enterScotchText(s, scene);
      break;
    case 'scotch_stats':
      enterScotchStats(s, scene);
      break;
    case 'scotch':
      enterScotch(s, scene);
      break;
    case 'only_cost_scotch':
      enterOnlyCostScotch(s, scene);
      break;
    case 'vodka_martini_text':
      enterVodkaMartiniText(s, scene);
      break;
    case 'vodka_martini_stats':
      enterVodkaMartiniStats(s, scene);
      break;
    case 'vodka_martini':
      enterVodkaMartini(s, scene);
      break;
    case 'only_cost_vodka_martini':
      enterOnlyCostVodkaMartini(s, scene);
      break;
    case 'champagne_text':
      enterChampagneText(s, scene);
      break;
    case 'champagne_stats':
      enterChampagneStats(s, scene);
      break;
    case 'champagne':
      enterChampagne(s, scene);
      break;
    case 'only_cost_champagne':
      enterOnlyCostChampagne(s, scene);
      break;
    case 'cocktail_text':
      enterCocktailText(s, scene);
      break;
    case 'cocktail_stats':
      enterCocktailStats(s, scene);
      break;
    case 'cocktail':
      enterCocktail(s, scene);
      break;
    case 'only_cost_cocktail':
      enterOnlyCostCocktail(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const beverage: LocationDef = {
  name: 'beverage',
  title: 'Added to your order',
  region: 'other',
  enter: enter,
};
