import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterPavCommcenter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sisboyparty_day ?? 0) + 1 === ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) > 18  &&  ((s as any).sisboypartyQW ?? 0) === 1) {
    if (((s as any).sisboyparty ?? 0) === 1) {
      (s as any).sisboyparty = (-1);
    }
    if (((s as any).sisboyparty ?? 0) === 2) {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      (s as any).sisboyparty = (-1);
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/resident/rekshome/party/sisboyqwparty_7.jpg');
      // TODO-QSP: 'You forgot to go to Rex''s birthday party, but brush it off. ' + $OpenInnerThought + 'Oh well. Hope...
      scene.actions([
{ label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
]);
      return;
    }
  }
  if (((s as any).npc_rel ?? 0)?.['A33'] < 20) {
    scene.img('images/characters/pavlovsk/resident/anya/community/anyaroma1.jpg');
    scene.text('"What do you want? Fuck off!" Anya and her friends point and laugh at you until you leave them alone.');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } else {
    if (((s as any).week ?? 0) === 5  &&  ((s as any).odd_week ?? 0) === 1  &&  ((s as any).sisterQW ?? 0)?.['party'] === 1  &&  ((s as any).daystart ?? 0) < 5 + ((s as any).sisterQW ?? 0)?.['partyday']) {
      scene.img('images/characters/pavlovsk/resident/anya/community/anyaroma2.jpg');
      scene.text('Anya and some of her friends are dressed up and organizing themselves before going to the party. Anya sees you and waves at you. "Come on, I was starting to wonder if you were going to show up."');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'anya']; enterPartyanswer(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).npc_rel ?? 0)?.['A33'] >= 70  &&  ((s as any).week ?? 0) === 5  &&  ((s as any).odd_week ?? 0) === 1  &&  (((s as any).sisterQW ?? 0)?.['party'] === 0  ||  ((s as any).sisterQW ?? 0)?.['party'] === 2)) {
        (s as any).minut = ((s as any).minut ?? 0) + 5;
        qspCall(s, 'stat', '');
        if (((s as any).npc_rel ?? 0)?.['A57'] >= 80) {
          scene.img('images/characters/pavlovsk/resident/reks/reks.jpg');
          scene.text('Anya and her friends are dressed up and hanging out, but look like they\'re about to leave and go somewhere.');
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'rex']; enterPartyanswer(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          scene.img('images/characters/pavlovsk/resident/anya/community/anyaroma2.jpg');
          scene.text('Anya and her friends are dressed up and hanging out, but look like they\'re about to leave and go somewhere.');
          // TODO-QSP: dynamic text: Your sister sees you and waves you over. "Hey <<$pcs_nickname>>! We''re going to...
          scene.text(`Your sister sees you and waves you over. "Hey ${((s as any).pcs_nickname || '')}! We're going to a party at Rex's place. Want to come with us?"`);
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'anya']; enterPartyanswer(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      } else {
        scene.img('images/characters/pavlovsk/resident/anya/community/anya.jpg');
        // TODO-QSP: dynamic text: Anya sits with her friends, drinking beer. "Hey <<$pcs_nickname>>!" Anya smiles....
        scene.text(`Anya sits with her friends, drinking beer. "Hey ${((s as any).pcs_nickname || '')}!" Anya smiles. "Want a beer?"`);
        qspCall(s, 'willpower', 'drink', 'resist', 'easy');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Decline and move along', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Decline and move along', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
          ]);
        }
        scene.actions([
          { label: 'Drink beer', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    qspCall(st, 'npc_relationship', 'modify', 'A33', 5);
    qspCall(st, 'drugs', 'alcohol', 'beer', 3);
    qspCall(st, 'stat', '');
    if ((!((st as any).AniaFrends ?? 0))) {
      (st as any).AniaFrends = 1;
      scene.img('images/characters/pavlovsk/resident/anya/community/anyaroma1.jpg');
      scene.text('You meet Anya\'s friends, who are all her former classmates. There\'s the small and nimble Lusya, the ditzy Ira, a tall athletic guy whom everyone calls "Rex" and a lanky, red-haired guy named Roma. After the introductions, you sit down with them, drinking beer and chatting with Anya and her friends.');
    } else {
      qspGoto(st, 'sister', 'scene1');
    }
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPartyanswer(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === 'anya') {
    if (((s as any).mesec ?? 0) > 0  ||  ((s as any).pcs_mood ?? 0) < 25  ||  ((s as any).alko ?? 0) >= 3  ||  ((s as any).cumloc ?? 0)[11] === 1  ||  ((s as any).cumloc ?? 0)[6] === 1  ||  ((s as any).cumloc ?? 0)[7] === 1) {
      ((s as any).sisterQW = (s as any).sisterQW ?? {})['party'] = (-1);
      if (((s as any).mesec ?? 0) > 0) {
        scene.text('"Sorry Anya, but I\'m not in the mood today. You go without me."');
        scene.text('"What, are you on the rag today? You should have told me! Alright, go home and get some rest."');
        scene.actions([
          { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
        ]);
      } else {
        if (((s as any).pcs_mood ?? 0) < 25) {
          scene.text('"Sorry Anya, but I\'m not in the mood today. You go without me."');
          scene.text('"You do look a little pale, sis. Go home and get some rest."');
          scene.actions([
            { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
          ]);
        } else {
          if (((s as any).alko ?? 0) >= 3) {
            // TODO-QSP: dynamic text: "<<$pcs_nickname>>, how the hell did you get so drunk already? I was going to in...
            scene.text(`"${((s as any).pcs_nickname || '')}, how the hell did you get so drunk already? I was going to invite you to a party, but you look like you've already been to one! Go home and sleep it off!"`);
            scene.actions([
              { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
            ]);
          } else {
            scene.text('Her smile fades, and she seems confused for a moment before a look of disgust appears on her blushing face. "My God, why are you walking around with cum all over your face!? You\'ll get yourself a reputation! Go home and wash that off, quickly!" She then shoos you away as her friends stare at you.');
            scene.text('You feel a little ashamed that you embarrassed yourself and your sister by walking around like this in public.');
            scene.actions([
              { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
            ]);
          }
        }
      }
    } else {
      scene.actions([
        { label: 'Decline', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).sisterQW = (st as any).sisterQW ?? {})['party'] = (-1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/rekshome/party/party_sister_1.jpg');
    scene.text('"I\'d love to, but I have a lot of homework to do. I\'m sorry."');
    scene.text('"Don\'t worry. Maybe you can come next time?"');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
        { label: 'Go to the party', handler: (st: GameState) => {
    // TODO-QSP: if sisterQW['partycount'] > 0: gt 'rex_party', 'start' else ...
  } },
      ]);
    }
  } else {
    if (Number((s as any).locArgs?.[1] ?? 0) === 'rex') {
      if (((s as any).fame ?? 0)?.['pav_slut'] >= 250  ||  ((s as any).cumloc ?? 0)[11] === 1  ||  (((s as any).cumloc ?? 0)[6] === 1  ||  ((s as any).cumloc ?? 0)[7] === 1)) {
        (s as any).rex_breakup = 1;
        (s as any).reksLike = 0;
        qspCall(s, 'npc_relationship', 'set', 'A57', 0);
        (s as any).rexPark = 0;
        (s as any).rexCar = 0;
        if (((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
          // TODO-QSP: dynamic text: "<<$pcs_nickname>>, everyone''s saying you''re a fucking whore. I thought we wer...
          scene.text(`"${((s as any).pcs_nickname || '')}, everyone's saying you're a fucking whore. I thought we were an item and things were getting serious, but you're fucking everything that moves?"`);
          scene.text('"I don\'t know what came over me! I wasn\'t myself! Please forgive me."');
          scene.text('"Listen, let\'s just be friends and forget about being together, okay?"');
          scene.text('"Okay…"');
          scene.actions([
            { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
          ]);
        } else {
          scene.text('"Is that cum?!" He leans in to get a better look, then recoils in disgust.');
          scene.text('Your hand goes up to the dried cum on your face that you forgot to wipe off.');
          scene.text('"Get away from me, slut!" He moves away from you and you see everyone else either giving you a disgusted or angry look.');
          scene.text('Not knowing what to say, you walk away disheartened.');
          scene.actions([
            { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
          ]);
        }
      } else {
        if (((s as any).mesec ?? 0) > 0  ||  ((s as any).pcs_mood ?? 0) < 50) {
          scene.text('"Sorry sweetie, but I\'m not feeling too good today. You go without me."');
          scene.text('"Babe, I don\'t want to leave you alone, but I need to go with the guys. Take care."');
          scene.text('Rex gives you a gentle kiss on the cheek and leaves.');
          scene.actions([
            { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
          ]);
        } else {
          if (((s as any).alko ?? 0) >= 3) {
            // TODO-QSP: dynamic text: "<<$pcs_nickname>>, are you drunk? I wanted to invite you to the party, but you ...
            scene.text(`"${((s as any).pcs_nickname || '')}, are you drunk? I wanted to invite you to the party, but you look like you just left one! Go home and sleep it off."`);
            scene.actions([
              { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
            ]);
          } else {
            scene.text('"Babe, let\'s go to my place. I\'m throwing another one of my parties."');
            scene.actions([
              { label: 'Decline', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).sisterQW = (st as any).sisterQW ?? {})['party'] = (-1);
    qspCall(st, 'stat', '');
    scene.text('"Sorry, Rex. I\'d love to come, but I have a lot of homework to do and don\'t want to fail my exams."');
    scene.text('"Okay, go on then. But you\'re definitely coming next time, okay?"');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
              { label: 'Accept', goto: ['rex_party', 'start'] },
            ]);
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterScene1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/anya/community/anyaroma1.jpg');
  scene.text('Your sister and her friends Lusya, Ira, Rex and Roma are sitting outside the community center, drinking beer.');
  if (((s as any).npc_QW ?? 0)?.['A33'] === 1) {
    scene.actions([
      { label: 'Meet your sister\'s boyfriend', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).npc_QW = (st as any).npc_QW ?? {})['A33'] = 2;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/anya/community/sisboyqw_02.jpg');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, you wanted to meet my boyfriend, right? Well, this is Roma. ...
    scene.text(`"${((st as any).pcs_nickname || '')}, you wanted to meet my boyfriend, right? Well, this is Roma. Roma, this is my sister, ${((st as any).pcs_nickname || '')}."`);
    scene.text('"To friendship!!!" Rex shouts drunkenly while raising his cup. You pick up a cup full of beer and start drinking while glancing at your sister\'s boyfriend.');
    scene.text('Roma, red-haired and skinny, is actually pretty cute. He reminds you of Katja and Vicky, but more manly.');
    scene.actions([
      { label: 'Continue to drink beer', goto: ['sister', 'scene2'] },
    ]);
  } },
    ]);
  } else {
    (s as any).temp = (Math.floor(Math.random() * 5) + 0);
    if ((!((s as any).temp ?? 0))) {
      scene.text('Anya impatiently picks up a bottle of beer. "Come on, guys! Will you pour me some beer today or what?"');
      if ((!(Math.floor(Math.random() * 2) + 0))) {
        scene.text('Rex takes the bottle out of Anya\'s hands.');
        (s as any).temprand = (Math.floor(Math.random() * 5) + 0);
        if ((!((s as any).temprand ?? 0))) {
          scene.text('"Stop shouting, I\'m pouring!"');
          (s as any).temprand = (Math.floor(Math.random() * 3) + 0);
          if ((!((s as any).temprand ?? 0))) {
            scene.text('"I haven\'t even started to yell. If I do, you\'ll know!" Anya says between fits of giggles.');
          } else {
            if (((s as any).temprand ?? 0) === 1) {
              scene.text('"Hurry up, you piece of dog shit!" Lusya says with a resounding slap on Rex\'s shoulder.');
            } else {
              scene.text('"Don\'t get angry, Rex!" Ira says with a smile.');
              if ((!(Math.floor(Math.random() * 11) + 0))) {
                scene.text('Anya quickly interjects. "We might need to chain him to a post until he calms down."');
              }
            }
          }
        } else {
          if (((s as any).temprand ?? 0) === 1) {
            scene.text('"Well, you always like to be late for the fun. Will your loud ass relax? I\'m sorting it all out."');
            (s as any).temprand = (Math.floor(Math.random() * 3) + 0);
            if ((!((s as any).temprand ?? 0))) {
              scene.text('"My ass is always relaxed!" Anya says between fits of giggles.');
              scene.text('Roma wraps his arm around her and cups the side of her hip with his hand. "Hell yeah, it is!" he says, which gets everyone laughing.');
            } else {
              if (((s as any).temprand ?? 0) === 1) {
                scene.text('"If we had something to drink, we would be relaxed!" Lusya says with a resounding slap on Rex\'s shoulder.');
              } else {
                scene.text('Roma giggles. "If she relaxes it anymore, it will be too loose to feel anything."');
                scene.text('"That\'s just because you have a little dick," Anya quips, which gets everyone laughing.');
              }
            }
          } else {
            if (((s as any).temprand ?? 0) === 2) {
              scene.text('"You could have opened it yourself, you lazy bitch. Don\'t you have hands?" he says with a smile.');
              (s as any).temprand = (Math.floor(Math.random() * 3) + 0);
              if ((!((s as any).temprand ?? 0))) {
                scene.text('Anya giggles. "Yeah, but what else are yours good for?"');
                if ((!(Math.floor(Math.random() * 11) + 0))) {
                  scene.text('With mock indignation, Rex answers. "Really? Just one other thing…"');
                }
              } else {
                if (((s as any).temprand ?? 0) === 1) {
                  scene.text('"Is that how you speak to a lady?" Lusya asks with a resounding slap on Rex\'s shoulder.');
                  if ((!(Math.floor(Math.random() * 11) + 0))) {
                    scene.text('With mock indignation, Rex answers. "Yes, I speak Russian to her."');
                  }
                } else {
                  scene.text('Ira smiles. "Don\'t get so upset, Rex!"');
                  if ((!(Math.floor(Math.random() * 11) + 0))) {
                    scene.text('Anya quickly interjects. "We might need to chain him to a tree to keep him calm."');
                  }
                }
              }
            } else {
              if (((s as any).temprand ?? 0) === 3) {
                scene.text('"Allow me, madame."');
                (s as any).temprand = (Math.floor(Math.random() * 3) + 0);
                if ((!((s as any).temprand ?? 0))) {
                  scene.text('Anya giggles. "Of course, monsieur."');
                } else {
                  if (((s as any).temprand ?? 0) === 1) {
                    scene.text('"Don\'t you Madame me!" Anya says with mock indignation.');
                    if ((!(Math.floor(Math.random() * 11) + 0))) {
                      scene.text('Rex bows gallantly. "I\'m truly sorry, mademoiselle."');
                    }
                  } else {
                    scene.text('"Pour it already, you clown!" Anya says impatiently.');
                  }
                }
              } else {
                scene.text('"Shit! Where are the cups? Did we not buy any?"');
                (s as any).temprand = (Math.floor(Math.random() * 3) + 0);
                if ((!((s as any).temprand ?? 0))) {
                  scene.text('Anya picks up the cups. "They\'re right here, you blind moron!"');
                } else {
                  if (((s as any).temprand ?? 0) === 1) {
                    scene.text('"Rex, you\'re the one who bought them. Is your memory really that bad?" Roma asks.');
                  } else {
                    scene.text('Lusya holds up the cups. "Rex, calm down."');
                  }
                }
              }
            }
          }
        }
      } else {
        scene.text('Roma takes the bottle from Anya and opens it. "Somebody hold the cups."');
        (s as any).temprand = (Math.floor(Math.random() * 4) + 0);
        if ((!((s as any).temprand ?? 0))) {
          scene.text('Rex holds the cups while Roma pours the beer.');
        } else {
          if (((s as any).temprand ?? 0) === 1) {
            scene.text('Rex takes the cups. "That worthless ass!" he mutters. "Can\'t he use both his hands at once?"');
          } else {
            if (((s as any).temprand ?? 0) === 2) {
              scene.text('Ira takes the cups. "Pour already, you big doofus!"');
            } else {
              scene.text('As Roma pours beer into the cups, he suddenly starts to tip over. Unable to regain his balance, he falls over and spills the beer on the ground.');
              (s as any).temprand = (Math.floor(Math.random() * 3) + 0);
              if ((!((s as any).temprand ?? 0))) {
                scene.text('Rex is outraged. "You worthless drunk ass! Didn\'t your mother ever tell you \'Always pour with two hands?!\'"');
              } else {
                if (((s as any).temprand ?? 0) === 1) {
                  scene.text('Rex is outraged. "What the fuck?! Are you really that drunk already?"');
                } else {
                  scene.text('Anya places her head in her hand. "Always the fucking same! Getting too drunk, too fast…" she indignantly mutters.');
                }
              }
            }
          }
        }
      }
    } else {
      if (((s as any).temp ?? 0) === 1) {
        scene.text('"Did we come here to drink beer or to look at it?" Lusya asks indignantly,');
      } else {
        if (((s as any).temp ?? 0) === 2) {
          scene.text('With a flirty look, Ira bats her eyelashes. "Boys, are we going to drink beer today or not?"');
        } else {
          if (((s as any).temp ?? 0) === 3) {
            if ((!(Math.floor(Math.random() * 2) + 0))) {
              scene.text('Rex picks up a bottle of beer and pops it open.');
              if ((!(Math.floor(Math.random() * 3) + 0))) {
                scene.text('"Shit! Where are the cups? Did we not buy any?"');
                (s as any).temprand = (Math.floor(Math.random() * 3) + 0);
                if ((!((s as any).temprand ?? 0))) {
                  scene.text('Anya picks up the cups. "They\'re right here, you blind moron!"');
                } else {
                  if (((s as any).temprand ?? 0) === 1) {
                    scene.text('"Rex, you\'re the one who bought them. Is your memory really that bad?" Roma asks."');
                  } else {
                    scene.text('Lusya holds up the cups. "Rex, calm down."');
                  }
                }
              } else {
                scene.text('"Roma, hold the cups while I pour."');
              }
            } else {
              scene.text('Rex picks up a bottle of beer and hands it to Roma. "You pour this time."');
              scene.text('Roma takes the bottle from Rex and opens it. "Somebody hold the cups."');
              (s as any).temprand = (Math.floor(Math.random() * 4) + 0);
              if ((!((s as any).temprand ?? 0))) {
                scene.text('Rex holds the cups while Roma pours the beer.');
              } else {
                if (((s as any).temprand ?? 0) === 1) {
                  scene.text('Rex takes the cups. "That worthless ass!" he mutters. "Can\'t he use both his hands at once?"');
                } else {
                  if (((s as any).temprand ?? 0) === 2) {
                    scene.text('Ira takes the cups. "Pour it already, you big doofus!"');
                  } else {
                    scene.text('As Roma pours beer in the cups, he suddenly starts to tip over. Unable to regain his balance, he falls over and spills the beer on the ground.');
                    (s as any).temprand = (Math.floor(Math.random() * 3) + 0);
                    if ((!((s as any).temprand ?? 0))) {
                      scene.text('Rex is outraged. "You worthless drunk ass! Didn\'t your mother ever tell you \'Always pour with two hands?!\'"');
                    } else {
                      if (((s as any).temprand ?? 0) === 1) {
                        scene.text('Rex is outraged. "What the fuck?! Are you really that drunk already?"');
                      } else {
                        scene.text('Anya places her head in her hand. "Always the fucking same! Getting too drunk, too fast…" she indignantly mutters.');
                      }
                    }
                  }
                }
              }
            }
          } else {
            scene.text('Roma picks up the bottle of beer and opens it. "Somebody hold the cups."');
            (s as any).temprand = (Math.floor(Math.random() * 4) + 0);
            if ((!((s as any).temprand ?? 0))) {
              scene.text('Rex holds the cups while Roma pours the beer.');
            } else {
              if (((s as any).temprand ?? 0) === 1) {
                scene.text('Rex takes the cups. "That worthless ass!" he mutters. "Can\'t he use both his hands at once?"');
              } else {
                if (((s as any).temprand ?? 0) === 2) {
                  scene.text('Ira takes the cups. "Pour already, you big doofus!"');
                } else {
                  scene.text('As Roma pours beer in the cups, he suddenly starts to tip over. Unable to regain his balance, he falls over and spills the beer on the ground.');
                  (s as any).temprand = (Math.floor(Math.random() * 3) + 0);
                  if ((!((s as any).temprand ?? 0))) {
                    scene.text('Rex is outraged. "You worthless drunk ass! Didn\'t your mother ever tell you \'Always pour with two hands?!\'"');
                  } else {
                    if (((s as any).temprand ?? 0) === 1) {
                      scene.text('Rex is outraged. "What the fuck?! Are you really that drunk already?"');
                    } else {
                      scene.text('Anya places her head in her hand. "Always the fucking same! Getting too drunk, too fast…" she indignantly mutters.');
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (((s as any).sisterQW ?? 0)?.['partycount'] > 0  &&  (!((s as any).rex_breakup ?? 0))) {
      scene.actions([
        { label: 'Chat with Rex', goto: ['rex_events', 'rexGdkTalk'] },
      ]);
    }
    scene.actions([
      { label: 'Continue to drink beer', goto: ['sister', 'scene2'] },
    ]);
  }
  scene.text('Eventually, everybody\'s plastic cup is filled with ice cold beer, which you all drink merrily together.');
  if (((s as any).reksLike ?? 0) === 1  &&  ((s as any).toiletRexSex ?? 0) === 0  &&  ((s as any).sisterQW ?? 0)?.['partycount'] > 0  &&  (!((s as any).rex_breakup ?? 0))) {
    (s as any).temp = (Math.floor(Math.random() * 100) + 1);
    if (((s as any).temp ?? 0) >= 70) {
      scene.text('You notice Rex briefly glancing at your feet.');
      if (((s as any).pcs_horny ?? 0) > 30  &&  (((s as any).PCloSkirt ?? 0) > 2  ||  ((s as any).PCloPants ?? 0) > 4)) {
        scene.actions([
          { label: 'Show off your legs', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
    qspCall(st, 'npc_relationship', 'modify', 'A57', 'love');
    qspCall(st, 'stat', '');
    scene.img(`images/characters/pavlovsk/resident/reks/event/community/rexpod${(Math.floor(Math.random() * 3) + 1)}.jpg`);
    scene.text('You cross your foot over your leg, doing your best to appear seductive without being obvious.');
    scene.actions([
{ label: 'Continue to drink beer', goto: ['sister', 'scene2'] },
]);
    return;
  } },
        ]);
      }
    } else {
      if (((s as any).alko ?? 0) > 2  &&  ((s as any).temp ?? 0) <= 20  &&  ((s as any).npc_rel ?? 0)?.['A57'] <= 60) {
        (s as any).minut = ((s as any).minut ?? 0) + 5;
        qspCall(s, 'npc_relationship', 'modify', 'A57', 'like');
        qspCall(s, 'stat', '');
        scene.img('images/characters/shared/headshots_main/big57.jpg');
        // TODO-QSP: dynamic text: Already pretty tipsy, Rex approaches you. "Let me refill your glass, <<$pcs_nick...
        scene.text(`Already pretty tipsy, Rex approaches you. "Let me refill your glass, ${((s as any).pcs_nickname || '')}…" However, he spills some on you, seemingly by accident. "Oh sorry! Here, I'll clean that up for you."`);
        scene.text('He starts wiping off your legs with his shirt sleeve.');
        qspCall(s, 'willpower', 'foreplay', 'resist', 'easy');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Step back', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Step back', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'npc_relationship', 'modify', 'A57', 'dislike');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/reks/event/community/rexnet.jpg');
    scene.text('"No problem, I can manage that," you say as you clean yourself.');
    scene.actions([
      { label: 'Continue to drink beer', goto: ['sister', 'scene2'] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Wait', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
    qspCall(st, 'npc_relationship', 'modify', 'A57', 'love');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/reks/event/community/rexda.mp4');
    scene.text('Laughing, you wait until Rex finishes. He gradually grows bolder, replacing his sleeve with his palm and working his way up your leg towards your thigh. Just as Rex\'s hand starts to drift to your inner thigh, you realize what\'s going on and quickly remove his hand.');
    scene.actions([
      { label: 'Continue to drink beer', goto: ['sister', 'scene2'] },
    ]);
  } },
        ]);
      } else {
        if (((s as any).rexPark ?? 0) === 1  &&  ((s as any).rexParkDay ?? 0) < ((s as any).daystart ?? 0)  &&  ((s as any).rexSisTalk ?? 0) === 2) {
          (s as any).minut = ((s as any).minut ?? 0) + 5;
          if (((s as any).npc_rel ?? 0)?.['A57'] > 50) {
            qspCall(s, 'npc_relationship', 'set', 'A57', 50);
          } else {
            qspCall(s, 'npc_relationship', 'modify', 'A57', 'loathe');
          }
          (s as any).rexPark = 0;
          qspCall(s, 'stat', '');
          scene.img('images/characters/shared/headshots_main/big57.jpg');
          qspCall(s, 'rex_events', 'rexRep');
          // TODO-QSP: dynamic text: Rex comes up to you. "<<$pcs_nickname>>, I looked like a real chump waiting for ...
          scene.text(`Rex comes up to you. "${((s as any).pcs_nickname || '')}, I looked like a real chump waiting for you in the park yesterday! That wasn't very nice…"`);
          scene.actions([
            { label: 'Continue to drink beer', goto: ['sister', 'scene2'] },
          ]);
        } else {
          if (((s as any).rexCar ?? 0) === 1  &&  ((s as any).rexCarDay ?? 0) < ((s as any).daystart ?? 0)  &&  ((s as any).rexSisTalk ?? 0) === 3) {
            (s as any).minut = ((s as any).minut ?? 0) + 5;
            if (((s as any).npc_rel ?? 0)?.['A57'] > 50) {
              qspCall(s, 'npc_relationship', 'set', 'A57', 50);
            } else {
              qspCall(s, 'npc_relationship', 'modify', 'A57', 'loathe');
            }
            (s as any).rexCar = 0;
            qspCall(s, 'stat', '');
            scene.img('images/characters/shared/headshots_main/big57.jpg');
            qspCall(s, 'rex_events', 'rexRep');
            // TODO-QSP: dynamic text: Rex comes up to you. "<<$pcs_nickname>>, I was waiting at your door for almost t...
            scene.text(`Rex comes up to you. "${((s as any).pcs_nickname || '')}, I was waiting at your door for almost two hours last night! It wasn't very nice to ditch me like that…"`);
            scene.actions([
              { label: 'Continue to drink beer', goto: ['sister', 'scene2'] },
            ]);
          } else {
            if (((s as any).rexCar ?? 0) === 1  &&  ((s as any).rexCarDay ?? 0) < ((s as any).daystart ?? 0)  &&  ((s as any).rexSisTalk ?? 0) === 4) {
              (s as any).minut = ((s as any).minut ?? 0) + 5;
              if (((s as any).npc_rel ?? 0)?.['A57'] > 50) {
                qspCall(s, 'npc_relationship', 'set', 'A57', 50);
              } else {
                qspCall(s, 'npc_relationship', 'modify', 'A57', 'loathe');
              }
              (s as any).rexCar = 0;
              qspCall(s, 'stat', '');
              scene.img('images/characters/shared/headshots_main/big57.jpg');
              qspCall(s, 'rex_events', 'rexRep');
              // TODO-QSP: dynamic text: Rex comes up to you. "<<$pcs_nickname>>, you could have at least told me you did...
              scene.text(`Rex comes up to you. "${((s as any).pcs_nickname || '')}, you could have at least told me you didn't want to go out! Last night was a disaster! Next time, please just tell me if you can't make it."`);
              scene.actions([
                { label: 'Continue to drink beer', goto: ['sister', 'scene2'] },
              ]);
            } else {
              if (((s as any).temp ?? 0) > 50  &&  ((s as any).npc_rel ?? 0)?.['A57'] >= 30) {
                (s as any).minut = ((s as any).minut ?? 0) + 5;
                qspCall(s, 'stat', '');
                scene.img('images/characters/shared/headshots_main/big57.jpg');
                qspCall(s, 'rex_events', 'rexRep');
                scene.text('Rex is drinking a glass of beer.');
                scene.actions([
                  { label: 'Chat', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A57', 'love');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspGoto(st, 'rex_events', 'rexGdkTalk');
  } },
                  { label: 'Continue to drink beer', goto: ['sister', 'scene2'] },
                ]);
              } else {
                if (((s as any).week ?? 0) < 5  &&  ((s as any).week ?? 0) > 1  &&  ((s as any).odd_week ?? 0) === 1  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0  &&  (((s as any).sisterQW ?? 0)?.['party'] === 0  ||  ((s as any).sisterQW ?? 0)?.['party'] === 2)  &&  ((s as any).daystart ?? 0) - ((s as any).sisterQW ?? 0)?.['partyday'] > 3) {
                  // TODO-QSP: dynamic text: Roma looks up at you, suddenly remembering something. "<<$pcs_nickname>>, Rex is...
                  scene.text(`Roma looks up at you, suddenly remembering something. "${((s as any).pcs_nickname || '')}, Rex is having a party on Friday. Do you want to come?"`);
                  ((s as any).sisterQW = (s as any).sisterQW ?? {})['partyday'] = ((s as any).daystart ?? 0);
                  (s as any).minut = ((s as any).minut ?? 0) + 5;
                  qspCall(s, 'stat', '');
                  if (((s as any).runnerQW ?? 0)?.['prof_stage'] > 0) {
                    scene.actions([
                      { label: 'No (training)', handler: (st: GameState) => {
    ((st as any).sisterQW = (st as any).sisterQW ?? {})['party'] = (-1);
    scene.img('images/locations/pavlovsk/resident/rekshome/party/sisboyqwparty_4.jpg');
    scene.text('You turn down the invitation. "I\'d love to, but I have a competition to prepare for and have to train."');
    scene.actions([
      { label: 'Finish', goto: ['sister', 'pav_commcenter'] },
    ]);
  } },
                    ]);
                  }
                  if (((s as any).vballVars ?? 0)?.['on_team'] === 1) {
                    scene.actions([
                      { label: 'No (volleyball)', handler: (st: GameState) => {
    ((st as any).sisterQW = (st as any).sisterQW ?? {})['party'] = (-1);
    scene.img('images/locations/pavlovsk/resident/rekshome/party/sisboyqwparty_5.jpg');
    scene.text('You turn down the invitation. "Sorry, but I can\'t. Coach doesn\'t allow me to stay out late, and drinking is also prohibited."');
    scene.actions([
      { label: 'Finish', goto: ['sister', 'pav_commcenter'] },
    ]);
  } },
                    ]);
                  }
                  scene.actions([
                    { label: 'No (study)', handler: (st: GameState) => {
    ((st as any).sisterQW = (st as any).sisterQW ?? {})['party'] = (-1);
    scene.img('images/locations/pavlovsk/resident/rekshome/party/sisboyqwparty_3.jpg');
    scene.text('You turn down the invitation. "I\'d love to, but I can\'t get behind at school. I have homework to do and books to read. You know what it\'s like."');
    scene.actions([
      { label: 'Finish', goto: ['sister', 'pav_commcenter'] },
    ]);
  } },
                    { label: 'Yes', handler: (st: GameState) => {
    ((st as any).sisterQW = (st as any).sisterQW ?? {})['party'] = 1;
    scene.img('images/characters/pavlovsk/resident/anya/community/anyaroma1.jpg');
    scene.text('You agree to go to the party.');
    // TODO-QSP: dynamic text: "Awesome! It''ll be fun. Just be here before ' + func('time', 'get_time_string',...
    scene.text('"Awesome! It\'ll be fun. Just be here before 18:00, otherwise we\'ll leave without you."');
    scene.text('Anya gives Roma a dirty look, but he just shrugs it off.');
    scene.actions([
      { label: 'Finish', goto: ['sister', 'pav_commcenter'] },
    ]);
  } },
                  ]);
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

function enterScene2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/anya/community/anyaroma1.jpg');
  scene.text('The bottles of beer are quickly drained and everyone seems a little tipsy at this point as they get up and stagger inside. As they go, they all shout goodbye at you, so you wave to them and head on your way.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['pav_commcenter', ''] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).sisterAge = ((s as any).year ?? 0) - (((((s as any).npc_dob ?? {})?.['A33'] ?? 0) - ((((s as any).npc_dob ?? {})?.['A33'] ?? 0) % 10000)) / 10000);
  (s as any).sisterLocationTitle = qspFunc(s, 'wrap', 'header h1 center', 'Anya');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/anya/sister' + (Math.floor(Math.random() * 3) + 1) + '.jpg');
  // TODO-QSP: dynamic text: Your sister Anya is a little older than you at <<sisterAge>> years old. She grad...
  scene.text(`Your sister Anya is a little older than you at ${((s as any).sisterAge || '')} years old. She graduated from school but, much to your mother's disappointment, didn't go to the university and ended up working at Pavlovsk's local supermarket instead.`);
  qspCall(s, 'sister_chat', 'checks');
  if (((s as any).hour ?? 0) === 8  &&  ((s as any).week ?? 0) < 6) {
    // TODO-QSP: dynamic text: Goddamn it, <<$pcs_nickname>>! I''ll be late for work because of you!
    scene.text(`Goddamn it, ${((s as any).pcs_nickname || '')}! I'll be late for work because of you!`);
    scene.actions([
{ label: 'Apologize and let her get ready', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
]);
    return;
  }
  const arg = s.locArg;
  switch (arg) {
    case 'pav_commcenter':
      enterPavCommcenter(s, scene);
      break;
    case 'partyanswer':
      enterPartyanswer(s, scene);
      break;
    case 'scene1':
      enterScene1(s, scene);
      break;
    case 'scene2':
      enterScene2(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const sister: LocationDef = {
  name: 'sister',
  title: 'Anya',
  region: 'other',
  enter: enter,
};
