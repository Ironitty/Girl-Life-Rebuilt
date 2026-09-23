import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterDimaRevengeEventCheck(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dimaRevenge ?? 0) === 3) {
    qspGoto(s, 'dimaRevenge', '3');
  } else {
    if (((s as any).dimaRevenge ?? 0) === 4) {
      if ((!((s as any).dimaRevChoice ?? 0))) {
        qspGoto(s, 'dimaRevenge', '4');
      } else {
        if (((s as any).dimaRevChoice ?? 0) === 2) {
          qspGoto(s, 'dimaRevenge', '4', 'lunch');
        } else {
          if (((s as any).dimaRevChoice ?? 0) === 3) {
            qspGoto(s, 'dimaRevenge', '4');
          }
        }
      }
    } else {
      if (((s as any).dimaRevenge ?? 0) === 5) {
        if (((s as any).dimaRevChoice ?? 0) === 1) {
          qspGoto(s, 'dimaRevenge', '5', 'lunch');
        } else {
          if (((s as any).dimaRevChoice ?? 0) === 5) {
            qspGoto(s, 'dimaRevenge', '5', 'afterlunch');
          } else {
            if (((s as any).dimaRevChoice ?? 0) === 6) {
              qspGoto(s, 'dimaRevenge', '5');
            }
          }
        }
      } else {
        if (((s as any).dimaRevenge ?? 0) === 6) {
          if (((s as any).dimaRevChoice ?? 0) === 1) {
            qspGoto(s, 'dimaRevenge', '6', 'lunch');
          }
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  qspCall(s, 'stat', '');
  if ((!((s as any).DimaRudeBlock ?? 0))) {
    (s as any).DimaRudeBlock = 1;
  }
  if (String((s as any).locArgs?.[0] ?? '') === 1) {
    qspCall(s, 'fame', 'pav', 'sex', 10);
    (s as any).dimaRevenge = ((s as any).dimaRevenge ?? 0) + (1);
    scene.text('<center><b>Classroom</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/dimka/revenge/cantconcentrate.jpg');
    scene.text('You try paying attention in class, but you find it impossible to concentrate. You can\'t stop thinking about what Dimka said this morning.');
    scene.text('As you try to figure out what he has planned, you swear you keep hearing your name being whispered.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
    ]);
  }
  if (String((s as any).locArgs?.[0] ?? '') === 2) {
    qspCall(s, 'fame', 'pav', 'sex', 20);
    (s as any).dimaRevenge = ((s as any).dimaRevenge ?? 0) + (1);
    scene.text('<center><b>School Hallway</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/dimka/revenge/behindherback.jpg');
    scene.text('You hear your name a couple times as you roam the halls. You turn to look where it came from, but everyone is acting casual. You hear snickering when you turn back around.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
    ]);
  }
  if (String((s as any).locArgs?.[0] ?? '') === 3) {
    qspCall(s, 'fame', 'pav', 'sex', 40);
    (s as any).dimaRevenge = ((s as any).dimaRevenge ?? 0) + (1);
    scene.img('images/locations/pavlovsk/school/lunch/lunch.jpg');
    scene.text('After grabbing lunch, you see some boys looking at you and talking quietly to themselves. You decide to ignore them and sit at a table to eat.');
    scene.text('As you are enjoying your meal, you feel a hand cup your breast and quickly turn around angry, spilling your lunch in the process. The other kids laugh at the spectacle.');
    scene.text('Embarrassed, you head to the girl\'s restroom to clean up.');
    scene.actions([
      { label: 'Go clean up', handler: (st: GameState) => {
    scene.text('<center><b>Girls bathroom</b></center>');
    scene.img('images/locations/pavlovsk/school/bathroom/girlsbathroom.jpg');
    scene.text('Cursing quietly to yourself, you spend ten minutes trying to clean food off your clothes.');
    scene.text('After failing to remove a stubborn stain you, give up and decide to hide in the bathroom to sulk. This has been a terrible week so far and you just want it to end.');
    scene.text('You hear the door open and, not wanting to be seen, hide in a stall. Two girls walk in and start talking while reapplying their makeup.');
    scene.actions([
      { label: 'Listen in', handler: (st: GameState) => {
    scene.text('<center><b>Girls bathroom</b></center>');
    scene.img('images/locations/pavlovsk/school/bathroom/girlsbathroom.jpg');
    if (((st as any).grupTipe ?? 0) === 1) {
      // TODO-QSP: dynamic text: "<<$pcs_firstname>> thinks she''s so great. What I wouldn''t give to watch her f...
      scene.text(`"${((st as any).pcs_firstname ?? '')} thinks she's so great. What I wouldn't give to watch her fall."`);
      scene.text('"You won\'t need to give anything. Word is she cheated on Dimka and now he\'s out to destroy her. You have to be a real idiot to cross him."');
      scene.text('"I didn\'t even know they were dating. Where did you hear this?"');
      scene.text('"Lizaveta, Who else?"');
      scene.text('"So that means everyone knows then. It won\'t be long now before she\'s giving out blowjobs with Sonia."');
      scene.text('You seethe with rage, but decide to keep quiet. Soon they leave and you exit the stall and head for the mirror.');
      scene.text('You apply makeup as you think of ways out of your current situation. You know it\'s important not to react to rumors, but to instead cut them off at the source.');
      scene.text('With that in mind you make a decision.');
      scene.actions([
        { label: 'Fight fire with fire', handler: (st: GameState) => {
    (st as any).dimaRevChoice = 1;
    scene.text('Dimka isn\'t the only one who can spread rumors. You head into the hallway and get to work.');
    scene.text('You talk to many people, but you can tell most of them don\'t believe you. This is harder than you thought. You need a master of gossip.');
    scene.actions([
      { label: 'Enlist Lizaveta', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big140.jpg');
    // TODO-QSP: dynamic text: Lizaveta is the one to go to for all things gossip. You find her standing by a c...
    scene.text(`Lizaveta is the one to go to for all things gossip. You find her standing by a classroom door, looking inside. She is startled when you greet her. "Oh, you scared me, ${((st as any).pcs_nickname ?? '')}."`);
    scene.text('"What are you doing," you ask her, "what are you looking at in there?"');
    scene.text('"Nothing," she answers unconvincingly.');
    scene.text('You give her a skeptical look then ask her, "I know a few secrets about Dimka. Wanna hear?"');
    scene.text('You proceed to tell her every awful thing about Dimka from how he treats girls to his drug habit. She listens attentively and you can tell she is eager to spread it around.');
    scene.text('When you are satisfied you head to class and let Lizaveta do the rest.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
        { label: 'Go to class', handler: (st: GameState) => {
    (st as any).dimaRevChoice = 0;
    scene.text('<center><b>Classroom</b></center>');
    scene.img('images/locations/pavlovsk/school/classroom/engaged.jpg');
    scene.text('Not knowing what else to do right now, you head to class.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      ]);
    } else {
      if (((st as any).grupTipe ?? 0) === 2) {
        // TODO-QSP: dynamic text: "I heard <<$pcs_firstname>> is on steroids."
        scene.text(`"I heard ${((st as any).pcs_firstname ?? '')} is on steroids."`);
        scene.text('"I heard she sucked off the coach for a spot on the team."');
        scene.text('At this point you can\'t help yourself and barge out of the stall to the surprise of the two girls.');
        // TODO-QSP: dynamic text: "Oh, <<$pcs_nickname>>, I didn''t know you were in here," says one of the girls,...
        scene.text(`"Oh, ${((st as any).pcs_nickname ?? '')}, I didn't know you were in here," says one of the girls, nervously. "Don't want to hear it," you tell her. "Just get lost before I change my mind."`);
        scene.text('They hurriedly leave the restroom, giving you time to think. It seems Dimka wasn\'t full of shit after all. You need to find some way to shut him up.');
        scene.text('You consider just beating him up, but if you\'re caught it could keep you off any teams. Unfortunately you have to take an indirect approach.');
        scene.actions([
          { label: 'Find muscle', handler: (st: GameState) => {
    (st as any).dimaRevChoice = 2;
    scene.img('images/locations/pavlovsk/school/building/locker.jpg');
    scene.text('Dimka needs to be taught a lesson. Who says you need to be the one to teach it? You know some of the strongest boys in the school who would jump at the chance to prove how macho they are. You head to the lockers where the other athletes hang out.');
    // TODO-QSP: dynamic text: You see Ivan and Erast talking and decide to get them to take care of Dimka. You...
    scene.text(`You see Ivan and Erast talking and decide to get them to take care of Dimka. You make your saddest face and walk by. They immediately notice you and your gloomy expression. Ivan speaks up first. "Hey, ${((st as any).pcs_nickname ?? '')}, what's wrong?"`);
    scene.text('"It\'s Dimka," you answer. "He\'s been saying terrible things about me, and people are starting to believe him. I don\'t know what to do."');
    scene.text('He gives you a sympathetic look and says, "That guy is such an asshole. I\'ll straighten him out. You coming Erast?" Erast give a nod in response and the two of them head down the hall to where Dimka is talking to some other guys.');
    scene.actions([
      { label: 'Watch what happens', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/punch.jpg');
    // TODO-QSP: dynamic text: "<<$pcs_firstname>> is a hopeless cumslut," Dimka tells the other boys. "I was j...
    scene.text(`"${((st as any).pcs_firstname ?? '')} is a hopeless cumslut," Dimka tells the other boys. "I was just minding my own business at home and she starts knocking frantically on my door. When I answered, she got on her knees and begged for permission to blow me."`);
    scene.text('"What did you do," one of the boys asks.');
    scene.text('"She wasn\'t taking no for an answer, and pulled my dick out before I could object. I\'m telling you she is an addict to cum. If you ask her I\'m sure she\'ll take care of you guys too."');
    scene.text('The two guys laugh, but then after seeing an angry Ivan moving towards them, they quickly run away. Dimka doesn\'t react in time and is punched square in the nose. "Fuck, Ivan! What the hell is your problem?!"');
    scene.text('"Your damn mouth," Ivan responds while grabbing Dimka by the collar. Dimka quickly gets free and tries to run away, but is blocked by Erast who punches Dimka in the face and knocks him out.');
    scene.actions([
      { label: 'thank Ivan and Erast', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/dimka/revenge/cheekkiss.jpg');
    scene.text('"Thanks, you two. I\'m sure he will stop spreading rumors about me now." You give both of them a peck on the cheek. Erast blushes red. Ivan just grins.');
    scene.text('"It was our pleasure," Ivan says. "Dimka was due a beating anyway. If he starts talking shit again, give us a call." The three of you head to class.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
          { label: 'Go to class', handler: (st: GameState) => {
    (st as any).dimaRevChoice = 0;
    scene.text('<center><b>Classroom</b></center>');
    scene.img('images/locations/pavlovsk/school/classroom/engaged.jpg');
    scene.text('Not knowing what else to do right now, you head to class.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
        ]);
      } else {
        if (((st as any).grupTipe ?? 0) === 3) {
          // TODO-QSP: dynamic text: "So, did you hear about that nerd girl, <<$pcs_firstname>>? They say she is secr...
          scene.text(`"So, did you hear about that nerd girl, ${((st as any).pcs_firstname ?? '')}? They say she is secretly a slut who gives it up to all the nerds."`);
          scene.text('"I heard she\'s actually an idiot and the nerds do her homework for her in exchange for blowjobs whenever they want."');
          scene.text('You cover your ears and try to ignore their comments. After they leave you go to the sink and splash water on your face and try to steel yourself.');
          scene.text('Dimka is determined to ruin your reputation. If you don\'t do something soon, everyone is going to think you\'re a vapid airhead who has to trade sexual favors for good grades.');
          scene.text('You need stop him somehow. But what can you do?');
          if (((st as any).grupvalue ?? 0)[3] > 50) {
            (st as any).dimaRevChoice = 3;
            scene.actions([
              { label: 'Review the situation', handler: (st: GameState) => {
    scene.text('<center><b>Classroom</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/dimka/revenge/gilthinking.jpg');
    scene.text('You go to class but can\'t really focus on today\'s lessons. Instead you think about your problem. Dimka has been running around the school spreading rumors about you. You could calmly disprove each rumor, but you\'ve come to accept that the vast majority of kids your age don\'t respond well to logic and reason. You need to get Dimka to stop bad mouthing you and admit to everyone that he was lying. In order to do that you decide that blackmail is the only course of action. You already know Dimka\'s computer is easily hacked, so all you need to do is find someone who can hack it.');
    scene.text('You think to yourself, Julia is too nice to ever want to violate someone\'s privacy. Natasha doesn\'t even own a PC. You don\'t want to get Artem involved again, and you forgot Petka existed until just now. Feofan can tell you everything about superheroes including their shoe size, but somehow you don\'t think that\'s going to help. Admittedly, you don\'t know much about Zinaida since you can\'t get more than a few words out of her before she goes back to her phone. Evgeny lives and breathes chess and probably won\'t be of much use. That leaves Gerasim.');
    scene.actions([
      { label: 'Talk to Gerasim', handler: (st: GameState) => {
    scene.text('<center><b>Classroom</b></center>');
    scene.img('images/characters/shared/headshots_main/big153.jpg');
    // TODO-QSP: dynamic text: After class you sit next to Gerasim and try to convince him to hack Dimka''s com...
    scene.text(`After class you sit next to Gerasim and try to convince him to hack Dimka's computer. "I wish I could help, ${((st as any).pcs_nickname ?? '')}, but that isn't really something I know how to do. Have you tried asking Artem?"`);
    scene.text('"I really don\'t want to involve him in this," you reply.');
    scene.text('"Well he would be the one to go to for this kind of thing, but I guess you have a good reason for not telling him. I won\'t pry."');
    scene.text('He thinks for a few seconds and says "I think Feofan knows a bit about hacking. You should ask him." You thank him and head out into the hall.');
    scene.actions([
      { label: 'Look for Feofan', handler: (st: GameState) => {
    scene.text('<center><b>School Hallway</b></center>');
    scene.img(`images/locations/pavlovsk/school/building/gschool_hall0${(Math.floor(Math.random() * 3) + 0)}.jpg`);
    scene.text('You search the hallway for Feofan. The hallway is crowded with students preparing to leave school. You spot him at the end of the hall talking to Zinaida. He must be hitting on her again. All the nerd boys ask her out.');
    scene.text('You swear you even saw Julia asking her out once. She always turns them down. Feofan is an incorrigible flirt though and doesn\'t let rejection dampen his spirit. You almost envy that about him. You approach him as Zinaida turns him down yet again.');
    scene.actions([
      { label: 'Talk to Feofan', handler: (st: GameState) => {
    scene.text('<center><b>School Hallway</b></center>');
    scene.img('images/characters/shared/headshots_main/big152.jpg');
    scene.text('"She turn you down again?" you ask him. "How many times is that?"');
    scene.text('"Who\'s keeping count?" he answers. "I don\'t let that keep me down. I can always try again or ask out other girls. Speaking of which… What are you doing later?"');
    scene.text('Any other time and you might consider it, but right now you can\'t think about that kind of thing. "I can\'t right now, sorry. I actually came to ask for your help. I need you to hack someone\'s computer. Can you do that?"');
    scene.text('"That sounds risky. I need to think about it."');
    scene.text('You don\'t have time for him to think about it. "What if I convince Zinaida to go out with you? Will you do it then?"');
    scene.text('"Well, yeah, but I don\'t see how you\'re going to do that."');
    scene.text('"Stay here I\'ll talk to her."');
    scene.actions([
      { label: 'Look for Zinaida', handler: (st: GameState) => {
    scene.text('<center><b>School Hallway</b></center>');
    scene.img('images/characters/shared/headshots_main/big142.jpg');
    scene.text('You catch up to Zinaida as she leaves the school building. She\'s glued to her phone as always. You tap her on the shoulder and say, "Hey, Zinaida. You\'re looking nice today."');
    // TODO-QSP: dynamic text: Without looking away from her screen she says, "You''re lying, trying to be nice...
    scene.text(`Without looking away from her screen she says, "You're lying, trying to be nice to me, so you must want something out of me, so what do you want, ${((st as any).pcs_nickname ?? '')}?"`);
    scene.text('"Oh… well… uh I think you should go out with Feofan."');
    scene.text('"Why?"');
    scene.text('"Well um… Alright I\'m gonna level with you. I need his help and he wants a date with you. What\'s it gonna take?"');
    scene.text('She thinks for a bit then pulls out some kind of usb adapter from her backpack and hands it to you saying, "Go to the computer room and plug this flashdrive into the back of the computer furthest from the door.');
    scene.text('Then turn the computer on but leave the monitor off. Wait 10 minutes then shut down the computer and destroy the flash drive. Do that and I\'ll go on that date."');
    scene.text('"Just what are you asking me to do?"');
    scene.text('"Don\'t worry about it. Do we have a deal or not?"');
    scene.text('Suddenly you aren\'t so sure about this, but you don\'t really have a choice if you want to get back at Dimka. "Okay I\'ll do it," you tell her.');
    scene.text('"Great. I\'ll go tell Feofan to take me on that date now. I know you\'ll get the job done. Just don\'t get caught."');
    scene.actions([
      { label: 'Go to the computer science room', handler: (st: GameState) => {
    scene.text('<center><b>Computer Science Room</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/dimka/revenge/flashdrive.jpg');
    scene.text('You head into the computer room and attach the adapter to the computer like you were told. Curious, you don\'t turn off the monitor right away and you see several programs opening and changing various setting.');
    scene.text('You turn the screen off and wait ten minutes, then shut down the computer. When you reach behind the computer to grab the flash drive, you hear a voice coming from the door.');
    scene.text('"What are you doing in here, pig?"');
    scene.actions([
      { label: 'Face the door', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big1.jpg');
    // TODO-QSP: dynamic text: You turn to face the door and see Dimka staring at you. "What are you up to, <<$...
    scene.text(`You turn to face the door and see Dimka staring at you. "What are you up to, ${((st as any).pcs_nickname ?? '')}?" he asks you as he slowly walks towards you.`);
    scene.text('"None of your business," you tell him trying to sound tough.');
    scene.text('"Really because it looks like you were doing something back there. Something you shouldn\'t be doing." He\'s getting closer now and you start to back away from him as he continues talking.');
    scene.text('"If the principal finds out you\'ll get expelled. Unless you do what I tell you right now." You back into the wall. No where to run now.');
    scene.text('Dimka puts his hand on your shoulder and asks, "So what\'s it going to be, pig? Are you going to do what I say? Yes or no?" If you say yes he\'ll have you under his heel again. You aren\'t going back to that.');
    scene.text('He has you trapped though and you\'ll have to use your wits to get by.');
    scene.actions([
      { label: 'Use your wits', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A1', (-10));
    scene.img('images/locations/pavlovsk/school/events/rand_scoolboy8.jpg');
    scene.text('Sometimes "using your wits" means doing what people least expect. So you gather up your saliva and spit in his eye. "Arrgh you bitch!" Dimka yells as he wipes the spit from his eye.');
    scene.text('You seize the opportunity and kick him in the balls as hard as you can, then run out of the classroom. Remembering the flashdrive you run back and grab it, kicking Dimka again on the way out.');
    scene.actions([
      { label: 'Run home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/dimka/revenge/hammer-1.jpg');
    scene.text('You run home as fast as you can. When you get home you grab a hammer from your stepfather\'s toolbox and use it to crush the flashdrive into tiny pieces, then flush those pieces down the toilet. Finally you take a deep breath.');
    scene.actions([
      { label: 'Run to school', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['gschool_lessons', 'short_break'] },
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
          }
          scene.actions([
            { label: 'Go to class', handler: (st: GameState) => {
    (st as any).dimaRevChoice = 0;
    scene.text('<center><b>Classroom</b></center>');
    scene.img('images/locations/pavlovsk/school/classroom/engaged.jpg');
    scene.text('Not knowing what else to do right now, you head to class.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
          ]);
        } else {
          if (((st as any).grupTipe ?? 0) === 4) {
            // TODO-QSP: dynamic text: "You know that <<$pcs_firstname>> girl who is always hanging out with the gopnik...
            scene.text(`"You know that ${((st as any).pcs_firstname ?? '')} girl who is always hanging out with the gopniks. Well, I heard she has to suck them off everyday to be allowed to hang out with them."`);
            scene.text('"I believe it. She acts all tough, but if it weren\'t for her friends she would just be a scared little girl."');
            scene.text('No fucking way are you standing for this! You quickly exit the stall head towards them. The first girl sees you and bolts out of the restroom.');
            scene.text('The other girl isn\'t quick enough and you grab her by her hair. She struggles to get free so you punch her in the stomach, causing her to keel over and fall to her knees.');
            scene.text('You command her to look up at you and she does so with tears in her eyes. "Who\'s the scared little girl now," you ask her menacingly.');
            scene.text('When she doesn\'t answer, you put your foot on her shoulder and force her chest to the ground. Then you put your foot to her head and ask again. "Answer me bitch! Who\'s the scared little girl now?"');
            scene.text('"I am," she answers, meekly.');
            scene.text('"That\'s right and if I ever hear you badmouth me again I\'ll beat you until your own mother won\'t recognize you! Now get lost. Don\'t stand up, crawl!"');
            scene.text('She crawls as fast as she can but can\'t open the door from the ground and, not daring to stand up, asks you nicely to open the door for her.');
            scene.text('You comply with an evil laugh and, as she crawls out the restroom. You give her a kick on the ass for good measure. All this excitement almost made you forget who really deserves a kick on the ass.');
            scene.text('Dimka is going to regret messing with you. You know just what to do.');
            scene.actions([
              { label: 'Ruin Dimka\'s face', handler: (st: GameState) => {
    (st as any).dimaRevChoice = 4;
    qspCall(st, 'npc_relationship', 'modify', 'A20', 5);
    qspCall(st, 'npc_relationship', 'modify', 'A21', 5);
    scene.text('Time to pay Dimka a visit. Just as you were getting ready to leave the restroom, in walks Lena and Lera. "Well if it isn\'t our little bunny," says Lena, "Were you waiting for us?"');
    // TODO-QSP: dynamic text: "Of course she was," answers Lera. "<<$pcs_nickname>> loves it when we play with...
    scene.text(`"Of course she was," answers Lera. "${((st as any).pcs_nickname ?? '')} loves it when we play with her, don't you, ${((st as any).pcs_nickname ?? '')}?"`);
    scene.text('You don\'t have time for this. "Out of my way," you tell them.');
    scene.text('"What\'s the hurry," Lera says while blocking the door.');
    scene.text('"I\'m going to kick Dimka\'s ass, and I\'ll kick your ass to if you don\'t move."');
    scene.text('"Who the hell do you think you\'re talking to?"');
    scene.text('"Actually that sounds like fun," says Lena. "We\'ll join you." And with that all three of you head into the hall.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('The three of you roam the hall looking for Dimka. Most of the girls and some of the boys quickly head into different classrooms just to avoid you. You catch one girl who was too slow and, while you press her against a wall, you make her tell you where Dimka is. "I, I saw him hanging out by the lockers, I swear! Please don\'t hurt me."');
    scene.text('You slap her in the face lightly, eliciting a whimper from her, then leave her there and head to the lockers. You see Dimka flirting with a girl while she checks her locker. You approach him quickly, your hands already curled into fists.');
    scene.actions([
      { label: 'Punch him in the face', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A1', (-20));
    if (((st as any).pcs_stren ?? 0) > 80) {
      ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (10);
      qspCall(st, 'money', 'earn', 10000);
      scene.img('images/characters/pavlovsk/school/boy/dimka/revenge/guyknockedout.jpg');
      scene.text('He hears you walking up and turns to meet you. Before he can say anything you punch him as hard as you can in the face.');
      // TODO-QSP: dynamic text: He falls to the ground, unconscious. Lena and Lera look at you with surprised lo...
      scene.text(`He falls to the ground, unconscious. Lena and Lera look at you with surprised looks on their faces. "Damn, ${((st as any).pcs_nickname ?? '')}! You knocked him out! How are you so strong?"`);
      scene.text('That felt good. Really good. Lena and Lera enjoyed it too. You can see in their faces that they have new respect for you. "Check his pockets," says Lena, "I\'ll keep his watch."');
      // TODO-QSP: dynamic text: You check his pockets and find <<$func(''money'', ''string_profit'', 10000)>> in...
      scene.text(`You check his pockets and find ${qspFunc(s, 'money', 'string_profit', 10000)} in his wallet. Fucking rich kid. This should teach him. "The teacher is coming," says Lera. "Let's get out of here."`);
      scene.actions([
        { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
      ]);
    } else {
      ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (5);
      scene.img('images/characters/pavlovsk/school/boy/dimka/revenge/punch.jpg');
      scene.text('He hears you walking up and turns to meet you. Before he can say anything you punch him as hard as you can in the face.');
      scene.text('"Ow! My fucking nose!" He says while holding his nose, then he looks at you with anger in his eyes. "I\'m going to beat your ass bitch."');
      scene.actions([
        { label: 'Fight', handler: (st: GameState) => {
    qspCall(st, 'fight', 'initFight');
    qspCall(st, 'fight_npcdata', 'dimka');
    qspGoto(st, 'fight', 'start');
  } },
      ]);
    }
  } },
    ]);
  } },
    ]);
  } },
              { label: 'Go to class', handler: (st: GameState) => {
    (st as any).dimaRevChoice = 0;
    scene.text('<center><b>Classroom</b></center>');
    scene.img('images/locations/pavlovsk/school/classroom/engaged.jpg');
    scene.text('Not knowing what else to do right now, you head to class.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
            ]);
          } else {
            (st as any).dimaTrain = 0;
            // TODO-QSP: dynamic text: "I heard that weird girl, <<$pcs_firstname>>, lets boys do what ever they want t...
            scene.text(`"I heard that weird girl, ${((st as any).pcs_firstname ?? '')}, lets boys do what ever they want to her no matter how degrading. She has no self respect."`);
            scene.text('"I heard she gets an abortion every other month because she doesn\'t know how to close her legs."');
            scene.text('You start to cry and desperately cover your ears, wishing for them to stop. After what seems like an hour, you take your hands off your ears.');
            scene.text('Hearing nothing, you gather up your courage and exit the stall. Luckily you\'re all alone. You wipe your tears away and wrack your brain trying to figure out what to do.');
            scene.text('You can\'t let Dimka win. School life is unbearable now, but at least you aren\'t being passed around like a cheap piece of meat. There must be something you can do.');
            scene.actions([
              { label: 'Outcasts unite', handler: (st: GameState) => {
    (st as any).dimaRevChoice = 5;
    scene.text('<center><b>School Hall</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/dimka/revenge/girlnosebroke.jpg');
    scene.text('You\'ve had enough, you gather up the other outcasts in school that you can. Everyone picks on you because they think you are weak and won\'t fight back.');
    scene.text('Maybe they\'re right. But together you and your fellow outcast can stand up. You just need to unite and the other kids will treat you with respect even if you have to make them.');
    scene.text('Or so you think. Apparently, the other outcasts disagree.');
    scene.text('"If we stand up to them they\'ll just beat us up," says Lesco.');
    scene.text('"Yeah, it\'s better not to stand out," says a girl you sit with at lunch sometimes, or so she says. You don\'t remember her.');
    scene.text('"You just want people to stop talking about you, so you try to get us involved in your business because you can\'t close your legs," says a girl you don\'t know.');
    scene.text('"Why don\'t you leave the rest of us alone so we don\'t get picked on for hanging out with a wh-." You lose control. The next thing you know, she is clutching her nose and crying.');
    scene.text('Moments later a teacher is pulling you away by the arm and sending you to the principals office.');
    scene.actions([
      { label: 'Face the music', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big134.jpg');
    // TODO-QSP: dynamic text: Miss. Volkov looks at you. "Hitting girls is not an appropriate behaviour miss <...
    scene.text(`Miss. Volkov looks at you. "Hitting girls is not an appropriate behaviour miss ${((st as any).pcs_lastname ?? '')} it's better you think on what you have done"`);
    (st as any).demerit = ((st as any).demerit ?? 0) + (20);
    scene.actions([
      { label: 'Oh no! It\'s Petia', handler: (st: GameState) => {
    scene.text('<center><b>School Hall</b></center>');
    scene.img('images/characters/shared/headshots_main/big159.jpg');
    scene.text('As you leave the principals office you are thinking what you might be able to do about your situation. You are distracted from your angry thoughts by an awful smell.');
    // TODO-QSP: dynamic text: "Hey there, <<$pcs_nickname>>," he says while looking at your breasts, "You''re ...
    scene.text(`"Hey there, ${((st as any).pcs_nickname ?? '')}," he says while looking at your breasts, "You're looking nice today."`);
    // TODO-QSP: dynamic text: Uggh. He just creeps you out so much. "It''s <<$pcs_firstname>>," you tell him, ...
    scene.text(`Uggh. He just creeps you out so much. "It's ${((st as any).pcs_firstname ?? '')}," you tell him, not even trying to hide the contempt in your voice, "or better yet, don't talk to me at all.`);
    scene.text('I\'m not in the mood to deal with you."');
    scene.text('As you walk off, Petia says, "Yeah, I heard what Dimka has been saying about you. What if you had something that could shut him up?"');
    scene.text('You stop and ask, "What are you talking about?" He pulls out his phone and opens a video and shows it to you.');
    scene.actions([
      { label: 'Watch the video', handler: (st: GameState) => {
    scene.text('<center><b>School Hall</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/dimka/revenge/drugdeal.jpg');
    scene.text('You see the side of the school building. Judging by the angle, it seems to be hidden camera footage. Dimka walks into view and looks around nervously. Soon a shady looking guy in a hoodie shows up.');
    scene.text('The two of them look to be arguing, but you can\'t hear them because the phone is on mute. After a while, they seem to come to an agreement and the shady guy hands over a few baggies full of white powder.');
    scene.text('This must be his dealer. If this gets out it could cause a lot of problems for Dimka.');
    scene.text('"You gotta give me that video," you tell him.');
    scene.text('"I don\'t know," he says with a creepy smile, "You were just rude to me. Why should I help you? What are you willing to do?"');
    scene.text('"What do you want?"');
    scene.text('"Well…" he says looking over your body.');
    scene.text('"Not that," you say, disgusted.');
    scene.text('"I didn\'t say anything yet."');
    scene.text('"I know what you were thinking, and the answer is no fucking way."');
    scene.text('"Fine, then how about you go on a date with me?"');
    scene.text('You think long and hard. You really need that video, but going on a date with Petia just sounds awful, not to mention what others would say if they saw you together. Finally you come to a decision.');
    scene.text('"Okay, one date, but not here. I don\'t want anyone at school to see us together. We\'ll go to the city."');
    scene.text('"It\'s a date then," he says excitedly, "See you at the train station after school." With that, he leaves you alone. You sigh. Tomorrow is going to suck.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
              { label: 'Go to class', handler: (st: GameState) => {
    (st as any).dimaRevChoice = 0;
    scene.text('<center><b>Classroom</b></center>');
    scene.img('images/locations/pavlovsk/school/classroom/engaged.jpg');
    scene.text('Not knowing what else to do right now, you head to class.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
            ]);
          }
        }
      }
    }
    if (((st as any).npc_rel ?? 0)?.['A2'] > 50) {
      scene.actions([
        { label: 'Talk with Artem', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A2', 5);
    (st as any).dimaRevChoice = 6;
    scene.text('<center><b>School Hallway</b></center>');
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You decide to talk to Artem. You have a few minutes left during your break and you really need someone to talk to right now. You talk to Artem about Dimka.');
    scene.text('"It might be my fault," he says with a hint of guilt after listening to you. "Thinking about that video made me so mad so I erased his whole hardrive instead of just releasing a virus and corrupting the video."');
    // TODO-QSP: dynamic text: You are upset to hear this, but you remember how understanding he was when you w...
    scene.text(`You are upset to hear this, but you remember how understanding he was when you went to him for help before and can't be too mad at him now. Before you can say anything, he says, "I'll fix this, ${((st as any).pcs_nickname ?? '')}."`);
    scene.text('He leaves and heads into the hallway. You hope he knows what he\'s doing.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
        { label: 'Go to class', handler: (st: GameState) => {
    (st as any).dimaRevChoice = 0;
    (st as any).dimaRevenge = ((st as any).dimaRevenge ?? 0) + (1);
    scene.text('<center><b>Classroom</b></center>');
    scene.img('images/locations/pavlovsk/school/classroom/engaged.jpg');
    scene.text('Not knowing what else to do right now, you head to class.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } },
    ]);
  }
  if (String((s as any).locArgs?.[0] ?? '') < 4) {
    // TODO-QSP: exit
  }
  if ((!((s as any).dimaRevChoice ?? 0))) {
    if (String((s as any).locArgs?.[0] ?? '') === 4) {
      (s as any).dimaRevenge = ((s as any).dimaRevenge ?? 0) + (1);
      qspCall(s, 'fame', 'pav', 'sex', 60);
      scene.text('<center><b>School Hallway</b></center>');
      scene.img('images/characters/pavlovsk/school/boy/dimka/revenge/behindherback.jpg');
      scene.text('People are still talking about you. You do your best to ignore them. You haven\'t seen Dimka since morning rollcall. You know he must be up to something.');
      scene.actions([
        { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
      ]);
    }
    if (String((s as any).locArgs?.[0] ?? '') === 5) {
      (s as any).dimaRevenge = ((s as any).dimaRevenge ?? 0) + (1);
      qspCall(s, 'fame', 'pav', 'sex', 60);
      qspCall(s, 'fame', 'pav', 'prostitute', 60);
      scene.text('<center><b>School Hall</b></center>');
      scene.img('images/locations/pavlovsk/school/lunch/hall.jpg');
      scene.text('As you start to leave school, you start to hear nasty comments from the students in the hall. They get louder and louder until one boy loudly calls you a slut to your face. Then they start chanting "Slut! Slut! Slut!" as other kids join in.');
      scene.text('Soon the whole hallway is yelling "Slut!" until you run to the girl\'s bathroom with your eyes full of tears.');
      scene.actions([
        { label: 'In the girls room', handler: (st: GameState) => {
    scene.text('<center><b>Girls bathroom</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/dimka/revenge/crying.jpg');
    scene.text('As you hide in the stall, crying hysterically, all you can think about is how your life is over. All the girls are going to give you the cold shoulder. The boys are going to treat you like a whore and make you give them blowjobs alongside Sonia.');
    scene.text('Your mother will disown you. You continue to cry for what seems like a few hours until you run out of tears. Soon the bell rings and kids start heading home. You know the boys will be waiting for you so you wait an hour before daring to leave.');
    scene.text('You wash your face and then head out the door. The first thing you see as you open the door is Dimka\'s sneering face.');
    scene.text('"About time. You know I hate to be kept waiting, whore. Now are you ready for your new life?"');
    scene.actions([
      { label: 'Try to run away', handler: (st: GameState) => {
    scene.text('<center><b>Girls bathroom</b></center>');
    scene.img('images/locations/pavlovsk/community/bathroom/mens/sex/mensrape3.mp4');
    scene.text('You try to push your way past him but to no avail. He forces you back into the restroom and starts ripping your clothes off. Soon the restroom door opens and a few more guys enter. Some you recognize as students but a few of them are too old to be in school.');
    scene.text('After ripping off your clothes, Dimka forces his dick into your mouth and commands you to suck. You try to resist so he keeps slapping you until you have red hand prints all over your face. Finally, when your will to resist is completely gone, you start moving your head up and down his shaft.');
    scene.text('You don\'t want to be here and it shows in your reluctant and unenthusiastic blowjob. Soon he gets bored and forces his cock all the way down your throat, causing you to gag. He pulls his dick back out and pushes you to the ground. He puts you on your hands and knees and lines his cock up with your ass.');
    scene.actions([
      { label: 'Scream', handler: (st: GameState) => {
    scene.text('<center><b>Girls bathroom</b></center>');
    scene.img('images/locations/shared/gloryhole/sex/analpain.jpg');
    scene.text('Dimka forces his cock into your ass as far as it will go, not caring if he damages you. The pain causes you to scream out loud. "Someone shut this bitch up!" One of the guys forces his cock into your mouth while Dimka continues hammering away, intent on causing as much pain as possible.');
    scene.text('Two others put your hands on their members. Dimka picks up his pace, causing you to scream around some guy\'s cock, sending both of them over the edge. Dimka pulls out and his cum drips out of your loosened asshole. He gets cleaned up and heads for the door.');
    scene.text('"You\'re in for a long night, whore. Oh but look. You have a friend." As he leaves a few more guys enter the restroom with Sonia in tow.');
    scene.actions([
      { label: 'It continues', handler: (st: GameState) => {
    scene.text('<center><b>Girls bathroom</b></center>');
    scene.img('images/locations/pavlovsk/community/bathroom/mens/sex/gangbangbath.jpg');
    scene.text('As soon as Dimka leaves a guy flips you over on your back and sticks his cock into your unlubricated vagina causing you to wince from the pain. Another guy shoves his cock down your throat until you almost suffocate.');
    scene.text('They spitroast you like that for a while, then, just as you\'re about to pass out, they finish inside you and pull out. You gasp for air while coughing up semen as two more guys take up position. They continue to use your body for their pleasure for hours. Your mouth, pussy, ass and hands.');
    scene.text('The ones who are left out turn their attention to Sonia or jack off onto your body. Your whole body is defiled over and over.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Girls bathroom</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/dimka/revenge/reidgangbang.jpg');
    scene.text('In the beginning most of the guys were focused on you. As the novelty of an unwilling victim wore off, though, they started moving over to Sonia. She is a lot more enthusiastic than you and seems to genuinely enjoy being treated like an animal.');
    scene.text('You remember she was a nice girl - a good girl - but now she\'ll do anything for any guy, no matter how degrading. Is that what you are going to become? The thought of it causes more tears to fall. You keep crying until you fall asleep.');
    scene.actions([
      { label: 'Wake up', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (60 * (20 - ((st as any).hour ?? 0)) - ((st as any).minut ?? 0));
    scene.text('<center><b>Girls bathroom</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/dimka/revenge/coveredincum.jpg');
    scene.text('You wake in Sonia\'s lap, covered in cum. "They all left but I stayed to make sure you were okay," she answers to your unspoken question. You start to cry again. Sonia holds you in her arms and tries to console you. "It will be okay," she says. "No, it won\'t," you answer as you start to cry harder.');
    scene.text('Sonia holds you tighter and says "It will get easier. And I\'m here if you need someone to talk to or a shoulder to cry on. Now let\'s get you cleaned up and I\'ll walk you home." She helps you up and cleans you off as best as she can.');
    scene.actions([
      { label: 'Walk home with Sonia', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A25', 10);
    scene.text('Sonia walks you home to your apartment. She lets you wear her coat since your clothes are torn. You can barely stand and she pretty much has to carry you the whole way. As you reach your door, she hugs you and tells you it will be okay again. You almost believe her this time. You thank her and head inside.');
    scene.actions([
      { label: 'Continue', goto: ['korrPar', ''] },
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
    }
  }
  if (((s as any).dimaRevChoice ?? 0) === 1) {
    if (String((s as any).locArgs?.[0] ?? '') === 4) {
      (s as any).dimaRevenge = ((s as any).dimaRevenge ?? 0) + (1);
      scene.img('images/characters/pavlovsk/school/boy/dimka/revenge/behindherback.jpg');
      scene.text('As you leave the school you hear some girls talking about Dimka. "I heard Dimka is a coke fiend. He has to do several lines everyday or else he can\'t function."');
      scene.text('"I heard he tries to get girls hooked too so they\'ll keep going out with him." You smile. Things are coming along. As you exit the school, though, you hear something that gives you pause.');
      // TODO-QSP: dynamic text: "I heard <<$pcs_firstname>> gave Lesco a blowjob just because he told her she''s...
      scene.text(`"I heard ${((s as any).pcs_firstname ?? '')} gave Lesco a blowjob just because he told her she's pretty. She is so self conscious that she'll have sex with anyone if they tell her she's pretty." You turn red. None of that is true! Not a bit! So that's how it's going to be. You change your mind and go for Lizaveta.`);
      scene.actions([
        { label: 'Find Lizaveta', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big140.jpg');
    scene.text('You head back into the school building to look for Lizaveta. You see her talking to Dimka, probably about some sort of secret he has about you. He leaves her and walks toward the school entrance you just came through. "Hey pig," he says mockingly.');
    scene.text('"Kill yourself," you reply. You don\'t have the patience to deal with him right now. He laughs as he leaves the school. You talk to Lizaveta about some more secrets you have about Dimka, making sure to be real creative about what you tell her. You also make sure that she knows Dimka is lying about everything he says.');
    scene.text('She listens with great interest. She doesn\'t seem to suspect that most of what you are telling her is an outright lie. When you are satisfied, you head home.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
      ]);
    }
    if (String((s as any).locArgs?.[0] ?? '') === 5) {
      if (String((s as any).locArgs?.[1] ?? '') === 'before') {
        qspCall(s, 'fame', 'pav', 'sex', 60);
        scene.text('You enter the school and walk around listening to the other students. "I heard Dimka sucked some guy off for crack."');
        // TODO-QSP: dynamic text: "I heard <<$pcs_firstname>> gets passed around by everyone in her apartment buil...
        scene.text(`"I heard ${((s as any).pcs_firstname ?? '')} gets passed around by everyone in her apartment building." The rumors only get worse. You head to class.`);
        scene.actions([
          { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
        ]);
      }
      if (String((s as any).locArgs?.[1] ?? '') === 'lunch') {
        (s as any).dimaRevenge = ((s as any).dimaRevenge ?? 0) + (1);
        scene.text('The first thing you do after leaving the cafeteria is look for Lizaveta to have her spread more rumors. You find her talking to Dimka again. He leaves the way you came. "Slut," he calls you.');
        scene.text('"Asshole," you reply. The two of you glare at each other for a while, before he leaves. You head over to Lizaveta. She stops you before you tell her anything.');
        scene.text('"Are all these things you\'ve been saying about Dimka true," she asks you.');
        scene.text('You are surprised. She can\'t really be this naive can she. "Of course, it\'s true," you tell her with a straight face. "I wouldn\'t lie to you." She seems to believe you and listens closely as you tell her more about Dimka.');
        scene.actions([
          { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
        ]);
      }
    }
    if (String((s as any).locArgs?.[0] ?? '') === 6) {
      if (String((s as any).locArgs?.[1] ?? '') === 'before') {
        qspCall(s, 'fame', 'pav', 'sex', (-60));
        ((s as any).grupvalue = (s as any).grupvalue ?? {})[1] = ((s as any).grupvalue[1] ?? 0) - (15);
        qspCall(s, 'npc_relationship', 'modify', 'A140', (-20));
        scene.img('images/characters/pavlovsk/school/boy/dimka/revenge/girlsarguing.jpg');
        scene.text('You listen to the students as you head to your locker. Half of them are talking about you, while the other half are talking about Dimka. You go find see Lizaveta. "Why are you still spreading the lies Dimka told you? I told you they were all lies."');
        scene.text('"Do you both think I am that stupid? I know the real reason you guys are fighting, maybe this will teach you about trying to use me." You are stunned and feeling a bit betrayed. If she knew why would she spread gossip about both of you.');
        scene.text('She notes the look on your face. "If you guys want to destroy each other, it\'s fine by me. I will happily help you do that, but I won\'t be used, by either of you for you petty little games."');
        scene.text('"I don\'t need your help," you tell her angrily. "I\'ll destroy Dimka myself. How hard is it to spread rumors, anyway?"');
        scene.text('"You won\'t do anything," she tells you. "Because I\'ll tell everyone that you and Dimka are full of shit." She storms off. You head to class.');
        scene.actions([
          { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
        ]);
      }
      if (String((s as any).locArgs?.[1] ?? '') === 'lunch') {
        (s as any).dimaRevenge = ((s as any).dimaRevenge ?? 0) + (1);
        scene.img('images/characters/pavlovsk/school/boy/dimka/revenge/boygirlarguing.jpg');
        scene.text('You go around the hallway spreading rumors about Dimka, but everyone looks at you like you are full of it. It seems Lizaveta was true to her word, after all. You see Dimka having the same trouble. It seems you\'ve both lost your credibility. At least your reputation is safe, since no one believes Dimka anymore. You are too stubborn to notice that though and keep trying to spread rumors while Dimka does the same.');
        // TODO-QSP: dynamic text: Soon the two of you get into an argument, which turns into a screaming match. Yo...
        scene.text(`Soon the two of you get into an argument, which turns into a screaming match. You are both screaming at the top of your lungs when the principal comes to break things up. "Miss ${((s as any).pcs_lastname ?? '')}, Mr. Nosov, in my office now!"`);
        scene.actions([
          { label: 'Go to the principal\'s office', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big134.jpg');
    scene.text('You and Dimka sit as Miss. Volkov scolds you. "I don\'t know why you two were arguing about and I don\'t care. I won\'t have it in my school, do you understand?" She gives you both a stern look. "Now I want you to look me in the eye and tell me this won\'t happen again."');
    scene.text('You look her in the eye. "I\'m sorry," you say.');
    scene.text('"Very good," she says. "Dimka?"');
    scene.text('"No way I\'m apologizing," he says rudely.');
    scene.text('"Then it\'s detention for you." She says with a tone of warning');
    scene.text('"I won\'t go." He says with a slight smile like he is above punishment.');
    scene.text('She gets a stormy look on her face. "You will."');
    scene.text('"If you lay a finger on me, I\'ll call my dad and he\'ll sue you and this school into the ground." He seems to think he has won.');
    scene.text('Miss. Volkov is out of patience at this point. "Listen, you little shit," she says angrily, "I will not be talked to that way by some spoiled brat. I know your father better than you, and nothing would piss him off more than a weak son who hides behind his name. You have one chance to get in line or I\'ll be the one calling your father and making him come to school during his work hours to talk about his whiny son."');
    scene.text('"You can\'t talk to me that way," Dimka says nervously, "My father would…"');
    // TODO-QSP: dynamic text: "That''s enough," she cuts Dimka off, "Miss <<$pcs_lastname>>, go to class and t...
    scene.text(`"That's enough," she cuts Dimka off, "Miss ${((st as any).pcs_lastname ?? '')}, go to class and tell your teacher that Mr. Nosov won't be attending for the rest of the day." As you leave the office, you try and listen at the door. But it is thick and you can't hear anything. You hear Mrs. Sokoloff clear her throat as she catches you. She is the teacher manning the office at this time. After that you quickly go to class.`);
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
        ]);
      }
    }
    if (String((s as any).locArgs?.[0] ?? '') === 7) {
      (s as any).dimaRevenge = ((s as any).dimaRevenge ?? 0) + (1);
      scene.text('As you leave school, you see Dimka talking on his cell phone. "Dad, I need to talk to you about the principal."');
      scene.text('"What do you mean she already called you?" You see him look confused for a moment then he goes pale.');
      scene.text('"But she… Yes, sir. But… yes… here? But… yes sir I will wait here." He ends the call and shouts, "Damn it!"');
      scene.text('He sees you watching him and is about to say something, but instead winces in pain and walks away. Whatever the principal did to him must have hurt. You silently thank her while reminding yourself not to get on her bad side.');
      scene.actions([
        { label: 'Continue', goto: ['gschool_grounds', 'main'] },
      ]);
    }
  }
  if (((s as any).dimaRevChoice ?? 0) === 2) {
    if (((s as any).fedorKozlovQW ?? 0) >= 0) {
      ((s as any).dimaRevenge = (s as any).dimaRevenge ?? {})['Fedor Involved'] = ' and Fedor ';
    } else {
      ((s as any).dimaRevenge = (s as any).dimaRevenge ?? {})['Fedor Involved'] = ' ';
    }
    if (((s as any).fedorKozlovQW ?? 0) >= 0) {
      ((s as any).dimaRevenge = (s as any).dimaRevenge ?? {})['Fedor Involved 2'] = 'Fedor';
    } else {
      ((s as any).dimaRevenge = (s as any).dimaRevenge ?? {})['Fedor Involved 2'] = 'Svyatoslav';
    }
    if (String((s as any).locArgs?.[0] ?? '') === 4) {
      if (String((s as any).locArgs?.[1] ?? '') === 'day4jockbefore') {
        qspCall(s, 'fame', 'pav', 'sex', 60);
        scene.text('As you enter the school you hear students talking excitedly. "I heard Lena is a huge slut, but she has to keep it a secret because Vitek beats up any guy who hits on her."');
        scene.text('"I heard that too. I also heard that if you can catch her when she is all alone, she will happily go down on you." Someone is going to get their ass kicked.');
        scene.text('Who would be stupid enough to talk shit about Lena? Your first thought is Dimka, but what would he have to gain? You think about it as you head to class.');
        scene.actions([
          { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
        ]);
      }
      if (String((s as any).locArgs?.[1] ?? '') === 'lunch') {
        (s as any).dimaRevenge = ((s as any).dimaRevenge ?? 0) + (1);
        scene.text('Something is wrong. Rumors about Lena continue to spread, but that isn\'t what worries you. As you walk the halls, you notice the other kids avoiding you. When you approach them, they run away.');
        scene.text('You grab one girl and make her tell you what is going on. "Vitek and Lena are after you," she says.');
        scene.text('"They know you are the one spreading rumors. Please let me go, he\'s coming." True enough, Vitek comes walking around the corner. You let the girl go and duck into an unused classroom.');
        scene.actions([
          { label: 'Hide', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/dimka/revenge/hidingdesk.jpg');
    scene.text('You hide by the door listening for Vitek. You hear footsteps outside which get closer and closer. When you see the doorknob turn, you hide under a teacher\'s desk.');
    scene.text('Vitek enters the room and looks around. After a while the door closes again. You are just about to come out of hiding when you hear the flick of a lighter. You freeze.');
    scene.text('Vitek lights his cigarette and smokes it while sitting on the desk you are hiding under. The smoke makes your eyes water and you struggle not to cough as you hide.');
    scene.text('After a few minutes, Vitek finishes his cigarette and leaves the room. You start coughing and head for the window. That was so close. You stick your head out the window and take a deep breath.');
    scene.text('Afterwards, you continue to hide in the room since you are sure Vitek and Lena are still looking for you. You play on your phone until school lets out.');
    scene.actions([
      { label: 'Slip out with the crowd', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/dimka/revenge/girlgangup.jpg');
    scene.text('You slip out with crowd, grab your stuff from your locker and leave the school building. As you sneak around the back of the school, you see Lena looking around angrily.');
    scene.text('Lera is not far behind. When they spot you watching them, they run towards you. You try to run, but Lera is surpsingly fast, she tackles you from behind before you make it far.');
    scene.text('Soon both of them haul you to your feet, Lera puts her arm around your neck and holds you still for Lena. "You fucking lying bitch! I\'m going to fuck your lying ass up!"');
    scene.text('"I wasn\'t talking about you, I swear," you tell her. She isn\'t listening, though, and brings her arm back to punch you.');
    scene.text('You break out of Lera\'s hold and duck, causing Lena to punch Lera in the face. Great, now they are both pissed. You get ready to defend yourself.');
    (st as any).win = 1;
    if ((!((st as any).win ?? 0))) {
      scene.text('Lera is unconscious on the ground as you hold Lena by the hair. "I didn\'t say shit about you," you tell her.');
      // TODO-QSP: dynamic text: You let go of her and turn to head home, but then you see Vitek walking towards ...
      scene.text(`You let go of her and turn to head home, but then you see Vitek walking towards you. He looks pissed. He must have just seen you beat up his sister. You make to run but are tripped by Lena. You close your eyes, afraid of what he'll do to you, but nothing happens. You open your eyes to see Ivan${((st as any).dimaRevenge ?? 0)?.['Fedor Involved'] ?? ''}holding Vitek back. Vitek is swearing at the top of his lungs. As you get up and dust yourself off, Dan, Vasily, Pauline and Katyusha come to investigate and see Vitek getting ganged up on. Things get crazy after that.`);
    } else {
      if (((st as any).win ?? 0) === 1) {
        // TODO-QSP: dynamic text: The two of them are too strong for you and you get knocked to the ground. They s...
        scene.text(`The two of them are too strong for you and you get knocked to the ground. They start kicking you. You do your best to block their kicks while trying to get up, but they keep knocking you down. You are about to give up when Ivan${((st as any).dimaRevenge ?? 0)?.['Fedor Involved'] ?? ''}show up. Fedor tosses Lera aside and Ivan grabs Lena by the shoulders and tries to calm her down. Suddenly you hear an angry yell, and you see Vitek charging towards Ivan.`);
        scene.text('You get up in time to see Dan, Vasily Pauline and Katyusha arrive, followed by Erast and Lazar. Things get crazy after that, with Roman showing up last.');
        scene.actions([
          { label: 'School brawl', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/dimka/revenge/bigbrawl.jpg');
    // TODO-QSP: dynamic text: Ivan and Vitek trade blows that would knock anyone else out. Roman, crazy little...
    scene.text(`Ivan and Vitek trade blows that would knock anyone else out. Roman, crazy little shit that he is, takes on Erast. Dan and Vasily double up on ${((st as any).dimaRevenge ?? 0)?.['Fedor Involved 2'] ?? ''}, Katyusha decides she wants to fight Lazar who refuses to hit a girl. Katyusha scoffs at him and proceeds to kick his ass anyway. You lose track of Lena and Lera. As you look around you see a security camera looking straight at you. Before you can tell anyone about it, a brick hits you in the back causing a great deal of pain. You turn around and see Pauline. "Fucking bitch," you shout as you run at her. "I'll fucking kill you!"`);
    scene.actions([
      { label: 'Fight', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/dimka/revenge/thepopo.jpg');
    // TODO-QSP: dynamic text: You and Pauline go at for quite a while. Eventually you are both tired and catch...
    scene.text(`You and Pauline go at for quite a while. Eventually you are both tired and catch your breath before having another go. As you try to catch your breath, exhausted, you see how the others are doing. You see Ivan and Vitek still at it, neither one of them running out of energy, though it looks like Ivan's superior skill is starting to become the deciding factor. It seems Dan agree's, after he and Vasily have ${((st as any).dimaRevenge ?? 0)?.['Fedor Involved 2'] ?? ''} down, he jumps in to help Vitek against Ivan, leaving Vasily to kick ${((st as any).dimaRevenge ?? 0)?.['Fedor Involved 2'] ?? ''} while he is down.`);
    scene.text('You see battered and bloody Roman pull out a knife and charge at Erast, who seems to have taken his fair share of blow from Roman. As Roman charges him though, Erast side steps just in time and delivers and powerful blow, that sends Roman sprawling unconscious.');
    // TODO-QSP: dynamic text: Erast looks around and then heads over to help <<$dimaRevenge[''Fedor Involved 2...
    scene.text(`Erast looks around and then heads over to help ${((st as any).dimaRevenge ?? 0)?.['Fedor Involved 2'] ?? ''}. Lazar is trying to block Katyusha's attacks but his refusal to hit her back means she is beating him down. He goes down and once he does, it is all over. Just then you catch sight of Lena and Lera walking towards you. Apparently they were waiting for you to tire yourself out. Lera grabs you and hold you for Lena, but before she can do anything, you hear the sounds of sirens. Several officers show up and arrest everyone.`);
    scene.actions([
      { label: 'In custody', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/dimka/revenge/jailcell.jpg');
    scene.text('How did it come to this? The reason you went to Ivan for help was to avoid something like this. If you had known this was going to happen, you would have kicked Dimka\'s ass yourself. You sit in holding trying to avoid the glares of Vitek and Lena.');
    scene.text('You feel a little safer with Ivan sitting next to you, but what happens if he leaves before you? "You are going to pay for talking shit about me," Lena tells you. "You can\'t avoid me."');
    scene.text('"Why don\'t you just give it a rest already," Katyusha says. "She obviously wasn\'t talking about you."');
    scene.text('"How the hell do you know?"');
    // TODO-QSP: dynamic text: "Because I''m not a fucking idiot. Dimka spread those rumors because <<$pcs_firs...
    scene.text(`"Because I'm not a fucking idiot. Dimka spread those rumors because ${((st as any).pcs_firstname ?? '')} here had him beat up for spreading shit about her." You sink in your seat. She is very perceptive.`);
    scene.text('"Then why the fuck didn\'t you say anything," Viteks says.');
    scene.text('"Because I really wanted to fight someone," Katyusha replies. "But I got stuck fighting this punching bag here." She points to Lazar who remains silent. Everyone is silent.');
    scene.text('Then Vitek speaks up. "So Dimka tried to use me and my sister to do his dirty work. He is going to fucking get it tomorrow. As for you, Ivan, we\'ll settle it in the ring next time." Ivan nods in response. Soon everyone is talking about what they\'ll do to Dimka when they see him in school.');
    scene.text('After a few hours, they start letting people out.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
        ]);
      }
    }
  } },
    ]);
  } },
        ]);
      }
    }
    if (String((s as any).locArgs?.[0] ?? '') === 5) {
      if (String((s as any).locArgs?.[1] ?? '') === 'day5jockbefore') {
        (s as any).dimaRevenge = ((s as any).dimaRevenge ?? 0) + (1);
        qspCall(s, 'fame', 'pav', 'sex', (-60));
        scene.img('images/characters/pavlovsk/school/boy/dimka/revenge/bulliedinhall.jpg');
        scene.text('You enter the school building and head to your locker. You listen to the other students for any new gossip. Predictably they are all talking about the fight yesterday. At least one good thing came out of that. You can see Dimka down the hall at his locker. Every jock and gopnik who passes him shoves him into the lockers as they pass.');
        scene.text('Dimka is in for a rough day.');
        scene.actions([
          { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
        ]);
      }
      if (String((s as any).locArgs?.[1] ?? '') === 'day5jockafter') {
        (s as any).dimaRevenge = ((s as any).dimaRevenge ?? 0) + (1);
        scene.text('As you get ready to leave, you see Dimka walking down the hall. His face is bruised and he tries to avoid being seen.');
        scene.text('His eyes meet yours and you see anger and fear. He hates you more than ever, but he knows he won\'t be able to get the gopniks to attack you again. He has to accept that you won.');
        scene.actions([
          { label: 'Continue', goto: ['gschool_grounds', 'main'] },
        ]);
      }
    }
  }
  if (((s as any).dimaRevChoice ?? 0) === 3) {
    if (String((s as any).locArgs?.[0] ?? '') === 4) {
      (s as any).dimaRevenge = ((s as any).dimaRevenge ?? 0) + (1);
      qspCall(s, 'fame', 'pav', 'sex', 60);
      qspCall(s, 'npc_relationship', 'modify', 'A152', 10);
      scene.text('<center><b>Cafeteria</b></center>');
      scene.img('images/characters/shared/headshots_main/big142.jpg');
      scene.text('You sit down at a table and eat your lunch, looking over your shoulder occasionally. Zinaida sits down next to you. "You did a good job," she says.');
      scene.text('"Thanks," you say. "What did you have me do, anyway?"');
      scene.text('"Don\'t worry. You\'re safe."');
      scene.text('"Safe from what?" Before you can get an answer she gets up and leaves. What a weird chick. Soon Feofan comes over and sits across from you.');
      // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>. I don''t know how you did it but Zin agreed to go on a d...
      scene.text(`"Hey ${((s as any).pcs_nickname ?? '')}. I don't know how you did it but Zin agreed to go on a date with me."`);
      scene.text('"That\'s great," you say. "Where did you take her."');
      scene.text('"I took her to a barbecue place in the city. The owner has a soft spot for me and gives me a discount. I think she has a thing for me."');
      scene.text('"Yeah, I\'m sure she does." Not wanting to waste anymore time, you lean closer and tell him, "Now about my problem. I need dirt on Dimka. Video would be best, but at this point I could use anything."');
      scene.text('"Is this about the rumors he\'s been spreading about you? I understand. I\'ll get to work as soon as I get home. Meet me tomorrow in the hallway before class."');
      scene.actions([
        { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
      ]);
    }
    if (String((s as any).locArgs?.[0] ?? '') === 5) {
      qspCall(s, 'fame', 'pav', 'sex', (-100));
      (s as any).dimaRevenge = ((s as any).dimaRevenge ?? 0) + (1);
      scene.text('<center><b>School Hallway</b></center>');
      scene.img('images/characters/pavlovsk/school/boy/dimka/revenge/linesofcoke.jpg');
      scene.text('You wait for Feofan by his locker. You hear kids snicker about you as they walk by. Soon Feofan arrives with a wide grin on his face. "I hacked his webcam," he says and holds his phone in front of you with a video playing. In the video Dimka is snorting line after line of coke. More than he did when you were with him. Watching him, it is obvious how much of an addict he really is. Then someone knocks on his door and a male voice says, "Dimka I need to talk with you," which causes Dimka to panic and rush to hide his stash.');
      scene.text('"The male voice has to be his dad," reasons Feofan, "and he doesn\'t know about his sons habit."');
      scene.text('"I can use that to my advantage," you tell him, "He\'ll do whatever I say so his father doesn\'t see this. Thanks Feofan. Send the video to my phone and keep a copy for yourself just in case. I\'m off to see Dimka."');
      scene.actions([
        { label: 'Confront Dimka', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A1', (-20));
    scene.text('<center><b>School Hall</b></center>');
    scene.img('images/locations/pavlovsk/school/lunch/hall.jpg');
    scene.text('You find Dimka talking to some other kids. You hesitate at first, but soon steel yourself for what you have to do. "Hey Dimka. I want to talk to you," you tell him.');
    scene.text('"Yeah, well I don\'t want to talk to you so why don\'t you go suck off the nerds or something pig." This causes the guys around him to start laugh. Your blood boils and you just want to hit him, but you bury that feeling. Instead you calmly raise your phone and play the video on mute.');
    scene.text('He recognizes it immediately and nervously ushers you into an empty classroom.');
    scene.text('"How did you get this?" he asks, part mad, part afraid.');
    scene.text('"You don\'t need to know that," you say, trying your best to sound strong. "All you need to know is that I\'m not the only one who has it. Now if you don\'t want this video to get out, you\'ll get everyone to stop talking about me."');
    scene.text('"Why should I do that? My dad owns the cops. They won\'t do shit. If you give them that video, it will just disappear, and you and your family will pay for it." He thinks he\'s being so clever right now. Like you didn\'t think about that.');
    scene.text('"I wasn\'t planning to take it to the police," you tell him. "I was going to send it to everyone: all the students, their parents, teachers, any and everyone. Before long the whole town will know your dad has a junkie for a son. It wouldn\'t ruin his career, sure, but it would embarrass him a great deal to have a junkie for a son and be something his enemies could use against him. Once that happens just how do you think he is going to feel about his darling little boy? Just what do you think he will do to you when he learns you are not only a junkie but stupid enough to get caught? I bet he will be none to pleased with you. I imagine he would make a big deal out of getting you help and getting you off the drugs, whether you like it or not."');
    scene.text('He\'s visibly distraught now and you go in for the kill.');
    scene.text('You whisper in his ear, "How long do you think you can last without your precious coke? One day? Two? I bet you won\'t last a week before you\'re begging for a hit. Maybe you\'ll go even further and suck a guy off for it."');
    scene.text('"Shut your god damn mouth, you bitch!" You must have really touched a nerve there.');
    scene.text('"So that\'s how it is then. Okay I\'m off to show the video around. Bye."');
    scene.text('"No wait! I\'m sorry. I\'ll stop everyone from talking. I swear. Jst don\'t show that to anyone."');
    scene.text('"That\'s more like it. You have until the end of the day to get results, or else you know what will happen. Don\'t you? I don\'t want to see you in class until you get it done." He nods and heads into the hall. You breathe a sigh of relief. You were seriously scared there, but it was also exciting seeing him so scared himself. You think about following him around to make sure he keeps his word, but that would mean skipping class. You know he won\'t cross you as long as you have dirt on him. You head to class.');
    scene.actions([
      { label: 'Go to class', handler: (st: GameState) => {
    // TODO-QSP: gs 'gschool_lessons', 'morning' & school_period = 1
    scene.text('<center><b>Classroom</b></center>');
    scene.img('images/locations/pavlovsk/school/classroom/engaged.jpg');
    scene.text('You sit in class listening to the lesson. Looking around you see Dimka isn\'t here. Good. He must be doing what he promised. Or he\'s up to something. You hear some chatter from the other students, but none of it seems to be about you.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>School Hall</b></center>');
    scene.img('images/locations/pavlovsk/school/lunch/hall.jpg');
    scene.text('The student chatter continues until a girl you don\'t know walks through the hallway. All the girls go quiet and turn away from her while the boys make dirty comments behind her back while laughing among themselves. Instantly, it occurs to you: this is Dimka\'s doing. You feel a combination of guilt and anger. So this is how he makes it right. By ruining some other poor girl\'s life. You are angry at Dimka and want to punish him, but he did keep his promise, even if someone else was made to suffer. You force your feelings down and head to class, hoping the girl will be alright.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
  }
  if (((s as any).dimaRevChoice ?? 0) === 4) {
    if (String((s as any).locArgs?.[0] ?? '') === 4) {
      (s as any).dimaRevenge = ((s as any).dimaRevenge ?? 0) + (1);
      scene.img('images/characters/pavlovsk/school/boy/dimka/revenge/behindherback.jpg');
      // TODO-QSP: dynamic text: As you head to your locker you hear kids talking about you behind your back. "I ...
      scene.text(`As you head to your locker you hear kids talking about you behind your back. "I heard ${((s as any).pcs_firstname ?? '')} plays bitch to Lena and Lera."`);
      scene.text('"I heard they pimp her out to boys behind the old school building." Your blood boils. It seems Dimka hasn\'t learned his lesson. He will, though, no matter how many times it takes.');
      scene.actions([
        { label: 'Continue', goto: ['gschool_grounds', 'main'] },
      ]);
    }
    if (String((s as any).locArgs?.[0] ?? '') === 5) {
      if (String((s as any).locArgs?.[1] ?? '') === 'before') {
        (s as any).dimaRevenge = ((s as any).dimaRevenge ?? 0) + (1);
        qspCall(s, 'fame', 'pav', 'sex', 60);
        // TODO-QSP: dynamic text: You wait at the entrance to the school for Dimka to arrive, but he never shows u...
        scene.text(`You wait at the entrance to the school for Dimka to arrive, but he never shows up. Thinking he used a side entrance you head to the classroom to search for him. Looking into the classroom, you don't see any sign of him. You jump when a voice behind you says, "What are you looking for, ${((s as any).pcs_nickname ?? '')}?" You turn around and see Lavrenti grinning.`);
        scene.text('"Fuck! Don\'t sneak up on me like that," you say as you give him a hard punch in the shoulder.');
        scene.text('"I couldn\'t resist. What are you looking for anyway?"');
        scene.text('"None of your Business. Now get lost." He heads to the restroom to skip class. He gets halfway there before it occurs to you. If anyone knows where Dimka is hiding, it\'s Lavrenti. Not to mention, no one hates Dimka more than him.');
        scene.text('"Lavrenti, wait!" He turns to face you.');
        scene.text('"I need to kick Dimka\'s ass. Want to help?" He thinks for a moment before answering.');
        scene.text('"What do I get for helping you?"');
        scene.text('"I\'m sure I can think of something," you answer as you glide a finger across his chest. "After you help me that is. So what will it be."');
        scene.text('"Okay let\'s do it. Follow me."');
        scene.actions([
          { label: 'Follow Lavrenti', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big155.jpg');
    scene.text('You follow Lavrenti to an unused room. "Me and Dimka used to hang out here. We stole the key and made a couple of copies before returning it."');
    scene.text('He pulls out a key and slips it into the lock. You get ready as he unlocks the door. When he opens it, you run inside to confront Dimka, but the room is empty. "Shit," you say, "He isn\'t here."');
    scene.text('"No he isn\'t, but he was here recently," he says as he points to some white powder on a desk. He must come to this room to get his fix. You look around the room and find a locked box under the desk.');
    scene.text('"Can you get this open," you ask Lavrenti.');
    scene.text('"Maybe, give to me." You hand him the box and he pulls out a lockpick. After a few minutes, the lock pops open and he opens the box to reveal a few baggies of cocaine.');
    scene.text('"Oh is he going to lose it when he sees his stash is gone," laughs Lavrenti. "I have an idea." He finds a piece of paper and a pen in the desk and writes a note.');
    scene.text('If you want your coke back. Meet me in the boy\'s locker during lunch. Come alone');
    scene.text('"That should do it," he says as he tapes the note under the desk. "Lets go and wait for him." The two of you head for the locker rooms.');
    scene.actions([
      { label: 'Wait for Dimka to arrive', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A1', (-20));
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (5);
    scene.img('images/locations/pavlovsk/school/gym/locker/lockerroom.jpg');
    scene.text('You wait in the men\'s locker room for Dimka. You pass the time until lunch talking to Lavrenti about what you are going to Dimka when he gets here. After a few more minutes, you hear footsteps and both of you hide in a corner. Dimka walks in. Seeing no one, he walks further into the room. You take that moment to strike.');
    (st as any).win = 1;
    if ((!((st as any).win ?? 0))) {
      scene.text('You punch Dimka one more time, knocking him out. You look at his unconscious face and say, "You think that hurt, wait until you see what happens next. Lavrenti help me bring him to the showers."');
    } else {
      if (((st as any).win ?? 0) === 1) {
        scene.text('Dimka places his arms around your neck and squeezes causing you to wheeze in pain. Lavrenti wraps his arm around Dimka\'s neck and starts choking him out, but while he\'s doing that, Dimka still has a hold on your windpipe. Dimka passes out first and releases his grip.');
        scene.text('"Thanks Lavrenti," you gasp, "Give me a minute." After a few minutes, you catch your breath. You check yourself in a nearby mirror. You have bruises on your neck.');
        scene.text('"He\'s going to pay for this. Let\'s take him to the showers."');
        scene.actions([
          { label: 'In the shower room', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A155', 5);
    qspCall(st, 'money', 'earn', 10000);
    scene.text('Lavrenti puts Dimka on the tile floor and restrains him. You start the shower and spray cold water on Dimka\'s face. He wakes up angry and starts shouting obscenities at you until Lavrenti hits him in the head.');
    scene.text('"I want you to see something, Dimka," you say as you pull out his stash of coke you took.');
    scene.text('"Give that back," he says.');
    scene.text('"No way am I doing that. Now watch."');
    // TODO-QSP: dynamic text: You take out a baggie of coke and cut it open, then dump it on the floor. You do...
    scene.text(`You take out a baggie of coke and cut it open, then dump it on the floor. You do the same with the other baggies. Dimka's face has an expression of pure terror. You aim the shower at the pile of coke on the ground and let it wash down the drain as Dimka screams insults at you and Lavrenti. He screams insult after insult at the two of you as you laugh your asses off. After a while in sounds less like swearing and more like rabid howling. Finally you get sick of his screaming and grab him by the hair, then slam his face into the ground. As he lays there unconscious, you check his pocket. ${qspFunc(s, 'money', 'string_profit', 10000)}.`);
    scene.text('"Fucking rich kid," you say then you look at Lavrenti, "No offense."');
    scene.text('"None taken," he replies. "We should get out of here, though."');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
        ]);
      }
    }
  } },
    ]);
  } },
        ]);
      }
      if (String((s as any).locArgs?.[1] ?? '') === 'after') {
        (s as any).dimaRevenge = ((s as any).dimaRevenge ?? 0) + (1);
        (s as any).dimaDisco = 0;
        scene.text('The two of you head home since you already skipped most of your classes today. Lavrenti flirts with you along the way. The bell rings just as you get to the front entrance, and you decide to wait for some of your friends.');
        scene.text('As you do, you hear some guys talking.');
        // TODO-QSP: dynamic text: "I heard <<$pcs_firstname>> gave Lavrenti a blowjob in the boy''s locker room."
        scene.text(`"I heard ${((s as any).pcs_firstname ?? '')} gave Lavrenti a blowjob in the boy's locker room."`);
        scene.text('"I heard she was doing it for a fix. Some one saw them leaving the locker room together and when they went inside, they saw white powder disolving in the drain.');
        scene.text('She\'s a crack head. Maybe if you offer her some, she\'ll suck your dick t-"');
        scene.text('He didn\'t see your fist coming. He falls to the ground as the other boy runs away. Straight into Lavrenti who knocks him down and gets him into an arm hold.');
        scene.text('"Where did you hear that," Lavrenti asks as he bends the boy\'s arm.');
        scene.text('"Lizaveta," he screams. "But she heard it from Dimka! Please let me go."');
        scene.text('Lavrenti lets him go. He looks at you and says, "No matter how many times you beat Dimka up, it won\'t be enough. You need to humiliate him for everyone to see."');
        scene.text('Then he heads home. You think about what he says, and a plan forms in your head. You just need a girl to use as bait and someone to watch your back. You also need a place with lots of people. The disco is the perfect place for that. You resolve to head there tonight.');
        scene.actions([
          { label: 'Continue', goto: ['gschool_grounds', 'main'] },
        ]);
      }
      if (String((s as any).locArgs?.[1] ?? '') === 'disco') {
        qspCall(s, 'npc_relationship', 'modify', 'A1', (-50));
        ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).grupvalue[4] ?? 0) + (5);
        (s as any).dimaDisco = 1;
        (s as any).dimaRevengedaystart = ((s as any).daystart ?? 0) + 6;
        scene.text('It isn\'t hard to find Dimka as he is often surrounded by girls clamoring for his attention. He\'s wearing the bruises you gave him as battle scars, and the girls are fawning all over him, calling him brave.');
        scene.text('If only they knew how he practically cried when his drugs washed down the drain. You need to lure him out somehow. And someone to back you up and block Dimka\'s escape when he inevitably tries to run.');
        scene.actions([
          { label: 'Find help', handler: (st: GameState) => {
    scene.text('You head to where some of the gopniks are drinking. One of them hands you a beer and you drink it while chatting for a bit. You ask some of the girls for help luring Dimka out, but most of them are too drunk to understand you.');
    scene.text('Anushka and Alyona seem to be at least somewhat sober, though. You ask them for help.');
    scene.text('"Sure, I can help out," says Anushka. "I\'m sure Alyona will help too. For a favor."');
    scene.text('The look at each other and smile mischievously. The look worries you a little. Anushka is pretty wild and her idea of fun can get pretty far out there. Whatever the favor is, you\'re sure it will be interesting and likely fun.');
    scene.text('"It\'s a deal," you lean in and say. "Okay, Anushka, I need you to lure Dimka to the girl\'s restroom where I will be waiting. Alyona will follow after and block him if he tries to run. Then we bash his face in."');
    scene.actions([
      { label: 'Lay the trap', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A143', 5);
    qspCall(st, 'npc_relationship', 'modify', 'A144', 5);
    scene.text('You and Alyona watch as Anushka puts the moves on Dimka. After a bit of flirting, she whispers something in his ear, then grabs him by the hand and heads to the restroom. No one can resist her charms, when she wants to use them. You head to the restroom as Alyona hides in the crowd. When you get to the restroom, you hide in a stall. You hear the door open.');
    scene.text('"Just a little further. In this stall." They stop in front the stall you\'re waiting in and open the door.');
    scene.actions([
      { label: 'Spring the trap', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/dimka/revenge/girlbeatsguy2.jpg');
    scene.text('"What\'s up asshole," you say as you punch Dimka in the face. He runs for the exit right away. Straight into Alyona\'s fist which knocks him to the ground.');
    scene.text('"Fucking slut set me up," he yells just before Anushka kicks him repeatedly in the side.');
    scene.text('"Who the fuck are you calling a slut?!" Anushka says as she bends over and punches Dimka in the face a few times, followed by several more kicks to his ribs. Dimka curls up on the floor in pain as the three of you continue to rain blows down on him until he stops moving.');
    // TODO-QSP: dynamic text: Alyona checks to make sure he''s breathing and, more importantly, to see what''s...
    scene.text(`Alyona checks to make sure he's breathing and, more importantly, to see what's in his pockets. ${qspFunc(s, 'money', 'string_profit', 10000)} again! Does he go home and beg his parents for more money every time he gets robbed?`);
    scene.text('"Fucking rich kid," you hear Alyona say under her breath. "How many bottles of Zhiguljovskoje can we buy with this do you think?"');
    scene.text('"Lets find out," you say. "But first I have an idea. Help me lift him."');
    scene.text('The three of you pick him up and put him in a stall and sit him on the toilet. Then you pull all his clothes off, leaving him completely naked in one of the stalls in the girls restroom. You take a few pictures.');
    scene.actions([
      { label: 'Back to the dance', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/dimka/revenge/thepopo.jpg');
    scene.text('You, Anushka, and Alyona head back to the dance and have a few beers, tossing his clothes in the trash. After a few minutes, you hear a scream coming from the restroom. One of the girls must have found Dimka. She runs out screaming pervert. A few minutes later you hear sirens as the cops arrive. Everyone heads towards them to see who they are arresting. The cops drag a naked Dimka out of the restroom as several kids take pictures with their phones. Then they put him in the back of a police car and drive off. People will be talking about this for a while. For the first time, you can\'t wait for school tomorrow.');
    scene.actions([
      { label: 'Continue', goto: ['pav_disco', ''] },
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
    if (String((s as any).locArgs?.[0] ?? '') === 6) {
      if (((s as any).dimaDisco ?? 0) === 1) {
        (s as any).dimaRevenge = ((s as any).dimaRevenge ?? 0) + (1);
        qspCall(s, 'fame', 'pav', 'sex', (-40));
        scene.img('images/characters/shared/headshots_main/big144.jpg');
        scene.text('The first thing you hear when you enter the school is how Dimka was caught jacking off in the girls restroom at the disco.');
        scene.text('Only three people know the truth, but they aren\'t going to tell anyone. You feel someone tap your shoulder and you turn around to see Anushka. "Forty," she says.');
        scene.text('"Uhh, Forty what?"');
        // TODO-QSP: dynamic text: "Bottles of Zhiguljovskoje. <<$func(''money'', ''string_profit'', 10000)>> buys ...
        scene.text(`"Bottles of Zhiguljovskoje. ${qspFunc(s, 'money', 'string_profit', 10000)} buys forty bottles of Zhiguljovskoje! We're having a little party in the old building. Get your ass there."`);
        scene.text('She\'s in a good mood, today. You wanted to listen to gossip, but getting drunk sounds like way more fun. You head up there.');
        scene.actions([
          { label: 'Party!', handler: (st: GameState) => {
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (2);
    scene.img('images/characters/pavlovsk/school/boy/dimka/revenge/cheers.jpg');
    scene.text('You head to the old school building, with Anushka. Inside is the old music room, built to be soundproof. It is the perfect place to avoid being heard, even if most of the windows are now just boarded up. You knock on the door, so the people inside can quiet down, before heading in. Lavrenti hands you a beer as you enter. The party is in full swing and everyone is drinking and swearing. Anushka goes to join Radomir and his band. As soon as she joins them, they start one of their songs. Vitek, Dan and Vasily are in a corner laughing and Pauline is drinking a bottle of vodka while talking to Lena and Lera.');
    scene.text('Alyona is sitting by twenty bottles of Zhiguljovskoje, guarding them from anyone who tries to take one. You can\'t believe she bought all that just for herself, the other half of them seem to have been handed out. As you think that, Alyona sees you staring at her and offers you a bottle which you gladly accept.');
    scene.text('"Aww, Alyona has a girlfriend," Vasily snickers. He is already drunk. You know that when Vasily is wasted he usually ends up unconscious either from passing out or from his mouth getting him into trouble. Radomir\'s band finishes their song and grab some beers. Anushka comes over to you and Alyona. Alyona offers her a bottle as well. Anushka accepts it from her with one hand and grabs Alyona\'s head with the other and brings her into a deep kiss, causing the boys in the room to cheer. Alyona is unable to resist her and melts into her arms. Anushka eyes you while she kisses Alyona as if inviting you to join.');
    if (((st as any).pcs_hotcat ?? 0) >= 6) {
      scene.actions([
        { label: 'Join in', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A143', 5);
    qspCall(st, 'npc_relationship', 'modify', 'A144', 5);
    scene.img('images/characters/pavlovsk/school/boy/dimka/revenge/threegirlskiss.jpg');
    scene.text('You can\'t resist her either, and the three of you make out enthusiastically. Anushka breaks the kiss and pulls you and Alyona towards the door and out into the hallway and into an empty room.');
    scene.text('She undresses right away. You strip next and the two of you help Alyona with her clothes. The three of you makeout some more and grope each other\'s bodies, moaning with passion on the old mattress covered in a blanket.');
    scene.text('Alyona cums first and rolls over to catch her breath. You and Anushka continue to pleasure each other. Soon Alyona joins in again, switching between Anushka\'s and your pussies, giving them the full attention of her tongue.');
    scene.text('The kinkiness of the situation and Anushka finger banging you as Alyona eats her out, carries you to an orgasm as waves of pleasure wash over you. Alyona is still between Anushka\'s legs, trying to bring her to orgasm.');
    scene.text('Emboldened by the atmosphere of sex in the room, you grab Alyona\'s face and give her the best kiss you can muster. You lock lips for a minute before pulling away and showing her how to perform real cunnilingus.');
    scene.text('You work your tongue along Anushka\'s pussy lips and clit, bringing her close to orgasm, but you hold back each time, just before she cums. You repeat this until she begs you to make her cum. You comply and Anushka screams as she orgasms.');
    scene.text('The three of you lie on the ground together and cuddle before passing out.');
    scene.actions([
      { label: 'Wake up', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/rekshome/party/party_iralena_6_7.jpg');
    scene.text('As you wake up, you see a partially dressed Anushka sitting on the window sill smoking a cigarette. Alyona is still sleeping like a baby. "She looks so content," Anushaka says in a somewhat sad tone, which makes you wonder just how rough Alyona\'s life is, "and so adorable when she\'s like this. Are you going home?"');
    scene.text('"Yeah," you say as you get dressed. "I\'ll see you later."');
    scene.text('You give her a kiss, then finish getting dressed and head home. You check your phone on the way and see that school is just getting out. On your way out, you spot Dimka hitting on a girl. She pushes him away and runs off, not even giving him the time of day. He looks at you with eyes full of anger, but he looks down when you glare back. It looks like you broke his spirit a bit. You smile as you leave the school grounds.');
    scene.actions([
      { label: 'Continue', goto: ['pav_residential', ''] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Just watch', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/oldschool/gophangout/party/party.jpg');
    scene.text('You watch the two of them make out and then they drift into another room to be alone. You rejoin the party, talking with others and drinking. You spend the whole day there, even passing out for a while, only to wake up to several others also passed out. Seems like the party finally ran out of steam. You get up and look around a bit, stretching before heading out. You check your phone on the way and see that school is just getting out. On your way out, you spot Dimka hitting on a girl. She pushes him away and runs off, not even giving him the time of day. He looks at you with eyes full of anger, but he looks down when you glare back. It looks like you broke his spirit a bit. You smile as you leave the school grounds.');
    scene.actions([
      { label: 'Continue', goto: ['pav_residential', ''] },
    ]);
  } },
      ]);
    }
  } },
        ]);
      } else {
        (s as any).dimaRevenge = ((s as any).dimaRevenge ?? 0) - (3);
        qspCall(s, 'fame', 'pav', 'sex', 40);
        qspCall(s, 'fame', 'pav', 'prostitute', 40);
        (s as any).dimaRevChoice = 0;
        scene.text('<center><b>Outside School</b></center>');
        if (((s as any).month ?? 0) > 2  &&  ((s as any).month ?? 0) < 9) {
          scene.img('images/locations/pavlovsk/school/building/gschool.jpg');
        } else {
          scene.img('images/locations/pavlovsk/school/building/schoolwinter.jpg');
        }
        scene.text('Pavlovsk\'s only school, all the local children go here for their education. Next to the school is the athletic field, a parking lot for the teachers, just beyond the parking lot is a grove of trees, and past that is the old school building. After the new school was built the old one was supposed to get renovated and used for advance classes but budget cuts meant the project was canceled and now the old school building stands empty. Though many of the kids use it to skip class or as a place to sneak off to drink or have sex.');
        scene.text('It seems Dimka didn\'t finished to spread dirt about you, maybe you have to talk to your group again, hopefully it\'s not too late…');
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
        ]);
      }
    }
  }
  if (((s as any).dimaRevChoice ?? 0) === 5) {
    if (String((s as any).locArgs?.[0] ?? '') === 4) {
      (s as any).dimaRevenge = ((s as any).dimaRevenge ?? 0) + (1);
      qspCall(s, 'fame', 'pav', 'sex', 60);
      qspCall(s, 'npc_relationship', 'modify', 'A159', 10);
      (s as any).dimaTrain = 1;
      scene.img('images/locations/shared/train/pavplat.jpg');
      scene.text('You enter the train station and see Petia waiting by the ticket office. He waves you over, and the two of you wait in line for tickets. "I\'m afraid I don\'t have any money on me at the moment," he says, "so you\'ll have to pay for everything."');
      scene.text('Fucking cheapskate. He probably has money. He just doesn\'t want to pay for anyone but himself even though he\'s the one who wanted this stupid date.');
      scene.text('"Let\'s just go," you say as you pay for two tickets to the city. Then the two of you head to the train and find seats.');
      scene.actions([
        { label: 'Head to the city', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 45;
    scene.img('images/locations/shared/train/ride2.jpg');
    scene.text('You sit on the train listening to Petia\'s terrible pickup lines. You do your best to ignore him and play with your phone.');
    scene.text('He is wearing the same outfit as usual but now his hair is combed back in an attempt to look nice. He is absolutely covered in cologne as if he just decided to use a whole bottle of the stuff rather than take a bath.');
    scene.text('When he opens his mouth, you see that he brushed his teeth, but you smell that he ate something rank before meeting up with you. He makes inappropriate remarks about your body every chance he can get and keeps brushing against you on "accident."');
    scene.text('He is offensive to four of your five senses, and you don\'t want to find out about the fifth one. You feel uncomfortable and wish for the train to go faster so you don\'t have to sit so close to this guy. Soon you arrive at in the city center, and, after leaving the station, head to Diner Bystroeshka.');
    scene.actions([
      { label: 'Go inside the diner', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    scene.img('images/characters/pavlovsk/school/boy/dimka/revenge/baddate.jpg');
    scene.text('You enter and pay for your meals, then find a table. You sit and eat your food while trying to avoid looking at Petia, who chews with his mouth open. He keeps complimenting you on your body, and you are finding it difficult not to ditch him.');
    scene.text('You just keep reminding yourself why you are doing this. After an excruciating twenty minutes, you leave and head for central park.');
    scene.actions([
      { label: 'Walk in the park', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    scene.img('images/characters/pavlovsk/school/boy/dimka/revenge/rejectedkiss.jpg');
    scene.text('The two of you walk for a while until he decides to try to kiss you. You immediately push him away. "I\'m not kissing you," you tell him.');
    scene.text('"Why not?" he says, oblivious to how disgusting he actually is.');
    scene.text('"Because you make me want to vomit."');
    scene.text('"Come on. It\'s not like you haven\'t tasted more disgusting thing. Am I right?"');
    scene.text('"What the hell is that supposed to mean?!"');
    scene.text('"Every rumor has a bit of truth, and with the rumors about you, I\'m sure you\'ve sucked off plenty of guys, so you should be glad that I would even want to kiss you." You turn red with embarrassment, then rage. You kick Petia in the balls as hard as you can.');
    scene.actions([
      { label: 'Look for the video', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/boy/dimka/revenge/greatpain.jpg');
    scene.text('He doubles over in pain as you kick him in the balls again and again. When he goes to cover them, you kick him in the head.');
    scene.text('All your bottled up feelings come pouring out as you continue to kick Petia: the anger for Dimka, the helplessness from being picked on, the loneliness from being an outcast. After a while you regain control and tell him to give you his phone.');
    scene.text('Not wanting to be kicked again, he hands it over then goes back to lying on the ground. You find several videos on his phone. One of them is Labeled "Dimka Drug Deal." You open up the video and play it with sound.');
    scene.actions([
      { label: 'Play video', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    scene.img('images/characters/pavlovsk/school/boy/dimka/revenge/drugdeal.jpg');
    scene.text('You fast forward the video a bit to get to the conversation between Dimka and his dealer. "I\'m taking a big risk bringing this to a school. You should come to me my place in the city."');
    scene.text('"I can\'t. My dad is getting suspicious."');
    // TODO-QSP: dynamic text: "Fine, but from now on it''s <<$func(''money'', ''string_profit'', 4000)>>. Non ...
    scene.text(`"Fine, but from now on it's ${qspFunc(s, 'money', 'string_profit', 4000)}. Non negotiable."`);
    scene.text('"That\'s double the normal price! My dad will notice if I keep taking that much from him."');
    scene.text('"Then find another way to get money or find another way to get your fix, I don\'t care."');
    scene.text('"Fine here! Now hand it over." So he doesn\'t want his father to find out. You can use that. You send the video to your phone.');
    scene.text('"You have what you came for so you can hand me my phone now," Petia says while still curled up on the ground.');
    scene.text('"Not so fast," you say.');
    scene.actions([
      { label: 'Check the other videos', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'npc_relationship', 'modify', 'A159', (-20));
    scene.img('images/characters/pavlovsk/school/boy/dimka/revenge/checkphone.jpg');
    scene.text('You wonder how he got this video in the first place and about the other videos. You check them and find several with names of girls you know. Then you see one with your name. You open it and find a video with clips of you in the locker room and shower.');
    // TODO-QSP: dynamic text: "You fucking pig!!" you scream as you punch and kick Petia until he can''t take ...
    scene.text(`"You fucking pig!!" you scream as you punch and kick Petia until he can't take anymore and passes out. You check his pockets and find a wallet with ${qspFunc(s, 'money', 'string_profit', 1000)}.`);
    scene.text('You pocket the money and throw his phone and wallet into a nearby pond, then head to the train station and finally home. You don\'t know how Petia is going to get back, and you don\'t care. Today was an ordeal and you just want to rest.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 45;
  }, goto: ['pav_market', ''] },
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
    }
    if (String((s as any).locArgs?.[0] ?? '') === 5) {
      if (((s as any).dimaTrain ?? 0) !== 1) {
        (s as any).dimaRevChoice = 0;
        qspCall(s, 'fame', 'pav', 'sex', 40);
        qspCall(s, 'fame', 'pav', 'prostitute', 40);
        scene.text('<center><b>Outside School</b></center>');
        if (((s as any).month ?? 0) > 2  &&  ((s as any).month ?? 0) < 9) {
          scene.img('images/locations/pavlovsk/school/building/gschool.jpg');
        } else {
          scene.img('images/locations/pavlovsk/school/building/schoolwinter.jpg');
        }
        scene.text('Pavlovsk\'s only school, all the local children go here for their education. Next to the school is the athletic field, a parking lot for the teachers, just beyond the parking lot is a grove of trees, and past that is the old school building. After the new school was built the old one was supposed to get renovated and used for advance classes but budget cuts meant the project was canceled and now the old school building stands empty. Though many of the kids use it to skip class or as a place to sneak off to drink or have sex.');
        scene.text('It seems Dimka didn\'t finished to spread dirt about you, maybe you have to talk to your group again, hopefully it\'s not too late…');
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
        ]);
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 'before') {
          qspCall(s, 'fame', 'pav', 'sex', (-80));
          qspCall(s, 'npc_relationship', 'modify', 'A1', (-20));
          scene.img('images/characters/shared/headshots_main/big1.jpg');
          scene.text('The first thing you do when you enter the school is look for Dimka. You find him by his locker, checking his phone. Years of pent up anger gives you courage and you confront him. "Hey, asshole," you say to get his attention.');
          scene.text('"Watch what you say, pig," he says, "before I do something awful to that slutty mouth of yours."');
          scene.text('"No you watch what you say. I\'m not taking your shit. Now watch this." You show him the video. His eyes widen in fear.');
          scene.text('"How did you get this video?"');
          scene.text('"It doesn\'t matter. What matters is what you\'ve been saying about me and how you are going to make it stop. If you don\'t, I\'ll show this video to everyone!"');
          scene.text('"You don\'t have the guts."');
          scene.text('"You want to bet?" The two of you stare each other down. After a while you pull out your phone and call a number.');
          scene.text('"Hey, whats up? I\'m sending you a video. Make sure you send it to everyone you kno-"');
          scene.text('"Okay fine! You win. I\'ll stop the rumors."');
          scene.text('"That\'s right, you will. I\'ll make sure of it." Dimka leaves you alone and you breathe a sigh of relief. That was tense, but also exhilarating. You especially loved seeing the fear in his eyes. You take a minute to calm down, then head to class.');
          scene.actions([
            { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
          ]);
        }
        if (String((s as any).locArgs?.[1] ?? '') === 'afterlunch') {
          ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).grupvalue[4] ?? 0) + (5);
          (s as any).dimaRevenge = ((s as any).dimaRevenge ?? 0) + (1);
          scene.text('<center><b>School Hallway</b></center>');
          scene.img('images/locations/pavlovsk/school/lunch/hall.jpg');
          scene.text('As you wander the halls after lunch, you are stopped by a pretty girl you don\'t know.');
          scene.text('"You think you are so clever, don\'t you? Picking on Dimka like that."');
          scene.text('It\'s one of Dimka\'s admirers. One who hasn\'t seen his true colors yet.');
          scene.text('"I know you have dirt on him. Give it to me now! I won\'t let you ruin his reputation. You\'re just jealous of him because he\'s popular and you are a loser who has to suck guys off for attention. You\'re just a wh-"');
          scene.text('Without thinking you shove her against a locker, placing your forearm against her throat. You apply pressure, causing her to wheeze. She looks at you with tears in her eyes. She wasn\'t expecting this. No one was, but they should have.');
          scene.text('After all the shit you had to take from everyone, you were bound to reach a boiling point sooner or later. She chose the wrong time to mess with you. Looking at her, you see fear and…');
          scene.actions([
            { label: 'This isn\'t you', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/dimka/revenge/guiltygirl.jpg');
    scene.text('You feel like a monster, getting off on someone\'s pain. You let her go. She looks at you with fear, then runs away. You don\'t think she will mess with you again. You almost lost yourself today, and you feel so bad about it. You head to class.');
    scene.actions([
      { label: 'End', handler: (st: GameState) => {
    scene.text('<center><b>School Hallway</b></center>');
    scene.img('images/locations/pavlovsk/school/lunch/hall.jpg');
    scene.text('As you walk through the halls leaving school, things seem to be back to normal. No one is talking about you anymore, and you are back to being mostly unnoticed and occasionally picked on.');
    scene.text('You still feel bad about almost choking that girl, and about punching that other girl, but not about Petia. He had it coming. Now that you think about it, where is Petia? He didn\'t come to school today. Oh well, you\'re sure he\'s fine.');
    scene.text('And if he isn\'t. Fuck him. That is one kid who deserves to be picked on.');
    scene.actions([
      { label: 'Leave school', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
    ]);
  } },
            { label: 'No more', handler: (st: GameState) => {
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[4] = ((st as any).grupvalue[4] ?? 0) + (10);
    scene.img('images/characters/pavlovsk/school/boy/dimka/revenge/chokegirl.jpg');
    scene.text('You\'ve been picked on for the last time. You put your hands on her throat and continue choking her. She tries to pry your finger off, but you are running on hysterical strength now. As she passes out, the principal grabs you and throw you off her.');
    scene.text('She calls for a nurse then drags you to her office.');
    scene.actions([
      { label: 'In trouble', handler: (st: GameState) => {
    (st as any).demerit = ((st as any).demerit ?? 0) + (40);
    scene.img('images/characters/shared/headshots_main/big134.jpg');
    // TODO-QSP: dynamic text: Miss. Volkov looks at you. "I don''t know what''s on your mind miss <<$pcs_lastn...
    scene.text(`Miss. Volkov looks at you. "I don't know what's on your mind miss ${((st as any).pcs_lastname ?? '')} but what have you done will have serious consequences… now go"`);
    scene.actions([
      { label: 'Back to class', handler: (st: GameState) => {
    (st as any).dimaRevenge = ((st as any).dimaRevenge ?? 0) + (1);
    (st as any).minut = ((st as any).minut ?? 0) + (60 * 2);
    (st as any).hour = 14;
    (st as any).minut = 0;
    scene.text('You sit in class. You noticed a lot of the students talking about what happened in the hall. They fall silent when you look at them. Some of the students are afraid of you now. And you are fine with that, as long as they leave you alone.');
    scene.text('And the ones who don\'t better watch out, because you aren\'t gonna let them pick on you anymore.');
    scene.actions([
      { label: 'Continue', goto: ['gschool_grounds', 'main'] },
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
  }
  if (((s as any).dimaRevChoice ?? 0) === 6) {
    if (String((s as any).locArgs?.[0] ?? '') === 4) {
      (s as any).dimaRevenge = ((s as any).dimaRevenge ?? 0) + (1);
      qspCall(s, 'fame', 'pav', 'sex', 60);
      scene.text('<center><b>School Hallway</b></center>');
      scene.img(`images/locations/pavlovsk/school/building/gschool_hall0${(Math.floor(Math.random() * 3) + 0)}.jpg`);
      // TODO-QSP: dynamic text: You see Artem in the hall talking with Ivan. When you greet him he says "Don''t ...
      scene.text(`You see Artem in the hall talking with Ivan. When you greet him he says "Don't worry, ${((s as any).pcs_nickname ?? '')}. I have a plan. I can't talk about it now, though." Saying that he rushes off. What is he up to?`);
      scene.actions([
        { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
      ]);
    }
    if (String((s as any).locArgs?.[0] ?? '') === 5) {
      (s as any).dimaRevenge = ((s as any).dimaRevenge ?? 0) + (1);
      qspCall(s, 'fame', 'pav', 'sex', (-100));
      scene.text('<center><b>Girls bathroom</b></center>');
      scene.img('images/locations/pavlovsk/school/bathroom/girlsbathroom.jpg');
      scene.text('As you exit the cafeteria, you start to hear nasty comments from the students in the hall. They get louder and louder until one boy loudly calls you a slut to your face. Then they start chanting "Slut! Slut! Slut!" as other kids join in. Soon the whole hallway is yelling "Slut!" until you run to the girl\'s bathroom with your eyes full of tears.');
      scene.actions([
        { label: 'In the girls room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.text('<center><b>Girls bathroom</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/dimka/revenge/crying.jpg');
    scene.text('As you hide in the stall, crying hysterically, all you can think about is how your life is over. All the girls are going to give you the cold shoulder. The boys are going to treat you like a whore and make you give them blowjobs alongside Sonia. Your mother will disown you. Your despair is interrupted by a banging on the restroom door.');
    // TODO-QSP: dynamic text: "Come out, <<$pcs_nickname>>. You can''t stay in there forever." It''s Dimka, th...
    scene.text(`"Come out, ${((st as any).pcs_nickname ?? '')}. You can't stay in there forever." It's Dimka, that fucking asshole.`);
    scene.text('"Your public is waiting for you, slut. Come out and show us what a good cocksuc- Ow! Fuck! Get the hell off me Artem!"');
    scene.actions([
      { label: 'peek your head out', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.text('<center><b>School Hallway</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/dimka/revenge/fightinginhall.jpg');
    scene.text('You peek your head out and see Artem on top of Dimka, punching him in the face over and over with no sign of stopping. Igor is behind Artem, about to pull him off, but is knocked aside by Ivan. This rather one sided fight goes on until a teacher hears the commotion and comes to investigate. Ivan pulls Artem off of Dimka before the teacher can see what\'s happening.');
    scene.actions([
      { label: 'Act innocent', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.text('<center><b>School Hallway</b></center>');
    scene.img('images/locations/pavlovsk/school/lunch/hall.jpg');
    scene.text('You get an idea and head out of the restroom, straighten up Artem\'s uniform as quick as you can, and readjust his glasses. When Mr. Ivanov arrives, everyone has either left or is acting like they just got here.');
    scene.text('"What\'s going on here," he asks, looking at Dimka while trying his best to hide a smile. Dimka hesitates for a second, but then breaks one of the unspoken rules and points at Artem and says, "It was him."');
    scene.text('"Is this true, Mr. Chebotarev?"');
    scene.text('"I didn\'t do anything Mr Ivanov." Artem says calmly.');
    scene.text('"He\'s lying!" Dimka yells in protest.');
    scene.text('"That\'s enough Mr. Nosov. Do you really expect me to believe an honor roll student did this to you. I\'m giving you a demerit for lying. Now go see the nurse."');
    scene.text('Dimka looks at him in disbelief then at you and Artem. Finally he leaves in a huff and heads for the nurse\'s office.');
    scene.actions([
      { label: 'Go to class', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    qspCall(st, 'stat', '');
    scene.text('<center><b>Classroom</b></center>');
    scene.img('images/locations/pavlovsk/school/classroom/bored.jpg');
    scene.text('You sit in the classroom going over what just happened. You smile as you think about the beating Dimka just received. You also think how fortunate you are that it was Mr. Ivanov who came to investigate. The way Artem could lie to his face like that makes you wonder. It seems like everyone has stopped talking about you. Well, at least about your slutiness. Tired of being in your own head, you listen to the conversations in the classroom.');
    scene.text('"Did you see the fight between Dimka and Artem?"');
    scene.text('"Yeah, if you can call it that. Dimka got his ass kicked. What a weakling. And he\'s a snitch."');
    // TODO-QSP: dynamic text: "I can''t believe Dimka said all those awful things about <<$pcs_firstname>> jus...
    scene.text(`"I can't believe Dimka said all those awful things about ${((st as any).pcs_firstname ?? '')} just because she broke up with him. What a creep. I can't believe everyone bought his lies."`);
    // TODO-QSP: dynamic text: "I know, right. Their is something seriously wrong with that guy. Why else would...
    scene.text(`"I know, right. Their is something seriously wrong with that guy. Why else would ${((st as any).pcs_firstname ?? '')} leave the most popular boy in school for a geek like Artem."`);
    scene.text('"Well, he is kinda cute."');
    scene.text('Hmm. So that\'s what they\'re talking about. You wonder if this was Artem\'s plan all along.');
    scene.actions([
      { label: 'Sit with Artem', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    qspCall(st, 'npc_relationship', 'modify', 'A25', 5);
    qspCall(st, 'stat', '');
    scene.text('<center><b>Classroom</b></center>');
    scene.img('images/locations/pavlovsk/school/classroom/talkboy3.jpg');
    scene.text('It doesn\'t look like the teacher is coming back. Most of the students decide to leave early except the nerds, outcasts and a few of the jocks who have to stay for team practice. Soon the seat next to Artem opens up and you decide to take it. Artem gives you a shy smile as you take a seat. You decide that now would be a good time to thank him and ask how he sold that story.');
    scene.text('"It was easy, really. I tutor a few of the jocks and they agreed to spread the word that you dumped Dimka for me. It was the only solution I could think of."');
    scene.text('Artem scratches the back of his head and continues, "I guess word didn\'t spread fast enough though, and when I heard everyone in the hall badmouthing you I guess I lost control. I\'ve never been in a fight before."');
    scene.text('You can\'t help but think there\'s more to it to that. You decide that he\'s entitled to a little deviousness and decide not to go into it.');
    scene.text('"I really appreciate you standing up for me," you tell him as you give him a kiss on the cheek. Soon after the bell rings. As the students leave the classroom you suggest that Artem should walk you home.');
    scene.actions([
      { label: 'Walk home with Artem', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'npc_relationship', 'modify', 'A25', 10);
    qspCall(st, 'stat', '');
    scene.text('<center><b>After School</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/dimka/revenge/walkinghometogether.jpg');
    scene.text('As you leave the school with Artem, you hear the other students talking about the two of you. Mostly talking about what a lucky bastard Artem is and how cute the two of you look together. When you reach your apartment you check to see if your parents are home and when you see that they aren\'t, you invite Artem into your room. You tell him to undress and relax and let you take care of him. Artem undresses and sits on your bed and eagerly waits for what you have planned. You find your sexiest outfit and put it on in the bathroom then return to him.');
    scene.actions([
      { label: 'Do a strip tease', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'striptease', 15);
    qspCall(st, 'stat', '');
    if (((st as any).pcs_dancero ?? 0) > 40) {
      scene.text('<center><b>Home</b></center>');
      scene.img('images/characters/pavlovsk/school/boy/dimka/revenge/striptease1.mp4');
      scene.text('You decide to give him a show as you sway your hips back and forth making sure to give him a good view of yor backside like you know he likes. His member stands at attention in no time at all. He can\'t resist your ass. As you get into it you shed your outer clothes and continue to gyrate your hips to his enjoyment. You remove your bra in a quick graceful move and take off your panties and flick them at his face. When he picks them off his face you are already on the bed in front of him giving him the best view yet.');
    } else {
      scene.img('images/characters/pavlovsk/school/boy/dimka/revenge/stripfail.mp4');
      scene.text('You decide to give him a show. You really should have practiced first. You fell down a couple time and had to get his help to unclasp your bra, and when you tried a complicated move you tripped on your sisters bed. Laughing, you get up and get on the bed in front of him.');
    }
    scene.actions([
      { label: 'Foot worship', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay', 10);
    qspCall(st, 'stat', '');
    scene.text('" Don\'t think I haven\'t seen you staring at my feet. Do you find them sexy?" you ask him seductively.');
    scene.text('"Yes, I love them," he replies while looking at them.');
    scene.text('"Show me how much you love them," you say commandingly as you wave your foot in his face. He immediately starts massaging it with a lustful look on his face. After a while he starts sucking on your toes. You don\'t know if it\'s the foot treatment or the control you have over him, but you really enjoy it and you start to get wet.');
    scene.actions([
      { label: 'Ride him', handler: (st: GameState) => {
    qspCall(st, 'npcStat', 'A25');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'vaginal', 25, 'no_orgasm_msg');
    qspCall(st, 'arousal', 'end');
    scene.text('<center><b>Home</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/dimka/revenge/reversecowgirl.mp4');
    scene.text('It\'s time for the main event. You pull your foot away from him and start to lower yourself over his cock. You get lower and lower until your vulva is kissing the tip of his dick. "You want me, don\'t you?" you ask him in your sexiest voice.');
    // TODO-QSP: dynamic text: "Yes, please, <<$pcs_nickname>>. I can''t take it anymore. I need you." You can'...
    scene.text(`"Yes, please, ${((st as any).pcs_nickname ?? '')}. I can't take it anymore. I need you." You can't take it anymore either and you let your pussy engulf his penis and start riding him with reckless abandon. Apparently you were closer than him, because it isn't long before you orgasm, screaming at the top of your lungs. As you come down from your orgasmic high, you lean forward and give Artem a long, passionate kiss on the lips. You pull yourself off him, turn around and plunge back down to ride him in reverse cowgirl. You roll your hips and milk his cock urging him to let his cum out. You ride him like this for a few minute until you have another orgasm.`);
    scene.text('Your eyes roll back as you ride out the sensation, unaware of the rest of the world. You\'re in heaven. When you come back to earth you see that Artem came on your ass.');
    scene.text('"That was amazing!" You blush at that statement. Then, seeing the clock, you rush him out of your apartment before your parents get home. Before he leaves, you pull him into another long kiss and watch as he makes his way to the stairs. As you reenter your apartment, you think to yourself wistfully, "That was amazing."');
    scene.actions([
      { label: 'Continue', goto: ['korrPar', ''] },
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
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'dimaRevenge_event_check':
      enterDimaRevengeEventCheck(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const dimaRevenge: LocationDef = {
  name: 'dimaRevenge',
  title: 'Classroom',
  region: 'other',
  enter: enter,
};
