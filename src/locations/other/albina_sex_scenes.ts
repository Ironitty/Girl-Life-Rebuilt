import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterLeave(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'end');
  if (((s as any).region ?? 0) === 'city') {
    scene.actions([{ label: 'Continue', goto: ['albina_dorm', 'start'] }]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['albinahome', 'bedroom'] }]);
  }
  scene.build();
}

function enterKissing1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A23');
  qspCall(s, 'arousal', 'kiss', 3, 'no_orgasm_msg', 'lesbian');
  qspCall(s, 'arousal', 'kiss', (-5), 'no_orgasm_msg', 'lesbian');
  qspCall(s, 'arousal', 'foreplay', (-5), 'no_orgasm_msg', 'lesbian');
  scene.img('images/shared/sex/lesbian/kiss2.mp4');
  scene.text('You kiss Albina deeply, pulling her face into yours and drinking in the taste of her tongue as your breasts smoosh against hers. Her hands wander, snaking down your back to grab at your ass.');
  if (qspFunc(s, 'pcs_has_attr', 'body_ass_flat')) {
    scene.text('"You need to do some squats," she giggles. "I want more to play with back here."');
  } else {
    if (qspFunc(s, 'pcs_has_attr', 'body_ass_average')) {
      scene.text('"Mmmm..." she moans. "You have a nice ass..."');
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'body_ass_big')) {
        scene.text('"Mmmm- fuck~!" she moans. "Is this what it feels like for guys when they grab my ass?"');
      } else {
        scene.text('"Mmmm- fuck~!" she moans. "Your ass is as big as mine!"');
      }
    }
  }
  if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
    scene.actions([
      { label: 'Ask her to take your virginity', goto: ['albina_sex_scenes', 'virgin_take1'] },
    ]);
  } else {
    scene.actions([
      { label: 'Ask her to fuck you with a strapon', goto: ['albina_sex_scenes', 'virgin_take1'] },
    ]);
  }
  scene.build();
}

function enter69ing_1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A23');
  qspCall(s, 'arousal', 'kiss', 3, 'no_orgasm_msg', 'lesbian');
  qspCall(s, 'arousal', 'kiss', (-5), 'no_orgasm_msg', 'lesbian');
  qspCall(s, 'arousal', 'foreplay', (-5), 'no_orgasm_msg', 'lesbian');
  scene.img('images/shared/sex/lesbian/69_1.mp4');
  scene.text('Your kisses leave Albina\'s mouth and start roaming around her body. Your limbs become tangled and you somehow end up with your face between her legs and her face between yours. She dives right in, making filthy slurping sounds as she licks your pussy and sucks on your clit. As she comes up for air, you feel her breath on your pussy.');
  // TODO-QSP: dynamic text: "<i>Fuck!</i>, you taste <i>so good</i>, <<$pcs_nickname>>!" she moans before di...
  scene.text(`"<i>Fuck!</i>, you taste <i>so good</i>, ${((s as any).pcs_nickname ?? 0)}!" she moans before diving back in.`);
  scene.text('For your part, her pussy is slippery beneath your tongue. Not just soaking wet, but smooth as silk too, without a single hair to brush against your tongue.');
  scene.build();
}

function enterVirginTake1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'D3', 'a');
  scene.text('"Albina..." you murmur.');
  scene.text('"What is it?" she smiles up at you.');
  scene.actions([
    { label: 'Ask shyly', handler: (st: GameState) => {
    scene.text('"W-will... Will you take my virginity?" you stammer shyly.');
    scene.text('Her eyes go wide. "What?! You-" She chokes on her words. "You want me to-? Are you... sure?"');
    scene.text('Biting your lip, you nod once as your face flushes with heat.');
    scene.text('"Okay," she nods back. Her eyes seem to shimmer.');
    scene.text('You climb off of her and she gets up from the bed, moving over to one of her dressers.');
    scene.text('"Just lay on the bed for now," she says. "Spread your legs and touch yourself a little. Try to get wet."');
    scene.actions([
      { label: 'Wait for her', goto: ['albina_sex_scenes', 'virgin_take1.1'] },
      { label: 'Do as she says', goto: ['albina_sex_scenes', 'virgin_take1.2'] },
    ]);
  } },
    { label: 'Ask openly', handler: (st: GameState) => {
    scene.text('"I want you to take my virginity," you say, staring straight into her eyes.');
    scene.text('Her eyes go wide in shock. "What?! You-" She chokes on her words. "You want me to-? Are you... sure?"');
    scene.text('"I\'m sure," you nod without hesitation. "And I want it to be you."');
    scene.text('"Okay," she nods back. Her eyes seem to shimmer.');
    scene.text('You climb off of her and she gets up from the bed, moving over to one of her dressers.');
    scene.text('"Just lay on the bed for now," she says. "Spread your legs and touch yourself a little. Try to get wet."');
    scene.actions([
      { label: 'Wait for her', goto: ['albina_sex_scenes', 'virgin_take1.1'] },
      { label: 'Do as she says', goto: ['albina_sex_scenes', 'virgin_take1.2'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterVirginTake1_1(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: You watch as Albina reaches into a drawer, grabs a harness and pulls it up her l...
  scene.text(`You watch as Albina reaches into a drawer, grabs a harness and pulls it up her legs, cinching it tight to her thighs. She then reaches back to pull out a dildo about ${((s as any).dick ?? 0)}cm long.`);
  scene.text('"Just a little bit bigger than an average dick," she smiles softly at you. "But not too big. We don\'t want to go overboard for your first time."');
  scene.actions([
    { label: 'Nod', goto: ['albina_sex_scenes', 'virgin_take2.1'] },
    { label: 'Tell her you want a big one', goto: ['albina_sex_scenes', 'virgin_take2.2'] },
  ]);
  scene.build();
}

function enterVirginTake1_2(s: GameState, scene: SceneBuilder): void {
  scene.text('You take her advice, closing your eyes and snaking your hand between your legs. You touch yourself, taking deep breaths as you let the anticipation build. Heat spreads through your hips and your fingers begin to feel much wetter.');
  qspCall(s, 'arousal', 'clit_finger', 3, 'masturbation');
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: A sound causes your eyes to open and you see a harness strapped around Albina's ...
  scene.text(`A sound causes your eyes to open and you see a harness strapped around Albina's legs as she pulls out a decently sized ${((s as any).dick ?? 0)}cm dildo.`);
  scene.text('"Just a little bit bigger than an average dick," she smiles softly at you. "But not too big. We don\'t want to go overboard for your first time."');
  scene.actions([
    { label: 'Nod', goto: ['albina_sex_scenes', 'virgin_take2.1'] },
    { label: 'Tell her you want a big one', goto: ['albina_sex_scenes', 'virgin_take2.2'] },
  ]);
  scene.build();
}

function enterVirginTake2_1(s: GameState, scene: SceneBuilder): void {
  scene.text('You nod nervously as she screws it onto a plate at the front of her harness.');
  scene.actions([
    { label: 'Continue', goto: ['albina_sex_scenes', 'virgin_take3'] },
  ]);
  scene.build();
}

function enterVirginTake2_2(s: GameState, scene: SceneBuilder): void {
  scene.text('"I want a bigger one," you say and her smile fades.');
  scene.text('"No you don\'t," she says sternly before her expression softens again. "Trust me..."');
  scene.actions([
    { label: 'Insist', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'D5', 'a');
    scene.text('"I only get to pop my cherry once, right?" you say. "So if I\'m gonna do this, I want to go big."');
    scene.text('Albina hesitates, caught between doing what you want and her desire to protect you, but eventually relents.');
    scene.text('"Okay," she says quietly. "If that\'s what you really want..."');
    scene.text('She reaches back into the drawer and pulls out a <i>very</i> big pitch black dildo -about a third longer in size and significantly thicker- with large veins running up and down its shaft. She screws it onto a plate at the front of her harness.');
    scene.actions([
      { label: 'Continue', goto: ['albina_sex_scenes', 'virgin_take3'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterVirginTake3(s: GameState, scene: SceneBuilder): void {
  scene.text('Albina rejoins you on the bed and spreads your legs. You let out a soft groan as she pushes a single finger into your virgin pussy, stealing your juices to wipe on the tip of the strapon. She then pumps several spurts of lube from a bedside bottle all over it before finally lining it up with your pussy.');
  scene.text('"Okay, ready?" she asks and you nod. "Deep breath."');
  scene.actions([
    { label: 'Put it in', handler: (st: GameState) => {
    (s as any).ar_vag_lube = 1;
    if (((s as any).dick_width1 ?? 0) < 13) {
      scene.text('Albina moves her hips and the thick rubber cock pushes through your folds and squeezes its head inside. You gasp as it starts to stretch your pussy.');
      scene.text('"Pretty different from just a finger, huh?" she says with a smirk. You nod back, speechless and her expression turns more somber. "Now comes the hard part. This is going to hurt. Are you ready?"');
      scene.text('You nod once and Albina puts her hands on either side of your head.');
      scene.text('And then she thrusts.');
      if (((s as any).dick_width1 ?? 0) >= 13) {
        scene.actions([
          { label: 'Shriek', goto: ['albina_sex_scenes', 'virgin_take4.3'] },
        ]);
      }
      scene.actions([
        { label: 'Grunt', goto: ['albina_sex_scenes', 'virgin_take4.1'] },
        { label: 'Gasp', goto: ['albina_sex_scenes', 'virgin_take4.2'] },
      ]);
    } else {
      scene.text('Albina moves her hips and the thick rubber cock pushes through your folds and squeezes its head inside. You gasp as it stretches your pussy to the point of pain.');
      scene.text('"Are you okay?" Albina asks worriedly. "Do you want to pause for a second?"');
      scene.actions([
        { label: 'It hurts', handler: (st: GameState) => {
    ((s as any).AlbinaQW ?? {})['big_dildo_hurt'] = 1;
    scene.text('"It hurts," you whimper.');
    scene.text('"This is why I warned you against a big one for your first time," she says sadly, not attempting to gloat at all about her ignored advice. "Let\'s just wait here for a minute, okay?"');
    scene.text('You nod back and Albina stays where she is, still as a statue as your pussy starts to adjust.');
    scene.actions([
      { label: 'Lose your virginity', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 3) + 2);
    qspCall(s, 'stat', '');
    scene.text('After a few minutes, Albina speaks up.');
    scene.text('"I\'m going to move again. Here comes the hard part. This is going to hurt the most. Just tell me when you\'re ready."');
    scene.text('You nod once and brace yourself as Albina puts her hands on either side of your head and does the same. And then she thrusts.');
    if (((s as any).dick_width1 ?? 0) >= 13) {
      scene.actions([
        { label: 'Shriek', goto: ['albina_sex_scenes', 'virgin_take4.3'] },
      ]);
    }
    scene.actions([
      { label: 'Grunt', goto: ['albina_sex_scenes', 'virgin_take4.1'] },
      { label: 'Gasp', goto: ['albina_sex_scenes', 'virgin_take4.2'] },
    ]);
  } },
    ]);
  } },
        { label: 'It feels good', handler: (st: GameState) => {
    ((s as any).AlbinaQW ?? {})['big_dildo_enjoy'] = 1;
    scene.text('"It... It feels... <i>So good</i>," you say in awe. It\'s just the head, but you can feel your pussy stretching to accommodate. The good stretch of a sore, overworked muscle, but even better.');
    scene.text('Albina seems even more surprised than you are. "Well, if you\'re okay then... This is going to be the hard part. It\'s going to hurt. Are you ready?"');
    scene.text('You nod once and Albina puts her hands on either side of your head.');
    scene.text('And then she thrusts.');
    if (((s as any).dick_width1 ?? 0) >= 13) {
      scene.actions([
        { label: 'Shriek', goto: ['albina_sex_scenes', 'virgin_take4.3'] },
      ]);
    }
    scene.actions([
      { label: 'Grunt', goto: ['albina_sex_scenes', 'virgin_take4.1'] },
      { label: 'Gasp', goto: ['albina_sex_scenes', 'virgin_take4.2'] },
    ]);
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterVirginTake4_1(s: GameState, scene: SceneBuilder): void {
  scene.text('Albina thrusts her hips and you feel something <i>rip</i> inside you.');
  if (((s as any).AlbinaQW ?? 0)?.['big_dildo_hurt'] === 1) {
    scene.text('Albina thrusts her hips and you feel something <i>rip</i> inside you. You clench your teeth, grunting as you try to hold back the pain of the big rubber cock sliding all the way to its base, filling you to the brim and sending that stretching and tearing sensation throughout your entire pussy. Something hot drips from your pussy around the dildo.');
  } else {
    if (((s as any).AlbinaQW ?? 0)?.['big_dildo_enjoy'] === 1) {
      scene.text('Albina thrusts her hips and you feel something <i>rip</i> inside you. You clench your teeth, grunting as the big rubber cock slides all the way to its base, filling you to the brim and sending that stretching sensation throughout your entire pussy. Something hot drips from your pussy around the dildo.');
    } else {
      scene.text('Albina thrusts her hips and you feel something <i>rip</i> inside you. You clench your teeth, grunting as the rubber cock slides all the way to its base, filling you to the brim. Your walls squeeze against it tightly, ever so slightly stretched by its girth. Something hot drips from your pussy around the dildo.');
    }
  }
  scene.text('"That\'s the whole thing," she says. "You okay?"');
  if (((s as any).dick_width1 ?? 0) >= 13) {
    scene.actions([
      { label: 'It\'s big', handler: (st: GameState) => {
    if (((s as any).AlbinaQW ?? 0)?.['big_dildo_hurt'] === 1) {
      scene.text('"<i>Fuck</i>, that\'s big!" you groan. "I can feel it in my stomach. Oh fuck, I feel like I\'m gonna throw up!"');
      scene.text('"Your pussy will adjust," Albina reassures you tenderly. "I\'m going to start moving. Slowly."');
      scene.text('You nod back, unable to say anything else and Albina begins to move her hips.');
    } else {
      if (((s as any).AlbinaQW ?? 0)?.['big_dildo_enjoy'] === 1) {
        scene.text('"<i>Fuck</i>, that\'s big!" you pant, an involuntary smile creeping onto your face. "I feel so... <i>full</i>..."');
        scene.text('The smile becomes a full blown grin as you look at Albina in astonishment and she smiles back.');
        scene.text('"Yeah. Big dicks are like that. They fill you up and stretch you out. You ready for me to move?"');
        scene.text('You nod back excitedly and Albina begins to move her hips.');
      }
    }
    scene.actions([
      { label: 'Let Albina fuck you', goto: ['albina_sex_scenes', 'virgin_take5'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Nod', handler: (st: GameState) => {
    scene.text('"Yeah," you nod, concentrating hard just to get that one syllable out.');
    scene.text('I\'m going to start moving. Slowly."');
    scene.text('You nod again and Albina begins to move her hips.');
    scene.actions([
      { label: 'Let Albina fuck you', goto: ['albina_sex_scenes', 'virgin_take5'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterVirginTake4_2(s: GameState, scene: SceneBuilder): void {
  scene.text('Albina thrusts her hips and you feel something <i>rip</i> inside you.');
  if (((s as any).AlbinaQW ?? 0)?.['big_dildo_hurt'] === 1) {
    scene.text('Albina thrusts her hips and you feel something <i>rip</i> inside you. You gasp loudly, trying to hold back the pain of the big rubber cock sliding all the way to its base, filling you to the brim and sending that stretching and tearing sensation throughout your entire pussy. Something hot drips from your pussy around the dildo.');
  } else {
    if (((s as any).AlbinaQW ?? 0)?.['big_dildo_enjoy'] === 1) {
      scene.text('Albina thrusts her hips and you feel something <i>rip</i> inside you. You gasp loudly as the big rubber cock slides all the way to its base, filling you to the brim and sending that stretching sensation throughout your entire pussy. Something hot drips from your pussy around the dildo.');
    } else {
      scene.text('Albina thrusts her hips and you feel something <i>rip</i> inside you. You gasp in surprise as the rubber cock slides all the way to its base, filling you to the brim. Your walls squeeze against it tightly, ever so slightly stretched by its girth. Something hot drips from your pussy around the dildo.');
    }
  }
  scene.text('"That\'s the whole thing," she says. "You okay?"');
  if (((s as any).dick_width1 ?? 0) >= 13) {
    scene.actions([
      { label: 'It\'s big', handler: (st: GameState) => {
    if (((s as any).AlbinaQW ?? 0)?.['big_dildo_hurt'] === 1) {
      scene.text('"<i>Fuck</i>, that\'s big!" you gasp again. "I can feel it in my stomach. Oh fuck, I feel like I\'m gonna throw up."');
      scene.text('"Your pussy will adjust," Albina reassures you tenderly. "I\'m going to start moving. Slowly."');
      scene.text('You nod back, unable to say anything else and Albina begins to move her hips.');
    } else {
      if (((s as any).AlbinaQW ?? 0)?.['big_dildo_enjoy'] === 1) {
        scene.text('"<i>Fuck</i>, that\'s big!" you gasp again, an involuntary smile creeping onto your face. "I feel so... <i>full</i>..."');
        scene.text('The smile becomes a full blown grin as you look at Albina in astonishment and she smiles back.');
        scene.text('"Yeah. Big dicks are like that. They fill you up and stretch you out. You ready for me to move?"');
        scene.text('You nod back excitedly and Albina begins to move her hips.');
      }
    }
    scene.actions([
      { label: 'Let Albina fuck you', goto: ['albina_sex_scenes', 'virgin_take5'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Nod', handler: (st: GameState) => {
    scene.text('"Yeah," you gasp again, concentrating hard just to get that one syllable out as you pant for breath.');
    scene.text('I\'m going to start moving. Slowly."');
    scene.text('You nod again and Albina begins to move her hips.');
    scene.actions([
      { label: 'Let Albina fuck you', goto: ['albina_sex_scenes', 'virgin_take5'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterVirginTake4_3(s: GameState, scene: SceneBuilder): void {
  scene.text('Albina thrusts her hips and you feel something <i>rip</i> inside you.');
  if (((s as any).AlbinaQW ?? 0)?.['big_dildo_hurt'] === 1) {
    scene.text('Albina thrusts her hips and you feel something <i>rip</i> inside you. You shriek in pain as the big rubber cock slides all the way to its base, filling you to the brim and sending that stretching and tearing sensation throughout your entire pussy. Something hot drips from your pussy around the dildo.');
  } else {
    if (((s as any).AlbinaQW ?? 0)?.['big_dildo_enjoy'] === 1) {
      scene.text('Albina thrusts her hips and you feel something <i>rip</i> inside you. You shriek in pain as the big rubber cock slides all the way to its base, filling you to the brim and sending that stretching sensation throughout your entire pussy. Something hot drips from your pussy around the dildo.');
    } else {
      scene.text('Albina thrusts her hips and you feel something <i>rip</i> inside you. You shriek in pain as the rubber cock slides all the way to its base, filling you to the brim. Your walls squeeze against it tightly, ever so slightly stretched by its girth. Something hot drips from your pussy around the dildo.');
    }
  }
  // TODO-QSP: dynamic text: "I'm so sorry <<$pcs_nickname>>," she says morosely. "I know it hurts, just bear...
  scene.text(`"I'm so sorry ${((s as any).pcs_nickname ?? 0)}," she says morosely. "I know it hurts, just bear with it."`);
  scene.actions([
    { label: 'Nod', handler: (st: GameState) => {
    scene.text('You nod, unable to speak lest you scream again as your pussy adjusts to having something inside it.');
    scene.text('I\'m going to start moving. Slowly."');
    scene.text('You nod again and Albina begins to move her hips.');
    scene.actions([
      { label: 'Let Albina fuck you', goto: ['albina_sex_scenes', 'virgin_take5'] },
    ]);
  } },
    { label: 'It\'s big', handler: (st: GameState) => {
    if (((s as any).AlbinaQW ?? 0)?.['big_dildo_hurt'] === 1) {
      scene.text('"<i>Fuck</i>, that\'s big!" you whimper, eyes welling up with tears. "It feels like I\'m getting torn in half!"');
      scene.text('"Your pussy will adjust," Albina reassures you tenderly. "I\'m going to start moving. Slowly."');
      scene.text('You nod back, unable to say anything else and Albina begins to move her hips.');
    } else {
      if (((s as any).AlbinaQW ?? 0)?.['big_dildo_enjoy'] === 1) {
        scene.text('"<i>Fuck</i>, that\'s big!" you whimper, eyes welling up with tears. "It\'s different when the whole thing is inside you..."');
        scene.text('"That was just your hymen tearing," Albina reassures you. "Your pussy will adjust soon. I\'m going to start moving. Slowly."');
        scene.text('You nod back and she begins to move her hips.');
      }
    }
    scene.actions([
      { label: 'Let Albina fuck you', goto: ['albina_sex_scenes', 'virgin_take5'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterVirginTake5(s: GameState, scene: SceneBuilder): void {
  scene.text('The rubber cock inside you moves. Slowly.');
  if (((s as any).AlbinaQW ?? 0)?.['big_dildo_hurt'] === 1) {
    scene.text('Albina is careful to keep the pace almost torturously slow, pulling back until only the dildo\'s head is still in your pussy before slowly pushing back in until her hips are flush with yours. Each thrust leaves you wincing in pain.');
    scene.text('In... Out... In... Out... In... Out... I-<i>ohhhhh...</i>');
    scene.text('The point at which everything changes is hard to pinpoint. It comes as a genuine shock for you when you realize pain has turned to pleasure. Warmth blossoms between your hips as Albina plunges the strapon\'s length into your pussy and a moan escapes your lips.');
    scene.text('"Starting to feel good, right?" Albina smiles. You nod back, starting to go lightheaded with pleasure as she begins to roll her hips during her thrusts.');
  } else {
    if (((s as any).AlbinaQW ?? 0)?.['big_dildo_enjoy'] === 1) {
      scene.text('The pain of losing your virginity only lasted a few moments and quickly faded. Albina keeps the pace almost tantalizingly slow, pulling back until only the dildo\'s head is still in your pussy before slowly pushing back in until her hips are flush with yours.');
      scene.text('Each thrust leaves you feeling stretched out in the best way and each withdrawal leaves you feeling empty. Heat is radiating through your hips and you\'re on the verge of literally begging for more when your hips start unconsciously thrusting back towards Albina\'s as she moves.');
      scene.text('"You seem like you\'re ready for more," Albina smiles. You moan loudly, unable to form a coherent response as she begins to roll her hips during her thrusts.');
    } else {
      scene.text('Albina is careful to keep the pace almost torturously slow, pulling back until only the dildo\'s head is still in your pussy before slowly pushing back in until her hips are flush with yours. Each thrust leaves you in a state of anxious anticipation.');
      scene.text('In... Out... In... Out... In... Out... I-<i>ohhhhh...</i>');
      scene.text('The tip of the dildo rubs against something inside you and warmth immediately blossoms between your hips. It feels so good you\'re genuinely shocked as a half gasp, half moan escapes your lips.');
      scene.text('"Starting to feel good, right?" Albina smiles. You nod back, starting to go lightheaded with pleasure as she begins to roll her hips during her thrusts.');
    }
  }
  qspCall(s, 'arousal', 'vaginal_strap', 5, ((s as any).npcID ?? 0), ((s as any).npcID1 ?? 0), 'no_orgasm_msg', 'lesbian');
  qspCall(s, 'arousal', 'vaginal_strap', (-5), ((s as any).npcID ?? 0), ((s as any).npcID1 ?? 0), 'no_orgasm_msg', 'lesbian');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', goto: ['albina_sex_scenes', 'virgin_take6'] },
  ]);
  scene.build();
}

function enterVirginTake6(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/lesbian/strapon/miss/med1.mp4');
  scene.text('Albina starts to fuck you for real, putting real effort as her hips slam down between yours. It\'s the perfect amount of force with absolutely no pain, but your insides are still getting pounded in all the right ways; building, <i>building</i>, <i><b>building</b></i> pressure inside you.');
  scene.text('With her technique, it\'s only a few minutes before-');
  scene.text('"Albina!" you gasp. "I\'m-! I\'m gonna-!"');
  qspCall(s, 'arousal', 'vaginal_strap', 5, ((s as any).npcID ?? 0), ((s as any).npcID1 ?? 0), 'no_orgasm_msg', 'lesbian');
  qspCall(s, 'arousal', 'vaginal_strap', (-5), ((s as any).npcID ?? 0), ((s as any).npcID1 ?? 0), 'no_orgasm_msg', 'lesbian');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Cum!', handler: (st: GameState) => {
    scene.img('images/shared/sex/lesbian/strapon/miss/orgasm1.mp4');
    scene.text('"<i>Ahhhhhh~!</i>"');
    scene.text('A wordless cry escapes your lips as pleasure explodes from within, releasing all the pent up pressure inside you. Albina thrusts the whole strapon inside you, keeping you filled to the brim as your pussy clenches down on it and you helplessly spasm around its length.');
    qspCall(s, 'arousal', 'vaginal_strap', 1, 'no_orgasm_msg', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['albina_sex_scenes', 'virgin_take_after1'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterVirginTakeAfter1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/lesbian/strapon/miss/kiss1.mp4');
  scene.text('Just as your climax begins to wind down, Albina leans forward and presses her lips against yours. Your body reacts on its own and you instinctively kiss her back, still quivering as post-orgasm tremors quake inside you.');
  qspCall(s, 'arousal', 'kiss', 1, 'no_orgasm_msg', 'lesbian');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Speechless', handler: (st: GameState) => {
    scene.img('images/shared/sex/lesbian/strapon/miss/after1.jpg');
    scene.text('"Albina..." you pant breathlessly. You take a ragged gulp of air, unable to say anything else.');
    scene.text('"Was it... Was it good?" she asks, suddenly strangely shy.');
    scene.actions([
      { label: 'Continue', goto: ['albina_sex_scenes', 'virgin_take_after2'] },
    ]);
  } },
    { label: '"That was incredible"', handler: (st: GameState) => {
    scene.img('images/shared/sex/lesbian/strapon/miss/after1.jpg');
    scene.text('"That was... incredible..." you pant breathlessly. You take a ragged gulp of air, unable to say anything else.');
    scene.text('"Was it... Was it good?" she asks, suddenly strangely shy.');
    scene.actions([
      { label: 'Continue', goto: ['albina_sex_scenes', 'virgin_take_after2'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterVirginTakeAfter2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/lesbian/strapon/miss/after1.jpg');
  scene.text('"\'Was it good?\'" you ask, incredulous as you look into her eyes from beneath her. "You just gave me a mind-blowing orgasm. Of course it was good!"');
  scene.text('"That\'s... That\'s good," she repeats, smiling back at you as tears well up in her eyes. "It was really important that I managed to make your first time good. I couldn\'t live with myself if it turned out... otherwise."');
  scene.text('She suddenly looks away and you get the feeling she\'s hiding something.');
  scene.actions([
    { label: 'Hug her', handler: (st: GameState) => {
    scene.text('You pull her into a hug, startling yourself as you forget it also moves the dildo inside you, but you don\'t let it stop you from pulling her tight.');
    scene.text('"You don\'t have to tell me anything," you whisper in her ear. "But thank you. This was an amazing way to lose my virginity. I couldn\'t have asked for a better first time."');
    scene.text('When you finally release her, Albina looks like she\'s about to burst into tears, but gives you a full smile.');
    scene.text('"Good," she says, wiping her eyes. "I\'m glad I was able to give you a happy memory."');
    scene.text('"We should probably do something else now..." she says with surprising shyness as you smile back at her.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['albina_sex_scenes', 'leave'] },
    ]);
  } },
    { label: 'Kiss her', handler: (st: GameState) => {
    scene.img('images/shared/sex/lesbian/strapon/miss/kiss1.mp4');
    scene.text('You pull her back into another kiss and for a few seconds you both lose yourself in each other\'s lips and bodies.');
    scene.text('"It was amazing," you say when the kiss is finally broken. "I couldn\'t have asked for a better first time."');
    scene.text('Albina smiles back at you, even though it also seems like she\'s about to burst into tears.');
    scene.text('"Good," she says, wiping her eyes. "I\'m glad I was able to give you a happy memory."');
    qspCall(s, 'arousal', 'kiss', 1, 'no_orgasm_msg', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['albina_sex_scenes', 'virgin_take_after3'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterVirginTakeAfter3(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/lesbian/strapon/miss/after1.jpg');
  scene.text('As you both share the moment, you become aware of a sudden heat growing between you. You can see it in Albina\'s eyes that she feels it too.');
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>," she says in a husky voice. "Do you think you could...?"
  scene.text(`"${((s as any).pcs_nickname ?? 0)}," she says in a husky voice. "Do you think you could...?"`);
  scene.text('You nod and without another word, both of you scramble to change places. Albina tears off the strapon and lays down, furiously rubbing her clit as you hurry to buckle it on to yourself. Finally, you manage to get it secured and without any additional foreplay, fill Albina\'s soaking wet pussy with a single thrust of the rubber cock, which is still slick with the juices of your first time.');
  scene.actions([
    { label: 'Fuck Albina', goto: ['albina_sex_scenes', 'virgin_albina_turn1'] },
  ]);
  scene.build();
}

function enterVirginAlbinaTurn1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/lesbian/strapon/miss/med1.mp4');
  scene.text('"Harder!" Albina screams at the top of her lungs and you obey, slamming your hips and the strapon into her pussy all the way to the hilt. "Yes! Just like that! Fuck my dirty little hole! Pound my pussy!"');
  scene.text('You fuck her with an unexpected desperation and it\'s only minutes before she reaches her climax.');
  qspCall(s, 'arousal', 'vaginal_strap_give', 5, ((s as any).npcID ?? 0), ((s as any).npcID1 ?? 0), 'no_orgasm_msg', 'lesbian');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/shared/sex/lesbian/strapon/miss/orgasm1.mp4');
    scene.text('"<i>Fffuuuuuuuuuckkkk~!</i> she cries as you ram the strapon into her one final time, filling her with its girth. Her voice gives out and her entire body goes taught for several seconds before falling limp.');
    scene.text('"I really needed that..." she pants with ragged breaths.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['albina_sex_scenes', 'leave'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterVirginAlbinaPillowTalkStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).AlbinaQW ?? 0)?.['virgin_fuck_albina'] === 1) {
    scene.text('You draw your hips back, watching Albina\'s pussy convulsing as the dildo slips out.');
    scene.text('"Just throw that on the floor," she says tiredly. "I\'ll clean it up later."');
    scene.text('You nod and do as she says, haphazardly tossing the harness aside before you lay down and cuddle up with your friend.');
  } else {
    scene.text('Albina draws her hips back and you let out a small moan as you feel the strapon slip out from your pussy. She pulls the harness down her legs and haphazardly kicks it off, landing in the middle of her bedroom floor before cuddling up next to you.');
  }
  scene.text('Her naked skin is hot against yours and her body is soft and squishy.');
  qspCall(s, 'albina_sex_scenes', 'virgin_albina_pillow_talk_menu');
  scene.build();
}

function enterVirginAlbinaPillowTalkMenu(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'You popped my cherry', handler: (st: GameState) => {
    if (((s as any).AlbinaQW ?? 0)?.['virgin_fuck_albina'] === 1) {
      scene.text('"So you\'re officially the one who popped my cherry," you murmur as you nuzzle into her neck. "When boys ask me if I\'m a virgin, should I tell them you\'re the one who took it?"');
    } else {
      scene.text('"So you\'re officially the one who popped my cherry," you murmur as you nuzzle into her neck. Your eyes flick to the strapon that still has the blood of your virginity running down its shaft. "When boys ask me if I\'m a virgin, should I tell them you\'re the one who took it?"');
    }
    qspCall(s, 'albina_sex_scenes', 'virgin_albina_pillow_talk_menu');
  } },
    { label: 'You\'re really good at fucking', handler: (st: GameState) => {
    if (((s as any).AlbinaQW ?? 0)?.['virgin_fuck_albina'] === 1) {
      scene.text('"You\'re really good at using that strapon," you murmur as you nuzzle into her neck. "You practice that with other girls a lot or something?"');
    } else {
      scene.text('"You\'re really good at using that strapon," you murmur as you nuzzle into her neck. Your eyes flick to the rubber cock on the floor that still has the blood of your virginity running down its shaft. "You practice that with other girls a lot or something?"');
    }
    scene.text('"What? No!" She turns away, blushing fiercely. "Besides, how would you know if I\'m good or not? You were a virgin up until ten minutes ago."');
    scene.text('"You made a virgin cum," you reply. "Isn\'t that supposed to be kind of hard?"');
    if (((s as any).AlbinaQW ?? 0)?.['virgin_fuck_albina'] === 1) {
      scene.text('"You made me cum even though you\'ve never fucked <i>anybody</i> before," she counters. "That sounds <i>much</i> more impressive."');
    } else {
      scene.text('She bites her lip and remains silent, unable to come up with a suitable counter-argument.');
    }
    qspCall(s, 'albina_sex_scenes', 'virgin_albina_pillow_talk_menu');
  } },
    { label: 'Do real cocks feel different?', handler: (st: GameState) => {
    if (((s as any).AlbinaQW ?? 0)?.['virgin_fuck_albina'] === 1) {
      scene.text('"So... Does it feel different to get fucked by a real cock?" you ask, eyeing the strapon on the floor that has both of your juices running down its shaft.');
    } else {
      scene.text('"So... Does it feel different to get fucked by a real cock?" you ask, eyeing the strapon on the floor that still has the blood of your virginity running down its shaft.');
    }
    scene.text('"Yeah. Big difference," she smiles back. "It\'s <i>hot</i>. Like physically hot inside you."');
    scene.text('"Really? You can feel that?"');
    scene.text('She nods. "I would have warmed the dildo up for you, but it takes a while and water is a pretty shitty lubricant. The other thing is that it\'s actually harder."');
    scene.text('"The dildo is harder?"');
    scene.text('"No. I mean cock," she grins. "You\'d think that a rubber toy would be harder than flesh and blood, but cock is actually way more rigid. When Lazar fucks me and he changes angles, I feel his <i>whole length</i> turn, but the dildo kind of bends and curves."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('Her smile suddenly falters. "I\'m sorry that I took your fi-"');
    scene.text('"Stop," you cut her off. "I\'m glad you took my virginity. And now you\'ll always have it."');
    scene.text('You wink at her and she can\'t help but give a shy laugh.');
    qspCall(s, 'albina_sex_scenes', 'virgin_albina_pillow_talk_menu');
  } },
    ]);
  } },
    { label: '"Why are you crying?"', handler: (st: GameState) => {
    scene.text('"Albina... Why are you crying?" you ask in a whisper as a tear rolls down the side of her cheek.');
    scene.text('"It\'s nothing," she says flatly, wiping it away with the heel of her hand but you don\'t let it go.');
    scene.text('"Albina... You can tell me."');
    scene.text('She takes a deep breath and lets it out slowly. When she finally speaks, she barely manages to get the words out in a choked voice.');
    scene.text('"Doing this with you brings back... memories. My first time was... let\'s just say it wasn\'t good. I won\'t say more than that, but I want you to know that it makes me really happy I could make your\'s special."');
    qspCall(s, 'albina_sex_scenes', 'virgin_albina_pillow_talk_menu');
  } },
    { label: 'Finish', goto: ['albina_sex_scenes', 'leave'] },
  ]);
  scene.build();
}

function enterSexEvent1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/lesbian/kiss2.mp4');
  scene.text('You find yourself on top of Albina, your hips between her legs and your breasts smooshed against hers as her hands hungrily grope your ass and your tongues tango with one another, swapping saliva.');
  scene.build();
}

function enterWearStrapon(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A23');
  scene.img('images/characters/pavlovsk/school/girl/albina/sex/game/spank.mp4');
  if (((s as any).spellKnown ?? 0)?.['penisenvy'] === 0  ||  ((s as any).mc_inventory ?? 0)?.['strapon'] === 0  ||  ((s as any).strapNumber ?? 0) <= 0) {
    qspCall(s, 'npcStat', 'D3', 'a');
    // TODO-QSP: dynamic text: You slide the harness on and tighten it in place, but before you can begin, Albi...
    scene.text(`You slide the harness on and tighten it in place, but before you can begin, Albina smirks at you while wiggling her ass. "I need to be punished for losing first. Spank me, ${((s as any).pcs_nickname ?? 0)}, and don't stop until my pussy is wet and my ass is red and stinging!"`);
    // TODO-QSP: dynamic text: She pushes you down onto the bed and lays across your lap before looking up at y...
    scene.text(`She pushes you down onto the bed and lays across your lap before looking up at you. "Don't make me beg, ${((s as any).pcs_nickname ?? 0)}."`);
    scene.text('You smile at her before raising your hand and giving her a firm smack on the ass. "Harder!" she blurts out, and you respond by delivering a hard smack that leaves both her ass and your hand red and stinging. "Oh FUCK, <i>yeeesss</i>! Do that again!" she moans in an almost orgasmic tone.');
    scene.text('You continue spanking her as hard as you can until the stinging in your hand becomes too much and you have to stop. She smiles up at you in satisfaction and you feel her juices trickling down your leg as she climbs off you. You stand to adjust the harness around your hips.');
    qspCall(s, 'arousal', 'BDSM_give', 8, 'dom', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Fuck her with the strapon', goto: ['albina_sex_scenes', 'fuck_albina'] },
    ]);
  } else {
    qspCall(s, 'npcStat', 'D<<strapNumber>>', 'a');
    scene.text('Just as you\'re about to slide the harness on, the thought of using Penis Envy occurs to you, but it would be too suspicious to use Albina\'s dildo.');
    scene.text('"Do you mind if we use my dildo instead?" you ask, and seeing the curious look in her eye, you continue. "My dildo has fake cum and I think it would be fun to use it."');
    scene.text('"Fake cum?" she replies curiously. "Okay, that does sound fun."');
    scene.text('You nod as you grab your own strapon out of your purse, pleased that she bought it.');
    // TODO-QSP: dynamic text: You slide your harness on and tighten it in place, but before you can begin, Alb...
    scene.text(`You slide your harness on and tighten it in place, but before you can begin, Albina smirks at you while wiggling her ass. "I need to be punished for losing first. Spank me, ${((s as any).pcs_nickname ?? 0)}, and don't stop until my pussy is wet and my ass is red and stinging!"`);
    // TODO-QSP: dynamic text: She pushes you down onto the bed and lays across your lap before looking up at y...
    scene.text(`She pushes you down onto the bed and lays across your lap before looking up at you. "Don't make me beg, ${((s as any).pcs_nickname ?? 0)}."`);
    scene.text('You smile at her before raising your hand and giving her a firm smack on the ass. "Harder!" she blurts out, and you respond by delivering a hard smack that leaves both her ass and your hand red and stinging. "Oh FUCK, <i>yeeesss</i>! Do that again!" she moans in an almost orgasmic tone.');
    scene.text('You continue spanking her as hard as you can until the stinging in your hand becomes too much and you have to stop. She smiles up at you in satisfaction and you feel her juices trickling down your leg as she climbs off you. You stand to adjust the harness around your hips.');
    qspCall(s, 'arousal', 'BDSM_give', 8, 'dom', 'lesbian');
    qspCall(s, 'stat', '');
    if (((s as any).penisEnvyVariable ?? 0)) {
      scene.actions([
        { label: 'Get your dick sucked', goto: ['albina_sex_scenes', 'fuck_albina_magic'] },
      ]);
    } else {
      scene.actions([
        { label: 'Cast Penis Envy', handler: (st: GameState) => {
    qspCall(s, 'castSpell', 'penisenvy');
    if (((s as any).spellSuccess ?? 0) > 0) {
      scene.actions([
        { label: 'Get your dick sucked', goto: ['albina_sex_scenes', 'fuck_albina_magic'] },
      ]);
    } else {
      scene.text('You cast the spell, but it fails to take effect.');
      // TODO-QSP: dynamic text: "You okay, <<$pcs_nickname>>?" Albina asks with a curious gaze.
      scene.text(`"You okay, ${((s as any).pcs_nickname ?? 0)}?" Albina asks with a curious gaze.`);
      scene.text('"Yeah, I just realized that this is the wrong dildo," you reply.');
      scene.text('"That\'s okay. I just want you to fuck me silly, with or without cum."');
      scene.text('You nod, but can\'t help but feel disappointed.');
      scene.actions([
        { label: 'Just use the strapon', goto: ['albina_sex_scenes', 'fuck_albina'] },
      ]);
    }
  } },
      ]);
    }
  }
  scene.build();
}

function enterFuckAlbina(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A23');
  ((s as any).npc_had_sex ?? {})['A23'] = 1;
  ((s as any).stat ?? {})['lesbian_count'] = (((s as any).stat ?? {})['lesbian_count'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/albina/sex/game/bj.jpg');
  scene.text('With the strapon firmly in place, you stand next to the bed and hold the huge dildo in place as you pull her head down. "Suck my dick, loser!" you giggle.');
  scene.text('She laughs before she takes the dildo into her mouth and starts sucking while stroking the shaft with one hand. You spend several minutes making her suck and gag on it, getting it wet with the drool that drips from her mouth.');
  qspCall(s, 'arousal', 'foreplay', 2, 'lesbian');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Fuck her pussy', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'D4');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/game/givevag.jpg');
    scene.text('You pull away until the dildo slides out of her mouth, climb onto the bed next to her and lie on your back. "Come and ride it, cowgirl!" you laugh as you grasp the huge dildo in your hand.');
    scene.text('She straddles you and lowers herself down until the dildo easily slides inside her wet pussy, causing her to moan in pleasure. She starts slowly riding you, but gradually picks up speed, moaning louder as she does.');
    qspCall(s, 'arousal', 'vaginal_strap_give', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Fuck her faster', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/game/givevag.jpg');
    scene.text('You slap her on the ass. "Come on, Albina! Ride it like you mean it!"');
    scene.text('With your encouragement, she starts really riding you hard and fast, her ass slapping against your thighs as she takes almost the entire length of the dildo inside her pussy.');
    scene.text('She rides you for several minutes before she slides off the dildo, which glistens with her juices, and flops down on the bed next to you. She looks at you with an appreciative smile before she leans over and whispers in your ear.');
    scene.text('"I want you to fuck my ass now..."');
    scene.text('You grin as she giggles and gets on all fours to wiggle her bubble butt at you.');
    qspCall(s, 'arousal', 'vaginal_strap_give', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Fuck her ass', goto: ['albina_sex_scenes', 'fuck_albina_ass'] },
    ]);
  } },
    ]);
  } },
    { label: 'Fuck her ass', goto: ['albina_sex_scenes', 'fuck_albina_ass'] },
  ]);
  scene.build();
}

function enterFuckAlbinaMagic(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_had_sex ?? {})['A23'] = 1;
  ((s as any).stat ?? {})['lesbian_count'] = (((s as any).stat ?? {})['lesbian_count'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/albina/sex/game/bj.jpg');
  if (((s as any).dick_width1 ?? 0) >= 14) {
    // TODO-QSP: dynamic text: Albina stares in bewilderment at the monstrous dildo hanging from your harness. ...
    scene.text(`Albina stares in bewilderment at the monstrous dildo hanging from your harness. "You're not being serious, ${((s as any).pcs_nickname ?? 0)}."`);
    scene.text('"Why not?" you grin as you shake your hips, causing the dildo to swing between your legs.');
    scene.text('"Because that thing\'s as big as a fucking horse! It would never fit inside me!"');
    scene.text('You sigh as you look down at the dildo. She\'s right. It\'s way too big.');
    scene.text('"Yeah, you\'re right. I don\'t know what I was thinking," you say, a little disappointed as you unbuckle the harness and slide it down your legs.');
    scene.text('Albina smiles. "Get a fancy cum shooting dildo that won\'t rip my pussy in two and you can try again."');
    scene.text('You just nod as you put the harness away.');
    return;
    scene.actions([
      { label: 'Do something else', goto: ['albina_sex_scenes', 'leave'] },
    ]);
  }
  if (((s as any).dick_width1 ?? 0) === 13) {
    scene.text('Albina bites her lip as she gazes at the enormous dildo hanging from your harness. "Fuck, it\'s even bigger than the one I was going to use!"');
    scene.text('You give the dildo a few strokes and smile as you feel your hand wrapping around the huge shaft. You then stand next to the bed and grasp your huge dick in your hand as you pull Albina\'s head down. "Suck my big dick, loser!" you giggle.');
    scene.text('You gasp when you feel her soft lips wrap around your dick and she starts sucking. She has some serious skill and you find yourself moaning softly, especially when she swirls her tongue around the head of your dick.');
    scene.text('You spend several minutes making her suck and gag on it, getting it wet with the drool that drips from her mouth.');
  } else {
    if (((s as any).dick_width1 ?? 0) >= 11) {
      scene.text('Albina watches you securing the harness in place while gazing at the dildo. "Nice cock," she giggles.');
      scene.text('You give the dildo a few strokes and smile as you feel your hand wrapping around the shaft. You then stand next to the bed and pull Albina\'s head down. "Suck my dick, loser!" you giggle.');
      scene.text('You gasp when you feel her soft lips wrap around your dick and she starts sucking. She has some serious skill and you find yourself moaning softly, especially when she swirls her tongue around the head of your dick.');
      scene.text('You spend several minutes making her suck and gag on it, getting it wet with the drool that drips from her mouth.');
    } else {
      scene.text('Albina pouts as she watches you securing the harness. "It\'s a little on the small side, don\'t you think?"');
      scene.text('"You\'ve been fucking Lazar too much," you smile and she just giggles.');
      scene.text('You give the dildo a few strokes and smile as you feel your hand wrapping around the shaft. You then stand next to the bed and pull Albina\'s head down. "Suck my dick, loser!" you giggle.');
      scene.text('You gasp when you feel her soft lips wrap around your dick and she starts sucking. Despite her earlier complaints, she passionately sucks your dick and you find yourself moaning softly, especially when she swallows your entire shaft and takes it down her throat. You spend several minutes making her suck and gag on your dick, getting it wet with the drool that drips from her mouth.');
    }
  }
  qspCall(s, 'arousal', 'magicd_bj', 2);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Fuck her pussy', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/game/givevag.jpg');
    scene.text('You pull away until your dick slides out of her mouth, climb onto the bed next to her and lie on your back. "Come and ride it, cowgirl!" you laugh.');
    if (((s as any).dick_width1 ?? 0) >= 11) {
      scene.text('She straddles you and lowers herself down until your dick slides inside her wet pussy, causing you both to moan in pleasure as you feel the head parting her lips and pushing its way inside her. She looks down at you suspiciously and you hold in another moan as you feel her pussy clenching around your shaft, so you quickly smack her on the ass. "I said ride it, cowgirl!"');
      scene.text('She starts riding you slowly, but gradually picks up speed, moaning louder as she does. Soft moans escape your lips when the sensation overwhelms you, but Albina is too busy riding you to notice. Her pussy is <i>tight</i> and fucking her is one of the best feelings you\'ve ever experienced.');
    } else {
      scene.text('She straddles you and lowers herself down until your dick slides inside her wet pussy, causing you both to moan in pleasure as you feel the head parting her lips and pushing its way inside her. She looks down at you suspiciously and you hold in another moan as you feel her pussy clenching around your shaft, so you quickly smack her on the ass. "I said ride it, cowgirl!"');
      scene.text('"Ride what?" she smirks. "You brought a less than impressive dildo."');
      scene.text('"Shut up!" you reply. "Just because I don\'t have a huge cock like Lazar doesn\'t mean I can\'t fuck you silly!"');
      scene.text('She looks you dead in the eye. "Then prove it," she says before she starts riding you hard, her pussy continuing to squeeze around your cock.');
    }
    qspCall(s, 'arousal', 'magicd_vaginal', 3, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Change position', handler: (st: GameState) => {
    scene.img('images/shared/sex/lesbian/strapon/miss/med1.mp4');
    if (((s as any).dick_width1 ?? 0) >= 11) {
      scene.text('Growing tired, Albina flops down onto the bed next to you, your shaft glistening with her juices.');
      scene.text('You waste no time and immediately scramble up onto your knees before spreading her legs and eagerly shoving your cock back inside her pussy.');
      // TODO-QSP: dynamic text: "Yes, fuck my tight little pussy, <<$pcs_nickname>>!" she cries out as you feel ...
      scene.text(`"Yes, fuck my tight little pussy, ${((s as any).pcs_nickname ?? 0)}!" she cries out as you feel her clenching around you.`);
      scene.text('You start thrusting and spend the next few minutes fucking her before you feel a tingling sensation in your stomach and a pressure building within your dick. You\'re about to cum!');
    } else {
      scene.text('Seemingly bored with riding what she considers your lackluster cock, Albina climbs off of you before flopping down on the bed and spreading her legs.');
      scene.text('"You said you would fuck me silly, so here\'s your chance to prove it," she grins and spreads her pussy lips, exposing her tight hole to you.');
      scene.text('You waste no time and immediately scramble up onto your knees before spreading her legs and eagerly shoving your cock back inside her pussy.');
      scene.text('You start thrusting and spend the next few minutes fucking her before you feel a tingling sensation in your stomach and a pressure building within your dick. You\'re about to cum!');
    }
    qspCall(s, 'arousal', 'magicd_vaginal', 3, 'dom');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'cum_outside', 'self', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Pull out [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Pull out [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/lesbian/strapon/miss/orgasm1.mp4');
    scene.text('You thrust fast and deep into Albina\'s wet pussy and she cries out loudly in pleasure as you sense your magic starting to take hold of her mind.');
    scene.text('It only takes a few more seconds before Albina has an explosive orgasm; you feel her pussy tighten around your cock and she cries out as a stream of her juices squirt from her pussy and splash over the two of you before she grows weak and lies back on the bed, panting loudly in satisfaction as you keep pounding her.');
    qspCall(s, 'arousal', 'magicd_vaginal', 2, 'dom');
    scene.text('You flop down next to her and you both lie panting in post-orgasmic bliss before your magic wears off and Albina gathers enough strength to drag herself into her en-suite bathroom to clean herself up. You slide the harness off and clean the dildo before putting it away and getting dressed. Albina soon returns and dresses in fresh clothes.');
    scene.text('"That was one of the best fucks I\'ve ever had! I can\'t remember the last time I came so hard!" she smiles. "We should do it again sometime."');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', goto: ['albina_sex_scenes', 'leave'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Cum inside her', handler: (st: GameState) => {
    scene.img('images/shared/sex/lesbian/strapon/miss/orgasm1.mp4');
    scene.text('You thrust fast and deep into Albina\'s pussy and she cries out loudly in pleasure as you sense your magic starting to take hold of her mind.');
    scene.text('It only takes a few more seconds before Albina has an explosive orgasm; you feel her pussy tighten around your cock and she cries out as a stream of her juices squirts from her pussy and splashes over the two of you before she grows weak and lies back on the bed, panting loudly in satisfaction as you keep pounding her.');
    qspCall(s, 'arousal', 'magicd_vaginal', 2, 'dom');
    scene.text('You pull out and flop down next to her as you both lie panting in post-orgasmic bliss before your magic wears off and Albina gathers enough strength to drag herself into her en-suite bathroom to clean herself up. You slide the harness off and clean the dildo before putting it away and getting dressed. Albina soon returns and dresses in fresh clothes.');
    scene.text('"That was one of the best fucks I\'ve ever had! I can\'t remember the last time I came so hard!" she smiles. "I might even forgive you for blowing your load inside me."');
    scene.text('"Sorry about that..." you sheepishly grin. "I guess I got a little carried away there."');
    scene.text('"It\'s fine," she shrugs. "It\'s not like you can get me pregnant or anything, but a little warning next time would be nice."');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', goto: ['albina_sex_scenes', 'leave'] },
    ]);
  } },
    ]);
  } },
      { label: 'Fuck her ass', goto: ['albina_sex_scenes', 'fuck_albina_ass_magic'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterFuckAlbinaAss(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_had_sex ?? {})['A23'] = 1;
  ((s as any).stat ?? {})['lesbian_count'] = (((s as any).stat ?? {})['lesbian_count'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/albina/sex/game/anal1.jpg');
  scene.text('You grab the bottle of lube and squirt some onto the dildo, rubbing it up and down the shaft before spreading her ass cheeks and applying a generous amount onto her asshole. You grab her ass in your hand and appreciate how firm it feels in your grip.');
  scene.text('"Like what you see?" she giggles as you kneel down behind her, line the head of the huge dildo up with her asshole and slowly push forward. There\'s little resistance, and the huge dildo slides into her ass easily, causing her to moan as you slowly push deeper. You look down and watch the dildo disappearing between her ass cheeks as you start thrusting.');
  scene.text('You wonder what guys would do to be in your position as you continue fucking her ass. After a few minutes, you pull out of her and she looks back over her shoulder at you.');
  qspCall(s, 'arousal', 'anal_strap_give', 3, 'lesbian');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Keep fucking her ass', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/game/anal2.jpg');
    // TODO-QSP: dynamic text: "Come on, <<$pcs_nickname>>. Put it back in and fuck me... hard," she says while...
    scene.text(`"Come on, ${((s as any).pcs_nickname ?? 0)}. Put it back in and fuck me... hard," she says while wiggling her hips. You smile at her and slide the dildo back into her hole with ease, making her moan in pleasure. Next, you grab onto her hips and start fucking her balls deep, slamming almost the full length of the massive dildo up her ass as she reaches back and starts rubbing her clit.`);
    scene.text('After several minutes, you start feeling resistance as her ass tightens around your fake cock. Seconds later, she cries out and her body is rocked by an intense orgasm as juices squirt from her pussy, soaking the sheets beneath her. You keep fucking her throughout her orgasm, only pulling out once her shudders have passed.');
    scene.text('After you\'ve pulled out, she thrusts her fingers into her gaping hole as juices leak from her pussy. "That was fucking amazing!" she says as she pulls her fingers out of her ass and sucks on them.');
    scene.text('"Fucking such a nice-looking ass was amazing!" you reply, and you both laugh.');
    qspCall(s, 'arousal', 'anal_strap_give', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', goto: ['albina_sex_scenes', 'strapon_finish'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterFuckAlbinaAssMagic(s: GameState, scene: SceneBuilder): void {
  ((s as any).stat ?? {})['lesbian_count'] = (((s as any).stat ?? {})['lesbian_count'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/albina/sex/game/anal1.jpg');
  if (((s as any).dick_width1 ?? 0) >= 11) {
    scene.text('You grab the bottle of lube and feel the cold liquid squirting onto the shaft before you rub it in, making it very slick. You then spread Albina\'s ass cheeks and apply a generous amount to her asshole. You grab her ass in your hand and appreciate how firm it feels in your grip.');
    scene.text('"Like what you see?" she giggles as you line the tip of your dick up with her asshole and slowly push forward. There\'s little resistance and you feel your dick slowly slide up her ass, causing you both to moan softly as you feel her clenching tightly around your shaft.');
    scene.text('You wonder what guys would do to be in your position as you start fucking her ass, feeling her asshole gradually loosening up as you fuck her faster and deeper. The sensation is extremely pleasurable and you force yourself to pull out of her before you blow your load.');
  } else {
    scene.text('You grab the bottle of lube and feel the cold liquid squirting onto the shaft before you rub it in, making it very slick. You then spread Albina\'s ass cheeks and apply a generous amount to her asshole. You grab her ass in your hand and appreciate how firm it feels in your grip.');
    scene.text('"You\'ll really need to fuck me properly with that thing," she teases, but you silence her with a swift smack on the ass before you line the tip of your dick up with her asshole and slowly push forward. There\'s almost no resistance and your dick easily slides up her ass, causing you both to moan softly as you feel her clenching around your shaft.');
    scene.text('You wonder what guys would do to be in your position as you start fucking her ass, her asshole easily accommodating your size and loosening up as you fuck her faster and deeper. The sensation is extremely pleasurable and you force yourself to pull out of her before you blow your load.');
  }
  qspCall(s, 'arousal', 'magicd_anal', 3);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Keep fucking her ass', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/game/anal2.jpg');
    // TODO-QSP: dynamic text: "Come on, <<$pcs_nickname>>. Put it back in and fuck me," she says while wigglin...
    scene.text(`"Come on, ${((s as any).pcs_nickname ?? 0)}. Put it back in and fuck me," she says while wiggling her hips, her slightly stretched asshole proving a rather teasing sight.`);
    scene.text('You smile at her and slide your dick back into her asshole, making her moan in pleasure as the sensation of penetrating her tight ass once again washes over you. You then grab onto her hips and start fucking her balls deep, filling her ass with your dick as she reaches back and starts rubbing her clit.');
    scene.text('After several minutes, you feel her ass tighten around your dick and she cries out as her body is rocked by an intense orgasm and juices squirt from her pussy, soaking the sheets beneath her. You keep fucking her throughout her orgasm, the added tightness of her asshole pushing you to your own orgasm.');
    scene.text('"Fuck, I\'m gonna cum!" you cry out as you feel the need to release building within you.');
    scene.text('"Do it!" she cries out. "Cum in my tight little ass!"');
    qspCall(s, 'arousal', 'magicd_anal', 3, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Cum in her ass', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/analcreampie/doggy_drip1.mp4');
    scene.text('You pick up the pace as you continue fucking Albina, pounding her ass as she rides out her orgasm beneath you. You feel your magic slowly overwhelming her mind.');
    qspCall(s, 'arousal', 'magicd_anal', 2, 'dom');
    scene.text('Once you\'re done, you pull out of her and watch as your cum starts leaking out of her asshole and dribbling down her pussy.');
    scene.text('As your magic wears off, Albina reaches up and fingers her asshole, your cum stuck to her fingers when she pulls them out. She sucks them clean before rolling off the bed and slowly stumbling into her en-suite bathroom.');
    scene.text('You slide the harness off and clean the dildo before getting dressed. Albina soon returns and dresses in fresh clothes.');
    scene.text('That was fun," she smiles. "We should do it again sometime."');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', goto: ['albina_sex_scenes', 'leave'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterReceiveStrapon(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'D3', 'a');
  ((s as any).stat ?? {})['lesbian_count'] = (((s as any).stat ?? {})['lesbian_count'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  if (((s as any).stat ?? 0)?.['bj'] === 0) {
    ((s as any).stat ?? {})['bj'] = (((s as any).stat ?? {})['bj'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/game/bj.jpg');
    // TODO-QSP: dynamic text: Albina notices you staring at the dildo as she tightens the straps firmly around...
    scene.text(`Albina notices you staring at the dildo as she tightens the straps firmly around her hips. "You okay, ${((s as any).pcs_nickname ?? 0)}?"`);
    scene.text('"Yeah, it\'s just..." you start to answer.');
    scene.text('"You\'ve never sucked dick before, have you?" she interrupts with a smile. "It\'s okay. I can show you what to do so you\'re ready for the real thing." She sits back on the bed and spreads her legs, motioning for you to crawl between them.');
    scene.text('"Okay, first thing\'s first. You\'ll want to start off with a handjob. It gets them in the mood and wanting more," she explains as she takes your hand and places it on the dildo. "Take a firm grip of the shaft, but not too tight, and start moving your hand up and down."');
    // TODO-QSP: dynamic text: You follow her instructions and slowly run your hand up and down the dildo. "Tha...
    scene.text(`You follow her instructions and slowly run your hand up and down the dildo. "That's it, ${((s as any).pcs_nickname ?? 0)}. Just keep doing that. If you feel like it, you can also lick the shaft or suck on their balls while jerking them off. They like it when you tease them like that."`);
    // TODO-QSP: dynamic text: After a few minutes, Albina moves on with her lesson. "Okay <<$pcs_nickname>>, y...
    scene.text(`After a few minutes, Albina moves on with her lesson. "Okay ${((s as any).pcs_nickname ?? 0)}, you ready?" she asks and you nod your head. "Okay. Start off with a little teasing. Run your tongue around the tip while jerking them off."`);
    // TODO-QSP: dynamic text: You do as she says and she makes you look up at her. "Eye contact, <<$pcs_nickna...
    scene.text(`You do as she says and she makes you look up at her. "Eye contact, ${((s as any).pcs_nickname ?? 0)}. They like that." You nod at her and look her in the eye as you continue jerking off her fake cock. "Good. Now some guys like taking control, but only let them do that if it's what you want. That's enough teasing anyway. Now I want you take as much of the shaft into your mouth as you can."`);
    scene.text('You obdiently take as much of the dildo into your mouth as you can without choking. "Good," Albina says. "Now start bobbing your head up and down; imagine that you\'re sucking on a popsicle while swirling your tongue around the head. And keep using your hand."');
    // TODO-QSP: dynamic text: You spend the next few minutes practicing on the dildo until your arm and jaw st...
    scene.text(`You spend the next few minutes practicing on the dildo until your arm and jaw start to ache and you stop. You pop the dildo out of your mouth and look up at Albina, who smiles. "You're a natural, ${((s as any).pcs_nickname ?? 0)}! If I had a dick, then my cum would be all over your face by now."`);
    scene.text('You smile at the compliment. "Time for me to fuck you now," Albina says with a grin.');
    qspCall(s, 'arousal', 'foreplay', 2, 'lesbian');
    qspCall(s, 'stat', '');
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([
        { label: 'You\'re a virgin', goto: ['albina_sex_scenes', 'albina_fucks_you_virgin'] },
      ]);
    } else {
      scene.actions([
        { label: 'Get your pussy fucked', goto: ['albina_sex_scenes', 'albina_fucks_you'] },
      ]);
    }
  } else {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/game/bj.jpg');
    scene.text('You slide your panties off as she tightens the strapon firmly while standing next to the bed. You lie next to her, and she pulls your head down to the dildo. "Suck my dick, loser!" she says with a giggle.');
    // TODO-QSP: dynamic text: You take the dildo into your mouth and start sucking on it while stroking the sh...
    scene.text(`You take the dildo into your mouth and start sucking on it while stroking the shaft with one hand. "Yeah, just like that, ${((s as any).pcs_nickname ?? 0)}..." she moans as she reaches between the straps and gently rubs her pussy. You spend several minutes sucking on the dildo, getting it wet with your drool before she pulls it out of your mouth. "I'm so going to enjoy fucking you!"`);
    qspCall(s, 'arousal', 'foreplay', 2, 'lesbian');
    qspCall(s, 'stat', '');
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([
        { label: 'You\'re a virgin', goto: ['albina_sex_scenes', 'albina_fucks_you_virgin'] },
      ]);
    } else {
      scene.actions([
        { label: 'Get your pussy fucked', goto: ['albina_sex_scenes', 'albina_fucks_you'] },
      ]);
    }
  }
  scene.build();
}

function enterAlbinaFucksYou(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_had_sex ?? {})['A23'] = 1;
  ((s as any).stat ?? {})['lesbian_count'] = (((s as any).stat ?? {})['lesbian_count'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/albina/sex/game/getvag1.jpg');
  scene.text('"Lie on your back and spread your legs."');
  scene.text('You do as she commands, and she climbs onto the bed and scoots between your legs, rubbing the head of the dildo against your pussy before she pushes it inside you.');
  scene.text('You moan as she slowly starts fucking your pussy, going a little faster the louder you moan.');
  qspCall(s, 'arousal', 'vaginal_strap', 3, ((s as any).npcID ?? 0), ((s as any).npcID1 ?? 0), 'lesbian');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Keep getting your pussy fucked', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/game/getvag2.jpg');
    scene.text('She proceeds to fuck you hard, but not too hard, settling into a near-perfect thrusting rhythm that you enjoy, feeling yourself slowly getting wetter. She seems to enjoy it as much as you, moaning softly as she fucks you. Finally, she leans in and kisses you before suddenly stopping and pulling out. "Okay, that\'s enough, but I\'m not finished with you just yet. Roll over so I can fuck that tight little ass of yours."');
    qspCall(s, 'arousal', 'vaginal_strap', 7, ((s as any).npcID ?? 0), ((s as any).npcID1 ?? 0), 'lesbian');
    qspCall(s, 'stat', '');
    if (((s as any).stat ?? 0)?.['anal'] > 0  ||  ((s as any).stat ?? 0)?.['anal_strap'] > 0) {
      scene.actions([
        { label: 'Get your ass fucked', goto: ['albina_sex_scenes', 'albina_ass_fucks_you'] },
      ]);
    } else {
      if (((s as any).stat ?? 0)?.['anal_dildo'] === 0  &&  ((s as any).stat ?? 0)?.['anal_fist'] === 0  &&  ((s as any).stat ?? 0)?.['self_fisting_anal'] === 0) {
        scene.actions([
          { label: 'Anal virgin', goto: ['albina_sex_scenes', 'albina_ass_fucks_you_anal_virgin'] },
        ]);
      } else {
        if (((s as any).stat ?? 0)?.['anal_fist'] === 0  &&  ((s as any).stat ?? 0)?.['self_fisting_anal'] === 0) {
          scene.actions([
            { label: 'Only a dildo', goto: ['albina_sex_scenes', 'albina_ass_fucks_you_only_dildo'] },
          ]);
        } else {
          scene.actions([
            { label: 'Only a fist', goto: ['albina_sex_scenes', 'albina_ass_fucks_you_only_fist'] },
          ]);
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterAlbinaFucksYouVirgin(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/albina/sex/game/bj.jpg');
  scene.text('You blush deeply, and she looks at you. "Oh, right. You haven\'t done this before," she says, remembering that you\'re still pure.');
  scene.text('You blush even more. "Yes, I\'m... still a virgin..." you reply.');
  scene.text('"Well, I can just fuck your ass if you want?" She then gives you a small smile. "Unless you want me to pop your cherry?"');
  scene.actions([
    { label: 'Just fuck my ass', handler: (st: GameState) => {
    if (((s as any).stat ?? 0)?.['anal'] > 0  ||  ((s as any).stat ?? 0)?.['anal_strap'] > 0) {
      scene.actions([
        { label: 'Get your ass fucked', goto: ['albina_sex_scenes', 'albina_ass_fucks_you'] },
      ]);
    } else {
      if (((s as any).stat ?? 0)?.['anal_dildo'] === 0  &&  ((s as any).stat ?? 0)?.['anal_fist'] === 0  &&  ((s as any).stat ?? 0)?.['self_fisting_anal'] === 0) {
        scene.actions([
          { label: 'Anal virgin', goto: ['albina_sex_scenes', 'albina_ass_fucks_you_anal_virgin'] },
        ]);
      } else {
        if (((s as any).stat ?? 0)?.['anal_fist'] === 0  &&  ((s as any).stat ?? 0)?.['self_fisting_anal'] === 0) {
          scene.actions([
            { label: 'Only a dildo', goto: ['albina_sex_scenes', 'albina_ass_fucks_you_only_dildo'] },
          ]);
        } else {
          scene.actions([
            { label: 'Only a fist', goto: ['albina_sex_scenes', 'albina_ass_fucks_you_only_fist'] },
          ]);
        }
      }
    }
  } },
    { label: 'Get your cherry popped', handler: (st: GameState) => {
    ((s as any).npc_had_sex ?? {})['A23'] = 1;
    ((s as any).stat ?? {})['lesbian_count'] = (((s as any).stat ?? {})['lesbian_count'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/game/getvag1.jpg');
    scene.text('You give her an awkward smile in return. "I... I want you to... take me. My... virginity that is..." you tell her as your cheeks burn bright red.');
    scene.text('She smiles back. "Okay, don\'t worry. I\'ll be gentle since it\'s your first time. Just lie on your back and spread your legs." You do as she commands, and she climbs onto the bed and scoots between your legs. She rubs your pussy with her fingers to make sure it\'s wet enough but adds some lube to the dildo anyway. You feel it rubbing against your slit before she slowly slides it into your virgin pussy.');
    scene.text('It\'s both painful and pleasurable, and you moan softly as she starts to fuck you. After a few minutes, it starts to hurt less, and you find yourself moaning louder.');
    scene.text('After a few more minutes, Albina starts growing tired and pulls out, leaving you empty. "So how was that for your first time?" she asks with a smile.');
    scene.text('"It was amazing! I\'m glad it was you I shared it with. You were so gentle and considerate," you reply, and Albina smiles even wider.');
    scene.text('"I couldn\'t have your first time being a shitty experience like mine..." she replies, but gasps and looks away when she realises what she said.');
    scene.text('You quickly sit up next to her and give her a hug. "Hey, it\'s okay. This was the best thing I could hope for when losing my virginity."');
    scene.text('She looks at you as tears well up in her eyes, the memories of a traumatic event flooding her. "Really? I wanted it to be good for you because-"');
    scene.text('You can see this is a painful memory for her, and pull her into another hug. "I know..." you gently reassure her, and you both sit silently for a few minutes. Finally, she gets up, takes the harness off, cleans the dildo and tosses it back in the drawer.');
    scene.text('"This is supposed to be your happy memory, and I don\'t want to ruin it for you. So let\'s do something fun!" She clearly needs a distraction, so you nod in agreement.');
    qspCall(s, 'arousal', 'vaginal_strap', 5, ((s as any).npcID ?? 0), ((s as any).npcID1 ?? 0), 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', goto: ['albina_sex_scenes', 'leave'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAlbinaAssFucksYou(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_had_sex ?? {})['A23'] = 1;
  ((s as any).stat ?? {})['lesbian_count'] = (((s as any).stat ?? {})['lesbian_count'] ?? 0) + (1);
  scene.img('images/characters/pavlovsk/school/girl/albina/sex/game/anal1.jpg');
  scene.text('As you get on all fours, you glance back and see her applying lube to the dildo. She squirts some on the dildo and strokes the shaft with it before she massages a generous amount into your asshole with her fingers. You and the dildo now lubed up, she moves behind you, and you feel the dildo pressing against your asshole, the pressure building until the tip pops into your ass, causing you to groan slightly in pain. Next, she slowly slips the dildo up your ass, steadily working it deeper.');
  qspCall(s, 'arousal', 'anal_strap', 2, ((s as any).npcID ?? 0), ((s as any).npcID1 ?? 0), 'lesbian');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Get your ass hammered', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/game/anal2.jpg');
    scene.text('Once you\'re comfortable with her in your ass, she stands up over you. "Get ready because now I\'m really going to fuck your ass!" she laughs before slamming the dildo in and out of your ass, causing you to grip the sheets tightly. Despite this, she isn\'t too rough, and you start enjoying the pleasurable sensation. Albina seemingly grows more aroused the more she fucks you.');
    // TODO-QSP: dynamic text: Just as it's starting to hurt, she lets out a loud, pleasured scream as you feel...
    scene.text(`Just as it's starting to hurt, she lets out a loud, pleasured scream as you feel her juices spraying across your legs. You then feel the dildo slide out of you and turn to see Albina sprawled out on the bed in orgasmic bliss, her juices slowly trickling out of her soaking wet pussy as a huge wet patch soaks into the sheets. "You were such a good little buttslut, ${((s as any).pcs_nickname ?? 0)}..." she says softly.`);
    scene.text('After riding through her orgasm, she pulls the harness off and tosses it aside.');
    qspCall(s, 'arousal', 'anal_strap', 3, ((s as any).npcID ?? 0), ((s as any).npcID1 ?? 0), 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', goto: ['albina_sex_scenes', 'strapon_finish'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAlbinaAssFucksYouAnalVirgin(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/albinahome/albinaroom.jpg');
  scene.text('Thoughts race through your head as you look at the massive dildo, and Albina notices your hesitation.');
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>, have you ever been fucked in the ass before?"
  scene.text(`"${((s as any).pcs_nickname ?? 0)}, have you ever been fucked in the ass before?"`);
  scene.text('You shake your head as you feel your cheeks burning bright red. "Uhh... No, I haven\'t..."');
  scene.text('She places a hand on your shoulder. "Hey, it\'s nothing to be embarrassed about. Plenty of girls don\'t do anal."');
  // TODO-QSP: dynamic text: You stare at the dildo again before Albina snaps your attention back to her. "<<...
  scene.text(`You stare at the dildo again before Albina snaps your attention back to her. "${((s as any).pcs_nickname ?? 0)}, be honest with me. Do you want me to fuck your ass? I'll be as gentle as you want."`);
  scene.actions([
    { label: 'Yes', goto: ['albina_sex_scenes', 'first_anal'] },
    { label: 'No', goto: ['albina_sex_scenes', 'anal_refuse'] },
  ]);
  scene.build();
}

function enterAlbinaAssFucksYouOnlyDildo(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/albinahome/albinaroom.jpg');
  scene.text('Thoughts race through your head as you look at the massive dildo, and Albina notices your hesitation.');
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>, have you ever been fucked in the ass before?"
  scene.text(`"${((s as any).pcs_nickname ?? 0)}, have you ever been fucked in the ass before?"`);
  scene.text('You feel your cheeks burning bright red. "Well, I\'ve used a dildo..."');
  scene.text('"Oh, a buttslut in training!" she teases. "No, it\'s good that you\'re experimenting back there. It\'ll make your first proper butt fuck easier if you\'ve had some experience shoving something up there first."');
  // TODO-QSP: dynamic text: She then places a hand on your shoulder. "<<$pcs_nickname>>, be honest with me. ...
  scene.text(`She then places a hand on your shoulder. "${((s as any).pcs_nickname ?? 0)}, be honest with me. Do you want me to try the real thing? I'll be as gentle as you want."`);
  scene.actions([
    { label: 'Yes', goto: ['albina_sex_scenes', 'first_anal1'] },
    { label: 'No', goto: ['albina_sex_scenes', 'anal_refuse'] },
  ]);
  scene.build();
}

function enterAlbinaAssFucksYouOnlyFist(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/albinahome/albinaroom.jpg');
  scene.text('Thoughts race through your head as you look at the huge dildo, and Albina notices your hesitation.');
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>, have you ever been fucked in the ass before?"
  scene.text(`"${((s as any).pcs_nickname ?? 0)}, have you ever been fucked in the ass before?"`);
  scene.text('You feel your cheeks burning bright red. "Well, I\'ve managed to take a fist..."');
  // TODO-QSP: dynamic text: Albina looks at you in what you can only describe as awe. "God damn <<$pcs_nickn...
  scene.text(`Albina looks at you in what you can only describe as awe. "God damn ${((s as any).pcs_nickname ?? 0)}, even I've never taken a fist up my ass, and I'm the queen of butt stuff!"`);
  scene.text('"Is it weird to do that?" you ask with concern.');
  scene.text('"No, not at all! I\'ve always wanted to try it myself. Maybe I will now that I need to up my game..."');
  scene.text('She looks you over with lustful desire before continuing. "Practicing with a dildo makes your first butt fuck easier, but a whole fucking hand?! A cock or dildo would be a breeze for you!"');
  // TODO-QSP: dynamic text: She then places a hand on your shoulder. "<<$pcs_nickname>>, be honest with me. ...
  scene.text(`She then places a hand on your shoulder. "${((s as any).pcs_nickname ?? 0)}, be honest with me. Do you want me to fuck your ass? I'll be as gentle as you want."`);
  scene.actions([
    { label: 'Yes', goto: ['albina_sex_scenes', 'first_anal1'] },
    { label: 'No', goto: ['albina_sex_scenes', 'anal_refuse'] },
  ]);
  scene.build();
}

function enterFirstAnal(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_had_sex ?? {})['A23'] = 1;
  ((s as any).stat ?? {})['lesbian_count'] = (((s as any).stat ?? {})['lesbian_count'] ?? 0) + (1);
  scene.img('images/locations/pavlovsk/resident/albinahome/albinaroom.jpg');
  scene.text('"Y-yes, I would. Just promise you\'ll be gentle," you reply, and Albina smiles.');
  scene.text('"I will. Get on all fours and bring your ass up as high as possible."');
  scene.text('As you get on all fours, you glance back and see her squirting lube onto her fingers. You shiver when you feel the cold liquid being applied to your asshole. Albina starts massaging it in before you feel her slowly pushing a finger inside you. You moan softly at the sensation as you feel her finger curling up inside you.');
  // TODO-QSP: dynamic text: After spending a few minutes fingering you, she pulls her finger out. "Are you s...
  scene.text(`After spending a few minutes fingering you, she pulls her finger out. "Are you sure you want to do this, ${((s as any).pcs_nickname ?? 0)}? Just because I'm a buttslut doesn't mean you have to be one too."`);
  scene.text('You stare at the dildo hanging between her legs, but steel yourself and nod. "Yes. Just go slow, please?"');
  qspCall(s, 'arousal', 'anal_finger', 5, ((s as any).npcID ?? 0), ((s as any).npcID1 ?? 0), 'lesbian');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Get your ass fucked', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/game/anal1.jpg');
    // TODO-QSP: dynamic text: Your heart races as you feel Albina moving in behind you. You instinctively tens...
    scene.text(`Your heart races as you feel Albina moving in behind you. You instinctively tense up when you feel the head of the dildo pressing against your asshole. "Okay, ${((s as any).pcs_nickname ?? 0)}, this is going to feel strange and definitely hurt a little, but you're going to have to try and relax as best as you can for me," Albina tells you. You grip the sheets tightly as you do what she says.`);
    // TODO-QSP: dynamic text: You feel her start slowly pushing, and the pressure builds until the tip of the ...
    scene.text(`You feel her start slowly pushing, and the pressure builds until the tip of the dildo suddenly pops into your ass, causing you to groan and grit your teeth while gripping the sheets even tighter. It's a painful sensation, and you instinctively feel the urge to free yourself. "You okay, ${((s as any).pcs_nickname ?? 0)}? I can take it out if you want?" Albina asks as you feel a stinging pain shooting through you.`);
    scene.text('Remembering what she said, you fight the urge to pull away and try to relax. "No, I just need a second," you reply as you look back at her, and she nods.');
    scene.text('After taking a few seconds to adjust to the sensation, you nod at Albina, who squirts more lube onto the slick dildo before placing her hands on your hips. "Okay, just keep your ass relaxed and tell me if it gets too painful. I don\'t want you hurting yourself trying to impress me. Got it?"');
    scene.text('You nod and prepare yourself as you feel Albina slowly push the dildo deeper into your ass. You feel stretched out as she reaches a depth she feels you\'ll be comfortable with and starts gently thrusting.');
    scene.text('Despite the shallow depth and Albina being gentle, the pain becomes too much after a few minutes, and you ask her to pull out. You sit on your knees and clutch your ass cheeks in your hands as pain pulses through your stretched asshole.');
    // TODO-QSP: dynamic text: "You lasted longer than I thought you would. Not bad for your first go, <<$pcs_n...
    scene.text(`"You lasted longer than I thought you would. Not bad for your first go, ${((s as any).pcs_nickname ?? 0)}," Albina says as she hands you some wipes to clean yourself up. "Next time you lose, maybe we can go deeper and... harder," she adds with a teasing grin as she cleans the dildo and puts it away.`);
    scene.text('As the stinging pain continues to pulse through your ass, you slowly get dressed. Albina watches with an amused grin. "Don\'t worry. It gets less painful the more you do it."');
    scene.text('"You would know," you reply with a smirk, and she laughs.');
    qspCall(s, 'arousal', 'anal_strap', 10, ((s as any).npcID ?? 0), ((s as any).npcID1 ?? 0), 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Do something else', goto: ['albina_sex_scenes', 'leave'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterFirstAnal1(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_had_sex ?? {})['A23'] = 1;
  ((s as any).stat ?? {})['lesbian_count'] = (((s as any).stat ?? {})['lesbian_count'] ?? 0) + (1);
  scene.img('images/locations/pavlovsk/resident/albinahome/albinaroom.jpg');
  scene.text('"Yes, I would," you reply, and Albina smiles.');
  scene.text('"Okay, get on all fours and bring your ass up as high as possible."');
  scene.text('As you get on all fours, you glance back and see her squirting lube onto her fingers. You shiver when you feel the cold liquid being applied to your asshole. Albina starts massaging it before you feel her slowly pushing a finger inside you. You moan softly at the sensation as you feel her finger curling up inside you.');
  // TODO-QSP: dynamic text: After spending a few minutes fingering you, she pulls her finger out. "Okay, tha...
  scene.text(`After spending a few minutes fingering you, she pulls her finger out. "Okay, that should be enough. Are you sure you want to do this, ${((s as any).pcs_nickname ?? 0)}? Just because I'm a buttslut doesn't mean you have to be one too."`);
  scene.text('You stare at the dildo hanging between her legs but steel yourself and nod. "Yes, I want to do this."');
  qspCall(s, 'arousal', 'anal_finger', 5, ((s as any).npcID ?? 0), ((s as any).npcID1 ?? 0), 'lesbian');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Get your ass fucked', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/game/anal1.jpg');
    // TODO-QSP: dynamic text: Your heart is racing even though you know what to expect. Albina presses the tip...
    scene.text(`Your heart is racing even though you know what to expect. Albina presses the tip of the dildo against your asshole, and you feel the familiar sensation of the pressure building as she pushes forward until the dildo suddenly pops into your ass, causing you to groan. "You okay, ${((s as any).pcs_nickname ?? 0)}? I can take it out if you want?" Albina asks.`);
    scene.text('After a few seconds to adjust to the sensation, you nod at Albina. She squirts more lube onto the slick dildo before placing her hands on your hips. "Okay, just tell me if it gets too painful for you."');
    scene.text('You nod and prepare yourself as you feel Albina slowly push the dildo deeper into your ass and start thrusting.');
    scene.text('Having had your ass penetrated before, Albina goes faster and deeper than you think she usually would have. However, the sensation of being buttfucked is still new to you, and you soon ask her to stop when it becomes too much.');
    // TODO-QSP: dynamic text: "Not bad for your first go, <<$pcs_nickname>>. I bet the prior 'practice' helped...
    scene.text(`"Not bad for your first go, ${((s as any).pcs_nickname ?? 0)}. I bet the prior 'practice' helped," Albina says as she hands you some wipes to clean yourself up. "Next time you lose, maybe we can go deeper and... harder," she adds with a teasing grin as she cleans the dildo and puts it away.`);
    scene.text('You slowly get dressed as Albina watches with an amused grin. "It feels great, doesn\'t it? It gets better the more you do it."');
    scene.text('"You would know," you reply with a smirk and she laughs.');
    qspCall(s, 'arousal', 'anal_strap', 10, ((s as any).npcID ?? 0), ((s as any).npcID1 ?? 0), 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Do something else', goto: ['albina_sex_scenes', 'leave'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAnalRefuse(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'end');
  scene.img('images/locations/pavlovsk/resident/albinahome/albinaroom.jpg');
  scene.text('You shake your head. "No, I don\'t think I\'m ready for that yet."');
  scene.text('Albina smiles. "That\'s okay, but if you want to do it with me or want some advice, then just ask. It\'s best to get help from someone with... experience on the matter," she says with a grin.');
  scene.text('You grin back. "I\'ll be sure to ask the master buttslut for any of her wisdom."');
  scene.text('She punches you in the arm. "Damn right you will."');
  scene.actions([
    { label: 'Do something else', goto: ['albina_sex_scenes', 'leave'] },
  ]);
  scene.build();
}

function enterStraponFinish(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_had_sex ?? {})['A23'] = 1;
  ((s as any).stat ?? {})['lesbian_count'] = (((s as any).stat ?? {})['lesbian_count'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/albina/sex/game/aftermath.jpg');
  if ((!(Math.floor(Math.random() * 4) + 0))) {
    // TODO-QSP: dynamic text: Albina pushes you down onto the bed and climbs on top of you. You spend the next...
    scene.text(`Albina pushes you down onto the bed and climbs on top of you. You spend the next few minutes passionately making out while fondling each other before she gives you a sly smile and moves into position to start scissoring you. Before she can, her phone buzzes, and she looks at it before frowning in disappointment. "Sorry, but I need to go, ${((s as any).pcs_nickname ?? 0)}. I'll see you later?"`);
    scene.text('You nod in understanding. "Sure, not a problem. I had fun."');
    scene.text('You finally kiss each other before you both quickly get dressed. She wipes the dildo clean and shoves it back in the drawer before ushering you out of her room. She walks with you into town before leaving you to attend to her business.');
  } else {
    scene.text('Albina pushes you down onto the bed and climbs on top of you. You spend the next few minutes passionately making out while fondling each other before she collapses next to you, and you both just lie naked on her bed in silence. She eventually gets up and cleans the dildo before shoving it back in the drawer and getting dressed.');
    scene.text('You get dressed, and when you finish, she smiles at you. "Okay, what do you want to do now?" she asks.');
  }
  qspCall(s, 'arousal', 'foreplay', 5, 'lesbian');
  scene.actions([
    { label: 'Finish', goto: ['albina_sex_scenes', 'leave'] },
  ]);
  scene.build();
}

function enterUseButtPlug(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 6;
  qspCall(s, 'stat', '');
  qspCall(s, 'npcStat', 'A23');
  scene.img('images/locations/pavlovsk/resident/apartment/anushapt/anushroom/buttplug.jpg');
  scene.text('You dig out the butt plug in her nightstand and hold it up. "I want to use this bad boy..." you say with a smile and she gives you an intrigued, almost aroused look.');
  scene.text('"And how do you plan on doing that?" she replies.');
  scene.actions([
    { label: 'I\'ll use it on you', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/buttplug1.jpg');
    scene.text('"I\'ll use it on you. Get that tight ass over here and bend over!" you demand.');
    scene.text('She giggles and undresses her lower half before getting on all fours, wiggling her ass at you as you grab the bottle of lube from her nightstand and squirt some onto her asshole, working it around until it\'s lubed up, then squirt some onto the butt plug before you kneel next to her and spread her ass cheeks as she bites her lip.');
    qspCall(s, 'arousal', 'foreplay', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Stick the butt plug inside', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/buttplug2.jpg');
    scene.text('There\'s a little resistance as you push the butt plug against her asshole. The tip goes in easily enough, but as you push it in deeper and the plug widens out, it starts taking a bit more force. At it\'s widest point, she relaxes her ass and the plug suddenly and loudly pops firmly into her, causing her to moan a little in pleasure.');
    scene.text('With the plug firmly in her ass, you start spanking her cheeks hard, causing her to moan loudly and wiggle her ass at you.');
    qspCall(s, 'arousal', 'anal_dildo_give', 3, 'lesbian', 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Fuck her ass with the plug', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/buttplug3.jpg');
    scene.text('Her ass cheeks now bright red from your thorough spanking, you grab hold of the plug and start pulling on it until it\'s widest point is stretching her before letting go, grinning as you watch it disappear back up her asshole.');
    scene.text('Each time you do it, she moans a little louder and it gets easier to pull it out as her asshole loosens up. She moans loudly in pleasure when you pull the plug out past the widest point, leaving only the tip inside before you shove it all the way back in.');
    scene.text('You keep repeating this, fucking her ass with the butt plug until she finally cries out in orgasm and her whole body shudders as she violently squirts. Once it passes, you pull the plug completely out of her with a loud pop, her asshole gaping widely.');
    qspCall(s, 'arousal', 'foreplay', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/game/aftermath.jpg');
    scene.text('"That was fun. I enjoyed that and I know you did too," you tell her teasingly and she smiles while panting.');
    scene.text('"Yeah, I did. I <i>really</i> enjoyed that."');
    scene.text('She cleans the butt plug before placing it back in her nightstand along with the lube. She then uses some wipes to clean herself up before getting dressed.');
    qspCall(s, 'arousal', 'foreplay', 2, 'lesbian');
    (s as any).minut = ((s as any).minut ?? 0) + 8;
    scene.actions([
      { label: 'Get dressed', goto: ['albina_sex_scenes', 'leave'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Use it on me', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/buttplug1.jpg');
    scene.text('"I want you to use it on me..." you say with a smile and she giggles before crawling over to you.');
    scene.text('"Strip and bend over," she replies as she grabs the bottle of lube from her nightstand.');
    scene.text('You do as you\'re told and gasp as she starts rubbing a plentiful amount of lube into your asshole. She then squirts some onto the butt plug before she kneels next to you and spreads your ass.');
    scene.actions([
      { label: 'Take it inside you', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/buttplug2.jpg');
    scene.text('There\'s a little resistance as she pushes the butt plug against your asshole. The tip goes in easily enough, but as she tries pushing it deeper and the plug widens out, it starts taking a bit more force.');
    scene.text('At it\'s widest point, you relax your ass and the plug suddenly and loudly pops firmly into you, causing you to gasp and moan a little in pleasure. With the plug firmly in your ass, she starts spanking your cheeks hard.');
    qspCall(s, 'pain', '', 3, 'asscheeks', 'spank');
    qspCall(s, 'arousal', 'anal_dildo', 3, 'lesbian', 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get fucked', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/bedroom/sex/strapon/buttplug3.jpg');
    scene.text('Your ass cheeks stinging from her thorough spanking, she grabs hold of the plug and starts pulling on it until it\'s widest point is stretching your hole and then lets go, making you gasp and moan as it pops back inside your asshole.');
    scene.text('Each time she does it, you moan a little louder and it gets easier to pull it out as your asshole loosens up. You moan loudly in pleasure when she pulls the plug out past the widest point, leaving only the tip inside you before shoving it all the way back in.');
    scene.text('She keeps repeating this, fucking your ass with the butt plug until you finally cry out in orgasm and your whole body shakes. Once it passes, she pulls the plug completely out of you with a loud pop and you feel your asshole gaping widely.');
    qspCall(s, 'arousal', 'foreplay', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/game/aftermath.jpg');
    scene.text('"That was fun. I enjoyed that and I know you did," she tells you teasingly and you laugh.');
    scene.text('"Yeah, I did," you reply before she cleans the butt plug and places it back in her nightstand along with the lube.');
    scene.text('She then offers you some wipes for you to clean your ass before you get dressed.');
    qspCall(s, 'arousal', 'foreplay', 2, 'lesbian');
    (s as any).minut = ((s as any).minut ?? 0) + 8;
    scene.actions([
      { label: 'Get dressed', goto: ['albina_sex_scenes', 'leave'] },
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

function enterAlbinaShower(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A23');
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  scene.img('images/characters/pavlovsk/school/girl/albina/sex/bathroom/4.jpg');
  scene.text('You smile and nod before stripping down and following her into the bathroom. She turns the water in the shower on and drags you inside. The warm water splashing down on you feels magical as Albina smiles at you.');
  scene.text('"I need a <i>good</i>, <i>hard</i> clean. Maybe you could... <i>help</i> me?" she says seductively with a wink.');
  scene.text('You grin and turn her around before giving her ass a good smack, the wet sound echoing off the walls of the shower as she giggles.');
  scene.text('You then grab one of the many bottles she has sitting in the shower and squeeze the contents into your hand before you reach around and start lathering up her breasts, a soft moan escaping her lips as you give them a soft squeeze and lightly pinch her nipples.');
  qspCall(s, 'arousal', 'foreplay_give', 3, 'lesbian');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/bathroom/5.jpg');
    scene.text('You squeeze more of the scented gel into your hands and start \'cleaning\' her ass, rubbing, squeezing and smacking her cheeks as you kiss her neck.');
    scene.text('She moans softly before parting her legs, allowing your hand to snake between them. You trace your fingers along her pussy lips before you line them up with her entrance...');
    qspCall(s, 'arousal', 'foreplay_give', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/shared/sex/lesbian/shower_kiss1.mp4');
    scene.text('Before you can go any further, she suddenly turns around and pushes you up against the shower wall before moving in and locking lips with you.');
    scene.text('You passionately make out under the steamy water, fondling each other\'s wet bodies for a few seconds before she breaks the kiss and moves away from you.');
    // TODO-QSP: dynamic text: "We don't have much time left. How are you going to make me cum, <<$pcs_nickname...
    scene.text(`"We don't have much time left. How are you going to make me cum, ${((s as any).pcs_nickname ?? 0)}?"`);
    qspCall(s, 'arousal', 'kiss', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finger her pussy', goto: ['albina_sex_scenes', 'albina_shower_pussy'] },
      { label: 'Eat her ass', goto: ['albina_sex_scenes', 'albina_shower_ass'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterAlbinaShowerPussy(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/lesbian/shower_finger1.mp4');
  scene.text('You smile and move your hand back down between her legs. Being rather flexible, Albina lifts her leg straight up and places her foot against the shower wall, giving you better access to her pussy, which is dripping wet in anticipation.');
  scene.text('You slide two fingers inside her and start finger fucking her pussy as your thumb massages her clit. She moans loudly in pleasure as she leans against you to steady herself.');
  // TODO-QSP: dynamic text: A few minutes of this is enough to bring her to the edge and she starts moaning ...
  scene.text(`A few minutes of this is enough to bring her to the edge and she starts moaning even louder. "Don't stop ${((s as any).pcs_nickname ?? 0)}, I'm about to cum!"`);
  scene.text('You finger her even faster and she lets out a pleasured shriek as her pussy starts squirting her juices over your arm. She steadies herself against you as she rides through the pleasure of her orgasm.');
  scene.text('You then pull your fingers out of her and shove them in her mouth. She sucks on them before smiling at you.');
  scene.text('"That was just what I needed. Just let me finish up in here and I\'ll be out."');
  scene.text('You nod and step out of the shower, grabbing one of the nearby towels and wrapping yourself in it before walking back into her bedroom.');
  scene.text('As you dry off, you hear the water turn off and a naked Albina casually strolls into the room and pushes you down onto her bed. "My turn. I\'m going to eat your ass until you cum. And I won\'t take no for an answer!"');
  qspCall(s, 'arousal', 'vaginal_finger_give', 5, 'lesbian');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Get your ass eaten', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/bathroom/7.jpg');
    scene.text('You remove your towel and lie back on the ottoman sitting in the corner of the room before pulling your legs up, giving Albina access to your asshole as she kneels in front of you. You gasp in pleasure when she starts greedily licking and rimming your backdoor.');
    scene.text('You moan loudly in pleasure as you feel your orgasm quickly building within you. Albina, apparently sensing this, grabs your hips and starts eating your ass with even more lustful desire, the tip of her tongue slowly pushing into your ass as you instinctively buck your hips.');
    scene.text('"Don\'t stop, I\'m gonna cum!" you cry out as Albina goes even faster, rimming your asshole with reckless abandon before suddenly massaging your engorged clit, causing a powerful orgasm to wash over you.');
    scene.text('Once it passes, you flop down on the ottoman as Albina smiles up at you in satisfaction. Once you recover, you both get dressed.');
    qspCall(s, 'arousal', 'rimming', 3, 'lesbian', 'no_orgasm_msg');
    qspCall(s, 'arousal', 'vaginal_finger', (-3), 'lesbian', 'no_orgasm_msg');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', goto: ['albina_sex_scenes', 'leave'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAlbinaShowerAss(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/albina/sex/bathroom/6.jpg');
  scene.text('You firmly squeeze her ass in your hand before pushing her down onto all fours. She looks back and gives you a knowing smile as you kneel down next to her and spread her ass cheeks before you start eagerly rimming her asshole.');
  scene.text('She reaches back and starts fondling her clit as she approaches orgasm. Hearing her moans getting louder and her breathing more ragged, you start going even faster, pushing your tongue as deep as you can into her ass before she suddenly lets out a pleasured shriek and her pussy starts squirting juices.');
  scene.text('You continue eating her ass as she rides through her orgasm. Once she recovers, she pulls herself up and the two of you sit in the shower making out for a few minutes before she breaks the kiss and smiles at you. "That was amazing! Just let me finish up in here and I\'ll be out."');
  scene.text('You nod and step out of the shower, grabbing one of the nearby towels and wrapping yourself in it before walking back into her bedroom.');
  scene.text('As you dry off, you hear the water turn off and a naked Albina casually strolls into the room and pushes you down onto her bed.');
  scene.text('"There aren\'t many people who would eat my ass like that, so I want to return the favor. I\'m going to eat your ass until you cum just as hard as I did."');
  qspCall(s, 'arousal', 'rimming_give', 5, 'lesbian', 'no_orgasm_msg');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Get your ass eaten', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/bathroom/7.jpg');
    scene.text('You remove your towel and lie back on the ottoman sitting in the corner of the room before pulling your legs up, giving Albina access to your asshole as she kneels in front of you. You gasp in pleasure when she starts greedily licking and rimming your backdoor.');
    scene.text('You moan loudly in pleasure as you feel your orgasm quickly building within you. Albina, apparently sensing this, grabs your hips and starts eating your ass with even more lustful desire, the tip of her tongue slowly pushing into your ass as you instinctively buck your hips.');
    scene.text('"Don\'t stop, I\'m gonna cum!" you cry out as Albina goes even faster, rimming your asshole with reckless abandon before suddenly massaging your engorged clit, causing a powerful orgasm to wash over you.');
    scene.text('Once it passes, you flop down on the ottoman as Albina smiles up at you in satisfaction. Once you recover, you both get dressed.');
    qspCall(s, 'arousal', 'rimming', 3, 'lesbian', 'no_orgasm_msg');
    qspCall(s, 'arousal', 'vaginal_finger', (-3), 'lesbian', 'no_orgasm_msg');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', goto: ['albina_sex_scenes', 'leave'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterPussyEatingContest(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/albina/albinatalk.jpg');
  scene.text('"How about we make it a little competition?" she asks while biting her lip.');
  scene.text('"What kind of competition?" you reply with a curious gaze.');
  scene.text('She smiles. "One where we see who is the best at eating pussy? Whoever makes the other cum the fastest wins."');
  scene.text('"Okay. You ready to lose?" you smirk.');
  scene.text('"Shut up and get your panties off! I\'m going first."');
  scene.text('You grin as you both undress and settle down on the bed. You spread your legs and smile down at Albina as she settles in front of your pussy.');
  scene.actions([
    { label: 'Get your pussy eaten', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'cuni', 5, 'lesbian', 'no_orgasm_msg');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/pussy_contest1.jpg');
    scene.text('You moan softly as you feel her pierced tongue start tracing its way up your pussy before it reaches your clit. You let out a pleasured gasp when you feel her start licking and sucking on it.');
    scene.text('The minutes go by and you feel your pussy getting wetter as your arousal builds. She\'s <i>really</i> good at this and will have you reaching orgasm in no time...');
    qspCall(s, 'willpower', 'cuni', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Resist [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Resist [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    ((s as any).AlbinaQW ?? {})['pussy_contest_win'] = 1;
    qspCall(s, 'arousal', 'cuni', (-5), 'lesbian', 'no_orgasm_msg');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/pussy_contest1.jpg');
    scene.text('As much as you desire your release, you also want to win. Biting your lip, you manage to hold out under the teasing of her tongue for a few more minutes until the pleasure eventually proves too much and you orgasm <i>hard</i>.');
    scene.text('You cry out and your whole body shudders as waves of pleasure wash over you, Albina not stopping until you do. When you do, she pulls back and wipes her mouth before grinning at you.');
    // TODO-QSP: dynamic text: "Not bad, <<$pcs_nickname>>. You lasted longer than I thought you would, but it'...
    scene.text(`"Not bad, ${((s as any).pcs_nickname ?? 0)}. You lasted longer than I thought you would, but it's my turn now."`);
    scene.text('You give her a dazed smile as you switch positions, Albina flopping down on the bed and eagerly spreading her legs.');
    scene.actions([
      { label: 'Her turn', goto: ['albina_sex_scenes', 'pussy_eating_contest1'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Cum!', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'cuni', (-5), 'lesbian', 'no_orgasm_msg');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/pussy_contest1.jpg');
    scene.text('You try your best to hold out, but Albina\'s expert teasing of your clit proves too much and you cry out in pleasure as you cum <i>hard</i>.');
    scene.text('Your whole body shudders as waves of pleasure wash over you, Albina not stopping until you do. When you do, she pulls back and wipes her mouth before grinning at you.');
    // TODO-QSP: dynamic text: "Not bad <<$pcs_nickname>>, but it's my turn now."
    scene.text(`"Not bad ${((s as any).pcs_nickname ?? 0)}, but it's my turn now."`);
    scene.text('You give her a dazed smile as she climbs up onto the bed next to you and bites her lip.');
    scene.actions([
      { label: 'Her turn', goto: ['albina_sex_scenes', 'pussy_eating_contest1'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterPussyEatingContest1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'cuni_give', 3);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/albina/sex/pussy_contest2.jpg');
  scene.text('"I\'m going to sit on your face and not get off until you get <i>me</i> off," she laughs.');
  scene.text('Before you can react, she swings her leg over your head and lowers herself down, her already wet pussy smearing your face with her juices as she brushes your hair out of the way and plants herself firmly on you.');
  scene.text('You grab hold of her legs and she lets out a pleasured gasp as you settle into a rhythm of alternating between licking and sucking on her clit.');
  scene.text('To your surprise, she doesn\'t last as long as you were expecting and suddenly starts bucking her hips and grinding against your face before she cries out in pleasure and a stream of her juices squirts into your mouth and splashes over your face.');
  scene.text('It\'s a far larger and more violent stream than you remember her having and your face is drenched as you\'re forced to swallow the large amount of sweet tasting liquid in your mouth.');
  scene.text('Her legs give out as she spasms in pleasure and she flops down on the bed, her legs soaked with her juices as you gasp for air.');
  // TODO-QSP: dynamic text: "Sorry about nearly drowing you there <<$pcs_nickname>>, but I've been holding t...
  scene.text(`"Sorry about nearly drowing you there ${((s as any).pcs_nickname ?? 0)}, but I've been holding that one in for a while," she happily grins. "It felt good to finally let it out."`);
  if (((s as any).AlbinaQW ?? 0)?.['pussy_contest_win'] === 1) {
    ((s as any).AlbinaQW ?? {})['pussy_contest_win'] = 0;
    scene.text('You grin at her as her juices drip from your chin. "I think it\'s safe to say that I won our little contest here."');
    scene.text('"I don\'t know," she grins back while panting heavily. "I think me having the bigger orgasm makes me the winner..."');
    scene.text('"That just makes my victory even sweeter than you taste..." you grin as you lick your lips.');
    scene.text('"Come here and give me a taste of that victory then..." she smiles.');
  } else {
    scene.text('You grin at her as her juices drip from your chin. "I\'d call this one a draw."');
    scene.text('"I don\'t know," she grins back while panting heavily. "I think me having the bigger orgasm makes me the winner..."');
    scene.text('"Do you want a taste of your little victory then?" you grin as you lick your lips.');
  }
  scene.actions([
    { label: 'Continue', goto: ['albina_sex_scenes', 'pussy_contest_end'] },
  ]);
  scene.build();
}

function enterPussyContestEnd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'kiss', 2, 'lesbian');
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/albina/sex/game/aftermath.jpg');
  scene.text('You smile and crawl up to give Albina a kiss, getting a taste of your juices on her tongue as she gets of her own from you.');
  scene.text('After breaking the kiss, you flop down next to Albina and end up entangled in a warm embrace. You moan softly as you snuggle into each other, your wet pussy brushing against her leg.');
  scene.text('"That was fun. We should do it again sometime," you tell her.');
  scene.text('"It was," she replies with a giggle. "But we should clean up and get dressed."');
  scene.text('You give her one last kiss before disentangling yourself. She offers you some wipes to clean up before you both get dressed.');
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    scene.text('"I need to get going," you tell her. "I\'ll see you another time."');
    scene.text('She nods and gives you a hug goodbye before you leave her room and head downstairs.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['pav_residential', ''] },
    ]);
  } },
    { label: 'Stay', goto: ['albinahome', 'bedroom'] },
  ]);
  scene.build();
}

function enterLazarStart(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 2) + 1) === 1) {
    ((s as any).AlbinaQW ?? {})['lazar_cum'] = 'anal_creampie';
  } else {
    ((s as any).AlbinaQW ?? {})['lazar_cum'] = 'facial';
  }
  scene.img('images/locations/pavlovsk/resident/albinahome/maid.jpg');
  if (((s as any).AlbinaQW ?? 0)?.['Lazar_Sex'] === 0) {
    scene.text('"Miss Albina already has a guest. Shall I tell them of your arrival?"');
    scene.text('You shake your head. "No, it\'s fine. She should be expecting me, so I\'ll head up to her room if that\'s okay?"');
    scene.text('The maid just nods and continues with her duties, leaving you to head up the stairs, curious to know who this "other friend" could be as you reach the door...');
    scene.actions([
      { label: 'Open the door', goto: ['albina_sex_scenes', 'lazar_door_first'] },
    ]);
  } else {
    scene.text('"Miss Albina already has a guest. Shall I tell them of your arrival?"');
    scene.text('From her smile, you can guess that this "guest" is Lazar again and she knows exactly what they\'re doing.');
    scene.text('"No, it\'s fine. She should be expecting me, so I\'ll head up to her room if that\'s okay?"');
    scene.text('The maid just nods and continues with her duties, leaving you to head up the stairs.');
    scene.text('<b><i>"OH FUCK! JUST LIKE THAT! FUCK MY TIGHT LITTLE PUSSY! MAKE ME CUM!"</i></b>');
    scene.text('Predictably, the sound of Albina\'s voice echoes down the hallway as you approach her room.');
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0  ||  ((s as any).stat ?? 0)?.['vaginal'] > 0) {
      qspCall(s, 'willpower', 'misc', 'self', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Enter the room [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Enter the room [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'misc', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
  }, goto: ['albina_sex_scenes', 'join'] },
        ]);
      }
    }
    scene.actions([
      { label: 'Give them some privacy', goto: ['albina_sex_scenes', 'lazar_give_privacy'] },
      { label: 'Peep on her', goto: ['albina_sex_scenes', 'lazar_peek1'] },
    ]);
  }
  scene.build();
}

function enterLazarDoorFirst(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/albinahome/doors.jpg');
  ((s as any).AlbinaQW ?? {})['Lazar_Sex'] = 1;
  scene.text('<b><i>"OH FUCK! JUST LIKE THAT! FUCK MY TIGHT LITTLE PUSSY! MAKE ME CUM!"</i></b>');
  scene.text('You jump in surprise as Albina\'s screaming voice blasts right through the closed door, clear into the hallway.');
  if (((s as any).stat ?? 0)?.['think_virgin'] === 0  ||  ((s as any).stat ?? 0)?.['vaginal'] > 0) {
    qspCall(s, 'willpower', 'misc', 'self', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Enter the room [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Enter the room [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'misc', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
  }, goto: ['albina_sex_scenes', 'join'] },
      ]);
    }
  }
  scene.actions([
    { label: 'Give them some privacy', goto: ['albina_sex_scenes', 'lazar_give_privacy'] },
    { label: 'Peep on her', goto: ['albina_sex_scenes', 'lazar_peek1'] },
  ]);
  scene.build();
}

function enterLazarGivePrivacy(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/albinahome/phone.jpg');
  scene.text('You decide to wait them out and walk down the hall to the bathroom. You walk in, lock the door and sit on the toilet before pulling out your phone and amusing yourself.');
  scene.actions([
    { label: 'Keep using phone', goto: ['albina_sex_scenes', 'keep_using_phone'] },
    { label: 'Watch porn', goto: ['albina_sex_scenes', 'watch_porn'] },
  ]);
  scene.build();
}

function enterLazarPeek1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/vag/miss/rough1.mp4');
  scene.text('Unable to help yourself, you move in close to Albina\'s door and silently ease it open just a <i>tiny</i> crack to see what\'s happening inside.');
  scene.text('Albina is on her back, her hair wrapped in Lazar\'s fist as he savagely rams his cock into her pussy. The sound of flesh slapping against flesh fills the room, almost as loud as Albina\'s pleasured moans.');
  if (((s as any).stat ?? 0)?.['think_virgin'] === 0  ||  ((s as any).stat ?? 0)?.['vaginal'] > 0) {
    qspCall(s, 'willpower', 'misc', 'self', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Enter the room [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Enter the room [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'misc', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
  }, goto: ['albina_sex_scenes', 'join'] },
      ]);
    }
  }
  scene.actions([
    { label: 'Give them some privacy', goto: ['albina_sex_scenes', 'lazar_give_privacy'] },
    { label: 'Keep watching', goto: ['albina_sex_scenes', 'lazar_peek2'] },
  ]);
  scene.build();
}

function enterLazarPeek2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/vag/doggy/spit1.mp4');
  scene.text('You continue watching as Lazar pulls out of her and forcibly flips her up onto her knees. From this angle, you can see Albina is soaking wet, but that doesn\'t stop him spreading her lips and spitting directly into her pussy.');
  scene.text('Her whole body twitches in one violent flinch and you hear a muffled moan as he fingers her.');
  scene.text('"You like it dirty, don\'t you, you little whore?"');
  scene.text('"Put it back in!" she begs. "Shove your cock in my pussy and <b>fuck</b> me!"');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/doggy/kotovsex10.mp4');
    scene.text('Lazar slams his cock into her pussy with enough force to rattle the bed. She screams in what sounds like a little bit of pain and a whole lot of pleasure, but he doesn\'t pause for even a second before he grabs her hips and starts pounding her from behind.');
    scene.text('He grunts loudly as his hips slap against her ass with every thrust, causing it to jiggle slightly.');
    scene.text('"Don\'t stop!" she pants between her moans. "I\'m gonna cum!"');
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0  ||  ((s as any).stat ?? 0)?.['vaginal'] > 0) {
      qspCall(s, 'willpower', 'misc', 'self', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Enter the room [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Enter the room [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'misc', 'self', 'medium');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
  }, goto: ['albina_sex_scenes', 'join'] },
        ]);
      }
    }
    scene.actions([
      { label: 'Keep watching', goto: ['albina_sex_scenes', 'lazar_peek3'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterLazarPeek3(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/anal/doggy/rough1.mp4');
  scene.text('In what can only be a practiced move or the result of a lot of experience, he pulls out of her pussy and rams his cock straight up her ass in one thrust. A choked cry sounds from her open mouth as he starts ravaging her asshole.');
  scene.text('"Why didn\'t you... Use the lube?" she whines softly.');
  scene.text('"Your slutty pussy juices weren\'t enough?!" he grunts and smacks her ass hard enough that it goes red immediately, causing her to emit a high pitched squeak.');
  scene.text('"Whose ass is this?!" he growls.');
  scene.text('"Yours..." she whimpers before squealing as he slaps her ass again.');
  scene.text('"That\'s right, you dirty little buttslut!"');
  scene.text('"I\'m your dirty little buttslut!" she gasps as he ramps up. "I\'m your dirty little buttslut whore!"');
  scene.actions([
    { label: 'Keep watching', goto: ['albina_sex_scenes', 'lazar_peek_cum'] },
  ]);
  scene.build();
}

function enterLazarPeekCum(s: GameState, scene: SceneBuilder): void {
  if (((s as any).AlbinaQW ?? 0)?.['lazar_cum'] === 'anal_creampie') {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/lazar_after.jpg');
    scene.text('With one final thrust, Lazar grabs her hair in his fist and pulls her head back as he rams his cock balls deep into her ass. She emits what you think is choked sounds of pleasure and juices squirt from her pussy as her legs tremble, her body caught in the throes of a powerful orgasm as she screams a wordless cry. Then, all at once, she collapses face-down onto the bed.');
    scene.text('Lazar withdraws his cock from her limp body and spanks her ass a few times as a thick white fluid leaks from her asshole. Your eyes are drawn to her ass cheeks, which jiggle slightly as Lazar climbs off the bed.');
    scene.text('She doesn\'t move or even make a sound. From your point of view, she seems to have passed out.');
    scene.text('You continue to stare at Albina\'s naked ass for a few seconds before suddenly realizing that Lazar has almost finished dressing and is heading towards the door.');
  } else {
    if (((s as any).AlbinaQW ?? 0)?.['lazar_cum'] === 'facial') {
      scene.img('images/shared/sex/cum/facial/facial0,3.mp4');
      scene.text('You keep watching as Lazar suddenly pulls his cock out of her asshole. Without instruction, she flips around and slides off the bed, kneeling beneath his cock as he jerks it.');
      scene.text('A few seconds later, he grunts loudly as his cum splatters across her face, with a few shots landing in her hair.');
      scene.text('Once he\'s finished, Albina collapses back against the bed, her face covered in thick blobs of cum as she pants for breath.');
      scene.text('You stare at Albina\'s cum-stained form for a few seconds before suddenly realizing that Lazar has almost finished dressing and is heading towards the door.');
    }
  }
  scene.actions([
    { label: 'Wait outside the door', goto: ['albina_sex_scenes', 'lazar_peek_end_wait'] },
    { label: 'Run back down the stairs!', goto: ['albina_sex_scenes', 'lazar_peek_end_run'] },
  ]);
  scene.build();
}

function enterLazarPeekEndWait(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big149.jpg');
  scene.text('You step back just as the door opens, Lazar pulling on his shirt as he steps through the threshold.');
  // TODO-QSP: dynamic text: "Oh shit! What are you doing here, <<$pcs_nickname>>?" he asks, seemingly startl...
  scene.text(`"Oh shit! What are you doing here, ${((s as any).pcs_nickname ?? 0)}?" he asks, seemingly startled.`);
  scene.text('"I\'m here to see Albina," you smirk. "Seems like you were here for a similar reason."');
  scene.text('"If you\'re here to assfuck her brains out, then sure," he grins back. "But I gotta get going. Gotta hit the gym." He flexes his arm with a confident smirk as he passes you and heads downstairs. "See you around."');
  scene.actions([
    { label: 'Go to her room', goto: ['albina_sex_scenes', 'lazar_after'] },
  ]);
  scene.build();
}

function enterLazarPeekEndRun(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/albinahome/hallway.jpg');
  scene.text('You rush down the stairs, going as fast as you can without stomping and giving yourself away. Upon reaching the bottom, you inhale deeply, trying to calm your breathing when Lazar appears at the top.');
  // TODO-QSP: dynamic text: "Oh. Hey <<$pcs_nickname>>," he says.
  scene.text(`"Oh. Hey ${((s as any).pcs_nickname ?? 0)}," he says.`);
  scene.text('"Hey Lazar," you reply as casually as you can.');
  scene.text('"I didn\'t know Albina invited you over?" he asks.');
  scene.text('"Oh, you know, I just popped in to say hi..."');
  scene.text('"Well, she\'s in her room, but I gotta get going. Gotta hit the gym." He flexes his arm with a confident smirk as he passes you. "See you around."');
  scene.actions([
    { label: 'Go to her room', goto: ['albina_sex_scenes', 'lazar_after'] },
  ]);
  scene.build();
}

function enterLazarAfter(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/albinahome/doors.jpg');
  scene.text('You walk up to and knock on Albina\'s door. A muffled groan sounds inside.');
  scene.text('"<i>Nnngh. Who is it...?</i>"');
  // TODO-QSP: dynamic text: "It's <<$pcs_nickname>>."
  scene.text(`"It's ${((s as any).pcs_nickname ?? 0)}."`);
  scene.text('"<i>Oh... Come in...</i>"');
  scene.actions([
    { label: 'Open the door', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/nudealbina.jpg');
    if (((s as any).AlbinaQW ?? 0)?.['lazar_cum'] === 'anal_creampie') {
      scene.text('You open the door to see a completely nude Albina sitting up on her rumpled bed, hair ruffled and wild, her thighs wet with pussy juice and cum that you can see is still dribbling from her asshole.');
    } else {
      if (((s as any).AlbinaQW ?? 0)?.['lazar_cum'] === 'facial') {
        scene.text('You open the door to see a completely nude Albina sitting up on her rumpled bed, her thighs wet with pussy juice and her wild cum-smeared hair plastered across her face.');
      }
    }
    // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>," she smiles tiredly at you. "Sorry about the mess. Lazar...
    scene.text(`"Hey ${((s as any).pcs_nickname ?? 0)}," she smiles tiredly at you. "Sorry about the mess. Lazar just finished fucking my brains out."`);
    scene.text('If she\'s even at all embarrassed by her appearance, then she doesn\'t show it, sighing in what seems like deep satisfaction before unsteadily climbing to her feet and stumbling towards her en-suite bathroom.');
    scene.text('"Give me a sec to clean up?" she asks and disappears inside without waiting for a response. You hear the sounds of the shower splashing and a few minutes later a wet, but equally nude Albina reappears toweling her hair.');
    scene.text('She grins at you, snaps a flimsy-looking thong around her hips, and throws on a tank top without a bra before sitting down next to you. "What\'s up?"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
  }, goto: ['albinahome', 'bedroom'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterJoin(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/anushka/sex/spy/join/walkin3.jpg');
  scene.text('You\'re not really sure what you\'re thinking as you reach for the handle and open the door, startling the two of them as you walk into the room.');
  // TODO-QSP: dynamic text: "What the fuck? <<$pcs_nickname>>?!" Albina asks in a somewhat confused tone as ...
  scene.text(`"What the fuck? ${((s as any).pcs_nickname ?? 0)}?!" Albina asks in a somewhat confused tone as Lazar just grins.`);
  if (((s as any).AlbinaQW ?? 0)?.['Lazar_Threesome'] === 1) {
    scene.text('"You guys sounded like you were having fun, so I thought we could make it another threesome?" you ask with a smile.');
    if ((!(Math.floor(Math.random() * 3) + 0))) {
      if (((s as any).AlbinaQW ?? 0)?.['lazar_bj_contest'] === 0) {
        scene.text('"We <i>could</i> have another threesome, and I\'d <i>love</i> to fuck both of you at the same time again, but what about doing something... a little different this time?" Lazar grins.');
        scene.text('"Oh?" Albina smirks as she gazes at Lazar\'s rock hard cock and bites her lip. "What were you thinking?"');
        scene.text('"How about a little contest to see who\'s the better cocksucker?" he replies. "The winner gets my cum all over their pretty face."');
        scene.actions([
          { label: 'Agree', goto: ['albina_sex_scenes', 'bj_contest'] },
          { label: 'Have a threesome', handler: (st: GameState) => {
    scene.text('"No thanks," you reply. "I want to get fucked by that nice big cock again instead."');
    scene.text('Albina grins and invites you to join them on the bed.');
    scene.actions([
      { label: 'Suck his cock', goto: ['albina_sex_scenes', 'lazar_threesome'] },
    ]);
  } },
        ]);
      } else {
        scene.text('Lazar grins. "You girls want to have another cocksucking competition?"');
        scene.text('Albina just shrugs and looks at you.');
        scene.actions([
          { label: 'Agree', goto: ['albina_sex_scenes', 'bj_contest'] },
          { label: 'Have a threesome', handler: (st: GameState) => {
    scene.text('"No thanks," you reply. "I want to get fucked by that nice big cock again instead."');
    scene.text('Albina grins and invites you to join them on the bed.');
    scene.actions([
      { label: 'Suck his cock', goto: ['albina_sex_scenes', 'lazar_threesome'] },
    ]);
  } },
        ]);
      }
    } else {
      scene.text('Lazar\'s grin grows even wider. "Having another threesome with you two babes? Fuck yeah, I\'m down with that!"');
      scene.text('Albina smiles and shakes her head before inviting you to join them on the bed.');
      scene.actions([
        { label: 'Suck his cock', goto: ['albina_sex_scenes', 'lazar_threesome'] },
      ]);
    }
  } else {
    scene.text('"Sorry!" you reply as you fake surprise at the scene in front of you. "I didn\'t think you guys were... doing this..."');
    scene.text('Albina smirks. "You\'re telling me you <i>didn\'t</i> hear us?"');
    if ((!(Math.floor(Math.random() * 3) + 0))) {
      if (((s as any).AlbinaQW ?? 0)?.['lazar_bj_contest'] === 0) {
        scene.text('"I\'d <i>love</i> to fuck both of you at the same time, but what about doing something... a little different?" Lazar grins.');
        scene.text('"Oh?" Albina smirks as she gazes at Lazar\'s rock hard cock and bites her lip. "What were you thinking?"');
        scene.text('"How about a little contest to see who\'s the better cocksucker?" he replies. "The winner gets my cum all over their pretty face."');
        scene.actions([
          { label: 'Agree', goto: ['albina_sex_scenes', 'bj_contest'] },
          { label: 'Have a threesome', handler: (st: GameState) => {
    scene.text('"No thanks," you reply. "I want to get fucked by that nice big cock instead."');
    scene.text('Albina grins and invites you to join them on the bed.');
    scene.actions([
      { label: 'Suck his cock', goto: ['albina_sex_scenes', 'lazar_threesome'] },
    ]);
  } },
        ]);
      } else {
        scene.text('Lazar grins. "You girls want to have another cocksucking competition?"');
        scene.text('Albina just shrugs and looks at you.');
        scene.actions([
          { label: 'Agree', goto: ['albina_sex_scenes', 'bj_contest'] },
          { label: 'Have a threesome', handler: (st: GameState) => {
    scene.text('"No thanks," you reply. "I want to get fucked by that nice big cock this time."');
    scene.text('Albina grins and invites you to join them on the bed.');
    scene.actions([
      { label: 'Suck his cock', goto: ['albina_sex_scenes', 'lazar_threesome'] },
    ]);
  } },
        ]);
      }
    } else {
      scene.text('Lazar\'s grin grows even wider. "Well, now that you\'re here... How about you join us? I\'d love to fuck you two babes at the same time!"');
      scene.text('Albina grins and invites you to join them on the bed.');
      scene.actions([
        { label: 'Suck his cock', goto: ['albina_sex_scenes', 'lazar_threesome'] },
      ]);
    }
  }
  scene.build();
}

function enterLazarThreesome(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A149');
  qspCall(s, 'npcStat', 'A23', 'a');
  scene.img('images/characters/pavlovsk/school/girl/albina/sex/lazar/laz3some1.jpg');
  scene.text('You strip naked as Albina repositions herself to suck Lazar\'s dick. Once you come over to join them, she pops his dick out of her mouth and offers it to you. You take it into your mouth and start sucking it while she licks and sucks his balls.');
  scene.text('You swap his cock back and forth between each other before she stops and pushes you onto the bed. She then bends over and buries her head into your crotch as Lazar moves in behind her and slides his dick back into her pussy.');
  scene.text('He smacks her ass a few times before he starts fucking her as she licks and sucks on your clit, her moans and tongue piercing adding to your pleasure.');
  qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID ?? 0), 'group');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Get eaten out', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/lazar/laz3some2.jpg');
    scene.text('You reach down and grab the back of her head, pulling her tighter against you as you start rocking against her face, smearing her with your wetness.');
    scene.text('Just as you\'re about to cum, however, she\'s pulled away by Lazar, who moves in between your legs and grinds the tip of his dick between your pussy lips.');
    qspCall(s, 'arousal', 'cuni', 5, ((s as any).npcID1 ?? 0), 'group', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Lie on your back', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/lazar/laz3some3.jpg');
    (s as any).vaginal_slip = 8;
    scene.text('Albina climbs onto the bed as you spread your legs and Lazar slowly penetrates your pussy, causing you to moan softly as his huge, thick cock stretches you out.');
    scene.text('He starts fucking you as Albina straddles you and sits on your face, her soaking wet pussy dripping into your mouth as you start licking her folds and sucking her clit while she plays with your breasts, kneading them in her hands and squeezing your nipples.');
    scene.text('She soon starts rocking her hips over your face, smearing you with her sticky wetness as Lazar starts fucking you even harder, his balls deep thrusts bottoming out inside you.');
    qspCall(s, 'arousal', 'vaginal', 5, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Join in sucking his dick', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/lazar/laz3some1.jpg');
    scene.text('You don\'t know how long he fucks you, but it feels <i>amazing</i> none the less. He eventually pulls out and Albina climbs off of you. You crawl over to the edge of the bed with her and take turns sucking his dick before Albina stops and motions for Lazar to lie back on the bed.');
    scene.text('As he does, she grabs her bottle of lube, squirts a plentiful amount onto her fingers and rubs it into her asshole before fingering herself. She then squirts some lube onto Lazar\'s dick and strokes it up and down his shaft which, combined with your pussy juices, gets him nice and slick.');
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Watch Albina get fucked', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/lazar/laz3some4.jpg');
    scene.text('All lubed up, she squats above him reverse cowgirl style and guides the tip of his dick to her asshole. She relaxes and slowly slides down, moaning softly as his dick penetrates her ass.');
    scene.text('She then starts riding him, her ass slapping off his hips as she picks up speed. Lazar then grabs her knees and pulls her legs back before he starts hammering her ass full nelson, causing her eyes to roll back in her head in pleasure.');
    scene.text('After a few minutes of this, he pulls out of her and drops her to one side, leaving her looking a little disappointed.');
    // TODO-QSP: dynamic text: "Your turn, <<$pcs_nickname>>," he says as he reaches over and gives your ass a ...
    scene.text(`"Your turn, ${((s as any).pcs_nickname ?? 0)}," he says as he reaches over and gives your ass a firm squeeze.`);
    qspCall(s, 'arousal', 'voyeur_sex', 5, 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'No anal', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/lazar/alblaz6.jpg');
    scene.text('You shake your head. "Sorry, but I don\'t want to do anal."');
    scene.text('He just shrugs at you and then smiles at Albina. "Your ass ready for round two then?"');
    scene.text('She bites her lip and giggles at him as she bends over on all fours and invitingly wiggles her ass at him.');
    scene.text('He moves up behind her and slides his dick back into her awaiting hole, causing her to moan loudly in pleasure as he starts really hammering her ass.');
    scene.text('She begs him to go harder as she grips the sheets tightly and moans loudly in pleasure. It doesn\'t take long until she has an intense orgasm, her pussy juices squirting everywhere as her legs buckle.');
    scene.text('"Fuck, I\'m about to cum!" he cries out.');
    qspCall(s, 'arousal', 'voyeur_sex', 5, 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Climax', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/mff4.mp4');
    scene.text('He grabs hold of her hips and groans loudly in pleasure as he cums deep in her ass, Albina moaning softly at the sensation as he unloads inside her. When he finally finishes, he motions for you to slide underneath him as he spreads Albina\'s cheeks with his hands. You do as you\'re told and when he pulls out, a steady stream of thick cum flows out of Albina\'s ass and down her pussy, where it drips onto your face and into your open mouth.');
    scene.text('When it finally stops, Albina turns around, takes his dick into her mouth and sucks it clean before she smiles down at you. She then leans down and starts licking up the cum on your face, not stopping until every last drop is in her mouth. She then pulls you up onto your knees and the two of you swallow Lazar\'s cum in front of him, a wide grin appearing on his face when you stick out your clean tongues.');
    scene.text('He then collapses back on the bed and you and Albina crawl over and join him as you all bask in the afterglow of your threesome.');
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/lazar/laz3some5.jpg');
    scene.text('After a few minutes, Lazar gets up. "I need to get going, girls," he says and starts getting dressed. Once he finishes, he leans over and gives Albina a kiss on the forehead. "This was great! We should do again sometime," he says and points at both of you with a smirk.');
    scene.text('Albina teases him by licking your pussy as he leaves, causing him to grin. Once he leaves, you both clean up and get dressed.');
    (s as any).cumspclnt = 12;
    ((s as any).AlbinaQW ?? {})['Lazar_Threesome'] = (((s as any).AlbinaQW ?? {})['Lazar_Threesome'] ?? 0) + (1);
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Relax', goto: ['albina_sex_scenes', 'leave'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Get your ass fucked', handler: (st: GameState) => {
    (s as any).anal_slip = 8;
    qspCall(s, 'arousal', 'anal_finger', (-5), ((s as any).npcID1 ?? 0), 'group', 'lesbian');
    qspCall(s, 'arousal', 'anal', 5, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/lazar/alblaz6.jpg');
    scene.text('You stare at the size of Lazar\'s dick and bite your lip. "Yeah, I want you in my ass <i>now</i>," you say teasingly and bend over on all fours, giving him a good wiggle of your ass.');
    scene.text('You look back and see Albina squirting a good amount of lube onto her fingers and gasp when you feel the cold liquid touch your asshole as she starts rubbing it in. You moan softly when two of her fingers slide into you and she slowly fingers you, stretching you out for Lazar\'s dick.');
    scene.text('Once she thinks you\'re ready, she pulls her fingers out and you feel the tip of Lazar\'s dick pressing against your asshole.');
    scene.text('You relax, and thanks to the lube, his dick easily pushes into your ass, causing you to groan a little as it does. He goes slow at first to let you adjust, but as you moan louder in pleasure, he starts picking up the pace and is soon pounding your backdoor, his hips slapping off your ass with every thrust.');
    scene.text('Albina isn\'t willing to be left out, however, and gets on all fours in front of your face, presenting her wet holes to you. She wiggles her hips, expecting you to get to work.');
    scene.actions([
      { label: 'Eat her pussy', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/lazar/laz3some2.jpg');
    scene.text('You have Albina get on her back and spread her legs in front of you. When she does, you go down her pussy, licking her wet folds and sucking on her engorged clit while fingering her, her pussy tightly clamping around your digits as you pleasure her.');
    scene.text('She eventually reaches her orgasm and her pussy sprays her juices over your face as his ragged thrusts and heavy breathing tell you that Lazar is close as well, so you beg him to go faster while tightly squeezing your asshole around his dick. He soon cries out that he\'s going to cum.');
    qspCall(s, 'arousal', 'cuni_give', (-5), ((s as any).npcID1 ?? 0), 'group', 'lesbian');
    qspCall(s, 'arousal', 'anal', 5, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Climax', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/sex/mff4.mp4');
    scene.text('He starts really going at it before he grunts and moans in pleasure as you feel his warm cum spurting into your ass. When he finishes, he spreads your ass and pulls out.');
    scene.text('You squeeze and immediately feel a stream of cum start running down the inside of your leg. Albina, having recovered from her orgasm, suddenly crawls in behind you and runs her tongue up the length of your thigh, licking up the sticky liquid on your leg before she stops underneath your ass and lets the rest of the cum flow into her mouth.');
    scene.text('When the stream finally stops, you turn around and watch Albina grimace as she swallows before sticking her tongue out and showing you both that she\'s gulped down all of the load.');
    scene.text('Lazar then collapses back on the bed, satisfied, and you and Albina crawl over and join him as you all bask in the afterglow of your threesome.');
    qspCall(s, 'arousal', 'anal', 5, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'cum_call', 'anus', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/albina/sex/lazar/laz3some5.jpg');
    scene.text('After a few minutes, Lazar gets up. "I need to get going, girls," he says and starts getting dressed. Once he finishes, he leans over and gives Albina a kiss on the forehead. "This was great! We should do again sometime," he says and points at both of you with a smirk.');
    scene.text('Albina teases him by licking your pussy as he leaves, causing him to grin. Once he leaves, you both clean up and get dressed.');
    (s as any).cumspclnt = 3;
    ((s as any).AlbinaQW ?? {})['Lazar_Threesome'] = (((s as any).AlbinaQW ?? {})['Lazar_Threesome'] ?? 0) + (1);
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Relax', goto: ['albina_sex_scenes', 'leave'] },
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

function enterBjContest(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A149');
  scene.img('images/shared/sex/blowjob/kotovbj114.mp4');
  if (((s as any).AlbinaQW ?? 0)?.['lazar_bj_contest'] === 0) {
    scene.text('"A blowjob contest? That sounds like fun!" you reply, feeling a little excited.');
  } else {
    scene.text('"I\'m down for another blowjob contest," you reply with a grin.');
  }
  scene.text('"Since Albina has already had a shot, why don\'t you go first?" Lazar grins as he spanks Albina and invites you to kneel in front of him.');
  scene.text('Albina watches as you get down in front of Lazar and take his cock into your mouth. It\'s already wet with her saliva and pussy juices.');
  if (((s as any).pcs_throat ?? 0) <= 10) {
    scene.text('Your inexperience at blowjobs becomes obvious and you can barely get a reaction out of Lazar, but you still give it your best shot.');
    scene.text('You spot a curious Albina watching in the corner of your eye, but she\'s obviously not going to help her competition by giving you any advice.');
  } else {
    if (((s as any).pcs_throat ?? 0) <= 25) {
      scene.text('You relax your throat and take his shaft into your mouth before you start sucking.');
      scene.text('"Oh yeah! Just like that!" he grunts as you slurp and gag on his cock.');
    } else {
      if (((s as any).pcs_throat ?? 0) <= 35) {
        scene.text('You feel your throat loosen up a little, allowing you to take him a little deeper into your mouth before your gag reflex kicks in.');
        scene.text('He grunts in pleasure as you obediently start sucking and licking his shaft while only occasionally gagging.');
      } else {
        scene.text('Your lack of gag reflex means you\'re able to take almost his entire cock down your throat without choking.');
        scene.text('Even Lazar seems impressed by how much that you\'re swallowing. "<i>Fffuuuuuuuuuckkkk</i> me, this feels amazing!"');
        scene.text('You spot Albina watching in the corner of your eye, but can\'t tell if she\'s impressed or jealous.');
      }
    }
  }
  // TODO-QSP: dynamic text: After a few minutes, Albina stops you. "My turn now, <<$pcs_nickname>>."
  scene.text(`After a few minutes, Albina stops you. "My turn now, ${((s as any).pcs_nickname ?? 0)}."`);
  qspCall(s, 'arousal', 'bj', 3, ((s as any).npcID ?? 0));
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Albina\'s turn', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur_sex', 3);
    scene.img('images/shared/sex/blowjob/kotovbj70.mp4');
    scene.text('You move aside and watch as Albina kneels in front of Lazar and starts eagerly licking and sucking on his balls, causing him to moan loudly in pleasure as his cock twitches in anticipation.');
    scene.text('Albina smirks before she moves up and takes half of Lazar\'s shaft into her mouth in one go before she starts sucking and licking his cock, giving him one of the most passionate blowjobs you\'ve ever seen.');
    scene.text('When Lazar eventually stops her, his cock is covered in her drool, with ropes of her saliva running from his shaft to her mouth.');
    scene.text('You kneel next to Albina as she smiles up at him. "Okay Lazar, time to pick a winner. Who gave you the best blowjob?"');
    if (((s as any).pcs_throat ?? 0) <= 25) {
      scene.text('Lazar smiles at her. "Not even close. You win by a mile."');
      scene.text('Albina grins triumphantly as she scoots over and starts jerking him off.');
      scene.actions([
        { label: 'Albina gets her reward', goto: ['albina_sex_scenes', 'bj_contest_alb_win'] },
      ]);
    } else {
      if (((s as any).pcs_throat ?? 0) <= 35) {
        if ((!(Math.floor(Math.random() * 3) + 0))) {
          // TODO-QSP: dynamic text: "It was close, but..." he says before he smiles at you. "<<$pcs_nickname>> manag...
          scene.text(`"It was close, but..." he says before he smiles at you. "${((s as any).pcs_nickname ?? 0)} managed to edge out the win on this one."`);
          scene.text('You smile as you scoot over and start jerking him off.');
          scene.actions([
            { label: 'Get your reward', goto: ['albina_sex_scenes', 'bj_contest_sveta_win'] },
          ]);
        } else {
          scene.text('"It was close, but..." he says before he smiles at Albina. "You managed to edge out the win on this one."');
          scene.text('Albina grins triumphantly as she scoots over and starts jerking him off.');
          scene.actions([
            { label: 'Albina gets her reward', goto: ['albina_sex_scenes', 'bj_contest_alb_win'] },
          ]);
        }
      } else {
        if ((!(Math.floor(Math.random() * 2) + 0))) {
          // TODO-QSP: dynamic text: "Those were some amazing blowjobs, girls! It was <i>really</i> close, but..." he...
          scene.text(`"Those were some amazing blowjobs, girls! It was <i>really</i> close, but..." he says before he smiles at you. "${((s as any).pcs_nickname ?? 0)} managed to edge out the win on this one."`);
          scene.text('You smile as you scoot over and start jerking him off.');
          scene.actions([
            { label: 'Get your reward', goto: ['albina_sex_scenes', 'bj_contest_sveta_win'] },
          ]);
        } else {
          scene.text('"Those were some amazing blowjobs, girls! It was <i>really</i> close, but..." he says before he smiles at Albina. "Albina managed to edge out the win on this one."');
          scene.text('Albina grins triumphantly as she scoots over and starts jerking him off.');
          scene.actions([
            { label: 'Albina gets her reward', goto: ['albina_sex_scenes', 'bj_contest_alb_win'] },
          ]);
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterBjContestAlbWin(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'voyeur_sex', 1);
  scene.img('images/shared/sex/cum/facial/facial0,3.mp4');
  scene.text('You watch as Albina jerks Lazar off for a few seconds before he takes over. A few seconds later, he starts grunting and Albina closes her eyes before his cum suddenly splatters over her face, covering her cheek and forehead while also gluing one of her eyes shut.');
  scene.text('Once he finishes, he grunts in satisfaction before a half blind Albina takes his cock into her mouth, sucking it clean before she pops it out of her mouth and smiling up at him.');
  scene.text('"Good girl..." he moans softly. "Good girl..."');
  scene.text('Albina then cleans herself up with some wipes before she and Lazar get dressed. Once he finishes, he gives both you and Albina a kiss on the forehead.');
  scene.text('"That was great, girls! We should do again sometime," he says and points at both of you with a smirk before he leaves.');
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', goto: ['albina_sex_scenes', 'leave'] },
  ]);
  scene.build();
}

function enterBjContestSvetaWin(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'bj', 1, 'A149');
  qspCall(s, 'cum_call', 'face', 'A149', 1);
  scene.img('images/shared/sex/cum/facial/facial0,3.mp4');
  scene.text('You jerk Lazar off for a few seconds before he takes over. A few seconds later, he starts grunting and you close your eyes before his cum suddenly splatters over your face, covering your cheek and forehead while also gluing one of your eyes shut.');
  scene.text('Once he finishes, he grunts in satisfaction. Half blind, you take his cock into your mouth, sucking it clean before popping it out of your mouth and smiling up at him.');
  scene.text('"Good girl..." he moans softly. "Good girl..."');
  scene.text('Albina then offers you some wipes to clean yourself before she and Lazar get dressed. Once he finishes, he gives both you and Albina a kiss on the forehead.');
  scene.text('"That was great, girls! We should do again sometime," he says and points at both of you with a smirk before he leaves.');
  (s as any).cumspclnt = 3;
  qspCall(s, 'cum_cleanup', '');
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', goto: ['albina_sex_scenes', 'leave'] },
  ]);
  scene.build();
}

function enterKeepUsingPhone(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/albinahome/phone.jpg');
  scene.text('You keep using your phone, scrolling through social media and playing a few games to pass the time.');
  scene.text('When you finally get bored, you hear what sounds like muffled moaning and a few minutes later hear someone exiting Albina\'s bedroom and walking away down the hall.');
  scene.text('When you\'re sure they\'re gone, you stand up and leave the bathroom.');
  scene.actions([
    { label: 'Go to her room', goto: ['albina_sex_scenes', 'lazar_after'] },
  ]);
  scene.build();
}

function enterWatchPorn(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/albinahome/phone.jpg');
  scene.text('The thought of Albina and Lazar having sex down the hall turns you on, so you search for a good porn video to pass the time.');
  scene.text('You find one you like the look of and start watching it, finding yourself getting wetter and wetter...');
  qspCall(s, 'arousal', 'porn', 5);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Just keep watching', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/phone.jpg');
    scene.text('The idea of rubbing one out crosses your mind, but the risk of being caught is enough to discourage the thought. You keep watching the video and when it ends, you hear the sound of Albina\'s door closing and someone walking away down the hall.');
    scene.text('When you\'re sure they\'re gone, you stand up and leave the bathroom.');
    qspCall(s, 'arousal', 'porn', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go to her room', goto: ['albina_sex_scenes', 'lazar_after'] },
    ]);
  } },
    { label: 'Rub one out', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/masturbate.jpg');
    if (((s as any).pantyworntype ?? 0) === 'none') {
      scene.text('You\'re now feeling extremely horny, and the thought of someone catching you turns you on even more. You put your phone to the side and pull your soaked panties down, exposing your eager pussy. You start fondling away at your engorged clit with one hand while using the other to slide some fingers into your wet hole and start finger banging yourself.');
    } else {
      scene.text('You\'re now feeling extremely horny, and the thought of someone catching you turns you on even more. You put your phone to the side and start fondling away at your engorged clit with one hand while using the other to slide some fingers into your wet hole and start finger banging yourself.');
    }
    qspCall(s, 'arousal', 'clit_finger', (-5), 'masturbate');
    qspCall(s, 'stat', '');
    scene.text('When your orgasm ends, you hear the sound of Albina\'s door closing and someone walking away down the hall.');
    scene.text('When you\'re sure they\'re gone, you pull your clothes back on and leave the bathroom.');
    scene.actions([
      { label: 'Go to her room', goto: ['albina_sex_scenes', 'lazar_after'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'leave':
      enterLeave(s, scene);
      break;
    case 'kissing1':
      enterKissing1(s, scene);
      break;
    case '69ing_1':
      enter69ing_1(s, scene);
      break;
    case 'virgin_take1':
      enterVirginTake1(s, scene);
      break;
    case 'virgin_take1.1':
      enterVirginTake1_1(s, scene);
      break;
    case 'virgin_take1.2':
      enterVirginTake1_2(s, scene);
      break;
    case 'virgin_take2.1':
      enterVirginTake2_1(s, scene);
      break;
    case 'virgin_take2.2':
      enterVirginTake2_2(s, scene);
      break;
    case 'virgin_take3':
      enterVirginTake3(s, scene);
      break;
    case 'virgin_take4.1':
      enterVirginTake4_1(s, scene);
      break;
    case 'virgin_take4.2':
      enterVirginTake4_2(s, scene);
      break;
    case 'virgin_take4.3':
      enterVirginTake4_3(s, scene);
      break;
    case 'virgin_take5':
      enterVirginTake5(s, scene);
      break;
    case 'virgin_take6':
      enterVirginTake6(s, scene);
      break;
    case 'virgin_take_after1':
      enterVirginTakeAfter1(s, scene);
      break;
    case 'virgin_take_after2':
      enterVirginTakeAfter2(s, scene);
      break;
    case 'virgin_take_after3':
      enterVirginTakeAfter3(s, scene);
      break;
    case 'virgin_albina_turn1':
      enterVirginAlbinaTurn1(s, scene);
      break;
    case 'virgin_albina_pillow_talk_start':
      enterVirginAlbinaPillowTalkStart(s, scene);
      break;
    case 'virgin_albina_pillow_talk_menu':
      enterVirginAlbinaPillowTalkMenu(s, scene);
      break;
    case 'sex_event1':
      enterSexEvent1(s, scene);
      break;
    case 'wear_strapon':
      enterWearStrapon(s, scene);
      break;
    case 'fuck_albina':
      enterFuckAlbina(s, scene);
      break;
    case 'fuck_albina_magic':
      enterFuckAlbinaMagic(s, scene);
      break;
    case 'fuck_albina_ass':
      enterFuckAlbinaAss(s, scene);
      break;
    case 'fuck_albina_ass_magic':
      enterFuckAlbinaAssMagic(s, scene);
      break;
    case 'receive_strapon':
      enterReceiveStrapon(s, scene);
      break;
    case 'albina_fucks_you':
      enterAlbinaFucksYou(s, scene);
      break;
    case 'albina_fucks_you_virgin':
      enterAlbinaFucksYouVirgin(s, scene);
      break;
    case 'albina_ass_fucks_you':
      enterAlbinaAssFucksYou(s, scene);
      break;
    case 'albina_ass_fucks_you_anal_virgin':
      enterAlbinaAssFucksYouAnalVirgin(s, scene);
      break;
    case 'albina_ass_fucks_you_only_dildo':
      enterAlbinaAssFucksYouOnlyDildo(s, scene);
      break;
    case 'albina_ass_fucks_you_only_fist':
      enterAlbinaAssFucksYouOnlyFist(s, scene);
      break;
    case 'first_anal':
      enterFirstAnal(s, scene);
      break;
    case 'first_anal1':
      enterFirstAnal1(s, scene);
      break;
    case 'anal_refuse':
      enterAnalRefuse(s, scene);
      break;
    case 'strapon_finish':
      enterStraponFinish(s, scene);
      break;
    case 'use_butt_plug':
      enterUseButtPlug(s, scene);
      break;
    case 'albina_shower':
      enterAlbinaShower(s, scene);
      break;
    case 'albina_shower_pussy':
      enterAlbinaShowerPussy(s, scene);
      break;
    case 'albina_shower_ass':
      enterAlbinaShowerAss(s, scene);
      break;
    case 'pussy_eating_contest':
      enterPussyEatingContest(s, scene);
      break;
    case 'pussy_eating_contest1':
      enterPussyEatingContest1(s, scene);
      break;
    case 'pussy_contest_end':
      enterPussyContestEnd(s, scene);
      break;
    case 'lazar_start':
      enterLazarStart(s, scene);
      break;
    case 'lazar_door_first':
      enterLazarDoorFirst(s, scene);
      break;
    case 'lazar_give_privacy':
      enterLazarGivePrivacy(s, scene);
      break;
    case 'lazar_peek1':
      enterLazarPeek1(s, scene);
      break;
    case 'lazar_peek2':
      enterLazarPeek2(s, scene);
      break;
    case 'lazar_peek3':
      enterLazarPeek3(s, scene);
      break;
    case 'lazar_peek_cum':
      enterLazarPeekCum(s, scene);
      break;
    case 'lazar_peek_end_wait':
      enterLazarPeekEndWait(s, scene);
      break;
    case 'lazar_peek_end_run':
      enterLazarPeekEndRun(s, scene);
      break;
    case 'lazar_after':
      enterLazarAfter(s, scene);
      break;
    case 'join':
      enterJoin(s, scene);
      break;
    case 'lazar_threesome':
      enterLazarThreesome(s, scene);
      break;
    case 'bj_contest':
      enterBjContest(s, scene);
      break;
    case 'bj_contest_alb_win':
      enterBjContestAlbWin(s, scene);
      break;
    case 'bj_contest_sveta_win':
      enterBjContestSvetaWin(s, scene);
      break;
    case 'keep_using_phone':
      enterKeepUsingPhone(s, scene);
      break;
    case 'watch_porn':
      enterWatchPorn(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const albina_sex_scenes: LocationDef = {
  name: 'albina_sex_scenes',
  title: 'You kiss Albina deeply, pulling her face into yours and drin',
  region: 'other',
  enter: enter,
};
