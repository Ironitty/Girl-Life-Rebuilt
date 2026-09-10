import { qspCall } from '../_shared/qspBridge';

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
      qspCall(s, 'willpower', 'misc', 'force', 'hard');
      qspCall(s, 'willpower', 'misc', 'force');
    }
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Convince Katja to stay and watch a movie [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Convince Katja to stay and watch a movie', handler: (st: GameState) => {
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
      (s as any).locat['katja'] = 53;
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
      (s as any).locat['katja'] = 53;
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
      qspCall(s, 'willpower', 'misc', 'force', 'hard');
      qspCall(s, 'willpower', 'misc', 'force');
    }
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Convince Katja to stay and watch a movie [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Convince Katja to stay and watch a movie', handler: (st: GameState) => {
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
      (s as any).locat['katja'] = 53;
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
      (s as any).locat['katja'] = 53;
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
      (s as any).katjaQW['changed_for_katja'] = ((s as any).daystart ?? 0);
      scene.text('"I\'m sorry, but they have a dress code at the nightclub. So you need to wear a skirt or dress. Maybe some very short shorts or other extremely provocative outfit will also get you in," Katja says.');
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
        scene.text('"OK. They\'ll let you in the club, but don\'t you have something a little nicer?" Katja says, trying to be as polite as possible.');
        if (((s as any).pcs_makeup ?? 0) < 2) {
          scene.text('"Lastly, we need to fix your makeup. Let me do it," Katja says before taking out her makeup kit, clearly not allowing you to deny her the fun of dolling you up. "How would you like your makeup?" she asks.');
          (s as any).pcs_hairbsh = 1;
          (s as any).minut = ((s as any).minut ?? 0) + 10;
          scene.actions([
            { label: 'Light touch-up', handler: (st: GameState) => {
    (s as any).pcs_makeup = 2;
    scene.text('Katja subtly applies some neutral tones, with a light application of makeup to bring out your natural beauty.');
    if (((s as any).katjaQW ?? 0)?.['QWstage'] > 2) {
      (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (5*(1 + ((s as any).npc_had_sex ?? 0)?.['A14']));
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
      (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (5*(1 + ((s as any).npc_had_sex ?? 0)?.['A14']));
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
      (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (5*(1 + ((s as any).npc_had_sex ?? 0)?.['A14']));
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
      }
      scene.actions([
        { label: 'Get changed', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
  }, goto: ['wardrobe', 'start'] },
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
