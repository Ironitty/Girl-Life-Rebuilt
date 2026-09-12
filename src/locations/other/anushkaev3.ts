import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGetpleasured(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A144');
  if (!(s as any).npc_had_sex) (s as any).npc_had_sex = {}; (s as any).npc_had_sex['A144'] = 1;
  scene.text('<center><b>Anushka\'s Room</b></center>');
  scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/caughtmast/les3.jpg');
  scene.text('After a bit of heated kissing and fondling while exploring each other\'s naked bodies, you lie back on the bed and spread your legs. You place your hand on top of her head and gently guide her face toward your pussy. She really doesn\'t need any encouragement and dives straight in. She gives your pussy one long lick from taint to clit and then starts flicking your clit with her tongue, switching to sucking and giving it a quick nibble now and then, before plunging her tongue deep between your wet pussy lips.');
  qspCall(s, 'arousal', 'cuni', 3, 'lesbian');
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  qspCall(s, 'stat', '');
  if (((s as any).anushkaQW ?? 0)?.['strapon'] === 1) {
    scene.actions([
      { label: 'Get her strapon out of the nightstand', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/strapon.jpg');
    scene.text('You slap her on the ass and slide out from under her. She gives you a curious look as you scoot over to her nightstand. You open it, reach inside and pull out her strap-on and lube. Her eyes grow a little wide and she bites her lower lip. "How about we take turns fucking each other with this?" you ask her teasingly.');
    scene.text('She grins. "Sounds good to me, but who gets fucked first?"');
    scene.text('You crawl back across the bed to her. "Well it was my idea, so it\'s only fair that I get to fuck you first," you reply.');
    scene.actions([
      { label: 'Use the strap-on on her', goto: ['anushkaev3', 'bedstrapongive'] },
    ]);
  } },
      { label: 'Get her buttplug out of the nightstand', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/buttplug.jpg');
    scene.text('You slap her on the ass and slide out from under her. She gives you a curious look as you scoot over to her nightstand. You open it, reach inside and pull out her butt plug and lube. Her eyes grow a little wide and she bites her lower lip. "I\'m going to stick this up your ass." you tell her as you crawl back across the bed to her.');
    scene.actions([
      { label: 'Use the butt plug on her', goto: ['anushkaev3', 'buttplug1'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Lick her pussy', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/caughtmast/les4.jpg');
    scene.text('You completely lose track of time as she eats you out; she either has a lot of natural talent or has had a lot of practice, because she is amazing at it. You feel yourself getting very close to the edge and apparently, she notices as well, because she suddenly stops. You\'re only disappointed for a moment however, as she scoots upwards and immediately straddles your face. With her pussy right over your face, you can see she is already sopping wet. You decide to tease her a little, giving her pussy a few soft kisses at first before licking her slowly and gently, driving her mad with just a few light touches.');
    scene.text('This is apparently too much for her as she lowers herself and starts to grind her dripping pussy against your face. You give up your teasing and quickly plunge your tongue into her pussy, giving her what she wants; pleasuring her, like she just pleasured you.');
    qspCall(s, 'arousal', 'cuni_give', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: '69', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/caughtmast/les5.jpg');
    scene.text('You can hear her starting to breathe heavier and moan louder and are about to suggest switching again, but she apparently had the same idea. She climbs off you before turning around and straddling your face again while getting down on her hands and knees so she can 69 with you.');
    scene.text('As soon as you feel her tongue flicking against your clit, you lift your head up slightly and begin licking her pussy again as well. Her tongue is absolutely magical and it doesn\'t take that long until your body is rocked by a furious orgasm. Your orgasm apparently sets her off as well and her own pussy juice start flowing, coating your face as her own orgasm hits her.');
    qspCall(s, 'arousal', 'cuni_give', (-10), 'lesbian');
    qspCall(s, 'arousal', 'cuni', 10, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Afterglow', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/caughtmast/les6.jpg');
    scene.text('With both of you spent, Anushka rolls herself off you and the two of you lie side by side for several minutes while you catch your breath. "Maybe we should get dressed before someone walks in? I\'d hate if your brother saw me like this…" you quietly suggest.');
    scene.text('She nods. "Yeah, you\'re right." As you both start to get up, she reaches over and pulls you in close to her and looks deeply into your eyes. The shared look is only broken by occasional quick but soft kisses from her before she gives you one more long and soft kiss with a hint of passion that leaves you breathless before she pulls away.');
    scene.text('On that high note, she gets out of bed and starts getting dressed. You soon do the same and you\'re both soon fully dressed again.');
    qspCall(s, 'arousal', 'foreplay', (-2), 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['$returnLoc', 'anushroom'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterButtplug(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'npc_relationship', 'modify', 'A144', 'like');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Anushka\'s Room</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/buttplug.jpg');
  if (((s as any).pcs_hotcat ?? 0) >= 6  &&  ((s as any).npc_had_sex ?? 0)?.['A144']) {
    scene.text('You pull out the butt plug and hold it up. "Yeah, I like this."');
    scene.text('Her eyes widen ever so slightly. "Just what do you plan to do with that?"');
    scene.text('You grin at her. "I was planning on sticking it up your ass."');
    scene.text('She bites her lower lip, obviously turned on by the idea. "Is that so?"');
    scene.text('You nod at her and put on your best attempt at a demanding voice. "Yeah it is. Now take off your clothes like a good little slut." She only hesitates for a moment before she starts stripping and is soon completely naked. You strip as well and once you\'re naked, you crawl across the bed next to her.');
    scene.actions([
      { label: 'Use the butt plug on her', goto: ['anushkaev3', 'buttplug1'] },
    ]);
  } else {
    scene.text('You pull out the butt plug and hold it up. "Yeah, I like this."');
    scene.text('She laughs, walks over and takes it from you before putting it back in the drawer and closing it. "Well maybe you should buy one then, huh?"');
    scene.text('A little disappointed she doesn\'t want to play, you just nod. "Yeah, I guess I should…"');
    scene.actions([
      { label: 'Look around some more.', goto: ['$returnLoc', 'anushroom'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterButtplug1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A144');
  if (!(s as any).npc_had_sex) (s as any).npc_had_sex = {}; (s as any).npc_had_sex['A144'] = 1;
  if (!(s as any).anushkaQW) (s as any).anushkaQW = {}; (s as any).anushkaQW['strapon'] = 1;
  if (!(s as any).anushkaQW) (s as any).anushkaQW = {}; (s as any).anushkaQW['dom_nush'] = ((s as any).anushkaQW['dom_nush'] ?? 0) + (1);
  scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/buttplug1.jpg');
  scene.text('"Turn around and bend over." you demand and she does as you ask. You squirt some lube on her asshole and work it around until it\'s lubed up, then squirt some lube onto the butt plug and coat it nicely until it is nice and slick. You kneel next to her and spread her ass while you hold up the butt plug, checking to make sure it\'s lubed properly. When you notice her looking back over her shoulder at you, you tell her. "That\'s right I\'m going to shove this thing right up your ass and work it until you\'re nice and loose like the butt slut you are."');
  qspCall(s, 'arousal', 'foreplay', 3, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Stick the butt plug inside', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/buttplug2.jpg');
    scene.text('Even with the lube, there\'s a bit of resistance as you slide the butt plug into her asshole. The tip goes in easy enough, but as you push it in deeper and the plug widens out, it starts taking a bit more force to push. At it\'s widest point, she inhales sharply and the plug suddenly pops firmly into her ass, causing her to gasp and moan a little.');
    qspCall(s, 'arousal', 'anal_dildo_give', 3, 'lesbian', 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Spank her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/buttplug3.jpg');
    scene.text('With the plug firmly in her ass, you let go of it, grab her ass cheeks in your hands and spread them wide. She starts to rub her clit as you give her ass a smack with one hand and then the other. You alternate spanking her with each hand, causing her to moan loudly as she continues rubbing her clit.');
    qspCall(s, 'arousal', 'foreplay', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Play with the plug', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/buttplug4.jpg');
    scene.text('You stop spanking her and grab hold of the plug, pulling on it. She continues to rub her clit as you play with the plug. You pull it almost to it\'s widest point out of her and then let go, watching it disappear back up her asshole. Each time you do it, she moans a little louder. After a few minutes of this, it\'s a little easier to pull it out as her asshole loosens up.');
    qspCall(s, 'arousal', 'anal_dildo_give', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Fuck her with the plug', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/buttplug5.jpg');
    scene.text('She keeps rubbing her clit and moaning as you pull the plug out past the widest point until only the tip is left inside before you shove it all the back in. You keep repeating this, fucking her ass with the butt plug.');
    qspCall(s, 'arousal', 'anal_dildo_give', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep fucking her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/buttplug6.jpg');
    scene.text('She starts rubbing her clit faster and moaning louder. You fuck her ass with the butt plug several more times until she finally cries out in orgasm and her whole body shakes. Once it passes, you pull the plug completely out of her, her asshole gaping widely.');
    qspCall(s, 'arousal', 'anal_dildo_give', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/naked_kiss.jpg');
    scene.text('"That was fun. I enjoyed that and I know you did," you tell her teasingly.');
    scene.text('She laughs. "Yeah, I did." You place the butt plug on her nightstand and as you turn back to face her, she reaches over, pulls you in close to her and looks deeply into your eyes.');
    scene.text('The shared look is only broken by occasional quick but soft kisses from her before she gives you one more long and soft kiss with a hint of passion that leaves you breathless before she pulls away.');
    scene.text('On that high note, she gets out of bed and starts getting dressed. You soon do the same and you\'re both soon fully dressed again.');
    qspCall(s, 'arousal', 'foreplay', 2, 'lesbian');
    (s as any).minut = ((s as any).minut ?? 0) + 8;
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['$returnLoc', 'anushroom'] },
    ]);
  } },
      { label: 'Get her strap-on out of the nightstand', handler: (st: GameState) => {
    if (!(s as any).anushkaQW) (s as any).anushkaQW = {}; (s as any).anushkaQW['dom_nush'] = ((s as any).anushkaQW['dom_nush'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/getstrapon.jpg');
    scene.text('You slap her on the ass and place the butt plug on her nightstand. As she gets back up on her knees and faces you, you reach inside and pull out her strap-on before holding it up. Her eyes grow a little wide and she bites her lower lip. "Now I\'m going to fuck you with this," you tell her.');
    scene.actions([
      { label: 'Use the strap-on on her', goto: ['anushkaev3', 'bedstrapongive'] },
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

function enterBedstrapongive(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A144');
  if (!(s as any).npc_had_sex) (s as any).npc_had_sex = {}; (s as any).npc_had_sex['A144'] = 1;
  scene.text('<center><b>Anushka\'s Room</b></center>');
  scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/getstrapon.jpg');
  scene.text('You hold the dildo up and her eyes drift towards it with a hungry lust. "That\'s right slut, I\'m going to fuck you with this and make you my bitch!" you tell her in a teasing tone.');
  scene.text('She smirks at you. "Promises, promises…"');
  scene.text('You laugh and start putting the harness on. She helps you get it into place and you pull on the straps. "So how should I fuck you? Maybe I should fuck your pussy first? Or maybe I should just go straight to that cute little ass?" you ask her rhetorically. She doesn\'t respond and seems to be fine with either idea.');
  qspCall(s, 'arousal', 'foreplay', 3, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Straight to the ass', goto: ['anushkaev3', 'bedstrapongiveanal'] },
    { label: 'Fuck her pussy', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'D3');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapnush4.jpg');
    // TODO-QSP: dynamic text: You decide to fuck her pussy. You lie on your back and pull her towards you. She...
    scene.text(`You decide to fuck her pussy. You lie on your back and pull her towards you. She quickly straddles you, reaches between her legs and takes hold of the dildo. She slowly lowers herself down onto it and you watch as her pussy engulfs the ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dildo, causing her to moan in pleasure as she does. She removes her hand once it's inside her and starts to rock back and forth. "That right bitch, take my dick!" you tell her and she grins widely.`);
    qspCall(s, 'arousal', 'vaginal_strap_give', 5, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Ride it cowgirl', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapnush5.jpg');
    scene.text('You smack her on the ass as she rides you. "Yeah, that\'s right! Ride my dick like the slut you are!" you tell her in a teasing tone. She\'s moaning so loudly that you don\'t even think she heard your comment. A few more minutes go by before she cries out in orgasm and you can feel her wetness running down onto your thighs. She almost collapses on you, breathing hard, and you have to help her get off you.');
    qspCall(s, 'arousal', 'vaginal_strap_give', 5, 'lesbian');
    qspCall(s, 'stat', '');
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.actions([
        { label: 'Have her fuck you now', goto: ['anushkaev3', 'bedstraponget'] },
      ]);
    }
    scene.actions([
      { label: 'Have her fuck your ass now', goto: ['anushkaev3', 'bedstrapongetanal'] },
      { label: 'Fuck her ass now', goto: ['anushkaev3', 'bedstrapongiveanal'] },
      { label: 'Finish', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/naked_kiss.jpg');
    scene.text('"That was fun. I enjoyed that and I know you did," you tell her teasingly.');
    scene.text('She laughs. "Yeah, I did." You take the harness off and place it on her nightstand. As you turn back to face her, she reaches over, pulls you in close to her and looks deeply into your eyes.');
    scene.text('The shared look is only broken by occasional quick but soft kisses from her before she gives you one more long and soft kiss with a hint of passion that leaves you breathless before she pulls away.');
    scene.text('On that high note, she gets out of bed and starts getting dressed. You soon do the same and you\'re both soon fully dressed again.');
    qspCall(s, 'arousal', 'foreplay', 2, 'lesbian');
    (s as any).minut = ((s as any).minut ?? 0) + 8;
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['$returnLoc', 'anushroom'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBedstraponget(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A144');
  qspCall(s, 'boyStat', 'D3');
  if (!(s as any).npc_had_sex) (s as any).npc_had_sex = {}; (s as any).npc_had_sex['A144'] = 1;
  scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapme7.jpg');
  scene.text('You take the harness off and hand it over to her. "Okay, my turn."');
  scene.text('She smiles at you. "I\'m going to fuck you like a whore."');
  // TODO-QSP: dynamic text: You laugh and help her get into the harness. Once she has the harness firmly in ...
  scene.text(`You laugh and help her get into the harness. Once she has the harness firmly in place, she pushes you down onto your back. "Spread your legs," she commands and you do as she says before she scoots up between your legs and rubs the tip of the dildo against your wet slit. Once she's sure you're wet enough, she slides the ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dildo into your pussy, slowly working it in and steadily starting to fuck you with it.`);
  qspCall(s, 'arousal', 'vaginal_strap', 2, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapme7.jpg');
    scene.text('She steadily works it deeper into you until she\'s thrusting as deep as she can, causing you to moan in pleasure as you feel her fill you completely. Several blissful minutes pass before she suddenly pulls out of you. "Roll over. I want to fuck your ass."');
    qspCall(s, 'arousal', 'vaginal_strap', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Only my pussy', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapme8.jpg');
    scene.text('You shake your head. "I don\'t want to be fucked in the ass. Just keep fucking my pussy."');
    scene.text('She growls a little. "Okay fine, but next time I\'m going to pound that ass of yours." She then shoves the dildo back in your pussy and starts hammering you hard and deep.');
    qspCall(s, 'arousal', 'vaginal_strap', 3, 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/naked_kiss.jpg');
    scene.text('She pulls out of you and starts taking the harness off before setting it aside and grinning at you. "Well, I take it you enjoyed that?"');
    scene.text('You nod breathlessly. "Yeah, that was amazing. You would\'ve made a great guy." you tell her and you both laugh at your comment. As you turn back to face her, she reaches over, pulls you in close to her and looks deeply into your eyes.');
    scene.text('The shared look is only broken by occasional quick but soft kisses from her before she gives you one more long and soft kiss with a hint of passion that leaves you breathless before she pulls away.');
    scene.text('On that high note, she gets out of bed and starts getting dressed. You soon do the same and you\'re both soon fully dressed again.');
    qspCall(s, 'arousal', 'foreplay', 2, 'lesbian');
    (s as any).minut = ((s as any).minut ?? 0) + 8;
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['$returnLoc', 'anushroom'] },
    ]);
  } },
    ]);
  } },
      { label: 'Roll over', handler: (st: GameState) => {
    if (!(s as any).anushkaQW) (s as any).anushkaQW = {}; (s as any).anushkaQW['dom_nush'] = ((s as any).anushkaQW['dom_nush'] ?? 0) - (1);
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapme9.jpg');
    scene.text('You roll over onto your hands and knees and wiggle your ass at her. You look back to see her squirting some lube onto the shaft of the dildo before she rubs some lube onto your asshole until it is nice and slick as well. "That\'s right slut, give me that ass!" she says as she scoots up behind you and you feel the tip of the dildo rubbing against your asshole, followed by pressure until it finally pops into your ass. You groan slightly in pain and she stops to let you get adjust to it before she slowly starts ass fucking you. The more you moan, the deeper and faster she starts to fuck you.');
    qspCall(s, 'arousal', 'anal_strap', 3, 'lesbian', 'lube');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get butt fucked', handler: (st: GameState) => {
    if (!(s as any).anushkaQW) (s as any).anushkaQW = {}; (s as any).anushkaQW['dom_nush'] = ((s as any).anushkaQW['dom_nush'] ?? 0) - (1);
    qspCall(s, 'boyStat', 'D3');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapme10.jpg');
    scene.text('"Listen to you moan like a whore! You love my cock in your ass, don\'t you whore?" she teases and slaps your ass.');
    scene.text('"Yes, I love it! Fuck my ass harder!" you moan in reply.');
    scene.text('In response, she slams the dildo balls deep into your ass and starts hammering away. You feel your arousal slowly growing.');
    qspCall(s, 'arousal', 'anal_strap', 3, 'lesbian', 'rough', 'sub', 'lube');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/naked_kiss.jpg');
    scene.text('She pulls out of you and starts taking the harness off before setting it aside and grinning. "Well, I take it you enjoyed that?"');
    scene.text('You nod breathlessly. "Yeah, it was amazing. You would\'ve made a great guy," you tell her and you both laugh at your comment. As you turn back to face her, she reaches over, pulls you in close to her and looks deeply into your eyes.');
    scene.text('The shared look is only broken by occasional quick but soft kisses from her before she gives you one more long and soft kiss with a hint of passion that leaves you breathless before she pulls away.');
    scene.text('On that high note, she gets out of bed and starts getting dressed. You soon do the same and you\'re both soon fully dressed again.');
    qspCall(s, 'arousal', 'foreplay', 2, 'lesbian');
    (s as any).minut = ((s as any).minut ?? 0) + 8;
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['$returnLoc', 'anushroom'] },
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

function enterBedstrapongetanal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A144');
  qspCall(s, 'boyStat', 'D3');
  if (!(s as any).npc_had_sex) (s as any).npc_had_sex = {}; (s as any).npc_had_sex['A144'] = 1;
  scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapme9.jpg');
  scene.text('You take the harness off and hand it over to her. "Okay, my turn."');
  scene.text('She smiles at you. "I\'m going to fuck you like a whore."');
  scene.text('You laugh and help her get into the harness. "Can you just fuck my ass?" you ask her without really asking. She nods ever so slightly and grins at the request.');
  scene.text('Once she has the harness firmly in place, she pushes you down on your stomach. "Spread your ass cheeks," she commands and you do as she says.');
  scene.text('You look back to see her squirting some lube onto the shaft of the dildo before she rubs some lube onto your asshole as well. "That\'s right slut, give me that ass!" she says as she scoots up behind you and you feel the tip of the dildo rubbing against your asshole, followed by pressure until it finally pops into your ass.');
  scene.text('You groan slightly in pain and she stops to let you adjust to it before she slowly starts ass fucking you. The more you moan, the deeper and faster she starts to fuck you.');
  if (!(s as any).anushkaQW) (s as any).anushkaQW = {}; (s as any).anushkaQW['dom_nush'] = ((s as any).anushkaQW['dom_nush'] ?? 0) - (1);
  qspCall(s, 'arousal', 'anal_strap', 3, 'lesbian', 'lube');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get butt fucked', handler: (st: GameState) => {
    if (!(s as any).anushkaQW) (s as any).anushkaQW = {}; (s as any).anushkaQW['dom_nush'] = ((s as any).anushkaQW['dom_nush'] ?? 0) - (1);
    qspCall(s, 'boyStat', 'D3');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapme10.jpg');
    scene.text('"Listen to you moan like a whore! You love my cock in your ass, don\'t you whore?" she teases and slaps your ass.');
    scene.text('"Yes, I love it! Fuck my ass harder!" you moan in reply.');
    scene.text('In response, she slams the dildo balls deep into your ass and starts hammering away. You feel your arousal slowly growing.');
    qspCall(s, 'arousal', 'anal_strap', 3, 'lesbian', 'rough', 'sub');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/naked_kiss.jpg');
    scene.text('She pulls out of you and starts taking the harness off before setting it aside and grinning. "Well, I take it you enjoyed that?"');
    scene.text('You nod breathlessly. "Yeah, it was amazing. You would\'ve made a great guy," you tell her and you both laugh at your comment. As you turn back to face her, she reaches over, pulls you in close to her and looks deeply into your eyes.');
    scene.text('The shared look is only broken by occasional quick but soft kisses from her before she gives you one more long and soft kiss with a hint of passion that leaves you breathless before she pulls away.');
    scene.text('On that high note, she gets out of bed and starts getting dressed. You soon do the same and you are both soon fully dressed again.');
    qspCall(s, 'arousal', 'foreplay', 2, 'lesbian');
    (s as any).minut = ((s as any).minut ?? 0) + 8;
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['$returnLoc', 'anushroom'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBedstrapongiveanal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A144');
  if (!(s as any).npc_had_sex) (s as any).npc_had_sex = {}; (s as any).npc_had_sex['A144'] = 1;
  scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapdomnush8.jpg');
  scene.text('You smack her on the ass. "Turn around and get on your hands and knees bitch! I\'m going to fuck that ass like the dirty anal whore you are!" you demand.');
  scene.text('She turns around and gets down on her hands and knees, wiggling her ass at you as she giggles. Grabbing some lube, you make sure the dildo is well lubricated before you scoot up behind her and slide it into her ass. It slides in fairly easily, causing her to moan in ecstasy as you do.');
  scene.text('You place your hand on her hip, but she doesn\'t seem to be pulling away at all. "Oh god yes, fuck my ass! Please fuck my ass!" she begs you.');
  qspCall(s, 'arousal', 'anal_strap_give', 3, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Rip her ass up', handler: (st: GameState) => {
    if (!(s as any).anushkaQW) (s as any).anushkaQW = {}; (s as any).anushkaQW['dom_nush'] = ((s as any).anushkaQW['dom_nush'] ?? 0) + (1);
    qspCall(s, 'boyStat', 'D3');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/strapdomnush6.jpg');
    // TODO-QSP: dynamic text: You grab onto her hips with both hands and slam the <<dick>>cm <<$dick_girth>> d...
    scene.text(`You grab onto her hips with both hands and slam the ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dildo balls deep into her ass. She cries out in a mix of pain and pleasure, her moans rapidly start getting louder and louder. "Yes, yes! Harder!" You pull the dildo almost all the way out of her before slamming the full length back in, giving her the hardest, deepest and fastest anal pounding you can.`);
    scene.text('She suddenly starts crying out and shaking as her whole body is rocked by an intense orgasm, but you keep pounding away at her ass through the whole thing. Just as it seems she\'s spent, her body is wracked by another orgasm. After several more rapid fire orgasms, she is spent and slowly sinks onto the bed until she\'s lying on her stomach.');
    scene.text('You ride her all the way down, still fucking her ass. Even once the last orgasm passes and she seems completely spent, you keep hammering away at her ass, just to show her who\'s boss. Finally tiring yourself out, you stop and pull out of her.');
    qspCall(s, 'arousal', 'anal_strap_give', 3, 'lesbian', 'rough', 'dom');
    qspCall(s, 'stat', '');
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.actions([
        { label: 'Have her fuck you now', goto: ['anushkaev3', 'bedstraponget'] },
      ]);
    }
    scene.actions([
      { label: 'Have her fuck your ass now', goto: ['anushkaev3', 'bedstrapongetanal'] },
      { label: 'Finish', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/naked_kiss.jpg');
    scene.text('"That was fun. I enjoyed that and I know you did," you tell her teasingly.');
    scene.text('She laughs. "Yeah, I did." You take the harness off and place it on her nightstand. As you turn back to face her, she reaches over, pulls you in close to her and looks deeply into your eyes.');
    scene.text('The shared look is only broken by occasional quick but soft kisses from her before she gives you one more long and soft kiss with a hint of passion that leaves you breathless before she pulls away.');
    scene.text('On that high note, she gets out of bed and starts getting dressed. You soon do the same and you are both soon fully dressed again.');
    qspCall(s, 'arousal', 'foreplay', 2, 'lesbian');
    (s as any).minut = ((s as any).minut ?? 0) + 8;
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed', goto: ['$returnLoc', 'anushroom'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBedroomLesbian(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).anushkaQW) (s as any).anushkaQW = {}; (s as any).anushkaQW['sveta_love'] = ((s as any).anushkaQW['sveta_love'] ?? 0) + (1);
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'npcStat', 'A144');
  scene.text('<center><b>Anushka\'s Room</b></center>');
  scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/disco_bedroom1.jpg');
  scene.text('You walk back to Anushka\'s apartment from the disco together, chatting the whole way about a variety of stuff. She gets a little hands on at times along the way, grabbing and pushing you against a wall to deeply kiss you while her hand rubs your crotch. You\'re interrupted by someone walking by and scoffing at your actions, which only makes you both giggle and hurry the rest of the way to her apartment. Once there, you quickly make it to her room and sit on her bed.');
  if (!(s as any).npc_had_sex) (s as any).npc_had_sex = {}; (s as any).npc_had_sex['A144'] = 1;
  qspCall(s, 'arousal', 'kiss', 1, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Undress', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/disco_bedroom2.jpg');
    scene.text('Not wasting any time, you start making out and feeling each other up as you undress each other in a flood of uncontrollable lust. Getting undressed takes longer than normal despite the help, since both of you are hindering as much as helping each other.');
    qspCall(s, 'arousal', 'foreplay', 2, 'lesbian');
    qspCall(s, 'arousal', 'kiss', (-2), 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Climb on top of her', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/disco_bedroom3.jpg');
    scene.text('In the throes of passion, you push her forward and crawl on top of her. The two of you passionately kiss for a while as your hands roam over each other\'s bodies.');
    qspCall(s, 'arousal', 'kiss', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish undressing', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/disco_bedroom4.jpg');
    scene.text('As you finish undressing each other, she flips you over onto your back and pushes your legs apart before crawling between them. She starts rubbing your clit before inserting a finger inside you and fingering you, shortly followed by a second finger.');
    qspCall(s, 'arousal', 'vaginal_finger', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Lay back', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/disco_bedroom5.jpg');
    scene.text('You relax and enjoy being fingered. After a few minutes, she starts licking at your clit and eating you out. Her tongue slides inside you as well and she starts to tongue fuck you.');
    qspCall(s, 'arousal', 'cuni', 3, 'lesbian');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Lay back and enjoy', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/disco_bedroom6.jpg');
    scene.text('She moves her focus back to your clit, changing her speed and motions based on your moans. She\'s very talented and seems very attuned to what pleasures you. After several minutes, you feel you should return the favor. You gently push her away from you as you get off your back and decide what to do.');
    qspCall(s, 'arousal', 'cuni', 3, 'lesbian');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finger her', goto: ['anushkaev3', 'bedroom_lesbian_finger'] },
      { label: 'Spank her', goto: ['anushkaev3', 'bedroom_lesbian_spank'] },
      { label: 'Eat her', goto: ['anushkaev3', 'bedroom_lesbian_eatnush'] },
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

function enterBedroomLesbianFinger(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A144');
  scene.text('<center><b>Anushka\'s Room</b></center>');
  scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/disco_bedroom7.jpg');
  scene.text('You push her onto her back and spread her legs wide before running your hand down her inner thighs until you reach her soaking wet pussy. Your fingers slide into her easily, causing her to moan softly as you slowly start fingerbanging her. After a few minutes, you pull your wet finger out of her and raise it up to her mouth. She opens her mouth and sucks your finger, tasting herself. Pulling your finger out of her mouth, you gently slap her on the hip. You tell her to roll over and get her on her knees while keeping her face against the bed.');
  qspCall(s, 'arousal', 'vaginal_finger_give', 2, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Spank her', goto: ['anushkaev3', 'bedroom_lesbian_spank'] },
    { label: 'Eat her', goto: ['anushkaev3', 'bedroom_lesbian_eatnush'] },
  ]);
  scene.build();
}

function enterBedroomLesbianSpank(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A144');
  scene.text('<center><b>Anushka\'s Room</b></center>');
  scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/disco_bedroom8.jpg');
  scene.text('With her ass presented to you like this, you can\'t help yourself. You give her ass a smack, causing her to yelp and moan before you proceed to spank her until her ass is red.');
  qspCall(s, 'arousal', 'foreplay_give', 1, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Eat her', goto: ['anushkaev3', 'bedroom_lesbian_eatnush'] },
  ]);
  scene.build();
}

function enterBedroomLesbianEatnush(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A144');
  scene.text('<center><b>Anushka\'s Room</b></center>');
  scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/disco_bedroom9.jpg');
  scene.text('You move in behind her and place your face between her ass cheeks as you start licking her pussy from behind. Her soft moans slowly grow louder as you keep licking at her pussy while occasionally smacking her ass, which makes her yelp and moan even louder.');
  qspCall(s, 'arousal', 'cuni_give', 3, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Lick her pussy', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/disco_bedroom10.jpg');
    scene.text('As you eat her out, she starts grinding back against your face and her breathing becomes quicker, as does her moaning. You can tell she\'s close to reaching orgasm. Your face is pushed against her crotch as she cries out and feel her shaking as an orgasm rocks her body. She falls on her side as her orgasm passes before rolling back onto her back and panting with a huge grin on her face.');
    qspCall(s, 'arousal', 'cuni_give', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Sit on her face', goto: ['anushkaev3', 'bedroom_lesbian_facesit'] },
      { label: 'Scissor her', goto: ['anushkaev3', 'bedroom_lesbian_scissor'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterBedroomLesbianFacesit(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A144');
  scene.text('<center><b>Anushka\'s Room</b></center>');
  scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/disco_bedroom11.jpg');
  scene.text('Seeing her laying on her back, you crawl over and sit on her face. She eagerly laps at your pussy as you sit on her face and her hands slide up your body and start massaging and squeezing your breasts. You love the sensation of her tongue as it works all over your clit and slit.');
  qspCall(s, 'arousal', 'cuni', 3, 'lesbian');
  qspCall(s, 'arousal', 'massage', (-3), 'lesbian');
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Scissor her', goto: ['anushkaev3', 'bedroom_lesbian_scissor'] },
    { label: 'Finish', goto: ['anushkaev3', 'bedroom_lesbian_finish'] },
    { label: 'Grind on her face', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/disco_bedroom12.jpg');
    scene.text('You start rocking your hips, grinding your pussy against her face as she continues to eat you out and massage your breasts. You can\'t help but moan louder and louder as the pleasure builds up.');
    qspCall(s, 'arousal', 'cuni', 3, 'lesbian');
    qspCall(s, 'arousal', 'massage', (-3), 'lesbian');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Scissor her', goto: ['anushkaev3', 'bedroom_lesbian_scissor'] },
      { label: 'Finish', goto: ['anushkaev3', 'bedroom_lesbian_finish'] },
      { label: 'Keep grinding on her face', handler: (st: GameState) => {
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/disco_bedroom13.jpg');
    scene.text('You start grinding your crotch against her face as your wetness builds, yet she never slows or stops working your clit with her tongue or squeezing your breasts until you finally have enough and crawl off her face.');
    qspCall(s, 'arousal', 'cuni', 3, 'lesbian');
    qspCall(s, 'arousal', 'massage', (-3), 'lesbian');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Scissor her', goto: ['anushkaev3', 'bedroom_lesbian_scissor'] },
      { label: 'Finish', goto: ['anushkaev3', 'bedroom_lesbian_finish'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBedroomLesbianScissor(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A144');
  scene.text('<center><b>Anushka\'s Room</b></center>');
  scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/disco_bedroom14.jpg');
  scene.text('You crawl between her legs, slipping one of your legs over her and the other under one of her legs until your clits are rubbing together. You start rubbing yourself against her, causing you both to moan loudly. After a few minutes of this, she cries out again with a second orgasm. Feeling a little worn down, you disentangle yourself from her.');
  qspCall(s, 'arousal', 'trib', 2, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', goto: ['anushkaev3', 'bedroom_lesbian_finish'] },
  ]);
  scene.build();
}

function enterBedroomLesbianFinish(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A144');
  scene.text('<center><b>Anushka\'s Room</b></center>');
  scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/disco_bedroom15.jpg');
  scene.text('As you move away from her, she suddenly grabs you and pulls you over her so you\'re laying across her. You feel a sharp sting as she smacks your ass fairly hard, followed by several more spanks. Yelping, you try and pull away as she tries to hold you in place and spank you, but she starts laughing and you manage to break free.');
  qspCall(s, 'arousal', 'foreplay', 1, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Afterglow', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.text('<center><b>Anushka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/disco_bedroom16.jpg');
    scene.text('You move over to kiss her and the two of you passionately kiss for a few minutes before breaking it. You fall onto the bed beside her and you both bask in the afterglow for several minutes before you glance over and notice the time. You roll off the bed and start getting dressed while she digs into her nightstand to pull out a joint and light it up. She lays on her side smoking the joint as she watches you get dressed. "Anyone tell you that you\'ve got a nice ass?"');
    scene.text('You shake your head and laugh a little as you finish dressing. "Yeah, sometimes."');
    scene.text('She takes another drag of the joint and holds it before responding, giving you time to finish dressing. "Not as nice as mine mind you, but still nice." she says with a smirk.');
    scene.text('You grab one of her her pillows and hit her with it. "Bitch!"');
    scene.text('She rolls away from you. "Slut!" she responds.');
    scene.text('You both giggle as you put your shoes on. "I need to get going. Talk to you later."');
    scene.text('She gives you an absent wave. "Later, dyke." she replies before taking another hit of her joint. You just smile and shake your head as you walk out of her room and head outside.');
    qspCall(s, 'arousal', 'kiss', 1, 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go home', handler: (st: GameState) => {
    qspCall(st, 'homes_properties', 'go_straight_home');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'getpleasured':
      enterGetpleasured(s, scene);
      break;
    case 'buttplug':
      enterButtplug(s, scene);
      break;
    case 'buttplug1':
      enterButtplug1(s, scene);
      break;
    case 'bedstrapongive':
      enterBedstrapongive(s, scene);
      break;
    case 'bedstraponget':
      enterBedstraponget(s, scene);
      break;
    case 'bedstrapongetanal':
      enterBedstrapongetanal(s, scene);
      break;
    case 'bedstrapongiveanal':
      enterBedstrapongiveanal(s, scene);
      break;
    case 'bedroom_lesbian':
      enterBedroomLesbian(s, scene);
      break;
    case 'bedroom_lesbian_finger':
      enterBedroomLesbianFinger(s, scene);
      break;
    case 'bedroom_lesbian_spank':
      enterBedroomLesbianSpank(s, scene);
      break;
    case 'bedroom_lesbian_eatnush':
      enterBedroomLesbianEatnush(s, scene);
      break;
    case 'bedroom_lesbian_facesit':
      enterBedroomLesbianFacesit(s, scene);
      break;
    case 'bedroom_lesbian_scissor':
      enterBedroomLesbianScissor(s, scene);
      break;
    case 'bedroom_lesbian_finish':
      enterBedroomLesbianFinish(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const anushkaev3: LocationDef = {
  name: 'anushkaev3',
  title: 'Anushka\'s Room',
  region: 'other',
  enter: enter,
};
