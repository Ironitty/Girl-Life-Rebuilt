import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterDriveSex1(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'event_outdoors';
  qspCall(s, 'npcgeneratec', '', 0, 'truck driver', (Math.floor(Math.random() * 9) + 14));
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
    (s as any).road_text_sex = 'a normal size';
  }
  if (((s as any).dick ?? 0) >= 16  &&  ((s as any).dick ?? 0) < 18) {
    (s as any).road_text_sex = 'a bit larger than average';
  }
  if (((s as any).dick ?? 0) >= 18  &&  ((s as any).dick ?? 0) < 20) {
    (s as any).road_text_sex = 'quite large';
  }
  if (((s as any).dick ?? 0) >= 20) {
    (s as any).road_text_sex = 'huge';
  }
  // TODO-QSP: dynamic text: You gently massage his cock between your fingers while the man gets comfortable....
  scene.text(`You gently massage his cock between your fingers while the man gets comfortable. It's ${((s as any).road_text_sex || '')}, roughly ${((s as any).dick || '')} centimeters long and quite girthy. You manage to massage him to a full erection in no time at all, and lower your head to take it between your lips.`);
  scene.text('As you lick the tip of his cock with your tongue and begin to suck him off, you have to admit: this is kinda hot! The man is well groomed and has a pleasant masculine smell to him.');
  scene.text('You eagerly bob your head up and down while he drives, totally forgetting about your earlier doubts, and do your best to get him off.');
  scene.text('With success: in no time at all, the man groans, and his cock erupts inside your mouth, shooting gobs of his hot sperm onto your tongue while you keep your lips closed to not make a mess.');
  scene.text('Realizing you can\'t spit it out anywhere, you have no option but to swallow his load while he keeps driving.');
  qspCall(s, 'arousal', 'hj', 15, 'prostitution');
  qspCall(s, 'arousal', 'bj', 15, 'prostitution');
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0), 0);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['road', 'autostop_drive'] },
  ]);
  scene.build();
}

function enterDriveSex2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).location_type = 'event_outdoors';
  qspCall(s, 'npcgeneratec', '', 0, 'truck driver', (Math.floor(Math.random() * 9) + 14));
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
  qspCall(s, 'stat', '');
  (s as any).autostop_price = 0;
  scene.text('<center><b>Main road between St. Petersburg and Pavlovsk</b></center>');
  scene.img('images/locations/highway/sex/hj (1).mp4');
  scene.text('When you get in the car, you immediately reach for his pants and take out his semi-erect cock. That\'s what you promised him after all. You feel it slowly hardening between your fingers as the man drives off.');
  if (((s as any).dick ?? 0) >= 14  &&  ((s as any).dick ?? 0) < 16) {
    (s as any).road_text_sex = 'a normal size';
  }
  if (((s as any).dick ?? 0) >= 16  &&  ((s as any).dick ?? 0) < 18) {
    (s as any).road_text_sex = 'a bit larger than average';
  }
  if (((s as any).dick ?? 0) >= 18  &&  ((s as any).dick ?? 0) < 20) {
    (s as any).road_text_sex = 'quite large';
  }
  if (((s as any).dick ?? 0) >= 20) {
    (s as any).road_text_sex = 'huge';
  }
  // TODO-QSP: dynamic text: You gently massage his cock between your fingers while the man gets comfortable....
  scene.text(`You gently massage his cock between your fingers while the man gets comfortable. It's ${((s as any).road_text_sex || '')}, roughly ${((s as any).dick || '')} centimeters long and quite girthy. You manage to massage him to a full erection in no time at all, and begin to jerk him off while he drives, rubbing your fingertips over his glans.`);
  scene.text('Even though you feel a bit awkward for having to service this man to get where you need to be, you\'re serious about what you promised him and jerk him off diligently. In no time at all, your soft touch brings him to an orgasm. Unfortunately, his cock is pointing straight at you when it happens, and most of his sperm ends up on your clothes.');
  qspCall(s, 'arousal', 'hj', 15, 'prostitution');
  qspCall(s, 'cum_call', 'clothes', ((s as any).npcID ?? 0), 0);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['road', 'autostop_drive'] },
  ]);
  scene.build();
}

function enterAutostopDrive(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'event_outdoors';
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
  (s as any).picrand = (Math.floor(Math.random() * 2) + 1);
  scene.text('<center><b>Main road between St. Petersburg and Pavlovsk</b></center>');
  if (((s as any).truck_drive ?? 0) === 1) {
    scene.img(`images/locations/highway/truck_drive (${((s as any).picrand || '')}).jpg`);
  } else {
    scene.img(`images/locations/highway/drive (${((s as any).picrand || '')}).jpg`);
  }
  scene.text('You try to start a conversation once or twice, but the man doesn\'t really seem to be interested in chatting while he drives. You give up and just look out the window, while he drives you to your destination.');
  scene.text('Fifteen minutes later, you arrive, and the man pulls over. "Alright, we\'re here. Take care, girl!"');
  if (((s as any).prostitute ?? 0)?.['highway_idea'] === 1) {
    scene.text('You get out of the car, looking after it for a minute or two as it drives away. Someone just solicited you, as if you were a prostitute.');
    if (((s as any).prostitute ?? 0)?.['active'] === 1) {
      scene.text('Which you are, in all honesty, but it still caught you by surprise. However, this means that maybe you could work along the highway. You definitely saw some girls working but mostly near the entrance to Pavlovsk or St. Petersburg.');
      scene.text('You put the idea aside for now, but maybe you should check it at some point.');
      ((s as any).prostitute = (s as any).prostitute ?? {})['highway_idea'] = 2;
      qspCall(s, 'prostitution_functions', 'set_highway_prostitute');
    } else {
      if (((s as any).PCloStyle ?? 0) === 4  ||  ((s as any).PCloProstitute ?? 0) === 1) {
        scene.text('You may dress like one, but that doesn\'t mean you are one. Nonetheless, now you know to watch out, clearly there are prostitutes working along the highway and not just near Pavlovsk or St. Petersburg.');
      } else {
        scene.text('You are still a bit shaken and wonder why did you even ask him to give you a ride, but then shrug it off. He thought you were a hooker. As if…');
      }
      ((s as any).prostitute = (s as any).prostitute ?? {})['highway_idea'] = 2;
      qspCall(s, 'prostitution_functions', 'set_highway_prostitute');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Get out of the car', goto: ['road', '' + ((s as any).nroad ?? 0) + ''] },
  ]);
  scene.build();
}

function enterAutostopMoney(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'event_outdoors';
  qspCall(s, 'stat', '');
  (s as any).autostop_price = (Math.floor(Math.random() * 4) + 3);
  (s as any).textrand = (Math.floor(Math.random() * 3) + 1);
  if (((s as any).textrand ?? 0) === 1) {
    (s as any).road_textrand4 = 'I\'ll take you there for ' + qspFunc(s, 'money', 'string_price', ((s as any).autostop_price ?? 0)*100) + '.';
  }
  if (((s as any).textrand ?? 0) === 2) {
    (s as any).road_textrand4 = '' + qspFunc(s, 'money', 'string_price', ((s as any).autostop_price ?? 0)*100) + '. Take it or leave it.';
  }
  if (((s as any).textrand ?? 0) === 3) {
    (s as any).road_textrand4 = '' + qspFunc(s, 'money', 'string_price', ((s as any).autostop_price ?? 0)*100) + '.';
  }
  scene.text('<center><b>Main road between St. Petersburg and Pavlovsk</b></center>');
  if (Number((s as any).locArgs?.[1] ?? 0) === 0) {
    if (((s as any).truck_drive ?? 0) === 1) {
      scene.img(`images/locations/highway/truck_guy (${((s as any).locArgs?.[2] ?? '')}).jpg`);
    } else {
      if (((s as any).bandit_drive ?? 0) === 1) {
        scene.img('images/locations/highway/guy (1).jpg');
      } else {
        scene.img(`images/locations/highway/guy (${((s as any).locArgs?.[2] ?? '')}).jpg`);
      }
    }
    // TODO-QSP: dynamic text: You approach the driver and say, "Hello, sir! I need a ride to <<$road_textrand0...
    scene.text(`You approach the driver and say, "Hello, sir! I need a ride to ${((s as any).road_textrand0 || '')}, can you help me?"`);
    scene.text('The driver gives you another appraising look.');
  } else {
    scene.img(`images/locations/highway/guy (${((s as any).locArgs?.[2] ?? '')}).jpg`);
    // TODO-QSP: dynamic text: You take a small step back, "I think, there is a mistake, sir, I''m just trying ...
    scene.text(`You take a small step back, "I think, there is a mistake, sir, I'm just trying to get to ${((s as any).road_textrand0 || '')}, can you help me?`);
    scene.text('The driver gives you another appraising look.');
  }
  if ((Math.floor(Math.random() * 1201) + 0) <= ((s as any).pcs_apprnc ?? 0)) {
    scene.text('"I can take you there for free, but only if you do something for me in return," the guy smiles.');
    scene.text('"Uhh… like what?" you ask him, even though you\'re pretty sure you know where this is going.');
    scene.text('The man laughs and shifts a bit in his seat. He says, "You\'re a grown-up girl with a nice body! Surely you can think of something?"');
    scene.actions([
      { label: 'Offer a blowjob', handler: (st: GameState) => {
    ((st as any).drive_sex = (st as any).drive_sex ?? {})[1] = 1;
    scene.text('You bite your lip for a second, quickly going through your options. Then you say, "I really do need this ride, sir! Would a blowjob be okay?"');
    scene.text('The guy grins greedily and says, "Excellent, I knew we would find a way to help each other out! Get in."');
    scene.actions([
      { label: 'Get in the car', goto: ['road', 'drive_sex1'] },
    ]);
  } },
      { label: 'Offer a handjob', handler: (st: GameState) => {
    ((st as any).drive_sex = (st as any).drive_sex ?? {})[2] = 1;
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
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  } else {
    // TODO-QSP: dynamic text: He ponders for a second and then says, "<<$road_textrand4>>"
    scene.text(`He ponders for a second and then says, "${((s as any).road_textrand4 || '')}"`);
    scene.actions([
      { label: 'Agree to pay him', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((st as any).autostop_price ?? 0) * 100, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspGoto(st, 'road', 'autostop_drive');
    }
  } },
      { label: 'Decline his offer', handler: (st: GameState) => {
    scene.text('"I\'m sorry, sir. I can\'t afford that," you apologize and step away from the car. The man shrugs and drives off.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      { label: 'Ask for a lower price', handler: (st: GameState) => {
    (st as any).textrand = (Math.floor(Math.random() * 3) + 1);
    if (((st as any).textrand ?? 0) === 1) {
      (st as any).road_textrand5 = 'Please, sir! I\'m nearly broke… would you please do a girl a favor? I\'d be so grateful!';
    }
    if (((st as any).textrand ?? 0) === 2) {
      (st as any).road_textrand5 = 'Maybe we can work something out?';
    }
    if (((st as any).textrand ?? 0) === 3) {
      (st as any).road_textrand5 = 'Oh no, I don\'t have that much! Could you lower your price? Maybe a bit, just for me?';
    }
    // TODO-QSP: dynamic text: You twirl your hair between your fingers and give the man a cute look, hoping he...
    scene.text(`You twirl your hair between your fingers and give the man a cute look, hoping he will have pity on you and lower the price. "${((st as any).road_textrand5 || '')}" you ask him sweetly.`);
    scene.text('The man seems a bit reluctant and looks at you once more.');
    if ((Math.floor(Math.random() * 401) + 0) <= ((st as any).pcs_apprnc ?? 0)) {
      scene.text('"I can take you there for free, but only if you do something for me in return", the guy smiles.');
      scene.text('"Uhh… like what?" you ask him, even though you\'re pretty sure you know where this is going.');
      scene.text('The man laughs and shifts a bit in his seat. He says, "You\'re a grown-up girl with a nice body! Surely you can think of something?"');
      scene.actions([
        { label: 'Offer a blowjob', handler: (st: GameState) => {
    ((st as any).drive_sex = (st as any).drive_sex ?? {})[1] = 1;
    scene.text('You bite your lip for a second, quickly going through your options. Then you say, "I really do need this ride, sir! Would a blowjob be okay?"');
    scene.text('The guy grins greedily and says, "Excellent, I knew we would find a way to help each other out! Get in."');
    scene.actions([
      { label: 'Get in the car', goto: ['road', 'drive_sex1'] },
    ]);
  } },
        { label: 'Offer a handjob', handler: (st: GameState) => {
    ((st as any).drive_sex = (st as any).drive_sex ?? {})[2] = 1;
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
      (st as any).ivrand = (Math.floor(Math.random() * 2) + 1);
      (st as any).autostop_price = ((st as any).autostop_price ?? 0) - (((st as any).ivrand ?? 0));
      // TODO-QSP: dynamic text: The man sighs exasperatedly, but yields, "Okay, fine. I''ll make it <<$func(''mo...
      scene.text(`The man sighs exasperatedly, but yields, "Okay, fine. I'll make it ${qspFunc(s, 'money', 'string_price', ((st as any).ivrand ?? '')*100, 1)} less, because you seem like a nice girl and I want to help you out. I'll take you there for ${qspFunc(s, 'money', 'string_price', ((st as any).autostop_price ?? '')*100, 1)}, but I can't go any lower than that!"`);
      scene.actions([
        { label: 'Agree to pay him', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((st as any).autostop_price ?? 0)*100, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspGoto(st, 'road', 'autostop_drive');
    }
  } },
        { label: 'Decline his offer', handler: (st: GameState) => {
    scene.text('"I\'m sorry, sir. I still can\'t afford that," you apologize and step away from the car. The man shrugs and drives off.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
        { label: 'Offer him a blowjob instead', handler: (st: GameState) => {
    ((st as any).drive_sex = (st as any).drive_sex ?? {})[1] = 1;
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
  // TODO-QSP: end
  scene.build();
}

function enterAutostopD(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).truck_drive = 0;
  (s as any).bandit_drive = 0;
  ((s as any).drive_sex = (s as any).drive_sex ?? {})[1] = 0;
  ((s as any).drive_sex = (s as any).drive_sex ?? {})[2] = 0;
  (s as any).textrand = (Math.floor(Math.random() * 5) + 1);
  if (((s as any).textrand ?? 0) === 1) {
    (s as any).road_textrand1 = 'Hey there, darling! Where are you going?';
  }
  if (((s as any).textrand ?? 0) === 2) {
    (s as any).road_textrand1 = 'What\'s a gorgeous girl like you doing all alone on a road like this?';
  }
  if (((s as any).textrand ?? 0) === 3) {
    (s as any).road_textrand1 = 'Hey girl, need a ride?';
  }
  if (((s as any).textrand ?? 0) === 4) {
    (s as any).road_textrand1 = 'Hey beauty, going somewhere?';
  }
  if (((s as any).textrand ?? 0) === 5) {
    (s as any).road_textrand1 = 'Darling, you shouldn\'t be out here all alone! Do you need a ride?';
  }
  (s as any).textrand = (Math.floor(Math.random() * 5) + 1);
  if (((s as any).textrand ?? 0) === 1) {
    (s as any).road_textrand2 = 'perfectly clean and shiny';
  }
  if (((s as any).textrand ?? 0) === 2) {
    (s as any).road_textrand2 = 'dirty';
  }
  if (((s as any).textrand ?? 0) === 3) {
    (s as any).road_textrand2 = 'dusty';
  }
  if (((s as any).textrand ?? 0) === 4) {
    (s as any).road_textrand2 = 'slightly dusty';
  }
  if (((s as any).textrand ?? 0) === 5) {
    (s as any).road_textrand2 = 'very dirty';
  }
  (s as any).textrand = (Math.floor(Math.random() * 5) + 1);
  if (((s as any).textrand ?? 0) === 1) {
    (s as any).road_textrand3 = 'black';
  }
  if (((s as any).textrand ?? 0) === 2) {
    (s as any).road_textrand3 = 'white';
  }
  if (((s as any).textrand ?? 0) === 3) {
    (s as any).road_textrand3 = 'red';
  }
  if (((s as any).textrand ?? 0) === 4) {
    (s as any).road_textrand3 = 'blue';
  }
  if (((s as any).textrand ?? 0) === 5) {
    (s as any).road_textrand3 = 'grey';
  }
  (s as any).ivrand = (Math.floor(Math.random() * 2) + 1);
  scene.text('<center><b>Main road between St. Petersburg and Pavlovsk</b></center>');
  if (((s as any).ivrand ?? 0) === 1) {
    (s as any).ivrand = (Math.floor(Math.random() * 4) + 1);
    if (((s as any).ivrand ?? 0) > 1) {
      (s as any).picrand = (Math.floor(Math.random() * 3) + 2);
      (s as any).bandit_drive = 1;
      scene.img(`images/locations/highway/guy (${((s as any).picrand || '')}).jpg`);
      // TODO-QSP: dynamic text: After a few minutes of you trying to get someone to pull over, a <<$road_textran...
      scene.text(`After a few minutes of you trying to get someone to pull over, a ${((s as any).road_textrand3 || '')}, ${((s as any).road_textrand2 || '')} car stops near you. The driver rolls down his window and looks at you for a second, probably making sure you wouldn't ruin his seats with dirty clothes or something.`);
      if (((s as any).pcs_apprnc ?? 0) < 60) {
        scene.text('Then he shrugs and says, "Where do you need to go, lady?"');
      }
      if (((s as any).pcs_apprnc ?? 0) >= 60) {
        // TODO-QSP: dynamic text: Then he gives you a friendly smile and says, "<<$road_textrand1>>"
        scene.text(`Then he gives you a friendly smile and says, "${((s as any).road_textrand1 || '')}"`);
      }
    } else {
      scene.img('images/locations/highway/guy (1).jpg');
      scene.text('After a few minutes of you trying to get someone to pull over, a black car with tinted windows stops near you. Two guys wearing leather jackets are clearly appraising your body.');
      scene.text('One says to the other, "Nice, we clearly drove to the right place!"');
    }
  } else {
    if (((s as any).ivrand ?? 0) === 2) {
      (s as any).picrand = (Math.floor(Math.random() * 3) + 1);
      (s as any).truck_drive = 1;
      scene.img(`images/locations/highway/truck_guy (${((s as any).picrand || '')}).jpg`);
      // TODO-QSP: dynamic text: After a few minutes of you trying to get someone to pull over, a huge <<$road_te...
      scene.text(`After a few minutes of you trying to get someone to pull over, a huge ${((s as any).road_textrand3 || '')}, ${((s as any).road_textrand2 || '')} truck stops near you. The truck driver looks at you intently for a second, probably making sure you wouldn't ruin his seats with dirty clothes or something.`);
      if (((s as any).pcs_apprnc ?? 0) < 60) {
        scene.text('Then he shrugs and says, "Where do you need to go, lady?"');
      }
      if (((s as any).pcs_apprnc ?? 0) >= 60) {
        // TODO-QSP: dynamic text: Then he gives you a friendly smile and says, "<<$road_textrand1>>"
        scene.text(`Then he gives you a friendly smile and says, "${((s as any).road_textrand1 || '')}"`);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMistakeCheck(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'prostitution_functions', 'random_approach_chance') >= (Math.floor(Math.random() * 100) + 1)) {
    (s as any).result = 1;
  }
  // TODO-QSP: end
  scene.build();
}

function enterAutostopMistake(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).truck_drive = 0;
  (s as any).bandit_drive = 0;
  if ((Math.floor(Math.random() * 4) + 1) === 1) {
    (s as any).bandit_drive = 1;
  }
  (s as any).textrand = (Math.floor(Math.random() * 5) + 1);
  if (((s as any).textrand ?? 0) === 1) {
    (s as any).road_textrand1 = 'perfectly clean and shiny';
  }
  if (((s as any).textrand ?? 0) === 2) {
    (s as any).road_textrand1 = 'dirty';
  }
  if (((s as any).textrand ?? 0) === 3) {
    (s as any).road_textrand1 = 'dusty';
  }
  if (((s as any).textrand ?? 0) === 4) {
    (s as any).road_textrand1 = 'slightly dusty';
  }
  if (((s as any).textrand ?? 0) === 5) {
    (s as any).road_textrand1 = 'very dirty';
  }
  (s as any).textrand = (Math.floor(Math.random() * 5) + 1);
  if (((s as any).textrand ?? 0) === 1) {
    (s as any).road_textrand2 = 'black';
  }
  if (((s as any).textrand ?? 0) === 2) {
    (s as any).road_textrand2 = 'white';
  }
  if (((s as any).textrand ?? 0) === 3) {
    (s as any).road_textrand2 = 'red';
  }
  if (((s as any).textrand ?? 0) === 4) {
    (s as any).road_textrand2 = 'blue';
  }
  if (((s as any).textrand ?? 0) === 5) {
    (s as any).road_textrand2 = 'grey';
  }
  (s as any).textrand = (Math.floor(Math.random() * 5) + 1);
  (s as any).actrand = (Math.floor(Math.random() * 6) + 1);
  if (((s as any).actrand ?? 0) === 1) {
    (s as any).act_text = 'how much for a blowjob?"';
  }
  if (((s as any).actrand ?? 0) === 2) {
    (s as any).act_text = 'what do you charge for a blowjob?"';
  }
  if (((s as any).actrand ?? 0) === 3) {
    (s as any).act_text = 'you give me head, I give you some money, fair deal."';
  }
  if (((s as any).actrand ?? 0) === 4) {
    (s as any).act_text = 'how much for spreading your legs?"';
  }
  if (((s as any).actrand ?? 0) === 5) {
    (s as any).act_text = 'what do you charge for a ride?"';
  }
  if (((s as any).actrand ?? 0) === 6) {
    (s as any).act_text = 'how much for anal?"';
  }
  if (((s as any).textrand ?? 0) === 1) {
    (s as any).road_textrand3 = '"Hey there, darling! What is your price? I really need to relax, ' + ((s as any).act_text ?? 0) + '';
  }
  if (((s as any).textrand ?? 0) === 2) {
    (s as any).road_textrand3 = '"Hey gorgeous, I was just looking for you. My balls are really full, ' + ((s as any).act_text ?? 0) + '';
  }
  if (((s as any).textrand ?? 0) === 3) {
    (s as any).road_textrand3 = '"Hey girl, just what I need, ' + ((s as any).act_text ?? 0) + '';
  }
  if (((s as any).textrand ?? 0) === 4) {
    (s as any).road_textrand3 = '"Hey beauty, just what I need, ' + ((s as any).act_text ?? 0) + '';
  }
  if (((s as any).textrand ?? 0) === 5) {
    (s as any).road_textrand3 = '"Darling, where are your girlfriends, being busy?" he glances over you again "Don\'t be sad, I\'ll make you busy too, ' + ((s as any).act_text ?? 0) + '';
  }
  if (((s as any).prostitute ?? 0)?.['road'] === 0) {
    ((s as any).prostitute = (s as any).prostitute ?? {})['highway_idea'] = 1;
  }
  scene.text('<center><b>Main road between St. Petersburg and Pavlovsk</b></center>');
  (s as any).picrand = (Math.floor(Math.random() * 3) + 2);
  scene.img(`images/locations/highway/guy (${((s as any).picrand || '')}).jpg`);
  // TODO-QSP: dynamic text: After a few minutes of you trying to get someone to pull over, a <<$road_textran...
  scene.text(`After a few minutes of you trying to get someone to pull over, a ${((s as any).road_textrand1 || '')}, ${((s as any).road_textrand2 || '')} car stops near you. The driver rolls down his window and leans closer, his eyes roaming over your body.`);
  // TODO-QSP: dynamic text: <<$road_textrand3>>" - rubs his fingers together with a wide smile as he waits f...
  scene.text(`${((s as any).road_textrand3 || '')}" - rubs his fingers together with a wide smile as he waits for your answer.`);
  // TODO-QSP: 'You blink at the question, then you realize that he mistook you for a prositute' + iif(PCloStyle = ...
  if (Number((s as any).locArgs?.[1] ?? 0) === 'St. Petersburg') {
    if (((s as any).nroad ?? 0) > 10) {
      scene.actions([
        { label: 'Ask the driver to take you to Gadukino', handler: (st: GameState) => {
    (st as any).road_textrand0 = 'Gadukino';
    // TODO-QSP: gt 'road', 'autostop_money', 1, picrand
  } },
      ]);
    }
    scene.actions([
      { label: 'Ask the driver to take you to St. Petersburg', handler: (st: GameState) => {
    (st as any).road_textrand0 = 'St. Petersburg';
    // TODO-QSP: gt 'road', 'autostop_money', 1, picrand
  } },
    ]);
  } else {
    if (((s as any).nroad ?? 0) < 10) {
      scene.actions([
        { label: 'Ask the driver to take you to Gadukino', handler: (st: GameState) => {
    (st as any).road_textrand0 = 'Gadukino';
    // TODO-QSP: gt 'road', 'autostop_money', 1, picrand
  } },
      ]);
    }
    scene.actions([
      { label: 'Ask the driver to take you to Pavlovsk', handler: (st: GameState) => {
    (st as any).road_textrand0 = 'Pavlovsk';
    // TODO-QSP: gt 'road', 'autostop_money', 1, picrand
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'public_outdoors';
  if (Number((s as any).locArgs?.[0] ?? 0) === ''  ||  !isNaN(Number((s as any).locArgs?.[0] ?? 0)) && Number((s as any).locArgs?.[0] ?? 0) !== '') {
    if (Number((s as any).locArgs?.[0] ?? 0) !== ''  &&  !isNaN(Number((s as any).locArgs?.[0] ?? 0)) && Number((s as any).locArgs?.[0] ?? 0) !== '') {
      (s as any).nroad = parseFloat(((s as any).locArgs?.[0] ?? 0));
    } else {
      // TODO-QSP: $ARGS[0] = '<<nroad>>'
    }
    if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    }
    qspCall(s, 'core_library', 'setloc', 'road', ((s as any).locArgs?.[0] ?? 0));
    (s as any).region = 'other';
    qspCall(s, 'stat', '');
    scene.text('<center><h2>Main road between St. Petersburg and Pavlovsk</h2></center>');
    if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
      scene.img('images/locations/highway/roadwinter.jpg');
    } else {
      scene.img('images/locations/highway/road.jpg');
    }
    // TODO-QSP: dynamic text: <center><<nroad>> km</center>
    scene.text(`<center>${((s as any).nroad || '')} km</center>`);
    scene.text('Calling it a highway would be too much credit, but this road is the main way to get from St. Petersburg to the town of Pavlovsk, 20km away.');
    scene.text('Smaller villages named Gadukino and Pushkin can be found along the way. Cars are driving by you at a high speed.');
    if (qspFunc(s, 'car_funcs', 'is_here')  &&  ((s as any).nroad ?? 0) !== 10) {
      // TODO-QSP: 'You parked <a href="exec:gs ''carF'', ''start''">your <<$car[''name'']>></a>'+iif(prostitute['road'...
    }
    if ((!((s as any).nroad ?? 0))) {
      qspGoto(s, 'city_industrial', '');
      scene.actions([
        { label: 'Walk to the City Industrial Region (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  } },
      ]);
    }
    if (((s as any).nroad ?? 0) === 1) {
      scene.actions([
        { label: 'Walk to the City Suburbs (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['city_suburbs', 'start'] },
      ]);
    }
    if (((s as any).nroad ?? 0) === 16) {
      qspGoto(s, 'obekt', '');
      scene.actions([
        { label: 'Check out the construction site (1:00)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
  } },
      ]);
    }
    if (((s as any).nroad ?? 0) === 19) {
      scene.actions([
        { label: 'Walk to Pushkin (0:05)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pushkin', ''] },
      ]);
    }
    if (((s as any).nroad ?? 0) === 20) {
      scene.actions([
        { label: 'Walk to Pavlovsk train station (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['pav_train_hall', ''] },
        { label: 'Walk to Pavlovsk Commercial area (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['pav_commercial', ''] },
        { label: 'Walk to Pavlovsk Industrial region (0:25)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 25;
  }, goto: ['pav_industrial', ''] },
        { label: 'Walk to Pavlovsk Market (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['pav_market', ''] },
      ]);
    }
    if (((s as any).nroad ?? 0) < 20) {
      scene.actions([
        { label: 'Walk towards Pavlovsk (0:20)', handler: (st: GameState) => {
    if (qspFunc(s, 'road', 'mistake_check')) {
      qspGoto(st, 'road', 'autostop_mistake', 'Pavlovsk');
    } else {
      (st as any).minut = ((st as any).minut ?? 0) + 20;
      qspGoto(st, 'road', '' + ((st as any).nroad ?? 0) + 1 + '');
    }
  } },
      ]);
    }
    if (((s as any).nroad ?? 0) > 0) {
      scene.actions([
        { label: 'Walk towards St. Petersburg (0:20)', handler: (st: GameState) => {
    if (qspFunc(s, 'road', 'mistake_check')) {
      qspGoto(st, 'road', 'autostop_mistake', 'St. Petersburg');
    } else {
      (st as any).minut = ((st as any).minut ?? 0) + 20;
      qspGoto(st, 'road', '' + ((st as any).nroad ?? 0) - 1 + '');
    }
  } },
      ]);
    }
    if (((s as any).nroad ?? 0) > 0  &&  ((s as any).nroad ?? 0) < 20) {
      scene.actions([
        { label: 'Try hitchhiking towards Pavlovsk', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    (st as any).gorand = (Math.floor(Math.random() * 100) + 1);
    (st as any).picrand = (Math.floor(Math.random() * 3) + 1);
    if (qspFunc(s, 'road', 'mistake_check')) {
      qspGoto(st, 'road', 'autostop_mistake', 'Pavlovsk');
    } else {
      if (((st as any).gorand ?? 0) <= 60) {
        scene.text('<center><b>Main road between St. Petersburg and Pavlovsk</b></center>');
        scene.img(`images/locations/highway/autostop (${((st as any).picrand || '')}).jpg`);
        scene.text('You try to catch the attention of people driving towards Pavlovsk, but everyone just rushes by, ignoring you completely.');
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
        ]);
      } else {
        if (((st as any).gorand ?? 0) > 60) {
          { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAutostopD(s, scene); (st as any).locArgs = __savedLocArgs; }
          if (((st as any).nroad ?? 0) < 10) {
            scene.actions([
              { label: 'Ask the driver to take you to Gadukino', handler: (st: GameState) => {
    (st as any).road_textrand0 = 'Gadukino';
    // TODO-QSP: gt 'road', 'autostop_money', 0, picrand
  } },
            ]);
          }
          scene.actions([
            { label: 'Ask the driver to take you to Pavlovsk', handler: (st: GameState) => {
    (st as any).road_textrand0 = 'Pavlovsk';
    // TODO-QSP: gt 'road', 'autostop_money', 0, picrand
  } },
          ]);
        }
      }
    }
  } },
        { label: 'Try hitchhiking towards St. Petersburg', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    (st as any).gorand = (Math.floor(Math.random() * 100) + 1);
    (st as any).picrand = (Math.floor(Math.random() * 3) + 1);
    if (qspFunc(s, 'road', 'mistake_check')) {
      qspGoto(st, 'road', 'autostop_mistake', 'St. Petersburg');
    } else {
      if (((st as any).gorand ?? 0) <= 60) {
        scene.text('<center><b>Main road between St. Petersburg and Pavlovsk</b></center>');
        scene.img(`images/locations/highway/autostop (${((st as any).picrand || '')}).jpg`);
        scene.text('You try to catch the attention of people driving towards St. Petersburg, but everyone just rushes by, ignoring you completely.');
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
        ]);
      } else {
        if (((st as any).gorand ?? 0) > 60) {
          { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAutostopD(s, scene); (st as any).locArgs = __savedLocArgs; }
          if (((st as any).nroad ?? 0) > 10) {
            scene.actions([
              { label: 'Ask the driver to take you to Gadukino', handler: (st: GameState) => {
    (st as any).road_textrand0 = 'Gadukino';
    // TODO-QSP: gt 'road', 'autostop_money', 0, picrand
  } },
            ]);
          }
          scene.actions([
            { label: 'Ask the driver to take you to St. Petersburg', handler: (st: GameState) => {
    (st as any).road_textrand0 = 'St. Petersburg';
    // TODO-QSP: gt 'road', 'autostop_money', 0, picrand
  } },
          ]);
        }
      }
    }
  } },
      ]);
    }
    if ((!((s as any).nroad ?? 0))) {
      scene.text('You\'re on the outskirts of St. Petersburg. You see a number of crudely made huts near the trees. A bunch of homeless people must have sought shelter here.');
      // TODO-QSP: dynamic text: A <a href="exec:minut += 5 & gt ''furi''">lorry</a> is parked next to the road. ...
      scene.text('A <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027furi/u0027, /u0027/u0027); return false;">lorry</a> is parked next to the road. The driver is currently taking a break and is having a cigarette. He could probably bring you to Gadukino or Pavlovsk, for a price…');
    } else {
      if (((s as any).nroad ?? 0) === 1) {
        // TODO-QSP: dynamic text: You''re not very far from St. Petersburg. You see a bunch of <a href="exec:minut...
        scene.text('You\'re not very far from St. Petersburg. You see a bunch of <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.15; return s; }); window.__gameStore.getState().doGoto(/u0027city_suburbs/u0027, /u0027start/u0027); return false;">luxury houses</a> not far from the road. That settlement looks like it\'s very expensive to live in.');
      } else {
        if (((s as any).nroad ?? 0) === 2) {
          scene.text('');
        } else {
          if (((s as any).nroad ?? 0) === 3) {
            // TODO-QSP: dynamic text: You see a sign pointing towards a <a href="exec:minut += 15 & gt ''graveyard''">...
            scene.text('You see a sign pointing towards a <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.15; return s; }); window.__gameStore.getState().doGoto(/u0027graveyard/u0027, /u0027/u0027); return false;">cemetery</a>, hidden between lots of trees. You think it\'d be a 15 minute walk from here.');
            scene.actions([
              { label: 'Walk to the bus station (0:01)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['bus', 'graveyard'] },
            ]);
          } else {
            if (((s as any).nroad ?? 0) === 4) {
              scene.text('');
            } else {
              if (((s as any).nroad ?? 0) === 5) {
                // TODO-QSP: dynamic text: You see a <a href="exec:gt ''train'', ''communal''">railway platform</a> not far...
                scene.text('You see a <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027train/u0027, /u0027communal/u0027); return false;">railway platform</a> not far from the road. A bit further away, someone built <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.15; return s; }); window.__gameStore.getState().doGoto(/u0027dachi/u0027, /u0027/u0027); return false;">a bunch of cottages</a>. Some of them are for sale. This must be a nice place to stay at in the summer!');
              } else {
                if (((s as any).nroad ?? 0) === 6) {
                  scene.text('');
                } else {
                  if (((s as any).nroad ?? 0) === 7) {
                    scene.text('');
                  } else {
                    if (((s as any).nroad ?? 0) === 8) {
                      scene.text('');
                    } else {
                      if (((s as any).nroad ?? 0) === 9) {
                        scene.text('');
                      } else {
                        if (((s as any).nroad ?? 0) === 10) {
                          (s as any).display_bb = 1;
                          qspCall(s, 'stat', '');
                          // TODO-QSP: dynamic text: You see a <a href="exec:gt ''train'', ''gadukino''">railway platform</a> not far...
                          scene.text('You see a <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027train/u0027, /u0027gadukino/u0027); return false;">railway platform</a> not far from the road. In the same direction, a dirt road leads to the village of <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.15; return s; }); window.__gameStore.getState().doGoto(/u0027gadukino/u0027, /u0027/u0027); return false;">Gadukino</a>.');
                          // TODO-QSP: dynamic text: A <a href="exec:minut += 5 & gt ''furi''">lorry</a> is parked next to the road. ...
                          scene.text('A <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027furi/u0027, /u0027/u0027); return false;">lorry</a> is parked next to the road. The driver is currently taking a break and is having a cigarette. He could probably bring you to Pavlovsk or St. Petersburg, for a price…');
                          if (((s as any).MiraVars ?? 0)?.['QW'] > 15) {
                            scene.text('Mira <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027gad_prostitutes/u0027, /u0027start/u0027); return false;">prostitutes</a> herself around here.');
                          }
                          if (qspFunc(s, 'car_funcs', 'is_here')) {
                            // TODO-QSP: dynamic text: You parked <a href="exec:gs ''carF'', ''start''">your <<$car[''name'']>></a> in ...
                            scene.text(`You parked <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027carF/u0027, /u0027start/u0027); return false;">your ${((s as any).car ?? 0)?.['name'] ?? ''}</a> in a quieter spot on the side road to Gadukin.`);
                          }
                          if (((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) < 23  &&  ((s as any).prostitute ?? 0)?.['gadukino'] === 1) {
                            qspCall(s, 'prostitution_functions', 'work_clothes');
                            if (((s as any).prostitute ?? 0)?.['work_clothes']) {
                              if (qspFunc(s, 'car_funcs', 'is_here')  &&  ((s as any).prostitute ?? 0)?.['changed_for_work']) {
                                scene.actions([
                                  { label: 'Change into your regular clothes', goto: ['prostitution_functions', 'change_back', 'car'] },
                                ]);
                              } else {
                                if (((s as any).prostitute ?? 0)?.['changed_for_work']) {
                                  scene.actions([
                                    { label: 'Change into your regular clothes', goto: ['prostitution_functions', 'change_back', 'road_side'] },
                                  ]);
                                }
                              }
                              scene.actions([
                                { label: 'You can work as a prostitute here', goto: ['gad_prostitutes', 'start'] },
                              ]);
                            }
                            if (((s as any).prostitute ?? 0)?.['work_clothes'] === 0  &&  ((s as any).prostitute ?? 0)?.['outfit_is_set']) {
                              if (qspFunc(s, 'car_funcs', 'is_here')) {
                                scene.actions([
                                  { label: 'Change to work as a prostitute', goto: ['prostitution_functions', 'change_to_work', 'car'] },
                                ]);
                              } else {
                                scene.actions([
                                  { label: 'Change to work as a prostitute', goto: ['prostitution_functions', 'change_to_work', 'road_side'] },
                                ]);
                              }
                            }
                          } else {
                            if (((s as any).prostitute ?? 0)?.['road'] === 1  &&  ((((s as any).prostitute ?? 0)?.['wl_block'] === 0  &&  ((s as any).prostitute ?? 0)?.['full_block'] === 0)  ||  (((s as any).prostitute ?? 0)?.['wl_block'] === 1  &&  ((s as any).prostitute ?? 0)?.['payment_method'] === 1))) {
                              qspCall(s, 'prostitution_functions', 'work_clothes');
                              if (((s as any).prostitute ?? 0)?.['work_clothes'] === 0  &&  ((s as any).prostitute ?? 0)?.['outfit_is_set']) {
                                if (qspFunc(s, 'car_funcs', 'is_here')) {
                                  (s as any).loc_desc = 'You change into some more appropriate clothing in your car, then walk down the road a little to catch the attention of passing cars.';
                                  scene.actions([
                                    { label: 'Change to work as a prostitute', goto: ['prostitution_functions', 'change_to_work', 'car'] },
                                  ]);
                                } else {
                                  (s as any).loc_desc = 'You change into some more appropriate clothing behind the bushes, then walk down the road a little to catch the attention of passing cars.';
                                  scene.actions([
                                    { label: 'Change to work as a prostitute', goto: ['prostitution_functions', 'change_to_work', 'road_side'] },
                                  ]);
                                }
                              } else {
                                if (((s as any).prostitute ?? 0)?.['work_clothes']) {
                                  if (qspFunc(s, 'car_funcs', 'is_here')  &&  ((s as any).prostitute ?? 0)?.['changed_for_work']) {
                                    scene.actions([
                                      { label: 'Change into your regular clothes', goto: ['prostitution_functions', 'change_back', 'car'] },
                                    ]);
                                  } else {
                                    if (((s as any).prostitute ?? 0)?.['changed_for_work']) {
                                      scene.actions([
                                        { label: 'Change into your regular clothes', goto: ['prostitution_functions', 'change_back', 'road_side'] },
                                      ]);
                                    }
                                  }
                                  scene.actions([
                                    { label: 'Work as a prostitute', goto: ['road_prostitution', 'work'] },
                                  ]);
                                }
                              }
                            }
                          }
                          scene.actions([
                            { label: 'Walk to Gadukino (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['gadukino', ''] },
                            { label: 'Walk to the train platform (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['train', 'gadukino'] },
                          ]);
                        } else {
                          if (((s as any).nroad ?? 0) === 11) {
                            scene.text('');
                          } else {
                            if (((s as any).nroad ?? 0) === 12) {
                              // TODO-QSP: dynamic text: You see a <a href="exec:minut += 15 & gt ''motel''">trucker motel</a> near the r...
                              scene.text('You see a <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.15; return s; }); window.__gameStore.getState().doGoto(/u0027motel/u0027, /u0027/u0027); return false;">trucker motel</a> near the road. You have no business there. You\'re no trucker!');
                            } else {
                              if (((s as any).nroad ?? 0) === 13) {
                                scene.text('');
                              } else {
                                if (((s as any).nroad ?? 0) === 14) {
                                  scene.text('');
                                } else {
                                  if (((s as any).nroad ?? 0) === 15) {
                                    scene.text('');
                                  } else {
                                    if (((s as any).nroad ?? 0) === 16) {
                                      scene.text('All you see is an abandoned building, not too far from the road. From the look of it, the heavy fences around the building will make it difficult for you to get anywhere near it.');
                                      scene.actions([
                                        { label: 'Walk to the bus station (0:05)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['bus', 'construction'] },
                                      ]);
                                    } else {
                                      if (((s as any).nroad ?? 0) === 17) {
                                        scene.text('');
                                      } else {
                                        if (((s as any).nroad ?? 0) === 18) {
                                          scene.text('');
                                        } else {
                                          if (((s as any).nroad ?? 0) === 19) {
                                            // TODO-QSP: dynamic text: You are on the outskirts of the <a href="exec:minut += 5 & gt ''pushkin''">old t...
                                            scene.text('You are on the outskirts of the <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027pushkin/u0027, /u0027/u0027); return false;">old town</a> district of Pavlovsk. About five minutes down a cobblestone road is the old town center. It\'s a fairly popular place for tourists to explore with much of its old architecture still intact.');
                                          } else {
                                            if (((s as any).nroad ?? 0) === 20) {
                                              scene.text('The main road ends at the provincial town of Pavlovsk. You can see the castle in the distance.');
                                              // TODO-QSP: dynamic text: A <a href="exec:minut += 5 & gt ''furi''">lorry</a> is parked next to the road. ...
                                              scene.text('A <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027furi/u0027, /u0027/u0027); return false;">lorry</a> is parked next to the road. The driver is currently taking a break and is having a cigarette. He could probably bring you to Gadukino or St. Petersburg, for a price…');
                                              scene.text('A small road leads to an almost hidden old <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027brothel/u0027, /u0027lobby/u0027); return false;">hotel</a>. Usually tourists use it when passing by or when visiting the old town of Pavlovsk.');
                                              if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) <= 17) {
                                                scene.text('You can see a bunch of trucks around the <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027NikoSlut/u0027, /u0027Diner Exterior/u0027); return false;">Boris diner</a>, which is a diner that is frequently visited by both truckers and bikers.');
                                              } else {
                                                scene.text('You can see a bunch of motorcycles around the <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027NikoSlut/u0027, /u0027Diner Exterior/u0027); return false;">Boris diner</a>, which is a diner that is frequently visited by both truckers and bikers.');
                                              }
                                              if (((s as any).hour ?? 0) === 22  &&  ((s as any).NikoEv ?? 0) < 21) {
                                                // TODO-QSP: dynamic text: You can see <a href="exec:gt ''NikoSlut'', ''Yurik Out''">' + iif($YurikEv['Name...
                                                scene.text('You can see <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027NikoSlut/u0027, /u0027Yurik Out/u0027); return false;">' + ((((s as any).YurikEv ?? 0)?.['Name'] === 'Yurik') ? ('Yurik') : ('a big burly man')) + '</a>, clearly drunk, stumbling along the highway with a beer bottle in his hand.');
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
    if (((s as any).prostitute ?? 0)?.['road'] === 1  &&  ((s as any).nroad ?? 0) !== 10  &&  ((s as any).nroad ?? 0) !== 20  &&  ((((s as any).prostitute ?? 0)?.['wl_block'] === 0  &&  ((s as any).prostitute ?? 0)?.['full_block'] === 0)  ||  (((s as any).prostitute ?? 0)?.['wl_block'] === 1  &&  ((s as any).prostitute ?? 0)?.['payment_method'] === 1))) {
      qspCall(s, 'prostitution_functions', 'work_clothes');
      if (((s as any).prostitute ?? 0)?.['work_clothes'] === 0  &&  ((s as any).prostitute ?? 0)?.['outfit_is_set']) {
        if (qspFunc(s, 'car_funcs', 'is_here')) {
          (s as any).loc_desc = 'You change into some more appropriate clothing in your car, then walk down the road a little to catch the attention of passing cars.';
          scene.actions([
            { label: 'Change to work as a prostitute', goto: ['prostitution_functions', 'change_to_work', 'car'] },
          ]);
        } else {
          (s as any).loc_desc = 'You change into some more appropriate clothing behind the bushes, then walk down the road a little to catch the attention of passing cars.';
          scene.actions([
            { label: 'Change to work as a prostitute', goto: ['prostitution_functions', 'change_to_work', 'road_side'] },
          ]);
        }
      } else {
        if (((s as any).prostitute ?? 0)?.['work_clothes']) {
          if (((s as any).prostitute ?? 0)?.['changed_for_work']) {
            if (qspFunc(s, 'car_funcs', 'is_here')) {
              scene.actions([
                { label: 'Change into your regular clothes', goto: ['prostitution_functions', 'change_back', 'car'] },
              ]);
            } else {
              scene.actions([
                { label: 'Change into your regular clothes', goto: ['prostitution_functions', 'change_back', 'road_side'] },
              ]);
            }
          }
          scene.actions([
            { label: 'Work as a prostitute', goto: ['road_prostitution', 'work'] },
          ]);
        }
      }
    }
  }
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
      enterDefault(s, scene);
      break;
  }
}

export const road: LocationDef = {
  name: 'road',
  title: '<center><h2>Main road between St. Petersburg and Pavlovsk</h',
  region: 'other',
  locationType: 'event_outdoors',
  enter: enter,
};
