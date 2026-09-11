import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterNatSchedule(s: GameState, scene: SceneBuilder): void {
  (s as any).NatashaShower = 0;
  (s as any).NatashaLoc = Math.floor(Math.random() * 8) + 0;
  if (((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) >= 18) {
    (s as any).NatashaLoc = Math.floor(Math.random() * 7) + 1;
  }
  if ((!((s as any).NatashaLoc ?? 0))) {
  } else {
    if (((s as any).NatashaLoc ?? 0) === 1) {
    } else {
      if (((s as any).NatashaLoc ?? 0) === 2) {
      } else {
        if (((s as any).NatashaLoc ?? 0) === 3) {
        } else {
          if (((s as any).NatashaLoc ?? 0) === 4) {
          } else {
            if (((s as any).NatashaLoc ?? 0) === 5) {
            } else {
              if (((s as any).NatashaLoc ?? 0) === 6) {
                (s as any).NatashaShower = 1;
              } else {
                if (((s as any).NatashaLoc ?? 0) === 7) {
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

function enterNatbelGo(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big16.jpg');
  scene.text('You go up to Natasha and she asks you, "Will you come to my house to do our homework?"');
  scene.actions([
    { label: 'Go with Natasha', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    if (((s as any).NatbelQW ?? 0)?.['VisitedHome'] === 0) {
      ((s as any).NatbelQW ?? {})['VisitedHome'] = 1;
    }
    (s as any).NatashaLoc = 2;
    qspCall(s, 'stat', '');
    scene.text(`<center><b>${((s as any).npc_firstname ?? 0)?.['A16']} ${((s as any).npc_lastname ?? 0)?.['A16']}</b></center>`);
    scene.img('images/characters/shared/headshots_main/big16.jpg');
    scene.text('It takes you 10 minutes to walk to Natasha\'s apartment. You discuss all the small stuff in your lives that amuse you.');
    if (((s as any).NatbelQW ?? 0)?.['QWstage'] < 2) {
      scene.actions([
        { label: 'Go into the apartment', goto: ['natbelEv', 'study_together'] },
      ]);
    } else {
      if (((s as any).NatbelQW ?? 0)?.['FriendLover'] === 0) {
        qspCall(s, 'natbel_cp_1', 'make_her_do_homework');
      }
      scene.actions([
        { label: 'Study together', goto: ['natbelEv', 'study_together'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterStudyTogether(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'npc_relationship', 'modify', 'A16', 'adore');
  if (((s as any).lernHome ?? 0) > 1) {
    qspCall(s, 'grades', 'homework', 'school', 'yes', 2, 1, 'A16');
  } else {
    qspCall(s, 'grades', 'homework', 'school', 'yes', 1, 1, 'A16');
  }
  (s as any).lern = ((s as any).lern ?? 0) + (Math.floor(Math.random() * 4) + 3);
  qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 2) + 1);
  if (((s as any).NatbelQW ?? 0)?.['QWstage'] === 0) {
    ((s as any).NatbelQW ?? {})['QWstage'] = 1;
  }
  ((s as any).NatbelQW ?? {})['homework'] = (((s as any).NatbelQW ?? {})['homework'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/natasha/study.jpg');
  scene.text('"Let\'s do our homework." You tell Natasha as you start taking your things from your bag.');
  scene.text('"Sure, let me grab an extra chair from the kitchen." She says as you sit down at her desk and open your textbook.');
  scene.text('Moments later Natasha returns and places her chair next to yours before grabbing her own homework and sitting down next to you.');
  scene.text('"Ok, let\'s see…" She says as the two of you start on the first task.');
  scene.text('You spend the better part of an hour working through all of your homework. Occasionally explaining things to each other when one of you doesn\'t understand something.');
  scene.text('Once you\'ve finished, you\'re confident you\'ll get a good grade on your homework.');
  scene.actions([
    { label: 'Finish homework', goto: ['natbelapt', 'natroom'] },
  ]);
  scene.build();
}

function enterSnack(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  if (((s as any).alko ?? 0) > 0) {
    (s as any).alko = ((s as any).alko ?? 0) - (1);
  }
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (20);
  qspCall(s, 'mood', 'raise', 'small');
  (s as any).fat = ((s as any).fat ?? 0) + (6);
  if (((s as any).pcs_energy ?? 0) >= 50) {
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (25);
  } else {
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (40);
  }
  if (((s as any).pcs_hydra ?? 0) >= 100) {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (25);
  } else {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (50);
  }
  (s as any).cumspclnt = 2;
  qspCall(s, 'cum_cleanup', '');
  (s as any).pcs_breath = 0;
  qspCall(s, 'stat', '');
  scene.text('"If you\'re going that route, you might as well keep shopping around." You laugh together for a while before moving on to another topic.');
  if ((!(Math.floor(Math.random() * 5) + 0))) {
    if (((s as any).NatbelQW ?? 0)?.['MetMother'] === 0) {
      scene.text('As you walk into the kitchen, you see a woman sitting at the dining table having a cup of tea.');
      scene.text('"Oh, I didn\'t know we had company. Do you go to school with Natasha?"');
      // TODO-QSP: dynamic text: "Yes, I'm <<$pcs_nickname>>. We're in the same class."
      scene.text(`"Yes, I'm ${((s as any).pcs_nickname ?? 0)}. We're in the same class."`);
      // TODO-QSP: dynamic text: "It's nice to meet a friend of Natasha's. I'm her mother <<$npc_firstname['A191'...
      scene.text(`"It's nice to meet a friend of Natasha's. I'm her mother ${((s as any).npc_firstname ?? 0)?.['A191']}, but you can call me ${((s as any).npc_nickname ?? 0)?.['A191']}."`);
      // TODO-QSP: dynamic text: "Pleased to meet you, <<$npc_nickname['A191']>>."
      scene.text(`"Pleased to meet you, ${((s as any).npc_nickname ?? 0)?.['A191']}."`);
      scene.actions([
        { label: 'Back to her room', handler: (st: GameState) => {
    (st as any).NatashaLoc = 2;
  }, goto: ['natbelapt', 'natroom'] },
      ]);
    } else {
      // TODO-QSP: dynamic text: As you walk into the kitchen, you see <<$npc_nickname['A191']>> sitting at the d...
      scene.text(`As you walk into the kitchen, you see ${((s as any).npc_nickname ?? 0)?.['A191']} sitting at the dining table having a cup of tea.`);
      // TODO-QSP: dynamic text: "Oh, I didn't know we had company. How are you <<$pcs_nickname>>?"
      scene.text(`"Oh, I didn't know we had company. How are you ${((s as any).pcs_nickname ?? 0)}?"`);
      // TODO-QSP: dynamic text: "Hi <<$npc_nickname['A191']>>, I'm doing well. How about you?"
      scene.text(`"Hi ${((s as any).npc_nickname ?? 0)?.['A191']}, I'm doing well. How about you?"`);
      scene.text('"I can\'t complain honey."');
      scene.text('Natasha, holding some snacks and your drinks cuts in: "Well, we have to get back to our studies mom."');
      scene.actions([
        { label: 'Back to her room', handler: (st: GameState) => {
    (st as any).NatashaLoc = 2;
  }, goto: ['natbelapt', 'natroom'] },
      ]);
    }
  } else {
    scene.text('As you walk into the kitchen, Natasha points to a cabinet. "Grab some chips out of there."');
    scene.text('While you are doing that, she grabs a couple of drinks from the fridge, and once you both have your spoils from your raid on the kitchen, you head back to her room.');
    scene.actions([
      { label: 'Back to her room', handler: (st: GameState) => {
    (st as any).NatashaLoc = 2;
  }, goto: ['natbelapt', 'natroom'] },
    ]);
  }
  scene.build();
}

function enterNatcumresponse(s: GameState, scene: SceneBuilder): void {
  if (((s as any).NatbelQW ?? 0)?.['KolkaCP'] === 0) {
    scene.text('Natasha suddenly tries to pull away from Kolka, saying "Pull out, not inside! I don\'t want to end up pregnant!"');
  } else {
    if (((s as any).NatbelQW ?? 0)?.['pregday'] > 0  &&  (((s as any).daystart ?? 0)-((s as any).NatbelQW ?? 0)?.['pregday']) > 20  &&  (((s as any).daystart ?? 0)-((s as any).NatbelQW ?? 0)?.['pregday']) <= 90) {
      scene.text('Natasha looks at you questioningly, whether will you let him cum inside of her. It doesn\'t seems to bother her that Kolka may knock her up.');
    } else {
      if (((s as any).NatbelQW ?? 0)?.['pregday'] > 0  &&  (((s as any).daystart ?? 0)-((s as any).NatbelQW ?? 0)?.['pregday']) > 90) {
        scene.text('Natasha looks at you questioningly, whether will you let him cum inside of her. It doesn\'t really matter now, since Kolka has already knocked her up.');
      } else {
        if (((s as any).NatbelQW ?? 0)?.['pregday'] === 0  &&  ((s as any).npc_pregtalk ?? 0)?.['A16'] === 1  &&  ((s as any).NatbelQW ?? 0)?.['babycount'] === 0) {
          scene.text('Natasha looks at you and almost inaudably whispers "Please let him cum inside me. I want a baby too."');
        } else {
          if (((s as any).NatbelQW ?? 0)?.['pregday'] === 0  &&  ((s as any).npc_pregtalk ?? 0)?.['A16'] === 1  &&  ((s as any).NatbelQW ?? 0)?.['babycount'] > 0) {
            scene.text('Natasha looks at you and moans "Please let him cum inside me. I need him to give me another baby."');
          } else {
            scene.text('Natasha looks at you questioningly, whether will you let him cum inside of her and risking her getting pregnant with your niece or nephew, or letting her pull away from you brother.');
          }
        }
      }
    }
  }
  scene.build();
}

function enterNatmomhome(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) < 23)  ||  (((s as any).week ?? 0) > 5  &&  ((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) < 23)) {
    ((s as any).NatbelQW ?? {})['MotherHome'] = 1;
  } else {
    ((s as any).NatbelQW ?? {})['MotherHome'] = 0;
  }
  scene.build();
}

function enterNatMotherState(s: GameState, scene: SceneBuilder): void {
  if (((s as any).NatbelQW ?? 0)?.['MotherState'] === 0) {
    ((s as any).NatbelQW ?? {})['MotherState'] = Math.floor(Math.random() * 6) + 1;
  }
  if (((s as any).NatbelQW ?? 0)?.['MotherState'] === 1) {
    ((s as any).NatbelQW ?? {})['MotherStateMsg'] = 'tired';
  } else {
    if (((s as any).NatbelQW ?? 0)?.['MotherState'] === 2) {
      ((s as any).NatbelQW ?? {})['MotherStateMsg'] = 'happy';
    } else {
      if (((s as any).NatbelQW ?? 0)?.['MotherState'] === 3) {
        ((s as any).NatbelQW ?? {})['MotherStateMsg'] = 'dressed to go out on a date';
      } else {
        if (((s as any).NatbelQW ?? 0)?.['MotherState'] === 4) {
          ((s as any).NatbelQW ?? {})['MotherStateMsg'] = 'drunk';
        } else {
          if (((s as any).NatbelQW ?? 0)?.['MotherState'] === 5) {
            ((s as any).NatbelQW ?? {})['MotherStateMsg'] = 'like something\'s bothering her';
          } else {
            if (((s as any).NatbelQW ?? 0)?.['MotherState'] === 6) {
              ((s as any).NatbelQW ?? {})['MotherStateMsg'] = 'angry';
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterAskState(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: As you step into the apartment, you strike up a brief conversation with <<$npc_n...
  scene.text(`As you step into the apartment, you strike up a brief conversation with ${((s as any).npc_nickname ?? 0)?.['A191']}.`);
  if (((s as any).NatbelQW ?? 0)?.['MotherState'] === 1) {
    // TODO-QSP: dynamic text: "You look a bit under the weather today <<$npc_nickname['A191']>>. Are you feeli...
    scene.text(`"You look a bit under the weather today ${((s as any).npc_nickname ?? 0)?.['A191']}. Are you feeling ok?"`);
    scene.text('"I\'ve had a migraine all day. I think I\'ll go relax on the couch for now. Would you be a dear and keep the music down tonight?"');
    scene.text('"Of course, we\'ll be careful not to disturb your rest."');
  } else {
    if (((s as any).NatbelQW ?? 0)?.['MotherState'] === 2) {
      // TODO-QSP: dynamic text: "You look cheerful today <<$npc_nickname['A191']>>."
      scene.text(`"You look cheerful today ${((s as any).npc_nickname ?? 0)?.['A191']}."`);
      scene.text('"Oh, it\'s just a pleasant day today."');
    } else {
      if (((s as any).NatbelQW ?? 0)?.['MotherState'] === 3) {
        if ((!(Math.floor(Math.random() * 2) + 0))) {
          // TODO-QSP: dynamic text: "Wow, <<$npc_nickname['A191']>>. Did you dress up just for me? Or is there a luc...
          scene.text(`"Wow, ${((s as any).npc_nickname ?? 0)?.['A191']}. Did you dress up just for me? Or is there a lucky guy involved?" You say with a wink.`);
          // TODO-QSP: dynamic text: "Thank you, <<$pcs_nickname>>. That's the kind of reaction I'm hoping for." She ...
          scene.text(`"Thank you, ${((s as any).pcs_nickname ?? 0)}. That's the kind of reaction I'm hoping for." She says with a slight blush on her cheeks.`);
        } else {
          // TODO-QSP: dynamic text: "Wow, <<$npc_nickname['A191']>>. That looks really good on you." You say after a...
          scene.text(`"Wow, ${((s as any).npc_nickname ?? 0)?.['A191']}. That looks really good on you." You say after admiring her attire.`);
          // TODO-QSP: dynamic text: "Thank you <<$pcs_nickname>>. That's the kind of reaction I'm hoping for."
          scene.text(`"Thank you ${((s as any).pcs_nickname ?? 0)}. That's the kind of reaction I'm hoping for."`);
        }
      } else {
        if (((s as any).NatbelQW ?? 0)?.['MotherState'] === 4) {
          // TODO-QSP: dynamic text: "Wow, <<$npc_nickname['A191']>>. Did you just come from a party? Or is the party...
          scene.text(`"Wow, ${((s as any).npc_nickname ?? 0)?.['A191']}. Did you just come from a party? Or is the party in here?" You say with a wink.`);
          // TODO-QSP: dynamic text: "Well <<$pcs_nickname>>, just between you and me, sometimes a girl can use a dri...
          scene.text(`"Well ${((s as any).pcs_nickname ?? 0)}, just between you and me, sometimes a girl can use a drink."`);
        } else {
          if (((s as any).NatbelQW ?? 0)?.['MotherState'] === 5) {
            // TODO-QSP: dynamic text: "<<$npc_nickname['A191']>>… You uhm… you look a bit upset, is something wrong?"
            scene.text(`"${((s as any).npc_nickname ?? 0)?.['A191']}… You uhm… you look a bit upset, is something wrong?"`);
            if (((s as any).NatbelQW ?? 0)?.['pregday'] > 0  &&  (((s as any).daystart ?? 0)-((s as any).NatbelQW ?? 0)?.['pregday']) > 90) {
              scene.text('"Natasha\'s been acting a bit strange lately." She suddenly looks at you intently. "Y-You\'d tell me if something important is going on right?"');
            } else {
              // TODO-QSP: dynamic text: "Just one of those days <<$pcs_nickname>>. Just go on and hang out with Natasha....
              scene.text(`"Just one of those days ${((s as any).pcs_nickname ?? 0)}. Just go on and hang out with Natasha. I'll be fine."`);
            }
          } else {
            if (((s as any).NatbelQW ?? 0)?.['MotherState'] === 6) {
              // TODO-QSP: dynamic text: "<<$npc_nickname['A191']>>… You uhm… don't look very pleased to see me. Did I… I...
              scene.text(`"${((s as any).npc_nickname ?? 0)?.['A191']}… You uhm… don't look very pleased to see me. Did I… Is it something I did?"`);
              if (((s as any).NatbelQW ?? 0)?.['pregday'] > 0  &&  (((s as any).daystart ?? 0)-((s as any).NatbelQW ?? 0)?.['pregday']) > 120) {
                // TODO-QSP: dynamic text: "Well <<$pcs_nickname>>, I'm still trying to adjust to the fact that my daughter...
                scene.text(`"Well ${((s as any).pcs_nickname ?? 0)}, I'm still trying to adjust to the fact that my daughter is pregnant. Excuse me if I haven't embraced that little fact yet."`);
                if (qspFunc(s, 'body_din', 'pregnancyVisibility') === 1) {
                  // TODO-QSP: dynamic text: "I don't know what you girls were thinking. The least you could have done was us...
                  scene.text(`"I don't know what you girls were thinking. The least you could have done was use protection. Getting pregnant when you're ${((s as any).age ?? 0)}, you're not ready to raise a baby!" She says angrily, looking at your obviously swollen belly.`);
                  scene.text('You lower your head at the accusation in her tone and mumble "S-Sorry…" as you pass by her into the hallway.');
                } else {
                  scene.text('"I-I\'m sure Natasha is smart enough to do what\'s right for the baby. She\'s so kind and smart, she\'ll definitely make a good mother."');
                  // TODO-QSP: dynamic text: <<$npc_nickname['A191']>> lowers her head and looks away from you as you pass by...
                  scene.text(`${((s as any).npc_nickname ?? 0)?.['A191']} lowers her head and looks away from you as you pass by her into the hallway.`);
                }
              } else {
                // TODO-QSP: dynamic text: "Oh no, <<$pcs_nickname>>. It's about work. Nothing for you to worry about."
                scene.text(`"Oh no, ${((s as any).pcs_nickname ?? 0)}. It's about work. Nothing for you to worry about."`);
              }
            }
          }
        }
      }
    }
  }
  scene.actions([
    { label: 'Continue', goto: ['natbelapt', 'hallway'] },
  ]);
  scene.build();
}

function enterCarrybooks(s: GameState, scene: SceneBuilder): void {
  if (((s as any).NatbelQW ?? 0)?.['QWstage'] === 4) {
    ((s as any).NatbelQW ?? {})['QWstage'] = 5;
  }
  scene.img('images/characters/pavlovsk/school/girl/natasha/natgetreadyschool.jpg');
  scene.text('When you head over to Natasha\'s apartment to pick her up her mother opens the door and tells you she\'s in her room getting ready so you go there.');
  scene.text('As you open the door you see Natasha sitting on her small sofa, pulling up her stockings');
  scene.text('"Ready to go?" You ask her, as you put your bag next to her.');
  if (((s as any).NatbelQW ?? 0)?.['QWstage'] < 6) {
    scene.text('Natasha grabs both of your bags and you head to school.');
  } else {
    if (((s as any).NatbelQW ?? 0)?.['QWstage'] < 7) {
      qspCall(s, 'willpower', 'exhib', 'force', 'easy');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Lift her skirt [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Lift her skirt [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'force', 'easy');
    qspCall(s, 'willpower', 'pay', 'force');
    scene.img('images/characters/pavlovsk/school/girl/natasha/skirt.jpg');
    scene.text('You can\'t stop yourself from pulling up her skirt as she turns to grab your bag. "Cute panties Natasha, they match the stockings."');
    // TODO-QSP: dynamic text: Natasha looks over her shoulder at you with a faint blush on her cheeks. "I… Uhm...
    scene.text(`Natasha looks over her shoulder at you with a faint blush on her cheeks. "I… Uhm… Thank you ${((s as any).pcs_nickname ?? 0)}." She lets out in a whisper.`);
    scene.text('Not wanting to lose your mule to school you let her skirt fall down again and head to school.');
    scene.actions([
      { label: 'Go to school', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 9;
  }, goto: ['gschool_grounds', 'main'] },
    ]);
  } },
        ]);
      }
    } else {
      qspCall(s, 'willpower', 'exhib', 'force', 'easy');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Lift her skirt [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Lift her skirt [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'force', 'easy');
    qspCall(s, 'willpower', 'pay', 'force');
    scene.img('images/characters/pavlovsk/school/girl/natasha/skirt.jpg');
    scene.text('You can\'t stop yourself from pulling up her skirt as she turns to grab your bag. "Cute panties Natasha, they match the stockings."');
    // TODO-QSP: dynamic text: Natasha looks over her shoulder at you with a faint blush on her cheeks. "I… Uhm...
    scene.text(`Natasha looks over her shoulder at you with a faint blush on her cheeks. "I… Uhm… Thank you ${((s as any).pcs_nickname ?? 0)}." She says, blushing at you prettily.`);
    scene.text('"We have some time before school." You tell her while you start pulling off her skirt and panties.');
    scene.text('"Today you\'ll be wearing them a little differently." You say, pushing her back on the couch. "Open your legs."');
    scene.text('Natasha obediently opens her legs for you. Showing off her pretty pussy. Not wasting any time you start playing with her, first rubbing her lips, then focussing more on her clit as you watch closely while Natasha\'s pussy gets wetter and wetter.');
    scene.actions([
      { label: 'Stuff her panties', handler: (st: GameState) => {
    ((s as any).NatbelQW ?? {})['panty_stuff_day'] = ((s as any).daystart ?? 0);
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/stuffpanties.mp4');
    scene.text('You stop playing with her pussy and grab her panties, handing them over to her. "Put them inside your pussy."');
    scene.text('Natasha looks at you in confusion for a second but then starts to slowly push them into her pussy.');
    // TODO-QSP: dynamic text: When there's only enough left to easily grab on in case you'd want to pull them ...
    scene.text(`When there's only enough left to easily grab on in case you'd want to pull them out she stops and looks at you expectantly. "Like this ${((s as any).pcs_nickname ?? 0)}?"`);
    scene.text('You reach down and push the last bit inside as well, holding them in with your finger for a bit before pulling your finger out again.');
    scene.text('"This is how you\'ll wear your panties for me at school today Natasha." You tell her. "Now put your skirt back on or we\'ll be late.');
    scene.actions([
      { label: 'Go to school', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 9;
  }, goto: ['natbelEv', 'schoolwalk'] },
    ]);
  } },
    ]);
  } },
        ]);
      }
    }
  }
  scene.actions([
    { label: 'Go to school', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 9;
  }, goto: ['gschool_grounds', 'main'] },
  ]);
  scene.build();
}

function enterSchoolwalk(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 5) + 0) > 0) {
    scene.actions([{ label: 'Continue', goto: ['gschool_grounds', 'main'] }]);
  }
  if (((s as any).NatbelQW ?? 0)?.['KolkaTease'] === 0) {
    ((s as any).NatbelQW ?? {})['KolkaTease'] = 1;
  }
  scene.img('images/characters/pavlovsk/school/girl/natasha/tease.jpg');
  scene.text('As you reach the bottom of the stairs, you notice Kolka coming down as well.');
  scene.text('Deciding to tease him a bit you grab the bottom of Natasha\'s skirt and pull it up while you bend over yourself to show him both of your asses.');
  scene.text('Natasha quickly slaps your hand away and the two of you resume your walk to school. As you exit the hall you can\'t hear Kolka\'s footsteps. He must have stopped in his tracks at the sight.');
  scene.actions([
    { label: 'Continue on to school', goto: ['gschool_grounds', 'main'] },
  ]);
  scene.build();
}

function enterLaundry(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'natbelEv', 'laundry');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  if (((s as any).NatashaLoc ?? 0) !== 7) {
    scene.text('There is nobody here. This room isn\'t exactly big enough to hang out in so you head back out.');
    return;
    scene.actions([
      { label: 'Go to the hallway', goto: ['natbelapt', 'hallway'] },
    ]);
  }
  scene.text('<center><b>Laundry room</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/sex/natlaundry.jpg');
  scene.text('You walk in and see Natasha just turning on the machine. She turns around and sees you in the doorway.');
  if (((s as any).NatbelQW ?? 0)?.['cucumber'] === 0  ||  ((s as any).NatbelQW ?? 0)?.['QWstage'] < 10) {
    // TODO-QSP: dynamic text: "Oh hey <<$pcs_nickname>>, let's go to my room"
    scene.text(`"Oh hey ${((s as any).pcs_nickname ?? 0)}, let's go to my room"`);
    return;
  }
  qspCall(s, 'willpower', 'mast', 'force', 'easy');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Make her play with a cucumber [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Make her play with a cucumber [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'force');
    if (((s as any).NatbelQW ?? 0)?.['QWstage'] === 10) {
      ((s as any).NatbelQW ?? {})['QWstage'] = 11;
    }
    ((s as any).NatbelQW ?? {})['cucumber'] = 0;
    scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/sex/natashacucumber01.jpg');
    scene.text('You move over and make her sit on top of it.');
    scene.text('"I thought we could have some fun in here. The noise from the washer should prevent anyone from hearing." You tell her as you hand her the cucumber.');
    scene.text('"What\'s this for?" She asks you. "I Want to see you slide it in your pussy Natasha." You tell her with an excited grin on your face.');
    scene.text('"It\'s enormous, it won\'t fit." She hesitantly tries to back out. "I\'ve seen you take bigger. Now open those legs and get yourself ready or I\'ll put it in myself right now." You hiss at her.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/sex/natashacucumber02.jpg');
    scene.text('Natasha has a shocked look on her face as she scoots back a bit and obediently starts to play with her pussy. You can see she\'s already wet. "Being dominated really turns her on." You think to yourself.');
    scene.text('"T-The vibrations from the washer are…" She starts moaning softly.');
    scene.text('"You better start opening that pussy up or it\'s going to sting bitch." You continue in the same threatening tone you used before. Natasha moans as she slips two fingers inside. "That went easy enough, now add a third." You order her, and to your delight she immediately forces a third finger inside her vagina.');
    scene.text('"Good, now spread your pussy, I want to have a last look before the cucumber goes in." You hiss again, wanting to make sure she keeps obeying your orders immediately.');
    scene.text('You smile as you she opens her pussy for you with her hands, showing you just how dripping wet she is.');
    scene.actions([
      { label: 'Now put it in', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/sex/natashacucumber03.jpg');
    scene.text('Natasha lets out a loud moan as she forces the cucumber inside her pussy even though she was biting her lip to try and stay quiet. It slides about half way in on the first stroke. "You see, it wasn\'t too big at all." You praise her. "Now I want to see you fuck yourself hard. Keep going."');
    scene.text('She\'s all too eager to obey. With a furious effort she rapidly strokes the big vegetable in and out of herself. Her moans growing louder and louder. Within a few minutes you are rewarded with the sight of her delicious orgasm. Her legs shake as she keeps fucking herself for a bit longer before she finally slides it all the way out and leans back. Her face sporting a deep red flush.');
    scene.text('You lean in and kiss her passionately before telling her: "Let\'s go to your room."');
    scene.actions([
      { label: 'Go to her room', handler: (st: GameState) => {
    (st as any).NatashaLoc = 2;
  }, goto: ['natbelapt', 'natroom'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Go to her room', handler: (st: GameState) => {
    (st as any).NatashaLoc = 2;
  }, goto: ['natbelapt', 'natroom'] },
  ]);
  scene.build();
}

function enterShowerspy(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A16');
  qspCall(s, 'core_library', 'setloc', 'natbelapt', 'bathroom');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natshowerspy01.jpg');
  scene.text('You open the bathroom door as quietly as you can and peer through the crack to see Natasha sitting down in the shower while she\'s shaving her pussy, completely absorbed in the her grooming.');
  qspCall(s, 'arousal', 'voyeur', 5, 'lesbian');
  if (((s as any).NatbelQW ?? 0)?.['QWstage'] < 5  &&  ((s as any).NatbelQW ?? 0)?.['FriendLover'] < 8) {
    scene.text('Not wanting to intrude any further you decide to leave her be and close the door again.');
  } else {
    if (((s as any).NatbelQW ?? 0)?.['QWstage'] >= 5) {
      qspCall(s, 'willpower', 'voyeur', 'self', 'easy');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Get a closer look [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Get a closer look [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natshowerspy02.jpg');
    scene.text('Wanting to get a better look you step into the bathroom and close the door behind you.');
    scene.text('"Making yourself presentable I see." You say with a grin, which breaks Natasha out of her concentration, making her look up at you with an Embarrassed look on her face.');
    scene.text('She then shrugs and gets back to her shaving. "I-It just feels nice… You know…" She lets out.');
    scene.text('"Yeah, I understand. Freshly shaven skin is really nice to touch." You let her know as you keep watching while she finishes shaving.');
    qspCall(s, 'arousal', 'erotic_nudity', 5, 'lesbian');
    if (((s as any).NatbelQW ?? 0)?.['QWstage'] >= 9) {
      scene.actions([
        { label: 'Keep chatting while she rinses off', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/sex/natshowerspy02.jpg');
    scene.text('When Natasha is done she quickly rinses off the remaining shaving cream and then looks up at you with a mischievous grin on her face.');
    scene.text('"This feels even nicer." She says as she spreads her pussylips with one hand and inserts the handle of her razor in her pussy, gently pushing it in and then slowly pulling it out a few times.');
    scene.text('"Someone\'s in a great mood today." You praise her as you feel your own pussy getting wet at the sight of Natasha playing with herself in the shower. "I think we should continue this in your room."');
    scene.text('Natasha quickly gets up and rinses off her entire body and you hand her a towel as she steps out of the shower.');
    scene.text('"Don\'t take too long. I\'ll be in your room." You tell her and leave the bathroom.');
    qspCall(s, 'arousal', 'erotic_nudity', 5, 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['natbelapt', 'natroom'] },
    ]);
  } },
      ]);
    } else {
      qspCall(s, 'arousal', 'end');
      scene.text('When Natasha is done she quickly rinses off the remaining shaving cream and you hand her a towel as she steps out of the shower.');
      scene.text('"I\'ll let you finish up in here. I\'ll be in your room." You tell her and leave the bathroom.');
      scene.actions([
        { label: 'Leave', goto: ['natbelapt', 'natroom'] },
      ]);
    }
  } },
        ]);
      }
    } else {
      scene.actions([
        { label: 'Join her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha36.jpg');
    scene.text('You open the bathroom door as quietly as you can and peer through the crack to see Natasha taking her shower.');
    // TODO-QSP: dynamic text: Natasha spots you and grins. "So <<$pcs_nickname>>, come to spy on me eh? How ab...
    scene.text(`Natasha spots you and grins. "So ${((s as any).pcs_nickname ?? 0)}, come to spy on me eh? How about you come and join me?"`);
    scene.text('You smile and respond. "Well now that didn\'t take you long did it? Missing my sexy body already I take it?"');
    scene.text('At this she goes bright red as you undress and join her starting off with a long kiss then you both start lathering each other.');
    qspCall(s, 'arousal', 'erotic_nudity', 10, 'lesbian');
    qspCall(s, 'arousal', 'flash', (-2), 'lesbian');
    qspCall(s, 'arousal', 'kiss', (-1), 'lesbian');
    qspCall(s, 'natbelEv', 'shower_escalation');
  } },
      ]);
    }
  }
  scene.actions([
    { label: 'Leave', goto: ['natbelapt', 'hallway'] },
  ]);
  scene.build();
}

function enterShowerevent1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A16');
  (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (1);
  // TODO-QSP: dynamic text: Despite the pattering noise of the running water, you hear the bathroom door ope...
  scene.text(`Despite the pattering noise of the running water, you hear the bathroom door open and look over to see ${((s as any).npc_nickname ?? 0)?.['A191']} walking into the bathroom.`);
  scene.text('"Sorry dear, you didn\'t answer my knock, and I have to go."');
  if (((s as any).deodorant_on ?? 0) === 1) {
    qspCall(s, 'sweat', 'remove_deo');
    scene.text('<br>Your deodorant gets washed away in the shower.');
  }
  if (((s as any).pcs_inhib ?? 0) >= 50) {
    scene.actions([
      { label: 'Tease her a bit', handler: (st: GameState) => {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (3);
    scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/sex/shower02.jpg');
    // TODO-QSP: dynamic text: Looking straight at her you give her a smile, then put your leg up, giving her t...
    scene.text(`Looking straight at her you give her a smile, then put your leg up, giving her the perfect view of the front of your wet, naked body. "${((s as any).npc_nickname ?? 0)?.['A191']}", you begin immediately, "I wanted a woman's opinion on this. Do you think my breasts are big enough?"`);
    // TODO-QSP: dynamic text: <<$npc_nickname['A191']>> looks at your exposed body for a few seconds with a sl...
    scene.text(`${((s as any).npc_nickname ?? 0)?.['A191']} looks at your exposed body for a few seconds with a slight blush on her cheeks.`);
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, there's nothing wrong with the size of your breasts."
    scene.text(`"${((s as any).pcs_nickname ?? 0)}, there's nothing wrong with the size of your breasts."`);
    // TODO-QSP: dynamic text: You get back to showering making sure to pay special attention to your breasts. ...
    scene.text(`You get back to showering making sure to pay special attention to your breasts. ${((s as any).npc_nickname ?? 0)?.['A191']} sits down on the toilet, and you can hear the sound of her peeing. You get turned on a bit, taking glances at her. Finally, she gets up, flushes and washes her hands before leaving you alone again in the bathroom.`);
    qspCall(s, 'arousal', 'flash', 2, 'lesbian');
    qspCall(s, 'arousal', 'erotic_nudity', 3, 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get out of the shower', goto: ['natbelapt', 'bathroom'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Let her', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/natbelapt/sex/shower01.jpg');
    // TODO-QSP: dynamic text: You angle your body away from the door as you say: "Oh it's no problem <<$npc_ni...
    scene.text(`You angle your body away from the door as you say: "Oh it's no problem ${((s as any).npc_nickname ?? 0)?.['A191']}. It's your home."`);
    // TODO-QSP: dynamic text: You get back to showering with your back turned to <<$npc_nickname['A191']>> as ...
    scene.text(`You get back to showering with your back turned to ${((s as any).npc_nickname ?? 0)?.['A191']} as you hear her pee. You feel a bit awkward while you listen to her urinate, flush, and then wash her hands before finally the door clicks shut again.`);
    scene.actions([
      { label: 'Get out of the shower', goto: ['natbelapt', 'bathroom'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterStinkyShower(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A16');
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha36.jpg');
  // TODO-QSP: dynamic text: "Oh <<$pcs_nickname>>! How do I put this? You need a shower!" Natasha goes red s...
  scene.text(`"Oh ${((s as any).pcs_nickname ?? 0)}! How do I put this? You need a shower!" Natasha goes red somewhat embarrassed at telling you that.`);
  scene.text('"Yeah, I guess I do sorry, was in a rush and didn\'t have time. Erm… Join me?"');
  // TODO-QSP: dynamic text: "Are you sure <<$pcs_nickname>>?"
  scene.text(`"Are you sure ${((s as any).pcs_nickname ?? 0)}?"`);
  scene.text('"Absolutely! That was never in doubt!" You respond smiling.');
  scene.text('You both head to the bathroom and undress. Natasha turns the shower on pausing for a passionate kiss before getting in and lathering each other.');
  qspCall(s, 'arousal', 'erotic_nudity', (-2), 'lesbian');
  qspCall(s, 'arousal', 'flash', (-1), 'lesbian');
  (s as any).noshampoo = 1;
  qspCall(s, 'din_van', 'showerdin');
  qspCall(s, 'stat', '');
  qspCall(s, 'natbelEv', 'shower_escalation');
  scene.build();
}

function enterShowerEscalation(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A16');
  scene.actions([
    { label: 'Escalation', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha37.jpg');
    scene.text('Unable to keep your hands off each other the kissing quickly escalates.');
    scene.text('Natasha\'s hand is soon between your legs as her fingers begin to work their magic.');
    scene.text('You, in turn, push your leg between Natasha\'s as she starts to ride your leg.');
    qspCall(s, 'arousal', 'foreplay', 3, 'lesbian');
    qspCall(s, 'arousal', 'kiss', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Grind', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha38.jpg');
    scene.text('It\'s not long before you lean forward and push your arse back into Natasha\'s pussy and start grinding on her.');
    // TODO-QSP: dynamic text: Oh! Fuck! <<$pcs_nickname>>! I'm going to…"
    scene.text(`Oh! Fuck! ${((s as any).pcs_nickname ?? 0)}! I'm going to…"`);
    scene.text('You decide to pull back at the last second…');
    qspCall(s, 'arousal', 'foreplay', 5, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Licking', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha39.jpg');
    scene.text('You push Natasha\'s head down to your pussy and hold it there');
    scene.text('Your legs start to feel like jelly so you sit on the small ledge.');
    scene.text('Natasha kneels in front of you and spreads your legs and immediately starts playing with your clit and licking you out.');
    scene.text('Although the build and crescendo seems to take an age it could only have been a couple of minutes before you\'re ready to cum in her mouth.');
    scene.text('"No… Not… yet…" You pant. "Bedroom… Now!"');
    qspCall(s, 'arousal', 'cuni', 5, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Bed', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/kissing_games/natasha40.jpg');
    scene.text('Once on the bed after another long and very passionate kiss you both lie back astride each other\'s leg and start rubbing back and forth… back and forth.');
    scene.text('You both gradually speed up as your excitement grows.');
    scene.text('As your movements get faster and you push against each other you both rapidly near the point of no return.');
    scene.text('Every muscle in your body tightens and pulsate. Your pussy is soaking as your vagina pulses uncontrollably.');
    scene.text('Suddenly juices pour from Natasha\'s clit as you both reach an orgasm simultaneously and bite your lips so as not to scream.');
    // TODO-QSP: dynamic text: As you slowly come down in your afterglow and cuddle up Natasha whispers to you ...
    scene.text(`As you slowly come down in your afterglow and cuddle up Natasha whispers to you with a cheeky grin. "Umm, that was nice ${((s as any).pcs_nickname ?? 0)}, we'll have to have a repeat performance at some point."`);
    scene.text('You give her a hug as you reply. "Yep, 100% but we\'ll need to be careful we don\'t end up too wrinkly from all the water."');
    qspCall(s, 'arousal', 'kiss', 1, 'lesbian');
    qspCall(s, 'arousal', 'trib', 5, 'lesbian', 'no_orgasm_msg');
    qspCall(s, 'arousal', 'end');
    if (((s as any).loc ?? 0) === 'natbelapt') {
      scene.actions([
        { label: 'Return to her room', goto: ['natbelapt', 'natroom'] },
      ]);
    } else {
      scene.actions([
        { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
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
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'nat_schedule':
      enterNatSchedule(s, scene);
      break;
    case 'natbel_go':
      enterNatbelGo(s, scene);
      break;
    case 'study_together':
      enterStudyTogether(s, scene);
      break;
    case 'snack':
      enterSnack(s, scene);
      break;
    case 'natcumresponse':
      enterNatcumresponse(s, scene);
      break;
    case 'natmomhome':
      enterNatmomhome(s, scene);
      break;
    case 'nat_mother_state':
      enterNatMotherState(s, scene);
      break;
    case 'ask_state':
      enterAskState(s, scene);
      break;
    case 'carrybooks':
      enterCarrybooks(s, scene);
      break;
    case 'schoolwalk':
      enterSchoolwalk(s, scene);
      break;
    case 'laundry':
      enterLaundry(s, scene);
      break;
    case 'showerspy':
      enterShowerspy(s, scene);
      break;
    case 'showerevent1':
      enterShowerevent1(s, scene);
      break;
    case 'stinky_shower':
      enterStinkyShower(s, scene);
      break;
    case 'shower_escalation':
      enterShowerEscalation(s, scene);
      break;
    default:
      enterNatSchedule(s, scene);
      break;
  }
}

export const natbelEv: LocationDef = {
  name: 'natbelEv',
  title: '<<$npc_firstname[\'A16\']>> <<$npc_lastname[\'A16\']>>',
  region: 'other',
  locationType: 'bathroom',
  enter: enter,
};
