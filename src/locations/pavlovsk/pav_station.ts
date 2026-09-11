import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStationOutside(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/police/pavext.jpg');
  scene.text('The police station is gleaming in a bright yellow color, clearly making it clear that it can\'t be missed by anyone.');
  scene.text('The officers often abuse their power since no one further up the chain cares about a little town such as Pavlovsk.');
  scene.actions([
    { label: 'Return to the train station', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['pav_train_hall', ''] },
    { label: 'Enter the police station', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_station', 'station_inside'] },
  ]);
  scene.build();
}

function enterStationInside(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/police/pavrec.jpg');
  scene.text('You\'re welcomed by a tiny reception area with someone always just lazily hanging around waiting for something to happen.');
  scene.text('The interior has seen better days and you\'re reminded of the stories you\'ve heard from your parents about how everything used to look run-down even during their younger days.');
  if (((s as any).katalkinSexOnce ?? 0) === 1  &&  ((s as any).hour ?? 0) >= 8) {
    (s as any).minut = ((s as any).minut ?? 0) + (1);
    // TODO-QSP: act 'Visit Captain Katalkin': gt 'katalkin'
  }
  scene.actions([
    { label: 'Leave the station', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_station', 'station_outside'] },
    { label: 'Approach the reception area', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['pav_station', 'reception'] },
  ]);
  scene.build();
}

function enterReception(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/police/pavrec.jpg');
  scene.text('As you approach the reception, the clerk looks at you with disdain in their eyes. "What do you want?"');
  if (((s as any).rape_count ?? 0) > 0  &&  ((s as any).rape_day ?? 0) + 2 > ((s as any).daystart ?? 0)) {
    // TODO-QSP: act 'Report a rape': gt 'pav_station', 'rape_report'
  }
  qspCall(s, 'blackmailer', 'set_police_act');
  scene.actions([
    { label: 'Just looking around', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/police/pavrec.jpg');
    scene.text('"I\'m just looking around," you jokingly reply.');
    scene.text('The clerk looks sternly towards you. "Does this looks like a place to be messing around?"');
    scene.text('"I guess not…" you sheepishly reply with an awkward smile. "I just wanted to see what the inside of a police station looked like."');
    scene.text('"Said no one ever," the clerk quickly counters. "I don\'t know what you\'re up to, but you need to leave before I have one of the officers come and lock you up."');
    scene.text('You just nod before quickly walking away.');
    scene.actions([
      { label: 'Walk away', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['pav_station', 'station_inside'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterEntrance(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Reception area</b></center>');
  scene.img('images/locations/pavlovsk/police/pavrec.jpg');
  scene.text('The officer drags you in by the arm, his grip tightening whenever he feels the slightest bit of resistance from you.');
  scene.text('As the officer leads you by the reception area, the clerk pops his head out and looks down the corridor, appearing very unimpressed.');
  if (((s as any).locArgs?.[1] ?? 0) === 'shplft'  ||  ((s as any).locArgs?.[1] ?? 0) === 'shoplift') {
    ((s as any).policeQW ?? {})['shoplift_booked_pav'] = (((s as any).policeQW ?? {})['shoplift_booked_pav'] ?? 0) + (1);
    ((s as any).policeQW ?? {})['crime_flag_pav'] = 'shoplift';
    (s as any).temp_tot_booked_pav = ((s as any).temp_tot_booked_pav ?? 0) + (1);
    if (((s as any).temp_tot_booked_pav ?? 0) === 1) {
      scene.actions([{ label: 'Continue', goto: ['pav_station', 'first_shoplift'] }]);
    } else {
      if (((s as any).temp_tot_booked_pav ?? 0) <= 5) {
        scene.actions([{ label: 'Continue', goto: ['pav_station', 'repeat'] }]);
      } else {
        if (((s as any).temp_tot_booked_pav ?? 0) <= 10) {
          scene.actions([{ label: 'Continue', goto: ['pav_station', 'multiple'] }]);
        } else {
          scene.actions([{ label: 'Continue', goto: ['pav_station', 'regular'] }]);
        }
      }
    }
  } else {
    ((s as any).policeQW ?? {})['prostitution_booked_pav'] = (((s as any).policeQW ?? {})['prostitution_booked_pav'] ?? 0) + (1);
    ((s as any).policeQW ?? {})['crime_flag_pav'] = 'prostitution';
    (s as any).temp_tot_booked_pav = ((s as any).temp_tot_booked_pav ?? 0) + (1);
    if (((s as any).temp_tot_booked_pav ?? 0) === 1) {
      scene.actions([{ label: 'Continue', goto: ['pav_station', 'first_prostitution'] }]);
    } else {
      if (((s as any).temp_tot_booked_pav ?? 0) <= 5) {
        scene.actions([{ label: 'Continue', goto: ['pav_station', 'repeat'] }]);
      } else {
        if (((s as any).temp_tot_booked_pav ?? 0) <= 10) {
          scene.actions([{ label: 'Continue', goto: ['pav_station', 'multiple'] }]);
        } else {
          scene.actions([{ label: 'Continue', goto: ['pav_station', 'regular'] }]);
        }
      }
    }
  }
  scene.build();
}

function enterFirstShoplift(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'pain', '', 2, 'armR', 'pinch');
  qspCall(s, 'stat', '');
  if (((s as any).fame ?? 0)?.['pav_slut'] > 250) {
    // TODO-QSP: dynamic text: He notices that it's you. "Aren't you <<$pcs_firstname>> <<$pcs_lastname>>, one ...
    scene.text(`He notices that it's you. "Aren't you ${((s as any).pcs_firstname ?? 0)} ${((s as any).pcs_lastname ?? 0)}, one of, uh… Natasha's kids? I guess I'm not surprised. I've heard things about that woman…"`);
  } else {
    if (((s as any).grupTipe ?? 0) === 1) {
      // TODO-QSP: dynamic text: He notices that it's you. "Well if it isn't <<$pcs_firstname>> <<$pcs_lastname>>...
      scene.text(`He notices that it's you. "Well if it isn't ${((s as any).pcs_firstname ?? 0)} ${((s as any).pcs_lastname ?? 0)}! Who would've thought that you would end up here?"`);
    } else {
      if (((s as any).grupTipe ?? 0) === 2) {
        // TODO-QSP: dynamic text: He notices that it's you. "I really hope this is the first and only time you get...
        scene.text(`He notices that it's you. "I really hope this is the first and only time you get brought here, ${((s as any).pcs_lastname ?? 0)}…"`);
      } else {
        if (((s as any).grupTipe ?? 0) === 3) {
          // TODO-QSP: dynamic text: He notices that it's you. "You're telling me that <<$pcs_firstname>> <<$pcs_last...
          scene.text(`He notices that it's you. "You're telling me that ${((s as any).pcs_firstname ?? 0)} ${((s as any).pcs_lastname ?? 0)} committed a crime? I've seen it all now…"`);
        } else {
          if (((s as any).grupTipe ?? 0) === 4) {
            // TODO-QSP: dynamic text: He notices that it's you. "It was just a matter of time until we saw you here, <...
            scene.text(`He notices that it's you. "It was just a matter of time until we saw you here, ${((s as any).pcs_lastname ?? 0)}. Not surprising at all."`);
          } else {
            if (((s as any).policeQW ?? 0)?.['toldonguard_pav'] === 2) {
              scene.text('"I\'m not lying! That security guard forced me to have sex with him! Why won\'t you believe me?" you plead, but it does you no good.');
              scene.text('The officer sighs. "You think you\'re the first to try that? I\'ve heard it all from you thieving little whores. You\'re not the victim here!"');
              scene.text('With a dejected whimper, you look down to the floor as you\'re led further into the station to be booked.');
            } else {
              scene.text('He notices that it\'s you. "There\'s a first time for everything, I suppose. For your sake, let\'s hope your first time is your last time."');
            }
          }
        }
      }
    }
  }
  scene.actions([
    { label: 'Continue further in', goto: ['pav_station', 'booking'] },
  ]);
  scene.build();
}

function enterFirstProstitution(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'pain', '', 2, 'armR', 'pinch');
  qspCall(s, 'stat', '');
  if (((s as any).policeQW ?? 0)?.['prostitution_bribe'] === 1) {
    if (((s as any).pcs_hotcat ?? 0) < 3) {
      scene.text('"I caught this one whoring herself out and you know what she tried to do? She tried to bribe me with sex!"');
      scene.text('The others shake their heads. "What was she thinking? No one would fuck someone as ugly as her!"');
      scene.text('You hang your head in shame as you\'re led further into the station for booking.');
    } else {
      if (((s as any).pcs_hotcat ?? 0) > 7) {
        scene.text('"I caught this one whoring herself out and you know what she tried to do? She tried to bribe me with sex!"');
        scene.text('The other officers eye you hungrily. "You\'re a better man than me!" one of them exclaim. "Just look at her! How often do you get a chance like that? I would have said yes!"');
        scene.text('A small smile plays across your face, feeling a little flattered as you\'re led further into the station to get booked.');
      } else {
        scene.text('"I caught this one whoring herself out and you know what she tried to do? She tried to bribe me with sex!"');
        scene.text('"Well, she doesn\'t look <i>that</i> bad," the others jokingly reply. "I wouldn\'t have agreed, but I can see it working on someone else."');
        scene.text('You frown at their rude remarks, but remain silent as you\'re led further into the station to be booked.');
      }
    }
  } else {
    if (((s as any).pcs_hotcat ?? 0) < 3) {
      scene.text('"I caught this one whoring herself out. Can you believe that? Who would ever want to fuck this pig?!" he exclaims and the other officers erupt with laughter.');
      scene.text('"What was she thinking? Honestly, you\'ve done everyone a favor getting her off the streets," one of them says before you\'re led further into the station.');
    } else {
      if (((s as any).pcs_hotcat ?? 0) > 7) {
        scene.text('"I caught this one whoring herself out on the street corner. Such a waste." He turns to you and shakes his head. "A pretty little thing like you could shack up with some rich guy and leech off him, but I guess that\'s not enough for a cock hungry whore like you, huh?"');
        scene.text('The other officers laugh cruelly. "It really is a shame. Just look at her, she\'s drop dead gorgeous! You must have some real issues to be selling yourself to strangers."');
        scene.text('"I\'m sure the money is great!" the officer holding you laughs loudly as he leads you further inside the police station.');
      } else {
        scene.text('"I caught this one whoring herself out. She ain\'t bad looking, but you know she\'s not making money like those other girls," he says with a disappointing click of the tongue.');
        scene.text('The other officers shrug and shake their heads. "Probably some cheap bastards out there that can\'t afford to be picky," one quips as you\'re led further into the station.');
      }
    }
  }
  scene.actions([
    { label: 'Continue further in', goto: ['pav_station', 'booking'] },
  ]);
  scene.build();
}

function enterRepeat(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'pain', '', 2, 'armR', 'pinch');
  qspCall(s, 'stat', '');
  if (((s as any).temp_tot_booked_pav ?? 0) === 1) {
    // TODO-QSP: dynamic text: "You're way too young to be doing all these things, Miss <<$pcs_lastname>>. We m...
    scene.text(`"You're way too young to be doing all these things, Miss ${((s as any).pcs_lastname ?? 0)}. We might have to call your mother here…"`);
    scene.text('The others smile and shake their heads as he leads you further inside the police station.');
  } else {
    if (((s as any).temp_tot_booked_pav ?? 0) === 2) {
      // TODO-QSP: dynamic text: "Seems like you don't learn, Miss <<$pcs_lastname>>. It's really time to call yo...
      scene.text(`"Seems like you don't learn, Miss ${((s as any).pcs_lastname ?? 0)}. It's really time to call your parents…"`);
      scene.text('The others laugh and shake their heads as he leads you further inside the police station.');
    } else {
      if (((s as any).temp_tot_booked_pav ?? 0) === 3) {
        // TODO-QSP: dynamic text: "I'm shocked to see you here again, <<$pcs_lastname>>. Not really. It's just as ...
        scene.text(`"I'm shocked to see you here again, ${((s as any).pcs_lastname ?? 0)}. Not really. It's just as I expected."`);
        scene.text('The others smile and shake their heads as he leads you further inside the police station.');
      } else {
        if (((s as any).temp_tot_booked_pav ?? 0) === 4) {
          scene.text('"I feel sorry for your parents for having such a disappointing kid…"');
          scene.text('The others shake their heads as he leads you further inside the police station.');
        } else {
          // TODO-QSP: dynamic text: "I expected the Kotov kids or one of their friends to be a repeat offender, but ...
          scene.text(`"I expected the Kotov kids or one of their friends to be a repeat offender, but not you, Miss ${((s as any).pcs_lastname ?? 0)}…"`);
          scene.text('The others shake their heads as he leads you further inside the police station.');
        }
      }
    }
  }
  scene.actions([
    { label: 'Continue further in', goto: ['pav_station', 'booking'] },
  ]);
  scene.build();
}

function enterMultiple(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'pain', '', 2, 'armR', 'pinch');
  qspCall(s, 'stat', '');
  if (((s as any).temp_tot_booked_pav ?? 0) === 6) {
    scene.text('"Parents like yours should stop having kids if they can\'t raise them well."');
    scene.text('The others shake their heads as he leads you further inside the police station.');
  } else {
    if (((s as any).temp_tot_booked_pav ?? 0) === 7) {
      scene.text('"What\'s going on with the kids around here? You been hanging out with those Kotov brats and their loser friends?"');
      scene.text('The others shake their heads as he leads you further inside the police station.');
    } else {
      if (((s as any).temp_tot_booked_pav ?? 0) === 8) {
        // TODO-QSP: dynamic text: "Well if it isn't our favorite guest! Welcome back, Miss <<$pcs_lastname>>. We h...
        scene.text(`"Well if it isn't our favorite guest! Welcome back, Miss ${((s as any).pcs_lastname ?? 0)}. We have a room all waiting for you."`);
        scene.text('The others shake their heads as he leads you further inside the police station.');
      } else {
        if (((s as any).temp_tot_booked_pav ?? 0) === 9) {
          scene.text('"You must be one of the worst offenders in Pavlovsk. You\'re getting caught all the time."');
          scene.text('The others shake their heads as he leads you further inside the police station.');
        } else {
          // TODO-QSP: dynamic text: "What are we going to do with you, <<$pcs_firstname>>? I don't know how we're go...
          scene.text(`"What are we going to do with you, ${((s as any).pcs_firstname ?? 0)}? I don't know how we're going to make you stop…"`);
          scene.text('The others shake their heads as he leads you further inside the police station.');
        }
      }
    }
  }
  scene.actions([
    { label: 'Continue further in', goto: ['pav_station', 'booking'] },
  ]);
  scene.build();
}

function enterRegular(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'pain', '', 2, 'armR', 'pinch');
  qspCall(s, 'stat', '');
  (s as any).temp_rand = Math.floor(Math.random() * 8) + 1;
  if (((s as any).temp_rand ?? 0) === 1) {
    // TODO-QSP: dynamic text: The staff sitting at the reception desk glance your way as the arresting officer...
    scene.text(`The staff sitting at the reception desk glance your way as the arresting officer glares down at you. "I'm sick and tired of processing you, ${((s as any).pcs_lastname ?? 0)}! I hope they lock you away for a long time!"`);
    scene.text('The others shake their heads as he leads you further inside the police station.');
  } else {
    if (((s as any).temp_rand ?? 0) === 2) {
      scene.text('The staff sitting at the reception desk glance your way as the arresting officer smirks. "Well, if it isn\'t our favorite customer. How long will you be staying this time?"');
      scene.text('The others laugh loudly as he leads you further inside the police station.');
    } else {
      if (((s as any).temp_rand ?? 0) === 3) {
        // TODO-QSP: dynamic text: The staff sitting at the reception desk glance at you as the arresting officer s...
        scene.text(`The staff sitting at the reception desk glance at you as the arresting officer sighs heavily. "Why do you continue doing this, ${((s as any).pcs_lastname ?? 0)}? Aren't you getting tired of this life?"`);
        scene.text('The others shake their heads as he leads you further inside the police station.');
      } else {
        if (((s as any).temp_rand ?? 0) === 4) {
          scene.text('The staff sitting at the reception desk glance at you as the arresting officer smiles sarcastically. "What a surprise, it\'s our favorite little criminal!"');
          scene.text('The others shake their heads as he leads you further inside the police station.');
        } else {
          if (((s as any).temp_rand ?? 0) === 5) {
            // TODO-QSP: dynamic text: "Looks like I won the bet! I knew you would be in here again. Thanks for the 100...
            scene.text(`"Looks like I won the bet! I knew you would be in here again. Thanks for the 100 rubles, ${((s as any).pcs_firstname ?? 0)}!"`);
            scene.text('The others shake their heads as he leads you further inside the police station.');
          } else {
            if (((s as any).temp_rand ?? 0) === 6) {
              // TODO-QSP: dynamic text: "So what is it this time, <<$pcs_lastname>>? Don't you get tired of it?"
              scene.text(`"So what is it this time, ${((s as any).pcs_lastname ?? 0)}? Don't you get tired of it?"`);
              scene.text('The others shake their heads as he leads you further inside the police station.');
            } else {
              if (((s as any).temp_rand ?? 0) === 7) {
                scene.text('"Have you ever thought about straighting up your act? You\'re getting into adulthood soon and should sober up before you end up in a real bad place."');
                scene.text('The others shake their heads as he leads you further inside the police station.');
              } else {
                scene.text('"Did you really have to bring her to the station? Now I have to do all the extra paperwork…"');
                scene.text('The others shake their heads as he leads you further inside the police station.');
              }
            }
          }
        }
      }
    }
  }
  scene.actions([
    { label: 'Continue further in', goto: ['pav_station', 'booking'] },
  ]);
  scene.build();
}

function enterBooking(s: GameState, scene: SceneBuilder): void {
  if (((s as any).temp_tot_booked_pav ?? 0) === 1) {
    scene.actions([{ label: 'Continue', goto: ['pav_station', 'booking1'] }]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['pav_station', 'booking2'] }]);
  }
  scene.build();
}

function enterBooking1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Holding area</b></center>');
  scene.img('images/locations/pavlovsk/police/booking.jpg');
  scene.text('As you\'re led through the station, the officer leads you into a fairly small room with some chairs and a counter with a phone and finger printer. Over by one of the walls is a camera for taking a mug shot.');
  scene.text('"Sit over there," the officer commands and you take a seat as ordered as he walks to the door and calls another officer over. You sit in silence, trying to overhear what\'s being said, but you can\'t hear them.');
  scene.text('After a few minutes, the officer that brought you in comes back with another officer unknown to you, but he\'s young and fairly good looking.');
  // TODO-QSP: dynamic text: "Alright <<$pcs_lastname>>, I'll be leaving you here with my colleague. He'll so...
  scene.text(`"Alright ${((s as any).pcs_lastname ?? 0)}, I'll be leaving you here with my colleague. He'll sort you out," the first officer says as they turn to the other officer. "I've already checked her pockets, there was nothing of interest."`);
  // TODO-QSP: dynamic text: The young officer looks you up and down, evaluating you at a glance. "<<$pcs_las...
  scene.text(`The young officer looks you up and down, evaluating you at a glance. "${((s as any).pcs_lastname ?? 0)} was it?"`);
  qspCall(s, 'willpower', 'crime', 'self', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Answer brashly [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Answer brashly [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/police/booking_officer.jpg');
    scene.text('"My name is <i>go fuck yourself, pig</i>!" you brashly answer.');
    scene.text('"Well that\'s not nice!" he scowls. "I guess I can just put you in a holding cell to calm down and think about what you\'ve said…"');
    scene.text('The officer forcefully yanks you up from the chair and drags you to a holding cell. You try to resist, but they\'re too strong.');
    scene.text('Before you know it, the door slams behind you and the only thing you can do is slam your fists against it.');
    scene.actions([
      { label: 'Inside the holding cell', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 120;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/police/pavhold.jpg');
    scene.text('You don\'t know how much time passes before the door suddenly opens and you see the officer standing with a smug smile on his face. "You plan to cooperate now, girl?"');
    scene.text('You plan to kick him in the balls and wipe that smile off his face, but knowing that will only make things worse, you simply nod.');
    scene.text('"Good. Follow me so I can finally process you."');
    scene.actions([
      { label: 'Follow him to the counter', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/police/booking.jpg');
    scene.text('You tag along as the officer walks quite quickly up to the desk. "Listen here. I don\'t have time to deal with your lip service, so just answer the questions, okay?"');
    scene.text('The officer then proceeds to ask you several questions and writes every answer carefully down.');
    scene.text('You try your best to draw out every answer as long as you reasonably can, and it makes you smile when you can clearly see him getting more and more annoyed by your actions.');
    scene.text('When you finally finish, the officer is glaring down at you. "Time for your fingerprints and mugshot," he says gruffly before leading you to a room where you see a photo camera pointed at a wall.');
    scene.actions([
      { label: 'Take fingerprints', goto: ['pav_station', 'take_fingerprints1'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Play along', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/police/booking_officer.jpg');
    // TODO-QSP: dynamic text: "That's right… <<$pcs_firstname>> <<$pcs_lastname>>," you cautiously answer.
    scene.text(`"That's right… ${((s as any).pcs_firstname ?? 0)} ${((s as any).pcs_lastname ?? 0)}," you cautiously answer.`);
    scene.text('"Good, good. I hope we can continue to keep it civil like this," he smiles halfheartedly. "Now, let me tell you how this is going to go: I\'ll ask you some questions and you\'ll answer them - <i>truthfully</i>," he emphasizes with a pointed look. "Then I\'ll take your fingerprints and your mug shot. Understood?"');
    scene.text('Dispirited, you nod weakly.');
    scene.text('"Good. Now come over here," he orders as he walks up to the counter.');
    scene.actions([
      { label: 'Take fingerprints', goto: ['pav_station', 'take_fingerprints1'] },
    ]);
  } },
    { label: 'Try to weasel your way out', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/police/booking_officer.jpg');
    scene.text('"Sure is…" You give him a little wink as you answer.');
    scene.text('The officer tells you to stand up and follow him so he can process you. You nod and sensually stand up, trying to show as much skin as possible, trying to catch his attention.');
    scene.text('He looks at you, not really picking up on your signals. "Follow me over to the counter please," he monotonously says.');
    scene.text('As he begins taking your fingerprints, you flirt with him for all you\'re worth, trying to get him to let you off with just a warning.');
    scene.actions([
      { label: 'Flirt even more', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/police/booking0.jpg');
    scene.text('Just when you\'re sure he\'s ignoring your flirting, he walks over and closes the door.');
    scene.text('"Why did you close the door?" you ask.');
    scene.text('He shrugs his shoulders and answers in the same monotonous voice. "I thought you might want some privacy…"');
    scene.text('You look around the room as you await further instructions.');
    scene.text('"Take off your clothes," he orders in the same monotone voice.');
    scene.text('You look at him in shock. "What?!"');
    scene.text('"You think I haven\'t noticed that you\'ve been teasing me this whole time?" he answers. "Get undressed!"');
    scene.actions([
      { label: 'Get undressed', goto: ['pav_station', 'booking1_undress'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterTakeFingerprints1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/police/fingerprint.jpg');
  scene.text('You follow obediently behind. As you\'re about to begin the process, you feel a bit nervous, but the officer speaks up. "No need to worry. Fingerprints are a standard part of a booking record. We need them so we can add you to the nationwide database, saving us the trouble of going through this again to identify you if you commit another crime."');
  scene.text('You nod and quickly dip your fingers into the ink before pressing them against the paper. Soon after, the officer points at a wall with the camera pointed at it, silently ordering you to stand there.');
  scene.text('You walk over and stand next to the wall as the officer takes your mugshot.');
  scene.text('"Once we take your mugshot, we\'ll take you to a holding cell while we wait for one of your parents to come and pick you up."');
  scene.text('"Do you have to call my parents?" you ask nervously.');
  scene.text('The officer nods grimly. "Considering your age, I\'m afraid so. Now hold still while I take your mugshot."');
  qspCall(s, 'willpower', 'crime', 'self', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Flip him off [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Flip him off [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/police/bookedfu.jpg');
    scene.text('You scoff and flip him off as he takes your photo. He looks around the camera and glares at you before he finishes the last of the paperwork.');
    scene.text('Once he\'s done, he leads you out of the room and down towards the holding cells. You hear the door slam and it suddenly hits you that you\'re all alone and locked up.');
    scene.actions([
      { label: 'Inside the holding cell', goto: ['pav_station', 'holdingcell'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Stand still', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/police/booked.jpg');
    scene.text('You sigh and stand still as he takes your mugshot and finishes the last of the paperwork.');
    scene.text('Once he\'s done, he leads you out of the room and down towards the holding cells. You hear the door slam and it suddenly hits you that you\'re all alone and locked up.');
    scene.actions([
      { label: 'Inside the holding cell', goto: ['pav_station', 'holdingcell'] },
    ]);
  } },
    { label: 'Tease him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/police/bookedplay.jpg');
    scene.text('You smile and hold your fingers spread apart to your lips with your tongue between them as he takes your photo.');
    scene.text('He looks around the camera and sighs. "What are you doing?"');
    scene.actions([
      { label: 'Just having fun', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/police/booking_officer.jpg');
    scene.text('You smile innocently at him. "Nothing. I\'m just having a little harmless fun."');
    scene.text('He sighs and shakes his head before he finishes the last of the paperwork.');
    scene.text('Once he\'s done, he leads you out of the room and down towards the holding cells. You hear the door slam and it suddenly hits you that you\'re all alone and locked up.');
    scene.actions([
      { label: 'Inside the holding cell', goto: ['pav_station', 'holdingcell'] },
    ]);
  } },
      { label: 'Don\'t call my parents', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/police/booking_officer.jpg');
    scene.text('You give him your best seductive smile. "How about you close that door, we have a little fun and you just… Let me go? Sound good?"');
    scene.text('He walks over and closes the door.');
    scene.text('"Why did you close the door?" you ask.');
    scene.text('He shrugs his shoulders and answers in the same monotonous voice. "Thought you might want some privacy…"');
    scene.text('You look around the room as you await further instructions.');
    scene.text('"Take off your clothes," he orders in the same monotone voice.');
    scene.actions([
      { label: 'Get undressed', goto: ['pav_station', 'booking1_undress'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBooking1Undress(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'foreplay', 3, 'inhibition', 'sub');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/police/booking2.jpg');
  scene.text('As the initial surprise vanishes, you start to undress. You\'re still confused by it all, but at the same time feel a bit turned on that you might get caught at any moment.');
  scene.text('"What now?" you ask as you try to cover up your body as much as you can.');
  scene.text('"How about you suck my dick and I make the charges go away?" he smiles.');
  qspCall(s, 'willpower', 'sex', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Reject him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Reject him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/police/booking1.jpg');
    scene.text('You shake your head. "No, stop!"');
    scene.text('"What\'s wrong? I thought you wanted this? You\'ve been teasing me this whole time!" he hisses.');
    scene.text('"I don\'t want this, so please let me go or… or I\'ll scream!" you threaten him.');
    scene.text('"…Fine, have it your way," he mutters. "Get dressed and we\'ll continue then…"');
    scene.text('You quickly get dressed as the officer prepares the fingerprint process.');
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/police/fingerprint.jpg');
    scene.text('As you\'re about to begin the process, the officer speaks up. "You know I really would\'ve helped you? Think about it the next time."');
    scene.text('You sigh and hesitantly dip your finger one by one into the ink and take your time to press them against the paper. The officer then points at the wall and tells you to stand there.');
    scene.actions([
      { label: 'Take the mugshot', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/police/booked.jpg');
    scene.text('You drag your feet as you walk over to the wall. You stand still as he takes your picture.');
    scene.text('"That\'s all," he says. "Time for you to head over to the holding cell while we await a detective to come and interrogate you."');
    scene.text('You nod slowly as the officer ushers you out of the room. As you step out, he moves behind you and you feel his large hand groping your ass.');
    scene.text('"You\'ll regret that you rejected me," he comments quietly as he\'s about to lock the cell door. You hear the door slam and it suddenly hits you that you\'re all alone and locked up.');
    scene.actions([
      { label: 'Inside the holding cell', goto: ['pav_station', 'holdingcell'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Comply', handler: (st: GameState) => {
    ((s as any).policeQW ?? {})['bookingofficer_sex_pav'] = 1;
    qspCall(s, 'arousal', 'bj', 5, 'inhibition', 'sub');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/police/bookingbj1.jpg');
    scene.text('You nod willingly as he leads you to the mugshot wall and makes you squat as he unzips his pants and exposes his hard cock to you. It pulses in front of your face as it eagerly awaits to enter your mouth.');
    scene.text('"Let\'s see how good you are with your mouth…" he says. "Remember to be quiet or else you\'ll get in even more trouble."');
    scene.text('He grabs his cock and shoves it into your mouth in one thrust. As you eagerly start to suck, you can feel his cock growing inside your mouth, a sign that you\'re doing well.');
    scene.text('After a while, he grabs and holds your wrists as he pushes himself deeper down your throat.');
    scene.text('"Swallow my cock, whore!" he growls.');
    scene.actions([
      { label: 'Keep sucking', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth');
    (s as any).spafinloc = 12;
    qspCall(s, 'cum_manage', '');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/police/bookingbj2.jpg');
    scene.text('You continue sucking him, pleasing him in any way possible before you suddenly hear him panting heavily as his cock twitches.');
    scene.text('He pulls out of your mouth and tells you to open wide as he gives his cock a few jerks and cums into your mouth.');
    scene.text('Your mouth is quickly filled and you try your best to keep his enormous load from spilling out. Your first instinct is to spit it out, but he stares down at you expectantly.');
    scene.text('With a grimace, you swallow it all as he puts his cock away before zipping his pants up and walking over to the counter again.');
    scene.text('"Get dressed so we can finish the process," he tells you.');
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/police/bookingcum.jpg');
    scene.text('You make sure that there\'s no cum on your clothes and quickly get dressed as the officer prepares the fingerprint process.');
    scene.text('As you\'re about to begin the process, he speaks up. "Good thing you complied. Now I can help you out. It\'ll all be fine…"');
    scene.text('You sigh and hesitantly dip your finger one by one into the ink and take your time to press them against the paper. The officer then points at the wall and tells you to stand there.');
    scene.actions([
      { label: 'Take the mugshot', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/pavlovsk/police/booked.jpg');
    scene.text('You drag yourself over to the wall and stand still as the officer takes your mugshot.');
    scene.text('"That\'s all," he says, "Now that we\'re done, follow me."');
    scene.text('He leads you through the station back to the front. You notice a few of the other offices looking at you with a smile, but no one says anything.');
    scene.text('Once you reach the door to the station, the officer opens the door for you. "Now try and stay out of trouble. Or don\'t."');
    scene.text('Once you walk out, he closes the door behind you.');
    scene.actions([
      { label: 'Leave the station', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['pav_train_hall', ''] },
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

function enterBooking2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Holding area</b></center>');
  scene.img('images/locations/pavlovsk/police/booking.jpg');
  scene.text('You walk into a familiar setting. Not much has changed since last time and you already know what awaits you as you\'re taken to the booking room again. The officer points to one of the chairs and you sit while he walks out of the room.');
  scene.text('After what feels like an eternity, the young officer from last time returns.');
  if (((s as any).policeQW ?? 0)?.['bookingofficer_sex_pav'] >= 1) {
    // TODO-QSP: dynamic text: The young officer observes you with a hungry lustful grin on his face. "<<$pcs_l...
    scene.text(`The young officer observes you with a hungry lustful grin on his face. "${((s as any).pcs_lastname ?? 0)}, hmm? I remember you from the last time," he says as he walks over to you, stopping with his crotch almost in your face.`);
    scene.text('You lean back so his crotch isn\'t so close to your face and sigh. You have a feeling he\'ll want another blowjob.');
  } else {
    // TODO-QSP: dynamic text: The young officer observes you with a smile on his face. "<<$pcs_lastname>>, hmm...
    scene.text(`The young officer observes you with a smile on his face. "${((s as any).pcs_lastname ?? 0)}, hmm? I remember you from the last time."`);
    scene.text('You sigh as you recall the last time you were with him.');
  }
  scene.text('He walks over to the counter and motions you over.');
  qspCall(s, 'willpower', 'crime', 'self', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Spit on him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Spit on him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/police/booking_officer.jpg');
    scene.text('"You again?" you ask rudely.');
    scene.text('"Don\'t act all surprised," the officer answers. "Are you going to cooperate or do I need to put you in the holding cell again?"');
    scene.text('Your eyes narrow and your lips curl into a grimace before something in you snaps. Without warning, you spit in his face, taking him by surprise.');
    scene.text('The officer forcefully grabs hold of you and drags you to a holding cell.');
    scene.text('"Disgusting bitch!" he screams before he slams the door behind you. The only thing you can do now is slam your fists against the door.');
    scene.actions([
      { label: 'Inside the holding cell', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 120;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/police/pavhold.jpg');
    scene.text('You don\'t know how much time passes before the door suddenly opens and you see the officer standing there. "Have you calmed down?"');
    scene.text('All you want to do is to spit in his face again, but you know that will get you nowhere, so you simply nod.');
    scene.text('"Good. Now follow me so I can finally process you…"');
    scene.actions([
      { label: 'Take the mugshot', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/police/booked.jpg');
    scene.text('This time, you\'re taken straight to take a mugshot.');
    scene.text('You drag your feet as you walk over to the wall and stand perfectly still as the officer takes your mugshot.');
    scene.text('"Once I take your mugshot, I\'ll take you back to the holding cell while we wait for one of your parents to come and pick you up."');
    scene.text('Once you\'re done, he leads you in silence back to your cell. He pushes you inside and the door loudly slams behind you.');
    scene.actions([
      { label: 'Inside the holding cell', goto: ['pav_station', 'holdingcell'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Get up', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/police/fingerprint.jpg');
    if (((s as any).policeQW ?? 0)?.['bookingofficer_sex_pav'] >= 1) {
      scene.text('You get up and walk over to the counter to stand next to him. "We just need to update some information since the last time you were here." The officer stands so close to you that your shoulders are touching as he proceeds to ask you several questions and write every answer down.');
      scene.text('His free hand paws at your lower back before it slides down to your ass and starts squeezing it.');
      scene.text('You answer every question quickly as you know making trouble won\'t lead to anything good, and if you cooperate they might go easier on you.');
      scene.text('As you finish with the questioning, the officer doesn\'t even look your way as he speaks to you. "Now I\'ll take your fingerprints and mugshot."');
    } else {
      scene.text('You get up and walk over to the counter to stand next to him. "We just need to update some information since the last time you were here."');
      scene.text('He then proceeds to ask you several questions and writes every answer carefully down. You answer every question quickly as you know making trouble won\'t lead to anything good, and if you cooperate they might go easier on you.');
      scene.text('As you finish with the questioning, the officer doesn\'t even look your way as he speaks to you. "Now I\'ll take your fingerprints and mugshot."');
    }
    scene.actions([
      { label: 'Take fingerprints', goto: ['pav_station', 'take_fingerprints1'] },
    ]);
  } },
    { label: 'Flirt', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/police/booking0.jpg');
    if (((s as any).policeQW ?? 0)?.['bookingofficer_sex_pav'] >= 1) {
      scene.text('"Oh, it\'s you again." You get up and walk over to the counter to stand next to him in your most seductive pose as you smile seductively.');
      scene.text('He smiles and slaps your ass. "We just need to update some information since the last time you were here."');
      scene.text('You answer every question quickly before he takes your fingerprints again. Soon after, he walks over and closes the door.');
      scene.text('He smiles as he moves closer to you. "Take off your clothes."');
      scene.text('You stare at him in surprise. "Again? But… but I thought the last time was enough?"');
      scene.text('"I was hoping you\'d be back because I wasn\'t finished with you yet," he answers.');
      scene.text('As the initial shock vanishes, you start taking off your clothes. You\'re still confused, but also a little turned on at the same time by how risky and forbidden it is.');
      qspCall(s, 'arousal', 'foreplay', 5, 'inhibition', 'sub');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Get undressed', goto: ['pav_station', 'booking2_undress'] },
      ]);
    } else {
      scene.text('"Oh, it\'s you again." You get up and walk over to the counter to stand next to him in your most seductive pose as you smile seductively.');
      scene.text('He seems to either be ignoring your flirting or is oblivious to it. "We just need to update some information since the last time you were here."');
      scene.text('He proceeds to ask you several questions and writes every answer carefully down. You answer every question quickly as you know making trouble won\'t lead to anything good, and if you cooperate they might go easier on you.');
      scene.text('As you finish with the questioning, the officer doesn\'t even look your way as he speaks to you. "Now I\'ll take your fingerprints and mugshot."');
      scene.actions([
        { label: 'Flirt even more', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 5, 'inhibition', 'sub');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/police/booking1.jpg');
    scene.text('You keep flirting with him for all you\'re worth as he takes your fingerprints again. Just when you\'re sure he\'s ignoring your flirting he walks over and closes the door.');
    scene.text('"Why did you close the door?" you ask.');
    scene.text('He shrugs his shoulders and answers in the same monotonous voice. "Thought you might want some privacy…"');
    scene.text('You look around the room as you await further instructions.');
    scene.text('"Take off your clothes," he orders in the same monotone voice.');
    scene.text('You look at him in shock. "What?!"');
    scene.text('"You think I haven\'t noticed that you\'ve been teasing me this whole time?" he answers. "Now get undressed!"');
    scene.text('As the initial shock vanishes, you start taking off your clothes. You\'re confused how he can get away with this, but also a little turned on at the same time by how risky and forbidden it is.');
    scene.actions([
      { label: 'Get undressed', goto: ['pav_station', 'booking2_undress'] },
    ]);
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterTakeFingerprints2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/police/fingerprint.jpg');
  scene.text('You obediently stand still as he takes your fingerprints again. Soon after, the officer points at the wall with the camera pointed at it, silently ordering you to stand there.');
  scene.actions([
    { label: 'Stand still', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/police/booked.jpg');
    scene.text('You walk over and stand next to the wall as the officer takes your mugshot.');
    scene.text('"Once I take your mugshot, I\'ll take you to the holding cell while we wait for one of your parents to come and pick you up."');
    scene.text('Once you\'re done, he leads you in silence back to your cell. He pushes you inside and the door loudly slams behind you.');
    scene.actions([
      { label: 'Inside the holding cell', goto: ['pav_station', 'holdingcell'] },
    ]);
  } },
    { label: 'Flip him off', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/police/bookedfu.jpg');
    scene.text('You scoff and flip him off as he takes your photo. He looks around the camera and glares at you a moment, then goes over and finishes the last of the paperwork. Once he is done he leads you out of the room and down towards the holding cells. You hear the door slam and it suddenly hits you that you\'re all alone and locked up.');
    scene.actions([
      { label: 'Inside the holding cell', goto: ['pav_station', 'holdingcell'] },
    ]);
  } },
    { label: 'Tease him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/police/bookedplay.jpg');
    scene.text('You smile and hold your fingers spread apart to your lips with your tongue between them as he takes your photo.');
    scene.text('He looks around the camera and sighs. "What are you doing?"');
    scene.actions([
      { label: 'Just having fun', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/police/booking_officer.jpg');
    scene.text('You smile innocently at him. "Nothing. I was just having a little harmless fun."');
    scene.text('He sighs and shakes his head before he finishes the last of the paperwork.');
    scene.text('Once he\'s done, he leads you out of the room and down towards the holding cells. You hear the door slam and it suddenly hits you that you\'re all alone and locked up.');
    scene.actions([
      { label: 'Inside the holding cell', goto: ['pav_station', 'holdingcell'] },
    ]);
  } },
      { label: 'Don\'t call my parents', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/police/booking_officer.jpg');
    scene.text('You give him your best seductive smile. "How about you close that door and we have a little fun and you just let me go? Sound good?"');
    scene.text('He walks over and closes the door as you await further instructions.');
    scene.text('"Take off your clothes," he orders in the same monotone voice.');
    scene.actions([
      { label: 'Get undressed', goto: ['pav_station', 'booking1_undress'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBooking2Undress(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/police/booking2.jpg');
  if (((s as any).policeQW ?? 0)?.['bookingofficer_sex_pav'] >= 5) {
    scene.text('You undress, knowing what he\'s likely to ask you to do next. You\'re a little turned on by the prospect of getting caught at any moment.');
    scene.text('"You know the drill by now, slut. Go over to the desk and I make the charges go away," he smiles.');
    if ((Math.floor(Math.random() * 2) + 0) === 0  &&  qspFunc(s, 'pcs_has_attr', 'sex_virgin') === 0) {
      scene.actions([
        { label: 'Move to the desk', goto: ['pav_station', 'booking_vaginal'] },
      ]);
    } else {
      scene.actions([
        { label: 'Move to the desk', goto: ['pav_station', 'booking_anal'] },
      ]);
    }
  } else {
    if (((s as any).policeQW ?? 0)?.['bookingofficer_sex_pav'] >= 4  &&  qspFunc(s, 'pcs_has_attr', 'sex_virgin') === 0) {
      scene.text('You undress, knowing what he\'s likely to ask you to do next. You\'re a little turned on by the prospect of getting caught at any moment.');
      scene.text('"Now go over to that desk over there and I\'ll make the charges go away," he smiles.');
      scene.actions([
        { label: 'Move to the desk', goto: ['pav_station', 'booking_vaginal'] },
      ]);
    } else {
      scene.text('As the initial surprise vanishes, you start to undress. You\'re still confused by it all, but at the same time feel a little turned on that you might get caught at any moment.');
      scene.text('"What now?" you ask as you try to cover up your body as much as you can.');
      scene.text('"How about you suck my dick and I make the charges go away?" he smiles.');
      qspCall(s, 'arousal', 'foreplay', 3, 'inhibition', 'sub');
      qspCall(s, 'stat', '');
      qspCall(s, 'willpower', 'sex', 'resist', 'hard');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Reject him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Reject him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/police/booking1.jpg');
    scene.text('You shake your head. "No, stop!"');
    scene.text('"What\'s wrong? I thought you wanted this? You\'ve been teasing me this whole time!" he hisses.');
    scene.text('"I don\'t want this, so please let me go or… or I\'ll scream!" you threaten him.');
    scene.text('"…Fine, have it your way," he mutters. "Get dressed and we\'ll continue then…"');
    scene.text('You quickly get dressed as the officer prepares the fingerprint process.');
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/police/fingerprint.jpg');
    scene.text('As you\'re about to begin the process, the officer speaks up. "You know I really would\'ve helped you? Think about it the next time."');
    scene.text('You sigh and hesitantly dip your finger one by one into the ink and take your time to press them against the paper. The officer then points at the wall and tells you to stand there.');
    scene.actions([
      { label: 'Take the mugshot', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/police/booked.jpg');
    scene.text('You drag your feet as you walk over to the wall. You stand still as he takes your picture.');
    scene.text('"That\'s all," he says. "Time for you to head over to the holding cell while we await a detective to come and interrogate you."');
    scene.text('You nod slowly as the officer ushers you out of the room. As you step out, he moves behind you and you feel his large hand groping your ass.');
    scene.text('"You\'ll regret that you rejected me," he comments quietly as he\'s about to lock the cell door. You hear the door slam and it suddenly hits you that you\'re all alone and locked up.');
    scene.actions([
      { label: 'Inside the holding cell', goto: ['pav_station', 'holdingcell'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Comply', handler: (st: GameState) => {
    ((s as any).policeQW ?? {})['bookingofficer_sex_pav'] = (((s as any).policeQW ?? {})['bookingofficer_sex_pav'] ?? 0) + (1);
    qspCall(s, 'arousal', 'bj', 5, 'inhibition', 'sub');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/police/bookingbj1.jpg');
    scene.text('You nod willingly as he leads you to the mugshot wall and makes you squat as he unzips his pants and exposes his hard cock to you. It pulses in front of your face as it eagerly awaits to enter your mouth.');
    scene.text('"Let\'s see how good you are with your mouth…" he says. "Remember to be quiet or else you\'ll get in even more trouble."');
    scene.text('He grabs his cock and shoves it into your mouth in one thrust. As you eagerly start to suck, you can feel his cock growing inside your mouth, a sign that you\'re doing well.');
    scene.text('After a while, he grabs and holds your wrists as he pushes himself deeper down your throat.');
    scene.text('"Swallow my cock, whore!" he growls.');
    scene.actions([
      { label: 'Keep sucking', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth');
    (s as any).spafinloc = 12;
    qspCall(s, 'cum_manage', '');
    qspCall(s, 'arousal', 'bj', 5, 'inhibition', 'sub');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/police/bookingbj2.jpg');
    scene.text('You continue sucking him, pleasing him in any way possible before you suddenly hear him panting heavily as his cock twitches.');
    scene.text('He pulls out of your mouth and tells you to open wide as he gives his cock a few jerks and cums into your mouth.');
    scene.text('Your mouth is quickly filled and you try your best to keep his enormous load from spilling out. Your first instinct is to spit it out, but he stares down at you expectantly.');
    scene.text('With a grimace, you swallow it all as he puts his cock away before zipping his pants up and walking over to the counter again.');
    scene.text('"Get dressed so we can finish the process," he tells you.');
    scene.actions([
      { label: 'Clean up', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'arousal', 'bj', 1, 'inhibition', 'sub');
    qspCall(s, 'cum_call', 'mouth', 'cop');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/police/bookingcum.jpg');
    scene.text('You make sure that there\'s no cum on your clothes and quickly get dressed as the officer prepares the fingerprint process.');
    scene.text('As you\'re about to begin the process, he speaks up. "Good thing you complied. Now I can help you out. It\'ll all be fine…"');
    scene.text('You sigh and hesitantly dip your finger one by one into the ink and take your time to press them against the paper. The officer then points at the wall and tells you to stand there.');
    scene.actions([
      { label: 'Take the mugshot', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/police/booked.jpg');
    scene.text('You drag yourself over to the wall and stand still as the officer takes your mugshot.');
    scene.text('"That\'s all," he says, "Now that we\'re done, follow me."');
    scene.text('He leads you through the station back to the front. You notice a few of the other offices looking at you with a smile, but no one says anything.');
    scene.text('Once you reach the door to the station, the officer opens the door for you. "Now try and stay out of trouble. Or don\'t."');
    scene.text('Once you walk out, he closes the door behind you.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave the station', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['pav_train_hall', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
  }
  scene.build();
}

function enterBookingVaginal(s: GameState, scene: SceneBuilder): void {
  ((s as any).policeQW ?? {})['bookingofficer_sex_pav'] = (((s as any).policeQW ?? {})['bookingofficer_sex_pav'] ?? 0) + (1);
  qspCall(s, 'arousal', 'vaginal', 2, 'inhibition', 'sub', 'rough');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/police/sex/bookingvag1.jpg');
  scene.text('You comply and walk over to the desk. "Is this really necessary?" you ask once again.');
  scene.text('He pushes you back and up onto the desk so you\'re laying on your back. "How many times do I need to explain myself? You should be used to this by now."');
  scene.text('He pulls his dick out and teases your slit with his tip before he thrusts his cock inside you. He then starts rapidly thrusting into you, not caring if you\'re enjoying it or not.');
  scene.text('After a few seconds, he suddenly pulls out of you and starts manhandling you. "Turn over."');
  scene.actions([
    { label: 'Turn over', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 3, 'inhibition', 'sub', 'rough');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/police/sex/bookingvag2.jpg');
    scene.text('Before you can even react, he roughly flips you over. You\'re still getting your balance back when you feel him thrust his dick back inside your wet pussy, causing you moan loudly.');
    scene.text('"Listen carefully. You really need to keep quiet now," he whispers as he pants.');
    scene.text('As your pussy adjusts to his cock, he picks up the pace.');
    scene.actions([
      { label: 'Get fucked some more', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', 1, 'inhibition', 'sub', 'rough');
    qspCall(s, 'cum_call', 'butt', 'cop');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/police/sex/bookingcum.jpg');
    scene.text('He starts grunting before he suddenly jerks out of you and you feel his hot cum splattering across your ass until he finally groans loudly and walks away from you.');
    scene.text('You glance over and see him tuck his dick back away and zip his pants up before he walks over to the counter. "Get dressed so we can finish the process."');
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/police/booking1.jpg');
    scene.text('You look around and see nothing you can use to clean yourself. You sigh and quickly get dressed as the officer prepares the fingerprint process.');
    scene.text('"Good thing you complied. Now I can help you out. It will all be fine…" he says with a small smile.');
    scene.text('You sigh and hesitantly dip your finger one by one into the ink, taking your time to press them against the paper.');
    scene.actions([
      { label: 'Take the mugshot', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/pavlovsk/police/booked.jpg');
    scene.text('You drag yourself over to the wall and stand still as the officer takes your mugshot.');
    scene.text('"That\'s all," he says, "Now that we\'re done, follow me."');
    scene.text('He leads you through the station back to the front. You notice a few of the other offices looking at you with a smile, but no one says anything.');
    scene.text('Once you reach the door to the station, the officer opens the door for you. "Now try and stay out of trouble. Or don\'t."');
    scene.text('Once you walk out, he closes the door behind you.');
    scene.actions([
      { label: 'Leave the station', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['pav_train_hall', ''] },
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

function enterBookingAnal(s: GameState, scene: SceneBuilder): void {
  ((s as any).policeQW ?? {})['bookingofficer_sex_pav'] = (((s as any).policeQW ?? {})['bookingofficer_sex_pav'] ?? 0) + (1);
  qspCall(s, 'arousal', 'anal', 2, 'inhibition', 'sub', 'rough');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/police/sex/bookinganal1.jpg');
  scene.text('You comply and walk over to the desk. "Is this really necessary?" you ask once again.');
  scene.text('He spins you around before he pushes you forward and bends you over the desk. "How many times do I need to explain myself? You should be used to this by now."');
  scene.text('You feel him working something into your asshole with his fingers before he thrusts his cock up your ass with no warning.');
  scene.text('You gasp in surprise as you grip the desk tightly, but he wastes no time and starts thrusting, not caring if you\'re enjoying it or not.');
  scene.actions([
    { label: 'Get reamed', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'anal', 3, 'inhibition', 'sub', 'rough');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/police/sex/bookinganal2.jpg');
    scene.text('He pounds you so hard and rough as he pushes down on you, the edge of the table digging painfully into your hips with each hard thrust. You grunt in pain and moan in pleasure as he roughly fucks your ass.');
    scene.text('"You really need to keep quiet now," he whispers as he pants.');
    scene.text('As your asshole adjusts to his cock, he picks up the pace even more.');
    scene.actions([
      { label: 'Get fucked some more', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'anal', 1, 'inhibition', 'sub', 'rough');
    qspCall(s, 'cum_call', 'butt', 'cop');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/police/sex/bookingcum.jpg');
    scene.text('He starts grunting before he suddenly jerks out of you and you feel his hot cum splattering across your ass until he finally groans loudly and walks away from you.');
    scene.text('You glance over and see him tuck his dick back away and zip his pants up before he walks over to the counter. "Get dressed so we can finish the process."');
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/police/booking1.jpg');
    scene.text('You look around and see nothing you can use to clean yourself. You sigh and quickly get dressed as the officer prepares the fingerprint process.');
    scene.text('"Good thing you complied. Now I can help you out. It will all be fine…" he says with a small smile.');
    scene.text('You sigh and hesitantly dip your finger one by one into the ink, taking your time to press them against the paper.');
    scene.actions([
      { label: 'Take the mugshot', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/pavlovsk/police/booked.jpg');
    scene.text('You drag yourself over to the wall and stand still as the officer takes your mugshot.');
    scene.text('"That\'s all," he says, "Now that we\'re done, follow me."');
    scene.text('He leads you through the station back to the front. You notice a few of the other offices looking at you with a smile, but no one says anything.');
    scene.text('Once you reach the door to the station, the officer opens the door for you. "Now try and stay out of trouble. Or don\'t."');
    scene.text('Once you walk out, he closes the door behind you.');
    scene.actions([
      { label: 'Leave the station', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['pav_train_hall', ''] },
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

function enterHoldingcell(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + (5 * (Math.floor(Math.random() * 7) + 6));
  if ((Math.floor(Math.random() * 2) + 1) === 1) {
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/police/injail.jpg');
  scene.text('You find a clean spot in one of the corners of the cell where you can sit. As you take a seat, the cold metal bench causes you to shiver.');
  scene.text('It feels like you\'re waiting forever, but surely it can\'t be as long as it feels.');
  scene.text('Finally, another officer come back and unlocks the cell. "Come on, someone has paid your fine."');
  // TODO-QSP: dynamic text: You walk out of the cell and he closes it behind you before he leads you to the ...
  scene.text(`You walk out of the cell and he closes it behind you before he leads you to the front of the station. As you walk into the main room, you find your ${((s as any).temp_rescuer ?? 0)} staring at you.`);
  scene.actions([
    { label: 'Stare back', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('text');
    scene.actions([
      { label: 'Get taken home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['korrPar', ''] },
    ]);
  } },
    { label: 'Look away', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('text');
    scene.actions([
      { label: 'Get taken home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['korrPar', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterRapeReport(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/police/pavrec.jpg');
  scene.text('One step after another, you trudge through town until you suddenly find yourself standing inside the police station. A bored looking cop glances at you.');
  scene.text('"Can I help you?"');
  scene.text('"I- I\'d like t-to report a r-rape…" you stammer out. The officer\'s eyes go wide with surprise, but less like he seems shocked at what you said happened to you and more like he didn\'t expect you to have a real complaint.');
  scene.text('"Oh! Well, just come this way, we can take your statement over here."');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 4) + 2);
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/police/interrogation1.jpg');
    scene.text('You sit down at a shoddy looking desk and another officer who looks only marginally more competent than the one who greeted you sits down across from you.');
    scene.text('"Alright ma\'am, tell me what happened to you."');
    scene.text('You explain to the officer as best as you can what happened to you while he takes notes. How you were randomly attacked, how you were violated.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/shared/police/interrogation2.jpg');
    scene.text('"And where did the attack occur?"');
    if (((s as any).loc ?? 0) === 'pav_commercial') {
      scene.text('"In th-the commercial district. But he pulled me away. I… I don\'t remember how far…"');
    } else {
      scene.text('"In th-the residential district. But he pulled me away. I… I don\'t remember how far…"');
    }
    scene.text('"Can you describe what he looked like?"');
    scene.text('The blood drains from your face. "I… I-!"');
    scene.text('"Anything about him will be helpful. Height? Build? Hair color? Eye color?"');
    scene.actions([
      { label: 'I… can\'t…', handler: (st: GameState) => {
    scene.img('images/locations/shared/police/interrogation1.jpg');
    scene.text('"He was… I don\'t remember how tall he was… And… he was wearing a nondescript hoody, I couldn\'t tell what his body type was… And-! And I don\'t know what he looks like… he was behind me during… the event…"');
    scene.text('The officer doesn\'t say anything, but you see him slightly shake his head. You realize that the information you gave him is going to be of little to no use at all. A rape in town and nothing else to go off of? You might as well have told him you saw a bird in the park.');
    scene.text('For a moment, you wonder how many other girls like you have sat at this desk filing a report just like this one only for it to go nowhere. You wonder if any of them had been raped by the same man who raped you…');
    if (((s as any).cumsumvag ?? 0) + ((s as any).cumsumass ?? 0) > 0) {
      scene.actions([
        { label: 'Can I get a rape kit?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 4) + 2);
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/police/interrogation2.jpg');
    scene.text('Suddenly, a spark of hope alights in your brain.');
    scene.text('"What about a rape kit?" you ask desperately. "He… finished inside me. I could-"');
    scene.text('Before you can finish, you see the officer shaking his head.');
    scene.text('"I\'m sorry ma\'am, but we\'re a small town police department. We simply don\'t have enough funding to afford rape kits. Even if we did, we don\'t have a lab that could examine it. I\'m sorry."');
    scene.text('As quickly as your hope flared, it is extinguished and you slump in your chair, feeling defeated.');
    scene.actions([
      { label: 'Finish the interview', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/police/pavext.jpg');
    scene.text('With that, you conclude the interview and are led to the front door.');
    scene.text('"We\'ll take this information into consideration. Again, we\'re very sorry for what happened to you."');
    scene.text('He then walks away, leaving you alone with your thoughts and memories of your rape…');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['pav_train_hall', ''] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Finish the interview', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 4) + 2);
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/police/pavrec.jpg');
    scene.text('With that, you conclude the interview and are led to the front door.');
    scene.text('"We\'ll take this information into consideration. Again, we\'re very sorry for what happened to you."');
    scene.text('He then walks away, leaving you so very alone…');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['pav_train_hall', ''] },
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
    case 'station_outside':
      enterStationOutside(s, scene);
      break;
    case 'station_inside':
      enterStationInside(s, scene);
      break;
    case 'reception':
      enterReception(s, scene);
      break;
    case 'entrance':
      enterEntrance(s, scene);
      break;
    case 'first_shoplift':
      enterFirstShoplift(s, scene);
      break;
    case 'first_prostitution':
      enterFirstProstitution(s, scene);
      break;
    case 'repeat':
      enterRepeat(s, scene);
      break;
    case 'multiple':
      enterMultiple(s, scene);
      break;
    case 'regular':
      enterRegular(s, scene);
      break;
    case 'booking':
      enterBooking(s, scene);
      break;
    case 'booking1':
      enterBooking1(s, scene);
      break;
    case 'take_fingerprints1':
      enterTakeFingerprints1(s, scene);
      break;
    case 'booking1_undress':
      enterBooking1Undress(s, scene);
      break;
    case 'booking2':
      enterBooking2(s, scene);
      break;
    case 'take_fingerprints2':
      enterTakeFingerprints2(s, scene);
      break;
    case 'booking2_undress':
      enterBooking2Undress(s, scene);
      break;
    case 'booking_vaginal':
      enterBookingVaginal(s, scene);
      break;
    case 'booking_anal':
      enterBookingAnal(s, scene);
      break;
    case 'holdingcell':
      enterHoldingcell(s, scene);
      break;
    case 'rape_report':
      enterRapeReport(s, scene);
      break;
    default:
      enterStationOutside(s, scene);
      break;
  }
}

export const pav_station: LocationDef = {
  name: 'pav_station',
  title: 'Reception area',
  region: 'pavlovsk',
  locationType: 'public_indoors',
  description: ['The police station is gleaming in a bright yellow color, clearly making it clear that it can\'t be missed by anyone.'],
  enter: enter,
};
