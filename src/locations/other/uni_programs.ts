// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterGetProgramName(s: GameState, scene: SceneBuilder): void {
  if (((s as any).university ?? 0)?.['enrolled_in'] === 'nursing') {
  }
  return;
  scene.build();
}

function enterProgramName(s: GameState, scene: SceneBuilder): void {
  return;
  scene.build();
}

function enterGetFirstPeriod(s: GameState, scene: SceneBuilder): void {
  if (((s as any).university ?? 0)?.['enrolled_in'] === 'nursing') {
  }
  return;
  scene.build();
}

function enterGetFirstPeriodNursing(s: GameState, scene: SceneBuilder): void {
  if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 1) {
    if (((s as any).locArgs?.[1] ?? 0) === 'monday') {
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'wednesday') {
      }
      if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 2) {
        if (((s as any).locArgs?.[1] ?? 0) === 'monday') {
        } else {
          if (((s as any).locArgs?.[1] ?? 0) === 'wednesday') {
          }
          if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 3) {
            if (((s as any).locArgs?.[1] ?? 0) === 'monday') {
            } else {
              if (((s as any).locArgs?.[1] ?? 0) === 'wednesday') {
              }
              if (((s as any).university ?? 0)?.['enrolled_in_semester'] === 4) {
                if (((s as any).locArgs?.[1] ?? 0) === 'monday') {
                } else {
                  if (((s as any).locArgs?.[1] ?? 0) === 'wednesday') {
                  }
                }
                return;
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'get_program_name':
      enterGetProgramName(s, scene);
      break;
    case 'program_name':
      enterProgramName(s, scene);
      break;
    case 'get_first_period':
      enterGetFirstPeriod(s, scene);
      break;
    case 'get_first_period_nursing':
      enterGetFirstPeriodNursing(s, scene);
      break;
    default:
      enterGetProgramName(s, scene);
      break;
  }
}

export const uni_programs: LocationDef = {
  name: 'uni_programs',
  region: 'other',
  enter: enter,
};
