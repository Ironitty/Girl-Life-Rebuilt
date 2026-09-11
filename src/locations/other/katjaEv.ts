import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterDefault2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).katjaQW ?? 0)?.['afterschool_hangout_day'] !== ((s as any).daystart ?? 0)) {
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'like');
  }
  ((s as any).katjaQW ?? {})['afterschool_hangout_day'] = ((s as any).daystart ?? 0);
  qspCall(s, 'katjaEvDin', '');
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  qspCall(s, 'stat', '');
  if (((s as any).katjaQW ?? 0)?.['QWstage'] > 2) {
    if (((s as any).katjaQW ?? 0)?.['horny'] < 20) {
      // TODO-QSP: dynamic text: Katja looks at you with a smile. "What do you want to do, <<$pcs_nickname>>?"
      scene.text(`Katja looks at you with a smile. "What do you want to do, ${((s as any).pcs_nickname ?? 0)}?"`);
    } else {
      if (((s as any).katjaQW ?? 0)?.['horny'] < 40) {
        // TODO-QSP: dynamic text: Katja looks at you with a naughty twinkle in her eyes. "What do you want to do, ...
        scene.text(`Katja looks at you with a naughty twinkle in her eyes. "What do you want to do, ${((s as any).pcs_nickname ?? 0)}?"`);
      } else {
        if (((s as any).katjaQW ?? 0)?.['horny'] < 60) {
          // TODO-QSP: dynamic text: Katja looks at you mischievously with a faint blush on her cheeks. "What do you ...
          scene.text(`Katja looks at you mischievously with a faint blush on her cheeks. "What do you want to do, ${((s as any).pcs_nickname ?? 0)}?"`);
        } else {
          if (((s as any).katjaQW ?? 0)?.['horny'] < 80) {
            // TODO-QSP: dynamic text: Katja is blushing fairly obviously and looks at you longingly. "<<$pcs_nickname>...
            scene.text(`Katja is blushing fairly obviously and looks at you longingly. "${((s as any).pcs_nickname ?? 0)}, what do you want to do?"`);
          } else {
            if (((s as any).katjaQW ?? 0)?.['horny'] >= (Math.floor(Math.random() * -49) + 150)  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] === 0  &&  ((s as any).katjaQW ?? 0)?.['knows_artem_is_boyfreind'] === 1  &&  ((s as any).artemQW ?? 0)?.['katja_threesome'] === 2  &&  ((s as any).locat ?? 0)?.['Vicky'] !== 8  &&  ((s as any).locat ?? 0)?.['Vicky'] !== 9  &&  ((s as any).locat ?? 0)?.['Vicky'] !== 12  &&  ((s as any).locat ?? 0)?.['Vicky'] !== 13) {
              scene.actions([{ label: 'Continue', goto: ['artem_katja_sex', 'home_work_ask_katja_no_artem'] }]);
            }
            // TODO-QSP: dynamic text: Katja is as red as a lobster and her chest is heaving from her heavy breaths. Sh...
            scene.text(`Katja is as red as a lobster and her chest is heaving from her heavy breaths. She's idly rubbing her thighs against one another while she talks. "What do you want to do, ${((s as any).pcs_nickname ?? 0)}?"`);
          }
        }
      }
    }
  } else {
    // TODO-QSP: dynamic text: Katja looks at you with a smile. "What do you want to do, <<$pcs_nickname>>?"
    scene.text(`Katja looks at you with a smile. "What do you want to do, ${((s as any).pcs_nickname ?? 0)}?"`);
  }
  if (((s as any).fedorKozlovQW ?? 0) >= 10  &&  (!((s as any).FedorKatjaChat ?? 0))) {
    (s as any).FedorKatjaChat = 1;
    scene.text('You and Katja run into Fedor, who gives you a wave. "Hey girls, what are you two up to?"');
    scene.text('Katja downcasts her eyes, noticeably embarrassed. "We\'re just going to do our homework together."');
    scene.text('"Okay, I\'ll see you some other time then," he smiles before he turns and walks away.');
    scene.actions([
      { label: 'Say goodbye and leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
    ]);
  }
  if (((s as any).lernHome ?? 0) > 0  &&  ((s as any).katjaQW ?? 0)?.['QWstage'] >= 2) {
    // TODO-QSP: act '"Let''s do our homework together"': gt 'katjaEV', '1'
  }
  if (((s as any).lernHome ?? 0) > 0  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] === 0  &&  ((s as any).katjaQW ?? 0)?.['knows_artem_is_boyfreind'] === 1  &&  ((s as any).artemQW ?? 0)?.['katja_threesome'] === 2  &&  ((s as any).locat ?? 0)?.['Vicky'] !== 8  &&  ((s as any).locat ?? 0)?.['Vicky'] !== 9  &&  ((s as any).locat ?? 0)?.['Vicky'] !== 12  &&  ((s as any).locat ?? 0)?.['Vicky'] !== 13) {
    // TODO-QSP: act 'Ask Katja if she wants to do homework with Artem': gt 'artem_katja_sex', 'home_work_ask_player_...
  }
  scene.actions([
    { label: '"Let\'s hang out"', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    if (((s as any).katjaQW ?? 0)?.['QWstage'] === 1  &&  ((s as any).npc_rel ?? 0)?.['A14'] >= 50  &&  (Math.floor(Math.random() * 6) + 1) === 1) {
      (s as any).minut = ((s as any).minut ?? 0) + (5);
      scene.actions([{ label: 'Continue', goto: ['KatjaHomeTalk', 'TamVal'] }]);
    }
    if (((s as any).katjaQW ?? 0)?.['QWstage'] > 1  &&  ((s as any).pcs_makeup ?? 0) <= 1) {
      // TODO-QSP: dynamic text: "Wait a minute, <<$pcs_nickname>>! I bet you would look great with a little make...
      scene.text(`"Wait a minute, ${((s as any).pcs_nickname ?? 0)}! I bet you would look great with a little make-up on you! What do you say?"`);
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Let her put makeup on you', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('Katja happily grins as she quickly straightens your hair. "What do you want? A light touch-up, some normal make-up or shall I just shovel it on?"');
    (s as any).pcs_hairbsh = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Light touch-up', handler: (st: GameState) => {
    (s as any).pcs_makeup = 2;
    scene.text('Katja subtly applies some neutral tones, with a light application of makeup to bring out your natural beauty.');
    if (((s as any).katjaQW ?? 0)?.['QWstage'] > 2) {
      ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (5*(1 + ((s as any).npc_had_sex ?? {})?.['A14']));
      scene.text('Katja suddenly becomes aware that she\'s staring into your eyes and blushes.');
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: '"Let\'s hang out"', goto: ['katjaEv', 'kathan'] },
    ]);
  } },
      { label: 'Normal make-up', handler: (st: GameState) => {
    (s as any).pcs_makeup = 3;
    scene.text('Katja applies some mildly vibrate tones and colors of makeup to cover your minor imperfections and enhance your best features.');
    if (((s as any).katjaQW ?? 0)?.['QWstage'] > 2) {
      ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (5*(1 + ((s as any).npc_had_sex ?? {})?.['A14']));
      scene.text('Katja suddenly becomes aware that she\'s staring into your eyes and blushes.');
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: '"Let\'s hang out"', goto: ['katjaEv', 'kathan'] },
    ]);
  } },
      { label: 'Heavy make-up', handler: (st: GameState) => {
    (s as any).pcs_makeup = 4;
    scene.text('Katja applies some deeper, richer shades of makeup that are thick enough to cover most imperfections while drawing attention to your eyes and lips.');
    if (((s as any).katjaQW ?? 0)?.['QWstage'] > 2) {
      ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (5*(1 + ((s as any).npc_had_sex ?? {})?.['A14']));
      scene.text('Katja suddenly becomes aware that she\'s staring into your eyes and blushes.');
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: '"Let\'s hang out"', goto: ['katjaEv', 'kathan'] },
    ]);
  } },
    ]);
  } },
        { label: 'You really don\'t need it', goto: ['katjaEv', 'kathan'] },
      ]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['KatjaEv', 'kathan'] }]);
    }
  } },
  ]);
  scene.build();
}

function enter1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'mood', 'raise', 'small');
  qspCall(s, 'stat', '');
  if (((s as any).katjaQW ?? 0)?.['horny'] > 60  &&  (Math.floor(Math.random() * 3) + 1) === 1  &&  ((s as any).katjaQW ?? 0)?.['pantiesQWstage'] > 0) {
    if (((s as any).katjaQW ?? 0)?.['pantiesQWstage'] >= 5  ||  ((s as any).katjaQW ?? 0)?.['take_of_panties_day'] === ((s as any).daystart ?? 0)) {
      scene.img('images/characters/pavlovsk/school/girl/katja/katja_go_home_no_tanga.jpg');
      scene.text('You walk through the streets of Pavlovsk with Katja to her house, chatting about all sorts of things before Katja suddenly stops and turns around to look at you, giving you a mischievous grin before lifting her skirt; she seems to have forgotten her panties, showing you her tender pussy.');
    } else {
      scene.img('images/characters/pavlovsk/school/girl/katja/katja_go_home_tanga.jpg');
      scene.text('You walk through the streets of Pavlovsk with Katja to her house, chatting about all sorts of things before Katja suddenly stops and turns around to look at you, giving you a mischievous grin before lifting her skirt and showing you her panties.');
    }
  } else {
    if (((s as any).month ?? 0) === 1  ||  ((s as any).month ?? 0) === 2  ||  ((s as any).month ?? 0) === 11  ||  ((s as any).month ?? 0) === 12) {
      scene.text(`<center><b>${((s as any).npc_firstname ?? 0)?.['A14']} ${((s as any).npc_lastname ?? 0)?.['A14']}</b></center>`);
      scene.img('images/characters/shared/headshots_main/big14.jpg');
    } else {
      scene.img('images/characters/pavlovsk/school/girl/katja/katja_home.jpg');
    }
    scene.text('You walk through the streets of Pavlovsk with Katja to her house, chatting about all sorts of things on the way.');
  }
  if (((s as any).AlbinaQW ?? 0)?.['StarletsJoined'] > 0  &&  ((s as any).AlbinaQW ?? 0)?.['StarletsShutDown'] === 0) {
    scene.text('Katja is very interested in how you\'re doing with your pro-dancing since there have been many rumors about Albina\'s team.');
  }
  if (((s as any).kotovLoveQW ?? 0) > 0) {
    scene.text('Katja asks you about your relationship with Vitek and expresses her opinion about it.');
  }
  if (((s as any).pcs_piercings ?? 0)?.['tongue'] > 0  &&  ((s as any).katjaQW ?? 0)?.['know_Pirced_tongue'] === 0) {
    ((s as any).katjaQW ?? {})['know_Pirced_tongue'] = 1;
    if (((s as any).katjaQW ?? 0)?.['QWstage'] > 2) {
      ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (10);
    }
    scene.text('Katja notices that you have a pierced tongue and chatters all the way home, trying to find out all about it.');
  }
  if (((s as any).flag_KissEV ?? 0) === 1) {
    (s as any).flag_KissEV = 2;
    scene.text('"I liked kissing, even if we had to kiss all the boys too, well, all of them but the jerk that called us lesbians." suddenly said Katja. You only snorted in response.');
  }
  scene.text('You eventually arrive at her house, a detached two-story building with attached garages and quite a large garden, giving the impression of neatness and order. Katja shows you inside and to her room.');
  scene.actions([
    { label: 'Go to her room', goto: ['katjaEv', '2'] },
  ]);
  scene.build();
}

function enter2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'mood', 'raise', 'small');
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${((s as any).npc_firstname ?? 0)?.['A14']} ${((s as any).npc_lastname ?? 0)?.['A14']}</b></center>`);
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  scene.text('Katja\'s room is not that clean and her things are in a circle around her bed. Katja throws her rucksack to the floor with her textbooks and notebooks falling out.');
  scene.actions([
    { label: 'Do homework with Katja', goto: ['KatjaHomeTalk', 'homework'] },
  ]);
  scene.build();
}

function enterKathan(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  if (((s as any).hour ?? 0) < 20) {
    if (((s as any).katjaQW ?? 0)?.['QWstage'] > 2) {
      if (((s as any).katjaQW ?? 0)?.['horny'] < 20) {
        // TODO-QSP: dynamic text: "Okay <<$pcs_nickname>>, what can we do?"
        scene.text(`"Okay ${((s as any).pcs_nickname ?? 0)}, what can we do?"`);
        scene.text('"Well, we can..."');
      } else {
        if (((s as any).katjaQW ?? 0)?.['horny'] < 40) {
          // TODO-QSP: dynamic text: Katja looks at you with a naughty twinkle in her eyes. "Okay <<$pcs_nickname>>, ...
          scene.text(`Katja looks at you with a naughty twinkle in her eyes. "Okay ${((s as any).pcs_nickname ?? 0)}, what can we do?"`);
          scene.text('"Well, we can..."');
        } else {
          if (((s as any).katjaQW ?? 0)?.['horny'] < 60) {
            // TODO-QSP: dynamic text: Katja looks at you mischievously with a faint blush on her cheeks. "Okay <<$pcs_...
            scene.text(`Katja looks at you mischievously with a faint blush on her cheeks. "Okay ${((s as any).pcs_nickname ?? 0)}, what can we do?"`);
            scene.text('"Well, we can..."');
          } else {
            if (((s as any).katjaQW ?? 0)?.['horny'] < 80) {
              // TODO-QSP: dynamic text: Katja is blushing fairly obviously and looks at you longingly. "Okay <<$pcs_nick...
              scene.text(`Katja is blushing fairly obviously and looks at you longingly. "Okay ${((s as any).pcs_nickname ?? 0)}, what can we do?"`);
              scene.text('"Well, we can..."');
            } else {
              // TODO-QSP: dynamic text: Katja is as red as a lobster and her chest is heaving from her heavy breaths. Sh...
              scene.text(`Katja is as red as a lobster and her chest is heaving from her heavy breaths. She's idly rubbing her thighs against one another while she talked. "Okay ${((s as any).pcs_nickname ?? 0)}, what can we do?"`);
              scene.text('"Well, we can..."');
            }
          }
        }
      }
    } else {
      // TODO-QSP: dynamic text: "Okay <<$pcs_nickname>>, what can we do?"
      scene.text(`"Okay ${((s as any).pcs_nickname ?? 0)}, what can we do?"`);
      scene.text('"Well, we can..."');
    }
    if (((s as any).lernHome ?? 0) > 0  &&  ((s as any).katjaQW ?? 0)?.['QWstage'] >= 2) {
      scene.actions([
        { label: 'Do our homework', handler: (st: GameState) => {
    if (((s as any).loc ?? 0) === 'mey_home') {
      scene.actions([{ label: 'Continue', goto: ['KatjaHomeTalk', 'homework'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['KatjaEv', '1'] }]);
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Go to the lake', goto: ['katja_lake', 'start'] },
      { label: 'Go window shopping', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/KWS1.jpg');
    scene.text('Everyone knows, at least in your school, that being cool costs money and if you aren\'t called Bella Artamonov or Dimka Nosov, your parents are going to frown at any "unnecessary" expenditure, so you visit open-air markets, jumble sales and the occasional van with "second hand" merchandise in the back.');
    scene.text('That is precisely what you and Katja have decided to do. Look for that elusive bargain that will propel your standing a little higher in the school\'s totem. An always important enterprise that requires time, patience and the endless manhandling of the sympathetic sellers\' products.');
    scene.actions([
      { label: 'Continue', goto: ['katjaEv', 'kathan14'] },
    ]);
  } },
      { label: 'Walk around and talk', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    if (((s as any).month ?? 0) > 11  ||  ((s as any).month ?? 0) < 4) {
      scene.img('images/characters/pavlovsk/school/girl/katja/KWT1.jpg');
      scene.text('You put on a good pair of boots and a good jacket before jumping into the snow-covered streets, chatting, showing off and demonstrating that the winter can\'t stop two hot girls from taking on the world head-on.');
    } else {
      scene.img('images/characters/pavlovsk/school/girl/katja/KWT2.jpg');
      scene.text('Katja isn\'t really into sports, so a quiet stroll to stay in shape where she can show off is more her style. So that\'s how you pass the time. Chatting while looking pretty.');
    }
    scene.actions([
      { label: 'Continue', goto: ['katjaEv', 'kathan16'] },
    ]);
  } },
      { label: 'Say goodbye and leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
    ]);
  } else {
    // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, it's getting a little late."
    scene.text(`"Hey ${((s as any).pcs_nickname ?? 0)}, it's getting a little late."`);
    scene.text('"True. Let\'s go back."');
    scene.text('You grab Katja\'s hand and accompany her back home.');
    scene.actions([
      { label: 'Accompany Katja home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
    ]);
  }
  scene.build();
}

function enterKathan14(s: GameState, scene: SceneBuilder): void {
  (s as any).random_event = Math.floor(Math.random() * 21) + 1;
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'npc_relationship', 'modify', 'A14', 1);
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) + (1);
  if (((s as any).pcs_chrsm ?? 0) <= 45) {
    qspCall(s, 'exp_gain', 'chrsm', 1);
  }
  qspCall(s, 'stat', '');
  if (((s as any).random_event ?? 0) <= 5) {
    scene.img('images/characters/pavlovsk/school/girl/katja/KWS2.jpg');
    scene.text('"Katja, please! We\'ve been walking around the market for half an hour!"');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, be serious! What do you think about this dress?"
    scene.text(`"${((s as any).pcs_nickname ?? 0)}, be serious! What do you think about this dress?"`);
    scene.text('She twirls, modeling the short sleeveless green dress that she has chosen.');
    scene.text('"I think that it compliments your ass nicely!"');
    scene.text('Smiling, Katja turns and presses the cloth against her derriere, looking herself over in the fitting room\'s mirror');
    // TODO-QSP: dynamic text: "I don't know, <<$pcs_nickname>>. I feel like a potato sack, but it <i>is</i> cu...
    scene.text(`"I don't know, ${((s as any).pcs_nickname ?? 0)}. I feel like a potato sack, but it <i>is</i> cute. Okay, I'll put it in the maybe pile!"`);
    scene.text('After probing a few more dresses, you leave, having taken photos of this shop\'s repertoire so that you know what to buy next time. Time to look for something else to do.');
    if (((s as any).hour ?? 0) >= 20) {
      scene.actions([
        { label: 'Accompany Katja back home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
      ]);
    } else {
      scene.actions([
        { label: 'Continue window shopping', goto: ['katjaEv', 'kathan14'] },
        { label: 'Look for something else to do', goto: ['katjaEv', 'kathan'] },
      ]);
    }
  } else {
    if (((s as any).random_event ?? 0) <= 10) {
      scene.img('images/characters/pavlovsk/school/girl/katja/KWS13.jpg');
      scene.text('After walking pavlovsk\'s commercial area from one extreme to the other for half an hour, Katja has found the perfect hats to make you two look even more glamorous and wants to take a selfie.');
      // TODO-QSP: dynamic text: "Okay <<$pcs_nickname>>! Say cheeseeeee!"
      scene.text(`"Okay ${((s as any).pcs_nickname ?? 0)}! Say cheeseeeee!"`);
      scene.text('You put on your best smile and stand beside Katja as she takes a photo of you together. A new selfie has been uploaded to Katja\'s profile in a never-ending job to make Katja the coolest twin. And now, holding up the items in question in your hands, she must choose which one she will take home.');
      scene.text('"Hm... Now that I think about it, why not look for these in green in the other shop?"');
      scene.text('"You\'re right. These looked good with that jacket. Let\'s see them!"');
      scene.text('Sigh. It\'s so hard to dress well in this city! Time for you two to give the commercial area another lookout or time to look for something else to do.');
      if (((s as any).hour ?? 0) >= 20) {
        scene.actions([
          { label: 'Accompany Katja back home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
        ]);
      } else {
        scene.actions([
          { label: 'Continue window shopping', goto: ['katjaEv', 'kathan14'] },
          { label: 'Look for something else to do', goto: ['katjaEv', 'kathan'] },
        ]);
      }
    } else {
      if (((s as any).random_event ?? 0) <= 15) {
        scene.img('images/characters/pavlovsk/school/girl/katja/KWS14.jpg');
        scene.text('Some would say that your long quest to find the perfect bargain sale is a "form of torture", but the endless advantages that find the best quality at the best price can be appreciated.');
        scene.text('"Katja, what do you think of this blouse?"');
        scene.text('"Hm... No. Too much cleavage. If you wear that, the boys are going to see straight to Moscow!"');
        scene.text('"Well, I saw Sonia wearing one like this the other day..."');
        // TODO-QSP: dynamic text: "Let's see something else, <<$pcs_nickname>>."
        scene.text(`"Let's see something else, ${((s as any).pcs_nickname ?? 0)}."`);
        scene.text('"Okay - Hey, look! Kolka! He can help us!"');
        scene.text('You see your brother walking beside the shop. When he sees you, he panics and flees the scene. Well, time to look for something else to do.');
        if (((s as any).hour ?? 0) >= 20) {
          scene.actions([
            { label: 'Accompany Katja back home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
          ]);
        } else {
          scene.actions([
            { label: 'Continue window shopping', goto: ['katjaEv', 'kathan14'] },
            { label: 'Look for something else to do', goto: ['katjaEv', 'kathan'] },
          ]);
        }
      } else {
        if (((s as any).random_event ?? 0) <= 20) {
          scene.actions([{ label: 'Continue', goto: ['katjaEv', 'discount'] }]);
        } else {
          if (((s as any).random_event ?? 0) === 21  &&  ((s as any).NatbelQW ?? 0)?.['pregday'] > 0) {
            scene.actions([{ label: 'Continue', goto: ['katjaEv', 'discount'] }]);
          } else {
            scene.img('images/characters/pavlovsk/school/girl/katja/KWS3.jpg');
            if (((s as any).NatbelQW ?? 0)?.['QWstage'] >= 8) {
              scene.text('As you enter a second-hand shop, you spot your slave, Natasha, happily looking over the shop\'s discount selection. On the floor is a bag with some clothing inside. At least she\'s using your money to stay pretty for her mistress...');
              scene.text('Neither Katja nor Natasha seems to be aware of your mutual presence, or neither care. After all, the two are in totally different social circles, so ignoring one another is perfectly understandable.');
              // TODO-QSP: dynamic text: "Come on <<$pcs_nickname>>! Look at that rack!"
              scene.text(`"Come on ${((s as any).pcs_nickname ?? 0)}! Look at that rack!"`);
              scene.text('Katja grabs your arm and pulls you away from the nerd. Maybe you should go and talk with her?');
            } else {
              scene.text('As you enter a second-hand shop, you can see Natasha, looking over the shop\'s discount selection. She\'s biting her lips and seems somewhat uneasy. Maybe she doesn\'t have the money to buy even that?');
              scene.text('Neither Katja nor Natasha seems to be aware of your mutual presence, or neither care. After all, the two are in totally different social circles, so ignoring one another is perfectly understandable.');
              // TODO-QSP: dynamic text: "Come on <<$pcs_nickname>>! Look at that rack!"
              scene.text(`"Come on ${((s as any).pcs_nickname ?? 0)}! Look at that rack!"`);
              scene.text('Katja grabs your arm and pulls you away from the nerd. Maybe you should go and talk with her?');
            }
            qspCall(s, 'willpower', 'humiliation', 'self', 'easy');
            if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
              scene.actions([
                { label: 'Tease Natasha [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    // TODO-QSP: msg $noWillpower
  } },
              ]);
            } else {
              scene.actions([
                { label: 'Tease Natasha', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).katjaQW ?? {})['horny'] = (((s as any).katjaQW ?? {})['horny'] ?? 0) + (20);
    qspCall(s, 'fame', 'pav', 'sex', Math.floor(Math.random() * 6) + 0);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/KWS5.jpg');
    if (((s as any).NatbelQW ?? 0)?.['QWstage'] >= 8  &&  ((s as any).NatbelQW ?? 0)?.['Debt'] >= 500  &&  ((s as any).katjaQW ?? 0)?.['slut'] >= 30  &&  ((s as any).katjaQW ?? 0)?.['QWstage'] > 2  &&  ((s as any).npc_had_sex ?? 0)?.['A14']  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] === 0) {
      scene.text('Walking without care to your submissive slut, Natasha becomes aware of your presence, but before she can react, you push her against a stand, cornering the surprised girl.');
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>?"
      scene.text(`"${((s as any).pcs_nickname ?? 0)}?"`);
      scene.text('She looks at you nervously, your action calling the entire shop\'s attention, especially when your hands grab Natasha\'s waist and slide down to her ass, making her jump, but she doesn\'t try to push you away.');
      scene.text('"Slut! I want to see something sexy the next time I see you. Got it, bitch?!"');
      scene.text('She doesn\'t answer, and just bites her lips and looks around nervously before you whisper huskily in her ear.');
      scene.text('"I can\'t hear you, slut."');
      // TODO-QSP: dynamic text: "I... Okay <<$pcs_nickname>>..."
      scene.text(`"I... Okay ${((s as any).pcs_nickname ?? 0)}..."`);
      scene.text('She answers meekly, and at that moment, you let her go. Around you, people are whispering. Some smile, most frown, and sweet, loving Katja blushes and paces nervously. She\'s horny and you have your favorite slave here.');
      qspCall(s, 'willpower', 'group', 'force', 'hard');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Take Natasha to Katja\'s room [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    // TODO-QSP: msg $noWillpower
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Take Natasha to Katja\'s room', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'force');
    qspCall(s, 'stat', '');
  }, goto: ['katja_sex', 'katnatsex1'] },
        ]);
      }
    } else {
      if (((s as any).NatbelQW ?? 0)?.['QWstage'] >= 8) {
        scene.text('Walking without care to your submissive slut, Natasha becomes aware of your presence, but before she can react, you push her against a stand, cornering the surprised girl.');
        // TODO-QSP: dynamic text: "<<$pcs_nickname>>?"
        scene.text(`"${((s as any).pcs_nickname ?? 0)}?"`);
        scene.text('She looks at you nervously, your action calling the entire shop\'s attention, especially when your hands grab Natasha\'s waist and slide down to her ass, making her jump, but she doesn\'t try to push you away.');
        scene.text('"Slut! I want to see something sexy the next time I see you. Got it, bitch?!"');
        scene.text('She doesn\'t answer, and just bites her lips and looks around nervously before you whisper huskily in her ear.');
        scene.text('"I can\'t hear you, slut."');
        // TODO-QSP: dynamic text: "I... Okay <<$pcs_nickname>>..."
        scene.text(`"I... Okay ${((s as any).pcs_nickname ?? 0)}..."`);
        scene.text('She answers meekly, and at that moment, you let her go. Around you, people are whispering. Some smile, most frown and after a silent moment, an embarrassed Natasha runs out of the shop. A blushing Katja seems to go to say something but stops, grabs your hand and follows the nerd girl. OK, it seems that it is time to look for something else to do.');
      } else {
        scene.text('Walking without care to the nerd, Natasha becomes aware of your presence, but before she can react, you push her against a stand, cornering the surprised girl.');
        // TODO-QSP: dynamic text: "<<$pcs_nickname>>?"
        scene.text(`"${((s as any).pcs_nickname ?? 0)}?"`);
        scene.text('She looks at you nervously, your action calling the entire shop\'s attention, especially when your hands grab Natasha\'s waist and slide down to her ass, making her jump, but she doesn\'t try to push you away.');
        scene.text('"Fuck Natasha! You\'re getting me hot!"');
        scene.text('She blinks, not knowing how to react, before she looks around nervously and lowers her face.');
        // TODO-QSP: dynamic text: "Please <<$pcs_nickname>>," she whispers. "I... I don't like this game..."
        scene.text(`"Please ${((s as any).pcs_nickname ?? 0)}," she whispers. "I... I don't like this game..."`);
        scene.text('You bend so your mouth is at Natasha\'s ear.');
        scene.text('"Oh really? Because I\'m pretty sure you would love to be... on your knees... between my legs."');
        scene.text('You then take a step back and release the embarrassed girl. Around you, people are whispering. Some smile, most frown. After an awkward silence, an embarrassed Natasha runs out of the shop.');
        scene.text('A blushing Katja seems to go to say something but stops, grabs your hand and follows the nerd girl. Looks like it\'s time to look for something else to do.');
      }
    }
    if (((s as any).hour ?? 0) >= 20) {
      scene.actions([
        { label: 'Accompany Katja back home', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A16', (-5));
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
      ]);
    } else {
      scene.actions([
        { label: 'Continue window shopping', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A16', (-5));
  }, goto: ['katjaEv', 'kathan14'] },
        { label: 'Look for something else to do', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A16', (-5));
  }, goto: ['katjaEv', 'kathan'] },
      ]);
    }
  } },
              ]);
            }
            if (((s as any).hour ?? 0) >= 20) {
              scene.actions([
                { label: 'Accompany Katja back home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
              ]);
            } else {
              scene.actions([
                { label: 'Continue window shopping', goto: ['katjaEv', 'kathan14'] },
                { label: 'Look for something else to do', goto: ['katjaEv', 'kathan'] },
              ]);
            }
            scene.actions([
              { label: 'Prank Natasha', handler: (st: GameState) => {
    (s as any).random_event = Math.floor(Math.random() * 100) + 1;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A14', 1);
    qspCall(s, 'npc_relationship', 'modify', 'A16', (-1));
    qspCall(s, 'stat', '');
    if (((s as any).random_event ?? 0) < ((s as any).pcs_agil ?? 0)) {
      scene.img('images/characters/pavlovsk/school/girl/katja/KWS4.jpg');
      scene.text('"Okay Katja, get ready for a pic!"');
      scene.text('She raises an eyebrow, gives you a conspiratory smile and prepares her phone as you sneak up behind the unsuspecting nerd. Natasha lets out a surprised scream as her butt is exposed, along with her brightly colored thong.');
      scene.text('"Look Katja! Pink!"');
      scene.text('There is a sonorous "click" and Natasha\'s buttocks are preserved for posterity.');
      if (((s as any).NatbelQW ?? 0)?.['QWstage'] >= 8) {
        // TODO-QSP: dynamic text: "Hey! What are... <<$pcs_nickname>>?!"
        scene.text(`"Hey! What are... ${((s as any).pcs_nickname ?? 0)}?!"`);
        scene.text('Natasha\'s angry retort is cut short of blowing out as she realizes who her assailant is. Standing silently while looking between a snickering Katja and you, she quickly covers her butt. It seems like you have her well-trained. Smiling, you bend towards her and whisper into Natasha\'s ear.');
        scene.text('"What I am doing? Whatever... I... Want... Slut."');
        scene.text('The nerdy girl just looks at you with big puppy eyes and then obediently looks down. Yes, a well-trained bitch.');
      } else {
        // TODO-QSP: dynamic text: "Hey! What are you doing <<$pcs_nickname>>?!"
        scene.text(`"Hey! What are you doing ${((s as any).pcs_nickname ?? 0)}?!"`);
        scene.text('You and Katja snicker at the nerdy girl as she angrily covers her ass. She doesn\'t share in the happy moment, looking at you like she could induce spontaneous combustion with only her gaze.');
        scene.text('"What I am doing? It was just a prank, Natasha! It would have been worse if your ass wasn\'t that pretty!"');
        scene.text('The nerdy girl doesn\'t say anything. She just continues looking at you angrily. However, as a nerd, Natasha doesn\'t have the presence to really seem threatening.');
      }
      if (((s as any).hour ?? 0) >= 20) {
        scene.actions([
          { label: 'Accompany Katja back home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
        ]);
      } else {
        scene.actions([
          { label: 'Continue window shopping', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A16', (-1));
    // TODO-QSP: grupvalue[1] += 5
    // TODO-QSP: grupvalue[3] -= 5
    qspCall(st, 'mood', 'raise', 'tiny');
  }, goto: ['katjaEv', 'kathan14'] },
          { label: 'Look for something else to do', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A16', (-1));
    // TODO-QSP: grupvalue[1] += 5
    // TODO-QSP: grupvalue[3] -= 5
    qspCall(st, 'mood', 'raise', 'tiny');
  }, goto: ['katjaEv', 'kathan'] },
          { label: 'Invite Natasha to hang around with you', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A16', (-1));
    // TODO-QSP: grupvalue[1] += 5
    // TODO-QSP: grupvalue[3] -= 5
    qspCall(st, 'mood', 'raise', 'tiny');
  }, goto: ['katjaEv', 'kathan15'] },
        ]);
      }
    } else {
      scene.img('images/characters/shared/headshots_main/big16.jpg');
      scene.text('You aren\'t a ninja, and the most flagrant clue to that is the puzzled expression on Natasha\'s face as she turns towards you and slaps your extended hands as you try to expose her butt.');
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>? Katja? What are you doing?"
      scene.text(`"${((s as any).pcs_nickname ?? 0)}? Katja? What are you doing?"`);
      scene.text('Katja mouths an embarrassed "Oops!" and realization appears in Natasha\'s eyes as she peers into your dumbfounded face. Maybe she isn\'t sure what were you planning, but her steps back show a weariness towards the two of you. Now what? You turn towards Katja as her phone goes "click", followed by Katja giggling.');
      // TODO-QSP: dynamic text: "Te-he! Sorry <<$pcs_nickname>>, but you look like Wile E. Coyote!"
      scene.text(`"Te-he! Sorry ${((s as any).pcs_nickname ?? 0)}, but you look like Wile E. Coyote!"`);
      scene.text('Natasha quickly leaves the scene as Katja bursts into laughter. "Hahaha! Beep Beep! Hehehe, this is priceless!"');
      scene.text('Rolling your eyes, you grab the giggling redhead\'s hand and leave. Time to look for something else to do.');
      if (((s as any).hour ?? 0) >= 20) {
        scene.actions([
          { label: 'Accompany Katja back home', handler: (st: GameState) => {
    (st as any).mood = ((st as any).mood ?? 0) - (10);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
        ]);
      } else {
        scene.actions([
          { label: 'Continue window shopping', handler: (st: GameState) => {
    (st as any).mood = ((st as any).mood ?? 0) - (10);
  }, goto: ['katjaEv', 'kathan14'] },
          { label: 'Look for something else to do', handler: (st: GameState) => {
    (st as any).mood = ((st as any).mood ?? 0) - (10);
  }, goto: ['katjaEv', 'kathan'] },
        ]);
      }
    }
  } },
              { label: 'Invite Natasha to hang around with you', goto: ['katjaEv', 'kathan15'] },
            ]);
          }
        }
      }
    }
  }
  scene.build();
}

function enterKathan15(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'npc_relationship', 'modify', 'A14', 1);
  qspCall(s, 'npc_relationship', 'modify', 'A16', 1);
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) + (1);
  if (((s as any).pcs_chrsm ?? 0) <= 45) {
    qspCall(s, 'exp_gain', 'chrsm', 1);
  }
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/KWS12.jpg');
  if (((s as any).NatbelQW ?? 0)?.['QWstage'] >= 8) {
    scene.text('Grabbing a surprised Natasha by the hand, you pull her away from the rack towards a questioning Katja. Before reaching her, you lean in to whisper in Natasha\'s ear.');
    scene.text('"Okay slut, this is what I want. You\'ve been a good bitch lately, so I\'m going to give you a treat. That means that you\'re going to kiss our asses as Katja and I rummage through this shop\'s stock. Understood?"');
    scene.text('Natasha\'s confusion quickly evaporates and it seems that she\'s going to retort, but closes her mouth and meekly answers.');
    // TODO-QSP: dynamic text: "Yes, <<$pcs_nickname>>..."
    scene.text(`"Yes, ${((s as any).pcs_nickname ?? 0)}..."`);
    scene.text('Katja then rushes towards Natasha and literally throws her at the dressing room while somehow managing to grab a dozen or so pieces of clothing, totally ignoring your presence.');
    scene.text('"Hey, wait for me!"');
    scene.text('You don\'t know who is happier. Katja for having a life-size doll to play dress up with, or Natasha for being a life-size doll to play dress up. The spectacle takes the shop like a hurricane as you model all that is in stock.');
    scene.text('Your group even poses for some photos, but in the end, and after a great time together, it\'s time to look for something else to do.');
  } else {
    scene.text('Grabbing a surprised Natasha by the hand, you pull her away from the rack towards a questioning Katja. Before she can retort, you interrupt her with a finger to her lips.');
    scene.text('"Katja and I are assaulting this shop\'s stock and we need help! So... Come on, time to do a fashion show!"');
    scene.text('Natasha looks at you a little confused, then at Katja, and opens her mouth to retort, but closes it. After an introspection moment, she shrugs and answers.');
    scene.text('"Em... Yes... Okay."');
    scene.text('Katja rushes towards Natasha and literally throws her at the dressing room while somehow managing to grab a dozen or so pieces of clothing, totally ignoring your presence.');
    scene.text('"Hey, wait for me!"');
    scene.text('You don\'t know who is happier. Katja for having a life-size doll to play dress up with, or Natasha for being a life-size doll to play dress up. The spectacle takes the shop like a hurricane as you model all that is in stock.');
    scene.text('Your group even poses for some photos, but in the end, and after a great time together, it\'s time to look for something else to do.');
  }
  if (((s as any).hour ?? 0) >= 20) {
    scene.actions([
      { label: 'Accompany Katja back home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
    ]);
  } else {
    scene.actions([
      { label: 'Continue window shopping', goto: ['katjaEv', 'kathan14'] },
      { label: 'Look for something else to do', goto: ['katjaEv', 'kathan'] },
    ]);
  }
  scene.build();
}

function enterKathan16(s: GameState, scene: SceneBuilder): void {
  (s as any).random_event = ((((s as any).month ?? 0) >= 3  &&  ((s as any).month ?? 0) < 12) ? (Math.floor(Math.random() * 23) + 1) : (Math.floor(Math.random() * 33) + 24));
  qspCall(s, 'stat', '');
  if (((s as any).random_event ?? 0) <= 5) {
    scene.actions([{ label: 'Continue', goto: ['katjaEv', 'kathan17'] }]);
  } else {
    if (((s as any).random_event ?? 0) === 6) {
      scene.actions([{ label: 'Continue', goto: ['katjaEv', 'kathan18'] }]);
    } else {
      if (((s as any).random_event ?? 0) === 7) {
        scene.actions([{ label: 'Continue', goto: ['katjaEv', 'kathan19'] }]);
      } else {
        if (((s as any).random_event ?? 0) >= 8  &&  ((s as any).random_event ?? 0) <= 12) {
          scene.actions([{ label: 'Continue', goto: ['katjaEv', 'kathan20'] }]);
        } else {
          if (((s as any).random_event ?? 0) >= 13  &&  ((s as any).random_event ?? 0) <= 17) {
            scene.actions([{ label: 'Continue', goto: ['katjaEv', 'kathan21'] }]);
          } else {
            if (((s as any).random_event ?? 0) >= 18  &&  ((s as any).random_event ?? 0) <= 22) {
              scene.actions([{ label: 'Continue', goto: ['katjaEv', 'kathan22'] }]);
            } else {
              if (((s as any).random_event ?? 0) === 23) {
                scene.actions([{ label: 'Continue', goto: ['katjaEv', 'kathan23'] }]);
              } else {
                if (((s as any).random_event ?? 0) >= 24  &&  ((s as any).random_event ?? 0) <= 28) {
                  scene.actions([{ label: 'Continue', goto: ['katjaEv', 'kathan17'] }]);
                } else {
                  if (((s as any).random_event ?? 0) === 29) {
                    scene.actions([{ label: 'Continue', goto: ['katjaEv', 'kathan18'] }]);
                  } else {
                    if (((s as any).random_event ?? 0) === 30) {
                      scene.actions([{ label: 'Continue', goto: ['katjaEv', 'kathan19'] }]);
                    } else {
                      if (((s as any).random_event ?? 0) >= 31  &&  ((s as any).random_event ?? 0) <= 35) {
                        scene.actions([{ label: 'Continue', goto: ['katjaEv', 'kathan20'] }]);
                      } else {
                        if (((s as any).random_event ?? 0) >= 36  &&  ((s as any).random_event ?? 0) <= 40) {
                          scene.actions([{ label: 'Continue', goto: ['katjaEv', 'kathan21'] }]);
                        } else {
                          if (((s as any).random_event ?? 0) >= 41  &&  ((s as any).random_event ?? 0) <= 45) {
                            scene.actions([{ label: 'Continue', goto: ['katjaEv', 'kathan22'] }]);
                          } else {
                            if (((s as any).random_event ?? 0) === 46) {
                              scene.actions([{ label: 'Continue', goto: ['katjaEv', 'kathan23'] }]);
                            } else {
                              if (((s as any).random_event ?? 0) >= 47  &&  ((s as any).random_event ?? 0) <= 51) {
                                scene.actions([{ label: 'Continue', goto: ['katja_lake', 'playing_in_snow'] }]);
                              } else {
                                if (((s as any).random_event ?? 0) >= 52  &&  ((s as any).random_event ?? 0) <= 56) {
                                  scene.actions([{ label: 'Continue', goto: ['katja_lake', 'hockey_match'] }]);
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

function enterKathan17(s: GameState, scene: SceneBuilder): void {
  (s as any).random_event = Math.floor(Math.random() * 35) + 1;
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'npc_relationship', 'modify', 'A14', 1);
  (s as any).willpower = ((s as any).willpower ?? 0) + (Math.floor(Math.random() * 10) + 1);
  ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/KWT3.jpg');
  scene.text('Sometimes, you don\'t want to walk, carouse, dance or do "archetypical teen stuff". Sometimes, you only want to sit and, well, smell the flowers. So you look for a nice place to sit and talk about your life, school, family. You know, normal stuff, until Katja starts talking about your classmates.');
  if (((s as any).random_event ?? 0) === 1) {
    scene.text('"If there\'s a double standard that made me question why I hang around with the "It" crew, it\'s Dimka. After messing with Lavrenti\'s girlfriend, nobody questioned him! They just... laughed! I don\'t know others, but me? I\'ll be keeping him at arms length."');
  } else {
    if (((s as any).random_event ?? 0) === 2) {
      scene.text('"Don\'t laugh, but do you think that Igor would do, hm, how do I say this? Modelling for me? It\'s just that he seems... girly. Maybe it will help him with Dimka. Ehm... Forget I said anything!"');
    } else {
      if (((s as any).random_event ?? 0) === 3) {
        scene.text('"I\'ll never understand why people think that twins will act like carbon copies. Vicky and I are similar, of course, but we aren\'t that way. I\'m pretty serious and she can be a handful! Ehm... Don\'t tell her I said that or she\'ll try harder!"');
      } else {
        if (((s as any).random_event ?? 0) === 4) {
          scene.text('"Yes, I\'ll admit that Irina is pretty. She knows it, you know it, everybody knows it. But beyond that, she\'s the most cliche person in all of the gang! I\'m pretty sure she\'ll be happier if she dialed down the plastic girl act and done her own homework!"');
        } else {
          if (((s as any).random_event ?? 0) === 5) {
            scene.text('"The last time I checked, Bella was the same age as me, so that act about being an "adult" surrounded by "kids"? The sign of a very immature and insecure personality that will lead to her being used by some "adult" and end up with a "kid."');
          } else {
            if (((s as any).random_event ?? 0) === 6) {
              scene.text('"Not counting Julia, you or my sister, I would say that Sonia is by far my closest friend. Maybe I don\'t exactly approve of everything about her, let\'s say "friends", but, yes, I think we have a lot in common!"');
            } else {
              if (((s as any).random_event ?? 0) === 7) {
                scene.text('"I don\'t care what the nerds say, but Stasya is a lot more bitchy than Christina! We\'re really lucky that she ended with Andrey. Even if their current relationship seems rocky, she\'s fulfilled everyone\'s high school fantasy."');
              } else {
                if (((s as any).random_event ?? 0) === 8) {
                  scene.text('"I appreciate Lizaveta, but she just gets on my nerves sometimes! When we talk, it\'s like suffering a third-degree burn."');
                } else {
                  if (((s as any).random_event ?? 0) === 9) {
                    scene.text('"I don\'t understand all the commotion about Marcus. Yes, he\'s a nice, intelligent individual, plus he looks great in sportswear, but all that fuss because of his skin tone? It\'s looking at the trees and ignoring the forest."');
                  } else {
                    if (((s as any).random_event ?? 0) === 10) {
                      scene.text('"If I must choose, Andrey is, without a doubt, our best candidate for resident "prince charming". Dimka can go and suck a lemon."');
                    } else {
                      if (((s as any).random_event ?? 0) === 11) {
                        scene.text('"Yeah, I know! Mefody is always the life of the party, but remember the rule! Do not leave him alone with Vanya for more than five minutes!"');
                      } else {
                        if (((s as any).random_event ?? 0) === 12) {
                          scene.text('"I think Ivan has a great ass. Every girl in our class will say it."');
                        } else {
                          if (((s as any).random_event ?? 0) === 13) {
                            scene.text('"I don\'t know if you saw this film, what\'s it called? Captain America? Well, there was this guy Buck? Bully? Bucky! Yes, that was his name! Well, Fedor is Ivan\'s Bucky!"');
                          } else {
                            if (((s as any).random_event ?? 0) === 14) {
                              scene.text('"I like Svyatoslav\'s style; athletic with stone-hard abs, but there isn\'t a "feeling", we don\'t seem to "click"."');
                            } else {
                              if (((s as any).random_event ?? 0) === 15) {
                                scene.text('"Christina wants Svyatoslav? Well, she can have him! I just want to be left alone! Her friends giving me the evil eye isn\'t helping things, either!"');
                              } else {
                                if (((s as any).random_event ?? 0) === 16) {
                                  scene.text('"Why doesn\'t Albina hang around with us? I don\'t have anything against <i>most</i> jocks, but it\'s like she doesn\'t belong with them."');
                                } else {
                                  if (((s as any).random_event ?? 0) === 17) {
                                    scene.text('"Watching Veronika dancing over the ice is one of the most beautiful things I\'ve ever seen. She is, without a doubt, one of the most talented and driven individuals I will ever meet."');
                                  } else {
                                    if (((s as any).random_event ?? 0) === 18) {
                                      scene.text('"I can\'t believe some of the things I\'ve heard girls saying about Lazar. Seriously! It\'s like his ego isn\'t the only thing they want to stroke!"');
                                    } else {
                                      if (((s as any).random_event ?? 0) === 19) {
                                        scene.text('"He\'s lucky he\'s as big as he is because, with the sort of sociopaths in our school, Erast would be a target. I really, really wish for some good girl to take care of our nice demon or he\'s going to suffer a lot."');
                                      } else {
                                        if (((s as any).random_event ?? 0) === 20) {
                                          scene.text('"I don\'t remember ever seeing Vanya sad, depressed or angry. He has always been this Happy-Go-Lucky hyperactive fellow who tries to make everybody smile. I really envy my sister for being with him, but remember no matter how much he begs, never, <i>ever</i> give him a Red Bull!"');
                                        } else {
                                          if (((s as any).random_event ?? 0) === 21) {
                                            scene.text('"Artem is... nice, I guess? I mean I don\'t know. I do my own homework and don\'t deal a lot with him."');
                                          } else {
                                            if (((s as any).random_event ?? 0) === 22) {
                                              scene.text('"Sometimes, I think that Petka likes being bullied by the girls."');
                                            } else {
                                              if (((s as any).random_event ?? 0) === 23) {
                                                scene.text('"It doesn\'t seem like it, but Julia and I are old friends. Before high school, we hung around more, but beyond studies, there isn\'t much that we can do now that really attracts our mutual interest."');
                                              } else {
                                                if (((s as any).random_event ?? 0) === 24) {
                                                  scene.text('"I know it\'s hypocritical to say this, but Natasha must get all that nonsense about current fashion or being "cool" out of her head. She\'s a smart girl and getting herself a good job after graduation will grant her all of her wishes."');
                                                } else {
                                                  if (((s as any).random_event ?? 0) === 25) {
                                                    scene.text('"Zina? Who is Zina?"');
                                                  } else {
                                                    if (((s as any).random_event ?? 0) === 26) {
                                                      scene.text('"Evgeny is... weird. I\'m not sure what his problem is, but he\'s just too centered on chess. Obsessed I would say."');
                                                    } else {
                                                      if (((s as any).random_event ?? 0) === 27) {
                                                        scene.text('"There\'s this little rumor about Feofan. It seems that, after being sent to detention, he met our favorite bully and somehow, well... She deflowered him."');
                                                      } else {
                                                        if (((s as any).random_event ?? 0) === 28) {
                                                          scene.text('"Gerasim and I don\'t interact too much, but I know he\'s a pretty good student."');
                                                        } else {
                                                          if (((s as any).random_event ?? 0) === 29) {
                                                            scene.text('"I don\'t like to judge other people\'s lifestyles, but Vitek and his gang are just posing. In the end, they\'ll grow up and forget all that "gangsta" nonsense. At least, those that aren\'t outright psychopaths."');
                                                          } else {
                                                            if (((s as any).random_event ?? 0) === 30) {
                                                              scene.text('"What\'s the deal between you and Vasily? He doesn\'t look at you, let\'s say like a friend, but more like a drolling idiot that wants to worship your feet."');
                                                            } else {
                                                              if (((s as any).random_event ?? 0) === 31) {
                                                                scene.text('"Their music isn\'t exactly my style, but the band is pretty cool, and that\'s the problem! Anushka is incredibly cool with the capacity to put on clothes that our mom would burn on a stake! Why does she hang around with the gopniks?"');
                                                              } else {
                                                                if (((s as any).random_event ?? 0) === 32) {
                                                                  scene.text('"I don\'t want to talk about this, but... We failed Lavrenti. He had all the reasons in the world to hate us and I don\'t know how to fix the situation."');
                                                                } else {
                                                                  if (((s as any).random_event ?? 0) === 33) {
                                                                    scene.text('"Some men were born with luck. Some were born with grace. Lesco? He was born with neither."');
                                                                  } else {
                                                                    if (((s as any).random_event ?? 0) === 34) {
                                                                      scene.text('"Do you know Ralph Wiggum? From The Simpsons? I can\'t stop comparing Petia to him."');
                                                                    } else {
                                                                      if (((s as any).random_event ?? 0) === 35) {
                                                                        scene.text('"What? Nat? Natalia? Ehm... You know... She is... I mean... I don\'t know anything about her!"');
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
              }
            }
          }
        }
      }
    }
  }
  scene.text('Rumor-mongering, one of the greatest pleasures in life, entertains you for the next half hour.');
  if (((s as any).hour ?? 0) >= 20) {
    scene.actions([
      { label: 'Accompany Katja back home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
    ]);
  } else {
    scene.actions([
      { label: 'Continue walking and talking', goto: ['katjaEv', 'kathan16'] },
      { label: 'Look for something else to do', goto: ['katjaEv', 'kathan'] },
    ]);
  }
  scene.build();
}

function enterKathan18(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'npc_relationship', 'modify', 'A14', 1);
  ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/KWT4.jpg');
  scene.text('Katja gives you a nudge in the ribs, puts a finger over her lips and signals towards a secluded corner.');
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>, Look!"
  scene.text(`"${((s as any).pcs_nickname ?? 0)}, Look!"`);
  scene.text('Vicky and Vanya are embraced and looking towards the lake doing... nothing except enjoying their mutual company. It feels strange that the hyperactive couple can just stop and smell the flowers.');
  scene.actions([
    { label: 'Pester them', handler: (st: GameState) => {
    (s as any).random_event = Math.floor(Math.random() * 100) + 1;
    if (((s as any).random_event ?? 0) <= ((s as any).pcs_agil ?? 0)) {
      (s as any).fat = ((s as any).fat ?? 0) + (3);
      qspCall(s, 'mood', 'raise', 'large');
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (60);
      (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (30);
      (s as any).cumspclnt = 2;
      qspCall(s, 'cum_cleanup', '');
      (s as any).pcs_breath = 0;
    }
    qspCall(s, 'stat', '');
    if (((s as any).random_event ?? 0) <= ((s as any).pcs_agil ?? 0)) {
      scene.img('images/characters/pavlovsk/school/girl/katja/KWT5.jpg');
      scene.text('You give Katja a conspiratory smile. She has a moment of doubt, but then a devilish smile creeps on her face. Walking innocently, you creep towards the "innocent" couple and approach for the kill.');
      scene.text('"Vanya! Vicky! What a surprise to meet you two here! Katja and I were thinking about what to do, but now that we are reunited, we can... Mph!"');
      scene.text('Vicky\'s hand covers your mouth as the couple\'s annoyed gaze falls over you. What do you want to leave us in peace?"');
      scene.text('...');
      scene.text('...');
      scene.text('Slushies in hand, you and Katja stroll Pavlovsk\'s streets, looking for something else to do.');
      if (((s as any).hour ?? 0) >= 20) {
        scene.actions([
          { label: 'Accompany Katja back home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
        ]);
      } else {
        scene.actions([
          { label: 'Continue walking and talking', goto: ['katjaEv', 'kathan16'] },
          { label: 'Look for something else to do', goto: ['katjaEv', 'kathan'] },
        ]);
      }
    } else {
      scene.img('images/characters/pavlovsk/school/girl/katja/KWT6.jpg');
      scene.text('You give Katja a conspiratory smile. She has a moment of doubt, but then a devilish smile creeps on her face. Walking innocently, you creep towards the "innocent" couple and approach for the kill.');
      scene.text('"Katja, where have they gone?!"');
      scene.text('You and Katja look around. How did they do that?! They\'ve just... vanished!');
      scene.text('Your phone then rings with Vicky\'s number. She has sent you a video of herself sticking out her tongue.');
      scene.text('Damm, they are good! Time to look for something else to do.');
      if (((s as any).hour ?? 0) >= 20) {
        scene.actions([
          { label: 'Accompany Katja back home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
        ]);
      } else {
        scene.actions([
          { label: 'Continue walking and talking', goto: ['katjaEv', 'kathan16'] },
          { label: 'Look for something else to do', goto: ['katjaEv', 'kathan'] },
        ]);
      }
    }
  } },
    { label: 'Leave them alone', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A15', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A165', 1);
  }, goto: ['katjaEv', 'kathan'] },
  ]);
  scene.build();
}

function enterKathan19(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  (s as any).pcs_mood = ((s as any).pcs_mood ?? 0) + (10);
  qspCall(s, 'npc_relationship', 'modify', 'A14', 1);
  ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big140.jpg');
  scene.text('"Hey girls! Just a moment!"');
  scene.text('Catching your attention is a smiling Lizaveta, who, as always, is typing away on her phone. It\'s evident that the girl\'s sixth sense for gossiping has pinpointed Lizaveta towards you, and now the always eager-for-news girl is zeroing in on your position.');
  scene.text('"Time to look for something else to do?"');
  scene.text('Katja seems somewhat troubled, trapped between the need to know and the knowledge that if you aren\'t very careful, anything you tell Lizaveta will end up in everyone\'s ears.');
  scene.actions([
    { label: 'Quickly sneak away', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big140.jpg');
    scene.text('As Lizaveta hums happily to herself, you grab Katja\'s hand and sneak away, the self-absorbed scandalmonger oblivious to your actions. Time to look for something else to do.');
    if (((s as any).hour ?? 0) >= 20) {
      scene.actions([
        { label: 'Accompany Katja back home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
      ]);
    } else {
      scene.actions([
        { label: 'Continue walking and talking', goto: ['katjaEv', 'kathan16'] },
        { label: 'Look for something else to do', goto: ['katjaEv', 'kathan'] },
      ]);
    }
  } },
    { label: 'Gossip time!', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    qspCall(s, 'exp_gain', 'humint', Math.floor(Math.random() * 2) + 0);
    scene.img('images/characters/pavlovsk/school/girl/katja/KWT7.jpg');
    if ((Math.floor(Math.random() * 71) + 0) >= ((s as any).pcs_humint ?? 0)) {
      scene.text('"Don\'t worry, Katja! What\'s the worst that could happen?"');
      scene.text('Katja opens her mouth to answer, but stops and facepalms at your not exactly well-chosen words that have somehow made Lizaveta stop and turn towards you, smiling before she quickly runs towards you.');
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>, you won't believe what I just learned! You know what, forget...
      scene.text(`"${((s as any).pcs_nickname ?? 0)}, you won't believe what I just learned! You know what, forget about that! I wanted to ask you something!"`);
      scene.text('You don\'t have time to react to the girl\'s burning interest.');
      scene.text('For the next half hour, you and Lizaveta proceed to gossip about basically everything with, curiously, a progressively more silent Katja, but it ends with Lizaveta getting up.');
      scene.text('"Oh! Look at the time! Sorry, but I need to go! You know, some chores to do! So... Bye!"');
      scene.text('She turns and leaves, but not without taking her phone out to continue the gossiping online as you turn towards an embarrassed-looking Katja.');
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>! Why did you tell her those things?!"
      scene.text(`"${((s as any).pcs_nickname ?? 0)}! Why did you tell her those things?!"`);
      scene.text('You try to process what exactly was said as Katja rolls her eyes, grabs your hand and takes you away. It\'s time to look for something else to do.');
      if (((s as any).hour ?? 0) >= 20) {
        scene.actions([
          { label: 'Accompany Katja back home', handler: (st: GameState) => {
    // TODO-QSP: grupvalue[1] -= 5
    // TODO-QSP: grupvalue[2] -= 5
    // TODO-QSP: grupvalue[3] -= 5
    // TODO-QSP: grupvalue[3] -= 5
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'npc_relationship', 'modify', 'A140', 1);
  }, goto: ['pav_residential', ''] },
        ]);
      } else {
        scene.actions([
          { label: 'Continue walking and talking', handler: (st: GameState) => {
    // TODO-QSP: grupvalue[1] -= 5
    // TODO-QSP: grupvalue[2] -= 5
    // TODO-QSP: grupvalue[3] -= 5
    // TODO-QSP: grupvalue[3] -= 5
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'npc_relationship', 'modify', 'A140', 1);
  }, goto: ['katjaEv', 'kathan16'] },
          { label: 'Look for something else to do', handler: (st: GameState) => {
    // TODO-QSP: grupvalue[1] -= 5
    // TODO-QSP: grupvalue[2] -= 5
    // TODO-QSP: grupvalue[3] -= 5
    // TODO-QSP: grupvalue[3] -= 5
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'npc_relationship', 'modify', 'A140', 1);
  }, goto: ['katjaEv', 'kathan'] },
        ]);
      }
    } else {
      if ((Math.floor(Math.random() * 71) + 20) < ((s as any).pcs_persuas ?? 0)) {
        qspCall(s, 'exp_gain', 'humint', Math.floor(Math.random() * 2) + 1);
        qspCall(s, 'exp_gain', 'persuas', Math.floor(Math.random() * 2) + 1);
        scene.text('"Don\'t worry, I know how to handle Lizaveta."');
        scene.text('Katja rolls her eyes at your boast, but waits for the gossiper to end something that, knowing Lizaveta, can take a while.');
        scene.text('"Sorry! Sorry! You won\'t believe what I just learned!" Lizaveta says as she quickly approaches the two of you with a wolfish smile.');
        scene.text('"Katja and I are dying to know!" you reply as you make room for her between you and Katja.');
        scene.text('Spurred by your comment, the rumormonger begins to expose all sorts of juicy information, from the serious to the whimsical. Of course, she constantly tries to obtain information about you, but is easily distracted with carefully edited rumors of your own.');
        scene.text('In the end, Lizaveta is milked, but doesn\'t have any information that can hurt you.');
        scene.text('"Oh, look at the time! Sorry Lizaveta, but we need to go!" you say. "Katja\'s mom is waiting for us to do some chores!"');
        scene.text('Lizaveta is too busy typing on her phone on her phone to even notice as you get up and run away. It\'s time to look for something else to do.');
        if (((s as any).hour ?? 0) >= 20) {
          scene.actions([
            { label: 'Accompany Katja back home', handler: (st: GameState) => {
    // TODO-QSP: grupvalue[1] += 5
    // TODO-QSP: grupvalue[2] += 5
    // TODO-QSP: grupvalue[3] += 5
    // TODO-QSP: grupvalue[3] += 5
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'npc_relationship', 'modify', 'A140', 1);
  }, goto: ['pav_residential', ''] },
          ]);
        } else {
          scene.actions([
            { label: 'Continue walking and talking', handler: (st: GameState) => {
    // TODO-QSP: grupvalue[1] += 5
    // TODO-QSP: grupvalue[2] += 5
    // TODO-QSP: grupvalue[3] += 5
    // TODO-QSP: grupvalue[3] += 5
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'npc_relationship', 'modify', 'A140', 1);
  }, goto: ['katjaEv', 'kathan16'] },
            { label: 'Look for something else to do', handler: (st: GameState) => {
    // TODO-QSP: grupvalue[1] += 5
    // TODO-QSP: grupvalue[2] += 5
    // TODO-QSP: grupvalue[3] += 5
    // TODO-QSP: grupvalue[3] += 5
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'npc_relationship', 'modify', 'A140', 1);
  }, goto: ['katjaEv', 'kathan'] },
          ]);
        }
      } else {
        qspCall(s, 'exp_gain', 'humint', Math.floor(Math.random() * 2) + 1);
        qspCall(s, 'exp_gain', 'persuas', Math.floor(Math.random() * 2) + 0);
        scene.text('"Don\'t tell me that you aren\'t interested in whatever news Lizaveta wants to tell us?"');
        scene.text('Katja looks embarrassed, but the little smile on her lips is evident enough, so you both sit and wait patiently until Lizaveta deigns herself to talk.');
        scene.text('Looking like the cat that caught the mouse, and knowing you\'re eager for some news, Lizaveta quickly sits and begins to talk; you eat up all the juicy gossip before adding your own knowledge and rumors.');
        scene.text('You spend the next half hour gossiping, badmouthing and rumormongering until Lizaveta\'s phone starts ringing.');
        scene.text('"Shit! Sorry, but I need to go! Bye!"');
        scene.text('Lizaveta stands quickly and says goodbye. It is time to look for something else to do.');
        if (((s as any).hour ?? 0) >= 20) {
          scene.actions([
            { label: 'Accompany Katja back home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
          ]);
        } else {
          scene.actions([
            { label: 'Continue walking and talking', goto: ['katjaEv', 'kathan16'] },
            { label: 'Look for something else to do', goto: ['katjaEv', 'kathan'] },
          ]);
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterKathan20(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'npc_relationship', 'modify', 'A14', 1);
  (s as any).random_event = Math.floor(Math.random() * 19) + 1;
  ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/KWT8.jpg');
  scene.text('Being young and pretty, attracting attention is inevitable. As you walk around Pavlovsk, the boys and girls like to talk. And some <i>really</i> talk.');
  if (((s as any).random_event ?? 0) === 1) {
    scene.text('"If you were a vegetable, you\'d be a cute-cumber."');
  } else {
    if (((s as any).random_event ?? 0) === 2) {
      scene.text('"This morning, I found myself smiling uncontrollably. Then, I realized I was looking at you."');
    } else {
      if (((s as any).random_event ?? 0) === 3) {
        scene.text('"I\'ve always thought that the word “happiness” started with an “H”, but, now I see that it starts with “U”."');
      } else {
        if (((s as any).random_event ?? 0) === 4) {
          scene.text('"Millions of stars are in the sky, but you\'re the one in front of my eyes."');
        } else {
          if (((s as any).random_event ?? 0) === 5) {
            scene.text('"When I want to smile, I know exactly what to do. I\'ll just close my eyes and think about you."');
          } else {
            if (((s as any).random_event ?? 0) === 6) {
              scene.text('"Your eyes are so expressive and beautiful that I can\'t help but get lost in them."');
            } else {
              if (((s as any).random_event ?? 0) === 7) {
                scene.text('"As they say, pictures tell a thousand words. But your pictures? All I see are three words — I love you!"');
              } else {
                if (((s as any).random_event ?? 0) === 8) {
                  scene.text('"I\'m pretty sure God was trying to show off when he created you."');
                } else {
                  if (((s as any).random_event ?? 0) === 9) {
                    scene.text('"You might burst into little bits of sugar if you get any sweeter."');
                  } else {
                    if (((s as any).random_event ?? 0) === 10) {
                      scene.text('"The angel I sent to watch over you told me that angels don\'t watch over other angels."');
                    } else {
                      if (((s as any).random_event ?? 0) === 11) {
                        scene.text('"I don\'t know why, but I get butterflies in my stomach whenever I see you."');
                      } else {
                        if (((s as any).random_event ?? 0) === 12) {
                          scene.text('"All the stars in the sky are not as fascinating as those in your eyes."');
                        } else {
                          if (((s as any).random_event ?? 0) === 13) {
                            scene.text('"You shine so brightly that I might need to wear sunglasses whenever you\'re around."');
                          } else {
                            if (((s as any).random_event ?? 0) === 14) {
                              scene.text('"There\'s more than 7 billion smiles in the world, and yours are my favorite."');
                            } else {
                              if (((s as any).random_event ?? 0) === 15) {
                                scene.text('"I was going to give you a flower, but then I realized that you\'re far more beautiful than any flower I could pick."');
                              } else {
                                if (((s as any).random_event ?? 0) === 16) {
                                  scene.text('"If I had a star for every moment you crossed my mind, I would have an entire galaxy."');
                                } else {
                                  if (((s as any).random_event ?? 0) === 17) {
                                    scene.text('"You can leave me breathless all you want, but please don\'t leave me alone."');
                                  } else {
                                    if (((s as any).random_event ?? 0) === 18) {
                                      scene.text('"A day without you crawls so slow that it feels like a year. A day with you, on the other hand, runs so fast that it feels like a minute."');
                                    } else {
                                      scene.text('"Whenever you need someone to be there for you, know that I\'ll always be right there by your side."');
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
  scene.text('This is only a little example of the things boys (and some girls) say to you and Katja. It\'s utterly uplifting, but it\'s time to look for something else to do.');
  if (((s as any).hour ?? 0) >= 20) {
    scene.actions([
      { label: 'Accompany Katja back home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
    ]);
  } else {
    scene.actions([
      { label: 'Continue walking and talking', goto: ['katjaEv', 'kathan16'] },
      { label: 'Look for something else to do', goto: ['katjaEv', 'kathan'] },
    ]);
  }
  scene.build();
}

function enterKathan21(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'mood', 'lower', 'small');
  qspCall(s, 'npc_relationship', 'modify', 'A14', 1);
  (s as any).random_event = Math.floor(Math.random() * 19) + 1;
  ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/pc/reactions/disgust.jpg');
  scene.text('Being young and pretty, attracting attention is inevitable. As you walk around Pavlovsk, the boys and girls like to talk. And some <i>really</i> talk.');
  if (((s as any).random_event ?? 0) === 1) {
    scene.text('"If we fuck tonight, can my friend join in? I\'ve got to text him soon, so I need to know."');
  } else {
    if (((s as any).random_event ?? 0) === 2) {
      scene.text('"Have you got any STDs? Because I\'m as clean as a whistle."');
    } else {
      if (((s as any).random_event ?? 0) === 3) {
        scene.text('"You look like someone who was a really fat child."');
      } else {
        if (((s as any).random_event ?? 0) === 4) {
          scene.text('"I normally prefer my girlfriends more sporty than you, but you have a really pretty face."');
        } else {
          if (((s as any).random_event ?? 0) === 5) {
            scene.text('"We\'re going to have sex, right?"');
          } else {
            if (((s as any).random_event ?? 0) === 6) {
              scene.text('"I\'ll gargle with your menstruation."');
            } else {
              if (((s as any).random_event ?? 0) === 7) {
                scene.text('"With that face, you don\'t need to be intelligent."');
              } else {
                if (((s as any).random_event ?? 0) === 8) {
                  scene.text('"I don\'t care about your personality, only your lips around my cock."');
                } else {
                  if (((s as any).random_event ?? 0) === 9) {
                    scene.text('"Just my fantasy! The princess, the stable hand and the lesbian!"');
                  } else {
                    if (((s as any).random_event ?? 0) === 10) {
                      scene.text('"I know size can be daunting, but don\'t be afraid. I still love you."');
                    } else {
                      if (((s as any).random_event ?? 0) === 11) {
                        scene.text('"If you want to preserve your purity, we can always go for anal!"');
                      } else {
                        if (((s as any).random_event ?? 0) === 12) {
                          scene.text('"You can piss all over me if it means I can tap that ass."');
                        } else {
                          if (((s as any).random_event ?? 0) === 13) {
                            scene.text('"Fuck! You\'re still dressed and I\'m cumming!"');
                          } else {
                            if (((s as any).random_event ?? 0) === 14) {
                              scene.text('"So... Are you up for some DP?"');
                            } else {
                              if (((s as any).random_event ?? 0) === 15) {
                                scene.text('"Are you ignoring me? Fortunately, I want your mouth for other things."');
                              } else {
                                if (((s as any).random_event ?? 0) === 16) {
                                  scene.text('"Your mouth says no, but my cock says YES!"');
                                } else {
                                  if (((s as any).random_event ?? 0) === 17) {
                                    scene.text('"Deep inside, you\'re all cock hungry whores, so let\'s skip the foreplay."');
                                  } else {
                                    if (((s as any).random_event ?? 0) === 18) {
                                      scene.text('"Come to my bed. I promise that you\'ll never leave it."');
                                    } else {
                                      scene.text('"Hey girls, I\'m a traumatized millionaire! Want to see my dungeon?"');
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
  scene.text('This is only a little example of the things boys (and some girls) say to you and Katja. It\'s utterly disgusting, so you\'re thankful when it\'s time to look for something else to do.');
  if (((s as any).hour ?? 0) >= 20) {
    scene.actions([
      { label: 'Accompany Katja back home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
    ]);
  } else {
    scene.actions([
      { label: 'Continue walking and talking', goto: ['katjaEv', 'kathan16'] },
      { label: 'Look for something else to do', goto: ['katjaEv', 'kathan'] },
    ]);
  }
  scene.build();
}

function enterKathan22(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'npc_relationship', 'modify', 'A14', 1);
  ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) + (1);
  qspCall(s, 'stat', '');
  if ((Math.floor(Math.random() * 4) + 0) === 3  &&  ((s as any).katjaQW ?? 0)?.['slut'] >= 40  &&  ((s as any).katjaQW ?? 0)?.['QWstage'] > 2  &&  ((s as any).npc_rel ?? 0)?.['A14'] >= 80  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] < 2) {
    scene.img('images/characters/pavlovsk/school/girl/katja/KWT15.jpg');
    scene.text('Suddenly, on a little-travelled street corner, Katja turns towards you and...');
    scene.text('You grunt in surprise as she forcefully kisses your lips and merges in a warm embrace. Time stops and you can only stand there, reciprocating Katja\'s kisses with your own. Some bystander says something... Encouraging? Insulting?');
    scene.text('"Woah! That was... Wow!"');
    scene.text('She gives you a cheeky smile and grabs your hand before taking you away to look for something else to do.');
    if (((s as any).hour ?? 0) >= 20) {
      scene.actions([
        { label: 'Accompany Katja back home', handler: (st: GameState) => {
    // TODO-QSP: katjaQW['horny'] += 5
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
      ]);
    } else {
      scene.actions([
        { label: 'Continue walking and talking', handler: (st: GameState) => {
    // TODO-QSP: katjaQW['horny'] += 5
  }, goto: ['katjaEv', 'kathan16'] },
        { label: 'Look for something else to do', handler: (st: GameState) => {
    // TODO-QSP: katjaQW['horny'] += 5
  }, goto: ['katjaEv', 'kathan'] },
      ]);
    }
  } else {
    if (((s as any).katjaQW ?? 0)?.['slut'] >= 20  &&  ((s as any).katjaQW ?? 0)?.['QWstage'] > 2  &&  ((s as any).npc_rel ?? 0)?.['A14'] >= 50  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] < 2) {
      scene.img('images/characters/pavlovsk/school/girl/katja/KWT16.jpg');
      scene.text('You and Katja stand silently, observing Pavlovsk\'s landscape without too much to do or say before you feel a hand on your waist that soon slides down towards one of your pockets, where it rests snugly.');
      scene.text('Turning, you see Katja blushing, embarrassed at her display of affection until your hand reaches into her pocket.');
      scene.text('This lasts a while, the two of you oblivious to the world beyond your little happy bubble until some bystander says something... Encouraging? Insulting?');
      if (((s as any).hour ?? 0) >= 20) {
        scene.actions([
          { label: 'Accompany Katja back home', handler: (st: GameState) => {
    // TODO-QSP: katjaQW['horny'] += 5
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
        ]);
      } else {
        scene.actions([
          { label: 'Continue walking and talking', handler: (st: GameState) => {
    // TODO-QSP: katjaQW['horny'] += 5
  }, goto: ['katjaEv', 'kathan16'] },
          { label: 'Look for something else to do', handler: (st: GameState) => {
    // TODO-QSP: katjaQW['horny'] += 5
  }, goto: ['katjaEv', 'kathan'] },
        ]);
      }
    } else {
      scene.img('images/characters/pavlovsk/school/girl/katja/KWT8.jpg');
      scene.text('There isn\'t much to say or do, so you and Katja just... hang around. It\'s probably best if you find something interesting to do.');
      if (((s as any).hour ?? 0) >= 20) {
        scene.actions([
          { label: 'Accompany Katja back home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
        ]);
      } else {
        scene.actions([
          { label: 'Continue walking and talking', goto: ['katjaEv', 'kathan16'] },
          { label: 'Look for something else to do', goto: ['katjaEv', 'kathan'] },
        ]);
      }
    }
  }
  scene.build();
}

function enterKathan23(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/KWT17.jpg');
  scene.text('Your walks take you around Pavlovsk until you hear someone calling you.');
  scene.text('"Hey Katja! Over here!"');
  scene.text('Turning, you see Svyatoslav waving some distance away. Katja grabs your arm and looks around nervously for some escape route.');
  // TODO-QSP: dynamic text: "Oh no! <<$pcs_nickname>> please, you must do something!"
  scene.text(`"Oh no! ${((s as any).pcs_nickname ?? 0)} please, you must do something!"`);
  scene.text('What can you do? Svyatoslav is a jock, so running away is out of the question. Katja isn\'t going to outrun him, so what to do?');
  qspCall(s, 'willpower', 'misc', 'force', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Keep him busy so Katja can escape [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    // TODO-QSP: msg $noWillpower
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Keep him busy so Katja can escape', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'force');
    qspCall(s, 'npc_relationship', 'modify', 'A14', 5);
    qspCall(s, 'npc_relationship', 'modify', 'A8', (-5));
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/KWT17.jpg');
    if (((s as any).grupTipe ?? 0) === 2) {
      scene.text('Putting on a smile, you stride towards the approaching Svyatoslav. "Hey Svyatoslav!"');
      scene.text('As Svyatoslav tries to pass by, you grab his arm. He\'s strong, but as a sporty girl yourself, you match his strength and stop the jock\'s advance.');
      scene.text('Katja senses the opportunity and quickly escapes. "Sorry Svyatoslav, but I have things to do!"');
      scene.text('The jock tries to pry his arm away from your embrace, but before he can exert any strength, you pull him in the opposite direction.');
      scene.text('"Come on, you can talk with Katja later! I saw your last match! It was cool!"');
      scene.text('Taken aback by your performance, and not knowing how to get rid of your grip on his arm, he reluctantly follows you around until you\'re sure that Katja has gotten away.');
    } else {
      if (((s as any).grupTipe ?? 0) === 5) {
        scene.text('Smiling nervously, you unhook your arm from Katja and stride towards the approaching Svyatoslav.');
        scene.text('"Hey Svyatoslav! I..."');
        scene.text('Svyatoslav gives you an exasperated gaze. It\'s evident that a little outcast girl like you isn\'t going to stop him. At least that\'s what would happen if you were in school...');
        scene.text('"I just wanted to talk! Why are you all so mean to me?!"');
        scene.text('You then put on a show for all the people on the street. In that instant, the atmosphere changes as everyone instantly forms a dislike to the "bully" threatening you.');
        // TODO-QSP: dynamic text: "Fuck you <<$pcs_nickname>>! Why don't you go and fuck your therapist? Just leav...
        scene.text(`"Fuck you ${((s as any).pcs_nickname ?? 0)}! Why don't you go and fuck your therapist? Just leave us alone for a minute!"`);
        scene.text('"No!" you angrily answer and grab his arm. "And if you don\'t follow me, I\'ll scream about how your bullying has made me need one!"');
        scene.text('Taking advantage of your distraction, Katja quickly sneaks away, leaving you with a pissed-off Svyatoslav who, not knowing how to get rid of you without embarrassing himself, angrily follows you around Pavlovsk until you\'re sure that Katja has gotten away.');
      } else {
        scene.text('As Svyatoslav tries to pass by, you grab his arm, causing him to turn towards you. He freezes, confused at your action, but doesn\'t try to disengage. This gives a momentary distraction for Katja to sneak away.');
        scene.text('He tries to follow her, but you keep him firmly where he is, refusing to release your grip on his arm.');
        scene.text('Not knowing how to get rid of you, he reluctantly follows you around Pavlovsk until you\'re sure that Katja has gotten away.');
      }
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Try to sneak away', handler: (st: GameState) => {
    (s as any).random_event = Math.floor(Math.random() * 100) + 1;
    qspCall(s, 'stat', '');
    qspCall(s, 'exp_gain', 'prcptn', Math.floor(Math.random() * 2) + 0);
    if (((s as any).random_event ?? 0) <= ((s as any).pcs_prcptn ?? 0)) {
      qspCall(s, 'exp_gain', 'prcptn', Math.floor(Math.random() * 2) + 0);
      scene.img('images/characters/pavlovsk/school/girl/katja/KWT8.jpg');
      scene.text('You turn towards him and make a show of looking for his voice until a van passes between your line of sight.');
      scene.text('You then grab Katja and crouch. "Come on, Katja! Follow me!"');
      scene.text('You both quickly sneak behind a line of cars that covers your escape until you reach a corner from which, hidden, you observe Slavik running towards your last position and looking around, baffled.');
      scene.text('You then turn tail and run away. It\'s probably best if you find something else to do now.');
      if (((s as any).hour ?? 0) >= 20) {
        scene.actions([
          { label: 'Accompany Katja back home', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A14', 5);
    qspCall(st, 'mood', 'raise', 'tiny');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
        ]);
      } else {
        scene.actions([
          { label: 'Continue walking and talking', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A14', 5);
    qspCall(st, 'mood', 'raise', 'tiny');
  }, goto: ['katjaEv', 'kathan16'] },
          { label: 'Look for something else to do', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A14', 5);
    qspCall(st, 'mood', 'raise', 'tiny');
  }, goto: ['katjaEv', 'kathan'] },
        ]);
      }
    } else {
      scene.img('images/pc/reactions/glare.jpg');
      scene.text('Grabbing Katja\'s hand, you try to look for a distraction, but, sadly, there isn\'t one and Svyatoslav takes advantage of that, running towards you and standing in your way.');
      scene.text('"Hey Katja! Nice to meet you!"');
      scene.text('The jock gets between the two of you and starts talking to a less-than-interested Katja, somewhat ignoring your presence.');
      scene.text('"So... I\'m going to do this match with Ivan and I want you to be there, Katja. After that, we can go to see that film and..."');
      scene.text('He continues pestering Katja, stressing you both out as he tries to force her to go on a date with him.');
      scene.text('Luckily, after what feels like an eternity, Svyatoslav looks at his watch, realizes that he must do other things and <i>finally</i> walks away, leaving you both more than a little unnerved. Better look for something else to do.');
      if (((s as any).hour ?? 0) >= 20) {
        scene.actions([
          { label: 'Accompany Katja back home', handler: (st: GameState) => {
    (st as any).mood = ((st as any).mood ?? 0) - (10);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
        ]);
      } else {
        scene.actions([
          { label: 'Continue walking and talking', handler: (st: GameState) => {
    (st as any).mood = ((st as any).mood ?? 0) - (10);
  }, goto: ['katjaEv', 'kathan16'] },
          { label: 'Look for something else to do', handler: (st: GameState) => {
    (st as any).mood = ((st as any).mood ?? 0) - (10);
  }, goto: ['katjaEv', 'kathan'] },
        ]);
      }
    }
  } },
  ]);
  scene.build();
}

function enterDiscount(s: GameState, scene: SceneBuilder): void {
  (s as any).random_event = Math.floor(Math.random() * 3) + 1;
  if (((s as any).random_event ?? 0) === 1) {
    scene.actions([{ label: 'Continue', goto: ['katjaEv', 'discountcosmetics'] }]);
  } else {
    if (((s as any).random_event ?? 0) === 2) {
      scene.actions([{ label: 'Continue', goto: ['katjaEv', 'discountvitamins'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['katjaEv', 'discountlipbalm'] }]);
    }
  }
  scene.build();
}

function enterDiscountcosmetics(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/market/kosmetic.jpg');
  (s as any).tovpay = 800;
  scene.text('You and Katja explore the open-air market, chatting and having a great time until Katja excitedly signals towards a stall and quickly hauls you towards it.');
  // TODO-QSP: dynamic text: Looking at the stall, you see what's gotten her so excited; there are some cosme...
  scene.text('Looking at the stall, you see what\'s gotten her so excited; there are some cosmetics on sale for \'+$func(\'money\', \'string_price\', tovpay)+\' that soon land in her bag.');
  if (((s as any).hour ?? 0) <= 20) {
    scene.actions([
      { label: 'Buy the cosmetics [+$func(\'money\', \'get_cost_string\', tovpay...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((s as any).tovpay ?? 0)) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', ((s as any).tovpay ?? 0));
      ((s as any).mc_inventory ?? {})['cosmetics'] = (((s as any).mc_inventory ?? {})['cosmetics'] ?? 0) + (50);
      scene.actions([{ label: 'Continue', goto: ['katjaEv', 'kathan14'] }]);
    }
  } },
      { label: 'Continue window shopping', goto: ['katjaEv', 'kathan14'] },
      { label: 'Look for something else to do', goto: ['katjaEv', 'kathan'] },
    ]);
  } else {
    scene.actions([
      { label: 'Buy the cosmetics and walk Katja back home [+$func(\'money\', \'get_cost_string\', tovpay...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((s as any).tovpay ?? 0)) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', ((s as any).tovpay ?? 0));
      ((s as any).mc_inventory ?? {})['cosmetics'] = (((s as any).mc_inventory ?? {})['cosmetics'] ?? 0) + (50);
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      scene.actions([{ label: 'Continue', goto: ['pav_residential', ''] }]);
    }
  } },
      { label: 'Accompany Katja back home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
    ]);
  }
  scene.build();
}

function enterDiscountvitamins(s: GameState, scene: SceneBuilder): void {
  (s as any).tovpay = 105;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/market/vitaminki.jpg');
  scene.text('You and Katja explore the open-air market, chatting and having a great time until Katja excitedly signals towards a stall and quickly hauls you towards it.');
  // TODO-QSP: dynamic text: Looking at the stall, you see what's gotten her so excited; there are some vitam...
  scene.text('Looking at the stall, you see what\'s gotten her so excited; there are some vitamins on sale for \'+$func(\'money\', \'string_price\', tovpay)+\' that soon land in her bag.');
  if (((s as any).hour ?? 0) <= 20) {
    scene.actions([
      { label: 'Buy the vitamins [+$func(\'money\', \'get_cost_string\', tovpay...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((s as any).tovpay ?? 0)) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      ((s as any).mc_inventory ?? {})['vitamins'] = (((s as any).mc_inventory ?? {})['vitamins'] ?? 0) + (20);
      qspCall(s, 'money', 'pay', ((s as any).tovpay ?? 0));
      scene.actions([{ label: 'Continue', goto: ['katjaEv', 'kathan14'] }]);
    }
  } },
      { label: 'Continue window shopping', goto: ['katjaEv', 'kathan14'] },
      { label: 'Look for something else to do', goto: ['katjaEv', 'kathan'] },
    ]);
  } else {
    scene.actions([
      { label: 'Buy the vitamins and walk Katja back home [+$func(\'money\', \'get_cost_string\', tovpay...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((s as any).tovpay ?? 0)) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', ((s as any).tovpay ?? 0));
      ((s as any).mc_inventory ?? {})['vitamins'] = (((s as any).mc_inventory ?? {})['vitamins'] ?? 0) + (20);
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      scene.actions([{ label: 'Continue', goto: ['pav_residential', ''] }]);
    }
  } },
      { label: 'Accompany Katja back home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
    ]);
  }
  scene.build();
}

function enterDiscountlipbalm(s: GameState, scene: SceneBuilder): void {
  (s as any).tovpay = 100;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/market/balzam.jpg');
  scene.text('You and Katja explore the open-air market, chatting and having a great time until Katja excitedly signals towards a stall and quickly hauls you towards it.');
  // TODO-QSP: dynamic text: Looking at the stall, you see what's gotten her so excited; there is some lip ba...
  scene.text('Looking at the stall, you see what\'s gotten her so excited; there is some lip balm on sale for \'+$func(\'money\', \'string_price\', tovpay)+\' that soon land in her bag.');
  if (((s as any).hour ?? 0) <= 20) {
    scene.actions([
      { label: 'Buy the lip balm [+$func(\'money\', \'get_cost_string\', tovpay...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((s as any).tovpay ?? 0)) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      ((s as any).mc_inventory ?? {})['lipbalm'] = (((s as any).mc_inventory ?? {})['lipbalm'] ?? 0) + (30);
      qspCall(s, 'money', 'pay', ((s as any).tovpay ?? 0));
      scene.actions([{ label: 'Continue', goto: ['katjaEv', 'kathan14'] }]);
    }
  } },
      { label: 'Continue window shopping', goto: ['katjaEv', 'kathan14'] },
      { label: 'Look for something else to do', goto: ['katjaEv', 'kathan'] },
    ]);
  } else {
    scene.actions([
      { label: 'Buy the lip balm and walk Katja back home [+$func(\'money\', \'get_cost_string\', tovpay...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((s as any).tovpay ?? 0)) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      ((s as any).mc_inventory ?? {})['lipbalm'] = (((s as any).mc_inventory ?? {})['lipbalm'] ?? 0) + (30);
      qspCall(s, 'money', 'pay', ((s as any).tovpay ?? 0));
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      scene.actions([{ label: 'Continue', goto: ['pav_residential', ''] }]);
    }
  } },
      { label: 'Accompany Katja to her home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
    ]);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case '1':
      enter1(s, scene);
      break;
    case '2':
      enter2(s, scene);
      break;
    case 'kathan':
      enterKathan(s, scene);
      break;
    case 'kathan14':
      enterKathan14(s, scene);
      break;
    case 'kathan15':
      enterKathan15(s, scene);
      break;
    case 'kathan16':
      enterKathan16(s, scene);
      break;
    case 'kathan17':
      enterKathan17(s, scene);
      break;
    case 'kathan18':
      enterKathan18(s, scene);
      break;
    case 'kathan19':
      enterKathan19(s, scene);
      break;
    case 'kathan20':
      enterKathan20(s, scene);
      break;
    case 'kathan21':
      enterKathan21(s, scene);
      break;
    case 'kathan22':
      enterKathan22(s, scene);
      break;
    case 'kathan23':
      enterKathan23(s, scene);
      break;
    case 'discount':
      enterDiscount(s, scene);
      break;
    case 'discountcosmetics':
      enterDiscountcosmetics(s, scene);
      break;
    case 'discountvitamins':
      enterDiscountvitamins(s, scene);
      break;
    case 'discountlipbalm':
      enterDiscountlipbalm(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const katjaEv: LocationDef = {
  name: 'katjaEv',
  title: '<<$npc_firstname[\'A14\']>> <<$npc_lastname[\'A14\']>>',
  region: 'other',
  enter: enter,
};
