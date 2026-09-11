import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (((s as any).trait_vars ?? 0)?.['sensitivity'] <= -2) {
    ((s as any).trait_vars ?? {})['sensitivity_override'] = 1;
  }
  scene.build();
}

function enterLeave(s: GameState, scene: SceneBuilder): void {
  if (((s as any).trait_vars ?? 0)?.['sensitivity_override'] === 1) {
    ((s as any).trait_vars ?? {})['sensitivity_override'] = 0;
  }
  // TODO-QSP: gt $ARGS[1]
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/therapist/room.jpg');
  scene.text('Upon entering the room you hear the shower running which gives you a moment to look around the large suite. To start off, it looks lived in. There is a small kitchen in the corner with a mini fridge and a small portable stove with a tea kettle on it letting off some steam, letting the owner of the room know the water is soon to be ready. There is a laptop, open, on the desk with lots of papers lying around it, as if someone is transcribing them into digital form. There is one book on the bed, open and face down, as if someone was reading it.');
  scene.text('Suddenly the water in the shower stopped!');
  qspCall(s, 'willpower', 'misc', 'resist', 'medium');
  if (((s as any).pcs_willpwr ?? 0) >= ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'RUN!!!', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'medium');
    qspCall(s, 'therapist_hotel', 'leave', 'pav_hotel');
  } },
    ]);
  }
  scene.actions([
    { label: 'Wait', goto: ['therapist_hotel', 'event_switch'] },
  ]);
  scene.build();
}

function enterEventSwitch(s: GameState, scene: SceneBuilder): void {
  if (((s as any).therapistQW ?? 0)?.['hotel_visits'] === 0) {
    scene.actions([{ label: 'Continue', goto: ['therapist_hotel', 'event1'] }]);
  } else {
    if (((s as any).therapistQW ?? 0)?.['hotel_visits'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['therapist_hotel', 'event2'] }]);
    } else {
      if (((s as any).therapistQW ?? 0)?.['hotel_visits'] === 2) {
        scene.actions([{ label: 'Continue', goto: ['therapist_hotel', 'event3'] }]);
      } else {
        if (((s as any).therapistQW ?? 0)?.['hotel_submit'] < 4) {
          scene.actions([{ label: 'Continue', goto: ['therapist_hotel', 'event4'] }]);
        } else {
          if (((s as any).therapistQW ?? 0)?.['hotel_submit'] < 10) {
            scene.actions([{ label: 'Continue', goto: ['therapist_hotel', 'event5_submit'] }]);
          } else {
            if (((s as any).therapistQW ?? 0)?.['hotel_submit'] === 10) {
              scene.actions([{ label: 'Continue', goto: ['therapist_hotel', 'event6_submit'] }]);
            } else {
              scene.actions([{ label: 'Continue', goto: ['therapist_hotel', 'event4'] }]);
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterEvent1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/therapist/arrive.jpg');
  scene.text('When the man walks out of the shower in a heavy bathrobe, your mind becomes blank and you enter the black room.');
  // TODO-QSP: dynamic text: The Therapist walks over to you to check your panties as he makes sure you are n...
  scene.text(`The Therapist walks over to you to check your panties as he makes sure you are not wearing any. Once he realizes this, he moves you over to the bed. "Welcome to my home," he says. "I've lived here since I divorced my wife, just waiting for the divorce to become official." He sits down in front of you. ${qspFunc(s, 'wrap', 'hypno', '"So, when that happens, you will be my wife, but we need to make you want that, so this is the next part of your training."')} He continues.`);
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/hotel/hotel.room.better1.jpg');
    scene.text('"Every Saturday, you will show up here and we will do some more training. You can still meet me at the clinic but here?"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'din_van', 'showerdin');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/therapist/naked.jpg');
    // TODO-QSP: dynamic text: After you shower, you walk out of the bathroom and stand naked before him. "Good...
    scene.text(`After you shower, you walk out of the bathroom and stand naked before him. "Good, a clean wife makes a happy husband" he says and walks up to you and kisses you while fondling your chest. ${qspFunc(s, 'wrap', 'hypno', '"Now, your first order, while you are in this room you will respond to Wife, not Cunt is that understood Wife?"')}`);
    qspCall(s, 'willpower', 'misc', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'No, Master [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'No, Master [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'willpower', 'pay', 'medium');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/clinic/therapist/pavlov.jpg');
    scene.text('"Then get out of here until you do"');
    scene.text('He guides you out of the door and closes it behind you.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'therapist_hotel', 'leave', 'pav_hotel');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Yes, Master', goto: ['therapist_hotel', 'event1_post_shower'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterEvent1PostShower(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A186');
  scene.img('images/characters/pavlovsk/resident/therapist/bj.jpg');
  scene.text('"Let\'s start off slow. As your husband, you have to keep me calm," he points to under the desk. When he says "get under there", you move under the desk and look at him before he sits in his chair and imprisons you. You just sit there for what feels like a couple of hours before he opens his robe and moves your face to his cock. Knowing what he wants you start to suck on his cock. You only hear, "Don\'t stop, even if I cum, you keep my cock in your mouth" and he goes back to whatever he\'s doing.');
  qspCall(s, 'arousal', 'bj', 60, 'sub');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/therapist/sex.jpg');
    scene.text('You spend most of the day here, getting cum in your mouth and throat while he works. Once he pulls his cock from your mouth, and then pulls you from under the desk, you can see its already night time. "Get on the bed, on your back, I want to breed you as a reward tonight before we sleep"');
    qspCall(s, 'arousal', 'bj', 120, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Thank you, Master', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/therapist/sex2.jpg');
    scene.text('You stand up and move to the bed and looking up at your therapist as he climbs on top of you and pushes himself inside you. He has his way with your body, fondling your chest, sucking your nipples, kissing and sucking on your neck. He enjoys your body until he cums deep inside you. Unlike back in the clinic, he stays inside you as he pulls a blanket over you and himself before falling asleep.');
    qspCall(s, 'arousal', 'vaginal', 20, 'sub');
    qspCall(s, 'cum_call', '', 0, 'A186', 2, 0, 15000, 60);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Sleep', handler: (st: GameState) => {
    ((s as any).therapistQW ?? {})['hotel_visits'] = 1;
    qspCall(s, 'sleep_simple', 'simple');
    if (((s as any).hour ?? 0) < 7) {
      qspCall(s, 'sleep_simple', 'forced', 7, 0);
    }
  }, goto: ['therapist_hotel', 'event1_morning'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterEvent1Morning(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'din_van', 'showerdin');
  qspCall(s, 'outfit', 'wear_last_worn');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/hotel/hotel.room.better1.jpg');
  scene.text('You wake up alone in a hotel room. You are naked and dripping of cum. You ask yourself, "What did I do last night?" after the hypnosis ends. You only remember sleeping with someone and having sex with them, but you have no idea who. You finally use the shower in the room, dress in what you wore the day before and leave the room.');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'therapist_hotel', 'leave', 'pav_hotel');
  } },
  ]);
  scene.build();
}

function enterEvent2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/therapist/hotel_arrive2.jpg');
  scene.text('Once more, it\'s Saturday night, and you find yourself entering a hotel room that you have a key to, with the goal of locating the person staying here so that you can return the key to them. However, you find yourself looking directly at him, someone you know, naked and hard while looking you over. Before you can do anything, your mind goes blank and you are in the black room of your hypnotized state, leaving you at his mercy.');
  scene.text('"My wife, you\'ve returned to me. Come, remove your clothes and sit next to me and we\'ll talk" he says to you, and as if your legs move on their own, you remove your clothes before sitting down beside him.');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/therapist/hotel_shower_fondle.mp4');
    scene.text('"Today is an important day for you"');
    qspCall(s, 'willpower', 'misc', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: '"No" - (rebel) [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: '"No" - (rebel) [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'willpower', 'pay', 'medium');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/hotel/hotel.room.better1.jpg');
    scene.text('"Then come back when you are ready to take that step" He says and walks you to the door. You wake up in the hallway, standing outside a hotel room, unable to remember why you were there in the first place.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'therapist_hotel', 'leave', 'pav_hotel');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: '"Yes" - (continue)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('"Wonderful, now remember, a clean wife is a happy wife. I will join you this time, to make sure you are completely clean." He says and takes your hand and pulls you into the bathroom and helps you get undressed, feeling you up each chance he gets. "Your young body is incredible".');
    scene.actions([
      { label: 'Go take a shower', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (qspFunc(s, 'pcs_has_attr', ' || ', 'body_tits_big', 'body_tits_huge')) {
      scene.text('He spends a lot of time fondling your breasts in a gentle manner. "These will make feeding our children a wonderful sight" he says and pulls you into the shower.');
    } else {
      scene.text('"Have you ever thought about getting work done? While your current size is nice, they could be larger" he says and pulls you into the shower.');
    }
    scene.actions([
      { label: 'Continue', goto: ['therapist_hotel', 'event2_shower'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterEvent2Shower(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A186');
  qspCall(s, 'din_van', 'showerdin');
  qspCall(s, 'stat', '');
  scene.img('images/system/image_needed.png');
  scene.text('In the warm water of the shower, the therapist orders you to stay still while he rubs his hands through your hair, scrubbing and massaging your scalp. He takes great care with his actions on your hair. In your mind this feels really pleasant. As he rinses your hair, he says, "Now wife, I want you to kneel before me and clean my cock and balls with your mouth. Be very thorough with your actions and don\'t miss an inch." You turn to give him the blowjob that he has ordered you to do. "I want you to know what you\'re doing but not who you\'re doing it for. As if you are in a dream, wake up." He says and you get a bit of your consciousness back. You feel like you are in a hazy dream. His cock is in your mouth but you don\'t know whose it is.');
  qspCall(s, 'willpower', 'misc', 'resist', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Bite down hard [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Bite down hard [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).therapistQW ?? {})['escaped'] = 1;
    qspCall(s, 'calendar', 'remove', 'therapist_hotel_visit');
    qspCall(s, 'underwear', 'wear');
    qspCall(s, 'outfit', 'wear_last_worn');
    scene.img('images/system/image_needed.png');
    scene.text('You don\'t know why, but you feel this isn\'t right. You can\'t put your finger on why but this man isn\'t your lover. As soon as you bite down hard on his cock, he screams out in pain. This wakes you up from your dreamlike state. Not sticking around, you grab a nearby robe and run out of the hotel room and into the night.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'therapist_hotel', 'leave', 'pav_market');
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Give Blowjob', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 30, 'sub');
    qspCall(s, 'cum_call', 'mouth', 'A186', 2, 0, 15000, 60);
    qspCall(s, 'stat', '');
    scene.img('images/system/image_needed.png');
    scene.text('Your eyes are clear but you are in a haze. You feel a cock in your mouth and you start sucking. It tastes delicious to you and you want to keep doing it. You move your mouth over the long shaft. As you lick and kiss, suck and fondle, you enjoy this man\'s meat. You feel his hands touch the back of your head and this man cums in your throat, drinking up every last drop. "Holy hell gi.. Wife" he says, slipping on his training. "You\'re going to be a fantastic lover when I\'m done with your training." He says and takes your hand and pulls you into the hotel room.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 20, 'sub');
    qspCall(s, 'cum_call', '', 0, 'A186', 2, 0, 15000, 60);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/therapist/sex2.jpg');
    scene.text('He places you on the bed and quickly pushes you back into his body. You moan as you feel everything happening to you. Your mind is still foggy but you are aware of the sensations. His actions make you moan and groan on the bed. You squirm over the covers as he takes you relentlessly. His lips on your breasts, his hands on your hips, he gives you a fuck you won\'t forget. It\'s not long before you hear him groan and feel your body warming up with his seed. "Fuck, Wife, I\'ll never tire of you, now sleep" he says and your mind returns back to the black room as you feel him start up again, realizing he will fuck you in your sleep.');
    scene.actions([
      { label: 'Sleep', handler: (st: GameState) => {
    ((s as any).therapistQW ?? {})['hotel_visits'] = 2;
    qspCall(s, 'sleep_simple', 'simple');
    if (((s as any).hour ?? 0) < 7) {
      qspCall(s, 'sleep_simple', 'forced', 7, 0);
    }
    qspCall(s, 'din_van', 'showerdin');
    qspCall(s, 'underwear', 'wear');
    qspCall(s, 'outfit', 'wear_last_worn');
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/vagcreampie/after1.jpg');
    scene.text('You wake up the next morning feeling like a million dollars. You sit up and feel something squirt out of your pussy. You were filled up by whomever you slept. Your subconscious mind makes your body want to keep it inside you. You get up, shower, dress and head back to town.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'therapist_hotel', 'leave', 'pav_market');
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

function enterEvent3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A186');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/hotel/hotel.room.better1.jpg');
  // TODO-QSP: dynamic text: You make your way into the hotel room once again and see no one around. You wond...
  scene.text(`You make your way into the hotel room once again and see no one around. You wonder if its empty, but before you can look around, you hear a snap and your mind goes blank. "Welcome back, Wife. ' + $func('wrap', 'hypno', 'Today you will be doing house work for me and you will be doing it naked. You always want to be naked around me. This will change when we have children, but for now, this will be natural for you. When I say, <font color="purple">"This place is a mess"</font>, you will start cleaning up the place on your own. Do a good job and you will get a reward,"') + ' he says and then asks: ${qspFunc(s, 'wrap', 'hypno', '"Got it, wife?"')}`);
  scene.actions([
    { label: 'Yes Sir', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'outfit', 'strip_all');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/therapist/hotel_clean.jpg');
    scene.text('"Good" he says and snaps his fingers again and you come out of your trance. "My dear, thank you for coming over, I really hope you had a good day" he says and gives you a kiss, which you return. "Sorry about being a bad host. This place is a mess, I\'ve not had time to clean up" he says and your mind triggers and you remove your clothes, fold them up nicely, place then on the bed, then begin to clean up the hotel room.');
    if (qspFunc(s, 'pcs_has_attr', ' || ', 'body_tits_big', 'body_tits_huge')) {
      scene.text('You sense his eyes on you the whole time. "I love watching your body move" he says and this compliment makes you feel happy. You feel like you might love this man, and he\'s helped you so much with all your issues. "Thank you, I like to keep my body in healthy shape, I want you to be happy when looking at me" You tell him.');
    } else {
      scene.text('You feel his eyes on you the entire time. "So, I have a friend in St. Petersberg, works in a clinic, that sells a cream that can make your breasts grow larger. I want you to go there and buy some and use it" he suggests. "It will help you relax and help you with that issue you told me about while you were under hypnosis a few weeks back" he lies and you nod your head. "If you think it will help." You tell him.');
      if (((s as any).experimentQW ?? 0)?.['discovered'] < 2) {
        ((s as any).experimentQW ?? {})['discovered'] = 10;
      }
      if (((s as any).experimentQW ?? 0)?.['times_participated_1'] > 0) {
        ((s as any).therapistQW ?? {})['breast_cream'] = 3;
      } else {
        ((s as any).therapistQW ?? {})['breast_cream'] = 1;
      }
    }
    scene.actions([
      { label: 'Finish cleaning the room', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'cuni', 35, 'sub');
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/kuni/kuni.jpg');
    scene.text('You finish cleaning up the hotel room and when you pick something up, you feel his hands on your bottom. He feels up your rear. This is what you want him to do, but you don\'t move. It\'s not long before he kneels down behind you and you feel his lips on your pussy and starts to make out with your lower hole. This causes you to moan out softly as he eats you out. This lasts for a few minutes before he pulls back and pushes you onto the bed and is quickly on top of you again.');
    qspCall(s, 'willpower', 'misc', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Resist [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Resist [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 60, 'sub', 'rape');
    qspCall(s, 'willpower', 'pay', 'medium');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.img('images/system/image_needed.png');
    scene.text('Something inside you is wanting to rebel, when you are pushed onto the bed. You feel as if something is wrong and when he pushes inside you, you moan out, "No…" softly as he starts pumping in and out of you. He is larger than you so you can\'t really do much about this and when he grunts and cums inside you, you see a chance to do something. He pulls out and lays on the bed. "Mmm, that was good," he says and when you see him drift off to sleep, you grab your clothes and place the key card on the table and run out of the door and head home.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'therapist_hotel', 'leave', 'pav_market');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Submit', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 60, 'sub');
    qspCall(s, 'cum_call', '', 0, 'A186', 2, 0, 15000, 60);
    qspCall(s, 'stat', '');
    scene.img('images/system/image_needed.png');
    scene.text('You moan when he pushes his entire size inside you. You really want this. You push back and help him push deeper inside you. He grabs a hold of your waist and starts to push in and pull out of you. This carries on for several minutes before you feel him cum inside you and he holds you tight to his own body. "Mmmm, dear, your pussy is so perfect" he says giving you another compliment. He holds you on his cock and falls to his side and stays inside you as he pulls the blanket over you and spoons you as you both fall asleep.');
    scene.actions([
      { label: 'Sleep', handler: (st: GameState) => {
    ((s as any).therapistQW ?? {})['hotel_visits'] = 3;
    qspCall(s, 'sleep_simple', 'simple');
    if (((s as any).hour ?? 0) < 7) {
      qspCall(s, 'sleep_simple', 'forced', 7, 0);
    }
    qspCall(s, 'din_van', 'showerdin');
    qspCall(s, 'underwear', 'wear');
    qspCall(s, 'outfit', 'wear_last_worn');
    qspCall(s, 'stat', '');
    scene.img('images/system/image_needed.png');
    scene.text('You wake up the next morning to hands fondling your breasts and the therapist groaning in his sleep. You slowly and gently free yourself from his hold, get dressed and head out with a smile on your face. While your mind and heart feel this is right, something in the back of your mind is bothering you, but you just can\'t place it.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'therapist_hotel', 'leave', 'pav_market');
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

function enterEvent4(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'outfit', 'strip_all');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/hotel/hotel.room.better1.jpg');
  scene.text('You arrive at the hotel room on another Saturday night. You walk in like you own the place and strip down and take a shower. You spend a few minutes cleaning up and come out wearing only a towel, and you see the therapist watching TV.');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/therapist/hotel_arrive4.jpg');
    // TODO-QSP: dynamic text: "Ah, my wife, how are you today." He says while getting up and walking over to k...
    scene.text(`"Ah, my wife, how are you today." He says while getting up and walking over to kiss you on the lips. You return the kiss as if it was natural. "There is something I want you to do for me today" he says and snaps his fingers. ${qspFunc(s, 'wrap', 'hypno', '""You will stay in here naked  &&  ready for me. I\'m leaving to go get us something to eat.""')} He whispers and snaps his fingers again and you wake up. "I'll be back in a few minutes," he explains and pulls your towel off as he leaves the room, leaving you naked and alone.`);
    if (((s as any).pcs_intel ?? 0) >= 90) {
      scene.actions([
        { label: 'Look around the room', handler: (st: GameState) => {
    ((s as any).therapistQW ?? {})['hotel_hypno_study'] = (((s as any).therapistQW ?? {})['hotel_hypno_study'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/therapist/hotel_wait_tv.jpg');
    scene.text('There are a lot of items in the room, including his computer, books, files, and notes. You see a book on his table next to a file with your name on it. The book is called "The Theory of Hypnosis". You look at the back cover and read it: "Does mind control fascinate you? Are you interested in understanding the human mind? Do you want to learn how to influence others and bend them to your will? Imagine winning almost any argument, turning people to your way of thinking or controlling situations to your own advantage. This is all while ensuring others do not hold the same power over you. You should know that most of our choices are generated and managed through specific methods of covert manipulation. Reading this book you\'ll uncover the most powerful principles in the world of Dark Psychology." You open the book and thumb through it. Sitting down on a chair near you, you read and gain a deeper understanding of Hypnotherapy. You spend a good hour learning a few things before hearing the door click. Putting the book down, you stand up and watch as the therapist returns with a bag of food.');
    if (((s as any).therapistQW ?? 0)?.['hotel_hypno_study'] >= 4) {
      scene.text('This is the end of this path, more to come!');
      scene.actions([
        { label: 'Continue', goto: ['therapist_hotel', 'event4_post_wait'] },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', goto: ['therapist_hotel', 'event4_post_wait'] },
      ]);
    }
  } },
      ]);
    }
    qspCall(s, 'willpower', 'misc', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).therapistQW ?? {})['hotel_left'] = (((s as any).therapistQW ?? {})['hotel_left'] ?? 0) + (1);
    qspCall(s, 'willpower', 'pay', 'medium');
    qspCall(s, 'underwear', 'wear');
    qspCall(s, 'outfit', 'wear_last_worn');
    qspCall(s, 'stat', '');
    scene.img(`images/pc/activities/misc/dress_${Math.floor(Math.random() * 2) + 1}.mp4`);
    scene.text('As you stand there naked, you slowly come to and, seeing yourself naked, you quickly get dressed. You are not sure why you are here and decide to leave.');
    if (((s as any).therapistQW ?? 0)?.['hotel_left'] >= 1) {
      scene.text('This is the end of this path, more to come!');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'therapist_hotel', 'leave', 'pav_market');
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'therapist_hotel', 'leave', 'pav_market');
  } },
      ]);
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Submit', handler: (st: GameState) => {
    ((s as any).therapistQW ?? {})['hotel_submit'] = (((s as any).therapistQW ?? {})['hotel_submit'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/therapist/hotel_wait_tv.jpg');
    scene.text('You obey his orders and sit on the bed naked and watch whatever he was watching until he returns holding a bag of food.');
    scene.actions([
      { label: 'Continue', goto: ['therapist_hotel', 'event4_post_wait'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterEvent4PostWait(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/therapist/hotel_lap.jpg');
  scene.text('He cleans off the desk and places the food on it. When he sits down, he pats his lap. "Come, sit on my lap," he says and you do just that. He wraps an arm around you and feeds you some of his fries. After about 15 minutes, he lifts you up and places you on the bed. Removing his clothes, he lies down next to you and wraps his arms around you. This time, he doesn\'t have sex with you and just cuddles you until you both fall asleep.');
  scene.actions([
    { label: 'Sleep', handler: (st: GameState) => {
    ((s as any).therapistQW ?? {})['hotel_visits'] = (((s as any).therapistQW ?? {})['hotel_visits'] ?? 0) + (1);
    qspCall(s, 'sleep_simple', 'simple');
    if (((s as any).hour ?? 0) < 7) {
      qspCall(s, 'sleep_simple', 'forced', 7, 0);
    }
    qspCall(s, 'din_van', 'showerdin');
    qspCall(s, 'underwear', 'wear');
    qspCall(s, 'outfit', 'wear_last_worn');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/hotel/hotel.room.better1.jpg');
    scene.text('The next morning, you wake up in the therapist\'s arms. You slowly remove yourself from his hold, dress, and leave the room.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'therapist_hotel', 'leave', 'pav_market');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterEvent5Submit(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A186');
  qspCall(s, 'outfit', 'strip_all');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/therapist/hotel_undressed_knee.jpg');
  // TODO-QSP: dynamic text: After another Saturday night in the hotel room, you feel flushed when you see yo...
  scene.text(`After another Saturday night in the hotel room, you feel flushed when you see your therapist. Your heart feels like it's pounding a million miles a second. When he stands up in his robe, you see his cock and your mind goes blank. "Wife, welcome back." He walks up to you and kisses your lips and squeezes your chest. ${qspFunc(s, 'wrap', 'hypno', '"Now, every time you come into this room, you will !== longer enter a trance  &&  you will stay, as my lover, you will be wet  &&  ready as you want me but will wait for me to start anything. You will also strip down to nothing  &&  will !== want to wear clothing while you are here with me."')} He commands. ${qspFunc(s, 'wrap', 'hypno', '""When I say the phrase, \'My dear\' you will do whatever I command you while you are awake. Do you understand?""')} he asks, planting more triggers in your mind.`);
  scene.text('"Yes, sir." you respond.');
  scene.text('"All right, now undress and present yourself to me."');
  scene.text('You strip down to your birthday suit and turn to show him your body. He pulls you into his lap and moves a hand over your legs before moving it between your legs, feeling you up. "Now, wake up and be my woman."');
  scene.text(' ***Major Choice*** ');
  scene.text('If you continue from this point, you will enter a story moment where there are only 3 ways to break free. If you do not have these conditions meet, they will be passed up and you will fall into this bad end, unless you are into that kind of thing. This is a MAJOR POINT OF NO RETURN.');
  scene.actions([
    { label: 'Accept', handler: (st: GameState) => {
    ((s as any).therapistQW ?? {})['hotel_submit'] = 10;
    qspCall(s, 'arousal', 'vaginal_finger', 15, 'sub');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/therapist/hotel_undressed_knee.jpg');
    scene.text('You come to and look at the therapist and when you feel his hand between your legs, you open them for him. "Good girl, tell me what you think about me," he says, as he slips a finger into your honeypot.');
    scene.text('"I think I am falling for you. From the dreams I\'ve had about you, to kissing you after our sessions, I want to offer myself to you, but I don\'t know just yet," you tell him and then moan out when he kisses your neck.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'cuni', 35, 'sub');
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/kuni/kuni.jpg');
    scene.text('"Take your time, I\'ll just use your body and you feel like you want me to," he replies and lays you back on the bed and suckles on your neck while fingering you. "Mmm, you taste so delicious" he says over you, before moving down your body, suckling on your breasts for a bit before moving further down between your legs and starts to eat you out.');
    scene.text('"Sir?!" You moan out as he ravishes your pussy with his mouth and tongue.');
    // TODO-QSP: dynamic text: <<$func('wrap', 'hypno', '"You will be mine, your body will not deny me, you onl...
    scene.text(`${qspFunc(s, 'wrap', 'hypno', '"You will be mine, your body will not deny me, you only have to say yes to me. My dear, tell me to fuck you."')} He exclaims and the trigger clicks in your mind.`);
    scene.actions([
      { label: '"Sir, please, fuck me"', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 60, 'sub');
    qspCall(s, 'cum_call', '', 0, 'A186', 2, 0, 15000, 60);
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/resident/therapist/sex2.jpg');
    // TODO-QSP: dynamic text: You say and he climbs on top of you and pushes inside you again. "Anything for y...
    scene.text(`You say and he climbs on top of you and pushes inside you again. "Anything for you," he says and starts to have sex with you. This continues for the night. ${qspFunc(s, 'wrap', 'hypno', '"My dear, you want my cum inside you, right? You love my cum in your body,"')} he explains.`);
    scene.text('"Yes, I love your cum inside me, I love how it feels inside me." and with that he cums hard inside you.');
    // TODO-QSP: dynamic text: <<$func('wrap', 'hypno', """Good Girl, I'll keep cumming inside you until you ar...
    scene.text(`${0} he says and you say nothing. ${qspFunc(s, 'wrap', 'hypno', '"My Dear, tell me, You want my babies inside you, correct?"')}`);
    scene.text('"Yes, Sir" you say and he kisses you again.');
    scene.text('"Good, but for now, let\'s sleep. In the morning we will have more of this before you leave," he says and your eyes close and you fall into a deep sleep.');
    scene.actions([
      { label: 'Sleep', handler: (st: GameState) => {
    qspCall(s, 'sleep_simple', 'simple');
    qspCall(s, 'stat', '');
    if (((s as any).hour ?? 0) < 7) {
      qspCall(s, 'sleep_simple', 'forced', 7, 0);
    }
    qspCall(s, 'arousal', 'vaginal', 60, 'sub');
    qspCall(s, 'cum_call', '', 0, 'A186', 2, 0, 15000, 60);
    qspCall(s, 'arousal', 'end');
    scene.img('images/shared/sex/cum/vagcreampie/doggy5.mp4');
    scene.text('You wake up the next morning to the therapist pumping in and out of you. "Mmm, good morning my dear, you love me waking you up like this," he says and you nod in agreement with him. "Now be a good girl and just lay there and enjoy it." He says and spends an hour pumping more and more cum inside you.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img(`images/pc/activities/misc/dress_${Math.floor(Math.random() * 2) + 1}.mp4`);
    scene.text('He stops and kisses you and then pulls out of you and slowly gets dressed. "My dear, get up, clean up, then return the same time next week," he says, leaving you alone to get dressed and cleaned up before leaving.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    ((s as any).therapistQW ?? {})['hotel_visits'] = (((s as any).therapistQW ?? {})['hotel_visits'] ?? 0) + (1);
    qspCall(s, 'din_van', 'showerdin');
    qspCall(s, 'underwear', 'wear');
    qspCall(s, 'outfit', 'wear_last_worn');
    qspCall(s, 'stat', '');
    qspCall(s, 'therapist_hotel', 'leave', 'pav_market');
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
    { label: 'Break free', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).therapistQW ?? {})['escaped'] = 2;
    qspCall(s, 'calendar', 'remove', 'therapist_hotel_visit');
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You come to and see that you are naked. "WHAT THE HELL?" you yell and slap the t...
    scene.text(`You come to and see that you are naked. "WHAT THE HELL?" you yell and slap the therapist. You quickly get up and grab your clothes and rush out of the hotel room to the front desk to ask them to call the police. After explaining everything, they send a single officer to the hotel room to find it empty. You are slapped with a ${qspFunc(s, 'money', 'string_price', 500)} fine for public indecency, told not to waste their time, and sent on your way.`);
    qspCall(s, 'money', 'pay', 500);
    if (((s as any).money ?? 0) < 0) {
      (s as any).money = 0;
    }
    scene.text(' ***Therapist is no longer an option for now*** ');
    scene.actions([
      { label: 'Get dressed and leave', handler: (st: GameState) => {
    qspCall(s, 'underwear', 'wear');
    qspCall(s, 'outfit', 'wear_last_worn');
    qspCall(s, 'stat', '');
    qspCall(s, 'therapist_hotel', 'leave', 'pav_market');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterEvent6Submit(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A186');
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  ((s as any).therapistQW ?? {})['hotel_visits'] = (((s as any).therapistQW ?? {})['hotel_visits'] ?? 0) + (1);
  qspCall(s, 'outfit', 'strip_all');
  qspCall(s, 'din_van', 'showerdin');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/therapist/hotel_shower1.mp4');
  scene.text('You enter the hotel again, but this time it is different. The moment you walk in, you remove your clothes, folding them up before heading into the shower to get cleaned up.');
  scene.text('In your mind, you know this phrase, "A Clean Wife has a Happy Husband" You spend time making sure everything about yourself is clean before you dry off and enter the hotel room.');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.text('You see your husband working on something at his desk. You kneel before him and wait for him to notice you. After some time, he turns to look at you.');
    scene.text('"Wife, you look as beautiful as ever. I have something I want you to sign. You are my wife in all but name. Let\'s make it official" he says and hands you a pen and a clip board.');
    scene.text('You look at it. Giving a quick read you see it\'s a marriage certificate. "You will sign it now, won\'t you My Dear?" he commands. You look down again at the packet before you.');
    scene.text('If you sign this, you will be his wife, any boyfriends, girlfriends, lovers, husbands, anything where you live with them will be null and void. From this point on, the therapist is your husband and he WILL NOT divorce you.');
    scene.actions([
      { label: 'Sign the paper', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'arousal', 'bj', 30, 'sub');
    qspCall(s, 'stat', '');
    scene.text('You give the paper a signature and he smiles. "Good, I\'ll take this to the city offices on Monday." He says and pulls out his cock and moves your head to it.');
    scene.text('You start sucking on it without question. "Now that we are married, this means you are to live with me. You will head home tonight, tell your family you are moving out, and you will live here with me until we find a place of our own, Do you understand?" he asks.');
    scene.actions([
      { label: '"Yes Sir"', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'arousal', 'bj', 15, 'sub');
    qspCall(s, 'cum_call', 'mouth', 'A186', 2, 0, 15000, 60);
    qspCall(s, 'stat', '');
    scene.text('"Good, Now finish up with your current task so you can tell your parents or loved ones the news. Tell them whatever you want, but tell them you are moving out."');
    scene.text('He says and cums into your mouth. You drink and swallow every drop. He lets you up and you get dressed. Without saying anything, you leave the motel and head home.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'underwear', 'wear');
    qspCall(s, 'outfit', 'wear_last_worn');
    qspCall(s, 'stat', '');
  }, goto: ['therapist_hotel', 'event6_submit2'] },
    ]);
  } },
    ]);
  } },
      { label: 'Don\'t sign the paper', handler: (st: GameState) => {
    scene.text('He helps you to your feet and tells you to get dressed and leave. "I expect you to sign it the next time I see you" he says. You dress and leave.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'underwear', 'wear');
    qspCall(s, 'outfit', 'wear_last_worn');
    qspCall(s, 'stat', '');
    qspCall(s, 'therapist_hotel', 'leave', 'pav_market');
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterEvent6Submit2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 45;
  qspCall(s, 'lover', 'clear_all');
  qspCall(s, 'stat', '');
  if (qspFunc(s, 'homes_properties', 'is_current_home', 'parents_home')) {
    scene.img('images/characters/pavlovsk/resident/anya/home/sisboyqw_00.jpg');
    scene.text('You return home and see your family watching TV. You head to your bedroom and see Anya on her bed reading a book. When you pull out your suitcase, she looks up from her book. "You going somewhere?" she asks.');
    scene.text('"I\'m moving out" you tell her.');
    scene.text('"Oh, did you find a place for university?" she asks and helps you get your stuff together.');
    scene.text('"Something like that" you tell her. "I found a place to live and I will be staying there" you tell her the truth but not the full truth.');
    scene.text('"Well, make sure you come back from time to time" she says and gives you a hug before you head to the living room to tell your parents about the news.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You enter the living room with your suitcase and just say, "<<$npc_nickname['A29...
    scene.text(`You enter the living room with your suitcase and just say, "${((s as any).npc_nickname ?? 0)?.['A29']}, Dad, Im moving out. I have found a place to stay and I will be living there" you say and your mother stands up looking confused. "What are you talking about?" she says.`);
    scene.text('"I\'m moving out" you repeat.');
    scene.text('"I heard that, but why?" she asks as Valdimer walks up behind her to keep her back.');
    scene.text('"Dear, stop, she\'s out of school and she\'s old enough to live on her own now." He walks up to you and gives you a hug. "Just make sure you come home from time to time" he says and you can see your mother starting to cry.');
    scene.text('"Does this mean I can get her bed?" Kolka says loudly and from the bed room, you can hear Anya yell back. "OH HELL NO" and this causes Kolka to slump back into the chair he was sitting on.');
    scene.text('"Just promise us you will be careful" Valdimer says and you nod. "I\'ll be ok." you say and grab your suitcase and then leave home to return to the hotel.');
    scene.actions([
      { label: 'Go to the hotel', goto: ['therapist_hotel', 'event6_submit3'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).husID ?? 0) !== '') {
      qspCall(s, 'lover_love', 'divorce');
      qspCall(s, 'stat', '');
      scene.img('images/shared/romance/misc/depart1.mp4');
      scene.text('You return home and head to the bedroom. You pull out your suitcase and start putting all your outfits into it. This takes you only a few minutes before you go to the living room to see your husband sleeping on the couch. You write up a quick note saying you no longer love him and have moved out. You remove your wedding ring and place it on the table with the note and you head back to the motel.');
    } else {
      if (((s as any).wifID ?? 0) !== '') {
        qspCall(s, 'lover_love', 'divorce');
        qspCall(s, 'stat', '');
        scene.img('images/shared/romance/misc/depart1.mp4');
        scene.text('You return home and head to the bedroom. You pull out your suitcase and start putting all your outfits into it. This takes you only a few minutes before you go to the living room to see your wife sleeping on the couch. You write up a quick note saying you no longer love her and have moved out. You remove your wedding ring and place it on the table with the note and you head back to the motel.');
      } else {
        if (qspFunc(s, 'homes_properties', 'is_current_home', 'maid_bedroom')  ||  qspFunc(s, 'homes_properties', 'is_current_home', 'niko_apartment')  ||  qspFunc(s, 'homes_properties', 'is_current_home', 'vasilyhome')  ||  qspFunc(s, 'homes_properties', 'is_current_home', 'university_dorm')  ||  qspFunc(s, 'homes_properties', 'is_current_home', 'hunters_lodge')  ||  qspFunc(s, 'homes_properties', 'is_current_home', 'shared_apartment')  ||  qspFunc(s, 'homes_properties', 'is_current_home', 'grandparents_house')  ||  qspFunc(s, 'homes_properties', 'is_current_home', 'meynold_household')) {
          scene.text('You return home and head to the bedroom. You pull out your suitcase and start putting all your outfits into it. This takes you only a few minutes before you go to the living room to see no one is there. You write up a quick note saying you thank them for the times you spent together and will visit when they can. You take the key from your pocket and place it on the table with the note and you head back to the motel.');
        } else {
          scene.text('You return home and head to the bedroom. You pull out your suitcase and start putting all your outfits into it. You pull out your phone and cancel your rent payments and send a quick email to the agency saying the keys on the table and you have moved out. You take the key from your pocket and place it on the table and you head back to the motel.');
        }
      }
    }
  }
  scene.actions([
    { label: 'Go to the hotel', goto: ['therapist_hotel', 'event6_submit3'] },
  ]);
  scene.build();
}

function enterEvent6Submit3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A186');
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'outfit', 'strip_all');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/therapist/naked1.jpg');
  scene.text('You return to the hotel room with your stuff. When you enter, you see the therapist waiting for you. "Welcome back, my wife. Looks like all went well" he says and you nod.');
  scene.text('"Just put your stuff in the closet there and lay on the bed and wait for me." He says and you strip down, putting your clothes into the closet, then you lay on the bed, naked. You are glad the TV is on and you watch it.');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 90;
    qspCall(s, 'arousal', 'vaginal', 90, 'sub');
    qspCall(s, 'cum_call', '', '', 'A186', 2, 0, 15000, 60);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/vag/miss/old1.mp4');
    scene.text('You spend the next hour or two, naked on the bed, watching TV before he comes to bed. He pushes you on your back and before you know it, he is inside you having sex with you.');
    scene.text('You were already wet from being in his presence. He moves your hands above your head and spends the next few hours pumping in and out of you before you both pass out.');
    scene.actions([
      { label: 'Sleep', handler: (st: GameState) => {
    qspCall(s, 'sleep_simple', 'simple');
    if (((s as any).hour ?? 0) < 7) {
      qspCall(s, 'sleep_simple', 'forced', 7, 0);
    }
    qspCall(s, 'arousal', 'vaginal', (-90), 'sub');
    qspCall(s, 'cum_call', '', '', 'A186', 2, 0, 15000, 60);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/vag/miss/old2.mp4');
    scene.text('You wake up the next morning and your legs are on his shoulders and he is still having sex with you.');
    scene.text('He says nothing and you just lay there looking up at him. It takes him a bit and he cums deep inside you again. He stays inside you and looks down at you.');
    scene.text('"Good Morning, Wife. Tell me, Do you love being woken up like this?"');
    scene.text('"Yes, sir, I love it" you reply.');
    scene.text('"Good, you will let me use your body anytime, anywhere, anyhow I want, wont you my dear?" he says pulling out of you slowly.');
    scene.text('"Yes, sir, my body is yours." you say.');
    scene.text('"Good, now stay there for a bit and let my cum find your eggs" he says and gets off the bed');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/therapist/naked1.jpg');
    scene.text('You lay there naked on the bed as he goes to get cleaned up. You lay there for a bit and when he exits the shower, you get up and go take one yourself. You wash up and return to him. "Now to make sure no one sees anything wrong with our pairing, you are free to leave and do whatever you want. But you will return here every night.');
    scene.text('This is your home now. You will have all the same freedoms you did in any place you lived before, only the difference is that you will be naked at all times while in this room. At night, we will have sex and you will allow it, even if you are not in the mood, isn\'t that right my dear?" he says.');
    scene.text('"Yes, Sir, thank you" you reply.');
    scene.text('He gives you a kiss. "Now go, do whatever it is you like to do" he says and you get dressed and head to the lobby.');
    scene.actions([
      { label: 'Continue', goto: ['therapist_hotel', 'event6_submit4'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterEvent6Submit4(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'underwear', 'wear');
  qspCall(s, 'outfit', 'wear_last_worn');
  qspCall(s, 'stat', '');
  ((s as any).HotelRoom ?? {})['pav'] = 0;
  ((s as any).hotelRoomDays ?? {})['pav'] = 0;
  ((s as any).therapistQW ?? {})['hotel_key'] = 3;
  qspCall(s, 'calendar', 'remove', 'therapist_hotel_visit');
  qspCall(s, 'homes_properties', 'set_home', 'hotel_therapist');
  qspCall(s, 'therapist_hotel', 'leave', 'pav_hotel');
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'leave':
      enterLeave(s, scene);
      break;
    case 'start':
      enterStart(s, scene);
      break;
    case 'event_switch':
      enterEventSwitch(s, scene);
      break;
    case 'event1':
      enterEvent1(s, scene);
      break;
    case 'event1_post_shower':
      enterEvent1PostShower(s, scene);
      break;
    case 'event1_morning':
      enterEvent1Morning(s, scene);
      break;
    case 'event2':
      enterEvent2(s, scene);
      break;
    case 'event2_shower':
      enterEvent2Shower(s, scene);
      break;
    case 'event3':
      enterEvent3(s, scene);
      break;
    case 'event4':
      enterEvent4(s, scene);
      break;
    case 'event4_post_wait':
      enterEvent4PostWait(s, scene);
      break;
    case 'event5_submit':
      enterEvent5Submit(s, scene);
      break;
    case 'event6_submit':
      enterEvent6Submit(s, scene);
      break;
    case 'event6_submit2':
      enterEvent6Submit2(s, scene);
      break;
    case 'event6_submit3':
      enterEvent6Submit3(s, scene);
      break;
    case 'event6_submit4':
      enterEvent6Submit4(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const therapist_hotel: LocationDef = {
  name: 'therapist_hotel',
  title: '"Every Saturday, you will show up here and we will do some more training. You can still meet me at the clinic but here?"',
  region: 'other',
  locationType: 'private',
  enter: enter,
};
