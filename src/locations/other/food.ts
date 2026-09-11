import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterAftermeal(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_energy ?? 0) > 100) {
  } else {
    if (((s as any).pcs_energy ?? 0) >= 80) {
    } else {
      if (((s as any).pcs_energy ?? 0) >= 60) {
      } else {
        if (((s as any).pcs_energy ?? 0) >= 40) {
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterFamilyMeals(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
  qspCall(s, 'mood', 'raise', 'tiny');
  (s as any).fat = ((s as any).fat ?? 0) + (((((s as any).locArgs?.[1] ?? 0) === 'dinner') ? (8) : (6)));
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (60);
  if (((s as any).pcs_hydra ?? 0) < 20) {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (80);
  } else {
    if (((s as any).pcs_hydra ?? 0) < 100) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (60);
    } else {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (30);
    }
  }
  (s as any).cumspclnt = 2;
  qspCall(s, 'cum_cleanup', '');
  (s as any).pcs_breath = 0;
  // TODO-QSP: end
  scene.build();
}

function enterSetExit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).loc ?? 0) === 'uni_cafe') {
    (s as any).uni_lunch_bought = 1;
    qspCall(s, 'uni_cafe', 'sitting_choice');
  } else {
    if (((s as any).food_loc ?? 0) === 1  &&  ((s as any).loc ?? 0) !== 'brothel') {
      scene.actions([
        { label: 'Finish', goto: ['food_menu', ''] },
      ]);
    } else {
      scene.actions([
        { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPiroshText(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'food', 'aftermeal');
  scene.img('images/shared/food/pirozhki.jpg');
  if (((s as any).loc ?? 0) === 'uni_cafe') {
    scene.text('You buy some vegetarian Piroshki.');
  } else {
    // TODO-QSP: dynamic text: You enjoy some vegetarian Piroshki, and<<$mtxt>>
    scene.text(`You enjoy some vegetarian Piroshki, and${((s as any).mtxt ?? 0)}`);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPiroshStats(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 0;
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
  qspCall(s, 'mood', 'raise', 2);
  (s as any).fat = ((s as any).fat ?? 0) + (4);
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (40);
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (((((s as any).pcs_hydra ?? 0) >= 100) ? (5) : (10)));
  qspCall(s, 'cum_cleanup', '', 2);
  (s as any).pcs_breath = 0;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterPirosh(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'pirosh_stats');
  qspCall(s, 'food', 'pirosh_text');
  qspCall(s, 'food', 'set_exit');
  // TODO-QSP: end
  scene.build();
}

function enterOnlyCostPirosh(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'pirosh_stats');
  if (((s as any).loc ?? 0) === 'uni_cafe') {
    (s as any).uni_lunch_bought = 1;
  }
  scene.text('Added to your order');
  scene.actions([{ label: 'Continue', goto: ['food_menu', ''] }]);
  // TODO-QSP: end
  scene.build();
}

function enterGolubText(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'food', 'aftermeal');
  scene.img('images/shared/food/golubtsy.jpg');
  if (((s as any).loc ?? 0) === 'uni_cafe') {
    scene.text('You buy some well-made Golubtsy in a tomato sauce. The portion is of moderate size.');
  } else {
    // TODO-QSP: dynamic text: You enjoy some well made Golubtsy in a tomato sauce. The portions were moderate ...
    scene.text(`You enjoy some well made Golubtsy in a tomato sauce. The portions were moderate and${((s as any).mtxt ?? 0)}`);
  }
  // TODO-QSP: end
  scene.build();
}

function enterGolubStats(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 0;
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
  qspCall(s, 'mood', 'raise', 2);
  (s as any).fat = ((s as any).fat ?? 0) + (8);
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (60);
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (((((s as any).pcs_hydra ?? 0) >= 100) ? (10) : (20)));
  qspCall(s, 'cum_cleanup', '', 2);
  (s as any).pcs_breath = 0;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterGolub(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'golub_stats');
  qspCall(s, 'food', 'golub_text');
  qspCall(s, 'food', 'set_exit');
  // TODO-QSP: end
  scene.build();
}

function enterOnlyCostGolub(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'golub_stats');
  if (((s as any).loc ?? 0) === 'uni_cafe') {
    (s as any).uni_lunch_bought = 1;
  }
  scene.text('Added to your order');
  scene.actions([{ label: 'Continue', goto: ['food_menu', ''] }]);
  // TODO-QSP: end
  scene.build();
}

function enterPozharText(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'food', 'aftermeal');
  scene.img('images/shared/food/pozharsky.jpg');
  if (((s as any).loc ?? 0) === 'uni_cafe') {
    scene.text('You buy Pozharsky cutlets. The portions are of moderate size.');
  } else {
    // TODO-QSP: dynamic text: You thoroughly enjoy the nicely cooked Pozharsky Cutlets. The portions were mode...
    scene.text(`You thoroughly enjoy the nicely cooked Pozharsky Cutlets. The portions were moderate and${((s as any).mtxt ?? 0)}`);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPozharStats(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 0;
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (15);
  qspCall(s, 'mood', 'raise', 'tiny');
  (s as any).fat = ((s as any).fat ?? 0) + (6);
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (70);
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (((((s as any).pcs_hydra ?? 0) >= 100) ? (5) : (10)));
  qspCall(s, 'cum_cleanup', '', 2);
  (s as any).pcs_breath = 0;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterPozhar(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'pozhar_stats');
  qspCall(s, 'food', 'pozhar_text');
  qspCall(s, 'food', 'set_exit');
  // TODO-QSP: end
  scene.build();
}

function enterOnlyCostPozhar(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'pozhar_stats');
  if (((s as any).loc ?? 0) === 'uni_cafe') {
    (s as any).uni_lunch_bought = 1;
  }
  scene.text('Added to your order');
  scene.actions([{ label: 'Continue', goto: ['food_menu', ''] }]);
  // TODO-QSP: end
  scene.build();
}

function enterReubenText(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'food', 'aftermeal');
  scene.img('images/shared/food/reuben.jpg');
  if (((s as any).loc ?? 0) === 'uni_cafe') {
    scene.text('You buy a Reuben sandwich. It is quite large.');
  } else {
    // TODO-QSP: dynamic text: You had trouble finishing the Reuben sandwich, but you enjoyed it immensely. The...
    scene.text(`You had trouble finishing the Reuben sandwich, but you enjoyed it immensely. The portion was fairly large and${((s as any).mtxt ?? 0)}`);
  }
  // TODO-QSP: end
  scene.build();
}

function enterReubenStats(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 0;
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (20);
  qspCall(s, 'mood', 'raise', 'small');
  (s as any).fat = ((s as any).fat ?? 0) + (12);
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (110);
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (((((s as any).pcs_hydra ?? 0) >= 100) ? (5) : (10)));
  qspCall(s, 'cum_cleanup', '', 2);
  (s as any).pcs_breath = 0;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterReuben(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 25;
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'reuben_stats');
  qspCall(s, 'food', 'reuben_text');
  qspCall(s, 'food', 'set_exit');
  // TODO-QSP: end
  scene.build();
}

function enterOnlyCostReuben(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'reuben_stats');
  if (((s as any).loc ?? 0) === 'uni_cafe') {
    (s as any).uni_lunch_bought = 1;
  }
  scene.text('Added to your order');
  scene.actions([{ label: 'Continue', goto: ['food_menu', ''] }]);
  // TODO-QSP: end
  scene.build();
}

function enterBlinyText(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'food', 'aftermeal');
  scene.img('images/shared/food/blini.jpg');
  if (((s as any).loc ?? 0) === 'uni_cafe') {
    scene.text('You buy some bliny. The portions are fairly small.');
  } else {
    // TODO-QSP: dynamic text: You eat some bliny. The portions are fairly small and<<$mtxt>>
    scene.text(`You eat some bliny. The portions are fairly small and${((s as any).mtxt ?? 0)}`);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBlinyStats(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 0;
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
  qspCall(s, 'mood', 'raise', 1);
  (s as any).fat = ((s as any).fat ?? 0) + (8);
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (50);
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (((((s as any).pcs_hydra ?? 0) >= 100) ? (5) : (10)));
  qspCall(s, 'cum_cleanup', '', 2);
  (s as any).pcs_breath = 0;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterBliny(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'bliny_stats');
  qspCall(s, 'food', 'bliny_text');
  qspCall(s, 'food', 'set_exit');
  // TODO-QSP: end
  scene.build();
}

function enterOnlyCostBliny(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'bliny_stats');
  if (((s as any).loc ?? 0) === 'uni_cafe') {
    (s as any).uni_lunch_bought = 1;
  }
  scene.text('Added to your order');
  scene.actions([{ label: 'Continue', goto: ['food_menu', ''] }]);
  // TODO-QSP: end
  scene.build();
}

function enterVarenfanText(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'food', 'aftermeal');
  scene.img('images/shared/food/varenikifancy.jpg');
  // TODO-QSP: dynamic text: You sit and eat a plate of yummy Vareniki with potatoes. The portions are fairly...
  scene.text(`You sit and eat a plate of yummy Vareniki with potatoes. The portions are fairly moderate and${((s as any).mtxt ?? 0)}`);
  // TODO-QSP: end
  scene.build();
}

function enterVarenfanStats(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 0;
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (15);
  qspCall(s, 'mood', 'raise', 'tiny');
  (s as any).fat = ((s as any).fat ?? 0) + (10);
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (40);
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (((((s as any).pcs_hydra ?? 0) >= 100) ? (5) : (10)));
  qspCall(s, 'cum_cleanup', '', 2);
  (s as any).pcs_breath = 0;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterVarenfan(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 25;
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'varenfan_stats');
  qspCall(s, 'food', 'varenfan_text');
  qspCall(s, 'food', 'set_exit');
  // TODO-QSP: end
  scene.build();
}

function enterOnlyCostVarenfan(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'varenfan_stats');
  if (((s as any).loc ?? 0) === 'uni_cafe') {
    (s as any).uni_lunch_bought = 1;
  }
  scene.text('Added to your order');
  scene.actions([{ label: 'Continue', goto: ['food_menu', ''] }]);
  // TODO-QSP: end
  scene.build();
}

function enterSalfanText(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'food', 'aftermeal');
  scene.img('images/shared/food/salmonfancy.jpg');
  // TODO-QSP: dynamic text: You thoroughly enjoy the massive fresh salmon steak. The meal was simply colossa...
  scene.text(`You thoroughly enjoy the massive fresh salmon steak. The meal was simply colossal and${((s as any).mtxt ?? 0)}`);
  // TODO-QSP: end
  scene.build();
}

function enterSalfanStats(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 0;
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (20);
  qspCall(s, 'mood', 'raise', 'small');
  (s as any).fat = ((s as any).fat ?? 0) + (12);
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (80);
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (((((s as any).pcs_hydra ?? 0) >= 100) ? (5) : (10)));
  qspCall(s, 'cum_cleanup', '', 2);
  (s as any).pcs_breath = 0;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterSalfan(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 40;
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'salfan_stats');
  qspCall(s, 'food', 'salfan_text');
  qspCall(s, 'food', 'set_exit');
  // TODO-QSP: end
  scene.build();
}

function enterOnlyCostSalfan(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'salfan_stats');
  if (((s as any).loc ?? 0) === 'uni_cafe') {
    (s as any).uni_lunch_bought = 1;
  }
  scene.text('Added to your order');
  scene.actions([{ label: 'Continue', goto: ['food_menu', ''] }]);
  // TODO-QSP: end
  scene.build();
}

function enterStrofanText(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'food', 'aftermeal');
  scene.img('images/shared/food/stroganofffancy.jpg');
  // TODO-QSP: dynamic text: You are loving the delicious Beef Stroganoff. You enjoy it immensely. The portio...
  scene.text(`You are loving the delicious Beef Stroganoff. You enjoy it immensely. The portion was fairly moderate and${((s as any).mtxt ?? 0)}`);
  // TODO-QSP: end
  scene.build();
}

function enterStrofanStats(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 0;
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (20);
  qspCall(s, 'mood', 'raise', 'small');
  (s as any).fat = ((s as any).fat ?? 0) + (6);
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (120);
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (((((s as any).pcs_hydra ?? 0) >= 100) ? (5) : (10)));
  qspCall(s, 'cum_cleanup', '', 2);
  (s as any).pcs_breath = 0;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterStrofan(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 35;
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'strofan_stats');
  qspCall(s, 'food', 'strofan_text');
  qspCall(s, 'food', 'set_exit');
  // TODO-QSP: end
  scene.build();
}

function enterOnlyCostStrofan(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'strofan_stats');
  if (((s as any).loc ?? 0) === 'uni_cafe') {
    (s as any).uni_lunch_bought = 1;
  }
  scene.text('Added to your order');
  scene.actions([{ label: 'Continue', goto: ['food_menu', ''] }]);
  // TODO-QSP: end
  scene.build();
}

function enterBorfanText(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'food', 'aftermeal');
  scene.img('images/shared/food/borschtfancy.jpg');
  // TODO-QSP: dynamic text: You have a steaming hot bowl of Borscht. The portions are fairly small and<<$mtx...
  scene.text(`You have a steaming hot bowl of Borscht. The portions are fairly small and${((s as any).mtxt ?? 0)}`);
  // TODO-QSP: end
  scene.build();
}

function enterBorfanStats(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 0;
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
  qspCall(s, 'mood', 'raise', 'small');
  (s as any).fat = ((s as any).fat ?? 0) + (4);
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (60);
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (((((s as any).pcs_hydra ?? 0) >= 100) ? (20) : (40)));
  qspCall(s, 'cum_cleanup', '', 2);
  (s as any).pcs_breath = 0;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterBorfan(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 25;
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'borfan_stats');
  qspCall(s, 'food', 'borfan_text');
  qspCall(s, 'food', 'set_exit');
  // TODO-QSP: end
  scene.build();
}

function enterOnlyCostBorfan(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'borfan_stats');
  if (((s as any).loc ?? 0) === 'uni_cafe') {
    (s as any).uni_lunch_bought = 1;
  }
  scene.text('Added to your order');
  scene.actions([{ label: 'Continue', goto: ['food_menu', ''] }]);
  // TODO-QSP: end
  scene.build();
}

function enterBlifanText(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'food', 'aftermeal');
  scene.img('images/shared/food/blinifancy.jpg');
  // TODO-QSP: dynamic text: You eat a petite caviar bliny appetiser. The portions are fairly small and<<$mtx...
  scene.text(`You eat a petite caviar bliny appetiser. The portions are fairly small and${((s as any).mtxt ?? 0)}`);
  // TODO-QSP: end
  scene.build();
}

function enterBlifanStats(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 0;
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (30);
  qspCall(s, 'mood', 'raise', 'medium');
  (s as any).fat = ((s as any).fat ?? 0) + (6);
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (50);
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (((((s as any).pcs_hydra ?? 0) >= 100) ? (5) : (10)));
  qspCall(s, 'cum_cleanup', '', 2);
  (s as any).pcs_breath = 0;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterBlifan(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'blifan_stats');
  qspCall(s, 'food', 'blifan_text');
  qspCall(s, 'food', 'set_exit');
  // TODO-QSP: end
  scene.build();
}

function enterOnlyCostBlifan(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'blifan_stats');
  if (((s as any).loc ?? 0) === 'uni_cafe') {
    (s as any).uni_lunch_bought = 1;
  }
  scene.text('Added to your order');
  scene.actions([{ label: 'Continue', goto: ['food_menu', ''] }]);
  // TODO-QSP: end
  scene.build();
}

function enterRyesnaText(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'food', 'aftermeal');
  scene.img('images/shared/food/ryesnack.jpg');
  // TODO-QSP: dynamic text: You have a tasty bowl of toasted rye snacks. The portions are fairly small and<<...
  scene.text(`You have a tasty bowl of toasted rye snacks. The portions are fairly small and${((s as any).mtxt ?? 0)}`);
  // TODO-QSP: end
  scene.build();
}

function enterRyesnaStats(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 0;
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (((s as any).pcs_health ?? 0) / 10);
  qspCall(s, 'mood', 'raise', 3);
  (s as any).fat = ((s as any).fat ?? 0) + (4);
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (20);
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (((((s as any).pcs_hydra ?? 0) >= 100) ? (5) : (10)));
  qspCall(s, 'cum_cleanup', '', 2);
  (s as any).pcs_breath = 0;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterRyesna(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'ryesna_stats');
  qspCall(s, 'food', 'ryesna_text');
  qspCall(s, 'food', 'set_exit');
  // TODO-QSP: end
  scene.build();
}

function enterOnlyCostRyesna(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'ryesna_stats');
  if (((s as any).loc ?? 0) === 'uni_cafe') {
    (s as any).uni_lunch_bought = 1;
  }
  scene.text('Added to your order');
  scene.actions([{ label: 'Continue', goto: ['food_menu', ''] }]);
  // TODO-QSP: end
  scene.build();
}

function enterCrispsText(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'food', 'aftermeal');
  scene.img('images/shared/food/crisps.jpg');
  // TODO-QSP: dynamic text: You enjoy the salty flavour of a bowl of crisps. The portions are fairly small a...
  scene.text(`You enjoy the salty flavour of a bowl of crisps. The portions are fairly small and${((s as any).mtxt ?? 0)}`);
  // TODO-QSP: end
  scene.build();
}

function enterCrispsStats(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 0;
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (((s as any).pcs_health ?? 0) / 10);
  qspCall(s, 'mood', 'raise', 'tiny');
  (s as any).fat = ((s as any).fat ?? 0) + (16);
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (20);
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (((((s as any).pcs_hydra ?? 0) >= 100) ? (5) : (10)));
  qspCall(s, 'cum_cleanup', '', 2);
  (s as any).pcs_breath = 0;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterCrisps(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'crisps_stats');
  qspCall(s, 'food', 'crisps_text');
  qspCall(s, 'food', 'set_exit');
  // TODO-QSP: end
  scene.build();
}

function enterOnlyCostCrisps(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'crisps_stats');
  if (((s as any).loc ?? 0) === 'uni_cafe') {
    (s as any).uni_lunch_bought = 1;
  }
  scene.text('Added to your order');
  scene.actions([{ label: 'Continue', goto: ['food_menu', ''] }]);
  // TODO-QSP: end
  scene.build();
}

function enterOnringText(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'food', 'aftermeal');
  scene.img('images/shared/food/onionrings.jpg');
  // TODO-QSP: dynamic text: You push yourself to eat the dry fatty onion rings. The portions are fairly smal...
  scene.text(`You push yourself to eat the dry fatty onion rings. The portions are fairly small and${((s as any).mtxt ?? 0)}`);
  // TODO-QSP: end
  scene.build();
}

function enterOnringStats(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 0;
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
  qspCall(s, 'mood', 'raise', 2);
  (s as any).fat = ((s as any).fat ?? 0) + (16);
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (40);
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (((((s as any).pcs_hydra ?? 0) >= 100) ? (5) : (10)));
  qspCall(s, 'cum_cleanup', '', 2);
  (s as any).pcs_breath = 0;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterOnring(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'onring_stats');
  qspCall(s, 'food', 'onring_text');
  qspCall(s, 'food', 'set_exit');
  // TODO-QSP: end
  scene.build();
}

function enterOnlyCostOnring(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'onring_stats');
  if (((s as any).loc ?? 0) === 'uni_cafe') {
    (s as any).uni_lunch_bought = 1;
  }
  scene.text('Added to your order');
  scene.actions([{ label: 'Continue', goto: ['food_menu', ''] }]);
  // TODO-QSP: end
  scene.build();
}

function enterVegburgText(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'food', 'aftermeal');
  scene.img('images/shared/food/vegieburger.jpg');
  // TODO-QSP: dynamic text: You eat the delicious veggieburger. The portions are fairly small and<<$mtxt>>
  scene.text(`You eat the delicious veggieburger. The portions are fairly small and${((s as any).mtxt ?? 0)}`);
  // TODO-QSP: end
  scene.build();
}

function enterVegburgStats(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 0;
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (20);
  qspCall(s, 'mood', 'raise', 3);
  (s as any).fat = ((s as any).fat ?? 0) + (8);
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (60);
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (((((s as any).pcs_hydra ?? 0) >= 100) ? (5) : (10)));
  qspCall(s, 'cum_cleanup', '', 2);
  (s as any).pcs_breath = 0;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterVegburg(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'vegburg_stats');
  qspCall(s, 'food', 'vegburg_text');
  qspCall(s, 'food', 'set_exit');
  // TODO-QSP: end
  scene.build();
}

function enterOnlyCostVegburg(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'vegburg_stats');
  if (((s as any).loc ?? 0) === 'uni_cafe') {
    (s as any).uni_lunch_bought = 1;
  }
  scene.text('Added to your order');
  scene.actions([{ label: 'Continue', goto: ['food_menu', ''] }]);
  // TODO-QSP: end
  scene.build();
}

function enterTurburgText(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'food', 'aftermeal');
  scene.img('images/shared/food/turkeyburger.jpg');
  // TODO-QSP: dynamic text: You enjoy the turkey burger. The portions are fairly small and<<$mtxt>>
  scene.text(`You enjoy the turkey burger. The portions are fairly small and${((s as any).mtxt ?? 0)}`);
  // TODO-QSP: end
  scene.build();
}

function enterTurburgStats(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 0;
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
  qspCall(s, 'mood', 'raise', 3);
  (s as any).fat = ((s as any).fat ?? 0) + (10);
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (60);
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (((((s as any).pcs_hydra ?? 0) >= 100) ? (5) : (10)));
  qspCall(s, 'cum_cleanup', '', 2);
  (s as any).pcs_breath = 0;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterTurburg(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'turburg_stats');
  qspCall(s, 'food', 'turburg_text');
  qspCall(s, 'food', 'set_exit');
  // TODO-QSP: end
  scene.build();
}

function enterOnlyCostTurburg(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'turburg_stats');
  if (((s as any).loc ?? 0) === 'uni_cafe') {
    (s as any).uni_lunch_bought = 1;
  }
  scene.text('Added to your order');
  scene.actions([{ label: 'Continue', goto: ['food_menu', ''] }]);
  // TODO-QSP: end
  scene.build();
}

function enterBatfishText(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'food', 'aftermeal');
  scene.img('images/shared/food/batteredfish.jpg');
  // TODO-QSP: dynamic text: You eat the fish, but it has little flavour. The portions were moderate and<<$mt...
  scene.text(`You eat the fish, but it has little flavour. The portions were moderate and${((s as any).mtxt ?? 0)}`);
  // TODO-QSP: end
  scene.build();
}

function enterBatfishStats(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 0;
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (15);
  qspCall(s, 'mood', 'raise', 1);
  (s as any).fat = ((s as any).fat ?? 0) + (11);
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (80);
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (((((s as any).pcs_hydra ?? 0) >= 100) ? (5) : (10)));
  qspCall(s, 'cum_cleanup', '', 2);
  (s as any).pcs_breath = 0;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterBatfish(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'batfish_stats');
  qspCall(s, 'food', 'batfish_text');
  qspCall(s, 'food', 'set_exit');
  // TODO-QSP: end
  scene.build();
}

function enterOnlyCostBatfish(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'batfish_stats');
  if (((s as any).loc ?? 0) === 'uni_cafe') {
    (s as any).uni_lunch_bought = 1;
  }
  scene.text('Added to your order');
  scene.actions([{ label: 'Continue', goto: ['food_menu', ''] }]);
  // TODO-QSP: end
  scene.build();
}

function enterCheeseburgerText(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'food', 'aftermeal');
  scene.img('images/shared/food/cheeseburger.jpg');
  // TODO-QSP: dynamic text: You are a little sickened by the greasy looking cheeseburger and fries in front ...
  scene.text(`You are a little sickened by the greasy looking cheeseburger and fries in front of you. The meal was simply colossal and${((s as any).mtxt ?? 0)}`);
  // TODO-QSP: end
  scene.build();
}

function enterCheeseburgerStats(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 0;
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (20);
  qspCall(s, 'mood', 'raise', 'small');
  (s as any).fat = ((s as any).fat ?? 0) + (14);
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (120);
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (((((s as any).pcs_hydra ?? 0) >= 100) ? (5) : (10)));
  qspCall(s, 'cum_cleanup', '', 2);
  (s as any).pcs_breath = 0;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterCheeseburger(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 25;
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'cheeseburger_stats');
  qspCall(s, 'food', 'cheeseburger_text');
  qspCall(s, 'food', 'set_exit');
  // TODO-QSP: end
  scene.build();
}

function enterOnlyCostCheeseburger(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'cheeseburger_stats');
  if (((s as any).loc ?? 0) === 'uni_cafe') {
    (s as any).uni_lunch_bought = 1;
  }
  scene.text('Added to your order');
  scene.actions([{ label: 'Continue', goto: ['food_menu', ''] }]);
  // TODO-QSP: end
  scene.build();
}

function enterSnackText(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'food', 'aftermeal');
  scene.img('images/shared/food/snack_1.jpg');
  // TODO-QSP: dynamic text: You enjoy a small tasty, but somewhat fattening, snack. It wasn't very much food...
  scene.text(`You enjoy a small tasty, but somewhat fattening, snack. It wasn't very much food, and${((s as any).mtxt ?? 0)}`);
  // TODO-QSP: end
  scene.build();
}

function enterSnackStats(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
  qspCall(s, 'mood', 'raise', 'tiny');
  (s as any).fat = ((s as any).fat ?? 0) + (6);
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (20);
  qspCall(s, 'cum_cleanup', '', 2);
  (s as any).pcs_breath = 0;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterSnack(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'snack_stats');
  qspCall(s, 'food', 'snack_text');
  qspCall(s, 'food', 'set_exit');
  // TODO-QSP: end
  scene.build();
}

function enterOnlyCostSnack(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'snack_stats');
  if (((s as any).loc ?? 0) === 'uni_cafe') {
    (s as any).uni_lunch_bought = 1;
  }
  scene.text('Added to your order');
  scene.actions([{ label: 'Continue', goto: ['food_menu', ''] }]);
  // TODO-QSP: end
  scene.build();
}

function enterLightSnackText(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'food', 'aftermeal');
  scene.img('images/shared/food/snack_1.jpg');
  // TODO-QSP: dynamic text: You enjoy a small tasty, but somewhat fattening, snack. It wasn't very much food...
  scene.text(`You enjoy a small tasty, but somewhat fattening, snack. It wasn't very much food, and${((s as any).mtxt ?? 0)}`);
  // TODO-QSP: end
  scene.build();
}

function enterLightSnackStats(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
  qspCall(s, 'mood', 'raise', 'tiny');
  (s as any).fat = ((s as any).fat ?? 0) + (3);
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (20);
  qspCall(s, 'cum_cleanup', '', 2);
  (s as any).pcs_breath = 0;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterLightSnack(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'light_snack_stats');
  qspCall(s, 'food', 'light_snack_text');
  qspCall(s, 'food', 'set_exit');
  // TODO-QSP: end
  scene.build();
}

function enterOnlyCostLightSnack(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'light_snack_stats');
  scene.text('Added to your order');
  scene.actions([{ label: 'Continue', goto: ['food_menu', ''] }]);
  // TODO-QSP: end
  scene.build();
}

function enterFastFoodText(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'food', 'aftermeal');
  scene.img('images/shared/food/food.jpg');
  // TODO-QSP: dynamic text: You happily eat some fast food. The portions are quite generous and<<$mtxt>>
  scene.text(`You happily eat some fast food. The portions are quite generous and${((s as any).mtxt ?? 0)}`);
  // TODO-QSP: end
  scene.build();
}

function enterFastFoodStats(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 0;
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
  (s as any).fat = ((s as any).fat ?? 0) + (14);
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (70);
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (((((s as any).pcs_hydra ?? 0) >= 100) ? (35) : (70)));
  qspCall(s, 'cum_cleanup', '', 2);
  (s as any).pcs_breath = 0;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterFastFood(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'fast_food_stats');
  qspCall(s, 'food', 'fast_food_text');
  qspCall(s, 'food', 'set_exit');
  // TODO-QSP: end
  scene.build();
}

function enterOnlyCostFastFood(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'fast_food_stats');
  if (((s as any).loc ?? 0) === 'uni_cafe') {
    (s as any).uni_lunch_bought = 1;
  }
  scene.text('Added to your order');
  scene.actions([{ label: 'Continue', goto: ['food_menu', ''] }]);
  // TODO-QSP: end
  scene.build();
}

function enterSmallMealText(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'food', 'aftermeal');
  scene.img('images/shared/food/food_\' + rand(1, 4) + \'.jpg');
  // TODO-QSP: dynamic text: You happily eat your meal. The portions are fairly small and<<$mtxt>>
  scene.text(`You happily eat your meal. The portions are fairly small and${((s as any).mtxt ?? 0)}`);
  // TODO-QSP: end
  scene.build();
}

function enterSmallMealStats(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 0;
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
  (s as any).fat = ((s as any).fat ?? 0) + (4);
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (40);
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (((((s as any).pcs_hydra ?? 0) >= 100) ? (20) : (40)));
  qspCall(s, 'cum_cleanup', '', 2);
  (s as any).pcs_breath = 0;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterSmallMeal(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'small_meal_stats');
  qspCall(s, 'food', 'small_meal_text');
  qspCall(s, 'food', 'set_exit');
  // TODO-QSP: end
  scene.build();
}

function enterOnlyCostSmallMeal(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'small_meal_stats');
  if (((s as any).loc ?? 0) === 'uni_cafe') {
    (s as any).uni_lunch_bought = 1;
  }
  scene.text('Added to your order');
  scene.actions([{ label: 'Continue', goto: ['food_menu', ''] }]);
  // TODO-QSP: end
  scene.build();
}

function enterMediumMealText(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'food', 'aftermeal');
  scene.img('images/shared/food/food_\' + rand(1, 4) + \'.jpg');
  // TODO-QSP: dynamic text: You thoroughly enjoy the nicely cooked meal. The portions were moderate and<<$mt...
  scene.text(`You thoroughly enjoy the nicely cooked meal. The portions were moderate and${((s as any).mtxt ?? 0)}`);
  // TODO-QSP: end
  scene.build();
}

function enterMediumMealStats(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 0;
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
  (s as any).fat = ((s as any).fat ?? 0) + (8);
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (60);
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (((((s as any).pcs_hydra ?? 0) >= 100) ? (30) : (60)));
  qspCall(s, 'cum_cleanup', '', 2);
  (s as any).pcs_breath = 0;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterMediumMeal(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'medium_meal_stats');
  qspCall(s, 'food', 'medium_meal_text');
  qspCall(s, 'food', 'set_exit');
  // TODO-QSP: end
  scene.build();
}

function enterOnlyCostMediumMeal(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'medium_meal_stats');
  if (((s as any).loc ?? 0) === 'uni_cafe') {
    (s as any).uni_lunch_bought = 1;
  }
  scene.text('Added to your order');
  scene.actions([{ label: 'Continue', goto: ['food_menu', ''] }]);
  // TODO-QSP: end
  scene.build();
}

function enterLargeMealText(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'food', 'aftermeal');
  scene.img('images/shared/food/food_\' + rand(1, 4) + \'.jpg');
  // TODO-QSP: dynamic text: You are almost overwhelmed by the delicious meal laid before you and enjoy it im...
  scene.text(`You are almost overwhelmed by the delicious meal laid before you and enjoy it immensely. The meal was simply colossal and${((s as any).mtxt ?? 0)}`);
  // TODO-QSP: end
  scene.build();
}

function enterLargeMealStats(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 0;
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
  (s as any).fat = ((s as any).fat ?? 0) + (14);
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (100);
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (((((s as any).pcs_hydra ?? 0) >= 100) ? (50) : (100)));
  qspCall(s, 'cum_cleanup', '', 2);
  (s as any).pcs_breath = 0;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterLargeMeal(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'large_meal_stats');
  qspCall(s, 'food', 'large_meal_text');
  qspCall(s, 'food', 'set_exit');
  // TODO-QSP: end
  scene.build();
}

function enterOnlyCostLargeMeal(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'large_meal_stats');
  if (((s as any).loc ?? 0) === 'uni_cafe') {
    (s as any).uni_lunch_bought = 1;
  }
  scene.text('Added to your order');
  scene.actions([{ label: 'Continue', goto: ['food_menu', ''] }]);
  // TODO-QSP: end
  scene.build();
}

function enterBaggedLunchText(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'food', 'aftermeal');
  scene.img('images/shared/food/bagged_lunch.jpg');
  // TODO-QSP: dynamic text: You eat the lunch you packed from home. There was nothing fancy about it and<<$m...
  scene.text(`You eat the lunch you packed from home. There was nothing fancy about it and${((s as any).mtxt ?? 0)}`);
  // TODO-QSP: end
  scene.build();
}

function enterBaggedLunchStats(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 0;
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
  (s as any).fat = ((s as any).fat ?? 0) + (5);
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (40);
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (((((s as any).pcs_hydra ?? 0) >= 100) ? (30) : (60)));
  qspCall(s, 'cum_cleanup', '', 2);
  (s as any).pcs_breath = 0;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterBaggedLunch(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'food', 'bagged_lunch_stats');
  qspCall(s, 'food', 'bagged_lunch_text');
  qspCall(s, 'food', 'set_exit');
  // TODO-QSP: end
  scene.build();
}

function enterOnlyCostBaggedLunch(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'food', 'bagged_lunch_stats');
  if (((s as any).loc ?? 0) === 'uni_cafe') {
    (s as any).uni_lunch_bought = 1;
  }
  scene.text('Added to your order');
  scene.actions([{ label: 'Continue', goto: ['food_menu', ''] }]);
  // TODO-QSP: end
  scene.build();
}

function enterHotelFoodText(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'food', 'aftermeal');
  scene.img('images/locations/pavlovsk/hotel/roomservice.jpg');
  // TODO-QSP: dynamic text: The maid brings you a decent meal, <<$mtxt>>
  scene.text(`The maid brings you a decent meal, ${((s as any).mtxt ?? 0)}`);
  scene.text('You accompany it with a mug of tea.');
  // TODO-QSP: end
  scene.build();
}

function enterHotelFoodStats(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 0;
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
  (s as any).fat = ((s as any).fat ?? 0) + (7);
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (60);
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (((((s as any).pcs_hydra ?? 0) >= 100) ? (30) : (60)));
  qspCall(s, 'cum_cleanup', '', 2);
  (s as any).pcs_breath = 0;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterHotelFood(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 25;
  qspCall(s, 'money', 'pay', 100, 'cash');
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'hotel_food_stats');
  qspCall(s, 'food', 'hotel_food_text');
  qspCall(s, 'food', 'set_exit');
  // TODO-QSP: end
  scene.build();
}

function enterOnlyCostHotelFood(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'hotel_food_stats');
  if (((s as any).loc ?? 0) === 'uni_cafe') {
    (s as any).uni_lunch_bought = 1;
  }
  scene.text('Added to your order');
  scene.actions([{ label: 'Continue', goto: ['food_menu', ''] }]);
  // TODO-QSP: end
  scene.build();
}

function enterHealthyMealText(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'food', 'aftermeal');
  scene.img('images/shared/food/eating-salad.jpg');
  // TODO-QSP: dynamic text: You enjoy a crisp salad of fresh greens and<<$mtxt>>
  scene.text(`You enjoy a crisp salad of fresh greens and${((s as any).mtxt ?? 0)}`);
  // TODO-QSP: end
  scene.build();
}

function enterHealthyMealStats(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 0;
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (20);
  (s as any).fat = ((s as any).fat ?? 0) + (1);
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (50);
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (((((s as any).pcs_hydra ?? 0) >= 100) ? (25) : (50)));
  qspCall(s, 'cum_cleanup', '', 2);
  (s as any).pcs_breath = 0;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterHealthyMeal(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 25;
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'healthy_meal_stats');
  qspCall(s, 'food', 'healthy_meal_text');
  qspCall(s, 'food', 'set_exit');
  // TODO-QSP: end
  scene.build();
}

function enterOnlyCostHealthyMeal(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'healthy_meal_stats');
  if (((s as any).loc ?? 0) === 'uni_cafe') {
    (s as any).uni_lunch_bought = 1;
  }
  scene.text('Added to your order');
  scene.actions([{ label: 'Continue', goto: ['food_menu', ''] }]);
  // TODO-QSP: end
  scene.build();
}

function enterJerkyText(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'food', 'aftermeal');
  scene.img('images/locations/gadukino/hunters/jerky_mix.jpg');
  // TODO-QSP: dynamic text: You munch on some dried meat and trail mix. Not a full hot meal by any means but...
  scene.text(`You munch on some dried meat and trail mix. Not a full hot meal by any means but it's better than nothing, and${((s as any).mtxt ?? 0)}`);
  // TODO-QSP: end
  scene.build();
}

function enterJerkyStats(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 0;
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
  (s as any).fat = ((s as any).fat ?? 0) + (1);
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (15);
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (20);
  qspCall(s, 'cum_cleanup', '', 2);
  (s as any).pcs_breath = 0;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterJerky(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'jerky_stats');
  qspCall(s, 'food', 'jerky_text');
  qspCall(s, 'food', 'set_exit');
  // TODO-QSP: end
  scene.build();
}

function enterOnlyCostJerky(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'jerky_stats');
  if (((s as any).loc ?? 0) === 'uni_cafe') {
    (s as any).uni_lunch_bought = 1;
  }
  scene.text('Added to your order');
  scene.actions([{ label: 'Continue', goto: ['food_menu', ''] }]);
  // TODO-QSP: end
  scene.build();
}

function enterMeatStewText(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'food', 'aftermeal');
  scene.img('images/locations/gadukino/hunters/soup.jpg');
  // TODO-QSP: dynamic text: You thoroughly enjoy the nicely cooked meat stew, and<<$mtxt>>
  scene.text(`You thoroughly enjoy the nicely cooked meat stew, and${((s as any).mtxt ?? 0)}`);
  scene.text('You accompany it with a mug of tea.');
  // TODO-QSP: end
  scene.build();
}

function enterMeatStewStats(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 0;
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
  (s as any).fat = ((s as any).fat ?? 0) + (3);
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (50);
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (((((s as any).pcs_hydra ?? 0) >= 100) ? (10) : (20)));
  qspCall(s, 'cum_cleanup', '', 2);
  (s as any).pcs_breath = 0;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterMeatStew(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'meat_stew_stats');
  qspCall(s, 'food', 'meat_stew_text');
  qspCall(s, 'food', 'set_exit');
  // TODO-QSP: end
  scene.build();
}

function enterOnlyCostMeatStew(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'meat_stew_stats');
  if (((s as any).loc ?? 0) === 'uni_cafe') {
    (s as any).uni_lunch_bought = 1;
  }
  scene.text('Added to your order');
  scene.actions([{ label: 'Continue', goto: ['food_menu', ''] }]);
  // TODO-QSP: end
  scene.build();
}

function enterMushSoupText(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'food', 'aftermeal');
  scene.img('images/locations/gadukino/hunters/soup.jpg');
  // TODO-QSP: dynamic text: You thoroughly enjoy some warm mushroom soup, and<<$mtxt>>
  scene.text(`You thoroughly enjoy some warm mushroom soup, and${((s as any).mtxt ?? 0)}`);
  scene.text('You accompany it with a mug of tea.');
  // TODO-QSP: end
  scene.build();
}

function enterMushSoupStats(s: GameState, scene: SceneBuilder): void {
  (s as any).frost = 0;
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
  (s as any).fat = ((s as any).fat ?? 0) + (3);
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (40);
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (((((s as any).pcs_hydra ?? 0) >= 100) ? (20) : (30)));
  (s as any).cumspclnt = 2;
  qspCall(s, 'cum_cleanup', '');
  (s as any).pcs_breath = 0;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterMushSoup(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'mush_soup_stats');
  qspCall(s, 'food', 'mush_soup_text');
  qspCall(s, 'food', 'set_exit');
  // TODO-QSP: end
  scene.build();
}

function enterOnlyCostMushSoup(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'mush_soup_stats');
  if (((s as any).loc ?? 0) === 'uni_cafe') {
    (s as any).uni_lunch_bought = 1;
  }
  scene.text('Added to your order');
  scene.actions([{ label: 'Continue', goto: ['food_menu', ''] }]);
  // TODO-QSP: end
  scene.build();
}

function enterBilberryText(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'food', 'aftermeal');
  scene.img('images/locations/gadukino/forest/bilberry.jpg');
  // TODO-QSP: dynamic text: You ate a few berries, and<<$mtxt>>
  scene.text(`You ate a few berries, and${((s as any).mtxt ?? 0)}`);
  // TODO-QSP: end
  scene.build();
}

function enterBilberryStats(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
  qspCall(s, 'mood', 'raise', 2);
  (s as any).fat = ((s as any).fat ?? 0) + (1);
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (10);
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (10);
  qspCall(s, 'cum_cleanup', '', 2);
  (s as any).pcs_breath = 0;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterBilberry(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'bilberry_stats');
  qspCall(s, 'food', 'bilberry_text');
  qspCall(s, 'food', 'set_exit');
  // TODO-QSP: end
  scene.build();
}

function enterOnlyCostBilberry(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'pay', _eat['<<args[1]>>,price']
  qspCall(s, 'food', 'bilberry_stats');
  if (((s as any).loc ?? 0) === 'uni_cafe') {
    (s as any).uni_lunch_bought = 1;
  }
  scene.text('Added to your order');
  scene.actions([{ label: 'Continue', goto: ['food_menu', ''] }]);
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'aftermeal':
      enterAftermeal(s, scene);
      break;
    case 'family_meals':
      enterFamilyMeals(s, scene);
      break;
    case 'set_exit':
      enterSetExit(s, scene);
      break;
    case 'pirosh_text':
      enterPiroshText(s, scene);
      break;
    case 'pirosh_stats':
      enterPiroshStats(s, scene);
      break;
    case 'pirosh':
      enterPirosh(s, scene);
      break;
    case 'only_cost_pirosh':
      enterOnlyCostPirosh(s, scene);
      break;
    case 'golub_text':
      enterGolubText(s, scene);
      break;
    case 'golub_stats':
      enterGolubStats(s, scene);
      break;
    case 'golub':
      enterGolub(s, scene);
      break;
    case 'only_cost_golub':
      enterOnlyCostGolub(s, scene);
      break;
    case 'pozhar_text':
      enterPozharText(s, scene);
      break;
    case 'pozhar_stats':
      enterPozharStats(s, scene);
      break;
    case 'pozhar':
      enterPozhar(s, scene);
      break;
    case 'only_cost_pozhar':
      enterOnlyCostPozhar(s, scene);
      break;
    case 'reuben_text':
      enterReubenText(s, scene);
      break;
    case 'reuben_stats':
      enterReubenStats(s, scene);
      break;
    case 'reuben':
      enterReuben(s, scene);
      break;
    case 'only_cost_reuben':
      enterOnlyCostReuben(s, scene);
      break;
    case 'bliny_text':
      enterBlinyText(s, scene);
      break;
    case 'bliny_stats':
      enterBlinyStats(s, scene);
      break;
    case 'bliny':
      enterBliny(s, scene);
      break;
    case 'only_cost_bliny':
      enterOnlyCostBliny(s, scene);
      break;
    case 'varenfan_text':
      enterVarenfanText(s, scene);
      break;
    case 'varenfan_stats':
      enterVarenfanStats(s, scene);
      break;
    case 'varenfan':
      enterVarenfan(s, scene);
      break;
    case 'only_cost_varenfan':
      enterOnlyCostVarenfan(s, scene);
      break;
    case 'salfan_text':
      enterSalfanText(s, scene);
      break;
    case 'salfan_stats':
      enterSalfanStats(s, scene);
      break;
    case 'salfan':
      enterSalfan(s, scene);
      break;
    case 'only_cost_salfan':
      enterOnlyCostSalfan(s, scene);
      break;
    case 'strofan_text':
      enterStrofanText(s, scene);
      break;
    case 'strofan_stats':
      enterStrofanStats(s, scene);
      break;
    case 'strofan':
      enterStrofan(s, scene);
      break;
    case 'only_cost_strofan':
      enterOnlyCostStrofan(s, scene);
      break;
    case 'borfan_text':
      enterBorfanText(s, scene);
      break;
    case 'borfan_stats':
      enterBorfanStats(s, scene);
      break;
    case 'borfan':
      enterBorfan(s, scene);
      break;
    case 'only_cost_borfan':
      enterOnlyCostBorfan(s, scene);
      break;
    case 'blifan_text':
      enterBlifanText(s, scene);
      break;
    case 'blifan_stats':
      enterBlifanStats(s, scene);
      break;
    case 'blifan':
      enterBlifan(s, scene);
      break;
    case 'only_cost_blifan':
      enterOnlyCostBlifan(s, scene);
      break;
    case 'ryesna_text':
      enterRyesnaText(s, scene);
      break;
    case 'ryesna_stats':
      enterRyesnaStats(s, scene);
      break;
    case 'ryesna':
      enterRyesna(s, scene);
      break;
    case 'only_cost_ryesna':
      enterOnlyCostRyesna(s, scene);
      break;
    case 'crisps_text':
      enterCrispsText(s, scene);
      break;
    case 'crisps_stats':
      enterCrispsStats(s, scene);
      break;
    case 'crisps':
      enterCrisps(s, scene);
      break;
    case 'only_cost_crisps':
      enterOnlyCostCrisps(s, scene);
      break;
    case 'onring_text':
      enterOnringText(s, scene);
      break;
    case 'onring_stats':
      enterOnringStats(s, scene);
      break;
    case 'onring':
      enterOnring(s, scene);
      break;
    case 'only_cost_onring':
      enterOnlyCostOnring(s, scene);
      break;
    case 'vegburg_text':
      enterVegburgText(s, scene);
      break;
    case 'vegburg_stats':
      enterVegburgStats(s, scene);
      break;
    case 'vegburg':
      enterVegburg(s, scene);
      break;
    case 'only_cost_vegburg':
      enterOnlyCostVegburg(s, scene);
      break;
    case 'turburg_text':
      enterTurburgText(s, scene);
      break;
    case 'turburg_stats':
      enterTurburgStats(s, scene);
      break;
    case 'turburg':
      enterTurburg(s, scene);
      break;
    case 'only_cost_turburg':
      enterOnlyCostTurburg(s, scene);
      break;
    case 'batfish_text':
      enterBatfishText(s, scene);
      break;
    case 'batfish_stats':
      enterBatfishStats(s, scene);
      break;
    case 'batfish':
      enterBatfish(s, scene);
      break;
    case 'only_cost_batfish':
      enterOnlyCostBatfish(s, scene);
      break;
    case 'cheeseburger_text':
      enterCheeseburgerText(s, scene);
      break;
    case 'cheeseburger_stats':
      enterCheeseburgerStats(s, scene);
      break;
    case 'cheeseburger':
      enterCheeseburger(s, scene);
      break;
    case 'only_cost_cheeseburger':
      enterOnlyCostCheeseburger(s, scene);
      break;
    case 'snack_text':
      enterSnackText(s, scene);
      break;
    case 'snack_stats':
      enterSnackStats(s, scene);
      break;
    case 'snack':
      enterSnack(s, scene);
      break;
    case 'only_cost_snack':
      enterOnlyCostSnack(s, scene);
      break;
    case 'light_snack_text':
      enterLightSnackText(s, scene);
      break;
    case 'light_snack_stats':
      enterLightSnackStats(s, scene);
      break;
    case 'light_snack':
      enterLightSnack(s, scene);
      break;
    case 'only_cost_light_snack':
      enterOnlyCostLightSnack(s, scene);
      break;
    case 'fast_food_text':
      enterFastFoodText(s, scene);
      break;
    case 'fast_food_stats':
      enterFastFoodStats(s, scene);
      break;
    case 'fast_food':
      enterFastFood(s, scene);
      break;
    case 'only_cost_fast_food':
      enterOnlyCostFastFood(s, scene);
      break;
    case 'small_meal_text':
      enterSmallMealText(s, scene);
      break;
    case 'small_meal_stats':
      enterSmallMealStats(s, scene);
      break;
    case 'small_meal':
      enterSmallMeal(s, scene);
      break;
    case 'only_cost_small_meal':
      enterOnlyCostSmallMeal(s, scene);
      break;
    case 'medium_meal_text':
      enterMediumMealText(s, scene);
      break;
    case 'medium_meal_stats':
      enterMediumMealStats(s, scene);
      break;
    case 'medium_meal':
      enterMediumMeal(s, scene);
      break;
    case 'only_cost_medium_meal':
      enterOnlyCostMediumMeal(s, scene);
      break;
    case 'large_meal_text':
      enterLargeMealText(s, scene);
      break;
    case 'large_meal_stats':
      enterLargeMealStats(s, scene);
      break;
    case 'large_meal':
      enterLargeMeal(s, scene);
      break;
    case 'only_cost_large_meal':
      enterOnlyCostLargeMeal(s, scene);
      break;
    case 'bagged_lunch_text':
      enterBaggedLunchText(s, scene);
      break;
    case 'bagged_lunch_stats':
      enterBaggedLunchStats(s, scene);
      break;
    case 'bagged_lunch':
      enterBaggedLunch(s, scene);
      break;
    case 'only_cost_bagged_lunch':
      enterOnlyCostBaggedLunch(s, scene);
      break;
    case 'hotel_food_text':
      enterHotelFoodText(s, scene);
      break;
    case 'hotel_food_stats':
      enterHotelFoodStats(s, scene);
      break;
    case 'hotel_food':
      enterHotelFood(s, scene);
      break;
    case 'only_cost_hotel_food':
      enterOnlyCostHotelFood(s, scene);
      break;
    case 'healthy_meal_text':
      enterHealthyMealText(s, scene);
      break;
    case 'healthy_meal_stats':
      enterHealthyMealStats(s, scene);
      break;
    case 'healthy_meal':
      enterHealthyMeal(s, scene);
      break;
    case 'only_cost_healthy_meal':
      enterOnlyCostHealthyMeal(s, scene);
      break;
    case 'jerky_text':
      enterJerkyText(s, scene);
      break;
    case 'jerky_stats':
      enterJerkyStats(s, scene);
      break;
    case 'jerky':
      enterJerky(s, scene);
      break;
    case 'only_cost_jerky':
      enterOnlyCostJerky(s, scene);
      break;
    case 'meat_stew_text':
      enterMeatStewText(s, scene);
      break;
    case 'meat_stew_stats':
      enterMeatStewStats(s, scene);
      break;
    case 'meat_stew':
      enterMeatStew(s, scene);
      break;
    case 'only_cost_meat_stew':
      enterOnlyCostMeatStew(s, scene);
      break;
    case 'mush_soup_text':
      enterMushSoupText(s, scene);
      break;
    case 'mush_soup_stats':
      enterMushSoupStats(s, scene);
      break;
    case 'mush_soup':
      enterMushSoup(s, scene);
      break;
    case 'only_cost_mush_soup':
      enterOnlyCostMushSoup(s, scene);
      break;
    case 'bilberry_text':
      enterBilberryText(s, scene);
      break;
    case 'bilberry_stats':
      enterBilberryStats(s, scene);
      break;
    case 'bilberry':
      enterBilberry(s, scene);
      break;
    case 'only_cost_bilberry':
      enterOnlyCostBilberry(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const food: LocationDef = {
  name: 'food',
  title: 'You buy some vegetarian Piroshki.',
  region: 'other',
  enter: enter,
};
