import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterForest1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).boyAsex = 0;
  (s as any).dirty_dickA = 0;
  (s as any).boyAsexa = 0;
  qspCall(s, 'boyStat', '', ((s as any).locArgs?.[1] ?? 0));
  (s as any).horny_boyA = Math.floor(Math.random() * 91) + 0;
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/sex/mitka/mitkaforestsex1.\'+rand(1, 2)+\'.jpg');
  // TODO-QSP: dynamic text: Entering deeper into the thicket <<$boydesc>> comes up to you and Mira. He undre...
  scene.text(`Entering deeper into the thicket ${((s as any).boydesc ?? 0)} comes up to you and Mira. He undresses you both and makes you kneel before him…`);
  (s as any).huntsexa = Math.floor(Math.random() * 3) + 1;
  if (((s as any).huntsexa ?? 0) === 1) {
    // TODO-QSP: act 'Suck': gt 'mitkasex', 'forestOral1_1'
  }
  if (((s as any).huntsexa ?? 0) === 2) {
    // TODO-QSP: act 'Suck': gt 'mitkasex', 'forestOral1_2'
  }
  if (((s as any).huntsexa ?? 0) === 3) {
    // TODO-QSP: act 'Suck': gt 'mitkasex', 'forestOral1_3'
  }
  scene.build();
}

function enterForest2(s: GameState, scene: SceneBuilder): void {
  (s as any).boyAsex = 0;
  (s as any).boyBsex = 0;
  (s as any).dirty_dickA = 0;
  (s as any).dirty_dickB = 0;
  (s as any).boyAsexa = 0;
  (s as any).boyBsexa = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).stat['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (1);
  (s as any).temp_ms = Math.floor(Math.random() * 2) + 1;
  if (((s as any).ARGS ?? 0)[1] === 1) {
    if (((s as any).temp_ms ?? 0) === 1) {
      qspCall(s, 'boyStat', 'A63');
    }
    if (((s as any).temp_ms ?? 0) === 2) {
      qspCall(s, 'boyStat', 'A61');
    }
  } else {
    if (((s as any).temp_ms ?? 0) === 1) {
      qspCall(s, 'boyStat', 'A63');
    }
    if (((s as any).temp_ms ?? 0) === 2) {
      qspCall(s, 'boyStat', 'A62');
    }
    if (((s as any).ARGS ?? 0)[1] === 3) {
      if (((s as any).temp_ms ?? 0) === 1) {
        qspCall(s, 'boyStat', 'A61');
      }
      if (((s as any).temp_ms ?? 0) === 2) {
        qspCall(s, 'boyStat', 'A62');
      }
    }
    (s as any).horny_boyA = Math.floor(Math.random() * 91) + 0;
    (s as any).horny_boyB = Math.floor(Math.random() * 91) + 0;
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/mitka/mitkaforestsex2.jpg');
    scene.text('Entering deeper into the thicket the guys come up to you and Mira. They undress you both and make you kneel before them…');
    scene.actions([
      { label: 'Suck', goto: ['mitkasex', 'forestOral2_1'] },
    ]);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'forest1':
      enterForest1(s, scene);
      break;
    case 'forest2':
      enterForest2(s, scene);
      break;
    default:
      enterForest1(s, scene);
      break;
  }
}

export const mitkasex: LocationDef = {
  name: 'mitkasex',
  title: 'Entering deeper into the thicket the guys come up to you and',
  region: 'other',
  enter: enter,
};
