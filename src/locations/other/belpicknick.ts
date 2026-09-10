import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).sashaBeliTimes = Math.floor(Math.random() * 3) + 1;
  (s as any).sipliGangTimes = Math.floor(Math.random() * 3) + 1;
  (s as any).kolGangTimes = Math.floor(Math.random() * 3) + 1;
  (s as any).tatarGangTimes = Math.floor(Math.random() * 3) + 1;
  (s as any).times_picknick = ((s as any).sashaBeliTimes ?? 0) + ((s as any).sipliGangTimes ?? 0) + ((s as any).kolGangTimes ?? 0) + ((s as any).tatarGangTimes ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  scene.text('The band of criminals quickly fold out a convenient steel grill, and have it heated up within minutes. The one named Tatar fries the meat they brought with them, while one of the others pours vodka into some glasses. Vadim hands you a glass: "Here, drink". They didn\'t bring any other snacks, so you\'re pretty much drinking the vodka on an empty stomach.');
  qspCall(s, 'willpower', 'drink', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Run away from them [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Run away from them', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
  }, goto: ['belpicknick', 'leave'] },
    ]);
  }
  scene.actions([
    { label: 'Drink the vodka', handler: (st: GameState) => {
    qspCall(s, 'drugs', 'alcohol', 'vodka');
    qspCall(s, 'stat', '');
    scene.text('You drink the vodka as you were told, and feel a shiver run down your spine. Your throat burns when you swallow it, but soon after a pleasant warmth spreads throughout your body. A few minutes later, you feel absolutely hammered.');
    scene.actions([
      { label: 'Continue', goto: ['belpicknick', '1'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  scene.text('The criminals get rowdier and rowdier, the more they had to drink. The food is all gone by now, and all they have left is more vodka. One of them runs to the car and turns on the radio, before turning up the volume as high as it will go. He puts one fist in the air and screams "Stripteeaaaase!"');
  scene.text('The others join him in his chant, and soon all of them are pushing you to the middle of a circle while chanting: "Striptease! Striptease! Striptease!"');
  if (((s as any).pcs_danc ?? 0) < 40) {
    qspCall(s, 'willpower', 'mast', 'resist', 'hard');
  } else {
    qspCall(s, 'willpower', 'voyeur', 'resist', 'hard');
  }
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Run away from them [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Run away from them', handler: (st: GameState) => {
    if (((s as any).pcs_danc ?? 0) < 40) {
      qspCall(s, 'willpower', 'mast', 'resist', 'hard');
    } else {
      qspCall(s, 'willpower', 'voyeur', 'resist', 'hard');
    }
    qspCall(s, 'willpower', 'pay', 'resist');
  }, goto: ['belpicknick', 'leave'] },
    ]);
  }
  scene.actions([
    { label: 'Perform a striptease for them', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'striptease', 5);
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 0);
    qspCall(s, 'stat', '');
    if (((s as any).pcs_danc ?? 0) < 40) {
      (s as any).prevdance = 1;
      scene.text('You know this is your cue, and you attempt to do a striptease for them. You would have to be very good at dancing to overcome you drunkenness and begin to dance a bit awkwardly, tugging at your clothes.');
      scene.text('The criminals are not impressed in the slightest, and one of them yells: "What kind of crap is this!? My elderly aunt Katinka could do a better job!"');
      scene.text('His friend agrees: "Yea, this is fucking terrible!"');
      scene.text('"Maybe she\'s better at other things. Given how bow-legged she\'s dancing, perhaps a different kind of show is in order", Siple says as he hands you an empty bottle. "Go ahead slut, entertain us."');
      scene.actions([
        { label: 'Shove the neck into your vagina', goto: ['belpicknick', 'vb_light'] },
        { label: 'Shove the bottom into your vagina', goto: ['belpicknick', 'vb_hard'] },
        { label: 'Shove the neck into your ass', goto: ['belpicknick', 'ab_light'] },
        { label: 'Shove the bottom into your ass', goto: ['belpicknick', 'ab_hard'] },
      ]);
    }
    if (((s as any).pcs_danc ?? 0) >= 40) {
      scene.actions([{ label: 'Continue', goto: ['belpicknick', 'dance'] }]);
    }
  } },
  ]);
  scene.build();
}

function enterVbLight(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/vadim/sex/bottle.jpg');
  (s as any).prevdance = 0;
  qspCall(s, 'dinsex2', 'd_vag_sex_bottle', 5, 10);
  qspCall(s, 'stat', '');
  scene.text('Okay, so dancing is not something you do well. You have to entertain them with the bottle now, and decide to take the easiest route: you spread your legs and put the neck of the bottle against your pussy lips. You slowly push it in as far as it will go, trying to make a show of it by spreading your legs as far as you can and fucking yourself slowly with the neck of the bottle.');
  if (Math.floor(Math.random() * 100) + 1 <= 10) {
    scene.text('Even though the criminals seem enthralled by your show, one of them is getting frustrated: "Whatever. You shouldn\'t be putting bottles up there, but our cocks! Get over here whore, it\'s time you get fucked."');
    qspCall(s, 'willpower', 'gangbang', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Run away from them [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Run away from them', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'arousal', 'end');
  }, goto: ['belpicknick', 'leave'] },
      ]);
    }
    scene.actions([
      { label: 'Continue', goto: ['belpicknick', 'gang'] },
    ]);
  } else {
    scene.text('The guys are not impressed however. "What kind of weak shit is this? You\'d better put some more effort into it, otherwise we\'re going to do it for you."');
    qspCall(s, 'willpower', 'mast', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Run away from them [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Run away from them', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'arousal', 'end');
  }, goto: ['belpicknick', 'leave'] },
      ]);
    }
    scene.actions([
      { label: 'Shove the bottom into your vagina', goto: ['belpicknick', 'vb_hard'] },
      { label: 'Shove the neck into your ass', goto: ['belpicknick', 'ab_light'] },
      { label: 'Shove the bottom into your ass', goto: ['belpicknick', 'ab_hard'] },
    ]);
  }
  scene.build();
}

function enterVbHard(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/vadim/sex/bottle2.jpg');
  qspCall(s, 'dinsex2', 'd_vag_sex_bottle', 5, 40);
  if (((s as any).prevdance ?? 0) === 1) {
    scene.text('Okay, so dancing is not something you do well. You have to entertain them with the bottle now, but don\'t want to anger them by taking the easy way out. You spread your legs and put the bottom of the bottle against your pussy lips, and slowly begin to push it in. You try to make a show of it by spreading your legs as far as you can and fucking yourself slowly with the bottom of the bottle, which is stretching your pussy out a great deal.');
  } else {
    scene.text('Not sure what they want to see you consider putting it in your ass but at the last second you turn the bottle around in your hand. You spread your legs and put the bottom of the bottle against your pussy lips, and slowly begin to push it in. You try to make a show of it by spreading your legs as far as you can and fucking yourself slowly with the bottom of the bottle, which is stretching your pussy out a great deal.');
  }
  if (Math.floor(Math.random() * 100) + 1 <= 80) {
    scene.text('Even though the criminals seem enthralled by your show, one of them is getting frustrated: "Whatever. You shouldn\'t be putting bottles up there, but our cocks! Get over here whore, it\'s time you get fucked."');
    qspCall(s, 'willpower', 'gangbang', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Run away from them [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Run away from them', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'arousal', 'end');
  }, goto: ['belpicknick', 'leave'] },
      ]);
    }
    scene.actions([
      { label: 'Continue', goto: ['belpicknick', 'gang'] },
    ]);
  } else {
    scene.text('The bandits look at each other for a second, and then shake their heads: "Not good enough, slut. Put it in your ass and be quick about it, otherwise we\'re doing it for you."');
    qspCall(s, 'willpower', 'mast', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Run away from them [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Run away from them', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'arousal', 'end');
  }, goto: ['belpicknick', 'leave'] },
      ]);
    }
    scene.actions([
      { label: 'Shove the neck into your ass', goto: ['belpicknick', 'ab_light'] },
      { label: 'Shove the bottom into your ass', goto: ['belpicknick', 'ab_hard'] },
    ]);
  }
  scene.build();
}

function enterAbLight(s: GameState, scene: SceneBuilder): void {
  (s as any).dick1 = 10;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/vadim/sex/bottle3.jpg');
  qspCall(s, 'dinsex2', 'd_analsex_bottle', 5, 10);
  if (((s as any).prevdance ?? 0) === 1) {
    scene.text('Okay, so dancing is not something you do well. You have to entertain them with the bottle now, and decide to impress them: you spread your legs and put the neck of the bottle against your puckered butthole. After lubricating it with a bit of saliva you slowly push it in as far as it will go, trying to make a show of it by spreading your legs as far as you can and fucking yourself slowly with the neck of the bottle.');
  } else {
    scene.text('Realising they want you to put it in your ass, you spread your legs and put the neck of the bottle against your puckered butthole. After lubricating it with a bit of saliva you slowly push it in as far as it will go, trying to make a show of it by spreading your legs as far as you can and fucking yourself slowly with the neck of the bottle.');
  }
  if (Math.floor(Math.random() * 100) + 1 <= 70) {
    scene.text('Even though the criminals seem enthralled by your show, one of them is getting frustrated: "Whatever. You shouldn\'t be putting bottles up there, but our cocks! Get over here whore, it\'s time you get fucked."');
    qspCall(s, 'willpower', 'gangbang', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Run away from them [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Run away from them', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'arousal', 'end');
  }, goto: ['belpicknick', 'leave'] },
      ]);
    }
    scene.actions([
      { label: 'Continue', goto: ['belpicknick', 'gang'] },
    ]);
  } else {
    scene.text('The bandits look at each other for a second, and then shake their heads: "Not good enough, slut. Use the other end and be quick about it, otherwise we\'re doing it for you."');
    qspCall(s, 'willpower', 'mast', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Run away from them [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Run away from them', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'arousal', 'end');
  }, goto: ['belpicknick', 'leave'] },
      ]);
    }
    scene.actions([
      { label: 'Shove the bottom into your ass', goto: ['belpicknick', 'ab_hard'] },
    ]);
  }
  scene.build();
}

function enterAbHard(s: GameState, scene: SceneBuilder): void {
  (s as any).dick1 = 40;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/vadim/sex/bottle4.jpg');
  qspCall(s, 'dinsex2', 'd_analsex_bottle', 5, 40);
  if (((s as any).prevdance ?? 0) === 1) {
    scene.text('Okay, so dancing is not something you do well. You have to entertain them with the bottle now, and decide to go as far as you can with this: you spread your legs and put the bottom of the bottle against your puckered butthole. After lubricating it with a bit of saliva and stretching a bit with your fingers you actually manage to get it in, even though it hurts a lot. Deciding you don\'t want the guys to take over for you, you soldier on and slowly push it in as far as it will go, trying to make a show of it by spreading your legs as far as you can and fucking yourself slowly with the bottom of the bottle.');
  } else {
    scene.text('The realization of what they really want from you scares you. But not as much as earning their displeasure does. So you decide to go as far as you can with this: you spread your legs and put the bottom of the bottle against your puckered butthole. After lubricating it with a bit of saliva and stretching a bit with your fingers you actually manage to get it in, even though it hurts a lot. Deciding you don\'t want the guys to take over for you, you soldier on and slowly push it in as far as it will go, trying to make a show of it by spreading your legs as far as you can and fucking yourself slowly with the bottom of the bottle.');
  }
  scene.text('The guys slap each other on the back, thoroughly impressed: "What an ass, look at it stretch! It\'s gonna take all of our cocks combined in there to even feel something!"');
  qspCall(s, 'willpower', 'gangbang', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Run away from them [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Run away from them', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'arousal', 'end');
  }, goto: ['belpicknick', 'leave'] },
    ]);
  }
  scene.actions([
    { label: 'Continue', goto: ['belpicknick', 'gang'] },
  ]);
  scene.build();
}

function enterDance(s: GameState, scene: SceneBuilder): void {
  scene.text('You slowly take off your clothes one piece at a time, while you skillfully try to give the bandits the sexy dance they want from you. You can tell they want you badly, and that your dancing is definitely having an effect on them.');
  // TODO-QSP: dynamic text: Once you're completely naked, they applaud you and tell you: "Very nice, <<$pcs_...
  scene.text(`Once you're completely naked, they applaud you and tell you: "Very nice, ${((s as any).pcs_nickname ?? 0)}. Now let's see how good you are with your mouth."`);
  scene.actions([
    { label: 'Get down on your knees', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'A115', 'a');
    qspCall(s, 'npcStat', 'A116', 'c');
    if (((s as any).sashaBeliSex ?? 0) === 0) {
      (s as any).sashaBeliSex = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    if (((s as any).sipliGangSex ?? 0) === 0) {
      (s as any).sipliSex = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    if (((s as any).kolGangSex ?? 0) === 0) {
      (s as any).kolGangSex = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    if (((s as any).tatarGangSex ?? 0) === 0) {
      (s as any).tatarGangSex = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    scene.img('images/characters/pavlovsk/vadim/sex/round.jpg');
    scene.text('You get down on your knees as the four men surround you, slapping their cocks against your cheeks and forehead. Dutifully keeping your hands behind your back, you do your best to serve them with your mouth alone as you suck on them in turns, licking the heads and teasing the balls as good as you can while trying to not make anyone feel left out.');
    (s as any).stat['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (1);
    (s as any).belsexpayment = 900;
    qspCall(s, 'arousal', 'bj', 2, ((s as any).npcID1 ?? 0), 'gangbang', 'sub', 'prostitution');
    qspCall(s, 'arousal', 'bj', 1, ((s as any).npcID1 ?? 0), 'gangbang', 'sub', 'prostitution');
    qspCall(s, 'arousal', 'bj', 1, ((s as any).npcID3 ?? 0), 'gangbang', 'sub', 'prostitution');
    qspCall(s, 'arousal', 'bj', 1, ((s as any).npcID3 ?? 0), 'gangbang', 'sub', 'prostitution');
    qspCall(s, 'stat', '');
    (s as any).fuckerrand = Math.floor(Math.random() * 4) + 1;
    (s as any).gmember = ((s as any).fuckerrand ?? 0);
    qspCall(s, 'belpicknick', 'vibor');
    if (Math.floor(Math.random() * 2) + 0 === 0) {
      // TODO-QSP: dynamic text: Suddenly the cock you're currently sucking on is pulled away from you, and <<$bo...
      scene.text(`Suddenly the cock you're currently sucking on is pulled away from you, and ${((s as any).boydesc ?? 0)} pushes you onto your back saying he wants to try another hole now.`);
      scene.actions([
        { label: 'Lie on your back', handler: (st: GameState) => {
    (s as any).belsexpayment = ((s as any).belsexpayment ?? 0) + (25);
  }, goto: ['belpicknick', 'missionary'] },
      ]);
    } else {
      // TODO-QSP: dynamic text: Suddenly the cock you're currently sucking on is pulled away from you, and <<$bo...
      scene.text(`Suddenly the cock you're currently sucking on is pulled away from you, and ${((s as any).boydesc ?? 0)} tells you to get on all fours saying he wants to try another hole now.`);
      scene.actions([
        { label: 'Get on your hands and knees', handler: (st: GameState) => {
    (s as any).belsexpayment = ((s as any).belsexpayment ?? 0) + (25);
  }, goto: ['belpicknick', 'doggy'] },
      ]);
    }
    qspCall(s, 'willpower', 'sex', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Run away from them [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Run away from them', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'arousal', 'end');
  }, goto: ['belpicknick', 'leave'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterMissionary(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'belpicknick', 'vibor');
  (s as any).belsexpayment = ((s as any).belsexpayment ?? 0) + (25);
  (s as any).times_picknick = ((s as any).times_picknick ?? 0) - (1);
  (s as any).pickrand = Math.floor(Math.random() * 2) + 0;
  if (((s as any).pickrand ?? 0) === 0) {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/pavlovsk/vadim/sex/sex.jpg"></...
    scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/pavlovsk/vadim/sex/sex.jpg"></center>`);
  }
  if (((s as any).pickrand ?? 0) === 1) {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/pavlovsk/vadim/sex/sex1.jpg"><...
    scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/pavlovsk/vadim/sex/sex1.jpg"></center>`);
  }
  if (((s as any).gmember ?? 0) === 1) {
    (s as any).sashaBeliTimes = ((s as any).sashaBeliTimes ?? 0) - (1);
  }
  if (((s as any).gmember ?? 0) === 2) {
    (s as any).sipliGangTimes = ((s as any).sipliGangTimes ?? 0) - (1);
  }
  if (((s as any).gmember ?? 0) === 3) {
    (s as any).kolGangTimes = ((s as any).kolGangTimes ?? 0) - (1);
  }
  if (((s as any).gmember ?? 0) === 4) {
    (s as any).tatarGangTimes = ((s as any).tatarGangTimes ?? 0) - (1);
  }
  // TODO-QSP: dynamic text: As you lay on your back <<$boydesc>> tells his friends grinning "Watch and learn...
  scene.text(`As you lay on your back ${((s as any).boydesc ?? 0)} tells his friends grinning "Watch and learn, boys." ${((s as any).boydesc ?? 0)} lays on top of you inserting his soft purple penis head into you. You sigh feebly as he enters you. He slides his cock carefully deeper and begins moving as if he is afraid to cause you pain. Turned on by the blowjobs before your cunt is dripping wet making him able to quickly pick up the pace as he easily glides in and out.`);
  scene.text('After a while you feel him tensing up somewhat but he\'s still banging you tirelessly. You moan loudly and scream out loud as he pushes his cock extra deep into your squelching slit.');
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  qspCall(s, 'dinsex', 'sexcum');
  qspCall(s, 'arousal', 'vaginal', 10, 'sub', 'prostitution');
  (s as any).stat['rape_count'] = ((s as any).stat['rape_count'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  if (((s as any).times_picknick ?? 0) <= 0) {
    scene.actions([
      { label: 'Get up', goto: ['belpicknick', 'end'] },
    ]);
  } else {
    qspCall(s, 'belpicknick', 'poisk');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'belpicknick', 'vibor');
    qspCall(s, 'stat', '');
    if (Math.floor(Math.random() * 2) + 0 === 0) {
      // TODO-QSP: dynamic text: All of a sudden, <<$boydesc>> slows down and tells you to get on all fours, sayi...
      scene.text(`All of a sudden, ${((s as any).boydesc ?? 0)} slows down and tells you to get on all fours, saying he wants to try another hole now.`);
      scene.actions([
        { label: 'Get on your hands and knees', goto: ['belpicknick', 'doggy'] },
      ]);
    } else {
      scene.text('You stay in position for the next guy.');
      scene.actions([
        { label: 'Continue', goto: ['belpicknick', 'missionary'] },
      ]);
    }
    qspCall(s, 'willpower', 'sex', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Run away from them [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Run away from them', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'arousal', 'end');
  }, goto: ['belpicknick', 'leave'] },
      ]);
    }
  } },
    ]);
  }
  scene.build();
}

function enterDoggy(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'belpicknick', 'vibor');
  (s as any).belsexpayment = ((s as any).belsexpayment ?? 0) + (25);
  (s as any).times_picknick = ((s as any).times_picknick ?? 0) - (1);
  (s as any).pickrand = Math.floor(Math.random() * 2) + 0;
  if (((s as any).pickrand ?? 0) === 0) {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/pavlovsk/vadim/sex/sexd.jpg"><...
    scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/pavlovsk/vadim/sex/sexd.jpg"></center>`);
  }
  if (((s as any).pickrand ?? 0) === 1) {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/pavlovsk/vadim/sex/sexd1.jpg">...
    scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/pavlovsk/vadim/sex/sexd1.jpg"></center>`);
  }
  if (Math.floor(Math.random() * 100) + 1 <= 70) {
    // TODO-QSP: dynamic text: You get down on all fours revealing your cute tushy. <<$boydesc>> steps up from ...
    scene.text(`You get down on all fours revealing your cute tushy. ${((s as any).boydesc ?? 0)} steps up from behind and shoves his dick into your pussy. You are surprised as he begins pounding you roughly right from the get go you. He keeps up this pace for five minutes, almost without slowing the pace, only occasionally stopping to take a breath. You think he would be tired soon, but it turns out that he is more tenacious than one might assume.`);
    // TODO-QSP: dynamic text: As he's pounding away, you forget where you are, screaming your head off. <<$boy...
    scene.text(`As he's pounding away, you forget where you are, screaming your head off. ${((s as any).boydesc ?? 0)} is growling spanking your butt with one hand and pulling your ${((s as any).pcs_haircolor ?? 0)} ${((s as any).curly_txt ?? 0)} hair with the other.`);
    qspCall(s, 'dinsex', 'vaginal_sex', 10);
    qspCall(s, 'dinsex', 'sexcum');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'rough', 'prostitution');
    (s as any).stat['rape_count'] = ((s as any).stat['rape_count'] ?? 0) + (1);
    qspCall(s, 'stat', '');
  } else {
    (s as any).spafinloc = 3;
    qspCall(s, 'cum_manage', '');
    // TODO-QSP: dynamic text: You find yourself being on elbows and knees as you're fully aware he is about to...
    scene.text(`You find yourself being on elbows and knees as you're fully aware he is about to penetrate your ass. ${((s as any).boydesc ?? 0)} leans the tip of his cock against your anus and pushes it into you. It is a little painful, but the desire to pleasure him outweighs it. ${((s as any).boydesc ?? 0)} gradually accelerates his pace, you can feel his balls slap against your wet clit. After a while your anus relaxes and stretches making his cock slide in and out easily now.`);
    qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
    qspCall(s, 'arousal', 'anal', 5, 'sub', 'prostitution');
    qspCall(s, 'stat', '');
  }
  if (((s as any).gmember ?? 0) === 1) {
    (s as any).sashaBeliTimes = ((s as any).sashaBeliTimes ?? 0) - (1);
  }
  if (((s as any).gmember ?? 0) === 2) {
    (s as any).sipliGangTimes = ((s as any).sipliGangTimes ?? 0) - (1);
  }
  if (((s as any).gmember ?? 0) === 3) {
    (s as any).kolGangTimes = ((s as any).kolGangTimes ?? 0) - (1);
  }
  if (((s as any).gmember ?? 0) === 4) {
    (s as any).tatarGangTimes = ((s as any).tatarGangTimes ?? 0) - (1);
  }
  if (((s as any).times_picknick ?? 0) <= 0) {
    scene.actions([
      { label: 'Get up', goto: ['belpicknick', 'end'] },
    ]);
  } else {
    qspCall(s, 'belpicknick', 'poisk');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'belpicknick', 'vibor');
    qspCall(s, 'stat', '');
    if (Math.floor(Math.random() * 2) + 0 === 0) {
      // TODO-QSP: dynamic text: <<$boydesc>> pushes you onto your back saying he wants to try another hole now.
      scene.text(`${((s as any).boydesc ?? 0)} pushes you onto your back saying he wants to try another hole now.`);
      scene.actions([
        { label: 'Lie on your back', goto: ['belpicknick', 'missionary'] },
      ]);
    } else {
      scene.text('You stay in position for the next guy.');
      scene.actions([
        { label: 'Continue', goto: ['belpicknick', 'doggy'] },
      ]);
    }
    qspCall(s, 'willpower', 'sex', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Run away from them [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Run away from them', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'arousal', 'end');
  }, goto: ['belpicknick', 'leave'] },
      ]);
    }
  } },
    ]);
  }
  scene.build();
}

function enterVibor(s: GameState, scene: SceneBuilder): void {
  if (((s as any).gmember ?? 0) === 1) {
    qspCall(s, 'npcStat', 'A113');
  } else {
    qspCall(s, 'npcStat', 'A115');
    if (((s as any).gmember ?? 0) === 3) {
      qspCall(s, 'npcStat', 'A114');
    } else {
      qspCall(s, 'npcStat', 'A116');
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case '1':
      enter1(s, scene);
      break;
    case 'vb_light':
      enterVbLight(s, scene);
      break;
    case 'vb_hard':
      enterVbHard(s, scene);
      break;
    case 'ab_light':
      enterAbLight(s, scene);
      break;
    case 'ab_hard':
      enterAbHard(s, scene);
      break;
    case 'dance':
      enterDance(s, scene);
      break;
    case 'missionary':
      enterMissionary(s, scene);
      break;
    case 'doggy':
      enterDoggy(s, scene);
      break;
    case 'vibor':
      enterVibor(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const belpicknick: LocationDef = {
  name: 'belpicknick',
  title: 'The band of criminals quickly fold out a convenient steel gr',
  region: 'other',
  description: ['The band of criminals quickly fold out a convenient steel grill, and have it heated up within minutes. The one named Tatar fries the meat they brought with them, while one of the others pours vodka into some glasses. Vadim hands you a glass: "Here, drink". They didn\'t bring any other snacks, so you\'re pretty much drinking the vodka on an empty stomach.'],
  enter: enter,
};
