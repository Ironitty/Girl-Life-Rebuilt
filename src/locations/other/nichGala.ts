import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/gala/02.jpg');
  (s as any).nichTemp = qspFunc(s, 'nichUtil', 'npcActivity', 'gala');
  if (((s as any).nichTemp ?? 0) === 'sleep') {
    scene.text('Gala is sleeping. It would be a bad idea to wake her up now.');
  } else {
    if (((s as any).nichTemp ?? 0) === 'snooze') {
      scene.text('Gala is still in her bed. She doesn\'t seem to be in the mood to talk.');
    } else {
      if (((s as any).nichTemp ?? 0) === 'prepareClub') {
        scene.text('Gala is busy applying her make-up. She doesn\'t seem to be in the mood to talk.');
      } else {
        if (((s as any).nichTemp ?? 0) === 'nicholas') {
        } else {
          if (((s as any).nichTemp ?? 0) === 'bathMorning'  ||  ((s as any).nichTemp ?? 0) === 'bathEvening') {
            scene.text('Gala is in the bathroom and doesn\'t want to speak to you now.');
          } else {
            if (((s as any).nichTemp ?? 0) === 'breakfast'  ||  ((s as any).nichTemp ?? 0) === 'dinner') {
            } else {
              if (((s as any).nichTemp ?? 0) === 'living') {
                scene.text('Gala is sitting on the couch. You could approach her now.');
                scene.actions([
                  { label: 'Approach', handler: (st: GameState) => {
    qspGoto(st, 'nichGala', 'approach');
  } },
                ]);
              } else {
                if (((s as any).nichTemp ?? 0) === 'leaveSpa'  ||  ((s as any).nichTemp ?? 0) === 'leaveFriend'  ||  ((s as any).nichTemp ?? 0) === 'leaveClub') {
                  scene.text('Gala is about to leave the apartment. She has no time to speak right now.');
                } else {
                  if (((s as any).nichTemp ?? 0) === 'returnSpa'  ||  ((s as any).nichTemp ?? 0) === 'returnFriend'  ||  ((s as any).nichTemp ?? 0) === 'returnClub') {
                    scene.text('Gala just returned to the apartment. You should give her some time before speaking to her.');
                  } else {
                    if (((s as any).nichTemp ?? 0) === 'club') {
                    } else {
                      if (((s as any).nichTemp ?? 0) === 'friend') {
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
  scene.actions([
    { label: 'Back', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc');
  } },
  ]);
  scene.build();
}

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/gala/02.jpg');
  (s as any).nichTemp = qspFunc(s, 'nichUtil', 'npcActivity', 'gala');
  if (((s as any).nichTemp ?? 0) === 'sleep') {
    scene.text('Gala is sleeping. It would be a bad idea to wake her up now.');
  } else {
    if (((s as any).nichTemp ?? 0) === 'snooze') {
      scene.text('Gala is still in her bed. She doesn\'t seem to be in the mood to talk.');
    } else {
      if (((s as any).nichTemp ?? 0) === 'prepareClub') {
        scene.text('Gala is busy applying her make-up. She doesn\'t seem to be in the mood to talk.');
      } else {
        if (((s as any).nichTemp ?? 0) === 'nicholas') {
        } else {
          if (((s as any).nichTemp ?? 0) === 'bathMorning'  ||  ((s as any).nichTemp ?? 0) === 'bathEvening') {
            scene.text('Gala is in the bathroom and doesn\'t want to speak to you now.');
          } else {
            if (((s as any).nichTemp ?? 0) === 'breakfast'  ||  ((s as any).nichTemp ?? 0) === 'dinner') {
            } else {
              if (((s as any).nichTemp ?? 0) === 'living') {
                scene.text('Gala is sitting on the couch. You could approach her now.');
                scene.actions([
                  { label: 'Approach', handler: (st: GameState) => {
    qspGoto(st, 'nichGala', 'approach');
  } },
                ]);
              } else {
                if (((s as any).nichTemp ?? 0) === 'leaveSpa'  ||  ((s as any).nichTemp ?? 0) === 'leaveFriend'  ||  ((s as any).nichTemp ?? 0) === 'leaveClub') {
                  scene.text('Gala is about to leave the apartment. She has no time to speak right now.');
                } else {
                  if (((s as any).nichTemp ?? 0) === 'returnSpa'  ||  ((s as any).nichTemp ?? 0) === 'returnFriend'  ||  ((s as any).nichTemp ?? 0) === 'returnClub') {
                    scene.text('Gala just returned to the apartment. You should give her some time before speaking to her.');
                  } else {
                    if (((s as any).nichTemp ?? 0) === 'club') {
                    } else {
                      if (((s as any).nichTemp ?? 0) === 'friend') {
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
  scene.actions([
    { label: 'Back', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc');
  } },
  ]);
  scene.build();
}

function enterApproach(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/gala/02.jpg');
  scene.text('You wait for Gala to notice you, then you approach her and curtsy.');
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>, what is it?"
  scene.text(`"${((s as any).pcs_nickname ?? '')}, what is it?"`);
  if (((s as any).nichGalaTraining ?? 0) === 1  &&  ((s as any).nichGalaContract ?? 0) === 0  &&  ((s as any).nichGalaTrainCounter ?? 0) >= 5) {
    qspGoto(s, 'nichGala', 'contractOffer');
  }
  if (((s as any).nichGalaContractActive ?? 0) === 1) {
    scene.actions([
      { label: 'Slave entertainment', handler: (st: GameState) => {
    qspGoto(st, 'nichGala', 'slaveGeneric');
  } },
    ]);
  } else {
    if (((s as any).nichGalaTraining ?? 0) === 1  &&  ((s as any).nichGalaTrainLast ?? 0) !== ((s as any).daystart ?? 0)) {
      scene.actions([
        { label: 'Special Training', handler: (st: GameState) => {
    scene.text('"I am here for the special maid training, Mistress Gala."');
    scene.text('"Very well. Follow me to the attic!"');
    scene.actions([
      { label: 'Follow her', handler: (st: GameState) => {
    (st as any).nichGalaTrainStage = 0;
    qspGoto(st, 'nichGala', 'training');
  } },
    ]);
  } },
      ]);
    }
  }
  if (((s as any).nichGalaContract ?? 0) === 10) {
    scene.actions([
      { label: 'Slave offer', handler: (st: GameState) => {
    scene.text('"About your offer… the extended training one…"');
    scene.text('"Yes? Did you make up your mind?"');
    scene.actions([
      { label: 'Accept', handler: (st: GameState) => {
    qspGoto(st, 'nichGala', 'contractOfferAccept');
  } },
      { label: 'Reject', handler: (st: GameState) => {
    qspGoto(st, 'nichGala', 'contractOfferReject');
  } },
      { label: 'Not yet', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc');
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).nichGalaTarasPlan ?? 0) === 1) {
    scene.actions([
      { label: 'Taras Plan', handler: (st: GameState) => {
    scene.img('images/characters/city/gala/02.jpg');
    scene.text('Taras told you that he wants to spend some "quality time" with Gala. You assume that that\'s a nice description for her abduction.');
    scene.text('');
    scene.text('You have 3 choices:');
    scene.text('1. Follow the plan: Taras told you that you won\'t see him or Gala again after his plan succeeded.');
    scene.text('2. Expose the plan: Tell Gala everything you know. Taras will be extremely annoyed and you don\'t know how Gala might react.');
    scene.text('3. Ignore the plan: Do nothing and maybe act later.');
    scene.actions([
      { label: 'Follow plan', goto: ['nichGala', 'tarasPlan', '0'] },
      { label: 'Expose plan', goto: ['nichGala', 'tarasPlan', '100'] },
      { label: 'Ignore plan', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'return');
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Back', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc');
  } },
  ]);
  scene.build();
}

function enterTarasPlan(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 0) {
    scene.img('images/pc/activities/maidCleaning/phone.jpg');
    scene.text('You pretend using the phone talking to somebody who gives you a lot of information in a short amount of time.');
    scene.text('Afterwards you act confused and walk over to Gala.');
    scene.text('"Mistress Gala, I just talked to a policemen. He said that he will come over soon to talk with you."');
    scene.text('"Wait, what?! What are you talking about?!"');
    scene.text('"He said it\'s about somebody… a girl named Katinka? Anyways, he said he will be over in about half an hour and that you must not leave the house."');
    scene.text('"Okay… thank you… you have to leave now… at once!"');
    scene.text('You leave the room. It only takes two minutes before you hear Taras storming in.');
    scene.text('After another five minutes you hear both of them leaving the apartment. Apparently they packed some belongings of Gala in an hurry.');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).nichGalaTarasPlan = 10;
    qspCall(s, 'nichUtil', 'disableNPC', 'Gala');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'return');
  } },
    ]);
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 100) {
      scene.img('images/characters/city/gala/02.jpg');
      scene.text('You hesitate at first, but then you tell Gala everything you know about the plan of Taras.');
      scene.text('She is clearly shocked by this reveal. But she trusts your word. Who else could have told you about Katinka than Taras?');
      // TODO-QSP: dynamic text: "Thank you, <<$pcs_nickname>>. You really did me a favor here. I will tell Nicho...
      scene.text(`"Thank you, ${((s as any).pcs_nickname ?? '')}. You really did me a favor here. I will tell Nicholas men to take care of our Taras-problem."`);
      (s as any).nichGalaTarasPlan = 100;
      (s as any).nichGalaContractTaras = 0;
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'return');
  } },
      ]);
    }
  }
  scene.build();
}

function enterContractOffer(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/gala/02.jpg');
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I have been thinking. I really enjoy our little training ses...
  scene.text(`"${((s as any).pcs_nickname ?? '')}, I have been thinking. I really enjoy our little training sessions. And I believe you do as well. What would you say if we took them a little further?"`);
  scene.actions([
    { label: 'Further?', handler: (st: GameState) => {
    scene.text('"Further, Mistress Gala?"');
    scene.text('"Yes. You would not only be trained when you ask for it but whenever I feel like it. Are you familiar with the concept of masters and slaves? It is a BDSM thing."');
    scene.text('"You would be my slave. Make no mistake, that\'s more than a just name. You would have to give up most of your independence and follow my commands. Fulfilling my desires would be your top priority."');
    scene.text('"Of course you would still have to work for my husband. He must not know about our arrangement."');
    scene.text('"What do you say?"');
    scene.actions([
      { label: 'Reject', handler: (st: GameState) => {
    qspGoto(st, 'nichGala', 'contractOfferReject');
  } },
      { label: 'Need time to consider', handler: (st: GameState) => {
    scene.text('"I am sorry Mistress Gala, but I\'m not sure if that\'s something I want. May I have some time to consider your offer, please?"');
    scene.text('"Of course. Just tell me when you made up your mind."');
    (st as any).nichGalaContract = 10;
    scene.actions([
      { label: 'Back', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc');
  } },
    ]);
  } },
      { label: 'Accept', handler: (st: GameState) => {
    qspGoto(st, 'nichGala', 'contractOfferAccept');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterContractOfferAccept(s: GameState, scene: SceneBuilder): void {
  scene.text('"It sounds like an exciting idea."');
  scene.text('She smiles at you viciously.');
  scene.text('"I am glad you see it this way. I have prepared some paperwork. It\'s mostly annoying legal stuff. I need to need your confirmation that I am allowed to spank you for example."');
  scene.text('She hands you a binder containing a contract and a pen.');
  scene.actions([
    { label: 'Sign without reading', handler: (st: GameState) => {
    qspGoto(st, 'nichGala', 'contractOfferSign');
  } },
    { label: 'Read', handler: (st: GameState) => {
    (st as any).nichGalaContractRead = 0;
    qspGoto(st, 'nichGala', 'contractOfferRead');
  } },
  ]);
  scene.build();
}

function enterContractOfferRead(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/gala/slave/contract.jpg');
  if ((!((s as any).nichGalaContractRead ?? 0))) {
    scene.text('You start reading the first few lines:');
    scene.text('');
    scene.text('Slave Contract');
    // TODO-QSP: dynamic text: Contract between <<$pcs_firstname>> <<$pcs_lastname>> (the slave) and Gala Polya...
    scene.text(`Contract between ${((s as any).pcs_firstname ?? '')} ${((s as any).pcs_lastname ?? '')} (the slave) and Gala Polyakov (the owner).`);
  } else {
    if (((s as any).nichGalaContractRead ?? 0) === 1) {
      if (((s as any).pcs_intel ?? 0) >= 30) {
        scene.text('The contract states that you are not allowed to speak about your status as a slave or Galas involvement in this to anybody.');
      } else {
        scene.text('There are lots of difficult legal statements. Maybe a non-disclosure agreement? You struggle to make any sense of it.');
        scene.text('<font color = red>Apparently you are not smart enough to understand this section of the contract.</font>');
      }
    } else {
      if (((s as any).nichGalaContractRead ?? 0) === 2) {
        if (((s as any).pcs_intel ?? 0) >= 40) {
          scene.text('It appears as if the contract can only be ended by Gala and not by you. She can do so anytime.');
        } else {
          scene.text('There are lots of difficult legal statements. It\'s something about the contracts duration. You struggle to make any sense of it.');
          scene.text('<font color = red>Apparently you are not smart enough to understand this section of the contract.</font>');
        }
      } else {
        if (((s as any).nichGalaContractRead ?? 0) === 3) {
          if (((s as any).pcs_intel ?? 0) >= 50) {
            scene.text('The contract also allows Gala to put you under constant surveillance.');
          } else {
            scene.text('There are lots of difficult legal statements. At some point there\'s something about a webcam. You struggle to make any sense of it.');
            scene.text('<font color = red>Apparently you are not smart enough to understand this section of the contract.</font>');
          }
        } else {
          if (((s as any).nichGalaContractRead ?? 0) === 4) {
            if (((s as any).pcs_intel ?? 0) >= 60) {
              scene.text('The contract also allows Gala to make lasting alterations to your body, including cutting your hair, giving your piercings and tattoos and even performing plastic surgeries.');
            } else {
              scene.text('There are lots of difficult legal statements. There is something about your body. You struggle to make any sense of it.');
              scene.text('<font color = red>Apparently you are not smart enough to understand this section of the contract.</font>');
            }
          } else {
            if (((s as any).nichGalaContractRead ?? 0) === 5) {
              if (((s as any).pcs_intel ?? 0) >= 70) {
                scene.text('Also you are required to live wherever Gala wants you to. You are not allowed to leave your home without her permission and she can restrain you anywhere anyhow and for as long as she wants. This can\'t be legal, can it?');
              } else {
                scene.text('There are lots of difficult legal statements. It sounds as if she wants to cuff you. You struggle to make any sense of it.');
                scene.text('<font color = red>Apparently you are not smart enough to understand this section of the contract.</font>');
              }
            } else {
              if (((s as any).nichGalaContractRead ?? 0) === 6) {
                if (((s as any).pcs_intel ?? 0) >= 80) {
                  scene.text('Gala is also allowed to share you with any number of other people and even sell you to somebody else. This surely isn\'t legal.');
                } else {
                  scene.text('There are lots of difficult legal statements. Something about purchases. Does she want to buy something for you? You struggle to make any sense of it.');
                  scene.text('<font color = red>Apparently you are not smart enough to understand this section of the contract.</font>');
                }
              } else {
                if (((s as any).nichGalaContractRead ?? 0) === 7) {
                  if (((s as any).pcs_intel ?? 0) >= 20) {
                    scene.text('On the last pages the responsibilities of Gala are listed.');
                    scene.text('Basically she has to make sure you stay alive and healthy.');
                  } else {
                    scene.text('There are lots of difficult legal statements. You struggle to make any sense of it.');
                    scene.text('<font color = red>Apparently you are not smart enough to understand this section of the contract.</font>');
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).nichGalaContractRead ?? 0) < 7) {
    scene.actions([
      { label: 'Read further', handler: (st: GameState) => {
    (st as any).nichGalaContractRead = ((st as any).nichGalaContractRead ?? 0) + (1);
    qspGoto(st, 'nichGala', 'contractOfferRead');
  } },
    ]);
  }
  scene.actions([
    { label: 'Sign', handler: (st: GameState) => {
    qspGoto(st, 'nichGala', 'contractOfferSign');
  } },
    { label: 'Don\'t sign', handler: (st: GameState) => {
    scene.text('You look up from the papers.');
    scene.text('"I am sorry, Mistress Gala, but I can\'t sign that."');
    scene.text('She looks disappointed.');
    scene.text('"A pity. Of course I expect you never to talk about this again. And you can still come to me for our normal training sessions."');
    (st as any).nichGalaContract = 20;
    scene.actions([
      { label: 'Back', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterContractOfferReject(s: GameState, scene: SceneBuilder): void {
  scene.text('"I am sorry Mistress Gala, but I can\'t be your slave."');
  scene.text('She looks disappointed.');
  scene.text('"A pity. But you can still come to me for our training sessions."');
  (s as any).nichGalaContract = 20;
  scene.actions([
    { label: 'Back', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc');
  } },
  ]);
  scene.build();
}

function enterContractOfferSign(s: GameState, scene: SceneBuilder): void {
  (s as any).nichGalaContract = 30;
  (s as any).nichGalaContractActive = 1;
  (s as any).nichGalaContractDay = ((s as any).daystart ?? 0);
  scene.img('images/characters/city/gala/slave/contract.jpg');
  scene.text('You take the pen and sign the contract.');
  scene.text('Gala smiles at you and takes the papers out of your hands once you have placed your signature.');
  scene.text('"Well done, slave."');
  scene.text('She leaves the room to safely lock the contract away. When she returns she holds a golden ring in her hand.');
  scene.text('"This is my first gift to you." She hands the ring over to you.');
  scene.actions([
    { label: 'Take it', handler: (st: GameState) => {
    scene.img('images/characters/city/gala/slave/ring.jpg');
    scene.text('You take the ring and inspect it. It is a little heavier than you expected. You assume that it is made of stainless steel. It has a round triskelion-symbol on top of it.');
    scene.text('You put it on your right hands ring finger. It takes quite some effort since it is a very tight fit.');
    scene.text('"Good. Now show me your hand."');
    scene.text('You reach over to her and she inspects the fit of the ring. Then she takes a tiny key which fits into the symbol on top of the ring. She turns it just a tiny bit. You can feel that the ring becomes even tighter. You try to bend your finger. To your relief the ring doesn\'t cause any discomfort.');
    scene.text('"Now remove the ring."');
    scene.text('You try pulling and pushing but the ring won\'t move even a tiny bit. Gala smiles while watching you.');
    scene.text('"This ring marks you as my slave. Without the proper key it is next to impossible to remove it. Now lets go to the attic. I want to introduce you to your new life."');
    scene.actions([
      { label: 'Upstairs', handler: (st: GameState) => {
    scene.img('images/characters/city/gala/slave/taras/intro1.jpg');
    scene.text('Gala leads you upstairs into the attic. You know what is expected of you and put off your clothes.');
    scene.text('She then points at some restraints resting on a small table.');
    scene.text('"Put these on!"');
    scene.text('Gala watches you as you put a black leather collar with a big metal ring in front of it around your neck, followed by cuffs around your wrists, upper arms and finally ankles.');
    scene.text('The last thing is a big bit which you put into your mouth. You rhen realize that there are also padlocks without the matching keys. Reluctantly you lock all your restraints in place.');
    scene.text('"Now get to your knees."');
    scene.text('You comply. Gala first locks your ankle cuffs together, then she connects your wrist cuffs and your collar with a sturdy metal chain. Afterwards she connects the cuffs at your upper arms with a very short chain, forcing them together and effectively rendering your amrs completely immobile.');
    scene.text('Lastly she pulls you up by your hair hand connects the back side of your collar to a chain hanging from the ceiling.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/gala/slave/taras/intro1.jpg');
    scene.text('You are forced into a very awkward position. Resting on your knees is painful and more than just a little uncomfortable since it requires tension in nearly all of your body. But if you relax the collar begins to strangle you.');
    scene.text('"This is your first lesson, slave. Your whole purpose is to serve and entertain me now. And I enjoy watching you struggle."');
    scene.text('She goes over to her leather chair and sits down. She drinks a glass of wine while she watches you struggle.');
    qspCall(st, 'pain', '2', 'legL', 'ache');
    qspCall(st, 'pain', '2', 'legR', 'ache');
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'stat', '');
    if (((st as any).pcs_stren ?? 0) >= 50) {
      scene.text('You struggle for what feels at least half an hour. Your <b>high strength</b> allows you to stay in your awkward position without being strangled too much.');
      scene.actions([
        { label: 'Continue', goto: ['nichGala', 'slaveIntro', '1'] },
      ]);
    } else {
      if (((st as any).pcs_vital ?? 0) >= 60) {
        scene.text('You struggle for what feels at least half an hour. As your legs grow tired you get strangled more and more. Your <b>high endurance</b> allows you to stay awake anyways.');
        scene.actions([
          { label: 'Continue', goto: ['nichGala', 'slaveIntro', '1'] },
        ]);
      } else {
        scene.text('You struggle for what feels like an eternity. As your legs grow tired you get strangled more and more. Finally you can\'t force yourself up anymore. You start to panic as you realize that you are going to choke.');
        scene.text('Everything goes dark. The last thing you see is that Gala slowly stands up from her seat and walks over to you.');
        scene.actions([
          { label: 'Continue', goto: ['nichGala', 'slaveIntro', '2'] },
        ]);
      }
    }
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSlaveIntro(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 1) {
    qspCall(s, 'pain', '10', 'nipples', 'pinch');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/gala/slave/taras/intro2.jpg');
    scene.text('Gala slowly stands up and walks over to you.');
    scene.text('"Well done, slave. I thought I would have to rescue you at some point."');
    scene.text('She takes out two big nipples clamps and attaches them to your nipples. They are a little uncomfortable but don\'t hurt.');
    scene.text('"Do you like these clamps? The good thing about them is that they can be adjusted. Lets make them a little tighter. Just give me a sign when the pain is too intense."');
    scene.text('She turns small cogwheels attached to the clamps. After two turns the pain is so intense you have to shriek and frantically shake your head no.');
    scene.text('"Enough already? Little slave bitches like yourself always want to go the easy route."');
    scene.text('She turns the cogwheels half a turn further and your nipples feel like they are on fire.');
    scene.text('You can\'t help but scream. She looks down at you and pets your head while smiling.');
    scene.text('It takes a few minutes for your screams to become silent sobs. Your nipples still hurt badly but since your blood can\'t flow freely there they become increasingly numb.');
    scene.text('Gala then wraps your hands in pieces of clothes and secures them with tape, preventing you from reaching your nipples and removing the clamps.');
    scene.text('Then she disconnects you from the chain that leads connects you to the ceiling and lets you fall on your side.');
    scene.actions([
      { label: 'Continue', goto: ['nichGala', 'slaveIntro', '10'] },
    ]);
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 2) {
      qspCall(s, 'pain', '10', 'nipples', 'pinch');
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'stat', '');
      scene.img('images/characters/city/gala/slave/taras/intro2.jpg');
      scene.text('You wake up to an horrible pain in your nipples. Apparently there are extremely tight clamps attached to them.');
      scene.text('Opening your eyes you realize that you are now lying on your side, still bound the same way you were before.');
      scene.text('Your hands are wrapped in clothes and secure with tape, preventing you from reaching your nipples and removing the clamps.');
      scene.text('The pain in your nipples is too intense to bare. You can\'t help but scream.');
      scene.text('It takes a few minutes for your screams to become silent sobs. Your nipples still hurt badly but since your blood can\'t flow freely there they become increasingly numb.');
      scene.text('You then see Gala stepping over your body and placing. Her shoes are directly in front of your face. Apparently she was standing behind you the whole time.');
      scene.actions([
        { label: 'Continue', goto: ['nichGala', 'slaveIntro', '10'] },
      ]);
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 10) {
        scene.img('images/characters/city/gala/slave/taras/intro3.jpg');
        scene.text('"There is a valuable lesson for you to learn here, slave: you are here for my entertainment. And you being in discomfort is very entertaining to me. If you don\'t like that you better provide another form of entertainment."');
        scene.text('She walks behind you. From the corner of you eye you see that she kneels down at your back when she returns. Suddenly you feel a pressure against your butthole.');
        scene.text('"Now for the last lesson of today. You are my property now. And that includes your slut-holes. I expect you to keep them in pristine condition and ready to be used. Now relax!"');
        scene.text('There is no use resisting. Gala presses a dildo into your ass and then a second one into your vagina. She secures both of them in place with a cable running between your legs.');
        scene.text('Just as you are starting to wonder why she chose small sizes you feel them inflating. Gala pumps them up until they are quite uncomfortable.');
        scene.text('You try pressing them out, but they don\'t move a tiny bit.');
        scene.text('Gala stands up and steps in front of you. You can see nothing but her feet in her high heel shoes.');
        qspCall(s, 'pain', '4', 'vaginal', 'stretch');
        qspCall(s, 'pain', '4', 'asshole', 'stretch');
        qspCall(s, 'arousal', 'vaginal_dildo', 10, 'bound', 'rough', 'lesbian');
        qspCall(s, 'arousal', 'anal_dildo', (-10), 'bound', 'rough', 'lesbian');
        qspCall(s, 'arousal', 'end');
        (s as any).minut = ((s as any).minut ?? 0) + 5;
        qspCall(s, 'stat', '');
        scene.actions([
          { label: 'Continue', goto: ['nichGala', 'slaveIntro', '20'] },
        ]);
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 20) {
          scene.img('images/characters/city/gala/slave/taras/intro2.jpg');
          scene.text('"I have things to do now. You will stay here and think about how much you are my property, how much you want to serve me and how bad you want to avoid punishment."');
          scene.text('She closes the door behind her as she leaves the room. You hear the key being turned. You are alone now.');
          scene.text('At first you try to get out of your bindings. Or at least get a little more comfort. But it is no use. Gala has tied you up expertly and there is nothing you can do but wait.');
          scene.text('');
          scene.text('It takes a few hours until you hear the lock being opened again.');
          scene.text('You are relieved by the sight how Gala. Despite her being the one who locked you here you can\'t really feel angry at her since you also know that she is the only person who can free you.');
          scene.text('"Lazy slut, lying around all day."');
          scene.text('She throws the keys to your restraints at the floor in front of you and frees your left hand. Then she leaves.');
          scene.text('At first you free your nipples. As the blood runs back into them the pain also returns. You have to pause shortly before you are able to undo your restraints. It takes quite some effort to do so since the locks are hard to reach from your position.');
          scene.text('Lastly you are able to remove the dildos after you deflated them.');
          scene.text('Still a little bit unsure on your feet you stand back up and put on your clothes.');
          (s as any).minut = ((s as any).minut ?? 0) + 120;
          qspCall(s, 'stat', '');
          scene.actions([
            { label: 'Downstairs', goto: ['nichApartment', ''] },
          ]);
        }
      }
    }
  }
  scene.build();
}

function enterSlaveDoc(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') <= 1) {
    scene.img('images/characters/city/gala/slave/doctorExt.jpg');
    scene.text('The two of you get into Galas car and her driver drives you in the direction of the suburbs. You wonder where you are going but you don\'t dare asking.');
    scene.text('Finally the car drives up a driveway to a big building that\'s surrounded by a big park. The driver stops right in front of it and steps out to open Galas door. You step out yourself.');
    scene.text('Taking a closer look at the building you are standing before you see a sign: "Mental Institution". All the windows have bars before them, just like a prison, and it\'s impossible to see what\'s going on inside.');
    scene.text('You throw a questioning look at Gala.');
    scene.text('"Don\'t worry, this is not an actual mental asylum anymore. Although it is still about correcting behavioral flaws in some regard."');
    scene.text('');
    scene.text('Gala walks inside and you follow her. There are two security guards right behind the door and another heavy door behind them. One of them locks the door behind you and nods at the other guard who nods back and opens the second door for you.');
    (s as any).minut = ((s as any).minut ?? 0) + (30);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go inside', goto: ['nichGala', 'slaveDoc', '2'] },
    ]);
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 2) {
      scene.img('images/characters/city/gala/slave/doctorNur.jpg');
      scene.text('Just behind the door you are greeted by a nurse. To your surprise she is wearing a latex outfit. Is she an actual nurse or is this a costume?');
      scene.text('"Welcome to our institute. You are just in time for you appointment. Please follow me."');
      scene.text('She is only talking to Gala and doesn\'t pay you any attention.');
      scene.text('The nurse leads you to a small room that looks like an examination room. There is a gynochair in one corner of it.');
      scene.text('"Please tell your slave to undress and get in the chair."');
      scene.text('Gala points at the chair.');
      scene.text('"You heard her, slave."');
      (s as any).minut = ((s as any).minut ?? 0) + (5);
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Comply', goto: ['nichGala', 'slaveDoc', '3'] },
      ]);
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 3) {
        scene.img('images/characters/city/gala/slave/doctorEx.jpg');
        scene.text('You relunctantly undress and get into the chair. Why did Gala bring you here? You could have had an examination by your regular gynecologist.');
        scene.text('"Please tell your slave to hold still. This is for her own safety."');
        scene.text('Gala waves her hand at you, signaling you that she expects you to follow the nurses commands.');
        scene.text('The nurse then secures you in place using some leather straps and ropes. She then steps behind you.');
        scene.text('"Mistress Gala, this is really nice…"');
        scene.text('You are cut short by a ballgag being pushed into your mouth. The nurse secures it in place, then steps back.');
        scene.text('"I will inform the doctor that you are ready for him."');
        scene.text('She leaves the room.');
        (s as any).minut = ((s as any).minut ?? 0) + (2);
        qspCall(s, 'stat', '');
        scene.actions([
          { label: 'Wait', goto: ['nichGala', 'slaveDoc', '4'] },
        ]);
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 4) {
          scene.img('images/characters/city/gala/slave/doctorGre.jpg');
          scene.text('A few minutes later a middle-aged man enters the room. He must be the doctor. The nurse follows him.');
          scene.text('The doctor goes over to Gala and shakes her hand.');
          scene.text('"Greetings. My name is Dr. Alexeev. And you must be Mrs. Polyakov. I am glad we finally meet in person."');
          scene.text('Gala and the doctor exchange some courtesy. Then he directs his attention at you.');
          scene.text('"Now let us see what we have here."');
          scene.text('He grabs a stool and places himself right between your legs. Then he begins examining your genitals.');
          (s as any).minut = ((s as any).minut ?? 0) + (10);
          qspCall(s, 'stat', '');
          scene.actions([
            { label: 'Next', goto: ['nichGala', 'slaveDoc', '5'] },
          ]);
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 5) {
            scene.img('images/characters/city/gala/slave/doctorEx.jpg');
            scene.text('The doctor probes you with various tools and also takes a blood sample.');
            if ((!((s as any).Venera ?? 0))) {
              scene.text('"Good news. It appears as if your slave is healthy."');
            } else {
              scene.text('"I am afraid I have bad news. Your slave has a STD. I have the cure for it here. But it isn\'t cheap. Buying a new slave might be cheaper."');
              scene.text('"I don\'t care about the money. Just do it."');
              scene.text('The doctor nods and tells the nurse to prepare everything. When she returns she administers several shots to your genitals.');
              scene.text('"This should cure her soon."');
              qspCall(s, 'medical_din', 'healSTDs');
              (s as any).minut = ((s as any).minut ?? 0) + 10;
            }
            scene.text('');
            if (((s as any).pcs_vag ?? 0) > 15) {
              scene.text('"I noticed that your slave had her vagina stretched very much. I could shrink it a little. Maybe you might have fun training her again."');
              scene.text('"Sure, that sounds like a wonderful idea."');
              scene.text('The doctor takes a syringe and administers a shot into your vagina. It starts to contract painfully.');
              scene.text('After about five minutes the pain is nearly gone. The doctor probes you again.');
              scene.text('"Good, she is way tighter now."');
              (s as any).pcs_vag = 8;
              (s as any).minut = ((s as any).minut ?? 0) + 10;
            }
            (s as any).minut = ((s as any).minut ?? 0) + (10);
            qspCall(s, 'stat', '');
            scene.actions([
              { label: 'Next', goto: ['nichGala', 'slaveDoc', '6'] },
            ]);
          } else {
            if (String((s as any).locArgs?.[1] ?? '') === 6) {
              if ((!((s as any).preg ?? 0))) {
                qspGoto(s, 'nichGala', 'slaveDoc', '8');
              }
              scene.img('images/characters/city/gala/slave/doctorEx.jpg');
              scene.text('The doctor points at your belly.');
              if (((s as any).pregChem ?? 0) > 4000) {
                scene.text('"You know that your slave is pregnant? Of course you do, it is fairly obvious."');
              } else {
                scene.text('"You know that your slave is pregnant?"');
              }
              scene.text('"Do you want me to do something about it?"');
              if (((s as any).pregChem ?? 0) >= 1863) {
                scene.text('"Isn\'t it too late for this?"');
                scene.text('"It isn\'t too late for me if it isn\'t too late for you."');
              }
              scene.text('"Fine. I need her full attention. She can\'t be distracted by a kid. She is too young for one anyways."');
              scene.text('She comes over to you and pets your head.');
              scene.text('"You will understand that that\'s the best for you in time."');
              if (((s as any).nichCheat ?? 0) > 0) {
                scene.actions([
                  { label: 'Cheat: Stay pregnant', goto: ['nichGala', 'slaveDoc', '8'] },
                ]);
              }
              scene.actions([
                { label: 'Next', goto: ['nichGala', 'slaveDoc', '7'] },
              ]);
            } else {
              if (String((s as any).locArgs?.[1] ?? '') === 7) {
                scene.img('images/characters/city/gala/slave/doctorEx.jpg');
                if (((s as any).knowpreg ?? 0) === 1) {
                  scene.text('You watch in horror as the nurse prepares everything to end your pregnancy. They are seriously going to kill your baby!');
                } else {
                  scene.text('You watch the nurse prepare everything to end your pregnancy. You didn\'t know that you were pregnant until know and therefore you are not quite sure what to think about this procedure.');
                }
                scene.text('You get a shot to sedate your lower body. You can\'t see what is going on and you can\'t feel anything.');
                scene.text('After about half an hour the doctor announces that he is finished.');
                if (((s as any).pregChem ?? 0) > 4000) {
                  scene.text('To your surprise your belly is already deflated as if you were never pregnant in the first place.');
                }
                qspCall(s, 'medical_din', 'abortion');
                (s as any).minut = ((s as any).minut ?? 0) + (30);
                qspCall(s, 'stat', '');
                scene.actions([
                  { label: 'Next', goto: ['nichGala', 'slaveDoc', '8'] },
                ]);
              } else {
                if (String((s as any).locArgs?.[1] ?? '') === 8) {
                  scene.img('images/characters/city/gala/slave/doctorEx.jpg');
                  scene.text('The doctor gives you another shot, this time into your left arm.');
                  scene.text('"This will make sure she doesn\'t get pregnant in the future. It\'s a standard formula which is also used at more traditional medical institutes."');
                  qspCall(s, 'medical_din', 'birthControlShot');
                  (s as any).minut = ((s as any).minut ?? 0) + (5);
                  qspCall(s, 'stat', '');
                  scene.actions([
                    { label: 'Next', goto: ['nichGala', 'slaveDoc', '9'] },
                  ]);
                } else {
                  if (String((s as any).locArgs?.[1] ?? '') === 9) {
                    scene.img('images/characters/city/gala/slave/doctorImpl.jpg');
                    scene.text('"I believe you were also interested in my little pet project?"');
                    scene.text('"Yes, that\'s right. Although I am still not completely sure what it is about."');
                    scene.text('"Well, basically it is a way to teach your slave to stay chaste. Some owners prefer a chastity belt but I always found them to be quite inconvenient. They have to be cleaned regularly and you always have to mind about the key."');
                    scene.text('He takes out a tiny metal contraption and shows it to Gala.');
                    scene.text('"This little thing is a sensor I invented. I will insert it into the slaves pussy. There it will record anytime the slave has someone or something enter her. You can then easily check when and where it happened. You can use your phone for this, it can connect to the sensor wirelessly."');
                    scene.text('"Sounds like a great idea. Does it has to be recharged at some point?"');
                    scene.text('"No. It generates power by using the natural body movements of the slave. And the gold plating I used makes sure that it can stay in there forever."');
                    scene.text('Gala nods and the doctor gets down between your legs again. You feel his hand entering you and then a short stitching pain as he secures the sensor in place.');
                    scene.text('"Okay, slave. I will whitelist my apartment so I won\'t get notified every time you get fucked by me or my guests. But if the sensor triggers somewhere else without my permission I will punish you severely."');
                    scene.text('You are shocked. This type of surveillance will rob you of an important part of your privacy.');
                    (s as any).nichGalaImplant = 1;
                    (s as any).nichGalaImplantCount = 0;
                    (s as any).nichGalaImplantDay = ((s as any).daystart ?? 0);
                    (s as any).minut = ((s as any).minut ?? 0) + (10);
                    qspCall(s, 'stat', '');
                    scene.actions([
                      { label: 'Next', goto: ['nichGala', 'slaveDoc', '10'] },
                    ]);
                  } else {
                    if (String((s as any).locArgs?.[1] ?? '') === 10) {
                      scene.img('images/characters/city/gala/slave/doctorGre.jpg');
                      scene.text('"Could I do something else for you? Maybe breast implants for your slave?"');
                      scene.text('"No, thank you. I think that\'s enough for today."');
                      scene.text('"Are you sure? We also have some psychological programs to offer."');
                      scene.text('"Thank you, but not today."');
                      scene.text('"Very well. Then I have one last thing for you."');
                      scene.text('He hands Gala a black and a red card. The black one has her face on it, the red one yours.');
                      scene.text('"Give them to the guards and they will let you pass."');
                      scene.text('He says his goodbyes and leaves the room. The nurse unties you and you put your clothes back on.');
                      scene.text('She leads Gala and you back to the entrance. Gala hands one of the guards the two cards. After a close inspection he lets you pass.');
                      scene.text('Outside Gala turns to you.');
                      scene.text('"Well done, slave. I know that it might not be easy for you to except the changes I had the doctor perform on you. But that\'s your life now. Since you are such an obedient little slut I will tell my husband that you helped me with something important today, so he won\'t expect you to work til tomorrow."');
                      scene.text('The two of you climb back into the car. The drive back home is rather uneventful.');
                      qspCall(s, 'nichUtil', 'freeDay');
                      (s as any).nichGalaDoc = 1;
                      (s as any).minut = ((s as any).minut ?? 0) + (5);
                      qspCall(s, 'stat', '');
                      scene.actions([
                        { label: 'Back home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
  }, goto: ['nichApartment', ''] },
                      ]);
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
  scene.build();
}

function enterSlaveImplant(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 0) {
    if ((!((s as any).nichGalaImplantLevel ?? 0))) {
      qspGoto(s, 'nichGala', 'slaveImplant', '1');
    } else {
      (s as any).nichGalaTxt = 'Gala pulls you by your hair. She is obviously angry with you.';
      (s as any).nichTempDayDifference = ((s as any).daystart ?? 0) - ((s as any).nichGalaImplantDay ?? 0);
      if (((s as any).nichTempDayDifference ?? 0) <= 4) {
        // TODO-QSP: $nichGalaTxt += '"Seriously, slave? Did you forget your last punishment already? I told you not to w...
        (s as any).nichGalaImplantLevel = Math.min(((s as any).nichGalaImplantLevel ?? 0)+1, 3);
      } else {
        if (((s as any).nichTempDayDifference ?? 0) <= 14) {
          // TODO-QSP: $nichGalaTxt += '"Stupid slave bitch. You can''t even walk around for two weeks without offering you...
        } else {
          // TODO-QSP: $nichGalaTxt += '"You naughty little bitch. I told you not to whore around the city. At least you ma...
          (s as any).nichGalaImplantLevel = Math.max(((s as any).nichGalaImplantLevel ?? 0)-1, 1);
        }
      }
      if (((s as any).nichGalaImplantLevel ?? 0) === 1) {
        qspGoto(s, 'nichGala', 'slaveImplant', '10');
      } else {
        if (((s as any).nichGalaImplantLevel ?? 0) === 2) {
          qspGoto(s, 'nichGala', 'slaveImplant', '50');
        } else {
          if (((s as any).nichGalaImplantLevel ?? 0) === 3) {
            if ((!((s as any).nichGalaTattoo ?? 0))) {
              qspGoto(s, 'nichGala', 'slaveImplant', '100');
            } else {
              qspGoto(s, 'nichGala', 'slaveImplant', '120');
            }
          }
        }
      }
    }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 1) {
      scene.img('images/characters/city/gala/slave/dildo2.jpg');
      scene.text('Gala pulls you by your hair. She leads you to your room.');
      scene.text('"You little skank. Did you forget that I monitor your sexual activity? Or do you just don\'t care?"');
      scene.text('She forces you to undress. Then she ties your wrists together and forces you to the ground.');
      scene.text('"This will satisfy your cock-hungry pussy."');
      scene.text('She forces a big black dildo into your vagina.');
      scene.text('"Oh, and just to be sure…"');
      scene.text('She pushes another big dildo into your ass. Then she starts fucking you furiously with both of them.');
      qspCall(s, 'arousal', 'vaginal_dildo', 10, 'bound', 'rough', 'lesbian');
      qspCall(s, 'arousal', 'anal_dildo', (-10), 'bound', 'rough', 'lesbian');
      qspCall(s, 'arousal', 'end');
      scene.text('After she is done she pulls the dildos out roughly and throws them onto your bed.');
      scene.text('"Let this be a warning. I went soft on you because this was your first offense. Next time you will experience a real punishment."');
      scene.text('She unties your wrists and leaves you alone.');
      (s as any).nichGalaImplantCount = 0;
      (s as any).nichGalaImplantDay = ((s as any).daystart ?? 0);
      (s as any).nichGalaImplantLevel = 1;
      scene.actions([
        { label: 'Continue', goto: ['nichBedroomServant', ''] },
      ]);
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 10) {
        // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/characters/city/gala/slave/whipped'+rand...
        scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/characters/city/gala/slave/whipped` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
        // TODO-QSP: dynamic text: <<$nichGalaTxt>>
        scene.text(`${((s as any).nichGalaTxt ?? '')}`);
        scene.text('She leads you to your room. There she makes you undress. Once you are naked she ties you up.');
        scene.text('"I will make sure you remember that you might carry your pussy around but that it is my property."');
        scene.text('She starts whipping you, paying careful attention to hitting your breasts and your vagina.');
        scene.text('After about 15 minutes she unties you and leaves you alone.');
        qspCall(s, 'pain', '7', 'breasts', 'hit');
        qspCall(s, 'pain', '7', 'pubic', 'hit');
        (s as any).nichGalaImplantCount = 0;
        (s as any).nichGalaImplantDay = ((s as any).daystart ?? 0);
        (s as any).minut = ((s as any).minut ?? 0) + 15;
        qspCall(s, 'stat', '');
        scene.actions([
          { label: 'Continue', goto: ['nichBedroomServant', ''] },
        ]);
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 50) {
          // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/characters/city/gala/slave/cane'+rand(1,...
          scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/characters/city/gala/slave/cane` + (Math.floor(Math.random() * 3) + 1) + '.jpg"></center>');
          // TODO-QSP: dynamic text: <<$nichGalaTxt>>
          scene.text(`${((s as any).nichGalaTxt ?? '')}`);
          scene.text('She leads you up to the attic. There she makes you undress. Once you are naked she ties you up.');
          scene.text('"Don\'t forget that you brought that onto yourself."');
          scene.text('She starts canning your butt furiously. You are quickly reduced to a sobbing mess but she won\'t stop.');
          scene.text('Only when you are so exhausted from screaming that you can\'t get out another tone she finally stops.');
          scene.text('"You think it\'s over? Guess again. I will give you time to think about your failures."');
          scene.text('She leaves you alone. With your tight restraints and your ass still burning like hell you don\'t dare moving too much.');
          scene.text('Gala returns about two hours later. Without another word she grabs her cane again and continues hitting you. Once again you are back to screaming and begging.');
          scene.text('Once she is finally done you doubt that you will ever be able to sit without extreme pain again.');
          scene.text('"Don\'t forget this lesson, slave."');
          scene.text('She unties you and then leaves you alone. You have quite some troubles putting your clothes back on, since even the softest touch feels like molten metal.');
          ((s as any).pain = (s as any).pain ?? {})['asscheeks'] = 100;
          (s as any).nichGalaImplantCount = 0;
          (s as any).nichGalaImplantDay = ((s as any).daystart ?? 0);
          (s as any).minut = ((s as any).minut ?? 0) + 120;
          if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
            (s as any).pcs_makeup = 0;
          }
          qspCall(s, 'stat', '');
          scene.actions([
            { label: 'Continue', goto: ['nichApartment', ''] },
          ]);
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 100) {
            // TODO-QSP: dynamic text: <<$nichGalaTxt>>
            scene.text(`${((s as any).nichGalaTxt ?? '')}`);
            scene.text('She leads you outside the house and to her car. She has her driver drive you to a tattoo studio.');
            scene.text('"I will make sure everybody knows what you are."');
            (s as any).minut = ((s as any).minut ?? 0) + 15;
            (s as any).nichGalaImplantCount = 0;
            (s as any).nichGalaImplantDay = ((s as any).daystart ?? 0);
            qspCall(s, 'stat', '');
            scene.actions([
              { label: 'Continue', goto: ['nichGala', 'slaveImplant', '101'] },
            ]);
          } else {
            if (String((s as any).locArgs?.[1] ?? '') === 101) {
              (s as any).nichTempOverwrite = 0;
              if (((s as any).pcs_tattoos ?? 0)?.['pussy'] <= 0) {
                qspCall(s, 'tattoo_management', 'add', 'pussy', 47);
                scene.img(`${qspFunc(s, 'tattoo_management', 'pussy_image')}`);
              } else {
                if (((s as any).pcs_tattoos ?? 0)?.['ass'] <= 0) {
                  qspCall(s, 'tattoo_management', 'add', 'ass', 19);
                  scene.img(`${qspFunc(s, 'tattoo_management', 'ass_image')}`);
                } else {
                  if (((s as any).pcs_tattoos ?? 0)?.['leg'] <= 0) {
                    qspCall(s, 'tattoo_management', 'add', 'leg', 37);
                    scene.img(`${qspFunc(s, 'tattoo_management', 'leg_image')}`);
                  } else {
                    if (((s as any).pcs_tattoos ?? 0)?.['tramp'] <= 0) {
                      qspCall(s, 'tattoo_management', 'add', 'tramp', 13);
                      scene.img(`${qspFunc(s, 'tattoo_management', 'tramp_image')}`);
                    } else {
                      qspCall(s, 'tattoo_management', 'add', 'tramp', 13);
                      scene.img(`${qspFunc(s, 'tattoo_management', 'tramp_image')}`);
                      (s as any).nichTempOverwrite = 1;
                    }
                  }
                }
              }
              scene.text('Gala leads you to the back of the studio. There she tells you to get naked.');
              scene.text('Once the tattoo artist arrives Gala tells him to give a demeaning tattoo. He asks you whether you want this as well and you just nod.');
              if (((s as any).nichTempOverwrite ?? 0) === 1) {
                scene.text('He starts inspecting your body. But since you already own numerous tattoos he doesn\'t find the perfect spot to add the new one.');
                scene.text('Then Gala spins you around and points at your back.');
                scene.text('"Just tattoo over her tramp stamp."');
              }
              scene.text('The artist starts his work and about an hour later he is done. Gala inspects his work.');
              scene.text('She is obviously happy with what he did and pays him a little extra before heading back home with you.');
              (s as any).nichGalaTattoo = 1;
              (s as any).minut = ((s as any).minut ?? 0) + 60;
              qspCall(s, 'stat', '');
              scene.actions([
                { label: 'Back home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['nichApartment', ''] },
              ]);
            } else {
              if (String((s as any).locArgs?.[1] ?? '') === 120) {
                scene.img('images/characters/city/gala/slave/pubhum1x1.jpg');
                // TODO-QSP: dynamic text: <<$nichGalaTxt>>
                scene.text(`${((s as any).nichGalaTxt ?? '')}`);
                scene.text('She leads you outside the house and to her car. She has her driver drive you to the bar of a biker gang outside the city.');
                scene.text('The bar is filled with people, both men and women. Gala pushes you to the middle of the room. You feel like all eyes are set on you.');
                scene.text('"Undress!"');
                scene.text('You can\'t believe what Gala just said. She wants you to get naked in front of all these people!');
                scene.text('"Undress! Now!"');
                scene.text('You reluctantly put your clothes off. Once you are done Gala grabs you by your chin and forces you down to your knees. She starts whispering into your ear.');
                scene.text('"You want your slut-holes filled? Then that\'s what you get. Hopefully you will have enough of this once I come back and pick you up. Now you will stand up and tell these good people that you are a bad little slut and that you need to be punished."');
                (s as any).minut = ((s as any).minut ?? 0) + 30;
                qspCall(s, 'stat', '');
                scene.actions([
                  { label: 'Obey', goto: ['nichGala', 'slaveImplant', '121'] },
                ]);
              } else {
                if (String((s as any).locArgs?.[1] ?? '') === 121) {
                  scene.img('images/characters/city/gala/slave/pubhum1x2.jpg');
                  scene.text('You clear your voice. By now everybody is starring at you. With uncertain voice you tell them what Gala wanted you to say: that you are a dirty slut and that you need punishment.');
                  scene.text('Gala grins and leaves the bar.');
                  scene.text('It doesn\'t take long before the first woman walks up to you, bends you over and starts whipping your ass. Clearly enjoying herself she encourages the other guests to follow her example.');
                  (s as any).minut = ((s as any).minut ?? 0) + 5;
                  qspCall(s, 'pain', '3', 'asscheeks', 'hit');
                  qspCall(s, 'stat', '');
                  scene.actions([
                    { label: 'Continue', goto: ['nichGala', 'slaveImplant', '121 + rand(1, 2)'] },
                  ]);
                } else {
                  if (String((s as any).locArgs?.[1] ?? '') === 122) {
                    qspCall(s, 'npcgeneratec', '0', 'Some biker', 0, (Math.floor(Math.random() * 2) + 3), 1);
                    qspCall(s, 'npcStat', '$npclastgenerated');
                    scene.img('images/characters/city/gala/slave/pubhum1x3.jpg');
                    scene.text('Next in line is a couple. The guy pushes you down to your knees and forces his dick into your mouth.');
                    scene.text('The girl pushes your head from behind to force her boyfriends cock further down your throat.');
                    scene.text('"It\'s so hot seeing you skullfucking this bitch. I think we should come here more often."');
                    qspCall(s, 'arousal', 'bj', 5, 'exhibitionism', 'humiliation', 'deepthroat', 'unknown', 'bound', 'group');
                    scene.text('After some minutes the guy comes in your mouth and forces you to swallow his cum while kissing his girlfriend.');
                    scene.text('Once he is limp again he kicks you away.');
                    qspCall(s, 'cum_call', 'mouth', ((s as any).npcID ?? 0), 0);
                    qspCall(s, 'stat', '');
                    scene.actions([
                      { label: 'Continue', goto: ['nichGala', 'slaveImplant', '122 + rand(1, 2)'] },
                    ]);
                  } else {
                    if (String((s as any).locArgs?.[1] ?? '') === 123) {
                      qspCall(s, 'npcgeneratec', '0', 'Some biker', 0, (Math.floor(Math.random() * 2) + 3), 1);
                      qspCall(s, 'npcStat', '$npclastgenerated');
                      scene.img('images/characters/city/gala/slave/pubhum1x4.jpg');
                      scene.text('Next comes a guy who bends you over without saying a word and starts ramming is dick into your ass.');
                      scene.text('His friends stand around you cheering at him.');
                      scene.text('"Hey, lets use this."');
                      scene.text('One of them pushes a bottle into your vagina while is buddy continues grinding into you.');
                      qspCall(s, 'arousal', 'anal', 5, 'exhibitionism', 'humiliation', 'unknown', 'bound', 'group');
                      scene.text('Just before he is about to come the guy pulls out of you and sprays his cum at your back.');
                      qspCall(s, 'cum_call', 'back', ((s as any).npcID ?? 0), 0);
                      qspCall(s, 'stat', '');
                      scene.actions([
                        { label: 'Continue', goto: ['nichGala', 'slaveImplant', '123 + rand(1, 2)'] },
                      ]);
                    } else {
                      if (String((s as any).locArgs?.[1] ?? '') === 124) {
                        qspCall(s, 'npcgeneratec', '1', 'Some biker girl', 0, (Math.floor(Math.random() * 2) + 3), 1);
                        qspCall(s, 'npcStat', '$npclastgenerated');
                        scene.img('images/characters/city/gala/slave/pubhum1x5.jpg');
                        scene.text('A girl steps right in front of you and pulls down her top.');
                        scene.text('Being pushed down by one of her friends she forces you to suck on her breasts.');
                        scene.text('"This feels amazing, you should try that as well."');
                        qspCall(s, 'arousal', 'kiss', 5, 'exhibitionism', 'humiliation', 'unknown', 'bound', 'group', 'lesbian');
                        qspCall(s, 'stat', '');
                        scene.actions([
                          { label: 'Continue', goto: ['nichGala', 'slaveImplant', '124 + rand(1, 2)'] },
                        ]);
                      } else {
                        if (String((s as any).locArgs?.[1] ?? '') === 125) {
                          qspCall(s, 'npcgeneratec', '0', 'Married guy', 45 + (Math.floor(Math.random() * 11) + 0), (Math.floor(Math.random() * 2) + 3), 1);
                          qspCall(s, 'npcStat', '$npclastgenerated');
                          qspCall(s, 'npcgeneratec', '1', 'Married woman', 45 + (Math.floor(Math.random() * 11) + 0), (Math.floor(Math.random() * 2) + 3), 1);
                          qspCall(s, 'npcStat', '$npclastgenerated', 'a');
                          qspCall(s, 'npcStat', 'D4', 'b');
                          scene.img('images/characters/city/gala/slave/pubhum1x6.jpg');
                          scene.text('A married couple, about 50 years old, is next. They force you down on a table.');
                          scene.text('The man forces his dick into the mouth while the woman starts fucking your pussy with a strapon provided by the barkeeper.');
                          scene.text('It doesn\'t take long before a random bystander starts to use a vibrator on your clit as well.');
                          qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID ?? 0), 'exhibitionism', 'humiliation', 'deepthroat', 'unknown', 'bound', 'group');
                          qspCall(s, 'arousal', 'vaginal_strap', (-5), ((s as any).npcID1 ?? 0), ((s as any).npcID2 ?? 0), 'exhibitionism', 'humiliation', 'unknown', 'bound', 'group');
                          scene.text('After a few minutes the couple leaves for the bathroom, announcing that you are free for the next person to use.');
                          qspCall(s, 'stat', '');
                          scene.actions([
                            { label: 'Continue', goto: ['nichGala', 'slaveImplant', '125 + rand(1, 2)'] },
                          ]);
                        } else {
                          if (String((s as any).locArgs?.[1] ?? '') === 126) {
                            qspCall(s, 'npcgeneratec', '0', 'A biker barkeep', 0, (Math.floor(Math.random() * 2) + 3), 1);
                            qspCall(s, 'npcStat', '$npclastgenerated');
                            qspCall(s, 'npcgeneratec', '1', 'Barkeep\'s girlfriend', 45 + (Math.floor(Math.random() * 11) + 0), (Math.floor(Math.random() * 2) + 3), 1);
                            qspCall(s, 'npcStat', '$npclastgenerated', 'a');
                            scene.img('images/characters/city/gala/slave/pubhum1x7.jpg');
                            scene.text('The barkeeper is next. While his girlfriend uses a vibrator on your vagina he roughly fucks your ass.');
                            qspCall(s, 'arousal', 'anal', 5, ((s as any).npcID ?? 0), 'exhibitionism', 'humiliation', 'unknown', 'bound', 'group');
                            qspCall(s, 'arousal', 'vaginal_vibe', (-5), ((s as any).npcID1 ?? 0), 'exhibitionism', 'humiliation', 'unknown', 'bound', 'group');
                            scene.text('He cums after a few minutes. After he is done he smacks your butt.');
                            scene.text('"Feel free to come here any time."');
                            qspCall(s, 'cum_call', 'anus', ((s as any).npcID ?? 0), 0);
                            qspCall(s, 'stat', '');
                            scene.actions([
                              { label: 'Continue', goto: ['nichGala', 'slaveImplant', '126 + rand(1, 2)'] },
                            ]);
                          } else {
                            if (String((s as any).locArgs?.[1] ?? '') === 127) {
                              qspCall(s, 'npcgeneratec', '1', 'Rocker\'s girl', ((s as any).age ?? 0) + (Math.floor(Math.random() * 2) + 0), (Math.floor(Math.random() * 2) + 3), 1);
                              qspCall(s, 'npcStat', '$npclastgenerated');
                              scene.img('images/characters/city/gala/slave/pubhum1x8.jpg');
                              scene.text('An old rocker steps next to you. He is accompanied by a girl who is about your age.');
                              scene.text('"I know exactly what bitches like this one need."');
                              scene.text('He pushes you onto a table. Then he instructs the girl next to you to shove her whole fist into you and fuck you with it.');
                              qspCall(s, 'arousal', 'anal_fist', 5, 'exhibitionism', 'humiliation', 'unknown', 'bound', 'group', 'lesbian');
                              scene.text('After a few minutes the man and the girl start kissing, forgetting all about you.');
                              qspCall(s, 'stat', '');
                              scene.actions([
                                { label: 'Continue', goto: ['nichGala', 'slaveImplant', '127 + rand(1, 2)'] },
                              ]);
                            } else {
                              if (String((s as any).locArgs?.[1] ?? '') === 128) {
                                scene.img('images/characters/city/gala/slave/pubhum1x9.jpg');
                                scene.text('There is nobody else waiting for you. Therefore the barkeepers girlfriend pushes you to the ground and ties you into a painful hogtie.');
                                scene.text('You stay on the ground for nearly an hour. Sometimes a guest spits at you or gives you a kick, but they seem to be mostly done with you.');
                                (s as any).minut = ((s as any).minut ?? 0) + 60;
                                qspCall(s, 'stat', '');
                                scene.actions([
                                  { label: 'Continue', goto: ['nichGala', 'slaveImplant', '129'] },
                                ]);
                              } else {
                                if (String((s as any).locArgs?.[1] ?? '') === 129) {
                                  scene.img('images/characters/city/gala/slave/pubhum1x10.jpg');
                                  scene.text('Finally Gala returns. The barkeepers girlfriend removes your restraints for her.');
                                  scene.text('"If you ever have enough of your slut just tell us. She is a great entertainment for our guests."');
                                  scene.text('Gala just nods. She waits for you to dress again, then the both of you drive back to the apartment.');
                                  (s as any).nichGalaImplantCount = 0;
                                  (s as any).nichGalaImplantDay = ((s as any).daystart ?? 0);
                                  scene.actions([
                                    { label: 'Back home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
  }, goto: ['nichApartment', ''] },
                                  ]);
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
  scene.build();
}

function enterSlaveGeneric(s: GameState, scene: SceneBuilder): void {
  if (((s as any).nichGalaContractTaras ?? 0) === 0  &&  ((s as any).nichGalaContractDay ?? 0) + 14 <= ((s as any).daystart ?? 0)) {
    qspGoto(s, 'nichGala', 'slaveTarasIntro');
  }
  (s as any).nichRand = (Math.floor(Math.random() * 10) + 1);
  (s as any).nichGalaContractLast = ((s as any).daystart ?? 0);
  if (((s as any).nichRand ?? 0) === 1  &&  ((s as any).pcs_cupsize ?? 0) > 15) {
    scene.img('images/characters/city/gala/slave/bound6.jpg');
    scene.text('Gala leads you up to the attic. There ties your ankles together and secures your hands behind your back.');
    scene.text('Then she tightly bind your breasts to a rope which she pulls up. You are hanging by your breasts only.');
    scene.text('The pain is intense and you can\'t help but scream. It feels as if your breasts are ripped off.');
    scene.text('Gala grins and circles you from time to time, smacking your butt each time.');
    scene.text('Finally she lets you down and orders you to put your clothes back on.');
    qspCall(s, 'pain', '8', 'breasts', 'bind');
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Downstairs', goto: ['nichApartment', ''] },
    ]);
  } else {
    if (((s as any).nichRand ?? 0) <= 6) {
      // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/characters/city/gala/slave/bound'+rand(1...
      scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/characters/city/gala/slave/bound` + (Math.floor(Math.random() * 5) + 1) + '.jpg"></center>');
      scene.text('Gala leads you up to the attic. There she restrains you in an incredibly uncomfortable position.');
      scene.text('She grins as you try moving your muscles and shifting your weight only to find that you\'ve gotten into an even more uncomfortable position.');
      scene.text('After watching you for half an hour Gala leaves you alone. It takes more than an hour before she returns.');
      scene.text('When she does she pets your head.');
      scene.text('"See what a nice Mistress I am? I let you relax while others would make you work."');
      scene.text('She frees you and you put your clothes back on.');
      (s as any).minut = ((s as any).minut ?? 0) + 120;
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Downstairs', goto: ['nichApartment', ''] },
      ]);
    } else {
      if (((s as any).nichRand ?? 0) <= 8) {
        // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/characters/city/gala/slave/whipped'+rand...
        scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/characters/city/gala/slave/whipped` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
        scene.text('Gala leads you to her bedroom. There she makes you undress, ties you up and takes out her whip.');
        qspCall(s, 'pain', '3', 'tummy', 'hit');
        (s as any).minut = ((s as any).minut ?? 0) + 15;
        qspCall(s, 'stat', '');
        scene.text('For about 15 minutes she whips you and calls you degrading names before finally releasing you.');
        scene.actions([
          { label: 'Downstairs', goto: ['nichApartment', ''] },
        ]);
      } else {
        // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/characters/city/gala/slave/restrained'+r...
        scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/characters/city/gala/slave/restrained` + (Math.floor(Math.random() * 3) + 1) + '.jpg"></center>');
        scene.text('Gala leads you up to the attic. There she makes you undress.');
        scene.text('Then she ties you to some kind of metal restraints. They force you into an awkward position.');
        scene.text('"It think you earned yourself a reward, slave."');
        scene.text('She pushes a big vibrator into your vagina and turns it on. You feel its powerful impulses in your whole body.');
        scene.text('"Now open your other slut hole."');
        scene.text('She pushes a dildo gag into your mouth. It fills your mouth almost completely. She locks it in place. You try pushing it with your tongue, but it won\'t move at all.');
        scene.text('"Enjoy, slut!"');
        scene.actions([
          { label: 'Downstairs', goto: ['nichApartment', ''] },
        ]);
      }
    }
  }
  scene.build();
}

function enterSlaveTarasIntro(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 0) {
    scene.img('images/characters/city/gala/slave/taras/intro0.jpg');
    scene.text('Gala leads you up to the attic. You put your clothes off, then she binds you to an old rusty bed and secures a ballgag in your mouth.');
    scene.text('Then she leaves the room. To your surprise she returns a few minutes later with her bodyguard.');
    scene.text('Shocked by this unexpected visitor you instinctively try to cover yourself. But of course that\'s not possible.');
    scene.text('"You know my bodyguard Taras, don\'t you, slave? He is an exceptional employee and his services are constantly exceeding expectations. That\'s why I decided to give him a special reward."');
    scene.text('You are shocked. Can she be serious?');
    scene.text('"Yes, you guessed right. From now on you will serve him as well. He can use you as he sees fit whenever I don\'t require your services."');
    scene.text('"I think it\'s best if the two of you get to know each other."');
    scene.text('You hear her leaving the room.');
    scene.actions([
      { label: 'Continue', goto: ['nichGala', 'slaveTarasIntro', '1'] },
    ]);
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 1) {
      scene.img('images/characters/city/gala/slave/taras/intro1.jpg');
      scene.text('Without saying a word Taras grabs a crop and starts hitting your back with it.');
      scene.text('He expertly administers his strokes to inflict the most pain without leaving any visible damage.');
      qspCall(s, 'pain', '3', 'back', 'spank');
      (s as any).minut = ((s as any).minut ?? 0) + 10;
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Continue', goto: ['nichGala', 'slaveTarasIntro', '2'] },
      ]);
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 2) {
        scene.img('images/characters/city/gala/slave/taras/intro2.jpg');
        scene.text('He steps next to the bed and you feel his hand around your throat.');
        scene.text('"Listen, slut. You better learn to enjoy this. This is your life now."');
        scene.text('He begins squeezing your throat. It becomes hard for you to breath.');
        scene.text('"Are you enjoying it yet?"');
        scene.text('Not knowing what he expects of you, you just look at him with a questioning look in your eyes.');
        scene.text('"I said do you enjoy it?"');
        scene.text('He squeezes your throat a little tighter. Not having another choice you nod your head yes.');
        scene.text('"Do you love what is happening to you."');
        scene.text('His grip is now so tight you will pass out soon. Starting to panic you frantically nod.');
        scene.text('"Well, that is good."');
        scene.text('He loosens his grip a little bit.');
        scene.text('"Do you want me to fuck you then? I have to ask. After all I am no rapist."');
        scene.text('Knowing that he will start choking you again if you decline you can\'t do anything but nod.');
        scene.text('"Of course you do. You are nothing but a dirty slut."');
        qspCall(s, 'pain', '1', 'throat', 'bind');
        (s as any).minut = ((s as any).minut ?? 0) + 5;
        qspCall(s, 'stat', '');
        scene.actions([
          { label: 'Continue', goto: ['nichGala', 'slaveTarasIntro', '3'] },
        ]);
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 3) {
          scene.img('images/characters/city/gala/slave/taras/intro3.jpg');
          scene.text('He pulls down his pants and climbs into the bed. Then he begins to fuck you.');
          scene.text('He pushes into you while holding you tightly by your wrist.');
          qspCall(s, 'cum_call', '', 'A233', 1);
          qspCall(s, 'arousal', 'vaginal', 10, 'bound', 'rough');
          qspCall(s, 'arousal', 'end');
          scene.text('It takes about ten minutes before he finally cums.');
          scene.text('"Well, that was fun. We will repeat that soon. Very soon."');
          scene.text('He puts his pants back on before untying your left wrist so you can remove your other restraints.');
          scene.text('Once you are done removing them Taras is long gone. You put your clothes back on.');
          qspCall(s, 'stat', '');
          (s as any).nichGalaContractTaras = 1;
          (s as any).nichGalaContractTarasLast = ((s as any).daystart ?? 0);
          scene.actions([
            { label: 'Downstairs', goto: ['nichApartment', ''] },
          ]);
        }
      }
    }
  }
  scene.build();
}

function enterTraining(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).nichGalaTrainStage ?? 0))) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if ((!((s as any).nichGalaTrainCounter ?? 0))) {
      scene.text('Gala leads you up to a small room in the attic featuring nothing but an old mirror, a chair and a small table with lots of candles on it.');
      scene.text('"Since this is your first training session I will lay down the ground rules."');
      scene.text('"1. You will talk to nobody about your training."');
      scene.text('"2. During your training you will only speak when spoken to."');
      scene.text('"3. You will be completely naked during your training."');
      scene.text('"Do you understand? Then get naked now!"');
      scene.actions([
        { label: 'I can\'t', handler: (st: GameState) => {
    scene.text('"Sorry, Mistress Gala, but I can\'t. I won\'t feel comfortable."');
    scene.text('She seems to be disappointed. "A pity. You can come back to me if you change your mind."');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspGoto(st, 'nichApartment', '');
  } },
    ]);
  } },
        { label: 'Undress', handler: (st: GameState) => {
    scene.text('"Yes, Mistress Gala."');
    scene.text('"Good girl." She points at the wall next to the door. "Wait over there while I change into something comfortable myself."');
    scene.actions([
      { label: 'Wait', handler: (st: GameState) => {
    (st as any).nichGalaTrainStage = 1;
    qspGoto(st, 'nichGala', 'training');
  } },
    ]);
  } },
      ]);
    } else {
      scene.text('Gala leads you back to the small room in the attic.');
      scene.text('"You know the drill. Get naked!"');
      scene.actions([
        { label: 'Undress and wait', handler: (st: GameState) => {
    (st as any).nichGalaTrainStage = 1;
    qspGoto(st, 'nichGala', 'training');
  } },
      ]);
    }
  } else {
    if (((s as any).nichGalaTrainStage ?? 0) === 1) {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      scene.img('images/characters/city/gala/training/training1.jpg');
      scene.text('When Gala returns she wears some kind of purple fetish wear. Her legs are covered by thigh-highs while her breasts and privates are exposed.');
      scene.text('"Open your mouth, slut!"');
      scene.text('You do as commanded and she pushes a black ballgag behind your lips and locks it behind your head.');
      scene.text('"I don\'t want you to make any sounds. We want this to stay a private session, don\'t we?"');
      scene.text('She also takes a small belt and locks your wrists together.');
      scene.actions([
        { label: 'Further', handler: (st: GameState) => {
    (st as any).nichRand = 0;
    if (((st as any).nichRand ?? 0) === 1) {
      (st as any).nichGalaTrainStage = 10;
    } else {
      (st as any).nichGalaTrainStage = 20;
    }
    qspGoto(st, 'nichGala', 'training');
  } },
      ]);
    } else {
      if (((s as any).nichGalaTrainStage ?? 0) === 10) {
        (s as any).minut = ((s as any).minut ?? 0) + 1;
        scene.img('images/characters/city/gala/training/training36.jpg');
        scene.text('"A maids life is often full of inconveniences and even pain."');
        scene.text('She collects a few clothes pegs from the small table.');
        scene.actions([
          { label: 'Further', handler: (st: GameState) => {
    (st as any).nichGalaTrainStage = 11;
    qspGoto(st, 'nichGala', 'training');
  } },
        ]);
      } else {
        if (((s as any).nichGalaTrainStage ?? 0) === 11) {
          (s as any).minut = ((s as any).minut ?? 0) + 1;
          scene.img('images/characters/city/gala/training/training2.jpg');
          scene.text('"I will help you deal with this."');
          scene.text('Stars massaging your exposed nipples.');
          scene.text('"I will make sure you develop a tolerance for pain."');
          scene.text('With these words she attaches the clothes pegs to your nipples.');
          scene.actions([
            { label: 'Further', handler: (st: GameState) => {
    (st as any).nichRand = 0;
    if (((st as any).nichRand ?? 0) === 1) {
      (st as any).nichGalaTrainStage = 12;
    } else {
      (st as any).nichGalaTrainStage = 20;
    }
    qspGoto(st, 'nichGala', 'training');
  } },
          ]);
        } else {
          if (((s as any).nichGalaTrainStage ?? 0) === 12) {
            (s as any).minut = ((s as any).minut ?? 0) + 1;
            scene.img('images/characters/city/gala/training/training42.jpg');
            scene.text('"You should be glad it\'s me who is training you. Other trainers would go slow on you, but I believe in quick progress."');
            scene.text('She attaches the other two clothes pegs to your labia and pulls them a few times, making sure they rest painfully.');
            scene.actions([
              { label: 'Further', handler: (st: GameState) => {
    (st as any).nichGalaTrainStage = 20;
    qspGoto(st, 'nichGala', 'training');
  } },
            ]);
          } else {
            if (((s as any).nichGalaTrainStage ?? 0) === 20) {
              (s as any).minut = ((s as any).minut ?? 0) + 1;
              scene.img('images/characters/city/gala/training/training37.jpg');
              scene.actions([
                { label: 'Further', handler: (st: GameState) => {
    (st as any).nichGalaTrainStage = 21;
    qspGoto(st, 'nichGala', 'training');
  } },
              ]);
            } else {
              if (((s as any).nichGalaTrainStage ?? 0) === 21) {
                (s as any).minut = ((s as any).minut ?? 0) + 1;
                scene.img('images/characters/city/gala/training/training39.jpg');
                scene.actions([
                  { label: 'Further', handler: (st: GameState) => {
    (st as any).nichRand = 0;
    if (((st as any).nichRand ?? 0) === 1) {
      (st as any).nichGalaTrainStage = 22;
    } else {
      if (((st as any).nichRand ?? 0) === 2) {
        (st as any).nichGalaTrainStage = 23;
      } else {
        (st as any).nichGalaTrainStage = 30;
      }
    }
    qspGoto(st, 'nichGala', 'training');
  } },
                ]);
              } else {
                if (((s as any).nichGalaTrainStage ?? 0) === 22) {
                  (s as any).minut = ((s as any).minut ?? 0) + 1;
                  scene.img('images/characters/city/gala/training/training45.jpg');
                  scene.actions([
                    { label: 'Further', handler: (st: GameState) => {
    (st as any).nichGalaTrainStage = 40;
    qspGoto(st, 'nichGala', 'training');
  } },
                  ]);
                } else {
                  if (((s as any).nichGalaTrainStage ?? 0) === 23) {
                    (s as any).minut = ((s as any).minut ?? 0) + 1;
                    scene.img('images/characters/city/gala/training/training14.jpg');
                    scene.actions([
                      { label: 'Further', handler: (st: GameState) => {
    (st as any).nichGalaTrainStage = 40;
    qspGoto(st, 'nichGala', 'training');
  } },
                    ]);
                  } else {
                    if (((s as any).nichGalaTrainStage ?? 0) === 30) {
                      (s as any).minut = ((s as any).minut ?? 0) + 1;
                      scene.img('images/characters/city/gala/training/training46.jpg');
                      scene.actions([
                        { label: 'Further', handler: (st: GameState) => {
    (st as any).nichRand = 0;
    if (((st as any).nichRand ?? 0) === 1) {
      (st as any).nichGalaTrainStage = 31;
    } else {
      (st as any).nichGalaTrainStage = 40;
    }
    qspGoto(st, 'nichGala', 'training');
  } },
                      ]);
                    } else {
                      if (((s as any).nichGalaTrainStage ?? 0) === 31) {
                        (s as any).minut = ((s as any).minut ?? 0) + 1;
                        scene.img('images/characters/city/gala/training/training47.jpg');
                        scene.actions([
                          { label: 'Further', handler: (st: GameState) => {
    (st as any).nichRand = 0;
    if (((st as any).nichRand ?? 0) === 1) {
      (st as any).nichGalaTrainStage = 32;
    } else {
      (st as any).nichGalaTrainStage = 40;
    }
    qspGoto(st, 'nichGala', 'training');
  } },
                        ]);
                      } else {
                        if (((s as any).nichGalaTrainStage ?? 0) === 32) {
                          (s as any).minut = ((s as any).minut ?? 0) + 1;
                          scene.img('images/characters/city/gala/training/training13.jpg');
                          scene.actions([
                            { label: 'Further', handler: (st: GameState) => {
    (st as any).nichGalaTrainStage = 40;
    qspGoto(st, 'nichGala', 'training');
  } },
                          ]);
                        } else {
                          if (((s as any).nichGalaTrainStage ?? 0) === 40) {
                            (s as any).minut = ((s as any).minut ?? 0) + 1;
                            scene.img('images/characters/city/gala/training/training38.jpg');
                            (s as any).nichRand = (Math.floor(Math.random() * 5) + 1);
                            if (((s as any).nichGalaTrainCounter ?? 0) < 4  ||  ((s as any).nichRand ?? 0) === 1) {
                              scene.text('"I think this was enough for today."');
                              scene.text('She removes your restraints.');
                              scene.text('"You can get back to work now."');
                              (s as any).nichEvalGala = 1;
                              qspGoto(s, 'nichGala', 'trainingEnd');
                            } else {
                              if (((s as any).nichRand ?? 0) === 2) {
                                scene.text('"You are a good little girl. I think you earned yourself a reward."');
                                (s as any).nichGalaTrainStage = 50;
                              } else {
                                if (((s as any).nichRand ?? 0) === 3) {
                                  scene.text('"You are a good little girl. I think you earned yourself a reward."');
                                  (s as any).nichGalaTrainStage = 51;
                                } else {
                                  if (((s as any).nichRand ?? 0) === 4) {
                                    scene.text('"You are a good little girl. I think you earned yourself a reward."');
                                    (s as any).nichGalaTrainStage = 60;
                                  } else {
                                    if (((s as any).nichRand ?? 0) === 5) {
                                      scene.text('"You are a good little girl. I think you earned yourself a reward."');
                                      (s as any).nichGalaTrainStage = 70;
                                    }
                                  }
                                }
                              }
                            }
                            scene.actions([
                              { label: 'Further', handler: (st: GameState) => {
    qspGoto(st, 'nichGala', 'training');
  } },
                            ]);
                          } else {
                            if (((s as any).nichGalaTrainStage ?? 0) === 50) {
                              (s as any).minut = ((s as any).minut ?? 0) + 1;
                              scene.img('images/characters/city/gala/training/training12.jpg');
                              scene.text('She grabs your head and pulls it towards her vagina. You can smell her sex. From the amount of juice running down Galas inner thighs she is very turned on.');
                              scene.text('She clearly expects you to start licking. And from your current position there is nothing you can do than obey.');
                              scene.text('You start licking and before long you hear Galas moans getting louder. As she nears an orgasm she grabs your head and pulls it closer.');
                              scene.text('It because difficult to breathe. You begin to worry about suffocation when Gala finally cums with a loud unintelligible cry.');
                              scene.text('"Well done." She says out of breath as she removes your restraint. "You can return to your work now."');
                              (s as any).nichEvalGala = 2;
                              qspGoto(s, 'nichGala', 'trainingEnd');
                            } else {
                              if (((s as any).nichGalaTrainStage ?? 0) === 51) {
                                (s as any).minut = ((s as any).minut ?? 0) + 1;
                                scene.img('images/characters/city/gala/training/training11.jpg');
                                (s as any).nichEvalGala = 2;
                                qspGoto(s, 'nichGala', 'trainingEnd');
                              } else {
                                if (((s as any).nichGalaTrainStage ?? 0) === 60) {
                                  (s as any).minut = ((s as any).minut ?? 0) + 1;
                                  scene.img('images/characters/city/gala/training/training20.jpg');
                                  scene.text('She puts on a strapon.');
                                  scene.text('Then she grabs your hair, pulls you from the chair and forces you to your knees.');
                                  scene.text('"I know you are a cock-hungry slut. I am sure you will enjoy this."');
                                  scene.actions([
                                    { label: 'Further', handler: (st: GameState) => {
    (st as any).nichGalaTrainStage = 61;
    qspGoto(st, 'nichGala', 'training');
  } },
                                  ]);
                                } else {
                                  if (((s as any).nichGalaTrainStage ?? 0) === 61) {
                                    (s as any).minut = ((s as any).minut ?? 0) + 1;
                                    scene.img('images/characters/city/gala/training/training18.jpg');
                                    scene.actions([
                                      { label: 'Further', handler: (st: GameState) => {
    (st as any).nichGalaTrainStage = 62;
    qspGoto(st, 'nichGala', 'training');
  } },
                                    ]);
                                  } else {
                                    if (((s as any).nichGalaTrainStage ?? 0) === 62) {
                                      (s as any).minut = ((s as any).minut ?? 0) + 1;
                                      scene.img('images/characters/city/gala/training/training19.jpg');
                                      scene.actions([
                                        { label: 'Further', handler: (st: GameState) => {
    (st as any).nichGalaTrainStage = 63;
    qspGoto(st, 'nichGala', 'training');
  } },
                                      ]);
                                    } else {
                                      if (((s as any).nichGalaTrainStage ?? 0) === 63) {
                                        (s as any).minut = ((s as any).minut ?? 0) + 1;
                                        scene.img('images/characters/city/gala/training/training21.jpg');
                                        scene.actions([
                                          { label: 'Further', handler: (st: GameState) => {
    (st as any).nichGalaTrainStage = 64;
    qspGoto(st, 'nichGala', 'training');
  } },
                                        ]);
                                      } else {
                                        if (((s as any).nichGalaTrainStage ?? 0) === 64) {
                                          (s as any).minut = ((s as any).minut ?? 0) + 1;
                                          scene.img('images/characters/city/gala/training/training30.jpg');
                                          scene.actions([
                                            { label: 'Further', handler: (st: GameState) => {
    (st as any).nichGalaTrainStage = 65;
    qspGoto(st, 'nichGala', 'training');
  } },
                                          ]);
                                        } else {
                                          if (((s as any).nichGalaTrainStage ?? 0) === 65) {
                                            (s as any).minut = ((s as any).minut ?? 0) + 1;
                                            scene.img('images/characters/city/gala/training/training57.jpg');
                                            scene.actions([
                                              { label: 'Further', handler: (st: GameState) => {
    (st as any).nichGalaTrainStage = 66;
    qspGoto(st, 'nichGala', 'training');
  } },
                                            ]);
                                          } else {
                                            if (((s as any).nichGalaTrainStage ?? 0) === 66) {
                                              (s as any).minut = ((s as any).minut ?? 0) + 1;
                                              scene.img('images/characters/city/gala/training/training32.jpg');
                                              (s as any).nichEvalGala = 2;
                                              qspGoto(s, 'nichGala', 'trainingEnd');
                                            } else {
                                              if (((s as any).nichGalaTrainStage ?? 0) === 70) {
                                                (s as any).minut = ((s as any).minut ?? 0) + 1;
                                                scene.img('images/characters/city/gala/training/training62.jpg');
                                                scene.actions([
                                                  { label: 'Further', handler: (st: GameState) => {
    (st as any).nichGalaTrainStage = 71;
    qspGoto(st, 'nichGala', 'training');
  } },
                                                ]);
                                              } else {
                                                if (((s as any).nichGalaTrainStage ?? 0) === 71) {
                                                  (s as any).minut = ((s as any).minut ?? 0) + 1;
                                                  scene.img('images/characters/city/gala/training/training28.jpg');
                                                  scene.actions([
                                                    { label: 'Further', handler: (st: GameState) => {
    (st as any).nichGalaTrainStage = 72;
    qspGoto(st, 'nichGala', 'training');
  } },
                                                  ]);
                                                } else {
                                                  if (((s as any).nichGalaTrainStage ?? 0) === 72) {
                                                    (s as any).minut = ((s as any).minut ?? 0) + 1;
                                                    scene.img('images/characters/city/gala/training/training54.jpg');
                                                    scene.actions([
                                                      { label: 'Further', handler: (st: GameState) => {
    (st as any).nichGalaTrainStage = 73;
    qspGoto(st, 'nichGala', 'training');
  } },
                                                    ]);
                                                  } else {
                                                    if (((s as any).nichGalaTrainStage ?? 0) === 73) {
                                                      (s as any).minut = ((s as any).minut ?? 0) + 1;
                                                      scene.img('images/characters/city/gala/training/training26.jpg');
                                                      scene.actions([
                                                        { label: 'Further', handler: (st: GameState) => {
    (st as any).nichGalaTrainStage = 74;
    qspGoto(st, 'nichGala', 'training');
  } },
                                                      ]);
                                                    } else {
                                                      if (((s as any).nichGalaTrainStage ?? 0) === 74) {
                                                        (s as any).minut = ((s as any).minut ?? 0) + 1;
                                                        scene.img('images/characters/city/gala/training/training25.jpg');
                                                        scene.actions([
                                                          { label: 'Further', handler: (st: GameState) => {
    (st as any).nichGalaTrainStage = 75;
    qspGoto(st, 'nichGala', 'training');
  } },
                                                        ]);
                                                      } else {
                                                        if (((s as any).nichGalaTrainStage ?? 0) === 75) {
                                                          (s as any).minut = ((s as any).minut ?? 0) + 1;
                                                          scene.img('images/characters/city/gala/training/training56.jpg');
                                                          (s as any).nichEvalGala = 2;
                                                          qspGoto(s, 'nichGala', 'trainingEnd');
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
                }
              }
            }
          }
        }
      }
    }
  }
  qspCall(s, 'stat', '');
  scene.build();
}

function enterTrainingEnd(s: GameState, scene: SceneBuilder): void {
  (s as any).nichGalaTrainCounter = ((s as any).nichGalaTrainCounter ?? 0) + (1);
  (s as any).nichGalaTrainLast = ((s as any).daystart ?? 0);
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    qspGoto(st, 'nichApartment', '');
  } },
  ]);
  scene.build();
}

function enterDesc(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/gala/02.jpg');
  scene.text('Gala is the wife of Nicholas and the mother of Tanya.');
  if ((!((s as any).nichGalaOpinion ?? 0))) {
    scene.text('She seems to be pretty indifferent about you.');
  } else {
    if (((s as any).nichGalaOpinion ?? 0) >= 1  &&  ((s as any).nichGalaOpinion ?? 0) < 10) {
      scene.text('You have the feeling that she doesn\'t like you. She seems to think that you are a slut.');
    } else {
      if (((s as any).nichGalaOpinion ?? 0) === 10) {
        scene.text('She knows that you are interested in women and doesn\'t seem to mind.');
      } else {
        if (((s as any).nichGalaOpinion ?? 0) === 20) {
        } else {
          if (((s as any).nichGalaOpinion ?? 0) === 30) {
            scene.text('She is angry with you because you don\'t want to break up with Tanya.');
          }
        }
      }
    }
  }
  (s as any).nichTemp = qspFunc(s, 'nichUtil', 'npcActivity', 'gala');
  if (((s as any).nichTemp ?? 0) === 'sleep') {
    scene.text('Usually Gala is sleeping at this time.');
  } else {
    if (((s as any).nichTemp ?? 0) === 'bathMorning'  ||  ((s as any).nichTemp ?? 0) === 'snooze') {
      scene.text('You assume that currently Gala is either in her bedroom or in the master bathroom.');
    } else {
      if (((s as any).nichTemp ?? 0) === 'breakfast') {
        scene.text('It\'s the time Gala usually eats breakfast.');
      } else {
        if (((s as any).nichTemp ?? 0) === 'leaveSpa'  ||  ((s as any).nichTemp ?? 0) === 'spa'  ||  ((s as any).nichTemp ?? 0) === 'returnSpa') {
          scene.text('Gala usually goes to a spa around this time.');
        } else {
          if (((s as any).nichTemp ?? 0) === 'leaveFriend'  ||  ((s as any).nichTemp ?? 0) === 'friend'  ||  ((s as any).nichTemp ?? 0) === 'returnFriend') {
            scene.text('Gala usually visits a friend around this time.');
          } else {
            if (((s as any).nichTemp ?? 0) === 'living') {
              scene.text('Gala seems to be in the living room.');
            } else {
              if (((s as any).nichTemp ?? 0) === 'bathEvening') {
                scene.text('Gala is likely heading for her bed now.');
              } else {
                if (((s as any).nichTemp ?? 0) === 'dinner') {
                  scene.text('Gala usually eats dinner around this time.');
                } else {
                  if (((s as any).nichTemp ?? 0) === 'nicholas') {
                    scene.text('Gala seems to be in her bedroom.');
                  } else {
                    if (((s as any).nichTemp ?? 0) === 'leaveClub'  ||  ((s as any).nichTemp ?? 0) === 'club'  ||  ((s as any).nichTemp ?? 0) === 'returnClub'  ||  ((s as any).nichTemp ?? 0) === 'prepareClub') {
                      scene.text('Usually Gala accompanies Nicholas to his club around this time.');
                    } else {
                      scene.text('You have no idea where Gala is at the moment.');
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
  scene.actions([
    { label: 'Back', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'approach':
      enterApproach(s, scene);
      break;
    case 'tarasPlan':
      enterTarasPlan(s, scene);
      break;
    case 'contractOffer':
      enterContractOffer(s, scene);
      break;
    case 'contractOfferAccept':
      enterContractOfferAccept(s, scene);
      break;
    case 'contractOfferRead':
      enterContractOfferRead(s, scene);
      break;
    case 'contractOfferReject':
      enterContractOfferReject(s, scene);
      break;
    case 'contractOfferSign':
      enterContractOfferSign(s, scene);
      break;
    case 'slaveIntro':
      enterSlaveIntro(s, scene);
      break;
    case 'slaveDoc':
      enterSlaveDoc(s, scene);
      break;
    case 'slaveImplant':
      enterSlaveImplant(s, scene);
      break;
    case 'slaveGeneric':
      enterSlaveGeneric(s, scene);
      break;
    case 'slaveTarasIntro':
      enterSlaveTarasIntro(s, scene);
      break;
    case 'training':
      enterTraining(s, scene);
      break;
    case 'trainingEnd':
      enterTrainingEnd(s, scene);
      break;
    case 'desc':
      enterDesc(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const nichGala: LocationDef = {
  name: 'nichGala',
  title: 'Gala is sleeping. It would be a bad idea to wake her up now.',
  region: 'other',
  description: ['Gala is sleeping. It would be a bad idea to wake her up now.'],
  enter: enter,
};
