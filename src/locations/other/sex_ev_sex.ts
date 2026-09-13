import { qspUntranslated } from '../_shared/qspUntranslated';

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
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['must_fuck'] = 1;
    if (((Math.floor(Math.random() * 10) + 1) >= ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]  ||  ((s as any).sex_ev ?? 0)?.['cum_count'] >= 5 + ((s as any).sex_ev ?? 0)?.['extra_cum'])  &&  ((s as any).sex_ev ?? 0)?.['boy_cum'] === 1) {
      qspCall(s, 'sex_ev_after', 'fucked_out');
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] !== '') {
        if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['reset_pos'] = ((s as any).sex_ev ?? 0)?.['position'];
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
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['force_initiative'] = 1;
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['change_pos'] = 1;
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['initiative'] = 'girl';
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
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['fuck_again'] = 1;
    if (((Math.floor(Math.random() * 10) + 1) >= ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]  ||  ((s as any).sex_ev ?? 0)?.['cum_count'] >= 5 + ((s as any).sex_ev ?? 0)?.['extra_cum'])  &&  ((s as any).sex_ev ?? 0)?.['boy_cum'] === 1) {
      qspCall(s, 'sex_ev_after', 'fucked_out');
    } else {
      qspCall(s, 'sex_ev_sex', 'reset');
      if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['must_fuck'] = 1;
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
          if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['must_fuck'] = 1;
          scene.text('"Enough of the foreplay," you say with a lusty growl. "It\'s time to fuck."');
        } else {
          if (((s as any).sex_ev ?? 0)?.['not_today'] === 1) {
            if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['not_today'] = 2;
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
        if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['get_hard'] = 0;
        scene.text('After a minute or so, he starts to stiffen up again.');
        scene.text('<i>Finally...</i>');
      } else {
        // TODO-QSP: dynamic text: "I haven't had enough yet," you say, seductively, pulling <<$npcdesc>> towards y...
        scene.text(`"I haven't had enough yet," you say, seductively, pulling ${((s as any).npcdesc ?? 0)} towards you.`);
      }
    }
  }
  if (((s as any).know_virgin ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    if (!(s as any).know_virgin) (s as any).know_virgin = {}; (s as any).know_virgin[String((s as any).npcID ?? 0)] = 2;
    // TODO-QSP: dynamic text: "I thought you said you were saving your virginity," <<$npcdesc>> says, looking ...
    scene.text(`"I thought you said you were saving your virginity," ${((s as any).npcdesc ?? 0)} says, looking a little confused but extremely excited.`);
    scene.text('"I accidentally lost it somewhere," you grin. "Now hurry up and fuck me."');
  }
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['position_choose'] = 1;
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
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['last_position'] = ((s as any).sex_ev ?? 0)?.['position'];
  if ((((s as any).sex_ev ?? 0)?.['position'] === ''  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'kuni'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'facesit'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'fingering'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'nipple_play'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'handjob'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'blowjob'  ||  ((s as any).sex_ev ?? 0)?.['position'] === '69'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'makeout')  ||  ((s as any).sex_ev ?? 0)?.['new_pos'] === 1) {
    if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'miss'  &&  ((s as any).sex_ev ?? 0)?.['must_fuck_anal'] === 0) {
      if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['position'] = 'miss';
    } else {
      if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'doggy'  &&  ((s as any).sex_ev ?? 0)?.['must_fuck_anal'] === 0) {
        if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['position'] = 'doggy';
      } else {
        if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'cowgirl'  &&  ((s as any).sex_ev ?? 0)?.['must_fuck_anal'] === 0) {
          if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['position'] = 'cowgirl';
        } else {
          if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'anal'  &&  ((s as any).sex_ev ?? 0)?.['must_fuck_vag'] === 0) {
            if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['position'] = 'anal';
          } else {
            if (((s as any).npc_no_anal ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).sex_ev ?? 0)?.['must_fuck_vag'] === 1) {
              if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['position_rand'] = Math.floor(Math.random() * 3) + 1;
            } else {
              if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['position_rand'] = Math.floor(Math.random() * 4) + 1;
            }
            if (((s as any).sex_ev ?? 0)?.['position_rand'] === 1) {
              if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['position'] = 'miss';
            } else {
              if (((s as any).sex_ev ?? 0)?.['position_rand'] === 2) {
                if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['position'] = 'doggy';
              } else {
                if (((s as any).sex_ev ?? 0)?.['position_rand'] === 3) {
                  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['position'] = 'cowgirl';
                } else {
                  if (((s as any).sex_ev ?? 0)?.['position_rand'] === 4) {
                    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['position'] = 'anal';
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
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['last_position'] = ((s as any).sex_ev ?? 0)?.['position'];
  qspCall(s, 'sex_ev_miss', 'miss_goto');
  qspCall(s, 'sex_ev_doggy', 'doggy_goto');
  qspCall(s, 'sex_ev_cowgirl', 'cowgirl_goto');
  qspCall(s, 'sex_ev_anal', 'anal_start');
  // TODO-QSP: end
  scene.build();
}

function enterPositionChoose(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['cum_warn'] = 0;
  if (((s as any).stat ?? 0)?.['think_virgin'] === 1  &&  (((s as any).sex_ev ?? 0)?.['fuck_count'] === 0  ||  qspFunc(s, 'pcs_has_attr', 'sex_virgin') === 1)) {
    qspCall(s, 'sex_ev_virgin', 'start_options');
  } else {
    if (((Math.floor(Math.random() * 2) + 0) === 1  &&  ((s as any).sex_ev ?? 0)?.['force_initiative'] !== 2)  ||  ((s as any).sex_ev ?? 0)?.['force_initiative'] === 1) {
      if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['initiative'] = 'girl';
      if (((s as any).sex_ev ?? 0)?.['first_insertion'] > 0) {
        if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['change_pos'] = 1;
      }
      if (((s as any).sex_ev ?? 0)?.['new_pos'] === 1) {
        if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['new_pos'] = 0;
      }
      qspCall(s, 'sex_ev_sex', 'position_menu');
      scene.actions([
        { label: 'Let him choose', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_sex', 'let_him_choose'
  } },
      ]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === ''  ||  ((s as any).sex_ev ?? 0)?.['new_pos'] === 1) {
        if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['initiative'] = 'boy';
        scene.actions([{ label: 'Continue', goto: ['sex_ev_sex', 'he_initiate'] }]);
      } else {
        if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['new_pos'] = 1;
        if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['initiative'] = 'boy';
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
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['must_fuck'] = 1;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['force_initiative'] = 2;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['initiative'] = 'boy';
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
        if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['not_anal'] = 0;
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
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['initiative'] = 'boy';
  if (((s as any).sex_ev ?? 0)?.['position'] === 'kuni'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'blowjob') {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['must_fuck'] = 1;
  }
  // TODO-QSP: dynamic text: "Do whatever you want to me <<$npc_lovername[$npcID]>>," you smile.
  scene.text(`"Do whatever you want to me ${((s as any).npc_lovername ?? 0)?.[String((s as any).npcID ?? 0)]}," you smile.`);
  if (((s as any).sex_ev ?? 0)?.['first_insertion'] > 0) {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['change_pos'] = 1;
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['new_pos'] = 1;
  }
  if (((s as any).stat ?? 0)?.['think_virgin'] === 1  &&  ((s as any).sex_ev ?? 0)?.['deflowered'] === 0  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['fuck_locked'] === 0  &&  ((s as any).sex_ev ?? 0)?.['virgin'] !== 1  ||  ((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['position'] = 'miss';
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
        if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['fuck_pos'] = 1;
        scene.actions([{ label: 'Continue', goto: ['sex_ev_miss', 'missionary_start'] }]);
      } else {
        if (((s as any).sex_ev ?? 0)?.['fuck_locked'] === 0  &&  ((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'doggy') {
          if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['fuck_pos'] = 1;
          scene.actions([{ label: 'Continue', goto: ['sex_ev_doggy', 'doggy_goto'] }]);
        } else {
          if (((s as any).sex_ev ?? 0)?.['fuck_locked'] === 0  &&  ((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'cowgirl') {
            if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['fuck_pos'] = 1;
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
    if (!(s as any).mc_inventory) (s as any).mc_inventory = {}; (s as any).mc_inventory['lubricant'] = ((s as any).mc_inventory['lubricant'] ?? 0) - (1);
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
    if (!(s as any).mc_inventory) (s as any).mc_inventory = {}; (s as any).mc_inventory['lubricant'] = ((s as any).mc_inventory['lubricant'] ?? 0) - (1);
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
      if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['position_rand'] = Math.floor(Math.random() * 3) + 1;
      if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['pick_vag_pos'] = 0;
    } else {
      if (((s as any).sex_ev ?? 0)?.['no_vag'] > 0  &&  ((s as any).sex_ev ?? 0)?.['no_anal'] === 0) {
        if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['position_rand'] = Math.floor(Math.random() * 2) + 4;
      } else {
        if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['position_rand'] = Math.floor(Math.random() * 5) + 1;
      }
    }
  } else {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['position_rand'] = Math.floor(Math.random() * 6) + 1;
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
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['pain_init'] = 1;
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['vaginal_pain'] = ((s as any).pain ?? 0)?.['vagina'];
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['cervix_pain'] = ((s as any).pain ?? 0)?.['cervix'];
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['asshole_pain'] = ((s as any).pain ?? 0)?.['asshole'];
  }
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['orgasm'] = ((s as any).orgasm ?? 0);
  if (((s as any).sex_ev ?? 0)?.['prostitution_flag'] !== '') {
    if ((String(((s as any).sex_ev ?? 0)?.['position']).slice((1)-1, ((1)-1)+(4))) === 'anal') {
      // TODO-QSP: gs 'arousal', 'anal', 1, 'no_orgasm_msg', $sex_ev['prostitution_flag']
    } else {
      if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
        if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['deflowered'] = 1;
      }
      // TODO-QSP: gs 'arousal', 'vaginal', 1, 'no_orgasm_msg', $sex_ev['prostitution_flag']
    }
  } else {
    if ((String(((s as any).sex_ev ?? 0)?.['position']).slice((1)-1, ((1)-1)+(4))) === 'anal') {
      qspCall(s, 'arousal', 'anal', 1, 'no_orgasm_msg');
    } else {
      if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
        if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['deflowered'] = 1;
      }
      qspCall(s, 'arousal', 'vaginal', 1, 'no_orgasm_msg');
    }
  }
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['new_pos'] = 0;
  // TODO-QSP: end
  scene.build();
}

function enterFuckArousalCode(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['initiative'] !== '') {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['initiative'] = '';
  }
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['new_pos'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['cock_inserted'] = 1;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['fuck'] = 1;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['fuck_time_temp'] = Math.floor(Math.random() * 4) + 1;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['fuck_time_total'] = ((s as any).sex_ev['fuck_time_total'] ?? 0) + (((s as any).sex_ev ?? 0)?.['fuck_time_temp']);
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['npc_stam'] = ((s as any).sex_ev['npc_stam'] ?? 0) - (((s as any).sex_ev ?? {})?.['fuck_time_temp'] * 10);
  if (((s as any).sex_ev ?? 0)?.['fav_npc_position'] === 0) {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss'  &&  ((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'miss') {
      if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['fav_npc_position'] = 1;
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy'  &&  ((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'doggy') {
        if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['fav_npc_position'] = 1;
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl'  &&  ((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'cowgirl') {
          if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['fav_npc_position'] = 1;
        } else {
          if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'anal') {
            if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['fav_npc_position'] = 1;
          }
        }
      }
    }
  }
  if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'enjoy') {
    (s as any).orgasm_buildup = ((s as any).orgasm_buildup ?? 0) + (((s as any).npc_sexskill ?? 0)?.[String((s as any).npcID ?? 0)]);
  }
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['orgasm'] = ((s as any).orgasm ?? 0);
  if (((s as any).sex_ev ?? 0)?.['prostitution_flag'] !== '') {
    if ((String(((s as any).sex_ev ?? 0)?.['position']).slice((1)-1, ((1)-1)+(4))) === 'anal') {
      // TODO-QSP: gs 'arousal', 'anal', sex_ev['fuck_time_temp'], 'no_orgasm_msg', $sex_ev['prostitution_flag']
      if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['anal_dirt'] = 1;
      if (((s as any).sex_ev ?? 0)?.['anal_check'] < ((s as any).sex_ev ?? 0)?.['cum_count'] + 1) {
        if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['anal_check'] = ((s as any).sex_ev ?? {})?.['cum_count'] + 1;
        if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['anal_count'] = ((s as any).sex_ev['anal_count'] ?? 0) + (1);
      }
    } else {
      if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
        if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['deflowered'] = 1;
      }
      // TODO-QSP: gs 'arousal', 'vaginal', sex_ev['fuck_time_temp'], 'no_orgasm_msg', $sex_ev['prostitution_flag']
      if (((s as any).sex_ev ?? 0)?.['fuck_check'] < ((s as any).sex_ev ?? 0)?.['cum_count'] + 1) {
        if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['fuck_check'] = ((s as any).sex_ev ?? {})?.['cum_count'] + 1;
        if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['fuck_count'] = ((s as any).sex_ev['fuck_count'] ?? 0) + (1);
      }
      if (((s as any).sex_ev ?? 0)?.['anal_dirt'] === 1) {
        if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['ass_to_pussy_allowed'] = 1;
      }
    }
  } else {
    if ((String(((s as any).sex_ev ?? 0)?.['position']).slice((1)-1, ((1)-1)+(4))) === 'anal') {
      // TODO-QSP: gs 'arousal', 'anal', sex_ev['fuck_time_temp'], 'no_orgasm_msg'
      if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['anal_dirt'] = 1;
      if (((s as any).sex_ev ?? 0)?.['anal_check'] < ((s as any).sex_ev ?? 0)?.['cum_count'] + 1) {
        if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['anal_check'] = ((s as any).sex_ev ?? {})?.['cum_count'] + 1;
        if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['anal_count'] = ((s as any).sex_ev['anal_count'] ?? 0) + (1);
      }
    } else {
      if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
        if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['deflowered'] = 1;
      }
      // TODO-QSP: gs 'arousal', 'vaginal', sex_ev['fuck_time_temp'], 'no_orgasm_msg'
      if (((s as any).sex_ev ?? 0)?.['fuck_check'] < ((s as any).sex_ev ?? 0)?.['cum_count'] + 1) {
        if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['fuck_check'] = ((s as any).sex_ev ?? {})?.['cum_count'] + 1;
        if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['fuck_count'] = ((s as any).sex_ev['fuck_count'] ?? 0) + (1);
      }
      if (((s as any).sex_ev ?? 0)?.['anal_dirt'] === 1) {
        if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['ass_to_pussy_allowed'] = 1;
      }
    }
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterFuckRoughArousalCode(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['new_pos'] = 0;
  if (((s as any).sex_ev ?? 0)?.['initiative'] !== '') {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['initiative'] = '';
  }
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['fuck_time_temp'] = Math.floor(Math.random() * 4) + 1;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['fuck_time_total'] = ((s as any).sex_ev['fuck_time_total'] ?? 0) + (((s as any).sex_ev ?? 0)?.['fuck_time_temp']);
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['npc_stam'] = ((s as any).sex_ev['npc_stam'] ?? 0) - (((s as any).sex_ev ?? {})?.['fuck_time_temp'] * 20);
  qspCall(s, 'sweat', 'add', 1);
  if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'enjoy') {
    (s as any).orgasm_buildup = ((s as any).orgasm_buildup ?? 0) + (((s as any).npc_sexskill ?? 0)?.[String((s as any).npcID ?? 0)]);
  }
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['orgasm'] = ((s as any).orgasm ?? 0);
  if ((String(((s as any).sex_ev ?? 0)?.['position']).slice((1)-1, ((1)-1)+(4))) === 'anal') {
    // TODO-QSP: gs 'arousal', 'anal', sex_ev['fuck_time_temp'], 'no_orgasm_msg', $sex_ev['prostitution_flag'], 'roug...
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['anal_dirt'] = 1;
    if (((s as any).sex_ev ?? 0)?.['anal_check'] < ((s as any).sex_ev ?? 0)?.['cum_count'] + 1) {
      if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['anal_check'] = ((s as any).sex_ev ?? 0)?.['cum_count'];
      if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['anal_count'] = ((s as any).sex_ev['anal_count'] ?? 0) + (1);
    }
  } else {
    // TODO-QSP: gs 'arousal', 'vaginal', sex_ev['fuck_time_temp'], 'no_orgasm_msg', $sex_ev['prostitution_flag'], 'r...
    if (((s as any).sex_ev ?? 0)?.['fuck_check'] < ((s as any).sex_ev ?? 0)?.['cum_count'] + 1) {
      if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['fuck_check'] = ((s as any).sex_ev ?? 0)?.['cum_count'];
      if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['fuck_count'] = ((s as any).sex_ev['fuck_count'] ?? 0) + (1);
    }
    if (((s as any).sex_ev ?? 0)?.['anal_dirt'] === 1) {
      if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['ass_to_pussy_allowed'] = 1;
    }
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterFuckRoughNoCumCode(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['new_pos'] = 0;
  if (((s as any).sex_ev ?? 0)?.['initiative'] !== '') {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['initiative'] = '';
  }
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['fuck_time_temp'] = Math.floor(Math.random() * 4) + 1;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['fuck_time_total'] = ((s as any).sex_ev['fuck_time_total'] ?? 0) + (((s as any).sex_ev ?? 0)?.['fuck_time_temp']);
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['npc_stam'] = ((s as any).sex_ev['npc_stam'] ?? 0) - (((s as any).sex_ev ?? {})?.['fuck_time_temp'] * 20);
  qspCall(s, 'sweat', 'add', 1);
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['orgasm'] = ((s as any).orgasm ?? 0);
  if ((String(((s as any).sex_ev ?? 0)?.['position']).slice((1)-1, ((1)-1)+(4))) === 'anal') {
    // TODO-QSP: gs 'arousal', 'anal', sex_ev['fuck_time_temp'], 'no_orgasm_msg', $sex_ev['prostitution_flag'], 'roug...
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['anal_dirt'] = 1;
    if (((s as any).sex_ev ?? 0)?.['anal_check'] < ((s as any).sex_ev ?? 0)?.['cum_count'] + 1) {
      if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['anal_check'] = ((s as any).sex_ev ?? 0)?.['cum_count'];
      if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['anal_count'] = ((s as any).sex_ev['anal_count'] ?? 0) + (1);
    }
  } else {
    // TODO-QSP: gs 'arousal', 'vaginal', sex_ev['fuck_time_temp'], 'no_orgasm_msg', $sex_ev['prostitution_flag'], 'r...
    if (((s as any).sex_ev ?? 0)?.['fuck_check'] < ((s as any).sex_ev ?? 0)?.['cum_count'] + 1) {
      if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['fuck_check'] = ((s as any).sex_ev ?? 0)?.['cum_count'];
      if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['fuck_count'] = ((s as any).sex_ev['fuck_count'] ?? 0) + (1);
    }
    if (((s as any).sex_ev ?? 0)?.['anal_dirt'] === 1) {
      if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['ass_to_pussy_allowed'] = 1;
    }
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterFuckNoCumCode(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['new_pos'] = 0;
  if (((s as any).sex_ev ?? 0)?.['initiative'] !== '') {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['initiative'] = '';
  }
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['fuck_time_temp'] = Math.floor(Math.random() * 4) + 1;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['fuck_time_total'] = ((s as any).sex_ev['fuck_time_total'] ?? 0) + (((s as any).sex_ev ?? 0)?.['fuck_time_temp']);
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['npc_stam'] = ((s as any).sex_ev['npc_stam'] ?? 0) - (((s as any).sex_ev ?? {})?.['fuck_time_temp'] * 10);
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['orgasm'] = ((s as any).orgasm ?? 0);
  if ((String(((s as any).sex_ev ?? 0)?.['position']).slice((1)-1, ((1)-1)+(4))) === 'anal') {
    // TODO-QSP: gs 'arousal', 'anal', sex_ev['fuck_time_temp'], 'no_orgasm_msg', $sex_ev['prostitution_flag']
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['anal_dirt'] = 1;
    if (((s as any).sex_ev ?? 0)?.['anal_check'] < ((s as any).sex_ev ?? 0)?.['cum_count'] + 1) {
      if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['anal_check'] = ((s as any).sex_ev ?? 0)?.['cum_count'];
      if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['anal_count'] = ((s as any).sex_ev['anal_count'] ?? 0) + (1);
    }
  } else {
    // TODO-QSP: gs 'arousal', 'vaginal', sex_ev['fuck_time_temp'], 'no_orgasm_msg', $sex_ev['prostitution_flag']
    if (((s as any).sex_ev ?? 0)?.['fuck_check'] < ((s as any).sex_ev ?? 0)?.['cum_count'] + 1) {
      if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['fuck_check'] = ((s as any).sex_ev ?? 0)?.['cum_count'];
      if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['fuck_count'] = ((s as any).sex_ev['fuck_count'] ?? 0) + (1);
    }
    if (((s as any).sex_ev ?? 0)?.['anal_dirt'] === 1) {
      if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['ass_to_pussy_allowed'] = 1;
    }
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterFuckArousalCreampieCumCode(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['fuck_time_temp'] = 1;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['fuck_time_total'] = ((s as any).sex_ev['fuck_time_total'] ?? 0) + (1);
  if (((s as any).sex_ev ?? 0)?.['creampie_ask'] === 1) {
    if ((String(((s as any).sex_ev ?? 0)?.['position']).slice((1)-1, ((1)-1)+(4))) === 'anal') {
      if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['ask_creampie_count'] = ((s as any).sex_ev['ask_creampie_count'] ?? 0) + (1);
    } else {
      if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['ask_anal_creampie_count'] = ((s as any).sex_ev['ask_anal_creampie_count'] ?? 0) + (1);
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
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['cock_inserted'] = 1;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['fuck'] = 1;
  if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['miss_fuck'] = 1;
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
      if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['doggy_fuck'] = 1;
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
        if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['cowgirl_fuck'] = 1;
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'anal') {
          if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['anal_fuck'] = 1;
        }
      }
    }
  }
  if (((s as any).sex_ev ?? 0)?.['girl_orgasm'] === 1) {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['girl_orgasm'] = 0;
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
    if ((String(((s as any).npcID ?? 0)).slice((1)-1, ((1)-1)+(1))) === 'A') {
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
          if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['moan'] = 0;
          if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['dirty_talk_count'] = 1;
          // TODO-QSP: gt 'sex_ev_<<$sex_ev[''position'']>>', '<<$sex_ev[''position'']>><<sex_ev[''speed'']>>.2'
          if (((s as any).sex_ev ?? 0)?.['speed'] !== 3  &&  ((s as any).sex_ev ?? 0)?.['unique_npc'] === 1) {
            scene.actions([
              { label: 'Talk while fucking', handler: (st: GameState) => {
    if ((String(((s as any).npcID ?? 0)).slice((1)-1, ((1)-1)+(1))) === 'A') {
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
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['cowgirl_dom'] = 1;
    scene.img('images/shared/sex/vag/cowgirl/slow3.mp4');
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['fuck_enjoyment'] = 'enjoy';
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
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['stop_orgasm'] = 1;
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Release orgasm', handler: (st: GameState) => {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['stop_orgasm'] = 0;
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
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['cum_speed_up'] = 1;
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['extra_stim'] = ((s as any).sex_ev['extra_stim'] ?? 0) + (1);
    // TODO-QSP: gt 'sex_ev_<<$sex_ev[''position'']>>', '<<$sex_ev[''position'']>><<sex_ev[''speed'']>>.2'
  } },
      { label: 'Change position', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_sex', 'position_change'
  } },
      { label: 'Ask <<$npcdesc>> to hurry up and finish', handler: (st: GameState) => {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['hurry_up'] = 1;
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['boy_cum'] = 1;
  }, goto: ['sex_ev_sex', 'hurry_up_menu'] },
    ]);
  }
  if ((Math.floor(Math.random() * 2) + 1) === 1  &&  ((s as any).sex_ev ?? 0)?.['talk_topic'] !== ''  &&  (((s as any).sex_ev ?? 0)?.['cycle_limit'] + ((s as any).sex_ev ?? 0)?.['extra_stim']) > ((s as any).sex_ev ?? 0)?.['sex_stamina'] - (Math.floor(Math.random() * 2) + 1)  &&  ((s as any).sex_ev ?? 0)?.['cum_limit_warning'] === 0) {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['cum_limit_warning'] = 1;
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
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['speed'] = Math.floor(Math.random() * 3) + 1;
  }
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['change_pos'] = 1;
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
      if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['speed'] = Math.floor(Math.random() * 3) + 1;
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
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['blowjob_switch'] = 1;
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
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['school_stop'] = 1;
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Running out of time', handler: (st: GameState) => {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['no_time_stop'] = 1;
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
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['work_stop'] = 1;
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

function enterGirlCumPre(s: GameState, scene: SceneBuilder): void {
  scene.text('It isn\'t long before you feel right at the edge of climax. Your body tenses up, pressure builds inside you, straining against your skin which feels hot and tingly. You feel like you\'re going to explode any second now.');
  // TODO-QSP: end
  scene.build();
}

function enterSexEnd(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['last_cum_time'] = ((s as any).totminut ?? 0);
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
    qspCall(s, 'sex_ev_sex', 'keep_going');
    qspCall(s, 'sex_ev_sex', 'take_a_break');
    qspCall(s, 'sex_ev_sex', 'harden_hand');
    qspCall(s, 'sex_ev_sex', 'harden_mouth');
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
  // TODO-QSP: end
  scene.build();
}

function enterSpeedSelect(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['hate_fuck'] === 1) {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['speed'] = 3;
  } else {
    if (((s as any).sex_ev ?? 0)?.['too_rough'] === 1  ||  ((s as any).npc_no_rough ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['speed'] = Math.floor(Math.random() * 2) + 1;
    } else {
      if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['speed'] = ((s as any).npc_sex_speed ?? 0)?.[String((s as any).npcID ?? 0)] + (Math.floor(Math.random() * (1 - (-1) + 1)) + ((-1)));
      if (((s as any).sex_ev ?? 0)?.['speed'] <= 0) {
        if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['speed'] = 1;
      }
      if (((s as any).sex_ev ?? 0)?.['speed'] > 3) {
        if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['speed'] = 3;
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMoanSelections(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Just keep fucking', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_<<$sex_ev[''position'']>>', '<<$sex_ev[''position...
  } },
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
    { label: 'Dirty talk about his cock', handler: (st: GameState) => {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['enthusiasm'] = ((s as any).sex_ev['enthusiasm'] ?? 0) + (2);
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['moan'] = 0;
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['dirty_talk'] = 1;
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['dirty_talk'] = 'cock';
    // TODO-QSP: gt 'sex_ev_<<$sex_ev[''position'']>>', '<<$sex_ev[''position'']>><<sex_ev[''speed'']>>.2'
  } },
    { label: 'Dirty talk about your arousal', handler: (st: GameState) => {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['enthusiasm'] = ((s as any).sex_ev['enthusiasm'] ?? 0) + (2);
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['moan'] = 0;
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['dirty_talk'] = 1;
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['dirty_talk'] = 'arousal';
    // TODO-QSP: gt 'sex_ev_<<$sex_ev[''position'']>>', '<<$sex_ev[''position'']>><<sex_ev[''speed'']>>.2'
  } },
    { label: 'Dirty talk about his technique', handler: (st: GameState) => {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['enthusiasm'] = ((s as any).sex_ev['enthusiasm'] ?? 0) + (2);
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['moan'] = 0;
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['dirty_talk'] = 1;
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['dirty_talk'] = 'technique';
    // TODO-QSP: gt 'sex_ev_<<$sex_ev[''position'']>>', '<<$sex_ev[''position'']>><<sex_ev[''speed'']>>.2'
  } },
  ]);
  scene.build();
}

function enterDirtyTalk1(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: '... about his cock', handler: (st: GameState) => {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['dirty_talk'] = 'cock';
    qspCall(s, 'sex_ev_sex', 'dirty_talk2');
  } },
    { label: '... about your arousal', handler: (st: GameState) => {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['dirty_talk'] = 'arousal';
    qspCall(s, 'sex_ev_sex', 'dirty_talk2');
  } },
    { label: '... about his technique', handler: (st: GameState) => {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['dirty_talk'] = 'technique';
    qspCall(s, 'sex_ev_sex', 'dirty_talk2');
  } },
  ]);
  scene.build();
}

function enterDirtyTalk2(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['moan'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['dirty_talk_count'] = 1;
  // TODO-QSP: gt 'sex_ev_<<$sex_ev[''position'']>>', '<<$sex_ev[''position'']>><<sex_ev[''speed'']>>.2'
  // TODO-QSP: end
  scene.build();
}

function enterTakeABreak(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Take a break', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 3) + 1);
    qspCall(s, 'stat', '');
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['react'] = 1;
    if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'creampie') {
      if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
        scene.img('images/shared/sex/cum/vagcreampie/miss1.jpg');
        if (((s as any).sex_ev ?? 0)?.['need_break'] === 0) {
          qspCall(s, 'sex_ev_sex', 'break_ask');
        }
        // TODO-QSP: dynamic text: You flop down onto the bed beside <<$npcdesc>>, feeling his cum trickling from y...
        scene.text(`You flop down onto the bed beside ${((s as any).npcdesc ?? 0)}, feeling his cum trickling from your pussy.`);
        scene.text('A few minutes pass and your breathing slowly calms, relaxing in a moment of quiet satisfaction.');
        qspCall(s, 'sex_ev_sex', 'break_time');
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
          scene.img('images/shared/sex/vag/miss/2.jpg');
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
            scene.img('images/shared/sex/vag/doggy/1.jpg');
          } else {
            if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
              scene.img('images/shared/sex/vag/cowgirl/1.jpg');
            }
          }
        }
        if (((s as any).sex_ev ?? 0)?.['need_break'] === 0) {
          qspCall(s, 'sex_ev_sex', 'break_ask');
        }
        if (((s as any).sex_ev ?? 0)?.['need_break'] === 0) {
          scene.actions([
            { label: 'Stay like this', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/2.jpg');
      // TODO-QSP: dynamic text: You lay still, leaving <<$npcdesc>>'s occasionally twitching <<$npc_dick_noun[$n...
      scene.text(`You lay still, leaving ${((s as any).npcdesc ?? 0)}'s occasionally twitching ${((s as any).npc_dick_noun ?? 0)?.[String((s as any).npcID ?? 0)]} stuffed inside you, your pussy full of his cum, taking deep breaths as you wind down.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/1.jpg');
        // TODO-QSP: dynamic text: You let your legs give out from under you, collapsing to the bed with <<$npcdesc...
        scene.text(`You let your legs give out from under you, collapsing to the bed with ${((s as any).npcdesc ?? 0)} still on top, his occasionally twitching ${((s as any).npc_dick_noun ?? 0)?.[String((s as any).npcID ?? 0)]} stuffed inside you and your pussy full of his cum, taking deep breaths as you wind down.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/hug1.jpg');
          if (((s as any).npc_cuddler ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
            if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'creampie') {
              // TODO-QSP: dynamic text: You collapse onto <<$npcdesc>>, feeling his breathing through your breasts press...
              scene.text(`You collapse onto ${((s as any).npcdesc ?? 0)}, feeling his breathing through your breasts pressed up against his chest and the occasional twitch of his softening manhood stuffed inside you. Your breathing calms and your heartbeat slows, and soon you feel like it's matching ${((s as any).npcdesc ?? 0)}'s. As you melt into his body, you feel his cum slowly oozing out around the edges of your pussy, dripping down his ${((s as any).npc_dick_noun ?? 0)?.[String((s as any).npcID ?? 0)]}.`);
            } else {
              // TODO-QSP: dynamic text: You collapse onto <<$npcdesc>>, feeling his breathing through your breasts press...
              scene.text(`You collapse onto ${((s as any).npcdesc ?? 0)}, feeling his breathing through your breasts pressed up against his chest and the occasional twitch of his ${((s as any).npc_dick_noun ?? 0)?.[String((s as any).npcID ?? 0)]} stuffed inside your pussy. Your breathing calms and your heartbeat slows, and soon you feel like it's matching his.`);
            }
          } else {
            if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'creampie') {
              // TODO-QSP: dynamic text: You collapse onto <<$npcdesc>>, feeling his breathing through your breasts press...
              scene.text(`You collapse onto ${((s as any).npcdesc ?? 0)}, feeling his breathing through your breasts pressed up against his chest and the occasional twitch of his softening manhood stuffed inside you. For his part, ${((s as any).npcdesc ?? 0)} wraps h is arms around you, holding you tight in a warm embrace. Your breathing calms and your heartbeat slows, and soon you feel like it's matching ${((s as any).npcdesc ?? 0)}'s. As you melt into his body, you feel his cum slowly oozing out around the edges of your pussy, dripping down his ${((s as any).npc_dick_noun ?? 0)?.[String((s as any).npcID ?? 0)]}.`);
            } else {
              // TODO-QSP: dynamic text: You collapse onto <<$npcdesc>>, feeling his breathing through your breasts press...
              scene.text(`You collapse onto ${((s as any).npcdesc ?? 0)}, feeling his breathing through your breasts pressed up against his chest and the occasional twitch of his ${((s as any).npc_dick_noun ?? 0)?.[String((s as any).npcID ?? 0)]} stuffed inside your pussy.  For his part, ${((s as any).npcdesc ?? 0)} wraps h is arms around you, holding you tight in a warm embrace. Your breathing calms and your heartbeat slows, and soon you feel like it's matching his.`);
            }
          }
        }
      }
    }
    if (((s as any).sex_ev ?? 0)?.['speed'] <= 2) {
      scene.text('The two of you just stay like that for a while, basking in the afterglow of your love-making.');
    } else {
      scene.text('The two of you just stay like that for a while, basking in the afterglow of your rough fucking.');
    }
    qspCall(s, 'sex_ev_sex', 'break_time');
  } },
          ]);
        }
        scene.actions([
          { label: 'Pull apart', handler: (st: GameState) => {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['cock_inserted'] = 0;
    if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'creampie') {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
        scene.img('images/shared/sex/cum/vagcreampie/after1.jpg');
        // TODO-QSP: dynamic text: <<$npcdesc>> climbs off of you and flops down beside you. You breathe slowly, le...
        scene.text(`${((s as any).npcdesc ?? 0)} climbs off of you and flops down beside you. You breathe slowly, letting yourself sink into the bed as you feel ${((s as any).npcdesc ?? 0)}'s cum trickle from your pussy.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          scene.img('images/shared/sex/cum/vagcreampie/doggy2.jpg');
          // TODO-QSP: dynamic text: <<$npcdesc>> climbs off of you and flops down beside you. You barely move, breat...
          scene.text(`${((s as any).npcdesc ?? 0)} climbs off of you and flops down beside you. You barely move, breathing slowly and let your face sink into the pillow as ${((s as any).npcdesc ?? 0)}'s cum trickles from your pussy.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            scene.img('images/shared/sex/cum/vagcreampie/after1.jpg');
            // TODO-QSP: dynamic text: You climb off of <<$npcdesc>>, flopping down beside him and let yourself sink in...
            scene.text(`You climb off of ${((s as any).npcdesc ?? 0)}, flopping down beside him and let yourself sink into the softness of the bed. His cum slowly oozes from your pussy.`);
          }
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'condom') {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
          scene.img('images/shared/sex/after/miss_after1.mp4');
          // TODO-QSP: dynamic text: <<$npcdesc>> climbs off of you and flops down beside you. You breathe slowly, le...
          scene.text(`${((s as any).npcdesc ?? 0)} climbs off of you and flops down beside you. You breathe slowly, letting yourself sink into the bed, feeling your your pussy continue to leak as ${((s as any).npcdesc ?? 0)} pulls off the used condom and tosses it aside.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
            scene.img('images/shared/sex/after/doggy_after1.mp4');
            // TODO-QSP: dynamic text: <<$npcdesc>> climbs off of you and you roll over to face him, thighs slick with ...
            scene.text(`${((s as any).npcdesc ?? 0)} climbs off of you and you roll over to face him, thighs slick with your own juices and head swimming with post-fuck endorphins, while he pulls off the used condom and tosses it aside.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
              scene.img('images/shared/sex/after/cowgirl_after1.mp4');
              // TODO-QSP: dynamic text: You climb off of <<$npcdesc>>, flopping down beside him and let yourself sink in...
              scene.text(`You climb off of ${((s as any).npcdesc ?? 0)}, flopping down beside him and let yourself sink into the softness of the bed, sighing with satisfaction as you feel post-fuck juices continue to leak from your pussy and ${((s as any).npcdesc ?? 0)} pulls off the used condom and tosses it aside.`);
            }
          }
        }
      }
    }
    if (((s as any).sex_ev ?? 0)?.['speed'] <= 2) {
      scene.text('The two of you just stay like that for a while, basking in the afterglow of your love-making.');
    } else {
      scene.text('The two of you just stay like that for a while, basking in the afterglow of your rough fucking.');
    }
    qspCall(s, 'sex_ev_sex', 'break_time');
  } },
        ]);
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'condom') {
        scene.img('images/shared/sex/after/pillow_talk1.jpg');
        if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
          // TODO-QSP: dynamic text: You flop down onto the bed, breathing hard as your body slowly unwinds, relaxing...
          scene.text(`You flop down onto the bed, breathing hard as your body slowly unwinds, relaxing as you let yourself sink into the mattress. ${((s as any).npcdesc ?? 0)} removes the condom from his cock, tossing it aside before laying down beside you.`);
          if (((s as any).sex_ev ?? 0)?.['speed'] <= 2) {
            scene.text('The two of you just stay like that for a while, basking in the afterglow of your love-making.');
          } else {
            scene.text('The two of you just stay like that for a while, basking in the afterglow of your rough fucking.');
          }
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
            // TODO-QSP: dynamic text: <<$npcdesc>> climbs off of you, removing the condom from his softening cock befo...
            scene.text(`${((s as any).npcdesc ?? 0)} climbs off of you, removing the condom from his softening cock before flopping down beside you. You breathe slowly, letting yourself sink into the bed as your body relaxes.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
              // TODO-QSP: dynamic text: <<$npcdesc>> climbs off of you, removing the condom from his softening cock befo...
              scene.text(`${((s as any).npcdesc ?? 0)} climbs off of you, removing the condom from his softening cock before flopping down beside you. You turn over onto your back and breathe slowly, letting yourself sink into the bed as your body relaxes.`);
            } else {
              if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
                // TODO-QSP: dynamic text: You climb off of <<$npcdesc>>, flopping down beside him as he removes the condom...
                scene.text(`You climb off of ${((s as any).npcdesc ?? 0)}, flopping down beside him as he removes the condom from his softening cock, and let yourself sink into the softness of the bed. He ties off the rubber and tosses it aside.`);
              }
            }
          }
          if (((s as any).sex_ev ?? 0)?.['speed'] <= 2) {
            scene.text('The two of you just stay like that for a while, basking in the afterglow of your love-making.');
          } else {
            scene.text('The two of you just stay like that for a while, basking in the afterglow of your rough fucking.');
          }
        }
        qspCall(s, 'sex_ev_sex', 'break_time');
      } else {
        if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'face_mouth') {
          scene.img('images/shared/sex/cum/facial/facial35.jpg');
          // TODO-QSP: dynamic text: You lay back, breathing slowly as you wind down, the warm mask of <<$npcdesc>>'s...
          scene.text(`You lay back, breathing slowly as you wind down, the warm mask of ${((s as any).npcdesc ?? 0)}'s cum across your face, its salty taste on your tongue.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'spit') {
            scene.img('images/shared/sex/cum/facial/facial35.jpg');
            // TODO-QSP: dynamic text: You lay back, breathing slowly as you wind down, the salty taste of <<$npcdesc>>...
            scene.text(`You lay back, breathing slowly as you wind down, the salty taste of ${((s as any).npcdesc ?? 0)}'s sperm on your tongue as it dribbles down your chin.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'swallow') {
              scene.img('images/shared/sex/cum/facial/facial35.jpg');
              // TODO-QSP: dynamic text: You lay back, breathing slowly as you wind down, the salty taste of <<$npcdesc>>...
              scene.text(`You lay back, breathing slowly as you wind down, the salty taste of ${((s as any).npcdesc ?? 0)}'s sperm still on your lips.`);
            } else {
              if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'facial') {
                scene.img('images/shared/sex/cum/facial/facial35.jpg');
                // TODO-QSP: dynamic text: You lay back, breathing slowly as you wind down, the warm mask of <<$npcdesc>>'s...
                scene.text(`You lay back, breathing slowly as you wind down, the warm mask of ${((s as any).npcdesc ?? 0)}'s cum across your face already beginning to cool.`);
              } else {
                if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'tits') {
                  // TODO-QSP: $sex_ev['bed_room']
                  // TODO-QSP: dynamic text: You lay back, breathing slowly as you wind down, the warm glaze of <<$npcdesc>>'...
                  scene.text(`You lay back, breathing slowly as you wind down, the warm glaze of ${((s as any).npcdesc ?? 0)}'s cum across your chest already beginning to cool.`);
                } else {
                  if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'pullout') {
                    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
                      scene.img('images/shared/sex/cum/stomach/sleep1.jpg');
                      scene.text('You lay back, breathing slowly as you wind down, feeling the warm cum on your belly already beginning to cool.');
                    } else {
                      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
                        scene.img('images/shared/sex/cum/back1.jpg');
                        // TODO-QSP: dynamic text: You just lay there, <<$npcdesc>>'s cum spattered across your ass, breathing slow...
                        scene.text(`You just lay there, ${((s as any).npcdesc ?? 0)}'s cum spattered across your ass, breathing slowly as you wind down.`);
                      }
                    }
                  } else {
                    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1');
                    // TODO-QSP: dynamic text: You lay back, breathing slowly as you wind down, the warm mask of <<$npcdesc>>'s...
                    scene.text(`You lay back, breathing slowly as you wind down, the warm mask of ${((s as any).npcdesc ?? 0)}'s cum across your face, its salty taste on your tongue.`);
                  }
                }
              }
            }
          }
        }
        scene.text('A few minutes pass and your breathing slowly calms, relaxing in a moment of quiet satisfaction.');
        qspCall(s, 'sex_ev_sex', 'break_time');
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
  // TODO-QSP: end
  scene.build();
}

function enterBreakTime(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['first_break'] === 0  ||  (Math.floor(Math.random() * 3) + 1) < 3  ||  ((s as any).sex_ev ?? 0)?.['cum_count'] >= 5 + ((s as any).sex_ev ?? 0)?.['extra_cum']) {
    if (((s as any).sex_ev ?? 0)?.['first_break'] === 0) {
      if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['first_break'] = 1;
      if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['extra_cum'] = ((s as any).sex_ev['extra_cum'] ?? 0) + (1);
    }
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['cycle_limit'] = ((s as any).sex_ev['cycle_limit'] ?? 0) - (Math.floor(Math.random() * 3) + 1);
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['on_break'] = 1;
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['break_start'] = ((s as any).totminut ?? 0);
    qspCall(s, 'sex_ev_after', 'stop_here');
    if (((s as any).sex_ev ?? 0)?.['not_yet'] === 1) {
      scene.actions([
        { label: 'Ready to keep going?', handler: (st: GameState) => {
    scene.img('images/shared/sex/misc/round2.mp4');
    // TODO-QSP: dynamic text: "You catch your breath yet?" you ask <<$npcdesc>>, flashing him a smile and glan...
    scene.text(`"You catch your breath yet?" you ask ${((s as any).npcdesc ?? 0)}, flashing him a smile and glancing between his legs.`);
    scene.text('"Yeah, I\'m ready."');
    qspCall(s, 'sex_ev_sex', 'reset');
    if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
      scene.text('With that, you ramp back into where you left off.');
      qspCall(s, 'sex_ev_sex', 'fuck_continue');
    } else {
      qspCall(s, 'sex_ev_sex', 'sex_menu');
    }
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Ready to go again?', handler: (st: GameState) => {
    scene.img('images/shared/sex/misc/round2.mp4');
    if (((s as any).sex_ev ?? 0)?.['need_break'] === 0) {
      // TODO-QSP: dynamic text: "You ready to go again?" you ask <<$npcdesc>>, flashing him a smile.
      scene.text(`"You ready to go again?" you ask ${((s as any).npcdesc ?? 0)}, flashing him a smile.`);
      scene.text('"Yeah," he grins back eagerly.');
    } else {
      // TODO-QSP: dynamic text: "You catch your breath yet?" you ask <<$npcdesc>>, flashing him a smile and glan...
      scene.text(`"You catch your breath yet?" you ask ${((s as any).npcdesc ?? 0)}, flashing him a smile and glancing between his legs. His cock starts hardening up nicely and he grins back eagerly.`);
      scene.text('"Yeah, I\'m ready."');
    }
    qspCall(s, 'sex_ev_sex', 'reset');
    qspCall(s, 'sex_ev_sex', 'sex_menu');
  } },
      ]);
    }
    qspCall(s, 'sex_ev_sex', 'ciga_break');
    qspCall(s, 'sex_ev_after', 'drink_fluid');
    qspCall(s, 'sex_ev_sex', 'birth_control_take');
    scene.actions([
      { label: 'Relax and talk', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_pillow_talk', 'topics');
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', 'he_end_break');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBirthControlTake(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).birth_control ?? 0)?.['using_bc'] > 0  &&  ((s as any).tabletkiday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).sex_ev ?? 0)?.['bc_take'] !== 1  &&  ((s as any).birth_control ?? 0)?.['remind_hour'] === 0)  ||  (((s as any).birth_control ?? 0)?.['remind_hour'] > 0  &&  ((s as any).hour ?? 0) >= ((s as any).birth_control ?? 0)?.['remind_hour']  &&  ((s as any).hour ?? 0) <= ((s as any).birth_control ?? 0)?.['remind_hour'] + 1  &&  ((s as any).tabletkiday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).sex_ev ?? 0)?.['bc_take'] !== 1)) {
    scene.actions([
      { label: 'Take your birth control', handler: (st: GameState) => {
    if (!(s as any).birth_control) (s as any).birth_control = {}; (s as any).birth_control['message_skip'] = ((s as any).daystart ?? 0);
    // TODO-QSP: $sex_ev['bed_room']
    if (((s as any).birth_control ?? 0)?.['remind_icon'] === 1) {
      if (((s as any).sex_ev ?? 0)?.['loc'] === 'pc_home') {
        scene.text('"Wait," you say, noticing your phone blinking at you from your nightstand.');
      } else {
        scene.text('"Wait," you say, noticing your phone blinking at you from your purse.');
      }
      scene.text('<i><font color="pink"><b>Take your vitamins!</b></font></i>');
      scene.text('"Gimme a sec?" you ask. "I need to take my birth control."');
    } else {
      scene.text('A spark fires somewhere in the back of your brain reminding you of something very important.');
      if (((s as any).birth_control ?? 0)?.['remind_hour'] > 0) {
        if (((s as any).hour ?? 0) >= ((s as any).birth_control ?? 0)?.['remind_hour'] + 2  ||  ((s as any).hour ?? 0) < 5) {
          scene.text('"Oh shit! I almost forgot to take my birth control!"');
        } else {
          scene.text('"Hang on a second, I just remembered I need to take my birth control. I should do it now before I forget."');
        }
      } else {
        scene.text('"Hang on a second, I just remembered I need to take my birth control."');
      }
    }
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['bc_take'] = 1;
    qspCall(s, 'din_bad', 'quick_takepill');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Take it shyly', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
      // TODO-QSP: dynamic text: You somehow manage to grab hold of your pills without extricating yourself from ...
      scene.text(`You somehow manage to grab hold of your pills without extricating yourself from ${((s as any).npcdesc ?? 0)} and pop a birth control pill from the packaging.`);
      // TODO-QSP: dynamic text: "This is what the pill is for after all," you blush, shyly placing it between yo...
      scene.text(`"This is what the pill is for after all," you blush, shyly placing it between your lips, feeling your pussy give ${((s as any).npcdesc ?? 0)}'s cock a nice squeeze as you swallow.`);
    } else {
      if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
        // TODO-QSP: dynamic text: With <<$npcdesc>>'s cum still leaking from your pussy, you reach for your pills ...
        scene.text(`With ${((s as any).npcdesc ?? 0)}'s cum still leaking from your pussy, you reach for your pills and pull out your birth control.`);
        if (((s as any).sex_ev ?? 0)?.['risky_creampie'] === 1) {
          scene.text('"Hopefully we won\'t have to worry about this stuff soon," you smile, shyly placing the pill between your lips and swallowing.');
        } else {
          scene.text('"This is what the pill is for after all," you smile, shyly placing the pill between your lips and swallowing.');
        }
      } else {
        if (((s as any).sex_ev ?? 0)?.['loc'] === 'pc_home') {
          scene.text('You reach over to your nightstand and pull out your birth control.');
        } else {
          scene.text('You reach down to your purse and pull out your birth control.');
        }
        if (((s as any).pillcon2 ?? 0) > 20000  &&  ((s as any).birth_control ?? 0)?.['think_safe'] !== 1) {
          if (!(s as any).npc_know_bc_not_effective) (s as any).npc_know_bc_not_effective = {}; (s as any).npc_know_bc_not_effective[String((s as any).npcID ?? 0)] = 1;
          scene.text('"I think it\'ll kick in soon," you smile, shyly placing the pill between your lips and swallowing.');
        } else {
          if (((s as any).pillcon2 ?? 0) > 10000  &&  ((s as any).birth_control ?? 0)?.['think_safe'] !== 1) {
            if (!(s as any).npc_know_bc_not_effective) (s as any).npc_know_bc_not_effective = {}; (s as any).npc_know_bc_not_effective[String((s as any).npcID ?? 0)] = 1;
            scene.text('"It\'s gonna be a while before it starts working," you smile, shyly placing the pill between your lips and swallowing.');
          } else {
            if (((s as any).pillcon2 ?? 0) > 0  &&  ((s as any).birth_control ?? 0)?.['think_safe'] !== 1) {
              if (!(s as any).npc_know_bc_not_effective) (s as any).npc_know_bc_not_effective = {}; (s as any).npc_know_bc_not_effective[String((s as any).npcID ?? 0)] = 1;
              scene.text('"I only just started it," you smile, shyly placing the pill between your lips and swallowing.');
            } else {
              scene.text('"This is what the pill is for after all," you smile, shyly placing the pill between your lips and swallowing.');
            }
          }
        }
      }
    }
    qspCall(s, 'sex_ev_sex', 'break_time');
  } },
      { label: 'Take it sexily', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
      // TODO-QSP: dynamic text: You somehow manage to grab hold of your pills without extricating yourself from ...
      scene.text(`You somehow manage to grab hold of your pills without extricating yourself from ${((s as any).npcdesc ?? 0)} and pop a birth control pill from the packaging.`);
      if (((s as any).sex_ev ?? 0)?.['risky_creampie'] === 1) {
        // TODO-QSP: dynamic text: "You better hope this stuff kicks in soon," you say, placing the pill between yo...
        scene.text(`"You better hope this stuff kicks in soon," you say, placing the pill between your lips and swallowing with a grin, feeling your pussy give ${((s as any).npcdesc ?? 0)}'s cock a nice squeeze as you swallow.`);
      } else {
        if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
          scene.text('"My baby police pill," you say, placing it between your lips. "So you can keep coming inside me without worry."');
          // TODO-QSP: dynamic text: You swallow the pill, feeling your pussy give <<$npcdesc>>'s cock a nice squeeze...
          scene.text(`You swallow the pill, feeling your pussy give ${((s as any).npcdesc ?? 0)}'s cock a nice squeeze as you swallow.`);
        } else {
          scene.text('"This is what the pill is for after all," you grin, placing it between your lips, feeling your pussy squeeze his cock as you swallow.');
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'swallow') {
        // TODO-QSP: dynamic text: You pop the pill from its packaging and stick out your tongue, placing the pill ...
        scene.text(`You pop the pill from its packaging and stick out your tongue, placing the pill in the center of it for ${((s as any).npcdesc ?? 0)} to see before gulping it down in a single swallow.`);
        scene.text('"Chaser," you wink.');
      } else {
        if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
          if (((s as any).sex_ev ?? 0)?.['loc'] === 'pc_home') {
            // TODO-QSP: dynamic text: With <<$npcdesc>>'s cum still leaking from your pussy, you reach over to your ni...
            scene.text(`With ${((s as any).npcdesc ?? 0)}'s cum still leaking from your pussy, you reach over to your nightstand and pull out your birth control.`);
          } else {
            // TODO-QSP: dynamic text: With <<$npcdesc>>'s cum still leaking from your pussy, you reach down to your pu...
            scene.text(`With ${((s as any).npcdesc ?? 0)}'s cum still leaking from your pussy, you reach down to your purse and pull out your birth control.`);
          }
          if (((s as any).sex_ev ?? 0)?.['risky_creampie'] === 1) {
            scene.text('"You better hope this stuff kicks in soon," you say, placing the pill between your lips and swallowing with a grin.');
          } else {
            if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
              scene.text('"My baby police pill," you say, placing the pill between your lips and swallowing with a grin. "So you can keep coming inside me without worry."');
            } else {
              scene.text('"This is what the pill is for after all," you say, placing the pill between your lips and swallowing with a grin.');
            }
          }
        } else {
          if (((s as any).sex_ev ?? 0)?.['loc'] === 'pc_home') {
            scene.text('You reach over to your nightstand and pull out your birth control.');
          } else {
            scene.text('You reach down to your purse and pull out your birth control.');
          }
          if (((s as any).pillcon2 ?? 0) > 20000  &&  ((s as any).birth_control ?? 0)?.['think_safe'] !== 1) {
            if (!(s as any).npc_know_bc_not_effective) (s as any).npc_know_bc_not_effective = {}; (s as any).npc_know_bc_not_effective[String((s as any).npcID ?? 0)] = 1;
            scene.text('"Just a few more days and we\'ll never have to worry about condoms again," you say, placing the pill between your lips and swallowing with a grin.');
          } else {
            if (((s as any).pillcon2 ?? 0) > 10000  &&  ((s as any).birth_control ?? 0)?.['think_safe'] !== 1) {
              if (!(s as any).npc_know_bc_not_effective) (s as any).npc_know_bc_not_effective = {}; (s as any).npc_know_bc_not_effective[String((s as any).npcID ?? 0)] = 1;
              scene.text('"It\'ll take a little while, but then we\'ll never have to worry about condoms again," you say, placing the pill between your lips and swallowing with a grin.');
            } else {
              if (((s as any).pillcon2 ?? 0) > 0  &&  ((s as any).birth_control ?? 0)?.['think_safe'] !== 1) {
                if (!(s as any).npc_know_bc_not_effective) (s as any).npc_know_bc_not_effective = {}; (s as any).npc_know_bc_not_effective[String((s as any).npcID ?? 0)] = 1;
                scene.text('"I only just started," you say, placing the pill between your lips and swallowing with a grin. "But in about a few weeks, we\'ll be able to go condom free."');
              } else {
                scene.text('"Nothing sexier than safe sex," you say, placing the pill between your lips and swallowing with a grin.');
              }
            }
          }
        }
      }
    }
    qspCall(s, 'sex_ev_sex', 'break_time');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterHeEndBreak(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_sex', 'reset');
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['position_rand'] = Math.floor(Math.random() * 5) + 1;
  // TODO-QSP: $sex_ev['bed_room']
  if (((s as any).sex_ev ?? 0)?.['position_rand'] === 1  ||  ((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'miss'  ||  (((s as any).stat ?? 0)?.['think_virgin'] === 1  &&  ((s as any).sex_ev ?? 0)?.['virgin_fuck'] === 0  &&  ((s as any).sex_ev ?? 0)?.['position_rand'] <= 3)) {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['position'] = 'miss';
    // TODO-QSP: dynamic text: After a few minutes, you glance over at <<$npcdesc>> and find him hungrily stari...
    scene.text(`After a few minutes, you glance over at ${((s as any).npcdesc ?? 0)} and find him hungrily staring at you. You realize what's about to happen just before he jumps on top of you, eliciting...`);
    scene.actions([
      { label: '... giggles', handler: (st: GameState) => {
    scene.img('images/shared/sex/foreplay/miss3.jpg');
    // TODO-QSP: dynamic text: You burst into uncontrollable giggles as <<$npcdesc>> forces your legs open and ...
    scene.text(`You burst into uncontrollable giggles as ${((s as any).npcdesc ?? 0)} forces your legs open and lines his cock up with your pussy.`);
  }, goto: ['sex_ev_miss', 'miss_insert_acts'] },
      { label: '... a yelp of surprise', handler: (st: GameState) => {
    scene.img('images/shared/sex/foreplay/miss3.jpg');
    // TODO-QSP: dynamic text: You yelp loudly as <<$npcdesc>> grabs you, forcing your legs open and lining his...
    scene.text(`You yelp loudly as ${((s as any).npcdesc ?? 0)} grabs you, forcing your legs open and lining his cock up with your pussy.`);
  }, goto: ['sex_ev_miss', 'miss_insert_acts'] },
    ]);
  } else {
    if (((s as any).sex_ev ?? 0)?.['position_rand'] === 2  ||  ((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'doggy') {
      // TODO-QSP: dynamic text: After a few minutes, you glance over at <<$npcdesc>> and find him hungrily stari...
      scene.text(`After a few minutes, you glance over at ${((s as any).npcdesc ?? 0)} and find him hungrily staring at you. You realize what's about to happen just before he jumps you, eliciting...`);
      scene.actions([
        { label: '... giggles', handler: (st: GameState) => {
    scene.img('images/shared/sex/foreplay/doggy1.jpg');
    // TODO-QSP: dynamic text: After a few minutes, you glance over at <<$npcdesc>> and find him hungrily stari...
    scene.text(`After a few minutes, you glance over at ${((s as any).npcdesc ?? 0)} and find him hungrily staring at you with a raging erection. You realize what's about to happen just before he jumps on top of you, eliciting uncontrollable giggles from your lips as flips you onto your stomach, pulls you up by the hips, and slaps your ass, lining his cock up with your pussy.`);
  }, goto: ['sex_ev_doggy', 'doggy_insert_acts'] },
        { label: '... a yelp of surprise', handler: (st: GameState) => {
    scene.img('images/shared/sex/foreplay/doggy1.jpg');
    // TODO-QSP: dynamic text: After a few minutes, you glance over at <<$npcdesc>> and find him hungrily stari...
    scene.text(`After a few minutes, you glance over at ${((s as any).npcdesc ?? 0)} and find him hungrily staring at you with a raging erection. You realize what's about to happen just before he jumps on top of you, eliciting a yelp of surprise from from your lips as flips you onto your stomach, pulls you up by the hips, and slaps your ass before plunging his cock into your pussy.`);
  }, goto: ['sex_ev_doggy', 'doggy_insert_acts'] },
      ]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['need_break'] === 1) {
        scene.img('images/shared/sex/misc/round2.mp4');
        // TODO-QSP: dynamic text: "Okay, I think I'm ready to go again," <<$npcdesc>> says and starts working his ...
        scene.text(`"Okay, I think I'm ready to go again," ${((s as any).npcdesc ?? 0)} says and starts working his cock with his hand. You grin back, watching it harden up, and soon enough you're all over each other again.`);
        qspCall(s, 'sex_ev_sex', 'reset');
        qspCall(s, 'sex_ev_sex', 'sex_menu');
      } else {
        if (((s as any).sex_ev ?? 0)?.['position_rand'] === 3  &&  ((s as any).sex_ev ?? 0)?.['must_fuck'] !== 1) {
          // TODO-QSP: dynamic text: After a few minutes, you glance over at <<$npcdesc>> and find him hungrily stari...
          scene.text(`After a few minutes, you glance over at ${((s as any).npcdesc ?? 0)} and find him hungrily staring at you.`);
          scene.text('"What...?" you ask hesitantly.');
          scene.text('"I can\'t stop thinking about your mouth around my cock," he says, his stare becoming even more predatory.');
          qspCall(s, 'sex_ev_foreplay', 'bj_ask2');
        } else {
          if (((s as any).sex_ev ?? 0)?.['position_rand'] === 4  &&  (((s as any).cum_loc ?? 0)?.['vagina'] === 0  ||  ((s as any).npc_pussyeater ?? 0)?.[String((s as any).npcID ?? 0)] === 1)) {
            // TODO-QSP: gs 'arousal', 'foreplay', -5, 'no_orgasm_msg', $sex_ev['prostitution_flag']
            // TODO-QSP: dynamic text: After a few minutes, <<$npcdesc>> climbs on top of you without saying anything.
            scene.text(`After a few minutes, ${((s as any).npcdesc ?? 0)} climbs on top of you without saying anything.`);
            scene.text('"Hey, what are you-" you start to ask until his head descends to your stomach. He lightly kisses it, sending shivers across your skin, before kissing again and again and again, each kiss lower than the last, slowly heading towards your thighs.');
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
            // TODO-QSP: gs 'arousal', 'foreplay', -5, 'no_orgasm_msg', $sex_ev['prostitution_flag']
            // TODO-QSP: dynamic text: After a few minutes, <<$npcdesc>> climbs on top of you without saying anything.
            scene.text(`After a few minutes, ${((s as any).npcdesc ?? 0)} climbs on top of you without saying anything.`);
            scene.text('"Hey, what are you-" you start to ask until his head descends to your neck. He lightly kisses your throat, sending shivers across your skin, before kissing again and again and again, each kiss lower than the last, blazing a trail down your collarbone to the breasts his hands are already thoroughly massaging.');
            scene.actions([
              { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_foreplay', 'nipple_play'
  } },
            ]);
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterKeepGoing(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['type'] !== 'prostitution_cust') {
    scene.actions([
      { label: 'Keep going?', handler: (st: GameState) => {
    if (((Math.floor(Math.random() * 10) + 1) >= ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]  ||  ((s as any).sex_ev ?? 0)?.['cum_count'] >= 5 + ((s as any).sex_ev ?? 0)?.['extra_cum'])  &&  ((s as any).sex_ev ?? 0)?.['boy_cum'] === 1  ||  ((s as any).sex_ev ?? 0)?.['fucked_out'] > 0) {
      if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['boy_cum'] = 0;
      qspCall(s, 'sex_ev_after', 'fucked_out');
    } else {
      if (((Math.floor(Math.random() * 10) + 1) >= ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]  ||  (Math.floor(Math.random() * 10) + 1) >= ((s as any).sex_ev ?? 0)?.['sex_stamina'])  &&  ((s as any).sex_ev ?? 0)?.['boy_cocaine'] === 0  &&  ((s as any).sex_ev ?? 0)?.['boy_cum'] === 1) {
        if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['need_break'] = 1;
        if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1  &&  ((s as any).sex_ev ?? 0)?.['last_cum'] === 'creampie') {
          scene.text('"Wanna keep going?" you ask, flexing your pussy around his cock.');
          // TODO-QSP: dynamic text: "Maybe in a minute?" <<$npcdesc>> says, panting. "I think I might need a quick b...
          scene.text(`"Maybe in a minute?" ${((s as any).npcdesc ?? 0)} says, panting. "I think I might need a quick break..."`);
          scene.text('His request makes you flex again, only then noticing a certain <i>squishy</i> element to his cock. He must be getting soft.');
        } else {
          // TODO-QSP: $sex_ev['bed_room']
          // TODO-QSP: dynamic text: "Wanna keep going?" you ask, looking over at <<$npcdesc>>.
          scene.text(`"Wanna keep going?" you ask, looking over at ${((s as any).npcdesc ?? 0)}.`);
          // TODO-QSP: dynamic text: "Maybe in a minute?" <<$npcdesc>> says, panting. "I think I might need a quick b...
          scene.text(`"Maybe in a minute?" ${((s as any).npcdesc ?? 0)} says, panting. "I think I might need a quick break..."`);
          scene.text('It\'s only then you see his cock softening before your eyes.');
        }
        scene.text('"Just give me a few minutes and I\'ll get hard again," he smiles ruefully.');
        if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['boy_cum'] = 0;
        qspCall(s, 'sex_ev_sex', 'take_a_break');
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'miss'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'doggy'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 2) + 1);
          if (((s as any).sex_ev ?? 0)?.['boy_cocaine'] > 0) {
            if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1  &&  ((s as any).sex_ev ?? 0)?.['last_cum'] === 'creampie') {
              scene.text('"Wanna keep going?" you ask, flexing your pussy around his cock. Having lost none of its hardness, it twitches inside you in response, causing you to grin. "That feels like a yes."');
            } else {
              scene.img('images/shared/sex/misc/round2.mp4');
              // TODO-QSP: dynamic text: "Wanna keep going?" you ask, looking over at <<$npcdesc>>.
              scene.text(`"Wanna keep going?" you ask, looking over at ${((s as any).npcdesc ?? 0)}.`);
              scene.text('"Fuck yes," he grins back, his cock still stiff as a rock despite having just come.');
            }
          } else {
            if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1  &&  ((s as any).sex_ev ?? 0)?.['last_cum'] === 'creampie') {
              scene.text('"Wanna keep going?" you ask, flexing your pussy around his cock. It twitches inside in response, feeling a little stiffer than before, causing you to grin. "That feels like a yes."');
            } else {
              scene.img('images/shared/sex/misc/smile.jpg');
              // TODO-QSP: dynamic text: "Wanna keep going?" you ask, looking over at <<$npcdesc>>.
              scene.text(`"Wanna keep going?" you ask, looking over at ${((s as any).npcdesc ?? 0)}.`);
              scene.text('"Yeah, gimme a minute to get hard again," he grunts back, working himself with his hand to force some stiffness back into his cock.');
            }
          }
          qspCall(s, 'sex_ev_sex', 'reset');
          qspCall(s, 'sex_ev_sex', 'sex_menu');
        } else {
          (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 2) + 1);
          scene.img('images/shared/sex/misc/wait.mp4');
          scene.text('"Wanna keep going?" you ask eagerly.');
          if (((s as any).sex_ev ?? 0)?.['cum_choice'] !== '') {
            scene.text('"Yeah, gimme a minute to get hard again," he grunts back, working himself with his hand to force some stiffness back into his cock.');
          } else {
            // TODO-QSP: dynamic text: "What do you have in mind?" <<$npcdesc>> grins back.
            scene.text(`"What do you have in mind?" ${((s as any).npcdesc ?? 0)} grins back.`);
          }
          qspCall(s, 'sex_ev_sex', 'reset');
          qspCall(s, 'sex_ev_sex', 'sex_menu');
        }
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSexMenu(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_sex', 'sex_start');
  // TODO-QSP: end
  scene.actions([
    { label: 'Let him lead', handler: (st: GameState) => {
    // TODO-QSP: sex_ev['force_initiative'] = 2
    qspCall(st, 'sex_ev_sex', 'he_choose_position');
  } },
    { label: 'Foreplay', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_foreplay', 'foreplay_choose');
  } },
  ]);
  scene.build();
}

function enterKeepFucking(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterKeepFuckingAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1  &&  (((s as any).sex_ev ?? 0)?.['position'] === 'miss'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'doggy'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl')) {
    scene.actions([
      { label: 'Keep fucking', handler: (st: GameState) => {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['reset_pos'] = ((s as any).sex_ev ?? 0)?.['position'];
    qspCall(s, 'sex_ev_sex', 'reset');
    qspCall(s, 'sex_ev_condoms', 'condoms');
    // TODO-QSP: gt 'sex_ev_<<$sex_ev[''reset_pos'']>>', $sex_ev['pos_speed']
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCigaBreak(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['smoke_break'] === 0) {
    if (((s as any).mc_inventory ?? 0)?.['cigarettes'] > 0) {
      scene.actions([
        { label: 'Have a smoke', handler: (st: GameState) => {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['smoke_break'] = 1;
    qspCall(s, 'drugs', 'smoke');
    if (((s as any).npc_smoker ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.img('images/shared/sex/after/bed_smoke3.jpg');
      if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
        if (((s as any).sex_ev ?? 0)?.['loc'] === 'pc_home') {
          // TODO-QSP: dynamic text: You reach over and pull out your pack of cigarettes, placing one in your mouth a...
          scene.text(`You reach over and pull out your pack of cigarettes, placing one in your mouth and tossing the pack back onto your nightstand. ${((s as any).npcdesc ?? 0)} takes the opportunity to light up as well while you take your first drag.`);
        } else {
          // TODO-QSP: dynamic text: You reach down and pull out your pack of cigarettes, placing one in your mouth a...
          scene.text(`You reach down and pull out your pack of cigarettes, placing one in your mouth and tossing the pack back into your purse. ${((s as any).npcdesc ?? 0)} takes the opportunity to light up as well while you take your first drag.`);
        }
      } else {
        if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['cock_inserted'] = 0;
        if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'creampie') {
          if (((s as any).sex_ev ?? 0)?.['loc'] === 'pc_home') {
            // TODO-QSP: dynamic text: You finally pull apart, immediately feeling <<$npcdesc>>'s cum spill from inside...
            scene.text(`You finally pull apart, immediately feeling ${((s as any).npcdesc ?? 0)}'s cum spill from inside you as his cock vacates your pussy before reaching for your cigarettes, placing one in your mouth and tossing the pack back onto your nightstand. ${((s as any).npcdesc ?? 0)} takes the opportunity to light up as well while you take your first drag.`);
          } else {
            // TODO-QSP: dynamic text: You finally pull apart, immediately feeling <<$npcdesc>>'s cum spill from inside...
            scene.text(`You finally pull apart, immediately feeling ${((s as any).npcdesc ?? 0)}'s cum spill from inside you as his cock vacates your pussy before reaching down for your cigarettes, placing one in your mouth and tossing the pack back into your purse. ${((s as any).npcdesc ?? 0)} takes the opportunity to light up as well while you take your first drag.`);
          }
        } else {
          if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'condom') {
            if (((s as any).sex_ev ?? 0)?.['loc'] === 'pc_home') {
              // TODO-QSP: dynamic text: You finally pull apart, letting <<$npcdesc>>'s rubber coated cock slip from your...
              scene.text(`You finally pull apart, letting ${((s as any).npcdesc ?? 0)}'s rubber coated cock slip from your pussy before reaching for your cigarettes, placing one in your mouth and tossing the pack back onto your nightstand. ${((s as any).npcdesc ?? 0)} takes the opportunity to light up as well while you take your first drag.`);
            } else {
              // TODO-QSP: dynamic text: You finally pull apart, letting <<$npcdesc>>'s rubber coated cock slip from your...
              scene.text(`You finally pull apart, letting ${((s as any).npcdesc ?? 0)}'s rubber coated cock slip from your pussy before reaching down for your cigarettes, placing one in your mouth and tossing the pack back into your purse. ${((s as any).npcdesc ?? 0)} takes the opportunity to light up as well while you take your first drag.`);
            }
          }
        }
      }
      scene.text('Smoke fills your lungs and you hold it there, savouring it, before exhaling slowly. As the smoke blows past your lips, it\'s like all your stress goes with it and you sigh happily, and the two of you continue to puff away until there\'s but the charred butts left.');
    } else {
      scene.img('images/shared/sex/after/bed_smoke1.jpg');
      if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'creampie') {
        // TODO-QSP: dynamic text: You finally pull apart, immediately feeling <<$npcdesc>>'s cum spill from inside...
        scene.text(`You finally pull apart, immediately feeling ${((s as any).npcdesc ?? 0)}'s cum spill from inside you as his cock vacates your pussy before reaching down for your cigarettes, placing one in your mouth and tossing the pack back into your purse. You spark your lighter, inhaling deeply as you take your first drag.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'condom') {
          // TODO-QSP: dynamic text: You finally pull apart, letting <<$npcdesc>>'s rubber coated cock slip from your...
          scene.text(`You finally pull apart, letting ${((s as any).npcdesc ?? 0)}'s rubber coated cock slip from your pussy before reaching down for your cigarettes, placing one in your mouth and tossing the pack back into your purse. You spark your lighter, inhaling deeply as you take your first drag.`);
        }
      }
      scene.text('Smoke fills your lungs and you hold it there, savouring it, before exhaling slowly. As the smoke blows past your lips, it\'s like all your stress goes with it and you sigh happily, puffing away until there\'s nothing but a charred butt left.');
    }
    qspCall(s, 'sex_ev_sex', 'break_time');
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Got any smokes?', handler: (st: GameState) => {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['smoke_break'] = 1;
    if (((s as any).npc_smoker ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  (Math.floor(Math.random() * 20) + 1) < 20) {
      qspCall(s, 'drugs', 'smoke', 'borrow');
      scene.img('images/shared/sex/after/bed_smoke3.jpg');
      if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
        // TODO-QSP: dynamic text: "Got any smokes?" you ask. <<$npcdesc>> nods and fishes out a pack, proffering t...
        scene.text(`"Got any smokes?" you ask. ${((s as any).npcdesc ?? 0)} nods and fishes out a pack, proffering the first one to you and igniting it for you. He pulls out one for himself and lights up as well while you take your first drag.`);
      } else {
        if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['cock_inserted'] = 0;
        if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'creampie') {
          // TODO-QSP: dynamic text: "Got any smokes?" you ask, feeling the cum spill from your pussy as you finally ...
          scene.text(`"Got any smokes?" you ask, feeling the cum spill from your pussy as you finally let ${((s as any).npcdesc ?? 0)}'s cock slip from your pussy before sitting up. ${((s as any).npcdesc ?? 0)} nods and fishes out a pack, proffering the first one to you and igniting it for you. He pulls out one for himself and lights up as well while you take your first drag.`);
        } else {
          // TODO-QSP: dynamic text: "Got any smokes?" you ask as you pull apart, finally letting <<$npcdesc>>'s cock...
          scene.text(`"Got any smokes?" you ask as you pull apart, finally letting ${((s as any).npcdesc ?? 0)}'s cock slip from your pussy before sitting up. ${((s as any).npcdesc ?? 0)} nods and fishes out a pack, proffering the first one to you and igniting it for you. He pulls out one for himself and lights up as well while you take your first drag.`);
        }
      }
      scene.text('Smoke fills your lungs and you hold it there, savouring it, before exhaling slowly. As the smoke blows past your lips, it\'s like all your stress goes with it and you sigh happily, and the two of you continue to puff away until there\'s but the charred butts left.');
      qspCall(s, 'sex_ev_sex', 'break_time');
    } else {
      scene.img('images/shared/sex/after/annoyed1.jpg');
      if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
        // TODO-QSP: dynamic text: "Got any smokes?" you ask but <<$npcdesc>> just shakes his head.
        scene.text(`"Got any smokes?" you ask but ${((s as any).npcdesc ?? 0)} just shakes his head.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'creampie') {
          // TODO-QSP: dynamic text: "Got any smokes?" you ask, feeling the cum spill from your pussy as you finally ...
          scene.text(`"Got any smokes?" you ask, feeling the cum spill from your pussy as you finally let ${((s as any).npcdesc ?? 0)}'s cock slip from your pussy before sitting up. Unfortunately, he just shakes his head.`);
        } else {
          // TODO-QSP: dynamic text: "Got any smokes?" you ask as you pull apart, finally letting <<$npcdesc>>'s cock...
          scene.text(`"Got any smokes?" you ask as you pull apart, finally letting ${((s as any).npcdesc ?? 0)}'s cock slip from your pussy before sitting up. Unfortunately, he just shakes his head.`);
        }
      }
      if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['cock_inserted'] = 0;
      if (((s as any).npc_smoker ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
        scene.text('"Fresh out," he shrugs.');
      } else {
        scene.text('"I don\'t smoke. It\'s bad for you y\'know."');
        scene.actions([
          { label: 'I should probably quit', handler: (st: GameState) => {
    scene.text('"Yeah, I should probably quit," you say ruefully. "I just want one so badly after sex..."');
    qspCall(s, 'sex_ev_sex', 'break_time');
  } },
        ]);
      }
      scene.actions([
        { label: 'Damn', handler: (st: GameState) => {
    scene.text('"Damn," you sigh unhappily. "A cigarette is just what I need right now..."');
    qspCall(s, 'sex_ev_sex', 'break_time');
  } },
      ]);
    }
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterHardenHand(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['last_cum'] !== '') {
    scene.actions([
      { label: 'Try to get him hard again (hand)', handler: (st: GameState) => {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['cock_inserted'] = 0;
    if (((s as any).sex_ev ?? 0)?.['cum_count'] >= 5 + ((s as any).sex_ev ?? 0)?.['extra_cum']  &&  (((s as any).sex_ev ?? 0)?.['force_harden'] >= 2  ||  (Math.floor(Math.random() * 3) + 1) === 1)) {
      // TODO-QSP: $sex_ev['bed_room']
      if (((s as any).sex_ev ?? 0)?.['force_harden'] > 0) {
        scene.text('"Oh no you\'re not," you growl lustfully.');
      }
      if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'creampie'  ||  ((s as any).sex_ev ?? 0)?.['cum_choice'] === 'creampie_surprise') {
        // TODO-QSP: dynamic text: You pull away, pussy trailing semen as you get down in front of <<$npcdesc>> and...
        scene.text(`You pull away, pussy trailing semen as you get down in front of ${((s as any).npcdesc ?? 0)} and grab his cock. You work his shaft furiously, trying to keep him hard. But despite your best efforts, his dick softens in your grasp and you can't get it to rise again. `);
      } else {
        scene.text('Taking hold of his cock, you work his shaft furiously, trying to keep him hard. But despite your best efforts, his dick softens in your grasp and you can\'t get it to rise again.');
      }
      if (((s as any).sex_ev ?? 0)?.['not_done'] === 1) {
        scene.text('"Goddammit!" you growl. "I still wanted more out of you!"');
      }
      qspCall(s, 'sex_ev_after', 'after_sex1');
    } else {
      scene.img('images/shared/sex/handjob/hj3.mp4');
      if (((s as any).sex_ev ?? 0)?.['force_harden'] > 0) {
        scene.text('"Oh no you\'re not," you growl lustfully.');
      }
      if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'creampie'  ||  ((s as any).sex_ev ?? 0)?.['cum_choice'] === 'creampie_surprise') {
        // TODO-QSP: dynamic text: You pull away, pussy trailing semen as you get down in front of <<$npcdesc>> and...
        scene.text(`You pull away, pussy trailing semen as you get down in front of ${((s as any).npcdesc ?? 0)} and grab his cock. You work his shaft furiously, trying to keep him hard. It doesn't take long, only a minute or two, and before you know it ${((s as any).npcdesc ?? 0)} is standing at attention once again.`);
      } else {
        // TODO-QSP: dynamic text: Taking hold of his cock, you work his shaft furiously, trying to keep him hard. ...
        scene.text(`Taking hold of his cock, you work his shaft furiously, trying to keep him hard. It doesn't take long, only a minute or two, and before you know it ${((s as any).npcdesc ?? 0)} is standing at attention once again.`);
      }
      if (((s as any).sex_ev ?? 0)?.['not_done'] === 1) {
        scene.text('"Yeah, that\'s right... Just like that little guy..."');
      }
      if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['not_done'] = 0;
      if (((s as any).sex_ev ?? 0)?.['force_harden'] > 0) {
        if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['force_harden'] = 2;
        if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['extra_cum'] = ((s as any).sex_ev['extra_cum'] ?? 0) + (1);
      }
      if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['foreplay'] = '';
      qspCall(s, 'sex_ev_sex', 'reset');
      qspCall(s, 'sex_ev_foreplay', 'handjob_dom1');
      qspCall(s, 'sex_ev_sex', 'sex_menu');
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterHardenMouth(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['last_cum'] !== '') {
    scene.actions([
      { label: 'Try to get him hard again (mouth)', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['cum_count'] >= 5 + ((s as any).sex_ev ?? 0)?.['extra_cum']  &&  (((s as any).sex_ev ?? 0)?.['force_harden'] >= 2  ||  (Math.floor(Math.random() * 3) + 1) === 1)) {
      // TODO-QSP: $sex_ev['bed_room']
      if (((s as any).sex_ev ?? 0)?.['force_harden'] > 0) {
        scene.text('"Oh no you\'re not," you growl lustfully.');
      }
      if ((((s as any).sex_ev ?? 0)?.['last_cum'] === 'creampie'  ||  ((s as any).sex_ev ?? 0)?.['cum_choice'] === 'creampie_surprise')  &&  ((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
        // TODO-QSP: dynamic text: You pull away, pussy trailing semen as you get down in front of <<$npcdesc>>. Yo...
        scene.text(`You pull away, pussy trailing semen as you get down in front of ${((s as any).npcdesc ?? 0)}. You take him in your mouth, tasting of cum and your own juices, and suck gently on its head, licking, teasing, playing with his softening cock. But try as you might, it's like trying to play billiards with a rope. You just can't get him hard again.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'condom') {
          // TODO-QSP: dynamic text: You pull away and get down in front of <<$npcdesc>>. You slip the condom from hi...
          scene.text(`You pull away and get down in front of ${((s as any).npcdesc ?? 0)}. You slip the condom from his cock and take him in your mouth, you suck gently on its head, licking, teasing, playing, cleaning the cum from with his softening cock. But try as you might, it's like trying to play billiards with a rope. You just can't get him hard again.`);
        } else {
          // TODO-QSP: dynamic text: You pull away and get down in front of <<$npcdesc>>. Taking his cock in your mou...
          scene.text(`You pull away and get down in front of ${((s as any).npcdesc ?? 0)}. Taking his cock in your mouth, you suck gently on its head, licking, teasing, playing with his softening cock. But try as you might, it's like trying to play billiards with a rope. You just can't get him hard again.`);
        }
      }
      if (((s as any).sex_ev ?? 0)?.['not_done'] === 1) {
        scene.text('"Goddammit!" you growl. "I still wanted more out of you!"');
      }
      qspCall(s, 'sex_ev_after', 'after_sex1');
    } else {
      scene.img('images/shared/sex/blowjob/play1.mp4');
      if (((s as any).sex_ev ?? 0)?.['force_harden'] > 0) {
        scene.text('"Oh no you\'re not," you growl lustfully.');
      }
      if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'creampie'  &&  ((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
        // TODO-QSP: dynamic text: You pull away, pussy trailing semen as you get down in front of <<$npcdesc>>. Yo...
        scene.text(`You pull away, pussy trailing semen as you get down in front of ${((s as any).npcdesc ?? 0)}. You take him in your mouth, tasting of cum and your own juices, and suck gently on its head, licking, teasing, playing, trying to keep him hard. As you do, the dick between your lips begins to stiffen up again.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'creampie'  &&  ((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1  &&  ((s as any).sex_ev ?? 0)?.['force_harden'] > 0) {
          // TODO-QSP: dynamic text: You pull away, pussy trailing semen as you get down in front of <<$npcdesc>>. Yo...
          scene.text(`You pull away, pussy trailing semen as you get down in front of ${((s as any).npcdesc ?? 0)}. You take him in your mouth, tasting of cum and your own juices as you lick, tease, and play with his shaft. After a few moments of softness, ${((s as any).npcdesc ?? 0)} groans in a way that sounds almost painful and the dick between your lips begins to stiffen up again..`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'condom') {
            // TODO-QSP: dynamic text: You pull away and get down in front of <<$npcdesc>>. You slip the condom from hi...
            scene.text(`You pull away and get down in front of ${((s as any).npcdesc ?? 0)}. You slip the condom from his cock and take him in your mouth, you suck gently on its head, licking, teasing, playing, cleaning the cum from his shaft. As you do, the dick between your lips begins to stiffen up again.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['force_harden'] > 0) {
              // TODO-QSP: dynamic text: Taking his cock in your mouth, you suck gently on its head, licking, teasing, pl...
              scene.text(`Taking his cock in your mouth, you suck gently on its head, licking, teasing, playing, with your lips and tongue across his shaft. After a few moments of softness, ${((s as any).npcdesc ?? 0)} groans in a way that sounds almost painful and the dick between your lips begins to stiffen up again.`);
            } else {
              scene.text('Taking his cock in your mouth, you suck gently on its head, licking, teasing, playing, with your lips and tongue across his shaft. After a few moments of softness, the dick between your lips begins to stiffen up again.');
            }
          }
        }
      }
      if (((s as any).sex_ev ?? 0)?.['not_done'] === 1) {
        scene.text('"Yeah, that\'s right... Just like that little guy..." you whisper, pulling your mouth off with a pop and smiling wickedly as you continue slowly pumping him with your hand.');
      }
      if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['not_done'] = 0;
      if (((s as any).sex_ev ?? 0)?.['force_harden'] > 0) {
        if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['force_harden'] = 2;
        if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['extra_cum'] = ((s as any).sex_ev['extra_cum'] ?? 0) + (1);
      }
      if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['foreplay'] = '';
      qspCall(s, 'sex_ev_sex', 'reset');
      qspCall(s, 'sex_ev_sex', 'sex_menu');
      scene.actions([
        { label: 'Keep blowing him', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_foreplay', 'bj_dom2');
  } },
      ]);
    }
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['cock_inserted'] = 0;
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCockSexClean(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['cock_sex_clean'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['fuck'] > 0  &&  ((s as any).sex_ev ?? 0)?.['get_up'] !== 1) {
    scene.actions([
      { label: 'Clean his cock', handler: (st: GameState) => {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['cock_sex_clean'] = 1;
    scene.img('images/shared/sex/blowjob/play1.mp4');
    if (((s as any).sex_ev ?? 0)?.['no_condom'] === 1) {
      if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'creampie') {
        // TODO-QSP: dynamic text: "Here, let me take care of that for you," you say, slithering down between <<$np...
        scene.text(`"Here, let me take care of that for you," you say, slithering down between ${((s as any).npcdesc ?? 0)}'s legs and taking his cock in your mouth. You run your lips up and down his shaft and give it a thorough tongue bath, lapping up your own juices and the remnants of the creampie he filled you with.`);
      } else {
        // TODO-QSP: dynamic text: "Here, let me take care of that for you," you say, slithering down between <<$np...
        scene.text(`"Here, let me take care of that for you," you say, slithering down between ${((s as any).npcdesc ?? 0)}'s legs and taking his cock in your mouth. You run your lips up and down his shaft and give it a thorough tongue bath, lapping up your own juices and sucking any remaining cum out of the tip.`);
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['condoms_used'] > 0) {
        if (((s as any).sex_ev ?? 0)?.['cum_condom'] > 0) {
          // TODO-QSP: dynamic text: "Here, let me take care of that for you," you say, slithering down between <<$np...
          scene.text(`"Here, let me take care of that for you," you say, slithering down between ${((s as any).npcdesc ?? 0)}'s legs and taking his cock in your mouth. You run your lips up and down his shaft and give it a thorough tongue bath, lapping up your own juices and the cum that filled the inside of the condom.`);
        } else {
          // TODO-QSP: dynamic text: "Here, let me take care of that for you," you say, slithering down between <<$np...
          scene.text(`"Here, let me take care of that for you," you say, slithering down between ${((s as any).npcdesc ?? 0)}'s legs and taking his cock in your mouth. You run your lips up and down his shaft and give it a thorough tongue bath, lapping up the condom lube, your own juices, and sucking any remaining cum out of the tip.`);
        }
      }
    }
    // TODO-QSP: dynamic text: <<$npcdesc>> smiles at you appreciatively.
    scene.text(`${((s as any).npcdesc ?? 0)} smiles at you appreciatively.`);
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSessionReset(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['start_time'] = ((s as any).totminut ?? 0);
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['force_harden'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['not_done'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['boy_shower'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['boy_in_shower'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['fucked_out'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['cock_inserted'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['first_insertion'] = 0;
  if (((s as any).sex_ev ?? 0)?.['2pump'] > 0) {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['2pump'] = 0;
  }
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['fuck_enjoyment'] = '';
  qspCall(s, 'sex_ev_sex', 'reset');
  // TODO-QSP: end
  scene.build();
}

function enterReset(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['skip_foreplay'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['bj_cum_choice'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['cum_choice'] = '';
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['orgasm'] = ((s as any).orgasm ?? 0);
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['kiss'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['bored'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['he_ask'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['not_inside'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['pullout_ask'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['creampie_exit'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['no_cum'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['cleanup'] = 0;
  if (((s as any).sex_ev ?? 0)?.['came_together'] > 0) {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['came_together'] = 0;
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['simultaneous_orgasm_count'] = ((s as any).sex_ev['simultaneous_orgasm_count'] ?? 0) + (1);
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['did_we_cum_together'] = 0;
  }
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['creampie_surprise'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['surprise_cum_together'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['anal_creampie_surprise'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['anal_surprise_cum_together'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['cum_together_fake'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['cum_react'] = 0;
  if (((s as any).sex_ev ?? 0)?.['mad'] === 1) {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['mad'] = 2;
  }
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['boy_cum'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['bj_cum'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['consecutive_cuni_orgasm'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['about_time'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['his_choice'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['cum_warn'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['cum_where'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['he_ask'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['he_ask_creampie'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['he_ask_creampie_yes'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['he_ask_mouth'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['he_ask_facial'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['he_ask_tits'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['cum_wherever'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['swallow'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['spit'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['gag'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['react'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['force_initiative'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['smoke_break'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['cycle_limit'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['extra_stim'] = 0;
  if (((s as any).sex_ev ?? 0)?.['consecutive_orgasm'] === 0) {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['magik'] = ((s as any).pcs_magik ?? 0);
  }
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['reaction'] = '';
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['just_cum_inside_me'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['take_in_stride'] = 0;
  if (((s as any).sex_ev ?? 0)?.['sex_over'] > 0) {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['sex_over'] = 0;
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['round_count'] = ((s as any).sex_ev['round_count'] ?? 0) + (1);
  }
  if (((s as any).sex_ev ?? 0)?.['no_condom'] === 1) {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['condom'] = 0;
  }
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['good_for_you'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['blowjob_switch'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['cock_sex_clean'] = 0;
  if (((s as any).sex_ev ?? 0)?.['creampie_force'] === 1) {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['creampie_force'] = 2;
  }
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['creampie_ask'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['creampie_orgasm'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['cant_hold_cum'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['condom_check'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['fuck_pos'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['end_comment'] = '';
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['cum_together_dialogue1'] = '';
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['hypno_came_together'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['pee_after'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['bum_cigarette'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['cigarette'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['boy_smoked'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['shower'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['pee_after'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['pull-out_fail_react'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['catch_breath'] = 0;
  if (((s as any).sex_ev ?? 0)?.['morning_after'] === 1  &&  ((s as any).sex_ev ?? 0)?.['morning_fuck'] === 0) {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['morning_fuck'] = 1;
  }
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['not_yet'] = 0;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['need_break'] = 0;
  if (((s as any).sex_ev ?? 0)?.['2pump'] === 1) {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['2pump'] = 2;
  }
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['cum_limit_warning'] = 0;
  // TODO-QSP: end
  scene.build();
}

function enterPainTracking(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['vaginal_pain'] !== ((s as any).pain ?? 0)?.['vagina']) {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['pain_counter'] = ((s as any).sex_ev['pain_counter'] ?? 0) + (1);
  }
  if (((s as any).sex_ev ?? 0)?.['cervix_pain'] !== ((s as any).pain ?? 0)?.['cervix']) {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['pain_counter'] = ((s as any).sex_ev['pain_counter'] ?? 0) + (1);
  }
  if (((s as any).sex_ev ?? 0)?.['asshole_pain'] !== ((s as any).pain ?? 0)?.['asshole']) {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['pain_counter'] = ((s as any).sex_ev['pain_counter'] ?? 0) + (1);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSleepSex(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['start_time'] = ((s as any).totminut ?? 0);
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['sleep_fuck'] = 1;
  // TODO-QSP: gs 'arousal', 'vaginal', rand(5,10), 'no_orgasm_msg', $sex_ev['prostitution_flag']
  if (((s as any).npc_sex_speed ?? 0) <= 2) {
    // TODO-QSP: $sex_ev['sleep_video1'] = '<center><video autoplay loop <<$set_imgh>> src="images/shared/sex/sleep/slow<<rand(1, 2)>>.mp4"></video></center>'
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['sleep_video2'] = '<center><video autoplay loop ' + qspUntranslated(s, "set_imgh>", { location: "sex_ev_sex" }) + ' src="images/shared/sex/sleep/slow2.mp4"></video></center>';
  } else {
    // TODO-QSP: $sex_ev['sleep_video1'] = '<center><video autoplay loop <<$set_imgh>> src="images/shared/sex/sleep/fast<<rand(1, 2)>>.mp4"></video></center>'
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['sleep_video2'] = '<center><video autoplay loop ' + qspUntranslated(s, "set_imgh>", { location: "sex_ev_sex" }) + ' src="images/shared/sex/sleep/fast2.mp4"></video></center>';
  }
  // TODO-QSP: $sex_ev['sleep_video1']
  scene.text('<i>Mmmmmmm...</i>');
  scene.text('You\'re in a dream...');
  scene.text('What kind of dream is it?');
  // TODO-QSP: end
  scene.actions([
    { label: 'Nice', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['sleep_video1']
    scene.text('<i>Mmmmmmm...</i>');
    scene.text('It\'s a nice dream. You\'re rocking back and forth on a hammock on the water. There\'s a thick pillow between your legs and everything feels so comfy.');
    if (((s as any).pcs_sleep ?? 0) > 40) {
      scene.actions([
        { label: 'Wait a minute', handler: (st: GameState) => {
    scene.img('images/shared/sex/sleep/wake1.mp4');
    scene.text('<i>Hang on a minute.</i>');
    scene.text('Even in your sleep your brow wrinkles.');
    scene.text('<i>Hammock on the water? That doesn\'t make any sense. And don\'t hammocks swing side to side, not back and forth? And it doesn\'t feel like a <b>pillow</b> between my legs, it feels like a...</i>');
    // TODO-QSP: dynamic text: Your eyes flutter open and find <<$npcdesc>> on top of you, his cock balls deep ...
    scene.text(`Your eyes flutter open and find ${((s as any).npcdesc ?? 0)} on top of you, his cock balls deep inside you, and his hand openly groping your breast.`);
    qspCall(s, 'sex_ev_sex', 'sleep_wake_options');
  } },
      ]);
    }
    scene.actions([
      { label: 'Keep dreaming', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['sleep_video2']
    scene.text('You carry on with your pleasant dream, falling deeper and deeper into it, and don\'t wake up until the morning.');
    qspCall(s, 'sex_ev_sex', 'sleep_cum');
    scene.actions([
      { label: '. . .', goto: ['sex_ev_after', 'sleep_function'] },
    ]);
  } },
    ]);
  } },
    { label: 'Bad', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['sleep_video1']
    scene.text('<i>Nnngh...</i>');
    scene.text('It\'s a horrid dream. The town has declared you\'re a witch and are to be impaled and then burned at the stake. You can already feel it stabbing between your legs.');
    if (((s as any).pcs_sleep ?? 0) > 40) {
      scene.actions([
        { label: 'Wait a minute', handler: (st: GameState) => {
    scene.img('images/shared/sex/sleep/wake1.mp4');
    scene.text('<i>Hang on a minute.</i>');
    scene.text('Even in your sleep your brow wrinkles.');
    scene.text('<i>That doesn\'t feel like wood. I\'m not being impaled, I\'m being...</i>');
    // TODO-QSP: dynamic text: Your eyes flutter open and find <<$npcdesc>> on top of you, his cock balls deep ...
    scene.text(`Your eyes flutter open and find ${((s as any).npcdesc ?? 0)} on top of you, his cock balls deep inside you, and his hand openly groping your breast.`);
    qspCall(s, 'sex_ev_sex', 'sleep_wake_options');
  } },
      ]);
    }
    scene.actions([
      { label: 'Keep dreaming', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['sleep_video2']
    scene.text('You toss back and forth, moaning incoherently in your sleep, and don\'t wake up until the morning.');
    qspCall(s, 'sex_ev_sex', 'sleep_cum');
    scene.actions([
      { label: '. . .', goto: ['sex_ev_after', 'sleep_function'] },
    ]);
  } },
    ]);
  } },
    { label: 'Sexy', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['sleep_video1']
    scene.text('<i>Mmmmmmm...</i>');
    if (((s as any).sex_ev ?? 0)?.['type'] === 'married_sex'  ||  ((s as any).husID ?? 0) !== '') {
      scene.text('It\'s a <i>good</i> dream. You\'re rocking back and forth on a your husband\'s cock, riding him like there\'s no tomorrow as it fills your pussy in all the right ways.');
    } else {
      if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'boyfriend'  ||  ((s as any).stat ?? 0)?.['boyfriends_current'] > 0) {
        scene.text('It\'s a <i>good</i> dream. You\'re rocking back and forth on a your boyfriend\'s cock, riding him like there\'s no tomorrow as it fills your pussy in all the right ways.');
      } else {
        if (((s as any).pcs_girlfriends ?? 0) > 0) {
          scene.text('It\'s a <i>good</i> dream. You\'re rocking back and forth on a your girlfriend\'s strapon, riding her like there\'s no tomorrow as it fills your pussy in all the right ways.');
        } else {
          if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'fuckbuddy') {
            scene.text('It\'s a <i>good</i> dream. You\'re rocking back and forth on a your fuckbuddy\'s cock, riding him like there\'s no tomorrow as it fills your pussy in all the right ways.');
          } else {
            scene.text('It\'s a <i>good</i> dream. You\'re rocking back and forth on a some guy\'s cock, riding him like there\'s no tomorrow as it fills your pussy in all the right ways.');
          }
        }
      }
    }
    if (((s as any).pcs_sleep ?? 0) > 40) {
      scene.actions([
        { label: 'Wait a minute', handler: (st: GameState) => {
    scene.img('images/shared/sex/sleep/wake1.mp4');
    scene.text('<i>Hang on a minute.</i>');
    scene.text('You moan involuntarily as a spark of pleasure jumps through your chest.');
    scene.text('<i>I\'m not dreaming... I\'m...</i>');
    // TODO-QSP: dynamic text: Your eyes flutter open and find <<$npcdesc>> on top of you, his cock balls deep ...
    scene.text(`Your eyes flutter open and find ${((s as any).npcdesc ?? 0)} on top of you, his cock balls deep inside you, and his hand openly groping your breast.`);
    qspCall(s, 'sex_ev_sex', 'sleep_wake_options');
  } },
      ]);
    }
    scene.actions([
      { label: 'Keep dreaming', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['sleep_video2']
    if (((s as any).orgasm ?? 0) > ((s as any).sex_ev ?? 0)?.['orgasm']) {
      scene.text('You carry on with your pleasant dream, feeling your entire body quake in orgasm, even in sleep, and don\'t wake up until the morning.');
    } else {
      scene.text('You carry on with your pleasant dream, moaning loudly even in your sleep, and don\'t wake up until the morning.');
    }
    qspCall(s, 'sex_ev_sex', 'sleep_cum');
    scene.actions([
      { label: '. . .', goto: ['sex_ev_after', 'sleep_function'] },
    ]);
  } },
    ]);
  } },
    { label: 'Weird', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['sleep_video1']
    scene.text('<i>Mmmmmmm...</i>');
    scene.text('It\'s a weird dream. You\'re suspended in a giant block of gelatin. You can\'t move your arms or your legs, but you can breath, and the jelly is alive somehow. You can feel it pulsing between your thighs. In fact, it almost feels like its inside you.');
    if (((s as any).pcs_sleep ?? 0) > 40) {
      scene.actions([
        { label: 'Wait a minute', handler: (st: GameState) => {
    scene.img('images/shared/sex/sleep/wake1.mp4');
    scene.text('<i>Hang on a minute.</i>');
    scene.text('Even in your sleep your brow wrinkles.');
    scene.text('<i>It <b>is</b> inside me! And that\'s not jelly, that\'s...</i>');
    // TODO-QSP: dynamic text: Your eyes flutter open and find <<$npcdesc>> on top of you, his cock balls deep ...
    scene.text(`Your eyes flutter open and find ${((s as any).npcdesc ?? 0)} on top of you, his cock balls deep inside you, and his hand openly groping your breast.`);
    qspCall(s, 'sex_ev_sex', 'sleep_wake_options');
  } },
      ]);
    }
    scene.actions([
      { label: 'Keep dreaming', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['sleep_video2']
    scene.text('You carry on with your strange dream, falling deeper and deeper into it, and don\'t wake up until the morning.');
    qspCall(s, 'sex_ev_sex', 'sleep_cum');
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
      // TODO-QSP: dynamic text: "You're finally awake," <<$npcdesc>> smiles.
      scene.text(`"You're finally awake," ${((s as any).npcdesc ?? 0)} smiles.`);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Moan', handler: (st: GameState) => {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['sleep_fuck'] = 2;
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['position'] = 'miss';
    scene.img('images/shared/sex/sleep/wake1.mp4');
    scene.text('<i>Ahh~! Aahn~!</i>');
    // TODO-QSP: dynamic text: You moan with hoarse arousal, spreading your legs wider so <<$npcdesc>> can keep...
    scene.text(`You moan with hoarse arousal, spreading your legs wider so ${((s as any).npcdesc ?? 0)} can keep fucking you.`);
    if (((s as any).npc_sex_speed ?? 0) <= 2) {
      if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['speed'] = 1;
      scene.actions([
        { label: 'Fuck <<$npcdesc>>', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_miss', 'miss1.2');
  } },
      ]);
    } else {
      if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['speed'] = 3;
      scene.actions([
        { label: 'Fuck <<$npcdesc>>', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_miss', 'miss3.1');
  } },
      ]);
    }
  } },
    { label: 'Oh. (go back to sleep)', handler: (st: GameState) => {
    scene.text('"Hmm? Oh," you say flatly and lazily close your eyes, letting yourself drift back into dreamland.');
    qspCall(s, 'sex_ev_sex', 'sleep_cum');
  } },
    { label: 'Orgasm', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_sex', 'fuck_arousal_creampie_cum_code');
    scene.img('images/shared/sex/vag/miss/orgasm1.mp4');
    // TODO-QSP: dynamic text: In your relaxed state of sleep, you didn't realize how close you were to orgasm....
    scene.text(`In your relaxed state of sleep, you didn't realize how close you were to orgasm. The instant you're aware of it, your arousal finally breaks and an orgasm rocks through your body. You whimper sleepily as you squirm beneath ${((s as any).npcdesc ?? 0)} and your climax washes over you.`);
    scene.actions([
      { label: 'Back to sleep', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['sleep_video2']
    scene.text('<i>That was... nice...</i> you think before tiredness overtakes you and you drift off back to dreamland.');
    scene.text('...');
    qspCall(s, 'sex_ev_sex', 'sleep_cum');
  } },
      { label: 'Keep fucking', handler: (st: GameState) => {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['sleep_fuck'] = 2;
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['position'] = 'miss';
    scene.img('images/shared/sex/sleep/wake1.mp4');
    scene.text('<i>Ahh~! Aahn~!</i>');
    // TODO-QSP: dynamic text: You moan with hoarse arousal as your orgasm fades and control comes back to your...
    scene.text(`You moan with hoarse arousal as your orgasm fades and control comes back to your body, spreading your legs wider so ${((s as any).npcdesc ?? 0)} can keep fucking you.`);
    if (((s as any).npc_sex_speed ?? 0) <= 2) {
      if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['speed'] = 1;
      scene.actions([
        { label: 'Fuck <<$npcdesc>>', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_miss', 'miss1.2');
  } },
      ]);
    } else {
      if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['speed'] = 3;
      scene.actions([
        { label: 'Fuck <<$npcdesc>>', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_miss', 'miss3.1');
  } },
      ]);
    }
  } },
    ]);
  } },
    { label: 'Don\'t wake me up', handler: (st: GameState) => {
    scene.text('"Do whatever you want to me, just don\'t wake me up," you murmur and promptly close your eyes, letting yourself drift back into dreamland.');
    qspCall(s, 'sex_ev_sex', 'sleep_cum');
  } },
  ]);
  scene.build();
}

function enterSleepWakeWtf(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $sex_ev['bed_room']
  // TODO-QSP: dynamic text: "<i>WHAT THE FUCK!</i>" you scream, kicking <<$npcdesc>> out of you and scrambli...
  scene.text(`"<i>WHAT THE FUCK!</i>" you scream, kicking ${((s as any).npcdesc ?? 0)} out of you and scrambling across the bed from him. "What the fuck do you think you're doing?!"`);
  if ((((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  (Math.floor(Math.random() * 3) + 1) === 1)  &&  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
    // TODO-QSP: dynamic text: <<$npcdesc>> looks deeply embarrassed.
    scene.text(`${((s as any).npcdesc ?? 0)} looks deeply embarrassed.`);
    if (((s as any).sex_ev ?? 0)?.['cum_count'] >= ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]) {
      scene.text('"I- I\'m sorry," he stammers. "After you fell asleep, I woke up. You were right there and I was so hard. I just couldn\'t get back to sleep. And since we just... you know... I thought I could...');
    } else {
      scene.text('"I- I\'m sorry," he stammers. "After you fell asleep, I was still hard. I just couldn\'t get to bed. And since we just... you know... I thought I could...');
    }
    scene.actions([
      { label: 'Forgive him', handler: (st: GameState) => {
    scene.text('Your hard stare softens and you feel the anger slowly drain from your body.');
    scene.text('"It\'s fine, I guess," you say. "Just..."');
    qspCall(s, 'sex_ev_sex', 'sleep_wtf_forgive');
  } },
    ]);
  } else {
    scene.text('"What?" he asks, unabashed. "It\'s not like I was doing anything we hadn\'t already done."');
    scene.actions([
      { label: 'Forgive him', handler: (st: GameState) => {
    scene.text('Your hard stare softens and you feel the anger slowly drain from your body.');
    scene.text('"I guess you have a point," you admit reluctantly. "Just..."');
    qspCall(s, 'sex_ev_sex', 'sleep_wtf_forgive');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSleepWtfForgive(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Don\'t do it again', handler: (st: GameState) => {
    if (!(s as any).npc_sleep_sex_okay) (s as any).npc_sleep_sex_okay = {}; (s as any).npc_sleep_sex_okay[String((s as any).npcID ?? 0)] = (-1);
    scene.text('"... don\'t do it again, okay?" you warn.');
    scene.text('"Okay..." he says. After a moment, still blushing, he says, "Since you\'re awake... do you think we could...?"');
    qspCall(s, 'sex_ev_sex', 'sleep_wtf_forgive2');
  } },
    { label: 'Ask next time', handler: (st: GameState) => {
    if (!(s as any).npc_sleep_sex_okay) (s as any).npc_sleep_sex_okay = {}; (s as any).npc_sleep_sex_okay[String((s as any).npcID ?? 0)] = 1;
    scene.text('"... ask next time, okay?" you say with a soft smile.');
    scene.text('"Ask?" he says hesitantly. "You mean, wake you up?"');
    scene.actions([
      { label: 'For permission', handler: (st: GameState) => {
    scene.text('"Just enough to get my permission," you reply. "I don\'t like getting raped in my sleep. But if you have my consent, it\'s not rape."');
    scene.text('"Okay," he nods. After a moment, still blushing, he says, "Since you\'re awake... do you think we could...?"');
    qspCall(s, 'sex_ev_sex', 'sleep_wtf_forgive2');
  } },
      { label: 'Maybe I\'ll be in the mood', handler: (st: GameState) => {
    scene.text('"Maybe I\'ll be in the mood too," you smirk teasingly. "It\'s not fair if you get all the fun."');
    scene.text('"Okay," he nods. After a moment, still blushing, he says, "Since you\'re awake... do you think we could...?"');
    qspCall(s, 'sex_ev_sex', 'sleep_wtf_forgive2');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSleepWtfForgive2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'No way', handler: (st: GameState) => {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['sleep_fuck'] = (-1);
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('Your anger returns swiftly.');
    scene.text('"No! Did you really think I was going to say yes after you were just <i>molesting</i> me in my sleep?"');
    // TODO-QSP: dynamic text: <<$npcdesc>> sighs disappointedly and lays back in bed.
    scene.text(`${((s as any).npcdesc ?? 0)} sighs disappointedly and lays back in bed.`);
    scene.actions([
      { label: 'Time to leave', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Ugh." You sneer at him as you get up. "I see how it\'s gonna be. Not gonna get a wink of sleep with you around. I\'m leaving."');
    scene.text('Quick as you can, you gather your things and get dressed and head out the door.');
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
    ]);
  } },
      { label: 'Back to sleep', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('You crawl back under the sheets, closing your eyes, and try to get back to sleep.');
    scene.actions([
      { label: '. . .', goto: ['sex_ev_after', 'sleep_function'] },
    ]);
  } },
    ]);
  } },
    { label: 'Oh alright', handler: (st: GameState) => {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['sleep_fuck'] = 2;
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('You give him a look and after a brief pause, you sigh dramatically, rolling your eyes.');
    scene.text('"Oh alright. Come here," you say, beckoning him towards you so you can do something about his raging hard-on.');
    qspCall(s, 'sex_ev_sex', 'reset');
    qspCall(s, 'sex_ev_sex', 'sex_menu');
  } },
    { label: 'Sure', handler: (st: GameState) => {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['sleep_fuck'] = 2;
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Sure," you grin, beckoning him closer so you can put his raging erection to use.');
    qspCall(s, 'sex_ev_sex', 'reset');
    qspCall(s, 'sex_ev_sex', 'sex_menu');
  } },
  ]);
  scene.build();
}

function enterSleepCum(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie'  &&  ((((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] !== 1  &&  ((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] !== 1)  ||  (((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === 'when_safe'  &&  (((s as any).sex_ev ?? 0)?.['preg_risk'] !== 'safe'  ||  ((s as any).sex_ev ?? 0)?.['preg_risk'] === 'prob_safe'))  ||  ((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === 'at_will'  ||  ((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1)) {
    qspCall(s, 'cum_call', '', '', ((s as any).npcID ?? 0), 1);
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['sleep_cum_vagina'] = 1;
  } else {
    if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'mouth'  ||  ((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'face') {
      (s as any).temp_rand = Math.floor(Math.random() * 2) + 1;
      if (((s as any).temp_rand ?? 0) === 1) {
        qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0), 1);
        if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['sleep_cum_face'] = 1;
      } else {
        qspCall(s, 'cum_call', 'hair', ((s as any).npcID ?? 0), 1);
        if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['sleep_cum_hair'] = 1;
      }
    } else {
      if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'tits') {
        qspCall(s, 'cum_call', 'breasts', ((s as any).npcID ?? 0), 1);
        if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['sleep_cum_tits'] = 1;
      } else {
        if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'pullout') {
          (s as any).temp_rand = Math.floor(Math.random() * 3) + 1;
          if (((s as any).temp_rand ?? 0) === 1) {
            qspCall(s, 'cum_call', 'stomach', ((s as any).npcID ?? 0), 1);
            if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['sleep_cum_stomach'] = 1;
          } else {
            if (((s as any).temp_rand ?? 0) === 2) {
              qspCall(s, 'cum_call', 'back', ((s as any).npcID ?? 0), 1);
              if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['sleep_cum_back'] = 1;
            } else {
              qspCall(s, 'cum_call', 'butt', ((s as any).npcID ?? 0), 1);
              if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['sleep_cum_butt'] = 1;
            }
          }
        } else {
          qspCall(s, 'cum_call', 'back', ((s as any).npcID ?? 0), 1);
          if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['sleep_cum_stomach'] = 1;
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterWakeupSex(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['sleep_fuck'] = 1;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['wake_fuck'] = 1;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['morning_after'] = 1;
  // TODO-QSP: gs 'arousal', 'vaginal', rand(5,10), 'no_orgasm_msg', $sex_ev['prostitution_flag']
  if (((s as any).npc_sex_speed ?? 0) <= 2) {
    // TODO-QSP: $sex_ev['sleep_video1'] = '<center><video autoplay loop <<$set_imgh>> src="images/shared/sex/sleep/slow<<rand(1, 2)>>.mp4"></video></center>'
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['sleep_video2'] = '<center><video autoplay loop ' + qspUntranslated(s, "set_imgh>", { location: "sex_ev_sex" }) + ' src="images/shared/sex/sleep/slow2.mp4"></video></center>';
  } else {
    // TODO-QSP: $sex_ev['sleep_video1'] = '<center><video autoplay loop <<$set_imgh>> src="images/shared/sex/sleep/fast<<rand(1, 2)>>.mp4"></video></center>'
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['sleep_video2'] = '<center><video autoplay loop ' + qspUntranslated(s, "set_imgh>", { location: "sex_ev_sex" }) + ' src="images/shared/sex/sleep/fast2.mp4"></video></center>';
  }
  if (((s as any).daystage ?? 0) === 2) {
    scene.img('images/shared/sex/vag/miss/2.jpg');
    scene.text('<i>Mmmmmmm...</i>');
    scene.text('Your consciousness stirs. A bright light shines on your eyelids. Must be the sun coming through the window. But also, what\'s that between your...');
  } else {
    // TODO-QSP: $sex_ev['sleep_video1']
    scene.text('<i>Mmmmmmm...</i>');
    scene.text('Your consciousness stirs. It doesn\'t seem to be light out yet, but hazily somewhere your body feels like morning has already arrived. Speaking of your body, what\'s that...');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Open your eyes', goto: ['sex_ev_sex', 'wakeup_sex2'] },
  ]);
  scene.build();
}

function enterWakeupSex2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/vag/miss/3.jpg');
  // TODO-QSP: dynamic text: Your eyes flutter open and find <<$npcdesc>> balls deep inside you, happily fuck...
  scene.text(`Your eyes flutter open and find ${((s as any).npcdesc ?? 0)} balls deep inside you, happily fucking you first thing in the morning.`);
  qspCall(s, 'sex_ev_sex', 'wakeup_sex_options');
  // TODO-QSP: end
  scene.build();
}

function enterWakeupSexOptions(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_sleep_sex_okay ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'childish'  &&  ((s as any).npc_apt_spare ?? 0)?.[String((s as any).npcID ?? 0)] === 'gaming'  &&  (Math.floor(Math.random() * 3) + 1) === 1) {
      if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['skyrim_joke'] = 1;
      // TODO-QSP: dynamic text: "You're finally awake," <<$npcdesc>> says, putting on a stern face and a gruff v...
      scene.text(`"You're finally awake," ${((s as any).npcdesc ?? 0)} says, putting on a stern face and a gruff voice. "You were trying to cross the border, right?"`);
    } else {
      // TODO-QSP: dynamic text: "Good morning," <<$npcdesc>> smiles. "Have any good dreams?"
      scene.text(`"Good morning," ${((s as any).npcdesc ?? 0)} smiles. "Have any good dreams?"`);
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
    qspCall(s, 'sex_ev_sex', 'morning_wake_fuck_code');
    // TODO-QSP: dynamic text: "Weren't <i>mm-!</i> you supposed to <i>aah~!</i> wake me?" you moan with hoarse...
    scene.text(`"Weren't <i>mm-!</i> you supposed to <i>aah~!</i> wake me?" you moan with hoarse arousal, spreading your legs wider so ${((s as any).npcdesc ?? 0)} can keep fucking you.`);
    scene.text('"I just did," he grins.');
  }, goto: ['sex_ev_sex', 'wakeup_sex_continue'] },
      ]);
    }
  }
  if (((s as any).sex_ev ?? 0)?.['skyrim_joke'] === 1) {
    scene.actions([
      { label: 'Giggle (he\'s dorky)', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_sex', 'morning_wake_fuck_code');
    // TODO-QSP: dynamic text: <<$npcdesc>>'s internet video game joke is stupid to be sure, but despite that y...
    scene.text(`${((s as any).npcdesc ?? 0)}'s internet video game joke is stupid to be sure, but despite that you can't help but smile at it.`);
    scene.text('"You\'re such a dork," you say, your giggles turning to moans as you feel him thrust again inside you.');
  }, goto: ['sex_ev_sex', 'wakeup_sex_continue'] },
      { label: 'Giggle (you\'re dorky)', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_sex', 'morning_wake_fuck_code');
    scene.text('"I love that meme," you say, your giggles turning to moans as you feel him thrust again inside you.');
  }, goto: ['sex_ev_sex', 'wakeup_sex_continue'] },
      { label: 'What are you talking about?', handler: (st: GameState) => {
    scene.img('images/shared/sex/sleep/wake1.mp4');
    scene.text('"Huh?" Your nose scrunches up in confusion. "What on earth are you talking about?"');
    scene.text('"It\'s a meme," he says, breaking into a silly smile.');
    qspCall(s, 'sex_ev_sex', 'morning_skyrim_joke');
    scene.actions([
      { label: 'Uhh, okay?', handler: (st: GameState) => {
    scene.text('"Uhmm... okay...?" you reply with confusion as he keeps fucking you and you think to yourself, <i>Boys are weird...</i>');
  } },
    ]);
  } },
      { label: 'Shut up and fuck me', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_sex', 'morning_wake_fuck_code');
    scene.text('"Keep your dumb jokes to yourself and fuck me," you groan hoarsely, spreading your legs as an invitation to pick up the pace.');
  }, goto: ['sex_ev_sex', 'wakeup_sex_continue'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Moan', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_sex', 'morning_wake_fuck_code');
    scene.text('<i>Ahh~! Aahn~!</i>');
    // TODO-QSP: dynamic text: You moan with hoarse arousal, spreading your legs wider so <<$npcdesc>> can keep...
    scene.text(`You moan with hoarse arousal, spreading your legs wider so ${((s as any).npcdesc ?? 0)} can keep fucking you.`);
  }, goto: ['sex_ev_sex', 'wakeup_sex_continue'] },
  ]);
  scene.build();
}

function enterMorningWakeFuckCode(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_sex', 'session_reset');
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['wakeup_fuck'] = 1;
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['position'] = 'miss';
  if (((s as any).daystage ?? 0) === 2) {
    scene.img('images/shared/sex/vag/miss/med1.mp4');
  } else {
    scene.img('images/shared/sex/sleep/wake2.mp4');
  }
  if (((s as any).npc_sex_speed ?? 0) <= 2) {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['speed'] = 1;
  } else {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['speed'] = 3;
  }
  // TODO-QSP: end
  scene.build();
}

function enterMorningSkyrimJoke(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'What a terrible joke', handler: (st: GameState) => {
    scene.actions([
      { label: 'Are you a child?', handler: (st: GameState) => {
    scene.img('images/shared/sex/sleep/wake1.mp4');
    scene.text('"Ugh," you groan loudly. "Internet memes? Seriously? What are you? Twelve?"');
    // TODO-QSP: dynamic text: <<$npcdesc>> seems to feel no shame at all, letting his shit eating grin widen a...
    scene.text(`${((s as any).npcdesc ?? 0)} seems to feel no shame at all, letting his shit eating grin widen as he keeps fucking you.`);
  }, goto: ['sex_ev_sex', 'wakeup_sex_continue'] },
      { label: 'That killed the mood', handler: (st: GameState) => {
    scene.img('images/shared/sex/sleep/wake1.mp4');
    scene.text('"<i>Wow</i>," you say, cringing something awful. "You sure know how to instantly kill the mood. I think we\'re done here."');
    // TODO-QSP: dynamic text: "Oh come on! It wasn't that bad!" <<$npcdesc>> tries to protest as you push him ...
    scene.text(`"Oh come on! It wasn't that bad!" ${((s as any).npcdesc ?? 0)} tries to protest as you push him away. "Come on, don't be like that."`);
    scene.actions([
      { label: 'Yes it was', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Uhh, <i>yes</i>. It was," you say, giving him a look of contempt. "I felt the moisture in my vagina practically evaporate. There is no way I\'m going to let you fuck me right after saying that with your cock <i>inside</i> me."');
    // TODO-QSP: dynamic text: You successfully push <<$npcdesc>> off of you, shuddering with utter disgust the...
    scene.text(`You successfully push ${((s as any).npcdesc ?? 0)} off of you, shuddering with utter disgust the moment he's out from between your legs.`);
    qspCall(s, 'sex_ev_morning', 'morning_menu1');
  } },
      { label: 'Ugh, fine', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/miss/2.jpg');
    scene.text('"Ugh, <i>fine!</i>" you groan loudly. "I can\'t believe I\'m going to let you do this after saying that..."');
    scene.text('You spread your legs wider, allowing him to fuck you more deeply.');
  }, goto: ['sex_ev_sex', 'wakeup_sex_continue'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMorningWakeWtf(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $sex_ev['bed_room']
  // TODO-QSP: dynamic text: "<i>WHAT THE FUCK!</i>" you scream, kicking <<$npcdesc>> out of you and scrambli...
  scene.text(`"<i>WHAT THE FUCK!</i>" you scream, kicking ${((s as any).npcdesc ?? 0)} out of you and scrambling across the bed from him. "What the fuck do you think you're doing?!"`);
  if ((((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  (Math.floor(Math.random() * 3) + 1) === 1)  &&  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
    // TODO-QSP: dynamic text: <<$npcdesc>> looks deeply embarrassed.
    scene.text(`${((s as any).npcdesc ?? 0)} looks deeply embarrassed.`);
    scene.text('"I- I\'m sorry," he stammers. "I woke up. You were right there and... I thought it would be sexy if I... you know...');
    scene.actions([
      { label: 'Forgive him', handler: (st: GameState) => {
    scene.text('Your hard stare softens and you feel the anger slowly drain from your body.');
    scene.text('"It\'s fine, I guess," you say. "Just..."');
    qspCall(s, 'sex_ev_sex', 'morning_wtf_forgive');
  } },
    ]);
  } else {
    scene.text('"What?" he asks, unabashed. "You were just laying there all naked and sexy, so I just thought I\'d give you some wakeup sex. It\'s not like we haven\'t fucked before."');
    scene.actions([
      { label: 'Forgive him', handler: (st: GameState) => {
    scene.text('Your hard stare softens and you feel the anger slowly drain from your body.');
    scene.text('"I guess you have a point," you admit reluctantly. "Just..."');
    qspCall(s, 'sex_ev_sex', 'morning_wtf_forgive');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterMorningWtfForgive(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Don\'t do it again', handler: (st: GameState) => {
    if (!(s as any).npc_sleep_sex_okay) (s as any).npc_sleep_sex_okay = {}; (s as any).npc_sleep_sex_okay[String((s as any).npcID ?? 0)] = (-1);
    scene.text('"... don\'t do it again, okay?" you warn.');
    scene.text('"Okay..." he says. After a moment, still blushing, he says, "Since you\'re awake... do you think we could...?"');
    qspCall(s, 'sex_ev_sex', 'morning_wtf_forgive2');
  } },
    { label: 'Wake me up first', handler: (st: GameState) => {
    if (!(s as any).npc_sleep_sex_okay) (s as any).npc_sleep_sex_okay = {}; (s as any).npc_sleep_sex_okay[String((s as any).npcID ?? 0)] = 1;
    scene.text('"... wake me next time, okay?" you say with a soft smile.');
    scene.text('"I can do that," he grins.');
    scene.actions([
      { label: 'For permission', handler: (st: GameState) => {
    scene.text('"For <i>permission</i>," you roll your eyes. "I don\'t like getting raped in my sleep. But if you wake me up first and have my consent, it\'s not rape."');
    scene.text('"Okay," he nods. After a moment, still blushing, he says, "Since you\'re awake... do you think we could...?"');
    qspCall(s, 'sex_ev_sex', 'morning_wtf_forgive2');
  } },
      { label: 'Maybe I\'ll be in the mood', handler: (st: GameState) => {
    scene.text('"Maybe I\'ll be in the mood too," you smirk teasingly. "It\'s not fair if you get all the fun."');
    scene.text('"Okay," he nods. After a moment, still blushing, he says, "Since you\'re awake... do you think we could...?"');
    qspCall(s, 'sex_ev_sex', 'morning_wtf_forgive2');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMorningWtfForgive2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'No way', handler: (st: GameState) => {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['morning_fuck'] = (-1);
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('Your anger returns swiftly.');
    scene.text('"No! Did you really think I was going to say yes after you were just <i>molesting</i> me in my sleep?"');
    // TODO-QSP: dynamic text: <<$npcdesc>> sighs disappointedly and lays back in bed.
    scene.text(`${((s as any).npcdesc ?? 0)} sighs disappointedly and lays back in bed.`);
    qspCall(s, 'sex_ev_morning', 'morning_menu1');
  } },
    { label: 'Oh alright', handler: (st: GameState) => {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['morning_fuck'] = 2;
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['start_time'] = ((s as any).totminut ?? 0);
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('You give him a look and after a brief pause, you sigh dramatically, rolling your eyes.');
    scene.text('"Oh alright. Come here," you say, beckoning him towards you so you can do something about his raging hard-on.');
    qspCall(s, 'sex_ev_sex', 'reset');
    qspCall(s, 'sex_ev_sex', 'sex_menu');
  } },
    { label: 'Sure', handler: (st: GameState) => {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['morning_fuck'] = 2;
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['start_time'] = ((s as any).totminut ?? 0);
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Sure," you grin, beckoning him closer so you can put his raging erection to use.');
    qspCall(s, 'sex_ev_sex', 'reset');
    qspCall(s, 'sex_ev_sex', 'sex_menu');
  } },
  ]);
  scene.build();
}

function enterWakeupSexContinue(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['start_time'] = ((s as any).totminut ?? 0);
  if (((s as any).npc_sex_speed ?? 0) <= 2) {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['speed'] = 1;
    scene.actions([
      { label: 'Fuck <<$npcdesc>>', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_miss', 'miss1.2');
  } },
    ]);
  } else {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['speed'] = 3;
    scene.actions([
      { label: 'Fuck <<$npcdesc>>', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_miss', 'miss3.1');
  } },
    ]);
  }
  // TODO-QSP: end
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
