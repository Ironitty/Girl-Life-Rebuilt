import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) * 60 + ((s as any).minut ?? 0) < 1080) {
    (s as any).minut = ((s as any).minut ?? 0) + (1080 - (((s as any).hour ?? 0) * 60 + ((s as any).minut ?? 0)));
  }
  qspCall(s, 'jobs', 'clock', 'city_strip_bargirl');
  if (((s as any).strip_club ?? 0)?.['first_bar_shift'] === 0) {
    if (!(s as any).strip_club) (s as any).strip_club = {}; (s as any).strip_club['first_bar_shift'] = 1;
    scene.actions([{ label: 'Continue', goto: ['stwork3', 'first_shift'] }]);
  } else {
    scene.text('Arriving at your locker, you change into your uniform before heading out to the bar.');
    if (!(s as any).strip_club) (s as any).strip_club = {}; (s as any).strip_club['rand'] = Math.floor(Math.random() * 6) + 0;
    if (((s as any).strip_club ?? 0)?.['rand'] === 0) {
      scene.actions([{ label: 'Continue', goto: ['stwork3', '1'] }]);
    } else {
      if (((s as any).strip_club ?? 0)?.['rand'] === 1) {
        scene.actions([{ label: 'Continue', goto: ['stwork3', '2'] }]);
      } else {
        if (((s as any).strip_club ?? 0)?.['rand'] === 2) {
          scene.actions([{ label: 'Continue', goto: ['stwork3', '3'] }]);
        } else {
          if (((s as any).strip_club ?? 0)?.['rand'] === 3) {
            scene.actions([{ label: 'Continue', goto: ['stwork3', '4'] }]);
          } else {
            if (((s as any).strip_club ?? 0)?.['rand'] === 4) {
              scene.actions([{ label: 'Continue', goto: ['stwork3', '5'] }]);
            } else {
              scene.actions([{ label: 'Continue', goto: ['stwork3', '6'] }]);
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterFirstShift(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/redlight/stripclub/ivanna.jpg');
  // TODO-QSP: dynamic text: You arrive in the employee area, where you're greeted by a tall, dark haired wom...
  scene.text(`You arrive in the employee area, where you're greeted by a tall, dark haired woman. "You must be ${((s as any).pcs_nickname || '')}. I'm Ivanna, the club's bar manager. If you'll follow me."`);
  if (((s as any).pcs_magik ?? 0) > 0) {
    scene.text('There\'s something strange, almost… <i>familiar</i> about her, but you can\'t quite put your finger on it as you follow her out into the main area of the club.');
  } else {
    scene.text('Her eyes pierce your gaze and you swear you can somehow <i>feel</i> her in your head before she turns and beckons for you to follow her out into the main area of the club.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Follow her', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/redlight/stripclub/stripclub_interior.jpg');
    scene.text('You walk out into the club and are greeted by loud music, bright lights and scenes of rowdy men and half naked girls. You follow Ivanna to the bar, where she introduces you to the other staff.');
    if (((s as any).week ?? 0) < 5) {
      scene.text('"This is Lev, our weekday bartender," she says and the man behind the bar waves at you.');
      scene.text('"What\'s up?" he asks and gives you a flirty smile.');
    } else {
      scene.text('"This is Nadia, our weekend bartender," she says and the girl behind the bar gives you a smile.');
      scene.text('"Hi! I look forward to working with you!"');
      scene.text('You notice that she\'s wearing a rather revealing outfit that you\'d expect to find on a stripper instead of a bartender.');
    }
    scene.text('"And this is Olga, one of the waitresses you\'ll be working alongside."');
    scene.text('"Hey there," the girl says with a smile.');
    scene.text('Ivanna then explains the job to you, stating that most customers will come to the bar for drinks, but some, especially VIPs, will request personal service.');
    scene.text('"If you have any problems or questions, then just ask one of us. I\'ll leave you to it and we\'ll see how you get on, yeah?"');
    scene.text('You nod and Ivanna gives you a smile before disappearing into a back office.');
    scene.actions([
      { label: 'Get to work', handler: (st: GameState) => {
    (s as any).temp_time_change = (3 - ((s as any).hour ?? 0)) * 60 - ((s as any).minut ?? 0);
    if (((s as any).temp_time_change ?? 0) < 0) {
      (s as any).temp_time_change = ((s as any).temp_time_change ?? 0) + (1440);
    }
    (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_time_change ?? 0));
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/redlight/stripclub/serve.jpg');
    scene.text('The patrons are all in good moods and being busy like this makes time go by rather quickly. If every night were like this, then you\'d have no complaints.');
    scene.text('You take the time to chat to your colleagues and customers while taking in the sights and sounds of the club. Before you know it, the night has given way to the early hours of the morning and the patrons all file out as the bar staff clear down.');
    scene.actions([
      { label: 'Speak with Ivanna', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/redlight/stripclub/ivanna.jpg');
    scene.text('Ivanna beckons you over. "So how was your night?"');
    scene.text('"It was great. The customers were so friendly," you reply.');
    scene.text('She smirks. "They won\'t always be like that, but it\'s good to see that you enjoyed yourself."');
    scene.text('After having you sign some paperwork and getting you a uniform, Ivanna cheerfully sends you on your way, eager to see you when your next shift starts.');
    scene.actions([
      { label: 'Leave', goto: ['city_redlight', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter1(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).strip_club) (s as any).strip_club = {}; (s as any).strip_club['tips_roll'] = ((s as any).strip_club['tips_roll'] ?? 0) + (30);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/redlight/stripclub/serve.jpg');
  scene.text('The patrons are all in good moods and being busy like this makes time go by rather quickly. If every night were like this, then you\'d have no complaints.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue working', goto: ['stwork3', 'events'] },
  ]);
  scene.build();
}

function enter2(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).strip_club) (s as any).strip_club = {}; (s as any).strip_club['tips_roll'] = ((s as any).strip_club['tips_roll'] ?? 0) - (30);
  scene.img('images/locations/city/redlight/stripclub/serve.jpg');
  scene.text('Your shift isn\'t bad at first, but a group of loud mouthed executive types have hired a private room with multiple strippers and place very particular orders, each changing their minds several times as they tell you what they want.');
  scene.text('You double-check the orders before you leave the room and you\'re sure you have it right, but when you bring them their drinks, each of them complains that something is wrong. It\'s clear they\'re just doing it to mess with you.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue working', goto: ['stwork3', 'events'] },
  ]);
  scene.build();
}

function enter3(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).strip_club) (s as any).strip_club = {}; (s as any).strip_club['tips_roll'] = ((s as any).strip_club['tips_roll'] ?? 0) + (30);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/redlight/stripclub/serve.jpg');
  scene.text('Some nights are just fun, and tonight is one of them. There are a large number of regular patrons who are happy to see you and engage you in good-natured banter and teasing.');
  scene.text('Aside from the normal issues that arise, the evening flows smoothly and you make some decent tips.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue working', goto: ['stwork3', 'events'] },
  ]);
  scene.build();
}

function enter4(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).strip_club) (s as any).strip_club = {}; (s as any).strip_club['tips_roll'] = ((s as any).strip_club['tips_roll'] ?? 0) - (30);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/redlight/stripclub/serve.jpg');
  scene.text('A group of tourists from another part of Russia arrive, and they\'re fascinated by the sights of the club. They have to be told multiple times not to take pictures, but they nonetheless vow to tell everyone back home to visit the club whenever they visit the city.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue working', goto: ['stwork3', 'events'] },
  ]);
  scene.build();
}

function enter5(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).strip_club) (s as any).strip_club = {}; (s as any).strip_club['tips_roll'] = ((s as any).strip_club['tips_roll'] ?? 0) + (40);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/redlight/stripclub/serve.jpg');
  scene.text('You\'re rushed off your feet running from table to table taking orders and delivering drinks. It\'s stressful and challenging, not least because of the drunken groping you have to deal with all night.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue working', goto: ['stwork3', 'events'] },
  ]);
  scene.build();
}

function enter6(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).strip_club) (s as any).strip_club = {}; (s as any).strip_club['tips_roll'] = ((s as any).strip_club['tips_roll'] ?? 0) - (40);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/redlight/stripclub/serve.jpg');
  scene.text('Tonight is one of those nights where you wish you\'d just called in sick. The patrons are inexplicably grumpy tonight, but it gets worse when two groups of young men, all of them very drunk, get into a shouting match that rapidly escalates.');
  scene.text('Security escorts them outside where they continue to argue and shout at each other for some time. This puts the patrons in an even fouler mood and you receive less tips than normal.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue working', goto: ['stwork3', 'events'] },
  ]);
  scene.build();
}

function enterEvents(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_time_change = (22 - ((s as any).hour ?? 0)) * 60 - ((s as any).minut ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_time_change ?? 0));
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/redlight/stripclub/stripclub_interior.jpg');
  scene.text('It\'s eventually time for you to take your break.');
  if (((s as any).drugVars ?? 0)?.['cigarettes_used'] > 0  &&  ((s as any).mc_inventory ?? 0)?.['cigarettes'] > 0) {
    scene.actions([
      { label: 'Take a smoke break', goto: ['stwork3', 'smoke_break'] },
    ]);
  }
  if (((s as any).week ?? 0) === 3  ||  ((s as any).week ?? 0) === 4) {
    scene.actions([
      { label: 'Chat with Lev', goto: ['stwork3', 'bartender_chat'] },
    ]);
  } else {
    scene.actions([
      { label: 'Chat with Nadia', goto: ['stwork3', 'bartender_chat1'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Have a snack', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 100) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 100);
      qspCall(s, 'food', 'snack');
    }
  } },
    { label: 'Drink some water', handler: (st: GameState) => {
    // TODO-QSP: $loc = 'stwork3'
    // TODO-QSP: $loc_arg = 'events1'
    qspCall(st, 'beverage', 'water');
  } },
    { label: 'Chat with Ivanna', goto: ['stwork3', 'manager_chat'] },
    { label: 'Chat with Olga', goto: ['stwork3', 'waitress_chat'] },
  ]);
  scene.build();
}

function enterManagerChat(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/redlight/stripclub/ivanna.jpg');
  scene.text('You wander over to the end of the bar where Ivanna is counting stock. She greets you with a smile and asks how your night is going.');
  scene.text('"Not bad," you reply. "Everyone is nice and the customers seem to be enjoying themselves."');
  scene.text('"Of course they\'re enjoying themselves!" she laughs. "Why wouldn\'t they be? They\'ve got drinks and a bunch of pretty girls shaking their asses in their face."');
  scene.text('You see her biting her lip as she looks out at the girl currently stripping on stage as a crowd of rowdy men throw fistfuls of money around.');
  if (((s as any).pcs_magik ?? 0) > 0) {
    if (((s as any).strip_club ?? 0)?.['manager_speak'] === 0) {
      if (!(s as any).strip_club) (s as any).strip_club = {}; (s as any).strip_club['manager_speak'] = 1;
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (20);
      qspCall(s, 'stat', '');
      scene.text('Ivanna is an extremely attractive woman and you can sense… something. An energy radiating from her. An energy similar to your own, but far, <i>far</i> more powerful… You can feel your arousal rapidly increasing…');
      scene.text('She seems to sense your aura as well and gives you a knowing smile. "We need to talk after shift, but you should get back to work now."');
      scene.text('You just nod at her, but sense her gaze on the back of your head as you walk away.');
      scene.actions([
        { label: 'Return to work', goto: ['stwork3', 'events1'] },
      ]);
    } else {
      if ((Math.floor(Math.random() * 2) + 0) === 0  &&  ((s as any).strip_club ?? 0)?.['ivanna_sex'] === 1) {
        // TODO-QSP: dynamic text: "I feel like having a little fun with you again later, slave..." she whispers. "...
        scene.text(`"I feel like having a little fun with you again later, slave..." she whispers. "Give in to the desire, ${((s as any).pcs_nickname || '')}..."`);
        qspCall(s, 'willpower', 'sex', 'resist', 'hard');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Resist her charm', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Resist her charm', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'force');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    qspCall(s, 'stat', '');
    scene.text('You feel yourself getting a little wet at the mental images, but manage to resist her attempt at bringing you under her spell and back away.');
    scene.text('"Hhhmmph!" she scowls. "You\'re no fun. Maybe another night then, slave. Get back to work."');
    scene.actions([
      { label: 'Return to work', goto: ['stwork3', 'events1'] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Give in', handler: (st: GameState) => {
    if (!(s as any).strip_club) (s as any).strip_club = {}; (s as any).strip_club['ivanna_slave'] = 1;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (20);
    qspCall(s, 'stat', '');
    scene.text('Ivanna overwhelms your mind with thoughts and sensations of what she\'s seemingly planning on doing to you and you feel yourself becoming extremely aroused.');
    scene.text('"I\'ll see you later tonight, slave. Now get back to work," she smiles.');
    scene.actions([
      { label: 'Return to work', goto: ['stwork3', 'events1'] },
    ]);
  } },
        ]);
      } else {
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (20);
        qspCall(s, 'stat', '');
        scene.text('You feel your arousal rapidly increasing, no doubt Ivanna \'playing\' with you. She just winks at you before returning her attention to what she was doing as you return to work.');
        scene.actions([
          { label: 'Return to work', goto: ['stwork3', 'events1'] },
        ]);
      }
    }
  } else {
    if (((s as any).strip_club ?? 0)?.['ivanna_dream'] === 0) {
      if (!(s as any).strip_club) (s as any).strip_club = {}; (s as any).strip_club['ivanna_dream'] = 1;
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
      qspCall(s, 'stat', '');
      scene.text('For some inexplicable reason, you suddenly feel yourself becoming horny, thoughts of nothing but lustful, passionate sex filling your head as you try talking to Ivanna.');
      // TODO-QSP: dynamic text: Feeling your pussy getting wet, you quickly scurry away as Ivanna returns her at...
      scene.text(`Feeling your pussy getting wet, you quickly scurry away as Ivanna returns her attention to what she was doing. As you walk away, you swear you hear a female like voice whispering in your ear. "Sweet dreams, ${((s as any).pcs_nickname || '')}…"`);
      scene.text('Startled, you frantically look around, but see nothing. Must have been your imagination…');
    } else {
      if (((s as any).strip_club ?? 0)?.['ivanna_dream'] === 2) {
        if (!(s as any).strip_club) (s as any).strip_club = {}; (s as any).strip_club['ivanna_dream'] = 3;
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (25);
        qspCall(s, 'stat', '');
        scene.text('Ivanna smiles awkwardly at you. "I had the strangest dream about you the other night, but I\'m too embarrassed to say what it was about!"');
        scene.text('You suddenly feel yourself becoming extremely horny as the dream you had of Ivanna fucking you with her huge cock inexplicably starts playing almost vividly in your mind.');
        scene.text('You struggle to speak with Ivanna and instinctively clench your legs together when you suddenly feel the sensation of a thick, warm cock stretching and filling your pussy.');
        scene.text('Letting out a quiet squeak of pleasure, you quickly scurry away as Ivanna returns her attention to what she was doing. As you walk away, you hear the same female like voice giggle in your ear, but see nothing when you look around. Strange…');
      } else {
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
        qspCall(s, 'stat', '');
        scene.text('You feel a tingle of arousal pulse through you as you speak with Ivanna, who cocks her head and smiles at you.');
        // TODO-QSP: dynamic text: "You feeling okay, <<$pcs_nickname>>?" she asks. "You're looking a little fluste...
        scene.text(`"You feeling okay, ${((s as any).pcs_nickname || '')}?" she asks. "You're looking a little flustered there."`);
        scene.text('Feeling your pussy getting a little wet, you just nod before quickly scurrying away as Ivanna returns her attention to what she was doing. As you walk away, you look back at Ivanna, who just smiles and waves at you as you bite your lip to stop yourself from moaning out loud.');
        scene.text('You\'re not sure what just happened, but you\'re too horny to think about it.');
      }
    }
    scene.actions([
      { label: 'Return to work', goto: ['stwork3', 'events1'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBartenderChat(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/redlight/stripclub/lev.jpg');
  // TODO-QSP: dynamic text: You decide to spend some time chatting with Lev, one of the bartenders. He's a y...
  scene.text(`You decide to spend some time chatting with Lev, one of the bartenders. He's a young, somewhat attractive man who greets you with a smile. "What's up, ${((s as any).pcs_nickname || '')}?"`);
  scene.text('"Nothing much, just thought I\'d have a quick chat," you reply.');
  scene.text('He nods and the two of you engage in a lively conversation. "I\'m telling you, if I didn\'t have a girlfriend waiting for me back home, then I\'d be <i>drowning</i> in pussy right now," he laughs.');
  scene.text('You giggle. "You must love your job then?"');
  scene.text('He smiles. "What\'s not to love? I get good banter from the regulars <i>and</i> I get to watch hot chicks strutting around in tiny thongs. Hot chicks whose constant advances I\'m forced to turn down," he jokingly pouts.');
  scene.text('You just smile at him and engage in idle chatter until it\'s time for you to get back to work.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to work', goto: ['stwork3', 'events1'] },
  ]);
  scene.build();
}

function enterBartenderChat1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/redlight/stripclub/nadia.jpg');
  // TODO-QSP: dynamic text: You decide to spend some time chatting with Nadia, one of the bartenders. A youn...
  scene.text(`You decide to spend some time chatting with Nadia, one of the bartenders. A young and very attractive girl, she chooses to wear a skimpy bunny outfit that shows off her large breasts, leaving you wondering why she's behind the bar and not on the pole. "What's up, ${((s as any).pcs_nickname || '')}?" she asks with a cute smile.`);
  scene.text('"Nothing much, just thought I\'d have a quick chat," you reply.');
  scene.text('She nods and the two of you engage in a lively conversation. "You\'re rocking that cute little bunny outfit! You sure you don\'t want to get up on that stage?" you laugh.');
  scene.text('She giggles. "I thought about it, but I\'m too clumsy to swing around the pole. Those girls make it look so easy."');
  scene.text('You just smile at her and engage in idle chatter until it\'s time for you to get back to work.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to work', goto: ['stwork3', 'events1'] },
  ]);
  scene.build();
}

function enterWaitressChat(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/redlight/stripclub/olga.jpg');
  scene.text('You decide to spend some time chatting with Olga. She\'s an attractive, large breasted girl who always seems to be smiling and you get to talking about the job, where the subject of tips comes up. "You definitely want to do everything you can to maximize how much you earn."');
  scene.text('"How do I do that?" you ask.');
  scene.text('"Well, guys are here to give money to pretty girls showing them some skin, if you get my meaning…" she grins.');
  scene.text('You frown. "I dunno… Isn\'t that kind of tacky?"');
  scene.text('"Think about it," she replies. "If you can take home more at the end of the night by showing off a little, then why not? My cleavage is always on show in this dress anyway, so I might as well take advantage."');
  scene.text('"I guess that doesn\'t sound too bad..." you admit and continue to engage in idle chatter until it\'s time for you to get back to work.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to work', goto: ['stwork3', 'events1'] },
  ]);
  scene.build();
}

function enterSmokeBreak(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_mood = ((s as any).pcs_mood ?? 0) + (5);
  qspCall(s, 'drugs', 'smoke');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/stairs/smoke5.jpg');
  scene.text('You head out the back to smoke a cigarette, feeling yourself relax a little as the smoke fills your lungs.');
  scene.text('Once you\'re done, you flick the remains of the cigarette away and head back inside to continue your shift.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to work', goto: ['stwork3', 'events1'] },
  ]);
  scene.build();
}

function enterEvents1(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).strip_club) (s as any).strip_club = {}; (s as any).strip_club['rand'] = Math.floor(Math.random() * 12) + 0;
  qspCall(s, 'schedule', 'A23');
  qspCall(s, 'stat', '');
  if (((s as any).strip_club ?? 0)?.['rand'] === 0) {
    scene.img('images/locations/city/redlight/stripclub/serve.jpg');
    scene.text('Serving a table at one of the private booths, you see two intimidating men sitting with a girl who looks like she\'s high on something, and probably a little drunk as well. She crawls under the table as one of the men glares at you.');
    scene.text('"Just put the drinks down and leave. You didn\'t see anything."');
    scene.text('You quickly do as you\'re told and hurry away.');
    scene.actions([
      { label: 'Leave', goto: ['stwork3', 'shift_end'] },
    ]);
  } else {
    if (((s as any).strip_club ?? 0)?.['rand'] === 1) {
      scene.img('images/locations/city/redlight/stripclub/serve.jpg');
      scene.text('You serve a table with two men watching the show on stage. They both drunkenly slap and grope your ass as you serve them their drinks.');
      qspCall(s, 'willpower', 'exhib', 'self', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Tease them', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Tease them', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'money', 'earn', 500);
    qspCall(s, 'arousal', 'foreplay', 2);
    qspCall(s, 'stat', '');
    scene.text('You seductively wiggle your ass at them. "I hope you\'ll tip for a job well done..."');
    // TODO-QSP: dynamic text: They both grin widely. "Not the tip I want to give that ass but sure, you've ear...
    scene.text(`They both grin widely. "Not the tip I want to give that ass but sure, you've earned it," one of them says and hands you ${qspFunc(s, 'money', 'string_profit', 500)}.`);
    scene.text('You stuff it away and smile sweetly at the men, putting some sway in your hips as you walk away.');
    scene.actions([
      { label: 'Leave', goto: ['stwork3', 'shift_end'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Ignore it and leave', handler: (st: GameState) => {
    scene.text('You place their drinks on the table and quickly hurry away as the two men laugh.');
    scene.actions([
      { label: 'Leave', goto: ['stwork3', 'shift_end'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).strip_club ?? 0)?.['rand'] === 2) {
        scene.img('images/locations/city/redlight/stripclub/serve.jpg');
        if (((s as any).pcs_hotcat ?? 0) >= 6) {
          scene.text('You serve a man sitting at a table in a private booth. He grins at you as you notice the bulge in his pants.');
          scene.text('"Hey hot stuff, want to keep me company?"');
          scene.actions([
            { label: 'Leave', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('You quickly serve the man his drink and leave the booth as quickly as you can.');
    scene.actions([
      { label: 'Leave', goto: ['stwork3', 'shift_end'] },
    ]);
  } },
            { label: 'Sit next to him', handler: (st: GameState) => {
    scene.text('You sit next to the man and look at him, waiting to see what he\'ll do when he suddenly grabs your hand and places it on his crotch.');
    qspCall(s, 'willpower', 'hj', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'hj', 'resist', 'hard');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('You quickly pull your hand away from him and hurry away, leaving the man in the booth.');
    scene.actions([
      { label: 'Get back to work', goto: ['stwork3', 'shift_end'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Unbutton his pants', handler: (st: GameState) => {
    qspCall(s, 'npcgeneratec', '', 0, 'a customer at Golden Girls', Math.floor(Math.random() * 48) + 18);
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/cafe/sex/waitress_work_2.jpg');
    scene.text('You take a quick look around, but the club is too noisy and dark for anyone to take notice. The man smiles as you undo his pants and grasp his rock hard cock in your hand. It twitches in anticipation.');
    scene.actions([
      { label: 'Jerk him off', handler: (st: GameState) => {
    (s as any).guy = ((s as any).guy ?? 0) + (1);
    qspCall(s, 'money', 'earn', 500);
    qspCall(s, 'arousal', 'hj', 2, ((s as any).npcID ?? 0), 'sub', 'prostitution');
    qspCall(s, 'cum_call', 'hands', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'arousal', 'end');
    (s as any).cumspclnt = 9;
    qspCall(s, 'cum_cleanup', '');
    scene.img('images/locations/city/residential/cafe/sex/waitress_work_hj.jpg');
    scene.text('Clasping your fingers around his shaft, you start discreetly jerking him off as he watches the girl stripping and dancing on stage. A few minutes later, he groans as he blows his load, covering your hand in his cum.');
    // TODO-QSP: dynamic text: Once he's finished, you grab a napkin off the table and use it to clean your han...
    scene.text(`Once he's finished, you grab a napkin off the table and use it to clean your hand. The man just grins at you and gives you ${qspFunc(s, 'money', 'string_profit', 500)}.`);
    scene.text('You smile at him before leaving the booth.');
    scene.actions([
      { label: 'Leave', goto: ['stwork3', 'shift_end'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
          ]);
        } else {
          scene.text('You serve a man sitting at a table in a private booth, who motions for you to move aside.');
          scene.text('"Just put that down and leave! You\'re blocking my view of the hot chick on stage!"');
          scene.text('Feeling a little insulted, you quickly serve the man his drink and leave the booth as quickly as you can.');
          scene.actions([
            { label: 'Leave', goto: ['stwork3', 'shift_end'] },
          ]);
        }
      } else {
        if (((s as any).strip_club ?? 0)?.['rand'] === 3) {
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
          qspCall(s, 'stat', '');
          scene.img('images/locations/city/redlight/stripclub/pole_topless.jpg');
          scene.text('Heading back to the bar, you catch a glimpse of one of the strippers dancing half naked on the pole as she performs on the stage. Her appearance leaves little to the imagination.');
          scene.actions([
            { label: 'Continue', goto: ['stwork3', 'shift_end'] },
          ]);
        } else {
          if (((s as any).strip_club ?? 0)?.['rand'] === 4) {
            (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
            qspCall(s, 'stat', '');
            scene.img('images/shared/sex/public/ivrand.jpg');
            scene.text('Heading into one of the booths, you see a girl leaning over sucking a guy\'s dick.');
            scene.actions([
              { label: 'Serve their drinks and leave', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('You ignore them and place their drinks on the table before quickly leaving them in peace.');
    scene.actions([
      { label: 'Leave', goto: ['stwork3', 'shift_end'] },
    ]);
  } },
              { label: 'Get their attention', handler: (st: GameState) => {
    qspCall(s, 'money', 'earn', 300);
    qspCall(s, 'stat', '');
    scene.text('You clear your throat and the girl looks up at you in bewilderment.');
    scene.text('"Put those down and leave. We have business to finish here," the man says as he forces the girl\'s head back down on his cock, almost choking her as she loudly gags.');
    // TODO-QSP: dynamic text: You place the drinks on the table and the man gives you <<$func('money', 'string...
    scene.text(`You place the drinks on the table and the man gives you ${qspFunc(s, 'money', 'string_profit', 300)}. "You didn't see this. Got it?"`);
    scene.text('You take the money and nod before quickly leaving them to it.');
    scene.actions([
      { label: 'Leave', goto: ['stwork3', 'shift_end'] },
    ]);
  } },
            ]);
          } else {
            if (((s as any).strip_club ?? 0)?.['rand'] === 5) {
              if ((((s as any).start_type ?? 0)?.['magic'] === 'tg'  &&  ((s as any).start_type ?? 0)?.['loc'] !== 'sg')  &&  ((s as any).AlbinaQW ?? 0)?.['know_albina_uni'] === 0) {
                qspCall(s, 'stat', '');
                scene.img('images/locations/city/redlight/stripclub/stripper_bar.jpg');
                scene.text('You see one of the strippers sitting half naked on the bar, teasing a man by groping her breasts. She is a very attractive looking brunette, even under the heavy layer of makeup she\'s wearing.');
                scene.text('She smiles as the middle aged man she\'s teasing asks her for a dance. Climbing off the bar, she seductively leads him to one of the private rooms.');
                scene.actions([
                  { label: 'Get back to work', goto: ['stwork3', 'shift_end'] },
                ]);
              } else {
                if (((s as any).AlbinaQW ?? 0)?.['seen_strip'] === 0  &&  ((s as any).locat ?? 0)?.['A23'] === 22) {
                  if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['seen_strip'] = 1;
                  qspCall(s, 'stat', '');
                  scene.img('images/locations/city/redlight/stripclub/stripper_bar.jpg');
                  scene.text('You see one of the strippers sitting half naked on the bar, teasing a man by groping her breasts. As you get closer, you\'re stunned to see that it\'s Albina!');
                  if (((s as any).npc_rel ?? 0)?.['A23'] >= 60  ||  ((s as any).AlbinaQW ?? 0)?.['Friends'] === 2) {
                    // TODO-QSP: dynamic text: She looks equally surprised to see you. "<<$pcs_nickname>>?! You didn't tell me ...
                    scene.text(`She looks equally surprised to see you. "${((s as any).pcs_nickname || '')}?! You didn't tell me you worked here!"`);
                    scene.text('"I could say the same about you!" you chuckle and she smiles as the middle aged man she was teasing asks her for a dance.');
                    scene.text('"We\'ll talk about this some other time, yeah?" she winks at you before seductively leading the man to one of the private rooms with a lot of sway in her hips.');
                    scene.actions([
                      { label: 'Get back to work', goto: ['stwork3', 'shift_end'] },
                    ]);
                  } else {
                    scene.text('She looks surprised, yet annoyed to see you. "Ugh, you\'re working here as well?" she moans. "At least you\'re not a stripper and can stay out of my way."');
                    scene.text('The middle aged man she\'s teasing then asks her for a dance and she uses the opportunity to avoid you, quickly leading the man to one of the private rooms.');
                    scene.actions([
                      { label: 'Get back to work', goto: ['stwork3', 'shift_end'] },
                    ]);
                  }
                } else {
                  if (((s as any).AlbinaQW ?? 0)?.['seen_strip'] === 1  &&  ((s as any).locat ?? 0)?.['A23'] === 22) {
                    qspCall(s, 'stat', '');
                    scene.img('images/locations/city/redlight/stripclub/stripper_bar.jpg');
                    scene.text('Your break over, you get back to work serving the crowd of thirsty patrons.');
                    if (((s as any).npc_rel ?? 0)?.['A23'] >= 60  ||  ((s as any).AlbinaQW ?? 0)?.['Friends'] === 2) {
                      scene.text('You see Albina sitting on the bar teasing potential clients. She flashes you a smile and jiggles her breasts in your direction, which gets the attention of a man who asks for a dance.');
                      scene.text('She winks at you before seductively leading him to one of the private rooms with a lot of sway in her hips.');
                      scene.actions([
                        { label: 'Get back to work', goto: ['stwork3', 'shift_end'] },
                      ]);
                    } else {
                      scene.text('You see Albina sitting on the bar teasing potential clients. She frowns when she sees you before a man approaches her and asks for a dance. She quickly leads him to one of the private rooms to avoid you.');
                      scene.actions([
                        { label: 'Get back to work', goto: ['stwork3', 'shift_end'] },
                      ]);
                    }
                  } else {
                    qspCall(s, 'stat', '');
                    scene.img('images/locations/city/redlight/stripclub/stripper_bar.jpg');
                    scene.text('Your break over, you get back to work serving the crowd of thirsty patrons.');
                    scene.text('You see a stripper sitting on the bar teasing potential clients. She quickly sets her sights on a man in the queue at the bar and starts flirting with him.');
                    scene.actions([
                      { label: 'Get back to work', goto: ['stwork3', 'shift_end'] },
                    ]);
                  }
                }
              }
            } else {
              if (((s as any).strip_club ?? 0)?.['rand'] === 6  &&  ((s as any).locat ?? 0)?.['A23'] === 22) {
                (s as any).minut = ((s as any).minut ?? 0) + 2;
                qspCall(s, 'stat', '');
                scene.img('images/characters/shared/headshots_main/big23.jpg');
                if ((((s as any).start_type ?? 0)?.['magic'] === 'tg'  &&  ((s as any).start_type ?? 0)?.['loc'] !== 'sg')  &&  ((s as any).AlbinaQW ?? 0)?.['know_albina_uni'] === 0) {
                  scene.text('As you\'re heading back to the bar from one of the private rooms, you\'re interrupted by the sight of one of the strippers leaving the manager\'s office as she counts some money in her hand.');
                  scene.text('She winks at you before stuffing the money in the band of her stocking and walking away.');
                  if (((s as any).strip_club ?? 0)?.['manager_bonus'] === 1) {
                    scene.text('Knowing what she was doing, you just smile as you continue on your way.');
                  } else {
                    scene.text('You wonder what she could have been doing in there as you continue on your way.');
                  }
                  scene.actions([
                    { label: 'Get back to work', goto: ['stwork3', 'shift_end'] },
                  ]);
                } else {
                  scene.text('As you\'re heading back to the bar from one of the private rooms, you\'re interrupted by the sight of Albina leaving the manager\'s office as she counts some money in her hand.');
                  if (((s as any).npc_rel ?? 0)?.['A23'] >= 60  ||  ((s as any).AlbinaQW ?? 0)?.['Friends'] === 2) {
                    scene.text('She just winks at you before stuffing the money in the band of her stocking and walking away.');
                    if (((s as any).strip_club ?? 0)?.['manager_bonus'] === 1) {
                      scene.text('Knowing what she was doing, you just smile as you continue on your way.');
                    } else {
                      scene.text('You wonder what she could have been doing in there as you continue on your way.');
                    }
                    scene.actions([
                      { label: 'Get back to work', goto: ['stwork3', 'shift_end'] },
                    ]);
                  } else {
                    scene.text('She just coldly glares at you before storming past and heading backstage.');
                    if (((s as any).strip_club ?? 0)?.['manager_bonus'] === 1) {
                      scene.text('Knowing what she was doing, you just smile as you continue on your way.');
                    } else {
                      scene.text('You wonder what she could have been doing in there as you continue on your way.');
                    }
                    scene.actions([
                      { label: 'Get back to work', goto: ['stwork3', 'shift_end'] },
                    ]);
                  }
                }
              } else {
                if (((s as any).strip_club ?? 0)?.['rand'] === 7) {
                  (s as any).minut = ((s as any).minut ?? 0) + 2;
                  qspCall(s, 'stat', '');
                  scene.img('images/locations/city/redlight/stripclub/ruby_sex.mp4');
                  if (((s as any).strip_club ?? 0)?.['seen_ruby_sex'] === 0  ||  ((s as any).strip_club ?? 0)?.['ruby_seen_drugs'] === 0) {
                    if (!(s as any).strip_club) (s as any).strip_club = {}; (s as any).strip_club['seen_ruby_sex'] = 1;
                    (s as any).minut = ((s as any).minut ?? 0) + 2;
                    qspCall(s, 'stat', '');
                    scene.text('Heading into one of the private rooms with an order, you\'re greeted by the sight of a red headed stripper having sex with the customer on the couch.');
                    scene.text('You\'ve overheard some of the customers talking about a stripper named Ruby, who apparently has a major drug addiction and lets them fuck her in exchange for drugs or money for drugs.');
                    scene.text('Tonight seems to be no different, and going by the amount of clothes she\'s still wearing, it seems they\'ve skipped the dance altogether… They\'re too busy to notice that you\'ve even entered the room.');
                    scene.actions([
                      { label: 'Serve the drink and leave', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('You\'re fairly certain this is against club rules, but you don\'t want to get involved in it, so you place the drink on the table, the two of them too busy to acknowledge you as she continues riding his dick, then quickly dash out of the room, leaving them to it.');
    scene.actions([
      { label: 'Leave', goto: ['stwork3', 'shift_end'] },
    ]);
  } },
                      { label: 'Get their attention', handler: (st: GameState) => {
    qspCall(s, 'money', 'earn', 300);
    qspCall(s, 'stat', '');
    scene.text('You clear your throat and Ruby looks up at you and scowls.');
    scene.text('"Put that down and get out! We have business to finish here," she says and points at the table.');
    // TODO-QSP: dynamic text: You place the drinks on the table and the man gives you <<$func('money', 'string...
    scene.text(`You place the drinks on the table and the man gives you ${qspFunc(s, 'money', 'string_profit', 300)}. "You didn't see this. Got it?"`);
    scene.text('You take the money and nod before quickly leaving them to it.');
    scene.actions([
      { label: 'Leave', goto: ['stwork3', 'shift_end'] },
    ]);
  } },
                    ]);
                  } else {
                    scene.text('Heading into one of the private rooms with an order, you\'re greeted by the sight of Ruby having sex with her customer. It looks like she\'s high on something.');
                    scene.actions([
                      { label: 'Serve the drink and leave', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/redlight/stripclub/ruby_bj.mp4');
    scene.text('As you place the drink on the table, you notice traces of powder. The two of them are apparently too high to have noticed you as she climbs off him and gets on her knees in front of him, sucking his dick right in front of you. You quickly dash out of the room, leaving them to it.');
    scene.actions([
      { label: 'Leave', goto: ['stwork3', 'shift_end'] },
    ]);
  } },
                      { label: 'Get their attention', handler: (st: GameState) => {
    qspCall(s, 'money', 'earn', 100);
    qspCall(s, 'stat', '');
    scene.text('You clear your throat and Ruby looks up at you.');
    scene.text('"The fuck? It\'s called \'knocking\', bitch! Get out! We\'re in the middle of something here!" she snarls.');
    scene.text('"What\'s happening, babe? Why did you stop?" you hear the man ask with a groan.');
    scene.text('"It\'s nothing, Oleg. Just sit back and enjoy it…" she says as she pulls out some money and hands it to you. "Fuck off."');
    scene.text('You place the drinks on the table and take the money before quickly leaving them to it. You haven\'t even left the room before the two of them go back to fucking like rabbits.');
    // TODO-QSP: dynamic text: Once outside the room, you count your 'tip'. You scowl when you realize that Rub...
    scene.text(`Once outside the room, you count your 'tip'. You scowl when you realize that Ruby has generously gifted you… ${qspFunc(s, 'money', 'string_profit', 100)}. Stuffing it away, you shake your head and get back to work.`);
    scene.actions([
      { label: 'Leave', goto: ['stwork3', 'shift_end'] },
    ]);
  } },
                    ]);
                  }
                } else {
                  if (((s as any).strip_club ?? 0)?.['rand'] === 8) {
                    (s as any).minut = ((s as any).minut ?? 0) + 2;
                    qspCall(s, 'stat', '');
                    scene.img('images/locations/city/redlight/stripclub/stripper_bj.mp4');
                    scene.text('Heading into one of the private rooms with an order, you\'re greeted by the sight of a girl on her knees sticking her tongue out as her customer jerks his dick and cums in her mouth.');
                    if ((Math.floor(Math.random() * 2) + 0) === 0  &&  (((s as any).AlbinaQW ?? 0)?.['know_albina_uni'] === 1  ||  ((s as any).start_type ?? 0)?.['loc'] === 'sg')  &&  ((s as any).AlbinaQW ?? 0)?.['seen_strip'] === 1  &&  ((s as any).locat ?? 0)?.['A23'] === 22) {
                      scene.text('As you get closer, you\'re surprised to find that it\'s Albina, who obediently swallows the cum in her mouth before sucking the man\'s cock clean.');
                      scene.text('"Good girl," the man says as Albina looks up at him for approval.');
                      if (((s as any).AlbinaQW ?? 0)?.['Friends'] === 2  ||  ((s as any).npc_rel ?? 0)?.['A23'] >= 60) {
                        if (((s as any).AlbinaQW ?? 0)?.['saw_club_bj'] === 0) {
                          if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['saw_club_bj'] = 1;
                        }
                        // TODO-QSP: dynamic text: She pops his cock out of her mouth and starts licking the shaft, but stops and s...
                        scene.text(`She pops his cock out of her mouth and starts licking the shaft, but stops and scrambles to her feet when she sees you. "${((s as any).pcs_nickname || '')}! I didn't hear you coming in…"`);
                        scene.text('"Friend of yours?" the man grins as he zips up his pants. "Just leave my drink on the table there."');
                        scene.text('You place the drink on the table as Albina watches, looking rather uneasy.');
                        scene.text('"Don\'t worry. Your secret\'s safe with me," you whisper in her ear. "But you have to tell me all about this next time I see you."');
                        scene.text('She just grins and nods before you leave the room.');
                        scene.actions([
                          { label: 'Leave', goto: ['stwork3', 'shift_end'] },
                        ]);
                      } else {
                        qspCall(s, 'money', 'earn', 300);
                        qspCall(s, 'stat', '');
                        scene.text('She pops his cock out of her mouth and starts licking the shaft, but stops and glares when she sees you. "Ugh, it\'s you. Can\'t you knock?"');
                        scene.text('The man grins. "Friend of yours?"');
                        scene.text('"Hardly," Albina snorts. "She was just leaving. And she didn\'t see a thing. Got it?"');
                        // TODO-QSP: dynamic text: The man motions for you to place the drink down. "Here's <<$func('money', 'strin...
                        scene.text(`The man motions for you to place the drink down. "Here's ${qspFunc(s, 'money', 'string_profit', 300)} for you to… forget all this."`);
                        scene.text('You take the money and nod before quickly leaving the room.');
                        scene.actions([
                          { label: 'Leave', goto: ['stwork3', 'shift_end'] },
                        ]);
                      }
                    } else {
                      qspCall(s, 'money', 'earn', 300);
                      qspCall(s, 'stat', '');
                      scene.text('As you get closer, the girl obediently swallows the cum in her mouth before she suddenly spots you and jumps to her feet as she wipes her mouth.');
                      scene.text('The man looks over at you as he makes the girl get back down on her knees and suck his dick clean. "Just put it down over there. There\'s something on the table for you to… forget you ever saw this."');
                      // TODO-QSP: dynamic text: Leaving the drink on the table, you grab the <<$func('money', 'string_profit', 3...
                      scene.text(`Leaving the drink on the table, you grab the ${qspFunc(s, 'money', 'string_profit', 300)} and quickly leave the room.`);
                      scene.actions([
                        { label: 'Leave', goto: ['stwork3', 'shift_end'] },
                      ]);
                    }
                  } else {
                    if (((s as any).strip_club ?? 0)?.['rand'] === 9  &&  ((s as any).hour ?? 0) === 2) {
                      scene.text('It\'s quite late now and the club is almost empty as you walk around clearing up. As you walk past Sasha\'s office, you notice the door is slightly ajar and can hear voices inside.');
                      scene.text('The security guard who normally stands guard here isn\'t here for some reason, so...');
                      qspCall(s, 'willpower', 'voyeur', 'self', 'hard');
                      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                        scene.actions([
                          { label: 'Peek inside', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                        ]);
                      } else {
                        scene.actions([
                          { label: 'Peek inside', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/redlight/stripclub/ruby_sex.mp4');
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      scene.text('You carefully peek through the gap and see Sasha sitting on the couch in the corner of the office, his pants around his ankles as a girl with her fishnet bodysuit bunched up around her ankles eagerly slams herself up and down on his fat cock.');
      if (((s as any).strip_club ?? 0)?.['seen_ruby_sex'] === 0  ||  ((s as any).strip_club ?? 0)?.['ruby_seen_drugs'] === 0) {
        if (!(s as any).strip_club) (s as any).strip_club = {}; (s as any).strip_club['seen_ruby_sex'] = 1;
        scene.text('You watch as he suddenly grabs her hips and lifts her off him before she quickly gets down on her knees and sticks her tongue out.');
        scene.text('He quickly jerks his cock before he grunts loudly and shoots his load into her mouth and across her face. When he finishes, she just up looks at him expectantly.');
        scene.text('He smiles and reaches into his jacket pocket, pulling out a baggy of white powder that he drops at his feet.');
        scene.text('You\'ve heard some of the strippers mention that one of the girls has a serious drug problem. Is her addiction so bad that she\'s banging the boss for a hit?');
      } else {
        scene.text('You immediately recognise her; it\'s Ruby, the drug addicted stripper who does more than offer lap dances to her clients.');
        scene.text('It\'s against club rules for strippers to have sex with clients, so of course she bangs the boss to keep her job!');
        scene.text('You watch as he suddenly grabs her hips and lifts her off him before she quickly gets down on her knees and sticks her tongue out.');
        scene.text('He quickly jerks his cock before he grunts loudly and shoots his load into her mouth and across her face. When he finishes, she just looks up at him expectantly.');
        scene.text('He smiles and reaches into his jacket pocket, pulling out a baggy of white powder that he drops at his feet.');
      }
      scene.text('She quickly snatches it up and rushes over to his desk, where she pours a line out and snorts it as cum drips from her face.');
      scene.text('Sasha pulls his pants back up and scoffs as she falls to the floor in a drug fueled stupor in front of him. "My dear dear Ruby... You\'re a fucking embarrassment, you know that?" he scowls as he steps over her limp body and returns to his seat at his desk.');
      scene.text('"I loathe the idea of having a dirty, drug addicted skank working in my club, but you\'re lucky since being a dirty skank is what makes you one of my most popular girls. Now get your sorry ass up and get out of my sight, you worthless fucking whore! And at least <i>try</i> and turn up for your next shift without being fucking high!"');
    } else {
      scene.text('You carefully peek through the gap and see Sasha sitting on the couch in the corner of the office, his pants around his ankles as a girl rides his fat cock, her bikini thong bottom pulled to the side as he gropes and spanks her ass with both hands.');
      if (((s as any).strip_club ?? 0)?.['amythest_intro'] === 0) {
        scene.text('Her deeply tanned skin stands out to you, as do the intricate tattoos on her hands. You\'ve heard that there is an exotic stripper working here, but that she is a bit of a mystery. It looks like she\'s bored and is just waiting for him to finish, even as she moans softly.');
      } else {
        scene.text('Her deeply tanned skin and the henna tattoos on her hands are a dead giveaway that this is Amythest. It looks like she\'s bored and is just waiting for him to finish, but you wonder what kind of relationship she has with the boss if she\'s banging him.');
      }
      scene.text('"Fuck, your Latina pussy feels good!" he grunts before he suddenly grabs her hips and holds her in place as he thrusts upwards, hammering his dick into her pussy until he grunts loudly and cums inside her.');
      scene.text('Once he\'s finished, he lifts her up and shoves her to the side before pulling his pants back up and returning to his desk, leaving her lying on the couch.');
      scene.text('"You should be a bit more grateful," he scowls. "If I hadn\'t taken a liking to you, then you would have joined the other girls you came here with and been put to work as a cheap skank in a brothel or sold off as a sex slave."');
      scene.text('She quickly scrambles off the couch and submissively crawls over to him, kneeling at his feet on all fours as his cum leaks out of her pussy. "Of course, Mr. Grinevsky! Thank you! I appreciate opportunity you give me to work nice job here instead of being slave whore! I- I hope I do good this time? I pay off a little?"');
      scene.text('He just grins. "You\'ve been a good girl and practiced your cocksucking, so I can knock a little off for that, but you\'ve still got a <i>long</i> way to go before you\'re even <i>close</i> to paying off your debt to me, though. I expect to see you back here for your next shift, else I\'ll send you back to join the others, and we wouldn\'t want that now, would we?"');
      scene.text('"No, Mr. Grinevsky!" she replies. "I come back here to pay debt when you tell me to! No need to make me slave whore!"');
      scene.text('"Good," he smiles triumphantly. "Now get your ass out of my sight!"');
    }
    scene.text('You decide not to hang around and quickly back away from the door.');
    scene.actions([
      { label: 'Leave', goto: ['stwork3', 'shift_end'] },
    ]);
  } },
                        ]);
                      }
                      scene.actions([
                        { label: 'Leave', handler: (st: GameState) => {
    scene.text('As curious as you are, you banish the thought from your head and continue on your way.');
    scene.actions([
      { label: 'Finish your shift', goto: ['stwork3', 'shift_end'] },
    ]);
  } },
                      ]);
                    } else {
                      if (((s as any).strip_club ?? 0)?.['rand'] === 10) {
                        (s as any).minut = ((s as any).minut ?? 0) + 2;
                        qspCall(s, 'stat', '');
                        scene.img('images/characters/city/nicholas/gentleclub/security.jpg');
                        if (((s as any).pcs_hotcat ?? 0) >= 6) {
                          if (((s as any).strip_club ?? 0)?.['manager_bonus'] === 0) {
                            scene.text('A security guard approaches and says Sasha wants to speak with you in his office. Now.');
                            scene.actions([
                              { label: 'Go to his office', goto: ['stwork3', 'manager_bonus'] },
                            ]);
                          } else {
                            scene.text('A security guard approaches and tells you that Sasha wants to see you in his office again.');
                            scene.text('You know what he wants, but do you want to do it?');
                            scene.actions([
                              { label: 'Go to his office', goto: ['stwork3', 'manager_bonus'] },
                              { label: 'Turn him down', goto: ['stwork3', 'shift_end'] },
                            ]);
                          }
                        } else {
                          scene.text('You see a security guard approach one of the strippers and overhear him mention a \'bonus\', which the girl accepts before heading off in the direction of Sasha\'s office.');
                          scene.actions([
                            { label: 'Get back to work', goto: ['stwork3', 'shift_end'] },
                          ]);
                        }
                      } else {
                        qspCall(s, 'stat', '');
                        scene.img('images/locations/city/redlight/stripclub/serve.jpg');
                        scene.text('Your break over, you get back to work serving the crowd of thirsty patrons.');
                        scene.actions([
                          { label: 'Leave', goto: ['stwork3', 'shift_end'] },
                        ]);
                      }
                    }
                  }
                }
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

function enterManagerBonus(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'boyStat', 'A292');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/redlight/stripclub/manager_office.jpg');
  scene.text('The security guard ushers you into Sasha\'s office before closing the door behind you. Sasha smiles at you as he sits behind his desk.');
  if (((s as any).strip_club ?? 0)?.['manager_bonus'] === 0) {
    // TODO-QSP: dynamic text: "Evening, <<$pcs_nickname>>. Having a good night? How about a little bonus to to...
    scene.text(`"Evening, ${((s as any).pcs_nickname || '')}. Having a good night? How about a little bonus to top it off?"`);
    scene.text('"What kind of bonus?" you ask while raising an eyebrow.');
    scene.text('He grins. "Here\'s the deal. Every week, I choose a girl who \'earns\' a bonus. I\'d normally pick one of the strippers, but you\'ve caught my eye."');
    scene.text('"You want me to have sex with you?!" you retort and he snorts.');
    scene.text('"No. What I\'m going to pay you to do is suck my dick. Now are you interested or am I going to have to call in one of the girls who wants that money?"');
    scene.actions([
      { label: 'Do it', handler: (st: GameState) => {
    scene.img('images/shared/sex/blowjob/bimbo.knees5.jpg');
    scene.text('"Okay, I\'ll do it. How much is this bonus?" you ask.');
    // TODO-QSP: dynamic text: "<<$func('money', 'string_profit', 1000)>>," he replies while motioning you over...
    scene.text(`"${qspFunc(s, 'money', 'string_profit', 1000)}," he replies while motioning you over to him.`);
    // TODO-QSP: dynamic text: You nod before you walk over and kneel in front of him as he unzips his pants an...
    scene.text(`You nod before you walk over and kneel in front of him as he unzips his pants and pulls his ${((s as any).dick || '')}cm ${((s as any).dick_girth || '')} cock out.`);
    scene.text('"Get to work," he orders while snapping his fingers.');
    scene.text('You obediently take his fat, veiny cock into your mouth, feeling it grow hard as you take it into your throat and work it with your tongue. "That\'s it, keep going..." he says softly.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    if (!(s as any).strip_club) (s as any).strip_club = {}; (s as any).strip_club['manager_bonus'] = 1;
    qspCall(s, 'stat', '');
    if (((s as any).tits ?? 0) >= 4) {
      scene.img('images/locations/city/redlight/studio_porn/sex/titfuck.mp4');
      scene.text('A few seconds later, he roughly pulls you off his cock and scowls down at you. "Put those nice tits to good use."');
      // TODO-QSP: dynamic text: You nod and undress your top half, exposing your <<$pc_descWordy['breast']>> to ...
      scene.text(`You nod and undress your top half, exposing your ${((s as any).pc_descWordy ?? 0)?.['breast'] ?? ''} to a grinning Sasha. You then obediently wrap your breasts around his warm, twitching cock and start titfucking him while continuing to suck on the head.`);
      scene.text('A few minutes later, he finally reaches climax and grunts loudly as cum spurts out of his dick and splatters over your breasts. You release your grip on his dick and sit back on your knees as Sasha looks down at you.');
      // TODO-QSP: dynamic text: "Good job <<$pcs_nickname>>, you more than earned this," he says as he counts ou...
      scene.text(`"Good job ${((s as any).pcs_nickname || '')}, you more than earned this," he says as he counts out a wad of cash and hands it to you. "Keep up the good work and there will be more bonuses in the future."`);
      scene.text('You just smile at him and get up to clean yourself up before taking the money. After counting it, Sasha sends you on your way with a slap on the ass. Heading out into the hallway, the security guard flashes you a knowing smile as you hurry back to work.');
      qspCall(s, 'arousal', 'bj', (-2));
      qspCall(s, 'arousal', 'titjob', (-2));
      qspCall(s, 'cum_call', 'mouth_swallow', 'A292', 0, 0, 10000, 40);
      qspCall(s, 'arousal', 'end');
      qspCall(s, 'money', 'earn', 1000);
      qspCall(s, 'stat', '');
    } else {
      scene.img('images/shared/sex/cum/mouth/cum13.jpg');
      scene.text('You spend the next few minutes sucking his dick, listening to him moan before he suddenly grabs your head and holds you down on his cock as his cum starts shooting into your mouth. You\'re forced to swallow it to stop yourself from choking as he groans loudly.');
      scene.text('When he finally finishes and releases his grip on your head, allowing you pull yourself off of his cock, you gasp for air and wipe the saliva from your mouth before looking up to see him grinning down at you as you slowly jerk his slowly softening cock in your hand.');
      // TODO-QSP: dynamic text: "Good job <<$pcs_strippername>>, you more than earned this," he says as he count...
      scene.text(`"Good job ${((s as any).pcs_strippername || '')}, you more than earned this," he says as he counts out a wad of cash and hands it to you. "Keep up the good work and there will be more bonuses in the future."`);
      scene.text('You just smile at him before getting up and taking the money. After counting it, Sasha sends you on your way with a slap on the ass. Heading out into the hallway, the security guard flashes you a knowing smile as you hurry back to work.');
      qspCall(s, 'arousal', 'bj', (-2));
      qspCall(s, 'cum_call', 'mouth_swallow', 'A292', 0, 0, 10000, 40);
      qspCall(s, 'arousal', 'end');
      qspCall(s, 'money', 'earn', 1000);
      qspCall(s, 'stat', '');
    }
    scene.actions([
      { label: 'Return to work', goto: ['stwork3', 'shift_end'] },
    ]);
  } },
    ]);
  } },
      { label: 'Refuse and leave', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('You shake your head and storm back out into the hallway without saying a word, ignoring the security guard on your way.');
    scene.actions([
      { label: 'Return to work', goto: ['stwork3', 'shift_end'] },
    ]);
  } },
    ]);
  } else {
    scene.text('"Interested in a little bonus, are we?" he asks rhetorically with a grin before snapping his fingers and pointing to his crotch.');
    // TODO-QSP: dynamic text: You obediently walk over and kneel in front of him before unzipping his pants an...
    scene.text(`You obediently walk over and kneel in front of him before unzipping his pants and taking his already rock hard ${((s as any).dick || '')}cm ${((s as any).dick_girth || '')} cock into your mouth.`);
    scene.text('"Eager today, aren\'t we?" he laughs as you start sucking.');
    if ((!(Math.floor(Math.random() * 3) + 0))) {
      scene.text('Just as you\'re getting into it, you hear a knock at the door and freeze as Sasha looks down at you. "Don\'t stop," he orders before telling the person to enter.');
      scene.text('A man walks into the room and stops in front of the desk. There\'s no hiding the fact that you\'re under here, you just hope he doesn\'t recognise you.');
      scene.text('You push the thoughts to the back of your mind and resume sucking Sasha\'s dick, trying your best to keep the noise down as the two men converse for what feels like an eternity before the other man finally leaves.');
      scene.text('The distraction gone, you\'re able to refocus your efforts, the room filled with the obscene sounds of you gagging and slurping on his cock until he suddenly grabs your head and holds you down on his cock as his cum starts shooting into your mouth. You\'re forced to swallow it to stop yourself from choking as he groans loudly.');
      qspCall(s, 'arousal', 'bj', 5);
      qspCall(s, 'cum_call', 'mouth_swallow', 'A292', 0, 0, 10000, 40);
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'money', 'earn', 1000);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/mouth/cum13.jpg');
    scene.text('He finally finishes and releases his grip on your head, allowing you pull yourself off of his cock. You gasp for air and wipe the saliva from your mouth before looking up to see him grinning down at you as he counts your money.');
    // TODO-QSP: dynamic text: "Nice work, <<$pcs_nickname>>. Good to see you aren't afraid of performing in fr...
    scene.text(`"Nice work, ${((s as any).pcs_nickname || '')}. Good to see you aren't afraid of performing in front of an audience. Maybe a career in porn is in your future?"`);
    scene.text('You just smile at him before getting up and taking the money. Heading out into the hallway, the security guard flashes you a knowing smile as you hurry back to work.');
    scene.actions([
      { label: 'Return to work', goto: ['stwork3', 'shift_end'] },
    ]);
  } },
      ]);
    } else {
      scene.text('You really get into it and passionately suck his dick, listening to him moaning softly as the obscene sounds of you gagging and slurping on his cock echo around the room.');
      scene.text('After a few minutes, he suddenly grabs your head and holds you down on his cock as his cum starts shooting into your mouth. You\'re forced to swallow it to stop yourself from choking as he groans loudly.');
      qspCall(s, 'arousal', 'bj', 5);
      qspCall(s, 'cum_call', 'mouth_swallow', 'A292', 0, 0, 10000, 40);
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'money', 'earn', 1000);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/mouth/cum13.jpg');
    scene.text('He finally finishes and releases his grip on your head, allowing you pull yourself off of his cock. You gasp for air and wipe the saliva from your mouth before looking up to see him grinning down at you as he counts your money.');
    // TODO-QSP: dynamic text: "Nice work, <<$pcs_nickname>>. It's nice to see young girls with a good work eth...
    scene.text(`"Nice work, ${((s as any).pcs_nickname || '')}. It's nice to see young girls with a good work ethic," he laughs.`);
    scene.text('You just smile at him before getting up and taking the money. Heading out into the hallway, the security guard flashes you a knowing smile as you hurry back to work.');
    scene.actions([
      { label: 'Return to work', goto: ['stwork3', 'shift_end'] },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterShiftEnd(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) < 3  ||  ((s as any).hour ?? 0) > 20) {
    (s as any).temp_time_change = (3 - ((s as any).hour ?? 0)) * 60 - ((s as any).minut ?? 0);
    if (((s as any).temp_time_change ?? 0) < 0) {
      (s as any).temp_time_change = ((s as any).temp_time_change ?? 0) + (1440);
    }
    (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_time_change ?? 0));
  }
  qspCall(s, 'stat', '');
  scene.text('As the night crawls into the early hours of the morning, the patrons slowly trickle out until the place is empty and the bar finally closes. Now is a good time to count your tips.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Count your tips', goto: ['stwork3', 'tips'] },
  ]);
  scene.build();
}

function enterTips(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).strip_club) (s as any).strip_club = {}; (s as any).strip_club['tips_total'] = ((Math.floor(Math.random() * 125) + 1) + (Math.floor(Math.random() * 125) + 1) + (Math.floor(Math.random() * 125) + 1) + (Math.floor(Math.random() * 125) + 1)) + (((s as any).strip_club ?? {})?.['tips_roll'] ?? 0) + ((s as any).pcs_apprnc ?? 0) - 100 + ((s as any).pcs_servng ?? 0);
  if (((s as any).strip_club ?? 0)?.['tips_total'] < 100) {
    if (!(s as any).strip_club) (s as any).strip_club = {}; (s as any).strip_club['tips_total'] = 110 - (Math.floor(Math.random() * 21) + 0);
  }
  if (((s as any).strip_club ?? 0)?.['tips_total'] > 500) {
    if (!(s as any).strip_club) (s as any).strip_club = {}; (s as any).strip_club['tips_total'] = 510 - (Math.floor(Math.random() * 21) + 0);
  }
  // TODO-QSP: gs 'money', 'earn', strip_club['tips_total']
  if (!(s as any).strip_club) (s as any).strip_club = {}; (s as any).strip_club['tips_roll'] = 0;
  if (((s as any).pcs_servng ?? 0) < 100) {
    qspCall(s, 'exp_gain', 'servng', 1);
  }
  if (((s as any).pcs_vital ?? 0) < 30) {
    qspCall(s, 'exp_gain', 'vital', 1);
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/redlight/stripclub/stripclub_bar.jpg');
  scene.text('With your shift finally over, you sit at the bar and count out your tips.');
  // TODO-QSP: dynamic text: You made <<$func('money', 'string_profit', strip_club['tips_total'])>> in tips t...
  scene.text(`You made ${qspFunc(s, 'money', 'string_profit', ((s as any).strip_club ?? 0)?.['tips_total'] ?? '')} in tips tonight.`);
  if ((((s as any).job_active_schedule ?? 0)?.['city_strip_bargirl'] === '0'  &&  ((s as any).week ?? 0) === 4)  ||  (((s as any).job_active_schedule ?? 0)?.['city_strip_bargirl'] === '1'  &&  ((s as any).week ?? 0) === 6)) {
    (s as any).temp_shifts_pay = qspFunc(s, 'jobs', 'paycheck', 'city_strip_bargirl');
    if (((s as any).temp_shifts_pay ?? 0) > 0) {
      // TODO-QSP: dynamic text: After counting your tips, Ivanna pays you <<$func('money', 'string_profit', temp...
      scene.text(`After counting your tips, Ivanna pays you ${qspFunc(s, 'money', 'string_profit', ((s as any).temp_shifts_pay || ''))} for the shifts you've worked this week.`);
    }
    qspCall(s, 'stat', '');
  }
  if (((s as any).strip_club ?? 0)?.['manager_speak'] === 1) {
    scene.text('Ivanna asked to speak with you before you leave.');
    scene.actions([
      { label: 'Speak with Ivanna', goto: ['stwork3', 'manager_speak'] },
    ]);
  } else {
    if (((s as any).strip_club ?? 0)?.['ivanna_slave'] === 1) {
      scene.text('Ivanna ordered you to be her slave and stay behind after work.');
      scene.actions([
        { label: 'Speak with Ivanna', goto: ['stwork3', 'ivanna_slave'] },
      ]);
    } else {
      scene.text('Ivanna switches the lights off in the bar and ushers you out with a smile so she can finish closing up.');
      scene.actions([
        { label: 'Leave', goto: ['city_redlight', 'start'] },
        { label: 'Speak with Sasha about your job', goto: ['stripclub', 'manager_job_change'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterManagerSpeak(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).strip_club) (s as any).strip_club = {}; (s as any).strip_club['manager_speak'] = 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/redlight/stripclub/ivanna1.jpg');
  // TODO-QSP: dynamic text: Ivanna poses in front of the bar. "Let's not beat around the bush as you humans ...
  scene.text(`Ivanna poses in front of the bar. "Let's not beat around the bush as you humans say. I know who you are, ${((s as any).pcs_nickname || '')}."`);
  scene.text('You give her an inquisitive stare and she chuckles.');
  if (((s as any).start_type ?? 0) === 'sg_tg'  ||  ((s as any).start_type ?? 0) === 'city_tg'  ||  ((s as any).start_type ?? 0) === 'uni_tg') {
    // TODO-QSP: dynamic text: "Or should I say <i>Mikhail</i>?" she knowingly smirks. "The foolish little boy ...
    scene.text('"Or should I say <i>Mikhail</i>?" she knowingly smirks. "The foolish little boy who absorbed a powerful source of ancient magic and is now hiding in the body of a dead girl \'+iif($start_type = \'sg_tg\', \'he got killed\', \')+\'? Reinhold speaks of you a lot, the creepy old bastard."');
  } else {
    // TODO-QSP: dynamic text: "You are <<$pcs_firstname>> <<$pcs_lastname>>, yes? The foolish little girl who ...
    scene.text(`"You are ${((s as any).pcs_firstname || '')} ${((s as any).pcs_lastname || '')}, yes? The foolish little girl who went poking around at an ancient amulet and almost died after somehow absorbing its power when she wasn't supposed to be able to do that? Reinhold speaks of you a lot, the creepy old bastard."`);
  }
  scene.text('"You- You know him?" you ask, almost panicking.');
  scene.text('She smiles. "Of course. I badly want to taste his cock, but that man is immune to <i>everything</i>, even the most powerful of my lust charms."');
  scene.text('You feel the sexual energy radiating from her as she rubs her legs together. "Mother would forbid it of course, but… Fuck, I\'m getting wet just thinking about it…"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Who are you?', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur', 2);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/redlight/stripclub/sex/ivanna1.jpg');
    scene.text('"I\'m a succubus sent here by my Mother to keep an eye on people like Reinhold and that insufferable air-headed bimbo Tatiana. She also seems to have an interest in you, though the reason is lost on me."');
    scene.text('"So are you the same as me then?" you ask.');
    scene.text('She snorts in disgust. "No, I\'m not some pretend half breed like you! <i>I</i> am a pure born daughter of Lady Lilith herself, and her power flows through me. I\'m a <i>high</i> succubus, a <i>proper</i> succubus. We\'re nothing alike."');
    scene.text('She looks you up and down with a scowl. "I don\'t know why Mother is letting an idiotic little human like you keep your powers. If it were up to me, you would be kneeling before her to be stripped of them because you haven\'t earned, nor understand them. You would then make a fine slave for my brothers and sisters."');
    scene.text('"Slave?" you ask. "A slave for what?"');
    scene.text('She hikes up her dress and you stare in bewilderment as a cock suddenly appears between her legs in place of her pussy. "A pleasure slave. Humans like you need to know your place. You\'re nothing but toys to us. Less than that, even."');
    scene.text('"How did-" you start to ask before she cuts you off.');
    scene.text('"With a spell that only high ranking succubae such as myself are allowed to use. Inferior beings like you are limited to such ridiculously childish things as \'Penis Envy,\'" she scoffs while idly jerking her cock. "<i>This</i> is a penis you can envy! Now be a good little slave and come over here!"');
    qspCall(s, 'willpower', 'sex', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Resist her charm', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Resist her charm', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    qspCall(s, 'stat', '');
    scene.text('You sense her trying to flood your mind with devious thoughts and desires you never even knew you had. Though it arouses you, you\'re able to resist and back away. She seems rather surprised at her failure.');
    scene.text('"Hhmmph. You\'re more resistant than I thought," she scowls as her cock disappears and she fixes her dress. "I was hoping your feeble human mind was still weak enough for me to have broken it and let me have some fun with you."');
    scene.text('"Break me? Fun?" you curiously ask.');
    scene.text('"Yes. I enjoy playing with girls I break. Human pussy just feels… Mmmmm, different…" she says as she rubs her legs together and you feel a slight warmth growing inside you from the energy radiating from her. "I love how tight some of you can be. Anyway, your secret is safe. <i>For now</i>. Do anything stupid, though, and the old creepy bastard will know <i>exactly</i> where to find you. Run along now."');
    scene.text('You quickly dash to the exit, leaving Ivanna at the bar chuckling at you.');
    scene.actions([
      { label: 'Leave', goto: ['city_redlight', 'start'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Fall to her spell', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (15);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/redlight/stripclub/sex/ivanna1.jpg');
    scene.text('Her magic charms suddenly pierce your mind and you\'re unable to resist as she overwhelms you with devious thoughts and desires you never knew you had. You stare at the cock hanging between her legs, feeling yourself growing wet and thinking how tasty her cum would be...');
    scene.text('"That\'s it, slave. Give in to your desires… Come. Let\'s have some fun."');
    scene.text('She grabs your hand and starts dragging you along. Fully under her spell, you offer no resistance and allow her to lead you.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/redlight/stripclub/sex/ivanna2.jpg');
    scene.text('She takes you to one of the private dance rooms, where you obediently get on your knees in front of her as she uses her magic to make her cock even bigger and thicker. You have to open your mouth as wide as you can to fit it inside.');
    scene.text('She seems content to let you do all the work and moans softly as you eagerly suck her dick, taking it as deep into your throat as you can manage.');
    scene.text('After a few minutes, she suddenly pulls you up by the hair, her cock loudly popping out of your mouth as you pant heavily. "Okay, enough of that."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/redlight/stripclub/sex/ivanna3.jpg');
    scene.text('You feel compelled to undress before she drags you over to the sofa, where she takes a seat and pulls you on top of her, the thick head of her cock teasingly pushing against your wet slit.');
    scene.text('"Ready to take me, slave?" she whispers in your ear.');
    scene.text('Before you can respond, she pushes you down onto her cock, causing you to moan as it sinks into your pussy, the thick head stretching your walls before it pushes against your cervix.');
    scene.text('She moans before she starts eagerly thrusting, the room soon filled with the sounds of your moans and flesh slapping against flesh as you ride her dick.');
    scene.text('You don\'t even know what\'s happening anymore, your mind overwhelmed with nothing but lustful pleasure as this succubus freely abuses your pussy.');
    scene.actions([
      { label: 'Cum', handler: (st: GameState) => {
    scene.text('You suddenly feel your orgasm building as you continue riding Ivanna.');
    scene.text('"That\'s it, slave! Cum for me!" you hear her say through your moans of pleasure.');
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'cum_call', '', '', 'Ivanna', 0, 1, (-1));
    qspCall(s, 'arousal', 'end');
    if (((s as any).strip_club ?? 0)?.['ivanna_sex'] === 0) {
      if (!(s as any).strip_club) (s as any).strip_club = {}; (s as any).strip_club['ivanna_sex'] = 1;
    }
    scene.text('When she finally finishes, she pulls you off of her and throws you down on the sofa, panting loudly as cum dribbles out the tip of her cock. Your stretched pussy suddenly feels very empty as a stream of thick cum oozes out of you.');
    scene.text('When you catch your breath, you get dressed as she casts the spell to remove her cock before fixing her dress.');
    scene.text('You then head back out to the bar, where Ivanna slaps you on the ass. "That was fun, slave. Mother would no doubt moan at me again for getting \'distracted by mortals\', but I\'ll be teaching you your place more often. Now get out of here."');
    scene.text('You just nod and head out as she finishes closing the bar down for the night.');
    scene.actions([
      { label: 'Leave', goto: ['city_redlight', 'start'] },
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

function enterIvannaSlave(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/redlight/stripclub/ivanna1.jpg');
  scene.text('Ivanna poses in front of the bar. "There you are. Ready to have some fun, slave?"');
  scene.text('You once again submit to her control and suddenly find yourself back in the private room, on your knees as she jerks her cock in front of you.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Pleasure her', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/redlight/stripclub/ivanna2.jpg');
    scene.text('You obediently drop to your knees and take her cock into your mouth, feeling it twitch and throb as you start sucking.');
    scene.text('She moans softly as you eagerly suck her dick, taking it as deep into your throat as you can manage.');
    scene.text('After a few minutes, she suddenly pulls you up by the hair, her cock loudly popping out of your mouth as you pant heavily. "Okay, enough of that."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/redlight/stripclub/ivanna3.jpg');
    scene.text('You feel compelled to undress before she drags you over to the sofa, where she takes a seat and pulls you on top of her, the thick head of her cock teasingly pushing against your wet slit.');
    scene.text('"Ready to take me, slave?" she whispers in your ear.');
    scene.text('Before you can respond, she pushes you down onto her cock, causing you to moan as the thick head stretches your walls and pushes against your cervix.');
    scene.text('She moans before she starts eagerly thrusting, the room soon filled with the sounds of your moans and flesh slapping against flesh as you ride her dick.');
    scene.text('You don\'t even know what\'s happening anymore, your mind overwhelmed with nothing but lustful pleasure as this succubus freely abuses your pussy.');
    scene.actions([
      { label: 'Cum', handler: (st: GameState) => {
    if (!(s as any).strip_club) (s as any).strip_club = {}; (s as any).strip_club['ivanna_slave'] = 0;
    scene.text('You suddenly feel your orgasm building as you continue riding Ivanna.');
    scene.text('"That\'s it, slave! Cum for me!" you hear her say through your moans of pleasure.');
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'cum_call', '', '', 'Ivanna', 0, 1, (-1));
    qspCall(s, 'arousal', 'end');
    scene.text('When she finally finishes, she pulls you off of her and throws you down on the sofa, panting loudly as cum dribbles out the tip of her cock. Your stretched pussy suddenly feels very empty as a stream of thick cum oozes out of you.');
    scene.text('When you catch your breath, you get dressed as she casts the spell to remove her cock before fixing her dress.');
    scene.text('You then head back out to the bar, where Ivanna slaps you on the ass. "You were as fun as always, slave. Now get out of here."');
    scene.text('You just nod and head out as she finishes closing the bar down for the night.');
    scene.actions([
      { label: 'Leave', goto: ['city_redlight', 'start'] },
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
    case 'start':
      enterStart(s, scene);
      break;
    case 'first_shift':
      enterFirstShift(s, scene);
      break;
    case '1':
      enter1(s, scene);
      break;
    case '2':
      enter2(s, scene);
      break;
    case '3':
      enter3(s, scene);
      break;
    case '4':
      enter4(s, scene);
      break;
    case '5':
      enter5(s, scene);
      break;
    case '6':
      enter6(s, scene);
      break;
    case 'events':
      enterEvents(s, scene);
      break;
    case 'manager_chat':
      enterManagerChat(s, scene);
      break;
    case 'bartender_chat':
      enterBartenderChat(s, scene);
      break;
    case 'bartender_chat1':
      enterBartenderChat1(s, scene);
      break;
    case 'waitress_chat':
      enterWaitressChat(s, scene);
      break;
    case 'smoke_break':
      enterSmokeBreak(s, scene);
      break;
    case 'events1':
      enterEvents1(s, scene);
      break;
    case 'manager_bonus':
      enterManagerBonus(s, scene);
      break;
    case 'shift_end':
      enterShiftEnd(s, scene);
      break;
    case 'tips':
      enterTips(s, scene);
      break;
    case 'manager_speak':
      enterManagerSpeak(s, scene);
      break;
    case 'ivanna_slave':
      enterIvannaSlave(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const stwork3: LocationDef = {
  name: 'stwork3',
  title: 'There\'s something strange, almost… <i>familiar</i> about her',
  region: 'other',
  enter: enter,
};
