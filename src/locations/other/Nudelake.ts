import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
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
    scene.text('It\'s too cold for any nudist activities.');
    if (qspFunc(s, 'changingroom', 'count_swim_item') > 0  &&  ((s as any).PSwim ?? 0) === 0) {
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
      scene.actions([
        { label: 'Take off your clothes', handler: (st: GameState) => {
    if (((s as any).pcs_inhib ?? 0) > 30) {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      if (((s as any).pcs_horny ?? 0) >= 80  &&  ((s as any).trait_vars ?? 0)?.['exhibitionist'] > 1  &&  (((s as any).PCloPanties ?? 0) === 1  ||  ((s as any).pantyworntype ?? 0) !== 'none')) {
        scene.img('images/locations/pavlovsk/lake/secluded_beach/self/wetpussypants3.jpg');
        scene.text('You strip off. A few passing men do a double-take and pause to look at your sopping wet panties, probably thinking about what is making you so excited. You don\'t care about what they might say or think of you.');
      } else {
        scene.img('images/locations/pavlovsk/lake/secluded_beach/dress/undressnudebeach.jpg');
        scene.text('Not caring if anyone is looking at you, you slowly take off your clothes. You peel off each item like a stripper. Soon, you are completely naked.');
        if (((s as any).pcs_inhib ?? 0) < 60) {
          scene.img('images/locations/pavlovsk/lake/secluded_beach/dress/undressnudebeach.jpg');
          scene.text('You quickly check to see if anyone is watching, and when you\'re satisfied no one is paying you undue attention, you take off your clothes. You\'re naked now.');
        }
        if (((s as any).PSwim ?? 0) === 0  &&  ((s as any).clothingworntype ?? 0) !== 'nude') {
          qspCall(s, 'outfit', 'backup', 'swim');
        }
        qspCall(s, 'outfit', 'strip_all');
        qspCall(s, 'stat', '');
        scene.img('images/locations/pavlovsk/lake/secluded_beach/self/shyness.jpg');
        scene.text('Even though no one is around, you don\'t feel confident enough to actually take your clothes off.');
      }
      scene.actions([
        { label: 'Continue', goto: ['Nudelake', ''] },
      ]);
    }
  } },
      ]);
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
  }
  scene.build();
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
