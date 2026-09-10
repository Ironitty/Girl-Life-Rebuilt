import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_nightclub', 'start');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Nightclub</b></center>');
  scene.img('images/locations/city/citycenter/nightclub/club.jpg');
  scene.text('The entrance area of the club is full of younger looking people. The entrance itself is watched over by a very large man wearing a shirt that says \'Security\'. He\'s checking everyone and ensuring that they pay to enter.');
  // TODO-QSP: dynamic text: The entry fee is ' + $func('money', 'string_price', 250) + '.
  scene.text('The entry fee is \' + $func(\'money\', \'string_price\', 250) + \'.');
  if (((s as any).clubwork ?? 0) === 1) {
    scene.actions([
      { label: 'Meet Erik for work', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/nightclub/club.jpg');
    scene.text('You tell the bouncer you\'re here to work for Erik and he looks you over.');
    if (((s as any).pcs_makeup ?? 0) > 1  &&  ((s as any).pcs_sweat ?? 0) < 30  &&  (((s as any).PCloPanties ?? 0) === 1  ||  ((s as any).PCloSkirt ?? 0) > 2  ||  ((s as any).PCloPants ?? 0) > 4  ||  (((s as any).clothingworntype ?? 0) === 'salacious_dress'  ||  ((s as any).clothingworntype ?? 0) === 'salacious_outfits'))) {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      scene.text('He nods and says something into his radio before letting you in. A few minutes later, you meet Erik in the foyer.');
      scene.actions([
        { label: 'Talk to him', goto: ['city_nightclub', 'work'] },
      ]);
    } else {
      scene.text('He shakes his head. "If you\'re looking for paying clients, try the road by the park. This is not a brothel."');
      if (((s as any).pcs_sweat ?? 0) >= 30) {
        scene.text('He looks at you and physically cringes. "God, you actually smell!"');
        scene.actions([
          { label: 'Continue', goto: ['city_nightclub', 'start'] },
        ]);
      } else {
        scene.text('You have to wear some makeup to start your work.');
        if (((s as any).pcs_makeup ?? 0) === 0) {
          scene.text('He looks at you dismissively. "Fix your makeup first, girl. You look horrible."');
          scene.actions([
            { label: 'Continue', goto: ['city_nightclub', 'start'] },
          ]);
        } else {
          scene.text('He tells you that you\'re over-dressed. You need to wear something shorter, or much more daring if you want to work.');
          scene.actions([
            { label: 'Continue', goto: ['city_nightclub', 'start'] },
          ]);
        }
        scene.actions([
          { label: 'Continue', goto: ['city_nightclub', 'start'] },
        ]);
      }
      scene.actions([
        { label: 'Continue', goto: ['city_nightclub', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Enter the club [+$func(\'money\', \'get_cost_string\', 250)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 250) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney ?? ''), curActs: [] };
    } else {
      if (((s as any).pcs_makeup ?? 0) > 1  &&  ((s as any).pcs_sweat ?? 0) < 50  &&  (((s as any).PCloSkirt ?? 0) > 2  ||  ((s as any).PCloPants ?? 0) > 4  ||  ((s as any).PCloPanties ?? 0) === 1  ||  (((s as any).clothingworntype ?? 0) === 'salacious_dress'  ||  ((s as any).clothingworntype ?? 0) === 'salacious_outfits'))) {
        scene.text('You can feel his eyes roaming all over your body, but he eventually nods and lets you pass. You\'re stopped just inside the door by another large man, who indicates the cashier window. You step over to it and pay the entry fee. After that, he steps aside and lets you go inside.');
        (s as any).minut = ((s as any).minut ?? 0) + 5;
        qspCall(s, 'money', 'pay', 250);
        (s as any).frost = 0;
        scene.actions([{ label: 'Continue', goto: ['city_nightclub', 'inside'] }]);
      } else {
        scene.text('He shakes his head. "If you\'re looking for paying clients, try the road by the park. This is not a brothel."');
        if (((s as any).pcs_sweat ?? 0) >= 50) {
          scene.text('The bouncer shakes his head. "God girl, you smell!"');
          scene.actions([
            { label: 'Continue', goto: ['city_nightclub', 'start'] },
          ]);
        } else {
          scene.text('The bouncer shakes his head. "At least wear some makeup, girl."');
          if (((s as any).pcs_makeup ?? 0) === 0) {
            scene.text('The bouncer shakes his head. "Fix your makeup first, girl."');
            scene.actions([
              { label: 'Continue', goto: ['city_nightclub', 'start'] },
            ]);
          } else {
            scene.text('The bouncer shakes his head. "Don\'t you have something sexier to wear?"');
            scene.actions([
              { label: 'Continue', goto: ['city_nightclub', 'start'] },
            ]);
          }
          scene.actions([
            { label: 'Continue', goto: ['city_nightclub', 'start'] },
          ]);
        }
        scene.actions([
          { label: 'Continue', goto: ['city_nightclub', 'start'] },
        ]);
      }
    }
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Return to the city center', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_center', ''] },
  ]);
  scene.build();
}

export const city_nightclub: LocationDef = {
  name: 'city_nightclub',
  title: 'Nightclub',
  region: 'city',
  locationType: 'public_indoors',
  description: ['The entrance area of the club is full of younger looking people. The entrance itself is watched over by a very large man wearing a shirt that says \'Security\'. He\'s checking everyone and ensuring that they pay to enter.'],
  enter: enter,
};
