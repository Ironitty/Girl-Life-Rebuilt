import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterSetUpAccount(s: GameState, scene: SceneBuilder): void {
  (s as any).ml_online['account'] = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  // TODO-QSP: gs 'internet_mobile', 'use_internet', $access['subscription'], 10
  qspCall(s, 'stat', '');
  scene.text('You log into Youtube to set up a channel for your music. You can upload videos or live stream, but you will need to open a bank account if you want to receive any tips from viewers of your stream.');
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'music_actions', 'available_actions');
  } },
  ]);
  scene.build();
}

function enterLiveStream(s: GameState, scene: SceneBuilder): void {
  (s as any).ml_streaming['times_streamed'] = ((s as any).ml_streaming['times_streamed'] ?? 0) + (1);
  qspCall(s, 'music_onlinemusic', 'stream_interruptions');
  if (((s as any).ml_no_interruption ?? 0) !== 0) {
    (s as any).ml_streamtime = 60;
    qspCall(s, 'music_onlinemusic', 'streaming_stats');
    if (((s as any).mc_inventory ?? 0)?.['tech_computer'] === 1  &&  ((s as any).mc_inventory ?? 0)?.['tech_webcam'] === 1  &&  ((s as any).location_type ?? 0) === 'private') {
      scene.img('images/pc/activities/music/gomixer_hero.jpg');
      scene.text('You set up your webcamera and start the streaming app on your computer. After settling down comfortably, you start to stream.');
      // TODO-QSP: dynamic text: Your fans tipped you <<$func('money', 'string_profit', ml_superchats)>> for your...
      scene.text(`Your fans tipped you ${qspFunc(s, 'money', 'string_profit', ((s as any).ml_superchats ?? 0))} for your performance.`);
    } else {
      scene.img('images/pc/activities/music/gomixer_hero.jpg');
      scene.text('You set up your phone on a little tri-pod and log into your account. After settling down comfortably, you start to stream.');
      // TODO-QSP: dynamic text: Your fans tipped you <<$func('money', 'string_profit', ml_superchats)>> for your...
      scene.text(`Your fans tipped you ${qspFunc(s, 'money', 'string_profit', ((s as any).ml_superchats ?? 0))} for your performance.`);
    }
  } else {
    (s as any).ml_streamtime = Math.floor(Math.random() * 60) + 1;
    qspCall(s, 'music_onlinemusic', 'streaming_stats');
  }
  if (((s as any).bankAccount ?? 0) === 0) {
    // TODO-QSP: dynamic text: You have earned <b><<$func('money', 'string_profit', ml_streaming['unclaimed_ear...
    scene.text(`You have earned <b>${qspFunc(s, 'money', 'string_profit', ((s as any).ml_streaming ?? 0)?.['unclaimed_earnings'])}</b> so far, but you need to open a bank account before you can receive the money.`);
  } else {
    // TODO-QSP: dynamic text: You have <b><<$func('money', 'string_profit', ml_streaming['unclaimed_earnings']...
    scene.text(`You have <b>${qspFunc(s, 'money', 'string_profit', ((s as any).ml_streaming ?? 0)?.['unclaimed_earnings'])}</b> on your account.`);
    scene.actions([
      { label: 'Stop the stream and transfer the money to your bank account', handler: (st: GameState) => {
    // TODO-QSP: gs 'money', 'earn', ml_streaming['unclaimed_earnings'], 'bank'
    (s as any).ml_streaming['unclaimed_earnings'] = 0;
    qspCall(s, 'music_onlinemusic', 'finish', 'streaming');
  } },
    ]);
  }
  scene.actions([
    { label: 'Stop the stream', handler: (st: GameState) => {
    qspCall(s, 'music_onlinemusic', 'finish', 'streaming');
  } },
  ]);
  scene.build();
}

function enterRecordSong(s: GameState, scene: SceneBuilder): void {
  (s as any).recording_time = 30;
  (s as any).performed_minutes = 15;
  qspCall(s, 'music_onlinemusic', 'recording_interruptions');
  if (((s as any).ml_no_interruption ?? 0) !== 0) {
    scene.img('images/pc/activities/music/phonerecording.jpg');
    scene.text('You set up your phone and settle down comfortably to record a song. After several tries you finally end up with a version you are content with and upload it to your account.');
  }
  qspCall(s, 'music_onlinemusic', 'recording_stats');
  if (((s as any).ml_online ?? 0)?.['account'] === 0  ||  ((s as any).access ?? 0) === 'denied') {
    return;
  }
  if (((s as any).pcs_inhib ?? 0) < 10) {
    qspCall(s, 'willpower', 'skill', 'perform', 'self', 'hard');
  } else {
    qspCall(s, 'willpower', 'skill', 'perform', 'self', 'medium');
    if (((s as any).pcs_inhib ?? 0) < 30) {
      qspCall(s, 'willpower', 'skill', 'perform', 'self', 'easy');
    } else {
      (s as any).will_cost = 0;
    }
    (s as any).will_cost = (((s as any).will_cost ?? 0) * 2) - (((s as any).pcs_perform ?? 0));
    if (((s as any).will_cost ?? 0) <= 0) {
      scene.actions([
        { label: 'Upload music', handler: (st: GameState) => {
    // TODO-QSP: gt 'music_onlinemusic', 'uploadmusic', 'recording'
  } },
      ]);
    } else {
      qspCall(s, 'willpower', 'pay', 'self');
      scene.actions([
        { label: 'Upload music', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
        { label: 'Upload music', handler: (st: GameState) => {
    // TODO-QSP: gt 'music_onlinemusic', 'uploadmusic', 'recording'
  } },
      ]);
    }
  }
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'music_onlinemusic', 'finish', 'recording');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'set_up_account':
      enterSetUpAccount(s, scene);
      break;
    case 'live_stream':
      enterLiveStream(s, scene);
      break;
    case 'record_song':
      enterRecordSong(s, scene);
      break;
    default:
      enterSetUpAccount(s, scene);
      break;
  }
}

export const music_onlinemusic: LocationDef = {
  name: 'music_onlinemusic',
  title: 'You log into Youtube to set up a channel for your music. You',
  region: 'other',
  locationType: 'public_outdoors',
  description: ['You log into Youtube to set up a channel for your music. You can upload videos or live stream, but you will need to open a bank account if you want to receive any tips from viewers of your stream.'],
  enter: enter,
};
