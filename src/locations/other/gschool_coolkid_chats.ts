import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterDimka(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A1', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big1.jpg');
  if (((s as any).dimka_debt ?? 0) > 0) {
    scene.text('You walk up to Dimka and the first thing he does is pull you aside. "Do you have my money?"');
    if (qspFunc(s, 'money', 'can_afford_debt', ((s as any).dimka_debt ?? 0))) {
      scene.actions([
        { label: 'Pay your debt', handler: (st: GameState) => {
    qspCall(s, 'money', 'debt_pay', 'dimka_debt');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big1.jpg');
    scene.text('You nod your head and dig around in your purse before pulling out the money and handing it to him. He takes his time slowly counting it out, then nods in satisfaction. You briefly talk back and forth as he puts the money away.');
    if (((s as any).dimarudorient ?? 0) === 1) {
      // TODO-QSP: act 'Ask for some pale lady': gt 'gschool_coolkid_chats', 'dim_drugs'
    }
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      ]);
    } else {
      scene.text('You bite your lower lip nervously and look down as you shake your head. "No, just give me a little more time and I will have it. Please?"');
      // TODO-QSP: dynamic text: He sighs. "I like you <<$pcs_nickname>>, I do, but I can't just let you slide. H...
      scene.text(`He sighs. "I like you ${((s as any).pcs_nickname ?? 0)}, I do, but I can't just let you slide. How about you pay me a little interest and you can pay me later?"`);
      scene.text('The way he says it leaves no doubt exactly what he considers <i>interest</i> and it isn\'t money.');
      qspCall(s, 'willpower', 'sex', 'resist');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
  }, goto: ['gschool_lessons', 'short_break'] },
        ]);
      }
      scene.actions([
        { label: 'Go with Dimka', goto: ['gschool_coolkid_chats', 'dimka_sex'] },
      ]);
    }
  } else {
    // TODO-QSP: $func('npc_reactions', 'general', 'A1')
    if (((s as any).DimaRudeQW ?? 0) > 0  &&  (!((s as any).DimaRudeBlock ?? 0))) {
      scene.text('Dimka looks into your eyes with a disinterested glare. "Whatever. After school, we\'re going to my place. I\'ll wait for you by the entrance."');
    } else {
      if ((((s as any).dimaRevenge ?? 0) === 6  &&  (((s as any).dimaRevChoice ?? 0) === 3  ||  ((s as any).dimaRevChoice ?? 0) === 5  ||  ((s as any).dimaRevChoice ?? 0) === 6))  ||  (((s as any).dimaRevenge ?? 0) === 7  &&  ((s as any).dimaRevChoice ?? 0) === 2)  ||  (((s as any).dimaRevenge ?? 0) === 8  &&  (((s as any).dimaRevChoice ?? 0) === 1  ||  ((s as any).dimaRevChoice ?? 0) === 4))) {
        scene.text('Dimka glares at as you approach. "What the fuck do you want, slut?"');
        scene.text('You sigh. "Look, I know a lot has happened between us, but I thought we could leave it in the past and just be friends or something?"');
        scene.text('He stares at you blankly before shrugging. "Whatever."');
        scene.text('The two of you make small talk, but you get the feeling he\'s planning something.');
      } else {
        if (((s as any).fame ?? 0)?.['pav_slut'] > 200) {
          qspCall(s, 'npc_relationship', 'modify', 'A1', 'dislike');
          if (((s as any).npc_rel ?? 0)?.['A1'] >= 70) {
            scene.text('Dimka sees you approaching and gives you a blank stare, his gaze cold and unblinking.');
            scene.text('When you get close, he steps closer and hisses at you so the others can\'t overhear him. "Don\'t walk up to me at school like this! I have a reputation to protect."');
            scene.text('He then pushes you away and speaks loudly enough for everyone to hear him. "Get lost, slut! No one wants you here."');
            scene.text('He continues to stare you down until you finally leave.');
          } else {
            scene.text('Dimka sees you approaching and gives you a blank stare, his gaze cold and unblinking.');
            scene.text('"Do you really think I would talk to a whore like you?" he dryly states.');
            scene.text('He continues to stare you down until you finally leave.');
          }
        } else {
          if (((s as any).grupTipe ?? 0) === 1) {
            if (((s as any).npc_rel ?? 0)?.['A1'] >= 50) {
              scene.text('"Just the person I was hoping to see!" he smiles. "Take a look at this." He pulls out his phone and shows you some photos from his latest trip to Moscow. "You would\'ve loved it out there. It really made me realize we\'re wasting away out here in a place like this."');
              scene.text('You then chat about the other places he has visited.');
              if (((s as any).dimarudorient ?? 0) === 1) {
                // TODO-QSP: act 'Ask for some pale lady': gt 'gschool_coolkid_chats', 'dim_drugs'
              }
            } else {
              if (((s as any).npc_rel ?? 0)?.['A1'] <= 20) {
                // TODO-QSP: dynamic text: "You seem to have the wrong idea about me, <<$pcs_nickname>>," he says as he hol...
                scene.text(`"You seem to have the wrong idea about me, ${((s as any).pcs_nickname ?? 0)}," he says as he holds out his hand to stop you from getting any closer. "Just because we run in the same social circle doesn't mean we're friends."`);
                scene.text('You can\'t help but scoff and roll your eyes. "Who said I want to be friends? You just looked lonely standing over here by yourself. I was just trying to be nice."');
                scene.text('You trade a few more barbs back and forth.');
              } else {
                scene.text('Dimka is willing to entertain you for a few minutes, occasionally taking part in the conversation but letting you do most of the talking.');
                scene.text('"Hey, Bella!" he calls out as he spots her walking by. "Sorry, I hope you don\'t mind."');
                scene.text('He follows after her before you can even reply. At least he let you talk to him.');
              }
            }
          } else {
            if (((s as any).grupTipe ?? 0) === 2) {
              if (((s as any).npc_rel ?? 0)?.['A1'] >= 50) {
                scene.text('"Have I shown you my photos from my last trip?" he smiles. "Take a look at this." He pulls out his phone and shows you some photos from his latest trip to Moscow. "You would\'ve loved it out there. It really made me realize we\'re wasting away out here in a place like this."');
                scene.text('You then chat about the other places he\'s visited.');
                if (((s as any).dimarudorient ?? 0) === 1) {
                  // TODO-QSP: act 'Ask for some pale lady': gt 'gschool_coolkid_chats', 'dim_drugs'
                }
              } else {
                if (((s as any).npc_rel ?? 0)?.['A1'] <= 20) {
                  scene.text('Dimka looks down at you with a condescending smile. "What do you want?" he asks, maintaining his "friendly" appearance in front of everyone.');
                  scene.text('"I just wanted to say hi is all," you reply.');
                  scene.text('He looks around like this is a common burden. "Of course you did, everyone does."');
                  scene.text('You try talking to him, but he acts like he\'s barely tolerating you, like a Tsar might a peasant in his court.');
                } else {
                  scene.text('Dimka is willing to entertain you for a bit, occasionally taking part in the conversation but letting you do most of the talking.');
                  scene.text('"Hey, Bella!" he calls as he spots her walking by. "Sorry, I hope you don\'t mind."');
                  scene.text('He follows after her before you can even reply. At least he let you talk to him.');
                }
              }
            } else {
              if (((s as any).grupTipe ?? 0) === 3) {
                if (((s as any).npc_rel ?? 0)?.['A1'] >= 60) {
                  scene.text('Dimka greets you with a friendly smile, making room for you in the group made up of Bella, Igor and a few other students. Some of them give you an odd look, but Dimka makes you feel welcome.');
                  scene.text('"Relax, she doesn\'t have the plague," he playfully chides everyone and you\'re soon engaged in a conversation with Dimka.');
                  if (((s as any).dimarudorient ?? 0) === 1) {
                    // TODO-QSP: act 'Ask for some pale lady': gt 'gschool_coolkid_chats', 'dim_drugs'
                  }
                } else {
                  if (((s as any).npc_rel ?? 0)?.['A1'] <= 20) {
                    scene.text('Dimka looks down at you with a condescending smile. "You get lost, loser? Shouldn\'t you be off pretending to be an elf or something?" he asks with a charming smile.');
                    scene.text('"I just wanted to say hi is all," you reply.');
                    scene.text('He looks around like this is a common burden. "Of course you did, everyone does. Now that you have, why don\'t you go back to your own kind?"');
                    scene.text('You try talking to him, but he acts like he\'s barely tolerating you, like a Tsar might a peasant in his court.');
                  } else {
                    scene.text('Dimka looks down at you with a condescending smile. "What do you want?" he asks, maintaining his "friendly" appearance in front of everyone.');
                    scene.text('"I just wanted to say hi is all," you reply.');
                    scene.text('He looks around like this is a common burden. "Of course you did, everyone does."');
                    scene.text('You try talking to him, but he acts like he\'s barely tolerating you, like a Tsar might a peasant in his court.');
                  }
                }
              } else {
                if (((s as any).grupTipe ?? 0) === 4) {
                  if (((s as any).npc_rel ?? 0)?.['A1'] >= 60) {
                    scene.text('Dimka greets you with a friendly smile, making room for you in the group made up of Bella, Igor and a few other students. Some of them give you an odd look, but Dimka makes you feel welcome.');
                    scene.text('"Relax, she doesn\'t have the plague," he playfully chides everyone and you\'re soon engaged in a conversation with Dimka.');
                    if (((s as any).dimarudorient ?? 0) === 1) {
                      // TODO-QSP: act 'Ask for some pale lady': gt 'gschool_coolkid_chats', 'dim_drugs'
                    }
                  } else {
                    if (((s as any).npc_rel ?? 0)?.['A1'] <= 20) {
                      scene.text('Dimka looks down at you with a condescending smile. "What do you want? We don\'t have any drugs and none of us want whatever it is you\'re selling," he remarks, maintaining his "friendly" appearance in front of everyone.');
                      scene.text('"I just wanted to say hi is all," you reply.');
                      scene.text('He looks around like this is a common burden. "Of course you did, everyone does. Now go away before you ruin everyone\'s day with your dreadful attempt at fashion."');
                      scene.text('You try talking to him, but he acts like he\'s barely tolerating you, like a Tsar might a peasant in his court.');
                    } else {
                      scene.text('Dimka looks down at you with a condescending smile. "What do you want? Maybe looking for some fashion advice?" he asks, maintaining his "friendly" appearance in front of everyone.');
                      scene.text('"I just wanted to say hi is all," you reply.');
                      scene.text('He looks around like this is a common burden. "Of course you did, everyone does. Now that I\'ve made your day you can go do… Whatever it is you people do."');
                      scene.text('You try talking to him, but he acts like he\'s barely tolerating you, like a Tsar might a peasant in his court.');
                    }
                  }
                } else {
                  qspCall(s, 'npc_relationship', 'modify', 'A1', 'dislike');
                  if (((s as any).npc_rel ?? 0)?.['A1'] >= 70) {
                    scene.text('As you walk up, he gives a slightly disgusted look, like he just smelt something bad. "Come to see how your betters look?"');
                    scene.text('You sigh. "I just wanted to say hi."');
                    scene.text('He laughs and looks at some of the others, who laugh in turn. "Of course you do. How could we expect someone like you to know the rules of polite society? I mean really. Very well. You\'ve had your moment, now please go."');
                    scene.text('He and the others proceed to ignore you.');
                  } else {
                    scene.text('He glares at you as you approach. "What the fuck do you want, loser?"');
                    scene.text('You sigh. "I just wanted to say hi."');
                    scene.text('He shakes his head. "Let me make this clear. No one wants you around, so why don\'t you do something useful for a change and go home and hang yourself or something and make the world a better place?"');
                    scene.text('He starts laughing, along with several of the others.');
                  }
                }
              }
            }
          }
        }
      }
    }
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterDimDrugs(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big1.jpg');
  scene.text('You don\'t want to, but you feel miserable and everything hurts. You crave the rush that you\'ve come to enjoy so much.');
  scene.text('"Please Dimka, can I have some pale lady?"');
  scene.text('He smiles at you with a smug grin. "Sure. Do you have any money?"');
  if (qspFunc(s, 'money', 'can_afford', 420) === 1) {
    scene.actions([
      { label: 'Buy enough for 1 line [+$func(\'money\', \'get_cost_string\', 420)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 420) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      scene.actions([{ label: 'Continue', goto: ['gschool_coolkid_chats', 'dimka_pay', '1'] }]);
    }
  } },
      { label: 'Buy enough for 2 lines [+$func(\'money\', \'get_cost_string\', 840)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 840) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      scene.actions([{ label: 'Continue', goto: ['gschool_coolkid_chats', 'dimka_pay', '2'] }]);
    }
  } },
      { label: 'Buy enough for 5 lines [+$func(\'money\', \'get_cost_string\', 1680)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 1680) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      scene.actions([{ label: 'Continue', goto: ['gschool_coolkid_chats', 'dimka_pay', '5'] }]);
    }
  } },
      { label: 'Buy enough for 10 lines [+$func(\'money\', \'get_cost_string\', 3720)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 3720) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      scene.actions([{ label: 'Continue', goto: ['gschool_coolkid_chats', 'dimka_pay', '10'] }]);
    }
  } },
      { label: 'Change your mind', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } else {
    scene.text('You bite your lower lip nervously and look down as you shake your head. "No, but can you just give me some now and I can pay you back later? Please?"');
    scene.text('He grins. "Sure. Why don\'t we go somewhere quieter? You make me happy and I\'ll make you happy. You can pay me back later."');
    scene.text('Resolved to do anything to make the pain go away and feel happy again, you mentally sigh and follow him.');
    scene.actions([
      { label: 'Change your mind', goto: ['gschool_lessons', 'short_break'] },
      { label: 'Go with Dimka', goto: ['gschool_coolkid_chats', 'dimka_sex'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterDimkaPay(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'pay', ARGS[1] * 420, 'cash'
  ((s as any).mc_inventory ?? {})['cocaine'] = (((s as any).mc_inventory ?? {})['cocaine'] ?? 0) + (qspUntranslated(s, "ARGS[1]", { location: "gschool_coolkid_chats" }));
  qspCall(s, 'stat', '');
  scene.img('images/shared/drugs/cocainebag.jpg');
  scene.text('You nod your head and dig around in your purse before pulling out the money and quickly handing it to him. He takes his time slowly counting it out, which seems like an eternity before he finally hands over a small baggy. You snatch it from him and quickly leave.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    { label: 'Do a line', handler: (st: GameState) => {
    qspCall(s, 'drugs', 'cocaine');
    scene.img('images/shared/drugs/lineschool.jpg');
    scene.text('You walk down the hall, looking into classrooms until you spot one that\'s empty. You glance around and when no one is looking, duck inside and rush over to the teacher\'s desk.');
    scene.text('You pour out a few lines and quickly snort them up, feeling the sensation of relief and pleasure rush through your body before spending the next few seconds in a stupor before the bell for the next class rings.');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterDimkaSex(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/boy/dimka/sex/school/dimbj1.jpg');
  scene.text('He leads you down the hall and finally stops at one of the classrooms. He opens the door and steps in, closing the door after you enter.');
  scene.text('Once inside, he pushes you up against the wall and leans in close so his face is only a few inches from yours. "Get on your knees, bitch."');
  scene.text('You obey him and slowly sink to your knees. You don\'t have to be told what to do next. You reach up and start undoing his pants.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get him hard', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/dimka/sex/school/dimbj2.jpg');
    scene.text('You pull his limp dick free from his pants and start stroking it with your hand while sucking on his balls. You feel him getting hard in your hand.');
    qspCall(s, 'arousal', 'hj', 2, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck his dick', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A1');
    scene.img('images/characters/pavlovsk/school/boy/dimka/sex/school/dimbj3.jpg');
    // TODO-QSP: dynamic text: Once he's hard, you open your mouth and take his <<dick>>cm <<$dick_girth>> dick...
    scene.text(`Once he's hard, you open your mouth and take his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick into your mouth. You wrap your lips around his shaft and start bobbing your head back and forth on his dick as you look up at him.`);
    qspCall(s, 'arousal', 'bj', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep sucking', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/dimka/sex/school/dimbj4.jpg');
    scene.text('As you keep sucking his cock, you wrap one of your hands around his shaft and start stroking his dick with your hand in sequence with your lips.');
    qspCall(s, 'arousal', 'bj', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish him', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/dimka/sex/school/dimbj5.jpg');
    scene.text('He reaches down and starts stroking it himself before pulling it out of your mouth. Spurts of his cum soon start landing on your face before he shoves his dick back in your mouth.');
    scene.text('"Suck me clean, slut!" he barks.');
    scene.text('You suck the cum off his dick and the last few drops out of him.');
    qspCall(s, 'cum_call', 'face', 'A1');
    qspCall(s, 'arousal', 'bj', 2, 'sub');
    qspCall(s, 'arousal', 'end');
    if (((s as any).dimka_debt ?? 0) > 0) {
      scene.text('"I want my money by next week," he growls as he buttons up his pants before walking out, leaving you to get cleaned up on your own.');
      scene.actions([
        { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
      ]);
    } else {
      ((s as any).mc_inventory ?? {})['cocaine'] = (((s as any).mc_inventory ?? {})['cocaine'] ?? 0) + (1);
      qspCall(s, 'money', 'debt_add', 'dimka_debt', 2000);
      scene.text('"I want my money by next week," he growls as he buttons up his pants.');
      scene.text('He tosses a small baggy of white powder on the floor as he walks out, leaving you to get cleaned up on your own. Not even thinking about the cum on your face, you quickly snatch up the baggy.');
      scene.actions([
        { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
        { label: 'Do a line', handler: (st: GameState) => {
    qspCall(s, 'drugs', 'cocaine');
    scene.img('images/shared/drugs/lineschool.jpg');
    scene.text('You get up and rush over to the teacher\'s desk, where you pour out a line and quickly snort it, immediately feeling the sensation of relief and pleasure rushing through your body.');
    scene.text('You then spend a few minutes in a stupor before the bell for the next class rings.');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
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

function enterIgor(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A4', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big4.jpg');
  if (((s as any).IgorQW ?? 0)?.['Lover'] > 0) {
    scene.text('When Igor sees you, his face lights up and he smiles warmly.');
    scene.text('"I was hoping I\'d see you. I, uh, kind of missed you…" he says shyly, which makes you giggle.');
    scene.text('As you talk with each other, his warm hand finds yours.');
    // TODO-QSP: $func('npc_reactions', 'general', 'A4')
    if (((s as any).IgorQW ?? 0)?.['strap'] >= 1) {
      scene.actions([
        { label: 'Tease him', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A4', 'like');
    scene.img('images/characters/shared/headshots_main/big4.jpg');
    scene.text('You decide to tease him a little. "I hope you\'re not too sore after last time…" you whisper with a smirk.');
    scene.text('Igor\'s cheeks flush pink as he looks around nervously, hoping no one overheard.');
    scene.actions([
      { label: 'Just chat', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big4.jpg');
    scene.text('You choose not to press it any further and start talking to him about a variety of topics while holding hands until break is over. With a smile, you give him a quick kiss goodbye.');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      { label: 'Tell him you have a surprise', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big4.jpg');
    if (((s as any).IgorQW ?? 0)?.['schoolstrap'] === 1) {
      scene.text('You keep whispering in his ear. "I want to fuck your tight little ass with my strapon again."');
      scene.text('He gives you a shocked look and you open your purse and show him your strapon nestled inside, which makes him blush even more.');
      scene.text('He looks around and you can tell he\'s excited; you notice a bulge forming in his pants before he bites his lower lip and nods. "Okay, but let\'s be careful."');
      scene.text('You pat him on the cheek. "Trust me."');
      scene.text('He grins and eagerly follows you as you lead him away.');
    } else {
      scene.text('You keep whispering in his ear. "I want to fuck you right now."');
      scene.text('He gives you a shocked look and you open your purse and show him your strapon nestled inside, which makes him blush even more.');
      scene.text('"What if we get caught?" he asks, sounding scared and excited at the same time.');
      scene.text('You pat him on the cheek. "Trust me, I know a place where no one will ever find us."');
      scene.text('He thinks about it for a second before finally nodding.');
    }
    scene.actions([
      { label: 'Take him somewhere private', goto: ['gschool_coolkid_chats', 'igor_peg'] },
    ]);
  } },
      { label: 'Help with homework', handler: (st: GameState) => {
    ((s as any).IgorQW ?? {})['history'] = 1;
    scene.img('images/characters/shared/headshots_main/big4.jpg');
    scene.text('"Oh… yeah, I can help you with your homework…" Igor smiles, but glances down and shuffles restlessly.');
    scene.text('You smirk and lean in closer. "Don\'t look so disappointed. Who knows, the quicker we finish with that, the more time we have for <i>other</i> things."');
    scene.text('Hearing this, Igor\'s eyes widen and his cheeks flush as he tries to play it cool, but you notice how he\'s suddenly more excited.');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.text('You hold hands and chat until break is over. With a smile, you give him a quick kiss goodbye.');
    }
    scene.actions([
      { label: 'Help with homework', handler: (st: GameState) => {
    ((s as any).IgorQW ?? {})['history'] = 1;
    scene.img('images/characters/shared/headshots_main/big4.jpg');
    scene.text('Igor is almost offended that you\'d even have to ask.');
    scene.text('"What kind of boyfriend would I be if I didn\'t help my girlfriend?" he chuckles. "Of course I\'ll help you."');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).fame ?? 0)?.['pav_slut'] > 200) {
      if (((s as any).npc_rel ?? 0)?.['A4'] >= 70) {
        scene.text('Igor is hanging with Dimka, Stasya and Bella when you approach. The others are quick to throw some insults your way, but Igor hesitates.');
        scene.text('It isn\'t until Stasya puts him on the spot for being so silent that he finally speaks up to agree with the rest of the group. "I\'m surprised the gopniks are finished with her so early. Must have had another cocksleeve waiting for them, or maybe she\'s just gotten too loose."');
        scene.actions([
          { label: 'Help with homework', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big4.jpg');
    scene.text('Igor glances around, not meeting your gaze. "No… I can\'t help you…"');
    scene.text('He looks like he\'s about to say more, but just walks away hanging his head down.');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
        ]);
      } else {
        scene.text('Igor is hanging with Dimka, Stasya and Bella when you approach. The others are quick to throw some insults your way while Igor mostly just silently nods in agreement. It seems the insults aren\'t going to stop until you leave.');
        scene.actions([
          { label: 'Help with homework', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big4.jpg');
    scene.text('Igor can\'t help but laugh at your request. "Of course you\'re behind on your work. Maybe if you spent less time whoring around…"');
    scene.text('He doesn\'t finish the sentence before walking away with a look of disgust.');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
        ]);
      }
    } else {
      if (((s as any).grupTipe ?? 0) === 1) {
        // TODO-QSP: $func('npc_reactions', 'general', 'A4')
        if (((s as any).npc_rel ?? 0)?.['A4'] >= 50) {
          if (((s as any).npc_rel ?? 0)?.['A4'] >= 60  &&  ((s as any).pcs_hotcat ?? 0) >= 5  &&  ((s as any).IgorQW ?? 0)?.['house_open'] === 0) {
            ((s as any).IgorQW ?? {})['house_open'] = 1;
            scene.text('You know he doesn\'t have many friends, so he\'s more than happy that you want to hang out with him. Unlike most boys, Igor is really attentive and listens to everything you say, even taking an interest in the more "girly" topics.');
            scene.text('"Oh, it\'s not that weird," he says while blushing. "I have a sister, so I hear about these things all the time…"');
            scene.text('The two of you spend some time chatting before Dimka shows up and you see Igor\'s face light up. "I need to get going. Maybe we can hang out some time, if you want come by my house?" he says while telling you where he lives, after which he gives you a small smile as he waves goodbye.');
          } else {
            if (((s as any).IgorQW ?? 0)?.['strap'] >= 1) {
              scene.actions([
                { label: 'Tease him', goto: ['gschool_coolkid_chats', 'tease_igor'] },
              ]);
            } else {
              scene.text('You know he doesn\'t have many friends, so he\'s more than happy that you want to hang out with him. Unlike most boys, Igor is really attentive and listens to everything you say, even taking an interest in the more "girly" topics.');
              scene.text('"Oh, it\'s not that weird," he says while blushing. "I have a sister, so I hear about these things all the time…"');
              scene.text('The two of you spend some time chatting before Dimka shows up and you see Igor\'s face light up. "I need to get going. Maybe we can talk some other time?" he asks with a small smile as he waves goodbye.');
              scene.actions([
                { label: 'Help with homework', handler: (st: GameState) => {
    ((s as any).IgorQW ?? {})['history'] = 1;
    scene.img('images/characters/shared/headshots_main/big4.jpg');
    scene.text('Before he can leave, you ask him if he can help with your homework and his face lights up. "Yeah, of course I\'ll help you."');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
              ]);
            }
          }
        } else {
          if (((s as any).npc_rel ?? 0)?.['A4'] <= 20) {
            scene.text('The conversation feels forced as Igor makes almost no effort to talk to you. You get the feeling he\'s just doing this as a courtesy since you\'re in the same clique.');
            scene.actions([
              { label: 'Help with homework', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big4.jpg');
    scene.text('Igor hesitates, making the whole encounter extremely awkward. "I would… but I can\'t. I\'ve got… other things I need to do."');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
            ]);
          } else {
            scene.text('As usual, Igor is hanging around Dimka, but he pays closer attention to you. With a smile, he asks you how your day has been so far and before long you\'re talking about all kinds of things. He even takes an interest in the more "girly" topics.');
            scene.actions([
              { label: 'Help with homework', handler: (st: GameState) => {
    ((s as any).IgorQW ?? {})['history'] = 1;
    scene.img('images/characters/shared/headshots_main/big4.jpg');
    scene.text('"Oh, you need my help?" he asks curiously, a bit surprised that you would ask him of all people. After a few seconds, he smiles and nods. "Yeah, of course I\'ll help you."');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
            ]);
          }
        }
      } else {
        if (((s as any).grupTipe ?? 0) === 2) {
          // TODO-QSP: $func('npc_reactions', 'general', 'A4')
          if (((s as any).npc_rel ?? 0)?.['A4'] >= 50) {
            if (((s as any).npc_rel ?? 0)?.['A4'] >= 60  &&  ((s as any).pcs_hotcat ?? 0) >= 5  &&  ((s as any).IgorQW ?? 0)?.['house_open'] === 0) {
              ((s as any).IgorQW ?? {})['house_open'] = 1;
              scene.text('"Hey Igor, what are you doing?" you ask as you see him looking around for someone.');
              scene.text('He shrugs dismissively. "Just waiting for Dimka."');
              scene.text('The two of you spend some time chatting while he waits for Dimka. Eventually he shows up and Igor is ready to leave. "Maybe we can hang out some time, if you want come by my house?" he says while telling you where he lives, after which he gives you a small smile as he waves goodbye.');
            } else {
              if (((s as any).IgorQW ?? 0)?.['strap'] >= 1) {
                scene.actions([
                  { label: 'Tease him', goto: ['gschool_coolkid_chats', 'tease_igor'] },
                ]);
              } else {
                scene.text('"Hey Igor, what are you doing?" you ask as you see him looking around for someone.');
                scene.text('He shrugs dismissively. "Just waiting for Dimka."');
                scene.text('The two of you spend some time chatting while he waits for Dimka. Eventually he shows up and Igor is ready to leave. "Maybe we can talk some other time?" he asks with a small smile as he waves goodbye.');
                scene.actions([
                  { label: 'Help with homework', handler: (st: GameState) => {
    ((s as any).IgorQW ?? {})['history'] = 1;
    scene.img('images/characters/shared/headshots_main/big4.jpg');
    scene.text('After a few seconds, he smiles and nods. "Yeah, of course I\'ll help you."');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                ]);
              }
            }
          } else {
            if (((s as any).npc_rel ?? 0)?.['A4'] <= 20) {
              scene.text('The conversation feels forced as Igor makes almost no effort to talk to you. You get the feeling he\'s just doing this to try and be polite to you.');
              scene.actions([
                { label: 'Help with homework', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big4.jpg');
    scene.text('Igor hesitates, making the whole encounter extremely awkward. "I would… but I can\'t. I\'ve got… other things I need to do."');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
              ]);
            } else {
              scene.text('As usual, Igor is hanging around Dimka, but he pays closer attention to you. With a smile, he asks you how your day has been so far and before long you\'re talking about all kinds of things. He even takes an interest in the more "girly" topics.');
              scene.actions([
                { label: 'Help with homework', handler: (st: GameState) => {
    ((s as any).IgorQW ?? {})['history'] = 1;
    scene.img('images/characters/shared/headshots_main/big4.jpg');
    scene.text('After a few seconds, he smiles and nods. "Yeah, of course I\'ll help you."');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
              ]);
            }
          }
        } else {
          if (((s as any).grupTipe ?? 0) === 3) {
            // TODO-QSP: $func('npc_reactions', 'general', 'A4')
            if (((s as any).npc_rel ?? 0)?.['A4'] >= 50) {
              if (((s as any).npc_rel ?? 0)?.['A4'] >= 60  &&  ((s as any).pcs_hotcat ?? 0) >= 5  &&  ((s as any).IgorQW ?? 0)?.['house_open'] === 0) {
                ((s as any).IgorQW ?? {})['house_open'] = 1;
                scene.text('"Hey Igor, what are you doing?" you ask as you see him looking around for someone.');
                scene.text('He shrugs dismissively. "Just waiting for Dimka."');
                scene.text('The two of you spend some time chatting while he waits for Dimka. He eventually shows up and Igor is ready to leave.');
                scene.text('"Maybe we can hang out some time, if you want come by my house?" he says while telling you where he lives, after which he gives you a small smile as he waves goodbye.');
              } else {
                if (((s as any).IgorQW ?? 0)?.['strap'] >= 1) {
                  scene.actions([
                    { label: 'Tease him', goto: ['gschool_coolkid_chats', 'tease_igor'] },
                  ]);
                } else {
                  scene.text('"Hey Igor, what are you doing?" you ask as you see him looking around for someone.');
                  scene.text('He shrugs dismissively. "Just waiting for Dimka."');
                  scene.text('The two of you spend some time chatting while he waits for Dimka. He eventually shows up and Igor is ready to leave.');
                  scene.text('"Maybe we can talk some other time?" he asks with a small smile as he waves goodbye.');
                  scene.actions([
                    { label: 'Help with homework', handler: (st: GameState) => {
    ((s as any).IgorQW ?? {})['history'] = 1;
    scene.img('images/characters/shared/headshots_main/big4.jpg');
    scene.text('"You need my help?" he asks curiously, a bit surprised that you would ask him of all people. After a few seconds, he smiles and nods. "Yeah, of course I\'ll help you."');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                  ]);
                }
              }
            } else {
              if (((s as any).npc_rel ?? 0)?.['A4'] <= 20) {
                scene.text('The conversation feels forced as Igor makes almost no effort to talk to you. You get the feeling he\'s just doing this to try and be polite to you.');
                scene.actions([
                  { label: 'Help with homework', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big4.jpg');
    scene.text('Igor hesitates, making the whole encounter extremely awkward. "I would… but I can\'t. I\'ve got… other things I need to do."');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                ]);
              } else {
                scene.text('As usual, Igor is hanging around Dimka, but he pays closer attention to you. With a smile, he asks you how your day has been so far and before long you\'re talking about all kinds of things. He even takes an interest in the more "girly" topics.');
                scene.actions([
                  { label: 'Help with homework', handler: (st: GameState) => {
    ((s as any).IgorQW ?? {})['history'] = 1;
    scene.img('images/characters/shared/headshots_main/big4.jpg');
    scene.text('"You need my help?" he asks curiously, a bit surprised that you would ask him of all people.');
    scene.text('After a few seconds, he shrugs. "Yeah, I guess I can help you."');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                ]);
              }
            }
          } else {
            if (((s as any).grupTipe ?? 0) === 4) {
              // TODO-QSP: $func('npc_reactions', 'general', 'A4')
              if (((s as any).npc_rel ?? 0)?.['A4'] >= 70) {
                if (((s as any).npc_rel ?? 0)?.['A4'] >= 75  &&  ((s as any).pcs_hotcat ?? 0) >= 5  &&  ((s as any).IgorQW ?? 0)?.['house_open'] === 0) {
                  ((s as any).IgorQW ?? {})['house_open'] = 1;
                  scene.text('"Hey Igor, what are you doing?" you ask as you see him looking around for someone.');
                  scene.text('He shrugs dismissively. "Just waiting for Dimka."');
                  scene.text('The two of you spend some time chatting while he waits for Dimka. He eventually shows up and Igor is ready to leave.');
                  scene.text('"Maybe we can hang out some time, if you want come by my house?" he says while telling you where he lives, after which he gives you a small smile as he waves goodbye.');
                } else {
                  if (((s as any).IgorQW ?? 0)?.['strap'] >= 1) {
                    scene.actions([
                      { label: 'Tease him', goto: ['gschool_coolkid_chats', 'tease_igor'] },
                    ]);
                  } else {
                    scene.text('"Hey Igor, what are you doing?" you ask as you see him looking around for someone.');
                    scene.text('He shrugs dismissively. "Just waiting for Dimka."');
                    scene.text('The two of you spend some time chatting while he waits for Dimka. Eventually he shows up and Igor is ready to leave. "Maybe we can talk some other time?" he asks with a small smile as he waves goodbye.');
                    scene.actions([
                      { label: 'Help with homework', handler: (st: GameState) => {
    ((s as any).IgorQW ?? {})['history'] = 1;
    scene.img('images/characters/shared/headshots_main/big4.jpg');
    scene.text('"Oh, you need my help?" he asks, seemingly not surprised you need help but perhaps a bit surprised you asked him. After a few seconds, he smiles and nods. "Yeah, of course I\'ll help you."');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                    ]);
                  }
                }
              } else {
                if (((s as any).npc_rel ?? 0)?.['A4'] <= 20) {
                  scene.text('"Hey Igor, what are you doing?" you ask as you see him looking around for someone.');
                  scene.text('Igor looks around in a slight panic. "Just waiting for Dimka. I think I see him." He almost runs away like he\'s afraid you\'re about to do something to him.');
                } else {
                  scene.text('"Hey Igor, what are you doing?" you ask as you see him looking around for someone.');
                  scene.text('Igor looks around in a slight panic. "Why? what do you want?"');
                  scene.text('You give him a friendly smile. "I just wanted to see how you were doing. Anything wrong with that?"');
                  scene.text('He swallows and looks a little afraid. "No… no of course not."');
                  scene.text('You talk for a few minutes, but you can tell he\'s afraid of you, like he\'s expecting you to bully him in some manner.');
                  scene.text('He looks relived upon seeing Dimka and rushes over to him. "Uh, I\'ve got to go. See you later."');
                }
              }
            } else {
              if (((s as any).npc_rel ?? 0)?.['A4'] >= 80) {
                scene.text('"Hey Igor, what are you doing?" you ask as you see him looking around for someone.');
                scene.text('He shrugs dismissively. "Just waiting for Dimka."');
                // TODO-QSP: $func('npc_reactions', 'general', 'A4')
                scene.text('The two of you spend some time chatting while he waits for Dimka. He eventually shows up and Igor is ready to leave.');
                scene.text('"Maybe we can talk some other time?" he asks with a small smile as he waves goodbye.');
                scene.actions([
                  { label: 'Help with homework', handler: (st: GameState) => {
    ((s as any).IgorQW ?? {})['history'] = 1;
    scene.img('images/characters/shared/headshots_main/big4.jpg');
    scene.text('"Oh, you need my help?" he asks curiously, a bit surprised that you would ask him of all people.');
    scene.text('After a moment, he smiles and nods. "Yeah, of course I\'ll help you."');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                ]);
              } else {
                if (((s as any).npc_rel ?? 0)?.['A4'] <= 20) {
                  scene.text('"Uh, hello?" Igor is unamused to see you and completely ignores you as you try to keep a one-sided conversation going. Eventually, he just walks away without saying a word.');
                } else {
                  scene.text('"Hey Igor, what are you doing?" you ask as you see him looking around for someone.');
                  scene.text('He shrugs dismissively. "Just waiting for Dimka. Why are you talking to me?"');
                  scene.text('"I just wanted to say hi and see how you were," you reply.');
                  scene.text('He seems a bit confused. "Oh…" he is all he says as he looks past you and waves at someone. "Sorry, I\'ve got to go."');
                  scene.text('He rushes way from you, unsure if he was actually waving at anyone and think he was just trying to get away from you.');
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
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterTeaseIgor(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A4', 'like');
  scene.img('images/characters/shared/headshots_main/big4.jpg');
  scene.text('You decide to tease him a little. "I hope you\'re not too sore after last time…" you whisper with a smirk. Igor\'s cheeks flush pink as he looks around nervously, hoping no one overheard.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Just chat', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big4.jpg');
    scene.text('You choose not to press it any further and start talking to him about a variety of topics while holding hands until break is over. With a smile, you give him a quick kiss goodbye.');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    { label: 'Tell him you have a surprise', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big4.jpg');
    if (((s as any).IgorQW ?? 0)?.['schoolstrap'] === 1) {
      scene.text('You keep whispering in his ear. "I want to fuck your tight little ass with my strapon again." He gives you a shocked look and you open your purse and show him your strapon nestled inside, which makes him blush even more.');
      scene.text('He looks around and you can tell he is excited, you think you even notice a bulge forming in his pants before he bites his lower lip and nods. "Okay, but let\'s be careful." He sounds scared and excited at the same time.');
      scene.text('You pat him on the cheek. "Trust me."');
      scene.text('He grins and eagerly follows you as you lead him away.');
    } else {
      scene.text('You keep whispering in his ear. "I want to fuck you right now." He gives you a shocked look and you open your purse and show him your strapon nestled inside, which makes him blush even more.');
      scene.text('"What if we get caught?" He sounds scared and excited at the same time.');
      scene.text('You pat him on the cheek. "Trust me, I know a place where no one will ever find us."');
      scene.text('He thinks about it for a second before finally nodding.');
    }
    scene.actions([
      { label: 'Take him somewhere private', goto: ['gschool_coolkid_chats', 'igor_peg'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterIgorPeg(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/boy/igor/sex/school/break1.jpg');
  scene.text('You lead him down the hall and finally stop at one of the classrooms. You open the door and step in, closing the door after he enters. Once inside you tell him to strip naked.');
  scene.text('He only hesitates for a second before he quickly strips from his clothes. Once he is naked, you push him down to his knees and he looks up at you submissively, already rock-hard.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Eat me', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/school/break2.jpg');
    scene.text('You expose your pussy and pull his head over. He immediately starts licking your pussy and sucking on your clit.');
    qspCall(s, 'arousal', 'cuni', 2, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Eat me some more', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/school/break3.jpg');
    scene.text('Wanting him to have better access, you move over and lie back on one of the desks and spread your legs. He follows you over on his knees and you pull his face back into your crotch. He starts licking your pussy at once, getting you nice and wet.');
    qspCall(s, 'arousal', 'cuni', 3, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck my dick', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/school/break4.jpg');
    if (((s as any).strapNumber ?? 0) >= 5) {
      scene.text('You pull out the strap-on and start putting it on. "I\'m going to fuck you like a bitch with my big hard cock."');
      scene.text('His eyes grow wide. You can tell he\'s turned on by you taking charge like this, but he\'s also shaking his head at the massive size of the dildo.');
      scene.text('"Oh my god, that thing is huge! It would hurt too much! Are you crazy?!"');
      scene.text('"What? You already let me fuck you with one before," you grin while looking at him.');
      scene.text('"No, that is way too big! A smaller one is okay, but not that thing!" he says while shaking his head.');
      scene.text('You sigh and look down at the monster dildo, knowing he won\'t budge on trying it. "Okay, I\'ll get something smaller and we can do it next time."');
      scene.text('He nods. "Sounds good, I can\'t wait." The two of you talk for a bit before you decide it\'s time to leave.');
      scene.actions([
        { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
      ]);
    } else {
      scene.text('Having had enough, you want to give him his reward. You slide off the desk and grab your purse. You pull your strapon out and begin strapping it in place, Igor eagerly helping you.');
      scene.text('Once it\'s in place, you smile at him. "Suck my dick, bitch."');
      scene.text('He eagerly starts sucking your strapon.');
      qspCall(s, 'arousal', 'foreplay', 2, 'dom');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Bend him over', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'D<<strapNumber>>');
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/school/break5.jpg');
    if (((s as any).IgorQW ?? 0)?.['schoolstrap'] === 1) {
      scene.text('Once he has the strap-on wet with his saliva, he stands up and bends over one of the desks without you even having to tell him. He seems very eager for you to fuck his ass. You step up behind him and rub the tip of your strap-on against his puckered asshole. You spit in the crack of his ass to add a little more lubrication before you press the head of the strap-on against his asshole until it pops in. He moans in pleasure as your dick easily slides inside him.');
      // TODO-QSP: dynamic text: You slowly slide the full length of your <<dick>>cm <<$dick_girth>> dildo into h...
      scene.text(`You slowly slide the full length of your ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dildo into his ass, causing him to moan even louder. Once you're balls deep, you start to slowly thrust the strapon into his ass. "Oh yes, fuck me with your cock!" he moans out. You steadily pick up speed with each thrust and before long, you're holding onto his hips and pounding his ass. It doesn't take long until he moans loudly and his whole body starts to shudder. You know he just shot his load without either of you even touching his dick.`);
    } else {
      scene.text('Once he has the strapon wet with his saliva, you smile down at him. "Bend over for me, my little slut."');
      scene.text('He stands up and bends over one of the desks. You step up behind him and rub the tip of your strap-on against his puckered asshole. You spit in the crack of his ass to add a little more lubrication before you press the head of the strap-on against his asshole until it pops in. He moans in a mixture of pain and pleasure as it does.');
      // TODO-QSP: dynamic text: You slowly slide the full length of your <<dick>>cm <<$dick_girth>> dildo into h...
      scene.text(`You slowly slide the full length of your ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dildo into his ass. Once you are balls deep, you start to slowly thrust the strapon into his ass, steadily picking up speed until you're holding onto his hips and pounding his ass. It doesn't take long until he moans loudly and his whole body starts to shudder. You know he just shot his load without either of you even touching his dick.`);
    }
    qspCall(s, 'arousal', 'anal_dildo_give', 5, 'dom', 'rough');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Clean up', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big4.jpg');
    if (((s as any).IgorQW ?? 0)?.['schoolstrap'] === 1) {
      scene.text('Feeling better, and knowing he feels better, you give him a few last hard deep thrusts before pulling out of him. You take the harness off and clean up the dildo before putting them back in your purse and you both get dressed. Just as you both finish, the bell rings for your next class.');
      scene.text('You slap him on the ass, which makes him yelp a little as you walk out of the classroom with him. "Fuck you later, Igor," you say to him with a wink.');
      // TODO-QSP: dynamic text: He blushes and nods as he replies. "Talk to you later <<$pcs_nickname>>."
      scene.text(`He blushes and nods as he replies. "Talk to you later ${((s as any).pcs_nickname ?? 0)}."`);
      scene.text('You then both hurry to your next class.');
    } else {
      scene.text('Feeling better, and knowing he feels better, you give him a few last hard deep thrusts before pulling out of him. You take the harness off and clean up the dildo before putting them back in your purse and you both get dressed. Just as you both finish, the bell rings for your next class.');
      scene.text('You slap him on the ass, which makes him yelp a little as you walk out of the classroom with him. "Talk to you later, Igor," you say to him with a wink.');
      // TODO-QSP: dynamic text: He blushes and nods as he replies. "Talk to you later <<$pcs_nickname>>."
      scene.text(`He blushes and nods as he replies. "Talk to you later ${((s as any).pcs_nickname ?? 0)}."`);
      scene.text('You then both hurry to your next class.');
    }
    ((s as any).IgorQW ?? {})['schoolstrap'] = 1;
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterKatja(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A14', 'like');
  qspCall(s, 'stat', '');
  if ((Math.floor(Math.random() * 2) + 1) === 1  &&  ((s as any).katjaQW ?? 0)?.['school_sex'] === 1  &&  ((s as any).katjaQW ?? 0)?.['horny'] >= 40) {
    scene.img('images/characters/pavlovsk/school/girl/katja/tanga_kiss.jpg');
    scene.text('Katja slowly leans in towards you, almost closing her eyes as she slowly opening her mouth. Unable to resist, you lean in and meet her with a kiss.');
    qspCall(s, 'katjaEvDin', 'kiss_events');
  } else {
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    if (((s as any).npc_had_sex ?? 0)?.['A14']  &&  ((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).PCloSkirt ?? 0) > 1  &&  ((s as any).katjaQW ?? 0)?.['no_panties_day'] !== ((s as any).daystart ?? 0)) {
      scene.actions([
        { label: 'Show her you\'re not wearing panties', goto: ['Katja_Tanga', 'school'] },
      ]);
    }
    if (((s as any).katjaQW ?? 0)?.['QWstage'] > 2) {
      if (((s as any).katjaQW ?? 0)?.['horny'] < 20) {
        scene.text('Katja looks calm and stoic.');
      } else {
        if (((s as any).katjaQW ?? 0)?.['horny'] < 40) {
          scene.text('You see a naughty twinkle in Katja\'s eyes.');
        } else {
          if (((s as any).katjaQW ?? 0)?.['horny'] < 60) {
            scene.text('Katja has a faint blush on her cheeks as she looks at you mischievously.');
          } else {
            if (((s as any).katjaQW ?? 0)?.['horny'] < 80) {
              scene.text('Katja is blushing fairly obviously and looks at you longingly.');
            } else {
              scene.text('Katja\'s face is flushed bright red and her chest is heaving from her heavy breathing. She\'s idly rubbing her thighs against one another while you talk.');
            }
          }
        }
      }
    }
    // TODO-QSP: $func('npc_reactions', 'general', 'A14')
    if (((s as any).katjaQW ?? 0)?.['drunk_help'] === 1) {
      scene.actions([
        { label: 'Thank her for taking you home', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'like');
    ((s as any).katjaQW ?? {})['drunk_help'] = 0;
    qspCall(s, 'stat', '');
    scene.text(`<center><b>${((s as any).npc_firstname ?? 0)?.['A14']} ${((s as any).npc_lastname ?? 0)?.['A14']}</b></center>`);
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('You approach Katja and thank her for taking you home from the disco when you were drunk and she gives you a knowing smile.');
    // TODO-QSP: dynamic text: "Don't mention it, <<$pcs_nickname>>! You really shouldn't get that drunk again,...
    scene.text(`"Don't mention it, ${((s as any).pcs_nickname ?? 0)}! You really shouldn't get that drunk again, though. It could end badly. Some of the guys there are real pigs…" she says. "Do you want to hang out after school? We could do our homework together?"`);
    scene.text('"Sure, why not?" you reply.');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      ]);
    }
    if (((s as any).katjaQW ?? 0)?.['QWstage'] > 2  &&  ((s as any).katjaQW ?? 0)?.['knows_masturbation'] + ((s as any).katjaQW ?? 0)?.['knows_BJ'] + ((s as any).katjaQW ?? 0)?.['knows_sex'] + ((s as any).katjaQW ?? 0)?.['knows_anal'] + ((s as any).katjaQW ?? 0)?.['knows_cuni'] >= 2) {
      scene.actions([
        { label: 'Kiss Katja', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/tanga_kiss.jpg');
    scene.text('You lean in to kiss Katja.');
    if (((s as any).katjaQW ?? 0)?.['horny'] < 30) {
      scene.text('She pulls away from you as you try and kiss her, looking around to see if anyone seen you. "Not here and not now."');
      scene.actions([
        { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
      ]);
    } else {
      scene.img('images/characters/shared/headshots_main/big14.jpg');
      scene.text('You slowly lean in towards Katja to kiss her. Unable to resist, Katja closes her eyes, slowly opens her mouth and leans in to meet your kiss.');
      qspCall(s, 'katjaEvDin', 'kiss_events');
    }
  } },
      ]);
    }
    if (((s as any).katjaQW ?? 0)?.['QWstage'] > 1  &&  ((s as any).pcs_makeup ?? 0) <= 1) {
      // TODO-QSP: dynamic text: Katja looks at you with a smile. "<<$pcs_nickname>>, I bet you would look great ...
      scene.text(`Katja looks at you with a smile. "${((s as any).pcs_nickname ?? 0)}, I bet you would look great with a little make-up on you! What do you say?"`);
      scene.actions([
        { label: 'Let her put makeup on you', handler: (st: GameState) => {
    (s as any).pcs_hairbsh = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('Katja happily grins as she quickly straightens your hair. "What do you want? A light touch-up, some normal make-up or shall I just shovel it on?"');
    scene.actions([
      { label: 'Light touch-up', handler: (st: GameState) => {
    (s as any).pcs_makeup = 2;
    scene.text('Katja subtly applies some neutral tones, with a light application of makeup to bring out your natural beauty.');
    if (((s as any).katjaQW ?? 0)?.['QWstage'] > 2) {
      ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (5 * (1 + ((s as any).npc_had_sex ?? {})?.['A14']));
      scene.text('Katja suddenly becomes aware that she is staring into your eyes and blushes.');
    }
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
      { label: 'Keep talking to her', goto: ['gschool_coolkid_chats', 'katja'] },
    ]);
  } },
      { label: 'Normal make-up', handler: (st: GameState) => {
    (s as any).pcs_makeup = 3;
    scene.text('Katja applies some mildly vibrate tones and colors of makeup to cover your minor imperfections and enhance your best features.');
    if (((s as any).katjaQW ?? 0)?.['QWstage'] > 2) {
      ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (5 * (1 + ((s as any).npc_had_sex ?? {})?.['A14']));
      scene.text('Katja suddenly becomes aware that she is staring into your eyes and blushes.');
    }
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
      { label: 'Keep talking to her', goto: ['gschool_coolkid_chats', 'katja'] },
    ]);
  } },
      { label: 'Heavy make-up', handler: (st: GameState) => {
    (s as any).pcs_makeup = 4;
    scene.text('Katja applies some deeper, richer shades of makeup that are thick enough to cover most imperfections while drawing attention to your eyes and lips.');
    if (((s as any).katjaQW ?? 0)?.['QWstage'] > 2) {
      ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (5 * (1 + ((s as any).npc_had_sex ?? {})?.['A14']));
      scene.text('Katja suddenly becomes aware that she is staring into your eyes and blushes.');
    }
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
      { label: 'Keep talking to her', goto: ['gschool_coolkid_chats', 'katja'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).fame ?? 0)?.['pav_slut'] > 200) {
        if (((s as any).npc_rel ?? 0)?.['A14'] >= 50) {
          scene.text('"Hey Katja, I was wondering if you had any recommendations for lipstick that won\'t smear? Things can get kind of messy when I\'m… you know." You press your tongue against the inside of your cheek to imitate sucking cock.');
          scene.text('She looks at you in confusion for a few seconds before she gasps softly. "That… that\'s gross!" she huffs. "How can you even ask me something like that?!"');
        } else {
          if (((s as any).npc_rel ?? 0)?.['A14'] <= 20) {
            scene.text('Katja looks around nervously when she sees you approaching. She catches sight of her sister and dashes over to her, clearly wanting to avoid speaking to you.');
          } else {
            scene.text('Katja doesn\'t look too happy to see you and spends most of your awkwardly one sided conversation fumbling as she looks for a way out. As soon as the bell rings, she immediately dashes off.');
          }
        }
      } else {
        if (((s as any).grupTipe ?? 0) === 1) {
          if (((s as any).npc_rel ?? 0)?.['A14'] >= 50) {
            scene.text('You spend some time hanging around Kat\'s locker, laughing and joking as she tells you some personal stories about Vicky. "She had been drinking all night and had to go, but all the stalls were full, so she drags me out behind the community center to go pee behind a bush."');
            scene.text('She breaks out into a fit of giggles. "She was so drunk, as she was squatting, she stumbled and fell into her own pee!"');
          } else {
            if (((s as any).npc_rel ?? 0)?.['A14'] <= 20) {
              scene.text('You smile at her as you approach. "Hey Katja, trying a new lipstick out? That color looks pretty on you." ');
              scene.text('She smiles sheepishly at your compliment. "Yeah… Just wanted to try something a little different…" she answers quietly.');
              scene.text('The conversation doesn\'t really go anywhere as she keeps her answers short or doesn\'t say anything at all, but at least she\'s willing to actually talk to you.');
            } else {
              scene.text('With Katja being a quiet girl, she doesn\'t do much talking, but she seems to enjoy some lighthearted banter with you, so long as you\'re doing most of the talking.');
              scene.text('You get the feeling that if you were closer, she\'d open up more, but for now you\'ll have to settle with this.');
            }
          }
        } else {
          if (((s as any).grupTipe ?? 0) === 2) {
            if (((s as any).npc_rel ?? 0)?.['A14'] >= 50) {
              scene.text('You approach Katja and have a lively conversation where you exchange funny stories about Vanya.');
              scene.text('"And that\'s how my sister fell in love with the biggest clown in school!" she laughs with a snort.');
              scene.text('"And I wouldn\'t change him for the world!" Vicky adds with a smile.');
            } else {
              if (((s as any).npc_rel ?? 0)?.['A14'] <= 20) {
                scene.text('Katja looks around nervously when she sees you approaching. "Why do you want to talk to me? I\'m not sporty like you, my sister and Albina. Could you go and… speak with someone else please?"');
              } else {
                scene.text('With Katja being a quiet girl, she doesn\'t do much talking, but she seems to enjoy some lighthearted banter with you, so long as you\'re doing most of the talking. You get the feeling that if you were closer, she\'d open up more, but for now you\'ll have to settle with this.');
              }
            }
          } else {
            if (((s as any).grupTipe ?? 0) === 3) {
              if (((s as any).npc_rel ?? 0)?.['A14'] >= 50) {
                scene.text('Katja smiles as you approach and you have a lively conversation about your favorite subjects and her plans for going to university after school.');
                scene.text('"I want to become a teacher. Helping others achieve their potential just sounds like the perfect job!" she gleefully states.');
              } else {
                if (((s as any).npc_rel ?? 0)?.['A14'] <= 20) {
                  scene.text('Katja doesn\'t look too happy to see you and your conversation doesn\'t really go anywhere as she keeps her answers short or doesn\'t say anything at all. At least she\'s willing to actually talk to you.');
                } else {
                  scene.text('Although Katja is happy to see you, she doesn\'t do much talking. You get the feeling that she\'d open up more if you were closer, but for now you\'ll have to settle with this.');
                }
              }
            } else {
              if (((s as any).grupTipe ?? 0) === 4) {
                if (((s as any).npc_rel ?? 0)?.['A14'] >= 50) {
                  scene.text('Katja takes a surprising interest in what you and your fellow gopniks get up to outside of school and listens carefully when you answer her numerous questions.');
                } else {
                  if (((s as any).npc_rel ?? 0)?.['A14'] <= 20) {
                    scene.text('Katja looks around nervously when she sees you approaching. She catches sight of her sister and dashes over to hide behind her, clearly scared of you and wanting to avoid speaking to you.');
                  } else {
                    scene.text('With Katja being a quiet girl, she doesn\'t do much talking and often avoids eye contact with you. You get the feeling she\'d open up more if you were closer, but for now you\'ll have to settle with this.');
                  }
                }
              } else {
                if (((s as any).npc_rel ?? 0)?.['A14'] >= 50) {
                  scene.text('Despite the judgmental stares and insults the other cool kids and jocks throw at you, Katja makes the time to briefly speak with you before Vicky pulls her away to "save" her from the "social embarrassment" of speaking with you.');
                } else {
                  if (((s as any).npc_rel ?? 0)?.['A14'] <= 20) {
                    scene.text('Katja looks around nervously when she sees you approaching. She catches sight of her sister and dashes over to her, clearly wanting to avoid speaking to you.');
                  } else {
                    scene.text('With Katja being a quiet girl, she doesn\'t do much talking, the judgmental stares of the other cool kids only making things worse for her. You get the feeling she\'d be more comfortable speaking with you if you were closer to her or more popular with your peers.');
                  }
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
    ((s as any).temp ?? {})['tampon_ask'] = '"Katja," you whisper. "My period just started and I don\'t have a pad. Can I borrow one?"';
    qspCall(s, 'gschool_coolkid_chats', 'katja_tampon');
  } },
        ]);
      }
      scene.actions([
        { label: 'Ask for a tampon', handler: (st: GameState) => {
    ((s as any).temp ?? {})['tampon_ask'] = '"Katja," you whisper. "My period just started and I don\'t have a tampon. Can I borrow one?"';
    qspCall(s, 'gschool_coolkid_chats', 'katja_tampon');
  } },
      ]);
    } else {
      if (((s as any).placebopart ?? 0) > 0  &&  ((s as any).lutH ?? 0) > 0  &&  ((s as any).knowpreg ?? 0) === 0  &&  ((s as any).isprok ?? 0) === 0  &&  (!((s as any).isprokp ?? 0))) {
        if (((s as any).pantyworntype ?? 0) !== 'none') {
          scene.actions([
            { label: 'Ask for a pad', handler: (st: GameState) => {
    ((s as any).temp ?? {})['tampon_ask'] = '"Katja," you whisper. "My period is starting soon and I don\'t have a pad. Can I borrow one?"';
    qspCall(s, 'gschool_coolkid_chats', 'katja_tampon');
  } },
          ]);
        }
        scene.actions([
          { label: 'Ask for a tampon', handler: (st: GameState) => {
    ((s as any).temp ?? {})['tampon_ask'] = '"Katja," you whisper. "My period is starting soon and I don\'t have a tampon. Can I borrow one?"';
    qspCall(s, 'gschool_coolkid_chats', 'katja_tampon');
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterKatjaTampon(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  if (((s as any).temp ?? 0)?.['tampon_ask'] === '"Katja," you whisper. "My period just started  &&  I don\'t have a tampon. Can I borrow one?"'  ||  ((s as any).temp ?? 0)?.['tampon_ask'] === '"Katja," you whisper. "My period is starting soon  &&  I don\'t have a tampon. Can I borrow one?"') {
    if (((s as any).katjaQW ?? 0)?.['pantiesQWstage'] === 5) {
      scene.text('"Oh!" Katja squeaks, her eyes going wide. "Yes, of course!"');
      scene.text('She quickly digs into her purse and comes up with a tampon for you.');
      scene.text('"Thanks, Katja."');
      scene.text('"You\'re welcome," she smiles back.');
      scene.text('You run off to the bathroom to go put the tampon in before class starts.');
      (s as any).isprok = 1;
      scene.actions([
        { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
      ]);
    } else {
      if (((s as any).npc_rel ?? 0)?.['A14'] > 20) {
        scene.text('"Oh!" Katja squeaks, her eyes going wide and starts digging through her purse. "Yes, of course! Uhm… I only have pads, is that okay?"');
        if (((s as any).pantyworntype ?? 0) !== 'none') {
          scene.text('"That\'s fine, it\'s an emergency after all. Thanks, Katja."');
          scene.text('"You\'re welcome," she smiles as she hands you the pad.');
          scene.text('You thank her again and run off to the bathroom to go put it on.');
        }
      } else {
        scene.text('"Oh!" Katja squeaks, her eyes going wide. A faint blush colors her cheeks as she seems both surprised you\'re talking to her and embarrassed about what you\'re asking but starts digging through her purse anyways. "I, uhm… I only have pads, is that okay?"');
        if (((s as any).pantyworntype ?? 0) !== 'none') {
          scene.text('"That\'s fine, it\'s an emergency after all. Thanks, Katja."');
          scene.text('"You\'re welcome," she mumbles, looking away as she hands you the pad.');
          scene.text('You thank her again and run off to the bathroom to go put it on.');
        }
      }
      if (((s as any).pantyworntype ?? 0) !== 'none') {
        (s as any).isprokp = 1;
        scene.actions([
          { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
        ]);
      } else {
        scene.actions([
          { label: 'Uh…', handler: (st: GameState) => {
    scene.text('"Uh…"');
    scene.text('You hesitate as she holds out the pad for you, very conscious of the fact that you cannot use a menstrual pad right now unless you can somehow get ahold of some underwear to go with it. Katja misinterprets your hesitation and her cheeks color with embarrassment, assuming that you\'re judging her for using pads.');
    scene.text('"That will be fine, thanks," you say with a false smile.');
    scene.text('"You\'re welcome," she mumbles, looking away as she hands you the pad.');
    scene.text('You awkwardly walk away to the bathroom where you do <i>not</i> put on a pad without underwear and still have a woman\'s issue to take care of.');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
          { label: 'That\'s not going to work', handler: (st: GameState) => {
    ((s as any).katjaQW ?? {})['no_panties_day'] = ((s as any).daystart ?? 0);
    scene.text('"Uhm… A pad\'s not going to work for me," you say.');
    scene.text('"Huh? Why no-" Katja cuts off short and her eyes go wide as her gaze flicks down to your skirt and back up.');
    scene.text('"Yeah…" you reply with a wry smirk.');
    scene.text('"Uh… Uhm…" Her cheeks go bright red as she looks around nervously.');
    scene.text('"Maybe you can ask my sister. I know she uses tampons… I have to go!"');
    scene.text('She runs off to her next class and you need to go too, so there\'s no time to find Vicky.');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
        ]);
      }
    }
  } else {
    if (((s as any).katjaQW ?? 0)?.['pantiesQWstage'] === 5) {
      scene.text('"A pad?" Katja raises an eyebrow before fishing through her purse. "What\'s wrong with you? Did you start wearing panties again? You know I don\'t."');
      scene.text('She hands a tampon over to you with a wry smirk.');
      scene.text('"Right. I forgot about that," you smile back. "Thanks, Katja."');
      scene.text('"You\'re welcome," she winks.');
      scene.text('You run off to the bathroom to go put the tampon in before class starts.');
      (s as any).isprok = 1;
      scene.actions([
        { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
      ]);
    } else {
      scene.text('"Oh!" Katja squeaks, her eyes going wide. "Yes of course!"');
      scene.text('She quickly digs into her purse and comes up with a pad for you');
      scene.text('"Thanks, Katja."');
      scene.text('"You\'re welcome," she smiles back.');
      scene.text('You run off to the bathroom to go put the pad on before class starts.');
      (s as any).isprokp = 1;
      scene.actions([
        { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterKatjaproblems(s: GameState, scene: SceneBuilder): void {
  ((s as any).katjaQW ?? {})['QWstage'] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  scene.text('You see Katja near the lockers, biting her lips and looking around nervously. Leaning against her is none other than Svyatoslav who, according to rumors, has a crush on her. He seems to be trying to convince Katja to go on a date with him.');
  scene.text('"Come on Katja, it\'ll be fun! I\'ll pay for the popcorn!"');
  scene.text('She isn\'t convinced and plays compulsively with her notebook, obviously trying to look for a way out.');
  scene.text('"I don\'t like that film. It\'s just not my type and… well… I have homework to do."');
  scene.text('Katja\'s flimsy excuse and demeanor doesn\'t convince the driven Svyatoslav, who just smiles, knowing that she will eventually agree with him. You ponder about what to do when Vicky steps between the two of them.');
  scene.text('"Get lost you chiseled, sculpted hunk of a man! Don\'t charm my sister into marrying you so I\'m forced to be an incredibly young, pretty and cool aunt!"');
  scene.text('There are various reactions from everyone present, but her words are enough to break Svyatoslav\'s hold and take away his confidence. The jock\'s next words sound… somewhat shaken.');
  scene.text('"Okay… Uh… Look Katja, just think about it, okay? Just… give me a chance… Yeah… Ehm… Until later."');
  scene.text('As Svyatoslav leaves, Katja releases a long-winded sigh.');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Talk with the twins', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    // TODO-QSP: dynamic text: "Thanks Vicky. I don't know how to tell him that I'm not interested." She sighs....
    scene.text(`"Thanks Vicky. I don't know how to tell him that I'm not interested." She sighs. "I don't think that will make him relent… Oh ${((s as any).pcs_nickname ?? 0)}! You heard us?!"`);
    scene.text('You don\'t answer, only looking around the crowded corridor and at a smiling Lizaveta, who is furiously recording into her phone. "Thankfully, Vicky came to her sister\'s rescue!"');
    scene.text('"Come on Katja! It isn\'t that bad. You didn\'t do anything wrong! Relax! If you want to avoid him, beyond paying Vitek to break his legs, you only need to hang around with other people. Tell him that you have a full schedule!"');
    if (((s as any).npc_rel ?? 0)?.['A15'] >= ((s as any).npc_rel ?? 0)?.['A14']) {
      scene.text('Katja rests deflated against the lockers, her troubled eyes looking at you sideways.');
      // TODO-QSP: dynamic text: "Vicky… <<$pcs_nickname>>… Sorry, I just don't want to trouble anybody."
      scene.text(`"Vicky… ${((s as any).pcs_nickname ?? 0)}… Sorry, I just don't want to trouble anybody."`);
      scene.text('Katja bites her lips and looks at Vicky, who tilts her head as a silent dialogue surges between the two before they both turn towards you.');
      // TODO-QSP: dynamic text: "You know <<$pcs_nickname>>… I have my hands more or less full with Vanya. Can y...
      scene.text(`"You know ${((s as any).pcs_nickname ?? 0)}… I have my hands more or less full with Vanya. Can you protect my sister's chastity?"`);
      scene.text('The twins proceed to give you puppy eyes. At this point, any answer beyond "Of course Katja! Whatever you want Katja! Whenever you want Katja!" is social suicide with everyone looking at their cute display. Damm, the shit these girls make you do…');
      scene.text('Afterwards, you chat with the twins until it is time to return to class.');
    } else {
      scene.text('Katja rests against the lockers, pondering her sister\'s words before she smiles and turns happily towards you, clutching your hands in her own.');
      // TODO-QSP: dynamic text: "<<$pcs_nickname>> please! You must help me! Can we hang around after school?"
      scene.text(`"${((s as any).pcs_nickname ?? 0)} please! You must help me! Can we hang around after school?"`);
      scene.text('She looks at you with puppy eyes full of hope, so you smile and nod at her, prompts her to hug you.');
      scene.text('"Hey that is unjust Katja! We are sisters! I also want a hug!"');
      scene.text('Vicky joins the embrace and you chat with the twins until it is time to return to class.');
    }
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'like');
    qspCall(s, 'npc_relationship', 'modify', 'A15', 'like');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterBella(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A22', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big22.jpg');
  if (((s as any).fame ?? 0)?.['pav_slut'] > 200) {
    if (((s as any).npc_rel ?? 0)?.['A22'] >= 80) {
      scene.text('"Are you going to do something with your life or are you planning on being a sex toy for boys to use forever?" Bella asks.');
      scene.text('"God, you sound like my mother…" you reply unimpressed.');
      scene.text('"You need Jesus. Literally!" she says before she rolls her eyes and shakes her head before walking away.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A22'] <= 20) {
        scene.text('"Hey Bella, got a minute?" you ask.');
        scene.text('"Me? A minute? For you? Do I look like I want an STD, you slut?" she scoffs.');
        scene.text('"It\'s not that bad. It only hurts when I pee," you try to snap back at her.');
        scene.text('She sighs while giving you a look of disgust. She then rolls her eyes and walks away, murmuring something about you that don\'t quite hear.');
      } else {
        scene.text('"Oh, it\'s <i>you</i>… Shoo, slut!" she says as she gestures for you to leave.');
        scene.text('"Snob…" you murmur as you walk away.');
      }
    }
  } else {
    if (((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2) {
      if (((s as any).npc_rel ?? 0)?.['A22'] >= 60) {
        scene.text('"Come here, you won\'t believe what happened!" Bella says while waving you over.');
        scene.text('"What? Tell me!" you reply, intrigued.');
        scene.text('"You know that cafe at the train station, right?" she asks in a brisk manner.');
        scene.text('"Uhmh…" you nod back, knowing your mother works there.');
        scene.text('"The old fart that works there suggested that Irina should blow him! Can you believe that?! Just because her card got rejected. What a creep!"');
        scene.text('"We vowed never to go back there, like ever! Besides, there\'s a nice cafe in Pushkin where we sometimes hang out. You should join us sometime," she adds as the two of you talk.');
        scene.text('Well she talks, mostly about other problems she\'s had with people more than anything.');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A22'] <= 20) {
          scene.text('"What do you want?" Bella arrogantly asks as you approach.');
          scene.text('"I just wanted to ask you about this store in the city. I heard-"');
          scene.text('Before you\'re able to continue, she cuts you off and looks at her pedicure with a sigh. "Listen…"');
          scene.text('Before she can answer, Irina whispers something in her ear and smiles creep onto their lips.');
          scene.text('"Actually… Why you don\'t come with us?" she quickly suggests. "Saturday midday at the city station. That\'s good for you, right Irina?"');
          scene.text('Irina just continues smiling.');
          scene.text('"See? Settled," she says and gives you a hug before going on her way.');
        } else {
          // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, there's something I've wanted to ask you for a long time...
          scene.text(`"Hey ${((s as any).pcs_nickname ?? 0)}, there's something I've wanted to ask you for a long time now," Bella says in an intrigued tone.`);
          scene.text('"Shoot," you answer quickly.');
          scene.text('"What\'s the deal between you and Christina? When you two talk, I always sense some… tension between the two of you. Boyfriend issues or something?"');
          scene.text('"Ugh," you sigh. "That\'s a long story for another time."');
          scene.text('"Okay, no hurry," she assures you.');
        }
      }
      // TODO-QSP: $func('npc_reactions', 'general', 'A22')
    } else {
      if (((s as any).grupTipe ?? 0) === 3) {
        if (((s as any).npc_rel ?? 0)?.['A22'] >= 70) {
          // TODO-QSP: dynamic text: You see Bella waving at you to get your attention. "Hey <<$pcs_nickname>>, can I...
          scene.text(`You see Bella waving at you to get your attention. "Hey ${((s as any).pcs_nickname ?? 0)}, can I take a quick look at your notes for the next class, thanks."`);
          scene.text('She takes your notebook before you can even answer.');
          scene.text('"Hello to you too. Of course, what are friends for?" you reply.');
          scene.text('"Yeah, I got home really late. Hey, you\'ll be going to uni after graduation, right?" She keeps the conversation going while taking photos with her phone.');
          scene.text('"I\'m thinking of it. Of course, it would be interesting but which one? There\'s so many different things to consider studying as well, you know."');
          scene.text('"Yeah, getting out of this shithouse would be nice," Bella chuckles while pointing over her shoulder at some gopniks leaving the bathroom followed by Petia, whose hair is visibly wet.');
          scene.text('You talk for a bit as she snaps photos of your notes. Once she\'s done, she smiles at you and walks away.');
        } else {
          if (((s as any).npc_rel ?? 0)?.['A22'] <= 20) {
            // TODO-QSP: dynamic text: "Make it quick, <<$pcs_nickname>>! I don't really have the time to stand here an...
            scene.text(`"Make it quick, ${((s as any).pcs_nickname ?? 0)}! I don't really have the time to stand here and chat…" Bella hurries you on.`);
            scene.text('"I was thinking we could maybe hang out after school one day?" you shyly ask.');
            scene.text('She gives you a judgmental look from head to toe. "Is this a prank? What could I possibly gain from hanging out with <i>you?</i>"');
            scene.text('"I don\'t know… I could do your homework?" you suggest.');
            scene.text('She scoffs you aside. "Don\'t be silly! Run along now, kid."');
          } else {
            scene.text('"Do you play SWTOR?" you ask.');
            scene.text('"Swto.. What? What\'s that? Sex with the old and retired?" she asks mockingly.');
            scene.text('"No, it\'s a Star Wars game, silly!" you explain enthusiastically.');
            scene.text('"Babe, two things: You don\'t call me silly. And no, that would be social suicide," she scoffs.');
            scene.text('You try to talk to her a bit more, but she mostly ignores you. When the bell rings and you both go your own ways, she taps your shoulder. "The Phantom Menace is the best."');
            scene.text('"Wait, how do you…?" You only get a sly wink as an answer.');
          }
        }
        // TODO-QSP: $func('npc_reactions', 'general', 'A22')
      } else {
        if (((s as any).grupTipe ?? 0) === 4) {
          if (((s as any).npc_rel ?? 0)?.['A22'] >= 70) {
            scene.text('You brashly squeeze yourself between Bella and her friends, who all lighten up when you start sharing stories of the petty crimes and practical jokes the gopniks have been performing.');
            // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, don't tell her we asked, but are the stories about Vitek...
            scene.text(`"Hey ${((s as any).pcs_nickname ?? 0)}, don't tell her we asked, but are the stories about Vitek's sister true?" Bella asks and the other girls start giggling.`);
            scene.text('"A girl never tells on her friends!" you reply, dodging the question with a sly smile.');
            scene.text('"Come on, be cool!" the girls plead and some of them mimic zipping their mouth, but you just walk away with a wink and leave them wanting for more.');
          } else {
            if (((s as any).npc_rel ?? 0)?.['A22'] <= 20) {
              scene.text('"Wait there one second!" Bella shouts at you before you get any closer.');
              scene.text('"What? What\'s wrong, snob?" you scoff.');
              scene.text('"Just made sure to swallow my rings before you get any closer. I don\'t want these getting stolen."');
              scene.text('"You snooty bitch! You want your pretty face smashed in, cunt?!"');
              scene.text('Before things can escalate any further, some teachers step between the two of you and give you both a boring lecture about children back in the day and how the grass was greener.');
            } else {
              scene.text('"Hey, do you have any… You know, grass?" Bella asks in a sneaky manner.');
              scene.text('"Bitch, do I look like a drug dealer to you?" you answer sternly and suggest she try her luck with Vitek.');
              scene.text('"Fine, I will!"');
              scene.text('The two of you talk a bit more, but it isn\'t a comfortable conversation.');
            }
          }
          // TODO-QSP: $func('npc_reactions', 'general', 'A22')
        } else {
          if (((s as any).npc_rel ?? 0)?.['A22'] >= 70) {
            // TODO-QSP: $func('npc_reactions', 'general', 'A22')
            scene.text('"You know, you should come and hang out with me and my friends," Bella says with a smile.');
            scene.text('"You really mean that?!" you ask as your eyes widen. "You think I\'ll fit in with them?"');
            scene.text('She nods. "No doubt! You\'ll have no issues fitting in."');
            scene.text('"I\'ll be seeing you around and we can plan something, no?" she adds before parting ways.');
          } else {
            scene.text('"Oh, it\'s <i>you</i> again," Bella sighs. "I don\'t have time to deal with you today, so go bother someone else."');
            scene.text('Before you can say anything, you feel someone take a firm grip of your skirt and start pulling it down.');
            scene.text('You try to fight back as you hear some boys from another class encouraging your assailant. "Come on, Boris! Pull it down already, you wanker!"');
          }
        }
      }
    }
  }
  if (((s as any).mesec ?? 0) > 0  &&  ((s as any).isprok ?? 0) === 0  &&  (!((s as any).isprokp ?? 0))) {
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.actions([
        { label: 'Ask for a pad', handler: (st: GameState) => {
    ((s as any).temp ?? {})['tampon_ask'] = '"Bella," you whisper. "My period just started and I don\'t have a pad. Can I borrow one?"';
    qspCall(s, 'gschool_coolkid_chats', 'bella_tampon');
  } },
      ]);
    }
    scene.actions([
      { label: 'Ask for a tampon', handler: (st: GameState) => {
    ((s as any).temp ?? {})['tampon_ask'] = '"Bella," you whisper. "My period just started and I don\'t have a tampon. Can I borrow one?"';
    qspCall(s, 'gschool_coolkid_chats', 'bella_tampon');
  } },
    ]);
  } else {
    if (((s as any).placebopart ?? 0) > 0  &&  ((s as any).lutH ?? 0) > 0  &&  ((s as any).knowpreg ?? 0) === 0  &&  ((s as any).isprok ?? 0) === 0  &&  (!((s as any).isprokp ?? 0))) {
      if (((s as any).pantyworntype ?? 0) !== 'none') {
        scene.actions([
          { label: 'Ask for a pad', handler: (st: GameState) => {
    ((s as any).temp ?? {})['tampon_ask'] = '"Bella," you whisper. "My period is starting soon and I don\'t have a pad. Can I borrow one?"';
    qspCall(s, 'gschool_coolkid_chats', 'bella_tampon');
  } },
        ]);
      }
      scene.actions([
        { label: 'Ask for a tampon', handler: (st: GameState) => {
    ((s as any).temp ?? {})['tampon_ask'] = '"Bella," you whisper. "My period is starting soon and I don\'t have a tampon. Can I borrow one?"';
    qspCall(s, 'gschool_coolkid_chats', 'bella_tampon');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterBellaTampon(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big22.jpg');
  // TODO-QSP: dynamic text: <<$temp['tampon_ask']>>
  scene.text(`${((s as any).temp ?? 0)?.['tampon_ask']}`);
  if (((s as any).temp ?? 0)?.['tampon_ask'] === '"Bella," you whisper. "My period just started  &&  I don\'t have a tampon. Can I borrow one?"'  ||  ((s as any).temp ?? 0)?.['tampon_ask'] === '"Bella," you whisper. "My period is starting soon  &&  I don\'t have a tampon. Can I borrow one?"') {
    if (((s as any).npc_rel ?? 0)?.['A22'] >= 70) {
      scene.text('Bella gives you one look and immediately digs through her purse, coming out with a tampon.');
      scene.text('"Here," she says handing it over. "Hurry! Before class starts!"');
      scene.text('"Thanks Bella. You\'re a lifesaver."');
      scene.text('She gives you a sympathetic look and you run off to the bathroom to go put the tampon in.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A22'] > 20) {
        scene.text('Bella gives you a long look before sighing and starts digging through her purse.');
        scene.text('"You really ought to keep some emergency tampons with you at all times," she chides as she hands one over.');
        scene.text('"What are you, my mother?"');
        scene.text('"Just a woman who knows how to be responsible," she replies with a stare.');
        scene.text('"Thanks Bella," you mumble.');
        scene.text('She gives you a shrug and walks off, leaving you run to the bathroom to go put the tampon in.');
      } else {
        scene.text('"Seriously? Ugh." Bella gives you a long look before sighing and starts digging through her purse, grumbling the whole time. "You need to grow the fuck up and learn to start taking care of yourself. You\'ve only been having periods for what, the last five years?"');
        scene.text('She holds out a tampon for you.');
        scene.text('"Thanks Bella."');
        scene.text('"Fucking <i>child</i>," she huffs and walks off, leaving you run to the bathroom to go put the tampon in.');
      }
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A22'] >= 70) {
      scene.text('Bella gives you one look and immediately digs through her purse, coming out with a tampon.');
      // TODO-QSP: dynamic text: "Nobody uses pads anymore <<$pcs_nickname>>," she says handing it over. "Now hur...
      scene.text(`"Nobody uses pads anymore ${((s as any).pcs_nickname ?? 0)}," she says handing it over. "Now hurry! Before class starts!"`);
      scene.text('"Thanks Bella. You\'re a lifesaver."');
      scene.text('She gives you a sympathetic look and you run off to the bathroom to go put the tampon in.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A22'] > 20) {
        scene.text('Bella gives you a long look before sighing and starts digging through her purse.');
        scene.text('"Real women use tampons," she says absent-mindedly as she retrieves one and holds it out to you. "And you really ought to keep some on you at all times for emergencies."');
        scene.text('"What are you, my mother?"');
        scene.text('"Just a <i>woman</i> who knows how to be responsible," she replies with a stare.');
        scene.text('"Thanks Bella," you mumble.');
        scene.text('She gives you a shrug and walks off, leaving you run to the bathroom to go put the tampon in.');
      } else {
        scene.text('"Seriously? Ugh." Bella gives you a long look before sighing and starts digging through her purse, grumbling the whole time. "You need to grow the fuck up and learn to start taking care of yourself. You\'ve only been having periods for what, the last five years?"');
        scene.text('She holds out a tampon.');
        scene.text('"And real women don\'t use pads."');
        scene.text('"Thanks Bella," you mumble.');
        scene.text('"Fucking <i>child</i>," she huffs and walks off, leaving you run to the bathroom to go put the tampon in.');
      }
    }
  }
  (s as any).isprok = 1;
  // TODO-QSP: end
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterLizaveta(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A140', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big140.jpg');
  if (((s as any).fame ?? 0)?.['pav_slut'] > 200) {
    qspCall(s, 'npc_relationship', 'modify', 'A140', 'dislike');
    if (((s as any).npc_rel ?? 0)?.['A140'] >= 50) {
      scene.text('"Well look who it is, the town bicycle!" Lizaveta exclaims as she looks you over with a shake of her head. "What a complete waste. Though I guess I should thank you since you provide so much gossip!" she taunts before proceeding to just ignore you.');
    } else {
      scene.text('"The current rumor is that you\'ve sucked well over 100 dicks!" Lizaveta exclaims with a cruel laugh. "There\'s even a bet that you\'ll have sucked or fucked <i>1000</i> dicks by the end of the year! Want to know if I\'m betting against or for you?" she taunts before dismissing it as a joke, but you\'re not sure if she\'s telling the truth…');
    }
  } else {
    if (((s as any).grupTipe ?? 0) === 1) {
      // TODO-QSP: $func('npc_reactions', 'general', 'A140')
      if (((s as any).npc_rel ?? 0)?.['A140'] >= 50) {
        scene.text('The perks of being a close friend of Lizaveta go beyond just running in the same social circle. She tells you some gossip that no one else should know about.');
        scene.text('"I heard from a little red bird that one time, while Vicky was out partying at the community center, she couldn\'t hold it in, so she went to do her business behind a bush, buuuut…" Liza drags it out to build a little suspense. "She was so drunk that she ended up falling into her own piss! Luckily Kat-- her friend, I mean, was there to take her home before anyone saw!"');
        scene.actions([
          { label: 'Latest gossip', goto: ['gschool_coolkid_chats', 'lizaveta_latest_gossip'] },
        ]);
      } else {
        if (((s as any).npc_rel ?? 0)?.['A140'] <= 20) {
          scene.text('"You know, you really shouldn\'t shit where you sleep," Lizaveta says while shaking her head disapprovingly.');
          scene.text('"What? What\'s that supposed to mean?" you ask, but she just sighs.');
          scene.text('"You\'re dumber than I thought…" she mutters.');
          scene.text('You try to get an answer out of her, but she dances around your questions while talking to Bella.');
        } else {
          scene.text('You spend some time talking with Lizaveta, and for a while you manage to avoid talking about anything gossipy, but considering she\'s the queen of it, it eventually devolves into some "He said, she said."');
          scene.actions([
            { label: 'Latest gossip', goto: ['gschool_coolkid_chats', 'lizaveta_latest_gossip'] },
          ]);
        }
      }
    } else {
      if (((s as any).grupTipe ?? 0) === 2) {
        // TODO-QSP: $func('npc_reactions', 'general', 'A140')
        if (((s as any).npc_rel ?? 0)?.['A140'] >= 50) {
          scene.text('You would think that being close friends with Lizaveta would mean getting some exclusive gossip from her, but she keeps her lips sealed. "I know everyone likes to say I can\'t keep my mouth shut, but even I need to have some secrets of my own," she winks.');
          scene.text('"Oh come on!" you plead. "You gotta give me a little bit of something…"');
          scene.text('With a dramatic sigh, Liza caves and shares some harmless, yet juicy gossip you hadn\'t heard about until now.');
          scene.actions([
            { label: 'Latest gossip', goto: ['gschool_coolkid_chats', 'lizaveta_latest_gossip'] },
          ]);
        } else {
          if (((s as any).npc_rel ?? 0)?.['A140'] <= 20) {
            scene.text('The conversation is stale and lifeless as Lizaveta taps away at her phone while you talk, only managing an occasional "Yeah…" or "Uh-huh…"');
          } else {
            scene.text('You spend some time talking with Lizaveta, and for a while you manage to avoid talking about anything gossipy, but considering she\'s the queen of it, it eventually devolves into some "He said, she said."');
            scene.actions([
              { label: 'Latest gossip', goto: ['gschool_coolkid_chats', 'lizaveta_latest_gossip'] },
            ]);
          }
        }
      } else {
        if (((s as any).grupTipe ?? 0) === 3) {
          // TODO-QSP: $func('npc_reactions', 'general', 'A140')
          if (((s as any).npc_rel ?? 0)?.['A140'] >= 50) {
            scene.text('When you sit on the floor next to Lizaveta, she smiles at you and the two of you are soon talking about a variety of subjects. However, she can\'t help herself and soon starts asking you all sorts of questions about your fellow nerds.');
            scene.text('You can barely even get a word in edge wise as she pumps you for gossip. You can\'t help yourself and start letting some stuff slip as the two of you talk.');
            scene.actions([
              { label: 'Latest gossip', goto: ['gschool_coolkid_chats', 'lizaveta_latest_gossip'] },
            ]);
          } else {
            if (((s as any).npc_rel ?? 0)?.['A140'] <= 20) {
              scene.text('When you sit on the floor next to Lizaveta, she looks at you in shock and surprise. "Why are you sitting next to me, loser? Get away from me!"');
              scene.text('Her outburst attracts the attention of the other cool kids and jocks around and now everyone is staring at you, making you feel very unwelcome. She continues to stare at you until you get up and leave.');
            } else {
              scene.text('When you sit on the floor next to Lizaveta, she starts asking you all sorts of questions about your fellow nerds.');
              scene.text('You can barely get a word in edge wise as she pumps you for gossip. You just can\'t help yourself and start letting some stuff slip as the two of you talk.');
            }
          }
        } else {
          if (((s as any).grupTipe ?? 0) === 4) {
            // TODO-QSP: $func('npc_reactions', 'general', 'A140')
            if (((s as any).npc_rel ?? 0)?.['A140'] >= 50) {
              scene.text('When you sit on the floor next to Lizaveta, she smiles at you and the two of you are soon talking about a variety of subjects. However, she can\'t help herself and starts asking you all sorts of questions about your fellow gopniks.');
              scene.text('You can barely even get a word in edge wise as she pumps you for gossip. You can\'t help yourself and start letting some stuff slip as the two of you talk.');
              scene.actions([
                { label: 'Latest gossip', goto: ['gschool_coolkid_chats', 'lizaveta_latest_gossip'] },
              ]);
            } else {
              if (((s as any).npc_rel ?? 0)?.['A140'] <= 20) {
                scene.text('When you sit on the floor next to Lizaveta, she looks at you in shock and surprise before scooting away. "Why are you sitting next to me, freak? Get away from me!"');
                scene.text('Her outburst attracts the attention of the other cool kids and jocks around and now everyone is staring at you, making you feel very unwelcome. She continues to stare at you until you get up and leave.');
              } else {
                scene.text('When you sit on the floor next to Lizaveta, she starts asking you all sorts of questions about your fellow gopniks.');
                scene.text('You can barely get a word in edge wise as she pumps you for gossip. You can\'t help yourself and start letting some stuff slip as the two of you talk.');
              }
            }
          } else {
            qspCall(s, 'npc_relationship', 'modify', 'A140', 'dislike');
            if (((s as any).npc_rel ?? 0)?.['A140'] >= 50) {
              scene.text('When you sit on the floor next to Lizaveta, she looks at you in shock and surprise before scooting away. "What the fuck? Get away from me, loser!"');
              scene.text('Her outburst attracts the attention of the other cool kids and jocks around and now everyone is staring at you, making you feel very unwelcome. She continues to stare at you until you get up and leave.');
            } else {
              scene.text('When you sit on the floor next to Lizaveta, she looks at you in shock and surprise before scooting away. "What the fuck, loser? Who said you could leave your cave or wherever it is you hide with the other freaks?"');
              scene.text('Her outburst attracts the attention of the other cool kids and jocks around and many of them laugh at her comment. Everyone is staring at you and making you feel very unwelcome as she continues to stare at you until you get up and leave.');
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
    ((s as any).temp ?? {})['tampon_ask'] = '"Lizaveta," you whisper. "My period just started and I don\'t have a pad. Can I borrow one?"';
    qspCall(s, 'gschool_coolkid_chats', 'lizaveta_tampon');
  } },
      ]);
    }
    scene.actions([
      { label: 'Ask for a tampon', handler: (st: GameState) => {
    ((s as any).temp ?? {})['tampon_ask'] = '"Lizaveta," you whisper. "My period just started and I don\'t have a tampon. Can I borrow one?"';
    qspCall(s, 'gschool_coolkid_chats', 'lizaveta_tampon');
  } },
    ]);
  } else {
    if (((s as any).placebopart ?? 0) > 0  &&  ((s as any).lutH ?? 0) > 0  &&  ((s as any).knowpreg ?? 0) === 0  &&  ((s as any).isprok ?? 0) === 0  &&  (!((s as any).isprokp ?? 0))) {
      if (((s as any).pantyworntype ?? 0) !== 'none') {
        scene.actions([
          { label: 'Ask for a pad', handler: (st: GameState) => {
    ((s as any).temp ?? {})['tampon_ask'] = '"Lizaveta," you whisper. "My period is starting soon and I don\'t have a pad. Can I borrow one?"';
    qspCall(s, 'gschool_coolkid_chats', 'lizaveta_tampon');
  } },
        ]);
      }
      scene.actions([
        { label: 'Ask for a tampon', handler: (st: GameState) => {
    ((s as any).temp ?? {})['tampon_ask'] = '"Lizaveta," you whisper. "My period is starting soon and I don\'t have a tampon. Can I borrow one?"';
    qspCall(s, 'gschool_coolkid_chats', 'lizaveta_tampon');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterLizavetaTampon(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big140.jpg');
  // TODO-QSP: dynamic text: <<$temp['tampon_ask']>>
  scene.text(`${((s as any).temp ?? 0)?.['tampon_ask']}`);
  if (((s as any).temp ?? 0)?.['tampon_ask'] === '"Lizaveta," you whisper. "My period just started  &&  I don\'t have a tampon. Can I borrow one?"'  ||  ((s as any).temp ?? 0)?.['tampon_ask'] === '"Lizaveta," you whisper. "My period is starting soon  &&  I don\'t have a tampon. Can I borrow one?"') {
    if (((s as any).npc_rel ?? 0)?.['A140'] >= 60) {
      scene.text('"Sure, sure," Lizaveta says, eyes sparkling as she starts going through her purse and pulls one out. "Here you go!"');
      scene.text('"Thanks Lizaveta."');
      scene.text('"Noooo problem!" she replies a little too cheerfully. You as you walk away to put the tampon in, you suspect she\'s already telling people that you\'re PMSing.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A140'] > 20) {
        scene.text('She looks at you for a moment before her face lights up and she starts going through her purse.');
        scene.text('"Of course you can borrow a tampon!" she says. "Here you go!"');
        scene.text('"Thanks Lizaveta."');
        scene.text('"Noooo problem!" she replies a little too cheerfully. You as you walk away to put the tampon in, you suspect she\'s already telling people that you\'re PMSing.');
      } else {
        scene.text('She looks at you for a moment before her face lights up with a predatory grin and she starts going through her purse.');
        scene.text('"Of course you can borrow a tampon!" she says. "Here you go!"');
        scene.text('"Thanks Lizaveta."');
        scene.text('"Noooo problem!" she replies a little too cheerfully. You as you walk away to put the tampon in, you suspect she\'s already telling people that you forgot a tampon today.');
      }
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A140'] >= 60) {
      scene.text('"Sure, sure," Lizaveta says, eyes sparkling as she starts going through her purse. "Don\'t have any pads, but here\'s a tampon!"');
      scene.text('"Thanks Lizaveta."');
      scene.text('"Noooo problem!" she replies a little too cheerfully. You as you walk away to put the tampon in, you suspect she\'s already spreading the word that you use still use pads.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A140'] > 20) {
        scene.text('She looks at you for a moment before her face lights up and she starts going through her purse.');
        scene.text('"Don\'t have any pads, but here\'s a tampon!" she says holding it out.');
        scene.text('"Thanks Lizaveta."');
        scene.text('"Noooo problem!" she replies a little too cheerfully. You as you walk away to put the tampon in, you suspect she\'s already spreading the word that you use still use pads.');
      } else {
        scene.text('She looks at you for a moment before her face lights up with a predatory grin and she starts going through her purse.');
        scene.text('"Of course you can borrow a tampon!" she says. "Here you go!"');
        scene.text('"Thanks Lizaveta."');
        scene.text('"Noooo problem!" she replies a little too cheerfully. You as you walk away to put the tampon in, you suspect she\'s already spreading the word that you use still use pads and forgot to wear one today.');
      }
    }
  }
  (s as any).isprok = 1;
  // TODO-QSP: end
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterLizavetaLatestGossip(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big140.jpg');
  qspCall(s, 'gschool_gossip', 'Lizaveta');
  // TODO-QSP: end
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterMarcus(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A146', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big146.jpg');
  if (((((s as any).katjaQW ?? 0)?.['QWstage'] === 5  &&  ((s as any).katjaQW ?? 0)?.['marcus_asked'] === 0)  ||  ((s as any).katjaQW ?? 0)?.['marcus_asked'] === -1)  &&  ((s as any).Marcus_sextype ?? 0) > 0  &&  ((s as any).katjaQW ?? 0)?.['boy_block'] === 0) {
    scene.actions([
      { label: 'Ask Marcus about [+iif(katjaQW[\'QWstage\'] > 5, \'a threesome...]', goto: ['gschool_coolkid_chats', 'Marcus_Katja_talk'] },
    ]);
  }
  if (((s as any).fame ?? 0)?.['pav_slut'] > 200) {
    if (((s as any).npc_rel ?? 0)?.['A146'] >= 50) {
      scene.text('You walk up to Marcus and he gives you a small smile as you try to talk to him. He mostly gives you one word answers as you notice him glancing at the others and you notice several of the other cool kids and jocks giving you disgusted looks.');
      scene.text('You can tell he\'s trying to be nice, but he obviously doesn\'t want to talk to you, at least not in public.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A146'] <= 20) {
        scene.text('"Hmm… I should have known," he says when he sees you.');
        scene.text('"Known what?" you reply.');
        // TODO-QSP: dynamic text: He smirks and steps closer to you, cornering you between himself and a locker. "...
        scene.text(`He smirks and steps closer to you, cornering you between himself and a locker. "I thought Russian girls were different, but I guess a slut is a slut no matter where you are. Ain't that right, ${((s as any).pcs_nickname ?? 0)}?"`);
        scene.text('You expect him to grab at you, but he just shakes his head and walks away.');
      } else {
        scene.text('You walk up to Marcus and try to talk to him, but he mostly ignores you, with only the occasional "uh-huh" for an answer.');
        scene.text('You notice the others giving you disgusted looks and he finally speaks up. "Look, I don\'t mean to be rude, but we\'re not friends and I don\'t want to talk to you."');
        scene.text('You sigh and nod before walking away.');
      }
    }
  } else {
    if (((s as any).grupTipe ?? 0) === 1) {
      // TODO-QSP: $func('npc_reactions', 'general', 'A146')
      if (((s as any).npc_rel ?? 0)?.['A146'] >= 50) {
        scene.text('Talking with Marcus is always fun. He always knows how to make you laugh with the stories he tells.');
        scene.text('"You should have seen his face!" He lets out a deep laugh. "We walk by the bathroom on the way to his room and BAM! There\'s his mom, butt naked, and we see it all! You ever seen someone change colors? Poor guy was as pink as… as his mom\'s nipples now that I think about it!"');
        scene.text('You spend the rest of break laughing along with him as he tells you some more stories.');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A146'] <= 20) {
          scene.text('You try to strike up a conversation with Marcus, but he just ignores you as he continues talking to Andrey and Dimka.');
        } else {
          scene.text('You walk up to Marcus and he gives you a small smile as you start talking to him.');
          scene.text('He responds and talks back, sharing a few stories of his time in America or when he first arrived here in Russia, but he spends just as much time talking to Andrey as he does you.');
        }
      }
    } else {
      if (((s as any).grupTipe ?? 0) === 2) {
        if (((s as any).npc_rel ?? 0)?.['A146'] >= 50) {
          scene.text('You walk up to Marcus and he gives you a big smile as you start talking to him. The conversation quickly turns to sports, mostly sports in America.');
          scene.text('It seems he was a jock back home and loves watching and playing sports. He seems to really miss American football, his favorite sport, but is happy there is basketball, his second favorite sport, here.');
          scene.text('He talks about his games back home, but also asks about how you\'re doing in sports yourself.');
        } else {
          if (((s as any).npc_rel ?? 0)?.['A146'] <= 20) {
            scene.text('You try to strike up a conversation with Marcus, but he mostly ignores you and continues talking to Andrey and Dimka.');
          } else {
            scene.text('You walk up to Marcus and he gives you a smile as you start talking to him. The conversation quickly turns to sports, mostly sports in America.');
            scene.text('It seems he was a jock back home and loves watching and playing sports. He seems to really miss American football, his favorite sport, but is happy there is basketball, his second favorite sport, here.');
            scene.text('He ends up talking a little about the games he played back home.');
          }
        }
        // TODO-QSP: $func('npc_reactions', 'general', 'A146')
      } else {
        if (((s as any).grupTipe ?? 0) === 3) {
          if (((s as any).npc_rel ?? 0)?.['A146'] >= 50) {
            scene.text('You walk up to Marcus and he gives you a smile as you start talking to him. You enjoy hearing the stories he tells about his life in America, and he starts talking about the differences between nerds here and there.');
            scene.text('He explains how nerds back home are less about grades and more about what school club you belonged to, and you spend the rest of break asking more questions about his home life.');
          } else {
            if (((s as any).npc_rel ?? 0)?.['A146'] <= 20) {
              scene.text('You try to strike up a conversation with Marcus, but he mostly ignores you and continues talking to Andrey and Dimka.');
            } else {
              scene.text('You walk up to Marcus and he gives you a smile as you start talking to him. You enjoy hearing the stories Marcus tells about his life in America.');
              scene.text('"It\'s kind of funny. I don\'t think I was nearly as popular as this back home. I\'m not complaining, though!"');
              scene.text('You spend the rest of break asking more questions about his home life and he\'s happy to tell you all about it.');
            }
          }
          // TODO-QSP: $func('npc_reactions', 'general', 'A146')
        } else {
          if (((s as any).grupTipe ?? 0) === 4) {
            if (((s as any).npc_rel ?? 0)?.['A146'] >= 50) {
              scene.text('You walk up to Marcus and he gives you a smile as you start talking to him. You enjoy hearing the stories Marcus tells about his life in America.');
              scene.text('"You guys seem a lot more fun than I expected. I\'m still trying to wrap my head around what a gopnik is. I know a lot of you are called that, but there are some big differences."');
              scene.text('You explain some of the differences between the collective term and what a real gopnik is, which just leads to him once again wondering why you all hang out together.');
            } else {
              if (((s as any).npc_rel ?? 0)?.['A146'] <= 20) {
                scene.text('You try to strike up a conversation with Marcus, but he mostly ignores you and continues talking to Andrey and Dimka.');
              } else {
                scene.text('You walk up to Marcus and he gives you a smile as you start talking to him. You enjoy hearing the stories Marcus tells about his life in America.');
                scene.text('"You guys aren\'t nearly as bad as the bangers back home. I\'ve never seen any of you carrying guns."');
                scene.text('He goes on to tell you about some of his encounters with gangbangers back home. It sounds like they\'re a lot more dangerous than gopniks.');
              }
            }
            // TODO-QSP: $func('npc_reactions', 'general', 'A146')
          } else {
            if (((s as any).npc_rel ?? 0)?.['A146'] >= 50) {
              scene.text('You walk up to Marcus and try talking to him, but he mostly ignores you with only the occasional "uh-huh" for an answer.');
              scene.text('You notice the others giving you disgusted looks before he gets up, gives you a very slight nod and walks away with Andrey.');
            } else {
              if (((s as any).npc_rel ?? 0)?.['A146'] <= 20) {
                scene.text('You try to strike up a conversation with Marcus, but he mostly ignores you and continues talking to Andrey and Dimka.');
              } else {
                scene.text('You walk up to Marcus and try to talk to him, but he mostly ignores you, with only the occasional "uh-huh" for an answer.');
                scene.text('You notice the others giving you disgusted looks and he finally speaks up. "Look, I don\'t mean to be rude, but we\'re not friends and I don\'t want to talk to you."');
                scene.text('You sigh and nod before walking away.');
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterMarcus_KatjaTalk(s: GameState, scene: SceneBuilder): void {
  ((s as any).katjaQW ?? {})['marcus_asked'] = 1;
  scene.img('images/characters/shared/headshots_main/big146.jpg');
  scene.text('"So you know how we sometimes have fun together?" you ask.');
  // TODO-QSP: dynamic text: "Yeah?" he answers and you smile. "Well, I have this friend who's ' + iif(katjaQ...
  scene.text('"Yeah?" he answers and you smile. "Well, I have this friend who\'s \' + iif(katjaQW[\'QWstage\'] > 5, \'a little shy and doesn\'t have a boyfriend, so I was wondering if you were up for a threesome?\', \'never been with a boy before, but would like to try it. I was wondering if you were up for helping me give her an amazing first time?\') + \' She\'s \' + iif(pcs_hotcat < npc_hotcat[\'A14\'], \'even hotter than I am,\', \'totally hot,\') + \' so you won\'t regret it."');
  // TODO-QSP: dynamic text: "Are you asking me if I want to have a threesome with two beautiful girls' + iif...
  scene.text('"Are you asking me if I want to have a threesome with two beautiful girls\' + iif(katjaQW[\'QWstage\'] > 5, \'?\', \', with one of them even being a virgin?\') + \'" he asks with a surprised look on his face. "Of course I\'m up for this!" he exclaims as his face turns into a huge grin.');
  scene.text('"Great," you answer. "I\'ll call you with her address when we are ready. But you have to be discreet, we don\'t want any rumors spread around!" you tell him and he smiles. "Of course, I\'m a gentleman and gentlemen never kiss and tell. I look forward to your call."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterAndrey(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A147', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big147.jpg');
  if (((s as any).fame ?? 0)?.['pav_slut'] > 200) {
    qspCall(s, 'npc_relationship', 'modify', 'A147', 'dislike');
    if (((s as any).npc_rel ?? 0)?.['A147'] >= 50) {
      scene.text('Andrey glances your way for a second before smirking. "Looking for a cock to suck? I might be able to help you with that."');
      scene.text('His smirk suddenly disappears as he looks past you. You turn and see Stasya. If looks could kill, you would be dead right now.');
      scene.text('Andrey brushes past you as he walks over to her with a big smile. "How\'s the hottest girl in school doing?" She looks at him and walks away as he follows her. "Come on, don\'t be like that! The slut came up to me!"');
      scene.text('You don\'t hear the rest as they move away from you.');
    } else {
      scene.text('Andrey glances your way for a second before focusing back on looking through his locker, completely uninterested in you.');
      scene.text('"Shouldn\'t you be in the bathroom with the gopniks sucking them all off?" he remarks before turning away and ignoring you until you leave.');
    }
  } else {
    if (((s as any).grupTipe ?? 0) === 1) {
      // TODO-QSP: $func('npc_reactions', 'general', 'A147')
      if (((s as any).npc_rel ?? 0)?.['A147'] >= 50) {
        scene.text('"Do you think Stasya will ever get over this whole… jealousy thing she has for Marcus?" Andrey confides in you with a look of exhaustion.');
        scene.text('Stasya must really be putting him through it lately. "She\'ll get over herself. Just be glad you\'re not one of the nerds," you tease.');
        scene.text('That seems to brighten his mood a bit as the conversation continues in a lighter tone.');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A147'] <= 20) {
          scene.text('You spend a few minutes talking with Andrey until he makes up an excuse to leave.');
          scene.text('"I gotta go meet up with Marcus. Uh, maybe we\'ll talk some other time?"');
        } else {
          scene.text('"Hanging out with Marcus has been great for me!" Andrey says with a grin.');
          scene.text('"Oh yeah?" You can\'t help but smile when you see the good mood he\'s in. "Did something happen recently?"');
          scene.text('"No, it\'s just that hanging around him has made me more popular than ever! I mean, I was already pretty popular, but this… Being his friend sure has its perks!"');
        }
      }
    } else {
      if (((s as any).grupTipe ?? 0) === 2) {
        if (((s as any).npc_rel ?? 0)?.['A147'] >= 50) {
          scene.text('"Hey, Andrey! How\'s it been?" you ask with a small smile.');
          scene.text('Andrey just shrugs. "Oh you know, Stasya and my parents still complain about Marcus, so the usual," he teases halfheartedly.');
          scene.text('You spend some time chatting with him, which seems to take his mind off things for a bit.');
        } else {
          if (((s as any).npc_rel ?? 0)?.['A147'] <= 20) {
            scene.text('You spend a few minutes talking with Andrey until he makes up an excuse to leave.');
            scene.text('"I gotta go meet up with Marcus. Uh, maybe we\'ll talk some other time?"');
          } else {
            scene.text('"Hanging out with Marcus has been great for me!" Andrey says with a grin.');
            scene.text('"Oh yeah?" You can\'t help but smile when you see the good mood he\'s in. "Did something happen recently?"');
            scene.text('"No, it\'s just that hanging around him… He\'s way more into sports than I am, but he got me into working out and jogging and you know what? I feel great!"');
            scene.text('He goes on talking about the positive changes in his life since Marcus moved in.');
          }
        }
        // TODO-QSP: $func('npc_reactions', 'general', 'A147')
      } else {
        if (((s as any).grupTipe ?? 0) === 3) {
          if (((s as any).npc_rel ?? 0)?.['A147'] >= 50) {
            scene.text('"Hey, Andrey! How\'s it been?" you ask with a small smile.');
            scene.text('He gives you a slightly confused stare as to why you\'re talking to him. "Are you lost or something, nerd?"');
            scene.text('You shake your head. "No, I just wanted to see how things were with you is all."');
            scene.text('Andrey just sighs. "Oh you know, Stasya and my parents still complain about Marcus, so the usual," he teases halfheartedly.');
            scene.text('You spend some time chatting with him. He is a bit reluctant at first, but he eventually welcomes the distraction.');
          } else {
            if (((s as any).npc_rel ?? 0)?.['A147'] <= 20) {
              scene.text('"Hey, Andrey! How\'s it been?" you ask with a small smile.');
              scene.text('He gives you a slightly confused look as to why you\'re talking to him. "Go hang out with your own kind. No one here wants anything to do with you."');
              scene.text('He proceeds to ignore you and you feel everyone else staring at you. Afraid someone might start picking on you, you quickly leave.');
            } else {
              scene.text('"Hey, Andrey! How\'s it been?" you ask with a small smile.');
              scene.text('He gives you a slightly confused look as to why you\'re talking to him. "If I wanted to talk to you, I would come find you. Go away."');
              scene.text('He proceeds to ignore you and you feel everyone else staring at you. Afraid someone might start picking on you, you quickly leave.');
            }
          }
          // TODO-QSP: $func('npc_reactions', 'general', 'A147')
        } else {
          if (((s as any).grupTipe ?? 0) === 4) {
            if (((s as any).npc_rel ?? 0)?.['A147'] >= 50) {
              scene.text('"Hey Andrey! How\'s it been?" you ask with a small smile.');
              scene.text('He gives you a smirk. "Come to see what it\'s like to be, well… liked? Or did you just get too drunk and get lost?"');
              scene.text('You shake your head. "No, I just wanted to see how things were with you is all."');
              scene.text('Andrey just sighs. "Oh you know, Stasya and my parents still complain about Marcus, so the usual," he teases halfheartedly.');
              scene.text('You spend some time chatting with him. He\'s a little reluctant at first, but he eventually welcomes the distraction.');
            } else {
              if (((s as any).npc_rel ?? 0)?.['A147'] <= 20) {
                scene.text('"Hey, Andrey! How\'s it been?" you ask with a small smile.');
                scene.text('He gives you a slightly confused look as to why you\'re talking to him. "Don\'t you have some street to hang out on trying to look tough or something? No one wants you around, so get lost!"');
                scene.text('He proceeds to ignore you and you feel everyone else staring at you.');
              } else {
                scene.text('"Hey Andrey! How\'s it been?" you ask with a small smile.');
                scene.text('He gives you a slightly confused look as to why you\'re talking to him. "Why are you talking to me? We\'re not friends, so go bother someone else."');
                scene.text('He proceeds to ignore you and you feel everyone else staring at you.');
              }
            }
            // TODO-QSP: $func('npc_reactions', 'general', 'A147')
          } else {
            qspCall(s, 'npc_relationship', 'modify', 'A147', 'dislike');
            scene.text('"Hey Andrey! How\'s it been?" you ask with a small smile.');
            scene.text('He gives you a slightly confused look as to why you\'re talking to him. "Get lost, loser! No one wants to talk to you."');
            scene.text('He proceeds to ignore you and you feel everyone else staring at you. Afraid someone might start picking on you, you quickly leave.');
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterMefodiy(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A148', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big148.jpg');
  if (((s as any).fame ?? 0)?.['pav_slut'] > 250) {
    if (((s as any).npc_rel ?? 0)?.['A148'] >= 50) {
      scene.text('"I hear you\'ve been a naughty girl, slutting it up. Someone should give you a spanking, but you\'d probably like it. Maybe I could help you there, if we stick to the spanking."');
      scene.text('"Sure you don\'t want more?" you tease.');
      scene.text('"I\'m sure there\'s a lot of guys that\'ll take you up on that offer, but it\'s not my bag."');
      scene.text('You wrap an arm around him and stroke his chest. "Aww, you don\'t know what you\'re missing!"');
      scene.text('"Oh I do, but if by some bizarre act of God I change my preferences, you\'ll be the first one I call.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A148'] <= 20) {
        // TODO-QSP: dynamic text: "Oh, it's <<$pcs_nickname>> the school bike. Hope you're not here for my cock as...
        scene.text(`"Oh, it's ${((s as any).pcs_nickname ?? 0)} the school bike. Hope you're not here for my cock as that ain't gonna happen."`);
        scene.text('"Please, I\'ve heard the rumors and know where that thing\'s been!" you retort.');
        scene.text('"Yet I still have my reputation and you don\'t, so maybe we\'re the same except I\'m not a fucking idiot about it?"');
      } else {
        // TODO-QSP: dynamic text: "Shit <<$pcs_nickname>>, what happened to you? You should be more discreet! The ...
        scene.text(`"Shit ${((s as any).pcs_nickname ?? 0)}, what happened to you? You should be more discreet! The kids in this school are fucking cruel to anyone they think is a slut."`);
        scene.text('"It\'s not like I ran an article in the school newspaper! Some guys just don\'t know when to keep quiet."');
        scene.text('"Some? More like all of them!"');
        scene.text('You both laugh as he gives you a big and over dramatic hug.');
      }
    }
    // TODO-QSP: $func('npc_reactions', 'general', 'A148')
  } else {
    if (((s as any).grupTipe ?? 0) === 1) {
      if (((s as any).npc_rel ?? 0)?.['A148'] >= 50) {
        // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, how's it going?"
        scene.text(`"Hey ${((s as any).pcs_nickname ?? 0)}, how's it going?"`);
        scene.text('You know there\'s a hug coming regardless, so you make the first move and snuggle up to him.');
        scene.text('"Come on, you\'ll make all the boys jealous!"');
        scene.text('You smile up at him and whisper. "I thought that was your job?"');
        scene.text('He laughs and pouts. "Well sure, that\'s what I meant."');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A148'] <= 20) {
          scene.text('"I still don\'t know how you got into our little group. You\'re dragging all our reputations down!"');
          scene.text('You pout. "I\'m not sure how I could drag <i>your</i> reputation any lower."');
          scene.text('"We could have sex," he replies and starts to giggle. "Sorry, that\'s not fair."');
          scene.text('You feign shock and mouth the words "You bitch" at him.');
          scene.text('He feigns shock back at you.');
        } else {
          // TODO-QSP: dynamic text: "Hiya <<$pcs_nickname>>, what's on your mind?"
          scene.text(`"Hiya ${((s as any).pcs_nickname ?? 0)}, what's on your mind?"`);
          scene.text('"You know, the usual shit," you reply.');
          scene.text('"Same here." He puts an arm around you. "A hug\'ll make it all better, though."');
          scene.text('You don\'t have much choice but to hug this soppy guy, but it does raise your mood.');
        }
      }
      // TODO-QSP: $func('npc_reactions', 'general', 'A148')
    } else {
      if (((s as any).grupTipe ?? 0) === 2) {
        if (((s as any).npc_rel ?? 0)?.['A148'] >= 50) {
          scene.text('"If it isn\'t my favourite jock! What\'s up?"');
          scene.text('"I\'m good, plenty of training to be done. Got to keep up with the opposition."');
          scene.text('He starts feeling your biceps and waist as if measuring you. "You\'re in good shape, maybe a little tense."');
          scene.text('"You think so?"');
          scene.text('"Don\'t worry, I know just the thing!" he says before he suddenly grabs you in a tight hug.');
          scene.text('You laugh. "If you wanted a hug you could have just asked, you big softy!"');
        } else {
          if (((s as any).npc_rel ?? 0)?.['A148'] <= 20) {
            scene.text('"What do you want, sporty?" he asks.');
            scene.text('"Just to chat," you reply.');
            scene.text('"Okay, but keep it quick. I\'ve got things to do."');
          } else {
            // TODO-QSP: dynamic text: "Hey there, <<$pcs_nickname>>. Win any medals today?"
            scene.text(`"Hey there, ${((s as any).pcs_nickname ?? 0)}. Win any medals today?"`);
            scene.text('"Yeah, loads. I\'m gonna have to build an extension just to house them all!"');
            scene.text('He grabs you in a big hug. "Well done, champ!"');
            scene.text('You push him off. "Yeah yeah, very funny."');
          }
        }
        // TODO-QSP: $func('npc_reactions', 'general', 'A148')
      } else {
        if (((s as any).grupTipe ?? 0) === 3) {
          if (((s as any).npc_rel ?? 0)?.['A148'] >= 50) {
            scene.text('"Hi there, brainiac! How\'s it going?"');
            scene.text('"Work to do and grades to get, something you should be doing!" you say while poking him in the chest.');
            scene.text('"Yeah, I know I should work a bit harder, but you should take time to chill a bit more. Neither of us are perfect," he replies and gently pokes you back.');
          } else {
            if (((s as any).npc_rel ?? 0)?.['A148'] <= 20) {
              scene.text('"What do you want, nerd?" he asks while looking down on you both physically and figuratively.');
              scene.text('"I erm… Err… Just wanted to talk to you…"');
              scene.text('He rolls his eyes. "Fine."');
            } else {
              // TODO-QSP: dynamic text: "Hi <<$pcs_nickname>>, taking a break from your studies?" he asks with a hint of...
              scene.text(`"Hi ${((s as any).pcs_nickname ?? 0)}, taking a break from your studies?" he asks with a hint of a smile.`);
              scene.text('"Yeah, got to work hard, get a good job and all that."');
              scene.text('"That\'s a good plan, just don\'t over do it."');
            }
          }
          // TODO-QSP: $func('npc_reactions', 'general', 'A148')
        } else {
          if (((s as any).grupTipe ?? 0) === 4) {
            if (((s as any).npc_rel ?? 0)?.['A148'] >= 50) {
              // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, still hanging around with those a-holes? You can do bett...
              scene.text(`"Hey ${((s as any).pcs_nickname ?? 0)}, still hanging around with those a-holes? You can do better than them."`);
              scene.text('You flip him the bird and he laughs and gives you a hug.');
              scene.text('"Shit man, respect my personal space!" you say while pushing him back.');
            } else {
              if (((s as any).npc_rel ?? 0)?.['A148'] <= 20) {
                scene.text('"The fuck you want?" Mefodiy scorns.');
                scene.text('"I wanted to know if the rumors are true. I hear you\'d rather have cock than these puppies," you say while cupping your breasts.');
                scene.text('"Those probably smell more of cock than any cock I\'ve ever seen!"');
              } else {
                scene.text('"I don\'t want any trouble, so just spit it out," Mefodiy says.');
                scene.text('"I just want to chat, I\'m not here to cause trouble," you reply while holding your hands up.');
              }
            }
            // TODO-QSP: $func('npc_reactions', 'general', 'A148')
          } else {
            if (((s as any).npc_rel ?? 0)?.['A148'] >= 50) {
              scene.text('"Hey sweetie, you know I can help you get into a decent social group? You just gotta put a bit of work into it."');
              scene.text('Mefodiy is about the only guy who doesn\'t treat you like an outcast. He\'d make a great boyfriend if you knew he was into that kind of thing.');
            } else {
              if (((s as any).npc_rel ?? 0)?.['A148'] <= 20) {
                scene.text('"Don\'t worry, I\'m not gonna give you the usual crap," Mefodiy says with a smile. I\'m sure you get plenty of that from the others."');
                scene.text('You don\'t expect a cool kid to be nice, but don\'t know if it\'s genuine or some trick. You play it safe and just say "Thanks."');
              } else {
                // TODO-QSP: dynamic text: "Hey there <<$pcs_nickname>>, we gotta get you into a social group. It'll make e...
                scene.text(`"Hey there ${((s as any).pcs_nickname ?? 0)}, we gotta get you into a social group. It'll make everything that bit easier for you."`);
                scene.text('"I\'m working on it!" you reply, but he has a point. Life can be tough as an outcast.');
              }
            }
            // TODO-QSP: $func('npc_reactions', 'general', 'A148')
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterVicky(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A15', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big15.jpg');
  if (((s as any).fame ?? 0)?.['pav_slut'] > 200) {
    if (((s as any).npc_rel ?? 0)?.['A15'] >= 70) {
      scene.text('"Well, well, well, look who\'s taking a break from sucking cocks!" Vicky jokingly announces with a grin. She gives your ass a playful slap and you let out a mock squeak.');
      scene.text('"Oh, don\'t act so innocent! We all know you\'ve had that ass broken in plenty of times. Have you thought about being a tad more discreet, though?"');
      scene.text('You and Vicky spend some time talking before class. Despite some people whispering among themselves and a few catcalls, Vicky just ignores them.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A15'] <= 20) {
        // TODO-QSP: dynamic text: Vicky interrupts you mid-sentence. "Do you hear that, <<$pcs_nickname>>?"
        scene.text(`Vicky interrupts you mid-sentence. "Do you hear that, ${((s as any).pcs_nickname ?? 0)}?"`);
        scene.text('You go quiet and listen carefully, but don\'t hear anything unusual.');
        scene.text('"Listen carefully… That\'s the sound of me running away from this conversation! See ya, slut!"');
        scene.text('Before you can respond, she takes off down the hallway at a brisk pace.');
      } else {
        scene.text('"Well, well, well, look who\'s taking a break from sucking cocks!" Vicky announces with a grin. She gives your ass a quick slap and you let out a surprised squeak.');
        scene.text('"Oh don\'t act so innocent! We all know you\'ve had that ass broken in plenty of times. Or maybe you\'re just sore from your last go?"');
      }
    }
  } else {
    if (((s as any).grupTipe ?? 0) === 1) {
      if (((s as any).npc_rel ?? 0)?.['A15'] >= 50) {
        // TODO-QSP: dynamic text: As soon as Vicky sees you, she pulls you into a tight hug. "<<$pcs_nickname>>, m...
        scene.text(`As soon as Vicky sees you, she pulls you into a tight hug. "${((s as any).pcs_nickname ?? 0)}, my third favorite person!"`);
        scene.text('"Wait, third?! I get Katja being second, but who\'s first?" You pretend to be outraged and she plays along.');
        scene.text('"Oh honey. You… You didn\'t know? I don\'t know how to tell you this, but Vanya is my number one!"');
        scene.text('You pout and cross your arms. "That\'s not fair! I can\'t fuck my way to the number one spot like he can!"');
        scene.text('The two of you burst into laughter before spending the rest of break chatting back and forth.');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A15'] <= 20) {
          scene.text('Vicky throws her hands up. "I know we\'re both \'popular\', which means we should be friends, but I would honestly rather have people think I let Lera\'s creepy brother finger me than spend another minute talking to you!"');
        } else {
          scene.text('"I\'ve been thinking of going all in and dying my hair to match the color of the outfits I wear. What do you think?" Vicky asks as she runs her fingers through her red hair.');
          scene.text('You can\'t help but laugh at her odd question. "Umm, you wear a different color every day. Do you know what that will do to your hair after a week?"');
          scene.text('She\'s silent for a while before shrugging. "No?"');
          scene.text('"Bald. You\'ll definitely be bald after a week of constantly dying your hair!"');
          scene.text('She thinks it over before the two of you spend the rest of break joking back and forth about the subject.');
        }
      }
      // TODO-QSP: $func('npc_reactions', 'general', 'A15')
    } else {
      if (((s as any).grupTipe ?? 0) === 2) {
        if (((s as any).npc_rel ?? 0)?.['A15'] >= 50) {
          // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, I'm working on a new flip for cheerleading and I could u...
          scene.text(`"Hey ${((s as any).pcs_nickname ?? 0)}, I'm working on a new flip for cheerleading and I could use a spotter."`);
          scene.text('She finds an open space and you keep your hands under her back as she casually does a slow backwards cartwheel.');
          scene.text('She repeats it a few times and gains the attention of most of the boys and even some of the girls in the hallway, who all shout out encouragements, with some pulling out their phones to take pictures.');
          scene.text('She thanks you for the help and spends a few minutes just chatting until the end of the break.');
        } else {
          if (((s as any).npc_rel ?? 0)?.['A15'] <= 20) {
            scene.text('Vicky throws her hands up. "Look, just because I like some of the jocks doesn\'t mean that I have to like you as well. I would honestly rather have people think I let Lera\'s creepy brother finger me than spend another minute talking to you!"');
          } else {
            // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, I see you're making a name for yourself. Keep up the goo...
            scene.text(`"Hey ${((s as any).pcs_nickname ?? 0)}, I see you're making a name for yourself. Keep up the good work!" she says as she gives you a high five. "Just remember what a famous person once said, 'Strong women don’t have 'attitudes', we have standards.'"`);
            scene.text('She then spends some time talking to you until the end of the break.');
          }
        }
        // TODO-QSP: $func('npc_reactions', 'general', 'A15')
      } else {
        if (((s as any).grupTipe ?? 0) === 3) {
          if (((s as any).npc_rel ?? 0)?.['A15'] >= 60) {
            // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, can you help me with this Math assignment? It really has...
            scene.text(`"Hey ${((s as any).pcs_nickname ?? 0)}, can you help me with this Math assignment? It really has me stumped," she says, showing you a page of her homework.`);
            scene.text('You glace over it and point out a few simple mistakes she had made that were messing up her equations.');
            scene.text('She thanks you for the help and then spends the rest of the time during break talking to you about other things.');
          } else {
            if (((s as any).npc_rel ?? 0)?.['A15'] <= 20) {
              // TODO-QSP: dynamic text: Vicky interrupts you mid-sentence. "Do you hear that, <<$pcs_nickname>>?"
              scene.text(`Vicky interrupts you mid-sentence. "Do you hear that, ${((s as any).pcs_nickname ?? 0)}?"`);
              scene.text('You listen carefully, but don\'t hear anything unusual.');
              scene.text('"Listen carefully… That\'s the sound of me running away from this conversation! See ya!"');
              scene.text('Before you can respond, she takes off down the hallway at a brisk pace.');
            } else {
              scene.text('It can be hard to follow Vicky as she keeps up a lively conversation, jumping from one topic to another, but you don\'t really mind and find her upbeat attitude intoxicating.');
            }
          }
          // TODO-QSP: $func('npc_reactions', 'general', 'A15')
        } else {
          if (((s as any).grupTipe ?? 0) === 4) {
            if (((s as any).npc_rel ?? 0)?.['A15'] >= 60) {
              // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, can I ask you a favor? Could you keep an eye on my siste...
              scene.text(`"Hey ${((s as any).pcs_nickname ?? 0)}, can I ask you a favor? Could you keep an eye on my sister for me? I heard some guys are taking their interest in her too far. I'd like her to open up a bit, but not in the way they have in mind, if you know what I mean."`);
              scene.text('She tells you a bit more about she\'s seen, then spends the rest of the break talking to you about random interests.');
            } else {
              if (((s as any).npc_rel ?? 0)?.['A15'] <= 20) {
                scene.text('She rolls her eyes at you as you walk up. "Look, I would honestly rather have people think I let Lera\'s creepy brother finger me than spend another minute talking to you!"');
                scene.text('She shrugs, then proceeds to ignore you.');
              } else {
                scene.text('It can be hard to follow Vicky as she keeps up a lively conversation, jumping from one topic to another, but you don\'t really mind and find her upbeat attitude intoxicating.');
              }
            }
            // TODO-QSP: $func('npc_reactions', 'general', 'A15')
          } else {
            if (((s as any).npc_rel ?? 0)?.['A15'] >= 70) {
              scene.text('"I\'ve been thinking of going all in and dying my hair to match the color of the outfits I wear. What do you think?" Vicky asks as she runs her fingers through her red hair.');
              scene.text('You can\'t help but laugh at her odd question. "Umm, you wear a different color every day. Do you know what that will do to your hair after a week?"');
              scene.text('She\'s silent for a while before shrugging. "No?"');
              scene.text('"Bald. You\'ll definitely be bald after a week of constantly dying your hair!"');
              scene.text('She thinks it over before the two of you spend the rest of break joking back and forth about the subject.');
            } else {
              if (((s as any).npc_rel ?? 0)?.['A15'] <= 20) {
                scene.text('She rolls her eyes at you as you walk up. "Look, I would honestly rather have people think I let Lera\'s creepy brother finger me than spend another minute talking to you!"');
                scene.text('She shrugs, then proceeds to ignore you.');
              } else {
                scene.text('It can be hard to follow Vicky as she keeps up a lively conversation, jumping from one topic to another, but you don\'t really mind and find her upbeat attitude intoxicating.');
              }
            }
            // TODO-QSP: $func('npc_reactions', 'general', 'A15')
          }
        }
      }
    }
  }
  if (((s as any).mesec ?? 0) > 0  &&  ((s as any).isprok ?? 0) === 0  &&  (!((s as any).isprokp ?? 0))) {
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.actions([
        { label: 'Ask for a pad', handler: (st: GameState) => {
    ((s as any).temp ?? {})['tampon_ask'] = '"Vicky," you whisper. "My period just started and I don\'t have a pad. Can I borrow one?"';
    qspCall(s, 'gschool_coolkid_chats', 'vicky_tampon');
  } },
      ]);
    }
    scene.actions([
      { label: 'Ask for a tampon', handler: (st: GameState) => {
    ((s as any).temp ?? {})['tampon_ask'] = '"Vicky," you whisper. "My period just started and I don\'t have a tampon. Can I borrow one?"';
    qspCall(s, 'gschool_coolkid_chats', 'vicky_tampon');
  } },
    ]);
  } else {
    if (((s as any).placebopart ?? 0) > 0  &&  ((s as any).lutH ?? 0) > 0  &&  ((s as any).knowpreg ?? 0) === 0  &&  ((s as any).isprok ?? 0) === 0  &&  (!((s as any).isprokp ?? 0))) {
      if (((s as any).pantyworntype ?? 0) !== 'none') {
        scene.actions([
          { label: 'Ask for a pad', handler: (st: GameState) => {
    ((s as any).temp ?? {})['tampon_ask'] = '"Vicky," you whisper. "My period is starting soon and I don\'t have a pad. Can I borrow one?"';
    qspCall(s, 'gschool_coolkid_chats', 'vicky_tampon');
  } },
        ]);
      }
      scene.actions([
        { label: 'Ask for a tampon', handler: (st: GameState) => {
    ((s as any).temp ?? {})['tampon_ask'] = '"Vicky," you whisper. "My period is starting soon and I don\'t have a tampon. Can I borrow one?"';
    qspCall(s, 'gschool_coolkid_chats', 'vicky_tampon');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterVickyTampon(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big15.jpg');
  // TODO-QSP: dynamic text: <<$temp['tampon_ask']>>
  scene.text(`${((s as any).temp ?? 0)?.['tampon_ask']}`);
  if (((s as any).temp ?? 0)?.['tampon_ask'] === '"Vicky," you whisper. "My period just started  &&  I don\'t have a tampon. Can I borrow one?"'  ||  ((s as any).temp ?? 0)?.['tampon_ask'] === '"Vicky," you whisper. "My period is starting soon  &&  I don\'t have a tampon. Can I borrow one?"') {
    if (((s as any).npc_rel ?? 0)?.['A15'] >= 70) {
      scene.text('"Of course you can," Vicky says without hesitation. It takes her barely any time at all to produce one from her purse. "Here you go!"');
      scene.text('"Thanks Vicky, you\'re a lifesaver."');
      scene.text('"What are friends for?" she smiles warmly.');
      scene.text('You run off to the bathroom to go put the tampon in before class starts.');
    } else {
      scene.text('"Of course you can," Vicky says without hesitation. It takes her barely any time at all to produce one from her purse. "Here."');
      scene.text('"Thanks Vicky, you\'re a lifesaver."');
      scene.text('"Just be sure to return the favor if I forget," she winks back.');
      scene.text('You run off to the bathroom to go put the tampon in before class starts.');
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A15'] >= 70) {
      scene.text('"You still use pads? You\'re just like my sister," Vicky giggles, taking barely any time at all to produce a tampon from her purse. "I don\'t have any pads, but here\'s a tampon."');
      scene.text('"Thanks Vicky, you\'re a lifesaver."');
      scene.text('"What are friends for?" she smiles warmly.');
      scene.text('You run off to the bathroom to go put the tampon in before class starts.');
    } else {
      scene.text('"You still use pads? You\'re just like my sister," Vicky giggles, taking barely any time at all to produce a tampon from her purse. "I don\'t have any pads, but here\'s a tampon."');
      scene.text('"Thanks Vicky, you\'re a lifesaver."');
      scene.text('"Pack an emergency tampon with my name on it in your purse and we\'ll call it even," she winks back.');
      scene.text('You run off to the bathroom to go put the tampon in before class starts.');
    }
  }
  (s as any).isprok = 1;
  // TODO-QSP: end
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterStasya(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A139', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big139.jpg');
  if (((s as any).fame ?? 0)?.['pav_slut'] > 200) {
    qspCall(s, 'npc_relationship', 'modify', 'A139', 'dislike');
    scene.text('Before you can even say a word, Stasya glares at you. "You better stay the fuck away from Andrey or you\'ll end up with some extra holes you can stuff with more cocks!"');
    scene.text('You\'re slammed into the lockers as she shoves past you.');
  } else {
    if (((s as any).grupTipe ?? 0) === 1) {
      if (((s as any).npc_rel ?? 0)?.['A139'] >= 50) {
        scene.text('When Stasya sees you, she pulls you into a quick hug. "Glad you showed up, I was starting to get bored… and desperate."');
        scene.text('"Desperate enough to hang out with Irina for the rest of the break?" you joke with a cheeky smile.');
        scene.text('"I\'ll never be that fucking desperate!" she blurts out before the two of you break out into laughter.');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A139'] <= 20) {
          scene.text('"Don\'t think that just because we\'re in the same clique, we\'re going to be best buddies," Stasya states firmly.');
          scene.text('Despite that, she doesn\'t run you off as you hang around to talk, though she pretty much ignores you while she talks to others.');
        } else {
          scene.text('You spend some time conversing with Stasya until she holds out her hand to stop you from talking. "I don\'t mean to cut you off, but I need to get see Andrey before break ends."');
          scene.text('She gives you a half-assed apologetic smile before walking off in search of her elusive boyfriend.');
        }
      }
      // TODO-QSP: $func('npc_reactions', 'general', 'A139')
    } else {
      if (((s as any).grupTipe ?? 0) === 2) {
        if (((s as any).npc_rel ?? 0)?.['A139'] >= 50) {
          scene.text('As you walk up, Stasya gives her reflection in the little mirror hanging inside her locker one last look and asks Bella what she thinks of her lipstick.');
          scene.text('Bella compliments her looks and tells her Andrey will lose it when he sees her, which seems to make Stasya very happy.');
          scene.text('She smiles smugly as she glances back in the mirror. "It\'s time Andrey paid attention to what really matters in life… and that\'s me."');
          scene.text('You join the two of them as they talk about makeup and fashion, but mostly about Andrey.');
        } else {
          if (((s as any).npc_rel ?? 0)?.['A139'] <= 20) {
            scene.text('"What do you want? Don\'t you have some balls to play with?" Stasya says with a smirk.');
            scene.text('Despite that, she doesn\'t run you off as you hang around to talk, though she pretty much ignores you while she talks to others.');
          } else {
            scene.text('You spend some time conversing with Stasya until she holds out her hand to stop you from talking. "I don\'t mean to cut you off, but I need to get see Andrey before break ends."');
            scene.text('She gives you a half-assed apologetic smile before walking off in search of her elusive boyfriend.');
          }
        }
      } else {
        if (((s as any).grupTipe ?? 0) === 3) {
          if (((s as any).npc_rel ?? 0)?.['A139'] >= 50) {
            scene.text('She stares at you approaching. "Are you lost or something?"');
            scene.text('Bella and Irina giggle at her remark and she turns and ignores you, talking with Bella and Irina instead, who also ignore you.');
            scene.text('They sometimes respond to your comments or questions, mostly acting like how adults act when small children try to take part in adult conversations.');
          } else {
            if (((s as any).npc_rel ?? 0)?.['A139'] <= 20) {
              scene.text('"Don\'t even fucking think about it!" Stasya warns when you try to approach.');
              scene.text('She stares you down until you finally back away.');
            } else {
              scene.text('She stares at you approaching. "What do you want? Never mind, I don\'t want to know."');
              scene.text('She turns and ignores you, talking with Bella and Irina instead, who also ignore you. At least they don\'t chase you off.');
            }
          }
          // TODO-QSP: $func('npc_reactions', 'general', 'A139')
        } else {
          if (((s as any).grupTipe ?? 0) === 4) {
            if (((s as any).npc_rel ?? 0)?.['A139'] >= 50) {
              scene.text('She looks you over from head to toe before she scoffs. "What?"');
              scene.text('You smile at her. "I just wanted to talk."');
              scene.text('She rolls her eyes and starts talking to Bella and Irina. They mostly ignore you, but do respond to a few of your questions and comments as they talk about boys and fashion.');
            } else {
              scene.text('She stares at you approaching. "What do you want? Never mind, I don\'t want to know."');
              scene.text('She turns and ignores you, talking with Bella and Irina instead, who also ignore you. At least they don\'t chase you off.');
            }
          } else {
            qspCall(s, 'npc_relationship', 'modify', 'A139', 'dislike');
            scene.text('"Don\'t even fucking think about it!" Stasya warns when you try to approach.');
            scene.text('She stares you down until you finally back away and leave.');
          }
        }
      }
    }
  }
  if (((s as any).mesec ?? 0) > 0  &&  ((s as any).isprok ?? 0) === 0  &&  (!((s as any).isprokp ?? 0))) {
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.actions([
        { label: 'Ask for a pad', handler: (st: GameState) => {
    ((s as any).temp ?? {})['tampon_ask'] = '"Stasya," you whisper. "My period just started and I don\'t have a pad. Can I borrow one?"';
    qspCall(s, 'gschool_coolkid_chats', 'stasya_tampon');
  } },
      ]);
    }
    scene.actions([
      { label: 'Ask for a tampon', handler: (st: GameState) => {
    ((s as any).temp ?? {})['tampon_ask'] = '"Stasya," you whisper. "My period just started and I don\'t have a tampon. Can I borrow one?"';
    qspCall(s, 'gschool_coolkid_chats', 'stasya_tampon');
  } },
    ]);
  } else {
    if (((s as any).placebopart ?? 0) > 0  &&  ((s as any).lutH ?? 0) > 0  &&  ((s as any).knowpreg ?? 0) === 0  &&  ((s as any).isprok ?? 0) === 0  &&  (!((s as any).isprokp ?? 0))) {
      if (((s as any).pantyworntype ?? 0) !== 'none') {
        scene.actions([
          { label: 'Ask for a pad', handler: (st: GameState) => {
    ((s as any).temp ?? {})['tampon_ask'] = '"Stasya," you whisper. "My period is starting soon and I don\'t have a pad. Can I borrow one?"';
    qspCall(s, 'gschool_coolkid_chats', 'stasya_tampon');
  } },
        ]);
      }
      scene.actions([
        { label: 'Ask for a tampon', handler: (st: GameState) => {
    ((s as any).temp ?? {})['tampon_ask'] = '"Stasya," you whisper. "My period is starting soon and I don\'t have a tampon. Can I borrow one?"';
    qspCall(s, 'gschool_coolkid_chats', 'stasya_tampon');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterStasyaTampon(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big139.jpg');
  // TODO-QSP: dynamic text: <<$temp['tampon_ask']>>
  scene.text(`${((s as any).temp ?? 0)?.['tampon_ask']}`);
  if (((s as any).temp ?? 0)?.['tampon_ask'] === '"Stasya," you whisper. "My period just started  &&  I don\'t have a tampon. Can I borrow one?"'  ||  ((s as any).temp ?? 0)?.['tampon_ask'] === '"Stasya," you whisper. "My period is starting soon  &&  I don\'t have a tampon. Can I borrow one?"') {
    if (((s as any).npc_rel ?? 0)?.['A139'] >= 70) {
      scene.text('"Yeah, of course!" she says hurriedly, immediately digging into her purse to produce one.');
      scene.text('"Thanks Stasya, you\'re a lifesaver."');
      scene.text('"Don\'t mention it," she says with a "no big deal" shrug and you run to the bathroom to put the tampon in.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A139'] > 20) {
        scene.text('"Ugh, <i>fine,</i>" she sighs, reaching into her purse to produce one.');
        scene.text('"Thanks Stasya, you\'re a lifesaver."');
        scene.text('"Whatever," she waves dismissively and immediately finds someone else to talk to as you run to the bathroom to put the tampon in.');
      } else {
        scene.text('She stares at you for a few moments before sighing deeply.');
        scene.text('"Ugh, <i>fine,</i>" she says, more than a little begrudgingly as she reaches into her purse to produce one.');
        scene.text('"Thanks Stasya, you\'re a lifesaver."');
        scene.text('"You owe me," she says, pointing at your chest and immediately finds someone else to talk to as you run to the bathroom to put the tampon in.');
      }
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A139'] >= 70) {
      scene.text('"I\'ve only got tampons, is that okay?" she says hurriedly, immediately digging into her purse to produce one.');
      scene.text('"Thanks Stasya, you\'re a lifesaver."');
      scene.text('"Don\'t mention it," she says with a "no big deal" shrug and you run to the bathroom to put the tampon in.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A139'] > 20) {
        scene.text('"Ugh, <i>fine,</i>" she sighs, reaching into her purse. "I only have tampons."');
        scene.text('"Thanks Stasya, you\'re a lifesaver."');
        scene.text('"Whatever," she waves dismissively and immediately finds someone else to talk to as you run to the bathroom to put the tampon in.');
      } else {
        scene.text('She stares at you for a few moments before sighing deeply.');
        scene.text('"Ugh, <i>fine,</i>" she says, more than a little begrudgingly as she reaches into her purse to produce one. "But I only have tampons."');
        scene.text('"Thanks Stasya, you\'re a lifesaver."');
        scene.text('"Just stay the fuck away from me," she huffs and immediately finds someone else to talk to as you run to the bathroom to put the tampon in.');
      }
    }
  }
  (s as any).isprok = 1;
  // TODO-QSP: end
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterIrina(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A17', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big17.jpg');
  if (((s as any).fame ?? 0)?.['pav_slut'] > 200) {
    if (((s as any).npc_rel ?? 0)?.['A17'] >= 90) {
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>, what did the virgin say after her first blowjob?" Irina asks...
      scene.text(`"${((s as any).pcs_nickname ?? 0)}, what did the virgin say after her first blowjob?" Irina asks before taking a sip of water.`);
      scene.text('"I don\'t know, what did she say?" you ask.');
      scene.text('"<i>Ah lurb yuuhh~!</i>" she replies without swallowing, grinning at you as it spills down her chin.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A17'] <= 20) {
        scene.text('"I\'d rather have Petia stare at my tits until he creams himself than to talk to you, slut!" she hisses with disgust. "Keep your legs together, cunt! This isn\'t a whorehouse, it\'s a fucking school! You\'re a fucking embarrassment, you know that?"');
        scene.text('She taunts you before she spits in front of your legs. "Use this as lube to go and fuck yourself!"');
        scene.text('You let her finish her rant before putting your hand under your skirt and letting your fingers slide over your clit. "When there\'s an itch, you\'ve got to scratch it!"');
        scene.text('She stands silently, shocked at your actions.');
      } else {
        scene.text('"I\'d rather have Petia stare at my tits until he creams himself than to talk to you, slut!" she hisses with disgust.');
      }
    }
  } else {
    if (((s as any).grupTipe ?? 0) === 1) {
      if (((s as any).npc_rel ?? 0)?.['A17'] >= 60) {
        scene.text('"God, look at that Natasha girl. She\'s so pathetic, right? She\'s so obsessed with us!" Irina says while giving Natasha a fake smile as she passes on her way to hang out with her fellow nerds.');
        scene.text('Once she\'s no longer looking, Irina rolls her eyes and the two of you chat for a while about a variety of topics.');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A17'] <= 20) {
          scene.text('"My advice is to sleep with as many people as possible," Irina says.');
          scene.text('"But that would make me a slut, wouldn\'t it?" you reply.');
          // TODO-QSP: dynamic text: "<<$pcs_nickname>>, everybody does it. It's just that nobody <i>talks</i> about ...
          scene.text(`"${((s as any).pcs_nickname ?? 0)}, everybody does it. It's just that nobody <i>talks</i> about it," she assures you.`);
          scene.text('"So, it\'s like a secret society?"');
          scene.text('"That\'s one way of looking at it…" she nods in an approving manner, then gives you a friendly smile before walking away.');
        } else {
          scene.text('"Liza told me that some girl overheard this group of girls talking at lunch. Apparently, they heard Stasya talking shit about me!" Irina exclaims and both of you let out a little gasp, even though it really isn\'t much of a surprise.');
          scene.text('"What did she say?" you ask.');
          scene.text('"Oh I wouldn\'t dare repeat the things she said. It would just leave a bad taste in my mouth."');
          scene.text('She shakes her head in disappointment, but you notice the hint of a smirk on her lips. "Jealousy is such an ugly look…"');
          scene.text('The two of you then continue gossiping until the bell rings.');
        }
      }
    } else {
      if (((s as any).grupTipe ?? 0) === 2) {
        if (((s as any).npc_rel ?? 0)?.['A17'] >= 70) {
          scene.text('"Back when we were kids, Bella tried to ride a cow," Irina giggles.');
          scene.text('"What, like a real life cow? How\'d that go?" you ask curiously.');
          scene.text('"She managed for few minutes before the cow shook her off and she landed in cowshit!" she cackles. "But you didn\'t hear it from me, okay?"');
          scene.text('You tap your nose, assuring Irina her secret is safe is safe with you.');
          scene.text('"What are you two laughing at?" Bella asks from a distance on her way back from the restroom.');
          scene.text('"Nothing, nothing…" you both reply in a near synchronized manner, though you both keep giggling for some time as Bella rolls her eyes and sighs deeply. "Effing kindergarten, seriously."');
        } else {
          if (((s as any).npc_rel ?? 0)?.['A17'] <= 20) {
            scene.text('Irina listens to you talk with a tired and bored expression.');
            scene.text('"Oh god, I think I\'d rather talk to Lesco…" she yawns before brushing you off.');
          } else {
            scene.text('You try to make small talk with Irina, and to your surprise, she doesn\'t instantly turn you away. Seeing as though she hasn\'t said anything yet, you keep talking to her, but soon hear the faint sound of music and realize she\'s wearing earpods.');
            scene.text('With comical timing, she pulls them out when she finally notices you standing next to her. "What do you want?" she sneers.');
          }
        }
      } else {
        if (((s as any).grupTipe ?? 0) === 3) {
          if (((s as any).npc_rel ?? 0)?.['A17'] >= 80) {
            scene.text('"I need to get my nails done, but I won\'t have time with all this stupid homework!" Irina whines with a pout.');
            scene.text('"I\'m sure Feofan or Petka would be more than happy to help you out…" you gently remind her.');
            // TODO-QSP: dynamic text: A sly smile spreads across her face. "You're totally right, <<$pcs_nickname>>! Y...
            scene.text(`A sly smile spreads across her face. "You're totally right, ${((s as any).pcs_nickname ?? 0)}! You know me so well."`);
          } else {
            if (((s as any).npc_rel ?? 0)?.['A17'] <= 20) {
              scene.text('You see Irina sweet talking Artem for some reason, probably to do her homework. How can someone so charming be so manipulative?');
              scene.text('"Grow a pair, Artem! She\'s just using you!" you shout at them.');
              // TODO-QSP: dynamic text: "What a rude girl <<$pcs_nickname>> is! I think you have a wonderful pair…" She ...
              scene.text(`"What a rude girl ${((s as any).pcs_nickname ?? 0)} is! I think you have a wonderful pair…" She doesn't let your attempt at intervention bother her, even taking it further and letting her hand slide over Artem's crotch. "Oops, I'm so clumsy! You'll help me, right?"`);
              scene.text('You can see the growing bulge in his pants as his face turns bright red.');
              scene.text('Once he agrees, she smiles and walks over to you. "You\'re out of your league, bitch! Never interrupt me again or you\'ll regret it!" she hisses while walking past you in an intimidating manner.');
            } else {
              scene.text('"That Ben Solo is <i>so</i> hot. I would let him do anything he wants with me… You think he\'s single?" Irina asks out loud.');
              scene.text('"I\'m more into Luke myself…" you reply while keeping your cool.');
              scene.text('"You mean the old man who trained Rey?" she asks in surprise while mimicking a cock getting soft with her finger.');
              scene.text('"He was young and cute in the originals! You know, A New Hope, Empire Strikes Back?" you explain.');
              scene.text('"I don\'t watch old movies. They\'re… old," she shrugs.');
            }
          }
        } else {
          if (((s as any).grupTipe ?? 0) === 4) {
            if (((s as any).npc_rel ?? 0)?.['A17'] >= 80) {
              scene.text('"I think it was in 9th grade when we girls had Lavrenti over because we wanted to borrow his camera for new shots for our social media. When he arrived, Bella suggested we kill the lights and see which one of us would dare get naked in front of him as a thank you. Of course, we were joking, so when the light were switched back on none of us were naked, but he had the biggest boner I\'d ever seen!" she giggles.');
              scene.text('"Wow, you girls really surprise me sometimes…" you reply with a hint of disappointment, hoping for something more juicy.');
              scene.text('"I know, right?!" she giggles while mimicking the size of Lavrenti\'s cock with her hands like a fisherman describing his catch.');
            } else {
              if (((s as any).npc_rel ?? 0)?.['A17'] <= 20) {
                scene.text('"Oh, it\'s you. The lowlife. I thought you would\'ve dropped out or be in jail by now, but nooo, last year of school! That must really be an accomplishment for you, right?" Irina says mockingly.');
                scene.text('"Keep running your mouth like that and I\'m gonna use that tongue of yours to clean my asshole!"');
                scene.text('"I was wondering where that horrible smell was coming from!" she says and continues to ridicule you.');
                scene.text('"Fuck you bitch, you\'re getting it now!"');
                // TODO-QSP: dynamic text: You storm towards her before Lavrenti and Lena grab hold of you. "We're in schoo...
                scene.text(`You storm towards her before Lavrenti and Lena grab hold of you. "We're in school, ${((s as any).pcs_nickname ?? 0)}! You can kick her smug ass later, so calm down before the teachers hear you!"`);
              } else {
                scene.text('"Psst, you know where to get some, you know… green?" Irina whispers at you.');
                scene.text('"What, you think just because I\'m a gopnik I know every fucking drug dealer in town?! Is that what you\'re saying?!" you angrily reply.');
                scene.text('"God no, of course not!" she says, trying to explain herself.');
                scene.text('"There\'s a guy in front of the Five-Eight in the evening. Your pretty face and those nice lips might get you a discount, if you know what I mean…" you laugh.');
                // TODO-QSP: dynamic text: "Eww, gross!" she replies. "What's wrong with you?! Thanks anyway, <<$pcs_nickna...
                scene.text(`"Eww, gross!" she replies. "What's wrong with you?! Thanks anyway, ${((s as any).pcs_nickname ?? 0)}."`);
                scene.text('As you\'re parting ways, you give her an air gesture of a blowjob while holding an imaginary bag of weed in the other hand.');
              }
            }
          } else {
            if (((s as any).npc_rel ?? 0)?.['A17'] >= 90) {
              scene.text('It\'s easy to please Irina since she likes to talk about herself. So long as you ask her about herself and don\'t interrupt her, she\'s more than happy to talk with you.');
            } else {
              if (((s as any).npc_rel ?? 0)?.['A17'] <= 20) {
                scene.text('"Hey Irina, about the next class.." you try to inquire.');
                scene.text('"If you ever try talking to me again, I\'ll make sure the second hand blow up doll Lesco and Petia use in their threesome is more popular than you! God, I can\'t have even five minutes to myself without some loser trying to talk to me!" she mumbles in an angry tone as she walks away.');
              } else {
                scene.text('"You don’t have any friends, do you?" Irina asks with a stern, unimpressed look. "And you won\'t ever find any either."');
                scene.text('She then turns around and ignores you.');
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: $func('npc_reactions', 'general', 'A17')
  if (((s as any).mesec ?? 0) > 0  &&  ((s as any).isprok ?? 0) === 0  &&  (!((s as any).isprokp ?? 0))) {
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.actions([
        { label: 'Ask for a pad', handler: (st: GameState) => {
    ((s as any).temp ?? {})['tampon_ask'] = '"Irina," you whisper. "My period just started and I don\'t have a pad Can I borrow one?"';
    qspCall(s, 'gschool_coolkid_chats', 'irina_tampon');
  } },
      ]);
    }
    scene.actions([
      { label: 'Ask for a tampon', handler: (st: GameState) => {
    ((s as any).temp ?? {})['tampon_ask'] = '"Irina," you whisper. "My period just started and I don\'t have a tampon. Can I borrow one?"';
    qspCall(s, 'gschool_coolkid_chats', 'irina_tampon');
  } },
    ]);
  } else {
    if (((s as any).placebopart ?? 0) > 0  &&  ((s as any).lutH ?? 0) > 0  &&  ((s as any).knowpreg ?? 0) === 0  &&  ((s as any).isprok ?? 0) === 0  &&  (!((s as any).isprokp ?? 0))) {
      if (((s as any).pantyworntype ?? 0) !== 'none') {
        scene.actions([
          { label: 'Ask for a pad', handler: (st: GameState) => {
    ((s as any).temp ?? {})['tampon_ask'] = '"Irina," you whisper. "My period is starting soon and I don\'t have a pad. Can I borrow one?"';
    qspCall(s, 'gschool_coolkid_chats', 'irina_tampon');
  } },
        ]);
      }
      scene.actions([
        { label: 'Ask for a tampon', handler: (st: GameState) => {
    ((s as any).temp ?? {})['tampon_ask'] = '"Irina," you whisper. "My period is starting soon and I don\'t have a tampon. Can I borrow one?"';
    qspCall(s, 'gschool_coolkid_chats', 'irina_tampon');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterIrinaTampon(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big17.jpg');
  // TODO-QSP: dynamic text: <<$temp['tampon_ask']>>
  scene.text(`${((s as any).temp ?? 0)?.['tampon_ask']}`);
  if (((s as any).temp ?? 0)?.['tampon_ask'] === '"Irina," you whisper. "My period just started  &&  I don\'t have a tampon. Can I borrow one?"'  ||  ((s as any).temp ?? 0)?.['tampon_ask'] === '"Irina," you whisper. "My period is starting soon  &&  I don\'t have a tampon. Can I borrow one?"') {
    if (((s as any).npc_rel ?? 0)?.['A17'] >= 70) {
      scene.text('"Yeah sure," she nods and digs into her purse to produce one.');
      scene.text('"Thanks Irina, you\'re a lifesaver."');
      scene.text('"Don\'t worry about it," she smiles before you run to the bathroom to put the tampon in.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A17'] > 20) {
        scene.text('"If you really need one," she nods and digs into her purse to produce a tampon.');
        scene.text('"Thanks Irina, you\'re a lifesaver."');
        scene.text('"Don\'t worry about it," she shrugs before you run to the bathroom to put the tampon in.');
      } else {
        scene.text('She stares at you for a few moments before sighing deeply.');
        scene.text('"If you really need one," she says a little begrudgingly and digs into her purse to produce a tampon.');
        scene.text('"Thanks Irina, you\'re a lifesaver."');
        scene.text('"You. Owe. Me." She pokes you in the chest before turning away to Bella as you run to the bathroom to put the tampon in.');
      }
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A17'] >= 70) {
      scene.text('"I\'ve only got tampons, is that okay?" she says hurriedly, immediately digging into her purse to produce one.');
      scene.text('"Thanks Irina, you\'re a lifesaver."');
      scene.text('"Don\'t mention it," she says with a "no big deal" shrug and you run to the bathroom to put the tampon in.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A17'] > 20) {
        scene.text('"Ugh, <i>fine,</i>" she sighs, reaching into her purse. "I only have tampons."');
        scene.text('"Thanks Irina, you\'re a lifesaver."');
        scene.text('"Whatever," she waves dismissively and immediately finds someone else to talk to as you run to the bathroom to put the tampon in.');
      } else {
        scene.text('She stares at you for a few moments before sighing deeply.');
        scene.text('"Ugh, <i>fine,</i>" she says, more than a little begrudgingly as she reaches into her purse to produce one. "But I only have tampons."');
        scene.text('"Thanks Irina, you\'re a lifesaver."');
        scene.text('"You owe me," she says, pointing at your chest and immediately finds someone else to talk to as you run to the bathroom to put the tampon in.');
      }
    }
  }
  (s as any).isprok = 1;
  // TODO-QSP: end
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterSonia(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A25', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big25.jpg');
  if (((s as any).fame ?? 0)?.['pav_slut'] > 200) {
    if (((s as any).npc_rel ?? 0)?.['A25'] >= 50) {
      scene.text('"Hey Sonia!" you greet her with a smile and she gives you a friendly smile in return.');
      scene.text('"Hey…" Her smile fades as she notices the looks everyone else is giving you. You try talking to her and at times she is very animated, only to catch herself and be a lot more reserved.');
      scene.text('You can tell she\'s worried about being seen talking to you, but at least she\'s nice about it.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A25'] <= 20) {
        scene.text('"Hey Sonia!" you greet her with a smile.');
        scene.text('She looks around thinking you\'re talking to someone else before realizing you mean her. "Why would you even talk to me? We\'re not friends and I don\'t want anyone to see me talking to you. Please just go away!"');
        scene.text('She then moves away to talk to Katja.');
      } else {
        scene.text('"Hey Sonia!" you greet her with a smile.');
        scene.text('"Hey…" She glances around and you can see many of the others giving you dirty looks. She mostly ignores you, but does talk at times. At least she isn\'t insulting you or chasing you off.');
      }
    }
  } else {
    if (((s as any).grupTipe ?? 0) === 1) {
      if (((s as any).npc_rel ?? 0)?.['A25'] >= 50) {
        scene.text('"Oh man!" Sonia groans and stretches. "I can\'t WAIT for this day to be over!"');
        scene.text('"What\'s wrong?" you ask.');
        scene.text('She sighs and looks around. "Just tired of… all this. I just want to have some fun. Is that too much to ask?"');
        scene.text('The two of you start talking about some of your recent nights out. It really does seem like she just wants to cut loose.');
        if (((s as any).soniaQW ?? 0)?.['homeinvite'] === 0) {
          ((s as any).soniaQW ?? {})['homeinvite'] = 1;
          scene.text('As you start to head to class, Sonia stops you. "Hey, why don\'t you come by my house sometime and we can hang out?"');
          scene.text('She quickly tells you her address and you assure her you\'ll stop by sometime.');
        }
      } else {
        if (((s as any).npc_rel ?? 0)?.['A25'] <= 20) {
          scene.text('You spend some time talking with Sonia, but she ends up focusing more on the magazine she\'s reading, which is a bit disappointing, but at least she stuck around.');
        } else {
          scene.text('"What are you up to?" you ask as you watch her organizing a stack of various teen magazines inside her locker.');
          scene.text('"I think it\'s time I got rid of some of these…" she sighs as she stares longingly at the stack. "But I can\'t bear throwing any of them away!"');
          scene.text('You can\'t help but laugh and tease her a little. In the end, the two of you end up reading through the magazines rather than throwing them out.');
        }
      }
    } else {
      if (((s as any).grupTipe ?? 0) === 2) {
        if (((s as any).npc_rel ?? 0)?.['A25'] >= 50) {
          scene.text('"Oh man!" Sonia groans and stretches. "I can\'t WAIT for this day to be over!"');
          scene.text('"What\'s wrong?" you ask.');
          scene.text('She sighs and looks around. "Just tired of… all this. I just want to have some fun. Is that too much to ask?"');
          scene.text('The two of you start talking about some of your recent nights out. It really does seem like she just wants to cut loose.');
          if (((s as any).soniaQW ?? 0)?.['homeinvite'] === 0) {
            ((s as any).soniaQW ?? {})['homeinvite'] = 1;
            scene.text('As you start to head to class, Sonia stops you. "Hey, why don\'t you come by my house sometime and we can hang out?"');
            scene.text('She quickly tells you her address and you assure her you\'ll stop by sometime.');
          }
        } else {
          if (((s as any).npc_rel ?? 0)?.['A25'] <= 20) {
            scene.text('"Have you seen the new clothes they\'re selling at the garment factory in town?" you ask Sonia, trying to catch her interest, but only manage to do the exact opposite.');
            scene.text('"Garment factory?" she asks with a hurt and slightly annoyed look. "What makes you think I shop at that place?"');
            scene.text('It takes some time, but eventually you manage to save the conversation. At least you think you have since she doesn\'t run you off, although she\'s more withdrawn after that point.');
          } else {
            scene.text('"What are you up to?" you ask as you watch her organizing a stack of various teen magazines inside her locker.');
            scene.text('"I think it\'s time I got rid of some of these…" she sighs as she stares longingly at the stack. "But I can\'t bear throwing any of them away!"');
            scene.text('You can\'t help but laugh and tease her a little. In the end, the two of you end up reading through the magazines rather than throwing them out.');
          }
        }
      } else {
        if (((s as any).grupTipe ?? 0) === 3) {
          if (((s as any).npc_rel ?? 0)?.['A25'] >= 50) {
            scene.text('"Hey Sonia!" you greet her with a smile and she gives you a friendly little wave.');
            scene.text('"What\'s up, neeeeerd?" she asks with a giggle and you tell her you just want to hang out.');
            scene.text('With Sonia being so friendly, you slip into an easygoing banter with her for the rest of break.');
            if (((s as any).soniaQW ?? 0)?.['homeinvite'] === 0) {
              ((s as any).soniaQW ?? {})['homeinvite'] = 1;
              scene.text('As you start to head to class, Sonia stops you. "Hey, why don\'t you come by my house sometime and we can hang out?"');
              scene.text('She quickly tells you her address and you assure her you\'ll stop by sometime.');
            }
          } else {
            if (((s as any).npc_rel ?? 0)?.['A25'] <= 20) {
              scene.text('You spend some time talking with Sonia, but she ends up focusing more on the magazine she\'s reading, which is a bit disappointing, but at least she stuck around.');
            } else {
              scene.text('"Hey Sonia!" you greet her with a smile and she gives you a friendly little wave.');
              // TODO-QSP: dynamic text: "What's up, <<$pcs_nickname>>?" she asks and you tell her you just want to hang ...
              scene.text(`"What's up, ${((s as any).pcs_nickname ?? 0)}?" she asks and you tell her you just want to hang out.`);
              scene.text('With Sonia being so friendly, you slip into an easygoing banter with her for the rest of break.');
            }
          }
        } else {
          if (((s as any).grupTipe ?? 0) === 4) {
            if (((s as any).npc_rel ?? 0)?.['A25'] >= 50) {
              scene.text('"Hey Sonia!" you greet her with a smile and she gives you a friendly little wave.');
              scene.text('"What\'s up? Mind if I ask you some questions?" she asks and you shrug, causing her to launch into a barrage of questions about partying with your fellow gopniks.');
              scene.text('She seems very interested in what you and the other gopniks do for fun and you end up talking for a while, mostly sharing some of your favorite stories.');
              if (((s as any).soniaQW ?? 0)?.['homeinvite'] === 0) {
                ((s as any).soniaQW ?? {})['homeinvite'] = 1;
                scene.text('As you start to head to class, Sonia stops you. "Hey, why don\'t you come by my house sometime and we can hang out?"');
                scene.text('She quickly tells you her address and you assure her you\'ll stop by sometime.');
              }
            } else {
              if (((s as any).npc_rel ?? 0)?.['A25'] <= 20) {
                scene.text('You spend some time talking with Sonia, but she ends up focusing more on the magazine she\'s reading, which is a bit disappointing, but at least she stuck around.');
              } else {
                scene.text('"Hey Sonia!" you greet her with a smile and she gives you a friendly little wave.');
                // TODO-QSP: dynamic text: "What's up, <<$pcs_nickname>>?" she asks and you tell her you just want to hang ...
                scene.text(`"What's up, ${((s as any).pcs_nickname ?? 0)}?" she asks and you tell her you just want to hang out`);
                scene.text('With Sonia being so friendly, you slip into an easygoing banter with her for the rest of break.');
              }
            }
          } else {
            if (((s as any).npc_rel ?? 0)?.['A25'] >= 50) {
              scene.text('"Hey Sonia!" you greet her with a smile and she gives you a friendly smile.');
              scene.text('"Hey…" Her smile fades as she notices the looks everyone else is giving you. You try talking to her and at times she is very animated, only to catch herself and be a lot more reserved.');
              scene.text('You can tell she\'s worried about being seen talking to you, but at least she\'s nice about it.');
            } else {
              if (((s as any).npc_rel ?? 0)?.['A25'] <= 20) {
                scene.text('"Hey Sonia!" you greet her with a smile.');
                scene.text('She looks around thinking you\'re talking to someone else before realizing you mean her. "Why would you even talk to me? We\'re not friends and I don\'t want anyone to see me talking to you. Please just go away!"');
                scene.text('She then moves away to talk to Katja.');
              } else {
                scene.text('You spend some time talking with Sonia, but she ends up focusing more on the magazine she\'s reading, which is a bit disappointing, but at least she stuck around.');
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: $func('npc_reactions', 'general', 'A25')
  if (((s as any).mesec ?? 0) > 0  &&  ((s as any).isprok ?? 0) === 0  &&  (!((s as any).isprokp ?? 0))) {
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.actions([
        { label: 'Ask for a pad', handler: (st: GameState) => {
    ((s as any).temp ?? {})['tampon_ask'] = '"Sonia," you whisper. "My period just started and I don\'t have a pad. Can I borrow one?"';
    qspCall(s, 'gschool_coolkid_chats', 'sonia_tampon');
  } },
      ]);
    }
    scene.actions([
      { label: 'Ask for a tampon', handler: (st: GameState) => {
    ((s as any).temp ?? {})['tampon_ask'] = '"Sonia," you whisper. "My period just started and I don\'t have a tampon. Can I borrow one?"';
    qspCall(s, 'gschool_coolkid_chats', 'sonia_tampon');
  } },
    ]);
  } else {
    if (((s as any).placebopart ?? 0) > 0  &&  ((s as any).lutH ?? 0) > 0  &&  ((s as any).knowpreg ?? 0) === 0  &&  ((s as any).isprok ?? 0) === 0  &&  (!((s as any).isprokp ?? 0))) {
      if (((s as any).pantyworntype ?? 0) !== 'none') {
        scene.actions([
          { label: 'Ask for a pad', handler: (st: GameState) => {
    ((s as any).temp ?? {})['tampon_ask'] = '"Sonia," you whisper. "My period is starting soon and I don\'t have a pad. Can I borrow one?"';
    qspCall(s, 'gschool_coolkid_chats', 'sonia_tampon');
  } },
        ]);
      }
      scene.actions([
        { label: 'Ask for a tampon', handler: (st: GameState) => {
    ((s as any).temp ?? {})['tampon_ask'] = '"Sonia," you whisper. "My period is starting soon and I don\'t have a tampon. Can I borrow one?"';
    qspCall(s, 'gschool_coolkid_chats', 'sonia_tampon');
  } },
      ]);
    }
  }
  // TODO-QSP: end
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
      scene.text('"Any time," she says with a big smile and you run to the bathroom to put the tampon in.');
    } else {
      // TODO-QSP: dynamic text: "Sure thing <<$pcs_nickname>>," she says, immediately digging into her purse to ...
      scene.text(`"Sure thing ${((s as any).pcs_nickname ?? 0)}," she says, immediately digging into her purse to produce one.`);
      scene.text('"Thanks Sonia, you\'re a lifesaver."');
      scene.text('"We\'ve all been there," she says with a shrug and a small smile and you run to the bathroom to put the tampon in.');
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A25'] >= 70) {
      // TODO-QSP: dynamic text: "Sorry <<$pcs_nickname>>, I've only got tampons," she says, digging into her pur...
      scene.text(`"Sorry ${((s as any).pcs_nickname ?? 0)}, I've only got tampons," she says, digging into her purse to produce one. "But anything in an emergency, right?`);
      scene.text('"Thanks Sonia, you\'re a lifesaver."');
      scene.text('"Any time," she says with a big smile and you run to the bathroom to put the tampon in.');
    } else {
      // TODO-QSP: dynamic text: "Sure thing <<$pcs_nickname>>," she says, immediately digging into her purse. "B...
      scene.text(`"Sure thing ${((s as any).pcs_nickname ?? 0)}," she says, immediately digging into her purse. "But I've only got tampons. Sorry about that."`);
      scene.text('"Thanks Sonia, you\'re a lifesaver."');
      scene.text('"We\'ve all been there," she says with a shrug and a small smile and you run to the bathroom to put the tampon in.');
    }
  }
  (s as any).isprok = 1;
  // TODO-QSP: end
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'dimka':
      enterDimka(s, scene);
      break;
    case 'dim_drugs':
      enterDimDrugs(s, scene);
      break;
    case 'dimka_pay':
      enterDimkaPay(s, scene);
      break;
    case 'dimka_sex':
      enterDimkaSex(s, scene);
      break;
    case 'igor':
      enterIgor(s, scene);
      break;
    case 'tease_igor':
      enterTeaseIgor(s, scene);
      break;
    case 'igor_peg':
      enterIgorPeg(s, scene);
      break;
    case 'katja':
      enterKatja(s, scene);
      break;
    case 'katja_tampon':
      enterKatjaTampon(s, scene);
      break;
    case 'Katjaproblems':
      enterKatjaproblems(s, scene);
      break;
    case 'bella':
      enterBella(s, scene);
      break;
    case 'bella_tampon':
      enterBellaTampon(s, scene);
      break;
    case 'lizaveta':
      enterLizaveta(s, scene);
      break;
    case 'lizaveta_tampon':
      enterLizavetaTampon(s, scene);
      break;
    case 'lizaveta_latest_gossip':
      enterLizavetaLatestGossip(s, scene);
      break;
    case 'marcus':
      enterMarcus(s, scene);
      break;
    case 'Marcus_Katja_talk':
      enterMarcus_KatjaTalk(s, scene);
      break;
    case 'andrey':
      enterAndrey(s, scene);
      break;
    case 'mefodiy':
      enterMefodiy(s, scene);
      break;
    case 'vicky':
      enterVicky(s, scene);
      break;
    case 'vicky_tampon':
      enterVickyTampon(s, scene);
      break;
    case 'stasya':
      enterStasya(s, scene);
      break;
    case 'stasya_tampon':
      enterStasyaTampon(s, scene);
      break;
    case 'irina':
      enterIrina(s, scene);
      break;
    case 'irina_tampon':
      enterIrinaTampon(s, scene);
      break;
    case 'sonia':
      enterSonia(s, scene);
      break;
    case 'sonia_tampon':
      enterSoniaTampon(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gschool_coolkid_chats: LocationDef = {
  name: 'gschool_coolkid_chats',
  title: '<<$npc_firstname[\'A14\']>> <<$npc_lastname[\'A14\']>>',
  region: 'other',
  enter: enter,
};
