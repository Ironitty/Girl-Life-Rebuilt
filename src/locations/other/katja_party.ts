import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterGoingOutTalk(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  if (((s as any).hour ?? 0) < 19) {
    (s as any).katjaQW['party_location'] = 2;
  } else {
    (s as any).katjaQW['party_location'] = 2;
  }
  // TODO-QSP: dynamic text: "OK, enough just sitting around here at home. I want to go out '+iif(katjaQW['pa...
  scene.text('"OK, enough just sitting around here at home. I want to go out \'+iif(katjaQW[\'party_location\'] = 1, \'for dinner\', \'partying\')+\' tonight!" Katja says.');
  scene.text('She starts to change before you even have a chance to say anything, rummaging around in her wardrobe.');
  if (((s as any).katjaQW ?? 0)?.['party_location'] > 1) {
    scene.text('"Where do you want to go partying?" you inquire.');
    // TODO-QSP: iif(katjaQW['party_location'] = 2, 'The nightclub, downtown. It is a great place to dance,', '"Just ...
  } else {
    scene.text('"Where do you want to have dinner?" you inquire.');
    scene.text('"There\'s this small restaurant I have heard a lot about, but never tried before. Wanna try it with me?" she asks.');
  }
  if (((s as any).katjaQW ?? 0)?.['party_location'] > 1) {
    scene.actions([
      { label: 'Tell her you would rather stay here and watch a movie', handler: (st: GameState) => {
    scene.text('"Why don\'t we stay here and watch a movie instead?" you ask.');
    scene.text('"I don\'t know. I really want to go out and party tonight," Katja answers.');
    if (((s as any).npc_had_sex ?? 0)?.['A14']) {
      qspCall(s, 'willpower', 'misc', 'force', 'easy');
    } else {
      if (((s as any).katjaQW ?? 0)?.['slut'] < 50) {
        qspCall(s, 'willpower', 'misc', 'force', 'hard');
      } else {
        qspCall(s, 'willpower', 'misc', 'force');
      }
    }
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Convince Katja to stay and watch a movie [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Convince Katja to stay and watch a movie [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'force');
    (s as any).locat['katja'] = 52;
    (s as any).locat['katja_rand2'] = ((s as any).daystart ?? 0);
    (s as any).locat['katja_save2'] = ((s as any).locat ?? 0)?.['katja'];
    (s as any).katjaQW['dom'] = ((s as any).katjaQW['dom'] ?? 0) - (Math.floor(Math.random() * 2) + 1);
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/dressing_up_surprised2.jpg');
    scene.text('"But I want to have fun, just the two of us, instead of hanging out with a bunch of strangers. You can always party another night," you say.');
    scene.text('"But the party tonight should be so fun. It\'s not like there are good parties like this every night," Katja answers.');
    scene.text('"How do you know it\'s going to be fun? I\'m sure it will be boring. Please, stay with me?" you plead, trying to make puppy eyes at Katja, who has a hard time not laughing.');
    scene.text('"OK, I\'ll stay tonight," she finally relents. "Go make some popcorn while I set up my laptop."');
    scene.text('You go to the kitchen and prepare the popcorn before you both settle down on her bed and watch the film Katja has selected.');
    scene.actions([
      { label: 'Watch the movie', goto: ['katja_dorm', 'watch_movie'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Relent and go with Katja', handler: (st: GameState) => {
    if (((s as any).katjaQW ?? 0)?.['party_location'] === 2) {
      (s as any).locat['katja'] = 53;
    }
    (s as any).locat['katja_rand2'] = ((s as any).daystart ?? 0);
    (s as any).locat['katja_save2'] = ((s as any).locat ?? 0)?.['katja'];
    (s as any).katjaQW['dom'] = ((s as any).katjaQW['dom'] ?? 0) + (Math.floor(Math.random() * 2) + 2);
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'like');
    scene.text('"OK, you win. I\'ll go partying with you," you say.');
    scene.text('"Yeah, we\'re going to have so much fun," Katja says and gives you a quick hug.');
    scene.text('She finishes getting her dress on in no time and turns to you.');
    scene.actions([
      { label: 'Prepare for the night out', goto: ['katja_party', 'party_preparations'] },
    ]);
  } },
      { label: 'Tell her to have fun tonight and leave her room', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    if (((s as any).katjaQW ?? 0)?.['party_location'] === 2) {
      (s as any).locat['katja'] = 53;
    }
    (s as any).katjaQW['dom'] = ((s as any).katjaQW['dom'] ?? 0) + (Math.floor(Math.random() * 2) + 0);
    (s as any).locat['katja_rand2'] = ((s as any).daystart ?? 0);
    (s as any).locat['katja_save2'] = ((s as any).locat ?? 0)?.['katja'];
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'dislike');
  }, goto: ['uni_dorm', 'second_floor'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Agree to go with Katja', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (((s as any).katjaQW ?? 0)?.['party_location'] === 1) {
      (s as any).locat['katja'] = 36;
    } else {
      if (((s as any).katjaQW ?? 0)?.['party_location'] === 2) {
        (s as any).locat['katja'] = 53;
      }
    }
    (s as any).locat['katja_rand2'] = ((s as any).daystart ?? 0);
    (s as any).locat['katja_save2'] = ((s as any).locat ?? 0)?.['katja'];
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'like');
    qspCall(s, 'stat', '');
    scene.text('"Sounds very fun. Of course, I\'m coming with you," you say.');
    scene.text('"Yeah, we\'re going to have so much fun," Katja says and gives you a quick hug before she returns to getting dressed.');
    scene.text('She finishes getting her dress on in no time and turns to you.');
    scene.actions([
      { label: 'Prepare for the night out', goto: ['katja_party', 'party_preparations'] },
    ]);
  } },
    { label: 'Tell her to have fun tonight and leave her room', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    if (((s as any).katjaQW ?? 0)?.['party_location'] === 1) {
      (s as any).locat['katja'] = 36;
    } else {
      if (((s as any).katjaQW ?? 0)?.['party_location'] === 2) {
        (s as any).locat['katja'] = 53;
      }
    }
    (s as any).locat['katja_rand2'] = ((s as any).daystart ?? 0);
    (s as any).locat['katja_save2'] = ((s as any).locat ?? 0)?.['katja'];
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'dislike');
  }, goto: ['uni_dorm', 'second_floor'] },
  ]);
  scene.build();
}

function enterGoingOut(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  if (((s as any).hour ?? 0) < 19) {
    (s as any).katjaQW['party_location'] = 2;
  } else {
    (s as any).katjaQW['party_location'] = 2;
  }
  if (((s as any).npc_had_sex ?? 0)?.['A14']  &&  (((s as any).katjaQW ?? 0)?.['slut'] > 75  ||  ((s as any).katjaQW ?? 0)?.['pantiesQWstage'] >= 5)) {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/dressing_up_surprised1.jpg');
    scene.text('Katja has her back to you, half-dressed, seemingly in the process of putting on a dress. "Hey, Katja. What are doing?" you ask.');
    // TODO-QSP: dynamic text: She turns around with her dress just hanging around the waist of her otherwise n...
    scene.text('She turns around with her dress just hanging around the waist of her otherwise naked body. "I\'m getting dressed to go \'+iif(katjaQW[\'party_location\'] = 1, \'out to have dinner\', \' to a party\')+\'," Katja says, seemingly not bothered by being topless.');
  } else {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/dressing_up_surprised2.jpg');
    scene.text('Katja has her back to you, half-dressed, seemingly in the process of putting on a dress. "Hey, Katja. What are doing?" you ask.');
    // TODO-QSP: dynamic text: She makes a small jump and pulls up her dress before turning around. "I'm gettin...
    scene.text('She makes a small jump and pulls up her dress before turning around. "I\'m getting dressed to go \'+iif(katjaQW[\'party_location\'] = 1, \'out to have dinner\', \' to a party\')+\'," Katja says, smiling.');
  }
  if (((s as any).katjaQW ?? 0)?.['party_location'] > 1) {
    scene.text('"Where\'s the party?" you inquire.');
    // TODO-QSP: iif(katjaQW['party_location'] = 2, '"At the nightclub, downtown. It''s a great place to dance.', 'At...
  } else {
    scene.text('"Where are you going to have dinner?" you inquire.');
    scene.text('"There\'s this small restaurant I have heard a lot about, but never tried before. Wanna try it with me?" she asks.');
  }
  if (((s as any).katjaQW ?? 0)?.['party_location'] > 1) {
    scene.actions([
      { label: 'Tell her you would rather stay here and watch a movie', handler: (st: GameState) => {
    scene.text('"Why don\'t we stay in and watch a movie instead?" you ask.');
    scene.text('"I don\'t know. I really want to go out and party tonight," Katja answers.');
    if (((s as any).npc_had_sex ?? 0)?.['A14']) {
      qspCall(s, 'willpower', 'misc', 'force', 'easy');
    } else {
      if (((s as any).katjaQW ?? 0)?.['slut'] < 50) {
        qspCall(s, 'willpower', 'misc', 'force', 'hard');
      } else {
        qspCall(s, 'willpower', 'misc', 'force');
      }
    }
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Convince Katja to stay and watch a movie [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Convince Katja to stay and watch a movie [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'force');
    (s as any).locat['katja'] = 52;
    (s as any).locat['katja_rand2'] = ((s as any).daystart ?? 0);
    (s as any).locat['katja_save2'] = ((s as any).locat ?? 0)?.['katja'];
    (s as any).katjaQW['dom'] = ((s as any).katjaQW['dom'] ?? 0) - (Math.floor(Math.random() * 2) + 1);
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    if (((s as any).npc_had_sex ?? 0)?.['A14']  &&  (((s as any).katjaQW ?? 0)?.['slut'] > 75  ||  ((s as any).katjaQW ?? 0)?.['pantiesQWstage'] >= 5)) {
      scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/dressing_up_surprised1.jpg');
    } else {
      scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/dressing_up_surprised2.jpg');
    }
    scene.text('"But I want to have fun, just the two of us, instead of hanging out with a bunch of strangers. You can always party another night," you say.');
    scene.text('"But the party tonight should be so fun. It\'s not like there are good parties like this every night," Katja answers.');
    scene.text('"How do you know it\'s going to be fun? I\'m sure it will be boring. Please, stay with me?" you plead, trying to make puppy eyes at Katja, who has a hard time not laughing.');
    scene.text('"Okay, I\'ll stay tonight," she finally relents. "Go prepare some popcorn while I set up my laptop."');
    scene.text('You go to the kitchen and make the popcorn before you both settle down on her bed and watch the film Katja has selected.');
    scene.actions([
      { label: 'Watch the movie', goto: ['katja_dorm', 'watch_movie'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Relent and go with Katja', handler: (st: GameState) => {
    if (((s as any).katjaQW ?? 0)?.['party_location'] === 2) {
      (s as any).locat['katja'] = 53;
    }
    (s as any).locat['katja_rand2'] = ((s as any).daystart ?? 0);
    (s as any).locat['katja_save2'] = ((s as any).locat ?? 0)?.['katja'];
    (s as any).katjaQW['dom'] = ((s as any).katjaQW['dom'] ?? 0) + (Math.floor(Math.random() * 2) + 2);
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'like');
    scene.text('"OK, you win. I\'ll go partying with you" you say.');
    // TODO-QSP: '"Yeah, we''re going to have so much fun," Katja says and gives you a '+iif(npc_had_sex['A14'] and (...
    scene.actions([
      { label: 'Prepare for the night out', goto: ['katja_party', 'party_preparations'] },
    ]);
  } },
      { label: 'Tell her to have fun tonight and leave her room', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    if (((s as any).katjaQW ?? 0)?.['party_location'] === 2) {
      (s as any).locat['katja'] = 53;
    }
    (s as any).katjaQW['dom'] = ((s as any).katjaQW['dom'] ?? 0) + (Math.floor(Math.random() * 2) + 0);
    (s as any).locat['katja_rand2'] = ((s as any).daystart ?? 0);
    (s as any).locat['katja_save2'] = ((s as any).locat ?? 0)?.['katja'];
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'dislike');
  }, goto: ['uni_dorm', 'second_floor'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Agree to go with Katja', handler: (st: GameState) => {
    if (((s as any).katjaQW ?? 0)?.['party_location'] === 1) {
      (s as any).locat['katja'] = 36;
    } else {
      if (((s as any).katjaQW ?? 0)?.['party_location'] === 2) {
        (s as any).locat['katja'] = 53;
      }
    }
    (s as any).locat['katja_rand2'] = ((s as any).daystart ?? 0);
    (s as any).locat['katja_save2'] = ((s as any).locat ?? 0)?.['katja'];
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'like');
    scene.text('"Sounds very fun. Of course, I\'ll come," you say.');
    // TODO-QSP: '"Yeah, we''re going to have so much fun," Katja says and gives you a '+iif(npc_had_sex['A14'] and (...
    scene.actions([
      { label: 'Prepare for a night out', goto: ['katja_party', 'party_preparations'] },
    ]);
  } },
    { label: 'Tell her to have fun tonight and leave her room', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    if (((s as any).katjaQW ?? 0)?.['party_location'] === 1) {
      (s as any).locat['katja'] = 36;
    } else {
      if (((s as any).katjaQW ?? 0)?.['party_location'] === 2) {
        (s as any).locat['katja'] = 53;
      }
    }
    (s as any).locat['katja_rand2'] = ((s as any).daystart ?? 0);
    (s as any).locat['katja_save2'] = ((s as any).locat ?? 0)?.['katja'];
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'dislike');
  }, goto: ['uni_dorm', 'second_floor'] },
  ]);
  scene.build();
}

function enterPartyPreparations(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  if (((s as any).katjaQW ?? 0)?.['party_location'] === 2) {
    (s as any).locat['katja'] = 53;
  }
  (s as any).locat['katja_rand2'] = ((s as any).daystart ?? 0);
  (s as any).locat['katja_save2'] = ((s as any).locat ?? 0)?.['katja'];
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/dressing_up_surprised\'+iif(npc_had_sex[\'A14\'] and (katjaQW[\'slut\'] > 75 or katjaQW[\'pantiesQWstage\'] >= 5), \'1\', \'2\')+\'.jpg');
  scene.text('"I need to finish prepping. I still need to do my makeup," Katja says as she starts moving around.');
  scene.text('"Let me see how you look," Katja says, stopping and turning around to look at you.');
  qspCall(s, 'katja_party', 'part_dress_check');
  scene.build();
}

function enterPartyLookApproval(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/dressing_up_surprised2.jpg');
  scene.text('You show yourself to Katja again. "OK. Let\'s see how you look now," she says and takes a good look at you.');
  qspCall(s, 'katja_party', 'part_dress_check');
  scene.build();
}

function enterPartDressCheck(s: GameState, scene: SceneBuilder): void {
  if (((s as any).katjaQW ?? 0)?.['party_location'] === 2) {
    if (((s as any).pcs_sweat ?? 0) >= 50) {
      scene.text('Katja just whiffs her nose. "You need to shower first," she says. "You can use the shower on our floor. Here is a towel and some supplies," Katja adds, handing you a towel and a not-so-small bag of shower utilities.');
      scene.actions([
        { label: 'Go take a shower', handler: (st: GameState) => {
    // TODO-QSP: noshampoo + 1
    qspCall(s, 'din_van', 'showerdin');
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.img('images/shared/home/bathroom/dush.mp4');
    scene.text('You go out of Katja\'s room and find the shower. There are plenty available, and you make sure to clean yourself thoroughly since Katja seems to have an excellent nose for sweat.');
    if (((s as any).mc_inventory ?? 0)?.['deodorant'] > 0) {
      scene.actions([
        { label: 'Add deodorant and go back to Katja', handler: (st: GameState) => {
    (s as any).mc_inventory['deodorant'] = ((s as any).mc_inventory['deodorant'] ?? 0) - (1);
    qspCall(s, 'sweat', 'deo');
  }, goto: ['katja_party', 'party_look_approval'] },
      ]);
    }
    scene.actions([
      { label: 'Go back to Katja', goto: ['katja_party', 'party_look_approval'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).PCloSkirt ?? 0) <= 2  &&  ((s as any).PCloPants ?? 0) <= 4  &&  ((s as any).PCloPanties ?? 0) === 0  &&  (((s as any).clothingworntype ?? 0) !== 'salacious_dress'  &&  ((s as any).clothingworntype ?? 0) !== 'salacious_outfits')  &&  ((s as any).katjaQW ?? 0)?.['changed_for_katja'] < ((s as any).daystart ?? 0)) {
        (s as any).katjaQW['changed_for_katja'] = ((s as any).daystart ?? 0);
        scene.text('"I\'m sorry, but they have a dress code at the nightclub. So you need to wear a skirt or dress. Maybe some very short shorts or other extremely provocative outfit will also get you in," Katja says.');
        scene.actions([
          { label: 'Get changed', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
  }, goto: ['wardrobe', 'start'] },
        ]);
      } else {
        if (((s as any).PCloSkirt ?? 0) <= 2  &&  ((s as any).PCloPants ?? 0) <= 4  &&  ((s as any).PCloPanties ?? 0) === 0  &&  (((s as any).clothingworntype ?? 0) !== 'salacious_dress'  &&  ((s as any).clothingworntype ?? 0) !== 'salacious_outfits')) {
          scene.text('"Still not good enough! Find something else, or we won\'t be allowed in!" Katja says, seemingly a little disappointed in your inability to pick a proper dress.');
          scene.actions([
            { label: 'Get changed again', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
  }, goto: ['wardrobe', 'start'] },
            { label: 'Tell her that you don\'t own anything up to the club\'s standards', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    if (((s as any).katjaQW ?? 0)?.['dress_borrowed'] === 1) {
      scene.text('"Don\'t you still have the dress I loaned you last time?" Katja asks.');
      scene.text('"That\'s right! I\'ll go get that," you answer and run out of the room to get Katja\'s dress.');
    } else {
      (s as any).katjaQW['dress_borrowed'] = 1;
      scene.text('"Just a moment," Katja says and runs to her wardrobe and starts rummaging through it. A short while later, she pulls out a dress. "Here, this should fit you. You can borrow it for tonight," she says as she hands you a pretty nice dress.');
    }
    scene.actions([
      { label: 'Wear Katja\'s dress', handler: (st: GameState) => {
    qspCall(s, 'clothing', 'wear', 'fashionista_dress', 196);
  }, goto: ['katja_party', 'party_look_approval'] },
    ]);
  } },
          ]);
        } else {
          if ((((s as any).PCloQuality ?? 0) < 5  ||  ((s as any).PCloBimbo ?? 0) === 1)  &&  ((s as any).katjaQW ?? 0)?.['recjected_katja_demand_for_better_clothes'] < ((s as any).daystart ?? 0)) {
            scene.text('"OK. They\'ll let you in the club, but don\'t you have something a little nicer?" Katja says, trying to be as polite as possible.');
            scene.actions([
              { label: 'Get changed again', handler: (st: GameState) => {
    (s as any).katjaQW['dom'] = ((s as any).katjaQW['dom'] ?? 0) + (Math.floor(Math.random() * 3) + 1);
    (s as any).minut = ((s as any).minut ?? 0) + 10;
  }, goto: ['wardrobe', 'start'] },
              { label: 'Tell her that you think this looks good', handler: (st: GameState) => {
    (s as any).katjaQW['recjected_katja_demand_for_better_clothes'] = ((s as any).daystart ?? 0);
    (s as any).katjaQW['dom'] = ((s as any).katjaQW['dom'] ?? 0) - (Math.floor(Math.random() * 3) + 2);
    scene.text('"Well. I like this dress very much," you tell Katja, who becomes very red in her face.');
    scene.text('"Y-yes, of course. It\'s very nice. I don\'t know what I was thinking. Something must be in my eye so I did not get a proper look," she says quickly, clearly embarrassed and afraid she offended you.');
    scene.actions([
      { label: 'Continue', goto: ['katja_party', 'party_look_approval'] },
    ]);
  } },
            ]);
          } else {
            if (((s as any).pcs_makeup ?? 0) < 2) {
              scene.text('"Lastly, we need to fix your makeup. Let me do it," Katja says before taking out her makeup kit, clearly not allowing you to deny her the fun of dolling you up. "How would you like your makeup?" she asks.');
              (s as any).pcs_hairbsh = 1;
              (s as any).minut = ((s as any).minut ?? 0) + 10;
              scene.actions([
                { label: 'Light touch-up', handler: (st: GameState) => {
    (s as any).pcs_makeup = 2;
    scene.text('Katja subtly applies some neutral tones, with a light application of makeup to bring out your natural beauty.');
    if (((s as any).katjaQW ?? 0)?.['QWstage'] > 2) {
      (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (5*(1 + ((s as any).npc_had_sex ?? {})?.['A14']));
      scene.text('Katja suddenly becomes aware that she is staring into your eyes and blushes.');
    }
    scene.actions([
      { label: 'Thank Katja for the makeup', goto: ['katja_party', 'party_look_approval'] },
    ]);
  } },
                { label: 'Normal make-up', handler: (st: GameState) => {
    (s as any).pcs_makeup = 3;
    scene.text('Katja applies some mildly vibrate tones and colors of makeup to cover your minor imperfections and enhance your best features.');
    if (((s as any).katjaQW ?? 0)?.['QWstage'] > 2) {
      (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (5*(1 + ((s as any).npc_had_sex ?? {})?.['A14']));
      scene.text('Katja suddenly becomes aware that she is staring into your eyes and blushes.');
    }
    scene.actions([
      { label: 'Thank Katja for the makeup', goto: ['katja_party', 'party_look_approval'] },
    ]);
  } },
                { label: 'Heavy make-up', handler: (st: GameState) => {
    (s as any).pcs_makeup = 4;
    scene.text('Katja applies some deeper, richer shades of makeup that are thick enough to cover most imperfections while drawing attention to your eyes and lips.');
    if (((s as any).katjaQW ?? 0)?.['QWstage'] > 2) {
      (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (5*(1 + ((s as any).npc_had_sex ?? {})?.['A14']));
      scene.text('Katja suddenly becomes aware that she is staring into your eyes and blushes.');
    }
    scene.actions([
      { label: 'Thank Katja for the makeup', goto: ['katja_party', 'party_look_approval'] },
    ]);
  } },
              ]);
            } else {
              // TODO-QSP: dynamic text: "You look '+iif(PCloQuality > 4, 'perfect', 'good')+'," Katja says.
              scene.text('"You look \'+iif(PCloQuality > 4, \'perfect\', \'good\')+\'," Katja says.');
              scene.text('"OK, enough about me. Show me how you look," you ask Katja.');
              scene.actions([
                { label: 'Katja shows off her look', goto: ['katja_party', 'party_preparations_final'] },
              ]);
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterPartyPreparationsFinal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/dressing_up_show_of_front_descent.jpg');
  scene.text('Katja stands straight up, showing off her elegant blue dress, with a rather short hemline and an ample amount of cleavage, showing a lot of skin.');
  // TODO-QSP: dynamic text: "What do you think, <<$pcs_nickname>>?" she asks.
  scene.text(`"What do you think, ${((s as any).pcs_nickname ?? 0)}?" she asks.`);
  scene.text('"I don\'t know. Show me some more," you say with a wink.');
  scene.actions([
    { label: 'Continue the show', handler: (st: GameState) => {
    if (((s as any).npc_had_sex ?? 0)?.['A14']  &&  (Math.floor(Math.random() * 2) + 0) === 0  &&  (((s as any).katjaQW ?? 0)?.['slut'] > 99  ||  ((s as any).katjaQW ?? 0)?.['pantiesQWstage'] > 4)) {
      (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 5);
      scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/dressing_up_show_of_front_lewd.jpg');
      scene.text('Katja lifts her left leg and puts her foot on the chair, letting her dress crawl up so it would give a nice view of her panties - if she were wearing any. Instead, you get a view of her smoothly shaved pussy lips.');
      scene.text('"What about this?" Katja asks.');
      // TODO-QSP: dynamic text: "Nice, very nice. So you aren't wearing panties to the '+iif(locat['katja'] = 53...
      scene.text('"Nice, very nice. So you aren\'t wearing panties to the \'+iif(locat[\'katja\'] = 53, \'club\', \'party\')+\' tonight?" you ask.');
      scene.text('"I\'m not wearing panties right now. Whether I will wear some later is for you to find out," she answers.');
      scene.text('"But enough of this. I need to use the bathroom before we leave. Wait for me here," she says and takes her purse before heading out.');
      scene.actions([
        { label: 'Wait for Katja', goto: ['katja_party', 'party_heading_out'] },
      ]);
    } else {
      scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/dressing_up_show_of_side_descent.jpg');
      scene.text('Katja lifts her right leg and puts her foot on the chair, turning her side towards you. Her dress crawls up and barely leaves anything to the imagination.');
      scene.text('"What about this?" Katja asks.');
      scene.text('"Very nice. You will definitely be turning heads tonight."');
      scene.actions([
        { label: 'Ask her to show some more', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/dressing_up_show_of_side_lewd..jpg');
    scene.text('"You naughty girl," Katja says, but lifts up her skirt and reveals her smoothly shaven pussy. "Is this good enough for you?" she asks.');
    // TODO-QSP: dynamic text: "Perfect. So you're not wearing panties to the '+iif(locat['katja'] = 53, 'club'...
    scene.text('"Perfect. So you\'re not wearing panties to the \'+iif(locat[\'katja\'] = 53, \'club\', \'party\')+\' tonight?" you ask.');
    if (((s as any).katjaQW ?? 0)?.['pantiesQWstage'] >= 5  ||  (((s as any).katjaQW ?? 0)?.['slut'] >= 100  &&  (Math.floor(Math.random() * 2) + 0) ===0)) {
      scene.text('"I\'m not wearing panties right now. Whether I will wear some later is for you to find out," she answers.');
    } else {
      scene.text('"No, of course I will wear panties. In fact I\'ll put them on right now," Katja says, grabbing a thong and putting it on.');
    }
    scene.text('"But enough of this. I need to use the bathroom before we leave. Wait for me here," she says and takes her purse before heading out.');
    scene.actions([
      { label: 'Wait for Katja', goto: ['katja_party', 'party_heading_out'] },
    ]);
  } },
        { label: 'Get ready to head out', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "We're going to be the stars of the '+iif(locat['katja'] = 53, 'club', 'party')+...
    scene.text('"We\'re going to be the stars of the \'+iif(locat[\'katja\'] = 53, \'club\', \'party\')+\' tonight," Katja says.');
    scene.text('"Yes, we are," you reply.');
    scene.text('"But enough of this. I need to use the bathroom before we leave. Wait for me here," she says and takes her purse before heading out.');
    scene.actions([
      { label: 'Wait for Katja', goto: ['katja_party', 'party_heading_out'] },
    ]);
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterPartyHeadingOut(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/dressing_up_surprised2.jpg');
  scene.text('After a few minutes, Katja comes back from the bathroom.');
  if (((s as any).katjaQW ?? 0)?.['coke_stage'] >= (Math.floor(Math.random() * 3) + 5)  &&  ((s as any).katjaQW ?? 0)?.['coke_day'] !== ((s as any).daystart ?? 0)) {
    scene.text('Katja goes to a drawer and pulls out a small bag with white powder. "Look what I have here. Why don\'t we start the party with a little coke first?" she asks.');
    qspCall(s, 'willpower', 'drugs', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Say no to the drugs [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Say no to the drugs [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('"I don\'t think it\'s a good idea. I think it\'s better to have a clear head tonight," you say.');
    scene.text('"You\'re boring," Katja says "Maybe we\'ll meet somebody tonight that is more fun. Let\'s go."');
    scene.actions([
      { label: 'Go to the metro', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['katja_city', 'metro'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Do some lines with Katja', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 8;
    qspCall(s, 'drugs', 'cocaine', 1);
    qspCall(s, 'katja_procedural', 'take_cocaine');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/joint_coke.jpg');
    scene.text('"OK, Katja. Let\'s do it together," you say.');
    scene.text('"Yes. That\'s the spirit," she replies. She then prepares some lines for the two of you and finds some tubes to use to snort the cocaine.');
    scene.text('You both put your tubes to your nostrils and lower your heads to the table and snort your lines.');
    scene.text('After a moment, it hits you both. You feel wonderful while Katja just sits there with wide-open eyes. She starts giggling, which turns into a laugh that lasts for some time.');
    scene.text('After a few minutes more, you\'re ready to leave.');
    scene.actions([
      { label: 'Go to the metro', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['katja_city', 'metro'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).katjaQW ?? 0)?.['coke_stage'] >= (Math.floor(Math.random() * 4) + 4)  &&  ((s as any).katjaQW ?? 0)?.['coke_day'] !== ((s as any).daystart ?? 0)) {
      // TODO-QSP: '"You know, <<$pcs_nickname>>. We sometimes take some cocaine when we are partying. If you have any,...
      if (((s as any).mc_inventory ?? 0)?.['cocaine'] < 2) {
        // TODO-QSP: dynamic text: "I don't have ' + iif(mc_inventory['cocaine'] = 1, 'enough for both of us', 'any...
        scene.text('"I don\'t have \' + iif(mc_inventory[\'cocaine\'] = 1, \'enough for both of us\', \'any\')+\'," you say.');
        scene.text('"No problem. Maybe we\'ll meet somebody that does," Katja says. "Let\'s go."');
        scene.actions([
          { label: 'Go to the metro', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['katja_city', 'metro'] },
        ]);
      } else {
        qspCall(s, 'willpower', 'drugs', 'resist');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Tell Katja that you don\'t want to take drugs right now [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Tell Katja that you don\'t want to take drugs right now [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('"I don\'t think it\'s a good idea. I think it\'s better to have a clear head tonight," you say.');
    scene.text('"You\'re boring," Katja says. "Maybe we\'ll meet somebody tonight that\'s more fun. Let\'s go."');
    scene.actions([
      { label: 'Go to the metro', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['katja_city', 'metro'] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Do some lines with Katja', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 8;
    (s as any).mc_inventory['cocaine'] = ((s as any).mc_inventory['cocaine'] ?? 0) - (1);
    qspCall(s, 'drugs', 'cocaine');
    qspCall(s, 'katja_procedural', 'take_cocaine');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/joint_coke.jpg');
    scene.text('"I do have enough for the two of us. So let\'s have some fun before we leave," you say.');
    scene.text('"Yes. That\'s the spirit," she replies. You then prepare some lines for the two of you and find some tubes to use to snort the cocaine.');
    scene.text('You both put your tubes to your nostrils and lower your heads to the table and snort your lines.');
    scene.text('After a moment, it hits you both. You feel wonderful while Katja just sits there with wide-open eyes. She starts giggling, which turns into a laugh that lasts for some time.');
    scene.text('After a few minutes more, you\'re ready to leave.');
    scene.actions([
      { label: 'Go to the metro', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['katja_city', 'metro'] },
    ]);
  } },
        ]);
      }
    } else {
      if (((s as any).mc_inventory ?? 0)?.['cocaine'] >= 2  &&  ((s as any).katjaQW ?? 0)?.['coke_stage'] >= 0) {
        scene.actions([
          { label: 'Suggest you do a couple of lines of cocaine before you go', handler: (st: GameState) => {
    if (((s as any).katjaQW ?? 0)?.['coke_stage'] === 0) {
      if (((s as any).drugVars ?? 0)?.['cocaine_used'] === 0) {
        scene.text('"You know, Katja. I\'ve got some cocaine, and I wanted to try it. Why don\'t we try it together?" you ask.');
        scene.text('"You want us to do drugs?!" Katja exclaims, clearly shocked at your proposal "What has gotten into you. We can\'t do that!" she continues.');
        if (qspFunc(s, 'katja_procedural', 'willing_to_be_naughty') < 100) {
          qspCall(s, 'willpower', 'drugs', 'force', 'hard');
        } else {
          qspCall(s, 'willpower', 'drugs', 'force');
        }
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Convince Katja to try cocaine [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Convince Katja to try cocaine [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 4;
    qspCall(s, 'willpower', 'pay', 'force');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/dressing_up_surprised2.jpg');
    scene.text('"Come on, Katja. Don\'t be so uptight. Everybody does it," you say.');
    scene.text('"But it\'s dangerous. We have no idea what we\'re doing," Katja counters.');
    scene.text('"I know what I\'m doing. Trust me, you won\'t be in danger. Let\'s just try it, it\'ll be fine," you say.');
    scene.text('"But look at all the people that get in trouble because of drugs!" Katja continues.');
    scene.text('"Come on, Katja. You don\'t become an addict by just trying it once. I thought you were smart. Let\'s just try it once; if we feel bad, we\'ll never do it again," you say.');
    scene.text('"I don\'t know. I\'m still not sure it\'s something we should do," Katja says.');
    scene.text('"Come on! Just once. Please?" you plead as you try to make your best puppy eyes.');
    scene.text('"OK… Just once," Katja finally relents.');
    scene.text('"I knew I could count on you!" you say.');
    scene.actions([
      { label: 'Take the drugs', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 8;
    qspCall(s, 'katja_procedural', 'take_cocaine');
    (s as any).mc_inventory['cocaine'] = ((s as any).mc_inventory['cocaine'] ?? 0) - (1);
    qspCall(s, 'drugs', 'cocaine');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/joint_coke.jpg');
    scene.text('You clear the table and make some lines of cocaine like you were instructed to. You find some tubes for you and Katja to use and explain to her how to do it.');
    scene.text('With a shaking hand, Katja takes the tube and places it at her nostril. As you bend down to the line of cocaine that you prepared, she slowly follows.');
    scene.text('You both slowly start snorting it. Katja jerks her head back when the powder starts to irritate her nose, which also makes you stop. "Do it, faster. All at once!" you tell her, and she gets down again, still shaking and gets ready.');
    scene.text('This times she follows you and you snort it all in one go, and raise your head from the table. The powder irritates your nostrils and it\'s obvious that Katja feels the same, as she looks like she is about to sneeze. "Don\'t sneeze! Keep it in!" you tell her, and Katja moves her hand to her nose to prevent it from coming out.');
    scene.text('After a moment, her discomfort resides and she starts to talk. "I don\'t feel anything, except itching in my nose. I do-" Then it hits her, she stops mid-sentence and her eyes become wide open. "Wow!" is all she can say.');
    scene.text('That\'s also when it hits you, and everything suddenly feels great. Katja sits there with a dreamy stare, then she starts giggling, which turns into a laugh that lasts for some time.');
    scene.text('After some minutes, you both come down. "So how was it?" you ask.');
    scene.text('"Well, it wasn\'t so bad," she replies.');
    scene.text('"Come on, Katja. It was great!" you say.');
    scene.text('"Well, I\'ll admit it was an interesting experience. But let\'s get going," Katja answers, making it clear you won\'t get her to admit to more.');
    scene.actions([
      { label: 'Go to the metro', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['katja_city', 'metro'] },
    ]);
  } },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Drop the idea', handler: (st: GameState) => {
    scene.text('"Yeah. It was a stupid idea. Let\'s head out," you say.');
    scene.text('"OK, let\'s go," Katja replies.');
    scene.actions([
      { label: 'Go to the metro', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['katja_city', 'metro'] },
    ]);
  } },
        ]);
      } else {
        scene.text('"So I have this," you say, pulling out your small bag of cocaine. "I think we should try some before head out."');
        scene.text('"What\'s that?" Katja asks, looking confused.');
        scene.text('"It\'s coke," you tell her.');
        scene.text('"What?! You do drugs?!" Katja exclaims, shocked.');
        // TODO-QSP: dynamic text: "'+iif(drugVars['cocaine_used'] < 5, 'I've tried it a couple of times.', 'Sure I...
        scene.text('"\'+iif(drugVars[\'cocaine_used\'] < 5, \'I\'ve tried it a couple of times.\', \'Sure I do.\')+\' It\'s fun," you reply.');
        scene.text('"I didn\'t know that about you," Katja says, still surprised.');
        scene.text('"Well, do you want to try?" you ask.');
        scene.text('"No way," Katja says.');
        scene.text('"Come on. I\'ll do some lines first so you can see how it\'s done, and then it\'ll be your turn," you tell her.');
        scene.text('"Suit yourself, but I\'m not doing that," she says, defiantly.');
        qspCall(s, 'willpower', 'drugs', 'resist');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Drop the idea [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Drop the idea [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'willpower', 'pay', 'force');
    qspCall(s, 'stat', '');
    scene.text('"Well if you really don\'t want to, then let\'s just head out," you say.');
    scene.text('"OK, let\'s go," Katja replies.');
    scene.actions([
      { label: 'Go to the metro', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['katja_city', 'metro'] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Do some lines', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'drugs', 'cocaine');
    qspCall(s, 'stat', '');
    scene.img('images/shared/drugs/cocaine.jpg');
    scene.text('You open your bag and make some lines on the table before taking a tube and snorting the first line, then the second. Katja looks at you with wide open eyes.');
    scene.text('After a short moment, it hits you and you feel the full effect of the drug. "Damn, that was good!" you exclaim, as you come down a little.');
    scene.text('You try to hand Katja the tube, "Your turn."');
    scene.text('She\'s still looking at you, like she doesn\'t believe what just happened.');
    scene.text('"I don\'t do drugs. I\'ve never done it before," she says, suddenly snapping out of her daze.');
    if (qspFunc(s, 'katja_procedural', 'willing_to_be_naughty') < 100) {
      qspCall(s, 'willpower', 'drugs', 'force', 'hard');
    } else {
      qspCall(s, 'willpower', 'drugs', 'force');
    }
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Convince Katja to try cocaine [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Convince Katja to try cocaine [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 8;
    qspCall(s, 'willpower', 'pay', 'force');
    (s as any).mc_inventory['cocaine'] = ((s as any).mc_inventory['cocaine'] ?? 0) - (1);
    qspCall(s, 'katja_procedural', 'take_cocaine');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/katja_cocaine2.jpg');
    scene.text('"Come on, Katja. Just try it. It won\'t harm you," you say, but Katja still looks skeptical.');
    // TODO-QSP: dynamic text: "I don't know, <<$pcs_nickname>>. I'm not sure it's a good idea. I don't think i...
    scene.text(`"I don't know, ${((s as any).pcs_nickname ?? 0)}. I'm not sure it's a good idea. I don't think it's for me," she replies.`);
    scene.text('"You won\'t know unless you try it. See, we are both fine," you continue.');
    scene.text('"I\'m still not sure. Why should I do it?" she asks.');
    scene.text('"Because it feels great. You can\'t say it\'s not for you until you actually know how it feels," you say.');
    scene.text('"OK," Katja finally relents. With a shaky hand, she takes the tube. She then places it at her nostril and slowly bends down so the other end is at the line of cocaine that you prepared for her.');
    scene.text('She slowly starts snorting it but jerks her head back when the powder starts to irritate her nose. "Do it, faster. All at once!" you tell her, and she gets down again, still shaking and gets ready.');
    scene.text('This time, she snorts it all in one go, and raises her head from the table. It\'s obvious that the powder irritates her nostrils and she looks like she is about to sneeze. "Don\'t sneeze! Keep it in!" you tell her, and Katja moves her hand to her nose to prevent it from coming out.');
    scene.text('After a moment, her discomfort resides and she starts to talk. "I don\'t feel anything, except itching in my nose. I do-" Then it hits her, she stops mid-sentence and her eyes become wide open. "Wow!" is all she can say.');
    scene.text('"See? I told you it would feel great!" you say.');
    scene.text('Katja just replies with a dreamy stare, then she starts giggling, which turns into a laugh that lasts for some time.');
    scene.text('After some minutes, you both come down. "So how was it?" you ask.');
    scene.text('"Well, it wasn\'t so bad," she replies.');
    scene.text('"Come on, Katja. It was great!" you say.');
    scene.text('"Well, I\'ll admit it was an interesting experience. But let\'s get going," Katja answers, making it clear you won\'t get her to admit to more.');
    scene.actions([
      { label: 'Go to the metro', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['katja_city', 'metro'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Don\'t push Katja', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    scene.text('"It\'s fine if you don\'t want to," you say. She seems relieved. You clean up the drugs and you head out.');
    scene.actions([
      { label: 'Go to the metro', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['katja_city', 'metro'] },
    ]);
  } },
    ]);
  } },
        ]);
      }
    } else {
      if (((s as any).katjaQW ?? 0)?.['coke_stage'] < 3) {
        scene.text('"So, I have some coke - enough for both of us. Want to do some before leaving?" you ask Katja and pull out a small bag of cocaine.');
        // TODO-QSP: dynamic text: "No. I don't wanna," Katja says, looking like she'+iif(katjaQW['coke_stage'] = 2...
        scene.text('"No. I don\'t wanna," Katja says, looking like she\'+iif(katjaQW[\'coke_stage\'] = 2, \'s almost ready\', \' needs some convincing\')+\' to say yes.');
        if (((s as any).katjaQW ?? 0)?.['coke_stage'] === 2) {
          qspCall(s, 'willpower', 'drugs', 'force', 'easy');
        } else {
          qspCall(s, 'willpower', 'drugs', 'force');
        }
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Convince Katja to do some lines with you [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Convince Katja to do some lines with you [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 8;
    if (((s as any).katjaQW ?? 0)?.['coke_stage'] === 2) {
      qspCall(s, 'willpower', 'drugs', 'force', 'easy');
    } else {
      qspCall(s, 'willpower', 'drugs', 'force');
    }
    qspCall(s, 'willpower', 'pay', 'force');
    qspCall(s, 'drugs', 'cocaine');
    (s as any).mc_inventory['cocaine'] = ((s as any).mc_inventory['cocaine'] ?? 0) - (1);
    qspCall(s, 'katja_procedural', 'take_cocaine');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/joint_coke.jpg');
    scene.text('"Come on, Katja. Let\'s do it together," you say and start cleaning the table.');
    // TODO-QSP: dynamic text: She still looks skeptical. "I don't know, <<$pcs_nickname>>. I'm not sure it's a...
    scene.text(`She still looks skeptical. "I don't know, ${((s as any).pcs_nickname ?? 0)}. I'm not sure it's a good idea," she replies.`);
    scene.text('"You liked it last time! it will be fine this time, too," you continue.');
    // TODO-QSP: dynamic text: "I'm not sure. '+iif(katjaQW['coke_stage'] = 2, 'I don't want it to become a hab...
    scene.text('"I\'m not sure. \'+iif(katjaQW[\'coke_stage\'] = 2, \'I don\'t want it to become a habit\', \'I think the last time was enough for me\')+\'," she says.');
    scene.text('"Don\'t be such a bore. You know you will love it," you say.');
    scene.text('Katja finally relents. "OK. Let\'s do it, together," she says.');
    scene.text('You prepare some lines and produce some tubes to snort it with and hand one of them to Katja, who takes it with unsteady hands. You both lower your heads to the table.');
    // TODO-QSP: 'Then at the same time, you snort your lines. Katja '+iif(katjaQW['coke_stage'] = 2, 'has gotten use...
    scene.text('After a moment, it hits you both. You feel wonderful while Katja just sits there with wide-open eyes. Then she starts giggling, which turns into a laugh that lasts for some time.');
    scene.text('After some minutes, you both come down and get ready to go partying.');
    scene.actions([
      { label: 'Go to the metro', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['katja_city', 'metro'] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Drop the idea', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.text('"Well, if you really don\'t want to, then let\'s just head out," you say.');
    // TODO-QSP: '"OK, let''s go," Katja replies, looking '+iif(katjaQW['coke_stage'] = 2, 'a little disappointed.', ...
    scene.actions([
      { label: 'Go to the metro', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['katja_city', 'metro'] },
    ]);
  } },
        ]);
      } else {
        if (((s as any).katjaQW ?? 0)?.['coke_stage'] < 5) {
          scene.text('"So, I have some coke, enough for both of us. Want to do some before leaving?" you ask Katja and pull out a small bag of cocaine.');
          // TODO-QSP: '"Yeah. OK," Katja says, '+iif(katjaQW['coke_stage'] = 3, 'looking a little hesitant.', 'somewhat ea...
          scene.actions([
            { label: 'Do some lines with Katja', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 8;
    qspCall(s, 'drugs', 'cocaine');
    (s as any).mc_inventory['cocaine'] = ((s as any).mc_inventory['cocaine'] ?? 0) - (1);
    qspCall(s, 'katja_procedural', 'take_cocaine');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/joint_coke.jpg');
    scene.text('You prepare some lines for yourself and Katja and produce some tubes to use, handing one to her.');
    scene.text('You put your tubes to your nostrils and lower your heads to the table and snort your lines. Katja does it with great enthusiasm.');
    scene.text('After a moment, it hits you both. You feel wonderful while Katja just sits there with wide-open eyes. She starts giggling, which turns into a laugh that lasts for some time.');
    scene.text('After some minutes, you both come down and get ready to go partying.');
    scene.actions([
      { label: 'Go to the metro', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['katja_city', 'metro'] },
    ]);
  } },
          ]);
        } else {
          scene.text('"So, I have some coke, enough for both of us. Want to do some before leaving?" you ask Katja and pull out a small bag of cocaine.');
          scene.text('"Of course, I want to! Let\'s do it, together," Katja says, looking very into it.');
          scene.actions([
            { label: 'Do some lines with Katja', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 8;
    qspCall(s, 'drugs', 'cocaine');
    (s as any).mc_inventory['cocaine'] = ((s as any).mc_inventory['cocaine'] ?? 0) - (1);
    qspCall(s, 'katja_procedural', 'take_cocaine');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/joint_coke.jpg');
    scene.text('You prepare some lines for yourself and Katja and produce some tubes to use, handing one to her.');
    scene.text('You both put your tubes to you nostrils and lower your heads to the table and snort your lines. Katja does it like it\'s something she does all the time.');
    scene.text('After a moment, it hits you both. You feel wonderful while Katja just sits there with wide-open eyes. She starts giggling, which turns into a laugh that lasts for some time.');
    scene.text('After some minutes, you both come down and get ready to go partying.');
    scene.actions([
      { label: 'Go to the metro', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['katja_city', 'metro'] },
    ]);
  } },
          ]);
        }
      }
    }
  } },
        ]);
      }
      scene.actions([
        { label: 'Go to the metro', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['katja_city', 'metro'] },
      ]);
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'going_out_talk':
      enterGoingOutTalk(s, scene);
      break;
    case 'going_out':
      enterGoingOut(s, scene);
      break;
    case 'party_preparations':
      enterPartyPreparations(s, scene);
      break;
    case 'party_look_approval':
      enterPartyLookApproval(s, scene);
      break;
    case 'part_dress_check':
      enterPartDressCheck(s, scene);
      break;
    case 'party_preparations_final':
      enterPartyPreparationsFinal(s, scene);
      break;
    case 'party_heading_out':
      enterPartyHeadingOut(s, scene);
      break;
    default:
      enterGoingOutTalk(s, scene);
      break;
  }
}

export const katja_party: LocationDef = {
  name: 'katja_party',
  title: 'She starts to change before you even have a chance to say an',
  region: 'other',
  description: ['She starts to change before you even have a chance to say anything, rummaging around in her wardrobe.'],
  enter: enter,
};
