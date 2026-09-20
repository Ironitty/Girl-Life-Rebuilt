import { qspCall, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).ml_time_left = (((s as any).ml_performance ?? {})?.['max_perform_minutes'] ?? 0)-(((s as any).ml_performance ?? {})?.['performed_minutes'] ?? 0);
  if (((s as any).ml_activities ?? 0)?.['enabled'] === 0  &&  (((s as any).ml_guitar ?? 0)?.['hasguitar']  ||  ((s as any).vokal_lvl ?? 0) > 5)) {
    ((s as any).ml_activities = (s as any).ml_activities ?? {})['enabled'] = 1;
  }
  if (((s as any).ml_activities ?? 0)?.['enabled'] === 0  ||  ((s as any).ml_no_music ?? 0) !== 0) {
    // TODO-QSP: exit
  }
  if (((s as any).alko ?? 0) > 5) {
    scene.text('You are too drunk to stream or record music without messing up or throwing up into your guitar.');
  } else {
    if (((s as any).location_type ?? 0) === 'public_outdoors'  &&  (!((s as any).sunWeather ?? 0))) {
      scene.text('You can\'t make music in the rain, no matter how much movies try to tell you otherwise.');
    } else {
      if (((s as any).location_type ?? 0) === 'public_outdoors'  &&  ((s as any).temper ?? 0) < 5) {
        scene.text('It\'s too cold to make music.');
      } else {
        if (((s as any).hour ?? 0) < 8) {
          scene.text('It\'s too early to do anything noisy like playing the guitar or singing.');
        } else {
          if (((s as any).hour ?? 0) > 22) {
            scene.text('It\'s too late to do anything noisy like playing the guitar or singing.');
          } else {
            if (((s as any).ml_settings ?? 0)?.['its_me'] === 1) {
              if (((s as any).ml_guitar ?? 0)?.['hasguitar'] === 1  &&  (((s as any).ml_guitar ?? 0)?.['carried'] === 1  ||  ((s as any).ml_guitar ?? 0)?.['location'] === ((s as any).loc ?? 0))) {
                // TODO-QSP: pl '<center><a href="exec: gs ''music_actions'', ''available_actions''"><img title="Click to to see ...
              } else {
                // TODO-QSP: pl '<center><a href="exec: gs ''music_actions'', ''available_actions''"><img title="Click to to see ...
              }
            } else {
              scene.actions([
                { label: 'Available musical activities', handler: (st: GameState) => {
    qspCall(st, 'music_actions', 'available_actions');
  } },
              ]);
            }
          }
        }
        if (((s as any).ml_guitar ?? 0)?.['hasguitar'] === 1  &&  ((s as any).location_type ?? 0) === 'private') {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPutDownPickUp(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAvailableActions(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) < 8) {
    scene.text('It\'s too early to do anything noisy like playing the guitar or singing.');
    scene.actions([
{ label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'music_actions', 'finish');
  } },
]);
    return;
  } else {
    if (((s as any).hour ?? 0) > 22) {
      scene.text('It\'s too late to do anything noisy like playing the guitar or singing.');
      scene.actions([
{ label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'music_actions', 'finish');
  } },
]);
      return;
    }
  }
  (s as any).ml_time_left = (((s as any).ml_performance ?? {})?.['max_perform_minutes'] ?? 0)-(((s as any).ml_performance ?? {})?.['performed_minutes'] ?? 0);
  if (((s as any).location_type ?? 0) === 'public_outdoors') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNotAlone(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).access ?? 0) === '') {
    qspCall(s, 'internet_mobile', 'get_access');
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPlaySomething(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPracticeGuitar(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRehearseSets(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).location_type ?? 0) === 'public_outdoors') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBusking(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRecordMusic(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).access ?? 0) !== 'denied') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStreamMusic(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetUpAccount(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDeleteMusic(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'music_actions', 'finish');
  } },
  ]);
  scene.build();
}

function enterPutDownPickUp(s: GameState, scene: SceneBuilder): void {
  if (((s as any).ml_guitar ?? 0)?.['carried'] === 1) {
    scene.actions([
      { label: 'Place the guitar next to your desk', handler: (st: GameState) => {
    ((st as any).ml_guitar = (st as any).ml_guitar ?? {})['carried'] = 0;
    ((st as any).ml_guitar = (st as any).ml_guitar ?? {})['location'] = ((st as any).loc ?? 0);
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } else {
    if (((s as any).ml_guitar ?? 0)?.['location'] === ((s as any).loc ?? 0)) {
      scene.actions([
        { label: 'Pick up the guitar', handler: (st: GameState) => {
    ((st as any).ml_guitar = (st as any).ml_guitar ?? {})['carried'] = 1;
    ((st as any).ml_guitar = (st as any).ml_guitar ?? {})['location'] = 'carried';
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPlaySomething(s: GameState, scene: SceneBuilder): void {
  if (((s as any).ml_guitar ?? 0)?.['hasguitar'] === 1  &&  (((s as any).ml_guitar ?? 0)?.['carried'] === 1  ||  ((s as any).ml_guitar ?? 0)?.['location'] === ((s as any).loc ?? 0))) {
    if (((s as any).ml_not_alone ?? 0) === 0  ||  (!((s as any).will_cost ?? 0))) {
      scene.actions([
        { label: 'Play something on the guitar (10 minutes)', handler: (st: GameState) => {
    qspCall(st, 'mood', 'raise', 'tiny');
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/pc/activities/music/guitarpractice_1.jpg');
    scene.text('You pick up your guitar and start to play some songs you know, just for your own entertainment.');
    scene.text('You hum along to the tune, relaxing into the music and enjoying it. When you look up, 10 minutes has passed and you are in a much better mood.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'music_actions', 'available_actions');
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Play something on the guitar (you are not alone)', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Play something on the guitar (10 minutes) (you are not alone)', handler: (st: GameState) => {
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 2) + 1));
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    qspCall(st, 'mood', 'raise', 'tiny');
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/pc/activities/music/guitarpractice_1.jpg');
    scene.text('You pick up your guitar and start to play some songs you know, just for your own entertainment.');
    scene.text('You hum along to the tune, relaxing into the music and enjoying it. When you look up, 10 minutes has passed and you are in a much better mood.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'music_actions', 'available_actions');
  } },
    ]);
  } },
        ]);
      }
    }
  }
  if (((s as any).ml_not_alone ?? 0) === 0  ||  (!((s as any).will_cost ?? 0))) {
    scene.actions([
      { label: 'Sing something (10 minutes)', handler: (st: GameState) => {
    qspCall(st, 'mood', 'raise', 'tiny');
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.text('You hum a few notes to warm up your throat and start to some some songs you know, just for your own entertainment.');
    scene.text('You sway and move your head to keep the tempo, relaxing into the music and enjoying it. When you look up, 10 minutes has passed and you are in a much better mood.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'music_actions', 'available_actions');
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Sing something (you are not alone)', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Sing something (10 minutes) (you are not alone)', handler: (st: GameState) => {
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 2) + 1));
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    qspCall(st, 'mood', 'raise', 'tiny');
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.text('You hum a few notes to warm up your throat and start to some some songs you know, just for your own entertainment.');
    scene.text('You sway and move your head to keep the tempo, relaxing into the music and enjoying it. When you look up, 10 minutes has passed and you are in a much better mood.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'music_actions', 'available_actions');
  } },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPracticeGuitar(s: GameState, scene: SceneBuilder): void {
  if (((s as any).ml_guitar ?? 0)?.['hasguitar'] === 1  &&  (((s as any).ml_guitar ?? 0)?.['carried'] === 1  ||  ((s as any).ml_guitar ?? 0)?.['location'] === ((s as any).loc ?? 0))  &&  (((s as any).ml_guitar ?? 0)?.['chordbook'] === 1  ||  ((s as any).ml_guitarlesson ?? 0)?.['lessoncount'] > 0)) {
    if (((s as any).ml_time_left ?? 0) < 15) {
      scene.actions([
        { label: 'Practice guitar  [+$func(\'wrap\', \'v_neg\', \'(You are too tir...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'v_neg', '<br>You have played so much today th...
  } },
      ]);
    } else {
      if (((s as any).ml_not_alone ?? 0) === 0  ||  (!((s as any).will_cost ?? 0))) {
        scene.actions([
          { label: 'Practice guitar (15 minutes)', goto: ['music_bedroomPractice', 'guitar'] },
        ]);
      } else {
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Practice guitar (you are not alone)', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Practice guitar (15 minutes) (you are not alone)', handler: (st: GameState) => {
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 2) + 1));
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    qspGoto(st, 'music_bedroomPractice', 'guitar');
  } },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBusking(s: GameState, scene: SceneBuilder): void {
  scene.text('With the weather being pleasant and sunny, there are groups of people moving around the streets. You could play some music, practice performing songs and maybe make some money too.');
  if (((s as any).ml_performance ?? 0)?.['max_perform_minutes'] < 60) {
    scene.actions([
      { label: 'Start busking  [+$func(\'wrap\', \'v_neg\', \'(You are not abl...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You don''t have the endurance yet ...
  } },
    ]);
  } else {
    if (((s as any).ml_time_left ?? 0) < 60) {
      scene.actions([
        { label: 'Start busking  [+$func(\'wrap\', \'v_neg\', \'(You are too tir...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'v_neg', '<br>You have played so much today, t...
  } },
      ]);
    } else {
      if ((!((s as any).will_cost ?? 0))) {
        scene.actions([
          { label: 'Start busking (60 minutes)', handler: (st: GameState) => {
    qspCall(st, 'music_buskingevents', 'busking');
  } },
        ]);
      } else {
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Start busking', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You don''t feel comfortable enough...
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Start busking (60 minutes)', handler: (st: GameState) => {
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 3) + 1));
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    qspCall(st, 'music_buskingevents', 'busking');
  } },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterStreamMusic(s: GameState, scene: SceneBuilder): void {
  if (((s as any).ml_online ?? 0)?.['account'] === 0) {
    scene.actions([
      { label: 'Live stream  [+$func(\'wrap\', \'v_neg\', \'(No online accou...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You will have to set up an online ...
  } },
    ]);
  } else {
    if (((s as any).access ?? 0) === 'denied') {
      scene.actions([
        { label: 'Live stream  [+$func(\'wrap\', \'v_neg\', \'(No internet acc...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'v_neg', '<br>You have no internet access.')
  } },
      ]);
    } else {
      if (((s as any).ml_streaming ?? 0)?.['lastday'] === ((s as any).daystart ?? 0)) {
        scene.actions([
          { label: 'Live stream  [+$func(\'wrap\', \'neg\', \'(Already streamed ...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You already streamed today.')
  } },
        ]);
      } else {
        if (((s as any).ml_not_alone ?? 0) === 1  &&  ((s as any).location_type ?? 0) === 'private') {
          scene.actions([
            { label: 'Live stream  [+$func(\'wrap\', \'neg\', \'(You are not alone...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You are not alone in the room, whi...
  } },
          ]);
        } else {
          if (((s as any).ml_performance ?? 0)?.['max_perform_minutes'] < 60) {
            scene.actions([
              { label: 'Live stream  [+$func(\'wrap\', \'v_neg\', \'(You are not abl...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You don''t have the endurance yet ...
  } },
            ]);
          } else {
            if (((s as any).ml_time_left ?? 0) < 60) {
              scene.actions([
                { label: 'Live stream  [+$func(\'wrap\', \'v_neg\', \'(You are too tir...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'v_neg', '<br>You have played so much today, t...
  } },
              ]);
            } else {
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterWillpowerCost(s, scene); (s as any).locArgs = __savedLocArgs; }
              if ((!((s as any).will_cost ?? 0))) {
                scene.actions([
                  { label: 'Live stream (60 minutes)', goto: ['music_onlinemusic', 'live_stream'] },
                ]);
              } else {
                if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                  scene.actions([
                    { label: 'Live stream', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                  ]);
                } else {
                  scene.actions([
                    { label: 'Live stream (60 minutes)', handler: (st: GameState) => {
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 3) + 1));
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    qspGoto(st, 'music_onlinemusic', 'live_stream');
  } },
                  ]);
                }
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterRecordMusic(s: GameState, scene: SceneBuilder): void {
  if (((s as any).ml_performance ?? 0)?.['max_perform_minutes'] < 30) {
    scene.actions([
      { label: 'Record a song  [+$func(\'wrap\', \'v_neg\', \'(You are not abl...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You don''t have the endurance yet ...
  } },
    ]);
  } else {
    if (((s as any).ml_time_left ?? 0) < 30) {
      scene.actions([
        { label: 'Record a song  [+$func(\'wrap\', \'v_neg\', \'(You are too tir...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'v_neg', '<br>You have played so much today, t...
  } },
      ]);
    } else {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterWillpowerCost(s, scene); (s as any).locArgs = __savedLocArgs; }
      if ((!((s as any).will_cost ?? 0))) {
        scene.actions([
          { label: 'Record a song with your phone (30 minutes)', goto: ['music_onlinemusic', 'record_song'] },
        ]);
      } else {
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Record a song (you are not alone)', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Record a song with your phone (30 minutes) [+iif(ml_not_alone, \' (you are not alone)\'...]', handler: (st: GameState) => {
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 2) + 1));
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    qspGoto(st, 'music_onlinemusic', 'record_song');
  } },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterEditRecording(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mc_inventory ?? 0)?.['tech_computer'] === 1  &&  ((s as any).mc_inventory ?? 0)?.['tech_webcam'] === 1  &&  ((s as any).ml_studio ?? 0)?.['scarlet-3rd-gen'] === 1) {
    scene.actions([
      { label: 'Edit a song', handler: (st: GameState) => {
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 2) + 1));
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    qspGoto(st, 'music_onlinemusic', 'recordAndEditSong');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterRehearseSets(s: GameState, scene: SceneBuilder): void {
  if (((s as any).ml_guitar ?? 0)?.['hasguitar'] === 1  &&  (((s as any).ml_guitar ?? 0)?.['carried'] === 1  ||  ((s as any).ml_guitar ?? 0)?.['location'] === ((s as any).loc ?? 0))) {
    if (((s as any).ml_performance ?? 0)?.['max_perform_minutes'] < 30) {
      scene.actions([
        { label: 'Rehearse your set (guitar and vocals)  [+$func(\'wrap\', \'v_neg\', \'(You don\'t have...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You don''t know enough songs well ...
  } },
      ]);
    } else {
      if (((s as any).ml_time_left ?? 0) < 30) {
        scene.actions([
          { label: 'Rehearse your set (guitar and vocals)  [+$func(\'wrap\', \'v_neg\', \'(You are too tir...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'v_neg', '<br>You have played so much today th...
  } },
        ]);
      } else {
        if (((s as any).ml_not_alone ?? 0) === 0  ||  (!((s as any).will_cost ?? 0))) {
          scene.actions([
            { label: 'Rehearse your set (guitar and vocals, 30 minutes)', goto: ['music_bedroompractice', 'rehearse'] },
          ]);
        } else {
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Rehearse your set (guitar and vocals) (you are not alone)', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Rehearse your set (guitar and vocals, 30 minutes) (you are not alone)', handler: (st: GameState) => {
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 2) + 1));
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    qspGoto(st, 'music_bedroompractice', 'rehearse');
  } },
            ]);
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSetUpAccount(s: GameState, scene: SceneBuilder): void {
  if (((s as any).ml_online ?? 0)?.['account'] === 0  &&  ((s as any).subscription ?? 0)[((s as any).access ?? 0)?.['subscription']] > 0) {
    scene.actions([
      { label: 'Set up an online music account (0:30)', goto: ['music_onlinemusic', 'set_up_account'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterUploadMusic(s: GameState, scene: SceneBuilder): void {
  if (((s as any).ml_uploadablemusic ?? 0) > 0  &&  ((s as any).subscription ?? 0)[((s as any).access ?? 0)?.['subscription']] > 0  &&  ((s as any).ml_online ?? 0)?.['account'] === 1) {
    if ((!((s as any).will_cost ?? 0))) {
      scene.actions([
        { label: 'Upload music', goto: ['music_onlinemusic', 'uploadallmusic'] },
      ]);
    } else {
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Upload music', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Upload music', goto: ['music_onlinemusic', 'uploadmusic'] },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDeleteMusic(s: GameState, scene: SceneBuilder): void {
  if (((s as any).ml_uploadablemusic ?? 0) > 0) {
    scene.actions([
      { label: 'Delete old recordings', goto: ['music_onlinemusic', 'deleteoldmusic'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterNotAlone(s: GameState, scene: SceneBuilder): void {
  (s as any).ml_not_alone = 1;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterWillpowerCost(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterNoMusic(s: GameState, scene: SceneBuilder): void {
  (s as any).ml_no_music = 1;
  // TODO-QSP: end
  scene.build();
}

function enterWillpowerCost(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_inhib ?? 0) < 10) {
    qspCall(s, 'willpower', 'skill', 'perform', 'self', 'hard');
  } else {
    if (((s as any).pcs_inhib ?? 0) < 20) {
      qspCall(s, 'willpower', 'skill', 'perform', 'self', 'medium');
    } else {
      if (((s as any).pcs_inhib ?? 0) < 30) {
        qspCall(s, 'willpower', 'skill', 'perform', 'self', 'easy');
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterClearRestrictions(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterFinish(s: GameState, scene: SceneBuilder): void {
  dynamicGoto(s, 'prevLoc', 'prevArg');
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'available_actions':
      enterAvailableActions(s, scene);
      break;
    case 'put_down_pick_up':
      enterPutDownPickUp(s, scene);
      break;
    case 'play_something':
      enterPlaySomething(s, scene);
      break;
    case 'practice_guitar':
      enterPracticeGuitar(s, scene);
      break;
    case 'busking':
      enterBusking(s, scene);
      break;
    case 'stream_music':
      enterStreamMusic(s, scene);
      break;
    case 'record_music':
      enterRecordMusic(s, scene);
      break;
    case 'edit_recording':
      enterEditRecording(s, scene);
      break;
    case 'rehearse_sets':
      enterRehearseSets(s, scene);
      break;
    case 'set_up_account':
      enterSetUpAccount(s, scene);
      break;
    case 'upload_music':
      enterUploadMusic(s, scene);
      break;
    case 'delete_music':
      enterDeleteMusic(s, scene);
      break;
    case 'not_alone':
      enterNotAlone(s, scene);
      break;
    case 'no_music':
      enterNoMusic(s, scene);
      break;
    case 'willpower_cost':
      enterWillpowerCost(s, scene);
      break;
    case 'clear_restrictions':
      enterClearRestrictions(s, scene);
      break;
    case 'finish':
      enterFinish(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const music_actions: LocationDef = {
  name: 'music_actions',
  title: '(You are too tired)',
  region: 'other',
  locationType: 'private',
  enter: enter,
};
