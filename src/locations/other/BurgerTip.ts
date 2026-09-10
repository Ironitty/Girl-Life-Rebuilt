// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).BurgerQW['IlyQWBlackmailPhoto'] = '';
  if (((s as any).film ?? 0) > 0) {
    (s as any).BurgerQW['IlyQWBlackmailPhoto'] = 'The photo is a screenshot from one of your porn movies.';
  } else {
    (s as any).BurgerQW['IlyQWBlackmailPhoto'] = 'The picture shows you sucking two cocks at the same time.';
    if (((s as any).fotoCFNMsex ?? 0) > 0) {
      (s as any).BurgerQW['IlyQWBlackmailPhoto'] = 'In the photo you see yourself getting fucked from behind by a random guy. This must have been taken in the stripclub.';
    } else {
      (s as any).BurgerQW['IlyQWBlackmailPhoto'] = 'In the photo you are sitting in front of a guy, kissing his cock. There seems to be cum on your face. This photo must have been taken in the stripclub.';
      if (((s as any).fotoCFNMblowjob ?? 0) > 0) {
        (s as any).BurgerQW['IlyQWBlackmailPhoto'] = 'In the photo you are giving a guy a blowjob. You can spot a group of women in the background and it seems like this photo was taken in the stripclub.';
      } else {
        (s as any).BurgerQW['IlyQWBlackmailPhoto'] = 'In the photo you are dancing on a pole. Obviously someone photographed you, while you were on stage at the stripclub.';
        if (((s as any).modelfoto ?? 0)?.['erotic'] > 0) {
          (s as any).BurgerQW['IlyQWBlackmailPhoto'] = 'The photo shows you naked, it is very well taken and must be from a shoot at the modeling agency.';
        }
      }
    }
  }
  scene.build();
}

export const BurgerTip: LocationDef = {
  name: 'BurgerTip',
  region: 'other',
  enter: enter,
};
