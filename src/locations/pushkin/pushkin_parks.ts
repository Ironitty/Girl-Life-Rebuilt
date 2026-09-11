import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pushkin_parks', 'start');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Pushkin Town Park</b></center>');
  scene.img('images/locations/pushkin/park/parkus.jpg');
  scene.text('The gardens of the old palace have been sculpted over many years into a wonder landscape with a tranquil atmosphere.');
  scene.text('The Pushkin Park is a must-see for tourists and servers as the main attraction of Pushkin.');
  scene.text('Wander deeper into the <a href="exec:gt \'pushkin_parks\', \'lug\'">park</a>.');
  qspCall(s, 'park_walkevents', 'run');
  if (((s as any).hour ?? 0) >= 20  ||  ((s as any).hour ?? 0) < 6) {
    if (qspFunc(s, 'homes_properties', 'has_access', 'old_town_apartment') === 0) {
      scene.text('It\'s quite dark now, and you have no where to stay nearby. Maybe you should try to sleep on a bench?');
    } else {
      scene.text('It\'s quite dark now, and you don\'t feel like walking. Maybe you should try sleeping on a bench?');
    }
    scene.actions([
      { label: 'Sleep on a bench', goto: ['placer_sex', 'sleeping_park_bench'] },
    ]);
  }
  if (((s as any).mc_inventory ?? 0)?.['joints'] > 0  &&  ((s as any).drugVars ?? 0)?.['weed_high'] === 0) {
    scene.actions([
      { label: 'Smoke a joint', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'drugs', 'joint');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  qspCall(s, 'flash', 'park');
  qspCall(s, 'blackmailer', 'set_park_act');
  scene.actions([
    { label: 'Go to Okhlopkov Square (0:05)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pushkin_sq', ''] },
    { label: 'Go to Town Center (0:10)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['pushkin', ''] },
    { label: 'Walk around the park (1 hour)', handler: (st: GameState) => {
    if (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 0  &&  (!((s as any).exhibitionQW ?? 0))) {
      // TODO-QSP: gt 'kseniyaQW', 'event1', 1
    }
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'stat', '');
    scene.text('You leisurely stroll through Pushkin Park, breathing in the fresh air, and reflecting on the vicissitudes of fate.');
    scene.actions([
      { label: 'Complete outing.', goto: ['pushkin_parks', 'start'] },
    ]);
  } },
    { label: 'Sit down on the bench', handler: (st: GameState) => {
    qspCall(st, 'placer_sex', 'sitting_park_bench');
  } },
  ]);
  scene.build();
}

function enterLug(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pushkin_parks', 'lug');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pushkin/park/lug.jpg');
  scene.text('It\'s a small but well maintained meadow with evergreen grass, perfect for laying down to rest, have a picnic or just sunbathe. Mothers with small children regularly visit this place. Despite that, if you feel like exposing yourself here, there would be less people to see it, making it easier to find the bravery to do so.');
  if (((s as any).cheatVars ?? 0)?.['random_lovers'] !== 1) {
    if ((Math.floor(Math.random() * 601) + 0) <= ((s as any).pcs_apprnc ?? 0)) {
      qspCall(s, 'npcgeneratec', '', 0, '', 'like');
      qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
      // TODO-QSP: dynamic text: You notice <<$npcheight_pref>>, <<$npcbuild>>, <<$npchair>> haired guy coming to...
      scene.text(`You notice ${((s as any).npcheight_pref ?? 0)}, ${((s as any).npcbuild ?? 0)}, ${((s as any).npchair ?? 0)} haired guy coming towards you. He is wearing wearing ${((s as any).npcClo ?? 0)}.`);
      // TODO-QSP: dynamic text: The guy introduces himself as <<$boydesc>> and asks for your telephone number.
      scene.text(`The guy introduces himself as ${((s as any).boydesc ?? 0)} and asks for your telephone number.`);
      scene.actions([
        { label: 'Tell him your number', handler: (st: GameState) => {
    qspCall(s, 'lover', 'add_boyfriend', ((s as any).npcID ?? 0));
    (s as any).stopboy = 0;
    // TODO-QSP: dynamic text: <<$boydesc>> thanks you and leaves.
    scene.text(`${((s as any).boydesc ?? 0)} thanks you and leaves.`);
    scene.actions([
      { label: 'Complete outing', goto: ['pushkin_parks', 'lug'] },
    ]);
  } },
      ]);
    }
  }
  if (((s as any).pavserhom ?? 0) === 0  &&  ((s as any).psiha ?? 0) === 0  &&  qspFunc(s, 'homes_properties', 'has_access', 'city_apartment') === 0) {
    if ((Math.floor(Math.random() * 100) + 1) >= 90) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (20);
      qspCall(s, 'stat', '');
      scene.text('On the path stands a <a href="exec: gt \'pushkin_parks\', \'pavserjil\'">man</a> looking like he is waiting for someone.');
    }
  }
  qspCall(s, 'kseniyaQW', 'events');
  if (((s as any).pcs_inhib ?? 0) >= 35) {
    scene.actions([
      { label: 'Flash your tits', handler: (st: GameState) => {
    if (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 0  &&  (!((s as any).exhibitionQW ?? 0))) {
      // TODO-QSP: gt 'kseniyaQW', 'event1', 1
    }
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
    qspCall(s, 'flash', 'tits', 'outdoors', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['pushkin_parks', 'lug'] },
    ]);
  } },
    ]);
  }
  if (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 0) {
    scene.actions([
      { label: 'Flash your pussy', handler: (st: GameState) => {
    if (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 0  &&  (!((s as any).exhibitionQW ?? 0))) {
      // TODO-QSP: gt 'kseniyaQW', 'event1', 1
    }
    qspCall(s, 'flash', 'pussy', 'outdoors', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['pushkin_parks', 'lug'] },
    ]);
  } },
    ]);
  }
  qspCall(s, 'events', 'street_cum');
  scene.actions([
    { label: 'Visit the pond', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
  }, goto: ['pushkin_parks', 'prut'] },
    { label: 'Go toward the park entrance', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
  }, goto: ['pushkin_parks', 'start'] },
  ]);
  scene.build();
}

function enterPavserjil(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).pavserhom = 1;
  scene.img('images/characters/pushkin/pavser/pavserjil2.jpg');
  scene.text('It is not clear why you are drawn to him, but you can barely take your eyes off him.');
  scene.actions([
    { label: 'Continue', goto: ['pushkin_parks', 'lug'] },
  ]);
  scene.build();
}

function enterPrut(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pushkin_parks', 'prut');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Park Pond</b></center>');
  scene.img('images/locations/pushkin/park/prut.jpg');
  scene.text('A large and pretty pond near the end of the park, it continues off in to a wooded area.');
  scene.actions([
    { label: 'Explore the wooded area', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
  }, goto: ['pushkin_parks', 'prut2'] },
    { label: 'Return to the small meadow', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
  }, goto: ['pushkin_parks', 'start'] },
  ]);
  scene.build();
}

function enterPrut2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pushkin_parks', 'prut2');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Woodland Pond</b></center>');
  scene.img('images/locations/pushkin/park/prut2.jpg');
  scene.text('The pond is still and beautiful here and the trees offer some privacy, it feels quite magical.');
  scene.text('There is a large field beyond that is hidden from the tourist trail.');
  if (((s as any).tpKnown ?? 0)?.['PushkinPark'] === 1) {
    scene.actions([
      { label: 'Enter the hidden circle of trees', goto: ['treeCircle', 'PushkinPark'] },
    ]);
  } else {
    scene.actions([
      { label: 'Investigate a mysterious copse of trees', goto: ['treeCircle', 'PushkinPark'] },
    ]);
  }
  if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  (Math.floor(Math.random() * 4) + 1) <= ((s as any).pcs_magik ?? 0)  &&  (((s as any).hour ?? 0) <=6  ||  ((s as any).hour ?? 0) >=19)) {
    if (((s as any).knowsfairy ?? 0) < 1  &&  ((s as any).fairyskip ?? 0) !== ((s as any).daystart ?? 0)) {
      // TODO-QSP: xgt 'MagEncounterFairy'
    } else {
      if (((s as any).fairyskip ?? 0) !== ((s as any).daystart ?? 0)) {
        scene.actions([
          { label: 'Go to where the Fairy may be', handler: (st: GameState) => {
    // TODO-QSP: xgt 'MagEncounterFairy'
  } },
        ]);
      }
    }
  }
  if (((s as any).temper ?? 0) >= 15  &&  ((s as any).month ?? 0) >= 5  &&  ((s as any).month ?? 0) <= 9  &&  ((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) <= 20) {
    if (((s as any).pcs_inhib ?? 0) > 30) {
      scene.actions([
        { label: 'Strip off and skinny dip (0:30)', handler: (st: GameState) => {
    (s as any).cumspclnt = 4;
    qspCall(s, 'cum_cleanup', '');
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'mood', 'raise', 'tiny');
    if (((s as any).pcs_sweat ?? 0) > 10) {
      (s as any).pcs_sweat = 10 + ((s as any).rand ?? 0)(0, 4);
    }
    if (((s as any).pcs_stren ?? 0) < 30) {
      qspCall(s, 'exp_gain', 'stren', 1);
    }
    if (((s as any).pcs_vital ?? 0) < 30) {
      qspCall(s, 'exp_gain', 'vital', 1);
    }
    (s as any).fat = ((s as any).fat ?? 0) - (1);
    (s as any).pcs_makeup = 1;
    qspCall(s, 'arousal', 'flash', 10, 'exhibitionism');
    qspCall(s, 'outfit', 'strip_all');
    if (((s as any).pcs_inhib ?? 0) < 40) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 0);
    }
    if (((s as any).pcs_horny ?? 0) >= 80  &&  ((s as any).pcs_inhib ?? 0) >= 60  &&  ((s as any).PCloPanties ?? 0) === 1) {
      scene.img('images/locations/pavlovsk/lake/secluded_beach/self/wetpussypants3.jpg');
      scene.text('AS you strip off. A couple of passing men do a double-take and pause a moment to look at your sopping wet panties, probably thinking about what is making you so excited. You don\'t care about what they might say or think of you and carry on stripping.');
      scene.text('Once you are naked you play around and have fun in the pond, enjoying the feel of the warm water on your body. The clean pond water refreshes and invigorates you.');
    } else {
      if (((s as any).pcs_inhib ?? 0) >= 60) {
        scene.img('images/locations/pavlovsk/lake/secluded_beach/dress/undressnudebeach.jpg');
        scene.text('Not caring if anyone is looking at you, you slowly take off your clothes. You peel off each item like a stripper. Soon, you are completely naked.');
        scene.text('You play around and have fun in the pond, enjoying the feel of the warm water on your naked body. The clean pond water refreshes and invigorates you.');
      } else {
        scene.img('images/locations/pavlovsk/lake/secluded_beach/dress/undressnudebeach.jpg');
        scene.text('You quickly check to see if anyone is watching, and when you\'re satisfied no one is paying you undue attention, you take off your clothes.');
        scene.text('You play around and have fun in the pond, enjoying the feel of the warm water on your naked body. The clean pond water refreshes and invigorates you.');
      }
    }
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the water.');
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get out and dressed', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'wear_last_worn');
  }, goto: ['pushkin_parks', 'prut2'] },
    ]);
  } },
      ]);
    } else {
      scene.text('It would be a good place for skinny dipping but you\'re too worried about what people would think to do such a thing.');
    }
  }
  scene.actions([
    { label: 'Go to the field', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
  }, goto: ['pushkin_parks', 'luzhayka'] },
    { label: 'Follow the pond back out of the woods', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
  }, goto: ['pushkin_parks', 'prut'] },
  ]);
  scene.build();
}

function enterLuzhayka(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pushkin_parks', 'luzhayka');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pushkin/park/luzhayka.jpg');
  scene.text('A quiet hidden field that is well maintained but apart from the occasional grounds keeper you feel like it is all yours.');
  scene.actions([
    { label: 'Return to the woodland pond', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
  }, goto: ['pushkin_parks', 'prut2'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'lug':
      enterLug(s, scene);
      break;
    case 'pavserjil':
      enterPavserjil(s, scene);
      break;
    case 'prut':
      enterPrut(s, scene);
      break;
    case 'prut2':
      enterPrut2(s, scene);
      break;
    case 'luzhayka':
      enterLuzhayka(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const pushkin_parks: LocationDef = {
  name: 'pushkin_parks',
  title: '<center><b>Pushkin Town Park</b></center>',
  region: 'pushkin',
  locationType: 'public_outdoors',
  locclass: 'city_park',
  description: ['The gardens of the old palace have been sculpted over many years into a wonder landscape with a tranquil atmosphere.'],
  enter: enter,
};
