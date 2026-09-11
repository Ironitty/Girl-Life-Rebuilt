import { qspCall, qspFunc } from '../_shared/qspBridge';

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
    // TODO-QSP: $sex_ev['bed_room']
  }
  // TODO-QSP: end
  scene.build();
}

function enterSexStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['think_virgin'] === 1  &&  ((s as any).sex_ev ?? 0)?.['virgin_fuck'] === 0  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
    scene.actions([
      { label: 'Ask <<$npcdesc>> to take your virginity', goto: ['sex_ev_virgin', 'start1'] },
    ]);
  } else {
    if (((s as any).sex_ev ?? 0)?.['fuck_count'] === 0  &&  (((s as any).sex_ev ?? 0)?.['position'] !== 'miss'  ||  ((s as any).sex_ev ?? 0)?.['position'] !== 'doggy'  ||  ((s as any).sex_ev ?? 0)?.['position'] !== 'cowgirl')) {
      scene.actions([
        { label: 'Fuck <<$npcdesc>>', handler: (st: GameState) => {
    // TODO-QSP: sex_ev['must_fuck'] = 1
  }, goto: ['sex_ev_sex', 'sex_pre'] },
      ]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1  &&  ((s as any).sex_ev ?? 0)?.['last_cum'] === 'creampie'  &&  (((s as any).sex_ev ?? 0)?.['position'] === 'miss'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'doggy'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl')) {
        scene.actions([
          { label: 'Fuck again', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['must_fuck'] = 1;
    if (((Math.floor(Math.random() * 10) + 1) >= ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]  ||  ((s as any).sex_ev ?? 0)?.['cum_count'] >= 5 + ((s as any).sex_ev ?? 0)?.['extra_cum'])  &&  ((s as any).sex_ev ?? 0)?.['boy_cum'] === 1) {
      qspCall(s, 'sex_ev_after', 'fucked_out');
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] !== '') {
        ((s as any).sex_ev ?? {})['reset_pos'] = ((s as any).sex_ev ?? 0)?.['position'];
        scene.actions([
          { label: 'Stay in the same position', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_sex', 'reset');
    if (((s as any).sex_ev ?? 0)?.['no_condom'] !== 1) {
      qspCall(s, 'sex_ev_condoms', 'condoms');
    } else {
      // TODO-QSP: gt 'sex_ev_<<$sex_ev[''reset_pos'']>>', $sex_ev['pos_speed']
    }
  } },
          { label: 'Change positions', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['force_initiative'] = 1;
    ((s as any).sex_ev ?? {})['change_pos'] = 1;
    ((s as any).sex_ev ?? {})['initiative'] = 'girl';
    if (((s as any).sex_ev ?? 0)?.['no_condom'] !== 1) {
      qspCall(s, 'sex_ev_condoms', 'condoms');
    } else {
      qspCall(s, 'sex_ev_sex', 'position_choose');
    }
  } },
        ]);
      } else {
        if (((s as any).sex_ev ?? 0)?.['no_condom'] !== 1) {
          qspCall(s, 'sex_ev_condoms', 'condoms');
        } else {
          qspCall(s, 'sex_ev_sex', 'position_choose');
        }
      }
    }
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Fuck again', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['fuck_again'] = 1;
    if (((Math.floor(Math.random() * 10) + 1) >= ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]  ||  ((s as any).sex_ev ?? 0)?.['cum_count'] >= 5 + ((s as any).sex_ev ?? 0)?.['extra_cum'])  &&  ((s as any).sex_ev ?? 0)?.['boy_cum'] === 1) {
      qspCall(s, 'sex_ev_after', 'fucked_out');
    } else {
      qspCall(s, 'sex_ev_sex', 'reset');
      ((s as any).sex_ev ?? {})['must_fuck'] = 1;
      if (((s as any).sex_ev ?? 0)?.['no_condom'] === 0) {
        qspCall(s, 'sex_ev_condoms', 'condoms');
      } else {
        qspCall(s, 'sex_ev_sex', 'position_choose');
      }
    }
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSexPre(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $sex_ev['bed_room']
  if (((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
    if (((s as any).sex_ev ?? 0)?.['skip_foreplay'] === 1) {
      scene.text('"I need you inside me <i>now</i>," you gasp, desperate to skip the foreplay and get to the fucking already.');
    } else {
      if (((s as any).sex_ev ?? 0)?.['about_time'] === 1) {
        scene.text('"It\'s about fucking time," you say, scooting backwards onto the bed.');
      } else {
        if (((s as any).sex_ev ?? 0)?.['fuck_now'] === 1) {
          ((s as any).sex_ev ?? {})['must_fuck'] = 1;
          scene.text('"Enough of the foreplay," you say with a lusty growl. "It\'s time to fuck."');
        } else {
          if (((s as any).sex_ev ?? 0)?.['not_today'] === 1) {
            ((s as any).sex_ev ?? {})['not_today'] = 2;
            // TODO-QSP: dynamic text: "I thought you didn't want to fuck today," <<$npcdesc>> says with a wry smile.
            scene.text(`"I thought you didn't want to fuck today," ${((s as any).npcdesc ?? 0)} says with a wry smile.`);
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
        (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 2) + 1);
        ((s as any).sex_ev ?? {})['get_hard'] = 0;
        scene.text('After a minute or so, he starts to stiffen up again.');
        scene.text('<i>Finally...</i>');
      } else {
        // TODO-QSP: dynamic text: "I haven't had enough yet," you say, seductively, pulling <<$npcdesc>> towards y...
        scene.text(`"I haven't had enough yet," you say, seductively, pulling ${((s as any).npcdesc ?? 0)} towards you.`);
      }
    }
  }
  if (((s as any).know_virgin ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    ((s as any).know_virgin ?? {})[String((s as any).npcID ?? 0)] = 2;
    // TODO-QSP: dynamic text: "I thought you said you were saving your virginity," <<$npcdesc>> says, looking ...
    scene.text(`"I thought you said you were saving your virginity," ${((s as any).npcdesc ?? 0)} says, looking a little confused but extremely excited.`);
    scene.text('"I accidentally lost it somewhere," you grin. "Now hurry up and fuck me."');
  }
  ((s as any).sex_ev ?? {})['position_choose'] = 1;
  qspCall(s, 'stat', '');
  if (((s as any).sex_ev ?? 0)?.['no_condom'] !== 0) {
    qspCall(s, 'sex_ev_sex', 'position_choose');
  }
  qspCall(s, 'sex_ev_sex', 'lube_up_bb1');
  qspCall(s, 'sex_ev_condoms', 'condoms');
  // TODO-QSP: end
  scene.build();
}

function enterPositionPicker(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['last_position'] = ((s as any).sex_ev ?? 0)?.['position'];
  if ((((s as any).sex_ev ?? 0)?.['position'] === ''  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'kuni'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'facesit'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'fingering'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'nipple_play'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'handjob'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'blowjob'  ||  ((s as any).sex_ev ?? 0)?.['position'] === '69'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'makeout')  ||  ((s as any).sex_ev ?? 0)?.['new_pos'] === 1) {
    if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'miss'  &&  ((s as any).sex_ev ?? 0)?.['must_fuck_anal'] === 0) {
      ((s as any).sex_ev ?? {})['position'] = 'miss';
    } else {
      if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'doggy'  &&  ((s as any).sex_ev ?? 0)?.['must_fuck_anal'] === 0) {
        ((s as any).sex_ev ?? {})['position'] = 'doggy';
      } else {
        if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'cowgirl'  &&  ((s as any).sex_ev ?? 0)?.['must_fuck_anal'] === 0) {
          ((s as any).sex_ev ?? {})['position'] = 'cowgirl';
        } else {
          if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'anal'  &&  ((s as any).sex_ev ?? 0)?.['must_fuck_vag'] === 0) {
            ((s as any).sex_ev ?? {})['position'] = 'anal';
          } else {
            if (((s as any).npc_no_anal ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).sex_ev ?? 0)?.['must_fuck_vag'] === 1) {
              ((s as any).sex_ev ?? {})['position_rand'] = Math.floor(Math.random() * 3) + 1;
            } else {
              ((s as any).sex_ev ?? {})['position_rand'] = Math.floor(Math.random() * 4) + 1;
            }
            if (((s as any).sex_ev ?? 0)?.['position_rand'] === 1) {
              ((s as any).sex_ev ?? {})['position'] = 'miss';
            } else {
              if (((s as any).sex_ev ?? 0)?.['position_rand'] === 2) {
                ((s as any).sex_ev ?? {})['position'] = 'doggy';
              } else {
                if (((s as any).sex_ev ?? 0)?.['position_rand'] === 3) {
                  ((s as any).sex_ev ?? {})['position'] = 'cowgirl';
                } else {
                  if (((s as any).sex_ev ?? 0)?.['position_rand'] === 4) {
                    ((s as any).sex_ev ?? {})['position'] = 'anal';
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

function enterPositionMenu(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['last_position'] = ((s as any).sex_ev ?? 0)?.['position'];
  qspCall(s, 'sex_ev_miss', 'miss_goto');
  qspCall(s, 'sex_ev_doggy', 'doggy_goto');
  qspCall(s, 'sex_ev_cowgirl', 'cowgirl_goto');
  qspCall(s, 'sex_ev_anal', 'anal_start');
  // TODO-QSP: end
  scene.build();
}

function enterPositionChoose(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['cum_warn'] = 0;
  if (((s as any).stat ?? 0)?.['think_virgin'] === 1  &&  (((s as any).sex_ev ?? 0)?.['fuck_count'] === 0  ||  qspFunc(s, 'pcs_has_attr', 'sex_virgin') === 1)) {
    qspCall(s, 'sex_ev_virgin', 'start_options');
  } else {
    if (((Math.floor(Math.random() * 2) + 0) === 1  &&  ((s as any).sex_ev ?? 0)?.['force_initiative'] !== 2)  ||  ((s as any).sex_ev ?? 0)?.['force_initiative'] === 1) {
      ((s as any).sex_ev ?? {})['initiative'] = 'girl';
      if (((s as any).sex_ev ?? 0)?.['first_insertion'] > 0) {
        ((s as any).sex_ev ?? {})['change_pos'] = 1;
      }
      if (((s as any).sex_ev ?? 0)?.['new_pos'] === 1) {
        ((s as any).sex_ev ?? {})['new_pos'] = 0;
      }
      qspCall(s, 'sex_ev_sex', 'position_menu');
      scene.actions([
        { label: 'Let him choose', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_sex', 'let_him_choose'
  } },
      ]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === ''  ||  ((s as any).sex_ev ?? 0)?.['new_pos'] === 1) {
        ((s as any).sex_ev ?? {})['initiative'] = 'boy';
        scene.actions([{ label: 'Continue', goto: ['sex_ev_sex', 'he_initiate'] }]);
      } else {
        ((s as any).sex_ev ?? {})['new_pos'] = 1;
        ((s as any).sex_ev ?? {})['initiative'] = 'boy';
        qspCall(s, 'sex_ev_sex', 'position_picker');
        // TODO-QSP: gs 'sex_ev_<<$sex_ev[''position'']>>', '<<$sex_ev[''position'']>>_goto'
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterLetHimChoose(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['pos_speed'] === '') {
    scene.text('"Take me however you want," you smile.');
  } else {
    scene.text('"Fuck me again," you smile. "You pick how."');
  }
  ((s as any).sex_ev ?? {})['must_fuck'] = 1;
  ((s as any).sex_ev ?? {})['force_initiative'] = 2;
  ((s as any).sex_ev ?? {})['initiative'] = 'boy';
  if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'miss') {
    scene.actions([{ label: 'Continue', goto: ['sex_ev_miss', 'miss_goto'] }]);
  } else {
    if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'doggy') {
      scene.actions([{ label: 'Continue', goto: ['sex_ev_doggy', 'doggy_goto'] }]);
    } else {
      if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'cowgirl') {
        qspCall(s, 'sex_ev_cowgirl', 'cowgirl_goto');
      } else {
        qspCall(s, 'sex_ev_sex', 'rand_position');
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterHeInitiate(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['new_pos'] === 1) {
    if ((Math.floor(Math.random() * 2) + 0) === 1) {
      if (((s as any).sex_ev ?? 0)?.['no_anal'] > 0  ||  ((s as any).npc_no_anal ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).sex_ev ?? 0)?.['not_anal'] === 1) {
        if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'miss') {
          scene.actions([{ label: 'Continue', goto: ['sex_ev_miss', 'missionary_start'] }]);
        } else {
          if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'doggy') {
            scene.actions([{ label: 'Continue', goto: ['sex_ev_doggy', 'doggy_start'] }]);
          } else {
            if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'cowgirl') {
              scene.actions([{ label: 'Continue', goto: ['sex_ev_cowgirl', 'cowgirl_goto'] }]);
            } else {
              scene.actions([{ label: 'Continue', goto: ['sex_ev_sex', 'rand_position'] }]);
            }
          }
        }
        ((s as any).sex_ev ?? {})['not_anal'] = 0;
      } else {
        if (((s as any).sex_ev ?? 0)?.['no_vaginal'] > 0) {
          if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'anal') {
            scene.actions([{ label: 'Continue', goto: ['sex_ev_anal', 'anal_start'] }]);
          } else {
            scene.actions([{ label: 'Continue', goto: ['sex_ev_sex', 'rand_position'] }]);
          }
        } else {
          if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'miss') {
            scene.actions([{ label: 'Continue', goto: ['sex_ev_miss', 'missionary_start'] }]);
          } else {
            if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'doggy') {
              scene.actions([{ label: 'Continue', goto: ['sex_ev_doggy', 'doggy_start'] }]);
            } else {
              if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'cowgirl') {
                scene.actions([{ label: 'Continue', goto: ['sex_ev_cowgirl', 'cowgirl_goto'] }]);
              } else {
                if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'anal') {
                  scene.actions([{ label: 'Continue', goto: ['sex_ev_anal', 'anal_start'] }]);
                } else {
                  scene.actions([{ label: 'Continue', goto: ['sex_ev_sex', 'rand_position'] }]);
                }
              }
            }
          }
        }
      }
    } else {
      scene.actions([{ label: 'Continue', goto: ['sex_ev_sex', 'rand_position'] }]);
    }
  } else {
    // TODO-QSP: xgt 'sex_ev_<<$sex_ev[''position'']>>', '<<$sex_ev[''position'']>>_goto'
  }
  // TODO-QSP: end
  scene.build();
}

function enterHeChoosePosition(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['initiative'] = 'boy';
  if (((s as any).sex_ev ?? 0)?.['position'] === 'kuni'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'blowjob') {
    ((s as any).sex_ev ?? {})['must_fuck'] = 1;
  }
  // TODO-QSP: dynamic text: "Do whatever you want to me <<$npc_lovername[$npcID]>>," you smile.
  scene.text(`"Do whatever you want to me ${((s as any).npc_lovername ?? 0)?.[String((s as any).npcID ?? 0)]}," you smile.`);
  if (((s as any).sex_ev ?? 0)?.['first_insertion'] > 0) {
    ((s as any).sex_ev ?? {})['change_pos'] = 1;
    ((s as any).sex_ev ?? {})['new_pos'] = 1;
  }
  if (((s as any).stat ?? 0)?.['think_virgin'] === 1  &&  ((s as any).sex_ev ?? 0)?.['deflowered'] === 0  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['fuck_locked'] === 0  &&  ((s as any).sex_ev ?? 0)?.['virgin'] !== 1  ||  ((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      ((s as any).sex_ev ?? {})['position'] = 'miss';
      scene.img('images/shared/sex/foreplay/miss3.jpg');
      // TODO-QSP: dynamic text: <<$npcdesc>> pushes you down onto the bed and puts his hands on your knees, spre...
      scene.text(`${((s as any).npcdesc ?? 0)} pushes you down onto the bed and puts his hands on your knees, spreading your legs apart, and lines his cock up with your pussy.`);
      scene.text('"I wanna fuck your pussy."');
      scene.actions([
        { label: 'Stop him (virgin)', goto: ['sex_ev_virgin', 'lover_wait'] },
        { label: 'Let <<$npcdesc>> take your virginity', goto: ['sex_ev_virgin', 'start3'] },
      ]);
    } else {
      if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'blowjob') {
        qspCall(s, 'sex_ev_foreplay', 'bj_ask');
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>> starts leading a trail of kisses down your stomach towards your pus...
        scene.text(`${((s as any).npcdesc ?? 0)} starts leading a trail of kisses down your stomach towards your pussy.`);
        if (((s as any).kuni_yes ?? 0)?.[String((s as any).npcID ?? 0)] < 1) {
          scene.actions([
            { label: 'Close your legs', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_foreplay', 'kuni_leg_close'
  } },
          ]);
        }
        scene.actions([
          { label: 'Let him eat you out', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_foreplay', 'kuni_leg_spread'
  } },
        ]);
      }
    }
  } },
    ]);
  } else {
    if ((Math.floor(Math.random() * 2) + 0) === 1) {
      if (((s as any).sex_ev ?? 0)?.['fuck_locked'] === 0  &&  ((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'miss') {
        ((s as any).sex_ev ?? {})['fuck_pos'] = 1;
        scene.actions([{ label: 'Continue', goto: ['sex_ev_miss', 'missionary_start'] }]);
      } else {
        if (((s as any).sex_ev ?? 0)?.['fuck_locked'] === 0  &&  ((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'doggy') {
          ((s as any).sex_ev ?? {})['fuck_pos'] = 1;
          scene.actions([{ label: 'Continue', goto: ['sex_ev_doggy', 'doggy_goto'] }]);
        } else {
          if (((s as any).sex_ev ?? 0)?.['fuck_locked'] === 0  &&  ((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'cowgirl') {
            ((s as any).sex_ev ?? {})['fuck_pos'] = 1;
            qspCall(s, 'sex_ev_cowgirl', 'cowgirl_goto');
          } else {
            if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'blowjob'  &&  ((s as any).sex_ev ?? 0)?.['must_fuck'] !== 1) {
              qspCall(s, 'sex_ev_foreplay', 'bj_ask');
            } else {
              if (((s as any).npc_pussyeater ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).sex_ev ?? 0)?.['must_fuck'] !== 1) {
                // TODO-QSP: dynamic text: <<$npcdesc>> starts leading a trail of kisses down your stomach towards your pus...
                scene.text(`${((s as any).npcdesc ?? 0)} starts leading a trail of kisses down your stomach towards your pussy.`);
                if (((s as any).kuni_yes ?? 0)?.[String((s as any).npcID ?? 0)] < 1) {
                  scene.actions([
                    { label: 'Close your legs', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_foreplay', 'kuni_leg_close'
  } },
                  ]);
                }
                scene.actions([
                  { label: 'Let him eat you out', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_foreplay', 'kuni_leg_spread'
  } },
                ]);
              } else {
                if (((s as any).sex_ev ?? 0)?.['condom_setup'] !== 1) {
                  qspCall(s, 'sex_ev_condoms', 'condoms');
                }
                qspCall(s, 'sex_ev_sex', 'rand_position');
              }
            }
          }
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['condom_setup'] !== 1) {
        qspCall(s, 'sex_ev_condoms', 'condoms');
      }
      qspCall(s, 'sex_ev_sex', 'rand_position');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterLubeUpBb1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mc_inventory ?? 0)?.['lubricant'] > 0  &&  ((s as any).ar_vag_lube ?? 0) === 0  &&  ((s as any).sex_ev ?? 0)?.['no_condom'] === 1) {
    scene.actions([
      { label: 'Lube up', handler: (st: GameState) => {
    ((s as any).mc_inventory ?? {})['lubricant'] = (((s as any).mc_inventory ?? {})['lubricant'] ?? 0) - (1);
    (s as any).ar_vag_lube = 1;
    (s as any).vaginal_slip = 8;
    scene.img('images/shared/sex/handjob/hj3.mp4');
    scene.text('"Wait," you say, pausing as you dig into your bag and come up with your tube of lubricant. "Let\'s get you lubed up first."');
    // TODO-QSP: dynamic text: Squeezing out a generous dollop into your palm, you take hold of <<$npcdesc>>'s ...
    scene.text(`Squeezing out a generous dollop into your palm, you take hold of ${((s as any).npcdesc ?? 0)}'s cock and run your hand up and down his ${((s as any).dick_desc ?? 0)} shaft. Within seconds, it's slick and slippery.`);
    scene.text('"I bet you\'ll just slide right into me now," you grin.');
    qspCall(s, 'sex_ev_sex', 'position_choose');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterLubeUpCondom1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mc_inventory ?? 0)?.['lubricant'] > 0  &&  ((s as any).ar_vag_lube ?? 0) === 0  &&  ((s as any).sex_ev ?? 0)?.['condom'] === 1  &&  ((s as any).sex_ev ?? 0)?.['no_condom'] === 0) {
    scene.actions([
      { label: 'Lube up', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['using_pc_condoms'] === 1) {
      qspCall(s, 'sex_ev_stats', 'pc_condom_stats');
    } else {
      qspCall(s, 'sex_ev_stats', 'npc_condom_stats');
    }
    ((s as any).mc_inventory ?? {})['lubricant'] = (((s as any).mc_inventory ?? {})['lubricant'] ?? 0) - (1);
    (s as any).ar_vag_lube = 1;
    (s as any).vaginal_slip = 8;
    scene.img('images/shared/sex/handjob/hj3.mp4');
    // TODO-QSP: dynamic text: "Hang on, I've got something," you say, digging into your bag while <<$npcdesc>>...
    scene.text(`"Hang on, I've got something," you say, digging into your bag while ${((s as any).npcdesc ?? 0)} puts on the condom. Moments later, you come up with a tube of lubricant. "Let's get you lubed up."`);
    // TODO-QSP: dynamic text: Squeezing out a generous dollop into your palm, you take hold of <<$npcdesc>>'s ...
    scene.text(`Squeezing out a generous dollop into your palm, you take hold of ${((s as any).npcdesc ?? 0)}'s cock and run your hand up and down the condom covering his ${((s as any).dick_desc ?? 0)} shaft. Within seconds, the rubbery coat is slick and slippery.`);
    scene.text('"Always lube your condoms," you grin.');
    qspCall(s, 'sex_ev_sex', 'position_choose');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterRandPosition(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['must_fuck'] === 1) {
    if (((s as any).sex_ev ?? 0)?.['no_vag'] === 0  &&  (((s as any).sex_ev ?? 0)?.['no_anal'] > 0  ||  ((s as any).sex_ev ?? 0)?.['not_anal'] > 0  ||  ((s as any).npc_no_anal ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).sex_ev ?? 0)?.['pick_vag_pos'] === 1)) {
      ((s as any).sex_ev ?? {})['position_rand'] = Math.floor(Math.random() * 3) + 1;
      ((s as any).sex_ev ?? {})['pick_vag_pos'] = 0;
    } else {
      if (((s as any).sex_ev ?? 0)?.['no_vag'] > 0  &&  ((s as any).sex_ev ?? 0)?.['no_anal'] === 0) {
        ((s as any).sex_ev ?? {})['position_rand'] = Math.floor(Math.random() * 2) + 4;
      } else {
        ((s as any).sex_ev ?? {})['position_rand'] = Math.floor(Math.random() * 5) + 1;
      }
    }
  } else {
    ((s as any).sex_ev ?? {})['position_rand'] = Math.floor(Math.random() * 6) + 1;
  }
  if (((s as any).stat ?? 0)?.['think_virgin'] === 0  ||  ((s as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
    if (((s as any).sex_ev ?? 0)?.['position_rand'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['sex_ev_miss', 'missionary_start'] }]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position_rand'] === 2) {
        scene.actions([{ label: 'Continue', goto: ['sex_ev_doggy', 'doggy_start'] }]);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position_rand'] === 3) {
          scene.actions([{ label: 'Continue', goto: ['sex_ev_cowgirl', 'cowgirl_goto'] }]);
        } else {
          if (((s as any).sex_ev ?? 0)?.['position_rand'] === 4) {
            scene.actions([{ label: 'Continue', goto: ['sex_ev_anal', 'anal_goto'] }]);
          } else {
            if (((s as any).sex_ev ?? 0)?.['position_rand'] === 5) {
              scene.actions([{ label: 'Continue', goto: ['sex_ev_foreplay', 'bj_ask'] }]);
            } else {
              if (((s as any).sex_ev ?? 0)?.['position_rand'] === 6  &&  (((s as any).sex_ev ?? 0)?.['creampie_count'] < 1  ||  ((s as any).npc_pussyeater ?? 0)?.[String((s as any).npcID ?? 0)] === 1)) {
                // TODO-QSP: dynamic text: <<$npcdesc>> starts leading a trail of kisses down your stomach towards your pus...
                scene.text(`${((s as any).npcdesc ?? 0)} starts leading a trail of kisses down your stomach towards your pussy.`);
                if (((s as any).kuni_yes ?? 0)?.[String((s as any).npcID ?? 0)] < 1) {
                  scene.actions([
                    { label: 'Close your legs', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_foreplay', 'kuni_leg_close'
  } },
                  ]);
                }
                scene.actions([
                  { label: 'Spread your legs', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_foreplay', 'kuni_leg_spread'
  } },
                ]);
              } else {
                if (((s as any).sex_ev ?? 0)?.['no_vag'] > 0) {
                  scene.actions([{ label: 'Continue', goto: ['sex_ev_anal', 'anal_goto'] }]);
                } else {
                  if (((s as any).sex_ev ?? 0)?.['no_anal'] > 0) {
                    scene.actions([{ label: 'Continue', goto: ['sex_ev_miss', 'missionary_start'] }]);
                  } else {
                    if ((Math.floor(Math.random() * 2) + 1) === 1) {
                      scene.actions([{ label: 'Continue', goto: ['sex_ev_miss', 'missionary_start'] }]);
                    } else {
                      scene.actions([{ label: 'Continue', goto: ['sex_ev_anal', 'anal_goto'] }]);
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
      scene.actions([{ label: 'Continue', goto: ['sex_ev_anal', 'anal_goto'] }]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['no_anal'] > 0) {
        scene.actions([{ label: 'Continue', goto: ['sex_ev_miss', 'missionary_start'] }]);
      } else {
        if ((Math.floor(Math.random() * 2) + 1) === 1) {
          scene.actions([{ label: 'Continue', goto: ['sex_ev_miss', 'missionary_start'] }]);
        } else {
          scene.actions([{ label: 'Continue', goto: ['sex_ev_anal', 'anal_goto'] }]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterInsertionArousalCode(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_horny ?? 0) > 80  &&  ((s as any).npc_sexskill ?? 0) >= 60) {
    (s as any).orgasm_buildup = ((s as any).orgasm_buildup ?? 0) + (((s as any).npc_sexskill ?? 0));
  }
  if (((s as any).sex_ev ?? 0)?.['pain_init'] === 0) {
    ((s as any).sex_ev ?? {})['pain_init'] = 1;
    ((s as any).sex_ev ?? {})['vaginal_pain'] = ((s as any).pain ?? 0)?.['vagina'];
    ((s as any).sex_ev ?? {})['cervix_pain'] = ((s as any).pain ?? 0)?.['cervix'];
    ((s as any).sex_ev ?? {})['asshole_pain'] = ((s as any).pain ?? 0)?.['asshole'];
  }
  ((s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
  if (((s as any).sex_ev ?? 0)?.['prostitution_flag'] !== '') {
    if (((((s as any).sex_ev ?? 0)?.['position']).slice((1)-1, ((1)-1)+(4))) === 'anal') {
      // TODO-QSP: gs 'arousal', 'anal', 1, 'no_orgasm_msg', $sex_ev['prostitution_flag']
    } else {
      if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
        ((s as any).sex_ev ?? {})['deflowered'] = 1;
      }
      // TODO-QSP: gs 'arousal', 'vaginal', 1, 'no_orgasm_msg', $sex_ev['prostitution_flag']
    }
  } else {
    if (((((s as any).sex_ev ?? 0)?.['position']).slice((1)-1, ((1)-1)+(4))) === 'anal') {
      qspCall(s, 'arousal', 'anal', 1, 'no_orgasm_msg');
    } else {
      if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
        ((s as any).sex_ev ?? {})['deflowered'] = 1;
      }
      qspCall(s, 'arousal', 'vaginal', 1, 'no_orgasm_msg');
    }
  }
  ((s as any).sex_ev ?? {})['new_pos'] = 0;
  // TODO-QSP: end
  scene.build();
}

function enterFuckArousalCode(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['initiative'] !== '') {
    ((s as any).sex_ev ?? {})['initiative'] = '';
  }
  ((s as any).sex_ev ?? {})['new_pos'] = 0;
  ((s as any).sex_ev ?? {})['cock_inserted'] = 1;
  ((s as any).sex_ev ?? {})['fuck'] = 1;
  ((s as any).sex_ev ?? {})['fuck_time_temp'] = Math.floor(Math.random() * 4) + 1;
  ((s as any).sex_ev ?? {})['fuck_time_total'] = (((s as any).sex_ev ?? {})['fuck_time_total'] ?? 0) + (((s as any).sex_ev ?? 0)?.['fuck_time_temp']);
  ((s as any).sex_ev ?? {})['npc_stam'] = (((s as any).sex_ev ?? {})['npc_stam'] ?? 0) - (((s as any).sex_ev ?? {})?.['fuck_time_temp'] * 10);
  if (((s as any).sex_ev ?? 0)?.['fav_npc_position'] === 0) {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss'  &&  ((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'miss') {
      ((s as any).sex_ev ?? {})['fav_npc_position'] = 1;
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy'  &&  ((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'doggy') {
        ((s as any).sex_ev ?? {})['fav_npc_position'] = 1;
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl'  &&  ((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'cowgirl') {
          ((s as any).sex_ev ?? {})['fav_npc_position'] = 1;
        } else {
          if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'anal') {
            ((s as any).sex_ev ?? {})['fav_npc_position'] = 1;
          }
        }
      }
    }
  }
  if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'enjoy') {
    (s as any).orgasm_buildup = ((s as any).orgasm_buildup ?? 0) + (((s as any).npc_sexskill ?? 0)?.[String((s as any).npcID ?? 0)]);
  }
  ((s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
  if (((s as any).sex_ev ?? 0)?.['prostitution_flag'] !== '') {
    if (((((s as any).sex_ev ?? 0)?.['position']).slice((1)-1, ((1)-1)+(4))) === 'anal') {
      // TODO-QSP: gs 'arousal', 'anal', sex_ev['fuck_time_temp'], 'no_orgasm_msg', $sex_ev['prostitution_flag']
      ((s as any).sex_ev ?? {})['anal_dirt'] = 1;
      if (((s as any).sex_ev ?? 0)?.['anal_check'] < ((s as any).sex_ev ?? 0)?.['cum_count'] + 1) {
        ((s as any).sex_ev ?? {})['anal_check'] = ((s as any).sex_ev ?? {})?.['cum_count'] + 1;
        ((s as any).sex_ev ?? {})['anal_count'] = (((s as any).sex_ev ?? {})['anal_count'] ?? 0) + (1);
      }
    } else {
      if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
        ((s as any).sex_ev ?? {})['deflowered'] = 1;
      }
      // TODO-QSP: gs 'arousal', 'vaginal', sex_ev['fuck_time_temp'], 'no_orgasm_msg', $sex_ev['prostitution_flag']
      if (((s as any).sex_ev ?? 0)?.['fuck_check'] < ((s as any).sex_ev ?? 0)?.['cum_count'] + 1) {
        ((s as any).sex_ev ?? {})['fuck_check'] = ((s as any).sex_ev ?? {})?.['cum_count'] + 1;
        ((s as any).sex_ev ?? {})['fuck_count'] = (((s as any).sex_ev ?? {})['fuck_count'] ?? 0) + (1);
      }
      if (((s as any).sex_ev ?? 0)?.['anal_dirt'] === 1) {
        ((s as any).sex_ev ?? {})['ass_to_pussy_allowed'] = 1;
      }
    }
  } else {
    if (((((s as any).sex_ev ?? 0)?.['position']).slice((1)-1, ((1)-1)+(4))) === 'anal') {
      // TODO-QSP: gs 'arousal', 'anal', sex_ev['fuck_time_temp'], 'no_orgasm_msg'
      ((s as any).sex_ev ?? {})['anal_dirt'] = 1;
      if (((s as any).sex_ev ?? 0)?.['anal_check'] < ((s as any).sex_ev ?? 0)?.['cum_count'] + 1) {
        ((s as any).sex_ev ?? {})['anal_check'] = ((s as any).sex_ev ?? {})?.['cum_count'] + 1;
        ((s as any).sex_ev ?? {})['anal_count'] = (((s as any).sex_ev ?? {})['anal_count'] ?? 0) + (1);
      }
    } else {
      if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
        ((s as any).sex_ev ?? {})['deflowered'] = 1;
      }
      // TODO-QSP: gs 'arousal', 'vaginal', sex_ev['fuck_time_temp'], 'no_orgasm_msg'
      if (((s as any).sex_ev ?? 0)?.['fuck_check'] < ((s as any).sex_ev ?? 0)?.['cum_count'] + 1) {
        ((s as any).sex_ev ?? {})['fuck_check'] = ((s as any).sex_ev ?? {})?.['cum_count'] + 1;
        ((s as any).sex_ev ?? {})['fuck_count'] = (((s as any).sex_ev ?? {})['fuck_count'] ?? 0) + (1);
      }
      if (((s as any).sex_ev ?? 0)?.['anal_dirt'] === 1) {
        ((s as any).sex_ev ?? {})['ass_to_pussy_allowed'] = 1;
      }
    }
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterFuckRoughArousalCode(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['new_pos'] = 0;
  if (((s as any).sex_ev ?? 0)?.['initiative'] !== '') {
    ((s as any).sex_ev ?? {})['initiative'] = '';
  }
  ((s as any).sex_ev ?? {})['fuck_time_temp'] = Math.floor(Math.random() * 4) + 1;
  ((s as any).sex_ev ?? {})['fuck_time_total'] = (((s as any).sex_ev ?? {})['fuck_time_total'] ?? 0) + (((s as any).sex_ev ?? 0)?.['fuck_time_temp']);
  ((s as any).sex_ev ?? {})['npc_stam'] = (((s as any).sex_ev ?? {})['npc_stam'] ?? 0) - (((s as any).sex_ev ?? {})?.['fuck_time_temp'] * 20);
  qspCall(s, 'sweat', 'add', 1);
  if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'enjoy') {
    (s as any).orgasm_buildup = ((s as any).orgasm_buildup ?? 0) + (((s as any).npc_sexskill ?? 0)?.[String((s as any).npcID ?? 0)]);
  }
  ((s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
  if (((((s as any).sex_ev ?? 0)?.['position']).slice((1)-1, ((1)-1)+(4))) === 'anal') {
    // TODO-QSP: gs 'arousal', 'anal', sex_ev['fuck_time_temp'], 'no_orgasm_msg', $sex_ev['prostitution_flag'], 'roug...
    ((s as any).sex_ev ?? {})['anal_dirt'] = 1;
    if (((s as any).sex_ev ?? 0)?.['anal_check'] < ((s as any).sex_ev ?? 0)?.['cum_count'] + 1) {
      ((s as any).sex_ev ?? {})['anal_check'] = ((s as any).sex_ev ?? 0)?.['cum_count'];
      ((s as any).sex_ev ?? {})['anal_count'] = (((s as any).sex_ev ?? {})['anal_count'] ?? 0) + (1);
    }
  } else {
    // TODO-QSP: gs 'arousal', 'vaginal', sex_ev['fuck_time_temp'], 'no_orgasm_msg', $sex_ev['prostitution_flag'], 'r...
    if (((s as any).sex_ev ?? 0)?.['fuck_check'] < ((s as any).sex_ev ?? 0)?.['cum_count'] + 1) {
      ((s as any).sex_ev ?? {})['fuck_check'] = ((s as any).sex_ev ?? 0)?.['cum_count'];
      ((s as any).sex_ev ?? {})['fuck_count'] = (((s as any).sex_ev ?? {})['fuck_count'] ?? 0) + (1);
    }
    if (((s as any).sex_ev ?? 0)?.['anal_dirt'] === 1) {
      ((s as any).sex_ev ?? {})['ass_to_pussy_allowed'] = 1;
    }
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterFuckRoughNoCumCode(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['new_pos'] = 0;
  if (((s as any).sex_ev ?? 0)?.['initiative'] !== '') {
    ((s as any).sex_ev ?? {})['initiative'] = '';
  }
  ((s as any).sex_ev ?? {})['fuck_time_temp'] = Math.floor(Math.random() * 4) + 1;
  ((s as any).sex_ev ?? {})['fuck_time_total'] = (((s as any).sex_ev ?? {})['fuck_time_total'] ?? 0) + (((s as any).sex_ev ?? 0)?.['fuck_time_temp']);
  ((s as any).sex_ev ?? {})['npc_stam'] = (((s as any).sex_ev ?? {})['npc_stam'] ?? 0) - (((s as any).sex_ev ?? {})?.['fuck_time_temp'] * 20);
  qspCall(s, 'sweat', 'add', 1);
  ((s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
  if (((((s as any).sex_ev ?? 0)?.['position']).slice((1)-1, ((1)-1)+(4))) === 'anal') {
    // TODO-QSP: gs 'arousal', 'anal', sex_ev['fuck_time_temp'], 'no_orgasm_msg', $sex_ev['prostitution_flag'], 'roug...
    ((s as any).sex_ev ?? {})['anal_dirt'] = 1;
    if (((s as any).sex_ev ?? 0)?.['anal_check'] < ((s as any).sex_ev ?? 0)?.['cum_count'] + 1) {
      ((s as any).sex_ev ?? {})['anal_check'] = ((s as any).sex_ev ?? 0)?.['cum_count'];
      ((s as any).sex_ev ?? {})['anal_count'] = (((s as any).sex_ev ?? {})['anal_count'] ?? 0) + (1);
    }
  } else {
    // TODO-QSP: gs 'arousal', 'vaginal', sex_ev['fuck_time_temp'], 'no_orgasm_msg', $sex_ev['prostitution_flag'], 'r...
    if (((s as any).sex_ev ?? 0)?.['fuck_check'] < ((s as any).sex_ev ?? 0)?.['cum_count'] + 1) {
      ((s as any).sex_ev ?? {})['fuck_check'] = ((s as any).sex_ev ?? 0)?.['cum_count'];
      ((s as any).sex_ev ?? {})['fuck_count'] = (((s as any).sex_ev ?? {})['fuck_count'] ?? 0) + (1);
    }
    if (((s as any).sex_ev ?? 0)?.['anal_dirt'] === 1) {
      ((s as any).sex_ev ?? {})['ass_to_pussy_allowed'] = 1;
    }
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterFuckNoCumCode(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['new_pos'] = 0;
  if (((s as any).sex_ev ?? 0)?.['initiative'] !== '') {
    ((s as any).sex_ev ?? {})['initiative'] = '';
  }
  ((s as any).sex_ev ?? {})['fuck_time_temp'] = Math.floor(Math.random() * 4) + 1;
  ((s as any).sex_ev ?? {})['fuck_time_total'] = (((s as any).sex_ev ?? {})['fuck_time_total'] ?? 0) + (((s as any).sex_ev ?? 0)?.['fuck_time_temp']);
  ((s as any).sex_ev ?? {})['npc_stam'] = (((s as any).sex_ev ?? {})['npc_stam'] ?? 0) - (((s as any).sex_ev ?? {})?.['fuck_time_temp'] * 10);
  ((s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
  if (((((s as any).sex_ev ?? 0)?.['position']).slice((1)-1, ((1)-1)+(4))) === 'anal') {
    // TODO-QSP: gs 'arousal', 'anal', sex_ev['fuck_time_temp'], 'no_orgasm_msg', $sex_ev['prostitution_flag']
    ((s as any).sex_ev ?? {})['anal_dirt'] = 1;
    if (((s as any).sex_ev ?? 0)?.['anal_check'] < ((s as any).sex_ev ?? 0)?.['cum_count'] + 1) {
      ((s as any).sex_ev ?? {})['anal_check'] = ((s as any).sex_ev ?? 0)?.['cum_count'];
      ((s as any).sex_ev ?? {})['anal_count'] = (((s as any).sex_ev ?? {})['anal_count'] ?? 0) + (1);
    }
  } else {
    // TODO-QSP: gs 'arousal', 'vaginal', sex_ev['fuck_time_temp'], 'no_orgasm_msg', $sex_ev['prostitution_flag']
    if (((s as any).sex_ev ?? 0)?.['fuck_check'] < ((s as any).sex_ev ?? 0)?.['cum_count'] + 1) {
      ((s as any).sex_ev ?? {})['fuck_check'] = ((s as any).sex_ev ?? 0)?.['cum_count'];
      ((s as any).sex_ev ?? {})['fuck_count'] = (((s as any).sex_ev ?? {})['fuck_count'] ?? 0) + (1);
    }
    if (((s as any).sex_ev ?? 0)?.['anal_dirt'] === 1) {
      ((s as any).sex_ev ?? {})['ass_to_pussy_allowed'] = 1;
    }
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterFuckArousalCreampieCumCode(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['fuck_time_temp'] = 1;
  ((s as any).sex_ev ?? {})['fuck_time_total'] = (((s as any).sex_ev ?? {})['fuck_time_total'] ?? 0) + (1);
  if (((s as any).sex_ev ?? 0)?.['creampie_ask'] === 1) {
    if (((((s as any).sex_ev ?? 0)?.['position']).slice((1)-1, ((1)-1)+(4))) === 'anal') {
      ((s as any).sex_ev ?? {})['ask_creampie_count'] = (((s as any).sex_ev ?? {})['ask_creampie_count'] ?? 0) + (1);
    } else {
      ((s as any).sex_ev ?? {})['ask_anal_creampie_count'] = (((s as any).sex_ev ?? {})['ask_anal_creampie_count'] ?? 0) + (1);
    }
  }
  if (((s as any).sex_ev ?? 0)?.['position'] === 'miss'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'doggy'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
    // TODO-QSP: gs 'arousal', 'vaginal', sex_ev['fuck_time_temp'], 'no_orgasm_msg', $sex_ev['prostitution_flag']
  } else {
    // TODO-QSP: gs 'arousal', 'anal', sex_ev['fuck_time_temp'], 'no_orgasm_msg', $sex_ev['prostitution_flag']
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterGirlOrgasmChangePosition(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['position'] === ((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)]  ||  (Math.floor(Math.random() * 2) + 1) === 1) {
    // TODO-QSP: gs 'sex_ev_<<$sex_ev[''position'']>>', '<<$sex_ev[''position'']>>_girl_orgasm_continue'
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
  // TODO-QSP: end
  scene.build();
}

function enterFuckContinue(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['cock_inserted'] = 1;
  ((s as any).sex_ev ?? {})['fuck'] = 1;
  if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
    ((s as any).sex_ev ?? {})['miss_fuck'] = 1;
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
      ((s as any).sex_ev ?? {})['doggy_fuck'] = 1;
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
        ((s as any).sex_ev ?? {})['cowgirl_fuck'] = 1;
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'anal') {
          ((s as any).sex_ev ?? {})['anal_fuck'] = 1;
        }
      }
    }
  }
  if (((s as any).sex_ev ?? 0)?.['girl_orgasm'] === 1) {
    ((s as any).sex_ev ?? {})['girl_orgasm'] = 0;
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
    // TODO-QSP: gt 'sex_ev_<<$sex_ev[''position'']>>', '<<$sex_ev[''position...
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
    // TODO-QSP: gt 'sex_ev_<<$sex_ev[''position'']>>', '<<$sex_ev[''position...
  } },
      ]);
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['bored'] === 1) {
      scene.actions([
        { label: 'Keep going', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_<<$sex_ev[''position'']>>', '<<$sex_ev[''pos_spee...
  } },
      ]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'painful') {
        if (((s as any).sex_ev ?? 0)?.['speed'] === 3) {
          scene.actions([
            { label: 'Sob', handler: (st: GameState) => {
    // TODO-QSP: sex_ev['fuck_pain'] = 4
    // TODO-QSP: gt 'sex_ev_<<$sex_ev[''position'']>>', '<<$sex_ev[''position...
  } },
            { label: 'Try to hold back tears', handler: (st: GameState) => {
    // TODO-QSP: sex_ev['fuck_pain'] = 3
    // TODO-QSP: gt 'sex_ev_<<$sex_ev[''position'']>>', '<<$sex_ev[''position...
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Hold back tears', handler: (st: GameState) => {
    // TODO-QSP: sex_ev['fuck_pain'] = 3
    // TODO-QSP: gt 'sex_ev_<<$sex_ev[''position'']>>', '<<$sex_ev[''position...
  } },
          ]);
        }
        if (((s as any).npc_sexskill ?? 0)?.[String((s as any).npcID ?? 0)] > 25) {
          scene.actions([
            { label: 'The pain is fading', handler: (st: GameState) => {
    // TODO-QSP: sex_ev['fuck_pain'] = 1
    // TODO-QSP: gt 'sex_ev_<<$sex_ev[''position'']>>', '<<$sex_ev[''position...
  } },
          ]);
        }
        scene.actions([
          { label: 'Persevere', handler: (st: GameState) => {
    // TODO-QSP: sex_ev['fuck_pain'] = 2
    // TODO-QSP: gt 'sex_ev_<<$sex_ev[''position'']>>', '<<$sex_ev[''position...
  } },
        ]);
      } else {
        if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'unsatisfying') {
          if (((s as any).npc_sexskill ?? 0)?.[String((s as any).npcID ?? 0)] > 50) {
            scene.actions([
              { label: 'Starting to feel good', handler: (st: GameState) => {
    // TODO-QSP: sex_ev['fuck_pain'] = -1
    // TODO-QSP: $orgasm_or = ''
    // TODO-QSP: gt 'sex_ev_<<$sex_ev[''position'']>>', '<<$sex_ev[''position...
  } },
            ]);
          }
          if (((s as any).sex_ev ?? 0)?.['speed'] !== 3  &&  ((s as any).sex_ev ?? 0)?.['unique_npc'] === 1) {
            scene.actions([
              { label: 'Talk while fucking', handler: (st: GameState) => {
    if (((((s as any).npcID ?? 0)).slice((1)-1, ((1)-1)+(1))) === 'A') {
      scene.actions([{ label: 'Continue', goto: ['sex_ev_sex_talk_<<$npcID>>', 'talk_menu'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['sex_ev_sex_talk_npc', 'talk_menu'] }]);
    }
  } },
            ]);
          }
          scene.actions([
            { label: 'Just keep fucking', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_<<$sex_ev[''position'']>>', '<<$sex_ev[''position...
  } },
            { label: 'Fake some moans', handler: (st: GameState) => {
    // TODO-QSP: sex_ev['enthusiasm'] += 1
    // TODO-QSP: sex_ev['moan'] = 2
    // TODO-QSP: gt 'sex_ev_<<$sex_ev[''position'']>>', '<<$sex_ev[''position...
  } },
            { label: 'Dirty talk...', handler: (st: GameState) => {
    // TODO-QSP: sex_ev['enthusiasm'] += 2
    qspCall(st, 'sex_ev_sex', 'dirty_talk1');
  } },
          ]);
        } else {
          ((s as any).sex_ev ?? {})['moan'] = 0;
          ((s as any).sex_ev ?? {})['dirty_talk_count'] = 1;
          // TODO-QSP: gt 'sex_ev_<<$sex_ev[''position'']>>', '<<$sex_ev[''position'']>><<sex_ev[''speed'']>>.2'
          // TODO-QSP: end}
          if (((s as any).sex_ev ?? 0)?.['speed'] !== 3  &&  ((s as any).sex_ev ?? 0)?.['unique_npc'] === 1) {
            scene.actions([
              { label: 'Talk while fucking', handler: (st: GameState) => {
    if (((((s as any).npcID ?? 0)).slice((1)-1, ((1)-1)+(1))) === 'A') {
      scene.actions([{ label: 'Continue', goto: ['sex_ev_sex_talk_<<$npcID>>', 'during_sex_talk_menu'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['sex_ev_sex_talk_npc', 'during_sex_talk_menu'] }]);
    }
  } },
            ]);
          }
          scene.actions([
            { label: 'Focus on the sensations', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['dirty_talk'] = ''
    // TODO-QSP: sex_ev['moan'] = 0
    // TODO-QSP: gt 'sex_ev_<<$sex_ev[''position'']>>', '<<$sex_ev[''position...
  } },
            { label: 'Moan softly', handler: (st: GameState) => {
    // TODO-QSP: sex_ev['enthusiasm'] += 1
    // TODO-QSP: $sex_ev['dirty_talk'] = ''
    // TODO-QSP: sex_ev['moan'] = 1
    // TODO-QSP: gt 'sex_ev_<<$sex_ev[''position'']>>', '<<$sex_ev[''position...
  } },
            { label: 'Moan loudly', handler: (st: GameState) => {
    // TODO-QSP: sex_ev['enthusiasm'] += 2
    // TODO-QSP: $sex_ev['dirty_talk'] = ''
    // TODO-QSP: sex_ev['moan'] = 2
    // TODO-QSP: gt 'sex_ev_<<$sex_ev[''position'']>>', '<<$sex_ev[''position...
  } },
            { label: 'Dirty talk...', handler: (st: GameState) => {
    // TODO-QSP: sex_ev['enthusiasm'] += 2
    // TODO-QSP: xgt 'sex_ev_sex', 'dirty_talk1'
  } },
          ]);
        }
      }
    }
    // TODO-QSP: end}
    if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
      scene.actions([
        { label: 'Change pace', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_cowgirl', 'cowgirl_change_pace'
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Ask to change pace', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_sex', 'change_pace'
  } },
      ]);
    }
    if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
      if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] !== 'enjoy') {
        scene.actions([
          { label: 'Take charge', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['cowgirl_dom'] = 1;
    scene.img('images/shared/sex/vag/cowgirl/slow3.mp4');
    ((s as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    scene.text('<i>Ugh, that\'s it!</i> you think to yourself, unable to take it any longer.');
    // TODO-QSP: dynamic text: You shove <<$npc_usedname[$npcID]>>'s head down onto the pillow, causing him to ...
    scene.text(`You shove ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}'s head down onto the pillow, causing him to grunt, his whole body freezing in surprise.`);
    scene.text('"You\'re not doing a good enough job," you smile wickedly. "Let <i>me</i> show you."');
    scene.text('Taking advantage of the moment, you set your own pace, rubbing your cunt up and down his shaft, using it as your own personal sex toy. Like a cat on a scratching post.');
    scene.text('"Just relax," you coo and you hear him moan in agreement. "Sit back and let\'s <i>both</i> enjoy this..."');
  }, goto: ['sex_ev_cowgirl', 'cowgirl_menu2'] },
        ]);
      }
      if (((s as any).sex_ev ?? 0)?.['speed'] <= 2) {
        scene.actions([
          { label: 'Kiss <<$npcdesc>>', goto: ['sex_ev_cowgirl', 'cowgirl_kiss'] },
        ]);
      }
    }
    if (((s as any).sex_ev ?? 0)?.['stop_orgasm'] === 0) {
      scene.actions([
        { label: 'Prevent orgasm', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['stop_orgasm'] = 1;
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Release orgasm', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['stop_orgasm'] = 0;
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
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
    // TODO-QSP: sex_ev['bored'] = 1
    // TODO-QSP: sex_ev['moan'] = 3
    // TODO-QSP: $orgasm_or = 'no'
    // TODO-QSP: gt 'sex_ev_<<$sex_ev[''position'']>>', '<<$sex_ev[''position...
  } },
      { label: 'Try to make <<$npcdesc>> come', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['cum_speed_up'] = 1;
    ((s as any).sex_ev ?? {})['extra_stim'] = (((s as any).sex_ev ?? {})['extra_stim'] ?? 0) + (1);
    // TODO-QSP: gt 'sex_ev_<<$sex_ev[''position'']>>', '<<$sex_ev[''position'']>><<sex_ev[''speed'']>>.2'
  } },
      { label: 'Change position', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_sex', 'position_change'
  } },
      { label: 'Ask <<$npcdesc>> to hurry up and finish', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['hurry_up'] = 1;
    ((s as any).sex_ev ?? {})['boy_cum'] = 1;
  }, goto: ['sex_ev_sex', 'hurry_up_menu'] },
    ]);
  }
  if ((Math.floor(Math.random() * 2) + 1) === 1  &&  ((s as any).sex_ev ?? 0)?.['talk_topic'] !== ''  &&  (((s as any).sex_ev ?? 0)?.['cycle_limit'] + ((s as any).sex_ev ?? 0)?.['extra_stim']) > ((s as any).sex_ev ?? 0)?.['sex_stamina'] - (Math.floor(Math.random() * 2) + 1)  &&  ((s as any).sex_ev ?? 0)?.['cum_limit_warning'] === 0) {
    ((s as any).sex_ev ?? {})['cum_limit_warning'] = 1;
    if (((s as any).npc_love_style ?? 0)?.[String((s as any).npcID ?? 0)] === 'gentle') {
      if ((Math.floor(Math.random() * 2) + 1) === 1) {
        // TODO-QSP: dynamic text: "<<$pcs_Upetname[$npcID]>>!" <<$npcdesc>> pants. "I can't-! Can't-! Can't hold i...
        scene.text(`"${((s as any).pcs_Upetname ?? 0)?.[String((s as any).npcID ?? 0)]}!" ${((s as any).npcdesc ?? 0)} pants. "I can't-! Can't-! Can't hold it-! Much longer-!"`);
      } else {
        // TODO-QSP: dynamic text: "<<$pcs_Upetname[$npcID]>>! Your pussy-!" <<$npcdesc>> gasps. "It's so good! I d...
        scene.text(`"${((s as any).pcs_Upetname ?? 0)?.[String((s as any).npcID ?? 0)]}! Your pussy-!" ${((s as any).npcdesc ?? 0)} gasps. "It's so good! I don't know how much longer I can last!"`);
      }
    } else {
      if (((s as any).npc_love_style ?? 0)?.[String((s as any).npcID ?? 0)] === 'dirty') {
        if ((Math.floor(Math.random() * 2) + 1) === 1) {
          // TODO-QSP: dynamic text: "Fuck! Your pussy is so tight, <<$pcs_Lpetname[$npcID]>>!" <<$npcdesc>> pants. "...
          scene.text(`"Fuck! Your pussy is so tight, ${((s as any).pcs_Lpetname ?? 0)?.[String((s as any).npcID ?? 0)]}!" ${((s as any).npcdesc ?? 0)} pants. "I can't last much longer like this!"`);
        } else {
          // TODO-QSP: dynamic text: "<<$pcs_Upetname[$npcID]>>, your sloppy pussy is milking me dry," <<$npcdesc>> p...
          scene.text(`"${((s as any).pcs_Upetname ?? 0)?.[String((s as any).npcID ?? 0)]}, your sloppy pussy is milking me dry," ${((s as any).npcdesc ?? 0)} pants. "Fuck, I think I'm gonna cum soon."`);
        }
      } else {
        if (((s as any).npc_love_style ?? 0)?.[String((s as any).npcID ?? 0)] === 'sensual') {
          if ((Math.floor(Math.random() * 2) + 1) === 1) {
            // TODO-QSP: dynamic text: "You feel so good, <<$pcs_Upetname[$npcID]>>," <<$npcdesc>> moans. "I'm not goin...
            scene.text(`"You feel so good, ${((s as any).pcs_Upetname ?? 0)?.[String((s as any).npcID ?? 0)]}," ${((s as any).npcdesc ?? 0)} moans. "I'm not going to last at this rate..."`);
          } else {
            // TODO-QSP: dynamic text: "<<$pcs_Upetname[$npcID]>>! Your pussy-!" <<$npcdesc>> gasps. "It's so good! I d...
            scene.text(`"${((s as any).pcs_Upetname ?? 0)?.[String((s as any).npcID ?? 0)]}! Your pussy-!" ${((s as any).npcdesc ?? 0)} gasps. "It's so good! I don't know how much longer I can last!"`);
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPositionChange(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['speed'] === 0) {
    ((s as any).sex_ev ?? {})['speed'] = Math.floor(Math.random() * 3) + 1;
  }
  ((s as any).sex_ev ?? {})['change_pos'] = 1;
  if (((s as any).sex_ev ?? 0)?.['position'] !== 'miss') {
    scene.actions([
      { label: 'Switch to missionary', goto: ['sex_ev_miss', 'miss_switch'] },
    ]);
  } else {
    scene.actions([
      { label: 'Stay in missionary', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_miss', 'miss<<sex_ev[''speed'']>>.2'
  } },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['position'] !== 'doggy') {
    scene.actions([
      { label: 'Switch to doggystyle', goto: ['sex_ev_doggy', 'doggy_switch'] },
    ]);
  } else {
    scene.actions([
      { label: 'Stay in doggystyle', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_doggy', 'doggy<<sex_ev[''speed'']>>.2'
  } },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['position'] !== 'cowgirl') {
    scene.actions([
      { label: 'Switch to cowgirl', goto: ['sex_ev_cowgirl', 'cowgirl_switch2'] },
    ]);
  } else {
    scene.actions([
      { label: 'Stay in cowgirl', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_cowgirl', 'cowgirl<<sex_ev[''speed'']>>.2'
  } },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['position'] !== 'anal') {
    if (((s as any).pcs_ass ?? 0) === 0  &&  ((s as any).sex_ev ?? 0)?.['anal_count'] === 0) {
      scene.actions([
        { label: 'Try anal (doggy)', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_anal', 'anal_present_ass'
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Switch to anal', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_anal', 'anal_doggy_switch'
  } },
      ]);
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['speed'] === 0) {
      ((s as any).sex_ev ?? {})['speed'] = Math.floor(Math.random() * 3) + 1;
    }
    scene.actions([
      { label: 'Keep taking it up the ass', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_anal', 'anal<<sex_ev[''speed'']>>.2'
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Switch to blowjob', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['blowjob_switch'] = 1;
    scene.actions([
      { label: 'Pussy needs a break', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/3.jpg');
    } else {
      qspCall(s, 'sex_ev_sex', 'inserted_img');
    }
    // TODO-QSP: dynamic text: "Think I could blow you for a little while?" you ask, stopping <<$npcdesc>> mid-...
    scene.text(`"Think I could blow you for a little while?" you ask, stopping ${((s as any).npcdesc ?? 0)} mid-thrust. "My pussy could use quick break."`);
    if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  (Math.floor(Math.random() * 3) + 1) < 3  &&  ((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] !== 'blowjob') {
      // TODO-QSP: dynamic text: "Come on, can't you just bear with it a little longer?" <<$npcdesc>> whines. "I'...
      scene.text(`"Come on, can't you just bear with it a little longer?" ${((s as any).npcdesc ?? 0)} whines. "I'm really enjoying this."`);
      if (((s as any).dick_desc ?? 0) === 'thick'  ||  ((s as any).dick_desc ?? 0) === 'long'  ||  ((s as any).dick_desc ?? 0) === 'huge'  ||  ((s as any).dick_desc ?? 0) === 'enormous'  ||  ((s as any).dick_desc ?? 0) === 'lengthy'  ||  ((s as any).dick_desc ?? 0) === 'gigantic'  ||  ((s as any).dick_desc ?? 0) === 'monstrous') {
        scene.actions([
          { label: 'Dick too big', handler: (st: GameState) => {
    scene.text('"You\'re dick is just too big for me," you moan. "My vagina is gonna have bruises tomorrow if we keep going like this. I just need a break. Please?"');
    // TODO-QSP: dynamic text: "Ugh, fiiiine," <<$npcdesc>> moans begrudgingly.
    scene.text(`"Ugh, fiiiine," ${((s as any).npcdesc ?? 0)} moans begrudgingly.`);
    scene.actions([
      { label: 'Blow him', goto: ['sex_ev_foreplay', 'bj_dom2'] },
    ]);
  } },
          { label: 'Dick too big (appeal to his pride)', handler: (st: GameState) => {
    scene.text('"It\'s cause your dick is so big," you say with a sultry smile. "I just can\'t handle your <i>big <b>huge</b></i> cock. Just a quick break and then you can get right back to destroying my pussy."');
    // TODO-QSP: dynamic text: "Well," <<$npcdesc>> says haughtily. "I guess if you can't handle it..."
    scene.text(`"Well," ${((s as any).npcdesc ?? 0)} says haughtily. "I guess if you can't handle it..."`);
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
    // TODO-QSP: dynamic text: "I guess we can keep going for now," you sigh reluctantly and get back to fuckin...
    scene.text(`"I guess we can keep going for now," you sigh reluctantly and get back to fucking ${((s as any).npcdesc ?? 0)}.`);
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
      { label: 'Generously', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "If you're really enjoying it that much..." you trail off with a smile and resum...
    scene.text(`"If you're really enjoying it that much..." you trail off with a smile and resume fucking ${((s as any).npcdesc ?? 0)}.`);
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
    ]);
  } },
        { label: 'Insist', handler: (st: GameState) => {
    scene.text('"Seriously," you insist. "My pussy can\'t take much more of this if we keep it up. Just a quick break and then we\'ll get right back to sex, okay?"');
    // TODO-QSP: dynamic text: "Ugh, fiiiine," <<$npcdesc>> moans begrudgingly.
    scene.text(`"Ugh, fiiiine," ${((s as any).npcdesc ?? 0)} moans begrudgingly.`);
    scene.actions([
      { label: 'Blow him', goto: ['sex_ev_foreplay', 'bj_dom2'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'blowjob') {
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
    qspCall(s, 'sex_ev_sex', 'fuck_me_slower');
  }
  if (((s as any).sex_ev ?? 0)?.['speed'] < 3) {
    qspCall(s, 'sex_ev_sex', 'fuck_me_faster');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Never mind', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
  ]);
  scene.build();
}

function enterFuckMeFaster(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask <<$npcdesc>> to fuck you faster', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/2.jpg');
      if (((s as any).sex_ev ?? 0)?.['speed'] === 1) {
        scene.text('"Not that this isn\'t nice and all," you say, gesturing at yourself and the gentle lovemaking going on between your thighs. "But do you think we could go a little faster?"');
        // TODO-QSP: dynamic text: "I could do that," <<$npcdesc>> says and starts to speed up.
        scene.text(`"I could do that," ${((s as any).npcdesc ?? 0)} says and starts to speed up.`);
      } else {
        // TODO-QSP: dynamic text: "Could you go harder?" you ask <<$npcdesc>>, panting between thrusts.
        scene.text(`"Could you go harder?" you ask ${((s as any).npcdesc ?? 0)}, panting between thrusts.`);
        if (((s as any).npc_arrogant ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          scene.text('"You sure you can handle it?" he grins.');
          scene.text('"Yeah," you smirk in reply. "<i>Pound</i> my pussy."');
        } else {
          scene.text('"If that\'s what you want," he pants in reply and grabs you by the hips to start pounding his cock into your pussy.');
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/1.jpg');
        if (((s as any).sex_ev ?? 0)?.['speed'] === 1) {
          // TODO-QSP: dynamic text: "Not that this isn't nice and all," you say, looking over your shoulder as <<$np...
          scene.text(`"Not that this isn't nice and all," you say, looking over your shoulder as ${((s as any).npcdesc ?? 0)} gently thrusts into your snatch. "But do you think we could go a little faster?"`);
          // TODO-QSP: dynamic text: "I could do that," <<$npcdesc>> says and starts to speed up.
          scene.text(`"I could do that," ${((s as any).npcdesc ?? 0)} says and starts to speed up.`);
        } else {
          // TODO-QSP: dynamic text: "Could you go harder?" you ask <<$npcdesc>> over your shoulder between the clapp...
          scene.text(`"Could you go harder?" you ask ${((s as any).npcdesc ?? 0)} over your shoulder between the clapping of your cheeks.`);
          if (((s as any).npc_arrogant ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
            scene.text('"You sure you can handle it?" he grins.');
            scene.text('"Yeah," you smirk in reply. "<i>Pound</i> my pussy."');
          } else {
            scene.text('"If that\'s what you want," he pants in reply and grabs you by the hips to start pounding his cock into your pussy.');
          }
        }
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'anal') {
          scene.img('images/shared/sex/vag/doggy/1.jpg');
          if (((s as any).sex_ev ?? 0)?.['speed'] === 1) {
            // TODO-QSP: dynamic text: "Not that this isn't nice and all," you say, looking over your shoulder as <<$np...
            scene.text(`"Not that this isn't nice and all," you say, looking over your shoulder as ${((s as any).npcdesc ?? 0)} gently thrusts into your snatch. "But do you think we could go a little faster?"`);
            // TODO-QSP: dynamic text: "I could do that," <<$npcdesc>> says and starts to speed up.
            scene.text(`"I could do that," ${((s as any).npcdesc ?? 0)} says and starts to speed up.`);
          } else {
            // TODO-QSP: dynamic text: "Could you go harder?" you ask <<$npcdesc>> over your shoulder between the clapp...
            scene.text(`"Could you go harder?" you ask ${((s as any).npcdesc ?? 0)} over your shoulder between the clapping of your cheeks.`);
            if (((s as any).npc_arrogant ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
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
    // TODO-QSP: sex_ev['speed'] += 1
    // TODO-QSP: gt 'sex_ev_<<$sex_ev[''position'']>>', '<<$sex_ev[''position...
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterFuckMeSlower(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask <<$npcdesc>> to fuck you slower', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      if (((s as any).sex_ev ?? 0)?.['speed'] === 3) {
        scene.img('images/shared/sex/vag/miss/hard3.mp4');
        scene.text('"Do-! You-! Think-!" you pant out breathlessly between the sounds of slapping flesh. "We-! Could-! Slow down-! A bit-?"');
        // TODO-QSP: dynamic text: "I could do that," <<$npcdesc>> says and moves into more of a rhythm and less of...
        scene.text(`"I could do that," ${((s as any).npcdesc ?? 0)} says and moves into more of a rhythm and less of a hammering.`);
      } else {
        scene.img('images/shared/sex/vag/miss/2.jpg');
        // TODO-QSP: dynamic text: "Hey," you say, stopping <<$npcdesc>>. "Would you mind if we go a little more ge...
        scene.text(`"Hey," you say, stopping ${((s as any).npcdesc ?? 0)}. "Would you mind if we go a little more gently for a little while?"`);
        scene.text('"Sure."');
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'anal') {
        scene.img('images/shared/sex/vag/doggy/hard2.mp4');
        if (((s as any).sex_ev ?? 0)?.['speed'] === 3) {
          scene.text('"Do-! You-! Think-!" you pant out breathlessly between the sounds of slapping flesh. "We-! Could-! Slow down-! A bit-?"');
          // TODO-QSP: dynamic text: "I could do that," <<$npcdesc>> says and moves into more of a rhythm and less of...
          scene.text(`"I could do that," ${((s as any).npcdesc ?? 0)} says and moves into more of a rhythm and less of a hammering.`);
        } else {
          scene.img('images/shared/sex/vag/doggy/1.jpg');
          // TODO-QSP: dynamic text: "Hey," you say, stopping <<$npcdesc>>. "Would you mind if we go a little more ge...
          scene.text(`"Hey," you say, stopping ${((s as any).npcdesc ?? 0)}. "Would you mind if we go a little more gently for a little while?"`);
          scene.text('"Sure."');
        }
      }
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: sex_ev['speed'] -= 1
    // TODO-QSP: gt 'sex_ev_<<$sex_ev[''position'']>>', '<<$sex_ev[''position...
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
    ((s as any).sex_ev ?? {})['school_stop'] = 1;
    if (((s as any).sex_ev ?? 0)?.['speed'] < 3) {
      scene.text('"Hey, are you close?" you ask, looking at the clock. "We need to stop soon or I\'ll be late for school."');
    } else {
      scene.text('"Hey-! Are you-! Close-?" you barely manage to pant out, looking at the clock. "I need to-! Get to class-!"');
    }
    scene.text('"Just give me a minute," he grunts back.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_<<$sex_ev[''position'']>>', '<<$sex_ev[''position...
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Running out of time', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['no_time_stop'] = 1;
    if (((s as any).sex_ev ?? 0)?.['speed'] < 3) {
      scene.text('"Are you close to coming?" you ask, looking at the clock. "I need to get going soon."');
    } else {
      scene.text('"Are you close to coming?" you barely manage to pant out, looking at the clock. "I need to get going soon."');
    }
    scene.text('"Just give me a minute," he grunts back.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_<<$sex_ev[''position'']>>', '<<$sex_ev[''position...
  } },
    ]);
  } },
    { label: 'Need to get to work', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['work_stop'] = 1;
    if (((s as any).sex_ev ?? 0)?.['speed'] < 3) {
      scene.text('"Hey, are you close?" you ask, looking at the clock. "I need to get work soon."');
    } else {
      scene.text('"Hey-! Are you-! Close-?" you barely manage to pant out, looking at the clock. "I need to-! Get to work soon-!"');
    }
    scene.text('"Just give me a minute," he grunts back.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_<<$sex_ev[''position'']>>', '<<$sex_ev[''position...
  } },
    ]);
  } },
  ]);
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
