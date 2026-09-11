import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).nichGalaPresent = qspFunc(s, 'nichUtil', 'isPresent', 'gala', 'living');
  (s as any).nichNichPresent = qspFunc(s, 'nichUtil', 'isPresent', 'nicholas', 'living');
  (s as any).nichTanyPresent = qspFunc(s, 'nichUtil', 'isPresent', 'tanya', 'living');
  if (((s as any).locArgs?.[0] ?? 0) !== 'return'  &&  ((s as any).nichGalaPresent ?? 0) === 1  &&  ((s as any).nichNichPresent ?? 0) === 0  &&  ((s as any).nichTanyPresent ?? 0) === 0  &&  ((s as any).nichEvtGalaTele1 ?? 0) === 0  &&  (Math.floor(Math.random() * 3) + 1) === 1) {
    scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc'); } }]);
  }
  scene.text('<center><b>Nicholas\' Living Room</b></center>');
  scene.img('images/locations/city/citycenter/nichApartment/living.jpg');
  scene.text('The living room is furnished with finest leather couches of modern design, a fireplace, a large TV on the wall, several side tables and a cabinet and fridge for various expensive alcoholic beverages.');
  scene.text('Just like every other room in the apartment, it serves to convey to anybody who enters that Nicholas and his family are doing really well financially.');
  (s as any).nichCleanAppropriate = 1;
  if (((s as any).nichNichAct ?? 0) === 'breakfast') {
    if (((s as any).nichGalaAct ?? 0) === 'breakfast') {
      if (((s as any).nichTanyAct ?? 0) === 'breakfast') {
        scene.text('The family is sitting together at the dining table eating breakfast.');
      } else {
        scene.text('Nicholas and Gala are sitting together at the dining table eating breakfast.');
      }
    } else {
      if (((s as any).nichTanyAct ?? 0) === 'breakfast') {
        scene.text('Nicholas and Tanya are sitting together at the dining table eating breakfast.');
      } else {
        scene.text('Nicholas is sitting at the dining table eating breakfast.');
      }
    }
    (s as any).nichCleanAppropriate = 0;
  } else {
    if (((s as any).nichNichAct ?? 0) === 'dinner') {
      if (((s as any).nichGalaAct ?? 0) === 'dinner') {
        if (((s as any).nichTanyAct ?? 0) === 'dinner') {
          scene.text('The family is sitting together at the dining table eating dinner.');
        } else {
          scene.text('Nicholas and Gala are sitting together at the dining table eating dinner.');
        }
      } else {
        if (((s as any).nichTanyAct ?? 0) === 'dinner') {
          scene.text('Nicholas and Tanya are sitting together at the dining table eating dinner.');
        } else {
          scene.text('Nicholas is sitting at the dining table eating dinner.');
        }
      }
      (s as any).nichCleanAppropriate = 0;
    }
  }
  if (((s as any).nichNichAct ?? 0) === 'living') {
    if (((s as any).nichGalaAct ?? 0) === 'living') {
      if (((s as any).nichTanyAct ?? 0) === 'living') {
        scene.text('<a href="exec: gt \'nichNicholas\'">Nicholas</a>, <a href="exec: gt \'nichGala\'">Gala</a> and Tanya are sitting on the couch watching TV together.');
      } else {
        scene.text('<a href="exec: gt \'nichNicholas\'">Nicholas</a> and <a href="exec: gt \'nichGala\'">Gala</a> are sitting on the couch watching TV together.');
      }
    } else {
      scene.text('<a href="exec: gt \'nichNicholas\'">Nicholas</a> is sitting on the couch reading a book.');
    }
  } else {
    if (((s as any).nichGalaAct ?? 0) === 'living') {
      if (((s as any).nichTanyAct ?? 0) === 'living') {
        scene.text('<a href="exec: gt \'nichGala\'">Gala</a> and Tanya are sitting on the couch chatting with each other.');
      } else {
        (s as any).nichRand = Math.floor(Math.random() * 3) + 0;
        if ((!((s as any).nichRand ?? 0))) {
          scene.text('<a href="exec: gt \'nichGala\'">Gala</a> is sitting on the couch reading a book.');
        } else {
          if (((s as any).nichRand ?? 0) === 1) {
            scene.text('<a href="exec: gt \'nichGala\'">Gala</a> is sitting on the couch reading a magazine.');
          } else {
            scene.text('<a href="exec: gt \'nichGala\'">Gala</a> is sitting on the couch watching tv.');
          }
        }
      }
    } else {
      if (((s as any).nichTanyAct ?? 0) === 'living') {
        scene.text('Tanya is sitting on the couch watching TV.');
      }
    }
  }
  if (((s as any).nichWork ?? 0) === 2  &&  (!((s as any).nichOutfitState ?? 0))) {
    if (((s as any).nichNichPresent ?? 0) === 1) {
      // TODO-QSP: dynamic text: Nicholas looks at you with a displeased expression. "<<$pcs_nickname>>, I though...
      scene.text(`Nicholas looks at you with a displeased expression. "${((s as any).pcs_nickname ?? 0)}, I thought I made it clear that you have to wear your uniform here. Go back to your room and put it on."`);
    } else {
      if (((s as any).nichGalaPresent ?? 0) === 1) {
        // TODO-QSP: dynamic text: Gala takes a quick look at you. "<<$pcs_nickname>>, you really have to wear your...
        scene.text(`Gala takes a quick look at you. "${((s as any).pcs_nickname ?? 0)}, you really have to wear your maid uniform here. That's part of your job."`);
      } else {
        if (((s as any).nichTanyPresent ?? 0) === 1) {
          // TODO-QSP: dynamic text: Tanya notices that you are not wearing your uniform. "<<$pcs_nickname>>, I don't...
          scene.text(`Tanya notices that you are not wearing your uniform. "${((s as any).pcs_nickname ?? 0)}, I don't mind if you walk around the house like this. But Nicholas does. You should better put your uniform on before he anybody else sees you."`);
        } else {
          scene.text('You realize that you are not wearing your uniform. If Nicholas saw you now he would be displeased. You should better change into your maid outfit before walking around the apartment.');
        }
      }
    }
  }
  if (((s as any).nichWork ?? 0) === 2) {
    if ((!((s as any).nichCleanAppropriate ?? 0))) {
      scene.text('It wouldn\'t be appropriate to clean this room now.');
    } else {
      qspCall(s, 'nichChore', 'inspect', 'living');
    }
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'evtGalaTele1') {
    (s as any).nichEvtGalaTele1 = 1;
    scene.text('Just before you enter the living room you hear the voice of Gala. Apparently she is making a phone call. She hasn\'t noticed you so far.');
    scene.actions([
      { label: 'Enter', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
      { label: 'Eavesdrop', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.text('You hear Gala talking about her hobbies, the dress she bought last week and how she despises the wife of one of Nicholas\' employees. Nothing of this is of any interest to you.');
    scene.text('Just before you are about to stop eavesdropping you hear something interesting.');
    scene.text('"By the way: we have a new maid… Yes, another young girl."');
    scene.text('…');
    if (((s as any).nichGalaOpinion ?? 0) === 1) {
      scene.text('"No, it\'s the same type we had before. You wouldn\'t believe what kind of uniform she wears around the house. I feel like living in a brothel."');
      scene.text('…');
      if (((s as any).nichHireMode ?? 0) === 2) {
        scene.text('"Tanya is more than ok with that! It was actually her who brought this slut into our house. They met at the gym or something like that."');
      } else {
        scene.text('"Tanya doesn\'t seem to mind at all."');
      }
      scene.text('…');
      scene.text('"What am I supposed to tell her? That her step-father fucked our former maid… that I don\'t want another slut who seduces him?"');
      scene.text('…');
      scene.text('"Yes, she vanished… she only left a letter…"');
      scene.text('…');
      scene.text('"Maybe you are right. But we should not discuss this now. Lets meet in private soon."');
      scene.text('…');
      scene.text('"Yes, that\'s fine. See you then."');
    } else {
      scene.text('"I\'m not sure. She looks quite nice. But so far I have no reason to assume that she is after Nicholas."');
      scene.text('…');
      if (((s as any).nichHireMode ?? 0) === 2) {
        scene.text('"Tanya likes her. It was actually her who introduced us to the new girl. They met at the gym or something like this."');
        scene.text('…');
        scene.text('"No, I don\'t think so. If she wanted to steal something she would have done so already. Tanya told me that she had her over several times already."');
        scene.text('…');
        scene.text('"Girls stuff I guess. You are not implying that my daughter is a Lesbian, are you?"');
        scene.text('…');
        scene.text('She laughs out "That means nothing. Have you taken a look in the mirror lately?"');
        scene.text('…');
      } else {
        scene.text('"Yes, our last maid vanished… she only left a letter… I won\'t call it a strange affair… she was a weird girl."');
        scene.text('…');
      }
      scene.text('"Anyways… I have some things to do. Will I see you next week?"');
      scene.text('…');
      scene.text('"Great. See you then."');
    }
    scene.text('She ends her call. There is no reason to continue eavesdropping.');
    scene.actions([
      { label: 'Enter', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).locArgs?.[0] ?? 0) === 'breakfast') {
      qspCall(s, 'stat', '');
      (s as any).nichBreakfLast = ((s as any).daystart ?? 0);
      (s as any).nichTemp = 7;
      if (((s as any).week ?? 0) > 5) {
        (s as any).nichTemp = 8;
      }
      scene.img('images/locations/city/citycenter/nichApartment/breakfast\'+rand(0, 5)+\'.jpg');
      if (((s as any).hour ?? 0) < ((s as any).nichTemp ?? 0)  ||  (((s as any).hour ?? 0) === ((s as any).nichTemp ?? 0)  &&  ((s as any).minut ?? 0) <= 15)) {
        scene.text('You have enough time to prepare breakfast. You make coffee, collect the newspaper from the mailbox and place everything on the dinner table.');
        scene.text('When the family members arrive one by one the breakfast table is prepared perfectly and you stand ready to fulfill additional requests.');
        (s as any).nichBreakFQual = 1;
      } else {
        if (((s as any).hour ?? 0) === ((s as any).nichTemp ?? 0)  &&  ((s as any).minut ?? 0) <= 30) {
          scene.text('You hastilty prepare coffee and collect the newspaper from the mailbox.');
          scene.text('When the family members arrive one by one the breakfast table is only half-way ready.');
          // TODO-QSP: dynamic text: Nicholas looks annoyed by this lack of perfection "<<$pcs_nickname>>, I expect t...
          scene.text(`Nicholas looks annoyed by this lack of perfection "${((s as any).pcs_nickname ?? 0)}, I expect the breakfast to be prepared in time. I won't accept you lazing around."`);
          (s as any).nichBreakFQual = 2;
        } else {
          if (((s as any).hour ?? 0) === ((s as any).nichTemp ?? 0)  &&  ((s as any).minut ?? 0) < 45) {
            scene.text('You hastily start prepaing breakfast. You don\'t even have enough time to make coffee and collect the newspaper from the mailbox before the family members arrive.');
            // TODO-QSP: dynamic text: Nicholas looks very annoyed by this lack of perfection "<<$pcs_nickname>>, one r...
            scene.text(`Nicholas looks very annoyed by this lack of perfection "${((s as any).pcs_nickname ?? 0)}, one reason for having a maid is not having to wait for breakfast. If you don't manage to prepare breakfast before I want to eat it I don't see why I would need you."`);
            (s as any).nichBreakFQual = 3;
          } else {
            scene.text('The family is already sitting at the breakfast table. Apparently they have collected some of the items they want from the kitchen themselves.');
            // TODO-QSP: dynamic text: Nicholas looks very annoyed by this lack of perfection "<<$pcs_nickname>>, your ...
            scene.text(`Nicholas looks very annoyed by this lack of perfection "${((s as any).pcs_nickname ?? 0)}, your job is to prepare breakfast. What exactly would you say you get paid for when I have to do your chores?"`);
            (s as any).nichBreakFQual = 4;
          }
        }
      }
      (s as any).nichRand = Math.floor(Math.random() * 100) + 1;
      if (((s as any).nichGalaTarasPlan ?? 0) === 10) {
        // TODO-QSP: dynamic text: "<<$pcs_nickname>>, have you seen my wife lately? She wasn't home this night. Th...
        scene.text(`"${((s as any).pcs_nickname ?? 0)}, have you seen my wife lately? She wasn't home this night. That's quite unusual."`);
        scene.text('"I am sorry, Master Nicholas, but I don\'t know anything about that."');
        scene.text('Tanya looks annoyed.');
        scene.text('"I guess she just spent the night at one of her friends. It wouldn\'t be the first time, right?"');
        scene.text('Nicholas nods slowly, but doesn\'t seem convinced.');
        (s as any).nichAfterBFEvent = 5000;
      } else {
        if (((s as any).nichGalaTarasPlan ?? 0) === 100) {
          scene.text('Gala looks distressed today.');
          // TODO-QSP: dynamic text: "<<$pcs_nickname>>, please talk to me after breakfast."
          scene.text(`"${((s as any).pcs_nickname ?? 0)}, please talk to me after breakfast."`);
          (s as any).nichAfterBFEvent = 5010;
        } else {
          if (((s as any).preg ?? 0) > 0  &&  ((s as any).nichPregnancy ?? 0) === 0  &&  qspFunc(s, 'body_din', 'pregnancyVisibility') === 1) {
            scene.text('Nicholas directs his attention at you.');
            // TODO-QSP: dynamic text: "<<$pcs_nickname>>, there is something important we need to talk about after bre...
            scene.text(`"${((s as any).pcs_nickname ?? 0)}, there is something important we need to talk about after breakfast."`);
            scene.text('"Of course, Master Nicholas." You reply as is expected of you.');
            (s as any).nichPregnancy = 1;
            (s as any).nichAfterBFEvent = 90;
          } else {
            if (((s as any).nichTanya ?? 0)?.['Uni'] === 0  &&  (((s as any).nichRand ?? 0) <= 20  ||  ((s as any).nichDebug ?? 0) === 1)) {
              scene.text('Nicholas starts to read the newspaper. After a while he puts it aside and looks at Tanya.');
              scene.text('"Tanya, I talked to one of my friends yesterday: Dimitrij Aslanov. I think you might know him."');
              scene.text('Tanya looks up from her smartphone and frowns while she tries to remember something.');
              scene.text('"No, that name doesn\'t ring a bell."');
              scene.text('"It should. Dimitrij Aslanov is one of your professors. At least he would be if you attended your courses at university."');
              scene.text('"But attendance isn\'t compulsory…"');
              scene.text('"That would be a valid argument if you passed your exams. I expect you to show more ambition, I expect your academic performance to improve."');
              scene.text('Tanya doesn\'t look as if she is eager about changing her lifestyle. After a few seconds she decides that agreeing is the fastest way to end this uncomfortable conversation.');
              scene.text('"Sigh… all right."');
              scene.text('Nicholas doesn\'t look convinced by Tanyas change of heart. He drops the topic nevertheless and continues reading the newspaper.');
              // TODO-QSP: dynamic text: Once he finishes he looks up and directs his next words at you. "<<$pcs_nickname...
              scene.text(`Once he finishes he looks up and directs his next words at you. "${((s as any).pcs_nickname ?? 0)}, I would like to speak to you when you are done cleaning up the breakfast table."`);
              scene.text('"Of course, Master Nicholas." You reply as is expected of you.');
              ((s as any).nichTanya ?? {})['Uni'] = 1;
              (s as any).nichAfterBFEvent = 1;
            } else {
              if (((s as any).nichGalaKnowsPT ?? 0) === 1  &&  (((s as any).nichRand ?? 0) <= 75  ||  ((s as any).nichDebug ?? 0) === 1)) {
                scene.text('The family members are chatting with each other about topics of little interest to you.');
                scene.text('One of your duties is to refill empty glasses.');
                // TODO-QSP: dynamic text: Just as you refill the orange juice of Gala she says to you "By the way, <<$pcs_...
                scene.text(`Just as you refill the orange juice of Gala she says to you "By the way, ${((s as any).pcs_nickname ?? 0)}, I would like to speak to you when you are done cleaning up. Alone."`);
                scene.text('"Of course, Mistress Gala." You reply as is expected of you.');
                (s as any).nichAfterBFEvent = 10;
              } else {
                if (((s as any).nichGalaKnowsPT ?? 0) > 10  &&  ((s as any).nichGalaKnowsPT ?? 0) < 15) {
                  scene.text('The family members are chatting with each other about topics of little interest to you.');
                  // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I would like to speak to you when you are done cleaning up. ...
                  scene.text(`"${((s as any).pcs_nickname ?? 0)}, I would like to speak to you when you are done cleaning up. Alone."`);
                  scene.text('"Of course, Mistress Gala." You reply as is expected of you.');
                  (s as any).nichAfterBFEvent = 11;
                } else {
                  if (((s as any).nichGalaOpponent ?? 0) === 20) {
                    scene.text('The family members are chatting with each other about topics of little interest to you.');
                    scene.text('"By the way, I am missing one of my necklace." Gala looks concerned but there is something else in her face, too. Is it mischief?');
                    scene.text('"Don\'t tell me you lost it. You know I have to work hard for the money you spend on your jewelry." Nicholas seems to be both annoyed and not very interested.');
                    scene.text('"No, I am sure that it was in my jewellery box. Somebody must have taken it."');
                    scene.text('"<i>Somebody</i>? I\'d say you take another look before suspecting <i>somebody</i>."');
                    scene.text('"But…"');
                    scene.text('"Enough of this. I am sure you just lost it somewhere in your wardrobe."');
                    scene.text('Gala looks disappointed but drops the topic nevertheless.');
                    scene.text('');
                    scene.text('<b>Maybe you should search for the missing necklace. It would be very bad if you got blamed for its disappearance.</b>');
                    (s as any).nichGalaOpponent = 21;
                  } else {
                    if (((s as any).nichGalaOpponent ?? 0) === 21  ||  ((s as any).nichGalaOpponent ?? 0) === 22) {
                      scene.text('The family members are chatting with each other about topics of little interest to you.');
                      scene.text('"By the way, I am still missing my necklace. And I have looked everywhere."');
                      scene.text('"Very well then. What do you suggest we should do now?" Nicholas does a good job hiding his annoyance but it is still noticeable.');
                      scene.text('"Lets look into each room. It has to be somewhere, doesn\'t it?"');
                      scene.text('"Okay then. We will do this after the breakfast."');
                      (s as any).nichAfterBFEvent = 100;
                    } else {
                      if (((s as any).nichGalaImplantCount ?? 0) > 0) {
                        scene.text('Gala looks at you with a stern look on her face.');
                        // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I want to talk to you after breakfast."
                        scene.text(`"${((s as any).pcs_nickname ?? 0)}, I want to talk to you after breakfast."`);
                        scene.text('"Of course, Mistress Gala." You reply as is expected of you.');
                        (s as any).nichAfterBFEvent = 220;
                      } else {
                        if (((s as any).nichGalaContractActive ?? 0) === 1  &&  (!((s as any).nichGalaDoc ?? 0))) {
                          scene.text('Gala looks at you with a stern look on her face.');
                          // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I want to talk to you after breakfast."
                          scene.text(`"${((s as any).pcs_nickname ?? 0)}, I want to talk to you after breakfast."`);
                          scene.text('"Of course, Mistress Gala." You reply as is expected of you.');
                          (s as any).nichAfterBFEvent = 210;
                        } else {
                          if (((s as any).nichGalaContractActive ?? 0) === 1  &&  ((s as any).nichGalaContractLast ?? 0) + (Math.floor(Math.random() * 3) + 5) <= ((s as any).daystart ?? 0)) {
                            scene.text('Gala looks at you with a stern look on her face.');
                            // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I want to talk to you after breakfast."
                            scene.text(`"${((s as any).pcs_nickname ?? 0)}, I want to talk to you after breakfast."`);
                            scene.text('"Of course, Mistress Gala." You reply as is expected of you.');
                            (s as any).nichAfterBFEvent = 200;
                          } else {
                            if (((s as any).nichGentleclubE1 ?? 0) === 0  &&  ((s as any).nichPerformance ?? 0) >= 60  &&  ((s as any).nichStatMsg ?? 0) === ''  &&  (((s as any).nichRand ?? 0) <= 40  ||  ((s as any).nichDebug ?? 0) === 1)  &&  ((s as any).nichDebug ?? 0) === 1) {
                              scene.text('The family members are chatting with each other about topics of little interest to you.');
                              // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I have an important guest tonight. I need you to attend us a...
                              scene.text(`"${((s as any).pcs_nickname ?? 0)}, I have an important guest tonight. I need you to attend us at '+func('time', 'get_time_string', 18, 0)+'in my study."`);
                              scene.text('"Of course, Master Nicholas." You reply as is expected of you.');
                              (s as any).nichGentleclubE1 = 1;
                              (s as any).nichGentleclubDayE1 = ((s as any).daystart ?? 0);
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
      scene.actions([
        { label: 'Clean up', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + ((((s as any).nichTemp ?? 0) + 1) * 60 + 40 - (((s as any).hour ?? 0) * 60 + ((s as any).minut ?? 0)));
    if (((s as any).nichAfterBFEvent ?? 0) === 1) {
      scene.img('images/characters/city/nicholas/01.jpg');
      scene.text('After you are done cleaning up the table you go to Nicholas as requested.');
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I am sure you heard what I said to Tanya earlier. I want her...
      scene.text(`"${((s as any).pcs_nickname ?? 0)}, I am sure you heard what I said to Tanya earlier. I want her to become successful in life, to accomplish something on her own. But it seems as if she lacks the ambition to do so."`);
      scene.text('"The two of you seem to get along quite well. Maybe you could speak some sense into her?"');
      scene.actions([
        { label: 'Agree', handler: (st: GameState) => {
    ((s as any).nichTanya ?? {})['Uni'] = 11;
    scene.text('"I will try, Master Nicholas."');
    scene.text('He nods. "I won\'t expect more from you than that."');
    scene.text('He nods again, signaling you that you are dismissed for now.');
    scene.actions([
      { label: 'Leave', goto: ['nichLivingroom', ''] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).nichAfterBFEvent ?? 0) === 10) {
        scene.img('images/characters/city/gala/02.jpg');
        scene.text('After you are done cleaning up the table you go to Gala as requested.');
        // TODO-QSP: dynamic text: "<<$pcs_nickname>>, don't think you can fool me. I know what's going on between ...
        scene.text(`"${((s as any).pcs_nickname ?? 0)}, don't think you can fool me. I know what's going on between you and my daughter."`);
        scene.text('"Don\'t get me wrong. I understand the appeal of another woman."');
        if (((s as any).nichGalaOpinion ?? 0) === 1) {
          scene.text('"As a matter of fact I am quite relieved. I thought you might be after my husband. But now that I know… never mind."');
        }
        scene.text('"The thing is, that I want Tanya to have an happy life. And that includes marrying a suitable husband. And now she is in the age where she has to start looking for one."');
        if (((s as any).pcs_apprnc ?? 0) >= 120) {
          scene.text('"Sadly that means that she must not be distracted by her maid. No matter how attractive the maid might be."');
        } else {
          scene.text('"Sadly that means that she must not be distracted by her maid."');
        }
        scene.text('"I expect you to end your affair with my Tanya. It\'s for the best… of both of you."');
        scene.text('You stiffen. Did she just threaten you?');
        scene.text('"Did I make myself clear?"');
        scene.text('There is only one possible answer.');
        scene.actions([
          { label: 'Yes, Mistress Gala', handler: (st: GameState) => {
    (s as any).nichGalaKnowsPT = 10;
    scene.text('"Yes, Mistress Gala."');
    scene.text('You wonder what Tanya will say. Maybe you could just continue like before and be more careful?');
    scene.text('"Good. You can go now."');
    scene.actions([
      { label: 'Leave', goto: ['nichLivingroom', ''] },
    ]);
  } },
        ]);
      } else {
        if (((s as any).nichAfterBFEvent ?? 0) === 11) {
          scene.img('images/characters/city/gala/02.jpg');
          scene.text('After you are done cleaning up the table you go to Gala as requested.');
          // TODO-QSP: dynamic text: "<<$pcs_nickname>>, did you do what I told you to do? Regarding my little Tanya?...
          scene.text(`"${((s as any).pcs_nickname ?? 0)}, did you do what I told you to do? Regarding my little Tanya?"`);
          if (((s as any).nichGalaKnowsPT ?? 0) === 11) {
            scene.actions([
              { label: 'Yes', handler: (st: GameState) => {
    (s as any).nichGalaKnowsPT = 20;
    (s as any).nichGalaOpinion = 20;
    (s as any).nichGalaTraining = 1;
    scene.text('"Yes, Mistress Gala."');
    scene.text('"I thought so. Tanya appeared to be upset by something. You did the right thing, it\'s the best for everybody."');
    scene.text('You just nod.');
    scene.text('"You should look at the bright side. Now that you have some additional spare time you can focus on becoming a better maid. Just talk to me when I\'m in the living room and I will teach you to become a better servant."');
    scene.text('"I will, Mistress Gala."');
    scene.text('"Good. You can go for now."');
    scene.actions([
      { label: 'Leave', goto: ['nichLivingroom', ''] },
    ]);
  } },
            ]);
          } else {
            if (((s as any).nichGalaKnowsPT ?? 0) === 12  ||  ((s as any).nichGalaKnowsPT ?? 0) === 13) {
              scene.actions([
                { label: 'Yes (lie)', handler: (st: GameState) => {
    (s as any).nichGalaKnowsPT = 20;
    (s as any).nichGalaOpinion = 20;
    (s as any).nichGalaTraining = 1;
    scene.text('"Yes, Mistress Gala."');
    scene.text('"Really? Tanya seems to be better at hiding her feelings than I thought. Or she doesn\'t mind you breaking up with her."');
    scene.text('You just nod.');
    scene.text('"You should look at the bright side. Now that you have some additional spare time you can focus on becoming a better maid. Just talk to me when I\'m in the living room and I will teach you to become a better servant."');
    scene.text('"I will, Mistress Gala."');
    scene.text('"Good. You can go for now."');
    scene.actions([
      { label: 'Leave', goto: ['nichLivingroom', ''] },
    ]);
  } },
              ]);
            } else {
              if (((s as any).nichGalaKnowsPT ?? 0) === 14) {
                scene.actions([
                  { label: 'No', handler: (st: GameState) => {
    (s as any).nichGalaKnowsPT = 15;
    (s as any).nichGalaOpinion = 30;
    if (((s as any).nichGalaOpponent ?? 0) < 10) {
      (s as any).nichGalaOpponent = 10;
      (s as any).nichGalaOpponentDay = ((s as any).daystart ?? 0);
    }
    scene.text('"No, Mistress Gala, I did not."');
    scene.text('She stares at you angrily. "I thought I made myself clear. I gave you a direct order."');
    scene.text('"But I love Ta…"');
    scene.text('"Shut up! I don\'t want to hear about this nonsense! Get lost now, before I forget myself!"');
    scene.actions([
      { label: 'Leave', goto: ['nichLivingroom', ''] },
    ]);
  } },
                ]);
              }
            }
          }
        } else {
          if (((s as any).nichAfterBFEvent ?? 0) === 90) {
            scene.img('images/characters/city/nicholas/01.jpg');
            scene.text('After you are done cleaning up the table you go to Nicholas as requested.');
            // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I noticed something about you lately. Something about you ch...
            scene.text(`"${((s as any).pcs_nickname ?? 0)}, I noticed something about you lately. Something about you changed. Then I realized it. You are obviously pregnant."`);
            if (((s as any).thinkpreg ?? 0) > 0  ||  ((s as any).knowpreg ?? 0) > 0) {
              scene.text('You are shocked. He figured out your little secret.');
            } else {
              scene.text('You are shocked. He can\'t be serious! There is no way you are pregnant.');
            }
            scene.text('"Of course I can\'t allow you to stay my maid. A kid is an huge responsibility and it is not compatible with living here."');
            scene.text('He waits a second before he continues.');
            if (((s as any).nichPerformance ?? 0) <= 40) {
              scene.text('"Even though you were a less than mediocre maid I will make sure you won\'t end up without shelter. I transferred your next payment and a little extra to your bank account."');
              (s as any).nichTemp = ((s as any).nichSalaryNext ?? 0) + 5000;
            } else {
              if (((s as any).nichPerformance ?? 0) >= 80) {
                scene.text('"You were an exceptional maid and I hate to have to do this. But I see no other option. Of course I will make sure you won\'t end up without shelter. I transferred your next payment and a little bit extra to your bank account."');
                (s as any).nichTemp = ((s as any).nichSalaryNext ?? 0) + 20000;
              } else {
                scene.text('"You were a decent maid and I hate to have to do this. But I see no other option. Of course I will make sure you won\'t end up without shelter. I transferred your next payment and a little bit extra to your bank account."');
                (s as any).nichTemp = ((s as any).nichSalaryNext ?? 0) + 10000;
              }
            }
            scene.text('Nicholas leads you to the entrance. Your stuff has already been packed by one of Nicholas\' employees.');
            scene.text('"Good luck in your future."');
            scene.text('');
            // TODO-QSP: dynamic text: You got <b><<nichTemp>></b> transferred to your bank account.
            scene.text(`You got <b>${((s as any).nichTemp ?? 0)}</b> transferred to your bank account.`);
            scene.actions([
              { label: 'Get fired', goto: ['nichUtil', 'fired'] },
            ]);
          } else {
            if (((s as any).nichAfterBFEvent ?? 0) === 100) {
              scene.text('After you are done cleaning up the table Nicholas summons the whole family.');
              scene.text('"Well then, lets look for this missing necklace."');
              if (((s as any).nichGalaOpponent ?? 0) === 21) {
                scene.text('Nicholas leads the small group of you through the whole apartment, inspecting every place where a necklace could be hidden.');
                scene.text('The last room to be inspected is you private bedroom. Nicholas opens your drawer and pulls out the missing necklace.');
                // TODO-QSP: dynamic text: "<<$pcs_nickname>>… I can't believe what I am seeing. I never took you for a thi...
                scene.text(`"${((s as any).pcs_nickname ?? 0)}… I can't believe what I am seeing. I never took you for a thief. Under these circumstances I have to fire you. Be glad I don't call the police!"`);
                scene.text('Gala has a triumphant smile on her face.');
                scene.actions([
                  { label: 'Get fired', goto: ['nichUtil', 'fired'] },
                ]);
              } else {
                scene.text('The first place Nicholas leads is the make-up table of his personal bedroom.');
                scene.text('He carefully opens the jewelry box of Gala and presents the missing necklace.');
                scene.text('"Just as I thought. I hope you think twice before blaming somebody else for stealing your jewelry, dear wife."');
                scene.text('Gala looks as if she is foaming with anger. This clearly isn\'t over yet.');
                (s as any).nichGalaOpponent = 30;
                scene.actions([
                  { label: 'Leave', goto: ['nichLivingroom', ''] },
                ]);
              }
            } else {
              if (((s as any).nichAfterBFEvent ?? 0) === 200) {
                scene.text('After you are done cleaning up the table you go to Gala as requested.');
                scene.text('"Slave, it is time you serve your owner."');
                scene.actions([
                  { label: 'Continue', goto: ['nichGala', 'slaveGeneric'] },
                ]);
              } else {
                if (((s as any).nichAfterBFEvent ?? 0) === 210) {
                  scene.text('After you are done cleaning up the table you go to Gala as requested.');
                  scene.text('"Slave, today we make a little trip. There is somebody I want you to meet."');
                  scene.actions([
                    { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt 'nichGala', 'slaveDoc', 1
  } },
                  ]);
                } else {
                  if (((s as any).nichAfterBFEvent ?? 0) === 220) {
                    scene.actions([{ label: 'Continue', goto: ['nichGala', 'slaveImplant'] }]);
                  } else {
                    if (((s as any).nichAfterBFEvent ?? 0) === 5000) {
                      scene.img('images/characters/city/gala/events/police.jpg');
                      scene.text('While you clean up you hear the doorbell ringing. To your surprise the police actually showed up.');
                      scene.text('The policemen tell you that they really found the girl Katinka, the previous maid of the family, and that they have proof that Gala and Taras conspired to kidnap her. She spent the last month in some basement.');
                      scene.text('You get questioned by the police but since you started your job after Katinka vanished there isn\'t much they want to know from you. You truthfully tell them that Gala and Taras left the apartment in an hurry the last time you saw them.');
                      scene.text('The police also questions Nicholas and Tanya. Once they are done they politely say their goodbyes and leave.');
                      scene.text('');
                      scene.text('Nicholas takes you to the side once they are gone.');
                      // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I hope you know what this means. My wife… she is a criminal....
                      scene.text(`"${((s as any).pcs_nickname ?? 0)}, I hope you know what this means. My wife… she is a criminal. You can't tell anybody about this. Just keep the silence. I will use my connections with the mayor to prevent the police from further investigation. If we are lucky nobody else will find out about this. It could ruin my reputation. Of course I would have to pay the poor girl Katinka… but let me worry about that."`);
                      scene.text('You wonder whether it was Taras plan all along to let Katinka surface to prevent Nicholas from searching for Gala.');
                      scene.text('"And about Tanya… this is very difficult for her. We should give her some time to process these events."');
                      scene.text('"Of course, Master Nicholas."');
                      scene.text('"Thank you. I also believe that you might need some time yourself. My wife and you had a close connection as far as I know. You can take today and tomorrow off to sort your thoughts."');
                      (s as any).nichGalaTarasPlan = 20;
                      (s as any).minut = ((s as any).minut ?? 0) + 180;
                      qspCall(s, 'nichUtil', 'freeDay', 2);
                      qspCall(s, 'stat', '');
                      scene.actions([
                        { label: 'Continue', goto: ['nichLivingroom', ''] },
                      ]);
                    } else {
                      if (((s as any).nichAfterBFEvent ?? 0) === 5010) {
                        scene.img('images/characters/city/gala/02.jpg');
                        scene.text('After you are done cleaning up the table you go to Gala as requested.');
                        scene.text('"I have bad news, slave. The men I told to take care of Taras… well, one of them is in hospital. He got shot in the shoulder. And Taras vanished."');
                        scene.text('She hesitates for a second.');
                        scene.text('"We should both be on the lookout. He is out there somewhere. And he has nothing to lose."');
                        (s as any).nichGalaTarasPlan = 110;
                        scene.actions([
                          { label: 'Continue', goto: ['nichLivingroom', ''] },
                        ]);
                      } else {
                        scene.actions([{ label: 'Continue', goto: ['nichLivingroom', ''] }]);
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
  } },
      ]);
    }
  }
  scene.actions([
    { label: '<b>Return to the hallway</b>', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['nichApartment', ''] },
    { label: 'Go to the kitchen', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['nichKitchen', ''] },
  ]);
  scene.build();
}

export const nichLivingroom: LocationDef = {
  name: 'nichLivingroom',
  title: '<center><b>Nicholas\' Living Room</b></center>',
  region: 'other',
  locclass: 'livingr',
  description: ['The living room is furnished with finest leather couches of modern design, a fireplace, a large TV on the wall, several side tables and a cabinet and fridge for various expensive alcoholic beverages.'],
  enter: enter,
};
