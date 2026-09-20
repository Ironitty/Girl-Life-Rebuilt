import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterCoffeeHole(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'artem_events_uni';
  (s as any).loc_arg = 'inner';
  (s as any).menu_loc = 'artem_events_uni';
  (s as any).menu_arg = 'inner';
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
    if (((s as any).katjaQW ?? 0)?.['know_katja_uni'] === 1  ||  (String(((s as any).start_type ?? 0)).slice((1)-1, ((1)-1)+(2))) === 'sg') {
      // TODO-QSP: dynamic text: You see your'+iif( $university['enrolled_in'] = 'teaching_studies' and katjaQW['...
      scene.text('You see your' + ((((s as any).university ?? 0)?.['enrolled_in'] === 'teaching_studies'  &&  ((s as any).katjaQW ?? 0)?.['know_katja_uni'] === 1) ? (' ') : (' former ')) + 'classmate Katja sitting at a table with a pile of books, a cup of coffee and a plate of food.');
    } else {
      // TODO-QSP: dynamic text: You see your'+iif( $university['enrolled_in'] = 'teaching_studies' and katjaQW['...
      scene.text('You see your' + ((((s as any).university ?? 0)?.['enrolled_in'] === 'teaching_studies'  &&  ((s as any).katjaQW ?? 0)?.['know_katja_uni'] === 1) ? (' ') : (' former ')) + 'classmate Katja sitting at a table with a pile of books, a cup of coffee and a plate of food.');
    }
    // TODO-QSP: 'She looks up from her books and waves at '+iif(katjaQW['QWstage'] > 0 or npc_rel['A14'] >= 40, 'you...
    scene.actions([
      { label: 'Approach her', goto: ['artem_events_uni', 'coffee_hole_katja_sit'] },
    ]);
  }
  if (((s as any).locat ?? 0)?.['A23'] === 29  &&  (((s as any).AlbinaQW ?? 0)?.['know_albina_uni'] === 1  ||  (String(((s as any).start_type ?? 0)).slice((1)-1, ((1)-1)+(2))) === 'sg')) {
    // TODO-QSP: dynamic text: You see your'+iif( $university['enrolled_in'] = 'nursing', ' ', ' former ')+'cla...
    scene.text('You see your' + ((((s as any).university ?? 0)?.['enrolled_in'] === 'nursing') ? (' ') : (' former ')) + 'classmate Albina sitting at a table looking at her phone while drinking a cup of coffee.');
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
    (s as any).temprand = (Math.floor(Math.random() * 4) + 1);
    if (((s as any).temprand ?? 0) === 1) {
      if (((s as any).kendraslave ?? 0) >= 1) {
        ((s as any).kendraQW = (s as any).kendraQW ?? {})['coffee_hole'] = 1;
        scene.text('You see a familiar face sitting at one of the tables; your mistress Kendra.');
      } else {
        if (((s as any).meet_kendra ?? 0) === 1) {
          ((s as any).kendraQW = (s as any).kendraQW ?? {})['coffee_hole'] = 1;
          scene.text('You see a familiar face sitting at one of the tables; Kendra.');
        } else {
          scene.text('As you look around, you see a beautiful young black woman sitting at one of the tables. She notices you and gives you a quick once-over before returning to what she was doing.');
          scene.text('After a few minutes, she finishes her drink before getting up and leaving.');
        }
      }
    } else {
      if (((s as any).locat ?? 0)?.['A144'] !== 9  &&  ((s as any).locat ?? 0)?.['katja'] !== 30  &&  ((s as any).locat ?? 0)?.['A23'] !== 29) {
        scene.text('As you look around, you don\'t see anyone you recognize hanging out today.');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Sit at a table', goto: ['artem_events_uni', 'coffee_hole_sit'] },
  ]);
  scene.build();
}

function enterCoffeeHoleSit(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'artem_events_uni';
  (s as any).menu_arg = 'coffee_hole_sit';
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
          ((s as any).anushkaCityQW = (s as any).anushkaCityQW ?? {})['first_visit'] = 1;
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
        if (((s as any).npc_rel ?? 0)?.['A144'] >= 60) {
          scene.text('As she stops at your table, she gives you a friendly smile. "Welcome to the Coffee Hole. Need your holes filled with something hot and black again?" she says with a wink, even making ordering coffee sound dirty.');
          scene.text('She glances at Artem and gives him a smile. "What up, nerd?"');
          scene.text('He frowns a little, not liking her messing with him. "Just out with MY girl."');
          scene.text('Anushka rolls her eyes at his comment, but you change the direction of the discussion before she can say anything.');
          if (((s as any).anushkaCityQW ?? 0)?.['first_visit'] === 0) {
            ((s as any).anushkaCityQW = (s as any).anushkaCityQW ?? {})['first_visit'] = 1;
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
        } else {
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
        }
      }
    } else {
      ((s as any).anushkaQW = (s as any).anushkaQW ?? {})['coffee_hole'] = 1;
      if (((s as any).npc_rel ?? 0)?.['A144'] >= 60) {
        scene.text('As she stops at your table, she gives you a friendly smile. "Welcome to the Coffee Hole, where we can fill your holes with something hot and black, but maybe not in the way you would like…" she says with a wink, even making ordering coffee sound dirty.');
        scene.text('Artem responds before you can. "As much you need your holes filled by a nerd." His tone is confident and a bit smug.');
        scene.text('Anushka just smirks at the comment and says to you. "You like it big and black that much huh? Artem not doing it for you as much anymore?"');
        scene.text('His face drops as she turns around his comment on him. He starts to say more but you interrupt before they can get going. "Ok you two, play nice and stop being so bad Nush. I didn\'t know you worked here."');
        scene.text('She shrugs. "I need some extra money coming in to help pay for stuff. This is pretty easy, close to my place, and I can study when it\'s slow."');
        if (((s as any).anushkaCityQW ?? 0)?.['first_visit'] === 0) {
          ((s as any).anushkaCityQW = (s as any).anushkaCityQW ?? {})['first_visit'] = 1;
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
        if (((s as any).npc_rel ?? 0)?.['A144'] <= 20) {
          scene.text('As she stops at your table, she sighs, and you think she rolls her eyes. "Welcome to the Coffee Hole. What can I get the two of you?"');
          scene.text('You smile at her. "I didn\'t know you worked here."');
          scene.text('She doesn\'t return your smile. "Well, now you do. Do you want something or not? I\'ve got work to do and can\'t stand around chatting."');
          scene.text('Artem cuts in. "You don\'t have to be so rude, she was trying to be nice to you."');
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
          scene.text('You smile at her. "I didn\'t know you worked here."');
          scene.text('She shrugs. "I need some extra money coming in to help pay for stuff. This is pretty easy, close to my place, and I can study when it\'s slow."');
          scene.text('You chat about the university before you start looking at the menu to see if you want to order something.');
          scene.actions([
            { label: 'Order from the menu (0:05)', handler: (st: GameState) => {
    // TODO-QSP: $loc_arg = 'nush2'
    // TODO-QSP: gs 'food_menu'
  } },
          ]);
        }
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
  // TODO-QSP: end
  scene.build();
}

function enterAfterOrdering(s: GameState, scene: SceneBuilder): void {
  (s as any).loc_arg = 'inner';
  (s as any).menu_loc = 'artem_events_uni';
  (s as any).menu_arg = 'inner';
  scene.text('<center><b>Cafe "Coffee Hole"</b></center>');
  scene.img('images/characters/pavlovsk/school/boy/artem/uni/event/coffee_hole/hangout.jpg');
  scene.text('Artem pays for your drink and snack and orders a coffee and muffin for himself');
  scene.text('A few minutes later, she returns with your food and the two of you talk, drink your drinks, and eat your snacks.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('<center><b>Cafe "Coffee Hole"</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/artem/uni/event/coffee_hole/hangout.jpg');
    if (((st as any).kendraQW ?? 0)?.['coffee_hole'] === 1) {
      if (((st as any).meet_kendra ?? 0) === 1  &&  ((st as any).pcs_hotcat ?? 0) >= 5) {
        scene.text('As you and Artem and talk, he suddenly stops and looks to your side. When you turn your head, you see Kendra.');
        scene.text('"Is this cute little boy toy the reason you won\'t take me up on my offer?"');
        scene.actions([
          { label: 'No', handler: (st: GameState) => {
    (st as any).kendrano = 1;
    qspCall(st, 'npc_relationship', 'modify', 'A84', 'dislike', 1, 'coffee_hole');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big84.jpg');
    scene.text('You smile at her. "It has nothing to do with him. I still don\'t belong to anyone."');
    scene.text('She sighs softly. "Such a waste. Oh well, there are plenty of pretty little white Russian bitches that love being owned by an ebony Mistress. Perhaps we\'ll meet again, and you\'ll change your mind."');
    scene.text('She then turns and leaves the coffee shop.');
    scene.text('Artem, bewildered at the whole conversation, turns to you. "Who was that and what was that about?"');
    scene.text('You sigh. "She goes to the university and seems intent on wanting me to become a sub."');
    scene.text('The two of you talk about it before just talking about a variety of things. After finishing your snack and drink, you decide to head back to the dorms before it gets too late.');
    scene.text('Once back at his room, you talk for a few minutes more before you agree it\'s time for you to go so he can get some other things done today.');
    scene.actions([
      { label: 'Leave his dorm room', goto: ['uni_dorm', 'second_floor'] },
    ]);
  } },
          { label: 'Yes', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A84', 'like', 1, 'coffee_hole');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big84.jpg');
    scene.text('You look down a little to show your submission to her. "Yes, this is my boyfriend Artem."');
    scene.text('She smiles widely. "I see. Well I don\'t mind sharing, or you could bring him along. I wouldn\'t mind owning another cute little white boy too. What do you say? Ready to be my little slave bitch?"');
    scene.text('Artem looks very confused about the conversation.');
    scene.actions([
      { label: 'No', handler: (st: GameState) => {
    (st as any).kendrano = 1;
    qspCall(st, 'npc_relationship', 'modify', 'A84', 'dislike', 1, 'coffee_hole');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big84.jpg');
    scene.text('You smile at her. "No. I still don\'t belong to anyone."');
    scene.text('She sighs softly. "Such a waste. Oh well, there are plenty of pretty little white Russian bitches that love being owned by an ebony Mistress. Perhaps we\'ll meet again, and you\'ll change your mind."');
    scene.text('She then turns and leaves the coffee shop.');
    scene.text('Artem, bewildered at the whole conversation, turns to you. "Who was that and what was that about?"');
    scene.text('You sigh. "She goes to the university and seems intent on wanting me to become a sub."');
    scene.text('The two of you talk about it before just talking about a variety of things. After finishing your snack and drink, you decide to head back to the dorms before it gets too late.');
    scene.text('Once back at his room, you talk for a few minutes more before you agree it\'s time for you to go so he can get some other things done today.');
    scene.actions([
      { label: 'Leave his dorm room', goto: ['uni_dorm', 'second_floor'] },
    ]);
  } },
      { label: 'Yes', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A84', 'like', 1, 'coffee_hole');
    ((st as any).kendraQW = (st as any).kendraQW ?? {})['atrem_inv'] = 1;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big84.jpg');
    scene.text('You look down a little to show your submission to her. "Yes, Mistress Kendra…"');
    scene.text('She smiles widely. "I think you\'re going to make a great little slave. We\'re going to have a lot of fun together. I wish I had time to start your training now, but I have things I need to do. Come by my dorm room as soon as you can. Oh and bring your boy along sometime."');
    scene.text('With that, she pats you on the cheek and walks out of the coffee shop.');
    scene.text('Artem, bewildered at the whole conversation, turns to you. "Who was that and what was that about?"');
    scene.text('You smile at him. "She goes to the university. She seems intent on wanting me to become a sub and I just agreed. If you want, we can go together sometime."');
    scene.text('He shakes his head slightly. "What? I don\'t know about that…"');
    scene.text('You nod in understanding. "That\'s okay, we can talk about it later."');
    scene.text('The two of you talk about it before just talking about a variety of things. After finishing your snack and drink, you decide to head back to the dorms before it gets too late.');
    scene.text('Once back at his room, you talk for a few minutes more before you agree it\'s time for you to go so he can get some other things done today.');
    scene.actions([
      { label: 'Leave his dorm room', goto: ['uni_dorm', 'second_floor'] },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        if (((st as any).kendraslave ?? 0) >= 1) {
          ((st as any).kendraQW = (st as any).kendraQW ?? {})['atrem_inv'] = 1;
          qspCall(st, 'npc_relationship', 'modify', 'A84', 'like', 1, 'coffee_hole');
          scene.text('She looks down at you. "Who do we have here? My favorite little white bitch. Who\'s your cute little friend?"');
          scene.text('You look down a little to show your submission to her. "This is my boyfriend, Artem…"');
          scene.text('She smiles widely. "I see. Well I don\'t mind sharing, or you could bring him along. I wouldn\'t mind owning another cute little white boy too. I wish I had time for a training session, but unfortunately, I have things to do. Come by my dorm room as soon as you can and bring him along; we\'ll have a lot of fun together."');
          scene.text('With that, she pats you on the cheek and walks out of the coffee shop.');
          scene.text('Artem, bewildered at the whole conversation, turns to you. "Who was that and what was that about?"');
          scene.text('You smile at him. "She goes to the university. She seems intent on wanting me to become a sub and I just agreed. If you want, we can go together sometime."');
          scene.text('He shakes his head slightly. "What? I don\'t know about that…"');
          scene.text('You nod in understanding. "That\'s okay, we can talk about it later."');
          scene.text('The two of you talk about it before just talking about a variety of things. After finishing your snack and drink, you decide to head back to the dorms before it gets too late.');
          scene.text('Once back at his room, you talk for a few minutes more before you agree it\'s time for you to go so he can get some other things done today.');
          scene.actions([
            { label: 'Leave his dorm room', goto: ['uni_dorm', 'second_floor'] },
          ]);
        }
      }
    } else {
      scene.text('The two of you sit in the cafe talking for about an hour about a variety of subjects, such as what\'s going on with your families, friends and how things are going in general, just to name a few.');
      scene.text('After finishing your snack and drink, you decide to head back to the dorms before it gets too late. Once back at his room, you talk for a few minutes more before you agree it\'s time for you to go so he can get some other things done today.');
      scene.actions([
        { label: 'Leave his dorm room', goto: ['uni_dorm', 'second_floor'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterNush1(s: GameState, scene: SceneBuilder): void {
  (s as any).loc_arg = 'inner';
  (s as any).menu_loc = 'artem_events_uni';
  (s as any).menu_arg = 'inner';
  scene.text('<center><b>Cafe "Coffee Hole"</b></center>');
  scene.img('images/characters/pavlovsk/school/boy/artem/uni/event/coffee_hole/hangout.jpg');
  scene.text('Artem pays for your drink and snack and orders a coffee and muffin for himself. A few minutes later, she returns with your food and the two of you sit, talk, drink your drinks and eat your snacks.');
  scene.text('The two of you sit in the cafe talking for about an hour about a variety of subjects, such as what\'s going on with your families, friends and how things are going in general, just to name a few.');
  scene.text('Every so often, Anushka comes around and always has a snide remark for Artem. You know she\'s just teasing him, but you can also tell it\'s slowly getting to him as the time goes by.');
  scene.text('Just as you\'re getting ready to leave, Artem looks around. As he does, you do as well and notice that you\'re the only customers at the moment. "I should teach that little bitch a lesson. I\'m getting tired of her comments."');
  scene.text('You know exactly what kind of \'lesson\' he wants to teach her.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell him he shouldn\'t', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You shake your head. "Just leave it alone."');
    scene.text('He frowns at you. "You heard the way she talks to me!"');
    scene.text('You give him a reassuring smile. "I do and she\'s just teasing you. That\'s just how she is and she doesn\'t mean anything by it, so just let it go."');
    scene.text('He sighs. "Okay, fine. We should get going back to the dorms."');
    scene.text('You get up and head out, the two of you walking back to the dorms holding hands. Once back at his room, you talk for a few minutes more before you agree it\'s time for you to go so he can get some other things done today.');
    scene.actions([
      { label: 'Leave his dorm room', goto: ['uni_dorm', 'second_floor'] },
    ]);
  } },
    { label: 'Tell him he can', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You glance over at Anushka flipping through a book at the counter, looking bored. "Well no one else is around and she <i>has</i> been a bitch to you tonight, so maybe you <i>should</i> teach her a lesson."');
    scene.text('He grins at you. "Yeah, I really should."');
    scene.text('He gets up and starts walking over towards Anushka as you get up and follow behind him. She doesn\'t notice the two of you walking over until you\'re almost at the counter.');
    scene.text('She smiles at the two of you. "You guys heading out or do you need something else?"');
    scene.text('He walks around the counter and she gives him a slightly puzzled look. She\'s about to say something, but he interrupts her before she can. "Yeah, I do need something else…"');
    scene.text('He grabs her firmly by her arm with one hand while opening the door to the back of the shop with the other.');
    scene.text('She looks even more puzzled, but so far is not resisting. "What are you doing?"');
    scene.text('He glances in the back of the shop. "You need to learn how to keep your mouth in check."');
    scene.text('With that, he pulls her into the back and looks back out the door to you. "Come in and close the door."');
    scene.actions([
      { label: 'Follow them in', goto: ['artem_nush_sex_uni', 'coffee_hole1'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterNush2(s: GameState, scene: SceneBuilder): void {
  (s as any).loc_arg = 'inner';
  (s as any).menu_loc = 'artem_events_uni';
  (s as any).menu_arg = 'inner';
  scene.img('images/characters/pavlovsk/school/boy/artem/uni/event/coffee_hole/hangout.jpg');
  scene.text('Artem pays for your drink and snack that you order and orders a coffee and muffin for himself. A few minutes later, she returns with your food and the two of you sit, talk, drink your drinks and eat your snacks.');
  scene.text('The two of you sit in the cafe talking for about an hour about a variety of subjects, such as what\'s going on with your families, friends and how things are going in general, just to name a few.');
  scene.text('After finishing your snack and drink, you decide to head back to the dorms before it gets too late. Once back at his room, you talk for a few minutes more before you agree it\'s time for you to go so he can get some other things done today.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave his dorm room', goto: ['uni_dorm', 'second_floor'] },
  ]);
  scene.build();
}

function enterCoffeeHoleKatjaSit(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/panty_quest/coffee_hole_talking.jpg');
  if (((s as any).katjaQW ?? 0)?.['know_katja_uni'] === 0) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['know_katja_uni'] = 1;
    if (((s as any).katjaQW ?? 0)?.['knows_artem_is_boyfreind'] === 0) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['knows_artem_is_boyfreind'] = 1;
      if (((s as any).katjaQW ?? 0)?.['QWstage'] === 5) {
        ((s as any).katjaQW = (s as any).katjaQW ?? {})['QWstage'] = 4;
      }
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['boy_block'] = 1;
      if (((s as any).katjaQW ?? 0)?.['QWstage'] > 0  ||  ((s as any).npc_rel ?? 0)?.['A14'] >= 40) {
        // TODO-QSP: dynamic text: "Hi <<$pcs_nickname>>, so good to see you," she says.
        scene.text(`"Hi ${((s as any).pcs_nickname ?? '')}, so good to see you," she says.`);
        // TODO-QSP: dynamic text: As you walk over to her table,'+iif(katjaQW['QWstage'] > 2 or npc_rel['A14'] >= ...
        scene.text('As you walk over to her table,' + ((((s as any).katjaQW ?? 0)?.['QWstage'] > 2  ||  ((s as any).npc_rel ?? 0)?.['A14'] >= 80) ? (' she gets up and gives you a hug.') : ('she smiles at Artem.')) + ' "Good to see you too, Artem."');
        // TODO-QSP: dynamic text: "Are you also studying at the university, <<$pcs_nickname>>?" she asks.
        scene.text(`"Are you also studying at the university, ${((s as any).pcs_nickname ?? '')}?" she asks.`);
        if (((s as any).university ?? 0)?.['enrolled_in'] === 'teaching_studies') {
          if (((s as any).katjaQW ?? 0)?.['know_going_to_teaching_degree'] === 0) {
            ((s as any).katjaQW = (s as any).katjaQW ?? {})['know_going_to_teaching_degree'] = 1;
          }
          scene.text('"I\'m going to study to become a teacher," you tell her.');
          scene.text('"Me too. We\'re going to have so much fun together," she says, looking happy.');
        } else {
          if (((s as any).university ?? 0)?.['student'] === 1) {
            // TODO-QSP: dynamic text: "I''m studying ' + $func('uni_programs', 'get_program_name') + '," you reply.
            scene.text('"I\'m studying \' + $func(\'uni_programs\', \'get_program_name\') + \'," you reply.');
          } else {
            scene.text('"No, I\'m not studying at the university," you reply.');
          }
        }
        scene.text('She looks at you. "So are the two of you together now?" she asks.');
        // TODO-QSP: dynamic text: "Yes, we are. <<$pcs_nickname>> is my girlfriend," Artem answers proudly before ...
        scene.text(`"Yes, we are. ${((s as any).pcs_nickname ?? '')} is my girlfriend," Artem answers proudly before you have time to say anything.`);
        scene.text('"I\'m so happy for you! Congratulations!" she says, seemingly excited about the news. "Why don\'t you sit down and have a coffee with me?"');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A14'] < 20) {
          scene.text('"Hi Artem! Why are you with this one? Don\'t tell that you\'re actually together?" she asks in a cold voice as you approach.');
          // TODO-QSP: dynamic text: "I know you don''t like her, but I do. <<$pcs_nickname>> is my girlfriend," Arte...
          scene.text(`"I know you don't like her, but I do. ${((s as any).pcs_nickname ?? '')} is my girlfriend," Artem answers before you have time to say anything.`);
          scene.text('"You\'re a good guy, Artem. You could do so much better than this one. See you later."');
          scene.text('She gets up and walks away, clearly not wanting to have anything to do with you.');
        } else {
          // TODO-QSP: dynamic text: "Hi Artem, hi <<$pcs_nickname>>! How have you been? Still getting used to our sh...
          scene.text(`"Hi Artem, hi ${((s as any).pcs_nickname ?? '')}! How have you been? Still getting used to our shared floor, Artem? And how about you, ${((s as any).pcs_nickname ?? '')}? Are you also studying at the university?" she asks as you walk over to her table.`);
          if (((s as any).university ?? 0)?.['enrolled_in'] === 'teaching_studies') {
            if (((s as any).katjaQW ?? 0)?.['know_going_to_teaching_degree'] === 0) {
              ((s as any).katjaQW = (s as any).katjaQW ?? {})['know_going_to_teaching_degree'] = 1;
            }
            scene.text('"I\'m going to study to become a teacher," you tell her.');
            scene.text('"Me too. We\'re going to have so much fun together," she says, looking happy.');
          } else {
            if (((s as any).university ?? 0)?.['student'] === 1) {
              // TODO-QSP: dynamic text: "I''m studying ' + $func('uni_programs', 'get_program_name') + '," you reply.
              scene.text('"I\'m studying \' + $func(\'uni_programs\', \'get_program_name\') + \'," you reply.');
            } else {
              scene.text('"No, I\'m not studying at the university," you reply.');
            }
          }
          scene.text('Katja looks at you. "So are the two of you together now?" she asks.');
          // TODO-QSP: dynamic text: "Yes we are. <<$pcs_nickname>> is my girlfriend," Artem answers proudly before y...
          scene.text(`"Yes we are. ${((s as any).pcs_nickname ?? '')} is my girlfriend," Artem answers proudly before you have time to say anything.`);
          scene.text('"I\'m so happy for you! Congratulations!" she says, seemingly excited about the news. "Why don\'t you sit down and have a coffee with me?"');
        }
      }
    } else {
      if (((s as any).katjaQW ?? 0)?.['QWstage'] > 0  ||  ((s as any).npc_rel ?? 0)?.['A14'] >= 40) {
        // TODO-QSP: dynamic text: "Hi <<$pcs_nickname>>, so good to see you," she says.
        scene.text(`"Hi ${((s as any).pcs_nickname ?? '')}, so good to see you," she says.`);
        // TODO-QSP: dynamic text: As you walk over to her table,'+iif(katjaQW['QWstage'] > 2 or npc_rel['A14'] >= ...
        scene.text('As you walk over to her table,' + ((((s as any).katjaQW ?? 0)?.['QWstage'] > 2  ||  ((s as any).npc_rel ?? 0)?.['A14'] >= 80) ? (' she gets up and gives you a hug.') : ('she smiles at Artem.')) + ' "Good to see you too Artem, though it\'s not that long since we\'re living at the floor now," she says.');
        // TODO-QSP: dynamic text: "Are you also studying at the university, <<$pcs_nickname>>?" she asks.
        scene.text(`"Are you also studying at the university, ${((s as any).pcs_nickname ?? '')}?" she asks.`);
        if (((s as any).university ?? 0)?.['enrolled_in'] === 'teaching_studies') {
          if (((s as any).katjaQW ?? 0)?.['know_going_to_teaching_degree'] === 0) {
            ((s as any).katjaQW = (s as any).katjaQW ?? {})['know_going_to_teaching_degree'] = 1;
          }
          scene.text('"I\'m going to study to become a teacher," you reply.');
          scene.text('"Me too. We\'re going to have so much fun together," she says, looking happy.');
        } else {
          if (((s as any).university ?? 0)?.['student'] === 1) {
            // TODO-QSP: dynamic text: "I''m studying ' + $func('uni_programs', 'get_program_name') + '," you reply.
            scene.text('"I\'m studying \' + $func(\'uni_programs\', \'get_program_name\') + \'," you reply.');
          } else {
            scene.text('"No, I\'m not studying at the university," you reply.');
          }
        }
        scene.text('"Why don\'t you sit down and have a coffee with me?" she asks.');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A14'] < 20) {
          scene.text('"Are you still with this one?" she asks.');
          scene.text('Artem frowns at her before you can respond. "Yes, I am. I think you two would get along if you just gave her a chance."');
          scene.text('"I highly doubt that. She\'s not given me any reason to believe that. Your choice Artem, but you could find a much nicer girlfriend if you wanted. See you later."');
          scene.text('She gets up and walks away, clearly not wanting to have anything to do with you.');
        } else {
          // TODO-QSP: dynamic text: "Hi Artem, hi <<$pcs_nickname>>! How have you been? Still getting used to our sh...
          scene.text(`"Hi Artem, hi ${((s as any).pcs_nickname ?? '')}! How have you been? Still getting used to our shared floor, Artem? And how about you ${((s as any).pcs_nickname ?? '')}? Are you also studying at the university?" she asks as you walk over to her table.`);
          if (((s as any).university ?? 0)?.['enrolled_in'] === 'teaching_studies') {
            if (((s as any).katjaQW ?? 0)?.['know_going_to_teaching_degree'] === 0) {
              ((s as any).katjaQW = (s as any).katjaQW ?? {})['know_going_to_teaching_degree'] = 1;
            }
            scene.text('"I\'m going to study to become a teacher," you tell her.');
            scene.text('"Me too. We\'re going to have so much fun together!" she says, looking happy.');
          } else {
            if (((s as any).university ?? 0)?.['student'] === 1) {
              // TODO-QSP: dynamic text: "I''m studying ' + $func('uni_programs', 'get_program_name') + '," you reply.
              scene.text('"I\'m studying \' + $func(\'uni_programs\', \'get_program_name\') + \'," you reply.');
            } else {
              scene.text('"No, I\'m not studying at the university," you reply.');
            }
          }
          scene.text('"Why don\'t you sit down and have a coffee with me?" she asks.');
        }
      }
    }
  } else {
    if (((s as any).katjaQW ?? 0)?.['knows_artem_is_boyfreind'] === 0) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['knows_artem_is_boyfreind'] = 1;
      if (((s as any).katjaQW ?? 0)?.['QWstage'] === 5) {
        ((s as any).katjaQW = (s as any).katjaQW ?? {})['QWstage'] = 4;
      }
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['boy_block'] = 1;
      if (((s as any).katjaQW ?? 0)?.['QWstage'] > 0  ||  ((s as any).npc_rel ?? 0)?.['A14'] >= 40) {
        // TODO-QSP: dynamic text: "Hi <<$pcs_nickname>>, nice to see you here," she says.
        scene.text(`"Hi ${((s as any).pcs_nickname ?? '')}, nice to see you here," she says.`);
        // TODO-QSP: dynamic text: As you walk over to her table,'+iif(katjaQW['QWstage'] > 2 or npc_rel['A14'] >= ...
        scene.text('As you walk over to her table,' + ((((s as any).katjaQW ?? 0)?.['QWstage'] > 2  ||  ((s as any).npc_rel ?? 0)?.['A14'] >= 80) ? (' she gets up and gives you a hug.') : ('she smiles at Artem.')) + ' "Glad to see you outside the dorm too, Artem."');
        scene.text('She looks at you. "So are the two of you together now?" she asks.');
        // TODO-QSP: dynamic text: "Yes, we are. <<$pcs_nickname>> is my girlfriend," Artem answers proudly before ...
        scene.text(`"Yes, we are. ${((s as any).pcs_nickname ?? '')} is my girlfriend," Artem answers proudly before you have time to say anything.`);
        scene.text('"I\'m so happy for you! Congratulations!" she says, seemingly excited about the news. "Why don\'t you sit down and have a coffee with me?"');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A14'] < 20) {
          scene.text('"Hi Artem! Why are you with this one? Don\'t tell that you\'re actually together?" she asks in a cold voice as you approach.');
          // TODO-QSP: dynamic text: "I know you don''t like her, but I do. <<$pcs_nickname>> is my girlfriend," Arte...
          scene.text(`"I know you don't like her, but I do. ${((s as any).pcs_nickname ?? '')} is my girlfriend," Artem answers proudly before you have time to say anything.`);
          scene.text('"You\'re a good guy, Artem. You could do so much better than this one. See you later."');
          scene.text('She gets up and walks away, clearly not wanting to have anything to do with you.');
        } else {
          // TODO-QSP: dynamic text: "Hi Artem, hi <<$pcs_nickname>>! Nice to see you here," she says as you walk ove...
          scene.text(`"Hi Artem, hi ${((s as any).pcs_nickname ?? '')}! Nice to see you here," she says as you walk over to her table.`);
          scene.text('She looks at you. "So are the two of you together now?" she asks.');
          // TODO-QSP: dynamic text: "Yes, we are. <<$pcs_nickname>> is my girlfriend," Artem answers proudly before ...
          scene.text(`"Yes, we are. ${((s as any).pcs_nickname ?? '')} is my girlfriend," Artem answers proudly before you have time to say anything.`);
          scene.text('"I\'m so happy for you! Congratulations!" she says, seemingly excited about the news. "Why don\'t you sit down and have a coffee with me?"');
        }
      }
    } else {
      if (((s as any).katjaQW ?? 0)?.['QWstage'] > 0  ||  ((s as any).npc_rel ?? 0)?.['A14'] >= 40) {
        // TODO-QSP: dynamic text: "Hi <<$pcs_nickname>>, nice to see you here," she says.
        scene.text(`"Hi ${((s as any).pcs_nickname ?? '')}, nice to see you here," she says.`);
        // TODO-QSP: dynamic text: As you walk over to her table,'+iif(katjaQW['QWstage'] > 2 or npc_rel['A14'] >= ...
        scene.text('As you walk over to her table,' + ((((s as any).katjaQW ?? 0)?.['QWstage'] > 2  ||  ((s as any).npc_rel ?? 0)?.['A14'] >= 80) ? (' she gets up and gives you a hug.') : ('she smiles at Artem.')) + ' "Glad to see you outside the dorm, Artem."');
        scene.text('"Why don\'t you sit down and have a coffee with me?" she asks.');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A14'] < 20) {
          scene.text('"Are you still with this one?" she asks.');
          scene.text('Artem frowns at her before you have time to respond. "Yes, I am. I think you two would get along if you just gave her a chance."');
          scene.text('"I highly doubt that. She\'s not given me any reason to believe that. Your choice Artem, but you could find a much nicer girlfriend if you wanted. See you later."');
          scene.text('She gets up and walks away, clearly not wanting to have anything to do with you.');
        } else {
          // TODO-QSP: dynamic text: "Hi Artem, hi <<$pcs_nickname>>! Nice to see you here," she says as you walk ove...
          scene.text(`"Hi Artem, hi ${((s as any).pcs_nickname ?? '')}! Nice to see you here," she says as you walk over to her table.`);
          scene.text('"Why don\'t you sit down and have a coffee with me?" she asks.');
        }
      }
    }
  }
  if (((s as any).katjaQW ?? 0)?.['QWstage'] > 0  ||  ((s as any).npc_rel ?? 0)?.['A14'] >= 20) {
    scene.actions([
      { label: 'Sit with Katja', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A14', 'like');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/panty_quest/artem_katja_coffee_hole.jpg');
    scene.text('You and Artem do as she suggests and find some chairs to sit at her table while she packs some of her books into her backpack to make space for the two of you.');
    scene.text('A few minutes after you sit down, one of the girls that works here comes over to take your order.');
    scene.actions([
      { label: 'Order from the menu (0:05)', handler: (st: GameState) => {
    // TODO-QSP: $loc_arg = 'coffee_hole_katja_drink'
    // TODO-QSP: gs 'food_menu'
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Choose another table', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A14', 'dislike');
    qspGoto(st, 'artem_events_uni', 'coffee_hole_sit');
  } },
  ]);
  scene.build();
}

function enterCoffeeHoleKatjaDrink(s: GameState, scene: SceneBuilder): void {
  (s as any).loc_arg = 'inner';
  (s as any).menu_loc = 'artem_events_uni';
  (s as any).menu_arg = 'inner';
  scene.img('images/characters/pavlovsk/school/girl/katja/panty_quest/artem_katja_coffee_hole.jpg');
  scene.text('Artem pays for your drink and snack and orders a coffee and muffin for himself.');
  scene.text('Katja orders another cappuccino and a few minutes later, the girl returns with your order.');
  scene.text('The three of you then talk, drink your drinks, and eat your snacks.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/panty_quest/artem_katja_coffee_hole.jpg');
    if (((st as any).katjaQW ?? 0)?.['horny'] > (Math.floor(Math.random() * 101) + 50)  &&  ((st as any).artemQW ?? 0)?.['katja_threesome'] === 2  &&  ((st as any).katjaQW ?? 0)?.['sex_clossedness'] === 1) {
      scene.text('You notice that Katja\'s face is quite red, which usually indicates she\'s horny. Sure enough, she keeps steering the conversation onto lewd subjects.');
      scene.text('"You know, we\'ve had some great fun before, just the three of us. Maybe we should repeat that again soon?" she asks in her most seductive voice.');
      if (((st as any).artemQW ?? 0)?.['confidence'] < 10) {
        scene.text('Artem just looks at you, not sure how to respond to Katja\'s advances.');
      } else {
        // TODO-QSP: dynamic text: "Yes, we''ve had some very fun times together. I''m definitely up for a repeat i...
        scene.text(`"Yes, we've had some very fun times together. I'm definitely up for a repeat if ${((st as any).pcs_nickname ?? '')} is," Artem confidently answers.`);
      }
      scene.actions([
        { label: 'Another time', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/panty_quest/artem_katja_coffee_hole.jpg');
    scene.text('"Maybe, but we definitely don\'t have time now," you answer.');
    scene.text('This put a damper on the subject and you more or less finish you drinks in silence,');
    scene.text('With your snack and drink finished, along with the awkward silence hanging in the air, you decide to head back to the dorms before it gets too late.');
    scene.text('"Come on Artem, we should really be heading back."');
    scene.text('The two of you say your goodbyes to Katja and leave the coffee shop, holding hands on the walk back to the dorms. Once back at his room, you talk for a few minutes more before you agree it\'s time for you to go so he can get some other things done today.');
    scene.actions([
      { label: 'Leave his dorm room', goto: ['uni_dorm', 'second_floor'] },
    ]);
  } },
      ]);
    } else {
      (st as any).temp_rand = (Math.floor(Math.random() * 6) + 1);
      if (((st as any).temp_rand ?? 0) === 1) {
        if (((st as any).npc_rel ?? 0)?.['A14'] > (Math.floor(Math.random() * 71) + 30)  &&  ((st as any).university ?? 0)?.['enrolled_in'] === 'teaching_studies') {
          // TODO-QSP: dynamic text: "So did you like our classes this week, <<$pcs_nickname>>?" Katja asks. "I think...
          scene.text(`"So did you like our classes this week, ${((st as any).pcs_nickname ?? '')}?" Katja asks. "I think that the Wednesday morning one was particularly interesting," she continues and the two of you spend the time discussing your classes and studies.`);
          scene.text('Artem is so bored that he takes out his phone and starts browsing on it.');
        } else {
          scene.text('"Did you notice that the kitchen on our floor was a complete mess yesterday, Artem?" Katja asks. Before he even has time to answer, she continues. "I\'m sure it wasn\'t you, but do you know who it was?"');
          scene.text('"I\'m not sure who it was, but I think it was the boy in room 213. I\'ve caught him before not cleaning up after himself," Artem answers and they start going on about all the faults of their floormate.');
        }
      } else {
        if (((st as any).temp_rand ?? 0) === 2) {
          if (((st as any).npc_rel ?? 0)?.['A14'] > (Math.floor(Math.random() * 71) + 30)) {
            scene.text('Katja pulls out a fashion magazine and shows you some of the new designs that she would love to have. She also has a few things picked out that she thinks will look great on you, and you spend the time discussing new fashion.');
            scene.text('Artem seems completely bored, but when you get to the new sexy underwear she\'s looking at, his eyes do seem to eat up the images.');
          } else {
            scene.text('"Why can\'t people keep their partying to the weekend?" Katja asks. "Yesterday, my neighbors were partying until 4 in the morning! With all the loud music and yelling, I didn\'t really get any sleep."');
            scene.text('"Yeah, I could also hear it, and it\'s very annoying when you\'re trying to sleep," Artem replies, and the three of you continue to discuss the problem of noise during weekday nights in the dorm.');
          }
        } else {
          if (((st as any).temp_rand ?? 0) === 3) {
            if (((st as any).npc_rel ?? 0)?.['A14'] > (Math.floor(Math.random() * 71) + 30)) {
              scene.text('Katja is not a gossip queen, but she still keeps in touch with Lizeveta and has a lot of new raunchy rumors about your former classmates to share as you have your coffee.');
              scene.text('Artem is for the most part not interested, but when some sexy tidbits about the hot girls come up, he does pay attention.');
            } else {
              if (((st as any).katjaQW ?? 0)?.['slut'] < 50) {
                scene.text('"Do you know what was going on in room 217 the other day?" Katja asks. "There was a lot of shouting and it even sounded like there might have been some fighting. Does one of the girls that live there have problems with her boyfriend?"');
                if (((st as any).artemQW ?? 0)?.['confidence'] < 5) {
                  scene.text('"I think they were just having loud sex," Artem says, almost whispering, clearly not comfortable with saying such things to Katja.');
                } else {
                  scene.text('"You need to be able to hear the difference between fighting and wild sex," Artem says, looking comfortable with talking about such stuff with Katja.');
                }
                scene.text('She, on the other hand, seems extremely more embarrassed and looks like she wants run away and hide. You have a hard time stopping yorself from laughing at the situation.');
              } else {
                if (((st as any).katjaQW ?? 0)?.['slut'] < 100) {
                  scene.text('"Did you also hear a lot of noise from room 217 the other day?" Katja asks Artem. "I think one of the girls that lives there was having wild sex in the middle of the afternoon."');
                  if (((st as any).artemQW ?? 0)?.['confidence'] < 5) {
                    scene.text('"I heard something…" he mumbles as he looks down at his coffee. "I wasn\'t sure if it was sex…"');
                    scene.text('He doesn\'t look Katja in the eyes, so you quickly switch the conversation so your boyfriend doesn\'t feel uncomfortable.');
                  } else {
                    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 11) + 5));
                    scene.text('"Yes, they were really going at it," Artem says and the three of you discuss how often you hear loud sex in the dorms.');
                  }
                } else {
                  scene.text('"Did you hear one of the sluts in room 217 really getting her holes hammered the other afternoon?" Katja asks Artem.');
                  if ((((st as any).katjaQW ?? 0)?.['knows_artem_is_boyfreind'] === 1  ||  ((st as any).katjaQW ?? 0)?.['boy_block'] === 0)  &&  ((st as any).katjaQW ?? 0)?.['simultanous_boys'] > 0) {
                    // TODO-QSP: '"I know I like a good fucking, but I don''t think I''d announce it to the whole hallway!" she conti...
                  }
                  if (((st as any).artemQW ?? 0)?.['confidence'] < 10) {
                    scene.text('Artem looks completely shocked at her rowdy way of speaking, and looks down at his coffee to avoid eye contact with her.');
                    scene.text('She can\'t keep up her level of cool and start laughing. You know it\'s mostly at herself for being so direct about sex, but you quickly switch the conversation so your boyfriend can save face.');
                  } else {
                    if (((st as any).artemQW ?? 0)?.['katja_threesome'] === 2) {
                      ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 11) + 10));
                      scene.text('"Considering how I remember making you scream, I\'m not so sure you don\'t wanna do that," Artem answers.');
                      scene.text('Katja just laughs and the conversation continues to be rowdy with a lot of innuendo.');
                    } else {
                      if ((((st as any).katjaQW ?? 0)?.['knows_artem_is_boyfreind'] === 1  ||  ((st as any).katjaQW ?? 0)?.['boy_block'] === 0)  &&  ((st as any).katjaQW ?? 0)?.['simultanous_boys'] > 0) {
                        scene.text('"If it wasn\'t because I\'m a faithful boyfriend to my lovely girlfriend here, I would take you for a test to see if you actually can keep quiet," Artem smirks.');
                        scene.text('"Big words are easy when you can\'t back them up," Katja flirts back.');
                        scene.text('The rest of the conversation is Katja and Artem making sexual innuendos towards each other. You get the feeling that if it wasn\'t for Katja respecting your relationship, then she would have dragged Artem to the toilet and fucked him.');
                      }
                    }
                  }
                }
              }
            }
          } else {
            if (((st as any).temp_rand ?? 0) === 4) {
              if (((st as any).npc_rel ?? 0)?.['A14'] > (Math.floor(Math.random() * 71) + 30)) {
                scene.text('"So I just discovered this new amazing series of makeup. It\'s durable and looks amazing, and it comes in so many different colors you wouldn\'t believe! And the best part is that it\'s not too expensive," Katja says, sounding very excited as she pulls out her makeup bag to show you.');
                scene.text('She spends the rest of your coffee hangout showing you pictures of the different options and explaining what would look good on you. Artem is so bored that he takes out his phone at start looking at it.');
              } else {
                if (((st as any).sofiaQW ?? 0)?.['QWstage'] < 5) {
                  scene.text('"So your roommate came to the kitchen to make tea the other night when I was cooking dinner, Katja," Artem says. "She seems like a nice girl, but she started to tell me this not particularly interesting story about something that happened during her class. I was basically told everything that happened to her that day before she finally finished making her tea."');
                  // TODO-QSP: dynamic text: "Well at least you just got a boring story about her classes," Katja replies. "C...
                  scene.text('"Well at least you just got a boring story about her classes," Katja replies. "Count yourself lucky that she didn\'t start talking about her boyfriend. When she starts on that, she goes on for <i>hours</i> about how he\'s the most amazing person before going into inappropriate detail about their sex life' + ((((st as any).katjaQW ?? 0)?.['slut'] >= 50) ? (', but never the actual exhilaration tidbits.') : ('.')) + '"');
                  scene.text('You then spend the rest of time discussing Sofia.');
                }
              }
            } else {
              if (((st as any).temp_rand ?? 0) === 5) {
                if (((st as any).npc_rel ?? 0)?.['A14'] > (Math.floor(Math.random() * 71) + 30)  &&  (((st as any).katjaQW ?? 0)?.['QWstage'] > 1  ||  ((st as any).mey_vika ?? 0)?.['mey_vika_qw'] === 30)  &&  qspFunc(s, 'homes_properties', 'is_current_home', 'meynold_household') === 0) {
                  // TODO-QSP: dynamic text: "Mom says that she''s so lonely now that she lives all by herself. I do visit he...
                  scene.text(`"Mom says that she's so lonely now that she lives all by herself. I do visit her every weekend, and I've told her that we could meet up in the city for coffee or dinner since she works in the city center, but she goes on about how that's not the same. You should visit her the next time you're in Pav, ${((st as any).pcs_nickname ?? '')}," Katja says.`);
                  scene.text('You spend the rest of your hangout talking about how Tamara is doing now that she lives alone, Artem paying little attention to the discussion.');
                } else {
                  if (((st as any).sofiaQW ?? 0)?.['QWstage'] < 5) {
                    scene.text('"I met your roommate and her boyfriend in the hallway the other day when I was heading to the bathroom," Artem says. "She smiled and we said hi to each other, but he just looked mad. He followed me into the bathroom and said: Keep your hands away, dirty creep. I know how sexless nerds like you are, but Sofia is mine. If you so much as look at her again, I\'ll make sure that your life is ruined, you despicable little piece of shit!"');
                    scene.text('"I was so shocked that I didn\'t know what to say! It was like having Dimka all over me again, but he just turned around and left, saying I\'ll be watching you," he finishes.');
                    scene.text('"Yes, I knew he was a creep, and while Sofia can be annoying, she is way too good for him. She\'s completely oblivious to facts when it comes to Maxim, though. I don\'t know what to do about that," Katja replies.');
                    // TODO-QSP: dynamic text: The '+iif(sofiaQW['QWstage'] = 3, 'two of them', 'three of you')+' then spend th...
                    scene.text('The ' + ((((st as any).sofiaQW ?? 0)?.['QWstage'] === 3) ? ('two of them') : ('three of you')) + ' then spend the rest of the time discussing how much of a dirtbag Maxim is.');
                  }
                }
              } else {
                scene.text('The three of you spend the time reliving school memories and talking about your current life, and what your former classmates are doing.');
              }
            }
          }
        }
      }
      scene.actions([
        { label: 'Time to leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/panty_quest/artem_katja_coffee_hole.jpg');
    scene.text('Artem checks his phone. "Sorry girls, but I really need to be getting back. Maybe we can do this again sometime?"');
    if (((st as any).katjaQW ?? 0)?.['QWstage'] >= 2) {
      // TODO-QSP: dynamic text: "Fun as always. You''re always welcome to join me here. You know where to find m...
      scene.text(`"Fun as always. You're always welcome to join me here. You know where to find me, ${((st as any).pcs_nickname ?? '')}. See you at the dorm, Artem," Katja replies.`);
    } else {
      if (((st as any).katjaQW ?? 0)?.['QWstage'] > 0  ||  ((st as any).npc_rel ?? 0)?.['A14'] >= 40) {
        // TODO-QSP: dynamic text: "Sure, it was fun. I often spend my free time here, so you know where to find me...
        scene.text('"Sure, it was fun. I often spend my free time here, so you know where to find me. \'+iif($university[\'enrolled_in\'] = \'teaching_studies\', \'See you in class\', \'See you around\')+\' ' + ((st as any).pcs_nickname ?? '') + '. See you at the dorm, Artem," Katja replies.');
      } else {
        // TODO-QSP: dynamic text: "Sure, it was fun. I often spend my free time here so you know where to find me,...
        scene.text('"Sure, it was fun. I often spend my free time here so you know where to find me, else see you at the dorm Artem. I\'ll \'+iif($university[\'enrolled_in\'] = \'teaching_studies\', \'see you in class,\', \'see you around,\')+\' ' + ((st as any).pcs_nickname ?? '') + '," Katja replies.');
      }
    }
    scene.text('The two of you say your goodbyes to Katja and leave the coffee shop, holding hands as you walk back to the dorms.');
    scene.text('Once back at his room, you talk for a few minutes more before you agree it\'s time for you to go so he can get some other things done today.');
    scene.actions([
      { label: 'Leave his dorm room', goto: ['uni_dorm', 'second_floor'] },
    ]);
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterCoffeeHoleAlbinaSit(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big23.jpg');
  // TODO-QSP: dynamic text: As you walk over to her table, she gets up and gives you a hug. "<<$pcs_nickname...
  scene.text(`As you walk over to her table, she gets up and gives you a hug. "${((s as any).pcs_nickname ?? '')}!"`);
  scene.text('You return her hug. "Hey, Albina."');
  if (((s as any).artemQW ?? 0)?.['albina_threesome'] === -2) {
    scene.text('"Oh. Uhh… Hi Artem…" she mumbles.');
    scene.text('"Hey…" he awkwardly replies. "If I\'m making you uncomfortable, then I can just go…"');
    // TODO-QSP: dynamic text: "No, no!" she says. "You''re on a date with <<$pcs_nickname>> and I was just abo...
    scene.text(`"No, no!" she says. "You're on a date with ${((s as any).pcs_nickname ?? '')} and I was just about to leave anyway. I'll see you later, ${((s as any).pcs_nickname ?? '')}."`);
    scene.text('You nod and she gives you another hug before leaving. Artem just stands in silence.');
    scene.actions([
      { label: 'Find a table', goto: ['artem_events_uni', 'coffee_hole_sit'] },
    ]);
  } else {
    if (((s as any).AlbinaQW ?? 0)?.['artem_dom'] > 0) {
      scene.text('She gives Artem a flirty smile. "Hey there, stud. You here to be a big bad dom to me again?"');
      scene.text('Artem grins smugly. "Loving that nerd cock now, are we slut? I\'ll gladly show you your place again. Hint: it\'s on your knees."');
      // TODO-QSP: dynamic text: She bites her lip. "<<$pcs_nickname>> wasn''t lying. You really do have a naught...
      scene.text(`She bites her lip. "${((s as any).pcs_nickname ?? '')} wasn't lying. You really do have a naughty streak now, don't you?"`);
    } else {
      if (((s as any).artemQW ?? 0)?.['alb3some_again'] === 3) {
        scene.text('She gives Artem a flirty smile. "Hey Artem. Who knew that the little shy nerd would turn into such a fuck boy? No offence, but you were one of the last people I thought I\'d have in my bed, especially more than once."');
        // TODO-QSP: dynamic text: "None taken. I give <<$pcs_nickname>> all the credit," he happily replies. "It w...
        scene.text(`"None taken. I give ${((s as any).pcs_nickname ?? '')} all the credit," he happily replies. "It was her who helped me find my confidence."`);
        scene.text('She grins. "So she\'s rubbing off on you in more ways than one?"');
      } else {
        if (((s as any).artemQW ?? 0)?.['albina_threesome'] === 1) {
          scene.text('She smiles at Artem. "Hey there, lover boy. Are you just here to say hello or were you looking for… something else?"');
          // TODO-QSP: dynamic text: "I''m down for some more fun if <<$pcs_nickname>> is," he replies.
          scene.text(`"I'm down for some more fun if ${((s as any).pcs_nickname ?? '')} is," he replies.`);
          scene.text('"We\'ll see," you reply and he smiles.');
        } else {
          scene.text('She smiles at Artem. "Hey there, nerd."');
          if (((s as any).artemQW ?? 0)?.['confidence'] >= 15) {
            scene.text('"Hey there yourself, hottie," he smiles back.');
            // TODO-QSP: dynamic text: Albina grins. "The shy little geek has found his voice, huh? Does <<$pcs_nicknam...
            scene.text(`Albina grins. "The shy little geek has found his voice, huh? Does ${((s as any).pcs_nickname ?? '')} know you're flirting with all the girls now?"`);
            scene.text('He chuckles. "She knows I only have eyes for her."');
            scene.text('"Good answer," she replies. "I wouldn\'t want to hear about you hurting my friend."');
          } else {
            scene.text('"Oh. Uh… Hi?" he replies while blushing.');
            // TODO-QSP: dynamic text: Albina grins. "Still the shy little geek you were in school, huh? I would have t...
            scene.text(`Albina grins. "Still the shy little geek you were in school, huh? I would have thought that having a girlfriend like ${((s as any).pcs_nickname ?? '')} would have boosted your confidence a little."`);
            scene.text('Artem just looks at the floor, not sure how to answer.');
          }
        }
      }
    }
    scene.text('She turns back to you. "I was just about to order another coffee. Care to join me?"');
    scene.actions([
      { label: 'Sit with Albina', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A23', 'like');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/uni/artem_albina_coffee_hole.jpg');
    scene.text('"We\'d love to," you reply and find some chairs to sit at her table while she makes space for the two of you.');
    scene.text('A few minutes after you sit down, one of the girls that works here comes over to take your order.');
    scene.actions([
      { label: 'Order from the menu (0:05)', handler: (st: GameState) => {
    // TODO-QSP: $loc_arg = 'coffee_hole_albina_drink'
    // TODO-QSP: gs 'food_menu'
  } },
    ]);
  } },
      { label: 'Sit somewhere else', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A23', 'dislike');
    qspGoto(st, 'artem_events_uni', 'coffee_hole_sit');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCoffeeHoleAlbinaDrink(s: GameState, scene: SceneBuilder): void {
  (s as any).loc_arg = 'inner';
  (s as any).menu_loc = 'artem_events_uni';
  (s as any).menu_arg = 'inner';
  scene.img('images/characters/pavlovsk/school/girl/albina/uni/artem_albina_coffee_hole.jpg');
  scene.text('Artem pays for your drink and snack and orders a coffee and muffin for himself.');
  scene.text('Albina orders another coffee and a few minutes later, the girl returns with your order.');
  scene.text('The three of you then talk, drink your drinks, and eat your snacks.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/uni/artem_albina_coffee_hole.jpg');
    (st as any).temp_rand = (Math.floor(Math.random() * 6) + 1);
    if (((st as any).temp_rand ?? 0) === 1) {
      if (((st as any).university ?? 0)?.['enrolled_in'] === 'nursing') {
        scene.text('"Do you get as bored as I do during Professor Borisov\'s lectures?" Albina asks. "He\'s definitely a little cute, but he needs to stop droning on and bring a little personality to his class."');
        scene.text('The two of you spend the time discussing your classes and studies while Artem is so bored that he pulls out his phone.');
      } else {
        scene.text('"Part of me <i>really hates</i> living with other people," Albina moans. "Some people are such lazy fucking slobs!"');
        scene.text('"Tell me about it," Artem replies. "I\'ve caught a boy on my floor not cleaning up after himself more than a few times."');
        scene.text('You all start going on about the faults of your respective floormates.');
      }
    } else {
      if (((st as any).temp_rand ?? 0) === 2) {
        scene.text('Albina pulls out her phone and shows you a bunch of selfies of herself wearing new outfits that she bought recently while pointing out ones that she thinks would look good on you.');
        scene.text('Artem seems completely bored with the conversation, but when she starts talking about and showing you her new skimpy thong bikini, he does start paying attention.');
        scene.text('By the way she looks at him, you think she done it on purpose to get a reaction out of him.');
      } else {
        if (((st as any).temp_rand ?? 0) === 3) {
          scene.text('"I heard the girl through the wall from me getting fucking <i>pounded</i> by her boyfriend the other night," Albina casually states. "I was actually a little jealous."');
          if (((st as any).AlbinaQW ?? 0)?.['artem_dom'] > 0) {
            scene.text('Artem grins. "And I\'m sure she heard you screaming when I was hammering your holes that night."');
            scene.text('She grins back at him. "Maybe she did. And maybe she rubbed one out to it as well..."');
            scene.text('"You are a dirty girl!" he laughs and the conversation continues to be rowdy with a lot of innuendo between them.');
          } else {
            if (((st as any).artemQW ?? 0)?.['albina_threesome'] === 1) {
              scene.text('"Considering how loud I remember you being, I\'m sure she\'s heard you as well," Artem answers.');
              scene.text('She shrugs. "Maybe she did. The walls are pretty thin."');
              scene.text('The conversation continues with you talking about the various things you\'ve heard, or think you\'ve heard, people doing in their rooms.');
            } else {
              if (((st as any).artemQW ?? 0)?.['confidence'] >= 15) {
                scene.text('Artem chuckles. "I\'ve heard my fair share of people on my floor going at it too. You\'d think people would learn how thin the walls are in that place."');
                scene.text('"I don\'t think they care. I\'d say some people actually <i>want</i> us to hear them," Albina replies.');
                scene.text('The conversation continues with the three of you talking about the various things you\'ve heard, or think you\'ve heard, people doing in their rooms.');
              } else {
                scene.text('Artem blushes and looks down at his coffee to avoid eye contact with her.');
                scene.text('"What\'s wrong, Artem?" she asks. "Never talked about sex before?"');
                scene.text('You quickly switch the conversation so your boyfriend can save face as Albina smirks.');
              }
            }
          }
        } else {
          if (((st as any).temp_rand ?? 0) === 4) {
            if (((st as any).AlbinaQW ?? 0)?.['first_dorm_visit'] === 0) {
              // TODO-QSP: dynamic text: "Did I tell you how I have no roommate, <<$pcs_nickname>>?" she asks.
              scene.text(`"Did I tell you how I have no roommate, ${((st as any).pcs_nickname ?? '')}?" she asks.`);
              scene.text('"Really?" you reply. "That sounds like a dream."');
              scene.text('She smiles. "It is. I have all this extra space and can do whatever I want without someone moaning at me."');
              scene.text('Artem pays little attention to the discussion, other than to mention how cool it would be if he could live by himself.');
            } else {
              // TODO-QSP: dynamic text: "You should come by and visit me in my dorm room again, <<$pcs_nickname>>," she ...
              scene.text(`"You should come by and visit me in my dorm room again, ${((st as any).pcs_nickname ?? '')}," she says. "Maybe bring lover boy here along with you. I'd love to kick his ass at video games."`);
              if (((st as any).artemQW ?? 0)?.['confidence'] >= 15) {
                scene.text('"I accept the challenge," Artem replies. "Just remember that I\'m a nerd. Being good at video games is kind of our thing."');
                scene.text('"Just because I\'m super hot doesn\'t mean I won\'t wipe the floor with you in ten seconds flat."');
                scene.text('Artem laughs, happy to play this little verbal spar with Albina. "I\'m happy to prove you wrong."');
              } else {
                scene.text('Artem remains silent as you smile at Albina.');
                scene.text('"Sure. I can find the time to swing by at some point. Artem might be too busy playing games with his friends if he isn\'t studying, though."');
                scene.text('"Shame," she replies while smiling at Artem. "I would have loved to have played against him."');
                scene.text('Artem blushes and looks down at his coffee, not sure how to respond.');
              }
            }
          } else {
            if (((st as any).temp_rand ?? 0) === 5) {
              scene.text('"Mama is so happy that I\'m at university," Albina says. "She promised to take me out for a fancy dinner if I pass my exams."');
              if (((st as any).university ?? 0)?.['student'] === 1) {
                scene.text('You and Albina spend the time talking about your respective mothers and what they make of you attending the university. Artem pays little attention to the discussion, other than to mention how proud his parents are of him as well.');
              } else {
                scene.text('You and Albina spend the time talking about your respective mothers and what they make of you attending the university or, in your case, <i>not</i>. Artem pays little attention to the discussion, other than to mention how proud his parents are of him as well.');
              }
            } else {
              scene.text('The three of you spend the time reliving school memories and talking about your current life, and what your former classmates are doing.');
            }
          }
        }
      }
    }
    scene.actions([
      { label: 'Time to leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/albina/uni/artem_albina_coffee_hole.jpg');
    scene.text('Artem checks his phone. "Sorry girls, but I really need to be getting back. Maybe we can do this again sometime?"');
    // TODO-QSP: dynamic text: "Sure. I''ll '+iif($university['enrolled_in'] = 'nursing', 'see you in class,', ...
    scene.text('"Sure. I\'ll \'+iif($university[\'enrolled_in\'] = \'nursing\', \'see you in class,\', \'see you around,\')+\' ' + ((st as any).pcs_nickname ?? '') + '," Albina replies.');
    scene.text('The two of you say your goodbyes to her and leave the coffee shop, holding hands as you walk back to the dorms.');
    scene.text('Once back at his room, you talk for a few minutes more before you agree it\'s time for you to go so he can get some other things done today.');
    scene.actions([
      { label: 'Leave his dorm room', goto: ['uni_dorm', 'second_floor'] },
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
    case 'coffee_hole':
      enterCoffeeHole(s, scene);
      break;
    case 'coffee_hole_sit':
      enterCoffeeHoleSit(s, scene);
      break;
    case 'after_ordering':
      enterAfterOrdering(s, scene);
      break;
    case 'nush1':
      enterNush1(s, scene);
      break;
    case 'nush2':
      enterNush2(s, scene);
      break;
    case 'coffee_hole_katja_sit':
      enterCoffeeHoleKatjaSit(s, scene);
      break;
    case 'coffee_hole_katja_drink':
      enterCoffeeHoleKatjaDrink(s, scene);
      break;
    case 'coffee_hole_albina_sit':
      enterCoffeeHoleAlbinaSit(s, scene);
      break;
    case 'coffee_hole_albina_drink':
      enterCoffeeHoleAlbinaDrink(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const artem_events_uni: LocationDef = {
  name: 'artem_events_uni',
  title: 'Cafe "Coffee Hole"',
  region: 'other',
  enter: enter,
};
