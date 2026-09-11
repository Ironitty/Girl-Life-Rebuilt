import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterLesco(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A7', 'like');
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big7.jpg');
  if ((!(Math.floor(Math.random() * 6) + 0))) {
    scene.text('You see Lesco talking to Lera and, unsurprisingly, things look tense. Knowing how volatile the gopnik can be, you approach them carefully. They greet you and Lesco is the first to speak up. "Lera and I were talking about her needing to do her chores at home, but she doesn\'t want to listen…"');
    scene.text('An annoyed Lera is quick to snap back. "Why are you telling your little girlfriend my business? Trying to show off? Try that shit again and I\'ll tell her all your dirty… little… secrets…" she says while prodding him on the chest.');
    scene.text('Hearing this, you wonder what kind of secrets someone like Lesco could be hiding, but keep quiet as you don\'t really want to get involved. They continue bickering as you decide to leave them alone.');
  } else {
    if (((s as any).fame ?? 0)?.['pav_slut'] > 200) {
      if (((s as any).npc_rel ?? 0)?.['A7'] >= 50) {
        // TODO-QSP: dynamic text: Lesco doesn't look comfortable as you approach, but you think he's too shy to sa...
        scene.text(`Lesco doesn't look comfortable as you approach, but you think he's too shy to say anything to chase you off. "Oh… Hey ${((s as any).pcs_nickname ?? 0)}…" You engage in an awkward conversation with him as he avoids eye contact with you and gives you brief, one word answers.`);
      } else {
        scene.text('He panics when he sees you walking over. "Get away from me! I have enough problems without being seen with the likes of you!" he exclaims as he quickly moves away from you.');
      }
    } else {
      if (((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2  ||  ((s as any).grupTipe ?? 0) === 4) {
        (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) - (1);
        (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (1);
        (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) - (1);
        (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
        if (((s as any).npc_rel ?? 0)?.['A7'] >= 50) {
          scene.text('Lesco engages you in conversation, but he keeps his answers short. You can tell he\'s still afraid of you bullying him.');
          scene.text('"Why do even want to talk with me? Is this some sort of joke so everyone will laugh at me?"');
        } else {
          if (((s as any).npc_rel ?? 0)?.['A7'] <= 20) {
            scene.text('Lesco cowers up as you approach. "Leave me alone! I\'m not doing anything to you! Please just go away!"');
            scene.text('Seeing that you\'re not going to get a word out of him, you sigh as you walk away.');
          } else {
            scene.text('Lesco looks at you with fear in his eyes.');
            scene.text('"Hey, I\'m not here to pick on you. I just want to talk," you say softly trying to reassure him, but he\'s not buying it.');
            scene.text('"That\'s what they always say. Just leave me alone!"');
            scene.text('Despite your best efforts, you barely get a word out of him as he nervously waits for you to leave him alone.');
          }
        }
      } else {
        if (((s as any).grupTipe ?? 0) === 3) {
          (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) - (1);
          (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (1);
          (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) - (1);
          (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
          if (((s as any).npc_rel ?? 0)?.['A7'] >= 50) {
            scene.text('You see Lesco sitting quietly by himself as usual. Feeling sorry for him, you approach with a friendly smile.');
            scene.text('When he sees you, he relaxes and shyly looks up at you. "What do you want?"');
            scene.text('You shrug your shoulders, saying you just wanted to hang out. You end up talking with him about living at the Tsarev residence and, as you suspected, how Lera makes his life a living hell at home. He does tell you a funny story about when they were younger and things were better. Lera found a dead bird and started poking it, but it turned out to still be alive and ended up attacking her. Even after the bird had flew away, she continued running and screaming all the way home.');
          } else {
            if (((s as any).npc_rel ?? 0)?.['A7'] <= 20) {
              scene.text('You see Lesco sitting quietly by himself as usual. Feeling sorry for him, you approach with a friendly smile.');
              scene.text('When he sees you, he stiffens and looks up at you with an apprehensive expression. "Please leave me alone."');
              scene.text('"I just want to talk," you say softly trying to reassure him, but he isn\'t buying it and you eventually give up and walk away.');
            } else {
              scene.text('You see Lesco sitting quietly by himself as usual. Feeling sorry for him, you approach with a friendly smile and strike up a conversation with him. He seems a bit hesitant at first, but quickly engages you in some idle chatter about school.');
            }
          }
        } else {
          if (((s as any).npc_rel ?? 0)?.['A7'] >= 50) {
            scene.text('You see Lesco sitting quietly by himself as usual. Feeling sorry for him, you approach with a friendly smile.');
            scene.text('When he sees you, he relaxes and shyly looks up at you. "What do you want?"');
            scene.text('You shrug your shoulders, saying you just wanted to hang out. You end up talking with him about living at the Tsarev residence and, as you suspected, how Lera makes his life a living hell at home. He does tell you a funny story about when they were younger and things were better. Lera found a dead bird and started poking it, but it turned out to still be alive and ended up attacking her. Even after the bird had flew away, she continued running and screaming all the way home.');
          } else {
            if (((s as any).npc_rel ?? 0)?.['A7'] <= 20) {
              scene.text('You see Lesco sitting quietly by himself as usual. Feeling sorry for him, you approach with a friendly smile.');
              scene.text('When he sees you, When he sees you, he stiffens and looks up at you with an apprehensive expression. "Please leave me alone."');
              scene.text('"I just want to talk," you say softly trying to reassure him, but he isn\'t buying it and you eventually give up and walk away.');
            } else {
              scene.text('You see Lesco sitting quietly by himself as usual. Feeling sorry for him, you approach with a friendly smile and strike up a conversation with him. He seems a bit hesitant at first, but quickly engages you in some idle chatter about school.');
            }
          }
        }
      }
    }
  }
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterPetia(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A159', 'like');
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big159.jpg');
  if (((s as any).fame ?? 0)?.['pav_slut'] > 200) {
    if (((s as any).soniaQW ?? 0)?.['slut'] > 0) {
      scene.text('"Look everyone, the other school bike is here! We don\'t have to share Sonia anymore!" Petia loudly announces to the room.');
      scene.text('The nerds awkwardly ignore him as he walks up to you with a wide grin. His filthy teeth look like they haven\'t seen a toothbrush in years, if ever. "Are you here to finally give me a blowjob?" he asks with a creepy stare.');
      scene.text('Despite your reputation, even you still have standards and snort in disgust before walking away.');
      scene.text('Unfazed by your rejection, he walks up to Sonia and asks her the same question. You can see her visibly gag in disgust.');
    } else {
      scene.text('"Look everyone, the school bike is here!" Petia loudly announces to the room.');
      scene.text('The nerds awkwardly ignore him as he walks up to you with a wide grin. His filthy teeth look like they haven\'t seen a toothbrush in years, if ever. "Are you here to finally give me a blowjob?" he asks with a creepy stare.');
      scene.text('Despite your reputation, even you still have standards and snort in disgust before walking away.');
    }
  } else {
    if (((s as any).grupTipe ?? 0) === 1) {
      (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) - (1);
      (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (1);
      (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) - (1);
      (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
      if (((s as any).npc_rel ?? 0)?.['A159'] >= 50) {
        // TODO-QSP: dynamic text: Petia grins as you approach. He invades your personal space without a care as a ...
        scene.text(`Petia grins as you approach. He invades your personal space without a care as a raunchy smell hits your nostrils. "Hey ${((s as any).pcs_nickname ?? 0)}, you're smoking hot, you know that? I might just let you date me if you ask nicely."`);
        scene.text('He gives you a creepy smile that shows his filthy teeth, which look like they haven\'t seen a toothbrush in years, if ever.');
        scene.text('"<i>You</i>? Dating <i>me</i>?" you snort before you burst out into a fit of laughter. "Petia, I wouldn\'t date you if my life depended on it. If we were the last people on Earth, I\'d rather jump off a cliff than spend a single moment alone with you!"');
        if (((s as any).tits ?? 0) >= 4) {
          scene.text('You notice he isn\'t paying attention and follow his gaze down to see that he\'s staring at your breasts instead. "My eyes are up here, perv! Are you drooling? Eeeww! Go and cream your pants at your own tits, you fat loser!" you exclaim while covering your breasts with your arm. He quickly darts his eyes back up.');
        }
        scene.text('Disgusted, you back away, but sense his creepy gaze on the back of your head as you walk away.');
      } else {
        scene.text('Petia looks fearful as you approach. "What do you want?" he snarls.');
        scene.text('"You should be more polite. This is the only time any girl will ever willingly speak to a loser like you," you reply while trying not to inhale his foul aroma.');
        scene.text('He gives you a creepy smile that shows his filthy teeth, which look like they haven\'t seen a toothbrush in years, if ever. "You want to date me. That\'s why you\'re talking to me."');
        scene.text('You snort. "What? No! Eeeww!" You quickly back away and leave him to his delusional fantasy, feeling his creepy gaze on the back of your head as you walk away.');
      }
    } else {
      if (((s as any).grupTipe ?? 0) === 2) {
        (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) - (1);
        (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (1);
        (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) - (1);
        (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
        if (((s as any).npc_rel ?? 0)?.['A159'] >= 50) {
          // TODO-QSP: dynamic text: Petia grins as you approach. He invades your personal space without a care as a ...
          scene.text(`Petia grins as you approach. He invades your personal space without a care as a raunchy smell hits your nostrils. "Hey ${((s as any).pcs_nickname ?? 0)}, did I mention that you have an amazing looking body and look so hot when you work out in gym class? You're too good looking for those jacked up monkeys and should hook up with me instead."`);
          scene.text('He gives you a creepy smile that shows his filthy teeth, which look like they haven\'t seen a toothbrush in years, if ever.');
          scene.text('"<i>You</i>? Dating <i>me</i>?" you snort before you burst out into a fit of laughter. "Petia, I wouldn\'t date you if my life depended on it. If we were the last people on Earth, I would rather jump off a cliff than spend a single moment alone with you!""');
          if (((s as any).tits ?? 0) >= 4) {
            scene.text('You notice he isn\'t paying attention and follow his gaze down to see that he\'s staring at your breasts instead. "Those \'jacked up monkeys\' would beat your ass if they saw you drooling at my tits. Put your tongue back in your mouth, perv!" you sternly tell him while covering your breasts with your arm. He quickly darts his eyes back up.');
          }
          scene.text('Disgusted, you back away, but sense him staring at your ass as you walk away.');
        } else {
          scene.text('Petia looks fearful as you approach. "What do you want?" he snarls.');
          scene.text('"You should be more polite. This is the only time any girl will ever willingly speak to a loser like you," you reply while trying not to inhale his foul aroma.');
          scene.text('He gives you a creepy smile that shows his filthy teeth, which look like they haven\'t seen a toothbrush in years, if ever. "You want to date me. That\'s why you\'re talking to me."');
          scene.text('You snort. "What? No! Eeeww!" You quickly back away and leave him to his delusional fantasy, but sense him staring at your ass as you walk away.');
        }
      } else {
        if (((s as any).grupTipe ?? 0) === 3) {
          (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) - (1);
          (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (1);
          (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) - (1);
          (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
          if (((s as any).pcs_hotcat ?? 0) >= 6) {
            // TODO-QSP: dynamic text: Petia grins as you approach. He invades your personal space without a care as a ...
            scene.text(`Petia grins as you approach. He invades your personal space without a care as a raunchy smell hits your nostrils. "Hey ${((s as any).pcs_nickname ?? 0)}, you're pretty sexy for a nerd. How about we study together sometime?"`);
            scene.text('He gives you a creepy smile that shows his filthy teeth, which look like they haven\'t seen a toothbrush in years, if ever.');
            if (((s as any).tits ?? 0) >= 4) {
              scene.text('You notice him practically drooling while staring at your breasts and quickly cover them with your arm, causing him to quickly dart his eyes back up.');
            }
            scene.text('Before things can go any further, your fellow nerds come to your rescue and motion for you to join them. You quickly dash over to them and escape his foul aroma, but sense his creepy gaze following you across the room.');
          } else {
            if (((s as any).npc_rel ?? 0)?.['A159'] >= 50) {
              scene.text('You notice Petia desperately walking up and down the classroom trying to mooch stuff from the others.');
              scene.text('When he sees you, he breaks out into a smile and quickly starts walking towards you. "The others are being mean! They won\'t help me out and I\'m getting really hungry!"');
              scene.actions([
                { label: 'Give him money [+$func(\'money\', \'get_cost_string\', 50, \'c...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 50, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'npc_relationship', 'modify', 'A159', 'like');
      qspCall(s, 'money', 'pay', 50, 'cash');
      scene.img('images/characters/shared/headshots_main/big159.jpg');
      scene.text('You feel sorry for him and do have the money to spare. "Here, go and get yourself some lunch."');
      if (((s as any).tits ?? 0) >= 4) {
        scene.text('His eyes grow wide and he takes the money from you, letting his hand linger against yours way too long for comfort as you notice him staring at your breasts.');
        // TODO-QSP: dynamic text: "Thanks <<$pcs_nickname>>, you're the best!" he says with a grin and, is that lo...
        scene.text(`"Thanks ${((s as any).pcs_nickname ?? 0)}, you're the best!" he says with a grin and, is that love in his eyes?`);
        scene.text('After another awkward moment, he leaves to go and buy lunch.');
      } else {
        scene.text('His eyes grow wide and he takes the money from you, letting his hand linger against yours way too long for comfort.');
        // TODO-QSP: dynamic text: "Thanks <<$pcs_nickname>>, you're the best!" he says with a grin and, is that lo...
        scene.text(`"Thanks ${((s as any).pcs_nickname ?? 0)}, you're the best!" he says with a grin and, is that love in his eyes?`);
        scene.text('After another awkward moment, he leaves to go and buy lunch.');
      }
      scene.actions([
        { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
      ]);
    }
  } },
                { label: 'Tell him to stop being a mooch', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A159', 'dislike');
    (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) + (1);
    (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    scene.img('images/characters/shared/headshots_main/big159.jpg');
    scene.text('Tired of him always mooching off you and the others, you snap. "Stop being a mooch and try taking care of yourself for once!"');
    scene.text('His eyes water up a little. "I thought we were friends… I\'m…"');
    scene.text('He walks away with his head hung low.');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
              ]);
            } else {
              scene.text('You notice Petia desperately walking up and down the classroom, trying to mooch some stuff from the other students in the classroom.');
              // TODO-QSP: dynamic text: When he sees you, he quickly starts walking towards you. "Hey <<$pcs_nickname>>,...
              scene.text(`When he sees you, he quickly starts walking towards you. "Hey ${((s as any).pcs_nickname ?? 0)}, do you have any money? I'm getting really hungry."`);
              scene.actions([
                { label: 'Give him money [+$func(\'money\', \'get_cost_string\', 50, \'c...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 50, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'npc_relationship', 'modify', 'A159', 'like');
      qspCall(s, 'money', 'pay', 50, 'cash');
      scene.img('images/characters/shared/headshots_main/big159.jpg');
      scene.text('You feel sorry for him and do have the money to spare. "Here, go and get yourself some lunch."');
      if (((s as any).tits ?? 0) >= 4) {
        scene.text('His eyes grow wide and he takes the money from you, letting his hand linger against yours way too long for comfort as you notice him staring at your breasts.');
        // TODO-QSP: dynamic text: "Thanks <<$pcs_nickname>>, you're the best!" he says with a grin and, is that lo...
        scene.text(`"Thanks ${((s as any).pcs_nickname ?? 0)}, you're the best!" he says with a grin and, is that love in his eyes?`);
        scene.text('After another awkward moment, he leaves to go and buy lunch.');
      } else {
        scene.text('His eyes grow wide and he takes the money from you, letting his hand linger against yours way too long for comfort.');
        // TODO-QSP: dynamic text: "Thanks <<$pcs_nickname>>, you're the best!" he says with a grin and, is that lo...
        scene.text(`"Thanks ${((s as any).pcs_nickname ?? 0)}, you're the best!" he says with a grin and, is that love in his eyes?`);
        scene.text('After another awkward moment, he leaves to go and buy lunch.');
      }
      scene.actions([
        { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
      ]);
    }
  } },
                { label: 'Tell him to stop being a mooch', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A159', 'dislike');
    (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) + (1);
    (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    scene.img('images/characters/shared/headshots_main/big159.jpg');
    scene.text('Tired of him always mooching off you and the others, you snap. "Stop being a mooch and try taking care of yourself for once!"');
    scene.text('His eyes water up a little. "I… I\'m…"');
    scene.text('He walks away with his head hung low.');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
              ]);
            }
          }
        } else {
          if (((s as any).grupTipe ?? 0) === 4) {
            (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) - (1);
            (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (1);
            (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) - (1);
            (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
            if (((s as any).npc_rel ?? 0)?.['A159'] >= 50) {
              // TODO-QSP: dynamic text: Petia grins as you approach. He invades your personal space without a care as a ...
              scene.text(`Petia grins as you approach. He invades your personal space without a care as a raunchy smell hits your nostrils. "Hey ${((s as any).pcs_nickname ?? 0)}, did I tell you that I like bad girls? I think we should date."`);
              scene.text('He gives you a creepy smile that shows his filthy teeth, which look like they haven\'t seen a toothbrush in years, if ever.');
              scene.text('You shove him away from you. "What the fuck? Why would I date a fat, smelly loser like you? Get the fuck away from me before I knock those rotten teeth of yours out!"');
              scene.text('He quickly backs away, but you can feel his creepy gaze on the back of your head as you walk away. You turn around and glare at him, causing him to quickly look at the floor.');
              if (((s as any).tits ?? 0) >= 4) {
                scene.text('"And I seen you staring at my tits as well, perv! Do it again and I\'ll kick your balls back up inside you!" you add.');
              }
            } else {
              scene.text('Petia looks a little fearful, yet somehow confident at the time.');
              scene.text('"What do you want, loser?" you snarl while trying not to inhale his foul aroma.');
              scene.text('He gives you a creepy smile that shows his filthy teeth, which look like they haven\'t seen a toothbrush in years, if ever. "I think you\'re just acting tough because you\'re scared of the truth. You want to date me. Why else would you be talking to me?"');
              scene.text('"Date <i>you</i>?!" you exclaim while balling your fist up. "I would punch your rotten teeth out right now if I wasn\'t worried about catching some filthy disease off of you. It\'s called \'soap\'. Try using it some time, you smelly cunt!"');
              scene.text('He quickly backs away, but you can feel his creepy gaze on the back of your head as you walk away. You turn around and glare at him, causing him to quickly look at the floor.');
              if (((s as any).tits ?? 0) >= 4) {
                scene.text('"And I seen you staring at my tits as well, perv! Do it again and I\'ll kick your balls back up inside you!" you add.');
              }
            }
          } else {
            if (((s as any).npc_rel ?? 0)?.['A159'] >= 50) {
              scene.text('You notice Petia desperately walking up and down the classroom trying to mooch stuff from the others.');
              scene.text('When he sees you, he breaks out into a smile and quickly starts walking towards you. "The others are being mean! They won\'t help me out and I\'m getting really hungry!"');
              scene.actions([
                { label: 'Give him money [+$func(\'money\', \'get_cost_string\', 50, \'c...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 50, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'npc_relationship', 'modify', 'A159', 'like');
      qspCall(s, 'money', 'pay', 50, 'cash');
      scene.img('images/characters/shared/headshots_main/big159.jpg');
      scene.text('You feel sorry for him and do have the money to spare. "Here, go and get yourself some lunch."');
      if (((s as any).tits ?? 0) >= 4) {
        scene.text('His eyes grow wide and he takes the money from you, letting his hand linger against yours way too long for comfort as you notice him staring at your breasts.');
        // TODO-QSP: dynamic text: "Thanks <<$pcs_nickname>>, you're the best!" he says with a grin and, is that lo...
        scene.text(`"Thanks ${((s as any).pcs_nickname ?? 0)}, you're the best!" he says with a grin and, is that love in his eyes?`);
        scene.text('After another awkward moment, he leaves to go and buy lunch.');
      } else {
        scene.text('His eyes grow wide and he takes the money from you, letting his hand linger against yours way too long for comfort.');
        // TODO-QSP: dynamic text: "Thanks <<$pcs_nickname>>, you're the best!" he says with a grin and, is that lo...
        scene.text(`"Thanks ${((s as any).pcs_nickname ?? 0)}, you're the best!" he says with a grin and, is that love in his eyes?`);
        scene.text('After another awkward moment, he leaves to go and buy lunch.');
      }
      scene.actions([
        { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
      ]);
    }
  } },
                { label: 'Tell him to stop being a mooch', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A159', 'dislike');
    (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) + (1);
    (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    scene.img('images/characters/shared/headshots_main/big159.jpg');
    scene.text('Tired of him always mooching off you and the others, you snap. "Stop being a mooch and try taking care of yourself for once!"');
    scene.text('His eyes water up a little. "I thought we were friends… I\'m…"');
    scene.text('He walks away with his head hung low.');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
              ]);
            } else {
              scene.text('You notice Petia desperately walking up and down the classroom, trying to mooch some stuff from the other students in the classroom.');
              // TODO-QSP: dynamic text: When he sees you, he quickly starts walking towards you. "Hey <<$pcs_nickname>>,...
              scene.text(`When he sees you, he quickly starts walking towards you. "Hey ${((s as any).pcs_nickname ?? 0)}, do you have any money? I'm getting really hungry."`);
              scene.actions([
                { label: 'Give him money [+$func(\'money\', \'get_cost_string\', 50, \'c...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 50, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'npc_relationship', 'modify', 'A159', 'like');
      qspCall(s, 'money', 'pay', 50, 'cash');
      scene.img('images/characters/shared/headshots_main/big159.jpg');
      scene.text('You feel sorry for him and do have the money to spare. "Here, go and get yourself some lunch."');
      // TODO-QSP: dynamic text: His eyes grow wide and he takes the money from your hand, letting his hand linge...
      scene.text(`His eyes grow wide and he takes the money from your hand, letting his hand linger against yours way too long for comfort. "Thanks ${((s as any).pcs_nickname ?? 0)}, you're the best!" he says with a grin and, is that love in his eyes? After another awkward moment, he leaves to go and buy lunch.`);
      scene.actions([
        { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
      ]);
    }
  } },
                { label: 'Tell him to stop being a mooch', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A159', 'dislike');
    (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) + (1);
    (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    scene.img('images/characters/shared/headshots_main/big159.jpg');
    scene.text('Tired of him always mooching off you and the others, you snap. "Stop being a mooch and try taking care of yourself for once!"');
    scene.text('His eyes water up a little. "I… I\'m…"');
    scene.text('He walks away with his head hung low.');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
              ]);
            }
          }
        }
      }
    }
  }
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterSonia(s: GameState, scene: SceneBuilder): void {
  if (((s as any).soniaQW ?? 0)?.['hate'] === 1) {
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big25.jpg');
    scene.text('Sonia sees you approaching and gets up, walking away without a word before you can even reach her.');
    return;
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } else {
    if (((s as any).soniaQW ?? 0)?.['fallenangel'] >= 1  &&  ((s as any).daystart ?? 0) <= ((s as any).soniaQW ?? 0)?.['fallday'] + 7) {
      qspCall(s, 'stat', '');
      scene.img('images/characters/shared/headshots_main/big25.jpg');
      scene.text('Sonia is sitting alone, staring blankly at nothing. She doesn\'t look up or respond when you approach, so you decide to leave her alone for now.');
      return;
      scene.actions([
        { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
      ]);
    }
  }
  qspCall(s, 'npc_relationship', 'modify', 'A25', 'like');
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big25.jpg');
  if (((s as any).fame ?? 0)?.['pav_slut'] > 250) {
    if (((s as any).npc_rel ?? 0)?.['A25'] >= 50) {
      scene.text('You see Sonia sitting by herself as usual and approach her with a friendly smile.');
      scene.text('She looks up and gives you a friendly smile in return.');
      scene.text('"What\'s up, slut?" You laugh and sit next to her, telling her about your day.');
      scene.text('You banter back and forth about whose breath smells like cum and discuss each of your latest sexcapades.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A25'] <= 20) {
        scene.text('You see Sonia sitting by herself as usual and approach her with a friendly smile. She looks up and frowns.');
        // TODO-QSP: dynamic text: "What do you want, <<$pcs_nickname>>?"
        scene.text(`"What do you want, ${((s as any).pcs_nickname ?? 0)}?"`);
        scene.text('You sit next to her. "I just wanted to talk."');
        scene.text('She\'s reluctant at first, but slowly starts to get engaged in the conversation. The two of you talk about fashion, makeup and eventually sex, discussing the different people you\'ve had sex with and who is better.');
      } else {
        scene.text('You see Sonia sitting by herself as usual and approach her with a friendly smile.');
        // TODO-QSP: dynamic text: She looks up and gives you a smile in return. "What's up, <<$pcs_nickname>>?"
        scene.text(`She looks up and gives you a smile in return. "What's up, ${((s as any).pcs_nickname ?? 0)}?"`);
        scene.text('You sit next to her. "I just wanted to talk."');
        scene.text('She\'s reluctant at first, but quickly relaxes and gets into the conversation. The two of you talk about fashion, makeup and eventually sex, discussing the different people you\'ve had sex with and who is better.');
      }
    }
  } else {
    if (((s as any).grupTipe ?? 0) === 1) {
      (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) - (1);
      (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (1);
      (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) - (1);
      (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
      if (((s as any).npc_rel ?? 0)?.['A25'] >= 70) {
        // TODO-QSP: dynamic text: You see Sonia sitting by herself as usual. As you approach her with a friendly s...
        scene.text(`You see Sonia sitting by herself as usual. As you approach her with a friendly smile, she looks up and gives you a friendly smile in return. "How's it going, ${((s as any).pcs_nickname ?? 0)}?" She then bites her lip. "Aren't you worried what the others will say if they see you talking to me?"`);
        scene.text('You sit next to her. "I don\'t care what the others think. You\'re my friend."');
        scene.text('She looks so happy that she almost tears up. The two of you engage in a friendly conversation about fashion, makeup and many other things. She seems well versed in these subjects and discusses them with great enthusiasm.');
        scene.text('She then sighs, your presence clearly reminding her of who she once was and what she\'s lost.');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A25'] <= 20) {
          // TODO-QSP: dynamic text: You see Sonia sitting by herself as usual. As you approach her with a friendly s...
          scene.text(`You see Sonia sitting by herself as usual. As you approach her with a friendly smile, she looks up and stiffens. "What do you want, ${((s as any).pcs_nickname ?? 0)}?"`);
          scene.text('You sit next to her. "I just wanted to talk."');
          scene.text('She\'s reluctant at first, but slowly starts to get engaged in the conversation. The two of you talk about fashion, makeup and many other things. She seems well versed in these subjects and discusses them with great enthusiasm.');
        } else {
          // TODO-QSP: dynamic text: You see Sonia sitting by herself as usual. As you approach her with a friendly s...
          scene.text(`You see Sonia sitting by herself as usual. As you approach her with a friendly smile, she looks up and stiffens slightly. "Do you need something, ${((s as any).pcs_nickname ?? 0)}?"`);
          scene.text('You sit next to her and engage her in conversation. The two of you talk about fashion, makeup and many other things. She seems well versed in these subjects and discusses them with great enthusiasm.');
        }
      }
    } else {
      if (((s as any).grupTipe ?? 0) === 2) {
        (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) - (1);
        (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (1);
        (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) - (1);
        (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
        if (((s as any).npc_rel ?? 0)?.['A25'] >= 60) {
          // TODO-QSP: dynamic text: You see Sonia sitting by herself as usual. As you approach her with a friendly s...
          scene.text(`You see Sonia sitting by herself as usual. As you approach her with a friendly smile, she looks up and gives you a friendly smile in return. "How's it going, ${((s as any).pcs_nickname ?? 0)}?" She then bites her lip. "Aren't you worried what the others will say if they see you talking to me?"`);
          scene.text('You sit next to her. "I don\'t care what the others think. You\'re my friend."');
          scene.text('She looks so happy that she almost tears up. The two of you engage in a friendly conversation about fashion, makeup and many other things. She seems well versed in these subjects and discusses them with great enthusiasm.');
        } else {
          if (((s as any).npc_rel ?? 0)?.['A25'] <= 20) {
            // TODO-QSP: dynamic text: You see Sonia sitting by herself as usual. As you approach her with a friendly s...
            scene.text(`You see Sonia sitting by herself as usual. As you approach her with a friendly smile, she looks up and stiffens. "What do you want, ${((s as any).pcs_nickname ?? 0)}?"`);
            scene.text('You sit next to her. "I just wanted to talk."');
            scene.text('She\'s reluctant at first, but slowly starts to get engaged in the conversation. The two of you talk about fashion, makeup and many other things. She seems well versed in these subjects and discusses them with great enthusiasm.');
          } else {
            // TODO-QSP: dynamic text: You see Sonia sitting by herself as usual. As you approach her with a friendly s...
            scene.text(`You see Sonia sitting by herself as usual. As you approach her with a friendly smile, she looks up and stiffens slightly. "Do you need something, ${((s as any).pcs_nickname ?? 0)}?"`);
            scene.text('You sit next to her and engage her in conversation. The two of you talk about fashion, makeup and many other things. She seems well versed in these subjects and discusses them with great enthusiasm.');
          }
        }
      } else {
        if (((s as any).grupTipe ?? 0) === 3) {
          (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) - (1);
          (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (1);
          (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) - (1);
          (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
          if (((s as any).npc_rel ?? 0)?.['A25'] >= 50) {
            // TODO-QSP: dynamic text: You see Sonia sitting by herself as usual. As you approach her with a friendly s...
            scene.text(`You see Sonia sitting by herself as usual. As you approach her with a friendly smile, she looks up and gives you a friendly smile in return. "How's it going, ${((s as any).pcs_nickname ?? 0)}?" She then bites her lip and looks at the nerds on the other side of the classroom. You glance over and see several of them staring in disgust. "Aren't you worried what the others will say if they see you talking to me?"`);
            scene.text('You sit next to her. "I don\'t care what the others think. You\'re my friend."');
            scene.text('She looks so happy that she almost tears up. The two of you engage in a friendly conversation about fashion, makeup and many other things. She seems well versed in these subjects and discusses them with great enthusiasm.');
          } else {
            if (((s as any).npc_rel ?? 0)?.['A25'] <= 20) {
              // TODO-QSP: dynamic text: You see Sonia sitting by herself as usual. As you approach her with a friendly s...
              scene.text(`You see Sonia sitting by herself as usual. As you approach her with a friendly smile, she looks up and stiffens. "What do you want, ${((s as any).pcs_nickname ?? 0)}?"`);
              scene.text('You sit next to her. "I just wanted to talk."');
              scene.text('She\'s reluctant at first, but slowly starts to get engaged in the conversation. The two of you talk about fashion, makeup and many other things. She seems well versed in these subjects and discusses them with great enthusiasm.');
              scene.text('You notice your fellow nerds occasionally glancing your way with looks ranging from disapproval to outright disgust.');
            } else {
              // TODO-QSP: dynamic text: You see Sonia sitting by herself as usual. As you approach her with a friendly s...
              scene.text(`You see Sonia sitting by herself as usual. As you approach her with a friendly smile, she looks up and stiffens slightly. "Do you need something, ${((s as any).pcs_nickname ?? 0)}?"`);
              scene.text('You sit next to her and engage her in conversation. The two of you talk about fashion, makeup and many other things. She seems well versed in these subjects and discusses them with great enthusiasm.');
              scene.text('You notice your fellow nerds occasionally glancing your way with looks ranging from disapproval to outright disgust.');
            }
          }
        } else {
          if (((s as any).grupTipe ?? 0) === 4) {
            (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) - (1);
            (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (1);
            (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) - (1);
            (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
            if (((s as any).npc_rel ?? 0)?.['A25'] >= 70) {
              // TODO-QSP: dynamic text: You see Sonia sitting by herself as usual. As you approach her with a friendly s...
              scene.text(`You see Sonia sitting by herself as usual. As you approach her with a friendly smile, she looks up and gives you a friendly smile in return. "How's it going, ${((s as any).pcs_nickname ?? 0)}?" She then bites her lip. "Aren't you worried what the others will say if they see you talking to me?"`);
              scene.text('You sit next to her. "I don\'t care what the others think. You\'re my friend."');
              scene.text('She looks so happy that she almost tears up. The two of you engage in a friendly conversation about fashion, makeup and many other things. She seems well versed in these subjects and discusses them with great enthusiasm.');
            } else {
              if (((s as any).npc_rel ?? 0)?.['A25'] <= 20) {
                scene.text('You see Sonia sitting by herself as usual. As you approach her with a friendly smile, she looks up and stiffens. "Please, just leave me alone! I can\'t take anymore today! Just… just please leave me alone!" She looks like she\'s about to cry.');
                scene.text('You sit next to her. "I just wanted to talk."');
                scene.text('She\'s reluctant at first, but slowly starts to get engaged in the conversation. The two of you talk about fashion, makeup and many other things. She seems well versed in these subjects and discusses them with great enthusiasm.');
              } else {
                // TODO-QSP: dynamic text: You see Sonia sitting by herself as usual. As you approach her with a friendly s...
                scene.text(`You see Sonia sitting by herself as usual. As you approach her with a friendly smile, she looks up and stiffens slightly. "Leave me alone, ${((s as any).pcs_nickname ?? 0)}!" she says in a wary tone of voice, obviously expecting you to bully her.`);
                scene.text('You sit next to her and engage her in conversation. The two of you talk about fashion, makeup and many other things. She seems well versed in these subjects and discusses them with great enthusiasm.');
              }
            }
          } else {
            if (((s as any).npc_rel ?? 0)?.['A25'] >= 50) {
              // TODO-QSP: dynamic text: You see Sonia sitting by herself as usual, except when you sit with her. As you ...
              scene.text(`You see Sonia sitting by herself as usual, except when you sit with her. As you approach her with a friendly smile, she looks up and gives you a friendly smile in return. "How's it going, ${((s as any).pcs_nickname ?? 0)}?"`);
              scene.text('You sit next to her and the two of you engage in a friendly conversation about fashion, makeup and many other things. She seems well versed in these subjects and discusses them with great enthusiasm.');
            } else {
              if (((s as any).npc_rel ?? 0)?.['A25'] <= 20) {
                // TODO-QSP: dynamic text: You see Sonia sitting by herself as usual. As you approach her with a friendly s...
                scene.text(`You see Sonia sitting by herself as usual. As you approach her with a friendly smile, she looks up and frowns. "What do you want, ${((s as any).pcs_nickname ?? 0)}?"`);
                scene.text('You sit next to her. "I just wanted to talk."');
                scene.text('She\'s reluctant at first, but slowly starts to get engaged in the conversation. The two of you talk about fashion, makeup and many other things. She seems well versed in these subjects and discusses them with great enthusiasm.');
              } else {
                // TODO-QSP: dynamic text: You see Sonia sitting by herself as usual. As you approach her with a friendly s...
                scene.text(`You see Sonia sitting by herself as usual. As you approach her with a friendly smile, she looks up and frowns. "Do you need something, ${((s as any).pcs_nickname ?? 0)}?"`);
                scene.text('You sit next to her and engage her in conversation. The two of you talk about fashion, makeup and many other things. She seems well versed in these subjects and discusses them with great enthusiasm.');
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).mesec ?? 0) > 0  &&  ((s as any).isprok ?? 0) === 0  &&  (!((s as any).isprokp ?? 0))) {
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.actions([
        { label: 'Ask for a pad', handler: (st: GameState) => {
    (s as any).temp['tampon_ask'] = '"Sonia," you whisper. "My period just started and I don\'t have a pad. Can I borrow one?"';
    qspCall(s, 'gschool_outcast_chats', 'sonia_tampon');
  } },
      ]);
    }
    scene.actions([
      { label: 'Ask for a tampon', handler: (st: GameState) => {
    (s as any).temp['tampon_ask'] = '"Sonia," you whisper. "My period just started and I don\'t have a tampon. Can I borrow one?"';
    qspCall(s, 'gschool_outcast_chats', 'sonia_tampon');
  } },
    ]);
  } else {
    if (((s as any).placebopart ?? 0) > 0  &&  ((s as any).lutH ?? 0) > 0  &&  (!((s as any).knowpreg ?? 0))) {
      if (((s as any).pantyworntype ?? 0) !== 'none') {
        scene.actions([
          { label: 'Ask for a pad', handler: (st: GameState) => {
    (s as any).temp['tampon_ask'] = '"Sonia," you whisper. "My period is starting soon and I don\'t have a pad. Can I borrow one?"';
    qspCall(s, 'gschool_outcast_chats', 'sonia_tampon');
  } },
        ]);
      }
      scene.actions([
        { label: 'Ask for a tampon', handler: (st: GameState) => {
    (s as any).temp['tampon_ask'] = '"Sonia," you whisper. "My period is starting soon and I don\'t have a tampon. Can I borrow one?"';
    qspCall(s, 'gschool_outcast_chats', 'sonia_tampon');
  } },
      ]);
    }
  }
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterSoniaTampon(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big25.jpg');
  // TODO-QSP: dynamic text: <<$temp['tampon_ask']>>
  scene.text(`${((s as any).temp ?? 0)?.['tampon_ask']}`);
  if (((s as any).temp ?? 0)?.['tampon_ask'] === '"Sonia," you whisper. "My period just started  &&  I don\'t have a tampon. Can I borrow one?"'  ||  ((s as any).temp ?? 0)?.['tampon_ask'] === '"Sonia," you whisper. "My period is starting soon  &&  I don\'t have a tampon. Can I borrow one?"') {
    if (((s as any).npc_rel ?? 0)?.['A25'] >= 70) {
      // TODO-QSP: dynamic text: "Don't worry <<$pcs_nickname>>, I've got your back," she says, immediately diggi...
      scene.text(`"Don't worry ${((s as any).pcs_nickname ?? 0)}, I've got your back," she says, immediately digging into her purse to produce one.`);
      scene.text('"Thanks Sonia, you\'re a lifesaver."');
    } else {
      // TODO-QSP: dynamic text: "Sure thing <<$pcs_nickname>>," she says, immediately digging into her purse to ...
      scene.text(`"Sure thing ${((s as any).pcs_nickname ?? 0)}," she says, immediately digging into her purse to produce one.`);
      scene.text('"Thanks Sonia, you\'re a lifesaver."');
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A25'] >= 70) {
      // TODO-QSP: dynamic text: "Sorry <<$pcs_nickname>>, I've only got tampons," she says, digging into her pur...
      scene.text(`"Sorry ${((s as any).pcs_nickname ?? 0)}, I've only got tampons," she says, digging into her purse to produce one. "But anything in an emergency, right?`);
      scene.text('"Thanks Sonia, you\'re a lifesaver."');
    } else {
      // TODO-QSP: dynamic text: "Sure thing <<$pcs_nickname>>," she says, immediately digging into her purse. "B...
      scene.text(`"Sure thing ${((s as any).pcs_nickname ?? 0)}," she says, immediately digging into her purse. "But I've only got tampons. Sorry about that."`);
      scene.text('"Thanks Sonia, you\'re a lifesaver."');
    }
  }
  if (((s as any).fame ?? 0)?.['pav_slut'] > 250) {
    scene.text('"Us sluts gotta watch out for each other right?" she shrugs with a rueful smile. "No one else will."');
    scene.text('You nod gratefully and run to the bathroom to put the tampon in.');
  } else {
    scene.text('"We\'ve all been there," she says with a shrug and a small smile and you run to the bathroom to put the tampon in.');
  }
  (s as any).isprok = 1;
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterFedor(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).FedorLove ?? 0) < 0) {
    scene.actions([{ label: 'Continue', goto: ['FedorMisc', 'Fedor Hate'] }]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['FedorMisc', 'Fedor Chat'] }]);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'lesco':
      enterLesco(s, scene);
      break;
    case 'petia':
      enterPetia(s, scene);
      break;
    case 'sonia':
      enterSonia(s, scene);
      break;
    case 'sonia_tampon':
      enterSoniaTampon(s, scene);
      break;
    case 'fedor':
      enterFedor(s, scene);
      break;
    default:
      enterLesco(s, scene);
      break;
  }
}

export const gschool_outcast_chats: LocationDef = {
  name: 'gschool_outcast_chats',
  title: 'You see Lesco talking to Lera and, unsurprisingly, things lo',
  region: 'other',
  description: ['You see Lesco talking to Lera and, unsurprisingly, things look tense. Knowing how volatile the gopnik can be, you approach them carefully. They greet you and Lesco is the first to speak up. "Lera and I were talking about her needing to do her chores at home, but she doesn\'t want to listen…"'],
  enter: enter,
};
