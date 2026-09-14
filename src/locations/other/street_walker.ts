import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).prst_loc ?? 0))) {
    if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
      if (((s as any).month ?? 0) >= 11  &&  ((s as any).month ?? 0) <= 12  ||  ((s as any).month ?? 0) >= 1  &&  ((s as any).month ?? 0) <= 3) {
      }
    }
    qspCall(s, 'stat', '');
    scene.text('<center><h2>St. Petersburg</h2></center>');
    scene.text('<center><b>City center</b></center>');
    if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
      if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 21) {
        scene.img('images/locations/city/citycenter/downw.jpg');
      } else {
        scene.img('images/locations/city/citycenter/downwn.jpg');
      }
    } else {
      if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 21) {
        scene.img('images/locations/city/citycenter/down.jpg');
      } else {
        scene.img('images/locations/city/citycenter/down_night.jpg');
      }
    }
  } else {
    if (((s as any).prst_loc ?? 0) === 1) {
      if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
        if (((s as any).month ?? 0) >= 11  &&  ((s as any).month ?? 0) <= 12  ||  ((s as any).month ?? 0) >= 1  &&  ((s as any).month ?? 0) <= 3) {
        }
      }
      qspCall(s, 'stat', '');
      scene.text('<center><h2>St. Petersburg</h2></center>');
      scene.text('<center><b>Red Light District</b></center>');
      if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
        if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 21) {
          scene.img('images/locations/city/industrial/industw.jpg');
        } else {
          scene.img('images/locations/city/industrial/industwn.jpg');
        }
      } else {
        if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 21) {
          scene.img('images/locations/city/industrial/city_industrial.jpg');
        } else {
          scene.img('images/locations/city/industrial/nord2.jpg');
        }
      }
    } else {
      if (((s as any).prst_loc ?? 0) === 2) {
        if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
          if (((s as any).month ?? 0) >= 11  &&  ((s as any).month ?? 0) <= 12  ||  ((s as any).month ?? 0) >= 1  &&  ((s as any).month ?? 0) <= 3) {
            if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 23) {
            }
            if (((s as any).hour ?? 0) >= 0  &&  ((s as any).hour ?? 0) <= 7) {
            }
          } else {
            if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 23) {
            }
            if (((s as any).hour ?? 0) >= 0  &&  ((s as any).hour ?? 0) <= 7) {
            }
          }
        }
        qspCall(s, 'stat', '');
        scene.text('<center><h2>St. Petersburg</h2></center>');
        scene.text('<center><b>Residential</b></center>');
        if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
          if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 21) {
            scene.img('images/locations/city/residential/streetw.jpg');
          } else {
            scene.img('images/locations/city/residential/streetwn.jpg');
          }
        } else {
          if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 21) {
            scene.img('images/locations/city/residential/street.jpg');
          } else {
            scene.img('images/locations/city/residential/street_night.jpg');
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterWork(s: GameState, scene: SceneBuilder): void {
  if (((s as any).loc ?? 0) === 'city_center') {
    (s as any).prst_loc = 0;
  } else {
    if (((s as any).loc ?? 0) === 'city_industrial') {
      (s as any).prst_loc = 1;
    } else {
      if (((s as any).loc ?? 0) === 'city_residential') {
        (s as any).prst_loc = 2;
      }
    }
  }
  if (((s as any).prostitute ?? 0)?.['active'] === 0) {
    if (!(s as any).prostitute) (s as any).prostitute = {}; (s as any).prostitute['active'] = 1;
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStart(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('You check your reflection in a store window, doing a last minute check of your outfit and makeup before making your way down the sidewalk looking for a customer.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Work the street', goto: ['street_walker', 'event1'] },
    { label: 'Leave (don\'t work)', goto: ['street_walker', 'end'] },
  ]);
  scene.build();
}

function enterEvent1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) > 5  &&  ((s as any).hour ?? 0) < 20) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStart(s, scene); (s as any).locArgs = __savedLocArgs; }
    // TODO-QSP: dynamic text: It's past '+func('time', 'get_time_string', 5, 0)+', and too late to find any wo...
    scene.text('It\'s past 5:00, and too late to find any work now. You can try again after 20:00.');
    scene.actions([
      { label: 'Leave', goto: ['street_walker', 'end'] },
    ]);
  } else {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 4) + 3);
    if ((((s as any).prst_loc ?? 0) === 0  &&  (Math.floor(Math.random() * 3) + 1) > 1)  ||  (((s as any).prst_loc ?? 0) === 1  &&  (Math.floor(Math.random() * 5) + 1) > 1)  ||  (((s as any).prst_loc ?? 0) === 2  &&  (Math.floor(Math.random() * 8) + 1) > 1)) {
      (s as any).street_work = 1;
      (s as any).streetworkevent = Math.floor(Math.random() * 8) + 1;
      if (((s as any).streetworkevent ?? 0) === 3) {
        if (((s as any).prst_loc ?? 0) !== 1) {
          (s as any).streetworkevent = 5;
        }
        if (((s as any).ruslan_day ?? 0) === ((s as any).daystart ?? 0)) {
          (s as any).streetworkevent = 5;
        }
      }
      if (((s as any).streetworkevent ?? 0) <= 2) {
        scene.actions([{ label: 'Continue', goto: ['street_walker', 'event2'] }]);
      } else {
        if (((s as any).streetworkevent ?? 0) === 3) {
          scene.actions([{ label: 'Continue', goto: ['street_walker', 'event3'] }]);
        } else {
          if (((s as any).streetworkevent ?? 0) === 4) {
            scene.actions([{ label: 'Continue', goto: ['street_walker', 'event4'] }]);
          } else {
            scene.actions([{ label: 'Continue', goto: ['street_walker', 'event5'] }]);
          }
        }
      }
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 15;
      qspCall(s, 'fame', 'city', 'prostitute', 1);
      qspCall(s, 'stat', '');
      if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
        scene.img('images/locations/city/shared/streetwalker/workingw1.jpg');
      } else {
        scene.img('images/locations/city/shared/streetwalker/working\' + rand(1, 4) + \'.jpg');
      }
      scene.text('You walk along the street trying to entice the drivers of cars that pass by, but are unable to get anyone to stop.');
      scene.actions([
        { label: 'Keep working the street', goto: ['street_walker', 'event1'] },
        { label: 'Stop working for the night', goto: ['street_walker', 'end'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterEvent2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'fame', 'city', 'prostitute', 1);
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
    scene.img('images/locations/city/shared/streetwalker/hookersw1.jpg');
  } else {
    scene.img('images/locations/city/shared/streetwalker/hookers\' + rand(1, 4) + \'.jpg');
  }
  scene.text('As you walk along the street trying to entice one of the slower moving cars, you spot some other girls working the streets as well. It doesn\'t look like they\'re having any luck either.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Stop working for the night', goto: ['street_walker', 'end'] },
    { label: 'Keep working the street', goto: ['street_walker', 'event1'] },
    { label: 'Walk over and talk to them', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 2) + 0) === 0  &&  (!((s as any).ruslan_pimp ?? 0))) {
      (s as any).minut = ((s as any).minut ?? 0) + 15;
      if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
        scene.img('images/locations/city/shared/streetwalker/hookersw1.jpg');
      } else {
        scene.img('images/locations/city/shared/streetwalker/hookers\' + rand(1, 4) + \'.jpg');
      }
      scene.text('You walk over and smile at the other girls, but are met with dark and dangerous stares.');
      scene.text('"What the fuck do you want, bitch?" one of them asks.');
      scene.text('You\'re taken aback a little, but try to be friendly. "I just wanted to ask how tonight\'s been going for you. It\'s been kind of slow for me."');
      scene.text('"This is our street, bitch! Fuck off before you get hurt!" one of them snarls as the others move to encircle you.');
      scene.actions([
        { label: 'Leave and stop working for the night', handler: (st: GameState) => {
    scene.text('You turn and walk away. You can hear the other girls behind you, calling you all sorts of names.');
    scene.actions([
      { label: 'Continue', goto: ['street_walker', 'end'] },
    ]);
  } },
        { label: 'Leave to work a new street', handler: (st: GameState) => {
    scene.text('You turn and walk away. You can hear the other girls behind you, calling you all sorts of names.');
    scene.actions([
      { label: 'Continue', goto: ['street_walker', 'work'] },
    ]);
  } },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 15;
      if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
        scene.img('images/locations/city/shared/streetwalker/hookersw1.jpg');
      } else {
        scene.img('images/locations/city/shared/streetwalker/hookers\' + rand(1, 4) + \'.jpg');
      }
      if (((s as any).ruslan_pimp ?? 0) === 2) {
        scene.text('You walk over and introduce yourself to the other girls. One of them starts off bitchy, but the other one tells her you work for Ruslan too, which quickly calms her down.');
        scene.text('You make small talk with them, the more experienced girls sharing tips for the newer girls, ways to help encourage guys to stop and the type of guys to avoid.');
        scene.text('Occasionally, a car stops and picks up one of the other girls. Other times, one stops and drops a girl off. After a while, you all get back to work earning money for Ruslan.');
        scene.actions([
          { label: 'Keep working the street', goto: ['street_walker', 'event1'] },
        ]);
      } else {
        (s as any).ruslan_pimp = 1;
        scene.text('You walk over and introduce yourself to the other girls. "You one of Ruslan\'s new girls?" one of them asks.');
        scene.text('You shake your head. "No, I work for myself."');
        scene.text('The other girls exchange an uneasy look. "You should really change your mind. If you work for Ruslan, most of the guys know to pay up, and the gopniks know to leave you alone. Otherwise, you\'ll find yourself in a bad spot," one of them tells you.');
        scene.text('You smile at her. "Thanks for the advice, I\'ll think about it."');
        scene.text('With that, they excuse themselves, saying that they need to get back to work. You can tell they really don\'t want to be seen hanging out with you.');
        scene.actions([
          { label: 'Stop working for the night', goto: ['street_walker', 'end'] },
          { label: 'Keep working the street', goto: ['street_walker', 'event1'] },
        ]);
      }
    }
  } },
  ]);
  scene.build();
}

function enterEvent3(s: GameState, scene: SceneBuilder): void {
  (s as any).ruslan_day = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'fame', 'city', 'prostitute', 1);
  scene.img('images/locations/shared/street/mugger.jpg');
  if ((!((s as any).ruslan_meet ?? 0))) {
    (s as any).ruslan_meet = 1;
    scene.text('As you walk along the street trying to entice one of the slower moving cars, you turn and nearly run into a man who walks directly in front of you.');
    scene.text('You stop and give him your best smile. "You looking to party, handsome?"');
    scene.text('He looks you over like a side of beef, then finally looks into your eyes, which most guys never do. "It\'s dangerous for a young thing like you to be out walking the streets this time of night. I can protect you and make sure no one bothers you. Just ask any of my other girls how good Ruslan protects them."');
  } else {
    scene.text('As you walk along the street trying to entice one of the slower moving cars, you turn and see Ruslan, your would-be pimp, blocking your path.');
    scene.text('You stop as he looks you over. "You come to your senses yet?"');
  }
  qspCall(s, 'willpower', 'skill', 'sprt', 'resist', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse his deal', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse his deal', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('You shake your head. "Thanks, but I\'m doing just fine by myself."');
    scene.text('He frowns, and his eyes take on a hard glint. For a moment, you think he might do something, but he just nods. "Very well. Have it your way, but don\'t say I didn\'t warn you. I\'ll check back on you some other time and see if you come to your senses."');
    scene.actions([
      { label: 'Stop working for the night', goto: ['street_walker', 'end'] },
      { label: 'Keep working the street', goto: ['street_walker', 'event1'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Accept his deal', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).ruslan_pimp = 2;
    scene.text('You nod your head in agreement. "Yeah. Having some protection would be a good thing."');
    scene.text('He smiles and pulls you up beside him as he wraps his arm around you. "Good, good. I knew you were a smart girl. I\'ll come by every Friday and collect my half of what you make. You better not hold out on me, because the other girls will tell me if you do. Now here is my number. If anyone refuses to pay or you have problems, you call." Once you add his number to your contact list, he slaps you on the ass. "Now get to work!"');
    scene.text('With that, he turns and walks away, leaving you to wonder if this was a good idea.');
    scene.actions([
      { label: 'Stop working for the night', goto: ['street_walker', 'end'] },
      { label: 'Keep working the street', goto: ['street_walker', 'event1'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterEvent4(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  if ((!((s as any).prst_loc ?? 0))) {
    qspCall(s, 'fame', 'city', 'prostitute', 5);
  } else {
    if (((s as any).prst_loc ?? 0) === 1) {
      qspCall(s, 'fame', 'city', 'prostitute', 5);
    } else {
      qspCall(s, 'fame', 'city', 'prostitute', 5);
    }
  }
  qspCall(s, 'fame', 'city', 'prostitute', 1);
  scene.img('images/locations/city/shared/streetwalker/police.jpg');
  if ((!((s as any).prst_caught ?? 0))) {
    (s as any).prst_caught = 1;
    scene.text('"What\'s your price?" a man asks you from behind.');
    scene.text('"The price is-"');
    scene.text('You stop in your tracks as you turn and notice a man dressed in all black. He\'s giving you a weird vibe, looking at you with a cold and calculating gaze. Something tells you to play it cool, so you change your answer. "Uh, I\'m sorry, sir, can you repeat that? I don\'t think I heard you clearly…"');
    scene.text('The man\'s eyes narrow dangerously, and as he moves, you catch a glimpse of a police badge clipped to his hip. He\'s a cop!');
    scene.text('"Don\'t play dumb, girl. Go on, finish what you were going to say!" he barks.');
    scene.actions([
      { label: 'Keep lying', goto: ['street_walker', 'policelie'] },
      { label: 'Offer him a bribe', goto: ['street_walker', 'policebribe'] },
      { label: 'Offer him a blowjob', goto: ['street_walker', 'policeblowjob'] },
    ]);
  } else {
    scene.text('"Didn\'t I tell you to stay away from here?" you hear a familiar voice ask.');
    scene.text('You turn around and find that it\'s the cop from before. You stare down at the ground. "Y-Yes sir, you did…" ');
    scene.text('"So what are you doing here then? Whoring again?" he brashly asks.');
    scene.actions([
      { label: 'Try to explain', goto: ['street_walker', 'policeexp'] },
      { label: 'Offer him a bribe', goto: ['street_walker', 'policebribe'] },
      { label: 'Offer him a blowjob', goto: ['street_walker', 'policeblowjob'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterEvent5(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'fame', 'city', 'prostitute', 1);
  if ((!((s as any).prst_loc ?? 0))) {
    qspCall(s, 'fame', 'city', 'prostitute', 10);
  } else {
    if (((s as any).prst_loc ?? 0) === 1) {
      qspCall(s, 'fame', 'city', 'prostitute', 10);
    } else {
      qspCall(s, 'fame', 'city', 'prostitute', 10);
    }
  }
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
    scene.img('images/locations/city/shared/streetwalker/barginw1.jpg');
  } else {
    scene.img('images/locations/city/shared/streetwalker/bargin\' + rand(1, 3) + \'.jpg');
  }
  scene.text('A car slows down and pulls up to the curb where you\'re walking, so you walk over to him. As you do, he rolls down his window. You bend over and practically lean into his window. "You looking to party, handsome?"');
  scene.text('He looks you over as best he can and licks his lips. "How much?"');
  scene.text('You smile at him. "That depends on what you want…" You take a little time listening to his requests and telling him the price before he decides.');
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    scene.text('He decides he wants a blowjob.');
    scene.actions([
      { label: 'Accept', handler: (st: GameState) => {
    scene.text('The deed and the price decided, you get into the car.');
    scene.actions([
      { label: 'Continue', goto: ['street_walker', 'blowjob'] },
    ]);
  } },
      { label: 'Decline', goto: ['street_walker', 'work'] },
    ]);
  } else {
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      scene.text('He decides he wants a fuck.');
      scene.actions([
        { label: 'Accept', handler: (st: GameState) => {
    scene.text('The deed and the price decided, he motions for you to get into the backseat of the car.');
    scene.actions([
      { label: 'Continue', goto: ['street_walker', 'vaginal'] },
    ]);
  } },
        { label: 'Decline', goto: ['street_walker', 'work'] },
      ]);
    } else {
      scene.text('He decides he wants to fuck you first and finish with anal.');
      scene.actions([
        { label: 'Accept', handler: (st: GameState) => {
    scene.text('The deed and the price decided, he motions for you to get into the backseat of the car.');
    scene.actions([
      { label: 'Continue', goto: ['street_walker', 'anal'] },
    ]);
  } },
        { label: 'Decline', goto: ['street_walker', 'work'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBlowjob(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Street</b></center>');
  scene.img('images/locations/city/shared/streetwalker/ridefront.jpg');
  scene.text('You barely have time to close the door before he pulls away. He drives until he finds a pretty deserted area and stops the car.');
  scene.text('Once he does, he looks over at you. "This looks good." His eyes wander over your body as he leans back in his seat.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Unbutton his pants', handler: (st: GameState) => {
    scene.img('images/locations/city/shared/streetwalker/sex/bj1.jpg');
    scene.text('You lean over and unbutton his pants before opening his fly and pulling his underwear down, allowing his hard dick to spring free. You smile at him as you wrap your hand around his cock and start stroking it, causing him to moan softly.');
    qspCall(s, 'arousal', 'hj', (-5), 'prostitution');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck his dick', handler: (st: GameState) => {
    scene.img('images/locations/city/shared/streetwalker/sex/bj2.jpg');
    scene.text('You can feel the head of his dick already getting slick with his precum as you slowly take his cock into your mouth, starting to suck his dick as you keep stroking it.');
    scene.text('You feel his hand roughly pull up your shirt and start pawing and squeezing at your breasts as you do.');
    qspCall(s, 'arousal', 'bj', (-5), 'prostitution');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep sucking', handler: (st: GameState) => {
    scene.img('images/locations/city/shared/streetwalker/sex/bj3.jpg');
    scene.text('Keeping your lips locked around his shaft, you bob your head up and down, slowly working him deeper into your mouth. You eventually remove your hand so you can take him as deeply as you can down your throat.');
    qspCall(s, 'arousal', 'bj', (-5), 'prostitution');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish him', handler: (st: GameState) => {
    qspCall(s, 'money', 'earn', 500);
    qspCall(s, 'cum_call', 'mouth', 'a prostitution client');
    scene.img('images/locations/city/shared/streetwalker/sex/bj4.jpg');
    scene.text('You soon feel the hot splash of cum hitting your throat as spurt after spurt fills your mouth. He moans loudly as he fills your mouth, and you keep sucking until he stops. You sit up and show him your cum coated tongue before swallowing it. He gives you a brief smile, then quickly puts his dick away and rebuttons his pants. Sliding the seat back forward, he pulls out a wad of cash and hands it to you.');
    scene.text('You take a few minutes to straighten up your clothes and check your makeup as he drives you back to the street corner he picked you up on. Pulling up to the curb, he seems impatient for you to get out as he looks around to see if anyone is watching. You sigh and climb out of the car before closing the door. He quickly pulls away and disappears into the night.');
    qspCall(s, 'arousal', 'bj', (-5), 'prostitution');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get back to work', goto: ['street_walker', 'work'] },
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

function enterVaginal(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Street</b></center>');
  scene.img('images/locations/city/shared/streetwalker/rideback.jpg');
  scene.text('Once you close the door, he pulls away from the curb and drives until he finds a pretty deserted area and stops the car. "This looks good."');
  scene.text('He gets out of the car and walks to the back door. You slide over, giving him room as he gets in the back with you.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait', handler: (st: GameState) => {
    scene.img('images/locations/city/shared/streetwalker/sex/fuck1.jpg');
    scene.text('You let him take control of the situation and, after making sure no one is around, he unbuttons his pants and pulls them down. He then reaches over, grabs you by the hair and pulls your head down to his dick.');
    scene.text('You open your mouth and take his still mostly flaccid cock into your mouth as you start stroking the shaft.');
    scene.actions([
      { label: 'Suck his dick', handler: (st: GameState) => {
    scene.img('images/locations/city/shared/streetwalker/sex/fuck2.jpg');
    scene.text('Between your mouth and hand, it doesn\'t take you too long to get him hard.');
    scene.text('"Yeah, that\'s it. Suck my cock, you dirty whore!"');
    scene.text('You keep sucking as he continues to verbally degrade you.');
    qspCall(s, 'arousal', 'bj', 5, 'prostitution');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let him fuck you', handler: (st: GameState) => {
    scene.img('images/locations/city/shared/streetwalker/sex/fuck3.jpg');
    scene.text('After a few minutes, he pulls your head off his dick and you quickly undress and lie on your back, spreading your legs. As you do, you see him sliding a condom on before he moves over and climbs on top of you.');
    scene.text('He quickly and roughly shoves his dick inside your pussy and starts fucking you as hard and fast as he can, banging your head against the arm rest on the door.');
    qspCall(s, 'arousal', 'vaginal', 10, 'prostitution');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish him', handler: (st: GameState) => {
    qspCall(s, 'money', 'earn', 1200);
    qspCall(s, 'cum_call', 'breasts', 'a prostitution client');
    scene.img('images/locations/city/shared/streetwalker/sex/fuck4.jpg');
    scene.text('He suddenly pulls out of you and tears the condom off. This is followed by him climbing on you as he starts jerking off. Within seconds, his cum starts splattering over your breasts as he moans loudly. Once he finishes, he climbs off you and starts to get dressed, stopping briefly to hand you a wad of cash.');
    scene.text('You spend a few minutes getting cleaned up and dressed. As you do, he gets back into the driver\'s seat and drives you back to the street corner he picked you up on. Pulling up to the curb, he seems impatient for you to get out as he looks around to see if anyone is watching. You sigh and climb out of the car before closing the door. He quickly pulls away and disappears into the night.');
    qspCall(s, 'arousal', 'foreplay', 5, 'prostitution');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get back to work', goto: ['street_walker', 'work'] },
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

function enterAnal(s: GameState, scene: SceneBuilder): void {
  (s as any).streetworkanal = Math.floor(Math.random() * 2) + 1;
  if (((s as any).streetworkanal ?? 0) === 1) {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Street</b></center>');
    scene.img('images/locations/city/shared/streetwalker/sex/analo1.jpg');
    scene.text('Once you close the door, he looks at you in the rearview mirror. "Put on your seat belt. Safety first."');
    scene.actions([
      { label: 'Go for a ride', handler: (st: GameState) => {
    scene.img('images/locations/city/shared/streetwalker/rideback.jpg');
    scene.text('He pulls away from the curb and drives until he finds a pretty deserted area and stops the car. "This looks good."');
    scene.text('He gets out of the car and walks to the back door. You slide over, giving him room as he gets in the back with you.');
    scene.actions([
      { label: 'Get undressed', handler: (st: GameState) => {
    scene.img('images/locations/city/shared/streetwalker/sex/analo2.jpg');
    scene.text('He looks you over. "Can you undress?" When you start to do so, he quickly grabs your hand. "<i>Slowly</i>."');
    scene.text('You smile at him and make a show of slowly undressing for him. Once you\'re fully naked, you slowly unbutton his pants before pulling them and his underwear down.');
    qspCall(s, 'arousal', 'flash', 2, 'prostitution');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck his dick', handler: (st: GameState) => {
    scene.img('images/locations/city/shared/streetwalker/sex/analo3.jpg');
    scene.text('With his hard dick standing tall to get your attention, you take it into your mouth and start sucking while working the shaft or his balls with one of your hands as he leans back and moans softly.');
    qspCall(s, 'arousal', 'bj', 5, 'prostitution');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get fucked', handler: (st: GameState) => {
    scene.img('images/locations/city/shared/streetwalker/sex/analo4.jpg');
    scene.text('After a few minutes, he speaks up. "Lie back, I want to fuck you."');
    scene.text('You sit up before lying back in the seat, spreading your legs as you do. He moves between your legs and rubs your clit a little before he slides his dick inside you and starts slowly fucking you. The wetter you get, the faster he fucks you.');
    qspCall(s, 'arousal', 'vaginal', 10, 'prostitution');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Take it in the ass', handler: (st: GameState) => {
    scene.img('images/locations/city/shared/streetwalker/sex/analo5.jpg');
    scene.text('When he pulls out, he uses his hands to help you reposition. "I want to fuck that pretty little ass of yours now."');
    scene.text('With his help, you quickly do as he says and get on all fours with your ass in the air. You feel him press his dick against your anus before he slides it in. When you tense up, he stops to let you get used to it before he slides it the rest of the way in.');
    scene.text('He slowly works his way balls deep into your ass. You moan loudly as he picks up the pace and starts fucking your ass harder.');
    qspCall(s, 'arousal', 'anal', 5, 'prostitution');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish him', handler: (st: GameState) => {
    qspCall(s, 'money', 'earn', 1500);
    qspCall(s, 'cum_call', 'face', 'a prostitution client');
    scene.img('images/locations/city/shared/streetwalker/sex/analo6.jpg');
    scene.text('"I\'m about to cum!" he grunts. As he pulls out of your ass, you turn around and start jerking him off with your hand, aiming his cock right at your face. Within seconds, cum starts splattering across your face. You keep jerking him until you\'ve milked him of every last drop.');
    scene.text('You spend a few minutes getting cleaned up and dressed. As you do, he gets back into the driver\'s seat. He waits for you to finish and put your seatbelt back on before he drives you back to the street corner he picked you up on. He pulls up to the curb and stops before he passes you a wad of cash.');
    scene.text('As you get out of the car, he opens his window. "I had a great time. Maybe I\'ll see you again." With that, he rolls up his window and drives away.');
    qspCall(s, 'arousal', 'hj', 5, 'prostitution');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get back to work', goto: ['street_walker', 'work'] },
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
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Street</b></center>');
    scene.img('images/locations/city/shared/streetwalker/sex/analy1.jpg');
    scene.text('He looks at you in the rearview mirror and eyes you up and down. You smile at him and lean back to give him a good look.');
    qspCall(s, 'arousal', 'foreplay', 10, 'unknown');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go for a ride', handler: (st: GameState) => {
    scene.img('images/locations/city/shared/streetwalker/rideback.jpg');
    scene.text('He pulls away from the curb and drives until he finds a pretty deserted area and stops the car. "This looks good."');
    scene.text('He gets out of the car and walks to the back door. You slide over, giving him room as he gets in the back with you.');
    scene.actions([
      { label: 'Get undressed', handler: (st: GameState) => {
    scene.img('images/locations/city/shared/streetwalker/sex/analy2.jpg');
    scene.text('He looks you over. "Undress. I want to see what I\'m paying for."');
    scene.text('You smile at him and make a show of slowly undressing for him. Once you\'re fully naked, you slowly unbutton his pants before pulling them and his underwear down.');
    qspCall(s, 'arousal', 'flash', 2, 'prostitution');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck his dick', handler: (st: GameState) => {
    scene.img('images/locations/city/shared/streetwalker/sex/analy3.jpg');
    scene.text('With his hard dick standing tall to get your attention, you take it into your mouth and start sucking while working the shaft or his balls with one of your hands as he leans back and moans softly.');
    scene.text('You feel his hand slap you on the ass a few times before he slides a finger into your pussy to get it wet, then slides it into your ass and fingers you as you blow him.');
    qspCall(s, 'arousal', 'bj', 5, 'prostitution');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get fucked', handler: (st: GameState) => {
    scene.img('images/locations/city/shared/streetwalker/sex/analy4.jpg');
    scene.text('After a few minutes, he speaks up. "Lie back, I want to fuck you."');
    scene.text('You sit up before lying back in the seat, spreading your legs as you do. He moves between your legs and rubs your clit a little before he slides his dick inside you.');
    scene.text('He slowly picks up his pace, fucking you faster before he pulls out and slaps you on the hip. "Roll over, bitch. I want to fuck your ass."');
    qspCall(s, 'arousal', 'vaginal', 10, 'prostitution');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Take it in the ass', handler: (st: GameState) => {
    scene.img('images/locations/city/shared/streetwalker/sex/analy5.jpg');
    scene.text('You roll over and get on all fours with your ass in the air. You feel him pressing his dick against your anus before he shoves it in. When you tense up, he grabs hold of your hips so you can\'t pull away and shoves it the rest of the way into your ass.');
    scene.text('He pounds his way balls deep into your ass, picking up the pace and fucking you harder as he slaps your ass.');
    qspCall(s, 'arousal', 'anal', 5, 'prostitution');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish him', handler: (st: GameState) => {
    qspCall(s, 'money', 'earn', 1500);
    qspCall(s, 'cum_call', 'breasts', 'a prostitution client');
    scene.img('images/locations/city/shared/streetwalker/sex/analy6.jpg');
    scene.text('"I\'m about to cum!" he grunts as he pulls out of your ass and roughly flips you over before straddling you and jerking off. His cum is soon splattering all over your breasts.');
    scene.text('You spend a few minutes getting cleaned up and dressed. Not even waiting for you to finish, he gets back into the driver\'s seat. During the drive back, he tosses a wad of cash back, most of it ending up on the floor.');
    scene.text('You quickly gather it all up as he stops at the same curb he picked you up from. You barely even close the door after you get out before he pulls away.');
    qspCall(s, 'arousal', 'foreplay', 5, 'prostitution');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get back to work', goto: ['street_walker', 'work'] },
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
  }
  // TODO-QSP: end
  scene.build();
}

function enterPoliceblowjob(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Street</b></center>');
  scene.img('images/locations/city/shared/streetwalker/police.jpg');
  scene.text('You desperately look around and try to come up with an excuse.');
  scene.text('"Well?" he impatiently asks.');
  scene.text('You clear your throat. "Yes sir, you\'ve caught me. I\'ve been prostituting, but how about I show you a good time and you let me go?"');
  scene.text('You divert your eyes towards his crotch while licking your lips.');
  if ((!(Math.floor(Math.random() * 6) + 0))) {
    scene.text('The officer grunts and points towards his car. You climb inside, barely having time to close the door before he pulls away.');
    scene.text('He drives until he finds a pretty deserted area and stops the car. Once he does, he looks over at you. "This looks good."');
    scene.text('His eyes wander over your body as he leans back in his seat.');
    scene.actions([
      { label: 'Unbutton his pants', handler: (st: GameState) => {
    scene.img('images/locations/city/shared/streetwalker/sex/bj1.jpg');
    scene.text('You lean over and unbutton his pants before opening his fly and pulling his underwear down, allowing his hard dick to spring free. You smile at him as you wrap your hand around his cock and start stroking it, causing him to moan softly.');
    qspCall(s, 'arousal', 'hj', 5, 'prostitution');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck his dick', handler: (st: GameState) => {
    scene.img('images/locations/city/shared/streetwalker/sex/bj2.jpg');
    scene.text('You can feel the head of his dick already getting slick with his precum. You slowly take his cock into your mouth, starting to suck his dick as you keep stroking it.');
    scene.text('You feel his hand roughly pull up your shirt and start pawing and squeezing at your breasts as you do.');
    qspCall(s, 'arousal', 'bj', 5, 'prostitution');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep sucking', handler: (st: GameState) => {
    scene.img('images/locations/city/shared/streetwalker/sex/bj3.jpg');
    scene.text('Keeping your lips locked around his shaft, you bob your head up and down, slowly working him deeper into your mouth. You eventually remove your hand so you can take him as deeply as you can down your throat.');
    qspCall(s, 'arousal', 'bj', 5, 'prostitution');
    qspCall(s, 'stat', '');
    if ((Math.floor(Math.random() * 10) + 1) > 2) {
      scene.actions([
        { label: 'Finish him', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth', 'a police officer');
    scene.img('images/locations/city/shared/streetwalker/sex/bj4.jpg');
    scene.text('You soon feel the hot splash of cum hitting your throat as spurt after spurt fills your mouth. He moans loudly as he fills your mouth, and you keep sucking until he stops. You sit up and show him your cum coated tongue before swallowing it. He gives you a brief smile, then quickly puts his dick away and rebuttons his pants.');
    scene.text('You take a few minutes to straighten up your clothes and check your makeup as he drives you back to the street corner he picked you up on. Pulling up to the curb, he seems impatient for you to get out as he looks around to see if anyone is watching. You sigh and climb out of the car before closing the door. He quickly pulls away and disappears into the night.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get back to work', goto: ['street_walker', 'work'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Finish him', handler: (st: GameState) => {
    if (!(s as any).policeQW) (s as any).policeQW = {}; (s as any).policeQW['prostitution_bribe'] = 2;
    qspCall(s, 'cum_call', 'mouth', 'a police officer');
    scene.img('images/locations/city/shared/streetwalker/sex/bj4.jpg');
    scene.text('You soon feel the hot splash of cum hitting your throat as spurt after spurt fills your mouth. He moans loudly as he fills your mouth with sperm, and you keep sucking until he stops. You sit up and show him your cum coated tongue before swallowing it. He gives you a brief smile, then quickly puts his dick away and rebuttons his pants.');
    scene.text('You spend a few minutes straightening up your clothes and checking your makeup as he continues driving. You soon realize that he\'s going in the opposite direction of the street corner.');
    scene.text('"Where are you taking me?" you ask, feeling yourself start to panic slightly.');
    scene.text('"What? You thought that was enough? No, I\'m taking you to the station where you belong, whore," he mockingly answers as he quickly speeds down the road.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Drive to the police station', goto: ['police_station', 'entrance', '\'prst\''] },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (!(s as any).policeQW) (s as any).policeQW = {}; (s as any).policeQW['prostitution_bribe'] = 2;
    scene.img('images/locations/shared/police/arrested.jpg');
    scene.text('"Are you trying to solicit an officer of the law?!" he angrily responds.');
    scene.text('"N-No officer! I was just thinking the two of us could have a good time…" you try once again.');
    scene.text('"That\'s it! You\'re coming with me, whore!" He turns you around, cuffs you and leads you to the police car. He shoves you in the back and quickly drives off towards the police station.');
    scene.actions([
      { label: 'Drive to the police station', goto: ['police_station', 'entrance', '\'prst\''] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPolicelie(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/shared/streetwalker/police.jpg');
  scene.text('You swallow hard and let out a nervous giggle. "R-right… Well, to answer your question… The time is…"');
  scene.text('"The <i>time</i>?" he interrupts, his lips twisting into a deeper scowl. He takes a step closer and you catch a whiff of stale coffee and cigarettes.');
  scene.text('"Yeah, isn\'t that what you asked?" you ask innocently.');
  scene.text('Unamused, the officer crosses his arms over his chest. "I know what you\'re doing out here, and lying won\'t get you anywhere except a visit to the police station."');
  scene.text('Your eyes immediately drop to the ground at the mention of being arrested. Your heart racing, you take a deep breath before nodding slowly. "I\'m sorry, sir… You\'re right. I was out here working…"');
  scene.text('He scoffs. "What, suddenly you\'re shy about it? Let me hear you <i>say</i> it," he orders coldly.');
  scene.text('"I was… I am a prostitute, sir…" you say quietly.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Beg him to let you go', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 10) + 1) > 4) {
      scene.img('images/locations/city/shared/streetwalker/police.jpg');
      scene.text('You keep your gaze glued to the ground until you hear him sigh heavily. "Get out of here! If I see you again, I\'m taking you in, understand?"');
      scene.text('You look up in disbelief, unable to figure out what to say. "O-oh, of course! You won\'t see me again, I promise!"');
      scene.text('Not wanting to miss your chance, you quickly leave.');
      scene.actions([
        { label: 'Walk away', goto: ['street_walker', 'work'] },
      ]);
    } else {
      scene.img('images/locations/shared/police/arrested.jpg');
      scene.text('He shakes his head in disgust. "The only way you\'re going to learn is if you\'re punished. Turn around, hands behind your back."');
      scene.text('In a matter of seconds, you\'re cuffed and being tossed into the back seat of an unmarked police car. You sit in silence as he drives you back to the police station for booking.');
      scene.actions([
        { label: 'Drive to the police station', goto: ['police_station', 'entrance', '\'prst\''] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterPoliceexp(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/shared/streetwalker/police.jpg');
  scene.text('You wrack your brain for a good answer, but come up with nothing, so you look up and bat your eyelashes innocently. "No, I was just on my way home, officer…"');
  scene.text('He seems unfazed before his expression suddenly darkens. "You think I\'m stupid, girl?" he barks back so suddenly and loudly that it makes you jump slightly. You quickly shake your head and try to apologize, but he cuts you off. "I\'ve been watching you for a while now, and all you\'ve been doing is slinking up and down the streets looking for customers!"');
  scene.text('You swallow hard as your eyes look everywhere except at him. "I… I think you might have me confused with someone else…" You start to take a step back, but the officer grabs your upper arm with an iron grip and pulls you back close.');
  scene.text('"You\'re really going to continue <i>lying</i> to me?! You\'re just making this a whole lot worse for yourself…" He tightens his grip even further, causing you to wince softly. It\'s not enough to really hurt you, but it gets his point across.');
  scene.text('"Alright, alright! I was whoring!" you admit with a huff. "Please… Please just give me a break! I don\'t want to go to jail… I can\'t!"');
  scene.text('Before the last words are out your mouth, you start to sniffle and tears are soon rolling down your cheeks.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Beg him to let you go', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 10) + 1) > 4) {
      scene.img('images/locations/city/shared/streetwalker/police.jpg');
      scene.text('"Alright, stop your crying!" he says, but you\'re barely able to hear him between your sobbing.');
      scene.text('"Wh… What?" you ask when you feel him release his grip on your arm. Through blurry eyes, you see the officer giving you a pitying, yet uncomfortable look. "You\'re letting me go?"');
      scene.text('He clears his throat awkwardly. "Yes, I am, but you better head straight home. I don\'t want to see you out here again, understand?"');
      scene.text('You quickly nod, wiping away the tears as you compose yourself. "Thank you!" you say, but he just responds with a grunt before waving you away.');
      scene.actions([
        { label: 'Walk away', goto: ['street_walker', 'work'] },
      ]);
    } else {
      scene.img('images/locations/shared/police/arrested.jpg');
      scene.text('"Save it for someone that cares, whore!"');
      scene.text('Without hesitation, he has you spun around, your arm twisted behind your back as he reaches for his handcuffs. Your crying only gets louder as he drags you to his unmarked police car and shoves you in the back.');
      scene.text('On the drive to the station, he gets tired of listening to your crying and pleading and turns on the radio, drowning you out completely.');
      scene.actions([
        { label: 'Drive to the police station', goto: ['police_station', 'entrance', '\'prst\''] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterPolicebribe(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/shared/streetwalker/bribe.jpg');
  scene.text('Your heart skips a beat as you think of what to do. He must already know you\'re out here whoring, so lying would definitely get you into more trouble. You heard that some girls offer sexual favors to avoid trouble, but that feels like too much of a risk. As you stand there squirming, you suddenly get an idea that you hope will get you out of this situation.');
  scene.text('"I have some money that I… earned tonight…" You start to reach for your pocket, but he tenses, wary of what you might be grabbing for. "No, no! It\'s just money, I promise!" you reassure him as you slowly pull out a handful of crumpled bills. "This is all I have, and you can have it if… you let me go," you say quietly, your hand held out to him.');
  scene.text('He looks at you, then at the money with an unreadable expression. The silence seems to stretch on forever until you speak again, trying to further convince him. "Please, sir… I really don\'t want to go to jail…"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for his reaction', goto: ['street_walker', 'briberyreaction'] },
  ]);
  scene.build();
}

function enterBriberyreaction(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  // TODO-QSP: gs 'money', 'pay', money/3, 'cash'
  qspCall(s, 'stat', '');
  (s as any).temp_rand = 0;
  if (((s as any).temp_rand ?? 0) <= 4) {
    scene.img('images/locations/city/shared/streetwalker/bribeaccepted.jpg');
    scene.text('He sighs heavily before taking the money and counting it, occasionally glancing your way as he does. "Don\'t think this will work every time," he warns as he pockets the money. "And <i>don\'t</i> get any ideas about telling anyone about this! I know some of you girls have tried it and believe me, it never ends well for them. No one will believe a loose-lipped whore over a cop…"');
    scene.text('You swallow hard, his words sending a shiver down your spine.');
    scene.text('"What? Get out of here before I change my mind!" he barks.');
    scene.text('You don\'t even bother responding as you quickly dash down the street until the cop is out of sight.');
    scene.actions([
      { label: 'Walk away', goto: ['street_walker', 'work'] },
    ]);
  } else {
    if (((s as any).temp_rand ?? 0) <= 7) {
      if (!(s as any).policeQW) (s as any).policeQW = {}; (s as any).policeQW['prostitution_bribe'] = 1;
      qspCall(s, 'pain', '', 6, 'armL', 'break');
      qspCall(s, 'stat', '');
      scene.img('images/locations/shared/police/arrested.jpg');
      scene.text('His lips turn up into a disgusted sneer. Before you can react, he slaps your hand away, the money flying into the air and onto the ground. "You think I can be paid off, whore?!" he snarls as you clutch your red and stinging hand.');
      scene.text('You knew there was a chance this could happen, but you didn\'t expect him to get physical.');
      scene.text('"I\'m sorry! Please, let me--" You try to plead with him, but he makes a sudden move towards you that causes you to flinch, fearing he\'s going to hit you.');
      scene.text('"Shut the hell up, slut!" He grabs your arm and twists it behind you, forcing you to turn your back to him or potentially suffer a broken limb. He slaps the cuffs around your wrists, making sure they\'re extra tight before shoving you into the back of his unmarked police car to drive you to the station.');
      scene.actions([
        { label: 'Drive to the police station', goto: ['police_station', 'entrance', '\'prst\''] },
      ]);
    } else {
      if (((s as any).temp_rand ?? 0) <= 9) {
        if (!(s as any).policeQW) (s as any).policeQW = {}; (s as any).policeQW['prostitution_bribe'] = 1;
        scene.img('images/locations/shared/police/arrested.jpg');
        scene.text('The cop sighs heavily before taking the money and counting it, occasionally glancing your way as he does. "It\'s one thing to be a whore, but to be dumb too?" he laughs cruelly as he pockets the money. You stare at him, hurt and confused before you realize that he\'s still planning to arrest you. Your first instinct is to run, but if he\'s being serious then it could mean you getting hurt.');
        scene.text('"But… But I gave you the money!" you whine in defeat, but it only makes the sadistic grin on his face widen.');
        scene.text('"Yeah, you did… Before I agreed to anything," he laughs. He watches your expression fall with sick satisfaction, enjoying every second of this. "Right now, you\'re thinking of tattling on the big, bad crooked police officer, but let me tell you: no one is going believe a whore like you. And once you point the finger at a cop, you\'re going have the whole station after you, so it\'s best, for once, that you keep your mouth shut and just accept what\'s going to happen."');
        scene.text('It feels like the ground is spinning beneath you. You never expected such a downright cruel reaction, and he\'s right. There\'s nothing you can do except accept your fate.');
        scene.text('Nearly in tears, you hold out your wrists and let him cuff and shove you in the back of his unmarked police car to be dropped off at the station.');
        scene.actions([
          { label: 'Drive to the police station', goto: ['police_station', 'entrance', '\'prst\''] },
        ]);
      } else {
        scene.img('images/locations/city/shared/streetwalker/police.jpg');
        scene.text('He chuckles and shakes his head. "Come on, you have something better to offer me, don\'t you?" His eyes roam over your body slowly, taking in every curve and exposed bit of skin with a hungry look.');
        scene.text('You know exactly what he wants, but hesitate. There\'s horror stories among other prostitutes about girls who have given sexual favors to an officer to get out of being arrested, only to end up being the plaything for every cop in the district. Passed around, treated like their personal cum dump. When it\'s the cops hurting you, who can you turn to for help?');
        scene.text('"Please, isn\'t this enough?" you ask weakly, but the officer scoffs.');
        scene.text('"Listen, I can either take you to jail or I can fuck you and let you go. Those are your only two options, so take it or leave it," he tells you. As you stand there, his hand moves to the front of his jeans to squeeze his growing erection with a grin.');
        scene.actions([
          { label: 'Agree', goto: ['street_walker', 'policesub1'] },
          { label: 'Refuse', handler: (st: GameState) => {
    if (!(s as any).policeQW) (s as any).policeQW = {}; (s as any).policeQW['prostitution_bribe'] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/police/arrested.jpg');
    scene.text('"No… No, I can\'t do that…" you tell him as you pull your hand back and pocket your money again. The officer looks disappointed, but doesn\'t seem to dwell on it. He probably has another girl like you he\'s forced into fucking him…');
    scene.text('"Fine by me, slut. Hands behind your back," he orders and you comply.');
    scene.text('In a matter of seconds, you\'re cuffed and in the back of his unmarked car being driven to the station to be booked.');
    scene.actions([
      { label: 'Drive to the police station', goto: ['police_station', 'entrance', '\'prst\''] },
    ]);
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPolicesub1(s: GameState, scene: SceneBuilder): void {
  (s as any).police_sub_counter = ((s as any).police_sub_counter ?? 0) + (1);
  if (((s as any).police_sub_counter ?? 0) > 4) {
    scene.actions([{ label: 'Continue', goto: ['street_walker', 'policesub2'] }]);
  }
  qspCall(s, 'pain', '', 2, 'twist', 'pinch');
  qspCall(s, 'pain', '', 4, 'nipples', 'pinch');
  scene.img('images/locations/city/shared/streetwalker/sex/policesub.jpg');
  scene.text('"Alright. If that\'s what it takes…" you say reluctantly. You\'re barely given a chance to put the money away before he\'s pulling you to a dark, secluded area between two buildings. In the darkness, you can\'t make out anything he\'s doing.');
  scene.text('"Um, let\'s make this qui-" Your words are cut off as you\'re shoved against the cold, hard brick wall of one of the buildings. You can only whimper as the officer presses his body against you.');
  scene.text('"Shut up, slut," he breathes into your ear. "I\'ll do what I want with you."');
  scene.text('He uses one hand to force your arms behind your back while his free hand roughly kneads your breast. He then violently yanks down your shirt, exposing your breasts to the cold air and causing your nipples to stiffen, something he takes as a sign that you\'re enjoying yourself.');
  scene.text('"Such a dirty little whore…" He punctuates his sentence by taking your nipples between his fingers and pinching down hard.');
  qspCall(s, 'arousal', 'foreplay', 5, 'prostitution', 'rough');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Beg him to be gentler', handler: (st: GameState) => {
    scene.text('"Ah! Please! Not so rough!" you beg, but it goes unheard. He continues to pinch and twist your nipples until they\'re left red and tender. When he releases your arms, you collapse against the wall with a sigh of relief. You can\'t see it, but you definitely hear the crinkle of a condom wrapper. At least he\'s using protection.');
    scene.text('Tugging and pulling at your clothes until your pussy is exposed, he plunges two fingers inside and spreads them a few times before removing them.');
    scene.text('"Bend over, slut," he orders, and you quickly obey. You feel the tip of his rubbered cock thrusting forward, the entire length of his member driven into you in one go.');
    scene.text('It\'s uncomfortable to say the least, but you bite your lip to stifle a pained whimper as he drives his dick into you, over and over.');
    scene.text('"I\'m about to cum!" you hear him groan, and soon after, he\'s pressing balls deep inside you, his cock twitching as he fills the condom. He pulls out slow, and you\'re left feeling raw and numb.');
    scene.text('As you re-adjust your clothes, you see him tie up the used condom, but rather than toss it, he puts it back in the wrapper. He\'s not stupid enough to leave any DNA evidence behind.');
    scene.text('"Alright, a deal\'s a deal. You\'re free to go," he tells you as he zips up his pants. As you make your way back to the street, you think you hear him say the boys will enjoy playing with you…');
    qspCall(s, 'pain', '', 5, 'vaginal', 'tear');
    qspCall(s, 'arousal', 'vaginal_finger', 10, 'rough', 'sub', 'prostitute');
    qspCall(s, 'arousal', 'vaginal', (-10), 'rough', 'sub', 'prostitute');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Run away', goto: ['street_walker', 'work'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterPolicesub2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'pain', '', 5, 'vaginal', 'tear');
  qspCall(s, 'pain', '', 2, 'twist', 'pinch');
  scene.img('images/locations/city/shared/streetwalker/sex/policesub2.jpg');
  scene.text('"I understand…" you answer weakly as his grin widens. Leading you to a quiet and secluded area, he wastes no time hiking your skirt up and shoving his knee between your legs to spread them. Careless and rough, his fingers dig into the soft flesh of your breasts as he gropes them. You absent-mindedly look upward to the sky as you try your best to focus your attention on anything but him.');
  scene.text('"Turn around," he orders, and you obey without a word. You stick your ass out for him, and he pulls your panties down to your thighs. You hear him spit, using it as improvised lube as he smears it along his condom covered dick. In one violent thrust, he\'s buried deep inside your pussy, stretching your walls and filling you completely. You wince and grit your teeth as he fucks you fast and hard.');
  scene.text('His labored breathing soon picks up, and with a grunt, you feel his cock throb as the condom is filled with his hot load. You stand there, bent over with him panting over you as you wait for his dick to stop twitching. Finally, he pulls out and you\'re left with a dull pain between your legs.');
  scene.text('"Alright." He pulls the used condom off with a rubbery snap before tying it up neatly. "You can go now, whore."');
  scene.text('He snickers as he watches you pull your panties back up and re-adjust your clothes. Sore and humiliated, you stagger back to the streets.');
  qspCall(s, 'arousal', 'foreplay', 10, 'prostitution', 'rough', 'sub');
  qspCall(s, 'arousal', 'vaginal', (-10), 'rough', 'sub', 'prostitute');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Walk away', goto: ['street_walker', 'work'] },
  ]);
  scene.build();
}

function enterEnd(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).prst_loc ?? 0))) {
    scene.actions([{ label: 'Continue', goto: ['city_center', ''] }]);
  } else {
    if (((s as any).prst_loc ?? 0) === 1) {
      scene.actions([{ label: 'Continue', goto: ['city_redlight', 'start'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['city_residential', ''] }]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'work':
      enterWork(s, scene);
      break;
    case 'event1':
      enterEvent1(s, scene);
      break;
    case 'event2':
      enterEvent2(s, scene);
      break;
    case 'event3':
      enterEvent3(s, scene);
      break;
    case 'event4':
      enterEvent4(s, scene);
      break;
    case 'event5':
      enterEvent5(s, scene);
      break;
    case 'blowjob':
      enterBlowjob(s, scene);
      break;
    case 'vaginal':
      enterVaginal(s, scene);
      break;
    case 'anal':
      enterAnal(s, scene);
      break;
    case 'policeblowjob':
      enterPoliceblowjob(s, scene);
      break;
    case 'policelie':
      enterPolicelie(s, scene);
      break;
    case 'policeexp':
      enterPoliceexp(s, scene);
      break;
    case 'policebribe':
      enterPolicebribe(s, scene);
      break;
    case 'briberyreaction':
      enterBriberyreaction(s, scene);
      break;
    case 'policesub1':
      enterPolicesub1(s, scene);
      break;
    case 'policesub2':
      enterPolicesub2(s, scene);
      break;
    case 'end':
      enterEnd(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const street_walker: LocationDef = {
  name: 'street_walker',
  title: 'Street',
  region: 'other',
  enter: enter,
};
