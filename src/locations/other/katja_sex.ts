import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterPark(s: GameState, scene: SceneBuilder): void {
  if (((s as any).month ?? 0)===3  ||  ((s as any).month ?? 0)===4  ||  ((s as any).month ?? 0)===5) {
    if (((s as any).hour ?? 0)>=6  &&  ((s as any).hour ?? 0)<=17) {
      scene.img('images/locations/pavlovsk/lake/skver.spring.jpg');
      scene.text('After months of winter, spring is finally here. Flowers begin to bloom, new leaves grow on the trees and puddles of melted snow litter the ground.');
      scene.text('Most people walk around the puddles or jump over them, but a few just walk straight through them as people around you enjoy the atmosphere.');
      scene.text('Couples stroll hand and hand along the many paths, others sit on benches and take in the view and children run through the trees.');
    } else {
      scene.img('images/locations/pavlovsk/lake/skver.spring.night.jpg');
      scene.text('With the arrival of spring, people have started visiting the park again. As the sun sets, the bitter cold of the night settles in and drives people out of the park to warmer locations, leaving you to wander the park alone.');
    }
  }
  if (((s as any).month ?? 0)===6  ||  ((s as any).month ?? 0)===7  ||  ((s as any).month ?? 0)===8) {
    if (((s as any).hour ?? 0)>=6  &&  ((s as any).hour ?? 0)<=19) {
      scene.img('images/locations/pavlovsk/park/skver.jpg');
      scene.text('Many people come to the park during the day to rest or take a walk. It\'s also a place for couples to have romantic strolls and for children to play.');
    } else {
      scene.img('images/locations/pavlovsk/lake/skver.summer.night.jpg');
      scene.text('The park is almost always empty at night, leaving you alone to enjoy the near silence of it all.');
    }
  }
  if (((s as any).month ?? 0)===9  ||  ((s as any).month ?? 0)===10  ||  ((s as any).month ?? 0)===11) {
    if (((s as any).hour ?? 0)>=6  &&  ((s as any).hour ?? 0)<=18) {
      scene.img('images/locations/pavlovsk/lake/skver.autumn.jpg');
      scene.text('With the coming of fall, the leaves start turning red, orange or brown as they fall off the trees, leaving a crisp covering on the ground. Many people still visit the park to jog, go for a walk or to just sit and enjoy the beauty of their surroundings.');
    } else {
      scene.img('images/locations/pavlovsk/lake/skver.autumn.night.jpg');
      scene.text('As night falls and the air cools, most people seek out warmer locations, leaving you to enjoy the park with no interruptions.');
    }
  }
  if (((s as any).month ?? 0)===1  ||  ((s as any).month ?? 0)===2  ||  ((s as any).month ?? 0)===12) {
    if (((s as any).hour ?? 0)>=7  &&  ((s as any).hour ?? 0)<=16) {
      scene.img('images/locations/pavlovsk/lake/skver.winter.jpg');
      scene.text('With a blanket of snow covering the ground, the park has become a playground for children and adults alike to build snowmen, go sledding and have snowball fights. Others just enjoy the beauty of the winter wonderland that the park has become.');
    } else {
      scene.img('images/locations/pavlovsk/lake/skver.winter.night.jpg');
      scene.text('The bitter cold at night drives all but the bravest of people indoors.');
    }
  }
  if (((s as any).flag_KissEV ?? 0) === 3) {
    scene.text('You and Katja arrive at the park hand in hand and she looks to you. "Ready?"');
    scene.text('You nod your head, ready to play your little game. "How do we know who wins?" she asks.');
    scene.text('"Whoever kisses the most boys wins of course," you reply with a smile.');
    scene.text('She shakes her head. "No, I mean how do we prove how many we\'ve kissed?"');
    scene.text('You nod in understanding and lean over and give her a kiss while taking a picture with your phone. You show it to her and she smiles and nods before the two of you run off in opposite directions to find boys to kiss.');
    scene.actions([
      { label: 'Look for a guy', handler: (st: GameState) => {
    if (((s as any).month ?? 0)===1  ||  ((s as any).month ?? 0)===2  ||  ((s as any).month ?? 0)===12  ||  ((s as any).month ?? 0)===11) {
      scene.img('images/characters/pavlovsk/school/girl/katja/parc_ev_1_2.jpg');
    } else {
      scene.img('images/characters/pavlovsk/school/girl/katja/parc_ev_1_1.jpg');
    }
    scene.text('Running around the park looking for a boy to kiss, you spy one and start heading over, but Katja makes it to him first. They talk for a few minutes before kissing.');
    scene.actions([
      { label: 'Look for a guy', handler: (st: GameState) => {
    if (((s as any).month ?? 0)===1  ||  ((s as any).month ?? 0)===2  ||  ((s as any).month ?? 0)===12  ||  ((s as any).month ?? 0)===11) {
      scene.img('images/characters/pavlovsk/school/girl/katja/parc_ev_1_4.jpg');
    } else {
      scene.img('images/characters/pavlovsk/school/girl/katja/parc_ev_1_3.jpg');
    }
    scene.text('Running deeper into the park, you come across a boy by himself. You run up to him and blurt out an awkward "Hello."');
    scene.text('The boy, a little startled by your actions, cautiously replies. "Hey? Can I help you with something?"');
    scene.text('"My friend and I have a bet on who can kiss the most guys. Can I kiss you and take a picture? Please?"');
    scene.text('He hesitates before looking you over and nodding. You plant a very passionate kiss on his lips as you take a picture with your phone before leaving the startled boy in your wake as you run off to find more prey.');
    scene.actions([
      { label: 'Looking for another', handler: (st: GameState) => {
    if (((s as any).month ?? 0)===1  ||  ((s as any).month ?? 0)===2  ||  ((s as any).month ?? 0)===12  ||  ((s as any).month ?? 0)===11) {
      scene.img('images/characters/pavlovsk/school/girl/katja/parc_ev_1_6.jpg');
      scene.text('You run up to a buff looking guy, the kind of guy that Katja likes. "Hi! Would you like a kiss?"');
      scene.text('The guy looks at you confused for a second before looking you over and smiling. "Just a kiss?"');
      scene.text('You nod, but before you have a chance to respond, he pushes you down into the snow and lands on top of you, holding you with one arm while his other breaks your fall. He holds you tight and starts kissing you passionately. It takes several minutes for you to get free of him.');
    } else {
      scene.img('images/characters/pavlovsk/school/girl/katja/parc_ev_1_5.jpg');
      scene.text('Running up to a buff looking guy, you think. Katja likes guys like this. "Hi would you like a kiss?"');
      scene.text('The guy looks at you confused for a moment and then looks you over and smiles. "Just a kiss?"');
      scene.text('You nod, but before you have a chance to respond, he pulls you into a tight embrace and starts passionately kissing you. It takes several minutes for you to get free of him.');
    }
    scene.actions([
      { label: 'Running out of time', handler: (st: GameState) => {
    (s as any).flag_KissEV = 4;
    if (((s as any).month ?? 0)===1  ||  ((s as any).month ?? 0)===2  ||  ((s as any).month ?? 0)===12  ||  ((s as any).month ?? 0)===11) {
      scene.img('images/characters/pavlovsk/school/girl/katja/tel_zima.jpg');
    } else {
      scene.img('images/characters/pavlovsk/school/girl/katja/tel_leto.jpg');
    }
    scene.text('As you look for another boy, you run across Katja waiting for you with her phone in her hand. Knowing your time is up, you walk over to her and trade phones. Taking a look at her phone, you see she has five pictures and sigh in defeat as Katja lets out a giggle and holds up your phone. "Only two?" she asks in a teasing tone.');
    scene.text('"It\'s not fair! One of the guys held me as he kissed me and wouldn\'t let me go!" you protest.');
    scene.text('She shakes her head, telling you that she doesn\'t care about any excuses. "You lose! I got five and you only got two!" she says with a smug smile.');
    scene.text('"Fine you win, but I want a rematch tomorrow!" you reply and she nods in agreement.');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).flag_KissEV ?? 0) === 4) {
      scene.text('Back in the park again, Katja looks over at you. "Who do you think will win today?" Her tone clearly indicates her belief that the results won\'t be any different today than they were yesterday.');
      scene.text('"Well, let\'s find out," you reply with a determined smile before you both race off to find boys to kiss.');
      scene.actions([
        { label: 'Look for a guy', handler: (st: GameState) => {
    if (((s as any).month ?? 0)===1  ||  ((s as any).month ?? 0)===2  ||  ((s as any).month ?? 0)===12  ||  ((s as any).month ?? 0)===11) {
      scene.img('images/locations/pavlovsk/park/skver7_1.jpg');
    } else {
      scene.img('images/locations/pavlovsk/park/skver6_1.jpg');
    }
    scene.text('You find a guy by himself and run up to him. "Hi. Would you like a kiss?"');
    scene.text('Before you even finish, he\'s shaking his head at you. "Sorry, but some cute redhead already asked me and said if I turned you down, then we could hang out." Seething at Katja\'s underhanded tactic, you turn to run off in search of another boy.');
    scene.text('"Hey, wait!" he shouts and you turn to look at him, hoping he\'s changed his mind. "Show me your tits and I\'ll kiss you," he says while leering at you. You\'re about to tell him off for his suggestion when you remember that you really don\'t want to lose to Katja again. Is it worth it?');
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    if (((s as any).month ?? 0)===1  ||  ((s as any).month ?? 0)===2  ||  ((s as any).month ?? 0)===12  ||  ((s as any).month ?? 0)===11) {
      scene.img('images/characters/pavlovsk/school/girl/katja/parc_ev_2_1.jpg');
    } else {
      scene.img('images/characters/pavlovsk/school/girl/katja/parc_ev_2_2.jpg');
    }
    scene.text('Thinking anything is worth beating Katja so you don\'t have to see her smug smile again, you quickly pull up your shirt and show him your bare tits. His eyes grow wide and he reaches out to grab them. "Nice tits!"');
    scene.text('You step away and pull your shirt back down. "No touching, that wasn\'t the deal. I showed you my tits, now where\'s my kiss?" He quickly kisses you as you take a photo. He starts to say something to you, but you\'re already running off looking for another guy.');
    scene.actions([
      { label: 'Another guy', handler: (st: GameState) => {
    if (((s as any).month ?? 0)===1  ||  ((s as any).month ?? 0)===2  ||  ((s as any).month ?? 0)===12  ||  ((s as any).month ?? 0)===11) {
      scene.img('images/locations/pavlovsk/park/skver7_1.jpg');
    } else {
      scene.img('images/locations/pavlovsk/park/skver6_1.jpg');
    }
    scene.text('Running up to another guy, you hurriedly blurt out a greeting. "I want to see your tits."');
    scene.text('He looks at you confused and you blush as you realize what you said. "No, I mean do you want to see my tits? No! I mean do you want to kiss me?" What\'s wrong with you? A look of confusion passes on the guy\'s face and he starts nodding. "Sure, I\'ll kiss you if you show me your tits." You roll your eyes but have no one to blame but yourself this time.');
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    scene.text('You quickly pull up your shirt and show him your breasts before pulling it down just as fast. A huge grin appears on his face and he kisses you as you take a picture.');
  } },
    ]);
  } },
    ]);
  } },
      { label: 'No', handler: (st: GameState) => {
    scene.text('You shake your head at his request and the guy, obviously frustrated, walks away as you run off in search of another guy.');
  } },
    ]);
  } },
      ]);
    }
  }
  scene.build();
}

function enterProhorovSex(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/katja/tease.jpg');
  scene.text('You hug Katja and slip your arm around her to hold her close as you walk down the corridor, the other students staring as you pass by. As you head into a deserted hallway, you notice Ivan following you and turn to look at him while smiling seductively at Katja. "Want to give him a show?"');
  scene.actions([
    { label: 'Kiss', handler: (st: GameState) => {
    (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (5);
    scene.img('images/characters/pavlovsk/school/girl/katja/kissing.jpg');
    scene.text('You pull Katja close and you begin to kiss each other, your tongues exploring each other\'s mouths as your hands roam over each other\'s bodies. You completely ignore Ivan.');
    qspCall(s, 'arousal', 'kiss', (-1), 'lesbian');
    qspCall(s, 'stat', '');
    if (((s as any).katjaQW ?? 0)?.['horny'] >= 50  &&  ((s as any).katjaQW ?? 0)?.['slut'] >= 50) {
      scene.actions([
        { label: 'Kissing and more', handler: (st: GameState) => {
    (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (5);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/morekissing.jpg');
    scene.text('You pull Katja close and you begin to kiss each other, your tongues exploring each other\'s mouths as your hands roam over each other\'s bodies. You completely ignore Ivan and start kissing her neck as you unbutton her top, exposing her naked breasts and kissing your way down to her breasts before you begin licking and sucking on her nipple.');
    qspCall(s, 'arousal', 'kiss', (-2), 'lesbian');
    qspCall(s, 'arousal', 'foreplay_give', (-2), 'lesbian');
    qspCall(s, 'stat', '');
    if (((s as any).katjaQW ?? 0)?.['horny'] >= 60  &&  ((s as any).katjaQW ?? 0)?.['slut'] >= 60) {
      scene.actions([
        { label: 'It\'s getting hot', handler: (st: GameState) => {
    (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (5);
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/school/nipplesuck.jpg');
    scene.text('Katja begins to unbutton your shirt and pulls it off you, forcing you to break contact with her breasts. Once your shirt is off, Katja immediately starts to kiss, lick and suck on your nipples and you bite your lower lip as you moan in pleasure. Ivan continues to watch as he rubs the large bulge in his pants.');
    qspCall(s, 'arousal', 'foreplay', (-1), 'lesbian');
    qspCall(s, 'stat', '');
    if (((s as any).katjaQW ?? 0)?.['horny'] >= 70) {
      scene.actions([
        { label: 'Return to kissing', handler: (st: GameState) => {
    (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (5);
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/school/nakedkissing.jpg');
    scene.text('You pull her face up to yours and the two of you start kissing again. While your hands caress each other\'s breasts, Katja hooks one of her legs around yours and you become intertwined. You\'re so distracted that you don\'t even notice the heavy breathing coming from Ivan as he continues to watch.');
    qspCall(s, 'arousal', 'kiss', (-1), 'lesbian');
    qspCall(s, 'stat', '');
    if (((s as any).katjaQW ?? 0)?.['horny'] >= 80) {
      scene.actions([
        { label: 'Lift skirt', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/inthemoment.jpg');
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.text('You moan into each other\'s mouths as she lifts your skirt and pulls your panties down. You feel your panties slide down around your ankles, both of you completely unconcerned that someone might come by at any moment and find you making out half naked in front of Ivan.');
    } else {
      scene.text('You moan into each other\'s mouths as she lifts your skirt, both of you completely unconcerned that someone might come by at any moment and find you making out half naked in front of Ivan.');
    }
    scene.text('After a few seconds, you feel another hand join Katja\'s on your ass, a strong hand with strong fingers. You feel one of the fingers sliding down to rub your asshole.');
    qspCall(s, 'arousal', 'anal_finger', 2);
    qspCall(s, 'stat', '');
    if (((s as any).katjaQW ?? 0)?.['anal_quest'] < 2) {
      (s as any).will_cost = 0;
    } else {
      qspCall(s, 'willpower', 'sex', 'resist', 'hard');
    }
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Tell Ivan to just watch [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Tell Ivan to just watch  [+iif(katjaQW[\'anal_quest\'] < 2, \', $func...]', handler: (st: GameState) => {
    if (((s as any).katjaQW ?? 0)?.['anal_quest'] >= 2) {
      qspCall(s, 'willpower', 'pay', 'self');
    }
    qspCall(s, 'stat', '');
    scene.img('images/pc/reactions/glare.jpg');
    scene.text('You push Ivan\'s hands away and turn your head to give him a dirty look. "Hey! Just watch!" You notice his crestfallen look, and as you turn back to Katja, you notice her disappointed expression as well.');
    scene.text('Before you can say anything, the bell rings and you all rush to class. "Great show, girls!" you hear Ivan shout as you pull your shirt back on.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      ]);
    }
    if (((s as any).katjaQW ?? 0)?.['anal_quest'] > 1) {
      scene.actions([
        { label: 'Encourage Ivan', handler: (st: GameState) => {
    (s as any).ivan_afterschool = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/letshavefun.jpg');
    scene.text('Feeling Ivan\'s finger rubbing your asshole, you reach back and put your hand on his ass, giving it a squeeze before pulling him up against you. You turn your head and begin to kiss him.');
    scene.text('Katja quickly joins you and soon all three of you are kissing and fondling each other. At your encouragement, Ivan slips his finger into your ass, eliciting a moan of pleasure from you.');
    scene.text('A few seconds later, the bell rings and you all break apart. "Meet me after school so we can continue this?" Ivan pleads as you and Katja get dressed.');
    scene.text('You look at Ivan for a second and bite your lower lip in consideration. Turning to look at Katja, you find her looking at you and enthusiastically nodding. You can\'t help but grin at her eagerness and nod as well.');
    // TODO-QSP: '"Meet us in the English classroom after school" you tell Ivan.'+iif(katjaQW['anal_quest'] >= 3 and ...
    qspCall(s, 'arousal', 'anal_finger', (-3));
    qspCall(s, 'arousal', 'kiss', (-3), 'lesbian');
    qspCall(s, 'arousal', 'kiss', (-3));
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      ]);
    }
  } },
      ]);
    } else {
      scene.text('Before you can do more, the bell rings and you all rush to class. "Great show, girls!" you hear Ivan shout as you pull your shirt back on.');
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
      ]);
    }
  } },
      ]);
    } else {
      scene.text('Before you can do more, the bell rings and you all rush to class. "Great show, girls!" you hear Ivan shout as you pull your shirt back on.');
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
      ]);
    }
  } },
      ]);
    } else {
      scene.text('Before you can do more, the bell rings and you all rush to class. "Great show, girls!" you hear Ivan shout as you pull your shirt back on.');
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
      ]);
    }
  } },
      ]);
    } else {
      scene.text('Before you can do more, the bell rings and you all rush to class. "Great show, girls!" you hear Ivan shout as you pull your shirt back on.');
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterMarcusWait(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (10);
  qspCall(s, 'npcStat', 'A146');
  qspCall(s, 'npcStat', 'A14', 'a');
  scene.img('images/locations/pavlovsk/resident/meynolds/sex/virgin/marcuswait1.jpg');
  if (((s as any).katjaQW ?? 0)?.['marcus_pussy'] === 0) {
    // TODO-QSP: dynamic text: You call Marcus and tell him the address, and he sounds very excited to finally ...
    scene.text('You call Marcus and tell him the address, and he sounds very excited to finally meet the mysterious girl \'+iif(katjaQW[\'QWstage\'] > 5, \'whose virginity he will be taking\', \'he will have sex with\')+\'. He says he will be there in 10 minutes.');
  } else {
    scene.text('You call Marcus, and he almost too eagerly agrees to join you and Katja again for a threesome. He says he will be there in 10 minutes.');
  }
  // TODO-QSP: dynamic text: You tell Katja that he will be here soon and suggest that you greet him in your ...
  scene.text('You tell Katja that he will be here soon and suggest that you greet him in your underwear. Katja\'+iif(katjaQW[\'slut\'] < 80, \' hesitantly\', \' eagerly\')+\' agrees and you strip each other down and sit on the bed.');
  // TODO-QSP: dynamic text: While you wait, you getly stroke Katja's body to keep her'+iif(npc_vag['A14'] + ...
  scene.text('While you wait, you getly stroke Katja\'s body to keep her\'+iif(npc_vag[\'A14\'] + 5 < npc_dick[\'A146\'] or katjaQW[\'marcus_pussy\'] = 0, \' nerves down.\', \' excited.\')+\' Finally, after what seems like an eternity, you hear the doorbell ring.');
  qspCall(s, 'arousal', 'foreplay', 5, ((s as any).npcID1 ?? 0));
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Tell him to come in', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/meynolds/sex/virgin/marcuswait2.jpg');
    scene.text('"Come in, the door is open!" you shout. After hearing the door close, you shout "We\'re in here!"');
    // TODO-QSP: 'Marcus enters the room and when he sees you and Katja in your underwear on the bed looking at him, ...
    // TODO-QSP: iif(katjaQW['marcus_pussy'] = 0, '"You could have told me that you were offering me the '+iif( pcs_h...
    scene.actions([
      { label: 'Tell him to join you', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/meynolds/sex/virgin/katvirg1.jpg');
    scene.text('Marcus walks over and climbs on the bed. You start kissing him while Katja watches eagerly, and after a few seconds, Marcus turns his attention to her and they kiss for a bit before he pulls away and puts one hand on each of your heads and pushes you towards one another.');
    qspCall(s, 'arousal', 'kiss', 2, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Kiss Katja', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/meynolds/sex/virgin/katvirg2.jpg');
    scene.text('As Marcus pushes you towards each other, you and Katja start kissing, with your hands roaming over each other\'s bodies. As you do this, Marcus\'s hands roam over both of your bodies, paying special attention to your asses. After a few minutes, he stops and takes off his pants before he gets on his back and slides between the two of you.');
    qspCall(s, 'arousal', 'kiss', 3, ((s as any).npcID1 ?? 0), 'lesbian', 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Give him a handjob', handler: (st: GameState) => {
    if (((s as any).npc_vag ?? 0)?.['A14'] + 5 < ((s as any).npc_dick ?? 0)?.['A146']) {
      scene.actions([{ label: 'Continue', goto: ['katja_sex', 'marcus_first'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['katja_sex', 'marcus_threesome'] }]);
    }
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

function enterMarcusFirst(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/meynolds/sex/virgin/katvirg3.jpg');
  scene.text('You stop kissing Katja and reach down to take Marcus\'s enormous semi-hard cock into your hand and start stroking it. He quickly gets hard in your hand, which Katja watches in fascination. After spending a few more minutes watching, she reaches down and starts stroking his dick herself. You let go to allow her to stroke the full length of his shaft in her hand.');
  qspCall(s, 'arousal', 'hj', 3, ((s as any).npcID ?? 0), 'group');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Give him a blowjob', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/meynolds/sex/virgin/katvirg4.jpg');
    scene.text('As Katja continues jerking him off, you bend over, open your mouth and take his cock into your mouth. You struggle to open your mouth wide enough to take it in. You go as deep as you can, but it still doesn\'t fit completely in your mouth. Katja keeps stroking his shaft while you suck on it, and after a few minutes, you pop the wet cock out of your mouth and offer it to Katja.');
    qspCall(s, 'arousal', 'bj', 2, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/meynolds/sex/virgin/katvirg5.jpg');
    scene.text('She opens her mouth and tries to mimic what you did. She starts sucking on his dick, taking it as deep as she can, but starts gagging almost at once, and resigns herself to just sucking on the tip while jerking him off. A few minutes go by before she stops, gasping a little for air. "So who\'s first?" Marcus asks.');
    qspCall(s, 'arousal', 'voyeur_sex', 2, 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Mount him', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A146');
    scene.img('images/locations/pavlovsk/resident/meynolds/sex/virgin/katvirg6.jpg');
    // TODO-QSP: dynamic text: Katja bites her lower lip and looks hesitant, so you smile and straddle Marcus. ...
    scene.text(`Katja bites her lower lip and looks hesitant, so you smile and straddle Marcus. You reach down and line his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick up with your slit and slowly lower yourself down onto it. You feel it stretching you out as it fills you up, and once you're all the way down, you start to slowly ride him, moaning in pleasure as you do. Marcus pulls Katja over and she straddles his face and starts moaning as he eats her out. She leans forward and starts kissing you as you ride Marcus. After a few minutes, she stops kissing you. "Okay, I'm ready."`);
    qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'arousal', 'kiss', (-3), ((s as any).npcID1 ?? 0), 'lesbian', 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Help Katja', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A146');
    scene.img('images/locations/pavlovsk/resident/meynolds/sex/virgin/katvirg7.jpg');
    // TODO-QSP: dynamic text: You climb off Marcus and Katja takes your place. As she slowly lowers herself do...
    scene.text(`You climb off Marcus and Katja takes your place. As she slowly lowers herself down, you grab hold of his dick and line it up for her. As his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick starts to enter her, she inhales sharply and stops moving. After a few seconds, she lowers herself a bit more and then slowly starts to ride his cock, only taking about half his length inside her. You can't tell by her moans and groans how much she is enjoying herself, so to help out, you reach over and start rubbing her clit as she rides him slowly.`);
    if (((s as any).katjaQW ?? 0)?.['marcus_pussy'] === 0) {
      (s as any).katjaQW['marcus_pussy'] = 1;
    }
    qspCall(s, 'arousal', 'vaginal_finger_give', 3, ((s as any).npcID1 ?? 0), 'lesbian', 'group');
    qspCall(s, 'arousal', 'voyeur_sex', (-3), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Lick Katja', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/meynolds/sex/virgin/katvirg8.jpg');
    scene.text('With your fingers rubbing her clit, she sounds like she\'s enjoying it more now, so you lean over and start licking her clit as she continues riding Marcus. She moans even louder and seems to be enjoying it even more now, but she\'s still only taking about half his length and moving slowly.');
    if (((s as any).npc_vag ?? 0)?.['A14'] === 0) {
      (s as any).katjaQW['slut'] = ((s as any).katjaQW['slut'] ?? 0) - (5);
      scene.text('After a few more minutes of this, she finally pulls up and off, you can see the blood on his dick from popping her cherry. She climbs off the bed and starts cleaning herself up. "No sorry I can\'t do it anymore, he is just too big and it hurts too much."');
      scene.text('Marcus smiles at her. "It\'s okay, we can try again some other time if you want." She bites her lower lip and nods. You can tell she\'s still turned on and wants to try again at some point.');
      scene.text('He reaches over and slaps you on the hip as he gets up on his knees. "Get up and turn around for me." He then reaches over to grab some tissues to clean the blood off his dick.');
    } else {
      (s as any).katjaQW['slut'] = ((s as any).katjaQW['slut'] ?? 0) + (1);
      scene.text('After a few more minutes of this, she finally pulls up and off of him, sitting on the bed beside the two of you. "No. Sorry, but I can\'t do it anymore! He\'s just too big!"');
      scene.text('Marcus smiles at her. "It\'s okay. We can try again some other time if you want." She bites her lower lip and nods. You can tell she\'s still turned on and wants to try again at some point.');
      scene.text('He reaches over and slaps you on the hip as he gets up on his knees. "Get up and turn around for me."');
    }
    (s as any).katjaQW['horny'] = 0;
    if (((s as any).npc_vag ?? 0)?.['A14'] === 0) {
      (s as any).npc_vag['A14'] = 20;
    } else {
      if (((s as any).npc_vag ?? 0)?.['A14'] < ((s as any).dick ?? 0)) {
        (s as any).npc_vag['A14'] = ((s as any).npc_vag['A14'] ?? 0) + (1);
      }
      if (((s as any).npc_vag ?? 0)?.['A14']*2 < ((s as any).dick ?? 0)) {
        (s as any).npc_vag['A14'] = ((s as any).npc_vag['A14'] ?? 0) + (1);
      }
    }
    qspCall(s, 'arousal', 'cuni_give', 3, ((s as any).npcID1 ?? 0), 'lesbian', 'group');
    qspCall(s, 'arousal', 'voyeur_sex', (-3), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'On all fours', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/meynolds/sex/virgin/katvirg9.jpg');
    scene.text('You turn around and get on all fours as he scoots up behind you. He rubs the tip of his dick against your slit before sliding his massive cock back inside you and fucking you again, slowly working himself deeper into your pussy. As he fucks you, Katja kneels on the bed in front of you leans forward and starts kissing you as Marcus continues fucking you.');
    qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'arousal', 'kiss', (-3), ((s as any).npcID1 ?? 0), 'lesbian', 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get fucked', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/meynolds/sex/virgin/katvirg10.jpg');
    scene.text('Marcus suddenly goes balls deep, but instead of pulling back out for another thrust, he just grabs you and lifts you up. You\'re a bit surprised at how easily he lifts you off the bed and holds you off the ground. He carries you over to one of the chairs and lowers you. You put your legs down until your feet touch the floor and he lifts one of your legs up until you have one foot on the chair. He starts fucking you again as you notice Katja in front of you with her phone out, taking pictures of you and Marcus while laughing.');
    qspCall(s, 'arousal', 'vaginal', 3, 'lesbian', 'inhibition');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Pose while fucking', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/meynolds/sex/virgin/katvirg11.jpg');
    scene.text('You do your best to pose for the pictures as Marcus fucks you from behind. Katja seems to be enjoying this almost as much as you are, and not long after you feel him tense up as he starts fucking you harder and faster. He\'s getting close. He suddenly pulls out of you and pushes you onto your knees in front of him. You grab Katja and pull her down as well.');
    qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'arousal', 'kiss', (-3), ((s as any).npcID1 ?? 0), 'lesbian', 'group', 'inhibition');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Facial', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.img('images/locations/pavlovsk/resident/meynolds/sex/virgin/katvirg12.jpg');
    scene.text('Once Katja is next to you, you start jerking Marcus off, and he moans loudly as you feel his dick twitching in your hand. His cum splatters across your faces, some of it getting in your mouth, as you continue jerking his cock. After several more strokes, a final drop is squeezed out and you let go of him. He sighs and looks down at you with a huge grin, your faces drenched in his cum.');
    qspCall(s, 'arousal', 'hj', 1, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'cum_call', 'mouth', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Clean up', goto: ['katja_sex', 'marcus_aftermatch'] },
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

function enterMarcusThreesome(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/meynolds/sex/virgin/katvirg3.jpg');
  scene.text('After you stop kissing Katja, you look down and see that she\'s already stroking Marcus\'s massive hard cock with her hand. After a few seconds, she reaches over to pull your hand over and you take her place jerking him off.');
  qspCall(s, 'arousal', 'hj', 3, ((s as any).npcID ?? 0), 'group');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Watch', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/meynolds/sex/virgin/katvirg5.jpg');
    scene.text('She opens her mouth and starts sucking on his dick, taking it as deep as she can. She takes it surprisingly deep down her throat while jerking him off. She must be getting used to giving blowjobs or has been practicing on her own. A few minutes go by before she stops, popping his dick out of her mouth and offering it to you.');
    qspCall(s, 'arousal', 'voyeur_sex', 2, 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Give him a blowjob', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/meynolds/sex/virgin/katvirg4.jpg');
    scene.text('You open your mouth and take his big cock inside. You struggle to open your mouth wide enough to take it in. You go as deep as you can, but it still doesn\'t fit completely in your mouth. Katja keeps stroking his shaft while you suck on it, and after a few minutes, you pop the wet cock out of your mouth to take a short break when Marcus speaks up. "So who\'s first?" You can tell he is eager to start fucking the two of you.');
    qspCall(s, 'arousal', 'bj', 2, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Help Katja', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A146');
    scene.img('images/locations/pavlovsk/resident/meynolds/sex/marcusmff/marcusmff1.jpg');
    // TODO-QSP: dynamic text: Katja straddles Marcus. As she slowly lowers herself down, you grab hold of his ...
    scene.text(`Katja straddles Marcus. As she slowly lowers herself down, you grab hold of his dick and line it up for her. As his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick starts to enter her, she inhales sharply and moans loudly. After a few seconds, she lowers herself a bit more and then slowly starts to ride his cock, only taking about half his length inside her. You reach over and start rubbing her clit as she rides him slowly before picking up the pace a little and going further down. It takes a few minutes, but she finally takes the full length of his shaft inside her.`);
    if (((s as any).npc_vag ?? 0)?.['A14'] < ((s as any).dick ?? 0)) {
      (s as any).npc_vag['A14'] = ((s as any).npc_vag['A14'] ?? 0) + (1);
    }
    if (((s as any).npc_vag ?? 0)?.['A14']*2 < ((s as any).dick ?? 0)) {
      (s as any).npc_vag['A14'] = ((s as any).npc_vag['A14'] ?? 0) + (1);
    }
    if (((s as any).katjaQW ?? 0)?.['marcus_pussy'] === 0) {
      (s as any).katjaQW['marcus_pussy'] = 1;
    }
    qspCall(s, 'arousal', 'vaginal_finger_give', 3, ((s as any).npcID1 ?? 0), 'lesbian', 'group');
    qspCall(s, 'arousal', 'voyeur_sex', (-3), ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Make Katja feel good', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/meynolds/sex/marcusmff/marcusmff2.jpg');
    // TODO-QSP: dynamic text: You keep rubbing her clit as she starts slamming herself down on him, moaning lo...
    scene.text(`You keep rubbing her clit as she starts slamming herself down on him, moaning louder and louder as she goes. She seems to really be enjoying herself, but just as it seems like she's starting to get close, Marcus suddenly lifts her off and places her gently aside. "You can't have all the fun. It's ${((s as any).pcs_nickname ?? 0)}'s turn." Katja gives a slightly pouty look before smiling.`);
    if (((s as any).npc_vag ?? 0)?.['A14'] < ((s as any).dick ?? 0)) {
      (s as any).npc_vag['A14'] = ((s as any).npc_vag['A14'] ?? 0) + (1);
    }
    if (((s as any).npc_vag ?? 0)?.['A14']*2 < ((s as any).dick ?? 0)) {
      (s as any).npc_vag['A14'] = ((s as any).npc_vag['A14'] ?? 0) + (1);
    }
    qspCall(s, 'arousal', 'vaginal_finger_give', 3, ((s as any).npcID1 ?? 0), 'lesbian', 'group');
    qspCall(s, 'arousal', 'voyeur_sex', (-3), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Mount him', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A146');
    scene.img('images/locations/pavlovsk/resident/meynolds/sex/virgin/katvirg6.jpg');
    // TODO-QSP: dynamic text: You smile and straddle Marcus, reaching down and lining his <<dick>>cm <<$dick_g...
    scene.text(`You smile and straddle Marcus, reaching down and lining his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick up with your slit before you slowly lower yourself down onto it. You feel it stretching you out as it fills you up, and once you're all the way down, you start to slowly ride him, moaning in pleasure as you do.`);
    scene.text('Marcus pulls Katja over and she straddles his face and starts moaning as he eats her out. She leans forward and starts kissing you as you ride Marcus. After a few minutes, she stops kissing you and looks at Marcus. "I want another go." He laughs and slaps you on the ass as he pulls out. Katja crawls over to him and he grabs her and flips her onto her back.');
    qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'arousal', 'kiss', (-3), ((s as any).npcID1 ?? 0), 'lesbian', 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Sit on Katja\'s face', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/meynolds/sex/marcusmff/marcusmff3.jpg');
    scene.text('He slides his dick back in her and starts fucking her again. Since she\'s getting the dick again, you straddle her face and sit on her. She starts licking your wet pussy as you lean forward and start licking and sucking on her clit. You feel Marcus\'s stomach slam against the top of your head with each thrust he takes into Katja.');
    if (((s as any).npc_vag ?? 0)?.['A14'] < ((s as any).dick ?? 0)) {
      (s as any).npc_vag['A14'] = ((s as any).npc_vag['A14'] ?? 0) + (1);
    }
    if (((s as any).npc_vag ?? 0)?.['A14']*2 < ((s as any).dick ?? 0)) {
      (s as any).npc_vag['A14'] = ((s as any).npc_vag['A14'] ?? 0) + (1);
    }
    qspCall(s, 'arousal', 'cuni', 3, ((s as any).npcID1 ?? 0), 'lesbian', 'group');
    qspCall(s, 'arousal', 'cuni_give', (-3), ((s as any).npcID1 ?? 0), 'lesbian', 'group');
    qspCall(s, 'arousal', 'vaginal', (-3), ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Enjoy yourself', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/meynolds/sex/marcusmff/marcusmff4.jpg');
    scene.text('This continues for several minutes before Katja stops licking you and starts moaning loudly. You keep licking her clit as Marcus fucks her, her moans getting louder and louder until she finally cries out and her whole body shakes as she has an intense orgasm. He fucks her all the way through her orgasm and pulls out only once she stops shaking. He gets up to walk around you as Katja crawls out from under you, looking spent.');
    if (((s as any).npc_vag ?? 0)?.['A14'] < ((s as any).dick ?? 0)) {
      (s as any).npc_vag['A14'] = ((s as any).npc_vag['A14'] ?? 0) + (1);
    }
    if (((s as any).npc_vag ?? 0)?.['A14']*2 < ((s as any).dick ?? 0)) {
      (s as any).npc_vag['A14'] = ((s as any).npc_vag['A14'] ?? 0) + (1);
    }
    (s as any).katjaQW['horny'] = 0;
    (s as any).katjaQW['slut'] = ((s as any).katjaQW['slut'] ?? 0) + (2);
    qspCall(s, 'arousal', 'cuni', 3, ((s as any).npcID1 ?? 0), 'lesbian', 'group');
    qspCall(s, 'arousal', 'cuni_give', (-3), ((s as any).npcID1 ?? 0), 'lesbian', 'group');
    qspCall(s, 'arousal', 'vaginal', (-3), ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Take it from behind', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/meynolds/sex/marcusmff/marcusmff5.jpg');
    scene.text('Marcus settles down behind you, pulling your hips up so you\'re fully up on your knees and pushes you down at your shoulders until your face is against the floor. He slides his enormous cock back into you and starts fucking you again, while Katja comes over to watch, giggling, seemingly enjoying this almost as much as you are.');
    qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Kiss Katja', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/meynolds/sex/marcusmff/marcusmff6.jpg');
    scene.text('After a few minutes, Katja places a hand under your chin, lifts your head up and starts kissing you as Marcus pounds you from behind. There are few times in life that one finds sexual bliss, but this is one of those times. Marcus speeds up and starts grunting louder before he pulls his cock out of you. He gets up and quickly walks over so he is standing between you and starts jerking off.');
    qspCall(s, 'arousal', 'vaginal', 3, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'arousal', 'kiss', (-3), ((s as any).npcID1 ?? 0), 'lesbian', 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Facial', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.img('images/locations/pavlovsk/resident/meynolds/sex/marcusmff/marcusmff7.jpg');
    scene.text('You and Katja scoot together in front of his dick, open your mouths and tilt your heads back. Ropes of warm cum soon start splattering across your faces, some of it ending up in your mouths. Once he finally finishes, you turn towards each other and kiss, sharing the cum in your mouths. Marcus sighs and takes a seat on one of the chairs as he watches.');
    qspCall(s, 'arousal', 'kiss', 1, ((s as any).npcID1 ?? 0), 'lesbian', 'group');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'cum_call', 'mouth', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Clean up', goto: ['katja_sex', 'marcus_aftermatch'] },
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
  } },
  ]);
  scene.build();
}

function enterMarcusAftermatch(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'npc_relationship', 'modify', 'A146', 'love');
  (s as any).cumspclnt = 1;
  qspCall(s, 'cum_cleanup', '');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/meynolds/sex/virgin/katafter.jpg');
  scene.text('Marcus starts getting dressed as you and Katja clean yourselves up. She slumps back on the bed and closes her eyes while playing with her pussy.');
  // TODO-QSP: dynamic text: "That was '+iif( katjaQW['QWstage'] = 5, 'amazing and a great honor to be Katja'...
  scene.text('"That was \'+iif( katjaQW[\'QWstage\'] = 5, \'amazing and a great honor to be Katja\'s first. If you ever want to repeat this\', \'great as always girls. If you feel the urge again just\')+\' give me a call." Katja doesn\'t respond, so you answer. "Yeah, this was fun. We might repeat it another time. You should get going before Vicky gets back. We don\'t want her sticking her nose in our business."');
  scene.text('"See you around," he says and leaves while you start putting your clothes back on. After a few minutes, Katja finally gets up from the bed and starts getting dressed in silence.');
  if (((s as any).mey_vika ?? 0)?.['key'] === 1) {
    scene.actions([
      { label: 'Leave the room', goto: ['mey_home', 'start'] },
    ]);
  } else {
    scene.actions([
      { label: 'Say goodbye and leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
    ]);
  }
  scene.actions([
    { label: 'Talk with Katja', goto: ['KatjaHomeTalk', ''] },
  ]);
  scene.build();
}

function enterKatnatsex1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A14');
  qspCall(s, 'npcStat', 'A16', 'a');
  (s as any).NatbelQW['training'] = ((s as any).NatbelQW['training'] ?? 0) + (1);
  qspCall(s, 'npc_relationship', 'modify', 'A14', 'adore');
  qspCall(s, 'npc_relationship', 'modify', 'A16', 'adore');
  (s as any).npc_had_sex['A14'] = 1;
  (s as any).npc_had_sex['A16'] = 1;
  if (((s as any).katjaQW ?? 0)?.['simultanous_girls'] < 2) {
    (s as any).katjaQW['slut'] = ((s as any).katjaQW['slut'] ?? 0) + (10);
    (s as any).katjaQW['simultanous_girls'] = 2;
  } else {
    (s as any).katjaQW['slut'] = ((s as any).katjaQW['slut'] ?? 0) + (2);
  }
  scene.img('images/characters/pavlovsk/school/girl/katja/sex/KWS6.jpg');
  scene.text('"Ok Slut, this is what is going to happen. You see cute little Katja here? Well, you are coming with us and will eat her pussy like there is no tomorrow. Do that and I will condone some of your debt. Understood?"');
  scene.text('Natasha looks at you, but doesn\'t retort, she just looks to Katja for a moment and then nods. Yeah! Total control!');
  scene.text('"Hey! Let\'s show Natasha your room!"');
  scene.text('You grab Katja\'s hand and exit the shop, followed by a meekly Natasha. The journey back seems to take an eternity as the two girls eye one another silently, but finally, you enter Katjas\'s room, quickly undress and jump onto the bed.');
  scene.text('"So girls, how do we begin?"');
  scene.text('The girls strip slower than you, and you can see Katja ogling a blushing (but not embarrassed) Natasha. They then jump on the bed and look at you expectantly.');
  qspCall(s, 'arousal', 'voyeur', 10, 'lesbian', 'group');
  qspCall(s, 'underwear', 'backup');
  qspCall(s, 'clothing', 'strip');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Katja', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/KWS7.jpg');
    scene.text('You can only lick your lips as the ginger goddess smiles with grace and positions herself against the headboard. Then languidly, Katja opens her thighs so you can feast on her nectar, but as you kneel, the ginger grabs a spaced-out Natasha and makes her cuddle against her crotch.');
    // TODO-QSP: dynamic text: "Hm? Don't worry <<$pcs_nickname>>, Natasha is in good hands."
    scene.text(`"Hm? Don't worry ${((s as any).pcs_nickname ?? 0)}, Natasha is in good hands."`);
    scene.text('She smiles as you pout and try on puppy eyes, but the cold bitch just caresses and kisses the nerdy girl as Natasha give you sideways looks. Ok, message received. You are now her bitch… sigh… Time to serve your mistress!');
    // TODO-QSP: dynamic text: "Ouch! <<$pcs_nickname>>!"
    scene.text(`"Ouch! ${((s as any).pcs_nickname ?? 0)}!"`);
    scene.text('You smile, kissing the hickey that has just mysteriously appeared on Katja\'s thigh and amorously, open her womanhood folds so your tongue can lick the redhead\'s little love button. Her abstracted moans mix with Natasha\'s insecure kisses as you take your time to take pleasure on the hotness between her legs, enjoying the slow cunnilingus as Katja approaches her orgasm. Finally, when she reaches it, you are so engrossed in the act that you practically lose it in the delicious moment when she tenses and relaxes.');
    scene.text('"Now it\'s my turn, isn\'t it Katja?"');
    scene.text('Natasha practically doesn\'t react, happily snuggling under the redhead\'s care, who somewhat tiredly(but satisfied) looks at you expectantly.');
    qspCall(s, 'arousal', 'cuni_give', 10, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Now Natasha!', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/KWS8.jpg');
    scene.text('The redhead grabs Natasha and pushes her against the headboard. The nerd tries to get up, squirming under Katja\'s hands, but her weight immobilizes Natasha against the bed\'s headboard. At the same time, you force open Natasha\'s thighs. The nerd seems to be about to say something, but Katja stops her with a finger on the lips');
    // TODO-QSP: dynamic text: "Shh. Don't worry Natasha, you are too nervous. Let <<$pcs_nickname>> and I take...
    scene.text(`"Shh. Don't worry Natasha, you are too nervous. Let ${((s as any).pcs_nickname ?? 0)} and I take care of that, ok?"`);
    scene.text('"Hm… Ok Katja. I trust… OUCH!"');
    scene.text('One of your fingers penetrates Natasha\'s hot, wet pussy a little too roughly, but it sends the correct message, and the nerd finally shuts up and stops struggling. Now she is at your tender mercies, and Katja kneels beside you to devour the now silent girl, but that doesn\'t last long, as you two pussy-hungry vixens begin to lick, bite and fingerfuck the trashing girl, whose screams of pleasure are only contained by your deep kisses, making her raise her thighs little by little until, finally, she cums.');
    qspCall(s, 'arousal', 'cuni_give', 10, ((s as any).npcID1 ?? 0), 'group');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'cuni', 'force', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Force the girls to eat you [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    // TODO-QSP: msg $noWillpower
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Force the girls to eat you [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).katjaQW['dom'] = ((s as any).katjaQW['dom'] ?? 0) - (2);
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/KWS10.jpg');
    scene.text('You shove Natasha away and jump on the redhead who, faking surprise, lets your tongue ravage her mouth.');
    scene.text('"Now… Muach… you are… slurp… mine Katja! I am horny, so you two can do your job!"');
    scene.text('The redhead doesn\'t retort. She just caresses your face and begins to kiss you. Then, a wet sensation reaches your back. It is Natasha, who has positioned herself behind you and has just licked your back. She stops when you turn towards her with curiosity, but after an embarrassing silence in which you don\'t say anything, the nerdy girl continues licking and kissing her way back down your back, her hands groping your butt.');
    // TODO-QSP: dynamic text: "Shh… Don't worry <<$pcs_nickname>>, Natasha and I know what to do."
    scene.text(`"Shh… Don't worry ${((s as any).pcs_nickname ?? 0)}, Natasha and I know what to do."`);
    scene.text('Katja embraces you and lies down, so you end on top, where you lash on her gorgeous bosom. Natasha meanwhile doesn\'t stand idle and her hands begin to work you, her cold tongue tasting your asshole, startling you, but Katja embraces your body so you can\'t escape the nerd\'s probing. They continue doing this, slowly drilling your soaking cunt, exploring your hungry mouth and caressing your burning skin.');
    scene.text('"Oh! Katja! I mean, oh! Fuck! Natasha I\'m cumming!"');
    qspCall(s, 'arousal', 'cuni', 10, ((s as any).npcID1 ?? 0), 'lesbian', 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Cuddles', goto: ['katja_sex', 'katnatsex2'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'The girls seem too tired to continue.', goto: ['katja_sex', 'katnatsex2'] },
    ]);
  } },
      { label: 'Your turn!', handler: (st: GameState) => {
    (s as any).katjaQW['dom'] = ((s as any).katjaQW['dom'] ?? 0) + (2);
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/KWS10.jpg');
    scene.text('You shove Natasha away and jump on the redhead who, faking surprise, lets your tongue ravage her mouth.');
    scene.text('"Now… Muach… you are… slurp… mine Katja! I am horny, so you two can do your job!"');
    scene.text('The redhead doesn\'t retort. She just caresses your face and begins to kiss you. Then, a wet sensation reaches your back. It is Natasha, who has positioned herself behind you and has just licked your back. She stops when you turn towards her with curiosity, but after an embarrassing silence in which you don\'t say anything, the nerdy girl continues licking and kissing her way back down your back, her hands groping your butt.');
    // TODO-QSP: dynamic text: "Shh… Don't worry <<$pcs_nickname>>, Natasha and I know what to do."
    scene.text(`"Shh… Don't worry ${((s as any).pcs_nickname ?? 0)}, Natasha and I know what to do."`);
    scene.text('Katja embraces you and lies down, so you end on top, where you lash on her gorgeous bosom. Natasha meanwhile doesn\'t stand idle and her hands begin to work you, her cold tongue tasting your asshole, startling you, but Katja embraces your body so you can\'t escape the nerd\'s probing. They continue doing this, slowly drilling your soaking cunt, exploring your hungry mouth and caressing your burning skin.');
    scene.text('"Oh! Katja! I mean, oh! Fuck! Natasha I\'m cumming!"');
    qspCall(s, 'arousal', 'cuni', 10, ((s as any).npcID1 ?? 0), 'lesbian', 'group');
    qspCall(s, 'arousal', 'kiss', (-5), ((s as any).npcID ?? 0), 'lesbian', 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Cuddle with Katja and ignore Natasha', goto: ['katja_sex', 'katnatsex3'] },
      { label: 'Too tired for sex, so "help" Natasha in another way', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/KWS11.jpg');
    scene.text('Sweet, loving, tired Katja moves towards a blushed with desire Natasha, but before the redhead can do anything, you grab Katja, and without care about your submissive slut, begin making out with your lover.');
    // TODO-QSP: dynamic text: "Hmpf… <<$pcs_nickname>>… Muach… Is Katja's… Lick…"
    scene.text(`"Hmpf… ${((s as any).pcs_nickname ?? 0)}… Muach… Is Katja's… Lick…"`);
    scene.text('"Yeah… Slurp… Katja… Muach… Let\'s give her a spectacle."');
    scene.text('As you make out with the hot redhead, a gaze over her shoulder shows Natasha, squirming, not sure what to do. Finally, as it is evident that you aren\'t going to let Katja fuck the little nerd, she slowly raises a hand towards her tit and the other down towards her pussy.');
    scene.text('Katja sits hesitantly a moment, before hearing your slave\'s moan, then looks into your eyes and begins to reply to your kisses. Soon, the sound of your own making out is joined with Natasha\'s ragged breaths and wet slapping, which with a muffled scream, end in a much-needed orgasm for the nerd.');
    qspCall(s, 'arousal', 'kiss', 10, ((s as any).npcID ?? 0), 'lesbian', 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Cuddles', goto: ['katja_sex', 'katnatsex2'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Natasha!', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/KWS8.jpg');
    scene.text('The redhead grabs Natasha and pushes her against the headboard. The nerd tries to get up, squirming under Katja\'s hands, but her weight immobilizes Natasha against the bed\'s headboard. At the same time, you force open Natasha\'s thighs. The nerd seems to be about to say something, but Katja stops her with a finger on the lips');
    // TODO-QSP: dynamic text: "Shh. Don't worry Natasha, you are too nervous. Let <<$pcs_nickname>> and I take...
    scene.text(`"Shh. Don't worry Natasha, you are too nervous. Let ${((s as any).pcs_nickname ?? 0)} and I take care of that, ok?"`);
    scene.text('"Hm… Ok Katja. I trust… OUCH!"');
    scene.text('One of your fingers penetrates Natasha\'s hot, wet pussy a little too roughly, but it sends the correct message, and the nerd finally shuts up and stops struggling. Now she is at your tender mercies, and Katja kneels beside you to devour the now silent girl, but that doesn\'t last long, as you two pussy-hungry vixens begin to lick, bite and fingerfuck the trashing girl, whose screams of pleasure are only contained by your deep kisses, making her raise her thighs little by little until, finally, she cums.');
    qspCall(s, 'arousal', 'cuni_give', 10, ((s as any).npcID1 ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Katja!', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/KWS7.jpg');
    scene.text('You can only lick your lips as the ginger goddess smiles with grace and positions herself against the headboard. Then languidly, Katja opens her thighs so you can feast on her nectar, but as you kneel, the ginger grabs a spaced-out Natasha and makes her cuddle against her crotch.');
    // TODO-QSP: dynamic text: "Hm? Don't worry <<$pcs_nickname>>, Natasha is in good hands."
    scene.text(`"Hm? Don't worry ${((s as any).pcs_nickname ?? 0)}, Natasha is in good hands."`);
    scene.text('She smiles as you pout and try on puppy eyes, but the cold bitch just caresses and kisses the nerdy girl as Natasha give you sideways looks. Ok, message received. You are now her bitch… sigh… Time to serve your mistress!');
    // TODO-QSP: dynamic text: "Ouch! <<$pcs_nickname>>!"
    scene.text(`"Ouch! ${((s as any).pcs_nickname ?? 0)}!"`);
    scene.text('You smile, kissing the hickey that has just mysteriously appeared on Katja\'s thigh and amorously, open her womanhood folds so your tongue can lick the redhead\'s little love button. Her abstracted moans mix with Natasha\'s insecure kisses as you take your time to take pleasure from the hotness between her legs, enjoying the slow cunnilingus as Katja approaches her orgasm. Finally, when she reaches it, you are so engrossed in the act that you practically lose it in the delicious moment when she tenses and relaxes.');
    scene.text('"Now it\'s my turn, isn\'t it Katja?"');
    scene.text('Natasha practically doesn\'t react, happily snuggling under the redhead\'s care, who somewhat tiredly(but satisfied) looks at you expectantly.');
    qspCall(s, 'arousal', 'cuni_give', 10, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'cuni', 'force', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Force the girls to eat you [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    // TODO-QSP: msg $noWillpower
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Force the girls to eat you [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).katjaQW['dom'] = ((s as any).katjaQW['dom'] ?? 0) - (2);
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/KWS10.jpg');
    scene.text('You shove Natasha away and jump on the redhead who, faking surprise, lets your tongue ravage her mouth.');
    scene.text('"Now… Muach… you are… slurp… mine Katja! I am horny, so you two can do your job!"');
    scene.text('The redhead doesn\'t retort. She just caresses your face and begins to kiss you. Then, a wet sensation reaches your back. It is Natasha, who has positioned herself behind you and has just licked your back. She stops when you turn towards her with curiosity, but after an embarrassing silence in which you don\'t say anything, the nerdy girl continues licking and kissing her way back down your back, her hands groping your butt.');
    // TODO-QSP: dynamic text: "Shh… Don't worry <<$pcs_nickname>>, Natasha and I know what to do."
    scene.text(`"Shh… Don't worry ${((s as any).pcs_nickname ?? 0)}, Natasha and I know what to do."`);
    scene.text('Katja embraces you and lies down, so you end on top, where you lash on her gorgeous bosom. Natasha meanwhile doesn\'t stand idle and her hands begin to work you, her cold tongue tasting your asshole, startling you, but Katja embraces your body so you can\'t escape the nerd\'s probing. They continue doing this, slowly drilling your soaking cunt, exploring your hungry mouth and caressing your burning skin.');
    scene.text('"Oh! Katja! I mean, oh! Fuck! Natasha I\'m cumming!"');
    qspCall(s, 'arousal', 'cuni', 10, ((s as any).npcID1 ?? 0), 'lesbian', 'group');
    qspCall(s, 'arousal', 'kiss', (-5), ((s as any).npcID ?? 0), 'lesbian', 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Cuddles', goto: ['katja_sex', 'katnatsex2'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Cuddles', goto: ['katja_sex', 'katnatsex2'] },
    ]);
  } },
      { label: 'You', handler: (st: GameState) => {
    (s as any).katjaQW['dom'] = ((s as any).katjaQW['dom'] ?? 0) + (2);
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/KWS10.jpg');
    scene.text('You shove Natasha away and jump on the redhead who, faking surprise, lets your tongue ravage her mouth.');
    scene.text('"Now… Muach… you are… slurp… mine Katja! I am horny, so you two can do your job!"');
    scene.text('The redhead doesn\'t retort. She just caresses your face and begins to kiss you. Then, a wet sensation reaches your back. It is Natasha, who has positioned herself behind you and has just licked your back. She stops when you turn towards her with curiosity, but after an embarrassing silence in which you don\'t say anything, the nerdy girl continues licking and kissing her way back down your back, her hands groping your butt.');
    // TODO-QSP: dynamic text: "Shh… Don't worry <<$pcs_nickname>>, Natasha and I know what to do."
    scene.text(`"Shh… Don't worry ${((s as any).pcs_nickname ?? 0)}, Natasha and I know what to do."`);
    scene.text('Katja embraces you and lies down, so you end on top, where you lash on her gorgeous bosom. Natasha meanwhile doesn\'t stand idle and her hands begin to work you, her cold tongue tasting your asshole, startling you, but Katja embraces your body so you can\'t escape the nerd\'s probing. They continue doing this, slowly drilling your soaking cunt, exploring your hungry mouth and caressing your burning skin.');
    scene.text('"Oh! Katja! I mean, oh! Fuck! Natasha I\'m cumming!"');
    qspCall(s, 'arousal', 'cuni', 10, ((s as any).npcID1 ?? 0), 'lesbian', 'group');
    qspCall(s, 'arousal', 'kiss', (-5), ((s as any).npcID ?? 0), 'lesbian', 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Too tired… cuddle with the girls', goto: ['katja_sex', 'katnatsex3'] },
      { label: 'Groaning help Katja', handler: (st: GameState) => {
    (s as any).katjaQW['dom'] = ((s as any).katjaQW['dom'] ?? 0) + (2);
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/KWS7.jpg');
    scene.text('You can only lick your lips as the ginger goddess smiles with grace and positions herself against the headboard. Then languidly, Katja opens her thighs so you can feast on her nectar, but as you kneel, the ginger grabs a spaced-out Natasha and makes her cuddle against her crotch.');
    // TODO-QSP: dynamic text: "Hm? Don't worry <<$pcs_nickname>>, Natasha is in good hands."
    scene.text(`"Hm? Don't worry ${((s as any).pcs_nickname ?? 0)}, Natasha is in good hands."`);
    scene.text('She smiles as you pout and try on puppy eyes, but the cold bitch just caresses and kisses the nerdy girl as Natasha gives you sideways looks. Ok, message received. You are now her bitch… sigh… Time to serve your mistress!');
    // TODO-QSP: dynamic text: "Ouch! <<$pcs_nickname>>!"
    scene.text(`"Ouch! ${((s as any).pcs_nickname ?? 0)}!"`);
    scene.text('You smile, kissing the hickey that has just mysteriously appeared on Katja\'s thigh and amorously, open her womanhood folds so your tongue can lick the redhead\'s little love button. Her abstracted moans mix with Natasha\'s insecure kisses as you take your time to take pleasure on the hotness between her legs, enjoying the slow cunnilingus as Katja approaches her orgasm. Finally, when she reaches it, you are so engrossed in the act that you practically lose it in the delicious moment when she tenses and relaxes.');
    scene.text('"Now it\'s my turn, isn\'t it Katja?"');
    scene.text('Natasha practically doesn\'t react, happily snuggling under the redhead\'s care, who somewhat tiredly(but satisfied) looks at you expectantly.');
    qspCall(s, 'arousal', 'cuni_give', 10, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Cuddles', goto: ['katja_sex', 'katnatsex2'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    { label: 'You', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/KWS10.jpg');
    scene.text('You shove Natasha away and jump on the redhead who, faking surprise, lets your tongue ravage her mouth.');
    scene.text('"Now… Muach… you are… slurp… mine Katja! I am horny, so you two can do your job!"');
    scene.text('The redhead doesn\'t retort. She just caresses your face and begins to kiss you. Then, a wet sensation reaches your back. It is Natasha, who has positioned herself behind you and has just licked your back. She stops when you turn towards her with curiosity, but after an embarrassing silence in which you don\'t say anything, the nerdy girl continues licking and kissing her way back down your back, her hands groping your butt.');
    // TODO-QSP: dynamic text: "Shh… Don't worry <<$pcs_nickname>>, Natasha and I know what to do."
    scene.text(`"Shh… Don't worry ${((s as any).pcs_nickname ?? 0)}, Natasha and I know what to do."`);
    scene.text('Katja embraces you and lies down, so you end on top, where you lash on her gorgeous bosom. Natasha meanwhile doesn\'t stand idle and her hands begin to work you, her cold tongue tasting your asshole, startling you, but Katja embraces your body so you can\'t escape the nerd\'s probing. They continue doing this, slowly drilling your soaking cunt, exploring your hungry mouth and caressing your burning skin.');
    scene.text('"Oh! Katja! I mean, oh! Fuck! Natasha I\'m cumming!"');
    qspCall(s, 'arousal', 'cuni', 10, ((s as any).npcID1 ?? 0), 'lesbian', 'group');
    qspCall(s, 'arousal', 'kiss', (-5), ((s as any).npcID ?? 0), 'lesbian', 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Katja', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/KWS7.jpg');
    scene.text('You can only lick your lips as the ginger goddess smiles with grace and positions herself against the headboard. Then languidly, Katja opens her thighs so you can feast on her nectar, but as you kneel, the ginger grabs a spaced-out Natasha and makes her cuddle against her crotch.');
    // TODO-QSP: dynamic text: "Hm? Don't worry <<$pcs_nickname>>, Natasha is in good hands."
    scene.text(`"Hm? Don't worry ${((s as any).pcs_nickname ?? 0)}, Natasha is in good hands."`);
    scene.text('She smiles as you pout and try on puppy eyes, but the cold bitch just caresses and kisses the nerdy girl as Natasha give you sideways looks. Ok, message received. You are now her bitch… sigh… Time to serve your mistress!');
    // TODO-QSP: dynamic text: "Ouch! <<$pcs_nickname>>!"
    scene.text(`"Ouch! ${((s as any).pcs_nickname ?? 0)}!"`);
    scene.text('You smile, kissing the hickey that has just mysteriously appeared on Katja\'s thigh and amorously, open her womanhood folds so your tongue can lick the redhead\'s little love button. Her abstracted moans mix with Natasha\'s insecure kisses as you take your time to take pleasure from the hotness between her legs, enjoying the slow cunnilingus as Katja approaches her orgasm. Finally, when she reaches it, you are so engrossed in the act that you practically lose it in the delicious moment when she tenses and relaxes.');
    scene.text('"Now it\'s my turn, isn\'t it Katja?"');
    scene.text('Natasha practically doesn\'t react, happily snuggling under the redhead\'s care, who somewhat tiredly(but satisfied) looks at you expectantly.');
    qspCall(s, 'arousal', 'cuni_give', 10, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'kiss', 'self', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'help Katja with Natasha [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    // TODO-QSP: msg $noWillpower
  } },
      ]);
    } else {
      scene.actions([
        { label: 'help Katja with Natasha', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/KWS11.jpg');
    scene.text('Sweet, loving, tired Katja, move towards a blushed with desire Natasha, but before the redhead can do something, you grab Katja, and without care about your submissive slut, begin making out with your lover.');
    // TODO-QSP: dynamic text: "Hmpf… <<$pcs_nickname>>… Muach… Is Katja's… Lick…"
    scene.text(`"Hmpf… ${((s as any).pcs_nickname ?? 0)}… Muach… Is Katja's… Lick…"`);
    scene.text('"Yeah… Slurp… Katja… Muach… Let\'s give her a spectacle."');
    scene.text('As you make it, with the hot redhead, a gaze over her shoulder, show Natasha, squirming, not sure what to do, but finally, as is evident, that you aren\'t going to let Katja, fuck the little nerd, she slowly raises a hand towards a tit, and other get down towards her twat.');
    scene.text('Katja sits hesitantly a moment, before hearing your slave\'s moan, then, looks into your eyes, and begins to reply to your kisses. Soon, the sound of your own making out is joined with Natasha\'s ragged breaths and wet slapping, which with a muffled scream, end in a needy orgasm for the nerd.');
    qspCall(s, 'arousal', 'kiss', 10, ((s as any).npcID ?? 0), 'lesbian', 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Cuddles', goto: ['katja_sex', 'katnatsex2'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Cuddle', goto: ['katja_sex', 'katnatsex3'] },
    ]);
  } },
      { label: 'Natasha', handler: (st: GameState) => {
    (s as any).katjaQW['dom'] = ((s as any).katjaQW['dom'] ?? 0) + (2);
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/KWS8.jpg');
    scene.text('The redhead grabs Natasha and pushes her against the headboard. The nerd tries to get up, squirming under Katja\'s hands, but her weight immobilizes Natasha against the bed\'s headboard. At the same time, you force open Natasha\'s thighs. The nerd seems to be about to say something, but Katja stops her with a finger on the lips');
    // TODO-QSP: dynamic text: "Shh. Don't worry Natasha, you are too nervous. Let <<$pcs_nickname>> and I take...
    scene.text(`"Shh. Don't worry Natasha, you are too nervous. Let ${((s as any).pcs_nickname ?? 0)} and I take care of that, ok?"`);
    scene.text('"Hm… Ok Katja. I trust… OUCH!"');
    scene.text('One of your fingers penetrates Natasha\'s hot, wet pussy a little too roughly, but it sends the correct message, and the nerd finally shuts up and stops struggling. Now she is at your tender mercies, and Katja kneels beside you to devour the now silent girl, but that doesn\'t last long, as you two pussy-hungry vixens begin to lick, bite and fingerfuck the trashing girl, whose screams of pleasure are only contained by your deep kisses, making her raise her thighs little by little until, finally, she cums.');
    qspCall(s, 'arousal', 'cuni_give', 10, ((s as any).npcID1 ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Too tired… cuddle with the girls', goto: ['katja_sex', 'katnatsex3'] },
      { label: 'Groaning help Katja', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/KWS7.jpg');
    scene.text('You can only lick your lips as the ginger goddess smiles with grace and positions herself against the headboard. Then languidly, Katja opens her thighs so you can feast on her nectar, but as you kneel, the ginger grabs a spaced-out Natasha and makes her cuddle against her crotch.');
    // TODO-QSP: dynamic text: "Hm? Don't worry <<$pcs_nickname>>, Natasha is in good hands."
    scene.text(`"Hm? Don't worry ${((s as any).pcs_nickname ?? 0)}, Natasha is in good hands."`);
    scene.text('She smiles as you pout and try on puppy eyes, but the cold bitch just caresses and kisses the nerdy girl as Natasha gives you sideways looks. Ok, message received. You are now her bitch… sigh… Time to serve your mistress!');
    // TODO-QSP: dynamic text: "Ouch! <<$pcs_nickname>>!"
    scene.text(`"Ouch! ${((s as any).pcs_nickname ?? 0)}!"`);
    scene.text('You smile, kissing the hickey that has just mysteriously appeared on Katja\'s thigh and amorously, open her womanhood folds so your tongue can lick the redhead\'s little love button. Her abstracted moans mix with Natasha\'s insecure kisses as you take your time to take pleasure on the hotness between her legs, enjoying the slow cunnilingus as Katja approaches her orgasm. Finally, when she reaches it, you are so engrossed in the act that you practically lose it in the delicious moment when she tenses and relaxes.');
    scene.text('"Now it\'s my turn, isn\'t it Katja?"');
    scene.text('Natasha practically doesn\'t react, happily snuggling under the redhead\'s care, who somewhat tiredly(but satisfied) looks at you expectantly.');
    qspCall(s, 'arousal', 'cuni_give', 10, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Cuddles', goto: ['katja_sex', 'katnatsex2'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterKatnatsex2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'arousal', 'voyeur', 5, 'lesbian');
  (s as any).NatbelQW['Debt'] = ((s as any).NatbelQW['Debt'] ?? 0) - (500);
  if (((s as any).succubusflag ?? 0) === 1) {
    (s as any).scfeed = ((s as any).succublvl ?? 0) + ((s as any).rand ?? 0)(1, 4);
    (s as any).sexnutrition = ((s as any).sexnutrition ?? 0) + (30 * ((s as any).scfeed ?? 0));
    (s as any).succubxp = ((s as any).succubxp ?? 0) + (6);
  }
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/sex/KWS9.jpg');
  scene.text('The three of you lie on Katja\'s bed. It\'s quiet and nice, with a sleeping hot redhead at your left and a submissive nerd at your right.');
  // TODO-QSP: dynamic text: "Ehm… <<$pcs_nickname>>, you know… my debt…"
  scene.text(`"Ehm… ${((s as any).pcs_nickname ?? 0)}, you know… my debt…"`);
  scene.text('"Hm? Oh yeah! I suppose that you have paid for something. I think it\'s best if you leave. I want to spend some time with Katja."');
  scene.text('Natasha doesn\'t say anything. She just gets up and begins to redress, giving you a nice glance at her body, but before she leaves, you give her a signal to approach, then grab her hair and kiss her mouth. After a few moments, you release the nerd, who remains by the bedside a moment before giving Katja a quick peek that awakes the sleeping redhead. Before Katja can say anything, she exits the room.');
  // TODO-QSP: dynamic text: "Hm?! What? <<$pcs_nickname>>? Huff! I'm wasted! That was nice… Hm? Where is Nat...
  scene.text(`"Hm?! What? ${((s as any).pcs_nickname ?? 0)}? Huff! I'm wasted! That was nice… Hm? Where is Natasha?"`);
  scene.text('Kissing her, you explain to the redhead that Natasha has just left and then you snuggle against Katja, enjoying her company until you think it\'s time to redress.');
  scene.actions([
    { label: 'Redress and leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    qspCall(s, 'clothing', 'wear_last_worn');
    qspCall(s, 'underwear', 'restore');
    qspCall(s, 'shoes', 'wear', 'last_worn');
    qspCall(s, 'purses', 'wear', 'last_worn');
    qspCall(s, 'coats', 'wear', 'last_worn');
  }, goto: ['pav_residential', ''] },
  ]);
  scene.build();
}

function enterKatnatsex3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'arousal', 'voyeur', 5, 'lesbian');
  (s as any).NatbelQW['Debt'] = 0;
  qspCall(s, 'npc_relationship', 'modify', 'A14', (-5));
  if (((s as any).succubusflag ?? 0) === 1) {
    (s as any).scfeed = ((s as any).succublvl ?? 0) + ((s as any).rand ?? 0)(1, 4);
    (s as any).sexnutrition = ((s as any).sexnutrition ?? 0) + (30 * ((s as any).scfeed ?? 0));
    (s as any).succubxp = ((s as any).succubxp ?? 0) + (6);
  }
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/sex/KWS9.jpg');
  scene.text('Too tired to really do anything, Natasha and you cuddle with Katja. It\'s quiet and nice, with a hot redhead at your left and a submissive nerd at your right.');
  // TODO-QSP: dynamic text: "Ehm… <<$pcs_nickname>>, you know… my debt…"
  scene.text(`"Ehm… ${((s as any).pcs_nickname ?? 0)}, you know… my debt…"`);
  scene.text('"Hm? Oh yeah! I suppose that you have paid something."');
  // TODO-QSP: dynamic text: "Yes Natasha, she will forget ALL your debt. You are friends aren't you <<$pcs_n...
  scene.text(`"Yes Natasha, she will forget ALL your debt. You are friends aren't you ${((s as any).pcs_nickname ?? 0)}?"`);
  scene.text('You turn surprised towards the redhead… Shit! Before you can retort, a horny and frustrated Natasha gets up and begins to redress, giving you a nice glance at her body, but before she leaves, Katja grabs her hand and kisses the nerd\'s mouth. After a few moments, she releases Natasha, who remains by the bedside a moment, before quickly exiting the room.');
  scene.text('Katja is silent for a while, caressing your belly before sighing and redressing. She doesn\'t say anything, but you doubt she is happy.');
  scene.actions([
    { label: 'Redress and leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    qspCall(s, 'clothing', 'wear_last_worn');
    qspCall(s, 'underwear', 'restore');
    qspCall(s, 'shoes', 'wear', 'last_worn');
    qspCall(s, 'purses', 'wear', 'last_worn');
    qspCall(s, 'coats', 'wear', 'last_worn');
  }, goto: ['pav_residential', ''] },
  ]);
  scene.build();
}

function enterFirstFisting(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  scene.text('You tell Katja that of course, you would love to show her how it feels to have a whole hand in your pussy. You tell her to strip off her clothes while you do the same and climb onto the bed with her.');
  scene.actions([
    { label: 'Lay her down', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay_give', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/home/fisting/fisting1.jpg');
    scene.text('Katja looks nervous as you lay her back on the bed. You give her a reassuring kiss before slowly moving down her body. She teeth bites her lip, as she watches you with anticipation, already thinking to herself she shouldn\'t have asked for this. But she has come this far, it was too late to back out now. You move down her body letting your hands wander, cupping her breasts to place loving kisses on each nipple. Katja smiles down at you and gives a sigh of resignation, "Mmm, I can\'t believe I\'m going through with this. Just be gentle… Please?" You nod with a sultry smile, reassuring her once again before you trail more kisses, down her stomach, and between her legs.');
    scene.actions([
      { label: 'Get her ready', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'cuni_give', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/home/fisting/fisting2.jpg');
    scene.text('You give her clit one long loving kiss, sucking on it, before lapping along her slit and letting your tongue slip between her velvety folds. Katja\'s hands reach down and grip the top of your head, pushing you deeper into her. Your tongue slipping further and further inside as you continue to lick every part of her insides and around her labia too. You can hear Katja\'s breath growing louder as you send waves of pleasure through her body. You pick up the pace as your first goal is to bring her to her orgasm, to make sure she is wet enough for the trial ahead. You feel her legs wrapping around your head as she pulls you even closer to her. Keeping a steady pace your tongue explores her folds, lapping every place inside of her. You feel her whole body shake as you reach up with your hand and cup it below her wet vagina, getting it sopping wet from her climax as she moans out her first release.');
    scene.actions([
      { label: 'Slip in first finger', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal_finger_give', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/home/fisting/fisting3.jpg');
    scene.text('Pulling away from her, you add your own saliva to your wet hand and reach forward and rub along her labia. Katja pulls out a clitoral stimulator and holds it to her pink button, looking down at you with lust-filled eyes. "Are you ready Katja?", you ask with a mischievous look in your eye. Her only response is to nod and close her eyes. Grinning you slip in the first finger, making sure to get as much natural lube in as you can, sliding your thumb up to press down on the tip of her toy against her clit, pinching it from behind her folds, and letting your finger run along the sensitive parts hidden from view.');
    scene.actions([
      { label: 'Add the second finger', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal_finger_give', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/home/fisting/fisting4.jpg');
    scene.text('Slipping two fingers into her wet slit, you begin to thrust into her, slowly at first and then picking up speed as you twist your hand around and try to loosen her up as much as you can. Katja bucks against your hand as you start to really get into it, staring into her eyes and enjoying her reactions to your ministrations. ');
    scene.actions([
      { label: 'Add another finger', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal_finger_give', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/home/fisting/fisting5.jpg');
    scene.text('Keeping your pace steady you add a third finger. Katja responds by moaning louder and squirming. You must hold her legs open as she reflexively tries to close them. Twisting your wrist and making sure to hit all the right places, sending waves of pure bliss through the redhead\'s nethers.');
    scene.actions([
      { label: 'Add the fourth finger', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal_finger_give', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/home/fisting/fisting6.jpg');
    scene.text('Carefully you add your little finger, giving her small little thrusts until half of your hand slides into her. Rubbing your thumb against the tip of the clitoral wand, you curl your fingers up against her G-spot just behind it. Katja cries out in ecstasy once more as you bring her to another climax, adding moisture to her already wet snatch');
    scene.actions([
      { label: 'Push the whole hand in', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal_fist_give', 5, 'lesbian');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/home/fisting/fisting7.jpg');
    scene.text('Curling your thumb against your palm you slide it inside and give your hand a final push, feeling the walls of Katja\'s labia sliding along it until finally it clamps down around your wrist. You take a moment to watch your friend\'s face, as the realization that it\'s all the way sinks into her. Katja\'s mouth opens in a large \'O\', and doesn\'t take her long to move her hips around your unmoving hand. Smiling, you lean down and lick along her clit, and around the buzzing toy, finally, your hand starts to move again, pushing and twisting inside of her, pulling out ever so slightly before pushing back in. Her wetness overflows around your wrist, flooding the sheets like a waterfall, with each thrust of your arm, soon you can pull your hand halfway out, before sliding it back in just as easily. Katja\'s pussy starts quivering around your hand as she orgasms once more, you keep your pace, pushing, pulling and twisting the whole way through it, she moans and cries out as her pleasure hits a crescendo, two more times almost non-stop. She moans and screams as her body continues to climax over and over again, each time your knuckle presses her G-spot. Then you finally slow down and give her clit one more long lick, before sliding your hand out.');
    scene.actions([
      { label: 'Pull out', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal_fist_give', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/home/fisting/fisting8.jpg');
    scene.text('Katja tries to catch her breath, but her body continues to convulse… each light touch sending shivers through her body, but she keeps the vibrating toy on her clit, riding her pleasure as long as she can. As your hand exists, you can see the gape of her vaginal walls, pulsing and squeezing as if to grip something that was no longer there.');
    scene.actions([
      { label: 'Cuddle her', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    if (((s as any).npc_vag ?? 0)?.['A14'] < 33) {
      (s as any).npc_vag['A14'] = ((s as any).npc_vag['A14'] ?? 0) + (3);
    } else {
      (s as any).npc_vag['A14'] = 36;
    }
    (s as any).katjaQW['horny'] = 0;
    (s as any).katjaQW['slut'] = ((s as any).katjaQW['slut'] ?? 0) + (5);
    if (((s as any).katjaQW ?? 0)?.['fisted_vag'] === 0) {
      (s as any).katjaQW['fisted_vag'] = 1;
    }
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/home/fisting/fisting9.jpg');
    scene.text('As you are sliding your body up and climbing up on top of Katja to hold her, her body still shakes as she deals with the aftershocks. You lost count of how many times she cried out in new pleasure. She finally lets the buzzing toy drop to the side of the bed, wraps you in her arms and kisses you deeply. "Oh My God… oh my god… my body won\'t stop… what did you do to me?…Ahhhh" she gasps out, as another one hits her stronger than the last few, she holds you tighter and squeezes you more as she rides through it, and relaxes afterward, breathing heavily as if she just ran a marathon. "We definitely need to do that again, but not right away, I think I need to recover after that." ');
    if (((s as any).mey_vika ?? 0)?.['key'] === 1) {
      scene.actions([
        { label: 'Leave the room', goto: ['mey_home', 'start'] },
      ]);
    } else {
      scene.actions([
        { label: 'Say goodbye and leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
      ]);
    }
    scene.actions([
      { label: 'Talk with Katja', goto: ['KatjaHomeTalk', ''] },
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

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'park':
      enterPark(s, scene);
      break;
    case 'prohorov_sex':
      enterProhorovSex(s, scene);
      break;
    case 'marcus_wait':
      enterMarcusWait(s, scene);
      break;
    case 'marcus_first':
      enterMarcusFirst(s, scene);
      break;
    case 'marcus_threesome':
      enterMarcusThreesome(s, scene);
      break;
    case 'marcus_aftermatch':
      enterMarcusAftermatch(s, scene);
      break;
    case 'katnatsex1':
      enterKatnatsex1(s, scene);
      break;
    case 'katnatsex2':
      enterKatnatsex2(s, scene);
      break;
    case 'katnatsex3':
      enterKatnatsex3(s, scene);
      break;
    case 'first_fisting':
      enterFirstFisting(s, scene);
      break;
    default:
      enterPark(s, scene);
      break;
  }
}

export const katja_sex: LocationDef = {
  name: 'katja_sex',
  title: 'After months of winter, spring is finally here. Flowers begi',
  region: 'other',
  description: ['After months of winter, spring is finally here. Flowers begin to bloom, new leaves grow on the trees and puddles of melted snow litter the ground.'],
  enter: enter,
};
