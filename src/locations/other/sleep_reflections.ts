import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterEventCheck(s: GameState, scene: SceneBuilder): void {
  if (((s as any).test_var ?? 0) === 1) {
    // TODO-QSP: $sleep_events_priority[] = 'gs ''sleep_reflections'', ''test_reflection'' '
  }
  if (((s as any).daystart ?? 0) >= ((s as any).anushkaQW ?? 0)?.['sleep_reflection_day'] + 7) {
    if (((s as any).anushkaQW ?? 0)?.['sveta_love'] === 10) {
      // TODO-QSP: $sleep_events_priority[] = 'gs ''sleep_reflections'', ''anushka_love'' '
    }
  }
  if (((s as any).daystart ?? 0) >= ((s as any).artemQW ?? 0)?.['sleep_reflection_day'] + 7) {
    if (((s as any).artemQW ?? 0)?.['bf'] >= 1  &&  ((s as any).artemQW ?? 0)?.['love'] <= 0) {
      // TODO-QSP: $sleep_events_priority[] = 'gs ''sleep_reflections'', ''artem_love'' '
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterEnd(s: GameState, scene: SceneBuilder): void {
  ((s as any).sleepVars = (s as any).sleepVars ?? {})['sleep_reflection_day'] = ((s as any).daystart ?? 0);
  qspCall(s, 'pre_sleep_events', 'event_end');
  // TODO-QSP: end
  scene.build();
}

function enterTestReflection(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === 0) {
    // TODO-QSP: gt 'sleep_reflections', $ARGS[0], 1
  }
  scene.text('This is a test reflection!');
  // TODO-QSP: dynamic text: <<$pcs_nickname>> is thinking deeply about "TEST_PERSON".
  scene.text(`${((s as any).pcs_nickname || '')} is thinking deeply about "TEST_PERSON".`);
  scene.text('Wow, what interesting thoughts!');
  // TODO-QSP: end
  scene.actions([
    { label: 'Positive', handler: (st: GameState) => {
    (st as any).test_var = 2;
    scene.text('You think positive things about "TEST_PERSON".');
    scene.actions([
      { label: 'Go to sleep', handler: (st: GameState) => {
    // TODO-QSP: killvar 'test_var'
    qspCall(st, 'sleep_reflections', 'end');
  } },
    ]);
  } },
    { label: 'Negative', handler: (st: GameState) => {
    (st as any).test_var = (-1);
    scene.text('You think negative things about "TEST_PERSON".');
    scene.actions([
      { label: 'Go to sleep', handler: (st: GameState) => {
    // TODO-QSP: killvar 'test_var'
    qspCall(st, 'sleep_reflections', 'end');
  } },
    ]);
  } },
    { label: 'Ignore', handler: (st: GameState) => {
    // TODO-QSP: killvar 'test_var'
    qspCall(st, 'sleep_reflections', 'end');
  } },
  ]);
  scene.build();
}

function enterAnushkaLove(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === 0) {
    // TODO-QSP: gt 'sleep_reflections', $ARGS[0], 1
  }
  ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['sleep_reflection_day'] = ((s as any).daystart ?? 0);
  scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/set1/pose4.jpg');
  scene.text('As you drift off to sleep, you start thinking about the time you\'ve been spending with Anushka and how you feel around her. She\'s one of your best friends, but something tugs at you that it might be something more… Perhaps you\'re falling in love with her?');
  // TODO-QSP: end
  scene.actions([
    { label: 'You love her', handler: (st: GameState) => {
    ((st as any).anushkaQW = (st as any).anushkaQW ?? {})['sveta_love'] = ((st as any).anushkaQW['sveta_love'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('The more you think about it, the more you think about how her hair smells, how soft her skin feels under your touch, the sound of her soft laugh and how cute she looks when she has that trouble making smirk on her lips…');
    scene.text('You suddenly realize that you\'ve fallen in love with her, but what does this mean for the future? She\'s made it pretty clear she\'s not interested in being romantically involved with anyone, but maybe you can change her mind?');
    scene.text('You drift off to sleep wondering what your future with Anushka will hold.');
    scene.actions([
      { label: 'Go to sleep', handler: (st: GameState) => {
    qspCall(st, 'sleep_reflections', 'end');
  } },
    ]);
  } },
    { label: 'You\'re just friends', handler: (st: GameState) => {
    ((st as any).anushkaQW = (st as any).anushkaQW ?? {})['sveta_love'] = (-20);
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('You\'re not in love with her. You love spending time with her, but she\'s nothing more than a friend.');
    scene.actions([
      { label: 'Go to sleep', handler: (st: GameState) => {
    qspCall(st, 'sleep_reflections', 'end');
  } },
    ]);
  } },
    { label: 'Ignore', handler: (st: GameState) => {
    qspCall(st, 'sleep_reflections', 'end');
  } },
  ]);
  scene.build();
}

function enterArtemLove(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === 0) {
    // TODO-QSP: gt 'sleep_reflections', $ARGS[0], 1
  }
  ((s as any).artemQW = (s as any).artemQW ?? {})['sleep_reflection_day'] = ((s as any).daystart ?? 0);
  scene.img('images/characters/shared/headshots_main/big2.jpg');
  scene.text('As you drift off to sleep, you start thinking about the time you\'ve been spending with Artem and how you agreed to be his girlfriend. You have no doubt that he\'s in love with you, but you\'re not sure how you feel about him. You like and care about him, but do you love him?');
  // TODO-QSP: end
  scene.actions([
    { label: 'Yes', handler: (st: GameState) => {
    ((st as any).artemQW = (st as any).artemQW ?? {})['love'] = 1;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('The more you think about it, the more you realize you\'ve fallen in love with him. You finally drift off to sleep imagining your life with Artem.');
    scene.actions([
      { label: 'Go to sleep', handler: (st: GameState) => {
    qspCall(st, 'sleep_reflections', 'end');
  } },
    ]);
  } },
    { label: 'No', handler: (st: GameState) => {
    ((st as any).artemQW = (st as any).artemQW ?? {})['love'] = (-1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You love spending time with him and think he\'s a great guy, but you don\'t love him. You finally drift off to sleep wondering what the future will hold for you and Artem.');
    scene.actions([
      { label: 'Go to sleep', handler: (st: GameState) => {
    qspCall(st, 'sleep_reflections', 'end');
  } },
    ]);
  } },
    { label: 'Ignore', handler: (st: GameState) => {
    qspCall(st, 'sleep_reflections', 'end');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'event_check':
      enterEventCheck(s, scene);
      break;
    case 'end':
      enterEnd(s, scene);
      break;
    case 'test_reflection':
      enterTestReflection(s, scene);
      break;
    case 'anushka_love':
      enterAnushkaLove(s, scene);
      break;
    case 'artem_love':
      enterArtemLove(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const sleep_reflections: LocationDef = {
  name: 'sleep_reflections',
  title: 'This is a test reflection!',
  region: 'other',
  enter: enter,
};
