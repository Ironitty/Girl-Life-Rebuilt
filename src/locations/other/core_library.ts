import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterSetloc(s: GameState, scene: SceneBuilder): void {
  (s as any).prevloc = ((s as any).loc ?? 0);
  (s as any).loc = ((s as any).locArgs?.[1] ?? 0);
  (s as any).menu_loc = ((s as any).locArgs?.[1] ?? 0);
  (s as any).locM = ((s as any).locArgs?.[1] ?? 0);
  (s as any).prevarg = ((s as any).loc_arg ?? 0);
  (s as any).loc_arg = ((s as any).locArgs?.[2] ?? 0);
  (s as any).menu_arg = ((s as any).locArgs?.[2] ?? 0);
  (s as any).locM_arg = ((s as any).locArgs?.[2] ?? 0);
  if ((String(((s as any).loc ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'pav_') {
    // TODO-QSP: $region[1] = 'pav'
  } else {
    if ((String(((s as any).loc ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'city_') {
      // TODO-QSP: $region[1] = 'city'
    } else {
      if ((String(((s as any).loc ?? 0)).slice((1)-1, ((1)-1)+(3))) === 'gad') {
        // TODO-QSP: $region[1] = 'gad'
      } else {
        if ((String(((s as any).loc ?? 0)).slice((1)-1, ((1)-1)+(7))) === 'pushkin') {
          // TODO-QSP: $region[1] = 'pushkin'
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterStageTitle(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: <center><h2><<$setloc[''StageTitle'']>></h2></center>
  scene.text(`<center><h2>${((s as any).setloc ?? 0)?.['StageTitle'] ?? ''}</h2></center>`);
  scene.img(`images/${((s as any).setloc ?? 0)?.['StageImage'] ?? ''}`);
  // TODO-QSP: end
  scene.build();
}

function enterEventViewer(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[5] ?? 0) === 'random') {
    (s as any).array_idx = 0;
  }
  // TODO-QSP: $events_viewer[] = 'gs <<$ARGS[3]>>, <<$ARGS[4]>>, <<array_idx>>'
  // TODO-QSP: end
  scene.build();
}

function enterCorridor(s: GameState, scene: SceneBuilder): void {
  (s as any).music_loop = 0;
  if (((s as any).frost ?? 0) > 0) {
    (s as any).frost = 0;
  }
  qspCall(s, 'themes', 'indoors');
  if ((String(((s as any).location_type ?? 0)).slice((1)-1, ((1)-1)+(7))) === 'private') {
  } else {
    if ((String(((s as any).location_type ?? 0)).slice((1)-1, ((1)-1)+(6))) === 'public') {
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBathroom(s: GameState, scene: SceneBuilder): void {
  if (((s as any).location_type ?? 0) === 'private'  ||  ((s as any).location_type ?? 0) === 'bathroom') {
    scene.text('Your accommodation for the week has the luxury of a private shower and a bath. There\'s a poster on the wall promoting the health benefits of ice baths and other advice on looking after your body.');
    // TODO-QSP: dynamic text: There is a shower, toilet, sink, and a <a href="exec:gt ''mirror'',''start''">mi...
    scene.text('There is a shower, toilet, sink, and a <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">mirror</a> where you can ' + (((!((s as any).pcs_hairbsh ?? 0))) ? ('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027brush/u0027); return false;">brush</a>') : ('brush')) + ' your hair.');
    qspCall(s, 'din_van', 'private');
  } else {
    if ((String(((s as any).location_type ?? 0)).slice((1)-1, ((1)-1)+(6))) === 'public'  ||  ((s as any).location_type ?? 0) === 'private_shared') {
      // TODO-QSP: dynamic text: There is a shower and <a href="exec:gt ''mirror'',''start''">mirrors</a> where y...
      scene.text('There is a shower and <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">mirrors</a> where you can ' + (((!((s as any).pcs_hairbsh ?? 0))) ? ('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027brush/u0027); return false;">brush</a>') : ('brush')) + ' your hair.');
      scene.actions([
        { label: 'Take a shower', handler: (st: GameState) => {
    (st as any).pcs_hairbsh = 0;
    (st as any).pcs_makeup = 1;
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'mood', 'raise', 'small');
    (st as any).noshampoo = 1;
    qspCall(st, 'din_van', 'showerdin');
    qspCall(st, 'stat', '');
    scene.text('You grab a quick shower, but you wish you could stay longer in the shower to let the heat soak into your muscles.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).location_type ?? 0) === 'restroom') {
      }
    }
  }
  qspCall(s, 'din_van', 'basin');
  qspCall(s, 'din_van', 'tampon');
  if ((!((s as any).pcs_hairbsh ?? 0))) {
    scene.actions([
      { label: 'Brush your hair', goto: ['mirror', 'brush'] },
    ]);
  }
  if (((s as any).deodorant ?? 0) > 0  &&  (!((s as any).deodorant_on ?? 0))) {
    // TODO-QSP: 'Your deodorant will last you for <b><<deodorant>></b> more '+iif(deodorant = 1, 'application.', 'ap...
    scene.actions([
      { label: 'Apply deodorant (0:01)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    (st as any).deodorant = ((st as any).deodorant ?? 0) - (1);
    qspCall(st, 'sweat', 'deo');
    // TODO-QSP: iif(func('body_din', 'pregnancyVisibility'), '<center><img <<$set_imgh>> src="images/shared/home/bat...
    scene.text('You apply deodorant to your armpits. It will keep you feeling fresh and clean for longer.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).menu_off = 0;
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterKitchen(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === 'full') {
    qspCall(s, 'kit_din', 'edasnack');
    qspCall(s, 'kit_din', 'sandwich');
    qspCall(s, 'kit_din', 'edaD');
    qspCall(s, 'kit_din', 'pranik');
    qspCall(s, 'kit_din', 'fatdel');
    qspCall(s, 'kit_din', 'lekarstvo');
    qspCall(s, 'kit_din', 'vitamin');
  } else {
    if (Number((s as any).locArgs?.[1] ?? 0) === 'communal') {
      qspCall(s, 'kit_din', 'edasnack');
      qspCall(s, 'kit_din', 'sandwich');
      qspCall(s, 'kit_din', 'edaD');
      qspCall(s, 'kit_din', 'fatdel');
      qspCall(s, 'kit_din', 'vitamin');
    } else {
      if (Number((s as any).locArgs?.[1] ?? 0) === 'hotel') {
        qspCall(s, 'kit_din', 'lekarstvo');
        qspCall(s, 'kit_din', 'fatdel');
        qspCall(s, 'kit_din', 'vitamin');
      } else {
        if (Number((s as any).locArgs?.[1] ?? 0) === 'shared') {
        }
      }
    }
  }
  qspCall(s, 'kit_din', 'driwater');
  qspCall(s, 'kit_din', 'dritea');
  qspCall(s, 'kit_din', 'fill_bottle');
  // TODO-QSP: end
  scene.build();
}

function enterBedroom(s: GameState, scene: SceneBuilder): void {
  if (((s as any).location_type ?? 0) === 'private') {
    if (((s as any).pcs_horny ?? 0) >= 50) {
      scene.actions([
        { label: 'Masturbate', goto: ['selfplay', 'start'] },
      ]);
    }
  } else {
    if (((s as any).location_type ?? 0) === 'private_shared') {
    }
  }
  qspCall(s, 'library_functions', 'set_home_read_acts');
  qspCall(s, 'exercise', 'start');
  // TODO-QSP: end
  scene.actions([
    { label: 'Relax on your bed', goto: ['bed', 'start'] },
    { label: 'Open wardrobe', goto: ['wardrobe', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'setloc':
      enterSetloc(s, scene);
      break;
    case 'stage_title':
      enterStageTitle(s, scene);
      break;
    case 'event_viewer':
      enterEventViewer(s, scene);
      break;
    case 'corridor':
      enterCorridor(s, scene);
      break;
    case 'bathroom':
      enterBathroom(s, scene);
      break;
    case 'kitchen':
      enterKitchen(s, scene);
      break;
    case 'bedroom':
      enterBedroom(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const core_library: LocationDef = {
  name: 'core_library',
  title: 'Your accommodation for the week has the luxury of a private ',
  region: 'other',
  locationType: 'private_shared',
  enter: enter,
};
