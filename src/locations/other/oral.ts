import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).tmpl = ((String((s as any).locArgs?.[1] ?? '') === 0) ? (10) : (((s as any).locArgs?.[1] ?? 0)));
  (s as any).frost = 0;
  scene.text(`Your one hand caress his ${((s as any).dick ?? '')} cm cock, while the other cups his balls as you lick his cock.`);
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
    scene.text(`${((s as any).boydesc ?? '')} closes his eyes in pleasure as he enjoys the caress of your soft lips.`);
    qspCall(s, 'arousal', 'bj', ((s as any).tmpl ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), ((s as any).locArgs?.[4] ?? 0), ((s as any).locArgs?.[5] ?? 0), 'sub');
  } else {
    if (((s as any).npc_rough ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
      if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
        (s as any).pcs_makeup = 0;
      }
      (s as any).pcs_hairbsh = 0;
      qspCall(s, 'arousal_funcs', 'stretch', 'oral', 1);
      scene.text(`${((s as any).boydesc ?? '')} grabs you by the hair and begins to mouth fuck you, the beating your throat takes causes tears to flow from your eyes.`);
      qspCall(s, 'arousal', 'bj', ((s as any).tmpl ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), ((s as any).locArgs?.[4] ?? 0), ((s as any).locArgs?.[5] ?? 0), 'sub', 'deepthroat', 'rough');
    } else {
      scene.text(`${((s as any).boydesc ?? '')} stares you in the eyes while you wrap your lips around his rock-hard cock.`);
      qspCall(s, 'arousal', 'bj', ((s as any).tmpl ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), ((s as any).locArgs?.[4] ?? 0), ((s as any).locArgs?.[5] ?? 0), 'sub');
    }
  }
  scene.text(`You hear ${((s as any).boydesc ?? '')} groaning loudly, you realize he must be edging and is ready to finish.`);
  (s as any).tmpl = undefined;
  scene.build();
}

function enter0(s: GameState, scene: SceneBuilder): void {
  (s as any).orgasm_or = 'yes';
  qspCall(s, 'arousal', 'bj', 10, 'sub');
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case '0':
      enter0(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const oral: LocationDef = {
  name: 'oral',
  region: 'other',
  enter: enter,
};
