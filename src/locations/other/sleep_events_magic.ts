// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDreamSexAnya(s: GameState, scene: SceneBuilder): void {
  ((s as any).tgQW ?? {})['dream_sex_anya'] = 1;
  scene.img('images/locations/pavlovsk/resident/apartment/home/bedrpar.jpg');
  scene.text('You awaken in your bedroom, but something feels… different. You glance over and see Anya snoozing away in her bed when you suddenly feel a tingling sensation pulse through you and pull back the covers to discover that you\'ve turned back to your old self, your cock hanging between your legs once more. It\'s at this point you realize that you\'re naked with Anya next to you!');
  // TODO-QSP: dynamic text: "Is <<$pcs_nickname>> finally gone?"
  scene.text(`"Is ${((s as any).pcs_nickname ?? 0)} finally gone?"`);
  scene.text('Surprised, you quickly pull the covers back over yourself and turn to see an equally naked Anya smiling at you, somehow having awoken without you noticing.');
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>? Gone? What?" you stutter.
  scene.text(`"${((s as any).pcs_nickname ?? 0)}? Gone? What?" you stutter.`);
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>. My sister?" she replies. "And <i>your</i> girlfriend?"
  scene.text(`"${((s as any).pcs_nickname ?? 0)}. My sister?" she replies. "And <i>your</i> girlfriend?"`);
  scene.text('Your head spins. "My <i>girlfriend</i>?"');
  scene.text('She rolls her eyes. "Yeah? You\'ve been dating her for a few weeks now, Mikhail, but let\'s be honest; you want to fuck <i>me</i> instead."');
  scene.text('The mention of your old name makes your head spin even more. "Anya! I-"');
  // TODO-QSP: dynamic text: She cuts you off as she kneels next to your bed. "Ssssshhh… <<$pcs_nickname>> is...
  scene.text(`She cuts you off as she kneels next to your bed. "Ssssshhh… ${((s as any).pcs_nickname ?? 0)} isn't here, so you can do what you want with me. I want to taste your nice big cock first, though."`);
  scene.actions([
    { label: 'Let it happen', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/sex/sister4.jpg');
    scene.text('You can barely form a sentence as you feel compelled to let her do it, ripping the covers off yourself and sliding over to the edge of the bed.');
    scene.text('"That\'s it, Mikhail," she grins. "Let me show how a <i>real</i> girl sucks dick."');
    scene.text('She doesn\'t waste any time and wraps her lips around your shaft before taking it into her mouth, your cock quickly growing rock hard as she swallows almost your entire length in one go.');
    scene.text('You buck your hips and grunt in pleasure as she starts bobbing her head up and down while gagging and slurping on your cock.');
    scene.text('"Holy shit, holy shit!" you cry out. "This is amazing!"');
    scene.text('You close your eyes and lean back, letting the pleasure wash over you.');
    scene.text('When you open your eyes again and look down at Anya, she winks at you as she continues to passionately suck your dick. Is she… giving you permission to deepthroat her?');
    scene.actions([
      { label: 'Do it', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/sex/sister4.jpg');
    scene.text('She <i>did</i> say you could do what you want with her after all…');
    scene.text('You feel her moan around your cock as you grab the back of her head and force her down, causing her to gag as you feel the tip of your cock pressing against the back of her throat.');
    scene.text('You grunt in pleasure as you hold her down for a few seconds before letting her come up for air. She coughs and splutters, but smiles up at you as drool drips from her mouth.');
    scene.text('Taking this as consent, you shove her back down on your cock and fuck her throat until you suddenly feel your orgasm building. You\'re going to cum in her moouth!');
    scene.text('You start thrusting even harder, eager to blow your load when you suddenly feel the tingling sensation again. When it fades, you no longer feel your dick in Anya\'s mouth. In fact, you can\'t feel your dick at all!');
    scene.text('When you look down, you\'re dismayed to find that you\'ve transformed back into your feminine self. You try to let out a frustrated grunt, only to be met with a very feminine shriek instead.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>?" Anya asks in surprise. "You don't want to know what your so...
    scene.text(`"${((s as any).pcs_nickname ?? 0)}?" Anya asks in surprise. "You don't want to know what your so called boyfriend was just doing!"`);
    scene.text('You try to speak, but your vision blurs and the room starts spinning around you before you suddenly black out.');
    scene.actions([
      { label: 'Wake up', goto: ['sleep_events', 'male_dream_end'] },
    ]);
  } },
      { label: 'Fuck her instead', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/sex/sister1.jpg');
    scene.text('"You said I can do <i>anything</i> I want with you?" you ask coyly.');
    scene.text('She grins. "I know that look! You ready to fuck me?"');
    scene.text('Before you can say anything, she jumps up on your bed and spreads her legs, showing off her pussy.');
    scene.text('You feel your heart racing as you kneel between her legs and line the tip of your cock up with her wet slit. Is this actually happening?!');
    scene.text('You take a deep breath before pushing forward, moaning as you feel your cock slide into her warm, wet pussy. Her walls immediately clamp down around your shaft as she moans softly herself.');
    // TODO-QSP: dynamic text: "Tighter than <<$pcs_nickname>>, right?" she grins as she lifts her legs and squ...
    scene.text(`"Tighter than ${((s as any).pcs_nickname ?? 0)}, right?" she grins as she lifts her legs and squeezes them together, causing her pussy to grip your cock even tighter. "Now <i>fuck</i> me, Mikhail!"`);
    scene.text('You grin as you start thrusting, causing her to moan loudly as you push as deep as you can. This feels amazing!');
    scene.text('You suddenly feel your orgasm building and start grunting, causing Anya to giggle.');
    scene.text('"Go ahead. Cum in my pussy, Mikhail!" she says teasingly.');
    scene.text('You start thrusting harder, eager to blow your load in her wet, warm pussy. However, just as you\'re about to cum, you suddenly feel the tingling sensation again. When it fades, you no longer feel your dick in Anya\'s pussy. In fact, you can\'t feel your dick at all!');
    scene.text('When you look down, you\'re dismayed to find that you\'ve transformed back into your feminine self. You try to let out a frustrated grunt, only to be met with a very feminine shriek instead.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>?" Anya asks in surprise. "You don't want to know what your so...
    scene.text(`"${((s as any).pcs_nickname ?? 0)}?" Anya asks in surprise. "You don't want to know what your so called boyfriend was just doing!"`);
    scene.text('You try to speak, but your vision blurs and the room starts spinning around you before you suddenly black out.');
    scene.actions([
      { label: 'Wake up', goto: ['sleep_events', 'male_dream_end'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDreamSexVika(s: GameState, scene: SceneBuilder): void {
  ((s as any).tgQW ?? {})['dream_sex_vika'] = 1;
  scene.img('images/locations/pavlovsk/hotel/hotel.room.better.jpg');
  scene.text('You feel a tingling sensation pulse through your body before you slowly open your eyes. You find yourself standing in… a hotel room? Something feels off…');
  scene.text('When you look down, you\'re surprised to see that you\'ve turned back into your old self, your cock hanging between your legs once more.');
  scene.text('When you finish admiring yourself, you notice the light in the en-suite bathroom is on and can hear somebody inside.');
  scene.actions([
    { label: 'Investigate', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/vika/sex/dream/dream1.jpg');
    scene.text('You enter the en-suite and find a naked, dolled up Vika admiring herself in the mirror while applying some lip balm.');
    if (((s as any).vikaslut ?? 0) === 1) {
      scene.text('She smiles when she sees you. "You\'re early, but I guess I can\'t blame you. You were pretty eager when you hired me, Mikhail."');
      scene.text('"Hired you?" you ask in confusion, the shock of hearing your old name causing your heart to race.');
      scene.text('"I\'m a slut for hire, remember?" she giggles. "You paid good money for me, so let\'s get down to business, shall we?"');
      scene.text('You don\'t have time to react before she grabs you by the hand and drags you back into the room.');
    } else {
      scene.text('She smiles when she sees you. "Hey Mikhail, you ready to have some fun?"');
      scene.text('The mention of your old name causes your heart to race. "Fun?"');
      scene.text('"That\'s why we came here, no?" she giggles. "To have a little fun without anyone interrupting us?"');
      scene.text('You don\'t have time to react before she grabs you by the hand and drags you back into the room.');
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/vika/sex/dream/dream2.jpg');
    scene.text('She seductively crawls onto the bed and smiles at you before reaching out to pull you over.');
    if (((s as any).vikaslut ?? 0) === 1) {
      scene.text('"Come on then, Mikhail. Come and fuck your whore like the slut that she is."');
    } else {
      scene.text('"You ready to get down and dirty, Mikhail?"');
    }
    scene.text('You grin as she eyes the bulge forming in your pants and winks up at you.');
    scene.actions([
      { label: 'Pull your cock out', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/vika/sex/dream/dream3.jpg');
    scene.text('You\'re about to unzip your pants and pull your cock out when she stops you.');
    scene.text('"Allow me. I want to see what I\'m working with here…"');
    scene.text('You nod and let her pull your pants down, your rock hard cock springing free as you take your shirt off.');
    scene.text('You gaze down at her as she takes your cock in her hand and starts licking the head, causing you to moan in pleasure.');
    scene.text('She then gazes up at you and winks before she wraps her lips around your shaft and takes it into her mouth.');
    scene.text('You buck your hips and grunt in pleasure as she starts bobbing her head up and down while gagging and slurping on your cock.');
    scene.text('"Holy shit, holy shit!" you cry out. "This is amazing!"');
    scene.text('You close your eyes and lean back, letting the pleasure wash over you. Whatever she\'s doing with her tongue feels <i>incredible</i> and you don\'t want her to stop.');
    scene.text('You open your eyes again when she pops your drool coated dick out of her mouth and gazes up at you.');
    scene.text('"Time to fuck me now, Mikhail…" she giggles before she turns around and seductively sways her ass.');
    scene.actions([
      { label: 'Fuck her from behind', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/vika/sex/dream/dream4.jpg');
    scene.text('You quickly move in behind her and take a second to admire the sight in front of you before you line the tip of your cock up with her slit and slide it into her pussy.');
    scene.text('You both moan in pleasure before she glances back at you as you grab her ass cheek in your hand.');
    if (((s as any).vikaslut ?? 0) === 1) {
      scene.text('"Let me show how buying my slutty little pussy was the best money you\'ll ever spend."');
    } else {
      scene.text('"Uhhh, you like that?" she moans. "You like how tight my little pussy feels?"');
    }
    scene.text('You grab onto her hips and start thrusting harder as you feel the walls of her pussy constantly tighten and contract around your shaft. You can\'t believe this is happening, but it feels amazing and you hope it never ends!');
    scene.text('You continue fucking her doggystyle before she suddenly pulls herself off of your cock.');
    scene.text('"Come over here, Mikhail. I want to ride that nice big dick now."');
    scene.actions([
      { label: 'Let her ride you', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/vika/sex/dream/dream5.jpg');
    if (((s as any).vikaslut ?? 0) === 1) {
      scene.text('She starts riding you hard and fast, taking you balls deep inside her over and over. She moans loudly as you feel your balls start to tighten.');
      scene.text('"You paid extra for the creampie privilege, so go ahead and fill me with every drop of your cum!"');
      scene.text('You close your eyes, ready to blow your load inside her. That\'s when the tingling sensation returns; when it fades, you no longer feel your dick inside her pussy. In fact, you can\'t feel your dick at all!');
      scene.text('When you open your eyes again, you\'re dismayed to find that you\'ve transformed back into your feminine self. You try to let out a frustrated grunt, only to be met with a very feminine shriek instead.');
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>?" Vika asks in shocked surprise. "I don't normally work with ...
      scene.text(`"${((s as any).pcs_nickname ?? 0)}?" Vika asks in shocked surprise. "I don't normally work with girls, but there's a first time for everything, I guess…"`);
      scene.text('You try to speak, but your vision blurs and the room starts spinning around you before you suddenly black out.');
    } else {
      scene.text('She starts riding you hard and fast, taking you balls deep inside her over and over. She moans loudly as you feel your balls start to tighten.');
      scene.text('"Go ahead. I\'m on birth control, so you can cum inside me all you want," she grins.');
      scene.text('You close your eyes, ready to blow your load inside her. That\'s when the tingling sensation returns; when it fades, you no longer feel your dick inside her pussy. In fact, you can\'t feel your dick at all!');
      scene.text('When you open your eyes again, you\'re dismayed to find that you\'ve transformed back into your feminine self. You try to let out a frustrated grunt, only to be met with a very feminine shriek instead.');
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>? Where did that guy with the nice big cock go?"
      scene.text(`"${((s as any).pcs_nickname ?? 0)}? Where did that guy with the nice big cock go?"`);
      scene.text('You try to speak, but your vision blurs and the room starts spinning around you before you suddenly black out.');
    }
    scene.actions([
      { label: 'Wake up', goto: ['sleep_events', 'male_dream_end'] },
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

function enterDreamSexAlbina(s: GameState, scene: SceneBuilder): void {
  ((s as any).tgQW ?? {})['dream_sex_albina'] = 1;
  scene.img('images/shared/home/bathroom/dush.mp4');
  scene.text('You dream that you\'re in the shower, washing your breasts when you suddenly feel a tingling sensation pulse through your body.');
  scene.text('When it fades, you look down. To your surprise, you discover that you\'ve turned back into your old self, your cock hanging between your legs once more.');
  scene.text('You grab it in your hand and start stroking it, grinning happily as it starts getting hard, only to be interrupted by a voice.');
  scene.text('"Mikhail, are you almost done in there?"');
  scene.text('Startled at the mentioning of your old name, you peek out of the shower and suddenly find yourself in what looks like a fancy hotel bathroom. You can\'t believe your eyes.');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/dream/dream1.jpg');
    scene.text('Standing in front of you, wearing only a pair of stockings and a garter… is Albina! You can feel yourself getting hard just staring at that juicy ass!');
    scene.text('"Took you long enough," she giggles as she smiles at your reflection in the mirror. "Now are you going to come over here and play with me or not?"');
    scene.text('"Pl- Play with you?" you stutter, still shocked at what\'s happening.');
    scene.text('She giggles as she spreads her legs and bends over the counter slightly before wiggling her ass. "Come on. You know you want to give my ass a squeeze…"');
    scene.actions([
      { label: 'Touch her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/dream/dream2.jpg');
    scene.text('You hesitate a little before walking up and placing your hand on her ass. It feels amazingly firm in your grasp.');
    scene.text('"That\'s it," she smiles as she looks back at you. "Now give it a squeeze…"');
    scene.text('You squeeze her ass cheek in your hand a few times before your free hand snakes between her legs. Your fingers brush against her pussy as you continue eagerly squeezing and even lightly spanking her ass.');
    scene.text('"You\'re a naughty boy, Mikhail!" she giggles. "I like it."');
    scene.text('You grin a little in excitement as you run your fingers along her puffy pussy lips, feeling her growing wet under your touch. You take a deep breath, but just as you\'re about to insert a finger into her, you suddenly find yourself lying on the bed in the hotel room with Albina nowhere in sight.');
    scene.text('You sigh in disappointment, especially since you\'re now rocking a painfully hard erection, a sensation you never thought you\'d ever feel again.');
    scene.actions([
      { label: 'Jerk off', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/dream/dream3.jpg');
    scene.text('You sigh again and are about to start jerking off when you suddenly feel someone grab your rock hard cock and start running their tongue up and down your shaft.');
    scene.text('You look down and see Albina gazing up at you with a happy look in her eyes as she continues licking your cock.');
    scene.text('"Don\'t think I forgot about you, Mikhail. I\'ve been waiting for this for a while. I want to taste your cock."');
    scene.text('You gasp and moan loudly as she wraps her lips around your shaft and starts sucking, waves of intense pleasure pulsing through your spine at the sensation as she bobs her head up and down your shaft.');
    scene.text('"Holy shit, holy shit!" you cry out. "This is amazing!"');
    scene.text('You close your eyes and lean back, letting the pleasure wash over you. Damn is she good at sucking dick!');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/dream/dream4.jpg');
    scene.text('You open your eyes again when you suddenly don\'t feel Albina sucking your dick anymore. You glance down expecting her to have disappeared again, but are pleasantly surprised to see that she\'s still there.');
    scene.text('"Ready to fuck me now?" she asks teasingly as she spins around and hovers above you, her wet pussy teasingly brushing against the tip of your rock hard cock.');
    scene.text('You grin and eagerly nod at her, causing her to smile. Is this actually happening?!');
    scene.text('You groan loudly as she lowers herself down and your dick is suddenly enveloped in the warm, wet, <i>tight</i> embrace of her pussy, her inner walls clamping down around your shaft.');
    scene.text('She glances back at you while pulling her ass cheek to the side to give you a better view of your dick sliding in and out of her pussy as she starts riding you.');
    scene.text('"Uhhh, you like that?" she moans. "You like how my tight little pussy feels?"');
    scene.text('You nod and she spanks herself, continuing to ride you until she lifts herself off and crawls up next to you on all fours.');
    scene.text('"Take me from behind now, Mikhail…" she whispers before giggling.');
    scene.actions([
      { label: 'Fuck her doggystyle', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/dream/dream5.jpg');
    scene.text('You quickly roll up onto your knees and move in behind her as she slowly sways her ass. You take a second to admire the sight in front of you before you slide your dick back into her pussy and pick up where you left off, causing her to moan loudly as you thrust in and out of her pussy.');
    scene.text('"Oh fuck yeah, just like that!" she grunts as she thrusts back against you, her ass slapping against your hips. "Fuck. My. Pussy!"');
    scene.text('You grab onto her hips and start thrusting a little harder as you feel the walls of her pussy constantly tighten and contract around your shaft. Gazing down at her as she looks back at you, you can\'t believe this is happening, but it feels amazing and you hope it never ends!');
    scene.actions([
      { label: 'Fuck her until you cum', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/dream/dream6.jpg');
    scene.text('You close your eyes as you thrust deep into her pussy, but when you open them again, you\'re suddenly fucking her missionary style as she looks up at you with lust and desire in her eyes.');
    scene.text('"Don\'t stop, Mikhail," she moans as she reaches down and starts rubbing her clit. "I want you to cum inside me! I want us to cum together!"');
    scene.text('You grin at her and start fucking her even harder before you suddenly feel your climax approaching and start thrusting even harder, eager to finally blow your load in her tight, warm pussy.');
    scene.text('You close your eyes, but just as you\'re about to cry out that you\'re cumming, your building orgasm… disappears. You stop thrusting and look down at your hands, your vision blurring slightly as you feel the tingling sensation coursing through you again.');
    scene.text('"Mikhail? Why did you stop?" Albina asks as she looks at you in confusion.');
    scene.text('You close your eyes and take a deep breath. That\'s when you no longer feel your dick inside Albina\'s pussy. In fact, you can\'t feel your dick at all!');
    scene.text('When you open your eyes again, you\'re dismayed to find that you\'ve transformed back into your feminine self. You try to let out a frustrated grunt, only to be met with a very feminine shriek instead.');
    // TODO-QSP: dynamic text: "What the fuck? <<$pcs_nickname>>?! Where did Mikhail go?!" Albina squeals, her ...
    scene.text(`"What the fuck? ${((s as any).pcs_nickname ?? 0)}?! Where did Mikhail go?!" Albina squeals, her legs still spread wide. It feels like the puffy wet lips of her pussy are mocking you for not being able to finish what you started.`);
    scene.text('You reach out to her and try to speak, but your vision blurs again and the room starts spinning around you before you suddenly black out.');
    scene.actions([
      { label: 'Wake up', goto: ['sleep_events', 'male_dream_end'] },
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

function enterDreamSexNush(s: GameState, scene: SceneBuilder): void {
  ((s as any).tgQW ?? {})['dream_sex_nush'] = 1;
  scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/mikhail/man_dream1.jpg');
  scene.text('You\'re laying in bed when you suddenly feel a tingling sensation pulse through your body. When it fades, you look down. To your surprise, you discover that you\'ve turned back into your old self, no breasts blocking your view down your body. You reach down and lift up the band of your boxer shorts, happy to see your cock hanging between your legs once more.');
  scene.text('Just as you\'re about to grab your dick and start stroking it, you hear a familiar voice. "I knew it! I knew there was something different about you! Something <i>manly</i> and <i>strong</i>."');
  scene.text('You turn to see Anushka standing in the doorway to your room, looking almost as excited as you feel. She\'s wearing a tight tank top and a very short jean skirt. "So. What\'s your real name?"');
  scene.text('"Mi- Mikhail…" you stammer.');
  scene.text('This is a dream come true. You\'re a man again and a pretty girl seems interested in you.');
  scene.text('She smiles and walks into the room before closing the door. "Would you like some help with that?" she asks while indicating your crotch.');
  scene.text('You can\'t help but nod your head and her smile widens. "Let me help get you in the mood."');
  scene.actions([
    { label: 'Watch her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/mikhail/man_dream2.jpg');
    scene.text('She pulls down her tank top, exposing her perky breasts. Once they\'re both exposed she bounces on the balls of her feet, which causes her breasts to bounce and jiggle in front of you. "Do you like my tits?"');
    scene.text('You nod and continue to stare at her as she continues to bouncing her breasts in front of you.');
    scene.actions([
      { label: 'Watch her take her top off', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/mikhail/man_dream3.jpg');
    scene.text('She pulls off her top completely, leaving her naked from the waist up.');
    scene.text('"This feels so natural, doesn\'t it?" she asks. "It feels like this is how it should always have been. Do you want me as badly as I want you?"');
    scene.text('You nod as you feel you dick getting hard, which she seems to notice as well.');
    scene.text('"Let\'s see what you\'ve been hiding from me," she smirks as she looks down at your boxer shorts.');
    scene.actions([
      { label: 'Watch her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/mikhail/man_dream4.jpg');
    scene.text('She pulls you towards her before she kneels between your legs and very slowly pulls your boxer shorts down, your dick quickly hardening in anticipation.');
    scene.text('Once she pulls your boxers low enough, your large dick suddenly springs free, causing her to giggle in delight before she quickly pulls them the rest of the way off and tosses them aside.');
    scene.text('"I want to taste your dick… Please let me suck your dick."');
    scene.text('"Okay…" you manage to croak out as you enthusiastically nod.');
    scene.actions([
      { label: 'Get your dick sucked', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/mikhail/man_dream5.jpg');
    scene.text('She leans forward and takes the head of your cock into her mouth before she starts sucking on it. You can\'t help but moan in pleasure; it feels so good!');
    scene.text('Her eyes meets yours as she slowly starts taking more of your cock into her mouth, taking about half the length of your shaft as she starts bobbing her head.');
    scene.actions([
      { label: 'Keep getting a blowjob', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/mikhail/man_dream6.jpg');
    scene.text('Her eyes are locked on yours as she bobs her head up and down, her wet lips wrapped tightly around the shaft of your cock. It feels amazing as her tongue plays along the bottom of your shaft.');
    scene.text('You have a strong urge to grab her head and shove your dick balls deep in her mouth, but she seems to know what she\'s doing, so maybe you should just let her keep leading.');
    scene.actions([
      { label: 'Let her take the lead', goto: ['sleep_events_magic', 'dream_sex_nush1'] },
      { label: 'Grab her head and make her gag', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/mikhail/man_dream7.jpg');
    scene.text('You can\'t take it any longer and reach out, grabbing her head in your hands. You force her head down until your cock is balls deep in her mouth. She continues to make eye contact with you as you hear her gagging on your dick.');
    scene.text('You ease up and let her pull away enough for her to catch her breath before you push her head back down, burying your shaft in her throat as you listen to her gagging again. After a few moments of this you let go of her head.');
    scene.text('You feel the urge to cum in her mouth right now, but you could let her take the lead again and see what happens.');
    scene.actions([
      { label: 'Let go of her head', goto: ['sleep_events_magic', 'dream_sex_nush1'] },
      { label: 'Cum in her mouth', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/mikhail/man_dream8.jpg');
    scene.text('Fuck letting her lead, you want to fuck her face and cum in her throat. Reaching out to grab her head once more, you start rapidly fucking her mouth with your cock, barely giving her time to catch her breath.');
    scene.text('You can feel yourself getting close as your balls start to tighten up. At any moment, you\'re going to fill her mouth with your cum.');
    scene.text('Just as you\'re about to unleash your load, however, your vision begins to blur and the room starts spinning around you before you suddenly black out.');
    scene.actions([
      { label: 'Wake up', goto: ['sleep_events', 'male_dream_end'] },
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

function enterDreamSexNush1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/mikhail/man_dream9.jpg');
  scene.text('She suddenly stands up and turns around before glancing back at you.');
  scene.text('"You want to fuck my pussy now?" she grins.');
  scene.text('You enthusiastically nod as she unbuttons her skirt and starts sliding it down her legs, only her thong keeping anything hidden from your view as her skirt drops around her ankles.');
  scene.actions([
    { label: 'Watch her get naked', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/mikhail/man_dream10.jpg');
    scene.text('With the skirt out of the way, she reaches up and hooks her thumbs in her panties before she starts very slowly lowering them, giving you a nice view of her tight ass as she does.');
    scene.text('She slides her thong down her thighs, your dick throbbing at the sight as you long to sink it into that tight wet pussy.');
    scene.actions([
      { label: 'Watch her mount you', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/mikhail/man_dream11.jpg');
    scene.text('Once she\'s naked, she turns back around and straddles you, her pussy directly over your dick.');
    scene.text('Reaching between her legs to grab your dick, she lines it up with her pussy and you feel the tip slide between her wet lips, causing her to moan loudly as she slowly lowers herself and your dick sinks into her wet, warm pussy.');
    scene.text('"Oh my god, you\'re so big! You\'re filling me up completely, Mikhail!" she moans as she takes your shaft balls deep into her pussy.');
    scene.actions([
      { label: 'Let her ride you', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/dreams/mikhail/man_dream12.jpg');
    scene.text('She starts riding you hard and fast, lifting herself so high you feel your dick nearly slip out of her pussy before she crashes back down, taking you balls deep inside her over and over. She moans loudly as you feel your balls start to tighten.');
    scene.text('You close your eyes, ready to blow your load inside her. That\'s when the tingling sensation returns; when it fades, you no longer feel your dick inside her pussy. In fact, you can\'t feel your dick at all!');
    scene.text('When you open your eyes again, you\'re dismayed to find that you\'ve transformed back into your feminine self. You try to let out a frustrated grunt, only to be met with a very feminine shriek instead.');
    // TODO-QSP: dynamic text: "What the fuck? <<$pcs_nickname>>?! Why did you change back?!" Anushka asks in a...
    scene.text(`"What the fuck? ${((s as any).pcs_nickname ?? 0)}?! Why did you change back?!" Anushka asks in a desperate dismay as she looks for where your dick went as well.`);
    scene.text('You reach out to her and try to speak, but your vision blurs again and the room starts spinning around you before you suddenly black out.');
    scene.actions([
      { label: 'Wake up', goto: ['sleep_events', 'male_dream_end'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDreamSexBella(s: GameState, scene: SceneBuilder): void {
  ((s as any).tgQW ?? {})['dream_sex_bella'] = 1;
  scene.img('images/characters/pavlovsk/school/girl/bella/dream/dream1.jpg');
  scene.text('You\'re laying in bed when you suddenly feel a tingling sensation pulse through your body. When it fades, you look down. To your surprise, you discover that you\'ve turned back into your old self, no breasts blocking your view down your body. You reach down and lift up the band of your boxer shorts, happy to see your cock hanging between your legs once more.');
  scene.text('You pull your boxers off and start stroking your cock, the thought of Bella in a sexy schoolgirl outfit being the first thing to enter your mind when you suddenly hear a voice.');
  scene.text('"Thinking about me, Mikhail? I can\'t say I can blame you. Who <i>wouldn\'t</i> want to fuck me?"');
  scene.text('You glance over and see Bella sitting next to you, her breasts hanging out of her… slutty school uniform…');
  scene.text('She smiles as she glances at your rock hard cock. "This is what you wanted, right? Let me help you with that…"');
  scene.actions([
    { label: 'Watch her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/bella/dream/dream2.jpg');
    scene.text('You grin as she kneels between your legs and starts kissing the tip of your cock. "You want me to suck it now?"');
    scene.text('You enthusiastically nod and let out a pleasured moan as she wraps her lips around your shaft and takes it into her mouth.');
    scene.text('You buck your hips and grunt in pleasure as she bobs her head up and down your shaft.');
    scene.text('"Holy shit, holy shit!" you cry out. "This is amazing!"');
    scene.text('You close your eyes and lean back, letting the pleasure wash over you. It feels good, but you can\'t help but feel like she isn\'t giving it her all and is just doing this to please you.');
    scene.text('She eventually slides your cock out of her mouth. "You ready to fuck me now?"');
    scene.actions([
      { label: 'Yes', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/bella/dream/dream3.jpg');
    scene.text('You enthusiastically nod as she flips her skirt up and gets down on all fours, revealing her lack of panties.');
    scene.text('"Come on then, big boy," she grins while shaking her ass. "Come and show me how a <i>real man</i> fucks a girl…"');
    scene.text('You can\'t believe your luck as you move in behind her and line the tip of your cock up with her wet slit. Is this actually happening?!');
    scene.text('You take a deep breath before pushing forward, moaning as you feel your cock slide into her warm, wet pussy. Her walls immediately clamp down around your shaft as she moans softly herself.');
    scene.text('You grab onto her hips and start thrusting as you gaze down at her ass. This feels amazing and you hope it never ends, even if she is putting in little effort herself and seems more interested in checking her nails than you.');
    scene.text('After what feels like a few minutes, she pulls forward and your cock slides out of her pussy. She then spins around and removes her skirt before throwing it aside.');
    scene.text('"Get on your back, Mikhail," she orders as she pushes you down. "It\'s <i>my</i> turn to take charge!"');
    scene.actions([
      { label: 'Get on your back', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/bella/dream/dream4.jpg');
    scene.text('You eagerly lie back and she straddles you reverse cowgirl before sliding back down onto your awaiting cock. "I\'m in charge now, Mikhail! That means no grabbing my ass or telling me to go faster. And <i>no</i>. I won\'t let you put it in my ass!"');
    scene.text('She starts riding you and lets out what sounds like fake moans as she glances back at you. "You like that? You like the way I ride your cock?"');
    scene.text('She\'s very likely faking her enjoyment, but you don\'t care. She\'s riding your dick! You grin at her and close your eyes, letting the pleasure take over as the walls of her pussy squeeze tightly around your shaft.');
    scene.text('You quickly feel your orgasm building and get ready to blow your load inside her. That\'s when the tingling sensation returns; when it fades, you no longer feel your dick inside her pussy. In fact, you can\'t feel your dick at all!');
    scene.text('When you open your eyes, you\'re dismayed to find that you\'ve transformed back into your feminine self. You try to let out a frustrated grunt, only to be met with a very feminine shriek instead.');
    scene.text('Bella looks at you with disgust as she rolls off of you. "I knew you didn\'t have it in you to fuck me. You\'re not even a real man!"');
    scene.text('You reach out to her and try to speak, but your vision blurs and the room starts spinning around you before you suddenly black out.');
    scene.actions([
      { label: 'Wake up', goto: ['sleep_events', 'male_dream_end'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDreamSexJulia(s: GameState, scene: SceneBuilder): void {
  ((s as any).tgQW ?? {})['dream_sex_julia'] = 1;
  scene.img('images/characters/pavlovsk/school/girl/julia/dream/dream1.jpg');
  scene.text('You\'re alarmed to find yourself standing naked in a bedroom when you suddenly feel a tingling sensation pulse through your body. When it fades, you look down and discover that you\'ve turned back into your old self, your cock hanging between your legs once more.');
  scene.text('You\'re about to start jerking off when you suddenly hear a voice.');
  scene.text('"Oh wow! The real thing looks so much better up close! And bigger!"');
  scene.text('You glance over and are surprised to see a naked Julia lying on the bed with a dildo in her hand.');
  scene.text('She glances at your cock as you feel it rapidly grow hard. "I wonder if this feels better than the real thing?"');
  scene.text('"The- The real thing?" you stutter.');
  scene.actions([
    { label: 'Watch her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/julia/dream/dream2.jpg');
    scene.text('You watch as she sits up on the bed and starts teasing her clit with the dildo, causing her to moan softly.');
    scene.text('"Oh that feels good! I wonder what it feels like inside me!"');
    scene.text('She starts rubbing the dildo up and down her slit as you feel your already rock hard cock getting even more erect.');
    scene.text('"Maybe I can help you out with that?" you grin.');
    scene.actions([
      { label: 'Continue watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/julia/dream/dream3.jpg');
    scene.text('She doesn\'t appear to pay any attention to you as she slides the dildo into her pussy and starts fucking herself.');
    scene.text('"Oh god!" she moans. "It feels just like the real thing!"');
    scene.text('You can\'t help but start stroking your now painfully hard erection.');
    scene.text('"I can give you the real thing if you want…" you smirk.');
    scene.actions([
      { label: 'Continue watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/julia/dream/dream4.jpg');
    scene.text('A smirk creeps onto her lips as she rolls up onto her knees, the dildo still stuffed in her pussy.');
    scene.text('"I\'m so wet! I think I\'m going to cum!" she cries as she starts fucking herself again.');
    scene.text('At this point, you can barely hold yourself back as you imagine yourself taking her from behind and pounding her pussy.');
    scene.text('"So am I, but I want to have a bit of fun first, if you know what I mean…" you reply.');
    scene.actions([
      { label: 'Continue watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/julia/dream/dream5.jpg');
    scene.text('She slides the dildo out of her pussy and smiles at you. "You really want to fuck me?"');
    scene.text('You enthusiastically nod while continuing to stroke your cock.');
    scene.text('"Okay then. Come over here and fuck my tight, wet pussy…" she whispers as she wiggles her ass.');
    scene.text('You\'re about to move in behind her when you suddenly feel the tingling sensation coursing through you again and close your eyes.');
    scene.text('When you open them again, you\'re dismayed to find that you\'ve transformed back into your feminine self. You try to let out a frustrated grunt, only to be met with a very feminine shriek instead.');
    scene.text('Julia just looks at you in confusion as you try to speak, but your vision blurs and the room starts spinning around you before you suddenly black out.');
    scene.actions([
      { label: 'Wake up', goto: ['sleep_events', 'male_dream_end'] },
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

function enterDreamSexKatjaVicky(s: GameState, scene: SceneBuilder): void {
  ((s as any).tgQW ?? {})['dream_sex_katja_vicky'] = 1;
  scene.img('images/characters/pavlovsk/school/girl/katja/dreams/mikhail/twins_dream1.jpg');
  scene.text('You feel a tingling sensation pulse through your body before you slowly open your eyes.');
  scene.text('"Look! I think he\'s waking up, sis!" you hear a feminine voice state.');
  scene.text('As your eyes adjust, you notice that you\'re sitting in a rather comfortable chair in a very girly pink bedroom, but your eyes quickly focus on what\'s in front of you.');
  scene.text('Sitting on the bed in front of you… is the Meynold twins! Katja is wearing a short pink dress, while Vicky is wearing a rather short white skirt and small blue top.');
  scene.text('"Glad you could join the awake people again, Mikhail!" Vicky says, and you suddenly notice that you\'re back in your old body. You look down on yourself and discreetely use your hands to check that everything is there.');
  scene.text('"He <i>is</i> a handsome one isn\'t he, sis?" Vicky says slyly when she notices Katja looking at you.');
  scene.text('"Ehm… Yes… I mean…" Katja stammers, getting very red in the face.');
  scene.actions([
    { label: 'See what they do', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/dreams/mikhail/twins_dream2.jpg');
    scene.text('"Come on Katja, let\'s get a little more comfortable…" Vicky giggles.');
    scene.text('You watch as the girls turn around and get on all fours, but as Vicky does the movement causes her skirt to fall up, exposing her ass and revealing that she\'s wearing a g-string underneath.');
    scene.text('"I think he\'s looking at our butts," Vicky says before she suddenly pulls up Katja\'s dress, revealing that she\'s wearing a lacy thong underneath.');
    scene.text('"What are you doing?!" Katja asks, a little panicked.');
    scene.text('"Don\'t worry so much, sis! He like our butts, so I\'m just making sure that he really can appreciate them" Katja don\'t say anything but turn to stare at you.');
    scene.text('"Do you like our butts, Mikhail? Which one is best?" Vicky asks after she turns to look at you.');
    scene.text('"They\'re both fantastic! I would not be able to choose!" you reply, trying to play it cool, which bring smiles to their faces.');
    scene.actions([
      { label: 'See what they do', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/dreams/mikhail/twins_dream3.jpg');
    scene.text('"Oh, he\'s a sly charmer too!" Vicky says as they turn around and sit down on their knees. "Let\'s give him something else to compare so he can make his choice."');
    scene.text('She starts to sensually unbutton her top. "Come on, Katja! Pull down the top of your dress so he can see your perfect tits."');
    scene.text('Katja awkwardly does as she\'s told as Vicky shows off her breasts.');
    scene.text('"So who is best now?" she asks as Katja looks at you nervously, her perky breasts exposed.');
    scene.text('Sensing it\'s a trap, you don\'t say anything.');
    scene.actions([
      { label: 'look at their boobs', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/dreams/mikhail/twins_dream4.jpg');
    scene.text('"Don\'t worry. I won\'t be mad at you for choosing Katja. Her boobs are just <i>yummy</i>!" Vicky says with a wink.');
    scene.text('To prove her point, she sticks out her tongue and starts playing with Katja\'s nipple.');
    scene.text('Katja looks a little surprised, but lets out a soft moan, which Vicky takes as encouragement and starts to sucking on her breast in earnest.');
    scene.text('You hold your breath, not wanting to disturb the awesome sight. Katja looks surprised, but her moans getting louder reveal how she really feels.');
    scene.actions([
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/dreams/mikhail/twins_dream5.jpg');
    scene.text('"So even our breasts are not enough to make him choose," Vicky says after removing her mouth from her twin\'s breast. "Looks like we need to show him even more."');
    scene.text('She then sits back and spreads her legs before pulling up the front of her skirt to reveal her panties. "Come on, sis! Spread those legs and show him your cute panties!"');
    scene.text('Katja slowly does as she\'s told, her trembling hand pulling up the hem of her skirt to reveal her panties.');
    scene.text('You notice that while Katja\'s panties can hardly be called conservative, Vicky\'s panties are see-through, revealing her neatly trimmed pubic hair on top of her slit.');
    scene.text('"Can you choose now?" Vicky asks, looking seductively at you while Katja just looks nervous.');
    scene.text('You decide to be bold. "This is hardly a far comparison! I can see your pussy through your panties, but I can\'t see Katja\'s. How can I really compare the two of you?"');
    scene.actions([
      { label: 'See how they react', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/dreams/mikhail/twins_dream6.jpg');
    scene.text('"You\'re right! Katja, pull your panties to the side so he can see your pussy," Vicky orders as she herself moves the front of her g-string aside to reveal her slit.');
    scene.text('"I can\'t do that! I\'ve… I\'ve never showed it to a boy before!" Katja replies, clearly shocked as the last part comes out in a whisper.');
    scene.text('"You only get your first time once sis, and I can hardly imagine a more handsome boy than Mikhail to be the one!" Vicky winks.');
    scene.text('"O… Okay…" Katja says in a trembling voice and slowly moves her panties to the side, revealing her very wet pussy.');
    scene.text('"So… Who\'s the hottest, Mikhail? Who has the most delicious pussy?" Vicky asks as Katja smiles at you nervously.');
    scene.actions([
      { label: 'See how they react', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/dreams/mikhail/twins_dream7.jpg');
    scene.text('You\'re paralyzed with indecision, afraid the wrong word will ruin your chances, which causes Vicky to laugh.');
    scene.text('"You don\'t need to answer. I know that Katja\'s pussy is irresistible!" Vicky says before she starts licking Katja\'s slit.');
    scene.text('Katja looks very surprised, but doesn\'t do anything, which encourages her sister to really go down on her.');
    scene.text('She starts moaning slightly and puts a finger in her mouth to suppress her moans.');
    scene.actions([
      { label: 'See how they react', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/dreams/mikhail/twins_dream8.jpg');
    scene.text('It looks like Vicky is not only really into eating her sister\'s pussy, but is very good at it too.');
    scene.text('Katja soon stops trying to suppress her moans and after a few minutes, starts screaming out in orgasm.');
    scene.text('Vicky then removes her mouth from her panting sister, and looks at you as you notice that a very big bulge has formed in your pants.');
    scene.text('"Looks like somebody enjoyed the show! Come on sis, let\'s free that monster!" Vicky grins as she gets down on her knees in front of you.');
    scene.text('Katja looks a little out of it, but eventually follows her sister.');
    scene.actions([
      { label: 'Let them get your cock out', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/dreams/mikhail/twins_dream9.jpg');
    scene.text('Vicky starts by stroking you cock through your pants. "Come on sis, feel it," she says encouragingly.');
    scene.text('"I don\'t know… I\'ve never touched one before…" Katja answers nervously, but slowly starts to move her hand up and down along your hard cock.');
    scene.text('"Let\'s get it out then," Vicky says and swiftly pulls down your pants, your cock popping out and standing straight up.');
    scene.text('"Very nice…" Vicky says "How is it seeing your first cock, sis?"');
    scene.text('"It\'s big.." Katja whispers with wide eyes.');
    scene.text('"Yes, it is. Come and feel it," Vicky says as her soft hand start to play with your cock.');
    scene.text('Katja\'s trembling hand follows and you soon have them both exploring your extremely hard shaft.');
    scene.text('"Doesn\'t it look delisious, sis?" Vicky grins. "Let\'s eat it."');
    scene.text('Katja doesn\'t answer, but does discreetely lick her lips.');
    scene.actions([
      { label: 'Get your cock licked', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/dreams/mikhail/twins_dream10.jpg');
    scene.text('Katja removes her hand from your cock as Vicky sticks her tongue out and starts licking the head.');
    scene.text('"Come on, sis. Taste it!" Vicky says and Katja very slowly sticks her tongue out and starts clumsily licking the head of your cock.');
    scene.text('She gets some of your precum on her tongue and quickly pulls back. She looks surprised as Vicky laughs.');
    scene.text('"Doesn\'t cum just taste heavenly?"');
    scene.text('Katja\'s face goes completely red before she slowly nods.');
    scene.actions([
      { label: 'Get a blowjob', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/dreams/mikhail/twins_dream11.jpg');
    scene.text('"Okay, enough playing. Let\'s eat!" Vicky smirks before she takes your cock in her mouth and slowly takes it all the way into her throat.');
    scene.text('She then starts giving you a fantastic blowjob while Katja switches between looking astonished at her sister and longingly at you.');
    scene.text('After a few minutes, Vicky pops your cock out of her mouth and offers it to Katja. "Your turn."');
    scene.text('"I\'ve never done it before…" Katja blushes, but takes it in her mouth. To both your and her surprise, she swallows your entire shaft in one go.');
    scene.text('She then starts to blow you. While she\'s not as skilled as her sister, her enthusiasm more than makes up for it.');
    scene.actions([
      { label: 'Fuck Vicky', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/dreams/mikhail/twins_dream12.jpg');
    scene.text('After a few minutes, Katja pops your cock out of her mouth.');
    scene.text('"This is going inside you today, sis, but since you already came, it\'s only fair I get to ride it first," Vicky says as she grabs your cock.');
    scene.text('She then turns around and straddles you, her wet pussy hovering above you.');
    scene.text('"Watch and learn, sis," she says as she lowers herself down onto your stiff cock.');
    scene.text('She then starts to ride you with skill you\'ve never experienced before, moaning loudly as she slides up and down your shaft and Katja watches intently.');
    scene.text('"I\'m cumming! Oh god I\'m cumming!" Vicky screams way too soon before she trembles on your cock.');
    scene.text('"This is the best cock I\'ve ever had!" she says as she climbs off of you. "I\'m jealous that you\'re going to lose your virginity to it, sis!"');
    scene.actions([
      { label: 'Take Katja\'s virginity', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/dreams/mikhail/twins_dream13.jpg');
    scene.text('"Take my place, but have your front to Mikhail so he can see it in your eyes as you lose your virginity," Vicky orders.');
    scene.text('Katja does as she\'s told and looks you deep into your eyes as her sister guides your cock into her extremely tight pussy.');
    scene.text('You feel heavy resistance, but Katja only lets out a soft grunt when her hymen breaks and she slides all the way down onto your cock as Vicky teases her clit.');
    scene.text('After taking a few seconds to adjust, she starts to slowly your cock, but quickly picks up the pace and is soon riding you as hard as her sister was minutes before.');
    scene.text('Katja rides you for several minutes with her sister\'s encouragement, and clearly orgasms several times.');
    scene.text('"Cum inside her! Plant your seed deep within her so she\'ll have a memory of her first time forever!" Vicky says as you feel yourself getting closer to orgasm.');
    scene.text('"Yes! Do it. Give me your seed. Impregnate me," Katja shouts and you can feel it coming.');
    scene.text('You feel the tingling sensation return as you get ready to burst inside her, filling her to the brim with your seed.');
    scene.text('And then… Nothing. Nothing comes out! You then realize that you no longer feel Katja\'s tight pussy squeezing around your cock.');
    scene.text('When you look down, you notice that not only is Katja no longer riding your cock, but you don\'t have one! You\'ve transformed back into your feminine self as Katja looks at you in dismay.');
    scene.text('"Where did your cock go? Where is your seed? Give it to me!"');
    scene.text('"What a loser! You couldn\'t even satisfy a virgin!" Vicky laughs.');
    scene.text('You reach out and try to speak, but your vision begins to blur and the room starts spinning around you before you suddenly black out.');
    scene.actions([
      { label: 'Wake up', goto: ['sleep_events', 'male_dream_end'] },
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
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'dream_sex_anya':
      enterDreamSexAnya(s, scene);
      break;
    case 'dream_sex_vika':
      enterDreamSexVika(s, scene);
      break;
    case 'dream_sex_albina':
      enterDreamSexAlbina(s, scene);
      break;
    case 'dream_sex_nush':
      enterDreamSexNush(s, scene);
      break;
    case 'dream_sex_nush1':
      enterDreamSexNush1(s, scene);
      break;
    case 'dream_sex_bella':
      enterDreamSexBella(s, scene);
      break;
    case 'dream_sex_julia':
      enterDreamSexJulia(s, scene);
      break;
    case 'dream_sex_katja_vicky':
      enterDreamSexKatjaVicky(s, scene);
      break;
    default:
      enterDreamSexAnya(s, scene);
      break;
  }
}

export const sleep_events_magic: LocationDef = {
  name: 'sleep_events_magic',
  title: 'You awaken in your bedroom, but something feels… different. ',
  region: 'other',
  description: ['You awaken in your bedroom, but something feels… different. You glance over and see Anya snoozing away in her bed when you suddenly feel a tingling sensation pulse through you and pull back the covers to discover that you\'ve turned back to your old self, your cock hanging between your legs once more. It\'s at this point you realize that you\'re naked with Anya next to you!'],
  enter: enter,
};
