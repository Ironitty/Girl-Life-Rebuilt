import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A248');
    (s as any).slyQW['sex_stam'] = ((s as any).slyQW['sex_stam'] ?? 0) + (1);
    (s as any).pursepantynumber = ((s as any).pantywornnumber ?? 0);
    (s as any).pursebranumber = ((s as any).brawornnumber ?? 0);
    qspCall(s, 'clothing', 'strip');
    qspCall(s, 'underwear', 'remove');
    if (((s as any).slyQW ?? 0)?.['Chris_peek_daystart'] !== ((s as any).daystart ?? 0)) {
      (s as any).slyQW['Chris_peek_daystart'] = ((s as any).daystart ?? 0);
      if (((s as any).slyQW ?? 0)?.['Chris_caught'] < 5) {
        if ((Math.floor(Math.random() * 4) + 1) === 1) {
          (s as any).slyQW['Chris_caught'] = ((s as any).slyQW['Chris_caught'] ?? 0) + (1);
          (s as any).slyQW['Chris_peeking'] = 1;
        }
      } else {
        if ((Math.floor(Math.random() * 2) + 1) === 1) {
          (s as any).slyQW['Chris_caught'] = ((s as any).slyQW['Chris_caught'] ?? 0) + (1);
          (s as any).slyQW['Chris_peeking'] = 1;
        }
        if (((s as any).slyQW ?? 0)?.['Chris_caught'] === 10  &&  ((s as any).christinaQW ?? 0)?.['subpath'] >= 6) {
          if (((s as any).christinaQW ?? 0)?.['subpath'] === 6) {
            (s as any).christinaQW['subpath'] = 7;
          }
          (s as any).slyQW['Chris_peeking'] = 1;
        }
      }
      if (((s as any).slyQW ?? 0)?.['sex_stam'] < 6) {
        // TODO-QSP: :sly_loop
        (s as any).slyQW['sex_act'] = Math.floor(Math.random() * 8) + 1;
        if (((s as any).slyQW ?? 0)?.['sex_act'] === 1  &&  ((s as any).slyQW ?? 0)?.['foreplay'] !== ((s as any).daystart ?? 0)) {
          (s as any).slyQW['foreplay'] = ((s as any).daystart ?? 0);
          scene.actions([{ label: 'Continue', goto: ['Zvereva_Sly_sex', 'hj_1'] }]);
        } else {
          (s as any).slyQW['foreplay'] = ((s as any).daystart ?? 0);
          scene.actions([{ label: 'Continue', goto: ['Zvereva_Sly_sex', 'bj_1'] }]);
          if (((s as any).slyQW ?? 0)?.['sex_act'] === 3  &&  ((s as any).slyQW ?? 0)?.['virgin'] !== 2) {
            (s as any).slyQW['foreplay'] = ((s as any).daystart ?? 0);
            scene.actions([{ label: 'Continue', goto: ['Zvereva_Sly_sex', 'vag_cow_1'] }]);
          } else {
            (s as any).slyQW['foreplay'] = ((s as any).daystart ?? 0);
            scene.actions([{ label: 'Continue', goto: ['Zvereva_Sly_sex', 'vag_doggy_1'] }]);
            if (((s as any).slyQW ?? 0)?.['sex_act'] === 5  &&  ((s as any).slyQW ?? 0)?.['virgin'] !== 2) {
              (s as any).slyQW['foreplay'] = ((s as any).daystart ?? 0);
              scene.actions([{ label: 'Continue', goto: ['Zvereva_Sly_sex', 'vag_stomach_1'] }]);
            } else {
              (s as any).slyQW['foreplay'] = ((s as any).daystart ?? 0);
              scene.actions([{ label: 'Continue', goto: ['Zvereva_Sly_sex', 'anal_doggy_1'] }]);
              if (((s as any).slyQW ?? 0)?.['sex_act'] === 7) {
                (s as any).slyQW['foreplay'] = ((s as any).daystart ?? 0);
                scene.actions([{ label: 'Continue', goto: ['Zvereva_Sly_sex', 'anal_stomach_1'] }]);
              } else {
                (s as any).slyQW['foreplay'] = ((s as any).daystart ?? 0);
                scene.actions([{ label: 'Continue', goto: ['Zvereva_Sly_sex', 'anal_piledriver_1'] }]);
                // TODO-QSP: jump 'sly_loop'
              }
              scene.actions([{ label: 'Continue', goto: ['Zvereva_Sly_sex', 'cum_decide'] }]);
            }
          }
        }
      }
    }
  } },
  ]);
  scene.build();
}

export const Zvereva_Sly_sex: LocationDef = {
  name: 'Zvereva_Sly_sex',
  region: 'other',
  enter: enter,
};
