import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterWineInvite(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/albinahome/kitchen.jpg');
  scene.text('As the two of you head back inside the house, Albina takes you by the hand and points towards the kitchen.');
  if (((s as any).AlbinaQW ?? 0)?.['wine'] === 0) {
    scene.text('"Hey, wanna break open a bottle of wine with me? Really warms you up after a dip in the pool."');
  } else {
    scene.text('"Hey, wanna drink some wine with me again?"');
  }
  // TODO-QSP: end !}
  scene.actions([
    { label: 'No thanks', handler: (st: GameState) => {
    if (((s as any).AlbinaQW ?? 0)?.['wine_caught'] === 0) {
      scene.text('You shake your head. "No thanks. I\'d rather just shower."');
      // TODO-QSP: dynamic text: "Ugh! You're such a bore, <<$pcs_nickname>>!" she says while rolling her eyes. "...
      scene.text(`"Ugh! You're such a bore, ${((s as any).pcs_nickname ?? 0)}!" she says while rolling her eyes. "Fine, you go shower. <i>I'm</i> getting drunk. Don't bother hanging around if you don't plan on joining me."`);
      scene.text('She pads off into the kitchen, leaving you and a trail of wet footprints behind.');
      scene.actions([
        { label: 'Go and shower', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/dush.mp4');
    scene.text('You wash up in one of the guest showers, scrubbing the chlorine off your skin before drying off and putting your clothes back on.');
    (s as any).mc_inventory['shampoo'] = ((s as any).mc_inventory['shampoo'] ?? 0) + (1);
    qspCall(s, 'din_van', 'showerdin');
    scene.actions([
      { label: 'Head out', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/hallway.jpg');
    scene.text('You head downstairs towards the front door, passing by the kitchen along the way. True to her word, Albina is on the couch, still naked and already red faced pouring what is definitely not her first glass of wine.');
    scene.text('"Bye, Albina!" you call while waving your hand. She picks up the glass and starts chugging with one hand while giving you the finger with the other as you close the door behind you.');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: You shake your head. "After being chewed out by your mom last time for getting b...
      scene.text(`You shake your head. "After being chewed out by your mom last time for getting black out drunk? No thanks. I already get enough from my ${((s as any).npc_nickname ?? 0)?.['A29']} back home."`);
      // TODO-QSP: dynamic text: "Ugh! You're such a pussy, <<$pcs_nickname>>!" she replies while rolling her eye...
      scene.text(`"Ugh! You're such a pussy, ${((s as any).pcs_nickname ?? 0)}!" she replies while rolling her eyes. "Fine, you go shower. <i>I'm</i> getting drunk again."`);
      scene.text('She pads off into the kitchen, leaving you and a trail of wet footprints behind.');
    }
    scene.actions([
      { label: 'Go and shower', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/dush.mp4');
    scene.text('You wash up in one of the guest showers, scrubbing the chlorine off your skin before drying off and putting your clothes back on.');
    (s as any).mc_inventory['shampoo'] = ((s as any).mc_inventory['shampoo'] ?? 0) + (1);
    qspCall(s, 'din_van', 'showerdin');
    scene.actions([
      { label: 'Head out', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/hallway.jpg');
    scene.text('You head downstairs towards the front door, passing by the kitchen along the way. True to her word, Albina is on the couch, still naked and already red faced pouring what is definitely not her first glass of wine.');
    scene.text('"Bye, Albina!" you call while waving your hand. She picks up the glass and starts chugging with one hand while giving you the finger with the other as you close the door behind you.');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  } },
    ]);
  } },
      { label: 'Change your mind', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/kitchen.jpg');
    scene.text('Watching Albina walk away, a twinge of regret flashes through your stomach. After a moment\'s hesitation, you follow after, entering the kitchen right as she\'s pulling a wine bottle out of a cabinet.');
    scene.text('"Well, well…" she says, letting her surprise fade into a smug smirk. "Feeling left out, are we?"');
    scene.text('"Maybe a little…" you admit.');
    scene.text('"Well lucky for you, you came just in time," she replies as she grabs a pair of glasses and bumps the cabinet closed with her ass before making her way over to you and pulling you to the couch.');
    scene.text('You wait awkwardly while she opens the bottle before she sits next to you and hands you a glass.');
    scene.text('"Cheers!" she says with a grin, clinking her glass against yours and downing half the thing in one gulp. You take a more reserved sip, but you feel warmth spread through your chest almost immediately.');
    scene.text('<i>Wow, that <b>is</b> really nice,</i> you think, taking another sip.');
    scene.actions([
      { label: 'Drink', goto: ['albina_wine_event', 'start'] },
    ]);
  } },
    ]);
  } },
    { label: 'Sure', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/albinahome/kitchen.jpg');
    if (((s as any).AlbinaQW ?? 0)?.['wine'] === 0) {
      scene.text('"Sure, that sounds nice. Should I just get dressed and meet you back-"');
      scene.text('"Fuck that," she replies, cutting you off and dragging you to the kitchen. "It\'s better if you drink it right after coming out."');
      scene.text('She puts you down on a couch and saunters over to the wine cabinet, shaking her naked ass along the way, and plucks out two glasses and a bottle. You wait awkwardly while she opens the bottle before she sits down next to you and hands you a glass.');
      scene.text('"Cheers!" she says with a grin, clinking her glass against yours and downing half the thing in one gulp. You take a more reserved sip, but you feel warmth spread through your chest almost immediately.');
      scene.text('<i>Wow, that <b>is</b> really nice,</i> you think, taking another sip.');
    } else {
      scene.text('"Sure," you say with a smile.');
      scene.text('"Great! I\'ll get the bottle."');
      scene.text('You head over to the kitchen with her, sitting down on the couch while she procures the alcohol. A short time later, she places a glass in your hand and clinks hers against it.');
      scene.text('"Cheers!" she grins and you both enjoy your wine together.');
    }
    scene.actions([
      { label: 'Drink', goto: ['albina_wine_event', 'start'] },
    ]);
  } },
    { label: 'I can\'t get drunk right now', handler: (st: GameState) => {
    scene.text('You shake your head. "No thanks, I can\'t get drunk right now. I have things to do."');
  } },
    { label: 'I remember how the last one ended' }, // TODO-QSP: empty action body
  ]);
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 11) + 10);
  qspCall(s, 'drugs', 'alcohol', 'wine', 1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/albina/event/wine_talk.jpg');
  if (((s as any).AlbinaQW ?? 0)?.['wine'] === 0) {
    scene.text('A short while later, you find yourself feeling very warm, fuzzy, and <i>very</i> dizzy, halfway through your second glass. Albina is already sipping from her third glass, head laid on your lap after opening a second bottle.');
    scene.text('The flush in her cheeks and the slur of her voice tells you she\'s totally drunk. And judging by the change in conversation and the wetness between her thighs, it seems she\'s a <i>horny</i> drunk.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>!" Albina shouts, interrupting your thoughts. "I'm fucking tal...
    scene.text(`"${((s as any).pcs_nickname ?? 0)}!" Albina shouts, interrupting your thoughts. "I'm fucking talking to you!"`);
    scene.text('You blink in confusion.');
    scene.actions([
      { label: '"What did you say?"', handler: (st: GameState) => {
    // TODO-QSP: AlbinaQW['wine_start'] = 1
  }, goto: ['albina_wine_event', 'wine_chat1'] },
    ]);
  } else {
    scene.text('You\'re not sure if you expected something else, but a short while later you find yourself drunk on the couch with Albina. Again.');
    scene.actions([
      { label: 'Drunkenly converse with Albina', goto: ['albina_wine_event', 'wine_chat1'] },
    ]);
  }
  (s as any).AlbinaQW['wine'] = ((s as any).AlbinaQW['wine'] ?? 0) + (1);
  scene.build();
}

function enterWineChat1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 2) + 1);
  if (((s as any).AlbinaQW ?? 0)?.['wine_date'] !== ((s as any).daystart ?? 0)) {
    (s as any).AlbinaQW['wine_date'] = ((s as any).daystart ?? 0);
    (s as any).AlbinaQW['wine_limit'] = Math.floor(Math.random() * 5) + 4;
  }
  (s as any).AlbinaQW['wine_convo'] = Math.floor(Math.random() * 8) + 1;
  (s as any).AlbinaQW['wine_count'] = ((s as any).AlbinaQW['wine_count'] ?? 0) + (1);
  if (((s as any).AlbinaQW ?? 0)?.['wine_count'] >= ((s as any).AlbinaQW ?? 0)?.['wine_limit']) {
    qspCall(s, 'albina_wine_event', 'end');
  } else {
    scene.img('images/characters/pavlovsk/school/girl/albina/event/wine_talk.jpg');
    if (((s as any).AlbinaQW ?? 0)?.['wine_convo'] === 1) {
      if (((s as any).AlbinaQW ?? 0)?.['wine_convo_1'] === ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['albina_wine_event', 'wine_chat1'] }]);
      } else {
        (s as any).AlbinaQW['wine_convo_1'] = ((s as any).daystart ?? 0);
      }
      qspCall(s, 'albina_wine_event', 'pussy_taste');
    } else {
      if (((s as any).AlbinaQW ?? 0)?.['wine_convo_2'] === ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['albina_wine_event', 'wine_chat1'] }]);
      } else {
        (s as any).AlbinaQW['wine_convo_2'] = ((s as any).daystart ?? 0);
      }
      qspCall(s, 'albina_wine_event', 'shave_talk');
      if (((s as any).AlbinaQW ?? 0)?.['wine_convo'] === 3) {
        if (((s as any).AlbinaQW ?? 0)?.['wine_convo_3'] === ((s as any).daystart ?? 0)) {
          scene.actions([{ label: 'Continue', goto: ['albina_wine_event', 'wine_chat1'] }]);
        } else {
          (s as any).AlbinaQW['wine_convo_3'] = ((s as any).daystart ?? 0);
        }
        qspCall(s, 'albina_wine_event', 'dominate_albina');
      } else {
        if (((s as any).AlbinaQW ?? 0)?.['wine_convo_4'] === ((s as any).daystart ?? 0)) {
          scene.actions([{ label: 'Continue', goto: ['albina_wine_event', 'wine_chat1'] }]);
        } else {
          (s as any).AlbinaQW['wine_convo_4'] = ((s as any).daystart ?? 0);
        }
        qspCall(s, 'albina_wine_event', 'masturbation_talk');
        if (((s as any).AlbinaQW ?? 0)?.['wine_convo'] === 5) {
          if (((s as any).AlbinaQW ?? 0)?.['wine_convo_5'] === ((s as any).daystart ?? 0)) {
            scene.actions([{ label: 'Continue', goto: ['albina_wine_event', 'wine_chat1'] }]);
          } else {
            (s as any).AlbinaQW['wine_convo_5'] = ((s as any).daystart ?? 0);
          }
          qspCall(s, 'albina_wine_event', 'porn_talk');
        } else {
          if (((s as any).AlbinaQW ?? 0)?.['wine_convo_6'] === ((s as any).daystart ?? 0)) {
            scene.actions([{ label: 'Continue', goto: ['albina_wine_event', 'wine_chat1'] }]);
          } else {
            (s as any).AlbinaQW['wine_convo_6'] = ((s as any).daystart ?? 0);
          }
          qspCall(s, 'albina_wine_event', 'boob_size_talk');
          if (((s as any).AlbinaQW ?? 0)?.['wine_convo'] === 7) {
            if (((s as any).AlbinaQW ?? 0)?.['commando_know'] === 0) {
              scene.actions([{ label: 'Continue', goto: ['albina_wine_event', 'wine_chat1'] }]);
            }
            if (((s as any).AlbinaQW ?? 0)?.['wine_convo_7'] === ((s as any).daystart ?? 0)) {
              scene.actions([{ label: 'Continue', goto: ['albina_wine_event', 'wine_chat1'] }]);
            } else {
              (s as any).AlbinaQW['wine_convo_7'] = ((s as any).daystart ?? 0);
            }
            qspCall(s, 'albina_wine_event', 'commando_talk');
          } else {
            if (((s as any).AlbinaQW ?? 0)?.['wine_convo_8'] === ((s as any).daystart ?? 0)) {
              scene.actions([{ label: 'Continue', goto: ['albina_wine_event', 'wine_chat1'] }]);
            } else {
              (s as any).AlbinaQW['wine_convo_8'] = ((s as any).daystart ?? 0);
            }
            qspCall(s, 'albina_wine_event', 'stripper_talk');
          }
        }
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'wine_invite':
      enterWineInvite(s, scene);
      break;
    case 'start':
      enterStart(s, scene);
      break;
    case 'wine_chat1':
      enterWineChat1(s, scene);
      break;
    default:
      enterWineInvite(s, scene);
      break;
  }
}

export const albina_wine_event: LocationDef = {
  name: 'albina_wine_event',
  title: 'As the two of you head back inside the house, Albina takes y',
  region: 'other',
  description: ['As the two of you head back inside the house, Albina takes you by the hand and points towards the kitchen.'],
  enter: enter,
};
