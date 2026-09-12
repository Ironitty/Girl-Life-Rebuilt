import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gad_miroslava_home', 'start');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'schedule', 'A60');
  qspCall(s, 'stat', '');
  scene.text('<center><h2>Gadukino Village</h2></center>');
  scene.text('<center><b>Mira\'s Yard</b></center>');
  if (((s as any).month ?? 0) >= 4  &&  ((s as any).month ?? 0) <= 10) {
    if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 22) {
      scene.img('images/locations/gadukino/village/mirahome.jpg');
    } else {
      scene.img('images/locations/gadukino/village/mirahome_night.jpg');
    }
  } else {
    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 18) {
      scene.img('images/locations/gadukino/village/mirahome_winter.jpg');
    } else {
      scene.img('images/locations/gadukino/village/mirahome_winter_night.jpg');
    }
  }
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 22) {
    // TODO-QSP: dynamic text: Near the house you see ' + iif(npc_QW['A64'] = 0, 'Mira's father', 'Afanasiy') +...
    scene.text('Near the house you see \' + iif(npc_QW[\'A64\'] = 0, \'Mira\'s father\', \'Afanasiy\') + \' working.');
    if (((s as any).month ?? 0) >= 5  &&  ((s as any).month ?? 0) <= 9  &&  ((s as any).hour ?? 0) >= 18  &&  ((s as any).hour ?? 0) <= 21  &&  ((s as any).week ?? 0) === 5  &&  ((s as any).mirabrotherday ?? 0) !== ((s as any).daystart ?? 0)) {
      scene.text('You see a motorcycle parked outside of Mira\'s house. Mira\'s brother has come in from the city to visit his sister and father.');
      scene.actions([
        { label: 'Talk to Mira\'s brother', goto: ['gad_miroslava_home', 'mirabrother'] },
      ]);
    }
    scene.actions([
      { label: 'Go back to the village center', goto: ['gadukino', ''] },
      { label: 'Talk to  [+iif(npc_QW[\'A64\'] = 0, \'Mira\'s father\',...]', goto: ['mirafather', ''] },
    ]);
  } else {
    if (((s as any).hour ?? 0) > 22  ||  ((s as any).hour ?? 0) < 3) {
      scene.text('It\'s too late. Most of Mira\'s family is asleep. No need to wake them up unnecessarily.');
    } else {
      scene.text('It\'s too early. Most of Mira\'s family is still asleep. No need to wake them up unnecessarily.');
    }
    scene.actions([
      { label: 'Go back to the village center', goto: ['gadukino', ''] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterMirabrother(s: GameState, scene: SceneBuilder): void {
  (s as any).mirabrotherday = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big65.jpg');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave him be', goto: ['gad_miroslava_home', 'start'] },
    { label: 'Ask if you can get a ride on his motorcycle', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big65.jpg');
    scene.text('You ask Mira\'s brother for a ride on his motorcycle.');
    if (((s as any).pcs_hotcat ?? 0) < 5) {
      if (((s as any).npc_rel ?? 0)?.['A60'] > 20) {
        scene.text('He looks you up and down, checking you out and says, "Some other time."');
      } else {
        scene.text('He gazes at you for a couple of seconds and then asks, "Who are you again?"');
      }
      scene.actions([
        { label: 'Walk away', goto: ['gad_miroslava_home', 'start'] },
      ]);
    } else {
      if (((s as any).pantyworntype ?? 0) !== 'none') {
        scene.text('"No problem", he says to you while looking you up and down with a strange glint in his eyes. "But my bike, well, he only allows girls without panties to ride on his back, and there\'s nothing I can do about it. This bike is a little devil."');
        scene.actions([
          { label: 'Look at him in disgust and walk away', goto: ['gad_miroslava_home', 'start'] },
          { label: 'Remove panties', handler: (st: GameState) => {
    qspCall(s, 'underwear', 'remove');
    scene.text('You really want a ride on his motorcycle and quickly slide them down your legs and stuff them in your pocket.');
  }, goto: ['gad_miroslava_home', 'mirabrother'] },
        ]);
      } else {
        scene.text('"No problem", he says to you and then adds with a mischievous smile, "but first, sit down on him, and he\'ll check to make sure he likes you. He is a fussy son of a bitch."');
        scene.actions([
          { label: 'Get on the bike', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/mira/mirabromoto.jpg');
    scene.text('You quickly swing your leg up and over the motorcycle, plop your ass down on the padded seat and grab the handlebars. With a satisfied smile, Mira\'s brother never takes his eyes off your crotch. You wiggle your ass on the seat a little giving him a great view of your naked pussy.');
    scene.text('"Fine", he says, still smiling, "Just fine! You have an awesome pussy, and I\'m sure my friend," and he slaps the gas tank, "is looking forward to having you ride on him. You know what I mean, yes?" You give him a wicked grin and nod. "We\'ll give you a ride to remember, and then you can give me a ride to remember…" You just continue to nod.');
    scene.actions([
      { label: 'Change your mind and leave', goto: ['gad_miroslava_home', 'start'] },
      { label: 'Hell yes, you agree…', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/mira/mirabromoto.jpg');
    scene.text('"Cool. Here, take this helmet - safety first."');
    scene.actions([
      { label: 'Put on the helmet', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/mira/mirabromoto1.jpg');
    scene.text('You slide your ass back to allow him room to mount the motorcycle. But instead, he grabs his helmet from the handlebars and slams it down on his head.');
    scene.actions([
      { label: 'Wrap your arms around his waist…', handler: (st: GameState) => {
    (s as any).hour = 22;
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/mira/mirabromoto2.jpg');
    scene.text('He guns the engine, which roars, then sets out at a furious pace. The rear wheel burns rubber, and smokes a little as he rides down the highway. After a few miles, he does a U-turn and heads back towards Gadukino but does not stop in the village.');
    scene.actions([
      { label: 'One ride ends and another begins…', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 11) + 5);
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/mira/mirabromoto3.jpg');
    scene.text('He rolls down the highway another mile before pulling onto a side track and parks a couple hundred meters off the road. He jumps off the bike, pulls off his helmet, and turns to you with a "devil may care" attitude. He removes the helmet from your head and drops it to the ground. Then, he turns you around and begins to feel your bare pussy…');
    scene.actions([
      { label: 'Stand', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 11) + 5);
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/mira/mirabromoto4.jpg');
    scene.text('Remembering the deal, you obediently stand, letting his hands knead your breasts and stroke your crotch.');
    scene.actions([
      { label: 'Try to enjoy his touch', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 11) + 5);
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/mira/mirabromoto5.jpg');
    scene.text('You feel his hand rub your crotch, fingering your labia. Then, a minute later, he turns you around and presses down on your shoulders…');
    scene.actions([
      { label: 'Kneel', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 11) + 5);
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/mira/mirabromoto6.jpg');
    scene.text('You obediently kneel down in front of him and unzip his pants. His quickly-growing member pops out right in front of your face…');
    scene.actions([
      { label: 'Suck', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 11) + 10);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/mira/mirabromoto7.jpg');
    scene.text('You stare for a few seconds, transfixed, as he grows larger and larger. Then, you take his dick in your mouth and begin to suck on it, caressing his balls with your hands.');
    scene.actions([
      { label: 'Swallow', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 11) + 15);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
    (s as any).bja = ((s as any).bja ?? 0) + (1);
    if ((!((s as any).mirabrosextime ?? 0))) {
      (s as any).mirabrosextime = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/mira/mirabromoto8.jpg');
    scene.text('After a couple of minutes, you feel his warm sticky cum hit the back of your throat and begin to swallow it all down. Mira\'s brother stands still for a minute, eyes closed in bliss. Then, finally, he takes his cock out of your mouth and zips up his pants. You put your helmets back on, get on the motorcycle once again, and he drives you back to the village…');
    if (((s as any).grandmaQW ?? 0)?.['block'] === 0) {
      scene.actions([
        { label: 'Ask him to drop you off at your grandparents house', goto: ['gad_gpyard', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Ask him to take you back to Mira\'s house', goto: ['gad_miroslava_home', 'start'] },
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
    case 'mirabrother':
      enterMirabrother(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gad_miroslava_home: LocationDef = {
  name: 'gad_miroslava_home',
  title: '<center><h2>Gadukino Village</h2></center>',
  region: 'gadukino',
  locationType: 'public_outdoors',
  enter: enter,
};
