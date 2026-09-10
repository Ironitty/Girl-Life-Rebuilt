import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterInit(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'homes_properties', 'give_access', 'grandparents_house');
  qspCall(s, 'gad_gphouse', 'nudity_trouble_limit');
  qspCall(s, 'gad_gphouse', 'enter_events');
  scene.build();
}

function enterSetup(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gad_gphouse', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'schedule', 'A31', 'A32', 'A60');
  if (((s as any).prevloc ?? 0) !== 'gad_gphouse') {
    qspCall(s, 'gad_gphouse', 'init');
  }
  (s as any).setloc['imagepath'] = 'locations/gadukino/gp_dacha/';
  (s as any).setloc['StageTitle'] = ((s as any).setloc ?? 0)?.['room_title'];
  (s as any).setloc['StageImage'] = ((s as any).setloc ?? 0)?.['imagepath'] + ((s as any).setloc ?? 0)?.['room_image'];
  qspCall(s, 'shortgs', 'clothing_status');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'gad_gphouse', 'normal_events');
  qspCall(s, 'core_library', 'stage_title');
  if (((s as any).gp_debug ?? 0) === 1) {
    // TODO-QSP: dynamic text: <<$locat['A31_loc']>>, <<$locat['A31_arg']>>
    scene.text(`${((s as any).locat ?? 0)?.['A31_loc']}, ${((s as any).locat ?? 0)?.['A31_arg']}`);
    // TODO-QSP: dynamic text: <<$locat['A32_loc']>>, <<$locat['A32_arg']>>
    scene.text(`${((s as any).locat ?? 0)?.['A32_loc']}, ${((s as any).locat ?? 0)?.['A32_arg']}`);
  }
  scene.build();
}

function enterExit(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  (s as any).temp_rand = Math.floor(Math.random() * 11) + 0;
  if (((s as any).temp_rand ?? 0) === 0  &&  ((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).locat ?? 0)?.['A31_loc'] === 'gad_gphouse'  &&  ((s as any).locat ?? 0)?.['A31_arg'] !== 'gp_room') {
    scene.actions([{ label: 'Continue', goto: ['gad_gphouse', 'grandma_leave_event'] }]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['gad_gphouse', 'grandpa_leave_event'] }]);
  }
  scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc', 'loc_arg'); } }]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'init':
      enterInit(s, scene);
      break;
    case 'setup':
      enterSetup(s, scene);
      break;
    case 'exit':
      enterExit(s, scene);
      break;
    default:
      enterInit(s, scene);
      break;
  }
}

export const gad_gphouse: LocationDef = {
  name: 'gad_gphouse',
  title: 'Your mother, Natasha <<$pcs_lastname>>',
  region: 'gadukino',
  locationType: 'public_indoors',
  locclass: 'livingr',
  enter: enter,
};
