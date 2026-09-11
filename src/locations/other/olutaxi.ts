import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStation(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big55.jpg');
  if (((s as any).DjibrilQW ?? 0)?.['taxi'] === 1) {
    ((s as any).DjibrilQW ?? {})['taxi'] = 0;
    if (((s as any).DjibrilQW ?? 0)?.['meet'] === 1) {
      scene.text('He sits back down on the bench and you walk over and take a seat next to him. "No luck finding customers?"');
      scene.text('He shakes his head, but smiles. "Not yet, but I will, you\'ll see. Some always take Olu up on offer." He seems confident and undeterred by being turned down.');
      // TODO-QSP: dynamic text: Djibril smiles at you. He looks a lot like his uncle when he does that. "Hello a...
      scene.text(`Djibril smiles at you. He looks a lot like his uncle when he does that. "Hello again, ${((s as any).pcs_nickname ?? 0)}."`);
      scene.text('You can\'t help but smile back at him. "Hello, Djibril."');
    } else {
      ((s as any).DjibrilQW ?? {})['meet'] = 1;
      scene.text('He sits back down on the bench and you walk over and take a seat next to him. "No luck finding customers?"');
      scene.text('He shakes his head, but smiles. "Not yet, but I will, you\'ll see. Some always take Olu up on offer." He seems confident and undeterred by being turned down. "This is my nephew, Djibril. He goes to the university in the city."');
      scene.text('Djibril smiles at you. He looks a lot like his uncle when he does that.');
      scene.text('You can\'t help but smile back at him. "Hello, Djibril."');
      // TODO-QSP: dynamic text: "Hello <<$pcs_nickname>>, my uncle has told me about you. The niece of Luda." Hi...
      scene.text(`"Hello ${((s as any).pcs_nickname ?? 0)}, my uncle has told me about you. The niece of Luda." His Russian is very good and he doesn't have much of an accent at all.`);
    }
    scene.actions([
      { label: 'Wish Olu good luck', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big55.jpg');
    scene.text('You nod at them. "Well, good luck! I\'ll let you get back to work now. Nice meeting you, Djibril."');
    scene.text('You get up and he smiles at you. "Thank you. You have a good day as well."');
    scene.text('"It was nice meeting you as well," Djibril says before you walk away and let Olu get back to work.');
    scene.actions([
      { label: 'Leave', goto: ['pav_train_hall', ''] },
    ]);
  } },
      { label: 'Can you give me a ride?', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big55.jpg');
    scene.text('You hesitate a moment before asking. "Can you give me a ride?"');
    scene.text('Olu glances over and smiles. "Of course, follow me."');
    scene.text('He gets up and walks out of the train station before heading down the street and turning down an alleyway. Djibril follows along behind you.');
    scene.actions([
      { label: 'Follow him', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/olu/taxi_parked.jpg');
    scene.text('As you walk into the alleyway, you see the van he\'s converted into a taxi.');
    if ((!((s as any).first_taxi ?? 0))) {
      (s as any).first_taxi = 1;
      scene.text('"Why is your van parked here?" you ask.');
      scene.text('He stops at the van and unlocks it as he answers you. "Police write tickets when I park at station, so I leave it here and then run and drive it up to pick up people at front."');
      scene.text('You shake your head. "That\'s terrible! They shouldn\'t harass you like that."');
      scene.text('Djibril agrees. "She\'s right, uncle. It\'s worse here than in the city."');
      scene.text('He shrugs as he gets in. He waits for you and Djibril to get in before answering. "It okay. It be what it be. Now where you need go?"');
    } else {
      scene.text('You shake your head in disgust, knowing he has to park his van in the alleyway to stop the local police from harassing him.');
      scene.text('He unlocks the van and gets in. Once you and Djibril climb inside, he turns to you. "Where you need go?"');
    }
    scene.actions([
      { label: 'Ride along', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/olu/taxi_drive.jpg');
    scene.text('Olu starts up the van and drives out onto the street, listening to some music in a language you don\'t understand. It doesn\'t take too long before you arrive at your destination, where Olu pulls over to the curb and stops. "We are here. You be careful now, yes?"');
    scene.text('You turn to Djibril. "It was nice meeting you."');
    scene.text('Djibril smiles in return. "It was nice meeting you as well."');
    scene.text('You smile at Olu. "I will. Thanks for the ride."');
    scene.text('Olu returns the smile. "Any time, goodbye."');
    scene.text('Once you close the door and he\'s sure you\'re safely on the sidewalk, he pulls away and drives off.');
    scene.actions([
      { label: 'Go to Pavlovsk Residential area', goto: ['pav_residential', ''] },
      { label: 'Go to the Old Town', goto: ['pushkin', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Talk to them', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'npc_relationship', 'modify', 'A55', 1);
    qspCall(s, 'npc_relationship', 'modify', 'A82', 1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big55.jpg');
    if (((s as any).OluQW ?? 0)?.['sex'] === 1) {
      scene.text('"Mind if I sit and talk with you guys for a while?" you ask.');
      scene.text('Olu scoots over to make room for you. "No, of course not."');
      scene.text('You take a seat and start chatting. They ask you about school while Djibril talks about the university and living in the city. They then talk about some of the funny or odd things they\'ve seen since moving in Russia.');
      scene.text('All and all you have a good conversation with them, only occasionally interrupted as Olu gets up to try and get a fare. Djibril seems to be paying more and more attention to you the longer you talk, which Olu seems to notice. "If the two of you would like to talk private without adult, you can go talk in my taxi."');
      scene.text('Djibril seems to like the idea, but waits for you to answer.');
      scene.actions([
        { label: 'Accept', goto: ['olutaxi', 'djibril_taxi_sex'] },
        { label: 'Decline', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big55.jpg');
    scene.text('You shake your head. "Maybe some other time."');
    scene.text('Olu nods and smiles and you go back to talking about a variety of topics while Olu keeps trying to find a fare. After a while, he finally finds one and waves goodbye to you as he leads the well dressed man outside to his taxi. Djibril also bids you farewell and follows his uncle and the man outside.');
    scene.actions([
      { label: 'Leave', goto: ['pav_train_hall', ''] },
    ]);
  } },
      ]);
    } else {
      scene.text('"Mind if I sit and talk with you guys for a while?" you ask.');
      scene.text('Olu scoots over to make room for you. "No, of course not."');
      scene.text('You take a seat and start chatting. They ask you about school while Djibril talks about the university and living in the city. They then talk about some of the funny or odd things they\'ve seen since moving in Russia.');
      scene.text('All and all you have a good conversation with them, only occasionally interrupted as Olu gets up to try and get a fare. Someone finally takes him up on his offer and he and Djibril bid you farewell. Djibril helps them with some luggage while Olu rushes out to pull the taxi around. They both wave goodbye to you as they depart.');
      scene.actions([
        { label: 'Leave', goto: ['pav_train_hall', ''] },
      ]);
    }
  } },
    ]);
  } else {
    scene.text('He sits back down on the bench and you walk over and take a seat next to him. "No luck finding customers?"');
    scene.text('He shakes his head, but smiles. "Not yet, but I will, you\'ll see. Some always take Olu up on offer." He seems confident and undeterred by being turned down. You can\'t help but smile back at him. Maybe he has time to talk, or perhaps you should let him work. Maybe he would even give you a ride locally and save you from walking?');
    scene.actions([
      { label: 'Wish him good luck', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big55.jpg');
    scene.text('You get up and nod at him. "Well good luck, I\'ll let you get back to work."');
    scene.text('He smiles. "Thank you. Have a good day."');
    scene.text('With that, you walk away and let him get back to work.');
    scene.actions([
      { label: 'Leave', goto: ['pav_train_hall', ''] },
    ]);
  } },
      { label: 'Can you give me a ride?', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big55.jpg');
    scene.text('You hesitate a moment before asking. "Can you give me a ride?"');
    scene.text('He glances over and smiles. "Of course, follow me."');
    scene.text('He gets up and walks out of the train station before heading down the street and turning down an alleyway.');
    scene.actions([
      { label: 'Follow him', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/olu/taxi_parked.jpg');
    scene.text('As you walk into the alleyway, you see the van he\'s converted into a taxi.');
    if ((!((s as any).first_taxi ?? 0))) {
      (s as any).first_taxi = 1;
      scene.text('"Why is your van parked here?" you ask.');
      scene.text('He stops at the van and unlocks it as he answers you. "Police write tickets when I park at station, so I leave it here and then run down and drive it up to pick up people at front."');
      scene.text('You shake your head. "That\'s terrible! They shouldn\'t harass you like that."');
      scene.text('He shrugs as he gets in, but waits for you to get in as well before answering. "It okay, it be what it be. Now where you need go?"');
    } else {
      scene.text('You shake your head in disgust, knowing he has to park his van in the alleyway to stop the local police from harassing him.');
      scene.text('He unlocks the van and gets in it. Once you climb inside, he turns to you. "Where you need go?"');
    }
    scene.actions([
      { label: 'Ride along', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/olu/taxi_drive.jpg');
    scene.text('Olu starts up the van and drives out onto the street, listening to some music in a language you don\'t understand. It doesn\'t take too long before you arrive at your destination, where Olu pulls over to the curb and stops. "We are here. You be careful now, yes?"');
    scene.text('You smile at him. "I will. Thanks for the ride."');
    scene.text('He returns the smile. "Any time, goodbye."');
    scene.text('Once you close the door and he\'s sure you\'re safely on the sidewalk, he pulls away and drives off.');
    scene.actions([
      { label: 'Go to Pavlovsk Residential area', goto: ['pav_residential', ''] },
      { label: 'Go to the Old Town', goto: ['pushkin', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Mind if we talk?', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A55', 1);
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big55.jpg');
    if (((s as any).OluQW ?? 0)?.['sex'] === 1) {
      scene.text('"Mind if I sit and talk with you?" you ask.');
      scene.text('Olu scoots over to make room for you. "No, of course not."');
      scene.text('You take a seat and start talking. He asks you about school and tells you about some of the funny or odd things he\'s seen since moving to Russia while you tell him about a variety of things.');
      scene.text('All and all you have a good conversation with him, only occasionally interrupted as Olu gets up to try and get a fare. After a while, he stops trying and seems a lot more interested in just talking to you before he finally glances at the doors. "Would you like to go talk in my taxi? It is parked out of the way where no one would see."');
      scene.text('You can tell by the lust in his eyes and the tone of his voice what he really wants to do in his taxi…');
      scene.actions([
        { label: 'Accept', goto: ['olutaxi', 'olu_taxi_sex'] },
        { label: 'Decline', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big55.jpg');
    scene.text('You shake your head. "Maybe some other time."');
    scene.text('He nods and smiles before he goes back to talking to you about a variety of topics, but he also goes back up to trying to find a fare. After a while, he finally finds one and waves goodbye to you as he leads the well dressed man outside to his taxi.');
    scene.actions([
      { label: 'Leave', goto: ['pav_train_hall', ''] },
    ]);
  } },
      ]);
    } else {
      scene.text('"Mind if I sit and talk with you for a while?" you ask.');
      scene.text('Olu scoots over to make room for you. "No, of course not."');
      scene.text('You take a seat and start talking. He asks you about school and tells you about some of the funny or odd things he\'s seen since moving to Russia while you tell him about a variety of things.');
      scene.text('All and all you have a good conversation with him, only occasionally interrupted as Olu gets up to try and get a fare. Someone finally takes him up on his offer and he waves goodbye to you as he helps them carry their luggage outside.');
      scene.actions([
        { label: 'Leave', goto: ['pav_train_hall', ''] },
      ]);
    }
  } },
    ]);
  }
  scene.build();
}

function enterDjibrilTaxiSex(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/university/boy/djibril/taxi_chat.jpg');
  scene.text('You\'re fairly certain what he has in mind, but agree anyway. Djibril gets up and Olu gives him the keys before he leads you out of the train station and down the street into the alleyway, where you see Olu\'s van parked.');
  scene.text('As you walk up to it, he unlocks the side door and climbs into the back, waiting for you to climb in after him. You close the door behind you and he starts making general small talk. You find out he goes to the university in the city and that this is his first year there.');
  scene.text('"So what do you think of the city and living in Russia in general?" you ask.');
  scene.text('He shurgs. "In some ways, it\'s better than home and in other ways it\'s worse. There\'s a fair amount of racism, especially if you go to some of the smaller towns like here." He pauses, but before you can say anything he speaks again. "But the Russian girls more than make up for it…" he says as he leans close and starts kissing you.');
  qspCall(s, 'willpower', 'kiss', 'resist', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Stop him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Stop him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    ((s as any).DjibrilQW ?? {})['invite'] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/taxi_chat.jpg');
    scene.text('You pull away from him, but he keeps kissing you while one hand cups one of your breasts. You put both your hands against his chest and push him hard enough that he pulls back. He looks at you in confusion. "Sorry, I thought this is what you wanted."');
    scene.text('You shake your head. "No, I just wanted to talk and get to know you. Maybe some other time."');
    scene.text('He nods, but seems to have lost a lot of interest. The two of you continue chatting, but he seems a bit distracted and says he should get the keys back to his uncle so he can work. "If you want, come see me at the university dorms if you\'re ever in the city."');
    scene.text('He tells you which dorm building and room is his, then says goodbye as he heads back to the train station.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['pav_train_hall', ''] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Make out', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A82', 1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/taxi/taxi1.jpg');
    scene.text('You start kissing him back and he pulls you over into his lap, the two of you continuing to make out as his hands start roaming over your body. Eventually, he starts trying to remove your clothes.');
    qspCall(s, 'arousal', 'foreplay', 3);
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'foreplay', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Stop him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Stop him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A82', (-1));
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/taxi_chat.jpg');
    scene.text('You pull his hands away from you before rolling off his lap and back onto the seat to put some space between the two of you. He looks at you in confusion. "Why did you stop? What\'s wrong?"');
    scene.text('You sigh. "Nothing. I liked making out with you, I just didn\'t want to go any further. At least not yet."');
    scene.text('He nods, but you can tell he\'s frustrated. The two of you go back to chatting, but he seems a bit distracted, likely by the bulge in his pants that has not gone away yet. "I should get the keys back to my uncle so he can work."');
    scene.text('He says goodbye before he heads back to the train station.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['pav_train_hall', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Undress', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A82', 1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/taxi/taxi2.jpg');
    scene.text('You don\'t stop him and start undressing each other as you make out. You can feel the bulge in his pants growing and getting harder with each item of clothing he removes from you. Once your breasts are exposed, he licks and sucks on your nipples.');
    scene.text('He then works his way up your neck and whispers in your ear. "I want to fuck you…"');
    scene.text('You feel his hands go between your legs as he starts to unbutton his pants.');
    qspCall(s, 'arousal', 'flashlite', 5);
    qspCall(s, 'arousal', 'foreplay', (-5));
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'sex', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Stop him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Stop him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'npc_relationship', 'modify', 'A82', (-1));
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/taxi_chat.jpg');
    scene.text('You roll off his lap back onto the seat to put some space between the two of you before you start grabbing your discarded clothes and getting dressed again. He looks at you in confusion. "Why did you stop? What\'s wrong?"');
    scene.text('You shake your head. "Nothing. I liked making out with you, I just… I can\'t. This is too much too soon."');
    scene.text('He nods, but you can tell he\'s frustrated. Once you\'re dressed, you open the door and climb out. He gets out behind you and closes the door as you walk away.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['pav_train_hall', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Blow him', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A82', 1);
    ((s as any).npc_had_sex ?? {})['A82'] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/taxi/taxi3.jpg');
    scene.text('You climb off him as he pulls down his pants and underwear, his massive cock springing free. He\'s not as big as his uncle, but he\'s not that much smaller either. You grab hold of it and can\'t even wrap your fingers all the way around it as you start jerking him off. You then lean over and start sucking on the head as you slowly work your mouth lower, his monstrous dick causing your jaw to stretch as you take him into your mouth.');
    scene.text('He moans as you suck his cock and jerk it off with one hand, reaches over to start teasing your pussy.');
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.text('His fingers gently probe your virgin pussy, careful not to break your hymen.');
    }
    scene.text('He alternates between rubbing your clit and fingering your pussy. As you start getting wet, he pulls his fingers out of your pussy and starts rubbing them on your asshole before he starts fingering your backdoor as well.');
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'arousal', 'hj', (-5));
    qspCall(s, 'arousal', 'vaginal_finger', (-5));
    qspCall(s, 'stat', '');
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.actions([
        { label: 'Get fucked', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A82');
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/taxi/taxi4.jpg');
    scene.text('Once you\'re nice and wet, he pulls your head off his dick and manhandles you, easily turning you around until you\'re on all fours on the back seat facing away from him. He opens the side door and steps out so he can stand up, then pulls you into position by the legs.');
    // TODO-QSP: dynamic text: You feel the tip of his huge cock rubbing against your wet slit before he slowly...
    scene.text(`You feel the tip of his huge cock rubbing against your wet slit before he slowly pushes it in. You feel your pussy stretching and filling as he pushes his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick inside you, moaning loudly as he pushes himself deep. He wastes no time before he starts fucking you.`);
    qspCall(s, 'arousal', 'vaginal', 5, 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Pussy pounding', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/taxi/taxi5.jpg');
    if (((s as any).analPlugIn ?? 0) === 1) {
      scene.text('He pulls nearly the full length of his shaft out of you before burying himself balls deep. You can\'t help but loudly moan and sometimes gasp as he thrusts himself inside you. He might not be as big as his uncle, but he\'s way rougher.');
      scene.text('After several minutes, he pulls all the way out of you, suddenly leaving you feeling very empty. You feel him grab your buttplug and pull it out, leaving your ass feeling hollow and empty, craving to be filled again.');
      if (((s as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
        scene.text('You grab the lube out of your purse and hand it to him. He takes it and squirts a bit on his dick and some on your asshole. He spreads the lube around really well.');
      }
      scene.text('He grabs your ass cheeks with both hands and spreads them wide before he spits on your gaping asshole.');
    } else {
      scene.text('He pulls nearly the full length of his shaft out of you before burying himself balls deep. You can\'t help but loudly moan and sometimes gasp as he thrusts himself inside you. He might not be as big as his uncle, but he\'s way rougher.');
      scene.text('After several minutes, he pulls all the way out of you, suddenly leaving you feeling very empty.');
      if (((s as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
        scene.text('You grab the lube out of your purse and hand it to him. He takes it and squirts some on his dick and some on your asshole. He spreads the lube around really well.');
      }
      scene.text('He grabs your ass cheeks with both hands and spreads them wide before spitting on your asshole.');
    }
    qspCall(s, 'arousal', 'vaginal', 5, 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Up the butt', goto: ['olutaxi', 'djibril_taxi_sex_anal'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Just the butt', goto: ['olutaxi', 'djibril_just_anal'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDjibrilJustAnal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A82');
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/university/boy/djibril/sex/taxi/taxi6.jpg');
  if (((s as any).analPlugIn ?? 0) === 1) {
    scene.text('Once you\'re nice and wet, he pulls your head off his dick and manhandles you, easily turning you around until you\'re on all fours on the back seat facing away from him. He opens the side door and steps out so he can stand up, then pulls you into position by the legs. You feel him grab your buttplug and pull it out, leaving your ass feeling hollow and empty, craving to be filled again.');
    if (((s as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
      scene.text('You grab the lube out of your purse and hand it to him. He takes it and squirts some on his dick and some on your asshole. He spreads the lube around really well.');
    }
    // TODO-QSP: dynamic text: He grabs your ass cheeks with both hands and spreads them wide before spitting o...
    scene.text(`He grabs your ass cheeks with both hands and spreads them wide before spitting on your gaping asshole. Moments later, you feel the slick head of his dick pressing against your gaping asshole. His dick slides in fairly easily and you feel your asshole stretching as his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick pushes its way inside you.`);
    scene.text('You moan and groan loudly as he pushes himself deep inside you. He wastes no time and starts roughly fucking your asshole.');
  } else {
    scene.text('Once you\'re nice and wet, he pulls your head off his dick and manhandles you, easily turning you around until you\'re on all fours on the back seat facing away from him. He opens the side door and steps out so he can stand up, then pulls you into position by the legs.');
    if (((s as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
      scene.text('You grab the lube out of your purse and hand it to him. He takes it and squirts some on his dick and some on your asshole. He spreads the lube around really well.');
    }
    // TODO-QSP: dynamic text: He steps up between your lower legs and grabs your butt cheeks with both hands a...
    scene.text(`He steps up between your lower legs and grabs your butt cheeks with both hands and spreads them wide and then spits on your asshole. He then presses his dick against your asshole until it painfully parts and lets his dick slide in, causing you to gasp in pain. You feel your asshole stretching as his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick pushes its way inside you.`);
    scene.text('You moan and groan loudly as he pushes himself deep inside you. He wastes no time and starts roughly fucking your asshole.');
  }
  qspCall(s, 'arousal', 'anal', 5, 'rough');
  qspCall(s, 'arousal', 'auto_lube', 'anal');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Get butt fucked', goto: ['olutaxi', 'djibril_taxi_sex_anal1'] },
    { label: 'Take selfie', goto: ['olutaxi', 'djibril_selfie_anal'] },
  ]);
  scene.build();
}

function enterDjibrilTaxiSexAnal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A82');
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/university/boy/djibril/sex/taxi/taxi6.jpg');
  if (((s as any).analPlugIn ?? 0) === 1) {
    // TODO-QSP: dynamic text: Moments later, you feel the slick head of his dick pressing against your gaping ...
    scene.text(`Moments later, you feel the slick head of his dick pressing against your gaping anus. His dick slides in fairly easy into your gaping hole, your asshole stretching as his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick pushes its way inside you. You moan and groan loudly as he pushes himself deep inside you. He wastes no time before he starts roughly fucking your asshole.`);
  } else {
    // TODO-QSP: dynamic text: Moments later, you feel the slick head of his dick pressing against your anus un...
    scene.text(`Moments later, you feel the slick head of his dick pressing against your anus until it painfully parts and lets his dick slide in, causig you to gasp in pain. You feel your asshole stretching as his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick pushes its way inside you. You moan and groan loudly as he pushes himself deep inside you. He wastes no time before he starts roughly fucking your asshole.`);
  }
  qspCall(s, 'arousal', 'anal', 5, 'rough');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Get butt fucked', goto: ['olutaxi', 'djibril_taxi_sex_anal1'] },
    { label: 'Take selfie', goto: ['olutaxi', 'djibril_selfie_anal'] },
  ]);
  scene.build();
}

function enterDjibrilSelfieAnal(s: GameState, scene: SceneBuilder): void {
  ((s as any).djibrilphoto ?? {})[1] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/pc/activities/phone/djibril/1.jpg');
  scene.text('As Djibril violates your ass, you grab your phone out of your purse. You try to focus, but the hard pounding your ass is receiving makes that difficult. You finally manage to get the phone up in front of your face and take several selfies. Djibril is either unaware or just doesn\'t care.');
  scene.text('You take a look at the selfies you took before you pick the one you like the most and save it while deleting the rest.');
  qspCall(s, 'arousal', 'anal', 2, 'exhibitionism');
  qspCall(s, 'arousal', 'auto_lube', 'anal');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Get butt fucked', goto: ['olutaxi', 'djibril_taxi_sex_anal1'] },
  ]);
  scene.build();
}

function enterDjibrilTaxiSexAnal1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/university/boy/djibril/sex/taxi/taxi7.jpg');
  scene.text('He reaches up and grabs your hip, getting a really firm grip on you as he starts to pick up the pace and really hammer away at your asshole. He starts grunting and panting soon after and you don\'t think he\'s going to last much longer, yet he keeps going until he finally pulls out of you and pushes you down on your side.');
  qspCall(s, 'arousal', 'anal', 5, 'rough');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    ((s as any).DjibrilQW ?? {})['invite'] = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/university/boy/djibril/sex/taxi/taxi8.jpg');
    scene.text('He crawls inside and kneels next to you before he starts jerking off and you soon feel his cum splattering all over your ass. Spurt after spurt coats you until they finally stop and he groans loudly one last time. He then leans down and kisses you before he whispers in your ear. "That was amazing! I can\'t wait to do that again."');
    scene.text('He then steps back outside, grabs his clothes and starts dressing in the alleyway.');
    scene.text('You use a tissue in the back of the van to clean his cum off you as best you can before you start getting dressed. He\'s done dressing long before you and just stands with a big grin on his face, again reminding you of his uncle as he watches you finished getting dressed.');
    scene.text('Once you\'re fully dressed, you climb out of the van and he closes the door and locks it. "I should get these keys back to my uncle so he can work again. Come see me at the university dorms some time."');
    scene.text('You smile at him and nod before he heads back to the train station and you head back to the street.');
    qspCall(s, 'arousal', 'anal', 2, 'rough');
    qspCall(s, 'cum_call', 'butt', 'A82');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['pav_train_hall', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterOluTaxiSex(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A55', 1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/olu/taxi_chat.jpg');
  scene.text('You think about it before nodding. "Sure. Let\'s go."');
  scene.text('He grins as he gets up and leads you out of the station, down the street and around the corner into the alleyway where he parks his taxi. He unlocks the side door and you both climb inside before he closes the door. He promptly rests his hand on your inner thigh and starts rubbing your leg, slowly working up towards your crotch.');
  scene.text('Content that you\'re aroused, he starts unbuttoning his pants.');
  qspCall(s, 'arousal', 'foreplay', 2);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Change your mind', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/olu/taxi_parked.jpg');
    scene.text('You pull his hand way and close your legs. "Sorry, I can\'t! I thought I did, but I can\'t."');
    scene.text('He looks confused, then concerned. "Everything okay?"');
    scene.text('You nod. "Yeah, it\'s fine, I just can\'t. I should really go," you reply as you climb over him and open the door.');
    scene.text('He climbs out after you and closes the door before locking it. "Okay. Maybe another day then."');
    scene.text('"Sure," you nod before walking away.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['pav_train_hall', ''] },
    ]);
  } },
    { label: 'Blow him', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/olu/sex/taxi/taxi1.jpg');
    scene.text('You help each other undress, his cock slowly growing hard as he kneels on the seat and pulls you over. Your jaw stretches as wide as it can to accommodate his massive dick as you start bobbing your head back and forth as you fondle his balls with your hand.');
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'cuni', 'force', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Lick me [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Lick me [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'force');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/olu/sex/taxi/taxi2.jpg');
    scene.text('You stop sucking his dick and sit back on the seat and spread your legs wide, exposing your glistening wet pussy to him. He understands what you want without you even having to ask and kneels on the floor before leaning forward and placing his head between your legs.');
    scene.text('He starts alternating between sucking on your clit and sliding his tongue between your pussy lips to tongue fuck you as best he can. You feel yourself getting wet as he starts using a hand to rub your clit as well. You can tell that he\'s now eager to fuck you.');
    qspCall(s, 'arousal', 'cuni', 5);
    qspCall(s, 'stat', '');
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      // TODO-QSP: act 'Get fucked': gt 'olutaxi', 'olu_taxi_sex_vaginal'
    }
    qspCall(s, 'willpower', 'bj', 'resist', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Suck him off instead [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Suck him off instead [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/olu/sex/taxi/taxi4.jpg');
    scene.text('You don\'t feel like it today, so you pull away from him and squat on the floor while encouraging him to get back up. Once he sits back on the seat, you lean forward and start sucking his dick again, forcing yourself to take him as deeply into your throat as you can, resisting the urge to gag as you feel your throat stretching.');
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Swallow his cum', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/olu/sex/taxi/taxi5.jpg');
    scene.text('When he starts to moan louder, you grab hold of his shaft and start jerking him off as hard as you can while you suck on the head of his dick. After a few minutes, he moans loudly and you feel his cum squirting into your mouth. As it starts to go soft, he withdraws and a bit of his cum leaks from between your lips and dribbles down your chin. You swirl the mouthful of cum around in your mouth before you finally swallow it all down.');
    scene.text('Once finished, he starts to get dressed as you clean up the cum on your chin and lips. He waits for you to finish getting dressed yourself before he opens the van door and you both climb out.');
    scene.text('"I should get back to work. I hope you come visit again," he says with his typical smile as he closes the door and locks it.');
    scene.text('You can\'t help but smile back. "Sure, I\'ll come visit you again. Have a good day at work."');
    scene.text('He nods and the two of you head off in separate directions.');
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'cum_call', 'mouth', 'A55');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['pav_train_hall', ''] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Just the butt', goto: ['olutaxi', 'olu_taxi_sex_anal'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Keep sucking', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/olu/sex/taxi/taxi3.jpg');
    scene.text('You try and take as much of his cock into your mouth as you can, but you can only get about a third of the way down his shaft before you start to gag on it.');
    scene.text('He moans in pleasure anyway as he starts to rub his hand up and down your spine, gently caressing you as you suck on his dick. You can tell he\'s eager to fuck you as his hands start roaming your body.');
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'stat', '');
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      // TODO-QSP: act 'Get fucked': gt 'olutaxi', 'olu_taxi_sex_vaginal'
    }
    qspCall(s, 'willpower', 'bj', 'resist', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Just a blowjob [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Just a blowjob [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/olu/sex/taxi/taxi4.jpg');
    scene.text('You don\'t feel like it today, so you climb off the seat and squat on the floor as you keep sucking his dick. You force yourself to take him as deeply into your throat as you can, resisting the urge to gag as you feel your throat stretching.');
    qspCall(s, 'arousal', 'bj', 5, 'deepthroat');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck him off', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/olu/sex/taxi/taxi5.jpg');
    scene.text('When he starts to moan louder, you grab hold of his shaft and start jerking him off as hard as you can while you suck on the head of his dick. After a few minutes, he moans loudly and you feel his cum squirting into your mouth. As it starts to go soft, he withdraws and a bit of his cum leaks from between your lips and dribbles down your chin. You swirl the mouthful of cum around in your mouth before you finally swallow it all down.');
    scene.text('Once finished, he starts to get dressed as you clean up the cum on your chin and lips. He waits for you to finish getting dressed yourself before he opens the van door and you both climb out.');
    scene.text('"I should get back to work. I hope you come visit again," he says with his typical smile as he closes the door and locks it.');
    scene.text('You can\'t help but smile back. "Sure, I\'ll come visit you again. Have a good day at work."');
    scene.text('He nods and the two of you head off in separate directions.');
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'cum_call', 'mouth', 'A55');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['pav_train_hall', ''] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Just the butt', goto: ['olutaxi', 'olu_taxi_sex_anal'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterOluTaxiSexVaginal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A55');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/olu/sex/taxi/taxi6.jpg');
  // TODO-QSP: dynamic text: As you lay back on the seat with your legs spread, Olu kneels between your legs ...
  scene.text(`As you lay back on the seat with your legs spread, Olu kneels between your legs and rubs the tip of his dick against your wet slit before he slowly pushes his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick inside you.`);
  scene.text('You feel your pussy stretching as his monstrous cock invades your body, leaving you feeling completely full as he starts fucking you, slowly working himself just a little deeper with each thrust.');
  qspCall(s, 'arousal', 'vaginal', 5);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Get fucked', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/olu/sex/taxi/taxi7.jpg');
    if (((s as any).analPlugIn ?? 0) === 1) {
      scene.text('He starts fucking you deeper and faster, going as deep you can take. When you show signs of discomfort, he backs off a little, but eventually starts getting into it and starts going deeper and harder again. You can\'t help but moan loudly as his dick stretches and fills your pussy, which only encourages him to fuck you harder and deeper.');
      scene.text('Several minutes goes by before he pulls out of you and you feel him grab your buttplug and pull it out, leaving your ass feeling empty, craving to be filled again before you feel the head of his dick rubbing against your gaping asshole.');
    } else {
      scene.text('He starts fucking you deeper and faster, going as deep you can take. When you show signs of discomfort, he backs off a little, but eventually starts getting into it and starts going deeper and harder again. You can\'t help but moan loudly as his dick stretches and fills your pussy, which only encourages him to fuck you harder and deeper.');
      scene.text('Several minutes goes by before he pulls out of you. Seconds later, you feel the head of his dick rubbing against your asshole.');
    }
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'bj', 'resist', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Just a blowjob [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Just a blowjob [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/olu/sex/taxi/taxi4.jpg');
    scene.text('You don\'t feel like getting butt fucked today. When he pulls out of you, you climb off the seat and squat on the floor instead. He gets up on his knees and you start sucking his dick, forcing yourself to take him as deeply into your throat as you can, resisting the urge to gag as you feel your throat stretching.');
    qspCall(s, 'arousal', 'bj', 5, 'deepthroat');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck him off', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/olu/sex/taxi/taxi5.jpg');
    scene.text('When he starts to moan louder, you grab hold of his shaft and start jerking him off as hard as you can while you suck on the head of his dick. After a few minutes, he moans loudly and you feel his cum squirting into your mouth. As it starts to go soft, he withdraws and a bit of his cum leaks from between your lips and dribbles down your chin. You swirl the mouthful of cum around in your mouth before you finally swallow it all down.');
    scene.text('Once finished, he starts to get dressed as you clean up the cum on your chin and lips. He waits for you to finish getting dressed yourself before he opens the van door and you both climb out.');
    scene.text('"I should get back to work. I hope you come visit again," he says with his typical smile as he closes the door and locks it.');
    scene.text('You can\'t help but smile back. "Sure, I\'ll come visit you again. Have a good day at work."');
    scene.text('He nods and the two of you head off in separate directions.');
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'cum_call', 'mouth', 'A55');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['pav_train_hall', ''] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Up the butt', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A55');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/olu/sex/taxi/taxi8.jpg');
    if (((s as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
      scene.text('You grab the lube out of your purse and hand it to him. He takes it and squirts some on his dick and some on your asshole. He spreads the lube around really well.');
    }
    // TODO-QSP: dynamic text: You just lay there letting him rub the tip of his dick against your asshole befo...
    scene.text(`You just lay there letting him rub the tip of his dick against your asshole before he gently pushes his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock up your ass. It stretches you wide as he slowly starts fucking your ass.`);
    scene.text('You moan and groan in a mix of pleasure and pain as he gently thrusts, but starts fucking you a little deeper and a little faster as your moans of pleasure get louder.');
    qspCall(s, 'arousal', 'anal', 5);
    qspCall(s, 'arousal', 'auto_lube', 'anal');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get ass fucked', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/olu/sex/taxi/taxi9.jpg');
    scene.text('You start rubbing your clit to add to the pleasure you\'re feeling. He looks down at you as he loams over you and stares right into your eyes. You feel a bit of a connection with him as you stare back and the pleasure starts to really build up in you.');
    qspCall(s, 'arousal', 'anal', 5);
    qspCall(s, 'arousal', 'vaginal_finger', (-5));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/olu/sex/taxi/taxi13.jpg');
    scene.text('He pulls out of your ass and gets up, pulling your head over towards his dick. You slide off the seat and kneel down in front of him, grabbing his dick in your hand and jerking him off. Opening your mouth, large spurts of his cum hits you in the face while others shoot into your mouth. As his dick starts to go limp in your hand, you swallow the cum in your mouth.');
    scene.text('He starts to get dressed as you clean up the cum on your chin and lips. He waits for you to finish getting dressed yourself before he opens the van door and you both climb out.');
    scene.text('"I should get back to work. I hope you come visit again," he says with his typical smile as he closes the door and locks it.');
    scene.text('You can\'t help but smile back. "Sure, I\'ll come visit you again. Have a good day at work."');
    scene.text('He nods and the two of you head off in separate directions.');
    qspCall(s, 'arousal', 'hj', 2);
    qspCall(s, 'cum_call', 'mouth', 'A55');
    qspCall(s, 'cum_call', 'face', 'A55');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['pav_train_hall', ''] },
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

function enterOluTaxiSexAnal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/olu/sex/taxi/taxi10.jpg');
  if (((s as any).analPlugIn ?? 0) === 1) {
    scene.text('He grabs you in his strong hands and spins you around before you feel him grab your buttplug and pull it out, leaving your ass feeling hollow and empty, craving to be filled again as you feel the head of his dick rubbing against your gaping ashole.');
    if (((s as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
      scene.text('You grab the lube out of your purse and hand it to him. He takes it and squirts some on his dick and some on your asshole. He spreads the lube around really well.');
    } else {
      scene.text('He rubs your pussy with his hand until his fingers are wet with your pussy juices, which he uses as lube.');
      // TODO-QSP: dynamic text: His dick easily slides into your gaping hole and you feel your ass stretching as...
      scene.text(`His dick easily slides into your gaping hole and you feel your ass stretching as his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick pushes its way inside you. He starts slowly fucking your ass, being careful not to go too fast or too deep. As your moans grow louder, he picks up the pace a little and goes a little deeper, letting you get used to his massive cock.`);
    }
  } else {
    scene.text('He grabs you in his strong hands and spins you around before you feel the head of his dick rubbing against your asshole.');
    if (((s as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
      scene.text('You grab the lube out of your purse and hand it to him. He takes it and squirts some on his dick and some on your asshole. He spreads the lube around really well.');
    } else {
      scene.text('He rubs your pussy with his hand until his fingers are wet with your pussy juices, which he uses as lube.');
      // TODO-QSP: dynamic text: The head of his cock presses against your asshole, the pressure building until i...
      scene.text(`The head of his cock presses against your asshole, the pressure building until it painfully pops into your ass, causing you to hiss in pain. You feel your asshole stretching as his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick pushes its way inside you. He starts slowly fucking your ass, being careful not to go too fast or too deep. As your moans grow louder, he picks up the pace a little and goes a little deeper, letting you get used to his massive cock.`);
    }
  }
  qspCall(s, 'arousal', 'anal', 5);
  qspCall(s, 'arousal', 'auto_lube', 'anal');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Get butt fucked', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/olu/sex/taxi/taxi11.jpg');
    scene.text('He leans over you and starts fucking you a little harder and a little deeper. He takes a firm grip on your hip with his large powerful hand and holds you in place, so you can\'t pull away from him or his giant cock as he thrusts it into your asshole. You briefly wonder if anyone might look down the alleyway and see what\'s happening, but soon you find it harder and harder to focus on anything but the dick splitting your ass.');
    qspCall(s, 'arousal', 'anal', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Pound that ass', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/olu/sex/taxi/taxi12.jpg');
    scene.text('He picks up the speed and starts fucking your ass harder and faster, forcing himself deeper up your ass. He doesn\'t slow down until he notices you groaning in pain, backing off a little and finding the sweet spot, going as deep and as fast as he can without hurting you.');
    qspCall(s, 'arousal', 'anal', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/olu/sex/taxi/taxi13.jpg');
    scene.text('He pulls out of your ass and gets up, pulling your head over towards his dick. You slide off the seat and kneel down in front of him, grabbing his dick in your hand and jerking him off. Opening your mouth, large spurts of his cum hits you in the face while others shoot into your mouth. As his dick starts to go limp in your hand, you swallow the cum in your mouth.');
    scene.text('He starts to get dressed as you clean up the cum on your chin and lips. He waits for you to finish getting dressed yourself before he opens the van door and you both climb out.');
    scene.text('"I should get back to work. I hope you come visit again," he says with his typical smile as he closes the door and locks it.');
    scene.text('You can\'t help but smile back. "Sure, I\'ll come visit you again. Have a good day at work."');
    scene.text('He nods and the two of you head off in separate directions.');
    qspCall(s, 'arousal', 'hj', 2);
    qspCall(s, 'cum_call', 'mouth', 'A55');
    qspCall(s, 'cum_call', 'face', 'A55');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['pav_train_hall', ''] },
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
    case 'station':
      enterStation(s, scene);
      break;
    case 'djibril_taxi_sex':
      enterDjibrilTaxiSex(s, scene);
      break;
    case 'djibril_just_anal':
      enterDjibrilJustAnal(s, scene);
      break;
    case 'djibril_taxi_sex_anal':
      enterDjibrilTaxiSexAnal(s, scene);
      break;
    case 'djibril_selfie_anal':
      enterDjibrilSelfieAnal(s, scene);
      break;
    case 'djibril_taxi_sex_anal1':
      enterDjibrilTaxiSexAnal1(s, scene);
      break;
    case 'olu_taxi_sex':
      enterOluTaxiSex(s, scene);
      break;
    case 'olu_taxi_sex_vaginal':
      enterOluTaxiSexVaginal(s, scene);
      break;
    case 'olu_taxi_sex_anal':
      enterOluTaxiSexAnal(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const olutaxi: LocationDef = {
  name: 'olutaxi',
  title: 'He sits back down on the bench and you walk over and take a ',
  region: 'other',
  enter: enter,
};
