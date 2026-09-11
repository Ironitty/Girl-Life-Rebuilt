import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterDispose(s: GameState, scene: SceneBuilder): void {
  if (((s as any).underwear ?? 0)?.['type'] === 2) {
    if (((s as any).bodysuitworntype ?? 0) !== 'none') {
      qspCall(s, 'underwear_bodysuits', 'dispose');
    }
  } else {
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      qspCall(s, 'panties', 'dispose');
    }
    if (((s as any).braworntype ?? 0) !== 'none') {
      qspCall(s, 'bras', 'dispose');
    }
  }
  return;
  scene.build();
}

function enterBackup(s: GameState, scene: SceneBuilder): void {
  ((s as any).lastwornunderwear ?? {})['backup'] = ((s as any).underwear ?? 0)?.['type'];
  if (((s as any).underwear ?? 0)?.['type'] === 2) {
    ((s as any).lastwornbodysuittype ?? {})['backup'] = ((s as any).bodysuitworntype ?? 0);
    ((s as any).lastwornbodysuitnumber ?? {})['backup'] = ((s as any).bodysuitwornnumber ?? 0);
    qspCall(s, 'underwear_bodysuits', 'remove');
  } else {
    ((s as any).lastwornpantytype ?? {})['backup'] = ((s as any).pantyworntype ?? 0);
    ((s as any).lastwornpantynumber ?? {})['backup'] = ((s as any).pantywornnumber ?? 0);
    ((s as any).lastwornbratype ?? {})['backup'] = ((s as any).braworntype ?? 0);
    ((s as any).lastwornbranumber ?? {})['backup'] = ((s as any).brawornnumber ?? 0);
    qspCall(s, 'panties', 'remove');
    qspCall(s, 'bras', 'remove');
  }
  return;
  scene.build();
}

function enterDefault2(s: GameState, scene: SceneBuilder): void {
  if (((((s as any).clothingworntype ?? 0)).indexOf(('swimsuit'))) + 1 <= 0  &&  ((((s as any).clothingworntype ?? 0)).indexOf(('bikinis'))) + 1 <= 0) {
    if (((s as any).underwear ?? 0)?.['type'] === 2) {
      qspCall(s, 'underwear_bodysuits', 'strip');
    } else {
      qspCall(s, 'panties', 'strip');
      qspCall(s, 'bras', 'strip');
    }
  }
  return;
  scene.build();
}

function enterRestore(s: GameState, scene: SceneBuilder): void {
  if (((s as any).lastwornunderwear ?? 0)?.['backup'] === 2) {
    // TODO-QSP: gs 'underwear_bodysuits', 'wear', $lastwornbodysuittype['backup'], lastwornbodysuitnumber['backup']
  } else {
    // TODO-QSP: gs 'panties', 'wear', $lastwornpantytype['backup'], lastwornpantynumber['backup']
    // TODO-QSP: gs 'bras', 'wear', $lastwornbratype['backup'], lastwornbranumber['backup']
  }
  return;
  scene.build();
}

function enterWear(s: GameState, scene: SceneBuilder): void {
  if (((s as any).lastwornunderwear ?? 0) === 2) {
    // TODO-QSP: gs 'underwear_bodysuits', 'wear', $ARGS[1], ARGS[2]
  } else {
    // TODO-QSP: gs 'panties', 'wear', $ARGS[1], ARGS[2]
    // TODO-QSP: gs 'bras', 'wear', $ARGS[1], ARGS[2]
  }
  return;
  scene.build();
}

function enterDresser(s: GameState, scene: SceneBuilder): void {
  scene.text('In your dresser, you can sort through all your underwear. Much of it is just regular underwear, but you can also own some distinct items.');
  scene.text('The distinct items are sorted into bras and panties and by the shop in which they were purchased. They must be picked here, and automatic options will default to regular underwear.');
  scene.text('The wear panties and bra options here are for the regular underwear, the large buttons for choosing unique items.');
  // TODO-QSP: dynamic text: Your dresser contains <<func('panties','sum','dresser')>> pairs of regular panti...
  scene.text(`Your dresser contains ${qspFunc(s, 'panties', 'sum', 'dresser')} pairs of regular panties and ${qspFunc(s, 'bras', 'sum', 'dresser')} regular bras.`);
  // TODO-QSP: *p '<center><a href="exec:gt ''bra_view'', ''view_grid'', ''clean'', 6"><img src="images/system/icon...
  qspCall(s, 'din_van', 'wearpan');
  qspCall(s, 'din_van', 'removepan');
  return;
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'dispose':
      enterDispose(s, scene);
      break;
    case 'backup':
      enterBackup(s, scene);
      break;
    case 'restore':
      enterRestore(s, scene);
      break;
    case 'wear':
      enterWear(s, scene);
      break;
    case 'dresser':
      enterDresser(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const underwear: LocationDef = {
  name: 'underwear',
  title: 'In your dresser, you can sort through all your underwear. Mu',
  region: 'other',
  enter: enter,
};
