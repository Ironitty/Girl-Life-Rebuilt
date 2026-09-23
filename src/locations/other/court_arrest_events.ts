import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterBookingStart(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'shplft'  ||  String((s as any).locArgs?.[1] ?? '') === 'shoplift') {
    qspCall(s, 'court_functions', 'arrest_for', 'shoplift');
    (s as any).temp_tot_arrests = qspFunc(s, 'court_functions', 'get_total_arrests');
    if (((s as any).temp_tot_arrests ?? 0) === 1) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstShoplift(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).temp_tot_arrests ?? 0) < 6) {
        qspGoto(s, 'court_arrest_events', 'repeat');
      } else {
        if (((s as any).temp_tot_arrests ?? 0) < 11) {
          qspGoto(s, 'court_arrest_events', 'multiple');
        } else {
          qspGoto(s, 'court_arrest_events', 'regular');
        }
      }
    }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'prst'  ||  String((s as any).locArgs?.[1] ?? '') === 'prostitution') {
      qspCall(s, 'court_functions', 'arrest_for', 'prostitution');
      (s as any).temp_tot_arrests = qspFunc(s, 'court_functions', 'get_total_arrests');
      if (((s as any).temp_tot_arrests ?? 0) === 1) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstProstitution(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (((s as any).temp_tot_arrests ?? 0) < 6) {
          qspGoto(s, 'court_arrest_events', 'repeat');
        } else {
          if (((s as any).temp_tot_arrests ?? 0) < 11) {
            qspGoto(s, 'court_arrest_events', 'multiple');
          } else {
            qspGoto(s, 'court_arrest_events', 'regular');
          }
        }
      }
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'pub_ind'  ||  String((s as any).locArgs?.[1] ?? '') === 'public_indecency') {
        qspCall(s, 'court_functions', 'arrest_for', 'public_indecency');
        (s as any).temp_tot_arrests = qspFunc(s, 'court_functions', 'get_total_arrests');
        if (((s as any).temp_tot_arrests ?? 0) === 1) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstPublicIndecency(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          if (((s as any).temp_tot_arrests ?? 0) < 6) {
            qspGoto(s, 'court_arrest_events', 'repeat');
          } else {
            if (((s as any).temp_tot_arrests ?? 0) < 11) {
              qspGoto(s, 'court_arrest_events', 'multiple');
            } else {
              qspGoto(s, 'court_arrest_events', 'regular');
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBookingEnd(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'police_station', 'booking');
  // TODO-QSP: end
  scene.build();
}

function enterFirstShoplift(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'pain', '', 2, 'armR', 'pinch');
  qspCall(s, 'stat', '');
  if (((s as any).policeQW ?? 0)?.['toldonguard'] === 2) {
    scene.text('"I\'m not lying! That security guard forced me to have sex with him! Why won\'t you believe me?" you plead, but it does you no good.');
    scene.text('The officer sighs. "You think you\'re the first to try that? I\'ve heard it all from you thieving little whores. You\'re not the victim here!"');
    scene.text('With a dejected whimper, you look down to the floor as you\'re led further into the station to be booked.');
  } else {
    if (((s as any).grupTipe ?? 0) === 4) {
      scene.text('"Security over at the mall caught a wild one today. This little bitch tried to bite me as I was bringing her in!"');
      scene.text('The others shake their head as he leads you further inside the police station.');
      scene.text('"Wow, you\'re real tough manhandling a girl barely half your size!" you hiss.');
      scene.text('"You think this is being too rough? I can show you a thing or two about real pain," he threatens.');
    } else {
      if (((s as any).pcs_hotcat ?? 0) >= 7) {
        scene.text('"Look who was caught stealing by the security guys at the mall! I guess being pretty can\'t get you everything you want," he says with a cruel laugh.');
        scene.text('Most of officers just grin and laugh, but you hear a few make crude comments as you\'re led further inside the police station.');
        scene.text('"Hey, you\'re hurting my arm!" you whine. "Could you please loosen up? It\'s not like I\'m going to try to run!"');
        scene.text('"Being pretty isn\'t going to get you any special treatment, girly. You\'re a criminal, just like everyone else brought through here," he spits back.');
      } else {
        if (((s as any).pcs_hotcat ?? 0) <= 3) {
          scene.text('"You\'ll never guess what she was brought in for!" he laughs. "Security at the mall caught this one trying to steal beauty products. You can put makeup on a pig, but it\'ll still be a pig!"');
          scene.text('The others laugh loudly as he leads you further inside the police station.');
          scene.text('"Hey, you\'re hurting my arm!" you whine. "Could you please loosen up? It\'s not like I\'m going to try to run!"');
          scene.text('"What were you thinking stealing make-up?" he asks, ignoring your pleas. "It wouldn\'t do you a damn bit of good. You\'d still look like you were hit with a brick!"');
        } else {
          scene.text('"The security guys over at the mall caught this little mouse trying to steal some stuff. I guess looks can be deceiving; I would have never thought she\'d be the type."');
          scene.text('Some of the other officers just shrug or click their tongue disapprovingly before he leads you deeper inside the police station.');
          scene.text('"Hey, you\'re hurting my arm!" you whine. "Could you please loosen up? It\'s not like I\'m going to try to run!"');
          scene.text('"Oh, don\'t like the way I\'m treating you, little mouse? Well, you should have thought about that before trying to play thief!" he spits back.');
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue further in', goto: ['court_arrest_events', 'booking_end'] },
  ]);
  scene.build();
}

function enterFirstProstitution(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'pain', '', 2, 'armR', 'pinch');
  qspCall(s, 'stat', '');
  if (((s as any).policeQW ?? 0)?.['prostitution_bribe'] === 1) {
    if (((s as any).pcs_hotcat ?? 0) <= 3) {
      scene.text('"I caught this one whoring herself out and you know what she tried to do? She tried to bribe me with sex!"');
      scene.text('The others shake their heads. "What was she thinking? No one would fuck someone as ugly as her!"');
      scene.text('You hang your head in shame as you\'re led further into the station for booking.');
    } else {
      if (((s as any).pcs_hotcat ?? 0) >= 7) {
        scene.text('"I caught this one whoring herself out and you know what she tried to do? She tried to bribe me with sex!"');
        scene.text('The other officers eye you hungrily. "You\'re a better man than me!" one of them exclaims. "Just look at her! How often do you get a chance like that? I would have said yes!"');
        scene.text('A small smile plays across your face, feeling a tiny bit flattered as you\'re led further into the station to get booked.');
      } else {
        scene.text('"I caught this one whoring herself out and you know what she tried to do? She tried to bribe me with sex!"');
        scene.text('"Well, she doesn\'t look <i>that</i> bad," the others joke. "I wouldn\'t have agreed, but I can see it working on someone else."');
        scene.text('You frown at their rude remarks, but remain silent as you\'re led further into the station to be booked.');
      }
    }
  } else {
    if (((s as any).pcs_hotcat ?? 0) <= 3) {
      scene.text('"I caught this one whoring herself out. Can you believe that? Who would ever want to fuck this pig?!" he exclaims and the staff erupt with laughter.');
      scene.text('"What was she thinking? Honestly, you\'ve done everyone a favor getting her off the streets," one of the officers replies before you\'re led further into the station.');
    } else {
      if (((s as any).pcs_hotcat ?? 0) >= 7) {
        scene.text('"I caught this one whoring herself out on the street corner. Such a waste," he says as he turns to you and shakes his head. "A hot thing like you could shack up with some rich guy and leech off him, but I guess that\'s not enough for a cock hungry whore like you, huh? One just ain\'t enough."');
        scene.text('The other officers laugh cruelly. "It really is a shame. Just look at her, she\'s damn gorgeous! You must have some real issues to be selling yourself to strangers."');
        scene.text('"I\'m sure the money is great!" the officer holding you laughs loudly as he leads you further inside the police station.');
      } else {
        scene.text('"I caught this one whoring herself out. She ain\'t bad looking, but you know she\'s not making money like those other girls," he says with a disappointing click of the tongue.');
        scene.text('The other officers shrug and shake their heads. "Probably some cheap bastards out there that can\'t afford to be picky," one speaks up as you\'re led further into the station.');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue further in', goto: ['court_arrest_events', 'booking_end'] },
  ]);
  scene.build();
}

function enterRepeat(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'pain', '', 2, 'armR', 'pinch');
  qspCall(s, 'stat', '');
  (s as any).police_event = (Math.floor(Math.random() * 5) + 1);
  if (((s as any).police_event ?? 0) === 1) {
    scene.text('"Look who\'s back! She just couldn\'t stay out of trouble."');
    scene.text('The others smile and shake their heads as he leads you further inside the police station.');
  } else {
    if (((s as any).police_event ?? 0) === 2) {
      scene.text('"She really likes getting in trouble! Must be the good food that\'s served here."');
      scene.text('The others laugh and shake their heads as he leads you further inside the police station.');
    } else {
      if (((s as any).police_event ?? 0) === 3) {
        scene.text('"Look who I brought back with me. She just can\'t keep away from here!"');
        scene.text('The others smile and shake their heads as he leads you further inside the police station.');
      } else {
        if (((s as any).police_event ?? 0) === 4) {
          // TODO-QSP: dynamic text: "Time to book <<$pcs_lastname>> again. She just can''t keep out of trouble."
          scene.text(`"Time to book ${((s as any).pcs_lastname ?? '')} again. She just can't keep out of trouble."`);
          scene.text('The others shake their heads as he leads you further inside the police station.');
        } else {
          if (((s as any).police_event ?? 0) === 5) {
            scene.text('"You really like to get in trouble, don\'t you?"');
            scene.text('The others shake their heads as he leads you further inside the police station.');
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue further in', goto: ['court_arrest_events', 'booking_end'] },
  ]);
  scene.build();
}

function enterMultiple(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'pain', '', 2, 'armR', 'pinch');
  qspCall(s, 'stat', '');
  (s as any).police_event = (Math.floor(Math.random() * 5) + 1);
  if (((s as any).police_event ?? 0) === 1) {
    scene.text('"You\'re getting a bit familiar with this place, aren\'t you?"');
    scene.text('The others shake their heads as he leads you further inside the police station.');
  } else {
    if (((s as any).police_event ?? 0) === 2) {
      scene.text('The staff sitting at the reception desk glance at you as the arresting officer sighs. "Why won\'t you learn? You know doing this will only lead to worse things…"');
      scene.text('The others shake their heads as he leads you further inside the police station.');
    } else {
      if (((s as any).police_event ?? 0) === 3) {
        // TODO-QSP: dynamic text: The staff sitting at the reception desk glance at you as the arresting officer s...
        scene.text(`The staff sitting at the reception desk glance at you as the arresting officer sighs. "I'm getting tired of seeing you around here, ${((s as any).pcs_lastname ?? '')}…"`);
        scene.text('The others shake their heads as he leads you further inside the police station.');
      } else {
        if (((s as any).police_event ?? 0) === 4) {
          // TODO-QSP: dynamic text: The staff sitting at the reception desk glance at you while the officer sighs ti...
          scene.text(`The staff sitting at the reception desk glance at you while the officer sighs tiredly. "You're flushing your life straight down the shitter if you keep this up, ${((s as any).pcs_lastname ?? '')}."`);
          scene.text('The others shake their heads as he leads you further inside the police station.');
        } else {
          if (((s as any).police_event ?? 0) === 5) {
            // TODO-QSP: dynamic text: The staff sitting at the reception desk glance at you as the arresting officer s...
            scene.text(`The staff sitting at the reception desk glance at you as the arresting officer sighs. "Here we go again. You know the drill, ${((s as any).pcs_lastname ?? '')}…"`);
            scene.text('The others shake their heads as he leads you further inside the police station.');
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue further in', goto: ['court_arrest_events', 'booking_end'] },
  ]);
  scene.build();
}

function enterRegular(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'pain', '', 2, 'armR', 'pinch');
  qspCall(s, 'stat', '');
  (s as any).police_event = (Math.floor(Math.random() * 8) + 1);
  if (((s as any).police_event ?? 0) === 1) {
    // TODO-QSP: dynamic text: The staff sitting at the reception desk glance your way as the arresting officer...
    scene.text(`The staff sitting at the reception desk glance your way as the arresting officer glares down at you. "I'm sick and tired of processing you, ${((s as any).pcs_lastname ?? '')}! I hope they lock you away for a long time!"`);
    scene.text('The others shake their heads as he leads you further inside the police station.');
  } else {
    if (((s as any).police_event ?? 0) === 2) {
      scene.text('The staff sitting at the reception desk glance your way as the arresting officer smirks. "Well, if it isn\'t our favorite customer. How long will you be staying this time?"');
      scene.text('The others laugh loudly as he leads you further inside the police station.');
    } else {
      if (((s as any).police_event ?? 0) === 3) {
        // TODO-QSP: dynamic text: The staff sitting at the reception desk glance at you as the arresting officer s...
        scene.text(`The staff sitting at the reception desk glance at you as the arresting officer sighs heavily. "Why do you continue doing this, ${((s as any).pcs_lastname ?? '')}? Aren't you getting tired of this life?"`);
        scene.text('The others shake their heads as he leads you further inside the police station.');
      } else {
        if (((s as any).police_event ?? 0) === 4) {
          scene.text('The staff sitting at the reception desk glance at you as the arresting officer smiles sarcastically. "What a surprise, it\'s our favorite little criminal!"');
          scene.text('The others shake their heads as he leads you further inside the police station.');
        } else {
          if (((s as any).police_event ?? 0) === 5) {
            scene.text('The staff sitting at the reception desk glance at you as the arresting officer sighs heavily. "May they lock you up for a long time…"');
            scene.text('The others shake their heads as he leads you further inside the police station.');
          } else {
            if (((s as any).police_event ?? 0) === 6) {
              // TODO-QSP: dynamic text: The staff sitting at the reception desk glance at you as the arresting officer s...
              scene.text(`The staff sitting at the reception desk glance at you as the arresting officer sighs heavily. "There's really no saving you, ${((s as any).pcs_lastname ?? '')}…"`);
              scene.text('The others shake their heads as he leads you further inside the police station.');
            } else {
              if (((s as any).police_event ?? 0) === 7) {
                scene.text('The staff sitting at the reception desk glance at you as the arresting officer sighs heavily. "I hope they give you a long sentence this time…"');
                scene.text('The others shake their heads as he leads you further inside the police station.');
              } else {
                if (((s as any).police_event ?? 0) === 8) {
                  // TODO-QSP: dynamic text: The staff sitting at the reception desk glance at you as the arresting officer s...
                  scene.text(`The staff sitting at the reception desk glance at you as the arresting officer sighs heavily. "I don't know what to say anymore, ${((s as any).pcs_lastname ?? '')}… You're really a lost case…"`);
                  scene.text('The others shake their heads as he leads you further inside the police station.');
                }
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue further in', goto: ['court_arrest_events', 'booking_end'] },
  ]);
  scene.build();
}

function enterInterrogationStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).policeQW ?? 0)?.['crime_flag'] === 'shoplift') {
    if (String((s as any).locArgs?.[1] ?? '') === 'easy') {
      qspGoto(s, 'court_arrest_events', 'shoplift_easy');
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'norm') {
        qspGoto(s, 'court_arrest_events', 'shoplift_norm');
      } else {
        qspGoto(s, 'court_arrest_events', 'shoplift_hard');
      }
    }
  } else {
    if (((s as any).policeQW ?? 0)?.['crime_flag'] === 'prostitution') {
      if (String((s as any).locArgs?.[1] ?? '') === 'easy') {
        qspGoto(s, 'court_arrest_events', 'prostitution_easy');
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 'norm') {
          qspGoto(s, 'court_arrest_events', 'prostitution_norm');
        } else {
          qspGoto(s, 'court_arrest_events', 'prostitution_hard');
        }
      }
    } else {
      if (((s as any).policeQW ?? 0)?.['crime_flag'] === 'public_indecency') {
        qspGoto(s, 'court_arrest_events', 'public_indecency_interrogation');
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterInterrogationEnd(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'police_station', 'returncell');
  // TODO-QSP: end
  scene.build();
}

function enterShopliftEasy(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'stat', '');
  (s as any).picrand = (Math.floor(Math.random() * 2) + 1);
  scene.img(`images/locations/shared/police/interrogation${((s as any).picrand ?? '')}.jpg`);
  scene.text('He takes a seat at the table opposite of you. "So. Caught stealing, huh?"');
  scene.text('You nervously look around, trying to avoid eye contact.');
  scene.text('He\'s quick to notice your nervousness and tells you to relax. "Now start from the beginning…"');
  scene.text('You take a deep breath and begin confessing your crime as the detective listens attentively.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    if (((st as any).policeQW ?? 0)?.['toldonguard'] === 2) {
      ((st as any).policeQW = (st as any).policeQW ?? {})['toldonguard'] = 1;
      (st as any).picrand = (Math.floor(Math.random() * 2) + 1);
      scene.img(`images/locations/shared/police/interrogation${((st as any).picrand ?? '')}.jpg`);
      scene.text('You tear up. "In the end, the security guard forced me to have sex with him…"');
      scene.text('The detective looks up. "Sounds awful! I\'ll send some officers over to have a talk with him and we\'ll take actions against him. Assuming you\'re telling the truth, of course."');
      scene.text('You nod your head. "I am! I promise!" you quickly reply before continuing to admit to everything while the detective writes down some notes.');
      // TODO-QSP: dynamic text: "Okay, here''s the deal, <<$pcs_firstname>>. We have a civil court judge for the...
      scene.text(`"Okay, here's the deal, ${((st as any).pcs_firstname ?? '')}. We have a civil court judge for these kind of cases and as you've made my job easy by admitting everything, I can get you in front of him today. Don't worry, I'll put in a good word for you," he reassures gently.`);
    } else {
      (st as any).picrand = (Math.floor(Math.random() * 2) + 1);
      scene.img(`images/locations/shared/police/interrogation${((st as any).picrand ?? '')}.jpg`);
      scene.text('As you finish, you see the detective write down one last thing before looking at you. "Good, that\'s everything I need."');
      scene.text('"What will happen to me?" you ask.');
      scene.text('"Don\'t worry. It was a petty crime and you\'ve been more than cooperative with me and the booking officer, so I\'ll put in a good word for you to the civil court judge," he reassures you.');
    }
    scene.actions([
      { label: 'Return to the holding cell', goto: ['court_arrest_events', 'interrogation_end'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterShopliftNorm(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'stat', '');
  (s as any).picrand = (Math.floor(Math.random() * 2) + 1);
  scene.img(`images/locations/shared/police/interrogation${((s as any).picrand ?? '')}.jpg`);
  scene.text('He takes a seat opposite of you. "So. Caught stealing, huh?"');
  scene.text('You nervously look around, trying to avoid eye contact.');
  // TODO-QSP: dynamic text: "Look here, <<$pcs_firstname>>. I''m just trying to do my job, so let''s make th...
  scene.text(`"Look here, ${((s as any).pcs_firstname ?? '')}. I'm just trying to do my job, so let's make this quick and easy: tell the truth and confess to everything."`);
  scene.text('You take a deep breath and begin to talk.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    if (((st as any).policeQW ?? 0)?.['toldonguard'] === 2) {
      ((st as any).policeQW = (st as any).policeQW ?? {})['toldonguard'] = 1;
      (st as any).picrand = (Math.floor(Math.random() * 2) + 1);
      scene.img(`images/locations/shared/police/interrogation${((st as any).picrand ?? '')}.jpg`);
      scene.text('You tear up. "In the end, the security guard forced me to have sex with him…"');
      scene.text('The detective isn\'t really paying attention to you as he scribbles things down. "I\'ll see if there are any free officers to head over and interrogate the security guard about it."');
      scene.text('You nod your head before continuing the confession. The detective looks bored, but he continues writing everything down.');
      // TODO-QSP: dynamic text: "Okay, here''s the deal, <<$pcs_firstname>>. We have a civil court judge for the...
      scene.text(`"Okay, here's the deal, ${((st as any).pcs_firstname ?? '')}. We have a civil court judge for these kind of cases and since you've already admitted to everything, we might as well take you in front of him and see how it goes," he says tiredly.`);
    } else {
      (st as any).picrand = (Math.floor(Math.random() * 2) + 1);
      scene.img(`images/locations/shared/police/interrogation${((st as any).picrand ?? '')}.jpg`);
      // TODO-QSP: dynamic text: As you finish, the detective looks at you with an unreadable expression. "Well, ...
      scene.text(`As you finish, the detective looks at you with an unreadable expression. "Well, you've pretty much confessed to everything, ${((st as any).pcs_firstname ?? '')}. It's an open and shut case."`);
      scene.text('"What will happen to me?" you ask.');
      scene.text('"Who knows? I\'m not the civil court judge," he shrugs.');
    }
    scene.actions([
      { label: 'Return to the holding cell', goto: ['court_arrest_events', 'interrogation_end'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterShopliftHard(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'stat', '');
  (s as any).picrand = (Math.floor(Math.random() * 2) + 1);
  scene.img(`images/locations/shared/police/interrogation${((s as any).picrand ?? '')}.jpg`);
  scene.text('He takes a seat opposite of you. "So. Caught stealing, huh?"');
  scene.text('You shrug your shoulders nonchalantly, not really caring what might happen.');
  // TODO-QSP: dynamic text: "Don''t waste my time, <<$pcs_firstname>>!" he threatens. "If you won''t take th...
  scene.text(`"Don't waste my time, ${((s as any).pcs_firstname ?? '')}!" he threatens. "If you won't take this seriously, then I won't put in the effort to give a shit what happens to you. Now stop fucking around and tell me everything you did."`);
  scene.text('You stutter as you begin confessing.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    if (((st as any).policeQW ?? 0)?.['toldonguard'] === 2) {
      ((st as any).policeQW = (st as any).policeQW ?? {})['toldonguard'] = 1;
      (st as any).picrand = (Math.floor(Math.random() * 2) + 1);
      scene.img(`images/locations/shared/police/interrogation${((st as any).picrand ?? '')}.jpg`);
      scene.text('You tear up. "In the end, the security guard forced me to have sex with him…"');
      scene.text('The detective\'s scowl deepens as he glares at you. "You think you can just say shit like that and get away with everything? Stop lying or I\'ll throw you back in that cell with that crazy woman."');
      scene.text('You shake your head. "I\'m telling the truth! Why won\'t you believe me?!"');
      scene.text('The detective lets out a loud sigh. "Sticking to your lies, huh? Fine, but let me be clear: lying about a hard working security officer like this just to get away with stealing is going to make you an enemy to a lot of people around here, including the judge you\'re about to see. I\'m sure he\'ll love to hear your swan song."');
    } else {
      (st as any).picrand = (Math.floor(Math.random() * 2) + 1);
      scene.img(`images/locations/shared/police/interrogation${((st as any).picrand ?? '')}.jpg`);
      scene.text('As you finish, the detective looks up at you. "Good, that\'s everything I need from you. Makes my job easier."');
      scene.text('"What will happen to me?" you ask.');
      scene.text('"Hopefully the civil court judge will give be going for a long and hard sentence. Criminals need to be taught a lesson," he says coldly.');
    }
    scene.actions([
      { label: 'Return to the holding cell', goto: ['court_arrest_events', 'interrogation_end'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterProstitutionEasy(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/police/interrogationpro.jpg');
  scene.text('He takes a seat opposite of you. "So. Caught prostituting, huh?"');
  scene.text('You nervously look around, trying to avoid eye contact.');
  scene.text('He\'s quick to notice your nervousness and tells you to relax. "Now start from the beginning…"');
  scene.text('You take a deep breath and begin confessing your crime as the detective listens attentively.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    if (((st as any).policeQW ?? 0)?.['prostitution_bribe'] === 2) {
      scene.img('images/locations/shared/police/interrogationpro.jpg');
      scene.text('After listening to your story, the detective clears his throat. "And this was when you tried to offer the officer sex?"');
      scene.text('You stop and nod your head. "Yes, I… I thought it would get me off the hook…" You continue to confess while the detective writes down some notes.');
      // TODO-QSP: dynamic text: "Okay, here''s the deal, <<$pcs_firstname>>. We have a civil court judge for the...
      scene.text(`"Okay, here's the deal, ${((st as any).pcs_firstname ?? '')}. We have a civil court judge for these kind of cases and since you've already admitted to everything, we might as well take you in front of him. I'll try to put in a good word for you," he says.`);
    } else {
      if (((st as any).policeQW ?? 0)?.['prostitution_bribe'] === 1) {
        scene.img('images/locations/shared/police/interrogationpro.jpg');
        scene.text('After listening to your story, the detective clears his throat. "And this was when you tried to offer the officer money?"');
        scene.text('You stop and nod your head. "Yes, I… I thought it would get me off the hook…" You continue to confess while the detective writes down some notes.');
        // TODO-QSP: dynamic text: "Okay, here''s the deal, <<$pcs_firstname>>. We have a civil court judge for the...
        scene.text(`"Okay, here's the deal, ${((st as any).pcs_firstname ?? '')}. We have a civil court judge for these kind of cases and since you've already admitted to everything, we might as well take you in front of him. I'll try to put in a good word for you," he says.`);
      } else {
        scene.img('images/locations/shared/police/interrogationpro.jpg');
        scene.text('As you finish, you see the detective write down one last thing before looking at you. "Good, that\'s everything I need."');
        scene.text('"What will happen to me?" you ask.');
        scene.text('"Don\'t worry, the civil court judge probably won\'t care too much about the crime and both the booking officer and I will put in a good word for you since you made our job easy and confessed to everything. The punishment, if there is one, shouldn\'t be too bad," he reassures you.');
      }
    }
    scene.actions([
      { label: 'Return to the holding cell', goto: ['court_arrest_events', 'interrogation_end'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterProstitutionNorm(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/police/interrogationpro.jpg');
  scene.text('He takes a seat opposite of you, "So. Caught prostituting, huh?"');
  scene.text('You nervously look around, trying to avoid eye contact.');
  // TODO-QSP: dynamic text: "Look here, <<$pcs_firstname>>. I''m just trying to do my job here, so how about...
  scene.text(`"Look here, ${((s as any).pcs_firstname ?? '')}. I'm just trying to do my job here, so how about you confess and we'll take it from there?"`);
  scene.text('You take a deep breath and begin to talk.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    if (((st as any).policeQW ?? 0)?.['prostitution_bribe'] === 2) {
      scene.img('images/locations/shared/police/interrogationpro.jpg');
      scene.text('You tear up. "And that\'s when I thought I could bribe the officer with sex…"');
      scene.text('The detective, not really paying attention, scribbles it down. "Attempted to bribe the officer with sex," he repeats.');
      scene.text('You nod your head before continuing to confess to the bored looking detective.');
      // TODO-QSP: dynamic text: "Okay <<$pcs_firstname>>, we have a civil court judge for these kind of cases an...
      scene.text(`"Okay ${((st as any).pcs_firstname ?? '')}, we have a civil court judge for these kind of cases and since you've already admitted to everything, we might as well take you in front of him and we'll see how it goes…" he says tiredly.`);
    } else {
      if (((st as any).policeQW ?? 0)?.['prostitution_bribe'] === 1) {
        scene.img('images/locations/shared/police/interrogationpro.jpg');
        scene.text('You tear up. "And that\'s when I thought I could bribe the officer with money…"');
        scene.text('The detective, not really paying attention, scribbles it down. "Attempted to bribe the officer with money," he repeats.');
        scene.text('You nod your head before continuing to confess to the bored looking detective.');
        // TODO-QSP: dynamic text: "Okay, here''s the deal, <<$pcs_firstname>>. We have a civil court judge for the...
        scene.text(`"Okay, here's the deal, ${((st as any).pcs_firstname ?? '')}. We have a civil court judge for these kind of cases and since you've already admitted to everything, we might as well take you in front of him and we'll see how it goes…" he says tiredly.`);
      } else {
        scene.img('images/locations/shared/police/interrogationpro.jpg');
        // TODO-QSP: dynamic text: As you finish, you see the detective write down one last thing before looking at...
        scene.text(`As you finish, you see the detective write down one last thing before looking at you. "Well, you've pretty much confessed to everything, ${((st as any).pcs_firstname ?? '')}. It's an open and shut case."`);
        scene.text('"What will happen to me?" you ask.');
        scene.text('"Truth be told, I don\'t really know what kind of sentence the judge will be going for," he tells you.');
      }
    }
    scene.actions([
      { label: 'Return to the holding cell', goto: ['court_arrest_events', 'interrogation_end'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterProstitutionHard(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/police/interrogationpro.jpg');
  scene.text('He takes a seat opposite of you, "So. Caught prostituting, huh?"');
  scene.text('You shrug your shoulders nonchalantly, not really caring what might happen.');
  // TODO-QSP: dynamic text: "Don''t waste my time, <<$pcs_firstname>>!" he threatens. "If you won''t take th...
  scene.text(`"Don't waste my time, ${((s as any).pcs_firstname ?? '')}!" he threatens. "If you won't take this seriously, then I won't put in the effort to give a shit what happens to you. Now stop fucking around and tell me everything you did."`);
  scene.text('You stutter as you begin confessing.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    if (((st as any).policeQW ?? 0)?.['prostitution_bribe'] === 2) {
      scene.img('images/locations/shared/police/interrogationpro.jpg');
      scene.text('You tear up. "And that\'s when I thought I could bribe the officer with sex…"');
      scene.text('The detective\'s face twists into a scowl. "You think you can get away with this by accusing someone of rape?!"');
      scene.text('You shake your head. "Not at all! I\'ve heard from the other girls that they\'ve gotten away by doing that, so I thought--"');
      // TODO-QSP: dynamic text: He slams his fist down on the table. "You think you can get away with telling th...
      scene.text(`He slams his fist down on the table. "You think you can get away with telling these kind of lies against our fine police force?! You're in deep shit now, ${((st as any).pcs_firstname ?? '')}. I'm taking you to see the judge, and we'll see how he likes hearing you make a mockery of our justice system!"`);
    } else {
      if (((st as any).policeQW ?? 0)?.['prostitution_bribe'] === 1) {
        scene.img('images/locations/shared/police/interrogationpro.jpg');
        scene.text('You tear up. "And that\'s when I thought I could bribe the officer with money…"');
        scene.text('The detective\'s face twists into a scowl. "You thought you could just buy your way out of this? That\'s not how the world works! Your actions have consequences!"');
        scene.text('You shake your head. "Not at all! I\'ve heard from the other girls that they\'ve gotten away by doing that, so I thought--"');
        // TODO-QSP: dynamic text: He slams his fist down on the table. "You think you can get away with telling th...
        scene.text(`He slams his fist down on the table. "You think you can get away with telling these kind of lies against our fine police force?! You're in deep shit now, ${((st as any).pcs_firstname ?? '')}. I'm taking you to see the judge, and we'll see how he likes hearing you make a mockery of our justice system!"`);
      } else {
        scene.img('images/locations/shared/police/interrogationpro.jpg');
        scene.text('As you finish, you see the detective looks at you. "Good, just what I was looking for. You\'ve confessed everything. Makes my job, and the prosecutor\'s, much easier."');
        scene.text('"What will happen to me?" you ask.');
        scene.text('"Hopefully the judge will give you a long and hard sentence," he angrily answers.');
      }
    }
    scene.actions([
      { label: 'Return to the holding cell', goto: ['court_arrest_events', 'interrogation_end'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterFirstPublicIndecency(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'pain', '', 2, 'armR', 'pinch');
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/police/arrested.jpg');
  if (((s as any).pcs_hotcat ?? 0) >= 7) {
    // TODO-QSP: dynamic text: '"Well, well,"' + ' the officer chuckles to his colleagues as he brings you in. ...
    scene.text('\'"Well, well,"\' + \' the officer chuckles to his colleagues as he brings you in. "This one got herself arrested for flashing in the park. At least we know why she thought she could get away with it."\'');
    scene.text('A few of them grin. You look at the floor as you\'re led further into the station.');
  } else {
    if (((s as any).pcs_hotcat ?? 0) <= 3) {
      // TODO-QSP: dynamic text: '"Brought in for public indecency,"' + ' he announces flatly. "In the park." Som...
      scene.text('\'"Brought in for public indecency,"\' + \' he announces flatly. "In the park." Someone snorts. The humiliation is complete.\'');
      scene.text('You stare at the floor as he leads you further inside.');
    } else {
      // TODO-QSP: dynamic text: '"Caught exposing herself in the park,"' + ' the officer announces, not botherin...
      scene.text('\'"Caught exposing herself in the park,"\' + \' the officer announces, not bothering to lower his voice. A few heads turn. "Take a seat over there."\'');
      scene.text('He steers you toward the booking area without ceremony.');
    }
  }
  if (((s as any).flash_police_resist ?? 0) === 1) {
    // TODO-QSP: dynamic text: '"Resisting arrest on top of it,"' + ' the officer adds, almost as an afterthoug...
    scene.text('\'"Resisting arrest on top of it,"\' + \' the officer adds, almost as an afterthought. A few heads turn.\'');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue further in', goto: ['court_arrest_events', 'booking_end'] },
  ]);
  scene.build();
}

function enterPublicIndecencyInterrogation(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'stat', '');
  (s as any).picrand = (Math.floor(Math.random() * 2) + 1);
  scene.img(`images/locations/shared/police/interrogation${((s as any).picrand ?? '')}.jpg`);
  // TODO-QSP: dynamic text: '"So,"' + ' the detective says, leaning back in his chair and looking you over w...
  scene.text('\'"So,"\' + \' the detective says, leaning back in his chair and looking you over with unconcealed amusement. "Public indecency. In the park." He lets that hang in the air for a moment. "You want to explain that to me?"\'');
  scene.text('You feel the colour rising in your cheeks and stare at the table.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    (st as any).picrand = (Math.floor(Math.random() * 2) + 1);
    scene.img(`images/locations/shared/police/interrogation${((st as any).picrand ?? '')}.jpg`);
    // TODO-QSP: dynamic text: '"I''m waiting,"' + ' he says. You take a breath and start talking. He writes th...
    scene.text('\'"I\'m waiting,"\' + \' he says. You take a breath and start talking. He writes things down, occasionally raising an eyebrow but saying nothing until you\'ve finished.\'');
    // TODO-QSP: dynamic text: "Okay. That''s all I need. You''ll see the judge and he''ll decide what to do wi...
    scene.text(`"Okay. That's all I need. You'll see the judge and he'll decide what to do with you." He closes the folder and stands. "Don't make a habit of this, ${((st as any).pcs_firstname ?? '')}."`);
    if (((st as any).flash_police_resist ?? 0) === 1) {
      scene.text('"Oh, and resisting arrest." He taps the folder. "The judge is going to enjoy that one."');
    }
    scene.actions([
      { label: 'Return to the holding cell', goto: ['court_arrest_events', 'interrogation_end'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterCellmateStory(s: GameState, scene: SceneBuilder): void {
  if (((s as any).policeQW ?? 0)?.['crime_flag'] === 'shoplift') {
    scene.img('images/locations/city/citycenter/police/cityhold.jpg');
    scene.text('"I got caught stealing stuff," you answer nonchalantly.');
    scene.text('The woman smirks. "A petty crime. You\'ll be fine."');
    scene.text('"What are you in for?" you ask in turn.');
    scene.text('She starts laughing. "I refused to bribe one of these fuckers while I was prostituting, so they brought me in as a punishment."');
    scene.text('"I see…" you answer, a little taken back by her openness.');
  } else {
    if (((s as any).policeQW ?? 0)?.['crime_flag'] === 'prostitution') {
      scene.img('images/locations/city/citycenter/police/cityhold.jpg');
      scene.text('"I got caught prostituting," you answer nonchalantly.');
      scene.text('She smiles surprisingly. "You too?!"');
      scene.text('"I refused to bribe one of these fuckers while I was prostituting, so they brought me in as a punishment," she tells you. "So where do you usually work? I haven\'t seen you around," she asks.');
      scene.text('"Yeah, same thing happened to me," you answer. "Here and there. I try to keep myself away from the usual spots," you explain.');
    } else {
      if (((s as any).policeQW ?? 0)?.['crime_flag'] === 'public_indecency') {
        scene.img('images/locations/city/citycenter/police/cityhold.jpg');
        scene.text('"Public indecency," you mutter, staring at the floor. "I was flashing in the park."');
        scene.text('She stares at you for a second, then bursts out laughing. "You serious? That\'s why they brought you in?" She shakes her head, still grinning. "Girl, they must have been really bored today."');
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'booking_start':
      enterBookingStart(s, scene);
      break;
    case 'booking_end':
      enterBookingEnd(s, scene);
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
    case 'interrogation_start':
      enterInterrogationStart(s, scene);
      break;
    case 'interrogation_end':
      enterInterrogationEnd(s, scene);
      break;
    case 'shoplift_easy':
      enterShopliftEasy(s, scene);
      break;
    case 'shoplift_norm':
      enterShopliftNorm(s, scene);
      break;
    case 'shoplift_hard':
      enterShopliftHard(s, scene);
      break;
    case 'prostitution_easy':
      enterProstitutionEasy(s, scene);
      break;
    case 'prostitution_norm':
      enterProstitutionNorm(s, scene);
      break;
    case 'prostitution_hard':
      enterProstitutionHard(s, scene);
      break;
    case 'first_public_indecency':
      enterFirstPublicIndecency(s, scene);
      break;
    case 'public_indecency_interrogation':
      enterPublicIndecencyInterrogation(s, scene);
      break;
    case 'cellmate_story':
      enterCellmateStory(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const court_arrest_events: LocationDef = {
  name: 'court_arrest_events',
  title: '"I\'m not lying! That security guard forced me to have sex wi',
  region: 'other',
  enter: enter,
};
