import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterPoster(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  scene.img('images/shared/newspaper/hotelmaidoffer.jpg');
  scene.text('Stepping closer to the poster, you see the hotel is looking to recruit cleaning staff.');
  scene.text('"<b>Maid Wanted!</b> The Pavlovsk Hotel is looking for a hardworking maid. No experience necessary. Flexible hours. Apply in person at the hotel reception."');
  scene.text('<i>It doesn\'t look like a glamorous job, but at least it\'s honest work.</i>');
  ((s as any).job_hiring_step ?? {})['pav_hotel_maid'] = 1;
  return;
  scene.actions([
    { label: 'Go back', goto: ['pav_hotel', ''] },
    { label: 'Go to the reception', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_hotelReception', ''] },
  ]);
  scene.build();
}

function enterResepEvent1(s: GameState, scene: SceneBuilder): void {
  scene.text('As you approach the hotel, you notice the doors are closed.');
  scene.text('You try knocking, but nobody comes to open them.');
  if (((s as any).hotresepQW ?? 0) === 3) {
    scene.text('The receptionist and the manager are probably at it again.');
    scene.actions([
      { label: 'Wait until they\'re finished', handler: (st: GameState) => {
    (s as any).hotresepQW_day = ((s as any).daystart ?? 0);
    (s as any).minut = ((s as any).minut ?? 0) + (((s as any).rand ?? 0)(1, 60 - ((s as any).minut ?? 0)));
  }, goto: ['pav_hotel', ''] },
    ]);
  } else {
    if ((!((s as any).resepseen ?? 0))) {
      scene.text('This is strange. The lobby is supposed to be open 24/7.');
    } else {
      scene.text('If you\'re going to catch Elisabet in the act, then you need to find another way to enter the lobby at midnight.');
      if (((s as any).hotresepQW ?? 0) < 2) {
        (s as any).hotresepQW = 2;
      }
      qspCall(s, 'exp_gain', 'observ', 3);
    }
  }
  scene.actions([
    { label: 'Go back to the market', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
  }, goto: ['pav_market', ''] },
  ]);
  scene.build();
}

function enterResepEvent2(s: GameState, scene: SceneBuilder): void {
  (s as any).temp = 1;
  qspCall(s, 'exp_gain', 'observ', Math.floor(Math.random() * 2) + 0);
  scene.text('<center><h4>Pavlovsk Hotel</h4></center>');
  scene.img('images/locations/pavlovsk/hotel/sex/resep_event2.jpg');
  scene.text('You enter the lobby and see the desk girl and the manager talking to each other. When they notice you, they both give you a very disappointed look.');
  scene.text('You get the feeling you interrupted something here.');
  scene.build();
}

function enterResepEvent3(s: GameState, scene: SceneBuilder): void {
  (s as any).hotresepQW = 3;
  qspCall(s, 'exp_gain', 'observ', 3);
  qspCall(s, 'stat', '');
  if (((s as any).prevloc ?? 0) === 'HotelRoom') {
    scene.text('You creep down to the lobby and around the corner to carefully sneak a glimpse.');
  } else {
    scene.text('You find the door closed and realize that the receptionist and the manager are probably fooling around again. You carefully open the door with your key and enter as quietly as you can.');
    scene.text('Carefully moving to the corner, you sneak a glimpse.');
  }
  scene.img('images/locations/pavlovsk/hotel/sex/resep_event1.jpg');
  scene.text('You spy Elisabet as she flashes her breasts and flips her skirt up and down with a devilish smile.');
  scene.text('You then see a man approaching her. It\'s Mr. Leonidovich, the hotel manager.');
  scene.img('images/locations/pavlovsk/hotel/sex/resep_event2.jpg');
  scene.text('"Miss Tanich, what are you doing?! What if our guests see you like this?!"');
  scene.text('You remember the pictures you found in his office and wonder why he\'s acting so surprised.');
  scene.text('"Oh! Mr. Leonidovich!" she says while pouting. "I\'ve been a bad little girl, haven\'t I, Daddy?"');
  scene.text('You figure they\'re just playing a game and being caught flashing was all part of their weird little role play.');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/hotel/sex/resep_event9.jpg');
    scene.text('She suddenly starts kissing him as he undresses her.');
    scene.img('images/locations/pavlovsk/hotel/sex/resep_event3.jpg');
    scene.text('Once she\'s naked, she drops to her knees and takes his stiff cock into her mouth.');
    scene.text('Her lips glide down the length of his shaft, leaving a trail of shiny saliva behind before she focuses on sucking on the head.');
    scene.img('images/locations/pavlovsk/hotel/sex/resep_event4.jpg');
    scene.text('She suddenly pops his dick out of her mouth before she wraps her breasts around it and starts titfucking him.');
    scene.text('"Miss Tanich, please slow down! I don\'t want to blow my load before I get to try that sweet little pussy of yours."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/hotel/sex/resep_event5.jpg');
    scene.text('She releases his cock and pushes him down on to the bench. She then turns around and slowly lowers her hips down, moaning as his cock slides into her pussy.');
    scene.text('She starts riding him as he reaches around and squeezes her breasts.');
    scene.text('He pinches her nipple, causing her to yelp. He just laughs and does it again.');
    scene.img('images/locations/pavlovsk/hotel/sex/resep_event6.jpg');
    scene.text('After a few minutes, she turns around and starts riding him as they face each other.');
    scene.text('You can see from the look on the manager\'s face that he\'s having trouble keeping up with her.');
    qspCall(s, 'arousal', 'voyeur_sex', 60);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/hotel/sex/resep_event7.jpg');
    scene.text('"Okay, my turn now," the manager suddenly yells.');
    scene.text('It seems like the desk girl knows exactly what he means by that since she immediately dismounts him and gets down on all fours.');
    scene.text('He moves in behind her and starts fucking her doggystyle, but does not last very long.');
    scene.text('After a few minutes, he yells out again and pulls out of her pussy just before blowing his load all over her ass.');
    scene.img('images/locations/pavlovsk/hotel/sex/resep_event8.jpg');
    scene.text('"Thank you, Miss Tanich. I believe your monthly bonus is again very much deserved."');
    scene.text('She just smiles at him while showing off her cum covered ass.');
    scene.text('You have seen enough and quietly go back to your room.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((s as any).therapistQW ?? 0)?.['hotel_key'] === 3) {
      scene.actions([{ label: 'Continue', goto: ['HotelRoom', 'therapist'] }]);
    } else {
      if (((s as any).HotelRoom ?? 0)?.['pav'] === 1) {
        scene.actions([{ label: 'Continue', goto: ['HotelRoom', 'normal'] }]);
      } else {
        if (((s as any).HotelRoom ?? 0)?.['pav'] === 2) {
          scene.actions([{ label: 'Continue', goto: ['HotelRoom', 'better'] }]);
        } else {
          if (((s as any).HotelRoom ?? 0)?.['pav'] === 3) {
            scene.actions([{ label: 'Continue', goto: ['HotelRoom', 'best'] }]);
          }
        }
      }
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

function enterPavlin(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/pavlin/pavlin.jpg');
  // TODO-QSP: dynamic text: Varsonofy Krestovoz is a small time gangster who makes his money whoring out vul...
  scene.text(`Varsonofy Krestovoz is a small time gangster who makes his money whoring out vulnerable women in Pavlovsk. Few people know his real name since he's usually called ${((s as any).npc_nickname ?? 0)?.['A217']} (the Peacock).`);
  if (((s as any).npc_rel ?? 0)?.['A217'] === -1) {
    // TODO-QSP: dynamic text: <<$npc_nickname['A217']>> killed your unborn baby; you truly hate him. You shoul...
    scene.text(`${((s as any).npc_nickname ?? 0)?.['A217']} killed your unborn baby; you truly hate him. You should go find some help if you don't want these negative feelings to completely take over your personality.`);
  }
  if (((s as any).npc_rel ?? 0)?.['A217'] < 20  &&  ((s as any).npc_rel ?? 0)?.['A217'] >= 0) {
    // TODO-QSP: dynamic text: You and <<$npc_nickname['A217']>> have a dysfunctional relationship. You work fo...
    scene.text(`You and ${((s as any).npc_nickname ?? 0)?.['A217']} have a dysfunctional relationship. You work for him, but are just one of many girls.`);
  }
  if (((s as any).npc_rel ?? 0)?.['A217'] >= 20  &&  ((s as any).npc_rel ?? 0)?.['A217'] < 40) {
    // TODO-QSP: dynamic text: You understand <<$npc_nickname['A217']>> a little better. You know he has an ext...
    scene.text(`You understand ${((s as any).npc_nickname ?? 0)?.['A217']} a little better. You know he has an extremely violent side, but have figured out some strategies to avoid these outbursts.`);
  }
  if (((s as any).npc_rel ?? 0)['A217' ] >= 40  &&  ((s as any).npc_rel ?? 0)?.['A217'] < 60) {
    // TODO-QSP: dynamic text: You and <<$npc_nickname['A217']>> have a normal relationship.
    scene.text(`You and ${((s as any).npc_nickname ?? 0)?.['A217']} have a normal relationship.`);
  }
  if (((s as any).npc_rel ?? 0)?.['A217'] >= 60  &&  ((s as any).npc_rel ?? 0)?.['A217'] < 80) {
    // TODO-QSP: dynamic text: You and <<$npc_nickname['A217']>> have a good relationship.
    scene.text(`You and ${((s as any).npc_nickname ?? 0)?.['A217']} have a good relationship.`);
  }
  if (((s as any).npc_rel ?? 0)?.['A217'] >= 80) {
    // TODO-QSP: dynamic text: You and <<$npc_nickname['A217']>> have a great relationship.
    scene.text(`You and ${((s as any).npc_nickname ?? 0)?.['A217']} have a great relationship.`);
  }
  if (((s as any).proshotelday ?? 0) !== ((s as any).daystart ?? 0)) {
    // TODO-QSP: act 'Perform your duty': gt 'pavlin', 'pavgenpros'
  }
  if (((s as any).firstfemalecust ?? 0) === 1) {
    if (((s as any).pavprosnofemales ?? 0) === 1) {
      scene.actions([
        { label: 'Start taking female customers', handler: (st: GameState) => {
    (s as any).pavprosnofemales = 0;
    // TODO-QSP: dynamic text: "<<$npc_nickname['A217']>>, I wanted to talk to you about… I want to start takin...
    scene.text(`"${((s as any).npc_nickname ?? 0)?.['A217']}, I wanted to talk to you about… I want to start taking on female customers."`);
    scene.text('"Sure, I can set those up. They usually pay better anyway."');
    scene.actions([
      { label: 'Finish', goto: ['pav_hotel', 'Pavlin'] },
    ]);
  } },
      ]);
    } else {
      qspCall(s, 'willpower', 'prostitution', 'self', 'hard');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Stop taking female customers [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Stop taking female customers [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'prostitution', 'self', 'hard');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    (s as any).pavprosnofemales = 0;
    // TODO-QSP: dynamic text: "<<$npc_nickname['A217']>>, I wanted to talk to you about… I want to stop taking...
    scene.text(`"${((s as any).npc_nickname ?? 0)?.['A217']}, I wanted to talk to you about… I want to stop taking on female customers."`);
    scene.text('"Fine. If you really don\'t want to do it, then I\'ll only get you male customers."');
    scene.actions([
      { label: 'Finish', goto: ['pav_hotel', 'Pavlin'] },
    ]);
  } },
        ]);
      }
    }
  }
  if (((s as any).npc_rel ?? 0)?.['A217'] >= 40) {
    scene.actions([
      { label: 'Have a chat', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/pavlin/pavlin.jpg');
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    if (((s as any).pavchat ?? 0) !== ((s as any).daystart ?? 0)) {
      qspCall(s, 'npc_relationship', 'modify', 'A217', 2);
    }
    (s as any).pavchat = ((s as any).daystart ?? 0);
    (s as any).talkrand = Math.floor(Math.random() * 7) + 0;
    qspCall(s, 'stat', '');
    if ((!((s as any).talkrand ?? 0))) {
      // TODO-QSP: dynamic text: <<$npc_nickname['A217']>> complains about how hard it is to find decent girls in...
      scene.text(`${((s as any).npc_nickname ?? 0)?.['A217']} complains about how hard it is to find decent girls in a hellhole like Pavlovsk.`);
      scene.text('…');
      scene.text('"You\'re the first decent girl to work for me since I set up shop here two years ago."');
      scene.text('You smile and thank him for the compliment.');
    } else {
      if (((s as any).talkrand ?? 0) === 1) {
        // TODO-QSP: dynamic text: You tell <<$npc_nickname['A217']>> you love going to the city and spending your ...
        scene.text(`You tell ${((s as any).npc_nickname ?? 0)?.['A217']} you love going to the city and spending your money at the shopping center. You ask him if he wants to join you the next time you go.`);
        // TODO-QSP: dynamic text: "I'm sorry <<$pcs_firstname>>, but I can never go back to the city."
        scene.text(`"I'm sorry ${((s as any).pcs_firstname ?? 0)}, but I can never go back to the city."`);
        scene.text('He takes a sip of his beer and suddenly looks very depressed.');
        scene.text('It looks like you really hit a nerve there. You wonder what that\'s about.');
      } else {
        if (((s as any).talkrand ?? 0) === 2) {
          // TODO-QSP: dynamic text: <<$npc_nickname['A217']>> tells you a story from his childhood.
          scene.text(`${((s as any).npc_nickname ?? 0)?.['A217']} tells you a story from his childhood.`);
          scene.text('"My father used to beat me every day. One day when I was 12, after another savage beating, I asked my mother to do something about it.');
          scene.text('He snorts. "The bitch started giving me another beating and locked me out on the balcony in my underpants for 2 hours. This was in the middle of January, so I got lucky I didn\'t freeze to death."');
          scene.text('It seems like he had a very rough childhood.');
        } else {
          if (((s as any).talkrand ?? 0) === 3) {
            // TODO-QSP: dynamic text: <<$npc_nickname['A217']>> tells you a story from his childhood.
            scene.text(`${((s as any).npc_nickname ?? 0)?.['A217']} tells you a story from his childhood.`);
            scene.text('"My father frequently brought working girls to the house for punishment. If they were lucky, he just beat them up. If their mistake was worse, then he would involve my mother and she…"');
            scene.text('"Let\'s just say that these girls would never go against my father\'s wishes again once my mother was done with them."');
            scene.text('"I always felt sorry for them and didn\'t want to watch, but they always forced me."');
            scene.text('It seems like he had a very rough childhood.');
          } else {
            if (((s as any).talkrand ?? 0) === 4) {
              // TODO-QSP: dynamic text: <<$npc_nickname['A217']>> tells you how he got in this business.
              scene.text(`${((s as any).npc_nickname ?? 0)?.['A217']} tells you how he got in this business.`);
              scene.text('"I basically followed my father\'s footsteps. When I was 19, I ran my first girl on the streets of St. Petersburg. Too bad she had a nasty habit of always talking back to me."');
              scene.text('"Knocking her teeth out helped a lot with that. Too bad it made her too ugly to be profitable, ha ha ha!"');
              scene.text('He lets out an evil laugh and you don\'t think that was a joke.');
            } else {
              if (((s as any).talkrand ?? 0) === 5) {
                // TODO-QSP: dynamic text: <<$npc_nickname['A217']>> tells you a story from his childhood.
                scene.text(`${((s as any).npc_nickname ?? 0)?.['A217']} tells you a story from his childhood.`);
                scene.text('"One day, when I was 6 years old, I accidentally broke one of my mother\'s crystal figurines. She hit me over the head with her heels so hard you can still see the scar."');
                scene.text('He moves his head towards you and moves his hair away. You indeed see a big scar on his scalp.');
                scene.text('"After that, she refused to feed me for 2 weeks, so I had to get by with scraps I found in the garbage."');
                scene.text('It seems like he had a very rough childhood.');
              } else {
                if (((s as any).talkrand ?? 0) === 6) {
                  // TODO-QSP: dynamic text: "You will never disobey me, right <<$pcs_firstname>>? Your face is so pretty… I ...
                  scene.text(`"You will never disobey me, right ${((s as any).pcs_firstname ?? 0)}? Your face is so pretty… I really don't want to mess that up…"`);
                  // TODO-QSP: dynamic text: "What are you saying, <<$npc_nickname['A217']>>? Stop that! You're scaring me…"
                  scene.text(`"What are you saying, ${((s as any).npc_nickname ?? 0)?.['A217']}? Stop that! You're scaring me…"`);
                  scene.text('"What? I give you a compliment and you get <i>scared</i>? You don\'t have to fear me, I wouldn\'t hurt a fly."');
                  scene.text('He\'s clearly had too much to drink and is talking nonsense.');
                }
              }
            }
          }
        }
      }
    }
    scene.actions([
      { label: 'Finish', goto: ['pav_hotel', 'Pavlin'] },
    ]);
  } },
    ]);
  }
  if (((s as any).pavlevent ?? 0) === 1  &&  ((s as any).pavldaystart2 ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Discuss the beating', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/pavlin/pavlin.jpg');
    if (((s as any).pavldaystart ?? 0) === ((s as any).daystart ?? 0)) {
      (s as any).PavlinQW = 5;
      // TODO-QSP: dynamic text: Before you can even say one word, <<$npc_nickname['A217']>> is already yelling a...
      scene.text(`Before you can even say one word, ${((s as any).npc_nickname ?? 0)?.['A217']} is already yelling at you.`);
      if ((!((s as any).pavldom ?? 0))) {
        scene.text('"Didn\'t you have enough with one black eye? Do you really need another?"');
      } else {
        scene.text('"You\'re lucky we\'re in a public place right now or I would fucking murder you!"');
      }
      // TODO-QSP: dynamic text: "Go away, <<$pcs_firstname>>! I'm too angry right now. We can discuss this later...
      scene.text(`"Go away, ${((s as any).pcs_firstname ?? 0)}! I'm too angry right now. We can discuss this later."`);
      (s as any).pavldaystart2 = ((s as any).daystart ?? 0);
    } else {
      if ((!((s as any).pavtalk ?? 0))) {
        (s as any).PavlinQW = 6;
        // TODO-QSP: dynamic text: "<<$npc_nickname['A217']>>, I…" you start, but he immediately interrupts you.
        scene.text(`"${((s as any).npc_nickname ?? 0)?.['A217']}, I…" you start, but he immediately interrupts you.`);
        // TODO-QSP: dynamic text: "I hope you learned your lesson, <<$pcs_firstname>>. I'm sorry I had to do that,...
        scene.text(`"I hope you learned your lesson, ${((s as any).pcs_firstname ?? 0)}. I'm sorry I had to do that, but you need to understand the situation here."`);
        scene.text('You were hoping you could have an honest conversation with him about the incident, but it\'s clear that that\'s not possible, at least not yet.');
        (s as any).pavtalk = 1;
        (s as any).pavldaystart2 = ((s as any).daystart ?? 0);
      } else {
        if (((s as any).pavtalk ?? 0) === 1) {
          // TODO-QSP: dynamic text: "<<$npc_nickname['A217']>>, I need…" you start, but he immediately interrupts yo...
          scene.text(`"${((s as any).npc_nickname ?? 0)?.['A217']}, I need…" you start, but he immediately interrupts you.`);
          scene.text('"What now?! Stop bothering me and get back to work!"');
          scene.text('You were hoping you could have an honest conversation with him about the incident, but it\'s clear that that\'s not possible, at least not yet.');
          (s as any).pavtalk = 2;
          (s as any).pavldaystart2 = ((s as any).daystart ?? 0);
        } else {
          if (((s as any).pavtalk ?? 0) === 2) {
            // TODO-QSP: dynamic text: "<<$npc_nickname['A217']>>, I need to talk…" you start, but he immediately inter...
            scene.text(`"${((s as any).npc_nickname ?? 0)?.['A217']}, I need to talk…" you start, but he immediately interrupts you.`);
            // TODO-QSP: dynamic text: "I think I made myself clear, <<$pcs_firstname>>. Get back to work."
            scene.text(`"I think I made myself clear, ${((s as any).pcs_firstname ?? 0)}. Get back to work."`);
            scene.text('For the first time since you met him, you can see a glimpse of insecurity in his eyes. You might be getting through to him.');
            (s as any).pavtalk = 3;
          } else {
            if (((s as any).pavtalk ?? 0) === 3) {
              // TODO-QSP: dynamic text: "<<$npc_nickname['A217']>>, I need to talk to you about our… little incident…"
              scene.text(`"${((s as any).npc_nickname ?? 0)?.['A217']}, I need to talk to you about our… little incident…"`);
              scene.text('"I\'m very sorry for my behaviour. I don\'t know what came over me. I had a very bad day and your request was just the final drop. I hope you can forgive me and we can still work together."');
              scene.text('"I was really shocked by the way you treated me and I need assurances it won\'t happen again," you reply.');
              // TODO-QSP: dynamic text: "Of course, <<$pcs_firstname>>. From here on out, I will treat you with the resp...
              scene.text(`"Of course, ${((s as any).pcs_firstname ?? 0)}. From here on out, I will treat you with the respect you deserve. And I was not kidding about the money. I'll need a bigger share in the future."`);
              scene.text('"Okay. I will see what I can do about that."');
              (s as any).minut = ((s as any).minut ?? 0) + 4;
              qspCall(s, 'npc_relationship', 'set', 'A217', 7);
              (s as any).PavlinQW = 7;
              (s as any).pavlevent = 2;
              (s as any).pavldaystart2 = ((s as any).daystart ?? 0);
            }
          }
        }
      }
    }
    scene.actions([
      { label: 'Move away', goto: ['pav_hotel', 'skip_resepevent'] },
    ]);
  } },
    ]);
  }
  if (((s as any).npc_rel ?? 0)?.['A217'] > 19  &&  ((s as any).proshotelday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).TwinQW ?? 0) < 0) {
    if (((s as any).tmp_TwinQW_AskedToday ?? 0) < ((s as any).daystart ?? 0)) {
      scene.actions([
        { label: 'Fake Twins Request', handler: (st: GameState) => {
    (s as any).tmp_TwinQW_AskedToday = ((s as any).daystart ?? 0);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/pavlin/pavlin.jpg');
    // TODO-QSP: dynamic text: "<<$pcs_firstname>>, I've got a guy who's willing to pay a LOT of money for a th...
    scene.text(`"${((s as any).pcs_firstname ?? 0)}, I've got a guy who's willing to pay a LOT of money for a threesome with a set of twins. Do you happen to know a pair of twins who'd be down to make some quick cash?" ${((s as any).npc_nickname ?? 0)?.['A217']} asks, looking hopeful.`);
    scene.text('You think for a moment before responding. "No, I don\'t. However, a lot of people say my sister and I look alike. If I wear my hair like hers and we put on enough make up, we could probably pass as twins."');
    scene.text('"That\'s a great idea! Do you think she would be willing to do this?" he asks, suddenly very excited at the prospect.');
    if (((s as any).sisterLesb ?? 0) < 5) {
      scene.text('"What? No, I was just saying we look alike. I wouldn\'t dare propose an idea like this to her."');
      scene.text('His excitement quickly dissolves into rage as he raises his hand up, ready to strike. "THEN WHY BRING HER UP, YOU STUPID CUNT?!"');
      // TODO-QSP: dynamic text: You brace for the hit, closing your eyes tightly, but the slap never comes. You ...
      scene.text(`You brace for the hit, closing your eyes tightly, but the slap never comes. You open your eyes to see ${((s as any).npc_nickname ?? 0)?.['A217']} has backed off. You're confused at first, but notice that the people in the lobby are looking at the two of you after his little outburst.`);
      scene.text('You quickly stand up and leave him be. You probably shouldn\'t bring up this topic anymore unless you have a more positive response to this request.');
    } else {
      scene.text('You feel a tingling in your loins just thinking about your sister.');
      scene.text('"Of course she will!" you blurt out without thinking.');
      // TODO-QSP: dynamic text: "That's fantastic, <<$pcs_firstname>>! Once you're ready, bring her over and I'l...
      scene.text(`"That's fantastic, ${((s as any).pcs_firstname ?? 0)}! Once you're ready, bring her over and I'll introduce you to the client."`);
      // TODO-QSP: dynamic text: Realizing the commitment you just made, worry begins to seep into you. You hope ...
      scene.text(`Realizing the commitment you just made, worry begins to seep into you. You hope your sister is really up for it, because you fear how ${((s as any).npc_nickname ?? 0)?.['A217']} will react if you can't deliver.`);
      (s as any).TwinQW = 1;
    }
    scene.actions([
      { label: 'Back to lobby', goto: ['pav_hotel', ''] },
    ]);
  } },
      ]);
    }
  }
  if (((s as any).npc_rel ?? 0)?.['A217'] > 29  &&  ((s as any).proshotelday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).ClownQW ?? 0) !== 1) {
    scene.actions([
      { label: 'Circus Request', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/pavlin/pavlin.jpg');
    // TODO-QSP: dynamic text: "<<$pcs_firstname>>, have you heard the circus is in town?"
    scene.text(`"${((s as any).pcs_firstname ?? 0)}, have you heard the circus is in town?"`);
    // TODO-QSP: dynamic text: You look at <<$npc_nickname['A217']>> with a surprised stare. "I didn't know you...
    scene.text(`You look at ${((s as any).npc_nickname ?? 0)?.['A217']} with a surprised stare. "I didn't know you were a fan of the circus. You want to go see a show or something?"`);
    scene.text('"What? No, don\'t be silly, girl! A circus here means at least 50 guys in town who are looking for a good time after the shows."');
    scene.text('"And sometimes even between the shows!" he laughs. "I actually have two performers waiting on a girl right now. I called a girl, but she\'s still 10 minutes out. They\'re getting restless because they need to start their next show soon. Do you think you can take them?"');
    scene.actions([
      { label: 'No thanks', handler: (st: GameState) => {
    scene.text('"No thanks. I\'ll just take a regular customer today."');
    scene.text('"No problem. One regular john coming right up. You can go ahead to the usual room."');
    scene.actions([
      { label: 'Perform your duty', goto: ['pavlin', 'pavgenpros'] },
    ]);
  } },
      { label: 'Sure', handler: (st: GameState) => {
    scene.text('"Okay, you can go ahead to room 312. They\'re expecting you."');
    // TODO-QSP: dynamic text: <<$npc_nickname['A217']>> gives you the key for the hotel room.
    scene.text(`${((s as any).npc_nickname ?? 0)?.['A217']} gives you the key for the hotel room.`);
    scene.actions([
      { label: 'Go to room 312', goto: ['pavlin', 'clown'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).npc_rel ?? 0)?.['A217'] > 39  &&  ((s as any).proshotelday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).preghumdone ?? 0) !== 1) {
    scene.actions([
      { label: 'Pregnant Request', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/pavlin/pavlin.jpg');
    // TODO-QSP: dynamic text: "<<$pcs_firstname>>, I received a request for a pregnant girl today. A pregnant ...
    scene.text(`"${((s as any).pcs_firstname ?? 0)}, I received a request for a pregnant girl today. A pregnant girl! How the hell am I going to find a girl that's pregnant and willing to do this shit?" he says while shaking his head.`);
    if (((s as any).knowpreg ?? 0) === 1  &&  ((s as any).pregChem ?? 0) >= 3600) {
      // TODO-QSP: dynamic text: You feel anger towards <<$npc_nickname['A217']>> rising up inside you. "Do you e...
      scene.text(`You feel anger towards ${((s as any).npc_nickname ?? 0)?.['A217']} rising up inside you. "Do you ever pay attention to me? Can't you see I am pregnant?" you say while gesturing at your swollen belly.`);
      scene.text('"Of course I know that!" His brows furrow, letting you know he\'s getting mad. Butterflies flutter in your stomach, fear trying to match up with the anger.');
      scene.text('His expression softens a little before continuing. "This customer has some pretty weird requests. Are you up for it?"');
      scene.actions([
        { label: 'Not really', goto: ['pav_hotel', 'Pavlin'] },
        { label: 'What kind of weird requests?', handler: (st: GameState) => {
    scene.text('"He told me he\'s really in to pissing pregnant chicks," he says and you cringe at the idea.');
    scene.text('"Fucking degenerates, right? But he\'s offering a boatload of cash! Are you really up for it?"');
    scene.actions([
      { label: 'For the right price', goto: ['pavlin', 'PregBDSM'] },
      { label: 'Not really', goto: ['pav_hotel', 'Pavlin'] },
    ]);
  } },
        { label: 'For the right price', goto: ['pavlin', 'PregBDSM'] },
      ]);
    } else {
      if (((s as any).knowpreg ?? 0) === 1  &&  ((s as any).pregChem ?? 0) < 3600) {
        scene.text('"I\'m pregnant, but I\'m not really showing yet."');
        scene.text('"That\'s great. Once you\'re showing, come to me again and I\'ll introduce you."');
        scene.actions([
          { label: 'Okay', goto: ['pav_hotel', 'Pavlin'] },
        ]);
      } else {
        if ((!((s as any).knowpreg ?? 0))) {
          // TODO-QSP: dynamic text: <<$npc_nickname['A217']>> looks at your body and you know what he's thinking.
          scene.text(`${((s as any).npc_nickname ?? 0)?.['A217']} looks at your body and you know what he's thinking.`);
          scene.text('"Yeah, that\'s definitely tough. Good luck with that," you say before quickly leaving.');
          scene.actions([
            { label: 'Back to lobby', goto: ['pav_hotel', ''] },
          ]);
        }
      }
    }
  } },
    ]);
  }
  scene.actions([
    { label: 'Move away', goto: ['pav_hotel', 'skip_resepevent'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'poster':
      enterPoster(s, scene);
      break;
    case 'resep_event1':
      enterResepEvent1(s, scene);
      break;
    case 'resep_event2':
      enterResepEvent2(s, scene);
      break;
    case 'resep_event3':
      enterResepEvent3(s, scene);
      break;
    case 'Pavlin':
      enterPavlin(s, scene);
      break;
    default:
      enterPoster(s, scene);
      break;
  }
}

export const pav_hotel: LocationDef = {
  name: 'pav_hotel',
  title: '<a href="exec:gt \'pav_hotel\',\'Pavlin\'">Pavlin</a> is sitting',
  region: 'pavlovsk',
  locationType: 'public_indoors',
  description: ['Stepping closer to the poster, you see the hotel is looking to recruit cleaning staff.'],
  enter: enter,
};
