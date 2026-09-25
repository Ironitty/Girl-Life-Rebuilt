import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterDanilovich(s: GameState, scene: SceneBuilder): void {
  (s as any).result = ((s as any).result ?? 0) + ('training shoe.');
  if (((s as any).ShoHeels ?? 0) <= 1) {
    (s as any).result = ((s as any).result ?? 0) + ('flat ');
  } else {
    if (((s as any).ShoHeels ?? 0) === 2) {
      (s as any).result = ((s as any).result ?? 0) + ('low heel ');
    } else {
      if (((s as any).ShoHeels ?? 0) === 3) {
        (s as any).result = ((s as any).result ?? 0) + ('mid heel ');
      } else {
        if (((s as any).ShoHeels ?? 0) === 4) {
          (s as any).result = ((s as any).result ?? 0) + ('high heel ');
        } else {
          if (((s as any).ShoHeels ?? 0) === 5) {
            (s as any).result = ((s as any).result ?? 0) + ('ultra high heel ');
          } else {
            (s as any).result = ((s as any).result ?? 0) + ('fetish heel ');
          }
        }
      }
    }
  }
  if (((s as any).ShoCut ?? 0) <= 1) {
    (s as any).result = ((s as any).result ?? 0) + ('shoe.');
  } else {
    if (((s as any).ShoCut ?? 0) === 2) {
      (s as any).result = ((s as any).result ?? 0) + ('ankle boot.');
    } else {
      if (((s as any).ShoCut ?? 0) === 3) {
        (s as any).result = ((s as any).result ?? 0) + ('calf high boot.');
      } else {
        if (((s as any).ShoCut ?? 0) === 4) {
          (s as any).result = ((s as any).result ?? 0) + ('knee high boot.');
        } else {
          if (((s as any).ShoCut ?? 0) === 5) {
            (s as any).result = ((s as any).result ?? 0) + ('thigh high boot.');
          } else {
            (s as any).result = ((s as any).result ?? 0) + ('groin high boot.');
          }
        }
      }
    }
  }
  if (((s as any).ShoStyle ?? 0) === 1) {
    (s as any).result = ((s as any).result ?? 0) + (' These shoes are considered alternative shoes.');
  }
  if (((s as any).ShoStyle2 ?? 0) === 1  ||  ((s as any).ShoStrip ?? 0) === 1) {
    (s as any).result = ((s as any).result ?? 0) + (' These shoes are considered stripper shoes.');
  } else {
    if (((s as any).ShoStyle2 ?? 0) === 2  ||  ((s as any).ShoSport ?? 0) === 1) {
      (s as any).result = ((s as any).result ?? 0) + (' These shoes are considered exercise shoes.');
    }
  }
  (s as any).temp_shoe_desc = undefined;
  if (((s as any).ShoBimbo ?? 0) === 1) {
    (s as any).temp_shoe_desc = [...((s as any).temp_shoe_desc ?? []), 'bimbo'];
  }
  if (((s as any).ShoGoth ?? 0) === 1) {
    (s as any).temp_shoe_desc = [...((s as any).temp_shoe_desc ?? []), 'goth'];
  }
  if (((s as any).ShoPunk ?? 0) === 1) {
    (s as any).temp_shoe_desc = [...((s as any).temp_shoe_desc ?? []), 'punk'];
  }
  if (Object.keys((s as any).temp_shoe_desc ?? {}).length > 0) {
    (s as any).result = ((s as any).result ?? 0) + (' These shoes are considered ');
    (s as any).result = ((s as any).result ?? 0) + (qspFunc(s, 'string', 'enumerate_list', '$temp_shoe_desc'));
    (s as any).result = ((s as any).result ?? 0) + (' shoes.');
  }
  (s as any).temp_shoe_desc = undefined;
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).ShoQuality ?? 0) <= 1) {
    (s as any).result = 'This is a crappy cheap ';
  } else {
    if (((s as any).ShoQuality ?? 0) === 2) {
      (s as any).result = 'This is a low quality ';
    } else {
      if (((s as any).ShoQuality ?? 0) === 3) {
        (s as any).result = 'This is an average quality ';
      } else {
        if (((s as any).ShoQuality ?? 0) === 4) {
          (s as any).result = 'This is a reasonable quality ';
        } else {
          if (((s as any).ShoQuality ?? 0) === 5) {
            (s as any).result = 'This is a high quality ';
          } else {
            if (((s as any).ShoQuality ?? 0) === 6) {
              (s as any).result = 'This is a very well made ';
            } else {
              (s as any).result = 'This is a beautifully made ';
            }
          }
        }
      }
    }
  }
  const arg = s.locArg;
  switch (arg) {
    case 'danilovich':
      enterDanilovich(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const _shoe_description2: LocationDef = {
  name: '_shoe_description2',
  region: 'other',
  enter: enter,
};
