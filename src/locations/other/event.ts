import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterKlof2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/jora/15 1.jpg');
  scene.text('"Well baby, come and see us if you want more entertainment, and if you behave, you can earn some cash"');
  scene.text('- "Okay, guys give her our address."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get dressed', goto: ['event', 'klof 3'] },
  ]);
  scene.build();
}

function enterKlof3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).klofQW = 2;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/jora/15 1.jpg');
  scene.text('With sudden curiosity, you ask:');
  scene.text('"You guys can help me earn some money?"');
  scene.text('"Of course, Come visit us in the afternoons and we\'ll talk", the guy says and smirks at you.');
  scene.text('(It turns out, they live really close to you.)');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_park', 'start'] },
  ]);
  scene.build();
}

function enterCityPark(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/centralpark/sex/event/benchkiss.jpg');
  scene.text('You find a quiet, deserted bench off the main paths, you sit together and you start to kiss, but you want more.');
  qspCall(s, 'arousal', 'kiss', 5);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Masturbate him', goto: ['event', 'hand'] },
    { label: 'Suck', goto: ['event', 'blow'] },
    { label: 'Fuck', goto: ['event', 'sex'] },
  ]);
  scene.build();
}

function enterHand(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/centralpark/sex/event/event.jpg');
  // TODO-QSP: dynamic text: Without breaking the kiss you deftly unbutton his pants <<$boydesc>> and start t...
  scene.text(`Without breaking the kiss you deftly unbutton his pants ${((s as any).boydesc || '')} and start to wank your ${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)] ?? ''} cm friend. Unable to withstand such pressure he spills his seed on the ground.`);
  qspCall(s, 'arousal', 'hj', 5, 'dom');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish walk', goto: ['city_park', 'start'] },
  ]);
  scene.build();
}

function enterBlow(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/centralpark/sex/event/event1.jpg');
  // TODO-QSP: dynamic text: You get on your knees, unbutton his pants, and dramatically immerse yourself in ...
  scene.text(`You get on your knees, unbutton his pants, and dramatically immerse yourself in sucking his member, looking up as his face relaxs. After a few minutes the ${((s as any).boydesc || '')} tenses in anticipation of orgasm`);
  qspCall(s, 'arousal', 'bj', 5, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue sucking.', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).boy ?? 0), 1);
    scene.img('images/shared/sex/cum/mouth/cum30.jpg');
    // TODO-QSP: dynamic text: A jet of hot sperm hits you in the mouth. You begin to swallow cum, and <<$boyde...
    scene.text(`A jet of hot sperm hits you in the mouth. You begin to swallow cum, and ${((st as any).boydesc || '')} continues to cum in your mouth. Finally, the flow of hot pungent liquid stops.`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'city_park', 'start');
  } },
    ]);
  } },
    { label: 'Remove from your mouth.', handler: (st: GameState) => {
    if (((st as any).npc_gentle ?? 0)?.[String((st as any).boy ?? 0)] === 1) {
      scene.img('images/shared/sex/handjob/hj.jpg');
      // TODO-QSP: dynamic text: You take his cock out of your mouth and <<$boydesc>> finishes in your hand.
      scene.text(`You take his cock out of your mouth and ${((st as any).boydesc || '')} finishes in your hand.`);
    } else {
      if (((st as any).npc_rough ?? 0)?.[String((st as any).boy ?? 0)] === 0) {
        (st as any).tiprand = (Math.floor(Math.random() * 4) + 0);
        if ((Math.floor(Math.random() * 4) + 0) < 3) {
          scene.img('images/shared/sex/handjob/hj.jpg');
          // TODO-QSP: dynamic text: You take his cock out of your mouth and <<$boydesc>> finishes in your hand.
          scene.text(`You take his cock out of your mouth and ${((st as any).boydesc || '')} finishes in your hand.`);
        } else {
          (st as any).spafinloc = 11;
          qspCall(st, 'cum_manage', '');
          scene.img('images/shared/sex/cum/facial/facial0,8.jpg');
          // TODO-QSP: dynamic text: You took his cock out of your mouth and immediately <<$boydesc>> cums directly o...
          scene.text(`You took his cock out of your mouth and immediately ${((st as any).boydesc || '')} cums directly on your face, covering it with his warm and sticky seed.`);
        }
      } else {
        (st as any).spafinloc = 11;
        qspCall(st, 'cum_manage', '');
        scene.img('images/shared/sex/cum/facial/facial0,8.jpg');
        // TODO-QSP: dynamic text: <<$boydesc>> holds your hair, pulls his dick out of your mouth and finishes on y...
        scene.text(`${((st as any).boydesc || '')} holds your hair, pulls his dick out of your mouth and finishes on your face. Covering it with warm and sticky cum.`);
      }
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'city_park', 'start');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSex(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/centralpark/sex/event/event2.jpg');
  (s as any).pose = 1;
  scene.img('images/shared/sex/vag/doggy/dog.jpg');
  // TODO-QSP: dynamic text: You remove your heels, pull down your pants, and shake your ass invitingly. <<$b...
  scene.text(`You remove your heels, pull down your pants, and shake your ass invitingly. ${((s as any).boydesc || '')} pushes you onto all fours, and abruptly enters you`);
  qspCall(s, 'arousal', 'vaginal', 15, 'sub');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Complete walk', goto: ['city_park', 'start'] },
  ]);
  scene.build();
}

function enterDima(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('Seeing that you are interested, the man walks up to you.');
  scene.text('He stands in front of you and asks politely:');
  scene.text('"Hey girl. You look lonely there, maybe you can help me out."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Not interested', goto: ['shop', 'start'] },
    { label: 'Help him?', handler: (st: GameState) => {
    scene.text('"Help you how, exactly?" you ask.');
    scene.text('"Well you see, my friend is visiting me and my wife, and you well, three\'s a bit awkward. However, if you join us for a drink and a chat, it would be much more relaxed. I promise it won\'t be boring.');
    scene.actions([
      { label: 'No', goto: ['shop', 'start'] },
      { label: 'Yes', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    scene.text('"Thanks, My name is Dmitry".');
    // TODO-QSP: dynamic text: You hold out your hand to him - "<<$pcs_nickname>>".
    scene.text(`You hold out your hand to him - "${((st as any).pcs_nickname || '')}".`);
    scene.text('He was a man in his forties, average height, a pretty strong constitution, short dark hair, nose slightly hooked. Off you go, speaking about the weather, and current affairs. Finally, Dima says that you had arrived at his home. The house is a two-story, pretty cute. In the living room there is a man holding a bottle of beer.');
    scene.text('"Hi Dima, and I was bored and didn\'t know what to do", he says and adds, "What a beautiful woman you have with you, this lovely girl will surely brighten up our evening.". His eyes look all over your body and stop on your breasts.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>> meet Aleksei, my friend. My wife is not home yet, she went to...
    scene.text(`"${((st as any).pcs_nickname || '')} meet Aleksei, my friend. My wife is not home yet, she went to see her mother, the train must be running late. Luda should be here soon and then we will be at full strength" Dima said smiling.`);
    // TODO-QSP: dynamic text: "Aleksei, but you can call me Alex" introduced his friend. He was slightly talle...
    scene.text(`"Aleksei, but you can call me Alex" introduced his friend. He was slightly taller than Dima and looked a little older. Dark-haired with blue eyes, a rather handsome man. You thought to yourself, "What am I doing here?" Probably, there is no wife, it's not too late to get out of here! But Dmitry puts his arm around your waist and leads you into the kitchen. "Alex, you have set the table without me, well done!" says Dmitry. "Here, have a seat in the middle ${((st as any).pcs_nickname || '')}, we will look after you" said Alex while helping you sit. On the table are plates of snacks and a bottle of vodka. Dima pours the vodka. You say:`);
    scene.text('"I don\'t usually drink vodka." Maybe this was a bad idea.');
    qspCall(st, 'willpower', 'drink', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Make excuses and go', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Make excuses and go', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspGoto(st, 'city_residential', '');
  } },
      ]);
    }
    scene.actions([
      { label: 'Drink vodka', goto: ['event', 'dima2'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDima2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A169');
  qspCall(s, 'npcStat', 'A170', 'a');
  qspCall(s, 'stat', '');
  scene.text('You drank one shot, then another, and so on, until you are a little tipsy. The men took turns to telling you entertaining stories, you had a lot of fun. The wife did not come of course, but you never thought to ask about it.');
  scene.text('Dima turns on some music, and invites you to dance. Alexei protested, "You can\'t dance with Dima and not me!"');
  scene.text('You smile at Alex. Dima immediately begins to grope your ass, you dance slowly, and so close to each other, that you can feel his erect penis pressed against your crotch. Alex cames up behind you, holds your shoulders and his hands began to slowly lower to your chest.');
  scene.text('Drunk and the presence of two excited men has an effect. You shamelessly twist your hips, alternating between pushing your ass against Alexs groin and then forwards to caress Dimas cock. Alexei caresses and squeezes your breasts, pinching your nipples through the fabric.');
  scene.text('Dima rubs your pussy through your clothes. You softly moan with excitement. Then the men begin to undress you. You stand between the two men in just your panties and horny and desiring both of them.');
  scene.text('"Just beautiful. Look Alex, at this lustful bitch I have brought!"');
  scene.text('"Yes, my friend. She will be our whore today. Do you want us to fuck you?" asks Alex.');
  scene.text('"Look how wet this whore is, she\'s just waiting for us to fuck her!" Dima roughly pulls aside your panties and thrusts his fingers into your pussy.');
  qspCall(s, 'arousal', 'vaginal_finger', 5, ((s as any).npcID ?? 0), 'sub', 'group');
  qspCall(s, 'arousal', 'foreplay', (-5), ((s as any).npcID1 ?? 0), 'sub', 'group');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Moan with pleasure', goto: ['event', 'dima3'] },
  ]);
  scene.build();
}

function enterDima3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.text('They take you to the bedroom. In an instant, your gallant gentlemen turn into animals, and you into a whore. This turns you on even more. In the bedroom stands a large bed, the men unzip their pants and take out their huge cocks.');
  scene.text('"Go on start sucking, I see that you want it" says Alex.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Kneel down', goto: ['event', 'dima4'] },
  ]);
  scene.build();
}

function enterDima4(s: GameState, scene: SceneBuilder): void {
  (s as any).guy = ((s as any).guy ?? 0) + (2);
  qspCall(s, 'arousal_funcs', 'stretch', 'oral', 1);
  scene.img('images/characters/city/dmitry/sex/dima.jpg');
  scene.text('They stand next to the bed, you kneel down and take Alexs dick in your mouth then Dimas. First you suck and lick the heads, then start swallowing right down the shaft.');
  scene.text('Dima takes you by the chin, spits in your mouth and begins to slap his cock against your cheeks, then sitting on the bed, grabs you by the hair and begins to roughly fuck you in the mouth, periodically slaping your cheeks.');
  scene.text('"Come on you cocksucking whore", he says to you, tears flowing down your cheeks, he humiliates you and calls you names and fucks your mouth harder. You try to please him.');
  scene.text('Seemingly run out insults, Alex stands you up and bends you over the bed. He rips off your panties, puts his fingers in your pussy then ass, then spits on your ass, and roughly forces his cock in.');
  qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID ?? 0), 'sub', 'group', 'deepthroat', 'rough');
  qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID1 ?? 0), 'sub', 'group', 'deepthroat', 'rough');
  qspCall(s, 'arousal', 'vaginal_finger', (-10), ((s as any).npcID1 ?? 0), 'sub', 'group', 'rough');
  qspCall(s, 'arousal', 'anal_finger', (-10), ((s as any).npcID1 ?? 0), 'sub', 'group', 'rough');
  (s as any).anal_slip = ((s as any).anal_slip ?? 0) + (4);
  qspCall(s, 'arousal', 'anal', (-10), ((s as any).npcID1 ?? 0), 'sub', 'group', 'rough');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Scream in pain', goto: ['event', 'dima5'] },
  ]);
  scene.build();
}

function enterDima5(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal_funcs', 'stretch', 'oral', 1);
  qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
  (s as any).spafinloc = 4;
  qspCall(s, 'cum_manage', '');
  (s as any).spafinloc = 12;
  qspCall(s, 'cum_manage', '');
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/dmitry/sex/dima1.jpg');
  scene.text('You want to scream, but with your mouth is filled by Dimas cock, you can only utter incomprehensible sounds. Swallowing cock deep into your throat. Your anus burning in pain, Alex fucks you in the ass and Dima in your mouth.');
  scene.text('"Slut we will fuck you all night in all your holes" says Alex.');
  scene.text('The room was full of fucking noises. You orgasm. Dima sometimes pulls his dick out to spit in your mouth before fucking your face again. And Alex starts slapping your ass, with every thrust his balls beat against your pussy, bringing you to all new pleasures. "Fuck me boys, I\'ll do whatever you want" you thought to yourself. Dima stiffened and says:');
  scene.text('"Swallow it all! Bitch!"');
  scene.text('Cum begins to pour down your throat, you almost choke on it, but manage it swallow it all and lick his cock to make sure you didn\'t miss any.');
  scene.text('"Come on Alex, stretch this slut."');
  scene.text('Alex also starts to cum, his sperm is hot inside. He pulls out his dick and orders:');
  scene.text('"Lick it, bitch."');
  qspCall(s, 'arousal', 'bj', 10, ((s as any).npcID ?? 0), 'sub', 'group', 'deepthroat', 'rough');
  qspCall(s, 'arousal', 'anal', (-10), ((s as any).npcID1 ?? 0), 'sub', 'group', 'rough');
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0), 1);
  qspCall(s, 'cum_call', 'anus', ((s as any).npcID1 ?? 0), 1);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Lick', goto: ['event', 'dima6'] },
  ]);
  scene.build();
}

function enterDima6(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
    (s as any).pcs_makeup = 0;
  }
  (s as any).spafinloc = 12;
  qspCall(s, 'cum_manage', '');
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/dmitry/sex/dima2.jpg');
  scene.text('You turned around and take his dick in your mouth and suck it thoroughly. Now finished you all go back to the kitchen and start drinking again.');
  scene.text('"Did you like how we fucked you?"');
  qspCall(s, 'arousal', 'bj', 10, ((s as any).npcID1 ?? 0), 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Very much', goto: ['event', 'dima7'] },
  ]);
  scene.build();
}

function enterDima7(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
  qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
  scene.img('images/characters/city/dmitry/sex/dima3.jpg');
  scene.text('"You are a proper slut now, we will fuck you from both sides" says Dima.');
  scene.text('Dima squeezes your chest and bites your nipples and Alex begins to greasing your ass. You slowly get up and go back into the bedroom.');
  scene.text('Alex lies back, you straddle him, guiding his dick into your pussy, fucking him, he pulls himself up to kiss you, you bend down and Dima roughly enters your ass.');
  scene.text('Now you have two huge dicks in you, you start moaning. "More, more, fuck me, I\'m your whore! Fuck my holes!" You cried. It was amazing having two dicks in your holes, two strangers fucking you and you moan like a whore.');
  scene.text('You ask them to not stop. You\'re cumming and cumming. They finish almost simultaneously right inside you.');
  scene.text('You get up and go back to the kitchen, with cum flowing from your ass and pussy. You can hardly walk.');
  scene.text('"Alex, you have two more days, I won\'t be back until next week, you can have this bitch to yourself, if you want?"');
  scene.text('"Of course. I\'ll have to properly spank her to keep her obedient."');
  scene.text('Dima says, "Do what you want, I need to go to work in the morning, I\'m going to bed."');
  scene.text('Alex picks up a belt, grabs you by your hand and leads you into the hall. Dima went to bed.');
  (s as any).orgasm_or = 'yes';
  qspCall(s, 'arousal', 'vaginal', 10, ((s as any).npcID1 ?? 0), 'sub', 'group', 'rough');
  qspCall(s, 'arousal', 'anal', (-10), ((s as any).npcID ?? 0), 'sub', 'group', 'rough');
  qspCall(s, 'cum_call', 'vagina', ((s as any).npcID ?? 0), 1);
  qspCall(s, 'cum_call', 'anus', ((s as any).npcID1 ?? 0), 1);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'No please… I\'ll do whatever you want!', goto: ['event', 'dima8'] },
  ]);
  scene.build();
}

function enterDima8(s: GameState, scene: SceneBuilder): void {
  (s as any).spank = ((s as any).spank ?? 0) + (1);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/dmitry/sex/dima4.jpg');
  scene.text('"Please" you beg with tears in your eyes, "I will do whatever you want."');
  scene.text('"You say you will, but this way I will know."');
  scene.text('He puts you doggy-style on the floor and starts beating your ass with the belt, you cry and beg him to stop. Ass burning with pain. Each hit getting more painful.');
  scene.text('"Get up bitch!" he ties your hands with the belt, "suck my dick before bedtime."');
  qspCall(s, 'pain', '', 2, 'asscheeks', 'spank');
  // TODO-QSP: end
  scene.actions([
    { label: 'Suck', goto: ['event', 'dima9'] },
  ]);
  scene.build();
}

function enterDima9(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal_funcs', 'stretch', 'oral', 1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/dmitry/sex/dima5.jpg');
  scene.text('Alex holds your head and starts to fuck your mouth, it does not last very long. His dick is big and goes deep into your throat, he holds your hair. When he has finished, he ties you to a radiator and collapses on the sofa bed.');
  qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID1 ?? 0), 'sub', 'deepthroat', 'rough', 'bound');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Cry from the beating', goto: ['event', 'dima10'] },
  ]);
  scene.build();
}

function enterDima10(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  (s as any).dimaQW = 2;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/dmitry/sex/dima6.jpg');
  scene.text('You are tied to the radiator weeping uncontrolably. Your ass is on fire after the whipping. The drunken men have gine to bed. Finally you hear them snoring loudly.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Struggle free and escape', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'city_residential', '');
  } },
    { label: 'Fall asleep', goto: ['event', 'dima11'] },
  ]);
  scene.build();
}

function enterDima11(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sleep_simple', 'forced', 480);
  (s as any).datster = 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/dmitry/sex/dima7.jpg');
  scene.text('You are awaken by someone grabbing your hair and shamelessly fucking you in the mouth.');
  scene.text('"I bet you\'re hungy", you recognize Dimas\' voice, "Breakfast must be earned!"');
  qspCall(s, 'arousal', 'bj', 10, ((s as any).npcID ?? 0), 'sub', 'deepthroat', 'rough', 'bound');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Suck', goto: ['event', 'dima12'] },
  ]);
  scene.build();
}

function enterDima12(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal_funcs', 'stretch', 'oral', 1);
  scene.img('images/characters/city/dmitry/sex/dima8.jpg');
  scene.text('You feel his cock stiffen and begin to fire warm sperm down your throat. He finishes with a contented sigh, then, in a vicious tone he orders you, "Lick by balls to a shine, otherwise no breakfast for you."');
  qspCall(s, 'arousal', 'bj', 10, ((s as any).npcID ?? 0), 'sub', 'deepthroat', 'rough', 'bound');
  qspCall(s, 'arousal', 'foreplay_give', (-10), ((s as any).npcID ?? 0), 'sub');
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0), 1);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Grudgingly comply', goto: ['event', 'dima13'] },
    { label: 'Enthusiastically lick his balls', goto: ['event', 'dima14'] },
    { label: 'Bite his balls', goto: ['event', 'dima31'] },
  ]);
  scene.build();
}

function enterDima13(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).balls = ((s as any).balls ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/dmitry/sex/dima9.jpg');
  scene.text('You lick and suck his shaven balls, but he doesn\'t seem to like it. After a couple of minutes, he slaps you and says:');
  scene.text('"What the fuck? I\'m going to have to teach you some obedience!"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Look down', goto: ['event', 'dima39'] },
  ]);
  scene.build();
}

function enterDima14(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/dmitry/sex/dima9.jpg');
  scene.text('You remember having seen this done in a porno, and try to emulate. Your tongue and lips lick and kiss every millimeter, moistening the tender skin. Then a smooth transition to his cock which you swallow whole, he immediately pushes against your head and rapidly fucks your throat again, without releasing, until his cock starts convulse');
  qspCall(s, 'arousal', 'bj', 10, ((s as any).npcID ?? 0), 'sub', 'group', 'deepthroat', 'rough', 'bound');
  qspCall(s, 'cum_call', 'mouth_swallow', 'A169', 1);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Swallow', goto: ['event', 'dima15'] },
  ]);
  scene.build();
}

function enterDima15(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  (s as any).runrnd = (Math.floor(Math.random() * 11) + 0);
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/dmitry/sex/dima6.jpg');
  scene.text('Dima unties you from the radiator. He throws you a parcel and orders you to go the bathroom and freshen up, as he goes and talks to Alexsei.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Try to escape', handler: (st: GameState) => {
    if (((st as any).runrnd ?? 0) < 9) {
      qspGoto(st, 'event', 'dima18');
    } else {
      qspCall(st, 'arousal', 'end');
      qspGoto(st, 'city_residential', '');
    }
  } },
    { label: 'Go to the bathroom', goto: ['event', 'dima16'] },
  ]);
  scene.build();
}

function enterDima16(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  (s as any).lobkoef = 3;
  (s as any).cumspclnt = 20;
  qspCall(s, 'cum_cleanup', '');
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/dmitry/sex/dima6.jpg');
  scene.text('You convolse as you find a mesh bodysuit in the parcel. In the bathroom, you wash off the thick layer of sperm and shave as needed, then apply makeup.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Wear bodysuit', goto: ['event', 'dima19'] },
    { label: 'Don\'t wear bodysuit', goto: ['event', 'dima17'] },
  ]);
  scene.build();
}

function enterDima17(s: GameState, scene: SceneBuilder): void {
  (s as any).runrnd = (Math.floor(Math.random() * 11) + 0);
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/dmitry/sex/dima6.jpg');
  scene.text('You leave the bathroom in the buff, despite the instructions');
  // TODO-QSP: end
  scene.actions([
    { label: 'See Alex in the hall', handler: (st: GameState) => {
    if (((st as any).runrnd ?? 0) < 9) {
      qspGoto(st, 'event', 'dima18');
    } else {
      qspGoto(st, 'event', 'dima21');
    }
  } },
  ]);
  scene.build();
}

function enterDima18(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/dmitry/sex/dima6.jpg');
  scene.text('"Oh, we have a defiant bitch! You think you can do what you want? Fuck! You\'re nobody here, and you will do what you are told! You like to go naked in public? Great! We\'ll help you!" With these words something is sprayed in your face, and you passed out.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Fall asleep', goto: ['event', 'dima49'] },
  ]);
  scene.build();
}

function enterDima19(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('Subdued and in shock, you have lost any desire to stand up to these men');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to them', goto: ['event', 'dima20'] },
  ]);
  scene.build();
}

function enterDima20(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('"Well done, bitch. Now that you are well trained, time for your reward"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Obey the men unreservedly', goto: ['event', 'dima21'] },
  ]);
  scene.build();
}

function enterDima21(s: GameState, scene: SceneBuilder): void {
  (s as any).dimaQW = 2;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/dmitry/sex/dima3.jpg');
  scene.text('They fuck you for a long time in various poses, some of which would be the envy of the most perverted sexual deviants. After this, they let you go');
  (s as any).orgasm_or = 'yes';
  qspCall(s, 'arousal', 'bj', 20, ((s as any).npcID ?? 0), 'sub', 'group', 'deepthroat', 'rough');
  qspCall(s, 'arousal', 'bj', 20, ((s as any).npcID1 ?? 0), 'sub', 'group', 'deepthroat', 'rough');
  qspCall(s, 'arousal', 'vaginal', (-20), ((s as any).npcID ?? 0), 'sub', 'group', 'rough');
  qspCall(s, 'arousal', 'vaginal', (-20), ((s as any).npcID1 ?? 0), 'sub', 'group', 'rough');
  qspCall(s, 'arousal', 'anal', (-20), ((s as any).npcID ?? 0), 'sub', 'group', 'rough');
  qspCall(s, 'arousal', 'anal', (-20), ((s as any).npcID1 ?? 0), 'sub', 'group', 'rough');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enterDima30(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 180;
  (s as any).dimaQW = 2;
  qspCall(s, 'stat', '');
  scene.text('I confess, I am a sinner, a writer from me worthless, and all my dark little thoughts went to the recent arrival of women. If there are interesting ideas/scenarios to continue - fling in a personal, zabubenyu');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enterDima31(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  (s as any).dimaQW = 2;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/dmitry/sex/dima6.jpg');
  scene.text('You squeeze your teeth together, but Dimas quickly grabs your face and your jaw slackens.');
  scene.text('"Bitch, you think you can get away with that?!"');
  scene.text('You feel a strong blow to your face and lose consciousness.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Wake up', goto: ['event', 'dima32'] },
  ]);
  scene.build();
}

function enterDima32(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/street/sex/10028_tommypistoljacquelineblacklady_180.jpg');
  scene.text('You wake up to a bright light, making you squint. Your mouth is dry. What is stopping you from shutting your mouth? Your body aches.');
  scene.text('"Oh, you\'re awake! Just in time for your lessons!" Says Alex.');
  scene.text('You look around. While you were unconscious, you were dressed and taken to the street. In your mouth, a metallic taste. Your hands are tied behind your back.');
  scene.text('"And now, bitch, I\'ll teach you safe sex".');
  scene.text('With these words, Alex puts you on your knees in front of him, he pulls out his penis and puts it in your mouth.');
  qspCall(s, 'arousal', 'bj', 10, ((s as any).npcID1 ?? 0), 'sub');
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'misc', 'self', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Kick', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Kick', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    qspGoto(st, 'event', 'dima37');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Resist', goto: ['event', 'dima33'] },
  ]);
  scene.build();
}

function enterDima33(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal_funcs', 'stretch', 'oral', 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/street/sex/10028_tommypistoljacquelineblacklady_183.jpg');
  scene.text('Despite your attempts at resistance, Alex continues and put his cock in your mouth. The device in the mouth does not allow you to close it, so you try to spit his cock out.');
  scene.text('You fail. It seems the device is securely fixed, and your tongue movements only arouse Alex.');
  scene.text('"Oh, are you enjoying safe sex? Come on, don\'t stop!"');
  qspCall(s, 'arousal', 'bj', 10, ((s as any).npcID1 ?? 0), 'sub', 'deepthroat');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue to please', goto: ['event', 'dima38'] },
    { label: 'Stop tongue movement', goto: ['event', 'dima34'] },
  ]);
  scene.build();
}

function enterDima34(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/street/sex/10028_tommypistoljacquelineblacklady_187.jpg');
  scene.text('Alex realizes, you\'re not going to continue humoring him:');
  scene.text('"Yesterday you enjoyed this! You may think we have gotten nowhere, but one lesson on, and your mouth is open, see, progress!"');
  scene.text('With these words, he removes his penis, you\'re picked up by the hair and down some steps and through a short passageway.');
  scene.text('You are trapped in an empty underground passage. Alex takes the gag out of your mouth, and you\'re finally able to close it.');
  scene.text('As you start to get some feeling back in your jaw, he blindfolds you, turns you around and bends you over.');
  // TODO-QSP: end
  scene.actions([
    { label: 'stand still', goto: ['event', 'dima35'] },
  ]);
  scene.build();
}

function enterDima35(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
  ((s as any).stat = (s as any).stat ?? {})['rape_count'] = ((s as any).stat['rape_count'] ?? 0) + (1);
  (s as any).spafinloc = 11;
  qspCall(s, 'cum_manage', '');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/street/sex/10028_tommypistoljacquelineblacklady_301.jpg');
  scene.img('images/locations/city/residential/street/sex/10028_tommypistoljacquelineblacklady_301.jpg');
  scene.text('Alex enters you from behind. He grabs your but with both hands and squeezes it tightly, while thrusting vigorously. After a while, you orgasm from the sensation.');
  scene.text('"Much like this morning, only this time no bitting!" Says Alex, further increasing the tempo.');
  scene.text('Suddenly he stops, you are turned around and pushed to your knees. You hit the marble floor hard, and feel something warm hit and then run down your face.');
  scene.text('"Your Stuff is in that box. Hope, you enjoyed the lesson." With these words Alex loosens the straps on your hands, and you hear him walking away.');
  (s as any).orgasm_or = 'yes';
  qspCall(s, 'arousal', 'vaginal', 30, ((s as any).npcID1 ?? 0), 'sub', 'rough', 'bound');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Recover', goto: ['event', 'dima36'] },
  ]);
  scene.build();
}

function enterDima36(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'arousal', 'end');
  scene.img('images/locations/city/residential/street/sex/10028_tommypistoljacquelineblacklady_352.jpg');
  scene.text('After sitting in this position for a few minutes, you start to free your hands. Once they\'re loose, you tear off the blindfold, and wipe as much of the sperm of your face as is possible.');
  scene.text('Looking around, you find the box Alex had put your stuff it. You get dressed and find a passage that leads to the street above.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enterDima37(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'money', 'set', 0);
  qspCall(s, 'arousal', 'end');
  scene.img('images/locations/city/citycenter/gym/kickboxing/kik.jpg');
  scene.text('Those classes at the fitness center were not in vain. You manage to quickly stand and kick Alexs leg out from under him, he falls and bangs his head, hard.');
  scene.text('You run away, and only when you don\'t think you can run any further, stop. You start looking for a way to free your hands and find a sharp stone.');
  scene.text('After some time your hands are free, you remove the gag from your mouth, and finally you are able to close it. You jaw and teeth ache from running while wearing the ring-gag.');
  scene.text('Your dress is trampled and torn in places, but still able to cover your body. You are lost, but after a while find the supermarket, where you met Dima.');
  scene.text('Only then do you realize Alex took all your money.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Relax', goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enterDima38(s: GameState, scene: SceneBuilder): void {
  (s as any).spafinloc = 12;
  qspCall(s, 'cum_manage', '');
  qspCall(s, 'arousal_funcs', 'stretch', 'oral', 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/street/sex/10028_tommypistoljacquelineblacklady_184.jpg');
  scene.text('You start to caress carefully Alexs cock in your mouth, while occasionally trying to swallow it as far as possible.');
  scene.text('The device in your mouth restricts your ability, and it feels like eternity before you are able to make him finish.');
  scene.text('"Yes, lesson learned. I think you will have no more problems from you. Agreed?" He says, clutching your hair.');
  scene.text('You nod. Then Alex loosens the ties on your hands and, pointing to the bushes, says:');
  scene.text('"There\'s your stuff."');
  scene.text('After Alex leaves, you free your hands, mouth, and find your stuff in the bushes.');
  qspCall(s, 'arousal', 'bj', 10, ((s as any).npcID1 ?? 0), 'sub', 'deepthroat', 'rough', 'bound');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enterDima39(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/street/sex/13606_zenzaragginikisweet085.jpg');
  scene.text('Alex dresses you, sticks a gag in your mouth and binds your hands. Then he leads you from the apartment, and onto a bus going to the center. It is surprisingly empty.');
  scene.text('"I noticed you didn\'t try to escape last night, so I\'m thinking, maybe you simply didn\'t get enough sex? Don\'t worry I\'ll fix that mistake.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Smile seductively', goto: ['event', 'dima40'] },
    { label: 'Try to get away', goto: ['event', 'dima45'] },
  ]);
  scene.build();
}

function enterDima40(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal_funcs', 'stretch', 'vaginal', 2);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/street/sex/13606_zenzaragginikisweet113.jpg');
  scene.text('"Good girl", With these words Alex pulls off your dress, His cock is already standing to attention, and he starts fucking you.');
  scene.text('You begin to move rhythmically, but the bus keeps bouncing around, adding new sensations.');
  qspCall(s, 'arousal', 'vaginal', 10, ((s as any).npcID1 ?? 0), 'sub', 'exhibitionism');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Change position', goto: ['event', 'dima41'] },
  ]);
  scene.build();
}

function enterDima41(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/street/sex/13606_zenzaragginikisweet154.jpg');
  scene.text('You\'re laid across the seats, Alex stands behind you, removing the gag, he says:');
  scene.text('"You\'re not going to disappoint me, are you now?"');
  scene.text('It seems, Alex is bored of bus sex, so at a stop, he asks the driver to drop you at the park. The driver agrees, and making a short detour stops at the park, where you get off.');
  scene.text('The driver can see you\'re naked, and has probably been watching everything.');
  scene.text('Soon you find a small clearing in the park.');
  scene.text('"Time to show me that you can do even better than this morning!"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Kneel down', goto: ['event', 'dima42'] },
  ]);
  scene.build();
}

function enterDima42(s: GameState, scene: SceneBuilder): void {
  (s as any).spafinloc = 12;
  qspCall(s, 'cum_manage', '');
  qspCall(s, 'arousal_funcs', 'stretch', 'oral', 1);
  (s as any).spafinloc = 11;
  qspCall(s, 'cum_manage', '');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/street/sex/13606_zenzaragginikisweet231.jpg');
  scene.text('Kneeling, you begin to diligently please Alex, completely swallowing then releasing the full length. Your diligence would be the envy of any pornstar.');
  scene.text('Not surprising, Alex is soon breathing hard, and removing his member finishes on your face.');
  scene.text('"There\'s a good girl", he says "see what you can do, when you try. I don\'t think there\'s anything more I can teach you!"');
  scene.text('Alex ties your hands and takes you, still naked, to the road. He pushes you to your knees, produces a marker and writes on your stomach "Cum" with an arrow pointing up, and tells you:');
  scene.text('"I\'ll be gone for a couple of hours, when I get back, I\'ll bring your stuff. You just sit here and show off your skills, like a good little girl!"');
  qspCall(s, 'arousal', 'bj', 10, ((s as any).npcID1 ?? 0), 'sub', 'deepthroat', 'bound');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for his return', goto: ['event', 'dima43'] },
    { label: 'Leave', goto: ['event', 'dima44'] },
  ]);
  scene.build();
}

function enterDima43(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 50;
  qspCall(s, 'arousal', 'end');
  scene.img('images/locations/city/residential/street/sex/13606_zenzaragginikisweet263.jpg');
  scene.text('You decide to wait for Alex to return. The first 15 minutes pass quietly, the road was deserted. Then begins the most unpleasant time of your life.');
  scene.text('First a crowd of young people pass by, they notice you. They take photos, you ignore them, and losing interest they leave.');
  scene.text('Then an old lady lectures you about morality, and how this is unacceptable. There were other people too, but you are trying very hard to forget about them.');
  scene.text('When Alex returns, he unties you, and hands you your stuff. He says that he was sorry he has to leave and would be very happy for another "rendezvous" with you.');
  scene.text('You dress, Take your things and hurriedly leave him.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the yard', goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enterDima44(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'money', 'set', 0);
  qspCall(s, 'arousal', 'end');
  scene.img('images/locations/city/residential/street/sex/13606_zenzaragginikisweet264.jpg');
  scene.text('You decide that sitting naked and covered with sperm on the road is too humiliating for you. As soon as Alex is out of view, finding your clothes nearby, and run into the park.');
  scene.text('Unfortunately he took your money. You find a sharpened stone, and when your hands are free, you carefully wipe the semen from your face.');
  scene.text('You are lost, but after a while manage to find yourself the supermarket where you met Dimitry.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Relax', goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enterDima45(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/street/sex/13606_zenzaragginikisweet084.jpg');
  scene.text('Alex holds you tightly and smiles, "Don\'t panic, I\'l make sure you get more experience, lots experience! And best of all, I\'ll get paid for helping you."');
  scene.text('He was silent all the way, passed the center. Finaally, Alex drags you out of the bus and leads you to the sex shop.');
  scene.text('"Hello there", A girl greets you. She unceremoniously grabs you and takes to a back room. There she undresses you.');
  scene.text('"Follow me", the girl leads you to the stairs.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the basement', goto: ['event', 'dima46'] },
  ]);
  scene.build();
}

function enterDima46(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal_funcs', 'stretch', 'oral', 1);
  qspCall(s, 'npcgeneratec', '', 0, 'gloryhole stranger', (Math.floor(Math.random() * 27) + 19), (Math.floor(Math.random() * 2) + 3), 1);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'b');
  ((s as any).stat = (s as any).stat ?? {})['gloryhole'] = ((s as any).stat['gloryhole'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/street/sex/15933_markdavisdonnaannika_447.jpg');
  scene.text('When you\'re downstairs, the girl moves you into a dark room with a round hole in one wall. Almost immediately, a cock appears from the hole.');
  scene.text('"Proceed", commandeds the girl.');
  scene.text('As you consider, she grabs you by the neck, and forces your face to the hole.');
  scene.text('Attempting to push the member out of your mouth, only excites the stranger behind the wall, and unable to withstand more than a minute, he cums.');
  scene.text('With your head pressed tightly against the wall, you can not spit, and are forced to swallow.');
  scene.text('"Your companion has been paid for a certain number of customers. Do you think you can manage, or do you need my help?');
  qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID2 ?? 0), 'sub', 'prostitution', 'unknown');
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID2 ?? 0));
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Agree to suck', goto: ['event', 'dima47'] },
    { label: 'Two of you would make it easier', goto: ['event', 'dima48'] },
  ]);
  scene.build();
}

function enterDima47(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal_funcs', 'stretch', 'oral', 5);
  (s as any).dimagh_counter = 0;
  // TODO-QSP: :gloryhole1
  qspCall(s, 'npcgeneratec', '', 0, 'stranger', (Math.floor(Math.random() * 27) + 19), (Math.floor(Math.random() * 2) + 3), 1);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'b');
  qspCall(s, 'arousal', 'bj', 6, ((s as any).npcID ?? 0), 'sub', 'prostitution', 'unknown');
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID2 ?? 0));
  ((s as any).stat = (s as any).stat ?? {})['gloryhole'] = ((s as any).stat['gloryhole'] ?? 0) + (1);
  (s as any).dimagh_counter = ((s as any).dimagh_counter ?? 0) + (1);
  if (((s as any).dimagh_counter ?? 0) < 9) {
    // TODO-QSP: jump 'gloryhole1'
  }
  qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
  qspCall(s, 'boyStat', 'A170');
  qspCall(s, 'cum_manage', '');
  qspCall(s, 'money', 'earn', 1000);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/street/sex/15933_markdavisdonnaannika_494.jpg');
  scene.text('"That\'s wonderful", she says, "I\'ll go tell your friend, give you some space so you\'re not distracted". With these words, she points to the hole, which already has a new member.');
  scene.text('You dutifully bend down, and begin to service the next stranger. This carries on. Men erupt, leave and another appears.');
  scene.text('Lost in your enthusiasm, you don\'t hear Alex enter the room.');
  scene.text('The realization that you are not alone in the room hits you just as he forcefully rams his cock into your pussy.');
  scene.text('You have decide to try not to be distracted, and continue to suck, despite the pounding you are receiving.');
  scene.text('When the man you are serving finishes, you, as before, swallow and are ready to accept the next, but the hole remains empty. It seems you have work off the money Alex had gotten.');
  scene.text('Alex efforts have not gone unnoticed, and soon you shake in orgasm. Almost immediately, he pulls out his penis, and turns your head so that it is jabbing you in the face.');
  scene.text('It is now a reflex action for you to help him to finish. After you cleaned his cock, he leaves the booth.');
  scene.text('After a few minutes the girl you met at the door comes in, removes your gag and takes you to the lavatory, where you wash your face and rinse your mouth.');
  scene.text('When you are done, she hands you your things, and some cash, adding, "From your friend, for a job well done." You dress.');
  (s as any).orgasm_or = 'yes';
  qspCall(s, 'arousal', 'vaginal', (-10), ((s as any).npcID1 ?? 0), 'sub', 'rough');
  qspCall(s, 'arousal', 'bj', (-5), ((s as any).npcID1 ?? 0), 'sub', 'rough');
  qspCall(s, 'cum_call', 'vagina', ((s as any).npcID1 ?? 0), 1);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get Outside', goto: ['city_industrial', ''] },
  ]);
  scene.build();
}

function enterDima48(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal_funcs', 'stretch', 'oral', 5);
  (s as any).dimagh_counter = 0;
  // TODO-QSP: :gloryhole2
  qspCall(s, 'npcgeneratec', '', 0, 'stranger', (Math.floor(Math.random() * 27) + 19), (Math.floor(Math.random() * 2) + 3), 1);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'b');
  qspCall(s, 'arousal', 'bj', 6, ((s as any).npcID2 ?? 0), 'sub', 'prostitution', 'rough', 'deepthroat');
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0));
  ((s as any).stat = (s as any).stat ?? {})['gloryhole'] = ((s as any).stat['gloryhole'] ?? 0) + (1);
  (s as any).dimagh_counter = ((s as any).dimagh_counter ?? 0) + (1);
  if (((s as any).dimagh_counter ?? 0) < 9) {
    // TODO-QSP: jump 'gloryhole2'
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/street/sex/15933_markdavisdonnaannika_481.jpg');
  scene.text('It looks like you misunderstood the girl.');
  scene.text('"You want to do this the hard way? Fine, I can do that."');
  scene.text('With these words, she forces your head back to the hole.');
  scene.text('Another cock appears from the hole, she puts it in your mouth, and begins to drive your head. It feels like she\'s fucking the stranger behind the wall with your head.');
  scene.text('It takes more time, but he finishes in your mouth. She holds your head against the wall, not giving you room to spit anything out. This was repeated several times.');
  scene.text('When the last "customer" disappeared from the hole, she lets go of your head, and leaves the room. Soon she comes back with your stuff. You dress, and she leads you out.');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get Outside', goto: ['city_industrial', ''] },
  ]);
  scene.build();
}

function enterDima49(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 50;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/street/sex/10022_paristommy_021.jpg');
  scene.text('You wake up in the midst of a public square. Your hands are chained to a pole, and your things are out of reach. In your mouth a gag. In the distance there are people, but no one dares come close to you.');
  scene.text('You\'re not surprised, you wouldn\'t if you were them. So you wait about an hour, your legs are very tired, but your hands are tied tight enough that you can\'t sit down.');
  scene.text('Suddenly you notice, a man standing in front of you.');
  scene.text('"Do you need help?" He asks');
  // TODO-QSP: end
  scene.actions([
    { label: 'Nod', goto: ['event', 'dima50'] },
  ]);
  scene.build();
}

function enterDima50(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/street/sex/10022_paristommy_028.jpg');
  scene.text('The guy comes closer, unties your hands and takes the gag out of your mouth.');
  scene.text('He helps to collect your stuff, and quickly gets you away from the square. You\'re next to the river, and he suggests you dress under a bridge.');
  scene.text('When you\'re there, the guy asks:');
  scene.text('"Will you reward your savior?"');
  if (((s as any).pcs_agil ?? 0) < 50) {
    scene.actions([
      { label: 'Dismiss', goto: ['event', 'dima52'] },
    ]);
  } else {
    scene.actions([
      { label: 'Dismiss', goto: ['event', 'dima53'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Suck', goto: ['event', 'dima51'] },
  ]);
  scene.build();
}

function enterDima51(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal_funcs', 'stretch', 'oral', 1);
  qspCall(s, 'npcgeneratec', '', 0, 'stranger', (Math.floor(Math.random() * 27) + 19));
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'b');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/street/sex/10022_paristommy_088.jpg');
  scene.text('You immediately understand the hint. Kneeling, you unzip his fly, and get down to business. Barely a couple of minutes later the guy begins to cum. Finished, he says goodbye to you, and quickly leaves.');
  qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID2 ?? 0), 'sub', 'unknown');
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID2 ?? 0));
  qspCall(s, 'cum_call', 'face', ((s as any).npcID2 ?? 0));
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Freshen up', goto: ['city_industrial', ''] },
  ]);
  scene.build();
}

function enterDima52(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal_funcs', 'stretch', 'oral', 2);
  qspCall(s, 'npcgeneratec', '', 0, 'stranger', (Math.floor(Math.random() * 27) + 19), (Math.floor(Math.random() * 2) + 3), 1);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'b');
  qspCall(s, 'npcgeneratec', '', 0, 'stranger', (Math.floor(Math.random() * 27) + 19), (Math.floor(Math.random() * 2) + 3), 1);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'c');
  qspCall(s, 'money', 'set', 0, 'cash');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/street/sex/10022_paristommy_308.jpg');
  scene.text('Enraged by your refusal, the man pushes you, grabs your stuff, and throws it into the river. You manage to salvage your clothes, but the your money is lost.');
  scene.text('When you return to the river bank, a couple of guys appear out of thin air. They drag you to the bridge, and tie your hands to it. Judging by their actions, they must have seen you at the square.');
  scene.text('You find yourself on their lap, They lower their pants. It doesn\'t look like you have a choice. You begin to please them.');
  scene.text('When you finish the last of them, they free your hands and run away.');
  scene.text('Recovering, you find the get directions, and soon you find yourself at the supermarket where you met Dimitry');
  qspCall(s, 'arousal', 'bj', 10, ((s as any).npcID2 ?? 0), 'group', 'sub');
  qspCall(s, 'arousal', 'bj', 10, ((s as any).npcID3 ?? 0), 'group', 'sub');
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID2 ?? 0));
  qspCall(s, 'cum_call', 'face', ((s as any).npcID3 ?? 0), 0, '', '', 20);
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID3 ?? 0), 0, '', '', 20);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Relax', goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enterDima53(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'arousal', 'end');
  scene.img(`${qspUntranslated(s, "FUNC('clothing_image', clothingworntype, clothingwornnumber)", { location: "event" })}`);
  scene.text('Enraged by your refusal, man pushes you, but you stand firm. Realizing that you\'re not to be messed with, he runs away.');
  scene.text('You sort out you clothing and dress yourself in the outfit you were wearing when this all started.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Freshen up', goto: ['city_industrial', ''] },
  ]);
  scene.build();
}

function enterScoreslut1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/dmitry/sex/dima6.jpg');
  scene.text('You wake up, hands tied to the radiator. From the sofa Dima looks at you expectantly.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Frightened look', goto: ['event', 'scoreslut2'] },
    { label: 'Trying to escape', goto: ['event', 'scoreslut3'] },
  ]);
  scene.build();
}

function enterScoreslut2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/dmitry/sex/dima6.jpg');
  scene.text('"You awake, bitch? Want to go home?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Frightened look', goto: ['event', 'dima30'] },
  ]);
  scene.build();
}

function enterScoreslut3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/dmitry/sex/dima6.jpg');
  scene.text('"I don\'t think so, bitch"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Frightened look', goto: ['event', 'dima30'] },
  ]);
  scene.build();
}

function enterLesbi(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/natalya/lesbi.jpg');
  scene.text('The woman stares at you, you catch her eye. She looks you up and down, smiles and licks her lips.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Turn away', goto: ['shop_moncheri', 'start'] },
    { label: 'Get acquainted', goto: ['event', 'lesbi1'] },
  ]);
  scene.build();
}

function enterLesbi1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/natalya/lesbi.jpg');
  scene.text('You go to the woman. She looks at you with a twinkle in her eye "I am Natalya Petrovna, here\'s my card, maybe you would let me take you somewhere interesting?"');
  scene.text('The woman is very confident and it makes it hard for you to think clearly.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Paris?', goto: ['event', 'lesbi2'] },
  ]);
  scene.build();
}

function enterLesbi2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/natalya/lesbi.jpg');
  scene.text('"Paris?! You\'re cute, but for that you\'d need to be absolutely stunning." She laughs and you feel a little embarrassed.');
  scene.text('"Heh, thanks, but I was looking for a rich man, good effort".');
  scene.text('"Guys? You can twist them around your little finger, if you want, you little cutie, but have you ever managed to force another girl to obey and do anything you desire?"');
  if (((s as any).stat ?? 0)?.['lesbian_count'] > 0) {
    scene.text('No… no, I haven\'t - You mumble. I\'ve been with girls, but not like that…');
  }
  if (((s as any).stat ?? 0)?.['lesbian_count'] === 0) {
    scene.text('No… no, I haven\'t - You mumble. I\'ve never been with a girl to try such a thing…');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask to learn', goto: ['event', 'lesbi3'] },
  ]);
  scene.build();
}

function enterLesbi3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).lesbiQW = 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/natalya/lesbi.jpg');
  scene.text('You are suddenly interested, how do you control other girls like this? Maybe you\'ll ask this woman to teach you.');
  scene.text('Then you can find yourself a very docile simpleton and make her do your chores and save you having to put up with so many dumb guys.');
  scene.text('Having deciding you asked, "Can you teach me that?"');
  scene.text('"Teach?" She asked in surprise. "Teach… hmm… I think I might be able to help you!" The lady says with a grin. "Come visit me at my apartment."');
  scene.text('You read the card and see that see lives in the city residential area, looking up again, Natalya is walking out of the boutique with a graceful and confident gait.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['shop_moncheri', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'klof 2':
      enterKlof2(s, scene);
      break;
    case 'klof 3':
      enterKlof3(s, scene);
      break;
    case 'city_park':
      enterCityPark(s, scene);
      break;
    case 'hand':
      enterHand(s, scene);
      break;
    case 'blow':
      enterBlow(s, scene);
      break;
    case 'sex':
      enterSex(s, scene);
      break;
    case 'dima':
      enterDima(s, scene);
      break;
    case 'dima2':
      enterDima2(s, scene);
      break;
    case 'dima3':
      enterDima3(s, scene);
      break;
    case 'dima4':
      enterDima4(s, scene);
      break;
    case 'dima5':
      enterDima5(s, scene);
      break;
    case 'dima6':
      enterDima6(s, scene);
      break;
    case 'dima7':
      enterDima7(s, scene);
      break;
    case 'dima8':
      enterDima8(s, scene);
      break;
    case 'dima9':
      enterDima9(s, scene);
      break;
    case 'dima10':
      enterDima10(s, scene);
      break;
    case 'dima11':
      enterDima11(s, scene);
      break;
    case 'dima12':
      enterDima12(s, scene);
      break;
    case 'dima13':
      enterDima13(s, scene);
      break;
    case 'dima14':
      enterDima14(s, scene);
      break;
    case 'dima15':
      enterDima15(s, scene);
      break;
    case 'dima16':
      enterDima16(s, scene);
      break;
    case 'dima17':
      enterDima17(s, scene);
      break;
    case 'dima18':
      enterDima18(s, scene);
      break;
    case 'dima19':
      enterDima19(s, scene);
      break;
    case 'dima20':
      enterDima20(s, scene);
      break;
    case 'dima21':
      enterDima21(s, scene);
      break;
    case 'dima30':
      enterDima30(s, scene);
      break;
    case 'dima31':
      enterDima31(s, scene);
      break;
    case 'dima32':
      enterDima32(s, scene);
      break;
    case 'dima33':
      enterDima33(s, scene);
      break;
    case 'dima34':
      enterDima34(s, scene);
      break;
    case 'dima35':
      enterDima35(s, scene);
      break;
    case 'dima36':
      enterDima36(s, scene);
      break;
    case 'dima37':
      enterDima37(s, scene);
      break;
    case 'dima38':
      enterDima38(s, scene);
      break;
    case 'dima39':
      enterDima39(s, scene);
      break;
    case 'dima40':
      enterDima40(s, scene);
      break;
    case 'dima41':
      enterDima41(s, scene);
      break;
    case 'dima42':
      enterDima42(s, scene);
      break;
    case 'dima43':
      enterDima43(s, scene);
      break;
    case 'dima44':
      enterDima44(s, scene);
      break;
    case 'dima45':
      enterDima45(s, scene);
      break;
    case 'dima46':
      enterDima46(s, scene);
      break;
    case 'dima47':
      enterDima47(s, scene);
      break;
    case 'dima48':
      enterDima48(s, scene);
      break;
    case 'dima49':
      enterDima49(s, scene);
      break;
    case 'dima50':
      enterDima50(s, scene);
      break;
    case 'dima51':
      enterDima51(s, scene);
      break;
    case 'dima52':
      enterDima52(s, scene);
      break;
    case 'dima53':
      enterDima53(s, scene);
      break;
    case 'scoreslut1':
      enterScoreslut1(s, scene);
      break;
    case 'scoreslut2':
      enterScoreslut2(s, scene);
      break;
    case 'scoreslut3':
      enterScoreslut3(s, scene);
      break;
    case 'lesbi':
      enterLesbi(s, scene);
      break;
    case 'lesbi1':
      enterLesbi1(s, scene);
      break;
    case 'lesbi2':
      enterLesbi2(s, scene);
      break;
    case 'lesbi3':
      enterLesbi3(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const event: LocationDef = {
  name: 'event',
  title: '"Well baby, come and see us if you want more entertainment, ',
  region: 'other',
  enter: enter,
};
