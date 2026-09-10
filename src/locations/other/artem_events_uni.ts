import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterCoffeeHole(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'katja_meynold_schedule', '');
  qspCall(s, 'anushka_konstantinov_schedule', '');
  qspCall(s, 'schedule', 'A23');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Cafe "Coffee Hole"</b></center>');
  scene.img('images/locations/city/island/coffee_hole/inside.jpg');
  scene.text('The cafe looks like it was once some type of industrial building, with tall ceilings, exposed pipes, ductwork and lights. The counter is in the far corner, while the middle of the room contains several tables and chairs.');
  scene.text('Along the wall opposite the counter is an area with several couches for people to sit and relax. The menu board shows a wide range of flavoured coffees, teas, espressos and pastries, among other things.');
  if (((s as any).locat ?? 0)?.['A144'] === 9) {
    scene.text('You see a familiar face working behind the counter, your former classmate Anushka.');
  }
  if (((s as any).locat ?? 0)?.['katja'] === 30) {
    if (((s as any).katjaQW ?? 0)?.['know_katja_uni'] === 1  ||  ((((s as any).start_type ?? 0)).slice((1)-1, ((1)-1)+(2))) === 'sg') {
      // TODO-QSP: dynamic text: You see your'+iif( $university['enrolled_in'] = 'teaching_studies' and katjaQW['...
      scene.text('You see your\'+iif( $university[\'enrolled_in\'] = \'teaching_studies\' and katjaQW[\'know_katja_uni\'] = 1, \' \', \' former \')+\'classmate Katja sitting at a table with a pile of books, a cup of coffee and a plate of food.');
    } else {
      // TODO-QSP: dynamic text: You see your'+iif( $university['enrolled_in'] = 'teaching_studies' and katjaQW['...
      scene.text('You see your\'+iif( $university[\'enrolled_in\'] = \'teaching_studies\' and katjaQW[\'know_katja_uni\'] = 1, \' \', \' former \')+\'classmate Katja sitting at a table with a pile of books, a cup of coffee and a plate of food.');
    }
    // TODO-QSP: 'She looks up from her books and waves at '+iif(katjaQW['QWstage'] > 0 or npc_rel['A14'] >= 40, 'you...
    scene.actions([
      { label: 'Approach her', goto: ['artem_events_uni', 'coffee_hole_katja_sit'] },
    ]);
  }
  if (((s as any).locat ?? 0)?.['A23'] === 29  &&  (((s as any).AlbinaQW ?? 0)?.['know_albina_uni'] === 1  ||  ((((s as any).start_type ?? 0)).slice((1)-1, ((1)-1)+(2))) === 'sg')) {
    // TODO-QSP: dynamic text: You see your'+iif( $university['enrolled_in'] = 'nursing', ' ', ' former ')+'cla...
    scene.text('You see your\'+iif( $university[\'enrolled_in\'] = \'nursing\', \' \', \' former \')+\'classmate Albina sitting at a table looking at her phone while drinking a cup of coffee.');
    if (((s as any).AlbinaQW ?? 0)?.['Friends'] === 2  ||  ((s as any).npc_rel ?? 0)?.['A23'] >= 70) {
      scene.text('She looks up from her phone and smiles at you.');
      scene.actions([
        { label: 'Approach her', goto: ['artem_events_uni', 'coffee_hole_albina_sit'] },
      ]);
    } else {
      scene.text('She looks up from her phone and gives you an uninviting scowl.');
      scene.actions([
        { label: 'Leave her be', goto: ['artem_events_uni', 'coffee_hole_sit'] },
      ]);
    }
  }
  if (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 17) {
    (s as any).temprand = Math.floor(Math.random() * 4) + 1;
    if (((s as any).temprand ?? 0) === 1) {
      if (((s as any).kendraslave ?? 0) >= 1) {
        (s as any).kendraQW['coffee_hole'] = 1;
        scene.text('You see a familiar face sitting at one of the tables; your mistress Kendra.');
      } else {
        (s as any).kendraQW['coffee_hole'] = 1;
        scene.text('You see a familiar face sitting at one of the tables; Kendra.');
        scene.text('As you look around, you see a beautiful young black woman sitting at one of the tables. She notices you and gives you a quick once-over before returning to what she was doing.');
        scene.text('After a few minutes, she finishes her drink before getting up and leaving.');
      }
    } else {
      scene.text('As you look around, you don\'t see anyone you recognize hanging out today.');
    }
  }
  scene.actions([
    { label: 'Sit at a table', goto: ['artem_events_uni', 'coffee_hole_sit'] },
  ]);
  scene.build();
}

function enterCoffeeHoleSit(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Cafe "Coffee Hole"</b></center>');
  scene.img('images/characters/pavlovsk/school/boy/artem/uni/event/coffee_hole/hangout.jpg');
  if (((s as any).locat ?? 0)?.['A144'] === 9) {
    scene.text('The two of you sit at one of the tables. A few minutes later, Anushka comes over to take your order.');
    if (((s as any).anushkaQW ?? 0)?.['coffee_hole'] === 1) {
      if (((s as any).artemQW ?? 0)?.['nush3some_again'] >= 4) {
        scene.text('As she stops at your table, she gives you a friendly smile. "Welcome to the Coffee Hole. Need your holes filled with something hot and black again?" she says with a wink, even making ordering coffee sound dirty.');
        scene.text('Artem responds before you can. "As much you need your holes filled by a nerd." His tone is confident and a bit smug.');
        scene.text('Anushka just smirks at the comment before turning to you. "You like it big and black that much, huh? Artem not doing it for you as much anymore?"');
        scene.text('His face drops as she turns his comment around on him. He starts to say something, but you interrupt them before they can get going. "Okay you two, play nice! And stop being so bad, Nush."');
        if (((s as any).anushkaCityQW ?? 0)?.['first_visit'] === 0) {
          (s as any).anushkaCityQW['first_visit'] = 1;
          scene.text('"Which dorm are you in by the way? Maybe I can stop by and visit some time?" you ask.');
          scene.text('"I\'m not," she replies. "I\'ve got an apartment with the boys." She then shrugs. "Yeah, it\'s as bad as you think, but you can stop by sometime if you want."');
          scene.text('She gives you her address and you chat about the university before she asks what you want.');
          scene.actions([
            { label: 'Order from the menu (0:05)', handler: (st: GameState) => {
    // TODO-QSP: $loc_arg = 'nush1'
    // TODO-QSP: gs 'food_menu'
  } },
          ]);
        } else {
          scene.text('She shrugs. "You love it. It\'s why you love hanging out with me."');
          scene.text('You chat about the university and her job before she asks what you want.');
          scene.actions([
            { label: 'Order from the menu (0:05)', handler: (st: GameState) => {
    // TODO-QSP: $loc_arg = 'nush2'
    // TODO-QSP: gs 'food_menu'
  } },
          ]);
        }
      } else {
        scene.text('As she stops at your table, she gives you a friendly smile. "Welcome to the Coffee Hole. Need your holes filled with something hot and black again?" she says with a wink, even making ordering coffee sound dirty.');
        scene.text('She glances at Artem and gives him a smile. "What up, nerd?"');
        scene.text('He frowns a little, not liking her messing with him. "Just out with MY girl."');
        scene.text('Anushka rolls her eyes at his comment, but you change the direction of the discussion before she can say anything.');
        if (((s as any).anushkaCityQW ?? 0)?.['first_visit'] === 0) {
          (s as any).anushkaCityQW['first_visit'] = 1;
          scene.text('"You\'re so bad! Which dorm are you in by the way? Maybe I can stop by and visit some time?" you ask.');
          scene.text('"I\'m not," she replies. "I\'ve got an apartment with the boys." She then shrugs. "Yeah, it\'s as bad as you think, but you can stop by sometime if you want."');
          scene.text('She gives you her address and you chat about the university before she asks what you want.');
          scene.actions([
            { label: 'Order from the menu (0:05)', handler: (st: GameState) => {
    // TODO-QSP: $loc_arg = 'nush2'
    // TODO-QSP: gs 'food_menu'
  } },
          ]);
        } else {
          scene.text('You smile at her. "You\'re so bad!"');
          scene.text('She shrugs. "And you love it. It\'s why you love hanging out with me."');
          scene.text('You chat about the university and her job before she asks what you want.');
          scene.actions([
            { label: 'Order from the menu (0:05)', handler: (st: GameState) => {
    // TODO-QSP: $loc_arg = 'nush2'
    // TODO-QSP: gs 'food_menu'
  } },
          ]);
        }
        if (((s as any).npc_rel ?? 0)?.['A144'] <= 20) {
          scene.text('As she stops at your table, she sighs, and you think she rolls her eyes. "Welcome to the Coffee Hole. What can I get the two of you?"');
          scene.text('You smile at her. "You enjoy working here?"');
          scene.text('She doesn\'t return your smile. "It\'s a job, so do you want something or not? I\'ve got work to do and can\'t stand around chatting."');
          scene.text('Artem cuts in. "You don\'t have to be so rude. She was trying to be nice to you."');
          scene.text('She definitely rolls her eyes this time. "Whatever, nerd. You guys want something or not?"');
          scene.text('You sigh and signal for Artem to just drop it. You look up at the menu on the wall to see if you might want to order something.');
          scene.actions([
            { label: 'Order from the menu (0:05)', handler: (st: GameState) => {
    // TODO-QSP: $loc_arg = 'nush2'
    // TODO-QSP: gs 'food_menu'
  } },
          ]);
        } else {
          scene.text('As she stops at your table, she gives you a friendly smile. "Welcome to the Coffee Hole. What can I get the two of you?"');
          scene.text('You smile at her. "So you like working here?"');
          scene.text('She shrugs. "Yeah, it\'s alright. As I said, it\'s pretty easy, close to my place, and I can study when it\'s slow. Plus, the owner, Joanna, is pretty cool and chill about what I do at work. As long as I don\'t leave a mess or ignore customers, she doesn\'t really care what I do."');
          scene.text('You chat about the university and her job before you start looking at the menu to see if you want to order something.');
          scene.actions([
            { label: 'Order from the menu (0:05)', handler: (st: GameState) => {
    // TODO-QSP: $loc_arg = 'nush2'
    // TODO-QSP: gs 'food_menu'
  } },
          ]);
        }
        (s as any).anushkaQW['coffee_hole'] = 1;
        if (((s as any).npc_rel ?? 0)?.['A144'] >= 60) {
          scene.text('As she stops at your table, she gives you a friendly smile. "Welcome to the Coffee Hole, where we can fill your holes with something hot and black, but maybe not in the way you would like…" she says with a wink, even making ordering coffee sound dirty.');
          scene.text('Artem responds before you can. "As much you need your holes filled by a nerd." His tone is confident and a bit smug.');
          scene.text('Anushka just smirks at the comment and says to you. "You like it big and black that much huh? Artem not doing it for you as much anymore?"');
          scene.text('His face drops as she turns around his comment on him. He starts to say more but you interrupt before they can get going. "Ok you two, play nice and stop being so bad Nush. I didn\'t know you worked here."');
          scene.text('She shrugs. "I need some extra money coming in to help pay for stuff. This is pretty easy, close to my place, and I can study when it\'s slow."');
          if (((s as any).anushkaCityQW ?? 0)?.['first_visit'] === 0) {
            (s as any).anushkaCityQW['first_visit'] = 1;
            scene.text('"Nice. Which dorm are you in by the way? Maybe I can stop by and visit some time?" you ask.');
            scene.text('"I\'m not," she replies. "I\'ve got an apartment with the boys." She then shrugs. "Yeah, it\'s as bad as you think, but you can stop by sometime if you want."');
            scene.text('She gives you her address and you chat about the university before you notice the line forming behind you and start looking at the menu on the wall to see if you want to order something.');
          }
          scene.actions([
            { label: 'Order from the menu (0:05)', handler: (st: GameState) => {
    // TODO-QSP: $loc_arg = 'nush2'
    // TODO-QSP: gs 'food_menu'
  } },
          ]);
        } else {
          scene.text('As she stops at your table, she sighs, and you think she rolls her eyes. "Welcome to the Coffee Hole. What can I get the two of you?"');
          scene.text('You smile at her. "I didn\'t know you worked here."');
          scene.text('She doesn\'t return your smile. "Well, now you do. Do you want something or not? I\'ve got work to do and can\'t stand around chatting."');
          scene.text('Artem cuts in. "You don\'t have to be so rude, she was trying to be nice to you."');
          scene.text('She definitely rolls her eyes this time. "Whatever, nerd. You guys want something or not?"');
          scene.text('You sigh and signal for Artem to just drop it. You look up at the menu on the wall to see if you might want to order something.');
          scene.text('As she stops at your table, she gives you a friendly smile. "Welcome to the Coffee Hole. What can I get the two of you?"');
          scene.text('You smile at her. "I didn\'t know you worked here."');
          scene.text('She shrugs. "I need some extra money coming in to help pay for stuff. This is pretty easy, close to my place, and I can study when it\'s slow."');
          scene.text('You chat about the university before you start looking at the menu to see if you want to order something.');
          scene.actions([
            { label: 'Order from the menu (0:05)', handler: (st: GameState) => {
    // TODO-QSP: $loc_arg = 'nush2'
    // TODO-QSP: gs 'food_menu'
  } },
            { label: 'Order from the menu (0:05)', handler: (st: GameState) => {
    // TODO-QSP: $loc_arg = 'nush2'
    // TODO-QSP: gs 'food_menu'
  } },
          ]);
        }
      }
    } else {
      scene.text('The two of you sit at one of the tables. A few minutes later, one of the girls that works here comes over to take your order.');
      scene.actions([
        { label: 'Order from the menu (0:05)', handler: (st: GameState) => {
    // TODO-QSP: $loc_arg = 'after_ordering'
    // TODO-QSP: gs 'food_menu'
  } },
      ]);
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'coffee_hole':
      enterCoffeeHole(s, scene);
      break;
    case 'coffee_hole_sit':
      enterCoffeeHoleSit(s, scene);
      break;
    default:
      enterCoffeeHole(s, scene);
      break;
  }
}

export const artem_events_uni: LocationDef = {
  name: 'artem_events_uni',
  title: 'Cafe "Coffee Hole"',
  region: 'other',
  description: ['The cafe looks like it was once some type of industrial building, with tall ceilings, exposed pipes, ductwork and lights. The counter is in the far corner, while the middle of the room contains several tables and chairs.'],
  enter: enter,
};
