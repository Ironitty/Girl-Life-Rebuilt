// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).NikoSlut ?? 0) === 2  &&  ((s as any).NikoDiner ?? 0) > 0) {
    (s as any).NikoCust = Math.floor(Math.random() * 16) + 1;
    if (((s as any).NikoDinerSlut ?? 0) >= 18  &&  ((s as any).VKBikerAttack ?? 0) === 0  &&  ((s as any).VKWip ?? 0) === 100) {
      scene.actions([{ label: 'Continue', goto: ['NikoSlut', 'Biker Attack'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['NikoSlut', 'Customer 1'] }]);
      if (((s as any).NikoCust ?? 0) === 2  &&  ((s as any).NikoCust2 ?? 0) !== ((s as any).daystart ?? 0)) {
        scene.actions([{ label: 'Continue', goto: ['NikoSlut', 'Customer 2'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['NikoSlut', 'Customer 3'] }]);
        if (((s as any).NikoCust ?? 0) === 4  &&  ((s as any).NikoCust4 ?? 0) !== ((s as any).daystart ?? 0)) {
          scene.actions([{ label: 'Continue', goto: ['NikoSlut', 'Customer 4'] }]);
        } else {
          scene.actions([{ label: 'Continue', goto: ['NikoSlut', 'Customer 5'] }]);
          if (((s as any).NikoCust ?? 0) === 6  &&  ((s as any).NikoCust6 ?? 0) !== ((s as any).daystart ?? 0)) {
            scene.actions([{ label: 'Continue', goto: ['NikoSlut', 'Customer 6'] }]);
          } else {
            scene.actions([{ label: 'Continue', goto: ['NikoSlut', 'Customer 7'] }]);
            if (((s as any).NikoCust ?? 0) === 8  &&  ((s as any).NikoCust8 ?? 0) !== ((s as any).daystart ?? 0)) {
              scene.actions([{ label: 'Continue', goto: ['NikoSlut', 'Customer 8'] }]);
            } else {
              scene.actions([{ label: 'Continue', goto: ['NikoSlut', 'Customer 9'] }]);
              if (((s as any).NikoCust ?? 0) === 10  &&  ((s as any).NikoCust10 ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).VKWip ?? 0) === 100) {
                scene.actions([{ label: 'Continue', goto: ['NikoSlut', 'Customer 10'] }]);
              } else {
                scene.actions([{ label: 'Continue', goto: ['NikoSlut', 'Customer 11'] }]);
                if (((s as any).NikoCust ?? 0) >= 12) {
                  scene.actions([{ label: 'Continue', goto: ['NikoSlut', 'No Customers'] }]);
                } else {
                  scene.actions([{ label: 'Continue', goto: ['NikoSlut', 'Customers'] }]);
                }
                scene.actions([{ label: 'Continue', goto: ['NikoSlut', 'Diner Exit'] }]);
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

export const NikoSlut: LocationDef = {
  name: 'NikoSlut',
  title: 'Bathroom',
  region: 'other',
  locationType: 'bathroom',
  locclass: 'restroom',
  enter: enter,
};
