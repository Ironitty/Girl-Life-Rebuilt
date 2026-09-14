// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).nichGentleclubVisits ?? 0))) {
    scene.actions([{ label: 'Continue', goto: ['nichClub', 'firstVisit'] }]);
  }
  scene.build();
}

function enterFirstVisit(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).nichClubStage ?? 0))) {
    scene.img('images/characters/city/nicholas/gentleclub/entry1.jpg');
    scene.text('The drive to the club takes about half an hour.');
    scene.text('Sitting next to you, Nicholas is wearing one of his finest suits.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I don't happen what will happen next. The only thing necessa...
    scene.text(`"${((s as any).pcs_nickname || '')}, I don't happen what will happen next. The only thing necessary is that you play with the customs of this place. Don't embarrass me. I don't have to tell you again how important it is for me to get into good graces with Mister Fetisov and his associates.`);
    scene.text('"Yes, Master Nicholas, of course."');
    scene.text('To your surprise, the journey ends in an underground parking garage under a recently constructed mall. The driver of Nicholas steps out and opens the door for his employer first, then he opens your door. Afterwards, he returns to his driver\'s seat. Apparently, he will wait there until you return.');
    scene.text('You realize that you are standing in front of a small corridor. It would be tough to notice if you were not standing next to it.');
    scene.text('"Come on, follow me." Nicholas leads the way.');
    scene.actions([
      { label: 'Follow him', handler: (st: GameState) => {
    (s as any).nichClubStage = 1;
  }, goto: ['nichClub', 'firstVisit'] },
    ]);
  } else {
    if (((s as any).nichClubStage ?? 0) === 1) {
      scene.img('images/characters/city/nicholas/gentleclub/security.jpg');
      scene.text('After a few meters, the corridor makes a turn and another one again after about 10 additional meters.');
      scene.text('Right behind the last turn lies a small room. It only has one door opposite you.');
      scene.text('It is guarded by three security men. Two of them look like bodybuilders. They are very muscular and more than two meters tall. Both are wearing blazers and knives on their belts, and you can spot assault rifles on their backs.');
      scene.text('The third guard seems to be in charge. He wears an expensive suit and an earplug and doesn\'t seem to be armed.');
      scene.text('"Good evening," he says.');
      // TODO-QSP: dynamic text: "Good evening. My name is ' + $npc_firstname['A52']+' '+$npc_lastname['A52']+'. ...
      scene.text(`"Good evening. My name is ' + $npc_firstname['A52']+' '+$npc_lastname['A52']+'. And this is ${((s as any).pcs_firstname || '')} ${((s as any).pcs_lastname || '')}. We have been invited by Mister Fetisov." he hands over the business card Mister Fetisov gave him.`);
      // TODO-QSP: dynamic text: "Very well. Just a few seconds, please, Mister '+$npc_lastname['A52']+'".
      scene.text('"Very well. Just a few seconds, please, Mister \'+$npc_lastname[\'A52\']+\'".');
      scene.actions([
        { label: 'Wait', handler: (st: GameState) => {
    (s as any).nichClubStage = 2;
  }, goto: ['nichClub', 'firstVisit'] },
      ]);
    } else {
      if (((s as any).nichClubStage ?? 0) === 2) {
        scene.img('images/characters/city/nicholas/gentleclub/security.jpg');
        scene.text('The security man starts speaking into a microphone.');
        // TODO-QSP: dynamic text: "Mister '+$npc_lastname['A52']+' is at the entry… yes… yes… no… one second." he ...
        scene.text('"Mister \'+$npc_lastname[\'A52\']+\' is at the entry… yes… yes… no… one second." he seems to get instructions through his ear plug.');
        scene.text('He takes out what appears to be a flashlight. It emits a violet light, which he aims at the back of Nicholas\' business card. Apparently, there is a picture of a swan invisible in normal light.');
        scene.text('"Swan… yes… of course." he gives the card back to Nicholas.');
        // TODO-QSP: dynamic text: "Welcome to the Gentleman's Club, Mister '+$npc_lastname['A52']+'! We are happy ...
        scene.text('"Welcome to the Gentleman\'s Club, Mister \'+$npc_lastname[\'A52\']+\'! We are happy to welcome you. A guide will arrive shortly to show you around."');
        scene.actions([
          { label: 'Wait', handler: (st: GameState) => {
    (s as any).nichClubStage = 3;
  }, goto: ['nichClub', 'firstVisit'] },
        ]);
      } else {
        if (((s as any).nichClubStage ?? 0) === 3) {
          scene.img('images/characters/city/nicholas/gentleclub/mistress.jpg');
          scene.text('After about a minute, the door behind the three guards opens. Only now do you realize that it is actually the door of an elevator.');
          scene.text('A man and a woman step outside. The man is about 40 years old and dressed like a butler.');
          // TODO-QSP: dynamic text: "Master '+$npc_lastname['A52']+', welcome! It is a pleasure to have you here. My...
          scene.text('"Master \'+$npc_lastname[\'A52\']+\', welcome! It is a pleasure to have you here. My name is Olaf. May I introduce Mistress Malvina? She will help your accompaniment to find her place."');
          scene.text('The way he talks about you makes you uncomfortable. It sounds as if you were some kind of commodity.');
          scene.text('Nicholas says hello and shakes the hand of Mistress Malvina. She is wearing a latex mini dress and greets Nicholas with a smile but doesn\'t pay much attention to you.');
          scene.text('The four of you then step into the elevator. It drives down for at least four levels.');
          scene.text('When the door opens, Olaf leads Nicholas outside. "Please follow me, sir."');
          scene.text('Seeing your questioning look, Mistress Malvina coldly says, "You stay with me."');
          scene.text('The door closes, and you and the other woman drive to an even lower level.');
          scene.actions([
            { label: 'Wait', handler: (st: GameState) => {
    (s as any).nichClubStage = 4;
  }, goto: ['nichClub', 'firstVisit'] },
          ]);
        } else {
          if (((s as any).nichClubStage ?? 0) === 4) {
            scene.img('images/characters/city/nicholas/gentleclub/mistress.jpg');
            scene.text('The door opens, and you see another corridor in front of you.');
            scene.text('"Follow me!" Mistress Malvina\'s voice is cold and commanding. She leads you to a room.');
            scene.text('To your surprise, it looks like a gynecologist\'s examination room. Mistress Malvina points at the gynecologist\'s chair in the middle of the room.');
            scene.text('"Undress and sit down there."');
            scene.text('"Wait, what?!" you can\'t believe what she said. Does she really expect you to get naked just like this?');
            scene.text('"I said. Strip and sit down. We have to do a physical examination first. No, get going. I won\'t repeat myself a second time."');
            scene.actions([
              { label: 'Wait', handler: (st: GameState) => {
    (s as any).nichClubStage = 5;
  }, goto: ['nichClub', 'firstVisit'] },
            ]);
          } else {
            if (((s as any).nichClubStage ?? 0) === 5) {
              scene.img('images/characters/city/nicholas/gentleclub/e2gyn.jpg');
              scene.text('Reluctantly you put your clothes off and place them on a nearby chair.');
              scene.text('Now completely naked, you get in the chair. Having your legs spread like this in front of this strange woman feels embarrassing. You try to convince yourself that she is some kind of doctor and that this is not too different from what you have experienced in past health checks.');
              scene.text('Mistress Malvina walks around the chair, and before you realize what\'s happening, she straps your arms and legs down. You are entirely immobilized and restrained to the chair now.');
              scene.text('"They are for your own safety," she explains.');
              scene.text('You want to protest, but she pushes some kind of gag into your mouth, effectively making your complaints unintelligible.');
              scene.actions([
                { label: 'Wait', handler: (st: GameState) => {
    (s as any).nichClubStage = 6;
  }, goto: ['nichClub', 'firstVisit'] },
              ]);
            } else {
              if (((s as any).nichClubStage ?? 0) === 6) {
                scene.img('images/characters/city/nicholas/gentleclub/e2gyn.jpg');
                scene.text('Mistress Malvina takes out a tape measure and begins measuring your breasts, feet, neck and every other part of your body.');
                scene.text('She writes down the numbers on a piece of paper.');
                scene.text('When she is done, she takes out some kind of plastic spear with glass on its end.');
                scene.text('"Now for the fun part…"');
                scene.text('She plugs in the electric cable of this device, and it begins to hum.');
                scene.actions([
                  { label: 'Wait', handler: (st: GameState) => {
    (s as any).nichClubStage = 7;
  }, goto: ['nichClub', 'firstVisit'] },
                ]);
              } else {
                if (((s as any).nichClubStage ?? 0) === 7) {
                  scene.img('images/characters/city/nicholas/gentleclub/e2elec.jpg');
                  scene.text('You shake your head no as she slowly approaches your privates with this device.');
                  scene.text('"This ingenious little device will measure inside your pussy while also exploring your pain tolerance." Mistress Malvina explains.');
                  scene.text('Suddenly you feel a burning pain as she pushes the device into you. It feels like being filled with molten metal. The pain is extremely intense, and you violently trash around, but your bounds hold you firmly in place. You can\'t move a single inch.');
                  scene.text('The pain worsens as the device is pushed further and further into you.');
                  scene.text('Your vision is blurred by your tears, and you can only hear your own screams.');
                  scene.text('The pain suddenly stops just as you think you are about to faint. However, it takes a while for you to calm down.');
                  scene.text('Once your sobs get quiet, you hear Mistress Malvina again. "Very interesting. But we must ensure these values are correct, don\'t we?"');
                  scene.text('She turns the device back on, and the pain is worse. You are immediately back to screaming.');
                  scene.text('This time the pain is too much. Everything goes black as you pass out.');
                  scene.actions([
                    { label: 'Continue', handler: (st: GameState) => {
    (s as any).nichClubStage = 8;
  }, goto: ['nichClub', 'firstVisit'] },
                  ]);
                } else {
                  if (((s as any).nichClubStage ?? 0) === 8) {
                    scene.img('images/characters/city/nicholas/gentleclub/collar.jpg');
                    scene.text('As you wake up, you quickly realize that you are still in the same chair. The vile device and the pain in your privates are gone, as well as the bit in your mouth.');
                    scene.text('You feel something around your neck. Apparently, there is a collar. It is so tight it is a little uncomfortable, but not tight enough to make breathing more difficult.');
                    scene.text('Also, there is a stinging sensation in your upper left arm. It feels as if you got a small tattoo there.');
                    scene.text('Mistress Malvina steps back into your sight and unlocks your restraints.');
                    scene.text('The first thing you do once your arms are free is inspect your left arm. But there is nothing to be seen.');
                    scene.text('Then your hands wander to the collar around your neck. To your surprise, you can\'t find an opening mechanism.');
                    scene.actions([
                      { label: 'Wait', handler: (st: GameState) => {
    (s as any).nichClubStage = 9;
  }, goto: ['nichClub', 'firstVisit'] },
                    ]);
                  } else {
                    if (((s as any).nichClubStage ?? 0) === 9) {
                      scene.img('images/characters/city/nicholas/gentleclub/mistress.jpg');
                      scene.text('"I hope you enjoyed your inspection. I will now tell you the rules of this club. Pay close attention, or you will regret it."');
                      scene.text('"There are several types of ranks here:');
                      scene.text(' -Masters, such as me and your Master. A female Master is called Mistress.');
                      scene.text(' -Eagles, who are primarily guests of Masters. They are allowed to leave on their own. Both Masters and Eagles don\'t wear collars.');
                      scene.text(' -Swans, such as yourself. You are the personal possession of a Master or a couple. You have to follow the commands of your Master, and you are not allowed to leave without his permission.');
                      scene.text(' -Doves, who are like Swans but belong to the club. They are here for general entertainment.');
                      scene.text('Your Master can decide whether you are allowed to touch Doves without their permission. You are not allowed to do so with other Swans, Eagles or Masters.');
                      scene.text('If you ever touch, hurt or even insult a Master or an Eagle, you will get punished. Severely.');
                      scene.text('There are more rules, but you know the essential things for now.');
                      scene.text('Oh, and before I forget: there are always Swans who didn\'t know what they got into before they arrived. They don\'t want to believe there is no way for them to leave without permission.');
                      scene.text('I really like to see them try, though. So if you want to run, you can try." she points at the door.');
                      scene.actions([
                        { label: 'Run away', handler: (st: GameState) => {
    (s as any).nichClubStage = 10;
  }, goto: ['nichClub', 'firstVisit'] },
                        { label: 'Stay', handler: (st: GameState) => {
    (s as any).nichClubStage = 20;
  }, goto: ['nichClub', 'firstVisit'] },
                      ]);
                    } else {
                      if (((s as any).nichClubStage ?? 0) === 10) {
                        scene.img('images/characters/city/nicholas/gentleclub/collarChoke.jpg');
                        scene.text('You hastily look around, but your clothes are nowhere to be seen. So you hurry outside the room naked.');
                        scene.text('As you enter the corridor, you feel the collar around your neck getting tighter.');
                        scene.text('Ignoring this, for now, you run towards the elevator door. You hit the call button, but nothing happens.');
                        scene.text('You look around in panic. The collar is so tight that it is hard for you to breathe now.');
                        scene.text('You take a few steps in the opposite direction before doubling over. The collar is so tight you must gasp for air on all fours.');
                        scene.text('You only see her high heel boots as Mistress Malvina steps next to you. She grabs your hair and pulls you back into the examination room.');
                        scene.text('The collar slowly shrinks back to its original size, letting you fill your lungs with air once more.');
                        scene.text('"There is a sensor in your collar. If you enter a room you are not whitelisted, it will choke you. But, don\'t worry, it will always leave you enough air to survive, but not enough to make anything stupid." she laughs.');
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
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'firstVisit':
      enterFirstVisit(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const nichClub: LocationDef = {
  name: 'nichClub',
  title: 'The drive to the club takes about half an hour.',
  region: 'other',
  enter: enter,
};
