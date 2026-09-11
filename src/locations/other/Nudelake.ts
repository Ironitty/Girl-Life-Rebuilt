import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'Nudelake', '');
  qspCall(s, 'stat', '');
  scene.text('<center><b>nudist beach</b></center>');
  scene.img('images/locations/city/residential/lake/nudelake.jpg');
  scene.text('The nudist beach, where clothing is optional.');
  if ((((s as any).PSwim ?? 0) === 1  ||  ((s as any).clothingworntype ?? 0) === 'nude')  &&  ((s as any).lastwornclothingtype ?? 0)?.['swim'] !== ''  &&  ((s as any).lastwornclothingtype ?? 0)?.['swim'] !== 'nude') {
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'outfit', 'restore', 'swim');
    scene.img('images/locations/pavlovsk/lake/secluded_beach/dress/dress_nudebeach.jpg');
    scene.text('You put your clothes back on.');
    scene.actions([
      { label: 'Continue', goto: ['Nudelake', ''] },
    ]);
  } },
    ]);
  }
  if (((s as any).hour ?? 0) < 6  ||  ((s as any).hour ?? 0) > 20) {
    scene.text('The nudist beach is closed.');
  } else {
    if (((s as any).temper ?? 0) < 15  ||  ((s as any).month ?? 0) < 5  ||  ((s as any).month ?? 0) > 9) {
      scene.text('It\'s too cold for any nudist activities.');
    } else {
      if (qspFunc(s, 'changingroom', 'count_swim_item') > 0  &&  (!((s as any).PSwim ?? 0))) {
        scene.actions([
          { label: 'Change into your swimwear', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (((s as any).pcs_horny ?? 0) >= 90) {
      scene.img('images/locations/pavlovsk/lake/secluded_beach/self/wetpussypants1.jpg');
      scene.text('You want to change into a swimsuit, but with no changing room here and your pussy oozing juices down your leg, coupled with the thought that people will see, horrifies you. You abandon the idea.');
      scene.text('"I should sort out my arousal first." you think to yourself.');
      scene.actions([
        { label: 'Continue', goto: ['Nudelake', ''] },
      ]);
    } else {
      scene.img('images/locations/pavlovsk/lake/secluded_beach/dress/swimsuit_nudebeach.jpg');
      scene.text('You wrap a towel around yourself and you\'re ready to change into your swimsuit.');
      scene.actions([
        { label: 'Choose outfit', goto: ['changingroom', ''] },
      ]);
    }
  } },
        ]);
      }
      if (((s as any).clothingworntype ?? 0) !== 'nude') {
        scene.actions([
          { label: 'Take off your clothes', handler: (st: GameState) => {
    if (((s as any).pcs_inhib ?? 0) > 30) {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      if (((s as any).pcs_horny ?? 0) >= 80  &&  ((s as any).trait_vars ?? 0)?.['exhibitionist'] > 1  &&  (((s as any).PCloPanties ?? 0) === 1  ||  ((s as any).pantyworntype ?? 0) !== 'none')) {
        scene.img('images/locations/pavlovsk/lake/secluded_beach/self/wetpussypants3.jpg');
        scene.text('You strip off. A few passing men do a double-take and pause to look at your sopping wet panties, probably thinking about what is making you so excited. You don\'t care about what they might say or think of you.');
      } else {
        if (((s as any).pcs_inhib ?? 0) >= 60) {
          scene.img('images/locations/pavlovsk/lake/secluded_beach/dress/undressnudebeach.jpg');
          scene.text('Not caring if anyone is looking at you, you slowly take off your clothes. You peel off each item like a stripper. Soon, you are completely naked.');
        } else {
          if (((s as any).pcs_inhib ?? 0) < 60) {
            scene.img('images/locations/pavlovsk/lake/secluded_beach/dress/undressnudebeach.jpg');
            scene.text('You quickly check to see if anyone is watching, and when you\'re satisfied no one is paying you undue attention, you take off your clothes. You\'re naked now.');
          }
        }
      }
      if (((s as any).PSwim ?? 0) === 0  &&  ((s as any).clothingworntype ?? 0) !== 'nude') {
        qspCall(s, 'outfit', 'backup', 'swim');
      }
      qspCall(s, 'outfit', 'strip_all');
      qspCall(s, 'stat', '');
    } else {
      scene.img('images/locations/pavlovsk/lake/secluded_beach/self/shyness.jpg');
      scene.text('Even though no one is around, you don\'t feel confident enough to actually take your clothes off.');
    }
    scene.actions([
      { label: 'Continue', goto: ['Nudelake', ''] },
    ]);
  } },
        ]);
      }
      if (((s as any).clothingworntype ?? 0) === 'nude') {
        scene.text('Here you can <a href="exec:gt \'Nudelake\', \'zagarat\'">sunbathe</a> and <a href="exec:gt \'Nudelake\', \'swim\'">swim</a>');
        if (((s as any).pcs_stam ?? 0) >= (20 * (10 - ((s as any).sport_clothes_exercise_bonus ?? 0))) / 2) {
          scene.actions([
            { label: 'Go swimming', goto: ['Nudelake', 'swim'] },
          ]);
        }
        scene.text('You can play <a href="exec:gt \'Nudelake\', \'voleybol\'">beach volleyball</a>.');
        scene.actions([
          { label: 'Sunbathe', goto: ['Nudelake', 'zagarat'] },
        ]);
      }
      if (((s as any).katday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).kat ?? 0) >= 1) {
        scene.text('You see Kat on the beach.');
        scene.actions([
          { label: 'Approach Kat', goto: ['Katlake', 'kat'] },
        ]);
      }
    }
  }
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'restore', 'swim');
  }, goto: ['Nudelake', ''] },
    ]);
  } else {
    scene.actions([
      { label: 'Return to the main beach', goto: ['city_lake', 'start'] },
    ]);
  }
  scene.build();
}

function enterVoleybol(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  scene.img('images/locations/city/residential/lake/volleyball.jpg');
  scene.text('You go to the volleyball court.');
  scene.actions([
    { label: 'Watch', goto: ['Nudelake', 'smotr'] },
    { label: 'Leave', goto: ['Nudelake', ''] },
    { label: 'Play', handler: (st: GameState) => {
    qspCall(s, 'exp_gain', 'agil', 1);
    qspCall(s, 'exp_gain', 'react', 1);
    qspCall(s, 'exp_gain', 'vball', Math.floor(Math.random() * 3) + 1);
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
    scene.img('images/locations/city/residential/lake/volleyball.jpg');
    scene.text('You go up to the players and ask whether it is possible to join in. They are happy to put you on a team.');
    scene.actions([
      { label: 'Finish', goto: ['Nudelake', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterZagarat(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  if (((s as any).pcs_sweat ?? 0) < 35) {
    qspCall(s, 'sweat', 'add', 5);
  }
  (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/lake/tanning_nude.jpg');
  if (((s as any).mc_inventory ?? 0)?.['suncream'] === 0) {
    (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) + (1);
    scene.text('You go to the beach and sunbathe.');
  } else {
    ((s as any).mc_inventory ?? {})['suncream'] = (((s as any).mc_inventory ?? {})['suncream'] ?? 0) - (1);
    (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) + (3);
    scene.text('You smear sunblock on your body and sunbathe.');
  }
  (s as any).nzagrand = Math.floor(Math.random() * 101) + 0;
  if (((s as any).nzagrand ?? 0) < 60) {
  } else {
    if (((s as any).nzagrand ?? 0) < 70) {
      if (((s as any).npc_rel ?? 0)?.['A219'] > 30  &&  (!((s as any).katkey ?? 0))) {
        scene.actions([{ label: 'Continue', goto: ['Katlake', 'key'] }]);
      }
    } else {
      if (((s as any).nzagrand ?? 0) < 80) {
        if (((s as any).kat ?? 0) === 0  &&  ((s as any).katday ?? 0) !== ((s as any).daystart ?? 0)) {
          scene.actions([{ label: 'Continue', goto: ['Katlake', ''] }]);
        }
      } else {
        if (((s as any).nzagrand ?? 0) < 90) {
          scene.actions([{ label: 'Continue', goto: ['Vnlake1', ''] }]);
        } else {
          scene.actions([{ label: 'Continue', goto: ['Vnlake2', ''] }]);
        }
      }
    }
  }
  scene.actions([
    { label: 'Finish', goto: ['Nudelake', ''] },
  ]);
  scene.build();
}

function enterSwim(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_makeup = 1;
  (s as any).cumspclnt = 4;
  qspCall(s, 'cum_cleanup', '');
  qspCall(s, 'exercise', 'tier1', 60, 'stren', 'vital');
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    qspCall(s, 'exercise', 'tier1', (-5), 'stren', 'vital');
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
  } else {
    if (((s as any).pcs_inhib ?? 0) < 50) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
    }
  }
  (s as any).pcs_sweat = 10 + (Math.floor(Math.random() * 5) + 0);
  scene.img(`images/pc/activities/swim/lake/swim_nude_${Math.floor(Math.random() * 11) + 0}.jpg`);
  scene.text('You go for a swim.');
  if (((s as any).deodorant_on ?? 0) === 1) {
    qspCall(s, 'sweat', 'remove_deo');
    scene.text('<br>Your deodorant gets washed away in the water.');
  }
  scene.actions([
    { label: 'Finish', goto: ['Nudelake', ''] },
  ]);
  scene.build();
}

function enterSmotr(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/lake/volleyball.jpg');
  scene.text('You watch the others play.');
  scene.actions([
    { label: 'Leave', goto: ['Nudelake', ''] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'voleybol':
      enterVoleybol(s, scene);
      break;
    case 'zagarat':
      enterZagarat(s, scene);
      break;
    case 'swim':
      enterSwim(s, scene);
      break;
    case 'smotr':
      enterSmotr(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const Nudelake: LocationDef = {
  name: 'Nudelake',
  title: '<center><b>nudist beach</b></center>',
  region: 'other',
  locationType: 'event_outdoors',
  locclass: 'beach',
  description: ['The nudist beach, where clothing is optional.'],
  enter: enter,
};
