import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterTheBeginning(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  if (((s as any).arturplan ?? 0) > 4000) {
    (s as any).arturplan = ((s as any).arturplan ?? 0) - (1000);
  }
  qspCall(s, 'stat', '');
  (s as any).horand = Math.floor(Math.random() * 100) + 1;
  (s as any).gbrand = Math.floor(Math.random() * 100) + 1;
  scene.text('You enter a large warehouse, where he pulls out a bottle of vodka and a snack.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Drink with Arthur', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    scene.text('Arthur walks over to a table, places the bottle of vodka on it and invites you to sit on a chair.');
    scene.text('You drink together together and he tells you about a few funny adventures he has had. He keeps refilling your glass and encouraging you to keep drinking.');
    scene.text('Not wanting to be rude, you keep drinking. Once you start feeling tipsy, he pulls you in close and gives you a hug before he begins to fondle your breasts and squeeze your ass.');
    scene.actions([
      { label: 'Let him undress you', handler: (st: GameState) => {
    if ((!((s as any).palevorin ?? 0))) {
      (s as any).palevorin = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
    qspCall(s, 'boyStat', 'A73');
    (s as any).spafinloc = 4;
    qspCall(s, 'cum_manage', '');
    scene.img('images/shared/sex/vag/doggy/rinsex.jpg');
    scene.text('You feel relaxed and start hugging him back in response. Once you return his hug, he starts undressing you.');
    scene.text('Once he has taken all your clothes off, he lies you down on your stomach, then spreads your legs and buttocks until he has a clear view and easy access to your pussy.');
    scene.text('He moves up close and you feel the tip of his cock rubbing against your pussy lips. Once your pussy starts to get wet and lubricates the tip of his dick, he slides it inside you.');
    scene.text('He is slow and gentle at first, but quickly starts to pick up speed, pounding you hard and deep while periodically slapping your ass cheeks in turn.');
    if (((s as any).horand ?? 0) > ((s as any).pcs_horny ?? 0)) {
    }
    qspCall(s, 'arousal', 'vaginal', 20, 'sub', 'rough');
    qspCall(s, 'stat', '');
    if ((((s as any).gbrand ?? 0) < 95  &&  ((s as any).palevorin ?? 0) === 1)  ||  ((s as any).palevorin ?? 0) > 1) {
      qspCall(s, 'money', 'earn', 2000);
      scene.text('After some time, he pulls out and you feel spurts of warm cum splattering across your ass and lower back. Once he\'s done, he wipes his dick on your ass and climbs off you.');
      // TODO-QSP: dynamic text: As you get dressed, he writes you a premium for <<$func('money', 'string_profit'...
      scene.text(`As you get dressed, he writes you a premium for ${qspFunc(s, 'money', 'string_profit', 2000)} and leaves it on the table before walking out.`);
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Go home', goto: ['city_residential', ''] },
      ]);
    } else {
      if (((s as any).gbrand ?? 0) >= 95  &&  ((s as any).palevorin ?? 0) === 1) {
        scene.text('While Arthur is fucking you, you hear the creaking of the front door and look up to see two more men enter the room. It\'s Abdul and Hassan, the owners of the neighboring stalls.');
        scene.text('You freeze in shock and shame, but Arthur apparently doesn\'t care and keeps fucking you. The men smile and laugh, whispering something to each other before they say something to Arthur, who barely grunts a reply to them as he keeps fucking you.');
        scene.text('Hassan then smiles at you. "Hey girl, why don\'t you give us a turn? We won\'t tell anyone in the market." You glance back at Arthur, but he doesn\'t show any indication that he cares.');
        qspCall(s, 'arousal', 'vaginal', 20, 'sub', 'rough');
        qspCall(s, 'stat', '');
        qspCall(s, 'willpower', 'gangbang', 'resist', 'hard');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Agree to gangbang', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Agree to gangbang', handler: (st: GameState) => {
    (s as any).palevorin = 4;
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    if ((!((s as any).abdulasex ?? 0))) {
      (s as any).abdulasex = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    if ((!((s as any).hasansex ?? 0))) {
      (s as any).hasansex = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
    qspCall(s, 'npcStat', 'A91');
    qspCall(s, 'npcStat', 'A92', 'a');
    qspCall(s, 'money', 'earn', 5000);
    scene.img('images/shared/sex/group/rinkrug.jpg');
    scene.text('You nod your head and they laugh and pull out their dicks as they walk over. They stroke themselves as they wait for Arthur to finish. It doesn\'t take long before he pulls out and you feel spurts of warm cum splattering over your ass and lower back. Once he\'s done, he wipes his dick on your ass and climbs off you.');
    // TODO-QSP: dynamic text: Adbul immediately moves in behind you and pulls you up by the hips onto all four...
    scene.text(`Adbul immediately moves in behind you and pulls you up by the hips onto all fours. He wastes no time and plunges his ${((s as any).dick || '')}cm ${((s as any).dick_girth || '')} dick into your pussy. You notice he doesn't feel very big, but that doesn't seem to bother him in the slightest as he fucks you hard and fast, constantly slapping your ass cheeks as he makes comments to the others and laughs.`);
    // TODO-QSP: dynamic text: Meanwhile Hassan kneels in front of you and slaps his <<dick>>cm <<$dick_girth>>...
    scene.text(`Meanwhile Hassan kneels in front of you and slaps his ${((s as any).dick || '')}cm ${((s as any).dick_girth || '')} dick against your face several times until you open your mouth. As soon as you do, he shoves his cock inside and holds your head tight as he fucks your mouth and throat.`);
    scene.text('As the two guys spitroast you, Arthur gets dressed and takes a seat. He takes a swig of his drink as he watches you getting fucked.');
    scene.text('After a few minutes, Abdul pulls out and shoots his load over your ass and lower back, adding to the mess Arthur has already made. A few seconds later, Hassan groans and shoots his load into your mouth. Satasfied, they get up and say something to Arthur as they put their dicks away. They then leave without saying anything more.');
    // TODO-QSP: dynamic text: Once they're gone, Arthur looks at you with a smile. "So you like cock do you? W...
    scene.text(`Once they're gone, Arthur looks at you with a smile. "So you like cock do you? Well I can use that. It'll be very useful to my business. Here is a bonus." He gets up and walks out, leaving you a bonus of ${qspFunc(s, 'money', 'string_profit', 5000)}.`);
    qspCall(s, 'arousal', 'bj', 20, ((s as any).npcID1 ?? 0), 'sub', 'rough', 'group', 'gangbang');
    qspCall(s, 'arousal', 'vaginal', (-20), ((s as any).npcID ?? 0), 'sub', 'rough', 'group', 'gangbang');
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID1 ?? 0), 1);
    (s as any).spafinloc = 4;
    qspCall(s, 'cum_manage', '');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go home', goto: ['city_residential', ''] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'No', handler: (st: GameState) => {
    qspCall(s, 'money', 'earn', 2000);
    (s as any).palevorin = 2;
    scene.text('Your face red with shame, you just silently shake your head. They again whisper something to each other and then sit down to watch as Arthur continues fucking you. Unable to do anything about it, you try to ignore them.');
    scene.text('After some time, he pulls out and you feel spurts of warm cum splattering over your ass and lower back. Once he\'s done, he wipes his dick on your ass and climbs off you.');
    // TODO-QSP: dynamic text: You get up and start to gather up your things as Abdul and Hassan laugh and star...
    scene.text(`You get up and start to gather up your things as Abdul and Hassan laugh and stare at your naked body. You get dressed as quickly as you can as Arthur writes you a premium for ${qspFunc(s, 'money', 'string_profit', 2000)}. "It's okay, I'll deal with them." he says quietly. You silently nod and leave.`);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go home', goto: ['city_residential', ''] },
    ]);
  } },
        ]);
      }
    }
  } },
      { label: 'Suck', handler: (st: GameState) => {
    if ((!((s as any).palevorin ?? 0))) {
      (s as any).palevorin = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    qspCall(s, 'boyStat', 'A73');
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
    scene.img('images/shared/sex/blowjob/deep4.jpg');
    // TODO-QSP: dynamic text: You kneel down in front of Arthur as he takes his <<dick>>cm <<$dick_girth>> coc...
    scene.text(`You kneel down in front of Arthur as he takes his ${((s as any).dick || '')}cm ${((s as any).dick_girth || '')} cock out. You take it into your mouth and start sucking it, Arthur letting you guide the action and do all the work, only occasionally thrusting himself down your throat and making you gag.`);
    if (((s as any).horand ?? 0) > ((s as any).pcs_horny ?? 0)) {
      qspCall(s, 'arousal', 'bj', 10, 'sub', 'rough', 'deepthroat');
      qspCall(s, 'stat', '');
    }
    if (((s as any).horand ?? 0) <= ((s as any).pcs_horny ?? 0)) {
      qspCall(s, 'arousal', 'bj', 10, 'sub', 'rough', 'deepthroat');
      qspCall(s, 'stat', '');
    }
    if ((((s as any).gbrand ?? 0) < 95  &&  ((s as any).palevorin ?? 0) === 1)  ||  ((s as any).palevorin ?? 0) > 1) {
      qspCall(s, 'money', 'earn', 2000);
      // TODO-QSP: dynamic text: After some time, he pulls his dick almost all the way out of your mouth, leaving...
      scene.text(`After some time, he pulls his dick almost all the way out of your mouth, leaving only the tip inside. Within a few seconds, you taste his cum as he shoots his load into your mouth, spurt after spurt filling your mouth. Once he's done, he pulls his dick out of your mouth and wipes it on your lips. As you get dressed, he writes you a premium for ${qspFunc(s, 'money', 'string_profit', 2000)} and leaving it on the table before walking out.`);
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Go home', goto: ['city_residential', ''] },
      ]);
    } else {
      if (((s as any).gbrand ?? 0) >= 95  &&  ((s as any).palevorin ?? 0) === 1) {
        scene.text('After some time, he pulls his dick almost all the way out of your mouth, leaving only the tip inside. Within a few seconds, you taste his cum as he shoots his load into your mouth, spurt after spurt filling your mouth. Once he\'s done, he pulls his dick out of your mouth and wipes it on your lips.');
        scene.text('As he finishes, you notice that Abdul and Hassan are watching. You don\'t remember hearing them enter and freeze in shock and shame. The men smile and laugh, whispering something to each other before they say something to Arthur, who barely grunts a reply to them.');
        scene.text('Hassan then smiles at you. "Hey girl, why don\'t you give us a turn? We won\'t tell anyone in the market." You glance back at Arthur, but he doesn\'t show any indication that he cares.');
        qspCall(s, 'willpower', 'bj', 'resist', 'hard');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Agree to suck them as well', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Agree to suck them as well', handler: (st: GameState) => {
    (s as any).palevorin = 4;
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    if ((!((s as any).abdulasex ?? 0))) {
      (s as any).abdulasex = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    if ((!((s as any).hasansex ?? 0))) {
      (s as any).hasansex = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    qspCall(s, 'boyStat', 'A91');
    qspCall(s, 'boyStat', 'A92', 'a');
    qspCall(s, 'money', 'earn', 5000);
    scene.img('images/shared/sex/blowjob/rintri.jpg');
    scene.text('You nod your head and the two men immediately walk over and pull their dicks out. You start sucking them in turn, but they sometimes force you to suck both at the same time.');
    scene.text('After a few minutes, they both cum in your mouth. They then pull their dicks out and wipe them on your lips and cheeks before putting them away They say something to Arthur, laughing as they leave.');
    // TODO-QSP: dynamic text: Once they're gone, Arthur looks at you with a smile. "So you like cock do you? W...
    scene.text(`Once they're gone, Arthur looks at you with a smile. "So you like cock do you? Well I can use that. It'll be very useful to my business. Here is a bonus." He gets up and walks out, leaving you a bonus of ${qspFunc(s, 'money', 'string_profit', 5000)}.`);
    qspCall(s, 'arousal', 'bj', 10, ((s as any).npcID ?? 0), 'sub', 'rough', 'group', 'gangbang');
    qspCall(s, 'arousal', 'bj', 10, ((s as any).npcID1 ?? 0), 'sub', 'rough', 'group', 'gangbang');
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID1 ?? 0), 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go home', goto: ['city_residential', ''] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Wipe your mouth and leave', handler: (st: GameState) => {
    qspCall(s, 'money', 'earn', 2000);
    (s as any).palevorin = 2;
    // TODO-QSP: dynamic text: Your face red with shame, you wipe the cum from your lips and fix your clothes b...
    scene.text(`Your face red with shame, you wipe the cum from your lips and fix your clothes before Arthur hands you ${qspFunc(s, 'money', 'string_profit', 2000)}. "It's okay, I'll deal with them." he says quietly. You silently nod and leave.`);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go home', goto: ['city_residential', ''] },
    ]);
  } },
        ]);
      }
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterGroup(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'money', 'earn', 5000);
  if (((s as any).repa ?? 0) < 6) {
    (s as any).repa = 6;
  }
  qspCall(s, 'boyStat', 'A91');
  qspCall(s, 'npcStat', 'A92', 'a');
  qspCall(s, 'npcStat', 'A73', 'b');
  scene.img('images/shared/sex/group/tri6.jpg');
  scene.text('Arthur leads you into the warehouse where Abdul and Hassan are waiting. They all talk to each other in their native language before Arthur turns to you. "Take off your clothes and get on your knees." Abdul and Hassan are pulling out their dicks and heading over. You do as instructed and as soon as your knees touch the floor, you have three dicks thrust in your face. You take turns sucking one and jerking the others.');
  qspCall(s, 'arousal', 'bj', 3, ((s as any).npcID ?? 0), 'sub', 'group');
  qspCall(s, 'arousal', 'bj', 3, ((s as any).npcID1 ?? 0), 'sub', 'group');
  qspCall(s, 'arousal', 'bj', 4, ((s as any).npcID2 ?? 0), 'sub', 'group');
  qspCall(s, 'arousal', 'hj', (-7), ((s as any).npcID ?? 0), 'sub', 'group');
  qspCall(s, 'arousal', 'hj', (-7), ((s as any).npcID1 ?? 0), 'sub', 'group');
  qspCall(s, 'arousal', 'hj', (-6), ((s as any).npcID2 ?? 0), 'sub', 'group');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'More', handler: (st: GameState) => {
    scene.img('images/shared/sex/group/triplep.jpg');
    // TODO-QSP: dynamic text: Satisfied with this, Abdul stops and lies down on a couch, pulling you over with...
    scene.text(`Satisfied with this, Abdul stops and lies down on a couch, pulling you over with him. You straddle him and feel his ${((s as any).dick || '')}cm ${((s as any).dick_girth || '')} dick slide inside your pussy as Arthur stands to the side and pulls your head towards him.`);
    (s as any).anal = ((s as any).anal ?? 0) + (1);
    // TODO-QSP: dynamic text: You open your mouth and start sucking his <<dick2>>cm <<$dick_girth2>> dick whil...
    scene.text(`You open your mouth and start sucking his ${((s as any).dick2 || '')}cm ${((s as any).dick_girth2 || '')} dick while Hassan kneels down behind you and you feel the tip of his cock rubbing against your asshole. You groan in pain as he forces his dick into your ass.`);
    // TODO-QSP: dynamic text: You feel his <<dick1>>cm <<$dick_girth1>> cock stretching your ass. The three me...
    scene.text(`You feel his ${((s as any).dick1 || '')}cm ${((s as any).dick_girth1 || '')} cock stretching your ass. The three men then all start fucking you in tandem. This goes on for some time, occasionally stopping so they can switch positions. They eventually stop and get you back on your knees, pushing your head back and telling you to open your mouth. They all jerk off on your face and into your mouth.`);
    (s as any).horand = Math.floor(Math.random() * 100) + 1;
    if (((s as any).horand ?? 0) > ((s as any).pcs_horny ?? 0)) {
    }
    qspCall(s, 'arousal', 'bj', 20, ((s as any).npcID2 ?? 0), 'sub', 'rough', 'group');
    qspCall(s, 'arousal', 'vaginal', 20, ((s as any).npcID ?? 0), 'sub', 'rough', 'group');
    qspCall(s, 'arousal', 'anal', (-20), ((s as any).npcID1 ?? 0), 'sub', 'rough', 'group');
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID1 ?? 0), 1);
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID2 ?? 0), 1);
    qspCall(s, 'cum_call', 'face', ((s as any).npcID1 ?? 0), 1);
    qspCall(s, 'cum_call', 'face', ((s as any).npcID2 ?? 0), 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/facial/facial10.jpg');
    // TODO-QSP: dynamic text: Once they're done, Arthur gives you a bonus of <<$func('money', 'string_profit',...
    scene.text(`Once they're done, Arthur gives you a bonus of ${qspFunc(s, 'money', 'string_profit', 5000)} before they all walk out, leaving you to get cleaned up and dressed.`);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go home', goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSex(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A73');
  scene.img('images/shared/sex/blowjob/bj15.jpg');
  // TODO-QSP: dynamic text: Arthur leads you into the warehouse and pushes you onto your knees in front of h...
  scene.text(`Arthur leads you into the warehouse and pushes you onto your knees in front of him before he pulls his ${((s as any).dick || '')}cm ${((s as any).dick_girth || '')} dick out. He smacks you in the face with it and then rubs the tip against your lips before he shoves his dick into your mouth and starts roughly fucking your throat.`);
  qspCall(s, 'arousal', 'bj', 10, 'sub', 'rough');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Further', handler: (st: GameState) => {
    (s as any).rand_act = Math.floor(Math.random() * 3) + 0;
    if ((!((s as any).rand_act ?? 0))) {
      (s as any).spafinloc = 12;
      qspCall(s, 'cum_manage', '');
      qspCall(s, 'arousal_funcs', 'stretch', 'oral', 1);
      qspCall(s, 'stat', '');
      scene.img('images/shared/sex/cum/rinslutbj.jpg');
      scene.text('He grabs you by the hair and fucks your mouth roughly, forcing his dick down your throat and making you gag. He then pulls out and shoots his load across your face and into your mouth before shoves his dick back in your mouth and making you suck it clean.');
      // TODO-QSP: dynamic text: Once he's finished, he tucks his dick back in his pants and throws <<$func('mone...
      scene.text(`Once he's finished, he tucks his dick back in his pants and throws ${qspFunc(s, 'money', 'string_profit', 500)} at you.`);
      qspCall(s, 'arousal', 'bj', 10, 'sub', 'rough');
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Go home', goto: ['city_residential', ''] },
      ]);
    } else {
      if (((s as any).rand_act ?? 0) === 1) {
        qspCall(s, 'stat', '');
        scene.img('images/shared/sex/vag/miss/vagmis1.jpg');
        scene.text('He pulls his dick out of your mouth and pushes you down on a couch on your back. He spreads your legs and lines his dick up with your pussy, rubbing the tip against your lips before he shoves his dick inside and starts fucking you hard and fast.');
        qspCall(s, 'arousal', 'vaginal', 10, 'sub', 'rough');
        qspCall(s, 'stat', '');
        scene.actions([
          { label: 'Finish', handler: (st: GameState) => {
    qspCall(s, 'cum_manage', '');
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/stomach/bellycum.jpg');
    scene.text('He roughly fucks you for some time before he begins panting and you can tell he is close to finishing. He then suddenly pulls out and shoots his load over your stomach.');
    // TODO-QSP: dynamic text: Once he's finished, he tucks his dick back in his pants and throws <<$func('mone...
    scene.text(`Once he's finished, he tucks his dick back in his pants and throws ${qspFunc(s, 'money', 'string_profit', 500)} at you.`);
    qspCall(s, 'arousal', 'vaginal', 10, 'sub', 'rough');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go home', goto: ['city_residential', ''] },
    ]);
  } },
        ]);
      } else {
        qspCall(s, 'stat', '');
        scene.img('images/shared/sex/anal/doggy/anal28.jpg');
        scene.text('He pulls his dick out of your mouth and bends you over onto all fours. He kneels down behind you and rubs the tip of his dick against your pussy lips before he moves up and rubs it against your asshole. He pushes his dick in, with only your saliva and pussy juices for lucubration. You squeal in pain.');
        scene.text('He slowly works his way deeper into your ass, holding onto your hips tightly so you can\'t pull away. He works his way balls deep and then starts fucking you hard and fast.');
        qspCall(s, 'arousal', 'anal', 10, 'sub', 'rough');
        qspCall(s, 'stat', '');
        scene.actions([
          { label: 'Finish', handler: (st: GameState) => {
    (s as any).spafinloc = 1;
    qspCall(s, 'cum_manage', '');
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/analcreampie/analcum.jpg');
    scene.text('He roughly fucks you for some time before he begins panting and you can tell he is close to finishing. He then suddenly shoots his load deep inside your ass.');
    // TODO-QSP: dynamic text: Once he's finished, he tucks his dick back in his pants and throws <<$func('mone...
    scene.text(`Once he's finished, he tucks his dick back in his pants and throws ${qspFunc(s, 'money', 'string_profit', 500)} at you.`);
    qspCall(s, 'arousal', 'anal', 10, 'sub', 'rough');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go home', goto: ['city_residential', ''] },
    ]);
  } },
        ]);
      }
    }
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'the_beginning':
      enterTheBeginning(s, scene);
      break;
    case 'group':
      enterGroup(s, scene);
      break;
    case 'sex':
      enterSex(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const city_marketsex: LocationDef = {
  name: 'city_marketsex',
  title: 'You enter a large warehouse, where he pulls out a bottle of ',
  region: 'city',
  enter: enter,
};
