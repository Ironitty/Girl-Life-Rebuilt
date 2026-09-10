import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterLeave(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'end');
  if (((s as any).region ?? 0) === 'city') {
    scene.actions([{ label: 'Continue', goto: ['albina_dorm', 'start'] }]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['albinahome', 'bedroom'] }]);
  }
  scene.build();
}

function enterKissing1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A23');
  qspCall(s, 'arousal', 'kiss', 3, 'no_orgasm_msg', 'lesbian');
  qspCall(s, 'arousal', 'kiss', (-5), 'no_orgasm_msg', 'lesbian');
  qspCall(s, 'arousal', 'foreplay', (-5), 'no_orgasm_msg', 'lesbian');
  scene.img('images/shared/sex/lesbian/kiss2.mp4');
  scene.text('You kiss Albina deeply, pulling her face into yours and drinking in the taste of her tongue as your breasts smoosh against hers. Her hands wander, snaking down your back to grab at your ass.');
  if (qspFunc(s, 'pcs_has_attr', 'body_ass_flat')) {
    scene.text('"You need to do some squats," she giggles. "I want more to play with back here."');
  } else {
    scene.text('"Mmmm..." she moans. "You have a nice ass..."');
    if (qspFunc(s, 'pcs_has_attr', 'body_ass_big')) {
      scene.text('"Mmmm- fuck~!" she moans. "Is this what it feels like for guys when they grab my ass?"');
    } else {
      scene.text('"Mmmm- fuck~!" she moans. "Your ass is as big as mine!"');
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([
        { label: 'Ask her to take your virginity', goto: ['albina_sex_scenes', 'virgin_take1'] },
      ]);
    } else {
      scene.actions([
        { label: 'Ask her to fuck you with a strapon', goto: ['albina_sex_scenes', 'virgin_take1'] },
      ]);
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'leave':
      enterLeave(s, scene);
      break;
    case 'kissing1':
      enterKissing1(s, scene);
      break;
    default:
      enterLeave(s, scene);
      break;
  }
}

export const albina_sex_scenes: LocationDef = {
  name: 'albina_sex_scenes',
  title: 'You kiss Albina deeply, pulling her face into yours and drin',
  region: 'other',
  enter: enter,
};
