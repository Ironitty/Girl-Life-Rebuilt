import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

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
          { label: 'Refuse', handler: (st: GameState) => {
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
              // TODO-QSP: dynamic text: "You seem to have the wrong idea about me, <<$pcs_nickname>>," he says as he hol...
              scene.text(`"You seem to have the wrong idea about me, ${((s as any).pcs_nickname ?? 0)}," he says as he holds out his hand to stop you from getting any closer. "Just because we run in the same social circle doesn't mean we're friends."`);
              scene.text('You can\'t help but scoff and roll your eyes. "Who said I want to be friends? You just looked lonely standing over here by yourself. I was just trying to be nice."');
              scene.text('You trade a few more barbs back and forth.');
              scene.text('Dimka is willing to entertain you for a few minutes, occasionally taking part in the conversation but letting you do most of the talking.');
              scene.text('"Hey, Bella!" he calls out as he spots her walking by. "Sorry, I hope you don\'t mind."');
              scene.text('He follows after her before you can even reply. At least he let you talk to him.');
            }
          } else {
            if (((s as any).npc_rel ?? 0)?.['A1'] >= 50) {
              scene.text('"Have I shown you my photos from my last trip?" he smiles. "Take a look at this." He pulls out his phone and shows you some photos from his latest trip to Moscow. "You would\'ve loved it out there. It really made me realize we\'re wasting away out here in a place like this."');
              scene.text('You then chat about the other places he\'s visited.');
              if (((s as any).dimarudorient ?? 0) === 1) {
                // TODO-QSP: act 'Ask for some pale lady': gt 'gschool_coolkid_chats', 'dim_drugs'
              }
            } else {
              scene.text('Dimka looks down at you with a condescending smile. "What do you want?" he asks, maintaining his "friendly" appearance in front of everyone.');
              scene.text('"I just wanted to say hi is all," you reply.');
              scene.text('He looks around like this is a common burden. "Of course you did, everyone does."');
              scene.text('You try talking to him, but he acts like he\'s barely tolerating you, like a Tsar might a peasant in his court.');
              scene.text('Dimka is willing to entertain you for a bit, occasionally taking part in the conversation but letting you do most of the talking.');
              scene.text('"Hey, Bella!" he calls as he spots her walking by. "Sorry, I hope you don\'t mind."');
              scene.text('He follows after her before you can even reply. At least he let you talk to him.');
            }
            if (((s as any).grupTipe ?? 0) === 3) {
              if (((s as any).npc_rel ?? 0)?.['A1'] >= 60) {
                scene.text('Dimka greets you with a friendly smile, making room for you in the group made up of Bella, Igor and a few other students. Some of them give you an odd look, but Dimka makes you feel welcome.');
                scene.text('"Relax, she doesn\'t have the plague," he playfully chides everyone and you\'re soon engaged in a conversation with Dimka.');
                if (((s as any).dimarudorient ?? 0) === 1) {
                  // TODO-QSP: act 'Ask for some pale lady': gt 'gschool_coolkid_chats', 'dim_drugs'
                }
              } else {
                scene.text('Dimka looks down at you with a condescending smile. "You get lost, loser? Shouldn\'t you be off pretending to be an elf or something?" he asks with a charming smile.');
                scene.text('"I just wanted to say hi is all," you reply.');
                scene.text('He looks around like this is a common burden. "Of course you did, everyone does. Now that you have, why don\'t you go back to your own kind?"');
                scene.text('You try talking to him, but he acts like he\'s barely tolerating you, like a Tsar might a peasant in his court.');
                scene.text('Dimka looks down at you with a condescending smile. "What do you want?" he asks, maintaining his "friendly" appearance in front of everyone.');
                scene.text('"I just wanted to say hi is all," you reply.');
                scene.text('He looks around like this is a common burden. "Of course you did, everyone does."');
                scene.text('You try talking to him, but he acts like he\'s barely tolerating you, like a Tsar might a peasant in his court.');
              }
            } else {
              if (((s as any).npc_rel ?? 0)?.['A1'] >= 60) {
                scene.text('Dimka greets you with a friendly smile, making room for you in the group made up of Bella, Igor and a few other students. Some of them give you an odd look, but Dimka makes you feel welcome.');
                scene.text('"Relax, she doesn\'t have the plague," he playfully chides everyone and you\'re soon engaged in a conversation with Dimka.');
                if (((s as any).dimarudorient ?? 0) === 1) {
                  // TODO-QSP: act 'Ask for some pale lady': gt 'gschool_coolkid_chats', 'dim_drugs'
                }
              } else {
                scene.text('Dimka looks down at you with a condescending smile. "What do you want? We don\'t have any drugs and none of us want whatever it is you\'re selling," he remarks, maintaining his "friendly" appearance in front of everyone.');
                scene.text('"I just wanted to say hi is all," you reply.');
                scene.text('He looks around like this is a common burden. "Of course you did, everyone does. Now go away before you ruin everyone\'s day with your dreadful attempt at fashion."');
                scene.text('You try talking to him, but he acts like he\'s barely tolerating you, like a Tsar might a peasant in his court.');
                scene.text('Dimka looks down at you with a condescending smile. "What do you want? Maybe looking for some fashion advice?" he asks, maintaining his "friendly" appearance in front of everyone.');
                scene.text('"I just wanted to say hi is all," you reply.');
                scene.text('He looks around like this is a common burden. "Of course you did, everyone does. Now that I\'ve made your day you can go do… Whatever it is you people do."');
                scene.text('You try talking to him, but he acts like he\'s barely tolerating you, like a Tsar might a peasant in his court.');
              }
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
      scene.actions([
        { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
      ]);
    }
  }
  scene.build();
}

function enterDimkaPay(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'money', 'pay', ARGS[1] * 420, 'cash'
  (s as any).mc_inventory['cocaine'] = ((s as any).mc_inventory['cocaine'] ?? 0) + (qspUntranslated(s, "ARGS[1]", { location: "gschool_coolkid_chats" }));
  qspCall(s, 'stat', '');
  scene.img('images/shared/drugs/cocainebag.jpg');
  scene.text('You nod your head and dig around in your purse before pulling out the money and quickly handing it to him. He takes his time slowly counting it out, which seems like an eternity before he finally hands over a small baggy. You snatch it from him and quickly leave.');
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
      (s as any).mc_inventory['cocaine'] = ((s as any).mc_inventory['cocaine'] ?? 0) + (1);
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
    (s as any).IgorQW['history'] = 1;
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
    (s as any).IgorQW['history'] = 1;
    scene.img('images/characters/shared/headshots_main/big4.jpg');
    scene.text('Igor is almost offended that you\'d even have to ask.');
    scene.text('"What kind of boyfriend would I be if I didn\'t help my girlfriend?" he chuckles. "Of course I\'ll help you."');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } else {
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
    if (((s as any).grupTipe ?? 0) === 1) {
      // TODO-QSP: $func('npc_reactions', 'general', 'A4')
      if (((s as any).npc_rel ?? 0)?.['A4'] >= 50) {
        if (((s as any).npc_rel ?? 0)?.['A4'] >= 60  &&  ((s as any).pcs_hotcat ?? 0) >= 5  &&  ((s as any).IgorQW ?? 0)?.['house_open'] === 0) {
          (s as any).IgorQW['house_open'] = 1;
          scene.text('You know he doesn\'t have many friends, so he\'s more than happy that you want to hang out with him. Unlike most boys, Igor is really attentive and listens to everything you say, even taking an interest in the more "girly" topics.');
          scene.text('"Oh, it\'s not that weird," he says while blushing. "I have a sister, so I hear about these things all the time…"');
          scene.text('The two of you spend some time chatting before Dimka shows up and you see Igor\'s face light up. "I need to get going. Maybe we can hang out some time, if you want come by my house?" he says while telling you where he lives, after which he gives you a small smile as he waves goodbye.');
        } else {
          scene.text('You know he doesn\'t have many friends, so he\'s more than happy that you want to hang out with him. Unlike most boys, Igor is really attentive and listens to everything you say, even taking an interest in the more "girly" topics.');
          scene.text('"Oh, it\'s not that weird," he says while blushing. "I have a sister, so I hear about these things all the time…"');
          scene.text('The two of you spend some time chatting before Dimka shows up and you see Igor\'s face light up. "I need to get going. Maybe we can talk some other time?" he asks with a small smile as he waves goodbye.');
          scene.actions([
            { label: 'Tease him', goto: ['gschool_coolkid_chats', 'tease_igor'] },
            { label: 'Help with homework', handler: (st: GameState) => {
    (s as any).IgorQW['history'] = 1;
    scene.img('images/characters/shared/headshots_main/big4.jpg');
    scene.text('Before he can leave, you ask him if he can help with your homework and his face lights up. "Yeah, of course I\'ll help you."');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
          ]);
        }
      } else {
        scene.text('The conversation feels forced as Igor makes almost no effort to talk to you. You get the feeling he\'s just doing this as a courtesy since you\'re in the same clique.');
        scene.text('As usual, Igor is hanging around Dimka, but he pays closer attention to you. With a smile, he asks you how your day has been so far and before long you\'re talking about all kinds of things. He even takes an interest in the more "girly" topics.');
        scene.actions([
          { label: 'Help with homework', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big4.jpg');
    scene.text('Igor hesitates, making the whole encounter extremely awkward. "I would… but I can\'t. I\'ve got… other things I need to do."');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
          { label: 'Help with homework', handler: (st: GameState) => {
    (s as any).IgorQW['history'] = 1;
    scene.img('images/characters/shared/headshots_main/big4.jpg');
    scene.text('"Oh, you need my help?" he asks curiously, a bit surprised that you would ask him of all people. After a few seconds, he smiles and nods. "Yeah, of course I\'ll help you."');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
        ]);
      }
    } else {
      // TODO-QSP: $func('npc_reactions', 'general', 'A4')
      if (((s as any).npc_rel ?? 0)?.['A4'] >= 50) {
        if (((s as any).npc_rel ?? 0)?.['A4'] >= 60  &&  ((s as any).pcs_hotcat ?? 0) >= 5  &&  ((s as any).IgorQW ?? 0)?.['house_open'] === 0) {
          (s as any).IgorQW['house_open'] = 1;
          scene.text('"Hey Igor, what are you doing?" you ask as you see him looking around for someone.');
          scene.text('He shrugs dismissively. "Just waiting for Dimka."');
          scene.text('The two of you spend some time chatting while he waits for Dimka. Eventually he shows up and Igor is ready to leave. "Maybe we can hang out some time, if you want come by my house?" he says while telling you where he lives, after which he gives you a small smile as he waves goodbye.');
        } else {
          scene.text('"Hey Igor, what are you doing?" you ask as you see him looking around for someone.');
          scene.text('He shrugs dismissively. "Just waiting for Dimka."');
          scene.text('The two of you spend some time chatting while he waits for Dimka. Eventually he shows up and Igor is ready to leave. "Maybe we can talk some other time?" he asks with a small smile as he waves goodbye.');
          scene.actions([
            { label: 'Tease him', goto: ['gschool_coolkid_chats', 'tease_igor'] },
            { label: 'Help with homework', handler: (st: GameState) => {
    (s as any).IgorQW['history'] = 1;
    scene.img('images/characters/shared/headshots_main/big4.jpg');
    scene.text('After a few seconds, he smiles and nods. "Yeah, of course I\'ll help you."');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
          ]);
        }
      } else {
        scene.text('The conversation feels forced as Igor makes almost no effort to talk to you. You get the feeling he\'s just doing this to try and be polite to you.');
        scene.text('As usual, Igor is hanging around Dimka, but he pays closer attention to you. With a smile, he asks you how your day has been so far and before long you\'re talking about all kinds of things. He even takes an interest in the more "girly" topics.');
        scene.actions([
          { label: 'Help with homework', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big4.jpg');
    scene.text('Igor hesitates, making the whole encounter extremely awkward. "I would… but I can\'t. I\'ve got… other things I need to do."');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
          { label: 'Help with homework', handler: (st: GameState) => {
    (s as any).IgorQW['history'] = 1;
    scene.img('images/characters/shared/headshots_main/big4.jpg');
    scene.text('After a few seconds, he smiles and nods. "Yeah, of course I\'ll help you."');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
        ]);
      }
      if (((s as any).grupTipe ?? 0) === 3) {
        // TODO-QSP: $func('npc_reactions', 'general', 'A4')
        if (((s as any).npc_rel ?? 0)?.['A4'] >= 50) {
          if (((s as any).npc_rel ?? 0)?.['A4'] >= 60  &&  ((s as any).pcs_hotcat ?? 0) >= 5  &&  ((s as any).IgorQW ?? 0)?.['house_open'] === 0) {
            (s as any).IgorQW['house_open'] = 1;
            scene.text('"Hey Igor, what are you doing?" you ask as you see him looking around for someone.');
            scene.text('He shrugs dismissively. "Just waiting for Dimka."');
            scene.text('The two of you spend some time chatting while he waits for Dimka. He eventually shows up and Igor is ready to leave.');
            scene.text('"Maybe we can hang out some time, if you want come by my house?" he says while telling you where he lives, after which he gives you a small smile as he waves goodbye.');
          } else {
            scene.text('"Hey Igor, what are you doing?" you ask as you see him looking around for someone.');
            scene.text('He shrugs dismissively. "Just waiting for Dimka."');
            scene.text('The two of you spend some time chatting while he waits for Dimka. He eventually shows up and Igor is ready to leave.');
            scene.text('"Maybe we can talk some other time?" he asks with a small smile as he waves goodbye.');
            scene.actions([
              { label: 'Tease him', goto: ['gschool_coolkid_chats', 'tease_igor'] },
              { label: 'Help with homework', handler: (st: GameState) => {
    (s as any).IgorQW['history'] = 1;
    scene.img('images/characters/shared/headshots_main/big4.jpg');
    scene.text('"You need my help?" he asks curiously, a bit surprised that you would ask him of all people. After a few seconds, he smiles and nods. "Yeah, of course I\'ll help you."');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
            ]);
          }
        } else {
          scene.text('The conversation feels forced as Igor makes almost no effort to talk to you. You get the feeling he\'s just doing this to try and be polite to you.');
          scene.text('As usual, Igor is hanging around Dimka, but he pays closer attention to you. With a smile, he asks you how your day has been so far and before long you\'re talking about all kinds of things. He even takes an interest in the more "girly" topics.');
          scene.actions([
            { label: 'Help with homework', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big4.jpg');
    scene.text('Igor hesitates, making the whole encounter extremely awkward. "I would… but I can\'t. I\'ve got… other things I need to do."');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
            { label: 'Help with homework', handler: (st: GameState) => {
    (s as any).IgorQW['history'] = 1;
    scene.img('images/characters/shared/headshots_main/big4.jpg');
    scene.text('"You need my help?" he asks curiously, a bit surprised that you would ask him of all people.');
    scene.text('After a few seconds, he shrugs. "Yeah, I guess I can help you."');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
          ]);
        }
      } else {
        // TODO-QSP: $func('npc_reactions', 'general', 'A4')
        if (((s as any).npc_rel ?? 0)?.['A4'] >= 70) {
          if (((s as any).npc_rel ?? 0)?.['A4'] >= 75  &&  ((s as any).pcs_hotcat ?? 0) >= 5  &&  ((s as any).IgorQW ?? 0)?.['house_open'] === 0) {
            (s as any).IgorQW['house_open'] = 1;
            scene.text('"Hey Igor, what are you doing?" you ask as you see him looking around for someone.');
            scene.text('He shrugs dismissively. "Just waiting for Dimka."');
            scene.text('The two of you spend some time chatting while he waits for Dimka. He eventually shows up and Igor is ready to leave.');
            scene.text('"Maybe we can hang out some time, if you want come by my house?" he says while telling you where he lives, after which he gives you a small smile as he waves goodbye.');
          } else {
            scene.text('"Hey Igor, what are you doing?" you ask as you see him looking around for someone.');
            scene.text('He shrugs dismissively. "Just waiting for Dimka."');
            scene.text('The two of you spend some time chatting while he waits for Dimka. Eventually he shows up and Igor is ready to leave. "Maybe we can talk some other time?" he asks with a small smile as he waves goodbye.');
            scene.actions([
              { label: 'Tease him', goto: ['gschool_coolkid_chats', 'tease_igor'] },
              { label: 'Help with homework', handler: (st: GameState) => {
    (s as any).IgorQW['history'] = 1;
    scene.img('images/characters/shared/headshots_main/big4.jpg');
    scene.text('"Oh, you need my help?" he asks, seemingly not surprised you need help but perhaps a bit surprised you asked him. After a few seconds, he smiles and nods. "Yeah, of course I\'ll help you."');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
            ]);
          }
        } else {
          scene.text('"Hey Igor, what are you doing?" you ask as you see him looking around for someone.');
          scene.text('Igor looks around in a slight panic. "Just waiting for Dimka. I think I see him." He almost runs away like he\'s afraid you\'re about to do something to him.');
          scene.text('"Hey Igor, what are you doing?" you ask as you see him looking around for someone.');
          scene.text('Igor looks around in a slight panic. "Why? what do you want?"');
          scene.text('You give him a friendly smile. "I just wanted to see how you were doing. Anything wrong with that?"');
          scene.text('He swallows and looks a little afraid. "No… no of course not."');
          scene.text('You talk for a few minutes, but you can tell he\'s afraid of you, like he\'s expecting you to bully him in some manner.');
          scene.text('He looks relived upon seeing Dimka and rushes over to him. "Uh, I\'ve got to go. See you later."');
        }
        if (((s as any).npc_rel ?? 0)?.['A4'] >= 80) {
          scene.text('"Hey Igor, what are you doing?" you ask as you see him looking around for someone.');
          scene.text('He shrugs dismissively. "Just waiting for Dimka."');
          // TODO-QSP: $func('npc_reactions', 'general', 'A4')
          scene.text('The two of you spend some time chatting while he waits for Dimka. He eventually shows up and Igor is ready to leave.');
          scene.text('"Maybe we can talk some other time?" he asks with a small smile as he waves goodbye.');
          scene.actions([
            { label: 'Help with homework', handler: (st: GameState) => {
    (s as any).IgorQW['history'] = 1;
    scene.img('images/characters/shared/headshots_main/big4.jpg');
    scene.text('"Oh, you need my help?" he asks curiously, a bit surprised that you would ask him of all people.');
    scene.text('After a moment, he smiles and nods. "Yeah, of course I\'ll help you."');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
          ]);
        } else {
          scene.text('"Uh, hello?" Igor is unamused to see you and completely ignores you as you try to keep a one-sided conversation going. Eventually, he just walks away without saying a word.');
          scene.text('"Hey Igor, what are you doing?" you ask as you see him looking around for someone.');
          scene.text('He shrugs dismissively. "Just waiting for Dimka. Why are you talking to me?"');
          scene.text('"I just wanted to say hi and see how you were," you reply.');
          scene.text('He seems a bit confused. "Oh…" he is all he says as he looks past you and waves at someone. "Sorry, I\'ve got to go."');
          scene.text('He rushes way from you, unsure if he was actually waving at anyone and think he was just trying to get away from you.');
        }
      }
    }
  }
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
    case 'dimka_pay':
      enterDimkaPay(s, scene);
      break;
    case 'dimka_sex':
      enterDimkaSex(s, scene);
      break;
    case 'igor':
      enterIgor(s, scene);
      break;
    default:
      enterDimka(s, scene);
      break;
  }
}

export const gschool_coolkid_chats: LocationDef = {
  name: 'gschool_coolkid_chats',
  title: '<<$npc_firstname[\'A14\']>> <<$npc_lastname[\'A14\']>>',
  region: 'other',
  description: ['You walk up to Dimka and the first thing he does is pull you aside. "Do you have my money?"'],
  enter: enter,
};
