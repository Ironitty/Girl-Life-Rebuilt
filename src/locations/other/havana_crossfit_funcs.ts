// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterSetupWod(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'Fran', 120, 600, 'for_time', 'pullup']; enterAddWod(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'Nancy', 600, 1200, 'for_time', 'ohs']; enterAddWod(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'Isabel', 90, 600, 'for_time', 'snatch']; enterAddWod(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'Open 17.1', 600, 1200, 'for_time', 'dumbbell_snatch']; enterAddWod(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'Open 16.1', 1300, 100, 'for_rounds', 'overhead_lunge']; enterAddWod(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'Karen', 300, 720, 'for_time', 'wallball']; enterAddWod(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterFran(s: GameState, scene: SceneBuilder): void {
  scene.text('- Thruster 65 lbs');
  scene.text('- Pull-ups');
  scene.text('21-15-9 repetitions each, for time');
  // TODO-QSP: end
  scene.build();
}

function enterNancy(s: GameState, scene: SceneBuilder): void {
  scene.text('- 400 meter run');
  scene.text('- Overhead squat 65 lbs x 15');
  scene.text('5 rounds for time');
  // TODO-QSP: end
  scene.build();
}

function enterIsabel(s: GameState, scene: SceneBuilder): void {
  scene.text('- Snatch 95 pounds');
  scene.text('30 repetitions for time');
  // TODO-QSP: end
  scene.build();
}

function enterOpen17_1(s: GameState, scene: SceneBuilder): void {
  scene.text(' - 10 dumbbell snatches');
  scene.text(' - 15 burpee box jump-overs');
  scene.text(' - 20 dumbbell snatches');
  scene.text(' - 15 burpee box jump-overs');
  scene.text(' - 30 dumbbell snatches');
  scene.text(' - 15 burpee box jump-overs');
  scene.text(' - 40 dumbbell snatches');
  scene.text(' - 15 burpee box jump-overs');
  scene.text(' - 50 dumbbell snatches');
  scene.text(' - 15 burpee box jump-overs');
  scene.text('For time');
  // TODO-QSP: end
  scene.build();
}

function enterOpen16_1(s: GameState, scene: SceneBuilder): void {
  scene.text(' - 25-ft. overhead walking lunge');
  scene.text(' - 8 burpees');
  scene.text(' - 25-ft. overhead walking lunge');
  scene.text(' - 8 chest-to-bar pull-ups');
  scene.text('Complete as many rounds and reps as possible in 20 minutes');
  // TODO-QSP: end
  scene.build();
}

function enterKaren(s: GameState, scene: SceneBuilder): void {
  scene.text('- 150 wallball shots');
  scene.text('For time');
  // TODO-QSP: end
  scene.build();
}

function enterAddWod(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $crossfit_wods[] = $ARGS[1]
  // TODO-QSP: wod_min_score[$ARGS[1]] = ARGS[2]
  // TODO-QSP: wod_max_score[$ARGS[1]] = ARGS[3]
  // TODO-QSP: $wod_type[$ARGS[1]] = $ARGS[4]
  // TODO-QSP: $wod_video[$ARGS[1]] = $ARGS[5]
  // TODO-QSP: end
  scene.build();
}

function enterRecordstring(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[2] ?? '') === 0) {
    (s as any).result = 'No score yet';
  } else {
    (s as any).wod_score = ((s as any).wod_min_score ?? 0)[((s as any).locArgs?.[1] ?? 0)] + (((s as any).wod_max_score ?? 0)[((s as any).locArgs?.[1] ?? 0)] - ((s as any).wod_min_score ?? 0)[((s as any).locArgs?.[1] ?? 0)]) * ((s as any).locArgs?.[2] ?? 0) / 100;
    if (((s as any).wod_type ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'for_time') {
      (s as any).result = '' + ((s as any).wod_score ?? 0)/60 + ' minutes and ' + ((s as any).wod_score ?? 0) - (((s as any).wod_score ?? 0)/60)*60 + ' seconds';
    }
    if (((s as any).wod_type ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'for_rounds') {
      (s as any).result = '' + ((s as any).wod_score ?? 0)/100 + ' rounds and ' + ((s as any).wod_score ?? 0) - (((s as any).wod_score ?? 0)/100)*100 + '% of the last one';
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterUpdateBoxRecords(s: GameState, scene: SceneBuilder): void {
  if (((s as any).last_box_record_update ?? 0) === 0  ||  ((s as any).last_box_record_update ?? 0) + 30 < ((s as any).daystart ?? 0)) {
    (s as any).number_of_box_record_updates = 30;
  } else {
    (s as any).number_of_box_record_updates = ((s as any).daystart ?? 0) - ((s as any).last_box_record_update ?? 0);
  }
  (s as any).last_box_record_update = ((s as any).daystart ?? 0);
  (s as any).current_record_update_count = 0;
  // TODO-QSP: :recordupdateloop
  if (((s as any).current_record_update_count ?? 0) < ((s as any).number_of_box_record_updates ?? 0)) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBoxRecords(s, scene); (s as any).locArgs = __savedLocArgs; }
    (s as any).current_record_update_count = ((s as any).current_record_update_count ?? 0) + (1);
    // TODO-QSP: jump 'recordupdateloop'
  }
  // TODO-QSP: end
  scene.build();
}

function enterBoxRecords(s: GameState, scene: SceneBuilder): void {
  (s as any).crossfit_record_it = 0;
  // TODO-QSP: :recordgeneratorloop
  if (((s as any).crossfit_record_it ?? 0) < Object.keys((s as any).crossfit_wods ?? {}).length) {
    (s as any).crossfit_wod = (((s as any).crossfit_wods ?? 0)?.[String((s as any).crossfit_record_it ?? 0)] ?? 0);
    (s as any).new_record_wod_time = Math.max(1, (100 - (100 * ((Math.floor(Math.random() * 61) + 40) + (Math.floor(Math.random() * 101) + 0) + (Math.floor(Math.random() * 101) + 0) + (Math.floor(Math.random() * 101) + 0)) / 400)));
    if (((s as any).box_wod_record ?? 0)?.[String((s as any).crossfit_wod ?? 0)] === 0  ||  ((s as any).box_wod_record ?? 0)?.[String((s as any).crossfit_wod ?? 0)] > ((s as any).new_record_wod_time ?? 0)) {
      ((s as any).box_wod_record = (s as any).box_wod_record ?? {})[String((s as any).crossfit_wod ?? 0)] = ((s as any).new_record_wod_time ?? 0);
      if ((Math.floor(Math.random() * 3) + 0) === 0  ||  ((s as any).box_wod_record_holder ?? 0)?.[String((s as any).crossfit_wod ?? 0)] === ''  ||  ((s as any).box_wod_record_holder ?? 0)?.[String((s as any).crossfit_wod ?? 0)] === ((s as any).pcs_nickname ?? 0)) {
        // TODO-QSP: $box_wod_record_holder[$crossfit_wod] = func('npcrnamefile', 'rusFemale')
      }
    }
    (s as any).crossfit_record_it = ((s as any).crossfit_record_it ?? 0) + (1);
    // TODO-QSP: jump 'recordgeneratorloop'
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'setup_wod':
      enterSetupWod(s, scene);
      break;
    case 'Fran':
      enterFran(s, scene);
      break;
    case 'Nancy':
      enterNancy(s, scene);
      break;
    case 'Isabel':
      enterIsabel(s, scene);
      break;
    case 'Open 17.1':
      enterOpen17_1(s, scene);
      break;
    case 'Open 16.1':
      enterOpen16_1(s, scene);
      break;
    case 'Karen':
      enterKaren(s, scene);
      break;
    case 'add_wod':
      enterAddWod(s, scene);
      break;
    case 'recordstring':
      enterRecordstring(s, scene);
      break;
    case 'update_box_records':
      enterUpdateBoxRecords(s, scene);
      break;
    case 'box_records':
      enterBoxRecords(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const havana_crossfit_funcs: LocationDef = {
  name: 'havana_crossfit_funcs',
  title: '- Thruster 65 lbs',
  region: 'other',
  enter: enter,
};
