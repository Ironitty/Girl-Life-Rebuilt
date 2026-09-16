import { qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterSection2Party(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).stage ?? 0))) {
    (s as any).stage = ((s as any).stage ?? 0) + (1);
    qspGoto(s, 'brothel_section2', 'section2_party_start');
  } else {
    if (((s as any).stage ?? 0) === 1) {
      (s as any).stage = ((s as any).stage ?? 0) + (1);
      qspGoto(s, 'brothel_section2', 'section2_party_bound');
    } else {
      if (((s as any).stage ?? 0) === 2) {
        (s as any).stage = ((s as any).stage ?? 0) + (1);
        qspGoto(s, 'brothel_section2', 'section2_party_drugs');
      } else {
        if (((s as any).stage ?? 0) === 3) {
          (s as any).stage = ((s as any).stage ?? 0) + (1);
          qspGoto(s, 'brothel_section2', 'section2_party_effect');
        } else {
          if (((s as any).stage ?? 0) === 4) {
            (s as any).stage = ((s as any).stage ?? 0) + (1);
            qspGoto(s, 'brothel_section2', 'section2_party_fuck');
          } else {
            if (((s as any).stage ?? 0) === 5) {
              (s as any).stage = ((s as any).stage ?? 0) + (1);
              qspGoto(s, 'brothel_section2', 'section2_party_fuck2');
            } else {
              if (((s as any).stage ?? 0) === 6) {
                (s as any).stage = ((s as any).stage ?? 0) + (1);
                qspGoto(s, 'brothel_section2', 'section2_party_cum');
              } else {
                if (((s as any).stage ?? 0) === 7) {
                  (s as any).stage = ((s as any).stage ?? 0) + (1);
                  qspGoto(s, 'brothel_section2', 'section2_party_release');
                } else {
                  if (((s as any).stage ?? 0) === 8) {
                    (s as any).stage = ((s as any).stage ?? 0) + (1);
                    qspGoto(s, 'brothel_section2', 'section2_party_recover');
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSection2Bender(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).stage ?? 0))) {
    (s as any).stage = ((s as any).stage ?? 0) + (1);
    qspGoto(s, 'brothel_section2', 'section2_bender_start');
  } else {
    if (((s as any).stage ?? 0) === 1) {
      (s as any).stage = ((s as any).stage ?? 0) + (1);
      qspGoto(s, 'brothel_section2', 'section2_bender_drink');
    } else {
      if (((s as any).stage ?? 0) === 2) {
        (s as any).stage = ((s as any).stage ?? 0) + (1);
        qspGoto(s, 'brothel_section2', 'section2_bender_drink_finish');
      } else {
        if (((s as any).stage ?? 0) === 3) {
          (s as any).stage = ((s as any).stage ?? 0) + (1);
          qspGoto(s, 'brothel_section2', 'section2_bender_effect');
        } else {
          if (((s as any).stage ?? 0) === 4) {
            (s as any).stage = ((s as any).stage ?? 0) + (1);
            qspGoto(s, 'brothel_section2', 'section2_bender_fuck');
          } else {
            if (((s as any).stage ?? 0) === 5) {
              (s as any).stage = ((s as any).stage ?? 0) + (1);
              qspGoto(s, 'brothel_section2', 'section2_bender_fuck2');
            } else {
              if (((s as any).stage ?? 0) === 6) {
                (s as any).stage = ((s as any).stage ?? 0) + (1);
                qspGoto(s, 'brothel_section2', 'section2_bender_cum');
              } else {
                if (((s as any).stage ?? 0) === 7) {
                  (s as any).stage = ((s as any).stage ?? 0) + (1);
                  qspGoto(s, 'brothel_section2', 'section2_bender_leave');
                }
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'section2_party':
      enterSection2Party(s, scene);
      break;
    case 'section2_bender':
      enterSection2Bender(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const brothel_section2: LocationDef = {
  name: 'brothel_section2',
  region: 'other',
  enter: enter,
};
