import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_coffee_hole', '');
  scene.text('<center><b>Cafe "Coffee Hole"</b></center>');
  scene.img('images/locations/city/island/coffee_hole/street_sign.jpg');
  scene.text('Along the street is a sign advertising a cafe called the "Coffee Hole". Following the direction of the sign, you find the door to the cafe in a little nook between two buildings. It would have been hard to see from the street without the sign.');
  // TODO-QSP: dynamic text: 'Opening hours are ' + $func('time', 'get_time_string', 7, 0) + ' to ' + $func('...
  scene.text('Opening hours are 7:00 to 23:00.');
  if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) < 22) {
    scene.actions([
      { label: 'Enter the cafe', goto: ['city_coffee_hole', 'inner'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the city', goto: ['city_island', ''] },
  ]);
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_coffee_hole', '');
  scene.text('<center><b>Cafe "Coffee Hole"</b></center>');
  scene.img('images/locations/city/island/coffee_hole/street_sign.jpg');
  scene.text('Along the street is a sign advertising a cafe called the "Coffee Hole". Following the direction of the sign, you find the door to the cafe in a little nook between two buildings. It would have been hard to see from the street without the sign.');
  // TODO-QSP: dynamic text: 'Opening hours are ' + $func('time', 'get_time_string', 7, 0) + ' to ' + $func('...
  scene.text('Opening hours are 7:00 to 23:00.');
  if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) < 22) {
    scene.actions([
      { label: 'Enter the cafe', goto: ['city_coffee_hole', 'inner'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the city', goto: ['city_island', ''] },
  ]);
  scene.build();
}

function enterInner(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_coffee_hole', 'inner');
  qspCall(s, 'schedule', 'A14', 'A23', 'A144');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Cafe "Coffee Hole"</b></center>');
  scene.img('images/locations/city/island/coffee_hole/inside.jpg');
  scene.text('The cafe looks like it was once some type of industrial building, with tall ceilings, exposed pipes, ductwork and lights. The counter is in the far corner, while the middle of the room contains several tables and chairs.');
  scene.text('Along the wall opposite the counter is an area with several couches for people to sit and relax. The menu board shows a wide range of flavoured coffees, teas, espressos and pastries, among other things.');
  (s as any).temp_familiar_here = 0;
  if (((s as any).locat ?? 0)?.['A144'] === 9) {
    (s as any).temp_familiar_here = 1;
    scene.text('You see a familiar face working behind the counter, your former classmate <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027city_coffee_hole/u0027, /u0027anushka_work/u0027); return false;">Anushka.</a>');
  }
  if (((s as any).locat ?? 0)?.['katja'] === 30  &&  (((s as any).katjaQW ?? 0)?.['know_katja_uni'] === 1  ||  ((s as any).start_type ?? 0)?.['loc'] === 'sg')) {
    (s as any).temp_familiar_here = 1;
    // TODO-QSP: dynamic text: 'You see your'+iif( $university['enrolled_in'] = 'teaching_studies' and katjaQW[...
    scene.text('You see your' + ((((s as any).university ?? 0)?.['enrolled_in'] === 'teaching_studies'  &&  ((s as any).katjaQW ?? 0)?.['know_katja_uni'] === 1) ? (' ') : (' former ')) + 'classmate <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027katja_chat/u0027, /u0027coffee_hole/u0027); return false;">Katja</a> sitting at a table with a pile of books, a cup of coffee and a plate of food.');
  }
  if ((((s as any).AlbinaQW ?? 0)?.['know_albina_uni'] === 1  ||  ((s as any).start_type ?? 0)?.['loc'] === 'sg')  &&  ((s as any).AlbinaQW ?? 0)?.['coffee_meet'] !== ((s as any).daystart ?? 0)) {
    if (((s as any).locat ?? 0)?.['A23'] === 24) {
      (s as any).temp_familiar_here = 1;
      scene.text('You see <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027albina_events/u0027, /u0027coffee_hole1/u0027); return false;">Albina</a> sitting at a table with a woman who has her back turned to you.');
    } else {
      if (((s as any).locat ?? 0)?.['A23'] === 29) {
        (s as any).temp_familiar_here = 1;
        scene.text('You see <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027albina_events/u0027, /u0027coffee_hole2/u0027); return false;">Albina</a> sitting at a table, looking at her phone while drinking a cup of coffee.');
      }
    }
  }
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).yearstart ?? 0) >= 2  &&  ((s as any).week ?? 0) === 2  &&  ((s as any).nerd_game ?? 0)?.['fixed_uni_day'] === 0  &&  ((s as any).hour ?? 0) >= 18) {
    (s as any).temp_familiar_here = 1;
    scene.text('You see some familiar faces sitting in one of the corners. Some of the <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027nerd_game_night/u0027, /u0027crash_gamenight_uni/u0027); return false;">nerds</a> you went to school with back in Pavlovsk are gathered around a table. It looks like they\'re playing some sort of game.');
  }
  qspCall(s, 'natbel_uni_chat', 'set_coffee_hole_chats');
  if (((s as any).nerd_game ?? 0)?.['game_day'] === ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) === 18) {
    scene.actions([
      { label: '<b>Join nerds</b>', goto: ['nerd_game_night', 'game'] },
    ]);
  }
  if (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 17) {
    (s as any).temprand = (Math.floor(Math.random() * 10) + 1);
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).yearstart ?? 0) === 2) {
      if (((s as any).temprand ?? 0) === 1) {
        scene.text('You see a familiar face sitting at one of the tables, your former classmate <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027city_coffee_hole/u0027, /u0027lazar/u0027); return false;">Lazar.</a>');
      } else {
        if (((s as any).temprand ?? 0) === 2) {
          scene.text('You see a familiar face sitting at one of the tables, your former classmate <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027city_coffee_hole/u0027, /u0027dimka/u0027); return false;">Dimka.</a>');
        } else {
          if (((s as any).temprand ?? 0) === 3) {
            scene.text('You see a familiar face sitting at one of the tables, your former classmate <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027city_coffee_hole/u0027, /u0027marcus/u0027); return false;">Marcus.</a>');
          }
        }
      }
    }
    if (((s as any).temprand ?? 0) === 4) {
      if (((s as any).meet_kendra ?? 0) === 1) {
        scene.text('You see a familiar face sitting at one of the tables, <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027city_coffee_hole/u0027, /u0027kendra/u0027); return false;">Kendra.</a>');
      } else {
        if (((s as any).kendraslave ?? 0) >= 1) {
          scene.text('You see a familiar face sitting at one of the tables, your mistress <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027city_coffee_hole/u0027, /u0027kendra/u0027); return false;">Kendra.</a>');
        } else {
          if (((s as any).pcs_hotcat ?? 0) >= 5) {
            scene.text('As you look around, you see a beautiful young <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027city_coffee_hole/u0027, /u0027kendra/u0027); return false;">black woman</a> sitting at one of the tables.');
            scene.text('She notices you and gives you a quick once-over before smiling and leaning back. She seems to be watching you with an inviting smile to join her.');
          } else {
            scene.text('As you look around, you see a beautiful young black woman sitting at one of the tables. She notices you and gives you a quick once-over before returning to what she was doing.');
            scene.text('After a few minutes, she finishes her drink before getting up and leaving.');
          }
        }
      }
    } else {
      if (((s as any).temprand ?? 0) === 5) {
        if (((s as any).DjibrilQW ?? 0)?.['meet'] === 1) {
          scene.text('You see a familiar face sitting at one of the tables, Olu\'s nephew <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027city_coffee_hole/u0027, /u0027blacks/u0027); return false;">Djibril</a>, sitting with a few other young African men at another table. They see you and start talking amongst themselves.');
          scene.text('By their constant glances, you\'re sure that they\'re talking about you.');
        } else {
          if (((s as any).pcs_hotcat ?? 0) >= 5) {
            scene.text('As you look around, you see a group of young <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027city_coffee_hole/u0027, /u0027blacks/u0027); return false;">black African men</a> sitting at one of the tables. When they see you, they start talking amongst themselves.');
            scene.text('By their constant glances, you\'re sure that they\'re talking about you.');
          } else {
            scene.text('As you look around, you see a group of young black African men sitting at one of the tables. They notice you and give you a quick once-over before returning to what they were doing.');
            scene.text('After a few minutes, they finish their drinks before getting up and leaving.');
          }
        }
      } else {
        if (((s as any).temprand ?? 0) === 6) {
          if (((s as any).DjibrilQW ?? 0)?.['meet'] === 1) {
            scene.text('You see a familiar face sitting at one of the tables, Olu\'s nephew <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027city_coffee_hole/u0027, /u0027djibril/u0027); return false;">Djibril</a>.');
          } else {
            if (((s as any).pcs_hotcat ?? 0) >= 5) {
              scene.text('As you look around, you see an attractive young <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027city_coffee_hole/u0027, /u0027djibril/u0027); return false;">black man</a> sitting at one of the tables. When he notices you looking at him, he gives you a friendly smile and a wave.');
              scene.text('It seems he\'s the friendly sort and appears to be interested in you.');
            } else {
              scene.text('As you look around, you see an attractive young black man sitting at one of the tables. He notices you and gives you a quick once-over before returning to what he was doing.');
              scene.text('After a few minutes, he finishes his drink before getting up and leaving.');
            }
          }
        } else {
          if ((!((s as any).temp_familiar_here ?? 0))) {
            scene.text('As you look around, you don\'t see anyone you recognize hanging out today.');
          }
        }
      }
    }
  }
  if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) < 23) {
    scene.actions([
      { label: 'Go up to the counter to order', goto: ['city_coffee_hole', 'counter'] },
      { label: 'Go to restroom', goto: ['city_coffee_hole', 'toilet'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Exit the cafe', goto: ['city_island', ''] },
  ]);
  scene.build();
}

function enterEat(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_coffee_hole', 'eat');
  if (((s as any).katjaQW ?? 0)?.['brunch_bought'] === 1) {
    qspGoto(s, 'katja_chat', 'coffee_hole_event');
  }
  scene.img('images/locations/shared/date/cafequiet.jpg');
  if (((s as any).coffe_hole_ordered ?? 0) === 1) {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    (s as any).mood = ((s as any).mood ?? 0) + (5);
    qspCall(s, 'stat', '');
    scene.text('You take your order from the counter and find an empty table. You quietly enjoy the ambience of the place and feel your mood brightening as you look around.');
  } else {
    qspCall(s, 'stat', '');
    scene.text('You\'re sitting at a table in the cafe. It\'s nice here.');
  }
  if (((s as any).mc_inventory ?? 0)?.['tech_computer'] === 1) {
    scene.actions([
      { label: 'Open your laptop', handler: (st: GameState) => {
    (st as any).loc_arg = 'post_komp';
    qspCall(st, 'internet_mobile', 'get_access', 'free', 'noporn', 'nocamshow');
    qspGoto(st, 'komp', 'start');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Exit the cafe', goto: ['city_island', ''] },
    { label: 'Get up from the table', goto: ['city_coffee_hole', 'inner'] },
  ]);
  scene.build();
}

function enterPostKomp(s: GameState, scene: SceneBuilder): void {
  (s as any).mood = ((s as any).mood ?? 0) + (2);
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/date/cafequiet.jpg');
  scene.text('You\'re sitting at a table in the coffee shop. You could use your laptop if you wanted, but should buy something to eat or drink first.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get up from the table', goto: ['city_coffee_hole', 'inner'] },
  ]);
  scene.build();
}

function enterToilet(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_coffee_hole', 'toilet');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/coffee_hole/restroom.jpg');
  scene.text('The first thing you notice about the restroom is there seems to be only one, and it\'s co-ed. The walls are covered in what you can only describe as graffiti art, but it\'s otherwise nice and clean. Several stalls are along one wall, and a row of sinks with mirrors line the other.');
  qspCall(s, 'din_van', 'tampon');
  qspCall(s, 'din_van', 'quickwash');
  qspCall(s, 'din_van', 'basin');
  qspCall(s, 'din_van', 'publicpan');
  // TODO-QSP: end
  scene.actions([
    { label: 'Exit restroom', goto: ['city_coffee_hole', 'inner'] },
  ]);
  scene.build();
}

function enterCounter(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'city_coffee_hole';
  (s as any).menu_arg = 'counter';
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'anushka_konstantinov_schedule', '');
  qspCall(s, 'stat', '');
  if (((s as any).locat ?? 0)?.['A144'] === 9) {
    qspGoto(s, 'city_coffee_hole', 'anushka_work');
  } else {
    (s as any).temprand = (Math.floor(Math.random() * 2) + 1);
    if (((s as any).temprand ?? 0) === 1) {
      scene.text('<center><b>Cafe "Coffee Hole"</b></center>');
      scene.img('images/locations/city/island/coffee_hole/npcs/worker1.jpg');
      scene.text('As you approach, the woman behind the counter looks up at you. She appears to be in her late twenties or maybe early thirties. She has dark hair with purple streaks, and her arms are covered in tattoos.');
      scene.text('"Welcome to the Coffee Hole! What can I get you?" she asks in a friendly and welcoming tone. You notice she has a familiar accent; it reminds you a little of Marcus.');
      scene.actions([
        { label: 'Exit the cafe', goto: ['city_island', ''] },
        { label: 'Leave counter', goto: ['city_coffee_hole', 'inner'] },
        { label: 'Order from the menu (0:05)', handler: (st: GameState) => {
    qspCall(st, 'food_menu', '');
  } },
      ]);
    } else {
      scene.text('<center><b>Cafe "Coffee Hole"</b></center>');
      scene.img('images/locations/city/island/coffee_hole/npcs/worker2.jpg');
      scene.text('As you approach, the girl behind the counter looks up at you. She appears to be in her late teens or early twenties. She has short blond hair with one side shaved, her arms are covered in tattoos, and she has a large tattoo on her chest.');
      scene.text('"Welcome to the Coffee Hole… What can I get you?" she asks in a bored and monotone voice.');
      scene.actions([
        { label: 'Exit the cafe', goto: ['city_island', ''] },
        { label: 'Leave counter', goto: ['city_coffee_hole', 'inner'] },
        { label: 'Order from the menu (0:05)', handler: (st: GameState) => {
    qspCall(st, 'food_menu', '');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAnushkaWork(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'city_coffee_hole';
  (s as any).menu_arg = 'anushka_work';
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A144', 'like', 1, 'coffee_hole');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Cafe "Coffee Hole"</b></center>');
  scene.img('images/locations/city/island/coffee_hole/npcs/nush_counter.jpg');
  if (((s as any).anushkaQW ?? 0)?.['coffee_hole'] === 1) {
    if (((s as any).npc_rel ?? 0)?.['A144'] >= 60) {
      scene.text('As you approach the counter, you see Anushka working. When she sees you, she gives you a friendly smile.');
      scene.text('"Welcome to the Coffee Hole. Need your holes filled with something hot and black again?" she says with a wink, even making ordering coffee sound dirty.');
      scene.text('You smile at her. "You are so bad!"');
      if (((s as any).anushkaCityQW ?? 0)?.['first_visit'] === 0) {
        ((s as any).anushkaCityQW = (s as any).anushkaCityQW ?? {})['first_visit'] = 1;
        scene.text('"Hey, I\'ve been meaning to ask. Which dorm are you in? Maybe I can stop by and visit some time?" you ask.');
        scene.text('"I\'m not," she replies. "I\'ve got an apartment with the boys." She then shrugs. "Yeah, it\'s as bad as you think, but you can stop by sometime if you want."');
        scene.text('She gives you her address and you chat about the university before you notice the line forming behind you and start looking at the menu on the wall to see if you want to order something.');
      }
      if (((s as any).anushkaQW ?? 0)?.['photoshoot'] >= 1  &&  ((s as any).hour ?? 0) === 22) {
        scene.text('She shrugs. "And you love it. It\'s why you love hanging out with me."');
        scene.text('You end up chatting about the university and her job for a while before you notice that it\'s close to closing, and the place is almost empty. Maybe she would be up for a little after-hours photo shoot with you?');
        scene.actions([
          { label: 'Let\'s do a photo shoot', handler: (st: GameState) => {
    scene.text('<center><b>Cafe "Coffee Hole"</b></center>');
    scene.img('images/locations/city/island/coffee_hole/npcs/nush_counter.jpg');
    scene.text('You grin at her. "We should totally do a photo shoot here."');
    scene.text('She gives you a slightly surprised look. "What? Now?"');
    scene.text('You find her reaction amusing. "Well, we could, but I was thinking after you closed up. So what do you say?"');
    scene.text('She bites her lower lip. "Fuck. Okay, why not? Just hang around until I close up."');
    scene.actions([
      { label: 'Wait', goto: ['city_coffee_hole', 'photo_shoot'] },
    ]);
  } },
        ]);
      } else {
        scene.text('She shrugs. "And you love it. It\'s why you love hanging out with me."');
        scene.text('You chat about the university and her job before you notice the line forming behind you and start looking at the menu on the wall to see if you want to order something.');
      }
    } else {
      if (((s as any).npc_rel ?? 0)?.['A144'] <= 20) {
        scene.text('As you approach the counter, you see Anushka working again. When she sees you, she sighs, and you think she rolls her eyes. "Welcome to the Coffee Hole. What can I get you?"');
        scene.text('You smile at her. "So, do you like the job?"');
        scene.text('She doesn\'t return your smile. "It\'s a job. Do you want something or not? I\'ve got work to do and can\'t stand around chatting."');
        scene.text('You sigh. It seems she still doesn\'t like you. You look up at the menu on the wall to see if you might want to order something.');
      } else {
        scene.text('As you approach the counter, you see Anushka working behind it. When she sees you, she gives you a friendly smile. "Welcome to the Coffee Hole. What can I get you?"');
        scene.text('You smile at her. "So you like working here?"');
        scene.text('She shrugs a little. "Yeah, it\'s alright. As I said, it\'s pretty easy, close to my place, and I can study when it\'s slow. Plus, the owner, Joanna, is pretty cool and chill about what I do at work. As long as I don\'t leave a mess or ignore customers, she doesn\'t really care what I do."');
        scene.text('You chat about the university and her job when you notice the line forming behind you. You start looking at the menu on the wall to see if you want to order something.');
      }
    }
  } else {
    ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['coffee_hole'] = 1;
    if (((s as any).npc_rel ?? 0)?.['A144'] >= 60) {
      scene.text('As you approach the counter, you see your former classmate Anushka working behind it.');
      scene.text('When she sees you, she gives you a friendly smile. "Welcome to the Coffee Hole, where we can fill your holes with something hot and black, but maybe not in the way you would like…" she says with a wink, even making ordering coffee sound dirty.');
      scene.text('You smile at her. "Oh my god, you\'re terrible. I didn\'t know you worked here."');
      scene.text('She shrugs. "I need some extra money coming in to help pay for stuff. This is pretty easy, close to my place, and I can study when it\'s slow."');
      if (((s as any).anushkaCityQW ?? 0)?.['first_visit'] === 0) {
        ((s as any).anushkaCityQW = (s as any).anushkaCityQW ?? {})['first_visit'] = 1;
        scene.text('"Nice. Which dorm are you in by the way? Maybe I can stop by and visit some time?" you ask.');
        scene.text('"I\'m not," she replies. "I\'ve got an apartment with the boys." She then shrugs. "Yeah, it\'s as bad as you think, but you can stop by sometime if you want."');
        scene.text('She gives you her address and you chat about the university before you notice the line forming behind you and start looking at the menu on the wall to see if you want to order something.');
      }
    } else {
      if (((s as any).npc_rel ?? 0)?.['A144'] <= 20) {
        scene.text('As you approach the counter, you see your classmate Anushka working behind it. When she sees you, she sighs, and you think she rolls her eyes. "Welcome to the Coffee Hole. What can I get you?"');
        scene.text('You smile at her. "I didn\'t know you worked here."');
        scene.text('She doesn\'t return your smile. "Well, now you do, so do you want something or not? I\'ve got work to do and can\'t stand around chatting."');
        scene.text('You sigh. It seems she still doesn\'t like you. You look up at the menu on the wall to see if you might want to order something.');
      } else {
        scene.text('As you approach the counter, you see your classmate Anushka working behind it. When she sees you, she gives you a friendly smile. "Welcome to the Coffee Hole. What can I get you?"');
        scene.text('You smile at her. "I didn\'t know you worked here."');
        scene.text('She shrugs. "I need some extra money coming in to help pay for stuff. This is pretty easy, close to my place, and I can study when it\'s slow."');
        scene.text('You chat about the university before you notice the line forming behind you. You start looking at the menu on the wall to see if you want to order something.');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Exit the cafe', goto: ['city_island', ''] },
    { label: 'Leave counter', goto: ['city_coffee_hole', 'inner'] },
    { label: 'Order from the menu (0:05)', handler: (st: GameState) => {
    qspCall(st, 'food_menu', '');
  } },
  ]);
  scene.build();
}

function enterPhotoShoot(s: GameState, scene: SceneBuilder): void {
  ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['photoshoot'] = ((s as any).anushkaQW['photoshoot'] ?? 0) + (1);
  (s as any).minut = ((s as any).minut ?? 0) + (65 - ((s as any).minut ?? 0));
  qspCall(s, 'exp_gain', 'photoskl', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'npc_relationship', 'modify', 'A144', 'like', 1, 'coffee_hole_photo');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/coffee_hole/pose1.jpg');
  scene.text('Once the last of the customers are gone, Anushka locks the doors before you pull your camera out and have her stand in front of the counter. You start snapping photos of her standing in different poses as you direct her, asking her to hold various items for you as you snap pictures.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Spice this up', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'exp_gain', 'photoskl', (Math.floor(Math.random() * 2) + 1));
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/coffee_hole/pose2.jpg');
    scene.text('You want more, and you know she loves showing off. "Come on, famous model, let\'s do something a little more risque!" Anushka reaches up and pulls down her top enough to expose her bra underneath as she poses while holding a coffee pot in her other hand.');
    qspCall(st, 'arousal', 'voyeur', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Let\'s see that butt', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'exp_gain', 'photoskl', (Math.floor(Math.random() * 2) + 1));
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/coffee_hole/pose3.jpg');
    scene.text('"Let\'s see that tight little butt you love getting fucked in." She turns around to show off her butt covered in tight little booty shorts. "Okay, lose the bra now," you tell her. She takes off her bra and pulls down her shirt while still keeping her ass pointed towards you. "Okay, turn around, so we can see those firm little titties of yours."');
    scene.actions([
      { label: 'She turns', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'exp_gain', 'photoskl', (Math.floor(Math.random() * 2) + 1));
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/coffee_hole/pose4.jpg');
    scene.text('She turns around, her top around her waist, and pulls her apron aside so you get a view of her firm little breasts. You snap a few more photos. "Lose the apron."');
    scene.text('She tosses it aside, and you take a few more snaps of her. "Now the top." She pulls off the top and throws it on a nearby table. "Now the shorts."');
    scene.actions([
      { label: 'Keep taking photos', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'photoskl', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/coffee_hole/pose5.jpg');
    scene.text('She slips her shorts off and kicks them at you, forcing you to duck to avoid being hit in the face by them. You snap a few more photos while she hooks her thumbs into her panties to pull them this way and that, teasing you by almost showing off her pussy at times but stopping just short. "That\'s it, work the camera for me, Nush!"');
    qspCall(st, 'arousal', 'voyeur', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Stop teasing', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'photoskl', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/coffee_hole/pose6.jpg');
    scene.text('She finally stops teasing and pulls her panties down just enough to give you glimpses of her pussy, until she finally pulls them about mid-way down her thighs, providing a much clearer view of her clean-shaven pussy. "Okay, lose them completely now," you tell her as you change spots and direct her into different poses for you.');
    qspCall(st, 'arousal', 'voyeur', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Completely naked', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'photoskl', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/coffee_hole/pose7.jpg');
    scene.text('She slips the panties down her legs, stepping out of them and kicking them aside. Now all she is wearing is knee-high striped socks, sneakers and a smile. You keep moving around her, snapping photos as she changes poses for you. "Nice, nice. But how about you get up on the counter for me?" you tell her as you keep taking photos. She pauses a moment, then smirks before climbing up on the counter, where she gets down on her knees and starts posing some more.');
    qspCall(st, 'arousal', 'voyeur', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Work the camera', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'photoskl', (Math.floor(Math.random() * 2) + 1));
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/coffee_hole/pose8.jpg');
    scene.text('Under your direction, she spreads her legs wide while staying on her knees and sitting back on her heels, giving you a better shot at her pussy. After a bit, she starts playing with her nipples, pinching and pulling them as you keep taking pictures of her. "Okay, let\'s see that little pussy of yours." You tell her.');
    qspCall(st, 'arousal', 'voyeur', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'That\'s it', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'photoskl', (Math.floor(Math.random() * 2) + 1));
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/coffee_hole/pose9.jpg');
    scene.text('She turns and sits on her side, with one arm supporting her while reaching back to grab her butt cheek with the other. She spreads her thighs to give you a better view of her pussy and asshole.');
    qspCall(st, 'arousal', 'voyeur', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Final photos', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'photoskl', (Math.floor(Math.random() * 2) + 1));
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/anushka/nush_model/sveta_photographer/coffee_hole/pose9.jpg');
    scene.text('She sits in various poses, some fully exposed and others not, before you finally think you have the perfect final image. She\'s leaning back on her elbows with her legs together, pointing up in the air. The angle you pick doesn\'t show off much of her naked body, yet is still erotic, and she looks so happy and alive. It seems especially fitting with the Coffee Hole sign behind her; it\'s the perfect image to end this photo session.');
    scene.text('With the image taken, you lower the camera. "Thanks, Nush, that was amazing. This place made for an amazing place to take photos in. You can get dressed now."');
    scene.text('She gets off the counter and grabs her panties off the floor before pulling them back on. "My pleasure. I love modelling almost as much as I love my music."');
    scene.text('You review the photos on your camera as she gets dressed again. "Well, I should really finish cleaning up so I can go home and get some sleep before classes tomorrow."');
    qspCall(st, 'arousal', 'voyeur', 5);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Head out', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('You nod at her. "Sure thing, I should get going anyway. Thanks again. I\'ll see you around campus, hopefully. If not, I\'ll stop by sometime, and we can hang out." As she escorts you to the door, you ask; "Which room do you have over at the dorms?"');
    scene.text('She stops at the door without unlocking it. "I\'m not. I was going to, but the boys wanted to get a place in the city, so we rented an apartment close to campus. Costs me less as I only have to pay a quarter of the bills than the dorm was going to cost. Living with three boys is a nightmare though, so I only regret it constantly," she says with a laugh.');
    scene.text('"You should stop by sometime," she says and tells you where to find the place.');
    scene.text('You write it down on your phone. "Thanks, I will. See you later." With that, she unlocks the door, and you head out while she relocks the door behind you and sets about cleaning up for the night.');
    scene.actions([
      { label: 'Walk away', goto: ['city_island', ''] },
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

function enterLazar(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'city_coffee_hole';
  (s as any).menu_arg = 'lazar';
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A149', 'like', 1, 'coffee_hole');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Cafe "Coffee Hole"</b></center>');
  scene.img('images/characters/shared/headshots_main/big149.jpg');
  if (((s as any).fame ?? 0)?.['pav_slut'] > 300) {
    scene.text('You notice Lazar sitting at a table. As you approach, he says "Well, look who it is; The Queen of Cocks."');
    scene.text('You sit and talk to him for a few minutes, but all he does is talk about how easy you were back in school.');
    scene.text('"Sorry, but I need to go. Marcus, Andrey and I are renting a place together. You should come sometime and hang out, so we can have some fun."');
    scene.text('How he says it leaves no doubt about what he means by fun. Even moving to a new city won\'t let get away from your reputation as a slut. He tells you where they live before he heads outside and walks away.');
  } else {
    if (((s as any).npc_rel ?? 0)?.['A149'] >= 60) {
      ((s as any).lazarQW = (s as any).lazarQW ?? {})['city_invite'] = 1;
      if (((s as any).pcs_hotcat ?? 0) >= 6) {
        scene.text('You notice Lazar sitting at a table. "What\'s up, hottie? You enjoying the city?" he asks as you approach. You sit and talk to him for a few minutes before his phone buzzes. He looks at it and then finishes his drink. "Sorry, but I need to go. Marcus, Andrey and I are renting a place together. You should really come by sometime. We would love to have you over." He tells you where they live before he heads outside and walks away.');
      } else {
        // TODO-QSP: dynamic text: You notice Lazar sitting at a table. "Hey <<$pcs_nickname>>, how have you been?"...
        scene.text(`You notice Lazar sitting at a table. "Hey ${((s as any).pcs_nickname ?? '')}, how have you been?" he asks as you approach. You sit and talk to him for a few minutes before his phone buzzes. He looks at it and then finishes his drink. "Sorry, but I need to go. Marcus, Andrey and I are renting a place together. You should really come by sometime and hang out." He tells you where they live before he heads outside and walks away.`);
      }
    } else {
      if (((s as any).npc_rel ?? 0)?.['A149'] <= 20) {
        scene.text('You notice Lazar sitting at a table. As you approach, all he says is "Hey."');
        scene.text('You sit and talk to him for a few minutes, but he doesn\'t say much to you before he checks his phone and finishes his drink. "Sorry, but I need to go."');
        scene.text('He heads outside and walks away.');
      } else {
        if (((s as any).pcs_hotcat ?? 0) >= 6) {
          scene.text('You notice Lazar sitting at a table. "Hey, good looking. What have you been up to?" he asks as you approach.');
          scene.text('You sit and talk to him for a few minutes before his phone buzzes. He looks at it and then finishes his drink. "I need to get going. Give me your number, and I\'ll give you a call sometime. We can go out and have some fun or something sometime."');
          scene.text('You exchange phone numbers with him before he heads outside and walks away.');
        } else {
          // TODO-QSP: dynamic text: You notice Lazar sitting at a table. "Hey <<$pcs_nickname>>, how have you been?"...
          scene.text(`You notice Lazar sitting at a table. "Hey ${((s as any).pcs_nickname ?? '')}, how have you been?" he asks as you approach.`);
          scene.text('You sit and talk to him for a few minutes before his phone buzzes. He looks at it and then finishes his drink.');
          scene.text('"I need to get going, but it was nice catching up. Maybe I\'ll see you around sometime?" he says before heading outside and walking away.');
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Exit the cafe', goto: ['city_island', ''] },
    { label: 'Leave him be', goto: ['city_coffee_hole', 'inner'] },
  ]);
  scene.build();
}

function enterDimka(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'city_coffee_hole';
  (s as any).menu_arg = 'dimka';
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A1', 'like', 1, 'coffee_hole');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Cafe "Coffee Hole"</b></center>');
  scene.img('images/characters/shared/headshots_main/big1.jpg');
  if (((s as any).fame ?? 0)?.['pav_slut'] > 225) {
    scene.text('You notice Dimka sitting at a table and walk over to him.');
    scene.text('"Get away from me, you disgusting slut! I don\'t want any of the diseases you have!" he scowls when he sees you approaching.');
    scene.text('You sigh before turning and walking away.');
  } else {
    if (((s as any).npc_rel ?? 0)?.['A1'] >= 60) {
      if (((s as any).grupTipe ?? 0) === 1) {
        scene.text('You notice Dimka sitting at a table, who smiles as you approach.');
        scene.text('"Well well, look who it is. It seems spending some time around me did you good. I always knew you had it in you to make it out of Pavlovsk before you got knocked up and married to some loser. Seems my judgment was as correct as always."');
        scene.text('You sit and talk to him for a few minutes and he\'s relatively nice to you, even asking about what you\'ve been up to until he finishes his drink.');
        scene.text('"I know you love thinking this is like the old days when we could hang out all the time, but now things are different. Maybe I\'ll see you around, and if you\'re good, I\'ll introduce you to the cool crowd at the uni," he says in a haughty tone, as if he\'s already the King of the university.');
        scene.text('He then stands and walks away.');
      } else {
        scene.text('You notice Dimka sitting at a table, who smiles as you approach.');
        scene.text('"Well well, look who it is. I always thought you had it in you to make it out of Pavlovsk before you got knocked up and married to some loser. Seems my judgment was as correct as usual."');
        scene.text('You sit and talk to him for a few minutes, but all he does is give you back-handed compliments until he finishes his drink. "I know you love being seen with me, but I have better things to do. Maybe I\'ll see you around?" he says before getting up and walking away.');
      }
    } else {
      if (((s as any).npc_rel ?? 0)?.['A1'] <= 20) {
        scene.text('You notice Dimka sitting at a table, who scowls as you approach.');
        scene.text('"What the fuck do you want, loser? Never mind, I don\'t want to know. Just go away."');
        scene.text('He starts ignoring you, so you turn and walk away.');
      } else {
        if (((s as any).grupTipe ?? 0) === 1) {
          scene.text('You notice Dimka sitting at a table, who smiles as you approach.');
          scene.text('"Well well, look who it is. It seems spending some time around on me did you good. You managed to make it out of Pavlovsk before you got knocked up by some loser."');
          scene.text('You sit down and talk to him for a few minutes, but all he does is make snide remarks until he finishes his drink.');
          scene.text('"I know you love being seen with me, but we\'re not in Pavlovsk anymore and no longer run in the same social circles."');
          scene.text('He then gets up and walks away, leaving you sitting alone.');
        } else {
          scene.text('You notice Dimka sitting at a table, who smiles as you approach.');
          scene.text('"Well well, look who it is. I honestly never thought you would make it out of Pavlovsk. I figured you would be knocked up and married to some loser by now."');
          scene.text('You sit and talk to him for a few minutes, but all he does is berate you until he finishes his drink.');
          scene.text('"I know you love being seen with me, but I have better things to do," he says before getting up and walking away.');
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Exit the cafe', goto: ['city_island', ''] },
    { label: 'Leave him be', goto: ['city_coffee_hole', 'inner'] },
  ]);
  scene.build();
}

function enterMarcus(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'city_coffee_hole';
  (s as any).menu_arg = 'marcus';
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A146', 'like', 1, 'coffee_hole');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Cafe "Coffee Hole"</b></center>');
  scene.img('images/characters/shared/headshots_main/big146.jpg');
  if (((s as any).fame ?? 0)?.['pav_slut'] > 250) {
    ((s as any).marcusQW = (s as any).marcusQW ?? {})['city_invite'] = 1;
    scene.text('You notice Marcus sitting at a table.');
    scene.text('"Hey you," he smiles as you approach.');
    scene.text('You sit and talk to him for a few minutes before his phone buzzes. He looks at it and then finishes his drink.');
    scene.text('"Sorry, but I need to go. Lazar, Andrey and I are renting a place together, you should come by sometime and hang out, so we can have some fun."');
    scene.text('How he says it leaves no doubt about what he means by fun. Seems that even moving to a new city can\'t get you away from your reputation as a slut. He tells you where they live before he heads outside and walks away.');
  } else {
    if (((s as any).npc_rel ?? 0)?.['A146'] >= 50) {
      ((s as any).marcusQW = (s as any).marcusQW ?? {})['city_invite'] = 1;
      scene.text('You notice Marcus sitting at a table, who smiles as you approach.');
      // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, how have you been?"
      scene.text(`"Hey ${((s as any).pcs_nickname ?? '')}, how have you been?"`);
      scene.text('You sit and talk to him for a few minutes before his phone buzzes. He looks at it and finishes his drink.');
      scene.text('"Sorry, but I need to go. Lazar, Andrey and I are renting a place together. You should really come by sometime and hang out." He tells you where they live before he heads outside and walks away.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A146'] <= 20) {
        scene.text('You notice Marcus sitting at a table.');
        scene.text('"Hey," is all he has to say as you approach.');
        scene.text('You sit and talk to him for a few minutes, but he doesn\'t say much to you before he checks his phone and finishes his drink.');
        scene.text('"Sorry, but I need to go," he says as he he gets up and walks away.');
      } else {
        scene.text('You notice Marcus sitting at a table.');
        // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, how have you been?" he asks as you approach.
        scene.text(`"Hey ${((s as any).pcs_nickname ?? '')}, how have you been?" he asks as you approach.`);
        scene.text('You sit and talk to him for a few minutes before his phone buzzes. He looks at it and finishes his drink.');
        scene.text('"Sorry, but I need to go. It was nice catching up. Maybe I\'ll see you around?" he asks before he heads outside and walks away.');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Exit the cafe', goto: ['city_island', ''] },
    { label: 'Leave him be', goto: ['city_coffee_hole', 'inner'] },
  ]);
  scene.build();
}

function enterKendra(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'city_coffee_hole';
  (s as any).menu_arg = 'kendra';
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Cafe "Coffee Hole"</b></center>');
  scene.img('images/characters/shared/headshots_main/big84.jpg');
  if (((s as any).meet_kendra ?? 0) === 1  &&  ((s as any).pcs_hotcat ?? 0) >= 5) {
    scene.text('As you walk over to her, she invites you to sit down. You talk for a few minutes before she seems to get bored of the idle chit-chat.');
    scene.text('"You change your mind about serving me?" she asks bluntly.');
    scene.actions([
      { label: 'No', handler: (st: GameState) => {
    (st as any).kendrano = 1;
    qspCall(st, 'npc_relationship', 'modify', 'A84', 'dislike', 1, 'coffee_hole');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big84.jpg');
    scene.text('You smile at her. "Sorry, no. I still don\'t belong to anyone."');
    scene.text('She sighs softly. "Such a waste. Oh well, there are plenty of pretty little white Russian bitches that love being owned by an ebony Mistress. Perhaps we\'ll meet again, and you\'ll change your mind. I go to the university, so you should stop by sometime."');
    scene.text('She gives you directions to her dorm room before she returns to browsing.');
    scene.actions([
      { label: 'Exit the cafe', goto: ['city_island', ''] },
      { label: 'Leave her be', goto: ['city_coffee_hole', 'inner'] },
    ]);
  } },
      { label: 'Yes', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A84', 'like', 1, 'coffee_hole');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big84.jpg');
    scene.text('You look down a little to show your submission to her. "Yes, Mistress Kendra…"');
    scene.text('She smiles widely. "I think you\'re going to make a great little slave. We\'re going to have a lot of fun together. I wish I had time to start your training now, but I have things I need to do. Come by my dorm room as soon as you can."');
    scene.text('With that, she finishes her drink and stands up to leave.');
    scene.actions([
      { label: 'Exit the cafe', goto: ['city_island', ''] },
      { label: 'Leave the table', goto: ['city_coffee_hole', 'inner'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).kendraslave ?? 0) >= 1) {
      qspCall(s, 'npc_relationship', 'modify', 'A84', 'like', 1, 'coffee_hole');
      scene.text('As you walk over to her, she invites you to sit down.');
      scene.text('"Who do we have here? My favourite little white bitch. Come to service me? I wish I had time for a training session, but unfortunately, I have things to do. Come by my dorm room as soon as you can."');
      scene.text('With that, she finishes her drink and stands up to leave.');
    } else {
      if (((s as any).pcs_hotcat ?? 0) >= 5) {
        scene.text('As you walk over to her, she invites you to sit down and you take a seat opposite her.');
        scene.text('"You\'re a pretty little thing. What\'s your name?" she asks.');
        // TODO-QSP: dynamic text: "<<$pcs_firstname>>, but most people call me <<$pcs_nickname>>. What''s your nam...
        scene.text(`"${((s as any).pcs_firstname ?? '')}, but most people call me ${((s as any).pcs_nickname ?? '')}. What's your name?" you reply.`);
        // TODO-QSP: dynamic text: She smiles. "<<$pcs_nickname>>, what a pretty name. I''m Kendra, but you can cal...
        scene.text(`She smiles. "${((s as any).pcs_nickname ?? '')}, what a pretty name. I'm Kendra, but you can call me Mistress Kendra," she says confidently.`);
        scene.text('"Oh…" you reply. She\'s one of those people.');
        scene.actions([
          { label: 'Exit the cafe', goto: ['city_island', ''] },
          { label: 'Leave the table', goto: ['city_coffee_hole', 'inner'] },
          { label: 'Talk to her', handler: (st: GameState) => {
    (st as any).meet_kendra = 1;
    qspCall(st, 'npc_relationship', 'set', 'A84', 45);
    scene.img('images/characters/shared/headshots_main/big84.jpg');
    if (((st as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((st as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
      scene.text('You start talking with her, telling her that you live in Pavlovsk and are in your final year of school. She replies by saying she\'s a student from the Republic of Congo who attends the local university on a student visa.');
      // TODO-QSP: dynamic text: You talk about a wide range of subjects for a while before she smiles at you. "Y...
      scene.text(`You talk about a wide range of subjects for a while before she smiles at you. "You're beautiful. I love making pretty little Russian bitches my slaves. Call me Mistress Kendra, ${((st as any).pcs_nickname ?? '')}, and become mine."`);
      scene.text('You have no doubt where this will lead…');
    } else {
      scene.text('You start talking with her and tell her a bit about yourself, and she replies by saying that she\'s a student from the Republic of Congo attending the local university on a student visa.');
      // TODO-QSP: dynamic text: You talk about a wide range of subjects for a while before she smiles at you. "Y...
      scene.text(`You talk about a wide range of subjects for a while before she smiles at you. "You're beautiful. I love making pretty little Russian bitches my slaves. Call me Mistress Kendra, ${((st as any).pcs_nickname ?? '')}, and become mine."`);
      scene.text('You have no doubt where this will lead…');
    }
    scene.actions([
      { label: 'Call her Kendra', handler: (st: GameState) => {
    (st as any).kendrano = 1;
    qspCall(st, 'npc_relationship', 'modify', 'A84', 'dislike', 1, 'coffee_hole');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/redlight/erotomaniac/sex/shkend.jpg');
    scene.text('You smile at her. "Sorry, but I don\'t belong to anyone."');
    scene.text('She sighs softly. "Such a waste. Oh well, there are plenty of pretty little white Russian bitches that love being owned by an ebony Mistress. Perhaps we\'ll meet again, and you\'ll change your mind?"');
    scene.text('She gives you directions to her dorm room before she returns to her coffee.');
    scene.actions([
      { label: 'Exit the cafe', goto: ['city_island', ''] },
      { label: 'Leave the table', goto: ['city_coffee_hole', 'inner'] },
    ]);
  } },
      { label: 'Call her Mistress Kendra', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A84', 'like', 1, 'coffee_hole');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/redlight/erotomaniac/sex/shkend.jpg');
    scene.text('You look down a little to show your submission to her. "Yes, Mistress Kendra…"');
    scene.text('She smiles widely. "I think you\'re going to make a great little slave. We\'re going to have a lot of fun together. I wish I had time to start your training now, but I have things I need to do. Do come by my dorm room as soon as you can."');
    scene.text('With that, she finishes her drink and stands up to leave.');
    scene.actions([
      { label: 'Exit the cafe', goto: ['city_island', ''] },
      { label: 'Leave the table', goto: ['city_coffee_hole', 'inner'] },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        if (((s as any).npc_rel ?? 0)?.['A84'] < 40) {
          qspCall(s, 'npc_relationship', 'modify', 'A84', 'like', 1, 'coffee_hole');
          scene.text('You walk over to her table and stand next to it.');
          scene.text('"Hi," you smile as you greet her.');
          scene.text('She looks up at you with an annoyed look. "I don\'t have time for games, and I\'m tired of yours. Now get lost."');
          scene.text('She proceeds to ignore you, so you turn and leave.');
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Exit the cafe', goto: ['city_island', ''] },
    { label: 'Leave her be', goto: ['city_coffee_hole', 'inner'] },
  ]);
  scene.build();
}

function enterDjibril(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'city_coffee_hole';
  (s as any).menu_arg = 'djibril';
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).DjibrilQW = (s as any).DjibrilQW ?? {})['invite'] = 1;
  ((s as any).DjibrilQW = (s as any).DjibrilQW ?? {})['meet'] = 1;
  qspCall(s, 'npc_relationship', 'modify', 'A82', 'like', 1, 'coffee_hole', 1, 'coffee_hole');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Cafe "Coffee Hole"</b></center>');
  scene.img('images/characters/shared/headshots_main/big82.jpg');
  if (((s as any).DjibrilQW ?? 0)?.['invite'] === 1) {
    // TODO-QSP: dynamic text: You notice Djibril sitting at a table. He smiles as you approach. "Hello again, ...
    scene.text(`You notice Djibril sitting at a table. He smiles as you approach. "Hello again, ${((s as any).pcs_nickname ?? '')}. I didn't expect to see you here."`);
    scene.text('You sit and talk to him for a few minutes before his phone buzzes. He looks at it and then finishes his drink. "Sorry, but I need to go. You should really stop by my dorm room. We could hang out and have some fun."');
    scene.text('He reminds you which dorm room is his before he heads outside and walks away.');
  } else {
    if (((s as any).DjibrilQW ?? 0)?.['meet'] === 1  &&  ((s as any).DjibrilQW ?? 0)?.['invite'] === 0) {
      scene.img('images/locations/city/centralpark/cafe/djibril_talk.jpg');
      // TODO-QSP: dynamic text: You notice Djibril sitting at a table. He smiles as you approach. "Hello again, ...
      scene.text(`You notice Djibril sitting at a table. He smiles as you approach. "Hello again, ${((s as any).pcs_nickname ?? '')}. I didn't expect to see you here."`);
      scene.text('You sit and talk to him for a few minutes before his phone buzzes. He looks at it and then finishes his drink. "Sorry, but I need to go. If you like, you should stop by my dorm room sometime, and we can hang out and talk more."');
      scene.text('He tells you which building it is and which room is his before he heads outside and walks away.');
    } else {
      if (((s as any).pcs_hotcat ?? 0) >= 5) {
        ((s as any).DjibrilQW = (s as any).DjibrilQW ?? {})['meet'] = 1;
        scene.text('As you approach him, the young African man sitting at the table introduces himself. "I am Djibril Maina. What\'s your name?"');
        // TODO-QSP: dynamic text: You smile at him. "<<$pcs_firstname>> <<$pcs_lastname>>, but most people just ca...
        scene.text(`You smile at him. "${((s as any).pcs_firstname ?? '')} ${((s as any).pcs_lastname ?? '')}, but most people just call me ${((s as any).pcs_nickname ?? '')}."`);
        scene.text('He looks surprised for a second. "Are you from Pavlovsk?" When you nod your head, he looks even more surprised. "Do you have an Aunt Luda dating a man named Olu?"');
        scene.text('Now it\'s your turn to look surprised. "Yes, how did you know that?"');
        scene.text('He shakes his head with a slight laugh. "He is my uncle. They\'ve told me about you. Small world, huh?"');
        scene.text('You giggle. "Yeah, it really is."');
        scene.text('You sit and talk to him for a few minutes before his phone buzzes. He looks at it and then finishes his drink. "Sorry, but I need to go. If you like, you should stop by my dorm room sometime, and we can hang out and talk more."');
        scene.text('He tells you which building it is and which room is his before he heads outside and walks away.');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Exit the cafe', goto: ['city_island', ''] },
    { label: 'Leave him be', goto: ['city_coffee_hole', 'inner'] },
  ]);
  scene.build();
}

function enterBlacks(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A82', 'like');
  qspCall(s, 'stat', '');
  if (((s as any).DjibrilQW ?? 0)?.['meet'] === 0) {
    if (((s as any).pcs_hotcat ?? 0) < 5) {
      scene.img('images/locations/city/centralpark/cafe/african_students.jpg');
      scene.text('You stealthily glance at the Africans, but it looks like they are not interested in you since they never look your direction.');
      scene.actions([
        { label: 'Leave', goto: ['city_coffee_hole', 'inner'] },
      ]);
    } else {
      ((s as any).DjibrilQW = (s as any).DjibrilQW ?? {})['meet'] = 1;
      scene.text('A few young African men sitting at another table see you and start to talk among themselves. From the constant glances you receive, you\'re sure they\'re talking about you.');
      scene.text('Eventually, they get up and come over to your table before one of them introduces himself. "I am Djibril."');
      scene.text('As he speaks, he gestures to each of the others as he says their names; some smile, or wave, while others look at you with that hungry sexual look. "This is my dorm roommate, Farai, and the rest are friends of mine that live in the dorms as well. This is Lebogang, Ermias, Haruna and Arendse. What\'s your name?"');
      // TODO-QSP: dynamic text: You smile at him. "<<$pcs_firstname>> <<$pcs_lastname>>, but most people call me...
      scene.text(`You smile at him. "${((s as any).pcs_firstname ?? '')} ${((s as any).pcs_lastname ?? '')}, but most people call me ${((s as any).pcs_nickname ?? '')}."`);
      scene.text('He looks surprised for a moment. "Are you from Pavlovsk?" When you nod your head, he looks even more surprised. "Do you have an Aunt Luda, dating Olu?"');
      scene.text('Now it\'s your turn to look surprised. "Yes. How did you know that?"');
      scene.text('He shakes his head with a slight laugh. "He is my uncle. They have told me about you. Small world, huh?"');
      scene.text('You giggle as well. "Yeah, it really is."');
      scene.text('"We were about to head back to our dorm, so I was wondering if you would like to come with us? I promise it will be a lot of fun."');
      scene.actions([
        { label: 'Accept', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    qspCall(st, 'npc_relationship', 'modify', 'A82', 'like');
    qspCall(st, 'npc_relationship', 'modify', 'A242', 'like');
    qspCall(st, 'npc_relationship', 'modify', 'A243', 'like');
    qspCall(st, 'npc_relationship', 'modify', 'A244', 'like');
    qspCall(st, 'npc_relationship', 'modify', 'A245', 'like');
    qspCall(st, 'npc_relationship', 'modify', 'A246', 'like');
    ((st as any).DjibrilQW = (st as any).DjibrilQW ?? {})['invite'] = 1;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/walktodorm.jpg');
    scene.text('You smile at them. "Sure that sounds like fun."');
    scene.text('They share some looks, then smile back at you before they lead you out. As you leave, Djibril wraps his arm around your shoulder and walks with you while the rest lead the way.');
    scene.text('During the trip on the metro, they flatter you by telling you how pretty you are. You have no doubt by this point that they want to have sex with you as you arrive at the university dorms.');
    scene.actions([
      { label: 'Change your mind', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A82', 'hate');
    qspCall(st, 'npc_relationship', 'modify', 'A242', 'hate');
    qspCall(st, 'npc_relationship', 'modify', 'A243', 'hate');
    qspCall(st, 'npc_relationship', 'modify', 'A244', 'hate');
    qspCall(st, 'npc_relationship', 'modify', 'A245', 'hate');
    qspCall(st, 'npc_relationship', 'modify', 'A246', 'hate');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/walktodorm.jpg');
    scene.text('Now that you\'re sure about what they want, you decide that you don\'t want to be gangbanged by a bunch of college guys and pretend to check your phone.');
    scene.text('"Oh sorry guys, I just noticed the time and I have to go."');
    scene.text('You slip away from Djibril and walk away from them. You don\'t glance back, but you\'re sure they\'re unhappy.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_island', ''] },
    ]);
  } },
      { label: 'Go to dorm', goto: ['djibrilev1', 'djibrilgb'] },
    ]);
  } },
        { label: 'Decline', handler: (st: GameState) => {
    ((st as any).DjibrilQW = (st as any).DjibrilQW ?? {})['invite'] = 1;
    qspCall(st, 'npc_relationship', 'modify', 'A82', 'dislike');
    qspCall(st, 'npc_relationship', 'modify', 'A242', 'dislike');
    qspCall(st, 'npc_relationship', 'modify', 'A243', 'dislike');
    qspCall(st, 'npc_relationship', 'modify', 'A244', 'dislike');
    qspCall(st, 'npc_relationship', 'modify', 'A245', 'dislike');
    qspCall(st, 'npc_relationship', 'modify', 'A246', 'dislike');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/reply.jpg');
    scene.text('You shake your head no as you get up from your table. "No thank you."');
    scene.text('One of his friends says. "Djibril, come on, let\'s go."');
    scene.text('He glances over at them, then looks back to you. "Sorry, I have to go. But it was nice meeting you again. Have a nice day." after saying that, he turns and leaves to join his friends outside. Then he stops at the door. "Hey if you want, why don\'t you stop by my dorm some time." Then he tells you which building it is and which room is his. After that he walks outside with his friends and they walk away.');
    scene.actions([
      { label: 'Leave', goto: ['city_coffee_hole', 'inner'] },
    ]);
  } },
      ]);
    }
  } else {
    if (((s as any).npc_had_sex ?? 0)?.['A82'] === 0  &&  ((s as any).DjibrilQW ?? 0)?.['african_gangbang'] === 0) {
      ((s as any).DjibrilQW = (s as any).DjibrilQW ?? {})['invite'] = 1;
      if (((s as any).pcs_hotcat ?? 0) < 5) {
        scene.img('images/locations/city/centralpark/cafe/djibril_talk.jpg');
        scene.text('You notice Djibril sitting with a few other young African men at another table. They see you and start to talk amongst themselves.');
        // TODO-QSP: dynamic text: After a few minutes, they get up and Djibril heads over to your table as his fri...
        scene.text(`After a few minutes, they get up and Djibril heads over to your table as his friends head outside. "Hello again ${((s as any).pcs_nickname ?? '')}, I didn't expect to see you."`);
        scene.text('You talk to him for a few minutes before one of his friends peeks their head back inside. "Come on, Djibril! Let\'s go!"');
        scene.text('He glances over at them, then looks back at you. "Sorry, I have to go, but it was nice meeting you again. Have a nice day."');
        scene.text('He turns and leaves to join his friends outside before he stops at the door. "Hey if you want, why don\'t you stop by my dorm some time?"');
        scene.text('He tells you which building it is and which room is his before he walks outside with his friends and they walk away.');
        scene.actions([
          { label: 'Leave', goto: ['city_coffee_hole', 'inner'] },
        ]);
      } else {
        scene.img('images/locations/city/centralpark/cafe/djibril_talk.jpg');
        scene.text('Djibril gives you a huge grin and waves you over. You don\'t want to be rude, so you get up to walk over to their table.');
        scene.text('As you approach their table, Djibril speaks and gestures to each of the others as he says their names; some smile, or wave, while others look at you with that hungry sexual look.');
        // TODO-QSP: dynamic text: "Hello again, <<$pcs_nickname>>. This is my dorm roommate, Farai. The rest are f...
        scene.text(`"Hello again, ${((s as any).pcs_nickname ?? '')}. This is my dorm roommate, Farai. The rest are friends of mine that live in the dorms as well This is Lebogang, Ermias, Haruna and Arendse."`);
        scene.text('You talk to them for a while. They\'re very flirty with you before Ermias looks at his phone. "Come on, Djibril. We need to go."');
        scene.text('Djibril glances over at him as the rest of them all get up. "Sorry, I have to go, but it was nice meeting you again. Have a nice day."');
        scene.text('Just as they\'re about to leave, Djibril stops. "We were about to head back to our dorm. Would like to come with us? I promise it will be a lot of fun…"');
        scene.actions([
          { label: 'Accept', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    qspCall(st, 'npc_relationship', 'modify', 'A82', 'like');
    qspCall(st, 'npc_relationship', 'modify', 'A242', 'like');
    qspCall(st, 'npc_relationship', 'modify', 'A243', 'like');
    qspCall(st, 'npc_relationship', 'modify', 'A244', 'like');
    qspCall(st, 'npc_relationship', 'modify', 'A245', 'like');
    qspCall(st, 'npc_relationship', 'modify', 'A246', 'like');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/walktodorm.jpg');
    scene.text('You smile at them. "Sure that sounds like fun."');
    scene.text('They share some looks, then smile back at you before they lead you out. As you leave, Djibril wraps his arm around your shoulder and walks with you while the rest lead the way.');
    scene.text('During the trip on the metro, they flatter you by telling you how pretty you are. You have no doubt by this point that they want to have sex with you as you arrive at the university dorms.');
    scene.actions([
      { label: 'Change your mind', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A82', 'hate');
    qspCall(st, 'npc_relationship', 'modify', 'A242', 'hate');
    qspCall(st, 'npc_relationship', 'modify', 'A243', 'hate');
    qspCall(st, 'npc_relationship', 'modify', 'A244', 'hate');
    qspCall(st, 'npc_relationship', 'modify', 'A245', 'hate');
    qspCall(st, 'npc_relationship', 'modify', 'A246', 'hate');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/walktodorm.jpg');
    scene.text('Now that you\'re sure about what they want, you decide that you don\'t want to be gangbanged by a bunch of college guys and pretend to check your phone.');
    scene.text('"Oh sorry guys, I just noticed the time and I have to go."');
    scene.text('You slip away from Djibril and walk away from them. You don\'t glance back, but you\'re sure they\'re unhappy.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_island', ''] },
    ]);
  } },
      { label: 'Go to dorm', goto: ['djibrilev1', 'djibrilgb'] },
    ]);
  } },
          { label: 'Decline', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A82', 'dislike');
    qspCall(st, 'npc_relationship', 'modify', 'A242', 'dislike');
    qspCall(st, 'npc_relationship', 'modify', 'A243', 'dislike');
    qspCall(st, 'npc_relationship', 'modify', 'A244', 'dislike');
    qspCall(st, 'npc_relationship', 'modify', 'A245', 'dislike');
    qspCall(st, 'npc_relationship', 'modify', 'A246', 'dislike');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/reply.jpg');
    scene.text('You shake your head as you get up from your table. "No thank you."');
    scene.text('"Come on, Djibril. Let\'s go," one of his friends says.');
    scene.text('He glances over at them, then looks back at you. "Sorry, I have to go, but it was nice meeting you again. Have a nice day."');
    scene.text('He turns and leaves to join his friends outside before he stops at the door. "Hey if you want, why don\'t you stop by my dorm some time."');
    scene.text('He tells you which building it is and which room is his before he walks outside with his friends and they walk away.');
    scene.actions([
      { label: 'Leave', goto: ['city_coffee_hole', 'inner'] },
    ]);
  } },
        ]);
      }
    } else {
      if (((s as any).DjibrilQW ?? 0)?.['african_gangbang'] === 0) {
        scene.img('images/locations/city/centralpark/cafe/djibril1.jpg');
        scene.text('Djibril gives you a huge grin and waves you over. You don\'t want to be rude, so you get up to walk over to their table.');
        scene.text('As you approach their table, Djibril speaks and gestures to each of the others as he says their names; some smile, or wave, while others look at you with that hungry sexual look.');
        // TODO-QSP: dynamic text: "Hello again, <<$pcs_nickname>>. This is my dorm roommate, Farai. The rest are f...
        scene.text(`"Hello again, ${((s as any).pcs_nickname ?? '')}. This is my dorm roommate, Farai. The rest are friends of mine that live in the dorms as well. This is Lebogang, Ermias, Haruna and Arendse."`);
        scene.text('After the introductions, Djibril attempts to pull you into his lap.');
        scene.actions([
          { label: 'Pull away', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A82', 'dislike');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/djibril1.jpg');
    scene.text('You pull away from him. "What are you doing?"');
    scene.text('His friends laugh and he blushes a little. "Sorry, I just thought after last time… Anyway, we should get going."');
    scene.text('With that, he gets up to head for the door and his friends follow him.');
    scene.actions([
      { label: 'Leave', goto: ['city_coffee_hole', 'inner'] },
    ]);
  } },
          { label: 'Sit in his lap', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'npc_relationship', 'modify', 'A82', 'like');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/africantable2.jpg');
    scene.text('You take a seat on his lap.');
    scene.text('"Is this the girl?" one of his friends asks and he nods, causing them all to smile.');
    scene.text('They all start talking to you in an overtly flirty and sexual way before Djibril finally says something.');
    scene.text('"We were about to head back to our dorm and were wondering if you would like to come with us? I promise that it will be a lot of fun."');
    scene.actions([
      { label: 'Accept', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    ((st as any).DjibrilQW = (st as any).DjibrilQW ?? {})['invite'] = 1;
    qspCall(st, 'npc_relationship', 'modify', 'A82', 'like');
    qspCall(st, 'npc_relationship', 'modify', 'A242', 'like');
    qspCall(st, 'npc_relationship', 'modify', 'A243', 'like');
    qspCall(st, 'npc_relationship', 'modify', 'A244', 'like');
    qspCall(st, 'npc_relationship', 'modify', 'A245', 'like');
    qspCall(st, 'npc_relationship', 'modify', 'A246', 'like');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/walktodorm.jpg');
    scene.text('You smile at them. "Sure, that sounds like fun."');
    scene.text('They share some looks, then smile back at you before they lead you out. As you leave, Djibril wraps his arm around your shoulder and walks with you while the rest lead the way.');
    scene.text('During the trip on the metro, they flatter you by telling you how pretty you are before you finally arrive at the university dorms.');
    scene.actions([
      { label: 'Change your mind', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A82', 'loathe');
    qspCall(st, 'npc_relationship', 'modify', 'A242', 'hate');
    qspCall(st, 'npc_relationship', 'modify', 'A243', 'hate');
    qspCall(st, 'npc_relationship', 'modify', 'A244', 'hate');
    qspCall(st, 'npc_relationship', 'modify', 'A245', 'hate');
    qspCall(st, 'npc_relationship', 'modify', 'A246', 'hate');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/walktodorm.jpg');
    scene.text('You decide that you don\'t want to be gangbanged by a bunch of African college guys and pretend to check your phone.');
    scene.text('"Oh, sorry guys, I just noticed the time and I have to go."');
    scene.text('You slip away from Djibril and walk away from them. You don\'t glance back, but you\'re sure they\'re unhappy.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_island', ''] },
    ]);
  } },
      { label: 'Go to dorm', goto: ['djibrilev1', 'djibrilgb'] },
    ]);
  } },
    ]);
  } },
          { label: 'Decline', handler: (st: GameState) => {
    ((st as any).DjibrilQW = (st as any).DjibrilQW ?? {})['invite'] = 1;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/reply.jpg');
    scene.text('You shake your head as you get up from the table. "No thank you."');
    scene.text('"Come on, Djibril. Let\'s go," one of his friends says.');
    scene.text('He glances over at them, then looks back at you. "Sorry, I have to go, but it was nice meeting you again. Have a nice day."');
    scene.text('He turns and leaves to join his friends outside before he stops at the door. "If you want, you can stop by my dorm some time."');
    scene.text('He tells you which building it is and which room is his before he walks outside with his friends and they walk away.');
    scene.actions([
      { label: 'Leave', goto: ['city_coffee_hole', 'inner'] },
    ]);
  } },
        ]);
      } else {
        scene.img('images/locations/city/centralpark/cafe/africantable1.jpg');
        scene.text('You notice Djibril sitting with a few other young African men at another table. He gives you a huge grin and waves you over. You, not wanting to be rude, get up to walk over to their table.');
        // TODO-QSP: dynamic text: "Hello again, <<$pcs_nickname>>! We are about to head back to our dorm and were ...
        scene.text(`"Hello again, ${((s as any).pcs_nickname ?? '')}! We are about to head back to our dorm and were wondering if you would like to come with us and fuck again? I promise that it will be a lot of fun, just like last time. Are you interested?"`);
        scene.actions([
          { label: 'Accept', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    ((st as any).DjibrilQW = (st as any).DjibrilQW ?? {})['invite'] = 1;
    qspCall(st, 'npc_relationship', 'modify', 'A82', 'like');
    qspCall(st, 'npc_relationship', 'modify', 'A242', 'like');
    qspCall(st, 'npc_relationship', 'modify', 'A243', 'like');
    qspCall(st, 'npc_relationship', 'modify', 'A244', 'like');
    qspCall(st, 'npc_relationship', 'modify', 'A245', 'like');
    qspCall(st, 'npc_relationship', 'modify', 'A246', 'like');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/walktodorm.jpg');
    scene.text('You smile at them. "Sure, that sounds like fun."');
    scene.text('They share some looks, then smile back at you before they lead you out. As you leave, Djibril wraps his arm around your shoulder and walks with you while the rest lead the way.');
    scene.text('During the trip on the metro, they flatter you by telling you how pretty you are. You have no doubt by this point that they want to have sex with you as you arrive at the university dorms.');
    scene.actions([
      { label: 'Change your mind', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A82', 'hate');
    qspCall(st, 'npc_relationship', 'modify', 'A242', 'hate');
    qspCall(st, 'npc_relationship', 'modify', 'A243', 'hate');
    qspCall(st, 'npc_relationship', 'modify', 'A244', 'hate');
    qspCall(st, 'npc_relationship', 'modify', 'A245', 'hate');
    qspCall(st, 'npc_relationship', 'modify', 'A246', 'hate');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/walktodorm.jpg');
    scene.text('Now that you think about it some more, you decide that you don\'t want to be gangbanged by a bunch of African college guys and pretend to check your phone.');
    scene.text('"Oh, sorry guys, I just noticed the time and I have to go."');
    scene.text('You slip away from Djibril and walk away from them. You don\'t glance back, but you\'re sure they\'re unhappy.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_island', ''] },
    ]);
  } },
      { label: 'Go to dorm', goto: ['djibrilev1', 'djibrilgb'] },
    ]);
  } },
          { label: 'Decline', handler: (st: GameState) => {
    ((st as any).DjibrilQW = (st as any).DjibrilQW ?? {})['invite'] = 1;
    qspCall(st, 'npc_relationship', 'modify', 'A82', 'dislike');
    qspCall(st, 'npc_relationship', 'modify', 'A242', 'dislike');
    qspCall(st, 'npc_relationship', 'modify', 'A243', 'dislike');
    qspCall(st, 'npc_relationship', 'modify', 'A244', 'dislike');
    qspCall(st, 'npc_relationship', 'modify', 'A245', 'dislike');
    qspCall(st, 'npc_relationship', 'modify', 'A246', 'dislike');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/centralpark/cafe/reply.jpg');
    scene.text('You shake your head as you get up from the table. "No thank you."');
    scene.text('"Come on, Djibril. Let\'s go," one of his friends says.');
    scene.text('He glances over at them, then looks back at you. "Sorry, I have to go, but it was nice meeting you again. Have a nice day."');
    scene.text('He turns and leaves to join his friends outside before he stops at the door. "If you want, you can stop by my dorm some time."');
    scene.text('He tells you which building it is and which room is his before he walks outside with his friends and they walk away.');
    scene.actions([
      { label: 'Leave', goto: ['city_coffee_hole', 'inner'] },
    ]);
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'public_indoors';
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'inner':
      enterInner(s, scene);
      break;
    case 'eat':
      enterEat(s, scene);
      break;
    case 'post_komp':
      enterPostKomp(s, scene);
      break;
    case 'toilet':
      enterToilet(s, scene);
      break;
    case 'counter':
      enterCounter(s, scene);
      break;
    case 'anushka_work':
      enterAnushkaWork(s, scene);
      break;
    case 'photo_shoot':
      enterPhotoShoot(s, scene);
      break;
    case 'lazar':
      enterLazar(s, scene);
      break;
    case 'dimka':
      enterDimka(s, scene);
      break;
    case 'marcus':
      enterMarcus(s, scene);
      break;
    case 'kendra':
      enterKendra(s, scene);
      break;
    case 'djibril':
      enterDjibril(s, scene);
      break;
    case 'blacks':
      enterBlacks(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const city_coffee_hole: LocationDef = {
  name: 'city_coffee_hole',
  title: 'Cafe "Coffee Hole"',
  region: 'city',
  locationType: 'public_indoors',
  description: ['Along the street is a sign advertising a cafe called the "Coffee Hole". Following the direction of the sign, you find the door to the cafe in a little nook between two buildings. It would have been hard to see from the street without the sign.'],
  enter: enter,
};
