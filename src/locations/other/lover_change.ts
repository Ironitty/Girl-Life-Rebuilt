import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterHair(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text(`As you arrive at the salon with ${((s as any).npcdesc ?? '')}, ${((s as any).Xe ?? '')} heads over to the counter and tells something to the barber. The barber nods and comes towards you.`);
  scene.text(`"So Ms. ${((s as any).pcs_lastname ?? '')}, you want to get your hair dyed ${((s as any).hairPref ?? '')} now is that right?"`);
  scene.actions([
{ label: 'Nod', handler: (st: GameState) => {
    scene.text('Knowing there is no way to back out of this now, you meekly nod.');
    scene.text(`"Alrighty then, your hair will be ${((st as any).hairPref ?? '')} before you know it!"`);
    scene.actions([
      { label: 'Take a seat', handler: (st: GameState) => {
    (st as any).pcs_haircol = ((st as any).temp_haircol ?? 0);
    (st as any).dyefade = (Math.floor(Math.random() * 8) + 35);
    (st as any).collength = ((st as any).pcs_hairlng ?? 0);
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    qspCall(st, 'stat', '');
    scene.text(`In less than half an hour you see that your hair's original color has been changed to ${((st as any).hairPref ?? '')}.`);
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Get up from chair and go to your ' + String(((st as any).npcrelat ?? '') ?? '') + '.', handler: (st: GameState) => {
    scene.text(`You walk towards your ${((st as any).npcrelat ?? '')} with your new ${((st as any).hairPref ?? '')} hair and ${((st as any).Xe ?? '')} tells you that you look amazing.`);
    scene.text(`You can't say why, but you feel it would be harder to say no next time if ${((st as any).Xe ?? '')} asked you to change something.`);
    scene.text('You then leave the salon and head home.');
    (st as any).hairPref = undefined;
    ((st as any).npc_compliance = (st as any).npc_compliance ?? {})[String((st as any).npcID ?? 0)] = ((st as any).npc_compliance[String((st as any).npcID ?? 0)] ?? 0) - (1);
    scene.actions([
      { label: 'Continue', goto: ['homes_properties', 'go_home'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
]);
  return;
  scene.build();
}

function enterMake(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'stat', '');
  (s as any).makeupSetting = ((s as any).temp_makepref ?? 0);
  scene.text(`After you agree to change your makeup routine for ${((s as any).Xem ?? '')}, you talk a bit with ${((s as any).Xem ?? '')} for an hour and then head home.`);
  scene.text('You can\'t say why, but you feel it would be harder to say no next time if he asked you to change something.');
  ((s as any).npc_compliance = (s as any).npc_compliance ?? {})[String((s as any).npcID ?? 0)] = ((s as any).npc_compliance[String((s as any).npcID ?? 0)] ?? 0) - (1);
  scene.actions([
{ label: 'Continue', goto: ['homes_properties', 'go_home'] },
]);
  return;
  scene.build();
}

function enterPier(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text(`Since you agreed to adjust your piercings to fit your ${((s as any).npcrelat ?? '')}'s preferences, ${((s as any).Xe ?? '')} looks at any pre-existing piercings you may have.`);
  if (((s as any).pcs_piercings ?? 0)?.['wearing'] >= ((s as any).pierPrefTmpMin ?? 0)  &&  ((s as any).pcs_piercings ?? 0)?.['wearing'] < ((s as any).pierPrefTmpMax ?? 0)) {
    scene.text('This should not fire off. NO else if.');
    scene.actions([
{ label: 'Continue', goto: ['homes_properties', 'go_home'] },
]);
    return;
  } else {
    if (((s as any).pcs_piercings ?? 0)?.['wearing'] > ((s as any).pierPrefTmpMax ?? 0)) {
      scene.text(`${((s as any).npcdesc ?? '')} says that you just need to remove the ones that you have and you will look amazing.`);
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Let ' + String(((s as any).Xem ?? '') ?? '') + ' remove some piercings.', handler: (st: GameState) => {
    if (((st as any).pcs_piercings ?? 0)?.['navel'] > 0  &&  ((st as any).pcs_piercings ?? 0)?.['wearing'] < ((st as any).pierPrefTmpMin ?? 0)) {
      scene.text(`${((st as any).Xec ?? '')} takes the barbell out of your navel.`);
      (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (2);
      qspCall(st, 'piercing_management', 'remove', 'navel');
    }
    if (((st as any).pcs_piercings ?? 0)?.['brow'] > 0  &&  ((st as any).pcs_piercings ?? 0)?.['wearing'] > ((st as any).pierPrefTmpMax ?? 0)) {
      scene.text(`${((st as any).npcdesc ?? '')} ${((st as any).Xec ?? '')} sees the piercing in your eyebrow and proceeds to remove it.`);
      qspCall(st, 'piercing_management', 'remove', 'brow');
    }
    if (((st as any).pcs_piercings ?? 0)?.['lip'] > 0  &&  ((st as any).pcs_piercings ?? 0)?.['wearing'] > ((st as any).pierPrefTmpMax ?? 0)) {
      scene.text(`${((st as any).Xec ?? '')} carefully takes the ring out of your lips.`);
      qspCall(st, 'piercing_management', 'remove', 'lip');
    }
    if (((st as any).pcs_piercings ?? 0)?.['nipples'] > 0  &&  ((st as any).pcs_piercings ?? 0)?.['wearing'] > ((st as any).pierPrefTmpMax ?? 0)) {
      scene.text(`${((st as any).npcdesc ?? '')} looks around, then carefully uses ${((st as any).Xyr ?? '')} hands to take the nipple rings off your breasts.`);
      (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
      qspCall(st, 'piercing_management', 'remove', 'nipples');
    }
    if (((st as any).pcs_piercings ?? 0)?.['nose'] > 0  &&  ((st as any).pcs_piercings ?? 0)?.['wearing'] > ((st as any).pierPrefTmpMax ?? 0)) {
      scene.text(`${((st as any).Xec ?? '')} sees the nose ring that you are wearing and removes it.`);
      qspCall(st, 'piercing_management', 'remove', 'nose');
    }
    if (((st as any).pcs_piercings ?? 0)?.['pussy'] > 0  &&  ((st as any).pcs_piercings ?? 0)?.['wearing'] > ((st as any).pierPrefTmpMax ?? 0)) {
      scene.text(`${((st as any).npcdesc ?? '')} gets close to your ear, "Don't make a scene okay?", then he non chalontely slides ${((st as any).Xyr ?? '')} hand down to your labia, and removes the ring there.`);
      scene.text('You cover your mouth as you let out a quick "Eep!", but in a second, it\'s over.');
      (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (7);
      qspCall(st, 'piercing_management', 'remove', 'pussy');
    }
    if (((st as any).pcs_piercings ?? 0)?.['tongue'] > 0  &&  ((st as any).pcs_piercings ?? 0)?.['wearing'] > ((st as any).pierPrefTmpMax ?? 0)) {
      scene.text(`${((st as any).Xec ?? '')} asks you to stick out your tongue, then removes the barbell in your tongue.`);
      qspCall(st, 'piercing_management', 'remove', 'tongue');
    }
    if (((st as any).pcs_piercings ?? 0)?.['ears'] > 0  &&  ((st as any).pcs_piercings ?? 0)?.['wearing'] > ((st as any).pierPrefTmpMax ?? 0)) {
      scene.text(`${((st as any).Xec ?? '')} sees your earrings and quickly takes them off.`);
      qspCall(st, 'piercing_management', 'remove', 'ears');
    }
    scene.actions([
      { label: '', labelFn: (s: GameState) => '"All done!" ' + String(((st as any).npcdesc ?? '') ?? '') + ' says.', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    qspCall(st, 'stat', '');
    scene.text(`${((st as any).npcdesc ?? '')} says "All done!" and promptly hands you the piercings ${((st as any).Xe ?? '')} took off.`);
    scene.text(`After this you guys talk for an hour about various things, before ${((st as any).Xe ?? '')} gets up and says ${((st as any).Xe ?? '')} has to go.`);
    scene.text(`You can't say why, but you feel it would be harder to say no next time if ${((st as any).Xe ?? '')} asked you to change something.`);
    ((st as any).npc_compliance = (st as any).npc_compliance ?? {})[String((st as any).npcID ?? 0)] = ((st as any).npc_compliance[String((st as any).npcID ?? 0)] ?? 0) - (1);
    scene.actions([
{ label: 'Continue', goto: ['homes_properties', 'go_home'] },
]);
    return;
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).pcs_piercings ?? 0)?.['total'] >= ((s as any).pierPrefTmpMin ?? 0)) {
        scene.text(`${((s as any).npcdesc ?? '')} sees that you have enough piercings already, and that you just need to wear them.`);
        scene.actions([
          { label: '', labelFn: (s: GameState) => 'Let ' + String(((s as any).Xem ?? '') ?? '') + ' add piercings', handler: (st: GameState) => {
    scene.text(`${((st as any).Xec ?? '')} pulls out a couple of piercings and starts to put them on you.`);
    if (((st as any).pcs_piercings ?? 0)?.['tongue'] < 0  &&  ((st as any).pcs_piercings ?? 0)?.['wearing'] < ((st as any).pierPrefTmpMin ?? 0)) {
      scene.text(`${((st as any).Xec ?? '')} asks you to stick out your tongue, then inserts a barbell into your tongue.`);
      qspCall(st, 'piercing_management', 'wear', 'tongue', 1);
    }
    if (((st as any).pcs_piercings ?? 0)?.['lip'] < 0  &&  ((st as any).pcs_piercings ?? 0)?.['wearing'] < ((st as any).pierPrefTmpMin ?? 0)) {
      scene.text(`${((st as any).Xec ?? '')} gently holds your lip, then inserts a ring.`);
      qspCall(st, 'piercing_management', 'wear', 'lip', 1);
    }
    if (((st as any).pcs_piercings ?? 0)?.['ears'] < 0  &&  ((st as any).pcs_piercings ?? 0)?.['wearing'] < ((st as any).pierPrefTmpMin ?? 0)) {
      scene.text(`${((st as any).Xec ?? '')} sees you do not have earrings and proceeds to put rings onto your ears. `);
      qspCall(st, 'piercing_management', 'wear', 'ears', 1);
    }
    if (((st as any).pcs_piercings ?? 0)?.['nose'] < 0  &&  ((st as any).pcs_piercings ?? 0)?.['wearing'] < ((st as any).pierPrefTmpMin ?? 0)) {
      scene.text(`${((st as any).Xec ?? '')} takes out a ring and then carefully inserts a ring through your nose.`);
      qspCall(st, 'piercing_management', 'wear', 'nose', 1);
    }
    if (((st as any).pcs_piercings ?? 0)?.['brow'] < 0  &&  ((st as any).pcs_piercings ?? 0)?.['wearing'] < ((st as any).pierPrefTmpMin ?? 0)) {
      scene.text(`${((st as any).npcdesc ?? '')} moves to your eyebrow and proceeds to insert a barbell.`);
      qspCall(st, 'piercing_management', 'wear', 'brow', 1);
    }
    if (((st as any).pcs_piercings ?? 0)?.['navel'] < 0  &&  ((st as any).pcs_piercings ?? 0)?.['wearing'] < ((st as any).pierPrefTmpMin ?? 0)) {
      scene.text(`${((st as any).Xec ?? '')} takes out a barbell and inserts it into your navel.`);
      (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (2);
      qspCall(st, 'piercing_management', 'wear', 'navel', 1);
    }
    if (((st as any).pcs_piercings ?? 0)?.['nipples'] < 0  &&  ((st as any).pcs_piercings ?? 0)?.['wearing'] < ((st as any).pierPrefTmpMin ?? 0)) {
      scene.text(`${((st as any).npcdesc ?? '')} looks around, then pulls out a couple of nipple rings. You can tell it slightly turns ${((st as any).Xem ?? '')} on as ${((st as any).Xe ?? '')} works ${((st as any).Xyr ?? '')} way up your shirt to put on the nipple rings.`);
      (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
      qspCall(st, 'piercing_management', 'wear', 'nipples', 1);
    }
    if (((st as any).pcs_piercings ?? 0)?.['pussy'] < 0  &&  ((st as any).pcs_piercings ?? 0)?.['wearing'] < ((st as any).pierPrefTmpMin ?? 0)) {
      scene.text(`${((st as any).npcdesc ?? '')} gets close to your ear, "Don't make a scene okay?", then ${((st as any).Xe ?? '')} nonchalantly slides ${((st as any).Xyr ?? '')} hand down to your labia, and inserts a ring.`);
      scene.text('You cover your mouth as you let out a quick "Eep!", but in a second, it\'s over.');
      (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (7);
      qspCall(st, 'piercing_management', 'wear', 'pussy', 1);
    }
    scene.actions([
      { label: '', labelFn: (s: GameState) => '"All done!" ' + String(((st as any).npcdesc ?? '') ?? '') + ' says.', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('You look at your body and examine it.');
    if (((st as any).pierPrefTmpMax ?? 0) === 2) {
      scene.text(`This should not fire off how did ${((st as any).Xe ?? '')} want to add stuff to nothing?`);
    } else {
      if (((st as any).pierPrefTmpMax ?? 0) === 5) {
        scene.text(`You can tell ${((st as any).Xe ?? '')} likes a girl with a bit more piercings, and you can't help but agree in some aspect, it does make you look a bit sexier.`);
      } else {
        if (((st as any).pierPrefTmpMin ?? 0) === 6) {
          scene.text('With this many piercings, you can feel many people will be exploring your body with their eyes, curious on where else you may have piercings.');
        }
      }
    }
    if (((st as any).npc_gentle ?? 0)?.[String((st as any).boy ?? 0)] === 0) {
      scene.text(`You can see ${((st as any).Xe ?? '')} loves how many piercings you have, as ${((st as any).Xe ?? '')} has a slight blush on ${((st as any).Xyr ?? '')} face.`);
    } else {
      if (((st as any).npc_rough ?? 0)?.[String((st as any).boy ?? 0)] === 0) {
        scene.text(`${((st as any).npcdesc ?? '')} gives you one last examination with ${((st as any).Xyr ?? '')} eyes and gives you a quick kiss on your cheek.`);
      } else {
        scene.text(`${((st as any).npcdesc ?? '')} comes up to you, and with a quick squeeze on the ass, kisses you on the lips and says, "Now this is a bombshell."`);
      }
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text(`After this you guys talk for an hour about various things, before ${((st as any).Xe ?? '')} gets up and says ${((st as any).Xe ?? '')} has to go.`);
    scene.text(`You can't say why, but you feel it would be harder to say no next time if ${((st as any).Xe ?? '')} asked you to change something.`);
    ((st as any).npc_compliance = (st as any).npc_compliance ?? {})[String((st as any).npcID ?? 0)] = ((st as any).npc_compliance[String((st as any).npcID ?? 0)] ?? 0) - (1);
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    scene.actions([
{ label: 'Continue', goto: ['homes_properties', 'go_home'] },
]);
    return;
  } },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        scene.text(`${((s as any).npcdesc ?? '')} takes you by the hand and heads over to the piercing salon.`);
        scene.actions([
          { label: 'Enter the piercing salon', handler: (st: GameState) => {
    scene.text(`As you both arrive at the salon, ${((st as any).Xe ?? '')} talks real quick to the tattoo artist and piercer.`);
    scene.text(`You see ${((st as any).Xem ?? '')} hand the artist some money and the artist starts to walk up towards you.`);
    scene.text(`"Your ${((st as any).npcrelat ?? '')} says you want to get some piercings?", the artist asks.`);
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
    while (true) {
      (st as any).randchan = (Math.floor(Math.random() * 8) + 0);
      if (((st as any).randchan ?? 0) === 0  &&  ((st as any).pcs_piercings ?? 0)?.['ears'] === 0) {
        qspCall(st, 'piercing_management', 'add', 'ears', (Math.floor(Math.random() * (qspFunc(s, 'piercing_management', 'get_total', 'ears') - 1 + 1)) + (1)));
        qspCall(st, 'pain', '7', 'ears', 'pierce');
        scene.img(`${qspFunc(s, 'piercing_management', 'ears_image')}`);
        scene.text('The artist takes a look at your unpierced ears, and with a quick sharp pain, pierces them.');
      } else {
        if (((st as any).randchan ?? 0) === 1  &&  ((st as any).pcs_piercings ?? 0)?.['tongue'] === 0) {
          qspCall(st, 'piercing_management', 'add', 'tongue', (Math.floor(Math.random() * (qspFunc(s, 'piercing_management', 'get_total', 'tongue') - 1 + 1)) + (1)));
          qspCall(st, 'pain', '7', 'tongue', 'pierce');
          scene.img(`${qspFunc(s, 'piercing_management', 'tongue_image')}`);
          scene.text('He asks you to stick out your tongue. You comply and then start to regret it as he pierces your tongue.');
        } else {
          if (((st as any).randchan ?? 0) === 2  &&  ((st as any).pcs_piercings ?? 0)?.['lip'] === 0) {
            qspCall(st, 'piercing_management', 'add', 'lip', (Math.floor(Math.random() * (qspFunc(s, 'piercing_management', 'get_total', 'lip') - 1 + 1)) + (1)));
            qspCall(st, 'pain', '7', 'lips', 'pierce');
            scene.img(`${qspFunc(s, 'piercing_management', 'lip_image')}`);
            scene.text('The artist gently holds your lip as he drives the needle through to pierce it.');
          } else {
            if (((st as any).randchan ?? 0) === 3  &&  ((st as any).pcs_piercings ?? 0)?.['nose'] === 0) {
              qspCall(st, 'piercing_management', 'add', 'nose', (Math.floor(Math.random() * (qspFunc(s, 'piercing_management', 'get_total', 'nose') - 1 + 1)) + (1)));
              qspCall(st, 'pain', '7', 'nose', 'pierce');
              scene.img(`${qspFunc(s, 'piercing_management', 'nose_image')}`);
              scene.text('You feel a sharp pain in your nose as he pierces your nose.');
            } else {
              if (((st as any).randchan ?? 0) === 4  &&  ((st as any).pcs_piercings ?? 0)?.['brow'] === 0) {
                qspCall(st, 'piercing_management', 'add', 'brow', (Math.floor(Math.random() * (qspFunc(s, 'piercing_management', 'get_total', 'brow') - 1 + 1)) + (1)));
                qspCall(st, 'pain', '7', 'eyebrows', 'pierce');
                scene.img(`${qspFunc(s, 'piercing_management', 'brow_image')}`);
                scene.text('The artist moves to above your eyes and quickly pierces your eyebrow.');
              } else {
                if (((st as any).randchan ?? 0) === 5  &&  ((st as any).pcs_piercings ?? 0)?.['navel'] === 0) {
                  qspCall(st, 'piercing_management', 'add', 'navel', (Math.floor(Math.random() * (qspFunc(s, 'piercing_management', 'get_total', 'navel') - 1 + 1)) + (1)));
                  qspCall(st, 'pain', '7', 'tummy', 'pierce');
                  (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (2);
                  scene.img(`${qspFunc(s, 'piercing_management', 'navel_image')}`);
                  scene.text('He positions himself to pierce your belly button. You feel a sharp pain through your navel as he pierces it.');
                } else {
                  if (((st as any).randchan ?? 0) === 6  &&  ((st as any).pcs_piercings ?? 0)?.['nipples'] === 0) {
                    qspCall(st, 'piercing_management', 'add', 'nipples', (Math.floor(Math.random() * (qspFunc(s, 'piercing_management', 'get_total', 'nipples') - 1 + 1)) + (1)));
                    qspCall(st, 'pain', '7', 'nipples', 'pierce');
                    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
                    scene.img(`${qspFunc(s, 'piercing_management', 'nipples_image')}`);
                    scene.text('He motions for you to lift up your shirt. After you do the man grabs your breasts rather softly and carefully pierces each nipple.');
                  } else {
                    if (((st as any).randchan ?? 0) === 7  &&  ((st as any).pcs_piercings ?? 0)?.['pussy'] === 0) {
                      qspCall(st, 'piercing_management', 'add', 'pussy', (Math.floor(Math.random() * (qspFunc(s, 'piercing_management', 'get_total', 'pussy') - 1 + 1)) + (1)));
                      qspCall(st, 'pain', '7', 'pubic', 'pierce');
                      (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (7);
                      scene.img(`${qspFunc(s, 'piercing_management', 'pussy_image')}`);
                      scene.text('"Ma \'am can you take off your bottoms?", the man says. You realize that he plans to pierce your labia and you reluctantly present yourself.');
                      scene.text('You cover your mouth as you let out a quick "Eep!", as you feel a quick pain through your labia, but in a second, it\'s over.');
                    } else {
                      if (((st as any).pcs_piercings ?? 0)?.['wearing'] >= 8) {
                        scene.text('');
                      } else {
                        if (((st as any).pcs_piercings ?? 0)?.['total'] < ((st as any).pierPrefTmpMin ?? 0)) {
                          (st as any).emergencyAbort = ((st as any).emergencyAbort ?? 0) + (1);
                          if (((st as any).emergencyAbort ?? 0) > 10000) {
                            scene.text('<b><font color="teal">DEVELOPER WARNING: Emergency backout. Either you got very lucky or some dev made a mistake, if it happens again, file a bug report. </font></b>');
                          } else {
                            break;
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
      (st as any).emergencyAbort = undefined;
      qspCall(st, 'stat', '');
      scene.text('"All done!", the artist says as he starts to clean up his various tools. He says to not irritate the places that he pierced and baby them for a week or two.');
      scene.text('Before you leave he puts on the various new piercings throughout your body.');
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Go back towards your ' + String(((st as any).npcrelat ?? '') ?? ''), handler: (st: GameState) => {
    scene.text(`As you go back towards him, ${((st as any).Xe ?? '')} looks you up and down.`);
    if (((st as any).pcs_piercings ?? 0)?.['wearing'] < ((st as any).pierPrefTmpMin ?? 0)  &&  ((st as any).pcs_piercings ?? 0)?.['total'] >= ((st as any).pierPrefTmpMin ?? 0)) {
      scene.text(`"Now lets just add the rest of the piercings…", ${((st as any).npcdesc ?? '')} says.`);
      if (((st as any).pcs_piercings ?? 0)?.['tongue'] < 0  &&  ((st as any).pcs_piercings ?? 0)?.['wearing'] < ((st as any).pierPrefTmpMin ?? 0)) {
        scene.text(`${((st as any).Xec ?? '')} asks you to stick out your tongue, then inserts a barbell into your tongue.`);
        qspCall(st, 'piercing_management', 'add', 'tongue', 1);
      }
      if (((st as any).pcs_piercings ?? 0)?.['lip'] < 0  &&  ((st as any).pcs_piercings ?? 0)?.['wearing'] < ((st as any).pierPrefTmpMin ?? 0)) {
        scene.text(`${((st as any).Xec ?? '')} gently holds your lip, then inserts a ring.`);
        qspCall(st, 'piercing_management', 'add', 'lip', 1);
      }
      if (((st as any).pcs_piercings ?? 0)?.['ears'] < 0  &&  ((st as any).pcs_piercings ?? 0)?.['wearing'] < ((st as any).pierPrefTmpMin ?? 0)) {
        scene.text(`${((st as any).Xec ?? '')} sees you do not have earrings and proceeds to put rings onto your ears. `);
        qspCall(st, 'piercing_management', 'add', 'ears', 1);
      }
      if (((st as any).pcs_piercings ?? 0)?.['nose'] < 0  &&  ((st as any).pcs_piercings ?? 0)?.['wearing'] < ((st as any).pierPrefTmpMin ?? 0)) {
        scene.text(`${((st as any).Xec ?? '')} takes out a ring and then carefully inserts a ring through your nose.`);
        qspCall(st, 'piercing_management', 'add', 'nose', 1);
      }
      if (((st as any).pcs_piercings ?? 0)?.['brow'] < 0  &&  ((st as any).pcs_piercings ?? 0)?.['wearing'] < ((st as any).pierPrefTmpMin ?? 0)) {
        scene.text(`${((st as any).npcdesc ?? '')} moves to your eyebrow and proceeds to insert a barbell.`);
        qspCall(st, 'piercing_management', 'add', 'brow', 1);
      }
      if (((st as any).pcs_piercings ?? 0)?.['navel'] < 0  &&  ((st as any).pcs_piercings ?? 0)?.['wearing'] < ((st as any).pierPrefTmpMin ?? 0)) {
        scene.text(`${((st as any).Xec ?? '')} takes out a barbell and inserts it into your navel.`);
        (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (2);
        qspCall(st, 'piercing_management', 'add', 'navel', 1);
      }
      if (((st as any).pcs_piercings ?? 0)?.['nipples'] < 0  &&  ((st as any).pcs_piercings ?? 0)?.['wearing'] < ((st as any).pierPrefTmpMin ?? 0)) {
        scene.text(`${((st as any).npcdesc ?? '')} looks around, then pulls out a couple of nipple rings. You can tell it slightly turns ${((st as any).Xem ?? '')} on as ${((st as any).Xe ?? '')} works ${((st as any).Xyr ?? '')} way up your shirt to put on the nipple rings.`);
        (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
        qspCall(st, 'piercing_management', 'add', 'nipples', 1);
      }
      if (((st as any).pcs_piercings ?? 0)?.['pussy'] < 0  &&  ((st as any).pcs_piercings ?? 0)?.['wearing'] < ((st as any).pierPrefTmpMin ?? 0)) {
        scene.text(`${((st as any).npcdesc ?? '')} gets close to your ear, "Don't make a scene okay?", then ${((st as any).Xe ?? '')} nonchalantly slides ${((st as any).Xyr ?? '')} hand down to your labia, and inserts a ring.`);
        scene.text('You cover your mouth as you let out a quick "Eep!", but in a second, it\'s over.');
        (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (7);
        qspCall(st, 'piercing_management', 'add', 'pussy', 1);
      }
      qspCall(st, 'stat', '');
      scene.text(`"There we go!", ${((st as any).Xe ?? '')} says with a smile.`);
      if (((st as any).pierPrefTmpMax ?? 0) === 5) {
        scene.text(`You can tell ${((st as any).Xe ?? '')} likes a girl with a bit more piercings, and you can't help but agree in some aspect, it does make you look a bit sexier.`);
      } else {
        if (((st as any).pierPrefTmpMin ?? 0) === 6) {
          scene.text('With this many piercings, you can feel many people will be exploring your body with their eyes, curious on where else you may have piercings.');
        }
      }
      if (((st as any).npc_gentle ?? 0)?.[String((st as any).boy ?? 0)] === 1) {
        scene.text(`You can see ${((st as any).Xe ?? '')} loves how many piercings you have, as ${((st as any).Xe ?? '')} has a slight blush on ${((st as any).Xyr ?? '')} face.`);
      } else {
        if (((st as any).npc_rough ?? 0)?.[String((st as any).boy ?? 0)] === 0) {
          scene.text(`${((st as any).npcdesc ?? '')} gives you one last examination with ${((st as any).Xyr ?? '')} eyes and gives you a quick kiss on your cheek.`);
        } else {
          scene.text(`${((st as any).npcdesc ?? '')} comes up to you, and with a quick squeeze on the ass, kisses you on the lips and says, "Now this is a bombshell."`);
        }
      }
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 40;
    scene.text('After getting the piercings, you both part ways and head home.');
    scene.text(`You can't say why, but you feel it would be harder to say no next time if ${((st as any).Xe ?? '')} asked you to change something.`);
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    scene.actions([
{ label: 'Continue', goto: ['homes_properties', 'go_home'] },
]);
    return;
  } },
      ]);
    } else {
      if (((st as any).pcs_piercings ?? 0)?.['wearing'] >= ((st as any).pierPrefTmpMin ?? 0)) {
        scene.text(`"There we go!", ${((st as any).Xe ?? '')} says with a smile.`);
        if (((st as any).pierPrefTmpMax ?? 0) === 5) {
          scene.text(`You can tell ${((st as any).Xe ?? '')} likes a girl with a bit more piercings, and you can't help but agree in some aspect, it does make you look a bit sexier.`);
        } else {
          if (((st as any).pierPrefTmpMin ?? 0) === 6) {
            scene.text('With this many piercings, you can feel many people will be exploring your body with their eyes, curious on where else you may have piercings.');
          }
        }
        if (((st as any).npc_gentle ?? 0)?.[String((st as any).boy ?? 0)] === 1) {
          scene.text(`You can see ${((st as any).Xe ?? '')} loves how many piercings you have, as ${((st as any).Xe ?? '')} has a slight blush on ${((st as any).Xyr ?? '')} face.`);
        } else {
          if (((st as any).npc_rough ?? 0)?.[String((st as any).boy ?? 0)] === 0) {
            scene.text(`${((st as any).npcdesc ?? '')} gives you one last examination with ${((st as any).Xyr ?? '')} eyes and gives you a quick kiss on your cheek.`);
          } else {
            scene.text(`${((st as any).npcdesc ?? '')} comes up to you, and with a quick squeeze on the ass, kisses you on the lips and says, "Now this is a bombshell."`);
          }
        }
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 40;
    scene.text('After getting the piercings, you both part ways and head home.');
    scene.text(`You can't say why, but you feel it would be harder to say no next time if ${((st as any).Xe ?? '')} asked you to change something.`);
    ((st as any).npc_compliance = (st as any).npc_compliance ?? {})[String((st as any).npcID ?? 0)] = ((st as any).npc_compliance[String((st as any).npcID ?? 0)] ?? 0) - (1);
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    scene.actions([
{ label: 'Continue', goto: ['homes_properties', 'go_home'] },
]);
    return;
  } },
        ]);
      } else {
        scene.text(`"There we go!", ${((st as any).Xe ?? '')} says with a smile.`);
        if (((st as any).pierPrefTmpMin ?? 0) > 1) {
          scene.text(`You can tell ${((st as any).Xe ?? '')} likes a girl with a more piercings and you can't help but agree in some aspect, it does make you look a bit sexier.`);
        }
        if (((st as any).npc_gentle ?? 0)?.[String((st as any).boy ?? 0)] === 1) {
          scene.text(`You can see ${((st as any).Xe ?? '')} is pleased with your piercing, as ${((st as any).Xe ?? '')} has a slight blush on ${((st as any).Xyr ?? '')} face.`);
        } else {
          if (((st as any).npc_rough ?? 0)?.[String((st as any).boy ?? 0)] === 0) {
            scene.text(`${((st as any).npcdesc ?? '')} gives you one last examination with ${((st as any).Xyr ?? '')} eyes and gives you a quick kiss on your cheek.`);
          } else {
            scene.text(`${((st as any).npcdesc ?? '')} comes up to you, and with a quick squeeze on the ass, kisses you on the lips and says, "You look much better."`);
          }
        }
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 40;
    scene.text('After getting the piercing, you both part ways and head home.');
    scene.text(`You can't say why, but you feel it would be harder to say no next time if ${((st as any).Xe ?? '')} asked you to change something.`);
    ((st as any).npc_compliance = (st as any).npc_compliance ?? {})[String((st as any).npcID ?? 0)] = ((st as any).npc_compliance[String((st as any).npcID ?? 0)] ?? 0) - (1);
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    scene.actions([
{ label: 'Continue', goto: ['homes_properties', 'go_home'] },
]);
    return;
  } },
        ]);
      }
    }
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
      }
    }
  }
  scene.build();
}

function enterTatt(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Enter Tattoo Parlor', handler: (st: GameState) => {
    scene.text(`As you arrive at the tattoo parlor, ${((st as any).npcdesc ?? '')} looks you up and down to decide what needs to be done about your tattoos.`);
    if (((st as any).pcs_tattoos ?? 0)?.['total'] < ((st as any).tattPrefTmpMin ?? 0)) {
      scene.text('You need some more tattoos, it would make you look so much better!');
      scene.text(`${((st as any).Xec ?? '')} heads over to the counter and starts talks to the tattoo artist.`);
      scene.text(`You see ${((st as any).Xem ?? '')} hand the artist some money and the artist starts to walk up towards you.`);
      scene.text(`"Your ${((st as any).npcrelat ?? '')} says you want to get some tattoos?", the artist asks.`);
      scene.actions([
        { label: 'Quietly nod', handler: (st: GameState) => {
    scene.text('You know you can\'t pull out now, so you meekly nod.');
    scene.text('The man shrugs and says "Head over to the chair over there okay?"');
    scene.actions([
      { label: 'Head over to the chair', handler: (st: GameState) => {
    scene.text('As you sit down you see the man come over with the various needles he needs to do his job.');
    scene.text('He sees you are a little bit concerned about the needles and laughs, "Don\'t worry ma \'am, it will be all over before you know it!"');
    scene.text('He takes out a clean needle and proceeds with his job.');
    while (true) {
      (st as any).randchan = (Math.floor(Math.random() * 18) + 0);
      if (((st as any).randchan ?? 0) === 0  &&  ((st as any).pcs_tattoos ?? 0)?.['arm'] <= 0) {
        qspCall(st, 'tattoo_management', 'add', 'arm', (Math.floor(Math.random() * (qspFunc(s, 'tattoo_management', 'get_total', 'arm') - 1 + 1)) + (1)));
        scene.img(`${qspFunc(s, 'tattoo_management', 'arm_image')}`);
        scene.text('He gives you a tattoo on your arm.');
      } else {
        if (((st as any).randchan ?? 0) === 1  &&  ((st as any).pcs_tattoos ?? 0)?.['ass'] <= 0) {
          qspCall(st, 'tattoo_management', 'add', 'ass', (Math.floor(Math.random() * (qspFunc(s, 'tattoo_management', 'get_total', 'ass') - 1 + 1)) + (1)));
          scene.img(`${qspFunc(s, 'tattoo_management', 'ass_image')}`);
          scene.text('He gives you a tattoo on your ass.');
        } else {
          if (((st as any).randchan ?? 0) === 2  &&  ((st as any).pcs_tattoos ?? 0)?.['back'] === 0) {
            qspCall(st, 'tattoo_management', 'add', 'back', (Math.floor(Math.random() * (qspFunc(s, 'tattoo_management', 'get_total', 'back') - 1 + 1)) + (1)));
            scene.img(`${qspFunc(s, 'tattoo_management', 'back_image')}`);
            scene.text('He gives you a tattoo on your back.');
          } else {
            if (((st as any).randchan ?? 0) === 3  &&  ((st as any).pcs_tattoos ?? 0)?.['belly'] === 0) {
              qspCall(st, 'tattoo_management', 'add', 'belly', (Math.floor(Math.random() * (qspFunc(s, 'tattoo_management', 'get_total', 'belly') - 1 + 1)) + (1)));
              scene.img(`${qspFunc(s, 'tattoo_management', 'belly_image')}`);
              scene.text('He gives you a tattoo on your belly.');
            } else {
              if (((st as any).randchan ?? 0) === 4  &&  ((st as any).pcs_tattoos ?? 0)?.['breast'] === 0) {
                qspCall(st, 'tattoo_management', 'add', 'breast', (Math.floor(Math.random() * (qspFunc(s, 'tattoo_management', 'get_total', 'breast') - 1 + 1)) + (1)));
                scene.img(`${qspFunc(s, 'tattoo_management', 'breast_image')}`);
                scene.text('He gives you a tattoo on your breasts.');
              } else {
                if (((st as any).randchan ?? 0) === 5  &&  ((st as any).pcs_tattoos ?? 0)?.['chest'] === 0) {
                  qspCall(st, 'tattoo_management', 'add', 'chest', (Math.floor(Math.random() * (qspFunc(s, 'tattoo_management', 'get_total', 'chest') - 1 + 1)) + (1)));
                  scene.img(`${qspFunc(s, 'tattoo_management', 'chest_image')}`);
                  scene.text('He gives you a tattoo on your chest.');
                } else {
                  if (((st as any).randchan ?? 0) === 6  &&  ((st as any).pcs_tattoos ?? 0)?.['face'] === 0) {
                    qspCall(st, 'tattoo_management', 'add', 'face', (Math.floor(Math.random() * (qspFunc(s, 'tattoo_management', 'get_total', 'face') - 1 + 1)) + (1)));
                    scene.img(`${qspFunc(s, 'tattoo_management', 'face_image')}`);
                    scene.text('He gives you a tattoo on your face.');
                  } else {
                    if (((st as any).randchan ?? 0) === 7  &&  ((st as any).pcs_tattoos ?? 0)?.['ankle'] === 0) {
                      qspCall(st, 'tattoo_management', 'add', 'ankle', (Math.floor(Math.random() * (qspFunc(s, 'tattoo_management', 'get_total', 'ankle') - 1 + 1)) + (1)));
                      scene.img(`${qspFunc(s, 'tattoo_management', 'ankle_image')}`);
                      scene.text('He gives you a tattoo on your ankles.');
                    } else {
                      if (((st as any).randchan ?? 0) === 8  &&  ((st as any).pcs_tattoos ?? 0)?.['hand'] === 0) {
                        qspCall(st, 'tattoo_management', 'add', 'hand', (Math.floor(Math.random() * (qspFunc(s, 'tattoo_management', 'get_total', 'hand') - 1 + 1)) + (1)));
                        scene.img(`${qspFunc(s, 'tattoo_management', 'hand_image')}`);
                        scene.text('He gives you a tattoo on your hand.');
                      } else {
                        if (((st as any).randchan ?? 0) === 9  &&  ((st as any).pcs_tattoos ?? 0)?.['leg'] === 0) {
                          qspCall(st, 'tattoo_management', 'add', 'leg', (Math.floor(Math.random() * (qspFunc(s, 'tattoo_management', 'get_total', 'leg') - 1 + 1)) + (1)));
                          scene.img(`${qspFunc(s, 'tattoo_management', 'leg_image')}`);
                          scene.text('He gives you a tattoo on your legs.');
                        } else {
                          if (((st as any).randchan ?? 0) === 10  &&  ((st as any).pcs_tattoos ?? 0)?.['lip'] === 0) {
                            qspCall(st, 'tattoo_management', 'add', 'lip', (Math.floor(Math.random() * (qspFunc(s, 'tattoo_management', 'get_total', 'lip') - 1 + 1)) + (1)));
                            scene.img(`${qspFunc(s, 'tattoo_management', 'lip_image')}`);
                            scene.text('He gives you a tattoo on your bottom lip.');
                          } else {
                            if (((st as any).randchan ?? 0) === 11  &&  ((st as any).pcs_tattoos ?? 0)?.['neck'] === 0) {
                              qspCall(st, 'tattoo_management', 'add', 'neck', (Math.floor(Math.random() * (qspFunc(s, 'tattoo_management', 'get_total', 'neck') - 1 + 1)) + (1)));
                              scene.img(`${qspFunc(s, 'tattoo_management', 'neck_image')}`);
                              scene.text('He gives you a tattoo on your neck.');
                            } else {
                              if (((st as any).randchan ?? 0) === 12  &&  ((st as any).pcs_tattoos ?? 0)?.['pussy'] === 0) {
                                qspCall(st, 'tattoo_management', 'add', 'pussy', (Math.floor(Math.random() * (qspFunc(s, 'tattoo_management', 'get_total', 'pussy') - 1 + 1)) + (1)));
                                scene.img(`${qspFunc(s, 'tattoo_management', 'pussy_image')}`);
                                scene.text('He gives you a tattoo above your cunt.');
                              } else {
                                if (((st as any).randchan ?? 0) === 13  &&  ((st as any).pcs_tattoos ?? 0)?.['shoulder'] === 0) {
                                  qspCall(st, 'tattoo_management', 'add', 'shoulder', (Math.floor(Math.random() * (qspFunc(s, 'tattoo_management', 'get_total', 'shoulder') - 1 + 1)) + (1)));
                                  scene.img(`${qspFunc(s, 'tattoo_management', 'shoulder_image')}`);
                                  scene.text('He gives you a tattoo on your shoulder.');
                                } else {
                                  if (((st as any).randchan ?? 0) === 14  &&  ((st as any).pcs_tattoos ?? 0)?.['side'] === 0) {
                                    qspCall(st, 'tattoo_management', 'add', 'side', (Math.floor(Math.random() * (qspFunc(s, 'tattoo_management', 'get_total', 'side') - 1 + 1)) + (1)));
                                    scene.img(`${qspFunc(s, 'tattoo_management', 'side_image')}`);
                                    scene.text('He gives you a tattoo on your sides.');
                                  } else {
                                    if (((st as any).randchan ?? 0) === 15  &&  ((st as any).pcs_tattoos ?? 0)?.['tramp'] === 0) {
                                      qspCall(st, 'tattoo_management', 'add', 'tramp', (Math.floor(Math.random() * (qspFunc(s, 'tattoo_management', 'get_total', 'tramp') - 1 + 1)) + (1)));
                                      scene.img(`${qspFunc(s, 'tattoo_management', 'tramp_image')}`);
                                      scene.text('He gives you a tramp stamp.');
                                    } else {
                                      if (((st as any).randchan ?? 0) === 16  &&  ((st as any).pcs_tattoos ?? 0)?.['under'] === 0) {
                                        qspCall(st, 'tattoo_management', 'add', 'under', (Math.floor(Math.random() * (qspFunc(s, 'tattoo_management', 'get_total', 'under') - 1 + 1)) + (1)));
                                        scene.img(`${qspFunc(s, 'tattoo_management', 'under_image')}`);
                                        scene.text('He gives you a tattoo under your breasts.');
                                      } else {
                                        if (((st as any).randchan ?? 0) === 17  &&  ((st as any).pcs_tattoos ?? 0)?.['wrist'] === 0) {
                                          qspCall(st, 'tattoo_management', 'add', 'wrist', (Math.floor(Math.random() * (qspFunc(s, 'tattoo_management', 'get_total', 'wrist') - 1 + 1)) + (1)));
                                          scene.img(`${qspFunc(s, 'tattoo_management', 'wrist_image')}`);
                                          scene.text('He gives you a tattoo on your wrists.');
                                        } else {
                                          if (((st as any).pcs_tattoos ?? 0)?.['total'] >= 18) {
                                            scene.text('');
                                          } else {
                                            (st as any).emergencyAbort = ((st as any).emergencyAbort ?? 0) + (1);
                                            if (((st as any).emergencyAbort ?? 0) > 10000) {
                                              scene.text('<b><font color="teal">DEVELOPER WARNING: Emergency backout. Either you got very lucky or some dev made a mistake, if it happens again, file a bug report. </font></b>');
                                            } else {
                                              break;
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
      (st as any).emergencyAbort = undefined;
      qspCall(st, 'stat', '');
      scene.text('"All done!", the artist smiles as he starts to clean up his various tools."');
      scene.text('"I must say, your body looks amazing with the art on you!"');
      scene.text('You are reluctant to admit it, but having these tattoos feels like they do make you look sexier for some people, though a bit more slutty too.');
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Go back towards your ' + String(((st as any).npcrelat ?? '') ?? ''), handler: (st: GameState) => {
    scene.text(`As you go back towards him, ${((st as any).Xe ?? '')} looks you up and down.`);
    scene.text(`"There we go!", ${((st as any).Xe ?? '')} says with a smile.`);
    if (((st as any).tattPrefTmpMax ?? 0) === 5) {
      scene.text(`You can tell ${((st as any).Xe ?? '')} likes a girl with at least a couple of tattoos, and you can't help but agree in some aspect, it does make you look a bit sexier.`);
    } else {
      if (((st as any).tattPrefTmpMin ?? 0) === 6) {
        scene.text('With this many tattoos, you look like a punk or scene girl, and you can feel that many people would want to explore you to see if you have any "hidden" gems underneath your clothes.');
      }
    }
    if (((st as any).npc_gentle ?? 0)?.[String((st as any).boy ?? 0)] === 1) {
      scene.text(`You can see ${((st as any).Xe ?? '')} loves how many tattoos you have, as ${((st as any).Xe ?? '')} has a slight blush on ${((st as any).Xyr ?? '')} face.`);
    } else {
      if (((st as any).npc_rough ?? 0)?.[String((st as any).boy ?? 0)] === 0) {
        scene.text(`${((st as any).npcdesc ?? '')} gives you one last examination with ${((st as any).Xyr ?? '')} eyes and gives you a quick kiss on your cheek.`);
      } else {
        scene.text(`${((st as any).npcdesc ?? '')} comes up to you, and with a quick squeeze on the ass, kisses you on the lips and says, "Now this is a bombshell."`);
      }
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 40;
    scene.text('After getting the tattoos, you both part ways and head home.');
    scene.text(`You can't say why, but you feel it would be harder to say no next time if ${((st as any).Xe ?? '')} asked you to change something.`);
    ((st as any).npc_compliance = (st as any).npc_compliance ?? {})[String((st as any).npcID ?? 0)] = ((st as any).npc_compliance[String((st as any).npcID ?? 0)] ?? 0) - (1);
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    scene.actions([
{ label: 'Continue', goto: ['homes_properties', 'go_home'] },
]);
    return;
  } },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } },
      ]);
    } else {
      if (((st as any).pcs_tattoos ?? 0)?.['total'] > ((st as any).tattPrefTmpMax ?? 0)) {
        scene.text('You need to get rid of some tattoos, it would make you look so much better!');
        scene.text(`${((st as any).Xec ?? '')} heads over to the counter and starts talks to the tattoo artist.`);
        scene.text(`You see ${((st as any).Xem ?? '')} hand the artist some money and the artist starts to walk up towards you.`);
        scene.text(`"Your ${((st as any).npcrelat ?? '')} says you want to get rid of some tattoos?", the artist asks.`);
        scene.actions([
          { label: 'Quietly nod', handler: (st: GameState) => {
    scene.text('You know you can\'t pull out now, so you meekly nod.');
    scene.text('The man shrugs and says "Head over to the chair over there okay?"');
    scene.actions([
      { label: 'Head over to the chair', handler: (st: GameState) => {
    scene.text('As you sit down you see the man come over with the various needles and lasers he needs to do his job.');
    scene.text('He sees you are a little bit concerned about the laser and laughs, "Don\'t worry ma \'am, it will be all over before you know it!"');
    scene.text('He takes he turns on the mini laser and proceeds with his job.');
    (st as any).randchan = (Math.floor(Math.random() * 17) + 0);
    if (((st as any).randchan ?? 0) === 0  &&  ((st as any).pcs_tattoos ?? 0)?.['arm'] > 0) {
      if (((st as any).pcs_tattoos ?? 0)?.['total'] > ((st as any).tattPrefTmpMax ?? 0)) {
        qspCall(st, 'tattoo_management', 'remove', 'arm');
        scene.text('He removes the tattoo on your arm.');
      }
    } else {
      if (((st as any).randchan ?? 0) === 1  &&  ((st as any).pcs_tattoos ?? 0)?.['ass'] > 0) {
        if (((st as any).pcs_tattoos ?? 0)?.['total'] > ((st as any).tattPrefTmpMax ?? 0)) {
          qspCall(st, 'tattoo_management', 'remove', 'ass');
          scene.text('He removes the tattoo on your ass.');
        }
      } else {
        if (((st as any).randchan ?? 0) === 2  &&  ((st as any).pcs_tattoos ?? 0)?.['back'] > 0) {
          if (((st as any).pcs_tattoos ?? 0)?.['total'] > ((st as any).tattPrefTmpMax ?? 0)) {
            qspCall(st, 'tattoo_management', 'remove', 'back');
            scene.text('He removes the tattoo on your back.');
          }
        } else {
          if (((st as any).randchan ?? 0) === 3  &&  ((st as any).pcs_tattoos ?? 0)?.['belly'] > 0) {
            if (((st as any).pcs_tattoos ?? 0)?.['total'] > ((st as any).tattPrefTmpMax ?? 0)) {
              qspCall(st, 'tattoo_management', 'remove', 'belly');
              scene.text('He removes the tattoo on your belly.');
            }
          } else {
            if (((st as any).randchan ?? 0) === 4  &&  ((st as any).pcs_tattoos ?? 0)?.['breast'] > 0) {
              if (((st as any).pcs_tattoos ?? 0)?.['total'] > ((st as any).tattPrefTmpMax ?? 0)) {
                qspCall(st, 'tattoo_management', 'remove', 'breast');
                scene.text('He removes the tattoo on your breasts.');
              }
            } else {
              if (((st as any).randchan ?? 0) === 5  &&  ((st as any).pcs_tattoos ?? 0)?.['chest'] > 0) {
                if (((st as any).pcs_tattoos ?? 0)?.['total'] > ((st as any).tattPrefTmpMax ?? 0)) {
                  qspCall(st, 'tattoo_management', 'remove', 'chest');
                  scene.text('He removes the tattoo on your chest.');
                }
              } else {
                if (((st as any).randchan ?? 0) === 6  &&  ((st as any).pcs_tattoos ?? 0)?.['face'] > 0) {
                  if (((st as any).pcs_tattoos ?? 0)?.['total'] > ((st as any).tattPrefTmpMax ?? 0)) {
                    qspCall(st, 'tattoo_management', 'remove', 'face');
                    scene.text('He removes the tattoo on your face.');
                  }
                } else {
                  if (((st as any).randchan ?? 0) === 7  &&  ((st as any).pcs_tattoos ?? 0)?.['ankle'] > 0) {
                    if (((st as any).pcs_tattoos ?? 0)?.['total'] > ((st as any).tattPrefTmpMax ?? 0)) {
                      qspCall(st, 'tattoo_management', 'remove', 'ankle');
                      scene.text('He removes the tattoo on your ankles.');
                    }
                  } else {
                    if (((st as any).randchan ?? 0) === 8  &&  ((st as any).pcs_tattoos ?? 0)?.['leg'] > 0) {
                      if (((st as any).pcs_tattoos ?? 0)?.['total'] > ((st as any).tattPrefTmpMax ?? 0)) {
                        qspCall(st, 'tattoo_management', 'remove', 'leg');
                        scene.text('He removes the tattoo on your legs.');
                      }
                    } else {
                      if (((st as any).randchan ?? 0) === 9  &&  ((st as any).pcs_tattoos ?? 0)?.['lip'] > 0) {
                        if (((st as any).pcs_tattoos ?? 0)?.['total'] > ((st as any).tattPrefTmpMax ?? 0)) {
                          qspCall(st, 'tattoo_management', 'remove', 'lip');
                          scene.text('He removes the tattoo on your bottom lip.');
                        }
                      } else {
                        if (((st as any).randchan ?? 0) === 10  &&  ((st as any).pcs_tattoos ?? 0)?.['neck'] > 0) {
                          if (((st as any).pcs_tattoos ?? 0)?.['total'] > ((st as any).tattPrefTmpMax ?? 0)) {
                            qspCall(st, 'tattoo_management', 'remove', 'neck');
                            scene.text('He removes the tattoo on your neck.');
                          }
                        } else {
                          if (((st as any).randchan ?? 0) === 11  &&  ((st as any).pcs_tattoos ?? 0)?.['pussy'] > 0) {
                            if (((st as any).pcs_tattoos ?? 0)?.['total'] > ((st as any).tattPrefTmpMax ?? 0)) {
                              qspCall(st, 'tattoo_management', 'remove', 'pussy');
                              scene.text('He removes the tattoo above your cunt.');
                            }
                          } else {
                            if (((st as any).randchan ?? 0) === 12  &&  ((st as any).pcs_tattoos ?? 0)?.['shoulder'] > 0) {
                              if (((st as any).pcs_tattoos ?? 0)?.['total'] > ((st as any).tattPrefTmpMax ?? 0)) {
                                qspCall(st, 'tattoo_management', 'remove', 'shoulder');
                                scene.text('He removes the tattoo on your shoulder.');
                              }
                            } else {
                              if (((st as any).randchan ?? 0) === 13  &&  ((st as any).pcs_tattoos ?? 0)?.['side'] > 0) {
                                if (((st as any).pcs_tattoos ?? 0)?.['total'] > ((st as any).tattPrefTmpMax ?? 0)) {
                                  qspCall(st, 'tattoo_management', 'remove', 'side');
                                  scene.text('He removes the tattoo on your sides.');
                                }
                              } else {
                                if (((st as any).randchan ?? 0) === 14  &&  ((st as any).pcs_tattoos ?? 0)?.['tramp'] > 0) {
                                  if (((st as any).pcs_tattoos ?? 0)?.['total'] > ((st as any).tattPrefTmpMax ?? 0)) {
                                    qspCall(st, 'tattoo_management', 'remove', 'tramp');
                                    scene.text('He removes your tramp stamp.');
                                  }
                                } else {
                                  if (((st as any).randchan ?? 0) === 15  &&  ((st as any).pcs_tattoos ?? 0)?.['under'] > 0) {
                                    if (((st as any).pcs_tattoos ?? 0)?.['total'] > ((st as any).tattPrefTmpMax ?? 0)) {
                                      qspCall(st, 'tattoo_management', 'remove', 'under');
                                      scene.text('He removes the tattoo under your breasts.');
                                    }
                                  } else {
                                    if (((st as any).randchan ?? 0) === 16  &&  ((st as any).pcs_tattoos ?? 0)?.['wrist'] > 0) {
                                      if (((st as any).pcs_tattoos ?? 0)?.['total'] > ((st as any).tattPrefTmpMax ?? 0)) {
                                        qspCall(st, 'tattoo_management', 'remove', 'wrist');
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
    qspCall(st, 'stat', '');
    scene.text('"All done!", the artist says as he starts to clean up his various tools."');
    scene.text('"Me myself, I like a girl with a lot of tattoos, but to each their own." he tells you.');
    scene.text('You are reluctant to admit it, but taking away tattoos does make your skin look much cleaner, and makes people focus more on the figure, and not just the art on it.');
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Go back towards your ' + String(((st as any).npcrelat ?? '') ?? ''), handler: (st: GameState) => {
    scene.text(`As you go back towards ${((st as any).Xem ?? '')}, ${((st as any).Xe ?? '')} looks you up and down.`);
    scene.text(`"There we go!", ${((st as any).Xe ?? '')} says with a smile.`);
    if (((st as any).tattPrefTmpMax ?? 0) === 2) {
      scene.text(`You can tell ${((st as any).Xe ?? '')} hates girls with tattoos and likes them to have as few as possible. You can't help but agree in some aspect, it does make your body look a bit sexier.`);
    } else {
      if (((st as any).tattPrefTmpMax ?? 0) === 5) {
        scene.text(`You can tell that though ${((st as any).npcdesc ?? '')} likes a girl to have some tattoos, ${((st as any).Xe ?? '')} doesn't want them to be the focus on a girl. You can't help but agree that there is a thing as too many tattoos.`);
      }
    }
    if (((st as any).npc_gentle ?? 0)?.[String((st as any).boy ?? 0)] === 1) {
      scene.text(`You can see ${((st as any).Xe ?? '')} loves how many tattoos you have, as ${((st as any).Xe ?? '')} has a slight blush on ${((st as any).Xyr ?? '')} face.`);
    } else {
      if (((st as any).npc_rough ?? 0)?.[String((st as any).boy ?? 0)] === 0) {
        scene.text(`${((st as any).npcdesc ?? '')} gives you one last examination with ${((st as any).Xyr ?? '')} eyes and gives you a quick kiss on your cheek.`);
      } else {
        scene.text(`${((st as any).npcdesc ?? '')} comes up to you, and with a quick squeeze on the ass, kisses you on the lips and says, "Now this is a bombshell."`);
      }
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 40;
    scene.text('After getting rid of the tattoos, you both part ways and head home.');
    scene.text(`You can't say why, but you feel it would be harder to say no next time if ${((st as any).Xe ?? '')} asked you to change something.`);
    ((st as any).npc_compliance = (st as any).npc_compliance ?? {})[String((st as any).npcID ?? 0)] = ((st as any).npc_compliance[String((st as any).npcID ?? 0)] ?? 0) - (1);
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    scene.actions([
{ label: 'Continue', goto: ['homes_properties', 'go_home'] },
]);
    return;
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
    scene.text(`As you arrive at the clinic, ${((st as any).npcdesc ?? '')} walks up to the front desc and asks to speak with the plastic surgeon. After a couple of minutes the plastic surgeon comes out with a clipboard.`);
    scene.text(`${((st as any).npcdesc ?? '')} talks to the surgeon and after a brief exchange of words, ${((st as any).Xe ?? '')} hands the surgeon a respectable stack of bills. The surgeon discreetly puts the bills into his jacket and starts to walk toward you.`);
    scene.text(`Even though you don't know what ${((st as any).npcdesc ?? '')} said to the surgeon, you still jump when he starts to speak to you.`);
    if (((st as any).pcs_lip ?? 0) < ((st as any).lipsPrefTmpMin ?? 0)) {
      scene.text(`"So that ${((st as any).person ?? '')} over there says you want to get lip enhancements?", the doctor asks quizically, looking at the size of your lips.`);
    } else {
      scene.text(`"So that ${((st as any).person ?? '')} over there says you want to get a lip reduction?", the doctor asks quizically, looking at the size of your lips.`);
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
    if (((st as any).pcs_lip ?? 0) < ((st as any).lipsPrefTmpMin ?? 0)) {
      (st as any).minut = ((st as any).minut ?? 0) + 20;
      (st as any).pcs_lip = ((st as any).lipsPrefTmpMin ?? 0) + 1;
      qspCall(st, 'stat', '');
      scene.text('Your lips have grown! They are whorishly huge!');
      scene.text('You look at the doctor and he shrugs, "You look much nicer with huge lips in my opinion."');
    } else {
      (st as any).minut = ((st as any).minut ?? 0) + 20;
      (st as any).pcs_lip = ((st as any).lipsPrefTmpMax ?? 0) - 1;
      scene.text('Your lips have shrunk! They look much more modest now.');
      scene.text('You look at the doctor and he shrugs, "You look much nicer with more modest lips in my opinion."');
    }
    scene.text('You stand up and leave the room.');
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Go back towards your ' + String(((st as any).npcrelat ?? '') ?? ''), handler: (st: GameState) => {
    scene.text(`As you go back towards ${((st as any).Xem ?? '')}, ${((st as any).Xe ?? '')} looks you up and down.`);
    scene.text(`"There we go!", ${((st as any).Xe ?? '')} says with a smile.`);
    if (((st as any).lipsPrefTmp ?? 0) === 1) {
      scene.text(`You can tell ${((st as any).Xe ?? '')} loves girls with more modest yet full lips, and you have to admit, it's better than having big whorish, cocksucking lips.`);
    } else {
      if (((st as any).lipsPrefTmp ?? 0) === 2) {
        scene.text(`You can tell that ${((st as any).npcdesc ?? '')} likes a girl to have whorish, cocksucking lips, and as you give the mirror in the room a quick slutty face, you have to admit it does make you look sexier.`);
      }
    }
    if (((st as any).npc_gentle ?? 0)?.[String((st as any).boy ?? 0)] === 1) {
      scene.text(`You can see ${((st as any).Xe ?? '')} loves the size of your lips, for even with all of ${((st as any).Xyr ?? '')} shyness, ${((st as any).Xe ?? '')} still gives you a kiss on your new lips.`);
    } else {
      if (((st as any).npc_rough ?? 0)?.[String((st as any).boy ?? 0)] === 0) {
        scene.text(`${((st as any).npcdesc ?? '')} gives you one last examination of your new lips before giving you a kiss on the lips, probably to test the new wares.`);
      } else {
        scene.text(`${((st as any).npcdesc ?? '')} comes up to you, and with a quick squeeze on the ass, kisses you on your new lips and says, "Now those lips are the lips of a goddess."`);
      }
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('After improving your lips, you both part ways and head home.');
    scene.text(`You can't say why, but you feel it would be harder to say no next time if ${((st as any).Xe ?? '')} asked you to change something.`);
    ((st as any).npc_compliance = (st as any).npc_compliance ?? {})[String((st as any).npcID ?? 0)] = ((st as any).npc_compliance[String((st as any).npcID ?? 0)] ?? 0) - (1);
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    scene.actions([
{ label: 'Continue', goto: ['homes_properties', 'go_home'] },
]);
    return;
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
    scene.text(`As you arrive at the clinic, ${((st as any).npcdesc ?? '')} walks up to the front desc and asks to speak with the plastic surgeon. After a couple of minutes the plastic surgeon comes out with a clipboard.`);
    scene.text(`${((st as any).npcdesc ?? '')} talks to the surgeon and after a brief exchange of words, ${((st as any).Xe ?? '')} hands the surgeon a respectable stack of bills. The surgeon discreetly puts the bills into his jacket and starts to walk toward you.`);
    if (((st as any).tits ?? 0) < ((st as any).titMin ?? 0)) {
      scene.text(`Even though you don't know what ${((st as any).npcdesc ?? '')} said to the surgeon, you still jump when he starts to speak to you.`);
      scene.text(`"So that ${((st as any).person ?? '')} over there says you want to get breast implants?", the doctor asks quizically, looking you up and down.`);
      scene.text('"Y-yes.", you manage to squeek out, your face turning slightly red at the topic of the conversation.');
      scene.text(`"All right, lets get started right away, let me see what size ${((st as any).Xe ?? '')} got for you…", he says as he looks at his clipboard.`);
      (st as any).titAmount = (((st as any).titMin ?? 0) - ((st as any).tits ?? 0)) * 5 + 9;
      if (((st as any).titAmount ?? 0) <= 10) {
        scene.text('"It seems you will be getting our smallest breast implants."');
        scene.text('As you hear this you relax a bit. At least it\'s not a big difference.');
      } else {
        if (((st as any).titAmount ?? 0) <= 15) {
          scene.text('"It seems you will be getting small breast implants." ');
          scene.text('As you hear this you shift nervously. At least it\'s not going to be that big of a change.');
        } else {
          if (((st as any).titAmount ?? 0) <= 20) {
            scene.text('"It seems you will be getting medium breast implants."');
            scene.text('Your heart skips a beat, "Those are kind of big.", you think to yourself.');
          } else {
            if (((st as any).titAmount ?? 0) <= 25) {
              scene.text('"It seems you will be getting large breast implants."');
              scene.text('Your heart skips a beat, What? "Those will be huge…", you tell to yourself.');
            } else {
              if (((st as any).titAmount ?? 0) <= 30) {
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
    (st as any).minut = ((st as any).minut ?? 0) + 120;
    ((st as any).bodyVars = (st as any).bodyVars ?? {})['bust_silicone'] = ((st as any).bodyVars['bust_silicone'] ?? 0) + (((st as any).titAmount ?? 0));
    qspCall(st, 'stat', '');
    scene.text(`"${((st as any).pcs_firstname ?? '')} ${((st as any).pcs_lastname ?? '')}, are you listening?"`);
    scene.text(' \'Wait… I\'m awake?\' It seemed just a couple of seconds ago you were laying down on the operating table about to have surgery.');
    scene.text(' \'My breasts feel fuller…\' ');
    scene.text(`You grab your breasts as you look down, and you see you have a bigger breasts! Your breasts are now ${((st as any).titsize ?? '')}s.`);
    scene.img(`images/pc/body/tits/t${((st as any).tits ?? '')}.jpg`);
    scene.text(`You aren't paying attention to the doctor as he finishes up, and you slowly get off the operating table and head over to your ${((st as any).npcrelat ?? '')}.`);
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Head over to your ' + String(((st as any).npcrelat ?? '') ?? ''), handler: (st: GameState) => {
    scene.text(`As you go back towards ${((st as any).Xem ?? '')}, ${((st as any).Xe ?? '')} looks you up and down.`);
    scene.text(`"There we go!", ${((st as any).Xe ?? '')} says with a smile.`);
    if ((!((st as any).titBoy ?? 0))) {
      scene.text('If you are getting inplants this should not fire off.');
    } else {
      if (((st as any).titBoy ?? 0) === 1) {
        scene.text(`You can tell that ${((st as any).npcdesc ?? '')} likes a girl with a good rack, thankfully although you look more like a bimbo than before, ${((st as any).Xyr ?? '')} tit preference is not outrageously big, and you must admit, it does make you look sexier.`);
      } else {
        if (((st as any).titBoy ?? 0) === 2) {
          scene.text(`You can clearly tell ${((st as any).npcdesc ?? '')} loves a girl with bimbo-sized tits, as you hold your tits you look at yourself in the mirror. The girl staring back at you looks like a bimbo that doesn't know where to put her whorish tits. And you have to admit, it does turn you on a little.`);
        }
      }
    }
    if (((st as any).npc_gentle ?? 0)?.[String((st as any).boy ?? 0)] === 1) {
      scene.text(`From the blush on ${((st as any).Xyr ?? '')} face, you can tell ${((st as any).npcdesc ?? '')} loves your new breasts.`);
    } else {
      if (((st as any).npc_rough ?? 0)?.[String((st as any).boy ?? 0)] === 0) {
        scene.text(`${((st as any).npcdesc ?? '')} gives you one last look and gives you a quick kiss on your cheek.`);
      } else {
        scene.text(`${((st as any).npcdesc ?? '')} comes up to you, and with a quick slap on the ass, kisses you on the lips and says, "Now you look like a bombshell!"`);
      }
    }
    scene.actions([
{ label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 40;
    scene.text('After getting your new breasts, you both part ways and head home.');
    scene.text(`You can't say why, but you feel it would be harder to say no next time if ${((st as any).Xe ?? '')} asked you to change something.`);
    ((st as any).npc_compliance = (st as any).npc_compliance ?? {})[String((st as any).npcID ?? 0)] = ((st as any).npc_compliance[String((st as any).npcID ?? 0)] ?? 0) - (1);
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    scene.actions([
      { label: 'Continue', goto: ['homes_properties', 'go_home'] },
    ]);
  } },
]);
    return;
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      if (((st as any).tits ?? 0) > ((st as any).titMax ?? 0)) {
        scene.text(`Even though you don't know what ${((st as any).npcdesc ?? '')} said to the surgeon, you still jump when he starts to speak to you.`);
        scene.text(`"So that ${((st as any).person ?? '')} over there says you want to get breast implants?", the doctor asks quizically, looking you up and down.`);
        scene.text('"Y-yes.", you manage to squeek out, your face turning slightly red at the topic of the conversation.');
        scene.text(`"All right, lets get started right away, ${((st as any).Xe ?? '')} had a set size ${((st as any).Xe ?? '')} wanted so we will be doing that.", he says as he looks at his clipboard.`);
        (st as any).titAmount = (((st as any).tits ?? 0) - ((st as any).titMax ?? 0)) * 5 + 9;
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
    (st as any).minut = ((st as any).minut ?? 0) + 120;
    if (((st as any).bodyVars ?? 0)?.['bust_silicone'] - ((st as any).titAmount ?? 0) < 0) {
      (st as any).titExtra = ((st as any).titAmount ?? 0) - (((st as any).bodyVars ?? {})?.['bust_silicone'] ?? 0);
      ((st as any).bodyVars = (st as any).bodyVars ?? {})['bust_silicone'] = 0;
      ((st as any).pcs_mass = (st as any).pcs_mass ?? {})['bust'] = ((st as any).pcs_mass['bust'] ?? 0) - (((st as any).titExtra ?? 0));
    } else {
      ((st as any).bodyVars = (st as any).bodyVars ?? {})['bust_silicone'] = ((st as any).bodyVars['bust_silicone'] ?? 0) - (((st as any).titAmount ?? 0));
    }
    qspCall(st, 'stat', '');
    scene.text(`"${((st as any).pcs_firstname ?? '')} ${((st as any).pcs_lastname ?? '')}, are you listening?"`);
    scene.text(' \'Wait… I\'m awake?\' It seemed just a couple of seconds ago you were laying down on the operating table about to have surgery.');
    scene.text(' \'My breasts feel lighter…\' ');
    scene.text(`You grab your breasts as you look down, and you realize you have much smaller breasts! Your breasts are now ${((st as any).titsize ?? '')}s.`);
    scene.img(`images/pc/body/tits/t${((st as any).tits ?? '')}.jpg`);
    scene.text(`You aren't paying attention to the doctor as he finishes up, and you slowly get off the operating table and head over to your ${((st as any).npcrelat ?? '')}.`);
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Head over to your ' + String(((st as any).npcrelat ?? '') ?? ''), handler: (st: GameState) => {
    scene.text(`As you go back towards ${((st as any).Xem ?? '')}, ${((st as any).Xe ?? '')} looks you up and down.`);
    scene.text(`"There we go!", ${((st as any).Xe ?? '')} says with a smile.`);
    if (((st as any).titMin ?? 0) < 2) {
      scene.text(`You can tell that ${((st as any).npcdesc ?? '')} likes a girl without whorish tits, and you can kind of see why as you slowly grope your now tinier breasts.`);
    } else {
      if (((st as any).titMin ?? 0) < 4) {
        scene.text(`You can tell that ${((st as any).npcdesc ?? '')} likes a girl with an average rack, and you admittedly agree with ${((st as any).Xem ?? '')}, as you slowly massage your breasts.`);
      } else {
        if (((st as any).titMin ?? 0) < 6) {
          scene.text(`You can tell that ${((st as any).npcdesc ?? '')} likes a girl with a good rack, but thankfully not too big, and you admittedly agree with ${((st as any).Xem ?? '')}, as you slowly massage your breasts.`);
        } else {
          scene.text('Reducing to max? What?');
        }
      }
    }
    if (((st as any).npc_gentle ?? 0)?.[String((st as any).boy ?? 0)] === 1) {
      scene.text(`From the blush on ${((st as any).Xyr ?? '')} face, you can tell ${((st as any).npcdesc ?? '')} loves your new breasts.`);
    } else {
      if (((st as any).npc_rough ?? 0)?.[String((st as any).boy ?? 0)] === 0) {
        scene.text(`${((st as any).npcdesc ?? '')} gives you one last look and gives you a quick kiss on your cheek.`);
      } else {
        scene.text(`${((st as any).npcdesc ?? '')} comes up to you, and with a quick slap on the ass, kisses you on the lips and says, "Now you look like a bombshell!"`);
      }
    }
    scene.actions([
{ label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 40;
    scene.text('After getting your new breasts, you both part ways and head home.');
    scene.text(`You can't say why, but you feel it would be harder to say no next time if ${((st as any).Xe ?? '')} asked you to change something.`);
    ((st as any).npc_compliance = (st as any).npc_compliance ?? {})[String((st as any).npcID ?? 0)] = ((st as any).npc_compliance[String((st as any).npcID ?? 0)] ?? 0) - (1);
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    scene.actions([
      { label: 'Continue', goto: ['homes_properties', 'go_home'] },
    ]);
  } },
]);
    return;
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
    scene.text(`As you arrive at the clinic, ${((st as any).npcdesc ?? '')} walks up to the front desc and asks to speak with the plastic surgeon. After a couple of minutes the plastic surgeon comes out with a clipboard.`);
    scene.text(`${((st as any).npcdesc ?? '')} talks to the surgeon and after a brief exchange of words, ${((st as any).Xe ?? '')} hands the surgeon a respectable stack of bills. The surgeon discreetly puts the bills into his jacket and starts to walk toward you.`);
    scene.text(`Even though you don't know what ${((st as any).npcdesc ?? '')} said to the surgeon, you still jump when he starts to speak to you.`);
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
    (st as any).minut = ((st as any).minut ?? 0) + 120;
    (st as any).lc_counter = 0;
    (st as any).temp_target_bmi = Math.max(16, ((st as any).figurePrefMin ?? 0));
    do {
      ((st as any).pcs_mass = (st as any).pcs_mass ?? {})['body'] = qspFunc(s, 'body', 'CalcOptBodyMass', ((st as any).pcs_bmi ?? 0) - 3);
      if (((st as any).pcs_mass ?? 0)?.['body'] < 11) {
        ((st as any).pcs_mass = (st as any).pcs_mass ?? {})['body'] = 11;
      }
      qspCall(st, 'body', 'softreset');
      (st as any).lc_counter = ((st as any).lc_counter ?? 0) + (1);
      qspCall(st, 'stat', '');
      scene.text(`"${((st as any).pcs_firstname ?? '')} ${((st as any).pcs_lastname ?? '')}, are you listening?"`);
      scene.text(' \'Wait… I\'m awake?\' It seemed just a couple of seconds ago you were laying down on the operating table about to have surgery.');
      scene.text(`You aren't paying attention to the doctor as he finishes up, and you slowly get off the operating table and head over to your ${((st as any).npcrelat ?? '')}.`);
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Head over to your ' + String(((st as any).npcrelat ?? '') ?? ''), handler: (st: GameState) => {
    scene.text(`As you go back towards ${((st as any).Xem ?? '')}, ${((st as any).Xe ?? '')} looks you up and down.`);
    scene.text(`"There we go!", ${((st as any).Xe ?? '')} says with a smile.`);
    (st as any).img_temp = qspFunc(s, '$body_image', '', 'body');
    scene.img(`${((st as any).img_temp ?? '')}`);
    (st as any).img_temp = undefined;
    (st as any).body_image_msg = undefined;
    if (((st as any).figurePrefMin ?? 0) < 19) {
      scene.text(`You can tell that ${((st as any).npcdesc ?? '')} likes a girl that has very little fat on her whorish tits, and you can kind of see why as you slowly look at yourself in the mirror.`);
    } else {
      if (((st as any).figurePrefMin ?? 0) < 25) {
        scene.text(`You can tell that ${((st as any).npcdesc ?? '')} likes a girl that's not too fat, but thankfully not too skinny, and you admittedly agree with ${((st as any).Xem ?? '')}, as you slowly run your hands over your now smaller curves.`);
      } else {
        scene.text('Reducing to max? What?');
      }
    }
    if (((st as any).npc_gentle ?? 0)?.[String((st as any).boy ?? 0)] === 1) {
      scene.text(`From the blush on ${((st as any).Xyr ?? '')} face, you can tell ${((st as any).npcdesc ?? '')} loves your new figure.`);
    } else {
      if (((st as any).npc_rough ?? 0)?.[String((st as any).boy ?? 0)] === 0) {
        scene.text(`${((st as any).npcdesc ?? '')} gives your figure one last look and gives you a quick kiss on your cheek.`);
      } else {
        scene.text(`${((st as any).npcdesc ?? '')} comes up to you, and with a quick slap on the ass, kisses you on the lips and says, "Now you have the body of a bombshell!"`);
      }
    }
    scene.actions([
{ label: 'Continue', handler: (st: GameState) => {
    scene.text('After getting a lyposuction treatment, you both part ways and head home.');
    scene.text(`You can't say why, but you feel it would be harder to say no next time if ${((st as any).Xe ?? '')} asked you to change something.`);
    ((st as any).npc_compliance = (st as any).npc_compliance ?? {})[String((st as any).npcID ?? 0)] = ((st as any).npc_compliance[String((st as any).npcID ?? 0)] ?? 0) - (1);
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    scene.actions([
      { label: 'Continue', goto: ['homes_properties', 'go_home'] },
    ]);
  } },
]);
    return;
  } },
      ]);
    } while (qspFunc(s, 'lover_pref', 'check_bmi') === 0  &&  ((st as any).lc_counter ?? 0) < 10);
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
  qspFunc(s, 'npc_preferences[$npcID]');
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
