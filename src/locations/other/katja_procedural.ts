import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterHourly(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'katja_meynold_schedule', '');
  if (((s as any).katjaQW ?? 0)?.['drinks'] > 0) {
    if ((((s as any).locat ?? 0)?.['katja'] > 0  &&  ((s as any).locat ?? 0)?.['katja'] < 4)  ||  (((s as any).locat ?? 0)?.['katja'] > 19  &&  ((s as any).locat ?? 0)?.['katja'] < 24)) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['drinks'] = ((s as any).katjaQW['drinks'] ?? 0) - (2);
      if (((s as any).katjaQW ?? 0)?.['drinks'] < 0) {
        ((s as any).katjaQW = (s as any).katjaQW ?? {})['drinks'] = 0;
      }
    } else {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['drinks'] = ((s as any).katjaQW['drinks'] ?? 0) - ((Math.floor(Math.random() * 2) + 0));
    }
  }
  if (((s as any).katjaQW ?? 0)?.['under_influnece_of_cocaine'] > 0) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['under_influnece_of_cocaine'] = ((s as any).katjaQW['under_influnece_of_cocaine'] ?? 0) - (1);
  }
  if (((s as any).locat ?? 0)?.['katja'] !== 53) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['disco_loc'] = 0;
  }
  if (((s as any).katjaQW ?? 0)?.['nightclub_private_room_boy'] === 1  &&  ((s as any).katjaQW ?? 0)?.['disco_loc'] !== 7) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['nightclub_private_room_boy'] = 0;
    if ((Math.floor(Math.random() * (((s as any).katjaQW ?? 0)?.['slut']/25 - 0 + 1)) + (0)) > 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 1]; enterSexSet(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  if (((s as any).katjaQW ?? 0)?.['nightclub_private_room_girls'] === 1  &&  ((s as any).katjaQW ?? 0)?.['disco_loc'] !== 9) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['nightclub_private_room_girls'] = 0;
    if ((Math.floor(Math.random() * (((s as any).katjaQW ?? 0)?.['slut']/25 - 0 + 1)) + (0)) > 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 0, 2]; enterSexSet(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCikl(s: GameState, scene: SceneBuilder): void {
  if (((s as any).katjaQW ?? 0)?.['QWstage'] > 2) {
    if (((s as any).katjaQW ?? 0)?.['horny'] >= 0) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (((((s as any).katjaQW ?? {})?.['slut'] ?? 0) - (Math.floor(Math.random() * 50) + 1))/10);
    }
    if (((s as any).katjaQW ?? 0)?.['horny'] < 0) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = 0;
    }
    if (((s as any).katjaQW ?? 0)?.['horny'] >= 100) {
      if ((Math.floor(Math.random() * 3) + 0) === 0  &&  ((s as any).week ?? 0) < 6) {
        ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = Math.max((((s as any).katjaQW ?? {})?.['slut'] ?? 0)/2, 50);
        if (((s as any).katjaQW ?? 0)?.['masturbates'] === 0) {
          ((s as any).katjaQW = (s as any).katjaQW ?? {})['masturbates'] = 1;
        }
      } else {
        ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = 100;
      }
    }
  } else {
    if (((s as any).yearstart ?? 0) > 1  &&  ((s as any).katjaQW ?? 0)?.['masturbates'] === 0  &&  (Math.floor(Math.random() * 51) + 0) === 50) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['masturbates'] = 1;
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['slut'] = ((s as any).katjaQW['slut'] ?? 0) + (5);
    }
  }
  if (((s as any).yearstart ?? 0) > 1  &&  ((s as any).npc_had_sex ?? 0)?.['A14']  &&  ((s as any).katjaQW ?? 0)?.['relationship_count_start'] === 0) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['relationship_count_start'] = ((s as any).daystart ?? 0);
  }
  if (((s as any).yearstart ?? 0) > 1  &&  ((s as any).katjaQW ?? 0)?.['QWstage'] >= 6  &&  ((s as any).katjaQW ?? 0)?.['birth_control_start_day'] === 0) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['birth_control_start_day'] = ((s as any).daystart ?? 0);
  }
  if (((s as any).yearstart ?? 0) > 2  &&  ((s as any).npc_had_sex ?? 0)?.['A14'] === 0  &&  ((s as any).katjaQW ?? 0)?.['liberated'] === 0) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['liberated'] = 1;
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['slut'] = ((s as any).katjaQW['slut'] ?? 0) + (20);
    if (((s as any).katjaQW ?? 0)?.['birth_control_start_day'] === 0) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['birth_control_start_day'] = ((s as any).daystart ?? 0);
    }
    if (((s as any).katjaQW ?? 0)?.['masturbates'] === 0) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['masturbates'] = 1;
    }
  }
  if ((((s as any).katjaQW ?? 0)?.['QWstage'] >= 6  ||  ((s as any).katjaQW ?? 0)?.['anal_quest'] >= 3)  &&  ((s as any).katjaQW ?? 0)?.['simultanous_boys'] === 0) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['simultanous_boys'] = 1;
  }
  if (((s as any).npc_had_sex ?? 0)?.['A14']  &&  ((s as any).katjaQW ?? 0)?.['simultanous_girls'] === 0) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['simultanous_girls'] = 1;
  }
  if ((((s as any).fame ?? 0)?.['pav_slut'] >= 150  ||  (((s as any).fame ?? 0)?.['city_slut'] >= 150  &&  ((s as any).yearstart ?? 0) > 1))  &&  ((s as any).stat ?? 0)?.['bj'] > 0  &&  ((s as any).katjaQW ?? 0)?.['knows_BJ'] !== 1) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['knows_BJ'] = 1;
  }
  if ((((s as any).fame ?? 0)?.['pav_slut'] >= 250  ||  (((s as any).fame ?? 0)?.['city_slut'] >= 250  &&  ((s as any).yearstart ?? 0) > 1)  ||  ((s as any).preg ?? 0) > 0)  &&  ((s as any).stat ?? 0)?.['vaginal'] > 0  &&  ((s as any).katjaQW ?? 0)?.['knows_sex'] !== 1) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['knows_sex'] = 1;
  }
  if (((s as any).katjaQW ?? 0)?.['no_panties_at_disco'] > 0) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['no_panties_at_disco'] = 0;
  }
  if (((s as any).katjaQW ?? 0)?.['slut'] > 100) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['slut'] = ((s as any).katjaQW['slut'] ?? 0) - (1);
  } else {
    if (((s as any).katjaQW ?? 0)?.['slut'] > 80) {
      if (((s as any).week ?? 0) % 2 === 0) {
        ((s as any).katjaQW = (s as any).katjaQW ?? {})['slut'] = ((s as any).katjaQW['slut'] ?? 0) - (1);
      }
    } else {
      if (((s as any).katjaQW ?? 0)?.['slut'] > 50) {
        if (((s as any).week ?? 0) === 1) {
          ((s as any).katjaQW = (s as any).katjaQW ?? {})['slut'] = ((s as any).katjaQW['slut'] ?? 0) - (1);
        }
      }
    }
  }
  if (((s as any).katjaQW ?? 0)?.['slut'] > 50  &&  ((s as any).katjaQW ?? 0)?.['preference_change'] === 0) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['preference_change'] = 1;
    qspCall(s, 'npc_set_preference', 'A14', 'short_skirt', 'like');
  } else {
    if (((s as any).katjaQW ?? 0)?.['slut'] > 100  &&  ((s as any).katjaQW ?? 0)?.['preference_change'] === 1) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['preference_change'] = 2;
      qspCall(s, 'npc_set_preference', 'A14', 'clothes_thin_high', 'like');
      qspCall(s, 'npc_set_preference', 'A14', 'short_skirt', 'love');
    }
  }
  if (((s as any).katjaQW ?? 0)?.['pantiesQWstage'] > 0  &&  ((s as any).katjaQW ?? 0)?.['preference_change_pantQW'] === 0) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['preference_change_pantQW'] = 1;
    qspCall(s, 'npc_set_preference', 'A14', 'clothes_exposed_ass', 'neutral');
    qspCall(s, 'npc_set_preference', 'A14', 'clothes_exposed_bra', 'neutral');
    qspCall(s, 'npc_set_preference', 'A14', 'clothes_exposed_panties', 'neutral');
    qspCall(s, 'npc_set_preference', 'A14', 'clothes_exposed_pussy', 'dislike');
    qspCall(s, 'npc_set_preference', 'A14', 'clothes_exposed_tits', 'dislike');
  } else {
    if (((s as any).katjaQW ?? 0)?.['pantiesQWstage'] > 4  &&  ((s as any).katjaQW ?? 0)?.['preference_change_pantQW'] === 1) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['preference_change_pantQW'] = 2;
      qspCall(s, 'npc_set_preference', 'A14', 'clothes_exposed_pussy', 'neutral');
      qspCall(s, 'npc_set_preference', 'A14', 'clothes_exposed_tits', 'neutral');
    }
  }
  if ((((s as any).katjaQW ?? 0)?.['liberated'] === 1  ||  ((s as any).katjaQW ?? 0)?.['relationship_talk'] === 1)  &&  ((s as any).katjaQW ?? 0)?.['faithful'] === 0) {
    if (((s as any).locat ?? 0)?.['katja_save2'] === 53  &&  (((s as any).katjaQW ?? 0)?.['disco_arrival'] + 600 < ((s as any).totminut ?? 0)  ||  ((s as any).katjaQW ?? 0)?.['disco_met'] + 600 < ((s as any).totminut ?? 0))) {
      if (((Math.floor(Math.random() * 15) + 1) <= (Math.min(qspFunc(s, 'katja_procedural', 'willing_to_be_naughty'), 100) - 50)/10  &&  ((s as any).katjaQW ?? 0)?.['relationship_talk'] === 1  &&  ((s as any).katjaQW ?? 0)?.['faithful'] === 0)  ||  (((s as any).katjaQW ?? 0)?.['relationship_talk'] === 0  &&  ((s as any).katjaQW ?? 0)?.['liberated']  &&  (Math.floor(Math.random() * 4) + 0) === 0)) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', (Math.floor(Math.random() * ((((s as any).katjaQW ?? {})?.['simultanous_boys'] ?? 0) + 1 - 0 + 1)) + (0)), (Math.floor(Math.random() * ((((s as any).katjaQW ?? {})?.['simultanous_girls'] ?? 0)+1 - 0 + 1)) + (0))]; enterSexSet(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    }
  }
  if (((s as any).katjaQW ?? 0)?.['coke_stage'] >= 5) {
    if (((s as any).locat ?? 0)?.['katja_save2'] === 53  &&  (((s as any).katjaQW ?? 0)?.['disco_arrival'] + 600 < ((s as any).totminut ?? 0)  ||  ((s as any).katjaQW ?? 0)?.['disco_met'] + 600 < ((s as any).totminut ?? 0))) {
      if ((Math.floor(Math.random() * (((s as any).katjaQW ?? 0)?.['coke_stage'] - 0 + 1)) + (0)) >= 5) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 1, 1]; enterTakeCocaine(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    } else {
      if (((s as any).katjaQW ?? 0)?.['alone_with_other_day'] >= ((s as any).daystart ?? 0) -1) {
        if ((Math.floor(Math.random() * (((s as any).katjaQW ?? 0)?.['coke_stage'] - 2 + 1)) + (2)) >= 5) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 1, 1]; enterTakeCocaine(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      }
    }
  }
  if (((s as any).katjaQW ?? 0)?.['coke_stage'] === 1  &&  ((s as any).katjaQW ?? 0)?.['coke_point'] > 3) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['coke_stage'] = 2;
  } else {
    if (((s as any).katjaQW ?? 0)?.['coke_stage'] === 2  &&  ((s as any).katjaQW ?? 0)?.['coke_point'] > 8) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['coke_stage'] = 3;
    } else {
      if (((s as any).katjaQW ?? 0)?.['coke_stage'] === 3  &&  ((s as any).katjaQW ?? 0)?.['coke_point'] > 15) {
        ((s as any).katjaQW = (s as any).katjaQW ?? {})['coke_stage'] = 4;
      } else {
        if (((s as any).katjaQW ?? 0)?.['coke_stage'] === 4) {
          if (((s as any).katjaQW ?? 0)?.['coke_point'] > 25) {
            ((s as any).katjaQW = (s as any).katjaQW ?? {})['coke_stage'] = 5;
          } else {
            if (((s as any).katjaQW ?? 0)?.['coke_point'] < 8) {
              ((s as any).katjaQW = (s as any).katjaQW ?? {})['coke_stage'] = 3;
            }
          }
        } else {
          if (((s as any).katjaQW ?? 0)?.['coke_stage'] === 5) {
            if (((s as any).katjaQW ?? 0)?.['coke_point'] > 35) {
              ((s as any).katjaQW = (s as any).katjaQW ?? {})['coke_stage'] = 6;
            } else {
              if (((s as any).katjaQW ?? 0)?.['coke_point'] < 25) {
                ((s as any).katjaQW = (s as any).katjaQW ?? {})['coke_stage'] = 5;
              }
            }
          } else {
            if (((s as any).katjaQW ?? 0)?.['coke_stage'] === 6) {
              if (((s as any).katjaQW ?? 0)?.['coke_point'] > 50) {
                ((s as any).katjaQW = (s as any).katjaQW ?? {})['coke_stage'] = 7;
              } else {
                if (((s as any).katjaQW ?? 0)?.['coke_point'] < 35) {
                  ((s as any).katjaQW = (s as any).katjaQW ?? {})['coke_stage'] = 5;
                }
              }
            } else {
              if (((s as any).katjaQW ?? 0)?.['coke_stage'] === 7) {
                if (((s as any).katjaQW ?? 0)?.['coke_day'] + 1 < ((s as any).daystart ?? 0)  &&  (Math.floor(Math.random() * 4) + 0)=== 0) {
                  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 1, 1]; enterTakeCocaine(s, scene); (s as any).locArgs = __savedLocArgs; }
                }
                if (((s as any).katjaQW ?? 0)?.['coke_point'] > 70) {
                  ((s as any).katjaQW = (s as any).katjaQW ?? {})['coke_stage'] = 8;
                } else {
                  if (((s as any).katjaQW ?? 0)?.['coke_point'] < 45) {
                    ((s as any).katjaQW = (s as any).katjaQW ?? {})['coke_stage'] = 6;
                  }
                }
              } else {
                if (((s as any).katjaQW ?? 0)?.['coke_stage'] === 8) {
                  if (((s as any).katjaQW ?? 0)?.['coke_day'] + 1 < ((s as any).daystart ?? 0)) {
                    ((s as any).katjaQW = (s as any).katjaQW ?? {})['financial_strain'] = ((s as any).katjaQW['financial_strain'] ?? 0) + ((Math.floor(Math.random() * 2) + 0));
                    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 1, 1]; enterTakeCocaine(s, scene); (s as any).locArgs = __savedLocArgs; }
                  }
                  if (((s as any).katjaQW ?? 0)?.['coke_point'] < 55) {
                    ((s as any).katjaQW = (s as any).katjaQW ?? {})['coke_stage'] = 7;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).katjaQW ?? 0)?.['coke_day'] + 7 < ((s as any).daystart ?? 0)  &&  ((s as any).katjaQW ?? 0)?.['coke_day_lapse'] === 1) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['coke_day_lapse'] = 0;
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['coke_point'] = ((s as any).katjaQW['coke_point'] ?? 0) - (1);
  }
  if (((s as any).katjaQW ?? 0)?.['coke_point'] < 0) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['coke_point'] = 0;
  }
  // TODO-QSP: end
  scene.build();
}

function enterFaceColor(s: GameState, scene: SceneBuilder): void {
  if (((s as any).katjaQW ?? 0)?.['QWstage'] <= 2) {
    if (Number((s as any).locArgs?.[1] ?? 0) === 'func') {
      (s as any).result = 'Katja looks at you with a smile.';
    } else {
      scene.text('Katja looks at you with a smile.');
    }
  } else {
    if (((s as any).katjaQW ?? 0)?.['horny'] < 20) {
      if (Number((s as any).locArgs?.[1] ?? 0) === 'func') {
        (s as any).result = 'Katja looks calm and stoic.';
      } else {
        scene.text('Katja looks calm and stoic.');
      }
    } else {
      if (((s as any).katjaQW ?? 0)?.['horny'] < 40) {
        if (Number((s as any).locArgs?.[1] ?? 0) === 'func') {
          (s as any).result = 'Katja looks at you with a naughty twinkle in her eyes.';
        } else {
          scene.text('Katja looks at you with a naughty twinkle in her eyes.');
        }
      } else {
        if (((s as any).katjaQW ?? 0)?.['horny'] < 60) {
          if (Number((s as any).locArgs?.[1] ?? 0) === 'func') {
            (s as any).result = 'Katja looks at you, a faint blush on her cheeks as she smiles at you mischievously.';
          } else {
            scene.text('Katja looks at you, a faint blush on her cheeks as she smiles at you mischievously.');
          }
        } else {
          if (((s as any).katjaQW ?? 0)?.['horny'] < 80) {
            if (Number((s as any).locArgs?.[1] ?? 0) === 'func') {
              (s as any).result = 'Katja is blushing fairly obviously and looks at you longingly.';
            } else {
              scene.text('Katja is blushing fairly obviously and looks at you longingly.');
            }
          } else {
            if (Number((s as any).locArgs?.[1] ?? 0) === 'func') {
              (s as any).result = 'Katja\'s face is flushed bright red and her chest is heaving from her heavy breathing. She\'s idly rubbing her thighs against one another.';
            } else {
              scene.text('Katja\'s face is flushed bright red and her chest is heaving from her heavy breathing. She\'s idly rubbing her thighs against one another.');
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMakeup(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: Katja looks at you with a smile. "<<$pcs_nickname>>, I bet you would look great ...
  scene.text(`Katja looks at you with a smile. "${((s as any).pcs_nickname ?? '')}, I bet you would look great with a little make-up on you! What do you say?"`);
  (s as any).temp_loc = ((s as any).locArgs?.[1] ?? 0);
  (s as any).temp_loc_arg = ((s as any).locArgs?.[2] ?? 0);
  // TODO-QSP: end
  scene.actions([
    { label: 'Let her put makeup on you', handler: (st: GameState) => {
    (st as any).pcs_hairbsh = 1;
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.text(`<center><b>${((st as any).npc_firstname ?? 0)?.['A14'] ?? ''} ${((st as any).npc_lastname ?? 0)?.['A14'] ?? ''}</b></center>`);
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('Katja happily grins as she quickly straightens your hair. "What do you want? A light touch-up, some normal make-up or shall I just shovel it on?"');
    scene.actions([
      { label: 'Light touch-up', handler: (st: GameState) => {
    (st as any).pcs_makeup = 2;
    scene.text('Katja subtly applies some neutral tones, with a light application of makeup to bring out your natural beauty.');
    if (((st as any).katjaQW ?? 0)?.['QWstage'] > 2) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (5*(1 + (((st as any).npc_had_sex ?? {})?.['A14'] ?? 0)));
      scene.text('Katja suddenly becomes aware that she is staring into your eyes and blushes.');
    }
    scene.actions([
      { label: 'Thank Katja for the makeup', handler: (st: GameState) => {
    dynamicGoto(st, 'temp_loc', 'temp_loc_arg');
  } },
    ]);
  } },
      { label: 'Normal make-up', handler: (st: GameState) => {
    (st as any).pcs_makeup = 3;
    scene.text('Katja applies some mildly vibrate tones and colors of makeup to cover your minor imperfections and enhance your best features.');
    if (((st as any).katjaQW ?? 0)?.['QWstage'] > 2) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (5*(1 + (((st as any).npc_had_sex ?? {})?.['A14'] ?? 0)));
      scene.text('Katja suddenly becomes aware that she is staring into your eyes and blushes.');
    }
    scene.actions([
      { label: 'Thank Katja for the makeup', handler: (st: GameState) => {
    dynamicGoto(st, 'temp_loc', 'temp_loc_arg');
  } },
    ]);
  } },
      { label: 'Heavy make-up', handler: (st: GameState) => {
    (st as any).pcs_makeup = 4;
    scene.text('Katja applies some deeper, richer shades of makeup that are thick enough to cover most imperfections while drawing attention to your eyes and lips.');
    if (((st as any).katjaQW ?? 0)?.['QWstage'] > 2) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + (5*(1 + (((st as any).npc_had_sex ?? {})?.['A14'] ?? 0)));
      scene.text('Katja suddenly becomes aware that she is staring into your eyes and blushes.');
    }
    scene.actions([
      { label: 'Thank Katja for the makeup', handler: (st: GameState) => {
    dynamicGoto(st, 'temp_loc', 'temp_loc_arg');
  } },
    ]);
  } },
      { label: 'You really don\'t need it', handler: (st: GameState) => {
    dynamicGoto(st, 'temp_loc', 'temp_loc_arg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterWillingToBeNaughty(s: GameState, scene: SceneBuilder): void {
  (s as any).temp = ((s as any).katjaQW ?? 0)?.['slut'];
  if (((s as any).katjaQW ?? 0)?.['under_influnece_of_cocaine'] > 0) {
    (s as any).temp = ((s as any).temp ?? 0) + (30/(((s as any).katjaQW ?? {})?.['coke_stage'] ?? 0));
  }
  (s as any).temp = ((s as any).temp ?? 0) + (5*Math.max(((s as any).katjaQW ?? 0)?.['drinks'], 8)/2);
  (s as any).RESULT = ((s as any).temp ?? 0);
  // TODO-QSP: end
  scene.build();
}

function enterTakeCocaine(s: GameState, scene: SceneBuilder): void {
  if (((s as any).katjaQW ?? 0)?.['coke_stage'] === 0) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['slut'] = ((s as any).katjaQW['slut'] ?? 0) + (10);
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['coke_stage'] = 1;
  } else {
    if (((s as any).katjaQW ?? 0)?.['coke_stage'] === 1) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['slut'] = ((s as any).katjaQW['slut'] ?? 0) + (2);
    } else {
      if (((s as any).katjaQW ?? 0)?.['coke_stage'] === 2) {
        ((s as any).katjaQW = (s as any).katjaQW ?? {})['slut'] = ((s as any).katjaQW['slut'] ?? 0) + ((Math.floor(Math.random() * 2) + 1));
      } else {
        if (((s as any).katjaQW ?? 0)?.['coke_stage'] === 3) {
          ((s as any).katjaQW = (s as any).katjaQW ?? {})['slut'] = ((s as any).katjaQW['slut'] ?? 0) + ((Math.floor(Math.random() * 2) + 0));
        }
      }
    }
  }
  if (((s as any).katjaQW ?? 0)?.['coke_stage'] === -1  &&  (!(Math.floor(Math.random() * 2) + 0))) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['coke_stage'] = 4;
  }
  if (Number((s as any).locArgs?.[1] ?? 0) === 0) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['under_influnece_of_cocaine'] = ((s as any).katjaQW['under_influnece_of_cocaine'] ?? 0) + (2);
    if (((s as any).katjaQW ?? 0)?.['coke_stage'] > 0) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (4*(11-(((s as any).katjaQW ?? {})?.['coke_stage'] ?? 0)));
    } else {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (40);
    }
  }
  if (((s as any).katjaQW ?? 0)?.['coke_stage'] < 3) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['coke_point'] = ((s as any).katjaQW['coke_point'] ?? 0) + (1);
  } else {
    if (((s as any).katjaQW ?? 0)?.['coke_stage'] < 6) {
      if (((s as any).katjaQW ?? 0)?.['coke_day'] + 7 > ((s as any).daystart ?? 0) - Number((s as any).locArgs?.[2] ?? 0)) {
        ((s as any).katjaQW = (s as any).katjaQW ?? {})['coke_point'] = ((s as any).katjaQW['coke_point'] ?? 0) + (1);
      }
    } else {
      if (((s as any).katjaQW ?? 0)?.['coke_stage'] < 8) {
        if (((s as any).katjaQW ?? 0)?.['coke_day'] + 2 > ((s as any).daystart ?? 0) - Number((s as any).locArgs?.[2] ?? 0)) {
          ((s as any).katjaQW = (s as any).katjaQW ?? {})['coke_point'] = ((s as any).katjaQW['coke_point'] ?? 0) + (1);
        }
      } else {
        if (((s as any).katjaQW ?? 0)?.['coke_stage'] === 8) {
          if (((s as any).katjaQW ?? 0)?.['coke_day'] === ((s as any).daystart ?? 0) - Number((s as any).locArgs?.[2] ?? 0)) {
            ((s as any).katjaQW = (s as any).katjaQW ?? {})['coke_point'] = ((s as any).katjaQW['coke_point'] ?? 0) + (1);
          }
        }
      }
    }
  }
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['coke_day'] = ((s as any).daystart ?? 0) - ((s as any).locArgs?.[2] ?? 0);
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['coke_day_lapse'] = 1;
  // TODO-QSP: end
  scene.build();
}

function enterSexSet(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) > 0) {
    if (((s as any).katjaQW ?? 0)?.['simultanous_boys'] === 0  &&  (Math.floor(Math.random() * 5) + 0) <= ((s as any).katjaQW ?? 0)?.['slut']/25) {
      if (((s as any).npc_vag ?? 0)?.['A14'] === 0  &&  ((s as any).npc_ass ?? 0)?.['A14'] === 0) {
        if ((!(Math.floor(Math.random() * 5) + 0))) {
          ((s as any).npc_ass = (s as any).npc_ass ?? {})['A14'] = ((s as any).npc_ass['A14'] ?? 0) + (2);
          ((s as any).katjaQW = (s as any).katjaQW ?? {})['anal_sex'] = 1;
        } else {
          ((s as any).npc_vag = (s as any).npc_vag ?? {})['A14'] = 20;
          ((s as any).katjaQW = (s as any).katjaQW ?? {})['pussy_sex'] = 1;
        }
      } else {
        if (((s as any).npc_vag ?? 0)?.['A14'] > 0  &&  (Math.floor(Math.random() * 4) + 0) > 0) {
          if (((s as any).katjaQW ?? 0)?.['pussy_sex'] === 0) {
            ((s as any).katjaQW = (s as any).katjaQW ?? {})['pussy_sex'] = 1;
          }
          if (((s as any).npc_vag ?? 0)?.['A14'] < (Math.floor(Math.random() * 6) + 5)) {
            ((s as any).npc_vag = (s as any).npc_vag ?? {})['A14'] = ((s as any).npc_vag['A14'] ?? 0) + (2);
          } else {
            if (((s as any).npc_vag ?? 0)?.['A14'] < (Math.floor(Math.random() * 11) + 10)) {
              ((s as any).npc_vag = (s as any).npc_vag ?? {})['A14'] = ((s as any).npc_vag['A14'] ?? 0) + (1);
            }
          }
        } else {
          if ((!(Math.floor(Math.random() * 6) + 0))) {
            ((s as any).npc_vag = (s as any).npc_vag ?? {})['A14'] = 20;
            if (((s as any).katjaQW ?? 0)?.['pussy_sex'] === 0) {
              ((s as any).katjaQW = (s as any).katjaQW ?? {})['pussy_sex'] = 1;
            }
          }
        }
        if (((s as any).npc_ass ?? 0)?.['A14'] > 0  &&  (Math.floor(Math.random() * 4) + 0) > 0) {
          if (((s as any).katjaQW ?? 0)?.['anal_sex'] === 0) {
            ((s as any).katjaQW = (s as any).katjaQW ?? {})['anal_sex'] = 1;
          }
          if (((s as any).npc_ass ?? 0)?.['A14'] < (Math.floor(Math.random() * 6) + 5)) {
            ((s as any).npc_ass = (s as any).npc_ass ?? {})['A14'] = ((s as any).npc_ass['A14'] ?? 0) + (2);
          } else {
            if (((s as any).npc_ass ?? 0)?.['A14'] < (Math.floor(Math.random() * 11) + 10)) {
              ((s as any).npc_ass = (s as any).npc_ass ?? {})['A14'] = ((s as any).npc_ass['A14'] ?? 0) + (1);
            }
          }
        } else {
          if ((!(Math.floor(Math.random() * 8) + 0))) {
            if (((s as any).npc_ass ?? 0)?.['A14'] < (Math.floor(Math.random() * 11) + 10)) {
              ((s as any).npc_vag = (s as any).npc_vag ?? {})['A14'] = ((s as any).npc_vag['A14'] ?? 0) + (2);
            }
            if (((s as any).katjaQW ?? 0)?.['anal_sex'] === 0) {
              ((s as any).katjaQW = (s as any).katjaQW ?? {})['anal_sex'] = 1;
            }
          }
        }
      }
      if (((s as any).npc_throat ?? 0)?.['A14'] > 0  &&  (Math.floor(Math.random() * 8) + 0) > 0) {
        if (((s as any).npc_throat ?? 0)?.['A14'] < (Math.floor(Math.random() * 15) + 8)) {
          ((s as any).npc_throat = (s as any).npc_throat ?? {})['A14'] = ((s as any).npc_throat['A14'] ?? 0) + (1);
        }
      } else {
        if ((Math.floor(Math.random() * 4) + 0) === 0  &&  ((s as any).npc_throat ?? 0)?.['A14'] < (Math.floor(Math.random() * 15) + 8)) {
          ((s as any).npc_throat = (s as any).npc_throat ?? {})['A14'] = ((s as any).npc_throat['A14'] ?? 0) + (1);
        }
      }
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['simultanous_boys'] = 0;
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['slut'] = ((s as any).katjaQW['slut'] ?? 0) + ((((s as any).katjaQW ?? {})?.['simultanous_boys'] ?? 0)*5);
    } else {
      if (((s as any).katjaQW ?? 0)?.['simultanous_boys'] > 0  &&  (Math.floor(Math.random() * 3) + 0) <= ((s as any).katjaQW ?? 0)?.['slut']/50) {
        if (((s as any).npc_vag ?? 0)?.['A14'] > 0  &&  (Math.floor(Math.random() * 4) + 0) > 0) {
          if (((s as any).katjaQW ?? 0)?.['pussy_sex'] === 0) {
            ((s as any).katjaQW = (s as any).katjaQW ?? {})['pussy_sex'] = 1;
          }
          if (((s as any).npc_vag ?? 0)?.['A14'] < (Math.floor(Math.random() * 6) + 5)) {
            ((s as any).npc_vag = (s as any).npc_vag ?? {})['A14'] = ((s as any).npc_vag['A14'] ?? 0) + (2);
          } else {
            if (((s as any).npc_vag ?? 0)?.['A14'] < (Math.floor(Math.random() * 11) + 10)) {
              ((s as any).npc_vag = (s as any).npc_vag ?? {})['A14'] = ((s as any).npc_vag['A14'] ?? 0) + (1);
            }
          }
          if (((s as any).katjaQW ?? 0)?.['creampie'] > 0  &&  (!(Math.floor(Math.random() * 6) + 0))) {
            ((s as any).katjaQW = (s as any).katjaQW ?? {})['creampie'] = ((s as any).katjaQW['creampie'] ?? 0) + (1);
          }
        } else {
          if ((!(Math.floor(Math.random() * 6) + 0))) {
            ((s as any).npc_vag = (s as any).npc_vag ?? {})['A14'] = 20;
            if (((s as any).katjaQW ?? 0)?.['pussy_sex'] === 0) {
              ((s as any).katjaQW = (s as any).katjaQW ?? {})['pussy_sex'] = 1;
            }
          }
        }
        if (((s as any).npc_ass ?? 0)?.['A14'] > 0  &&  (Math.floor(Math.random() * 4) + 0) > 0) {
          if (((s as any).katjaQW ?? 0)?.['anal_sex'] === 0) {
            ((s as any).katjaQW = (s as any).katjaQW ?? {})['anal_sex'] = 1;
          }
          if (((s as any).npc_ass ?? 0)?.['A14'] < (Math.floor(Math.random() * 6) + 5)) {
            ((s as any).npc_ass = (s as any).npc_ass ?? {})['A14'] = ((s as any).npc_ass['A14'] ?? 0) + (2);
          } else {
            if (((s as any).npc_ass ?? 0)?.['A14'] < (Math.floor(Math.random() * 11) + 10)) {
              ((s as any).npc_ass = (s as any).npc_ass ?? {})['A14'] = ((s as any).npc_ass['A14'] ?? 0) + (1);
            }
          }
        } else {
          if ((!(Math.floor(Math.random() * 8) + 0))) {
            if (((s as any).npc_ass ?? 0)?.['A14'] < (Math.floor(Math.random() * 11) + 10)) {
              ((s as any).npc_vag = (s as any).npc_vag ?? {})['A14'] = ((s as any).npc_vag['A14'] ?? 0) + (2);
            }
            if (((s as any).katjaQW ?? 0)?.['anal_sex'] === 0) {
              ((s as any).katjaQW = (s as any).katjaQW ?? {})['anal_sex'] = 1;
            }
          }
        }
        if (((s as any).npc_throat ?? 0)?.['A14'] > 0  &&  (Math.floor(Math.random() * 8) + 0) > 0) {
          if (((s as any).npc_throat ?? 0)?.['A14'] < (Math.floor(Math.random() * 15) + 8)) {
            ((s as any).npc_throat = (s as any).npc_throat ?? {})['A14'] = ((s as any).npc_throat['A14'] ?? 0) + (1);
          }
        } else {
          if ((Math.floor(Math.random() * 4) + 0) === 0  &&  ((s as any).npc_throat ?? 0)?.['A14'] < (Math.floor(Math.random() * 15) + 8)) {
            ((s as any).npc_throat = (s as any).npc_throat ?? {})['A14'] = ((s as any).npc_throat['A14'] ?? 0) + (1);
          }
        }
        ((s as any).katjaQW = (s as any).katjaQW ?? {})['simultanous_boys'] = ((s as any).katjaQW['simultanous_boys'] ?? 0) + (Math.max(0, (Math.floor(Math.random() * (((s as any).locArgs?.[1] ?? 0) - (((s as any).katjaQW ?? {})?.['simultanous_boys'] ?? 0) - 0 + 1)) + (0))));
        ((s as any).katjaQW = (s as any).katjaQW ?? {})['slut'] = ((s as any).katjaQW['slut'] ?? 0) + (Math.min(((s as any).katjaQW ?? 0)?.['simultanous_boys'], ((s as any).locArgs?.[1] ?? 0))*3);
      }
    }
  }
  if (Number((s as any).locArgs?.[2] ?? 0) > 0) {
    if (((s as any).katjaQW ?? 0)?.['simultanous_girls'] === 0  &&  (Math.floor(Math.random() * 4) + 0) <= ((s as any).katjaQW ?? 0)?.['slut']/33) {
      if (Number((s as any).locArgs?.[1] ?? 0) === 0) {
        if (((s as any).npc_vag ?? 0)?.['A14'] > 0  &&  (Math.floor(Math.random() * 6) + 0) > 0  &&  ((s as any).npc_vag ?? 0)?.['A14'] < 15) {
          ((s as any).npc_vag = (s as any).npc_vag ?? {})['A14'] = ((s as any).npc_vag['A14'] ?? 0) + (1);
        } else {
          if ((!(Math.floor(Math.random() * 10) + 0))) {
            ((s as any).npc_vag = (s as any).npc_vag ?? {})['A14'] = ((s as any).npc_vag['A14'] ?? 0) + (1);
          }
        }
        if (((s as any).npc_ass ?? 0)?.['A14'] > 0  &&  (Math.floor(Math.random() * 8) + 0) > 0  &&  ((s as any).npc_ass ?? 0)?.['A14'] < 15) {
          ((s as any).npc_ass = (s as any).npc_ass ?? {})['A14'] = ((s as any).npc_ass['A14'] ?? 0) + (1);
        } else {
          if ((!(Math.floor(Math.random() * 15) + 0))) {
            ((s as any).npc_ass = (s as any).npc_ass ?? {})['A14'] = ((s as any).npc_ass['A14'] ?? 0) + (1);
          }
        }
        if (((s as any).npc_throat ?? 0)?.['A14'] > 0  &&  (Math.floor(Math.random() * 3) + 0) === 0  &&  ((s as any).npc_throat ?? 0)?.['A14'] < 15) {
          ((s as any).npc_throat = (s as any).npc_throat ?? {})['A14'] = ((s as any).npc_throat['A14'] ?? 0) + (1);
        } else {
          if ((!(Math.floor(Math.random() * 7) + 0))) {
            ((s as any).npc_throat = (s as any).npc_throat ?? {})['A14'] = ((s as any).npc_throat['A14'] ?? 0) + (1);
          }
        }
      }
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['simultanous_girls'] = 0;
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['slut'] = ((s as any).katjaQW['slut'] ?? 0) + ((((s as any).katjaQW ?? {})?.['simultanous_girls'] ?? 0)*4);
    } else {
      if (((s as any).katjaQW ?? 0)?.['simultanous_girls'] > 0  &&  (Math.floor(Math.random() * 2) + 0) <= ((s as any).katjaQW ?? 0)?.['slut']/50) {
        if (((s as any).npc_vag ?? 0)?.['A14'] > 0  &&  (Math.floor(Math.random() * 6) + 0) > 0) {
          ((s as any).npc_vag = (s as any).npc_vag ?? {})['A14'] = ((s as any).npc_vag['A14'] ?? 0) + (1);
        } else {
          if ((!(Math.floor(Math.random() * 10) + 0))) {
            ((s as any).npc_vag = (s as any).npc_vag ?? {})['A14'] = ((s as any).npc_vag['A14'] ?? 0) + (1);
          }
        }
        if (((s as any).npc_ass ?? 0)?.['A14'] > 0  &&  (Math.floor(Math.random() * 8) + 0) > 0) {
          ((s as any).npc_ass = (s as any).npc_ass ?? {})['A14'] = ((s as any).npc_ass['A14'] ?? 0) + (1);
        } else {
          if ((!(Math.floor(Math.random() * 15) + 0))) {
            ((s as any).npc_ass = (s as any).npc_ass ?? {})['A14'] = ((s as any).npc_ass['A14'] ?? 0) + (1);
          }
        }
        if (((s as any).npc_throat ?? 0)?.['A14'] > 0  &&  (!(Math.floor(Math.random() * 3) + 0))) {
          ((s as any).npc_throat = (s as any).npc_throat ?? {})['A14'] = ((s as any).npc_throat['A14'] ?? 0) + (1);
        } else {
          if ((!(Math.floor(Math.random() * 7) + 0))) {
            ((s as any).npc_throat = (s as any).npc_throat ?? {})['A14'] = ((s as any).npc_throat['A14'] ?? 0) + (1);
          }
        }
        ((s as any).katjaQW = (s as any).katjaQW ?? {})['simultanous_girls'] = ((s as any).katjaQW['simultanous_girls'] ?? 0) + (Math.max(0, (Math.floor(Math.random() * (((s as any).locArgs?.[2] ?? 0) - (((s as any).katjaQW ?? {})?.['simultanous_girls'] ?? 0) - 0 + 1)) + (0))));
        ((s as any).katjaQW = (s as any).katjaQW ?? {})['slut'] = ((s as any).katjaQW['slut'] ?? 0) + (Math.min(((s as any).katjaQW ?? 0)?.['simultanous_gitls'], ((s as any).locArgs?.[2] ?? 0))*2);
      }
    }
  }
  // TODO-QSP: end
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
    case 'face_color':
      enterFaceColor(s, scene);
      break;
    case 'makeup':
      enterMakeup(s, scene);
      break;
    case 'willing_to_be_naughty':
      enterWillingToBeNaughty(s, scene);
      break;
    case 'take_cocaine':
      enterTakeCocaine(s, scene);
      break;
    case 'sex_set':
      enterSexSet(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const katja_procedural: LocationDef = {
  name: 'katja_procedural',
  region: 'other',
  enter: enter,
};
