import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).loc_arg = ((s as any).locArgs?.[0] ?? 0);
  (s as any).loc = 'Prostitute';
  (s as any).metkaSex = ((s as any).locArgs?.[0] ?? 0);
  (s as any).locSex = 'Prostitute';
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Road near the park, among prostitutes</b></center>');
  scene.img('images/locations/city/centralpark/park2.jpg');
  if (((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) <= 23) {
    if (((s as any).whoreQW ?? 0) === 1) {
      scene.text('Several prostitutes are looking at you a bit awkwardly, remembering the beating you gave their friend all too well. They still don\'t want you here, but they\'re too scared to confront you directly.');
      scene.actions([
        { label: 'Ask how things work around here', handler: (st: GameState) => {
    (st as any).whoreQW = 2;
    scene.text('You approach one of the more isolated girls and give her a disarming smile: "Hey! So, the other girl said I have to be one of you to work here? How does that work?"');
    scene.text('The prostitute shrugs, not entirely willing to talk to you, but she\'s afraid you\'d fight her too. She says: "We don\'t really work for anyone, but that also means we don\'t get any protection. One of the women here called Stella organized part of the girls into a group. She requires some protection money from time to time, and arranges \'accidents\' for those who don\'t pay. She and her cronies are not that tough, but since she doesn\'t ask for that much, I usually just pay her off. Less hassle that way, you know?"');
    scene.text('You nod understandingly and the girl continues: "And then there\'s the bandits! They sometimes extort us too, because we\'re easy prey. Stella doesn\'t have that much influence around here, but I wouldn\'t mess with the bandits if I were you! They mean business…"');
    scene.text('She also points out: "By the way, it may sound obvious but <b>if you want to pick up customers, you need to be dressed like a prostitute.</b> If it\'s not very obvious to guys that you\'re a working girl, none of them will approach you! You can buy some in a sex shop."');
    scene.actions([
      { label: 'Thank her and move away', goto: ['prostitute', 'start'] },
    ]);
  } },
      ]);
    } else {
      if ((!((s as any).whoreQW ?? 0))) {
        scene.text('"Hey bitch, you\'re not one of us!" a prostitute yells angrily at you, rapidly moving towards you. "Get off our turf, or it\'ll cost you your teeth!"');
        scene.text('She looks like she\'s getting ready to fight you, though she\'s clearly under the influence of drugs and wobbles a bit as she walks.');
        scene.actions([
          { label: 'Fight her', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'npcgeneratec', '', 1, 'stoned prostitute', (Math.floor(Math.random() * 11) + 18));
    qspCall(st, 'boyStat', '', ((st as any).npclastgenerated ?? 0));
    qspCall(st, 'fight', 'initFight');
    qspCall(st, 'fight_npcdata', 'prostitute');
    qspGoto(st, 'fight', 'start');
  } },
          { label: '"How do I become one of you?"', handler: (st: GameState) => {
    scene.text('You raise your hands disarmingly and say: "Whoa, relax! I only wanted to ask… how do I become one of you? I want to work here!"');
    scene.text('The prostitute grins meanly and spits on the ground before you, saying: "That\'s what I thought, bitch. Stella runs this area! You pay her if you want to work here, you got that?"');
    scene.actions([
      { label: 'Shrug and leave', goto: ['prostitute', 'start'] },
      { label: 'Nod understandingly', handler: (st: GameState) => {
    (st as any).whoreQW = 2;
    scene.text('When you nod, the prostitute adds: "By the way: <b>you need to look like a whore, if you want to work as a whore</b>. The sex shop sells outfits. And remember: you work here, you pay Stella! Otherwise you\'re in deep trouble!"');
    scene.actions([
      { label: 'Move away from her', goto: ['prostitute', 'start'] },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        if (((s as any).whoreQW ?? 0) === 2) {
          scene.text('The prostitutes look at you curiously for a moment, but quickly turn their attention back to trying to attract customers.');
          if ((((s as any).PCloStyle ?? 0) === 4  ||  ((s as any).PCloProstitute ?? 0) === 1)  &&  ((s as any).pcs_sleep ?? 0) > 0) {
            scene.actions([
              { label: 'Stand and wait for customers (0:16)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    if ((Math.floor(Math.random() * ((((st as any).pcs_apprnc ?? 0)/4 + ((st as any).hour ?? 0) - 0 + 1)) + (0)) * 2) < 20) {
      scene.text('You walk around for a while, trying to find a customer. Unfortunately, no one is interested in you right now.');
      scene.actions([
        { label: 'Continue', goto: ['prostitute', 'start'] },
      ]);
    } else {
      (st as any).proseventrand = (Math.floor(Math.random() * 20) + 1);
      if (((st as any).proseventrand ?? 0) === 1) {
        scene.text('A black jeep with tinted windows pulls up next to you, and a window rolls down. You\'re looking into the face of a fairly mean looking guy, who you\'re fairly sure is a criminal.');
        scene.text('He looks at you with disdain. "Time for you to pay your tribute, slut."');
        if (qspFunc(s, 'money', 'can_afford', 1000, 'cash') === 1) {
          scene.actions([
            { label: '', labelFn: (s: GameState) => 'Give him ' + String(qspFunc(s, 'money', 'string_price', 1000) ?? ''), handler: (st: GameState) => {
    qspCall(st, 'money', 'pay', 1000, 'cash');
    // TODO-QSP: dynamic text: You give the man <<$func(''money'', ''string_price'', 1000)>>, which he pockets ...
    scene.text(`You give the man ${qspFunc(s, 'money', 'string_price', 1000)}, which he pockets right away. Then he drives off, without saying another word.`);
    scene.actions([
      { label: 'Continue', goto: ['prostitute', 'start'] },
    ]);
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Say you haven\'t earned much', handler: (st: GameState) => {
    qspCall(st, 'money', 'set', 0, 'cash');
    scene.text('You try to explain to the man that you haven\'t earned much yet. He thinks it over for a moment.');
    scene.text('"Are you new, or do you just suck at your job then? All the girls here know to have their money ready when we come to collect!" he grunts as he opens the door of the car and pulls you in with his thick, burly arms. "Let\'s see what you\'re working with. Maybe you need someone to teach you how to make money around here!"');
    scene.text('When he sees you hesitate, he slaps your face and says: "Go on, whore! I don\'t have all day."');
    scene.text('You realize he\'s not going to let you off the hook easily, and that he probably has enough connections to get you into serious trouble. It\'s probably easiest to treat him as just another customer, maybe he\'ll let you go if you do a good job…');
    scene.actions([
      { label: 'Reach for his groin', handler: (st: GameState) => {
    qspCall(st, 'npcgeneratec', '', 0, 'Bandit', (Math.floor(Math.random() * 28) + 18));
    qspCall(st, 'boyStat', '', ((st as any).npclastgenerated ?? 0));
    qspGoto(st, 'blowPR', 'start');
  } },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Refuse to pay and fight him', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'npcgeneratec', '', 0, 'Bandit', (Math.floor(Math.random() * 28) + 18));
    qspCall(st, 'boyStat', '', ((st as any).npclastgenerated ?? 0));
    qspCall(st, 'fight', 'initFight');
    qspCall(st, 'fight_npcdata', 'bandit');
    qspGoto(st, 'fight', 'start');
  } },
        ]);
      } else {
        if (((st as any).proseventrand ?? 0) === 2) {
          scene.text('A rather scrawny looking prostitute approaches you and says: "Listen up, skank. It\'s time you pay Stella!"');
          if (qspFunc(s, 'money', 'can_afford', 500, 'cash') === 1) {
            scene.actions([
              { label: '', labelFn: (s: GameState) => 'Give her ' + String(qspFunc(s, 'money', 'string_price', 500) ?? ''), handler: (st: GameState) => {
    qspCall(st, 'money', 'pay', 500, 'cash');
    scene.text('As you give her the money, you\'d swear you see a twinge of relief in her eyes. The girl was clearly worried you were going to give her a hard time.');
    scene.text('She quickly walks away, not saying anything else.');
    scene.actions([
      { label: 'Continue', goto: ['prostitute', 'start'] },
    ]);
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Say you haven\'t earned much', handler: (st: GameState) => {
    qspCall(st, 'money', 'set', 0, 'cash');
    scene.text('You begin to explain that you haven\'t earned much money yet, but she\'s not interested in your story.');
    scene.text('She quickly rummages through your belongings, and takes all the money you have on you. Then she leaves quickly, before you can object.');
    scene.actions([
      { label: 'Continue', goto: ['prostitute', 'start'] },
    ]);
  } },
            ]);
          }
          scene.actions([
            { label: 'Refuse to pay and fight her', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'npcgeneratec', '', 1, 'prostitute', (Math.floor(Math.random() * 11) + 18));
    qspCall(st, 'boyStat', '', ((st as any).npclastgenerated ?? 0));
    qspCall(st, 'fight', 'initFight');
    qspCall(st, 'fight_npcdata', 'prostitute2');
    qspGoto(st, 'fight', 'start');
  } },
          ]);
        } else {
          scene.text('A car stops near you and the driver rolls his window down.');
          (st as any).prosti = 0;
          if (((st as any).proseventrand ?? 0) <= 8) {
            scene.text('The driver asks matter-of-factly: "You\'ve got a cute face on you. How much for a blowjob?"');
          } else {
            if (((st as any).proseventrand ?? 0) <= 14) {
              scene.text('The driver says matter-of-factly: "You seem decent enough… I want to fuck you. How much?"');
            } else {
              scene.text('The driver says matter-of-factly: "I like your ass. How much do you charge for anal?"');
            }
          }
          if (((st as any).ProsMoney ?? 0) > 0) {
            scene.actions([
              { label: '', labelFn: (s: GameState) => String(qspFunc(s, 'money', 'string_profit', ((st as any).ProsMoney ?? '') * 100) ?? ''), handler: (st: GameState) => {
    // TODO-QSP: gt 'prostitute', 'work1', iif(proseventrand <= 8, 'blow job', iif(proseventrand <= 14, 'sex', 'anal'...
  } },
            ]);
          }
          scene.actions([
            { label: 'Walk away from him', goto: ['prostitute', 'start'] },
            { label: 'Change the price', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    (st as any).ProsMoney = 0;
    if (((st as any).ProsMoney ?? 0) < 1) {
      scene.text('"Are you making a joke or something? I\'m not in the mood for jokes!" the customer sighs wearily. He starts his car again and drives away without saying another word.');
      scene.text('The price you set was too low for the man to take you seriously.');
      scene.actions([
        { label: 'Continue', goto: ['prostitute', 'start'] },
      ]);
    } else {
      // TODO-QSP: gt 'prostitute', 'work1', iif(proseventrand <= 8, 'blow job', iif(proseventrand <= 14, 'sex', 'anal'...
    }
  } },
          ]);
        }
      }
    }
  } },
            ]);
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back to the park', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspGoto(st, 'city_park', 'start');
  } },
  ]);
  scene.build();
}

function enterWork1(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'event_outdoors';
  scene.img('images/locations/city/centralpark/park2.jpg');
  // TODO-QSP: dynamic text: You pretend to think it over for a moment, then look at the man again and smile:...
  scene.text(`You pretend to think it over for a moment, then look at the man again and smile: "For you, babe? Only ${qspFunc(s, 'money', 'string_profit', ((s as any).ProsMoney ?? '') * 100, 1)}."`);
  if (((s as any).vidage ?? 0) < 18) {
    (s as any).vnpr = 15;
  } else {
    if (((s as any).vidage ?? 0) < 20) {
      (s as any).vnpr = 10;
    } else {
      if (((s as any).vidage ?? 0) < 25) {
        (s as any).vnpr = 5;
      } else {
        if (((s as any).vidage ?? 0) < 30) {
          (s as any).vnpr = 1;
        } else {
          if (((s as any).vidage ?? 0) < 35) {
            (s as any).vnpr = (-5);
          } else {
            if (((s as any).vidage ?? 0) < 40) {
              (s as any).vnpr = (-10);
            } else {
              (s as any).vnpr = (-20);
            }
          }
        }
      }
    }
  }
  if (((s as any).pcs_apprnc ?? 0) <= -10) {
    (s as any).vnpr = ((s as any).vnpr ?? 0) - (100);
  } else {
    if (((s as any).pcs_apprnc ?? 0) < 5) {
      (s as any).vnpr = ((s as any).vnpr ?? 0) - (10);
    } else {
      if (((s as any).pcs_apprnc ?? 0) < 15) {
        (s as any).vnpr = ((s as any).vnpr ?? 0) - (5);
      } else {
        if (((s as any).pcs_apprnc ?? 0) < 30) {
          (s as any).vnpr = ((s as any).vnpr ?? 0) + (1);
        } else {
          if (((s as any).pcs_apprnc ?? 0) < 50) {
            (s as any).vnpr = ((s as any).vnpr ?? 0) + (5);
          } else {
            (s as any).vnpr = ((s as any).vnpr ?? 0) + (10);
          }
        }
      }
    }
  }
  if (((s as any).cumSUM ?? 0) > 0) {
    (s as any).vnpr = ((s as any).vnpr ?? 0) - (10);
  }
  if (((s as any).pcs_makeup ?? 0) <= 0) {
    (s as any).vnpr = ((s as any).vnpr ?? 0) - (10);
  } else {
    if (((s as any).pcs_makeup ?? 0) === 1) {
      (s as any).vnpr = ((s as any).vnpr ?? 0) - (1);
    } else {
      if (((s as any).pcs_makeup ?? 0) === 2) {
        (s as any).vnpr = ((s as any).vnpr ?? 0) + (1);
      } else {
        if (((s as any).pcs_makeup ?? 0) === 3) {
          (s as any).vnpr = ((s as any).vnpr ?? 0) + (5);
        } else {
          (s as any).vnpr = ((s as any).vnpr ?? 0) + (10);
        }
      }
    }
  }
  if (((s as any).pcs_leghair ?? 0) > 0) {
    (s as any).vnpr = ((s as any).vnpr ?? 0) - (5);
  } else {
    (s as any).vnpr = ((s as any).vnpr ?? 0) + (1);
  }
  if (((s as any).pcs_pubes ?? 0) >= 4) {
    (s as any).vnpr = ((s as any).vnpr ?? 0) - (5);
  } else {
    (s as any).vnpr = ((s as any).vnpr ?? 0) + (1);
  }
  if (((s as any).pcs_tan ?? 0) > 0) {
    (s as any).vnpr = ((s as any).vnpr ?? 0) + (1);
  }
  if (((s as any).curly ?? 0) > 0) {
    (s as any).vnpr = ((s as any).vnpr ?? 0) + (1);
  }
  if (((s as any).pcs_sweat ?? 0) < 15) {
    (s as any).vnpr = ((s as any).vnpr ?? 0) + (1);
  } else {
    if (((s as any).pcs_sweat ?? 0) > 24) {
      (s as any).vnpr = ((s as any).vnpr ?? 0) - (10);
    }
  }
  if (((s as any).pcs_hairbsh ?? 0) < 1) {
    (s as any).vnpr = ((s as any).vnpr ?? 0) - (1);
  }
  if (((s as any).pcs_lip ?? 0) >= 4) {
    (s as any).vnpr = ((s as any).vnpr ?? 0) + (1);
  }
  if (((s as any).vnpr ?? 0) >= 0) {
    if (((s as any).ProsMoney ?? 0) === 1) {
      // TODO-QSP: gt 'prostitute', 'work2', $ARGS[1]
    }
    if ((Math.floor(Math.random() * 31) + 0) < ((s as any).vnpr ?? 0)) {
      if (Number((s as any).locArgs?.[1] ?? 0) === 'blow job') {
        (s as any).KlientMON = (Math.floor(Math.random() * 10) + 1);
      }
      if (Number((s as any).locArgs?.[1] ?? 0) === 'sex') {
        (s as any).KlientMON = (Math.floor(Math.random() * 23) + 3);
      }
      if (Number((s as any).locArgs?.[1] ?? 0) === 'anal') {
        (s as any).KlientMON = (Math.floor(Math.random() * 36) + 5);
      }
      if (((s as any).KlientMON ?? 0) >= ((s as any).ProsMoney ?? 0)) {
        // TODO-QSP: gt 'prostitute', 'work2', $ARGS[1]
      }
      if ((Math.floor(Math.random() * 2) + 0) === 1) {
        // TODO-QSP: dynamic text: The client smiles and offers: "I only have <<KlientMON * 100>>… what do you say?...
        scene.text(`The client smiles and offers: "I only have ${((s as any).KlientMON ?? '') * 100}… what do you say?"`);
        // TODO-QSP: dynamic "
        // TODO-QSP: "
        scene.actions([
{ label: 'Agree', handler: (st: GameState) => {
    (st as any).ProsMoney = ((st as any).KlientMON ?? 0);
    qspGoto(st, 'prostitute', 'work2', '' + ((st as any).locArgs?.[1] ?? 0) + '');
  } },
{ label: 'Refuse', handler: (st: GameState) => {
    qspGoto(st, 'prostitute', 'start');
  } },
]);
        return;
      }
    }
  }
  scene.text('The client examines you hesitantly, a bit startled by the amount you asked for. He shakes his head as he starts his car: "Too much."');
  scene.text('Then he drives away before you can get another word in. Doesn\'t he understand how bartering works!?');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['prostitute', 'start'] },
  ]);
  scene.build();
}

function enterWork2(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'event_outdoors';
  scene.text('The client grins and gives you a nod: "Get in."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get into his car', handler: (st: GameState) => {
    qspCall(st, 'npcgeneratec', '', 0, '"John"', (Math.floor(Math.random() * 28) + 18));
    qspCall(st, 'boyStat', '', ((st as any).npclastgenerated ?? 0));
    (st as any).guy = ((st as any).guy ?? 0) + (1);
    if (((st as any).pcs_throat ?? 0) < ((st as any).dick ?? 0)) {
      qspCall(st, 'arousal_funcs', 'stretch', 'oral', 1);
    }
    scene.img('images/locations/shared/sex/car/bj.jpg');
    scene.text('Once you\'re in the car you slide your hand on his crotch. The man quickly drives to a quiet place, about two streets away from where he picked you up. You can already feel an impressive bulge as you reach into his pants and you compliment him on his nice cock when you finally liberate it. He\'s nearly fully erect, and if you look closely you can actually see his cock throbbing.');
    qspCall(st, 'arousal', 'foreplay', 5, 'prostitution', 'unknown');
    qspCall(st, 'stat', '');
    if (((st as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0) {
      (st as any).protect = 1;
      scene.actions([
        { label: 'Put on a condom, using your mouth', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'dina', 'prezik');
    qspCall(st, 'stat', '');
    (st as any).picrand = (Math.floor(Math.random() * 7) + 1);
    if (((st as any).picrand ?? 0) === 1) {
      scene.img('images/shared/sex/blowjob/bjp.jpg');
    } else {
      scene.img(`images/shared/sex/blowjob/bjp${((st as any).picrand ?? '')}.jpg`);
    }
    scene.text('You put a condom between your lips and slowly guide your mouth to his penis, you gently roll it down using only your lips. You can tell the guy is really impressed with your skills.');
    if (Number((st as any).locArgs?.[1] ?? 0) === 'blow job') {
      // TODO-QSP: gs 'money', 'earn', ProsMoney * 100, 'cash'
      scene.text('You proceed to give him a blowjob, licking and sucking his condom-clad penis. The taste of the rubber is a bit unpleasant, but you do a good job regardless. In no time the guy groans loudly.');
      scene.text('When you feel his cock finally soften between your lips, you pull your head back. The man ties a knot in the condom and tosses it out of the window carelessly, then he gives you the money he owes you.');
      qspCall(st, 'dinSex', 'std_trigger_oral');
      qspCall(st, 'arousal', 'bj', 5, 'prostitution', 'unknown');
      qspCall(st, 'arousal', 'end');
      scene.actions([
        { label: 'Get out of the car', goto: ['prostitute', 'start'] },
      ]);
    } else {
      if (Number((st as any).locArgs?.[1] ?? 0) === 'sex') {
        scene.text('The client is so turned on, he doesn\'t want any foreplay. Now that he has a condom on, he wants to fuck you.');
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    (st as any).prosti = 0;
    (st as any).protect = 1;
    if (((st as any).preziktype ?? 0) === 2) {
      (st as any).sexcontra = 7;
    } else {
      (st as any).sexcontra = 3;
    }
    // TODO-QSP: gs 'money', 'earn', ProsMoney * 100, 'cash'
    qspCall(st, 'stat', '');
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      scene.img('images/locations/shared/sex/car/sexcar1.jpg');
      scene.text('You obediently lie down on your back in the back seat. The man pounces on you eagerly, pushing your legs apart and burying his cock deep inside you, all in one swift motion. You groan at the sudden intrusion, but do nothing to stop his rough and fast pace. Quite the opposite actually, you encourage the hard fucking by wrapping your legs around his waist as he keeps slamming his dick deep into your vagina with all his might. ');
      qspCall(st, 'arousal', 'vaginal', 15, 'prostitution', 'unknown', 'rough');
      qspCall(st, 'stat', '');
    } else {
      scene.img('images/locations/shared/sex/car/sexcar2.jpg');
      scene.text('You feel the man\'s hands on your ass cheeks as soon as you get on your hands and knees in the back seat. He confidently guides his cock to your pussy, and slowly thrusts it inside you. You find his slow pace maddening and thrust back on his cock a few times to encourage a faster pace, after all you still have more customers you\'d like to get to. The man complies and soon he is slamming his dick in and out of you, as you moan like a bitch in heat.');
      qspCall(st, 'arousal', 'vaginal', 15, 'prostitution', 'unknown', 'rough');
      qspCall(st, 'stat', '');
    }
    scene.text('After a few minutes of fucking you, the man groans and you feel his hips spasming against yours. He pulls out of you and takes the filled condom off his slowly shrinking cock.');
    scene.text('He ties a knot in the condom and tosses it out of the window carelessly, and gives you the money he owes you.');
    qspCall(st, 'dinSex', 'std_trigger');
    qspCall(st, 'arousal', 'end');
    (st as any).protect = 0;
    scene.actions([
      { label: 'Get out of the car', goto: ['prostitute', 'start'] },
    ]);
  } },
        ]);
      } else {
        if (Number((st as any).locArgs?.[1] ?? 0) === 'anal') {
          scene.text('The client is so turned on, he doesn\'t want any foreplay. Now that he has a condom on, he wants to fuck your ass.');
          scene.actions([
            { label: 'Continue', handler: (st: GameState) => {
    (st as any).prosti = 0;
    // TODO-QSP: gs 'money', 'earn', ProsMoney * 100, 'cash'
    qspCall(st, 'stat', '');
    (st as any).dickK = ((st as any).dick ?? 0) * 10 / 100;
    if (((st as any).dickK ?? 0) < 1) {
      (st as any).dickK = 1;
    }
    qspCall(st, 'arousal_funcs', 'stretch', 'anal', ((st as any).dickK ?? 0));
    scene.img('images/shared/sex/anal/doggy/anal30.jpg');
    // TODO-QSP: dynamic text: You immediately feel the man''s hands on your ass cheeks when you get on your ha...
    scene.text(`You immediately feel the man's hands on your ass cheeks when you get on your hands and knees in the back seat. The man confidently guides his condom-covered cock to your sphincter, and slowly thrusts all of his ${((st as any).dick ?? '')} centimeter inside you.`);
    qspCall(st, 'arousal', 'anal', 10, 'prostitution', 'unknown');
    qspCall(st, 'stat', '');
    if (((st as any).pcs_ass ?? 0) < ((st as any).dick ?? 0)) {
      scene.text('Your anus stretches painfully while he fills your ass with his shaft, and you wince and beg him to take it easy for a little while. Fortunately, he listens.');
      scene.text('Once he feels he gave you enough time to adapt, he begins to move his hips. Slowly at first, but his thrusts accelerate more and more as he gets closer to his orgasm.');
      qspCall(st, 'arousal', 'anal', 10, 'prostitution', 'unknown');
      qspCall(st, 'stat', '');
    }
    if (((st as any).pcs_ass ?? 0) >= ((st as any).dick ?? 0)) {
      (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (((st as any).pcs_ass ?? 0));
      scene.text('Your anus has no difficulty adjusting to the size of his member, and it actually feels fairly pleasant when he shoves his length in. Your anus clasps around the base of his cock from time to time, and the man begins to thrust his hips against yours enthusiastically when he notices you can take it.');
      qspCall(st, 'arousal', 'anal', 10, 'prostitution', 'unknown');
      qspCall(st, 'stat', '');
    }
    scene.text('After a few minutes of fucking your ass, the man groans and you feel his hips spasming against yours. He pulls out of you and takes the filled condom off his slowly shrinking cock.');
    scene.text('The man ties a knot in the condom and tosses it out of the window carelessly, and gives you the money he owes you.');
    qspCall(st, 'dinSex', 'std_trigger');
    (st as any).protect = 0;
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Get out of the car', goto: ['prostitute', 'start'] },
    ]);
  } },
          ]);
        }
      }
    }
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Get him hard with your mouth', handler: (st: GameState) => {
    qspCall(st, 'dinSex', 'std_trigger_oral');
    qspCall(st, 'stat', '');
    scene.img(`images/shared/sex/blowjob/bjp${(Math.floor(Math.random() * 6) + 8)}.jpg`);
    scene.text('You close your lips around his member and flick your tongue over the tip of his cock teasingly.');
    qspCall(st, 'arousal', 'bj', 5, 'prostitution', 'unknown');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Suck on his cock', handler: (st: GameState) => {
    if (Number((st as any).locArgs?.[1] ?? 0) === 'blow job') {
      (st as any).bjrand = (Math.floor(Math.random() * 100) + 1);
      // TODO-QSP: gs 'money', 'earn', ProsMoney * 100, 'cash'
      if (((st as any).bjrand ?? 0) <= 50) {
        if (((st as any).stat ?? 0)?.['bj'] <= 15) {
          (st as any).spafinloc = 12;
          qspCall(st, 'cum_manage', '');
          scene.img('images/shared/sex/cum/mouth/cum32.jpg');
          scene.text('You don\'t have much experience giving blowjobs, and even though you do your best, the man can tell you\'re not very good at it.');
          scene.text('Your mouth makes him feel good nevertheless, and after a few minutes he groans and cums in your mouth. You wince from the unpleasant taste of his sperm, which earns you a disdaining look from him.');
          scene.text('The man silently gives you the money he owes you, and then tells you to get out of his car.');
          qspCall(st, 'arousal', 'bj', 10, 'prostitution', 'unknown');
          qspCall(st, 'stat', '');
        } else {
          (st as any).spafinloc = 12;
          qspCall(st, 'cum_manage', '');
          scene.img('images/shared/sex/cum/mouth/cum33.jpg');
          scene.text('Your trained tongue slides up and down his shaft expertly, you pull out all of your tricks to make him feel good. You even use some techniques you learned to stall his orgasm for a moment, making it all the more intense for him when he shoots his load into your mouth.');
          scene.text('When you swallow his load obediently, the man smiles at you with a delighted look on his face and gives you the money he owes you. You really made him feel great!');
          qspCall(st, 'arousal', 'bj', 10, 'prostitution', 'unknown');
          qspCall(st, 'stat', '');
        }
      } else {
        if (((st as any).bjrand ?? 0) <= 80) {
          if (((st as any).stat ?? 0)?.['bj'] <= 15) {
            (st as any).spafinloc = 11;
            qspCall(st, 'cum_manage', '');
            scene.img('images/shared/sex/cum/facial/facial17.jpg');
            scene.text('You don\'t have much experience giving blowjobs, and even though you do your best, the man can tell you\'re not very good at it.');
            scene.text('When the man is about to cum, he suddenly pulls his cock out of your mouth and shoots his load all over your face. Not expecting this, you didn\'t have time to close your eyes and some of it ends up in your eyes.');
            if (((st as any).pcs_makeup ?? 0) > ((st as any).makeup ?? 0)?.['base']) {
              (st as any).pcs_makeup = 0;
              scene.text('The cum on your face makes a mess of your make-up, too.');
            }
            scene.text('You try to remain professional enough and smile at him, ignoring the pain, but the man can clearly tell you\'re uncomfortable, yet he doesn\'t seem to care.');
            scene.text('The man silently gives you the money he owes you, and then tells you to get out of his car.');
            qspCall(st, 'arousal', 'bj', 10, 'prostitution', 'unknown');
            qspCall(st, 'stat', '');
          } else {
            (st as any).spafinloc = 11;
            qspCall(st, 'cum_manage', '');
            scene.img('images/shared/sex/cum/facial/facial18.jpg');
            scene.text('Your trained tongue slides up and down his shaft expertly, and you pull out all of your tricks to make him feel good. You even use some techniques you learned to stall his orgasm for a moment, making it all the more intense for him when he orgasms.');
            scene.text('You quickly release his cock from your mouth and tilt your head backwards with your eyes closed, making him squirt his load onto your chin with a fake smile on your face.');
            if (((st as any).pcs_makeup ?? 0) > ((st as any).makeup ?? 0)?.['base']) {
              scene.text('Even though the man thinks you\'re delighted with him cumming all over you, in truth you\'re mostly focusing on not smearing your make-up!');
            }
            scene.text('The man grins happily when he looks at his work of art, and gives you the money he owes you. You made his day!');
            qspCall(st, 'arousal', 'bj', 10, 'prostitution', 'unknown');
            qspCall(st, 'stat', '');
          }
        } else {
          if (((st as any).stat ?? 0)?.['bj'] <= 15) {
            (st as any).spafinloc = 7;
            qspCall(st, 'arousal_funcs', 'stretch', 'oral', 1);
            qspCall(st, 'cum_manage', '');
            scene.img('images/shared/sex/cum/chest/bjt2.jpg');
            scene.text('You don\'t have much experience giving blowjobs, and even though you do your best, the man can tell you\'re not very good at it.');
            scene.text('While you\'re sucking him off, the man tries to pull your clothes aside to expose your breasts. You moan uncomfortably in protest with his cock still deep in your mouth, letting him know that was not part of the deal!');
            scene.text('He\'s clearly displeased, but lets go and refocuses his efforts on fucking your throat instead.');
            scene.text('When he\'s close to cumming, he pulls his cock out of your mouth. When he begins to jerk off furiously, you close your eyes and tilt your head back… except you don\'t feel anything land on your face!');
            scene.text('You open your eyes again after a few seconds and notice in horror that the asshole dumped his load onto your clothes, leaving stains everywhere! You silently curse him but force yourself to smile… he is still your customer, after all.');
            scene.text('The man silently gives you the money he owes you, and then tells you to get out of his car.');
            qspCall(st, 'arousal', 'bj', 10, 'prostitution', 'unknown');
            qspCall(st, 'stat', '');
          } else {
            qspCall(st, 'money', 'earn', 500, 'cash');
            scene.img('images/shared/sex/cum/chest/bjt.jpg');
            scene.text('Your trained tongue slides up and down his shaft expertly, and you pull out all of your tricks to make him feel good. You even use some techniques you learned to stall his orgasm for a while.');
            scene.text('While you\'re sucking him off, the man tries to pull your clothes aside to expose your breasts. Understanding what he wants, you expose your boobs readily. His cock erupts almost immediately at the sight of them, and he removes his cock from your mouth so he can spray his sperm over your tits too.');
            // TODO-QSP: dynamic text: The man grins happily when he looks at his work of art across your boobs, and gi...
            scene.text(`The man grins happily when he looks at his work of art across your boobs, and gives you an extra ${qspFunc(s, 'money', 'string_profit', 500)} as a tip on top of the money he owed you. You really made his day!`);
            qspCall(st, 'arousal', 'bj', 10, 'prostitution', 'unknown');
            qspCall(st, 'stat', '');
          }
        }
      }
      qspCall(st, 'arousal', 'end');
      scene.actions([
        { label: 'Get out of his car', goto: ['prostitute', 'start'] },
      ]);
    } else {
      if (Number((st as any).locArgs?.[1] ?? 0) === 'sex') {
        scene.text('After you suck him off for a while, the guy reminds you that that\'s not why you\'re here. He\'s ready to fuck you now.');
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    (st as any).prosti = 0;
    // TODO-QSP: gs 'money', 'earn', ProsMoney * 100, 'cash'
    qspCall(st, 'stat', '');
    (st as any).prostRand = (Math.floor(Math.random() * 100) + 1);
    qspCall(st, 'dinSex', 'std_trigger');
    if (((st as any).prostRand ?? 0) <= 50) {
      (st as any).pose = 1;
      scene.img(`images/locations/shared/sex/car/sexcar${(Math.floor(Math.random() * 7) + 1)}.jpg`);
      scene.text('You lean against the car and expose your bare ass to the man. He\'s not wasting any time and immediately gets behind you, eagerly rubbing his cock against your vagina. The feeling of a rock-hard erection rubbing on your pussy lips excites you. Your hips move involuntarily seeking out more friction. The man smiles at your eagerness to be fucked and grants your wish by slamming powerfully his hard member deep into your willing vagina. ');
      qspCall(st, 'arousal', 'vaginal', 10, 'prostitution', 'unknown');
      qspCall(st, 'stat', '');
    } else {
      if (((st as any).prostRand ?? 0) <= 75) {
        (st as any).pose = 1;
        scene.img(`images/locations/shared/sex/car/sexcar${(Math.floor(Math.random() * 3) + 8)}.jpg`);
        scene.text('You get down on your hands and knees like he wants you to, and brace yourself against the car when you feel him pressing his cock against your pussy in a none too gentle fashion, wasting no time as he roughly uses your tender vagina for his pleasure. You groan in pain, which only encourages the man to fuck you even harder. ');
        qspCall(st, 'arousal', 'vaginal', 10, 'prostitution', 'unknown', 'rough');
        qspCall(st, 'stat', '');
      } else {
        (st as any).pose = 0;
        scene.img(`images/locations/shared/sex/car/sexcar${(Math.floor(Math.random() * 7) + 11)}.jpg`);
        scene.text('He groans in your ear: "Get on the hood, on your back!"');
        scene.text('You quickly do as he says, and let out a soft moan when he rubs his cock against your pussy lips.');
        qspCall(st, 'arousal', 'vaginal', 10, 'prostitution', 'unknown');
        qspCall(st, 'stat', '');
      }
    }
    scene.text('He exerted himself a great deal while he was fucking you, and is slowly catching his breath while you straighten your clothes.');
    scene.text('With a satisfied smile on his face, he gives you the money he owes you and drives off.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', goto: ['prostitute', 'start'] },
    ]);
  } },
        ]);
      } else {
        if (Number((st as any).locArgs?.[1] ?? 0) === 'anal') {
          scene.text('After you suck him off for a while, the guy reminds you that that\'s not why you\'re here. He\'s ready to fuck your ass now.');
          scene.actions([
            { label: 'Continue', handler: (st: GameState) => {
    (st as any).prosti = 0;
    qspCall(st, 'stat', '');
    (st as any).dickK = ((st as any).dick ?? 0) * 10 / 100;
    if (((st as any).dickK ?? 0) < 1) {
      (st as any).dickK = 1;
    }
    qspCall(st, 'arousal_funcs', 'stretch', 'anal', ((st as any).dickK ?? 0));
    scene.img(`images/shared/sex/anal/mis/cowl${(Math.floor(Math.random() * 6) + 1)}.jpg`);
    scene.text('As soon as you lie down on the hood of the car, the man parts your legs and eagerly presses the tip of his cock against your anus.');
    qspCall(st, 'arousal', 'foreplay', 1, 'prostitution', 'unknown');
    qspCall(st, 'stat', '');
    if (((st as any).pcs_ass ?? 0) < ((st as any).dick ?? 0)) {
      // TODO-QSP: dynamic text: You feel a sharp pain and wince when the man pushes the tip of his <<dick>> cent...
      scene.text(`You feel a sharp pain and wince when the man pushes the tip of his ${((st as any).dick ?? '')} centimeter member past your sphincter, and continues to work most of his length inside you. Fortunately, he listens when you beg him to go slow.`);
      scene.text('The guy holds still for a moment so your ass can get used to how far it\'s being stretched out. After a little while you don\'t think it\'s going to get any better, and you tell the man he can start to fucking you now with a forced, fake smile on your face.');
      scene.text('He\'s still careful at first, but soon forgets about your suffering and accelerates more and more. The man groans loudly while he hammers his cock inside your ass, ignoring your crying and mewling underneath him.');
      qspCall(st, 'arousal', 'anal', 10, 'prostitution', 'unknown', 'rough');
      qspCall(st, 'stat', '');
    } else {
      (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (((st as any).pcs_ass ?? 0));
      scene.text('Your anus has no difficulty adjusting to the size of his member, and it actually feels fairly pleasant when he shoves his length in. Your anus clasps around the base of his cock from time to time, and the man begins to thrust his hips against yours enthusiastically when he notices you can take it.');
      qspCall(st, 'arousal', 'anal', 10, 'prostitution', 'unknown');
      qspCall(st, 'stat', '');
      qspCall(st, 'dinSex', 'std_trigger');
    }
    if (((st as any).klismaday ?? 0) !== ((st as any).daystart ?? 0)) {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('When the man stops, you think it\'s because he came. Instead, you hear swearing.');
    scene.text('"What the fuck!? What kind of dirty whore are you, this is disgusting!" he yells.');
    scene.text('When you turn around, you see the problem: his dick is covered in shit! You should really give yourself an enema first, if you want to sell your ass like this…');
    scene.text('The man shouts angrily: "Get lost, whore… you\'re lucky I\'m letting you leave without beating you up first! You can forget about your money!"');
    qspCall(st, 'arousal', 'end');
    if (((st as any).pcs_intel ?? 0) >= 50) {
      scene.actions([
        { label: 'Apologize and make amends', handler: (st: GameState) => {
    qspCall(st, 'arousal_funcs', 'stretch', 'oral', 1);
    qspCall(st, 'dinSex', 'std_trigger_oral');
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/blowjob/bjr1.jpg');
    scene.text('You understand perfectly why he\'s upset… that wasn\'t very smart of you. You\'ll have to think of a solution fast!');
    scene.text('"I\'m sorry, sir! Please allow me to make it up to you…" you tell him, while you drop to your knees obediently. This is going to be unpleasant, but you have to do something to keep him happy! And still get paid.');
    scene.text('The man watches in disgust as you close your lips around his dirty cock. The taste and smell are awful! He\'s still upset, but you can see his anger slowly fade away when you lick his dirty cock clean. It\'s fully erect again by now, and you can tell he\'s still very horny despite your mishap.');
    scene.text('He then says: "Good enough. Lie down in the grass and spread your legs."');
    qspCall(st, 'arousal', 'bj', 5, 'prostitution', 'unknown', 'sub', 'humiliation');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Let him fuck you', handler: (st: GameState) => {
    qspCall(st, 'arousal_funcs', 'stretch', 'vaginal');
    // TODO-QSP: gs 'money', 'earn', ProsMoney * 110, 'cash'
    (st as any).protect = 1;
    qspCall(st, 'dinSex', 'std_trigger');
    (st as any).protect = 0;
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/sex/car/sexcar20.jpg');
    scene.text('You lie down obediently, giving the man a humble look as he takes place between your legs. He quickly put a condom on, not taking any more chances with you. You still have that awful taste in your mouth, but do your best to focus on giving the man pleasure.');
    scene.text('The man drives his cock deep inside you and begins to fuck your pussy using long, firm strokes. He groans every time his hips slap against yours, and the intensity with which he fucks you makes you cry out as well.');
    scene.text('After a few minutes, the man groans and you feel his hips spasming against yours. He pulls out of you and takes the filled condom off his slowly shrinking cock.');
    scene.text('While you lay on the grass, recovering from all the things you just had to do to not lose your customer, he theatrically throws a number of bills onto your body one by one. He\'s smiling again, and is clearly in a good mood. He even added a little extra!');
    qspCall(st, 'arousal', 'vaginal', 5, 'prostitution', 'unknown', 'sub', 'humiliation');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Collect the money and get up', goto: ['prostitute', 'start'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Leave quietly', goto: ['prostitute', 'start'] },
      { label: 'Insist he pays you anyway', handler: (st: GameState) => {
    // TODO-QSP: gs 'money', 'earn', ProsMoney * 100, 'cash'
    qspCall(st, 'mood', 'lower', 'large');
    (st as any).pcs_health = ((st as any).pcs_health ?? 0) - (((st as any).pcs_health ?? 0)/5);
    qspCall(st, 'arousal_funcs', 'stretch', 'oral', 1);
    (st as any).spafinloc = 12;
    qspCall(st, 'cum_manage', '');
    (st as any).pcs_breath = 0;
    qspCall(st, 'dinSex', 'std_trigger_oral');
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/blowjob/bjr.jpg');
    scene.text('"Hey, I did what you wanted! You owe m-" you begin, but he doesn\'t let you finish. The man angrily punches you in the stomach, making you double over in pain.');
    scene.text('"Fine! You\'ll get your money… but you will correct your mistake, whore!" he snarls angrily.');
    scene.text('He kneels down and thrusts his smelly, dirty cock all the way into your mouth, and says with a mean grin: "Start sucking, slut. It\'s not coming out until it\'s completely clean!"');
    scene.text('The taste and stench are terrible, and you really have to fight the urge to vomit. You barely manage, partially because you\'re afraid of what he would do otherwise…');
    scene.text('A few minutes later, long after you licked and sucked his cock clean, the man is still fucking your throat violently. Then finally, he groans and cums inside your mouth.');
    scene.text('He scoffs at you when he pulls away, while you roll to your stomach and dry heave a few times. That was disgusting!');
    scene.text('He carelessly throws the money he owes you onto the ground and drives off, without saying another word.');
    qspCall(st, 'arousal', 'bj', 5, 'prostitution', 'unknown', 'sub', 'humiliation');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Collect the money and get up', goto: ['prostitute', 'start'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      qspCall(st, 'money', 'earn', 2000, 'cash');
      (st as any).cumanalRand = (Math.floor(Math.random() * 3) + 0);
      if ((!((st as any).cumanalRand ?? 0))) {
        (st as any).spafinloc = 4;
        qspCall(st, 'cum_manage', '');
        scene.text('Suddenly the man groans loudly, and abruptly pulls his member out of your stretched anus. The sudden emptiness feels strange, but you smile seductively at the man while he jerks himself off over your ass cheeks. When he\'s done covering your buttocks with his seed, he lets out a satisfied sigh and gives you your money.');
      } else {
        if (((st as any).cumanalRand ?? 0) === 1) {
          (st as any).spafinloc = 7;
          qspCall(st, 'cum_manage', '');
          scene.text('Suddenly the man groans loudly, and abruptly pulls his member out of your stretched anus. The sudden emptiness feels strange, but you smile seductively at the man while he jerks himself off over your ass cheeks. Then the bastard suddenly aims his cock at your clothes, and shoots his load all over them!');
          scene.text('You silently curse him, but force yourself to keep smiling as he lets out a satisfied sigh and gives you your money.');
        } else {
          (st as any).spafinloc = 3;
          qspCall(st, 'cum_manage', '');
          scene.text('Suddenly the man groans loudly, and he holds still with his cock deep inside you. Then he very slowly pulls out, and a trickle of his sperm slowly runs out of your slightly gaping ass.');
          scene.text('He admires his work for a moment, before giving the money he owes you with a satisfied smile on his face.');
        }
      }
      qspCall(st, 'arousal', 'end');
      scene.actions([
        { label: 'Take his money and straighten your clothes', goto: ['prostitute', 'start'] },
      ]);
    }
  } },
          ]);
        }
      }
    }
  } },
    ]);
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'public_outdoors';
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'work1':
      enterWork1(s, scene);
      break;
    case 'work2':
      enterWork2(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const Prostitute: LocationDef = {
  name: 'Prostitute',
  title: 'Road near the park, among prostitutes',
  region: 'other',
  locationType: 'event_outdoors',
  enter: enter,
};
