import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterBuildBp(s: GameState, scene: SceneBuilder): void {
  (s as any).bp_i = 0;
  (s as any).bpID_arr[bp_i] = ((s as any).bp_i ?? 0);
  (s as any).bpType_arr[bp_i] = qspUntranslated(s, "ARGS[1]", { location: "lact_bp" });
  (s as any).bpLocID_arr[bp_i] = qspUntranslated(s, "ARGS[2]", { location: "lact_bp" });
  (s as any).bpbID1_arr[bp_i] = (-1);
  (s as any).bpbID2_arr[bp_i] = (-1);
  (s as any).result = ((s as any).bp_i ?? 0);
  scene.build();
}

function enterViewMilkBottles(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'lact_bp', 'reg_bottle_count');
  scene.text('You check the bottles that you store here.<br>');
  (s as any).temp_var = (((s as any).mc_inventory ?? 0)?.['bottle_m'] + ((s as any).mc_inventory ?? 0)?.['bottle_s']) - 1;
  (s as any).vmb_i = 0;
  (s as any).milkedvolume = 0;
  // TODO-QSP: :vmbloop
  if (((s as any).vmb_i ?? 0) <= ((s as any).temp_var ?? 0)) {
    if (((s as any).mbarrloca ?? 0)?.[String((s as any).vmb_i ?? 0)] === ((s as any).ARGS ?? 0)[1]) {
      qspCall(s, 'lact_bp', 'update_mbottle', ((s as any).vmb_i ?? 0));
      if (((s as any).mbarrfill ?? 0)?.[String((s as any).vmb_i ?? 0)] <=0) {
        (s as any).mbarrfill[vmb_i] = 0;
        // TODO-QSP: dynamic text: <br><<vmb_i + 1>>. - An empty <<mbarrtype[vmb_i]/10>>ml bottle. You can use it t...
        scene.text(`<br>${((s as any).vmb_i ?? 0) + 1}. - An empty ${((s as any).mbarrtype ?? 0)?.[String((s as any).vmb_i ?? 0)]/10}ml bottle. You can use it to store your breast milk.`);
      } else {
        // TODO-QSP: '<br><<vmb_i + 1>>. - A <<mbarrtype[vmb_i]/10>>ml bottle. There is <<mbarrfill[vmb_i]/10>>ml of milk...
        (s as any).milkedvolume = ((s as any).milkedvolume ?? 0) + (((s as any).mbarrfill ?? 0)?.[String((s as any).vmb_i ?? 0)]);
      }
    }
    (s as any).vmb_i = ((s as any).vmb_i ?? 0) + (1);
    // TODO-QSP: jump 'vmbloop'
  }
  if (((s as any).milkedvolume ?? 0) > 0) {
    scene.text('<br><a href="exec:gt\'lact_bp\',\'empty_all_milk_bottles\'">Pour the milk into the sink</a>');
  }
  scene.actions([
    { label: 'Back', goto: ['lact_bp', 'bp_milking'] },
  ]);
  scene.build();
}

function enterDrinkMilkBottles(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mbarrfill ?? 0)[((s as any).ARGS ?? 0)[1]] <= 0) {
    // TODO-QSP: exit
  }
  scene.img('images/pc/body/tits/milk_drink.jpg');
  scene.text('<center>You drink your own breast milk and clean up the bottle.</center>');
  if (((s as any).mbarrtemp ?? 0)[((s as any).ARGS ?? 0)[1]] === 'warm') {
    scene.text('<center>The milk is still warm from your breasts.</center>');
  }
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (((s as any).mbarrfill ?? 0)[((s as any).ARGS ?? 0)[1]]/400);
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (((s as any).mbarrfill ?? 0)[((s as any).ARGS ?? 0)[1]]/500);
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (((s as any).mbarrfill ?? 0)[((s as any).ARGS ?? 0)[1]] / ((s as any).iif ?? 0)(((s as any).pcs_hydra ?? 0)>=100, 200, 100));
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).max ?? 0)(1, (((s as any).mbarrfill ?? 0)[((s as any).ARGS ?? 0)[1]]/1000) + 3));
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    // TODO-QSP: gs 'lact_bp', 'empty_milk_bottle', ARGS[1]
    qspCall(s, 'stat', '');
    qspCall(s, 'lact_bp', 'view_milk_bottles', 1);
  } },
  ]);
  scene.build();
}

function enterEmptyMilkBottle(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: mbarrfill[ARGS[1]] = 0
  // TODO-QSP: mbarrmage[ARGS[1]] = 0
  // TODO-QSP: mbarrcool[ARGS[1]] = 0
  // TODO-QSP: $mbarrstat[ARGS[1]] = 'none'
  // TODO-QSP: $mbarrtemp[ARGS[1]] = 'none'
  scene.build();
}

function enterEmptyAllMilkBottles(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_var = 0;
  if (((s as any).temp_var ?? 0) < 0) {
    (s as any).temp_var = (-1);
  }
  (s as any).emb_i = 0;
  // TODO-QSP: :emb_loop
  if (((s as any).emb_i ?? 0) <= ((s as any).temp_var ?? 0)) {
    qspCall(s, 'lact_bp', 'empty_milk_bottle', ((s as any).emb_i ?? 0));
    (s as any).emb_i = ((s as any).emb_i ?? 0) + (1);
    // TODO-QSP: jump 'emb_loop'
  }
  scene.img('images/pc/body/tits/milk_sink.jpg');
  scene.text('<center>You pour all of your collected breast milk into the sink and clean up the bottles.</center>');
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_var ?? 0));
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    (st as any).menu_off = 0;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterFillMilkBottle(s: GameState, scene: SceneBuilder): void {
  if (((s as any).ARGS ?? 0)[2] > ((s as any).mbarrtype ?? 0)[((s as any).ARGS ?? 0)[1]]) {
    scene.text('ERROR - More milk going into bottle than the bottle can hold.');
  } else {
    // TODO-QSP: mbarrfill[ARGS[1]] = ARGS[2]
    // TODO-QSP: mbarrmage[ARGS[1]] = func('lact_bp', 'time_stamp')
    // TODO-QSP: mbarrcool[ARGS[1]] = 0
    // TODO-QSP: $mbarrstat[ARGS[1]] = 'fresh'
    // TODO-QSP: $mbarrtemp[ARGS[1]] = 'warm'
  }
  scene.build();
}

function enterTimeStamp(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_timestamp = 0;
  (s as any).temp_timestamp = ((s as any).temp_timestamp ?? 0) + (((s as any).year ?? 0) * 365 * 24 * 60);
  (s as any).ts_i = 1;
  if (((s as any).month ?? 0) > 1) {
    // TODO-QSP: :ts_loop
    if ((((s as any).month ?? 0) - 1) >= ((s as any).ts_i ?? 0)) {
      if (((s as any).ts_i ?? 0) === 1  ||  ((s as any).ts_i ?? 0) === 3  ||  ((s as any).ts_i ?? 0) === 5  ||  ((s as any).ts_i ?? 0) === 7  ||  ((s as any).ts_i ?? 0) === 8  ||  ((s as any).ts_i ?? 0) === 10  ||  ((s as any).ts_i ?? 0) === 12) {
        (s as any).temp_timestamp = ((s as any).temp_timestamp ?? 0) + (44640);
      } else {
        (s as any).temp_timestamp = ((s as any).temp_timestamp ?? 0) + (43200);
        if (((s as any).ts_i ?? 0) === 2) {
          (s as any).temp_timestamp = ((s as any).temp_timestamp ?? 0) + (40320);
          if ((((s as any).year ?? 0) % 4) === 0  &&  (((s as any).year ?? 0) % 100) !== 0  ||  (((s as any).year ?? 0) % 400) === 0) {
            (s as any).temp_timestamp = ((s as any).temp_timestamp ?? 0) + (1440);
          }
        }
        (s as any).ts_i = ((s as any).ts_i ?? 0) + (1);
        // TODO-QSP: jump 'ts_loop'
      }
    }
    (s as any).temp_timestamp = ((s as any).temp_timestamp ?? 0) + ((((s as any).day ?? 0) - 1) * 24 * 60);
    (s as any).temp_timestamp = ((s as any).temp_timestamp ?? 0) + (((s as any).hour ?? 0) * 60);
    (s as any).temp_timestamp = ((s as any).temp_timestamp ?? 0) + (((s as any).minut ?? 0));
    (s as any).result = ((s as any).temp_timestamp ?? 0);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'build_bp':
      enterBuildBp(s, scene);
      break;
    case 'view_milk_bottles':
      enterViewMilkBottles(s, scene);
      break;
    case 'drink_milk_bottles':
      enterDrinkMilkBottles(s, scene);
      break;
    case 'empty_milk_bottle':
      enterEmptyMilkBottle(s, scene);
      break;
    case 'empty_all_milk_bottles':
      enterEmptyAllMilkBottles(s, scene);
      break;
    case 'fill_milk_bottle':
      enterFillMilkBottle(s, scene);
      break;
    case 'time_stamp':
      enterTimeStamp(s, scene);
      break;
    default:
      enterBuildBp(s, scene);
      break;
  }
}

export const lact_bp: LocationDef = {
  name: 'lact_bp',
  title: 'You check the bottles that you store here.<br>',
  region: 'other',
  locationType: 'private',
  enter: enter,
};
