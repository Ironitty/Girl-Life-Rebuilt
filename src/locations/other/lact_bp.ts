import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterBuildBp(s: GameState, scene: SceneBuilder): void {
  (s as any).bp_i = 0;
  ((s as any).bpID_arr = (s as any).bpID_arr ?? {})[String((s as any).bp_i ?? 0)] = ((s as any).bp_i ?? 0);
  ((s as any).bpType_arr = (s as any).bpType_arr ?? {})[String((s as any).bp_i ?? 0)] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).bpLocID_arr = (s as any).bpLocID_arr ?? {})[String((s as any).bp_i ?? 0)] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).bpbID1_arr = (s as any).bpbID1_arr ?? {})[String((s as any).bp_i ?? 0)] = (-1);
  ((s as any).bpbID2_arr = (s as any).bpbID2_arr ?? {})[String((s as any).bp_i ?? 0)] = (-1);
  (s as any).result = ((s as any).bp_i ?? 0);
  // TODO-QSP: end
  scene.build();
}

function enterViewMilkBottles(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRegBottleCount(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('You check the bottles that you store here.<br>');
  (s as any).temp_var = ((((s as any).mc_inventory ?? {})?.['bottle_m'] ?? 0) + (((s as any).mc_inventory ?? {})?.['bottle_s'] ?? 0)) - 1;
  (s as any).vmb_i = 0;
  (s as any).milkedvolume = 0;
  // TODO-QSP: :vmbloop
  if (((s as any).vmb_i ?? 0) <= ((s as any).temp_var ?? 0)) {
    if (((s as any).mbarrloca ?? 0)?.[String((s as any).vmb_i ?? 0)] === String((s as any).locArgs?.[1] ?? '')) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).vmb_i ?? 0)]; enterUpdateMbottle(s, scene); (s as any).locArgs = __savedLocArgs; }
      if (((s as any).mbarrfill ?? 0)?.[String((s as any).vmb_i ?? 0)] <=0) {
        ((s as any).mbarrfill = (s as any).mbarrfill ?? {})[String((s as any).vmb_i ?? 0)] = 0;
        // TODO-QSP: dynamic text: <br><<vmb_i + 1>>. - An empty <<mbarrtype[vmb_i]/10>>ml bottle. You can use it t...
        scene.text(`<br>${((s as any).vmb_i ?? '') + 1}. - An empty ${((s as any).mbarrtype ?? 0)?.[String((s as any).vmb_i ?? 0)]/10}ml bottle. You can use it to store your breast milk.`);
      } else {
        // TODO-QSP: '<br><<vmb_i + 1>>. - A <<mbarrtype[vmb_i]/10>>ml bottle. There is <<mbarrfill[vmb_i]/10>>ml of milk...
        (s as any).milkedvolume = ((s as any).milkedvolume ?? 0) + (((s as any).mbarrfill ?? 0)?.[String((s as any).vmb_i ?? 0)]);
      }
    }
    (s as any).vmb_i = ((s as any).vmb_i ?? 0) + (1);
    // TODO-QSP: jump 'vmbloop'
  }
  if (((s as any).milkedvolume ?? 0) > 0) {
    scene.text('<br><a href="#" onclick="window.__gameStore.getState().doGoto(/u0027lact_bp/u0027, /u0027empty_all_milk_bottles/u0027); return false;">Pour the milk into the sink</a>');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Back', goto: ['lact_bp', 'bp_milking'] },
  ]);
  scene.build();
}

function enterDrinkMilkBottles(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mbarrfill ?? 0)[String((s as any).locArgs?.[1] ?? '')] <= 0) {
    // TODO-QSP: exit
  }
  scene.img('images/pc/body/tits/milk_drink.jpg');
  scene.text('<center>You drink your own breast milk and clean up the bottle.</center>');
  if (((s as any).mbarrtemp ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'warm') {
    scene.text('<center>The milk is still warm from your breasts.</center>');
  }
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (((s as any).mbarrfill ?? 0)[((s as any).locArgs?.[1] ?? 0)]/400);
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (((s as any).mbarrfill ?? 0)[((s as any).locArgs?.[1] ?? 0)]/500);
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (((s as any).mbarrfill ?? 0)[((s as any).locArgs?.[1] ?? 0)] / ((((s as any).pcs_hydra ?? 0)>=100) ? (200) : (100)));
  (s as any).minut = ((s as any).minut ?? 0) + (Math.max(1, (((s as any).mbarrfill ?? 0)[((s as any).locArgs?.[1] ?? 0)]/1000) + 3));
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    // TODO-QSP: gs 'lact_bp', 'empty_milk_bottle', ARGS[1]
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 1]; enterViewMilkBottles(st, scene); (st as any).locArgs = __savedLocArgs; }
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
  // TODO-QSP: end
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
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).emb_i ?? 0)]; enterEmptyMilkBottle(s, scene); (s as any).locArgs = __savedLocArgs; }
    (s as any).emb_i = ((s as any).emb_i ?? 0) + (1);
    // TODO-QSP: jump 'emb_loop'
  }
  scene.img('images/pc/body/tits/milk_sink.jpg');
  scene.text('<center>You pour all of your collected breast milk into the sink and clean up the bottles.</center>');
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_var ?? 0));
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    (st as any).menu_off = 0;
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterFillMilkBottle(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[2] ?? '') > ((s as any).mbarrtype ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
    scene.text('ERROR - More milk going into bottle than the bottle can hold.');
  } else {
    // TODO-QSP: mbarrfill[ARGS[1]] = ARGS[2]
    // TODO-QSP: mbarrmage[ARGS[1]] = func('lact_bp', 'time_stamp')
    // TODO-QSP: mbarrcool[ARGS[1]] = 0
    // TODO-QSP: $mbarrstat[ARGS[1]] = 'fresh'
    // TODO-QSP: $mbarrtemp[ARGS[1]] = 'warm'
  }
  // TODO-QSP: end
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
        if (((s as any).ts_i ?? 0) === 4  ||  ((s as any).ts_i ?? 0) === 6  ||  ((s as any).ts_i ?? 0) === 9  ||  ((s as any).ts_i ?? 0) === 11) {
          (s as any).temp_timestamp = ((s as any).temp_timestamp ?? 0) + (43200);
        } else {
          if (((s as any).ts_i ?? 0) === 2) {
            (s as any).temp_timestamp = ((s as any).temp_timestamp ?? 0) + (40320);
            if ((((s as any).year ?? 0) % 4) === 0  &&  (((s as any).year ?? 0) % 100) !== 0  ||  (!(((s as any).year ?? 0) % 400))) {
              (s as any).temp_timestamp = ((s as any).temp_timestamp ?? 0) + (1440);
            }
          }
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
  // TODO-QSP: end
  scene.build();
}

function enterUpdateMbottle(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mbarrfill ?? 0)[String((s as any).locArgs?.[1] ?? '')] <= 0) {
    // TODO-QSP: gs 'lact_bp', 'empty_milk_bottle', ARGS[1]
  } else {
    if (((s as any).mbarrfill ?? 0)[String((s as any).locArgs?.[1] ?? '')] > ((s as any).mbarrtype ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
      // TODO-QSP: mbarrfill[ARGS[1]] = mbarrtype[ARGS[1]]
    }
    if (((s as any).mbarrmage ?? 0)[String((s as any).locArgs?.[1] ?? '')] <= 0) {
      // TODO-QSP: mbarrmage[ARGS[1]] = func('lact_bp', 'time_stamp')
    }
    if (((s as any).mbarrcool ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 0) {
      if ((((s as any).mbarrmage ?? 0)[String((s as any).locArgs?.[1] ?? '')] + 60) >= qspFunc(s, 'lact_bp', 'time_stamp')) {
        // TODO-QSP: $mbarrtemp[ARGS[1]] = 'warm'
        // TODO-QSP: $mbarrstat[ARGS[1]] = 'fresh'
      } else {
        if ((((s as any).mbarrmage ?? 0)[String((s as any).locArgs?.[1] ?? '')] + 60) < qspFunc(s, 'lact_bp', 'time_stamp')  &&  (((s as any).mbarrmage ?? 0)[String((s as any).locArgs?.[1] ?? '')] + 360) >= qspFunc(s, 'lact_bp', 'time_stamp')) {
          // TODO-QSP: $mbarrtemp[ARGS[1]] = 'lukewarm'
          // TODO-QSP: $mbarrstat[ARGS[1]] = 'normal'
        } else {
          if ((((s as any).mbarrmage ?? 0)[String((s as any).locArgs?.[1] ?? '')] + 360) < qspFunc(s, 'lact_bp', 'time_stamp')  &&  (((s as any).mbarrmage ?? 0)[String((s as any).locArgs?.[1] ?? '')] + 1440) >= qspFunc(s, 'lact_bp', 'time_stamp')) {
            // TODO-QSP: $mbarrtemp[ARGS[1]] = 'lukewarm'
            // TODO-QSP: $mbarrstat[ARGS[1]] = 'old'
          } else {
            // TODO-QSP: $mbarrtemp[ARGS[1]] = 'lukewarm'
            // TODO-QSP: $mbarrstat[ARGS[1]] = 'rancid'
          }
        }
      }
    } else {
      if (((s as any).mbarrcool ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 1) {
        if ((((s as any).mbarrmage ?? 0)[String((s as any).locArgs?.[1] ?? '')] + 1440) >= qspFunc(s, 'lact_bp', 'time_stamp')) {
          // TODO-QSP: $mbarrtemp[ARGS[1]] = 'cold'
          // TODO-QSP: $mbarrstat[ARGS[1]] = 'fresh'
        } else {
          if ((((s as any).mbarrmage ?? 0)[String((s as any).locArgs?.[1] ?? '')] + 1440) < qspFunc(s, 'lact_bp', 'time_stamp')  &&  (((s as any).mbarrmage ?? 0)[String((s as any).locArgs?.[1] ?? '')] + 4320) >= qspFunc(s, 'lact_bp', 'time_stamp')) {
            // TODO-QSP: $mbarrtemp[ARGS[1]] = 'cold'
            // TODO-QSP: $mbarrstat[ARGS[1]] = 'normal'
          } else {
            if ((((s as any).mbarrmage ?? 0)[String((s as any).locArgs?.[1] ?? '')] + 4320) < qspFunc(s, 'lact_bp', 'time_stamp')  &&  (((s as any).mbarrmage ?? 0)[String((s as any).locArgs?.[1] ?? '')] + 7200) >= qspFunc(s, 'lact_bp', 'time_stamp')) {
              // TODO-QSP: $mbarrtemp[ARGS[1]] = 'cold'
              // TODO-QSP: $mbarrstat[ARGS[1]] = 'old'
            } else {
              // TODO-QSP: $mbarrtemp[ARGS[1]] = 'cold'
              // TODO-QSP: $mbarrstat[ARGS[1]] = 'rancid'
            }
          }
        }
      } else {
        if (((s as any).mbarrcool ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 2) {
          if ((((s as any).mbarrmage ?? 0)[String((s as any).locArgs?.[1] ?? '')] + 10080) >= qspFunc(s, 'lact_bp', 'time_stamp')) {
            // TODO-QSP: $mbarrtemp[ARGS[1]] = 'frozen'
            // TODO-QSP: $mbarrstat[ARGS[1]] = 'fresh'
          } else {
            if ((((s as any).mbarrmage ?? 0)[String((s as any).locArgs?.[1] ?? '')] + 10080) < qspFunc(s, 'lact_bp', 'time_stamp')  &&  (((s as any).mbarrmage ?? 0)[String((s as any).locArgs?.[1] ?? '')] + 262080) >= qspFunc(s, 'lact_bp', 'time_stamp')) {
              // TODO-QSP: $mbarrtemp[ARGS[1]] = 'frozen'
              // TODO-QSP: $mbarrstat[ARGS[1]] = 'normal'
            } else {
              if ((((s as any).mbarrmage ?? 0)[String((s as any).locArgs?.[1] ?? '')] + 262080) < qspFunc(s, 'lact_bp', 'time_stamp')  &&  (((s as any).mbarrmage ?? 0)[String((s as any).locArgs?.[1] ?? '')] + 525600) >= qspFunc(s, 'lact_bp', 'time_stamp')) {
                // TODO-QSP: $mbarrtemp[ARGS[1]] = 'frozen'
                // TODO-QSP: $mbarrstat[ARGS[1]] = 'old'
              } else {
                // TODO-QSP: $mbarrtemp[ARGS[1]] = 'frozen'
                // TODO-QSP: $mbarrstat[ARGS[1]] = 'rancid'
              }
            }
          }
        } else {
          // TODO-QSP: $mbarrtemp[ARGS[1]] = 'warm'
          // TODO-QSP: $mbarrstat[ARGS[1]] = 'fresh'
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterUseableSbottleCount(s: GameState, scene: SceneBuilder): void {
  (s as any).usbc_i = 0;
  (s as any).bottlecounter = 0;
  if (((s as any).reg_bottles_count ?? 0) > 0) {
    // TODO-QSP: :usbc_loop
    if (((s as any).usbc_i ?? 0) <= (((s as any).reg_bottlem_count ?? 0) + ((s as any).reg_bottles_count ?? 0))) {
      if (((s as any).mbarrtype ?? 0)?.[String((s as any).usbc_i ?? 0)] === 1500  &&  ((s as any).mbarrfill ?? 0)?.[String((s as any).usbc_i ?? 0)] === 0) {
        (s as any).bottlecounter = ((s as any).bottlecounter ?? 0) + (1);
      }
      (s as any).usbc_i = ((s as any).usbc_i ?? 0) + (1);
      // TODO-QSP: jump 'usbc_loop'
    }
  }
  (s as any).result = ((s as any).bottlecounter ?? 0);
  // TODO-QSP: end
  scene.build();
}

function enterUseableMbottleCount(s: GameState, scene: SceneBuilder): void {
  (s as any).umbc_i = 0;
  (s as any).bottlecounter = 0;
  if (((s as any).reg_bottlem_count ?? 0) > 0) {
    // TODO-QSP: :umbc_loop
    if (((s as any).umbc_i ?? 0) <= (((s as any).reg_bottlem_count ?? 0) + ((s as any).reg_bottles_count ?? 0))) {
      if (((s as any).mbarrtype ?? 0)?.[String((s as any).umbc_i ?? 0)] === 2500  &&  ((s as any).mbarrfill ?? 0)?.[String((s as any).umbc_i ?? 0)] === 0) {
        (s as any).bottlecounter = ((s as any).bottlecounter ?? 0) + (1);
      }
      (s as any).umbc_i = ((s as any).umbc_i ?? 0) + (1);
      // TODO-QSP: jump 'umbc_loop'
    }
  }
  (s as any).result = ((s as any).bottlecounter ?? 0);
  // TODO-QSP: end
  scene.build();
}

function enterBpMilking(s: GameState, scene: SceneBuilder): void {
  (s as any).pumptime = 0;
  (s as any).pumptype = 0;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRegBottleCount(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).pump_bottletype ?? 0) < 1500) {
    (s as any).pump_bottletype = 1500;
  }
  if (((s as any).location_type ?? 0) !== 'bathroom'  &&  ((s as any).location_type ?? 0) !== 'restroom'  &&  ((s as any).location_type ?? 0) !== 'private_shared'  &&  ((s as any).pcs_inhib ?? 0) < 30  ||  (((s as any).location_type ?? 0) === 'restroom'  ||  ((s as any).location_type ?? 0) === 'private_shared')  &&  ((s as any).pcs_inhib ?? 0) < 20) {
    scene.text('You aren\'t confident enough to do that here.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (st as any).menu_off = 0;
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } else {
    if (((s as any).bp_unbox ?? 0) <= 0) {
      scene.text('You need to unbox your breast pump first.');
      scene.actions([
        { label: 'Finish', handler: (st: GameState) => {
    (st as any).menu_off = 0;
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
      ]);
    } else {
      if (((s as any).bp_unbox ?? 0) === 1  &&  (((s as any).location_type ?? 0) === 'bathroom'  ||  ((s as any).location_type ?? 0) === 'private')) {
        qspGoto(s, 'lact_bp', 'bp_unbox_event');
      } else {
        scene.img('images/pc/body/tits/breast_pump.jpg');
        scene.text('How long do you want to pump your breasts with the manual breast pump?');
        if (qspFunc(s, 'lact_bp', 'useable_sbottle_count') <= 0  &&  qspFunc(s, 'lact_bp', 'useable_mbottle_count') <= 0) {
          scene.text('You have no bottles left to use. Please empty bottles or buy new ones in the pharmacy.');
        } else {
          if (qspFunc(s, 'lact_bp', 'useable_sbottle_count') <= 0) {
            (s as any).pump_bottletype = 2500;
            scene.text('You currently use a 250ml bottle on your breast pump.');
          } else {
            if (qspFunc(s, 'lact_bp', 'useable_mbottle_count') <= 0) {
              (s as any).pump_bottletype = 1500;
              scene.text('You currently use a 150ml bottle on your breast pump.');
            } else {
              if (((s as any).pump_bottletype ?? 0) === 1500) {
                scene.text('Current bottle size in use: &gt;150ml | <a href="#" onclick="window.__gameStore.setState((s) => { s.pump_bottletype = s.2500; return s; }); window.__gameStore.getState().doGoto(/u0027lact_bp/u0027, /u0027bp_milking/u0027); return false;">250ml</a>');
              } else {
                (s as any).pump_bottletype = 2500;
                scene.text('Current bottle size in use <a href="#" onclick="window.__gameStore.setState((s) => { s.pump_bottletype = s.1500; return s; }); window.__gameStore.getState().doGoto(/u0027lact_bp/u0027, /u0027bp_milking/u0027); return false;">150ml</a> | &gt;250ml');
              }
            }
          }
        }
        if ((((s as any).mc_inventory ?? 0)?.['bottle_m'] + ((s as any).mc_inventory ?? 0)?.['bottle_s']) === 1) {
          scene.text('You have one bottle. You can check it <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027lact_bp/u0027, /u0027view_milk_bottles/u0027, String(window.__gameStore.getState().1 ?? /u0027/u0027)); return false;">here</a>');
        } else {
          if ((((s as any).mc_inventory ?? 0)?.['bottle_m'] + ((s as any).mc_inventory ?? 0)?.['bottle_s']) > 1) {
            // TODO-QSP: dynamic text: You have <<mc_inventory[''bottle_m''] + mc_inventory[''bottle_s'']>> bottles. Yo...
            scene.text(`You have ${(((s as any).mc_inventory ?? {})?.['bottle_m'] ?? 0) + (((s as any).mc_inventory ?? {})?.['bottle_s'] ?? 0)} bottles. You can check them <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027lact_bp/u0027, /u0027view_milk_bottles/u0027, String(window.__gameStore.getState().1 ?? /u0027/u0027)); return false;">here</a>`);
          }
        }
        if (((s as any).lactation ?? 0)?.['breastmv'] > 0  &&  (qspFunc(s, 'lact_bp', 'useable_sbottle_count') > 0  ||  qspFunc(s, 'lact_bp', 'useable_mbottle_count') > 0)) {
          (s as any).pumptime = qspFunc(s, 'lact_lib', '$get_breastmilk_time', 3, (((s as any).lactation ?? {})?.['breastmv'] ?? 0) / 1000);
          if (((s as any).pumptime ?? 0) <= 0) {
            scene.actions([
              { label: 'Pump until breasts are empty', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'stat', '');
    scene.text('As you prepare for pumping you weight your breasts in your hands. Your breasts feel really empty. There is no need to pump now.');
    scene.actions([
      { label: 'Don\'t pump', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
      { label: 'back', goto: ['lact_bp', 'bp_milking'] },
    ]);
  } },
            ]);
          } else {
            if (((s as any).pumptime ?? 0) <= 60) {
              scene.actions([
                { label: 'Pump until breasts are empty', handler: (st: GameState) => {
    qspGoto(st, 'lact_bp', 'milking');
  } },
              ]);
            } else {
              scene.actions([
                { label: 'Pump until breasts are empty', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'stat', '');
    scene.text('As you prepare for pumping you weight your breasts in your hands. You feel that your breasts carry a large amount of milk and pumping will probably take a long time.');
    // TODO-QSP: dynamic text: Getting relieve for your breasts with the manual breast pump will probably take ...
    scene.text(`Getting relieve for your breasts with the manual breast pump will probably take at least ${((st as any).pumptime ?? '')} minutes.`);
    if (((st as any).pcs_know_mward ?? 0) <= 0) {
      scene.text('You consider visiting a hospital to get help or buying a better breast pump.');
      (st as any).pcs_ask_mward_help = 1;
      (st as any).pcs_knows_electric_pump = 1;
    }
    scene.text('Do you want to continue?');
    scene.actions([
      { label: 'Don\'t pump', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
      { label: 'Continue', handler: (st: GameState) => {
    qspGoto(st, 'lact_bp', 'milking');
  } },
    ]);
  } },
              ]);
            }
          }
        }
        if ((qspFunc(s, 'lact_bp', 'useable_sbottle_count') > 0  ||  qspFunc(s, 'lact_bp', 'useable_mbottle_count') > 0)) {
          scene.actions([
            { label: '15 Minutes', handler: (st: GameState) => {
    (st as any).pumptime = 15;
    qspGoto(st, 'lact_bp', 'milking');
  } },
            { label: '30 Minutes', handler: (st: GameState) => {
    (st as any).pumptime = 30;
    qspGoto(st, 'lact_bp', 'milking');
  } },
            { label: 'Custom', handler: (st: GameState) => {
    (st as any).pumptime = window.prompt("How long do you plan to pump your breasts? (Not more than 60 minutes)") ?? '';
    if (((st as any).pumptime ?? 0) <= 0  ||  ((st as any).pumptime ?? 0) > 60) {
      (st as any).minut = ((st as any).minut ?? 0) + 2;
      scene.actions([
        { label: 'Don\'t pump', handler: (st: GameState) => {
    (st as any).menu_off = 0;
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
        { label: 'back', goto: ['lact_bp', 'bp_milking'] },
      ]);
    } else {
      if (((st as any).pumptime ?? 0) > 0  &&  ((st as any).pumptime ?? 0) <= 60) {
        qspGoto(st, 'lact_bp', 'milking');
      }
    }
  } },
          ]);
        }
        if (((s as any).lactation ?? 0)?.['active'] > 0  &&  ((s as any).lactation ?? 0)?.['pc_aware'] > 0) {
          scene.actions([
            { label: 'Manually milk your breasts', goto: ['lact_bp', 'man_milking'] },
          ]);
        } else {
          scene.actions([
            { label: 'Massage your breasts', goto: ['lact_bp', 'man_milking'] },
          ]);
        }
        scene.actions([
          { label: 'Don\'t pump', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMassage(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cheatVars ?? 0)?.['no_lactation'] === 1) {
    // TODO-QSP: exit
  }
  if (((s as any).lactation ?? 0)?.['active'] === 0  &&  ((s as any).pcs_horny ?? 0) < 10) {
    // TODO-QSP: exit
  }
  if (((s as any).location_type ?? 0) === 'bathroom') {
    if (((s as any).mc_inventory ?? 0)?.['breast_pump'] === 1) {
      // TODO-QSP: exit
    }
  } else {
    if (((s as any).location_type ?? 0) === 'restroom') {
      if (((s as any).pcs_inhib ?? 0) < 30) {
        // TODO-QSP: exit
      }
    } else {
      if (((s as any).pcs_inhib ?? 0) < 20) {
        // TODO-QSP: exit
      }
    }
  }
  if (((s as any).lactation ?? 0)?.['active'] > 0  &&  ((s as any).lactation ?? 0)?.['pc_aware'] > 0) {
    scene.actions([
      { label: 'Milk your breasts', goto: ['lact_bp', 'man_milking'] },
    ]);
  } else {
    scene.actions([
      { label: 'Massage your breasts', goto: ['lact_bp', 'man_milking'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterManMilking(s: GameState, scene: SceneBuilder): void {
  (s as any).pumptime = 0;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRegBottleCount(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).lactation ?? 0)?.['active'] > 0  &&  ((s as any).lactation ?? 0)?.['pc_aware'] > 0) {
    scene.text('How long do you want to milk your breasts?');
  } else {
    scene.text('How long do you want to massage your breasts?');
  }
  if (((s as any).lactation ?? 0)?.['breastmv'] > 0) {
    (s as any).pumptime = (qspFunc(s, 'lact_lib', '$get_breastmilk_time', 5, ((((s as any).lactation ?? {})?.['breastmv'] ?? 0)/1000)));
    if (((s as any).pumptime ?? 0) > 60) {
      scene.actions([
        { label: 'Express until breasts are empty', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    scene.text('You prepare yourself and weight your breasts in your hands. You feel that your breasts carry a large amount of milk and manually expressing it will probably take a long time.');
    // TODO-QSP: dynamic text: Getting relieve for your breasts with manual expression will probably take at le...
    scene.text(`Getting relieve for your breasts with manual expression will probably take at least ${((st as any).pumptime ?? '')} minutes.`);
    if (((st as any).mc_inventory ?? 0)?.['breast_pump'] <= 0  &&  ((st as any).bp_unbox ?? 0) <= 1) {
      scene.text('You should consider buying a breast pump');
    } else {
      if (((st as any).mc_inventory ?? 0)?.['breast_pump'] === 1  &&  ((st as any).bp_unbox ?? 0) <= 1  &&  ((st as any).pain ?? 0)?.['nipples'] <= 60) {
        scene.text('You should consider using your breast pump.');
      } else {
        scene.text('You should consider the use of a breast pump.');
      }
    }
    scene.text('Do you want to continue?');
    scene.actions([
      { label: 'Don\'t express', handler: (st: GameState) => {
    (st as any).menu_off = 0;
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
      { label: 'Express your milk', handler: (st: GameState) => {
    qspGoto(st, 'lact_bp', 'hand_milking');
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).pumptime ?? 0) <= 0) {
        scene.actions([
          { label: 'Express milk until breasts are empty', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    scene.text('As you prepare yourself you feel your breasts in your hands. Your breasts feel really empty. There is no need to express now.');
    scene.actions([
      { label: 'Don\'t express milk', handler: (st: GameState) => {
    (st as any).menu_off = 0;
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
      { label: 'back', goto: ['lact_bp', 'man_milking'] },
    ]);
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Express until breasts are empty', handler: (st: GameState) => {
    (st as any).pumptime = qspFunc(s, 'lact_lib', '$get_breastmilk_time', 5, ((((st as any).lactation ?? {})?.['breastmv'] ?? 0)/1000));
    qspGoto(st, 'lact_bp', 'hand_milking');
  } },
        ]);
      }
    }
  }
  if (((s as any).lactation ?? 0)?.['active'] > 0  &&  ((s as any).lactation ?? 0)?.['pc_aware'] > 0) {
    scene.actions([
      { label: 'Don\'t express', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Don\'t massage', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: '5 Minutes', handler: (st: GameState) => {
    (st as any).pumptime = 5;
    qspGoto(st, 'lact_bp', 'hand_milking');
  } },
    { label: '10 Minutes', handler: (st: GameState) => {
    (st as any).pumptime = 10;
    qspGoto(st, 'lact_bp', 'hand_milking');
  } },
    { label: 'Custom', handler: (st: GameState) => {
    if (((st as any).lactation ?? 0)?.['active'] > 0  &&  ((st as any).lactation ?? 0)?.['pc_aware'] > 0) {
      (st as any).pumptime = window.prompt("How long do you plan to milk your breasts? (Not more than 60 minutes)") ?? '';
    } else {
      (st as any).pumptime = window.prompt("How long do you plan to massage your breasts? (Not more than 60 minutes)") ?? '';
    }
    if (((st as any).pumptime ?? 0) <= 0  ||  ((st as any).pumptime ?? 0) > 60) {
      (st as any).minut = ((st as any).minut ?? 0) + 2;
      if (((st as any).lactation ?? 0)?.['active'] > 0  &&  ((st as any).lactation ?? 0)?.['pc_aware'] > 0) {
        scene.actions([
          { label: 'Don\'t express', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Don\'t massage', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
        ]);
      }
      scene.actions([
        { label: 'back', goto: ['lact_bp', 'man_milking'] },
      ]);
    } else {
      if (((st as any).pumptime ?? 0) > 0  &&  ((st as any).pumptime ?? 0) <= 60) {
        qspGoto(st, 'lact_bp', 'hand_milking');
      }
    }
  } },
  ]);
  scene.build();
}

function enterBpUnboxEvent(s: GameState, scene: SceneBuilder): void {
  if (((s as any).bp_unbox ?? 0) <= 0) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    if (((s as any).location_type ?? 0) === 'bathroom') {
      scene.text('You push down the toilet seat to sit down and slowly start to unbox your newly acquired breast pump.');
    } else {
      if (((s as any).location_type ?? 0) === 'private'  &&  (((s as any).locclass ?? 0) === 'bedr'  ||  ((s as any).locclass ?? 0) === 'bedroom')) {
        scene.text('You sit down on your bed and slowly start to unbox your newly acquired breast pump.');
      } else {
        if (((s as any).location_type ?? 0) === 'private') {
          scene.text('You sit down and slowly start to unbox your newly acquired breast pump.');
        }
      }
    }
    if (((s as any).knowpreg ?? 0) === 0  &&  ((s as any).bp_unbox ?? 0) <= 0) {
      scene.text('While examining it, you think about why you bought it in the first place. You are not pregnant nor do you have a kid that needs breast milk.');
      if (((s as any).lactation ?? 0)?.['active'] <= 0) {
        scene.text('Your breasts haven\'t got any milk in them too, so it seems this pump is a bit useless.');
      } else {
        scene.text('At least it can help to get the milk out of your breasts.');
      }
    }
    if (((s as any).location_type ?? 0) === 'private') {
      scene.img('images/pc/body/tits/pump_unboxing.jpg');
    } else {
      if (((s as any).location_type ?? 0) === 'bathroom') {
        scene.img('images/pc/body/tits/pump_unboxing_bath.jpg');
      } else {
        scene.img('images/pc/body/tits/pump_unboxing_bath.jpg');
      }
    }
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['bottle_s'] = ((s as any).mc_inventory['bottle_s'] ?? 0) + (1);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRegBottleCount(s, scene); (s as any).locArgs = __savedLocArgs; }
    if ((((s as any).pcs_inhib ?? 0) > 40  &&  ((s as any).location_type ?? 0) === 'private')  ||  ((s as any).location_type ?? 0) === 'bathroom') {
      scene.actions([
        { label: 'Try out how it works', handler: (st: GameState) => {
    (st as any).milkedvolume = (qspFunc(s, 'lact_lib', '$get_breastmilk', 3, 1))/100;
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    (st as any).bp_unbox = 2;
    qspCall(st, 'stat', '');
    scene.text('You pull up your top to release your breasts');
    scene.img(`images/pc/body/tits/t${((st as any).tits ?? '')}.jpg`);
    scene.text('Your fingers glide around the suction cup of the breast pump, while your other hand holds the pump.');
    scene.text('Making sure that no one is around, you lift the breast pump to your left breast. The cold cone feels uncomfortable on your nipple.');
    if (((st as any).lactation ?? 0)?.['active'] <= 0) {
      scene.text('You start to squeeze the bulb. Your nipple is sucked into the cone, getting elongated a bit. It feels weird at first and you release the lever, the suction on your nipple goes away and the nipple retracts.');
      scene.text('With your hand you squeeze down again, your nipple sucked in again. You go on, and start to rhythmically squeeze it.');
      scene.text('You go on for a minute and then detach the pump. As expected no milk was collected in the bottle.');
      scene.img('images/pc/body/tits/breast_pump.jpg');
    } else {
      if (((st as any).milkedvolume ?? 0) <= 0) {
        scene.text('You start to squeeze the bulb. Your nipple is sucked into the cone, getting elongated a bit. It feels weird at first and you release the lever, the suction on your nipple goes away and the nipple retracts.');
        scene.text('With your hand you squeeze down again, your nipple sucked in again. You go on, and start to rhythmically squeeze it.');
        scene.text('You go on for a minute and then detach the pump. You collected some milk, but it is just a small puddle in the bottle.');
        scene.img('images/pc/body/tits/pump_milkdrops.jpg');
      } else {
        if (((st as any).milkedvolume ?? 0) <= 50) {
          scene.text('You start to squeeze the bulb. Your nipple is sucked into the cone, getting elongated a bit. It feels weird at first and you release the lever, the suction on your nipple goes away and the nipple retracts.');
          scene.text('With your hand you squeeze down again, your nipple sucked in again. You go on, and start to rhythmically squeeze it. The pump starts to draw milk from your breast.');
          scene.text('You go on for a minute and then detach the pump. You collected some milk, but it is just a small puddle in the bottle.');
          scene.img('images/pc/body/tits/pump_milkdrops.jpg');
        } else {
          if (((st as any).milkedvolume ?? 0) <= 1500) {
            scene.text('You start to squeeze the bulb. Your nipple is sucked into the cone, getting elongated a bit. It feels weird at first and you release the lever, the suction on your nipple goes away and the nipple retracts.');
            scene.text('With your hand you squeeze down again, your nipple sucked in again. You go on, and start to rhythmically squeeze it. The pump starts to draw milk from your breast.');
            // TODO-QSP: dynamic text: You go on for a minute and then detach the pump. You collected <<milkedvolume/10...
            scene.text(`You go on for a minute and then detach the pump. You collected ${((st as any).milkedvolume ?? '')/10}ml of your breast milk.`);
            scene.img('images/pc/body/tits/pump_half.jpg');
          } else {
            scene.text('You start to squeeze the bulb. Your nipple is sucked into the cone, getting elongated a bit. It feels weird at first and you release the lever, the suction on your nipple goes away and the nipple retracts.');
            scene.text('With your hand you squeeze down again, your nipple sucked in again. You go on, and start to rhythmically squeeze it. The pump starts to draw milk from your breast.');
            scene.text('You go on for a minute and then detach the pump. You easily filed the breast pump bottle with your breast milk just with this little pumping.');
            scene.img('images/pc/body/tits/pump_full.jpg');
          }
        }
        scene.text('You nod at the breast pump, thinking it will come in handy.');
      }
    }
    if (((st as any).lactation ?? 0)?.['active'] > 0  &&  ((st as any).pain ?? 0)?.['nipples'] < 60  &&  ((st as any).lactation ?? 0)?.['pc_aware'] <= 0) {
      ((st as any).lactation = (st as any).lactation ?? {})['pc_aware'] = 1;
      if (((st as any).pcs_usedbreastpumponherself ?? 0) > 0) {
        ((st as any).lactation = (st as any).lactation ?? {})['induced'] = 1;
        if (((st as any).pcs_massagedherbreasts ?? 0) > 0) {
          scene.text('All that pumping and massaging your breasts probably caused you to lactate!<br>');
        } else {
          if (((st as any).pcs_massagedherbreasts ?? 0) <= 0) {
            scene.text('You are surprised to see that you are lactating!');
          }
        }
      } else {
        if (((st as any).pcs_massagedherbreasts ?? 0) > 0) {
          ((st as any).lactation = (st as any).lactation ?? {})['induced'] = 1;
          scene.text('Regularly massaging your breasts probably made you lactate!<br>');
        } else {
          ((st as any).lactation = (st as any).lactation ?? {})['induced'] = 0;
          scene.text('To your surprise it is milk. You started lactating!<br>');
          if (((st as any).thinkpreg ?? 0) === 1  ||  ((st as any).knowpreg ?? 0) === 1) {
            scene.text('This is probably happening because you are pregnant.');
          } else {
            scene.text('You should have this checked out by a doctor. You could be pregnant.');
          }
        }
      }
    }
    (st as any).bp_unbox = 2;
    scene.actions([
      { label: 'continue', handler: (st: GameState) => {
    if (((st as any).milkedvolume ?? 0) > 50  &&  ((st as any).location_type ?? 0) === 'private') {
      scene.text('You look at the milk in the bottle and then around the room. Having no idea what to do with the excess milk, you look at it and suddenly sip it down.');
      scene.text('It is your milk, so it should be okay to drink it.');
      scene.img('images/pc/body/tits/milk_drink.jpg');
      scene.text('<center>The milk is still warm from your breasts.</center>');
      (st as any).pcs_health = ((st as any).pcs_health ?? 0) + (((st as any).milkedvolume ?? 0)/400);
      (st as any).pcs_energy = ((st as any).pcs_energy ?? 0) + (((st as any).milkedvolume ?? 0)/500);
      if (((st as any).pcs_hydra ?? 0) >= 100) {
        (st as any).pcs_hydra = ((st as any).pcs_hydra ?? 0) + (((st as any).milkedvolume ?? 0)/200);
      } else {
        (st as any).pcs_hydra = ((st as any).pcs_hydra ?? 0) + (((st as any).milkedvolume ?? 0)/100);
      }
      (st as any).minut = ((st as any).minut ?? 0) + (((((st as any).milkedvolume ?? 0)/1000) + 3));
      scene.actions([
        { label: 'Finish', handler: (st: GameState) => {
    (st as any).menu_off = 0;
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
      ]);
    } else {
      scene.text('You clean up your pump and cover your breasts again.');
      scene.actions([
        { label: 'Finish', handler: (st: GameState) => {
    (st as any).menu_off = 0;
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
      ]);
    }
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Don\'t try it here', handler: (st: GameState) => {
    scene.text('You look around you, not feeling to comfortable to use the breast pump here.');
    (st as any).bp_unbox = 1;
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (st as any).menu_off = 0;
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).bp_unbox ?? 0) === 1) {
      if (((s as any).location_type ?? 0) === 'private'  &&  ((s as any).pcs_inhib ?? 0) < 40) {
        scene.text('You can\'t do this here');
        scene.actions([
          { label: 'Finish', handler: (st: GameState) => {
    (st as any).menu_off = 0;
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
        ]);
      } else {
        scene.text('You pull up your top to release your breasts');
        scene.img(`images/pc/body/tits/t${((s as any).tits ?? '')}.jpg`);
        scene.text('Your fingers glide around the suction cup of the breast pump, while your other hand holds the pump.');
        scene.text('Making sure that no one is around, you lift the breast pump to your left breast. The cold cone feels uncomfortable on your nipple.');
        (s as any).milkedvolume = (qspFunc(s, 'lact_lib', '$get_breastmilk', 3, 1))/100;
        (s as any).minut = ((s as any).minut ?? 0) + 1;
        (s as any).bp_unbox = 2;
        if (((s as any).lactation ?? 0)?.['active'] <= 0) {
          scene.text('You start to squeeze the bulb. Your nipple is sucked into the cone, getting elongated a bit. It feels weird at first and you release the lever, the suction on your nipple goes away and the nipple retracts.');
          scene.text('With your hand you squeeze down again, your nipple sucked in again. You go on, and start to rhythmically squeeze it.');
          scene.text('You go on for a minute and then detach the pump. As expected no milk was collected in the bottle.');
          scene.img('images/pc/body/tits/breast_pump.jpg');
        } else {
          if (((s as any).milkedvolume ?? 0) <= 0) {
            scene.text('You start to squeeze the bulb. Your nipple is sucked into the cone, getting elongated a bit. It feels weird at first and you release the lever, the suction on your nipple goes away and the nipple retracts.');
            scene.text('With your hand you squeeze down again, your nipple sucked in again. You go on, and start to rhythmically squeeze it.');
            scene.text('You go on for a minute and then detach the pump. You collected some milk, but it is just a small puddle in the bottle.');
            scene.img('images/pc/body/tits/pump_milkdrops.jpg');
          } else {
            if (((s as any).milkedvolume ?? 0) <= 50) {
              scene.text('You start to squeeze the bulb. Your nipple is sucked into the cone, getting elongated a bit. It feels weird at first and you release the lever, the suction on your nipple goes away and the nipple retracts.');
              scene.text('With your hand you squeeze down again, your nipple sucked in again. You go on, and start to rhythmically squeeze it. The pump starts to draw milk from your breast.');
              scene.text('You go on for a minute and then detach the pump. You collected some milk, but it is just a small puddle in the bottle.');
              scene.img('images/pc/body/tits/pump_milkdrops.jpg');
            } else {
              if (((s as any).milkedvolume ?? 0) <= 1500) {
                scene.text('You start to squeeze the bulb. Your nipple is sucked into the cone, getting elongated a bit. It feels weird at first and you release the lever, the suction on your nipple goes away and the nipple retracts.');
                scene.text('With your hand you squeeze down again, your nipple sucked in again. You go on, and start to rhythmically squeeze it. The pump starts to draw milk from your breast.');
                // TODO-QSP: dynamic text: You go on for a minute and then detach the pump. You collected <<milkedvolume/10...
                scene.text(`You go on for a minute and then detach the pump. You collected ${((s as any).milkedvolume ?? '')/10}ml of your breast milk.`);
                scene.img('images/pc/body/tits/pump_half.jpg');
              } else {
                scene.text('You start to squeeze the bulb. Your nipple is sucked into the cone, getting elongated a bit. It feels weird at first and you release the lever, the suction on your nipple goes away and the nipple retracts.');
                scene.text('With your hand you squeeze down again, your nipple sucked in again. You go on, and start to rhythmically squeeze it. The pump starts to draw milk from your breast.');
                scene.text('You go on for a minute and then detach the pump. You easily filed the breast pump bottle with your breast milk just with this little pumping.');
                scene.img('images/pc/body/tits/pump_full.jpg');
              }
            }
            scene.text('You nod at the breast pump, thinking it will come in handy.');
          }
        }
        scene.actions([
          { label: 'continue', handler: (st: GameState) => {
    if (((st as any).milkedvolume ?? 0) <= 50  ||  ((st as any).location_type ?? 0) !== 'private') {
      scene.text('You clean up your pump and cover your breasts again.');
    } else {
      (st as any).minut = ((st as any).minut ?? 0) + (((((st as any).milkedvolume ?? 0)/1000) + 3));
      (st as any).pcs_health = ((st as any).pcs_health ?? 0) + (((st as any).milkedvolume ?? 0)/400);
      (st as any).pcs_energy = ((st as any).pcs_energy ?? 0) + (((st as any).milkedvolume ?? 0)/500);
      if (((st as any).pcs_hydra ?? 0) >= 100) {
        (st as any).pcs_hydra = ((st as any).pcs_hydra ?? 0) + (((st as any).milkedvolume ?? 0)/200);
      } else {
        (st as any).pcs_hydra = ((st as any).pcs_hydra ?? 0) + (((st as any).milkedvolume ?? 0)/100);
      }
      qspCall(st, 'stat', '');
      scene.text('You look at the milk in the bottle and then around the room. Having no idea what to do with the excess milk, you look at it and suddenly sip it down.');
      scene.text('It is your milk, so it should be okay to drink it.');
      scene.img('images/pc/body/tits/milk_drink.jpg');
      scene.text('<center>The milk is still warm from your breasts.</center>');
    }
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
        ]);
      }
    } else {
      if (((s as any).bp_unbox ?? 0) >= 2) {
        scene.text('You unboxed your breast pump already.');
        scene.actions([
          { label: 'Finish', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterRegBottleCount(s: GameState, scene: SceneBuilder): void {
  if (((s as any).reg_bottles_count ?? 0) <= 0) {
    (s as any).reg_bottles_count = 0;
  }
  if (((s as any).reg_bottlem_count ?? 0) <= 0) {
    (s as any).reg_bottlem_count = 0;
  }
  if ((((s as any).reg_bottlem_count ?? 0) + ((s as any).reg_bottles_count ?? 0)) < (((s as any).mc_inventory ?? 0)?.['bottle_m'] + ((s as any).mc_inventory ?? 0)?.['bottle_s'])) {
    // TODO-QSP: :rbc_loop
    (s as any).rbc_index = (((s as any).reg_bottlem_count ?? 0) + ((s as any).reg_bottles_count ?? 0)) - 1;
    if ((((s as any).mc_inventory ?? 0)?.['bottle_s'] - ((s as any).reg_bottles_count ?? 0)) > 0) {
      (s as any).reg_bottles_count = ((s as any).reg_bottles_count ?? 0) + (1);
      (s as any).rbc_index = (((s as any).reg_bottlem_count ?? 0) + ((s as any).reg_bottles_count ?? 0)) - 1;
      ((s as any).mbarrtype = (s as any).mbarrtype ?? {})[String((s as any).rbc_index ?? 0)] = 1500;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).rbc_index ?? 0)]; enterEmptyMilkBottle(s, scene); (s as any).locArgs = __savedLocArgs; }
      ((s as any).mbarrloca = (s as any).mbarrloca ?? {})[String((s as any).rbc_index ?? 0)] = 1;
      // TODO-QSP: jump 'rbc_loop'
    }
    if ((((s as any).mc_inventory ?? 0)?.['bottle_m'] - ((s as any).reg_bottlem_count ?? 0)) > 0) {
      (s as any).reg_bottlem_count = ((s as any).reg_bottlem_count ?? 0) + (1);
      (s as any).rbc_index = (((s as any).reg_bottlem_count ?? 0) + ((s as any).reg_bottles_count ?? 0)) - 1;
      ((s as any).mbarrtype = (s as any).mbarrtype ?? {})[String((s as any).rbc_index ?? 0)] = 2500;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).rbc_index ?? 0)]; enterEmptyMilkBottle(s, scene); (s as any).locArgs = __savedLocArgs; }
      ((s as any).mbarrloca = (s as any).mbarrloca ?? {})[String((s as any).rbc_index ?? 0)] = 1;
      // TODO-QSP: jump 'rbc_loop'
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMilking(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRegBottleCount(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).pain ?? 0)?.['nipples'] >= 60) {
    scene.text('Your nipples feel too sore to use the pump right now.');
  } else {
    if (((s as any).lactation ?? 0)?.['active'] === 0) {
      (s as any).milkedvolume = (qspFunc(s, 'lact_lib', '$get_breastmilk', 3, ((s as any).pumptime ?? 0)))/100;
      (s as any).minut = ((s as any).minut ?? 0) + (((s as any).pumptime ?? 0));
      (s as any).breastcounter = ((s as any).breastcounter ?? 0) + (1);
      (s as any).pcs_usedbreastpumponherself = ((s as any).pcs_usedbreastpumponherself ?? 0) + (1);
      qspCall(s, 'stat', '');
      scene.img(`images/pc/body/tits/t${((s as any).tits ?? '')}.jpg`);
      if (((s as any).breastaccommodation ?? 0) < 100) {
        scene.text('You attach the pump to your nipples and start squeezing the bulb. The vacuum feels uncomfortable on your nipples.');
      } else {
        if (((s as any).breastaccommodation ?? 0) < 200) {
          scene.text('You attach the pump to your nipples and start squeezing the bulb. You are used to the vacuum on your nipples.');
        } else {
          scene.text('You attach the pump to your nipples and start squeezing the bulb. The vacuum feels good on your nipples.');
        }
      }
      if (((s as any).lactation ?? 0)?.['prolactinlvl'] > 100) {
        scene.text('A few droplets of liquid come out of your nipples but it is not milk.');
      }
      if (((s as any).pump_stop_brake ?? 0) === 1) {
        // TODO-QSP: dynamic text: During pumping your nipples start to hurt extremely. You have to stop after <<pu...
        scene.text(`During pumping your nipples start to hurt extremely. You have to stop after ${((s as any).pumptime ?? '')} minutes, because you couldn't go on.`);
      }
      if (((s as any).lactation ?? 0)?.['prolactinlvl'] > 100) {
        scene.text('After finishing, your breasts feel weirdly engorged.');
      }
      if (((s as any).drugVars ?? 0)?.['breastcream_dose'] === 1) {
        (s as any).pcs_nips = ((s as any).pcs_nips ?? 0) + ((Math.floor(Math.random() * 3) + 0));
      }
    } else {
      if (((s as any).lactation ?? 0)?.['pc_aware'] <= 0) {
        ((s as any).lactation = (s as any).lactation ?? {})['pc_aware'] = 1;
        scene.img('images/pc/body/tits/pump_milkdrops.jpg');
        if (((s as any).pcs_usedbreastpumponherself ?? 0) > 0) {
          ((s as any).lactation = (s as any).lactation ?? {})['induced'] = 1;
          if (((s as any).pcs_massagedherbreasts ?? 0) > 0) {
            scene.text('You attach the pump but after a few pumps white liquid suddenly comes from your nipples. All that pumping and massaging your breasts probably caused you to lactate!<br>');
          } else {
            scene.text('As usual, you attach the pump, but after a few pumps white liquid suddenly starts flowing from your nipples.<br>Using the breast pump regularly probably made you lactate!');
          }
        } else {
          if (((s as any).pcs_massagedherbreasts ?? 0) > 0) {
            ((s as any).lactation = (s as any).lactation ?? {})['induced'] = 1;
            scene.text('You attach the pump but after a few pumps white liquid suddenly comes from your nipples. Regularly massaging your breasts probably made you lactate!<br>');
          } else {
            ((s as any).lactation = (s as any).lactation ?? {})['induced'] = 0;
            scene.text('You attach the pump and give it a few pumps. To your surprise white liquid suddenly comes from your nipples. You started lactating!<br>');
            if (((s as any).thinkpreg ?? 0) === 1  ||  ((s as any).knowpreg ?? 0) === 1) {
              scene.text('This is probably happening because you are pregnant.');
            } else {
              scene.text('You should have this checked out by a doctor. You could be pregnant.');
            }
          }
        }
        (s as any).pcs_usedbreastpumponherself = 0;
        (s as any).pcs_massagedherbreasts = 0;
      } else {
        (s as any).milkedvolume = qspFunc(s, 'lact_lib', '$get_breastmilk', 3, ((s as any).pumptime ?? 0)) / 100;
        (s as any).bp_used_mbottle = 0;
        (s as any).bp_used_sbottle = 0;
        (s as any).bp_useable_sbottle = qspFunc(s, 'lact_bp', 'useable_sbottle_count');
        (s as any).bp_useable_mbottle = qspFunc(s, 'lact_bp', 'useable_mbottle_count');
        (s as any).pump_start_timestamp = qspFunc(s, 'lact_bp', 'time_stamp');
        (s as any).breastcounter = ((s as any).breastcounter ?? 0) + (1);
        (s as any).minut = ((s as any).minut ?? 0) + (((s as any).pumptime ?? 0));
        (s as any).pump_timestamp = qspFunc(s, 'lact_bp', 'time_stamp');
        qspCall(s, 'stat', '');
        scene.img('images/pc/body/tits/pump_lactating.jpg');
        if (((s as any).pumptime ?? 0) > 1) {
          // TODO-QSP: dynamic text: You attach the pump to your breast and start rhythmically squeezing the bulb for...
          scene.text(`You attach the pump to your breast and start rhythmically squeezing the bulb for ${((s as any).pumptime ?? '')} minutes.`);
        } else {
          scene.text('You attach the pump to your breast and start rhythmically squeezing the bulb for one minute.');
        }
        if (((s as any).milkedvolume ?? 0) > ((s as any).pump_bottletype ?? 0)  &&  (((s as any).bp_useable_sbottle ?? 0)*1500 + ((s as any).bp_useable_mbottle ?? 0)*2500) === ((s as any).pump_bottletype ?? 0)) {
          scene.text('During pumping you have to empty the collecting bottle as it filled up with your milk.');
          // TODO-QSP: dynamic text: You give it a few more pumps and detach the pump.<br>You filled the bottle with ...
          scene.text(`You give it a few more pumps and detach the pump.<br>You filled the bottle with ${((s as any).pump_bottletype ?? '')/10}ml of your milk.`);
          scene.text('To collect all your pumped milk you should probably check if the pharmacy has additional bottles for your breast pump.');
          if ((((s as any).bp_useable_sbottle ?? 0) - ((s as any).bp_used_sbottle ?? 0)) > 0) {
            (s as any).bottlecounter = 0;
            // TODO-QSP: :sbottle_loneloop
            if (((s as any).bottlecounter ?? 0) < (((s as any).mc_inventory ?? 0)?.['bottle_m'] + ((s as any).mc_inventory ?? 0)?.['bottle_s'])  &&  ((s as any).milkedvolume ?? 0) > 1500) {
              if (((s as any).mbarrtype ?? 0)?.[String((s as any).bottlecounter ?? 0)] !== 1500  ||  ((s as any).mbarrfill ?? 0)?.[String((s as any).bottlecounter ?? 0)] !== 0) {
                (s as any).bottlecounter = ((s as any).bottlecounter ?? 0) + (1);
                // TODO-QSP: jump 'sbottle_loneloop'
              }
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).bottlecounter ?? 0), 1500]; enterFillMilkBottle(s, scene); (s as any).locArgs = __savedLocArgs; }
            }
          } else {
            if ((((s as any).bp_useable_mbottle ?? 0) - ((s as any).bp_used_mbottle ?? 0)) > 0  &&  ((s as any).milkedvolume ?? 0) > 2500) {
              (s as any).bottlecounter = 0;
              // TODO-QSP: :mbottle_loneloop
              if (((s as any).bottlecounter ?? 0) < (((s as any).mc_inventory ?? 0)?.['bottle_m'] + ((s as any).mc_inventory ?? 0)?.['bottle_s'])) {
                if (((s as any).mbarrtype ?? 0)?.[String((s as any).bottlecounter ?? 0)] !== 2500  ||  ((s as any).mbarrfill ?? 0)?.[String((s as any).bottlecounter ?? 0)] !== 0) {
                  (s as any).bottlecounter = ((s as any).bottlecounter ?? 0) + (1);
                  // TODO-QSP: jump 'mbottle_loneloop'
                }
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).bottlecounter ?? 0), 2500]; enterFillMilkBottle(s, scene); (s as any).locArgs = __savedLocArgs; }
              }
            } else {
              scene.text('unhandled case - you shouldn\'t end up here. Please report this in the bug section of Girl Life in the tfg-forums.');
              scene.text('first fork case');
              // TODO-QSP: dynamic text: bp_used_mbottle: <<bp_used_mbottle>>
              scene.text(`bp_used_mbottle: ${((s as any).bp_used_mbottle ?? '')}`);
              // TODO-QSP: dynamic text: bp_used_sbottle: <<bp_used_sbottle>>
              scene.text(`bp_used_sbottle: ${((s as any).bp_used_sbottle ?? '')}`);
              // TODO-QSP: dynamic text: milkedvolume: <<milkedvolume>>
              scene.text(`milkedvolume: ${((s as any).milkedvolume ?? '')}`);
              // TODO-QSP: dynamic text: pump_bottletype: <<pump_bottletype>>
              scene.text(`pump_bottletype: ${((s as any).pump_bottletype ?? '')}`);
              // TODO-QSP: dynamic text: bp_useable_sbottle: <<bp_useable_sbottle>>
              scene.text(`bp_useable_sbottle: ${((s as any).bp_useable_sbottle ?? '')}`);
              // TODO-QSP: dynamic text: bp_useable_mbottle: <<bp_useable_mbottle>>
              scene.text(`bp_useable_mbottle: ${((s as any).bp_useable_mbottle ?? '')}`);
            }
          }
        } else {
          if (((s as any).milkedvolume ?? 0) > ((s as any).pump_bottletype ?? 0)  &&  (((s as any).bp_useable_sbottle ?? 0)*1500 + ((s as any).bp_useable_mbottle ?? 0)*2500) > ((s as any).pump_bottletype ?? 0)) {
            // TODO-QSP: :sbottleloop
            if (((s as any).pump_bottletype ?? 0) < 2500  &&  ((s as any).milkedvolume ?? 0) >= 1500  &&  ((s as any).bp_used_sbottle ?? 0) < ((s as any).bp_useable_sbottle ?? 0)) {
              (s as any).bp_used_sbottle = ((s as any).bp_used_sbottle ?? 0) + (1);
              (s as any).milkedvolume = ((s as any).milkedvolume ?? 0) - (1500);
              (s as any).bottlecounter = 0;
              // TODO-QSP: :sbottle_searchloop
              if (((s as any).bottlecounter ?? 0) < (((s as any).mc_inventory ?? 0)?.['bottle_m'] + ((s as any).mc_inventory ?? 0)?.['bottle_s'])) {
                if (((s as any).mbarrtype ?? 0)?.[String((s as any).bottlecounter ?? 0)] !== 1500  ||  ((s as any).mbarrfill ?? 0)?.[String((s as any).bottlecounter ?? 0)] !== 0) {
                  (s as any).bottlecounter = ((s as any).bottlecounter ?? 0) + (1);
                  // TODO-QSP: jump 'sbottle_searchloop'
                }
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).bottlecounter ?? 0), 1500]; enterFillMilkBottle(s, scene); (s as any).locArgs = __savedLocArgs; }
              }
              // TODO-QSP: jump 'sbottleloop'
            }
            // TODO-QSP: :mbottleloop
            if (((s as any).pump_bottletype ?? 0) >= 2500  &&  ((s as any).milkedvolume ?? 0) >= 2500  &&  ((s as any).bp_used_mbottle ?? 0) < ((s as any).bp_useable_mbottle ?? 0)) {
              (s as any).bp_used_mbottle = ((s as any).bp_used_mbottle ?? 0) + (1);
              (s as any).milkedvolume = ((s as any).milkedvolume ?? 0) - (2500);
              (s as any).bottlecounter = 0;
              // TODO-QSP: :mbottle_searchloop
              if (((s as any).bottlecounter ?? 0) < (((s as any).mc_inventory ?? 0)?.['bottle_m'] + ((s as any).mc_inventory ?? 0)?.['bottle_s'])) {
                if (((s as any).mbarrtype ?? 0)?.[String((s as any).bottlecounter ?? 0)] !== 2500  ||  ((s as any).mbarrfill ?? 0)?.[String((s as any).bottlecounter ?? 0)] !== 0) {
                  (s as any).bottlecounter = ((s as any).bottlecounter ?? 0) + (1);
                  // TODO-QSP: jump 'mbottle_searchloop'
                }
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).bottlecounter ?? 0), 2500]; enterFillMilkBottle(s, scene); (s as any).locArgs = __savedLocArgs; }
              }
              // TODO-QSP: jump 'mbottleloop'
            }
            if (((s as any).milkedvolume ?? 0) > 0  &&  (((((s as any).bp_useable_mbottle ?? 0) - ((s as any).bp_used_mbottle ?? 0)) > 0)  ||  ((((s as any).bp_useable_sbottle ?? 0) - ((s as any).bp_used_sbottle ?? 0)) > 0))) {
              // TODO-QSP: :altfill01
              if (((s as any).pump_bottletype ?? 0) < 2500  &&  ((s as any).milkedvolume ?? 0) >= 2500  &&  ((s as any).bp_used_mbottle ?? 0) < ((s as any).bp_useable_mbottle ?? 0)) {
                (s as any).bp_used_mbottle = ((s as any).bp_used_mbottle ?? 0) + (1);
                (s as any).milkedvolume = ((s as any).milkedvolume ?? 0) - (2500);
                (s as any).bottlecounter = 0;
                // TODO-QSP: :sbottle_altsearchloop
                if (((s as any).bottlecounter ?? 0) < (((s as any).mc_inventory ?? 0)?.['bottle_m'] + ((s as any).mc_inventory ?? 0)?.['bottle_s'])) {
                  if (((s as any).mbarrtype ?? 0)?.[String((s as any).bottlecounter ?? 0)] !== 2500  ||  ((s as any).mbarrfill ?? 0)?.[String((s as any).bottlecounter ?? 0)] !== 0) {
                    (s as any).bottlecounter = ((s as any).bottlecounter ?? 0) + (1);
                    // TODO-QSP: jump 'sbottle_altsearchloop'
                  }
                  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).bottlecounter ?? 0), 2500]; enterFillMilkBottle(s, scene); (s as any).locArgs = __savedLocArgs; }
                }
                // TODO-QSP: jump 'altfill01'
              }
              // TODO-QSP: :altfill02
              if (((s as any).pump_bottletype ?? 0) >= 2500  &&  ((s as any).milkedvolume ?? 0) >= 1500  &&  ((s as any).bp_used_sbottle ?? 0) < ((s as any).bp_useable_sbottle ?? 0)) {
                (s as any).bp_used_sbottle = ((s as any).bp_used_sbottle ?? 0) + (1);
                (s as any).milkedvolume = ((s as any).milkedvolume ?? 0) - (1500);
                (s as any).bottlecounter = 0;
                // TODO-QSP: :mbottle_altsearchloop
                if (((s as any).bottlecounter ?? 0) < (((s as any).mc_inventory ?? 0)?.['bottle_m'] + ((s as any).mc_inventory ?? 0)?.['bottle_s'])) {
                  if (((s as any).mbarrtype ?? 0)?.[String((s as any).bottlecounter ?? 0)] !== 1500  ||  ((s as any).mbarrfill ?? 0)?.[String((s as any).bottlecounter ?? 0)] !== 0) {
                    (s as any).bottlecounter = ((s as any).bottlecounter ?? 0) + (1);
                    // TODO-QSP: jump 'mbottle_altsearchloop'
                  }
                  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).bottlecounter ?? 0), 1500]; enterFillMilkBottle(s, scene); (s as any).locArgs = __savedLocArgs; }
                }
                // TODO-QSP: jump 'altfill02'
              }
            }
            if (((s as any).milkedvolume ?? 0) > 0  &&  ((s as any).bp_useable_mbottle ?? 0) === ((s as any).bp_used_mbottle ?? 0)  &&  ((s as any).bp_useable_sbottle ?? 0) === ((s as any).bp_used_sbottle ?? 0)) {
              scene.text('During pumping you have to switch the collecting bottle as it filled up with your milk. Unfortunately you don\'t have enough bottles to collect all your milk.');
              // TODO-QSP: dynamic text: You had to pour <<milkedvolume/10>>ml of your breast milk into the sink.
              scene.text(`You had to pour ${((s as any).milkedvolume ?? '')/10}ml of your breast milk into the sink.`);
              (s as any).milkedvolume = ((((s as any).bp_used_mbottle ?? 0)*2500) + (((s as any).bp_used_sbottle ?? 0)*1500));
            } else {
              if (((s as any).milkedvolume ?? 0) > 0  &&  ((s as any).milkedvolume ?? 0) < 1500  &&  (((s as any).bp_useable_sbottle ?? 0) - ((s as any).bp_used_sbottle ?? 0)) > 0) {
                scene.text('During pumping you have to switch the collecting bottle as it filled up with your milk.');
              } else {
                if (((s as any).milkedvolume ?? 0) > 0  &&  ((s as any).milkedvolume ?? 0) < 2500  &&  ((s as any).milkedvolume ?? 0) > 1500  &&  (((s as any).bp_useable_mbottle ?? 0) - ((s as any).bp_used_mbottle ?? 0)) > 0) {
                  scene.text('During pumping you have to switch the collecting bottle as it filled up with your milk.');
                } else {
                  scene.text('During pumping you have to switch the collecting bottle as it filled up with your milk.');
                }
              }
            }
            if (((s as any).bp_used_mbottle ?? 0) >= 1  ||  ((s as any).bp_used_sbottle ?? 0) >= 1) {
              scene.img('images/pc/body/tits/bottles_full.jpg');
              if (((s as any).milkedvolume ?? 0) === ((((s as any).bp_used_mbottle ?? 0)*2500) + (((s as any).bp_used_sbottle ?? 0)*1500))) {
                // TODO-QSP: dynamic text: You pumped <<milkedvolume/10>>ml of milk from your breasts, collecting it in:
                scene.text(`You pumped ${((s as any).milkedvolume ?? '')/10}ml of milk from your breasts, collecting it in:`);
                if (((s as any).bp_useable_sbottle ?? 0) === 1) {
                  scene.text('One 150ml bottle');
                } else {
                  if (((s as any).bp_used_sbottle ?? 0) > 1) {
                    // TODO-QSP: dynamic text: <<bp_used_sbottle>> x 150ml bottles
                    scene.text(`${((s as any).bp_used_sbottle ?? '')} x 150ml bottles`);
                  }
                }
                if (((s as any).bp_used_mbottle ?? 0) === 1) {
                  scene.text('One 250ml bottle');
                } else {
                  if (((s as any).bp_used_mbottle ?? 0) > 1) {
                    // TODO-QSP: dynamic text: <<bp_used_mbottle>> x 250ml bottles
                    scene.text(`${((s as any).bp_used_mbottle ?? '')} x 250ml bottles`);
                  }
                }
              } else {
                // TODO-QSP: dynamic text: You pumped <<((bp_used_mbottle*2500)+(bp_used_sbottle*1500)+milkedvolume)/10>>ml...
                scene.text(`You pumped ${((((s as any).bp_used_mbottle ?? '')*2500)+(((s as any).bp_used_sbottle ?? '')*1500)+((s as any).milkedvolume ?? ''))/10}ml of milk from your breasts collecting it in:`);
                if (((s as any).bp_used_sbottle ?? 0) === 1) {
                  scene.text('One 150ml bottle');
                } else {
                  if (((s as any).bp_used_sbottle ?? 0) > 1) {
                    // TODO-QSP: dynamic text: <<bp_used_sbottle>> x 150ml bottles
                    scene.text(`${((s as any).bp_used_sbottle ?? '')} x 150ml bottles`);
                  }
                }
                if (((s as any).bp_used_mbottle ?? 0) === 1) {
                  scene.text('One 250ml bottle');
                } else {
                  if (((s as any).bp_used_mbottle ?? 0) > 1) {
                    // TODO-QSP: dynamic text: <<bp_used_mbottle>> x 250ml bottles
                    scene.text(`${((s as any).bp_used_mbottle ?? '')} x 250ml bottles`);
                  }
                }
                if ((((s as any).bp_useable_sbottle ?? 0) - ((s as any).bp_used_sbottle ?? 0)) > 0  &&  ((s as any).milkedvolume ?? 0) <= 1500) {
                  (s as any).bottlecounter = 0;
                  // TODO-QSP: :sbottle_restsearchloop
                  if (((s as any).bottlecounter ?? 0) < (((s as any).mc_inventory ?? 0)?.['bottle_m'] + ((s as any).mc_inventory ?? 0)?.['bottle_s'])) {
                    if (((s as any).mbarrtype ?? 0)?.[String((s as any).bottlecounter ?? 0)] !== 1500  ||  ((s as any).mbarrfill ?? 0)?.[String((s as any).bottlecounter ?? 0)] !== 0) {
                      (s as any).bottlecounter = ((s as any).bottlecounter ?? 0) + (1);
                      // TODO-QSP: jump 'sbottle_restsearchloop'
                    }
                    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).bottlecounter ?? 0), ((s as any).milkedvolume ?? 0)]; enterFillMilkBottle(s, scene); (s as any).locArgs = __savedLocArgs; }
                  }
                  // TODO-QSP: dynamic text: You also stored <<milkedvolume/10>>ml of breast milk in a 150ml bottle.
                  scene.text(`You also stored ${((s as any).milkedvolume ?? '')/10}ml of breast milk in a 150ml bottle.`);
                } else {
                  if ((((s as any).bp_useable_mbottle ?? 0) - ((s as any).bp_used_mbottle ?? 0)) > 0  &&  ((s as any).milkedvolume ?? 0) <= 2500) {
                    (s as any).bottlecounter = 0;
                    // TODO-QSP: :mbottle_restsearchloop
                    if (((s as any).bottlecounter ?? 0) < (((s as any).mc_inventory ?? 0)?.['bottle_m'] + ((s as any).mc_inventory ?? 0)?.['bottle_s'])) {
                      if (((s as any).mbarrtype ?? 0)?.[String((s as any).bottlecounter ?? 0)] !== 2500  ||  ((s as any).mbarrfill ?? 0)?.[String((s as any).bottlecounter ?? 0)] !== 0) {
                        (s as any).bottlecounter = ((s as any).bottlecounter ?? 0) + (1);
                        // TODO-QSP: jump 'mbottle_restsearchloop'
                      }
                      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).bottlecounter ?? 0), ((s as any).milkedvolume ?? 0)]; enterFillMilkBottle(s, scene); (s as any).locArgs = __savedLocArgs; }
                    }
                    // TODO-QSP: dynamic text: You also stored <<milkedvolume/10>>ml of breast milk in a 250ml bottle.
                    scene.text(`You also stored ${((s as any).milkedvolume ?? '')/10}ml of breast milk in a 250ml bottle.`);
                  } else {
                    scene.text('unhandled case - you shouldn\'t end up here. Please report this in the bug section of Girl Life in the tfg-forums.');
                    scene.text('second fork case');
                    // TODO-QSP: dynamic text: bp_used_mbottle: <<bp_used_mbottle>>
                    scene.text(`bp_used_mbottle: ${((s as any).bp_used_mbottle ?? '')}`);
                    // TODO-QSP: dynamic text: bp_used_sbottle: <<bp_used_sbottle>>
                    scene.text(`bp_used_sbottle: ${((s as any).bp_used_sbottle ?? '')}`);
                    // TODO-QSP: dynamic text: milkedvolume: <<milkedvolume>>
                    scene.text(`milkedvolume: ${((s as any).milkedvolume ?? '')}`);
                    // TODO-QSP: dynamic text: pump_bottletype: <<pump_bottletype>>
                    scene.text(`pump_bottletype: ${((s as any).pump_bottletype ?? '')}`);
                    // TODO-QSP: dynamic text: bp_useable_sbottle: <<bp_useable_sbottle>>
                    scene.text(`bp_useable_sbottle: ${((s as any).bp_useable_sbottle ?? '')}`);
                    // TODO-QSP: dynamic text: bp_useable_mbottle: <<bp_useable_mbottle>>
                    scene.text(`bp_useable_mbottle: ${((s as any).bp_useable_mbottle ?? '')}`);
                  }
                }
                (s as any).milkedvolume = ((s as any).milkedvolume ?? 0) + (((s as any).bp_used_mbottle ?? 0)*2500 + ((s as any).bp_used_sbottle ?? 0)*1500);
              }
            } else {
              scene.text('unhandled case - you shouldn\'t end up here. Please report this in the bug section of Girl Life in the tfg-forums.');
              scene.text('third fork case');
              // TODO-QSP: dynamic text: bp_used_mbottle: <<bp_used_mbottle>>
              scene.text(`bp_used_mbottle: ${((s as any).bp_used_mbottle ?? '')}`);
              // TODO-QSP: dynamic text: bp_used_sbottle: <<bp_used_sbottle>>
              scene.text(`bp_used_sbottle: ${((s as any).bp_used_sbottle ?? '')}`);
              // TODO-QSP: dynamic text: milkedvolume: <<milkedvolume>>
              scene.text(`milkedvolume: ${((s as any).milkedvolume ?? '')}`);
              // TODO-QSP: dynamic text: pump_bottletype: <<pump_bottletype>>
              scene.text(`pump_bottletype: ${((s as any).pump_bottletype ?? '')}`);
              // TODO-QSP: dynamic text: bpbottles: <<mc_inventory[''bottle_s'']>>
              scene.text(`bpbottles: ${((s as any).mc_inventory ?? 0)?.['bottle_s'] ?? ''}`);
              // TODO-QSP: dynamic text: bpbottlem: <<mc_inventory[''bottle_m'']>>
              scene.text(`bpbottlem: ${((s as any).mc_inventory ?? 0)?.['bottle_m'] ?? ''}`);
            }
          } else {
            // TODO-QSP: dynamic text: You give it a few more pumps and detach the pump.<br>You filled the bottle with ...
            scene.text(`You give it a few more pumps and detach the pump.<br>You filled the bottle with ${((s as any).milkedvolume ?? '')/10}ml of your milk.`);
            if ((((s as any).bp_useable_sbottle ?? 0) - ((s as any).bp_used_sbottle ?? 0)) > 0  &&  ((s as any).milkedvolume ?? 0) <= 1500) {
              (s as any).bottlecounter = 0;
              // TODO-QSP: :single_sbottle_searchloop
              if (((s as any).bottlecounter ?? 0) < (((s as any).mc_inventory ?? 0)?.['bottle_m'] + ((s as any).mc_inventory ?? 0)?.['bottle_s'])) {
                if (((s as any).mbarrtype ?? 0)?.[String((s as any).bottlecounter ?? 0)] !== 1500  ||  ((s as any).mbarrfill ?? 0)?.[String((s as any).bottlecounter ?? 0)] !== 0) {
                  (s as any).bottlecounter = ((s as any).bottlecounter ?? 0) + (1);
                  // TODO-QSP: jump 'single_sbottle_searchloop'
                }
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).bottlecounter ?? 0), ((s as any).milkedvolume ?? 0)]; enterFillMilkBottle(s, scene); (s as any).locArgs = __savedLocArgs; }
              }
            } else {
              if ((((s as any).bp_useable_mbottle ?? 0) - ((s as any).bp_used_mbottle ?? 0)) > 0  &&  ((s as any).milkedvolume ?? 0) <= 2500) {
                (s as any).bottlecounter = 0;
                // TODO-QSP: :single_mbottle_searchloop
                if (((s as any).bottlecounter ?? 0) < (((s as any).mc_inventory ?? 0)?.['bottle_m'] + ((s as any).mc_inventory ?? 0)?.['bottle_s'])) {
                  if (((s as any).mbarrtype ?? 0)?.[String((s as any).bottlecounter ?? 0)] !== 2500  ||  ((s as any).mbarrfill ?? 0)?.[String((s as any).bottlecounter ?? 0)] !== 0) {
                    (s as any).bottlecounter = ((s as any).bottlecounter ?? 0) + (1);
                    // TODO-QSP: jump 'single_mbottle_searchloop'
                  }
                  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).bottlecounter ?? 0), ((s as any).milkedvolume ?? 0)]; enterFillMilkBottle(s, scene); (s as any).locArgs = __savedLocArgs; }
                }
              } else {
                scene.text('unhandled case - you shouldn\'t end up here. Please report this in the bug section of Girl Life in the tfg-forums.');
                scene.text('second fork case');
                // TODO-QSP: dynamic text: bp_used_mbottle: <<bp_used_mbottle>>
                scene.text(`bp_used_mbottle: ${((s as any).bp_used_mbottle ?? '')}`);
                // TODO-QSP: dynamic text: bp_used_sbottle: <<bp_used_sbottle>>
                scene.text(`bp_used_sbottle: ${((s as any).bp_used_sbottle ?? '')}`);
                // TODO-QSP: dynamic text: milkedvolume: <<milkedvolume>>
                scene.text(`milkedvolume: ${((s as any).milkedvolume ?? '')}`);
                // TODO-QSP: dynamic text: pump_bottletype: <<pump_bottletype>>
                scene.text(`pump_bottletype: ${((s as any).pump_bottletype ?? '')}`);
                // TODO-QSP: dynamic text: bp_useable_sbottle: <<bp_useable_sbottle>>
                scene.text(`bp_useable_sbottle: ${((s as any).bp_useable_sbottle ?? '')}`);
                // TODO-QSP: dynamic text: bp_useable_mbottle: <<bp_useable_mbottle>>
                scene.text(`bp_useable_mbottle: ${((s as any).bp_useable_mbottle ?? '')}`);
              }
            }
            (s as any).milkedvolume = ((s as any).milkedvolume ?? 0) + (((s as any).bp_used_mbottle ?? 0)*2500 + ((s as any).bp_used_sbottle ?? 0)*1500);
          }
        }
        if (((s as any).energytomilkpump ?? 0) > 0) {
          if (((s as any).pcs_energy ?? 0) <= 0) {
            scene.text('<br>During pumping you feel really hungry, producing breast milk seems to be more exhausting then thought.');
            (s as any).energytomilkpump = 0;
          } else {
            scene.text('<br>You feel a bit thirsty after pumping.');
            (s as any).energytomilkpump = 0;
          }
        }
        if (((s as any).drugVars ?? 0)?.['breastcream_dose'] === 1) {
          (s as any).pcs_nips = ((s as any).pcs_nips ?? 0) + ((Math.floor(Math.random() * 3) + 0));
        }
      }
    }
  }
  if (((s as any).milkedvolume ?? 0) <= 0) {
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } else {
    (s as any).lact_engorgement = 0;
    (s as any).lactatemess = 0;
    if (((s as any).pcs_hydra ?? 0) < 100) {
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Drink it (' + String(3 + ((s as any).milkedvolume ?? '')/1500 ?? '') + ' minutes)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (3 + ((st as any).milkedvolume ?? 0) / 1000);
    (st as any).pcs_health = ((st as any).pcs_health ?? 0) + (((st as any).milkedvolume ?? 0) / 400);
    (st as any).pcs_energy = ((st as any).pcs_energy ?? 0) + (((st as any).milkedvolume ?? 0) / 500);
    if (((st as any).pcs_hydra ?? 0) >= 100) {
      (st as any).pcs_hydra = ((st as any).pcs_hydra ?? 0) + (((st as any).milkedvolume ?? 0) / 200);
    } else {
      (st as any).pcs_hydra = ((st as any).pcs_hydra ?? 0) + (((st as any).milkedvolume ?? 0) / 100);
    }
    qspCall(st, 'stat', '');
    scene.img('images/pc/body/tits/milk_drink.jpg');
    scene.text('<center>You drink your own breast milk and clean up your breast pump.</center>');
    scene.text('<center>The milk is still warm from your breasts.</center>');
    (st as any).di_i = 0;
    // TODO-QSP: :di_emptyloop
    if (((st as any).di_i ?? 0) < (((st as any).mc_inventory ?? 0)?.['bottle_m'] + ((st as any).mc_inventory ?? 0)?.['bottle_s'])) {
      if (((st as any).mbarrmage ?? 0)?.[String((st as any).di_i ?? 0)] >= ((st as any).pump_start_timestamp ?? 0)  &&  ((st as any).mbarrmage ?? 0)?.[String((st as any).di_i ?? 0)] <= ((st as any).pump_timestamp ?? 0)) {
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ((st as any).di_i ?? 0)]; enterEmptyMilkBottle(st, scene); (st as any).locArgs = __savedLocArgs; }
      }
      (st as any).di_i = ((st as any).di_i ?? 0) + (1);
      // TODO-QSP: jump 'di_emptyloop'
    }
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (st as any).milkedvolume = 0;
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Pour it into the sink (' + String(3 + ((s as any).milkedvolume ?? '')/1500 ?? '') + ' minutes)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (3 + ((st as any).milkedvolume ?? 0) / 1500);
    qspCall(st, 'stat', '');
    (st as any).piits_i = 0;
    // TODO-QSP: :piits_emptyloop
    if (((st as any).piits_i ?? 0) < (((st as any).mc_inventory ?? 0)?.['bottle_m'] + ((st as any).mc_inventory ?? 0)?.['bottle_s'])) {
      if (((st as any).mbarrmage ?? 0)?.[String((st as any).piits_i ?? 0)] >= ((st as any).pump_start_timestamp ?? 0)  &&  ((st as any).mbarrmage ?? 0)?.[String((st as any).piits_i ?? 0)] <= ((st as any).pump_timestamp ?? 0)) {
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ((st as any).piits_i ?? 0)]; enterEmptyMilkBottle(st, scene); (st as any).locArgs = __savedLocArgs; }
      }
      (st as any).piits_i = ((st as any).piits_i ?? 0) + (1);
      // TODO-QSP: jump 'piits_emptyloop'
    }
    if (((st as any).milkedvolume ?? 0) > 1500  &&  ((st as any).mc_inventory ?? 0)?.['bottle_s'] <= 1) {
      scene.img('images/pc/body/tits/milk_sink.jpg');
      scene.text('<center>You pour 150ml of your breast milk into the sink and clean up your breast pump.</center>');
    } else {
      scene.img('images/pc/body/tits/milk_sink.jpg');
      // TODO-QSP: dynamic text: <center>You pour <<milkedvolume/10>>ml of your breast milk into the sink and cle...
      scene.text(`<center>You pour ${((st as any).milkedvolume ?? '')/10}ml of your breast milk into the sink and clean up your breast pump.</center>`);
    }
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (st as any).milkedvolume = 0;
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      { label: 'Leave it here', handler: (st: GameState) => {
    scene.text('You screw the cap onto the bottle and put it away.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (st as any).milkedvolume = 0;
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterHandMilking(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pain ?? 0)?.['nipples'] >= 60) {
    scene.text('Your nipples are too sore to hand massage right now.');
  } else {
    if (((s as any).lactation ?? 0)?.['active'] === 0) {
      (s as any).minut = ((s as any).minut ?? 0) + (((s as any).pumptime ?? 0));
      (s as any).milkedvolume = qspFunc(s, 'lact_lib', '$get_breastmilk', 5, ((s as any).pumptime ?? 0))/1000;
      (s as any).pcs_massagedherbreasts = ((s as any).pcs_massagedherbreasts ?? 0) + (0);
      scene.text('You start to massage your breasts, your fingers gliding down your breasts skin, over the areolas. Your fingers pressing down into the areola, stretching it forwards to your nipple,');
      scene.text('kneading your breasts as well.');
      scene.img('images/pc/body/tits/bathroom_massage.mp4');
    } else {
      if (((s as any).lactation ?? 0)?.['pc_aware'] > 0) {
        (s as any).minut = ((s as any).minut ?? 0) + (((s as any).pumptime ?? 0));
        (s as any).milkedvolume = qspFunc(s, 'lact_lib', '$get_breastmilk', 5, ((s as any).pumptime ?? 0))/1000;
        scene.text('You start to massage your breasts, your fingers gliding down your breasts skin, over the areolas. Your fingers pressing down into the areola, stretching it forwards to your nipple.');
        scene.text('Several small streams of your milk start to jet out of your nipples.');
        // TODO-QSP: dynamic text: You go on for <<pumptime>> minutes until you stop. You clean yourself up and eve...
        scene.text(`You go on for ${((s as any).pumptime ?? '')} minutes until you stop. You clean yourself up and everything else that got wet from your milk.<br>`);
        scene.img('images/pc/body/tits/bathroom_milking.mp4');
      } else {
        if (((s as any).lactation ?? 0)?.['pc_aware'] <= 0) {
          ((s as any).lactation = (s as any).lactation ?? {})['pc_aware'] = 1;
          scene.img('images/pc/body/tits/lactate_start.jpg');
          if (((s as any).pcs_usedbreastpumponherself ?? 0) > 0) {
            ((s as any).lactation = (s as any).lactation ?? {})['induced'] = 1;
            if (((s as any).pcs_massagedherbreasts ?? 0) > 0) {
              scene.text('You start to massage your breasts, your fingers gliding down your breasts skin, over the areolas. Your fingers pressing down into the areola, stretching it forwards to your nipple. After a few squeezes white liquid suddenly starts flowing from your nipples. All that pumping and massaging your breasts probably caused you to lactate!<br>');
            } else {
              scene.text('You start to massage your breasts, your fingers gliding down your breasts skin, over the areolas. Your fingers pressing down into the areola, stretching it forwards to your nipple. After a few squeezes white liquid suddenly starts flowing from your nipples.<br>Using the breast pump regularly probably made you lactate!');
            }
          } else {
            if (((s as any).pcs_massagedherbreasts ?? 0) > 0) {
              ((s as any).lactation = (s as any).lactation ?? {})['induced'] = 1;
              scene.text('You start to massage your breasts, your fingers gliding down your breasts skin, over the areolas. Your fingers pressing down into the areola, stretching it forwards to your nipple. After a few squeezes white liquid suddenly starts flowing from your nipples. Regularly massaging your breasts probably made you lactate!<br>');
            } else {
              ((s as any).lactation = (s as any).lactation ?? {})['induced'] = 0;
              scene.text('You start to massage your breasts, your fingers gliding down your breasts skin, over the areolas. Your fingers pressing down into the areola, stretching it forwards to your nipple. To your surprise white liquid suddenly starts flowing from your nipples. You started lactating!<br>');
              if (((s as any).thinkpreg ?? 0) === 1  ||  ((s as any).knowpreg ?? 0) === 1) {
                scene.text('This is probably happening because you are pregnant.');
              } else {
                scene.text('You should have this checked out by a doctor. You could be pregnant.');
              }
            }
          }
          (s as any).pcs_usedbreastpumponherself = 0;
          (s as any).pcs_massagedherbreasts = 0;
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    (st as any).menu_off = 0;
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
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
    case 'update_mbottle':
      enterUpdateMbottle(s, scene);
      break;
    case 'useable_sbottle_count':
      enterUseableSbottleCount(s, scene);
      break;
    case 'useable_mbottle_count':
      enterUseableMbottleCount(s, scene);
      break;
    case 'bp_milking':
      enterBpMilking(s, scene);
      break;
    case 'massage':
      enterMassage(s, scene);
      break;
    case 'man_milking':
      enterManMilking(s, scene);
      break;
    case 'bp_unbox_event':
      enterBpUnboxEvent(s, scene);
      break;
    case 'reg_bottle_count':
      enterRegBottleCount(s, scene);
      break;
    case 'milking':
      enterMilking(s, scene);
      break;
    case 'hand_milking':
      enterHandMilking(s, scene);
      break;
    default:
      enterDefault(s, scene);
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
