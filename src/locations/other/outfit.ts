import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterClearAll(s: GameState, scene: SceneBuilder): void {
  (s as any).clothingworntype = 'nude';
  (s as any).clothingwornnumber = 0;
  ((s as any).underwear = (s as any).underwear ?? {})['type'] = 0;
  (s as any).bodysuitworntype = 'none';
  (s as any).bodysuitwornnumber = 0;
  (s as any).braworntype = 'none';
  (s as any).brawornnumber = 0;
  (s as any).pantyworntype = 'none';
  (s as any).pantywornnumber = 0;
  (s as any).currentpursetype = 'none';
  (s as any).currentpursenumber = 0;
  (s as any).shoeworntype = 'none';
  (s as any).shoewornnumber = 0;
  (s as any).coatworntype = 'none';
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
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetDerivedVars(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
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
  // TODO-QSP: end
  scene.build();
}

function enterSetDerivedVars(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterResetDerivedVars(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).PCloBra ?? 0) === 1) {
    if (((s as any).braworntype ?? 0) !== 'none') {
      qspCall(s, 'bras', 'strip');
      return;
    }
    (s as any).PXCloTopCut = 400;
  } else {
    if (((s as any).PCloBra ?? 0) === 2) {
      (s as any).PXCloTopCut = 500;
    }
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
  (s as any).PCoverTop = Math.max(0, ((s as any).PCloCoverTop ?? 0) + ((s as any).PBraCover ?? 0) - 4);
  (s as any).PCoverFront = Math.max(0, ((s as any).PCloCoverFront ?? 0) + ((s as any).PPanCoverFront ?? 0) - 4);
  (s as any).PCoverBack = Math.max(0, ((s as any).PCloCoverBack ?? 0) + ((s as any).PPanCoverBack ?? 0) - 4);
  (s as any).CoverTop = ((s as any).PCoverTop ?? 0);
  (s as any).CoverBack = ((s as any).PCoverBack ?? 0);
  (s as any).CoverFront = ((s as any).PCoverFront ?? 0);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterUndress(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = 'backup';
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterBackup(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStripAll(s, scene); (s as any).locArgs = __savedLocArgs; }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterDress(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = 'backup';
  }
  if (((s as any).lastwornclothingtype ?? 0)[((s as any).locArgs?.[1] ?? 0)] !== ''  &&  ((s as any).lastwornclothingtype ?? 0)[((s as any).locArgs?.[1] ?? 0)] !== 'nude') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterRestore(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRestore(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterNudeBackup(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    (s as any).lastwornclothingtype = 'nude';
    (s as any).lastwornclothingnumber = 0;
    (s as any).lastwornunderwear = 0;
    (s as any).lastwornbodysuittype = 'none';
    (s as any).lastwornbodysuitnumber = 0;
    (s as any).lastwornpantytype = 'none';
    (s as any).lastwornpantynumber = 0;
    (s as any).lastwornbratype = 'none';
    (s as any).lastwornbranumber = 0;
    (s as any).lastwornshoetype = 'none';
    (s as any).lastwornshoenumber = 0;
    (s as any).lastwornpursetype = 'none';
    (s as any).lastwornpursenumber = 0;
    (s as any).lastworncoattype = 'none';
    (s as any).lastworncoatnumber = 0;
  } else {
    // TODO-QSP: $lastwornclothingtype[$ARGS[1]]    = 'nude'
    // TODO-QSP: lastwornclothingnumber[$ARGS[1]]  = 0
    // TODO-QSP: lastwornunderwear[$ARGS[1]]      = 0
    // TODO-QSP: $lastwornbodysuittype[$ARGS[1]]    = 'none'
    // TODO-QSP: lastwornbodysuitnumber[$ARGS[1]]  = 0
    // TODO-QSP: $lastwornpantytype[$ARGS[1]]    = 'none'
    // TODO-QSP: lastwornpantynumber[$ARGS[1]]    = 0
    // TODO-QSP: $lastwornbratype[$ARGS[1]]      = 'none'
    // TODO-QSP: lastwornbranumber[$ARGS[1]]      = 0
    // TODO-QSP: $lastwornshoetype[$ARGS[1]]      = 'none'
    // TODO-QSP: lastwornshoenumber[$ARGS[1]]    = 0
    // TODO-QSP: $lastwornpursetype[$ARGS[1]]    = 'none'
    // TODO-QSP: lastwornpursenumber[$ARGS[1]]    = 0
    // TODO-QSP: $lastworncoattype[$ARGS[1]]      = 'none'
    // TODO-QSP: lastworncoatnumber[$ARGS[1]]    = 0
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBackup(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    (s as any).lastwornclothingtype = ((s as any).clothingworntype ?? 0);
    (s as any).lastwornclothingnumber = ((s as any).clothingwornnumber ?? 0);
    (s as any).lastwornunderwear = ((s as any).underwear ?? 0)?.['type'];
    (s as any).lastwornbodysuittype = ((s as any).bodysuitworntype ?? 0);
    (s as any).lastwornbodysuitnumber = ((s as any).bodysuitwornnumber ?? 0);
    (s as any).lastwornpantytype = ((s as any).pantyworntype ?? 0);
    (s as any).lastwornpantynumber = ((s as any).pantywornnumber ?? 0);
    (s as any).lastwornbratype = ((s as any).braworntype ?? 0);
    (s as any).lastwornbranumber = ((s as any).brawornnumber ?? 0);
    (s as any).lastwornshoetype = ((s as any).shoeworntype ?? 0);
    (s as any).lastwornshoenumber = ((s as any).shoewornnumber ?? 0);
    (s as any).lastwornpursetype = ((s as any).currentpursetype ?? 0);
    (s as any).lastwornpursenumber = ((s as any).currentpursenumber ?? 0);
    (s as any).lastworncoattype = ((s as any).coatworntype ?? 0);
    (s as any).lastworncoatnumber = ((s as any).coatwornnumber ?? 0);
  } else {
    // TODO-QSP: $lastwornclothingtype[$ARGS[1]]    = $clothingworntype
    // TODO-QSP: lastwornclothingnumber[$ARGS[1]]  = clothingwornnumber
    // TODO-QSP: lastwornunderwear[$ARGS[1]]      = underwear['type']
    // TODO-QSP: $lastwornbodysuittype[$ARGS[1]]    = $bodysuitworntype
    // TODO-QSP: lastwornbodysuitnumber[$ARGS[1]]  = bodysuitwornnumber
    // TODO-QSP: $lastwornpantytype[$ARGS[1]]    = $pantyworntype
    // TODO-QSP: lastwornpantynumber[$ARGS[1]]    = pantywornnumber
    // TODO-QSP: $lastwornbratype[$ARGS[1]]      = $braworntype
    // TODO-QSP: lastwornbranumber[$ARGS[1]]      = brawornnumber
    // TODO-QSP: $lastwornshoetype[$ARGS[1]]      = $shoeworntype
    // TODO-QSP: lastwornshoenumber[$ARGS[1]]    = shoewornnumber
    // TODO-QSP: $lastwornpursetype[$ARGS[1]]    = $currentpursetype
    // TODO-QSP: lastwornpursenumber[$ARGS[1]]    = currentpursenumber
    // TODO-QSP: $lastworncoattype[$ARGS[1]]      = $coatworntype
    // TODO-QSP: lastworncoatnumber[$ARGS[1]]    = coatwornnumber
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSafeBackup(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    if (qspFunc(s, 'clothing', 'is_wearing_any')) {
      (s as any).lastwornclothingtype = ((s as any).clothingworntype ?? 0);
      (s as any).lastwornclothingnumber = ((s as any).clothingwornnumber ?? 0);
    }
    if (qspFunc(s, 'underwear_bodysuits', 'is_wearing_any')) {
      (s as any).lastwornunderwear = ((s as any).underwear ?? 0)?.['type'];
      (s as any).lastwornbodysuittype = ((s as any).bodysuitworntype ?? 0);
      (s as any).lastwornbodysuitnumber = ((s as any).bodysuitwornnumber ?? 0);
    }
    if (qspFunc(s, 'panties', 'is_wearing_any')) {
      (s as any).lastwornunderwear = ((s as any).underwear ?? 0)?.['type'];
      (s as any).lastwornpantytype = ((s as any).pantyworntype ?? 0);
      (s as any).lastwornpantynumber = ((s as any).pantywornnumber ?? 0);
    }
    if (qspFunc(s, 'bras', 'is_wearing_any')) {
      (s as any).lastwornunderwear = ((s as any).underwear ?? 0)?.['type'];
      (s as any).lastwornbratype = ((s as any).braworntype ?? 0);
      (s as any).lastwornbranumber = ((s as any).brawornnumber ?? 0);
    }
    if (qspFunc(s, 'shoes', 'is_wearing_any')) {
      (s as any).lastwornshoetype = ((s as any).shoeworntype ?? 0);
      (s as any).lastwornshoenumber = ((s as any).shoewornnumber ?? 0);
    }
    if (qspFunc(s, 'purses', 'is_wearing_any')) {
      (s as any).lastwornpursetype = ((s as any).currentpursetype ?? 0);
      (s as any).lastwornpursenumber = ((s as any).currentpursenumber ?? 0);
    }
    if (qspFunc(s, 'coats', 'is_wearing_any')) {
      (s as any).lastworncoattype = ((s as any).coatworntype ?? 0);
      (s as any).lastworncoatnumber = ((s as any).coatwornnumber ?? 0);
    }
  } else {
    if (qspFunc(s, 'clothing', 'is_wearing_any')) {
      // TODO-QSP: $lastwornclothingtype[$ARGS[1]]    = $clothingworntype
      // TODO-QSP: lastwornclothingnumber[$ARGS[1]]  = clothingwornnumber
    }
    if (qspFunc(s, 'underwear_bodysuits', 'is_wearing_any')) {
      // TODO-QSP: lastwornunderwear[$ARGS[1]]      = underwear['type']
      // TODO-QSP: $lastwornbodysuittype[$ARGS[1]]    = $bodysuitworntype
      // TODO-QSP: lastwornbodysuitnumber[$ARGS[1]]  = bodysuitwornnumber
    }
    if (qspFunc(s, 'panties', 'is_wearing_any')) {
      // TODO-QSP: lastwornunderwear[$ARGS[1]]      = underwear['type']
      // TODO-QSP: $lastwornpantytype[$ARGS[1]]    = $pantyworntype
      // TODO-QSP: lastwornpantynumber[$ARGS[1]]    = pantywornnumber
    }
    if (qspFunc(s, 'bras', 'is_wearing_any')) {
      // TODO-QSP: lastwornunderwear[$ARGS[1]]      = underwear['type']
      // TODO-QSP: $lastwornbratype[$ARGS[1]]      = $braworntype
      // TODO-QSP: lastwornbranumber[$ARGS[1]]      = brawornnumber
    }
    if (qspFunc(s, 'shoes', 'is_wearing_any')) {
      // TODO-QSP: $lastwornshoetype[$ARGS[1]]      = $shoeworntype
      // TODO-QSP: lastwornshoenumber[$ARGS[1]]    = shoewornnumber
    }
    if (qspFunc(s, 'purses', 'is_wearing_any')) {
      // TODO-QSP: $lastwornpursetype[$ARGS[1]]    = $currentpursetype
      // TODO-QSP: lastwornpursenumber[$ARGS[1]]    = currentpursenumber
    }
    if (qspFunc(s, 'coats', 'is_wearing_any')) {
      // TODO-QSP: $lastworncoattype[$ARGS[1]]      = $coatworntype
      // TODO-QSP: lastworncoatnumber[$ARGS[1]]    = coatwornnumber
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterTransferBackup(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $lastwornclothingtype[iif($ARGS[2]  = '', ARGS[2], $ARGS[2])]  = $lastwornclothingtype[iif($ARGS[1] ...
  // TODO-QSP: lastwornclothingnumber[iif($ARGS[2]  = '', ARGS[2], $ARGS[2])]  = lastwornclothingnumber[iif($ARGS[1...
  // TODO-QSP: lastwornunderwear[iif($ARGS[2]    = '', ARGS[2], $ARGS[2])]  = lastwornunderwear[iif($ARGS[1]    = '...
  // TODO-QSP: $lastwornbodysuittype[iif($ARGS[2]  = '', ARGS[2], $ARGS[2])]  = $lastwornbodysuittype[iif($ARGS[1] ...
  // TODO-QSP: lastwornbodysuitnumber[iif($ARGS[2]  = '', ARGS[2], $ARGS[2])]  = lastwornbodysuitnumber[iif($ARGS[1...
  // TODO-QSP: $lastwornpantytype[iif($ARGS[2]    = '', ARGS[2], $ARGS[2])]  = $lastwornpantytype[iif($ARGS[1]    =...
  // TODO-QSP: lastwornpantynumber[iif($ARGS[2]  = '', ARGS[2], $ARGS[2])]  = lastwornpantynumber[iif($ARGS[1]    =...
  // TODO-QSP: $lastwornbratype[iif($ARGS[2]    = '', ARGS[2], $ARGS[2])]  = $lastwornbratype[iif($ARGS[1]      = '...
  // TODO-QSP: lastwornbranumber[iif($ARGS[2]    = '', ARGS[2], $ARGS[2])]  = lastwornbranumber[iif($ARGS[1]    = '...
  // TODO-QSP: $lastwornshoetype[iif($ARGS[2]    = '', ARGS[2], $ARGS[2])]  = $lastwornshoetype[iif($ARGS[1]    = '...
  // TODO-QSP: lastwornshoenumber[iif($ARGS[2]    = '', ARGS[2], $ARGS[2])]  = lastwornshoenumber[iif($ARGS[1]    =...
  // TODO-QSP: $lastwornpursetype[iif($ARGS[2]    = '', ARGS[2], $ARGS[2])]  = $lastwornpursetype[iif($ARGS[1]    =...
  // TODO-QSP: lastwornpursenumber[iif($ARGS[2]  = '', ARGS[2], $ARGS[2])]  = lastwornpursenumber[iif($ARGS[1]    =...
  // TODO-QSP: $lastworncoattype[iif($ARGS[2]    = '', ARGS[2], $ARGS[2])]  = $lastworncoattype[iif($ARGS[1]    = '...
  // TODO-QSP: lastworncoatnumber[iif($ARGS[2]    = '', ARGS[2], $ARGS[2])]  = lastworncoatnumber[iif($ARGS[1]    =...
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSafeTransferBackup(s: GameState, scene: SceneBuilder): void {
  if (((s as any).lastwornclothingtype ?? 0)[((s as any).iif ?? 0)(((s as any).locArgs?.[1] ?? 0)  === '', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[1] ?? 0))] !== ''  &&  ((s as any).lastwornclothingtype ?? 0)[((s as any).iif ?? 0)(((s as any).locArgs?.[1] ?? 0)  === '', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[1] ?? 0))] !== 'nude') {
    // TODO-QSP: $lastwornclothingtype[iif($ARGS[2]  = '', ARGS[2], $ARGS[2])]  = $lastwornclothingtype[iif($ARGS[1] ...
    // TODO-QSP: lastwornclothingnumber[iif($ARGS[2]  = '', ARGS[2], $ARGS[2])]  = lastwornclothingnumber[iif($ARGS[1...
  }
  if (((s as any).lastwornbodysuittype ?? 0)[((s as any).iif ?? 0)(((s as any).locArgs?.[1] ?? 0)  === '', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[1] ?? 0))] !== ''  &&  ((s as any).lastwornbodysuittype ?? 0)[((s as any).iif ?? 0)(((s as any).locArgs?.[1] ?? 0)  === '', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[1] ?? 0))] !== 'none') {
    // TODO-QSP: lastwornunderwear[iif($ARGS[2]    = '', ARGS[2], $ARGS[2])]  = lastwornunderwear[iif($ARGS[1]      =...
    // TODO-QSP: $lastwornbodysuittype[iif($ARGS[2]  = '', ARGS[2], $ARGS[2])]  = $lastwornbodysuittype[iif($ARGS[1] ...
    // TODO-QSP: lastwornbodysuitnumber[iif($ARGS[2]  = '', ARGS[2], $ARGS[2])]  = lastwornbodysuitnumber[iif($ARGS[1...
  }
  if (((s as any).lastwornpantytype ?? 0)[((s as any).iif ?? 0)(((s as any).locArgs?.[1] ?? 0)    === '', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[1] ?? 0))] !== ''  &&  ((s as any).lastwornpantytype ?? 0)[((s as any).iif ?? 0)(((s as any).locArgs?.[1] ?? 0)    === '', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[1] ?? 0))] !== 'none') {
    // TODO-QSP: lastwornunderwear[iif($ARGS[2]    = '', ARGS[2], $ARGS[2])]  = lastwornunderwear[iif($ARGS[1]      =...
    // TODO-QSP: $lastwornpantytype[iif($ARGS[2]    = '', ARGS[2], $ARGS[2])]  = $lastwornpantytype[iif($ARGS[1]     ...
    // TODO-QSP: lastwornpantynumber[iif($ARGS[2]  = '', ARGS[2], $ARGS[2])]  = lastwornpantynumber[iif($ARGS[1]     ...
  }
  if (((s as any).lastwornbratype ?? 0)[((s as any).iif ?? 0)(((s as any).locArgs?.[1] ?? 0)    === '', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[1] ?? 0))] !== ''  &&  ((s as any).lastwornbratype ?? 0)[((s as any).iif ?? 0)(((s as any).locArgs?.[1] ?? 0)    === '', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[1] ?? 0))] !== 'none') {
    // TODO-QSP: lastwornunderwear[iif($ARGS[2]    = '', ARGS[2], $ARGS[2])]  = lastwornunderwear[iif($ARGS[1]      =...
    // TODO-QSP: $lastwornbratype[iif($ARGS[2]    = '', ARGS[2], $ARGS[2])]  = $lastwornbratype[iif($ARGS[1]        =...
    // TODO-QSP: lastwornbranumber[iif($ARGS[2]    = '', ARGS[2], $ARGS[2])]  = lastwornbranumber[iif($ARGS[1]      =...
  }
  if (((s as any).lastwornshoetype ?? 0)[((s as any).iif ?? 0)(((s as any).locArgs?.[1] ?? 0)    === '', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[1] ?? 0))] !== ''  &&  ((s as any).lastwornshoetype ?? 0)[((s as any).iif ?? 0)(((s as any).locArgs?.[1] ?? 0)    === '', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[1] ?? 0))] !== 'none') {
    // TODO-QSP: $lastwornshoetype[iif($ARGS[2]    = '', ARGS[2], $ARGS[2])]  = $lastwornshoetype[iif($ARGS[1]      =...
    // TODO-QSP: lastwornshoenumber[iif($ARGS[2]    = '', ARGS[2], $ARGS[2])]  = lastwornshoenumber[iif($ARGS[1]     ...
  }
  if (((s as any).lastwornpursetype ?? 0)[((s as any).iif ?? 0)(((s as any).locArgs?.[1] ?? 0)    === '', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[1] ?? 0))] !== ''  &&  ((s as any).lastwornpursetype ?? 0)[((s as any).iif ?? 0)(((s as any).locArgs?.[1] ?? 0)    === '', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[1] ?? 0))] !== 'none') {
    // TODO-QSP: $lastwornpursetype[iif($ARGS[2]    = '', ARGS[2], $ARGS[2])]  = $lastwornpursetype[iif($ARGS[1]    =...
    // TODO-QSP: lastwornpursenumber[iif($ARGS[2]  = '', ARGS[2], $ARGS[2])]  = lastwornpursenumber[iif($ARGS[1]    =...
  }
  if (((s as any).lastworncoattype ?? 0)[((s as any).iif ?? 0)(((s as any).locArgs?.[1] ?? 0)    === '', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[1] ?? 0))] !== ''  &&  ((s as any).lastworncoattype ?? 0)[((s as any).iif ?? 0)(((s as any).locArgs?.[1] ?? 0)    === '', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[1] ?? 0))] !== 'none') {
    // TODO-QSP: $lastworncoattype[iif($ARGS[2]    = '', ARGS[2], $ARGS[2])]  = $lastworncoattype[iif($ARGS[1]    = '...
    // TODO-QSP: lastworncoatnumber[iif($ARGS[2]    = '', ARGS[2], $ARGS[2])]  = lastworncoatnumber[iif($ARGS[1]    =...
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRemoveBackup(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNudeBackup(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    qspCall(s, 'array', 'remove_element', '$lastwornclothingtype', ((s as any).locArgs?.[1] ?? 0));
    qspCall(s, 'array', 'remove_element', 'lastwornclothingnumber', ((s as any).locArgs?.[1] ?? 0));
    qspCall(s, 'array', 'remove_element', 'lastwornunderwear', ((s as any).locArgs?.[1] ?? 0));
    qspCall(s, 'array', 'remove_element', '$lastwornbodysuittype', ((s as any).locArgs?.[1] ?? 0));
    qspCall(s, 'array', 'remove_element', 'lastwornbodysuitnumber', ((s as any).locArgs?.[1] ?? 0));
    qspCall(s, 'array', 'remove_element', '$lastwornpantytype', ((s as any).locArgs?.[1] ?? 0));
    qspCall(s, 'array', 'remove_element', 'lastwornpantynumber', ((s as any).locArgs?.[1] ?? 0));
    qspCall(s, 'array', 'remove_element', '$lastwornbratype', ((s as any).locArgs?.[1] ?? 0));
    qspCall(s, 'array', 'remove_element', 'lastwornbranumber', ((s as any).locArgs?.[1] ?? 0));
    qspCall(s, 'array', 'remove_element', '$lastwornshoetype', ((s as any).locArgs?.[1] ?? 0));
    qspCall(s, 'array', 'remove_element', 'lastwornshoenumber', ((s as any).locArgs?.[1] ?? 0));
    qspCall(s, 'array', 'remove_element', '$lastwornpursetype', ((s as any).locArgs?.[1] ?? 0));
    qspCall(s, 'array', 'remove_element', 'lastwornpursenumber', ((s as any).locArgs?.[1] ?? 0));
    qspCall(s, 'array', 'remove_element', '$lastworncoattype', ((s as any).locArgs?.[1] ?? 0));
    qspCall(s, 'array', 'remove_element', 'lastworncoatnumber', ((s as any).locArgs?.[1] ?? 0));
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRestore(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    qspCall(s, 'clothing', 'wear', ((s as any).lastwornclothingtype ?? 0), ((s as any).lastwornclothingnumber ?? 0), 'force');
    if (((s as any).lastwornunderwear ?? 0) === 2) {
      qspCall(s, 'underwear_bodysuits', 'wear', ((s as any).lastwornbodysuittype ?? 0), ((s as any).lastwornbodysuitnumber ?? 0));
    } else {
      qspCall(s, 'panties', 'wear', ((s as any).lastwornpantytype ?? 0), ((s as any).lastwornpantynumber ?? 0));
      qspCall(s, 'bras', 'wear', ((s as any).lastwornbratype ?? 0), ((s as any).lastwornbranumber ?? 0));
    }
    qspCall(s, 'shoes', 'wear', ((s as any).lastwornshoetype ?? 0), ((s as any).lastwornshoenumber ?? 0));
    qspCall(s, 'purses', 'wear', ((s as any).lastwornpursetype ?? 0), ((s as any).lastwornpursenumber ?? 0));
    qspCall(s, 'coats', 'wear', ((s as any).lastworncoattype ?? 0), ((s as any).lastworncoatnumber ?? 0));
  } else {
    // TODO-QSP: gs 'clothing', 'wear', $lastwornclothingtype[$ARGS[1]], lastwornclothingnumber[$ARGS[1]], 'force'
    if (((s as any).lastwornunderwear ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 2) {
      // TODO-QSP: gs 'underwear_bodysuits', 'wear', $lastwornbodysuittype[$ARGS[1]], lastwornbodysuitnumber[$ARGS[1]]
    } else {
      // TODO-QSP: gs 'panties',  'wear', $lastwornpantytype[$ARGS[1]],  lastwornpantynumber[$ARGS[1]]
      // TODO-QSP: gs 'bras',    'wear', $lastwornbratype[$ARGS[1]],    lastwornbranumber[$ARGS[1]]
    }
    // TODO-QSP: gs 'shoes',    'wear', $lastwornshoetype[$ARGS[1]],  lastwornshoenumber[$ARGS[1]]
    // TODO-QSP: gs 'purses',  'wear', $lastwornpursetype[$ARGS[1]],  lastwornpursenumber[$ARGS[1]]
    // TODO-QSP: gs 'coats',    'wear', $lastworncoattype[$ARGS[1]],  lastworncoatnumber[$ARGS[1]]
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterStripAll(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterBackup(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'clothing', 'strip', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'underwear', 'strip');
  qspCall(s, 'shoes', 'strip');
  qspCall(s, 'coats', 'strip');
  qspCall(s, 'purses', 'strip');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterWearLastWorn(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'clothing', 'wear', 'last_worn');
  qspCall(s, 'underwear', 'wear', 'last_worn');
  qspCall(s, 'shoes', 'wear', 'last_worn');
  qspCall(s, 'coats', 'wear', 'last_worn');
  qspCall(s, 'purses', 'wear', 'last_worn');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRecoverLostOutfit(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'clothing', 'recover_lost_clothes', $ARGS[1], ARGS[2]
  if (((s as any).locArgs?.[2] ?? 0) === 1) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterRestore(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetHourlyMoodBonus(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
  if (((s as any).cheatVars ?? 0)?.['clothes_dirt']) {
    (s as any).result = ((s as any).result ?? 0) + (0);
  } else {
    (s as any).tempDirt = (((s as any).PCloDirt ?? 0) + ((s as any).PBraDirt ?? 0) + ((s as any).PPanDirt ?? 0)) / 3;
    (s as any).result = ((s as any).result ?? 0) + (Math.min(Math.max((-5), 5 * (1440 - ((s as any).tempDirt ?? 0)) / 960), 5));
  }
  if (((s as any).pcs_mood ?? 0) < 60  &&  ((s as any).pantyworntype ?? 0) === 'cats') {
    (s as any).result = ((s as any).result ?? 0) + (2);
  }
  if (((s as any).pcs_mood ?? 0) < 60  &&  ((s as any).braworntype ?? 0) === 'cats') {
    (s as any).result = ((s as any).result ?? 0) + (2);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCalcClothingBonus(s: GameState, scene: SceneBuilder): void {
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    if (qspFunc(s, 'pcs_has_attr', ' || ', 'body_bmi_normal', 'body_bmi_overweight')) {
      (s as any).result = 15;
    } else {
      (s as any).result = 0;
    }
    return;
  }
  if (qspFunc(s, 'pcs_has_attr', ' || ', 'body_bmi_starving', 'body_bmi_underweight')) {
    (s as any).tempRevealing = ((400 - ((s as any).PXCloThinness ?? 0)) + (500 - ((s as any).PXCloTopCut ?? 0)) + (400 - ((s as any).PXCloBottomShortness ?? 0))) / 2;
  } else {
    if (qspFunc(s, 'pcs_has_attr', ' || ', 'body_bmi_normal', 'body_bmi_overweight')) {
      (s as any).tempRevealing = (((s as any).PXCloThinness ?? 0) + ((s as any).PXCloTopCut ?? 0) + ((s as any).PXCloBottomShortness ?? 0))/2;
    } else {
      (s as any).tempRevealing = ((400 - ((s as any).PXCloThinness ?? 0)) + (500 - ((s as any).PXCloTopCut ?? 0)) + (400 - ((s as any).PXCloBottomShortness ?? 0))) * 3 / 4;
    }
  }
  if (((s as any).cheatVars ?? 0)?.['clothes_dirt']) {
    (s as any).tempDirt = 0;
  } else {
    (s as any).CleanBonus = 9 + ((s as any).PCloQuality ?? 0) * 3;
    (s as any).tempDirt = Math.min(Math.max(-((s as any).CleanBonus ?? 0), ((s as any).CleanBonus ?? 0) * (1440 - ((s as any).PCloDirt ?? 0)) / 960), ((s as any).CleanBonus ?? 0));
  }
  (s as any).result = ((s as any).PCloQuality ?? 0) * ((s as any).tempRevealing ?? 0) / 76 + ((s as any).tempDirt ?? 0);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCalcAccessoriesBonus(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pantyworntype ?? 0) !== 'none') {
    if (((s as any).PPanQuality ?? 0) >= 4) {
      (s as any).pantyBonus = ((s as any).PPanQuality ?? 0) - 2;
    } else {
      (s as any).pantyBonus = ((s as any).PPanQuality ?? 0) - 1;
    }
  }
  if (((s as any).braworntype ?? 0) !== 'none') {
    if (((s as any).PBraQuality ?? 0) >= 4) {
      (s as any).braBonus = ((s as any).PBraQuality ?? 0) - 2;
    } else {
      (s as any).braBonus = ((s as any).PBraQuality ?? 0) - 1;
    }
  }
  if (((s as any).location_type ?? 0) === 'event_outdoors'  ||  ((s as any).location_type ?? 0) === 'public_outdoors'  ||  ((s as any).location_type ?? 0) === 'secluded') {
    if (((s as any).temper ?? 0) <= 0) {
      if (((s as any).coatworntype ?? 0) === 'none') {
        (s as any).coatQualityBonus = 0;
      } else {
        (s as any).coatQualityBonus = ((s as any).PCoatQuality ?? 0) - 2;
      }
    }
  } else {
    if (((String(';bathroom;event_indoors;kitchen;private;private_shared;public_indoors;restroom;').indexOf(String(((s as any).location_type ?? 0)))) + 1) > 0) {
      (s as any).coatQualityBonus = 0;
    }
  }
  (s as any).result = ((s as any).coatQualityBonus ?? 0) + ((s as any).PShoQuality ?? 0) + ((s as any).pantyBonus ?? 0) + ((s as any).braBonus ?? 0);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterStat(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterResetImmutables(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: gs 'outfit', 'increase_outfit_dirt', ARGS[1]
  // TODO-QSP: gs 'outfit', 'increase_outfit_wear', ARGS[1]
  // TODO-QSP: gs 'outfit', 'heel_stat_skill_pain', ARGS[1]
  return;
  // TODO-QSP: end
  scene.build();
}

function enterResetImmutables(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'clothing', 'reset_immutables');
  qspCall(s, 'bras', 'reset_immutables');
  qspCall(s, 'panties', 'reset_immutables');
  qspCall(s, 'underwear_bodysuits', 'reset_immutables');
  qspCall(s, 'shoes', 'reset_immutables');
  qspCall(s, 'purses', 'reset_immutables');
  qspCall(s, 'coats', 'reset_immutables');
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIncreaseOutfitDirt(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cheatVars ?? 0)?.['clothes_dirt']) {
    // TODO-QSP: exit
  }
  ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['time_diff'] = ((s as any).locArgs?.[1] ?? 0);
  if (((s as any).clothingworntype ?? 0) === 'nude'  ||  ((s as any).clothingworntype ?? 0) === '') {
    (s as any).PCloDirt = 0;
  } else {
    if (qspFunc(s, 'clothing', 'is_immutable')) {
      (s as any).PCloDirt = 1440;
    } else {
      if (((s as any).clothingworntype ?? 0) === 'misc_outfits'  &&  ((s as any).clothingwornnumber ?? 0) === 1) {
        (s as any).PCloDirt = 2400;
      } else {
        if (((s as any).PCloBorrowed ?? 0) === 0  &&  qspFunc(s, 'clothing', 'is_owned') === 0) {
          (s as any).PCloDirt = 0;
        } else {
          if (((s as any).temp_outfitVars ?? 0)?.['time_diff'] > 0) {
            ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['sweat_penal'] = 100;
            if (((s as any).PCloStyle2 ?? 0) !== 6  &&  (!((s as any).PSwim ?? 0))) {
              ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['sweat_penal'] = ((s as any).temp_outfitVars['sweat_penal'] ?? 0) + (((s as any).pcs_sweat ?? 0));
            }
            ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['cum_penal'] = 2 * ((s as any).sparrvol ?? 0)[6] + 2 * ((s as any).sparrvol ?? 0)[7];
            if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).bodysuitworntype ?? 0) === 'none') {
              ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['sweat_penal'] = ((s as any).temp_outfitVars['sweat_penal'] ?? 0) + (Math.max(0, ((s as any).pcs_horny ?? 0) - 100) / 2);
              ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['cum_penal'] = ((s as any).temp_outfitVars['cum_penal'] ?? 0) + (((s as any).sparrvol ?? 0)[1] + ((s as any).sparrvol ?? 0)[4]);
            }
            if (((s as any).braworntype ?? 0) === 'none'  &&  ((s as any).bodysuitworntype ?? 0) === 'none') {
              ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['cum_penal'] = ((s as any).temp_outfitVars['cum_penal'] ?? 0) + (qspUntranslated(s, "sparrvol[15]", { location: "outfit" }));
            }
            if (((s as any).bodysuitworntype ?? 0) === 'none'  &&  ((String(((s as any).clothingworntype ?? 0)).indexOf(String('bikinis'))) + 1) <= 0) {
              ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['cum_penal'] = ((s as any).temp_outfitVars['cum_penal'] ?? 0) + (((s as any).sparrvol ?? 0)[8] + ((s as any).sparrvol ?? 0)[14]);
            }
            ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['cum_penal'] = ((s as any).temp_outfitVars['cum_penal'] ?? 0) + (Math.max(0, 6 - Math.max(((s as any).PCloSkirt ?? 0), ((s as any).PCloPants ?? 0))) * ((s as any).sparrvol ?? 0)[9] / 6);
            // TODO-QSP: temp_outfitVars['cum_penal'] /= 2
            ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['dirty'] = (((s as any).temp_outfitVars ?? {})?.['time_diff'] ?? 0) * Math.min((((s as any).temp_outfitVars ?? {})?.['sweat_penal'] ?? 0) + (((s as any).temp_outfitVars ?? {})?.['cum_penal'] ?? 0), 200) / 100;
            ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['dirty2'] = (Math.floor(Math.random() * ((((s as any).temp_outfitVars ?? {})?.['dirty'] ?? 0) - 0 + 1)) + (0)) + (Math.floor(Math.random() * ((((s as any).temp_outfitVars ?? {})?.['dirty'] ?? 0) - 0 + 1)) + (0)) + (Math.floor(Math.random() * ((((s as any).temp_outfitVars ?? {})?.['dirty'] ?? 0) - 0 + 1)) + (0)) + (Math.floor(Math.random() * ((((s as any).temp_outfitVars ?? {})?.['dirty'] ?? 0) - 0 + 1)) + (0));
            if ((!((s as any).PCloBorrowed ?? 0))) {
              // TODO-QSP: gs 'clothing', 'increase_cur_dirt', temp_outfitVars['dirty2'] / 2
            } else {
              (s as any).PCloDirt = ((s as any).PCloDirt ?? 0) + ((((s as any).temp_outfitVars ?? {})?.['dirty2'] ?? 0) / 2);
            }
          }
          if ((!((s as any).PCloBorrowed ?? 0))) {
            (s as any).PCloDirt = 0;
          }
        }
      }
    }
  }
  if ((!((s as any).inSleep ?? 0))) {
    if (((s as any).underwear ?? 0)?.['type'] === 2) {
      if (((s as any).bodysuitworntype ?? 0) === 'none'  ||  ((s as any).bodysuitworntype ?? 0) === '') {
        (s as any).PBraDirt = 0;
        (s as any).PPanDirt = 0;
      } else {
        if (((s as any).PPanBorrowed ?? 0) === 0  &&  qspFunc(s, 'underwear_bodysuits', 'is_owned', ((s as any).bodysuitworntype ?? 0), ((s as any).bodysuitwornnumber ?? 0)) === 0) {
          (s as any).PBraDirt = 0;
          (s as any).PPanDirt = 0;
        } else {
          if (((s as any).temp_outfitVars ?? 0)?.['time_diff'] > 0) {
            ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['sweat_penal'] = 100;
            if (((s as any).PBraFun ?? 0) === 1  &&  ((s as any).PPanFun ?? 0) === 1) {
              ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['sweat_penal'] = ((s as any).temp_outfitVars['sweat_penal'] ?? 0) + (((s as any).pcs_sweat ?? 0));
            }
            ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['sweat_penal'] = ((s as any).temp_outfitVars['sweat_penal'] ?? 0) + (Math.max(0, ((s as any).pcs_horny ?? 0) - 100) / 2);
            ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['cum_penal'] = ((s as any).sparrvol ?? 0)[2] + ((s as any).sparrvol ?? 0)[5] + (((s as any).sparrvol ?? 0)[1] + ((s as any).sparrvol ?? 0)[4] + ((s as any).sparrvol ?? 0)[8] + ((s as any).sparrvol ?? 0)[14] + ((s as any).sparrvol ?? 0)[15]) / 2;
            ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['dirty'] = (((s as any).temp_outfitVars ?? {})?.['time_diff'] ?? 0) * Math.min((((s as any).temp_outfitVars ?? {})?.['sweat_penal'] ?? 0) + (((s as any).temp_outfitVars ?? {})?.['cum_penal'] ?? 0), 200) / 100;
            ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['dirty2'] = (Math.floor(Math.random() * ((((s as any).temp_outfitVars ?? {})?.['dirty'] ?? 0) - 0 + 1)) + (0)) + (Math.floor(Math.random() * ((((s as any).temp_outfitVars ?? {})?.['dirty'] ?? 0) - 0 + 1)) + (0)) + (Math.floor(Math.random() * ((((s as any).temp_outfitVars ?? {})?.['dirty'] ?? 0) - 0 + 1)) + (0)) + (Math.floor(Math.random() * ((((s as any).temp_outfitVars ?? {})?.['dirty'] ?? 0) - 0 + 1)) + (0));
            if ((!((s as any).PPanBorrowed ?? 0))) {
              // TODO-QSP: gs 'underwear_bodysuits', 'increase_cur_dirt', temp_outfitVars['dirty2'] / 2
            } else {
              (s as any).PPanDirt = ((s as any).PPanDirt ?? 0) + ((((s as any).temp_outfitVars ?? {})?.['dirty2'] ?? 0) / 2);
            }
          }
          if ((!((s as any).PPanBorrowed ?? 0))) {
            (s as any).PPanDirt = 0;
          }
          (s as any).PBraDirt = ((s as any).PPanDirt ?? 0);
        }
      }
    } else {
      if (((s as any).braworntype ?? 0) === 'none'  ||  ((s as any).braworntype ?? 0) === '') {
        (s as any).PBraDirt = 0;
      } else {
        if (qspFunc(s, 'bras', 'is_immutable')) {
          (s as any).PBraDirt = 1440;
        } else {
          if (((s as any).PBraBorrowed ?? 0) === 0  &&  qspFunc(s, 'bras', 'is_owned', ((s as any).braworntype ?? 0), ((s as any).brawornnumber ?? 0)) === 0) {
            (s as any).PBraDirt = 0;
          } else {
            if (((s as any).temp_outfitVars ?? 0)?.['time_diff'] > 0) {
              ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['sweat_penal'] = 100;
              if (((s as any).PBraFun ?? 0) === 1) {
                ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['sweat_penal'] = ((s as any).temp_outfitVars['sweat_penal'] ?? 0) + (((s as any).pcs_sweat ?? 0));
              }
              ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['cum_penal'] = qspUntranslated(s, "sparrvol[14]", { location: "outfit" });
              ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['dirty'] = (((s as any).temp_outfitVars ?? {})?.['time_diff'] ?? 0) * Math.min((((s as any).temp_outfitVars ?? {})?.['sweat_penal'] ?? 0) + (((s as any).temp_outfitVars ?? {})?.['cum_penal'] ?? 0), 200) / 100;
              ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['dirty2'] = (Math.floor(Math.random() * ((((s as any).temp_outfitVars ?? {})?.['dirty'] ?? 0) - 0 + 1)) + (0)) + (Math.floor(Math.random() * ((((s as any).temp_outfitVars ?? {})?.['dirty'] ?? 0) - 0 + 1)) + (0)) + (Math.floor(Math.random() * ((((s as any).temp_outfitVars ?? {})?.['dirty'] ?? 0) - 0 + 1)) + (0)) + (Math.floor(Math.random() * ((((s as any).temp_outfitVars ?? {})?.['dirty'] ?? 0) - 0 + 1)) + (0));
              if ((!((s as any).PBraBorrowed ?? 0))) {
                // TODO-QSP: gs 'bras', 'increase_cur_dirt', temp_outfitVars['dirty2'] / 2
              } else {
                (s as any).PBraDirt = ((s as any).PBraDirt ?? 0) + ((((s as any).temp_outfitVars ?? {})?.['dirty2'] ?? 0) / 2);
              }
            }
            if ((!((s as any).PBraBorrowed ?? 0))) {
              (s as any).PBraDirt = 0;
            }
          }
        }
      }
      if (((s as any).pantyworntype ?? 0) === 'none'  ||  ((s as any).pantyworntype ?? 0) === '') {
        (s as any).PPanDirt = 0;
      } else {
        if (qspFunc(s, 'panties', 'is_immutable')) {
          (s as any).PPanDirt = 1440;
        } else {
          if (((s as any).PPanBorrowed ?? 0) === 0  &&  qspFunc(s, 'panties', 'is_owned', ((s as any).pantyworntype ?? 0), ((s as any).pantywornnumber ?? 0)) === 0) {
            (s as any).PPanDirt = 0;
          } else {
            if (((s as any).temp_outfitVars ?? 0)?.['time_diff'] > 0) {
              ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['sweat_penal'] = 100;
              if (((s as any).PPanFun ?? 0) === 1) {
                ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['sweat_penal'] = ((s as any).temp_outfitVars['sweat_penal'] ?? 0) + (((s as any).pcs_sweat ?? 0));
              }
              ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['sweat_penal'] = ((s as any).temp_outfitVars['sweat_penal'] ?? 0) + (Math.max(0, ((s as any).pcs_horny ?? 0) - 100) / 2);
              ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['cum_penal'] = ((s as any).sparrvol ?? 0)[2] + ((s as any).sparrvol ?? 0)[5] + (((s as any).sparrvol ?? 0)[1] + ((s as any).sparrvol ?? 0)[4]) / 2;
              ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['dirty'] = (((s as any).temp_outfitVars ?? {})?.['time_diff'] ?? 0) * Math.min((((s as any).temp_outfitVars ?? {})?.['sweat_penal'] ?? 0) + (((s as any).temp_outfitVars ?? {})?.['cum_penal'] ?? 0), 200) / 100;
              ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['dirty2'] = (Math.floor(Math.random() * ((((s as any).temp_outfitVars ?? {})?.['dirty'] ?? 0) - 0 + 1)) + (0)) + (Math.floor(Math.random() * ((((s as any).temp_outfitVars ?? {})?.['dirty'] ?? 0) - 0 + 1)) + (0)) + (Math.floor(Math.random() * ((((s as any).temp_outfitVars ?? {})?.['dirty'] ?? 0) - 0 + 1)) + (0)) + (Math.floor(Math.random() * ((((s as any).temp_outfitVars ?? {})?.['dirty'] ?? 0) - 0 + 1)) + (0));
              if ((!((s as any).PPanBorrowed ?? 0))) {
                // TODO-QSP: gs 'panties', 'increase_cur_dirt', temp_outfitVars['dirty2'] / 2
              } else {
                (s as any).PPanDirt = ((s as any).PPanDirt ?? 0) + ((((s as any).temp_outfitVars ?? {})?.['dirty2'] ?? 0) / 2);
              }
            }
            if ((!((s as any).PPanBorrowed ?? 0))) {
              (s as any).PPanDirt = 0;
            }
          }
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterIncreaseOutfitWear(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cheatVars ?? 0)?.['clothes_strength']) {
    // TODO-QSP: exit
  }
  if (((s as any).inSleep ?? 0)) {
    // TODO-QSP: exit
  }
  ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['time_diff'] = ((s as any).locArgs?.[1] ?? 0);
  if (((s as any).shoeworntype ?? 0) === 'none'  ||  ((s as any).shoeworntype ?? 0) === '') {
    (s as any).PShoStrength = 0;
  } else {
    if (qspFunc(s, 'shoes', 'is_immutable')) {
      (s as any).PShoStrength = 10000;
    } else {
      if (((s as any).PShoBorrowed ?? 0) === 0  &&  qspFunc(s, 'shoes', 'is_owned') === 0) {
        (s as any).PShoStrength = 100000;
      } else {
        if (((s as any).temp_outfitVars ?? 0)?.['time_diff'] > 0) {
          ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['strength_cost'] = ((s as any).temp_outfitVars ?? 0)?.['time_diff'];
          if (((String(((s as any).location_type ?? 0)).indexOf(String('outdoors'))) + 1)  &&  (!((s as any).SunWearther ?? 0))) {
            // TODO-QSP: temp_outfitVars['strength_cost'] *= 2
          }
          if ((!((s as any).PShoBorrowed ?? 0))) {
            // TODO-QSP: gs 'shoes', 'decrease_cur_strength', temp_outfitVars['strength_cost']
          } else {
            (s as any).PShoStrength = ((s as any).PShoStrength ?? 0) - (((s as any).temp_outfitVars ?? 0)?.['strength_cost']);
          }
        }
        if ((!((s as any).PShoBorrowed ?? 0))) {
          (s as any).PShoStrength = 0;
        }
      }
    }
  }
  ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['outer_layer_done'] = 0;
  if (((s as any).coatworntype ?? 0) === 'none'  ||  ((s as any).coatworntype ?? 0) === '') {
    (s as any).PCoatStrength = 0;
  } else {
    if (qspFunc(s, 'coats', 'is_immutable')) {
      (s as any).PCoatStrength = 10000;
    } else {
      if (((s as any).PCoatBorrowed ?? 0) === 0  &&  qspFunc(s, 'coats', 'is_owned') === 0) {
        (s as any).PCoatStrength = 100000;
      } else {
        if (((s as any).temp_outfitVars ?? 0)?.['time_diff'] > 0) {
          ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['strength_cost'] = ((s as any).temp_outfitVars ?? 0)?.['time_diff'];
          if (((s as any).temp_outfitVars ?? 0)?.['outer_layer_done'] === 0) {
            ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['outer_layer_done'] = 1;
            if (((String(((s as any).location_type ?? 0)).indexOf(String('outdoors'))) + 1)  &&  (!((s as any).SunWearther ?? 0))) {
              ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['strength_cost'] = 3 * (((s as any).temp_outfitVars ?? {})?.['strength_cost'] ?? 0) / 2;
            }
          }
          if ((!((s as any).PCoatBorrowed ?? 0))) {
            // TODO-QSP: gs 'coats', 'decrease_cur_strength', temp_outfitVars['strength_cost']
          } else {
            (s as any).PCoatStrength = ((s as any).PCoatStrength ?? 0) - (((s as any).temp_outfitVars ?? 0)?.['strength_cost']);
          }
        }
        if ((!((s as any).PCoatBorrowed ?? 0))) {
          (s as any).PCoatStrength = 0;
        }
      }
    }
  }
  if (((s as any).clothingworntype ?? 0) === 'nude'  ||  ((s as any).clothingworntype ?? 0) === '') {
    (s as any).PCloStrength = 0;
  } else {
    if (((s as any).clothingworntype ?? 0) === 'misc_outfits'  &&  ((s as any).clothingwornnumber ?? 0) === 1) {
      (s as any).PCloStrength = 5000;
    } else {
      if (qspFunc(s, 'clothing', 'is_immutable')) {
        (s as any).PCloStrength = 10000;
      } else {
        if (((s as any).PCloBorrowed ?? 0) === 0  &&  qspFunc(s, 'clothing', 'is_owned') === 0) {
          (s as any).PCloStrength = 100000;
        } else {
          if (((s as any).temp_outfitVars ?? 0)?.['time_diff'] > 0) {
            ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['strength_cost'] = ((s as any).temp_outfitVars ?? 0)?.['time_diff'];
            if (((s as any).temp_outfitVars ?? 0)?.['outer_layer_done'] === 0) {
              ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['outer_layer_done'] = 1;
              // TODO-QSP: temp_outfitVars['strength_cost'] *= 2
              if (((String(((s as any).location_type ?? 0)).indexOf(String('outdoors'))) + 1)  &&  (!((s as any).SunWearther ?? 0))) {
                // TODO-QSP: temp_outfitVars['strength_cost'] *= 3
              }
            }
            if ((!((s as any).PCloBorrowed ?? 0))) {
              // TODO-QSP: gs 'clothing', 'decrease_cur_strength', temp_outfitVars['strength_cost']
            } else {
              (s as any).PCloStrength = ((s as any).PCloStrength ?? 0) - (((s as any).temp_outfitVars ?? 0)?.['strength_cost']);
            }
          }
          if ((!((s as any).PCloBorrowed ?? 0))) {
            (s as any).PCloStrength = 0;
          }
        }
      }
    }
  }
  if (((s as any).underwear ?? 0)?.['type'] === 2) {
    if (((s as any).bodysuitworntype ?? 0) === 'none'  ||  ((s as any).bodysuitworntype ?? 0) === '') {
      (s as any).PBraStrength = 0;
      (s as any).PPanStrength = 0;
    } else {
      if (qspFunc(s, 'underwear_bodysuits', 'is_immutable')) {
        (s as any).PBraStrength = 10000;
        (s as any).PPanStrength = 10000;
      } else {
        if (((s as any).PBraBorrowed ?? 0) === 0  &&  ((s as any).PPanBorrowed ?? 0) === 0  &&  qspFunc(s, 'underwear_bodysuits', 'is_owned') === 0) {
          (s as any).PBraStrength = 100000;
          (s as any).PPanStrength = 100000;
        } else {
          if (((s as any).temp_outfitVars ?? 0)?.['time_diff'] > 0) {
            ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['strength_cost'] = ((s as any).temp_outfitVars ?? 0)?.['time_diff'];
            if (((s as any).temp_outfitVars ?? 0)?.['outer_layer_done'] === 0) {
              // TODO-QSP: temp_outfitVars['strength_cost'] *= 3
              if (((String(((s as any).location_type ?? 0)).indexOf(String('outdoors'))) + 1)  &&  (!((s as any).SunWearther ?? 0))) {
                // TODO-QSP: temp_outfitVars['strength_cost'] *= 4
              }
            }
            if ((!((s as any).PBraBorrowed ?? 0))) {
              // TODO-QSP: gs 'underwear_bodysuits', 'decrease_cur_strength', temp_outfitVars['strength_cost']
            } else {
              (s as any).PBraStrength = ((s as any).PBraStrength ?? 0) - (((s as any).temp_outfitVars ?? 0)?.['strength_cost']);
              (s as any).PPanStrength = ((s as any).PBraStrength ?? 0);
            }
          }
          if ((!((s as any).PBraBorrowed ?? 0))) {
            (s as any).PBraStrength = 0;
            (s as any).PPanStrength = ((s as any).PBraStrength ?? 0);
          }
        }
      }
    }
  } else {
    if (((s as any).braworntype ?? 0) === 'none'  ||  ((s as any).braworntype ?? 0) === '') {
      (s as any).PBraStrength = 0;
    } else {
      if (qspFunc(s, 'bras', 'is_immutable')) {
        (s as any).PBraStrength = 10000;
      } else {
        if (((s as any).PBraBorrowed ?? 0) === 0  &&  qspFunc(s, 'bras', 'is_owned') === 0) {
          (s as any).PBraStrength = 100000;
        } else {
          if (((s as any).temp_outfitVars ?? 0)?.['time_diff'] > 0) {
            ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['strength_cost'] = ((s as any).temp_outfitVars ?? 0)?.['time_diff'];
            if (((s as any).temp_outfitVars ?? 0)?.['outer_layer_done'] === 0) {
              // TODO-QSP: temp_outfitVars['strength_cost'] *= 3
              if (((String(((s as any).location_type ?? 0)).indexOf(String('outdoors'))) + 1)  &&  (!((s as any).SunWearther ?? 0))) {
                // TODO-QSP: temp_outfitVars['strength_cost'] *= 4
              }
            }
            if ((!((s as any).PBraBorrowed ?? 0))) {
              // TODO-QSP: gs 'bras', 'decrease_cur_strength', temp_outfitVars['strength_cost']
            } else {
              (s as any).PBraStrength = ((s as any).PBraStrength ?? 0) - (((s as any).temp_outfitVars ?? 0)?.['strength_cost']);
            }
          }
          if ((!((s as any).PBraBorrowed ?? 0))) {
            // TODO-QSP: gs 'bras', 'decrease_cur_strength', temp_outfitVars['strength_cost']
          }
        }
      }
    }
    if (((s as any).pantyworntype ?? 0) === 'none'  ||  ((s as any).pantyworntype ?? 0) === '') {
      (s as any).PPanStrength = 0;
    } else {
      if (qspFunc(s, 'panties', 'is_immutable')) {
        (s as any).PPanStrength = 10000;
      } else {
        if (((s as any).PPanBorrowed ?? 0) === 0  &&  qspFunc(s, 'panties', 'is_owned') === 0) {
          (s as any).PPanStrength = 100000;
        } else {
          if (((s as any).temp_outfitVars ?? 0)?.['time_diff'] > 0) {
            ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['strength_cost'] = ((s as any).temp_outfitVars ?? 0)?.['time_diff'];
            if (((s as any).temp_outfitVars ?? 0)?.['outer_layer_done'] === 0) {
              // TODO-QSP: temp_outfitVars['strength_cost'] *= 3
              if (((String(((s as any).location_type ?? 0)).indexOf(String('outdoors'))) + 1)  &&  (!((s as any).SunWearther ?? 0))) {
                // TODO-QSP: temp_outfitVars['strength_cost'] *= 4
              }
            }
            if ((!((s as any).PPanBorrowed ?? 0))) {
              // TODO-QSP: gs 'panties', 'decrease_cur_strength', temp_outfitVars['strength_cost']
            } else {
              (s as any).PPanStrength = ((s as any).PPanStrength ?? 0) - (((s as any).temp_outfitVars ?? 0)?.['strength_cost']);
            }
          }
          if ((!((s as any).PPanBorrowed ?? 0))) {
            (s as any).PPanStrength = 0;
          }
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterHeelStatSkillPain(s: GameState, scene: SceneBuilder): void {
  if (((s as any).totminut ?? 0) < ((s as any).heelsminut ?? 0)  ||  (!((s as any).heelsminut ?? 0))) {
    (s as any).heelsminut = ((s as any).totminut ?? 0);
  }
  if (((s as any).totminut ?? 0) < ((s as any).heelsminut ?? 0) + 30) {
    // TODO-QSP: exit
  }
  ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['heels_time'] = ((s as any).totminut ?? 0) - ((s as any).heelsminut ?? 0);
  (s as any).heelsminut = ((s as any).totminut ?? 0);
  if (((s as any).inSleep ?? 0) !== 0) {
    // TODO-QSP: exit
  }
  if (((s as any).PShoHeels ?? 0) <= 1) {
    qspCall(s, 'exp_deg', 'heels', (Math.floor(Math.random() * ((((s as any).temp_outfitVars ?? {})?.['heels_time'] ?? 0) / 15 - (((s as any).temp_outfitVars ?? {})?.['heels_time'] ?? 0) / 30 + 1)) + ((((s as any).temp_outfitVars ?? {})?.['heels_time'] ?? 0) / 30)));
  }
  (s as any).temp_dep_pain = 0;
  if (((s as any).trait_vars ?? 0)?.['heel_preference'] >= 3) {
    if (((s as any).PShoHeels ?? 0) <= 1) {
      if (((s as any).pain ?? 0)?.['feet'] < 80) {
        qspCall(s, 'pain', '', (Math.floor(Math.random() * (((s as any).heelstime ?? 0) / 2 - ((s as any).heelstime ?? 0) / 7 + 1)) + (((s as any).heelstime ?? 0) / 7)), 'feet', 'ache');
      }
      (s as any).temp_dep_pain = 1;
    } else {
      if (((s as any).PShoHeels ?? 0) === 2) {
        if (((s as any).pain ?? 0)?.['feet'] < 60) {
          qspCall(s, 'pain', '', (Math.floor(Math.random() * (((s as any).heelstime ?? 0) / 5 - ((s as any).heelstime ?? 0) / 15 + 1)) + (((s as any).heelstime ?? 0) / 15)), 'feet', 'ache');
        }
        (s as any).temp_dep_pain = 1;
      } else {
        if (((s as any).PShoHeels ?? 0) === 3) {
          if (((s as any).pain ?? 0)?.['feet'] < 40) {
            qspCall(s, 'pain', '', (Math.floor(Math.random() * (((s as any).heelstime ?? 0) / 10 - ((s as any).heelstime ?? 0) / 30 + 1)) + (((s as any).heelstime ?? 0) / 30)), 'feet', 'ache');
          }
          (s as any).temp_dep_pain = 1;
        }
      }
    }
  } else {
    if (((s as any).trait_vars ?? 0)?.['heel_preference'] >= 2) {
      if (((s as any).PShoHeels ?? 0) <= 1) {
        if (((s as any).pain ?? 0)?.['feet'] < 60) {
          qspCall(s, 'pain', '', (Math.floor(Math.random() * (((s as any).heelstime ?? 0) / 5 - ((s as any).heelstime ?? 0) / 15 + 1)) + (((s as any).heelstime ?? 0) / 15)), 'feet', 'ache');
        }
        (s as any).temp_dep_pain = 1;
      } else {
        if (((s as any).PShoHeels ?? 0) === 2) {
          if (((s as any).pain ?? 0)?.['feet'] < 40) {
            qspCall(s, 'pain', '', (Math.floor(Math.random() * (((s as any).heelstime ?? 0) / 10 - ((s as any).heelstime ?? 0) / 30 + 1)) + (((s as any).heelstime ?? 0) / 30)), 'feet', 'ache');
          }
          (s as any).temp_dep_pain = 1;
        }
      }
    } else {
      if (((s as any).trait_vars ?? 0)?.['heel_preference'] === 1) {
        if (((s as any).PShoHeels ?? 0) <= 1) {
          if (((s as any).pain ?? 0)?.['feet'] < 40) {
            qspCall(s, 'pain', '', (Math.floor(Math.random() * (((s as any).heelstime ?? 0) / 10 - ((s as any).heelstime ?? 0) / 30 + 1)) + (((s as any).heelstime ?? 0) / 30)), 'feet', 'ache');
          }
          (s as any).temp_dep_pain = 1;
        }
      }
    }
  }
  if (((s as any).PShoHeels ?? 0) <= 1  ||  ((s as any).temp_dep_pain ?? 0) === 1) {
    return;
  }
  if (((s as any).trait_vars ?? 0)?.['heel_preference'] < 0  &&  ((s as any).trait_vars ?? 0)?.['heel_preference_daily_limit'] > 0) {
    (s as any).temp_time = Math.min(((s as any).temp_outfitVars ?? 0)?.['heels_time'], ((s as any).trait_vars ?? 0)?.['heel_preference_daily_limit']);
    if (((s as any).pcs_heels ?? 0) < ((s as any).PShoPain ?? 0)?.['severe']) {
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['heel_preference_exp'] = ((s as any).trait_vars['heel_preference_exp'] ?? 0) + (((s as any).temp_time ?? 0));
    } else {
      if (((s as any).pcs_heels ?? 0) < ((s as any).PShoPain ?? 0)?.['medium']) {
        ((s as any).trait_vars = (s as any).trait_vars ?? {})['heel_preference_exp'] = ((s as any).trait_vars['heel_preference_exp'] ?? 0) + (3 * ((s as any).temp_time ?? 0) / 2);
      } else {
        if (((s as any).pcs_heels ?? 0) < ((s as any).PShoPain ?? 0)?.['mild']) {
          ((s as any).trait_vars = (s as any).trait_vars ?? {})['heel_preference_exp'] = ((s as any).trait_vars['heel_preference_exp'] ?? 0) + (((s as any).temp_time ?? 0) / 2);
        } else {
          if (((s as any).PShoHeels ?? 0) >= 6) {
            ((s as any).trait_vars = (s as any).trait_vars ?? {})['heel_preference_exp'] = ((s as any).trait_vars['heel_preference_exp'] ?? 0) + (((s as any).temp_time ?? 0) / 5);
          }
        }
      }
    }
    ((s as any).trait_vars = (s as any).trait_vars ?? {})['heel_preference_daily_limit'] = Math.max(0, (((s as any).trait_vars ?? {})?.['heel_preference_daily_limit'] ?? 0) - ((s as any).temp_time ?? 0));
  }
  if (((s as any).pcs_heels ?? 0) < ((s as any).PShoPain ?? 0)?.['severe']) {
    ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['heels_time'] = Math.min(Math.max(5, (Math.floor(Math.random() * ((((s as any).temp_outfitVars ?? {})?.['heels_time'] ?? 0) / 10 - (((s as any).temp_outfitVars ?? {})?.['heels_time'] ?? 0) / 20 + 1)) + ((((s as any).temp_outfitVars ?? {})?.['heels_time'] ?? 0) / 20))), 10);
    if (((s as any).pain ?? 0)?.['feet'] < 80) {
      qspCall(s, 'pain', '', (Math.floor(Math.random() * ((((s as any).temp_outfitVars ?? {})?.['heels_time'] ?? 0) / 2 - (((s as any).temp_outfitVars ?? {})?.['heels_time'] ?? 0) / 5 + 1)) + ((((s as any).temp_outfitVars ?? {})?.['heels_time'] ?? 0) / 5)), 'feet', 'ache');
    }
  } else {
    if (((s as any).pcs_heels ?? 0) < ((s as any).PShoPain ?? 0)?.['medium']) {
      ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['heels_time'] = Math.min(Math.max(7, (Math.floor(Math.random() * ((((s as any).temp_outfitVars ?? {})?.['heels_time'] ?? 0) / 8 - (((s as any).temp_outfitVars ?? {})?.['heels_time'] ?? 0) / 15 + 1)) + ((((s as any).temp_outfitVars ?? {})?.['heels_time'] ?? 0) / 15))), 12);
      if (((s as any).pain ?? 0)?.['feet'] < 60) {
        qspCall(s, 'pain', '', (Math.floor(Math.random() * ((((s as any).temp_outfitVars ?? {})?.['heels_time'] ?? 0) / 5 - (((s as any).temp_outfitVars ?? {})?.['heels_time'] ?? 0) / 10 + 1)) + ((((s as any).temp_outfitVars ?? {})?.['heels_time'] ?? 0) / 10)), 'feet', 'ache');
      }
    } else {
      if (((s as any).pcs_heels ?? 0) < ((s as any).PShoPain ?? 0)?.['mild']) {
        ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['heels_time'] = Math.min(Math.max(3, (Math.floor(Math.random() * ((((s as any).temp_outfitVars ?? {})?.['heels_time'] ?? 0) / 15 - (((s as any).temp_outfitVars ?? {})?.['heels_time'] ?? 0) / 30 + 1)) + ((((s as any).temp_outfitVars ?? {})?.['heels_time'] ?? 0) / 30))), 6);
        if (((s as any).pain ?? 0)?.['feet'] < 40) {
          qspCall(s, 'pain', '', (Math.floor(Math.random() * ((((s as any).temp_outfitVars ?? {})?.['heels_time'] ?? 0) / 10 - (((s as any).temp_outfitVars ?? {})?.['heels_time'] ?? 0) / 20 + 1)) + ((((s as any).temp_outfitVars ?? {})?.['heels_time'] ?? 0) / 20)), 'feet', 'ache');
        }
      } else {
        if (((s as any).pcs_heels ?? 0) < ((s as any).PShoPain ?? 0)?.['mild'] + 10) {
          ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['heels_time'] = (Math.floor(Math.random() * (0 - (-3) + 1)) + ((-3))) + Math.min(Math.max(6, (Math.floor(Math.random() * ((((s as any).temp_outfitVars ?? {})?.['heels_time'] ?? 0) / 5 - (((s as any).temp_outfitVars ?? {})?.['heels_time'] ?? 0) / 10 + 1)) + ((((s as any).temp_outfitVars ?? {})?.['heels_time'] ?? 0) / 10))), 9);
        } else {
          if (((s as any).pcs_heels ?? 0) < ((s as any).PShoPain ?? 0)?.['mild'] + 20) {
            ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['heels_time'] = (Math.floor(Math.random() * (0 - (-5) + 1)) + ((-5))) + Math.min(Math.max(4, (Math.floor(Math.random() * ((((s as any).temp_outfitVars ?? {})?.['heels_time'] ?? 0) / 15 - (((s as any).temp_outfitVars ?? {})?.['heels_time'] ?? 0) / 20 + 1)) + ((((s as any).temp_outfitVars ?? {})?.['heels_time'] ?? 0) / 20))), 6);
          } else {
            ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['heels_time'] = (Math.floor(Math.random() * (0 - (-7) + 1)) + ((-7))) + Math.min(Math.max(3, (Math.floor(Math.random() * ((((s as any).temp_outfitVars ?? {})?.['heels_time'] ?? 0) / 20 - (((s as any).temp_outfitVars ?? {})?.['heels_time'] ?? 0) / 30 + 1)) + ((((s as any).temp_outfitVars ?? {})?.['heels_time'] ?? 0) / 30))), 4);
          }
        }
      }
    }
  }
  if (((s as any).temp_outfitVars ?? 0)?.['heels_time'] < 0) {
    // TODO-QSP: gs 'exp_deg', 'heels', -temp_outfitVars['heels_time']
  } else {
    if (((s as any).temp_outfitVars ?? 0)?.['heels_time'] > 0) {
      // TODO-QSP: gs 'exp_gain', 'heels', temp_outfitVars['heels_time']
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterComputeStatDisplay(s: GameState, scene: SceneBuilder): void {
  ((s as any).stat_texts = (s as any).stat_texts ?? {})['clothes_tooltip'] = '';
  ((s as any).stat_texts = (s as any).stat_texts ?? {})['clothes'] = '';
  ((s as any).stat_texts = (s as any).stat_texts ?? {})['clothes_color'] = 'none';
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      if (((s as any).braworntype ?? 0) === 'none') {
        ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['clothes_style'] = 'underwear1';
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['clothes'] = 'You are only wearing your ' + ((((s as any).PPanThinness ?? 0) >= 5) ? ('see-through ') : ('')) + 'panties, and your breasts sway invitingly as you walk.';
      } else {
        if (((s as any).PBraThinness ?? 0) >= 5) {
          ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['clothes_style'] = 'underwear0';
          ((s as any).stat_texts = (s as any).stat_texts ?? {})['clothes'] = 'You are only wearing your see-through ' + ((((s as any).PPanThinness ?? 0) >= 5) ? ('underwear.') : ('bra and panties.')) + '';
        } else {
          ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['clothes_style'] = 'underwear0';
          ((s as any).stat_texts = (s as any).stat_texts ?? {})['clothes'] = 'You are only wearing your ' + ((((s as any).PPanThinness ?? 0) >= 5) ? ('see-through panties and a regular bra.') : ('underwear.')) + '';
        }
      }
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['clothes_color'] = 'v_neg';
    } else {
      if (((s as any).braworntype ?? 0) !== 'none') {
        ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['clothes_style'] = 'underwear2';
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['clothes'] = 'You are only wearing your bra, leaving your pussy and ass completely exposed.';
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['clothes_color'] = 'v_neg';
      } else {
        ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['clothes_style'] = 'nude';
        if (((s as any).pcs_inhib ?? 0) < 5) {
          ((s as any).stat_texts = (s as any).stat_texts ?? {})['clothes'] = 'You are completely naked, which makes you feel nervous and ashamed.';
          ((s as any).stat_texts = (s as any).stat_texts ?? {})['clothes_color'] = 'v_neg';
        } else {
          if (((s as any).pcs_inhib ?? 0) < 20) {
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['clothes'] = 'You are completely naked. You\'re not too comfortable with nudity, but it is a little exciting.';
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['clothes_color'] = 'neutral';
          } else {
            if (((s as any).pcs_inhib ?? 0) >= 90) {
              ((s as any).stat_texts = (s as any).stat_texts ?? {})['clothes'] = 'You are completely naked, which is far better than having to wear clothes.';
              ((s as any).stat_texts = (s as any).stat_texts ?? {})['clothes_color'] = 'accent';
            } else {
              ((s as any).stat_texts = (s as any).stat_texts ?? {})['clothes'] = 'You are completely naked. It\'s exciting, and you feel tingly inside.';
              ((s as any).stat_texts = (s as any).stat_texts ?? {})['clothes_color'] = 'bimbo';
            }
          }
        }
      }
    }
  } else {
    if (((s as any).clothingworntype ?? 0) === 'misc_outfits'  &&  ((s as any).clothingwornnumber ?? 0) === 1) {
      ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['clothes_style'] = 'clothes';
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['clothes'] = 'You are wearing an old hessian sack the hunters gave you.';
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['clothes_color'] = 'neutral';
    } else {
      if (((s as any).PCloSport ?? 0)) {
        ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['clothes_type'] = 'gym outfit';
        ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['clothes_style'] = 'exercise';
      } else {
        if (((s as any).PCloSwim ?? 0)) {
          ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['clothes_type'] = 'swimsuit';
          ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['clothes_style'] = 'swimsuit';
        } else {
          if (((s as any).PCloOffice ?? 0)) {
            ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['clothes_type'] = 'office dress';
            ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['clothes_style'] = 'office';
          } else {
            if (((s as any).PCloSchool ?? 0)) {
              ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['clothes_type'] = 'school uniform';
              ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['clothes_style'] = 'school';
            } else {
              if (((s as any).PCloStrip ?? 0)) {
                ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['clothes_type'] = 'stripper outfit';
                ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['clothes_style'] = 'stripper';
              } else {
                if (((s as any).PCloServer ?? 0)) {
                  ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['clothes_type'] = 'server outfit';
                  ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['clothes_style'] = 'server';
                } else {
                  if (((s as any).PCloMaid ?? 0)) {
                    ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['clothes_type'] = 'maid outfit';
                    ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['clothes_style'] = 'maid';
                  } else {
                    ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['clothes_type'] = 'outfit';
                    ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['clothes_style'] = 'clothes';
                  }
                }
              }
            }
          }
        }
      }
      ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['tt'] = '';
      ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['sd_list'] = '';
      ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['style_code'] = '';
      if (((s as any).PCloStyle ?? 0) === 4  ||  ((s as any).PCloProstitute ?? 0) === 1) {
        ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['tt'] = ((s as any).temp_outfitVars['tt'] ?? 0) + ('/Prostitute');
        ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['sd_list'] = ((s as any).temp_outfitVars['sd_list'] ?? 0) + (', prostitute');
        ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['style_code'] = 'p';
      } else {
        if (((s as any).PCloInhibit ?? 0) >= 40  ||  ((s as any).PCloThinness ?? 0) === 6) {
          ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['tt'] = ((s as any).temp_outfitVars['tt'] ?? 0) + ('/Exhibitionist');
          ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['sd_list'] = ((s as any).temp_outfitVars['sd_list'] ?? 0) + (', exhibitionist');
          ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['style_code'] = 'e';
        }
      }
      if (((s as any).PCloBimbo ?? 0) === 1) {
        ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['tt'] = ((s as any).temp_outfitVars['tt'] ?? 0) + ('/Bimbo');
        ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['sd_list'] = ((s as any).temp_outfitVars['sd_list'] ?? 0) + (', ' + qspFunc(s, 'wrap', 'bimbo', 'bimbo'));
        ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['style_code'] = ((s as any).temp_outfitVars['style_code'] ?? 0) + ('b');
      }
      if (((s as any).PCloGoth ?? 0) === 1) {
        ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['tt'] = ((s as any).temp_outfitVars['tt'] ?? 0) + ('/Goth');
        ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['sd_list'] = ((s as any).temp_outfitVars['sd_list'] ?? 0) + (', ' + qspFunc(s, 'wrap', 'goth', 'goth'));
      }
      if (((s as any).PCloPunk ?? 0) === 1) {
        ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['tt'] = ((s as any).temp_outfitVars['tt'] ?? 0) + ('/Punk');
        ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['sd_list'] = ((s as any).temp_outfitVars['sd_list'] ?? 0) + (', ' + qspFunc(s, 'wrap', 'punk', 'punk'));
      }
      if (((s as any).temp_outfitVars ?? 0)?.['tt'] !== '') {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['clothes_tooltip'] = (String(((s as any).temp_outfitVars ?? 0)?.['tt']).slice((2)-1)) + ' ' + ((s as any).temp_outfitVars ?? 0)?.['clothes_type'] + '.';
      } else {
        if (((s as any).PCloInhibit ?? 0) < 20) {
          ((s as any).stat_texts = (s as any).stat_texts ?? {})['clothes_tooltip'] = 'Normal ' + ((s as any).temp_outfitVars ?? 0)?.['clothes_type'] + '.';
        } else {
          if (((s as any).PCloInhibit ?? 0) < 25) {
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['clothes_tooltip'] = 'Slightly revealing ' + ((s as any).temp_outfitVars ?? 0)?.['clothes_type'] + '.';
          } else {
            if (((s as any).PCloInhibit ?? 0) < 30) {
              ((s as any).stat_texts = (s as any).stat_texts ?? {})['clothes_tooltip'] = 'Revealing ' + ((s as any).temp_outfitVars ?? 0)?.['clothes_type'] + '.';
            } else {
              ((s as any).stat_texts = (s as any).stat_texts ?? {})['clothes_tooltip'] = 'Very revealing ' + ((s as any).temp_outfitVars ?? 0)?.['clothes_type'] + '.';
            }
          }
        }
      }
      if (((s as any).temp_outfitVars ?? 0)?.['style_code'] !== '') {
        ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['clothes_style'] = ((s as any).temp_outfitVars['clothes_style'] ?? 0) + ('_' + ((s as any).temp_outfitVars ?? 0)?.['style_code']);
      } else {
        if (((s as any).PCloInhibit ?? 0) >= 20) {
          ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['clothes_style'] = ((s as any).temp_outfitVars['clothes_style'] ?? 0) + ('_s');
        }
      }
      if (((s as any).temp_outfitVars ?? 0)?.['sd_list'] !== '') {
        ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['sd_list'] = (String(((s as any).temp_outfitVars ?? 0)?.['sd_list']).slice((3)-1));
        ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['sd_list_pre'] = (((String(((s as any).temp_outfitVars ?? 0)?.['sd_list']).slice((1)-1, ((1)-1)+(1))) === 'e') ? ('an') : ('a'));
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['clothes'] = 'You are wearing ' + ((s as any).temp_outfitVars ?? 0)?.['sd_list_pre'] + ' ' + ((s as any).temp_outfitVars ?? 0)?.['sd_list'] + ' ' + ((s as any).temp_outfitVars ?? 0)?.['clothes_type'] + '.';
      }
    }
  }
  if (((s as any).pcs_horny ?? 0) >= 50) {
    ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['nipple_text'] = 'aroused nipples';
  } else {
    if (((s as any).temper ?? 0) < 14) {
      ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['nipple_text'] = 'chilly nipples';
    } else {
      if (((s as any).trait_vars ?? 0)?.['pokies'] === 1) {
        ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['nipple_text'] = 'stiff nipples';
      } else {
        ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['nipple_text'] = '';
      }
    }
  }
  if (((s as any).clothingworntype ?? 0) !== 'nude') {
    if (((s as any).PCloBra ?? 0) === 1) {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Your top is replacing your bra.';
      ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['bra_color'] = 'neutral';
      ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['bra_icon'] = '';
    } else {
      if (((s as any).PCloThinness ?? 0) === 6  &&  ((s as any).braworntype ?? 0) === 'none') {
        if (qspFunc(s, 'pcs_has_attr', 'body_tits_aa_cup')) {
          ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Your \' + iif(PCloDress = 1, \'dress\', \'top\') + \' is transparent and your entire chest, from the full shape of your ' + ((s as any).pcdesc_breasts ?? 0) + ' breasts to the color of your ' + ((s as any).temp_outfitVars ?? 0)?.['nipple_text'] + ', is completely visible.';
        } else {
          if (qspFunc(s, 'pcs_has_attr', 'body_tits_a_cup')) {
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Your \' + iif(PCloDress = 1, \'dress\', \'top\') + \' is transparent and your entire chest, from the ' + ((s as any).pcdesc_breasts ?? 0) + ' shape of your breasts to the color of your ' + ((s as any).temp_outfitVars ?? 0)?.['nipple_text'] + ', is completely visible.';
          } else {
            if (qspFunc(s, 'pcs_has_attr', 'body_tits_b_cup')) {
              ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Your \' + iif(PCloDress = 1, \'dress\', \'top\') + \' is transparent and your entire chest, from the full shape of your ' + ((s as any).pcdesc_breasts ?? 0) + ' breasts to the color of your ' + ((s as any).temp_outfitVars ?? 0)?.['nipple_text'] + ', is completely visible. Anyone who looks can watch their light bounce as you walk.';
            } else {
              if (qspFunc(s, 'pcs_has_attr', 'body_tits_c_cup')) {
                ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Your \' + iif(PCloDress = 1, \'dress\', \'top\') + \' is transparent and your entire chest, from the full shape of your ' + ((s as any).pcdesc_breasts ?? 0) + ' breasts to the color of your ' + ((s as any).temp_outfitVars ?? 0)?.['nipple_text'] + ', is completely visible. Anyone who looks can watch them jiggle as you walk.';
              } else {
                if (qspFunc(s, 'pcs_has_attr', ' || ', 'body_tits_d_cup', 'body_tits_e_cup')) {
                  ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Your \' + iif(PCloDress = 1, \'dress\', \'top\') + \' is transparent and your entire chest, from the full shape of your ' + ((s as any).pcdesc_breasts ?? 0) + ' breasts to the color of your ' + ((s as any).temp_outfitVars ?? 0)?.['nipple_text'] + ', is completely visible. Anyone who looks can watch them bounce with every step.';
                } else {
                  ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Your \' + iif(PCloDress = 1, \'dress\', \'top\') + \' is transparent and your entire chest, from the full shape of your ' + ((s as any).pcdesc_breasts ?? 0) + ' breasts to the color of your ' + ((s as any).temp_outfitVars ?? 0)?.['nipple_text'] + ', is completely visible. Anyone who looks can watch them bounce dramatically with every step.';
                }
              }
            }
          }
        }
        ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['bra_color'] = 'bimbo';
        ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['bra_icon'] = 'status/clothing/boobs_black|status/clothing/boobs_white';
      } else {
        if (((s as any).PCloThinness ?? 0) === 6) {
          if (qspFunc(s, 'pcs_has_attr', 'body_tits_aa_cup')) {
            if (((s as any).trait_vars ?? 0)?.['pokies'] === 1) {
              ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Your ' + ((s as any).temp_outfitVars ?? 0)?.['nipple_text'] + ' are poking through your bra and transparent \' + iif(PCloDress = 1, \'dress\', \'top\') + \'.';
            } else {
              ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Your bra is clearly showing through your transparent ' + ((((s as any).PCloDress ?? 0) === 1) ? ('dress') : ('top')) + '.';
            }
          } else {
            if (qspFunc(s, 'pcs_has_attr', 'body_tits_a_cup')) {
              if (((s as any).trait_vars ?? 0)?.['pokies'] === 1) {
                ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Your ' + ((s as any).temp_outfitVars ?? 0)?.['nipple_text'] + ' are poking through your bra and transparent \' + iif(PCloDress = 1, \'dress\', \'top\') + \', lightly bouncing for anybody who cares to look.';
              } else {
                ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Your bra is clearly showing through your transparent \' + iif(PCloDress = 1, \'dress\', \'top\') + \' and anyone who looks can see the slight bounce of your ' + ((s as any).pcdesc_breasts ?? 0) + ' breasts inside the cups as you walk.';
              }
            } else {
              if (qspFunc(s, 'pcs_has_attr', 'body_tits_b_cup')) {
                if (((s as any).trait_vars ?? 0)?.['pokies'] === 1) {
                  ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Your ' + ((s as any).temp_outfitVars ?? 0)?.['nipple_text'] + ' are poking through your bra and transparent \' + iif(PCloDress = 1, \'dress\', \'top\') + \', lightly bouncing for anybody who cares to look.';
                } else {
                  ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Your bra is clearly showing through your transparent \' + iif(PCloDress = 1, \'dress\', \'top\') + \' and anyone who looks can see the light bounce of your ' + ((s as any).pcdesc_breasts ?? 0) + ' breasts inside the cups as you walk.';
                }
              } else {
                if (qspFunc(s, 'pcs_has_attr', 'body_tits_c_cup')) {
                  if (((s as any).trait_vars ?? 0)?.['pokies'] === 1) {
                    ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Your ' + ((s as any).temp_outfitVars ?? 0)?.['nipple_text'] + ' are poking through your bra and transparent \' + iif(PCloDress = 1, \'dress\', \'top\') + \', softly bouncing inside them for anybody who cares to look.';
                  } else {
                    ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Your bra is clearly showing through your transparent \' + iif(PCloDress = 1, \'dress\', \'top\') + \' and anyone who looks can see the softly bounce of your ' + ((s as any).pcdesc_breasts ?? 0) + ' breasts inside the cups as you walk.';
                  }
                } else {
                  if (qspFunc(s, 'pcs_has_attr', ' || ', 'body_tits_d_cup', 'body_tits_e_cup')) {
                    if (((s as any).trait_vars ?? 0)?.['pokies'] === 1) {
                      ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Your ' + ((s as any).temp_outfitVars ?? 0)?.['nipple_text'] + ' are poking through your bra and transparent \' + iif(PCloDress = 1, \'dress\', \'top\') + \', jiggling inside them for anybody who cares to look.';
                    } else {
                      ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Your bra is clearly showing through your transparent \' + iif(PCloDress = 1, \'dress\', \'top\') + \' and anyone who looks can see your ' + ((s as any).pcdesc_breasts ?? 0) + ' breasts jiggle inside the cups as you walk.';
                    }
                  } else {
                    if (((s as any).trait_vars ?? 0)?.['pokies'] === 1) {
                      ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Your ' + ((s as any).temp_outfitVars ?? 0)?.['nipple_text'] + ' are poking through your bra and transparent \' + iif(PCloDress = 1, \'dress\', \'top\') + \', dramatically jiggling for anybody who cares to look.';
                    } else {
                      ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Your bra is clearly showing through your transparent \' + iif(PCloDress = 1, \'dress\', \'top\') + \' and anyone who looks can see your ' + ((s as any).pcdesc_breasts ?? 0) + ' breasts dramatically jiggle inside the cups with every step.';
                    }
                  }
                }
              }
            }
          }
          ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['bra_color'] = 'bimbo';
          ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['bra_icon'] = 'status/clothing/bra';
        } else {
          if (((s as any).PCloCoverTop ?? 0) === 4) {
            if (((s as any).braworntype ?? 0) !== 'none') {
              ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Your bra is fully on display, doing little to hide your ' + ((s as any).pcdesc_breasts ?? 0) + ' breasts.';
              ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['bra_icon'] = 'status/clothing/bra';
            } else {
              ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Your ' + ((s as any).pcdesc_breasts ?? 0) + ' breasts are completely exposed.';
              ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['bra_icon'] = 'status/clothing/boobs_black|status/clothing/boobs_white';
            }
            ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['bra_color'] = 'v_neg';
          } else {
            if (((s as any).PCloThinness ?? 0) === 5  &&  ((s as any).braworntype ?? 0) === 'none') {
              if (qspFunc(s, 'pcs_has_attr', 'body_tits_aa_cup')) {
                ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Your ' + ((((s as any).PCloDress ?? 0) === 1) ? ('dress') : ('top')) + ' drapes revealingly over your flat chest' + ((((s as any).temp_outfitVars ?? 0)?.['nipple_text'] !== '') ? (' and your ' + ((s as any).temp_outfitVars ?? 0)?.['nipple_text'] + ' are visible, rubbing distractingly on the thin fabric.') : (' and outline of your nipples is visible through the thin fabric.'));
              } else {
                if (qspFunc(s, 'pcs_has_attr', 'body_tits_a_cup')) {
                  ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Your ' + ((((s as any).PCloDress ?? 0) === 1) ? ('dress') : ('top')) + ' drapes revealingly over your petite breasts' + ((((s as any).temp_outfitVars ?? 0)?.['nipple_text'] !== '') ? (' and your ' + ((s as any).temp_outfitVars ?? 0)?.['nipple_text'] + ' are visible, rubbing distractingly on the thin fabric.') : (' and outline of your nipples is visible through the thin fabric.'));
                } else {
                  if (qspFunc(s, 'pcs_has_attr', 'body_tits_b_cup')) {
                    ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Your ' + ((((s as any).PCloDress ?? 0) === 1) ? ('dress') : ('top')) + ' drapes revealingly over your pert breasts' + ((((s as any).temp_outfitVars ?? 0)?.['nipple_text'] !== '') ? (' and your ' + ((s as any).temp_outfitVars ?? 0)?.['nipple_text'] + ' are visible, rubbing distractingly on the thin fabric.') : (' and outline of your nipples is visible through the thin fabric.'));
                  } else {
                    if (qspFunc(s, 'pcs_has_attr', 'body_tits_c_cup')) {
                      ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Your ' + ((((s as any).PCloDress ?? 0) === 1) ? ('dress') : ('top')) + ' drapes revealingly over your shapely breasts' + ((((s as any).temp_outfitVars ?? 0)?.['nipple_text'] !== '') ? (' and your ' + ((s as any).temp_outfitVars ?? 0)?.['nipple_text'] + ' are visible, rubbing distractingly on the thin fabric.') : (' and outline of your nipples is visible through the thin fabric.'));
                    } else {
                      if (qspFunc(s, 'pcs_has_attr', ' || ', 'body_tits_d_cup', 'body_tits_e_cup')) {
                        ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Your ' + ((((s as any).PCloDress ?? 0) === 1) ? ('dress') : ('top')) + ' drapes revealingly over your large breasts' + ((((s as any).temp_outfitVars ?? 0)?.['nipple_text'] !== '') ? (' and your ' + ((s as any).temp_outfitVars ?? 0)?.['nipple_text'] + ' are visible, rubbing distractingly on the thin fabric.') : (' and outline of your nipples is visible through the thin fabric.'));
                      } else {
                        ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Your ' + ((((s as any).PCloDress ?? 0) === 1) ? ('dress') : ('top')) + ' drapes revealingly over your huge breasts' + ((((s as any).temp_outfitVars ?? 0)?.['nipple_text'] !== '') ? (' and your ' + ((s as any).temp_outfitVars ?? 0)?.['nipple_text'] + ' are visible, rubbing distractingly on the thin fabric.') : (' and outline of your nipples is visible through the thin fabric.'));
                      }
                    }
                  }
                }
              }
              ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['bra_color'] = 'bimbo';
              ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['bra_icon'] = 'status/clothing/boobs_black|status/clothing/boobs_white';
            } else {
              if (((s as any).PCloThinness ?? 0) === 5) {
                if (qspFunc(s, 'pcs_has_attr', 'body_tits_aa_cup')) {
                  if (((s as any).trait_vars ?? 0)?.['pokies'] === 1) {
                    ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Your ' + ((((s as any).PCloDress ?? 0) === 1) ? ('dress') : ('top')) + ' drapes revealingly over your flat chest' + ((((s as any).temp_outfitVars ?? 0)?.['nipple_text'] !== '') ? (' and the outline of your ' + ((s as any).temp_outfitVars ?? 0)?.['nipple_text'] + ' is visible, poking through the cups of your bra') : (' and outline of your nipples is visible, poking through the cups of your bra.'));
                  } else {
                    ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Your ' + ((((s as any).PCloDress ?? 0) === 1) ? ('dress') : ('top')) + ' drapes revealingly over your flat chest' + ((((s as any).temp_outfitVars ?? 0)?.['nipple_text'] !== '') ? (', the color of your bra is visible through the thin material, and your ' + ((s as any).temp_outfitVars ?? 0)?.['nipple_text'] + ' are rubbing distractingly against the inside of the fabric.') : (' and the color of your bra is visible through the thin material.'));
                  }
                } else {
                  if (qspFunc(s, 'pcs_has_attr', 'body_tits_a_cup')) {
                    if (((s as any).trait_vars ?? 0)?.['pokies'] === 1) {
                      ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Your ' + ((((s as any).PCloDress ?? 0) === 1) ? ('dress') : ('top')) + ' drapes revealingly over your petite breasts' + ((((s as any).temp_outfitVars ?? 0)?.['nipple_text'] !== '') ? (' and the outline of your ' + ((s as any).temp_outfitVars ?? 0)?.['nipple_text'] + ' is visible, poking through the cups of your bra') : (' and outline of your nipples is visible, poking through the cups of your bra.'));
                    } else {
                      ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Your ' + ((((s as any).PCloDress ?? 0) === 1) ? ('dress') : ('top')) + ' drapes revealingly over your petite breasts' + ((((s as any).temp_outfitVars ?? 0)?.['nipple_text'] !== '') ? (', the color of your bra is visible through the thin material, and your ' + ((s as any).temp_outfitVars ?? 0)?.['nipple_text'] + ' are rubbing distractingly against the inside of the fabric.') : (' and the color of your bra is visible through the thin material.'));
                    }
                  } else {
                    if (qspFunc(s, 'pcs_has_attr', 'body_tits_b_cup')) {
                      if (((s as any).trait_vars ?? 0)?.['pokies'] === 1) {
                        ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Your ' + ((((s as any).PCloDress ?? 0) === 1) ? ('dress') : ('top')) + ' drapes revealingly over your pert breasts' + ((((s as any).temp_outfitVars ?? 0)?.['nipple_text'] !== '') ? (' and the outline of your ' + ((s as any).temp_outfitVars ?? 0)?.['nipple_text'] + ' is visible, poking through the cups of your bra') : (' and outline of your nipples is visible, poking through the cups of your bra.'));
                      } else {
                        ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Your ' + ((((s as any).PCloDress ?? 0) === 1) ? ('dress') : ('top')) + ' drapes revealingly over your pert breasts' + ((((s as any).temp_outfitVars ?? 0)?.['nipple_text'] !== '') ? (', the color of your bra is visible through the thin material, and your ' + ((s as any).temp_outfitVars ?? 0)?.['nipple_text'] + ' are rubbing distractingly against the inside of the fabric.') : (' and the color of your bra is visible through the thin material.'));
                      }
                    } else {
                      if (qspFunc(s, 'pcs_has_attr', 'body_tits_c_cup')) {
                        if (((s as any).trait_vars ?? 0)?.['pokies'] === 1) {
                          ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Your ' + ((((s as any).PCloDress ?? 0) === 1) ? ('dress') : ('top')) + ' drapes revealingly over your shapely breasts' + ((((s as any).temp_outfitVars ?? 0)?.['nipple_text'] !== '') ? (' and the outline of your ' + ((s as any).temp_outfitVars ?? 0)?.['nipple_text'] + ' is visible, poking through the cups of your bra') : (' and outline of your nipples is visible, poking through the cups of your bra.'));
                        } else {
                          ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Your ' + ((((s as any).PCloDress ?? 0) === 1) ? ('dress') : ('top')) + ' drapes revealingly over your shapely breasts' + ((((s as any).temp_outfitVars ?? 0)?.['nipple_text'] !== '') ? (', the color of your bra is visible through the thin material, and your ' + ((s as any).temp_outfitVars ?? 0)?.['nipple_text'] + ' are rubbing distractingly against the inside of the fabric.') : (' and the color of your bra is visible through the thin material.'));
                        }
                      } else {
                        if (qspFunc(s, 'pcs_has_attr', ' || ', 'body_tits_d_cup', 'body_tits_e_cup')) {
                          if (((s as any).trait_vars ?? 0)?.['pokies'] === 1) {
                            ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Your ' + ((((s as any).PCloDress ?? 0) === 1) ? ('dress') : ('top')) + ' drapes revealingly over your large breasts' + ((((s as any).temp_outfitVars ?? 0)?.['nipple_text'] !== '') ? (' and the outline of your ' + ((s as any).temp_outfitVars ?? 0)?.['nipple_text'] + ' is visible, poking through the cups of your bra') : (' and outline of your nipples is visible, poking through the cups of your bra.'));
                          } else {
                            ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Your ' + ((((s as any).PCloDress ?? 0) === 1) ? ('dress') : ('top')) + ' drapes revealingly over your large breasts' + ((((s as any).temp_outfitVars ?? 0)?.['nipple_text'] !== '') ? (', the color of your bra is visible through the thin material, and your ' + ((s as any).temp_outfitVars ?? 0)?.['nipple_text'] + ' are rubbing distractingly against the inside of the fabric.') : (' and the color of your bra is visible through the thin material.'));
                          }
                        } else {
                          if (((s as any).trait_vars ?? 0)?.['pokies'] === 1) {
                            ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Your ' + ((((s as any).PCloDress ?? 0) === 1) ? ('dress') : ('top')) + ' drapes revealingly over your huge breasts' + ((((s as any).temp_outfitVars ?? 0)?.['nipple_text'] !== '') ? (' and the outline of your ' + ((s as any).temp_outfitVars ?? 0)?.['nipple_text'] + ' is visible, poking through the cups of your bra') : (' and outline of your nipples is visible, poking through the cups of your bra.'));
                          } else {
                            ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Your ' + ((((s as any).PCloDress ?? 0) === 1) ? ('dress') : ('top')) + ' drapes revealingly over your huge breasts' + ((((s as any).temp_outfitVars ?? 0)?.['nipple_text'] !== '') ? (', the color of your bra is visible through the thin material, and your ' + ((s as any).temp_outfitVars ?? 0)?.['nipple_text'] + ' are rubbing distractingly against the inside of the fabric.') : (' and the color of your bra is visible through the thin material.'));
                          }
                        }
                      }
                    }
                  }
                }
                ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['bra_color'] = 'bimbo';
                ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['bra_icon'] = 'status/clothing/bra';
              } else {
                if (((s as any).PCloCoverTop ?? 0) === 3) {
                  if (((s as any).braworntype ?? 0) !== 'none') {
                    ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Your bra is clearly visible through your clothing.';
                    ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['bra_icon'] = 'status/clothing/bra';
                  } else {
                    ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Your ' + ((s as any).pcdesc_breasts ?? 0) + ' breasts are clearly visible through your clothing.';
                    ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['bra_icon'] = 'status/clothing/boobs_black|status/clothing/boobs_white';
                  }
                  ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['bra_color'] = 'v_neg';
                } else {
                  if (((s as any).PCloTopCut ?? 0) === 4  &&  ((s as any).braworntype ?? 0) !== 'none') {
                    ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Parts of your bra are visible due to your ' + 'TODO' + ' cut.';
                    ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['bra_color'] = 'neutral';
                    ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['bra_icon'] = 'status/clothing/bra';
                  } else {
                    if (((s as any).PCloTopCut ?? 0) === 4) {
                      ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Your top\'s low cut barely contains your ' + ((s as any).pcdesc_breasts ?? 0) + ' breasts, leaving little to the imagination.';
                      ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['bra_color'] = 'neutral';
                      ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['bra_icon'] = 'status/clothing/boobs_black|status/clothing/boobs_white';
                    } else {
                      if (((s as any).PCloThinness ?? 0) === 4  &&  ((s as any).braworntype ?? 0) === 'none') {
                        if (qspFunc(s, 'pcs_has_attr', 'body_tits_aa_cup')) {
                          ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Your flat chest is vaguely outlined by your ' + ((((s as any).PCloDress ?? 0) === 1) ? ('dress') : ('top')) + ((((s as any).temp_outfitVars ?? 0)?.['nipple_text'] !== '') ? (' and your ' + ((s as any).temp_outfitVars ?? 0)?.['nipple_text'] + ' are rubbing distractingly on the bare fabric.') : (' and your nipples making are making small bumps the fabric.'));
                        } else {
                          if (qspFunc(s, 'pcs_has_attr', 'body_tits_a_cup')) {
                            ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Your petite breasts are vaguely outlined by your ' + ((((s as any).PCloDress ?? 0) === 1) ? ('dress') : ('top')) + ((((s as any).temp_outfitVars ?? 0)?.['nipple_text'] !== '') ? (' and your ' + ((s as any).temp_outfitVars ?? 0)?.['nipple_text'] + ' are showing through the fabric, rubbing distractingly on the inside.') : (' and your nipples are showing through the fabric.'));
                          } else {
                            if (qspFunc(s, 'pcs_has_attr', 'body_tits_b_cup')) {
                              ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Your pert breasts are outlined by your ' + ((((s as any).PCloDress ?? 0) === 1) ? ('dress') : ('top')) + ', bouncing lightly with every step ' + ((((s as any).temp_outfitVars ?? 0)?.['nipple_text'] !== '') ? ('and your ' + ((s as any).temp_outfitVars ?? 0)?.['nipple_text'] + ' are rubbing distractingly on the bare fabric.') : ('your nipples are making small bumps the fabric.'));
                            } else {
                              if (qspFunc(s, 'pcs_has_attr', 'body_tits_c_cup')) {
                                ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Your full breasts \' + iif($temp_outfitVars[\'nipple_text\'] <> \', \'and ' + ((s as any).temp_outfitVars ?? 0)?.['nipple_text'] + ' are making attractive outlines, rubbing distractingly on the bare fabric of \', \'your nipples are making small bumps the fabric of your \') + iif(PCloDress = 1, \'dress\', \'top\') + \' and bouncing with every step.';
                              } else {
                                if (qspFunc(s, 'pcs_has_attr', ' || ', 'body_tits_d_cup', 'body_tits_e_cup')) {
                                  ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Your sizeable breasts \' + iif($temp_outfitVars[\'nipple_text\'] <> \', \'and ' + ((s as any).temp_outfitVars ?? 0)?.['nipple_text'] + ' are pushing out against the bare fabric of your \', \'and bare nipples are pushing out against the fabric of your \') + iif(PCloDress = 1, \'dress\', \'top\') + \', making visible bumps on the surface and freely bounce with every step.';
                                } else {
                                  ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Your huge breasts are straining tight against your ' + ((((s as any).PCloDress ?? 0) === 1) ? ('dress') : ('top')) + ', bouncing with every step' + ((((s as any).temp_outfitVars ?? 0)?.['nipple_text'] !== '') ? (', and your ' + ((s as any).temp_outfitVars ?? 0)?.['nipple_text'] + ' tent the fabric as they rub distractingly on the inside.') : (', and your bare nipples are tenting the fabric.'));
                                }
                              }
                            }
                          }
                        }
                        ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['bra_color'] = 'bimbo';
                        ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['bra_icon'] = 'status/clothing/boobs_black|status/clothing/boobs_white';
                      } else {
                        if (((s as any).PCloThinness ?? 0) === 4) {
                          if (qspFunc(s, 'pcs_has_attr', 'body_tits_aa_cup')) {
                            if (((s as any).trait_vars ?? 0)?.['pokies'] === 1) {
                              ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'The outline of your bra is showing through the thin material of your ' + ((((s as any).PCloDress ?? 0) === 1) ? ('dress') : ('top')) + ' and your ' + ((s as any).temp_outfitVars ?? 0)?.['nipple_text'] + ' are poking through both' + ((((s as any).pcs_horny ?? 0) >= 50) ? (' as they rub distractingly on the inside of the fabric.') : ('.'));
                            } else {
                              ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'The outline of your bra is showing through the thin material of your ' + ((((s as any).PCloDress ?? 0) === 1) ? ('dress') : ('top')) + ((((s as any).temp_outfitVars ?? 0)?.['nipple_text'] !== '') ? (' and your ' + ((s as any).temp_outfitVars ?? 0)?.['nipple_text'] + ' are rubbing distractingly against the inside of the fabric.') : ('.'));
                            }
                          } else {
                            if (qspFunc(s, 'pcs_has_attr', 'body_tits_a_cup')) {
                              if (((s as any).trait_vars ?? 0)?.['pokies'] === 1) {
                                ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'The outline of your bra is showing through your ' + ((((s as any).PCloDress ?? 0) === 1) ? ('dress') : ('top')) + ' and your ' + ((s as any).temp_outfitVars ?? 0)?.['nipple_text'] + ' are poking through both' + ((((s as any).pcs_horny ?? 0) >= 50) ? (' as they rub distractingly on the inside of the fabric with each light bounce of your petite breasts.') : ('.'));
                              } else {
                                ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'The outline of your bra is showing through your ' + ((((s as any).PCloDress ?? 0) === 1) ? ('dress') : ('top')) + ((((s as any).temp_outfitVars ?? 0)?.['nipple_text'] !== '') ? (' and your ' + ((s as any).temp_outfitVars ?? 0)?.['nipple_text'] + ' are rubbing distractingly against the inside of the fabric with each jiggle of your petite breasts.') : ('.'));
                              }
                            } else {
                              if (qspFunc(s, 'pcs_has_attr', 'body_tits_b_cup')) {
                                if (((s as any).trait_vars ?? 0)?.['pokies'] === 1) {
                                  ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'The outline of your bra is showing through your ' + ((((s as any).PCloDress ?? 0) === 1) ? ('dress') : ('top')) + ' and your ' + ((s as any).temp_outfitVars ?? 0)?.['nipple_text'] + ' are poking through both' + ((((s as any).pcs_horny ?? 0) >= 50) ? (' as they rub distractingly on the inside of the fabric with each light bounce of your pert breasts.') : ('.'));
                                } else {
                                  ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'The outline of your bra is showing through your ' + ((((s as any).PCloDress ?? 0) === 1) ? ('dress') : ('top')) + ((((s as any).temp_outfitVars ?? 0)?.['nipple_text'] !== '') ? (' and your ' + ((s as any).temp_outfitVars ?? 0)?.['nipple_text'] + ' are rubbing distractingly against the inside of the cup with each light bounce of your pert breasts.') : ('.'));
                                }
                              } else {
                                if (qspFunc(s, 'pcs_has_attr', 'body_tits_c_cup')) {
                                  if (((s as any).trait_vars ?? 0)?.['pokies'] === 1) {
                                    ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'The outline of your bra is showing through your ' + ((((s as any).PCloDress ?? 0) === 1) ? ('dress') : ('top')) + ' and your ' + ((s as any).temp_outfitVars ?? 0)?.['nipple_text'] + ' are creating visible bumps in both' + ((((s as any).pcs_horny ?? 0) >= 50) ? (' as they rub distractingly on the inside of the fabric with each bounce of your full breasts.') : ('.'));
                                  } else {
                                    ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'The outline of your bra is showing through your ' + ((((s as any).PCloDress ?? 0) === 1) ? ('dress') : ('top')) + ((((s as any).temp_outfitVars ?? 0)?.['nipple_text'] !== '') ? (' and your ' + ((s as any).temp_outfitVars ?? 0)?.['nipple_text'] + ' are rubbing distractingly against the inside of the cup with each bounce of your full breasts.') : ('.'));
                                  }
                                } else {
                                  if (qspFunc(s, 'pcs_has_attr', ' || ', 'body_tits_d_cup', 'body_tits_e_cup')) {
                                    if (((s as any).trait_vars ?? 0)?.['pokies'] === 1) {
                                      ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'The outline of your bra is pushing out through your ' + ((((s as any).PCloDress ?? 0) === 1) ? ('dress') : ('top')) + ' and your ' + ((s as any).temp_outfitVars ?? 0)?.['nipple_text'] + ' are poking through both' + ((((s as any).pcs_horny ?? 0) >= 50) ? (' as they rub distractingly on the inside of the fabric with each bounce of your sizeable breasts.') : ('.'));
                                    } else {
                                      ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'The outline of your bra is showing through your ' + ((((s as any).PCloDress ?? 0) === 1) ? ('dress') : ('top')) + ((((s as any).temp_outfitVars ?? 0)?.['nipple_text'] !== '') ? (' and your ' + ((s as any).temp_outfitVars ?? 0)?.['nipple_text'] + ' are rubbing distractingly against the inside of the cup with each bounce of your sizeable breasts.') : ('.'));
                                    }
                                  } else {
                                    if (((s as any).trait_vars ?? 0)?.['pokies'] === 1) {
                                      ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'The outline of your bra is showing through your ' + ((((s as any).PCloDress ?? 0) === 1) ? ('dress') : ('top')) + ' and your ' + ((s as any).temp_outfitVars ?? 0)?.['nipple_text'] + ' are poking through both' + ((((s as any).pcs_horny ?? 0) >= 50) ? (' as they rub distractingly on the inside of the fabric with each bounce of your huge breasts.') : ('.'));
                                    } else {
                                      ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'The outline of your bra is showing through your ' + ((((s as any).PCloDress ?? 0) === 1) ? ('dress') : ('top')) + ((((s as any).temp_outfitVars ?? 0)?.['nipple_text'] !== '') ? (' and your ' + ((s as any).temp_outfitVars ?? 0)?.['nipple_text'] + ' are rubbing distractingly against the inside of the cup with each bounce of your huge breasts.') : ('.'));
                                    }
                                  }
                                }
                              }
                            }
                          }
                          ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['bra_color'] = 'bimbo';
                          ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['bra_icon'] = 'status/clothing/bra';
                        } else {
                          if (((s as any).PCloCoverTop ?? 0) === 2) {
                            if (((s as any).braworntype ?? 0) !== 'none') {
                              ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Your bra is visible through your clothing.';
                              ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['bra_icon'] = 'status/clothing/bra';
                            } else {
                              ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Your ' + ((s as any).pcdesc_breasts ?? 0) + ' breasts are visible through your clothing.';
                              ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['bra_icon'] = 'status/clothing/boobs_black|status/clothing/boobs_white';
                            }
                            ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['bra_color'] = 'neg';
                          } else {
                            if (((s as any).PCloTopCut ?? 0) === 3  &&  ((s as any).braworntype ?? 0) !== 'none') {
                              ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Some glimpses of your bra are visible due to your plunging neckline.';
                              ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['bra_color'] = 'neutral';
                              ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['bra_icon'] = 'status/clothing/bra';
                            } else {
                              if (((s as any).PCloTopCut ?? 0) === 3) {
                                ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Your plunging neckline offers glimpses of your bare chest.';
                                ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['bra_color'] = 'neutral';
                                ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['bra_icon'] = 'status/clothing/boobs_black|status/clothing/boobs_white';
                              } else {
                                if (((s as any).PCloCoverTop ?? 0) === 1) {
                                  if (((s as any).braworntype ?? 0) !== 'none') {
                                    ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Your bra is barely visible through your clothing.';
                                    ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['bra_icon'] = 'status/clothing/bra';
                                  } else {
                                    ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'Your ' + ((s as any).pcdesc_breasts ?? 0) + ' breasts are barely visible through your clothing.';
                                    ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['bra_icon'] = 'status/clothing/boobs_black|status/clothing/boobs_white';
                                  }
                                  ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['bra_color'] = 'accent';
                                } else {
                                  if (((s as any).braworntype ?? 0) === 'none') {
                                    if (((s as any).pcs_horny ?? 0) >= 50) {
                                      ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'You are not wearing a bra and your aroused nipples are rock-hard.';
                                      ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['bra_color'] = 'bimbo';
                                    } else {
                                      if (((s as any).temper ?? 0) < 14) {
                                        ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'You are not wearing a bra and your nipples are freezing cold.';
                                        ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['bra_color'] = 'neg';
                                      } else {
                                        if (qspFunc(s, 'pcs_has_attr', 'body_tits_aa_cup')) {
                                          ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'You are not wearing a bra and your ' + ((s as any).pcdesc_breasts ?? 0) + ' breasts feel comfortable against the inside of your clothes.';
                                        } else {
                                          if (qspFunc(s, 'pcs_has_attr', 'body_tits_a_cup')) {
                                            ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'You are not wearing a bra and your ' + ((s as any).pcdesc_breasts ?? 0) + ' breasts ever so slightly bounce as you walk.';
                                          } else {
                                            if (qspFunc(s, 'pcs_has_attr', 'body_tits_b_cup')) {
                                              ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'You are not wearing a bra and your ' + ((s as any).pcdesc_breasts ?? 0) + ' breasts jiggle softly as you walk.';
                                            } else {
                                              if (qspFunc(s, 'pcs_has_attr', 'body_tits_c_cup')) {
                                                ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'You are not wearing a bra and your ' + ((s as any).pcdesc_breasts ?? 0) + ' breasts bounce with every step.';
                                                ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['bra_imp'] = 1;
                                              } else {
                                                if (qspFunc(s, 'pcs_has_attr', ' || ', 'body_tits_d_cup', 'body_tits_e_cup')) {
                                                  ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'You are not wearing a bra and your ' + ((s as any).pcdesc_breasts ?? 0) + ' breasts bounce with every step.';
                                                  ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['bra_imp'] = 1;
                                                } else {
                                                  ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra'] = 'You are not wearing a bra and your ' + ((s as any).pcdesc_breasts ?? 0) + ' breasts bounce dramatically with every step.';
                                                  ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['bra_imp'] = 1;
                                                }
                                              }
                                            }
                                          }
                                        }
                                        ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['bra_color'] = 'neutral';
                                      }
                                    }
                                    ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['bra_icon'] = 'status/clothing/boobs_black|status/clothing/boobs_white';
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (((s as any).stat_texts ?? 0)?.['bra'] !== '') {
      // TODO-QSP: gs 'stat_display_compute', 'queue_msg', 'bra', $temp_outfitVars['bra_color'], $temp_outfitVars['bra_...
    }
  }
  ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties'] = '';
  ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties_color'] = 'none';
  ((s as any).temp_outfitvars = (s as any).temp_outfitvars ?? {})['panties_imp'] = 0;
  if (((s as any).clothingworntype ?? 0) !== 'nude') {
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['panty_garment'] = ((((s as any).PCloDress ?? 0) === 1) ? ('dress') : (((((s as any).PCloSkirt ?? 0) > 0) ? ('skirt') : ('pants'))));
      if (((s as any).PCloThinness ?? 0) === 6) {
        if (((s as any).PCloSkirt ?? 0) === 6) {
          ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties'] = 'Your dress is so short that your panties are clearly visible.';
        } else {
          if (((s as any).PCloSkirt ?? 0) === 5) {
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties'] = 'Your ' + ((s as any).temp_outfitVars ?? 0)?.['panty_garment'] + ' is short and transparent, so anyone can see your panties.';
          } else {
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties'] = 'Your panties are clearly showing through your transparent ' + ((s as any).temp_outfitVars ?? 0)?.['panty_garment'] + '.';
          }
        }
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties_color'] = 'v_neg';
      } else {
        if (((s as any).PCloThinness ?? 0) === 5) {
          if (((s as any).PCloSkirt ?? 0) === 6) {
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties'] = 'Your ' + ((s as any).temp_outfitVars ?? 0)?.['panty_garment'] + ' is so short that your panties are clearly visible.';
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties_color'] = 'v_neg';
          } else {
            if (((s as any).PCloSkirt ?? 0) === 5) {
              ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties'] = 'The outline of your panties can be seen and often exposed by your short ' + ((s as any).temp_outfitVars ?? 0)?.['panty_garment'] + '.';
              ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties_color'] = 'v_neg';
            } else {
              if (((s as any).PCloPants ?? 0) === 6) {
                ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties'] = 'Your short shorts expose your panties and are so thin the outline of the rest of your panties can be seen.';
                ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties_color'] = 'v_neg';
              } else {
                ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties'] = 'The outline of your panties is visible through your ' + ((s as any).temp_outfitVars ?? 0)?.['panty_garment'] + '.';
                ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties_color'] = 'accent';
              }
            }
          }
        } else {
          if (((s as any).PCloSkirt ?? 0) === 6) {
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties'] = 'Your dress is so short that your panties are clearly visible.';
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties_color'] = 'v_neg';
          } else {
            if (((s as any).PCloPants ?? 0) === 6) {
              ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties'] = 'Your short shorts expose your panties.';
              ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties_color'] = 'v_neg';
            } else {
              if (((s as any).PCloSkirt ?? 0) === 5) {
                ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties'] = 'Your dress is short and your panties can often be seen.';
                ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties_color'] = 'v_neg';
              } else {
                if (((s as any).PCloSkirt ?? 0) === 4) {
                  ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties'] = 'Your dress is short enough that your panties can be seen when you bend over.';
                  ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties_color'] = 'accent';
                }
              }
            }
          }
        }
      }
    }
    if (((s as any).PCloPanties ?? 0) === 1) {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties'] = 'Your outfit is replacing your panties.';
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties_color'] = 'neg';
    } else {
      if (((s as any).pantyworntype ?? 0) === 'none') {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties'] = 'You are not wearing any panties.';
        if (((s as any).pcs_inhib ?? 0) < 30) {
          ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties_color'] = 'v_neg';
          ((s as any).temp_outfitvars = (s as any).temp_outfitvars ?? {})['panties_imp'] = 1;
        } else {
          if (((s as any).pcs_inhib ?? 0) < 70) {
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties_color'] = 'accent';
          } else {
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties_color'] = 'neg';
          }
        }
      }
    }
    if (((s as any).PCloCoverFront ?? 0) > 0  &&  ((s as any).PCloCoverBack ?? 0) > 0) {
      if (((s as any).PCloCoverFront ?? 0) <= 1) {
        ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['sdp_f'] = 'barely visible';
      } else {
        if (((s as any).PCloCoverFront ?? 0) === 2) {
          ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['sdp_f'] = 'visible';
        } else {
          if (((s as any).PCloCoverFront ?? 0) === 3) {
            ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['sdp_f'] = 'clearly visible';
          } else {
            ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['sdp_f'] = 'completely exposed';
          }
        }
      }
      if (((s as any).PCloCoverBack ?? 0) <= 1) {
        ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['sdp_b'] = 'barely visible';
      } else {
        if (((s as any).PCloCoverBack ?? 0) === 2) {
          ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['sdp_b'] = 'visible';
        } else {
          if (((s as any).PCloCoverBack ?? 0) === 3) {
            ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['sdp_b'] = 'clearly visible';
          } else {
            ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['sdp_b'] = 'completely exposed';
          }
        }
      }
      if (((s as any).PCloCoverFront ?? 0) === ((s as any).PCloCoverBack ?? 0)) {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties'] = 'Your pussy and ass are ' + ((s as any).temp_outfitVars ?? 0)?.['sdp_f'] + ' through your clothing.';
      } else {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties'] = 'Your pussy is ' + ((s as any).temp_outfitVars ?? 0)?.['sdp_f'] + ' and your ass is ' + ((s as any).temp_outfitVars ?? 0)?.['sdp_b'] + ' through your clothing.';
      }
      if (((s as any).PCloCoverFront ?? 0) === 1  ||  ((s as any).PCloCoverBack ?? 0) === 1) {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties_color'] = 'accent';
      }
      if (((s as any).PCloCoverFront ?? 0) === 2  ||  ((s as any).PCloCoverBack ?? 0) === 2) {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties_color'] = 'neg';
      } else {
        if (((s as any).PCloCoverFront ?? 0) >= 3  ||  ((s as any).PCloCoverBack ?? 0) >= 3) {
          ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties_color'] = 'v_neg';
          ((s as any).temp_outfitvars = (s as any).temp_outfitvars ?? {})['panties_imp'] = 1;
        }
      }
    }
    if (((s as any).pantyworntype ?? 0) !== 'none'  &&  (((s as any).isprok ?? 0) === 0  &&  ((s as any).isprokp ?? 0) === 0  &&  ((s as any).mesec ?? 0) > 0  &&  ((s as any).preg ?? 0) === 0  &&  ((s as any).loc ?? 0) !== 'gad_gpyard'  &&  (((s as any).isprok_lastday ?? 0) === 0  ||  (((s as any).hour ?? 0) > 4  &&  ((s as any).isprok_lastday ?? 0) === 1)))) {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties'] = 'You\'re not using any menstrual products during your period and blood is soaking your panties!';
      ((s as any).temp_outfitvars = (s as any).temp_outfitvars ?? {})['panties_imp'] = 1;
    }
  }
  ((s as any).stat_texts = (s as any).stat_texts ?? {})['outfit_clean'] = '';
  ((s as any).stat_texts = (s as any).stat_texts ?? {})['outfit_strength'] = '';
  ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['wash_sum'] = 0;
  ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['wash_max'] = 0;
  ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['repair_sum'] = 0;
  ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['repair_max'] = 0;
  ((s as any).stat_texts = (s as any).stat_texts ?? {})['clothes_clean'] = '';
  ((s as any).stat_texts = (s as any).stat_texts ?? {})['clothes_repair'] = '';
  if (((s as any).clothingworntype ?? 0) !== 'nude') {
    ((s as any).stat_texts = (s as any).stat_texts ?? {})['clothes_clean'] = 'Your clothes are ';
    if (((s as any).cheatVars ?? 0)?.['clothes_dirt'] === 1) {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['clothes_clean'] = ((s as any).stat_texts['clothes_clean'] ?? 0) + ('clean.');
      qspCall(s, 'stat_display_compute', 'queue_msg', 'clothes_clean', 'neutral', 'pos');
    } else {
      if (qspFunc(s, 'clothing', 'is_immutable')) {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['clothes_clean'] = ((s as any).stat_texts['clothes_clean'] ?? 0) + ('as clean as they can be.');
        qspCall(s, 'stat_display_compute', 'queue_msg', 'clothes_clean', 'neutral', 'const');
      } else {
        ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['wash_sum'] = ((s as any).temp_outfitVars['wash_sum'] ?? 0) + (Math.min(((s as any).PCloDirt ?? 0), 2640));
        ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['wash_max'] = ((s as any).temp_outfitVars['wash_max'] ?? 0) + (2640);
        if (((s as any).PCloDirt ?? 0) <= 480) {
          ((s as any).stat_texts = (s as any).stat_texts ?? {})['clothes_clean'] = ((s as any).stat_texts['clothes_clean'] ?? 0) + ('clean.');
          qspCall(s, 'stat_display_compute', 'queue_msg', 'clothes_clean', 'v_pos', 'pos');
        } else {
          if (((s as any).PCloDirt ?? 0) <= 1440) {
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['clothes_clean'] = ((s as any).stat_texts['clothes_clean'] ?? 0) + ('slightly dirty.');
            qspCall(s, 'stat_display_compute', 'queue_msg', 'clothes_clean', 'v_neg');
          } else {
            if (((s as any).PCloDirt ?? 0) <= 2400) {
              ((s as any).stat_texts = (s as any).stat_texts ?? {})['clothes_clean'] = ((s as any).stat_texts['clothes_clean'] ?? 0) + ('dirty.');
              qspCall(s, 'stat_display_compute', 'queue_msg', 'clothes_clean', 'v_neg');
            } else {
              ((s as any).stat_texts = (s as any).stat_texts ?? {})['clothes_clean'] = ((s as any).stat_texts['clothes_clean'] ?? 0) + ('filthy.');
              qspCall(s, 'stat_display_compute', 'queue_msg', 'clothes_clean', 'v_neg');
              // TODO-QSP: gs 'stat_display_compute', 'queue_alert', $stat_texts['clothes_clean'], 'v_neg'
            }
          }
        }
      }
    }
    ((s as any).stat_texts = (s as any).stat_texts ?? {})['clothes_repair'] = 'Your clothes are ';
    if (((s as any).cheatVars ?? 0)?.['clothes_strength'] === 1) {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['clothes_repair'] = ((s as any).stat_texts['clothes_repair'] ?? 0) + ('in perfect shape.');
      qspCall(s, 'stat_display_compute', 'queue_msg', 'clothes_repair', 'neutral', 'pos');
    } else {
      if (qspFunc(s, 'clothing', 'is_immutable')) {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['clothes_repair'] = ((s as any).stat_texts['clothes_repair'] ?? 0) + ('in as good a shape as they can be.');
        qspCall(s, 'stat_display_compute', 'queue_msg', 'clothes_repair', 'neutral', 'const');
      } else {
        ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['repair_sum'] = ((s as any).temp_outfitVars['repair_sum'] ?? 0) + (Math.min(((s as any).PCloStrength ?? 0), ((s as any).PCloMaxStrength ?? 0)));
        ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['repair_max'] = ((s as any).temp_outfitVars['repair_max'] ?? 0) + (((s as any).PCloMaxStrength ?? 0));
        if (((s as any).PCloStrength ?? 0) < ((s as any).PCloMaxStrength ?? 0) / 10) {
          ((s as any).stat_texts = (s as any).stat_texts ?? {})['clothes_repair'] = ((s as any).stat_texts['clothes_repair'] ?? 0) + ('in bad shape.');
          qspCall(s, 'stat_display_compute', 'queue_msg', 'clothes_repair', 'v_neg');
          // TODO-QSP: gs 'stat_display_compute', 'queue_alert', $stat_texts['clothes_repair'], 'v_neg'
        } else {
          if (((s as any).PCloStrength ?? 0) < ((s as any).PCloMaxStrength ?? 0) / 2) {
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['clothes_repair'] = ((s as any).stat_texts['clothes_repair'] ?? 0) + ('starting to show wear and tear.');
            qspCall(s, 'stat_display_compute', 'queue_msg', 'clothes_repair', 'v_neg');
          } else {
            if (((s as any).PCloStrength ?? 0) < 3 * ((s as any).PCloMaxStrength ?? 0) / 4) {
              ((s as any).stat_texts = (s as any).stat_texts ?? {})['clothes_repair'] = ((s as any).stat_texts['clothes_repair'] ?? 0) + ('in good shape.');
              qspCall(s, 'stat_display_compute', 'queue_msg', 'clothes_repair', 'neutral', 'pos');
            } else {
              ((s as any).stat_texts = (s as any).stat_texts ?? {})['clothes_repair'] = ((s as any).stat_texts['clothes_repair'] ?? 0) + ('in perfect shape.');
              qspCall(s, 'stat_display_compute', 'queue_msg', 'clothes_repair', 'v_pos', 'pos');
            }
          }
        }
      }
    }
    ((s as any).stat_texts = (s as any).stat_texts ?? {})['outfit_clean'] = ((s as any).stat_texts['outfit_clean'] ?? 0) + (((s as any).stat_texts ?? 0)?.['clothes_clean'] + ' ');
    ((s as any).stat_texts = (s as any).stat_texts ?? {})['outfit_repair'] = ((s as any).stat_texts['outfit_repair'] ?? 0) + (((s as any).stat_texts ?? 0)?.['clothes_repair'] + ' ');
  }
  ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra_clean'] = '';
  ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties_clean'] = '';
  ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra_repair'] = '';
  ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties_repair'] = '';
  if (((s as any).underwear ?? 0)?.['type'] === 2) {
    if (((s as any).bodysuitworntype ?? 0) !== 'none'  &&  ((s as any).bodysuitworntype ?? 0) !== '') {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties_clean'] = 'Your bodysuit is ';
      if (((s as any).cheatVars ?? 0)?.['clothes_dirt'] === 1) {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties_clean'] = ((s as any).stat_texts['panties_clean'] ?? 0) + ('clean.');
        qspCall(s, 'stat_display_compute', 'queue_msg', 'panties_clean', 'neutral', 'pos');
      } else {
        if (qspFunc(s, 'underwear_bodysuits', 'is_immutable')) {
          ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties_clean'] = ((s as any).stat_texts['panties_clean'] ?? 0) + ('as clean as it can be.');
          qspCall(s, 'stat_display_compute', 'queue_msg', 'panties_clean', 'neutral', 'const');
        } else {
          ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['wash_sum'] = ((s as any).temp_outfitVars['wash_sum'] ?? 0) + (Math.min(((s as any).PPanDirt ?? 0), 2640));
          ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['wash_max'] = ((s as any).temp_outfitVars['wash_max'] ?? 0) + (2640);
          if (((s as any).PPanDirt ?? 0) <= 480) {
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties_clean'] = ((s as any).stat_texts['panties_clean'] ?? 0) + ('clean.');
            qspCall(s, 'stat_display_compute', 'queue_msg', 'panties_clean', 'v_pos', 'pos');
          } else {
            if (((s as any).PPanDirt ?? 0) <= 1440) {
              ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties_clean'] = ((s as any).stat_texts['panties_clean'] ?? 0) + ('slightly dirty.');
              qspCall(s, 'stat_display_compute', 'queue_msg', 'panties_clean', 'v_neg');
            } else {
              if (((s as any).PPanDirt ?? 0) <= 2400) {
                ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties_clean'] = ((s as any).stat_texts['panties_clean'] ?? 0) + ('dirty.');
                qspCall(s, 'stat_display_compute', 'queue_msg', 'panties_clean', 'v_neg');
                ((s as any).temp_outfitvars = (s as any).temp_outfitvars ?? {})['panties_imp'] = 1;
              } else {
                ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties_clean'] = ((s as any).stat_texts['panties_clean'] ?? 0) + ('filthy.');
                qspCall(s, 'stat_display_compute', 'queue_msg', 'panties_clean', 'v_neg');
                // TODO-QSP: gs 'stat_display_compute', 'queue_alert', $stat_texts['panties_clean'], 'v_neg'
                ((s as any).temp_outfitvars = (s as any).temp_outfitvars ?? {})['panties_imp'] = 1;
              }
            }
          }
        }
      }
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties_repair'] = 'Your bodysuit is ';
      if (((s as any).cheatVars ?? 0)?.['clothes_strength'] === 1) {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties_repair'] = ((s as any).stat_texts['panties_repair'] ?? 0) + ('in perfect shape.');
        qspCall(s, 'stat_display_compute', 'queue_msg', 'panties_repair', 'neutral', 'pos');
      } else {
        if (qspFunc(s, 'underwear_bodysuits', 'is_immutable')) {
          ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties_repair'] = ((s as any).stat_texts['panties_repair'] ?? 0) + ('in as good a shape as it can be.');
          qspCall(s, 'stat_display_compute', 'queue_msg', 'panties_repair', 'neutral', 'const');
        } else {
          ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['repair_sum'] = ((s as any).temp_outfitVars['repair_sum'] ?? 0) + (Math.min(((s as any).PBraStrength ?? 0), ((s as any).PBraMaxStrength ?? 0)));
          ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['repair_max'] = ((s as any).temp_outfitVars['repair_max'] ?? 0) + (((s as any).PBraMaxStrength ?? 0));
          if (((s as any).PBraStrength ?? 0) < ((s as any).PBraMaxStrength ?? 0) / 10) {
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties_repair'] = ((s as any).stat_texts['panties_repair'] ?? 0) + ('in bad shape.');
            qspCall(s, 'stat_display_compute', 'queue_msg', 'panties_repair', 'v_neg');
            // TODO-QSP: gs 'stat_display_compute', 'queue_alert', $stat_texts['panties_repair'], 'v_neg'
          } else {
            if (((s as any).PBraStrength ?? 0) < ((s as any).PBraMaxStrength ?? 0) / 2) {
              ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties_repair'] = ((s as any).stat_texts['panties_repair'] ?? 0) + ('starting to show wear and tear.');
              qspCall(s, 'stat_display_compute', 'queue_msg', 'panties_repair', 'v_neg');
            } else {
              if (((s as any).PBraStrength ?? 0) < 3 * ((s as any).PBraMaxStrength ?? 0) / 4) {
                ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties_repair'] = ((s as any).stat_texts['panties_repair'] ?? 0) + ('in good shape.');
                qspCall(s, 'stat_display_compute', 'queue_msg', 'panties_repair', 'neutral', 'pos');
              } else {
                ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties_repair'] = ((s as any).stat_texts['panties_repair'] ?? 0) + ('in perfect shape.');
                qspCall(s, 'stat_display_compute', 'queue_msg', 'panties_repair', 'v_pos', 'pos');
              }
            }
          }
        }
      }
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['outfit_clean'] = ((s as any).stat_texts['outfit_clean'] ?? 0) + (((s as any).stat_texts ?? 0)?.['panties_clean'] + ' ');
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['outfit_repair'] = ((s as any).stat_texts['outfit_repair'] ?? 0) + (((s as any).stat_texts ?? 0)?.['panties_repair'] + ' ');
    }
  } else {
    if (((s as any).braworntype ?? 0) !== 'none'  &&  ((s as any).braworntype ?? 0) !== '') {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra_clean'] = 'Your bra is ';
      if (((s as any).cheatVars ?? 0)?.['clothes_dirt'] === 1) {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra_clean'] = ((s as any).stat_texts['bra_clean'] ?? 0) + ('clean.');
        qspCall(s, 'stat_display_compute', 'queue_msg', 'bra_clean', 'neutral', 'pos');
      } else {
        if (qspFunc(s, 'bras', 'is_immutable')) {
          ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra_clean'] = ((s as any).stat_texts['bra_clean'] ?? 0) + ('as clean as it can be.');
          qspCall(s, 'stat_display_compute', 'queue_msg', 'bra_clean', 'neutral', 'const');
        } else {
          ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['wash_sum'] = ((s as any).temp_outfitVars['wash_sum'] ?? 0) + (Math.min(((s as any).PBraDirt ?? 0), 2640));
          ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['wash_max'] = ((s as any).temp_outfitVars['wash_max'] ?? 0) + (2640);
          if (((s as any).PBraDirt ?? 0) <= 480) {
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra_clean'] = ((s as any).stat_texts['bra_clean'] ?? 0) + ('clean.');
            qspCall(s, 'stat_display_compute', 'queue_msg', 'bra_clean', 'v_pos', 'pos');
          } else {
            if (((s as any).PBraDirt ?? 0) <= 1440) {
              ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra_clean'] = ((s as any).stat_texts['bra_clean'] ?? 0) + ('slightly dirty.');
              qspCall(s, 'stat_display_compute', 'queue_msg', 'bra_clean', 'v_neg');
            } else {
              if (((s as any).PBraDirt ?? 0) <= 2400) {
                ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra_clean'] = ((s as any).stat_texts['bra_clean'] ?? 0) + ('dirty.');
                qspCall(s, 'stat_display_compute', 'queue_msg', 'bra_clean', 'v_neg');
                ((s as any).temp_outfitvars = (s as any).temp_outfitvars ?? {})['bra_imp'] = 1;
              } else {
                ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra_clean'] = ((s as any).stat_texts['bra_clean'] ?? 0) + ('filthy.');
                qspCall(s, 'stat_display_compute', 'queue_msg', 'bra_clean', 'v_neg');
                // TODO-QSP: gs 'stat_display_compute', 'queue_alert', $stat_texts['bra_clean'], 'v_neg'
                ((s as any).temp_outfitvars = (s as any).temp_outfitvars ?? {})['bra_imp'] = 1;
              }
            }
          }
        }
      }
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra_repair'] = 'Your bra is ';
      if (((s as any).cheatVars ?? 0)?.['clothes_strength'] === 1) {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra_repair'] = ((s as any).stat_texts['bra_repair'] ?? 0) + ('in perfect shape.');
        qspCall(s, 'stat_display_compute', 'queue_msg', 'bra_repair', 'neutral', 'pos');
      } else {
        if (qspFunc(s, 'bras', 'is_immutable')) {
          ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra_repair'] = ((s as any).stat_texts['bra_repair'] ?? 0) + ('in as good a shape as it can be.');
          qspCall(s, 'stat_display_compute', 'queue_msg', 'bra_repair', 'neutral', 'const');
        } else {
          ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['repair_sum'] = ((s as any).temp_outfitVars['repair_sum'] ?? 0) + (Math.min(((s as any).PBraStrength ?? 0), ((s as any).PBraMaxStrength ?? 0)));
          ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['repair_max'] = ((s as any).temp_outfitVars['repair_max'] ?? 0) + (((s as any).PBraMaxStrength ?? 0));
          if (((s as any).PBraStrength ?? 0) < ((s as any).PBraMaxStrength ?? 0) / 10) {
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra_repair'] = ((s as any).stat_texts['bra_repair'] ?? 0) + ('in bad shape.');
            qspCall(s, 'stat_display_compute', 'queue_msg', 'bra_repair', 'v_neg');
            // TODO-QSP: gs 'stat_display_compute', 'queue_alert', $stat_texts['bra_repair'], 'v_neg'
          } else {
            if (((s as any).PBraStrength ?? 0) < ((s as any).PBraMaxStrength ?? 0) / 2) {
              ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra_repair'] = ((s as any).stat_texts['bra_repair'] ?? 0) + ('starting to show wear and tear.');
              qspCall(s, 'stat_display_compute', 'queue_msg', 'bra_repair', 'v_neg');
            } else {
              if (((s as any).PBraStrength ?? 0) < 3 * ((s as any).PBraMaxStrength ?? 0) / 4) {
                ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra_repair'] = ((s as any).stat_texts['bra_repair'] ?? 0) + ('in good shape.');
                qspCall(s, 'stat_display_compute', 'queue_msg', 'bra_repair', 'neutral', 'pos');
              } else {
                ((s as any).stat_texts = (s as any).stat_texts ?? {})['bra_repair'] = ((s as any).stat_texts['bra_repair'] ?? 0) + ('in perfect shape.');
                qspCall(s, 'stat_display_compute', 'queue_msg', 'bra_repair', 'v_pos', 'pos');
              }
            }
          }
        }
      }
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['outfit_clean'] = ((s as any).stat_texts['outfit_clean'] ?? 0) + (((s as any).stat_texts ?? 0)?.['bra_clean'] + ' ');
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['outfit_repair'] = ((s as any).stat_texts['outfit_repair'] ?? 0) + (((s as any).stat_texts ?? 0)?.['bra_repair'] + ' ');
    }
    if (((s as any).pantyworntype ?? 0) !== 'none'  &&  ((s as any).pantyworntype ?? 0) !== '') {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties_clean'] = 'Your panties are ';
      if (((s as any).cheatVars ?? 0)?.['clothes_dirt'] === 1) {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties_clean'] = ((s as any).stat_texts['panties_clean'] ?? 0) + ('clean.');
        qspCall(s, 'stat_display_compute', 'queue_msg', 'panties_clean', 'neutral', 'pos');
      } else {
        if (qspFunc(s, 'panties', 'is_immutable')) {
          ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties_clean'] = ((s as any).stat_texts['panties_clean'] ?? 0) + ('as clean as they can be.');
          qspCall(s, 'stat_display_compute', 'queue_msg', 'panties_clean', 'neutral', 'const');
        } else {
          ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['wash_sum'] = ((s as any).temp_outfitVars['wash_sum'] ?? 0) + (Math.min(((s as any).PPanDirt ?? 0), 2640));
          ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['wash_max'] = ((s as any).temp_outfitVars['wash_max'] ?? 0) + (2640);
          if (((s as any).PPanDirt ?? 0) <= 480) {
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties_clean'] = ((s as any).stat_texts['panties_clean'] ?? 0) + ('clean.');
            qspCall(s, 'stat_display_compute', 'queue_msg', 'panties_clean', 'v_pos', 'pos');
          } else {
            if (((s as any).PPanDirt ?? 0) <= 1440) {
              ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties_clean'] = ((s as any).stat_texts['panties_clean'] ?? 0) + ('slightly dirty.');
              qspCall(s, 'stat_display_compute', 'queue_msg', 'panties_clean', 'v_neg');
            } else {
              if (((s as any).PPanDirt ?? 0) <= 2400) {
                ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties_clean'] = ((s as any).stat_texts['panties_clean'] ?? 0) + ('dirty.');
                qspCall(s, 'stat_display_compute', 'queue_msg', 'panties_clean', 'v_neg');
                ((s as any).temp_outfitvars = (s as any).temp_outfitvars ?? {})['panties_imp'] = 1;
              } else {
                ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties_clean'] = ((s as any).stat_texts['panties_clean'] ?? 0) + ('filthy.');
                qspCall(s, 'stat_display_compute', 'queue_msg', 'panties_clean', 'v_neg');
                // TODO-QSP: gs 'stat_display_compute', 'queue_alert', $stat_texts['panties_clean'], 'v_neg'
                ((s as any).temp_outfitvars = (s as any).temp_outfitvars ?? {})['panties_imp'] = 1;
              }
            }
          }
        }
      }
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties_repair'] = 'Your panties are ';
      if (((s as any).cheatVars ?? 0)?.['clothes_strength'] === 1) {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties_repair'] = ((s as any).stat_texts['panties_repair'] ?? 0) + ('in perfect shape.');
        qspCall(s, 'stat_display_compute', 'queue_msg', 'panties_repair', 'neutral', 'pos');
      } else {
        if (qspFunc(s, 'panties', 'is_immutable')) {
          ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties_repair'] = ((s as any).stat_texts['panties_repair'] ?? 0) + ('in as good a shape as they can be.');
          qspCall(s, 'stat_display_compute', 'queue_msg', 'panties_repair', 'neutral', 'const');
        } else {
          ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['repair_sum'] = ((s as any).temp_outfitVars['repair_sum'] ?? 0) + (Math.min(((s as any).PPanStrength ?? 0), ((s as any).PPanMaxStrength ?? 0)));
          ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['repair_max'] = ((s as any).temp_outfitVars['repair_max'] ?? 0) + (((s as any).PPanMaxStrength ?? 0));
          if (((s as any).PPanStrength ?? 0) < ((s as any).PPanMaxStrength ?? 0) / 10) {
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties_repair'] = ((s as any).stat_texts['panties_repair'] ?? 0) + ('in bad shape.');
            qspCall(s, 'stat_display_compute', 'queue_msg', 'panties_repair', 'v_neg');
            // TODO-QSP: gs 'stat_display_compute', 'queue_alert', $stat_texts['panties_repair'], 'v_neg'
          } else {
            if (((s as any).PPanStrength ?? 0) < ((s as any).PPanMaxStrength ?? 0) / 2) {
              ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties_repair'] = ((s as any).stat_texts['panties_repair'] ?? 0) + ('starting to show wear and tear.');
              qspCall(s, 'stat_display_compute', 'queue_msg', 'panties_repair', 'v_neg');
            } else {
              if (((s as any).PPanStrength ?? 0) < 3 * ((s as any).PPanMaxStrength ?? 0) / 4) {
                ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties_repair'] = ((s as any).stat_texts['panties_repair'] ?? 0) + ('in good shape.');
                qspCall(s, 'stat_display_compute', 'queue_msg', 'panties_repair', 'neutral', 'pos');
              } else {
                ((s as any).stat_texts = (s as any).stat_texts ?? {})['panties_repair'] = ((s as any).stat_texts['panties_repair'] ?? 0) + ('in perfect shape.');
                qspCall(s, 'stat_display_compute', 'queue_msg', 'panties_repair', 'v_pos', 'pos');
              }
            }
          }
        }
      }
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['outfit_clean'] = ((s as any).stat_texts['outfit_clean'] ?? 0) + (((s as any).stat_texts ?? 0)?.['panties_clean'] + ' ');
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['outfit_repair'] = ((s as any).stat_texts['outfit_repair'] ?? 0) + (((s as any).stat_texts ?? 0)?.['panties_repair'] + ' ');
    }
  }
  ((s as any).stat_texts = (s as any).stat_texts ?? {})['shoes_repair'] = '';
  if (((s as any).shoeworntype ?? 0) !== 'none'  &&  ((s as any).shoeworntype ?? 0) !== '') {
    ((s as any).stat_texts = (s as any).stat_texts ?? {})['shoes_repair'] = 'Your shoes are ';
    if (((s as any).cheatVars ?? 0)?.['clothes_strength'] === 1) {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['shoes_repair'] = ((s as any).stat_texts['shoes_repair'] ?? 0) + ('in good shape.');
      qspCall(s, 'stat_display_compute', 'queue_msg', 'shoes_repair', 'neutral', 'pos');
    } else {
      if (qspFunc(s, 'shoes', 'is_immutable')) {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['shoes_repair'] = ((s as any).stat_texts['shoes_repair'] ?? 0) + ('in as good a shape as they can be.');
        qspCall(s, 'stat_display_compute', 'queue_msg', 'shoes_repair', 'neutral', 'const');
      } else {
        ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['repair_sum'] = ((s as any).temp_outfitVars['repair_sum'] ?? 0) + (Math.min(((s as any).PShoStrength ?? 0), ((s as any).PShoMaxStrength ?? 0)));
        ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['repair_max'] = ((s as any).temp_outfitVars['repair_max'] ?? 0) + (((s as any).PShoMaxStrength ?? 0));
        if (((s as any).PShoStrength ?? 0) < ((s as any).PShoMaxStrength ?? 0) / 10) {
          ((s as any).stat_texts = (s as any).stat_texts ?? {})['shoes_repair'] = ((s as any).stat_texts['shoes_repair'] ?? 0) + ('in bad shape.');
          qspCall(s, 'stat_display_compute', 'queue_msg', 'shoes_repair', 'v_neg');
          // TODO-QSP: gs 'stat_display_compute', 'queue_alert', $stat_texts['shoes_repair'], 'v_neg'
        } else {
          if (((s as any).PShoStrength ?? 0) < ((s as any).PShoMaxStrength ?? 0) / 2) {
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['shoes_repair'] = ((s as any).stat_texts['shoes_repair'] ?? 0) + ('starting to show wear and tear.');
            qspCall(s, 'stat_display_compute', 'queue_msg', 'shoes_repair', 'v_neg');
          } else {
            if (((s as any).PShoStrength ?? 0) < 3 * ((s as any).PShoMaxStrength ?? 0) / 4) {
              ((s as any).stat_texts = (s as any).stat_texts ?? {})['shoes_repair'] = ((s as any).stat_texts['shoes_repair'] ?? 0) + ('in good shape.');
              qspCall(s, 'stat_display_compute', 'queue_msg', 'shoes_repair', 'neutral', 'pos');
            } else {
              ((s as any).stat_texts = (s as any).stat_texts ?? {})['shoes_repair'] = ((s as any).stat_texts['shoes_repair'] ?? 0) + ('in perfect shape.');
              qspCall(s, 'stat_display_compute', 'queue_msg', 'shoes_repair', 'v_pos', 'pos');
            }
          }
        }
      }
    }
    ((s as any).stat_texts = (s as any).stat_texts ?? {})['outfit_repair'] = ((s as any).stat_texts['outfit_repair'] ?? 0) + (((s as any).stat_texts ?? 0)?.['shoes_repair'] + ' ');
  }
  ((s as any).stat_texts = (s as any).stat_texts ?? {})['coat_repair'] = '';
  if (((s as any).coatworntype ?? 0) !== 'none'  &&  ((s as any).coatworntype ?? 0) !== '') {
    ((s as any).stat_texts = (s as any).stat_texts ?? {})['coat_repair'] = 'Your coat is ';
    if (((s as any).cheatVars ?? 0)?.['clothes_strength'] === 1) {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['coat_repair'] = ((s as any).stat_texts['coat_repair'] ?? 0) + ('in good shape.');
      qspCall(s, 'stat_display_compute', 'queue_msg', 'coat_repair', 'neutral', 'pos');
    } else {
      if (qspFunc(s, 'coats', 'is_immutable')) {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['coat_repair'] = ((s as any).stat_texts['coat_repair'] ?? 0) + ('in as good a shape as it can be.');
        qspCall(s, 'stat_display_compute', 'queue_msg', 'coat_repair', 'neutral', 'const');
      } else {
        ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['repair_sum'] = ((s as any).temp_outfitVars['repair_sum'] ?? 0) + (Math.min(((s as any).PCoatStrength ?? 0), ((s as any).PCoatMaxStrength ?? 0)));
        ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['repair_max'] = ((s as any).temp_outfitVars['repair_max'] ?? 0) + (((s as any).PCoatMaxStrength ?? 0));
        if (((s as any).PCoatStrength ?? 0) < ((s as any).PCoatMaxStrength ?? 0) / 10) {
          ((s as any).stat_texts = (s as any).stat_texts ?? {})['coat_repair'] = ((s as any).stat_texts['coat_repair'] ?? 0) + ('in bad shape.');
          qspCall(s, 'stat_display_compute', 'queue_msg', 'coat_repair', 'v_neg');
          // TODO-QSP: gs 'stat_display_compute', 'queue_alert', $stat_texts['coat_repair'], 'v_neg'
        } else {
          if (((s as any).PCoatStrength ?? 0) < ((s as any).PCoatMaxStrength ?? 0) / 2) {
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['coat_repair'] = ((s as any).stat_texts['coat_repair'] ?? 0) + ('starting to show wear and tear.');
            qspCall(s, 'stat_display_compute', 'queue_msg', 'coat_repair', 'v_neg');
          } else {
            if (((s as any).PCoatStrength ?? 0) < 3 * ((s as any).PCoatMaxStrength ?? 0) / 4) {
              ((s as any).stat_texts = (s as any).stat_texts ?? {})['coat_repair'] = ((s as any).stat_texts['coat_repair'] ?? 0) + ('in good shape.');
              qspCall(s, 'stat_display_compute', 'queue_msg', 'coat_repair', 'neutral', 'pos');
            } else {
              ((s as any).stat_texts = (s as any).stat_texts ?? {})['coat_repair'] = ((s as any).stat_texts['coat_repair'] ?? 0) + ('in perfect shape.');
              qspCall(s, 'stat_display_compute', 'queue_msg', 'coat_repair', 'v_pos', 'pos');
            }
          }
        }
      }
    }
    ((s as any).stat_texts = (s as any).stat_texts ?? {})['outfit_repair'] = ((s as any).stat_texts['outfit_repair'] ?? 0) + (((s as any).stat_texts ?? 0)?.['coat_repair'] + ' ');
  }
  if (((s as any).stat_texts ?? 0)?.['outfit_repair'] !== '') {
    if (((s as any).temp_outfitVars ?? 0)?.['repair_max'] === 0) {
      ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['repair_icon'] = 'repair11';
    } else {
      ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['repair_index'] = (11 * (((s as any).temp_outfitVars ?? {})?.['repair_sum'] ?? 0) + (((s as any).temp_outfitVars ?? {})?.['repair_max'] ?? 0) / 2) / (((s as any).temp_outfitVars ?? {})?.['repair_max'] ?? 0);
      ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['repair_index'] = Math.min(Math.max(0, ((s as any).temp_outfitVars ?? 0)?.['repair_index']), 11);
      ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['repair_icon'] = 'repair' + qspUntranslated(s, "str(temp_outfitVars['repair_index'])", { location: "outfit" });
    }
  }
  if (((s as any).stat_texts ?? 0)?.['outfit_clean'] !== '') {
    if (((s as any).temp_outfitVars ?? 0)?.['wash_max'] === 0) {
      ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['clean_icon'] = 'wash11';
    } else {
      ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['wash_index'] = 11 - (11 * (((s as any).temp_outfitVars ?? {})?.['wash_sum'] ?? 0) + (((s as any).temp_outfitVars ?? {})?.['wash_max'] ?? 0) / 2) / (((s as any).temp_outfitVars ?? {})?.['wash_max'] ?? 0);
      ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['wash_index'] = Math.min(Math.max(0, ((s as any).temp_outfitVars ?? 0)?.['wash_index']), 11);
      ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['clean_icon'] = 'wash' + qspUntranslated(s, "str(temp_outfitVars['wash_index'])", { location: "outfit" });
    }
  }
  if (((s as any).stat_texts ?? 0)?.['clothes'] !== ''  ||  ((s as any).temp_outfitVars ?? 0)?.['clothes_style'] !== '') {
    // TODO-QSP: gs 'stat_display_compute', 'queue_msg', 'clothes', $stat_texts['clothes_color'], 'status/clothing/' ...
  }
  if (((s as any).stat_texts ?? 0)?.['panties'] !== '') {
    if (((s as any).pantyworntype ?? 0) === 'none') {
      // TODO-QSP: gs 'stat_display_compute', 'queue_msg', 'panties', $stat_texts['panties_color'], 'status/clothing/co...
    } else {
      if (((s as any).isprok ?? 0) === 0  &&  ((s as any).isprokp ?? 0) === 0  &&  ((s as any).mesec ?? 0) > 0  &&  (!((s as any).preg ?? 0))) {
        // TODO-QSP: gs 'stat_display_compute', 'queue_msg', 'panties', $stat_texts['panties_color'], 'status/clothing/pa...
      } else {
        // TODO-QSP: gs 'stat_display_compute', 'queue_msg', 'panties', $stat_texts['panties_color'], 'status/clothing/pa...
      }
    }
  }
  if (((s as any).stat_cfg ?? 0)?.['msg_display_mode'] !== 2) {
    ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['clo_paired'] = '';
    if (((s as any).temp_outfitVars ?? 0)?.['clean_icon'] !== '') {
      ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['clo_paired'] = ((s as any).temp_outfitVars['clo_paired'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: msg $stat_texts[\\u0027outfit_clean\\u0027] */ return s; }); return false;"><img src="images/system/icons/status/clothing/\' + $temp_outfitVars[\'clean_icon\'] + \'.png" title="' + ((s as any).stat_texts ?? 0)?.['outfit_clean'] + '" height="' + ((s as any).stat_cfg ?? 0)?.['menu_icon_height'] + '"></a>');
    }
    if (((s as any).temp_outfitVars ?? 0)?.['repair_icon'] !== '') {
      ((s as any).temp_outfitVars = (s as any).temp_outfitVars ?? {})['clo_paired'] = ((s as any).temp_outfitVars['clo_paired'] ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: msg $stat_texts[\\u0027outfit_repair\\u0027] */ return s; }); return false;"><img src="images/system/icons/status/clothing/\' + $temp_outfitVars[\'repair_icon\'] + \'.png" title="' + ((s as any).stat_texts ?? 0)?.['outfit_repair'] + '" height="' + ((s as any).stat_cfg ?? 0)?.['menu_icon_height'] + '"></a>');
    }
    if (((s as any).temp_outfitVars ?? 0)?.['clo_paired'] !== '') {
      // TODO-QSP: $sd_icons_4[] = '<div style="min-width:<<stat_cfg[''menu_icon_height'']>>px;text-align:center;">' + ...
    }
  }
  return;
  // TODO-QSP: end
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
    case 'undress':
      enterUndress(s, scene);
      break;
    case 'dress':
      enterDress(s, scene);
      break;
    case '_nude_backup':
      enterNudeBackup(s, scene);
      break;
    case 'backup':
      enterBackup(s, scene);
      break;
    case 'safe_backup':
      enterSafeBackup(s, scene);
      break;
    case 'transfer_backup':
      enterTransferBackup(s, scene);
      break;
    case 'safe_transfer_backup':
      enterSafeTransferBackup(s, scene);
      break;
    case 'remove_backup':
      enterRemoveBackup(s, scene);
      break;
    case 'restore':
      enterRestore(s, scene);
      break;
    case 'strip_all':
      enterStripAll(s, scene);
      break;
    case 'wear_last_worn':
      enterWearLastWorn(s, scene);
      break;
    case 'recover_lost_outfit':
      enterRecoverLostOutfit(s, scene);
      break;
    case 'get_hourly_mood_bonus':
      enterGetHourlyMoodBonus(s, scene);
      break;
    case 'CalcClothingBonus':
      enterCalcClothingBonus(s, scene);
      break;
    case 'CalcAccessoriesBonus':
      enterCalcAccessoriesBonus(s, scene);
      break;
    case 'stat':
      enterStat(s, scene);
      break;
    case 'reset_immutables':
      enterResetImmutables(s, scene);
      break;
    case 'increase_outfit_dirt':
      enterIncreaseOutfitDirt(s, scene);
      break;
    case 'increase_outfit_wear':
      enterIncreaseOutfitWear(s, scene);
      break;
    case 'heel_stat_skill_pain':
      enterHeelStatSkillPain(s, scene);
      break;
    case 'compute_stat_display':
      enterComputeStatDisplay(s, scene);
      break;
    default:
      enterDefault(s, scene);
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
