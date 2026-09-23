import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterMetro(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'public_indoors';
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/waiting_metro.jpg');
  qspCall(s, 'katja_meynold_schedule', '');
  // TODO-QSP: dynamic text: 'You walk to the Metro station '+iif(func('money', 'can_afford', 16) = 1, 'and p...
  scene.text('You walk to the Metro station ' + ((qspFunc(s, 'money', 'can_afford', 16) === 1) ? ('and pay the fare.') : ('but don\'t have any money, so Katja pays the fare for you.')) + ' You then go down to the platform and chat while you wait for the train.');
  if (qspFunc(s, 'money', 'can_afford', 16) === 1) {
    qspCall(s, 'money', 'pay', 16);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for the train', handler: (st: GameState) => {
    qspGoto(st, 'katja_city', 'metro_ride');
  } },
  ]);
  scene.build();
}

function enterMetroRide(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/riding_metro.jpg');
  scene.text('The train arrives and you board before finding a place to sit as it leaves the station.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Chat with Katja', handler: (st: GameState) => {
    if (((st as any).katjaQW ?? 0)?.['drinks'] > (Math.floor(Math.random() * 5) + 10)) {
      scene.img('images/characters/pavlovsk/school/girl/katja/uni/city/metro_drunk.jpg');
      scene.text('Katja is so drunk that she doesn\'t make it to a seat and just lies on the floor.');
      scene.text('You try to get her up, but she insists that she\'s fine and just needs a nap.');
      scene.text('You manage to get her to stand up just as you arrive at your station.');
      scene.actions([
        { label: 'Leave the metro', goto: ['katja_city', 'metro_destination'] },
      ]);
    } else {
      qspGoto(st, 'katja_city', 'metro_get_off');
    }
  } },
  ]);
  scene.build();
}

function enterMetroGetOff(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/riding_metro.jpg');
  scene.text('You chat with Katja as the train heads through the tunnel. After a short time, you arrive at your destination.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the metro', handler: (st: GameState) => {
    qspGoto(st, 'katja_city', 'metro_destination');
  } },
  ]);
  scene.build();
}

function enterMetroDestination(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/Leaving_metro.jpg');
  if (((s as any).locat ?? 0)?.['katja'] === 44) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).loc = 'city_mall';
    (s as any).loc_arg = '';
    (s as any).location_type = 'public_indoors';
    (s as any).menu_loc = 'city_mall';
    (s as any).menu_arg = '';
    qspCall(s, 'stat', '');
    scene.text('You exit the metro station and walk to the Galleria shopping mall.');
    scene.actions([
      { label: 'Start shopping', goto: ['katja_chat', 'chat1'] },
    ]);
  } else {
    if (((s as any).locat ?? 0)?.['katja'] === 53) {
      (s as any).minut = ((s as any).minut ?? 0) + 10;
      (s as any).loc = 'city_nightclub';
      (s as any).loc_arg = 'start';
      (s as any).menu_loc = 'city_nightclub';
      (s as any).menu_arg = 'start';
      (s as any).location_type = 'public_outdoors';
      (s as any).sexloc = 'city_nightclub';
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['disco_arrival'] = ((s as any).totminut ?? 0);
      qspCall(s, 'stat', '');
      qspCall(s, 'themes', 'indoors');
      scene.text('You exit the metro station and walk to the nightclub, where you get in line.');
      if (((s as any).pcs_hotcat ?? 0) === 10) {
        scene.text('The bouncer almost immediately spots the two of you and lets you in, allowing you to skip the long line. You can hear several complaints, but also some whistling and lewd comments.');
      } else {
        if (((s as any).pcs_hotcat ?? 0) > 7) {
          (s as any).minut = ((s as any).minut ?? 0) + 5;
          scene.text('The two of you stand in line for a short while before the bouncer singles you out and you get to jump ahead of several people, much to their annoyance.');
        } else {
          if (((s as any).pcs_hotcat ?? 0) > 5) {
            (s as any).minut = ((s as any).minut ?? 0) + 10;
            scene.text('You wait in line for some time, but finally make it to the door.');
          } else {
            (s as any).minut = ((s as any).minut ?? 0) + ((Math.floor(Math.random() * 6) + 15));
            scene.text('You wait in line for a long time as several more attractive girls are allowed to jump ahead of you, but are eventually allowed in.');
          }
        }
      }
      if (qspFunc(s, 'money', 'can_afford', 250) === 1) {
        qspCall(s, 'money', 'pay', 250);
        // TODO-QSP: dynamic text: 'You pay the ' + $func('money', 'string_price', 250) + ' entrance fee and head i...
        scene.text('You pay the 250₽ entrance fee and head into the club.');
      } else {
        scene.text('You don\'t have enough to pay the entrance fee, so Katja pays for you.');
        scene.text('"You\'re paying for us next time," she says with a slight hint of annoyance.');
      }
      if ((!(Math.floor(Math.random() * 2) + 0))) {
        scene.text('"Let\'s start with a dance," she says when you\'re finally inside the club and drags you to the dance floor.');
        scene.actions([
          { label: 'Go to the dance floor', handler: (st: GameState) => {
    (st as any).loc = 'city_nightclub';
    (st as any).loc_arg = 'inside';
    (st as any).menu_loc = 'city_nightclub';
    (st as any).menu_arg = 'inside';
    (st as any).location_type = 'public_indoors';
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).frost = 0;
    qspCall(st, 'themes', 'indoors');
    qspGoto(st, 'katja_nightclub', 'dance');
  } },
        ]);
      } else {
        scene.text('"Let\'s start with a drink," she says when you\'re finally inside the club and drags you to the bar.');
        scene.actions([
          { label: 'Go to the bar', handler: (st: GameState) => {
    (st as any).loc = 'city_nightclub';
    (st as any).loc_arg = 'inside';
    (st as any).menu_loc = 'city_nightclub';
    (st as any).menu_arg = 'inside';
    (st as any).location_type = 'public_indoors';
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).frost = 0;
    qspCall(st, 'themes', 'indoors');
    qspGoto(st, 'katja_nightclub', 'bar_arrive');
  } },
        ]);
      }
    } else {
      if (((s as any).katjaQW ?? 0)?.['on_date'] === 1) {
        ((s as any).katjaQW = (s as any).katjaQW ?? {})['on_date'] = 0;
        if (((s as any).katjaQW ?? 0)?.['drinks'] > (Math.floor(Math.random() * 5) + 8)) {
          (s as any).minut = ((s as any).minut ?? 0) + 30;
          qspCall(s, 'stat', '');
          scene.text('Katja is so drunk that she can barely walk, so you decide to help her home. It takes quite a while since she tries to sit down several times and refuses to walk further, but you eventually manage to get her back to her dorm room and into her bed, where she immediately falls asleep. You leave her to sleep and quietly leave the room.');
          scene.actions([
            { label: 'Leave', goto: ['uni_dorm', 'second_floor'] },
          ]);
        } else {
          if (((s as any).katjaQW ?? 0)?.['horny'] > (Math.floor(Math.random() * 41) + 40)  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] < 2) {
            scene.text('You exit the metro station near the university and Katja suggests that you come with her to her room.');
            scene.actions([
              { label: 'Go with her', goto: ['katja_uni_sex', 'coming_home_from_date'] },
              { label: 'Leave her', goto: ['city_island', ''] },
            ]);
          } else {
            scene.text('You exit the metro station near the university and say goodbye to each other.');
            scene.actions([
              { label: 'Continue', goto: ['city_island', ''] },
            ]);
          }
        }
      } else {
        scene.text('You exit the metro station near the university and say goodbye to each other.');
        scene.actions([
          { label: 'Continue', goto: ['city_island', ''] },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterClothesStart1(s: GameState, scene: SceneBuilder): void {
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['shopping_day'] = ((s as any).daystart ?? 0);
  qspCall(s, 'npc_relationship', 'modify', 'A14', 'like');
  if ((!(Math.floor(Math.random() * 5) + 1))) {
    (s as any).store_choice = 'Fashionista';
  } else {
    if ((!(Math.floor(Math.random() * 4) + 1))) {
      (s as any).store_choice = 'GM';
    } else {
      (s as any).store_choice = 'Pussy-Cats';
    }
  }
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  scene.text('You suggest that you should try on some clothes while you\'re here and Katja almost jumps with joy. "Yes, let\'s! It will be so much fun!"');
  if ((Math.floor(Math.random() * 2) + 0) ===1) {
    // TODO-QSP: dynamic text: "Let''s go to <<$store_choice>>," Katja says.
    scene.text(`"Let's go to ${((s as any).store_choice ?? '')}," Katja says.`);
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Go to ' + String(((s as any).store_choice ?? '') ?? ''), handler: (st: GameState) => { qspGoto(st, 'katja_city', ((st as any).store_choice ?? '')); } },
    ]);
  } else {
    scene.text('"Where do you want to go?" Katja asks.');
    scene.actions([
      { label: 'Go to Pussy-Cats', goto: ['katja_city', 'Pussy-Cats'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterClothesStart2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  scene.text('Before you leave, Katja stops you. "Do you want to try on some clothes with me?" she asks.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Yes', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['shopping_day'] = ((st as any).daystart ?? 0);
    qspCall(st, 'npc_relationship', 'modify', 'A14', 'like');
    if ((!(Math.floor(Math.random() * 5) + 1))) {
      (st as any).store_choice = 'Fashionista';
    } else {
      if ((!(Math.floor(Math.random() * 4) + 1))) {
        (st as any).store_choice = 'GM';
      } else {
        (st as any).store_choice = 'Pussy-Cats';
      }
    }
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('You tell her that you would love to try on clothes and she gives you a big hug. "This will be so much fun!" she says.');
    if ((Math.floor(Math.random() * 2) + 0) === 1) {
      // TODO-QSP: dynamic text: "Let''s go to <<$store_choice>>," Katja says.
      scene.text(`"Let's go to ${((st as any).store_choice ?? '')}," Katja says.`);
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Go to ' + String(((st as any).store_choice ?? '') ?? ''), handler: (st: GameState) => { qspGoto(st, 'katja_city', ((st as any).store_choice ?? '')); } },
      ]);
    } else {
      scene.text('"Where do you want to go?" Katja asks.');
      scene.actions([
        { label: 'Go to Pussy-Cats', goto: ['katja_city', 'Pussy-Cats'] },
      ]);
    }
  } },
    { label: 'Say no', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A14', 'dislike');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('You apologize to Katja, but you don\'t have the time right now. She looks a little disappointed, but it soon gives way to a smile as you say goodbye.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterPussy_Cats(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/KWS1.jpg');
  scene.text('You walk into Pussy-Cats, the trendy store for cool kids, but still affordable enough that you might be able to buy what you try on if you really like it.');
  scene.text('You start browsing the stands, looking at all the new fashion trends. After a while, you decide that you should each pick a set that you think would look great on the other.');
  scene.text('You soon find something that you\'d like to see Katja in. You return to her and find that she also has some clothes for you to try on, so you head to the changing rooms and find one big enough for the two of you.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Try on clothes', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    (st as any).loop_counter = 0;
    // TODO-QSP: :tryclotheswithkatja_pussy_cats
    (st as any).loop_counter = ((st as any).loop_counter ?? 0) + (1);
    if (((st as any).loop_counter ?? 0) === 600) {
      scene.img('images/characters/shared/headshots_main/big14.jpg');
      // TODO-QSP: dynamic text: 'You try to put on what Katja brought you, but it''s ' + iif(pcs_bmi < 25, 'way ...
      scene.text('You try to put on what Katja brought you, but it\'s ' + ((((st as any).pcs_bmi ?? 0) < 25) ? ('way too loose and will fall off') : ('so tight you can\'t get into it')) + ` so you give up. "Sorry ${((st as any).pcs_nickname ?? '')}, seems I've miscalculated your size. Let me get something else," she says.`);
      scene.text('You stop her before she runs out. "Hey don\'t be sorry, it\'s not your fault. Try what I picked out first."');
      scene.actions([
        { label: 'Katja tries the clothes you picked', goto: ['katja_city', 'pussy_cat_outfit' + (Math.floor(Math.random() * 4) + 0) + ''] },
      ]);
    } else {
      if ((Math.floor(Math.random() * 2) + 0) === 1) {
        (st as any).numrand = (Math.floor(Math.random() * 220) + 1);
        qspCall(st, 'clothing_attributes', 'cats_dress', ((st as any).numrand ?? 0));
        if (((st as any).CloBimbo ?? 0) === 1) {
          // TODO-QSP: jump 'tryclotheswithkatja_pussy_cats'
        }
        if (((st as any).CloInhibit ?? 0) > ((st as any).pcs_inhib ?? 0)) {
          // TODO-QSP: jump 'tryclotheswithkatja_pussy_cats'
        }
        if (((st as any).CloQuality ?? 0) < 4) {
          // TODO-QSP: jump 'tryclotheswithkatja_pussy_cats'
        }
        if (((st as any).CloStyle ?? 0) === 4  ||  ((st as any).CloProstitute ?? 0) === 1) {
          // TODO-QSP: jump 'tryclotheswithkatja_pussy_cats'
        }
        if (((st as any).katjaQW ?? 0)?.['slut'] > 80  &&  ((st as any).CloThinness ?? 0) < 4) {
          // TODO-QSP: jump 'tryclotheswithkatja_pussy_cats'
        } else {
          if (((st as any).katjaQW ?? 0)?.['slut'] > 60  &&  ((st as any).CloThinness ?? 0) === 1) {
            // TODO-QSP: jump 'tryclotheswithkatja_pussy_cats'
          } else {
            if (((st as any).katjaQW ?? 0)?.['slut'] < 40  &&  ((st as any).CloThinness ?? 0) === 6) {
              // TODO-QSP: jump 'tryclotheswithkatja_pussy_cats'
            }
          }
        }
        if (((st as any).katjaQW ?? 0)?.['slut'] < 80  &&  (((st as any).CloSkirtShortness ?? 0) === 6  ||  ((st as any).CloBra ?? 0) === 2)) {
          // TODO-QSP: jump 'tryclotheswithkatja_pussy_cats'
        }
        if (((st as any).cats_dress ?? 0)?.[String((st as any).numrand ?? 0)] === 0) {
          scene.text('<center><b>Pussy-Cats</b></center>');
          scene.img(`images/pc/items/cats/dress/${((st as any).numrand ?? '')}.jpg`);
          scene.text('You try on the dress Katja has picked for you while she looks on excitedly. She seems to like it, but it\'s clear that she\'s waiting for your reaction before saying anything.');
          (st as any).price = qspFunc(s, 'clothing', 'get_price', 'cats_dress', ((st as any).numrand ?? 0));
          scene.actions([
            { label: 'Tell her that you like it', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A14', 'love');
    scene.text('"This is really nice. As always, your fashion sense is impeccable," you say and her face lights up like a Christmas tree.');
    // TODO-QSP: dynamic text: 'You look at the price tag and see that it costs ' + $func('money', 'string_pric...
    scene.text('You look at the price tag and see that it costs \' + $func(\'money\', \'string_price\', price) + \'.');
    if (qspFunc(s, 'money', 'can_afford', ((st as any).price ?? 0))) {
      scene.actions([
        { label: 'Buy the dress', handler: (st: GameState) => {
    scene.text('"I\'ll buy it, but only after you try on what I picked for you."');
    scene.text('"That\'s so great!" she says, looking really happy.');
    qspCall(st, 'clothing', 'quick_buy', 'cats_dress', ((st as any).numrand ?? 0));
    scene.actions([
      { label: 'Katja\'s turn', goto: ['katja_city', 'pussy_cat_outfit' + (Math.floor(Math.random() * 2) + 1) + ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'It\'s too expensive for you', handler: (st: GameState) => {
    scene.text('"I wish I could afford it, but I don\'t have the money right now," you say.');
    scene.text('"That\'s totally fine. We didn\'t do this to buy stuff, just to have fun trying on new things," she replies.');
    scene.actions([
      { label: 'Katja\'s turn', goto: ['katja_city', 'pussy_cat_outfit' + (Math.floor(Math.random() * 2) + 1) + ''] },
    ]);
  } },
    ]);
  } },
            { label: 'It\'s not really you', handler: (st: GameState) => {
    scene.text('"It\'s nice, but I don\'t think that it\'s really me," you tell her, trying to let her down gently.');
    scene.text('"Well, I had to try," she says somberly. "You know you should try new things once in a while or you\'ll miss out on so many great things."');
    scene.actions([
      { label: 'Katja\'s turn', goto: ['katja_city', 'pussy_cat_outfit' + (Math.floor(Math.random() * 2) + 1) + ''] },
    ]);
  } },
          ]);
        } else {
          // TODO-QSP: jump 'tryclotheswithkatja_pussy_cats'
        }
      } else {
        (st as any).numrand = (Math.floor(Math.random() * 200) + 1);
        qspCall(st, 'clothing_attributes', 'cats_dress', ((st as any).numrand ?? 0));
        if (((st as any).CloBimbo ?? 0) === 1) {
          // TODO-QSP: jump 'tryclotheswithkatja_pussy_cats'
        }
        if (((st as any).CloInhibit ?? 0) > ((st as any).pcs_inhib ?? 0)) {
          // TODO-QSP: jump 'tryclotheswithkatja_pussy_cats'
        }
        if (((st as any).CloQuality ?? 0) < 4) {
          // TODO-QSP: jump 'tryclotheswithkatja_pussy_cats'
        }
        if (((st as any).CloStyle ?? 0) === 4  ||  ((st as any).CloProstitute ?? 0) === 1) {
          // TODO-QSP: jump 'tryclotheswithkatja_pussy_cats'
        }
        if (((st as any).katjaQW ?? 0)?.['slut'] > 80  &&  ((st as any).CloThinness ?? 0) < 4) {
          // TODO-QSP: jump 'tryclotheswithkatja_pussy_cats'
        } else {
          if (((st as any).katjaQW ?? 0)?.['slut'] > 60  &&  ((st as any).CloThinness ?? 0) === 1) {
            // TODO-QSP: jump 'tryclotheswithkatja_pussy_cats'
          } else {
            if (((st as any).katjaQW ?? 0)?.['slut'] < 40  &&  ((st as any).CloThinness ?? 0) === 6) {
              // TODO-QSP: jump 'tryclotheswithkatja_pussy_cats'
            }
          }
        }
        if (((st as any).katjaQW ?? 0)?.['slut'] < 80  &&  (((st as any).CloPantsShortness ?? 0) === 6  ||  ((st as any).CloBra ?? 0) === 2)) {
          // TODO-QSP: jump 'tryclotheswithkatja_pussy_cats'
        }
        if (((st as any).cats_outfits ?? 0)?.[String((st as any).numrand ?? 0)] === 0) {
          scene.text('<center><b>Pussy-Cats</b></center>');
          scene.img(`images/pc/items/cats/outfits/${((st as any).numrand ?? '')}.jpg`);
          scene.text('You try on the clothes Katja picked out for you while she looks on excitedly. She seems to like it, but it\'s clear she\'s waiting for your reaction before saying anything.');
          (st as any).price = qspFunc(s, 'clothing', 'get_price', 'cats_outfits', ((st as any).numrand ?? 0));
          scene.actions([
            { label: 'Tell her that you like it', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A14', 'love');
    scene.text('"This is really nice. As always, your fashion sense is impeccable," you say and her face lights up like a Christmas tree.');
    // TODO-QSP: dynamic text: 'You look at the price tag and see that it costs ' + $func('money', 'string_pric...
    scene.text('You look at the price tag and see that it costs \' + $func(\'money\', \'string_price\', price) + \'.');
    if (qspFunc(s, 'money', 'can_afford', ((st as any).price ?? 0))) {
      scene.actions([
        { label: 'Buy the clothes', handler: (st: GameState) => {
    scene.text('"I\'ll buy it, but only after you try on what I picked for you."');
    scene.text('"That\'s so great!" she says, looking really happy.');
    qspCall(st, 'clothing', 'quick_buy', 'cats_outfits', ((st as any).numrand ?? 0));
    scene.actions([
      { label: 'Katja\'s turn', goto: ['katja_city', 'pussy_cat_outfit' + (Math.floor(Math.random() * 2) + 1) + ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'It\'s too expensive for you', handler: (st: GameState) => {
    scene.text('"I wish I could afford it, but I don\'t have the money right now," you say.');
    scene.text('"That\'s totally fine. We didn\'t do this to buy stuff, just to have fun trying on new things," she replies.');
    scene.actions([
      { label: 'Katja\'s turn', goto: ['katja_city', 'pussy_cat_outfit' + (Math.floor(Math.random() * 2) + 1) + ''] },
    ]);
  } },
    ]);
  } },
            { label: 'It\'s not really you', handler: (st: GameState) => {
    scene.text('"It\'s nice, but I don\'t think that it\'s really me," you tell her, trying to let her down gently.');
    scene.text('"Well, I had to try," she says somberly. "You know you should try new things once in a while or you\'ll miss out on so many great things."');
    scene.actions([
      { label: 'Katja\'s turn', goto: ['katja_city', 'pussy_cat_outfit' + (Math.floor(Math.random() * 2) + 1) + ''] },
    ]);
  } },
          ]);
        } else {
          // TODO-QSP: jump 'tryclotheswithkatja_pussy_cats'
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterPussyCatOutfit1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/mall/cats_1_1.jpg');
  scene.text('While you change back to your original clothes, Katja puts on the sleeveless shirt and very short pants you\'ve chosen for her. Once she\'s finished dressing, she turns around so you can get a good look at her.');
  if (((s as any).katjaQW ?? 0)?.['slut'] >= 100) {
    scene.text('"Wow, these are great!" she says when she sees herself in the mirror. "I\'m definitely going to be the sexiest girl on campus wearing these. Though I should probably be weary of Lizaveta seeing me wearing this; she might start spreading rumors that I\'ve become a whore," she says with a wink.');
  } else {
    if (((s as any).katjaQW ?? 0)?.['slut'] >= 80) {
      scene.text('"Damn, I look sexy in these!" she says. "Maybe too sexy. I think this should only be used for special occasions and not for going to class."');
    } else {
      if (((s as any).katjaQW ?? 0)?.['slut'] >= 60) {
        scene.text('"Wow, I don\'t know…" she says. "I definitely look sexy in this, but I\'m not sure if I can wear it anywhere."');
      } else {
        if (((s as any).katjaQW ?? 0)?.['slut'] >= 40) {
          scene.text('"This is too much," she says. "This isn\'t something I can wear anywhere."');
          scene.text('"But you have to agree that that you look sexy?" you reply.');
          scene.text('"Well yeah, but I can\'t see myself wearing it outside of here," she answers.');
        } else {
          if (((s as any).katjaQW ?? 0)?.['slut'] >= 20) {
            // TODO-QSP: dynamic text: "What were you thinking, <<$pcs_nickname>>?!" she says. "These are clothes for s...
            scene.text(`"What were you thinking, ${((s as any).pcs_nickname ?? '')}?!" she says. "These are clothes for sluts!"`);
            scene.text('"Come on, you look so sexy in them!" you reply.');
            scene.text('"Maybe, but you\'re not going to see me in them outside this changing room!"');
          } else {
            scene.text('"What the heck? Are you trying to turn me into a prostitute?!" she almost yells.');
            scene.text('"Come on, you look so sexy in them!" you reply.');
            scene.text('"We are not having this conversation! This is coming off right now!"');
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask her to turn around', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    if (((st as any).katjaQW ?? 0)?.['slut'] < 20) {
      scene.img('images/characters/shared/headshots_main/big14.jpg');
      scene.text('"Come on, turn around and let me see you from behind," you say.');
      scene.text('"No," she answers as she starts taking the clothes off. "I still don\'t know what you were thinking choosing these shorts!"');
      scene.text('You let her change clothes in silence. "Well, thanks for this anyway. You should choose some proper clothes for me next time though," she says once she\'s finished.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
      ]);
    } else {
      scene.img('images/characters/pavlovsk/school/girl/katja/uni/mall/cats_1_2.jpg');
      scene.text('"Come on, turn around and let me see you from behind," you say.');
      // TODO-QSP: iif(katjaQW['slut'] >= 80, '"Of course," she says. "I''m sure you''ll enjoy the view!"', '"Really, <...
      scene.text('"Come on, it\'s just me," you answer.');
      scene.text('After a moment\'s hesitation, she answers, "Okay."');
      scene.text('She turns around and shows you a sight that barely leaves anything to the imagination as the shorts have crept up her butt crack. "Damn that looks good on you," you say. "Great ass!"');
      // TODO-QSP: iif(katjaQW['slut'] >= 80, '"Thanks!" she says. "These will really make me the center of attention a...
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/mall/cats_1_3.jpg');
    scene.text('"Well, this was fun, but I should change back," she says while starting to unbutton the shirt.');
    if (((st as any).npc_had_sex ?? 0)?.['A14']  &&  ((st as any).katjaQW ?? 0)?.['slut'] > 60  &&  (Math.floor(Math.random() * 4) + 0) === 0  &&  ((st as any).katjaQW ?? 0)?.['sex_clossedness'] < 2) {
      scene.text('"Why don\'t I give you a little show?" she says with a mischievous smile.');
      scene.actions([
        { label: 'Enjoy the striptease', goto: ['katja_city', 'pussy_cat_outfit1_strip'] },
      ]);
    } else {
      if (((st as any).katjaQW ?? 0)?.['QWstage'] > 2  &&  ((st as any).katjaQW ?? 0)?.['sex_clossedness'] < 2) {
        if (((st as any).katjaQW ?? 0)?.['slut'] > 60) {
          scene.actions([
            { label: 'Ask her to put on a show', goto: ['katja_city', 'pussy_cat_outfit1_strip'] },
          ]);
        } else {
          qspCall(st, 'willpower', 'misc', 'force', 'easy');
          if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Ask her to put on a show', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Ask her to put on a show', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'force');
    qspCall(st, 'stat', '');
    qspGoto(st, 'katja_city', 'pussy_cat_outfit1_strip');
  } },
            ]);
          }
        }
      }
      scene.actions([
        { label: 'Let her change clothes in peace', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/mall/cats_1_3.jpg');
    // TODO-QSP: dynamic text: Katja finishes changing back to her original clothes and you leave the store. "T...
    scene.text(`Katja finishes changing back to her original clothes and you leave the store. "That was fun, ${((st as any).pcs_nickname ?? '')}," she says. "We should do this again!" She then waves goodbye and leaves you alone in the mall.`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      ]);
    }
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterPussyCatOutfit1Strip(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'erotic_nudity', 5);
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (10);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/mall/cats_1_4.jpg');
  scene.text('Katja starts by moving more sensually while slowly unbuttoning the shirt before letting it fall to the side, revealing her bare breast. She then unbuttons the pants and puts her hands on her sides.');
  if (((s as any).npc_had_sex ?? 0)?.['A14'] === 0) {
    scene.actions([
      { label: 'Let her finish the show', goto: ['katja_city', 'pussy_cat_outfit1_strip2'] },
    ]);
  } else {
    if (Math.max(((s as any).katjaQW ?? 0)?.['horny'], 100) > (Math.floor(Math.random() * 101) + 50)  &&  ((s as any).katjaQW ?? 0)?.['slut'] >= 80) {
      scene.actions([
        { label: 'Katja makes things more interesting', goto: ['katja_city', 'pussy_cat_outfit1_play'] },
      ]);
    } else {
      qspCall(s, 'willpower', 'mast', 'force');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Ask her to touch herself', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Ask her to touch herself', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'force');
    qspCall(st, 'stat', '');
    qspGoto(st, 'katja_city', 'pussy_cat_outfit1_play');
  } },
        ]);
      }
      scene.actions([
        { label: 'Let her finish the show', goto: ['katja_city', 'pussy_cat_outfit1_strip2'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPussyCatOutfit1Strip2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'erotic_nudity', 3);
  qspCall(s, 'arousal', 'end');
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (5);
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['slut'] = ((s as any).katjaQW['slut'] ?? 0) + (2);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/mall/cats_1_5a.jpg');
  scene.text('Katja slowly pulls her pants halfway down her thighs, then lets go of them and puts her arms in front of her in a way that pushes her breasts forward. "See something you like?" she asks in a seductive tone.');
  scene.text('"Very impressive…" you say.');
  scene.text('"Enough of this," she says with a laugh, and starts to change her clothes normally.');
  // TODO-QSP: dynamic text: A few minutes later, you leave the store. "That was fun, <<$pcs_nickname>>," she...
  scene.text(`A few minutes later, you leave the store. "That was fun, ${((s as any).pcs_nickname ?? '')}," she says. "We should do this again!" She then waves goodbye and leaves you alone in the mall.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterPussyCatOutfit1Play(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'foreplay', 3);
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (10);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/mall/cats_1_5b.jpg');
  scene.text('Katja stops pulling the pants down and places one hand on her breast and the other down the pants before she starts playing with herself. She seems to be really getting into it.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Watch', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay', 3);
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (10);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/mall/cats_1_6.jpg');
    scene.text('As she gets closer to cumming, she removes her hand from her breast and pulls down the pants so that her other hand has better access.');
    if (((st as any).katjaQW ?? 0)?.['know_butt_plug'] === 0) {
      scene.text('Out of your eye, you notice that her bag is open and see something that surprises you. You open the bag and pull out a butt plug and vibrator.');
      scene.text('"Well, well, what do we have here?" you say as you show your findings to Katja, who immediately stops what she\'s doing and blushes bright red.');
      scene.text('"I… Vicky gave them to me when I moved to the dorm. They aren\'t something I would use!" she stammers.');
      scene.text('"Then why are they in your bag if you don\'t use them?" you ask.');
      scene.text('"Because I don\'t want Sofia to find them! That girl gets into all my stuff and if she finds them, she won\'t stop asking me about it," she answers.');
      scene.text('"So you\'ve never used them?" you ask.');
      if (((st as any).katjaQW ?? 0)?.['masturbates'] + ((st as any).npc_ass ?? 0)?.['A14'] === 0) {
        scene.text('"I\'ve never used any of them," she says.');
        scene.text('"Well, then you\'re going to try several new things today," you say and hand her the butt plug.');
      } else {
        if (((st as any).katjaQW ?? 0)?.['masturbates'] + ((st as any).npc_ass ?? 0)?.['A14'] === 1) {
          // TODO-QSP: dynamic text: '"I''ve never used the '+iif(katjaQW['masturbates'] = 1, 'butt plug', 'vibrator'...
          scene.text('"I\'ve never used the ' + ((((st as any).katjaQW ?? 0)?.['masturbates'] === 1) ? ('butt plug') : ('vibrator')) + '." she says.');
          // TODO-QSP: dynamic text: '"So you''ve used the '+iif(katjaQW['masturbates'] = 1, 'vibrator', 'butt plug')...
          scene.text('"So you\'ve used the ' + ((((st as any).katjaQW ?? 0)?.['masturbates'] === 1) ? ('vibrator') : ('butt plug')) + '? You\'re going to try something new today," you say and hand her the butt plug.');
        } else {
          scene.text('She doesn\'t say anything, but her face is becoming even more red than before. "So you <i>have</i> been using them, you dirty girl!" you say with a smile. "Show me how you use them," you say as you hand her the butt plug.');
        }
      }
    } else {
      scene.text('You look into Katja\'s bag and find her butt plug and vibrator. "Use these to make the show even better," you say as you hand her the butt plug.');
    }
    scene.actions([
      { label: 'Watch her insert the butt plug', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay', 5);
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (10);
    qspCall(st, 'stat', '');
    if (((st as any).npc_ass ?? 0)?.['A14'] === 0) {
      ((st as any).npc_ass = (st as any).npc_ass ?? {})['A14'] = 1;
      scene.img('images/characters/pavlovsk/school/girl/katja/uni/mall/cats_1_7a.jpg');
      scene.text('"I\'ve never put anything in my butt before!" she protests.');
      scene.text('"There\'s a first time for everything," you reply. "Lick it first to lubricate it."');
      scene.text('She does as you say and starts licking the butt plug. "I think it\'s wet enough for you to put it in now," you say after a minute. "Lie down in the chair; it\'ll be easier to put it in from that position."');
      scene.text('She moves to the chair and guides the butt plug to her ass. She starts pushing it in, but clearly meets some resistance. "Take your time," you say, but she seems determined and after a short while she pushes the butt plug completely into her ass with a slight groan of pain.');
    } else {
      if (((st as any).npc_ass ?? 0)?.['A14'] < 5) {
        ((st as any).npc_ass = (st as any).npc_ass ?? {})['A14'] = ((st as any).npc_ass['A14'] ?? 0) + (1);
      }
      scene.img('images/characters/pavlovsk/school/girl/katja/uni/mall/cats_1_7b.jpg');
      // TODO-QSP: 'Katja takes the butt plug and starts licking it. After a minute or so, she lies down in the chair a...
    }
    scene.actions([
      { label: 'Watch her reaction', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay', 2);
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (10);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/mall/cats_1_8.jpg');
    scene.text('Katja breathes in and out heavily and opens her eyes to look at you as she starts to gently play with her pussy.');
    scene.actions([
      { label: 'Give her the vibrator', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay', 2);
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (10);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/mall/cats_1_9.jpg');
    // TODO-QSP: '"Here. Use this," you say as you turn on the vibrator and give it to her. '+iif(katjaQW['masturbate...
    scene.actions([
      { label: 'Masturbate while you watch', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/mall/cats_1_10.jpg');
    // TODO-QSP: dynamic text: 'You put you hand down your '+iif(CloSkirtShortness > 0, 'skirt', 'pants')+' and...
    scene.text('You put you hand down your ' + ((((st as any).CloSkirtShortness ?? 0) > 0) ? ('skirt') : ('pants')) + ' and start rubbing your clit as you watch Katja. She starts really getting into it, and seems to have a hard time keeping her voice down. After a few minutes, she starts convulsing and has a powerful orgasm. Afterwards, she just lies in the chair, catching her breath.');
    qspCall(st, 'arousal', 'foreplay', 3);
    qspCall(st, 'arousal', 'clit_finger', (-3), 'masturbate');
    qspCall(st, 'arousal', 'end');
    if (((st as any).katjaQW ?? 0)?.['know_butt_plug'] === 0) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['know_butt_plug'] = 1;
    }
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = 0;
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (4);
    qspCall(st, 'stat', '');
    scene.text('After she comes down, she says, "Wow, that was intense!"');
    scene.text('"It was a great show," you tell her.');
    scene.text('"Thanks. I think," she says while blushing. "Let me get changed," she says and starts taking off the rest of the shirt.');
    scene.text('She starts to take out the butt plug, but you stop her. "Keep it in until you get home. It will be a good experience for you," you say. She blushes, but keeps it in as she puts on her clothes.');
    // TODO-QSP: dynamic text: A few minutes later, you leave the store. "That was fun, <<$pcs_nickname>>," she...
    scene.text(`A few minutes later, you leave the store. "That was fun, ${((st as any).pcs_nickname ?? '')}," she says. "We should do this again!" She then waves goodbye and leaves you alone in the mall.`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      { label: 'Just watch her', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/mall/cats_1_10.jpg');
    scene.text('You intensively watch Katja. She starts really getting into it and seems to have a hard time keeping her voice down. After a few minutes, she starts convulsing and has a tremendous orgasm. After that, she simply lies on the chair, recovering her breath.');
    qspCall(st, 'arousal', 'foreplay', 3);
    qspCall(st, 'arousal', 'end');
    if (((st as any).katjaQW ?? 0)?.['know_butt_plug'] === 0) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['know_butt_plug'] = 1;
    }
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = 0;
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (4);
    qspCall(st, 'stat', '');
    scene.text('After she comes down, she says, "Wow, that was intense!"');
    scene.text('"It was a fantastic show," you tell her.');
    scene.text('"Thanks. I guess," she adds while blushing. "Let me get changed," she adds and begins to remove the rest of the shirt.');
    scene.text('She tries to take out the buttplug, but you stop her. "Keep it in until you get home. It will be a great experience for you," you say. She blushes, but keeps it in and starts putting on her clothes.');
    // TODO-QSP: dynamic text: A few minutes later, you leave the store. "That was fun, <<$pcs_nickname>>," she...
    scene.text(`A few minutes later, you leave the store. "That was fun, ${((st as any).pcs_nickname ?? '')}," she says. "We should do this again!" She then waves goodbye and leaves you alone in the mall.`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
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

function enterPussyCatOutfit2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/mall/cats_2_1.jpg');
  scene.text('While you change back to your original clothes, Katja puts on the white shirt and short skirt you\'ve chosen for her. Once she\'s finished dressing, she turns around so you can get a good look at her.');
  if (((s as any).katjaQW ?? 0)?.['slut'] >= 40) {
    scene.text('"This looks good," she says when she sees herself in the mirror. "It\'s a nice dress for a warm summer night," she continues. "I might buy this."');
  } else {
    scene.text('"This looks good," she says when she sees herself in the mirror. "But it\'s a bit short, and kind of see-through. I\'m not sure if I\'m brave enough to wear this in public," she continues.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'She starts to change', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/mall/cats_2_2.jpg');
    scene.text('As Katja gets ready to change, she lets the shirt hang loose and it falls around her bra, emphasizing her breasts.');
    scene.actions([
      { label: 'Ask if her panties match her bra', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    if (((st as any).katjaQW ?? 0)?.['slut'] < 40) {
      scene.img('images/characters/shared/headshots_main/big14.jpg');
      scene.text('"So do your panties match the bra?" you ask.');
      scene.text('"What?!" she gasps. "Why would you ask me that?!"');
      scene.text('"No reason," you reply when it\'s clear she\'s not comfortable with the question, and you let her change in peace.');
      // TODO-QSP: dynamic text: A few minutes later, you leave the store. "That was fun, <<$pcs_nickname>>," she...
      scene.text(`A few minutes later, you leave the store. "That was fun, ${((st as any).pcs_nickname ?? '')}," she says. "We should do this again!" She then waves goodbye and leaves you alone in the mall.`);
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
      ]);
    } else {
      scene.img('images/characters/pavlovsk/school/girl/katja/uni/mall/cats_2_3.jpg');
      scene.text('"So do your panties match the bra?" you ask.');
      // TODO-QSP: iif(katjaQW['slut'] >= 80, '"Are you assuming I''m wearing panties?" she asks slyly.', '"Really, <<$...
      scene.text('"Come on, be a really good girl and show me," you answer.');
      scene.text('After a moment\'s hesitation, she relents. "Okay."');
      scene.text('She slowly pulls up the skirt to reveal her smoothly shaved pussy.');
      if (((st as any).katjaQW ?? 0)?.['pantiesQWstage'] >= 5) {
        scene.text('"See? My panties always match my bra," she says. "No need for them to match when you don\'t wear any."');
      } else {
        if (((st as any).katjaQW ?? 0)?.['pantiesQWstage'] < 4) {
          ((st as any).katjaQW = (st as any).katjaQW ?? {})['pantiesQWstage'] = ((st as any).katjaQW['pantiesQWstage'] ?? 0) + (1);
        }
        scene.text('It\'s clear from her reddening face that she\'s embarrassed by you seeing her without panties.');
        scene.text('"Don\'t say anything," she says. "It\'s just that all my panties are in the laundry," she says, not sounding very truthful. "I normally never go without panties."');
        // TODO-QSP: iif($pantyworntype = 'none', '"You should. It''s very liberating," you tell her as you flash her you...
      }
      scene.text('"Well, this was fun but I should change back," she says.');
      if (((st as any).npc_had_sex ?? 0)?.['A14']  &&  ((st as any).katjaQW ?? 0)?.['slut'] > 60  &&  (Math.floor(Math.random() * 4) + 0) === 0  &&  ((st as any).katjaQW ?? 0)?.['sex_clossedness'] < 2) {
        scene.text('"Why don\'t I give you a little show?" she says with a mischievous smile.');
        scene.actions([
          { label: 'Enjoy the striptease', goto: ['katja_city', 'pussy_cat_outfit2_strip'] },
        ]);
      } else {
        if (((st as any).katjaQW ?? 0)?.['QWstage'] > 2  &&  ((st as any).katjaQW ?? 0)?.['sex_clossedness'] < 2) {
          if (((st as any).katjaQW ?? 0)?.['slut'] > 60) {
            scene.actions([
              { label: 'Ask her to put on a show', goto: ['katja_city', 'pussy_cat_outfit2_strip'] },
            ]);
          } else {
            qspCall(st, 'willpower', 'misc', 'force', 'easy');
            if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
              scene.actions([
                { label: 'Ask her to put on a show', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
              ]);
            } else {
              scene.actions([
                { label: 'Ask her to put on a show', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay');
    qspCall(st, 'stat', '');
    qspGoto(st, 'katja_city', 'pussy_cat_outfit2_strip');
  } },
              ]);
            }
          }
        }
        scene.actions([
          { label: 'Let her change clothes in peace', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/mall/cats_2_2.jpg');
    // TODO-QSP: dynamic text: Katja finishes changing and you leave the store. "That was fun, <<$pcs_nickname>...
    scene.text(`Katja finishes changing and you leave the store. "That was fun, ${((st as any).pcs_nickname ?? '')}," she says. "We should do this again!" She then waves goodbye and leaves you alone in the mall.`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
        ]);
      }
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterPussyCatOutfit2Strip(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'erotic_nudity', 5);
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (10);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/mall/cats_2_4.jpg');
  scene.text('Katja starts by moving more sensually while she slowly lets the shirt fall down, still holding up the skirt so you have a full view of her pussy.');
  if (((s as any).npc_had_sex ?? 0)?.['A14'] === 0) {
    scene.actions([
      { label: 'Let her finish the show', goto: ['katja_city', 'pussy_cat_outfit2_strip2'] },
    ]);
  } else {
    if (Math.max(((s as any).katjaQW ?? 0)?.['horny'], 100) > (Math.floor(Math.random() * 101) + 50)  &&  ((s as any).katjaQW ?? 0)?.['slut'] >= 80) {
      scene.actions([
        { label: 'Katja makes things more interesting', goto: ['katja_city', 'pussy_cat_outfit2_play'] },
      ]);
    } else {
      qspCall(s, 'willpower', 'mast', 'force');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Ask her to touch herself', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Ask her to touch herself', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'force');
    qspCall(st, 'stat', '');
    qspGoto(st, 'katja_city', 'pussy_cat_outfit2_play');
  } },
        ]);
      }
      scene.actions([
        { label: 'Let her finish the show', goto: ['katja_city', 'pussy_cat_outfit2_strip2'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPussyCatOutfit2Strip2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'erotic_nudity', 3);
  qspCall(s, 'arousal', 'end');
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (5);
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['slut'] = ((s as any).katjaQW['slut'] ?? 0) + (2);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/mall/cats_2_5a.jpg');
  scene.text('Katja finally takes the shirt off and throws it over her shoulder, holding it in one hand while she lifts the skirt with the other while looking directly at you. "See something you like?" she asks in a seductive tone.');
  scene.text('"Very nice," you reply.');
  scene.text('"Enough of this," she says with a laugh, and starts to change her clothes normally.');
  // TODO-QSP: dynamic text: A few minutes later, you leave the store. "That was fun, <<$pcs_nickname>>," she...
  scene.text(`A few minutes later, you leave the store. "That was fun, ${((s as any).pcs_nickname ?? '')}," she says. "We should do this again!" She then waves goodbye and leaves you alone in the mall.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterPussyCatOutfit2Play(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'foreplay', 3);
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (10);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/mall/cats_2_5b.jpg');
  scene.text('Katja stops taking off the shirt and moves her hand to her pussy, slowly starting to play with it. She seems to getting really into it.');
  if (((s as any).katjaQW ?? 0)?.['know_butt_plug'] === 0) {
    scene.text('Out of your eye, you notice that Katja\'s bag is open and see something that surprises you. You open the bag and pull out a butt plug and a vibrator.');
    scene.text('"Well, well, what do we have here?" you say as you show your findings to Katja, who immediately stops what she\'s doing and blushes bright red.');
    scene.text('"I… Vicky gave them to me when I moved to the dorm. They aren\'t something I would use!" she stammers.');
    scene.text('"Then why are they in your bag if you don\'t use them?" you ask.');
    scene.text('"Because I don\'t want Sofia to find them! That girl gets into all my stuff and if she finds them, she won\'t stop asking me about it," she answers.');
    scene.text('"So you\'ve never used them?" you ask.');
    if (((s as any).katjaQW ?? 0)?.['masturbates'] + ((s as any).npc_ass ?? 0)?.['A14'] === 0) {
      scene.text('"I\'ve never used any of them," she replies.');
      scene.text('"Well, then you\'re going to try several new things today," you say and hand her the butt plug.');
    } else {
      if (((s as any).katjaQW ?? 0)?.['masturbates'] + ((s as any).npc_ass ?? 0)?.['A14'] === 1) {
        // TODO-QSP: dynamic text: '"I''ve never used the '+iif(katjaQW['masturbates'] = 1, 'butt plug', 'vibrator'...
        scene.text('"I\'ve never used the ' + ((((s as any).katjaQW ?? 0)?.['masturbates'] === 1) ? ('butt plug') : ('vibrator')) + '." she says.');
        // TODO-QSP: dynamic text: '"So you''ve used the '+iif(katjaQW['masturbates'] = 1, 'vibrator', 'butt plug')...
        scene.text('"So you\'ve used the ' + ((((s as any).katjaQW ?? 0)?.['masturbates'] === 1) ? ('vibrator') : ('butt plug')) + '? You\'re going to try something new today," you say and hand her the butt plug.');
      } else {
        scene.text('She doesn\'t say anything, but her face is becoming even more red than before. "So you <i>have</i> been using them, you dirty girl!" you say with a smile. "Show me how you use them," you say as you hand her the butt plug.');
      }
    }
  } else {
    scene.text('You look into Katja\'s bag and find her butt plug and vibrator. "Use these to make the show even better," you say as you hand her the butt plug.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Watch her insert the butt plug', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay', 5);
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (10);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/mall/cats_2_6.jpg');
    if (((st as any).npc_ass ?? 0)?.['A14'] === 0) {
      ((st as any).npc_ass = (st as any).npc_ass ?? {})['A14'] = 1;
      scene.text('"I\'ve never put anything in my butt before!" she protests.');
      scene.text('"There\'s a first time for everything," you reply. "Lick it first to lubricate it."');
      scene.text('Katja does as you say and starts licking the butt plug. "I think it\'s wet enough for you to put it in," you say after a minute. "Lie down in the chair. It\'ll make it easier to put it in."');
      scene.text('She takes off the rest of the clothes except her bra and moves to the chair before guiding the butt plug to her ass. She starts pushing it in, but clearly meets some resistance. "Take your time," you say, but she seems determined and after a short while she pushes the butt plug completely into her ass with a slight groan of pain.');
    } else {
      if (((st as any).npc_ass ?? 0)?.['A14'] < 5) {
        ((st as any).npc_ass = (st as any).npc_ass ?? {})['A14'] = ((st as any).npc_ass['A14'] ?? 0) + (1);
      }
      // TODO-QSP: 'Katja takes the butt plug and starts licking it. After a minute or so, she takes off the rest of th...
    }
    scene.actions([
      { label: 'Watch her reaction', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay', 2);
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (10);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/mall/cats_2_7.jpg');
    scene.text('She breathes in and out heavily and opens her eyes to look at you as she starts to gently play with her pussy.');
    scene.actions([
      { label: 'Give her the vibrator', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay', 2);
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (10);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/mall/cats_2_8.jpg');
    // TODO-QSP: '"Here. Use this," you say as you turn on the vibrator and give it to her. '+iif(katjaQW['masturbate...
    scene.actions([
      { label: 'Masturbate while you watch', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/mall/cats_2_9.jpg');
    // TODO-QSP: dynamic text: 'You put your hand down your '+iif(CloSkirtShortness > 0, 'skirt', 'pants')+' an...
    scene.text('You put your hand down your ' + ((((st as any).CloSkirtShortness ?? 0) > 0) ? ('skirt') : ('pants')) + ' and start rubbing your clit while you watch Katja. She starts really getting into it and seems to have a hard time keeping her voice down. After a few minutes, she starts convulsing and has a powerful orgasm. Afterwards, she just lies in the chair, catching her breath.');
    qspCall(st, 'arousal', 'foreplay', 3);
    qspCall(st, 'arousal', 'clit_finger', (-3), 'masturbate');
    qspCall(st, 'arousal', 'end');
    if (((st as any).katjaQW ?? 0)?.['know_butt_plug'] === 0) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['know_butt_plug'] = 1;
    }
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = 0;
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (4);
    qspCall(st, 'stat', '');
    scene.text('After she comes down, she says, "Wow, that was intense!"');
    scene.text('"It was a fantastic show," you tell her.');
    scene.text('"Thanks. I guess," she adds while blushing. "Let me get changed," she adds and begins to remove the rest of the shirt.');
    scene.text('She tries to take out the buttplug, but you stop her. "Keep it in until you get home. It will be a great experience for you," you say. She blushes, but keeps it in and starts putting on her clothes.');
    // TODO-QSP: dynamic text: A few minutes later, you leave the store. "That was fun, <<$pcs_nickname>>," she...
    scene.text(`A few minutes later, you leave the store. "That was fun, ${((st as any).pcs_nickname ?? '')}," she says. "We should do this again!" She then waves goodbye and leaves you alone in the mall.`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      { label: 'Just watch', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/mall/cats_2_9.jpg');
    scene.text('You intensely watch Katja as she starts really getting into it. She seems to have a hard time keeping her voice down and after a few minutes, she starts convulsing and has a powerful orgasm. Afterwards, she just lies in the chair, catching her breath.');
    qspCall(st, 'arousal', 'foreplay', 3);
    qspCall(st, 'arousal', 'end');
    if (((st as any).katjaQW ?? 0)?.['know_butt_plug'] === 0) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['know_butt_plug'] = 1;
    }
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = 0;
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (4);
    qspCall(st, 'stat', '');
    scene.text('After she comes down, she says, "Wow, that was intense!"');
    scene.text('"It was a fantastic show," you tell her.');
    scene.text('"Thanks. I guess," she adds while blushing. "Let me get changed," she adds and begins to remove the rest of the shirt.');
    scene.text('She tries to take out the buttplug, but you stop her. "Keep it in until you get home. It will be a great experience for you," you say. She blushes, but keeps it in and starts putting on her clothes.');
    // TODO-QSP: dynamic text: A few minutes later, you leave the store. "That was fun, <<$pcs_nickname>>," she...
    scene.text(`A few minutes later, you leave the store. "That was fun, ${((st as any).pcs_nickname ?? '')}," she says. "We should do this again!" She then waves goodbye and leaves you alone in the mall.`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
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
    case 'metro':
      enterMetro(s, scene);
      break;
    case 'metro_ride':
      enterMetroRide(s, scene);
      break;
    case 'metro_get_off':
      enterMetroGetOff(s, scene);
      break;
    case 'metro_destination':
      enterMetroDestination(s, scene);
      break;
    case 'clothes_start1':
      enterClothesStart1(s, scene);
      break;
    case 'clothes_start2':
      enterClothesStart2(s, scene);
      break;
    case 'Pussy-Cats':
      enterPussy_Cats(s, scene);
      break;
    case 'pussy_cat_outfit1':
      enterPussyCatOutfit1(s, scene);
      break;
    case 'pussy_cat_outfit1_strip':
      enterPussyCatOutfit1Strip(s, scene);
      break;
    case 'pussy_cat_outfit1_strip2':
      enterPussyCatOutfit1Strip2(s, scene);
      break;
    case 'pussy_cat_outfit1_play':
      enterPussyCatOutfit1Play(s, scene);
      break;
    case 'pussy_cat_outfit2':
      enterPussyCatOutfit2(s, scene);
      break;
    case 'pussy_cat_outfit2_strip':
      enterPussyCatOutfit2Strip(s, scene);
      break;
    case 'pussy_cat_outfit2_strip2':
      enterPussyCatOutfit2Strip2(s, scene);
      break;
    case 'pussy_cat_outfit2_play':
      enterPussyCatOutfit2Play(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const katja_city: LocationDef = {
  name: 'katja_city',
  title: 'Pussy-Cats',
  region: 'other',
  locationType: 'public_indoors',
  enter: enter,
};
