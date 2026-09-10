import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterGadukino(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/rex/rex_gadukino_\'+iif(month > 3 and month < 11, \'summer\', \'winter\')+\'.jpg');
  // TODO-QSP: dynamic text: <<$rex['name']>> is running around '+iif(month > 3 and month < 11, 'sniffing eve...
  scene.text(`${((s as any).rex ?? 0)?.['name']} is running around '+iif(month > 3 and month < 11, 'sniffing everything', 'playing in the snow')+'. Your grandmother loves taking care of him, so you don't have to worry about him while you're in Gadukino.`);
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  if (((s as any).objects ?? 0)?.['chew'] > 0  &&  Math.floor(Math.random() * 10) + 1 > 5  &&  ((s as any).rex ?? 0)?.['chew_day'] !== ((s as any).daystart ?? 0)) {
    (s as any).rex['relationship'] = ((s as any).rex['relationship'] ?? 0) + (1);
    (s as any).objects['chew'] = ((s as any).objects['chew'] ?? 0) - (1);
    (s as any).rex['chew_day'] = ((s as any).daystart ?? 0);
    scene.img('images/characters/shared/rex/rex_chew.jpg');
  } else {
    scene.img('images/locations/city/citycenter/mall/pet shop/pets/dog.jpg');
  }
  // TODO-QSP: 'Your dog''s name is <<$rex[''name'']>> and taking care of him is your responsibility. He needs to b...
  if ((((s as any).rex ?? 0)?.['count_walk'] + ((s as any).rex ?? 0)?.['count_feed'] + ((s as any).rex ?? 0)?.['count_bath']) > 0) {
    scene.text('<b>Chores:</b>');
    if (((s as any).rex ?? 0)?.['count_walk'] > 0) {
      // TODO-QSP: dynamic text: - You have to walk him <<rex['count_walk']>>x today.
      scene.text(`- You have to walk him ${((s as any).rex ?? 0)?.['count_walk']}x today.`);
    }
    if (((s as any).rex ?? 0)?.['count_feed'] > 0) {
      // TODO-QSP: dynamic text: - You have to feed him <<rex['count_feed']>>x today.
      scene.text(`- You have to feed him ${((s as any).rex ?? 0)?.['count_feed']}x today.`);
    }
    if (((s as any).rex ?? 0)?.['count_bath'] > 0) {
      // TODO-QSP: dynamic text: - You have to bath him <<rex['count_bath']>>x this week.
      scene.text(`- You have to bath him ${((s as any).rex ?? 0)?.['count_bath']}x this week.`);
    }
  }
  if (((s as any).rex ?? 0)?.['relationship'] < 10) {
    // TODO-QSP: '<<$rex[''name'']>> ignores you when you approach. '+iif(objects['chew'] = 0, 'His old chew toy has ...
  } else {
    // TODO-QSP: '<<$rex[''name'']>> looks up when you approach. '+iif(objects['chew'] = 0, 'His old chew toy has see...
    if (((s as any).rex ?? 0)?.['relationship'] < 60) {
      // TODO-QSP: '<<$rex[''name'']>> looks up and wags his tail'+iif(rex['relationship'] > 45, ',', ' a bit')+' when ...
    } else {
      // TODO-QSP: '<<$rex[''name'']>> jumps up and'+iif(rex['relationship'] > 80, ' happily ', ' ')+'wags his tail whe...
    }
    qspCall(s, 'pet_dog', 'activities_normal');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'gadukino':
      enterGadukino(s, scene);
      break;
    case 'start':
      enterStart(s, scene);
      break;
    default:
      enterGadukino(s, scene);
      break;
  }
}

export const pet_dog: LocationDef = {
  name: 'pet_dog',
  title: '<b>Chores:</b>',
  region: 'other',
  locationType: 'public_outdoors',
  enter: enter,
};
