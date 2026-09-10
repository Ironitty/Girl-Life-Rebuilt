import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterHourly(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'katja_meynold_schedule', '');
  if (((s as any).katjaQW ?? 0)?.['drinks'] > 0) {
    if ((((s as any).locat ?? 0)?.['katja'] > 0  &&  ((s as any).locat ?? 0)?.['katja'] < 4)  ||  (((s as any).locat ?? 0)?.['katja'] > 19  &&  ((s as any).locat ?? 0)?.['katja'] < 24)) {
      (s as any).katjaQW['drinks'] = ((s as any).katjaQW['drinks'] ?? 0) - (2);
      if (((s as any).katjaQW ?? 0)?.['drinks'] < 0) {
        (s as any).katjaQW['drinks'] = 0;
      }
    } else {
      (s as any).katjaQW['drinks'] = ((s as any).katjaQW['drinks'] ?? 0) - (Math.floor(Math.random() * 2) + 0);
    }
  }
  if (((s as any).katjaQW ?? 0)?.['under_influnece_of_cocaine'] > 0) {
    (s as any).katjaQW['under_influnece_of_cocaine'] = ((s as any).katjaQW['under_influnece_of_cocaine'] ?? 0) - (1);
  }
  if (((s as any).locat ?? 0)?.['katja'] !== 53) {
    (s as any).katjaQW['disco_loc'] = 0;
  }
  if (((s as any).katjaQW ?? 0)?.['nightclub_private_room_boy'] === 1  &&  ((s as any).katjaQW ?? 0)?.['disco_loc'] !== 7) {
    (s as any).katjaQW['nightclub_private_room_boy'] = 0;
    if ((Math.floor(Math.random() * (((s as any).katjaQW ?? 0)?.['slut']/25 - 0 + 1)) + (0)) > 0) {
      qspCall(s, 'katja_procedural', 'sex_set', 1);
    }
  }
  if (((s as any).katjaQW ?? 0)?.['nightclub_private_room_girls'] === 1  &&  ((s as any).katjaQW ?? 0)?.['disco_loc'] !== 9) {
    (s as any).katjaQW['nightclub_private_room_girls'] = 0;
    if ((Math.floor(Math.random() * (((s as any).katjaQW ?? 0)?.['slut']/25 - 0 + 1)) + (0)) > 0) {
      qspCall(s, 'katja_procedural', 'sex_set', 0, 2);
    }
  }
  scene.build();
}

function enterCikl(s: GameState, scene: SceneBuilder): void {
  if (((s as any).katjaQW ?? 0)?.['QWstage'] > 2) {
    if (((s as any).katjaQW ?? 0)?.['horny'] >= 0) {
      (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + ((((s as any).katjaQW ?? 0)?.['slut'] - ((s as any).rand ?? 0)(1, 50))/10);
    }
    if (((s as any).katjaQW ?? 0)?.['horny'] < 0) {
      (s as any).katjaQW['horny'] = 0;
    }
    if (((s as any).katjaQW ?? 0)?.['horny'] >= 100) {
      if ((Math.floor(Math.random() * 3) + 0) === 0  &&  ((s as any).week ?? 0) < 6) {
        (s as any).katjaQW['horny'] = ((s as any).max ?? 0)(((s as any).katjaQW ?? 0)?.['slut']/2, 50);
        if (((s as any).katjaQW ?? 0)?.['masturbates'] === 0) {
          (s as any).katjaQW['masturbates'] = 1;
        }
      } else {
        (s as any).katjaQW['horny'] = 100;
      }
    }
  } else {
    if (((s as any).yearstart ?? 0) > 1  &&  ((s as any).katjaQW ?? 0)?.['masturbates'] === 0  &&  (Math.floor(Math.random() * 51) + 0) === 50) {
      (s as any).katjaQW['masturbates'] = 1;
      (s as any).katjaQW['slut'] = ((s as any).katjaQW['slut'] ?? 0) + (5);
    }
  }
  if (((s as any).yearstart ?? 0) > 1  &&  ((s as any).npc_had_sex ?? 0)?.['A14']  &&  ((s as any).katjaQW ?? 0)?.['relationship_count_start'] === 0) {
    (s as any).katjaQW['relationship_count_start'] = ((s as any).daystart ?? 0);
  }
  if (((s as any).yearstart ?? 0) > 1  &&  ((s as any).katjaQW ?? 0)?.['QWstage'] >= 6  &&  ((s as any).katjaQW ?? 0)?.['birth_control_start_day'] === 0) {
    (s as any).katjaQW['birth_control_start_day'] = ((s as any).daystart ?? 0);
  }
  if (((s as any).yearstart ?? 0) > 2  &&  ((s as any).npc_had_sex ?? 0)?.['A14'] === 0  &&  ((s as any).katjaQW ?? 0)?.['liberated'] === 0) {
    (s as any).katjaQW['liberated'] = 1;
    (s as any).katjaQW['slut'] = ((s as any).katjaQW['slut'] ?? 0) + (20);
    if (((s as any).katjaQW ?? 0)?.['birth_control_start_day'] === 0) {
      (s as any).katjaQW['birth_control_start_day'] = ((s as any).daystart ?? 0);
    }
    if (((s as any).katjaQW ?? 0)?.['masturbates'] === 0) {
      (s as any).katjaQW['masturbates'] = 1;
    }
  }
  if ((((s as any).katjaQW ?? 0)?.['QWstage'] >= 6  ||  ((s as any).katjaQW ?? 0)?.['anal_quest'] >= 3)  &&  ((s as any).katjaQW ?? 0)?.['simultanous_boys'] === 0) {
    (s as any).katjaQW['simultanous_boys'] = 1;
  }
  if (((s as any).npc_had_sex ?? 0)?.['A14']  &&  ((s as any).katjaQW ?? 0)?.['simultanous_girls'] === 0) {
    (s as any).katjaQW['simultanous_girls'] = 1;
  }
  if ((((s as any).fame ?? 0)?.['pav_slut'] >= 150  ||  (((s as any).fame ?? 0)?.['city_slut'] >= 150  &&  ((s as any).yearstart ?? 0) > 1))  &&  ((s as any).stat ?? 0)?.['bj'] > 0  &&  ((s as any).katjaQW ?? 0)?.['knows_BJ'] !== 1) {
    (s as any).katjaQW['knows_BJ'] = 1;
  }
  if ((((s as any).fame ?? 0)?.['pav_slut'] >= 250  ||  (((s as any).fame ?? 0)?.['city_slut'] >= 250  &&  ((s as any).yearstart ?? 0) > 1)  ||  ((s as any).preg ?? 0) > 0)  &&  ((s as any).stat ?? 0)?.['vaginal'] > 0  &&  ((s as any).katjaQW ?? 0)?.['knows_sex'] !== 1) {
    (s as any).katjaQW['knows_sex'] = 1;
  }
  if (((s as any).katjaQW ?? 0)?.['no_panties_at_disco'] > 0) {
    (s as any).katjaQW['no_panties_at_disco'] = 0;
  }
  if (((s as any).katjaQW ?? 0)?.['slut'] > 100) {
    (s as any).katjaQW['slut'] = ((s as any).katjaQW['slut'] ?? 0) - (1);
  } else {
    if (((s as any).week ?? 0) % 2 === 0) {
      (s as any).katjaQW['slut'] = ((s as any).katjaQW['slut'] ?? 0) - (1);
    }
    if (((s as any).katjaQW ?? 0)?.['slut'] > 50) {
      if (((s as any).week ?? 0) === 1) {
        (s as any).katjaQW['slut'] = ((s as any).katjaQW['slut'] ?? 0) - (1);
      }
    }
    if (((s as any).katjaQW ?? 0)?.['slut'] > 50  &&  ((s as any).katjaQW ?? 0)?.['preference_change'] === 0) {
      (s as any).katjaQW['preference_change'] = 1;
      qspCall(s, 'npc_set_preference', 'A14', 'short_skirt', 'like');
    } else {
      (s as any).katjaQW['preference_change'] = 2;
      qspCall(s, 'npc_set_preference', 'A14', 'clothes_thin_high', 'like');
      qspCall(s, 'npc_set_preference', 'A14', 'short_skirt', 'love');
    }
    if (((s as any).katjaQW ?? 0)?.['pantiesQWstage'] > 0  &&  ((s as any).katjaQW ?? 0)?.['preference_change_pantQW'] === 0) {
      (s as any).katjaQW['preference_change_pantQW'] = 1;
      qspCall(s, 'npc_set_preference', 'A14', 'clothes_exposed_ass', 'neutral');
      qspCall(s, 'npc_set_preference', 'A14', 'clothes_exposed_bra', 'neutral');
      qspCall(s, 'npc_set_preference', 'A14', 'clothes_exposed_panties', 'neutral');
      qspCall(s, 'npc_set_preference', 'A14', 'clothes_exposed_pussy', 'dislike');
      qspCall(s, 'npc_set_preference', 'A14', 'clothes_exposed_tits', 'dislike');
    } else {
      (s as any).katjaQW['preference_change_pantQW'] = 2;
      qspCall(s, 'npc_set_preference', 'A14', 'clothes_exposed_pussy', 'neutral');
      qspCall(s, 'npc_set_preference', 'A14', 'clothes_exposed_tits', 'neutral');
    }
    if ((((s as any).katjaQW ?? 0)?.['liberated'] === 1  ||  ((s as any).katjaQW ?? 0)?.['relationship_talk'] === 1)  &&  ((s as any).katjaQW ?? 0)?.['faithful'] === 0) {
      if (((s as any).locat ?? 0)?.['katja_save2'] === 53  &&  (((s as any).katjaQW ?? 0)?.['disco_arrival'] + 600 < ((s as any).totminut ?? 0)  ||  ((s as any).katjaQW ?? 0)?.['disco_met'] + 600 < ((s as any).totminut ?? 0))) {
        if (((Math.floor(Math.random() * 15) + 1) <= (((s as any).min ?? 0)(qspFunc(s, 'katja_procedural', 'willing_to_be_naughty'), 100) - 50)/10  &&  ((s as any).katjaQW ?? 0)?.['relationship_talk'] === 1  &&  ((s as any).katjaQW ?? 0)?.['faithful'] === 0)  ||  (((s as any).katjaQW ?? 0)?.['relationship_talk'] === 0  &&  ((s as any).katjaQW ?? 0)?.['liberated']  &&  (Math.floor(Math.random() * 4) + 0) === 0)) {
          qspCall(s, 'katja_procedural', 'sex_set', ((s as any).rand ?? 0)(0, ((s as any).katjaQW ?? 0)?.['simultanous_boys'] + 1), ((s as any).rand ?? 0)(0, ((s as any).katjaQW ?? 0)?.['simultanous_girls']+1));
        }
      }
    }
    if (((s as any).katjaQW ?? 0)?.['coke_stage'] >= 5) {
      if (((s as any).locat ?? 0)?.['katja_save2'] === 53  &&  (((s as any).katjaQW ?? 0)?.['disco_arrival'] + 600 < ((s as any).totminut ?? 0)  ||  ((s as any).katjaQW ?? 0)?.['disco_met'] + 600 < ((s as any).totminut ?? 0))) {
        if ((Math.floor(Math.random() * (((s as any).katjaQW ?? 0)?.['coke_stage'] - 0 + 1)) + (0)) >= 5) {
          qspCall(s, 'katja_procedural', 'take_cocaine', 1, 1);
        }
      } else {
        if ((Math.floor(Math.random() * (((s as any).katjaQW ?? 0)?.['coke_stage'] - 2 + 1)) + (2)) >= 5) {
          qspCall(s, 'katja_procedural', 'take_cocaine', 1, 1);
        }
      }
    }
    if (((s as any).katjaQW ?? 0)?.['coke_stage'] === 1  &&  ((s as any).katjaQW ?? 0)?.['coke_point'] > 3) {
      (s as any).katjaQW['coke_stage'] = 2;
    } else {
      (s as any).katjaQW['coke_stage'] = 3;
      if (((s as any).katjaQW ?? 0)?.['coke_stage'] === 3  &&  ((s as any).katjaQW ?? 0)?.['coke_point'] > 15) {
        (s as any).katjaQW['coke_stage'] = 4;
      } else {
        if (((s as any).katjaQW ?? 0)?.['coke_point'] > 25) {
          (s as any).katjaQW['coke_stage'] = 5;
        } else {
          (s as any).katjaQW['coke_stage'] = 3;
        }
        if (((s as any).katjaQW ?? 0)?.['coke_stage'] === 5) {
          if (((s as any).katjaQW ?? 0)?.['coke_point'] > 35) {
            (s as any).katjaQW['coke_stage'] = 6;
          } else {
            (s as any).katjaQW['coke_stage'] = 5;
          }
        } else {
          if (((s as any).katjaQW ?? 0)?.['coke_point'] > 50) {
            (s as any).katjaQW['coke_stage'] = 7;
          } else {
            (s as any).katjaQW['coke_stage'] = 5;
          }
          if (((s as any).katjaQW ?? 0)?.['coke_stage'] === 7) {
            if (((s as any).katjaQW ?? 0)?.['coke_day'] + 1 < ((s as any).daystart ?? 0)  &&  (Math.floor(Math.random() * 4) + 0)=== 0) {
              qspCall(s, 'katja_procedural', 'take_cocaine', 1, 1);
            }
            if (((s as any).katjaQW ?? 0)?.['coke_point'] > 70) {
              (s as any).katjaQW['coke_stage'] = 8;
            } else {
              (s as any).katjaQW['coke_stage'] = 6;
            }
          } else {
            if (((s as any).katjaQW ?? 0)?.['coke_day'] + 1 < ((s as any).daystart ?? 0)) {
              (s as any).katjaQW['financial_strain'] = ((s as any).katjaQW['financial_strain'] ?? 0) + (Math.floor(Math.random() * 2) + 0);
              qspCall(s, 'katja_procedural', 'take_cocaine', 1, 1);
            }
            if (((s as any).katjaQW ?? 0)?.['coke_point'] < 55) {
              (s as any).katjaQW['coke_stage'] = 7;
            }
          }
          if (((s as any).katjaQW ?? 0)?.['coke_day'] + 7 < ((s as any).daystart ?? 0)  &&  ((s as any).katjaQW ?? 0)?.['coke_day_lapse'] === 1) {
            (s as any).katjaQW['coke_day_lapse'] = 0;
            (s as any).katjaQW['coke_point'] = ((s as any).katjaQW['coke_point'] ?? 0) - (1);
          }
          if (((s as any).katjaQW ?? 0)?.['coke_point'] < 0) {
            (s as any).katjaQW['coke_point'] = 0;
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
    case 'hourly':
      enterHourly(s, scene);
      break;
    case 'cikl':
      enterCikl(s, scene);
      break;
    default:
      enterHourly(s, scene);
      break;
  }
}

export const katja_procedural: LocationDef = {
  name: 'katja_procedural',
  title: '<<$npc_firstname[\'A14\']>> <<$npc_lastname[\'A14\']>>',
  region: 'other',
  enter: enter,
};
