import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Hail taxi', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/locations/shared/taxi/base\'+rand(1, 5)+\'.jpg');
    scene.text('Seeing a taxi coming down the road, you raise your arm and wave him down. When he stops, you get in.');
    // TODO-QSP: dynamic text: "The fare is ' + $func('money', 'string_price', 250) + '," he says.
    scene.text('"The fare is \' + $func(\'money\', \'string_price\', 250) + \'," he says.');
    if (qspFunc(s, 'money', 'can_afford', 250) === 1) {
      qspCall(s, 'taxi', 'locations');
    } else {
      qspCall(s, 'willpower', 'misc', 'self', 'easy');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Don\'t tell him you can\'t pay [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Don\'t tell him you can\'t pay [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'misc', 'self', 'easy');
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).taxi_pay = 1;
    qspCall(s, 'taxi', 'locations');
  } },
        ]);
      }
    }
    qspCall(s, 'willpower', 'prostitution', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Offer to trade sex for a ride [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Offer to trade sex for a ride [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'prostitution', 'self');
    qspCall(st, 'willpower', 'pay', 'self');
  }, goto: ['taxi', 'ride'] },
      ]);
    }
    scene.actions([
      { label: 'Get out', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterLocations(s: GameState, scene: SceneBuilder): void {
  if (((s as any).loc ?? 0) !== 'city_residential') {
    scene.actions([
      { label: 'Go to the city\'s residential area', goto: ['taxi', 'trip'] },
    ]);
  }
  if (((s as any).loc ?? 0) !== 'city_center') {
    scene.actions([
      { label: 'Go to the city center', goto: ['taxi', 'trip'] },
    ]);
  }
  if (((s as any).loc ?? 0) !== 'city_industrial'  ||  ((s as any).loc_arg ?? 0) !== 'redlight') {
    scene.actions([
      { label: 'Go to the city\'s red light district', goto: ['taxi', 'trip'] },
    ]);
  }
  if (((s as any).loc ?? 0) !== 'city_industrial'  ||  ((s as any).loc_arg ?? 0) === 'redlight') {
    scene.actions([
      { label: 'Go to the city\'s industrial region', goto: ['taxi', 'trip'] },
    ]);
  }
  if (((s as any).loc ?? 0) !== 'city_island') {
    scene.actions([
      { label: 'Go to the island', goto: ['taxi', 'trip'] },
    ]);
  }
  if (((s as any).loc ?? 0) !== 'bdsm_mansion'  &&  ((s as any).bdsmclub ?? 0)?.['unlocked'] === 1) {
    scene.actions([
      { label: 'Go to the BDSM club', goto: ['taxi', 'trip'] },
    ]);
  }
  if (((s as any).loc ?? 0) !== 'city_suburbs') {
    scene.actions([
      { label: 'Go to the city suburbs', goto: ['taxi', 'trip'] },
    ]);
  }
  scene.build();
}

function enterRide(s: GameState, scene: SceneBuilder): void {
  (s as any).stat['taxi_sex_pay'] = ((s as any).stat['taxi_sex_pay'] ?? 0) + (1);
  qspCall(s, 'fame', 'city', 'prostitute', 2);
  qspCall(s, 'stat', '');
  qspCall(s, 'npcgeneratec', '', 0, 'Taxi Driver', Math.floor(Math.random() * 17) + 30);
  qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
  scene.img('images/locations/shared/taxi/showtits.jpg');
  scene.text('"I don\'t have any money," you blurt out once seated in the back seat.');
  scene.text('The driver turns and glares back at you. "Why did you wave me down then? Get out!"');
  scene.text('You quickly pull your top down, showing him your breasts. "Maybe we can work something out?"');
  scene.text('He looks you over for a minute before nodding. "Okay, you give me a ride, then I\'ll give you a ride," he says with a leer, driving you back to his garage.');
  if (((s as any).stat ?? 0)?.['vaginal'] === 0) {
  } else {
    scene.actions([
      { label: 'Suggest he fuck you', goto: ['taxi', 'vag1'] },
    ]);
  }
  scene.actions([
    { label: 'Suggest you blow him', goto: ['taxi', 'bj'] },
    { label: 'Suggest anal', goto: ['taxi', 'anal'] },
    { label: 'Let him decide', handler: (st: GameState) => {
    if (((s as any).temp ?? 0) === 'bj') {
      scene.actions([{ label: 'Continue', goto: ['taxi', 'bj'] }]);
    }
    if (((s as any).temp ?? 0) === 'vaginal') {
      scene.actions([{ label: 'Continue', goto: ['taxi', 'vag1'] }]);
    }
    if (((s as any).temp ?? 0) === 'anal') {
      scene.actions([{ label: 'Continue', goto: ['taxi', 'anal'] }]);
    }
  } },
    { label: 'Chicken out', handler: (st: GameState) => {
    (s as any).stat['taxi_sex_pay'] = ((s as any).stat['taxi_sex_pay'] ?? 0) - (1);
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterVag1(s: GameState, scene: SceneBuilder): void {
  (s as any).taxioffer = 1;
  (s as any).ending = Math.floor(Math.random() * 2) + 0;
  (s as any).cumprecheck = 1;
  qspCall(s, 'cum_manage', '');
  scene.img('images/locations/shared/taxi/sex/taxi1,\'+rand(0, 5)+\'.jpg');
  scene.text('He turns off the taxi and gets out before he walks around and opens the back door. He already has his cock out and is stroking it, rubbing some hand lotion for lubrication.');
  // TODO-QSP: dynamic text: He half pulls you out of the taxi and pulls your clothes off just enough to give...
  scene.text(`He half pulls you out of the taxi and pulls your clothes off just enough to give him a clear path to your pussy. He rubs the tip of his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock against your pussy lips.`);
  scene.text('He then shoves his dick in, driving himself balls-deep into you. It hurts at first as he begins to furiously fuck your unprepared pussy, not caring whether or not you\'re enjoying it, but you soon begin to moan in pleasure.');
  qspCall(s, 'arousal', 'vaginal', 10, 'sub', 'unknown', 'rough');
  qspCall(s, 'fame', 'city', 'prostitute', 3);
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'cum_inside', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Beg him not to cum inside you [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Beg him not to cum inside you [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'cum_inside', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    if (((s as any).ending ?? 0) === 0  ||  (Math.floor(Math.random() * 3) + 0) !== 0) {
      qspCall(s, 'taxi', 'cum1');
    } else {
      qspCall(s, 'taxi', 'cum2');
    }
  } },
    ]);
  }
  qspCall(s, 'willpower', 'cum_inside', 'force', 'easy');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Wrap your legs around him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Wrap your legs around him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'cum_inside', 'force', 'easy');
    qspCall(s, 'willpower', 'pay', 'force');
    qspCall(s, 'taxi', 'cum3');
  } },
    ]);
  }
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    if (((s as any).pcs_horny ?? 0) > 95  &&  (Math.floor(Math.random() * 5) + 0) < 1) {
      (s as any).ending = 2;
    }
    if ((!((s as any).ending ?? 0))) {
      qspCall(s, 'taxi', 'cum1');
    }
    if (((s as any).ending ?? 0) === 1) {
      qspCall(s, 'taxi', 'cum2');
    }
    if (((s as any).ending ?? 0) === 2) {
      qspCall(s, 'taxi', 'cum3');
    }
  } },
  ]);
  scene.build();
}

function enterCum1(s: GameState, scene: SceneBuilder): void {
  scene.text('He pounds your pussy for several minutes. As your pleasure mounts, he suddenly pulls out and starts shooting spurts of cum all over your stomach. With a final moan and spurt, he stands up and leers down at you before he pushes you back inside the taxi and slams the door shut.');
  qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'unknown', 'rough');
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'cum_call', 'stomach', 'Taxi Driver');
  qspCall(s, 'stat', '');
  qspCall(s, 'taxi', 'end');
  scene.build();
}

function enterCum2(s: GameState, scene: SceneBuilder): void {
  scene.text('He pounds your pussy for several minutes. As your pleasure mounts, you feel yourself close to climax before he suddenly starts shooting spurts of cum deep inside you. After a final moan and spurt, he stands up and leers down at you before he pushes you back inside the taxi and slams the door shut.');
  qspCall(s, 'cuminsidereact', '');
  qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'unknown', 'rough');
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'cum_call', '', '', 'Taxi Driver');
  qspCall(s, 'stat', '');
  qspCall(s, 'taxi', 'end');
  scene.build();
}

function enterCum3(s: GameState, scene: SceneBuilder): void {
  scene.text('He pounds your pussy for several minutes. As your pleasure mounts, you feel close to climax and wrap your legs around him to pull him deeper inside before he suddenly moans and pumps his cum deep inside you.');
  qspCall(s, 'cuminsidereact', '');
  qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'unknown', 'rough');
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'cum_call', '', '', 'Taxi Driver');
  qspCall(s, 'stat', '');
  qspCall(s, 'taxi', 'end');
  scene.build();
}

function enterEnd(s: GameState, scene: SceneBuilder): void {
  scene.text('He walks back to the driver\'s door, putting his dick away as he gets in and starts the taxi up. He then turns and asks you where you need to go.');
  scene.actions([
    { label: 'Choose destination', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    qspCall(s, 'taxi', 'locations');
  } },
  ]);
  scene.build();
}

function enterBj(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcgeneratec', '', 0, 'Taxi Driver', Math.floor(Math.random() * 15) + 21);
  qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
  (s as any).taxioffer = 1;
  scene.img('images/locations/shared/taxi/sex/bj0,\'+rand(0, 2)+\'.mp4');
  // TODO-QSP: dynamic text: He turns the taxi off and tells you to move to the front seat. You get out and c...
  scene.text(`He turns the taxi off and tells you to move to the front seat. You get out and crawl into the passenger seat. He already has his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock out of his pants and is stroking it. He doesn't say a word, simply giving you a look that causes you to scurry over and wrap your lips around his cock. You start sucking his cock while your hand fondles his balls.`);
  scene.text('He moans and leans back to give you more room to work. Sometime later, he grabs your hair with his hand and forces your head down, ramming his cock down your throat. "That\'s a good little slut."');
  scene.text('This causes you to gag and makes your eyes water, but he doesn\'t seem to care.');
  scene.text('Several minutes later, your throat begins to feel raw as he suddenly stops and holds your head still, his cock still in your mouth. "I\'m cumming, and you better swallow every drop of it, bitch!"');
  scene.text('Almost at once, you feel the spurts of cum blasting into your mouth. Once he\'s done, he jerks your head away and pushes you away. You swallow his cum like he told you as he puts his dick away.');
  scene.text('"What the fuck are you still sitting there for? Get in the fucking back!" he barks and you quickly do as he says before he asks you where you need to go.');
  qspCall(s, 'fame', 'city', 'prostitute', 3);
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'unknown', 'rough', 'deepthroat');
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0));
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Choose destination', handler: (st: GameState) => {
    qspCall(s, 'taxi', 'locations');
  } },
  ]);
  scene.build();
}

function enterAnal(s: GameState, scene: SceneBuilder): void {
  (s as any).taxioffer = 1;
  scene.img('images/locations/shared/taxi/sex/taxi3,\'+rand(0, 5)+\'.jpg');
  scene.text('He turns off the taxi and gets out before walking around to the back door. He already has his cock out, rubbing some hand lotion on it for lubrication as he strokes it.');
  // TODO-QSP: dynamic text: He half pulls you out of the taxi and pulls your clothes aside '+iif($pantywornt...
  scene.text(`He half pulls you out of the taxi and pulls your clothes aside '+iif($pantyworntype ! 'none' or PCloPanties ! 1, 'and your panties down ', ')+'just enough to completely bare your ass, which he gives a hard slap. He then rubs the tip of his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock against your anus as you stroke your clit with your hand and bite your lower lip, trying to prepare yourself mentally for what's about to come.`);
  // TODO-QSP: dynamic text: With a grunt, he shoves his <<dick>>cm <<$dick_girth>> cock up your ass, pushing...
  scene.text(`With a grunt, he shoves his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock up your ass, pushing it balls deep. You grunt in pain and bite your lip nearly hard enough to draw blood as he begins to furiously fuck you, not caring whether or not you're enjoying it.`);
  scene.text('As your asshole begins to loosen up and the teasing you\'re giving your clit turns you on, it begins to hurt less and feel better. A slight moan of pleasure escapes your lips as he pounds your ass until he finally stops, his cock buried balls deep. He grunts as you feel the spurts of cum shooting deep into you.');
  scene.text('With a final moan and spurt, he stands up. Pushing you back inside, he slams the door and returns to the driver\'s seat, starting the taxi before asking you where you need to go.');
  qspCall(s, 'fame', 'city', 'prostitute', 3);
  qspCall(s, 'arousal', 'anal', 5, 'sub', 'unknown', 'rough');
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'cum_call', 'anus', 'Taxi Driver');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Choose destination', handler: (st: GameState) => {
    qspCall(s, 'taxi', 'locations');
  } },
  ]);
  scene.build();
}

function enterTrip(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 6) + 5);
  if (((s as any).workDisk ?? 0) === 3  &&  ((s as any).konvert ?? 0) === 1) {
    (s as any).badrand = Math.floor(Math.random() * 101) + 0;
    if (((s as any).badrand ?? 0) >= 98) {
      (s as any).konvert = 0;
    }
  }
  if ((!((s as any).taxi_pay ?? 0))) {
    if ((!((s as any).taxioffer ?? 0))) {
      qspCall(s, 'money', 'pay', 250);
    } else {
      (s as any).taxioffer = 0;
    }
    scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc', 'loc_arg'); } }]);
  } else {
    (s as any).taxi_pay = 0;
    qspCall(s, 'npcgeneratec', '', 0, 'Taxi Driver', Math.floor(Math.random() * 17) + 30);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    scene.img('images/locations/shared/taxi/base\'+rand(1, 5)+\'.jpg');
    scene.text('Having told the driver where you need to go, he chats in a friendly way as he drives. After a while, you finally tell him you don\'t have any money.');
    scene.text('He hits the brakes hard and pulls over, bringing the taxi to a sudden stop before he turns around. "You fucking little cunt! I should take you to the police right now. It would serve your ass right!"');
    scene.text('A chill runs through you. "Please, please don\'t take me to the police! I\'m sorry! I was just desperate…"');
    scene.text('He glares at you for a few minutes. "Fine, you might not have any money, but you\'re still paying for this ride."');
    scene.text('He pulls back onto the road and drives into one of the seedier parts of the city before pulling into a back alley and coming to a stop.');
    scene.text('He turns the taxi off and gets out. "Get out, bitch!"');
    scene.text('You look around in fear, but seeing the look on his face makes you more scared, so you do as he says and get out. Once you\'re out, he roughly grabs you by the arm, pulls you around to the front of his taxi and shoves you against it.');
    scene.text('"Take off your clothes, bitch!" When you don\'t immediately do as he says, he threatens you. "It\'s either that or the police…"');
    scene.text('Nodding in understanding, you remove your clothes as he instructed. Once completely naked, he turns you around and bends you over the front of his car.');
    if (((s as any).lube ?? 0) > 1) {
      scene.text('Realising he\'ll likely fuck you, you turn your head to look back at him and offer your lube. "Wait, I have some lube in my purse! It will make it better for both of us."');
      scene.text('He laughs and slaps your ass hard enough to leave an outline of his hand on your ass. "Maybe better for you, but I like to dry fuck bitches and listen to their sobs. Maybe this will teach you a lesson," he says with a cruel look in his eyes as he gives your ass another hard smack.');
    }
    if (((s as any).stat ?? 0)?.['vaginal'] === 0) {
      qspCall(s, 'willpower', 'sex', 'resist', 'easy');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Tell him your a virgin [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Tell him you\'re a virgin [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'sex', 'resist', 'easy');
    qspCall(s, 'willpower', 'pay', 'resist');
    scene.text('"Wait, I\'m still a virgin! Please don\'t fuck my pussy!" you plead, hoping to change his mind. He pauses for just a moment, considering.');
    scene.actions([
      { label: 'See how he reacts', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 0) < 25) {
      qspCall(s, 'taxi', 'alleyvag');
      qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'unknown', 'rough');
      qspCall(s, 'cum_call', '', '', 'Taxi Driver');
    } else {
      qspCall(s, 'taxi', 'alleyanal');
      qspCall(s, 'arousal', 'anal', 5, 'sub', 'unknown', 'rough');
      qspCall(s, 'cum_call', 'anus', 'Taxi Driver');
    }
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Find a main road', goto: ['taxi', 'random'] },
    ]);
  } },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Accept the consequences of your actions', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 100) + 1) > 50) {
      qspCall(s, 'taxi', 'alleyvag');
      qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'unknown', 'rough');
      qspCall(s, 'cum_call', '', '', 'Taxi Driver');
    } else {
      qspCall(s, 'taxi', 'alleyanal');
      qspCall(s, 'arousal', 'anal', 5, 'sub', 'unknown', 'rough');
      qspCall(s, 'cum_call', 'anus', 'Taxi Driver');
    }
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Find a main road', goto: ['taxi', 'random'] },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterAlleyvag(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/taxi/sex/taxialleyvag.mp4');
  // TODO-QSP: dynamic text: You hear him spit and look back over your shoulder to see him rubbing his spit o...
  scene.text(`You hear him spit and look back over your shoulder to see him rubbing his spit on the tip of his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock. He comes up behind you and caresses the end of his dick against your pussy lips before he thrusts his unlubricated ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock into your pussy.`);
  scene.text('He struggles to work his dick into you, but with your hips firmly against the side of his car, you have nowhere to go, and he finally shoves himself balls deep. You cry out in pain, bite your lower lip and look back at him with a pleading look. The harsh, cruel look in his eyes tells you any pleas to be gentle will fall on deaf ears.');
  scene.text('As he starts pounding your pussy hard, his stomach slamming against your ass drives your hips painfully against the car, so you furiously rub your clit, hoping to make yourself at least a little wet.');
  scene.text('He repeatedly pulls nearly all the way out before he violently slams forward, painfully slamming your hips against the taxi\'s cold, hard metal. You\'re sure he\'s making this as unpleasant for you as possible. Biting your lower lip as you endure his furious pounding, you feel pain and pleasure soar through your body. For what seems like an eternity, he fucks you hard, your moans getting louder.');
  scene.text('"You like getting used like a whore, don\'t you slut?" he growls before he stops with his dick buried balls deep in you. As he grunts, you realize he\'s cumming inside you! You feel his spurts of cum filling up your pussy as he grinds himself against you, as if trying to get even deeper. He then suddenly pulls away, causing you to almost stumble backwards as he puts his dick back in his pants.');
  scene.text('Before you\'re fully dressed, you hear the taxi start and look up just in time to see him rapidly backing away and out of the alley.');
  scene.text('"Hey! Wait! Stop!" you yell, but he doesn\'t even slow down, leaving you half-naked and alone in the alley. You hope he at least dropped you off near where you need to go.');
  scene.build();
}

function enterAlleyanal(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/taxi/sex/taxialleyanal.jpg');
  // TODO-QSP: dynamic text: You hear him spit and look back over your shoulder to see him rubbing his spit o...
  scene.text(`You hear him spit and look back over your shoulder to see him rubbing his spit on the tip of his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock. He comes up behind you and caresses the end of his dick against your anus before he pushes his unlubricated ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock into your ass, causing you to wince in pain.`);
  scene.text('He struggles to work his dick into you, but with your hips firmly against the side of his car, you have nowhere to go, and he finally shoves himself balls deep. You cry out in pain and turn to ask him to be gentler, but the harsh, cruel look in his eyes stops you before you even ask. You realize he would never be gentle with you. He\'s enjoying hurting you.');
  // TODO-QSP: dynamic text: He starts pounding your ass hard without mercy, his hips slamming against your a...
  scene.text('He starts pounding your ass hard without mercy, his hips slamming against your ass and driving your hips painfully against the taxi\'s cold, hard metal. You close your eyes against the pain and try to rub your clit as a distraction, but the pain is too much and you feel tears running down your cheeks\' + iif(pcs_makeup > 1, \', smearing your makeup\', \') + \'.');
  scene.text('He repeatedly pulls nearly all the way out before he violently slams back in, slamming your hips against the car\'s metal, causing you to whimper in pain. You\'re sure he\'s making this as painful for you as possible. Biting your lower lip, you do your best to endure his furious pounding.');
  scene.text('When he notices your tears, he grabs you roughly by your hair and painfully twists your head to look at him as he pounds you. You can see an evil grin on his face. "Go ahead and cry, bitch. I like it when bitches cry. Maybe this will teach you not to try and treat a man\'s job like a game."');
  scene.text('He fucks you for what feels like an eternity. Even though your asshole feels looser and rubbing your clit is helping, it hurts. He then suddenly stops with his dick buried balls deep in your ass. As he grunts, you realize he is cumming inside you and feel his spurts of cum filling up your ass.');
  scene.text('He grinds himself against you, as if trying to get even deeper before he suddenly pulls away, causing you to almost stumble backwards. The merciful relief from his cock leaving your ass is short-lived as the sharp stinging sensation is quickly replaced by a deep throbbing and burning sensation as he puts his dick back in his pants and you start getting dressed.');
  scene.text('Before you\'re fully dressed, you hear the taxi start and look up just in time to see him rapidly backing away and out of the alley.');
  scene.text('"Hey! Wait! Stop!" you yell, but he doesn\'t even slow down, leaving you half-naked and alone in the alley. You hope he at least dropped you off near where you need to go.');
  if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
    (s as any).pcs_makeup = 0;
  }
  scene.build();
}

function enterRandom(s: GameState, scene: SceneBuilder): void {
  if ((!(Math.floor(Math.random() * 4) + 0))) {
    scene.actions([{ label: 'Continue', goto: ['city_residential', ''] }]);
  } else {
    if ((!(Math.floor(Math.random() * 3) + 0))) {
      scene.actions([{ label: 'Continue', goto: ['city_center', ''] }]);
    } else {
      if ((!(Math.floor(Math.random() * 2) + 0))) {
        scene.actions([{ label: 'Continue', goto: ['city_island', ''] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['city_industrial', ''] }]);
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'locations':
      enterLocations(s, scene);
      break;
    case 'ride':
      enterRide(s, scene);
      break;
    case 'vag1':
      enterVag1(s, scene);
      break;
    case 'cum1':
      enterCum1(s, scene);
      break;
    case 'cum2':
      enterCum2(s, scene);
      break;
    case 'cum3':
      enterCum3(s, scene);
      break;
    case 'end':
      enterEnd(s, scene);
      break;
    case 'bj':
      enterBj(s, scene);
      break;
    case 'anal':
      enterAnal(s, scene);
      break;
    case 'trip':
      enterTrip(s, scene);
      break;
    case 'alleyvag':
      enterAlleyvag(s, scene);
      break;
    case 'alleyanal':
      enterAlleyanal(s, scene);
      break;
    case 'random':
      enterRandom(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const taxi: LocationDef = {
  name: 'taxi',
  title: '"I don\'t have any money," you blurt out once seated in the b',
  region: 'other',
  enter: enter,
};
