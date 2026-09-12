import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterFrontDoor(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'lariska_schedule', '');
  if (((s as any).frost ?? 0) > 0) {
    (s as any).frost = 0;
  }
  if (((s as any).locat ?? 0)?.['Lari_athome'] === 1) {
    if (((s as any).week ?? 0) <= 5) {
      scene.img('images/characters/shared/headshots_main/big13.jpg');
      scene.text('You knock on Lariska\'s apartment door.');
      // TODO-QSP: dynamic text: Lariska answers the door. "Come in, <<$pcs_nickname>>."
      scene.text(`Lariska answers the door. "Come in, ${((s as any).pcs_nickname ?? 0)}."`);
      scene.actions([
        { label: 'Enter the apartment', goto: ['LariskaHome', 'hallway'] },
      ]);
    } else {
      scene.img('images/characters/pavlovsk/school/girl/lariska/lariskamother.jpg');
      if (((s as any).locat ?? 0)?.['Lariska'] === 2  ||  ((s as any).locat ?? 0)?.['Lariska'] === 8  ||  ((s as any).locat ?? 0)?.['Lariska'] === 15  ||  ((s as any).locat ?? 0)?.['Lariska'] === 22) {
      } else {
        if (((s as any).locat ?? 0)?.['Lariska'] === 3  ||  ((s as any).locat ?? 0)?.['Lariska'] === 19  ||  ((s as any).locat ?? 0)?.['Lariska'] === 12) {
        } else {
          if (((s as any).locat ?? 0)?.['Lariska'] === 13) {
          } else {
            if (((s as any).locat ?? 0)?.['Lariska'] === 20) {
            } else {
              if (((s as any).locat ?? 0)?.['Lariska'] === 14  ||  ((s as any).locat ?? 0)?.['Lariska'] === 16  ||  ((s as any).locat ?? 0)?.['Lariska'] === 18) {
              }
            }
          }
        }
      }
      scene.text('You knock on Lariska\'s apartment door.');
      if (((s as any).LariskaQW ?? 0)?.['metAnna'] === 0) {
        scene.text('You knock on Lariska\'s apartment door and a smart looking brunette opens the door. You look helplessly into her impressive cleavage and let out an involuntary sigh.');
        scene.text('"Hello, are you looking for Lariska?" the woman asks with a smile.');
        // TODO-QSP: dynamic text: "Yes, I'm <<$pcs_nickname>>." you reply tearing your eyes away from her nearly e...
        scene.text(`"Yes, I'm ${((s as any).pcs_nickname ?? 0)}." you reply tearing your eyes away from her nearly exposed breasts.`);
        // TODO-QSP: dynamic text: "Ah, <<$pcs_nickname>>, Lariska has told me all about you. I'm Anna, Lariska's m...
        scene.text(`"Ah, ${((s as any).pcs_nickname ?? 0)}, Lariska has told me all about you. I'm Anna, Lariska's mother. My bunny has been so joyous lately, I am so glad she has found such a good friend! She needed someone to help get her back on her feet."`);
        // TODO-QSP: dynamic text: "<<$text_home>>"
        scene.text(`"${((s as any).text_home ?? 0)}"`);
        ((s as any).LariskaQW ?? {})['metAnna'] = 1;
      } else {
        // TODO-QSP: dynamic text: Lariska's mother opens the door. "Hello, <<$pcs_nickname>>. Come inside, <<$text...
        scene.text(`Lariska's mother opens the door. "Hello, ${((s as any).pcs_nickname ?? 0)}. Come inside, ${((s as any).text_home ?? 0)}"`);
      }
      scene.actions([
        { label: 'Enter the apartment', goto: ['LariskaHome', 'hallway'] },
      ]);
    }
  } else {
    if (((s as any).locat ?? 0)?.['Lariska'] === 9) {
    } else {
      if (((s as any).locat ?? 0)?.['Lariska'] === 6) {
      } else {
        if (((s as any).locat ?? 0)?.['Lariska'] === 7) {
        } else {
          if (((s as any).locat ?? 0)?.['Lariska'] === 5  ||  ((s as any).locat ?? 0)?.['Lariska'] === 4) {
          } else {
            if (((s as any).locat ?? 0)?.['Lariska'] === 21) {
            } else {
              if (((s as any).locat ?? 0)?.['Lariska'] === 1) {
              } else {
                if (((s as any).locat ?? 0)?.['Lariska'] === 13) {
                } else {
                  if (((s as any).locat ?? 0)?.['Lariska'] === 15) {
                  }
                }
              }
            }
          }
        }
      }
    }
    if (((s as any).week ?? 0) >= 6) {
      scene.img('images/characters/pavlovsk/school/girl/lariska/lariskamother.jpg');
      if (((s as any).LariskaQW ?? 0)?.['metAnna'] === 0) {
        scene.text('You knock on Lariska\'s apartment door and a smart looking brunette opens the door. You look helplessly into her impressive cleavage and let out an involuntary sigh.');
        scene.text('"Hello, are you looking for Lariska?" the woman asks with a smile.');
        // TODO-QSP: dynamic text: "Yes, I'm <<$pcs_nickname>>." you reply tearing your eyes away from her nearly e...
        scene.text(`"Yes, I'm ${((s as any).pcs_nickname ?? 0)}." you reply tearing your eyes away from her nearly exposed breasts.`);
        // TODO-QSP: dynamic text: "Ah, <<$pcs_nickname>>, Lariska has told me all about you. I'm Anna, Lariska's m...
        scene.text(`"Ah, ${((s as any).pcs_nickname ?? 0)}, Lariska has told me all about you. I'm Anna, Lariska's mother. My bunny has been so joyous lately, I am so glad she has found such a good friend! She needed someone to help get her back on her feet."`);
        // TODO-QSP: dynamic text: "<<$text_home>>"
        scene.text(`"${((s as any).text_home ?? 0)}"`);
        ((s as any).LariskaQW ?? {})['metAnna'] = 1;
      } else {
        // TODO-QSP: dynamic text: Lariska's mother opens the door. "Hello, <<$pcs_nickname>>. <<$text_home>>"
        scene.text(`Lariska's mother opens the door. "Hello, ${((s as any).pcs_nickname ?? 0)}. ${((s as any).text_home ?? 0)}"`);
      }
    } else {
      scene.img('images/characters/pavlovsk/school/girl/lariska/lariska_door.jpg');
      scene.text('You knock on Lariska\'s door, but nobody answers.');
      // TODO-QSP: dynamic text: <<$text_home>>
      scene.text(`${((s as any).text_home ?? 0)}`);
    }
    scene.actions([
      { label: 'Go back to town', goto: ['pav_residential', ''] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterHallway(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'lariska_schedule', '');
  scene.text('<center><b><font color="DeepSkyBlue">Hallway</font></b></center>');
  scene.img('images/characters/pavlovsk/school/girl/lariska/home_1.jpg');
  scene.text('You stand in the main hallway of the japanese styled apartment. Everything looks clean, and the air smells nice.');
  if (((s as any).locat ?? 0)?.['Lariska'] === 1  ||  ((s as any).locat ?? 0)?.['Lariska'] === 2  ||  ((s as any).locat ?? 0)?.['Lariska'] === 8  ||  ((s as any).locat ?? 0)?.['Lariska'] === 15  ||  ((s as any).locat ?? 0)?.['Lariska'] === 22) {
  } else {
    if (((s as any).locat ?? 0)?.['Lariska'] === 3  ||  ((s as any).locat ?? 0)?.['Lariska'] === 19  ||  ((s as any).locat ?? 0)?.['Lariska'] === 12  ||  ((s as any).locat ?? 0)?.['Lariska'] === 11) {
    } else {
      if (((s as any).locat ?? 0)?.['Lariska'] === 13) {
      } else {
        if (((s as any).locat ?? 0)?.['Lariska'] === 20) {
        } else {
          if (((s as any).locat ?? 0)?.['Lariska'] === 14  ||  ((s as any).locat ?? 0)?.['Lariska'] === 16  ||  ((s as any).locat ?? 0)?.['Lariska'] === 18) {
          }
        }
      }
    }
  }
  // TODO-QSP: dynamic text: Lariska <<$text_home>>.
  scene.text(`Lariska ${((s as any).text_home ?? 0)}.`);
  if (((s as any).LariskaQW ?? 0)?.['metAnna'] >= 1) {
    scene.actions([
      { label: 'Anna\'s Bedroom', goto: ['LariskaHome', 'anna_bedroom'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back to town', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) !== 'nude') {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      scene.actions([{ label: 'Continue', goto: ['pav_residential', ''] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['LariskaHome', 'hallway'] }]);
    }
  } },
    { label: 'Living Room', goto: ['LariskaHome', 'livingroom'] },
    { label: 'Kitchen', goto: ['LariskaHome', 'kitchen'] },
    { label: 'Bathroom', goto: ['LariskaHome', 'bathroom'] },
    { label: 'Lariska\'s Bedroom', goto: ['LariskaHome', 'lariska_bedroom'] },
  ]);
  scene.build();
}

function enterLivingroom(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'lariska_schedule', '');
  scene.text('<center><b><font color="DeepSkyBlue">Living Room</font></b></center>');
  scene.img('images/characters/pavlovsk/school/girl/lariska/lariska_livingroom.jpg');
  scene.text('A spacious room with a comfy looking couch and a nice tv hanging on the wall. Various plants adorn the room.');
  if (((s as any).locat ?? 0)?.['Lariska'] === 14) {
    scene.text('<a href="exec: gt \'LariskaHome\', \'livingroom_tv_1\'">Lariska</a> is curled up on the couch, watching tv.');
  }
  if (((s as any).locat ?? 0)?.['Lariska'] === 16) {
    scene.text('<a href="exec: gt \'LariskaHome\', \'livingroom_exercise_1\'">Lariska</a> is here working out.');
  }
  if (((s as any).locat ?? 0)?.['Lariska'] === 18) {
    scene.text('You see <a href="exec: gt \'LariskaHome\', \'livingroom_clean_1\'">Lariska</a> cleaning.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the hallway', goto: ['LariskaHome', 'hallway'] },
  ]);
  scene.build();
}

function enterLivingroomTv_1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/lariska/lariska_tv_1.jpg');
  scene.text('You decide to join Lariska on the couch, and watch some tv with her.');
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'npc_relationship', 'modify', 'A13', 'like');
  qspCall(s, 'mood', 'raise', 'small');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['LariskaHome', 'livingroom'] },
  ]);
  scene.build();
}

function enterLivingroomExercise_1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/lariska/lariska_exercise_1.jpg');
  scene.text('You find Lariska stretching in front of her tv. Since you don\'t feel like working out right now, you simply keep her company for a while.');
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'npc_relationship', 'modify', 'A13', 'like');
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['LariskaHome', 'livingroom'] },
  ]);
  scene.build();
}

function enterLivingroomClean_1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/lariska/lariska_cleaning_3.jpg');
  scene.text('You find Lariska dusting and doing some general cleaning. Sitting nearby, you strike up a conversation.');
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'npc_relationship', 'modify', 'A13', 'like');
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['LariskaHome', 'livingroom'] },
  ]);
  scene.build();
}

function enterKitchen(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  qspCall(s, 'kit_din', '');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'lariska_schedule', '');
  scene.text('<center><b><font color="DeepSkyBlue">Kitchen</font></b></center>');
  scene.img('images/characters/pavlovsk/school/girl/lariska/lariska_kitchen.jpg');
  scene.text('The kitchen in Lariska\'s apartment is impressive, there are several small machines meant for cooking laid out, though you have no idea what most of them do.');
  if (((s as any).lariskalove ?? 0) >= 6) {
    // TODO-QSP: dynamic text: Like your <<$npc_nickname['A29']>> does at home, somebody living here makes larg...
    scene.text(`Like your ${((s as any).npc_nickname ?? 0)?.['A29']} does at home, somebody living here makes large batches of food, ready to eat anytime. You know you are welcome to anything in here though, so you look around, trying to decide what sounds good.`);
  } else {
    // TODO-QSP: dynamic text: Like your <<$npc_nickname['A29']>> does at home, somebody living here makes larg...
    scene.text(`Like your ${((s as any).npc_nickname ?? 0)?.['A29']} does at home, somebody living here makes large batches of food, ready to eat anytime. You don't feel comfortable eating a full meal uninvited, but you know nobody will mind if you just have a snack.`);
  }
  if (((s as any).locat ?? 0)?.['Lariska'] === 3) {
    scene.text('Have <a href="exec: gt \'LariskaHome\', \'kitchen_meal_1\'">breakfast</a> with Lariska.');
  }
  if (((s as any).locat ?? 0)?.['Lariska'] === 11) {
    if (((s as any).LariskaQW ?? 0)?.['story'] === 11  &&  ((s as any).week ?? 0) < 6  &&  ((s as any).LariskaBoyDay ?? 0) <= ((s as any).daystart ?? 0)) {
      scene.text('<a href="exec: gt \'lariska_storyline\', \'Boyfriend_2\'">Lariska</a> is cooking dinner.');
    } else {
      scene.text('<a href="exec: gt \'LariskaHome\', \'kitchen_cooking_1\'">Lariska</a> is cooking dinner.');
    }
  }
  if (((s as any).locat ?? 0)?.['Lariska'] === 12) {
    scene.text('Have <a href="exec: gt \'LariskaHome\', \'kitchen_meal_1\'">dinner</a> with Lariska.');
  }
  if (((s as any).locat ?? 0)?.['Lariska'] === 19) {
    scene.text('<a href="exec: gt \'LariskaHome\', \'kitchen_cleaning_1\'">Lariska</a> is here cleaning.');
  }
  if (((s as any).lariskalove ?? 0) >= 6) {
    scene.actions([
      { label: 'Eat a hearty meal (0:20)', handler: (st: GameState) => {
    qspCall(st, 'food', 'large_meal');
  } },
      { label: 'Eat a normal meal (0:15)', handler: (st: GameState) => {
    qspCall(st, 'food', 'medium_meal');
  } },
      { label: 'Eat a light meal (0:10)', handler: (st: GameState) => {
    qspCall(st, 'food', 'small_meal');
  } },
    ]);
  }
  qspCall(s, 'core_library', 'kitchen', 'full');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the hallway', goto: ['LariskaHome', 'hallway'] },
  ]);
  scene.build();
}

function enterKitchenMeal_1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/lariska/lariska_meal.jpg');
  scene.text('You grab a plate of food and join Lariska at the table. The two of you chat about random things as you eat. When you\'re done you place the dishes in the sink.');
  qspCall(s, 'npc_relationship', 'modify', 'A13', 'like');
  (s as any).frost = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
  (s as any).fat = ((s as any).fat ?? 0) + (8);
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (60);
  if (((s as any).pcs_hydra ?? 0) >= 100) {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (30);
  } else {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (60);
  }
  (s as any).cumspclnt = 2;
  qspCall(s, 'cum_cleanup', '');
  (s as any).pcs_breath = 0;
  qspCall(s, 'mood', 'raise', 'small');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish eating', goto: ['LariskaHome', 'kitchen'] },
  ]);
  scene.build();
}

function enterKitchenCooking_1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/lariska/lariska_cooking_1.jpg');
  scene.text('You find Lariska in the kitchen, cooking dinner. Leaning up against the counter, you start chatting with her about random things, just passing the time.');
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'npc_relationship', 'modify', 'A13', 'like');
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish the conversation', goto: ['LariskaHome', 'kitchen'] },
  ]);
  scene.build();
}

function enterKitchenCleaning_1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/lariska/lariska_cleaning_2.jpg');
  scene.text('You find Lariska in the kitchen, cleaning. You keep her company while she wipes down counters and mops the floor.');
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'npc_relationship', 'modify', 'A13', 'like');
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['LariskaHome', 'kitchen'] },
  ]);
  scene.build();
}

function enterBathroom(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'lariska_schedule', '');
  scene.text('<center><b><font color="DeepSkyBlue">Bathroom</font></b></center>');
  scene.img('images/characters/pavlovsk/school/girl/lariska/lariska_bathroom.jpg');
  scene.text('The room is clean, and even smells like sage.');
  // TODO-QSP: dynamic text: There is a shower, toilet, sink, <a href="exec:gt 'mirror','start'">mirror</a>, ...
  scene.text('There is a shower, toilet, sink, <a href="exec:gt \'mirror\',\'start\'">mirror</a>, where you can \' + iif(pcs_hairbsh < 1, \'<a href="exec:gt \'mirror\',\'brush\'">brush</a>\', \'brush\') + \' your hair, and even a separate bath tub.');
  if (((s as any).locat ?? 0)?.['Lariska'] === 13) {
    scene.text('Since <a href="exec: gt \'LariskaHome\', \'bathroom_join_1\'">Lariska</a> didn\'t lock the door, you are able to enter unnoticed. Maybe you can join her…');
  }
  if (((s as any).locat ?? 0)?.['Lariska'] === 20) {
    scene.text('<a href="exec: gt \'LariskaHome\', \'bathroom_cleaning_1\'">Lariska</a> is here, cleaning the bathroom.');
  }
  if (((s as any).locat ?? 0)?.['Lariska'] !== 13) {
    qspCall(s, 'din_van', 'private');
    qspCall(s, 'din_van', 'prvt_pee');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the hallway', goto: ['LariskaHome', 'hallway'] },
  ]);
  scene.build();
}

function enterBathroomCleaning_1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/lariska/lariska_cleaning_1.jpg');
  scene.text('Leaning up against wall, you have short conversation with Lariska while she cleans.');
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'npc_relationship', 'modify', 'A13', 'like');
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['LariskaHome', 'bathroom'] },
  ]);
  scene.build();
}

function enterBathroomJoin_1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/school/gym/shower/watchlar.jpg');
  if (((s as any).lariskalove ?? 0) >= 6) {
    scene.text('You take a minute to watch Lariska. She still hasn\'t seen you yet, so you could leave without her knowing you were even there.');
    scene.text('Where would the fun be in that though.');
    qspCall(s, 'arousal', 'voyeur', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Tear yourself away and leave the room', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
  }, goto: ['LariskaHome', 'hallway'] },
      { label: 'Join her', goto: ['LariskaHome', 'bathroom_join_2'] },
    ]);
  } else {
    scene.text('You take a minute to watch Lariska, but know you need to break down a few more barriers between you two before you attempt to join her.');
    qspCall(s, 'arousal', 'voyeur', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Tear yourself away and leave the room', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
  }, goto: ['LariskaHome', 'hallway'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBathroomJoin_2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A13');
  scene.img('images/characters/pavlovsk/school/girl/lariska/lariska_shower_2.jpg');
  scene.text('You quickly strip your clothing off, and gently tap on the shower door. Startled, she turns to see you standing there, before smiling shyly and opening the door for you.');
  if (((s as any).lariskalove ?? 0) >= 9) {
    scene.actions([
      { label: 'Offer to wash her back', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'massage_give', (-8), 'lesbian');
  }, goto: ['LariskaHome', 'bathroom_join_3'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish the shower', handler: (st: GameState) => {
    (s as any).noshampoo = 1;
    qspCall(s, 'din_van', 'showerdin');
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    (s as any).pcs_hairbsh = 1;
    (s as any).pcs_makeup = 1;
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the shower.');
    }
    qspCall(s, 'arousal', 'erotic_nudity', (-8), 'lesbian');
    qspCall(s, 'stat', '');
    qspCall(s, 'arousal', 'end');
  }, goto: ['LariskaHome', 'bathroom'] },
  ]);
  scene.build();
}

function enterBathroomJoin_3(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/lariska/lariska_shower_3.jpg');
  scene.text('Doesn\'t take long before long before washing her back leads to kissing her neck. She turns and wraps her arms around you, and kisses your lips. You tease each other for a while, taking your time.');
  scene.text('Pulling back she smiles sweetly at you and goes to her knees in front of you. She starts by kissing your feet softly, keeping her eyes locked on yours as she slowly works her way up your legs.');
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  qspCall(s, 'arousal', 'kiss', (-8), 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Spread your legs', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/lariska/lariska_shower_4.jpg');
    scene.text('She kisses and licks her way up your thighs until she reaches your honeypot. Still going slowly, she licks your outer lips for a bit, before spreading them with her fingers and starts licking your inner lips.');
    scene.text('Throwing your head back, you thrust your hips against her face, as she works her way in until she is fucking you with her tongue. Waves of pleasure are flowing through you, an orgasm is not far away.');
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    qspCall(s, 'arousal', 'cuni', (-8), 'lesbian');
    qspCall(s, 'stat', '');
    qspCall(s, 'arousal', 'end');
    scene.text('As your body comes down from its high, she stands back up and kisses you some more. You taste yourself on her lips, you taste great! Eventually you break away to continue the shower.');
    scene.actions([
      { label: 'Finish your shower', handler: (st: GameState) => {
    (s as any).noshampoo = 1;
    qspCall(s, 'din_van', 'showerdin');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    (s as any).pcs_hairbsh = 1;
    (s as any).pcs_makeup = 1;
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the shower.');
    }
    qspCall(s, 'stat', '');
  }, goto: ['LariskaHome', 'bathroom'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAnnaBedroom(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'lariska_schedule', '');
  scene.text('<center><b><font color="DeepSkyBlue">Anna\'s Bedroom</font></b></center>');
  scene.img('images/characters/pavlovsk/school/girl/lariska/lariska_mom_bedroom.jpg');
  scene.text('The japanese styled bedroom is clean and orderly. You see an extra door off to one side.');
  scene.text('There is not much for you to do here at this time.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the hallway', goto: ['LariskaHome', 'hallway'] },
    { label: 'Go into the side room', handler: (st: GameState) => {
    scene.text('This door seems too big to be a closet, but it is locked right now.');
    scene.actions([
      { label: 'Continue', goto: ['LariskaHome', 'anna_bedroom'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterBdsmRoom(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'lariska_schedule', '');
  scene.text('<center><b><font color="DeepSkyBlue">BDSM Room</font></b></center>');
  scene.img('images/characters/pavlovsk/school/girl/lariska/home_2.jpg');
  scene.text('This room is full of all kinds of scary looking equipment.');
  scene.text('Until you get to know Anna better, you shouldn\'t mess with anything here.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the room', goto: ['LariskaHome', 'anna_bedroom'] },
  ]);
  scene.build();
}

function enterLariskaBedroom(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'lariska_schedule', '');
  scene.text('<center><b><font color="DeepSkyBlue">Lariska\'s Bedroom</font></b></center>');
  scene.img('images/characters/pavlovsk/school/girl/lariska/lariska_bedroom.jpg');
  scene.text('The bedroom has hints of japanese style, although not as overwhelming as the rest of the apartment. Against the wall is a <a href="exec:gt \'wardrobe\', \'start\'">wardrobe</a> where you can choose outfits and organise your clothing.');
  if (((s as any).lariskalove ?? 0) >= 12) {
    scene.text('Her <a href="exec:gt \'bed2\'">bed</a> sits directly on the floor, without space underneath.');
  } else {
    scene.text('Her bed sits directly on the floor, without space underneath.');
  }
  scene.text('<table><tr><td valign="top">');
  // TODO-QSP: func('alarmclock', 'base_alarmclock_text')
  if (((s as any).locat ?? 0)?.['Lariska'] === 1) {
    scene.text('<a href="exec:gt \'LariskaHome\', \'lariska_asleep_1\'">Lariska</a> is sound asleep, curled up and wrapped in blankets.');
  }
  if (((s as any).locat ?? 0)?.['Lariska'] === 2) {
    scene.text('<a href="exec:gt \'LariskaHome\', \'lariska_dressing_1\'">Lariska</a> is getting dressed right now.');
  }
  if (((s as any).locat ?? 0)?.['Lariska'] === 8) {
    scene.text('Lariska is doing on her school work.');
  }
  if (((s as any).locat ?? 0)?.['Lariska'] === 15) {
    scene.text('<a href="exec:gt \'LariskaHome\', \'lariska_reading_1\'">Lariska</a> is reading in bed.');
  }
  if (((s as any).locat ?? 0)?.['Lariska'] === 17) {
    scene.text('<a href="exec:gt \'LariskaHome\', \'lariska_cleaning_1\'">Lariska</a> is here cleaning.');
  }
  if (((s as any).locat ?? 0)?.['Lariska'] === 22) {
    scene.text('Lariska is here, doing various things.');
  }
  if (((s as any).locat ?? 0)?.['Lariska'] === 9) {
    scene.actions([{ label: 'Continue', goto: ['LariskaHome', 'community_center_invite'] }]);
  }
  if (((s as any).locat ?? 0)?.['Lariska'] === 2  ||  ((s as any).locat ?? 0)?.['Lariska'] === 8  ||  ((s as any).locat ?? 0)?.['Lariska'] === 22  ||  ((s as any).locat ?? 0)?.['Lariska'] === 15  ||  ((s as any).locat ?? 0)?.['Lariska'] === 17) {
    scene.actions([
      { label: 'Chat with Lariska', goto: ['LariskaHome', 'chat'] },
    ]);
  }
  if (((s as any).lernHome ?? 0) > 0) {
    scene.actions([
      { label: 'Do homework', goto: ['LariskaHome', 'homework'] },
    ]);
  }
  if (((s as any).lariskaTrain ?? 0) > 5  &&  ((s as any).vballVars ?? 0)?.['lariska_team'] === 0  &&  (((s as any).locat ?? 0)?.['Lariska'] === 8  ||  (((s as any).locat ?? 0)?.['Lariska'] === 22  &&  ((s as any).hour ?? 0) < 16  &&  ((s as any).week ?? 0) <= 5))) {
    scene.actions([
      { label: 'Talk to Lariska about becoming a pro volleyball player', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big13.jpg');
    scene.text('You decided to talk to Lariska about joining the professional volleyball team.');
    scene.text('"Lariska, you are an excellent volleyball player. Coach Mikheil Nikolayevich has a professional team, why don\'t you ask to join it?" you ask your friend.');
    scene.text('"Well, I guess I\'m afraid he\'ll tell me I\'m not good enough. I\'ve seen him tell other good players they aren\'t good enough to play for him."');
    if (((s as any).pcs_vball ?? 0) < 50  &&  ((s as any).vballVars ?? 0)?.['sub_player'] === 1) {
      scene.actions([
        { label: 'Drop the subject', goto: ['LariskaHome', 'lariska_bedroom'] },
        { label: 'Tell her you\'ll go with her for support.', handler: (st: GameState) => {
    // TODO-QSP: LariskaQW['join_team'] = 1
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['volley_coach', 'lariska_join'] },
      ]);
    } else {
      if (((s as any).pcs_vball ?? 0) >= 50  &&  ((s as any).vballVars ?? 0)?.['sub_player'] === 1) {
        scene.actions([
          { label: 'Drop the subject', goto: ['LariskaHome', 'lariska_bedroom'] },
          { label: 'Tell her you\'ll go with her for support.', handler: (st: GameState) => {
    // TODO-QSP: LariskaQW['join_team'] = 2
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['volley_coach', 'lariska_join'] },
        ]);
      } else {
        if (((s as any).pcs_vball ?? 0) >= 50  &&  ((s as any).vballVars ?? 0)?.['on_team'] === 0) {
          scene.actions([
            { label: 'Drop the subject', goto: ['LariskaHome', 'lariska_bedroom'] },
            { label: 'Tell her that you should both try to get on the team.', handler: (st: GameState) => {
    // TODO-QSP: LariskaQW['join_team'] = 3
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['volley_coach', 'lariska_join'] },
          ]);
        } else {
          if (((s as any).vballVars ?? 0)?.['on_team'] === 1) {
            scene.actions([
              { label: 'Drop the subject', goto: ['LariskaHome', 'lariska_bedroom'] },
              { label: 'Tell her you\'ll go with her and since you\'re already on the team, you can help convince the coach.', handler: (st: GameState) => {
    // TODO-QSP: LariskaQW['join_team'] = 4
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['volley_coach', 'lariska_join'] },
            ]);
          } else {
            scene.actions([
              { label: 'Drop the subject', goto: ['LariskaHome', 'lariska_bedroom'] },
              { label: 'Tell her you\'ll go with her for support.', handler: (st: GameState) => {
    // TODO-QSP: LariskaQW['join_team'] = 1
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['volley_coach', 'lariska_join'] },
            ]);
          }
        }
      }
    }
  } },
    ]);
  }
  if (((s as any).lariskaroomfun ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).LariskaQW ?? 0)?.['story'] >= 8  &&  ((s as any).npc_rel ?? 0)?.['A13'] >= 80  &&  (((s as any).locat ?? 0)?.['Lariska'] === 2  ||  ((s as any).locat ?? 0)?.['Lariska'] === 8  ||  ((s as any).locat ?? 0)?.['Lariska'] === 22  ||  ((s as any).locat ?? 0)?.['Lariska'] === 15  ||  ((s as any).locat ?? 0)?.['Lariska'] === 17)) {
    scene.actions([
      { label: 'Flirt with her', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'A13');
    if (((s as any).LariskaQW ?? 0)?.['story'] === 8) {
      ((s as any).LariskaQW ?? {})['story'] = 9;
    }
    (s as any).lariskaroomfun = ((s as any).daystart ?? 0);
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/lariska/sex/home/kiss_1.mp4');
    scene.text('You slide closer to her so your legs are touching and gently place your left hand on her shoulder.');
    if ((!((s as any).lariskalove ?? 0))) {
      if (((s as any).christinaQW ?? 0)?.['fight'] === 1  ||  ((s as any).christinaQW ?? 0)?.['blackmail'] === 2) {
        scene.text('Startled, her body stiffens up and she refuses to look anywhere but straight down. After what you did to Christina, she knows she is no match for you and is probably terrified of having traded one Mistress for another. You take your time, slowly running your hand across her back until she calms down a bit and surprisingly leans against you, still looking down. You reach across with your right hand and place it on top of hers and start softly running your fingers across it. You do this for a few minutes before she finally looks up and leans her face in, a happy look in her eye. Tilting your head to one side a bit, you close the distance left between your lips until they touch. She shivers a bit in pleasure, obviously not used to such a gentle touch, before pulling away, her face bright red.');
      } else {
        scene.text('Startled, her body stiffens up and she refuses to look anywhere but straight down. You take your time, slowly running your hand across her back until she calms down a bit and surprisingly leans against you, still looking down. You reach across with your right hand and place it on top of hers and start softly running your fingers across it. You do this for a few minutes before she finally looks up and leans her face in, a happy look in her eye. Tilting your head to one side a bit, you close the distance left between your lips until they touch. She shivers a bit in pleasure, obviously not used to such a gentle touch, before pulling away, her face bright red.');
      }
      qspCall(s, 'npc_relationship', 'modify', 'A13', 'like');
      (s as any).lariskalove = 1;
      qspCall(s, 'arousal', 'kiss', 3, 'lesbian');
      qspCall(s, 'stat', '');
    } else {
      if (((s as any).lariskalove ?? 0) <= 5) {
        scene.text('She reacts better this time, cuddling up against you with a shy smile on her face. You let your left hand trail its way down her back until you reach her hips, then slide it around her waist. The two of you sit like that for a few minutes, enjoying each other company and the closeness it\'s bringing. Eventually she sits up a bit, cheeks blushed, and puts her face next to yours, obviously hoping for another kiss. You lean the rest of the way in until your lips touch hers. The kiss lasts longer than the first time, by the time she pulls back you are both a little breathless. Suddenly she seems to realize what the two of you were just doing and gets nervous, standing up she starts moving around the room trying to come to terms with the feelings racing through her. Wisely, you decide to give her space for now.');
        qspCall(s, 'npc_relationship', 'modify', 'A13', 'like');
        (s as any).lariskalove = ((s as any).lariskalove ?? 0) + (1);
        qspCall(s, 'arousal', 'kiss', 5, 'lesbian');
        qspCall(s, 'stat', '');
      } else {
        scene.text('No longer shy around you, she wraps her hands around your waist and starts kissing you. You move your left hand down to the top of her butt while putting your right on her stomach and start rubbing in circular motions. You slowly start leaning back, pulling her with you until you are both laying on your sides, and her tongue slips between your lips and starts playing with yours. You feel her left hand slide down from your waist and starts rubbing your butt before working its way down from there to your thigh. Hooking her hand around it, she pulls your leg up and over her own before going back to massaging your butt again. Eventually she pulls back from your tongue fight, face flushed a deep red and panting from lack of breath. She gives you a long, hungry look, telling you without words she wants, no, NEEDS, to keep going.');
        qspCall(s, 'npc_relationship', 'modify', 'A13', 'like');
        (s as any).lariskalove = ((s as any).lariskalove ?? 0) + (1);
        if (((s as any).LariskaQW ?? 0)?.['story'] === 9) {
          ((s as any).LariskaQW ?? {})['story'] = 10;
        }
        qspCall(s, 'arousal', 'kiss', 5, 'foreplay', 'lesbian');
        qspCall(s, 'stat', '');
      }
    }
    if (((s as any).lariskalove ?? 0) >= 6) {
      scene.actions([
        { label: 'Go further', goto: ['LariskaSex', 'undressed1'] },
      ]);
    }
    scene.actions([
      { label: 'Stop for now', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
  }, goto: ['LariskaHome', 'lariska_bedroom'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the hallway', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) !== 'nude') {
      scene.actions([{ label: 'Continue', goto: ['LariskaHome', 'hallway'] }]);
    }
  } },
  ]);
  scene.build();
}

function enterLariskaAsleep_1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/lariska/lariska_sleeping_1.jpg');
  scene.text('She is fast asleep in her bed, uncovered and nude. You cannot stop yourself from staring at her for a few minutes, before ripping your eyes away and deciding what you should do next.');
  qspCall(s, 'npc_relationship', 'modify', 'A13', 'like');
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Move away from the bed', goto: ['LariskaHome', 'lariska_bedroom'] },
  ]);
  scene.build();
}

function enterLariskaDressing_1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/lariska/lariska_dressing_1.jpg');
  scene.text('She blushes a bit when she realizes you are looking at her, but does not stop. You just sit and watch, while chatting with her.');
  qspCall(s, 'npc_relationship', 'modify', 'A13', 'like');
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish this conversation', goto: ['LariskaHome', 'lariska_bedroom'] },
  ]);
  scene.build();
}

function enterLariskaCleaning_1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/lariska/lariska_cleaning_4.jpg');
  scene.text('Sitting on the bed, you have short conversation with Lariska while she cleans.');
  qspCall(s, 'npc_relationship', 'modify', 'A13', 'like');
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish this conversation', goto: ['LariskaHome', 'lariska_bedroom'] },
  ]);
  scene.build();
}

function enterLariskaReading_1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/lariska/lariska_reading_1.jpg');
  scene.text('You lay next to her, your bodies pressed together, and chat aimlessly with her while she keeps reading.');
  qspCall(s, 'npc_relationship', 'modify', 'A13', 'like');
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish this conversation', goto: ['LariskaHome', 'lariska_bedroom'] },
  ]);
  scene.build();
}

function enterHomework(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big13.jpg');
  qspCall(s, 'npc_relationship', 'modify', 'A13', 'like');
  if (((s as any).LariskaQW ?? 0)?.['story'] === 6) {
    ((s as any).LariskaQW ?? {})['story'] = 7;
  }
  qspCall(s, 'grades', 'homework', 'school', 'yes', 1, 1, 'A13');
  (s as any).lern = ((s as any).lern ?? 0) + (1);
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  if (((s as any).class ?? 0)?.['school_grade_average'] >= 80) {
    scene.text('You did your homework with Lariska and figured out the hard parts together.');
  } else {
    scene.text('You did your homework together and Lariska explained the hard parts to you.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish up', goto: ['LariskaHome', 'lariska_bedroom'] },
  ]);
  scene.build();
}

function enterChat(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big13.jpg');
  qspCall(s, 'npc_relationship', 'modify', 'A13', 'like');
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  if (((s as any).LariskaQW ?? 0)?.['story'] === 7) {
    scene.actions([{ label: 'Continue', goto: ['lariska_storyline', 'GettingToKnow'] }]);
  } else {
    if (((s as any).LariskaQW ?? 0)?.['story'] === 10) {
      scene.actions([{ label: 'Continue', goto: ['lariska_storyline', 'Boyfriend_1'] }]);
    } else {
      if (((s as any).LariskaQW ?? 0)?.['story'] === 13  &&  ((s as any).LariskaBoyDay ?? 0) <= ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['lariska_storyline', 'Boyfriend_4'] }]);
      } else {
        if (((s as any).LariskaQW ?? 0)?.['story'] === 15) {
          scene.actions([{ label: 'Continue', goto: ['lariska_storyline', 'Boyfriend_6'] }]);
        } else {
          if (((s as any).LariskaQW ?? 0)?.['story'] === 16  &&  ((s as any).LariskaBoyDay ?? 0) <= ((s as any).daystart ?? 0)) {
            scene.actions([{ label: 'Continue', goto: ['lariska_storyline', 'Boyfriend_7'] }]);
          } else {
            if (((s as any).LariskaQW ?? 0)?.['story'] === 17  &&  ((s as any).LariskaBoyDay ?? 0) <= ((s as any).daystart ?? 0)) {
              scene.actions([{ label: 'Continue', goto: ['lariska_storyline', 'Boyfriend_8'] }]);
            } else {
              if (((s as any).LariskaQW ?? 0)?.['story'] === 18  &&  ((s as any).LariskaBoyDay ?? 0) <= ((s as any).daystart ?? 0)) {
                scene.actions([{ label: 'Continue', goto: ['lariska_storyline', 'Boyfriend_9'] }]);
              } else {
                scene.text('You spend some time chatting with Lariska about whatever comes to mind.');
                scene.actions([
                  { label: 'Finish this conversation', goto: ['LariskaHome', 'lariska_bedroom'] },
                ]);
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

function enterCommunityCenterInvite(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big13.jpg');
  scene.text('Lariska looks at her watch and says, "It\'s time to go to the sports club."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Say goodbye and leave', goto: ['pav_residential', ''] },
    { label: 'Go with Lariska', handler: (st: GameState) => {
    if (((s as any).lariskaTrain ?? 0) < 6  &&  ((s as any).vballVars ?? 0)?.['lariska_team'] === 0) {
      (s as any).lariskaTrain = ((s as any).lariskaTrain ?? 0) + (1);
    }
    (s as any).minut = ((s as any).minut ?? 0) + 10;
  }, goto: ['gdksport', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'front_door':
      enterFrontDoor(s, scene);
      break;
    case 'hallway':
      enterHallway(s, scene);
      break;
    case 'livingroom':
      enterLivingroom(s, scene);
      break;
    case 'livingroom_tv_1':
      enterLivingroomTv_1(s, scene);
      break;
    case 'livingroom_exercise_1':
      enterLivingroomExercise_1(s, scene);
      break;
    case 'livingroom_clean_1':
      enterLivingroomClean_1(s, scene);
      break;
    case 'kitchen':
      enterKitchen(s, scene);
      break;
    case 'kitchen_meal_1':
      enterKitchenMeal_1(s, scene);
      break;
    case 'kitchen_cooking_1':
      enterKitchenCooking_1(s, scene);
      break;
    case 'kitchen_cleaning_1':
      enterKitchenCleaning_1(s, scene);
      break;
    case 'bathroom':
      enterBathroom(s, scene);
      break;
    case 'bathroom_cleaning_1':
      enterBathroomCleaning_1(s, scene);
      break;
    case 'bathroom_join_1':
      enterBathroomJoin_1(s, scene);
      break;
    case 'bathroom_join_2':
      enterBathroomJoin_2(s, scene);
      break;
    case 'bathroom_join_3':
      enterBathroomJoin_3(s, scene);
      break;
    case 'anna_bedroom':
      enterAnnaBedroom(s, scene);
      break;
    case 'bdsm_room':
      enterBdsmRoom(s, scene);
      break;
    case 'lariska_bedroom':
      enterLariskaBedroom(s, scene);
      break;
    case 'lariska_asleep_1':
      enterLariskaAsleep_1(s, scene);
      break;
    case 'lariska_dressing_1':
      enterLariskaDressing_1(s, scene);
      break;
    case 'lariska_cleaning_1':
      enterLariskaCleaning_1(s, scene);
      break;
    case 'lariska_reading_1':
      enterLariskaReading_1(s, scene);
      break;
    case 'homework':
      enterHomework(s, scene);
      break;
    case 'chat':
      enterChat(s, scene);
      break;
    case 'community_center_invite':
      enterCommunityCenterInvite(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const LariskaHome: LocationDef = {
  name: 'LariskaHome',
  title: 'You knock on Lariska\'s apartment door.',
  region: 'other',
  locationType: 'private',
  locclass: 'bedr',
  enter: enter,
};
