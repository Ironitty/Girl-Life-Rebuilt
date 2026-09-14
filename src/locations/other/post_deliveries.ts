import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'jobs', 'clock', 'pav_mailgirl');
  scene.text('He guides you to the back room, where a number of small packages and letters are packed into a shoulder bag.');
  (s as any).temp_rand = Math.floor(Math.random() * 5) + 1;
  if (!(s as any).post_vars) (s as any).post_vars = {}; (s as any).post_vars['load'] = ((((s as any).temp_rand ?? 0) === 1) ? (0) : (((((s as any).temp_rand ?? 0) <= 3) ? (1) : (2))));
  (s as any).minut = ((s as any).minut ?? 0) + (60 - ((s as any).minut ?? 0));
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  if (((s as any).post_vars ?? 0)?.['load'] === 0) {
    scene.text('"Not much mail today, should be a piece of cake!" he smiles. "Take it easy."');
    scene.text('You lift the bag and nod. It feels very light indeed!');
  } else {
    if (((s as any).post_vars ?? 0)?.['load'] === 1) {
      scene.text('"We got a decent amount, but nothing you can\'t handle," he says. "Just do what you always do and you\'ll be fine."');
      scene.text('You pick up the bag. It has a bit of weight to it, but still feels fairly light.');
    } else {
      scene.text('"We\'re swamped today, so I hope you\'re wearing your running shoes!" he smirks. You can tell he feels bad for giving you so much work, but still expects you to get it done on time.');
      // TODO-QSP: dynamic text: Your bag is so heavy that you have to carry it with both hands. You might have t...
      scene.text('Your bag is so heavy that you have to carry it with both hands. You might have to use some shortcuts if you want to finish by 15:00!');
    }
  }
  scene.text('You take some time to get ready for your round, checking all the addresses and planning a route before leaving the post office around noon to get started.');
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Start your round', handler: (st: GameState) => {
    if (!(s as any).post_vars) (s as any).post_vars = {}; (s as any).post_vars['round'] = 0;
    scene.img('images/locations/shared/postoffice/postgirl.jpg');
    scene.text('The first half hour is easy as you work your way through the streets near the post office. As you get further away from the center, you take a look in your bag and ponder how you\'re going to handle your round today.');
    if (((s as any).post_vars ?? 0)?.['load'] === 0) {
      (s as any).minut = ((s as any).minut ?? 0) + 25;
      // TODO-QSP: dynamic text: Your bag feels fairly light, and you don't see that many items left in it. You c...
      scene.text('Your bag feels fairly light, and you don\'t see that many items left in it. You could easily make it back before 15:00, and would even have time to relax and take breaks!');
    } else {
      if (((s as any).post_vars ?? 0)?.['load'] === 1) {
        (s as any).minut = ((s as any).minut ?? 0) + 35;
        scene.text('Your bag is still fairly full, and you\'ll have to keep walking at a brisk pace to make it back on time. Nevertheless, you don\'t think you would need to take any risks in the more dangerous streets.');
      } else {
        (s as any).minut = ((s as any).minut ?? 0) + 45;
        scene.text('Your bag still feels very full, and you realize there\'s no way you\'ll make it back on time if you stick to the predetermined route!');
        // TODO-QSP: dynamic text: You could stick to the safe roads, but the postmaster won't like you returning l...
        scene.text('You could stick to the safe roads, but the postmaster won\'t like you returning late. Alternatively, you could push your luck and hopefully get all your deliveries done by 15:00 by cutting through areas where you might get into trouble.');
      }
    }
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'misc', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Use the more dangerous shortcuts to save time', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Use the more dangerous shortcuts to save time', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    if (!(s as any).post_vars) (s as any).post_vars = {}; (s as any).post_vars['danger'] = 1;
    scene.img('images/locations/shared/postoffice/postgirl.jpg');
    scene.text('You decide to use the streets the postmaster told you to avoid in order to finish faster. What\'s the worst that could happen?');
    if (((s as any).post_vars ?? 0)?.['load'] === 0) {
      scene.text('Your bag is emptying rapidly, and you don\'t think you\'ll need much more than a half hour to finish your round.');
    } else {
      if (((s as any).post_vars ?? 0)?.['load'] === 1) {
        scene.text('At this pace, you\'ll be able to finish your round with about half an hour left to spare, assuming nothing happens...');
      } else {
        scene.text('After another half hour, you take another look in your bag. There\'s still a lot left to deliver, but you should be able to just about get it done on time if you keep at your current pace.');
      }
    }
    scene.actions([
      { label: 'During your round...', goto: ['post_deliveries', 'pick_event'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Stick to the safe route', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    if (!(s as any).post_vars) (s as any).post_vars = {}; (s as any).post_vars['danger'] = 0;
    scene.img('images/locations/shared/postoffice/postgirl.jpg');
    scene.text('You decide to stick to the predetermined route, and continue delivering the mail you have in your bag.');
    if (((s as any).post_vars ?? 0)?.['load'] === 0) {
      scene.text('You have more than enough time to finish your round, even with you taking it slowly.');
    } else {
      if (((s as any).post_vars ?? 0)?.['load'] === 1) {
        // TODO-QSP: dynamic text: You figure you have enough time to stick to your predetermined route and be done...
        scene.text('You figure you have enough time to stick to your predetermined route and be done on time, so that\'s what you do. You won\'t have time to stop for anything or talk to anyone for very long, but will finish just around 15:00 as expected.');
      } else {
        scene.text('After another half hour, you take another look in your bag and see that there\'s still a lot left to deliver! There\'s no way you\'ll be able to finish your round on time if you keep this up.');
      }
    }
    scene.actions([
      { label: 'During your round...', goto: ['post_deliveries', 'pick_event'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterPickEvent(s: GameState, scene: SceneBuilder): void {
  if (((s as any).post_vars ?? 0)?.['round'] === 0) {
    (s as any).temp_rand = Math.floor(Math.random() * 26) + 1;
  } else {
    (s as any).temp_rand = Math.floor(Math.random() * 21) + 6;
  }
  if (((s as any).temp_rand ?? 0) === 1  &&  ((s as any).post_vars ?? 0)?.['qw_1'] === 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enter1(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).temp_rand ?? 0) === 2  &&  ((s as any).post_vars ?? 0)?.['qw_2'] === 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enter2(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).temp_rand ?? 0) === 3  &&  ((s as any).post_vars ?? 0)?.['qw_3'] === 0) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enter3(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (((s as any).temp_rand ?? 0) === 4  &&  ((s as any).post_vars ?? 0)?.['qw_4'] === 0) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enter4(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          if (((s as any).temp_rand ?? 0) > 5) {
            // TODO-QSP: gs 'post_deliveries', $str(temp_rand)
          } else {
            scene.actions([{ label: 'Continue', goto: ['post_deliveries', 'pick_event'] }]);
          }
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterResume(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).post_vars ?? 0)?.['round'] === 1) {
    scene.img('images/locations/shared/postoffice/postgirl.jpg');
    scene.text('You deliver the last few pieces of mail without anything of note happening, and nod contently to yourself after you hand off the last parcel. You\'re all done for the day.');
    if (((s as any).hour ?? 0) < 15) {
      // TODO-QSP: dynamic text: You check the time and see that it's not even ' + func('time', 'get_time_string'...
      scene.text('You check the time and see that it\'s not even 15:00 yet. The postmaster will be pleased!');
    } else {
      if (((s as any).hour ?? 0) === 15  &&  ((s as any).minut ?? 0) <= 15) {
        // TODO-QSP: dynamic text: You check the time and see it's around ' + func('time', 'get_time_string', 15, 0...
        scene.text('You check the time and see it\'s around 15:00 still. You\'re done just in time to not get into trouble! Phew...');
      } else {
        // TODO-QSP: dynamic text: You check the time and see it's already well past ' + func('time', 'get_time_str...
        scene.text('You check the time and see it\'s already well past 15:00. The postmaster won\'t be happy...');
      }
    }
    scene.actions([
      { label: 'Return to the post office', goto: ['post_deliveries', 'finishround'] },
    ]);
  } else {
    if (!(s as any).post_vars) (s as any).post_vars = {}; (s as any).post_vars['round'] = 1;
    scene.img('images/locations/shared/postoffice/postgirl.jpg');
    scene.text('You continue delivering mail on your round like before, and your bag is slowly getting lighter.');
    if (((s as any).post_vars ?? 0)?.['danger'] === 0) {
      (s as any).minut = ((s as any).minut ?? 0) + (50 + (((s as any).post_vars ?? {})?.['load'] ?? 0) * 20);
      qspCall(s, 'stat', '');
      scene.text('Before you know it, you only have a few mail pieces left.');
      scene.actions([
        { label: 'Then...', goto: ['post_deliveries', 'pick_event'] },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + (35 + (((s as any).post_vars ?? {})?.['load'] ?? 0) * 10);
      qspCall(s, 'stat', '');
      scene.text('You occasionally think you see some guys following you in the corner of your eye, but when you look back, you don\'t see them...');
      if ((Math.floor(Math.random() * 3) + 1) === 1) {
        scene.text('You can\'t help but feel a bit relieved as you walk through the last of the streets you\'re not supposed to be in. It looks like, if there actually were guys following you, they decided not to bother you.');
        scene.actions([
          { label: 'Then...', goto: ['post_deliveries', 'pick_event'] },
        ]);
      } else {
        scene.img('images/locations/shared/postoffice/shush.jpg');
        scene.text('You\'re almost done in the streets you\'re not supposed to be in. With only a few mail pieces to go, you suddenly hear a deep voice behind you.');
        if (((s as any).post_vars ?? 0)?.['bandit'] === 0) {
          scene.text('"You, girl. Come here!"');
        } else {
          scene.text('"I see you\'ve come back to play! We\'ve been keeping an eye on you for a while..."');
        }
        scene.text('Before you can do anything, two men catch up to you and block your path.');
        scene.actions([
          { label: 'See what they want', goto: ['post_deliveries', 'bandits'] },
        ]);
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBandits(s: GameState, scene: SceneBuilder): void {
  if (((s as any).post_vars ?? 0)?.['bandit'] === 0) {
    scene.text('"New at the job? Most of you know to avoid this area unless you\'re looking to play!" he grins at you as his friend rummages through your bag. "Anything good?" he asks.');
    // TODO-QSP: dynamic text: "Nice, someone sent money to Nikolai!" the other laughs. "That bastard owed me '...
    scene.text('"Nice, someone sent money to Nikolai!" the other laughs. "That bastard owed me \' + func(\'money\', \'format\', 5000) + \'! I thought I was never going to see that money again. Guess he just paid me back... Thanks, Nikolai! Asshole..."');
    scene.text('He pockets the money and tosses the envelope away.');
    scene.actions([
      { label: 'Tell them they can\'t do that', handler: (st: GameState) => {
    scene.text('"Hey, you can\'t do that! Give that back!"');
    scene.text('The two men laugh. "Shut the fuck up. If you want to be left alone on our turf, you should\'ve stayed out of our sight!" He signs your sheet and gives you a cruel grin. "There, you have the signature you need. Now get lost... Unless you came to play?"');
    scene.actions([
      { label: 'Ask what they\'re talking about', handler: (st: GameState) => {
    if (!(s as any).post_vars) (s as any).post_vars = {}; (s as any).post_vars['bandit'] = 1;
    scene.text('"What do you mean, \'play\'!? Let go of me!" you shout at him.');
    scene.text('The man tightens his grip on your shoulders. "Shut up and listen! We had a deal with the previous delivery girl. Eager little slut, she was! She even made a game out of it... If she used our streets during her round, she\'d do what we want if we caught her. Since you took her place, that goes for you too. We\'ll go easy on you this time, but now that you know the rules: if we see you again around here, you better be ready to put out if you want to keep your job. Understood?"');
    scene.text('He doesn\'t wait for an answer before he walks away with his friend, leaving you alone to collect your thoughts. What the hell did they make that girl do?!');
    scene.actions([
      { label: 'Deliver the last envelopes in your bag', goto: ['post_deliveries', 'resume'] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    scene.text('"So... You know the rules, yet you came back. I guess that means you want to play?" he whispers triumphantly in your ear as his friend digs through your bag again. "Let\'s go somewhere a bit more quiet, so we won\'t be disturbed. This way."');
    scene.text('You can clearly feel his growing erection poking against the small of your back as he pulls your body tightly against his, not leaving any doubt as to what they want from you.');
    scene.text('They start dragging you towards a fenced building. Once there, you figure it\'s going to be difficult to back out of what they have in mind...');
    qspCall(s, 'willpower', 'skill_base', 'run', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Wrestle free and run away', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Wrestle free and run away', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('You replay in your head what the man said earlier: They only get to play with you if they catch you, so it\'s okay to run, right?');
    scene.text('You quickly snatch your bag and try to run away from them.');
    if (!(s as any).runnerQW) (s as any).runnerQW = {}; (s as any).runnerQW['bmi_penalty'] = 0;
    if (((s as any).pcs_mass ?? 0)?.['body'] > 30) {
      if (!(s as any).runnerQW) (s as any).runnerQW = {}; (s as any).runnerQW['bmi_penalty'] = (((((s as any).pcs_mass ?? {})?.['body'] ?? 0) - 25)/5);
    }
    if (!(s as any).runnerQW) (s as any).runnerQW = {}; (s as any).runnerQW['result'] = ((s as any).pcs_run ?? 0) - (((s as any).runnerQW ?? {})?.['bmi_penalty'] ?? 0);
    (s as any).randrun = Math.floor(Math.random() * 6) + 1;
    if (((s as any).runnerQW ?? 0)?.['result'] >= 23  &&  ((s as any).randrun ?? 0) >= 3) {
      scene.text('"Hey, come back here!" the guy yells, but you running away clearly caught them by surprise.');
      scene.text('You\'re a good enough runner to outrun them, despite the bag you\'re carrying.');
      scene.text('Once you\'re sure you\'ve lost them, you stop to catch your breath. They probably gave up on chasing you.');
      scene.text('You smile to yourself. "Nice try, idiots..."');
      scene.actions([
        { label: 'Continue your round', goto: ['post_deliveries', 'resume'] },
      ]);
    } else {
      if (((s as any).runnerQW ?? 0)?.['result'] >= 23  &&  ((s as any).randrun ?? 0) === 1) {
        scene.text('You manage to break free from them and start running, but the strap of your bag gets caught on a fence when you try to run away.');
        scene.text('The guys are upon you moments later, grabbing onto you tightly to make sure you can\'t escape again.');
        scene.text('"Nice try, bitch! You almost got away... almost, but not quite!" one of them pants, gasping for breath.');
        scene.text('They drag you away from the street and down an alleyway between two buildings. They have a firm grip on you, and the two of them look way too tough to fight. Looks like you have no choice...');
        scene.actions([
          { label: 'Continue', goto: ['post_deliveries', 'bandsex'] },
        ]);
      } else {
        if (((s as any).runnerQW ?? 0)?.['result'] >= 23  &&  ((s as any).randrun ?? 0) === 2) {
          scene.text('You manage to break free from them and start running, but almost immediately trip over a loose rock you failed to notice.');
          scene.text('The guys are upon you moments later, and one of them places his knee between your shoulder blades as you scramble to try and get back on your feet.');
          scene.text('"Nice try, bitch! Looks like you\'re ours, though!" one of them grins, somewhat amused at how clumsily you tripped over.');
          scene.text('They hoist you up and drag you away from the street, entering an alleyway between two buildings. They have a firm grip on you, and the two of them look way too tough to fight. Looks like you have no choice...');
          scene.actions([
            { label: 'Continue', goto: ['post_deliveries', 'bandsex'] },
          ]);
        } else {
          scene.text('"Where the fuck do you think you\'re going!?" his friend yells when he notices you\'re trying to yank the bag out of his hands. The guy who initially talked to you firmly grabs you by the arms with a wide grin on his face.');
          scene.text('"Hah! Nice try, but it\'s too late to run now!" he laughs, somehow entertained by your failed attempt to get away.');
          scene.text('They drag you away from the street, entering an alleyway between two buildings. They have a firm grip on you, and the two of them look way too tough to fight. Looks like you have no choice...');
          scene.actions([
            { label: 'Continue', goto: ['post_deliveries', 'bandsex'] },
          ]);
        }
      }
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Don\'t bother', handler: (st: GameState) => {
    scene.text('They look like they\'re pretty fast, and way too strong to fight off. You quietly resign to the fact that there\'s no way you\'re getting out of this, and meekly let them guide you behind the building.');
    scene.actions([
      { label: 'Behind the building...', goto: ['post_deliveries', 'bandsex'] },
    ]);
  } },
    ]);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBandsex(s: GameState, scene: SceneBuilder): void {
  if (((s as any).post_vars ?? 0)?.['bandit'] === 1) {
    scene.text('Your heart is pounding in your chest when the two men somewhat forcefully drag you behind a building.');
    scene.text('When you get there, the man who does most of the talking grins. "Like I said... We had a deal with the former delivery girl. Haven\'t seen her in a while by the way, only some older guy. Any idea where she is?"');
    scene.text('You shake your head. "I don\'t even know who she is!"');
    scene.text('"Shame, I liked her. But it doesn\'t matter," he shrugs. "You\'re here now. Anyway, the deal with her was that in exchange for free passage, she\'d... Take care of us from time to time, if you know what I mean, and I think you do."');
    scene.text('There\'s an icy silence in the air for a few seconds before he continues. "Let\'s start simple. Show us your tits."');
    scene.text('You give him a hesitant look, and the other guy pitches in. "Come on, girl. Just show us your tits and you can go. Unless you want to lose your job..."');
    scene.text('He pulls a lighter out of his pocket, lights it and moves it dangerously close to a fistful of envelopes. If you don\'t do something now, he\'ll torch them.');
    qspCall(s, 'willpower', 'exhib', 'self', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Agree', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Agree', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    if (!(s as any).post_vars) (s as any).post_vars = {}; (s as any).post_vars['bandit'] = 2;
    if (!(s as any).post_vars) (s as any).post_vars = {}; (s as any).post_vars['exhib'] = ((s as any).post_vars['exhib'] ?? 0) + (1);
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 4) + 0);
    scene.img('images/locations/shared/postoffice/events/postboobs1.jpg');
    scene.text('"No, wait!" you blurt out, quickly stopping him. "I\'ll do it..."');
    scene.text('"I knew you would!" he grins, putting out his lighter but keeping it in his hand. "Go on, then! We don\'t have all day!"');
    scene.text('You quickly look around you to make sure no one else can see you and pull your clothes aside. When you proceed to correct your clothes, the first guy slaps your hands away. "Not so fast! You\'re done when we say you are!"');
    scene.text('After another ten seconds of awkward silence, the quiet one nods approvingly. "Very nice."');
    qspCall(s, 'arousal', 'flash', 5);
    qspCall(s, 'stat', '');
    scene.text('While you quickly cover up, his friend smiles benevolently and offers you your bag. "See? That wasn\'t so bad!"');
    scene.text('You quickly snatch it out of his hands and leave, assuming they\'re done with you. From the greedy looks in their eyes, you figure they\'ll probably expect more from you if they catch you again.');
    scene.actions([
      { label: 'Continue your round', goto: ['post_deliveries', 'resume'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Say nothing ', handler: (st: GameState) => {
    if (!(s as any).post_vars) (s as any).post_vars = {}; (s as any).post_vars['burn'] = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/postoffice/postburn.jpg');
    scene.text('When you don\'t speak up, he theatrically moves the envelopes into the flame. Within seconds, the contents of your bag are consumed by the flames.');
    scene.text('"You could\'ve easily prevented this! If only you weren\'t such a prude..." he grins cruelly.');
    scene.text('His friend mockingly pretends to be warming his hands over the smouldering remains of the letters and laughs. "Good luck finding a new job. Now get lost!"');
    scene.text('When you pick up the empty bag and return to the street dejectedly, you realize he\'s right. You\'re going to get fired for sure!');
    scene.actions([
      { label: 'Return to the post office', goto: ['post_deliveries', 'finishround'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).post_vars ?? 0)?.['bandit'] === 2) {
      scene.text('You follow the two men to behind the building again, while one of them digs through your bag.');
      scene.text('The first one claps his hands and grins. "Alright, girl. You know what we want."');
      scene.actions([
        { label: 'Show your breasts again', handler: (st: GameState) => {
    if (!(s as any).post_vars) (s as any).post_vars = {}; (s as any).post_vars['exhib'] = ((s as any).post_vars['exhib'] ?? 0) + (1);
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
    if (((s as any).post_vars ?? 0)?.['exhib'] >=4) {
      if (!(s as any).post_vars) (s as any).post_vars = {}; (s as any).post_vars['bandit'] = 3;
    }
    (s as any).postboobsrand = Math.floor(Math.random() * 4) + 1;
    scene.img(`images/locations/shared/postoffice/events/postboobs${((s as any).postboobsrand || '')}.jpg`);
    scene.text('You shrug and pull your clothes aside, letting the men ogle them for a while. It\'s a small price to pay, given the time you\'re saving!');
    scene.text('The two guys whisper amongst themselves while they stare at you. "No, not yet..." you overhear, but you\'re not sure what they\'re talking about. Are they talking about you?');
    qspCall(s, 'arousal', 'flash', 5);
    qspCall(s, 'stat', '');
    scene.text('They give you back your bag and shoo you away. Looks like they\'re satisfied for now.');
    scene.actions([
      { label: 'Continue your round', goto: ['post_deliveries', 'resume'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).post_vars ?? 0)?.['bandit'] === 3) {
        scene.text('"Strip!" one of them orders you once you\'re behind the building.');
        scene.text('"Like... Everything?" you ask as you quickly expose your breasts. "I can show you my tits again! See?!"');
        scene.text('"Everything!" he barks impatiently, ignoring you. "I want to see what our new slut looks like..."');
        scene.text('His friend is only paying half attention to you while skimming through your letters to see if there\'s anything of interest among them.');
        scene.text('He doesn\'t find anything to his liking in your bag and looks at you intently.');
        scene.actions([
          { label: 'Strip for them', handler: (st: GameState) => {
    if (!(s as any).post_vars) (s as any).post_vars = {}; (s as any).post_vars['bandit'] = 4;
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 6) + 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/postoffice/events/poststrip.jpg');
    scene.text('With a sigh, you start to strip and are soon standing before them just wearing your shoes and socks.');
    scene.text('"You have a nice body, girl. I can\'t wait to get better acquainted with it!" one grins.');
    scene.text('"Are you any good with your mouth?" the other asks you intently while rubbing his groin.');
    scene.text('"All in good time," his friend laughs. "She\'s done enough for today."');
    qspCall(s, 'arousal', 'flash', 10);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Laugh it off and get dressed again', handler: (st: GameState) => {
    scene.text('You shrug and laugh it off, quickly putting your clothes back on before the talkative one changes his mind.');
    scene.text('"It\'s okay, you\'ll get lots of practice soon enough. The former delivery girl was terrible at it at first, but by the end she sucked like a pro!" the creepy one says.');
    scene.text('He gives you your bag and the friendlier one of the two smirks. "Consider this your last freebie. You know what we want, so you better be ready to put that mouth to work if we catch you on our streets again!"');
    scene.text('They let you leave, but their words keep lingering in your mind. However, you complete your round without any more issues.');
    scene.actions([
      { label: 'Continue your round', goto: ['post_deliveries', 'resume'] },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        if (((s as any).post_vars ?? 0)?.['bandit'] === 4) {
          scene.text('"You\'re back. I assume that\'s because you have something to prove?" the hoodlum laughs, hinting at what you talked about last time.');
          scene.text('"Watch the street while I test her skills. You can have her next time," he tells his friend and guides you into one of the apartments on the street before his friend can object.');
          scene.text('It takes a minute for your eyes to adjust to the darkness; all the curtains are closed and the only light in the room is coming from a TV.');
          scene.text('The man quickly takes his clothes off and crashes down onto a bed, taking the remote in his hand. You take your clothes off too, expecting that\'s what he wants.');
          scene.text('"Go ahead, slut. Start sucking," he orders you. His cock is already fully erect, and intimidatingly large.');
          scene.text('"But..." you mumble.');
          scene.text('"Did you really think we\'d keep settling for a quick glance at your tits forever?" he asks sharply, getting impatient. "If you did, you\'re even more naive than I thought. I want to feel those lips around my cock within the next ten seconds if you want to keep that job of yours..."');
          qspCall(s, 'willpower', 'bj', 'resist', 'hard');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Beg', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Beg', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    if (!(s as any).post_vars) (s as any).post_vars = {}; (s as any).post_vars['bandit'] = 5;
    if (!(s as any).post_vars) (s as any).post_vars = {}; (s as any).post_vars['hj'] = ((s as any).post_vars['hj'] ?? 0) + (1);
    qspCall(s, 'boyStat', 'A104');
    scene.img('images/locations/shared/postoffice/sex/posthj1.jpg');
    scene.text('"Please, you can\'t make me do this! Please..." you beg, interrupting his counting. "Anything but this..."');
    scene.text('The man sighs deeply. "Well, you\'re getting me off one way or the other! Fine. I guess you can use your hands, this time anyway. You better make it good, though!"');
    scene.text('Realizing that\'s the best offer you\'re going to get, you kneel down before him and start jerking him off.');
    scene.text('"Spit on it, girl. Make it nice and slippery, and show some more enthusiasm!" he orders, and you comply quickly. "Yeah, that\'s it..."');
    scene.text('After a few minutes, he groans. "I\'m gonna cum! Jerk me off over your tits!"');
    scene.text('Seconds later, warm jets of his sperm splatter all over your breasts. You feel a twinge of pride when you see how thoroughly satisfied the guy is.');
    qspCall(s, 'arousal', 'hj', 10, 'sub');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Find some tissues to clean yourself up', handler: (st: GameState) => {
    if (!(s as any).post_vars) (s as any).post_vars = {}; (s as any).post_vars['bandit'] = 6;
    if (!(s as any).post_vars) (s as any).post_vars = {}; (s as any).post_vars['bj'] = ((s as any).post_vars['bj'] ?? 0) + (1);
    qspCall(s, 'boyStat', 'A105');
    scene.img('images/locations/shared/postoffice/sex/postbj2.jpg');
    scene.text('"Why are you still here, girl?" the other guy laughs when he sees you loitering about the apartment naked, looking for tissues. "Are you looking for more cocks to suck?"');
    scene.text('Before you can reply, he grabs you by the arm and forcefully drags you to another room. He doesn\'t bother undressing, but simply takes his cock out of his pants, expecting you to do the rest.');
    scene.text('"But I only gave your fri-" you try to tell him, but he slaps you on the cheek hard enough to derail your train of thought and demand your attention.');
    scene.text('"Open your mouth, girl! I\'m not asking again!" he threatens in a menacing voice.');
    scene.text('You realize he\'s not going to let you walk away and sigh before obediently closing your lips around his shaft.');
    scene.text('He makes you take the full length of his cock down your throat several times, testing your limits thoroughly. His cock is even bigger than his friend\'s, and you have to open your mouth as far as you can to allow him access.');
    scene.text('After a few minutes of uncomfortable throat fucking, he finally shoots his load down your throat and grins at you. "You\'re even better than the last Postslut! I\'m already looking forward to next week..."');
    qspCall(s, 'arousal', 'bj', 10, 'sub');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_call', 'mouth_swallow', 'A105');
    qspCall(s, 'stat', '');
    scene.text('As you get dressed again, you overhear the two guys talking. "She did <i>what</i>?! She only gave me a handjob! That bitch... Is she still here?"');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    scene.text('You quickly find your bag and leave the apartment before they come and find you again. There\'s no way either of them will settle for a handjob now if they catch you again...');
    scene.actions([
      { label: 'Continue your round', goto: ['post_deliveries', 'resume'] },
    ]);
  } },
    ]);
  } },
      { label: 'Put your clothes back on and leave', handler: (st: GameState) => {
    scene.text('You quickly put your clothes back on, ignoring the man\'s cum on your body. The other guy might come looking for you too!');
    scene.actions([
      { label: 'Continue your round', goto: ['post_deliveries', 'resume'] },
    ]);
  } },
    ]);
  } },
            ]);
          }
          scene.actions([
            { label: 'Do what he wants', handler: (st: GameState) => {
    if (!(s as any).post_vars) (s as any).post_vars = {}; (s as any).post_vars['bandit'] = 6;
    qspCall(s, 'boyStat', 'A104');
    scene.img('images/locations/shared/postoffice/sex/postbj1.jpg');
    scene.text('You kneel down before him and start sucking the head of his cock. Within a minute, you feel several jets of his bitter sperm landing in your mouth. He didn\'t give you any warning and you recoil from the sudden sharp taste in your mouth.');
    qspCall(s, 'arousal', 'bj', 10, 'sub');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_call', 'mouth', 'A104');
    qspCall(s, 'stat', '');
    scene.text('"You\'re a natural!" he groans, slowly recovering from his orgasm. "Quick and efficient. Not bad! Could be better, but we\'ll work on that next time."');
    scene.text('He waves you off, his attention focused on the TV now. As far as he\'s concerned, you\'re no longer there.');
    scene.text('You quickly get dressed again and pull your bag out of the other guy\'s hand, who was waiting outside. He eyes you up and down suspiciously with a rather unkind look in his eyes.');
    scene.text('You should probably start walking before he decides he wants a piece of you too...');
    scene.actions([
      { label: 'Walk away', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('You quickly walk away from him before he can say anything and continue your round as usual. Despite the hold-up, you\'re done a fair bit earlier than usual, but the tangy taste in your mouth is a constant reminder of what you had to do for it.');
    scene.actions([
      { label: 'Continue your round', goto: ['post_deliveries', 'resume'] },
    ]);
  } },
      { label: 'Ask if you\'re supposed to give him a blowjob too', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A105');
    scene.img('images/locations/shared/postoffice/sex/postbj11.jpg');
    scene.text('Figuring you\'re better off staying on his good side, you stop. "Was I supposed to help you too?"');
    scene.text('"No, but you will now. Come this way," he laughs.');
    scene.text('Without waiting for an answer, he grabs you by the arm and forcefully drags you to another room. He doesn\'t bother to undress, but simply takes his cock out of his pants, expecting you to do the rest.');
    scene.text('He groans when you obediently close your lips around his shaft and makes you take the full length of his cock down your throat several times, testing your limits thoroughly. His cock is even bigger than his friend\'s, and you have to open your mouth as far as you can to allow him access.');
    scene.text('He dumps his load all over your face and he grins at you. "You\'re even more eager than the last Postslut! We\'re going to have a lot of fun with you..."');
    qspCall(s, 'arousal', 'bj', 10, 'sub');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_call', 'face', 'A105');
    qspCall(s, 'stat', '');
    scene.text('While you get dressed again, you overhear the two guys talking. "She did you too?! Maybe she enjoys this a lot more than we thought?"');
    scene.actions([
      { label: 'Continue your round', handler: (st: GameState) => {
    scene.img('images/locations/shared/postoffice/postgirl.jpg');
    scene.text('You quickly leave the apartment before they come to find you again and complete your round without any more issues. You run into the guys several more times, but other than a few lewd remarks, they leave you alone.');
    scene.actions([
      { label: 'Continue your round', goto: ['post_deliveries', 'resume'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
          ]);
        } else {
          if (((s as any).post_vars ?? 0)?.['bandit'] === 5) {
            if (!(s as any).post_vars) (s as any).post_vars = {}; (s as any).post_vars['hj'] = ((s as any).post_vars['hj'] ?? 0) + (1);
            if (((s as any).post_vars ?? 0)?.['hj'] >= 5) {
              if (!(s as any).post_vars) (s as any).post_vars = {}; (s as any).post_vars['bandit'] = 6;
            }
            (s as any).posthjrand = Math.floor(Math.random() * 5) + 1;
            qspCall(s, 'boyStat', 'A104');
            scene.img(`images/locations/shared/postoffice/sex/posthj${((s as any).posthjrand || '')}.jpg`);
            scene.text('One of them guides you inside the apartment, where you obediently remove your clothes before kneeling down in front of him.');
            scene.text('You try to show some enthusiasm while you jerk him off, occasionally nuzzling or licking his cock between strokes.');
            scene.text('He orgasms in no time at all, and you make sure you point his cock at your breasts when he does. Somehow, the splattering of his cum onto them makes you feel empowered in a way.');
            qspCall(s, 'arousal', 'hj', 10);
            qspCall(s, 'arousal', 'end');
            scene.text('You quickly wipe his cum off your body with a tissue before putting your clothes back on.');
            if (((s as any).post_vars ?? 0)?.['hj'] >= 5) {
              scene.text('"You know, we\'ve postponed it long enough. Next time I want a blowjob, okay?" the guy groans, still in orgasmic bliss.');
              scene.text('You knew this moment was coming. "Yeah, okay..." you nod before leaving the apartment.');
            }
            scene.text('The other guy is already standing by with your bag, letting you get on your way.');
            scene.actions([
              { label: 'Continue your round', goto: ['post_deliveries', 'resume'] },
            ]);
          } else {
            if (!(s as any).post_vars) (s as any).post_vars = {}; (s as any).post_vars['bj'] = ((s as any).post_vars['bj'] ?? 0) + (1);
            if (((s as any).post_vars ?? 0)?.['bj'] <= 4) {
              (s as any).postbjrand = Math.floor(Math.random() * 4) + 1;
            } else {
              if (((s as any).post_vars ?? 0)?.['bj'] <= 7) {
                (s as any).postbjrand = Math.floor(Math.random() * 7) + 1;
              } else {
                (s as any).postbjrand = Math.floor(Math.random() * 10) + 1;
              }
            }
            if (((s as any).post_vars ?? 0)?.['bj'] <= 4) {
              // TODO-QSP: gs 'boyStat', 'A'+str(rand(104, 105))
              scene.img(`images/locations/shared/postoffice/sex/postbj${((s as any).postbjrand || '')}.jpg`);
              // TODO-QSP: dynamic text: After the guys decide who gets to have you this time, <<$boydesc>> guides you in...
              scene.text(`After the guys decide who gets to have you this time, ${((s as any).boydesc || '')} guides you inside the apartment, where you obediently remove your clothes before kneeling down in front of him.`);
              scene.text('You dutifully give the guy a blowjob, even though you\'re not that enthusiastic about it. You flick your tongue over the head of his cock and close your lips around it, bringing him to orgasm as quickly as you can. He doesn\'t last long, and unloads inside your mouth within minutes.');
              qspCall(s, 'arousal', 'bj', 10);
              qspCall(s, 'arousal', 'end');
              qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0));
              qspCall(s, 'stat', '');
            } else {
              if (((s as any).post_vars ?? 0)?.['bj'] > 4  &&  ((s as any).post_vars ?? 0)?.['bj'] <= 7) {
                // TODO-QSP: gs 'boyStat', 'A'+str(rand(104, 105))
                scene.img(`images/locations/shared/postoffice/sex/postbj${((s as any).postbjrand || '')}.jpg`);
                // TODO-QSP: dynamic text: After the guys decide who gets to have you this time, <<$boydesc>> guides you in...
                scene.text(`After the guys decide who gets to have you this time, ${((s as any).boydesc || '')} guides you inside the apartment, where you obediently remove your clothes before kneeling down in front of him and eagerly sucking him off, teasing him by licking his balls before you take his cock in your mouth again. He orgasms in no time at all, and you swallow his load without giving it another thought.`);
                qspCall(s, 'arousal', 'bj', 10);
                qspCall(s, 'arousal', 'end');
                qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0));
                qspCall(s, 'stat', '');
                scene.text('He lies on the bed in post-orgasmic bliss as you put your clothes back on and resume your round, with only the tangy taste of his cum in your mouth as a reminder of what you just did.');
              } else {
                scene.img(`images/locations/shared/postoffice/sex/postbj${((s as any).postbjrand || '')}.jpg`);
                if (((s as any).postbjrand ?? 0) > 7) {
                  scene.text('You grin at the guys. "No need to argue, guys! Why don\'t you both come in with me?"');
                  scene.text('They can\'t believe their ears and both follow you inside, where you undress and kneel between the two of them. "Come on, boys! Show me how much you want me!" you encourage them, and the guys scurry to pull their pants down.');
                  scene.text('You blow both of them in turn, jerking off the cock you don\'t have in your mouth. You\'ve spent enough time with the guys by now to know what they like, and both of them shoot their loads in no time at all.');
                  qspCall(s, 'boyStat', 'A104');
                  qspCall(s, 'arousal', 'bj', 5, 'dom');
                  qspCall(s, 'cum_call', 'mouth', 'A104');
                  qspCall(s, 'boyStat', 'A105');
                  qspCall(s, 'arousal', 'bj', 5, 'dom');
                  qspCall(s, 'cum_call', 'mouth', 'A105');
                  qspCall(s, 'stat', '');
                  scene.text('"Already!?" you laugh, and the guys actually seem a bit disappointed in themselves.');
                  scene.text('You wink at them and smile. "That\'s okay, I still had fun! Maybe you\'ll last longer next time..."');
                } else {
                  scene.text('You\'re so accustomed to servicing the guys that you no longer feel any shame or hesitation. It\'s just part of the job.');
                  scene.text('You take one of them by the hand and lead him into the building before they can decide who gets to spend time with you.');
                  scene.text('You quickly undress and drop to your knees before tugging at his pants.');
                  scene.text('"Come on, big boy!" you grin. "Help me out a little... You do want me to blow you, right?"');
                  scene.text('He\'s taken aback by how eager you are and quietly lets you take his cock out of his pants.');
                  scene.text('You start jerking and sucking him off immediately, trying to get him off as quick as possible so you can resume your round.');
                  scene.text('Sure enough, he doesn\'t last long. "That\'s it! There you go..." you smile sweetly at him when you feel his sperm land on your face.');
                  qspCall(s, 'npcgeneratec', '', 0, 'Post office guy', Math.floor(Math.random() * 28) + 18);
                  qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
                  qspCall(s, 'arousal', 'bj', 10);
                  qspCall(s, 'cum_call', 'mouth', 'Post office guy');
                  scene.text('You quickly wipe the sperm into your mouth using your fingers and theatrically lick them clean one by one in front of him. All he can do is groan in response.');
                }
              }
            }
            scene.text('You quickly put your clothes back on. The guys barely take up any of your time now that you\'re getting to know their cocks better.');
            scene.text('"Bye boys! See you next time!" you grin at them.');
            qspCall(s, 'arousal', 'end');
            scene.actions([
              { label: 'Continue your round', goto: ['post_deliveries', 'resume'] },
            ]);
          }
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterFinishround(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/postoffice/postmaster.jpg');
  if (((s as any).post_vars ?? 0)?.['burn'] === 1) {
    qspCall(s, 'jobs', 'set_fired', 'pav_mailgirl');
    scene.text('You return to the post office empty-handed, way earlier than you should. The postmaster can immediately tell by the look on your face that something\'s wrong.');
    scene.text('"What happened? Why are you back so early?" he asks, rather worried.');
    scene.text('"They... They torched everything! Some guys stopped me and burnt all the letters, just for the hell of it!" you blurt out. "There was nothing I could do..."');
    scene.text('That last bit is a lie, but he doesn\'t have to know what they wanted you to do.');
    scene.text('He shakes his head angrily. "I warned you to avoid those streets! I knew this was going to happen... Damn it, you leave me no choice. You\'re fired!"');
  } else {
    if (((s as any).hour ?? 0) === 14  &&  ((s as any).minut ?? 0) <= 30) {
      if (!(s as any).post_vars) (s as any).post_vars = {}; (s as any).post_vars['late'] = ((s as any).post_vars['late'] ?? 0) - (1);
      scene.text('"Wow, back already?" the postmaster asks when he sees you returning so early. "I don\'t know how you do it, but keep up the good work!"');
    } else {
      if (((s as any).hour ?? 0) === 15) {
        if (!(s as any).post_vars) (s as any).post_vars = {}; (s as any).post_vars['late'] = ((s as any).post_vars['late'] ?? 0) + (3);
        if (((s as any).post_vars ?? 0)?.['late'] <= 3) {
          scene.text('"You\'re late. What happened?" the postmaster asks when you return to the post office.');
          scene.text('You shrug. "I got held up a little, but I managed to deliver everything. See?"');
          scene.text('His anger dissipates when he sees your sheet, with all the signatures where they should be.');
          scene.text('He smiles benevolently. "Well, it can happen, I guess. Nice job getting everything done."');
        } else {
          if (((s as any).post_vars ?? 0)?.['late'] > 3  &&  ((s as any).post_vars ?? 0)?.['late'] < 12) {
            scene.text('"You\'re late again," the postmaster remarks when you return to the post office. "Did you at least manage to deliver everything?"');
            scene.text('When you nod, his stern expression softens a little. "Well... alright then," he says, still a bit reluctant. "It\'s important people get their mail on time, though. Don\'t make a habit of it!"');
          } else {
            if (((s as any).post_vars ?? 0)?.['late'] >= 12  &&  ((s as any).post_vars ?? 0)?.['late'] < 15) {
              scene.text('"You\'re late yet again!" the postmaster scoffs when you enter the post office, but your remark that you delivered everything falls on deaf ears.');
              // TODO-QSP: dynamic text: "I don't care! Everyone knows that mail is delivered before ' + func('time', 'ge...
              scene.text('"I don\'t care! Everyone knows that mail is delivered before 15:00! You may be getting lucky with people still being home after that, but your luck won\'t last," he remarks, mumbling something about how you make the postal service look bad before his voice grows louder. "I will not stand for this! If you\'re late one more time, you\'re fired! You hear me?"');
              scene.text('Knowing it\'s no use arguing, you just nod.');
            } else {
              qspCall(s, 'jobs', 'set_fired', 'pav_mailgirl');
              // TODO-QSP: dynamic text: "Enough's enough, <<$pcs_firstname>>! I've warned you enough times and I'm start...
              scene.text(`"Enough's enough, ${((s as any).pcs_firstname || '')}! I've warned you enough times and I'm starting to get complaints from people getting their mail late," the postmaster sighs when he sees you entering the post office late yet again. "You're fired."`);
            }
          }
        }
      } else {
        if (((s as any).post_vars ?? 0)?.['late'] > 0) {
          if (!(s as any).post_vars) (s as any).post_vars = {}; (s as any).post_vars['late'] = ((s as any).post_vars['late'] ?? 0) - (1);
        }
        scene.text('You return to the post office on time with an empty bag.');
        scene.text('The postmaster smiles when he sees you. "I assume everything went okay?"');
      }
    }
  }
  if (((s as any).post_vars ?? 0)?.['qw_4'] === 1) {
    if (!(s as any).post_vars) (s as any).post_vars = {}; (s as any).post_vars['qw_4'] = 2;
    scene.text('"One missing signatu- Oh never mind, it\'s him," the postmaster remarks dryly when he notices the missing signature of the pervert who tried to blackmail you. "No need to explain. I hope you didn\'t listen to him? He tries that with every girl we hire. I\'ve reported him to Captain Katalkin several times, but nothing ever happens."');
  }
  if (((s as any).job_status ?? 0)?.['pav_mailgirl'] === 'fired') {
    scene.text('"I better let Aleksiy know he needs to come in on Saturdays again. I knew I shouldn\'t have trusted you!" he sighs while shaking his head in disappointment as he walks away. Guess you\'re not getting paid for the day...');
  } else {
    qspCall(s, 'jobs', 'paycheck', 'pav_mailgirl');
    // TODO-QSP: dynamic text: You receive your ' + func('money', 'string_profit', 450) + ' pay for the day.
    scene.text('You receive your \' + func(\'money\', \'string_profit\', 450) + \' pay for the day.');
  }
  if (((s as any).post_vars ?? 0)?.['qw_1'] === 2) {
    scene.actions([
      { label: 'Return to the married man\'s house', goto: ['post_events', '1'] },
    ]);
  }
  if (((s as any).post_vars ?? 0)?.['qw_2'] === 2) {
    scene.actions([
      { label: 'Go back to Jenya and Arsen\'s apartment', goto: ['post_events', '2'] },
    ]);
  }
  if (((s as any).post_vars ?? 0)?.['qw_3'] === 2) {
    scene.actions([
      { label: 'Return to the businessman\'s house', goto: ['post_events', '3'] },
    ]);
  }
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['pav_commercial', ''] },
  ]);
  scene.build();
}

function enter1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/postoffice/events/postevent1-1.jpg');
  scene.text('You enter a posh apartment building, and a grey-haired man comes downstairs once you tell him you have a package for him over the intercom.');
  scene.text('"Excellent, right on time for tonight! Thank you!" he smiles. You have him sign as per usual, and are just about to walk away when you suddenly feel his hand on your shoulder.');
  scene.text('"Uhh, excuse me miss... Could I ask you for a favor?" he asks. You can tell he\'s nervous. "You see... It\'s for my wife. Our love life has been rather stale, and I\'m hoping to breathe some new life into our relationship with this. It\'s an anniversary gift."');
  scene.text('He pats his hand on the parcel. "I\'m not 100% sure if I ordered the right size, though! You look like you\'re roughly her size. Would yo- Would you mind trying it on?" he stutters nervously. "She\'d kill me if I got it wrong!"');
  qspCall(s, 'willpower', 'exhib', 'resist', 'easy');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse and continue your round', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse and continue your round', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('"No! How would your wife feel if she knew another girl had put those clothes on before her?" you reply.');
    scene.text('The man doesn\'t bother to object and closes the door dejectedly before you continue on your round.');
    scene.actions([
      { label: 'Continue your round', goto: ['post_deliveries', 'resume'] },
    ]);
  } },
    ]);
  }
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask him what\'s in the parcel', handler: (st: GameState) => {
    if (!(s as any).post_vars) (s as any).post_vars = {}; (s as any).post_vars['qw_1'] = 1;
    scene.text('"I don\'t know... Maybe. What did you buy your wife?" you ask.');
    scene.text('He shrugs. "It\'s lingerie. A fancy gown of sorts. I don\'t know, I think she\'d like it."');
    scene.text('He sees the hesitant look on your face. "You can change in the bathroom, I wouldn\'t see anything inappropriate! The gown will cover you up! Please, I\'m a married man! I only want to make my wife happy!" he splutters out.');
    scene.text('After a few seconds of palpable silence, he pleads. "Please? I just need to see how it fits. I really need this to go well... My marriage might depend on it! I\'m begging you!"');
    qspCall(s, 'willpower', 'exhib', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('"Sorry, but no. I really shouldn\'t. I have to go!" you reply.');
    scene.text('The man\'s shoulders sag a little and he closes the door dejectedly before you continue on your round.');
    scene.actions([
      { label: 'Continue your round', goto: ['post_deliveries', 'resume'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Say you would, but you have a job to do', handler: (st: GameState) => {
    if (!(s as any).post_vars) (s as any).post_vars = {}; (s as any).post_vars['qw_1'] = 2;
    scene.text('"That... sounds interesting, but I really don\'t have time," you apologize. "I still have some mail to deliver."');
    scene.text('He ponders for a few seconds. "How about you come back after you finish your round? My wife won\'t be home for a few more hours. Please?"');
    scene.text('"I\'ll think about it, but I really have to go now!" you say before continuing your round.');
    scene.actions([
      { label: 'Continue your round', goto: ['post_deliveries', 'resume'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter2(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).post_vars) (s as any).post_vars = {}; (s as any).post_vars['qw_2'] = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/postoffice/events/postevent2-1.jpg');
  scene.text('As you walk up some stairs to deliver a letter, you nearly bump into a drunk girl. "Hey, cutie!" she slurs and winks at you. "What brings you here?"');
  scene.text('"I uhh... I have a letter for Mr. Yanovich?" you reply.');
  scene.text('"Mr. Yanovich isn\'t wearing any clothes right now!" she laughs. "He\'s my boyfriend. Just give it to me, I\'ll make sure he gets it. Unless you want to come in for some fun...?"');
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Insist you have to hand it over personally', handler: (st: GameState) => {
    scene.text('"I\'m sorry miss, but I have to give it to him personally. Those are the rules," you tell her.');
    scene.text('"Whatever, I was trying to do you a favor!" she scoffs. "Arsen! Put on some pants and come to the door!" she yells upstairs.');
    scene.text('When you hear no response, she beckons you to follow her and enters the apartment. You find two guys: one who must be Arsen smoking a water pipe, and another man playing with a photo camera. They\'re both completely naked!');
    scene.text('"Arsen thought it\'d be fun if Maksim takes pictures while we fuck! He says I\'m too hot to not share with the world! Isn\'t he the sweetest?" she smiles at you. The man with the camera gives you an idle nod before going back to what he was doing, while Arsen puts the water pipe away and stands up.');
    scene.text('"Well well, who is this hottie? Is she joining us?" he asks his girlfriend. He seems quite into the idea.');
    scene.text('"Maybe! What do you think? Want to have some fun with us?" the girl grins as she puts her arm around Arsen\'s waist. "Don\'t worry about Maksim, he\'s only here to take photos."');
    qspCall(s, 'willpower', 'sex', 'resist', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse and ask him to sign', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse and ask him to sign', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('"Uhh, no. I just need you to sign here please?" you say while handing him the clipboard.');
    scene.text('Arsen signs for the letter while looking at you with a hint of disappointment. "Are you sure? I bet Jenya could show you a trick or two! You two really seem to hit it off..."');
    scene.text('His girlfriend nods eagerly and gives you a warm smile.');
    scene.text('"I\'m sure she could!" you laugh. "But I have a job to do."');
    scene.text('Jenya kisses her boyfriend passionately as you turn your back to them and head for the door. "Don\'t worry, babe. I\'ll take care of you!" she tells him. "Maksim, you ready?"');
    scene.text('The last thing you see before you close the door is Jenya dropping to her knees before Arsen.');
    scene.actions([
      { label: 'Continue your round', goto: ['post_deliveries', 'resume'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Ask if they can wait until you finish your round', handler: (st: GameState) => {
    if (!(s as any).post_vars) (s as any).post_vars = {}; (s as any).post_vars['qw_2'] = 2;
    scene.text('You point at your bag apologetically. "I can\'t right now. I still have some deliveries to do! Maybe I can come back when I\'m done with my round?"');
    scene.text('The girl looks at Arsen and smiles. "What do you think, babe? I can just give you a quick blowjob now and we\'ll play more when she\'s back? Please? I really like her!"');
    scene.text('Arsen looks you up and down again. He hates the idea of having to wait, but definitely wants you to join. He sits back down in his beanbag chair and shrugs. "Sure, I guess," he shrugs as he grabs the water pipe again. "Start sucking then."');
    scene.text('"Just a second, babe!" she tells him as she walks you to the door and gives you a wicked grin. "This is gonna be great! I can\'t wait to get my hands on you... See you soon!"');
    scene.text('She gives you a quick kiss on the lips before closing the door.');
    scene.actions([
      { label: 'Continue your round', goto: ['post_deliveries', 'resume'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/postoffice/events/postevent3-1.jpg');
  scene.text('"What?!" a man shouts in an annoyed voice when you ring the doorbell to an apartment in a well-off neighbourhood. When the door opens, you\'re looking at a man in his 30s who looks like a businessman.');
  scene.text('"Yeah? What do you want?" he shrugs. He doesn\'t even try to hide that he\'s ogling your body from top to bottom and not paying much attention to what you\'re saying.');
  scene.text('"I have a parcel for you, sir!" you tell him. "Sign here please? Sir?"');
  scene.text('The man looks at the parcel and sighs. "I ordered that months ago! You guys are terrible..."');
  scene.text('When you try to tell him that it\'s not your fault, he cuts you off. "Look, I\'m not even fucking that girl any more! Her parents moved away and took her with them when they found out about me. So desperate to protect their little girl..."');
  scene.text('He laughs and then looks at you closely. A creepy grin then appears on his face. "Say... Let me ask you something, girl. Do you like clothes?"');
  scene.text('"Are you kidding? Of course I like clothes!" you shrug. "What girl doesn\'t?"');
  scene.text('"Then I have a proposition for you! Come in for a moment," he grins. He steps aside and beckons you to enter his apartment.');
  qspCall(s, 'willpower', 'misc', 'resist', 'easy');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Just get his signature and leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Just get his signature and leave', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('This guy gives you the creeps! "Uhhh... I don\'t think so, sir. I just need you to sign here so I can be on my way..."');
    scene.text('The man smirks, but signs. "You\'d rather be poor, huh? Suit yourself."');
    scene.text('He slams the door shut before you can even say anything.');
    scene.actions([
      { label: 'Continue your round', goto: ['post_deliveries', 'resume'] },
    ]);
  } },
    ]);
  }
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask what he wants', handler: (st: GameState) => {
    if (!(s as any).post_vars) (s as any).post_vars = {}; (s as any).post_vars['qw_3'] = 1;
    scene.text('"Uhh... Why?" you ask. "What do you want?"');
    scene.text('He casts a quick look down to the street to make sure no one\'s listening in. "You say you love clothes? I love cute little girls like you. You get whatever\'s in this box if you suck my dick. I can guarantee that you\'ll want what\'s in this box. And I want that mouth on my cock. Win-win. So... Interested?"');
    qspCall(s, 'willpower', 'prostitution', 'resist', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Not interested', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Not interested', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('"I\'m not that kind of girl, sir. I just need you to sign here so I can be on my way," you reply.');
    scene.text('The man smirks, but signs. "Suit yourself."');
    scene.text('He slams the door shut before you can even say anything.');
    scene.actions([
      { label: 'Continue your round', goto: ['post_deliveries', 'resume'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Ask if you can come back after your shift', handler: (st: GameState) => {
    if (!(s as any).post_vars) (s as any).post_vars = {}; (s as any).post_vars['qw_3'] = 2;
    scene.text('Something about the way he says it makes it sound tempting... You still have a job to do, though...');
    scene.text('"I still have some deliveries to make. Is it okay if I come back when I\'m done?" you ask.');
    scene.text('"You know what? Sure. That way I can take my time with you. But just so you know: once you enter my house, you do what I want. Unconditionally. I don\'t want to hear a \'no\' or \'maybe\' out of you," he says resolutely. "Do we have a deal?"');
    scene.text('You feel a shiver run down your back.');
    qspCall(s, 'willpower', 'prostitution', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Change your mind', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Change your mind', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('"Oh. Then I don\'t think I\'ll be coming, sir. I just need you to sign here so I can be on my way."');
    scene.text('The man smirks at you, but signs where you ask him to and pulls the box out of your hands. "We\'ll see. That\'s what you girls all say until you get sick of the shitty underpaid jobs you\'re doing now and realize how much more comfortable your lives can be. Come find me if you change your mind, if you\'re brave enough..."');
    scene.text('He winks at you before slamming the door shut in your face.');
    scene.actions([
      { label: 'Continue your round', goto: ['post_deliveries', 'resume'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Say you\'ll be back when you\'re done', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Deal. I'll come back once I'm done," you reply. "I should be done around ' + fu...
    scene.text('"Deal. I\'ll come back once I\'m done," you reply. "I should be done around 15:00."');
    scene.text('"Heh... I can\'t wait. I have a feeling we\'re going to be good friends," he grins as he signs for his parcel. "See you then."');
    scene.actions([
      { label: 'Continue your round', goto: ['post_deliveries', 'resume'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter4(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/postoffice/sex/postevent4-1.jpg');
  scene.text('A rather sleazy looking man opens the door when you ring the bell, wearing nothing but a robe.');
  scene.text('He grins at you. "I haven\'t seen you on the job before..."');
  scene.text('Before you can say anything, he opens his robe and shows you his semi-erect cock. "If you know what\'s good for you, I want to feel those hands of yours on my cock within the next ten seconds, just like your colleagues have before you. Unless you want the postmaster to receive complaints about you opening and damaging mail during your round?"');
  scene.text('"Your mail is fine!" you exclaim.');
  scene.text('"Oh really?" he asks. "Does this look fine to you!?" He makes a big tear in the envelope and balls his fist to crumple it. "Because it sure as hell doesn\'t look fine to me!"');
  qspCall(s, 'willpower', 'misc', 'self', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'You don\'t care if he reports you', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'You don\'t care if he reports you', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'misc', 'self', 'hard');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    scene.text('"It was fine when I got here! Look... sign, don\'t sign, I don\'t care. The postmaster will believe my word over yours when he hears about this!" you tell him and see his confidence waver a little. "If <b>you</b> know what\'s good for you, you sign before this gets out of hand!"');
    scene.text('The man quickly regains his posture and scoffs. "We\'ll see who he believes! I\'m not signing shit unless you do what I want! And I happen to know the postmaster. If there\'s one thing he hates, it\'s complaints. So what\'s it gonna be, girl?"');
    scene.text('You take another good look at him, but you can\'t tell whether he\'s bluffing or not. From your dealings with the postmaster so far, you\'re not quite sure who he\'d believe either. Still, he always seemed like a reasonable man. Surely he\'d believe you?');
    qspCall(s, 'willpower', 'hj', 'resist', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Stick to your guns and leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Stick to your guns and leave', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    if (!(s as any).post_vars) (s as any).post_vars = {}; (s as any).post_vars['qw_4'] = 1;
    scene.text('Not saying another word, you turn around and leave his apartment. Hopefully you\'re right about the postmaster believing you...');
    scene.actions([
      { label: 'Continue your round', goto: ['post_deliveries', 'resume'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Back down and agree to jerk him off', goto: ['post_events', '4'] },
    ]);
  } },
    ]);
  }
  qspCall(s, 'willpower', 'hj', 'resist', 'easy');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Run away from him', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Run away from him', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'hj', 'resist', 'easy');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    if (!(s as any).post_vars) (s as any).post_vars = {}; (s as any).post_vars['qw_4'] = 1;
    scene.text('You don\'t like where this is going at all! Deciding you\'re better off leaving his apartment while you still can, you bolt for the door and run away. You don\'t trust him one bit... Who knows what kind of other things he\'d make you do?!');
    scene.text('Once you\'re a few houses away, you look behind you, but realize there\'s no way he can follow you, not with the way he was dressed.');
    scene.text('You take a deep breath and look at your clipboard to see where you have to go next while you try to put the guy out of your head. One signature will be missing from your list today, but surely the postmaster will understand when you explain what happened?');
    scene.actions([
      { label: 'Continue your round', goto: ['post_deliveries', 'resume'] },
    ]);
  } },
    ]);
  }
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Beg him to not go through with it', handler: (st: GameState) => {
    scene.img('images/locations/shared/postoffice/sex/postevent4-2.jpg');
    scene.text('"Please sir, I don\'t want to do this! You know this is wrong! Couldn\'t you please just sign and let me go?" you beg, but he ignores your pleas and comes closer to you.');
    scene.text('His cock is now fully erect, and some precum is leaking from the tip. He must be getting off on bullying you!');
    scene.text('"Don\'t be afraid, girl! Go ahead and touch it, just like your colleagues have before you," he grins. "It would only take a minute, and then you can be on your way with your perfect record intact. Otherwise, I\'ll just have to get you fired and hope the next girl does want to do what it takes to keep her job..."');
    qspCall(s, 'willpower', 'hj', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse and run away', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse and run away', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    if (!(s as any).post_vars) (s as any).post_vars = {}; (s as any).post_vars['qw_4'] = 1;
    scene.text('As he slowly comes closer to you, you decide to quickly leave his apartment and run away while you still can. Who knows what else he\'d make you do!?');
    scene.text('Once you\'re a few houses away, you look back, but realize there\'s no way he can follow you the way he was dressed. You take a deep breath and look at your clipboard to see where you have to go next. One signature will be missing from your list today, but surely the postmaster will understand?');
    scene.actions([
      { label: 'Continue your round', goto: ['post_deliveries', 'resume'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Do as he says and jerk him off', goto: ['post_events', '4'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter5(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/postoffice/events/postevent5-1.jpg');
  scene.text('You\'ve just finished your round and are on your way back to the post office when you encounter a small group of guys chatting outside a hostel.');
  scene.text('When you walk past them, one of them greets you. "Excuse me? Hi! We\'re not from here, we\'re just visiting for the weekend. Would you like to sit down and hang out with us for a while? You look like you could use a break!"');
  scene.text('Another guy pitches in. "We were hoping you could point us to some interesting things to do around here? We got rooms for the whole weekend, but besides the palace this place seems pretty boring!"');
  if (((s as any).post_vars ?? 0)?.['load'] === 0) {
    scene.text('You cast a quick glance at your phone and realize you have some time to spare.');
  }
  if (((s as any).post_vars ?? 0)?.['load'] === 1) {
    // TODO-QSP: dynamic text: You cast a quick glance at your phone and realize you'd roughly be back at the p...
    scene.text('You cast a quick glance at your phone and realize you\'d roughly be back at the post office by 15:00. You can\'t stick around for too long though...');
  }
  if (((s as any).post_vars ?? 0)?.['load'] === 2) {
    scene.text('You cast a quick glance at your phone and realize you\'re already behind schedule. You should probably keep going...');
  }
  if (((s as any).post_vars ?? 0)?.['load'] === 0) {
    qspCall(s, 'willpower', 'misc', 'resist');
  } else {
    qspCall(s, 'willpower', 'misc', 'resist', 'easy');
  }
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'You have no time', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'You have no time', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('"Sorry guys, but I have mail to deliver! No time to chat!" you say and keep walking.');
    scene.text('You were afraid they were going to be more insistent, but they leave you alone.');
    scene.actions([
      { label: 'Continue your round', goto: ['post_deliveries', 'resume'] },
    ]);
  } },
    ]);
  }
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Chat with them for a while', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.img('images/locations/shared/postoffice/events/postevent5-2.jpg');
    scene.text('"Uhh yeah, I can spare a few minutes," you say and the guys give you a friendly smile and escort you into the building.');
    scene.text('They lead you to their room where they all sit on their bunk beds. You get to know the guys a little and learn that they\'re tourists from Novgorod who were told there was a lot to do in Pavlovsk.');
    scene.text('One of the guys leaves the room before returning with a tray of beers. He offers you one too. "I know you have to get back to work, but one for the road?"');
    scene.actions([
      { label: 'Not while you\'re working', handler: (st: GameState) => {
    if (!(s as any).post_vars) (s as any).post_vars = {}; (s as any).post_vars['qw_5'] = 1;
    scene.text('If the postmaster had even the slightest suspicion you were drinking on the job, he\'d fire you for sure!');
    scene.text('"I really shouldn\'t. Thanks for the offer, though!" you reply, declining the beer.');
    scene.text('The guys chat with you for a few more minutes and you tell them about things they can do in Pavlovsk during their stay, but they don\'t seem particularly interested in any of your suggestions. One of them then very subtly shakes his head at the others. You were probably not supposed to see that...');
    scene.text('One of the others interrupts you. "Well, it\'s been nice getting to know you, but we shouldn\'t keep you from your work any longer. Are you done any time soon? Perhaps you could guide us around town later? We\'d love to hang out with you some more!"');
    scene.text('Taking this as your cue to leave, you pick up your bag. "I\'ll think about it. Bye guys!"');
    scene.actions([
      { label: 'Continue your round', goto: ['post_deliveries', 'resume'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter6(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('During your delivery round, you have to do a lot of walking. Today\'s round is particularly bad; the addresses all seem very far apart from one another and it feels like your bag is heavier than usual too. Your feet are begging you for a break...');
  if (((s as any).post_vars ?? 0)?.['load'] === 0) {
    qspCall(s, 'willpower', 'misc', 'resist');
  } else {
    qspCall(s, 'willpower', 'misc', 'resist', 'easy');
  }
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'No time', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'No time', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'pain', '', 3, 'feet', 'ache');
    qspCall(s, 'mood', 'lower', 'small');
    qspCall(s, 'stat', '');
    scene.text('Even though you\'d love to sit and rest for a minute, you decide it\'s better to just deliver your mail first. You can relax when you\'re done.');
    scene.text('You ignore your aching feet and keep walking to your next address, and the one after that. You try to not let your feet slow you down, but the pain gets worse the longer you ignore it.');
    scene.text('You get used to it over time, but the constant nagging pain slowly wears down your mood as you continue your round.');
    scene.actions([
      { label: 'Continue', goto: ['post_deliveries', 'resume'] },
    ]);
  } },
    ]);
  }
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Take a five minute break', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).petrand = Math.floor(Math.random() * 100) + 1;
    if (((s as any).petrand ?? 0) <= 30) {
      qspCall(s, 'mood', 'raise', 'tiny');
      qspCall(s, 'stat', '');
      scene.text('You sit down and take in your surroundings for a few minutes, simply enjoying watching the passers-by go about their day. When you stand up to resume your round, you feel more relaxed and energized, ready to take on the world again.');
    } else {
      if (((s as any).petrand ?? 0) <= 60) {
        qspCall(s, 'mood', 'raise', 'small');
        qspCall(s, 'stat', '');
        scene.img('images/locations/shared/postoffice/petcat.jpg');
        scene.text('You decide to sit down and take a break for a few minutes to give your aching feet some respite.');
        scene.text('A grey cat looks curiously at you, and walks over when you remain seated. You spend a few minutes petting the happily purring cat and feel more relaxed when you stand up to continue your round.');
      } else {
        if (((s as any).petrand ?? 0) <= 90) {
          qspCall(s, 'mood', 'raise', 'small');
          qspCall(s, 'stat', '');
          scene.img('images/locations/shared/postoffice/petdog.jpg');
          scene.text('You decide to sit down and take a break for a few minutes to give your aching feet some respite.');
          scene.text('A friendly couple walking their dog happily chat with you for a few minutes as you pet the dog.');
          scene.text('You feel great when you stand up to continue your round.');
        } else {
          qspCall(s, 'mood', 'raise', 'large');
          qspCall(s, 'stat', '');
          scene.img('images/locations/shared/postoffice/catgirl.jpg');
          scene.text('You decide to sit down and take a break for a few minutes to give your aching feet some respite.');
          scene.text('Not long after you sit down, a cute girl with cat ears walks by! She waves happily at you before walking up to you.');
          scene.text('She turns out to have a very happy and bubbly personality, and enthusiastically talks to you about trivial things while you take your break.');
          scene.text('Her cheerful nature spreads to you as the two of you talk, and you feel great by the time the two of you part ways. You resume your round with a slight spring in your step.');
        }
      }
    }
    scene.actions([
      { label: 'Resume your round', goto: ['post_deliveries', 'resume'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter7(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/postoffice/window.jpg');
  scene.text('Continuing along your route, you manage to catch a glimpse of a woman at a nearby window, looking out over the street expectantly. She\'s completely naked! You wonder who she\'s waiting for...');
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['post_deliveries', 'resume'] },
  ]);
  scene.build();
}

function enter8(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/postoffice/streets.jpg');
  scene.text('Another set of houses down, another street of mail to be delivered. You only get halfway down this row of buildings before you hear the ripping of threads and a firm tug against your bag. You look behind you to spot the nail that tore open your bag and the pile of letters that have fallen out onto the ground.');
  scene.text('Sighing, you bend down and spend a few minutes hunting them all down and cramming them back into your broken bag. As you stand up to resume your round, you realize that you now have to constantly make sure you don\'t lose anything. That\'s definitely going to slow you down for the rest of the day!');
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Resume your round', goto: ['post_deliveries', 'resume'] },
  ]);
  scene.build();
}

function enter9(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'lower', 'medium');
  (s as any).pcs_hairbsh = 0;
  if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
    (s as any).pcs_makeup = 0;
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/postoffice/splashed.jpg');
  scene.text('One house down, two houses down. You\'re on a roll with this set of houses and feel like nothing can hold you back!');
  scene.text('A car driver seems to have other ideas, however. You swear he aimed for that puddle, dousing you in a huge spray of dirty, cold water.');
  scene.text('You might be able to pull off the wet T-shirt look nicely, but this definitely put a dampener on your day!');
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['post_deliveries', 'resume'] },
  ]);
  scene.build();
}

function enter10(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).temper ?? 0) > 0) {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/shared/postoffice/angrydog.jpg"...
    scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/shared/postoffice/angrydog.jpg"></center>`);
  }
  if (((s as any).temper ?? 0) <= 0) {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/shared/postoffice/angrydogw.jpg...
    scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/shared/postoffice/angrydogw.jpg"></center>`);
  }
  scene.text('As you arrive at your next address, you see a large dog baring its teeth as soon as you reach for the gate. There\'s no way you\'re opening that!');
  scene.text('You cast a quick glance at your signature sheet and realize that you can\'t ignore this house.');
  scene.text('Wait, did you just see someone moving indoors?');
  if (((s as any).pcs_intel ?? 0) > 60) {
    scene.actions([
      { label: 'Go around the back', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    scene.text('You quickly spot that the front and back yards aren\'t connected, and try to go around the back after counting out which house you need to be at.');
    scene.text('The home owner is a bit startled to see you suddenly entering her back yard, but understands. "Oh don\'t worry about Boomer! I know he looks scary, but he just wants to play!"');
    scene.text('She signs for her mail so you can continue your round. You can still hear the dog barking angrily when you leave the street. No matter what that lady says, there\'s no way you would enter that yard!');
    scene.actions([
      { label: 'Continue your round', goto: ['post_deliveries', 'resume'] },
    ]);
  } },
    ]);
  }
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Try to draw the attention of the dog\'s owner', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('It takes a good while for the person in the house to finally realize you need to talk to them, and after a few minutes a woman comes out with an apologetic smile.');
    scene.text('"I\'m so sorry, he\'s usually never like this! He probably just wants to play!" she says as she finally signs for her mail.');
    scene.text('You manage to get her signature, but that did set you back a few minutes...');
    scene.actions([
      { label: 'Continue your round', goto: ['post_deliveries', 'resume'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter11(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'mood', 'lower', 'small');
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/postoffice/shops.jpg');
  scene.text('You come up to a block of rather shoddy looking stores, where you have to deliver a small package. For whatever reason, the numbers on the posters don\'t seem to align with the address numbers.');
  scene.text('Despite your best efforts, finding the place is a struggle. The store owners aren\'t very helpful either, just shrugging and grunting when they realize you\'re not there to buy something from them.');
  scene.text('At long last, you find a staircase leading up to a shabby office. The man looks at you as if he doesn\'t have time. "You\'re late," he mutters. "I needed this an hour ago! Leave now so I can work!"');
  scene.text('After some convincing, he finally signs so you can leave, but only after complaining about how late you are once more. What a jerk...');
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue your round', goto: ['post_deliveries', 'resume'] },
  ]);
  scene.build();
}

function enter12(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if ((((s as any).daystart ?? 0)-((s as any).NatbelQW ?? 0)?.['pregday']) > 90  &&  ((s as any).NatbelQW ?? 0)?.['pregday'] > 0) {
    if ((((s as any).daystart ?? 0)-((s as any).NatbelQW ?? 0)?.['pregday']) < 200) {
      scene.img('images/characters/pavlovsk/school/girl/natasha/16(2).jpg');
    } else {
      scene.img('images/characters/pavlovsk/school/girl/natasha/16(3).jpg');
    }
  } else {
    scene.img('images/characters/shared/headshots_main/big16.jpg');
  }
  if (((s as any).NatbelQW ?? 0)?.['chrispaid'] >= 3) {
    scene.text('Your next address is a familiar one: it\'s Natasha Belova\'s, one of your classmates. It looks like you have bad news for her; it\'s not one but <i>two</i> final notices addressed to her mother! Damn, how much debt is this family in?!');
  } else {
    scene.text('Your next address is a familiar one: it\'s Natasha Belova\'s, one of your classmates. It looks like you have bad news for her; it\'s not one, but <i>two</i> final notices! Damn, how much debt is this girl in?!');
  }
  // TODO-QSP: dynamic text: Natasha opens the door and smiles when she sees you. "Hi, <<$pcs_nickname>>! Oh....
  scene.text(`Natasha opens the door and smiles when she sees you. "Hi, ${((s as any).pcs_nickname || '')}! Oh... Oh, not again!"`);
  scene.text('Her face saddens and some tears start to well in her eyes as she signs your sheet. She then weakly waves you goodbye, feeling rather ashamed that you saw her in this predicament.');
  if (((s as any).NatbelQW ?? 0)?.['Debt'] > 0) {
    scene.actions([
      { label: 'Remind her she still owes you money too', handler: (st: GameState) => {
    scene.text('"I hope this doesn\'t mean you ignore your debt to me?" you ask her sternly.');
    // TODO-QSP: dynamic text: She bites her lip and shakes her head. "I... I won't, <<$pcs_nickname>>. I'll fi...
    scene.text(`She bites her lip and shakes her head. "I... I won't, ${((s as any).pcs_nickname || '')}. I'll find a way to repay you."`);
    scene.text('"Good," you give her a satisfied nod and leave her apartment.');
    if (((s as any).NatbelQW ?? 0)?.['QWstage'] >= 5) {
      scene.text('You smile evilly as you walk down the stairs, replaying her words over and over in your mind. "I\'ll find a way to repay you!" she said... You can think of several ways! Whether she\'ll like them is a different matter...');
    }
    scene.actions([
      { label: 'Continue your round', goto: ['post_deliveries', 'resume'] },
    ]);
  } },
    ]);
  }
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Stay a few minutes and try to cheer her up', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'npc_relationship', 'modify', 'A16', 'adore');
    qspCall(s, 'stat', '');
    scene.text('She really looks like she could use a friend right now.');
    scene.text('"Natasha, wait!" you say and put your foot between the door so she can\'t close it.');
    scene.text('She doesn\'t have the energy to object when you enter her apartment, and you take her by the shoulder and chat with her for about ten minutes.');
    scene.text('By the end, you can see a faint smile on her face again. It may not make her problems go away, but at least you made her feel a bit better.');
    scene.actions([
      { label: 'Continue your round', goto: ['post_deliveries', 'resume'] },
    ]);
  } },
    { label: 'Continue your round', goto: ['post_deliveries', 'resume'] },
  ]);
  scene.build();
}

function enter13(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big112.jpg');
  scene.text('Your next letter is for someone you know: it\'s uncle Sergey. You walk up the familiar stairs to the third floor and ring the doorbell, and sure enough he opens a few seconds later.');
  // TODO-QSP: dynamic text: "Hi, <<$pcs_firstname>>! What can I do for you?" he says while giving you a conf...
  scene.text(`"Hi, ${((s as any).pcs_firstname || '')}! What can I do for you?" he says while giving you a confident smile. "Oh, you deliver mail nowadays, right?"`);
  scene.text('You nod and give him his mail in exchange for a signature. He then waves you off and slowly closes the door behind him.');
  if (((s as any).momslut ?? 0) >= 1) {
    scene.text('Just before he closes the door completely, you swear you see your mother walking through Sergey\'s apartment wearing nothing but a towel! Her hair looked rather disheveled too...');
  } else {
    scene.text('Just before he closes the door completely, you see a nude girl walking through Sergey\'s apartment! You didn\'t get a good enough look to see who it is though...');
  }
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue your round', goto: ['post_deliveries', 'resume'] },
  ]);
  scene.build();
}

function enter14(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big28.jpg');
  scene.text('The next package is for... your stepfather? You didn\'t know he ordered anything!');
  // TODO-QSP: dynamic text: "Oh hi, <<$pcs_nickname>>!" he says as he sees you. "Why did you ring the doorb-...
  scene.text(`"Oh hi, ${((s as any).pcs_nickname || '')}!" he says as he sees you. "Why did you ring the doorb- ooooh! Shhh! Give me that!"`);
  scene.text('He quickly pulls the package out of your hands and holds it behind his back as your mother comes into the hallway.');
  // TODO-QSP: dynamic text: "What are you doing here, <<$pcs_nickname>>? I thought you were working?" she as...
  scene.text(`"What are you doing here, ${((s as any).pcs_nickname || '')}? I thought you were working?" she asks while eyeing you up and down suspiciously.`);
  scene.text('Your stepfather gives you a desperate smile, hoping you\'ll cover for him. He clearly didn\'t mean for your mother to find out about this package.');
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell her you forgot something', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A28', 5);
    qspCall(s, 'stat', '');
    scene.text('"I forgot my phone," you smile. "I ended up in the area on my round and quickly came by to grab it."');
    // TODO-QSP: dynamic text: "You can be such a scatterbrain sometimes, <<$pcs_nickname>>!" she replies and r...
    scene.text(`"You can be such a scatterbrain sometimes, ${((s as any).pcs_nickname || '')}!" she replies and returns to the kitchen.`);
    // TODO-QSP: dynamic text: Your stepfather gives you a grateful nod as he signs your sheet. "Thanks, <<$pcs...
    scene.text(`Your stepfather gives you a grateful nod as he signs your sheet. "Thanks, ${((s as any).pcs_nickname || '')}..." he whispers. "I don't want your mother knowing I bought her this. I'm waiting for the right time to surprise her with it."`);
    scene.text('You give him a conspiratory nod and turn to leave. As you walk down the stairs, you can\'t help but wonder what he bought her.');
    scene.actions([
      { label: 'Continue your round', goto: ['post_deliveries', 'resume'] },
    ]);
  } },
    { label: 'Tell her you\'re delivering a package', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A28', (-5));
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: "I am, <<$npc_nickname['A29']>>. I was just delivering a pac-" you say, but your...
    scene.text(`"I am, ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''}. I was just delivering a pac-" you say, but your stepfather quickly puts his hand over your mouth out of your mother's view.`);
    scene.text('"She forgot her phone!" he quickly blurts out and you hear your mother laugh from the hallway.');
    scene.text('"That daughter of mine can be such a scatterbrain sometimes!" she replies before you hear her returning to the kitchen.');
    scene.text('"What\'s wrong with you?! Your mother doesn\'t know I bought this because I want to surprise her with it!" your stepfather grumbles, clearly annoyed about you nearly ruining his surprise.');
    scene.text('He quickly signs your sheet and slams the door shut. As you walk down the stairs, you can\'t help but wonder what he bought.');
    scene.actions([
      { label: 'Continue your round', goto: ['post_deliveries', 'resume'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter15(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/postoffice/postdoor.jpg');
  scene.text('A rather scary looking guy opens the door at your next address, an apartment on the fourth floor of a building. He has a scar across his eye and gives you a distrusting look.');
  scene.text('"I have a package for Mr. Y-" you begin, but he interrupts you.');
  scene.text('"Did anyone follow you?" he asks sharply. "Well?"');
  scene.text('When you shake your head, he glances down the hallway and asks again. "Are you sure? Think hard!"');
  scene.text('He pulls the package out of your hands when you take too long to answer and opens it right away. The contents bring a smile to his face, though you can\'t see what\'s in it.');
  scene.text('"You didn\'t see me!" he says threateningly. "If anyone asks, you saw nothing, heard nothing and met no one! Understood?!"');
  scene.text('You just nod and he grunts. "Good. Now get lost!"');
  scene.text('When he turns around, you can see the clear outline of a gun in his jacket. You definitely don\'t want to bother him again, so you quickly forge a signature on your sheet and walk down the stairs again. There\'s no way you\'ll get complaints about this package, but you can\'t help but wonder why he was so paranoid. And rather: what you just brought him!');
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue your round', goto: ['post_deliveries', 'resume'] },
  ]);
  scene.build();
}

function enter16(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'lower', 'large');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/postoffice/postclinic.jpg');
  scene.text('The next address is the Pavlovsk clinic. The girl at the reception desk looks at you for a second. "Oh, mail. That\'s for the doctor. He\'s in his office, third door on the right. Could you go bring it to him? I\'m sort of busy right now."');
  scene.text('You shrug and walk down the hallway, opening the door where she said he\'d be. You freeze...');
  scene.text('In front of you are two people on metal tables. One male, one female. Both naked. And very much dead. This must be some sort of mistake! They can\'t possibly expect you to come in here!');
  scene.text('As you back out of the room, the receptionist comes racing down the hall, out of breath. "I meant the second door on the right! The second door! I\'m so sorry!"');
  scene.text('"Uhh, t-that\'s okay..." you mutter, still rather rattled.');
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Let the girl take you to the doctor\'s office', handler: (st: GameState) => {
    scene.img('images/locations/shared/postoffice/doclaugh.jpg');
    scene.text('"Oh, she sent you to the wrong room?" the doctor laughs when the receptionist explains why you look so pale. "That wasn\'t very smart of you, Tanya!"');
    scene.text('He signs your form without giving it another thought and dismisses you. Your heart is still pounding when Tanya walks you out of the clinic, apologizing all the way.');
    scene.text('The image of those dead people will be haunting you for a while...');
    scene.actions([
      { label: 'Continue your round', goto: ['post_deliveries', 'resume'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter17(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/postoffice/boundgirl.jpg');
  scene.text('At your next address, your pen appears to have run out of ink when the man is supposed to sign.');
  scene.text('"Ugh. Come on in," he grunts. "I should have a spare pen somewhere you can have."');
  scene.text('Just as you\'re about to thank him, you\'re taken aback by what you see when you enter his apartment: a nearly naked girl lies on the couch, with her wrists and ankles cuffed together.');
  scene.text('"Don\'t mind her," the guy grins smugly. "The silly cunt couldn\'t keep her mouth shut, and now she\'s being punished. Isn\'t that right, honey?"');
  scene.text('The girl doesn\'t make a sound, but just looks at you with her big blue eyes. You can tell that she\'s deeply embarrassed to be seen like this, but doesn\'t seem to be in distress.');
  scene.text('"The guys are on their way. You just lie there and be pretty for a while!" he smirks before he turns back to you. "I swear she does it on purpose! Horny little bitch... Anyway, here\'s a pen. You can keep that. Have a nice day, miss."');
  scene.text('He ushers you out the door and you quickly cast one more glance at the girl on your way out. You wonder what he has in store for her...');
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue your round', goto: ['post_deliveries', 'resume'] },
  ]);
  scene.build();
}

function enter18(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/postoffice/stonedgirl.jpg');
  scene.text('You can already faintly smell the marijuana as you approach the house. When you knock on the door, a completely nude girl opens it almost immediately.');
  scene.text('If walls of smell existed, you just got hit by one. The smell is impossible to ignore and it\'s making your eyes tear up.');
  scene.text('"Uhh... Hi. I, uhhh... I have mail for you..." you stumble as you rub the tears from your eyes and ogle the girl\'s nude body.');
  scene.text('She just grins, seemingly not insulted in the slightest. "No need to be embarrassed, sweetie! Take it in... Look as much as you want. I have nothing to hide! Especially not from a cutie like you..."');
  scene.text('She has another puff of her cigarette and blows the smoke away with a seductive smile on her face while striking a pose and idly starts kneading her breast.');
  scene.text('"Damn, you\'re no fun..." she groans mockingly when you get her to sign so you can be on your way. "Are you sure you don\'t want to come in for a little while? You seem stressed. I bet I could help you relax..."');
  scene.text('You respectfully decline the offer and turn around to continue your round. You\'d swear you feel a bit wobbly just from standing near that house for so long!');
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue your round', goto: ['post_deliveries', 'resume'] },
  ]);
  scene.build();
}

function enter19(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (15);
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/postoffice/postcock.jpg');
  scene.text('The door swings open at your next address before you can even ring the doorbell. You have to do a quick double-check when you see who opened the door; the man is naked, and what a man he is! His body looks about as perfectly chiseled as a man\'s body can get, and a humongous semi-hard cock swings between his legs.');
  scene.text('He scratches his throat insistently and you suddenly realize that you\'ve been staring at his cock!');
  scene.text('"Wow... I err... I have mail... so uhh... Yeah!" you blabber, still unable to take your eyes off his body.');
  scene.text('The man laughs and takes your clipboard out of your hands while you just stand there. "Should I look for my mail in your bag, or...?"');
  scene.text('You quickly snap back to reality and mutter an apology while you find his mail.');
  scene.text('"Thanks! You have a nice day, miss!" he says, giving you a friendly nod before closing the door again.');
  scene.text('You bury your head in your hands for a moment and let out a deep sigh; what must that man be thinking of you right now?! That was definitely not your proudest moment...');
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue your round', goto: ['post_deliveries', 'resume'] },
  ]);
  scene.build();
}

function enter20(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/postoffice/hugeman.jpg');
  scene.text('Your next address is in a really run-down part of town; a lot of people you know refuse to go here because of how dangerous it can be.');
  scene.text('You arrive at the apartment building and climb the stairs. The light in the stairwell is broken, so you have to get by using the light that comes in through a window at the end of the hallway. On top of that, some burly looking guys are blocking your path.');
  scene.text('You squeeze your way past them as best you can, trying your best not to offend them.');
  scene.text('"Excuse me, miss. You dropped these," you hear a deep voice behind you. One of the men is holding a few envelopes in his huge fist as he gives you a friendly smile. You thank him and continue on your way to your destination.');
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/postoffice/oldlady.jpg');
    scene.text('You find your address at the end of the hallway and an elderly lady promptly opens the door.');
    scene.text('"Hello dear! Come in, I just made tea!" she says with a mostly toothless grin, ignoring the envelope in your hand. "Go on, sit! It\'s so nice to finally get a visitor..." she sighs and guides you into a chair with surprising strength for a woman of her age.');
    scene.text('The tea she hands you is scalding hot, so you chat about trivial things while testing to see if it\'s safe to drink yet.');
    scene.text('You\'re wasting time here, but the lady seems happy to have a visitor, so you don\'t dare get up until you finish the tea.');
    scene.text('"Thank you, but I really have to go!" you smile apologetically as you see her preparing to pour you another cup.');
    scene.text('"You youngsters are always on the move!" she laughs heartily before offering you a small paper bag. "Here, at least take some cookies! You look like you could use a snack for the road!"');
    scene.text('The burly guys give you a friendly nod on your way out of the building, wishing you a good day. Maybe this area isn\'t so bad after all... And those cookies are really good, too!');
    scene.actions([
      { label: 'Continue your round', goto: ['post_deliveries', 'resume'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter21(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/postoffice/girltail.jpg');
  scene.text('"I have a delivery for uhhh... \'Hot Tails\'?" you ask when the door opens, reading the name off your sheet. That can\'t be right...');
  scene.text('"It\'s here already!" the girl squeals. She\'s wearing a maid outfit for some reason. "This is so awesome!" She grabs the package out of your hand and runs into the house, completely ignoring you.');
  scene.text('"Miss? You still need to sign! Miss?!" you shout after her, but hear no response. With a deep sigh, you enter the house.');
  scene.text('You find the girl on a bed, wearing a butt plug with a tail attached to it. She\'s still panting with pleasure, likely having just put it in. Her pussy looks slick with her juices - she\'s incredibly aroused right now.');
  scene.text('"My new tail! Isn\'t it adorable? I\'m so happy right now! Master will be so happy, too! You\'re the best!" she squeals again, besides herself with happiness. She moves her bare ass back and forth, making it look like she\'s wagging her tail at you.');
  scene.text('You\'re not entirely surprised when you see her signature looks exactly like a cat\'s paw.');
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue your round', goto: ['post_deliveries', 'resume'] },
  ]);
  scene.build();
}

function enter22(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/postoffice/manorman.jpg');
  scene.text('Your next stop is one of the luxury mansions by the lake. The driveway is very long, but since you need someone to sign, you can\'t just leave their mail in the box by the road.');
  scene.text('As you\'re about to start your trek, you\'re startled to see a young man swiftly vault over the wall. He\'s dressed only in his underwear.');
  scene.text('"Hello there, miss!" he smiles charmingly through his panting. "Would you be so kind as to tell me the fastest way to... Anywhere but here, really?"');
  scene.text('You hear some commotion and see an older man storming down the driveway as a much younger and very attractive looking woman clutching a towel against her naked body screams from the door. You give the strange man directions to the train station and he thanks you before quickly running off.');
  scene.text('"Where is that bastard?!" the older man yells when he finally reaches you. "You, girl! Did you see where he went?!"');
  scene.text('You just shrug and offer him his mail. He signs absent-mindedly while scanning the street before glaring back at the young woman you assume is his wife.');
  scene.text('You\'re fairly certain you have a good idea of what just happened, but don\'t have time to get into it. Leaving the man behind, you continue on your round.');
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue your round', goto: ['post_deliveries', 'resume'] },
  ]);
  scene.build();
}

function enter23(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  if (((s as any).temper ?? 0) > 0) {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/shared/postoffice/voyeur.jpg"><...
    scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/shared/postoffice/voyeur.jpg"></center>`);
  }
  if (((s as any).temper ?? 0) <= 0) {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/shared/postoffice/voyeurw.jpg">...
    scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/shared/postoffice/voyeurw.jpg"></center>`);
  }
  qspCall(s, 'stat', '');
  scene.text('On the way to your next address, you pause for a second when you hear a giggle coming from behind some trees.');
  scene.text('Curious as to what\'s going on, you push aside a few branches and get an eyeful of a girl\'s ass! Her pants and panties are around her knees and she\'s grinning proudly at her boyfriend... until she sees you.');
  scene.text('"Eeeep!" she squeaks and quickly pulls her pants up.');
  scene.text('You giggle and keep walking, realizing the show\'s over. You can hear the two of them bickering as you continue on your way.');
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue your round', goto: ['post_deliveries', 'resume'] },
  ]);
  scene.build();
}

function enter24(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/postoffice/mailbox.jpg');
  scene.text('As you\'re walking through the posh area of town, you see the strangest mailbox! Whoever lives here must have a lot of money, if even their mailbox is this fancy...');
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue your round', goto: ['post_deliveries', 'resume'] },
  ]);
  scene.build();
}

function enter25(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/postoffice/domme.jpg');
  scene.text('You knock on the door several times, but no one answers. Still, you know someone\'s home - you can clearly hear activity indoors.');
  scene.text('Just when you\'re about to give up, the door finally opens. The woman who opened it is panting slightly; her hair is a bit disheveled and she looks all sweaty, but the first thing you notice is her attire: all leather, and very revealing!');
  scene.text('You can\'t help but check out the rest of her outfit before you notice the enormous strap-on she\'s wearing. She\'s playfully bobbing it up and down with a whip. "Yeah? What do you want?" she asks in a demanding tone.');
  scene.text('When you don\'t respond quickly enough, she coughs insistently. "My eyes are up here, girl! Make it quick, I have things to do!"');
  scene.text('She gives you a scolding look and you feel yourself shrinking in front of her...');
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Apologize and give her her mail', handler: (st: GameState) => {
    scene.text('"I have a package for... Mistress Madeline?" you mumble. "That\'s you, right? I\'m sorry, I jus-"');
    scene.text('"That\'s me," she interrupts. "Excellent timing! He was so proud he could just about take this one... This\'ll take him down a few pegs!" she grins and quickly signs for the package. "Thanks, dear."');
    scene.text('Surely she\'s not talking about the strap-on? Judging from the size of the package, it\'s even larger than the strap-on she\'s wearing now!');
    scene.text('She quickly closes the door while tearing the box open. You can hear her voice through the door. "The Black Stallion I ordered just arrived, sweetie! I hope you\'re ready!"');
    scene.actions([
      { label: 'Continue your round', goto: ['post_deliveries', 'resume'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter26(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/postoffice/smallboy.jpg');
  scene.text('During your round, you suddenly feel a gentle tug on your bag and hear a soft voice behind you. "Uhhh... Excuse me, miss?"');
  scene.text('When you turn around, you see nothing until you look down; there\'s a small boy, holding a note with a big pink heart on it.');
  scene.text('"You deliver notes, right?" he asks. When you nod, he continues. "Could you deliver this note, please? It\'s for that girl over there!"');
  scene.text('He points in a general direction, where you see a girl his age walking on the other side of the street with her mother. They move around the corner and disappear from sight.');
  if (((s as any).post_vars ?? 0)?.['load'] === 0) {
    qspCall(s, 'willpower', 'misc', 'resist', 'hard');
  } else {
    qspCall(s, 'willpower', 'misc', 'resist');
  }
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Decline and say you\'re in a hurry', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Decline and say you\'re in a hurry', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('"Sorry kid, but I don\'t have time to deliver your note. Very busy day today!" you shrug and keep walking.');
    scene.text('The boy\'s shoulders sag and he looks sadly at the note he has in his hand.');
    scene.actions([
      { label: 'Continue your round', goto: ['post_deliveries', 'resume'] },
    ]);
  } },
    ]);
  }
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Deliver the note for him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'mood', 'raise', 'small');
    qspCall(s, 'money', 'earn', 100);
    qspCall(s, 'stat', '');
    if (((s as any).temper ?? 0) > 0) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/shared/postoffice/smallgirl.jpg...
      scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/shared/postoffice/smallgirl.jpg"></center>`);
    }
    if (((s as any).temper ?? 0) <= 0) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/shared/postoffice/smallgirlw.jp...
      scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/shared/postoffice/smallgirlw.jpg"></center>`);
    }
    scene.text('"Of course, sir! Give me the note and I\'ll go bring it straight to her!" you tell him.');
    scene.text('The boy gives you the note with a huge smile on his face. You quickly walk in the direction you last saw the woman and her daughter go.');
    scene.text('You lose track of them for a moment, but after a quick search you see them again. "Excuse me, miss! I have a note for you!" you shout after them and walk towards them.');
    scene.text('The mother looks at you in surprise, but you stop her before she can say something. "Not for you. For you!" you say as you hand the note to the little girl.');
    scene.text('She needs her mother\'s help to read the note, but a huge grin appears on her face when her mother explains who it\'s from. It may have cost you a few minutes, but the feeling you get from seeing her genuine happiness is amazing!');
    // TODO-QSP: dynamic text: When you're about to leave, her mother stops you and gives you <<$func('money', ...
    scene.text(`When you're about to leave, her mother stops you and gives you ${qspFunc(s, 'money', 'string_profit', 100)}. "What a nice thing of you to do! Thank you so much, that made her day!"`);
    scene.actions([
      { label: 'Continue your round', goto: ['post_deliveries', 'resume'] },
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
    case 'pick_event':
      enterPickEvent(s, scene);
      break;
    case 'resume':
      enterResume(s, scene);
      break;
    case 'bandits':
      enterBandits(s, scene);
      break;
    case 'bandsex':
      enterBandsex(s, scene);
      break;
    case 'finishround':
      enterFinishround(s, scene);
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
    case '7':
      enter7(s, scene);
      break;
    case '8':
      enter8(s, scene);
      break;
    case '9':
      enter9(s, scene);
      break;
    case '10':
      enter10(s, scene);
      break;
    case '11':
      enter11(s, scene);
      break;
    case '12':
      enter12(s, scene);
      break;
    case '13':
      enter13(s, scene);
      break;
    case '14':
      enter14(s, scene);
      break;
    case '15':
      enter15(s, scene);
      break;
    case '16':
      enter16(s, scene);
      break;
    case '17':
      enter17(s, scene);
      break;
    case '18':
      enter18(s, scene);
      break;
    case '19':
      enter19(s, scene);
      break;
    case '20':
      enter20(s, scene);
      break;
    case '21':
      enter21(s, scene);
      break;
    case '22':
      enter22(s, scene);
      break;
    case '23':
      enter23(s, scene);
      break;
    case '24':
      enter24(s, scene);
      break;
    case '25':
      enter25(s, scene);
      break;
    case '26':
      enter26(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const post_deliveries: LocationDef = {
  name: 'post_deliveries',
  title: 'He guides you to the back room, where a number of small pack',
  region: 'other',
  enter: enter,
};
