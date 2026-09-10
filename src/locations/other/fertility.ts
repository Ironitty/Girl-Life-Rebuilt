import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).daystart ?? 0) <= ((s as any).tabletkichday ?? 0)) {
    // TODO-QSP: exit
  }
  (s as any).tabletkichday = ((s as any).daystart ?? 0);
  (s as any).tabletkipd = ((s as any).tabletkipd ?? 0) + (((s as any).tabletkipi ?? 0));
  (s as any).tabletkipi = 0;
  (s as any).tabletkipt = 0;
  if (((s as any).tabletkicheck ?? 0) === 1) {
    if (((s as any).mc_inventory ?? 0)?.['contraceptive_pill'] === 0  &&  ((s as any).pillsleft ?? 0)?.[String((s as any).ptype ?? 0)] === 0) {
      (s as any).tabletkicheck = 0;
      qspCall(s, 'notification', 'add', '<<$temp_img>>You are out of birth control pills.');
      (s as any).tabletkipi = (-5);
      // TODO-QSP: jump 'auto_pill_break_goto'
    } else {
      qspCall(s, 'notification', 'add', '<<$temp_img>>You have just opened your last package of birth control pills. You need to buy more.');
      if (((s as any).mc_inventory ?? 0)?.['contraceptive_pill'] === 0  &&  ((s as any).pillsleft ?? 0)?.[String((s as any).ptype ?? 0)] <= 5) {
        qspCall(s, 'notification', 'add', '<<$temp_img>>You are running out of birth control pills, you only have a few left.');
      }
      (s as any).birth_control['using_bc'] = 3;
      (s as any).tabletkimm = (100 * (((s as any).pcs_willpwr ?? 0) / ((s as any).willpowermax ?? 0))) + ((s as any).pcs_mood ?? 0);
      if (((s as any).pcs_sleep ?? 0) < 10) {
        (s as any).tabletkimm = ((s as any).tabletkimm ?? 0) - ((100 - (((s as any).pcs_sleep ?? 0) * 10)));
      }
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).willpowermax ?? 0) / 4) {
        (s as any).tabletkimm = ((s as any).tabletkimm ?? 0) / 4;
      } else {
        (s as any).tabletkimm = ((s as any).tabletkimm ?? 0) / 2;
      }
      (s as any).tabletkiap = ((s as any).tabletkimm ?? 0);
      (s as any).tabletkiap = ((s as any).tabletkiap ?? 0) + ((((s as any).pcs_intel ?? 0) * 4) + (((s as any).pcs_sprt ?? 0) * 2) + (((s as any).age ?? 0) * 3));
      (s as any).tabletkiap = ((s as any).tabletkiap ?? 0) - (((((s as any).kid ?? 0) * 30) + (((s as any).abort ?? 0) * 2) - (((s as any).tabletkipd ?? 0) * ((60 - ((s as any).age ?? 0)) / 10))));
      (s as any).temprand = ((s as any).rand ?? 0)(0, (200 + (((s as any).tabletkimm ?? 0) - ((100 - ((s as any).pcs_sprt ?? 0)) * 3))));
      (s as any).tabletkiap = ((s as any).tabletkiap ?? 0) + (((s as any).temprand ?? 0));
      if (((s as any).tabletkiap ?? 0) < 300) {
        if (((s as any).tabletkipd ?? 0) > -10) {
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).willpowermax ?? 0) / 4) {
            qspCall(s, 'notification', 'add', '<<$temp_img>>You stare at your package of birth control pills, you know you should take one but you can\'t quite work up enough effort to care.');
          } else {
            qspCall(s, 'notification', 'add', '<<$temp_img>>You stare at your package of birth control pills, but you don\'t open it.');
            if (((s as any).pcs_sleep ?? 0) < 10) {
              qspCall(s, 'notification', 'add', '<<$temp_img>>You fumble with your birth control pills, trying to get a pill out. You finally give up too tired to manage it.');
            } else {
              qspCall(s, 'notification', 'add', '<<$temp_img>>You just realized you forgot to take your birth control pill today.');
            }
          }
          (s as any).tabletkipt = 2;
          (s as any).tabletkipi = (-4);
        } else {
          if (((s as any).tabletkiap ?? 0) < 350) {
            (s as any).temprand = Math.floor(Math.random() * 6) + 0;
          } else {
            (s as any).temprand = Math.floor(Math.random() * 1001) + 0;
          }
          if (((s as any).temprand ?? 0) === 0) {
            (s as any).temprand = Math.floor(Math.random() * 2) + 0;
            if (((s as any).temprand ?? 0) === 0) {
              qspCall(s, 'din_bad', 'takepill');
              (s as any).tabletkipt = (-2);
              (s as any).tabletkipi = 1;
            } else {
              (s as any).tabletkipt = 3;
              (s as any).tabletkipi = (-3);
            }
            if (((s as any).tabletkipd ?? 0) > -10) {
              qspCall(s, 'notification', 'add', '<<$temp_img>>You find yourself holding the bottle of birth control pills, you cannot remember if you took one or not.');
            }
            if (((s as any).tabletkipd ?? 0) > 0) {
              if (Math.floor(Math.random() * 10) + 0 === 0) {
                if (((s as any).tabletkipt ?? 0) < 0) {
                  qspCall(s, 'notification', 'add', '<<$temp_img>>You don\'t think you have taken your pill today.');
                } else {
                  (s as any).pilldaychk = ((s as any).daystart ?? 0);
                  qspCall(s, 'notification', 'add', '<<$temp_img>>You think you have taken your pill today.');
                }
              } else {
                if (((s as any).tabletkipt ?? 0) > 0) {
                  qspCall(s, 'notification', 'add', '<<$temp_img>>You don\'t think you have taken your pill today.');
                } else {
                  (s as any).pilldaychk = ((s as any).daystart ?? 0);
                  qspCall(s, 'notification', 'add', '<<$temp_img>>You think you have taken your pill today.');
                }
              }
            }
          } else {
            if (((s as any).droutine ?? 0)?.['active'] === 0) {
              qspCall(s, 'notification', 'add', '<<$temp_img>>You take your birth control pill for the day.');
            }
            (s as any).pilldaychk = ((s as any).daystart ?? 0);
            qspCall(s, 'din_bad', 'takepill');
            if (Math.floor(Math.random() * 8) + 0 === 0  &&  ((s as any).tabletkiday ?? 0) >= (((s as any).daystart ?? 0) - 1)) {
              (s as any).tabletkipd = ((s as any).tabletkipd ?? 0) + (1);
            }
            (s as any).tabletkiday = ((s as any).daystart ?? 0);
            (s as any).tabletkipt = 0;
            (s as any).tabletkipi = 0;
          }
        }
      }
      if (((s as any).birth_control ?? 0)?.['using_bc'] > 0) {
        if (((s as any).pilldaychk ?? 0) === ((s as any).daystart ?? 0)) {
          (s as any).pilldays = ((s as any).pilldays ?? 0) + (1);
          (s as any).birth_control['using_bc'] = 3;
        } else {
          (s as any).pilldays = ((s as any).pilldays ?? 0) - (1);
          if (((s as any).placebopart ?? 0) <= 0) {
            (s as any).birth_control['using_bc'] = ((s as any).birth_control['using_bc'] ?? 0) - (1);
          }
        }
      }
      if (((s as any).pilldays ?? 0) > 18) {
        (s as any).pilldays = 18;
      }
      if (((s as any).pilldays ?? 0) < 0) {
        (s as any).pilldays = 0;
      }
      if (((s as any).birth_control ?? 0)?.['using_bc'] < 0) {
        (s as any).pilldays = 0;
      }
      if (((s as any).tabletkiday ?? 0) < ((s as any).daystart ?? 0) - 5) {
        (s as any).birth_control['using_bc'] = 0;
      }
      if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
        (s as any).stat['forgot_bc_pill'] = 0;
      } else {
        (s as any).stat['forget_bc_count'] = ((s as any).stat['forget_bc_count'] ?? 0) + (1);
      }
      qspCall(s, 'fertility', 'birth_control_status_update');
      // TODO-QSP: :auto_pill_break_goto
    }
  }
  scene.build();
}

export const fertility: LocationDef = {
  name: 'fertility',
  region: 'other',
  enter: enter,
};
