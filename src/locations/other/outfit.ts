import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterClearAll(s: GameState, scene: SceneBuilder): void {
  (s as any).clothingwornnumber = 0;
  (s as any).underwear['type'] = 0;
  (s as any).bodysuitwornnumber = 0;
  (s as any).brawornnumber = 0;
  (s as any).pantywornnumber = 0;
  (s as any).currentpursenumber = 0;
  (s as any).shoewornnumber = 0;
  (s as any).coatwornnumber = 0;
  qspCall(s, 'clothing', 'reset_CloVars');
  qspCall(s, 'clothing', 'reset_PCloVars');
  qspCall(s, 'bras', 'reset_BraVars');
  qspCall(s, 'bras', 'reset_PBraVars');
  qspCall(s, 'panties', 'reset_PanVars');
  qspCall(s, 'panties', 'reset_PPanVars');
  qspCall(s, 'shoes', 'reset_ShoVars');
  qspCall(s, 'shoes', 'reset_PShoVars');
  qspCall(s, 'purses', 'reset_PurseVars');
  qspCall(s, 'purses', 'reset_PPurseVars');
  qspCall(s, 'coats', 'reset_CoatVars');
  qspCall(s, 'coats', 'reset_PCoatVars');
  qspCall(s, 'outfit', 'set_derived_vars');
  return;
  scene.build();
}

function enterResetDerivedVars(s: GameState, scene: SceneBuilder): void {
  (s as any).PBimbo = 0;
  (s as any).PGoth = 0;
  (s as any).PPunk = 0;
  (s as any).PPrep = 0;
  (s as any).PPrude = 0;
  (s as any).PProstitute = 0;
  (s as any).PMaid = 0;
  (s as any).PServer = 0;
  (s as any).PStrip = 0;
  (s as any).PSchool = 0;
  (s as any).POffice = 0;
  (s as any).PSport = 0;
  (s as any).PSwim = 0;
  (s as any).PCoverTop = 0;
  (s as any).PCoverFront = 0;
  (s as any).PCoverBack = 0;
  return;
  scene.build();
}

function enterSetDerivedVars(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'outfit', 'reset_derived_vars');
  if (((s as any).PCloBra ?? 0) === 1) {
    if (((s as any).braworntype ?? 0) !== 'none') {
      qspCall(s, 'bras', 'strip');
      return;
    }
    (s as any).PXCloTopCut = 400;
  } else {
    (s as any).PXCloTopCut = 500;
  }
  if (((s as any).PCloBimbo ?? 0) === 1  &&  ((s as any).PShoBimbo ?? 0) === 1) {
    (s as any).PBimbo = 1;
  }
  if (((s as any).PCloGoth ?? 0) === 1  &&  ((s as any).PShoGoth ?? 0) === 1) {
    (s as any).PGoth = 1;
  }
  if (((s as any).PCloPunk ?? 0) === 1  &&  ((s as any).PShoPunk ?? 0) === 1) {
    (s as any).PPunk = 1;
  }
  if (((s as any).PCloPrep ?? 0) === 1) {
    (s as any).PPrep = 1;
  }
  if (((s as any).PCloPrude ?? 0) === 1) {
    (s as any).PPrude = 1;
  }
  qspCall(s, 'prostitution_functions', 'work_clothes');
  if (((s as any).PCloStyle2 ?? 0) === 1  ||  ((s as any).PCloMaid ?? 0) === 1) {
    (s as any).PMaid = 1;
  }
  if (((s as any).PCloStyle2 ?? 0) === 2  ||  ((s as any).PCloServer ?? 0) === 1) {
    (s as any).PServer = 1;
  }
  if ((((s as any).PCloStyle2 ?? 0) === 3  ||  ((s as any).PCloStrip ?? 0) === 1)  &&  (((s as any).PShoStyle2 ?? 0) === 1  ||  ((s as any).PShoStrip ?? 0) === 1)) {
    (s as any).PStrip = 1;
  }
  if (((s as any).PCloStyle2 ?? 0) === 4  ||  ((s as any).PCloSchool ?? 0) === 1) {
    (s as any).PSchool = 1;
  }
  if (((s as any).PCloStyle2 ?? 0) === 5  ||  ((s as any).PCloOffice ?? 0) === 1) {
    (s as any).POffice = 1;
  }
  if ((((s as any).PCloStyle2 ?? 0) === 6  ||  ((s as any).PCloSport ?? 0) === 1)  &&  (((s as any).PShoStyle2 ?? 0) === 2  ||  ((s as any).PShoSport ?? 0) === 1)) {
    (s as any).PSport = 1;
  }
  (s as any).PSwim = ((s as any).PCloSwim ?? 0);
  if (((s as any).clothingworntype ?? 0) !== 'nude') {
  } else {
    if (((s as any).PBraSwim ?? 0) === 0  &&  ((s as any).braworntype ?? 0) !== 'none') {
    } else {
      (s as any).PSwim = 1;
    }
    (s as any).PCoverTop = ((s as any).max ?? 0)(0, ((s as any).PCloCoverTop ?? 0) + ((s as any).PBraCover ?? 0) - 4);
    (s as any).PCoverFront = ((s as any).max ?? 0)(0, ((s as any).PCloCoverFront ?? 0) + ((s as any).PPanCoverFront ?? 0) - 4);
    (s as any).PCoverBack = ((s as any).max ?? 0)(0, ((s as any).PCloCoverBack ?? 0) + ((s as any).PPanCoverBack ?? 0) - 4);
    (s as any).CoverTop = ((s as any).PCoverTop ?? 0);
    (s as any).CoverBack = ((s as any).PCoverBack ?? 0);
    (s as any).CoverFront = ((s as any).PCoverFront ?? 0);
    return;
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'clear_all':
      enterClearAll(s, scene);
      break;
    case 'reset_derived_vars':
      enterResetDerivedVars(s, scene);
      break;
    case 'set_derived_vars':
      enterSetDerivedVars(s, scene);
      break;
    default:
      enterClearAll(s, scene);
      break;
  }
}

export const outfit: LocationDef = {
  name: 'outfit',
  title: 'bimbo',
  region: 'other',
  locationType: 'event_outdoors',
  enter: enter,
};
