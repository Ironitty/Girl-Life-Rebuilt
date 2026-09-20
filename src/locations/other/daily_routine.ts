import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSettingsDefaults(s, scene); (s as any).locArgs = __savedLocArgs; }
  ((s as any).droutine = (s as any).droutine ?? {})['phase'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).droutine = (s as any).droutine ?? {})['return_loc'] = ((s as any).loc ?? 0);
  ((s as any).droutine = (s as any).droutine ?? {})['return_arg'] = ((s as any).loc_arg ?? 0);
  ((s as any).droutine = (s as any).droutine ?? {})['active'] = 1;
  ((s as any).droutine = (s as any).droutine ?? {})['active_slot'] = 0;
  ((s as any).droutine = (s as any).droutine ?? {})['day_anchor'] = qspFunc(s, 'daily_routine', 'logical_day', ((s as any).locArgs?.[1] ?? 0));
  qspGoto(s, 'daily_routine', 'hub');
  // TODO-QSP: end
  scene.build();
}

function enterFinishStep(s: GameState, scene: SceneBuilder): void {
  if (((s as any).droutine ?? 0)?.['active'] === 1) {
    if (((s as any).droutine ?? 0)?.['active_slot'] > 0) {
      // TODO-QSP: droutine_done[droutine['active_slot']] = 1
    }
    ((s as any).droutine = (s as any).droutine ?? {})['active_slot'] = 0;
    qspGoto(s, 'daily_routine', 'hub');
  } else {
    // TODO-QSP: gt $ARGS[1], $ARGS[2]
  }
  // TODO-QSP: end
  scene.build();
}

function enterHub(s: GameState, scene: SceneBuilder): void {
  ((s as any).droutine = (s as any).droutine ?? {})['active_slot'] = 0;
  if (((s as any).droutine ?? 0)?.['phase'] === 'evening') {
    scene.text('<center><b>Evening routine</b></center>');
  } else {
    scene.text('<center><b>Morning routine</b></center>');
  }
  (s as any).temp_drc = ((s as any).droutine ?? 0)?.['' + ((s as any).droutine ?? 0)?.['phase'] + '_count'];
  if (((s as any).temp_drc ?? 0) <= 0) {
    scene.text('This routine has no steps set up yet.');
    scene.actions([
{ label: 'Done', goto: ['daily_routine', 'finish'] },
]);
    return;
  }
  (s as any).temp_dri = 0;
  (s as any).dr_any = 0;
  (s as any).dr_unavail = '';
  // TODO-QSP: :droutine_hub_loop
  (s as any).temp_dri = ((s as any).temp_dri ?? 0) + (1);
  if (((s as any).temp_dri ?? 0) <= ((s as any).temp_drc ?? 0)) {
    if (((s as any).droutine_done ?? 0)?.[String((s as any).temp_dri ?? 0)] === 0) {
      ((s as any).droutine = (s as any).droutine ?? {})['current_label'] = ((s as any).droutine ?? 0)?.['' + ((s as any).droutine ?? 0)?.['phase'] + '_step_' + ((s as any).temp_dri ?? 0) + ''];
      ((s as any).droutine = (s as any).droutine ?? {})['current_runner'] = '';
      ((s as any).droutine = (s as any).droutine ?? {})['skip_reason'] = '';
      ((s as any).droutine = (s as any).droutine ?? {})['can_run'] = 1;
      ((s as any).droutine = (s as any).droutine ?? {})['current_quick'] = 0;
      // TODO-QSP: gs 'daily_routine', 'resolve', $droutine['<<$droutine[''phase'']>>_step_<<temp_dri>>']
      if (((s as any).droutine ?? 0)?.['can_run'] !== 0  &&  ((s as any).droutine ?? 0)?.['current_runner'] !== '') {
        if (((s as any).dr_any ?? 0) === 0  &&  ((s as any).droutine_settings ?? 0)?.['quick_routine'] === 1  &&  ((s as any).droutine ?? 0)?.['current_quick'] === 1) {
          ((s as any).droutine = (s as any).droutine ?? {})['active_slot'] = ((s as any).temp_dri ?? 0);
          return;
        }
        (s as any).dr_any = 1;
        // TODO-QSP: dynamic "act '<<$droutine['current_label']>>': droutine['active_slot'] = <<temp_dri>> & <<$droutine[...
      } else {
        if (((s as any).dr_unavail ?? 0) !== '') {
          // TODO-QSP: $dr_unavail += ', '
        }
        // TODO-QSP: $dr_unavail += $droutine['current_label']
        if (((s as any).droutine ?? 0)?.['skip_reason'] !== '') {
          // TODO-QSP: $dr_unavail += ' (<<$droutine[''skip_reason'']>>)'
        }
      }
    }
    // TODO-QSP: jump 'droutine_hub_loop'
  }
  if ((!((s as any).dr_any ?? 0))) {
    scene.text('Everything that can be done right now is finished.');
  }
  if (((s as any).dr_unavail ?? 0) !== '') {
    // TODO-QSP: dynamic text: <i>Not available now: <<$dr_unavail>>.</i>
    scene.text(`<i>Not available now: ${((s as any).dr_unavail ?? '')}.</i>`);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish routine', goto: ['daily_routine', 'finish'] },
  ]);
  scene.build();
}

function enterFinish(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: droutine_settings['<<$droutine[''phase'']>>_done_day'] = droutine['day_anchor']
  ((s as any).droutine = (s as any).droutine ?? {})['active'] = 0;
  ((s as any).droutine = (s as any).droutine ?? {})['active_slot'] = 0;
  dynamicGoto(s, (((s as any).droutine ?? {}))['return_loc'], (((s as any).droutine ?? {}))['return_arg']);
  // TODO-QSP: end
  scene.build();
}

function enterAbort(s: GameState, scene: SceneBuilder): void {
  ((s as any).droutine = (s as any).droutine ?? {})['active'] = 0;
  ((s as any).droutine = (s as any).droutine ?? {})['active_slot'] = 0;
  // TODO-QSP: end
  scene.build();
}

function enterCanUseHere(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'homes_properties', 'is_at_a_home', '');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterOfferHere(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'daily_routine', 'can_use_here') === 0) {
    // TODO-QSP: exit
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSettingsDefaults(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).droutine_settings ?? 0)?.['disabled'] === 1) {
    // TODO-QSP: exit
  }
  if (((s as any).droutine ?? 0)?.['morning_count'] > 0  &&  qspFunc(s, 'daily_routine', 'phase_available', 'morning')) {
    scene.actions([
      { label: 'Start your morning routine', goto: ['daily_routine', 'start', 'morning'] },
    ]);
  }
  if (((s as any).droutine ?? 0)?.['evening_count'] > 0  &&  qspFunc(s, 'daily_routine', 'phase_available', 'evening')) {
    scene.actions([
      { label: 'Start your evening routine', goto: ['daily_routine', 'start', 'evening'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSettingsDefaults(s: GameState, scene: SceneBuilder): void {
  if (((s as any).droutine_settings ?? 0)?.['init'] === 1) {
    // TODO-QSP: exit
  }
  ((s as any).droutine_settings = (s as any).droutine_settings ?? {})['init'] = 1;
  ((s as any).droutine_settings = (s as any).droutine_settings ?? {})['disabled'] = 1;
  ((s as any).droutine_settings = (s as any).droutine_settings ?? {})['morning_use_wake'] = 1;
  ((s as any).droutine_settings = (s as any).droutine_settings ?? {})['morning_wake_min'] = 120;
  ((s as any).droutine_settings = (s as any).droutine_settings ?? {})['morning_use_abs'] = 0;
  ((s as any).droutine_settings = (s as any).droutine_settings ?? {})['morning_abs_start'] = 5;
  ((s as any).droutine_settings = (s as any).droutine_settings ?? {})['morning_abs_end'] = 11;
  ((s as any).droutine_settings = (s as any).droutine_settings ?? {})['evening_use_abs'] = 1;
  ((s as any).droutine_settings = (s as any).droutine_settings ?? {})['evening_abs_start'] = 20;
  ((s as any).droutine_settings = (s as any).droutine_settings ?? {})['evening_abs_end'] = 1;
  ((s as any).droutine_settings = (s as any).droutine_settings ?? {})['makeup_level'] = 1;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterInHourWindow(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
  if (Number((s as any).locArgs?.[1] ?? 0) === Number((s as any).locArgs?.[2] ?? 0)) {
    (s as any).result = 0;
  } else {
    if (Number((s as any).locArgs?.[1] ?? 0) < Number((s as any).locArgs?.[2] ?? 0)) {
      if (((s as any).hour ?? 0) >= Number((s as any).locArgs?.[1] ?? 0)  &&  ((s as any).hour ?? 0) < Number((s as any).locArgs?.[2] ?? 0)) {
        (s as any).result = 1;
      }
    } else {
      if (((s as any).hour ?? 0) >= Number((s as any).locArgs?.[1] ?? 0)  ||  ((s as any).hour ?? 0) < Number((s as any).locArgs?.[2] ?? 0)) {
        (s as any).result = 1;
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterLogicalDay(s: GameState, scene: SceneBuilder): void {
  (s as any).dr_ld = ((s as any).locArgs?.[1] ?? 0);
  if (((s as any).dr_ld ?? 0) !== 'evening') {
    (s as any).dr_ld = 'morning';
  }
  (s as any).result = ((s as any).daystart ?? 0);
  if (((s as any).droutine_settings ?? 0)[((s as any).dr_ld ?? 0) + '_use_abs'] === 1  &&  ((s as any).droutine_settings ?? 0)[((s as any).dr_ld ?? 0) + '_abs_end'] < ((s as any).droutine_settings ?? 0)[((s as any).dr_ld ?? 0) + '_abs_start']  &&  ((s as any).hour ?? 0) < ((s as any).droutine_settings ?? 0)[((s as any).dr_ld ?? 0) + '_abs_end']) {
    (s as any).result = ((s as any).daystart ?? 0) - 1;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterPhaseAvailable(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSettingsDefaults(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).result = 0;
  (s as any).dr_pa = ((s as any).locArgs?.[1] ?? 0);
  if (((s as any).dr_pa ?? 0) !== 'evening') {
    (s as any).dr_pa = 'morning';
  }
  if (((s as any).droutine_settings ?? 0)[((s as any).dr_pa ?? 0) + '_done_day'] === qspFunc(s, 'daily_routine', 'logical_day', ((s as any).dr_pa ?? 0))) {
    return;
  }
  if (((s as any).droutine_settings ?? 0)[((s as any).dr_pa ?? 0) + '_use_wake'] === 1  &&  ((s as any).droutine ?? 0)?.['woke_at_min'] > 0) {
    (s as any).dr_pa_elapsed = ((s as any).totminut ?? 0) - (((s as any).droutine ?? {})?.['woke_at_min'] ?? 0);
    if (((s as any).dr_pa_elapsed ?? 0) >= 0  &&  ((s as any).dr_pa_elapsed ?? 0) <= ((s as any).droutine_settings ?? 0)[((s as any).dr_pa ?? 0) + '_wake_min']) {
      (s as any).result = 1;
    }
  }
  if (((s as any).droutine_settings ?? 0)[((s as any).dr_pa ?? 0) + '_use_abs'] === 1) {
    if (qspFunc(s, 'daily_routine', 'in_hour_window', qspUntranslated(s, "droutine_settings[\u00000\u0000]", { location: "daily_routine" }), qspUntranslated(s, "droutine_settings[\u00001\u0000]", { location: "daily_routine" }))) {
      (s as any).result = 1;
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterVisitItemDone(s: GameState, scene: SceneBuilder): void {
  if (((s as any).droutine ?? 0)?.['active'] === 1) {
    if (((s as any).droutine ?? 0)?.['active_slot'] > 0) {
      // TODO-QSP: droutine_done[droutine['active_slot']] = 1
    }
    ((s as any).droutine = (s as any).droutine ?? {})['active_slot'] = 0;
    qspGoto(s, 'daily_routine', 'hub');
  } else {
    dynamicGoto(s, 'prevLoc', 'prevArg');
  }
  // TODO-QSP: end
  scene.build();
}

function enterResolve(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic "gs 'daily_routine', 'step_<<$ARGS[1]>>'"
  // TODO-QSP: end
  scene.build();
}

function enterStepTeeth(s: GameState, scene: SceneBuilder): void {
  ((s as any).droutine = (s as any).droutine ?? {})['current_label'] = 'Brush teeth';
  ((s as any).droutine = (s as any).droutine ?? {})['current_category'] = 'Hygiene';
  ((s as any).droutine = (s as any).droutine ?? {})['current_style'] = 'chain';
  ((s as any).droutine = (s as any).droutine ?? {})['current_room'] = 'bathroom';
  ((s as any).droutine = (s as any).droutine ?? {})['current_runner'] = 'gt \'din_van\', \'bteeth_do\'';
  ((s as any).droutine = (s as any).droutine ?? {})['can_run'] = qspFunc(s, 'din_van', 'can_bteeth');
  ((s as any).droutine = (s as any).droutine ?? {})['current_quick'] = 1;
  ((s as any).droutine = (s as any).droutine ?? {})['skip_reason'] = 'breath already fresh';
  // TODO-QSP: end
  scene.build();
}

function enterStepMouthwash(s: GameState, scene: SceneBuilder): void {
  ((s as any).droutine = (s as any).droutine ?? {})['current_label'] = 'Use mouthwash';
  ((s as any).droutine = (s as any).droutine ?? {})['current_category'] = 'Hygiene';
  ((s as any).droutine = (s as any).droutine ?? {})['current_style'] = 'chain';
  ((s as any).droutine = (s as any).droutine ?? {})['current_room'] = 'bathroom';
  ((s as any).droutine = (s as any).droutine ?? {})['current_runner'] = 'gt \'din_bad\', \'d_mouthwash_do\'';
  ((s as any).droutine = (s as any).droutine ?? {})['can_run'] = qspFunc(s, 'din_bad', 'can_mouthwash');
  ((s as any).droutine = (s as any).droutine ?? {})['current_quick'] = 1;
  ((s as any).droutine = (s as any).droutine ?? {})['skip_reason'] = 'no mouthwash on hand';
  // TODO-QSP: end
  scene.build();
}

function enterStepShower(s: GameState, scene: SceneBuilder): void {
  ((s as any).droutine = (s as any).droutine ?? {})['current_label'] = 'Take a shower';
  ((s as any).droutine = (s as any).droutine ?? {})['current_category'] = 'Hygiene';
  ((s as any).droutine = (s as any).droutine ?? {})['current_style'] = 'chain';
  ((s as any).droutine = (s as any).droutine ?? {})['current_room'] = 'bathroom';
  ((s as any).droutine = (s as any).droutine ?? {})['current_runner'] = 'gt \'din_van\', \'shower_do\'';
  ((s as any).droutine = (s as any).droutine ?? {})['can_run'] = qspFunc(s, 'din_van', 'can_shower');
  ((s as any).droutine = (s as any).droutine ?? {})['skip_reason'] = '';
  // TODO-QSP: end
  scene.build();
}

function enterStepBath(s: GameState, scene: SceneBuilder): void {
  ((s as any).droutine = (s as any).droutine ?? {})['current_label'] = 'Soak in the bath';
  ((s as any).droutine = (s as any).droutine ?? {})['current_category'] = 'Hygiene';
  ((s as any).droutine = (s as any).droutine ?? {})['current_style'] = 'chain';
  ((s as any).droutine = (s as any).droutine ?? {})['current_room'] = 'bathroom';
  ((s as any).droutine = (s as any).droutine ?? {})['current_runner'] = 'gt \'din_van\', \'bath_do\'';
  ((s as any).droutine = (s as any).droutine ?? {})['can_run'] = qspFunc(s, 'din_van', 'can_bath');
  ((s as any).droutine = (s as any).droutine ?? {})['skip_reason'] = '';
  // TODO-QSP: end
  scene.build();
}

function enterStepQuickwash(s: GameState, scene: SceneBuilder): void {
  ((s as any).droutine = (s as any).droutine ?? {})['current_label'] = 'Quick wash';
  ((s as any).droutine = (s as any).droutine ?? {})['current_category'] = 'Hygiene';
  ((s as any).droutine = (s as any).droutine ?? {})['current_style'] = 'chain';
  ((s as any).droutine = (s as any).droutine ?? {})['current_room'] = 'bathroom';
  ((s as any).droutine = (s as any).droutine ?? {})['current_runner'] = 'gt \'din_van\', \'quickwash_do\'';
  ((s as any).droutine = (s as any).droutine ?? {})['can_run'] = qspFunc(s, 'din_van', 'can_quickwash');
  ((s as any).droutine = (s as any).droutine ?? {})['current_quick'] = 1;
  ((s as any).droutine = (s as any).droutine ?? {})['skip_reason'] = 'nothing to wash off';
  // TODO-QSP: end
  scene.build();
}

function enterStepDeodorant(s: GameState, scene: SceneBuilder): void {
  ((s as any).droutine = (s as any).droutine ?? {})['current_label'] = 'Apply deodorant';
  ((s as any).droutine = (s as any).droutine ?? {})['current_category'] = 'Hygiene';
  ((s as any).droutine = (s as any).droutine ?? {})['current_style'] = 'chain';
  ((s as any).droutine = (s as any).droutine ?? {})['current_room'] = 'bathroom';
  ((s as any).droutine = (s as any).droutine ?? {})['current_runner'] = 'gt \'din_van\', \'deodorant_do\'';
  ((s as any).droutine = (s as any).droutine ?? {})['can_run'] = qspFunc(s, 'din_van', 'can_deodorant');
  ((s as any).droutine = (s as any).droutine ?? {})['current_quick'] = 1;
  ((s as any).droutine = (s as any).droutine ?? {})['skip_reason'] = 'no deodorant or already applied';
  // TODO-QSP: end
  scene.build();
}

function enterStepSkincare(s: GameState, scene: SceneBuilder): void {
  ((s as any).droutine = (s as any).droutine ?? {})['current_label'] = 'Skin care';
  ((s as any).droutine = (s as any).droutine ?? {})['current_category'] = 'Hygiene';
  ((s as any).droutine = (s as any).droutine ?? {})['current_style'] = 'chain';
  ((s as any).droutine = (s as any).droutine ?? {})['current_room'] = 'bathroom';
  ((s as any).droutine = (s as any).droutine ?? {})['current_runner'] = 'gt \'din_van\', \'skincare_do\'';
  ((s as any).droutine = (s as any).droutine ?? {})['can_run'] = qspFunc(s, 'din_van', 'can_skincare');
  ((s as any).droutine = (s as any).droutine ?? {})['current_quick'] = 1;
  ((s as any).droutine = (s as any).droutine ?? {})['skip_reason'] = 'no skin care products';
  // TODO-QSP: end
  scene.build();
}

function enterStepShave(s: GameState, scene: SceneBuilder): void {
  ((s as any).droutine = (s as any).droutine ?? {})['current_label'] = 'Shave';
  ((s as any).droutine = (s as any).droutine ?? {})['current_category'] = 'Hygiene';
  ((s as any).droutine = (s as any).droutine ?? {})['current_style'] = 'chain';
  ((s as any).droutine = (s as any).droutine ?? {})['current_room'] = 'bathroom';
  ((s as any).droutine = (s as any).droutine ?? {})['current_runner'] = 'gt \'din_van\', \'brit\'';
  ((s as any).droutine = (s as any).droutine ?? {})['can_run'] = qspFunc(s, 'din_van', 'can_shave');
  ((s as any).droutine = (s as any).droutine ?? {})['skip_reason'] = 'nothing to shave';
  // TODO-QSP: end
  scene.build();
}

function enterStepEnema(s: GameState, scene: SceneBuilder): void {
  ((s as any).droutine = (s as any).droutine ?? {})['current_label'] = 'Use an enema';
  ((s as any).droutine = (s as any).droutine ?? {})['current_category'] = 'Hygiene';
  ((s as any).droutine = (s as any).droutine ?? {})['current_style'] = 'chain';
  ((s as any).droutine = (s as any).droutine ?? {})['current_room'] = 'bathroom';
  ((s as any).droutine = (s as any).droutine ?? {})['current_runner'] = 'gt \'din_van\', \'enema_do\'';
  ((s as any).droutine = (s as any).droutine ?? {})['can_run'] = qspFunc(s, 'din_van', 'can_enema');
  ((s as any).droutine = (s as any).droutine ?? {})['current_quick'] = 1;
  ((s as any).droutine = (s as any).droutine ?? {})['skip_reason'] = 'no enema kit or already done today';
  // TODO-QSP: end
  scene.build();
}

function enterStepTampon(s: GameState, scene: SceneBuilder): void {
  ((s as any).droutine = (s as any).droutine ?? {})['current_label'] = 'Change tampon or pad';
  ((s as any).droutine = (s as any).droutine ?? {})['current_category'] = 'Hygiene';
  ((s as any).droutine = (s as any).droutine ?? {})['current_style'] = 'chain';
  ((s as any).droutine = (s as any).droutine ?? {})['current_room'] = 'bathroom';
  ((s as any).droutine = (s as any).droutine ?? {})['current_runner'] = 'gt \'din_van\', \'tampon_do\'';
  ((s as any).droutine = (s as any).droutine ?? {})['can_run'] = qspFunc(s, 'din_van', 'can_tampon');
  ((s as any).droutine = (s as any).droutine ?? {})['current_quick'] = 1;
  ((s as any).droutine = (s as any).droutine ?? {})['skip_reason'] = 'no period product needed';
  // TODO-QSP: end
  scene.build();
}

function enterStepPeeprivate(s: GameState, scene: SceneBuilder): void {
  ((s as any).droutine = (s as any).droutine ?? {})['current_label'] = 'Use the toilet';
  ((s as any).droutine = (s as any).droutine ?? {})['current_category'] = 'Hygiene';
  ((s as any).droutine = (s as any).droutine ?? {})['current_style'] = 'chain';
  ((s as any).droutine = (s as any).droutine ?? {})['current_room'] = 'bathroom';
  ((s as any).droutine = (s as any).droutine ?? {})['current_runner'] = 'gt \'din_van\', \'prvt_pee_do\'';
  ((s as any).droutine = (s as any).droutine ?? {})['can_run'] = qspFunc(s, 'din_van', 'can_prvt_pee');
  ((s as any).droutine = (s as any).droutine ?? {})['current_quick'] = 1;
  ((s as any).droutine = (s as any).droutine ?? {})['skip_reason'] = 'no need yet';
  // TODO-QSP: end
  scene.build();
}

function enterStepRemovemakeup(s: GameState, scene: SceneBuilder): void {
  ((s as any).droutine = (s as any).droutine ?? {})['current_label'] = 'Remove makeup';
  ((s as any).droutine = (s as any).droutine ?? {})['current_category'] = 'Hygiene';
  ((s as any).droutine = (s as any).droutine ?? {})['current_style'] = 'chain';
  ((s as any).droutine = (s as any).droutine ?? {})['current_room'] = 'bathroom';
  ((s as any).droutine = (s as any).droutine ?? {})['current_runner'] = 'gt \'din_van\', \'removemakeup_do\'';
  ((s as any).droutine = (s as any).droutine ?? {})['can_run'] = qspFunc(s, 'din_van', 'can_removemakeup');
  ((s as any).droutine = (s as any).droutine ?? {})['current_quick'] = 1;
  ((s as any).droutine = (s as any).droutine ?? {})['skip_reason'] = 'not wearing makeup';
  // TODO-QSP: end
  scene.build();
}

function enterStepRemovelashes(s: GameState, scene: SceneBuilder): void {
  ((s as any).droutine = (s as any).droutine ?? {})['current_label'] = 'Remove false lashes';
  ((s as any).droutine = (s as any).droutine ?? {})['current_category'] = 'Hygiene';
  ((s as any).droutine = (s as any).droutine ?? {})['current_style'] = 'chain';
  ((s as any).droutine = (s as any).droutine ?? {})['current_room'] = 'bathroom';
  ((s as any).droutine = (s as any).droutine ?? {})['current_runner'] = 'gt \'din_van\', \'removelashes_do\'';
  ((s as any).droutine = (s as any).droutine ?? {})['can_run'] = qspFunc(s, 'din_van', 'can_removelashes');
  ((s as any).droutine = (s as any).droutine ?? {})['current_quick'] = 1;
  ((s as any).droutine = (s as any).droutine ?? {})['skip_reason'] = 'no false lashes';
  // TODO-QSP: end
  scene.build();
}

function enterStepButtplugIn(s: GameState, scene: SceneBuilder): void {
  ((s as any).droutine = (s as any).droutine ?? {})['current_label'] = 'Insert butt plug';
  ((s as any).droutine = (s as any).droutine ?? {})['current_category'] = 'Body';
  ((s as any).droutine = (s as any).droutine ?? {})['current_style'] = 'chain';
  ((s as any).droutine = (s as any).droutine ?? {})['current_room'] = 'bathroom';
  ((s as any).droutine = (s as any).droutine ?? {})['current_runner'] = 'gt \'din_van\', \'buttplug_in_do\'';
  ((s as any).droutine = (s as any).droutine ?? {})['can_run'] = qspFunc(s, 'din_van', 'can_buttplug_in');
  ((s as any).droutine = (s as any).droutine ?? {})['current_quick'] = 1;
  ((s as any).droutine = (s as any).droutine ?? {})['skip_reason'] = 'no plug or already in';
  // TODO-QSP: end
  scene.build();
}

function enterStepButtplugOut(s: GameState, scene: SceneBuilder): void {
  ((s as any).droutine = (s as any).droutine ?? {})['current_label'] = 'Remove butt plug';
  ((s as any).droutine = (s as any).droutine ?? {})['current_category'] = 'Body';
  ((s as any).droutine = (s as any).droutine ?? {})['current_style'] = 'chain';
  ((s as any).droutine = (s as any).droutine ?? {})['current_room'] = 'bathroom';
  ((s as any).droutine = (s as any).droutine ?? {})['current_runner'] = 'gt \'din_van\', \'buttplug_out_do\'';
  ((s as any).droutine = (s as any).droutine ?? {})['can_run'] = qspFunc(s, 'din_van', 'can_buttplug_out');
  ((s as any).droutine = (s as any).droutine ?? {})['current_quick'] = 1;
  ((s as any).droutine = (s as any).droutine ?? {})['skip_reason'] = 'not wearing one';
  // TODO-QSP: end
  scene.build();
}

function enterStepVibeIn(s: GameState, scene: SceneBuilder): void {
  ((s as any).droutine = (s as any).droutine ?? {})['current_label'] = 'Insert vibrator';
  ((s as any).droutine = (s as any).droutine ?? {})['current_category'] = 'Body';
  ((s as any).droutine = (s as any).droutine ?? {})['current_style'] = 'chain';
  ((s as any).droutine = (s as any).droutine ?? {})['current_room'] = 'bathroom';
  ((s as any).droutine = (s as any).droutine ?? {})['current_runner'] = 'gt \'din_van\', \'vibe_in_do\'';
  ((s as any).droutine = (s as any).droutine ?? {})['can_run'] = qspFunc(s, 'din_van', 'can_vibe_in');
  ((s as any).droutine = (s as any).droutine ?? {})['current_quick'] = 1;
  ((s as any).droutine = (s as any).droutine ?? {})['skip_reason'] = 'unavailable';
  // TODO-QSP: end
  scene.build();
}

function enterStepVibeOut(s: GameState, scene: SceneBuilder): void {
  ((s as any).droutine = (s as any).droutine ?? {})['current_label'] = 'Remove vibrator';
  ((s as any).droutine = (s as any).droutine ?? {})['current_category'] = 'Body';
  ((s as any).droutine = (s as any).droutine ?? {})['current_style'] = 'chain';
  ((s as any).droutine = (s as any).droutine ?? {})['current_room'] = 'bathroom';
  ((s as any).droutine = (s as any).droutine ?? {})['current_runner'] = 'gt \'din_van\', \'vibe_out_do\'';
  ((s as any).droutine = (s as any).droutine ?? {})['can_run'] = qspFunc(s, 'din_van', 'can_vibe_out');
  ((s as any).droutine = (s as any).droutine ?? {})['current_quick'] = 1;
  ((s as any).droutine = (s as any).droutine ?? {})['skip_reason'] = 'not wearing one';
  // TODO-QSP: end
  scene.build();
}

function enterStepApplyMakeup(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSettingsDefaults(s, scene); (s as any).locArgs = __savedLocArgs; }
  ((s as any).droutine = (s as any).droutine ?? {})['current_label'] = 'Apply makeup';
  ((s as any).droutine = (s as any).droutine ?? {})['current_category'] = 'Appearance';
  ((s as any).droutine = (s as any).droutine ?? {})['current_style'] = 'chain';
  ((s as any).droutine = (s as any).droutine ?? {})['current_room'] = 'bathroom';
  ((s as any).droutine = (s as any).droutine ?? {})['current_runner'] = 'gt \'mirror\', \'apply_makeup_do\'';
  ((s as any).droutine = (s as any).droutine ?? {})['can_run'] = ((((s as any).droutine_settings ?? 0)?.['makeup_level'] === 4) ? ((((s as any).mc_inventory ?? 0)?.['cosmetics'] >= 3  &&  ((s as any).pcs_makeup ?? 0) !== 0)) : ((((s as any).droutine_settings ?? 0)?.['makeup_level'] > 0  &&  ((s as any).mc_inventory ?? 0)?.['cosmetics'] >= Math.min(((s as any).droutine_settings ?? 0)?.['makeup_level'], 3)  &&  ((s as any).pcs_makeup ?? 0) < ((s as any).droutine_settings ?? 0)?.['makeup_level'] + 1)));
  ((s as any).droutine = (s as any).droutine ?? {})['current_quick'] = 1;
  ((s as any).droutine = (s as any).droutine ?? {})['skip_reason'] = 'no cosmetics or already applied';
  // TODO-QSP: end
  scene.build();
}

function enterStepBrushHair(s: GameState, scene: SceneBuilder): void {
  ((s as any).droutine = (s as any).droutine ?? {})['current_label'] = 'Brush hair';
  ((s as any).droutine = (s as any).droutine ?? {})['current_category'] = 'Appearance';
  ((s as any).droutine = (s as any).droutine ?? {})['current_style'] = 'chain';
  ((s as any).droutine = (s as any).droutine ?? {})['current_room'] = 'bathroom';
  ((s as any).droutine = (s as any).droutine ?? {})['current_runner'] = 'gt \'mirror\', \'brush_hair_do\'';
  ((s as any).droutine = (s as any).droutine ?? {})['can_run'] = 1;
  ((s as any).droutine = (s as any).droutine ?? {})['current_quick'] = 1;
  ((s as any).droutine = (s as any).droutine ?? {})['skip_reason'] = '';
  // TODO-QSP: end
  scene.build();
}

function enterStepLipbalm(s: GameState, scene: SceneBuilder): void {
  ((s as any).droutine = (s as any).droutine ?? {})['current_label'] = 'Apply lip balm';
  ((s as any).droutine = (s as any).droutine ?? {})['current_category'] = 'Appearance';
  ((s as any).droutine = (s as any).droutine ?? {})['current_style'] = 'chain';
  ((s as any).droutine = (s as any).droutine ?? {})['current_room'] = 'bathroom';
  ((s as any).droutine = (s as any).droutine ?? {})['current_runner'] = 'gt \'mirror\', \'lipbalm_do\'';
  ((s as any).droutine = (s as any).droutine ?? {})['can_run'] = (((s as any).mc_inventory ?? 0)?.['lipbalm'] > 0  &&  ((s as any).pcs_lipbalm ?? 0) <= 0);
  ((s as any).droutine = (s as any).droutine ?? {})['current_quick'] = 1;
  ((s as any).droutine = (s as any).droutine ?? {})['skip_reason'] = 'no lip balm or already applied';
  // TODO-QSP: end
  scene.build();
}

function enterStepApplyLashes(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSettingsDefaults(s, scene); (s as any).locArgs = __savedLocArgs; }
  ((s as any).droutine = (s as any).droutine ?? {})['current_label'] = 'Apply false lashes';
  ((s as any).droutine = (s as any).droutine ?? {})['current_category'] = 'Appearance';
  ((s as any).droutine = (s as any).droutine ?? {})['current_style'] = 'chain';
  ((s as any).droutine = (s as any).droutine ?? {})['current_room'] = 'bathroom';
  ((s as any).droutine = (s as any).droutine ?? {})['current_runner'] = 'gt \'mirror\', \'apply_lashes_do\'';
  if (((s as any).droutine_settings ?? 0)?.['lashes_type'] === 1) {
    ((s as any).droutine = (s as any).droutine ?? {})['can_run'] = (((s as any).mc_inventory ?? 0)?.['eyelash_fake'] >= 1  &&  ((s as any).lashextensionstyle ?? 0) <= 0  &&  ((s as any).pcs_lashes ?? 0) < 3);
  } else {
    if (((s as any).droutine_settings ?? 0)?.['lashes_type'] === 2) {
      ((s as any).droutine = (s as any).droutine ?? {})['can_run'] = (((s as any).mc_inventory ?? 0)?.['eyelash_mink'] >= 1  &&  ((s as any).lashextensionstyle ?? 0) <= 0  &&  ((s as any).pcs_lashes ?? 0) < 4);
    } else {
      ((s as any).droutine = (s as any).droutine ?? {})['can_run'] = 0;
    }
  }
  ((s as any).droutine = (s as any).droutine ?? {})['current_quick'] = 1;
  ((s as any).droutine = (s as any).droutine ?? {})['skip_reason'] = 'no lashes available or already applied';
  // TODO-QSP: end
  scene.build();
}

function enterStepBirthControl(s: GameState, scene: SceneBuilder): void {
  ((s as any).droutine = (s as any).droutine ?? {})['current_label'] = 'Take birth-control pill';
  ((s as any).droutine = (s as any).droutine ?? {})['current_category'] = 'Health';
  ((s as any).droutine = (s as any).droutine ?? {})['current_style'] = 'chain';
  ((s as any).droutine = (s as any).droutine ?? {})['current_room'] = 'bathroom';
  ((s as any).droutine = (s as any).droutine ?? {})['current_runner'] = 'gt \'din_bad\', \'quick_takepill_do\'';
  ((s as any).droutine = (s as any).droutine ?? {})['can_run'] = qspFunc(s, 'din_bad', 'can_quick_takepill');
  ((s as any).droutine = (s as any).droutine ?? {})['current_quick'] = 1;
  ((s as any).droutine = (s as any).droutine ?? {})['skip_reason'] = 'no pill due';
  // TODO-QSP: end
  scene.build();
}

function enterStepOutfitSchool(s: GameState, scene: SceneBuilder): void {
  ((s as any).droutine = (s as any).droutine ?? {})['current_label'] = 'Put on school uniform';
  ((s as any).droutine = (s as any).droutine ?? {})['current_category'] = 'Clothing';
  ((s as any).droutine = (s as any).droutine ?? {})['current_style'] = 'chain';
  ((s as any).droutine = (s as any).droutine ?? {})['current_room'] = 'bedroom';
  ((s as any).droutine = (s as any).droutine ?? {})['current_runner'] = 'gt \'wardrobe\', \'default_school_wear\'';
  qspCall(s, 'wardrobe', 'is_school');
  ((s as any).droutine = (s as any).droutine ?? {})['can_run'] = (((s as any).default_school_number ?? 0) !== 0  &&  ((s as any).week ?? 0) < 6  &&  ((s as any).kanikuli ?? 0) === 0  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0  &&  ((s as any).default_school_number ?? 0)[2] < 5);
  ((s as any).droutine = (s as any).droutine ?? {})['current_quick'] = 1;
  ((s as any).droutine = (s as any).droutine ?? {})['skip_reason'] = 'not a school day, no uniform set, or already wearing it';
  // TODO-QSP: end
  scene.build();
}

function enterStepOutfitSport(s: GameState, scene: SceneBuilder): void {
  ((s as any).droutine = (s as any).droutine ?? {})['current_label'] = 'Put on sportswear';
  ((s as any).droutine = (s as any).droutine ?? {})['current_category'] = 'Clothing';
  ((s as any).droutine = (s as any).droutine ?? {})['current_style'] = 'chain';
  ((s as any).droutine = (s as any).droutine ?? {})['current_room'] = 'bedroom';
  ((s as any).droutine = (s as any).droutine ?? {})['current_runner'] = 'gt \'wardrobe\', \'default_sport_wear\'';
  qspCall(s, 'wardrobe', 'is_sport');
  ((s as any).droutine = (s as any).droutine ?? {})['can_run'] = (((s as any).default_sport_number ?? 0) !== 0  &&  ((s as any).default_sport_number ?? 0)[2] < 5);
  ((s as any).droutine = (s as any).droutine ?? {})['current_quick'] = 1;
  ((s as any).droutine = (s as any).droutine ?? {})['skip_reason'] = 'no default sportswear set, or already wearing it';
  // TODO-QSP: end
  scene.build();
}

function enterStepOutfitRestore(s: GameState, scene: SceneBuilder): void {
  ((s as any).droutine = (s as any).droutine ?? {})['current_label'] = 'Get dressed';
  ((s as any).droutine = (s as any).droutine ?? {})['current_category'] = 'Clothing';
  ((s as any).droutine = (s as any).droutine ?? {})['current_style'] = 'chain';
  ((s as any).droutine = (s as any).droutine ?? {})['current_room'] = 'bedroom';
  ((s as any).droutine = (s as any).droutine ?? {})['current_runner'] = 'gs \'outfit\', \'restore\', \'bed\' & gs \'stat\' & gs \'daily_routine\', \'finish_step\', $loc, $loc_arg';
  ((s as any).droutine = (s as any).droutine ?? {})['can_run'] = 1;
  ((s as any).droutine = (s as any).droutine ?? {})['current_quick'] = 1;
  ((s as any).droutine = (s as any).droutine ?? {})['skip_reason'] = '';
  // TODO-QSP: end
  if ((String(((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(21))) === 'step_outfit_wardrobe_') {
    (s as any).temp_wslot = parseFloat((String(((s as any).locArgs?.[0] ?? 0)).slice((22)-1)));
    ((s as any).droutine = (s as any).droutine ?? {})['current_label'] = ((((s as any).def_clothing_name ?? 0)?.[String((s as any).temp_wslot ?? 0)] !== '') ? (((s as any).def_clothing_name ?? 0)?.[String((s as any).temp_wslot ?? 0)]) : ('Outfit ' + ((s as any).temp_wslot ?? 0) + ''));
    ((s as any).droutine = (s as any).droutine ?? {})['current_category'] = 'Clothing';
    ((s as any).droutine = (s as any).droutine ?? {})['current_style'] = 'chain';
    ((s as any).droutine = (s as any).droutine ?? {})['current_room'] = 'bedroom';
    ((s as any).droutine = (s as any).droutine ?? {})['current_runner'] = 'gt \'wardrobe\', \'default_wardrobe_wear\', ' + ((s as any).temp_wslot ?? 0) + '';
    ((s as any).droutine = (s as any).droutine ?? {})['can_run'] = (((s as any).defclothingnumber ?? 0)?.[String((s as any).temp_wslot ?? 0)] + ((s as any).defbranumber ?? 0)?.[String((s as any).temp_wslot ?? 0)] + ((s as any).defpantynumber ?? 0)?.[String((s as any).temp_wslot ?? 0)] + ((s as any).defshoenumber ?? 0)?.[String((s as any).temp_wslot ?? 0)] > 0);
    ((s as any).droutine = (s as any).droutine ?? {})['current_quick'] = 1;
    ((s as any).droutine = (s as any).droutine ?? {})['skip_reason'] = 'outfit slot is empty or unavailable';
  }
  scene.build();
}

function enterStepWater(s: GameState, scene: SceneBuilder): void {
  ((s as any).droutine = (s as any).droutine ?? {})['current_label'] = 'Drink water';
  ((s as any).droutine = (s as any).droutine ?? {})['current_category'] = 'Kitchen';
  ((s as any).droutine = (s as any).droutine ?? {})['current_style'] = 'visit';
  ((s as any).droutine = (s as any).droutine ?? {})['current_room'] = 'kitchen';
  ((s as any).droutine = (s as any).droutine ?? {})['current_runner'] = 'gt \'kit_din\', \'driwater_do\'';
  ((s as any).droutine = (s as any).droutine ?? {})['can_run'] = 1;
  ((s as any).droutine = (s as any).droutine ?? {})['current_quick'] = 1;
  ((s as any).droutine = (s as any).droutine ?? {})['skip_reason'] = '';
  // TODO-QSP: end
  scene.build();
}

function enterStepTea(s: GameState, scene: SceneBuilder): void {
  ((s as any).droutine = (s as any).droutine ?? {})['current_label'] = 'Have tea';
  ((s as any).droutine = (s as any).droutine ?? {})['current_category'] = 'Kitchen';
  ((s as any).droutine = (s as any).droutine ?? {})['current_style'] = 'visit';
  ((s as any).droutine = (s as any).droutine ?? {})['current_room'] = 'kitchen';
  ((s as any).droutine = (s as any).droutine ?? {})['current_runner'] = 'gt \'kit_din\', \'dritea_do\'';
  ((s as any).droutine = (s as any).droutine ?? {})['can_run'] = 1;
  ((s as any).droutine = (s as any).droutine ?? {})['current_quick'] = 1;
  ((s as any).droutine = (s as any).droutine ?? {})['skip_reason'] = '';
  // TODO-QSP: end
  scene.build();
}

function enterStepVitamin(s: GameState, scene: SceneBuilder): void {
  ((s as any).droutine = (s as any).droutine ?? {})['current_label'] = 'Take a vitamin';
  ((s as any).droutine = (s as any).droutine ?? {})['current_category'] = 'Kitchen';
  ((s as any).droutine = (s as any).droutine ?? {})['current_style'] = 'visit';
  ((s as any).droutine = (s as any).droutine ?? {})['current_room'] = 'kitchen';
  ((s as any).droutine = (s as any).droutine ?? {})['current_runner'] = 'gt \'kit_din\', \'vitamin_do\'';
  ((s as any).droutine = (s as any).droutine ?? {})['can_run'] = (((s as any).mc_inventory ?? 0)?.['vitamins'] > 0  &&  ((s as any).vitaminday ?? 0) !== ((s as any).daystart ?? 0));
  ((s as any).droutine = (s as any).droutine ?? {})['current_quick'] = 1;
  ((s as any).droutine = (s as any).droutine ?? {})['skip_reason'] = 'no vitamins or already taken today';
  // TODO-QSP: end
  scene.build();
}

function enterStepFillBottle(s: GameState, scene: SceneBuilder): void {
  ((s as any).droutine = (s as any).droutine ?? {})['current_label'] = 'Refill water bottle';
  ((s as any).droutine = (s as any).droutine ?? {})['current_category'] = 'Kitchen';
  ((s as any).droutine = (s as any).droutine ?? {})['current_style'] = 'visit';
  ((s as any).droutine = (s as any).droutine ?? {})['current_room'] = 'kitchen';
  ((s as any).droutine = (s as any).droutine ?? {})['current_runner'] = 'gt \'kit_din\', \'fill_bottle_do\'';
  ((s as any).droutine = (s as any).droutine ?? {})['can_run'] = (((s as any).mc_inventory ?? 0)?.['refill_bottle'] >= 1);
  ((s as any).droutine = (s as any).droutine ?? {})['current_quick'] = 1;
  ((s as any).droutine = (s as any).droutine ?? {})['skip_reason'] = 'no water bottle';
  // TODO-QSP: end
  scene.build();
}

function enterStepSandwich(s: GameState, scene: SceneBuilder): void {
  ((s as any).droutine = (s as any).droutine ?? {})['current_label'] = 'Make a sandwich';
  ((s as any).droutine = (s as any).droutine ?? {})['current_category'] = 'Kitchen';
  ((s as any).droutine = (s as any).droutine ?? {})['current_style'] = 'visit';
  ((s as any).droutine = (s as any).droutine ?? {})['current_room'] = 'kitchen';
  ((s as any).droutine = (s as any).droutine ?? {})['current_runner'] = 'gt \'kit_din\', \'sandwich_do\'';
  ((s as any).droutine = (s as any).droutine ?? {})['can_run'] = (((s as any).bag ?? 0) > 0  &&  ((s as any).mc_inventory ?? 0)?.['food_sandwich'] === 0);
  ((s as any).droutine = (s as any).droutine ?? {})['current_quick'] = 1;
  ((s as any).droutine = (s as any).droutine ?? {})['skip_reason'] = 'no bag or already have a sandwich to go';
  // TODO-QSP: end
  scene.build();
}

function enterStepSnack(s: GameState, scene: SceneBuilder): void {
  ((s as any).droutine = (s as any).droutine ?? {})['current_label'] = 'Grab a snack';
  ((s as any).droutine = (s as any).droutine ?? {})['current_category'] = 'Kitchen';
  ((s as any).droutine = (s as any).droutine ?? {})['current_style'] = 'visit';
  ((s as any).droutine = (s as any).droutine ?? {})['current_room'] = 'kitchen';
  ((s as any).droutine = (s as any).droutine ?? {})['current_runner'] = 'gt \'kit_din\', \'edasnack_do\'';
  ((s as any).droutine = (s as any).droutine ?? {})['can_run'] = 1;
  ((s as any).droutine = (s as any).droutine ?? {})['current_quick'] = 1;
  ((s as any).droutine = (s as any).droutine ?? {})['skip_reason'] = '';
  // TODO-QSP: end
  scene.build();
}

function enterStepLeftovers(s: GameState, scene: SceneBuilder): void {
  ((s as any).droutine = (s as any).droutine ?? {})['current_label'] = 'Eat diet meal';
  ((s as any).droutine = (s as any).droutine ?? {})['current_category'] = 'Kitchen';
  ((s as any).droutine = (s as any).droutine ?? {})['current_style'] = 'visit';
  ((s as any).droutine = (s as any).droutine ?? {})['current_room'] = 'kitchen';
  ((s as any).droutine = (s as any).droutine ?? {})['current_runner'] = 'gt \'kit_din\', \'edaD_do\'';
  ((s as any).droutine = (s as any).droutine ?? {})['can_run'] = (((s as any).mc_inventory ?? 0)?.['food_diet'] > 0);
  ((s as any).droutine = (s as any).droutine ?? {})['current_quick'] = 1;
  ((s as any).droutine = (s as any).droutine ?? {})['skip_reason'] = 'no diet meals left';
  // TODO-QSP: end
  scene.build();
}

function enterStepMedicine(s: GameState, scene: SceneBuilder): void {
  ((s as any).droutine = (s as any).droutine ?? {})['current_label'] = 'Take antibiotics';
  ((s as any).droutine = (s as any).droutine ?? {})['current_category'] = 'Kitchen';
  ((s as any).droutine = (s as any).droutine ?? {})['current_style'] = 'visit';
  ((s as any).droutine = (s as any).droutine ?? {})['current_room'] = 'kitchen';
  ((s as any).droutine = (s as any).droutine ?? {})['current_runner'] = 'gt \'kit_din\', \'lekarstvo_do\'';
  ((s as any).droutine = (s as any).droutine ?? {})['can_run'] = (((s as any).mc_inventory ?? 0)?.['antibiotics'] > 0  &&  ((s as any).sick ?? 0) > 0  &&  ((s as any).lekarday ?? 0) !== ((s as any).daystart ?? 0));
  ((s as any).droutine = (s as any).droutine ?? {})['current_quick'] = 1;
  ((s as any).droutine = (s as any).droutine ?? {})['skip_reason'] = 'no antibiotics, not sick, or already taken today';
  // TODO-QSP: end
  scene.build();
}

function enterStepCookMeal(s: GameState, scene: SceneBuilder): void {
  ((s as any).droutine = (s as any).droutine ?? {})['current_label'] = 'Cook a meal';
  ((s as any).droutine = (s as any).droutine ?? {})['current_category'] = 'Kitchen';
  ((s as any).droutine = (s as any).droutine ?? {})['current_style'] = 'chain';
  ((s as any).droutine = (s as any).droutine ?? {})['current_room'] = 'kitchen';
  ((s as any).droutine = (s as any).droutine ?? {})['current_runner'] = 'gt \'kit_din\', \'cook_meal_do\'';
  ((s as any).droutine = (s as any).droutine ?? {})['can_run'] = (((s as any).mc_inventory ?? 0)?.['food_basic'] > 0  &&  (!((s as any).edahot ?? 0)));
  ((s as any).droutine = (s as any).droutine ?? {})['skip_reason'] = 'no food supplies or a meal is already prepared';
  // TODO-QSP: end
  scene.build();
}

function enterStepEatMeal(s: GameState, scene: SceneBuilder): void {
  ((s as any).droutine = (s as any).droutine ?? {})['current_label'] = 'Eat a meal';
  ((s as any).droutine = (s as any).droutine ?? {})['current_category'] = 'Kitchen';
  ((s as any).droutine = (s as any).droutine ?? {})['current_style'] = 'chain';
  ((s as any).droutine = (s as any).droutine ?? {})['current_room'] = 'kitchen';
  ((s as any).droutine = (s as any).droutine ?? {})['current_runner'] = 'gt \'kit_din\', \'eat_meal_do\'';
  ((s as any).droutine = (s as any).droutine ?? {})['can_run'] = (((s as any).edahot ?? 0) > 0  ||  ((s as any).mc_inventory ?? 0)?.['food_basic'] > 0  ||  ((s as any).mc_inventory ?? 0)?.['food_diet'] > 0  ||  qspFunc(s, 'daily_routine', 'home_has_food'));
  ((s as any).droutine = (s as any).droutine ?? {})['skip_reason'] = 'nothing to eat';
  // TODO-QSP: end
  scene.build();
}

function enterHomeHasFood(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).home_name ?? 0)?.[String((s as any).loc ?? 0)] === 'parents_home'  ||  ((s as any).home_name ?? 0)?.[String((s as any).loc ?? 0)] === 'grandparents_house'  ||  ((s as any).home_name ?? 0)?.[String((s as any).loc ?? 0)] === 'meynold_household');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCatalogBuild(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_dci = 0;
  (s as any).temp_dci = ((s as any).temp_dci ?? 0) + (1);
  ((s as any).droutine_catalog = (s as any).droutine_catalog ?? {})['id_' + String(((s as any).temp_dci ?? 0))] = 'teeth';
  (s as any).temp_dci = ((s as any).temp_dci ?? 0) + (1);
  ((s as any).droutine_catalog = (s as any).droutine_catalog ?? {})['id_' + String(((s as any).temp_dci ?? 0))] = 'mouthwash';
  (s as any).temp_dci = ((s as any).temp_dci ?? 0) + (1);
  ((s as any).droutine_catalog = (s as any).droutine_catalog ?? {})['id_' + String(((s as any).temp_dci ?? 0))] = 'shower';
  (s as any).temp_dci = ((s as any).temp_dci ?? 0) + (1);
  ((s as any).droutine_catalog = (s as any).droutine_catalog ?? {})['id_' + String(((s as any).temp_dci ?? 0))] = 'bath';
  (s as any).temp_dci = ((s as any).temp_dci ?? 0) + (1);
  ((s as any).droutine_catalog = (s as any).droutine_catalog ?? {})['id_' + String(((s as any).temp_dci ?? 0))] = 'quickwash';
  (s as any).temp_dci = ((s as any).temp_dci ?? 0) + (1);
  ((s as any).droutine_catalog = (s as any).droutine_catalog ?? {})['id_' + String(((s as any).temp_dci ?? 0))] = 'deodorant';
  (s as any).temp_dci = ((s as any).temp_dci ?? 0) + (1);
  ((s as any).droutine_catalog = (s as any).droutine_catalog ?? {})['id_' + String(((s as any).temp_dci ?? 0))] = 'skincare';
  (s as any).temp_dci = ((s as any).temp_dci ?? 0) + (1);
  ((s as any).droutine_catalog = (s as any).droutine_catalog ?? {})['id_' + String(((s as any).temp_dci ?? 0))] = 'shave';
  (s as any).temp_dci = ((s as any).temp_dci ?? 0) + (1);
  ((s as any).droutine_catalog = (s as any).droutine_catalog ?? {})['id_' + String(((s as any).temp_dci ?? 0))] = 'enema';
  (s as any).temp_dci = ((s as any).temp_dci ?? 0) + (1);
  ((s as any).droutine_catalog = (s as any).droutine_catalog ?? {})['id_' + String(((s as any).temp_dci ?? 0))] = 'tampon';
  (s as any).temp_dci = ((s as any).temp_dci ?? 0) + (1);
  ((s as any).droutine_catalog = (s as any).droutine_catalog ?? {})['id_' + String(((s as any).temp_dci ?? 0))] = 'peeprivate';
  (s as any).temp_dci = ((s as any).temp_dci ?? 0) + (1);
  ((s as any).droutine_catalog = (s as any).droutine_catalog ?? {})['id_' + String(((s as any).temp_dci ?? 0))] = 'removemakeup';
  (s as any).temp_dci = ((s as any).temp_dci ?? 0) + (1);
  ((s as any).droutine_catalog = (s as any).droutine_catalog ?? {})['id_' + String(((s as any).temp_dci ?? 0))] = 'removelashes';
  (s as any).temp_dci = ((s as any).temp_dci ?? 0) + (1);
  ((s as any).droutine_catalog = (s as any).droutine_catalog ?? {})['id_' + String(((s as any).temp_dci ?? 0))] = 'buttplug_in';
  (s as any).temp_dci = ((s as any).temp_dci ?? 0) + (1);
  ((s as any).droutine_catalog = (s as any).droutine_catalog ?? {})['id_' + String(((s as any).temp_dci ?? 0))] = 'buttplug_out';
  (s as any).temp_dci = ((s as any).temp_dci ?? 0) + (1);
  ((s as any).droutine_catalog = (s as any).droutine_catalog ?? {})['id_' + String(((s as any).temp_dci ?? 0))] = 'vibe_in';
  (s as any).temp_dci = ((s as any).temp_dci ?? 0) + (1);
  ((s as any).droutine_catalog = (s as any).droutine_catalog ?? {})['id_' + String(((s as any).temp_dci ?? 0))] = 'vibe_out';
  (s as any).temp_dci = ((s as any).temp_dci ?? 0) + (1);
  ((s as any).droutine_catalog = (s as any).droutine_catalog ?? {})['id_' + String(((s as any).temp_dci ?? 0))] = 'apply_makeup';
  (s as any).temp_dci = ((s as any).temp_dci ?? 0) + (1);
  ((s as any).droutine_catalog = (s as any).droutine_catalog ?? {})['id_' + String(((s as any).temp_dci ?? 0))] = 'brush_hair';
  (s as any).temp_dci = ((s as any).temp_dci ?? 0) + (1);
  ((s as any).droutine_catalog = (s as any).droutine_catalog ?? {})['id_' + String(((s as any).temp_dci ?? 0))] = 'lipbalm';
  (s as any).temp_dci = ((s as any).temp_dci ?? 0) + (1);
  ((s as any).droutine_catalog = (s as any).droutine_catalog ?? {})['id_' + String(((s as any).temp_dci ?? 0))] = 'apply_lashes';
  (s as any).temp_dci = ((s as any).temp_dci ?? 0) + (1);
  ((s as any).droutine_catalog = (s as any).droutine_catalog ?? {})['id_' + String(((s as any).temp_dci ?? 0))] = 'birth_control';
  (s as any).temp_dci = ((s as any).temp_dci ?? 0) + (1);
  ((s as any).droutine_catalog = (s as any).droutine_catalog ?? {})['id_' + String(((s as any).temp_dci ?? 0))] = 'outfit_school';
  (s as any).temp_dci = ((s as any).temp_dci ?? 0) + (1);
  ((s as any).droutine_catalog = (s as any).droutine_catalog ?? {})['id_' + String(((s as any).temp_dci ?? 0))] = 'outfit_sport';
  (s as any).temp_dci = ((s as any).temp_dci ?? 0) + (1);
  ((s as any).droutine_catalog = (s as any).droutine_catalog ?? {})['id_' + String(((s as any).temp_dci ?? 0))] = 'outfit_restore';
  (s as any).temp_dci_ws = 1;
  // TODO-QSP: :droutine_cat_wloop
  if (((s as any).temp_dci_ws ?? 0) <= 60) {
    if (((s as any).def_clothing_name ?? 0)?.[String((s as any).temp_dci_ws ?? 0)] !== ''  &&  (((s as any).defclothingnumber ?? 0)?.[String((s as any).temp_dci_ws ?? 0)] + ((s as any).defbranumber ?? 0)?.[String((s as any).temp_dci_ws ?? 0)] + ((s as any).defpantynumber ?? 0)?.[String((s as any).temp_dci_ws ?? 0)] + ((s as any).defshoenumber ?? 0)?.[String((s as any).temp_dci_ws ?? 0)] > 0)) {
      (s as any).temp_dci = ((s as any).temp_dci ?? 0) + (1);
      ((s as any).droutine_catalog = (s as any).droutine_catalog ?? {})['id_' + String(((s as any).temp_dci ?? 0))] = 'outfit_wardrobe_' + ((s as any).temp_dci_ws ?? 0) + '';
    }
    (s as any).temp_dci_ws = ((s as any).temp_dci_ws ?? 0) + (1);
    // TODO-QSP: jump 'droutine_cat_wloop'
  }
  (s as any).temp_dci = ((s as any).temp_dci ?? 0) + (1);
  ((s as any).droutine_catalog = (s as any).droutine_catalog ?? {})['id_' + String(((s as any).temp_dci ?? 0))] = 'cook_meal';
  (s as any).temp_dci = ((s as any).temp_dci ?? 0) + (1);
  ((s as any).droutine_catalog = (s as any).droutine_catalog ?? {})['id_' + String(((s as any).temp_dci ?? 0))] = 'eat_meal';
  (s as any).temp_dci = ((s as any).temp_dci ?? 0) + (1);
  ((s as any).droutine_catalog = (s as any).droutine_catalog ?? {})['id_' + String(((s as any).temp_dci ?? 0))] = 'snack';
  (s as any).temp_dci = ((s as any).temp_dci ?? 0) + (1);
  ((s as any).droutine_catalog = (s as any).droutine_catalog ?? {})['id_' + String(((s as any).temp_dci ?? 0))] = 'leftovers';
  (s as any).temp_dci = ((s as any).temp_dci ?? 0) + (1);
  ((s as any).droutine_catalog = (s as any).droutine_catalog ?? {})['id_' + String(((s as any).temp_dci ?? 0))] = 'water';
  (s as any).temp_dci = ((s as any).temp_dci ?? 0) + (1);
  ((s as any).droutine_catalog = (s as any).droutine_catalog ?? {})['id_' + String(((s as any).temp_dci ?? 0))] = 'tea';
  (s as any).temp_dci = ((s as any).temp_dci ?? 0) + (1);
  ((s as any).droutine_catalog = (s as any).droutine_catalog ?? {})['id_' + String(((s as any).temp_dci ?? 0))] = 'vitamin';
  (s as any).temp_dci = ((s as any).temp_dci ?? 0) + (1);
  ((s as any).droutine_catalog = (s as any).droutine_catalog ?? {})['id_' + String(((s as any).temp_dci ?? 0))] = 'fill_bottle';
  (s as any).temp_dci = ((s as any).temp_dci ?? 0) + (1);
  ((s as any).droutine_catalog = (s as any).droutine_catalog ?? {})['id_' + String(((s as any).temp_dci ?? 0))] = 'sandwich';
  (s as any).temp_dci = ((s as any).temp_dci ?? 0) + (1);
  ((s as any).droutine_catalog = (s as any).droutine_catalog ?? {})['id_' + String(((s as any).temp_dci ?? 0))] = 'medicine';
  ((s as any).droutine_catalog = (s as any).droutine_catalog ?? {})['count'] = ((s as any).temp_dci ?? 0);
  // TODO-QSP: end
  scene.build();
}

function enterManage(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSettingsDefaults(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (Number((s as any).locArgs?.[1] ?? 0) !== '') {
    ((s as any).droutine = (s as any).droutine ?? {})['ui_return_loc'] = ((s as any).locArgs?.[1] ?? 0);
    ((s as any).droutine = (s as any).droutine ?? {})['ui_return_arg'] = ((s as any).locArgs?.[2] ?? 0);
  } else {
    ((s as any).droutine = (s as any).droutine ?? {})['ui_return_loc'] = '';
    ((s as any).droutine = (s as any).droutine ?? {})['ui_return_arg'] = '';
  }
  scene.text('<center><b>Daily routine</b></center>');
  scene.text('Set up the steps that play in order each morning and evening. Steps whose conditions are not met that day are skipped automatically.');
  // TODO-QSP: dynamic text: <b>Morning</b> (<<droutine[''morning_count'']>> steps)
  scene.text(`<b>Morning</b> (${((s as any).droutine ?? 0)?.['morning_count'] ?? ''} steps)`);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'morning']; enterRenderListInline(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: dynamic text: <b>Evening</b> (<<droutine[''evening_count'']>> steps)
  scene.text(`<b>Evening</b> (${((s as any).droutine ?? 0)?.['evening_count'] ?? ''} steps)`);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'evening']; enterRenderListInline(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).droutine_settings ?? 0)?.['quick_routine'] === 1) {
    scene.text('<b>Quick routine:</b> ON - simple steps (no choices, no possible interruptions) finish themselves when they\'re next in line.');
    scene.actions([
      { label: 'Turn off quick routine', handler: (st: GameState) => {
    // TODO-QSP: droutine_settings['quick_routine'] = 0
    // TODO-QSP: gt 'daily_routine', 'manage', $ARGS[1], $ARGS[2]
  } },
    ]);
  } else {
    scene.text('<b>Quick routine:</b> OFF - every step waits for you to pick it.');
    scene.actions([
      { label: 'Turn on quick routine', handler: (st: GameState) => {
    // TODO-QSP: droutine_settings['quick_routine'] = 1
    // TODO-QSP: gt 'daily_routine', 'manage', $ARGS[1], $ARGS[2]
  } },
    ]);
  }
  if (((s as any).droutine ?? 0)?.['ui_return_loc'] !== '') {
    scene.actions([
      { label: 'Done', handler: (st: GameState) => {
    // TODO-QSP: gt $droutine['ui_return_loc'], $droutine['ui_return_arg']
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Done', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Edit morning routine', goto: ['daily_routine', 'manage_phase', 'morning'] },
    { label: 'Edit evening routine', goto: ['daily_routine', 'manage_phase', 'evening'] },
    { label: 'Availability and timing', goto: ['daily_routine', 'settings'] },
  ]);
  scene.build();
}

function enterSettings(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSettingsDefaults(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('<center><b>Routine availability</b></center>');
  scene.text('<b>Morning</b>');
  if (((s as any).droutine_settings ?? 0)?.['morning_use_wake'] === 1) {
    // TODO-QSP: dynamic text:   After waking: ON  (<<droutine_settings[''morning_wake_min'']>> min window)
    scene.text(`  After waking: ON  (${((s as any).droutine_settings ?? 0)?.['morning_wake_min'] ?? ''} min window)`);
  } else {
    scene.text('  After waking: OFF');
  }
  if (((s as any).droutine_settings ?? 0)?.['morning_use_abs'] === 1) {
    // TODO-QSP: dynamic text:   Fixed hours: ON  (<<droutine_settings[''morning_abs_start'']>>:00 to <<droutin...
    scene.text(`  Fixed hours: ON  (${((s as any).droutine_settings ?? 0)?.['morning_abs_start'] ?? ''}:00 to ${((s as any).droutine_settings ?? 0)?.['morning_abs_end'] ?? ''}:00)`);
  } else {
    scene.text('  Fixed hours: OFF');
  }
  scene.text('<b>Evening</b>');
  if (((s as any).droutine_settings ?? 0)?.['evening_use_abs'] === 1) {
    // TODO-QSP: dynamic text:   Fixed hours: ON  (<<droutine_settings[''evening_abs_start'']>>:00 to <<droutin...
    scene.text(`  Fixed hours: ON  (${((s as any).droutine_settings ?? 0)?.['evening_abs_start'] ?? ''}:00 to ${((s as any).droutine_settings ?? 0)?.['evening_abs_end'] ?? ''}:00)`);
  } else {
    scene.text('  Fixed hours: OFF');
  }
  if (((s as any).droutine_settings ?? 0)?.['morning_use_wake'] === 1) {
    scene.actions([
      { label: 'Morning after-waking: turn off', handler: (st: GameState) => {
    // TODO-QSP: droutine_settings['morning_use_wake'] = 0
  }, goto: ['daily_routine', 'settings'] },
      { label: 'Morning after-waking window +15 min', handler: (st: GameState) => {
    // TODO-QSP: droutine_settings['morning_wake_min'] = min(240, droutine_se...
  }, goto: ['daily_routine', 'settings'] },
      { label: 'Morning after-waking window -15 min', handler: (st: GameState) => {
    // TODO-QSP: droutine_settings['morning_wake_min'] = max(15, droutine_set...
  }, goto: ['daily_routine', 'settings'] },
    ]);
  } else {
    scene.actions([
      { label: 'Morning after-waking: turn on', handler: (st: GameState) => {
    // TODO-QSP: droutine_settings['morning_use_wake'] = 1
  }, goto: ['daily_routine', 'settings'] },
    ]);
  }
  if (((s as any).droutine_settings ?? 0)?.['morning_use_abs'] === 1) {
    scene.actions([
      { label: 'Morning fixed hours: turn off', handler: (st: GameState) => {
    // TODO-QSP: droutine_settings['morning_use_abs'] = 0
  }, goto: ['daily_routine', 'settings'] },
      { label: 'Morning start +1h', handler: (st: GameState) => {
    // TODO-QSP: droutine_settings['morning_abs_start'] = (droutine_settings[...
  }, goto: ['daily_routine', 'settings'] },
      { label: 'Morning start -1h', handler: (st: GameState) => {
    // TODO-QSP: droutine_settings['morning_abs_start'] = (droutine_settings[...
  }, goto: ['daily_routine', 'settings'] },
      { label: 'Morning end +1h', handler: (st: GameState) => {
    // TODO-QSP: droutine_settings['morning_abs_end'] = (droutine_settings['m...
  }, goto: ['daily_routine', 'settings'] },
      { label: 'Morning end -1h', handler: (st: GameState) => {
    // TODO-QSP: droutine_settings['morning_abs_end'] = (droutine_settings['m...
  }, goto: ['daily_routine', 'settings'] },
    ]);
  } else {
    scene.actions([
      { label: 'Morning fixed hours: turn on', handler: (st: GameState) => {
    // TODO-QSP: droutine_settings['morning_use_abs'] = 1
  }, goto: ['daily_routine', 'settings'] },
    ]);
  }
  if (((s as any).droutine_settings ?? 0)?.['evening_use_abs'] === 1) {
    scene.actions([
      { label: 'Evening fixed hours: turn off', handler: (st: GameState) => {
    // TODO-QSP: droutine_settings['evening_use_abs'] = 0
  }, goto: ['daily_routine', 'settings'] },
      { label: 'Evening start +1h', handler: (st: GameState) => {
    // TODO-QSP: droutine_settings['evening_abs_start'] = (droutine_settings[...
  }, goto: ['daily_routine', 'settings'] },
      { label: 'Evening start -1h', handler: (st: GameState) => {
    // TODO-QSP: droutine_settings['evening_abs_start'] = (droutine_settings[...
  }, goto: ['daily_routine', 'settings'] },
      { label: 'Evening end +1h', handler: (st: GameState) => {
    // TODO-QSP: droutine_settings['evening_abs_end'] = (droutine_settings['e...
  }, goto: ['daily_routine', 'settings'] },
      { label: 'Evening end -1h', handler: (st: GameState) => {
    // TODO-QSP: droutine_settings['evening_abs_end'] = (droutine_settings['e...
  }, goto: ['daily_routine', 'settings'] },
    ]);
  } else {
    scene.actions([
      { label: 'Evening fixed hours: turn on', handler: (st: GameState) => {
    // TODO-QSP: droutine_settings['evening_use_abs'] = 1
  }, goto: ['daily_routine', 'settings'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Back', goto: ['daily_routine', 'manage'] },
  ]);
  scene.build();
}

function enterStepPos(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
  (s as any).temp_sp_n = ((s as any).droutine ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '_count'];
  (s as any).temp_sp_i = 0;
  // TODO-QSP: :step_pos_loop
  (s as any).temp_sp_i = ((s as any).temp_sp_i ?? 0) + (1);
  if (((s as any).temp_sp_i ?? 0) <= ((s as any).temp_sp_n ?? 0)) {
    if (((s as any).droutine ?? 0)[Number((s as any).locArgs?.[1] ?? 0) + '_step_' + ((s as any).temp_sp_i ?? 0)] === Number((s as any).locArgs?.[2] ?? 0)) {
      (s as any).result = ((s as any).temp_sp_i ?? 0);
    } else {
      // TODO-QSP: jump 'step_pos_loop'
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRemoveStepCore(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_drc = ((s as any).droutine ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '_count'];
  (s as any).temp_dri = ((s as any).locArgs?.[2] ?? 0);
  // TODO-QSP: :droutine_rsc_loop
  if (((s as any).temp_dri ?? 0) < ((s as any).temp_drc ?? 0)) {
    ((s as any).droutine = (s as any).droutine ?? {})[String(((s as any).locArgs?.[1] ?? 0)) + '_step_' + String(((s as any).temp_dri ?? 0))] = ((s as any).droutine ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '_step_' + String(((s as any).temp_dri ?? 0) + 1)];
    (s as any).temp_dri = ((s as any).temp_dri ?? 0) + (1);
    // TODO-QSP: jump 'droutine_rsc_loop'
  }
  ((s as any).droutine = (s as any).droutine ?? {})[String(((s as any).locArgs?.[1] ?? 0)) + '_step_' + String(((s as any).temp_drc ?? 0))] = '';
  ((s as any).droutine = (s as any).droutine ?? {})[String(((s as any).locArgs?.[1] ?? 0)) + '_count'] = ((s as any).temp_drc ?? 0) - 1;
  // TODO-QSP: end
  scene.build();
}

function enterRemoveStepId(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_rsid = qspFunc(s, 'daily_routine', 'step_pos', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  if (((s as any).temp_rsid ?? 0) > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).temp_rsid ?? 0)]; enterRemoveStepCore(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterToggleStep(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_tp = qspFunc(s, 'daily_routine', 'step_pos', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  if (((s as any).temp_tp ?? 0) > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).temp_tp ?? 0)]; enterRemoveStepCore(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    (s as any).temp_drc = ((s as any).droutine ?? 0)['' + ((s as any).locArgs?.[1] ?? 0) + '_count'] + 1;
    ((s as any).droutine = (s as any).droutine ?? {})[String(((s as any).locArgs?.[1] ?? 0)) + '_step_' + String(((s as any).temp_drc ?? 0))] = ((s as any).locArgs?.[2] ?? 0);
    ((s as any).droutine = (s as any).droutine ?? {})[String(((s as any).locArgs?.[1] ?? 0)) + '_count'] = ((s as any).temp_drc ?? 0);
  }
  // TODO-QSP: gt 'daily_routine', 'manage_phase', $ARGS[1]
  // TODO-QSP: end
  scene.build();
}

function enterSetBath(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_sb_pos = qspFunc(s, 'daily_routine', 'step_pos', ((s as any).locArgs?.[1] ?? 0), 'shower');
  if ((!((s as any).temp_sb_pos ?? 0))) {
    (s as any).temp_sb_pos = qspFunc(s, 'daily_routine', 'step_pos', ((s as any).locArgs?.[1] ?? 0), 'bath');
  }
  if ((!((s as any).temp_sb_pos ?? 0))) {
    (s as any).temp_sb_pos = qspFunc(s, 'daily_routine', 'step_pos', ((s as any).locArgs?.[1] ?? 0), 'quickwash');
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'shower']; enterRemoveStepId(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'bath']; enterRemoveStepId(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'quickwash']; enterRemoveStepId(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (Number((s as any).locArgs?.[2] ?? 0) !== 'none') {
    if (((s as any).temp_sb_pos ?? 0) > 0) {
      (s as any).temp_sb_n = ((s as any).droutine ?? 0)['' + ((s as any).locArgs?.[1] ?? 0) + '_count'] + 1;
      ((s as any).droutine = (s as any).droutine ?? {})[String(((s as any).locArgs?.[1] ?? 0)) + '_count'] = ((s as any).temp_sb_n ?? 0);
      (s as any).temp_sb_i = ((s as any).temp_sb_n ?? 0);
      // TODO-QSP: :set_bath_ins_loop
      if (((s as any).temp_sb_i ?? 0) > ((s as any).temp_sb_pos ?? 0)) {
        ((s as any).droutine = (s as any).droutine ?? {})[String(((s as any).locArgs?.[1] ?? 0)) + '_step_' + String(((s as any).temp_sb_i ?? 0))] = ((s as any).droutine ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '_step_' + String(((s as any).temp_sb_i ?? 0) - 1)];
        (s as any).temp_sb_i = ((s as any).temp_sb_i ?? 0) - (1);
        // TODO-QSP: jump 'set_bath_ins_loop'
      }
      ((s as any).droutine = (s as any).droutine ?? {})[String(((s as any).locArgs?.[1] ?? 0)) + '_step_' + String(((s as any).temp_sb_pos ?? 0))] = ((s as any).locArgs?.[2] ?? 0);
      // TODO-QSP: killvar 'temp_sb_n'
      // TODO-QSP: killvar 'temp_sb_i'
    } else {
      (s as any).temp_drc = ((s as any).droutine ?? 0)['' + ((s as any).locArgs?.[1] ?? 0) + '_count'] + 1;
      ((s as any).droutine = (s as any).droutine ?? {})[String(((s as any).locArgs?.[1] ?? 0)) + '_step_' + String(((s as any).temp_drc ?? 0))] = ((s as any).locArgs?.[2] ?? 0);
      ((s as any).droutine = (s as any).droutine ?? {})[String(((s as any).locArgs?.[1] ?? 0)) + '_count'] = ((s as any).temp_drc ?? 0);
    }
  }
  // TODO-QSP: gt 'daily_routine', 'manage_phase', $ARGS[1]
  // TODO-QSP: end
  scene.build();
}

function enterSetMakeupOpt(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSettingsDefaults(s, scene); (s as any).locArgs = __savedLocArgs; }
  ((s as any).droutine_settings = (s as any).droutine_settings ?? {})['makeup_level'] = ((s as any).locArgs?.[2] ?? 0);
  if (Number((s as any).locArgs?.[2] ?? 0) === 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'apply_makeup']; enterRemoveStepId(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (qspFunc(s, 'daily_routine', 'step_pos', ((s as any).locArgs?.[1] ?? 0), 'apply_makeup') === 0) {
      (s as any).temp_drc = ((s as any).droutine ?? 0)['' + ((s as any).locArgs?.[1] ?? 0) + '_count'] + 1;
      ((s as any).droutine = (s as any).droutine ?? {})[String(((s as any).locArgs?.[1] ?? 0)) + '_step_' + String(((s as any).temp_drc ?? 0))] = 'apply_makeup';
      ((s as any).droutine = (s as any).droutine ?? {})[String(((s as any).locArgs?.[1] ?? 0)) + '_count'] = ((s as any).temp_drc ?? 0);
    }
  }
  // TODO-QSP: gt 'daily_routine', 'manage_phase', $ARGS[1]
  // TODO-QSP: end
  scene.build();
}

function enterSetLashesOpt(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSettingsDefaults(s, scene); (s as any).locArgs = __savedLocArgs; }
  ((s as any).droutine_settings = (s as any).droutine_settings ?? {})['lashes_type'] = ((s as any).locArgs?.[2] ?? 0);
  if (Number((s as any).locArgs?.[2] ?? 0) === 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), 'apply_lashes']; enterRemoveStepId(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (qspFunc(s, 'daily_routine', 'step_pos', ((s as any).locArgs?.[1] ?? 0), 'apply_lashes') === 0) {
      (s as any).temp_drc = ((s as any).droutine ?? 0)['' + ((s as any).locArgs?.[1] ?? 0) + '_count'] + 1;
      ((s as any).droutine = (s as any).droutine ?? {})[String(((s as any).locArgs?.[1] ?? 0)) + '_step_' + String(((s as any).temp_drc ?? 0))] = 'apply_lashes';
      ((s as any).droutine = (s as any).droutine ?? {})[String(((s as any).locArgs?.[1] ?? 0)) + '_count'] = ((s as any).temp_drc ?? 0);
    }
  }
  // TODO-QSP: gt 'daily_routine', 'manage_phase', $ARGS[1]
  // TODO-QSP: end
  scene.build();
}

function enterBathPicker(s: GameState, scene: SceneBuilder): void {
  (s as any).dr_bp = 'none';
  if (qspFunc(s, 'daily_routine', 'step_pos', ((s as any).locArgs?.[1] ?? 0), 'shower') > 0) {
    (s as any).dr_bp = 'shower';
  }
  if (qspFunc(s, 'daily_routine', 'step_pos', ((s as any).locArgs?.[1] ?? 0), 'bath') > 0) {
    (s as any).dr_bp = 'bath';
  }
  if (qspFunc(s, 'daily_routine', 'step_pos', ((s as any).locArgs?.[1] ?? 0), 'quickwash') > 0) {
    (s as any).dr_bp = 'quickwash';
  }
  (s as any).dr_pick = ((((s as any).dr_bp ?? 0) === 'none') ? ('<b>none</b>') : ('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027daily_routine/u0027, /u0027set_bath/u0027, /u0027' + ((s as any).locArgs?.[1] ?? 0) + '/u0027); return false;">none</a>'));
  // TODO-QSP: $dr_pick += '&nbsp;&nbsp;' + iif($dr_bp = 'shower', '<b>Shower</b>', '<a href="exec:gt ''daily_routi...
  // TODO-QSP: $dr_pick += '&nbsp;&nbsp;' + iif($dr_bp = 'bath', '<b>Soak in bath</b>', '<a href="exec:gt ''daily_r...
  // TODO-QSP: $dr_pick += '&nbsp;&nbsp;' + iif($dr_bp = 'quickwash', '<b>Quick wash</b>', '<a href="exec:gt ''dail...
  // TODO-QSP: end
  scene.build();
}

function enterMakeupPicker(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSettingsDefaults(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).temp_mkl = ((s as any).droutine_settings ?? 0)?.['makeup_level'];
  (s as any).dr_pick = (((!((s as any).temp_mkl ?? 0))) ? ('<b>none</b>') : ('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027daily_routine/u0027, /u0027set_makeup_opt/u0027, /u0027' + ((s as any).locArgs?.[1] ?? 0) + '/u0027); return false;">none</a>'));
  // TODO-QSP: $dr_pick += '&nbsp;&nbsp;' + iif(temp_mkl = 1, '<b>light</b>', '<a href="exec:gt ''daily_routine'', ...
  // TODO-QSP: $dr_pick += '&nbsp;&nbsp;' + iif(temp_mkl = 2, '<b>vibrant</b>', '<a href="exec:gt ''daily_routine''...
  // TODO-QSP: $dr_pick += '&nbsp;&nbsp;' + iif(temp_mkl = 3, '<b>thick</b>', '<a href="exec:gt ''daily_routine'', ...
  // TODO-QSP: $dr_pick += '&nbsp;&nbsp;' + iif(temp_mkl = 4, '<b>smeared</b>', '<a href="exec:gt ''daily_routine''...
  // TODO-QSP: $dr_pick += '&nbsp;&nbsp;' + iif(temp_mkl = 5, '<b>bimbo</b>', '<a href="exec:gt ''daily_routine'', ...
  // TODO-QSP: $dr_pick += '&nbsp;&nbsp;' + iif(temp_mkl = 6, '<b>goth</b>', '<a href="exec:gt ''daily_routine'', '...
  // TODO-QSP: end
  scene.build();
}

function enterLashesPicker(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSettingsDefaults(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).temp_lt = ((s as any).droutine_settings ?? 0)?.['lashes_type'];
  (s as any).dr_pick = (((!((s as any).temp_lt ?? 0))) ? ('<b>none</b>') : ('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027daily_routine/u0027, /u0027set_lashes_opt/u0027, /u0027' + ((s as any).locArgs?.[1] ?? 0) + '/u0027); return false;">none</a>'));
  // TODO-QSP: $dr_pick += '&nbsp;&nbsp;' + iif(temp_lt = 1, '<b>fake</b>', '<a href="exec:gt ''daily_routine'', ''...
  // TODO-QSP: $dr_pick += '&nbsp;&nbsp;' + iif(temp_lt = 2, '<b>mink</b>', '<a href="exec:gt ''daily_routine'', ''...
  // TODO-QSP: end
  scene.build();
}

function enterAddMakeup(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSettingsDefaults(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).droutine_settings ?? 0)?.['makeup_level'] <= 0) {
    ((s as any).droutine_settings = (s as any).droutine_settings ?? {})['makeup_level'] = 1;
  }
  // TODO-QSP: gt 'daily_routine', 'set_makeup_opt', $ARGS[1], droutine_settings['makeup_level']
  // TODO-QSP: end
  scene.build();
}

function enterAddLashes(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSettingsDefaults(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).droutine_settings ?? 0)?.['lashes_type'] <= 0) {
    ((s as any).droutine_settings = (s as any).droutine_settings ?? {})['lashes_type'] = 1;
  }
  // TODO-QSP: gt 'daily_routine', 'set_lashes_opt', $ARGS[1], droutine_settings['lashes_type']
  // TODO-QSP: end
  scene.build();
}

function enterManagePhase(s: GameState, scene: SceneBuilder): void {
  (s as any).dr_ph = ((s as any).locArgs?.[1] ?? 0);
  if (((s as any).dr_ph ?? 0) !== 'evening') {
    (s as any).dr_ph = 'morning';
  }
  if (((s as any).dr_ph ?? 0) === 'evening') {
    scene.text('<center><b>Evening routine</b></center>');
  } else {
    scene.text('<center><b>Morning routine</b></center>');
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSettingsDefaults(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCatalogBuild(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('<b>Your routine</b> <i>(plays top to bottom)</i>');
  if (((s as any).droutine ?? 0)[((s as any).dr_ph ?? 0) + '_count'] <= 0) {
    scene.text('<i>No steps yet - add some from the list below.</i>');
  } else {
    scene.text('<table width=100% cellpadding=4 cellspacing=0>');
    (s as any).temp_dpi = 0;
    // TODO-QSP: :droutine_mp_orderloop
    (s as any).temp_dpi = ((s as any).temp_dpi ?? 0) + (1);
    if (((s as any).temp_dpi ?? 0) <= ((s as any).droutine ?? 0)[((s as any).dr_ph ?? 0) + '_count']) {
      (s as any).dr_sid = ((s as any).droutine ?? 0)?.[String(((s as any).dr_ph ?? 0)) + '_step_' + String(((s as any).temp_dpi ?? 0))];
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).dr_sid ?? 0)]; enterResolve(s, scene); (s as any).locArgs = __savedLocArgs; }
      (s as any).dr_col2 = '';
      if (((s as any).temp_dpi ?? 0) > 1) {
        // TODO-QSP: $dr_col2 += '<a href="exec:gt ''daily_routine'', ''move_up'', ''<<$dr_ph>>'', <<temp_dpi>>">[↑]</a>&...
      }
      if (((s as any).temp_dpi ?? 0) < ((s as any).droutine ?? 0)[((s as any).dr_ph ?? 0) + '_count']) {
        // TODO-QSP: $dr_col2 += '<a href="exec:gt ''daily_routine'', ''move_down'', ''<<$dr_ph>>'', <<temp_dpi>>">[↓]</a...
      }
      // TODO-QSP: $dr_col2 += '&nbsp;&nbsp;'
      if (((s as any).dr_sid ?? 0) === 'shower'  ||  ((s as any).dr_sid ?? 0) === 'bath'  ||  ((s as any).dr_sid ?? 0) === 'quickwash') {
        (s as any).dr_col1 = '<b>Bathing</b>';
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).dr_ph ?? 0)]; enterBathPicker(s, scene); (s as any).locArgs = __savedLocArgs; }
        // TODO-QSP: $dr_col2 += $dr_pick
      } else {
        if (((s as any).dr_sid ?? 0) === 'apply_makeup') {
          (s as any).dr_col1 = '<b>Apply makeup</b>';
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).dr_ph ?? 0)]; enterMakeupPicker(s, scene); (s as any).locArgs = __savedLocArgs; }
          // TODO-QSP: $dr_col2 += $dr_pick
        } else {
          if (((s as any).dr_sid ?? 0) === 'apply_lashes') {
            (s as any).dr_col1 = '<b>Apply false lashes</b>';
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).dr_ph ?? 0)]; enterLashesPicker(s, scene); (s as any).locArgs = __savedLocArgs; }
            // TODO-QSP: $dr_col2 += $dr_pick
          } else {
            (s as any).dr_col1 = '<b>' + ((s as any).droutine ?? 0)?.['current_label'] + '</b>';
            // TODO-QSP: $dr_col2 += '<a href="exec:gt ''daily_routine'', ''toggle_step'', ''<<$dr_ph>>'', ''<<$dr_sid>>''">[...
          }
        }
      }
      // TODO-QSP: dynamic text: <tr><td width=35%><<$dr_col1>></td><td><<$dr_col2>></td></tr>
      scene.text(`<tr><td width=35%>${((s as any).dr_col1 ?? '')}</td><td>${((s as any).dr_col2 ?? '')}</td></tr>`);
      // TODO-QSP: killvar 'dr_col1'
      // TODO-QSP: killvar 'dr_col2'
      // TODO-QSP: jump 'droutine_mp_orderloop'
    }
    scene.text('</table>');
  }
  scene.text('<b>Add steps</b>');
  scene.text('<table width=100% cellpadding=4 cellspacing=0>');
  (s as any).dr_prevcat = '';
  (s as any).dr_bath_shown = 0;
  (s as any).temp_dci = 0;
  // TODO-QSP: :droutine_mp_addloop
  (s as any).temp_dci = ((s as any).temp_dci ?? 0) + (1);
  if (((s as any).temp_dci ?? 0) <= ((s as any).droutine_catalog ?? 0)?.['count']) {
    (s as any).dr_sid = ((s as any).droutine_catalog ?? 0)?.['id_' + String(((s as any).temp_dci ?? 0))];
    if (qspFunc(s, 'daily_routine', 'step_pos', ((s as any).dr_ph ?? 0), ((s as any).dr_sid ?? 0)) > 0) {
      // TODO-QSP: jump 'droutine_mp_addloop'
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).dr_sid ?? 0)]; enterResolve(s, scene); (s as any).locArgs = __savedLocArgs; }
    (s as any).dr_show = 1;
    (s as any).dr_col1 = '';
    (s as any).dr_col2 = '';
    if (((s as any).dr_sid ?? 0) === 'shower'  ||  ((s as any).dr_sid ?? 0) === 'bath'  ||  ((s as any).dr_sid ?? 0) === 'quickwash') {
      if (qspFunc(s, 'daily_routine', 'step_pos', ((s as any).dr_ph ?? 0), 'shower') > 0  ||  qspFunc(s, 'daily_routine', 'step_pos', ((s as any).dr_ph ?? 0), 'bath') > 0  ||  qspFunc(s, 'daily_routine', 'step_pos', ((s as any).dr_ph ?? 0), 'quickwash') > 0) {
        (s as any).dr_show = 0;
      } else {
        if (((s as any).dr_bath_shown ?? 0) === 1) {
          (s as any).dr_show = 0;
        } else {
          (s as any).dr_bath_shown = 1;
          (s as any).dr_col1 = 'Bathing';
          (s as any).dr_col2 = '<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027daily_routine/u0027, /u0027set_bath/u0027, /u0027' + ((s as any).dr_ph ?? 0) + '/u0027); return false;">Shower</a>&nbsp;&nbsp;<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027daily_routine/u0027, /u0027set_bath/u0027, /u0027' + ((s as any).dr_ph ?? 0) + '/u0027); return false;">Soak in bath</a>&nbsp;&nbsp;<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027daily_routine/u0027, /u0027set_bath/u0027, /u0027' + ((s as any).dr_ph ?? 0) + '/u0027); return false;">Quick wash</a>';
        }
      }
    } else {
      if (((s as any).dr_sid ?? 0) === 'apply_makeup') {
        (s as any).dr_col1 = 'Apply makeup';
        (s as any).dr_col2 = '<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027daily_routine/u0027, /u0027add_makeup/u0027, /u0027' + ((s as any).dr_ph ?? 0) + '/u0027); return false;">[add]</a>';
      } else {
        if (((s as any).dr_sid ?? 0) === 'apply_lashes') {
          (s as any).dr_col1 = 'Apply false lashes';
          (s as any).dr_col2 = '<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027daily_routine/u0027, /u0027add_lashes/u0027, /u0027' + ((s as any).dr_ph ?? 0) + '/u0027); return false;">[add]</a>';
        } else {
          (s as any).dr_col1 = '' + ((s as any).droutine ?? 0)?.['current_label'] + '';
          (s as any).dr_col2 = '<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027daily_routine/u0027, /u0027toggle_step/u0027, /u0027' + ((s as any).dr_ph ?? 0) + '/u0027); return false;">[add]</a>';
        }
      }
    }
    if (((s as any).dr_show ?? 0) === 1) {
      if (((s as any).droutine ?? 0)?.['current_category'] !== ((s as any).dr_prevcat ?? 0)) {
        (s as any).dr_prevcat = ((s as any).droutine ?? 0)?.['current_category'];
        // TODO-QSP: dynamic text: <tr><td colspan=2 style="padding-top:10px;border-bottom:1px solid #555"><b><<$dr...
        scene.text(`<tr><td colspan=2 style="padding-top:10px;border-bottom:1px solid #555"><b>${((s as any).dr_prevcat ?? '')}</b></td></tr>`);
      }
      // TODO-QSP: dynamic text: <tr><td width=35%><font color="#888"><<$dr_col1>></font></td><td><<$dr_col2>></t...
      scene.text(`<tr><td width=35%><font color="#888">${((s as any).dr_col1 ?? '')}</font></td><td>${((s as any).dr_col2 ?? '')}</td></tr>`);
    }
    // TODO-QSP: killvar 'dr_col1'
    // TODO-QSP: killvar 'dr_col2'
    // TODO-QSP: jump 'droutine_mp_addloop'
  }
  scene.text('</table>');
  // TODO-QSP: end
  scene.actions([
    { label: 'Back', goto: ['daily_routine', 'manage'] },
  ]);
  scene.build();
}

function enterAddStep(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'daily_routine', 'manage_phase', $ARGS[1]
  // TODO-QSP: end
  scene.build();
}

function enterAddCommit(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_drc = ((s as any).droutine ?? 0)['' + ((s as any).locArgs?.[1] ?? 0) + '_count'] + 1;
  ((s as any).droutine = (s as any).droutine ?? {})[String(((s as any).locArgs?.[1] ?? 0)) + '_step_' + String(((s as any).temp_drc ?? 0))] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).droutine = (s as any).droutine ?? {})[String(((s as any).locArgs?.[1] ?? 0)) + '_count'] = ((s as any).temp_drc ?? 0);
  // TODO-QSP: gt 'daily_routine', 'manage_phase', $ARGS[1]
  // TODO-QSP: end
  scene.build();
}

function enterRemoveStep(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_drc = ((s as any).droutine ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '_count'];
  (s as any).temp_dri = ((s as any).locArgs?.[2] ?? 0);
  // TODO-QSP: :droutine_remove_loop
  if (((s as any).temp_dri ?? 0) < ((s as any).temp_drc ?? 0)) {
    ((s as any).droutine = (s as any).droutine ?? {})[String(((s as any).locArgs?.[1] ?? 0)) + '_step_' + String(((s as any).temp_dri ?? 0))] = ((s as any).droutine ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '_step_' + String(((s as any).temp_dri ?? 0) + 1)];
    (s as any).temp_dri = ((s as any).temp_dri ?? 0) + (1);
    // TODO-QSP: jump 'droutine_remove_loop'
  }
  ((s as any).droutine = (s as any).droutine ?? {})[String(((s as any).locArgs?.[1] ?? 0)) + '_step_' + String(((s as any).temp_drc ?? 0))] = '';
  ((s as any).droutine = (s as any).droutine ?? {})[String(((s as any).locArgs?.[1] ?? 0)) + '_count'] = ((s as any).temp_drc ?? 0) - 1;
  // TODO-QSP: gt 'daily_routine', 'manage_phase', $ARGS[1]
  // TODO-QSP: end
  scene.build();
}

function enterMoveUp(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_dri = ((s as any).locArgs?.[2] ?? 0);
  if (((s as any).temp_dri ?? 0) > 1) {
    (s as any).dr_tmp = ((s as any).droutine ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '_step_' + String(((s as any).temp_dri ?? 0))];
    ((s as any).droutine = (s as any).droutine ?? {})[String(((s as any).locArgs?.[1] ?? 0)) + '_step_' + String(((s as any).temp_dri ?? 0))] = ((s as any).droutine ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '_step_' + String(((s as any).temp_dri ?? 0) - 1)];
    ((s as any).droutine = (s as any).droutine ?? {})[String(((s as any).locArgs?.[1] ?? 0)) + '_step_' + String(((s as any).temp_dri ?? 0) - 1)] = ((s as any).dr_tmp ?? 0);
  }
  // TODO-QSP: gt 'daily_routine', 'manage_phase', $ARGS[1]
  // TODO-QSP: end
  scene.build();
}

function enterMoveDown(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_dri = ((s as any).locArgs?.[2] ?? 0);
  (s as any).temp_drc = ((s as any).droutine ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '_count'];
  if (((s as any).temp_dri ?? 0) < ((s as any).temp_drc ?? 0)) {
    (s as any).dr_tmp = ((s as any).droutine ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '_step_' + String(((s as any).temp_dri ?? 0))];
    ((s as any).droutine = (s as any).droutine ?? {})[String(((s as any).locArgs?.[1] ?? 0)) + '_step_' + String(((s as any).temp_dri ?? 0))] = ((s as any).droutine ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '_step_' + String(((s as any).temp_dri ?? 0) + 1)];
    ((s as any).droutine = (s as any).droutine ?? {})[String(((s as any).locArgs?.[1] ?? 0)) + '_step_' + String(((s as any).temp_dri ?? 0) + 1)] = ((s as any).dr_tmp ?? 0);
  }
  // TODO-QSP: gt 'daily_routine', 'manage_phase', $ARGS[1]
  // TODO-QSP: end
  scene.build();
}

function enterRenderListInline(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_drc = ((s as any).droutine ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '_count'];
  (s as any).dr_line = '';
  (s as any).temp_dri = 0;
  // TODO-QSP: :droutine_rli_loop
  (s as any).temp_dri = ((s as any).temp_dri ?? 0) + (1);
  if (((s as any).temp_dri ?? 0) <= ((s as any).temp_drc ?? 0)) {
    ((s as any).droutine = (s as any).droutine ?? {})['current_label'] = ((s as any).droutine ?? 0)?.[String(((s as any).locArgs?.[1] ?? 0)) + '_step_' + String(((s as any).temp_dri ?? 0))];
    // TODO-QSP: gs 'daily_routine', 'resolve', $droutine['<<$ARGS[1]>>_step_<<temp_dri>>']
    if (((s as any).dr_line ?? 0) !== '') {
      // TODO-QSP: $dr_line += ', '
    }
    // TODO-QSP: $dr_line += $droutine['current_label']
    // TODO-QSP: jump 'droutine_rli_loop'
  }
  if (((s as any).dr_line ?? 0) === '') {
    (s as any).dr_line = '(none)';
  }
  // TODO-QSP: dynamic text:   <<$dr_line>>
  scene.text(`  ${((s as any).dr_line ?? '')}`);
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'finish_step':
      enterFinishStep(s, scene);
      break;
    case 'hub':
      enterHub(s, scene);
      break;
    case 'finish':
      enterFinish(s, scene);
      break;
    case 'abort':
      enterAbort(s, scene);
      break;
    case 'can_use_here':
      enterCanUseHere(s, scene);
      break;
    case 'offer_here':
      enterOfferHere(s, scene);
      break;
    case 'settings_defaults':
      enterSettingsDefaults(s, scene);
      break;
    case 'in_hour_window':
      enterInHourWindow(s, scene);
      break;
    case 'logical_day':
      enterLogicalDay(s, scene);
      break;
    case 'phase_available':
      enterPhaseAvailable(s, scene);
      break;
    case 'visit_item_done':
      enterVisitItemDone(s, scene);
      break;
    case 'resolve':
      enterResolve(s, scene);
      break;
    case 'step_teeth':
      enterStepTeeth(s, scene);
      break;
    case 'step_mouthwash':
      enterStepMouthwash(s, scene);
      break;
    case 'step_shower':
      enterStepShower(s, scene);
      break;
    case 'step_bath':
      enterStepBath(s, scene);
      break;
    case 'step_quickwash':
      enterStepQuickwash(s, scene);
      break;
    case 'step_deodorant':
      enterStepDeodorant(s, scene);
      break;
    case 'step_skincare':
      enterStepSkincare(s, scene);
      break;
    case 'step_shave':
      enterStepShave(s, scene);
      break;
    case 'step_enema':
      enterStepEnema(s, scene);
      break;
    case 'step_tampon':
      enterStepTampon(s, scene);
      break;
    case 'step_peeprivate':
      enterStepPeeprivate(s, scene);
      break;
    case 'step_removemakeup':
      enterStepRemovemakeup(s, scene);
      break;
    case 'step_removelashes':
      enterStepRemovelashes(s, scene);
      break;
    case 'step_buttplug_in':
      enterStepButtplugIn(s, scene);
      break;
    case 'step_buttplug_out':
      enterStepButtplugOut(s, scene);
      break;
    case 'step_vibe_in':
      enterStepVibeIn(s, scene);
      break;
    case 'step_vibe_out':
      enterStepVibeOut(s, scene);
      break;
    case 'step_apply_makeup':
      enterStepApplyMakeup(s, scene);
      break;
    case 'step_brush_hair':
      enterStepBrushHair(s, scene);
      break;
    case 'step_lipbalm':
      enterStepLipbalm(s, scene);
      break;
    case 'step_apply_lashes':
      enterStepApplyLashes(s, scene);
      break;
    case 'step_birth_control':
      enterStepBirthControl(s, scene);
      break;
    case 'step_outfit_school':
      enterStepOutfitSchool(s, scene);
      break;
    case 'step_outfit_sport':
      enterStepOutfitSport(s, scene);
      break;
    case 'step_outfit_restore':
      enterStepOutfitRestore(s, scene);
      break;
    case 'step_water':
      enterStepWater(s, scene);
      break;
    case 'step_tea':
      enterStepTea(s, scene);
      break;
    case 'step_vitamin':
      enterStepVitamin(s, scene);
      break;
    case 'step_fill_bottle':
      enterStepFillBottle(s, scene);
      break;
    case 'step_sandwich':
      enterStepSandwich(s, scene);
      break;
    case 'step_snack':
      enterStepSnack(s, scene);
      break;
    case 'step_leftovers':
      enterStepLeftovers(s, scene);
      break;
    case 'step_medicine':
      enterStepMedicine(s, scene);
      break;
    case 'step_cook_meal':
      enterStepCookMeal(s, scene);
      break;
    case 'step_eat_meal':
      enterStepEatMeal(s, scene);
      break;
    case 'home_has_food':
      enterHomeHasFood(s, scene);
      break;
    case 'catalog_build':
      enterCatalogBuild(s, scene);
      break;
    case 'manage':
      enterManage(s, scene);
      break;
    case 'settings':
      enterSettings(s, scene);
      break;
    case 'step_pos':
      enterStepPos(s, scene);
      break;
    case 'remove_step_core':
      enterRemoveStepCore(s, scene);
      break;
    case 'remove_step_id':
      enterRemoveStepId(s, scene);
      break;
    case 'toggle_step':
      enterToggleStep(s, scene);
      break;
    case 'set_bath':
      enterSetBath(s, scene);
      break;
    case 'set_makeup_opt':
      enterSetMakeupOpt(s, scene);
      break;
    case 'set_lashes_opt':
      enterSetLashesOpt(s, scene);
      break;
    case 'bath_picker':
      enterBathPicker(s, scene);
      break;
    case 'makeup_picker':
      enterMakeupPicker(s, scene);
      break;
    case 'lashes_picker':
      enterLashesPicker(s, scene);
      break;
    case 'add_makeup':
      enterAddMakeup(s, scene);
      break;
    case 'add_lashes':
      enterAddLashes(s, scene);
      break;
    case 'manage_phase':
      enterManagePhase(s, scene);
      break;
    case 'add_step':
      enterAddStep(s, scene);
      break;
    case 'add_commit':
      enterAddCommit(s, scene);
      break;
    case 'remove_step':
      enterRemoveStep(s, scene);
      break;
    case 'move_up':
      enterMoveUp(s, scene);
      break;
    case 'move_down':
      enterMoveDown(s, scene);
      break;
    case 'render_list_inline':
      enterRenderListInline(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const daily_routine: LocationDef = {
  name: 'daily_routine',
  title: '<center><b>Evening routine</b></center>',
  region: 'other',
  enter: enter,
};
