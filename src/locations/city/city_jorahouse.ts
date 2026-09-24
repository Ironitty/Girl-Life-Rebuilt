import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  // TODO-QSP: end
  scene.actions([
    { label: 'Ring the doorbell', handler: (st: GameState) => {
    if (((st as any).klofQW ?? 0) === 2  &&  ((st as any).hour ?? 0) >= 16  &&  ((st as any).klofday ?? 0) !== ((st as any).daystart ?? 0)) {
      (st as any).klofday = ((st as any).daystart ?? 0);
      qspGoto(st, 'city_jorahouse', 'ev1');
    } else {
      if (((st as any).klofQW ?? 0) > 2  &&  ((st as any).hour ?? 0) >= 16  &&  ((st as any).klofday ?? 0) !== ((st as any).daystart ?? 0)) {
        (st as any).klofday = ((st as any).daystart ?? 0);
        qspGoto(st, 'city_jorahouse', 'start1');
      } else {
        scene.text('No one home');
        scene.actions([
          { label: 'Go home', goto: ['city_residential', ''] },
        ]);
      }
    }
  } },
    { label: 'Go home', goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enterStart1(s: GameState, scene: SceneBuilder): void {
  (s as any).klofday = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).kloftimes = ((s as any).kloftimes ?? 0) + (1);
  qspCall(s, 'stat', '');
  if (((s as any).kloftimes ?? 0) < 10) {
    qspGoto(s, 'city_jorahouse', 'ev7');
  } else {
    scene.img('images/characters/city/jora/klof.jpg');
    scene.text('You ring the doorbell. Jora answers, scratching his belly. He yawns and says he is busy.');
    scene.actions([
      { label: 'Go home', goto: ['city_residential', ''] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterEv1(s: GameState, scene: SceneBuilder): void {
  (s as any).klofday = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).kloftimes = ((s as any).kloftimes ?? 0) + (1);
  qspCall(s, 'stat', '');
  if (((s as any).kloftimes ?? 0) < 10) {
    scene.img('images/characters/city/jora/klof.jpg');
    scene.text('You ring the doorbell.');
    scene.text('You door doesn\'t open and you turn to leave, when the door opens.');
    scene.text('"Hey," you say.');
    scene.text('"Ahh, you." The guy standing in the doorway responds, smiling.');
    scene.actions([
      { label: 'Stop by', goto: ['city_jorahouse', 'ev2'] },
    ]);
  } else {
    scene.img('images/characters/city/jora/klof.jpg');
    scene.text('You ring the doorbell. Jora answers, scratching his belly. He yawns and says he is busy.');
    scene.actions([
      { label: 'Go home', goto: ['city_residential', ''] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterEv2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.img('images/characters/city/jora/klof1.jpg');
  scene.text('You looked around the apartment, it is a pigsty, the wallpaper is peeling and everywhere socks are strewn.');
  scene.text('"How pathetic, you guys live like pigs," you say and smile, your eyes met the guy.');
  scene.text('It\'s nothing, we just arrived in this city haven\'t got everything oganized yet." Says the guy, grinning back at you.');
  scene.text('"I see. I don\'t know your names.');
  scene.text('"Call me Jora, and my sidekick Semyon, and now you\'re introduced, hurry up and clean up this in the apartment."');
  if (((s as any).pcs_horny ?? 0) < 75) {
    scene.actions([
      { label: 'Leave', goto: ['city_jorahouse', 'ev3'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Clean up', goto: ['city_jorahouse', 'ev4'] },
  ]);
  scene.build();
}

function enterEv3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).klofQW = ((s as any).klofQW ?? 0) - (1);
  scene.text('You decide that the guys are looking for a maid, tell them to try the phonebook and leave.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enterEv4(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.img('images/characters/city/jora/klof3.jpg');
  scene.text('Surprised, you approach Jora and question him.');
  scene.text('"Jora, you promised money and entertainment, but so far I have not seen either."');
  scene.text('"Well look, as I said we have not been here long, right now we need a girl for home services."');
  scene.text('"When will have gotten better acquainted, we will talk business."');
  scene.text('"Now be a good girl and take off your clothes, you are now the entertainment."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Fuck Jora', goto: ['city_jorahouse', 'ev5'] },
  ]);
  scene.build();
}

function enterEv5(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A44');
  qspCall(s, 'npcStat', 'A45', 'a');
  scene.img('images/characters/city/jora/sex/klof4.jpg');
  scene.text('You strip off and with little foreplay, Jora fucks you in the pussy. Not long after you have started, the door opens.');
  scene.text('Into the room comes Semyon, "Suck my cock baby, yeah."');
  qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
  (s as any).cumprecheck = 1;
  qspCall(s, 'cum_call', '', ((s as any).npcID ?? 0), 1);
  qspCall(s, 'arousal', 'vaginal', 5, ((s as any).npcID ?? 0), 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Suck him', goto: ['city_jorahouse', 'ev6'] },
  ]);
  scene.build();
}

function enterEv6(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'money', 'earn', 2000);
  scene.img('images/characters/city/jora/sex/klof5.jpg');
  scene.text('Jora fucks you in your pussy, Semyon fucks you in the mouth.');
  (s as any).klofQW = ((s as any).klofQW ?? 0) + (1);
  (s as any).guy = ((s as any).guy ?? 0) + (1);
  qspCall(s, 'cum_call', '', ((s as any).npcID ?? 0), 1);
  qspCall(s, 'cum_call', 'mouth', ((s as any).npcID1 ?? 0), 1);
  (s as any).orgasm_txt = 'The combination is enough to take you past your peak and you orgasm.';
  qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID1 ?? 0), 'sub', 'group');
  (s as any).orgasm_txt = 'The combination is enough to take you past your peak and you orgasm.';
  qspCall(s, 'arousal', 'vaginal', (-5), ((s as any).npcID ?? 0), 'sub', 'group');
  scene.text('You get dressed and ready to go home.');
  scene.text('You are approached by Jora who hands you money, "Earned yourself a crumb."');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go home', goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enterEv7(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.img('images/characters/city/jora/klof1.jpg');
  scene.text('You enter the apartment');
  // TODO-QSP: end
  scene.actions([
    { label: 'Say hello to the guys', goto: ['city_jorahouse', 'ev8'] },
  ]);
  scene.build();
}

function enterEv8(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'dinsexFX', '');
  qspCall(s, 'npcStat', 'A44');
  qspCall(s, 'npcStat', 'A45', 'a');
  scene.img('images/characters/city/jora/sex/klof6.jpg');
  scene.text('"Hey baby" The boys say, baring your chest and starting to caress you.');
  scene.text('"Hello boys, did you miss me?" You say, blushing.');
  qspCall(s, 'arousal', 'foreplay', 5);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Entertain Jora', goto: ['city_jorahouse', 'ev9'] },
    { label: 'Entertain Semyon', goto: ['city_jorahouse', 'ev10'] },
    { label: 'Entertain both', goto: ['city_jorahouse', 'ev19'] },
    { label: 'Talk business with Jora', goto: ['city_jorahouse', 'ev20'] },
  ]);
  scene.build();
}

function enterEv9(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID ?? 0), 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Have Jora fuck your pussy', goto: ['city_jorahouse', 'ev13'] },
    { label: 'Have Jora fuck your ass', goto: ['city_jorahouse', 'ev14'] },
    { label: 'Suck Jora', goto: ['city_jorahouse', 'ev19'] },
  ]);
  scene.build();
}

function enterEv13(s: GameState, scene: SceneBuilder): void {
  (s as any).klofQW = ((s as any).klofQW ?? 0) + (1);
  qspCall(s, 'money', 'earn', 100);
  (s as any).pose = 3;
  (s as any).picrand = (Math.floor(Math.random() * 3) + 7);
  scene.img(`images/characters/city/jora/sex/klof${((s as any).picrand ?? '')}.jpg`);
  scene.text('Jora fucks you in your pussy.');
  qspCall(s, 'arousal', 'vaginal', 30, ((s as any).npcID ?? 0), 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/pc/body/cum/creampie/cumpussy3.jpg');
    scene.text('You get dressed and get ready to go home.');
    scene.text('Jora hands you money, "Earned yourself a crumb."');
    (st as any).guy = ((st as any).guy ?? 0) + (1);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Go home', goto: ['city_residential', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterEv14(s: GameState, scene: SceneBuilder): void {
  (s as any).klofQW = ((s as any).klofQW ?? 0) + (1);
  qspCall(s, 'money', 'earn', 100);
  qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
  (s as any).spafinloc = 4;
  qspCall(s, 'cum_manage', '');
  scene.text('Jora, with full force, hammers you in the ass.');
  qspCall(s, 'arousal', 'anal', 30, ((s as any).npcID ?? 0), 'sub', 'rough');
  qspCall(s, 'stat', '');
  (s as any).picrand = (Math.floor(Math.random() * 3) + 11);
  scene.img(`images/characters/city/jora/sex/klof${((s as any).picrand ?? '')}.jpg`);
  // TODO-QSP: end
  scene.actions([
    { label: '…', handler: (st: GameState) => {
    scene.img('images/characters/city/jora/sex/klof14.jpg');
    scene.text('Jora discharges in your ass, then using a small toy he plays with your ass. It\'s quite pleasant so you don\'t think to question his actions.');
    scene.text('You get dressed and get ready to go home.');
    scene.text('Jora hands you money, "Earned yourself a crumb."');
    (st as any).guy = ((st as any).guy ?? 0) + (1);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Go home', goto: ['city_residential', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterEv15(s: GameState, scene: SceneBuilder): void {
  (s as any).klofQW = ((s as any).klofQW ?? 0) + (1);
  qspCall(s, 'money', 'earn', 100);
  (s as any).spafinloc = 11;
  qspCall(s, 'cum_manage', '');
  scene.text('You passionately clasped Jora member between your lips.');
  qspCall(s, 'arousal', 'bj', 30, ((s as any).npcID ?? 0), 'sub');
  qspCall(s, 'stat', '');
  (s as any).picrand = (Math.floor(Math.random() * 3) + 15);
  scene.img(`images/characters/city/jora/sex/klof${((s as any).picrand ?? '')}.jpg`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.text('Jora discharges himself on your face');
    (st as any).picrand = (Math.floor(Math.random() * 3) + 18);
    scene.img(`images/characters/city/jora/sex/klof${((st as any).picrand ?? '')}.jpg`);
    scene.text('You get dressed and get ready to go home.');
    scene.text('Jora hands you money, "Earned yourself a crumb."');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Go home', goto: ['city_residential', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterEv10(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID1 ?? 0), 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Have Semyon fuck your pussy', goto: ['city_jorahouse', 'ev 16'] },
    { label: 'Have Semyon fuck your ass', goto: ['city_jorahouse', 'ev 17'] },
    { label: 'Suck Semyon', goto: ['city_jorahouse', 'ev 18'] },
  ]);
  scene.build();
}

function enterEv16(s: GameState, scene: SceneBuilder): void {
  (s as any).klofQW = ((s as any).klofQW ?? 0) + (1);
  qspCall(s, 'money', 'earn', 100);
  (s as any).pose = 3;
  (s as any).picrand = (Math.floor(Math.random() * 3) + 7);
  scene.img(`images/characters/city/jora/sex/klof${((s as any).picrand ?? '')}.jpg`);
  scene.text('Semyon fucks you in your pussy.');
  qspCall(s, 'arousal', 'vaginal', 30, ((s as any).npcID1 ?? 0), 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/pc/body/cum/creampie/cumpussy3.jpg');
    scene.text('You get dressed and get ready to go home.');
    scene.text('Seymon hands you money, "Earned yourself a crumb."');
    (st as any).guy = ((st as any).guy ?? 0) + (1);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Go home', goto: ['city_residential', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterEv17(s: GameState, scene: SceneBuilder): void {
  (s as any).klofQW = ((s as any).klofQW ?? 0) + (1);
  qspCall(s, 'money', 'earn', 100);
  (s as any).spafinloc = 4;
  qspCall(s, 'cum_manage', '');
  qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
  scene.text('Seymon, with full force, hammers you in the ass.');
  qspCall(s, 'arousal', 'anal', 30, ((s as any).npcID1 ?? 0), 'sub', 'rough');
  qspCall(s, 'stat', '');
  (s as any).picrand = (Math.floor(Math.random() * 3) + 11);
  scene.img(`images/characters/city/jora/sex/klof${((s as any).picrand ?? '')}.jpg`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/jora/sex/klof14.jpg');
    scene.text('Semyon discharges himself in your ass, as your ass is recovering he massages it with a toy.');
    scene.text('You get dressed and get ready to go home.');
    scene.text('Seymon hands you money, "Earned yourself a crumb."');
    (st as any).guy = ((st as any).guy ?? 0) + (1);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Go home', goto: ['city_residential', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterEv18(s: GameState, scene: SceneBuilder): void {
  (s as any).klofQW = ((s as any).klofQW ?? 0) + (1);
  qspCall(s, 'money', 'earn', 100);
  (s as any).guy = ((s as any).guy ?? 0) + (1);
  (s as any).spafinloc = 12;
  qspCall(s, 'cum_manage', '');
  scene.text('You passionately clasped Semyon member between your lips.');
  qspCall(s, 'arousal', 'bj', 30, ((s as any).npcID1 ?? 0), 'sub');
  qspCall(s, 'stat', '');
  (s as any).picrand = (Math.floor(Math.random() * 3) + 15);
  scene.img(`images/characters/city/jora/sex/klof${((s as any).picrand ?? '')}.jpg`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.text('Semyon cums all over your face');
    (st as any).picrand = (Math.floor(Math.random() * 3) + 18);
    scene.img('images/characters/city/jora/sex/klof18.jpg');
    scene.text('You get dressed and get ready to go home.');
    scene.text('Seymon hands you money, "Earned yourself a crumb."');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Go home', goto: ['city_residential', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterEv19(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 2) + 0) === 1) {
    (s as any).jorasemyon = 1;
  }
  (s as any).klofQW = ((s as any).klofQW ?? 0) + (2);
  qspCall(s, 'money', 'earn', 200);
  (s as any).spafinloc = 11;
  qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
  if (((s as any).jorasemyon ?? 0) === 1) {
    qspCall(s, 'cum_call', 'mouth', 'A44', 1);
    qspCall(s, 'cum_call', '', 'A45', 1);
  } else {
    qspCall(s, 'cum_call', 'mouth', 'A45', 1);
    qspCall(s, 'cum_call', '', 'A44', 1);
  }
  (s as any).picrand = (Math.floor(Math.random() * 3) + 1);
  if (((s as any).picrand ?? 0) === 1) {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/city/jora/sex/klof21.jpg"></ce...
    scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/characters/city/jora/sex/klof21.jpg"></center>`);
  }
  if (((s as any).picrand ?? 0) === 2) {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/city/jora/sex/klof22.jpg"></ce...
    scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/characters/city/jora/sex/klof22.jpg"></center>`);
  }
  if (((s as any).picrand ?? 0) === 3) {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/city/jora/sex/klof23.jpg"></ce...
    scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/characters/city/jora/sex/klof23.jpg"></center>`);
  }
  scene.text('Jora brutally fucks you in your mouth and Semyon drills your pussy.');
  qspCall(s, 'arousal', 'bj', 30, ((s as any).npcID ?? 0), 'sub', 'rough', 'deepthroat', 'group');
  qspCall(s, 'arousal', 'vaginal', (-30), ((s as any).npcID1 ?? 0), 'sub', 'rough', 'group');
  qspCall(s, 'stat', '');
  scene.text('Finally they both finished, one in your pussy, the other on your face.');
  scene.text('You get dressed and get ready to go home.');
  scene.text('The boys throw money at you, "Earned yourself a crumb."');
  (s as any).guy = ((s as any).guy ?? 0) + (1);
  ((s as any).stat = (s as any).stat ?? {})['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (1);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go home', goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enterEv20(s: GameState, scene: SceneBuilder): void {
  (s as any).klofday = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.img('images/characters/city/jora/klof.jpg');
  scene.text('You want to talk serious business with the boss');
  // TODO-QSP: end
  scene.actions([
    { label: 'Talk to the boss', handler: (st: GameState) => {
    if (((st as any).klofQW ?? 0) < 10) {
      qspGoto(st, 'city_jorahouse', 'ev21');
    }
    if (((st as any).klofQW ?? 0) >= 10) {
      qspGoto(st, 'city_jorahouse', 'ev22');
    }
  } },
  ]);
  scene.build();
}

function enterEv21(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/jora/klof24.jpg');
  scene.text('From the room comes an ugly old man.');
  scene.text('"Too early for you to progress in our business." He says.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go home', goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enterEv22(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/jora/klof24.jpg');
  scene.text('From the room comes an ugly old man.');
  scene.text('The boss looks closely at you and says, "Come to me, looks like you\'re ready to make some more money."');
  qspCall(s, 'willpower', 'misc', 'self', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Go home', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Go home', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    qspGoto(st, 'city_residential', '');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the boss\'s room', goto: ['city_jorahouse', 'ev23'] },
  ]);
  scene.build();
}

function enterEv23(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/jora/klof25.jpg');
  scene.text('You go into the boss\'s room, it is surprisingly well renovated and furnished.');
  scene.text('"Well, Well, take off your clothes and show yourself." Says the boss.');
  qspCall(s, 'willpower', 'misc', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Get out of here', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Get out of here', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspGoto(st, 'city_residential', '');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Show yourself', goto: ['city_jorahouse', 'ev24'] },
  ]);
  scene.build();
}

function enterEv24(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/jora/klof26.jpg');
  scene.text('You sit on the bed modestly.');
  scene.text('"Show your breasts" Orders the boss.');
  qspCall(s, 'willpower', 'misc', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Get out of here', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Get out of here', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspGoto(st, 'city_residential', '');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Show your breasts', goto: ['city_jorahouse', 'ev25'] },
  ]);
  scene.build();
}

function enterEv25(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcgeneratec', '0', 'Boss', (Math.floor(Math.random() * 11) + 30), 3, 1);
  qspCall(s, 'npcStat', '$npclastgenerated', 'b');
  scene.img('images/characters/city/jora/klof26_1.jpg');
  scene.text('You bare your breasts.');
  scene.text('"Show me your ass!" Orders the boss');
  qspCall(s, 'arousal', 'flashlite', 5, ((s as any).npcID2 ?? 0), 'sub');
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'misc', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Get out of here', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Get out of here', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'city_residential', '');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Show your ass', goto: ['city_jorahouse', 'ev26'] },
  ]);
  scene.build();
}

function enterEv26(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/jora/klof26.jpg');
  scene.text('You show your ass to the boss.');
  scene.text('"Let\'s get rid of that dress!" He says.');
  qspCall(s, 'arousal', 'flash', 5, ((s as any).npcID2 ?? 0), 'sub');
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'misc', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Get out of here', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Get out of here', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'city_residential', '');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Remove your dress', goto: ['city_jorahouse', 'ev27'] },
  ]);
  scene.build();
}

function enterEv27(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/jora/klof26_4.jpg');
  scene.text('You take off your dress');
  scene.text('"Spreads your legs!" You receive an order.');
  qspCall(s, 'willpower', 'misc', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Get out of here', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Get out of here', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'city_residential', '');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Spread your legs', goto: ['city_jorahouse', 'ev28'] },
  ]);
  scene.build();
}

function enterEv28(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/jora/klof26_6.jpg');
  scene.text('You sat on the bed and open your legs.');
  scene.text('"And now seduce me" Smiles the boss.');
  qspCall(s, 'arousal', 'foreplay', 5, ((s as any).npcID2 ?? 0), 'sub');
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'misc', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Get out of here', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Get out of here', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'city_residential', '');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Seduce the boss', goto: ['city_jorahouse', 'ev29'] },
  ]);
  scene.build();
}

function enterEv29(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/jora/1284364hjl.jpg');
  scene.text('You roll over on your side and show the boss your charms.');
  qspCall(s, 'arousal', 'flash', 5, ((s as any).npcID2 ?? 0), 'sub');
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'misc', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Get out of here', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Get out of here', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'city_residential', '');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Give him a better view', goto: ['city_jorahouse', 'ev30'] },
  ]);
  scene.build();
}

function enterEv30(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/jora/1284365sgp.jpg');
  scene.text('You get on all fours and show off your ass to the boss, you noticed that he is fidgeting in his chair. He undoes his pants and gives you a look that you immediately understand.');
  qspCall(s, 'arousal', 'flash', 5, ((s as any).npcID2 ?? 0), 'sub');
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'misc', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Get out of here', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Get out of here', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'city_residential', '');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Lick the boss\'s cock', goto: ['city_jorahouse', 'ev31'] },
  ]);
  scene.build();
}

function enterEv31(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/jora/sex/klof27.jpg');
  scene.text('You gently began to lick his penis.');
  qspCall(s, 'arousal', 'foreplay', 5, ((s as any).npcID2 ?? 0), 'sub');
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'misc', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Get out of here', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Get out of here', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'city_residential', '');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Suck it', goto: ['city_jorahouse', 'ev32'] },
  ]);
  scene.build();
}

function enterEv32(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/jora/sex/klof28.jpg');
  scene.text('You eagerly clasped his member between your lips.');
  scene.text('In a hoarse voice the boss orders, "Spreads your legs, bitch."');
  qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID2 ?? 0), 'sub');
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'misc', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Get out of here', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Get out of here', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'city_residential', '');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Spread your legs', goto: ['city_jorahouse', 'ev33'] },
  ]);
  scene.build();
}

function enterEv33(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/jora/klof26_5.jpg');
  scene.text('You get back on the bed and spread your legs.');
  scene.text('"Well, now I\'ll check your pussy" States the boss.');
  qspCall(s, 'arousal', 'flash', 5, ((s as any).npcID2 ?? 0), 'sub');
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'misc', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Get out of here', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Get out of here', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'city_residential', '');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Let him fuck your pussy', goto: ['city_jorahouse', 'ev34'] },
  ]);
  scene.build();
}

function enterEv34(s: GameState, scene: SceneBuilder): void {
  (s as any).klofQW = ((s as any).klofQW ?? 0) + (1);
  qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
  scene.img('images/characters/city/jora/sex/klof28.jpg');
  scene.text('With full force the boss pushes his penis in your vagina.');
  qspCall(s, 'arousal', 'vaginal', 30, ((s as any).npcID2 ?? 0), 'sub', 'rough');
  qspCall(s, 'stat', '');
  scene.text('"Now I try your ass."');
  qspCall(s, 'willpower', 'misc', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Get out of here', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Get out of here', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'city_residential', '');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Let him fuck your ass', goto: ['city_jorahouse', 'ev35'] },
  ]);
  scene.build();
}

function enterEv35(s: GameState, scene: SceneBuilder): void {
  (s as any).klofQW = ((s as any).klofQW ?? 0) + (1);
  qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
  scene.img('images/characters/city/jora/sex/klof29.jpg');
  scene.text('The boss skewers your ass with his penis.');
  qspCall(s, 'arousal', 'anal', 30, ((s as any).npcID2 ?? 0), 'sub', 'rough');
  qspCall(s, 'stat', '');
  scene.text('You feel that the boss is ready to cum.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Kneel in front of him', goto: ['city_jorahouse', 'ev36'] },
    { label: 'Let him end in your ass', goto: ['city_jorahouse', 'ev37'] },
    { label: 'Stick his cock in your pussy', goto: ['city_jorahouse', 'ev38'] },
  ]);
  scene.build();
}

function enterEv36(s: GameState, scene: SceneBuilder): void {
  (s as any).spafinloc = 11;
  qspCall(s, 'cum_manage', '');
  qspCall(s, 'money', 'earn', 500);
  scene.img('images/characters/city/jora/sex/klof30.jpg');
  scene.text('You jump from his member and start wanking his cock until the boss cums on your face.');
  qspCall(s, 'arousal', 'hj', 5, ((s as any).npcID2 ?? 0), 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get out of bed', goto: ['city_jorahouse', 'ev39'] },
  ]);
  scene.build();
}

function enterEv37(s: GameState, scene: SceneBuilder): void {
  (s as any).spafinloc = 3;
  qspCall(s, 'cum_manage', '');
  qspCall(s, 'money', 'earn', 500);
  scene.img('images/characters/city/jora/sex/klof32.jpg');
  scene.text('You start furiously thrusting your ass trying to help him quickly reach orgasm. You fill the warm feeling that tells you he has cum in your ass.');
  qspCall(s, 'arousal', 'anal', 5, ((s as any).npcID2 ?? 0), 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get out of bed', goto: ['city_jorahouse', 'ev39'] },
  ]);
  scene.build();
}

function enterEv38(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'cum_manage', '');
  qspCall(s, 'money', 'earn', 500);
  scene.img('images/pc/body/cum/creampie/cumpussy3.jpg');
  scene.text('Relying on good instinct, just as he peaks, you switch his cock from your ass to your vagina.');
  scene.text('Fine, but if you have a kid it\'s not mine." Says the boss.');
  qspCall(s, 'arousal', 'vaginal', 5, ((s as any).npcID2 ?? 0), 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get out of bed', goto: ['city_jorahouse', 'ev39'] },
  ]);
  scene.build();
}

function enterEv39(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/jora/klof33l.jpg');
  scene.text('You got off of the bed, look at the exhausted man, and with a grin you ask. "So, do I pass the test?"');
  scene.text('"Well you pass to bed test, now to check your obedience."');
  scene.text('"My boys want your pussy, I normally let the one who deserves it more go first but they have both been so good I can\'t decide. So you\'ll take both at the same time." Orders the boss.');
  qspCall(s, 'willpower', 'misc', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'city_residential', '');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Obediently serve the boys', goto: ['city_jorahouse', 'ev40'] },
  ]);
  scene.build();
}

function enterEv40(s: GameState, scene: SceneBuilder): void {
  (s as any).klofQW = ((s as any).klofQW ?? 0) + (1);
  (s as any).db = ((s as any).db ?? 0) + (1);
  qspCall(s, 'arousal_funcs', 'stretch', 'vaginal', 2);
  scene.img('images/characters/city/jora/sex/klof33.jpg');
  scene.text('Jora and Semyon are called in and with no ceremony the two of them hammer you in your pussy.');
  qspCall(s, 'arousal', 'vaginal', 15, ((s as any).npcID ?? 0), 'sub', 'group', 'rough');
  qspCall(s, 'arousal', 'vaginal', 15, ((s as any).npcID1 ?? 0), 'sub', 'group', 'rough');
  (s as any).guy = ((s as any).guy ?? 0) + (2);
  ((s as any).stat = (s as any).stat ?? {})['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get up and get dressed', goto: ['city_jorahouse', 'ev41'] },
  ]);
  scene.build();
}

function enterEv41(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'money', 'earn', 5000);
  scene.img('images/characters/city/jora/klof3.jpg');
  scene.text('You got dressed and cleaned up.');
  scene.text('Jora approaches you and says, "The boss likes you, he wants you to go to the pool at the Havana gym tomorrow after 10, take this money, you earned it.');
  scene.text('Oh, and bring your swimsuit.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go home', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'city_residential', '');
  } },
  ]);
  scene.build();
}

function enterEv42(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/jora/klof3.jpg');
  scene.text('You look around and notice Jora in the crowd.');
  scene.text('He motions to you and says, "Come on baby, get changed. You can\'t swim in your clothes."');
  qspCall(s, 'willpower', 'misc', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'clothing', 'wear', ((st as any).lastwornclothingtype ?? 0)?.['swim'], ((st as any).lastwornclothingnumber ?? 0)?.['swim']);
    qspCall(st, 'panties', 'wear', ((st as any).lastwornpantytype ?? 0)?.['swim'], ((st as any).lastwornpantynumber ?? 0)?.['swim']);
    qspCall(st, 'bras', 'wear', ((st as any).lastwornbratype ?? 0)?.['swim'], ((st as any).lastwornbranumber ?? 0)?.['swim']);
    qspCall(st, 'stat', '');
    qspGoto(st, 'city_center', '');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go swimming', goto: ['city_jorahouse', 'ev43'] },
  ]);
  scene.build();
}

function enterEv43(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/jora/bas.jpg');
  scene.text('You change into your swimwear and wait for Jora.');
  // TODO-QSP: dynamic text: Jora finds you a spot by the pool and tells you, "Lie down <<$pcs_nickname>> wai...
  scene.text(`Jora finds you a spot by the pool and tells you, "Lie down ${((s as any).pcs_nickname ?? '')} wait until more people gather." He goes for a swim.`);
  qspCall(s, 'willpower', 'misc', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'clothing', 'wear', ((st as any).lastwornclothingtype ?? 0)?.['swim'], ((st as any).lastwornclothingnumber ?? 0)?.['swim']);
    qspCall(st, 'panties', 'wear', ((st as any).lastwornpantytype ?? 0)?.['swim'], ((st as any).lastwornpantynumber ?? 0)?.['swim']);
    qspCall(st, 'bras', 'wear', ((st as any).lastwornbratype ?? 0)?.['swim'], ((st as any).lastwornbranumber ?? 0)?.['swim']);
    qspCall(st, 'stat', '');
    qspGoto(st, 'city_center', '');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Lie down beside the pool', goto: ['city_jorahouse', 'ev44'] },
  ]);
  scene.build();
}

function enterEv44(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  scene.img('images/characters/city/jora/bas1.jpg');
  scene.text('You lay around the pool, the pool is filling up with people.');
  scene.text('Jora swims up to you orders, "Take off your clothes in front of the crowd."');
  qspCall(s, 'willpower', 'misc', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Get out of here', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Get out of here', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'clothing', 'wear', ((st as any).lastwornclothingtype ?? 0)?.['swim'], ((st as any).lastwornclothingnumber ?? 0)?.['swim']);
    qspCall(st, 'panties', 'wear', ((st as any).lastwornpantytype ?? 0)?.['swim'], ((st as any).lastwornpantynumber ?? 0)?.['swim']);
    qspCall(st, 'bras', 'wear', ((st as any).lastwornbratype ?? 0)?.['swim'], ((st as any).lastwornbranumber ?? 0)?.['swim']);
    qspCall(st, 'stat', '');
    qspGoto(st, 'city_center', '');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Hesitantly remove your top', goto: ['city_jorahouse', 'ev45'] },
  ]);
  scene.build();
}

function enterEv45(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  scene.img('images/characters/city/jora/bas3.jpg');
  scene.text('You lower the straps.');
  scene.img('images/characters/city/jora/bas2.jpg');
  scene.text('You lower the cups.');
  scene.img('images/characters/city/jora/bas4.jpg');
  scene.text('You are standing in water trying to conceal your chest with your hand and burning with shame.');
  scene.text('Jora says with a grin, "Show the people those tits, they want some entertainment."');
  qspCall(s, 'arousal', 'flash', 5, 'sub');
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'misc', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Get out of here', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Get out of here', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'clothing', 'wear', ((st as any).lastwornclothingtype ?? 0)?.['swim'], ((st as any).lastwornclothingnumber ?? 0)?.['swim']);
    qspCall(st, 'panties', 'wear', ((st as any).lastwornpantytype ?? 0)?.['swim'], ((st as any).lastwornpantynumber ?? 0)?.['swim']);
    qspCall(st, 'bras', 'wear', ((st as any).lastwornbratype ?? 0)?.['swim'], ((st as any).lastwornbranumber ?? 0)?.['swim']);
    qspCall(st, 'stat', '');
    qspGoto(st, 'city_center', '');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Remove hands', goto: ['city_jorahouse', 'ev46'] },
  ]);
  scene.build();
}

function enterEv46(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  scene.img('images/characters/city/jora/bas5.jpg');
  scene.text('You move your hands from your chest and a crowd of men starts to gather around you.');
  scene.img('images/characters/city/jora/bas6.jpg');
  scene.text('You lift your arms behind his head and strike a pose.');
  scene.text('Jora orders, "Remove the rest."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go into the water and remove bikini bottoms', goto: ['city_jorahouse', 'ev47'] },
    { label: 'Get out of here', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'clothing', 'wear', ((st as any).lastwornclothingtype ?? 0)?.['swim'], ((st as any).lastwornclothingnumber ?? 0)?.['swim']);
    qspCall(st, 'panties', 'wear', ((st as any).lastwornpantytype ?? 0)?.['swim'], ((st as any).lastwornpantynumber ?? 0)?.['swim']);
    qspCall(st, 'bras', 'wear', ((st as any).lastwornbratype ?? 0)?.['swim'], ((st as any).lastwornbranumber ?? 0)?.['swim']);
    qspGoto(st, 'city_center', '');
  } },
  ]);
  scene.build();
}

function enterEv47(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/jora/bas7.jpg');
  scene.text('You go into the water, there are even more people around you.');
  scene.img('images/characters/city/jora/bas8.jpg');
  scene.text('You pull off your bikini bottoms and let them drift away in water.');
  scene.text('Jora orders, "Come out and show yourself to everyone."');
  qspCall(s, 'arousal', 'flash', 5, 'sub');
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'misc', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Get out of here', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Get out of here', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'clothing', 'wear', ((st as any).lastwornclothingtype ?? 0)?.['swim'], ((st as any).lastwornclothingnumber ?? 0)?.['swim']);
    qspCall(st, 'panties', 'wear', ((st as any).lastwornpantytype ?? 0)?.['swim'], ((st as any).lastwornpantynumber ?? 0)?.['swim']);
    qspCall(st, 'bras', 'wear', ((st as any).lastwornbratype ?? 0)?.['swim'], ((st as any).lastwornbranumber ?? 0)?.['swim']);
    qspCall(st, 'stat', '');
    qspGoto(st, 'city_center', '');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Get out of the water', goto: ['city_jorahouse', 'ev48'] },
  ]);
  scene.build();
}

function enterEv48(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/jora/bas9.jpg');
  scene.text('You confidently stride out of the water');
  scene.img('images/characters/city/jora/bas10.jpg');
  scene.text('You go to the edge of the pool, around you there is a crowd of excited guys.');
  scene.text('Jora orders you, "Spread your legs."');
  qspCall(s, 'arousal', 'flash', 5, 'sub');
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'misc', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Get out of here', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Get out of here', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'clothing', 'wear', ((st as any).lastwornclothingtype ?? 0)?.['swim'], ((st as any).lastwornclothingnumber ?? 0)?.['swim']);
    qspCall(st, 'panties', 'wear', ((st as any).lastwornpantytype ?? 0)?.['swim'], ((st as any).lastwornpantynumber ?? 0)?.['swim']);
    qspCall(st, 'bras', 'wear', ((st as any).lastwornbratype ?? 0)?.['swim'], ((st as any).lastwornbranumber ?? 0)?.['swim']);
    qspCall(st, 'stat', '');
    qspGoto(st, 'city_center', '');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Spread your legs', goto: ['city_jorahouse', 'ev49'] },
  ]);
  scene.build();
}

function enterEv49(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/jora/bas11.jpg');
  scene.text('You spread your legs, and the crowd whoops.');
  scene.img('images/characters/city/jora/bas12.jpg');
  scene.text('The excitement covers you in heat so you go into the shallow water and relax.');
  scene.text('Jora orders, "Spread your lips."');
  qspCall(s, 'arousal', 'flash', 5, 'sub');
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'misc', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Get out of here', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Get out of here', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'clothing', 'wear', ((st as any).lastwornclothingtype ?? 0)?.['swim'], ((st as any).lastwornclothingnumber ?? 0)?.['swim']);
    qspCall(st, 'panties', 'wear', ((st as any).lastwornpantytype ?? 0)?.['swim'], ((st as any).lastwornpantynumber ?? 0)?.['swim']);
    qspCall(st, 'bras', 'wear', ((st as any).lastwornbratype ?? 0)?.['swim'], ((st as any).lastwornbranumber ?? 0)?.['swim']);
    qspCall(st, 'stat', '');
    qspGoto(st, 'city_center', '');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Spread your lips', goto: ['city_jorahouse', 'ev50'] },
  ]);
  scene.build();
}

function enterEv50(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/jora/sex/bas13.jpg');
  scene.text('You slide a couple of fingers into your pussy and pull the lips apart displaying your vagina.');
  scene.text('Most of the mens mouths are gaping open.');
  scene.text('Jora orders, "play with yourself."');
  qspCall(s, 'arousal', 'vaginal_finger', 5, 'masturbation', 'exhibitionism', 'sub');
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'misc', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Get out of here', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Get out of here', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'clothing', 'wear', ((st as any).lastwornclothingtype ?? 0)?.['swim'], ((st as any).lastwornclothingnumber ?? 0)?.['swim']);
    qspCall(st, 'panties', 'wear', ((st as any).lastwornpantytype ?? 0)?.['swim'], ((st as any).lastwornpantynumber ?? 0)?.['swim']);
    qspCall(st, 'bras', 'wear', ((st as any).lastwornbratype ?? 0)?.['swim'], ((st as any).lastwornbranumber ?? 0)?.['swim']);
    qspCall(st, 'stat', '');
    qspGoto(st, 'city_center', '');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Caressing your pussy', goto: ['city_jorahouse', 'ev51'] },
  ]);
  scene.build();
}

function enterEv51(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/jora/sex/bas14.mp4');
  scene.text('You are so excited that you pay no attention to the crowd and start to masturbate.');
  scene.text('The gathered men are silently drooling.');
  qspCall(s, 'arousal', 'clit_finger', 5, 'exhibitionism', 'sub', 'masturbation');
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'misc', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Get out of here', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Get out of here', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'clothing', 'wear', ((st as any).lastwornclothingtype ?? 0)?.['swim'], ((st as any).lastwornclothingnumber ?? 0)?.['swim']);
    qspCall(st, 'panties', 'wear', ((st as any).lastwornpantytype ?? 0)?.['swim'], ((st as any).lastwornpantynumber ?? 0)?.['swim']);
    qspCall(st, 'bras', 'wear', ((st as any).lastwornbratype ?? 0)?.['swim'], ((st as any).lastwornbranumber ?? 0)?.['swim']);
    qspCall(st, 'stat', '');
    qspGoto(st, 'city_center', '');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Cum', goto: ['city_jorahouse', 'ev52'] },
  ]);
  scene.build();
}

function enterEv52(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/jora/sex/bas15.mp4');
  (s as any).orgasm_or = 'custom';
  (s as any).orgasm_txt = 'Within a few minutes you have a wild orgasm.';
  scene.text('The crowd of men are standing in complete shock.');
  qspCall(s, 'arousal', 'clit_finger', 5, 'exhibitionism', 'sub', 'masturbation');
  scene.text('Jora hands you a dildo and says, "Insert this."');
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'misc', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Get out of here', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Get out of here', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'clothing', 'wear', ((st as any).lastwornclothingtype ?? 0)?.['swim'], ((st as any).lastwornclothingnumber ?? 0)?.['swim']);
    qspCall(st, 'panties', 'wear', ((st as any).lastwornpantytype ?? 0)?.['swim'], ((st as any).lastwornpantynumber ?? 0)?.['swim']);
    qspCall(st, 'bras', 'wear', ((st as any).lastwornbratype ?? 0)?.['swim'], ((st as any).lastwornbranumber ?? 0)?.['swim']);
    qspCall(st, 'stat', '');
    qspGoto(st, 'city_center', '');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Insert dildo', goto: ['city_jorahouse', 'ev53'] },
  ]);
  scene.build();
}

function enterEv53(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/jora/sex/bas16.jpg');
  scene.text('You start fucking your pussy with the Dildo.');
  scene.text('Jora hands you a second Dildo and says "Insert this in the same hole."');
  qspCall(s, 'arousal', 'vaginal_dildo', 5, 'masturbation', 'exhibitionism', 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Insert second Dildo', goto: ['city_jorahouse', 'ev54'] },
  ]);
  scene.build();
}

function enterEv54(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/jora/sex/bas17.jpg');
  scene.text('It takes a little time to stretch and fit both, but when you do, you very much enjoy having two dildos in your hole.');
  scene.text('Jora orders, "Put one in your ass."');
  qspCall(s, 'arousal', 'vaginal_dildo', 5, 'masturbation', 'exhibitionism', 'sub');
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'misc', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Get out of here', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Get out of here', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'clothing', 'wear', ((st as any).lastwornclothingtype ?? 0)?.['swim'], ((st as any).lastwornclothingnumber ?? 0)?.['swim']);
    qspCall(st, 'panties', 'wear', ((st as any).lastwornpantytype ?? 0)?.['swim'], ((st as any).lastwornpantynumber ?? 0)?.['swim']);
    qspCall(st, 'bras', 'wear', ((st as any).lastwornbratype ?? 0)?.['swim'], ((st as any).lastwornbranumber ?? 0)?.['swim']);
    qspCall(st, 'stat', '');
    qspGoto(st, 'city_center', '');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Put one in your ass', goto: ['city_jorahouse', 'ev55'] },
  ]);
  scene.build();
}

function enterEv55(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/jora/sex/bas18.jpg');
  scene.text('You take one of the dildos from your pussy and thrust it straight into your ass.');
  scene.text('Jora takes out the dildos and holding your eye contact, eases his fist into your vagina.');
  qspCall(s, 'arousal', 'vaginal_dildo', 5, 'masturbation', 'exhibitionism', 'sub');
  qspCall(s, 'arousal', 'anal_dildo', (-5), 'masturbation', 'exhibitionism', 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Breathe', goto: ['city_jorahouse', 'ev56'] },
  ]);
  scene.build();
}

function enterEv56(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/jora/sex/bas19.jpg');
  scene.text('Jora raises your pelvis telling you, "Hold my cup, OK?"');
  scene.text('He inserts a glass into you and fills it with a can of beer.');
  qspCall(s, 'arousal', 'vaginal_dildo', 5, 'masturbation', 'exhibitionism', 'sub');
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'misc', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Get out of here', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Get out of here', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'clothing', 'wear', ((st as any).lastwornclothingtype ?? 0)?.['swim'], ((st as any).lastwornclothingnumber ?? 0)?.['swim']);
    qspCall(st, 'panties', 'wear', ((st as any).lastwornpantytype ?? 0)?.['swim'], ((st as any).lastwornpantynumber ?? 0)?.['swim']);
    qspCall(st, 'bras', 'wear', ((st as any).lastwornbratype ?? 0)?.['swim'], ((st as any).lastwornbranumber ?? 0)?.['swim']);
    qspCall(st, 'stat', '');
    qspGoto(st, 'city_center', '');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Obediently hold the glass', goto: ['city_jorahouse', 'ev57'] },
  ]);
  scene.build();
}

function enterEv57(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/jora/sex/bas20.jpg');
  scene.text('Jora leisurely drinks the beer with a straw, then smiling says, "Suck my dick, bitch."');
  qspCall(s, 'arousal', 'foreplay', 5, ((s as any).npcID ?? 0), 'exhibitionism', 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Suck Jora', goto: ['city_jorahouse', 'ev58'] },
  ]);
  scene.build();
}

function enterEv58(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/jora/sex/bas21.jpg');
  scene.text('You accept his cock into your mouth, spreading time to run your tongue around his glans, watching his face closely to try and read exactly what is turning him on most.');
  scene.text('You deepthroat Jora\'s dick, struggling to hold your breath and even mange to lick his balls.');
  scene.text('Once he is aroused Jora orders, "Enough, come over here and sit on it."');
  qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID ?? 0), 'exhibitionism', 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Fuck Jora', goto: ['city_jorahouse', 'ev60'] },
  ]);
  scene.build();
}

function enterEv60(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 3;
  (s as any).guy = ((s as any).guy ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/jora/sex/bas 27.jpg');
  scene.text('You obediently follow Jora to a small platform where he sits down, you don\'t need further instruction and sit on his lap take his member inside as you do so.');
  scene.text('You grind on Jora\'s dick as he gropes your tits, you put some real effort into draining his balls knowing you aren\'t getting away before he\'s satisfied. You use every muscle and trick you know to bring him to the point of no return.');
  qspCall(s, 'arousal', 'vaginal', 5, ((s as any).npcID ?? 0), 'exhibitionism', 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Take it', goto: ['city_jorahouse', 'ev61'] },
  ]);
  scene.build();
}

function enterEv61(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_horny = Math.max(100, ((s as any).pcs_horny ?? 0));
  scene.img('images/characters/city/jora/sex/bas22.jpg');
  qspCall(s, 'stat', '');
  scene.text('Jora gets up and goes to the showers saying to the crowd, "This bitch is all yours."');
  qspCall(s, 'willpower', 'misc', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Get out of here', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Get out of here', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'clothing', 'wear', ((st as any).lastwornclothingtype ?? 0)?.['swim'], ((st as any).lastwornclothingnumber ?? 0)?.['swim']);
    qspCall(st, 'panties', 'wear', ((st as any).lastwornpantytype ?? 0)?.['swim'], ((st as any).lastwornpantynumber ?? 0)?.['swim']);
    qspCall(st, 'bras', 'wear', ((st as any).lastwornbratype ?? 0)?.['swim'], ((st as any).lastwornbranumber ?? 0)?.['swim']);
    qspCall(st, 'stat', '');
    qspGoto(st, 'city_center', '');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Fuck the crowd', goto: ['city_jorahouse', 'ev62'] },
  ]);
  scene.build();
}

function enterEv62(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcgeneratec', '0', 'a random man', (Math.floor(Math.random() * 28) + 18));
  qspCall(s, 'npcStat', '$npclastgenerated');
  qspCall(s, 'npcgeneratec', '0', 'a random man', (Math.floor(Math.random() * 28) + 18));
  qspCall(s, 'npcStat', '$npclastgenerated', 'a');
  qspCall(s, 'npcgeneratec', '0', 'a random man', (Math.floor(Math.random() * 28) + 18));
  qspCall(s, 'npcStat', '$npclastgenerated', 'b');
  qspCall(s, 'npcgeneratec', '0', 'a random man', (Math.floor(Math.random() * 28) + 18));
  qspCall(s, 'npcStat', '$npclastgenerated', 'c');
  qspCall(s, 'npcgeneratec', '0', 'a random man', (Math.floor(Math.random() * 28) + 18));
  qspCall(s, 'npcStat', '$npclastgenerated', 'd');
  scene.img('images/characters/city/jora/sex/bas23.jpg');
  scene.text('You haven\'t got any choice and you are gangbanged by the group of men.');
  scene.text('Someone bends you over and sticks his dick in your ass, another your throat and a third in your cunt. You remain fully stuffed as they all try each of your holes.');
  scene.text('One of them comes down your throat giving you no choice but to swallow with the rest finishing in or on your pussy.');
  (s as any).orgasm_or = 'yes';
  qspCall(s, 'arousal', 'vaginal', 2, ((s as any).npcID ?? 0), 'exhibitionism', 'sub', 'unknown', 'gangbang');
  qspCall(s, 'arousal', 'vaginal', 2, ((s as any).npcID1 ?? 0), 'exhibitionism', 'sub', 'unknown', 'gangbang');
  qspCall(s, 'arousal', 'vaginal', 2, ((s as any).npcID2 ?? 0), 'exhibitionism', 'sub', 'unknown', 'gangbang');
  qspCall(s, 'arousal', 'vaginal', 2, ((s as any).npcID3 ?? 0), 'exhibitionism', 'sub', 'unknown', 'gangbang');
  qspCall(s, 'arousal', 'vaginal', 2, ((s as any).npcID4 ?? 0), 'exhibitionism', 'sub', 'unknown', 'gangbang');
  qspCall(s, 'arousal', 'anal', (-2), ((s as any).npcID ?? 0), 'exhibitionism', 'sub', 'unknown', 'gangbang');
  qspCall(s, 'arousal', 'anal', (-2), ((s as any).npcID1 ?? 0), 'exhibitionism', 'sub', 'unknown', 'gangbang');
  qspCall(s, 'arousal', 'anal', (-2), ((s as any).npcID2 ?? 0), 'exhibitionism', 'sub', 'unknown', 'gangbang');
  qspCall(s, 'arousal', 'anal', (-2), ((s as any).npcID3 ?? 0), 'exhibitionism', 'sub', 'unknown', 'gangbang');
  qspCall(s, 'arousal', 'anal', (-2), ((s as any).npcID4 ?? 0), 'exhibitionism', 'sub', 'unknown', 'gangbang');
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0));
  qspCall(s, 'cum_call', 'labia', ((s as any).npcID1 ?? 0));
  qspCall(s, 'cum_call', 'labia', ((s as any).npcID2 ?? 0));
  qspCall(s, 'cum_call', 'vagina', ((s as any).npcID3 ?? 0));
  qspCall(s, 'cum_call', 'vagina', ((s as any).npcID4 ?? 0));
  (s as any).guy = ((s as any).guy ?? 0) + (5);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Fuck the crowd', goto: ['city_jorahouse', 'ev63'] },
  ]);
  scene.build();
}

function enterEv63(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcgeneratec', '0', 'a random man', (Math.floor(Math.random() * 28) + 18), 0, 1);
  qspCall(s, 'npcStat', '$npclastgenerated');
  qspCall(s, 'npcgeneratec', '0', 'a random man', (Math.floor(Math.random() * 28) + 18), 0, 1);
  qspCall(s, 'npcStat', '$npclastgenerated', 1);
  qspCall(s, 'npcgeneratec', '0', 'a random man', (Math.floor(Math.random() * 28) + 18), 0, 1);
  qspCall(s, 'npcStat', '$npclastgenerated', 2);
  qspCall(s, 'npcgeneratec', '0', 'a random man', (Math.floor(Math.random() * 28) + 18), 0, 1);
  qspCall(s, 'npcStat', '$npclastgenerated', 3);
  qspCall(s, 'npcgeneratec', '0', 'a random man', (Math.floor(Math.random() * 28) + 18), 0, 1);
  qspCall(s, 'npcStat', '$npclastgenerated', 4);
  qspCall(s, 'npcgeneratec', '0', 'a random man', (Math.floor(Math.random() * 28) + 18), 0, 1);
  qspCall(s, 'npcStat', '$npclastgenerated', 5);
  qspCall(s, 'npcgeneratec', '0', 'a random man', (Math.floor(Math.random() * 28) + 18), 0, 1);
  qspCall(s, 'npcStat', '$npclastgenerated', 6);
  qspCall(s, 'npcgeneratec', '0', 'a random man', (Math.floor(Math.random() * 28) + 18), 0, 1);
  qspCall(s, 'npcStat', '$npclastgenerated', 7);
  scene.img('images/characters/city/jora/sex/bas24.jpg');
  scene.text('You continue to suck, while you are pounded in the ass and pussy. Your only saving grace being that the show has them so aroused none of them last long before they cum.');
  scene.text('Some of the men finish on your face or in your mouth while the others have started to finish in and on you butt leaving you covered in cum.');
  qspCall(s, 'arousal', 'bj', 4, (((s as any).npcID ?? 0)?.[4] ?? 0), 'exhibitionism', 'sub', 'unknown');
  qspCall(s, 'arousal', 'bj', 4, (((s as any).npcID ?? 0)?.[5] ?? 0), 'exhibitionism', 'sub', 'unknown');
  qspCall(s, 'arousal', 'bj', 4, (((s as any).npcID ?? 0)?.[6] ?? 0), 'exhibitionism', 'sub', 'unknown');
  qspCall(s, 'arousal', 'bj', 4, (((s as any).npcID ?? 0)?.[7] ?? 0), 'exhibitionism', 'sub', 'unknown');
  (s as any).orgasm_or = 'yes';
  qspCall(s, 'arousal', 'vaginal', (-7), (((s as any).npcID ?? 0)?.[0] ?? 0), 'exhibitionism', 'sub', 'unknown', 'gangbang');
  qspCall(s, 'arousal', 'vaginal', (-7), (((s as any).npcID ?? 0)?.[1] ?? 0), 'exhibitionism', 'sub', 'unknown', 'gangbang');
  qspCall(s, 'arousal', 'anal', (-7), (((s as any).npcID ?? 0)?.[2] ?? 0), 'exhibitionism', 'sub', 'unknown', 'gangbang');
  qspCall(s, 'arousal', 'anal', (-7), (((s as any).npcID ?? 0)?.[3] ?? 0), 'exhibitionism', 'sub', 'unknown', 'gangbang');
  qspCall(s, 'cum_call', 'butt', (((s as any).npcID ?? 0)?.[0] ?? 0));
  qspCall(s, 'cum_call', 'butt', (((s as any).npcID ?? 0)?.[1] ?? 0));
  qspCall(s, 'cum_call', 'anus', (((s as any).npcID ?? 0)?.[2] ?? 0));
  qspCall(s, 'cum_call', 'anus', (((s as any).npcID ?? 0)?.[3] ?? 0));
  qspCall(s, 'cum_call', 'mouth_swallow', (((s as any).npcID ?? 0)?.[4] ?? 0));
  qspCall(s, 'cum_call', 'mouth_swallow', (((s as any).npcID ?? 0)?.[5] ?? 0));
  qspCall(s, 'cum_call', 'face', (((s as any).npcID ?? 0)?.[6] ?? 0));
  qspCall(s, 'cum_call', 'face', (((s as any).npcID ?? 0)?.[7] ?? 0));
  (s as any).guy = ((s as any).guy ?? 0) + (8);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Fuck the crowd', goto: ['city_jorahouse', 'ev64'] },
  ]);
  scene.build();
}

function enterEv64(s: GameState, scene: SceneBuilder): void {
  (s as any).guy = ((s as any).guy ?? 0) + (3);
  qspCall(s, 'npcgeneratec', '0', 'a random man', (Math.floor(Math.random() * 28) + 18));
  qspCall(s, 'npcStat', '$npclastgenerated');
  qspCall(s, 'npcgeneratec', '0', 'a random man', (Math.floor(Math.random() * 28) + 18));
  qspCall(s, 'npcStat', '$npclastgenerated', 'a');
  qspCall(s, 'npcgeneratec', '0', 'a random man', (Math.floor(Math.random() * 28) + 18));
  qspCall(s, 'npcStat', '$npclastgenerated', 'b');
  if (((s as any).pcs_ass ?? 0) < 16) {
    qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
  }
  scene.img('images/characters/city/jora/sex/bas25.jpg');
  scene.text('Only three guys left and they seem to know what they are doing, working in tandem they take you in each orifice finding your most sensitive triggers.');
  qspCall(s, 'arousal', 'bj', 10, ((s as any).npcID2 ?? 0), 'exhibitionism', 'sub', 'unknown');
  (s as any).orgasm_or = 'yes';
  qspCall(s, 'arousal', 'vaginal', (-10), ((s as any).npcID1 ?? 0), 'exhibitionism', 'sub', 'unknown', 'gangbang');
  scene.text('They have more stamina then the last group and seem to want to make sure you remember this.');
  (s as any).orgasm_or = 'yes';
  qspCall(s, 'arousal', 'anal', (-10), ((s as any).npcID ?? 0), 'exhibitionism', 'sub', 'unknown', 'gangbang');
  scene.text('You have no strength left and they are the only thing stopping you collapsing at this point which seems to be enough for them to hit orgasm. They each pull out and paint your body in their cum before gently lowering you to the ground so you can catch your breath.');
  qspCall(s, 'cum_call', 'back', ((s as any).npcID ?? 0));
  qspCall(s, 'cum_call', 'stomach', ((s as any).npcID1 ?? 0));
  qspCall(s, 'cum_call', 'breasts', ((s as any).npcID2 ?? 0));
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get up and dress in your swimsuit', goto: ['city_jorahouse', 'ev65'] },
  ]);
  scene.build();
}

function enterEv65(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'money', 'earn', 2000);
  (s as any).saunawhore = Math.max(((s as any).saunawhore ?? 0), 1);
  scene.img('images/characters/city/jora/bas26.jpg');
  scene.text('One of the men finds and hands you your swimsuit.');
  scene.text('"Damn you\'re good, boss said we can have you last if we kept an eye on you to make sure things didn\'t get out of hand. Hope we made it as much fun for you as it was for us."');
  scene.text('You put your swimsuit back on and rest against a column. Your arms and legs are shaking and your pussy and ass feel unbearably raw.');
  scene.text('Jora comes out of the locker room and says, "Well, you put on a good show here, the boss is delighted!"');
  scene.text('He hands you a business card with an address in the residential area on it and a handful of rubles. "If you ever need money, go to the sauna, show them this card and tell them we sent you."');
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'clothing', 'wear', ((s as any).lastwornclothingtype ?? 0)?.['swim'], ((s as any).lastwornclothingnumber ?? 0)?.['swim']);
  qspCall(s, 'panties', 'wear', ((s as any).lastwornpantytype ?? 0)?.['swim'], ((s as any).lastwornpantynumber ?? 0)?.['swim']);
  qspCall(s, 'bras', 'wear', ((s as any).lastwornbratype ?? 0)?.['swim'], ((s as any).lastwornbranumber ?? 0)?.['swim']);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to dressing room', goto: ['havana', 'dressing_room'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'start1':
      enterStart1(s, scene);
      break;
    case 'ev1':
      enterEv1(s, scene);
      break;
    case 'ev2':
      enterEv2(s, scene);
      break;
    case 'ev3':
      enterEv3(s, scene);
      break;
    case 'ev4':
      enterEv4(s, scene);
      break;
    case 'ev5':
      enterEv5(s, scene);
      break;
    case 'ev6':
      enterEv6(s, scene);
      break;
    case 'ev7':
      enterEv7(s, scene);
      break;
    case 'ev8':
      enterEv8(s, scene);
      break;
    case 'ev9':
      enterEv9(s, scene);
      break;
    case 'ev13':
      enterEv13(s, scene);
      break;
    case 'ev14':
      enterEv14(s, scene);
      break;
    case 'ev15':
      enterEv15(s, scene);
      break;
    case 'ev10':
      enterEv10(s, scene);
      break;
    case 'ev 16':
      enterEv16(s, scene);
      break;
    case 'ev 17':
      enterEv17(s, scene);
      break;
    case 'ev 18':
      enterEv18(s, scene);
      break;
    case 'ev19':
      enterEv19(s, scene);
      break;
    case 'ev20':
      enterEv20(s, scene);
      break;
    case 'ev21':
      enterEv21(s, scene);
      break;
    case 'ev22':
      enterEv22(s, scene);
      break;
    case 'ev23':
      enterEv23(s, scene);
      break;
    case 'ev24':
      enterEv24(s, scene);
      break;
    case 'ev25':
      enterEv25(s, scene);
      break;
    case 'ev26':
      enterEv26(s, scene);
      break;
    case 'ev27':
      enterEv27(s, scene);
      break;
    case 'ev28':
      enterEv28(s, scene);
      break;
    case 'ev29':
      enterEv29(s, scene);
      break;
    case 'ev30':
      enterEv30(s, scene);
      break;
    case 'ev31':
      enterEv31(s, scene);
      break;
    case 'ev32':
      enterEv32(s, scene);
      break;
    case 'ev33':
      enterEv33(s, scene);
      break;
    case 'ev34':
      enterEv34(s, scene);
      break;
    case 'ev35':
      enterEv35(s, scene);
      break;
    case 'ev36':
      enterEv36(s, scene);
      break;
    case 'ev37':
      enterEv37(s, scene);
      break;
    case 'ev38':
      enterEv38(s, scene);
      break;
    case 'ev39':
      enterEv39(s, scene);
      break;
    case 'ev40':
      enterEv40(s, scene);
      break;
    case 'ev41':
      enterEv41(s, scene);
      break;
    case 'ev42':
      enterEv42(s, scene);
      break;
    case 'ev43':
      enterEv43(s, scene);
      break;
    case 'ev44':
      enterEv44(s, scene);
      break;
    case 'ev45':
      enterEv45(s, scene);
      break;
    case 'ev46':
      enterEv46(s, scene);
      break;
    case 'ev47':
      enterEv47(s, scene);
      break;
    case 'ev48':
      enterEv48(s, scene);
      break;
    case 'ev49':
      enterEv49(s, scene);
      break;
    case 'ev50':
      enterEv50(s, scene);
      break;
    case 'ev51':
      enterEv51(s, scene);
      break;
    case 'ev52':
      enterEv52(s, scene);
      break;
    case 'ev53':
      enterEv53(s, scene);
      break;
    case 'ev54':
      enterEv54(s, scene);
      break;
    case 'ev55':
      enterEv55(s, scene);
      break;
    case 'ev56':
      enterEv56(s, scene);
      break;
    case 'ev57':
      enterEv57(s, scene);
      break;
    case 'ev58':
      enterEv58(s, scene);
      break;
    case 'ev60':
      enterEv60(s, scene);
      break;
    case 'ev61':
      enterEv61(s, scene);
      break;
    case 'ev62':
      enterEv62(s, scene);
      break;
    case 'ev63':
      enterEv63(s, scene);
      break;
    case 'ev64':
      enterEv64(s, scene);
      break;
    case 'ev65':
      enterEv65(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const city_jorahouse: LocationDef = {
  name: 'city_jorahouse',
  title: 'You ring the doorbell.',
  region: 'city',
  enter: enter,
};
