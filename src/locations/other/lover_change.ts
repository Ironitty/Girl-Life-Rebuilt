import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

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
    (s as any).pcs_haircol = ((s as any).temp_haircol ?? 0);
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
    ((s as any).npc_compliance ?? {})[String((s as any).npcID ?? 0)] = (((s as any).npc_compliance ?? {})[String((s as any).npcID ?? 0)] ?? 0) - (1);
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
  ((s as any).npc_compliance ?? {})[String((s as any).npcID ?? 0)] = (((s as any).npc_compliance ?? {})[String((s as any).npcID ?? 0)] ?? 0) - (1);
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
    if (((s as any).pcs_piercings ?? 0)?.['wearing'] > ((s as any).pierPrefTmpMax ?? 0)) {
      // TODO-QSP: dynamic text: <<$npcdesc>> says that you just need to remove the ones that you have and you wi...
      scene.text(`${((s as any).npcdesc ?? 0)} says that you just need to remove the ones that you have and you will look amazing.`);
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
    ((s as any).npc_compliance ?? {})[String((s as any).npcID ?? 0)] = (((s as any).npc_compliance ?? {})[String((s as any).npcID ?? 0)] ?? 0) - (1);
    return;
    scene.actions([
      { label: 'Continue', goto: ['homes_properties', 'go_home'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
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
    scene.actions([
      { label: '"All done!" <<$npcdesc>> says.', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('You look at your body and examine it.');
    if (((s as any).pierPrefTmpMax ?? 0) === 2) {
      // TODO-QSP: dynamic text: This should not fire off how did <<$Xe>> want to add stuff to nothing?
      scene.text(`This should not fire off how did ${((s as any).Xe ?? 0)} want to add stuff to nothing?`);
    } else {
      if (((s as any).pierPrefTmpMax ?? 0) === 5) {
        // TODO-QSP: dynamic text: You can tell <<$Xe>> likes a girl with a bit more piercings, and you can't help ...
        scene.text(`You can tell ${((s as any).Xe ?? 0)} likes a girl with a bit more piercings, and you can't help but agree in some aspect, it does make you look a bit sexier.`);
      } else {
        if (((s as any).pierPrefTmpMin ?? 0) === 6) {
          scene.text('With this many piercings, you can feel many people will be exploring your body with their eyes, curious on where else you may have piercings.');
        }
      }
    }
    if (((s as any).npc_gentle ?? 0)?.[String((s as any).boy ?? 0)] === 0) {
      // TODO-QSP: dynamic text: You can see <<$Xe>> loves how many piercings you have, as <<$Xe>> has a slight b...
      scene.text(`You can see ${((s as any).Xe ?? 0)} loves how many piercings you have, as ${((s as any).Xe ?? 0)} has a slight blush on ${((s as any).Xyr ?? 0)} face.`);
    } else {
      if (((s as any).npc_rough ?? 0)?.[String((s as any).boy ?? 0)] === 0) {
        // TODO-QSP: dynamic text: <<$npcdesc>> gives you one last examination with <<$Xyr>> eyes and gives you a q...
        scene.text(`${((s as any).npcdesc ?? 0)} gives you one last examination with ${((s as any).Xyr ?? 0)} eyes and gives you a quick kiss on your cheek.`);
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>> comes up to you, and with a quick squeeze on the ass, kisses you on...
        scene.text(`${((s as any).npcdesc ?? 0)} comes up to you, and with a quick squeeze on the ass, kisses you on the lips and says, "Now this is a bombshell."`);
      }
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: After this you guys talk for an hour about various things, before <<$Xe>> gets u...
    scene.text(`After this you guys talk for an hour about various things, before ${((s as any).Xe ?? 0)} gets up and says ${((s as any).Xe ?? 0)} has to go.`);
    // TODO-QSP: dynamic text: You can't say why, but you feel it would be harder to say no next time if <<$Xe>...
    scene.text(`You can't say why, but you feel it would be harder to say no next time if ${((s as any).Xe ?? 0)} asked you to change something.`);
    ((s as any).npc_compliance ?? {})[String((s as any).npcID ?? 0)] = (((s as any).npc_compliance ?? {})[String((s as any).npcID ?? 0)] ?? 0) - (1);
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    return;
    scene.actions([
      { label: 'Continue', goto: ['homes_properties', 'go_home'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>> takes you by the hand and heads over to the piercing salon.
        scene.text(`${((s as any).npcdesc ?? 0)} takes you by the hand and heads over to the piercing salon.`);
        scene.actions([
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
      scene.img(`${qspFunc(s, 'piercing_management', 'ears_image')}`);
      scene.text('The artist takes a look at your unpierced ears, and with a quick sharp pain, pierces them.');
    } else {
      if (((s as any).randchan ?? 0) === 1  &&  ((s as any).pcs_piercings ?? 0)?.['tongue'] === 0) {
        qspCall(s, 'piercing_management', 'add', 'tongue', qspUntranslated(s, "rand(1, func('piercing_management', 'get_total', 'tongue'))", { location: "lover_change" }));
        qspCall(s, 'pain', '', 7, 'tongue', 'pierce');
        scene.img(`${qspFunc(s, 'piercing_management', 'tongue_image')}`);
        scene.text('He asks you to stick out your tongue. You comply and then start to regret it as he pierces your tongue.');
      } else {
        if (((s as any).randchan ?? 0) === 2  &&  ((s as any).pcs_piercings ?? 0)?.['lip'] === 0) {
          qspCall(s, 'piercing_management', 'add', 'lip', qspUntranslated(s, "rand(1, func('piercing_management', 'get_total', 'lip'))", { location: "lover_change" }));
          qspCall(s, 'pain', '', 7, 'lips', 'pierce');
          scene.img(`${qspFunc(s, 'piercing_management', 'lip_image')}`);
          scene.text('The artist gently holds your lip as he drives the needle through to pierce it.');
        } else {
          if (((s as any).randchan ?? 0) === 3  &&  ((s as any).pcs_piercings ?? 0)?.['nose'] === 0) {
            qspCall(s, 'piercing_management', 'add', 'nose', qspUntranslated(s, "rand(1, func('piercing_management', 'get_total', 'nose'))", { location: "lover_change" }));
            qspCall(s, 'pain', '', 7, 'nose', 'pierce');
            scene.img(`${qspFunc(s, 'piercing_management', 'nose_image')}`);
            scene.text('You feel a sharp pain in your nose as he pierces your nose.');
          } else {
            if (((s as any).randchan ?? 0) === 4  &&  ((s as any).pcs_piercings ?? 0)?.['brow'] === 0) {
              qspCall(s, 'piercing_management', 'add', 'brow', qspUntranslated(s, "rand(1, func('piercing_management', 'get_total', 'brow'))", { location: "lover_change" }));
              qspCall(s, 'pain', '', 7, 'eyebrows', 'pierce');
              scene.img(`${qspFunc(s, 'piercing_management', 'brow_image')}`);
              scene.text('The artist moves to above your eyes and quickly pierces your eyebrow.');
            } else {
              if (((s as any).randchan ?? 0) === 5  &&  ((s as any).pcs_piercings ?? 0)?.['navel'] === 0) {
                qspCall(s, 'piercing_management', 'add', 'navel', qspUntranslated(s, "rand(1, func('piercing_management', 'get_total', 'navel'))", { location: "lover_change" }));
                qspCall(s, 'pain', '', 7, 'tummy', 'pierce');
                (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (2);
                scene.img(`${qspFunc(s, 'piercing_management', 'navel_image')}`);
                scene.text('He positions himself to pierce your belly button. You feel a sharp pain through your navel as he pierces it.');
              } else {
                if (((s as any).randchan ?? 0) === 6  &&  ((s as any).pcs_piercings ?? 0)?.['nipples'] === 0) {
                  qspCall(s, 'piercing_management', 'add', 'nipples', qspUntranslated(s, "rand(1, func('piercing_management', 'get_total', 'nipples'))", { location: "lover_change" }));
                  qspCall(s, 'pain', '', 7, 'nipples', 'pierce');
                  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
                  scene.img(`${qspFunc(s, 'piercing_management', 'nipples_image')}`);
                  scene.text('He motions for you to lift up your shirt. After you do the man grabs your breasts rather softly and carefully pierces each nipple.');
                } else {
                  if (((s as any).randchan ?? 0) === 7  &&  ((s as any).pcs_piercings ?? 0)?.['pussy'] === 0) {
                    qspCall(s, 'piercing_management', 'add', 'pussy', qspUntranslated(s, "rand(1, func('piercing_management', 'get_total', 'pussy'))", { location: "lover_change" }));
                    qspCall(s, 'pain', '', 7, 'pubic', 'pierce');
                    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (7);
                    scene.img(`${qspFunc(s, 'piercing_management', 'pussy_image')}`);
                    scene.text('"Ma \'am can you take off your bottoms?", the man says. You realize that he plans to pierce your labia and you reluctantly present yourself.');
                    scene.text('You cover your mouth as you let out a quick "Eep!", as you feel a quick pain through your labia, but in a second, it\'s over.');
                  } else {
                    if (((s as any).pcs_piercings ?? 0)?.['wearing'] >= 8) {
                      scene.text('');
                    } else {
                      if (((s as any).pcs_piercings ?? 0)?.['total'] < ((s as any).pierPrefTmpMin ?? 0)) {
                        (s as any).emergencyAbort = ((s as any).emergencyAbort ?? 0) + (1);
                        if (((s as any).emergencyAbort ?? 0) > 10000) {
                          scene.text('<b><font color="teal">DEVELOPER WARNING: Emergency backout. Either you got very lucky or some dev made a mistake, if it happens again, file a bug report. </font></b>');
                        } else {
                          // TODO-QSP: jump 'alreadyGotPierLoop'
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
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
        if (((s as any).pierPrefTmpMin ?? 0) === 6) {
          scene.text('With this many piercings, you can feel many people will be exploring your body with their eyes, curious on where else you may have piercings.');
        }
      }
      if (((s as any).npc_gentle ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
        // TODO-QSP: dynamic text: You can see <<$Xe>> loves how many piercings you have, as <<$Xe>> has a slight b...
        scene.text(`You can see ${((s as any).Xe ?? 0)} loves how many piercings you have, as ${((s as any).Xe ?? 0)} has a slight blush on ${((s as any).Xyr ?? 0)} face.`);
      } else {
        if (((s as any).npc_rough ?? 0)?.[String((s as any).boy ?? 0)] === 0) {
          // TODO-QSP: dynamic text: <<$npcdesc>> gives you one last examination with <<$Xyr>> eyes and gives you a q...
          scene.text(`${((s as any).npcdesc ?? 0)} gives you one last examination with ${((s as any).Xyr ?? 0)} eyes and gives you a quick kiss on your cheek.`);
        } else {
          // TODO-QSP: dynamic text: <<$npcdesc>> comes up to you, and with a quick squeeze on the ass, kisses you on...
          scene.text(`${((s as any).npcdesc ?? 0)} comes up to you, and with a quick squeeze on the ass, kisses you on the lips and says, "Now this is a bombshell."`);
        }
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
      if (((s as any).pcs_piercings ?? 0)?.['wearing'] >= ((s as any).pierPrefTmpMin ?? 0)) {
        // TODO-QSP: dynamic text: "There we go!", <<$Xe>> says with a smile.
        scene.text(`"There we go!", ${((s as any).Xe ?? 0)} says with a smile.`);
        if (((s as any).pierPrefTmpMax ?? 0) === 5) {
          // TODO-QSP: dynamic text: You can tell <<$Xe>> likes a girl with a bit more piercings, and you can't help ...
          scene.text(`You can tell ${((s as any).Xe ?? 0)} likes a girl with a bit more piercings, and you can't help but agree in some aspect, it does make you look a bit sexier.`);
        } else {
          if (((s as any).pierPrefTmpMin ?? 0) === 6) {
            scene.text('With this many piercings, you can feel many people will be exploring your body with their eyes, curious on where else you may have piercings.');
          }
        }
        if (((s as any).npc_gentle ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
          // TODO-QSP: dynamic text: You can see <<$Xe>> loves how many piercings you have, as <<$Xe>> has a slight b...
          scene.text(`You can see ${((s as any).Xe ?? 0)} loves how many piercings you have, as ${((s as any).Xe ?? 0)} has a slight blush on ${((s as any).Xyr ?? 0)} face.`);
        } else {
          if (((s as any).npc_rough ?? 0)?.[String((s as any).boy ?? 0)] === 0) {
            // TODO-QSP: dynamic text: <<$npcdesc>> gives you one last examination with <<$Xyr>> eyes and gives you a q...
            scene.text(`${((s as any).npcdesc ?? 0)} gives you one last examination with ${((s as any).Xyr ?? 0)} eyes and gives you a quick kiss on your cheek.`);
          } else {
            // TODO-QSP: dynamic text: <<$npcdesc>> comes up to you, and with a quick squeeze on the ass, kisses you on...
            scene.text(`${((s as any).npcdesc ?? 0)} comes up to you, and with a quick squeeze on the ass, kisses you on the lips and says, "Now this is a bombshell."`);
          }
        }
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 40;
    scene.text('After getting the piercings, you both part ways and head home.');
    // TODO-QSP: dynamic text: You can't say why, but you feel it would be harder to say no next time if <<$Xe>...
    scene.text(`You can't say why, but you feel it would be harder to say no next time if ${((s as any).Xe ?? 0)} asked you to change something.`);
    ((s as any).npc_compliance ?? {})[String((s as any).npcID ?? 0)] = (((s as any).npc_compliance ?? {})[String((s as any).npcID ?? 0)] ?? 0) - (1);
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
        if (((s as any).pierPrefTmpMin ?? 0) > 1) {
          // TODO-QSP: dynamic text: You can tell <<$Xe>> likes a girl with a more piercings and you can't help but a...
          scene.text(`You can tell ${((s as any).Xe ?? 0)} likes a girl with a more piercings and you can't help but agree in some aspect, it does make you look a bit sexier.`);
        }
        if (((s as any).npc_gentle ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
          // TODO-QSP: dynamic text: You can see <<$Xe>> is pleased with your piercing, as <<$Xe>> has a slight blush...
          scene.text(`You can see ${((s as any).Xe ?? 0)} is pleased with your piercing, as ${((s as any).Xe ?? 0)} has a slight blush on ${((s as any).Xyr ?? 0)} face.`);
        } else {
          if (((s as any).npc_rough ?? 0)?.[String((s as any).boy ?? 0)] === 0) {
            // TODO-QSP: dynamic text: <<$npcdesc>> gives you one last examination with <<$Xyr>> eyes and gives you a q...
            scene.text(`${((s as any).npcdesc ?? 0)} gives you one last examination with ${((s as any).Xyr ?? 0)} eyes and gives you a quick kiss on your cheek.`);
          } else {
            // TODO-QSP: dynamic text: <<$npcdesc>> comes up to you, and with a quick squeeze on the ass, kisses you on...
            scene.text(`${((s as any).npcdesc ?? 0)} comes up to you, and with a quick squeeze on the ass, kisses you on the lips and says, "You look much better."`);
          }
        }
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 40;
    scene.text('After getting the piercing, you both part ways and head home.');
    // TODO-QSP: dynamic text: You can't say why, but you feel it would be harder to say no next time if <<$Xe>...
    scene.text(`You can't say why, but you feel it would be harder to say no next time if ${((s as any).Xe ?? 0)} asked you to change something.`);
    ((s as any).npc_compliance ?? {})[String((s as any).npcID ?? 0)] = (((s as any).npc_compliance ?? {})[String((s as any).npcID ?? 0)] ?? 0) - (1);
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    return;
    scene.actions([
      { label: 'Continue', goto: ['homes_properties', 'go_home'] },
    ]);
  } },
        ]);
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
    }
  }
  scene.build();
}

function enterTatt(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Enter Tattoo Parlor', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: As you arrive at the tattoo parlor, <<$npcdesc>> looks you up and down to decide...
    scene.text(`As you arrive at the tattoo parlor, ${((s as any).npcdesc ?? 0)} looks you up and down to decide what needs to be done about your tattoos.`);
    if (((s as any).pcs_tattoos ?? 0)?.['total'] < ((s as any).tattPrefTmpMin ?? 0)) {
      scene.text('You need some more tattoos, it would make you look so much better!');
      // TODO-QSP: dynamic text: <<$Xec>> heads over to the counter and starts talks to the tattoo artist.
      scene.text(`${((s as any).Xec ?? 0)} heads over to the counter and starts talks to the tattoo artist.`);
      // TODO-QSP: dynamic text: You see <<$Xem>> hand the artist some money and the artist starts to walk up tow...
      scene.text(`You see ${((s as any).Xem ?? 0)} hand the artist some money and the artist starts to walk up towards you.`);
      // TODO-QSP: dynamic text: "Your <<$npcrelat>> says you want to get some tattoos?", the artist asks.
      scene.text(`"Your ${((s as any).npcrelat ?? 0)} says you want to get some tattoos?", the artist asks.`);
      scene.actions([
        { label: 'Quietly nod', handler: (st: GameState) => {
    scene.text('You know you can\'t pull out now, so you meekly nod.');
    scene.text('The man shrugs and says "Head over to the chair over there okay?"');
    scene.actions([
      { label: 'Head over to the chair', handler: (st: GameState) => {
    scene.text('As you sit down you see the man come over with the various needles he needs to do his job.');
    scene.text('He sees you are a little bit concerned about the needles and laughs, "Don\'t worry ma \'am, it will be all over before you know it!"');
    scene.text('He takes out a clean needle and proceeds with his job.');
    // TODO-QSP: :tattoo_loop
    (s as any).randchan = Math.floor(Math.random() * 18) + 0;
    if (((s as any).randchan ?? 0) === 0  &&  ((s as any).pcs_tattoos ?? 0)?.['arm'] <= 0) {
      qspCall(s, 'tattoo_management', 'add', 'arm', qspUntranslated(s, "rand(1, func('tattoo_management', 'get_total', 'arm'))", { location: "lover_change" }));
      scene.img(`${qspFunc(s, 'tattoo_management', 'arm_image')}`);
      scene.text('He gives you a tattoo on your arm.');
    } else {
      if (((s as any).randchan ?? 0) === 1  &&  ((s as any).pcs_tattoos ?? 0)?.['ass'] <= 0) {
        qspCall(s, 'tattoo_management', 'add', 'ass', qspUntranslated(s, "rand(1, func('tattoo_management', 'get_total', 'ass'))", { location: "lover_change" }));
        scene.img(`${qspFunc(s, 'tattoo_management', 'ass_image')}`);
        scene.text('He gives you a tattoo on your ass.');
      } else {
        if (((s as any).randchan ?? 0) === 2  &&  ((s as any).pcs_tattoos ?? 0)?.['back'] === 0) {
          qspCall(s, 'tattoo_management', 'add', 'back', qspUntranslated(s, "rand(1, func('tattoo_management', 'get_total', 'back'))", { location: "lover_change" }));
          scene.img(`${qspFunc(s, 'tattoo_management', 'back_image')}`);
          scene.text('He gives you a tattoo on your back.');
        } else {
          if (((s as any).randchan ?? 0) === 3  &&  ((s as any).pcs_tattoos ?? 0)?.['belly'] === 0) {
            qspCall(s, 'tattoo_management', 'add', 'belly', qspUntranslated(s, "rand(1, func('tattoo_management', 'get_total', 'belly'))", { location: "lover_change" }));
            scene.img(`${qspFunc(s, 'tattoo_management', 'belly_image')}`);
            scene.text('He gives you a tattoo on your belly.');
          } else {
            if (((s as any).randchan ?? 0) === 4  &&  ((s as any).pcs_tattoos ?? 0)?.['breast'] === 0) {
              qspCall(s, 'tattoo_management', 'add', 'breast', qspUntranslated(s, "rand(1, func('tattoo_management', 'get_total', 'breast'))", { location: "lover_change" }));
              scene.img(`${qspFunc(s, 'tattoo_management', 'breast_image')}`);
              scene.text('He gives you a tattoo on your breasts.');
            } else {
              if (((s as any).randchan ?? 0) === 5  &&  ((s as any).pcs_tattoos ?? 0)?.['chest'] === 0) {
                qspCall(s, 'tattoo_management', 'add', 'chest', qspUntranslated(s, "rand(1, func('tattoo_management', 'get_total', 'chest'))", { location: "lover_change" }));
                scene.img(`${qspFunc(s, 'tattoo_management', 'chest_image')}`);
                scene.text('He gives you a tattoo on your chest.');
              } else {
                if (((s as any).randchan ?? 0) === 6  &&  ((s as any).pcs_tattoos ?? 0)?.['face'] === 0) {
                  qspCall(s, 'tattoo_management', 'add', 'face', qspUntranslated(s, "rand(1, func('tattoo_management', 'get_total', 'face'))", { location: "lover_change" }));
                  scene.img(`${qspFunc(s, 'tattoo_management', 'face_image')}`);
                  scene.text('He gives you a tattoo on your face.');
                } else {
                  if (((s as any).randchan ?? 0) === 7  &&  ((s as any).pcs_tattoos ?? 0)?.['ankle'] === 0) {
                    qspCall(s, 'tattoo_management', 'add', 'ankle', qspUntranslated(s, "rand(1, func('tattoo_management', 'get_total', 'ankle'))", { location: "lover_change" }));
                    scene.img(`${qspFunc(s, 'tattoo_management', 'ankle_image')}`);
                    scene.text('He gives you a tattoo on your ankles.');
                  } else {
                    if (((s as any).randchan ?? 0) === 8  &&  ((s as any).pcs_tattoos ?? 0)?.['hand'] === 0) {
                      qspCall(s, 'tattoo_management', 'add', 'hand', qspUntranslated(s, "rand(1, func('tattoo_management', 'get_total', 'hand'))", { location: "lover_change" }));
                      scene.img(`${qspFunc(s, 'tattoo_management', 'hand_image')}`);
                      scene.text('He gives you a tattoo on your hand.');
                    } else {
                      if (((s as any).randchan ?? 0) === 9  &&  ((s as any).pcs_tattoos ?? 0)?.['leg'] === 0) {
                        qspCall(s, 'tattoo_management', 'add', 'leg', qspUntranslated(s, "rand(1, func('tattoo_management', 'get_total', 'leg'))", { location: "lover_change" }));
                        scene.img(`${qspFunc(s, 'tattoo_management', 'leg_image')}`);
                        scene.text('He gives you a tattoo on your legs.');
                      } else {
                        if (((s as any).randchan ?? 0) === 10  &&  ((s as any).pcs_tattoos ?? 0)?.['lip'] === 0) {
                          qspCall(s, 'tattoo_management', 'add', 'lip', qspUntranslated(s, "rand(1, func('tattoo_management', 'get_total', 'lip'))", { location: "lover_change" }));
                          scene.img(`${qspFunc(s, 'tattoo_management', 'lip_image')}`);
                          scene.text('He gives you a tattoo on your bottom lip.');
                        } else {
                          if (((s as any).randchan ?? 0) === 11  &&  ((s as any).pcs_tattoos ?? 0)?.['neck'] === 0) {
                            qspCall(s, 'tattoo_management', 'add', 'neck', qspUntranslated(s, "rand(1, func('tattoo_management', 'get_total', 'neck'))", { location: "lover_change" }));
                            scene.img(`${qspFunc(s, 'tattoo_management', 'neck_image')}`);
                            scene.text('He gives you a tattoo on your neck.');
                          } else {
                            if (((s as any).randchan ?? 0) === 12  &&  ((s as any).pcs_tattoos ?? 0)?.['pussy'] === 0) {
                              qspCall(s, 'tattoo_management', 'add', 'pussy', qspUntranslated(s, "rand(1, func('tattoo_management', 'get_total', 'pussy'))", { location: "lover_change" }));
                              scene.img(`${qspFunc(s, 'tattoo_management', 'pussy_image')}`);
                              scene.text('He gives you a tattoo above your cunt.');
                            } else {
                              if (((s as any).randchan ?? 0) === 13  &&  ((s as any).pcs_tattoos ?? 0)?.['shoulder'] === 0) {
                                qspCall(s, 'tattoo_management', 'add', 'shoulder', qspUntranslated(s, "rand(1, func('tattoo_management', 'get_total', 'shoulder'))", { location: "lover_change" }));
                                scene.img(`${qspFunc(s, 'tattoo_management', 'shoulder_image')}`);
                                scene.text('He gives you a tattoo on your shoulder.');
                              } else {
                                if (((s as any).randchan ?? 0) === 14  &&  ((s as any).pcs_tattoos ?? 0)?.['side'] === 0) {
                                  qspCall(s, 'tattoo_management', 'add', 'side', qspUntranslated(s, "rand(1, func('tattoo_management', 'get_total', 'side'))", { location: "lover_change" }));
                                  scene.img(`${qspFunc(s, 'tattoo_management', 'side_image')}`);
                                  scene.text('He gives you a tattoo on your sides.');
                                } else {
                                  if (((s as any).randchan ?? 0) === 15  &&  ((s as any).pcs_tattoos ?? 0)?.['tramp'] === 0) {
                                    qspCall(s, 'tattoo_management', 'add', 'tramp', qspUntranslated(s, "rand(1, func('tattoo_management', 'get_total', 'tramp'))", { location: "lover_change" }));
                                    scene.img(`${qspFunc(s, 'tattoo_management', 'tramp_image')}`);
                                    scene.text('He gives you a tramp stamp.');
                                  } else {
                                    if (((s as any).randchan ?? 0) === 16  &&  ((s as any).pcs_tattoos ?? 0)?.['under'] === 0) {
                                      qspCall(s, 'tattoo_management', 'add', 'under', qspUntranslated(s, "rand(1, func('tattoo_management', 'get_total', 'under'))", { location: "lover_change" }));
                                      scene.img(`${qspFunc(s, 'tattoo_management', 'under_image')}`);
                                      scene.text('He gives you a tattoo under your breasts.');
                                    } else {
                                      if (((s as any).randchan ?? 0) === 17  &&  ((s as any).pcs_tattoos ?? 0)?.['wrist'] === 0) {
                                        qspCall(s, 'tattoo_management', 'add', 'wrist', qspUntranslated(s, "rand(1, func('tattoo_management', 'get_total', 'wrist'))", { location: "lover_change" }));
                                        scene.img(`${qspFunc(s, 'tattoo_management', 'wrist_image')}`);
                                        scene.text('He gives you a tattoo on your wrists.');
                                      } else {
                                        if (((s as any).pcs_tattoos ?? 0)?.['total'] >= 18) {
                                          scene.text('');
                                        } else {
                                          (s as any).emergencyAbort = ((s as any).emergencyAbort ?? 0) + (1);
                                          if (((s as any).emergencyAbort ?? 0) > 10000) {
                                            scene.text('<b><font color="teal">DEVELOPER WARNING: Emergency backout. Either you got very lucky or some dev made a mistake, if it happens again, file a bug report. </font></b>');
                                          } else {
                                            // TODO-QSP: jump 'tattoo_loop'
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    qspCall(s, 'stat', '');
    scene.text('"All done!", the artist smiles as he starts to clean up his various tools."');
    scene.text('"I must say, your body looks amazing with the art on you!"');
    scene.text('You are reluctant to admit it, but having these tattoos feels like they do make you look sexier for some people, though a bit more slutty too.');
    scene.actions([
      { label: 'Go back towards your <<$npcrelat>>', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: As you go back towards him, <<$Xe>> looks you up and down.
    scene.text(`As you go back towards him, ${((s as any).Xe ?? 0)} looks you up and down.`);
    // TODO-QSP: dynamic text: "There we go!", <<$Xe>> says with a smile.
    scene.text(`"There we go!", ${((s as any).Xe ?? 0)} says with a smile.`);
    if (((s as any).tattPrefTmpMax ?? 0) === 5) {
      // TODO-QSP: dynamic text: You can tell <<$Xe>> likes a girl with at least a couple of tattoos, and you can...
      scene.text(`You can tell ${((s as any).Xe ?? 0)} likes a girl with at least a couple of tattoos, and you can't help but agree in some aspect, it does make you look a bit sexier.`);
    } else {
      if (((s as any).tattPrefTmpMin ?? 0) === 6) {
        scene.text('With this many tattoos, you look like a punk or scene girl, and you can feel that many people would want to explore you to see if you have any "hidden" gems underneath your clothes.');
      }
    }
    if (((s as any).npc_gentle ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
      // TODO-QSP: dynamic text: You can see <<$Xe>> loves how many tattoos you have, as <<$Xe>> has a slight blu...
      scene.text(`You can see ${((s as any).Xe ?? 0)} loves how many tattoos you have, as ${((s as any).Xe ?? 0)} has a slight blush on ${((s as any).Xyr ?? 0)} face.`);
    } else {
      if (((s as any).npc_rough ?? 0)?.[String((s as any).boy ?? 0)] === 0) {
        // TODO-QSP: dynamic text: <<$npcdesc>> gives you one last examination with <<$Xyr>> eyes and gives you a q...
        scene.text(`${((s as any).npcdesc ?? 0)} gives you one last examination with ${((s as any).Xyr ?? 0)} eyes and gives you a quick kiss on your cheek.`);
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>> comes up to you, and with a quick squeeze on the ass, kisses you on...
        scene.text(`${((s as any).npcdesc ?? 0)} comes up to you, and with a quick squeeze on the ass, kisses you on the lips and says, "Now this is a bombshell."`);
      }
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 40;
    scene.text('After getting the tattoos, you both part ways and head home.');
    // TODO-QSP: dynamic text: You can't say why, but you feel it would be harder to say no next time if <<$Xe>...
    scene.text(`You can't say why, but you feel it would be harder to say no next time if ${((s as any).Xe ?? 0)} asked you to change something.`);
    ((s as any).npc_compliance ?? {})[String((s as any).npcID ?? 0)] = (((s as any).npc_compliance ?? {})[String((s as any).npcID ?? 0)] ?? 0) - (1);
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    return;
    scene.actions([
      { label: 'Continue', goto: ['homes_properties', 'go_home'] },
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
      if (((s as any).pcs_tattoos ?? 0)?.['total'] > ((s as any).tattPrefTmpMax ?? 0)) {
        scene.text('You need to get rid of some tattoos, it would make you look so much better!');
        // TODO-QSP: dynamic text: <<$Xec>> heads over to the counter and starts talks to the tattoo artist.
        scene.text(`${((s as any).Xec ?? 0)} heads over to the counter and starts talks to the tattoo artist.`);
        // TODO-QSP: dynamic text: You see <<$Xem>> hand the artist some money and the artist starts to walk up tow...
        scene.text(`You see ${((s as any).Xem ?? 0)} hand the artist some money and the artist starts to walk up towards you.`);
        // TODO-QSP: dynamic text: "Your <<$npcrelat>> says you want to get rid of some tattoos?", the artist asks.
        scene.text(`"Your ${((s as any).npcrelat ?? 0)} says you want to get rid of some tattoos?", the artist asks.`);
        scene.actions([
          { label: 'Quietly nod', handler: (st: GameState) => {
    scene.text('You know you can\'t pull out now, so you meekly nod.');
    scene.text('The man shrugs and says "Head over to the chair over there okay?"');
    scene.actions([
      { label: 'Head over to the chair', handler: (st: GameState) => {
    scene.text('As you sit down you see the man come over with the various needles and lasers he needs to do his job.');
    scene.text('He sees you are a little bit concerned about the laser and laughs, "Don\'t worry ma \'am, it will be all over before you know it!"');
    scene.text('He takes he turns on the mini laser and proceeds with his job.');
    (s as any).randchan = Math.floor(Math.random() * 17) + 0;
    if (((s as any).randchan ?? 0) === 0  &&  ((s as any).pcs_tattoos ?? 0)?.['arm'] > 0) {
      if (((s as any).pcs_tattoos ?? 0)?.['total'] > ((s as any).tattPrefTmpMax ?? 0)) {
        qspCall(s, 'tattoo_management', 'remove', 'arm');
        scene.text('He removes the tattoo on your arm.');
      }
    } else {
      if (((s as any).randchan ?? 0) === 1  &&  ((s as any).pcs_tattoos ?? 0)?.['ass'] > 0) {
        if (((s as any).pcs_tattoos ?? 0)?.['total'] > ((s as any).tattPrefTmpMax ?? 0)) {
          qspCall(s, 'tattoo_management', 'remove', 'ass');
          scene.text('He removes the tattoo on your ass.');
        }
      } else {
        if (((s as any).randchan ?? 0) === 2  &&  ((s as any).pcs_tattoos ?? 0)?.['back'] > 0) {
          if (((s as any).pcs_tattoos ?? 0)?.['total'] > ((s as any).tattPrefTmpMax ?? 0)) {
            qspCall(s, 'tattoo_management', 'remove', 'back');
            scene.text('He removes the tattoo on your back.');
          }
        } else {
          if (((s as any).randchan ?? 0) === 3  &&  ((s as any).pcs_tattoos ?? 0)?.['belly'] > 0) {
            if (((s as any).pcs_tattoos ?? 0)?.['total'] > ((s as any).tattPrefTmpMax ?? 0)) {
              qspCall(s, 'tattoo_management', 'remove', 'belly');
              scene.text('He removes the tattoo on your belly.');
            }
          } else {
            if (((s as any).randchan ?? 0) === 4  &&  ((s as any).pcs_tattoos ?? 0)?.['breast'] > 0) {
              if (((s as any).pcs_tattoos ?? 0)?.['total'] > ((s as any).tattPrefTmpMax ?? 0)) {
                qspCall(s, 'tattoo_management', 'remove', 'breast');
                scene.text('He removes the tattoo on your breasts.');
              }
            } else {
              if (((s as any).randchan ?? 0) === 5  &&  ((s as any).pcs_tattoos ?? 0)?.['chest'] > 0) {
                if (((s as any).pcs_tattoos ?? 0)?.['total'] > ((s as any).tattPrefTmpMax ?? 0)) {
                  qspCall(s, 'tattoo_management', 'remove', 'chest');
                  scene.text('He removes the tattoo on your chest.');
                }
              } else {
                if (((s as any).randchan ?? 0) === 6  &&  ((s as any).pcs_tattoos ?? 0)?.['face'] > 0) {
                  if (((s as any).pcs_tattoos ?? 0)?.['total'] > ((s as any).tattPrefTmpMax ?? 0)) {
                    qspCall(s, 'tattoo_management', 'remove', 'face');
                    scene.text('He removes the tattoo on your face.');
                  }
                } else {
                  if (((s as any).randchan ?? 0) === 7  &&  ((s as any).pcs_tattoos ?? 0)?.['ankle'] > 0) {
                    if (((s as any).pcs_tattoos ?? 0)?.['total'] > ((s as any).tattPrefTmpMax ?? 0)) {
                      qspCall(s, 'tattoo_management', 'remove', 'ankle');
                      scene.text('He removes the tattoo on your ankles.');
                    }
                  } else {
                    if (((s as any).randchan ?? 0) === 8  &&  ((s as any).pcs_tattoos ?? 0)?.['leg'] > 0) {
                      if (((s as any).pcs_tattoos ?? 0)?.['total'] > ((s as any).tattPrefTmpMax ?? 0)) {
                        qspCall(s, 'tattoo_management', 'remove', 'leg');
                        scene.text('He removes the tattoo on your legs.');
                      }
                    } else {
                      if (((s as any).randchan ?? 0) === 9  &&  ((s as any).pcs_tattoos ?? 0)?.['lip'] > 0) {
                        if (((s as any).pcs_tattoos ?? 0)?.['total'] > ((s as any).tattPrefTmpMax ?? 0)) {
                          qspCall(s, 'tattoo_management', 'remove', 'lip');
                          scene.text('He removes the tattoo on your bottom lip.');
                        }
                      } else {
                        if (((s as any).randchan ?? 0) === 10  &&  ((s as any).pcs_tattoos ?? 0)?.['neck'] > 0) {
                          if (((s as any).pcs_tattoos ?? 0)?.['total'] > ((s as any).tattPrefTmpMax ?? 0)) {
                            qspCall(s, 'tattoo_management', 'remove', 'neck');
                            scene.text('He removes the tattoo on your neck.');
                          }
                        } else {
                          if (((s as any).randchan ?? 0) === 11  &&  ((s as any).pcs_tattoos ?? 0)?.['pussy'] > 0) {
                            if (((s as any).pcs_tattoos ?? 0)?.['total'] > ((s as any).tattPrefTmpMax ?? 0)) {
                              qspCall(s, 'tattoo_management', 'remove', 'pussy');
                              scene.text('He removes the tattoo above your cunt.');
                            }
                          } else {
                            if (((s as any).randchan ?? 0) === 12  &&  ((s as any).pcs_tattoos ?? 0)?.['shoulder'] > 0) {
                              if (((s as any).pcs_tattoos ?? 0)?.['total'] > ((s as any).tattPrefTmpMax ?? 0)) {
                                qspCall(s, 'tattoo_management', 'remove', 'shoulder');
                                scene.text('He removes the tattoo on your shoulder.');
                              }
                            } else {
                              if (((s as any).randchan ?? 0) === 13  &&  ((s as any).pcs_tattoos ?? 0)?.['side'] > 0) {
                                if (((s as any).pcs_tattoos ?? 0)?.['total'] > ((s as any).tattPrefTmpMax ?? 0)) {
                                  qspCall(s, 'tattoo_management', 'remove', 'side');
                                  scene.text('He removes the tattoo on your sides.');
                                }
                              } else {
                                if (((s as any).randchan ?? 0) === 14  &&  ((s as any).pcs_tattoos ?? 0)?.['tramp'] > 0) {
                                  if (((s as any).pcs_tattoos ?? 0)?.['total'] > ((s as any).tattPrefTmpMax ?? 0)) {
                                    qspCall(s, 'tattoo_management', 'remove', 'tramp');
                                    scene.text('He removes your tramp stamp.');
                                  }
                                } else {
                                  if (((s as any).randchan ?? 0) === 15  &&  ((s as any).pcs_tattoos ?? 0)?.['under'] > 0) {
                                    if (((s as any).pcs_tattoos ?? 0)?.['total'] > ((s as any).tattPrefTmpMax ?? 0)) {
                                      qspCall(s, 'tattoo_management', 'remove', 'under');
                                      scene.text('He removes the tattoo under your breasts.');
                                    }
                                  } else {
                                    if (((s as any).randchan ?? 0) === 16  &&  ((s as any).pcs_tattoos ?? 0)?.['wrist'] > 0) {
                                      if (((s as any).pcs_tattoos ?? 0)?.['total'] > ((s as any).tattPrefTmpMax ?? 0)) {
                                        qspCall(s, 'tattoo_management', 'remove', 'wrist');
                                        scene.text('He removes the tattoo on your wrists.');
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    qspCall(s, 'stat', '');
    scene.text('"All done!", the artist says as he starts to clean up his various tools."');
    scene.text('"Me myself, I like a girl with a lot of tattoos, but to each their own." he tells you.');
    scene.text('You are reluctant to admit it, but taking away tattoos does make your skin look much cleaner, and makes people focus more on the figure, and not just the art on it.');
    scene.actions([
      { label: 'Go back towards your <<$npcrelat>>', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: As you go back towards <<$Xem>>, <<$Xe>> looks you up and down.
    scene.text(`As you go back towards ${((s as any).Xem ?? 0)}, ${((s as any).Xe ?? 0)} looks you up and down.`);
    // TODO-QSP: dynamic text: "There we go!", <<$Xe>> says with a smile.
    scene.text(`"There we go!", ${((s as any).Xe ?? 0)} says with a smile.`);
    if (((s as any).tattPrefTmpMax ?? 0) === 2) {
      // TODO-QSP: dynamic text: You can tell <<$Xe>> hates girls with tattoos and likes them to have as few as p...
      scene.text(`You can tell ${((s as any).Xe ?? 0)} hates girls with tattoos and likes them to have as few as possible. You can't help but agree in some aspect, it does make your body look a bit sexier.`);
    } else {
      if (((s as any).tattPrefTmpMax ?? 0) === 5) {
        // TODO-QSP: dynamic text: You can tell that though <<$npcdesc>> likes a girl to have some tattoos, <<$Xe>>...
        scene.text(`You can tell that though ${((s as any).npcdesc ?? 0)} likes a girl to have some tattoos, ${((s as any).Xe ?? 0)} doesn't want them to be the focus on a girl. You can't help but agree that there is a thing as too many tattoos.`);
      }
    }
    if (((s as any).npc_gentle ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
      // TODO-QSP: dynamic text: You can see <<$Xe>> loves how many tattoos you have, as <<$Xe>> has a slight blu...
      scene.text(`You can see ${((s as any).Xe ?? 0)} loves how many tattoos you have, as ${((s as any).Xe ?? 0)} has a slight blush on ${((s as any).Xyr ?? 0)} face.`);
    } else {
      if (((s as any).npc_rough ?? 0)?.[String((s as any).boy ?? 0)] === 0) {
        // TODO-QSP: dynamic text: <<$npcdesc>> gives you one last examination with <<$Xyr>> eyes and gives you a q...
        scene.text(`${((s as any).npcdesc ?? 0)} gives you one last examination with ${((s as any).Xyr ?? 0)} eyes and gives you a quick kiss on your cheek.`);
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>> comes up to you, and with a quick squeeze on the ass, kisses you on...
        scene.text(`${((s as any).npcdesc ?? 0)} comes up to you, and with a quick squeeze on the ass, kisses you on the lips and says, "Now this is a bombshell."`);
      }
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 40;
    scene.text('After getting rid of the tattoos, you both part ways and head home.');
    // TODO-QSP: dynamic text: You can't say why, but you feel it would be harder to say no next time if <<$Xe>...
    scene.text(`You can't say why, but you feel it would be harder to say no next time if ${((s as any).Xe ?? 0)} asked you to change something.`);
    ((s as any).npc_compliance ?? {})[String((s as any).npcID ?? 0)] = (((s as any).npc_compliance ?? {})[String((s as any).npcID ?? 0)] ?? 0) - (1);
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    return;
    scene.actions([
      { label: 'Continue', goto: ['homes_properties', 'go_home'] },
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
    }
  } },
  ]);
  scene.build();
}

function enterLips(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Enter clinic', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: As you arrive at the clinic, <<$npcdesc>> walks up to the front desc and asks to...
    scene.text(`As you arrive at the clinic, ${((s as any).npcdesc ?? 0)} walks up to the front desc and asks to speak with the plastic surgeon. After a couple of minutes the plastic surgeon comes out with a clipboard.`);
    // TODO-QSP: dynamic text: <<$npcdesc>> talks to the surgeon and after a brief exchange of words, <<$Xe>> h...
    scene.text(`${((s as any).npcdesc ?? 0)} talks to the surgeon and after a brief exchange of words, ${((s as any).Xe ?? 0)} hands the surgeon a respectable stack of bills. The surgeon discreetly puts the bills into his jacket and starts to walk toward you.`);
    // TODO-QSP: dynamic text: Even though you don't know what <<$npcdesc>> said to the surgeon, you still jump...
    scene.text(`Even though you don't know what ${((s as any).npcdesc ?? 0)} said to the surgeon, you still jump when he starts to speak to you.`);
    if (((s as any).pcs_lip ?? 0) < ((s as any).lipsPrefTmpMin ?? 0)) {
      // TODO-QSP: dynamic text: "So that <<$person>> over there says you want to get lip enhancements?", the doc...
      scene.text(`"So that ${((s as any).person ?? 0)} over there says you want to get lip enhancements?", the doctor asks quizically, looking at the size of your lips.`);
    } else {
      // TODO-QSP: dynamic text: "So that <<$person>> over there says you want to get a lip reduction?", the doct...
      scene.text(`"So that ${((s as any).person ?? 0)} over there says you want to get a lip reduction?", the doctor asks quizically, looking at the size of your lips.`);
    }
    scene.text('"Y-yes.", you manage to squeek out, your face turning slightly red at the topic of the conversation.');
    scene.text('"All right, lets get started right away", he says as he looks at his clipboard.');
    scene.actions([
      { label: 'Go with doctor to operating room', handler: (st: GameState) => {
    scene.text('The doctor motions for you to sit on the operating table, and you reluctantly comply.');
    scene.text('"Don\'t worry it will just be a quick injection and we will be done, it\'s perfectly safe.", the doctor says.');
    scene.text('As you try to get comfortable on the table the doctor comes up to you with the injection.');
    scene.text('"Okay now if you can pucker out your lips it will give me a nice surface for the shot.", he says holding your face gently.');
    scene.actions([
      { label: 'Pucker out lips', handler: (st: GameState) => {
    scene.text('"And… Done. There we go! You should feel the effects almost immediately."');
    scene.text('He holds up a mirror and you look at your changed lips.');
    if (((s as any).pcs_lip ?? 0) < ((s as any).lipsPrefTmpMin ?? 0)) {
      (s as any).minut = ((s as any).minut ?? 0) + 20;
      (s as any).pcs_lip = ((s as any).lipsPrefTmpMin ?? 0) + 1;
      qspCall(s, 'stat', '');
      scene.text('Your lips have grown! They are whorishly huge!');
      scene.text('You look at the doctor and he shrugs, "You look much nicer with huge lips in my opinion."');
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 20;
      (s as any).pcs_lip = ((s as any).lipsPrefTmpMax ?? 0) - 1;
      scene.text('Your lips have shrunk! They look much more modest now.');
      scene.text('You look at the doctor and he shrugs, "You look much nicer with more modest lips in my opinion."');
    }
    scene.text('You stand up and leave the room.');
    scene.actions([
      { label: 'Go back towards your <<$npcrelat>>', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: As you go back towards <<$Xem>>, <<$Xe>> looks you up and down.
    scene.text(`As you go back towards ${((s as any).Xem ?? 0)}, ${((s as any).Xe ?? 0)} looks you up and down.`);
    // TODO-QSP: dynamic text: "There we go!", <<$Xe>> says with a smile.
    scene.text(`"There we go!", ${((s as any).Xe ?? 0)} says with a smile.`);
    if (((s as any).lipsPrefTmp ?? 0) === 1) {
      // TODO-QSP: dynamic text: You can tell <<$Xe>> loves girls with more modest yet full lips, and you have to...
      scene.text(`You can tell ${((s as any).Xe ?? 0)} loves girls with more modest yet full lips, and you have to admit, it's better than having big whorish, cocksucking lips.`);
    } else {
      if (((s as any).lipsPrefTmp ?? 0) === 2) {
        // TODO-QSP: dynamic text: You can tell that <<$npcdesc>> likes a girl to have whorish, cocksucking lips, a...
        scene.text(`You can tell that ${((s as any).npcdesc ?? 0)} likes a girl to have whorish, cocksucking lips, and as you give the mirror in the room a quick slutty face, you have to admit it does make you look sexier.`);
      }
    }
    if (((s as any).npc_gentle ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
      // TODO-QSP: dynamic text: You can see <<$Xe>> loves the size of your lips, for even with all of <<$Xyr>> s...
      scene.text(`You can see ${((s as any).Xe ?? 0)} loves the size of your lips, for even with all of ${((s as any).Xyr ?? 0)} shyness, ${((s as any).Xe ?? 0)} still gives you a kiss on your new lips.`);
    } else {
      if (((s as any).npc_rough ?? 0)?.[String((s as any).boy ?? 0)] === 0) {
        // TODO-QSP: dynamic text: <<$npcdesc>> gives you one last examination of your new lips before giving you a...
        scene.text(`${((s as any).npcdesc ?? 0)} gives you one last examination of your new lips before giving you a kiss on the lips, probably to test the new wares.`);
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>> comes up to you, and with a quick squeeze on the ass, kisses you on...
        scene.text(`${((s as any).npcdesc ?? 0)} comes up to you, and with a quick squeeze on the ass, kisses you on your new lips and says, "Now those lips are the lips of a goddess."`);
      }
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('After improving your lips, you both part ways and head home.');
    // TODO-QSP: dynamic text: You can't say why, but you feel it would be harder to say no next time if <<$Xe>...
    scene.text(`You can't say why, but you feel it would be harder to say no next time if ${((s as any).Xe ?? 0)} asked you to change something.`);
    ((s as any).npc_compliance ?? {})[String((s as any).npcID ?? 0)] = (((s as any).npc_compliance ?? {})[String((s as any).npcID ?? 0)] ?? 0) - (1);
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    return;
    scene.actions([
      { label: 'Continue', goto: ['homes_properties', 'go_home'] },
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

function enterTits(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Enter clinic', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: As you arrive at the clinic, <<$npcdesc>> walks up to the front desc and asks to...
    scene.text(`As you arrive at the clinic, ${((s as any).npcdesc ?? 0)} walks up to the front desc and asks to speak with the plastic surgeon. After a couple of minutes the plastic surgeon comes out with a clipboard.`);
    // TODO-QSP: dynamic text: <<$npcdesc>> talks to the surgeon and after a brief exchange of words, <<$Xe>> h...
    scene.text(`${((s as any).npcdesc ?? 0)} talks to the surgeon and after a brief exchange of words, ${((s as any).Xe ?? 0)} hands the surgeon a respectable stack of bills. The surgeon discreetly puts the bills into his jacket and starts to walk toward you.`);
    if (((s as any).tits ?? 0) < ((s as any).titMin ?? 0)) {
      // TODO-QSP: dynamic text: Even though you don't know what <<$npcdesc>> said to the surgeon, you still jump...
      scene.text(`Even though you don't know what ${((s as any).npcdesc ?? 0)} said to the surgeon, you still jump when he starts to speak to you.`);
      // TODO-QSP: dynamic text: "So that <<$person>> over there says you want to get breast implants?", the doct...
      scene.text(`"So that ${((s as any).person ?? 0)} over there says you want to get breast implants?", the doctor asks quizically, looking you up and down.`);
      scene.text('"Y-yes.", you manage to squeek out, your face turning slightly red at the topic of the conversation.');
      // TODO-QSP: dynamic text: "All right, lets get started right away, let me see what size <<$Xe>> got for yo...
      scene.text(`"All right, lets get started right away, let me see what size ${((s as any).Xe ?? 0)} got for you…", he says as he looks at his clipboard.`);
      (s as any).titAmount = (((s as any).titMin ?? 0) - ((s as any).tits ?? 0)) * 5 + 9;
      if (((s as any).titAmount ?? 0) <= 10) {
        scene.text('"It seems you will be getting our smallest breast implants."');
        scene.text('As you hear this you relax a bit. At least it\'s not a big difference.');
      } else {
        if (((s as any).titAmount ?? 0) <= 15) {
          scene.text('"It seems you will be getting small breast implants." ');
          scene.text('As you hear this you shift nervously. At least it\'s not going to be that big of a change.');
        } else {
          if (((s as any).titAmount ?? 0) <= 20) {
            scene.text('"It seems you will be getting medium breast implants."');
            scene.text('Your heart skips a beat, "Those are kind of big.", you think to yourself.');
          } else {
            if (((s as any).titAmount ?? 0) <= 25) {
              scene.text('"It seems you will be getting large breast implants."');
              scene.text('Your heart skips a beat, What? "Those will be huge…", you tell to yourself.');
            } else {
              if (((s as any).titAmount ?? 0) <= 30) {
                scene.text('"It seems you will be getting our largest, the XLarge breast implants." ');
                scene.text('What?! You are about to get up and leave, but you realize that it\'s too late for that now. "God, those will be MASSIVE", you think to yourself.');
              } else {
                scene.text('This should not shoot off, if you go from 10 to 35 it should fall into preference still.');
              }
            }
          }
        }
      }
      scene.text('"If you would follow me, I will take you to the operating room.", the doctor says indifferently.');
      scene.actions([
        { label: 'Go with doctor to operating room', handler: (st: GameState) => {
    scene.text('The doctor motions for you to lay on the operating table, and you reluctantly comply.');
    scene.text('"Now this is going to take about 2 hours for us to do the procedure, but do not worry, the procedure is safe, I have done this dozens of times." the doctor says.');
    scene.text('As you try to get comfortable on the table the doctor comes up to you with the anesthesia.');
    scene.text('"Okay before I continue I want you to take a deep breath okay?", he says.');
    scene.actions([
      { label: 'Take a deep breath', handler: (st: GameState) => {
    scene.text('You take a deep breath of the sleeping gas, and soon the room starts to spin and your mind starts to fog, then everything goes dark…');
    scene.actions([
      { label: 'Wake up', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 120;
    ((s as any).bodyVars ?? {})['bust_silicone'] = (((s as any).bodyVars ?? {})['bust_silicone'] ?? 0) + (((s as any).titAmount ?? 0));
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: "<<$pcs_firstname>> <<$pcs_lastname>>, are you listening?"
    scene.text(`"${((s as any).pcs_firstname ?? 0)} ${((s as any).pcs_lastname ?? 0)}, are you listening?"`);
    scene.text(' \'Wait… I\'m awake?\' It seemed just a couple of seconds ago you were laying down on the operating table about to have surgery.');
    scene.text(' \'My breasts feel fuller…\' ');
    // TODO-QSP: dynamic text: You grab your breasts as you look down, and you see you have a bigger breasts! Y...
    scene.text(`You grab your breasts as you look down, and you see you have a bigger breasts! Your breasts are now ${((s as any).titsize ?? 0)}s.`);
    scene.img(`images/pc/body/tits/t${((s as any).tits ?? 0)}.jpg`);
    // TODO-QSP: dynamic text: You aren't paying attention to the doctor as he finishes up, and you slowly get ...
    scene.text(`You aren't paying attention to the doctor as he finishes up, and you slowly get off the operating table and head over to your ${((s as any).npcrelat ?? 0)}.`);
    scene.actions([
      { label: 'Head over to your <<$npcrelat>>', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: As you go back towards <<$Xem>>, <<$Xe>> looks you up and down.
    scene.text(`As you go back towards ${((s as any).Xem ?? 0)}, ${((s as any).Xe ?? 0)} looks you up and down.`);
    // TODO-QSP: dynamic text: "There we go!", <<$Xe>> says with a smile.
    scene.text(`"There we go!", ${((s as any).Xe ?? 0)} says with a smile.`);
    if ((!((s as any).titBoy ?? 0))) {
      scene.text('If you are getting inplants this should not fire off.');
    } else {
      if (((s as any).titBoy ?? 0) === 1) {
        // TODO-QSP: dynamic text: You can tell that <<$npcdesc>> likes a girl with a good rack, thankfully althoug...
        scene.text(`You can tell that ${((s as any).npcdesc ?? 0)} likes a girl with a good rack, thankfully although you look more like a bimbo than before, ${((s as any).Xyr ?? 0)} tit preference is not outrageously big, and you must admit, it does make you look sexier.`);
      } else {
        if (((s as any).titBoy ?? 0) === 2) {
          // TODO-QSP: dynamic text: You can clearly tell <<$npcdesc>> loves a girl with bimbo-sized tits, as you hol...
          scene.text(`You can clearly tell ${((s as any).npcdesc ?? 0)} loves a girl with bimbo-sized tits, as you hold your tits you look at yourself in the mirror. The girl staring back at you looks like a bimbo that doesn't know where to put her whorish tits. And you have to admit, it does turn you on a little.`);
        }
      }
    }
    if (((s as any).npc_gentle ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
      // TODO-QSP: dynamic text: From the blush on <<$Xyr>> face, you can tell <<$npcdesc>> loves your new breast...
      scene.text(`From the blush on ${((s as any).Xyr ?? 0)} face, you can tell ${((s as any).npcdesc ?? 0)} loves your new breasts.`);
    } else {
      if (((s as any).npc_rough ?? 0)?.[String((s as any).boy ?? 0)] === 0) {
        // TODO-QSP: dynamic text: <<$npcdesc>> gives you one last look and gives you a quick kiss on your cheek.
        scene.text(`${((s as any).npcdesc ?? 0)} gives you one last look and gives you a quick kiss on your cheek.`);
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>> comes up to you, and with a quick slap on the ass, kisses you on th...
        scene.text(`${((s as any).npcdesc ?? 0)} comes up to you, and with a quick slap on the ass, kisses you on the lips and says, "Now you look like a bombshell!"`);
      }
    }
    return;
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 40;
    scene.text('After getting your new breasts, you both part ways and head home.');
    // TODO-QSP: dynamic text: You can't say why, but you feel it would be harder to say no next time if <<$Xe>...
    scene.text(`You can't say why, but you feel it would be harder to say no next time if ${((s as any).Xe ?? 0)} asked you to change something.`);
    ((s as any).npc_compliance ?? {})[String((s as any).npcID ?? 0)] = (((s as any).npc_compliance ?? {})[String((s as any).npcID ?? 0)] ?? 0) - (1);
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    scene.actions([
      { label: 'Continue', goto: ['homes_properties', 'go_home'] },
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
      if (((s as any).tits ?? 0) > ((s as any).titMax ?? 0)) {
        // TODO-QSP: dynamic text: Even though you don't know what <<$npcdesc>> said to the surgeon, you still jump...
        scene.text(`Even though you don't know what ${((s as any).npcdesc ?? 0)} said to the surgeon, you still jump when he starts to speak to you.`);
        // TODO-QSP: dynamic text: "So that <<$person>> over there says you want to get breast implants?", the doct...
        scene.text(`"So that ${((s as any).person ?? 0)} over there says you want to get breast implants?", the doctor asks quizically, looking you up and down.`);
        scene.text('"Y-yes.", you manage to squeek out, your face turning slightly red at the topic of the conversation.');
        // TODO-QSP: dynamic text: "All right, lets get started right away, <<$Xe>> had a set size <<$Xe>> wanted s...
        scene.text(`"All right, lets get started right away, ${((s as any).Xe ?? 0)} had a set size ${((s as any).Xe ?? 0)} wanted so we will be doing that.", he says as he looks at his clipboard.`);
        (s as any).titAmount = (((s as any).tits ?? 0) - ((s as any).titMax ?? 0)) * 5 + 9;
        scene.text('"If you would follow me, I will take you to the operating room.", the doctor says indifferently.');
        scene.actions([
          { label: 'Go with doctor to operating room', handler: (st: GameState) => {
    scene.text('The doctor motions for you to lay on the operating table, and you reluctantly comply.');
    scene.text('"Now this is going to take about 2 hours for us to do the procedure, but do not worry, the procedure is safe, I have done this dozens of times." the doctor says.');
    scene.text('As you try to get comfortable on the table the doctor comes up to you with the anesthesia.');
    scene.text('"Okay before I continue I want you to take a deep breath okay?", he says.');
    scene.actions([
      { label: 'Take a deep breath', handler: (st: GameState) => {
    scene.text('You take a deep breath of the sleeping gas, and soon the room starts to spin and your mind starts to fog, then everything goes dark…');
    scene.actions([
      { label: 'Wake up', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 120;
    if (((s as any).bodyVars ?? 0)?.['bust_silicone'] - ((s as any).titAmount ?? 0) < 0) {
      (s as any).titExtra = ((s as any).titAmount ?? 0) - ((s as any).bodyVars ?? {})?.['bust_silicone'];
      ((s as any).bodyVars ?? {})['bust_silicone'] = 0;
      ((s as any).pcs_mass ?? {})['bust'] = (((s as any).pcs_mass ?? {})['bust'] ?? 0) - (((s as any).titExtra ?? 0));
    } else {
      ((s as any).bodyVars ?? {})['bust_silicone'] = (((s as any).bodyVars ?? {})['bust_silicone'] ?? 0) - (((s as any).titAmount ?? 0));
    }
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: "<<$pcs_firstname>> <<$pcs_lastname>>, are you listening?"
    scene.text(`"${((s as any).pcs_firstname ?? 0)} ${((s as any).pcs_lastname ?? 0)}, are you listening?"`);
    scene.text(' \'Wait… I\'m awake?\' It seemed just a couple of seconds ago you were laying down on the operating table about to have surgery.');
    scene.text(' \'My breasts feel lighter…\' ');
    // TODO-QSP: dynamic text: You grab your breasts as you look down, and you realize you have much smaller br...
    scene.text(`You grab your breasts as you look down, and you realize you have much smaller breasts! Your breasts are now ${((s as any).titsize ?? 0)}s.`);
    scene.img(`images/pc/body/tits/t${((s as any).tits ?? 0)}.jpg`);
    // TODO-QSP: dynamic text: You aren't paying attention to the doctor as he finishes up, and you slowly get ...
    scene.text(`You aren't paying attention to the doctor as he finishes up, and you slowly get off the operating table and head over to your ${((s as any).npcrelat ?? 0)}.`);
    scene.actions([
      { label: 'Head over to your <<$npcrelat>>', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: As you go back towards <<$Xem>>, <<$Xe>> looks you up and down.
    scene.text(`As you go back towards ${((s as any).Xem ?? 0)}, ${((s as any).Xe ?? 0)} looks you up and down.`);
    // TODO-QSP: dynamic text: "There we go!", <<$Xe>> says with a smile.
    scene.text(`"There we go!", ${((s as any).Xe ?? 0)} says with a smile.`);
    if (((s as any).titMin ?? 0) < 2) {
      // TODO-QSP: dynamic text: You can tell that <<$npcdesc>> likes a girl without whorish tits, and you can ki...
      scene.text(`You can tell that ${((s as any).npcdesc ?? 0)} likes a girl without whorish tits, and you can kind of see why as you slowly grope your now tinier breasts.`);
    } else {
      if (((s as any).titMin ?? 0) < 4) {
        // TODO-QSP: dynamic text: You can tell that <<$npcdesc>> likes a girl with an average rack, and you admitt...
        scene.text(`You can tell that ${((s as any).npcdesc ?? 0)} likes a girl with an average rack, and you admittedly agree with ${((s as any).Xem ?? 0)}, as you slowly massage your breasts.`);
      } else {
        if (((s as any).titMin ?? 0) < 6) {
          // TODO-QSP: dynamic text: You can tell that <<$npcdesc>> likes a girl with a good rack, but thankfully not...
          scene.text(`You can tell that ${((s as any).npcdesc ?? 0)} likes a girl with a good rack, but thankfully not too big, and you admittedly agree with ${((s as any).Xem ?? 0)}, as you slowly massage your breasts.`);
        } else {
          scene.text('Reducing to max? What?');
        }
      }
    }
    if (((s as any).npc_gentle ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
      // TODO-QSP: dynamic text: From the blush on <<$Xyr>> face, you can tell <<$npcdesc>> loves your new breast...
      scene.text(`From the blush on ${((s as any).Xyr ?? 0)} face, you can tell ${((s as any).npcdesc ?? 0)} loves your new breasts.`);
    } else {
      if (((s as any).npc_rough ?? 0)?.[String((s as any).boy ?? 0)] === 0) {
        // TODO-QSP: dynamic text: <<$npcdesc>> gives you one last look and gives you a quick kiss on your cheek.
        scene.text(`${((s as any).npcdesc ?? 0)} gives you one last look and gives you a quick kiss on your cheek.`);
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>> comes up to you, and with a quick slap on the ass, kisses you on th...
        scene.text(`${((s as any).npcdesc ?? 0)} comes up to you, and with a quick slap on the ass, kisses you on the lips and says, "Now you look like a bombshell!"`);
      }
    }
    return;
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 40;
    scene.text('After getting your new breasts, you both part ways and head home.');
    // TODO-QSP: dynamic text: You can't say why, but you feel it would be harder to say no next time if <<$Xe>...
    scene.text(`You can't say why, but you feel it would be harder to say no next time if ${((s as any).Xe ?? 0)} asked you to change something.`);
    ((s as any).npc_compliance ?? {})[String((s as any).npcID ?? 0)] = (((s as any).npc_compliance ?? {})[String((s as any).npcID ?? 0)] ?? 0) - (1);
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    scene.actions([
      { label: 'Continue', goto: ['homes_properties', 'go_home'] },
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
    }
  } },
  ]);
  scene.build();
}

function enterClothes(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterFigure(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Enter clinic', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: As you arrive at the clinic, <<$npcdesc>> walks up to the front desc and asks to...
    scene.text(`As you arrive at the clinic, ${((s as any).npcdesc ?? 0)} walks up to the front desc and asks to speak with the plastic surgeon. After a couple of minutes the plastic surgeon comes out with a clipboard.`);
    // TODO-QSP: dynamic text: <<$npcdesc>> talks to the surgeon and after a brief exchange of words, <<$Xe>> h...
    scene.text(`${((s as any).npcdesc ?? 0)} talks to the surgeon and after a brief exchange of words, ${((s as any).Xe ?? 0)} hands the surgeon a respectable stack of bills. The surgeon discreetly puts the bills into his jacket and starts to walk toward you.`);
    // TODO-QSP: dynamic text: Even though you don't know what <<$npcdesc>> said to the surgeon, you still jump...
    scene.text(`Even though you don't know what ${((s as any).npcdesc ?? 0)} said to the surgeon, you still jump when he starts to speak to you.`);
    scene.text('"So you want to get a lyposuction procedure done, is that right?", the doctor asks you.');
    scene.actions([
      { label: 'Meekly nod', handler: (st: GameState) => {
    scene.text('You know you can\'t back out now. "Y-yes.", you manage to squeek out, your face turning slightly red at the topic of the conversation.');
    scene.text('"All right, lets get started right away, if you can follow me into the operating room.');
    scene.actions([
      { label: 'Go with doctor to operating room', handler: (st: GameState) => {
    scene.text('The doctor motions for you to lay on the operating table, and you reluctantly comply.');
    scene.text('"Now this is going to take about 2 hours for us to do the procedure, but do not worry, the procedure is safe, I have done this dozens of times." the doctor says.');
    scene.text('As you try to get comfortable on the table the doctor comes up to you with the anesthesia.');
    scene.text('"Okay before I continue I want you to take a deep breath okay?", he says.');
    scene.actions([
      { label: 'Take a deep breath', handler: (st: GameState) => {
    scene.text('You take a deep breath of the sleeping gas, and soon the room starts to spin and your mind starts to fog, then everything goes dark…');
    scene.actions([
      { label: 'Wake up', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 120;
    (s as any).lc_counter = 0;
    (s as any).temp_target_bmi = 0;
    // TODO-QSP: :loopfatRemover
    ((s as any).pcs_mass ?? {})['body'] = qspFunc(s, 'body', 'CalcOptBodyMass', ((s as any).pcs_bmi ?? 0) - 3);
    if (((s as any).pcs_mass ?? 0)?.['body'] < 11) {
      ((s as any).pcs_mass ?? {})['body'] = 11;
    }
    qspCall(s, 'body', 'softreset');
    (s as any).lc_counter = ((s as any).lc_counter ?? 0) + (1);
    if (qspFunc(s, 'lover_pref', 'check_bmi') === 0  &&  ((s as any).lc_counter ?? 0) < 10) {
      // TODO-QSP: jump 'loopfatRemover'
    }
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: "<<$pcs_firstname>> <<$pcs_lastname>>, are you listening?"
    scene.text(`"${((s as any).pcs_firstname ?? 0)} ${((s as any).pcs_lastname ?? 0)}, are you listening?"`);
    scene.text(' \'Wait… I\'m awake?\' It seemed just a couple of seconds ago you were laying down on the operating table about to have surgery.');
    // TODO-QSP: dynamic text: You aren't paying attention to the doctor as he finishes up, and you slowly get ...
    scene.text(`You aren't paying attention to the doctor as he finishes up, and you slowly get off the operating table and head over to your ${((s as any).npcrelat ?? 0)}.`);
    scene.actions([
      { label: 'Head over to your <<$npcrelat>>', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: As you go back towards <<$Xem>>, <<$Xe>> looks you up and down.
    scene.text(`As you go back towards ${((s as any).Xem ?? 0)}, ${((s as any).Xe ?? 0)} looks you up and down.`);
    // TODO-QSP: dynamic text: "There we go!", <<$Xe>> says with a smile.
    scene.text(`"There we go!", ${((s as any).Xe ?? 0)} says with a smile.`);
    scene.img(`${((s as any).img_temp ?? 0)}`);
    if (((s as any).figurePrefMin ?? 0) < 19) {
      // TODO-QSP: dynamic text: You can tell that <<$npcdesc>> likes a girl that has very little fat on her whor...
      scene.text(`You can tell that ${((s as any).npcdesc ?? 0)} likes a girl that has very little fat on her whorish tits, and you can kind of see why as you slowly look at yourself in the mirror.`);
    } else {
      if (((s as any).figurePrefMin ?? 0) < 25) {
        // TODO-QSP: dynamic text: You can tell that <<$npcdesc>> likes a girl that's not too fat, but thankfully n...
        scene.text(`You can tell that ${((s as any).npcdesc ?? 0)} likes a girl that's not too fat, but thankfully not too skinny, and you admittedly agree with ${((s as any).Xem ?? 0)}, as you slowly run your hands over your now smaller curves.`);
      } else {
        scene.text('Reducing to max? What?');
      }
    }
    if (((s as any).npc_gentle ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
      // TODO-QSP: dynamic text: From the blush on <<$Xyr>> face, you can tell <<$npcdesc>> loves your new figure...
      scene.text(`From the blush on ${((s as any).Xyr ?? 0)} face, you can tell ${((s as any).npcdesc ?? 0)} loves your new figure.`);
    } else {
      if (((s as any).npc_rough ?? 0)?.[String((s as any).boy ?? 0)] === 0) {
        // TODO-QSP: dynamic text: <<$npcdesc>> gives your figure one last look and gives you a quick kiss on your ...
        scene.text(`${((s as any).npcdesc ?? 0)} gives your figure one last look and gives you a quick kiss on your cheek.`);
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>> comes up to you, and with a quick slap on the ass, kisses you on th...
        scene.text(`${((s as any).npcdesc ?? 0)} comes up to you, and with a quick slap on the ass, kisses you on the lips and says, "Now you have the body of a bombshell!"`);
      }
    }
    return;
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('After getting a lyposuction treatment, you both part ways and head home.');
    // TODO-QSP: dynamic text: You can't say why, but you feel it would be harder to say no next time if <<$Xe>...
    scene.text(`You can't say why, but you feel it would be harder to say no next time if ${((s as any).Xe ?? 0)} asked you to change something.`);
    ((s as any).npc_compliance ?? {})[String((s as any).npcID ?? 0)] = (((s as any).npc_compliance ?? {})[String((s as any).npcID ?? 0)] ?? 0) - (1);
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    scene.actions([
      { label: 'Continue', goto: ['homes_properties', 'go_home'] },
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
    case 'Hair':
      enterHair(s, scene);
      break;
    case 'Make':
      enterMake(s, scene);
      break;
    case 'Pier':
      enterPier(s, scene);
      break;
    case 'Tatt':
      enterTatt(s, scene);
      break;
    case 'Lips':
      enterLips(s, scene);
      break;
    case 'Tits':
      enterTits(s, scene);
      break;
    case 'Clothes':
      enterClothes(s, scene);
      break;
    case 'Figure':
      enterFigure(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const lover_change: LocationDef = {
  name: 'lover_change',
  title: 'You can\'t say why, but you feel it would be harder to say no',
  region: 'other',
  enter: enter,
};
