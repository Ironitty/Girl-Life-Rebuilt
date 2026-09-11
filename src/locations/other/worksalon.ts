import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'worksalon', 'start');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Beauty Salon</b></center>');
  scene.img('images/locations/city/citycenter/mall/salon/salonwork.jpg');
  scene.text('You show up to work and see your coworkers already working. You give them a friendly wave as you head over to your work station.');
  (s as any).salonjobrand = Math.floor(Math.random() * 11) + 0;
  if (((s as any).salonjobrand ?? 0) === 2  &&  ((s as any).pcs_apprnc ?? 0) > 80  &&  (!((s as any).alla ?? 0))) {
    scene.actions([{ label: 'Continue', goto: ['worksalon', '2'] }]);
  } else {
    if (((s as any).salonjobrand ?? 0) === 3  &&  ((s as any).salonslut ?? 0) === 1) {
      scene.text('As you head over to your work station, your boss comes over and leans close to you. "Go into my office and take your clothes off, then bend over my desk. I will be there shortly." He says to you as he gives your ass a slap.');
      qspCall(s, 'willpower', 'sex', 'resist');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Tell him no and go to your work station [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Tell him no and go to your work station [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).salonslut = 0;
  }, goto: ['worksalon', 'start'] },
        ]);
      }
      scene.actions([
        { label: 'Do as he says', goto: ['worksalon', '3'] },
      ]);
    }
  }
  if (((s as any).masha ?? 0) > 0) {
    if (((s as any).masharab ?? 0) === 1) {
      qspCall(s, 'willpower', 'foreplay', 'force');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Tell Masha to give you a massage [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Tell Masha to give you a massage [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'force');
    qspCall(s, 'mood', 'raise', 'tiny');
    scene.img('images/characters/city/masha/sex/s7.jpg');
    scene.text('After you eat your lunch, you walk over to Masha. Placing your hands on your hips, you tell her in a commanding voice, "Well why are you just sitting there? Get up and give me a massage, a nice slow one."');
    scene.text('Masha immediately jumps up and waits for you to get undressed and lie down. Once you are naked and lying on the table, Masha starts massaging you.');
    qspCall(s, 'arousal', 'massage', 30, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Masha gives you a body massage', handler: (st: GameState) => {
    qspCall(s, 'mood', 'raise', 'tiny');
    (s as any).picrand = Math.floor(Math.random() * 2) + 8;
    scene.img(`images/characters/city/masha/sex/s${((s as any).picrand ?? 0)}.jpg`);
    // TODO-QSP: 'Masha takes off her clothes, deftly leaps on the table and ' + iif(picrand = 8, 'straddles you. She...
    qspCall(s, 'arousal', 'massage', 30, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Spread your legs', handler: (st: GameState) => {
    scene.img('images/characters/city/masha/sex/s10.jpg');
    scene.text('Several relaxing minutes later, you feel much better from the massage. Turning over, you spread your legs. Masha smiles. You don\'t even have to say a word. Her mouth seeks out your pussy, and she begins to lick you.');
    scene.text('She alternates between sliding her tongue inside of you, flicking your clit with her tongue, licking your pussy all over, or just sucking on your clit, causing you to moan in pleasure.');
    qspCall(s, 'arousal', 'cuni', 30, 'dom', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', goto: ['worksalon', 'start'] },
    ]);
  } },
      { label: 'Offer up your ass', handler: (st: GameState) => {
    scene.img('images/characters/city/masha/sex/s11.jpg');
    scene.text('You roll over once more and get on your hands and knees. Once more, Masha knows exactly what to do and starts to lick your asshole with her tongue. Moments later, she slides her tongue inside of your ass while her hand massages your clit.');
    scene.text('You moan louder, your pussy becoming soaking wet as Masha massages it and tongue fucks your ass. Within minutes, you feel your body spasm, and you orgasm hard. After your orgasm as you catch your breath, Masha licks all your pussy juices off you, leaving you clean.');
    qspCall(s, 'arousal', 'cuni', 30, 'dom', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', goto: ['worksalon', 'start'] },
    ]);
  } },
      { label: 'Finish', goto: ['worksalon', 'start'] },
    ]);
  } },
      { label: 'Spread your legs', handler: (st: GameState) => {
    scene.img('images/characters/city/masha/sex/s10.jpg');
    scene.text('You take off your clothes, but instead of lying on your stomach, you lie on your back and spread your legs. Masha smiles. You don\'t even have to say a word. Her mouth seeks out your pussy, and she begins to lick you.');
    scene.text('She alternates between sliding her tongue inside of you, flicking your clit with her tongue, licking your pussy all over, or just sucking on your clit, causing you to moan in pleasure.');
    qspCall(s, 'arousal', 'cuni', 30, 'dom', 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['worksalon', 'start'] },
    ]);
  } },
      { label: 'Offer up your ass', handler: (st: GameState) => {
    scene.img('images/characters/city/masha/sex/s11.jpg');
    scene.text('You take off your clothes, but instead of lying on your stomach, you get on your hands and knees. Masha knows exactly what to do and starts to lick your asshole with her tongue. Moments later, she slides her tongue inside of your ass while her hand massages your clit.');
    scene.text('You moan louder, your pussy becoming soaking wet as Masha massages it and tongue fucks your ass. Within minutes, you feel your body spasm, and you orgasm hard. After your orgasm as you catch your breath, Masha licks all your pussy juices off you, leaving you clean.');
    qspCall(s, 'arousal', 'cuni', 30, 'dom', 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['worksalon', 'start'] },
    ]);
  } },
      { label: 'Finish', goto: ['worksalon', 'start'] },
    ]);
  } },
        ]);
      }
    } else {
      if (((s as any).masha ?? 0) > 5  &&  (!((s as any).masharab ?? 0))) {
        qspCall(s, 'willpower', 'foreplay', 'force', 'easy');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Ask Masha to give you a massage [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Ask Masha to give you a massage [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'force');
    scene.text('After you eat your lunch, you walk over to Masha and ask her, "Masha I am so tired, can you give me a massage? Please." Masha gives you a mischievous smile. "Yes of course, I will give you anything you want." You frown a bit at her treating you like a client.');
    scene.text('"Was that sarcasm?" She looks down and bows her had slightly, looking more like a naughty child than anything. "Forgive me, that\'s not what I meant. Please go into the booth, and I\'ll do what you want."');
    scene.actions([
      { label: 'Change your mind', goto: ['worksalon', 'start'] },
      { label: 'Go into the booth', handler: (st: GameState) => {
    (s as any).masharab = 1;
    qspCall(s, 'mood', 'raise', 'tiny');
    scene.img('images/characters/city/masha/sex/s1.jpg');
    scene.text('You undress and lie down on the table. Masha begins to give you a massage, her delicate hands gliding over your body. You moan slightly as your body relaxes. A few minutes later, Masha says, "Can you please roll over onto your back?"');
    qspCall(s, 'arousal', 'massage', 30, 'dom', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Roll over', handler: (st: GameState) => {
    qspCall(s, 'mood', 'raise', 'tiny');
    scene.img('images/characters/city/masha/sex/s2.jpg');
    scene.text('You roll over in silence, eyes closed. You continue to enjoy the massage for a few minutes, then Masha begins to squeeze your breasts. Almost at once, you feel her tongue begin to lick your nipple.');
    scene.text('You open your eyes looking at her. Seeing this, Masha immediately lets go of you, falling to her knees on the floor and begging for forgiveness. "I\'m sorry if that displeased you." It takes you a few moments to realize Masha is a sub and loves to obey.');
    qspCall(s, 'arousal', 'massage', 30, 'dom', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Talk to her', handler: (st: GameState) => {
    scene.img('images/characters/city/masha/sex/s5.jpg');
    scene.text('You look down at her. "Masha I realize you love to obey, but do not do it for everyone. They will take it the wrong way."');
    scene.text('"I\'m sorry I will not," she says, almost in tears.');
    scene.text('Sighing, you take on a gentler voice. "I\'m not saying that you should never do it, just let me decide when I want you to be my little bitch. I will start ordering you around, and you will know. The rest of the time, we are just friends.');
    scene.text('There are times and places for these games, and work isn\'t one of them. If we got caught, we could be fired, and I need this job.');
    scene.text('Masha nods. "I understand. I work at night in a sex shop. The owner lets me sleep there in a spare room in the basement. You can come over and use me as your slave any time you want," she says with a happy smile. You can\'t help but smile too. She is just so damned eager to please.');
    scene.text('"Ok I might surprise you one of these nights then."');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['worksalon', 'start'] },
    ]);
  } },
      { label: 'Spread your legs', handler: (st: GameState) => {
    scene.img('images/characters/city/masha/sex/s6.jpg');
    scene.text('You just spread your legs. Masha smiles. You don\'t even have to say a word. Her mouth seeks out your pussy, and she begins to lick you. She alternates between sliding her tongue inside of you, flicking your clit with her tongue, licking your pussy all over, or just sucking on your clit, causing you to moan in pleasure.');
    qspCall(s, 'arousal', 'cuni', 30, 'dom', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Talk to her', handler: (st: GameState) => {
    scene.img('images/characters/city/masha/sex/s5.jpg');
    scene.text('After she brings you to an orgasm, you look at her. "Masha I realize you love to obey, but do not do it to everyone. They will take it the wrong way."');
    scene.text('"I\'m sorry I will not," she says, almost in tears.');
    scene.text('Sighing, you take on a gentler voice. "I\'m not saying that you should never do it, just let me decide when I want you to be my little bitch. I will start ordering you around, and you will know. The rest of the time, we are just friends. There are times and places for these games, and work isn\'t one of them. If we got caught, we could be fired, and I need this job.');
    scene.text('Masha nods. "I understand. I work at night in a sex shop. The owner lets me sleep there in a spare room in the basement. You can come over and use me as your slave any time you want" she says with a happy smile. You can\'t help but smile too. She is just so damned eager to please. "Ok I might surprise you one of these nights then."');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['worksalon', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Ask why she\'s doing this for you', handler: (st: GameState) => {
    scene.text('"Why are you doing this for me?" you ask.');
    scene.text('Masha steps back and begins to babble, looking sad and scared at the same time. "I\'m sorry, did I do something wrong? Tell me how you want me to talk or what you want me to do, and I will do it."');
    scene.text('"Well you can stop talking like a…" You almost say slave, and then you realize: she talks like that because she loves to be treated like one. You think back to when you first met her and forced her to fuck her boss and she obediently did everything that you told her to do.');
    qspCall(s, 'willpower', 'cuni', 'force');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Order her to lick your pussy [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Order her to lick your pussy [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'cuni', 'force');
    qspCall(s, 'willpower', 'pay', 'force');
    scene.img('images/characters/city/masha/sex/s3.jpg');
    scene.text('You smile. Getting on all fours, you tell her, "Lick my pussy." Her mouth seeks it out, and she begins to do as she\'s been told. She alternates between sliding her tongue inside of you, flicking your clit with her tongue, licking your pussy all over, or just sucking on your clit, causing you to moan in pleasure.');
    qspCall(s, 'arousal', 'cuni', 30, 'dom', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Talk to her', handler: (st: GameState) => {
    scene.img('images/characters/city/masha/sex/s5.jpg');
    scene.text('After she brings you to an orgasm, you look at her. "Masha I realize you love to obey, but do not do it to everyone. They will take it the wrong way."');
    scene.text('"I\'m sorry I will not," she says, almost in tears.');
    scene.text('Sighing, you take on a gentler voice. "I\'m not saying that you should never do it, just let me decide when I want you to be my little bitch. I will start ordering your around, and you will know. The rest of the time, we are just friends.');
    scene.text('There are times and places for these games, and work isn\'t one of them. If we got caught, we could be fired, and I need this job.');
    scene.text('Masha nods. "I understand. I work at night in a sex shop. The owner lets me sleep there in a spare room in the basement. You can come over and use me as your slave any time you want," she says with a happy smile. You can\'t help but smile too She is just so damned eager to please.');
    scene.text('"Ok I might surprise you one of these nights then."');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['worksalon', 'start'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    qspCall(s, 'willpower', 'rimming', 'force');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Order her to lick your ass [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Order her to lick your ass [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'cuni', 'rimming', 'hard');
    qspCall(s, 'willpower', 'pay', 'force');
    scene.img('images/characters/city/masha/sex/s4.jpg');
    scene.text('After coming to this realization, you decide to give her a new order. "Alright then, lick my ass."');
    scene.text('Moments later she slides her tongue inside of your ass while her hand massages your clit. You moan louder, your pussy becoming soaking wet as Masha massages your pussy and tongue fucks your ass.');
    scene.text('Within minutes, you feel your body spasm and you orgasm hard. After your orgasm as you catch your breath, Masha licks all your pussy juices off you, leaving you clean.');
    qspCall(s, 'arousal', 'cuni', 30, 'dom', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Talk to her', handler: (st: GameState) => {
    scene.img('images/characters/city/masha/sex/s5.jpg');
    scene.text('After she brings you to an orgasm, you look at her. "Masha I realize you love to obey, but do not do it to everyone. They will take it the wrong way."');
    scene.text('"I\'m sorry I will not," she says, almost in tears.');
    scene.text('Sighing, you take on a gentler voice. "I\'m not saying that you should never do it, just let me decide when I want you to be my little bitch. I will start ordering your around, and you will know. The rest of the time, we are just friends.');
    scene.text('There are times and places for these games, and work isn\'t one of them. If we got caught, we could be fired, and I need this job.');
    scene.text('Masha nods. "I understand. I work at night in a sex shop. The owner lets me sleep there in a spare room in the basement. You can come over and use me as your slave any time you want," she says with a happy smile. You can\'t help but smile too. She is just so damned eager to please.');
    scene.text('"Ok I might surprise you one of these nights then."');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['worksalon', 'start'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Talk to her', handler: (st: GameState) => {
    scene.img('images/characters/city/masha/sex/s5.jpg');
    scene.text('You look at her. "Masha I realize you love to obey, but do not do it for everyone. They will take it the wrong way."');
    scene.text('"I\'m sorry I will not," she says, almost in tears.');
    scene.text('Sighing, you take on a gentler voice. "I\'m not saying that you should never do it, just let me decide when I want you to be my little bitch. I will start ordering your around, and you will know. The rest of the time we are just friends, ok?');
    scene.text('There are times and places for these games, and work isn\'t one of them. If we got caught, we could be fired, and I need this job.');
    scene.text('Masha nods. "I understand. I work at night in a sex shop. The owner lets me sleep there in a spare room in the basement. You can come over and use me as your slave any time you want," she says with a happy smile. You can\'t help but smile too. She is just so damned eager to please.');
    scene.text('"Ok I might surprise you one of these nights then."');
    scene.actions([
      { label: 'Leave', goto: ['worksalon', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
          ]);
        }
      }
    }
    scene.actions([
      { label: 'Chat with Masha', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).masha = ((s as any).masha ?? 0) + (1);
    scene.text('Masha and you talk during your lunch break. You talk about boys, clients, home life and other mundane topics.');
    scene.actions([
      { label: 'Move away', goto: ['worksalon', 'start'] },
    ]);
  } },
    ]);
  }
  if (((s as any).hour ?? 0) >= 19) {
    scene.text('<center><b>Salon</b></center>');
    scene.img('images/locations/city/citycenter/mall/salon/salonwork.jpg');
    scene.text('Your shift ended.');
    scene.actions([
      { label: 'Go home', goto: ['city_center', ''] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Massage', handler: (st: GameState) => {
    (s as any).masstime = ((s as any).hour ?? 0);
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    if ((!((s as any).salonjobrand ?? 0))) {
      scene.actions([{ label: 'Continue', goto: ['worksalon', '0'] }]);
    }
    if (((s as any).salonjobrand ?? 0) === 1) {
      scene.actions([{ label: 'Continue', goto: ['worksalon', '1'] }]);
    }
    if (((s as any).salonjobrand ?? 0) > 1) {
      (s as any).minut = ((s as any).minut ?? 0) + (60);
    }
    scene.text('You give a client a massage.');
  }, goto: ['worksalon', 'start'] },
    { label: 'Have a snack (0:05)', handler: (st: GameState) => {
    qspCall(st, 'food', 'snack');
  } },
    { label: 'Eat a light meal (0:20)', handler: (st: GameState) => {
    qspCall(st, 'food', 'small_meal');
  } },
    { label: 'Drink some water (0:05)', handler: (st: GameState) => {
    qspCall(st, 'beverage', 'water');
  } },
  ]);
  scene.build();
}

function enter0(s: GameState, scene: SceneBuilder): void {
  (s as any).salonpicrand = Math.floor(Math.random() * 5) + 0;
  (s as any).picrand = ((s as any).salonpicrand ?? 0) + 30;
  scene.img(`images/locations/city/citycenter/mall/salon/wmass${((s as any).salonpicrand ?? 0)}.jpg`);
  scene.text('While massaging one of your clients, the guy flips over onto his back with a huge erection. He looks at you expectantly, obviously waiting for you to service him.');
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'bj', 'resist', 'easy');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Finish the massage [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Finish the massage [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).minut = ((st as any).minut ?? 0) + 60;
  }, goto: ['worksalon', 'start'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Suck him off', handler: (st: GameState) => {
    qspCall(s, 'npcgeneratec', '', 0, 'guy massaged at ' + qspUntranslated(s, "monthName>", { location: "worksalon" }) + ' <<day>>, <<masstime>>h', Math.floor(Math.random() * 23) + 18);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    (s as any).sexstart = 1;
    (s as any).sexvar = 6;
    (s as any).guy = ((s as any).guy ?? 0) + (1);
  }, goto: ['sex', 'minet'] },
  ]);
  scene.build();
}

function enter1(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: While massaging one of your clients, the guy asks, "Could I get an erotic breast...
  scene.text(`While massaging one of your clients, the guy asks, "Could I get an erotic breast massage from two girls at the same time? I'll pay you each ${qspFunc(s, 'money', 'string_profit', 1000)}."`);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Refuse', goto: ['worksalon', 'start'] },
    { label: 'Go get a second girl', handler: (st: GameState) => {
    qspCall(s, 'money', 'earn', 1000);
    scene.img('images/locations/city/citycenter/mall/salon/wmass5.jpg');
    scene.text('You think for a moment and then smile to him and nod. "Be right back." Then you leave and fetch Masha. Once you start to undress, she does as well, following your lead. You both crawl on him, rubbing your breasts against him all over while you take turns jerking him off.');
    qspCall(s, 'npcgeneratec', '', 0, 'guy massaged at ' + qspUntranslated(s, "monthName>", { location: "worksalon" }) + ' <<day>>, <<masstime>>h', Math.floor(Math.random() * 23) + 18);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'willpower', 'bj', 'force');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Use Masha [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Use Masha [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'force');
    // TODO-QSP: dynamic text: You see that this could take a while, and you're eager to end this. You grab Mas...
    scene.text(`You see that this could take a while, and you're eager to end this. You grab Masha by the hair and force her mouth down on his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick. She happily starts sucking him off as you pull on her hair to make her head bob up and down. He begins to moan louder and before long blows his load in Masha's mouth. She swallows it down.`);
    scene.text('You pull her head up, and she shows him her tongue, confirming she swallowed it all. He grins and pulls out the money. "Well worth it girls."');
    scene.actions([
      { label: 'Leave', goto: ['worksalon', 'start'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Suck him off', handler: (st: GameState) => {
    (s as any).guy = ((s as any).guy ?? 0) + (1);
    (s as any).picrand = 14;
    (s as any).sexstart = 1;
    (s as any).sexvar = 6;
    // TODO-QSP: dynamic text: You lower your mouth to his <<dick>>cm <<$dick_girth>> cock and slip your lips t...
    scene.text(`You lower your mouth to his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock and slip your lips tightly around his shaft. You being to bob your head up and down, sucking him off as one of your hands plays with his balls.`);
    scene.text('He begins to moan quickly, and it doesn\'t take long before he is blowing his load in your mouth. Hot spurts of semen shoot into your mouth. You quickly swallow it all down, lifting your head up and sticking out your tongue to show him.');
    scene.text('With a grin, he pulls out the money and gives it to you. "Well worth the price."');
    qspCall(s, 'arousal', 'bj', 20, 'sub');
  }, goto: ['podrsex', 'suck'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/salon/sex/ira1.jpg');
  scene.text('After the massage, you send your latest client into the next room to get cleaned up and dressed. You notice one of the other girls coming over. She sits down in the chair next to you and pulls you over, pulling down your top with out a word and starting to suck on your nipple. You are more than a bit shocked and just a bit turned on.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell her to stop', goto: ['worksalon', 'start'] },
    { label: 'Don\'t stop her', handler: (st: GameState) => {
    (s as any).girl = ((s as any).girl ?? 0) + (1);
    (s as any).telalla = 1;
    (s as any).alla = ((s as any).alla ?? 0) + (1);
    scene.img('images/locations/city/citycenter/mall/salon/sex/ira2.jpg');
    scene.text('When you don\'t object, she gets up and pushes you down in the chair. Pulling your clothes off, she exposes your pussy and pushes your legs apart. Dropping down to her hands and knees, her face goes between your legs, and her tongue darts out and starts licking you.');
    scene.text('She is amazing, and whatever she is doing with her tongue is beyond description. You feel yourself orgasm within moments. Within ten minutes, you have had several rolling orgasms. Finally, she licks you clean and gets up, handing you a business card with the name Alla and a number. Without a word, she turns and walks away.');
    qspCall(s, 'arousal', 'cuni', 30, 'dom', 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Let go', goto: ['worksalon', 'start'] },
      { label: 'Thank her', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/sex/ira3.jpg');
    scene.text('As she starts to walk away, you grab her by the arm and pull her back, then you push her down in the chair. You pull her pants and panties off her and spread her legs. You start licking her pussy at once, doing your best to mimic what she did to you, but you know you are nowhere near as skilled as she is.');
    scene.text('Still after a few minutes, the girl starts to moan, and not long after, her body spasms. Her pussy getting wetter as she cums, you lap up all her wetness.');
    scene.text('Just before you finish, you hear Pasha\'s voice behind you. "What the fuck is this?" The girl jumps up and grabs her pants and runs out with out even stopping to put them on. You turn to look at Pasha staring down at your naked body. He looks pissed. "We were…" Before you can even finish, he interrupts you.');
    scene.text('"Leave your clothes here and get the fuck in my office and bend over my desk right now, before I fire your ass."');
    qspCall(s, 'willpower', 'sex', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Tell him to fuck off and return to work [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Tell him to fuck off and return to work [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).salonslut = 0;
  }, goto: ['worksalon', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Do as he says', handler: (st: GameState) => {
    (st as any).salonslut = 1;
  }, goto: ['worksalon', '3'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A71');
  if ((!((s as any).beautyadmin ?? 0))) {
    (s as any).guy = ((s as any).guy ?? 0) + (1);
    (s as any).beautyadmin = 1;
  }
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    scene.img('images/locations/city/citycenter/mall/salon/sex/pashavag.jpg');
    qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
    qspCall(s, 'boyStat', 'A71');
    // TODO-QSP: dynamic text: Bent over his desk waiting, you know what is about to happen and begin to rub yo...
    scene.text(`Bent over his desk waiting, you know what is about to happen and begin to rub your clit to make yourself wet. Moments later, he walks in and takes off his pants. He walks right up behind you stroking his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock in his hand. He rubs the tip against your wet pussy a moment before pushing his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock balls deep into you. He begins to fuck your pussy hard, pounding into you, as you massage your clit. Slapping your ass hard, he says, "Yeah you like this, don't you slut? All you little whore's just love being fucked hard and rough." He pounds himself into you for some time before he grunts and you feel his sperm shooting deep inside your pussy. He pulls out and starts putting his pants back on. Noticing you still bent over his desk, he says, "Get the fuck out of here and get back to work slut."`);
    qspCall(s, 'arousal', 'vaginal', 15, 'sub');
    qspCall(s, 'stat', '');
    qspCall(s, 'cuminsidereact', '');
  } else {
    scene.img('images/locations/city/citycenter/mall/salon/sex/pashaanal.jpg');
    qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
    qspCall(s, 'boyStat', 'A71');
    // TODO-QSP: dynamic text: Bent over his desk waiting, you know what is about the happen and begin to rub y...
    scene.text(`Bent over his desk waiting, you know what is about the happen and begin to rub your clit to make yourself wet. Moments later he walks in and takes off his pants. He walks right up behind you stroking his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock in his hand. He rubs the tip against your asshole a moment before pushing his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock into your ass. You cry out in pain. You don't think he is using any lube at all. He struggles for a bit before he can finally force himself balls deep into you. He begins to fuck your ass hard, pounding into you, as you massage your clit, trying to distract yourself from the pain. Slapping your ass hard he says, "Yeah you like this, don't you slut? All you little whore's just love being fucked hard and rough." He pounds himself into you for some time before he grunts and you feel his sperm shooting deep inside your ass. He pulls out and starts putting his pants back on. Noticing you still bent over his desk, he says, "Get the fuck out of here and get back to work slut."`);
    qspCall(s, 'arousal', 'anal', 15, 'sub');
    qspCall(s, 'cum_call', 'anus', 'A71', 1);
    qspCall(s, 'stat', '');
  }
  (s as any).sexpartkno = 1;
  qspCall(s, 'cum_manage', '');
  qspCall(s, 'stat', '');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['worksalon', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case '0':
      enter0(s, scene);
      break;
    case '1':
      enter1(s, scene);
      break;
    case '2':
      enter2(s, scene);
      break;
    case '3':
      enter3(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const worksalon: LocationDef = {
  name: 'worksalon',
  title: 'Beauty Salon',
  region: 'other',
  locationType: 'event',
  enter: enter,
};
