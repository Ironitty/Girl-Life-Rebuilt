import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hunterVars ?? 0)?.['Rape'] === 2) {
    scene.img('images/locations/gadukino/sex/hunter/backwaterrelax.jpg');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).hunterVars['Rape'] = 3;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', goto: ['hunters', 'start'] },
    ]);
  } else {
    if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).hunterVars ?? 0)?.['outside'] === 1  &&  ((s as any).hunterVars ?? 0)?.['available'] === 1  &&  (Math.floor(Math.random() * 10) + 1) === 1) {
      // TODO-QSP: gt 'gad_backwater', 'hunter' else gt 'gad_backwater', 'alone'
    }
  }
  scene.build();
}

function enterAlone(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Backwater</b></center>');
  if (((s as any).month ?? 0) >= 4  &&  ((s as any).month ?? 0) <= 10) {
    scene.img('images/locations/gadukino/hunters/\'+iif(DayStage < 4, \'backwater.jpg\', \'backwater_night.jpg\')+\'');
  } else {
    scene.img('images/locations/gadukino/hunters/\'+iif(DayStage < 4, \'backwater_winter.jpg\', \'backwater_winter_night.jpg\')+\'');
  }
  scene.text('A small creek with relatively clean water. If the weather is warm, you can clean yourself up. Also, if your clothes are dirty, you can wash them here.');
  if (((s as any).clothesAtLocation ?? 0) === 1) {
    scene.text('Your clothes lie on the shore.');
  }
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    scene.actions([
      { label: 'Wash self', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/\'+iif($pantyworntype = \'none\', \'backwaterswim2.jpg\', \'backwaterswim1.jpg\')+\'');
    (s as any).noshampoo = 1;
    qspCall(s, 'din_van', 'showerdin');
    (s as any).face_write = 0;
    (s as any).body_write = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'mood', 'raise', 'tiny');
    if (((s as any).willday_bath ?? 0) !== ((s as any).daystart ?? 0)) {
      (s as any).willday_bath = ((s as any).daystart ?? 0);
      (s as any).pcs_willpwr = ((s as any).pcs_willpwr ?? 0) + (1);
    }
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
    if (((s as any).hunterVars ?? 0)?.['Rape'] === 1) {
      (s as any).hunterVars['Rape'] = 2;
    }
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the water.');
    }
    scene.actions([
      { label: 'Finish', goto: ['gad_backwater', ''] },
    ]);
  } },
    ]);
  }
  if (((s as any).cumloc ?? 0)[11]+((s as any).cumloc ?? 0)[12]+((s as any).cumloc ?? 0)[16] > 0) {
    scene.actions([
      { label: 'Clean the sperm from your face (0:10)', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/backwaterswim1.jpg');
    (s as any).pcs_makeup = 1;
    (s as any).cumspclnt = 9;
    qspCall(s, 'cum_cleanup', '');
    (s as any).cumspclnt = 13;
    qspCall(s, 'cum_cleanup', '');
    if (((s as any).pcs_sweat ?? 0) > 19) {
      (s as any).pcs_sweat = ((s as any).pcs_sweat ?? 0) - (5);
    }
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    if (((s as any).hunterVars ?? 0)?.['Rape'] === 1) {
      (s as any).hunterVars['Rape'] = 2;
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', goto: ['gad_backwater', ''] },
    ]);
  } },
    ]);
  }
  if (((s as any).body_write ?? 0) > 0  ||  ((s as any).face_write ?? 0) > 0) {
    scene.actions([
      { label: 'Wash the writings off your body (0:10)', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/wash1.jpg');
    (s as any).body_write = 0;
    (s as any).face_write = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', goto: ['gad_backwater', ''] },
    ]);
  } },
    ]);
  }
  if (((s as any).cumloc ?? 0)[2]+((s as any).cumloc ?? 0)[5]+((s as any).cumloc ?? 0)[6]+((s as any).cumloc ?? 0)[7] > 0) {
    scene.actions([
      { label: 'Wipe the cum off your clothes (0:10)', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/cumwash.jpg');
    (s as any).cumspclnt = 6;
    qspCall(s, 'cum_cleanup', '');
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    if (((s as any).hunterVars ?? 0)?.['Rape'] === 1) {
      (s as any).hunterVars['Rape'] = 2;
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', goto: ['gad_backwater', ''] },
    ]);
  } },
    ]);
  }
  if (((s as any).cumsumbod ?? 0)-((s as any).cumsumvag ?? 0)-((s as any).cumsumass ?? 0) > 0  ||  ((s as any).pcs_sweat ?? 0) > 20) {
    scene.actions([
      { label: 'Quick wash (0:15)', handler: (st: GameState) => {
    scene.img('images/pc/activities/facewash.jpg');
    (s as any).cumspclnt = 4;
    qspCall(s, 'cum_cleanup', '');
    if (((s as any).pcs_sweat ?? 0) < 30) {
      (s as any).pcs_sweat = 15 + ((s as any).rand ?? 0)(0, 4);
    }
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    if (((s as any).hunterVars ?? 0)?.['Rape'] === 1) {
      (s as any).hunterVars['Rape'] = 2;
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', goto: ['gad_backwater', ''] },
    ]);
  } },
    ]);
  }
  if ((!((s as any).clothesAtLocation ?? 0))) {
    if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).temper ?? 0) >= 15) {
      scene.actions([
        { label: 'Get undressed', handler: (st: GameState) => {
    if (((s as any).hunterVars ?? 0)?.['KnowSlut'] > 0  ||  (((s as any).hunterVars ?? 0)?.['outside'] === 0  &&  ((s as any).hunterVars ?? 0)?.['available'] === 0)  ||  (((s as any).hour ?? 0) < 7  ||  ((s as any).hour ?? 0) > 22)  ||  (((s as any).pcs_inhib ?? 0) >= 25  ||  ((s as any).trait_vars ?? 0)?.['exhibitionist'] > 1)) {
      scene.img('images/locations/gadukino/hunters/\'+iif(PCloSkirt > 0, \'backwaterundress_ski.jpg\', \'backwaterundress.jpg\')+\'');
      scene.text('You do not hesitate to get undressed, not caring if anyone is watching.');
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      if (((s as any).hunterVars ?? 0)?.['Rape'] === 1) {
        (s as any).hunterVars['Rape'] = 2;
      }
      qspCall(s, 'outfit', 'strip_all', 'gad_backwater');
      scene.actions([
        { label: 'Back', goto: ['gad_backwater', ''] },
      ]);
    } else {
      scene.img('images/locations/gadukino/hunters/noundress.jpg');
      scene.text('You hesitate to get undressed. What if someone suddenly sees you?');
      scene.actions([
        { label: 'Back', goto: ['gad_backwater', ''] },
      ]);
    }
  } },
      ]);
    } else {
      scene.text('It\'s too cold to undress. Maybe you should bathe inside the hut');
    }
  } else {
    if (((s as any).clothingworntype ?? 0) !== 'nude') {
      scene.actions([
        { label: 'Pick up your clothes', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'recover_lost_outfit', 'gad_backwater');
  }, goto: ['gad_backwater', ''] },
      ]);
    } else {
      scene.actions([
        { label: 'Get dressed', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'recover_lost_outfit', 'gad_backwater', 1);
    qspCall(s, 'underwear', 'wear');
  }, goto: ['gad_backwater', ''] },
      ]);
    }
  }
  scene.actions([
    { label: 'Go back to the hut', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).hunterVars['refuse'] = 0;
  }, goto: ['gad_swamp_yard', 'start'] },
  ]);
  scene.build();
}

function enterHunter(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Backwater</b></center>');
  scene.img('images/locations/gadukino/hunters/hunter_looks.jpg');
  scene.text('While cleaning yourself in the backwater, you suddenly feel that you are not alone here. Turning around, you see one of the hunters. He\'s just standing there watching you. His camouflage is almost indistinguishable compared to the bushes and trees.');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  if (((s as any).clothesAtLocation ?? 0) === 1) {
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/swampbackwaternude1.jpg');
    qspCall(s, 'underwear', 'wear');
    qspCall(s, 'outfit', 'recover_lost_outfit', 'gad_backwater', 1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.actions([
      { label: 'Further', goto: ['gad_backwater', ''] },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Hide', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/swampbackwaternude2.jpg');
    scene.text('Covering your breasts and crotch, you jump into the nearest bush. In your state of fear and confusion, you start scanning the area, but you don\'t see anyone there. So you quickly run back towards the cabin.');
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    scene.actions([
      { label: 'Go back to the hut', goto: ['gad_swamp_yard', 'start'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Stay naked', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/swampbackwaternude3.jpg');
    scene.text('You decide that you have nothing to be afraid of and continue on completely nude. The hunter looks at you for a minute or so, and suddenly, you hear a "Hmph", him turning around and going away.');
    (s as any).hunterVars['slut'] = ((s as any).hunterVars['slut'] ?? 0) + (1);
    (s as any).hunterVars['knowday'] = ((s as any).day ?? 0);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', goto: ['gad_backwater', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'alone':
      enterAlone(s, scene);
      break;
    case 'hunter':
      enterHunter(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gad_backwater: LocationDef = {
  name: 'gad_backwater',
  title: '<center><b>Backwater</b></center>',
  region: 'gadukino',
  locationType: 'secluded',
  enter: enter,
};
