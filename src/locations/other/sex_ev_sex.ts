import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterInsertedImg(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/2.jpg');
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/2.jpg');
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/3.jpg');
        }
      }
    }
  } else {
    scene.text(String(qspFunc(s, 'sex_ev', 'bed_room') || ''));
  }
  scene.build();
}

function enterSexStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['think_virgin'] === 1  &&  ((s as any).sex_ev ?? 0)?.['virgin_fuck'] === 0  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Ask ' + String(((s as any).npcdesc ?? '') ?? '') + ' to take your virginity', goto: ['sex_ev_virgin', 'start1'] },
    ]);
  } else {
    if (((s as any).sex_ev ?? 0)?.['fuck_count'] === 0  &&  (((s as any).sex_ev ?? 0)?.['position'] !== 'miss'  ||  ((s as any).sex_ev ?? 0)?.['position'] !== 'doggy'  ||  ((s as any).sex_ev ?? 0)?.['position'] !== 'cowgirl')) {
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Fuck ' + String(((s as any).npcdesc ?? '') ?? ''), handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['must_fuck'] = 1;
  }, goto: ['sex_ev_sex', 'sex_pre'] },
      ]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1  &&  ((s as any).sex_ev ?? 0)?.['last_cum'] === 'creampie'  &&  (((s as any).sex_ev ?? 0)?.['position'] === 'miss'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'doggy'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl')) {
        scene.actions([
          { label: 'Fuck again', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['must_fuck'] = 1;
    if (((Math.floor(Math.random() * 10) + 1) >= ((st as any).npc_sexdrive ?? 0)?.[String((st as any).npcID ?? 0)]  ||  ((st as any).sex_ev ?? 0)?.['cum_count'] >= 5 + ((st as any).sex_ev ?? 0)?.['extra_cum'])  &&  ((st as any).sex_ev ?? 0)?.['boy_cum'] === 1) {
      qspCall(st, 'sex_ev_after', 'fucked_out');
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] !== '') {
        ((st as any).sex_ev = (st as any).sex_ev ?? {})['reset_pos'] = (((st as any).sex_ev ?? 0)?.['position']);
        scene.actions([
          { label: 'Stay in the same position', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReset(st, scene); (st as any).locArgs = __savedLocArgs; }
    if (((st as any).sex_ev ?? 0)?.['no_condom'] !== 1) {
      qspCall(st, 'sex_ev_condoms', 'condoms');
    } else {
      dynamicGoto(st, 'sex_ev_' + String((((st as any).sex_ev ?? {})['reset_pos'])), '$sex_ev[\'pos_speed\']');
    }
  } },
          { label: 'Change positions', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['force_initiative'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['change_pos'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['initiative'] = 'girl';
    if (((st as any).sex_ev ?? 0)?.['no_condom'] !== 1) {
      qspCall(st, 'sex_ev_condoms', 'condoms');
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPositionChoose(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
        ]);
      } else {
        if (((st as any).sex_ev ?? 0)?.['no_condom'] !== 1) {
          qspCall(st, 'sex_ev_condoms', 'condoms');
        } else {
          { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPositionChoose(st, scene); (st as any).locArgs = __savedLocArgs; }
        }
      }
    }
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Fuck again', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_again'] = 1;
    if (((Math.floor(Math.random() * 10) + 1) >= ((st as any).npc_sexdrive ?? 0)?.[String((st as any).npcID ?? 0)]  ||  ((st as any).sex_ev ?? 0)?.['cum_count'] >= 5 + ((st as any).sex_ev ?? 0)?.['extra_cum'])  &&  ((st as any).sex_ev ?? 0)?.['boy_cum'] === 1) {
      qspCall(st, 'sex_ev_after', 'fucked_out');
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReset(st, scene); (st as any).locArgs = __savedLocArgs; }
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['must_fuck'] = 1;
      if (((st as any).sex_ev ?? 0)?.['no_condom'] === 0) {
        qspCall(st, 'sex_ev_condoms', 'condoms');
      } else {
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPositionChoose(st, scene); (st as any).locArgs = __savedLocArgs; }
      }
    }
  } },
        ]);
      }
    }
  }
  scene.build();
}

function enterSexPre(s: GameState, scene: SceneBuilder): void {
  scene.text(String(qspFunc(s, 'sex_ev', 'bed_room') || ''));
  if (((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
    if (((s as any).sex_ev ?? 0)?.['skip_foreplay'] === 1) {
      scene.text('"I need you inside me <i>now</i>," you gasp, desperate to skip the foreplay and get to the fucking already.');
    } else {
      if (((s as any).sex_ev ?? 0)?.['about_time'] === 1) {
        scene.text('"It\'s about fucking time," you say, scooting backwards onto the bed.');
      } else {
        if (((s as any).sex_ev ?? 0)?.['fuck_now'] === 1) {
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['must_fuck'] = 1;
          scene.text('"Enough of the foreplay," you say with a lusty growl. "It\'s time to fuck."');
        } else {
          if (((s as any).sex_ev ?? 0)?.['not_today'] === 1) {
            ((s as any).sex_ev = (s as any).sex_ev ?? {})['not_today'] = 2;
            scene.text(`"I thought you didn't want to fuck today," ${((s as any).npcdesc ?? '')} says with a wry smile.`);
            scene.text('"Changed my mind," you grin back.');
          } else {
            if (((s as any).sex_ev ?? 0)?.['position_choose'] === 0) {
              scene.text('"I want you inside me," you smile seductively.');
            }
          }
        }
      }
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
      if (((s as any).sex_ev ?? 0)?.['get_hard'] === 1) {
        (s as any).minut = ((s as any).minut ?? 0) + ((Math.floor(Math.random() * 2) + 1));
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['get_hard'] = 0;
        scene.text('After a minute or so, he starts to stiffen up again.');
        scene.text('<i>Finally...</i>');
      } else {
        scene.text(`"I haven't had enough yet," you say, seductively, pulling ${((s as any).npcdesc ?? '')} towards you.`);
      }
    }
  }
  if (((s as any).know_virgin ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    ((s as any).know_virgin = (s as any).know_virgin ?? {})[String((s as any).npcID ?? 0)] = 2;
    scene.text(`"I thought you said you were saving your virginity," ${((s as any).npcdesc ?? '')} says, looking a little confused but extremely excited.`);
    scene.text('"I accidentally lost it somewhere," you grin. "Now hurry up and fuck me."');
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['position_choose'] = 1;
  qspCall(s, 'stat', '');
  if (((s as any).sex_ev ?? 0)?.['no_condom'] !== 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPositionChoose(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLubeUpBb1(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'sex_ev_condoms', 'condoms');
  scene.build();
}

function enterPositionPicker(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['last_position'] = (((s as any).sex_ev ?? 0)?.['position']);
  if ((((s as any).sex_ev ?? 0)?.['position'] === ''  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'kuni'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'facesit'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'fingering'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'nipple_play'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'handjob'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'blowjob'  ||  ((s as any).sex_ev ?? 0)?.['position'] === '69'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'makeout')  ||  ((s as any).sex_ev ?? 0)?.['new_pos'] === 1) {
    if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'miss'  &&  ((s as any).sex_ev ?? 0)?.['must_fuck_anal'] === 0) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'miss';
    } else {
      if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'doggy'  &&  ((s as any).sex_ev ?? 0)?.['must_fuck_anal'] === 0) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'doggy';
      } else {
        if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'cowgirl'  &&  ((s as any).sex_ev ?? 0)?.['must_fuck_anal'] === 0) {
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'cowgirl';
        } else {
          if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'anal'  &&  ((s as any).sex_ev ?? 0)?.['must_fuck_vag'] === 0) {
            ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'anal';
          } else {
            if (((s as any).npc_no_anal ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).sex_ev ?? 0)?.['must_fuck_vag'] === 1) {
              ((s as any).sex_ev = (s as any).sex_ev ?? {})['position_rand'] = (Math.floor(Math.random() * 3) + 1);
            } else {
              ((s as any).sex_ev = (s as any).sex_ev ?? {})['position_rand'] = (Math.floor(Math.random() * 4) + 1);
            }
            if (((s as any).sex_ev ?? 0)?.['position_rand'] === 1) {
              ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'miss';
            } else {
              if (((s as any).sex_ev ?? 0)?.['position_rand'] === 2) {
                ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'doggy';
              } else {
                if (((s as any).sex_ev ?? 0)?.['position_rand'] === 3) {
                  ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'cowgirl';
                } else {
                  if (((s as any).sex_ev ?? 0)?.['position_rand'] === 4) {
                    ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'anal';
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

function enterPositionMenu(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['last_position'] = (((s as any).sex_ev ?? 0)?.['position']);
  qspCall(s, 'sex_ev_miss', 'miss_goto');
  qspCall(s, 'sex_ev_doggy', 'doggy_goto');
  qspCall(s, 'sex_ev_cowgirl', 'cowgirl_goto');
  qspCall(s, 'sex_ev_anal', 'anal_start');
  scene.build();
}

function enterPositionChoose(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_warn'] = 0;
  if (((s as any).stat ?? 0)?.['think_virgin'] === 1  &&  (((s as any).sex_ev ?? 0)?.['fuck_count'] === 0  ||  qspFunc(s, 'pcs_has_attr', 'sex_virgin') === 1)) {
    qspCall(s, 'sex_ev_virgin', 'start_options');
  } else {
    if (((Math.floor(Math.random() * 2) + 0) === 1  &&  ((s as any).sex_ev ?? 0)?.['force_initiative'] !== 2)  ||  ((s as any).sex_ev ?? 0)?.['force_initiative'] === 1) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['initiative'] = 'girl';
      if (((s as any).sex_ev ?? 0)?.['first_insertion'] > 0) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['change_pos'] = 1;
      }
      if (((s as any).sex_ev ?? 0)?.['new_pos'] === 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['new_pos'] = 0;
      }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPositionMenu(s, scene); (s as any).locArgs = __savedLocArgs; }
      scene.actions([
        { label: 'Let him choose', goto: ['sex_ev_sex', 'let_him_choose'] },
      ]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === ''  ||  ((s as any).sex_ev ?? 0)?.['new_pos'] === 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['initiative'] = 'boy';
        qspGoto(s, 'sex_ev_sex', 'he_initiate');
      } else {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['new_pos'] = 1;
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['initiative'] = 'boy';
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPositionPicker(s, scene); (s as any).locArgs = __savedLocArgs; }
        qspCall(s, 'sex_ev_' + (((s as any).sex_ev ?? 0)?.['position']) + '', '' + (((s as any).sex_ev ?? 0)?.['position']) + '_goto');
      }
    }
  }
  scene.build();
}

function enterLetHimChoose(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['pos_speed'] === '') {
    scene.text('"Take me however you want," you smile.');
  } else {
    scene.text('"Fuck me again," you smile. "You pick how."');
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['must_fuck'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['force_initiative'] = 2;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['initiative'] = 'boy';
  if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'miss') {
    qspGoto(s, 'sex_ev_miss', 'miss_goto');
  } else {
    if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'doggy') {
      qspGoto(s, 'sex_ev_doggy', 'doggy_goto');
    } else {
      if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'cowgirl') {
        qspCall(s, 'sex_ev_cowgirl', 'cowgirl_goto');
      } else {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRandPosition(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    }
  }
  scene.build();
}

function enterHeInitiate(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['new_pos'] === 1) {
    if ((Math.floor(Math.random() * 2) + 0) === 1) {
      if (((s as any).sex_ev ?? 0)?.['no_anal'] > 0  ||  ((s as any).npc_no_anal ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).sex_ev ?? 0)?.['not_anal'] === 1) {
        if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'miss') {
          qspGoto(s, 'sex_ev_miss', 'missionary_start');
        } else {
          if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'doggy') {
            qspGoto(s, 'sex_ev_doggy', 'doggy_start');
          } else {
            if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'cowgirl') {
              qspGoto(s, 'sex_ev_cowgirl', 'cowgirl_goto');
            } else {
              qspGoto(s, 'sex_ev_sex', 'rand_position');
            }
          }
        }
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['not_anal'] = 0;
      } else {
        if (((s as any).sex_ev ?? 0)?.['no_vaginal'] > 0) {
          if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'anal') {
            qspGoto(s, 'sex_ev_anal', 'anal_start');
          } else {
            qspGoto(s, 'sex_ev_sex', 'rand_position');
          }
        } else {
          if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'miss') {
            qspGoto(s, 'sex_ev_miss', 'missionary_start');
          } else {
            if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'doggy') {
              qspGoto(s, 'sex_ev_doggy', 'doggy_start');
            } else {
              if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'cowgirl') {
                qspGoto(s, 'sex_ev_cowgirl', 'cowgirl_goto');
              } else {
                if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'anal') {
                  qspGoto(s, 'sex_ev_anal', 'anal_start');
                } else {
                  qspGoto(s, 'sex_ev_sex', 'rand_position');
                }
              }
            }
          }
        }
      }
    } else {
      qspGoto(s, 'sex_ev_sex', 'rand_position');
    }
  } else {
    dynamicGoto(s, 'sex_ev_' + String((((s as any).sex_ev ?? {})['position'])), '' + (((s as any).sex_ev ?? 0)?.['position']) + '_goto');
  }
  scene.build();
}

function enterHeChoosePosition(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['initiative'] = 'boy';
  if (((s as any).sex_ev ?? 0)?.['position'] === 'kuni'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'blowjob') {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['must_fuck'] = 1;
  }
  scene.text(`"Do whatever you want to me ${(((s as any).npc_lovername ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}," you smile.`);
  if (((s as any).sex_ev ?? 0)?.['first_insertion'] > 0) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['change_pos'] = 1;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['new_pos'] = 1;
  }
  if (((s as any).stat ?? 0)?.['think_virgin'] === 1  &&  ((s as any).sex_ev ?? 0)?.['deflowered'] === 0  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['fuck_locked'] === 0  &&  ((st as any).sex_ev ?? 0)?.['virgin'] !== 1  ||  ((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['position'] = 'miss';
      scene.img('images/shared/sex/foreplay/miss3.jpg');
      scene.text(`${((st as any).npcdesc ?? '')} pushes you down onto the bed and puts his hands on your knees, spreading your legs apart, and lines his cock up with your pussy.`);
      scene.text('"I wanna fuck your pussy."');
      scene.actions([
        { label: 'Stop him (virgin)', goto: ['sex_ev_virgin', 'lover_wait'] },
        { label: '', labelFn: (s: GameState) => 'Let ' + String(((st as any).npcdesc ?? '') ?? '') + ' take your virginity', goto: ['sex_ev_virgin', 'start3'] },
      ]);
    } else {
      if (((st as any).npc_fav_pos ?? 0)?.[String((st as any).npcID ?? 0)] === 'blowjob') {
        qspCall(st, 'sex_ev_foreplay', 'bj_ask');
      } else {
        scene.text(`${((st as any).npcdesc ?? '')} starts leading a trail of kisses down your stomach towards your pussy.`);
        if (((st as any).kuni_yes ?? 0)?.[String((st as any).npcID ?? 0)] < 1) {
          scene.actions([
            { label: 'Close your legs', goto: ['sex_ev_foreplay', 'kuni_leg_close'] },
          ]);
        }
        scene.actions([
          { label: 'Let him eat you out', goto: ['sex_ev_foreplay', 'kuni_leg_spread'] },
        ]);
      }
    }
  } },
    ]);
  } else {
    if ((Math.floor(Math.random() * 2) + 0) === 1) {
      if (((s as any).sex_ev ?? 0)?.['fuck_locked'] === 0  &&  ((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'miss') {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_pos'] = 1;
        qspGoto(s, 'sex_ev_miss', 'missionary_start');
      } else {
        if (((s as any).sex_ev ?? 0)?.['fuck_locked'] === 0  &&  ((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'doggy') {
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_pos'] = 1;
          qspGoto(s, 'sex_ev_doggy', 'doggy_goto');
        } else {
          if (((s as any).sex_ev ?? 0)?.['fuck_locked'] === 0  &&  ((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'cowgirl') {
            ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_pos'] = 1;
            qspCall(s, 'sex_ev_cowgirl', 'cowgirl_goto');
          } else {
            if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'blowjob'  &&  ((s as any).sex_ev ?? 0)?.['must_fuck'] !== 1) {
              qspCall(s, 'sex_ev_foreplay', 'bj_ask');
            } else {
              if (((s as any).npc_pussyeater ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).sex_ev ?? 0)?.['must_fuck'] !== 1) {
                scene.text(`${((s as any).npcdesc ?? '')} starts leading a trail of kisses down your stomach towards your pussy.`);
                if (((s as any).kuni_yes ?? 0)?.[String((s as any).npcID ?? 0)] < 1) {
                  scene.actions([
                    { label: 'Close your legs', goto: ['sex_ev_foreplay', 'kuni_leg_close'] },
                  ]);
                }
                scene.actions([
                  { label: 'Let him eat you out', goto: ['sex_ev_foreplay', 'kuni_leg_spread'] },
                ]);
              } else {
                if (((s as any).sex_ev ?? 0)?.['condom_setup'] !== 1) {
                  qspCall(s, 'sex_ev_condoms', 'condoms');
                }
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRandPosition(s, scene); (s as any).locArgs = __savedLocArgs; }
              }
            }
          }
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['condom_setup'] !== 1) {
        qspCall(s, 'sex_ev_condoms', 'condoms');
      }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRandPosition(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  scene.build();
}

function enterLubeUpBb1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mc_inventory ?? 0)?.['lubricant'] > 0  &&  ((s as any).ar_vag_lube ?? 0) === 0  &&  ((s as any).sex_ev ?? 0)?.['no_condom'] === 1) {
    scene.actions([
      { label: 'Lube up', handler: (st: GameState) => {
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['lubricant'] = ((st as any).mc_inventory['lubricant'] ?? 0) - (1);
    (st as any).ar_vag_lube = 1;
    (st as any).vaginal_slip = 8;
    scene.img('images/shared/sex/handjob/hj3.mp4');
    scene.text('"Wait," you say, pausing as you dig into your bag and come up with your tube of lubricant. "Let\'s get you lubed up first."');
    scene.text(`Squeezing out a generous dollop into your palm, you take hold of ${((st as any).npcdesc ?? '')}'s cock and run your hand up and down his ${((st as any).dick_desc ?? '')} shaft. Within seconds, it's slick and slippery.`);
    scene.text('"I bet you\'ll just slide right into me now," you grin.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPositionChoose(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  scene.build();
}

function enterLubeUpCondom1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mc_inventory ?? 0)?.['lubricant'] > 0  &&  ((s as any).ar_vag_lube ?? 0) === 0  &&  ((s as any).sex_ev ?? 0)?.['condom'] === 1  &&  ((s as any).sex_ev ?? 0)?.['no_condom'] === 0) {
    scene.actions([
      { label: 'Lube up', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['using_pc_condoms'] === 1) {
      qspCall(st, 'sex_ev_stats', 'pc_condom_stats');
    } else {
      qspCall(st, 'sex_ev_stats', 'npc_condom_stats');
    }
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['lubricant'] = ((st as any).mc_inventory['lubricant'] ?? 0) - (1);
    (st as any).ar_vag_lube = 1;
    (st as any).vaginal_slip = 8;
    scene.img('images/shared/sex/handjob/hj3.mp4');
    scene.text(`"Hang on, I've got something," you say, digging into your bag while ${((st as any).npcdesc ?? '')} puts on the condom. Moments later, you come up with a tube of lubricant. "Let's get you lubed up."`);
    scene.text(`Squeezing out a generous dollop into your palm, you take hold of ${((st as any).npcdesc ?? '')}'s cock and run your hand up and down the condom covering his ${((st as any).dick_desc ?? '')} shaft. Within seconds, the rubbery coat is slick and slippery.`);
    scene.text('"Always lube your condoms," you grin.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPositionChoose(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  scene.build();
}

function enterRandPosition(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['must_fuck'] === 1) {
    if (((s as any).sex_ev ?? 0)?.['no_vag'] === 0  &&  (((s as any).sex_ev ?? 0)?.['no_anal'] > 0  ||  ((s as any).sex_ev ?? 0)?.['not_anal'] > 0  ||  ((s as any).npc_no_anal ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).sex_ev ?? 0)?.['pick_vag_pos'] === 1)) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['position_rand'] = (Math.floor(Math.random() * 3) + 1);
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['pick_vag_pos'] = 0;
    } else {
      if (((s as any).sex_ev ?? 0)?.['no_vag'] > 0  &&  ((s as any).sex_ev ?? 0)?.['no_anal'] === 0) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['position_rand'] = (Math.floor(Math.random() * 2) + 4);
      } else {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['position_rand'] = (Math.floor(Math.random() * 5) + 1);
      }
    }
  } else {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['position_rand'] = (Math.floor(Math.random() * 6) + 1);
  }
  if (((s as any).stat ?? 0)?.['think_virgin'] === 0  ||  ((s as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
    if (((s as any).sex_ev ?? 0)?.['position_rand'] === 1) {
      qspGoto(s, 'sex_ev_miss', 'missionary_start');
    } else {
      if (((s as any).sex_ev ?? 0)?.['position_rand'] === 2) {
        qspGoto(s, 'sex_ev_doggy', 'doggy_start');
      } else {
        if (((s as any).sex_ev ?? 0)?.['position_rand'] === 3) {
          qspGoto(s, 'sex_ev_cowgirl', 'cowgirl_goto');
        } else {
          if (((s as any).sex_ev ?? 0)?.['position_rand'] === 4) {
            qspGoto(s, 'sex_ev_anal', 'anal_goto');
          } else {
            if (((s as any).sex_ev ?? 0)?.['position_rand'] === 5) {
              qspGoto(s, 'sex_ev_foreplay', 'bj_ask');
            } else {
              if (((s as any).sex_ev ?? 0)?.['position_rand'] === 6  &&  (((s as any).sex_ev ?? 0)?.['creampie_count'] < 1  ||  ((s as any).npc_pussyeater ?? 0)?.[String((s as any).npcID ?? 0)] === 1)) {
                scene.text(`${((s as any).npcdesc ?? '')} starts leading a trail of kisses down your stomach towards your pussy.`);
                if (((s as any).kuni_yes ?? 0)?.[String((s as any).npcID ?? 0)] < 1) {
                  scene.actions([
                    { label: 'Close your legs', goto: ['sex_ev_foreplay', 'kuni_leg_close'] },
                  ]);
                }
                scene.actions([
                  { label: 'Spread your legs', goto: ['sex_ev_foreplay', 'kuni_leg_spread'] },
                ]);
              } else {
                if (((s as any).sex_ev ?? 0)?.['no_vag'] > 0) {
                  qspGoto(s, 'sex_ev_anal', 'anal_goto');
                } else {
                  if (((s as any).sex_ev ?? 0)?.['no_anal'] > 0) {
                    qspGoto(s, 'sex_ev_miss', 'missionary_start');
                  } else {
                    if ((Math.floor(Math.random() * 2) + 1) === 1) {
                      qspGoto(s, 'sex_ev_miss', 'missionary_start');
                    } else {
                      qspGoto(s, 'sex_ev_anal', 'anal_goto');
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['no_vag'] > 0) {
      qspGoto(s, 'sex_ev_anal', 'anal_goto');
    } else {
      if (((s as any).sex_ev ?? 0)?.['no_anal'] > 0) {
        qspGoto(s, 'sex_ev_miss', 'missionary_start');
      } else {
        if ((Math.floor(Math.random() * 2) + 1) === 1) {
          qspGoto(s, 'sex_ev_miss', 'missionary_start');
        } else {
          qspGoto(s, 'sex_ev_anal', 'anal_goto');
        }
      }
    }
  }
  scene.build();
}

function enterInsertionArousalCode(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_horny ?? 0) > 80  &&  ((s as any).npc_sexskill ?? 0) >= 60) {
    (s as any).orgasm_buildup = ((s as any).orgasm_buildup ?? 0) + (((s as any).npc_sexskill ?? 0));
  }
  if (((s as any).sex_ev ?? 0)?.['pain_init'] === 0) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['pain_init'] = 1;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['vaginal_pain'] = (((s as any).pain ?? 0)?.['vagina']);
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['cervix_pain'] = (((s as any).pain ?? 0)?.['cervix']);
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['asshole_pain'] = (((s as any).pain ?? 0)?.['asshole']);
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
  if (((s as any).sex_ev ?? 0)?.['prostitution_flag'] !== '') {
    if ((String(((s as any).sex_ev ?? 0)?.['position']).slice((1)-1, ((1)-1)+(4))) === 'anal') {
      qspCall(s, 'arousal', 'anal', 1, 'no_orgasm_msg', (((s as any).sex_ev ?? 0)?.['prostitution_flag']));
    } else {
      if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['deflowered'] = 1;
      }
      qspCall(s, 'arousal', 'vaginal', 1, 'no_orgasm_msg', (((s as any).sex_ev ?? 0)?.['prostitution_flag']));
    }
  } else {
    if ((String(((s as any).sex_ev ?? 0)?.['position']).slice((1)-1, ((1)-1)+(4))) === 'anal') {
      qspCall(s, 'arousal', 'anal', 1, 'no_orgasm_msg');
    } else {
      if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['deflowered'] = 1;
      }
      qspCall(s, 'arousal', 'vaginal', 1, 'no_orgasm_msg');
    }
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['new_pos'] = 0;
  scene.build();
}

function enterFuckArousalCode(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['initiative'] !== '') {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['initiative'] = '';
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['new_pos'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cock_inserted'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_time_temp'] = (Math.floor(Math.random() * 4) + 1);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_time_total'] = ((s as any).sex_ev['fuck_time_total'] ?? 0) + ((((s as any).sex_ev ?? 0)?.['fuck_time_temp']));
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['npc_stam'] = ((s as any).sex_ev['npc_stam'] ?? 0) - ((((s as any).sex_ev ?? {})?.['fuck_time_temp'] ?? 0) * 10);
  if (((s as any).sex_ev ?? 0)?.['fav_npc_position'] === 0) {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss'  &&  ((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'miss') {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['fav_npc_position'] = 1;
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy'  &&  ((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'doggy') {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fav_npc_position'] = 1;
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl'  &&  ((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'cowgirl') {
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['fav_npc_position'] = 1;
        } else {
          if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'anal') {
            ((s as any).sex_ev = (s as any).sex_ev ?? {})['fav_npc_position'] = 1;
          }
        }
      }
    }
  }
  if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'enjoy') {
    (s as any).orgasm_buildup = ((s as any).orgasm_buildup ?? 0) + ((((s as any).npc_sexskill ?? 0)?.[String((s as any).npcID ?? 0)] ?? 0));
  } else {
    (s as any).orgasm_or = 'no';
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
  if (((s as any).sex_ev ?? 0)?.['prostitution_flag'] !== '') {
    if ((String(((s as any).sex_ev ?? 0)?.['position']).slice((1)-1, ((1)-1)+(4))) === 'anal') {
      qspCall(s, 'arousal', 'anal', (((s as any).sex_ev ?? 0)?.['fuck_time_temp']), 'no_orgasm_msg', (((s as any).sex_ev ?? 0)?.['prostitution_flag']));
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['anal_dirt'] = 1;
      if (((s as any).sex_ev ?? 0)?.['anal_check'] < ((s as any).sex_ev ?? 0)?.['cum_count'] + 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['anal_check'] = (((s as any).sex_ev ?? {})?.['cum_count'] ?? 0) + 1;
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['anal_count'] = ((s as any).sex_ev['anal_count'] ?? 0) + (1);
      }
    } else {
      if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['deflowered'] = 1;
      }
      qspCall(s, 'arousal', 'vaginal', (((s as any).sex_ev ?? 0)?.['fuck_time_temp']), 'no_orgasm_msg', (((s as any).sex_ev ?? 0)?.['prostitution_flag']));
      if (((s as any).sex_ev ?? 0)?.['fuck_check'] < ((s as any).sex_ev ?? 0)?.['cum_count'] + 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_check'] = (((s as any).sex_ev ?? {})?.['cum_count'] ?? 0) + 1;
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_count'] = ((s as any).sex_ev['fuck_count'] ?? 0) + (1);
      }
      if (((s as any).sex_ev ?? 0)?.['anal_dirt'] === 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['ass_to_pussy_allowed'] = 1;
      }
    }
  } else {
    if ((String(((s as any).sex_ev ?? 0)?.['position']).slice((1)-1, ((1)-1)+(4))) === 'anal') {
      qspCall(s, 'arousal', 'anal', (((s as any).sex_ev ?? 0)?.['fuck_time_temp']), 'no_orgasm_msg');
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['anal_dirt'] = 1;
      if (((s as any).sex_ev ?? 0)?.['anal_check'] < ((s as any).sex_ev ?? 0)?.['cum_count'] + 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['anal_check'] = (((s as any).sex_ev ?? {})?.['cum_count'] ?? 0) + 1;
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['anal_count'] = ((s as any).sex_ev['anal_count'] ?? 0) + (1);
      }
    } else {
      if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['deflowered'] = 1;
      }
      qspCall(s, 'arousal', 'vaginal', (((s as any).sex_ev ?? 0)?.['fuck_time_temp']), 'no_orgasm_msg');
      if (((s as any).sex_ev ?? 0)?.['fuck_check'] < ((s as any).sex_ev ?? 0)?.['cum_count'] + 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_check'] = (((s as any).sex_ev ?? {})?.['cum_count'] ?? 0) + 1;
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_count'] = ((s as any).sex_ev['fuck_count'] ?? 0) + (1);
      }
      if (((s as any).sex_ev ?? 0)?.['anal_dirt'] === 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['ass_to_pussy_allowed'] = 1;
      }
    }
  }
  qspCall(s, 'stat', '');
  scene.build();
}

function enterFuckRoughArousalCode(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['new_pos'] = 0;
  if (((s as any).sex_ev ?? 0)?.['initiative'] !== '') {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['initiative'] = '';
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_time_temp'] = (Math.floor(Math.random() * 4) + 1);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_time_total'] = ((s as any).sex_ev['fuck_time_total'] ?? 0) + ((((s as any).sex_ev ?? 0)?.['fuck_time_temp']));
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['npc_stam'] = ((s as any).sex_ev['npc_stam'] ?? 0) - ((((s as any).sex_ev ?? {})?.['fuck_time_temp'] ?? 0) * 20);
  qspCall(s, 'sweat', 'add', 1);
  if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'enjoy') {
    (s as any).orgasm_buildup = ((s as any).orgasm_buildup ?? 0) + ((((s as any).npc_sexskill ?? 0)?.[String((s as any).npcID ?? 0)] ?? 0));
  } else {
    (s as any).orgasm_or = 'no';
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
  if ((String(((s as any).sex_ev ?? 0)?.['position']).slice((1)-1, ((1)-1)+(4))) === 'anal') {
    qspCall(s, 'arousal', 'anal', (((s as any).sex_ev ?? 0)?.['fuck_time_temp']), 'no_orgasm_msg', (((s as any).sex_ev ?? 0)?.['prostitution_flag']), 'rough');
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['anal_dirt'] = 1;
    if (((s as any).sex_ev ?? 0)?.['anal_check'] < ((s as any).sex_ev ?? 0)?.['cum_count'] + 1) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['anal_check'] = (((s as any).sex_ev ?? 0)?.['cum_count']);
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['anal_count'] = ((s as any).sex_ev['anal_count'] ?? 0) + (1);
    }
  } else {
    qspCall(s, 'arousal', 'vaginal', (((s as any).sex_ev ?? 0)?.['fuck_time_temp']), 'no_orgasm_msg', (((s as any).sex_ev ?? 0)?.['prostitution_flag']), 'rough');
    if (((s as any).sex_ev ?? 0)?.['fuck_check'] < ((s as any).sex_ev ?? 0)?.['cum_count'] + 1) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_check'] = (((s as any).sex_ev ?? 0)?.['cum_count']);
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_count'] = ((s as any).sex_ev['fuck_count'] ?? 0) + (1);
    }
    if (((s as any).sex_ev ?? 0)?.['anal_dirt'] === 1) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['ass_to_pussy_allowed'] = 1;
    }
  }
  qspCall(s, 'stat', '');
  scene.build();
}

function enterFuckRoughNoCumCode(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['new_pos'] = 0;
  (s as any).orgasm_or = 'no';
  if (((s as any).sex_ev ?? 0)?.['initiative'] !== '') {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['initiative'] = '';
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_time_temp'] = (Math.floor(Math.random() * 4) + 1);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_time_total'] = ((s as any).sex_ev['fuck_time_total'] ?? 0) + ((((s as any).sex_ev ?? 0)?.['fuck_time_temp']));
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['npc_stam'] = ((s as any).sex_ev['npc_stam'] ?? 0) - ((((s as any).sex_ev ?? {})?.['fuck_time_temp'] ?? 0) * 20);
  qspCall(s, 'sweat', 'add', 1);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
  if ((String(((s as any).sex_ev ?? 0)?.['position']).slice((1)-1, ((1)-1)+(4))) === 'anal') {
    qspCall(s, 'arousal', 'anal', (((s as any).sex_ev ?? 0)?.['fuck_time_temp']), 'no_orgasm_msg', (((s as any).sex_ev ?? 0)?.['prostitution_flag']), 'rough');
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['anal_dirt'] = 1;
    if (((s as any).sex_ev ?? 0)?.['anal_check'] < ((s as any).sex_ev ?? 0)?.['cum_count'] + 1) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['anal_check'] = (((s as any).sex_ev ?? 0)?.['cum_count']);
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['anal_count'] = ((s as any).sex_ev['anal_count'] ?? 0) + (1);
    }
  } else {
    qspCall(s, 'arousal', 'vaginal', (((s as any).sex_ev ?? 0)?.['fuck_time_temp']), 'no_orgasm_msg', (((s as any).sex_ev ?? 0)?.['prostitution_flag']), 'rough');
    if (((s as any).sex_ev ?? 0)?.['fuck_check'] < ((s as any).sex_ev ?? 0)?.['cum_count'] + 1) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_check'] = (((s as any).sex_ev ?? 0)?.['cum_count']);
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_count'] = ((s as any).sex_ev['fuck_count'] ?? 0) + (1);
    }
    if (((s as any).sex_ev ?? 0)?.['anal_dirt'] === 1) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['ass_to_pussy_allowed'] = 1;
    }
  }
  qspCall(s, 'stat', '');
  scene.build();
}

function enterFuckNoCumCode(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['new_pos'] = 0;
  (s as any).orgasm_or = 'no';
  if (((s as any).sex_ev ?? 0)?.['initiative'] !== '') {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['initiative'] = '';
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_time_temp'] = (Math.floor(Math.random() * 4) + 1);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_time_total'] = ((s as any).sex_ev['fuck_time_total'] ?? 0) + ((((s as any).sex_ev ?? 0)?.['fuck_time_temp']));
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['npc_stam'] = ((s as any).sex_ev['npc_stam'] ?? 0) - ((((s as any).sex_ev ?? {})?.['fuck_time_temp'] ?? 0) * 10);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
  if ((String(((s as any).sex_ev ?? 0)?.['position']).slice((1)-1, ((1)-1)+(4))) === 'anal') {
    qspCall(s, 'arousal', 'anal', (((s as any).sex_ev ?? 0)?.['fuck_time_temp']), 'no_orgasm_msg', (((s as any).sex_ev ?? 0)?.['prostitution_flag']));
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['anal_dirt'] = 1;
    if (((s as any).sex_ev ?? 0)?.['anal_check'] < ((s as any).sex_ev ?? 0)?.['cum_count'] + 1) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['anal_check'] = (((s as any).sex_ev ?? 0)?.['cum_count']);
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['anal_count'] = ((s as any).sex_ev['anal_count'] ?? 0) + (1);
    }
  } else {
    qspCall(s, 'arousal', 'vaginal', (((s as any).sex_ev ?? 0)?.['fuck_time_temp']), 'no_orgasm_msg', (((s as any).sex_ev ?? 0)?.['prostitution_flag']));
    if (((s as any).sex_ev ?? 0)?.['fuck_check'] < ((s as any).sex_ev ?? 0)?.['cum_count'] + 1) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_check'] = (((s as any).sex_ev ?? 0)?.['cum_count']);
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_count'] = ((s as any).sex_ev['fuck_count'] ?? 0) + (1);
    }
    if (((s as any).sex_ev ?? 0)?.['anal_dirt'] === 1) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['ass_to_pussy_allowed'] = 1;
    }
  }
  qspCall(s, 'stat', '');
  scene.build();
}

function enterFuckArousalCreampieCumCode(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_time_temp'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_time_total'] = ((s as any).sex_ev['fuck_time_total'] ?? 0) + (1);
  if (((s as any).sex_ev ?? 0)?.['creampie_ask'] === 1) {
    if ((String(((s as any).sex_ev ?? 0)?.['position']).slice((1)-1, ((1)-1)+(4))) === 'anal') {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['ask_creampie_count'] = ((s as any).sex_ev['ask_creampie_count'] ?? 0) + (1);
    } else {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['ask_anal_creampie_count'] = ((s as any).sex_ev['ask_anal_creampie_count'] ?? 0) + (1);
    }
  }
  if (((s as any).sex_ev ?? 0)?.['position'] === 'miss'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'doggy'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
    qspCall(s, 'arousal', 'vaginal', (((s as any).sex_ev ?? 0)?.['fuck_time_temp']), 'no_orgasm_msg', (((s as any).sex_ev ?? 0)?.['prostitution_flag']));
  } else {
    qspCall(s, 'arousal', 'anal', (((s as any).sex_ev ?? 0)?.['fuck_time_temp']), 'no_orgasm_msg', (((s as any).sex_ev ?? 0)?.['prostitution_flag']));
  }
  qspCall(s, 'stat', '');
  scene.build();
}

function enterGirlOrgasmChangePosition(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['position'] === ((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)]  ||  (Math.floor(Math.random() * 2) + 1) === 1) {
    qspCall(s, 'sex_ev_' + (((s as any).sex_ev ?? 0)?.['position']) + '', '' + (((s as any).sex_ev ?? 0)?.['position']) + '_girl_orgasm_continue');
  } else {
    if ((Math.floor(Math.random() * 3) + 1) === 1) {
      qspCall(s, 'sex_ev_miss', 'miss_girl_orgasm_continue');
    } else {
      if ((Math.floor(Math.random() * 2) + 1) === 1) {
        qspCall(s, 'sex_ev_doggy', 'doggy_girl_orgasm_continue');
      } else {
        qspCall(s, 'sex_ev_cowgirl', 'cowgirl_girl_orgasm_continue');
      }
    }
  }
  scene.build();
}

function enterFuckContinue(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cock_inserted'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck'] = 1;
  if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['miss_fuck'] = 1;
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['doggy_fuck'] = 1;
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['cowgirl_fuck'] = 1;
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'anal') {
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['anal_fuck'] = 1;
        }
      }
    }
  }
  if (((s as any).sex_ev ?? 0)?.['girl_orgasm'] === 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['girl_orgasm'] = 0;
    if ((Math.floor(Math.random() * 3) + 1) === 1) {
      if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'miss'  &&  (Math.floor(Math.random() * 3) + 0) === 1) {
        scene.actions([
          { label: 'Continue', goto: ['sex_ev_miss', 'miss_girl_orgasm_continue'] },
        ]);
      } else {
        if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'doggy'  &&  (Math.floor(Math.random() * 3) + 0) === 1) {
          scene.actions([
            { label: 'Continue', goto: ['sex_ev_doggy', 'doggy_girl_orgasm_continue'] },
          ]);
        } else {
          if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'cowgirl'  &&  (Math.floor(Math.random() * 3) + 0) === 1) {
            scene.actions([
              { label: 'Continue', goto: ['sex_ev_cowgirl', 'cowgirl_girl_orgasm_continue'] },
            ]);
          } else {
            if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'anal'  &&  (Math.floor(Math.random() * 3) + 0) === 1) {
              scene.actions([
                { label: 'Continue', goto: ['sex_ev_anal', 'anal_girl_orgasm_continue'] },
              ]);
            } else {
              if (((s as any).sex_ev ?? 0)?.['position'] === 'anal') {
                scene.actions([
                  { label: 'Continue', goto: ['sex_ev_anal', 'anal_girl_orgasm_continue'] },
                ]);
              } else {
                scene.actions([
                  { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'sex_ev_' + String((((st as any).sex_ev ?? {})['position'])), String((((st as any).sex_ev ?? {})['position'])) + '_girl_orgasm_continue');
  } },
                ]);
              }
            }
          }
        }
      }
    } else {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'sex_ev_' + String((((st as any).sex_ev ?? {})['position'])), String((((st as any).sex_ev ?? {})['position'])) + '_girl_orgasm_continue');
  } },
      ]);
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['bored'] === 1) {
      scene.actions([
        { label: 'Keep going', handler: (st: GameState) => {
    dynamicGoto(st, 'sex_ev_' + String((((st as any).sex_ev ?? {})['position'])), String((((st as any).sex_ev ?? {})['pos_speed'])) + '.bored');
  } },
      ]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'painful') {
        (s as any).orgasm_or = 'no';
        if (((s as any).sex_ev ?? 0)?.['speed'] === 3) {
          scene.actions([
            { label: 'Sob', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_pain'] = 4;
    dynamicGoto(st, 'sex_ev_' + String((((st as any).sex_ev ?? {})['position'])), String((((st as any).sex_ev ?? {})['position'])) + String((((st as any).sex_ev ?? {})['speed'])) + '.2');
  } },
            { label: 'Try to hold back tears', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_pain'] = 3;
    dynamicGoto(st, 'sex_ev_' + String((((st as any).sex_ev ?? {})['position'])), String((((st as any).sex_ev ?? {})['position'])) + String((((st as any).sex_ev ?? {})['speed'])) + '.2');
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Hold back tears', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_pain'] = 3;
    dynamicGoto(st, 'sex_ev_' + String((((st as any).sex_ev ?? {})['position'])), String((((st as any).sex_ev ?? {})['position'])) + String((((st as any).sex_ev ?? {})['speed'])) + '.2');
  } },
          ]);
        }
        if (((s as any).npc_sexskill ?? 0)?.[String((s as any).npcID ?? 0)] > 25) {
          scene.actions([
            { label: 'The pain is fading', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_pain'] = 1;
    dynamicGoto(st, 'sex_ev_' + String((((st as any).sex_ev ?? {})['position'])), String((((st as any).sex_ev ?? {})['position'])) + String((((st as any).sex_ev ?? {})['speed'])) + '.2');
  } },
          ]);
        }
        scene.actions([
          { label: 'Persevere', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_pain'] = 2;
    dynamicGoto(st, 'sex_ev_' + String((((st as any).sex_ev ?? {})['position'])), String((((st as any).sex_ev ?? {})['position'])) + String((((st as any).sex_ev ?? {})['speed'])) + '.2');
  } },
        ]);
      } else {
        if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'unsatisfying') {
          (s as any).orgasm_or = 'no';
          if (((s as any).npc_sexskill ?? 0)?.[String((s as any).npcID ?? 0)] > 50) {
            scene.actions([
              { label: 'Starting to feel good', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_pain'] = (-1);
    (st as any).orgasm_or = '';
    dynamicGoto(st, 'sex_ev_' + String((((st as any).sex_ev ?? {})['position'])), String((((st as any).sex_ev ?? {})['position'])) + String((((st as any).sex_ev ?? {})['speed'])) + '.2');
  } },
            ]);
          }
          if (((s as any).sex_ev ?? 0)?.['speed'] !== 3  &&  ((s as any).sex_ev ?? 0)?.['unique_npc'] === 1) {
            scene.actions([
              { label: 'Talk while fucking', handler: (st: GameState) => {
    if ((String(((st as any).npcID ?? 0)).slice((1)-1, ((1)-1)+(1))) === 'A') {
      dynamicGoto(st, 'sex_ev_sex_talk_' + String(((st as any).npcID ?? '')), 'talk_menu');
    } else {
      qspGoto(st, 'sex_ev_sex_talk_npc', 'talk_menu');
    }
  } },
            ]);
          }
          scene.actions([
            { label: 'Just keep fucking', handler: (st: GameState) => {
    dynamicGoto(st, 'sex_ev_' + String((((st as any).sex_ev ?? {})['position'])), String((((st as any).sex_ev ?? {})['position'])) + String((((st as any).sex_ev ?? {})['speed'])) + '.2');
  } },
            { label: 'Fake some moans', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['enthusiasm'] = (((st as any).sex_ev = (st as any).sex_ev ?? {})['enthusiasm'] ?? 0) + (1);
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['moan'] = 2;
    dynamicGoto(st, 'sex_ev_' + String((((st as any).sex_ev ?? {})['position'])), String((((st as any).sex_ev ?? {})['position'])) + String((((st as any).sex_ev ?? {})['speed'])) + '.2');
  } },
            { label: 'Dirty talk...', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['enthusiasm'] = (((st as any).sex_ev = (st as any).sex_ev ?? {})['enthusiasm'] ?? 0) + (2);
    qspCall(st, 'sex_ev_sex', '');
  } },
          ]);
        } else {
          (s as any).orgasm_or = '';
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['moan'] = 0;
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['dirty_talk_count'] = 1;
          dynamicGoto(s, 'sex_ev_' + String((((s as any).sex_ev ?? {})['position'])), '' + (((s as any).sex_ev ?? 0)?.['position']) + '' + (((s as any).sex_ev ?? 0)?.['speed']) + '.2');
          if (((s as any).sex_ev ?? 0)?.['speed'] !== 3  &&  ((s as any).sex_ev ?? 0)?.['unique_npc'] === 1) {
            scene.actions([
              { label: 'Talk while fucking', handler: (st: GameState) => {
    if ((String(((st as any).npcID ?? 0)).slice((1)-1, ((1)-1)+(1))) === 'A') {
      dynamicGoto(st, 'sex_ev_sex_talk_' + String(((st as any).npcID ?? '')), 'during_sex_talk_menu');
    } else {
      qspGoto(st, 'sex_ev_sex_talk_npc', 'during_sex_talk_menu');
    }
  } },
            ]);
          }
          scene.actions([
            { label: 'Focus on the sensations', handler: (st: GameState) => {
    (st as any).sex_ev[dirty_talk] = '';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['moan'] = 0;
    dynamicGoto(st, 'sex_ev_' + String((((st as any).sex_ev ?? {})['position'])), String((((st as any).sex_ev ?? {})['position'])) + String((((st as any).sex_ev ?? {})['speed'])) + '.2');
  } },
            { label: 'Moan softly', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['enthusiasm'] = (((st as any).sex_ev = (st as any).sex_ev ?? {})['enthusiasm'] ?? 0) + (1);
    (st as any).sex_ev[dirty_talk] = '';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['moan'] = 1;
    dynamicGoto(st, 'sex_ev_' + String((((st as any).sex_ev ?? {})['position'])), String((((st as any).sex_ev ?? {})['position'])) + String((((st as any).sex_ev ?? {})['speed'])) + '.2');
  } },
            { label: 'Moan loudly', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['enthusiasm'] = (((st as any).sex_ev = (st as any).sex_ev ?? {})['enthusiasm'] ?? 0) + (2);
    (st as any).sex_ev[dirty_talk] = '';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['moan'] = 2;
    dynamicGoto(st, 'sex_ev_' + String((((st as any).sex_ev ?? {})['position'])), String((((st as any).sex_ev ?? {})['position'])) + String((((st as any).sex_ev ?? {})['speed'])) + '.2');
  } },
            { label: 'Dirty talk...', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['enthusiasm'] = (((st as any).sex_ev = (st as any).sex_ev ?? {})['enthusiasm'] ?? 0) + (2);
  }, goto: ['sex_ev_sex', 'dirty_talk1'] },
          ]);
        }
      }
    }
    if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
      scene.actions([
        { label: 'Change pace', goto: ['sex_ev_cowgirl', 'cowgirl_change_pace'] },
      ]);
    } else {
      scene.actions([
        { label: 'Ask to change pace', goto: ['sex_ev_sex', 'change_pace'] },
      ]);
    }
    if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
      if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] !== 'enjoy') {
        scene.actions([
          { label: 'Take charge', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cowgirl_dom'] = 1;
    scene.img('images/shared/sex/vag/cowgirl/slow3.mp4');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    scene.text('<i>Ugh, that\'s it!</i> you think to yourself, unable to take it any longer.');
    scene.text(`You shove ${(((st as any).npc_usedname ?? 0)?.[String((st as any).npcID ?? 0)] ?? '')}'s head down onto the pillow, causing him to grunt, his whole body freezing in surprise.`);
    scene.text('"You\'re not doing a good enough job," you smile wickedly. "Let <i>me</i> show you."');
    scene.text('Taking advantage of the moment, you set your own pace, rubbing your cunt up and down his shaft, using it as your own personal sex toy. Like a cat on a scratching post.');
    scene.text('"Just relax," you coo and you hear him moan in agreement. "Sit back and let\'s <i>both</i> enjoy this..."');
    qspGoto(st, 'sex_ev_cowgirl', 'cowgirl_menu2');
  } },
        ]);
      }
      if (((s as any).sex_ev ?? 0)?.['speed'] <= 2) {
        scene.actions([
          { label: '', labelFn: (s: GameState) => 'Kiss ' + String(((s as any).npcdesc ?? '') ?? ''), goto: ['sex_ev_cowgirl', 'cowgirl_kiss'] },
        ]);
      }
    }
    if (((s as any).sex_ev ?? 0)?.['stop_orgasm'] === 0) {
      scene.actions([
        { label: 'Prevent orgasm', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['stop_orgasm'] = 1;
    (st as any).orgasm_or = 'no';
    alert('You will not orgasm from sex while this is toggled');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFuckContinue(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Release orgasm', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['stop_orgasm'] = 0;
    (st as any).orgasm_or = '';
    alert('You can orgasm again');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFuckContinue(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    qspCall(s, 'sex_ev_after', 'tap_out');
    if (((s as any).sex_ev ?? 0)?.['pc_cocaine'] === 1  &&  ((s as any).sex_ev ?? 0)?.['boy_cocaine'] === 1) {
      scene.actions([
        { label: 'Fuck all night long', goto: ['sex_ev_events', 'coke_all_nighter'] },
      ]);
    }
    qspCall(s, 'sex_ev_events', 'rand_ev_check');
    scene.actions([
      { label: 'Fake enjoyment', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['bored'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['moan'] = 3;
    (st as any).orgasm_or = 'no';
    dynamicGoto(st, 'sex_ev_' + String((((st as any).sex_ev ?? {})['position'])), String((((st as any).sex_ev ?? {})['position'])) + String((((st as any).sex_ev ?? {})['speed'])) + '.2');
  } },
      { label: '', labelFn: (s: GameState) => 'Try to make ' + String(((s as any).npcdesc ?? '') ?? '') + ' come', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cum_speed_up'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['extra_stim'] = ((st as any).sex_ev['extra_stim'] ?? 0) + (1);
    dynamicGoto(st, 'sex_ev_' + String((((st as any).sex_ev ?? {})['position'])), '' + (((st as any).sex_ev ?? 0)?.['position']) + '' + (((st as any).sex_ev ?? 0)?.['speed']) + '.2');
  } },
      { label: 'Change position', goto: ['sex_ev_sex', 'position_change'] },
      { label: '', labelFn: (s: GameState) => 'Ask ' + String(((s as any).npcdesc ?? '') ?? '') + ' to hurry up and finish', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['hurry_up'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['boy_cum'] = 1;
    qspGoto(st, 'sex_ev_sex', 'hurry_up_menu');
  } },
    ]);
  }
  if ((Math.floor(Math.random() * 2) + 1) === 1  &&  ((s as any).sex_ev ?? 0)?.['talk_topic'] !== ''  &&  (((s as any).sex_ev ?? 0)?.['cycle_limit'] + ((s as any).sex_ev ?? 0)?.['extra_stim']) > ((s as any).sex_ev ?? 0)?.['sex_stamina'] - (Math.floor(Math.random() * 2) + 1)  &&  ((s as any).sex_ev ?? 0)?.['cum_limit_warning'] === 0) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_limit_warning'] = 1;
    if (((s as any).npc_love_style ?? 0)?.[String((s as any).npcID ?? 0)] === 'gentle') {
      if ((Math.floor(Math.random() * 2) + 1) === 1) {
        scene.text(`"${(((s as any).pcs_Upetname ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}!" ${((s as any).npcdesc ?? '')} pants. "I can't-! Can't-! Can't hold it-! Much longer-!"`);
      } else {
        scene.text(`"${(((s as any).pcs_Upetname ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}! Your pussy-!" ${((s as any).npcdesc ?? '')} gasps. "It's so good! I don't know how much longer I can last!"`);
      }
    } else {
      if (((s as any).npc_love_style ?? 0)?.[String((s as any).npcID ?? 0)] === 'dirty') {
        if ((Math.floor(Math.random() * 2) + 1) === 1) {
          scene.text(`"Fuck! Your pussy is so tight, ${(((s as any).pcs_Lpetname ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}!" ${((s as any).npcdesc ?? '')} pants. "I can't last much longer like this!"`);
        } else {
          scene.text(`"${(((s as any).pcs_Upetname ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}, your sloppy pussy is milking me dry," ${((s as any).npcdesc ?? '')} pants. "Fuck, I think I'm gonna cum soon."`);
        }
      } else {
        if (((s as any).npc_love_style ?? 0)?.[String((s as any).npcID ?? 0)] === 'sensual') {
          if ((Math.floor(Math.random() * 2) + 1) === 1) {
            scene.text(`"You feel so good, ${(((s as any).pcs_Upetname ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}," ${((s as any).npcdesc ?? '')} moans. "I'm not going to last at this rate..."`);
          } else {
            scene.text(`"${(((s as any).pcs_Upetname ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}! Your pussy-!" ${((s as any).npcdesc ?? '')} gasps. "It's so good! I don't know how much longer I can last!"`);
          }
        }
      }
    }
  }
  scene.build();
}

function enterPositionChange(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['speed'] === 0) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['speed'] = (Math.floor(Math.random() * 3) + 1);
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['change_pos'] = 1;
  if (((s as any).sex_ev ?? 0)?.['position'] !== 'miss') {
    scene.actions([
      { label: 'Switch to missionary', goto: ['sex_ev_miss', 'miss_switch'] },
    ]);
  } else {
    scene.actions([
      { label: 'Stay in missionary', goto: ['sex_ev_miss', 'miss' + String((((s as any).sex_ev ?? {})['speed'])) + '.2'] },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['position'] !== 'doggy') {
    scene.actions([
      { label: 'Switch to doggystyle', goto: ['sex_ev_doggy', 'doggy_switch'] },
    ]);
  } else {
    scene.actions([
      { label: 'Stay in doggystyle', goto: ['sex_ev_doggy', 'doggy' + String((((s as any).sex_ev ?? {})['speed'])) + '.2'] },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['position'] !== 'cowgirl') {
    scene.actions([
      { label: 'Switch to cowgirl', goto: ['sex_ev_cowgirl', 'cowgirl_switch2'] },
    ]);
  } else {
    scene.actions([
      { label: 'Stay in cowgirl', goto: ['sex_ev_cowgirl', 'cowgirl' + String((((s as any).sex_ev ?? {})['speed'])) + '.2'] },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['position'] !== 'anal') {
    if (((s as any).pcs_ass ?? 0) === 0  &&  ((s as any).sex_ev ?? 0)?.['anal_count'] === 0) {
      scene.actions([
        { label: 'Try anal (doggy)', goto: ['sex_ev_anal', 'anal_present_ass'] },
      ]);
    } else {
      scene.actions([
        { label: 'Switch to anal', goto: ['sex_ev_anal', 'anal_doggy_switch'] },
      ]);
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['speed'] === 0) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['speed'] = (Math.floor(Math.random() * 3) + 1);
    }
    scene.actions([
      { label: 'Keep taking it up the ass', goto: ['sex_ev_anal', 'anal' + String((((s as any).sex_ev ?? {})['speed'])) + '.2'] },
    ]);
  }
  scene.actions([
    { label: 'Switch to blowjob', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['blowjob_switch'] = 1;
    scene.actions([
      { label: 'Pussy needs a break', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/3.jpg');
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterInsertedImg(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
    scene.text(`"Think I could blow you for a little while?" you ask, stopping ${((st as any).npcdesc ?? '')} mid-thrust. "My pussy could use quick break."`);
    if (((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] === 1  &&  (Math.floor(Math.random() * 3) + 1) < 3  &&  ((st as any).npc_fav_pos ?? 0)?.[String((st as any).npcID ?? 0)] !== 'blowjob') {
      scene.text(`"Come on, can't you just bear with it a little longer?" ${((st as any).npcdesc ?? '')} whines. "I'm really enjoying this."`);
      if (((st as any).dick_desc ?? 0) === 'thick'  ||  ((st as any).dick_desc ?? 0) === 'long'  ||  ((st as any).dick_desc ?? 0) === 'huge'  ||  ((st as any).dick_desc ?? 0) === 'enormous'  ||  ((st as any).dick_desc ?? 0) === 'lengthy'  ||  ((st as any).dick_desc ?? 0) === 'gigantic'  ||  ((st as any).dick_desc ?? 0) === 'monstrous') {
        scene.actions([
          { label: 'Dick too big', handler: (st: GameState) => {
    scene.text('"You\'re dick is just too big for me," you moan. "My vagina is gonna have bruises tomorrow if we keep going like this. I just need a break. Please?"');
    scene.text(`"Ugh, fiiiine," ${((st as any).npcdesc ?? '')} moans begrudgingly.`);
    scene.actions([
      { label: 'Blow him', goto: ['sex_ev_foreplay', 'bj_dom2'] },
    ]);
  } },
          { label: 'Dick too big (appeal to his pride)', handler: (st: GameState) => {
    scene.text('"It\'s cause your dick is so big," you say with a sultry smile. "I just can\'t handle your <i>big <b>huge</b></i> cock. Just a quick break and then you can get right back to destroying my pussy."');
    scene.text(`"Well," ${((st as any).npcdesc ?? '')} says haughtily. "I guess if you can't handle it..."`);
    scene.actions([
      { label: 'Thanks', handler: (st: GameState) => {
    scene.text('"Thanks," you smile with gratitude and slip off his cock to take it in your mouth.');
    scene.actions([
      { label: 'Blow him', goto: ['sex_ev_foreplay', 'bj_dom2'] },
    ]);
  } },
      { label: 'Moron', handler: (st: GameState) => {
    scene.text('"Thanks," you smile and slip off his cock.');
    scene.text('<i>Boys are so easy to control,</i> you think to yourself, rolling your eyes as you take his cock in your mouth.');
    scene.actions([
      { label: 'Blow him', goto: ['sex_ev_foreplay', 'bj_dom2'] },
    ]);
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Acquiesce', handler: (st: GameState) => {
    scene.actions([
      { label: 'Reluctantly', handler: (st: GameState) => {
    scene.text(`"I guess we can keep going for now," you sigh reluctantly and get back to fucking ${((st as any).npcdesc ?? '')}.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFuckContinue(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Generously', handler: (st: GameState) => {
    scene.text(`"If you're really enjoying it that much..." you trail off with a smile and resume fucking ${((st as any).npcdesc ?? '')}.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFuckContinue(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
        { label: 'Insist', handler: (st: GameState) => {
    scene.text('"Seriously," you insist. "My pussy can\'t take much more of this if we keep it up. Just a quick break and then we\'ll get right back to sex, okay?"');
    scene.text(`"Ugh, fiiiine," ${((st as any).npcdesc ?? '')} moans begrudgingly.`);
    scene.actions([
      { label: 'Blow him', goto: ['sex_ev_foreplay', 'bj_dom2'] },
    ]);
  } },
      ]);
    } else {
      if (((st as any).npc_fav_pos ?? 0)?.[String((st as any).npcID ?? 0)] === 'blowjob') {
        scene.text('"Sure," he grins. "I love blowjobs anyways."');
        scene.actions([
          { label: 'Blow him', goto: ['sex_ev_foreplay', 'bj_dom2'] },
        ]);
      } else {
        scene.text('"Sure," he grins. "As long as we can come back later."');
        scene.actions([
          { label: 'Blow him', goto: ['sex_ev_foreplay', 'bj_dom2'] },
        ]);
      }
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterChangePace(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['speed'] > 1) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFuckMeSlower(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).sex_ev ?? 0)?.['speed'] < 3) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFuckMeFaster(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  scene.actions([
    { label: 'Never mind', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', '');
  } },
  ]);
  scene.build();
}

function enterFuckMeFaster(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: '', labelFn: (s: GameState) => 'Ask ' + String(((s as any).npcdesc ?? '') ?? '') + ' to fuck you faster', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/2.jpg');
      if (((st as any).sex_ev ?? 0)?.['speed'] === 1) {
        scene.text('"Not that this isn\'t nice and all," you say, gesturing at yourself and the gentle lovemaking going on between your thighs. "But do you think we could go a little faster?"');
        scene.text(`"I could do that," ${((st as any).npcdesc ?? '')} says and starts to speed up.`);
      } else {
        scene.text(`"Could you go harder?" you ask ${((st as any).npcdesc ?? '')}, panting between thrusts.`);
        if (((st as any).npc_arrogant ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
          scene.text('"You sure you can handle it?" he grins.');
          scene.text('"Yeah," you smirk in reply. "<i>Pound</i> my pussy."');
        } else {
          scene.text('"If that\'s what you want," he pants in reply and grabs you by the hips to start pounding his cock into your pussy.');
        }
      }
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/1.jpg');
        if (((st as any).sex_ev ?? 0)?.['speed'] === 1) {
          scene.text(`"Not that this isn't nice and all," you say, looking over your shoulder as ${((st as any).npcdesc ?? '')} gently thrusts into your snatch. "But do you think we could go a little faster?"`);
          scene.text(`"I could do that," ${((st as any).npcdesc ?? '')} says and starts to speed up.`);
        } else {
          scene.text(`"Could you go harder?" you ask ${((st as any).npcdesc ?? '')} over your shoulder between the clapping of your cheeks.`);
          if (((st as any).npc_arrogant ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
            scene.text('"You sure you can handle it?" he grins.');
            scene.text('"Yeah," you smirk in reply. "<i>Pound</i> my pussy."');
          } else {
            scene.text('"If that\'s what you want," he pants in reply and grabs you by the hips to start pounding his cock into your pussy.');
          }
        }
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'anal') {
          scene.img('images/shared/sex/vag/doggy/1.jpg');
          if (((st as any).sex_ev ?? 0)?.['speed'] === 1) {
            scene.text(`"Not that this isn't nice and all," you say, looking over your shoulder as ${((st as any).npcdesc ?? '')} gently thrusts into your snatch. "But do you think we could go a little faster?"`);
            scene.text(`"I could do that," ${((st as any).npcdesc ?? '')} says and starts to speed up.`);
          } else {
            scene.text(`"Could you go harder?" you ask ${((st as any).npcdesc ?? '')} over your shoulder between the clapping of your cheeks.`);
            if (((st as any).npc_arrogant ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
              scene.text('"You sure you can handle it?" he grins.');
              scene.text('"Yeah," you smirk in reply. "<i>Pound</i> my pussy."');
            } else {
              scene.text('"If that\'s what you want," he pants in reply and grabs you by the hips to start pounding his cock into your pussy.');
            }
          }
        }
      }
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['speed'] = (((st as any).sex_ev = (st as any).sex_ev ?? {})['speed'] ?? 0) + (1);
    dynamicGoto(st, 'sex_ev_' + String((((st as any).sex_ev ?? {})['position'])), String((((st as any).sex_ev ?? {})['position'])) + String((((st as any).sex_ev ?? {})['speed'])) + '.2');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterFuckMeSlower(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: '', labelFn: (s: GameState) => 'Ask ' + String(((s as any).npcdesc ?? '') ?? '') + ' to fuck you slower', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
      if (((st as any).sex_ev ?? 0)?.['speed'] === 3) {
        scene.img('images/shared/sex/vag/miss/hard3.mp4');
        scene.text('"Do-! You-! Think-!" you pant out breathlessly between the sounds of slapping flesh. "We-! Could-! Slow down-! A bit-?"');
        scene.text(`"I could do that," ${((st as any).npcdesc ?? '')} says and moves into more of a rhythm and less of a hammering.`);
      } else {
        scene.img('images/shared/sex/vag/miss/2.jpg');
        scene.text(`"Hey," you say, stopping ${((st as any).npcdesc ?? '')}. "Would you mind if we go a little more gently for a little while?"`);
        scene.text('"Sure."');
      }
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy'  ||  ((st as any).sex_ev ?? 0)?.['position'] === 'anal') {
        scene.img('images/shared/sex/vag/doggy/hard2.mp4');
        if (((st as any).sex_ev ?? 0)?.['speed'] === 3) {
          scene.text('"Do-! You-! Think-!" you pant out breathlessly between the sounds of slapping flesh. "We-! Could-! Slow down-! A bit-?"');
          scene.text(`"I could do that," ${((st as any).npcdesc ?? '')} says and moves into more of a rhythm and less of a hammering.`);
        } else {
          scene.img('images/shared/sex/vag/doggy/1.jpg');
          scene.text(`"Hey," you say, stopping ${((st as any).npcdesc ?? '')}. "Would you mind if we go a little more gently for a little while?"`);
          scene.text('"Sure."');
        }
      }
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['speed'] = (((st as any).sex_ev = (st as any).sex_ev ?? {})['speed'] ?? 0) - (1);
    dynamicGoto(st, 'sex_ev_' + String((((st as any).sex_ev ?? {})['position'])), String((((st as any).sex_ev ?? {})['position'])) + String((((st as any).sex_ev ?? {})['speed'])) + '.2');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterHurryUpMenu(s: GameState, scene: SceneBuilder): void {
  if (((s as any).kanikuli ?? 0) === 0  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0  &&  ((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 6) {
    scene.actions([
      { label: 'Need to get to school', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['school_stop'] = 1;
    if (((st as any).sex_ev ?? 0)?.['speed'] < 3) {
      scene.text('"Hey, are you close?" you ask, looking at the clock. "We need to stop soon or I\'ll be late for school."');
    } else {
      scene.text('"Hey-! Are you-! Close-?" you barely manage to pant out, looking at the clock. "I need to-! Get to class-!"');
    }
    scene.text('"Just give me a minute," he grunts back.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'sex_ev_' + String((((st as any).sex_ev ?? {})['position'])), String((((st as any).sex_ev ?? {})['position'])) + String((((st as any).sex_ev ?? {})['speed'])) + '.2');
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Running out of time', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_time_stop'] = 1;
    if (((st as any).sex_ev ?? 0)?.['speed'] < 3) {
      scene.text('"Are you close to coming?" you ask, looking at the clock. "I need to get going soon."');
    } else {
      scene.text('"Are you close to coming?" you barely manage to pant out, looking at the clock. "I need to get going soon."');
    }
    scene.text('"Just give me a minute," he grunts back.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'sex_ev_' + String((((st as any).sex_ev ?? {})['position'])), String((((st as any).sex_ev ?? {})['position'])) + String((((st as any).sex_ev ?? {})['speed'])) + '.2');
  } },
    ]);
  } },
    { label: 'Need to get to work', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['work_stop'] = 1;
    if (((st as any).sex_ev ?? 0)?.['speed'] < 3) {
      scene.text('"Hey, are you close?" you ask, looking at the clock. "I need to get work soon."');
    } else {
      scene.text('"Hey-! Are you-! Close-?" you barely manage to pant out, looking at the clock. "I need to-! Get to work soon-!"');
    }
    scene.text('"Just give me a minute," he grunts back.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'sex_ev_' + String((((st as any).sex_ev ?? {})['position'])), String((((st as any).sex_ev ?? {})['position'])) + String((((st as any).sex_ev ?? {})['speed'])) + '.2');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterGirlCumPre(s: GameState, scene: SceneBuilder): void {
  scene.text('It isn\'t long before you feel right at the edge of climax. Your body tenses up, pressure builds inside you, straining against your skin which feels hot and tingly. You feel like you\'re going to explode any second now.');
  scene.build();
}

function enterSexEnd(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['last_cum_time'] = ((s as any).totminut ?? 0);
  if (((s as any).sex_ev ?? 0)?.['special_event'] === 'sugar_shoes') {
    if (((s as any).sex_ev ?? 0)?.['react'] === 1) {
      scene.actions([
        { label: 'Fall on the bed', goto: ['sex_ev_events', 'sugar_shoes_cum'] },
      ]);
    } else {
      qspCall(s, 'sex_ev_reactions', 'cum_react');
      scene.actions([
        { label: 'Fall on the bed', goto: ['sex_ev_events', 'sugar_shoes_cum'] },
      ]);
    }
    return;
  }
  if (((s as any).sex_ev ?? 0)?.['mad'] === 1) {
    qspCall(s, 'sex_ev_after', 'bad_sex_end');
  } else {
    qspCall(s, 'sex_ev_after', 'stop_here');
  }
  if (((s as any).sex_ev ?? 0)?.['sex_stop'] === 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterKeepGoing(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTakeABreak(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterHardenHand(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterHardenMouth(s, scene); (s as any).locArgs = __savedLocArgs; }
    qspCall(s, 'sex_ev_after', 'tap_out');
  }
  qspCall(s, 'sex_ev_after', 'cum_clean');
  if (((s as any).sex_ev ?? 0)?.['react'] === 0) {
    qspCall(s, 'sex_ev_after', 'facial_mouth_clean');
    qspCall(s, 'sex_ev_reactions', 'cum_kiss_cock');
    qspCall(s, 'sex_ev_reactions', 'cum_react');
  }
  qspCall(s, 'sex_ev_cum', 'cum_inside_pull_away');
  if (((s as any).sex_ev ?? 0)?.['hurry_up'] > 0) {
    qspCall(s, 'sex_ev_after', 'stop_hurry1');
  }
  scene.build();
}

function enterSpeedSelect(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['hate_fuck'] === 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['speed'] = 3;
  } else {
    if (((s as any).sex_ev ?? 0)?.['too_rough'] === 1  ||  ((s as any).npc_no_rough ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['speed'] = (Math.floor(Math.random() * 2) + 1);
    } else {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['speed'] = (((s as any).npc_sex_speed ?? 0)?.[String((s as any).npcID ?? 0)] ?? 0) + (Math.floor(Math.random() * (1 - (-1) + 1)) + ((-1)));
      if (((s as any).sex_ev ?? 0)?.['speed'] <= 0) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['speed'] = 1;
      }
      if (((s as any).sex_ev ?? 0)?.['speed'] > 3) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['speed'] = 3;
      }
    }
  }
  scene.build();
}

function enterMoanSelections(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Just keep fucking', handler: (st: GameState) => {
    dynamicGoto(st, 'sex_ev_' + String((((st as any).sex_ev ?? {})['position'])), String((((st as any).sex_ev ?? {})['position'])) + String((((st as any).sex_ev ?? {})['speed'])) + '.2');
  } },
    { label: 'Focus on the sensations', handler: (st: GameState) => {
    (st as any).sex_ev[dirty_talk] = '';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['moan'] = 0;
    dynamicGoto(st, 'sex_ev_' + String((((st as any).sex_ev ?? {})['position'])), String((((st as any).sex_ev ?? {})['position'])) + String((((st as any).sex_ev ?? {})['speed'])) + '.2');
  } },
    { label: 'Moan softly', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['enthusiasm'] = (((st as any).sex_ev = (st as any).sex_ev ?? {})['enthusiasm'] ?? 0) + (1);
    (st as any).sex_ev[dirty_talk] = '';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['moan'] = 1;
    dynamicGoto(st, 'sex_ev_' + String((((st as any).sex_ev ?? {})['position'])), String((((st as any).sex_ev ?? {})['position'])) + String((((st as any).sex_ev ?? {})['speed'])) + '.2');
  } },
    { label: 'Moan loudly', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['enthusiasm'] = (((st as any).sex_ev = (st as any).sex_ev ?? {})['enthusiasm'] ?? 0) + (2);
    (st as any).sex_ev[dirty_talk] = '';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['moan'] = 2;
    dynamicGoto(st, 'sex_ev_' + String((((st as any).sex_ev ?? {})['position'])), String((((st as any).sex_ev ?? {})['position'])) + String((((st as any).sex_ev ?? {})['speed'])) + '.2');
  } },
    { label: 'Dirty talk about his cock', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['enthusiasm'] = ((st as any).sex_ev['enthusiasm'] ?? 0) + (2);
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['moan'] = 0;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['dirty_talk'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['dirty_talk'] = 'cock';
    dynamicGoto(st, 'sex_ev_' + String((((st as any).sex_ev ?? {})['position'])), '' + (((st as any).sex_ev ?? 0)?.['position']) + '' + (((st as any).sex_ev ?? 0)?.['speed']) + '.2');
  } },
    { label: 'Dirty talk about your arousal', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['enthusiasm'] = ((st as any).sex_ev['enthusiasm'] ?? 0) + (2);
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['moan'] = 0;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['dirty_talk'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['dirty_talk'] = 'arousal';
    dynamicGoto(st, 'sex_ev_' + String((((st as any).sex_ev ?? {})['position'])), '' + (((st as any).sex_ev ?? 0)?.['position']) + '' + (((st as any).sex_ev ?? 0)?.['speed']) + '.2');
  } },
    { label: 'Dirty talk about his technique', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['enthusiasm'] = ((st as any).sex_ev['enthusiasm'] ?? 0) + (2);
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['moan'] = 0;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['dirty_talk'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['dirty_talk'] = 'technique';
    dynamicGoto(st, 'sex_ev_' + String((((st as any).sex_ev ?? {})['position'])), '' + (((st as any).sex_ev ?? 0)?.['position']) + '' + (((st as any).sex_ev ?? 0)?.['speed']) + '.2');
  } },
  ]);
  scene.build();
}

function enterDirtyTalk1(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: '... about his cock', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['dirty_talk'] = 'cock';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDirtyTalk2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: '... about your arousal', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['dirty_talk'] = 'arousal';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDirtyTalk2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: '... about his technique', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['dirty_talk'] = 'technique';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDirtyTalk2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterDirtyTalk2(s: GameState, scene: SceneBuilder): void {
  (s as any).orgasm_or = '';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['moan'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['dirty_talk_count'] = 1;
  dynamicGoto(s, 'sex_ev_' + String((((s as any).sex_ev ?? {})['position'])), '' + (((s as any).sex_ev ?? 0)?.['position']) + '' + (((s as any).sex_ev ?? 0)?.['speed']) + '.2');
  scene.build();
}

function enterTakeABreak(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Take a break', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + ((Math.floor(Math.random() * 3) + 1));
    qspCall(st, 'stat', '');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['react'] = 1;
    if (((st as any).sex_ev ?? 0)?.['last_cum'] === 'creampie') {
      if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
        scene.img('images/shared/sex/cum/vagcreampie/miss1.jpg');
        if (((st as any).sex_ev ?? 0)?.['need_break'] === 0) {
          { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBreakAsk(st, scene); (st as any).locArgs = __savedLocArgs; }
        }
        scene.text(`You flop down onto the bed beside ${((st as any).npcdesc ?? '')}, feeling his cum trickling from your pussy.`);
        scene.text('A few minutes pass and your breathing slowly calms, relaxing in a moment of quiet satisfaction.');
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBreakTime(st, scene); (st as any).locArgs = __savedLocArgs; }
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
          scene.img('images/shared/sex/vag/miss/2.jpg');
        } else {
          if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
            scene.img('images/shared/sex/vag/doggy/1.jpg');
          } else {
            if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
              scene.img('images/shared/sex/vag/cowgirl/1.jpg');
            }
          }
        }
        if (((st as any).sex_ev ?? 0)?.['need_break'] === 0) {
          { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBreakAsk(st, scene); (st as any).locArgs = __savedLocArgs; }
        }
        if (((st as any).sex_ev ?? 0)?.['need_break'] === 0) {
          scene.actions([
            { label: 'Stay like this', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/2.jpg');
      scene.text(`You lay still, leaving ${((st as any).npcdesc ?? '')}'s occasionally twitching ${(((st as any).npc_dick_noun ?? 0)?.[String((st as any).npcID ?? 0)] ?? '')} stuffed inside you, your pussy full of his cum, taking deep breaths as you wind down.`);
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/1.jpg');
        scene.text(`You let your legs give out from under you, collapsing to the bed with ${((st as any).npcdesc ?? '')} still on top, his occasionally twitching ${(((st as any).npc_dick_noun ?? 0)?.[String((st as any).npcID ?? 0)] ?? '')} stuffed inside you and your pussy full of his cum, taking deep breaths as you wind down.`);
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/hug1.jpg');
          if (((st as any).npc_cuddler ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
            if (((st as any).sex_ev ?? 0)?.['last_cum'] === 'creampie') {
              scene.text(`You collapse onto ${((st as any).npcdesc ?? '')}, feeling his breathing through your breasts pressed up against his chest and the occasional twitch of his softening manhood stuffed inside you. Your breathing calms and your heartbeat slows, and soon you feel like it's matching ${((st as any).npcdesc ?? '')}'s. As you melt into his body, you feel his cum slowly oozing out around the edges of your pussy, dripping down his ${(((st as any).npc_dick_noun ?? 0)?.[String((st as any).npcID ?? 0)] ?? '')}.`);
            } else {
              scene.text(`You collapse onto ${((st as any).npcdesc ?? '')}, feeling his breathing through your breasts pressed up against his chest and the occasional twitch of his ${(((st as any).npc_dick_noun ?? 0)?.[String((st as any).npcID ?? 0)] ?? '')} stuffed inside your pussy. Your breathing calms and your heartbeat slows, and soon you feel like it's matching his.`);
            }
          } else {
            if (((st as any).sex_ev ?? 0)?.['last_cum'] === 'creampie') {
              scene.text(`You collapse onto ${((st as any).npcdesc ?? '')}, feeling his breathing through your breasts pressed up against his chest and the occasional twitch of his softening manhood stuffed inside you. For his part, ${((st as any).npcdesc ?? '')} wraps h is arms around you, holding you tight in a warm embrace. Your breathing calms and your heartbeat slows, and soon you feel like it's matching ${((st as any).npcdesc ?? '')}'s. As you melt into his body, you feel his cum slowly oozing out around the edges of your pussy, dripping down his ${(((st as any).npc_dick_noun ?? 0)?.[String((st as any).npcID ?? 0)] ?? '')}.`);
            } else {
              scene.text(`You collapse onto ${((st as any).npcdesc ?? '')}, feeling his breathing through your breasts pressed up against his chest and the occasional twitch of his ${(((st as any).npc_dick_noun ?? 0)?.[String((st as any).npcID ?? 0)] ?? '')} stuffed inside your pussy.  For his part, ${((st as any).npcdesc ?? '')} wraps h is arms around you, holding you tight in a warm embrace. Your breathing calms and your heartbeat slows, and soon you feel like it's matching his.`);
            }
          }
        }
      }
    }
    if (((st as any).sex_ev ?? 0)?.['speed'] <= 2) {
      scene.text('The two of you just stay like that for a while, basking in the afterglow of your love-making.');
    } else {
      scene.text('The two of you just stay like that for a while, basking in the afterglow of your rough fucking.');
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBreakTime(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
          ]);
        }
        scene.actions([
          { label: 'Pull apart', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cock_inserted'] = 0;
    if (((st as any).sex_ev ?? 0)?.['last_cum'] === 'creampie') {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
        scene.img('images/shared/sex/cum/vagcreampie/after1.jpg');
        scene.text(`${((st as any).npcdesc ?? '')} climbs off of you and flops down beside you. You breathe slowly, letting yourself sink into the bed as you feel ${((st as any).npcdesc ?? '')}'s cum trickle from your pussy.`);
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          scene.img('images/shared/sex/cum/vagcreampie/doggy2.jpg');
          scene.text(`${((st as any).npcdesc ?? '')} climbs off of you and flops down beside you. You barely move, breathing slowly and let your face sink into the pillow as ${((st as any).npcdesc ?? '')}'s cum trickles from your pussy.`);
        } else {
          if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            scene.img('images/shared/sex/cum/vagcreampie/after1.jpg');
            scene.text(`You climb off of ${((st as any).npcdesc ?? '')}, flopping down beside him and let yourself sink into the softness of the bed. His cum slowly oozes from your pussy.`);
          }
        }
      }
    } else {
      if (((st as any).sex_ev ?? 0)?.['last_cum'] === 'condom') {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
          scene.img('images/shared/sex/after/miss_after1.mp4');
          scene.text(`${((st as any).npcdesc ?? '')} climbs off of you and flops down beside you. You breathe slowly, letting yourself sink into the bed, feeling your your pussy continue to leak as ${((st as any).npcdesc ?? '')} pulls off the used condom and tosses it aside.`);
        } else {
          if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
            scene.img('images/shared/sex/after/doggy_after1.mp4');
            scene.text(`${((st as any).npcdesc ?? '')} climbs off of you and you roll over to face him, thighs slick with your own juices and head swimming with post-fuck endorphins, while he pulls off the used condom and tosses it aside.`);
          } else {
            if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
              scene.img('images/shared/sex/after/cowgirl_after1.mp4');
              scene.text(`You climb off of ${((st as any).npcdesc ?? '')}, flopping down beside him and let yourself sink into the softness of the bed, sighing with satisfaction as you feel post-fuck juices continue to leak from your pussy and ${((st as any).npcdesc ?? '')} pulls off the used condom and tosses it aside.`);
            }
          }
        }
      }
    }
    if (((st as any).sex_ev ?? 0)?.['speed'] <= 2) {
      scene.text('The two of you just stay like that for a while, basking in the afterglow of your love-making.');
    } else {
      scene.text('The two of you just stay like that for a while, basking in the afterglow of your rough fucking.');
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBreakTime(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      }
    } else {
      if (((st as any).sex_ev ?? 0)?.['last_cum'] === 'condom') {
        scene.img('images/shared/sex/after/pillow_talk1.jpg');
        if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
          scene.text(`You flop down onto the bed, breathing hard as your body slowly unwinds, relaxing as you let yourself sink into the mattress. ${((st as any).npcdesc ?? '')} removes the condom from his cock, tossing it aside before laying down beside you.`);
          if (((st as any).sex_ev ?? 0)?.['speed'] <= 2) {
            scene.text('The two of you just stay like that for a while, basking in the afterglow of your love-making.');
          } else {
            scene.text('The two of you just stay like that for a while, basking in the afterglow of your rough fucking.');
          }
        } else {
          if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
            scene.text(`${((st as any).npcdesc ?? '')} climbs off of you, removing the condom from his softening cock before flopping down beside you. You breathe slowly, letting yourself sink into the bed as your body relaxes.`);
          } else {
            if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
              scene.text(`${((st as any).npcdesc ?? '')} climbs off of you, removing the condom from his softening cock before flopping down beside you. You turn over onto your back and breathe slowly, letting yourself sink into the bed as your body relaxes.`);
            } else {
              if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
                scene.text(`You climb off of ${((st as any).npcdesc ?? '')}, flopping down beside him as he removes the condom from his softening cock, and let yourself sink into the softness of the bed. He ties off the rubber and tosses it aside.`);
              }
            }
          }
          if (((st as any).sex_ev ?? 0)?.['speed'] <= 2) {
            scene.text('The two of you just stay like that for a while, basking in the afterglow of your love-making.');
          } else {
            scene.text('The two of you just stay like that for a while, basking in the afterglow of your rough fucking.');
          }
        }
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBreakTime(st, scene); (st as any).locArgs = __savedLocArgs; }
      } else {
        if (((st as any).sex_ev ?? 0)?.['last_cum'] === 'face_mouth') {
          scene.img('images/shared/sex/cum/facial/facial35.jpg');
          scene.text(`You lay back, breathing slowly as you wind down, the warm mask of ${((st as any).npcdesc ?? '')}'s cum across your face, its salty taste on your tongue.`);
        } else {
          if (((st as any).sex_ev ?? 0)?.['last_cum'] === 'spit') {
            scene.img('images/shared/sex/cum/facial/facial35.jpg');
            scene.text(`You lay back, breathing slowly as you wind down, the salty taste of ${((st as any).npcdesc ?? '')}'s sperm on your tongue as it dribbles down your chin.`);
          } else {
            if (((st as any).sex_ev ?? 0)?.['last_cum'] === 'swallow') {
              scene.img('images/shared/sex/cum/facial/facial35.jpg');
              scene.text(`You lay back, breathing slowly as you wind down, the salty taste of ${((st as any).npcdesc ?? '')}'s sperm still on your lips.`);
            } else {
              if (((st as any).sex_ev ?? 0)?.['last_cum'] === 'facial') {
                scene.img('images/shared/sex/cum/facial/facial35.jpg');
                scene.text(`You lay back, breathing slowly as you wind down, the warm mask of ${((st as any).npcdesc ?? '')}'s cum across your face already beginning to cool.`);
              } else {
                if (((st as any).sex_ev ?? 0)?.['last_cum'] === 'tits') {
                  scene.text(String(qspFunc(s, 'sex_ev', 'bed_room') || ''));
                  scene.text(`You lay back, breathing slowly as you wind down, the warm glaze of ${((st as any).npcdesc ?? '')}'s cum across your chest already beginning to cool.`);
                } else {
                  if (((st as any).sex_ev ?? 0)?.['last_cum'] === 'pullout') {
                    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss'  ||  ((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
                      scene.img('images/shared/sex/cum/stomach/sleep1.jpg');
                      scene.text('You lay back, breathing slowly as you wind down, feeling the warm cum on your belly already beginning to cool.');
                    } else {
                      if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
                        scene.img('images/shared/sex/cum/back1.jpg');
                        scene.text(`You just lay there, ${((st as any).npcdesc ?? '')}'s cum spattered across your ass, breathing slowly as you wind down.`);
                      }
                    }
                  } else {
                    qspCall(st, 'sex_ev_pillow_talk', 'pillow_picture1');
                    scene.text(`You lay back, breathing slowly as you wind down, the warm mask of ${((st as any).npcdesc ?? '')}'s cum across your face, its salty taste on your tongue.`);
                  }
                }
              }
            }
          }
        }
        scene.text('A few minutes pass and your breathing slowly calms, relaxing in a moment of quiet satisfaction.');
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBreakTime(st, scene); (st as any).locArgs = __savedLocArgs; }
      }
    }
  } },
  ]);
  scene.build();
}

function enterBreakAsk(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)  &&  ((s as any).sex_ev ?? 0)?.['cum_together_fake'] !== 1) {
    if (((s as any).sex_ev ?? 0)?.['came_together'] > 0) {
      scene.text('"Can we take a quick break?," you gasp, still shivering in the throes of your simultaneous orgasm. "I need a breather."');
    } else {
      if (((s as any).orgasm ?? 0) - ((s as any).sex_ev ?? 0)?.['orgasm'] > 1) {
        scene.text('"Can we take a quick break?," you gasp, quivering from your consecutive orgasms. "I need a breather."');
      } else {
        scene.text('"Can we take a quick break?," you gasp, quivering from your recent orgasms. "I need a breather."');
      }
    }
  } else {
    scene.text('"Can we take a quick break?," you gasp. "Can we take a quick break? I need a breather."');
  }
  if (((s as any).sex_ev ?? 0)?.['cum_count'] - 2 >= ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]) {
    scene.text('"Yeah," he pants back. "I think I need one too."');
  } else {
    scene.text('"Sure," he nods.');
  }
  scene.build();
}

function enterBreakTime(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['first_break'] === 0  ||  (Math.floor(Math.random() * 3) + 1) < 3  ||  ((s as any).sex_ev ?? 0)?.['cum_count'] >= 5 + ((s as any).sex_ev ?? 0)?.['extra_cum']) {
    if (((s as any).sex_ev ?? 0)?.['first_break'] === 0) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['first_break'] = 1;
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['extra_cum'] = ((s as any).sex_ev['extra_cum'] ?? 0) + (1);
    }
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['cycle_limit'] = ((s as any).sex_ev['cycle_limit'] ?? 0) - ((Math.floor(Math.random() * 3) + 1));
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['on_break'] = 1;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['break_start'] = ((s as any).totminut ?? 0);
    qspCall(s, 'sex_ev_after', 'stop_here');
    if (((s as any).sex_ev ?? 0)?.['not_yet'] === 1) {
      scene.actions([
        { label: 'Ready to keep going?', handler: (st: GameState) => {
    scene.img('images/shared/sex/misc/round2.mp4');
    scene.text(`"You catch your breath yet?" you ask ${((st as any).npcdesc ?? '')}, flashing him a smile and glancing between his legs.`);
    scene.text('"Yeah, I\'m ready."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReset(st, scene); (st as any).locArgs = __savedLocArgs; }
    if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
      scene.text('With that, you ramp back into where you left off.');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFuckContinue(st, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSexMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Ready to go again?', handler: (st: GameState) => {
    scene.img('images/shared/sex/misc/round2.mp4');
    if (((st as any).sex_ev ?? 0)?.['need_break'] === 0) {
      scene.text(`"You ready to go again?" you ask ${((st as any).npcdesc ?? '')}, flashing him a smile.`);
      scene.text('"Yeah," he grins back eagerly.');
    } else {
      scene.text(`"You catch your breath yet?" you ask ${((st as any).npcdesc ?? '')}, flashing him a smile and glancing between his legs. His cock starts hardening up nicely and he grins back eagerly.`);
      scene.text('"Yeah, I\'m ready."');
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReset(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSexMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCigaBreak(s, scene); (s as any).locArgs = __savedLocArgs; }
    qspCall(s, 'sex_ev_after', 'drink_fluid');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBirthControlTake(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Relax and talk', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_pillow_talk', '');
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', '');
  } },
    ]);
  }
  scene.build();
}

function enterBirthControlTake(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).birth_control ?? 0)?.['using_bc'] > 0  &&  ((s as any).tabletkiday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).sex_ev ?? 0)?.['bc_take'] !== 1  &&  ((s as any).birth_control ?? 0)?.['remind_hour'] === 0)  ||  (((s as any).birth_control ?? 0)?.['remind_hour'] > 0  &&  ((s as any).hour ?? 0) >= ((s as any).birth_control ?? 0)?.['remind_hour']  &&  ((s as any).hour ?? 0) <= ((s as any).birth_control ?? 0)?.['remind_hour'] + 1  &&  ((s as any).tabletkiday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).sex_ev ?? 0)?.['bc_take'] !== 1)) {
    scene.actions([
      { label: 'Take your birth control', handler: (st: GameState) => {
    ((st as any).birth_control = (st as any).birth_control ?? {})['message_skip'] = ((st as any).daystart ?? 0);
    scene.text(String(qspFunc(s, 'sex_ev', 'bed_room') || ''));
    if (((st as any).birth_control ?? 0)?.['remind_icon'] === 1) {
      if (((st as any).sex_ev ?? 0)?.['loc'] === 'pc_home') {
        scene.text('"Wait," you say, noticing your phone blinking at you from your nightstand.');
      } else {
        scene.text('"Wait," you say, noticing your phone blinking at you from your purse.');
      }
      scene.text('<i><font color="pink"><b>Take your vitamins!</b></font></i>');
      scene.text('"Gimme a sec?" you ask. "I need to take my birth control."');
    } else {
      scene.text('A spark fires somewhere in the back of your brain reminding you of something very important.');
      if (((st as any).birth_control ?? 0)?.['remind_hour'] > 0) {
        if (((st as any).hour ?? 0) >= ((st as any).birth_control ?? 0)?.['remind_hour'] + 2  ||  ((st as any).hour ?? 0) < 5) {
          scene.text('"Oh shit! I almost forgot to take my birth control!"');
        } else {
          scene.text('"Hang on a second, I just remembered I need to take my birth control. I should do it now before I forget."');
        }
      } else {
        scene.text('"Hang on a second, I just remembered I need to take my birth control."');
      }
    }
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['bc_take'] = 1;
    qspCall(st, 'din_bad', 'quick_takepill');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Take it shyly', handler: (st: GameState) => {
    scene.text(String(qspFunc(s, 'sex_ev', 'bed_room') || ''));
    if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
      scene.text(`You somehow manage to grab hold of your pills without extricating yourself from ${((st as any).npcdesc ?? '')} and pop a birth control pill from the packaging.`);
      scene.text(`"This is what the pill is for after all," you blush, shyly placing it between your lips, feeling your pussy give ${((st as any).npcdesc ?? '')}'s cock a nice squeeze as you swallow.`);
    } else {
      if (((st as any).cum_loc ?? 0)?.['vagina'] > 0) {
        scene.text(`With ${((st as any).npcdesc ?? '')}'s cum still leaking from your pussy, you reach for your pills and pull out your birth control.`);
        if (((st as any).sex_ev ?? 0)?.['risky_creampie'] === 1) {
          scene.text('"Hopefully we won\'t have to worry about this stuff soon," you smile, shyly placing the pill between your lips and swallowing.');
        } else {
          scene.text('"This is what the pill is for after all," you smile, shyly placing the pill between your lips and swallowing.');
        }
      } else {
        if (((st as any).sex_ev ?? 0)?.['loc'] === 'pc_home') {
          scene.text('You reach over to your nightstand and pull out your birth control.');
        } else {
          scene.text('You reach down to your purse and pull out your birth control.');
        }
        if (((st as any).pillcon2 ?? 0) > 20000  &&  ((st as any).birth_control ?? 0)?.['think_safe'] !== 1) {
          ((st as any).npc_know_bc_not_effective = (st as any).npc_know_bc_not_effective ?? {})[String((st as any).npcID ?? 0)] = 1;
          scene.text('"I think it\'ll kick in soon," you smile, shyly placing the pill between your lips and swallowing.');
        } else {
          if (((st as any).pillcon2 ?? 0) > 10000  &&  ((st as any).birth_control ?? 0)?.['think_safe'] !== 1) {
            ((st as any).npc_know_bc_not_effective = (st as any).npc_know_bc_not_effective ?? {})[String((st as any).npcID ?? 0)] = 1;
            scene.text('"It\'s gonna be a while before it starts working," you smile, shyly placing the pill between your lips and swallowing.');
          } else {
            if (((st as any).pillcon2 ?? 0) > 0  &&  ((st as any).birth_control ?? 0)?.['think_safe'] !== 1) {
              ((st as any).npc_know_bc_not_effective = (st as any).npc_know_bc_not_effective ?? {})[String((st as any).npcID ?? 0)] = 1;
              scene.text('"I only just started it," you smile, shyly placing the pill between your lips and swallowing.');
            } else {
              scene.text('"This is what the pill is for after all," you smile, shyly placing the pill between your lips and swallowing.');
            }
          }
        }
      }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBreakTime(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Take it sexily', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
      scene.text(`You somehow manage to grab hold of your pills without extricating yourself from ${((st as any).npcdesc ?? '')} and pop a birth control pill from the packaging.`);
      if (((st as any).sex_ev ?? 0)?.['risky_creampie'] === 1) {
        scene.text(`"You better hope this stuff kicks in soon," you say, placing the pill between your lips and swallowing with a grin, feeling your pussy give ${((st as any).npcdesc ?? '')}'s cock a nice squeeze as you swallow.`);
      } else {
        if (((st as any).birth_control ?? 0)?.['think_safe'] === 1) {
          scene.text('"My baby police pill," you say, placing it between your lips. "So you can keep coming inside me without worry."');
          scene.text(`You swallow the pill, feeling your pussy give ${((st as any).npcdesc ?? '')}'s cock a nice squeeze as you swallow.`);
        } else {
          scene.text('"This is what the pill is for after all," you grin, placing it between your lips, feeling your pussy squeeze his cock as you swallow.');
        }
      }
    } else {
      if (((st as any).sex_ev ?? 0)?.['last_cum'] === 'swallow') {
        scene.text(`You pop the pill from its packaging and stick out your tongue, placing the pill in the center of it for ${((st as any).npcdesc ?? '')} to see before gulping it down in a single swallow.`);
        scene.text('"Chaser," you wink.');
      } else {
        if (((st as any).cum_loc ?? 0)?.['vagina'] > 0) {
          if (((st as any).sex_ev ?? 0)?.['loc'] === 'pc_home') {
            scene.text(`With ${((st as any).npcdesc ?? '')}'s cum still leaking from your pussy, you reach over to your nightstand and pull out your birth control.`);
          } else {
            scene.text(`With ${((st as any).npcdesc ?? '')}'s cum still leaking from your pussy, you reach down to your purse and pull out your birth control.`);
          }
          if (((st as any).sex_ev ?? 0)?.['risky_creampie'] === 1) {
            scene.text('"You better hope this stuff kicks in soon," you say, placing the pill between your lips and swallowing with a grin.');
          } else {
            if (((st as any).birth_control ?? 0)?.['think_safe'] === 1) {
              scene.text('"My baby police pill," you say, placing the pill between your lips and swallowing with a grin. "So you can keep coming inside me without worry."');
            } else {
              scene.text('"This is what the pill is for after all," you say, placing the pill between your lips and swallowing with a grin.');
            }
          }
        } else {
          if (((st as any).sex_ev ?? 0)?.['loc'] === 'pc_home') {
            scene.text('You reach over to your nightstand and pull out your birth control.');
          } else {
            scene.text('You reach down to your purse and pull out your birth control.');
          }
          if (((st as any).pillcon2 ?? 0) > 20000  &&  ((st as any).birth_control ?? 0)?.['think_safe'] !== 1) {
            ((st as any).npc_know_bc_not_effective = (st as any).npc_know_bc_not_effective ?? {})[String((st as any).npcID ?? 0)] = 1;
            scene.text('"Just a few more days and we\'ll never have to worry about condoms again," you say, placing the pill between your lips and swallowing with a grin.');
          } else {
            if (((st as any).pillcon2 ?? 0) > 10000  &&  ((st as any).birth_control ?? 0)?.['think_safe'] !== 1) {
              ((st as any).npc_know_bc_not_effective = (st as any).npc_know_bc_not_effective ?? {})[String((st as any).npcID ?? 0)] = 1;
              scene.text('"It\'ll take a little while, but then we\'ll never have to worry about condoms again," you say, placing the pill between your lips and swallowing with a grin.');
            } else {
              if (((st as any).pillcon2 ?? 0) > 0  &&  ((st as any).birth_control ?? 0)?.['think_safe'] !== 1) {
                ((st as any).npc_know_bc_not_effective = (st as any).npc_know_bc_not_effective ?? {})[String((st as any).npcID ?? 0)] = 1;
                scene.text('"I only just started," you say, placing the pill between your lips and swallowing with a grin. "But in about a few weeks, we\'ll be able to go condom free."');
              } else {
                scene.text('"Nothing sexier than safe sex," you say, placing the pill between your lips and swallowing with a grin.');
              }
            }
          }
        }
      }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBreakTime(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterHeEndBreak(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterReset(s, scene); (s as any).locArgs = __savedLocArgs; }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['position_rand'] = (Math.floor(Math.random() * 5) + 1);
  scene.text(String(qspFunc(s, 'sex_ev', 'bed_room') || ''));
  if (((s as any).sex_ev ?? 0)?.['position_rand'] === 1  ||  ((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'miss'  ||  (((s as any).stat ?? 0)?.['think_virgin'] === 1  &&  ((s as any).sex_ev ?? 0)?.['virgin_fuck'] === 0  &&  ((s as any).sex_ev ?? 0)?.['position_rand'] <= 3)) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'miss';
    scene.text(`After a few minutes, you glance over at ${((s as any).npcdesc ?? '')} and find him hungrily staring at you. You realize what's about to happen just before he jumps on top of you, eliciting...`);
    scene.actions([
      { label: '... giggles', handler: (st: GameState) => {
    scene.img('images/shared/sex/foreplay/miss3.jpg');
    scene.text(`You burst into uncontrollable giggles as ${((st as any).npcdesc ?? '')} forces your legs open and lines his cock up with your pussy.`);
    qspGoto(st, 'sex_ev_miss', 'miss_insert_acts');
  } },
      { label: '... a yelp of surprise', handler: (st: GameState) => {
    scene.img('images/shared/sex/foreplay/miss3.jpg');
    scene.text(`You yelp loudly as ${((st as any).npcdesc ?? '')} grabs you, forcing your legs open and lining his cock up with your pussy.`);
    qspGoto(st, 'sex_ev_miss', 'miss_insert_acts');
  } },
    ]);
  } else {
    if (((s as any).sex_ev ?? 0)?.['position_rand'] === 2  ||  ((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'doggy') {
      scene.text(`After a few minutes, you glance over at ${((s as any).npcdesc ?? '')} and find him hungrily staring at you. You realize what's about to happen just before he jumps you, eliciting...`);
      scene.actions([
        { label: '... giggles', handler: (st: GameState) => {
    scene.img('images/shared/sex/foreplay/doggy1.jpg');
    scene.text(`After a few minutes, you glance over at ${((st as any).npcdesc ?? '')} and find him hungrily staring at you with a raging erection. You realize what's about to happen just before he jumps on top of you, eliciting uncontrollable giggles from your lips as flips you onto your stomach, pulls you up by the hips, and slaps your ass, lining his cock up with your pussy.`);
    qspGoto(st, 'sex_ev_doggy', 'doggy_insert_acts');
  } },
        { label: '... a yelp of surprise', handler: (st: GameState) => {
    scene.img('images/shared/sex/foreplay/doggy1.jpg');
    scene.text(`After a few minutes, you glance over at ${((st as any).npcdesc ?? '')} and find him hungrily staring at you with a raging erection. You realize what's about to happen just before he jumps on top of you, eliciting a yelp of surprise from from your lips as flips you onto your stomach, pulls you up by the hips, and slaps your ass before plunging his cock into your pussy.`);
    qspGoto(st, 'sex_ev_doggy', 'doggy_insert_acts');
  } },
      ]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['need_break'] === 1) {
        scene.img('images/shared/sex/misc/round2.mp4');
        scene.text(`"Okay, I think I'm ready to go again," ${((s as any).npcdesc ?? '')} says and starts working his cock with his hand. You grin back, watching it harden up, and soon enough you're all over each other again.`);
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterReset(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexMenu(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (((s as any).sex_ev ?? 0)?.['position_rand'] === 3  &&  ((s as any).sex_ev ?? 0)?.['must_fuck'] !== 1) {
          scene.text(`After a few minutes, you glance over at ${((s as any).npcdesc ?? '')} and find him hungrily staring at you.`);
          scene.text('"What...?" you ask hesitantly.');
          scene.text('"I can\'t stop thinking about your mouth around my cock," he says, his stare becoming even more predatory.');
          qspCall(s, 'sex_ev_foreplay', 'bj_ask2');
        } else {
          if (((s as any).sex_ev ?? 0)?.['position_rand'] === 4  &&  (((s as any).cum_loc ?? 0)?.['vagina'] === 0  ||  ((s as any).npc_pussyeater ?? 0)?.[String((s as any).npcID ?? 0)] === 1)) {
            qspCall(s, 'arousal', 'foreplay', (-5), 'no_orgasm_msg', (((s as any).sex_ev ?? 0)?.['prostitution_flag']));
            scene.text(`After a few minutes, ${((s as any).npcdesc ?? '')} climbs on top of you without saying anything.`);
            scene.text('"Hey, what are you-" you start to ask until his head descends to your stomach. He lightly kisses it, sending shivers across your skin, before kissing again and again and again, each kiss lower than the last, slowly heading towards your thighs.');
            if (((s as any).kuni_yes ?? 0)?.[String((s as any).npcID ?? 0)] < 1) {
              scene.actions([
                { label: 'Close your legs', goto: ['sex_ev_foreplay', 'kuni_leg_close'] },
              ]);
            }
            scene.actions([
              { label: 'Let him eat you out', goto: ['sex_ev_foreplay', 'kuni_leg_spread'] },
            ]);
          } else {
            qspCall(s, 'arousal', 'foreplay', (-5), 'no_orgasm_msg', (((s as any).sex_ev ?? 0)?.['prostitution_flag']));
            scene.text(`After a few minutes, ${((s as any).npcdesc ?? '')} climbs on top of you without saying anything.`);
            scene.text('"Hey, what are you-" you start to ask until his head descends to your neck. He lightly kisses your throat, sending shivers across your skin, before kissing again and again and again, each kiss lower than the last, blazing a trail down your collarbone to the breasts his hands are already thoroughly massaging.');
            scene.actions([
              { label: 'Continue', goto: ['sex_ev_foreplay', 'nipple_play'] },
            ]);
          }
        }
      }
    }
  }
  scene.build();
}

function enterKeepGoing(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['type'] !== 'prostitution_cust') {
    scene.actions([
      { label: 'Keep going?', handler: (st: GameState) => {
    if (((Math.floor(Math.random() * 10) + 1) >= ((st as any).npc_sexdrive ?? 0)?.[String((st as any).npcID ?? 0)]  ||  ((st as any).sex_ev ?? 0)?.['cum_count'] >= 5 + ((st as any).sex_ev ?? 0)?.['extra_cum'])  &&  ((st as any).sex_ev ?? 0)?.['boy_cum'] === 1  ||  ((st as any).sex_ev ?? 0)?.['fucked_out'] > 0) {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['boy_cum'] = 0;
      qspCall(st, 'sex_ev_after', 'fucked_out');
    } else {
      if (((Math.floor(Math.random() * 10) + 1) >= ((st as any).npc_sexdrive ?? 0)?.[String((st as any).npcID ?? 0)]  ||  (Math.floor(Math.random() * 10) + 1) >= ((st as any).sex_ev ?? 0)?.['sex_stamina'])  &&  ((st as any).sex_ev ?? 0)?.['boy_cocaine'] === 0  &&  ((st as any).sex_ev ?? 0)?.['boy_cum'] === 1) {
        ((st as any).sex_ev = (st as any).sex_ev ?? {})['need_break'] = 1;
        if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 1  &&  ((st as any).sex_ev ?? 0)?.['last_cum'] === 'creampie') {
          scene.text('"Wanna keep going?" you ask, flexing your pussy around his cock.');
          scene.text(`"Maybe in a minute?" ${((st as any).npcdesc ?? '')} says, panting. "I think I might need a quick break..."`);
          scene.text('His request makes you flex again, only then noticing a certain <i>squishy</i> element to his cock. He must be getting soft.');
        } else {
          scene.text(String(qspFunc(s, 'sex_ev', 'bed_room') || ''));
          scene.text(`"Wanna keep going?" you ask, looking over at ${((st as any).npcdesc ?? '')}.`);
          scene.text(`"Maybe in a minute?" ${((st as any).npcdesc ?? '')} says, panting. "I think I might need a quick break..."`);
          scene.text('It\'s only then you see his cock softening before your eyes.');
        }
        scene.text('"Just give me a few minutes and I\'ll get hard again," he smiles ruefully.');
        ((st as any).sex_ev = (st as any).sex_ev ?? {})['boy_cum'] = 0;
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTakeABreak(st, scene); (st as any).locArgs = __savedLocArgs; }
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'miss'  ||  ((st as any).sex_ev ?? 0)?.['position'] === 'doggy'  ||  ((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          (st as any).minut = ((st as any).minut ?? 0) + ((Math.floor(Math.random() * 2) + 1));
          if (((st as any).sex_ev ?? 0)?.['boy_cocaine'] > 0) {
            if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 1  &&  ((st as any).sex_ev ?? 0)?.['last_cum'] === 'creampie') {
              scene.text('"Wanna keep going?" you ask, flexing your pussy around his cock. Having lost none of its hardness, it twitches inside you in response, causing you to grin. "That feels like a yes."');
            } else {
              scene.img('images/shared/sex/misc/round2.mp4');
              scene.text(`"Wanna keep going?" you ask, looking over at ${((st as any).npcdesc ?? '')}.`);
              scene.text('"Fuck yes," he grins back, his cock still stiff as a rock despite having just come.');
            }
          } else {
            if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 1  &&  ((st as any).sex_ev ?? 0)?.['last_cum'] === 'creampie') {
              scene.text('"Wanna keep going?" you ask, flexing your pussy around his cock. It twitches inside in response, feeling a little stiffer than before, causing you to grin. "That feels like a yes."');
            } else {
              scene.img('images/shared/sex/misc/smile.jpg');
              scene.text(`"Wanna keep going?" you ask, looking over at ${((st as any).npcdesc ?? '')}.`);
              scene.text('"Yeah, gimme a minute to get hard again," he grunts back, working himself with his hand to force some stiffness back into his cock.');
            }
          }
          { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReset(st, scene); (st as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSexMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
        } else {
          (st as any).minut = ((st as any).minut ?? 0) + ((Math.floor(Math.random() * 2) + 1));
          scene.img('images/shared/sex/misc/wait.mp4');
          scene.text('"Wanna keep going?" you ask eagerly.');
          if (((st as any).sex_ev ?? 0)?.['cum_choice'] !== '') {
            scene.text('"Yeah, gimme a minute to get hard again," he grunts back, working himself with his hand to force some stiffness back into his cock.');
          } else {
            scene.text(`"What do you have in mind?" ${((st as any).npcdesc ?? '')} grins back.`);
          }
          { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReset(st, scene); (st as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSexMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
        }
      }
    }
  } },
    ]);
  }
  scene.build();
}

function enterSexMenu(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexStart(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.actions([
    { label: 'Let him lead', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['force_initiative'] = 2;
    qspCall(st, 'sex_ev_sex', '');
  } },
    { label: 'Foreplay', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_foreplay', '');
  } },
  ]);
  scene.build();
}

function enterKeepFucking(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterKeepFuckingAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1  &&  (((s as any).sex_ev ?? 0)?.['position'] === 'miss'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'doggy'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl')) {
    scene.actions([
      { label: 'Keep fucking', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['reset_pos'] = (((st as any).sex_ev ?? 0)?.['position']);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReset(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'sex_ev_condoms', 'condoms');
    dynamicGoto(st, 'sex_ev_' + String((((st as any).sex_ev ?? {})['reset_pos'])), '$sex_ev[\'pos_speed\']');
  } },
    ]);
  }
  scene.build();
}

function enterCigaBreak(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['smoke_break'] === 0) {
    if (((s as any).mc_inventory ?? 0)?.['cigarettes'] > 0) {
      scene.actions([
        { label: 'Have a smoke', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['smoke_break'] = 1;
    qspCall(st, 'drugs', 'smoke');
    if (((st as any).npc_smoker ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      scene.img('images/shared/sex/after/bed_smoke3.jpg');
      if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
        if (((st as any).sex_ev ?? 0)?.['loc'] === 'pc_home') {
          scene.text(`You reach over and pull out your pack of cigarettes, placing one in your mouth and tossing the pack back onto your nightstand. ${((st as any).npcdesc ?? '')} takes the opportunity to light up as well while you take your first drag.`);
        } else {
          scene.text(`You reach down and pull out your pack of cigarettes, placing one in your mouth and tossing the pack back into your purse. ${((st as any).npcdesc ?? '')} takes the opportunity to light up as well while you take your first drag.`);
        }
      } else {
        ((st as any).sex_ev = (st as any).sex_ev ?? {})['cock_inserted'] = 0;
        if (((st as any).sex_ev ?? 0)?.['last_cum'] === 'creampie') {
          if (((st as any).sex_ev ?? 0)?.['loc'] === 'pc_home') {
            scene.text(`You finally pull apart, immediately feeling ${((st as any).npcdesc ?? '')}'s cum spill from inside you as his cock vacates your pussy before reaching for your cigarettes, placing one in your mouth and tossing the pack back onto your nightstand. ${((st as any).npcdesc ?? '')} takes the opportunity to light up as well while you take your first drag.`);
          } else {
            scene.text(`You finally pull apart, immediately feeling ${((st as any).npcdesc ?? '')}'s cum spill from inside you as his cock vacates your pussy before reaching down for your cigarettes, placing one in your mouth and tossing the pack back into your purse. ${((st as any).npcdesc ?? '')} takes the opportunity to light up as well while you take your first drag.`);
          }
        } else {
          if (((st as any).sex_ev ?? 0)?.['last_cum'] === 'condom') {
            if (((st as any).sex_ev ?? 0)?.['loc'] === 'pc_home') {
              scene.text(`You finally pull apart, letting ${((st as any).npcdesc ?? '')}'s rubber coated cock slip from your pussy before reaching for your cigarettes, placing one in your mouth and tossing the pack back onto your nightstand. ${((st as any).npcdesc ?? '')} takes the opportunity to light up as well while you take your first drag.`);
            } else {
              scene.text(`You finally pull apart, letting ${((st as any).npcdesc ?? '')}'s rubber coated cock slip from your pussy before reaching down for your cigarettes, placing one in your mouth and tossing the pack back into your purse. ${((st as any).npcdesc ?? '')} takes the opportunity to light up as well while you take your first drag.`);
            }
          }
        }
      }
      scene.text('Smoke fills your lungs and you hold it there, savouring it, before exhaling slowly. As the smoke blows past your lips, it\'s like all your stress goes with it and you sigh happily, and the two of you continue to puff away until there\'s but the charred butts left.');
    } else {
      scene.img('images/shared/sex/after/bed_smoke1.jpg');
      if (((st as any).sex_ev ?? 0)?.['last_cum'] === 'creampie') {
        scene.text(`You finally pull apart, immediately feeling ${((st as any).npcdesc ?? '')}'s cum spill from inside you as his cock vacates your pussy before reaching down for your cigarettes, placing one in your mouth and tossing the pack back into your purse. You spark your lighter, inhaling deeply as you take your first drag.`);
      } else {
        if (((st as any).sex_ev ?? 0)?.['last_cum'] === 'condom') {
          scene.text(`You finally pull apart, letting ${((st as any).npcdesc ?? '')}'s rubber coated cock slip from your pussy before reaching down for your cigarettes, placing one in your mouth and tossing the pack back into your purse. You spark your lighter, inhaling deeply as you take your first drag.`);
        }
      }
      scene.text('Smoke fills your lungs and you hold it there, savouring it, before exhaling slowly. As the smoke blows past your lips, it\'s like all your stress goes with it and you sigh happily, puffing away until there\'s nothing but a charred butt left.');
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBreakTime(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Got any smokes?', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['smoke_break'] = 1;
    if (((st as any).npc_smoker ?? 0)?.[String((st as any).npcID ?? 0)] > 0  &&  (Math.floor(Math.random() * 20) + 1) < 20) {
      qspCall(st, 'drugs', 'smoke', 'borrow');
      scene.img('images/shared/sex/after/bed_smoke3.jpg');
      if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
        scene.text(`"Got any smokes?" you ask. ${((st as any).npcdesc ?? '')} nods and fishes out a pack, proffering the first one to you and igniting it for you. He pulls out one for himself and lights up as well while you take your first drag.`);
      } else {
        ((st as any).sex_ev = (st as any).sex_ev ?? {})['cock_inserted'] = 0;
        if (((st as any).sex_ev ?? 0)?.['last_cum'] === 'creampie') {
          scene.text(`"Got any smokes?" you ask, feeling the cum spill from your pussy as you finally let ${((st as any).npcdesc ?? '')}'s cock slip from your pussy before sitting up. ${((st as any).npcdesc ?? '')} nods and fishes out a pack, proffering the first one to you and igniting it for you. He pulls out one for himself and lights up as well while you take your first drag.`);
        } else {
          scene.text(`"Got any smokes?" you ask as you pull apart, finally letting ${((st as any).npcdesc ?? '')}'s cock slip from your pussy before sitting up. ${((st as any).npcdesc ?? '')} nods and fishes out a pack, proffering the first one to you and igniting it for you. He pulls out one for himself and lights up as well while you take your first drag.`);
        }
      }
      scene.text('Smoke fills your lungs and you hold it there, savouring it, before exhaling slowly. As the smoke blows past your lips, it\'s like all your stress goes with it and you sigh happily, and the two of you continue to puff away until there\'s but the charred butts left.');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBreakTime(st, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      scene.img('images/shared/sex/after/annoyed1.jpg');
      if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
        scene.text(`"Got any smokes?" you ask but ${((st as any).npcdesc ?? '')} just shakes his head.`);
      } else {
        if (((st as any).sex_ev ?? 0)?.['last_cum'] === 'creampie') {
          scene.text(`"Got any smokes?" you ask, feeling the cum spill from your pussy as you finally let ${((st as any).npcdesc ?? '')}'s cock slip from your pussy before sitting up. Unfortunately, he just shakes his head.`);
        } else {
          scene.text(`"Got any smokes?" you ask as you pull apart, finally letting ${((st as any).npcdesc ?? '')}'s cock slip from your pussy before sitting up. Unfortunately, he just shakes his head.`);
        }
      }
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['cock_inserted'] = 0;
      if (((st as any).npc_smoker ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
        scene.text('"Fresh out," he shrugs.');
      } else {
        scene.text('"I don\'t smoke. It\'s bad for you y\'know."');
        scene.actions([
          { label: 'I should probably quit', handler: (st: GameState) => {
    scene.text('"Yeah, I should probably quit," you say ruefully. "I just want one so badly after sex..."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBreakTime(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      }
      scene.actions([
        { label: 'Damn', handler: (st: GameState) => {
    scene.text('"Damn," you sigh unhappily. "A cigarette is just what I need right now..."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBreakTime(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
  } },
      ]);
    }
  }
  scene.build();
}

function enterHardenHand(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['last_cum'] !== '') {
    scene.actions([
      { label: 'Try to get him hard again (hand)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cock_inserted'] = 0;
    if (((st as any).sex_ev ?? 0)?.['cum_count'] >= 5 + ((st as any).sex_ev ?? 0)?.['extra_cum']  &&  (((st as any).sex_ev ?? 0)?.['force_harden'] >= 2  ||  (Math.floor(Math.random() * 3) + 1) === 1)) {
      scene.text(String(qspFunc(s, 'sex_ev', 'bed_room') || ''));
      if (((st as any).sex_ev ?? 0)?.['force_harden'] > 0) {
        scene.text('"Oh no you\'re not," you growl lustfully.');
      }
      if (((st as any).sex_ev ?? 0)?.['cum_choice'] === 'creampie'  ||  ((st as any).sex_ev ?? 0)?.['cum_choice'] === 'creampie_surprise') {
        scene.text(`You pull away, pussy trailing semen as you get down in front of ${((st as any).npcdesc ?? '')} and grab his cock. You work his shaft furiously, trying to keep him hard. But despite your best efforts, his dick softens in your grasp and you can't get it to rise again. `);
      } else {
        scene.text('Taking hold of his cock, you work his shaft furiously, trying to keep him hard. But despite your best efforts, his dick softens in your grasp and you can\'t get it to rise again.');
      }
      if (((st as any).sex_ev ?? 0)?.['not_done'] === 1) {
        scene.text('"Goddammit!" you growl. "I still wanted more out of you!"');
      }
      qspCall(st, 'sex_ev_after', 'after_sex1');
    } else {
      scene.img('images/shared/sex/handjob/hj3.mp4');
      if (((st as any).sex_ev ?? 0)?.['force_harden'] > 0) {
        scene.text('"Oh no you\'re not," you growl lustfully.');
      }
      if (((st as any).sex_ev ?? 0)?.['cum_choice'] === 'creampie'  ||  ((st as any).sex_ev ?? 0)?.['cum_choice'] === 'creampie_surprise') {
        scene.text(`You pull away, pussy trailing semen as you get down in front of ${((st as any).npcdesc ?? '')} and grab his cock. You work his shaft furiously, trying to keep him hard. It doesn't take long, only a minute or two, and before you know it ${((st as any).npcdesc ?? '')} is standing at attention once again.`);
      } else {
        scene.text(`Taking hold of his cock, you work his shaft furiously, trying to keep him hard. It doesn't take long, only a minute or two, and before you know it ${((st as any).npcdesc ?? '')} is standing at attention once again.`);
      }
      if (((st as any).sex_ev ?? 0)?.['not_done'] === 1) {
        scene.text('"Yeah, that\'s right... Just like that little guy..."');
      }
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['not_done'] = 0;
      if (((st as any).sex_ev ?? 0)?.['force_harden'] > 0) {
        ((st as any).sex_ev = (st as any).sex_ev ?? {})['force_harden'] = 2;
        ((st as any).sex_ev = (st as any).sex_ev ?? {})['extra_cum'] = ((st as any).sex_ev['extra_cum'] ?? 0) + (1);
      }
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['foreplay'] = '';
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReset(st, scene); (st as any).locArgs = __savedLocArgs; }
      qspCall(st, 'sex_ev_foreplay', 'handjob_dom1');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSexMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
    ]);
  }
  scene.build();
}

function enterHardenMouth(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['last_cum'] !== '') {
    scene.actions([
      { label: 'Try to get him hard again (mouth)', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['cum_count'] >= 5 + ((st as any).sex_ev ?? 0)?.['extra_cum']  &&  (((st as any).sex_ev ?? 0)?.['force_harden'] >= 2  ||  (Math.floor(Math.random() * 3) + 1) === 1)) {
      scene.text(String(qspFunc(s, 'sex_ev', 'bed_room') || ''));
      if (((st as any).sex_ev ?? 0)?.['force_harden'] > 0) {
        scene.text('"Oh no you\'re not," you growl lustfully.');
      }
      if ((((st as any).sex_ev ?? 0)?.['last_cum'] === 'creampie'  ||  ((st as any).sex_ev ?? 0)?.['cum_choice'] === 'creampie_surprise')  &&  ((st as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
        scene.text(`You pull away, pussy trailing semen as you get down in front of ${((st as any).npcdesc ?? '')}. You take him in your mouth, tasting of cum and your own juices, and suck gently on its head, licking, teasing, playing with his softening cock. But try as you might, it's like trying to play billiards with a rope. You just can't get him hard again.`);
      } else {
        if (((st as any).sex_ev ?? 0)?.['last_cum'] === 'condom') {
          scene.text(`You pull away and get down in front of ${((st as any).npcdesc ?? '')}. You slip the condom from his cock and take him in your mouth, you suck gently on its head, licking, teasing, playing, cleaning the cum from with his softening cock. But try as you might, it's like trying to play billiards with a rope. You just can't get him hard again.`);
        } else {
          scene.text(`You pull away and get down in front of ${((st as any).npcdesc ?? '')}. Taking his cock in your mouth, you suck gently on its head, licking, teasing, playing with his softening cock. But try as you might, it's like trying to play billiards with a rope. You just can't get him hard again.`);
        }
      }
      if (((st as any).sex_ev ?? 0)?.['not_done'] === 1) {
        scene.text('"Goddammit!" you growl. "I still wanted more out of you!"');
      }
      qspCall(st, 'sex_ev_after', 'after_sex1');
    } else {
      scene.img('images/shared/sex/blowjob/play1.mp4');
      if (((st as any).sex_ev ?? 0)?.['force_harden'] > 0) {
        scene.text('"Oh no you\'re not," you growl lustfully.');
      }
      if (((st as any).sex_ev ?? 0)?.['last_cum'] === 'creampie'  &&  ((st as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
        scene.text(`You pull away, pussy trailing semen as you get down in front of ${((st as any).npcdesc ?? '')}. You take him in your mouth, tasting of cum and your own juices, and suck gently on its head, licking, teasing, playing, trying to keep him hard. As you do, the dick between your lips begins to stiffen up again.`);
      } else {
        if (((st as any).sex_ev ?? 0)?.['last_cum'] === 'creampie'  &&  ((st as any).sex_ev ?? 0)?.['cock_inserted'] === 1  &&  ((st as any).sex_ev ?? 0)?.['force_harden'] > 0) {
          scene.text(`You pull away, pussy trailing semen as you get down in front of ${((st as any).npcdesc ?? '')}. You take him in your mouth, tasting of cum and your own juices as you lick, tease, and play with his shaft. After a few moments of softness, ${((st as any).npcdesc ?? '')} groans in a way that sounds almost painful and the dick between your lips begins to stiffen up again..`);
        } else {
          if (((st as any).sex_ev ?? 0)?.['last_cum'] === 'condom') {
            scene.text(`You pull away and get down in front of ${((st as any).npcdesc ?? '')}. You slip the condom from his cock and take him in your mouth, you suck gently on its head, licking, teasing, playing, cleaning the cum from his shaft. As you do, the dick between your lips begins to stiffen up again.`);
          } else {
            if (((st as any).sex_ev ?? 0)?.['force_harden'] > 0) {
              scene.text(`Taking his cock in your mouth, you suck gently on its head, licking, teasing, playing, with your lips and tongue across his shaft. After a few moments of softness, ${((st as any).npcdesc ?? '')} groans in a way that sounds almost painful and the dick between your lips begins to stiffen up again.`);
            } else {
              scene.text('Taking his cock in your mouth, you suck gently on its head, licking, teasing, playing, with your lips and tongue across his shaft. After a few moments of softness, the dick between your lips begins to stiffen up again.');
            }
          }
        }
      }
      if (((st as any).sex_ev ?? 0)?.['not_done'] === 1) {
        scene.text('"Yeah, that\'s right... Just like that little guy..." you whisper, pulling your mouth off with a pop and smiling wickedly as you continue slowly pumping him with your hand.');
      }
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['not_done'] = 0;
      if (((st as any).sex_ev ?? 0)?.['force_harden'] > 0) {
        ((st as any).sex_ev = (st as any).sex_ev ?? {})['force_harden'] = 2;
        ((st as any).sex_ev = (st as any).sex_ev ?? {})['extra_cum'] = ((st as any).sex_ev['extra_cum'] ?? 0) + (1);
      }
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['foreplay'] = '';
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReset(st, scene); (st as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSexMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
      scene.actions([
        { label: 'Keep blowing him', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_foreplay', '');
  } },
      ]);
    }
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cock_inserted'] = 0;
  } },
    ]);
  }
  scene.build();
}

function enterCockSexClean(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['cock_sex_clean'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['fuck'] > 0  &&  ((s as any).sex_ev ?? 0)?.['get_up'] !== 1) {
    scene.actions([
      { label: 'Clean his cock', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cock_sex_clean'] = 1;
    scene.img('images/shared/sex/blowjob/play1.mp4');
    if (((st as any).sex_ev ?? 0)?.['no_condom'] === 1) {
      if (((st as any).sex_ev ?? 0)?.['last_cum'] === 'creampie') {
        scene.text(`"Here, let me take care of that for you," you say, slithering down between ${((st as any).npcdesc ?? '')}'s legs and taking his cock in your mouth. You run your lips up and down his shaft and give it a thorough tongue bath, lapping up your own juices and the remnants of the creampie he filled you with.`);
      } else {
        scene.text(`"Here, let me take care of that for you," you say, slithering down between ${((st as any).npcdesc ?? '')}'s legs and taking his cock in your mouth. You run your lips up and down his shaft and give it a thorough tongue bath, lapping up your own juices and sucking any remaining cum out of the tip.`);
      }
    } else {
      if (((st as any).sex_ev ?? 0)?.['condoms_used'] > 0) {
        if (((st as any).sex_ev ?? 0)?.['cum_condom'] > 0) {
          scene.text(`"Here, let me take care of that for you," you say, slithering down between ${((st as any).npcdesc ?? '')}'s legs and taking his cock in your mouth. You run your lips up and down his shaft and give it a thorough tongue bath, lapping up your own juices and the cum that filled the inside of the condom.`);
        } else {
          scene.text(`"Here, let me take care of that for you," you say, slithering down between ${((st as any).npcdesc ?? '')}'s legs and taking his cock in your mouth. You run your lips up and down his shaft and give it a thorough tongue bath, lapping up the condom lube, your own juices, and sucking any remaining cum out of the tip.`);
        }
      }
    }
    scene.text(`${((st as any).npcdesc ?? '')} smiles at you appreciatively.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSexEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  scene.build();
}

function enterSessionReset(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['start_time'] = ((s as any).totminut ?? 0);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['force_harden'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['not_done'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['boy_shower'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['boy_in_shower'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['fucked_out'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cock_inserted'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['first_insertion'] = 0;
  if (((s as any).sex_ev ?? 0)?.['2pump'] > 0) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['2pump'] = 0;
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = '';
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterReset(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterReset(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['skip_foreplay'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['bj_cum_choice'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_choice'] = '';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['kiss'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['bored'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['he_ask'] = 0;
  (s as any).orgasm_or = '';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['not_inside'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['pullout_ask'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['creampie_exit'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['no_cum'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cleanup'] = 0;
  if (((s as any).sex_ev ?? 0)?.['came_together'] > 0) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['came_together'] = 0;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['simultaneous_orgasm_count'] = ((s as any).sex_ev['simultaneous_orgasm_count'] ?? 0) + (1);
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['did_we_cum_together'] = 0;
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['creampie_surprise'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['surprise_cum_together'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['anal_creampie_surprise'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['anal_surprise_cum_together'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_together_fake'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_react'] = 0;
  if (((s as any).sex_ev ?? 0)?.['mad'] === 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['mad'] = 2;
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['boy_cum'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['bj_cum'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['consecutive_cuni_orgasm'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['about_time'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['his_choice'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_warn'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_where'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['he_ask'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['he_ask_creampie'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['he_ask_creampie_yes'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['he_ask_mouth'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['he_ask_facial'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['he_ask_tits'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_wherever'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['swallow'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['spit'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['gag'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['react'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['force_initiative'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['smoke_break'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cycle_limit'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['extra_stim'] = 0;
  if (((s as any).sex_ev ?? 0)?.['consecutive_orgasm'] === 0) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['magik'] = ((s as any).pcs_magik ?? 0);
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['reaction'] = '';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['just_cum_inside_me'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['take_in_stride'] = 0;
  if (((s as any).sex_ev ?? 0)?.['sex_over'] > 0) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['sex_over'] = 0;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['round_count'] = ((s as any).sex_ev['round_count'] ?? 0) + (1);
  }
  if (((s as any).sex_ev ?? 0)?.['no_condom'] === 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['condom'] = 0;
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['good_for_you'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['blowjob_switch'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cock_sex_clean'] = 0;
  if (((s as any).sex_ev ?? 0)?.['creampie_force'] === 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['creampie_force'] = 2;
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['creampie_ask'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['creampie_orgasm'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cant_hold_cum'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['condom_check'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_pos'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['end_comment'] = '';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_together_dialogue1'] = '';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['hypno_came_together'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['pee_after'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['bum_cigarette'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cigarette'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['boy_smoked'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['shower'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['pee_after'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['pull-out_fail_react'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['catch_breath'] = 0;
  if (((s as any).sex_ev ?? 0)?.['morning_after'] === 1  &&  ((s as any).sex_ev ?? 0)?.['morning_fuck'] === 0) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['morning_fuck'] = 1;
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['not_yet'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['need_break'] = 0;
  if (((s as any).sex_ev ?? 0)?.['2pump'] === 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['2pump'] = 2;
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_limit_warning'] = 0;
  scene.build();
}

function enterPainTracking(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['vaginal_pain'] !== ((s as any).pain ?? 0)?.['vagina']) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['pain_counter'] = ((s as any).sex_ev['pain_counter'] ?? 0) + (1);
  }
  if (((s as any).sex_ev ?? 0)?.['cervix_pain'] !== ((s as any).pain ?? 0)?.['cervix']) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['pain_counter'] = ((s as any).sex_ev['pain_counter'] ?? 0) + (1);
  }
  if (((s as any).sex_ev ?? 0)?.['asshole_pain'] !== ((s as any).pain ?? 0)?.['asshole']) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['pain_counter'] = ((s as any).sex_ev['pain_counter'] ?? 0) + (1);
  }
  scene.build();
}

function enterSleepSex(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['start_time'] = ((s as any).totminut ?? 0);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['sleep_fuck'] = 1;
  qspCall(s, 'arousal', 'vaginal', (Math.floor(Math.random() * 6) + 5), 'no_orgasm_msg', (((s as any).sex_ev ?? 0)?.['prostitution_flag']));
  if (((s as any).npc_sex_speed ?? 0) <= 2) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['sleep_video1'] = '<center><video autoplay loop ' + ((s as any).set_imgh ?? 0) + ' src="images/shared/sex/sleep/slow' + (Math.floor(Math.random() * 2) + 1) + '.mp4"></video></center>';
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['sleep_video2'] = '<center><video autoplay loop ' + ((s as any).set_imgh ?? 0) + ' src="images/shared/sex/sleep/slow2.mp4"></video></center>';
  } else {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['sleep_video1'] = '<center><video autoplay loop ' + ((s as any).set_imgh ?? 0) + ' src="images/shared/sex/sleep/fast' + (Math.floor(Math.random() * 2) + 1) + '.mp4"></video></center>';
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['sleep_video2'] = '<center><video autoplay loop ' + ((s as any).set_imgh ?? 0) + ' src="images/shared/sex/sleep/fast2.mp4"></video></center>';
  }
  scene.text(String(qspFunc(s, 'sex_ev', 'sleep_video1') || ''));
  scene.text('<i>Mmmmmmm...</i>');
  scene.text('You\'re in a dream...');
  scene.text('What kind of dream is it?');
  scene.actions([
    { label: 'Nice', handler: (st: GameState) => {
    scene.text(String(qspFunc(s, 'sex_ev', 'sleep_video1') || ''));
    scene.text('<i>Mmmmmmm...</i>');
    scene.text('It\'s a nice dream. You\'re rocking back and forth on a hammock on the water. There\'s a thick pillow between your legs and everything feels so comfy.');
    if (((st as any).pcs_sleep ?? 0) > 40) {
      scene.actions([
        { label: 'Wait a minute', handler: (st: GameState) => {
    scene.img('images/shared/sex/sleep/wake1.mp4');
    scene.text('<i>Hang on a minute.</i>');
    scene.text('Even in your sleep your brow wrinkles.');
    scene.text('<i>Hammock on the water? That doesn\'t make any sense. And don\'t hammocks swing side to side, not back and forth? And it doesn\'t feel like a <b>pillow</b> between my legs, it feels like a...</i>');
    scene.text(`Your eyes flutter open and find ${((st as any).npcdesc ?? '')} on top of you, his cock balls deep inside you, and his hand openly groping your breast.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSleepWakeOptions(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    scene.actions([
      { label: 'Keep dreaming', handler: (st: GameState) => {
    scene.text(String(qspFunc(s, 'sex_ev', 'sleep_video2') || ''));
    scene.text('You carry on with your pleasant dream, falling deeper and deeper into it, and don\'t wake up until the morning.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSleepCum(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: '. . .', goto: ['sex_ev_after', 'sleep_function'] },
    ]);
  } },
    ]);
  } },
    { label: 'Bad', handler: (st: GameState) => {
    scene.text(String(qspFunc(s, 'sex_ev', 'sleep_video1') || ''));
    scene.text('<i>Nnngh...</i>');
    scene.text('It\'s a horrid dream. The town has declared you\'re a witch and are to be impaled and then burned at the stake. You can already feel it stabbing between your legs.');
    if (((st as any).pcs_sleep ?? 0) > 40) {
      scene.actions([
        { label: 'Wait a minute', handler: (st: GameState) => {
    scene.img('images/shared/sex/sleep/wake1.mp4');
    scene.text('<i>Hang on a minute.</i>');
    scene.text('Even in your sleep your brow wrinkles.');
    scene.text('<i>That doesn\'t feel like wood. I\'m not being impaled, I\'m being...</i>');
    scene.text(`Your eyes flutter open and find ${((st as any).npcdesc ?? '')} on top of you, his cock balls deep inside you, and his hand openly groping your breast.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSleepWakeOptions(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    scene.actions([
      { label: 'Keep dreaming', handler: (st: GameState) => {
    scene.text(String(qspFunc(s, 'sex_ev', 'sleep_video2') || ''));
    scene.text('You toss back and forth, moaning incoherently in your sleep, and don\'t wake up until the morning.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSleepCum(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: '. . .', goto: ['sex_ev_after', 'sleep_function'] },
    ]);
  } },
    ]);
  } },
    { label: 'Sexy', handler: (st: GameState) => {
    scene.text(String(qspFunc(s, 'sex_ev', 'sleep_video1') || ''));
    scene.text('<i>Mmmmmmm...</i>');
    if (((st as any).sex_ev ?? 0)?.['type'] === 'married_sex'  ||  ((st as any).husID ?? 0) !== '') {
      scene.text('It\'s a <i>good</i> dream. You\'re rocking back and forth on a your husband\'s cock, riding him like there\'s no tomorrow as it fills your pussy in all the right ways.');
    } else {
      if (((st as any).npc_rel_type ?? 0)?.[String((st as any).npcID ?? 0)] === 'boyfriend'  ||  ((st as any).stat ?? 0)?.['boyfriends_current'] > 0) {
        scene.text('It\'s a <i>good</i> dream. You\'re rocking back and forth on a your boyfriend\'s cock, riding him like there\'s no tomorrow as it fills your pussy in all the right ways.');
      } else {
        if (((st as any).pcs_girlfriends ?? 0) > 0) {
          scene.text('It\'s a <i>good</i> dream. You\'re rocking back and forth on a your girlfriend\'s strapon, riding her like there\'s no tomorrow as it fills your pussy in all the right ways.');
        } else {
          if (((st as any).npc_rel_type ?? 0)?.[String((st as any).npcID ?? 0)] === 'fuckbuddy') {
            scene.text('It\'s a <i>good</i> dream. You\'re rocking back and forth on a your fuckbuddy\'s cock, riding him like there\'s no tomorrow as it fills your pussy in all the right ways.');
          } else {
            scene.text('It\'s a <i>good</i> dream. You\'re rocking back and forth on a some guy\'s cock, riding him like there\'s no tomorrow as it fills your pussy in all the right ways.');
          }
        }
      }
    }
    if (((st as any).pcs_sleep ?? 0) > 40) {
      scene.actions([
        { label: 'Wait a minute', handler: (st: GameState) => {
    scene.img('images/shared/sex/sleep/wake1.mp4');
    scene.text('<i>Hang on a minute.</i>');
    scene.text('You moan involuntarily as a spark of pleasure jumps through your chest.');
    scene.text('<i>I\'m not dreaming... I\'m...</i>');
    scene.text(`Your eyes flutter open and find ${((st as any).npcdesc ?? '')} on top of you, his cock balls deep inside you, and his hand openly groping your breast.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSleepWakeOptions(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    scene.actions([
      { label: 'Keep dreaming', handler: (st: GameState) => {
    scene.text(String(qspFunc(s, 'sex_ev', 'sleep_video2') || ''));
    if (((st as any).orgasm ?? 0) > ((st as any).sex_ev ?? 0)?.['orgasm']) {
      scene.text('You carry on with your pleasant dream, feeling your entire body quake in orgasm, even in sleep, and don\'t wake up until the morning.');
    } else {
      scene.text('You carry on with your pleasant dream, moaning loudly even in your sleep, and don\'t wake up until the morning.');
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSleepCum(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: '. . .', goto: ['sex_ev_after', 'sleep_function'] },
    ]);
  } },
    ]);
  } },
    { label: 'Weird', handler: (st: GameState) => {
    scene.text(String(qspFunc(s, 'sex_ev', 'sleep_video1') || ''));
    scene.text('<i>Mmmmmmm...</i>');
    scene.text('It\'s a weird dream. You\'re suspended in a giant block of gelatin. You can\'t move your arms or your legs, but you can breath, and the jelly is alive somehow. You can feel it pulsing between your thighs. In fact, it almost feels like its inside you.');
    if (((st as any).pcs_sleep ?? 0) > 40) {
      scene.actions([
        { label: 'Wait a minute', handler: (st: GameState) => {
    scene.img('images/shared/sex/sleep/wake1.mp4');
    scene.text('<i>Hang on a minute.</i>');
    scene.text('Even in your sleep your brow wrinkles.');
    scene.text('<i>It <b>is</b> inside me! And that\'s not jelly, that\'s...</i>');
    scene.text(`Your eyes flutter open and find ${((st as any).npcdesc ?? '')} on top of you, his cock balls deep inside you, and his hand openly groping your breast.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSleepWakeOptions(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    scene.actions([
      { label: 'Keep dreaming', handler: (st: GameState) => {
    scene.text(String(qspFunc(s, 'sex_ev', 'sleep_video2') || ''));
    scene.text('You carry on with your strange dream, falling deeper and deeper into it, and don\'t wake up until the morning.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSleepCum(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: '. . .', goto: ['sex_ev_after', 'sleep_function'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSleepWakeOptions(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_sleep_sex_okay ?? 0)?.[String((s as any).npcID ?? 0)] < 1) {
    scene.actions([
      { label: 'What the fuck!', goto: ['sex_ev_sex', 'sleep_wake_wtf'] },
    ]);
  } else {
    if (((s as any).npc_sleep_sex_okay ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.text(`"You're finally awake," ${((s as any).npcdesc ?? '')} smiles.`);
    }
  }
  scene.actions([
    { label: 'Moan', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['sleep_fuck'] = 2;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['position'] = 'miss';
    scene.img('images/shared/sex/sleep/wake1.mp4');
    scene.text('<i>Ahh~! Aahn~!</i>');
    scene.text(`You moan with hoarse arousal, spreading your legs wider so ${((st as any).npcdesc ?? '')} can keep fucking you.`);
    if (((st as any).npc_sex_speed ?? 0) <= 2) {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['speed'] = 1;
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Fuck ' + String(((st as any).npcdesc ?? '') ?? ''), handler: (st: GameState) => {
    qspCall(st, 'sex_ev_miss', '');
  } },
      ]);
    } else {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['speed'] = 3;
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Fuck ' + String(((st as any).npcdesc ?? '') ?? ''), handler: (st: GameState) => {
    qspCall(st, 'sex_ev_miss', '');
  } },
      ]);
    }
  } },
    { label: 'Oh. (go back to sleep)', handler: (st: GameState) => {
    scene.text('"Hmm? Oh," you say flatly and lazily close your eyes, letting yourself drift back into dreamland.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSleepCum(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Orgasm', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFuckArousalCreampieCumCode(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.img('images/shared/sex/vag/miss/orgasm1.mp4');
    scene.text(`In your relaxed state of sleep, you didn't realize how close you were to orgasm. The instant you're aware of it, your arousal finally breaks and an orgasm rocks through your body. You whimper sleepily as you squirm beneath ${((st as any).npcdesc ?? '')} and your climax washes over you.`);
    scene.actions([
      { label: 'Back to sleep', handler: (st: GameState) => {
    scene.text(String(qspFunc(s, 'sex_ev', 'sleep_video2') || ''));
    scene.text('<i>That was... nice...</i> you think before tiredness overtakes you and you drift off back to dreamland.');
    scene.text('...');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSleepCum(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Keep fucking', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['sleep_fuck'] = 2;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['position'] = 'miss';
    scene.img('images/shared/sex/sleep/wake1.mp4');
    scene.text('<i>Ahh~! Aahn~!</i>');
    scene.text(`You moan with hoarse arousal as your orgasm fades and control comes back to your body, spreading your legs wider so ${((st as any).npcdesc ?? '')} can keep fucking you.`);
    if (((st as any).npc_sex_speed ?? 0) <= 2) {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['speed'] = 1;
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Fuck ' + String(((st as any).npcdesc ?? '') ?? ''), handler: (st: GameState) => {
    qspCall(st, 'sex_ev_miss', '');
  } },
      ]);
    } else {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['speed'] = 3;
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Fuck ' + String(((st as any).npcdesc ?? '') ?? ''), handler: (st: GameState) => {
    qspCall(st, 'sex_ev_miss', '');
  } },
      ]);
    }
  } },
    ]);
  } },
    { label: 'Don\'t wake me up', handler: (st: GameState) => {
    scene.text('"Do whatever you want to me, just don\'t wake me up," you murmur and promptly close your eyes, letting yourself drift back into dreamland.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSleepCum(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterSleepWakeWtf(s: GameState, scene: SceneBuilder): void {
  scene.text(String(qspFunc(s, 'sex_ev', 'bed_room') || ''));
  scene.text(`"<i>WHAT THE FUCK!</i>" you scream, kicking ${((s as any).npcdesc ?? '')} out of you and scrambling across the bed from him. "What the fuck do you think you're doing?!"`);
  if ((((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  (Math.floor(Math.random() * 3) + 1) === 1)  &&  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
    scene.text(`${((s as any).npcdesc ?? '')} looks deeply embarrassed.`);
    if (((s as any).sex_ev ?? 0)?.['cum_count'] >= ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]) {
      scene.text('"I- I\'m sorry," he stammers. "After you fell asleep, I woke up. You were right there and I was so hard. I just couldn\'t get back to sleep. And since we just... you know... I thought I could...');
    } else {
      scene.text('"I- I\'m sorry," he stammers. "After you fell asleep, I was still hard. I just couldn\'t get to bed. And since we just... you know... I thought I could...');
    }
    scene.actions([
      { label: 'Forgive him', handler: (st: GameState) => {
    scene.text('Your hard stare softens and you feel the anger slowly drain from your body.');
    scene.text('"It\'s fine, I guess," you say. "Just..."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSleepWtfForgive(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } else {
    scene.text('"What?" he asks, unabashed. "It\'s not like I was doing anything we hadn\'t already done."');
    scene.actions([
      { label: 'Forgive him', handler: (st: GameState) => {
    scene.text('Your hard stare softens and you feel the anger slowly drain from your body.');
    scene.text('"I guess you have a point," you admit reluctantly. "Just..."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSleepWtfForgive(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  scene.build();
}

function enterSleepWtfForgive(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Don\'t do it again', handler: (st: GameState) => {
    ((st as any).npc_sleep_sex_okay = (st as any).npc_sleep_sex_okay ?? {})[String((st as any).npcID ?? 0)] = (-1);
    scene.text('"... don\'t do it again, okay?" you warn.');
    scene.text('"Okay..." he says. After a moment, still blushing, he says, "Since you\'re awake... do you think we could...?"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSleepWtfForgive2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Ask next time', handler: (st: GameState) => {
    ((st as any).npc_sleep_sex_okay = (st as any).npc_sleep_sex_okay ?? {})[String((st as any).npcID ?? 0)] = 1;
    scene.text('"... ask next time, okay?" you say with a soft smile.');
    scene.text('"Ask?" he says hesitantly. "You mean, wake you up?"');
    scene.actions([
      { label: 'For permission', handler: (st: GameState) => {
    scene.text('"Just enough to get my permission," you reply. "I don\'t like getting raped in my sleep. But if you have my consent, it\'s not rape."');
    scene.text('"Okay," he nods. After a moment, still blushing, he says, "Since you\'re awake... do you think we could...?"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSleepWtfForgive2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Maybe I\'ll be in the mood', handler: (st: GameState) => {
    scene.text('"Maybe I\'ll be in the mood too," you smirk teasingly. "It\'s not fair if you get all the fun."');
    scene.text('"Okay," he nods. After a moment, still blushing, he says, "Since you\'re awake... do you think we could...?"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSleepWtfForgive2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSleepWtfForgive2(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'No way', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['sleep_fuck'] = (-1);
    scene.text(String(qspFunc(s, 'sex_ev', 'bed_room') || ''));
    scene.text('Your anger returns swiftly.');
    scene.text('"No! Did you really think I was going to say yes after you were just <i>molesting</i> me in my sleep?"');
    scene.text(`${((st as any).npcdesc ?? '')} sighs disappointedly and lays back in bed.`);
    scene.actions([
      { label: 'Time to leave', handler: (st: GameState) => {
    scene.text(String(qspFunc(s, 'sex_ev', 'bed_room') || ''));
    scene.text('"Ugh." You sneer at him as you get up. "I see how it\'s gonna be. Not gonna get a wink of sleep with you around. I\'m leaving."');
    scene.text('Quick as you can, you gather your things and get dressed and head out the door.');
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
    ]);
  } },
      { label: 'Back to sleep', handler: (st: GameState) => {
    scene.text(String(qspFunc(s, 'sex_ev', 'bed_room') || ''));
    scene.text('You crawl back under the sheets, closing your eyes, and try to get back to sleep.');
    scene.actions([
      { label: '. . .', goto: ['sex_ev_after', 'sleep_function'] },
    ]);
  } },
    ]);
  } },
    { label: 'Oh alright', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['sleep_fuck'] = 2;
    scene.text(String(qspFunc(s, 'sex_ev', 'bed_room') || ''));
    scene.text('You give him a look and after a brief pause, you sigh dramatically, rolling your eyes.');
    scene.text('"Oh alright. Come here," you say, beckoning him towards you so you can do something about his raging hard-on.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReset(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSexMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Sure', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['sleep_fuck'] = 2;
    scene.text(String(qspFunc(s, 'sex_ev', 'bed_room') || ''));
    scene.text('"Sure," you grin, beckoning him closer so you can put his raging erection to use.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReset(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSexMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterSleepCum(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie'  &&  ((((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] !== 1  &&  ((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] !== 1)  ||  (((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === 'when_safe'  &&  (((s as any).sex_ev ?? 0)?.['preg_risk'] !== 'safe'  ||  ((s as any).sex_ev ?? 0)?.['preg_risk'] === 'prob_safe'))  ||  ((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === 'at_will'  ||  ((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1)) {
    qspCall(s, 'cum_call', '', ((s as any).npcID ?? 0), 1);
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['sleep_cum_vagina'] = 1;
  } else {
    if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'mouth'  ||  ((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'face') {
      (s as any).temp_rand = (Math.floor(Math.random() * 2) + 1);
      if (((s as any).temp_rand ?? 0) === 1) {
        qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0), 1);
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['sleep_cum_face'] = 1;
      } else {
        qspCall(s, 'cum_call', 'hair', ((s as any).npcID ?? 0), 1);
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['sleep_cum_hair'] = 1;
      }
    } else {
      if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'tits') {
        qspCall(s, 'cum_call', 'breasts', ((s as any).npcID ?? 0), 1);
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['sleep_cum_tits'] = 1;
      } else {
        if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'pullout') {
          (s as any).temp_rand = (Math.floor(Math.random() * 3) + 1);
          if (((s as any).temp_rand ?? 0) === 1) {
            qspCall(s, 'cum_call', 'stomach', ((s as any).npcID ?? 0), 1);
            ((s as any).sex_ev = (s as any).sex_ev ?? {})['sleep_cum_stomach'] = 1;
          } else {
            if (((s as any).temp_rand ?? 0) === 2) {
              qspCall(s, 'cum_call', 'back', ((s as any).npcID ?? 0), 1);
              ((s as any).sex_ev = (s as any).sex_ev ?? {})['sleep_cum_back'] = 1;
            } else {
              qspCall(s, 'cum_call', 'butt', ((s as any).npcID ?? 0), 1);
              ((s as any).sex_ev = (s as any).sex_ev ?? {})['sleep_cum_butt'] = 1;
            }
          }
        } else {
          qspCall(s, 'cum_call', 'back', ((s as any).npcID ?? 0), 1);
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['sleep_cum_stomach'] = 1;
        }
      }
    }
  }
  (s as any).temp_rand = undefined;
  scene.build();
}

function enterWakeupSex(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['sleep_fuck'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['wake_fuck'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['morning_after'] = 1;
  qspCall(s, 'arousal', 'vaginal', (Math.floor(Math.random() * 6) + 5), 'no_orgasm_msg', (((s as any).sex_ev ?? 0)?.['prostitution_flag']));
  if (((s as any).npc_sex_speed ?? 0) <= 2) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['sleep_video1'] = '<center><video autoplay loop ' + ((s as any).set_imgh ?? 0) + ' src="images/shared/sex/sleep/slow' + (Math.floor(Math.random() * 2) + 1) + '.mp4"></video></center>';
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['sleep_video2'] = '<center><video autoplay loop ' + ((s as any).set_imgh ?? 0) + ' src="images/shared/sex/sleep/slow2.mp4"></video></center>';
  } else {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['sleep_video1'] = '<center><video autoplay loop ' + ((s as any).set_imgh ?? 0) + ' src="images/shared/sex/sleep/fast' + (Math.floor(Math.random() * 2) + 1) + '.mp4"></video></center>';
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['sleep_video2'] = '<center><video autoplay loop ' + ((s as any).set_imgh ?? 0) + ' src="images/shared/sex/sleep/fast2.mp4"></video></center>';
  }
  if (((s as any).daystage ?? 0) === 2) {
    scene.img('images/shared/sex/vag/miss/2.jpg');
    scene.text('<i>Mmmmmmm...</i>');
    scene.text('Your consciousness stirs. A bright light shines on your eyelids. Must be the sun coming through the window. But also, what\'s that between your...');
  } else {
    scene.text(String(qspFunc(s, 'sex_ev', 'sleep_video1') || ''));
    scene.text('<i>Mmmmmmm...</i>');
    scene.text('Your consciousness stirs. It doesn\'t seem to be light out yet, but hazily somewhere your body feels like morning has already arrived. Speaking of your body, what\'s that...');
  }
  scene.actions([
    { label: 'Open your eyes', goto: ['sex_ev_sex', 'wakeup_sex2'] },
  ]);
  scene.build();
}

function enterWakeupSex2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/vag/miss/3.jpg');
  scene.text(`Your eyes flutter open and find ${((s as any).npcdesc ?? '')} balls deep inside you, happily fucking you first thing in the morning.`);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterWakeupSexOptions(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterWakeupSexOptions(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_sleep_sex_okay ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'childish'  &&  ((s as any).npc_apt_spare ?? 0)?.[String((s as any).npcID ?? 0)] === 'gaming'  &&  (Math.floor(Math.random() * 3) + 1) === 1) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['skyrim_joke'] = 1;
      scene.text(`"You're finally awake," ${((s as any).npcdesc ?? '')} says, putting on a stern face and a gruff voice. "You were trying to cross the border, right?"`);
    } else {
      scene.text(`"Good morning," ${((s as any).npcdesc ?? '')} smiles. "Have any good dreams?"`);
    }
  }
  if (((s as any).npc_sleep_sex_okay ?? 0)?.[String((s as any).npcID ?? 0)] < 1) {
    scene.actions([
      { label: 'What the fuck!', goto: ['sex_ev_sex', 'morning_wake_wtf'] },
    ]);
  } else {
    if (((s as any).npc_sleep_sex_okay ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.actions([
        { label: '"You were supposed to wake me" (not mad)', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMorningWakeFuckCode(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text(`"Weren't <i>mm-!</i> you supposed to <i>aah~!</i> wake me?" you moan with hoarse arousal, spreading your legs wider so ${((st as any).npcdesc ?? '')} can keep fucking you.`);
    scene.text('"I just did," he grins.');
    qspGoto(st, 'sex_ev_sex', 'wakeup_sex_continue');
  } },
      ]);
    }
  }
  if (((s as any).sex_ev ?? 0)?.['skyrim_joke'] === 1) {
    scene.actions([
      { label: 'Giggle (he\'s dorky)', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMorningWakeFuckCode(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text(`${((st as any).npcdesc ?? '')}'s internet video game joke is stupid to be sure, but despite that you can't help but smile at it.`);
    scene.text('"You\'re such a dork," you say, your giggles turning to moans as you feel him thrust again inside you.');
    qspGoto(st, 'sex_ev_sex', 'wakeup_sex_continue');
  } },
      { label: 'Giggle (you\'re dorky)', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMorningWakeFuckCode(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('"I love that meme," you say, your giggles turning to moans as you feel him thrust again inside you.');
    qspGoto(st, 'sex_ev_sex', 'wakeup_sex_continue');
  } },
      { label: 'What are you talking about?', handler: (st: GameState) => {
    scene.img('images/shared/sex/sleep/wake1.mp4');
    scene.text('"Huh?" Your nose scrunches up in confusion. "What on earth are you talking about?"');
    scene.text('"It\'s a meme," he says, breaking into a silly smile.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMorningSkyrimJoke(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Uhh, okay?', handler: (st: GameState) => {
    scene.text('"Uhmm... okay...?" you reply with confusion as he keeps fucking you and you think to yourself, <i>Boys are weird...</i>');
  } },
    ]);
  } },
      { label: 'Shut up and fuck me', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMorningWakeFuckCode(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('"Keep your dumb jokes to yourself and fuck me," you groan hoarsely, spreading your legs as an invitation to pick up the pace.');
    qspGoto(st, 'sex_ev_sex', 'wakeup_sex_continue');
  } },
    ]);
  }
  scene.actions([
    { label: 'Moan', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMorningWakeFuckCode(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('<i>Ahh~! Aahn~!</i>');
    scene.text(`You moan with hoarse arousal, spreading your legs wider so ${((st as any).npcdesc ?? '')} can keep fucking you.`);
    qspGoto(st, 'sex_ev_sex', 'wakeup_sex_continue');
  } },
  ]);
  scene.build();
}

function enterMorningWakeFuckCode(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSessionReset(s, scene); (s as any).locArgs = __savedLocArgs; }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['wakeup_fuck'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'miss';
  if (((s as any).daystage ?? 0) === 2) {
    scene.img('images/shared/sex/vag/miss/med1.mp4');
  } else {
    scene.img('images/shared/sex/sleep/wake2.mp4');
  }
  if (((s as any).npc_sex_speed ?? 0) <= 2) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['speed'] = 1;
  } else {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['speed'] = 3;
  }
  scene.build();
}

function enterMorningSkyrimJoke(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'What a terrible joke', handler: (st: GameState) => {
    scene.actions([
      { label: 'Are you a child?', handler: (st: GameState) => {
    scene.img('images/shared/sex/sleep/wake1.mp4');
    scene.text('"Ugh," you groan loudly. "Internet memes? Seriously? What are you? Twelve?"');
    scene.text(`${((st as any).npcdesc ?? '')} seems to feel no shame at all, letting his shit eating grin widen as he keeps fucking you.`);
    qspGoto(st, 'sex_ev_sex', 'wakeup_sex_continue');
  } },
      { label: 'That killed the mood', handler: (st: GameState) => {
    scene.img('images/shared/sex/sleep/wake1.mp4');
    scene.text('"<i>Wow</i>," you say, cringing something awful. "You sure know how to instantly kill the mood. I think we\'re done here."');
    scene.text(`"Oh come on! It wasn't that bad!" ${((st as any).npcdesc ?? '')} tries to protest as you push him away. "Come on, don't be like that."`);
    scene.actions([
      { label: 'Yes it was', handler: (st: GameState) => {
    scene.text(String(qspFunc(s, 'sex_ev', 'bed_room') || ''));
    scene.text('"Uhh, <i>yes</i>. It was," you say, giving him a look of contempt. "I felt the moisture in my vagina practically evaporate. There is no way I\'m going to let you fuck me right after saying that with your cock <i>inside</i> me."');
    scene.text(`You successfully push ${((st as any).npcdesc ?? '')} off of you, shuddering with utter disgust the moment he's out from between your legs.`);
    qspCall(st, 'sex_ev_morning', 'morning_menu1');
  } },
      { label: 'Ugh, fine', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/miss/2.jpg');
    scene.text('"Ugh, <i>fine!</i>" you groan loudly. "I can\'t believe I\'m going to let you do this after saying that..."');
    scene.text('You spread your legs wider, allowing him to fuck you more deeply.');
    qspGoto(st, 'sex_ev_sex', 'wakeup_sex_continue');
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMorningWakeWtf(s: GameState, scene: SceneBuilder): void {
  scene.text(String(qspFunc(s, 'sex_ev', 'bed_room') || ''));
  scene.text(`"<i>WHAT THE FUCK!</i>" you scream, kicking ${((s as any).npcdesc ?? '')} out of you and scrambling across the bed from him. "What the fuck do you think you're doing?!"`);
  if ((((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  (Math.floor(Math.random() * 3) + 1) === 1)  &&  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
    scene.text(`${((s as any).npcdesc ?? '')} looks deeply embarrassed.`);
    scene.text('"I- I\'m sorry," he stammers. "I woke up. You were right there and... I thought it would be sexy if I... you know...');
    scene.actions([
      { label: 'Forgive him', handler: (st: GameState) => {
    scene.text('Your hard stare softens and you feel the anger slowly drain from your body.');
    scene.text('"It\'s fine, I guess," you say. "Just..."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMorningWtfForgive(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } else {
    scene.text('"What?" he asks, unabashed. "You were just laying there all naked and sexy, so I just thought I\'d give you some wakeup sex. It\'s not like we haven\'t fucked before."');
    scene.actions([
      { label: 'Forgive him', handler: (st: GameState) => {
    scene.text('Your hard stare softens and you feel the anger slowly drain from your body.');
    scene.text('"I guess you have a point," you admit reluctantly. "Just..."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMorningWtfForgive(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  scene.build();
}

function enterMorningWtfForgive(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Don\'t do it again', handler: (st: GameState) => {
    ((st as any).npc_sleep_sex_okay = (st as any).npc_sleep_sex_okay ?? {})[String((st as any).npcID ?? 0)] = (-1);
    scene.text('"... don\'t do it again, okay?" you warn.');
    scene.text('"Okay..." he says. After a moment, still blushing, he says, "Since you\'re awake... do you think we could...?"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMorningWtfForgive2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Wake me up first', handler: (st: GameState) => {
    ((st as any).npc_sleep_sex_okay = (st as any).npc_sleep_sex_okay ?? {})[String((st as any).npcID ?? 0)] = 1;
    scene.text('"... wake me next time, okay?" you say with a soft smile.');
    scene.text('"I can do that," he grins.');
    scene.actions([
      { label: 'For permission', handler: (st: GameState) => {
    scene.text('"For <i>permission</i>," you roll your eyes. "I don\'t like getting raped in my sleep. But if you wake me up first and have my consent, it\'s not rape."');
    scene.text('"Okay," he nods. After a moment, still blushing, he says, "Since you\'re awake... do you think we could...?"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMorningWtfForgive2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Maybe I\'ll be in the mood', handler: (st: GameState) => {
    scene.text('"Maybe I\'ll be in the mood too," you smirk teasingly. "It\'s not fair if you get all the fun."');
    scene.text('"Okay," he nods. After a moment, still blushing, he says, "Since you\'re awake... do you think we could...?"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMorningWtfForgive2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMorningWtfForgive2(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'No way', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['morning_fuck'] = (-1);
    scene.text(String(qspFunc(s, 'sex_ev', 'bed_room') || ''));
    scene.text('Your anger returns swiftly.');
    scene.text('"No! Did you really think I was going to say yes after you were just <i>molesting</i> me in my sleep?"');
    scene.text(`${((st as any).npcdesc ?? '')} sighs disappointedly and lays back in bed.`);
    qspCall(st, 'sex_ev_morning', 'morning_menu1');
  } },
    { label: 'Oh alright', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['morning_fuck'] = 2;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['start_time'] = ((st as any).totminut ?? 0);
    scene.text(String(qspFunc(s, 'sex_ev', 'bed_room') || ''));
    scene.text('You give him a look and after a brief pause, you sigh dramatically, rolling your eyes.');
    scene.text('"Oh alright. Come here," you say, beckoning him towards you so you can do something about his raging hard-on.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReset(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSexMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Sure', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['morning_fuck'] = 2;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['start_time'] = ((st as any).totminut ?? 0);
    scene.text(String(qspFunc(s, 'sex_ev', 'bed_room') || ''));
    scene.text('"Sure," you grin, beckoning him closer so you can put his raging erection to use.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReset(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSexMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterWakeupSexContinue(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['start_time'] = ((s as any).totminut ?? 0);
  if (((s as any).npc_sex_speed ?? 0) <= 2) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['speed'] = 1;
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Fuck ' + String(((s as any).npcdesc ?? '') ?? ''), handler: (st: GameState) => {
    qspCall(st, 'sex_ev_miss', '');
  } },
    ]);
  } else {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['speed'] = 3;
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Fuck ' + String(((s as any).npcdesc ?? '') ?? ''), handler: (st: GameState) => {
    qspCall(st, 'sex_ev_miss', '');
  } },
    ]);
  }
  // TODO-QSP: --- sex_ev_sex ---------------------------------
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'inserted_img':
      enterInsertedImg(s, scene);
      break;
    case 'sex_start':
      enterSexStart(s, scene);
      break;
    case 'sex_pre':
      enterSexPre(s, scene);
      break;
    case 'position_picker':
      enterPositionPicker(s, scene);
      break;
    case 'position_menu':
      enterPositionMenu(s, scene);
      break;
    case 'position_choose':
      enterPositionChoose(s, scene);
      break;
    case 'let_him_choose':
      enterLetHimChoose(s, scene);
      break;
    case 'he_initiate':
      enterHeInitiate(s, scene);
      break;
    case 'he_choose_position':
      enterHeChoosePosition(s, scene);
      break;
    case 'lube_up_bb1':
      enterLubeUpBb1(s, scene);
      break;
    case 'lube_up_condom1':
      enterLubeUpCondom1(s, scene);
      break;
    case 'rand_position':
      enterRandPosition(s, scene);
      break;
    case 'insertion_arousal_code':
      enterInsertionArousalCode(s, scene);
      break;
    case 'fuck_arousal_code':
      enterFuckArousalCode(s, scene);
      break;
    case 'fuck_rough_arousal_code':
      enterFuckRoughArousalCode(s, scene);
      break;
    case 'fuck_rough_no_cum_code':
      enterFuckRoughNoCumCode(s, scene);
      break;
    case 'fuck_no_cum_code':
      enterFuckNoCumCode(s, scene);
      break;
    case 'fuck_arousal_creampie_cum_code':
      enterFuckArousalCreampieCumCode(s, scene);
      break;
    case 'girl_orgasm_change_position':
      enterGirlOrgasmChangePosition(s, scene);
      break;
    case 'fuck_continue':
      enterFuckContinue(s, scene);
      break;
    case 'position_change':
      enterPositionChange(s, scene);
      break;
    case 'change_pace':
      enterChangePace(s, scene);
      break;
    case 'fuck_me_faster':
      enterFuckMeFaster(s, scene);
      break;
    case 'fuck_me_slower':
      enterFuckMeSlower(s, scene);
      break;
    case 'hurry_up_menu':
      enterHurryUpMenu(s, scene);
      break;
    case 'girl_cum_pre':
      enterGirlCumPre(s, scene);
      break;
    case 'sex_end':
      enterSexEnd(s, scene);
      break;
    case 'speed_select':
      enterSpeedSelect(s, scene);
      break;
    case 'moan_selections':
      enterMoanSelections(s, scene);
      break;
    case 'dirty_talk1':
      enterDirtyTalk1(s, scene);
      break;
    case 'dirty_talk2':
      enterDirtyTalk2(s, scene);
      break;
    case 'take_a_break':
      enterTakeABreak(s, scene);
      break;
    case 'break_ask':
      enterBreakAsk(s, scene);
      break;
    case 'break_time':
      enterBreakTime(s, scene);
      break;
    case 'birth_control_take':
      enterBirthControlTake(s, scene);
      break;
    case 'he_end_break':
      enterHeEndBreak(s, scene);
      break;
    case 'keep_going':
      enterKeepGoing(s, scene);
      break;
    case 'sex_menu':
      enterSexMenu(s, scene);
      break;
    case 'keep_fucking':
      enterKeepFucking(s, scene);
      break;
    case 'keep_fucking_act':
      enterKeepFuckingAct(s, scene);
      break;
    case 'ciga_break':
      enterCigaBreak(s, scene);
      break;
    case 'harden_hand':
      enterHardenHand(s, scene);
      break;
    case 'harden_mouth':
      enterHardenMouth(s, scene);
      break;
    case 'cock_sex_clean':
      enterCockSexClean(s, scene);
      break;
    case 'session_reset':
      enterSessionReset(s, scene);
      break;
    case 'reset':
      enterReset(s, scene);
      break;
    case 'pain_tracking':
      enterPainTracking(s, scene);
      break;
    case 'sleep_sex':
      enterSleepSex(s, scene);
      break;
    case 'sleep_wake_options':
      enterSleepWakeOptions(s, scene);
      break;
    case 'sleep_wake_wtf':
      enterSleepWakeWtf(s, scene);
      break;
    case 'sleep_wtf_forgive':
      enterSleepWtfForgive(s, scene);
      break;
    case 'sleep_wtf_forgive2':
      enterSleepWtfForgive2(s, scene);
      break;
    case 'sleep_cum':
      enterSleepCum(s, scene);
      break;
    case 'wakeup_sex':
      enterWakeupSex(s, scene);
      break;
    case 'wakeup_sex2':
      enterWakeupSex2(s, scene);
      break;
    case 'wakeup_sex_options':
      enterWakeupSexOptions(s, scene);
      break;
    case 'morning_wake_fuck_code':
      enterMorningWakeFuckCode(s, scene);
      break;
    case 'morning_skyrim_joke':
      enterMorningSkyrimJoke(s, scene);
      break;
    case 'morning_wake_wtf':
      enterMorningWakeWtf(s, scene);
      break;
    case 'morning_wtf_forgive':
      enterMorningWtfForgive(s, scene);
      break;
    case 'morning_wtf_forgive2':
      enterMorningWtfForgive2(s, scene);
      break;
    case 'wakeup_sex_continue':
      enterWakeupSexContinue(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const sex_ev_sex: LocationDef = {
  name: 'sex_ev_sex',
  title: '"I need you inside me <i>now</i>," you gasp, desperate to sk',
  region: 'other',
  enter: enter,
};
