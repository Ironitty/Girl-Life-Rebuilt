import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDriveSex1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcgeneratec', '', 0, 'truck driver', Math.floor(Math.random() * 9) + 14);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
  qspCall(s, 'stat', '');
  (s as any).autostop_price = 0;
  scene.text('<center><b>Main road between St. Petersburg and Pavlovsk</b></center>');
  scene.img('images/locations/highway/sex/bj (1).mp4');
  scene.text('When you get in the car, you immediately reach for his pants and take out his semi-erect cock. That\'s what you promised him after all. You feel it slowly hardening between your fingers as the man drives off.');
  if (((s as any).pcs_throat ?? 0) < ((s as any).dick ?? 0)) {
    qspCall(s, 'arousal_funcs', 'stretch', 'oral', 1);
  }
  if (((s as any).dick ?? 0) >= 14  &&  ((s as any).dick ?? 0) < 16) {
  }
  if (((s as any).dick ?? 0) >= 16  &&  ((s as any).dick ?? 0) < 18) {
  }
  if (((s as any).dick ?? 0) >= 18  &&  ((s as any).dick ?? 0) < 20) {
  }
  if (((s as any).dick ?? 0) >= 20) {
  }
  // TODO-QSP: dynamic text: You gently massage his cock between your fingers while the man gets comfortable....
  scene.text(`You gently massage his cock between your fingers while the man gets comfortable. It's ${((s as any).road_text_sex ?? 0)}, roughly ${((s as any).dick ?? 0)} centimeters long and quite girthy. You manage to massage him to a full erection in no time at all, and lower your head to take it between your lips.`);
  scene.text('As you lick the tip of his cock with your tongue and begin to suck him off, you have to admit: this is kinda hot! The man is well groomed and has a pleasant masculine smell to him.');
  scene.text('You eagerly bob your head up and down while he drives, totally forgetting about your earlier doubts, and do your best to get him off.');
  scene.text('With success: in no time at all, the man groans, and his cock erupts inside your mouth, shooting gobs of his hot sperm onto your tongue while you keep your lips closed to not make a mess.');
  scene.text('Realizing you can\'t spit it out anywhere, you have no option but to swallow his load while he keeps driving.');
  qspCall(s, 'arousal', 'hj', 15, 'prostitution');
  qspCall(s, 'arousal', 'bj', 15, 'prostitution');
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0), 0);
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Continue', goto: ['road', 'autostop_drive'] },
  ]);
  scene.build();
}

function enterDriveSex2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'npcgeneratec', '', 0, 'truck driver', Math.floor(Math.random() * 9) + 14);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
  qspCall(s, 'stat', '');
  (s as any).autostop_price = 0;
  scene.text('<center><b>Main road between St. Petersburg and Pavlovsk</b></center>');
  scene.img('images/locations/highway/sex/hj (1).mp4');
  scene.text('When you get in the car, you immediately reach for his pants and take out his semi-erect cock. That\'s what you promised him after all. You feel it slowly hardening between your fingers as the man drives off.');
  if (((s as any).dick ?? 0) >= 14  &&  ((s as any).dick ?? 0) < 16) {
  }
  if (((s as any).dick ?? 0) >= 16  &&  ((s as any).dick ?? 0) < 18) {
  }
  if (((s as any).dick ?? 0) >= 18  &&  ((s as any).dick ?? 0) < 20) {
  }
  if (((s as any).dick ?? 0) >= 20) {
  }
  // TODO-QSP: dynamic text: You gently massage his cock between your fingers while the man gets comfortable....
  scene.text(`You gently massage his cock between your fingers while the man gets comfortable. It's ${((s as any).road_text_sex ?? 0)}, roughly ${((s as any).dick ?? 0)} centimeters long and quite girthy. You manage to massage him to a full erection in no time at all, and begin to jerk him off while he drives, rubbing your fingertips over his glans.`);
  scene.text('Even though you feel a bit awkward for having to service this man to get where you need to be, you\'re serious about what you promised him and jerk him off diligently. In no time at all, your soft touch brings him to an orgasm. Unfortunately, his cock is pointing straight at you when it happens, and most of his sperm ends up on your clothes.');
  qspCall(s, 'arousal', 'hj', 15, 'prostitution');
  qspCall(s, 'cum_call', 'clothes', ((s as any).npcID ?? 0), 0);
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Continue', goto: ['road', 'autostop_drive'] },
  ]);
  scene.build();
}

function enterAutostopDrive(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  // TODO-QSP: gs 'money', 'pay', autostop_price * 100, 'cash'
  if (((s as any).road_textrand0 ?? 0) === 'Gadukino') {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).nroad = 10;
  } else {
    if (((s as any).road_textrand0 ?? 0) === 'Pavlovsk') {
      (s as any).minut = ((s as any).minut ?? 0) + 15;
      (s as any).nroad = 20;
    } else {
      if (((s as any).road_textrand0 ?? 0) === 'St. Petersburg') {
        (s as any).minut = ((s as any).minut ?? 0) + 15;
        (s as any).nroad = 0;
      }
    }
  }
  (s as any).picrand = Math.floor(Math.random() * 2) + 1;
  scene.text('<center><b>Main road between St. Petersburg and Pavlovsk</b></center>');
  if (((s as any).truck_drive ?? 0) === 1) {
    scene.img(`images/locations/highway/truck_drive (${((s as any).picrand ?? 0)}).jpg`);
  } else {
    scene.img(`images/locations/highway/drive (${((s as any).picrand ?? 0)}).jpg`);
  }
  scene.text('You try to start a conversation once or twice, but the man doesn\'t really seem to be interested in chatting while he drives. You give up and just look out the window, while he drives you to your destination.');
  scene.text('Fifteen minutes later, you arrive, and the man pulls over. "Alright, we\'re here. Take care, girl!"');
  if (((s as any).prostitute ?? 0)?.['highway_idea'] === 1) {
    scene.text('You get out of the car, looking after it for a minute or two as it drives away. Someone just solicited you, as if you were a prostitute.');
    if (((s as any).prostitute ?? 0)?.['active'] === 1) {
      scene.text('Which you are, in all honesty, but it still caught you by surprise. However, this means that maybe you could work along the highway. You definitely saw some girls working but mostly near the entrance to Pavlovsk or St. Petersburg.');
      scene.text('You put the idea aside for now, but maybe you should check it at some point.');
      ((s as any).prostitute ?? {})['highway_idea'] = 2;
      qspCall(s, 'prostitution_functions', 'set_highway_prostitute');
    } else {
      if (((s as any).PCloStyle ?? 0) === 4  ||  ((s as any).PCloProstitute ?? 0) === 1) {
        scene.text('You may dress like one, but that doesn\'t mean you are one. Nonetheless, now you know to watch out, clearly there are prostitutes working along the highway and not just near Pavlovsk or St. Petersburg.');
      } else {
        scene.text('You are still a bit shaken and wonder why did you even ask him to give you a ride, but then shrug it off. He thought you were a hooker. As if…');
      }
      ((s as any).prostitute ?? {})['highway_idea'] = 2;
      qspCall(s, 'prostitution_functions', 'set_highway_prostitute');
    }
  }
  scene.actions([
    { label: 'Get out of the car', goto: ['road', '<<nroad>>'] },
  ]);
  scene.build();
}

function enterAutostopMoney(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).autostop_price = Math.floor(Math.random() * 4) + 3;
  (s as any).textrand = Math.floor(Math.random() * 3) + 1;
  if (((s as any).textrand ?? 0) === 1) {
  }
  if (((s as any).textrand ?? 0) === 2) {
  }
  if (((s as any).textrand ?? 0) === 3) {
  }
  scene.text('<center><b>Main road between St. Petersburg and Pavlovsk</b></center>');
  if ((!((s as any).locArgs?.[1] ?? 0))) {
    if (((s as any).truck_drive ?? 0) === 1) {
      scene.img(`images/locations/highway/truck_guy (${qspUntranslated(s, "ARGS[2]", { location: "road" })}).jpg`);
    } else {
      if (((s as any).bandit_drive ?? 0) === 1) {
        scene.img('images/locations/highway/guy (1).jpg');
      } else {
        scene.img(`images/locations/highway/guy (${qspUntranslated(s, "ARGS[2]", { location: "road" })}).jpg`);
      }
    }
    // TODO-QSP: dynamic text: You approach the driver and say, "Hello, sir! I need a ride to <<$road_textrand0...
    scene.text(`You approach the driver and say, "Hello, sir! I need a ride to ${((s as any).road_textrand0 ?? 0)}, can you help me?"`);
    scene.text('The driver gives you another appraising look.');
  } else {
    scene.img(`images/locations/highway/guy (${qspUntranslated(s, "ARGS[2]", { location: "road" })}).jpg`);
    // TODO-QSP: dynamic text: You take a small step back, "I think, there is a mistake, sir, I'm just trying t...
    scene.text(`You take a small step back, "I think, there is a mistake, sir, I'm just trying to get to ${((s as any).road_textrand0 ?? 0)}, can you help me?`);
    scene.text('The driver gives you another appraising look.');
  }
  if ((Math.floor(Math.random() * 1201) + 0) <= ((s as any).pcs_apprnc ?? 0)) {
    scene.text('"I can take you there for free, but only if you do something for me in return," the guy smiles.');
    scene.text('"Uhh… like what?" you ask him, even though you\'re pretty sure you know where this is going.');
    scene.text('The man laughs and shifts a bit in his seat. He says, "You\'re a grown-up girl with a nice body! Surely you can think of something?"');
    scene.actions([
      { label: 'Offer a blowjob', handler: (st: GameState) => {
    ((s as any).drive_sex ?? {})[1] = 1;
    scene.text('You bite your lip for a second, quickly going through your options. Then you say, "I really do need this ride, sir! Would a blowjob be okay?"');
    scene.text('The guy grins greedily and says, "Excellent, I knew we would find a way to help each other out! Get in."');
    scene.actions([
      { label: 'Get in the car', goto: ['road', 'drive_sex1'] },
    ]);
  } },
      { label: 'Offer a handjob', handler: (st: GameState) => {
    ((s as any).drive_sex ?? {})[2] = 1;
    scene.text('You bite your lip for a second, quickly going through your options. Then you say, "I really do need this ride, sir! Would a handjob be okay?"');
    scene.text('The guy gives you a slightly disappointed look and frowns, "What? Only a handjob?"');
    scene.text('You really don\'t want to go further than that! Your cheeks turn a deep red and you begin to stumble, "I\'m sorry. I don\'t normally do this…"');
    scene.text('After some hesitation, he responds, "Oh, alright then. Getting a handjob from a cute girl such as yourself sounds like a fair deal. Get in."');
    scene.actions([
      { label: 'Get in the car', goto: ['road', 'drive_sex2'] },
    ]);
  } },
      { label: 'Decline his offer', handler: (st: GameState) => {
    scene.text('You bite your lip for a second, thinking for a moment that maybe you could offer him money instead, but decide it\'s safer to let him go, who knows what he will do if you refuse and then get in the car with him, alone.');
    scene.text('"Thank you sir, but I will just wait for someone else, I\'m sorry for holding you up." you say and step away from the car. The man shrugs and drives off.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  } else {
    // TODO-QSP: dynamic text: He ponders for a second and then says, "<<$road_textrand4>>"
    scene.text(`He ponders for a second and then says, "${((s as any).road_textrand4 ?? 0)}"`);
    scene.actions([
      { label: 'Agree to pay him [+$func(\'money\', \'get_cost_string\', autost...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((s as any).autostop_price ?? 0) * 100, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      scene.actions([{ label: 'Continue', goto: ['road', 'autostop_drive'] }]);
    }
  } },
      { label: 'Decline his offer', handler: (st: GameState) => {
    scene.text('"I\'m sorry, sir. I can\'t afford that," you apologize and step away from the car. The man shrugs and drives off.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      { label: 'Ask for a lower price', handler: (st: GameState) => {
    (s as any).textrand = Math.floor(Math.random() * 3) + 1;
    if (((s as any).textrand ?? 0) === 1) {
    }
    if (((s as any).textrand ?? 0) === 2) {
    }
    if (((s as any).textrand ?? 0) === 3) {
    }
    // TODO-QSP: dynamic text: You twirl your hair between your fingers and give the man a cute look, hoping he...
    scene.text(`You twirl your hair between your fingers and give the man a cute look, hoping he will have pity on you and lower the price. "${((s as any).road_textrand5 ?? 0)}" you ask him sweetly.`);
    scene.text('The man seems a bit reluctant and looks at you once more.');
    if ((Math.floor(Math.random() * 401) + 0) <= ((s as any).pcs_apprnc ?? 0)) {
      scene.text('"I can take you there for free, but only if you do something for me in return", the guy smiles.');
      scene.text('"Uhh… like what?" you ask him, even though you\'re pretty sure you know where this is going.');
      scene.text('The man laughs and shifts a bit in his seat. He says, "You\'re a grown-up girl with a nice body! Surely you can think of something?"');
      scene.actions([
        { label: 'Offer a blowjob', handler: (st: GameState) => {
    ((s as any).drive_sex ?? {})[1] = 1;
    scene.text('You bite your lip for a second, quickly going through your options. Then you say, "I really do need this ride, sir! Would a blowjob be okay?"');
    scene.text('The guy grins greedily and says, "Excellent, I knew we would find a way to help each other out! Get in."');
    scene.actions([
      { label: 'Get in the car', goto: ['road', 'drive_sex1'] },
    ]);
  } },
        { label: 'Offer a handjob', handler: (st: GameState) => {
    ((s as any).drive_sex ?? {})[2] = 1;
    scene.text('You bite your lip for a second, quickly going through your options. Then you say, "I really do need this ride, sir! Would a handjob be okay?"');
    scene.text('The guy gives you a slightly disappointed look and says, "What? Only a handjob?"');
    scene.text('You really don\'t want to go further than that! Your cheeks turn a deep red and you begin to stumble, "I\'m sorry. I don\'t normally do this…"');
    scene.text('After some hesitation, he responds, "Oh, alright then. Getting a handjob from a cute girl such as yourself sounds like a fair deal. Get in."');
    scene.actions([
      { label: 'Get in the car', goto: ['road', 'drive_sex2'] },
    ]);
  } },
      ]);
    } else {
      (s as any).ivrand = Math.floor(Math.random() * 2) + 1;
      (s as any).autostop_price = ((s as any).autostop_price ?? 0) - (((s as any).ivrand ?? 0));
      // TODO-QSP: dynamic text: The man sighs exasperatedly, but yields, "Okay, fine. I'll make it <<$func('mone...
      scene.text(`The man sighs exasperatedly, but yields, "Okay, fine. I'll make it ${qspFunc(s, 'money', 'string_price', ((s as any).ivrand ?? 0)*100, 1)} less, because you seem like a nice girl and I want to help you out. I'll take you there for ${qspFunc(s, 'money', 'string_price', ((s as any).autostop_price ?? 0)*100, 1)}, but I can't go any lower than that!"`);
      scene.actions([
        { label: 'Agree to pay him [+$func(\'money\', \'get_cost_string\', autost...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((s as any).autostop_price ?? 0)*100, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      scene.actions([{ label: 'Continue', goto: ['road', 'autostop_drive'] }]);
    }
  } },
        { label: 'Decline his offer', handler: (st: GameState) => {
    scene.text('"I\'m sorry, sir. I still can\'t afford that," you apologize and step away from the car. The man shrugs and drives off.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
        { label: 'Offer him a blowjob instead', handler: (st: GameState) => {
    ((s as any).drive_sex ?? {})[1] = 1;
    scene.text('You bite your lip, as if you are ashamed of what you\'re about to say next. In a weak voice, you offer, "I can\'t pay you money, sir. But… I could give you a blowjob? Would that be okay?"');
    scene.text('You lick your lips seductively and offer him a weak smile, hoping that maybe he\'ll feel bad for you and just take you with him for free.');
    scene.text('The man grins from ear to ear, and says, "You know what, girl? I was kinda hoping you\'d say that. Get in."');
    scene.actions([
      { label: 'Get in the car', goto: ['road', 'drive_sex1'] },
    ]);
  } },
      ]);
    }
  } },
    ]);
  }
  scene.build();
}

function enterAutostopD(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).truck_drive = 0;
  (s as any).bandit_drive = 0;
  ((s as any).drive_sex ?? {})[1] = 0;
  ((s as any).drive_sex ?? {})[2] = 0;
  (s as any).textrand = Math.floor(Math.random() * 5) + 1;
  if (((s as any).textrand ?? 0) === 1) {
  }
  if (((s as any).textrand ?? 0) === 2) {
  }
  if (((s as any).textrand ?? 0) === 3) {
  }
  if (((s as any).textrand ?? 0) === 4) {
  }
  if (((s as any).textrand ?? 0) === 5) {
  }
  (s as any).textrand = Math.floor(Math.random() * 5) + 1;
  if (((s as any).textrand ?? 0) === 1) {
  }
  if (((s as any).textrand ?? 0) === 2) {
  }
  if (((s as any).textrand ?? 0) === 3) {
  }
  if (((s as any).textrand ?? 0) === 4) {
  }
  if (((s as any).textrand ?? 0) === 5) {
  }
  (s as any).textrand = Math.floor(Math.random() * 5) + 1;
  if (((s as any).textrand ?? 0) === 1) {
  }
  if (((s as any).textrand ?? 0) === 2) {
  }
  if (((s as any).textrand ?? 0) === 3) {
  }
  if (((s as any).textrand ?? 0) === 4) {
  }
  if (((s as any).textrand ?? 0) === 5) {
  }
  (s as any).ivrand = Math.floor(Math.random() * 2) + 1;
  scene.text('<center><b>Main road between St. Petersburg and Pavlovsk</b></center>');
  if (((s as any).ivrand ?? 0) === 1) {
    (s as any).ivrand = Math.floor(Math.random() * 4) + 1;
    if (((s as any).ivrand ?? 0) > 1) {
      (s as any).picrand = Math.floor(Math.random() * 3) + 2;
      (s as any).bandit_drive = 1;
      scene.img(`images/locations/highway/guy (${((s as any).picrand ?? 0)}).jpg`);
      // TODO-QSP: dynamic text: After a few minutes of you trying to get someone to pull over, a <<$road_textran...
      scene.text(`After a few minutes of you trying to get someone to pull over, a ${((s as any).road_textrand3 ?? 0)}, ${((s as any).road_textrand2 ?? 0)} car stops near you. The driver rolls down his window and looks at you for a second, probably making sure you wouldn't ruin his seats with dirty clothes or something.`);
      if (((s as any).pcs_apprnc ?? 0) < 60) {
        scene.text('Then he shrugs and says, "Where do you need to go, lady?"');
      }
      if (((s as any).pcs_apprnc ?? 0) >= 60) {
        // TODO-QSP: dynamic text: Then he gives you a friendly smile and says, "<<$road_textrand1>>"
        scene.text(`Then he gives you a friendly smile and says, "${((s as any).road_textrand1 ?? 0)}"`);
      }
    } else {
      scene.img('images/locations/highway/guy (1).jpg');
      scene.text('After a few minutes of you trying to get someone to pull over, a black car with tinted windows stops near you. Two guys wearing leather jackets are clearly appraising your body.');
      scene.text('One says to the other, "Nice, we clearly drove to the right place!"');
    }
  } else {
    if (((s as any).ivrand ?? 0) === 2) {
      (s as any).picrand = Math.floor(Math.random() * 3) + 1;
      (s as any).truck_drive = 1;
      scene.img(`images/locations/highway/truck_guy (${((s as any).picrand ?? 0)}).jpg`);
      // TODO-QSP: dynamic text: After a few minutes of you trying to get someone to pull over, a huge <<$road_te...
      scene.text(`After a few minutes of you trying to get someone to pull over, a huge ${((s as any).road_textrand3 ?? 0)}, ${((s as any).road_textrand2 ?? 0)} truck stops near you. The truck driver looks at you intently for a second, probably making sure you wouldn't ruin his seats with dirty clothes or something.`);
      if (((s as any).pcs_apprnc ?? 0) < 60) {
        scene.text('Then he shrugs and says, "Where do you need to go, lady?"');
      }
      if (((s as any).pcs_apprnc ?? 0) >= 60) {
        // TODO-QSP: dynamic text: Then he gives you a friendly smile and says, "<<$road_textrand1>>"
        scene.text(`Then he gives you a friendly smile and says, "${((s as any).road_textrand1 ?? 0)}"`);
      }
    }
  }
  scene.build();
}

function enterMistakeCheck(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'prostitution_functions', 'random_approach_chance') >= (Math.floor(Math.random() * 100) + 1)) {
    (s as any).result = 1;
  }
  scene.build();
}

function enterAutostopMistake(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).truck_drive = 0;
  (s as any).bandit_drive = 0;
  if ((Math.floor(Math.random() * 4) + 1) === 1) {
    (s as any).bandit_drive = 1;
  }
  (s as any).textrand = Math.floor(Math.random() * 5) + 1;
  if (((s as any).textrand ?? 0) === 1) {
  }
  if (((s as any).textrand ?? 0) === 2) {
  }
  if (((s as any).textrand ?? 0) === 3) {
  }
  if (((s as any).textrand ?? 0) === 4) {
  }
  if (((s as any).textrand ?? 0) === 5) {
  }
  (s as any).textrand = Math.floor(Math.random() * 5) + 1;
  if (((s as any).textrand ?? 0) === 1) {
  }
  if (((s as any).textrand ?? 0) === 2) {
  }
  if (((s as any).textrand ?? 0) === 3) {
  }
  if (((s as any).textrand ?? 0) === 4) {
  }
  if (((s as any).textrand ?? 0) === 5) {
  }
  (s as any).textrand = Math.floor(Math.random() * 5) + 1;
  (s as any).actrand = Math.floor(Math.random() * 6) + 1;
  if (((s as any).actrand ?? 0) === 1) {
  }
  if (((s as any).actrand ?? 0) === 2) {
  }
  if (((s as any).actrand ?? 0) === 3) {
  }
  if (((s as any).actrand ?? 0) === 4) {
  }
  if (((s as any).actrand ?? 0) === 5) {
  }
  if (((s as any).actrand ?? 0) === 6) {
  }
  if (((s as any).textrand ?? 0) === 1) {
  }
  if (((s as any).textrand ?? 0) === 2) {
  }
  if (((s as any).textrand ?? 0) === 3) {
  }
  if (((s as any).textrand ?? 0) === 4) {
  }
  if (((s as any).textrand ?? 0) === 5) {
  }
  if (((s as any).prostitute ?? 0)?.['road'] === 0) {
    ((s as any).prostitute ?? {})['highway_idea'] = 1;
  }
  scene.text('<center><b>Main road between St. Petersburg and Pavlovsk</b></center>');
  (s as any).picrand = Math.floor(Math.random() * 3) + 2;
  scene.img(`images/locations/highway/guy (${((s as any).picrand ?? 0)}).jpg`);
  // TODO-QSP: dynamic text: After a few minutes of you trying to get someone to pull over, a <<$road_textran...
  scene.text(`After a few minutes of you trying to get someone to pull over, a ${((s as any).road_textrand1 ?? 0)}, ${((s as any).road_textrand2 ?? 0)} car stops near you. The driver rolls down his window and leans closer, his eyes roaming over your body.`);
  // TODO-QSP: dynamic text: <<$road_textrand3>>" - rubs his fingers together with a wide smile as he waits f...
  scene.text(`${((s as any).road_textrand3 ?? 0)}" - rubs his fingers together with a wide smile as he waits for your answer.`);
  // TODO-QSP: 'You blink at the question, then you realize that he mistook you for a prositute' + iif(PCloStyle = ...
  if (((s as any).locArgs?.[1] ?? 0) === 'St. Petersburg') {
    if (((s as any).nroad ?? 0) > 10) {
      scene.actions([
        { label: 'Ask the driver to take you to Gadukino', handler: (st: GameState) => {
    // TODO-QSP: gt 'road', 'autostop_money', 1, picrand
  } },
      ]);
    }
    scene.actions([
      { label: 'Ask the driver to take you to St. Petersburg', handler: (st: GameState) => {
    // TODO-QSP: gt 'road', 'autostop_money', 1, picrand
  } },
    ]);
  } else {
    if (((s as any).nroad ?? 0) < 10) {
      scene.actions([
        { label: 'Ask the driver to take you to Gadukino', handler: (st: GameState) => {
    // TODO-QSP: gt 'road', 'autostop_money', 1, picrand
  } },
      ]);
    }
    scene.actions([
      { label: 'Ask the driver to take you to Pavlovsk', handler: (st: GameState) => {
    // TODO-QSP: gt 'road', 'autostop_money', 1, picrand
  } },
    ]);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'drive_sex1':
      enterDriveSex1(s, scene);
      break;
    case 'drive_sex2':
      enterDriveSex2(s, scene);
      break;
    case 'autostop_drive':
      enterAutostopDrive(s, scene);
      break;
    case 'autostop_money':
      enterAutostopMoney(s, scene);
      break;
    case 'autostop_d':
      enterAutostopD(s, scene);
      break;
    case 'mistake_check':
      enterMistakeCheck(s, scene);
      break;
    case 'autostop_mistake':
      enterAutostopMistake(s, scene);
      break;
    default:
      enterDriveSex1(s, scene);
      break;
  }
}

export const road: LocationDef = {
  name: 'road',
  title: '<center><h2>Main road between St. Petersburg and Pavlovsk</h',
  region: 'other',
  locationType: 'event_outdoors',
  description: ['When you get in the car, you immediately reach for his pants and take out his semi-erect cock. That\'s what you promised him after all. You feel it slowly hardening between your fingers as the man drives off.'],
  enter: enter,
};
