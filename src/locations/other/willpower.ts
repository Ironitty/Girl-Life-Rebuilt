import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'willpower', 'dnd');
  (s as any).will_calc = ((s as any).will_dnd ?? 0);
  qspCall(s, 'willpower', 'fetishes', ((s as any).locArgs?.[1] ?? 0));
  if (((s as any).pcs_sleep ?? 0) < 5) {
    (s as any).will_calc = ((s as any).will_calc ?? 0) + (50);
  } else {
    (s as any).will_calc = ((s as any).will_calc ?? 0) + (25);
    if (((s as any).pcs_sleep ?? 0) < 20) {
      (s as any).will_calc = ((s as any).will_calc ?? 0) + (10);
    } else {
      (s as any).will_calc = ((s as any).will_calc ?? 0) + (5);
    }
    if (((s as any).pcs_stam ?? 0) <= 0) {
      (s as any).will_calc = ((s as any).will_calc ?? 0) + (10);
    } else {
      (s as any).will_calc = ((s as any).will_calc ?? 0) + (5);
    }
    if (((s as any).pcs_energy ?? 0) < 5) {
      (s as any).will_calc = ((s as any).will_calc ?? 0) + (50);
    } else {
      (s as any).will_calc = ((s as any).will_calc ?? 0) + (25);
      if (((s as any).pcs_energy ?? 0) < 20) {
        (s as any).will_calc = ((s as any).will_calc ?? 0) + (10);
      } else {
        (s as any).will_calc = ((s as any).will_calc ?? 0) + (5);
      }
      if (((s as any).pcs_hydra ?? 0) < 5) {
        (s as any).will_calc = ((s as any).will_calc ?? 0) + (50);
      } else {
        (s as any).will_calc = ((s as any).will_calc ?? 0) + (25);
        if (((s as any).pcs_hydra ?? 0) < 20) {
          (s as any).will_calc = ((s as any).will_calc ?? 0) + (10);
        } else {
          (s as any).will_calc = ((s as any).will_calc ?? 0) + (5);
        }
        if (((s as any).pcs_mood ?? 0) < 5) {
          (s as any).will_calc = ((s as any).will_calc ?? 0) + (50);
        } else {
          (s as any).will_calc = ((s as any).will_calc ?? 0) + (25);
          if (((s as any).pcs_mood ?? 0) < 25) {
            (s as any).will_calc = ((s as any).will_calc ?? 0) + (15);
          } else {
            (s as any).will_calc = ((s as any).will_calc ?? 0) + (10);
            if (((s as any).pcs_mood ?? 0) < 50) {
              (s as any).will_calc = ((s as any).will_calc ?? 0) + (6);
            } else {
              (s as any).will_calc = ((s as any).will_calc ?? 0) + (3);
            }
            if (((s as any).Sifilis ?? 0) >= 50) {
              (s as any).will_calc = ((s as any).will_calc ?? 0) + (100);
            }
            if (((s as any).sick ?? 0) > 72) {
              (s as any).will_calc = ((s as any).will_calc ?? 0) + (35);
            } else {
              (s as any).will_calc = ((s as any).will_calc ?? 0) + (20);
              if (((s as any).sick ?? 0) > 24) {
                (s as any).will_calc = ((s as any).will_calc ?? 0) + (10);
              } else {
                (s as any).will_calc = ((s as any).will_calc ?? 0) + (5);
              }
              (s as any).will_calc = ((s as any).will_calc ?? 0) + (((s as any).pain ?? 0)?.['total']);
              (s as any).will_arousal_mod = ((s as any).max ?? 0)(-25, ((s as any).min ?? 0)((((s as any).pcs_horny ?? 0) - 50) / 2 + ((s as any).will_fetish_mod ?? 0), 25)) + ((s as any).will_fetish_mod_pref ?? 0);
              (s as any).will_succubus_mod = ((s as any).succublvl ?? 0)*25;
              return;
            }
            // TODO-QSP: "
          }
          return;
        }
        if (((s as any).locArgs?.[0] ?? 0) === 'sex'  ||  ((s as any).locArgs?.[0] ?? 0) === 'vaginal') {
          qspCall(s, 'willpower', 'calc', ((s as any).locArgs?.[3] ?? 0));
          (s as any).fetish_mod = 0;
          (s as any).fetish_count = 1;
          if (((s as any).birth_control ?? 0)?.['think_safe'] !== 1  &&  ((s as any).succubusflag ?? 0) !== 1  &&  ((s as any).cycle ?? 0) < 4  &&  (((s as any).sexcontra ?? 0) === 7  ||  ((s as any).sexcontra ?? 0) === 0)) {
            if (((s as any).cycle ?? 0) === 2) {
              (s as any).fetish_mod = qspFunc(s, 'fetish', 'get_pref', 'pregnant');
            } else {
              (s as any).fetish_mod = qspFunc(s, 'fetish', 'get_pref', 'pregnant') / 4;
            }
          }
          (s as any).fetish_mod = ((s as any).fetish_mod ?? 0) + (qspFunc(s, 'fetish', 'get_pref', 'creampie'));
          (s as any).fetish_count = ((s as any).fetish_count ?? 0) + (((qspFunc(s, 'fetish', 'get_pref', 'pregnant') > 0) ? (1) : (0)));
          (s as any).fetish_count = ((s as any).fetish_count ?? 0) + (((qspFunc(s, 'fetish', 'get_pref', 'creampie') > 0) ? (1) : (0)));
          // TODO-QSP: fetish_mod /= fetish_count
          if (((s as any).locArgs?.[1] ?? 0) === 'self') {
            if (((s as any).missCum ?? 0) >= ((s as any).timeTresh ?? 0)) {
              (s as any).will_calc = 0;
            }
            if (((s as any).stat ?? 0)?.['vaginal'] <= 90) {
              (s as any).will_cost = (100 - ((s as any).stat ?? 0)?.['vaginal'] + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).fetish_mod ?? 0) - ((s as any).will_succubus_mod ?? 0))/10;
            } else {
              (s as any).will_cost = (10 + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).fetish_mod ?? 0) - ((s as any).will_succubus_mod ?? 0))/10;
            }
          } else {
            if (((s as any).stat ?? 0)?.['vaginal'] <= 40) {
              (s as any).will_cost = (110 - ((s as any).will_enforced ?? 0) - ((s as any).stat ?? 0)?.['vaginal'] + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).fetish_mod ?? 0) - ((s as any).will_succubus_mod ?? 0)/2)/10;
            } else {
              (s as any).will_cost = (70 - ((s as any).will_enforced ?? 0) + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).fetish_mod ?? 0) - ((s as any).will_succubus_mod ?? 0)/2)/10;
            }
            if (((s as any).missCum ?? 0) >= ((s as any).timeTresh ?? 0)) {
              (s as any).will_calc = ((s as any).will_calc ?? 0) + (100);
            }
            if (((s as any).stat ?? 0)?.['vaginal'] <= 90) {
              (s as any).will_cost = (10 + ((s as any).stat ?? 0)?.['vaginal'] + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0) + ((s as any).fetish_mod ?? 0) + ((s as any).will_succubus_mod ?? 0))/10;
            } else {
              (s as any).will_cost = (100 + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0) + ((s as any).fetish_mod ?? 0) + ((s as any).will_succubus_mod ?? 0))/10;
            }
          }
          qspCall(s, 'willpower', 'difficulty', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
          return;
        }
        if (((s as any).locArgs?.[0] ?? 0) === 'gangbang'  ||  ((s as any).locArgs?.[0] ?? 0) === 'group') {
          qspCall(s, 'willpower', 'calc', ((s as any).locArgs?.[3] ?? 0));
          if (((s as any).locArgs?.[1] ?? 0) === 'self') {
            if (((s as any).missCum ?? 0) >= ((s as any).timeTresh ?? 0)) {
              (s as any).will_calc = 0;
            }
            if (((s as any).stat ?? 0)?.['gangbang_count'] <= 90) {
              (s as any).will_cost = (100 - ((s as any).stat ?? 0)?.['gangbang_count'] + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0))/10;
            } else {
              (s as any).will_cost = (10 + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0))/10;
            }
          } else {
            if (((s as any).stat ?? 0)?.['gangbang_count'] <= 40) {
              (s as any).will_cost = (160 - ((s as any).will_enforced ?? 0) * 2 - ((s as any).stat ?? 0)?.['gangbang_count'] + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0)/2)/10;
            } else {
              (s as any).will_cost = (120 - ((s as any).will_enforced ?? 0) * 2 + ((s as any).will_calc ?? 0) - ((s as any).will_arousal_mod ?? 0) - ((s as any).will_succubus_mod ?? 0)/2)/10;
            }
            if (((s as any).missCum ?? 0) >= ((s as any).timeTresh ?? 0)) {
              (s as any).will_calc = ((s as any).will_calc ?? 0) + (100);
            }
            if (((s as any).stat ?? 0)?.['gangbang_count'] <= 90) {
              (s as any).will_cost = (10 + ((s as any).stat ?? 0)?.['gangbang_count'] + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0) + ((s as any).will_succubus_mod ?? 0))/10;
            } else {
              (s as any).will_cost = (100 + ((s as any).will_calc ?? 0) + ((s as any).will_arousal_mod ?? 0) + ((s as any).will_succubus_mod ?? 0))/10;
            }
          }
          qspCall(s, 'willpower', 'difficulty', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
          return;
        }
      }
    }
  }
  scene.build();
}

export const willpower: LocationDef = {
  name: 'willpower',
  region: 'other',
  enter: enter,
};
