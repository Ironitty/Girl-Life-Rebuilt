import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterEvents(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_transportVars['rand'] = Math.floor(Math.random() * 100) + 0;
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    scene.actions([{ label: 'Continue', goto: ['metro_events', 'frot'] }]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['metro_events', 'station'] }]);
  }
  scene.build();
}

function enterFrot(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 10) + 0) < 8) {
    scene.actions([{ label: 'Continue', goto: ['metro_events', 'train'] }]);
  }
  if ((Math.floor(Math.random() * 2) + 0) === 1) {
    scene.actions([{ label: 'Continue', goto: ['metro_events', 'a'] }]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['metro_events', 'b'] }]);
    scene.actions([{ label: 'Continue', goto: ['metro_events', 'c'] }]);
  }
  scene.build();
}

function enterA(s: GameState, scene: SceneBuilder): void {
  (s as any).svol = Math.floor(Math.random() * 21) + 30;
  (s as any).spot = 500 * ((s as any).rand ?? 0)(16, 24);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/shared/metro/sex/grop/frot.jpg');
  scene.text('You feel something solid pressing against your ass. A few seconds pass by before you realize what the hardness you feel pressing against you is - it\'s someone\'s rock-hard cock!');
  qspCall(s, 'willpower', 'misc', 'resist', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Move away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['metro_events', 'fin'] },
    ]);
  }
  scene.actions([
    { label: 'Disregard', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/shared/metro/sex/grop/frot1.jpg');
    scene.text('The guy standing behind you disregards the other passengers and grabs your ass cheek with his hand while rubbing his crotch against your ass.');
    qspCall(s, 'arousal', 'foreplay', 2, 'sub', 'unknown');
    qspCall(s, 'willpower', 'misc', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Move away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Move away', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'arousal', 'end');
  }, goto: ['metro_events', 'fin'] },
      ]);
    }
    scene.actions([
      { label: 'Disregard', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/shared/metro/sex/grop/frot2.jpg');
    scene.text('You feel his rock-hard cock more clearly now. By the way it is moving, you\'re sure he\'s taken it out of his pants and is rubbing it against your ass. His hands continue to cling on to you, squeezing your buttocks.');
    qspCall(s, 'arousal', 'foreplay', 2, 'sub', 'unknown');
    qspCall(s, 'willpower', 'misc', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Move away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Move away', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'arousal', 'end');
  }, goto: ['metro_events', 'fin'] },
      ]);
    }
    scene.actions([
      { label: 'Disregard', handler: (st: GameState) => {
    (s as any).frot = ((s as any).frot ?? 0) + (1);
    qspCall(s, 'cum_call', 'pantyrear', 'stranger on the metro', 0, 0, ((s as any).spot ?? 0), ((s as any).svol ?? 0));
    qspCall(s, 'clothing', 'decrease_cur_strength', Math.floor(Math.random() * 1001) + 500);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/shared/metro/sex/grop/frotc\' + rand(1, 2) + \'.jpg');
    scene.text('The man jerks back, and stops molesting you. A few seconds later, you feel something wet seep through your clothes. After a few more seconds, the guy moves away.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finished', goto: ['metro_events', 'fin2'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterB(s: GameState, scene: SceneBuilder): void {
  (s as any).svol = Math.floor(Math.random() * 21) + 30;
  (s as any).spot = 500 * ((s as any).rand ?? 0)(16, 24);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/shared/metro/sex/grop/frotd2.jpg');
  scene.text('There is a man standing behind you who starts playing with your skirt.');
  qspCall(s, 'willpower', 'sex', 'resist', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Move away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['metro_events', 'fin'] },
    ]);
  }
  scene.actions([
    { label: 'Disregard', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/shared/metro/sex/grop/frota1.jpg');
    scene.text('The man cautiously lifts your skirt and starts caressing your buttocks.');
    qspCall(s, 'arousal', 'foreplay', (-2), 'sub', 'unknown');
    qspCall(s, 'willpower', 'sex', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Move away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Move away', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'arousal', 'end');
  }, goto: ['metro_events', 'fin'] },
      ]);
    }
    scene.actions([
      { label: 'Disregard', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/shared/metro/sex/grop/frota2.jpg');
    scene.text('The man pulls your panties down to your knees, then lets your skirt fall back into place. He slides his hand between your thighs, caressing your clit. After spending a few minutes pleasuring you, he pulls your hand back and places it on his cock.');
    qspCall(s, 'arousal', 'foreplay', (-2), 'sub', 'unknown');
    qspCall(s, 'willpower', 'sex', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Move away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Move away', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'sex', 'resist', 'medium');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'arousal', 'end');
  }, goto: ['metro_events', 'fin'] },
      ]);
    }
    qspCall(s, 'willpower', 'hj', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Pull your hand away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Pull your hand away', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'hj', 'resist', 'medium');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'arousal', 'end');
    (s as any).frot = ((s as any).frot ?? 0) + (1);
    qspCall(s, 'cum_call', 'butt', 'stranger on the metro', 0, 0, ((s as any).spot ?? 0), ((s as any).svol ?? 0));
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/shared/metro/sex/grop/frotd1.jpg');
    scene.text('You angrily pull your hand away, which he allows you to do. A few seconds later, you feel the head of his cock bumping against your ass cheek as he jerks off. Minutes later, you feel spurts of hot cum splashing against your ass cheeks. Once he\'s finished, he pulls your panties back up over your sperm covered ass and pats you on the ass before disappearing into the crowd.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finished', goto: ['metro_events', 'fin2'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Stroke his cock', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'butt', 'stranger on the metro', 0, 0, ((s as any).spot ?? 0), ((s as any).svol ?? 0));
    (s as any).frot = ((s as any).frot ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/shared/metro/sex/grop/frotd.jpg');
    scene.text('You firmly grip his cock in your hand and start stroking as he places his hands on your shoulders and tries to push you down on your knees.');
    qspCall(s, 'arousal', 'hj', (-2), 'sub', 'unknown');
    qspCall(s, 'willpower', 'hj', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Pull your hand away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Pull your hand away', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'arousal', 'end');
    (s as any).frot = ((s as any).frot ?? 0) + (1);
    qspCall(s, 'cum_call', 'butt', 'stranger on the metro', 0, 0, ((s as any).spot ?? 0), ((s as any).svol ?? 0));
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/shared/metro/sex/grop/frotd1.jpg');
    scene.text('You angrily pull your hand away, which he allows you to do. A few seconds later, you feel the head of his cock bumping against your ass cheek as he jerks off. Minutes later, you feel spurts of hot cum splashing against your ass cheeks. Once he\'s finished, he pulls your panties back up over your sperm covered ass and pats you on the ass before disappearing into the crowd.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finished', goto: ['metro_events', 'fin2'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Squat', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/shared/metro/sex/grop/frote1.jpg');
    scene.text('You give into his demands and squat down in front of him. He grabs your head and turns your face to his crotch, his rock-hard cock waiting for you. He starts rubbing his cock against your face and lips, teasing his cock.');
    qspCall(s, 'arousal', 'foreplay', (-2), 'sub', 'unknown');
    qspCall(s, 'willpower', 'bj', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Move away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Move away', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'arousal', 'end');
  }, goto: ['metro_events', 'fin'] },
      ]);
    }
    scene.actions([
      { label: 'Suck it', handler: (st: GameState) => {
    (s as any).guy = ((s as any).guy ?? 0) + (1);
    (s as any).frot = ((s as any).frot ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/shared/metro/sex/grop/frote2.jpg');
    scene.text('You obediently open your mouth and begin sucking his hard cock. You\'re sitting on your haunches, in the middle of a crowded subway car, sucking a stranger\'s cock!');
    qspCall(s, 'arousal', 'bj', (-3), 'sub', 'unknown');
    scene.actions([
      { label: 'Continue to suck', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', 'stranger on the metro', 0, 0, ((s as any).spot ?? 0), ((s as any).svol ?? 0));
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/shared/metro/sex/grop/frote3.jpg');
    scene.text('The man pulls his cock out of your mouth, and hot cum splatters across your cheek and chin. Once he\'s milked the last drop from his cock onto your face, he tucks it back into his pants and forces his way through the crowd, leaving you alone with his cum all over your face.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finished', goto: ['metro_events', 'fin2'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterC(s: GameState, scene: SceneBuilder): void {
  (s as any).svol = Math.floor(Math.random() * 21) + 30;
  (s as any).spot = 500 * ((s as any).rand ?? 0)(16, 24);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/shared/metro/sex/grop/frotp.jpg');
  scene.text('An unknown man approaches you from behind and, without any hesitation, shoves his hand down the back of your pants.');
  qspCall(s, 'willpower', 'sex', 'resist', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Move away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['metro_events', 'fin'] },
    ]);
  }
  scene.actions([
    { label: 'Disregard', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    qspCall(s, 'npcgeneratec', '', 0, 'Stranger on the Metro', 0, Math.floor(Math.random() * 3) + 2, 1);
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
    scene.img('images/locations/city/shared/metro/sex/grop/frotp.jpg');
    scene.text('You enjoy the sensation of the stranger caressing your ass as his other hand reaches around and starts fondling your left breast under your shirt.');
    qspCall(s, 'arousal', 'foreplay', (-2), 'sub', 'unknown');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'sex', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Move away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Move away', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'arousal', 'end');
  }, goto: ['metro_events', 'fin'] },
      ]);
    }
    scene.actions([
      { label: 'Disregard', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/shared/metro/sex/grop/frotp2.jpg');
    scene.text('After a few minutes, he pulls his hand out and grabs your other breast. He\'s now fondling both of your breasts as his cock pushes against your ass.');
    qspCall(s, 'arousal', 'foreplay', (-2), 'sub', 'unknown');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'sex', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Move away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Move away', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'arousal', 'end');
  }, goto: ['metro_events', 'fin'] },
      ]);
    }
    scene.actions([
      { label: 'Enjoy', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/shared/metro/sex/grop/frotd.jpg');
    scene.text('Once he hears you moan, he pulls his hands away from your breasts and slides them down the front of your body to the waist of your pants. He unbuttons your pants and pulls them, along with your panties, down to your knees, leaving you exposed from the waist down in a crowded subway car. He takes your hand and places it on his rock-hard cock.');
    qspCall(s, 'arousal', 'foreplay', (-2), 'sub', 'unknown', 'exhibitionism');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'bj', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Move away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Move away', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'bj', 'resist', 'medium');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'arousal', 'end');
  }, goto: ['metro_events', 'fin'] },
      ]);
    }
    qspCall(s, 'willpower', 'bj', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Resist and keep jerking him off [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Resist and keep jerking him off', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'bj', 'resist', 'medium');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/city/shared/metro/sex/grop/frotd1.jpg');
    scene.text('He stands firm, and once again tries to push you down, but you won\'t budge. As he can\'t convince you, he relaxes instead, letting you go on as you keep jerking him off. When he moans into your ear, you start stroking it more vigorously, a couple of minutes later, you feel spurts of hot cum splashing against your ass cheek. Once he is finished he pulls your panties back up over your sperm covered ass then pats you on the butt, before moving away, and disappearing in the crowd.');
    scene.actions([
      { label: 'Finished', goto: ['metro_events', 'fin2'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Stroke his cock', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'butt', 'stranger on the metro', 0, 0, ((s as any).spot ?? 0), ((s as any).svol ?? 0));
    (s as any).frot = ((s as any).frot ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/shared/metro/sex/grop/frotd.jpg');
    scene.text('You firmly grip his cock in your hand and start stroking as he places his hands on your shoulders and tries to push you down on your knees.');
    qspCall(s, 'arousal', 'hj', (-2), 'sub', 'unknown');
    qspCall(s, 'willpower', 'bj', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Resist and keep jerking him off [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Resist and keep jerking him off', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/city/shared/metro/sex/grop/frotd1.jpg');
    scene.text('He stands firm, and once again tries to push you down, but you won\'t budge. As he can\'t convince you, he relaxes instead, letting you go on as you keep jerking him off. When he moans into your ear, you start stroking it more vigorously and a few minutes later, you feel spurts of hot cum splashing against your ass cheek. Once he\'s finished, he pulls your panties back up over your sperm covered ass and pats you on the ass before disappearing into the crowd.');
    scene.actions([
      { label: 'Finished', goto: ['metro_events', 'fin2'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Squat', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/shared/metro/sex/grop/frote1.jpg');
    scene.text('You give into his demands and squat down in front of him. He grabs your head and turns your face to his crotch, his rock-hard cock waiting for you. He starts rubbing his cock against your face and lips, teasing his cock.');
    qspCall(s, 'arousal', 'foreplay', (-2), 'sub', 'unknown');
    qspCall(s, 'willpower', 'bj', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Move away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Move away', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'arousal', 'end');
  }, goto: ['metro_events', 'fin'] },
      ]);
    }
    scene.actions([
      { label: 'Suck it', handler: (st: GameState) => {
    (s as any).frot = ((s as any).frot ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/shared/metro/sex/grop/frote2.jpg');
    scene.text('You obediently open your mouth and begin sucking his hard cock. You\'re sitting on your haunches, in the middle of a crowded subway car, sucking a stranger\'s cock!');
    qspCall(s, 'arousal', 'bj', (-2), 'sub', 'unknown');
    scene.actions([
      { label: 'Continue to suck', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', 'stranger on the metro', 0, 0, ((s as any).spot ?? 0), ((s as any).svol ?? 0));
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/shared/metro/sex/grop/frote3.jpg');
    scene.text('The man pulls his cock out of your mouth, and hot cum splatters across your cheek and chin. Once he\'s milked the last drop from his cock onto your face, he tucks it back into his pants and forces his way through the crowd, leaving you alone with his cum all over your face.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finished', goto: ['metro_events', 'fin2'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterFin(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('You barely manage to pull away from the horny idiot and force your way through the crowded car to find a new place to stand as far away from him as you can get. After a while, you get to your station.');
  scene.actions([
    { label: 'Get out of the car', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterFin2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('Now that he\'s gone, and you are covered in his cum, you notice the other passengers staring at you. You should clean up before you step outside.');
  scene.actions([
    { label: 'Get out of the car', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterStation(s: GameState, scene: SceneBuilder): void {
  (s as any).metrorand = Math.floor(Math.random() * 22) + 0;
  if ((!((s as any).metrorand ?? 0))) {
    scene.img('images/locations/city/shared/metro/station/aflash1.jpg');
    scene.text('After your ride on the metro, you leave the station, following several people up the stairs towards the street. The backside of a women\'s skirt keeps lifting up from the draft of air. Each time it lifts up, it shows off her firm tight ass, which draws the attention of several men and even a few of the women.');
    qspCall(s, 'arousal', 'erotic', 3);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } else {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/shared/metro/station/guitar\' + rand(1, 7) + \'.jpg');
    scene.text('As you head through the metro station, you notice a man playing a guitar; he has his guitar case open and you can see some money in it already. Several other people have stopped to listen to him play; he isn\'t half bad.');
    if (((s as any).metrorand ?? 0) === 2) {
      qspCall(s, 'stat', '');
      scene.img('images/locations/city/shared/metro/station/violin\' + rand(1, 3) + \'.jpg');
      scene.text('As you head through the metro station, you notice a young woman has her violin case open and you can see some money in it already. Several other people have stopped to listen to her play; she isn\'t half bad.');
      scene.actions([
        { label: 'Ignore', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
        { label: 'Listen', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'mood', 'raise', 'tiny');
    scene.img('images/locations/city/shared/metro/station/violin\' + rand(1, 3) + \'.jpg');
    scene.text('You stop and listen to her play several songs.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      { label: 'Give her money [+$func(\'money\', \'get_cost_string\', 50, \'c...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 50, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 50, 'cash');
      qspCall(s, 'mood', 'raise', 'tiny');
      scene.img('images/locations/city/shared/metro/station/givemoney.jpg');
      scene.text('You reach into your purse and pull out some money to drop into her case. She looks up at you and smiles and nods her head, but keeps playing. With your good deed done, you leave the station and go on your way.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    }
  } },
    ]);
  } },
      ]);
    } else {
      scene.img('images/locations/city/shared/metro/station/flashd1.mp4');
      scene.text('As you leave the metro car, you, and nearly everyone else, notice two African men, one of whom has a huge bulge in his pants. When he catches you eyeing them, he stops and pulls his pants down. A massive black cock springs free, which causes a lot more people to look in shock.');
      qspCall(s, 'arousal', 'erotic', 3);
      qspCall(s, 'stat', '');
      qspCall(s, 'willpower', 'exhib', 'self', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Return the favor [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Return the favor', handler: (st: GameState) => {
    if (((s as any).pantyworntype ?? 0) === 'none') {
      if (((s as any).PCloPants ?? 0) > 0) {
        scene.img('images/pc/activities/flashing/pants/inside/pussy/hairy1.jpg');
        scene.text('You smile back at them and pull down your pants, flashing your pussy at them. They wave you over.');
      } else {
        scene.img('images/pc/activities/flashing/dress/inside/pussy/hairy4.jpg');
        // TODO-QSP: dynamic text: You smile back at them and pull up your ' + iif(PCloSkirt > 0, 'skirt', 'dress')...
        scene.text('You smile back at them and pull up your \' + iif(PCloSkirt > 0, \'skirt\', \'dress\') + \', flashing your pussy at them. They wave you over.');
      }
      qspCall(s, 'flash', 'pussy', 'outdoors', 3, 1);
    } else {
      if (((s as any).PCloPants ?? 0) > 0) {
        scene.img('images/pc/activities/flashing/pants/inside/panty/1.jpg');
        scene.text('You smile back at them and pull down your pants, flashing your panties at them. They wave you over.');
      } else {
        scene.img('images/pc/activities/flashing/dress/inside/panty/4.jpg');
        // TODO-QSP: dynamic text: You smile back at them and pull up your ' + iif(PCloSkirt > 0, 'skirt', 'dress')...
        scene.text('You smile back at them and pull up your \' + iif(PCloSkirt > 0, \'skirt\', \'dress\') + \', flashing your panties at them. They wave you over.');
      }
      qspCall(s, 'flash', 'panties', 'outdoors', 1, 1);
    }
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Hurry away', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      { label: 'Go over', goto: ['metro_events', 'twobbc'] },
    ]);
  } },
        ]);
      }
      if (((s as any).metrorand ?? 0) === 6) {
        scene.img('images/locations/city/shared/metro/station/flashus\' + rand(1, 5) + \'.jpg');
        scene.text('As you head through the metro station, you notice a pretty young woman who keeps lifting her skirt and flashing her pussy at various strangers. As you get closer, she smiles at and then flashes you.');
        qspCall(s, 'arousal', 'erotic', 3);
        qspCall(s, 'arousal', 'end');
        qspCall(s, 'willpower', 'exhib', 'self', 'medium');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Return the favor [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Return the favor', handler: (st: GameState) => {
    if (((s as any).pantyworntype ?? 0) === 'none') {
      if (((s as any).PCloPants ?? 0) > 0) {
        scene.img('images/pc/activities/flashing/pants/inside/pussy/hairy1.jpg');
        scene.text('You smile back at her and pull down your pants, flashing your pussy back at her. You both share a laugh before going on your way.');
      } else {
        scene.img('images/pc/activities/flashing/dress/inside/pussy/hairy4.jpg');
        // TODO-QSP: dynamic text: You smile back at her and pull up your ' + iif(PCloSkirt > 0, 'skirt', 'dress') ...
        scene.text('You smile back at her and pull up your \' + iif(PCloSkirt > 0, \'skirt\', \'dress\') + \', flashing your pussy back at her. You both share a laugh before going on your way.');
      }
      qspCall(s, 'flash', 'pussy', 'outdoors', 3, 1);
    } else {
      if (((s as any).PCloPants ?? 0) > 0) {
        scene.img('images/pc/activities/flashing/pants/inside/panty/1.jpg');
        scene.text('You smile back at her and pull down your pants, flashing your panties at her. You both share a laugh before going on your way.');
      } else {
        scene.img('images/pc/activities/flashing/dress/inside/panty/4.jpg');
        // TODO-QSP: dynamic text: You smile back at her and pull up your ' + iif(PCloSkirt > 0, 'skirt', 'dress') ...
        scene.text('You smile back at her and pull up your \' + iif(PCloSkirt > 0, \'skirt\', \'dress\') + \', flashing your panties at her. You both share a laugh before going on your way.');
      }
      qspCall(s, 'flash', 'panties', 'outdoors', 1, 1);
    }
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Hurry away', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Hurry away', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'arousal', 'end');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
        ]);
      } else {
        scene.img('images/locations/city/shared/metro/station/nakedg1.jpg');
        scene.text('As you head through the metro station, you see a naked woman wearing only a pair of boots boarding another train. She\'s casually walking around as if there\'s nothing even remotely out of the ordinary. She\'s garnering a lot of attention from everyone around her, but she seems completely oblivious to it. Within seconds, she boards the train and is gone.');
        qspCall(s, 'arousal', 'erotic', 3);
        qspCall(s, 'arousal', 'end');
        if (((s as any).metrorand ?? 0) === 8) {
          scene.img('images/locations/city/shared/metro/station/nakedg2.jpg');
          scene.text('As you head through the metro station, you see a naked woman huddled down on her knees against one of the pillars. She\'s using her arms to cover up her body as best she can, clearly ashamed.');
          qspCall(s, 'arousal', 'erotic', 3);
          qspCall(s, 'arousal', 'end');
          if (qspFunc(s, 'money', 'can_afford', 50, 'cash') === 0) {
            s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
          } else {
            qspCall(s, 'money', 'pay', 50, 'cash');
            qspCall(s, 'mood', 'raise', 'tiny');
            (s as any).minut = ((s as any).minut ?? 0) + 10;
            scene.img('images/locations/city/shared/metro/station/nakedg2.jpg');
            scene.text('You notice a newspaper on one of the benches and grab it before walking over and offering it to her. Now that you\'re closer, you can see she\'s crying, though she takes the newspaper and covers up as best as she can before you lead her out of the metro and call her a taxi. As you wait for the taxi, you find out she made her boyfriend mad and he stripped her and left her naked. Once the taxi arrives, she thanks you and climbs in.');
            scene.actions([
              { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
            ]);
          }
          scene.actions([
            { label: 'Ignore her', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
            { label: 'Help her [+$func(\'money\', \'get_cost_string\', 50, \'c...]' }, // TODO-QSP: empty action body
          ]);
        }
        if (((s as any).metrorand ?? 0) === 9) {
          scene.img('images/locations/city/shared/metro/station/nakedm1.jpg');
          scene.text('As you head through the metro station, you see a naked man with a huge grin on his face. He seems rather proud at the attention he\'s getting, though you have no idea why. After a quick check, you notice he packs nothing special in the manhood department as he continues on his way, as do you.');
          qspCall(s, 'arousal', 'erotic', 3);
          qspCall(s, 'arousal', 'end');
          scene.actions([
            { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
          ]);
        } else {
          scene.img('images/locations/city/shared/metro/station/nakedp1.jpg');
          scene.text('As you head through the metro station, you see two couples looking a bit strange… All four of them are naked, wearing only shoes while carrying bags with them. They act normal, as if walking through the metro completely naked is a perfectly normal thing to do. They garner a lot of attention from the other people in the station, but they just keep heading towards one of the trains.');
          qspCall(s, 'arousal', 'erotic', 3);
          qspCall(s, 'arousal', 'end');
          if (((s as any).metrorand ?? 0) === 11) {
            scene.img('images/locations/city/shared/metro/station/seethru1.jpg');
            scene.text('As you leave the metro station, you find yourself walking up the stairs behind a woman wearing a sheer dress. It is completely see through, and you can see that she\'s not wearing any underwear, which gives you a very nice view of her ass. Once you reach the street, she heads off down the sidewalk.');
            qspCall(s, 'arousal', 'erotic', 3);
            qspCall(s, 'arousal', 'end');
            scene.actions([
              { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
            ]);
          } else {
            scene.img('images/locations/city/shared/metro/station/sex/jerkoff1.mp4');
            scene.text('As you walk past one of the pillars, you see a man with his pants around his knees jerking off. Just as you walk past, he starts cumming, barely missing a woman that happens to go by at the wrong moment. Once he stops cumming, he pulls his pants up and goes about his business.');
            qspCall(s, 'arousal', 'erotic', 3);
            qspCall(s, 'arousal', 'end');
            if (((s as any).metrorand ?? 0) === 13) {
              scene.img('images/locations/city/shared/metro/station/sex/les1.jpg');
              scene.text('As you head through the metro station, you see a woman sitting on one of the benches in the station. Her skirt is pulled up and she has her legs stretched out, leaving plenty of room for the girl down on all fours in front of her to eat her pussy, whose skirt is also pulled up, giving everyone walking by a perfect view of her bare pussy.');
              scene.text('The one sitting fends off anyone trying to join in while her friend eats her out. Many people stop to watch the pair, several pulling out their phones to record the show.');
              qspCall(s, 'arousal', 'voyeur_sex', 3);
              qspCall(s, 'stat', '');
              scene.actions([
                { label: 'Leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'arousal', 'end');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                { label: 'Record them', handler: (st: GameState) => {
    qspCall(s, 'exp_gain', 'photoskl', 2);
    scene.img('images/locations/city/shared/metro/station/sex/les1.jpg');
    scene.text('You pull out your phone and start recording them. The one on all fours is going at it, and has her friend quickly moaning loudly while clutching at her hair. Seconds later, she gasps loudly and withers against her friend\'s face as she had an orgasm. Once she recovers, they passionately kiss before standing up and straightening their clothes before heading out.');
    qspCall(s, 'arousal', 'voyeur_sex', 3);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
              ]);
            } else {
              (s as any).metrorand['rand'] = Math.floor(Math.random() * 2) + 1;
              scene.img('images/locations/city/shared/metro/station/sex/fuck\' + metrorand[\'rand\'] + \'.jpg');
              scene.text('As you head through the metro station, you see a couple leaning against one of the walls, the woman struggling to keep her moans quiet as the man hammers her for all he is worth. Several people gather around to watch, many of them pulling out their phones to record the scene. A few men try to join in, but are quickly shooed away.');
              qspCall(s, 'arousal', 'voyeur_sex', 3);
              qspCall(s, 'stat', '');
              if (((s as any).metrorand ?? 0) === 15) {
                qspCall(s, 'stat', '');
                scene.img('images/locations/city/shared/metro/station/guitarf\' + rand(1, 2) + \'.jpg');
                scene.text('As you head through the metro station, you notice a woman playing a guitar; she has her guitar case open and you can see some money in it already. Several other people have stopped to listen to her play; she isn\'t half bad.');
                scene.actions([
                  { label: 'Ignore', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                  { label: 'Listen', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'mood', 'raise', 'tiny');
    scene.img('images/locations/city/shared/metro/station/guitarf\' + rand(1, 2) + \'.jpg');
    scene.text('You stop and listen to her play several songs.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      { label: 'Give her money [+$func(\'money\', \'get_cost_string\', 50, \'c...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 50, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 50, 'cash');
      qspCall(s, 'mood', 'raise', 'tiny');
      scene.img('images/locations/city/shared/metro/station/givemoney.jpg');
      scene.text('You reach into your purse and pull out some money to drop into her case. She looks up at you and smiles and nods her head, but keeps playing. With your good deed done, you leave the station and go on your way.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    }
  } },
    ]);
  } },
                ]);
              } else {
                qspCall(s, 'stat', '');
                scene.img('images/locations/city/shared/metro/station/musicgroupm\' + rand(1, 7) + \'.jpg');
                scene.text('As you head through the metro station, you notice a group of men playing music; there is a case open and you can see some money in it already. Several other people have stopped to listen to them play; they aren\'t half bad.');
                if (((s as any).metrorand ?? 0) === 17) {
                  qspCall(s, 'stat', '');
                  scene.img('images/locations/city/shared/metro/station/accordionm\' + rand(1, 2) + \'.jpg');
                  scene.text('As you head through the metro station, you notice a man playing an accordion; he has his case open and you can see some money in it already. Several other people have stopped to listen to him play; he isn\'t half bad.');
                  scene.actions([
                    { label: 'Ignore', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                    { label: 'Listen', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'mood', 'raise', 'tiny');
    scene.img('images/locations/city/shared/metro/station/accordionm\' + rand(1, 2) + \'.jpg');
    scene.text('You stop and listen to him play several songs.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      { label: 'Give him money [+$func(\'money\', \'get_cost_string\', 50, \'c...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 50, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 50, 'cash');
      qspCall(s, 'mood', 'raise', 'tiny');
      scene.img('images/locations/city/shared/metro/station/givemoney.jpg');
      scene.text('You reach into your purse and pull out some money to drop into his case. He looks up at you and smiles and nods his head, but keeps playing. With your good deed done, you leave the station and go on your way.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    }
  } },
    ]);
  } },
                  ]);
                } else {
                  qspCall(s, 'stat', '');
                  scene.img('images/locations/city/shared/metro/station/musicgroup1.jpg');
                  scene.text('As you head through the metro station, you notice a group of men and women playing music; there is a case open and you can see some money in it already. Several other people have stopped to listen to them play; they aren\'t half bad.');
                  if (((s as any).metrorand ?? 0) === 19) {
                    qspCall(s, 'stat', '');
                    scene.img('images/locations/city/shared/metro/station/sex/fuck3.mp4');
                    scene.text('As you head through the metro station, you notice a couple having sex on the other side of the tracks. You can\'t believe your eyes and despite this being a completely public place, you can\'t pull your eyes away. They\'re either a very adventurous couple or a very stupid one, as this terminal is often patrolled by police officers. Regardless, they don\'t seem to be stopping anytime soon, and when the man notices you watching, he flashes you a hand gesture while never missing a thrust.');
                    qspCall(s, 'arousal', 'voyeur_sex', 3);
                    qspCall(s, 'stat', '');
                    scene.actions([
                      { label: 'Hurry away', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'arousal', 'end');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                      { label: 'Record them', handler: (st: GameState) => {
    qspCall(s, 'exp_gain', 'photoskl', 2);
    scene.img('images/locations/city/shared/metro/station/sex/fuck3.mp4');
    scene.text('You pull out your phone and start recording them. He pounds her without mercy, but by the sounds of her moans, she is loving every moment of it. They fuck for several more minutes until he starts to grunt and buries himself balls deep. Once he pulls out of her, they both quickly get dressed and rush to catch a train.');
    qspCall(s, 'arousal', 'voyeur_sex', 3);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
                    ]);
                  } else {
                    scene.img('images/locations/city/shared/metro/station/caught_skirt.jpg');
                    scene.text('As you step off the train and head up the stairs toward the street, you notice a girl trying to adjust her skirt, which has gotten caught up around her waistband. While doing so, she has accidentally exposed her bare ass to everyone behind her. A few seconds later, a few gopniks notice her and start catcalling at the girl, who quickly covers up and rushes away with bright red cheeks.');
                    qspCall(s, 'arousal', 'erotic', 3);
                    qspCall(s, 'arousal', 'end');
                    scene.img('images/locations/city/shared/metro/station/latex.jpg');
                    scene.text('As you head through the metro station, you see two women standing on the platform waiting for the train dressed in latex body suits. Their heels are extremely tall and you imagine how much muscle control it must take just to stand in them, let alone walk.');
                    scene.actions([
                      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                    ]);
                  }
                  scene.actions([
                    { label: 'Ignore', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                    { label: 'Listen', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'mood', 'raise', 'tiny');
    scene.img('images/locations/city/shared/metro/station/musicgroup1.jpg');
    scene.text('You stop and listen to them play several songs.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      { label: 'Give her money [+$func(\'money\', \'get_cost_string\', 50, \'c...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 50, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 50, 'cash');
      qspCall(s, 'mood', 'raise', 'tiny');
      scene.img('images/locations/city/shared/metro/station/givemoney.jpg');
      scene.text('You reach into your purse and pull out some money to drop into the case. One of the men looks up at you and smiles and nods his head, but keeps playing. With your good deed done, you leave the station and go on your way.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    }
  } },
    ]);
  } },
                  ]);
                }
                scene.actions([
                  { label: 'Ignore', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                  { label: 'Listen', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'mood', 'raise', 'tiny');
    scene.img('images/locations/city/shared/metro/station/musicgroupm\' + rand(1, 7) + \'.jpg');
    scene.text('You stop and listen to them play several songs.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      { label: 'Give them money [+$func(\'money\', \'get_cost_string\', 50, \'c...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 50, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 50, 'cash');
      qspCall(s, 'mood', 'raise', 'tiny');
      scene.img('images/locations/city/shared/metro/station/givemoney.jpg');
      scene.text('You reach into your purse and pull out some money to drop into the case. One of the men looks up at you and smiles and nods his head, but keeps playing. With your good deed done, you leave the station and go on your way.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    }
  } },
    ]);
  } },
                ]);
              }
              scene.actions([
                { label: 'Hurry away', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'arousal', 'end');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                { label: 'Record them', handler: (st: GameState) => {
    scene.img('images/locations/city/shared/metro/station/sex/fuck\' + metrorand[\'rand\'] + \'.jpg');
    qspCall(s, 'exp_gain', 'photoskl', 2);
    scene.text('You pull out your phone and start recording them. He pounds her without mercy, but by the sounds of her moans, she is loving every moment of it. They fuck for several more minutes until he starts to grunt and buries himself balls deep. Once he pulls out of her, they both quickly get dressed and hurry to catch a train.');
    qspCall(s, 'arousal', 'voyeur_sex', 3);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
              ]);
            }
            scene.actions([
              { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
            ]);
          }
          scene.actions([
            { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
          ]);
        }
        scene.actions([
          { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
        ]);
      }
      scene.actions([
        { label: 'Hurry away', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'arousal', 'end');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
        { label: 'Stare in shock', handler: (st: GameState) => {
    scene.img('images/pc/reactions/shock.jpg');
    scene.text('It\'s so big that you can\'t help but stare at it while wondering if his friend is as big as he is. You notice them smiling and staring at you as he puts his dick back away they wave you over.');
    qspCall(s, 'arousal', 'erotic', 3);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Hurry away', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      { label: 'Go over', goto: ['metro_events', 'twobbc'] },
    ]);
  } },
        { label: 'Lick your lips', handler: (st: GameState) => {
    scene.img('images/pc/reactions/shock.jpg');
    scene.text('You lick your lips at the sight. They see that and both grin and wave you over he puts his dick away.');
    qspCall(s, 'arousal', 'erotic', 3);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Hurry away', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      { label: 'Go over', goto: ['metro_events', 'twobbc'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Ignore', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      { label: 'Listen', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'mood', 'raise', 'tiny');
    scene.img('images/locations/city/shared/metro/station/guitar\' + rand(1, 7) + \'.jpg');
    scene.text('You stop and listen to him play several songs.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      { label: 'Give him money [+$func(\'money\', \'get_cost_string\', 50, \'c...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 50, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 50, 'cash');
      qspCall(s, 'mood', 'raise', 'tiny');
      scene.img('images/locations/city/shared/metro/station/givemoney.jpg');
      scene.text('You reach into your purse and pull out some money to drop into his case. He looks up at you and smiles and nods his head, but keeps playing. With your good deed done, you leave the station and go on your way.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    }
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'events':
      enterEvents(s, scene);
      break;
    case 'frot':
      enterFrot(s, scene);
      break;
    case 'a':
      enterA(s, scene);
      break;
    case 'b':
      enterB(s, scene);
      break;
    case 'c':
      enterC(s, scene);
      break;
    case 'fin':
      enterFin(s, scene);
      break;
    case 'fin2':
      enterFin2(s, scene);
      break;
    case 'station':
      enterStation(s, scene);
      break;
    default:
      enterEvents(s, scene);
      break;
  }
}

export const metro_events: LocationDef = {
  name: 'metro_events',
  title: 'You feel something solid pressing against your ass. A few se',
  region: 'other',
  enter: enter,
};
