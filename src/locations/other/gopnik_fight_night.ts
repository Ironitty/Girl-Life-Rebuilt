import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterHall(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/oldschool/hall.jpg');
  if (((s as any).gopnik_fight_nightQW ?? 0)?.['nights'] === 0) {
    scene.text('The front doors are chained together, but the chain is loose enough that you can pull the doors wide enough apart to easily slip in. Once inside, only a scattering of light through the windows lets you see anything at all.');
    scene.text('You take a minute to let your eyes adjust to the darkness as you hear some faint noises coming from down one of the hallways.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gschool_grounds', 'main'] },
      { label: 'Head towards the noise', handler: (st: GameState) => {
    scene.text('As you walk down the hallway, the noises get louder. Sounds of yelling, cheering and jeers lead you to the old gymnasium. You\'re not sure exactly what you\'ll find on the other side, but if you go through the door, then there\'s no turning back.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gschool_grounds', 'main'] },
      { label: 'Go in', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gopnik_fight_night', 'gym'] },
    ]);
  } },
    ]);
  } else {
    scene.text('You pass under the chain and slip through the front doors. Inside is dark as always, and you take a minute to let your eyes adjust before you turn towards the gymnasium.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gschool_grounds', 'main'] },
      { label: 'Go to the gymnasium', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gopnik_fight_night', 'gym'] },
    ]);
  }
  scene.build();
}

function enterGym(s: GameState, scene: SceneBuilder): void {
  ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (1);
  qspCall(s, 'npc_relationship', 'socialgroup_setting', 0, 0, 0, 1);
  qspCall(s, 'stat', '');
  ((s as any).gopnik_fight_nightQW ?? {})['month'] = ((s as any).month ?? 0);
  ((s as any).gopnik_fight_nightQW ?? {})['year'] = ((s as any).year ?? 0);
  scene.img('images/locations/pavlovsk/school/oldschool/gymnasium.jpg');
  if (((s as any).gopnik_fight_nightQW ?? 0)?.['nights'] === 0) {
    scene.text('You focus your mind with determination and open the door. The gymnasium is surprisingly tidy, the floor fairly clean other than what looks a lot like dried blood stains near the center. Everyone is mostly just standing around in a circle with the middle wide open.');
    scene.text('The door creaks loudly as it closes, which causes Vitek to look over at you. He grins and steps into the middle of the open circle as Vasily motions you over. You walk over to stand next to him as Vitek gets everyone\'s attention.');
    scene.text('He turns and looks around at everyone as he speaks. "It\'s nice to see so many showing up for another one of our fight nights." The he turns to look right at you. "It\'s also nice to see some fresh blood too."');
    scene.text('You glance around and notice that some of the crowd are gopniks from your brother\'s grade, as well as a few older ones, including at least one guy you remember your sister briefly dating when she was in school.');
    scene.text('"Now because of certain incidents in the past… Yeah I\'m looking at you, Roman!"');
    scene.text('"What did <i>I</i> do?!" Roman snarls and many of the gopniks laugh while the rest give him a dirty look.');
    scene.text('Vitek motions for everyone to quieten down as he continues. "I\'m going to cover the rules…"');
    scene.text('This gets some groans and a lot of boos from the crowd.');
    scene.text('"I know, I know. But we can\'t keep having repeats of what happened before. So I\'m going to go over the rules me and the boys came up with."');
    scene.actions([
      { label: 'Listen to the speech', handler: (st: GameState) => {
    ((s as any).gopnik_fight_nightQW ?? {})['nights'] = 1;
    scene.img('images/characters/pavlovsk/school/boy/vitek/vitek.jpg');
    scene.text('He glances over at Lera. "One. Only two people to a fight."');
    scene.text('He gives a very pointed look at Roman. "Two. If someone says \'stop\', goes limp or taps out, then the fight is over."');
    scene.text('He then glances at Lavrenti. "Three. Fights will go on as long as they have to."');
    scene.text('"Four. One fight at a time."');
    scene.text('"Five. You can challenge anyone to a fight."');
    scene.text('He glances over at Niko. "Six. You must accept any challenge if you have not fought yet tonight."');
    scene.text('"Seven. No being a pussy and only challenging the same person over and over." He seems to look at Radomir more than anyone else.');
    scene.text('Then he turns and looks directly at you. "Eight. If this is your first time at Fight Night, then you have to fight."');
    scene.text('The place erupts into howls, yells and screams as everyone seems to be pumping themselves up.');
    scene.actions([
      { label: 'Just watch the first few fights', goto: ['gopnik_fight_night', 'first_time'] },
      { label: 'Ask Vasily about the rules', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big11.jpg');
    scene.text('You glance over at Vasily. "So what\'s up with the rules? I didn\'t expect that."');
    scene.text('He shrugs. "No one was happy about it, but we kind of had to do something after what happened."');
    scene.text('You wait, expecting him to continue, but he doesn\'t. "Well? What happened?"');
    scene.text('He gives you a blank stare, like he\'s surprised you hadn\'t heard yet. "Well… We always had some people going against the spirit of Fight Night. Lera jumped on some bitch\'s back when she was beating Lena something fierce, which quickly turned into an open brawl that took us forever to get under control."');
    scene.text('He shakes his head. "Then you had some people being pussies and just challenging those they knew they could beat, shit like that." He pauses again before he continues. "But the real issue was when Roman beat this guy to a pulp and just <i>wouldn\'t stop</i>. We eventually had to pull him off and dump the poor bastard at the hospital. Roman damn near killed him!"');
    scene.actions([
      { label: 'Keep listening', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big11.jpg');
    scene.text('He sighs and shakes his head. "I don\'t know if he or someone else talked or the cops just figured it out, but they started to investigate us hard. Made doing anything damn near impossible! Once they finally gave up, we knew we had to make sure that never happened again, so Vitek, Dan and I came up with the rules. Not everyone likes them, but we\'ve not had any problems since then. <i>That\'s</i> why we have rules."');
    scene.text('You nod as you wonder how this even got started. "So did you guys start this?"');
    scene.text('He barks a laugh. "I wish! No, this started about fifteen years ago or so. That movie Fight Club was popular at the time and some guys from school decided to make one of their own." He pauses, like he\'s trying to remember the details. "They used to fight in some old barn near the highway, but after the new school was built it moved here."');
    scene.actions([
      { label: 'Just watch the first few fights', goto: ['gopnik_fight_night', 'first_time'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    scene.text('Having been here before and knowing what to expect, you just walk in. A few of the gopniks present glance in your direction, but no one really pays you much attention.');
    scene.text('Vitek checks the time and walks out into the middle of the circle. "Alright, looks like everyone that\'s going to come tonight is here, so let\'s get… READY TO RUMBLE!!!" he screams loudly, which sets everyone else off.');
    scene.text('You\'re surprised all this noise doesn\'t bring people to investigate, but they never seem to do.');
    scene.text('<br>WIP. There will eventually be options to challenge named NPCs or be challenged by them as you win more fights. For now, all you can do is wait around and be challenged by random NPCs.');
    scene.actions([
      { label: 'Just watch the first few fights', goto: ['gopnik_fight_night', 'first_time'] },
    ]);
  }
  scene.build();
}

function enterFirstTime(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/oldschool/fightnight/fight_club.jpg');
  scene.text('You just stand and watch. The fights mostly seem fairly friendly, as friendly as punching someone else in the face can get at least. Once the fights are over, most of the fighters give each other pats on the shoulders and help each other up.');
  scene.text('Nobody seems to take it too far and as soon as one of them seems to sense they\'re overmatched, they give up, though a couple of the guys fight it out until one is no longer able to get back up.');
  scene.text('It doesn\'t take you long to realize there seems to be three people most don\'t want to fight based on reactions:');
  scene.text('Vitek, likely due to his size, skill and strength. During his fight, he brutalize the other guy and actually knocks him out.');
  scene.text('None of the girls want to fight Katyusha and some of the guys even shy away from her. Tonight, she challenges a guy about her own size and holds his own for a while, but she keeps coming and her higher skill starts turning the tide before he finally taps out when she gets him in an armlock.');
  scene.text('Just about everyone seems to be afraid of Roman. When he challenges a guy half his size to a fight and beats the pulp out of him, Vitek has to yell out to him twice to make him stop once the other guy goes limp.');
  scene.text('You had forgotten about rule eight when some girl from your brother\'s grade walks up to you and looks you over. "Come on, bitch. Let\'s dance."');
  scene.actions([
    { label: 'Fight!', handler: (st: GameState) => {
    ((s as any).gopnik_fight_nightQW ?? {})['nights'] = (((s as any).gopnik_fight_nightQW ?? {})['nights'] ?? 0) + (1);
    ((s as any).gopnik_fight_nightQW ?? {})['fights'] = (((s as any).gopnik_fight_nightQW ?? {})['fights'] ?? 0) + (1);
    scene.img('images/locations/pavlovsk/school/oldschool/fightnight/fight_club.jpg');
    scene.text('Her challenge made, she walks out and informs Vitek. The last two fighters clear out of the center of the ring as the two of you walk out, taking stances opposite each other.');
    scene.text('Vitek walks out to stand between both of you. "Okay, you guys know the rules. I would say have a clean fight, but fuck that. Beat the shit out of each other and may the best bitch win!"');
    scene.text('This gets laughs from many of the guys and a few of the girls, but some of the other girls just roll their eyes. He then steps away and the other girl closes in; you hear a few cheering for her while some of your friends cheer for you.');
    scene.actions([
      { label: 'Start', handler: (st: GameState) => {
    // TODO-QSP: gt 'gopnik_fight_night', 'start_fight', 1
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterStartFight(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'fight', 'initFight');
  if (((s as any).locArgs?.[1] ?? 0) === 1) {
    qspCall(s, 'fight_npcdata', 'random_gopfem');
  } else {
    qspCall(s, 'fight_npcdata', 'random_gopmale');
  }
  (s as any).fightEnding = 24;
  scene.actions([{ label: 'Continue', goto: ['fight', 'start'] }]);
  scene.build();
}

function enterBarelyWin(s: GameState, scene: SceneBuilder): void {
  ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (2);
  qspCall(s, 'npc_relationship', 'socialgroup_setting', 0, 0, 0, 2);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/oldschool/fightnight/win_barely.jpg');
  scene.text('It\'s a tough fight. Your opponent gets a lot of good hits in and your body feels every single one of them, but in the end you mange to make her tap out. She falls on her ass as she gives up and you stand with your hands still up ready for more, but you\'re barely managing to stay on your feet.');
  scene.text('At least no one else knows how close you came to losing. Once you\'re sure she\'s done, you relax and sit on one of the boxes to nurse your wounds as several of your friends come over to congratulate you and check on you.');
  scene.text('Once they\'re sure you\'re okay, they go back to watching the rest of the fights, with some taking part in fights themselves.');
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    if (((s as any).hour ?? 0) < 23) {
      (s as any).minut = ((s as any).minut ?? 0) + ((23-((s as any).hour ?? 0))*60 - ((s as any).minut ?? 0));
    }
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/oldschool/fightnight/fight_club.jpg');
    if (((s as any).gopnik_fight_nightQW ?? 0)?.['nights'] === 0) {
      scene.text('After the last fight between some of the older gopniks finish, Vitek walks out to the middle.');
      scene.text('"Alright, that\'s it for tonight." There are some groans and boos, but you think most seem ready to call it a night. "I hope to see all of you again next week."');
      scene.text('With that, everyone starts slowly leaving, a few having to get help to leave.');
      scene.text('Just before you head out, Vitek walks over to you. "Good job. I hope you come back next time."');
      scene.text('He pats you on the shoulder before heading out himself. You make your way outside as well.');
    } else {
      scene.text('After the last fight between some of the older gopniks finish, Vitek walks out to the middle. "Alright, that\'s it for tonight." There are some groans and boos, but you think most seem ready to call it a night. "I hope to see all of you again next week."');
      scene.text('With that, everyone starts slowly leaving, a few having to get help to leave. You make your way outside as well.');
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gschool_grounds', 'main'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterEasilyWin(s: GameState, scene: SceneBuilder): void {
  ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (3);
  qspCall(s, 'npc_relationship', 'socialgroup_setting', 0, 0, 0, 3);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/oldschool/fightnight/win_easily.jpg');
  scene.text('It\'s an easy fight, the other girl being no match for you at all. You often play with her just to make the fight last longer and of course to show off a little. You could end the fight much sooner, but before too long she figures it out as well.');
  scene.text('She goes down after one of your big hits and stays on the ground, giving up. To establish domination even more, you put your foot on her to keep her down as Vitek announces you the winner.');
  scene.text('Your fight over, you move over to stand in the circle to watch the rest of the fights. Several of your friends congratulate you while you notice the looks of respect you\'re getting from some of the other gopniks.');
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    if (((s as any).hour ?? 0) < 23) {
      (s as any).minut = ((s as any).minut ?? 0) + ((23-((s as any).hour ?? 0))*60 - ((s as any).minut ?? 0));
    }
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/oldschool/fightnight/fight_club.jpg');
    if (((s as any).gopnik_fight_nightQW ?? 0)?.['nights'] === 0) {
      scene.text('After the last fight between some of the older gopniks finish, Vitek walks out to the middle.');
      scene.text('"Alright, that\'s it for tonight." There are some groans and boos, but you think most seem ready to call it a night. "I hope to see all of you again next week."');
      scene.text('With that, everyone starts slowly leaving, a few having to get help to leave. Just before you head out, Vitek walks over to you with a grin.');
      scene.text('"Great fight. You stomped the shit out of that bitch! I hope you come back next time."');
      scene.text('He gives your shoulder a squeeze before heading out himself. You make your way outside as well.');
    } else {
      scene.text('After the last fight between some of the older gopniks finish, Vitek walks out to the middle. "Alright, that\'s it for tonight." There are some groans and boos, but you think most seem ready to call it a night. "I hope to see all of you again next week."');
      scene.text('With that, everyone starts slowly leaving, a few having to get help to leave. You make your way outside as well.');
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gschool_grounds', 'main'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterBarelyLose(s: GameState, scene: SceneBuilder): void {
  ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (1);
  qspCall(s, 'npc_relationship', 'socialgroup_setting', 0, 0, 0, 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/oldschool/fightnight/lose_barely.jpg');
  scene.text('It\'s a tough fight and she gets a lot of good hits in, your body feeling every single one of them. You return the favor almost blow for blow, but in the end you can\'t take anymore.');
  scene.text('With you on your last leg, Vitek steps between the two of you and calls the fight, announcing her as the winner as you sit on one of the boxes to nurse your wounds. Several of your friends come over to give you support and tell you how close you came and how you\'ll get her next time.');
  scene.text('After they check on you and make sure you\'re okay, they go back to watching the rest of the fights, with some taking part in fights themselves.');
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    if (((s as any).hour ?? 0) < 23) {
      (s as any).minut = ((s as any).minut ?? 0) + ((23-((s as any).hour ?? 0))*60 - ((s as any).minut ?? 0));
    }
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/oldschool/fightnight/fight_club.jpg');
    if (((s as any).gopnik_fight_nightQW ?? 0)?.['nights'] === 0) {
      scene.text('After the last fight between some of the older gopniks finish, Vitek walks out to the middle.');
      scene.text('"Alright, that\'s it for tonight." There are some groans and boos, but you think most seem ready to call it a night. "I hope to see all of you again next week."');
      scene.text('With that, everyone starts slowly leaving, a few having to get help to leave. Just before you head out, Vitek walks over to you. "Good job. It was a tough fight, but you gave her all she could take. I\'m sure you\'ll take her next time."');
      scene.text('He pats you on the shoulder before heading out himself. After that, you make your way outside as well.');
    } else {
      scene.text('After the last fight between some of the older gopniks finish, Vitek walks out to the middle. "Alright, that\'s it for tonight." There are some groans and boos, but you think most seem ready to call it a night. "I hope to see all of you again next week."');
      scene.text('With that, everyone starts slowly leaving, a few having to get help to leave. You make your way outside as well.');
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gschool_grounds', 'main'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSurrender(s: GameState, scene: SceneBuilder): void {
  ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) - (1);
  qspCall(s, 'npc_relationship', 'socialgroup_setting', 0, 0, 0, (-1));
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/oldschool/fightnight/lose_barely.jpg');
  scene.text('It\'s not even close. You have trouble landing solid blows while her blows seem to come out of nowhere lighting fast and with such power behind them that you fall more than once.');
  scene.text('As you\'re struggling to get up after being knocked on your ass once again, you finally just admit defeat and stay down. You tap the ground with one hand to show you are tapping out, the place erupts in cheers as she\'s drowned in cheers for beating the shit out of you as Vitek helps you up and hands you off to Vasily, who helps you over to some of the boxes.');
  scene.text('As you sit on one of them to nurse your wounds, several of your friends come over to check on you. Once they\'re sure you\'re not hurt too badly, they go back to watching the rest of the fights, with some taking part in fights themselves.');
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    if (((s as any).hour ?? 0) < 23) {
      (s as any).minut = ((s as any).minut ?? 0) + ((23-((s as any).hour ?? 0))*60 - ((s as any).minut ?? 0));
    }
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/oldschool/fightnight/fight_club.jpg');
    if (((s as any).gopnik_fight_nightQW ?? 0)?.['nights'] === 0) {
      scene.text('After the last fight between some of the older gopniks finish, Vitek walks out to the middle.');
      scene.text('"Alright, that\'s it for tonight." There are some groans and boos, but you think most seem ready to call it a night. "I hope to see all of you again next week."');
      scene.text('With that, everyone starts slowly leaving, a few having to get help to leave. Just before you head out, Vitek walks over to you.');
      scene.text('"Nice effort, but the only way you\'ll get better is to keep fighting. Training only does so much; the real thing is the best way to learn."');
      scene.text('He pats you on the shoulder before heading out himself. You gingerly make your way outside as well.');
    } else {
      scene.text('After the last fight between some of the older gopniks finish, Vitek walks out to the middle. "Alright, that\'s it for tonight." There are some groans and boos, but you think most seem ready to call it a night. "I hope to see all of you again next week."');
      scene.text('With that, everyone starts slowly leaving, a few having to get help to leave. You make your way outside as well.');
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gschool_grounds', 'main'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterBadlyLose(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/oldschool/fightnight/lose_badly.jpg');
  scene.text('It\'s not even close. You have trouble landing solid blows while her blows seem to come out of nowhere lighting fast and with such power behind them that you fall more than once.');
  scene.text('As you\'re struggling to get up after being knocked on your ass once again, Vitek comes in and calls the fight. She\'s drowned in cheers for beating the shit out of you as Vitek helps you up and hands you off to Vasily, who helps you over to some of the boxes.');
  scene.text('As you sit on one of them to nurse your wounds, several of your friends come over to check on you. Once they\'re sure you\'re not hurt too badly, they go back to watching the rest of the fights, with some taking part in fights themselves.');
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    if (((s as any).hour ?? 0) < 23) {
      (s as any).minut = ((s as any).minut ?? 0) + ((23-((s as any).hour ?? 0))*60 - ((s as any).minut ?? 0));
    }
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/oldschool/fightnight/fight_club.jpg');
    if (((s as any).gopnik_fight_nightQW ?? 0)?.['nights'] === 0) {
      scene.text('After the last fight between some of the older gopniks finish, Vitek walks out to the middle.');
      scene.text('"Alright, that\'s it for tonight." There are some groans and boos, but you think most seem ready to call it a night. "I hope to see all of you again next week."');
      scene.text('With that, everyone starts slowly leaving, a few having to get help to leave. Just before you head out, Vitek walks over to you.');
      scene.text('"Nice effort, but the only way you\'ll get better is to keep fighting. Training only does so much; the real thing is the best way to learn."');
      scene.text('He pats you on the shoulder before heading out himself. You gingerly make your way outside as well.');
    } else {
      scene.text('After the last fight between some of the older gopniks finish, Vitek walks out to the middle. "Alright, that\'s it for tonight." There are some groans and boos, but you think most seem ready to call it a night. "I hope to see all of you again next week."');
      scene.text('With that, everyone starts slowly leaving, a few having to get help to leave. You make your way outside as well.');
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gschool_grounds', 'main'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'hall':
      enterHall(s, scene);
      break;
    case 'gym':
      enterGym(s, scene);
      break;
    case 'first_time':
      enterFirstTime(s, scene);
      break;
    case 'start_fight':
      enterStartFight(s, scene);
      break;
    case 'barely_win':
      enterBarelyWin(s, scene);
      break;
    case 'easily_win':
      enterEasilyWin(s, scene);
      break;
    case 'barely_lose':
      enterBarelyLose(s, scene);
      break;
    case 'surrender':
      enterSurrender(s, scene);
      break;
    case 'badly_lose':
      enterBadlyLose(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gopnik_fight_night: LocationDef = {
  name: 'gopnik_fight_night',
  title: '<br>WIP. There will eventually be options to challenge named NPCs or be challenged by them as you win more fights. For now, all you can do is wait around and be challenged by random NPCs.',
  region: 'other',
  enter: enter,
};
