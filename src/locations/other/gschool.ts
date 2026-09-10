// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).school_period ?? 0))) {
    if (((s as any).week ?? 0) === 1) {
      scene.text('<b>Next period</b>: Math');
    }
    if (((s as any).week ?? 0) === 2) {
      scene.text('<b>Next period</b>: English');
    }
    if (((s as any).week ?? 0) === 3) {
      scene.text('<b>Next period</b>: Math');
    }
    if (((s as any).week ?? 0) === 4) {
      scene.text('<b>Next period</b>: English');
    }
    if (((s as any).week ?? 0) === 5) {
      scene.text('<b>Next period</b>: Math');
    }
  } else {
    if (((s as any).week ?? 0) === 1) {
      scene.text('<b>Next period</b>: Russian');
    }
    if (((s as any).week ?? 0) === 2) {
      scene.text('<b>Next period</b>: Geography');
    }
    if (((s as any).week ?? 0) === 3) {
      scene.text('<b>Next period</b>: Russian');
    }
    if (((s as any).week ?? 0) === 4) {
      scene.text('<b>Next period</b>: Geography');
    }
    if (((s as any).week ?? 0) === 5) {
      scene.text('<b>Next period</b>: Russian');
    }
    if (((s as any).school_period ?? 0) === 2) {
      scene.text('<b>Next</b>: Morning break');
    } else {
      if (((s as any).week ?? 0) === 1) {
        scene.text('<b>Next period</b>: Literature');
      }
      if (((s as any).week ?? 0) === 2) {
        scene.text('<b>Next period</b>: Science');
      }
      if (((s as any).week ?? 0) === 3) {
        scene.text('<b>Next period</b>: Biology');
      }
      if (((s as any).week ?? 0) === 4) {
        scene.text('<b>Next period</b>: Science');
      }
      if (((s as any).week ?? 0) === 5) {
        scene.text('<b>Next period</b>: Literature');
      }
      if (((s as any).school_period ?? 0) === 4) {
        if (((s as any).week ?? 0) === 1) {
          scene.text('<b>Next period</b>: Art');
        }
        if (((s as any).week ?? 0) === 2) {
          scene.text('<b>Next period</b>: Shop');
        }
        if (((s as any).week ?? 0) === 3) {
          scene.text('<b>Next period</b>: History');
        }
        if (((s as any).week ?? 0) === 4) {
          scene.text('<b>Next period</b>: Shop');
        }
        if (((s as any).week ?? 0) === 5) {
          scene.text('<b>Next period</b>: Art');
        }
      } else {
        scene.text('<b>Next</b>: Lunch break');
        if (((s as any).school_period ?? 0) === 6) {
          if (((s as any).week ?? 0) === 1) {
            scene.text('<b>Next period</b>: Biology');
          }
          if (((s as any).week ?? 0) === 2) {
            scene.text('<b>Next period</b>: Computer');
          }
          if (((s as any).week ?? 0) === 3) {
            scene.text('<b>Next period</b>: Computer');
          }
          if (((s as any).week ?? 0) === 4) {
            scene.text('<b>Next period</b>: Computer');
          }
          if (((s as any).week ?? 0) === 5) {
            scene.text('<b>Next period</b>: History');
          }
        } else {
          if (((s as any).week ?? 0) === 1) {
            scene.text('<b>Next period</b>: P.E.');
          }
          if (((s as any).week ?? 0) === 2) {
            scene.text('<b>Next period</b>: Music');
          }
          if (((s as any).week ?? 0) === 3) {
            scene.text('<b>Next period</b>: P.E.');
          }
          if (((s as any).week ?? 0) === 4) {
            scene.text('<b>Next period</b>: Music');
          }
          if (((s as any).week ?? 0) === 5) {
            scene.text('<b>Next period</b>: P.E.');
          }
        }
        return;
      }
    }
  }
  scene.build();
}

export const gschool: LocationDef = {
  name: 'gschool',
  title: '<b>Next period</b>: Math',
  region: 'other',
  enter: enter,
};
