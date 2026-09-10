import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).grupvalue ?? 0)[1] > 450  &&  ((s as any).grupwarning ?? 0)[1] === 1) {
    (s as any).grupwarning[1] = 0;
  } else {
    (s as any).grupwarning[1] = 1;
    if (((s as any).grupvalue ?? 0)[2] > 450  &&  ((s as any).grupwarning ?? 0)[2] === 1) {
      (s as any).grupwarning[2] = 0;
    } else {
      (s as any).grupwarning[2] = 1;
      if (((s as any).grupvalue ?? 0)[3] > 450  &&  ((s as any).grupwarning ?? 0)[3] === 1) {
        (s as any).grupwarning[3] = 0;
      } else {
        (s as any).grupwarning[3] = 1;
        if (((s as any).grupvalue ?? 0)[4] > 450  &&  ((s as any).grupwarning ?? 0)[4] === 1) {
          (s as any).grupwarning[4] = 0;
        } else {
          (s as any).grupwarning[4] = 1;
        }
        if (((s as any).fame ?? 0)?.['pav_slut'] > 225  &&  ((s as any).grupTipe ?? 0) === 1) {
          scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'Pavlovsk slut'] }]);
        } else {
          scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'Pavlovsk slut'] }]);
          if (((s as any).fame ?? 0)?.['pav_slut'] > 175  &&  ((s as any).grupTipe ?? 0) === 3) {
            scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'Pavlovsk slut'] }]);
          } else {
            scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'Pavlovsk slut'] }]);
            if (((s as any).fame ?? 0)?.['pav_slut'] > 600  &&  ((s as any).grupTipe ?? 0) === 4) {
              scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'Pavlovsk slut'] }]);
            } else {
              scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'coolkid outcast'] }]);
              if (((s as any).grupvalue ?? 0)[1] < 400  &&  ((s as any).grupTipe ?? 0) === 1  &&  ((s as any).grupwarning ?? 0)[1] === 0) {
                scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'coolkid warn 1'] }]);
              } else {
                scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'coolkid warn 2'] }]);
                if (((s as any).fame ?? 0)?.['pav_slut'] > 175  &&  ((s as any).grupTipe ?? 0) === 1  &&  ((s as any).grupslutwarning ?? 0)[1] === 0) {
                  scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'coolkid slut warn'] }]);
                } else {
                  scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'jock outcast'] }]);
                  if (((s as any).grupvalue ?? 0)[2] < 400  &&  ((s as any).grupTipe ?? 0) === 2  &&  ((s as any).grupwarning ?? 0)[2] === 0) {
                    scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'jock warn 1'] }]);
                  } else {
                    scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'jock warn 2'] }]);
                    if (((s as any).fame ?? 0)?.['pav_slut'] > 200  &&  ((s as any).grupTipe ?? 0) === 2  &&  ((s as any).grupslutwarning ?? 0)[2] === 0) {
                      scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'jock slut warn'] }]);
                    } else {
                      scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'nerd outcast'] }]);
                      if (((s as any).grupvalue ?? 0)[3] < 400  &&  ((s as any).grupTipe ?? 0) === 3  &&  ((s as any).grupwarning ?? 0)[3] === 0) {
                        scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'nerd warn 1'] }]);
                      } else {
                        scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'nerd warn 2'] }]);
                        if (((s as any).fame ?? 0)?.['pav_slut'] > 125  &&  ((s as any).grupTipe ?? 0) === 3  &&  ((s as any).grupslutwarning ?? 0)[3] === 0) {
                          scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'nerd slut warn'] }]);
                        } else {
                          scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'gopnik outcast'] }]);
                          if (((s as any).grupvalue ?? 0)[4] < 400  &&  ((s as any).grupTipe ?? 0) === 4  &&  ((s as any).grupwarning ?? 0)[4] === 0) {
                            scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'gopnik warn 1'] }]);
                          } else {
                            scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'gopnik warn 2'] }]);
                            if (((s as any).fame ?? 0)?.['pav_slut'] > 250  &&  ((s as any).grupTipe ?? 0) === 4  &&  ((s as any).grupslutwarning ?? 0)[4] === 0  &&  ((s as any).gopnik_slut ?? 0) !== 1) {
                              scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'gopnik slut warn'] }]);
                            } else {
                              scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'gopnik slut warn'] }]);
                              if (((s as any).fame ?? 0)?.['pav_slut'] < 175  &&  ((s as any).grupvalue ?? 0)[1] > 800  &&  ((s as any).grupTipe ?? 0) !== 1) {
                                scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'coolkid'] }]);
                              } else {
                                scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'jock'] }]);
                                if (((s as any).fame ?? 0)?.['pav_slut'] < 125  &&  ((s as any).grupvalue ?? 0)[3] > 800  &&  ((s as any).grupTipe ?? 0) !== 3) {
                                  scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'nerd'] }]);
                                } else {
                                  scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'gopnik'] }]);
                                }
                                if (((s as any).gopnik_initiation ?? 0) === 1  &&  ((s as any).gopnik_initiation_day ?? 0) !== ((s as any).daystart ?? 0)) {
                                  qspCall(s, 'calendar', 'remove', 'gopnik_initiation_event');
                                  scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'gopnik miss'] }]);
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
  scene.build();
}

export const gschool_socialchg: LocationDef = {
  name: 'gschool_socialchg',
  title: 'School Hall',
  region: 'other',
  enter: enter,
};
