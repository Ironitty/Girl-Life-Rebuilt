import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterSetUpAccount(s: GameState, scene: SceneBuilder): void {
  ((s as any).ml_online = (s as any).ml_online ?? {})['account'] = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'internet_mobile', 'use_internet', (((s as any).access ?? 0)?.['subscription']), 10);
  qspCall(s, 'stat', '');
  scene.text('You log into Youtube to set up a channel for your music. You can upload videos or live stream, but you will need to open a bank account if you want to receive any tips from viewers of your stream.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'music_actions', '');
  } },
  ]);
  scene.build();
}

function enterLiveStream(s: GameState, scene: SceneBuilder): void {
  ((s as any).ml_streaming = (s as any).ml_streaming ?? {})['times_streamed'] = ((s as any).ml_streaming['times_streamed'] ?? 0) + (1);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStreamInterruptions(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).ml_no_interruption ?? 0) !== 0) {
    (s as any).ml_streamtime = 60;
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStreamingStats(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).mc_inventory ?? 0)?.['tech_computer'] === 1  &&  ((s as any).mc_inventory ?? 0)?.['tech_webcam'] === 1  &&  ((s as any).location_type ?? 0) === 'private') {
      scene.img('images/pc/activities/music/gomixer_hero.jpg');
      scene.text('You set up your webcamera and start the streaming app on your computer. After settling down comfortably, you start to stream.');
      // TODO-QSP: dynamic text: Your fans tipped you <<$func(''money'', ''string_profit'', ml_superchats)>> for ...
      scene.text(`Your fans tipped you ${qspFunc(s, 'money', 'string_profit', ((s as any).ml_superchats ?? ''))} for your performance.`);
    } else {
      scene.img('images/pc/activities/music/gomixer_hero.jpg');
      scene.text('You set up your phone on a little tri-pod and log into your account. After settling down comfortably, you start to stream.');
      // TODO-QSP: dynamic text: Your fans tipped you <<$func(''money'', ''string_profit'', ml_superchats)>> for ...
      scene.text(`Your fans tipped you ${qspFunc(s, 'money', 'string_profit', ((s as any).ml_superchats ?? ''))} for your performance.`);
    }
  } else {
    (s as any).ml_streamtime = (Math.floor(Math.random() * 60) + 1);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStreamingStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if ((!((s as any).bankAccount ?? 0))) {
    // TODO-QSP: dynamic text: You have earned <b><<$func(''money'', ''string_profit'', ml_streaming[''unclaime...
    scene.text(`You have earned <b>${qspFunc(s, 'money', 'string_profit', (((s as any).ml_streaming ?? 0)?.['unclaimed_earnings'] ?? ''))}</b> so far, but you need to open a bank account before you can receive the money.`);
  } else {
    // TODO-QSP: dynamic text: You have <b><<$func(''money'', ''string_profit'', ml_streaming[''unclaimed_earni...
    scene.text(`You have <b>${qspFunc(s, 'money', 'string_profit', (((s as any).ml_streaming ?? 0)?.['unclaimed_earnings'] ?? ''))}</b> on your account.`);
    scene.actions([
      { label: 'Stop the stream and transfer the money to your bank account', handler: (st: GameState) => {
    qspCall(st, 'money', 'earn', (((st as any).ml_streaming ?? 0)?.['unclaimed_earnings']), 'bank');
    ((st as any).ml_streaming = (st as any).ml_streaming ?? {})['unclaimed_earnings'] = 0;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 'streaming']; enterFinish(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Stop the stream', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 'streaming']; enterFinish(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterRecordSong(s: GameState, scene: SceneBuilder): void {
  (s as any).recording_time = 30;
  (s as any).performed_minutes = 15;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRecordingInterruptions(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).ml_no_interruption ?? 0) !== 0) {
    scene.img('images/pc/activities/music/phonerecording.jpg');
    scene.text('You set up your phone and settle down comfortably to record a song. After several tries you finally end up with a version you are content with and upload it to your account.');
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRecordingStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).ml_online ?? 0)?.['account'] === 0  ||  ((s as any).access ?? 0) === 'denied') {
    return;
  }
  if (((s as any).pcs_inhib ?? 0) < 10) {
    qspCall(s, 'willpower', 'skill', 'perform', 'self', 'hard');
  } else {
    if (((s as any).pcs_inhib ?? 0) < 20) {
      qspCall(s, 'willpower', 'skill', 'perform', 'self', 'medium');
    } else {
      if (((s as any).pcs_inhib ?? 0) < 30) {
        qspCall(s, 'willpower', 'skill', 'perform', 'self', 'easy');
      } else {
        (s as any).will_cost = 0;
      }
    }
  }
  (s as any).will_cost = (((s as any).will_cost ?? 0) * 2) - (((s as any).pcs_perform ?? 0));
  if (((s as any).will_cost ?? 0) <= 0) {
    scene.actions([
      { label: 'Upload music', goto: ['music_onlinemusic', 'uploadmusic', 'recording'] },
    ]);
  } else {
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Upload music', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      qspCall(s, 'willpower', 'pay', 'self');
      scene.actions([
        { label: 'Upload music', goto: ['music_onlinemusic', 'uploadmusic', 'recording'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'music_onlinemusic', '');
  } },
  ]);
  scene.build();
}

function enterEditSong(s: GameState, scene: SceneBuilder): void {
  scene.img('images/pc/activities/music/editmusic.mp4');
  scene.text('You plug in your home studio kit and start up the recording software. After several tries you finally end up with a version you are content with.');
  scene.text('The next hour just flies by as you edit the video and the audio, trying to increase the quality of the recording as much as you can');
  (s as any).minut = ((s as any).minut ?? 0) + 90;
  qspCall(s, 'exp_gain', 'vokal', (Math.floor(Math.random() * 3) + 1));
  if (((s as any).perform_lvl ?? 0) < 35) {
    qspCall(s, 'exp_gain', 'perform', (Math.floor(Math.random() * 3) + 1));
  }
  if (((s as any).musicprod_lvl ?? 0) < 35) {
    qspCall(s, 'exp_gain', 'musicprod', (Math.floor(Math.random() * 3) + 1));
  }
  ((s as any).ml_performance = (s as any).ml_performance ?? {})['performed_minutes'] = ((s as any).ml_performance['performed_minutes'] ?? 0) + (15);
  ((s as any).ml_performance = (s as any).ml_performance ?? {})['total_time_performed'] = ((s as any).ml_performance['total_time_performed'] ?? 0) + (15);
  ((s as any).ml_onlinesong_hotcat = (s as any).ml_onlinesong_hotcat ?? {})[String((s as any).ml_onlinesongcount ?? 0)] = ((s as any).pcs_hotcat ?? 0);
  if (((s as any).ml_guitar ?? 0)?.['hasguitar'] === 1) {
    ((s as any).ml_onlinesong_skilllevel = (s as any).ml_onlinesong_skilllevel ?? {})[String((s as any).ml_onlinesongcount ?? 0)] = ((s as any).pcs_instrmusic ?? 0) + ((s as any).pcs_vokal ?? 0) + ((s as any).pcs_perform ?? 0);
    ((s as any).ml_onlinesong_freshness = (s as any).ml_onlinesong_freshness ?? {})[String((s as any).ml_onlinesongcount ?? 0)] = ((s as any).pcs_instrmusic ?? 0) + ((s as any).pcs_vokal ?? 0) + ((s as any).pcs_perform ?? 0) + ((((s as any).pcs_hotcat ?? 0)-4)*10);
    qspCall(s, 'exp_gain', 'instrmusic', (Math.floor(Math.random() * 3) + 1));
  } else {
    ((s as any).ml_onlinesong_skilllevel = (s as any).ml_onlinesong_skilllevel ?? {})[String((s as any).ml_onlinesongcount ?? 0)] = (((s as any).pcs_vokal ?? 0) * 2) + ((s as any).pcs_perform ?? 0);
    ((s as any).ml_onlinesong_freshness = (s as any).ml_onlinesong_freshness ?? {})[String((s as any).ml_onlinesongcount ?? 0)] = (((s as any).pcs_vokal ?? 0) * 2) + ((s as any).pcs_perform ?? 0) + ((((s as any).pcs_hotcat ?? 0)-4)*10);
  }
  ((s as any).ml_onlinesong_lastcalcday = (s as any).ml_onlinesong_lastcalcday ?? {})[String((s as any).ml_onlinesongcount ?? 0)] = ((s as any).daystart ?? 0);
  ((s as any).ml_onlinesong_uploaded = (s as any).ml_onlinesong_uploaded ?? {})[String((s as any).ml_onlinesongcount ?? 0)] = 0;
  (s as any).ml_uploadablemusic = ((s as any).ml_uploadablemusic ?? 0) + (1);
  (s as any).ml_onlinesongcount = ((s as any).ml_onlinesongcount ?? 0) + (1);
  if (((s as any).ml_online ?? 0)?.['account'] === 0  ||  ((s as any).access ?? 0) === 'denied') {
    return;
  }
  if (((s as any).pcs_inhib ?? 0) < 10) {
    qspCall(s, 'willpower', 'skill', 'perform', 'self', 'hard');
  } else {
    if (((s as any).pcs_inhib ?? 0) < 20) {
      qspCall(s, 'willpower', 'skill', 'perform', 'self', 'medium');
    } else {
      if (((s as any).pcs_inhib ?? 0) < 30) {
        qspCall(s, 'willpower', 'skill', 'perform', 'self', 'easy');
      } else {
        (s as any).will_cost = 0;
      }
    }
  }
  (s as any).will_cost = (((s as any).will_cost ?? 0) * 2) - (((s as any).pcs_perform ?? 0));
  if (((s as any).will_cost ?? 0) <= 0) {
    scene.actions([
      { label: 'Upload music', goto: ['music_onlinemusic', 'uploadmusic'] },
    ]);
  } else {
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Upload music', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      qspCall(s, 'willpower', 'pay', 'self');
      scene.actions([
        { label: 'Upload music', goto: ['music_onlinemusic', 'uploadmusic'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'music_actions', '');
  } },
  ]);
  scene.build();
}

function enterUploadmusic(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_inhib ?? 0) < 30) {
    scene.text('You hesitate for a long moment, but finally take a deep breath and click on the "Upload" button and your newly recorded song moves over to the internet for all to see.');
    scene.text('You bite in your lip, then close the screen before you change your mind and delete it.');
  } else {
    scene.text('You smile brightly and click on the "Upload" button. Now the whole world can see you play. And if they don\'t like it, well… "Haters gonna hate" you shrug mentally and close the screen. They will like it."');
  }
  qspCall(s, 'stat', '');
  (s as any).ml_uploadablemusic = ((s as any).ml_uploadablemusic ?? 0) - (1);
  // TODO-QSP: ml_onlinesong_uploaded[ml_onlinesongcount-1] = 1
  if (String((s as any).locArgs?.[1] ?? '') === 'recording') {
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'music_onlinemusic', '');
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'music_actions', '');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterUploadallmusic(s: GameState, scene: SceneBuilder): void {
  scene.img('images/pc/activities/music/uploadmusic.jpg');
  if (((s as any).will_cost ?? 0) > 0) {
    scene.text('You go through the songs you recorded and clear out the old ones that you really, really don\'t like anymore. Then after a moment of hesitation you take a deep breath and click on the "Upload" button.');
    scene.text('The screen changes and one by one, your songs move over to the internet for all to see.');
    scene.text('You bite in your lip, then close the screen before you change your mind and delete them.');
  } else {
    scene.text('You smile brightly as you browse through your recordings, deleting some old ones, then finally click the "Upload" button. Now the whole world can see you play. And if they don\'t like it, well… "Haters gonna hate" you shrug mentally and close the screen, this is how art grows."');
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDeleting(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).i = 0;
  // TODO-QSP: :uploadallmusic
  if (((s as any).ml_onlinesong_uploaded ?? 0)?.[String((s as any).i ?? 0)] === 0  &&  ((s as any).access ?? 0) !== 'denied') {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'internet_mobile', 'use_internet', (((s as any).access ?? 0)?.['subscription']), 5);
    qspCall(s, 'stat', '');
    ((s as any).ml_onlinesong_uploaded = (s as any).ml_onlinesong_uploaded ?? {})[String((s as any).i ?? 0)] = 1;
    (s as any).ml_uploadablemusic = ((s as any).ml_uploadablemusic ?? 0) - (1);
  }
  (s as any).i = ((s as any).i ?? 0) + (1);
  if (((s as any).i ?? 0) < ((s as any).ml_onlinesongcount ?? 0)) {
    // TODO-QSP: jump 'uploadallmusic'
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'music_actions', '');
  } },
  ]);
  scene.build();
}

function enterDeleteoldmusic(s: GameState, scene: SceneBuilder): void {
  scene.text('You go through your recorded musics and delete all the old ones where your playing doesn\'t really reflect what you can do these days');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDeleting(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'music_actions', '');
  } },
  ]);
  scene.build();
}

function enterDeleting(s: GameState, scene: SceneBuilder): void {
  (s as any).ml_threshold_skilllevel = ((((s as any).pcs_instrmusic ?? 0) + ((s as any).pcs_vokal ?? 0) + ((s as any).pcs_perform ?? 0))*80)/100;
  (s as any).i = 0;
  (s as any).j = (-1);
  // TODO-QSP: :deletemusic
  if ((((s as any).ml_onlinesong_uploaded ?? 0)?.[String((s as any).i ?? 0)] === 1)  ||  (((s as any).ml_onlinesong_uploaded ?? 0)?.[String((s as any).i ?? 0)] === 0  &&  ((s as any).ml_onlinesong_skilllevel ?? 0)?.[String((s as any).i ?? 0)] > ((s as any).ml_threshold_skilllevel ?? 0))) {
    (s as any).j = ((s as any).j ?? 0) + (1);
    ((s as any).ml_tempsong_freshness = (s as any).ml_tempsong_freshness ?? {})[String((s as any).j ?? 0)] = (((s as any).ml_onlinesong_freshness ?? 0)?.[String((s as any).i ?? 0)] ?? 0);
    ((s as any).ml_tempsong_lastcalcday = (s as any).ml_tempsong_lastcalcday ?? {})[String((s as any).j ?? 0)] = (((s as any).ml_onlinesong_lastcalcday ?? 0)?.[String((s as any).i ?? 0)] ?? 0);
    ((s as any).ml_tempsong_hotcat = (s as any).ml_tempsong_hotcat ?? {})[String((s as any).j ?? 0)] = (((s as any).ml_onlinesong_hotcat ?? 0)?.[String((s as any).i ?? 0)] ?? 0);
    ((s as any).ml_tempsong_skilllevel = (s as any).ml_tempsong_skilllevel ?? {})[String((s as any).j ?? 0)] = (((s as any).ml_onlinesong_skilllevel ?? 0)?.[String((s as any).i ?? 0)] ?? 0);
    ((s as any).ml_tempsong_uploaded = (s as any).ml_tempsong_uploaded ?? {})[String((s as any).j ?? 0)] = (((s as any).ml_onlinesong_uploaded ?? 0)?.[String((s as any).i ?? 0)] ?? 0);
  } else {
    (s as any).ml_uploadablemusic = ((s as any).ml_uploadablemusic ?? 0) - (1);
  }
  (s as any).i = ((s as any).i ?? 0) + (1);
  if (((s as any).i ?? 0) < ((s as any).ml_onlinesongcount ?? 0)) {
    // TODO-QSP: jump 'deletemusic'
  }
  (s as any).ml_onlinesongcount = 0;
  (s as any).ml_uploadablemusic = 0;
  if (((s as any).j ?? 0) >= 0) {
    // TODO-QSP: :looprebuildsongs
    ((s as any).ml_onlinesong_freshness = (s as any).ml_onlinesong_freshness ?? {})[String((s as any).ml_onlinesongcount ?? 0)] = (((s as any).ml_tempsong_freshness ?? 0)?.[String((s as any).ml_onlinesongcount ?? 0)] ?? 0);
    ((s as any).ml_onlinesong_hotcat = (s as any).ml_onlinesong_hotcat ?? {})[String((s as any).ml_onlinesongcount ?? 0)] = (((s as any).ml_tempsong_hotcat ?? 0)?.[String((s as any).ml_onlinesongcount ?? 0)] ?? 0);
    ((s as any).ml_onlinesong_lastcalcday = (s as any).ml_onlinesong_lastcalcday ?? {})[String((s as any).ml_onlinesongcount ?? 0)] = (((s as any).ml_tempsong_lastcalcday ?? 0)?.[String((s as any).ml_onlinesongcount ?? 0)] ?? 0);
    ((s as any).ml_onlinesong_skilllevel = (s as any).ml_onlinesong_skilllevel ?? {})[String((s as any).ml_onlinesongcount ?? 0)] = (((s as any).ml_tempsong_skilllevel ?? 0)?.[String((s as any).ml_onlinesongcount ?? 0)] ?? 0);
    ((s as any).ml_onlinesong_uploaded = (s as any).ml_onlinesong_uploaded ?? {})[String((s as any).ml_onlinesongcount ?? 0)] = (((s as any).ml_tempsong_uploaded ?? 0)?.[String((s as any).ml_onlinesongcount ?? 0)] ?? 0);
    if ((((s as any).ml_onlinesong_uploaded ?? 0)?.[String((s as any).ml_onlinesongcount ?? 0)] === 0)) {
      (s as any).ml_uploadablemusic = ((s as any).ml_uploadablemusic ?? 0) + (1);
    }
    (s as any).ml_onlinesongcount = ((s as any).ml_onlinesongcount ?? 0) + (1);
    if (((s as any).ml_onlinesongcount ?? 0) <= ((s as any).j ?? 0)) {
      // TODO-QSP: jump 'looprebuildsongs'
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterFinish(s: GameState, scene: SceneBuilder): void {
  if (((s as any).location_type ?? 0) === 'public_outdoors') {
    (s as any).ml_rand_event = (Math.floor(Math.random() * 101) + 0);
    if (((s as any).ml_rand_event ?? 0) <= 10  &&  ((s as any).region ?? 0) === 'pav'  &&  ((s as any).npc_rel ?? 0)?.['A144'] > 40) {
      if (String((s as any).locArgs?.[1] ?? '') === 'streaming') {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAnushkaStreamingEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 'recording') {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAnushkaRecordingEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      }
    } else {
      if (((s as any).ml_rand_event ?? 0) <= 30  &&  ((s as any).region ?? 0) === 'pav') {
        qspCall(s, 'music_gigstarts', 'zariyah_passing_by');
      } else {
        qspCall(s, 'music_actions', 'available_actions');
      }
    }
  } else {
    qspCall(s, 'music_actions', 'available_actions');
  }
  // TODO-QSP: end
  scene.build();
}

function enterStreamingStats(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).ml_streamtime ?? 0));
  qspCall(s, 'internet_mobile', 'use_internet', (((s as any).access ?? 0)?.['subscription']), ((s as any).ml_streamtime ?? 0));
  (s as any).ml_maxsuperchats = ( (((s as any).fame ?? {})?.['pav_music'] ?? 0) + ((((s as any).fame ?? {})?.['city_music'] ?? 0) * 2) + (((s as any).fame ?? {})?.['pushkin_music'] ?? 0) + (((s as any).fame ?? {})?.['village_music'] ?? 0) + ((s as any).pcs_apprnc ?? 0) );
  (s as any).ml_superchats = ((Math.floor(Math.random() * (((s as any).ml_maxsuperchats ?? 0) - 0 + 1)) + (0)) * ((s as any).ml_streamtime ?? 0)) / 60;
  if (((s as any).ml_guitar ?? 0)?.['hasguitar'] === 1  &&  (((s as any).ml_guitar ?? 0)?.['carried'] === 1  ||  ((s as any).ml_guitar ?? 0)?.['location'] === ((s as any).loc ?? 0))) {
    (s as any).ml_famebase = ( ((s as any).pcs_instrmusic ?? 0) + ((s as any).pcs_vokal ?? 0) + ((s as any).pcs_perform ?? 0) + ( (((s as any).pcs_hotcat ?? 0)-5) * 20 ) ) / 20;
    qspCall(s, 'exp_gain', 'instrmusic', (Math.floor(Math.random() * 3) + 1));
  } else {
    (s as any).ml_famebase = ( (((s as any).pcs_vokal ?? 0) * 2) + ((s as any).pcs_perform ?? 0) + ( (((s as any).pcs_hotcat ?? 0)-5) * 20 ) ) / 20;
  }
  qspCall(s, 'fame', 'pav', 'music', (Math.floor(Math.random() * (((s as any).ml_famebase ?? 0) - 0 + 1)) + (0)));
  qspCall(s, 'fame', 'city', 'music', (Math.floor(Math.random() * (((s as any).ml_famebase ?? 0) - 0 + 1)) + (0)));
  qspCall(s, 'exp_gain', 'vokal', (Math.floor(Math.random() * 3) + 1));
  if (((s as any).perform_lvl ?? 0) < 35) {
    qspCall(s, 'exp_gain', 'perform', (Math.floor(Math.random() * 3) + 1));
  }
  ((s as any).ml_streaming = (s as any).ml_streaming ?? {})['livestreamcount'] = ((s as any).ml_streaming['livestreamcount'] ?? 0) + (1);
  ((s as any).ml_streaming = (s as any).ml_streaming ?? {})['lastday'] = ((s as any).daystart ?? 0);
  ((s as any).ml_performance = (s as any).ml_performance ?? {})['performed_minutes'] = ((s as any).ml_performance['performed_minutes'] ?? 0) + (((s as any).ml_streamtime ?? 0));
  ((s as any).ml_performance = (s as any).ml_performance ?? {})['total_time_performed'] = ((s as any).ml_performance['total_time_performed'] ?? 0) + (((s as any).ml_streamtime ?? 0));
  ((s as any).ml_streaming = (s as any).ml_streaming ?? {})['total_earnings'] = ((s as any).ml_streaming['total_earnings'] ?? 0) + (((s as any).ml_superchats ?? 0));
  ((s as any).ml_streaming = (s as any).ml_streaming ?? {})['unclaimed_earnings'] = ((s as any).ml_streaming['unclaimed_earnings'] ?? 0) + (((s as any).ml_superchats ?? 0));
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterRecordingStats(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).recording_time ?? 0));
  if (((s as any).performed_minutes ?? 0) > 10) {
    qspCall(s, 'exp_gain', 'vokal', (Math.floor(Math.random() * 4) + 1));
    if (((s as any).perform_lvl ?? 0) < 35) {
      qspCall(s, 'exp_gain', 'perform', (Math.floor(Math.random() * 3) + 1));
    }
    ((s as any).ml_performance = (s as any).ml_performance ?? {})['performed_minutes'] = ((s as any).ml_performance['performed_minutes'] ?? 0) + (((s as any).performed_minutes ?? 0));
    ((s as any).ml_performance = (s as any).ml_performance ?? {})['total_time_performed'] = ((s as any).ml_performance['total_time_performed'] ?? 0) + (((s as any).performed_minutes ?? 0));
    ((s as any).ml_onlinesong_hotcat = (s as any).ml_onlinesong_hotcat ?? {})[String((s as any).ml_onlinesongcount ?? 0)] = ((s as any).pcs_hotcat ?? 0);
    if (((s as any).ml_guitar ?? 0)?.['hasguitar'] === 1  &&  (((s as any).ml_guitar ?? 0)?.['carried'] === 1  ||  ((s as any).ml_guitar ?? 0)?.['location'] === ((s as any).loc ?? 0))) {
      ((s as any).ml_onlinesong_skilllevel = (s as any).ml_onlinesong_skilllevel ?? {})[String((s as any).ml_onlinesongcount ?? 0)] = ((s as any).pcs_instrmusic ?? 0) + ((s as any).pcs_vokal ?? 0) + ((s as any).pcs_perform ?? 0);
      ((s as any).ml_onlinesong_freshness = (s as any).ml_onlinesong_freshness ?? {})[String((s as any).ml_onlinesongcount ?? 0)] = ((s as any).pcs_instrmusic ?? 0) + ((s as any).pcs_vokal ?? 0) + ((s as any).pcs_perform ?? 0) + ((((s as any).pcs_hotcat ?? 0)-4)*10);
      qspCall(s, 'exp_gain', 'instrmusic', (Math.floor(Math.random() * 3) + 1));
    } else {
      ((s as any).ml_onlinesong_skilllevel = (s as any).ml_onlinesong_skilllevel ?? {})[String((s as any).ml_onlinesongcount ?? 0)] = (((s as any).pcs_vokal ?? 0) * 2) + ((s as any).pcs_perform ?? 0);
      ((s as any).ml_onlinesong_freshness = (s as any).ml_onlinesong_freshness ?? {})[String((s as any).ml_onlinesongcount ?? 0)] = (((s as any).pcs_vokal ?? 0) * 2) + ((s as any).pcs_perform ?? 0) + ((((s as any).pcs_hotcat ?? 0)-4)*10);
    }
    ((s as any).ml_onlinesong_lastcalcday = (s as any).ml_onlinesong_lastcalcday ?? {})[String((s as any).ml_onlinesongcount ?? 0)] = ((s as any).daystart ?? 0);
    ((s as any).ml_onlinesong_uploaded = (s as any).ml_onlinesong_uploaded ?? {})[String((s as any).ml_onlinesongcount ?? 0)] = 0;
    (s as any).ml_uploadablemusic = ((s as any).ml_uploadablemusic ?? 0) + (1);
    (s as any).ml_onlinesongcount = ((s as any).ml_onlinesongcount ?? 0) + (1);
  }
  // TODO-QSP: end
  scene.build();
}

function enterStreamInterruptions(s: GameState, scene: SceneBuilder): void {
  (s as any).ml_no_interruption = 1;
  // TODO-QSP: end
  scene.build();
}

function enterRecordingInterruptions(s: GameState, scene: SceneBuilder): void {
  (s as any).ml_no_interruption = 1;
  // TODO-QSP: end
  scene.build();
}

function enterAnushkaStreamingEnd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'music_actions', 'available_actions');
  // TODO-QSP: end
  scene.build();
}

function enterAnushkaRecordingEnd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'music_actions', 'available_actions');
  // TODO-QSP: end
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
    case 'edit_song':
      enterEditSong(s, scene);
      break;
    case 'uploadmusic':
      enterUploadmusic(s, scene);
      break;
    case 'uploadallmusic':
      enterUploadallmusic(s, scene);
      break;
    case 'deleteoldmusic':
      enterDeleteoldmusic(s, scene);
      break;
    case 'deleting':
      enterDeleting(s, scene);
      break;
    case 'finish':
      enterFinish(s, scene);
      break;
    case 'streaming_stats':
      enterStreamingStats(s, scene);
      break;
    case 'recording_stats':
      enterRecordingStats(s, scene);
      break;
    case 'stream_interruptions':
      enterStreamInterruptions(s, scene);
      break;
    case 'recording_interruptions':
      enterRecordingInterruptions(s, scene);
      break;
    case 'anushka_streaming_end':
      enterAnushkaStreamingEnd(s, scene);
      break;
    case 'anushka_recording_end':
      enterAnushkaRecordingEnd(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const music_onlinemusic: LocationDef = {
  name: 'music_onlinemusic',
  title: 'You log into Youtube to set up a channel for your music. You',
  region: 'other',
  locationType: 'public_outdoors',
  enter: enter,
};
