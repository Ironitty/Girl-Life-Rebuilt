import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterChat(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
  scene.actions([
    { label: 'Stop talking', goto: ['albina_chat', 'chat_exit'] },
    { label: 'Make small talk', goto: ['albina_chat', 'small_talk2'] },
    { label: 'Talk about sex', goto: ['albina_sex_chat', 'sex_talk_start'] },
  ]);
  scene.build();
}

function enterChatExit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).region ?? 0) === 'pav') {
    scene.actions([{ label: 'Continue', goto: ['albinahome', 'bedroom'] }]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['albina_dorm', 'start'] }]);
    scene.actions([{ label: 'Continue', goto: ['albinahome', 'bedroom'] }]);
  }
  scene.build();
}

function enterSmallTalk(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Stop talking', goto: ['albina_chat', 'chat_exit'] },
    { label: 'Keep talking', goto: ['albina_chat', 'small_talk2'] },
    { label: 'Change the subject', goto: ['albina_chat', 'chat'] },
  ]);
  scene.build();
}

function enterSmallTalk2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
  scene.text('You chat about a variety of things, including school, music, clothes and what\'s been going on in Pavlovsk lately.');
  if (Math.floor(Math.random() * 2) + 1 === 1) {
    qspCall(s, 'albina_chat', 'topic_menu');
  } else {
    (s as any).AlbinaQW['chat_rand'] = Math.floor(Math.random() * 3) + 1;
    if (((s as any).AlbinaQW ?? 0)?.['chat_rand'] === 1) {
      qspCall(s, 'albina_chat', 'job_talk1');
    } else {
      qspCall(s, 'albina_chat', 'underwear_talk');
      if (((s as any).AlbinaQW ?? 0)?.['chat_rand'] === 3  &&  ((s as any).AlbinaQW ?? 0)?.['porn_talk'] !== '') {
        qspCall(s, 'albina_chat2', 'recurrent_porn_talk1');
      } else {
        qspCall(s, 'albina_chat', 'pube_talk2');
        qspCall(s, 'albina_chat', 'small_talk');
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'chat':
      enterChat(s, scene);
      break;
    case 'chat_exit':
      enterChatExit(s, scene);
      break;
    case 'small_talk':
      enterSmallTalk(s, scene);
      break;
    case 'small_talk2':
      enterSmallTalk2(s, scene);
      break;
    default:
      enterChat(s, scene);
      break;
  }
}

export const albina_chat: LocationDef = {
  name: 'albina_chat',
  title: 'You chat about a variety of things, including school, music,',
  region: 'other',
  enter: enter,
};
