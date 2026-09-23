import { qspCall, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterDinDush(s: GameState, scene: SceneBuilder): void {
  (s as any).noshampoo = 1;
  qspCall(s, 'din_van', 'showerdin');
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (1);
  (s as any).pcs_hairbsh = 0;
  (s as any).pcs_makeup = 1;
  if (((s as any).frost ?? 0) > 0) {
    (s as any).frost = 0;
  }
  qspCall(s, 'stat', '');
  scene.img('images/shared/home/bathroom/dush.mp4');
  // TODO-QSP: dynamic text: <<$din_dush_text>>
  scene.text(`${((s as any).din_dush_text ?? '')}`);
  (s as any).din_dush_text = '';
  if (((s as any).deodorant_on ?? 0) === 1) {
    qspCall(s, 'sweat', 'remove_deo');
    scene.text('<br>Your deodorant gets washed away in the shower.');
  }
  // TODO-QSP: end
  scene.build();
}

function enterDinAnalPlugInOff(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).analPlugInbonus = 10;
  (s as any).analPlugIn = 0;
  (s as any).analPlugOut = 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/sex/placer_sex16.mp4');
  // TODO-QSP: end
  scene.build();
}

function enterMeet(s: GameState, scene: SceneBuilder): void {
  if (((s as any).placerParameter ?? 0)?.['number_of_man'] < 4  &&  ((s as any).pcs_ass ?? 0) > 14  &&  ((s as any).pcs_vag ?? 0) > 14  &&  ((s as any).mesec ?? 0) <= 0) {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex1.jpg');
    // TODO-QSP: dynamic text: After the guys show you around their apartment, they begin to prepare a table in...
    scene.text(`After the guys show you around their apartment, they begin to prepare a table in the kitchen. You offer to help them and they gladly accept, and the three of you have the table ready in no time. Then one of them produces a bottle of vodka and asks: "Thanks for the help, ${((s as any).pcs_nickname ?? '')}… would you like a drink?"`);
    scene.actions([
      { label: 'Drink with the guys', goto: ['placer_sex', 'vodka'] },
      { label: 'Decline the drink', goto: ['placer_sex', 'game'] },
    ]);
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'drugs', 'alcohol', 'vodka', 3);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/sleep/drunk.jpg');
    scene.text('They can stomach their alcohol a lot better than you, and before you know it you\'re absolutely hammered. The guys look like they\'re still feeling fine.');
    scene.text('Once they realize you\'re drunk enough for them to make their move, they begin tugging at your clothes and undress you on one of their beds. You\'re too drunk to fight them off, and just let it happen.');
    scene.text('Once they have you naked, you hear the guys discussing among one another: "Alright, we got her here… that was easy! Whose turn is it to go first?"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    ((st as any).stat = (st as any).stat ?? {})['rape_count'] = ((st as any).stat['rape_count'] ?? 0) + (1);
    ((st as any).stat = (st as any).stat ?? {})['gangbang_count'] = ((st as any).stat['gangbang_count'] ?? 0) + (1);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).guy = ((st as any).guy ?? 0) + (((st as any).placerParameter ?? 0)?.['number_of_man']);
    (st as any).ciklkm = ((st as any).placerParameter ?? 0)?.['number_of_man'];
    if ((!((st as any).dormrapeQW ?? 0))) {
      (st as any).dormrapeQW = 1;
    }
    (st as any).placer_rand1 = (Math.floor(Math.random() * 101) + 0);
    if (((st as any).placer_rand1 ?? 0) < 10) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/pavlovsk/park/gop/sex/gop/gopga...
      scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/park/gop/sex/gop/gopgang2.jpg"></center>`);
    }
    if (((st as any).placer_rand1 ?? 0) >= 10) {
      // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/locations/pavlovsk/park/...
      scene.text(`<center><video autoplay loop ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/park/sex/orgy1,` + (Math.floor(Math.random() * 5) + 0) + '.mp4"></video></center>');
    }
    // TODO-QSP: :markdormrape
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    (st as any).temp_rand = (Math.floor(Math.random() * 3) + 1);
    if (((st as any).temp_rand ?? 0) === 1) {
      scene.text('One of the guys starts to fuck your backdoor.');
      qspCall(st, 'arousal', 'anal', 10, 'gangbang', 'unknown');
      qspCall(st, 'stat', '');
    } else {
      scene.text('One of the guys starts to fuck your pussy.');
      qspCall(st, 'arousal', 'vaginal', 10, 'gangbang', 'unknown');
      qspCall(st, 'stat', '');
    }
    (st as any).ciklkm = ((st as any).ciklkm ?? 0) - (1);
    if (((st as any).ciklkm ?? 0) > 0) {
      if (((st as any).ciklkm ?? 0) < ((st as any).placerParameter ?? 0)?.['number_of_man'] - 1) {
        scene.text('Once the guy is finished with you, one of his buddies immediately takes his place between your legs.');
      }
      if (((st as any).cumsumbod ?? 0) >= 200  &&  (((st as any).cumloc ?? 0)[1] > 0  ||  ((st as any).cumloc ?? 0)[2] > 0  ||  ((st as any).cumloc ?? 0)[4] > 0  ||  ((st as any).cumloc ?? 0)[5] > 0  ||  ((st as any).cumloc ?? 0)[6] > 0  ||  ((st as any).cumloc ?? 0)[7] > 0  ||  ((st as any).cumloc ?? 0)[14] > 0)) {
        (st as any).cumspclnt = 6;
        qspCall(st, 'cum_cleanup', '');
        (st as any).cumspclnt = 14;
        qspCall(st, 'cum_cleanup', '');
        (st as any).cumspclnt = 15;
        qspCall(st, 'cum_cleanup', '');
        scene.text('One of the guys indignantly shouts: "Come on guys, she\'s disgusting! There\'s sperm everywhere! At least clean the whore up a little when you\'re done with her, so the next guy doesn\'t have to stir his cock around in your mess!" ');
        scene.text('You see the last guy who fucked you nod apologetically, and you feel him wiping the cum off your skin with some cloth. When you look down, you see he\'s using your own clothes to wipe you clean with.');
      }
      qspCall(st, 'stat', '');
      if (((st as any).ciklkm ?? 0) === 1) {
        qspCall(st, 'boyStat', '', ((st as any).boy1 ?? 0));
      } else {
        qspCall(st, 'npcgeneratec', '', 0, 'guy from the park', (Math.floor(Math.random() * 11) + 18));
        qspCall(st, 'boyStat', '', ((st as any).npclastgenerated ?? 0));
      }
      // TODO-QSP: jump 'markdormrape'
    }
    qspCall(st, 'stat', '');
    (st as any).endrandom = 0;
    if ((!((st as any).endrandom ?? 0))) {
      // TODO-QSP: dynamic text: Finally the last guy spills his seed over your exhausted body, and they all leav...
      scene.text(`Finally the last guy spills his seed over your exhausted body, and they all leave the room except for ${((st as any).boydesc2 ?? '')}. He sits down on a different bed, chuckling while he watches you sluggishly brush up. Your legs are shaky from the exhaustion, and the alcohol is also still in your system. Both of those factors make you feel rather disoriented, and you try to ignore ${((st as any).boydesc2 ?? '')}'s smug grin. When you're ready to leave, he waves you goodbye with a smirk on his face: "You were a nice fuck, ${((st as any).pcs_nickname ?? '')}. I see why Pavlovsk girls are so popular… we'll definitely be visiting again."`);
      qspCall(st, 'arousal', 'end');
      scene.actions([
        { label: 'Leave the hostel', handler: (st: GameState) => {
    (st as any).podvalrape = 0;
  }, goto: ['pav_residential', ''] },
      ]);
    } else {
      if (((st as any).endrandom ?? 0) === 1) {
        scene.actions([
          { label: 'Open your eyes', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).body_write = 5;
    (st as any).face_write = 1;
    (st as any).podvalwriterand = 0;
    qspCall(st, 'stat', '');
    scene.img(`images/locations/pavlovsk/park/gop/sex/gop/podvalwrite${((st as any).podvalwriterand ?? '')}.jpg`);
    scene.text('When you finally come to your senses, you\'re alone in the room. You carefully get up from the bed… you feel exhausted, and your body aches everywhere. When you walk past a mirror in search for your clothes, you realize to your shame that the guys have written all sorts of vulgar language all over your body!');
    scene.text('Those bastards! You quickly get dressed and try to cover up the writings as much as you can before leaving the room. Hopefully you can clean that up before anyone sees it on you!');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave the hostel', handler: (st: GameState) => {
    (st as any).podvalrape = 0;
  }, goto: ['pav_residential', ''] },
    ]);
  } },
        ]);
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterVodka(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'drugs', 'alcohol', 'vodka');
  scene.img('images/locations/pavlovsk/park/sex/placer_sex2.jpg');
  scene.text('You accept the drink happily: "Sure, a drink would be nice! Thanks!"');
  scene.text('The boys pour the vodka into some shot glasses, and you enjoy their company while you drink. They have lots of interesting stories and anecdotes to tell, and you never feel bored around them.');
  // TODO-QSP: dynamic text: When your glasses are empty, <<$boydesc2>> looks at you and asks, with the bottl...
  scene.text(`When your glasses are empty, ${((s as any).boydesc2 ?? '')} looks at you and asks, with the bottle in his hand: "Ready for another round?"`);
  if (((s as any).pantyworntype ?? 0) === 'none') {
    qspCall(s, 'underwear', 'wear');
    scene.text('You quickly excuse yourself: "Give me a minute!" and head for the bathroom. These guys are great! They\'re actually treating you like a lady, unlike most guys in Pavlovsk… you don\'t want to give them the wrong idea about you by accidentally flashing them your naked pussy! You quickly put on some <a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: VIEW /u0027images/locations/pavlovsk/park/sex/placer_sex129.jpg/u0027 */ return s; }); return false;">panties</a> and return to the living room.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Have another drink', handler: (st: GameState) => {
    qspCall(st, 'drugs', 'alcohol', 'vodka');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex3.jpg');
    // TODO-QSP: dynamic text: You nod: "Absolutely!" and <<$boydesc2>> fills your glass as well as theirs.
    scene.text(`You nod: "Absolutely!" and ${((st as any).boydesc2 ?? '')} fills your glass as well as theirs.`);
    scene.text('The guys put out some snacks to go with the booze, and playfully give you compliments while they sip their vodka. You feel very much at ease around them, and just smile.');
    scene.actions([
      { label: 'Keep chatting', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex4.jpg');
    scene.text('The guys tell you several more stories, though their focus seems to more on how cute you are. They use every opportunity they have to let you know that, and you\'re a tad embarrassed by all the attention they\'re showering you with: "Guys, stop it! You\'re making me blush!"');
    // TODO-QSP: dynamic text: They have no intentions of stopping. In fact, they scoot over to you and <<$boyd...
    scene.text(`They have no intentions of stopping. In fact, they scoot over to you and ${((st as any).boydesc2 ?? '')} grins as he says: "${((st as any).pcs_nickname ?? '')} you're so beautiful! Especially those gorgeous boobs of yours… what are they, I'm guessing ${((st as any).titsize ?? '')}? Maybe you could show us?"`);
    // TODO-QSP: dynamic text: With those words, <<$boydesc2>> reaches down and pulls your clothes out of the w...
    scene.text(`With those words, ${((st as any).boydesc2 ?? '')} reaches down and pulls your clothes out of the way, revealing your breasts to everyone in the room.`);
    qspCall(st, 'arousal', 'flashlite', 20, 'sub');
    qspCall(st, 'stat', '');
    if (((st as any).alko ?? 0) > 5  ||  ((st as any).pcs_horny ?? 0) >= 80) {
      scene.actions([
        { label: 'Smile innocently', goto: ['placer_sex', 'piano'] },
        { label: 'Push his hand away', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/sex/placer_sex6.jpg');
    // TODO-QSP: dynamic text: You push his hand away with a smile and say: "Not so fast, <<$boydesc2>>… we sti...
    scene.text(`You push his hand away with a smile and say: "Not so fast, ${((st as any).boydesc2 ?? '')}… we still have plenty of time for that later."`);
    // TODO-QSP: dynamic text: <<$boydesc2>> sighs with frustration, but recovers quickly and nods: "You''re ri...
    scene.text(`${((st as any).boydesc2 ?? '')} sighs with frustration, but recovers quickly and nods: "You're right. How about another drink, then?"`);
    scene.actions([
      { label: 'You don\'t want to drink more', goto: ['placer_sex', 'game'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Remove his hand', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/sex/placer_sex6.jpg');
    // TODO-QSP: dynamic text: You push his hand away with a smile and say: "Not so fast, <<$boydesc2>>… we sti...
    scene.text(`You push his hand away with a smile and say: "Not so fast, ${((st as any).boydesc2 ?? '')}… we still have plenty of time for that later."`);
    // TODO-QSP: dynamic text: <<$boydesc2>> sighs with frustration, but recovers quickly and nods: "You''re ri...
    scene.text(`${((st as any).boydesc2 ?? '')} sighs with frustration, but recovers quickly and nods: "You're right. How about another drink, then?"`);
    scene.actions([
      { label: 'You don\'t want to drink more', goto: ['placer_sex', 'game'] },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } },
    { label: 'You don\'t want to drink more', goto: ['placer_sex', 'game'] },
  ]);
  scene.build();
}

function enterPiano(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/sex/placer_sex5.jpg');
  // TODO-QSP: dynamic text: You''re feeling too good to argue with him, and just smile at the audacity <<$bo...
  scene.text(`You're feeling too good to argue with him, and just smile at the audacity ${((s as any).boydesc2 ?? '')} is showing. When he realizes you're not objecting in any way, he grows even bolder and puts his hands on them. He playfully rubs and pulls your nipples, trying to tease a moan out of you.`);
  scene.text('His friend also wants to touch you, and puts his hand on your ass as he suggests: "Maybe there are other things you could show us…"');
  scene.text('He begins to pull away your clothes when he doesn\'t notice any direct objections from you, exposing the panties that you -luckily- just put on.');
  qspCall(s, 'arousal', 'foreplay', 5, 'sub', 'group');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Help him take off your clothes', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/sex/placer_sex7.jpg');
    scene.text('You reach down, and the guy flinches and immediately pulls away his hand.');
    scene.text('You give him a reassuring smile and say: "Relax! I was only going to give you a hand!"');
    // TODO-QSP: dynamic text: You wink at him as you pull away your clothes, ignoring your panties on purpose....
    scene.text(`You wink at him as you pull away your clothes, ignoring your panties on purpose. When ${((st as any).boydesc2 ?? '')} reaches down to your ass to pull your panties down, you stop him: "Slow down a bit! It's not fair if I do all the showing, and you do all the watching… maybe you guys could show me something first?"`);
    qspCall(st, 'arousal', 'foreplay', 5, 'sub', 'group', 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Watch them', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/sex/placer_sex8.jpg');
    // TODO-QSP: dynamic text: The boys nod and immediately take off their shirts. You can tell that <<$boydesc...
    scene.text(`The boys nod and immediately take off their shirts. You can tell that ${((st as any).boydesc2 ?? '')} is feeling confident around you, and instead of pulling his pants down, he walks over to you. With a confident grin he says: "I want you to do it for me."`);
    scene.text('You play along and reach for his jeans, rubbing your hand over his groin teasingly at first. You can feel he\'s packing a serious erection in there. You then undo the button and undo his fly, before slowly pulling his pants down over his hips.');
    qspCall(st, 'arousal', 'foreplay', 5, 'sub', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Give him a blowjob', handler: (st: GameState) => {
    (st as any).guy = ((st as any).guy ?? 0) + (1);
    (st as any).sexpartkno = 1;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex9.jpg');
    // TODO-QSP: dynamic text: As soon as you pull the pants past his hips, his cock eagerly jumps up. A large ...
    scene.text(`As soon as you pull the pants past his hips, his cock eagerly jumps up. A large bead of precum is forming on its head and threatening to drop to the ground, so you quickly part your lips and close them around his erection. ${((st as any).boydesc2 ?? '')} gasps when you run your tongue over his cock, licking the precum off. It tastes a bit salty… but fairly good, just like you expected.`);
    // TODO-QSP: dynamic text: You like <<$boydesc2>> a lot, and do your best to make him feel good with your m...
    scene.text(`You like ${((st as any).boydesc2 ?? '')} a lot, and do your best to make him feel good with your mouth. You suck him teasingly slowly, all the while looking him right in the eyes.`);
    scene.text('He can\'t take this sweet torture of yours for very long, and groans: "Almost there… I\'m going to cum!"');
    qspCall(st, 'arousal', 'bj', 5, 'sub');
    qspCall(st, 'stat', '');
    if (((st as any).pcs_throat ?? 0)>10) {
      scene.actions([
        { label: 'Swallow his load', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/sex/placer_sex10.jpg');
    scene.text('He\'s very impressed with your skills! You smile to yourself, for as far you can smile with a cock in your mouth.');
    // TODO-QSP: dynamic text: You suck him off a bit faster, and when he''s about to have his orgasm you relax...
    scene.text(`You suck him off a bit faster, and when he's about to have his orgasm you relax your throat and take his whole cock in your mouth. You realize you can reach his balls with your tongue, and begin to lick them while ${((st as any).boydesc2 ?? '')} roars. Seconds later, you feel his hot load slide down your throat, and you only pull your head back when you're certain he is done.`);
    scene.text('His friend had slowly been jerking himself off this whole time, and signals that he\'s close to orgasming just from watching your show.');
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'deepthroat');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Swallow his load too', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).boy ?? 0), 1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex11.mp4');
    // TODO-QSP: dynamic text: You pull away from <<$boydesc2>> and quickly get down on your knees in front of ...
    scene.text(`You pull away from ${((st as any).boydesc2 ?? '')} and quickly get down on your knees in front of his friend. You like ${((st as any).boydesc2 ?? '')} more, but it would be cruel to ignore his friend completely after what you just did in front of him.`);
    // TODO-QSP: dynamic text: Your hands are still slick with your saliva from deepthroating <<$boydesc2>>, an...
    scene.text(`Your hands are still slick with your saliva from deepthroating ${((st as any).boydesc2 ?? '')}, and you quickly smear some on his friend's cock before closing your lips around it. You feel jets of his sperm hitting your tongue almost immediately, and you release his cock from your mouth and softly lick it while you feel the splurts landing on your tongue. You let one or two gobs drop down onto your chest, but you swallow most of it.`);
    scene.text('Once you\'re certain he is finished, you quickly excuse and go brush up in the bathroom. The boys watch you dumbfoundedly when you get back, not really sure what the hell just happened.');
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'deepthroat');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Gather your things and get ready to leave', handler: (st: GameState) => {
    scene.text('You gather your things, and smile apologetically at the guys when you say: "Alright guys… I\'ve had a really nice time with you, but I really should go home!"');
    // TODO-QSP: dynamic text: The guys were hoping you would stay over, and try to persuade you: "You don''t h...
    scene.text(`The guys were hoping you would stay over, and try to persuade you: "You don't have to go, ${((st as any).pcs_nickname ?? '')}! You can just crash here, we can still hang out for a while longer and chat! Besides… I make the world's best omelette! You'd be robbing yourself from a once-in-a-lifetime experience if you don't at least have a taste of that in the morning!"`);
    scene.text('');
    if ((((st as any).week ?? 0) >= 1  &&  ((st as any).week ?? 0) < 5)  ||  ((st as any).week ?? 0) === 7) {
      scene.text('With some regret in your voice you tell them: "Sorry, boys. I have school tomorrow, I really can\'t stay. Maybe some other time?"');
    } else {
      if (((st as any).week ?? 0) === 5  ||  ((st as any).week ?? 0) === 6) {
        scene.text('You think to yourself: "Well… I don\'t have school tomorrow, I suppose I could stay if I want to."');
        qspCall(st, 'arousal', 'end');
        scene.actions([
          { label: 'Agree to sleep over', goto: ['placer_sex', 'stay'] },
        ]);
      }
    }
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Decline and leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    qspGoto(st, 'pav_residential', '');
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
      { label: 'Take off your panties', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex12.mp4');
    // TODO-QSP: dynamic text: You quickly pull away from <<$boydesc2>>''s cock, and look at him mischievously....
    scene.text(`You quickly pull away from ${((st as any).boydesc2 ?? '')}'s cock, and look at him mischievously. You lie down on the kitchen table and make a show of slowly taking off your panties, before you spread your legs wide for the boys.`);
    if (((st as any).analPlugIn ?? 0) === 1) {
      scene.actions([
        { label: 'Let them pull out your butt plug', handler: (st: GameState) => {
    // TODO-QSP: delact $selact
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDinAnalPlugInOff(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('The immediately walk up to you when you spread your legs, their looks a bit lower than you\'d expect. Then you realize why and silently mutter to yourself: "Oh no! I still have my butt plug in!"');
    // TODO-QSP: dynamic text: <<$boydesc2>> puts his hand on it and lightly tugs at your plug as he teases you...
    scene.text(`${((st as any).boydesc2 ?? '')} puts his hand on it and lightly tugs at your plug as he teases you: "Oh my… what a nasty girl you are! Do you have more toys like this?"`);
    scene.text('You feel deeply ashamed, and your cheeks turn crimson red when he carefully pulls it out and admires its size. You quietly tell them: "Sorry boys, I just like the way it feels. Anyway… weren\'t you about to do something?"');
  } },
      ]);
    }
    scene.actions([
      { label: 'Groan as he shoves his cock in', handler: (st: GameState) => {
    (st as any).cumprecheck = 1;
    qspCall(st, 'cum_manage', '');
    qspCall(st, 'stat', '');
    if (((st as any).analPlugIn ?? 0) === 1) {
      (st as any).analPlugIn = 0;
      (st as any).analPlugOut = 1;
    }
    scene.img('images/locations/pavlovsk/park/sex/placer_sex13.jpg');
    // TODO-QSP: dynamic text: <<$boydesc2>> quickly moves up to you and rams his cock inside your pussy, screa...
    scene.text(`${((st as any).boydesc2 ?? '')} quickly moves up to you and rams his cock inside your pussy, screaming: "I wasn't done! I was so close!"`);
    scene.text('You groan at how roughly he shoved his cock in. Luckily you had done a good job covering his cock with saliva during your blowjob, that could\'ve gone a lot worse.');
    // TODO-QSP: dynamic text: Seeing your discomfort, <<$boydesc2>> apologizes and slows down, gently rubbing ...
    scene.text(`Seeing your discomfort, ${((st as any).boydesc2 ?? '')} apologizes and slows down, gently rubbing his finger over your clitoris while he slowly moves his hips. His slow thrusts and gentle clit stimulation make you feel great, and within moments you whisper you forgive him as you feel your orgasm rapidly approaching. You have a strong orgasm while his dick is inside you.`);
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'vaginal', 15, 'sub', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Turn around', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/sex/placer_sex14.jpg');
    // TODO-QSP: dynamic text: When you recover from your orgasm, <<$boydesc2>> pulls you up from the table and...
    scene.text(`When you recover from your orgasm, ${((st as any).boydesc2 ?? '')} pulls you up from the table and shoves you down on your stomach on top of it. He enters you again from behind, and begins to fuck you harder. Your saliva from earlier, plus the juices from your orgasm make it a lot smoother, and you just relax against the table and enjoy him fucking you.`);
    // TODO-QSP: dynamic text: Just when you''re completely relaxed and have surrendered to your feelings, you ...
    scene.text(`Just when you're completely relaxed and have surrendered to your feelings, you hear swearing. His friend wanted to insert his dick inside you as well, but ${((st as any).boydesc2 ?? '')} pushed him away. He scolds his friend: "Relax man, you'll get your turn… just let me finish first!"`);
    qspCall(st, 'arousal', 'vaginal', 15, 'sub');
    qspCall(st, 'stat', '');
    if (((st as any).stat ?? 0)?.['men_fucked'] > 30) {
      (st as any).minut = ((st as any).minut ?? 0) + 30;
      qspCall(st, 'stat', '');
      scene.actions([
        { label: 'Say you\'ll please his friend too', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You feel bad for <<$boydesc2>>''s friend, and tell them: "There''s no need to ar...
    scene.text(`You feel bad for ${((st as any).boydesc2 ?? '')}'s friend, and tell them: "There's no need to argue, guys! I'll make all of you feel good…"`);
    // TODO-QSP: dynamic text: You see <<$boydesc2>> wants to object, but at the same time he realizes he''s ha...
    scene.text(`You see ${((st as any).boydesc2 ?? '')} wants to object, but at the same time he realizes he's had you to himself for most of the time. He relaxes, and let you do what you want to do."`);
    if (((st as any).placerParameter ?? 0)?.['number_of_man'] === 2) {
      scene.img('images/locations/pavlovsk/park/sex/placer_sex17.jpg');
      // TODO-QSP: dynamic text: The guys pull you off the table without hesitation, and put you down on your kne...
      scene.text(`The guys pull you off the table without hesitation, and put you down on your knees in front of them. You take both of their cocks in your hands, and guide them towards your mouth. You tease them with your tongue, savouring the taste of yourself on ${((st as any).boydesc2 ?? '')}'s cock. That doesn't mean you ignore his friend though; you pay just as much attention to him, sucking him off, or stroking his cock when you have your lips around ${((st as any).boydesc2 ?? '')}'s.`);
      qspCall(st, 'arousal', 'bj', 5, 'sub', 'group');
      qspCall(st, 'arousal', 'hj', (-5), 'sub', 'group');
      qspCall(st, 'stat', '');
      if (((st as any).analPlugInbonus ?? 0) === 10) {
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/sex/placer_sex18.jpg');
    // TODO-QSP: dynamic text: Suddenly <<$boydesc2>> picks you up, and lowers you onto his cock while you put ...
    scene.text(`Suddenly ${((st as any).boydesc2 ?? '')} picks you up, and lowers you onto his cock while you put your arms around him. Then his friend approaches you from the back, and rubs the head of his dick against your tight sphincter. Between kisses, ${((st as any).boydesc2 ?? '')} reassures you: "Just relax, ${((st as any).pcs_nickname ?? '')}… me and my friend will make you feel things you have never felt before, just give into it."`);
    scene.text('Luckily, his friend had the common sense to lubricate his cock properly before pushing it against your ass, and you slowly feel yourself sliding down on him.');
    scene.actions([
      { label: 'Get fucked by both of them', handler: (st: GameState) => {
    (st as any).guy = ((st as any).guy ?? 0) + (1);
    qspCall(st, 'mood', 'raise', 'small');
    qspCall(st, 'arousal_funcs', 'stretch', 'vaginal');
    (st as any).vaginalOrgasm = ((st as any).vaginalOrgasm ?? 0) + (1);
    qspCall(st, 'cum_manage', '');
    (st as any).DPorgasm = ((st as any).DPorgasm ?? 0) + (1);
    qspCall(st, 'boyStat', '', ((st as any).boy1 ?? 0));
    (st as any).sexpartkno = 1;
    (st as any).spafinloc = 3;
    qspCall(st, 'cum_manage', '');
    qspCall(st, 'arousal_funcs', 'stretch', 'anal', 1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex19.mp4');
    scene.text('Wait, what!?');
    scene.text('You had no intentions of this happening when you got here!');
    scene.text('You moan loudly, and try to struggle against their bodies. It doesn\'t work at all, it just lowers you down onto their cocks even more. You feel like putty in their hands, and when both of them fuck you rhythmically you moan like a wanton whore. This must be the best sex you\'ve had in your whole life!');
    scene.text('Both the guys are enjoying your body a great deal as well, and soon you feel both of their cocks shooting their hot cum into your holes. This sends you over the edge as well, and you feel your pussy and ass gripping tightly onto their cocks, milking them for all they\'re worth.');
    scene.text('You feel yourself reeling as you orgasm, and for a moment you forget about everything in the world and just give in to your pleasure.');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'vaginal', 10, 'sub', 'group');
    qspCall(st, 'arousal', 'anal', (-10), 'sub', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Recuperate', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/sex/placer_sex20.jpg');
    scene.text('You wake up on the couch. You try to get up to your feet, but your legs can\'t support your weight and you fall down again.');
    scene.text('There\'s sperm flowing from both your pussy and your anus, and the boys who just fucked you are also relaxing in the room.');
    // TODO-QSP: dynamic text: They smile at you: "That was great, <<$pcs_nickname>>! Probably the best fuck we...
    scene.text(`They smile at you: "That was great, ${((st as any).pcs_nickname ?? '')}! Probably the best fuck we ever had…"`);
    scene.text('You smile at them and ask: "Where\'s your bathroom? I should probably clean up before I leave."');
    // TODO-QSP: dynamic text: <<$boydesc2>> idly waves in a general direction, and you realize they''re not go...
    scene.text(`${((st as any).boydesc2 ?? '')} idly waves in a general direction, and you realize they're not going to help you. You muster all your strength and get to your feet, still feeling rather shaky.`);
    scene.actions([
      { label: 'Take a hot shower', handler: (st: GameState) => {
    (st as any).din_dush_text = 'You get into the shower and thoroughly wash yourself, trying to get all of their cum out of your holes. When you\'re done, you gather your things and get ready to leave.';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDinDush(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave the apartment', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    qspGoto(st, 'pav_residential', '');
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
      } else {
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/sex/placer_sex21.mp4');
    // TODO-QSP: dynamic text: After you suck them both off for a while, the boys pull away from you. <<$boydes...
    scene.text(`After you suck them both off for a while, the boys pull away from you. ${((st as any).boydesc2 ?? '')} says: "I've already had her mouth for a while… you have fun, man. I'll take another hole."`);
    scene.text('He gets behind you and slams his cock into your pussy, while your friend guides his stiff erection to your mouth, happy to just have your cute little face to himself for a while. After a while the boys get into their rhythm, and fuck your mouth and pussy simultaneously. They\'re making you feel so good, you would probably do anything they tell you without question by now.');
    qspCall(st, 'arousal', 'vaginal', 10, 'sub', 'group');
    qspCall(st, 'arousal', 'bj', (-10), 'sub', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/sex/placer_sex22.mp4');
    // TODO-QSP: dynamic text: From his movements, you can feel <<$boydesc2>> is approaching his orgasm. Meanwh...
    scene.text(`From his movements, you can feel ${((st as any).boydesc2 ?? '')} is approaching his orgasm. Meanwhile though, his friend is already there, and he takes his cock out of your mouth and tells you to stick out your tongue. You do as he says without question, and his spurts of cum land on your tongue. You happily swallow it all, still feeling ecsthatic from the fucking you're getting in the meantime.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).guy = ((st as any).guy ?? 0) + (1);
    qspCall(st, 'mood', 'raise', 'small');
    qspCall(st, 'arousal_funcs', 'stretch', 'vaginal');
    (st as any).vaginalOrgasm = ((st as any).vaginalOrgasm ?? 0) + (1);
    (st as any).spafinloc = 12;
    qspCall(st, 'cum_manage', '');
    qspCall(st, 'boyStat', '', ((st as any).boy1 ?? 0));
    (st as any).sexpartkno = 1;
    qspCall(st, 'cum_manage', '');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex15.mp4');
    // TODO-QSP: dynamic text: You do your best to give his friend the attention he deserves with your mouth, b...
    scene.text(`You do your best to give his friend the attention he deserves with your mouth, but by now you can't ignore the rough pounding ${((st as any).boydesc2 ?? '')} is giving you any longer. You feel yourself reeling and grasping for support as you have another orgasm, while ${((st as any).boydesc2 ?? '')} begins to pump his cum inside you. You can barely support your own weight, and when he's done you fall to your knees.`);
    scene.text('You feel his cum slowly seep from your pussy while you catch your breath, and after a while ask him where you can go take a shower to clean up.');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'vaginal', 10, 'sub', 'group', 'rough');
    qspCall(st, 'arousal', 'bj', (-10), 'sub', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Take a hot shower', handler: (st: GameState) => {
    (st as any).din_dush_text = '"I\'m going to take a shower and head home, guys!" you tell the boys. They nod, too exhausted to protest you leaving them. You get into the shower and thoroughly wash yourself, trying to get all of their cum out of your pussy while you rinse your mouth. When you\'re done, you gather your things and get ready to leave.';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDinDush(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave their apartment', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    qspGoto(st, 'pav_residential', '');
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
    } else {
      if (((st as any).placerParameter ?? 0)?.['number_of_man'] === 3  &&  ((st as any).analPlugInbonus ?? 0) === 10  &&  ((st as any).pcs_vag ?? 0) >= 15) {
        scene.img('images/locations/pavlovsk/park/sex/placer_sex23.jpg');
        // TODO-QSP: dynamic text: The guys pull you off the table without hesitation, and put you down on your kne...
        scene.text(`The guys pull you off the table without hesitation, and put you down on your knees in front of them. You take their cocks in your hands, and guide them towards your mouth. You tease them with your tongue, savoring the taste of yourself on ${((st as any).boydesc2 ?? '')}'s cock. That doesn't mean you ignore his friends though; you pay just as much attention to them, sucking them off, or stroking their cock when you have your lips around ${((st as any).boydesc2 ?? '')}'s.`);
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    (st as any).guy = ((st as any).guy ?? 0) + (2);
    qspCall(st, 'mood', 'raise', 'small');
    qspCall(st, 'arousal_funcs', 'stretch', 'vaginal');
    (st as any).vaginalOrgasm = ((st as any).vaginalOrgasm ?? 0) + (1);
    qspCall(st, 'cum_manage', '');
    (st as any).DPorgasm = ((st as any).DPorgasm ?? 0) + (1);
    qspCall(st, 'arousal_funcs', 'stretch', 'anal', 1);
    qspCall(st, 'boyStat', '', ((st as any).boy1 ?? 0));
    (st as any).sexpartkno = 1;
    (st as any).spafinloc = 3;
    qspCall(st, 'cum_manage', '');
    ((st as any).stat = (st as any).stat ?? {})['swallow'] = ((st as any).stat['swallow'] ?? 0) + (1);
    qspCall(st, 'npcgeneratec', '', 0, 'Guy from the park', (Math.floor(Math.random() * 18) + 18));
    qspCall(st, 'boyStat', '', ((st as any).npclastgenerated ?? 0));
    (st as any).sexpartkno = 1;
    (st as any).spafinloc = 12;
    qspCall(st, 'cum_manage', '');
    qspCall(st, 'arousal_funcs', 'stretch', 'oral', 1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex24.mp4');
    scene.text('The guys pull you towards the couch, and position you in a way so all of your holes are available. Soon, you feel a cock press against your lips… you willingly open your mouth and begin to suck on it.');
    scene.text('Another guy slowly works his way into your pussy, and holds still once he\'s completely in. Then you feel the sensation of a cock rubbing against your anus, and you do your best to relax and allow it access.');
    scene.text('Fortunately the guy used a lot of lube, and it doesn\'t hurt that badly. Eventually his cock is all the way in your ass down to his balls, and all of them begin to move slowly.');
    scene.text('It feels heavenly! You begin to buck your hips back against the two guys fucking your pussy and ass, and you can feel the friction of them nearly touching inside your body. You don\'t recall feeling this good in quite a while, and simply decide to enjoy the feeling of the guys fucking you rhythmically while you just surrender to them. If it weren\'t for the cock in your mouth silencing you, you\'d be screaming right now.');
    scene.text('Finally a huge orgasm hits you, and your body goes limp. The guys realize you\'re too far gone to contribute anything more and redouble their own efforts, making you feel even better while they fuck your holes relentlessly.');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'vaginal', 10, 'sub', 'group');
    qspCall(st, 'arousal', 'anal', 10, 'sub', 'group');
    qspCall(st, 'arousal', 'bj', (-10), 'sub', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Recover from your orgasm', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/sex/placer_sex20.jpg');
    scene.text('You\'re not sure how long it lasted. It could be a minute… it could be five, or maybe even ten. Eventually you gain enough strength to take an assessment of the situation. Your sweaty body is naked on the floor, and there\'s cum flowing from all of your holes. You try to get up, but your legs are way too wobbly.');
    scene.text('When you look at the guys, they seem just as spent. They\'re idly hanging around on a bed, slowly watching the cum from your holes drip onto the floor. Your mouth tastes like sperm as well; you probably swallowed at least one load during all that.');
    scene.actions([
      { label: 'Go into the shower', handler: (st: GameState) => {
    (st as any).din_dush_text = '"That was great, guys! But I\'m going to take a shower and head home, I\'m exhausted!" you tell the boys. They nod, too exhausted to protest you leaving them. You get into the shower and thoroughly wash yourself, trying to get all of their cum out of your holes while you rinse your mouth repeatedly. When you\'re done, you gather your things and wave the boys goodbye.';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDinDush(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave the apartment', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    qspGoto(st, 'pav_residential', '');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        qspCall(st, 'mood', 'raise', 'tiny');
        qspCall(st, 'arousal_funcs', 'stretch', 'vaginal');
        (st as any).vaginalOrgasm = ((st as any).vaginalOrgasm ?? 0) + (1);
        qspCall(st, 'cum_manage', '');
        qspCall(st, 'stat', '');
        scene.img('images/locations/pavlovsk/park/sex/placer_sex15.mp4');
        scene.text('Then he changes his mind, and stops his friends: "Hold up, guys. I found her for us, it\'s only fair if I get to finish first."');
        scene.text('Without waiting for a response he increases his tempo and thrusts his cock deep inside you. From his erratic movements, you can tell he must be close to orgasming.');
        scene.text('You\'re also close, and just give in to the pleasure and orgasm loudly on his cock. The spasms of your pussy send him over the edge too, and you feel it twitch and throb inside you. He\'s standing perfectly still, letting your snatch milk the cum out of him.');
        scene.text('When he\'s done he pulls out, and a trickle of cum slowly dribbles out of your used hole. He grins at his friends and yells: "Next!"');
        scene.text('You just chuckle… if you\'re perfectly honest, you wouldn\'t mind going for another round either.');
        (st as any).orgasm_or = 'yes';
        qspCall(st, 'arousal', 'vaginal', 10, 'sub');
        qspCall(st, 'stat', '');
        scene.actions([
          { label: 'Continue', goto: ['placer_sex', 'vodka2'] },
        ]);
      }
    }
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Remain silent', handler: (st: GameState) => {
    qspCall(st, 'mood', 'raise', 'tiny');
    qspCall(st, 'arousal_funcs', 'stretch', 'vaginal');
    (st as any).vaginalOrgasm = ((st as any).vaginalOrgasm ?? 0) + (1);
    qspCall(st, 'cum_manage', '');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex15.mp4');
    // TODO-QSP: dynamic text: Without waiting for a response <<$boydesc2>> increases his tempo and thrusts his...
    scene.text(`Without waiting for a response ${((st as any).boydesc2 ?? '')} increases his tempo and thrusts his cock deep inside you. From his erratic movements, you can tell he must be close to orgasming.`);
    scene.text('You\'re also close, and just give in to the pleasure and orgasm loudly on his cock. The spasms of your pussy send him over the edge too, and you feel it twitch and throb inside you. He\'s standing perfectly still, letting your snatch milk the cum out of him.');
    scene.text('When he\'s done he pulls out, and a trickle of cum slowly dribbles out of your used hole. He grins and yells: "Next!"');
    scene.text('You just chuckle… if you\'re perfectly honest, you wouldn\'t mind going for another round either.');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'vaginal', 10, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['placer_sex', 'vodka2'] },
    ]);
  } },
      ]);
    }
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

function enterGame(s: GameState, scene: SceneBuilder): void {
  scene.img('images/pc/reactions/speak_to_the_hand.jpg');
  // TODO-QSP: dynamic text: <<$boydesc2>> smiles at you: "Alright, no problem. If you don''t want a drink… h...
  scene.text(`${((s as any).boydesc2 ?? '')} smiles at you: "Alright, no problem. If you don't want a drink… how about a game then?"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Play cards', goto: ['placer_sex', 'cards'] },
    { label: 'Play Twister', goto: ['placer_sex', 'twister'] },
    { label: 'No games for you, go home', handler: (st: GameState) => {
    qspCall(st, 'placer_sex', 'rape');
  } },
  ]);
  scene.build();
}

function enterVodka2(s: GameState, scene: SceneBuilder): void {
  (s as any).cumspclnt = 2;
  qspCall(s, 'cum_cleanup', '');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/sex/placer_sex25.mp4');
  // TODO-QSP: dynamic text: The guys gawk at you with baffled expressions on their faces, and you look at th...
  scene.text(`The guys gawk at you with baffled expressions on their faces, and you look at them with a slight blush on your cheeks. Just when you were about to ask if you should go wash up quickly, ${((s as any).boydesc2 ?? '')} takes you by the shoulders and guides you to the couch, where his friend is slowly jerking off. His cock is quite big, and you can't wait to have it inside you.`);
  // TODO-QSP: dynamic text: <<$boydesc2>> smiles at you and says: "You look like you need to sit down for a ...
  scene.text(`${((s as any).boydesc2 ?? '')} smiles at you and says: "You look like you need to sit down for a bit, ${((s as any).pcs_nickname ?? '')}. Why don't you be a sweet girl and take a seat on my friend's lap?"`);
  // TODO-QSP: dynamic text: You turn your back to the guy, and spread your ass cheeks slightly as you guide ...
  scene.text(`You turn your back to the guy, and spread your ass cheeks slightly as you guide your pussy towards his large dick. ${((s as any).boydesc2 ?? '')}'s sperm and your juices are slowly dripping out still, and his cock is soon coated with the sperm of his buddy. You close your eyes to ignore ${((s as any).boydesc2 ?? '')}'s smirk while you slowly let yourself sink down onto his friend's cock, meant for his friend more than for you anyway.`);
  scene.text('He doesn\'t seem to mind, though. He just groans when you sit on his lap, and bottom out on his cock.');
  qspCall(s, 'boyStat', '', ((s as any).boy1 ?? 0));
  (s as any).sexpartkno = 1;
  (s as any).cumprecheck = 1;
  qspCall(s, 'cum_manage', '');
  qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'unknown');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Hold this position', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/sex/placer_sex25.jpg');
    scene.text('You don\'t move for a moment, choosing to just enjoy the fullness that the throbbing cock inside you provides.');
    scene.text('The guy begins to play a bit with your butt cheeks and exposed asshole, but other than that just waits for you to start moving.');
    scene.text('His friend smirks at him: "Nice job, man. Most other guys can\'t keep it hard, when they get my sloppy seconds."');
    qspCall(st, 'arousal', 'vaginal', 5, 'sub', 'unknown');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Begin to hump him', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/sex/placer_sex26.mp4');
    scene.text('Well, this guy certainly can!');
    scene.text('You\'re hugely turned on by his large slick cock filling you, and begin to ride him enthusiastically. You gyrate your hips so his penis rubs against the insides of your vagina. Your actions are definitely having an effect on him, and he\'s begging you to slow down in no time.');
    qspCall(st, 'arousal', 'vaginal', 5, 'sub', 'unknown');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Slow down and get off his cock', handler: (st: GameState) => {
    qspCall(st, 'mood', 'raise', 'tiny');
    qspCall(st, 'cum_manage', '');
    (st as any).guy = ((st as any).guy ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex27.mp4');
    // TODO-QSP: dynamic text: You reluctantly slow down when he asks you to, but it''s already too late. He gr...
    scene.text(`You reluctantly slow down when he asks you to, but it's already too late. He groans as his cock also erupts, adding his load to that of ${((st as any).boydesc2 ?? '')}'s.`);
    scene.text('Giving the guy a disappointed look, you scold him: "What, already!? I was feeling so good!"');
    scene.text('He shrugs apologetically, watching the mixture of sperm slowly drip from your vagina.');
    qspCall(st, 'arousal', 'vaginal', 5, 'sub', 'unknown');
    qspCall(st, 'stat', '');
    if (((st as any).placerParameter ?? 0)?.['number_of_man'] === 2) {
      scene.actions([
        { label: 'Take a shower', handler: (st: GameState) => {
    (st as any).din_dush_text = 'You smile at the boys: "Alright guys, I really need to go wash this sperm out of my pussy before I get pregnant. Where is your bathroom?"\' & \'The guys show you where their bathroom is and leave you alone to go clean up. You scoop their sperm out of your pussy as much as you can, and dry yourself off with a fluffy towel they laid out for you.';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDinDush(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Leave the shower', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/sex/placer_sex28.jpg');
    scene.text('You run into the guys in the hallway, and they both laugh at you: "Nice towel!"');
    // TODO-QSP: dynamic text: When you look offended, <<$boydesc2>> quickly adds: "Just kidding, <<$pcs_nickna...
    scene.text(`When you look offended, ${((st as any).boydesc2 ?? '')} quickly adds: "Just kidding, ${((st as any).pcs_nickname ?? '')}. Besides… we know that what's underneath that towel is much nicer!"`);
    scene.text('You chuckle, it\'s simply impossible to be mad at him. You put your clothes back on, giving them one last glimpse of your naked body before you say: "Alright guys… I\'ve had a really nice time with you, but I really should go home!"');
    // TODO-QSP: dynamic text: The guys were hoping you would stay over, and try to persuade you: "You don''t h...
    scene.text(`The guys were hoping you would stay over, and try to persuade you: "You don't have to go, ${((st as any).pcs_nickname ?? '')}! You can just crash here, we can still hang out for a while longer and chat! Besides… I make the world's best omelette! You'd be robbing yourself of a once-in-a-lifetime experience if you don't at least have a taste of that in the morning!"`);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Decline and leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'stat', '');
    qspGoto(st, 'pav_residential', '');
  } },
      { label: 'Agree to sleep over', goto: ['placer_sex', 'stay'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Get fucked by the third guy', handler: (st: GameState) => {
    qspCall(st, 'npcgeneratec', '', 0, 'Guy', (Math.floor(Math.random() * 18) + 18));
    qspCall(st, 'boyStat', '', ((st as any).npclastgenerated ?? 0));
    (st as any).sexpartkno = 1;
    (st as any).cumprecheck = 1;
    qspCall(st, 'cum_manage', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex31.jpg');
    scene.text('While you\'re scolding the second guy for cumming so quickly, the third one theatrically raises his fist and loudly says: "Do not fear, milady! I will save you from your urges!"');
    scene.text('Everyone laughs, and you have to give him credit: that really broke the tension. You willingly let him lead you to a desk, and sit down on it. He unceremoniously shoves his cock into your dripping pussy, making you moan with pleasure. You feel like a whore for a second when you realize that sloshing noise that fills the room is from a stranger fucking your pussy, that already has two loads of sperm in it.');
    qspCall(st, 'arousal', 'vaginal', 5, 'sub', 'unknown');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/sex/placer_sex32.jpg');
    scene.text('You moan: "Grab my breasts!" while you thoroughly get fucked by your savior.');
    scene.text('He does as you ask, cupping one boob in his hand. He grabs onto it roughly and twists your nipple, making you moan even louder.');
    qspCall(st, 'arousal', 'breasts', 1);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'mood', 'raise', 'tiny');
    qspCall(st, 'arousal_funcs', 'stretch', 'vaginal');
    (st as any).vaginalOrgasm = ((st as any).vaginalOrgasm ?? 0) + (1);
    qspCall(st, 'cum_manage', '');
    (st as any).guy = ((st as any).guy ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex33.jpg');
    // TODO-QSP: dynamic text: <<$boydesc2>> grabs some glasses of vodka, and offers one to your current partne...
    scene.text(`${((st as any).boydesc2 ?? '')} grabs some glasses of vodka, and offers one to your current partner while he raises his: "I propose a toast! To Savior the Stalwart! For your prowess in continuing to please our new ladyfriend ${((st as any).pcs_nickname ?? '')} the Insatiable, and saving our honor: I salute you!"`);
    scene.text('While the guy clinks glasses with his friend and pours the vodka down his throat, he never misses a beat and continues to pound you relentlessly. As the boys laugh you feel a tinge of embarrassment. You have two loads of cum already in your pussy, and the guy fucking you is soon to add a third… and you are <i>loving it</i>!');
    scene.text('Just the thought of that puts you over the edge again and you scream when you orgasm for the second time tonight, just when the hero of the day adds his hot load of jizz to the ones already inside you.');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'vaginal', 5, 'sub', 'unknown', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Show them your drenched pussy', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/sex/placer_sex34.jpg');
    scene.text('When the third guy pulls out, you lean back on the table and take a moment to catch your breath. Wow, that was intense!');
    // TODO-QSP: dynamic text: <<$boydesc2>> approaches you with a wide grin on his face, and says: "Milady <<$...
    scene.text(`${((st as any).boydesc2 ?? '')} approaches you with a wide grin on his face, and says: "Milady ${((st as any).pcs_nickname ?? '')} the Insatiable, if your majesty would be so kind as to reveal to us the efforts of our labors?"`);
    // TODO-QSP: dynamic text: You chuckle and spread your legs, showing them your drenched pussy. <<$boydesc2>...
    scene.text(`You chuckle and spread your legs, showing them your drenched pussy. ${((st as any).boydesc2 ?? '')} compliments your pussy, saying that is a beautiful look for it. His friends laugh and nod in agreement.`);
    qspCall(st, 'arousal', 'flash', 5, 'sub', 'unknown');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Go take a shower', handler: (st: GameState) => {
    (st as any).din_dush_text = 'You smile at the guys: "Alright boys, I should really go take a shower and wash this out, you don\'t want me getting pregnant!"\' & \'The guys show you where their bathroom is and leave you alone to go clean up. You wash their sperm out of your pussy as good as you can, and dry yourself off with a fluffy towel they laid out for you.';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDinDush(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Exit out of the shower', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/sex/placer_sex28.jpg');
    scene.text('You run into the guys in the hallway, and they laugh at you: "Nice towel!"');
    // TODO-QSP: dynamic text: When you look offended, <<$boydesc2>> quickly adds: "Just kidding, <<$pcs_nickna...
    scene.text(`When you look offended, ${((st as any).boydesc2 ?? '')} quickly adds: "Just kidding, ${((st as any).pcs_nickname ?? '')}. Besides… we know that what's underneath that towel is much nicer!"`);
    scene.text('You chuckle, it\'s simply impossible to be mad at him. You put your clothes back on, giving them one last glimpse of your naked body before you say: "Alright guys… I\'ve had a really nice time with you, but I really should go home!"');
    // TODO-QSP: dynamic text: The guys were hoping you would stay over, and try to persuade you: "You don''t h...
    scene.text(`The guys were hoping you would stay over, and try to persuade you: "You don't have to go, ${((st as any).pcs_nickname ?? '')}! You can just crash here, we can still hang out for a while longer and chat! Besides… I make the world's best omelette! You'd be robbing yourself from a once-in-a-lifetime experience if you don't at least have a taste of that in the morning!"`);
    scene.text('');
    if ((((st as any).week ?? 0) >= 1  &&  ((st as any).week ?? 0) < 5)  ||  ((st as any).week ?? 0) === 7) {
      scene.text('With some regret in your voice you tell them: "Sorry, boys. I have school tomorrow, I really can\'t stay. Maybe some other time?"');
    }
    if (((st as any).week ?? 0) === 5  ||  ((st as any).week ?? 0) === 6) {
      scene.text('You think to yourself: "Well… I don\'t have school tomorrow, I suppose I could stay if I want to."');
      qspCall(st, 'arousal', 'end');
      scene.actions([
        { label: 'Agree to sleep over', goto: ['placer_sex', 'stay'] },
      ]);
    }
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Decline and leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    qspGoto(st, 'pav_residential', '');
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
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterTwister(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'raise', 'small');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/sex/placer_sex94.jpg');
  // TODO-QSP: dynamic text: You look at <<$boydesc2>> with some doubt, but say: "Twister? I haven''t played ...
  scene.text(`You look at ${((s as any).boydesc2 ?? '')} with some doubt, but say: "Twister? I haven't played that in forever… but okay! Let's do that!"`);
  // TODO-QSP: dynamic text: His friend shares your doubt, but <<$boydesc2>> reassures him: "Trust me! Twiste...
  scene.text(`His friend shares your doubt, but ${((s as any).boydesc2 ?? '')} reassures him: "Trust me! Twister is a lot of fun to play together… especially with a cute girl such as ${((s as any).pcs_nickname ?? '')}! You can be the referee?"`);
  // TODO-QSP: dynamic text: You blush a bit as you help the guys put the mat on the floor, and <<$boydesc2>>...
  scene.text(`You blush a bit as you help the guys put the mat on the floor, and ${((s as any).boydesc2 ?? '')}'s friend takes control of the spinner. For the next half hour, you have to maneuver yourself in all sorts of difficult positions around ${((s as any).boydesc2 ?? '')} while his friend does the spinning, and have a lot of fun trying.`);
  qspCall(s, 'arousal', 'foreplay', 30, 'unknown');
  qspCall(s, 'stat', '');
  if (((s as any).pantyworntype ?? 0) === 'none') {
    // TODO-QSP: dynamic text: At some point during the game, you''re constantly adjusting your clothes, desper...
    scene.text(`At some point during the game, you're constantly adjusting your clothes, desperately trying to hide the fact that you're not wearing panties. ${((s as any).boydesc2 ?? '')}'s face turns very flustered as he <a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: VIEW /u0027images/locations/pavlovsk/park/sex/placer_sex95.jpg/u0027 */ return s; }); return false;">stares</a> at your bare pussy, and a few seconds later you can see him whisper something to his friend. Unfortunately for his friend, he's in no position to have a look.`);
  }
  qspCall(s, 'arousal', 'flash', 5, 'unknown');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex96.jpg');
    // TODO-QSP: dynamic text: All this grinding and leaning against <<$boydesc2>> has the three of you all wor...
    scene.text(`All this grinding and leaning against ${((st as any).boydesc2 ?? '')} has the three of you all worked up. ${((st as any).boydesc2 ?? '')} softly kisses your body, and pulls your clothes to the side.`);
    // TODO-QSP: dynamic text: His friend notices, and pitches in: "Next direction for <<$boydesc2>>: right han...
    scene.text(`His friend notices, and pitches in: "Next direction for ${((st as any).boydesc2 ?? '')}: right hand, boob!"`);
    // TODO-QSP: dynamic text: <<$boydesc2>> puts his hand on your breast as instructed, and looks at you expec...
    scene.text(`${((st as any).boydesc2 ?? '')} puts his hand on your breast as instructed, and looks at you expectantly.`);
    qspCall(st, 'arousal', 'foreplay', 10, 'unknown');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: '"No, stop!"', handler: (st: GameState) => {
    scene.img('images/pc/reactions/speak_to_the_hand.jpg');
    // TODO-QSP: dynamic text: You quickly get away from him and say: "<<$boydesc2>>, stop!"
    scene.text(`You quickly get away from him and say: "${((st as any).boydesc2 ?? '')}, stop!"`);
    scene.text('The guys have a questioning look on their faces, not sure what they did wrong. They figured you were all just having fun. You quickly straighten your clothes and get up, saying: "I\'m sorry guys, I think I should go."');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave the apartment', handler: (st: GameState) => {
    qspCall(st, 'placer_sex', 'rape');
  } },
    ]);
  } },
      { label: 'Blush but stay silent', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex97.jpg');
    // TODO-QSP: dynamic text: Noticing you''re not stopping him, <<$boydesc2>> pulls away for a moment and ask...
    scene.text(`Noticing you're not stopping him, ${((st as any).boydesc2 ?? '')} pulls away for a moment and asks his friend: "Is it okay if I take my clothes off? They're restricting my movement too much."`);
    // TODO-QSP: dynamic text: Naturally, the referee nods: "I''ll allow it, freedom of movement is important w...
    scene.text(`Naturally, the referee nods: "I'll allow it, freedom of movement is important when playing Twister. ${((st as any).pcs_nickname ?? '')}, stay in that position please."`);
    // TODO-QSP: dynamic text: <<$boydesc2>> quickly removes his clothes and gets back into position, and you p...
    scene.text(`${((st as any).boydesc2 ?? '')} quickly removes his clothes and gets back into position, and you play another few rounds with him occasionally groping you.`);
    // TODO-QSP: dynamic text: Then his friend spins and immediately says: "Okay, <<$pcs_nickname>>. Left hand,...
    scene.text(`Then his friend spins and immediately says: "Okay, ${((st as any).pcs_nickname ?? '')}. Left hand, blue." Wait… how did he know that so fast? The spinner is not even done yet!`);
    // TODO-QSP: dynamic text: You smirk when you realize this position would pretty much put <<$boydesc2>>''s ...
    scene.text(`You smirk when you realize this position would pretty much put ${((st as any).boydesc2 ?? '')}'s cock right in front of your face. You look around at the guy, and he shows you the spinner. You're fairly sure he changed it while you were looking, but it does say left hand blue. O well, he <i>is</i> the referee…`);
    // TODO-QSP: dynamic text: You do as instructed, and immediately smell <<$boydesc2>>''s masculine, musky sc...
    scene.text(`You do as instructed, and immediately smell ${((st as any).boydesc2 ?? '')}'s masculine, musky scent. You intentionally deepen your breaths, breathing onto his erect cock with a devious smile. Then you wink at him and willingly part your lips.`);
    // TODO-QSP: dynamic text: <<$boydesc2>> eagerly accepts your invitation, and shoves his cock into your mou...
    scene.text(`${((st as any).boydesc2 ?? '')} eagerly accepts your invitation, and shoves his cock into your mouth. He slowly moves his hips, after you close your lips around his erection.`);
    qspCall(st, 'arousal', 'bj', 10, 'unknown', 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    (st as any).cumprecheck = 1;
    qspCall(st, 'cum_manage', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex98.jpg');
    // TODO-QSP: dynamic text: <<$boydesc2>>''s friend just sits back in his chair and watches the two of you, ...
    scene.text(`${((st as any).boydesc2 ?? '')}'s friend just sits back in his chair and watches the two of you, fairly certain that you will not need any more directions from him.`);
    // TODO-QSP: dynamic text: After a few minutes of sucking, you gently push <<$boydesc2>> down onto the play...
    scene.text(`After a few minutes of sucking, you gently push ${((st as any).boydesc2 ?? '')} down onto the playing mat and mount him. You lean over and whisper: "You win. Just lie back and enjoy your reward…"`);
    scene.text('His cock feels great inside you, and you begin to ride him vigorously. He throws his head back and groans.');
    scene.text('Your heart is beating like crazy… this is certainly not how you expected this Twister session to turn out!');
    qspCall(st, 'arousal', 'bj', 5, 'unknown', 'sub');
    qspCall(st, 'arousal', 'vaginal', (-5), 'unknown', 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex99.jpg');
    scene.text('After he enjoyed his prize for some time, he grins: "We all won, babe… get on your hands and knees, I\'ll make you feel good."');
    scene.text('You do as he says, and he immediately shoves his dick inside you from behind and begins to pound you. His balls slap against you while he roughly fucks you, and you have to do everything in your power to not scream. After the initial discomfort, the screams would mostly be of pleasure… he\'s making you feel things you\'re not certain you\'ve ever felt before!');
    qspCall(st, 'arousal', 'vaginal', 5, 'unknown', 'sub', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/sex/placer_sex100.jpg');
    scene.text('Without ever pulling his cock out of you, he puts his arms around your waist and pulls you up, resting you on the chair and table. He continues to hammer away at your pussy furiously, and you just lean down on the table and enjoy the rough treatment. It\'s not for every day, but right now there\'s no way you would rather get fucked other than this.');
    qspCall(st, 'arousal', 'vaginal', 5, 'unknown', 'sub', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'mood', 'raise', 'tiny');
    qspCall(st, 'arousal_funcs', 'stretch', 'vaginal');
    (st as any).vaginalOrgasm = ((st as any).vaginalOrgasm ?? 0) + (1);
    (st as any).guy = ((st as any).guy ?? 0) + (1);
    (st as any).sexpartkno = 1;
    (st as any).spafinloc = 1;
    (st as any).sexvolume = 20;
    qspCall(st, 'cum_manage', '');
    (st as any).sexpartkno = 1;
    (st as any).spafinloc = 4;
    (st as any).sexvolume = 20;
    qspCall(st, 'cum_manage', '');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex101.jpg');
    // TODO-QSP: dynamic text: <<$boydesc2>> fucks you even faster, switching positions a few times. Eventually...
    scene.text(`${((st as any).boydesc2 ?? '')} fucks you even faster, switching positions a few times. Eventually you are on your back on the chair, and the squelching sound of your wet pussy getting pounded fills the room. Unable to hold it back any longer, you have a loud orgasm, and just grip your own legs tightly while you lie quivering on the chair. ${((st as any).boydesc2 ?? '')} pulls out a moment later, and jerks himself off over your body. Hot jets of his cum land on your ass cheeks, and pussy.`);
    // TODO-QSP: dynamic text: After a few seconds, you hear a guy clapping sarcastically. Oh crap, you totally...
    scene.text(`After a few seconds, you hear a guy clapping sarcastically. Oh crap, you totally forgot about his friend! Apparently he was happy enough to just watch the show, and has no intentions of getting with you. You have a crimson red blush on your cheeks while ${((st as any).boydesc2 ?? '')} just salutes him theatrically. You both quickly put your clothes back on, and have a short chat before you realize you should get going. You thank them for the nice time and kiss them on the cheek before heading for the door.`);
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave the apartment', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    qspGoto(st, 'pav_residential', '');
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

function enterCards(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/park/sex/placer_sex61.jpg');
  scene.text('You smile at him and reply: "Cards sound like fun! Let\'s do that."');
  if (((s as any).placerParameter ?? 0)?.['number_of_man'] > 2) {
    scene.text('One of the guys gets up and says: "Cards!? I don\'t want to play fucking cards, even with a charming girl such as her. Sorry guys, I\'m out of here."');
    // TODO-QSP: dynamic text: He leaves the room, leaving you alone with just <<$boydesc2>> and his friend. Th...
    scene.text(`He leaves the room, leaving you alone with just ${((s as any).boydesc2 ?? '')} and his friend. They just shrug, apparently that's normal.`);
  }
  // TODO-QSP: dynamic text: <<$boydesc2>> then suggests: "Alright… what do you want to play for? Money? Or… ...
  scene.text(`${((s as any).boydesc2 ?? '')} then suggests: "Alright… what do you want to play for? Money? Or… you're such a beautiful girl, we could play for a favor instead?"`);
  scene.text('You and his friend nod, that sounds like it could be fun.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Play cards', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: <<$boydesc2>> quickly shuffles the deck, and deals.
    scene.text(`${((st as any).boydesc2 ?? '')} quickly shuffles the deck, and deals.`);
    if ((Math.floor(Math.random() * 5) + 1) === 1) {
      scene.img('images/locations/pavlovsk/park/sex/placer_sex62.jpg');
      scene.text('You win, and show the guys a triumphant grin. Now, for your reward…');
      scene.actions([
        { label: 'Make them run naked in the streets', goto: ['placer_sex', 'card_win'] },
      ]);
    } else {
      scene.img('images/locations/pavlovsk/park/sex/placer_sex66.jpg');
      // TODO-QSP: dynamic text: You lose. The boys are obviously delighted, and greedily look at your body while...
      scene.text(`You lose. The boys are obviously delighted, and greedily look at your body while they discuss what they should ask of you. It takes them a second, but then ${((st as any).boydesc2 ?? '')} says: For our favor, we want… a striptease!"`);
      scene.text('You can tell they are a bit worried you might object, and he quickly adds: "We won a favor, fair and square! However, you can try to recoup your losses. If we win again though, you\'ll have to do more than just a striptease… what do you say, double or nothing? Or just cut your losses and perform the striptease for us?"');
      scene.actions([
        { label: 'Just do the striptease', goto: ['placer_sex', 'card_stript'] },
        { label: 'Double or nothing!', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: <<$boydesc2>> quickly shuffles the deck, and deals.
    scene.text(`${((st as any).boydesc2 ?? '')} quickly shuffles the deck, and deals.`);
    if ((Math.floor(Math.random() * 5) + 1) === 1) {
      scene.img('images/locations/pavlovsk/park/sex/placer_sex62.jpg');
      scene.text('You win, and show the guys a triumphant grin. Now, for your reward…');
      scene.actions([
        { label: 'Make them streak', goto: ['placer_sex', 'card_win'] },
      ]);
    } else {
      scene.img('images/locations/pavlovsk/park/sex/placer_sex77.jpg');
      // TODO-QSP: dynamic text: The guys cheer when they realize they win again, and look at you with desire in ...
      scene.text(`The guys cheer when they realize they win again, and look at you with desire in their eyes. ${((st as any).boydesc2 ?? '')} smugly says: "Well ${((st as any).pcs_nickname ?? '')}, looks like the cards don't favor you tonight. Now… what to do with you?"`);
      scene.text('You already know where this is going, and take off your clothes with a sigh, but leave your underwear on as you say: "Damn, I hate to lose…"');
      // TODO-QSP: dynamic text: The guys laugh loudly, and <<$boydesc2>>''s friend reassures you with a wink: "D...
      scene.text(`The guys laugh loudly, and ${((st as any).boydesc2 ?? '')}'s friend reassures you with a wink: "Don't worry, ${((st as any).pcs_nickname ?? '')}… when we're done, you'll be happy you lost". Then the guys begin to take off their clothes as well.`);
      scene.actions([
        { label: 'Continue', goto: ['placer_sex', 'card_sex'] },
      ]);
    }
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterCardSex(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/sex/placer_sex78.jpg');
  // TODO-QSP: dynamic text: The guys join you on the couch, and <<$boydesc2>> takes off your bra. He fondles...
  scene.text(`The guys join you on the couch, and ${((s as any).boydesc2 ?? '')} takes off your bra. He fondles your breast with one hand while he leans your head back for a deep kiss. Meanwhile, his friend puts his lips around your other nipple, and caresses it with his tongue. You feel your nipples harden against their touch in no time, and there's a large wet spot in your panties as well. Maybe ${((s as any).boydesc2 ?? '')} was right… maybe losing that second round of cards will be the best thing that happened to you all day!`);
  qspCall(s, 'arousal', 'foreplay', 5, 'unknown', 'sub', 'group');
  qspCall(s, 'arousal', 'breasts', 1);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Further', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex79.jpg');
    // TODO-QSP: dynamic text: Then <<$boydesc2>> pulls his head away from yours, and slowly guides his hand to...
    scene.text(`Then ${((st as any).boydesc2 ?? '')} pulls his head away from yours, and slowly guides his hand to your panties. His friend kisses you passionately now, while you try to awkwardly wrap your hand around ${((st as any).boydesc2 ?? '')}'s cock. After a while you realize you can't from this position, and just rest your wrist against it… you can feel it throbbing lightly against your skin.`);
    // TODO-QSP: dynamic text: <<$boydesc2>> slowly peels your panties away, and slides his hand in. Immediatel...
    scene.text(`${((st as any).boydesc2 ?? '')} slowly peels your panties away, and slides his hand in. Immediately noticing your soaked pussy, he grins at you: "I see you don't feel so bad about losing any more, ${((st as any).pcs_nickname ?? '')}. At least, your pussy seems to be happy…"`);
    qspCall(st, 'arousal', 'foreplay', 5, 'unknown', 'sub', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex80.jpg');
    // TODO-QSP: dynamic text: You blush and meekly nod in agreement. The boys take hold of your body, and <<$b...
    scene.text(`You blush and meekly nod in agreement. The boys take hold of your body, and ${((st as any).boydesc2 ?? '')} pulls your upper body closer to him. He then exposes his cock, and you waste no time in getting your lips around it. Soon the sounds of your eager lips smacking against his dick are hard to ignore, while his friend pulled your panties down and begins to fondle your pussy with his fingers.`);
    qspCall(st, 'arousal', 'bj', 10, 'unknown', 'sub', 'group');
    qspCall(st, 'arousal', 'vaginal_finger', (-10), 'unknown', 'sub', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (20);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex81.jpg');
    // TODO-QSP: dynamic text: <<$boydesc2>> enjoys your lips around his cock a great deal, but wants more. He ...
    scene.text(`${((st as any).boydesc2 ?? '')} enjoys your lips around his cock a great deal, but wants more. He whispers into your ears: "Baby, turn around…"`);
    scene.text('You reluctantly let go of his cock, but do as he asks. You get on your hands and knees, and face away from him so he has a spectacular view of your backside.');
    // TODO-QSP: dynamic text: <<$boydesc2>> eagerly rubs his cock against your wet folds, and thoroughly enjoy...
    scene.text(`${((st as any).boydesc2 ?? '')} eagerly rubs his cock against your wet folds, and thoroughly enjoys teasing you in this position. Meanwhile, his friend moves in front of you and says: "Don't worry baby, you can suck on this one" while he offers you his dick instead. You happily close your lips around his erection, and passionately begin to suck him off. You'll show ${((st as any).boydesc2 ?? '')}… he's going to regret moving away from your mouth! ${((st as any).boydesc2 ?? '')} decides in turn that he has teased you enough, and slowly slides his cock inside you.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    ((st as any).stat = (st as any).stat ?? {})['swallow'] = ((st as any).stat['swallow'] ?? 0) + (1);
    (st as any).spafinloc = 12;
    qspCall(st, 'cum_manage', '');
    qspCall(st, 'arousal_funcs', 'stretch', 'oral', 1);
    (st as any).facial = ((st as any).facial ?? 0) + (1);
    (st as any).guy = ((st as any).guy ?? 0) + (2);
    qspCall(st, 'mood', 'raise', 'small');
    qspCall(st, 'arousal_funcs', 'stretch', 'vaginal');
    (st as any).vaginalOrgasm = ((st as any).vaginalOrgasm ?? 0) + (1);
    qspCall(st, 'stat', '');
    qspCall(st, 'boyStat', '', ((st as any).boy1 ?? 0));
    (st as any).cumprecheck = 1;
    scene.img('images/locations/pavlovsk/park/sex/placer_sex82.jpg');
    scene.text('For the next half hour, you have very little control over what happens. With how good the boys are making you feel, you don\'t even care.');
    // TODO-QSP: dynamic text: The guys fuck you in several positions on the couch, changing places each time s...
    scene.text(`The guys fuck you in several positions on the couch, changing places each time so both get turns on your pussy and mouth. Eventually, you find yourself on your back while ${((st as any).bname ?? '')} is feeding you his cock and his friend is holding your legs up in the air and is ramming your pussy passionately.`);
    // TODO-QSP: dynamic text: Then you hear <<$boydesc2>> groan, and feel his cock swelling even more between ...
    scene.text(`Then you hear ${((st as any).boydesc2 ?? '')} groan, and feel his cock swelling even more between your lips. He leans forward and fills your mouth with his hot, sticky seed. The thought of you pleasing him with your mouth while his energetic friend fucks you senseless sends you over the edge as well, and for a second you let your mouth fill up before you realize you have to swallow.`);
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'bj', 30, 'unknown', 'sub', 'group');
    qspCall(st, 'arousal', 'vaginal', (-30), 'unknown', 'sub', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'cum_manage', '');
    (st as any).sexpartkno = 1;
    (st as any).spafinloc = 1;
    (st as any).sexvolume = 10;
    qspCall(st, 'cum_manage', '');
    (st as any).sexpartkno = 1;
    (st as any).spafinloc = 14;
    (st as any).sexvolume = 30;
    qspCall(st, 'cum_manage', '');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex83.jpg');
    // TODO-QSP: dynamic text: <<$boydesc2>>''s friend also notices your orgasm. To be fair, between your vagin...
    scene.text(`${((st as any).boydesc2 ?? '')}'s friend also notices your orgasm. To be fair, between your vagina walls spasming against his cock and your squirming body, it's hard to ignore.`);
    scene.text('He was already almost there anyway, and sinks his cock inside you as deep as it will go, happy to let your pussy milk his sperm out of him. Wave after wave ends up inside you, it feels like he\'s trying to squirt it inside your uterus directly! He pulls his cock out when he\'s almost done, and the last few spurts land on your pubis and belly.');
    scene.text('The guys are exhausted, and you\'re happy to just rest in their arms for a moment while you recover.');
    // TODO-QSP: dynamic text: <<$boydesc2>> jokes: "I bet you''re happy you lost that game of cards now, aren'...
    scene.text(`${((st as any).boydesc2 ?? '')} jokes: "I bet you're happy you lost that game of cards now, aren't you?"`);
    scene.text('You blush, but can\'t disagree: "You\'re right… that was the best loss I\'ve ever had."');
    scene.actions([
      { label: 'Take a shower and leave', handler: (st: GameState) => {
    (st as any).din_dush_text = 'You finally get up from the bed, and ask if it\'s okay you take a shower before you go. Of course ' + ((st as any).boydesc2 ?? 0) + ' doesn\'t mind, and points out where their bathroom is. You quickly get in, and after enjoying the hot water on your skin for a few moments you quickly clean their cum from your body. You try to spoon the sperm out of your pussy as good as you can with your fingers and rinse your mouth thoroughly, and then dry off and get dressed again. When you leave the bathroom, the guys are already waiting in the hallway. You kiss them goodbye, and tell them to let you know if they\'re ever in Pavlovsk again.';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDinDush(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave the apartment', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    qspGoto(st, 'pav_residential', '');
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

function enterCardStript(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/park/sex/placer_sex67.jpg');
  // TODO-QSP: dynamic text: You sigh and resign to the fact that you owe them this favor. You look at <<$boy...
  scene.text(`You sigh and resign to the fact that you owe them this favor. You look at ${((s as any).boydesc2 ?? '')} and ask him: "Well, I can't do a striptease without music! How about you put on something with some bass?"`);
  scene.text('He nods and flips through his music collection until he finds a good track for you to dance on.');
  scene.text('You smile at him thankfully and suddenly notice their greedy looks. Oh right… this is the part where you get naked.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/sex/placer_sex67.jpg');
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 3) + 1));
    scene.text('After listening to the track for a few seconds, you think you understand the general gist of it. You begin to sway your body to the music a bit uncomfortably, and pull your top down to expose your breasts. The guys are staring at you intently now, closely following your every move.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex68.jpg');
    scene.text('Well… this is a striptease. Clothes have to come off. You try to shake your hips to the music while you take off your clothes, and toss them at the boys. You notice bulges forming in their groins, you\'re definitely doing it right. If your goal was to arouse them, that is.');
    qspCall(st, 'arousal', 'striptease', 5);
    qspCall(st, 'arousal', 'foreplay', 5, 'unknown', 'sub', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/sex/placer_sex69.jpg');
    qspCall(st, 'exp_gain', 'dancero', 1);
    if (((st as any).pcs_dancero ?? 0) > 50) {
      scene.text('Your practise pays off, and the guys are very impressed with your skillful dance. They\'re rubbing their erections idly, and you smirk at them: "Careful, boys! Your eyes will pop out of you keep staring at me like that!"');
      scene.text('You\'re used to people wanting to get handsy when you do a striptease for them, and deftly dodge the grabbing hand that you knew would come sooner or later. As you give it a playful slap, you say: "No no, you only won a striptease. No touching!"');
    } else {
      scene.text('You haven\'t really done this much, and as a result you mostly just look like you\'re wobbling while you take off your clothes. Despite your best intentions the boys are not very impressed, and they mostly just stare at your jiggling boobs while you try to entertain them.');
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex70.jpg');
    scene.text('Ultimately, you rest back against a dresser and strike a seductive pose, while you slowly take off your panties. The guys are eagerly trying to see between them, but you cross your legs with an amused smile on your face.');
    qspCall(st, 'arousal', 'foreplay', 5, 'unknown', 'sub', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/sex/placer_sex71.jpg');
    // TODO-QSP: dynamic text: "Spread your legs baby!", <<$boydesc2>> says in a hoarse voice.
    scene.text(`"Spread your legs baby!", ${((st as any).boydesc2 ?? '')} says in a hoarse voice.`);
    scene.text('You smile and part your legs teasingly slowly, finally showing your pussy to them. The guys are looking at you greedily now, and you realize they probably want to do more than just touch you in a second.');
    qspCall(st, 'arousal', 'flash', 5, 'unknown', 'sub', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((st as any).pcs_horny ?? 0) < 100  ||  ((st as any).stat ?? 0)?.['think_virgin'] === 1) {
      qspCall(st, 'underwear', 'remove');
      scene.img('images/locations/pavlovsk/park/sex/placer_sex72.jpg');
      scene.text('Before they can do anything, you quickly put your clothes back on, not even bothering with your panties. The boys groan and complain, but you remind them: "Sorry boys, but all you asked for is a striptease, and I gave you one. Fair\'s fair, right?"');
      scene.text('The guys realize that is indeed all they asked of you, and sigh in regret after seeing how liberated and fun you are. If only they had asked for more, maybe they could\'ve convinced you…');
      scene.text('You grab your things and get ready to go home, just shoving your panties in your pocket. You\'ll worry about that later.');
      scene.text('You grin at the disappointed looks on their faces, and pull your clothes aside to show them your bare ass one last time.');
      scene.text('The boys extend their hands hopefully, thinking that maybe you changed your mind. But you crush that hope by giving them a wink and then quickly leaving the apartment, before they can object.');
      qspCall(st, 'arousal', 'end');
      scene.actions([
        { label: 'Return to the streets', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    qspGoto(st, 'pav_residential', '');
  } },
      ]);
    } else {
      scene.img('images/locations/pavlovsk/park/sex/placer_sex73.jpg');
      scene.text('Damn, teasing the guys really has got you worked up. Since they have been such a nice and cute audience, you want to show them a little bit more.');
      scene.text('Unable to control yourself any longer, your hand slips between your legs and you gently fondle yourself. An involuntary moan escapes from your lips when you run a finger over your clitoris, and rub it a few more times… it feels so good!');
      qspCall(st, 'arousal', 'clit_finger', 5, 'unknown', 'sub', 'group', 'masturbate');
      qspCall(st, 'stat', '');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/sex/placer_sex74.jpg');
    scene.text('You keep touching yourself for a moment longer, and close your eyes. Just when you almost gave in to your pleasures, a sound startles you.');
    // TODO-QSP: dynamic text: When you open your eyes, <<$boydesc2>> is standing very close to you. He has a h...
    scene.text(`When you open your eyes, ${((st as any).boydesc2 ?? '')} is standing very close to you. He has a horny grin on his face, but raises his hands apologetically when he sees your startled look.`);
    // TODO-QSP: dynamic text: "Relax, <<$pcs_nickname>>. I didn''t mean to scare you. I only wanted to give yo...
    scene.text(`"Relax, ${((st as any).pcs_nickname ?? '')}. I didn't mean to scare you. I only wanted to give you this!" He hands you a small vibrator.`);
    scene.text('Just when you open your mouth to protest, he continues: "We won\'t touch you or anything! I just thought… maybe you could use it in your show?"');
    scene.text('You close your mouth again, and look at the vibrator in your hand. It\'s a small and modest size. That could be fun, actually…');
    // TODO-QSP: dynamic text: You nod slyly at <<$boydesc2>> and tell him to take his seat again, while you tu...
    scene.text(`You nod slyly at ${((st as any).boydesc2 ?? '')} and tell him to take his seat again, while you turn it on and softly rub it against your pussy.`);
    qspCall(st, 'arousal', 'vaginal_vibe', 4, 'unknown', 'sub', 'group', 'masturbate');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'mood', 'raise', 'tiny');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex75.jpg');
    scene.text('The guys are back in their seats. They\'ve both taken their cocks out, and are slowly stroking them while they watch you fuck yourself with the vibrator.');
    scene.text('The vibrator makes you feel way too good to care about them though, and you focus on yourself. You turn the vibrator up to a nice speed, and slowly fuck your wet cunt with it. Every once in a while, you take it out and rub it over your pussy lips. Directly on your clit would be too much…');
    scene.text('This feels way too good for you to stall the show out much longer. Within minutes you rub yourself just the right way, and you arc your back when a surge of pleasure courses through your body.');
    (st as any).orgasm_or = 'custom';
    qspCall(st, 'arousal', 'vaginal_vibe', 1, 'unknown', 'sub', 'group', 'masturbate');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    ((st as any).stat = (st as any).stat ?? {})['swallow'] = ((st as any).stat['swallow'] ?? 0) + (1);
    (st as any).sexpartkno = 1;
    (st as any).spafinloc = 11;
    qspCall(st, 'cum_manage', '');
    qspCall(st, 'boyStat', '', ((st as any).boy1 ?? 0));
    (st as any).sexpartkno = 1;
    (st as any).spafinloc = 11;
    qspCall(st, 'cum_manage', '');
    qspCall(st, 'arousal_funcs', 'stretch', 'oral', 1);
    (st as any).facial = ((st as any).facial ?? 0) + (2);
    (st as any).guy = ((st as any).guy ?? 0) + (2);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex76.mp4');
    scene.text('The guys realize that this is their chance and they quickly help your weak body down to the floor, lowering you on your knees in front of them. Their erect cocks are gently bobbing in front of your face, and for a second you consider objecting. Maybe it\'s the euphoria of your orgasm talking, but then you think to yourself: "You know what… they\'re cute. I guess I could let them have this win."');
    // TODO-QSP: dynamic text: Without another thought, you close your fingers around and begin to give them a ...
    scene.text(`Without another thought, you close your fingers around and begin to give them a blowjob, starting with ${((st as any).boydesc2 ?? '')} while you gently stroke his friend. ${((st as any).boydesc2 ?? '')} must've been turned on for quite a while already, because your face is coated with his sperm almost immediately. His friend's cock almost immediately erupts as well, adding his load to that of ${((st as any).boydesc2 ?? '')}'s.`);
    scene.text('For another minute or two, you lick and suck their cocks clean, constantly switching between the two. Even though the guys have already came, their erections remain fairly firm. For some reason, you find the taste delicious.');
    scene.text('When the guys try to pull away, you tighten your grip on their rods and moan: "Almost done, guys… just a little while longer!"');
    scene.text('The guys grin and just let it happen, and you let go of them only when you\'re certain their cocks are completely clean. Then you get up and ask: "That was fun, guys… I should go, though. Can I go wash up quickly?"');
    // TODO-QSP: dynamic text: They''re both spent, and <<$boydesc2>> hands you a fluffy towel before he points...
    scene.text(`They're both spent, and ${((st as any).boydesc2 ?? '')} hands you a fluffy towel before he points out where their bathroom is.`);
    qspCall(st, 'arousal', 'bj', 5, 'unknown', 'sub', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Take a shower', handler: (st: GameState) => {
    (st as any).din_dush_text = 'After enjoying the hot water on your skin for a few moments, you quickly clean their cum from your body. You rinse your mouth thoroughly, and then dry off and get dressed again. When you leave the bathroom, the guys are already waiting in the hallway. You kiss them goodbye, and tell them to let you know if they\'re ever in Pavlovsk again.';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDinDush(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave the apartment', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    qspGoto(st, 'pav_residential', '');
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

function enterCardWin(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/park/sex/placer_sex63.jpg');
  scene.text('You tell the guys that as your favor, you want them to get nude and run down the street and back. You can see the guys reeling back a bit, and pout: "Come on, guys! I won fair and square!"');
  scene.text('The guys reluctantly agree, and begin to undress.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go with them to the street', handler: (st: GameState) => {
    if (((st as any).month ?? 0) >4  &&  ((st as any).month ?? 0) < 11) {
      scene.img('images/locations/pavlovsk/park/sex/placer_sex64.jpg');
    } else {
      scene.img('images/locations/pavlovsk/park/sex/placer_sex65.jpg');
    }
    scene.text('You have a cruel grin on your face when you tell them: "Okay boys, start running!"');
    scene.text('You watch them run across the street naked, and laugh out loud when several passers-by look at them funny and make comments. After they put their clothes back on, you decide to call it a night and say goodbye to them, giving them both a kiss before you go.');
    scene.actions([
      { label: 'Leave the apartment', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    qspGoto(st, 'pav_residential', '');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterStayInBed(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 2) + 0) === 1) {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex47.jpg');
    // TODO-QSP: dynamic text: Even though it''s morning, you decide to just stay in bed for another while. You...
    scene.text(`Even though it's morning, you decide to just stay in bed for another while. You doze off again, and a few minutes later you wake up to find ${((s as any).boydesc2 ?? '')} in bed with you.`);
    scene.text('He smiles happily at you and says: "Good morning, beautiful! Want to have some fun to start off the day?"');
    scene.text('You grin and think to yourself: "With you? Absolutely!" and extend your hand towards his groin, rubbing his morning wood through his boxers without saying a word.');
    qspCall(s, 'arousal', 'hj', 5, 'unknown', 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Lick his cock', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex48.jpg');
    scene.text('Let\'s see if you can make him beg for it, first.');
    scene.text('His cock is quite hard, and you eagerly pull his shorts down to reveal it. You gently run your fingers over his balls, while you carefully run your tongue over his cock. Taking all the time in the world, you do your best to lick it from all possible angles, without actually touching it with your lips. Eventually you close your lips around the head, but even then you only barely lick the tip, and don\'t move your mouth at all.');
    qspCall(st, 'arousal', 'bj', 5, 'unknown', 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: '\'Kiss\' his cock with your other lips', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    (st as any).cumprecheck = 1;
    qspCall(st, 'cum_manage', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex49.jpg');
    scene.text('After a few minutes, you realize he\'s not caving. Darnit!');
    scene.text('You decide to try something else, and swing your leg over his body before you guide his cock towards your pussy. You only lower yourself enough to just barely put the head of his dick between your pussy lips. If you can\'t make him beg by using your mouth… maybe you can make him beg with your other lips.');
    scene.text('For the next few minutes, you barely let his cock enter you. You only allow the tip in, then squeeze your vaginal muscles once or twice, and then raise yourself up so it slides out. Over and over again. You keep rubbing his slippery cock against your clit each time, making yourself feel great while you tease him.');
    // TODO-QSP: dynamic text: Eventually, <<$boydesc2>> can''t take it any more and moans: "<<$pcs_nickname>>,...
    scene.text(`Eventually, ${((st as any).boydesc2 ?? '')} can't take it any more and moans: "${((st as any).pcs_nickname ?? '')}, you win… please…"`);
    qspCall(st, 'arousal', 'vaginal', 5, 'unknown', 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Let him have his reward', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex50.jpg');
    scene.text('You grin at him triumphantly. You\'re certain you could make him and yourself cum by just repeating that over and over, but that was not your goal.');
    scene.text('"That\'s all I wanted to hear, baby… come get your prize" you whisper to him, as you drop down onto your hands and knees next to him. You curve your back so your ass stands out as much as possible, and he eagerly grabs onto it. He guides his cock to your pussy and slams it in, and you can\'t help but meet his thrusts half-way with your bucking hips.');
    scene.text('He notices how eager you are and begins to hammer away at your hole. Then he spits on your butthole and slowly works a finger in, while he stops moving his hips. He skillfully fingers your ass with his thumb while he keeps his cock still inside your drenched pussy. You moan in pleasure, and realize way too late that he\'s turning the tables on you.');
    qspCall(st, 'arousal', 'vaginal', 5, 'unknown', 'sub', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Ask him to fuck your ass', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/sex/placer_sex51.jpg');
    scene.text('Before you know it, you look back at him and moan: "Just put it in my ass, baby!"');
    // TODO-QSP: dynamic text: <<$boydesc2>> grins, as if he was waiting to hear that the whole time. He pulls ...
    scene.text(`${((st as any).boydesc2 ?? '')} grins, as if he was waiting to hear that the whole time. He pulls his cock out of you just as he pushes his thumb deeper inside your anus, making you moan once more.`);
    qspCall(st, 'arousal', 'anal', 5, 'unknown', 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Take his dick in your ass', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/sex/placer_sex52.jpg');
    scene.text('To your surprise, he is very gentle with you and takes several minutes to fully work his cock in. He\'s on his back now, and you are on top of him so you can control the pace more easily. You testily move your hips, and once the discomfort is gone you eagerly skewer yourself onto his cock. Soon, you feel his arms closing around your body and his hip movements become more erratic, and seconds later you feel his hot jets of sperm inside you. He playfully bites your shoulder when he cums.');
    qspCall(st, 'arousal', 'anal', 5, 'unknown', 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get off him', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/sex/placer_sex53.jpg');
    // TODO-QSP: dynamic text: Once you''re sure he''s finished, you move your hips away from him and let his c...
    scene.text(`Once you're sure he's finished, you move your hips away from him and let his cock slide out of your used butthole. ${((st as any).boydesc2 ?? '')} softly kisses your neck and whispers: "${((st as any).pcs_nickname ?? '')}, that was great… you're great. I hope you liked that as much as I did."`);
    scene.text('You smile, feeling completely satisfied. "It felt fantastic… but unfortunately, I really do have to get going."');
    scene.actions([
      { label: 'Take a shower', handler: (st: GameState) => {
    (st as any).din_dush_text = 'You quickly take a shower while ' + ((st as any).boydesc2 ?? 0) + ' rests on the bed a while longer, and you thoroughly wash the cum from your ass. You then get dressed, and kiss ' + ((st as any).boydesc2 ?? 0) + ' farewell before leaving the apartment.';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDinDush(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Return to the streets', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    qspGoto(st, 'pav_residential', '');
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
  } else {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex54.jpg');
    // TODO-QSP: dynamic text: Even though it''s morning, you decide to just stay in bed for another while. You...
    scene.text(`Even though it's morning, you decide to just stay in bed for another while. You doze off again, and a few minutes later you wake up to find two guys in bed with you. You find that they put your hands on their morning erections while you were still sleeping, and you automatically begin to stroke them. They grin and say: "Hi, ${((s as any).pcs_nickname ?? '')}! We came to tell you good morning!"`);
    scene.text('You grin at them and reply: "Really… you, or them?" while you nod at the cocks in your hands.');
    scene.text('The guys blush and say in chorus: "Both!"');
    qspCall(s, 'arousal', 'hj', 5, 'unknown', 'dom', 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Take them in your mouth', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex55.jpg');
    // TODO-QSP: dynamic text: You smile at them and lean towards <<$boydesc2>>, taking his cock into your mout...
    scene.text(`You smile at them and lean towards ${((st as any).boydesc2 ?? '')}, taking his cock into your mouth. Apparently he has been horny for quite a while already, and there's quite a lot of precum. You eagerly lap it all up, squeezing his cock with your lips to see if any more comes out. ${((st as any).boydesc2 ?? '')} puts his hand behind your neck and tries to push your head down, but you want to take your time. After a while, you relax your throat and take his full length in. He moans loudly, while you slowly pull your head back and polish his cock with your lips before releasing it.`);
    qspCall(st, 'arousal', 'bj', 5, 'unknown', 'sub', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    qspCall(st, 'boyStat', '', ((st as any).boy1 ?? 0));
    (st as any).cumprecheck = 1;
    qspCall(st, 'cum_manage', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex56.jpg');
    // TODO-QSP: dynamic text: His friend got tired of only being an observer, and roughly shoves his cock insi...
    scene.text(`His friend got tired of only being an observer, and roughly shoves his cock inside your pussy after he removed your panties. Your pussy was already quite wet though, and it slides in quite easily. He lifts your leg up into the air and begins to fuck you roughly, which makes you redouble your efforts on ${((st as any).boydesc2 ?? '')}'s cock. You suck him off eagerly, while his friend pounds you.`);
    qspCall(st, 'arousal', 'bj', 5, 'unknown', 'sub', 'group');
    qspCall(st, 'arousal', 'vaginal', (-5), 'unknown', 'sub', 'group', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex57.jpg');
    // TODO-QSP: dynamic text: "I want a turn at her pussy as well, let''s swap places", <<$boydesc2>> tells hi...
    scene.text(`"I want a turn at her pussy as well, let's swap places", ${((st as any).boydesc2 ?? '')} tells his friend. The guys lift you like a rag doll and position you the way they want you, skewering you onto ${((st as any).boydesc2 ?? '')}'s dick. His friend insistently rubs his erection against your lips, and you obediently open your mouth. He immediately shoves his dick down your throat, and expects you to suck.`);
    qspCall(st, 'arousal', 'bj', 5, 'unknown', 'sub', 'group', 'deepthroat');
    qspCall(st, 'arousal', 'vaginal', (-5), 'unknown', 'sub', 'group', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex58.jpg');
    // TODO-QSP: dynamic text: <<$boydesc2>>''s friend grins at you and says: "Time for some ass. You don''t mi...
    scene.text(`${((st as any).boydesc2 ?? '')}'s friend grins at you and says: "Time for some ass. You don't mind, do you ${((st as any).pcs_nickname ?? '')}?"`);
    // TODO-QSP: dynamic text: <<$boydesc2>> lifts you up and repositions you again, reassuring his friend: "Of...
    scene.text(`${((st as any).boydesc2 ?? '')} lifts you up and repositions you again, reassuring his friend: "Of course she doesn't mind. Spread your ass cheeks for him, ${((st as any).pcs_nickname ?? '')}."`);
    scene.text('You do as he says, and feel his friend pressing his cock against your tight butt while you pull your ass cheeks to the sides. He\'s not very patient, and presses it in.');
    // TODO-QSP: dynamic text: You groan loudly, but with <<$boydesc2>>''s cock in your mouth again it''s more ...
    scene.text(`You groan loudly, but with ${((st as any).boydesc2 ?? '')}'s cock in your mouth again it's more like a hum. A hum that makes him feel great. He encourages his friend: "She's loving it! Keep doing that man, it feels great!"`);
    // TODO-QSP: dynamic text: His friend needs no more encouragement, and drives his dick all the way down to ...
    scene.text(`His friend needs no more encouragement, and drives his dick all the way down to his balls into your ass. He then slowly pulls it out, and pushes it back just before it would slip out. Soon, he's fucking you in long firm strokes, and you have a rough time trying to give ${((st as any).boydesc2 ?? '')} a satisfying blowjob.`);
    scene.text('Both of these guys have fucked your pussy already, and soon they\'ll both have fucked your ass too…');
    qspCall(st, 'arousal', 'bj', 5, 'unknown', 'sub', 'group');
    qspCall(st, 'arousal', 'anal', (-5), 'unknown', 'sub', 'group', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/sex/placer_sex59.jpg');
    // TODO-QSP: dynamic text: <<$boydesc2>> enjoys your mouth so much, he grabs onto your hair and pulls you t...
    scene.text(`${((st as any).boydesc2 ?? '')} enjoys your mouth so much, he grabs onto your hair and pulls you towards him so enthusiastically that he pulls you away from his friend. Your ass releases his cock with a loud *pop*, and the guys laugh.`);
    // TODO-QSP: dynamic text: <<$boydesc2>> seizes the opportunity to pull you on top of him, and rams his coc...
    scene.text(`${((st as any).boydesc2 ?? '')} seizes the opportunity to pull you on top of him, and rams his cock into your pussy. He then pulls your body down against his, and tells his friend to stick his cock back inside your ass.`);
    scene.text('He\'s happy to do so, and after a few seconds of admiring your naked body on top of his friend, he rubs his cock against your ass and pushes it back in. You can\'t handle this! Your body is quaking and shivering between the guys, and you nearly feel your consciousness slipping away from you as the two of them pound your holes roughly.');
    qspCall(st, 'arousal', 'anal', 5, 'unknown', 'sub', 'group', 'rough');
    qspCall(st, 'arousal', 'vaginal', (-5), 'unknown', 'sub', 'group', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'mood', 'raise', 'small');
    qspCall(st, 'arousal_funcs', 'stretch', 'vaginal');
    (st as any).vaginalOrgasm = ((st as any).vaginalOrgasm ?? 0) + (1);
    (st as any).sexpartkno = 1;
    (st as any).spafinloc = 3;
    qspCall(st, 'cum_manage', '');
    (st as any).DPorgasm = ((st as any).DPorgasm ?? 0) + (1);
    qspCall(st, 'boyStat', '', ((st as any).boy2 ?? 0));
    (st as any).sexpartkno = 1;
    (st as any).spafinloc = 3;
    qspCall(st, 'cum_manage', '');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex60.jpg');
    scene.text('The guys last surprisingly long, and treat you like little more than a quivering piece of meat while they fuck your holes relentlessly. You\'re not one to object though… it feels great! This must be what heaven feels like. For the next 30 minutes they change position several times, both taking turns on both of your holes while your reality is blurry from the strong orgasms you keep having.');
    scene.text('Eventually the guys can\'t hold out any longer, and their cocks erupt almost simultaneously inside your battered holes.');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Take a shower', handler: (st: GameState) => {
    (st as any).din_dush_text = 'It takes you a few minutes to regain your senses, and your body is still shivering slightly when you give the guys a kiss. You tell them: "That was great guys… best fuck of my life, hands down! I really have to go though… let me take a quick shower to freshen up?"\' & \'The guys are sad to see a cute little fuckpuppet like you leave, but nod and show you where the shower is. After you thoroughly clean yourself up, you give the both of them a kiss and tell them to come look you up if they\'re ever in Pavlovsk again.';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDinDush(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave the apartment', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    qspGoto(st, 'pav_residential', '');
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
  // TODO-QSP: end
  scene.build();
}

function enterSleepSex(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', '', ((s as any).boy1 ?? 0));
  if ((Math.floor(Math.random() * 3) + 0) > 0) {
    scene.img('images/locations/pavlovsk/park/sex/placer_sex93.jpg');
    scene.text('At some point, you hear something and wake up. You pretend to be asleep, while you very slightly open your eyes. You see the silhouettes of several guys in your room, it looks like they can\'t sleep and want to play with you some more. Eager to find out what they\'ll do next, you just keep pretending to asleep and wait for them to make their move.');
    (s as any).sexunaware = 1;
    qspCall(s, 'cum_manage', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/sex/placer_sex84.jpg');
    // TODO-QSP: dynamic text: You feel the blanket being pulled down, and seconds later someone pulls your shi...
    scene.text(`You feel the blanket being pulled down, and seconds later someone pulls your shirt off. Your ${((st as any).titsize ?? '')} boobs are on full display now. You think to yourself: "Hmm… should I keep pretending to be asleep and see what else they do, or pretend to wake up and tell them off?"`);
    qspCall(st, 'arousal', 'flashlite', 5, 'unknown', 'sub', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Pretend to wake up', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/sex/placer_sex85.jpg');
    // TODO-QSP: dynamic text: You slowly open your eyes, and look straight into the startled face of <<$boydes...
    scene.text(`You slowly open your eyes, and look straight into the startled face of ${((st as any).boydesc2 ?? '')}'s friend.`);
    scene.text('You pretend you\'re not aware of what he did yet, and ask him with a smile on your face: "Wha… hey, you! What are you doing here?"');
    scene.text('He tries to play it off: "Oh, sorry… I thought you were asleep!"');
    scene.text('Deciding that won\'t do, you pressure him some more: "Well… I\'m not sleeping. But even if I were, why would you come here while I\'m sleeping?"');
    // TODO-QSP: dynamic text: <<$boydesc2>>''s friend stutters some more apologies, and then quickly leaves th...
    scene.text(`${((st as any).boydesc2 ?? '')}'s friend stutters some more apologies, and then quickly leaves the room before you can say anything more."`);
    scene.text('You smirk, and think to yourself: "Poor guy… he didn\'t even think of the option that maybe I didn\'t mind him being here!"');
    scene.text('When you look at the clock, you see it\'s already morning.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Make the guys breakfast', goto: ['placer_sex', 'breakfast'] },
    ]);
  } },
      { label: 'Pretend to be asleep', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex86.jpg');
    scene.text('When the guy is certain you must still be sleeping, he continues carefully. He peels your panties down very slowly, being very cautious to not wake you up. You feel quite horny by now, and have to restrain yourself to not just slam your pussy down onto his dick and shove your tits in his face.');
    qspCall(st, 'arousal', 'foreplay', 5, 'unknown', 'sub', 'group');
    qspCall(st, 'arousal', 'breasts', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex92.jpg');
    scene.text('You suddenly feel his fingers against your pussy lips, trying to gain access. The guy softly mutters: "Hmm, too dry… I should probably not fuck her right away."');
    scene.text('Then you feel nothing for a while, as the guy stops for a moment to determine his next move.');
    qspCall(st, 'arousal', 'vaginal_finger', 5, 'unknown', 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex87.jpg');
    scene.text('The guy is too horny to give up on his quest by now, and slowly shifts your body so your head leans towards the side.');
    scene.text('Then you feel his cock press against your lips. Wait… he doesn\'t really think he can get you to blow him, without you waking up!?');
    scene.text('You decide to throw the guy a bone, and lick your lips and then leave them slightly parted, playing it off like you\'re still asleep. He eagerly puts his dick inside your mouth and begins to move it back and forth slowly, thinking his plan is working.');
    qspCall(st, 'arousal', 'bj', 5, 'unknown', 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (20);
    qspCall(st, 'stat', '');
    (st as any).cumprecheck = 1;
    qspCall(st, 'cum_manage', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex88.jpg');
    scene.text('After a while you hear him say: "That should be slippery enough…" and he carefully moves you onto your back.');
    scene.text('You can barely resist a chuckle. Your pussy is burning hot right now, and you know you\'re soaked down there… if only he knew!');
    scene.text('He gets between your legs, and carefully rubs his cock against your pussy lips, trying to part them. Once he manages, he pushes forward, expecting a fair bit of resistance from your dry pussy.');
    scene.text('It\'s quite wet however, and he pushes way too hard. His hips slam against yours in an almost comical fashion, and for a second he\'s afraid that must have been enough to wake you up.');
    scene.text('You still pretend to be asleep though, keeping your body limp. You hear him smile to himself: "Wow, her pussy is soaked! Maybe she\'s having a sexy dream…"');
    scene.text('When he begins to move his hips, the sopping sounds of your wet cunt getting fucked are quite audible in the room. He makes you feel great, and you have to do your best to not let him know you\'re awake.');
    qspCall(st, 'arousal', 'vaginal', 5, 'unknown', 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/sex/placer_sex89.jpg');
    scene.text('Only a few seconds later, he suddenly pulls out of you and leaves. You feel some regret, and you were considering going after him just when you feel a hand on your shoulder. As it turns out, he was just looking for a way to put you on your stomach.');
    scene.text('He rests on your legs, and slowly shoves his cock into your pussy from behind. It rubbed you in just the right way, and a groan escapes your lips despite your best efforts to stay quiet.');
    scene.text('The guy stops abruptly, again worried he woke you up.');
    scene.text('You feel slightly worried that he might bail on you, and you even feel his erection losing some strength despite it being in your snatch. You try to send him a subtle signal and lightly tighten your pussy around his cock, squeezing it with your vaginal walls.');
    scene.text('It feels like it\'s working! His erection is hardening again, and he begins to fuck your pussy again while you keep pulsating your pussy walls against his cock. At this angle, his cock makes you feel great! You can\'t hold back your orgasm any longer, and bury your face into your pillow in an attempt to stay quiet.');
    qspCall(st, 'arousal', 'vaginal', 5, 'unknown', 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    qspCall(st, 'mood', 'raise', 'tiny');
    qspCall(st, 'arousal_funcs', 'stretch', 'vaginal');
    (st as any).vaginalOrgasm = ((st as any).vaginalOrgasm ?? 0) + (1);
    ((st as any).stat = (st as any).stat ?? {})['swallow'] = ((st as any).stat['swallow'] ?? 0) + (1);
    (st as any).spafinloc = 12;
    qspCall(st, 'cum_manage', '');
    qspCall(st, 'arousal_funcs', 'stretch', 'oral', 1);
    (st as any).facial = ((st as any).facial ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex90.jpg');
    scene.text('The guy notices, and whispers: "Damn, she came! While asleep… that is so hot!"');
    scene.text('He pulls out of you and moves towards your head again, and carefully turns your head to a side. He gently presses his cock against your lips again, and you obediently open your mouth again, just enough for him to get in. His cock is covered with your own juices… it\'s delicious! Still, you can\'t let him know you\'re awake. With some regret you just let him move it inside your mouth, and resist the urge to close your lips around it and suck him off.');
    scene.text('Within seconds he reaches his orgasm anyway, and you feel his hot spurts of jizz land inside your mouth. He groans: "That\'s right, slut… you\'ve earned it! Swallow it all, like a good girl."');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/sex/placer_sex91.jpg');
    scene.text('Without letting him know you can hear him, you do as he says. You idly smack your lips and swallow his load automatically, just like you would if you were actually sleeping.');
    scene.text('That is one interesting fetish… this guy seems to like a woman better when she\'s a sleeping, submissive puppet. That\'s the only way you can explain it to yourself, his load is huge!');
    scene.text('When he pulls his cock out of your mouth he still isn\'t finished, and two more spurts land on your face.');
    scene.text('When he\'s finally done, he quickly gathers his things and leaves the room. You open your eyes and look around, realizing you have no clue which of the guys that was! Still, you decide… does it even matter? You\'ll probably not see any of them again, and that was great fun!');
    scene.text('You idly wipe the cum from your face while you look at the clock. It\'s late enough in the morning to get out of bed.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Make the guys breakfast', goto: ['placer_sex', 'breakfast'] },
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
      { label: 'Make the guys breakfast', goto: ['placer_sex', 'breakfast'] },
      { label: 'Stay in bed', goto: ['placer_sex', 'stay_in_bed'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBreakfastSex(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', '', ((s as any).boy2 ?? 0));
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/sex/placer_sex40.mp4');
  scene.text('You\'re blushing from all his compliments but decide to placate him, and take off your bra. You shake your boobs seductively for him and smile: "There… does that make you happy?"');
  scene.text('He appreciates the effort but shakes his head: "Sorry… still too many clothes!"');
  qspCall(s, 'arousal', 'flashlite', 5);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Take off your panties too', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/sex/placer_sex37.jpg');
    scene.text('Aw hell, he\'s cute. You lean over the kitchen counter and slowly push your panties down over your hips, but leave them there. He\'s ogling your bare ass, and stutters slightly when he says: "Wh- why are you stopping? Come on, get rid of them!"');
    qspCall(st, 'arousal', 'flash', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Tease him and take his dick in your mouth', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex41.jpg');
    scene.text('You turn around and slowly walk towards him, lowering your panties further as you do. Once they\'re on your ankles, you lean up against him and softly whisper in his ear: "There, you have me naked, and all to yourself… do you have something you\'d like to show me now?"');
    scene.text('He eagerly pulls down his pants, offering his already erect cock to you.');
    scene.text('You run your hand over it as you slowly lower yourself to your knees, and lick the shaft while you caress his balls.');
    scene.text('A large bead of precum appears on the head of his dick, and you greedily lap it all up. Then you take his cock in your mouth and give him a tender blowjob, ensuring him that you\'re all his now and that he doesn\'t have to share you today.');
    qspCall(st, 'arousal', 'bj', 5, 'unknown', 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Bend over for him', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/sex/placer_sex42.jpg');
    // TODO-QSP: dynamic text: <<$boydesc2>> whispers into your ear: "Get on your hands and knees baby, I want ...
    scene.text(`${((st as any).boydesc2 ?? '')} whispers into your ear: "Get on your hands and knees baby, I want to try something new."`);
    // TODO-QSP: dynamic text: He gently slaps your buttocks when you do, and rubs his cock against your tight ...
    scene.text(`He gently slaps your buttocks when you do, and rubs his cock against your tight anus. He quickly pours some oil over it for lubrication and then slowly eases his cock into you. His tender treatment is quite unlike how he treated you yesterday. At last, ${((st as any).boydesc2 ?? '')} is all the way inside you.`);
    scene.text('He asks you: "How does it feel, babe?"');
    scene.text('You moan back: "It feels nice… I love the way your cock feels inside my ass!"');
    scene.text('He slaps your ass playfully, and begins to fuck you slowly. He gradually increases the tempo, and then slows down again. His thrusts feel great but when you begin to move your hips against him, he stops you.');
    qspCall(st, 'arousal', 'anal', 5, 'unknown', 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/sex/placer_sex43.jpg');
    scene.text('He closes his arms around your waist and sits down on a stool, making sure his cock never leaves your ass.');
    // TODO-QSP: dynamic text: His cock enters your ass even deeper from this angle, and he softly whispers: "J...
    scene.text(`His cock enters your ass even deeper from this angle, and he softly whispers: "Just relax ${((st as any).pcs_nickname ?? '')}, let's take it slow… we have all the time in the world."`);
    // TODO-QSP: dynamic text: You nod and slowly move your hips, deciding to savour the moment along with <<$b...
    scene.text(`You nod and slowly move your hips, deciding to savour the moment along with ${((st as any).boydesc2 ?? '')}.`);
    qspCall(st, 'arousal', 'anal', 5, 'unknown', 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex44.jpg');
    // TODO-QSP: dynamic text: Once more you change positions, without <<$boydesc2>> ever pulling out of you. Y...
    scene.text(`Once more you change positions, without ${((st as any).boydesc2 ?? '')} ever pulling out of you. You're now sitting on the kitchen counter, and ${((st as any).boydesc2 ?? '')} spreads your legs very wide while he slowly fucks you. He kisses your breasts eagerly, licking your nipples with just the tip of his tongue.`);
    // TODO-QSP: dynamic text: You can''t take it any longer and scream: "<<$boydesc2>>! Please, fuck me faster...
    scene.text(`You can't take it any longer and scream: "${((st as any).boydesc2 ?? '')}! Please, fuck me faster!"`);
    scene.text('He slows down for a moment and gives you a smirk. He knows you\'re like putty in his hands, and he loves every moment of it. Then he fucks your ass hard and fast, and you spasm and fondle your clit. Within seconds you reach a powerful orgasm and let out a low groan, and then bite your lip. Oh no, you hope you didn\'t awaken his roommates!');
    scene.text('Then your body goes limp while he hammers his dick inside you. At this point, all you can do is give into the pleasure. You make a token effort of not making too much noise, while your orgasm continues.');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'anal', 20, 'unknown', 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'butt', ((st as any).boy ?? 0), 1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex45.jpg');
    // TODO-QSP: dynamic text: Your anus greedily clenches around his cock during your orgasm, and <<$boydesc2>...
    scene.text(`Your anus greedily clenches around his cock during your orgasm, and ${((st as any).boydesc2 ?? '')}'s head is quite flustered from trying to postpone his own. If it were up to him, you'd stay in this position forever.`);
    scene.text('Eventually he surrenders, and he pulls out to shoot his load onto your ass cheeks.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).cumspclnt = 4;
    qspCall(st, 'cum_cleanup', '');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex46.jpg');
    // TODO-QSP: dynamic text: When he''s finished, <<$boydesc2>> tenderly kisses your lips and says: "That was...
    scene.text(`When he's finished, ${((st as any).boydesc2 ?? '')} tenderly kisses your lips and says: "That was great, ${((st as any).pcs_nickname ?? '')}… want to go do something together today?"`);
    scene.text('You look at the clock and shake your head: "Oh no! I don\'t even have time to taste your omelettes any more, I really have to go!"');
    scene.text('You ask him for a towel so you can quickly wipe off the worst of his cum, you don\'t even have time for a shower. He sighs wistfully, secretly hoping you\'d have been able to make time for today. Nevertheless, he brings you a towel and you quickly clean yourself up before you get dressed.');
    // TODO-QSP: dynamic text: He walks you to the door, and you embrace him and give him one more passionate k...
    scene.text(`He walks you to the door, and you embrace him and give him one more passionate kiss. You whisper to him: "${((st as any).boydesc2 ?? '')}… that was probably the best sex I've ever had. I'll never forget you!"`);
    scene.text('When you pull the door shut behind you, you sigh. You know he was just renting that apartment for a short stay, and that you\'ll probably never see him again. What a shame.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Return to the streets', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    qspGoto(st, 'pav_residential', '');
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

function enterBreakfast(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/park/sex/placer_sex36.jpg');
  scene.text('The guys have been so nice to you, you decide to do something back for them the next morning. While they\'re still asleep, you head to the kitchen in your underwear to make them some breakfast.');
  // TODO-QSP: dynamic text: When you enter the kitchen, <<$boydesc2>> is already there. He grins at you: "Go...
  scene.text(`When you enter the kitchen, ${((s as any).boydesc2 ?? '')} is already there. He grins at you: "Good morning, ${((s as any).pcs_nickname ?? '')}… why are you wearing so many clothes? You look way better naked, last night proved that! Go on… take them off!"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Remove your bra', goto: ['placer_sex', 'breakfast_sex'] },
    { label: 'Tell him off', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/sex/placer_sex38.jpg');
    scene.text('You just smirk at the drooling guy, and say: "No way!"');
    scene.text('He grins: "Oh well, it was worth a shot. Anyway… I owe you those omelettes, right?"');
    scene.text('He ushers you to the table that the boys fucked you on last night, and tells you to sit down while he works his magic. Minutes later, a steaming omelette served on some bread is on a plate in front of you.');
    scene.actions([
      { label: 'Have breakfast', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    (st as any).fat = ((st as any).fat ?? 0) + (3);
    (st as any).pcs_energy = ((st as any).pcs_energy ?? 0) + (15);
    (st as any).pcs_hydra = ((st as any).pcs_hydra ?? 0) + (15);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex39.jpg');
    scene.text('Everyone gathers at the table, and you have to admit: his omelettes are fantastic. The guys occasionally glance over your body while you eat… you never did put on more clothes and are still sitting in your underwear. You feel comfortable around them though, and your lack of clothes doesn\'t bother you at all. They don\'t make any further moves on you, but ask if you want to stay around a while longer.');
    scene.text('Unfortunately you have to decline, and say you have other things to do.');
    scene.text('After you get dressed, the boys each give you a kiss on the cheek and say goodbye.');
    scene.actions([
      { label: 'Leave their apartment', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    qspGoto(st, 'pav_residential', '');
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterStay(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) <= 22) {
    (s as any).hour = 23;
    (s as any).minut = 0;
  }
  if (((s as any).pcs_hydra ?? 0) >= 100) {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (5);
  } else {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (10);
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/sex/placer_sex29.jpg');
  // TODO-QSP: dynamic text: The guys are happy that you decided to stay the night, and <<$boydesc2>> goes to...
  scene.text(`The guys are happy that you decided to stay the night, and ${((s as any).boydesc2 ?? '')} goes to another room to fetch a guitar. He's fairly good at playing it, and you all happily sing along to the songs he's plays. Afterwards, you all enjoy another glass of vodka while you exchange stories. Before you know it, it's getting late.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to bed', goto: ['placer_sex', 'sleep'] },
  ]);
  scene.build();
}

function enterSleep(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'shortgs', 'autosave');
  ((s as any).sleepVars = (s as any).sleepVars ?? {})['notathomesleep'] = 0;
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (5);
  (s as any).pcs_hairbsh = 0;
  (s as any).inSleep = 1;
  scene.img('images/locations/pavlovsk/park/sex/placer_sex35.jpg');
  if (((s as any).analPlugIn ?? 0) === 1) {
    (s as any).analPlugIn = 0;
    (s as any).analPlugOut = 0;
    scene.text('Before going to bed, you take out your butt plug and give it a quick wash.');
  }
  if (((s as any).vibratorIN ?? 0) === 1) {
    (s as any).vibratorIN = 0;
    scene.text('Before going to bed, you take out your vibrator and give it a quick wash.');
  }
  if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
    (s as any).pcs_makeup = 0;
    (s as any).vidageday = ((s as any).vidageday ?? 0) - (1);
    scene.text('Your make-up got smeared all over your face while you slept. You realize you really should\'ve removed it before going to bed, your skin ages much faster if you don\'t take good care of it.');
  }
  if (((s as any).fat ?? 0) > 5  &&  ((s as any).stringimplant ?? 0) === 1) {
    ((s as any).bodyVars = (s as any).bodyVars ?? {})['bust_silicone'] = ((s as any).bodyVars['bust_silicone'] ?? 0) + (1);
    (s as any).fat = ((s as any).fat ?? 0) - (5);
  }
  scene.text('You have a good night\'s rest. You did not dream of anything.');
  // TODO-QSP: :loopson
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  (s as any).stime = ((s as any).stime ?? 0) + (1);
  if ((!((s as any).recuperation ?? 0))) {
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (5);
  }
  if (((s as any).stime ?? 0) >= 60) {
    (s as any).stime = 0;
    (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) + (15);
    qspCall(s, 'stat', '');
  }
  if (((s as any).pcs_sleep ?? 0) >= 100) {
    (s as any).hour = 8;
    (s as any).minut = 0;
    qspCall(s, 'stat', '');
    scene.text('Once you\'re well rested, you wake up again and sit up in the bed.');
    (s as any).inSleep = 0;
    if ((Math.floor(Math.random() * 6) + 1) === 1) {
      qspGoto(s, 'placer_sex', 'sleep_sex');
    } else {
      scene.actions([
        { label: 'Make breakfast for the guys', goto: ['placer_sex', 'breakfast'] },
        { label: 'Lie in bed', goto: ['placer_sex', 'stay_in_bed'] },
      ]);
    }
  } else {
    // TODO-QSP: jump 'loopson'
  }
  // TODO-QSP: end
  scene.build();
}

function enterRape(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 20) + 1)===5) {
    qspCall(s, 'npcgeneratec', '', 0, 'Rapist', (Math.floor(Math.random() * 18) + 18));
    // TODO-QSP: $rapist[0] = $npclastgenerated
    qspCall(s, 'npcgeneratec', '', 0, 'Rapist', (Math.floor(Math.random() * 18) + 18));
    // TODO-QSP: $rapist[1] = $npclastgenerated
    qspCall(s, 'npcgeneratec', '', 0, 'Rapist', (Math.floor(Math.random() * 18) + 18));
    // TODO-QSP: $rapist[2] = $npclastgenerated
    // TODO-QSP: $rapist[3] = $boy1
    // TODO-QSP: $rapist[4] = $boy2
    qspCall(s, 'npcgeneratec', '', 0, 'Rapist', (Math.floor(Math.random() * 18) + 18));
    // TODO-QSP: $rapist[5] = $npclastgenerated
    scene.img('images/locations/pavlovsk/park/sex/placer_sex102.mp4');
    // TODO-QSP: dynamic text: You were about to leave the apartment, when <<$boydesc2>> suddenly grabs you by ...
    scene.text(`You were about to leave the apartment, when ${((s as any).boydesc2 ?? '')} suddenly grabs you by the hair and pulls you back. He drags you towards the bed while he scolds you: "Where do you think you're going, bitch!? It's always the same with whores like you… they act all cute and sexy and say they're in for a good time, but when push comes to shove they try to chicken out!"`);
    scene.text('You\'re shocked at his sudden change of character. He seemed like he such a cute and polite guy!');
    scene.text('He shoves you down onto the bed, and shouts: "We\'ll have to teach this bitch a lesson about common courtesy, boys!" It\'s met with loud cheers.');
    // TODO-QSP: dynamic text: The boys surround you. You''re not sure where they all came from… maybe <<$boyde...
    scene.text(`The boys surround you. You're not sure where they all came from… maybe ${((s as any).boydesc2 ?? '')} signaled in some more friends while you weren't looking? Maybe he had this planned all along?`);
    scene.text('Not paying any attention to your cries, they begin to rip your clothes off.');
    scene.actions([
      { label: 'Cry out', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex103.jpg');
    scene.text('The guys tear off your clothes in no time, and unbutton their own pants to pull out their hard cocks as you cry out for help.');
    scene.text('One of them tries to shove his penis in your mouth, and rubs it against your lips when you quickly close your mouth. He says: "Shut up, bitch. Put this in your mouth, that should make you quiet down… if I feel any teeth, I\'m knocking them out."');
    scene.text('You shake your head, keeping your lips pursed while you try to turn your head away from your assaulter. Then one of the guys grabs your head and holds it in place, while another pinches your nose. You try to hold your breath, but eventually are forced to open your mouth just for a gasp of air. Your assaulter grabs his chance, and immediately pushes his cock past your lips.');
    qspCall(st, 'arousal', 'bj', 5, 'unknown', 'sub', 'group', 'rough', 'humiliation');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Handcuffs…', handler: (st: GameState) => {
    // TODO-QSP: gs 'boyStat', $rapist[0]
    (st as any).cumprecheck = 1;
    qspCall(st, 'cum_manage', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex104.mp4');
    // TODO-QSP: dynamic text: Then <<$boydesc2>> produces two sets of handcuffs, spreads your arms and locks y...
    scene.text(`Then ${((st as any).boydesc2 ?? '')} produces two sets of handcuffs, spreads your arms and locks your wrists on the headboard. One of his buddies slides down underneath you and lifts your hips, only to put you down on the tip of his cock. You can't hold your own weight in the position, and when he lets you go his cock splits your pussy wide open, with you sinking all the way down on it. You scream, from the pain and humiliation… they can't be doing this to you!`);
    scene.text('"Guys! You ca-GWAH!" Just when you were about to beg them to stop, another guy roughly shoves his cock down your throat. Another roughly slaps your tits, and your instinct is to cry out. Unfortunately, this only opens your mouth further, giving the guy easy access to your throat.');
    scene.text('Several more of them take turns fucking your throat, while the others humiliate you with degrading language: "Look at that whore bounce up and down on his cock eagerly! All she needs is the right type of encouragement! Don\'t worry whore, after today you will understand what it feels like to really get fucked."');
    qspCall(st, 'arousal', 'bj', 5, 'unknown', 'sub', 'group', 'rough', 'bound', 'humiliation');
    qspCall(st, 'arousal', 'vaginal', (-5), 'unknown', 'sub', 'group', 'rough', 'bound', 'humiliation');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/sex/placer_sex105.jpg');
    scene.text('The guys unlock the handcuffs and tie your wrists behind your back with a jump rope, before dragging you on top of the bed. Immediately another guy mounts you, and begins to fuck your poor pussy roughly. You cry out from the pain, and a guy immediately puts his finger between your jaws to stop you from closing your mouth.');
    scene.text('Your first instincts are to bite down on it, and you do. He pulls his hand away, and slaps your face so hard your ears are ringing. When his friends look at him questioningly, he exclaims apologetically: "The bitch bit me!"');
    scene.text('His friends understand now, and the guy fucking you redoubles his efforts in an attempt to punish you for your insolence.');
    qspCall(st, 'arousal', 'bj', 5, 'unknown', 'sub', 'group', 'rough', 'bound', 'deepthroat', 'humiliation');
    qspCall(st, 'arousal', 'vaginal', (-5), 'unknown', 'sub', 'group', 'rough', 'bound', 'humiliation');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/sex/placer_sex106.jpg');
    // TODO-QSP: dynamic text: He''s not getting the reaction he hoped from you, and pulls out. <<$boydesc2>> t...
    scene.text(`He's not getting the reaction he hoped from you, and pulls out. ${((st as any).boydesc2 ?? '')} tells him: "Warm her ass up too. We'll all have a turn later, you might as well get a head start."`);
    if (((st as any).analPlugIn ?? 0) === 1) {
      (st as any).analPlugIn = 0;
      (st as any).analPlugOut = 1;
      scene.text('The guys pull out your butt plug without mercy, and it comes out with a loud pop. One of them snorts: "Look at this whore… I bet she was hoping for this all along! Serving all her holes on a silver platter, even prepping the ones that take some time to adjust."');
    }
    // TODO-QSP: dynamic text: <<$boydesc2>> then turns to you, and puts his finger between your lips. He order...
    scene.text(`${((st as any).boydesc2 ?? '')} then turns to you, and puts his finger between your lips. He orders you: "No more biting, bitch. And relax your ass, for your own good… it's going to hurt a lot more, if you don't."`);
    scene.text('Your spincter was clenched instinctively when you felt the head of his cock press against it, but you realize resisting is pointless. They\'ll get what they want from you anyway, before you leave this place. <i>If</i> you leave this place.');
    // TODO-QSP: dynamic text: You to your best to relax, as the guy pushes his head past your anus. It feels l...
    scene.text(`You to your best to relax, as the guy pushes his head past your anus. It feels like they're driving a red-hot metal rod inside your ass, and it hurts a lot. You groan against ${((st as any).boydesc2 ?? '')}'s finger loudly, tears forming in your eyes.`);
    qspCall(st, 'arousal', 'anal', 10, 'unknown', 'sub', 'group', 'rough', 'bound', 'humiliation');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/sex/placer_sex107.jpg');
    scene.text('The guys are not about to let your holes go unused, if they can help it. No one can reach your pussy right now, but they can definitely put your mouth to work.');
    scene.text('One of the guys you hadn\'t seen before shoves his cock past your lips, after you open your mouth obediently. You might as well… they\'re not going to take it any easier on you if you keep resisting.');
    scene.text('Even though you\'re trying to cooperate, he is needlessly rough with you on purpose. The guy has an evil grin on his face as roughly shoves his dick down your throat, and you have to do your best to suppress your gag reflex. These guys are really pushing you to your limits, and then some…');
    qspCall(st, 'arousal', 'bj', 10, 'unknown', 'sub', 'group', 'rough', 'bound', 'deepthroat', 'humiliation');
    qspCall(st, 'arousal', 'anal', (-10), 'unknown', 'sub', 'group', 'rough', 'bound', 'humiliation');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get angry and bite his dick', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/sex/placer_sex108.jpg');
    scene.text('The guys are really taking this too far, you\'ve never felt so humiliated in your life! You angrily bite on the cock in your mouth, and the guy yells like you\'ve ripped it clean off: "AAAAAH! This fucking biter did it again!"');
    scene.text('The guys begin slapping you everywhere, and quite roughly at that. They slap your face, your ass, your hips, your tits… anything they can reach. You\'re reeling from the pain and slump down on the bed, crying for mercy.');
    // TODO-QSP: dynamic text: <<$boydesc2>> tightly binds you with a long piece of rope, and slaps your face o...
    scene.text(`${((st as any).boydesc2 ?? '')} tightly binds you with a long piece of rope, and slaps your face once more while he threatens you: "Last chance, whore. If any of us feel your teeth once more, you're dead. Fucking DEAD! You hear me!?"`);
    scene.text('You\'re terrified now, and the menacing guys all forming a circle around you makes you even more afraid. You meekly whisper: "I understand… I\'ll be good, I promise! Just take pity on me, please!"');
    scene.text('He snorts: "Pity must be earned, bitch. You\'re still due for more punishment, first."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gs 'boyStat', $rapist[1]
    (st as any).spafinloc = 3;
    qspCall(st, 'cum_manage', '');
    // TODO-QSP: gs 'boyStat', $rapist[2]
    qspCall(st, 'cum_manage', '');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex109.jpg');
    scene.text('They move you around like a rag doll, and with your arms tied tightly behind your back there\'s not a thing you can do about it. You feel two cocks entering your pussy and asshole, but at this point they have broken your resistance. You just lie back against some guy\'s chest, and wait for them to be done with you.');
    // TODO-QSP: dynamic text: <<$boydesc2>> squats over your face, and puts his ass crack against your lips. W...
    scene.text(`${((st as any).boydesc2 ?? '')} squats over your face, and puts his ass crack against your lips. When you try to turn away, his friends keep squeezing your breasts and nipples until you open your mouth.`);
    // TODO-QSP: dynamic text: You really don''t want to, but the guys leave you no choice. You reluctantly lic...
    scene.text(`You really don't want to, but the guys leave you no choice. You reluctantly lick ${((st as any).boydesc2 ?? '')}'s asshole, and he encourages you: "It's so nice to train an unruly bitch… it just feels so rewarding when they finally obey, isn't that right guys?"`);
    scene.text('They all laugh, and tears roll down your cheeks as you keep licking his hairy ass. You can\'t believe they would do this to you! At least they can\'t see your face, in this position…');
    scene.text('Then the two guys that are fucking you start groaning, and shoot their loads inside you almost simultaneously.');
    qspCall(st, 'arousal', 'bj', 5, 'unknown', 'sub', 'group', 'rough', 'bound', 'deepthroat', 'humiliation');
    qspCall(st, 'arousal', 'anal', 5, 'unknown', 'sub', 'group', 'rough', 'bound', 'humiliation');
    qspCall(st, 'arousal', 'vaginal', 5, 'unknown', 'sub', 'group', 'rough', 'bound', 'humiliation');
    qspCall(st, 'arousal', 'cuni_give', 5, 'unknown', 'sub', 'group', 'rough', 'bound', 'humiliation');
    qspCall(st, 'arousal', 'breasts', (-5));
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gs 'boyStat', $rapist[4]
    (st as any).spafinloc = 11;
    qspCall(st, 'cum_manage', '');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex110.jpg');
    // TODO-QSP: dynamic text: Your tongue licking his ass also seems to have its effects, and <<$boydesc2>> cu...
    scene.text(`Your tongue licking his ass also seems to have its effects, and ${((st as any).boydesc2 ?? '')} cums all over your face and hair with a guttural growl. His orgasm was so powerful, that some of it flew right past you, and landed on the floor.`);
    // TODO-QSP: dynamic text: <<$boydesc2>> grabs onto your hair and guides you towards the cum that landed on...
    scene.text(`${((st as any).boydesc2 ?? '')} grabs onto your hair and guides you towards the cum that landed on the floor. "I hate stains on my floor… good thing we have a cute little hussy like you to clean that up for us!"`);
    scene.text('He rubs your face against the floor, next to his cum… and you know he\'s not going to let it go. With a sigh of resignation you extend your tongue, and obediently lap it up like he expects.');
    scene.text('He nods happily and strokes your hair theatrically: "Good whore! That\'s a good whore… not wasting a single drop of a man\'s precious nectar!" His friends laugh loudly.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    (st as any).pcs_mood = 0;
    (st as any).pcs_horny = 0;
    qspCall(st, 'arousal_funcs', 'stretch', 'vaginal', 2);
    ((st as any).stat = (st as any).stat ?? {})['swallow'] = ((st as any).stat['swallow'] ?? 0) + (1);
    qspCall(st, 'arousal_funcs', 'stretch', 'oral', 2);
    (st as any).facial = ((st as any).facial ?? 0) + (2);
    (st as any).guy = ((st as any).guy ?? 0) + (5);
    qspCall(st, 'arousal_funcs', 'stretch', 'anal', 1);
    // TODO-QSP: gs 'boyStat', $rapist[3]
    (st as any).spafinloc = 12;
    qspCall(st, 'cum_manage', '');
    // TODO-QSP: gs 'boyStat', $rapist[0]
    (st as any).spafinloc = 12;
    qspCall(st, 'cum_manage', '');
    // TODO-QSP: gs 'boyStat', $rapist[5]
    (st as any).spafinloc = 12;
    qspCall(st, 'cum_manage', '');
    ((st as any).stat = (st as any).stat ?? {})['rape_count'] = ((st as any).stat['rape_count'] ?? 0) + (1);
    (st as any).vgape = 3;
    (st as any).agape = 3;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex111.jpg');
    // TODO-QSP: dynamic text: When you lick <<$boydesc2>>''s cum off the floor, most of the rapists seem to th...
    scene.text(`When you lick ${((st as any).boydesc2 ?? '')}'s cum off the floor, most of the rapists seem to think you've had enough. They gag you with a rag, and the guys that hadn't finished yet come up in turns and masturbate over your face. You're not noticing much of it any more, by now. You closed your eyes a while ago, and are doing your best to leave whatever is happening in this room behind you.`);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'A while later…', handler: (st: GameState) => {
    qspCall(st, 'placer_sex', 'rape_end');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Say you\'ll be good', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex112.jpg');
    scene.text('You\'re coming to terms with the fact that you\'ll have to please all of them before they let you. Not wanting to suffer through any more pain, you whimper: "No more! Guys, I\'ll do whatever you want me to. Please just stop hurting me! Please, show some mercy!"');
    // TODO-QSP: dynamic text: The guys testily pull you up from the bed, but they''re willing to give you a ch...
    scene.text(`The guys testily pull you up from the bed, but they're willing to give you a chance to prove what you just said. ${((st as any).boydesc2 ?? '')} tightly binds your arms behind your back with a long piece of rope. He also loops it around your waist and neck several times.`);
    scene.text('You gulp, and to your shame you have to admit: you\'re getting aroused! Your pussy is getting wetter at the thought of you surrendering to all of these guys… and their magnificent cocks. One of the guys promptly forces several fingers into your pussy, and you groan… whether it\'s from pain or pleasure, even you aren\'t quite sure. What is wrong with you?');
    scene.text('He grins and tells his friends: "Damn, she\'s soaked! I think she\'s just a huge slut for humiliation and submission… aren\'t you, whore?"');
    scene.text('Not daring to refute him, you simply nod and say with downcast eyes: "Yes, sir."');
    scene.text('"Sir… I like it. Tell us what you want us to do to you", he commands you. Several of the other guys laugh, and offer lewd and degrading suggestions.');
    scene.text('All the derogatory remarks make you break down, and you whimper: "Anything, sir. I want you to do anything you would like to do to me. That\'s all I\'m good for."');
    qspCall(st, 'arousal', 'vaginal_finger', 5, 'unknown', 'sub', 'group', 'rough', 'bound', 'humiliation');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex114.jpg');
    scene.text('Immediately one of them puts his dick in your mouth… it\'s huge! You can barely close your lips around it, but he doesn\'t care and keeps forcing your head down further.');
    scene.text('You do your best to take it in, but after a while you\'re horrified to hear him say: "Listen up, slut! If you don\'t do a good job, it\'s going in your ass next!"');
    scene.text('As much as you try to placate him and suck him off as good as you can, it\'s not good enough. After a while he shakes his head disappointedly at you and says in a smug voice: "You\'ve had your chance. In your ass it goes, then."');
    qspCall(st, 'arousal', 'bj', 5, 'unknown', 'sub', 'group', 'rough', 'bound', 'deepthroat', 'humiliation');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Beg for another chance', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex115.jpg');
    scene.text('That thought makes you panic: there\'s no way his cock would fit in your ass! You whine and beg him: "Please sir, give me another chance! I\'ll make you feel good, I promise! Just… not my ass, please!"');
    scene.text('The guy ignores your pleas, and lies down on the bed. Several hands lift you up, and position you so your entire weight is leaning on the tip of his cock, which is conveniently positioned against your puckered asshole.');
    scene.text('He grins: "I love it when they beg…" just as his friends lower your body, gradually forcing his huge cock into your ass. He groans, but you can\'t hear him over your sharp cries of pain. It hurts! It hurts so much!');
    qspCall(st, 'arousal', 'anal', 10, 'unknown', 'sub', 'group', 'rough', 'bound', 'humiliation');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex116.jpg');
    scene.text('The guys show you no mercy, and don\'t let go of you until his cock is most of the way up your ass. To your surprise, the pain gradually makes place for… wait, you can\'t actually be enjoying this!?');
    scene.text('You can\'t help but groan loudly, as the guy rolls to one side and begins to pound your ass with his huge cock. Meanwhile, the other guys keep humiliating you, squeezing your tits, and making degrading remarks at your expense. And… you feel good! This can\'t be happening!');
    scene.text('The guys notice it too, and one grins: "Look at her… one cock is not enough! I think she\'s ready for the main course!"');
    qspCall(st, 'arousal', 'anal', 10, 'unknown', 'sub', 'group', 'rough', 'bound', 'humiliation');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    // TODO-QSP: gs 'boyStat', $rapist[1]
    (st as any).cumprecheck = 1;
    qspCall(st, 'cum_manage', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex117.jpg');
    scene.text('The guy fucking you closes his arms around you and rolls back, his cock never leaving your ass. One of his buddies immediately gets between your legs and shoves his also sizeable member into your snatch. Meanwhile, another goes for your mouth and expectantly puts his cock against your lips, expecting you to do most of the work.');
    scene.text('You feel like you\'re little more than a piece of meat by now, only existing to serve these dicks… these glorious, magnificent dicks!');
    scene.text('You\'re not even trying to hide your enthusiasm any more, and loudly groan around the cock in your mouth while the other guys pound you mercilessly. Your pussy is loudly squelching, every time a cock enters or leaves it.');
    scene.text('What the hell happened? Are you really getting off from getting fucked and humiliated like this?');
    qspCall(st, 'arousal', 'bj', 10, 'unknown', 'sub', 'group', 'rough', 'bound', 'deepthroat', 'humiliation');
    qspCall(st, 'arousal', 'anal', 10, 'unknown', 'sub', 'group', 'rough', 'bound', 'humiliation');
    qspCall(st, 'arousal', 'vaginal', (-10), 'unknown', 'sub', 'group', 'rough', 'bound', 'humiliation');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    (st as any).pcs_horny = 0;
    qspCall(st, 'mood', 'lower', 'huge');
    qspCall(st, 'arousal_funcs', 'stretch', 'vaginal', 2);
    ((st as any).stat = (st as any).stat ?? {})['swallow'] = ((st as any).stat['swallow'] ?? 0) + (1);
    qspCall(st, 'arousal_funcs', 'stretch', 'oral', 1);
    (st as any).guy = ((st as any).guy ?? 0) + (5);
    qspCall(st, 'arousal_funcs', 'stretch', 'anal', 2);
    qspCall(st, 'cum_manage', '');
    // TODO-QSP: gs 'boyStat', $rapist[0]
    qspCall(st, 'cum_manage', '');
    // TODO-QSP: gs 'boyStat', $rapist[2]
    (st as any).spafinloc = 3;
    qspCall(st, 'cum_manage', '');
    // TODO-QSP: gs 'boyStat', $rapist[3]
    (st as any).spafinloc = 3;
    qspCall(st, 'cum_manage', '');
    // TODO-QSP: gs 'boyStat', $rapist[5]
    (st as any).spafinloc = 11;
    qspCall(st, 'cum_manage', '');
    ((st as any).stat = (st as any).stat ?? {})['rape_count'] = ((st as any).stat['rape_count'] ?? 0) + (1);
    (st as any).vaginalOrgasm = ((st as any).vaginalOrgasm ?? 0) + (1);
    (st as any).DPorgasm = ((st as any).DPorgasm ?? 0) + (1);
    (st as any).vgape = 3;
    (st as any).agape = 3;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex118.jpg');
    scene.text('As it turns out… yes. Yes, you are getting off from getting fucked and humiliated like this.');
    scene.text('You groan as your body keeps trembling… and a few seconds later, again! Having two orgasms in such a short timespan… even the guys are impressed: "She came twice! Twice within a minute, man!"');
    scene.text('After that everything becomes a blur, you\'re flashing in and out of consciousness. When you can finally focus again, you feel the boys deposited several loads inside your pussy and asshole. From the taste in your mouth, at least one of them unloaded there too. Your body feels sore. All of your holes feel sore.');
    scene.text('Then you realize… one of them hasn\'t touched you, yet.');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'stat', '');
    if ((!((st as any).Big_C ?? 0))) {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/sex/placer_sex119.jpg');
    // TODO-QSP: dynamic text: To your surprise, the guy who <<$boydesc2>> only referred to as ''Big C'' says: ...
    scene.text(`To your surprise, the guy who ${((st as any).boydesc2 ?? '')} only referred to as 'Big C' says: "Get the fuck out of here, all of you. She's mine now."`);
    // TODO-QSP: dynamic text: While all the guys leave, he gives a nod of gratitude to <<$boydesc2>>: "She''s ...
    scene.text(`While all the guys leave, he gives a nod of gratitude to ${((st as any).boydesc2 ?? '')}: "She's hot. Thanks, I owe you one."`);
    scene.text('But then to your surprise, Big C unties the rope binding you and rubs your sore shoulders.');
    scene.text('You automatically reach for his groin, but he stops you: "No. Not like this."');
    scene.text('He offers you a <a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: VIEW /u0027images/locations/pavlovsk/park/sex/placer_sex120.jpg/u0027 */ return s; }); return false;">photo</a>, and says: "You have potential. If you want to become one of them… come find me. Now come, take a shower. I\'ll make sure the guys will let you leave afterwards."');
    scene.actions([
      { label: 'Take a shower', handler: (st: GameState) => {
    // TODO-QSP: view
    (st as any).din_dush_text = 'You quietly thank him, and follow him to the bathroom. You take a quick shower, doing your best to rinse the cum from all of your holes. When you finish, you see Big C standing in the bathroom. He\'d been watching you the whole time, while making sure none of the other guys would disturb you.';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDinDush(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Leave the apartment', handler: (st: GameState) => {
    (st as any).pcs_mood = 5;
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    (st as any).Big_C = 1;
    scene.img('images/locations/pavlovsk/park/sex/placer_sex121.jpg');
    scene.text('You quietly thank him again, and leave the apartment unharmed. You run for two blocks, and then stop and lean against a wall, trying to take it all in. You just got raped! Despite the orgasms you had, you don\'t feel good at all. The guys were way too rough with you!');
    scene.text('Then you look at the <a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: VIEW /u0027images/locations/pavlovsk/park/sex/placer_sex120.jpg/u0027 */ return s; }); return false;">photo</a> again. You turn it around, and try to focus on the <a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: VIEW /u0027images/locations/pavlovsk/park/sex/placer_sex123.jpg/u0027 */ return s; }); return false;">text on the back</a>. It makes no sense! The text is completely illegible, except for the very end. You recognize the initials… BC.');
    scene.text('What could he want with you? Especially after today\'s events?');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Keep the photo and go home', handler: (st: GameState) => {
    // TODO-QSP: view
    (st as any).Foto = 1;
    qspGoto(st, 'pav_residential', '');
  } },
      { label: 'Discard the photo and go home', handler: (st: GameState) => {
    // TODO-QSP: view
  }, goto: ['pav_residential', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/sex/placer_sex111.jpg');
    // TODO-QSP: gs 'boyStat', $rapist[5]
    (st as any).spafinloc = 12;
    qspCall(st, 'cum_manage', '');
    scene.text('After witnessing your complete submission, most of the rapists seem to think you\'ve had enough. They gag you with a rag, and the guys that hadn\'t finished yet come up in turns and masturbate over your face. You\'re not noticing much of it any more. You closed your eyes a while ago, and are doing your best to leave whatever is happening in this room behind you. Your body gets stimulated enough by the guys to coax one more orgasm out of you, and you silently resent your body for betraying you like that.');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'A while later…', handler: (st: GameState) => {
    (st as any).pcs_mood = 5;
    qspCall(st, 'placer_sex', 'rape_end');
  } },
    ]);
  } },
      ]);
    }
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
  } },
    ]);
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    qspGoto(s, 'pav_residential', '');
  }
  // TODO-QSP: end
  scene.build();
}

function enterRapeEnd(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/park/sex/placer_sex124.jpg');
  scene.text('You wake up in the back seat of a car. You\'re completely naked, and covered in sperm. You idly try to wipe the sperm from your face while you slowly get up. You mutter: "Wha… what\'s happening? Where are you taking me?"');
  // TODO-QSP: dynamic text: <<$boydesc2>> immediately pulls over and opens the door. He still has that stoic...
  scene.text(`${((s as any).boydesc2 ?? '')} immediately pulls over and opens the door. He still has that stoic look on his face, pretending you're not even worth talking to.`);
  scene.text('He slaps your face quite hard, and orders you: "Shut up, bitch! I guess this is where you get the fuck out of my car."');
  scene.text('Him and one of his friends pull you out of the car, and quickly bind your wrists together with some rope before they drag you away from the road.');
  // TODO-QSP: end
  scene.actions([
    { label: 'You\'re at the lake?', handler: (st: GameState) => {
    if (((st as any).month ?? 0)===12  ||  ((st as any).month ?? 0)===1  ||  ((st as any).month ?? 0)===2) {
      scene.img('images/locations/pavlovsk/park/sex/placer_sex125.jpg');
      scene.text('When you look around, you realize you\'re at the frozen lake near Pavlovsk. Actually… you\'re on top of it, walking over the ice. You\'re completely naked and your body is shivering in the bitter cold, but the guys don\'t care and force you to keep walking between them. It\'s not like you could resist them anyway, your wrists are still bound in front of you.');
      // TODO-QSP: dynamic text: They walk towards a place where the ice is broken. <<$boydesc2>> threatens you: ...
      scene.text(`They walk towards a place where the ice is broken. ${((st as any).boydesc2 ?? '')} threatens you: "Do you want to live, bitch?"`);
      scene.text('You nod, in panic. Of course you want to live! What the hell are they going to do!? Surely they\'re not going to kill you?');
      scene.text('He continues: "Good. This will be a reminder of what we can do to you… we know all your personal details, we can do much worse than this if you go to the police. Your stuff will be at the edge of the lake. Don\'t make us regret letting you go."');
      scene.text('With that he cuts the rope that was binding your wrists together, and roughly shoves you towards the gap. You shriek as you plunge down into the ice cold water. Meanwhile, the guys run towards their car and throw your stuff out the window when they drive off, leaving you to your own devices. You\'ll have to climb out of the ice cold water by yourself!');
      scene.text('Eventually you manage, and you have no choice but to run across the frozen lake in the winter cold. The cold pierces your body, and you feel like you might be suffering from hypothermia while you try to maintain control of your shivering body.');
    } else {
      if ((((st as any).month ?? 0)>=3  &&  ((st as any).month ?? 0)<=4)  ||  (((st as any).month ?? 0)>9  &&  ((st as any).month ?? 0)<=11)) {
        scene.img('images/locations/pavlovsk/park/sex/placer_sex126.jpg');
        scene.text('When you look around, you realize you\'re walking on the shore of the lake near Pavlovsk. You\'re completely naked and your body is shivering in the bitter cold, but the guys don\'t care and force you to keep walking between them. It\'s not like you could resist them anyway, your wrists are still bound in front of you.');
        // TODO-QSP: dynamic text: They walk towards a place where you know the water is quite deep. <<$boydesc2>> ...
        scene.text(`They walk towards a place where you know the water is quite deep. ${((st as any).boydesc2 ?? '')} threatens you: "Do you want to live, bitch?"`);
        scene.text('You nod, in panic. Of course you want to live! What the hell are they going to do? Surely they\'re not going to kill you!?');
        scene.text('He continues: "Good. This will be a reminder of what we can do to you… we know all your personal details, we can do much worse than this if you go to the police. Your stuff will be over there, by the edge of the lake. Don\'t make us regret letting you go."');
        scene.text('With that he cuts the rope that was binding your wrists together and roughly shoves you towards the water, and you shriek as you splash down into the cold lake. They run towards their car, and throw your stuff out the window before driving off. You\'ll have to climb out of the cold lake by yourself. Eventually you manage, and you have no choice but to run along the edge until you reach your clothes. The cold pierces your body, and you feel like you might be suffering from hypothermia while you try to maintain control of your shivering body.');
      } else {
        if (((st as any).month ?? 0)>=5  &&  ((st as any).month ?? 0)<=9) {
          scene.img('images/locations/pavlovsk/park/sex/placer_sex127.jpg');
          scene.text('When you look around, you realize you\'re walking on the shore of the lake near Pavlovsk. You\'re completely naked and your body is shivering, still aching from the treatment the guys gave you earlier. The guys don\'t care, and force you to keep walking between them. It\'s not like you could resist them anyway, your wrists are still bound in front of you.');
          // TODO-QSP: dynamic text: They walk towards a place where you know the water is quite deep. <<$boydesc2>> ...
          scene.text(`They walk towards a place where you know the water is quite deep. ${((st as any).boydesc2 ?? '')} threatens you: "Do you want to live, bitch?"`);
          scene.text('You nod, in panic. Of course you want to live! What the hell are they going to do? Surely they\'re not going to kill you!?');
          scene.text('He continues: "Good. This will be a reminder of what we can do to you… we know all your personal details, we can do much worse than this if you go to the police. Your stuff will be over there, by the edge of the lake. Don\'t make us regret letting you go."');
          scene.text('With that he cuts the rope that was binding your wrists together and roughly shoves you towards the water, and you shriek as you splash down into the lake. It\'s actually fairly warm at this time of year, but your aching muscles make it an exhausting experience nevertheless. The boys run towards their car, and throw your stuff out the window before driving off. You\'ll have to climb out of the lake by yourself. Eventually you manage, and you have no choice but to run along the edge in the nude until you reach your clothes.');
        }
      }
    }
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    qspCall(st, 'boyStat', '', ((st as any).boy2 ?? 0));
    (st as any).spafinloc = 7;
    qspCall(st, 'cum_manage', '');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/placer_sex128.jpg');
    scene.text('Ignoring the semen stains the boys left on your clothes you quickly put them on, happy to at least have some clothes on your body. Your eyes are scanning the surroundings, and you desperately hope that no one just saw you running naked by the lake.');
    scene.text('Your mind is still reeling from all the things that happened today, and you break down on a tree stump and just hold your head in your hands for a moment, trying to shake off the worst of the exhausted feeling while you try to forget all the things the boys did and said. It\'s not working, and you still feel terrible.');
    scene.text('You get up from the tree stump, and slowly shuffle along the edge of the lake towards the beach near Pavlovsk. What you really need, first of all, is a nice warm bath.');
    scene.actions([
      { label: 'Walk towards the beach near Pavlovsk', goto: ['pav_lake', ''] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSittingParkBench(s: GameState, scene: SceneBuilder): void {
  if (((s as any).alko ?? 0) >= 7  &&  ((s as any).pcs_apprnc ?? 0) >= 120) {
    qspGoto(s, 'placer_sex', 'sleeping_park_alco_rape');
  } else {
    (s as any).location_type = 'public_outdoors';
    if (((s as any).PCloStyle2 ?? 0) === 4  ||  ((s as any).PCloSchool ?? 0) === 1) {
      // TODO-QSP: iif(rand(0, 1)=1, '<center><img <<$set_imgh>> src="images/locations/shared/park/bench_5.jpg"></cente...
    } else {
      if (((s as any).PCloSkirt ?? 0) > 0) {
        scene.img('images/locations/shared/park/bench_2.jpg');
      } else {
        if (((s as any).PCloPants ?? 0) > 3) {
          scene.img('images/locations/shared/park/bench_1.jpg');
        } else {
          scene.img('images/locations/shared/park/bench_3.jpg');
        }
      }
    }
    (s as any).waiting = parseFloat(window.prompt("How long would you like to rest?<br>(Default 15 minutes, maximum 120 minutes)") ?? '');
    if (((s as any).alko ?? 0) >= 4) {
      qspGoto(s, 'placer_sex', 'sleeping_park_bench');
    }
    if ((!((s as any).waiting ?? 0))) {
      (s as any).minut = ((s as any).minut ?? 0) + 15;
    } else {
      if (((s as any).waiting ?? 0) > 0  &&  ((s as any).waiting ?? 0) <= 120) {
        (s as any).minut = ((s as any).minut ?? 0) + (((s as any).waiting ?? 0));
        qspCall(s, 'mood', 'raise', 'tiny');
        if (((s as any).pcs_sleep ?? 0) < 90  &&  ((s as any).waiting ?? 0) >= 60) {
          (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) + (10);
        }
      }
    }
    dynamicGoto(s, 'prevLoc', 'prevArg');
  }
  // TODO-QSP: end
  scene.build();
}

function enterSleepingParkBench(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (5);
  (s as any).pcs_hairbsh = 0;
  (s as any).inSleep = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 480;
  (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) + (80);
  qspCall(s, 'stat', '');
  (s as any).inSleep = 0;
  if (((s as any).PCloStyle2 ?? 0) === 4  ||  ((s as any).PCloSchool ?? 0) === 1) {
    scene.img('images/locations/shared/park/sleeping_park_form.jpg');
  } else {
    if (((s as any).PCloSkirt ?? 0) > 0) {
      scene.img('images/locations/shared/park/sleeping_park_dress.jpg');
    } else {
      if (((s as any).PCloPants ?? 0) > 3) {
        scene.img('images/locations/shared/park/sleeping_park_shorts.jpg');
      } else {
        scene.img('images/locations/shared/park/sleeping_park_jeans.jpg');
      }
    }
  }
  if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
    (s as any).pcs_makeup = 0;
    (s as any).vidageday = ((s as any).vidageday ?? 0) - (1);
    scene.text('Makeup smeared in the face, you think, that is harmful to the appearance of sleep with makeup, skin ages faster from this.');
  }
  scene.text('You\'re feeling tired, and decide to try and get some sleep on the park bench.');
  scene.text('');
  // TODO-QSP: end
  scene.actions([
    { label: 'Wake up', handler: (st: GameState) => {
    if (((st as any).PCloSkirt ?? 0) === 4) {
      scene.img('images/locations/shared/park/sleeping_park1.jpg');
      if (((st as any).pantyworntype ?? 0) !== 'none') {
        qspCall(st, 'underwear', 'dispose');
        scene.text('You wake up with a smile, stretching your arms and legs. You realize your panties are missing and quickly close your legs. You fearfully think to yourself : "I hope that whoever took my panties did not take advantage of me while I was out".');
      } else {
        scene.text('You wake up with a smile, stretching your arms and legs, flashing your bare pussy to the entire Park.');
      }
    } else {
      if (((st as any).PCloSkirt ?? 0) > 0) {
        scene.img('images/locations/shared/park/sleeping_park.jpg');
        if (((st as any).pantyworntype ?? 0) !== 'none') {
          qspCall(st, 'underwear', 'dispose');
          scene.text('You wake up with a smile, stretching your arms and legs. You realize your panties are missing and quickly close your legs. You fearfully think to yourself : "I hope that whoever took my panties did not take advantage of me while I was out".');
        } else {
          scene.text('You wake up with a smile, stretching your arms and legs, flashing your bare pussy to the entire Park.');
        }
      } else {
        scene.img('images/locations/shared/park/sleeping_park2.jpg');
        scene.text('You wake up with a smile, stretching your arms and legs.');
      }
    }
    if ((Math.floor(Math.random() * 10) + 1) <= 6  &&  ((st as any).money ?? 0) !== 0) {
      scene.text('You now realize someone stole your money while you were sleeping!');
      qspCall(st, 'money', 'set', 0, 'cash');
    }
    (st as any).temp = (Math.floor(Math.random() * 10) + 1);
    if (((st as any).temp ?? 0) <= 8) {
      qspCall(st, 'npcgeneratec', '', 0, 'stranger park', (Math.floor(Math.random() * 31) + 30));
      qspCall(st, 'boyStat', '', ((st as any).npclastgenerated ?? 0));
      if (((st as any).PCloSkirt ?? 0) !== 0) {
        if (((st as any).temp ?? 0) === 3) {
          scene.text('You feel something sticky on your labia, what the hell is this?');
          qspCall(st, 'cum_call', 'labia', 'stranger park', 2);
        } else {
          if (((st as any).temp ?? 0) === 4) {
            scene.text('You feel something sticky on your legs, what the hell is this?');
            qspCall(st, 'cum_call', 'legs', 'stranger park', 2);
          } else {
            if (((st as any).temp ?? 0) === 6) {
              scene.text('You feel something sticky on your butt, what the hell is this?');
              qspCall(st, 'cum_call', 'butt', 'stranger park', 2);
            }
          }
        }
      } else {
        if (((st as any).temp ?? 0) === 1) {
          scene.text('You feel something sticky on your hair, what the hell is this?');
          qspCall(st, 'cum_call', 'hair', 'stranger park', 2);
        } else {
          if (((st as any).temp ?? 0) === 2) {
            scene.text('You feel something sticky on your face, what the hell is this?');
            qspCall(st, 'cum_call', 'face', 'stranger park', 2);
          } else {
            if (((st as any).temp ?? 0) === 5) {
              scene.text('You feel something sticky on your hands, what the hell is this?');
              qspCall(st, 'cum_call', 'hands', 'stranger park', 2);
            } else {
              if (((st as any).temp ?? 0) === 7) {
                scene.text('You feel something sticky on your clothes, what the hell is this?');
                qspCall(st, 'cum_call', 'clothes', 'stranger park', 2);
              } else {
                if (((st as any).temp ?? 0) === 8) {
                  scene.text('You feel something sticky and a salty taste in your mouth, what the hell is this?');
                  qspCall(st, 'cum_call', 'mouth', 'stranger park', 2);
                }
              }
            }
          }
        }
      }
      qspCall(st, 'stat', '');
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSleepingParkAlcoRape(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/park/sex/bench/sleeping_parc_alco1_1.jpg');
  scene.text('Maybe it\'s the alcohol, or maybe you just haven\'t slept well… but you feel tired. You sit down on the park bench, wanting to rest your exhausted body for a while. Slowly, your eyes begin to close. Realizing that it could be dangerous to fall asleep in a public place like the park, you do your best to stay awake. The alcohol in your blood makes it impossible though, and you slowly feel your consciousness drift away.');
  scene.text('A few minutes later, you\'re vaguely aware of the fact that someone is dragging you up from the park bench. You\'re too drunk to do anything about it though, and slowly fade out again.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/shared/park/sex/bench/sleeping_parc_alco1_2.jpg');
    scene.text('The next thing you remember is being taken somewhere. Someone has thrown you over their shoulder, and is hauling you off like you\'re a sack of potatoes. You already felt sick to your stomach before, and this position is making it even worse; his shoulder is lodged against your stomach, and your head is hanging upside down. You try to protest, but all that comes out of your mouth is some incoherent, drunken slurring. The person carrying you either doesn\'t care or doesn\'t notice, and just keeps walking.');
    scene.text('When you briefly come to your senses again you notice you\'re indoors now, still being carried by this stranger. A terrible thought crosses your mind: "Oh god… no one knows I\'m here! What if he\'s going to kill me!?"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((st as any).frost ?? 0) > 0) {
      (st as any).frost = 0;
    }
    scene.img('images/locations/shared/park/sex/bench/sleeping_parc_alco1_3.jpg');
    scene.text('Suddenly you feel your balance shifting, and you feel a soft ground underneath you… are you on a bed?');
    scene.text('You silently feel grateful just to have something soft underneath you, and your nauseated feelings lessen a bit now that you\'re no longer in this awkward position over his shoulder.');
    scene.text('When you open your eyes, you see the vague contours of a man. The last things you catch before passing out again, is that he\'s beginning to undress you.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/shared/park/sex/bench/sleeping_parc_alco1_4.jpg');
    scene.text('…');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/shared/park/sex/bench/sleeping_parc_alco1_5.jpg');
    scene.text('When you regain consciousness again, you slowly open your eyes and get startled by the look of a naked guy, sitting right next to your head. Your body is not very willing to cooperate when you want to get away from him, and you barely manage to pull your face away from his groin as you mumble: "Wha… who are you? Where am I?"');
    scene.text('Slowly, your mind puts the pieces together - this guy brought you here, after you passed out on the park bench!');
    scene.text('There is some threat in his voice when he speaks: "You\'re not going to do anything stupid, are you?');
    scene.text('You try to reassure him: "No, don\'t worry. Thank you for taking me out of the park, I don\'t know what could\'ve happened to me there!"');
    scene.text('The man smirks at your naivete, and without changing his tone says: "It already happened, you idiot. Now take off your clothes."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    qspCall(st, 'npcgeneratec', '', 0, 'Rapist', (Math.floor(Math.random() * 18) + 18));
    qspCall(st, 'boyStat', '', ((st as any).npclastgenerated ?? 0));
    (st as any).cumprecheck = 1;
    ((st as any).stat = (st as any).stat ?? {})['rape_count'] = ((st as any).stat['rape_count'] ?? 0) + (1);
    (st as any).guy = ((st as any).guy ?? 0) + (1);
    qspCall(st, 'clothing', 'strip');
    qspCall(st, 'underwear', 'remove');
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/park/sex/bench/sleeping_parc_alco1_6.jpg');
    if (((st as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.text('Your eyes grow wide, and you cry out: "Please, sir! Please, I\'m begging you! I\'m still a virgin… I can\'t lose my virginity like this!"');
      scene.text('The guy is not interested in your pleas: "Look, girl. This can go two ways… either you take your clothes off for me, or I will do it for you. What\'s it going to be?"');
      scene.text('You realize he\'s not going to let you go. With tears in your eyes you slowly begin to take off your clothes, softly begging the whole time: "Please, sir… please don\'t do this…"');
    } else {
      scene.text('For a moment you consider pretending to be a virgin, hoping that will get him to show you some mercy. You take another look at his face, and the sparkle in his eyes make you realize he\'s not going to fall for that. You let out a soft sigh and resign to your fate.');
      scene.text('When you begin to take your clothes off, the guy even helps you. He gently runs his hands all over your body while he assists you, and you feel slightly confused. For someone who is forcing you to take your clothes off, he\'s surprisingly kind and gentle.');
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/shared/park/sex/bench/sleeping_parc_alco1_7.jpg');
    if (((st as any).pcs_throat ?? 0) < ((st as any).dick ?? 0)) {
      qspCall(st, 'arousal_funcs', 'stretch', 'oral', 1);
    }
    if (((st as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.text('His stone cold expression never leaves his face, while he orders you in an even tone: "Good, now suck my cock."');
      scene.text('It\'s still flaccid, and you hesitantly close your lips around it. You put one hand near the base to help yourself while you slowly feel his cock harden between your lips, never taking it out of your mouth. It\'s a bit longer than you expected it to be, and you have a rough time suppressing your gag reflex when it hits the back of your throat.');
      scene.text('He\'s not very impressed with your efforts so far, and moans: "Come on, street trash… put some effort into it!"');
      scene.text('"This doesn\'t feel real, I must still be asleep!" you reassure yourself. "I will wake up, and everything will be fine."');
      (st as any).orgasm_or = 'no';
      qspCall(st, 'arousal', 'bj', 5, 'unknown', 'sub', 'humiliation');
      qspCall(st, 'stat', '');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/shared/park/sex/bench/sleeping_parc_alco1_8.jpg');
    scene.text('Unfortunately, all is not fine. Getting tired of your mouth, he pulls you towards him and tosses you down onto the bed in one fluent motion. He barrels down on top of you, and you feel his erection pressing against your stomach.');
    scene.text('A thought flashes through your head: "Oh god, he\'s going to rape me now! I don\'t want this… this can\'t be happening!"');
    scene.text('During this time, you feel his erection slowly making its way down, towards your coveted cunt. You barely have time to mentally prepare yourself, because he slams his hips against yours and thrusts his long and big cock deep inside you as soon as he reaches it.');
    qspCall(st, 'arousal', 'vaginal', 5, 'unknown', 'sub', 'humiliation');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/shared/park/sex/bench/sleeping_parc_alco1_9.mp4');
    scene.text('It feels like he\'s forcing a hot lead pipe inside you! You\'ve thought about sex many times, but you never imagined it being quite as painful as it is right now.');
    scene.text('The rapist ignored your screams and fucks you mercilessly. Some of your blood is on the sofa, but that doesn\'t stop him. If anything, your suffering only makes him fucks you harder. His hands knead your breasts roughly while he thrusts his cock inside you faster and faster.');
    qspCall(st, 'arousal', 'vaginal', 5, 'unknown', 'sub', 'humiliation', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/shared/park/sex/bench/sleeping_parc_alco1_10.mp4');
    scene.text('The torture goes on for another few minutes, even though it feels like an eternity. Then finally the guy reaches his orgasm, and he just rests his body on top of yours when he pumps his cum deep inside your pussy. When he pulls out of you, he gets up from the bed to examine his victim.');
    scene.text('You\'re lying there on his bed, a mixture of blood and semen leaking from your painful vagina. Tears stream down your face while you look at him fearfully… what is he going to do with you now?');
    qspCall(st, 'arousal', 'vaginal', 5, 'unknown', 'sub', 'humiliation', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/shared/park/sex/bench/sleeping_parc_alco1_11.jpg');
    scene.text('For the first time, you see a smile on your rapist\'s face. It\'s a cruel, sadistic smile. He asks: "Well, how do you feel?"');
    scene.text('You cry out: "How the fuck do you think I feel!? Fuck you!"');
    scene.text('He\'s infuriated by your swearing, and balls his fist as he screams: "WHAT!? What did you just say!?');
    scene.text('"N- nothing sir! I said nothing!" you hastily reply.');
    scene.text('It doesn\'t help. He grabs your hair and forcefully pulls you up from the bed, forcing you to stand close in front of him. A hard slap in the face makes you lose your balance, and you hit your head against a cabinet as you struggle to stay on your feet.');
    scene.text('"You keep that mouth in check, bitch. Next time I won\'t be so kind" he growls at you.');
    scene.text('If that was kind, you don\'t want to know what the alternative is! You nod, terrified of what he could do to you.');
    scene.text('He nods, his anger slowly subsiding: "Good. Now go take a shower, girl. I want to watch you wash my cum off your body."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/shared/park/sex/bench/sleeping_parc_alco1_12.jpg');
    scene.text('You feel exhausted, and think to yourself: "I can barely stand… I was such a fool to sleep in the park, I just want to go home!", while you climb in the tub and get down on your knees.');
    scene.text('The man\'s patience wears thin when you take too long to get started for his tastes, and he scolds you: "Do you not understand how to wash yourself, bitch?"');
    scene.text('With these words he gets into the tub with you and grabs hold of your hair. Your head is right between his legs, and he crudely shoves his cock inside your open mouth. He fucks your mouth for a while, not allowing you to pull your head away despite your best attempts.');
    scene.text('During the struggling he forces his cock all the way down your throat, and you nearly throw up from the deep intrusion.');
    scene.text('A powerful stream of semen enters your mouth, and he groans at you: "Eat up, bitch. Here it comes!"');
    scene.text('You nearly choke on his semen, while you do your best to swallow his load. You don\'t catch all of it, and some of his cum dribbles down your chin, onto your chest.');
    scene.text('The man scolds you once more: "Bitch, I told you to swallow that!" as he pushes you away from him.');
    scene.text('You fall back into the bathtub, and cower in the corner while you beg him with tears in your eyes: "I\'m sorry sir! Just please, don\'t hit me!"');
    qspCall(st, 'arousal', 'bj', 5, 'unknown', 'sub', 'humiliation', 'rough', 'deepthroat');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/shared/park/sex/bench/sleeping_parc_alco1_13.jpg');
    scene.text('"He waves his hand at you and says with a satisfied grin: "I guess I can\'t be too mad, you fully drained me. Go on, get dressed.');
    scene.text('This might be it! You quickly wipe the tears from your eyes and rush to your stuff. You quickly gather your things after you put your clothes back on. Hopefully he will let you go now.');
    scene.text('Indeed he does, but not before he warns you: "If you tell anyone what happened, I will find you. I will find you and I will kill you. Understood?"');
    scene.text('You quickly nod: "I won\'t tell anyone, I promise", feeling your body tense up again out of fear.');
    qspCall(st, 'arousal_funcs', 'stretch', 'vaginal', 2);
    (st as any).flag_rape_1 = 1;
    (st as any).pcs_horny = 0;
    qspCall(st, 'mood', 'lower', 'huge');
    (st as any).pcs_horny = 0;
    (st as any).vgape = 2;
    (st as any).cumprecheck = 1;
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).boy ?? 0), 1);
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'outfit', 'wear_last_worn');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave the apartment', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
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
    } else {
      scene.text('He nods contently and continues: "Good, now suck my cock."');
      scene.text('You were already expecting him to say that, and nod as you get down on your knees before him. You take his flaccid member in your hand, and obediently close your lips around the head. You gently begin to suck on it, teasing it with your tongue. It\'s growing steadily, and you feel it harden inside your mouth.');
      qspCall(st, 'arousal', 'bj', 5, 'unknown', 'sub', 'humiliation');
      qspCall(st, 'stat', '');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/shared/park/sex/bench/sleeping_parc_alco1_14.jpg');
    scene.text('Soon you have his dick fully erect and you shamefully realize you\'re giving this blowjob way more effort than you probably should, given the circumstances. The whole situation has you rather aroused despite the start, and you feel a burning desire between your legs.');
    qspCall(st, 'arousal', 'bj', 5, 'unknown', 'sub', 'humiliation');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/shared/park/sex/bench/sleeping_parc_alco1_15.jpg');
    scene.text('Once he\'s sufficiently warmed up, he gets up and puts you on the bed on your hands and knees, before positioning behind you. You can\'t see his eyes from your position, but they\'re wild, burning with passion and promising fun. With a roar he grabs onto your hips and forces his cock inside you, nearly making you pass out from the sudden sensations.');
    qspCall(st, 'arousal', 'vaginal', 5, 'unknown', 'sub', 'humiliation', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/shared/park/sex/bench/sleeping_parc_alco1_16.jpg');
    scene.text('Great waves of pleasure hit your body while your supposed rapist fucks you from behind, and you feel ashamed about the fact that he turns you on so much. He roughly grabs onto your breasts and squeezes your nipples while he fucks you, and after a while you feel you slapping your hips into his thrusts enthusiastically.');
    scene.text('When you feel him slow down, you push him down onto the bed, and get right back onto his cock as you begin to ride him. It started as rape but by now you\'re taking the initiative, actively fucking the guy.');
    qspCall(st, 'arousal', 'vaginal', 5, 'unknown', 'sub', 'humiliation', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/shared/park/sex/bench/sleeping_parc_alco1_10.mp4');
    scene.text('You feel his thrusts becoming shorter and more intense, and you realize he\'s about to have his orgasm. With the last bit of air in your lungs you squeak: "Please, not inside me!"');
    scene.text('He ignores it, and pushes you down on your stomach while he thrusts his cock inside you as deep as he can. He\'s very deep inside you and for a second you wonder if he\'s trying to shoot the powerful spurts of his cum straight into your uterus. The feeling sends you over the edge as well, and you groan: "Yeeeesssss" as the orgasm rocks your body.');
    qspCall(st, 'cum_manage', '');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'vaginal', 5, 'unknown', 'sub', 'humiliation', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/shared/park/sex/bench/sleeping_parc_alco1_13.jpg');
    scene.text('The two of you lie down for a while to catch your breath. You look at him and ask: "Can I please go now?"');
    scene.text('"So you can get yourself into more trouble?" asks the guy.');
    scene.text('You hastily reply: "Nope, no trouble. I\'m just going to go home and lay low for a while."');
    scene.text('He nods and says, with some concern in his voice: "Yes, of course you can go. Just promise me you won\'t go binge drinking again like that. Or if you do, at least do it somewhere safe so you don\'t end up alone in the park."');
    scene.text('You promise, talking to yourself as much as to him: "I won\'t, I\'ve learned my lesson."');
    scene.text('You quickly gather your things and get dressed, eager to leave this place before he can change his mind.');
    if (((st as any).pcs_vag ?? 0) < ((st as any).dick ?? 0)) {
      qspCall(st, 'arousal_funcs', 'stretch', 'vaginal');
    }
    (st as any).flag_rape_1 = 2;
    qspCall(st, 'mood', 'raise', 'small');
    if (((st as any).dick ?? 0) - ((st as any).pcs_vag ?? 0) > 8) {
      (st as any).vgape = 2;
    }
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'outfit', 'wear_last_worn');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave the apartment', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
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
  (s as any).locM_arg = ((s as any).locArgs?.[0] ?? 0);
  (s as any).location_type = 'event';
  qspCall(s, 'stat', '');
  qspCall(s, 'npcgeneratec', '', 0, 'Guy from the park', (Math.floor(Math.random() * 18) + 18));
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'a');
  if (((s as any).npcID ?? 0) !== '') {
    qspCall(s, 'npcStat', '', ((s as any).npcID ?? 0), 'b');
  }
  (s as any).dick1 = 0;
  if (((s as any).frost ?? 0) > 0) {
    (s as any).frost = 0;
  }
  const arg = s.locArg;
  switch (arg) {
    case 'din_dush':
      enterDinDush(s, scene);
      break;
    case 'din_analPlugIn_off':
      enterDinAnalPlugInOff(s, scene);
      break;
    case 'meet':
      enterMeet(s, scene);
      break;
    case 'vodka':
      enterVodka(s, scene);
      break;
    case 'piano':
      enterPiano(s, scene);
      break;
    case 'game':
      enterGame(s, scene);
      break;
    case 'vodka2':
      enterVodka2(s, scene);
      break;
    case 'twister':
      enterTwister(s, scene);
      break;
    case 'cards':
      enterCards(s, scene);
      break;
    case 'card_sex':
      enterCardSex(s, scene);
      break;
    case 'card_stript':
      enterCardStript(s, scene);
      break;
    case 'card_win':
      enterCardWin(s, scene);
      break;
    case 'stay_in_bed':
      enterStayInBed(s, scene);
      break;
    case 'sleep_sex':
      enterSleepSex(s, scene);
      break;
    case 'breakfast_sex':
      enterBreakfastSex(s, scene);
      break;
    case 'breakfast':
      enterBreakfast(s, scene);
      break;
    case 'stay':
      enterStay(s, scene);
      break;
    case 'sleep':
      enterSleep(s, scene);
      break;
    case 'rape':
      enterRape(s, scene);
      break;
    case 'rape_end':
      enterRapeEnd(s, scene);
      break;
    case 'sitting_park_bench':
      enterSittingParkBench(s, scene);
      break;
    case 'sleeping_park_bench':
      enterSleepingParkBench(s, scene);
      break;
    case 'sleeping_park_alco_rape':
      enterSleepingParkAlcoRape(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const placer_sex: LocationDef = {
  name: 'placer_sex',
  title: '<br>Your deodorant gets washed away in the shower.',
  region: 'other',
  locationType: 'public_outdoors',
  enter: enter,
};
