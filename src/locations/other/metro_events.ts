import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterEvents(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_transportVars ?? {})['rand'] = Math.floor(Math.random() * 100) + 0;
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
    if (((s as any).PCloSkirt ?? 0) > 0) {
      scene.actions([{ label: 'Continue', goto: ['metro_events', 'b'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['metro_events', 'c'] }]);
    }
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
      { label: 'Move away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
        { label: 'Move away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
        { label: 'Move away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
      { label: 'Move away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
        { label: 'Move away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
        { label: 'Move away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
        { label: 'Pull your hand away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
        { label: 'Pull your hand away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
        { label: 'Move away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
      { label: 'Move away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
        { label: 'Move away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
        { label: 'Move away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
        { label: 'Move away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
        { label: 'Resist and keep jerking him off [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
        { label: 'Resist and keep jerking him off [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
        { label: 'Move away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
    if (((s as any).metrorand ?? 0) === 1) {
      qspCall(s, 'stat', '');
      scene.img('images/locations/city/shared/metro/station/guitar\' + rand(1, 7) + \'.jpg');
      scene.text('As you head through the metro station, you notice a man playing a guitar; he has his guitar case open and you can see some money in it already. Several other people have stopped to listen to him play; he isn\'t half bad.');
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
    } else {
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
        if (((s as any).metrorand ?? 0) < 6) {
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
              { label: 'Return the favor [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
        } else {
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
                { label: 'Return the favor [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
            if (((s as any).metrorand ?? 0) === 7) {
              scene.img('images/locations/city/shared/metro/station/nakedg1.jpg');
              scene.text('As you head through the metro station, you see a naked woman wearing only a pair of boots boarding another train. She\'s casually walking around as if there\'s nothing even remotely out of the ordinary. She\'s garnering a lot of attention from everyone around her, but she seems completely oblivious to it. Within seconds, she boards the train and is gone.');
              qspCall(s, 'arousal', 'erotic', 3);
              qspCall(s, 'arousal', 'end');
              scene.actions([
                { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
              ]);
            } else {
              if (((s as any).metrorand ?? 0) === 8) {
                scene.img('images/locations/city/shared/metro/station/nakedg2.jpg');
                scene.text('As you head through the metro station, you see a naked woman huddled down on her knees against one of the pillars. She\'s using her arms to cover up her body as best she can, clearly ashamed.');
                qspCall(s, 'arousal', 'erotic', 3);
                qspCall(s, 'arousal', 'end');
                scene.actions([
                  { label: 'Ignore her', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                  { label: 'Help her [+$func(\'money\', \'get_cost_string\', 50, \'c...]', handler: (st: GameState) => {
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
  } },
                ]);
              } else {
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
                  if (((s as any).metrorand ?? 0) === 10) {
                    scene.img('images/locations/city/shared/metro/station/nakedp1.jpg');
                    scene.text('As you head through the metro station, you see two couples looking a bit strange… All four of them are naked, wearing only shoes while carrying bags with them. They act normal, as if walking through the metro completely naked is a perfectly normal thing to do. They garner a lot of attention from the other people in the station, but they just keep heading towards one of the trains.');
                    qspCall(s, 'arousal', 'erotic', 3);
                    qspCall(s, 'arousal', 'end');
                    scene.actions([
                      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                    ]);
                  } else {
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
                      if (((s as any).metrorand ?? 0) === 12) {
                        scene.img('images/locations/city/shared/metro/station/sex/jerkoff1.mp4');
                        scene.text('As you walk past one of the pillars, you see a man with his pants around his knees jerking off. Just as you walk past, he starts cumming, barely missing a woman that happens to go by at the wrong moment. Once he stops cumming, he pulls his pants up and goes about his business.');
                        qspCall(s, 'arousal', 'erotic', 3);
                        qspCall(s, 'arousal', 'end');
                        scene.actions([
                          { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                        ]);
                      } else {
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
                          if (((s as any).metrorand ?? 0) === 14) {
                            ((s as any).metrorand ?? {})['rand'] = Math.floor(Math.random() * 2) + 1;
                            scene.img('images/locations/city/shared/metro/station/sex/fuck\' + metrorand[\'rand\'] + \'.jpg');
                            scene.text('As you head through the metro station, you see a couple leaning against one of the walls, the woman struggling to keep her moans quiet as the man hammers her for all he is worth. Several people gather around to watch, many of them pulling out their phones to record the scene. A few men try to join in, but are quickly shooed away.');
                            qspCall(s, 'arousal', 'voyeur_sex', 3);
                            qspCall(s, 'stat', '');
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
                          } else {
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
                              if (((s as any).metrorand ?? 0) === 16) {
                                qspCall(s, 'stat', '');
                                scene.img('images/locations/city/shared/metro/station/musicgroupm\' + rand(1, 7) + \'.jpg');
                                scene.text('As you head through the metro station, you notice a group of men playing music; there is a case open and you can see some money in it already. Several other people have stopped to listen to them play; they aren\'t half bad.');
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
                              } else {
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
                                  if (((s as any).metrorand ?? 0) === 18) {
                                    qspCall(s, 'stat', '');
                                    scene.img('images/locations/city/shared/metro/station/musicgroup1.jpg');
                                    scene.text('As you head through the metro station, you notice a group of men and women playing music; there is a case open and you can see some money in it already. Several other people have stopped to listen to them play; they aren\'t half bad.');
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
                                  } else {
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
                                      if (((s as any).metrorand ?? 0) === 20) {
                                        scene.img('images/locations/city/shared/metro/station/caught_skirt.jpg');
                                        scene.text('As you step off the train and head up the stairs toward the street, you notice a girl trying to adjust her skirt, which has gotten caught up around her waistband. While doing so, she has accidentally exposed her bare ass to everyone behind her. A few seconds later, a few gopniks notice her and start catcalling at the girl, who quickly covers up and rushes away with bright red cheeks.');
                                        qspCall(s, 'arousal', 'erotic', 3);
                                        qspCall(s, 'arousal', 'end');
                                        scene.actions([
                                          { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                                        ]);
                                      } else {
                                        scene.img('images/locations/city/shared/metro/station/latex.jpg');
                                        scene.text('As you head through the metro station, you see two women standing on the platform waiting for the train dressed in latex body suits. Their heels are extremely tall and you imagine how much muscle control it must take just to stand in them, let alone walk.');
                                        scene.actions([
                                          { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    dynamicGoto(st, 'loc', 'loc_arg');
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
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterTrain(s: GameState, scene: SceneBuilder): void {
  (s as any).metrorand = Math.floor(Math.random() * 34) + 0;
  if (((s as any).metrorand ?? 0) === 1) {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/shared/metro/annoyed.jpg');
    scene.text('As you take a seat on the metro, you hear a huff. You glance up to see a woman giving you a dirty look, like you took her seat or something. She moves over to sit across from you, and for the rest of the ride and continues giving you a dirty look. You have no idea what you did, but whatever it was really pissed her off.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } else {
    if (((s as any).metrorand ?? 0) === 2) {
      qspCall(s, 'stat', '');
      if ((!((s as any).PCloSkirt ?? 0))) {
        scene.actions([{ label: 'Continue', goto: ['metro', 'vagon'] }]);
      }
      scene.img('images/locations/city/shared/metro/draft.mp4');
      scene.text('The train car is in desperate need of cleaning, so you choose to stand for the duration of the ride. There\'s also a draft in the car, which lifts your skirt every few seconds.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    } else {
      if (((s as any).metrorand ?? 0) === 3) {
        scene.img('images/locations/city/shared/metro/flasha\' + rand(1, 2) + \'.jpg');
        scene.text('As you ride the metro, you notice a young woman who seems to have almost everyone\'s attention, and you soon learn why. She repeatedly lifts her skirt up, flashing her ass at the other passengers. She seems to love the attention that she\'s getting, as she maintains a very pleased smile.');
        qspCall(s, 'arousal', 'erotic_nudity', 5);
        qspCall(s, 'arousal', 'end');
        scene.actions([
          { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
        ]);
      } else {
        if (((s as any).metrorand ?? 0) === 4) {
          scene.img('images/locations/city/shared/metro/flashb\' + rand(1, 2) + \'.jpg');
          scene.text('As you ride the metro, you notice a young woman who seems to have almost everyone\'s attention, and you soon learn why. She repeatedly lifts her shirt up, flashing her breasts at the other passengers. She seems to love the attention she\'s getting, as she maintains a very pleased smile.');
          qspCall(s, 'arousal', 'erotic_nudity', 5);
          qspCall(s, 'arousal', 'end');
          scene.actions([
            { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
          ]);
        } else {
          if (((s as any).metrorand ?? 0) === 5) {
            scene.img('images/locations/city/shared/metro/flashd1.jpg');
            scene.text('As you ride the metro, you notice a young man. As you look in his direction, he reaches into his pants, pulls out his cock and stares at it. He occasionally bounces it in place as if he\'s playing with it.');
            qspCall(s, 'arousal', 'erotic_nudity', 5);
            qspCall(s, 'arousal', 'end');
            scene.actions([
              { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
            ]);
          } else {
            if (((s as any).metrorand ?? 0) === 6) {
              scene.img('images/locations/city/shared/metro/flashg\' + rand(1, 3) + \'.jpg');
              scene.text('As you ride the metro, you notice a young woman who seems to have almost everyone\'s attention and you soon learn why. She repeatedly pulls her clothes away, flashing her naked body at the other passengers. She seems to love the attention she\'s getting, as she maintains a very pleased smile.');
              qspCall(s, 'arousal', 'erotic_nudity', 5);
              qspCall(s, 'arousal', 'end');
              scene.actions([
                { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
              ]);
            } else {
              if (((s as any).metrorand ?? 0) === 7) {
                if (((s as any).pcs_hotcat ?? 0) < 7) {
                  scene.actions([{ label: 'Continue', goto: ['metro', 'vagon'] }]);
                }
                scene.img('images/locations/city/shared/metro/flashus\' + rand(1, 5) + \'.jpg');
                scene.text('As you ride the metro, you notice a young woman. When she sees you looking at her, she gives you a wicked grin and winks before spreading her legs, showing off her pussy from under her skirt. She sticks out her tongue and flicks it at you, as if mimicking eating pussy.');
                qspCall(s, 'arousal', 'erotic_nudity', 5);
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
                    { label: 'Return the favor [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
                  { label: 'Ignore her', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                ]);
              } else {
                if (((s as any).metrorand ?? 0) === 8) {
                  qspCall(s, 'stat', '');
                  scene.img('images/locations/city/shared/metro/girlcat.jpg');
                  scene.text('As you ride the metro, you notice a young woman sitting across from you playing on her phone, but that\'s not what draws your attention to her; she has large black cat sitting in her lap. The cat seems surprisingly calm and happy considering the strange people around. She occasionally reaches down to pet the cat while playing on her phone. Once the train comes to a stop, she lifts the cat and carries it in her arms as she disembarks.');
                  scene.actions([
                    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                  ]);
                } else {
                  if (((s as any).metrorand ?? 0) === 9) {
                    qspCall(s, 'stat', '');
                    scene.img('images/locations/city/shared/metro/kilt.jpg');
                    scene.text('As you ride the metro, you notice a foreign man wearing a kilt. You overhear several other men commenting on him wearing a skirt, which he just ignores. He\'s likely used to such comments.');
                    scene.actions([
                      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                    ]);
                  } else {
                    if (((s as any).metrorand ?? 0) === 10) {
                      qspCall(s, 'stat', '');
                      scene.img('images/locations/city/shared/metro/manasleep.jpg');
                      scene.text('As you ride the metro, you notice a young man laying on the floor of the car in front of one of the doors. He seems to be fast asleep, or passed out. Several other people his age are sitting near him, likely his friends taking him home. When your stop arrives, everyone just steps over him as they enter or exit the train. You quickly follow suit.');
                      scene.actions([
                        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                      ]);
                    } else {
                      if (((s as any).metrorand ?? 0) === 11) {
                        scene.img('images/locations/city/shared/metro/nakedg\' + rand(1, 5) + \'.jpg');
                        scene.text('As you find a seat, you notice a woman wearing only a pair of shoes. She is strangely calm, as if riding the metro naked was the most normal thing in the world. She gets off at the next stop, leaving you wondering why she was naked, and where she was going.');
                        qspCall(s, 'arousal', 'erotic_nudity', 5);
                        qspCall(s, 'arousal', 'end');
                        scene.actions([
                          { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                        ]);
                      } else {
                        if (((s as any).metrorand ?? 0) === 12) {
                          scene.img('images/locations/city/shared/metro/nakedm\' + rand(1, 2) + \'.jpg');
                          scene.text('As you find a seat, you notice a naked man who acts as if walking around naked is the most normal thing in the world to do. He gets off at the next stop, leaving you wondering why he was naked, and where he was going.');
                          qspCall(s, 'arousal', 'erotic_nudity', 5);
                          qspCall(s, 'arousal', 'end');
                          scene.actions([
                            { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                          ]);
                        } else {
                          if (((s as any).metrorand ?? 0) === 13) {
                            scene.img('images/locations/city/shared/metro/nakedgm1.jpg');
                            scene.text('As you find a seat, you notice several naked men who appear to be a little drunk as they laugh and talk. They seem to be aware of all the looks that they\'re getting, finding it amusing more than anything. They often wink at any of the women looking their way. They all get off at the next stop, leaving you wondering why they were naked, and where they were going.');
                            qspCall(s, 'arousal', 'erotic_nudity', 5);
                            qspCall(s, 'arousal', 'end');
                            scene.actions([
                              { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                            ]);
                          } else {
                            if (((s as any).metrorand ?? 0) === 14) {
                              scene.img('images/locations/city/shared/metro/sex/3some1.mp4');
                              scene.text('As you find a seat, you notice a woman half naked kneeling in one of the seats, a man behind her fucking her roughly while she sucks the cock of another man. This goes on for some time until both of the men cum. Once done, they get dressed and sit together to start talking among themselves. They remain on the train as you get off at your stop.');
                              qspCall(s, 'arousal', 'voyeur_sex', 5);
                              qspCall(s, 'arousal', 'end');
                              scene.actions([
                                { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                              ]);
                            } else {
                              if (((s as any).metrorand ?? 0) === 15) {
                                scene.img('images/locations/city/shared/metro/sex/anal1.jpg');
                                scene.text('As you find a seat, you notice a woman naked from the waist down on all fours in the middle of the car. She seems to have a collar around her neck with a leash attached. Another woman is squatting in front of her while reaching back to pull her ass cheeks apart. A man behind the leashed girl grabs his cock and begins pounding her ass, the sounds of her cries making it hard to tell if she\'s enjoying the experience or not.');
                                scene.text('Once he finishes, the squatting woman reaches down and grabs the leash before tightly pulling on it, almost choking the other girl. She and the man talk for a bit while the leashed girl stays on her knees with cum running down her thighs. After their talk, the man goes to take a seat while the woman holding the leash walks over to another spot to sit, tugging on the leash to pull the other girl along. After a few minutes, she leans over and whispers something to the leashed girl, who then gets dressed, but remains kneeling at the feet of what can only be her dominatrix.');
                                qspCall(s, 'arousal', 'erotic_nudity', 5);
                                qspCall(s, 'arousal', 'end');
                                scene.actions([
                                  { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                                ]);
                              } else {
                                if (((s as any).metrorand ?? 0) === 16) {
                                  scene.img('images/locations/city/shared/metro/sex/fingering1.jpg');
                                  scene.text('As you find a seat, you notice a woman with her skirt pulled up and panties pushed aside being finger banged by a man in a suit. Her cries of ecstasy get louder and louder until she finally climaxes, causing her legs to buckle, forcing the man to catch her before she crumples to the floor. She leans against him as he holds her tight, pulling her clothes back in place. You can hear them laughing at the attention they got before they quickly exit at the next stop.');
                                  qspCall(s, 'arousal', 'voyeur_sex', 5);
                                  qspCall(s, 'arousal', 'end');
                                  scene.actions([
                                    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                                  ]);
                                } else {
                                  if (((s as any).metrorand ?? 0) === 17) {
                                    scene.img('images/locations/city/shared/metro/sex/fuck\' + rand(1, 3) + \'.mp4');
                                    scene.text('As you find a seat, you notice a couple having intercourse in the car, going at each other like animals. Many people are watching them, some even pulling out their phones to record them. They switch between several sex positions during the ride, getting more and more turned on. The man seems to have a lot of stamina, as they are still going at it as you leave the car at your stop.');
                                    qspCall(s, 'arousal', 'voyeur_sex', 5);
                                    qspCall(s, 'arousal', 'end');
                                    scene.actions([
                                      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                                    ]);
                                  } else {
                                    if (((s as any).metrorand ?? 0) === 18) {
                                      scene.img('images/locations/city/shared/metro/sex/les1.jpg');
                                      scene.text('As you find a seat, you notice a girl kneeling in her seat facing the wrong way. Her skirt is pulled up, and her panties are down around her knees as another girl squats behind her, eating her pussy. This goes on for several minutes until the girl finally has an orgasm. Once she\'s finished, she gets dressed and sits by her friend. They make out for the remainder of their journey, leaving the car at the next stop.');
                                      qspCall(s, 'arousal', 'voyeur_sex', 5);
                                      qspCall(s, 'arousal', 'end');
                                      scene.actions([
                                        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                                      ]);
                                    } else {
                                      if (((s as any).metrorand ?? 0) === 19) {
                                        qspCall(s, 'stat', '');
                                        scene.img('images/locations/city/shared/metro/boystuffed1.jpg');
                                        scene.text('As you find a seat, you notice a young man close to your own age across from you. He seems to be fast asleep while clutching a stuffed animal tightly in his arms. Several of the other passengers give him amused looks.');
                                        scene.actions([
                                          { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                                        ]);
                                      } else {
                                        if (((s as any).metrorand ?? 0) === 20) {
                                          qspCall(s, 'stat', '');
                                          scene.img('images/locations/city/shared/metro/girlsbff\' + rand(1, 2) + \'.jpg');
                                          scene.text('As you find a seat, you see some girls horsing around, talking loudly and goofing off. While they seem to be having fun, they\'re also annoying several of the other passengers.');
                                          scene.actions([
                                            { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                                          ]);
                                        } else {
                                          if (((s as any).metrorand ?? 0) === 21) {
                                            qspCall(s, 'stat', '');
                                            scene.img('images/locations/city/shared/metro/passedoutg1.jpg');
                                            scene.text('As you find a seat, you notice a woman passed out in the seat across from you; you can smell the alcohol from here. Most of the other passengers ignore her, but you notice more than a few men eying her.');
                                            scene.actions([
                                              { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                                            ]);
                                          } else {
                                            if (((s as any).metrorand ?? 0) === 22) {
                                              qspCall(s, 'stat', '');
                                              scene.img('images/locations/city/shared/metro/sleepb1.jpg');
                                              scene.text('As you find a seat, you notice a young man sound asleep snoring across from you, having managed to cram himself akwardly into the seat. You don\'t know how he manged to get comfortable enough to fall asleep, but imagine he will be sore when he wakes up.');
                                              scene.actions([
                                                { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                                              ]);
                                            } else {
                                              if (((s as any).metrorand ?? 0) === 23) {
                                                qspCall(s, 'stat', '');
                                                scene.img('images/locations/city/shared/metro/sleepcouple.jpg');
                                                scene.text('As you find a seat, you a couple across from you. The man is sitting up and snoring while the woman is laying on the seat next to him with her head in his lap.');
                                                scene.actions([
                                                  { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                                                ]);
                                              } else {
                                                if (((s as any).metrorand ?? 0) === 24) {
                                                  scene.img('images/locations/city/shared/metro/sleepexf1.jpg');
                                                  scene.text('As you find a seat, you notice a woman passed out across from you; you can smell the alcohol from here. Her jacket is open and her shirt pulled down, leaving one of her breasts exposed for everyone to see. Several passengers give her a glance now and again, and a few even take her picture. A group of young men are whispering at each other and laughing while watching her.');
                                                  qspCall(s, 'arousal', 'erotic_nudity', 5);
                                                  qspCall(s, 'arousal', 'end');
                                                  scene.actions([
                                                    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                                                  ]);
                                                } else {
                                                  if (((s as any).metrorand ?? 0) === 25) {
                                                    qspCall(s, 'stat', '');
                                                    scene.img('images/locations/city/shared/metro/sleepg1.jpg');
                                                    scene.text('As you find a seat, you notice a woman laying in the seat across from yours sound asleep. Most of the passengers ignore her, though one man seems to be watching her. You don\'t know if he knows her or is thinking about doing something.');
                                                    scene.actions([
                                                      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                                                    ]);
                                                  } else {
                                                    if (((s as any).metrorand ?? 0) === 26  &&  (((s as any).hour ?? 0) === 7  ||  ((s as any).hour ?? 0) === 15)) {
                                                      qspCall(s, 'stat', '');
                                                      scene.img('images/characters/shared/headshots_main/big77.jpg');
                                                      scene.text('You spot your neighbor <a href="exec:gt \'tryndin\', \'tryndinmetro\'">Tryndin</a> sitting across from you.');
                                                      scene.actions([
                                                        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                                                      ]);
                                                    } else {
                                                      if (((s as any).metrorand ?? 0) === 27) {
                                                        qspCall(s, 'stat', '');
                                                        scene.img('images/locations/city/shared/metro/dog.jpg');
                                                        scene.text('It seems as if some of the famous "Moscow Metro Dogs" have made their way to St. Petersburg. You heard about them on the news a while back, but today was the first day you\'ve seen one for yourself. It was pretty cute and it made you happy to see the other passengers petting it. Still, you don\'t think the public metro is really a place for a dog to be, and wonder about taking it home with you, or at least to the local animal shelter. Before you can inspect it\'s collar however, the metro doors open and the dog trots away.');
                                                        scene.actions([
                                                          { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                                                        ]);
                                                      } else {
                                                        if (((s as any).metrorand ?? 0) === 28) {
                                                          qspCall(s, 'stat', '');
                                                          scene.img('images/locations/city/shared/metro/mannequin.jpg');
                                                          scene.text('Sitting across from you is a woman who is hauling some sort of mannequin around in a bag. You wonder what it\'s for or where she\'s going. Maybe she\'s a clothing designer or something? No one else seems to think it\'s unusual though, so you shrug it off and play on your phone for the rest of the trip.');
                                                          scene.actions([
                                                            { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                                                          ]);
                                                        } else {
                                                          if (((s as any).metrorand ?? 0) === 29) {
                                                            qspCall(s, 'stat', '');
                                                            scene.img('images/locations/city/shared/metro/mask.jpg');
                                                            scene.text('You honestly don\'t understand how some people get to be the way they are, but such is life in the city. You just never know what you\'re going to encounter, especially on the metro. You wonder if this person is asleep under their mask as they\'re sitting there as still as a statue. Another curious passenger must be thinking the same thing and walks up to him, cautiously reaching out to touch his mask. Suddenly, the masked man jumps to life and starts barking and growling at the lady, who darts away into the crowd of other passengers, who are now trying to see what all the commotion is about. As soon as you reach your destination, you get up quickly and leave the bizarre scene.');
                                                            scene.actions([
                                                              { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                                                            ]);
                                                          } else {
                                                            if (((s as any).metrorand ?? 0) === 30) {
                                                              qspCall(s, 'stat', '');
                                                              scene.img('images/locations/city/shared/metro/oldman_nipples.jpg');
                                                              scene.text('You take a seat on the metro and wait for it to head to your destination. Across from you sits an older man, who appears to be rather scruffy and dirty. You wonder if he\'s homeless, or just poor, and almost feel sorry for him. That\'s when he opens his jacket and reveals a very provocative women\'s top, with the nipples cut out of it. A woman a few seats away shouts "Oh my God!" and starts to film the man with her phone, who starts making lewd faces at her while tweaking his nipples, clearly liking the attention.');
                                                              scene.actions([
                                                                { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                                                              ]);
                                                            } else {
                                                              if (((s as any).metrorand ?? 0) === 31) {
                                                                qspCall(s, 'stat', '');
                                                                scene.img('images/locations/city/shared/metro/police.jpg');
                                                                scene.text('As you take your spot in the metro, you notice a police officer standing across from you, staring at you. You try to ignore him the best you can by looking down at your phone or around to the other passengers. Whenever you glance back up at him however, he\'s still staring right at you. You don\'t think he\'s even blinked once. "What\'s his problem?" you think to yourself.');
                                                                scene.text('You do your best to turn away from his creepy stare, but there\'s only so much you can do. Even as the train pulls up to your stop, you cast one more peek in his direction and he\'s still staring right into your eyes.');
                                                                scene.actions([
                                                                  { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                                                                ]);
                                                              } else {
                                                                if (((s as any).metrorand ?? 0) === 32) {
                                                                  qspCall(s, 'stat', '');
                                                                  scene.img('images/locations/city/shared/metro/rude.jpg');
                                                                  scene.text('The metro is mostly empty today. A lady sits across from you and you close your eyes here and there, almost dozing off. That\'s when a man enters the metro and sits right next to the woman and spreads his legs wide, pressing them into her. There is plenty of room in the metro for this guy to sit, so he\'s either being intentionally rude or intentionally creepy. He has one of his hands underneath the bags he\'s holding and it seems to be moving slightly… Is he touching himself? Gross! The woman doesn\'t tolerate this for long and huffs loudly, sliding down the bench to get away from him. He doesn\'t follow her, but continues to sit there while breathing heavily through his mouth, his arm still moving under the bag.');
                                                                  scene.actions([
                                                                    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                                                                  ]);
                                                                } else {
                                                                  if (((s as any).metrorand ?? 0) === 33) {
                                                                    qspCall(s, 'stat', '');
                                                                    scene.img('images/locations/city/shared/metro/toclose.mp4');
                                                                    scene.text('The metro is exceptionally packed today, with most of the younger passengers opting to stand to let the elderly take the limited seats. As the metro beings to move, a middle aged man with chiseled features stands next to you, placing his hand very near yours on the pole. You were there first and so you hold your ground, trying to not to move as the metro car twists and turns along it\'s track, but the rocking of the train causes the man\'s body to occasionally press up against your own.');
                                                                    scene.text('"Why is he standing so close to me? Is he going to try something?" you think to yourself, your mind preparing for the worst. For the remainder of the trip, the stranger never says a word to you and never intentionally touches any part of your body, but he is definitely too close for comfort. When the train finally comes to a stop, you push towards the doors the second they open and get out of the station as quickly as you can.');
                                                                    scene.actions([
                                                                      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                                                                    ]);
                                                                  } else {
                                                                    qspCall(s, 'stat', '');
                                                                    scene.img('images/locations/city/shared/metro/kilt.jpg');
                                                                    scene.text('As you ride the metro, you notice a foreign man wearing a kilt. You overhear several other men commenting on him wearing a skirt, which he just ignores. He\'s likely used to such comments.');
                                                                    scene.actions([
                                                                      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
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
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterTwobbc(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/shared/metro/metrorestroom.jpg');
  scene.text('You walk over to them. "Come, let\'s go have some fun, yes?" the one who pulled his pants down says to you in badly accented Russian; it sounds like he might be from Africa. He points and you turn to that he\'s pointing at the restrooms. It\'s clear what they want.');
  qspCall(s, 'willpower', 'sex', 'resist', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Tell them no [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Tell them no [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/pc/reactions/no.jpg');
    scene.text('You shake your head and step away, causing them both to frown. "Sorry, I was just playing. I didn\'t mean to tease you," you tell them before turning and hurrying away.');
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
    { label: 'Go with them', handler: (st: GameState) => {
    scene.img('images/locations/city/shared/metro/sex/station/2bbc1.jpg');
    scene.text('You decide to go with them. As soon as you walk in the mens room, one of them takes you over near the stalls and starts kissing you while his friend seems to be doing something at the door.');
    scene.text('After a few minutes of kissing, he pushes you down by your shoulders.');
    qspCall(s, 'arousal', 'foreplay', 3, 'exhibitionism');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'sex', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Change your mind [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Change your mind [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/shared/metro/sex/station/2bbcno.jpg');
    scene.text('You pull away and shake your head. "I\'m sorry, but I can\'t do this." You turn and rush to the door where the other one is; it looks like he might stop you, but his friend says something you don\'t understand and he steps aside. You rush out of the mens room, breathing heavily.');
    qspCall(s, 'arousal', 'foreplay', 3, 'exhibitionism');
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
      { label: 'Squat', handler: (st: GameState) => {
    qspCall(s, 'npcgeneratec', '', 0, 'Black guy from the metro', 0, Math.floor(Math.random() * 3) + 2, 1);
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'npcgeneratec', '', 0, 'Other black guy from the metro', 0, Math.floor(Math.random() * 3) + 2, 1);
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'a');
    scene.img('images/locations/city/shared/metro/sex/station/2bbc2.jpg');
    scene.text('You squat down and rub his crotch through his pants; his cock is already rock-hard. He looks down at you and in accented Russian says "Suck it." He seems to speak Russian better than his friend, who seems to be trying to jam something under the door.');
    qspCall(s, 'arousal', 'foreplay_give', 3, ((s as any).npcID ?? 0), 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck his dick', handler: (st: GameState) => {
    scene.img('images/locations/city/shared/metro/sex/station/2bbc3.jpg');
    scene.text('You drop to your knees as you unbutton his pants before reaching inside and pulling his cock free. You stroke it several times before opening your mouth. You take his cock into your mouth, wrapping your lips tightly around the shaft and bobbing your head up and down as you suck his cock. While you\'re sucking his dick, you notice his friend walking back over and they exchange a few words in a language you don\'t recognize. After their exchange of words, the other guy pulls his dick out of your mouth and they trade places.');
    qspCall(s, 'arousal', 'bj', 3, ((s as any).npcID ?? 0), 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck the other dick', handler: (st: GameState) => {
    scene.img('images/locations/city/shared/metro/sex/station/2bbc4.jpg');
    scene.text('As soon as he steps in place of where his friend was, his dick already out, you wrap your lips around his dick and start sucking it. The other one now walks to the other side of you, and you reach over to play with his balls and jerk him off at the same time. By the sounds of their moans and tone of voice when they talk to each other, they sound happy.');
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID1 ?? 0), 'exhibitionism', 'group');
    qspCall(s, 'arousal', 'hj', (-5), ((s as any).npcID ?? 0), 'exhibitionism', 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck the other dick', handler: (st: GameState) => {
    scene.img('images/locations/city/shared/metro/sex/station/2bbc5.jpg');
    scene.text('You start switching which dick you\'re sucking while you jerk the other one off, trying to keep them both happy. Part of you is thrilled at the excitement of blowing two guys in a public mens room, even more so because they are black. The one you are jerking off starts stripping you while waiting for his turn.');
    scene.text('Once you\'re naked, the one you\'re not sucking tries to get you to stand up and bend over.');
    qspCall(s, 'arousal', 'bj', 3, ((s as any).npcID ?? 0), 'exhibitionism', 'group');
    qspCall(s, 'arousal', 'hj', (-2), ((s as any).npcID ?? 0), 'exhibitionism', 'group');
    qspCall(s, 'arousal', 'bj', (-2), ((s as any).npcID1 ?? 0), 'exhibitionism', 'group');
    qspCall(s, 'arousal', 'hj', (-3), ((s as any).npcID1 ?? 0), 'exhibitionism', 'group');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'sex', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Just suck them off [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Just suck them off [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['metro_events', 'twobbcfinish'] },
      ]);
    }
    scene.actions([
      { label: 'Get fucked', handler: (st: GameState) => {
    scene.img('images/locations/city/shared/metro/sex/station/2bbc6.jpg');
    scene.text('You stand up while you keep sucking his friend, leaving you bent over. You feel the head of his hard dick rubbing against your slit, getting the head of his cock and your pussy wet in the process. Once he\'s convinced you\'re wet enough, he slides his dick into your pussy. You feel it filling you up and moan softly around the cock in your mouth. He starts fucking you hard and fast almost at once.');
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID1 ?? 0), 'exhibitionism', 'group', 'sub', 'rough');
    qspCall(s, 'arousal', 'vaginal', (-5), ((s as any).npcID ?? 0), 'exhibitionism', 'group', 'sub', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get fucked again', handler: (st: GameState) => {
    scene.img('images/locations/city/shared/metro/sex/station/2bbc7.jpg');
    scene.text('After a few minutes, the one whose dick you\'re sucking says something to his friend and soon both of them pull out of you. They switch places and you find a wet dick covered in your pussy juices shoved into your mouth. You start sucking on it as you feel the other dick being shoved into your wet pussy and fucking you hard and rough. Several minutes go by before the one fucking you spits on your ass and you feel him working the spit into your asshole with his finger.');
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID ?? 0), 'exhibitionism', 'group', 'sub', 'rough');
    qspCall(s, 'arousal', 'vaginal', (-5), ((s as any).npcID1 ?? 0), 'exhibitionism', 'group', 'sub', 'rough');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'sex', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Finish them off with blowjobs [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Finish them off with blowjobs [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['metro_events', 'twobbcfinish'] },
      ]);
    }
    scene.actions([
      { label: 'Take it up the ass', handler: (st: GameState) => {
    scene.img('images/locations/city/shared/metro/sex/station/2bbc8.jpg');
    scene.text('He pulls his dick out of you and rubs the tip against your anus before pushing against against it until the head of his cock pops into your ass, causing you to groan in pain. He starts fucking your ass as you suck his friend\'s dick, and it doesn\'t take him very long until he works his cock balls deep into your ass and starts hammering away at it. They excitedly talk back and forth while laughing.');
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID ?? 0), 'exhibitionism', 'group', 'sub', 'rough');
    qspCall(s, 'arousal', 'anal', (-5), ((s as any).npcID1 ?? 0), 'exhibitionism', 'group', 'sub', 'rough');
    qspCall(s, 'pain', '', 1, 'asshole', 'stretch');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Another ass pounding', handler: (st: GameState) => {
    scene.img('images/locations/city/shared/metro/sex/station/2bbc9.jpg');
    scene.text('After a few minutes, the one whose dick you\'re sucking starts saying something urgently before they both pull out of you and walk around you, switching positions. The one that was just in your ass does make a detour to grab some toilet paper, which he uses to wipe off his dick before walking over to shove it back in your mouth.');
    scene.text('His friend wastes no time and shoves his cock into your much looser asshole. He very quickly works himself balls deep into your ass, grabbing you by the hips as he starts hammering away at your ass as fast as he can. Several minutes of this go by until they both pull out of you.');
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID1 ?? 0), 'exhibitionism', 'group', 'sub', 'rough');
    qspCall(s, 'arousal', 'anal', (-5), ((s as any).npcID ?? 0), 'exhibitionism', 'group', 'sub', 'rough');
    qspCall(s, 'pain', '', 1, 'asshole', 'stretch');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish them off with blowjobs', goto: ['metro_events', 'twobbcfinish'] },
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
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterTwobbcfinish(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/shared/metro/metrorestroom.jpg');
  scene.text('You get down on your knees between them and alternate between sucking one dick and jerking the other one back and forth until they both start to moan. At that point, you start jerking them both off with their dicks pointed at your face. Seconds later, streams of cum start splattering across your face and dripping onto your breasts.');
  scene.text('Once they finish, they laugh and quickly get dressed. "Thank you, you are very good fuck," one of them says before they both walk out, leaving you naked and covered in their cum. You get up and start getting dressed yourself.');
  qspCall(s, 'arousal', 'bj', 3, ((s as any).npcID1 ?? 0), 'exhibitionism', 'group', 'sub');
  qspCall(s, 'arousal', 'hj', 2, ((s as any).npcID1 ?? 0), 'exhibitionism', 'group', 'sub');
  qspCall(s, 'arousal', 'bj', (-2), ((s as any).npcID ?? 0), 'exhibitionism', 'group', 'sub');
  qspCall(s, 'arousal', 'hj', (-3), ((s as any).npcID ?? 0), 'exhibitionism', 'group', 'sub');
  qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0));
  qspCall(s, 'cum_call', 'breasts', ((s as any).npcID1 ?? 0));
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
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
    case 'train':
      enterTrain(s, scene);
      break;
    case 'twobbc':
      enterTwobbc(s, scene);
      break;
    case 'twobbcfinish':
      enterTwobbcfinish(s, scene);
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
