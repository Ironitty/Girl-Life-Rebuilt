import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: <<$npcdesc>> turns to you and says, "Let's go to the store and get some beer."
  scene.text(`${((s as any).npcdesc ?? 0)} turns to you and says, "Let's go to the store and get some beer."`);
  scene.actions([
    { label: 'Walk while embraced', handler: (st: GameState) => {
    if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
    } else {
      if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
      } else {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), ((s as any).rand ?? 0)(-1, 0));
      }
    }
    scene.img('images/characters/city/boyfriend/boygo.jpg');
    // TODO-QSP: dynamic text: You walk to the kiosk, your bodies close, his arm around your shoulders. Getting...
    scene.text(`You walk to the kiosk, your bodies close, his arm around your shoulders. Getting there, ${((s as any).npcdesc ?? 0)} buys beer and some chips before you leave together.`);
  }, goto: ['podezdM', 'kiosk'] },
    { label: 'Go holding hands', handler: (st: GameState) => {
    if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
    } else {
      if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
      } else {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), ((s as any).rand ?? 0)(-1, 0));
      }
    }
    scene.img('images/characters/city/boyfriend/boygo1.jpg');
    // TODO-QSP: dynamic text: You walk to the kiosk holding hands. Getting there, <<$npcdesc>> buys beer and s...
    scene.text(`You walk to the kiosk holding hands. Getting there, ${((s as any).npcdesc ?? 0)} buys beer and some chips before you leave together.`);
  }, goto: ['podezdM', 'kiosk'] },
    { label: 'Go', handler: (st: GameState) => {
    if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), ((s as any).rand ?? 0)(-1, 0));
    } else {
      if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
      } else {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
      }
    }
    scene.img('images/characters/city/boyfriend/boygo2.jpg');
    // TODO-QSP: dynamic text: You go up to the kiosk. There, <<$npcdesc>> buys beer and some chips before you ...
    scene.text(`You go up to the kiosk. There, ${((s as any).npcdesc ?? 0)} buys beer and some chips before you leave together.`);
  }, goto: ['podezdM', 'kiosk'] },
  ]);
  scene.build();
}

function enterKiosk(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  (s as any).fat = ((s as any).fat ?? 0) + (1);
  qspCall(s, 'mood', 'raise', 'tiny');
  (s as any).podrand = Math.floor(Math.random() * 96) + 5;
  scene.img('images/locations/shared/apartment/podezdm.jpg');
  scene.text('As you leave he opens a bottle of beer and hands it to you.');
  scene.actions([
    { label: 'Drink a little', handler: (st: GameState) => {
    qspCall(s, 'drugs', 'alcohol', 'beer');
    qspCall(s, 'stat', '');
    if (((s as any).podrand ?? 0) < 9) {
      scene.actions([{ label: 'Continue', goto: ['podezdM', 'kiosk1'] }]);
    } else {
      if (((s as any).podrand ?? 0) >= 9) {
        scene.actions([{ label: 'Continue', goto: ['podezdM', 'grup'] }]);
      }
    }
  } },
    { label: 'Drink a bottle', handler: (st: GameState) => {
    qspCall(s, 'drugs', 'alcohol', 'beer');
    qspCall(s, 'stat', '');
    if (((s as any).podrand ?? 0) < 9) {
      scene.actions([{ label: 'Continue', goto: ['podezdM', 'kiosk1'] }]);
    } else {
      if (((s as any).podrand ?? 0) >= 9) {
        scene.actions([{ label: 'Continue', goto: ['podezdM', 'grup'] }]);
      }
    }
  } },
  ]);
  scene.build();
}

function enterKiosk1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] > 25) {
      qspCall(s, 'boylove', 'tits');
    }
    if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] > 30) {
      qspCall(s, 'boylove', 'figure');
    }
  } else {
    if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] > 20) {
        qspCall(s, 'boylove', 'tits');
      }
      if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] > 25) {
        qspCall(s, 'boylove', 'figure');
      }
    } else {
      if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] > 15) {
        qspCall(s, 'boylove', 'tits');
      }
      if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] > 20) {
        qspCall(s, 'boylove', 'figure');
      }
    }
  }
  // TODO-QSP: dynamic text: While drinking beer and walking back, <<$npcdesc>> tells you:
  scene.text(`While drinking beer and walking back, ${((s as any).npcdesc ?? 0)} tells you:`);
  qspCall(s, 'anekdot', '');
  scene.actions([
    { label: 'Laugh', handler: (st: GameState) => {
    (s as any).SUB = ((s as any).SUB ?? 0) + (1);
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
  }, goto: ['podezdM', 'kiosk2'] },
    { label: 'Smile', goto: ['podezdM', 'kiosk2'] },
    { label: 'Not funny', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), ((st as any).rand ?? 0)(-1, 0));
  }, goto: ['podezdM', 'kiosk2'] },
  ]);
  scene.build();
}

function enterKiosk2(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'homes_properties', 'has_access', 'city_house')) {
    // TODO-QSP: dynamic text: <<$npcdesc>> drinks his beer and wraps his arm around you. "<<$pcs_nickname>> wh...
    scene.text(`${((s as any).npcdesc ?? 0)} drinks his beer and wraps his arm around you. "${((s as any).pcs_nickname ?? 0)} why don't we go back to your place?"`);
    scene.actions([
      { label: 'Invite him in', goto: ['sexm', 'start'] },
      { label: 'Turn him down', goto: ['podezdM', 'Walk'] },
      { label: 'I have to go, call you later', goto: ['homes_properties', 'go_home'] },
    ]);
  } else {
    // TODO-QSP: dynamic text: <<$npcdesc>> drinks his beer and wraps his arm around you. "<<$pcs_nickname>> wh...
    scene.text(`${((s as any).npcdesc ?? 0)} drinks his beer and wraps his arm around you. "${((s as any).pcs_nickname ?? 0)} why don't you come back to my place?"`);
    scene.actions([
      { label: 'Agree', goto: ['sexm', 'start'] },
      { label: 'Turn him down', goto: ['podezdM', 'Walk'] },
      { label: 'I have to go, call you later', goto: ['homes_properties', 'go_home'] },
    ]);
  }
  scene.build();
}

function enterWalk(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: <<$npcdesc>> finishes his beer and tosses the bottle aside. "<<$pcs_nickname>>, ...
  scene.text(`${((s as any).npcdesc ?? 0)} finishes his beer and tosses the bottle aside. "${((s as any).pcs_nickname ?? 0)}, you're so hot, I want you!" and with that he pulls you into a tight embrace and kisses you, his hands reaching down to grab you by the ass and giving it a hard squeeze.`);
  qspCall(s, 'arousal', 'kiss', 3);
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'sex', 'resist', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Break away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Break away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), ((s as any).rand ?? 0)(-1, 0));
    qspCall(s, 'stat', '');
    scene.text('You push against him, hard, and finally manage to push him off you, making him stumble back a step. He seems confused that you pushed him away. "What the fuck?! Don\'t think you can treat me like you please, I\'m not as easy as you think!" With that, you turn and walk away.');
    scene.actions([
      { label: 'I have to go, maybe I\'ll call you later', goto: ['homes_properties', 'go_home'] },
    ]);
  } },
    ]);
  }
  if (qspFunc(s, 'homes_properties', 'has_access', 'city_house')) {
    scene.actions([
      { label: 'Kiss', handler: (st: GameState) => {
    scene.text('You return his kiss and rub the crotch of his pants. "Why don\'t we head over to my place?." you ask him.');
    qspCall(s, 'arousal', 'kiss', 3, 'sub');
    qspCall(s, 'arousal', 'foreplay', (-3), 'sub');
    qspCall(s, 'stat', '');
  }, goto: ['sexm', 'startPod'] },
    ]);
  } else {
    scene.actions([
      { label: 'Kiss', handler: (st: GameState) => {
    scene.text('You return his kiss and rub the crotch of his pants. "How about we go to your place?." you ask him.');
    qspCall(s, 'arousal', 'kiss', 3, 'sub');
    qspCall(s, 'arousal', 'foreplay', (-3), 'sub');
    qspCall(s, 'stat', '');
  }, goto: ['sexm', 'startPod'] },
    ]);
  }
  scene.actions([
    { label: 'I want you', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
    scene.text('You return his kiss and rub the crotch of his pants. "I want you, I want you right now, I need you inside me so badly." you tell him.');
    qspCall(s, 'arousal', 'kiss', 3, 'sub');
    qspCall(s, 'arousal', 'foreplay', (-3), 'sub');
    qspCall(s, 'stat', '');
  }, goto: ['podezdM', 'Alleyway'] },
  ]);
  scene.build();
}

function enterGrup(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/apartment/podezdm1.jpg');
  // TODO-QSP: dynamic text: A few guys are drinking in the stairwell. When you come in, they see <<$npcdesc>...
  scene.text(`A few guys are drinking in the stairwell. When you come in, they see ${((s as any).npcdesc ?? 0)} and greet him loudly. They offer you both a drink from their bottle of vodka.`);
  qspCall(s, 'willpower', 'drink', 'resist', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse to drink [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse to drink [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
    } else {
      if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), ((s as any).rand ?? 0)(-1, 0));
      } else {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (-1));
      }
    }
  }, goto: ['podezdM', 'grup1'] },
    ]);
  }
  scene.actions([
    { label: 'Drink a little', handler: (st: GameState) => {
    qspCall(s, 'drugs', 'alcohol', 'beer');
    qspCall(s, 'stat', '');
    if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
    } else {
      if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
      } else {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
      }
    }
  }, goto: ['podezdM', 'grup1'] },
    { label: 'Drink with the guys', handler: (st: GameState) => {
    qspCall(s, 'drugs', 'alcohol', 'beer');
    qspCall(s, 'stat', '');
    if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), ((s as any).rand ?? 0)(-1, 0));
    } else {
      if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
      } else {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
      }
    }
  }, goto: ['podezdM', 'grup2'] },
  ]);
  scene.build();
}

function enterGrup1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: <<$npcdesc>> drinks with them, they tell sexist jokes and the boys all laugh, af...
  scene.text(`${((s as any).npcdesc ?? 0)} drinks with them, they tell sexist jokes and the boys all laugh, after a few minutes. ${((s as any).npcdesc ?? 0)} tells them he needs to go and takes you up stairs.`);
  scene.actions([
    { label: 'Go up stairs', goto: ['sexm', 'start'] },
  ]);
  scene.build();
}

function enterGrup2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('You feel yourself getting quite drunk and nearly fall as you start to slip from the railing you were leaning on. One of the boys quickly grabs hold of you and pulls you up onto his lap, another reaches over and starts pawing at your breasts.');
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    // TODO-QSP: dynamic text: <<$npcdesc>> petulantly mumbles, "Come on guys, that's <i>my</i> girl."
    scene.text(`${((s as any).npcdesc ?? 0)} petulantly mumbles, "Come on guys, that's <i>my</i> girl."`);
    scene.text('The drunken guys just laugh at him and begin pulling off your clothes.');
    qspCall(s, 'willpower', 'gangbang', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Resist [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Resist [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['sexm', 'gangrape'] },
      ]);
    }
    scene.actions([
      { label: 'Surrender', goto: ['sexm', 'gangbang'] },
    ]);
  } else {
    if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      // TODO-QSP: dynamic text: <<$npcdesc>> stands up and yells, "Hey, not cool bro! That's my chick, hands off...
      scene.text(`${((s as any).npcdesc ?? 0)} stands up and yells, "Hey, not cool bro! That's my chick, hands off!"`);
      scene.text('The guys let go of you and put up their hands. "No problem man, we were just having a little harmless fun, we didn\'t mean anything by it."');
      qspCall(s, 'willpower', 'gangbang', 'resist', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Go upstairs [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Go upstairs [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['sexm', 'start'] },
        ]);
      }
      scene.actions([
        { label: 'Ignore <<$npcdesc>> and kiss the guys', goto: ['sexm', 'gangbang'] },
      ]);
    } else {
      if (((s as any).npc_pervert ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        // TODO-QSP: dynamic text: <<$npcdesc>> stands up and, without saying anything, steps over to the guy pawin...
        scene.text(`${((s as any).npcdesc ?? 0)} stands up and, without saying anything, steps over to the guy pawing at your breasts and breaks his bottle over the guy's head. Dazed, the guy just falls to the ground, groaning in pain and confusion. Quietly and quite confidently, ${((s as any).npcdesc ?? 0)} asks, "Who else wants some?"`);
        scene.text('The guys instantly release you and move aside.');
        qspCall(s, 'willpower', 'gangbang', 'resist', 'medium');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Go upstairs [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Go upstairs [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['sexm', 'start'] },
          ]);
        }
        scene.actions([
          { label: 'Or maybe all together…?', goto: ['sexm', 'gangbang'] },
        ]);
      } else {
        // TODO-QSP: dynamic text: Seeing the guys starting to fool around with you, <<$npcdesc>> starts laughing a...
        scene.text(`Seeing the guys starting to fool around with you, ${((s as any).npcdesc ?? 0)} starts laughing and exclaims, "Lets have some fun with this little slut!"`);
        scene.text('The drunk guys are very enthusiastic about the proposal and start pulling your clothes off as fast as they can grab them.');
        qspCall(s, 'willpower', 'gangbang', 'resist', 'medium');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Resist [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Resist [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['sexm', 'gangrape'] },
          ]);
        }
        scene.actions([
          { label: 'Surrender', goto: ['sexm', 'gangbang'] },
        ]);
      }
    }
  }
  scene.build();
}

function enterAlleyway(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dick ?? 0) > ((s as any).pcs_vag ?? 0)) {
    qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
  }
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/boyfriend/sex/alleyway.mp4');
  // TODO-QSP: dynamic text: As soon as he hears this, he grabs you and drags you into the nearest alleyway, ...
  scene.text(`As soon as he hears this, he grabs you and drags you into the nearest alleyway, going past a dumpster and around the corner. Just out of view from the street, ${((s as any).npcdesc ?? 0)} pushes you against the wall and pulls just enough of your clothes aside to expose your ass and give him free access to your pussy.`);
  scene.text('He quickly turns you to face the wall, reaches around and lifts your leg up in the air while holding you by your thigh, spreading your pussy wide open. He lines up his dick with his other hand, rubbing it between your pussy lips and getting the tip nice and wet. Satisfied that he\'s all lubed up, he slides his dick into your pussy in one smooth motion and starts fucking you with gusto.');
  // TODO-QSP: dynamic text: You grab onto a nearby chain hanging from the fire escape on the side of the bui...
  scene.text(`You grab onto a nearby chain hanging from the fire escape on the side of the building, trying to keep your balance while also pushing back against him, the thought of getting caught turns you on more than you care to admit. You can hear people passing by on the sidewalk, out of view just a few meters away. You try to be as quiet as you can, but soon you can't control yourself any longer and your moans start getting louder and louder. "Oh god yes ${((s as any).npcdesc ?? 0)}, fuck me, fuck me harder!" You try to say it quietly but it was obviously much louder than you intended, as he gives your ass a slap and starts hammering your pussy as hard as he can, grunting as he does.`);
  qspCall(s, 'arousal', 'vaginal', 15, 'sub', 'rough');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/boyfriend/sex/alleycum.jpg');
    scene.text('At that pace it doesn\'t take him much longer, he turns your head towards him and kisses you passionately. A few moments later, with a couple more grunts he quickly jerks his cock out of your pussy, barely making it in time as you feel hot spurts of his cum landing all over your ass, before slowly running down your crack.');
    scene.text('After catching his breath, he turns you back to face him, giving you a passionate kiss while playing with your clit to make sure you get yours as well. After a minute or so, he stops and pulls up his pants, while you straighten out your clothes. The two you walk out of the alleyway like nothing had happened, he looks at you with a huge grin on his face and gives you another beer. After walking further for a ways you decide to go your separate ways for the day.');
    qspCall(s, 'arousal', 'kiss', 5, 'sub');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'arousal', 'vaginal_finger', (-5), 'sub');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_call', 'butt', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Return', goto: ['homes_properties', 'go_home'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'kiosk':
      enterKiosk(s, scene);
      break;
    case 'kiosk1':
      enterKiosk1(s, scene);
      break;
    case 'kiosk2':
      enterKiosk2(s, scene);
      break;
    case 'Walk':
      enterWalk(s, scene);
      break;
    case 'grup':
      enterGrup(s, scene);
      break;
    case 'grup1':
      enterGrup1(s, scene);
      break;
    case 'grup2':
      enterGrup2(s, scene);
      break;
    case 'alleyway':
      enterAlleyway(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const podezdM: LocationDef = {
  name: 'podezdM',
  title: 'As you leave he opens a bottle of beer and hands it to you.',
  region: 'other',
  enter: enter,
};
