import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
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
    scene.text('You see a familiar face working behind the counter, your former classmate <a href="exec:gt \'city_coffee_hole\', \'anushka_work\'">Anushka.</a>');
  }
  if (((s as any).locat ?? 0)?.['katja'] === 30  &&  (((s as any).katjaQW ?? 0)?.['know_katja_uni'] === 1  ||  ((s as any).start_type ?? 0)?.['loc'] === 'sg')) {
    (s as any).temp_familiar_here = 1;
    // TODO-QSP: dynamic text: You see your'+iif( $university['enrolled_in'] = 'teaching_studies' and katjaQW['...
    scene.text('You see your\'+iif( $university[\'enrolled_in\'] = \'teaching_studies\' and katjaQW[\'know_katja_uni\'] = 1, \' \', \' former \')+\'classmate <a href="exec:gt \'katja_chat\', \'coffee_hole\'">Katja</a> sitting at a table with a pile of books, a cup of coffee and a plate of food.');
  }
  if ((((s as any).AlbinaQW ?? 0)?.['know_albina_uni'] === 1  ||  ((s as any).start_type ?? 0)?.['loc'] === 'sg')  &&  ((s as any).AlbinaQW ?? 0)?.['coffee_meet'] !== ((s as any).daystart ?? 0)) {
    if (((s as any).locat ?? 0)?.['A23'] === 24) {
      (s as any).temp_familiar_here = 1;
      scene.text('You see <a href="exec:gt \'albina_events\', \'coffee_hole1\'">Albina</a> sitting at a table with a woman who has her back turned to you.');
    } else {
      (s as any).temp_familiar_here = 1;
      scene.text('You see <a href="exec:gt \'albina_events\', \'coffee_hole2\'">Albina</a> sitting at a table, looking at her phone while drinking a cup of coffee.');
    }
  }
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).yearstart ?? 0) >= 2  &&  ((s as any).week ?? 0) === 2  &&  ((s as any).nerd_game ?? 0)?.['fixed_uni_day'] === 0  &&  ((s as any).hour ?? 0) >= 18) {
    (s as any).temp_familiar_here = 1;
    scene.text('You see some familiar faces sitting in one of the corners. Some of the <a href="exec:gt \'nerd_game_night\', \'crash_gamenight_uni\'">nerds</a> you went to school with back in Pavlovsk are gathered around a table. It looks like they\'re playing some sort of game.');
  }
  qspCall(s, 'natbel_uni_chat', 'set_coffee_hole_chats');
  if (((s as any).nerd_game ?? 0)?.['game_day'] === ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) === 18) {
    // TODO-QSP: act '<b>Join nerds</b>': gt 'nerd_game_night', 'game'
  }
  if (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 17) {
    (s as any).temprand = Math.floor(Math.random() * 10) + 1;
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).yearstart ?? 0) === 2) {
      if (((s as any).temprand ?? 0) === 1) {
        scene.text('You see a familiar face sitting at one of the tables, your former classmate <a href="exec:gt \'city_coffee_hole\',\'lazar\'">Lazar.</a>');
      } else {
        scene.text('You see a familiar face sitting at one of the tables, your former classmate <a href="exec:gt \'city_coffee_hole\',\'dimka\'">Dimka.</a>');
        if (((s as any).temprand ?? 0) === 3) {
          scene.text('You see a familiar face sitting at one of the tables, your former classmate <a href="exec:gt \'city_coffee_hole\',\'marcus\'">Marcus.</a>');
        }
      }
      if (((s as any).temprand ?? 0) === 4) {
        if (((s as any).meet_kendra ?? 0) === 1) {
          scene.text('You see a familiar face sitting at one of the tables, <a href="exec:gt \'city_coffee_hole\',\'kendra\'">Kendra.</a>');
        } else {
          scene.text('You see a familiar face sitting at one of the tables, your mistress <a href="exec:gt \'city_coffee_hole\',\'kendra\'">Kendra.</a>');
          if (((s as any).pcs_hotcat ?? 0) >= 5) {
            scene.text('As you look around, you see a beautiful young <a href="exec:gt \'city_coffee_hole\',\'kendra\'">black woman</a> sitting at one of the tables.');
            scene.text('She notices you and gives you a quick once-over before smiling and leaning back. She seems to be watching you with an inviting smile to join her.');
          } else {
            scene.text('As you look around, you see a beautiful young black woman sitting at one of the tables. She notices you and gives you a quick once-over before returning to what she was doing.');
            scene.text('After a few minutes, she finishes her drink before getting up and leaving.');
          }
          if (((s as any).temprand ?? 0) === 5) {
            if (((s as any).DjibrilQW ?? 0)?.['meet'] === 1) {
              scene.text('You see a familiar face sitting at one of the tables, Olu\'s nephew <a href="exec:gt \'city_coffee_hole\', \'blacks\'">Djibril</a>, sitting with a few other young African men at another table. They see you and start talking amongst themselves.');
              scene.text('By their constant glances, you\'re sure that they\'re talking about you.');
            } else {
              scene.text('As you look around, you see a group of young <a href="exec:gt \'city_coffee_hole\',\'blacks\'">black African men</a> sitting at one of the tables. When they see you, they start talking amongst themselves.');
              scene.text('By their constant glances, you\'re sure that they\'re talking about you.');
              scene.text('As you look around, you see a group of young black African men sitting at one of the tables. They notice you and give you a quick once-over before returning to what they were doing.');
              scene.text('After a few minutes, they finish their drinks before getting up and leaving.');
            }
          } else {
            if (((s as any).DjibrilQW ?? 0)?.['meet'] === 1) {
              scene.text('You see a familiar face sitting at one of the tables, Olu\'s nephew <a href="exec:gt \'city_coffee_hole\', \'djibril\'">Djibril</a>.');
            } else {
              scene.text('As you look around, you see an attractive young <a href="exec:gt \'city_coffee_hole\',\'djibril\'">black man</a> sitting at one of the tables. When he notices you looking at him, he gives you a friendly smile and a wave.');
              scene.text('It seems he\'s the friendly sort and appears to be interested in you.');
              scene.text('As you look around, you see an attractive young black man sitting at one of the tables. He notices you and gives you a quick once-over before returning to what he was doing.');
              scene.text('After a few minutes, he finishes his drink before getting up and leaving.');
            }
            if (((s as any).temp_familiar_here ?? 0) === 0) {
              scene.text('As you look around, you don\'t see anyone you recognize hanging out today.');
            }
          }
          if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) < 23) {
            scene.actions([
              { label: 'Go up to the counter to order', goto: ['city_coffee_hole', 'counter'] },
              { label: 'Go to restroom', goto: ['city_coffee_hole', 'toilet'] },
            ]);
          }
          scene.actions([
            { label: 'Exit the cafe', goto: ['city_island', ''] },
          ]);
        }
        if (((s as any).args ?? 0)[0]=== 'counter') {
          (s as any).minut = ((s as any).minut ?? 0) + 5;
          qspCall(s, 'anushka_konstantinov_schedule', '');
          qspCall(s, 'stat', '');
          if (((s as any).locat ?? 0)?.['A144'] === 9) {
            scene.actions([{ label: 'Continue', goto: ['city_coffee_hole', 'anushka_work'] }]);
          } else {
            (s as any).temprand = Math.floor(Math.random() * 2) + 1;
            if (((s as any).temprand ?? 0) === 1) {
              scene.text('<center><b>Cafe "Coffee Hole"</b></center>');
              scene.img('images/locations/city/island/coffee_hole/npcs/worker1.jpg');
              scene.text('As you approach, the woman behind the counter looks up at you. She appears to be in her late twenties or maybe early thirties. She has dark hair with purple streaks, and her arms are covered in tattoos.');
              scene.text('"Welcome to the Coffee Hole! What can I get you?" she asks in a friendly and welcoming tone. You notice she has a familiar accent; it reminds you a little of Marcus.');
              scene.actions([
                { label: 'Exit the cafe', goto: ['city_island', ''] },
                { label: 'Leave counter', goto: ['city_coffee_hole', 'inner'] },
                { label: 'Order from the menu (0:05)', handler: (st: GameState) => {
    // TODO-QSP: gs 'food_menu'
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
    // TODO-QSP: gs 'food_menu'
  } },
              ]);
            }
          }
        }
        if (((s as any).args ?? 0)[0]=== 'anushka_work') {
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
                (s as any).anushkaCityQW['first_visit'] = 1;
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
              scene.text('As you approach the counter, you see Anushka working again. When she sees you, she sighs, and you think she rolls her eyes. "Welcome to the Coffee Hole. What can I get you?"');
              scene.text('You smile at her. "So, do you like the job?"');
              scene.text('She doesn\'t return your smile. "It\'s a job. Do you want something or not? I\'ve got work to do and can\'t stand around chatting."');
              scene.text('You sigh. It seems she still doesn\'t like you. You look up at the menu on the wall to see if you might want to order something.');
              scene.text('As you approach the counter, you see Anushka working behind it. When she sees you, she gives you a friendly smile. "Welcome to the Coffee Hole. What can I get you?"');
              scene.text('You smile at her. "So you like working here?"');
              scene.text('She shrugs a little. "Yeah, it\'s alright. As I said, it\'s pretty easy, close to my place, and I can study when it\'s slow. Plus, the owner, Joanna, is pretty cool and chill about what I do at work. As long as I don\'t leave a mess or ignore customers, she doesn\'t really care what I do."');
              scene.text('You chat about the university and her job when you notice the line forming behind you. You start looking at the menu on the wall to see if you want to order something.');
            }
          } else {
            (s as any).anushkaQW['coffee_hole'] = 1;
            if (((s as any).npc_rel ?? 0)?.['A144'] >= 60) {
              scene.text('As you approach the counter, you see your former classmate Anushka working behind it.');
              scene.text('When she sees you, she gives you a friendly smile. "Welcome to the Coffee Hole, where we can fill your holes with something hot and black, but maybe not in the way you would like…" she says with a wink, even making ordering coffee sound dirty.');
              scene.text('You smile at her. "Oh my god, you\'re terrible. I didn\'t know you worked here."');
              scene.text('She shrugs. "I need some extra money coming in to help pay for stuff. This is pretty easy, close to my place, and I can study when it\'s slow."');
              if (((s as any).anushkaCityQW ?? 0)?.['first_visit'] === 0) {
                (s as any).anushkaCityQW['first_visit'] = 1;
                scene.text('"Nice. Which dorm are you in by the way? Maybe I can stop by and visit some time?" you ask.');
                scene.text('"I\'m not," she replies. "I\'ve got an apartment with the boys." She then shrugs. "Yeah, it\'s as bad as you think, but you can stop by sometime if you want."');
                scene.text('She gives you her address and you chat about the university before you notice the line forming behind you and start looking at the menu on the wall to see if you want to order something.');
              }
            } else {
              scene.text('As you approach the counter, you see your classmate Anushka working behind it. When she sees you, she sighs, and you think she rolls her eyes. "Welcome to the Coffee Hole. What can I get you?"');
              scene.text('You smile at her. "I didn\'t know you worked here."');
              scene.text('She doesn\'t return your smile. "Well, now you do, so do you want something or not? I\'ve got work to do and can\'t stand around chatting."');
              scene.text('You sigh. It seems she still doesn\'t like you. You look up at the menu on the wall to see if you might want to order something.');
              scene.text('As you approach the counter, you see your classmate Anushka working behind it. When she sees you, she gives you a friendly smile. "Welcome to the Coffee Hole. What can I get you?"');
              scene.text('You smile at her. "I didn\'t know you worked here."');
              scene.text('She shrugs. "I need some extra money coming in to help pay for stuff. This is pretty easy, close to my place, and I can study when it\'s slow."');
              scene.text('You chat about the university before you notice the line forming behind you. You start looking at the menu on the wall to see if you want to order something.');
            }
          }
          scene.actions([
            { label: 'Exit the cafe', goto: ['city_island', ''] },
            { label: 'Leave counter', goto: ['city_coffee_hole', 'inner'] },
            { label: 'Order from the menu (0:05)', handler: (st: GameState) => {
    // TODO-QSP: gs 'food_menu'
  } },
          ]);
        }
      }
    }
  }
  scene.build();
}

export const city_coffee_hole: LocationDef = {
  name: 'city_coffee_hole',
  title: 'Cafe "Coffee Hole"',
  region: 'city',
  locationType: 'public_indoors',
  description: ['The cafe looks like it was once some type of industrial building, with tall ceilings, exposed pipes, ductwork and lights. The counter is in the far corner, while the middle of the room contains several tables and chairs.'],
  enter: enter,
};
