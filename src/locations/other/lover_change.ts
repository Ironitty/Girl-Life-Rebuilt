import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterHair(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: As you arrive at the salon with <<$npcdesc>>, <<$Xe>> heads over to the counter ...
  scene.text(`As you arrive at the salon with ${((s as any).npcdesc ?? 0)}, ${((s as any).Xe ?? 0)} heads over to the counter and tells something to the barber. The barber nods and comes towards you.`);
  // TODO-QSP: dynamic text: "So Ms. <<$pcs_lastname>>, you want to get your hair dyed <<$hairPref>> now is t...
  scene.text(`"So Ms. ${((s as any).pcs_lastname ?? 0)}, you want to get your hair dyed ${((s as any).hairPref ?? 0)} now is that right?"`);
  return;
  scene.actions([
    { label: 'Nod', handler: (st: GameState) => {
    scene.text('Knowing there is no way to back out of this now, you meekly nod.');
    // TODO-QSP: dynamic text: "Alrighty then, your hair will be <<$hairPref>> before you know it!"
    scene.text(`"Alrighty then, your hair will be ${((s as any).hairPref ?? 0)} before you know it!"`);
    scene.actions([
      { label: 'Take a seat', handler: (st: GameState) => {
    (s as any).pcs_haircol = temp_haircol;
    (s as any).dyefade = Math.floor(Math.random() * 8) + 35;
    (s as any).collength = ((s as any).pcs_hairlng ?? 0);
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: In less than half an hour you see that your hair's original color has been chang...
    scene.text(`In less than half an hour you see that your hair's original color has been changed to ${((s as any).hairPref ?? 0)}.`);
    scene.actions([
      { label: 'Get up from chair and go to your <<$npcrelat>>.', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You walk towards your <<$npcrelat>> with your new <<$hairPref>> hair and <<$Xe>>...
    scene.text(`You walk towards your ${((s as any).npcrelat ?? 0)} with your new ${((s as any).hairPref ?? 0)} hair and ${((s as any).Xe ?? 0)} tells you that you look amazing.`);
    // TODO-QSP: dynamic text: You can't say why, but you feel it would be harder to say no next time if <<$Xe>...
    scene.text(`You can't say why, but you feel it would be harder to say no next time if ${((s as any).Xe ?? 0)} asked you to change something.`);
    scene.text('You then leave the salon and head home.');
    (s as any).npc_compliance[$npcID] = ((s as any).npc_compliance[$npcID] ?? 0) - (1);
    scene.actions([
      { label: 'Continue', goto: ['homes_properties', 'go_home'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMake(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'stat', '');
  (s as any).makeupSetting = ((s as any).temp_makepref ?? 0);
  // TODO-QSP: dynamic text: After you agree to change your makeup routine for <<$Xem>>, you talk a bit with ...
  scene.text(`After you agree to change your makeup routine for ${((s as any).Xem ?? 0)}, you talk a bit with ${((s as any).Xem ?? 0)} for an hour and then head home.`);
  scene.text('You can\'t say why, but you feel it would be harder to say no next time if he asked you to change something.');
  (s as any).npc_compliance[$npcID] = ((s as any).npc_compliance[$npcID] ?? 0) - (1);
  return;
  scene.actions([
    { label: 'Continue', goto: ['homes_properties', 'go_home'] },
  ]);
  scene.build();
}

function enterPier(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: Since you agreed to adjust your piercings to fit your <<$npcrelat>>'s preference...
  scene.text(`Since you agreed to adjust your piercings to fit your ${((s as any).npcrelat ?? 0)}'s preferences, ${((s as any).Xe ?? 0)} looks at any pre-existing piercings you may have.`);
  if (((s as any).pcs_piercings ?? 0)?.['wearing'] >= ((s as any).pierPrefTmpMin ?? 0)  &&  ((s as any).pcs_piercings ?? 0)?.['wearing'] < ((s as any).pierPrefTmpMax ?? 0)) {
    scene.text('This should not fire off. NO else if.');
    return;
    scene.actions([
      { label: 'Continue', goto: ['homes_properties', 'go_home'] },
    ]);
  } else {
    // TODO-QSP: dynamic text: <<$npcdesc>> says that you just need to remove the ones that you have and you wi...
    scene.text(`${((s as any).npcdesc ?? 0)} says that you just need to remove the ones that you have and you will look amazing.`);
    if (((s as any).pcs_piercings ?? 0)?.['total'] >= ((s as any).pierPrefTmpMin ?? 0)) {
      // TODO-QSP: dynamic text: <<$npcdesc>> sees that you have enough piercings already, and that you just need...
      scene.text(`${((s as any).npcdesc ?? 0)} sees that you have enough piercings already, and that you just need to wear them.`);
      scene.actions([
        { label: 'Let <<$Xem>> add piercings', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: <<$Xec>> pulls out a couple of piercings and starts to put them on you.
    scene.text(`${((s as any).Xec ?? 0)} pulls out a couple of piercings and starts to put them on you.`);
    if (((s as any).pcs_piercings ?? 0)?.['tongue'] < 0  &&  ((s as any).pcs_piercings ?? 0)?.['wearing'] < ((s as any).pierPrefTmpMin ?? 0)) {
      // TODO-QSP: dynamic text: <<$Xec>> asks you to stick out your tongue, then inserts a barbell into your ton...
      scene.text(`${((s as any).Xec ?? 0)} asks you to stick out your tongue, then inserts a barbell into your tongue.`);
      qspCall(s, 'piercing_management', 'wear', 'tongue', 1);
    }
    if (((s as any).pcs_piercings ?? 0)?.['lip'] < 0  &&  ((s as any).pcs_piercings ?? 0)?.['wearing'] < ((s as any).pierPrefTmpMin ?? 0)) {
      // TODO-QSP: dynamic text: <<$Xec>> gently holds your lip, then inserts a ring.
      scene.text(`${((s as any).Xec ?? 0)} gently holds your lip, then inserts a ring.`);
      qspCall(s, 'piercing_management', 'wear', 'lip', 1);
    }
    if (((s as any).pcs_piercings ?? 0)?.['ears'] < 0  &&  ((s as any).pcs_piercings ?? 0)?.['wearing'] < ((s as any).pierPrefTmpMin ?? 0)) {
      // TODO-QSP: dynamic text: <<$Xec>> sees you do not have earrings and proceeds to put rings onto your ears....
      scene.text(`${((s as any).Xec ?? 0)} sees you do not have earrings and proceeds to put rings onto your ears. `);
      qspCall(s, 'piercing_management', 'wear', 'ears', 1);
    }
    if (((s as any).pcs_piercings ?? 0)?.['nose'] < 0  &&  ((s as any).pcs_piercings ?? 0)?.['wearing'] < ((s as any).pierPrefTmpMin ?? 0)) {
      // TODO-QSP: dynamic text: <<$Xec>> takes out a ring and then carefully inserts a ring through your nose.
      scene.text(`${((s as any).Xec ?? 0)} takes out a ring and then carefully inserts a ring through your nose.`);
      qspCall(s, 'piercing_management', 'wear', 'nose', 1);
    }
    if (((s as any).pcs_piercings ?? 0)?.['brow'] < 0  &&  ((s as any).pcs_piercings ?? 0)?.['wearing'] < ((s as any).pierPrefTmpMin ?? 0)) {
      // TODO-QSP: dynamic text: <<$npcdesc>> moves to your eyebrow and proceeds to insert a barbell.
      scene.text(`${((s as any).npcdesc ?? 0)} moves to your eyebrow and proceeds to insert a barbell.`);
      qspCall(s, 'piercing_management', 'wear', 'brow', 1);
    }
    if (((s as any).pcs_piercings ?? 0)?.['navel'] < 0  &&  ((s as any).pcs_piercings ?? 0)?.['wearing'] < ((s as any).pierPrefTmpMin ?? 0)) {
      // TODO-QSP: dynamic text: <<$Xec>> takes out a barbell and inserts it into your navel.
      scene.text(`${((s as any).Xec ?? 0)} takes out a barbell and inserts it into your navel.`);
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (2);
      qspCall(s, 'piercing_management', 'wear', 'navel', 1);
    }
    if (((s as any).pcs_piercings ?? 0)?.['nipples'] < 0  &&  ((s as any).pcs_piercings ?? 0)?.['wearing'] < ((s as any).pierPrefTmpMin ?? 0)) {
      // TODO-QSP: dynamic text: <<$npcdesc>> looks around, then pulls out a couple of nipple rings. You can tell...
      scene.text(`${((s as any).npcdesc ?? 0)} looks around, then pulls out a couple of nipple rings. You can tell it slightly turns ${((s as any).Xem ?? 0)} on as ${((s as any).Xe ?? 0)} works ${((s as any).Xyr ?? 0)} way up your shirt to put on the nipple rings.`);
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
      qspCall(s, 'piercing_management', 'wear', 'nipples', 1);
    }
    if (((s as any).pcs_piercings ?? 0)?.['pussy'] < 0  &&  ((s as any).pcs_piercings ?? 0)?.['wearing'] < ((s as any).pierPrefTmpMin ?? 0)) {
      // TODO-QSP: dynamic text: <<$npcdesc>> gets close to your ear, "Don't make a scene okay?", then <<$Xe>> no...
      scene.text(`${((s as any).npcdesc ?? 0)} gets close to your ear, "Don't make a scene okay?", then ${((s as any).Xe ?? 0)} nonchalantly slides ${((s as any).Xyr ?? 0)} hand down to your labia, and inserts a ring.`);
      scene.text('You cover your mouth as you let out a quick "Eep!", but in a second, it\'s over.');
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (7);
      qspCall(s, 'piercing_management', 'wear', 'pussy', 1);
    }
    // TODO-QSP: dynamic text: <<$npcdesc>> takes you by the hand and heads over to the piercing salon.
    scene.text(`${((s as any).npcdesc ?? 0)} takes you by the hand and heads over to the piercing salon.`);
    scene.actions([
      { label: '"All done!" <<$npcdesc>> says.', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('You look at your body and examine it.');
    if (((s as any).pierPrefTmpMax ?? 0) === 2) {
      // TODO-QSP: dynamic text: This should not fire off how did <<$Xe>> want to add stuff to nothing?
      scene.text(`This should not fire off how did ${((s as any).Xe ?? 0)} want to add stuff to nothing?`);
    } else {
      // TODO-QSP: dynamic text: You can tell <<$Xe>> likes a girl with a bit more piercings, and you can't help ...
      scene.text(`You can tell ${((s as any).Xe ?? 0)} likes a girl with a bit more piercings, and you can't help but agree in some aspect, it does make you look a bit sexier.`);
      if (((s as any).pierPrefTmpMin ?? 0) === 6) {
        scene.text('With this many piercings, you can feel many people will be exploring your body with their eyes, curious on where else you may have piercings.');
      }
      if (((s as any).npc_gentle ?? 0)?.[String((s as any).boy ?? 0)] === 0) {
        // TODO-QSP: dynamic text: You can see <<$Xe>> loves how many piercings you have, as <<$Xe>> has a slight b...
        scene.text(`You can see ${((s as any).Xe ?? 0)} loves how many piercings you have, as ${((s as any).Xe ?? 0)} has a slight blush on ${((s as any).Xyr ?? 0)} face.`);
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>> gives you one last examination with <<$Xyr>> eyes and gives you a q...
        scene.text(`${((s as any).npcdesc ?? 0)} gives you one last examination with ${((s as any).Xyr ?? 0)} eyes and gives you a quick kiss on your cheek.`);
        // TODO-QSP: dynamic text: <<$npcdesc>> comes up to you, and with a quick squeeze on the ass, kisses you on...
        scene.text(`${((s as any).npcdesc ?? 0)} comes up to you, and with a quick squeeze on the ass, kisses you on the lips and says, "Now this is a bombshell."`);
      }
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: After this you guys talk for an hour about various things, before <<$Xe>> gets u...
    scene.text(`After this you guys talk for an hour about various things, before ${((s as any).Xe ?? 0)} gets up and says ${((s as any).Xe ?? 0)} has to go.`);
    // TODO-QSP: dynamic text: You can't say why, but you feel it would be harder to say no next time if <<$Xe>...
    scene.text(`You can't say why, but you feel it would be harder to say no next time if ${((s as any).Xe ?? 0)} asked you to change something.`);
    (s as any).npc_compliance[$npcID] = ((s as any).npc_compliance[$npcID] ?? 0) - (1);
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    return;
    scene.actions([
      { label: 'Continue', goto: ['homes_properties', 'go_home'] },
    ]);
  } },
      ]);
    }
  } },
      { label: 'Enter the piercing salon', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: As you both arrive at the salon, <<$Xe>> talks real quick to the tattoo artist a...
    scene.text(`As you both arrive at the salon, ${((s as any).Xe ?? 0)} talks real quick to the tattoo artist and piercer.`);
    // TODO-QSP: dynamic text: You see <<$Xem>> hand the artist some money and the artist starts to walk up tow...
    scene.text(`You see ${((s as any).Xem ?? 0)} hand the artist some money and the artist starts to walk up towards you.`);
    // TODO-QSP: dynamic text: "Your <<$npcrelat>> says you want to get some piercings?", the artist asks.
    scene.text(`"Your ${((s as any).npcrelat ?? 0)} says you want to get some piercings?", the artist asks.`);
    scene.actions([
      { label: 'Quietly nod', handler: (st: GameState) => {
    scene.text('You know you can\'t pull out now, so you meekly nod.');
    scene.text('The man shrugs and says "Head over to the chair over there okay?"');
    scene.actions([
      { label: 'Head over to the chair', handler: (st: GameState) => {
    scene.text('As you sit down you see the man come over with the various needles he needs to do his job.');
    scene.text('He sees you are a little bit concerned about the needles and laughs, "Don\'t worry ma \'am, it will be all over before you know it!"');
    scene.text('He takes out a clean needle and proceeds with his job.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: :alreadyGotPierLoop
    (s as any).randchan = Math.floor(Math.random() * 8) + 0;
    if (((s as any).randchan ?? 0) === 0  &&  ((s as any).pcs_piercings ?? 0)?.['ears'] === 0) {
      qspCall(s, 'piercing_management', 'add', 'ears', qspUntranslated(s, "rand(1, func('piercing_management', 'get_total', 'ears'))", { location: "lover_change" }));
      qspCall(s, 'pain', '', 7, 'ears', 'pierce');
      scene.img(`${qspFunc(s, '\'piercing_management\'', '\'ears_image\'')}`);
      scene.text('The artist takes a look at your unpierced ears, and with a quick sharp pain, pierces them.');
    } else {
      qspCall(s, 'piercing_management', 'add', 'tongue', qspUntranslated(s, "rand(1, func('piercing_management', 'get_total', 'tongue'))", { location: "lover_change" }));
      qspCall(s, 'pain', '', 7, 'tongue', 'pierce');
      scene.img(`${qspFunc(s, '\'piercing_management\'', '\'tongue_image\'')}`);
      scene.text('He asks you to stick out your tongue. You comply and then start to regret it as he pierces your tongue.');
      if (((s as any).randchan ?? 0) === 2  &&  ((s as any).pcs_piercings ?? 0)?.['lip'] === 0) {
        qspCall(s, 'piercing_management', 'add', 'lip', qspUntranslated(s, "rand(1, func('piercing_management', 'get_total', 'lip'))", { location: "lover_change" }));
        qspCall(s, 'pain', '', 7, 'lips', 'pierce');
        scene.img(`${qspFunc(s, '\'piercing_management\'', '\'lip_image\'')}`);
        scene.text('The artist gently holds your lip as he drives the needle through to pierce it.');
      } else {
        qspCall(s, 'piercing_management', 'add', 'nose', qspUntranslated(s, "rand(1, func('piercing_management', 'get_total', 'nose'))", { location: "lover_change" }));
        qspCall(s, 'pain', '', 7, 'nose', 'pierce');
        scene.img(`${qspFunc(s, '\'piercing_management\'', '\'nose_image\'')}`);
        scene.text('You feel a sharp pain in your nose as he pierces your nose.');
        if (((s as any).randchan ?? 0) === 4  &&  ((s as any).pcs_piercings ?? 0)?.['brow'] === 0) {
          qspCall(s, 'piercing_management', 'add', 'brow', qspUntranslated(s, "rand(1, func('piercing_management', 'get_total', 'brow'))", { location: "lover_change" }));
          qspCall(s, 'pain', '', 7, 'eyebrows', 'pierce');
          scene.img(`${qspFunc(s, '\'piercing_management\'', '\'brow_image\'')}`);
          scene.text('The artist moves to above your eyes and quickly pierces your eyebrow.');
        } else {
          qspCall(s, 'piercing_management', 'add', 'navel', qspUntranslated(s, "rand(1, func('piercing_management', 'get_total', 'navel'))", { location: "lover_change" }));
          qspCall(s, 'pain', '', 7, 'tummy', 'pierce');
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (2);
          scene.img(`${qspFunc(s, '\'piercing_management\'', '\'navel_image\'')}`);
          scene.text('He positions himself to pierce your belly button. You feel a sharp pain through your navel as he pierces it.');
          if (((s as any).randchan ?? 0) === 6  &&  ((s as any).pcs_piercings ?? 0)?.['nipples'] === 0) {
            qspCall(s, 'piercing_management', 'add', 'nipples', qspUntranslated(s, "rand(1, func('piercing_management', 'get_total', 'nipples'))", { location: "lover_change" }));
            qspCall(s, 'pain', '', 7, 'nipples', 'pierce');
            (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
            scene.img(`${qspFunc(s, '\'piercing_management\'', '\'nipples_image\'')}`);
            scene.text('He motions for you to lift up your shirt. After you do the man grabs your breasts rather softly and carefully pierces each nipple.');
          } else {
            qspCall(s, 'piercing_management', 'add', 'pussy', qspUntranslated(s, "rand(1, func('piercing_management', 'get_total', 'pussy'))", { location: "lover_change" }));
            qspCall(s, 'pain', '', 7, 'pubic', 'pierce');
            (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (7);
            scene.img(`${qspFunc(s, '\'piercing_management\'', '\'pussy_image\'')}`);
            scene.text('"Ma \'am can you take off your bottoms?", the man says. You realize that he plans to pierce your labia and you reluctantly present yourself.');
            scene.text('You cover your mouth as you let out a quick "Eep!", as you feel a quick pain through your labia, but in a second, it\'s over.');
            if (((s as any).pcs_piercings ?? 0)?.['wearing'] >= 8) {
              scene.text('');
            } else {
              (s as any).emergencyAbort = ((s as any).emergencyAbort ?? 0) + (1);
              if (((s as any).emergencyAbort ?? 0) > 10000) {
                scene.text('<b><font color="teal">DEVELOPER WARNING: Emergency backout. Either you got very lucky or some dev made a mistake, if it happens again, file a bug report. </font></b>');
              } else {
                // TODO-QSP: jump 'alreadyGotPierLoop'
              }
            }
            qspCall(s, 'stat', '');
            scene.text('"All done!", the artist says as he starts to clean up his various tools. He says to not irritate the places that he pierced and baby them for a week or two.');
            scene.text('Before you leave he puts on the various new piercings throughout your body.');
            scene.actions([
              { label: 'Go back towards your <<$npcrelat>>', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: As you go back towards him, <<$Xe>> looks you up and down.
    scene.text(`As you go back towards him, ${((s as any).Xe ?? 0)} looks you up and down.`);
    if (((s as any).pcs_piercings ?? 0)?.['wearing'] < ((s as any).pierPrefTmpMin ?? 0)  &&  ((s as any).pcs_piercings ?? 0)?.['total'] >= ((s as any).pierPrefTmpMin ?? 0)) {
      // TODO-QSP: dynamic text: "Now lets just add the rest of the piercings…", <<$npcdesc>> says.
      scene.text(`"Now lets just add the rest of the piercings…", ${((s as any).npcdesc ?? 0)} says.`);
      if (((s as any).pcs_piercings ?? 0)?.['tongue'] < 0  &&  ((s as any).pcs_piercings ?? 0)?.['wearing'] < ((s as any).pierPrefTmpMin ?? 0)) {
        // TODO-QSP: dynamic text: <<$Xec>> asks you to stick out your tongue, then inserts a barbell into your ton...
        scene.text(`${((s as any).Xec ?? 0)} asks you to stick out your tongue, then inserts a barbell into your tongue.`);
        qspCall(s, 'piercing_management', 'add', 'tongue', 1);
      }
      if (((s as any).pcs_piercings ?? 0)?.['lip'] < 0  &&  ((s as any).pcs_piercings ?? 0)?.['wearing'] < ((s as any).pierPrefTmpMin ?? 0)) {
        // TODO-QSP: dynamic text: <<$Xec>> gently holds your lip, then inserts a ring.
        scene.text(`${((s as any).Xec ?? 0)} gently holds your lip, then inserts a ring.`);
        qspCall(s, 'piercing_management', 'add', 'lip', 1);
      }
      if (((s as any).pcs_piercings ?? 0)?.['ears'] < 0  &&  ((s as any).pcs_piercings ?? 0)?.['wearing'] < ((s as any).pierPrefTmpMin ?? 0)) {
        // TODO-QSP: dynamic text: <<$Xec>> sees you do not have earrings and proceeds to put rings onto your ears....
        scene.text(`${((s as any).Xec ?? 0)} sees you do not have earrings and proceeds to put rings onto your ears. `);
        qspCall(s, 'piercing_management', 'add', 'ears', 1);
      }
      if (((s as any).pcs_piercings ?? 0)?.['nose'] < 0  &&  ((s as any).pcs_piercings ?? 0)?.['wearing'] < ((s as any).pierPrefTmpMin ?? 0)) {
        // TODO-QSP: dynamic text: <<$Xec>> takes out a ring and then carefully inserts a ring through your nose.
        scene.text(`${((s as any).Xec ?? 0)} takes out a ring and then carefully inserts a ring through your nose.`);
        qspCall(s, 'piercing_management', 'add', 'nose', 1);
      }
      if (((s as any).pcs_piercings ?? 0)?.['brow'] < 0  &&  ((s as any).pcs_piercings ?? 0)?.['wearing'] < ((s as any).pierPrefTmpMin ?? 0)) {
        // TODO-QSP: dynamic text: <<$npcdesc>> moves to your eyebrow and proceeds to insert a barbell.
        scene.text(`${((s as any).npcdesc ?? 0)} moves to your eyebrow and proceeds to insert a barbell.`);
        qspCall(s, 'piercing_management', 'add', 'brow', 1);
      }
      if (((s as any).pcs_piercings ?? 0)?.['navel'] < 0  &&  ((s as any).pcs_piercings ?? 0)?.['wearing'] < ((s as any).pierPrefTmpMin ?? 0)) {
        // TODO-QSP: dynamic text: <<$Xec>> takes out a barbell and inserts it into your navel.
        scene.text(`${((s as any).Xec ?? 0)} takes out a barbell and inserts it into your navel.`);
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (2);
        qspCall(s, 'piercing_management', 'add', 'navel', 1);
      }
      if (((s as any).pcs_piercings ?? 0)?.['nipples'] < 0  &&  ((s as any).pcs_piercings ?? 0)?.['wearing'] < ((s as any).pierPrefTmpMin ?? 0)) {
        // TODO-QSP: dynamic text: <<$npcdesc>> looks around, then pulls out a couple of nipple rings. You can tell...
        scene.text(`${((s as any).npcdesc ?? 0)} looks around, then pulls out a couple of nipple rings. You can tell it slightly turns ${((s as any).Xem ?? 0)} on as ${((s as any).Xe ?? 0)} works ${((s as any).Xyr ?? 0)} way up your shirt to put on the nipple rings.`);
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
        qspCall(s, 'piercing_management', 'add', 'nipples', 1);
      }
      if (((s as any).pcs_piercings ?? 0)?.['pussy'] < 0  &&  ((s as any).pcs_piercings ?? 0)?.['wearing'] < ((s as any).pierPrefTmpMin ?? 0)) {
        // TODO-QSP: dynamic text: <<$npcdesc>> gets close to your ear, "Don't make a scene okay?", then <<$Xe>> no...
        scene.text(`${((s as any).npcdesc ?? 0)} gets close to your ear, "Don't make a scene okay?", then ${((s as any).Xe ?? 0)} nonchalantly slides ${((s as any).Xyr ?? 0)} hand down to your labia, and inserts a ring.`);
        scene.text('You cover your mouth as you let out a quick "Eep!", but in a second, it\'s over.');
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (7);
        qspCall(s, 'piercing_management', 'add', 'pussy', 1);
      }
      qspCall(s, 'stat', '');
      // TODO-QSP: dynamic text: "There we go!", <<$Xe>> says with a smile.
      scene.text(`"There we go!", ${((s as any).Xe ?? 0)} says with a smile.`);
      if (((s as any).pierPrefTmpMax ?? 0) === 5) {
        // TODO-QSP: dynamic text: You can tell <<$Xe>> likes a girl with a bit more piercings, and you can't help ...
        scene.text(`You can tell ${((s as any).Xe ?? 0)} likes a girl with a bit more piercings, and you can't help but agree in some aspect, it does make you look a bit sexier.`);
      } else {
        scene.text('With this many piercings, you can feel many people will be exploring your body with their eyes, curious on where else you may have piercings.');
      }
      if (((s as any).npc_gentle ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
        // TODO-QSP: dynamic text: You can see <<$Xe>> loves how many piercings you have, as <<$Xe>> has a slight b...
        scene.text(`You can see ${((s as any).Xe ?? 0)} loves how many piercings you have, as ${((s as any).Xe ?? 0)} has a slight blush on ${((s as any).Xyr ?? 0)} face.`);
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>> gives you one last examination with <<$Xyr>> eyes and gives you a q...
        scene.text(`${((s as any).npcdesc ?? 0)} gives you one last examination with ${((s as any).Xyr ?? 0)} eyes and gives you a quick kiss on your cheek.`);
        // TODO-QSP: dynamic text: <<$npcdesc>> comes up to you, and with a quick squeeze on the ass, kisses you on...
        scene.text(`${((s as any).npcdesc ?? 0)} comes up to you, and with a quick squeeze on the ass, kisses you on the lips and says, "Now this is a bombshell."`);
      }
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 40;
    scene.text('After getting the piercings, you both part ways and head home.');
    // TODO-QSP: dynamic text: You can't say why, but you feel it would be harder to say no next time if <<$Xe>...
    scene.text(`You can't say why, but you feel it would be harder to say no next time if ${((s as any).Xe ?? 0)} asked you to change something.`);
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    return;
    scene.actions([
      { label: 'Continue', goto: ['homes_properties', 'go_home'] },
    ]);
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: "There we go!", <<$Xe>> says with a smile.
      scene.text(`"There we go!", ${((s as any).Xe ?? 0)} says with a smile.`);
      if (((s as any).pierPrefTmpMax ?? 0) === 5) {
        // TODO-QSP: dynamic text: You can tell <<$Xe>> likes a girl with a bit more piercings, and you can't help ...
        scene.text(`You can tell ${((s as any).Xe ?? 0)} likes a girl with a bit more piercings, and you can't help but agree in some aspect, it does make you look a bit sexier.`);
      } else {
        scene.text('With this many piercings, you can feel many people will be exploring your body with their eyes, curious on where else you may have piercings.');
      }
      if (((s as any).npc_gentle ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
        // TODO-QSP: dynamic text: You can see <<$Xe>> loves how many piercings you have, as <<$Xe>> has a slight b...
        scene.text(`You can see ${((s as any).Xe ?? 0)} loves how many piercings you have, as ${((s as any).Xe ?? 0)} has a slight blush on ${((s as any).Xyr ?? 0)} face.`);
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>> gives you one last examination with <<$Xyr>> eyes and gives you a q...
        scene.text(`${((s as any).npcdesc ?? 0)} gives you one last examination with ${((s as any).Xyr ?? 0)} eyes and gives you a quick kiss on your cheek.`);
        // TODO-QSP: dynamic text: <<$npcdesc>> comes up to you, and with a quick squeeze on the ass, kisses you on...
        scene.text(`${((s as any).npcdesc ?? 0)} comes up to you, and with a quick squeeze on the ass, kisses you on the lips and says, "Now this is a bombshell."`);
      }
      // TODO-QSP: dynamic text: "There we go!", <<$Xe>> says with a smile.
      scene.text(`"There we go!", ${((s as any).Xe ?? 0)} says with a smile.`);
      if (((s as any).pierPrefTmpMin ?? 0) > 1) {
        // TODO-QSP: dynamic text: You can tell <<$Xe>> likes a girl with a more piercings and you can't help but a...
        scene.text(`You can tell ${((s as any).Xe ?? 0)} likes a girl with a more piercings and you can't help but agree in some aspect, it does make you look a bit sexier.`);
      }
      if (((s as any).npc_gentle ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
        // TODO-QSP: dynamic text: You can see <<$Xe>> is pleased with your piercing, as <<$Xe>> has a slight blush...
        scene.text(`You can see ${((s as any).Xe ?? 0)} is pleased with your piercing, as ${((s as any).Xe ?? 0)} has a slight blush on ${((s as any).Xyr ?? 0)} face.`);
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>> gives you one last examination with <<$Xyr>> eyes and gives you a q...
        scene.text(`${((s as any).npcdesc ?? 0)} gives you one last examination with ${((s as any).Xyr ?? 0)} eyes and gives you a quick kiss on your cheek.`);
        // TODO-QSP: dynamic text: <<$npcdesc>> comes up to you, and with a quick squeeze on the ass, kisses you on...
        scene.text(`${((s as any).npcdesc ?? 0)} comes up to you, and with a quick squeeze on the ass, kisses you on the lips and says, "You look much better."`);
      }
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 40;
    scene.text('After getting the piercings, you both part ways and head home.');
    // TODO-QSP: dynamic text: You can't say why, but you feel it would be harder to say no next time if <<$Xe>...
    scene.text(`You can't say why, but you feel it would be harder to say no next time if ${((s as any).Xe ?? 0)} asked you to change something.`);
    (s as any).npc_compliance[$npcID] = ((s as any).npc_compliance[$npcID] ?? 0) - (1);
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    return;
    scene.actions([
      { label: 'Continue', goto: ['homes_properties', 'go_home'] },
    ]);
  } },
        { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 40;
    scene.text('After getting the piercing, you both part ways and head home.');
    // TODO-QSP: dynamic text: You can't say why, but you feel it would be harder to say no next time if <<$Xe>...
    scene.text(`You can't say why, but you feel it would be harder to say no next time if ${((s as any).Xe ?? 0)} asked you to change something.`);
    (s as any).npc_compliance[$npcID] = ((s as any).npc_compliance[$npcID] ?? 0) - (1);
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    return;
    scene.actions([
      { label: 'Continue', goto: ['homes_properties', 'go_home'] },
    ]);
  } },
      ]);
    }
  } },
            ]);
          }
        }
      }
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
    }
    scene.actions([
      { label: 'Let <<$Xem>> remove some piercings.', handler: (st: GameState) => {
    if (((s as any).pcs_piercings ?? 0)?.['navel'] > 0  &&  ((s as any).pcs_piercings ?? 0)?.['wearing'] < ((s as any).pierPrefTmpMin ?? 0)) {
      // TODO-QSP: dynamic text: <<$Xec>> takes the barbell out of your navel.
      scene.text(`${((s as any).Xec ?? 0)} takes the barbell out of your navel.`);
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (2);
      qspCall(s, 'piercing_management', 'remove', 'navel');
    }
    if (((s as any).pcs_piercings ?? 0)?.['brow'] > 0  &&  ((s as any).pcs_piercings ?? 0)?.['wearing'] > ((s as any).pierPrefTmpMax ?? 0)) {
      // TODO-QSP: dynamic text: <<$npcdesc>> <<$Xec>> sees the piercing in your eyebrow and proceeds to remove i...
      scene.text(`${((s as any).npcdesc ?? 0)} ${((s as any).Xec ?? 0)} sees the piercing in your eyebrow and proceeds to remove it.`);
      qspCall(s, 'piercing_management', 'remove', 'brow');
    }
    if (((s as any).pcs_piercings ?? 0)?.['lip'] > 0  &&  ((s as any).pcs_piercings ?? 0)?.['wearing'] > ((s as any).pierPrefTmpMax ?? 0)) {
      // TODO-QSP: dynamic text: <<$Xec>> carefully takes the ring out of your lips.
      scene.text(`${((s as any).Xec ?? 0)} carefully takes the ring out of your lips.`);
      qspCall(s, 'piercing_management', 'remove', 'lip');
    }
    if (((s as any).pcs_piercings ?? 0)?.['nipples'] > 0  &&  ((s as any).pcs_piercings ?? 0)?.['wearing'] > ((s as any).pierPrefTmpMax ?? 0)) {
      // TODO-QSP: dynamic text: <<$npcdesc>> looks around, then carefully uses <<$Xyr>> hands to take the nipple...
      scene.text(`${((s as any).npcdesc ?? 0)} looks around, then carefully uses ${((s as any).Xyr ?? 0)} hands to take the nipple rings off your breasts.`);
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
      qspCall(s, 'piercing_management', 'remove', 'nipples');
    }
    if (((s as any).pcs_piercings ?? 0)?.['nose'] > 0  &&  ((s as any).pcs_piercings ?? 0)?.['wearing'] > ((s as any).pierPrefTmpMax ?? 0)) {
      // TODO-QSP: dynamic text: <<$Xec>> sees the nose ring that you are wearing and removes it.
      scene.text(`${((s as any).Xec ?? 0)} sees the nose ring that you are wearing and removes it.`);
      qspCall(s, 'piercing_management', 'remove', 'nose');
    }
    if (((s as any).pcs_piercings ?? 0)?.['pussy'] > 0  &&  ((s as any).pcs_piercings ?? 0)?.['wearing'] > ((s as any).pierPrefTmpMax ?? 0)) {
      // TODO-QSP: dynamic text: <<$npcdesc>> gets close to your ear, "Don't make a scene okay?", then he non cha...
      scene.text(`${((s as any).npcdesc ?? 0)} gets close to your ear, "Don't make a scene okay?", then he non chalontely slides ${((s as any).Xyr ?? 0)} hand down to your labia, and removes the ring there.`);
      scene.text('You cover your mouth as you let out a quick "Eep!", but in a second, it\'s over.');
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (7);
      qspCall(s, 'piercing_management', 'remove', 'pussy');
    }
    if (((s as any).pcs_piercings ?? 0)?.['tongue'] > 0  &&  ((s as any).pcs_piercings ?? 0)?.['wearing'] > ((s as any).pierPrefTmpMax ?? 0)) {
      // TODO-QSP: dynamic text: <<$Xec>> asks you to stick out your tongue, then removes the barbell in your ton...
      scene.text(`${((s as any).Xec ?? 0)} asks you to stick out your tongue, then removes the barbell in your tongue.`);
      qspCall(s, 'piercing_management', 'remove', 'tongue');
    }
    if (((s as any).pcs_piercings ?? 0)?.['ears'] > 0  &&  ((s as any).pcs_piercings ?? 0)?.['wearing'] > ((s as any).pierPrefTmpMax ?? 0)) {
      // TODO-QSP: dynamic text: <<$Xec>> sees your earrings and quickly takes them off.
      scene.text(`${((s as any).Xec ?? 0)} sees your earrings and quickly takes them off.`);
      qspCall(s, 'piercing_management', 'remove', 'ears');
    }
    scene.actions([
      { label: '"All done!" <<$npcdesc>> says.', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: <<$npcdesc>> says "All done!" and promptly hands you the piercings <<$Xe>> took ...
    scene.text(`${((s as any).npcdesc ?? 0)} says "All done!" and promptly hands you the piercings ${((s as any).Xe ?? 0)} took off.`);
    // TODO-QSP: dynamic text: After this you guys talk for an hour about various things, before <<$Xe>> gets u...
    scene.text(`After this you guys talk for an hour about various things, before ${((s as any).Xe ?? 0)} gets up and says ${((s as any).Xe ?? 0)} has to go.`);
    // TODO-QSP: dynamic text: You can't say why, but you feel it would be harder to say no next time if <<$Xe>...
    scene.text(`You can't say why, but you feel it would be harder to say no next time if ${((s as any).Xe ?? 0)} asked you to change something.`);
    (s as any).npc_compliance[$npcID] = ((s as any).npc_compliance[$npcID] ?? 0) - (1);
    return;
    scene.actions([
      { label: 'Continue', goto: ['homes_properties', 'go_home'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'Hair':
      enterHair(s, scene);
      break;
    case 'Make':
      enterMake(s, scene);
      break;
    case 'Pier':
      enterPier(s, scene);
      break;
    default:
      enterHair(s, scene);
      break;
  }
}

export const lover_change: LocationDef = {
  name: 'lover_change',
  title: 'You can\'t say why, but you feel it would be harder to say no',
  region: 'other',
  enter: enter,
};
