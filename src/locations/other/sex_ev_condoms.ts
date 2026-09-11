import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterSetup(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).sex_ev ?? 0)?.['loc'] === 'npc_home') {
    ((s as any).sex_ev ?? {})['condom_count'] = 100;
  } else {
    if (((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      ((s as any).sex_ev ?? {})['condom_count'] = Math.floor(Math.random() * 6) + 5;
    } else {
      if (((s as any).sex_ev ?? 0)?.['condom_count'] === 0  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] === 0  &&  ((s as any).npc_no_condoms ?? 0)?.[String((s as any).npcID ?? 0)] < 1) {
        if ((Math.floor(Math.random() * 5) + 1) === 1) {
          ((s as any).sex_ev ?? {})['condom_count'] = 0;
        } else {
          ((s as any).sex_ev ?? {})['condom_count'] = Math.floor(Math.random() * 10) + 1;
        }
      } else {
        if (((s as any).npc_no_condoms ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
          ((s as any).sex_ev ?? {})['condom_count'] = 0;
        }
      }
    }
  }
  ((s as any).sex_ev ?? {})['condom_setup'] = 1;
  qspCall(s, 'sex_ev_sex', 'position_picker');
  scene.build();
}

function enterCheckCount(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['condoms_used'] >= ((s as any).sex_ev ?? 0)?.['condom_count']  &&  ((s as any).sex_ev ?? 0)?.['condom_count'] > 0) {
    ((s as any).sex_ev ?? {})['npc_used_all_condoms'] = 1;
  }
  scene.build();
}

function enterCondoms(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['condom_setup'] !== 1) {
    qspCall(s, 'sex_ev_condoms', 'setup');
  }
  qspCall(s, 'sex_ev_condoms', 'check_count');
  ((s as any).sex_ev ?? {})['must_fuck'] = 1;
  if (((s as any).sex_ev ?? 0)?.['no_condom'] !== 1) {
    if (((s as any).npc_bareback ?? 0)?.[String((s as any).npcID ?? 0)] === 'never_use'  &&  ((s as any).sex_ev ?? 0)?.['condom'] !== 1) {
      // TODO-QSP: dynamic text: You agreed to stop using condoms with <<$npcdesc>> and he makes no move to get o...
      scene.text(`You agreed to stop using condoms with ${((s as any).npcdesc ?? 0)} and he makes no move to get one.`);
      if (((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === 'when_safe'  ||  ((s as any).npc_creampie_permission ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        qspCall(s, 'sex_ev_condoms', 'safeday_check');
      } else {
        qspCall(s, 'sex_ev_sex', 'position_choose');
        qspCall(s, 'sex_ev_condoms', 'dont_cum_in_me');
        qspCall(s, 'sex_ev_condoms', 'pc_safe_day');
        qspCall(s, 'sex_ev_condoms', 'pc_dangerous_day');
        qspCall(s, 'sex_ev_condoms', 'reenable_condoms1');
        qspCall(s, 'sex_ev_condoms', 'no_more_free_creampies1');
        qspCall(s, 'sex_ev_condoms', 'already_creampie1');
      }
      if (((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === 'at_will'  ||  ((s as any).npc_creampie_permission ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
        ((s as any).sex_ev ?? {})['creampie_allowance'] = 1;
      }
    } else {
      if (((s as any).npc_bareback ?? 0)?.[String((s as any).npcID ?? 0)] === 'when_safe'  &&  ((s as any).sex_ev ?? 0)?.['no_condom'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['condom'] !== 1) {
        if (((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === 'when_safe') {
          qspCall(s, 'sex_ev_condoms', 'safeday_check');
        } else {
          // TODO-QSP: dynamic text: "Is it safe?" <<$npcdesc>> asks. "Can we go bareback?"
          scene.text(`"Is it safe?" ${((s as any).npcdesc ?? 0)} asks. "Can we go bareback?"`);
          qspCall(s, 'sex_ev_condoms', 'bareback_check');
        }
      } else {
        if (((s as any).sex_ev ?? 0)?.['condom'] === 0) {
          if (((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
            qspCall(s, 'sex_ev_condoms', 'condom_conscious_npc');
          } else {
            if (((s as any).sex_ev ?? 0)?.['condom_count'] > 0  &&  ((Math.floor(Math.random() * 2) + 0) + (Math.floor(Math.random() * (((s as any).npc_diligent ?? 0)?.[String((s as any).npcID ?? 0)] - 0 + 1)) + (0)) - ((s as any).npc_risktaker ?? 0)?.[String((s as any).npcID ?? 0)] >= 1  ||  ((s as any).npc_always_condoms ?? 0)?.[String((s as any).npcID ?? 0)] === 1)  &&  ((((s as any).npc_risktaker ?? 0)?.[String((s as any).npcID ?? 0)] !== 1  &&  ((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] !== 'pullout')  ||  (((s as any).npc_risktaker ?? 0)?.[String((s as any).npcID ?? 0)] !== 1  &&  ((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] !== 'facial'))  &&  ((s as any).npc_no_condoms ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
              qspCall(s, 'sex_ev_condoms', 'npc_condom_use');
            } else {
              if (((s as any).sex_ev ?? 0)?.['creampie_allowance'] === 1  &&  ((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === ''  &&  ((s as any).npc_creampie_permission ?? 0)?.[String((s as any).npcID ?? 0)] < 1) {
                ((s as any).sex_ev ?? {})['no_condom'] = 1;
                // TODO-QSP: dynamic text: "Is it really okay for me to come inside?" <<$npcdesc>> asks as he gets into pos...
                scene.text(`"Is it really okay for me to come inside?" ${((s as any).npcdesc ?? 0)} asks as he gets into position.`);
                scene.text('You nod back, smiling warmly. He returns the smile and starts pushing his way in.');
                scene.actions([{ label: 'Continue', goto: ['sex_ev_sex', 'position_choose'] }]);
              } else {
                // TODO-QSP: dynamic text: <<$npcdesc>> makes no indication that he's going to put on a condom.
                scene.text(`${((s as any).npcdesc ?? 0)} makes no indication that he's going to put on a condom.`);
                if (((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === 'when_safe'  ||  ((s as any).npc_creampie_permission ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
                  qspCall(s, 'sex_ev_condoms', 'safeday_check');
                } else {
                  if ((((s as any).npc_risktaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] !== 'creampie')  ||  (((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] > 1  &&  ((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie')) {
                    scene.text('"Don\'t worry. I\'ll pull out," he says.');
                    qspCall(s, 'sex_ev_condoms', 'npc_pullout_game');
                    qspCall(s, 'sex_ev_condoms', 'pc_dangerous_day');
                    qspCall(s, 'sex_ev_condoms', 'lube_up1');
                    qspCall(s, 'sex_ev_condoms', 'started_bc1');
                  } else {
                    qspCall(s, 'sex_ev_condoms', 'pc_condom_ask');
                    qspCall(s, 'sex_ev_condoms', 'pc_condoms');
                    qspCall(s, 'sex_ev_condoms', 'dont_cum_in_me');
                    qspCall(s, 'sex_ev_condoms', 'pc_safe_day');
                    qspCall(s, 'sex_ev_condoms', 'pc_dangerous_day');
                    qspCall(s, 'sex_ev_condoms', 'already_creampie1');
                    qspCall(s, 'sex_ev_condoms', 'lube_up1');
                    qspCall(s, 'sex_ev_condoms', 'started_bc1');
                    if (((s as any).stat ?? 0)?.['think_virgin'] === 1  &&  ((s as any).sex_ev ?? 0)?.['virgin_fuck'] === 0  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
                      qspCall(s, 'sex_ev_condoms', 'virgin_condom_ask1');
                    }
                  }
                }
              }
            }
          }
        } else {
          if (((s as any).sex_ev ?? 0)?.['using_pc_condoms'] === 1) {
            if (((s as any).sex_ev ?? 0)?.['condom'] === 1) {
              qspCall(s, 'sex_ev_condoms', 'pc_use_condoms');
            } else {
              qspCall(s, 'sex_ev_condoms', 'pc_condoms');
            }
          } else {
            if (((s as any).sex_ev ?? 0)?.['condom'] === 1) {
              if (((s as any).sex_ev ?? 0)?.['condoms_used'] >= ((s as any).sex_ev ?? 0)?.['condom_count']) {
                qspCall(s, 'sex_ev_condoms', 'npc_out_of_condoms');
              } else {
                qspCall(s, 'sex_ev_condoms', 'npc_condom_use');
              }
            }
          }
        }
      }
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['pc_out_of_condoms'] === 1  &&  ((s as any).sex_ev ?? 0)?.['npc_used_all_condoms'] === 0) {
      if (((s as any).sex_ev ?? 0)?.['sleepover'] > 0) {
        scene.text('You\'re about to get into position when you suddenly remember you ran out of condoms last night.');
        scene.text('"Uhm... do you have any condoms?"');
        qspCall(s, 'sex_ev_condoms', 'pc_no_condoms_left2');
      } else {
        scene.text('"I think that was my last condom..." you say.');
        qspCall(s, 'sex_ev_condoms', 'pc_no_condoms_left');
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['npc_used_all_condoms'] > 0) {
        qspCall(s, 'sex_ev_condoms', 'npc_out_of_condoms');
      }
    }
  }
  scene.build();
}

function enterCondomWait(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['no_condom'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['skip_condom'] !== 1) {
    scene.actions([
      { label: 'Wait! (condoms)', handler: (st: GameState) => {
    if (((s as any).mc_inventory ?? 0)?.['normal_condoms'] > 0  ||  (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0  &&  ((s as any).preziktype ?? 0) === 0)) {
      scene.actions([
        { label: 'Get a condom from your bag', handler: (st: GameState) => {
    scene.text('"Wait!" you yelp and scramble for your bag to pull out a condom, holding it between you. "You need to use a condom. Please?"');
  }, goto: ['sex_ev_condoms', 'pc_condoms2'] },
      ]);
    }
    qspCall(s, 'sex_ev_condoms', 'pc_dangerous_day');
    scene.actions([
      { label: 'Ask him to use a condom', handler: (st: GameState) => {
    scene.text('"Wait!" you yelp. "You need to use a condom!"');
    if ((((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'pullout'  ||  ((s as any).npc_arrogant ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_risktaker ?? 0)?.[String((s as any).npcID ?? 0)] > 0)  &&  ((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] < 1  &&  ((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      // TODO-QSP: dynamic text: "Don't worry," <<$npcdesc>> says. "I've got pullout game."
      scene.text(`"Don't worry," ${((s as any).npcdesc ?? 0)} says. "I've got pullout game."`);
      ((s as any).npc_pullout_game ?? {})[String((s as any).npcID ?? 0)] = 1;
      scene.actions([{ label: 'Continue', goto: ['sex_ev_condoms', 'npc_pullout_game'] }]);
    } else {
      if (((s as any).npc_no_condoms ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
        scene.actions([{ label: 'Continue', goto: ['sex_ev_condoms', 'npc_doesnt_use_condoms'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['sex_ev_condoms', 'pc_condom_ask3'] }]);
      }
    }
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterPcNeedCondoms(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mc_inventory ?? 0)?.['normal_condoms'] > 0  ||  (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0  &&  ((s as any).preziktype ?? 0) === 0)) {
    scene.actions([
      { label: 'Use your condoms', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['condom_motive'] = 'safety';
    scene.text('"Sorry," you say, pulling a condom from your bag. "But we need to be safe today."');
    qspCall(s, 'sex_ev_condoms', 'pc_condoms2');
  } },
    ]);
  }
  scene.build();
}

function enterPcCondoms(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mc_inventory ?? 0)?.['normal_condoms'] > 0  ||  (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0  &&  ((s as any).preziktype ?? 0) === 0)) {
    scene.actions([
      { label: 'Pull out a condom', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['using_pc_condoms'] = 1;
    ((s as any).sex_ev ?? {})['condom_motive'] = 'safety';
    // TODO-QSP: dynamic text: Before <<$npcdesc>> can penetrate you, you take a swift moment to grab a condom ...
    scene.text(`Before ${((s as any).npcdesc ?? 0)} can penetrate you, you take a swift moment to grab a condom out of your bag.`);
    scene.text('"Condom first?" you ask, holding it up between you.');
    qspCall(s, 'sex_ev_condoms', 'pc_condoms2');
  } },
    ]);
  }
  scene.build();
}

function enterNpcLatexAllergy(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pc_know_npc_latex_allrg ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    if (((s as any).npc_assertive ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: "Come on. You know I'm allergic to them," <<$npcdesc>> frowns.
      scene.text(`"Come on. You know I'm allergic to them," ${((s as any).npcdesc ?? 0)} frowns.`);
    } else {
      // TODO-QSP: dynamic text: "I'm allergic, remember?" <<$npcdesc>> says embarrassedly.
      scene.text(`"I'm allergic, remember?" ${((s as any).npcdesc ?? 0)} says embarrassedly.`);
    }
  } else {
    if (((s as any).npc_assertive ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: "I can't use condoms," <<$npcdesc>> says. "I'm allergic to latex. Makes my dick ...
      scene.text(`"I can't use condoms," ${((s as any).npcdesc ?? 0)} says. "I'm allergic to latex. Makes my dick break out in a rash."`);
    } else {
      // TODO-QSP: dynamic text: "I'm, uhh, allergic to condoms..." <<$npcdesc>> says uncomfortably.
      scene.text(`"I'm, uhh, allergic to condoms..." ${((s as any).npcdesc ?? 0)} says uncomfortably.`);
      scene.text('"You\'re kidding."');
      scene.text('"Latex allergy," he replies with an embarrassed smile. "Makes my dick break out in a really bad rash."');
    }
  }
  ((s as any).pc_know_npc_latex_allrg ?? {})[String((s as any).npcID ?? 0)] = 1;
  scene.build();
}

function enterPcCondoms2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_no_condoms ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    if (((s as any).npc_latex_allrg ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspCall(s, 'sex_ev_condoms', 'npc_latex_allergy');
    } else {
      ((s as any).sex_ev ?? {})['npc_doesnt_want_condoms'] = 1;
      scene.text('"Come on," he moans. "Do we have to? I hate condoms."');
    }
    qspCall(s, 'sex_ev_condoms', 'no_condom1');
  } else {
    if ((Math.floor(Math.random() * 10) + 1) >= 7  &&  ((s as any).npc_bareback ?? 0)?.[String((s as any).npcID ?? 0)] !== 'when_safe') {
      ((s as any).sex_ev ?? {})['npc_doesnt_want_condoms'] = 1;
      scene.text('"Come on," he moans. "Do we have to use one today?"');
      qspCall(s, 'sex_ev_condoms', 'no_condom1');
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> nods and you sigh in relief as he takes it from you, tearing open t...
      scene.text(`${((s as any).npcdesc ?? 0)} nods and you sigh in relief as he takes it from you, tearing open the package and clumsily rolling the little rubber onto his cock.`);
      qspCall(s, 'sex_ev_stats', 'pc_condom_stats');
      if (((s as any).sex_ev ?? 0)?.['position'] !== 'miss'  ||  ((s as any).sex_ev ?? 0)?.['position'] !== 'doggy'  ||  ((s as any).sex_ev ?? 0)?.['position'] !== 'cowgirl') {
        ((s as any).sex_ev ?? {})['position'] = 'miss';
      }
      scene.actions([
        { label: 'Let <<$npcdesc>> fuck you', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_<<$sex_ev[''position'']>>', '<<$sex_ev[''position...
  } },
      ]);
    }
  }
  scene.build();
}

function enterPcUseCondoms(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mc_inventory ?? 0)?.['normal_condoms'] > 0  ||  (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0  &&  ((s as any).preziktype ?? 0) === 0)) {
    scene.actions([
      { label: 'Put a condom on him', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_stats', 'pc_condom_stats');
    scene.img('images/shared/sex/misc/condom_put.jpg');
    if (((s as any).sex_ev ?? 0)?.['first_condom'] === 0) {
      ((s as any).sex_ev ?? {})['first_condom'] = 1;
      if (((s as any).sex_ev ?? 0)?.['loc'] === 'family_home') {
        scene.text('Leaning over the side of the bed, you reach into your desk drawer, the one where you hide all your birth control from your mother. After fishing around blindly for a few moments, you mange to find a condom, upon which you tear open the packaging and roll it onto his cock for him.');
      } else {
        if (((s as any).sex_ev ?? 0)?.['loc'] === 'player_home') {
          scene.text('Leaning over the side of the bed, you reach into the nightstand where you keep your birth control. After fishing around blindly for a few moments, you mange to find a condom, upon which you tear open the packaging and roll it onto his cock for him.');
        } else {
          // TODO-QSP: dynamic text: Leaning over the side of the bed, you reach down to your purse. After fishing ar...
          scene.text(`Leaning over the side of the bed, you reach down to your purse. After fishing around for a few moments, you pull out a condom. You tear the packaging open and roll it onto ${((s as any).npcdesc ?? 0)}'s cock for him.`);
        }
      }
      scene.text('"Gotta practice safe sex," you wink.');
    } else {
      scene.text('You grab another condom from your stash and roll it on to his cock.');
    }
  }, goto: ['sex_ev_sex', 'position_choose'] },
      { label: 'Put a condom on him with your mouth', handler: (st: GameState) => {
    scene.img('images/shared/sex/misc/condom_mouth.mp4');
    qspCall(s, 'sex_ev_stats', 'pc_condom_stats');
    scene.text('You lean over the side of the bed and reach down to your purse. After fishing around for a few moments, you pull out a condom. You tear the packaging open, and place the rubber onto the tip of his penis, kissing it through the rubber. Then, using your fingers, you unroll it smoothly over the length of his cock, your lips following all the way down. You bob your head up and down a few more times to make sure it\'s all the way on before glancing up at him.');
    if (((s as any).sex_ev ?? 0)?.['first_condom'] === 0) {
      ((s as any).sex_ev ?? {})['first_condom'] = 1;
      scene.text('"Gotta practice safe sex," you smile.');
    }
  }, goto: ['sex_ev_sex', 'position_choose'] },
    ]);
  } else {
    if (((s as any).sex_ev ?? 0)?.['using_pc_condoms'] === 1  &&  ((s as any).sex_ev ?? 0)?.['pc_out_of_condoms'] !== 1) {
      ((s as any).sex_ev ?? {})['pc_out_of_condoms'] = 1;
      if (((s as any).sex_ev ?? 0)?.['out_of_condoms'] === 1) {
        scene.text('"I think that was my last condom..." you say. "I guess that means we\'re both out...?"');
        // TODO-QSP: dynamic text: "I guess so," <<$npcdesc>> shrugs.
        scene.text(`"I guess so," ${((s as any).npcdesc ?? 0)} shrugs.`);
        qspCall(s, 'sex_ev_after', 'no_condom_end');
      } else {
        if (((s as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
          scene.text('"I think that was my last condom..." you say.');
          qspCall(s, 'sex_ev_condoms', 'pc_no_condoms_left');
        } else {
          scene.text('"Uhm..." You hesitate. "I don\'t think I have any on me..."');
          qspCall(s, 'sex_ev_condoms', 'pc_no_condoms_left');
        }
      }
      qspCall(s, 'sex_ev_condoms', 'no_sex_only');
      qspCall(s, 'sex_ev_condoms', 'pc_skip_the_condom');
    }
  }
  scene.build();
}

function enterPcNoCondomsLeft(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_after', 'no_condom_end');
  scene.actions([
    { label: 'Do you have any?', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
      // TODO-QSP: dynamic text: "But I'm not ready to stop," you grin, flexing your pussy around <<$npcdesc>>'s ...
      scene.text(`"But I'm not ready to stop," you grin, flexing your pussy around ${((s as any).npcdesc ?? 0)}'s cock inside you. "Have you got any?"`);
    } else {
      scene.text('"But I\'m not ready to stop," you say. "Have you got any?"');
    }
    qspCall(s, 'sex_ev_condoms', 'pc_no_condoms_left2');
  } },
  ]);
  scene.build();
}

function enterPcNoCondomsLeft2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    // TODO-QSP: dynamic text: "I always have condoms," <<$npcdesc>> says. "You don't have to keep buying them ...
    scene.text(`"I always have condoms," ${((s as any).npcdesc ?? 0)} says. "You don't have to keep buying them if you don't want to, you know. I order in bulk."`);
    qspCall(s, 'sex_ev_sex', 'reset');
    qspCall(s, 'sex_ev_condoms', 'bulk_condoms');
  } else {
    if (((s as any).sex_ev ?? 0)?.['condom_count'] > 0  &&  ((s as any).sex_ev ?? 0)?.['condoms_used'] < ((s as any).sex_ev ?? 0)?.['condom_count']) {
      // TODO-QSP: dynamic text: "Yeah, I have some," <<$npcdesc>> says.
      scene.text(`"Yeah, I have some," ${((s as any).npcdesc ?? 0)} says.`);
      qspCall(s, 'sex_ev_sex', 'reset');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_condoms', 'npc_condom_use');
  } },
      ]);
    } else {
      if (((s as any).npc_no_condoms_know ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        // TODO-QSP: dynamic text: "Come on," <<$npcdesc>> says, rolling his eyes. "You know I hate using condoms. ...
        scene.text(`"Come on," ${((s as any).npcdesc ?? 0)} says, rolling his eyes. "You know I hate using condoms. Lucky you can even talk me into using yours."`);
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>> shakes his head.
        scene.text(`${((s as any).npcdesc ?? 0)} shakes his head.`);
        scene.text('"I don\'t."');
      }
      qspCall(s, 'sex_ev_after', 'no_condom_end');
      qspCall(s, 'sex_ev_condoms', 'pc_skip_the_condom');
      qspCall(s, 'sex_ev_condoms', 'no_sex_only');
    }
  }
  scene.build();
}

function enterPcCondomAsk(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_condoms', 'pc_condom_ask2');
  scene.actions([
    { label: 'Don\'t say anything', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['no_condom'] = 1;
    // TODO-QSP: dynamic text: <<$npcdesc>> takes your silence as consent and begins maneuvering into position.
    scene.text(`${((s as any).npcdesc ?? 0)} takes your silence as consent and begins maneuvering into position.`);
  }, goto: ['sex_ev_sex', 'position_choose'] },
  ]);
  scene.build();
}

function enterPcCondomAsk2(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Ask him to put on a condom', handler: (st: GameState) => {
    if (((s as any).npc_bareback ?? 0)?.[String((s as any).npcID ?? 0)] === 'when_safe') {
      scene.text('"We need a condom today," you shake your head.');
      ((s as any).sex_ev ?? {})['condom_motive'] = 'pregnancy';
    } else {
      scene.text('"Could you put on a condom?" you ask.');
      ((s as any).sex_ev ?? {})['condom_motive'] = 'safety';
    }
    if (((s as any).npcID ?? 0) === 'A34') {
      qspCall(s, 'sex_ev_A34', 'kolka_condoms');
    } else {
      if ((((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'pullout'  ||  ((s as any).npc_arrogant ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_risktaker ?? 0)?.[String((s as any).npcID ?? 0)] > 0)  &&  ((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] < 1  &&  ((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        // TODO-QSP: dynamic text: "Don't worry," <<$npcdesc>> says. "I've got pullout game."
        scene.text(`"Don't worry," ${((s as any).npcdesc ?? 0)} says. "I've got pullout game."`);
        ((s as any).npc_pullout_game ?? {})[String((s as any).npcID ?? 0)] = 1;
        qspCall(s, 'sex_ev_condoms', 'npc_pullout_game');
      } else {
        if (((s as any).npc_no_condoms ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
          qspCall(s, 'sex_ev_condoms', 'npc_doesnt_use_condoms');
        } else {
          qspCall(s, 'sex_ev_condoms', 'pc_condom_ask3');
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterPcCondomAsk3(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_latex_allrg ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    qspCall(s, 'sex_ev_condoms', 'npc_latex_allergy');
    qspCall(s, 'sex_ev_condoms', 'no_condom1');
  } else {
    if ((Math.floor(Math.random() * 10) + 1) >= 7  &&  ((s as any).npc_bareback ?? 0)?.[String((s as any).npcID ?? 0)] !== 'when_safe') {
      if (((s as any).sex_ev ?? 0)?.['condom_count'] > ((s as any).sex_ev ?? 0)?.['condoms_used']) {
        ((s as any).sex_ev ?? {})['npc_doesnt_want_condoms'] = 1;
        scene.text('"Come on," he moans. "Do we have to use one today?"');
        qspCall(s, 'sex_ev_condoms', 'no_condom1');
      } else {
        scene.text('"I\'m all out. Don\'t have any left."');
        qspCall(s, 'sex_ev_condoms', 'no_condom2');
      }
    } else {
      qspCall(s, 'sex_ev_stats', 'npc_condom_stats');
      if (((s as any).sex_ev ?? 0)?.['loc'] === 'npc_home') {
        scene.text('He nods, reaching over to his nightstand to retrieve one.');
      } else {
        if (((s as any).sex_ev ?? 0)?.['loc'] === 'hotel_room') {
          scene.text('He nods, reaching into his suitcase to retrieve one.');
        } else {
          scene.text('He nods, reaching to retrieve one from his wallet.');
        }
      }
      qspCall(s, 'sex_ev_condoms', 'npc_condom_put_on');
    }
  }
  scene.build();
}

function enterPcSkipTheCondom(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'We could skip the condom', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['pc_skip_the_condom'] = 1;
    ((s as any).sex_ev ?? {})['skip_condom'] = 1;
    ((s as any).sex_ev ?? {})['no_condom'] = 1;
    ((s as any).sex_ev ?? {})['must_fuck'] = 1;
    qspCall(s, 'sex_ev_condoms', 'pulled_out_last_time');
    scene.actions([
      { label: 'Just this once?', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Maybe we can skip it..." you smile. "Just this once?"');
    qspCall(s, 'sex_ev_condoms', 'pc_skip_the_condom2');
  } },
      { label: 'What could go wrong?', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    ((s as any).sex_ev ?? {})['condom_motive'] = 'exception';
    scene.text('"Maybe we can skip it..." you smile. "What could go wrong?"');
    qspCall(s, 'sex_ev_condoms', 'pc_skip_the_condom2');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterPcSkipTheCondom2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['preg_risk'] === 'danger'  &&  ((s as any).npc_childfree ?? 0) === 1  &&  ((s as any).npc_no_condoms ?? 0)?.[String((s as any).npcID ?? 0)] < 1) {
    ((s as any).sex_ev ?? {})['no_condom'] = 0;
    // TODO-QSP: dynamic text: "Seems like a bad idea," <<$npcdesc>> says, shaking his head. "You said it's dan...
    scene.text(`"Seems like a bad idea," ${((s as any).npcdesc ?? 0)} says, shaking his head. "You said it's dangerous for you today. I don't want to take the risk."`);
    qspCall(s, 'sex_ev_condoms', 'no_sex_only');
    scene.actions([
      { label: 'Disappointed', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You sigh deeply as <<$npcdesc>> already starts to pull away from you.
    scene.text(`You sigh deeply as ${((s as any).npcdesc ?? 0)} already starts to pull away from you.`);
    qspCall(s, 'sex_ev_after', 'after_sex1');
  } },
      { label: 'You\'re probably right', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Yeah... You're probably right," you say ruefully as <<$npcdesc>> is already pul...
    scene.text(`"Yeah... You're probably right," you say ruefully as ${((s as any).npcdesc ?? 0)} is already pulling away from you.`);
    qspCall(s, 'sex_ev_after', 'after_sex1');
  } },
    ]);
  } else {
    ((s as any).sex_ev ?? {})['condom_motive'] = 'exception';
    scene.text('"Just this once," he smiles back.');
    scene.actions([{ label: 'Continue', goto: ['sex_ev_sex', 'position_choose'] }]);
  }
  scene.build();
}

function enterWillMorningAfterPill(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mc_inventory ?? 0)?.['morning_after_pill'] > 0) {
    scene.actions([
      { label: 'Have a morning after pill', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    ((s as any).sex_ev ?? {})['skip_condom'] = 1;
    ((s as any).sex_ev ?? {})['no_condom'] = 1;
    ((s as any).sex_ev ?? {})['must_fuck'] = 1;
    ((s as any).sex_ev ?? {})['ma_pill'] = 1;
    scene.text('"I have a morning after pill," you say. ');
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Buy a morning after pill tomorrow', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    ((s as any).sex_ev ?? {})['skip_condom'] = 1;
    ((s as any).sex_ev ?? {})['no_condom'] = 1;
    ((s as any).sex_ev ?? {})['must_fuck'] = 1;
    ((s as any).sex_ev ?? {})['ma_pill_tomorrow'] = 1;
    scene.text('"I\'ll buy a pill tomorrow," you say. ');
  } },
    ]);
  }
  scene.build();
}

function enterNpcCondomUse(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/misc/wait.mp4');
  ((s as any).sex_ev ?? {})['must_fuck'] = 1;
  ((s as any).sex_ev ?? {})['cock_inserted'] = 0;
  if (((s as any).sex_ev ?? 0)?.['fuck_count'] > 1  &&  ((s as any).sex_ev ?? 0)?.['last_cum'] === 'condom') {
    // TODO-QSP: dynamic text: <<$npcdesc>> swaps out his used condom for a new one.
    scene.text(`${((s as any).npcdesc ?? 0)} swaps out his used condom for a new one.`);
  } else {
    if (((s as any).sex_ev ?? 0)?.['fuck_count'] > 1) {
      // TODO-QSP: dynamic text: <<$npcdesc>> reaches for a new condom.
      scene.text(`${((s as any).npcdesc ?? 0)} reaches for a new condom.`);
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> reaches for a condom from his nightstand.
      scene.text(`${((s as any).npcdesc ?? 0)} reaches for a condom from his nightstand.`);
    }
  }
  qspCall(s, 'sex_ev_condoms', 'npc_condom_put_on');
  if (((s as any).sex_ev ?? 0)?.['virgin'] === 1  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
    qspCall(s, 'sex_ev_condoms', 'virgin_no_condom');
  } else {
    if (((s as any).sex_ev ?? 0)?.['condom'] === 0) {
      qspCall(s, 'sex_ev_condoms', 'temp_disable_condoms');
      if (((s as any).sex_ev ?? 0)?.['type'] !== 'hookup') {
        qspCall(s, 'sex_ev_condoms', 'disable_condoms');
      }
    }
  }
  scene.build();
}

function enterNpcCondomPutOn(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_sex', 'lube_up_condom1');
  scene.actions([
    { label: 'Wait for him', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_stats', 'npc_condom_stats');
    scene.img('images/shared/sex/misc/wait.mp4');
    if (((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
      scene.text('He tears open the packaging and begins rolling the rubber sleeve onto his cock. You wait patiently, watching him, thinking about what position you want to fuck him in.');
    } else {
      scene.text('He tears open the packaging and begins rolling the rubber sleeve onto his cock. You wait patiently, watching him, thinking about the next position you want him to fuck you in.');
    }
  }, goto: ['sex_ev_sex', 'position_choose'] },
    { label: 'Put it on for him', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_stats', 'npc_condom_stats');
    qspCall(s, 'arousal', 'foreplay_give', (-2));
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/misc/condom_put.jpg');
    // TODO-QSP: dynamic text: <<$npcdesc>> tears open the packaging when you swiftly reach over and pluck the ...
    scene.text(`${((s as any).npcdesc ?? 0)} tears open the packaging when you swiftly reach over and pluck the condom out of the wrapper.`);
    scene.text('"Here, let me," you say with a sexy smile. You gently roll the rubber sleeve down his shaft, squeezing just hard enough to make him twitch under your touch.');
  }, goto: ['sex_ev_sex', 'position_choose'] },
    { label: 'Put it on with your mouth', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_stats', 'npc_condom_stats');
    scene.img('images/shared/sex/misc/condom_mouth.mp4');
    // TODO-QSP: dynamic text: <<$npcdesc>> tears open the packaging when you swiftly reach over and pluck the ...
    scene.text(`${((s as any).npcdesc ?? 0)} tears open the packaging when you swiftly reach over and pluck the condom out of the wrapper.`);
    scene.text('"Here, let me," you say with a sexy smile. Placing it on the tip of his cock, you lean over and put your lips over both. Then, using both hands, you roll the sleeve down his shaft, following with your head, lips pressed tight against the rubber. Even through the rubber, you can feel the heat of his member against your tongue.');
    scene.text('You bob your head up and down a few times for good measure before coming up and flashing a grin.');
  }, goto: ['sex_ev_sex', 'position_choose'] },
  ]);
  scene.build();
}

function enterCondomConsciousNpc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['fuck_count'] <= 1) {
    // TODO-QSP: dynamic text: <<$npcdesc>> immediately reaches for a condom.
    scene.text(`${((s as any).npcdesc ?? 0)} immediately reaches for a condom.`);
  } else {
    if (((s as any).sex_ev ?? 0)?.['fuck_count'] > 1) {
      // TODO-QSP: dynamic text: <<$npcdesc>> reaches for another condom.
      scene.text(`${((s as any).npcdesc ?? 0)} reaches for another condom.`);
    }
  }
  if (((s as any).sex_ev ?? 0)?.['virgin'] === 1  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
    qspCall(s, 'sex_ev_condoms', 'virgin_no_condom');
  }
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_condoms', 'npc_condom_use');
  } },
  ]);
  scene.build();
}

function enterBulkCondoms(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'money', 'can_afford', 2000) !== 1) {
    scene.actions([
      { label: 'Good, money\'s tight', handler: (st: GameState) => {
    scene.text('"That would be great," you smile. "I don\'t have a lot of spare cash on hand, so not buying them myself would save a lot of cash.');
    qspCall(s, 'sex_ev_condoms', 'npc_condom_put_on');
  } },
    ]);
  }
  scene.actions([
    { label: 'If you\'re offering', handler: (st: GameState) => {
    scene.text('"Well, if you\'re offering..." you say gratefully.');
    qspCall(s, 'sex_ev_condoms', 'npc_condom_put_on');
  } },
    { label: 'I might take you up on that', handler: (st: GameState) => {
    scene.text('"I just might take you up on that..." you say.');
    qspCall(s, 'sex_ev_condoms', 'npc_condom_put_on');
  } },
    { label: 'I want to', handler: (st: GameState) => {
    scene.text('"I want to do my part," you smile. "I\'m enjoying the sex with you. Only fair that I pay for it too."');
    qspCall(s, 'sex_ev_condoms', 'npc_condom_put_on');
  } },
  ]);
  scene.build();
}

function enterNpcOutOfCondoms(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['npc_used_all_condoms'] = 1;
  // TODO-QSP: $sex_ev['bed_room']
  if (((s as any).sex_ev ?? 0)?.['fuck_count'] > 5) {
    // TODO-QSP: dynamic text: "I think that was my last condom," <<$npcdesc>> pants.
    scene.text(`"I think that was my last condom," ${((s as any).npcdesc ?? 0)} pants.`);
  } else {
    // TODO-QSP: dynamic text: "I think that was my last condom," <<$npcdesc>> says.
    scene.text(`"I think that was my last condom," ${((s as any).npcdesc ?? 0)} says.`);
  }
  qspCall(s, 'sex_ev_after', 'no_condom_end');
  qspCall(s, 'sex_ev_condoms', 'pc_skip_the_condom');
  if (((s as any).mc_inventory ?? 0)?.['normal_condoms'] > 0  ||  (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0  &&  ((s as any).preziktype ?? 0) === 0)) {
    scene.actions([
      { label: 'Use one of your condoms', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_stats', 'pc_condom_stats');
    scene.img('images/shared/sex/misc/condom_put.jpg');
    // TODO-QSP: iif(mc_inventory['normal_condoms'] = 1, '"That''s okay, I''ve got one."', '"That''s okay, I''ve got ...
    scene.text('You reach into your bag and pull out a condom, rolling it onto his cock.');
  }, goto: ['sex_ev_sex', 'position_choose'] },
      { label: 'Use one of your condoms (mouth)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['using_pc_condoms'] = 1;
    qspCall(s, 'sex_ev_stats', 'pc_condom_stats');
    scene.img('images/shared/sex/misc/condom_mouth.mp4');
    // TODO-QSP: iif(mc_inventory['normal_condoms'] = 1, '"That''s okay, I''ve got one."', '"That''s okay, I''ve got ...
    scene.text('You reach into your bag and pull out a condom, rolling it onto his cock with your mouth.');
  }, goto: ['sex_ev_sex', 'position_choose'] },
    ]);
  }
  qspCall(s, 'sex_ev_condoms', 'still_got_pullout_game');
  scene.build();
}

function enterNpcPulloutGame(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['pullout_game'] = 1;
  qspCall(s, 'sex_ev_condoms', 'insist_need_condom');
  qspCall(s, 'sex_ev_condoms', 'no_condom_pullout_allow');
  qspCall(s, 'sex_ev_condoms', 'pulled_out_last_time');
  qspCall(s, 'sex_ev_condoms', 'didnt_pull_out_last_time');
  if (((s as any).npc_no_creampie_mistakes ?? 0)?.[String((s as any).npcID ?? 0)] <= ((s as any).npc_pullout_failure ?? 0)?.[String((s as any).npcID ?? 0)]  &&  ((s as any).npc_pullout_failure ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    scene.actions([
      { label: '"You always say that" (annoyed)', handler: (st: GameState) => {
    scene.text('"You always say that," you scowl. "And yet, for some reason I find myself full of cum half the time you say it."');
    scene.text('"I won\'t this time, I swear!" he insists.');
    qspCall(s, 'sex_ev_condoms', 'pulled_out_last_time');
    qspCall(s, 'sex_ev_condoms', 'didnt_pull_out_last_time');
    scene.actions([
      { label: 'Allow it', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    scene.text('"... fine..." you sigh begrudgingly. "But you better pull out this time!"');
    scene.text('He nods eagerly as he gets into position.');
  }, goto: ['sex_ev_sex', 'position_choose'] },
      { label: 'Last chance', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    ((s as any).npc_last_pullout_chance ?? {})[String((s as any).npcID ?? 0)] = (((s as any).npc_last_pullout_chance ?? {})[String((s as any).npcID ?? 0)] ?? 0) + (1);
    scene.text('"... fine..." you sigh begrudgingly. "But this is your last chance!"');
    if (((s as any).npc_last_pullout_chance ?? 0)?.[String((s as any).npcID ?? 0)] > 1  &&  (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0)) {
      scene.text('"Yeah, yeah, sure," he snickers back as he gets into position. "You\'ve said that before too."');
    } else {
      scene.text('He nods eagerly as he gets into position.');
    }
  }, goto: ['sex_ev_sex', 'position_choose'] },
      { label: '<i>Need</i> a condom', handler: (st: GameState) => {
    scene.text('"Not a chance," you reply. "We\'re using one."');
    qspCall(s, 'sex_ev_condoms', 'pc_dangerous_day_condom_insist2');
  } },
    ]);
  } },
      { label: '"You always say that" (tease)', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "You always say that and half the time I end up with a full load inside me," you...
    scene.text(`"You always say that and half the time I end up with a full load inside me," you giggle at ${((s as any).npcdesc ?? 0)}.`);
    scene.text('"I won\'t this time, I swear!" he insists.');
    qspCall(s, 'sex_ev_condoms', 'pulled_out_last_time');
    qspCall(s, 'sex_ev_condoms', 'didnt_pull_out_last_time');
    scene.actions([
      { label: 'Allow it', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    scene.text('"Oh <i>fine</i>..." you sigh with false drama, giving him a teasing smile. "I\'ll trust you this time."');
    scene.text('He nods eagerly as he gets into position.');
  }, goto: ['sex_ev_sex', 'position_choose'] },
      { label: 'Last chance', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    ((s as any).npc_last_pullout_chance ?? {})[String((s as any).npcID ?? 0)] = (((s as any).npc_last_pullout_chance ?? {})[String((s as any).npcID ?? 0)] ?? 0) + (1);
    scene.text('"Oh <i>fine</i>..." you sigh with false drama, giving him a teasing smile. "I\'ll give you one more chance to prove yourself."');
    if (((s as any).npc_last_pullout_chance ?? 0)?.[String((s as any).npcID ?? 0)] > 1  &&  (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0)) {
      scene.text('"Yeah, yeah, sure," he snickers back as he gets into position. "You\'ve said that before too."');
    } else {
      scene.text('He nods eagerly as he gets into position.');
    }
  }, goto: ['sex_ev_sex', 'position_choose'] },
      { label: '<i>Need</i> a condom', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Sorry, <<$npc_lovername[$npcID]>>," you smirk. "Gotta use a rubber this time."
    scene.text(`"Sorry, ${((s as any).npc_lovername ?? 0)?.[String((s as any).npcID ?? 0)]}," you smirk. "Gotta use a rubber this time."`);
    qspCall(s, 'sex_ev_condoms', 'pc_dangerous_day_condom_insist2');
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).npc_pullout_failure ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.actions([
        { label: '"<i>Most</i> of the time" (annoyed)', handler: (st: GameState) => {
    // TODO-QSP: '"<i>Most</i> of the time," you scowl. "But it only takes one fuck up to get me pregnant.' + iif(npc...
    if (((s as any).npc_pay_for_ma_pill ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: "At least I paid for it, right?" <<$npcdesc>> grins back.
      scene.text(`"At least I paid for it, right?" ${((s as any).npcdesc ?? 0)} grins back.`);
    } else {
      if ((((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0)  &&  ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] < 1) {
        // TODO-QSP: dynamic text: "Everybody makes mistakes," <<$npcdesc>> grins back.
        scene.text(`"Everybody makes mistakes," ${((s as any).npcdesc ?? 0)} grins back.`);
      } else {
        // TODO-QSP: dynamic text: At least <<$npcdesc>> has the decency to look embarrassed.
        scene.text(`At least ${((s as any).npcdesc ?? 0)} has the decency to look embarrassed.`);
      }
    }
    qspCall(s, 'sex_ev_condoms', 'pulled_out_last_time');
    qspCall(s, 'sex_ev_condoms', 'didnt_pull_out_last_time');
    qspCall(s, 'sex_ev_condoms', 'no_condom_allow_annoyed');
    scene.actions([
      { label: '<i>Need</i> a condom', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Sorry, <<$npc_lovername[$npcID]>>," you smirk. "Gotta use a rubber this time."
    scene.text(`"Sorry, ${((s as any).npc_lovername ?? 0)?.[String((s as any).npcID ?? 0)]}," you smirk. "Gotta use a rubber this time."`);
    qspCall(s, 'sex_ev_condoms', 'pc_dangerous_day_condom_insist2');
  } },
    ]);
  } },
        { label: '"<i>Most</i> of the time" (tease)', handler: (st: GameState) => {
    // TODO-QSP: '"<i>Most</i> of the time," you say with a meaningful smirk.' + iif(npc_pullout_failure_last_time[$n...
    if (((s as any).npc_pay_for_ma_pill ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: "At least I paid for it, right?" <<$npcdesc>> grins back.
      scene.text(`"At least I paid for it, right?" ${((s as any).npcdesc ?? 0)} grins back.`);
    } else {
      if ((((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0)  &&  ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] < 1) {
        // TODO-QSP: dynamic text: "Everybody makes mistakes," <<$npcdesc>> grins back.
        scene.text(`"Everybody makes mistakes," ${((s as any).npcdesc ?? 0)} grins back.`);
      } else {
        // TODO-QSP: dynamic text: At least <<$npcdesc>> has the decency to look embarrassed.
        scene.text(`At least ${((s as any).npcdesc ?? 0)} has the decency to look embarrassed.`);
      }
    }
    qspCall(s, 'sex_ev_condoms', 'pulled_out_last_time');
    qspCall(s, 'sex_ev_condoms', 'didnt_pull_out_last_time');
    qspCall(s, 'sex_ev_condoms', 'no_condom_allow_amused');
    scene.actions([
      { label: '<i>Need</i> a condom', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Sorry, <<$npc_lovername[$npcID]>>," you smirk. "Gotta use a rubber this time."
    scene.text(`"Sorry, ${((s as any).npc_lovername ?? 0)?.[String((s as any).npcID ?? 0)]}," you smirk. "Gotta use a rubber this time."`);
    qspCall(s, 'sex_ev_condoms', 'pc_dangerous_day_condom_insist2');
  } },
    ]);
  } },
      ]);
    }
  }
  if (((s as any).stat ?? 0)?.['preg_risk'] === 'safe') {
    scene.actions([
      { label: 'It\'s a safe day', handler: (st: GameState) => {
    scene.actions([
      { label: 'Good day to go bareback', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['preg_risk'] = 'safe';
    scene.text('"It\'s a safe day in my cycle anyways," you smile. "A good day to go bareback."');
  }, goto: ['sex_ev_sex', 'position_choose'] },
      { label: 'No need to pull out', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['preg_risk'] = 'safe';
    ((s as any).sex_ev ?? {})['creampie_allowance'] = 1;
    ((s as any).sex_ev ?? {})['pullout_game'] = 0;
    scene.text('"You don\'t have to," you say with a wry smile. "It\'s a safe day in my cycle."');
  }, goto: ['sex_ev_sex', 'position_choose'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).stat ?? 0)?.['preg_risk'] === 'prob_safe') {
      scene.actions([
        { label: 'It\'s probably safe', handler: (st: GameState) => {
    scene.actions([
      { label: 'Good day to go bareback', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['preg_risk'] = 'prob_safe';
    scene.text('"It\'s a relatively safe day in my cycle," you smile. "It should be okay to go bareback."');
  }, goto: ['sex_ev_sex', 'position_choose'] },
      { label: 'No need to pull out', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['preg_risk'] = 'prob_safe';
    ((s as any).sex_ev ?? {})['creampie_allowance'] = 1;
    ((s as any).sex_ev ?? {})['pullout_game'] = 0;
    scene.text('"You don\'t have to," you say with a wry smile. "It should be a safe day in my cycle."');
  }, goto: ['sex_ev_sex', 'position_choose'] },
    ]);
  } },
      ]);
    }
  }
  scene.build();
}

function enterNoCondomAllowAnnoyed(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Allow it', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    scene.text('"... fine..." you sigh begrudgingly. "But you better pull out this time!"');
    scene.text('He nods eagerly as he gets into position.');
  }, goto: ['sex_ev_sex', 'position_choose'] },
    { label: 'Last chance', handler: (st: GameState) => {
    ((s as any).npc_last_pullout_chance ?? {})[String((s as any).npcID ?? 0)] = (((s as any).npc_last_pullout_chance ?? {})[String((s as any).npcID ?? 0)] ?? 0) + (1);
    ((s as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    scene.text('"... fine..." you sigh begrudgingly. "But this is your last chance!"');
    if (((s as any).npc_last_pullout_chance ?? 0)?.[String((s as any).npcID ?? 0)] > 1  &&  (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0)) {
      scene.text('"Yeah, yeah, sure," he snickers back as he gets into position. "You\'ve said that before too."');
    } else {
      scene.text('He nods eagerly as he gets into position.');
    }
  }, goto: ['sex_ev_sex', 'position_choose'] },
  ]);
  scene.build();
}

function enterNoCondomAllowAmused(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Allow it', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    scene.text('"Oh <i>fine</i>..." you sigh with false drama, giving him a teasing smile. "I\'ll trust you this time."');
    scene.text('He nods eagerly as he gets into position.');
  }, goto: ['sex_ev_sex', 'position_choose'] },
    { label: 'Last chance', handler: (st: GameState) => {
    ((s as any).npc_last_pullout_chance ?? {})[String((s as any).npcID ?? 0)] = (((s as any).npc_last_pullout_chance ?? {})[String((s as any).npcID ?? 0)] ?? 0) + (1);
    ((s as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    scene.text('"Oh <i>fine</i>..." you sigh with false drama, giving him a teasing smile. "I\'ll give you one more chance to prove yourself."');
    if (((s as any).npc_last_pullout_chance ?? 0)?.[String((s as any).npcID ?? 0)] > 1  &&  (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0)) {
      scene.text('"Yeah, yeah, sure," he snickers back as he gets into position. "You\'ve said that before."');
    } else {
      scene.text('He nods eagerly as he gets into position.');
    }
  }, goto: ['sex_ev_sex', 'position_choose'] },
  ]);
  scene.build();
}

function enterPulledOutLastTime(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_no_creampie_mistakes_last_time ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    scene.actions([
      { label: 'It turned out well last time', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['no_condom'] = 1;
    ((s as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    // TODO-QSP: dynamic text: "Well... You did a good job of pulling out the last time..." you smile warmly at...
    scene.text(`"Well... You did a good job of pulling out the last time..." you smile warmly at ${((s as any).npcdesc ?? 0)}. "Okay. Let's do it."`);
    scene.text('Your heart flutters in excitement as the both of you get into position to fuck. <i>Without</i> protection.');
  }, goto: ['sex_ev_sex', 'position_choose'] },
    ]);
  }
  scene.build();
}

function enterDidntPullOutLastTime(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_pullout_failure_last_time ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    scene.actions([
      { label: 'Like how he "pulled out" last time?', handler: (st: GameState) => {
    scene.actions([
      { label: 'Annoyed', handler: (st: GameState) => {
    scene.text('"Oh yeah, <i>really good</i> pullout game," you say flatly. "So good you don\'t even <i>need</i> to pull out!"');
    scene.text('You give him a pointed look to remind how the last time he filled you up with a load of swimmers.');
    if (((s as any).npc_pay_for_ma_pill ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: "At least I paid for it, right?" <<$npcdesc>> grins back.
      scene.text(`"At least I paid for it, right?" ${((s as any).npcdesc ?? 0)} grins back.`);
    } else {
      if ((((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0)  &&  ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] < 1) {
        // TODO-QSP: dynamic text: "Everybody makes mistakes," <<$npcdesc>> grins back.
        scene.text(`"Everybody makes mistakes," ${((s as any).npcdesc ?? 0)} grins back.`);
      } else {
        // TODO-QSP: dynamic text: At least <<$npcdesc>> has the decency to look embarrassed.
        scene.text(`At least ${((s as any).npcdesc ?? 0)} has the decency to look embarrassed.`);
      }
    }
    qspCall(s, 'sex_ev_condoms', 'no_condom_allow_annoyed');
    scene.actions([
      { label: '<i>Need</i> a condom', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Sorry, <<$npc_lovername[$npcID]>>," you smirk. "Gotta use a rubber this time."
    scene.text(`"Sorry, ${((s as any).npc_lovername ?? 0)?.[String((s as any).npcID ?? 0)]}," you smirk. "Gotta use a rubber this time."`);
    qspCall(s, 'sex_ev_condoms', 'pc_dangerous_day_condom_insist2');
  } },
    ]);
  } },
      { label: 'Amused', handler: (st: GameState) => {
    scene.text('"You mean like how you \'pulled out\' last time?" you snicker, pointedly reminding him how the last time you were together he filled you with a load of swimmers.');
    if (((s as any).npc_pay_for_ma_pill ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: "At least I paid for it, right?" <<$npcdesc>> grins back.
      scene.text(`"At least I paid for it, right?" ${((s as any).npcdesc ?? 0)} grins back.`);
    } else {
      if ((((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0)  &&  ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] < 1) {
        // TODO-QSP: dynamic text: "Everybody makes mistakes," <<$npcdesc>> grins back.
        scene.text(`"Everybody makes mistakes," ${((s as any).npcdesc ?? 0)} grins back.`);
      } else {
        // TODO-QSP: dynamic text: At least <<$npcdesc>> has the decency to look embarrassed.
        scene.text(`At least ${((s as any).npcdesc ?? 0)} has the decency to look embarrassed.`);
      }
    }
    qspCall(s, 'sex_ev_condoms', 'no_condom_allow_amused');
    scene.actions([
      { label: '<i>Need</i> a condom', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Sorry, <<$npc_lovername[$npcID]>>," you smirk. "Gotta use a rubber this time."
    scene.text(`"Sorry, ${((s as any).npc_lovername ?? 0)?.[String((s as any).npcID ?? 0)]}," you smirk. "Gotta use a rubber this time."`);
    qspCall(s, 'sex_ev_condoms', 'pc_dangerous_day_condom_insist2');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterStillGotPulloutGame(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_pullout_game ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    scene.actions([
      { label: '"Still got that pullout game?"', handler: (st: GameState) => {
    scene.img('images/shared/sex/misc/smile.jpg');
    ((s as any).sex_ev ?? {})['no_condom'] = 1;
    ((s as any).sex_ev ?? {})['must_fuck'] = 1;
    ((s as any).sex_ev ?? {})['pullout_game'] = 1;
    // TODO-QSP: dynamic text: "Still got that pullout game?" you ask <<$npcdesc>>, biting your lip and aiming ...
    scene.text(`"Still got that pullout game?" you ask ${((s as any).npcdesc ?? 0)}, biting your lip and aiming a sexy smirk at him.`);
    if (((s as any).sex_ev ?? 0)?.['npc_used_all_condoms'] === 1) {
      ((s as any).sex_ev ?? {})['skip_condom'] = 1;
      scene.text('"Hell yeah I do," he grins back, tossing the last used condom aside and wiping his dick for the next round.');
    } else {
      scene.text('"Hell yeah I do," he grins back, eagerly getting into position.');
    }
  }, goto: ['sex_ev_sex', 'position_choose'] },
    ]);
  }
  scene.build();
}

function enterNpcDoesntUseCondoms(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_latex_allrg ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    qspCall(s, 'sex_ev_condoms', 'npc_latex_allergy');
  } else {
    if (((s as any).npc_no_condoms_know ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        // TODO-QSP: dynamic text: "You know I don't use that shit," <<$npcdesc>> frowns. "It's bareback or nothing...
        scene.text(`"You know I don't use that shit," ${((s as any).npcdesc ?? 0)} frowns. "It's bareback or nothing."`);
      } else {
        // TODO-QSP: dynamic text: "Come on! We don't need condoms," <<$npcdesc>> insists.
        scene.text(`"Come on! We don't need condoms," ${((s as any).npcdesc ?? 0)} insists.`);
      }
    } else {
      ((s as any).npc_no_condoms_know ?? {})[String((s as any).npcID ?? 0)] = 1;
      // TODO-QSP: dynamic text: "I never use condoms," <<$npcdesc>> grunts. "It feels better bareback."
      scene.text(`"I never use condoms," ${((s as any).npcdesc ?? 0)} grunts. "It feels better bareback."`);
    }
  }
  qspCall(s, 'sex_ev_condoms', 'no_condom1');
  scene.build();
}

function enterNpcPromiseWontCreampie(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_condoms', 'insist_need_condom');
  qspCall(s, 'sex_ev_condoms', 'trust_no_creampie');
  qspCall(s, 'sex_ev_condoms', 'trust_no_creampie_nervous');
  qspCall(s, 'sex_ev_condoms', 'pc_skip_the_condom');
  qspCall(s, 'sex_ev_condoms', 'pc_dangerous_day_condom_insist');
  scene.build();
}

function enterInsistNeedCondom(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'We <i>need</i> a condom', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['condom_motive'] = 'safety';
    scene.text('"No," you say adamantly. "We <i>need</i> a condom. I\'m not fucking you without one."');
    if (((s as any).sex_ev ?? 0)?.['condom_count'] > 0  &&  ((s as any).sex_ev ?? 0)?.['using_pc_condoms'] !== 1) {
      scene.text('"Ugh, <i>fine</i>..." he sighs and grabs a rubber off his nightstand.');
      qspCall(s, 'sex_ev_condoms', 'npc_condom_put_on');
    } else {
      if (((s as any).sex_ev ?? 0)?.['using_pc_condoms'] === 1) {
        scene.text('"Ugh, <i>fine</i>..." he sighs and waits expectantly for you to give him one.');
        qspCall(s, 'sex_ev_condoms', 'pc_use_condoms');
      } else {
        scene.text('"Ugh, <i>fine</i>..." he sighs. "But I don\'t have any. Do you?"');
        if (((s as any).mc_inventory ?? 0)?.['normal_condoms'] === 0  &&  (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] === 0)) {
          scene.text('"No..." you say, a little embarrassed. "I thought you would."');
          if (((s as any).npc_no_condoms ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
            if (((s as any).npc_no_condoms_know ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
              scene.text('"I can\'t imagine why you\'d think that," he replies dryly. "You know I don\'t use them."');
            } else {
              ((s as any).npc_no_condoms_know ?? {})[String((s as any).npcID ?? 0)] = 1;
              scene.text('"Well I don\'t," he replies dryly. "I don\'t use them."');
            }
          } else {
            scene.text('"So... what should we do?"');
          }
          qspCall(s, 'sex_ev_after', 'no_condom_end');
          qspCall(s, 'sex_ev_condoms', 'no_sex_only');
          qspCall(s, 'sex_ev_condoms', 'pc_skip_the_condom');
        } else {
          qspCall(s, 'sex_ev_condoms', 'pc_use_condoms');
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterTrustNoCreampie(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'I guess I trust you', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['no_condom'] = 1;
    ((s as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('You hesitate for a moment before relenting.');
    // TODO-QSP: dynamic text: "I guess it's okay... I trust you," you smile as <<$npcdesc>> eagerly forgoes th...
    scene.text(`"I guess it's okay... I trust you," you smile as ${((s as any).npcdesc ?? 0)} eagerly forgoes the condom.`);
  }, goto: ['sex_ev_sex', 'position_choose'] },
  ]);
  scene.build();
}

function enterTrustNoCreampieNervous(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'I guess I trust you (nervous)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['no_condom'] = 1;
    ((s as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('You hesitate for a moment before relenting.');
    // TODO-QSP: dynamic text: "If you promise..." you say reluctantly as <<$npcdesc>> eagerly forgoes the cond...
    scene.text(`"If you promise..." you say reluctantly as ${((s as any).npcdesc ?? 0)} eagerly forgoes the condom.`);
  }, goto: ['sex_ev_sex', 'position_choose'] },
  ]);
  scene.build();
}

function enterCondomWhy2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
    if (((s as any).tabletkishot ?? 0) > 0) {
      scene.actions([
        { label: 'We don\'t need a condom (on the shot)', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_stats', 'birth_control_know');
    ((s as any).npc_know_not_bc ?? {})[String((s as any).npcID ?? 0)] = 0;
    ((s as any).sex_ev ?? {})['must_fuck'] = 1;
    ((s as any).sex_ev ?? {})['pc_skip_the_condom'] = 1;
    scene.text('"Hey," you smile, grabbing his arm. "We don\'t need condoms. I\'m on the shot."');
    if (((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
      ((s as any).sex_ev ?? {})['npc_condom_motive'] = 'adamant';
      // TODO-QSP: dynamic text: "I want to use one anyways," <<$npcdesc>> says, shaking his head and reaches bac...
      scene.text(`"I want to use one anyways," ${((s as any).npcdesc ?? 0)} says, shaking his head and reaches back for the condom. "Better to be safe."`);
      scene.text('Your jaw drops.');
      scene.text('<i>A free pass to go bareback and he doesn\'t take it? What\'s with this guy?</i>');
    } else {
      ((s as any).sex_ev ?? {})['no_condom'] = 1;
      // TODO-QSP: dynamic text: <<$npcdesc>> stops reaching and turns to meet your gaze, eyes filled with desire...
      scene.text(`${((s as any).npcdesc ?? 0)} stops reaching and turns to meet your gaze, eyes filled with desire, and your smile widens into a full blown grin.`);
    }
  }, goto: ['sex_ev_sex', 'position_choose'] },
      ]);
    } else {
      if (((s as any).pillcon2 ?? 0) > 0) {
        scene.actions([
          { label: 'We don\'t need a condom (on the pill)', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_stats', 'birth_control_know');
    ((s as any).npc_know_not_bc ?? {})[String((s as any).npcID ?? 0)] = 0;
    ((s as any).sex_ev ?? {})['must_fuck'] = 1;
    ((s as any).sex_ev ?? {})['pc_skip_the_condom'] = 1;
    scene.text('"Hey," you smile, grabbing his arm. "We don\'t need condoms. I\'m on the pill."');
    if (((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
      ((s as any).sex_ev ?? {})['npc_condom_motive'] = 'adamant';
      // TODO-QSP: dynamic text: "I want to use one anyways," <<$npcdesc>> says, shaking his head and reaches bac...
      scene.text(`"I want to use one anyways," ${((s as any).npcdesc ?? 0)} says, shaking his head and reaches back for the condom. "Better to be safe."`);
      scene.text('Your jaw drops.');
      scene.text('<i>A free pass to go bareback and he doesn\'t take it? What\'s with this guy?</i>');
    } else {
      ((s as any).sex_ev ?? {})['no_condom'] = 1;
      // TODO-QSP: dynamic text: <<$npcdesc>> stops reaching and turns to meet your gaze, eyes filled with desire...
      scene.text(`${((s as any).npcdesc ?? 0)} stops reaching and turns to meet your gaze, eyes filled with desire, and your smile widens into a full blown grin.`);
    }
  }, goto: ['sex_ev_sex', 'position_choose'] },
        ]);
      }
    }
  } else {
    scene.actions([
      { label: 'Lie about birth control', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['must_fuck'] = 1;
    qspCall(s, 'sex_ev_stats', 'birth_control_know');
    ((s as any).sex_ev ?? {})['pc_skip_the_condom'] = 1;
    ((s as any).npc_know_not_bc ?? {})[String((s as any).npcID ?? 0)] = 0;
    scene.text('"Hey," you smile, grabbing his arm. "We don\'t need condoms. I\'m on birth control."');
    if (((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
      ((s as any).sex_ev ?? {})['npc_condom_motive'] = 'adamant';
      // TODO-QSP: dynamic text: "I want to use one anyways," <<$npcdesc>> says, shaking his head and reaches bac...
      scene.text(`"I want to use one anyways," ${((s as any).npcdesc ?? 0)} says, shaking his head and reaches back for the condom. "Better to be safe."`);
      scene.text('Your jaw drops.');
      scene.text('<i>Son of a bitch! Why is this guy so fucking careful?!</i>');
    } else {
      ((s as any).sex_ev ?? {})['no_condom'] = 1;
      // TODO-QSP: dynamic text: Upon hearing your barefaced lie, <<$npcdesc>> stops reaching and turns to meet y...
      scene.text(`Upon hearing your barefaced lie, ${((s as any).npcdesc ?? 0)} stops reaching and turns to meet your gaze, eyes filled with desire. Your smile widens into a full blown grin.`);
    }
  }, goto: ['sex_ev_sex', 'position_choose'] },
    ]);
  }
  scene.actions([
    { label: 'We don\'t need a condom (feel better)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['pc_skip_the_condom'] = 1;
    scene.text('"Come on," you say, grabbing his arm. "Let\'s skip the condom. It\'ll feel better without one."');
    if (((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] === 2  ||  (((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1)) {
      ((s as any).sex_ev ?? {})['npc_condom_motive'] = 'adamant';
      // TODO-QSP: dynamic text: "Don't want to risk it," <<$npcdesc>> says, shaking his head and opens the condo...
      scene.text(`"Don't want to risk it," ${((s as any).npcdesc ?? 0)} says, shaking his head and opens the condom anyways, rolling it onto his cock.`);
    } else {
      if ((Math.floor(Math.random() * (100 - ((s as any).npc_willpwr ?? 0)?.[String((s as any).npcID ?? 0)] + 1)) + (((s as any).npc_willpwr ?? 0)?.[String((s as any).npcID ?? 0)])) < ((s as any).pcs_persuas ?? 0) + ((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)]) {
        ((s as any).sex_ev ?? {})['no_condom'] = 1;
        ((s as any).sex_ev ?? {})['condom'] = 0;
        // TODO-QSP: dynamic text: <<$npcdesc>> stops, looking back at you for a moment before smiling.
        scene.text(`${((s as any).npcdesc ?? 0)} stops, looking back at you for a moment before smiling.`);
        scene.text('"Okay," he says and leaves the rubber where it is.');
      } else {
        // TODO-QSP: dynamic text: "Don't want to risk it," <<$npcdesc>> says, shaking his head and opens the condo...
        scene.text(`"Don't want to risk it," ${((s as any).npcdesc ?? 0)} says, shaking his head and opens the condom anyways, rolling it onto his cock.`);
      }
    }
  }, goto: ['sex_ev_sex', 'position_choose'] },
  ]);
  scene.build();
}

function enterNoCondomLeave(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: <<$npcdesc>> continues to complain at you while you grab all of your belongings ...
  scene.text(`${((s as any).npcdesc ?? 0)} continues to complain at you while you grab all of your belongings and rush your way out the door, slamming it behind you.`);
  if (((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
    scene.text('Just because you wanted to sleep with him doesn\'t mean you\'ll allow yourself to get taken advantage of!');
  } else {
    if (((s as any).sex_ev ?? 0)?.['type'] === 'booty call') {
      scene.text('Just because he\'s your fuckbuddy doesn\'t mean he can take advantage of you!');
    } else {
      if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'boyfriend') {
        scene.text('Just because he\'s your boyfriend doesn\'t mean he can take advantage of you!');
      }
    }
  }
  scene.actions([
    { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
  ]);
  scene.build();
}

function enterNoCondomPulloutAllow(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Allow it (worried)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['no_condom'] = 1;
    ((s as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    scene.text('"Uhm... er..." You bite your lip nervously. "If you say so..."');
    scene.text('You can\'t help but gulp anxiously as the both of you get into position to fuck without protection.');
    if (((s as any).sex_ev ?? 0)?.['position'] === '') {
      scene.actions([{ label: 'Continue', goto: ['sex_ev_sex', 'position_choose'] }]);
    } else {
      // TODO-QSP: xgt 'sex_ev_<<$sex_ev[''position'']>>', '<<$sex_ev[''position'']>>_goto'
    }
  } },
    { label: 'Allow it (trusting)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['no_condom'] = 1;
    ((s as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    scene.text('"Okay, if you say so," you smile at him. "I\'m trusting you on this one."');
    scene.text('Your heart flutters in excitement as the both of you get into position to fuck. <i>Without</i> protection.');
    if (((s as any).sex_ev ?? 0)?.['position'] === '') {
      scene.actions([{ label: 'Continue', goto: ['sex_ev_sex', 'position_choose'] }]);
    } else {
      // TODO-QSP: xgt 'sex_ev_<<$sex_ev[''position'']>>', '<<$sex_ev[''position'']>>_goto'
    }
  } },
    { label: 'Allow it (carefree)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['no_condom'] = 1;
    ((s as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    scene.text('"Well then..." You twist your mouth in a sly smirk. "If you say you\'ve got game..."');
    scene.text('Your heart flutters in excitement as the both of you get into position to fuck. <i>Without</i> protection.');
    if (((s as any).sex_ev ?? 0)?.['position'] === '') {
      scene.actions([{ label: 'Continue', goto: ['sex_ev_sex', 'position_choose'] }]);
    } else {
      // TODO-QSP: xgt 'sex_ev_<<$sex_ev[''position'']>>', '<<$sex_ev[''position'']>>_goto'
    }
  } },
  ]);
  scene.build();
}

function enterNoCondom1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_latex_allrg ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
    scene.actions([
      { label: 'No way', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    if (((s as any).npc_condom_rule ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      ((s as any).sex_ev ?? {})['condom_motive'] = 'adamant';
      scene.text('"You know my rule," you say sternly. "We\'re not fucking without one!"');
    } else {
      if (((s as any).stat ?? 0)?.['preg_risk'] === 'danger'  &&  ((s as any).birth_control ?? 0)?.['think_safe'] !== 1) {
        ((s as any).sex_ev ?? {})['preg_risk'] = 'danger';
        ((s as any).sex_ev ?? {})['condom_motive'] = 'pregnancy';
        scene.text('"I\'m ovulating right now!" you say sternly. "I could get pregnant!');
      } else {
        ((s as any).sex_ev ?? {})['condom_motive'] = 'adamant';
        scene.text('"We\'re not fucking without one," you say sternly.');
      }
    }
    if (((s as any).sex_ev ?? 0)?.['buy_virginity'] > 0  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
      qspCall(s, 'sex_ev_virgin', 'no_condom_offer');
    } else {
      if (((s as any).sex_ev ?? 0)?.['preg_risk'] === 'danger'  &&  ((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
        ((s as any).sex_ev ?? {})['condom'] = 1;
        if (((s as any).sex_ev ?? 0)?.['using_pc_condoms'] === 1  &&  ((s as any).mc_inventory ?? 0)?.['normal_condoms'] > 0) {
          scene.text('"What the fuck! Why didn\'t you say so!" he says, immediately taking the condom from you and clumsily rolling the little rubber onto his cock.');
          qspCall(s, 'sex_ev_stats', 'pc_condom_stats');
          if (((s as any).sex_ev ?? 0)?.['position'] !== 'miss'  ||  ((s as any).sex_ev ?? 0)?.['position'] !== 'doggy'  ||  ((s as any).sex_ev ?? 0)?.['position'] !== 'cowgirl') {
            ((s as any).sex_ev ?? {})['position'] = 'miss';
          }
          scene.actions([
            { label: 'Let <<$npcdesc>> fuck you', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_<<$sex_ev[''position'']>>', '<<$sex_ev[''position...
  } },
          ]);
        } else {
          scene.text('"What the fuck! Why didn\'t you say so!" he says, immediately reaching for a condom.');
          scene.actions([
            { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_condoms', 'npc_condom_use');
  } },
          ]);
        }
      } else {
        if ((Math.floor(Math.random() * 10) + 1) < 8) {
          ((s as any).sex_ev ?? {})['condom'] = 1;
          ((s as any).sex_ev ?? {})['pc_insist_condom'] = 1;
          if (((s as any).sex_ev ?? 0)?.['using_pc_condoms'] === 1  &&  ((s as any).mc_inventory ?? 0)?.['normal_condoms'] > 0) {
            // TODO-QSP: dynamic text: "Ugh, fine," <<$npcdesc>> grumbles, taking the condom from you and clumsily roll...
            scene.text(`"Ugh, fine," ${((s as any).npcdesc ?? 0)} grumbles, taking the condom from you and clumsily rolling the little rubber onto his cock.`);
            qspCall(s, 'sex_ev_stats', 'pc_condom_stats');
            if (((s as any).sex_ev ?? 0)?.['position'] !== 'miss'  ||  ((s as any).sex_ev ?? 0)?.['position'] !== 'doggy'  ||  ((s as any).sex_ev ?? 0)?.['position'] !== 'cowgirl') {
              ((s as any).sex_ev ?? {})['position'] = 'miss';
            }
            scene.actions([
              { label: 'Let <<$npcdesc>> fuck you', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_<<$sex_ev[''position'']>>', '<<$sex_ev[''position...
  } },
            ]);
          } else {
            // TODO-QSP: dynamic text: "Ugh, fine," <<$npcdesc>> grumbles, reaching for a condom.
            scene.text(`"Ugh, fine," ${((s as any).npcdesc ?? 0)} grumbles, reaching for a condom.`);
            scene.actions([
              { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_condoms', 'npc_condom_use');
  } },
            ]);
          }
        } else {
          ((s as any).sex_ev ?? {})['dont_need_condom'] = 1;
          scene.text('"Come on," he complains. "It\'ll be fine. Let\'s skip it. Just this once."');
          qspCall(s, 'sex_ev_condoms', 'pc_skip_the_condom');
          scene.actions([
            { label: 'Not a big deal?!', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    if (((s as any).npc_condom_rule ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.text('"Not a big deal?! We said- You know what? <i>Fuck</i> you!"');
    } else {
      scene.text('"Not a big deal?! You don\'t have any idea how dangerous it is for m- You know what? <i>Fuck</i> you!"');
    }
    scene.text('"I\'m trying to but you won\'t let me!"');
    qspCall(s, 'sex_ev_condoms', 'no_condom_leave');
  } },
            { label: 'Just don\'t come inside me', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['dont_need_condom'] = 1;
    ((s as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    ((s as any).sex_ev ?? {})['must_fuck'] = 1;
    ((s as any).npc_rule_no_creampies ?? {})[String((s as any).npcID ?? 0)] = 1;
    scene.text('You hesitate, mulling it over for a moment');
    scene.text('"Well... Alright..." you say somewhat reluctantly. "But don\'t you dare come inside me, okay?"');
  }, goto: ['sex_ev_sex', 'position_choose'] },
          ]);
        }
      }
    }
  } },
    ]);
  }
  qspCall(s, 'sex_ev_condoms', 'pc_skip_the_condom');
  qspCall(s, 'sex_ev_condoms', 'no_sex_only');
  scene.actions([
    { label: 'Just don\'t come inside me', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    ((s as any).sex_ev ?? {})['must_fuck'] = 1;
    ((s as any).npc_rule_no_creampies ?? {})[String((s as any).npcID ?? 0)] = 1;
    scene.text('"Well... Alright..." you say hesitantly. "But don\'t you dare come inside me, okay?"');
  }, goto: ['sex_ev_sex', 'position_choose'] },
  ]);
  scene.build();
}

function enterNoCondom2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_condoms', 'no_condom2.1');
  scene.actions([
    { label: 'Seriously?', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    if (((s as any).npc_condom_rule ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.text('"Are you serious?" you ask exasperatedly. "You know my rule! We need a condom!"');
    } else {
      scene.text('"Are you serious?" you ask exasperatedly. "We\'re not fucking without one!"');
    }
    if ((Math.floor(Math.random() * 10) + 1) < 8) {
      scene.text('"Do you have some?" he asks.');
      qspCall(s, 'sex_ev_condoms', 'no_condom2.1');
    } else {
      ((s as any).sex_ev ?? {})['dont_need_condom'] = 1;
      scene.text('"Come on," he says. "It\'ll be fine. Let\'s skip it. Just this once."');
      scene.actions([
        { label: 'Not a big deal?!', handler: (st: GameState) => {
    scene.text('"Not a big deal??? You don\'t have any idea how dangerous it is for m- You know what? <i>Fuck</i> you!"');
    scene.text('"I\'m trying to but you won\'t let me!"');
    qspCall(s, 'sex_ev_condoms', 'no_condom_leave');
  } },
      ]);
    }
    qspCall(s, 'sex_ev_condoms', 'pc_skip_the_condom');
    scene.actions([
      { label: 'Just don\'t come inside me', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    ((s as any).sex_ev ?? {})['must_fuck'] = 1;
    ((s as any).npc_rule_no_creampies ?? {})[String((s as any).npcID ?? 0)] = 1;
    ((s as any).sex_ev ?? {})['condom_motive'] = 'exception';
    scene.text('"Well... Alright..." you say hesitantly. "But don\'t you dare come inside me, okay?"');
  }, goto: ['sex_ev_sex', 'position_choose'] },
    ]);
  } },
    { label: 'How many girls are you fucking? (tease)', handler: (st: GameState) => {
    scene.text('"Damn! How many of these things do you go through?" you laugh, giving him a look. "Are you fucking 20 girls a day?"');
    scene.text('"Hey, when you\'re as good as I am," he says, a smug grin on his face. "Do you have any?"');
    qspCall(s, 'sex_ev_condoms', 'no_condom2.1');
  } },
  ]);
  scene.build();
}

function enterNoCondom2_1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mc_inventory ?? 0)?.['normal_condoms'] > 0  ||  (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0  &&  ((s as any).preziktype ?? 0) === 0)) {
    scene.actions([
      { label: 'I\'ve got some', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_stats', 'pc_condom_stats');
    scene.img('images/shared/sex/misc/condom_put.jpg');
    scene.text('"I\'ve got some right here," you say, pulling a rubber from your bag and tearing it open.');
    // TODO-QSP: dynamic text: You smile at <<$npcdesc>> as you roll it onto his cock for him.
    scene.text(`You smile at ${((s as any).npcdesc ?? 0)} as you roll it onto his cock for him.`);
  }, goto: ['sex_ev_sex', 'position_choose'] },
    ]);
  } else {
    scene.actions([
      { label: 'Don\'t have any condoms', handler: (st: GameState) => {
    scene.text('"No..." you say reluctantly. "I thought you would..."');
    if (((s as any).npc_no_condoms ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      if (((s as any).npc_no_condoms_know ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        scene.text('"I can\'t imagine why you\'d think that," he replies dryly. "You know I don\'t use them."');
      } else {
        ((s as any).npc_no_condoms_know ?? {})[String((s as any).npcID ?? 0)] = 1;
        scene.text('"Well I don\'t," he replies dryly. "I don\'t use them."');
      }
    } else {
      scene.text('"So... what should we do?"');
    }
    qspCall(s, 'sex_ev_after', 'no_condom_end');
    qspCall(s, 'sex_ev_condoms', 'pc_skip_the_condom');
    qspCall(s, 'sex_ev_condoms', 'no_sex_only');
    scene.actions([
      { label: 'Just don\'t come inside me (trusting)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    ((s as any).sex_ev ?? {})['must_fuck'] = 1;
    scene.text('"Just don\'t come inside me," you smile warmly.');
  }, goto: ['sex_ev_sex', 'position_choose'] },
      { label: 'Just don\'t come inside me (nervous)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    ((s as any).sex_ev ?? {})['must_fuck'] = 1;
    scene.text('"Well..." you say hesitantly. "Just don\'t come inside me, okay?"');
  }, goto: ['sex_ev_sex', 'position_choose'] },
    ]);
  } },
    ]);
  }
  qspCall(s, 'sex_ev_condoms', 'pc_skip_the_condom');
  scene.actions([
    { label: 'Just don\'t come inside me (trusting)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    ((s as any).sex_ev ?? {})['must_fuck'] = 1;
    scene.text('"Just don\'t come inside me," you smile warmly.');
  }, goto: ['sex_ev_sex', 'position_choose'] },
    { label: 'Just don\'t come inside me (nervous)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    ((s as any).sex_ev ?? {})['must_fuck'] = 1;
    scene.text('"Well..." you say hesitantly. "Just don\'t come inside me, okay?"');
  }, goto: ['sex_ev_sex', 'position_choose'] },
  ]);
  scene.build();
}

function enterNoSexOnly(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['no_sex'] === 0) {
    scene.actions([
      { label: 'We could do other stuff', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['no_sex'] = 1;
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Maybe we could do other stuff without having sex?" you suggest.');
    if (((s as any).npc_no_kiss ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
      scene.actions([
        { label: 'We could make out', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Maybe we could do other stuff without having sex?" you suggest. "We could just make out?"');
    // TODO-QSP: dynamic text: "Okay," <<$npcdesc>> nods and you happily move to kiss him.
    scene.text(`"Okay," ${((s as any).npcdesc ?? 0)} nods and you happily move to kiss him.`);
    scene.actions([
      { label: 'Make out with him', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_foreplay', 'makeout_dom1'
  } },
    ]);
  } },
      ]);
    }
    if (((s as any).sex_ev ?? 0)?.['cuni_orgasm'] < 5) {
      scene.actions([
        { label: 'You could eat me out', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Maybe we could do other stuff without having sex?" you suggest. "I wouldn\'t mind if you ate my pussy for a little while..."');
    if (((s as any).npc_pussyeater ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: "I think I'd like that too," <<$npcdesc>> says with a dangerous glint in his eye...
      scene.text(`"I think I'd like that too," ${((s as any).npcdesc ?? 0)} says with a dangerous glint in his eye.`);
      scene.actions([
        { label: 'Get eaten out', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_foreplay', 'pussy_lick_start');
  } },
      ]);
    } else {
      if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  (Math.floor(Math.random() * 2) + 1) === 1) {
        scene.text('"How about you blow me instead?" he asks.');
        scene.actions([
          { label: 'That sounds fun', handler: (st: GameState) => {
    scene.text('"That sounds fun," you smile, moving down between his legs.');
    scene.actions([
      { label: 'Blow him', goto: ['sex_ev_foreplay', 'bj_sub1'] },
    ]);
  } },
          { label: 'I guess I could', handler: (st: GameState) => {
    scene.text('"I guess I could do that," you say reluctantly, moving down between his legs.');
    scene.actions([
      { label: 'Blow him', goto: ['sex_ev_foreplay', 'bj_sub1'] },
    ]);
  } },
        ]);
      } else {
        scene.text('"I guess I could..." he says.');
        scene.actions([
          { label: 'Get eaten out', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_foreplay', 'pussy_lick_start');
  } },
        ]);
      }
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'I could blow you', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Maybe we could do other stuff without having sex?" you suggest. "I could just blow you?"');
    if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npclastgenerated ?? 0)] === 'blowjob') {
      // TODO-QSP: dynamic text: "I would love that," <<$npcdesc>> grins.
      scene.text(`"I would love that," ${((s as any).npcdesc ?? 0)} grins.`);
    } else {
      // TODO-QSP: dynamic text: "I could get behind that..." <<$npcdesc>> smiles.
      scene.text(`"I could get behind that..." ${((s as any).npcdesc ?? 0)} smiles.`);
    }
    scene.actions([
      { label: 'Blow him', goto: ['sex_ev_foreplay', 'bj_dom2'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterNpcCondomComplain(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterNpcLetsSkipCondom(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterDontCumInMe(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_creampie_okay ?? 0)?.[String((s as any).npcID ?? 0)] === 0  &&  ((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] !== 'at_will') {
    scene.actions([
      { label: 'Don\'t come inside me', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_stats', 'restrict_func', 'creampie');
    if (((s as any).birth_control ?? 0)?.['think_safe'] !== 1  &&  ((s as any).npc_know_not_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.text('"Don\'t forget, you can\'t come inside me," you warn him as you get into position. "I\'m still not on birth control."');
    } else {
      if (((s as any).birth_control ?? 0)?.['think_safe'] !== 1  &&  ((s as any).pillcon2 ?? 0) > 0) {
        qspCall(s, 'sex_ev_stats', 'no_birth_control_know');
        ((s as any).npc_know_bc ?? {})[String((s as any).npcID ?? 0)] = 0;
        ((s as any).npc_know_bc_not_effective ?? {})[String((s as any).npcID ?? 0)] = 1;
        scene.text('"Don\'t come inside me," you warn him as you get into position. "My birth control hasn\'t kicked in yet."');
      } else {
        if (((s as any).birth_control ?? 0)?.['think_safe'] !== 1) {
          qspCall(s, 'sex_ev_stats', 'no_birth_control_know');
          ((s as any).npc_know_bc ?? {})[String((s as any).npcID ?? 0)] = 0;
          scene.text('"Don\'t come inside me," you warn him as you get into position. "I\'m not on birth control."');
        } else {
          scene.text('"Don\'t come inside me," you murmur as you get into position.');
        }
      }
    }
  }, goto: ['sex_ev_sex', 'position_choose'] },
    ]);
  }
  scene.build();
}

function enterDisableCondoms(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_bareback ?? 0)?.[String((s as any).npcID ?? 0)] === ''  &&  ((s as any).sex_ev ?? 0)?.['condom'] === 0) {
    scene.actions([
      { label: 'We don\'t need condoms', handler: (st: GameState) => {
    if (((s as any).stat ?? 0)?.['preg_risk'] !== 'danger'  &&  ((s as any).birth_control ?? 0)?.['think_safe'] !== 1) {
      scene.actions([
        { label: 'I\'ll tell you when it\'s safe', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['temp_bareback'] = 2;
    // TODO-QSP: $sex_ev['bed_room']
    ((s as any).sex_ev ?? {})['disable_condoms_desc'] = '"Hey," you smile. "We don\'t need to use condoms every time.';
    qspCall(s, 'sex_ev_condoms', 'disable_condoms_options2');
  } },
      ]);
    }
    qspCall(s, 'sex_ev_condoms', 'catholic_condoms');
    scene.actions([
      { label: 'Never', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['temp_bareback'] = 1;
    // TODO-QSP: $sex_ev['bed_room']
    ((s as any).sex_ev ?? {})['disable_condoms_desc'] = '"Hey," you smile. "We don\'t need to use condoms.';
    qspCall(s, 'sex_ev_condoms', 'disable_condoms_options1');
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterDisableCondomsOptions1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).knowpreg ?? 0) === 1) {
    scene.actions([
      { label: 'I\'m pregnant', handler: (st: GameState) => {
    ((s as any).npc_knowpreg ?? {})[String((s as any).npcID ?? 0)] = 1;
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Hey," you smile. "We don\'t need to use condoms. I found out I\'m pregnant. Can\'t get any more knocked up than I already am."');
    qspCall(s, 'sex_ev_condoms', 'npc_no_condom_react');
  } },
    ]);
  } else {
    if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
      if (((s as any).tabletkishot ?? 0) > 0) {
        scene.actions([
          { label: 'On the shot', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_stats', 'birth_control_know');
    ((s as any).npc_know_not_bc ?? {})[String((s as any).npcID ?? 0)] = 0;
    ((s as any).sex_ev ?? {})['must_fuck'] = 1;
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Hey," you smile. "We don\'t need to use condoms anymore. I\'m on the shot."');
    qspCall(s, 'sex_ev_condoms', 'npc_no_condom_react');
  } },
        ]);
      } else {
        if (((s as any).pillcon2 ?? 0) > 0) {
          scene.actions([
            { label: 'On the pill', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_stats', 'birth_control_know');
    ((s as any).npc_know_not_bc ?? {})[String((s as any).npcID ?? 0)] = 0;
    ((s as any).sex_ev ?? {})['must_fuck'] = 1;
    // TODO-QSP: $sex_ev['bed_room']
    if (((s as any).npc_know_bc_not_effective ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.text('"Hey," you smile. "We don\'t need to use condoms anymore. My birth control has finally kicked in."');
    } else {
      scene.text('"Hey," you smile. "We don\'t need to use condoms anymore. I\'m on the pill."');
    }
    ((s as any).npc_know_bc ?? {})[String((s as any).npcID ?? 0)] = 0;
    qspCall(s, 'sex_ev_stats', 'birth_control_know');
    ((s as any).npc_know_bc_not_effective ?? {})[String((s as any).npcID ?? 0)] = 0;
    qspCall(s, 'sex_ev_condoms', 'npc_no_condom_react');
  } },
          ]);
        }
      }
    } else {
      if (((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        scene.actions([
          { label: 'Lie about birth control', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['must_fuck'] = 1;
    qspCall(s, 'sex_ev_stats', 'birth_control_know');
    ((s as any).npc_know_not_bc ?? {})[String((s as any).npcID ?? 0)] = 0;
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Hey," you smile. "We don\'t need to use condoms anymore. I\'m on birth control."');
    if (((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
      ((s as any).sex_ev ?? {})['npc_condom_motive'] = 'adamant';
      // TODO-QSP: dynamic text: "I want to use one anyways," <<$npcdesc>> says, shaking his head and reaches bac...
      scene.text(`"I want to use one anyways," ${((s as any).npcdesc ?? 0)} says, shaking his head and reaches back for the condom. "Better to be safe."`);
      scene.text('Your jaw drops.');
      scene.text('<i>Son of a bitch! Why is this guy so fucking careful?!</i>');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_condoms', 'npc_condom_use');
  } },
      ]);
    } else {
      ((s as any).sex_ev ?? {})['no_condom'] = 1;
      // TODO-QSP: $npc_bareback[$npcID] = 'never_use'
      // TODO-QSP: dynamic text: Upon hearing your barefaced lie, <<$npcdesc>> stares back into your eyes filled ...
      scene.text(`Upon hearing your barefaced lie, ${((s as any).npcdesc ?? 0)} stares back into your eyes filled with desire and your smile widens into a full blown grin.`);
    }
  }, goto: ['sex_ev_sex', 'position_choose'] },
        ]);
      }
    }
  }
  scene.actions([
    { label: 'I trust you', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: dynamic text: <<$sex_ev['disable_condoms_desc']>> I trust you."
    scene.text(`${((s as any).sex_ev ?? 0)?.['disable_condoms_desc']} I trust you."`);
    qspCall(s, 'sex_ev_condoms', 'npc_no_condom_react');
  } },
    { label: 'It\'ll feel better', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: dynamic text: <<$sex_ev['disable_condoms_desc']>> Bareback is so much better. I want the full ...
    scene.text(`${((s as any).sex_ev ?? 0)?.['disable_condoms_desc']} Bareback is so much better. I want the full feeling of your cock inside me."`);
    qspCall(s, 'sex_ev_condoms', 'npc_no_condom_react');
  } },
  ]);
  scene.build();
}

function enterDisableCondomsOptions2(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'I trust you', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: dynamic text: <<$sex_ev['disable_condoms_desc']>> I trust you. So we only need to use condoms ...
    scene.text(`${((s as any).sex_ev ?? 0)?.['disable_condoms_desc']} I trust you. So we only need to use condoms on dangerous days."`);
    qspCall(s, 'sex_ev_condoms', 'npc_no_condom_react');
  } },
    { label: 'It\'ll feel better', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: dynamic text: <<$sex_ev['disable_condoms_desc']>> Bareback is so much better. I want the full ...
    scene.text(`${((s as any).sex_ev ?? 0)?.['disable_condoms_desc']} Bareback is so much better. I want the full feeling of your cock inside me. So we only need to use condoms on dangerous days."`);
    qspCall(s, 'sex_ev_condoms', 'npc_no_condom_react');
  } },
  ]);
  scene.build();
}

function enterCatholicCondoms(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'You\'re Orthodox', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_stats', 'no_birth_control_know', 'catholic');
    // TODO-QSP: $sex_ev['bed_room']
    if (((s as any).sex_ev ?? 0)?.['type'] !== 'hookup') {
      scene.text('"Hey, you don\'t need to use that," you smirk, putting your hand on his arm to stop him. "I\'m Orthodox. I don\'t believe in birth control."');
    } else {
      scene.text('"Hey, I\'m Orthodox, remember?" you smirk, putting your hand on his arm to stop him. "I don\'t believe in birth control."');
    }
    qspCall(s, 'sex_ev_condoms', 'catholic_condom_react');
  } },
  ]);
  scene.build();
}

function enterCatholicCondomReact(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] === 2  ||  (((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((Math.floor(Math.random() * (100 - ((s as any).npc_willpwr ?? 0)?.[String((s as any).npcID ?? 0)] + 1)) + (((s as any).npc_willpwr ?? 0)?.[String((s as any).npcID ?? 0)])) - ((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)]) > ((s as any).pcs_persuas ?? 0))) {
    ((s as any).sex_ev ?? {})['npc_condom_motive'] = 'pregnancy';
    // TODO-QSP: dynamic text: "It's not safe," <<$npcdesc>> says, shaking his head. "I don't want you getting ...
    scene.text(`"It's not safe," ${((s as any).npcdesc ?? 0)} says, shaking his head. "I don't want you getting pregnant on me."`);
    scene.actions([
      { label: 'Then you can\'t fuck', handler: (st: GameState) => {
    scene.text('"Well then we can\'t have sex," you frown.');
    qspCall(s, 'sex_ev_after', 'no_condom_end');
    qspCall(s, 'sex_ev_condoms', 'no_sex_only');
  } },
      { label: 'Make an exception', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['condom'] = 1;
    scene.text('"Well... I guess I could make an exception," you smile. "It\'s not like I\'ll go to hell for using a condom <i>once.</i>"');
  }, goto: ['sex_ev_sex', 'position_choose'] },
      { label: 'Anal instead?', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['no_vag'] = 1;
    ((s as any).sex_ev ?? {})['anal_allowed'] = 1;
    scene.text('"In that case... what about anal?"');
    if (((s as any).npc_no_anal ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.text('"I don\'t like anal," he says.');
      qspCall(s, 'sex_ev_after', 'no_condom_end');
      qspCall(s, 'sex_ev_condoms', 'no_sex_only');
    } else {
      scene.text('"That sounds like a compromise to me," he grins and puts away the condom.');
      qspCall(s, 'sex_ev_anal', 'anal_start');
    }
  } },
    ]);
  } else {
    ((s as any).sex_ev ?? {})['no_condom'] = 1;
    // TODO-QSP: $npc_bareback[$npcID] = 'never_use'
    if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'perverted') {
      // TODO-QSP: dynamic text: "This is why I love religious chicks," <<$npcdesc>> grins.
      scene.text(`"This is why I love religious chicks," ${((s as any).npcdesc ?? 0)} grins.`);
    } else {
      // TODO-QSP: dynamic text: "This is going to feel so good," <<$npcdesc>> says and your smile widens into a ...
      scene.text(`"This is going to feel so good," ${((s as any).npcdesc ?? 0)} says and your smile widens into a full blown grin.`);
    }
    if (((s as any).stat ?? 0)?.['preg_risk'] === 'danger') {
      scene.actions([
        { label: 'Don\'t come inside (danger day)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['preg_risk'] = 'danger';
    ((s as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    // TODO-QSP: '"Just don''t come inside me, okay?" you say as you get into position. ' + iif(ovulate > 0, '"I''m o...
  }, goto: ['sex_ev_sex', 'position_choose'] },
      ]);
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_sex', 'position_choose'
  } },
      { label: 'Don\'t come inside', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    scene.text('"Just don\'t come inside me, okay?" you say as you get into position.');
  }, goto: ['sex_ev_sex', 'position_choose'] },
    ]);
  }
  scene.build();
}

function enterReenableCondomsCode(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $npc_bareback[$npcID] = ''
  ((s as any).npc_free_creampies_count ?? {})[String((s as any).npcID ?? 0)] = 0;
  scene.build();
}

function enterReenableCondoms1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pc_know_npc_latex_allrg ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
    if (((s as any).birth_control ?? 0)?.['think_safe'] === 0  &&  ((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.actions([
        { label: 'Need condoms again', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Hey, we need to start using condoms again," you say.');
    // TODO-QSP: dynamic text: "What for?" <<$npcdesc>> asks, confused.
    scene.text(`"What for?" ${((s as any).npcdesc ?? 0)} asks, confused.`);
    scene.text('"I\'m not on birth control anymore."');
    scene.text('"Huh? How come?"');
    qspCall(s, 'sex_ev_condoms', 'reenable_condoms1_stop_bc');
    if (((s as any).stat ?? 0)?.['boyfriends_current'] > 0  &&  ((s as any).sex_ev ?? 0)?.['type'] !== 'married_sex'  &&  ((s as any).sex_ev ?? 0)?.['type'] !== 'dating_sex') {
      scene.actions([
        { label: 'Trying for baby', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_condoms', 'trying_for_baby');
    qspCall(s, 'sex_ev_condoms', 'reenable_condoms2');
  } },
      ]);
    }
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Can we use condoms again?', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Hey, can we start using condoms again?" you say.');
    // TODO-QSP: dynamic text: "What for?" <<$npcdesc>> asks, confused.
    scene.text(`"What for?" ${((s as any).npcdesc ?? 0)} asks, confused.`);
    if (((s as any).birth_control ?? 0)?.['think_safe'] === 0  &&  ((s as any).pillcon2 ?? 0) > 0) {
      scene.actions([
        { label: 'I stopped my birth control', handler: (st: GameState) => {
    scene.text('"I\'m not on birth control anymore."');
    scene.text('"Huh? How come?"');
    qspCall(s, 'sex_ev_condoms', 'reenable_condoms1_stop_bc');
  } },
      ]);
    }
    if (((s as any).npc_risky_creampie_count ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).birth_control ?? 0)?.['think_safe'] === 0) {
      scene.actions([
        { label: 'Too many close calls', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "We've had too many close calls," you say, recalling all the times <<$npcdesc>>'...
    scene.text(`"We've had too many close calls," you say, recalling all the times ${((s as any).npcdesc ?? 0)}'s come inside you on dangerous days. "I've been too reckless. I can't afford to get pregnant right now. So can we just switch back to using condoms?"`);
    qspCall(s, 'sex_ev_condoms', 'reenable_condoms2');
  } },
      ]);
    }
    scene.actions([
      { label: 'Assurance', handler: (st: GameState) => {
    scene.text('"I just want to be more safe," you explain. "It would be a weight off my mind. I can\'t afford to get pregnant right now. So can we just switch back to using condoms?"');
    qspCall(s, 'sex_ev_condoms', 'reenable_condoms2');
  } },
    ]);
  } },
      ]);
    }
  }
  scene.build();
}

function enterReenableCondoms1StopBc(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'No reason', handler: (st: GameState) => {
    scene.text('"No reason," you shrug. "I need to explain myself to you? Let\'s just use condoms."');
    qspCall(s, 'sex_ev_condoms', 'reenable_condoms2');
  } },
    { label: 'Too much hassle', handler: (st: GameState) => {
    scene.text('"Was too much hassle to take the pill every day," you shrug. "Easier just to use condoms. So let\'s use them."');
    qspCall(s, 'sex_ev_condoms', 'reenable_condoms2');
  } },
    { label: 'Didn\'t like it', handler: (st: GameState) => {
    scene.text('"I didn\'t like it," you shrug. "It was messing up my hormones and making me feel all weird. So let\'s just use condoms."');
    qspCall(s, 'sex_ev_condoms', 'reenable_condoms2');
  } },
  ]);
  scene.build();
}

function enterReenableCondoms2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_latex_allrg ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    if (((s as any).pc_know_npc_latex_allrg ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      if (((s as any).npc_assertive ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        // TODO-QSP: dynamic text: "Come on. You know I can't do that because of my allergy," <<$npcdesc>> frowns.
        scene.text(`"Come on. You know I can't do that because of my allergy," ${((s as any).npcdesc ?? 0)} frowns.`);
      } else {
        // TODO-QSP: dynamic text: "But I'm allergic... remember?" <<$npcdesc>> says embarrassedly.
        scene.text(`"But I'm allergic... remember?" ${((s as any).npcdesc ?? 0)} says embarrassedly.`);
      }
    } else {
      if (((s as any).npc_assertive ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        // TODO-QSP: dynamic text: "The thing is..." <<$npcdesc>> says. "I can't do that. I never told you this bec...
        scene.text(`"The thing is..." ${((s as any).npcdesc ?? 0)} says. "I can't do that. I never told you this because we never used them before but I'm allergic to condoms. Makes my dick break out in a rash."`);
      } else {
        // TODO-QSP: dynamic text: "I'm, uhh, allergic to condoms..." <<$npcdesc>> says uncomfortably.
        scene.text(`"I'm, uhh, allergic to condoms..." ${((s as any).npcdesc ?? 0)} says uncomfortably.`);
        scene.text('"You\'re kidding."');
        scene.text('"Latex allergy," he replies in deepening embarrassment. "Makes my dick break out in a really bad rash. Sorry I never told you before."');
      }
    }
    ((s as any).pc_know_npc_latex_allrg ?? {})[String((s as any).npcID ?? 0)] = 1;
    scene.text('You frown.');
    // TODO-QSP: dynamic text: "I promise I'll pull out," <<$npcdesc>> insists.
    scene.text(`"I promise I'll pull out," ${((s as any).npcdesc ?? 0)} insists.`);
    qspCall(s, 'sex_ev_condoms', 'reenable_condoms3');
  } else {
    if (((s as any).npc_no_condoms ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      ((s as any).sex_ev ?? {})['npc_doesnt_want_condoms'] = 1;
      scene.text('"Come on, do we have to use condoms? I\'ll pull out if it\'s not a safe day, I promise."');
      qspCall(s, 'sex_ev_condoms', 'reenable_condoms3');
    } else {
      qspCall(s, 'sex_ev_condoms', 'reenable_condoms_code');
      // TODO-QSP: dynamic text: "That's fair," <<$npcdesc>> nods. "So do you want to use mine or yours today?"
      scene.text(`"That's fair," ${((s as any).npcdesc ?? 0)} nods. "So do you want to use mine or yours today?"`);
      if (((s as any).mc_inventory ?? 0)?.['normal_condoms'] > 0  ||  (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0  &&  ((s as any).preziktype ?? 0) === 0)) {
        scene.actions([
          { label: 'Mine', handler: (st: GameState) => {
    scene.text('"Mine," you smile, happy that this didn\'t have to be a big deal.');
    qspCall(s, 'sex_ev_condoms', 'pc_use_condoms');
  } },
        ]);
      }
      scene.actions([
        { label: 'Yours', handler: (st: GameState) => {
    if (((s as any).mc_inventory ?? 0)?.['normal_condoms'] === 0) {
      scene.text('"Yours," you say. "I don\'t have any on me today."');
      // TODO-QSP: dynamic text: <<$npcdesc>> nods again and reaches for a condom from his nightstand while you w...
      scene.text(`${((s as any).npcdesc ?? 0)} nods again and reaches for a condom from his nightstand while you wait, happy that this didn't have to be a big deal.`);
    } else {
      scene.text('"Do you mind if we use yours today?"');
      scene.text('"Not at all," he says, reaching for a condom from his nightstand and you feel happy that this didn\'t turn into a big deal.');
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_condoms', 'npc_condom_use');
  } },
    ]);
  } },
      ]);
    }
  }
  scene.build();
}

function enterReenableCondoms3(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pc_know_npc_latex_allrg ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
    scene.actions([
      { label: 'We need condoms', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Seriously," you say. "We need to use condoms. I can\'t take chances on this."');
    qspCall(s, 'sex_ev_condoms', 'condom_compromise');
    scene.actions([
      { label: 'Insist', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_condoms', 'reenable_condoms_code');
    (s as any).npc_rel = ((s as any).npc_rel ?? 0) - (10);
    scene.text('"This isn\'t up for debate," you insist. "It\'s condoms or we can\'t fuck anymore."');
    scene.text('"Ugh, fine. But you need to bring them. I don\'t have any."');
    if (((s as any).mc_inventory ?? 0)?.['normal_condoms'] === 0) {
      scene.actions([
        { label: 'Uh oh', handler: (st: GameState) => {
    scene.text('"Uhh..."');
    scene.text('You gulp as you realize you didn\'t think to bring any condoms yourself.');
    // TODO-QSP: dynamic text: "Come on," <<$npcdesc>> says with a flat stare. "You're going to insist all that...
    scene.text(`"Come on," ${((s as any).npcdesc ?? 0)} says with a flat stare. "You're going to insist all that and then not have any condoms to use? So what are we going to do now?"`);
    qspCall(s, 'sex_ev_condoms', 'no_sex_only');
    scene.actions([
      { label: 'No sex', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"I guess that means we\'re not going to have sex today..."');
    // TODO-QSP: dynamic text: "Well this was fucking bullshit," <<$npcdesc>> grumbles.
    scene.text(`"Well this was fucking bullshit," ${((s as any).npcdesc ?? 0)} grumbles.`);
    qspCall(s, 'sex_ev_after', 'after_sex1');
  } },
      { label: 'Last time without', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['skip_condom'] = 1;
    ((s as any).sex_ev ?? {})['no_condom'] = 1;
    ((s as any).sex_ev ?? {})['must_fuck'] = 1;
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"I guess... one more time couldn\'t hurt," you say hesitantly. "But this is the last time, okay?"');
  }, goto: ['sex_ev_sex', 'position_choose'] },
    ]);
  } },
      ]);
    } else {
      scene.text('"Way ahead of you," you grin.');
      qspCall(s, 'sex_ev_condoms', 'pc_condoms');
    }
  } },
    ]);
  } },
    ]);
  } else {
    qspCall(s, 'sex_ev_condoms', 'condom_compromise');
  }
  scene.actions([
    { label: 'Do you promise?', handler: (st: GameState) => {
    // TODO-QSP: $npc_bareback[$npcID] = 'never_use'
    if (((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === 'at_will') {
      // TODO-QSP: $npc_free_creampies[$npcID] = 'when_safe'
    } else {
      if (((s as any).npc_free_creampies_count ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
        ((s as any).npc_free_creampies_count ?? {})[String((s as any).npcID ?? 0)] = 0;
      }
    }
    ((s as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    scene.text('"Well..." You chew your lip, mulling it over. "You promise promise?"');
    scene.text('"That\'s what I said, didn\'t I? And? Is it safe today?"');
    if (((s as any).mesec ?? 0) > 0) {
      scene.text('"I\'m on my period so... probably."');
      scene.text('Your smile breaks into a grin and he pulls you over, preparing to fuck you bareback.');
    } else {
      if (((s as any).stat ?? 0)?.['preg_risk'] === 'safe') {
        ((s as any).sex_ev ?? {})['preg_risk'] = 'safe';
        scene.text('"Yeah."');
        // TODO-QSP: dynamic text: Your eyes meet for just a moment before <<$npcdesc>> begins clambering into posi...
        scene.text(`Your eyes meet for just a moment before ${((s as any).npcdesc ?? 0)} begins clambering into position to fuck you bareback.`);
      } else {
        if (((s as any).stat ?? 0)?.['preg_risk'] === 'prob_safe') {
          ((s as any).sex_ev ?? {})['preg_risk'] = 'prob_safe';
          scene.text('"Probably," you admit, your smile twisting into a smirk. His smile breaks into a grin and pulls you over, preparing to fuck you bareback.');
        } else {
          ((s as any).sex_ev ?? {})['preg_risk'] = 'danger';
          qspCall(s, 'sex_ev_stats', 'restrict_func', 'creampie');
          scene.text('"No. So don\'t you dare come inside me," you say sternly before you break into a smile and spread your legs. "Now hurry up and fuck me."');
        }
      }
    }
  }, goto: ['sex_ev_sex', 'position_choose'] },
  ]);
  scene.build();
}

function enterCondomCompromise(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === 'when_safe') {
    scene.text('"Why can\'t we just keep doing what we\'re doing? You already don\'t want me to come inside you on unsafe days. Let\'s just keep doing that."');
  } else {
    if (((s as any).pc_know_npc_latex_allrg ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.text('"What if it\'s just on days when you\'re in danger of getting pregnant? We just won\'t have sex on those days?"');
    } else {
      scene.text('"What if it\'s just on days when you\'re in danger of getting pregnant? Condoms on those days and bareback on other days?"');
    }
  }
  scene.actions([
    { label: 'Compromise - Danger days only', handler: (st: GameState) => {
    // TODO-QSP: $npc_bareback[$npcID] = 'when_safe'
    scene.text('You chew your lip, mulling it over.');
    scene.text('"Well... I guess that would be a good compromise..." you smile. "Just as long as I tell you when it\'s safe..."');
    // TODO-QSP: dynamic text: "So?" <<$npcdesc>> says, looking expectantly. "Is it safe today?"
    scene.text(`"So?" ${((s as any).npcdesc ?? 0)} says, looking expectantly. "Is it safe today?"`);
    if (((s as any).mesec ?? 0) > 0) {
      scene.actions([
        { label: 'I\'m on my period', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['preg_risk'] = 'safe';
    scene.text('"I\'m on my period so... probably?"');
    scene.text('Your smile breaks into a grin and he pulls you over, preparing to fuck you bareback.');
  }, goto: ['sex_ev_sex', 'position_choose'] },
      ]);
    } else {
      if (((s as any).stat ?? 0)?.['preg_risk'] === 'safe') {
        scene.actions([
          { label: 'It\'s a safe day', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['preg_risk'] = 'safe';
    scene.text('"Yeah."');
    // TODO-QSP: dynamic text: Your eyes meet for just a moment before <<$npcdesc>> begins clambering into posi...
    scene.text(`Your eyes meet for just a moment before ${((s as any).npcdesc ?? 0)} begins clambering into position to fuck you bareback.`);
  }, goto: ['sex_ev_sex', 'position_choose'] },
        ]);
      } else {
        if (((s as any).stat ?? 0)?.['preg_risk'] === 'prob_safe') {
          scene.actions([
            { label: 'It\'s probably safe day', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['preg_risk'] = 'prob_safe';
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Probably," you say, your smile twisting into a smirk. His breaks into a grin and pulls you over, preparing to fuck you bareback.');
  }, goto: ['sex_ev_sex', 'position_choose'] },
          ]);
        } else {
          if (((s as any).stat ?? 0)?.['preg_risk'] === 'danger') {
            scene.actions([
              { label: 'Not today', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['preg_risk'] = 'danger';
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Not today, sorry to say." Your smile turns wistful. "I\'ll definitely get pregnant if we have an \'accident\' today. So that means condoms."');
    if (((s as any).sex_ev ?? 0)?.['condom_count'] > ((s as any).sex_ev ?? 0)?.['condoms_used']) {
      // TODO-QSP: dynamic text: <<$npcdesc>> sighs wearily and goes to get some.
      scene.text(`${((s as any).npcdesc ?? 0)} sighs wearily and goes to get some.`);
      qspCall(s, 'sex_ev_condoms', 'npc_condom_put_on');
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> sighs wearily.
      scene.text(`${((s as any).npcdesc ?? 0)} sighs wearily.`);
      scene.text('"Do you have any then? I\'m all out.');
      qspCall(s, 'sex_ev_condoms', 'pc_use_condoms');
    }
  }, goto: ['sex_ev_sex', 'position_choose'] },
            ]);
          }
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterTempDisableCondoms(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_bareback ?? 0)?.[String((s as any).npcID ?? 0)] === ''  &&  ((s as any).sex_ev ?? 0)?.['condom'] === 0) {
    scene.actions([
      { label: 'Let\'s skip the condom', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['pc_skip_the_condom'] = 1;
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: iif($sex_ev['type'] ! 'hookup', '"Let''s skip the condom today," you smile.', '"We don''t need to us...
    if (((s as any).birth_control ?? 0)?.['think_safe'] === 1  &&  ((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
      scene.actions([
        { label: '"I\'m on birth control"', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_stats', 'birth_control_know');
    ((s as any).npc_know_not_bc ?? {})[String((s as any).npcID ?? 0)] = 0;
    ((s as any).sex_ev ?? {})['must_fuck'] = 1;
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: '"We don''t need to use condoms," you smile. ' + iif(tabletkishot > 0, '"I''m on the shot."', '"I''m...
    qspCall(s, 'sex_ev_condoms', 'npc_temp_no_condom_react');
  } },
      ]);
    } else {
      if (((s as any).mesec ?? 0) > 0) {
        scene.actions([
          { label: 'I\'m on my period', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['preg_risk'] = 'prob_safe';
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Let\'s skip the condom today," you smile. "I don\'t think I can get pregnant on my period."');
    qspCall(s, 'sex_ev_condoms', 'npc_temp_no_condom_react');
  } },
        ]);
      } else {
        if (((s as any).stat ?? 0)?.['preg_risk'] === 'safe') {
          scene.actions([
            { label: 'It\'s a safe day', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['preg_risk'] = 'safe';
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Let\'s skip the condom," you smile. "It\'s a safe day for me. I won\'t get pregnant."');
    qspCall(s, 'sex_ev_condoms', 'npc_temp_no_condom_react');
  } },
          ]);
        } else {
          if (((s as any).stat ?? 0)?.['preg_risk'] === 'prob_safe') {
            scene.actions([
              { label: 'It\'s probably safe day', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['preg_risk'] = 'prob_safe';
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Let\'s skip the condom," you smile. "It should be a safe day for me. I won\'t get pregnant."');
    scene.text('<i>Probably...</i> you think quietly to yourself.');
    qspCall(s, 'sex_ev_condoms', 'npc_temp_no_condom_react');
  } },
            ]);
          }
        }
      }
    }
    qspCall(s, 'sex_ev_condoms', 'catholic_condoms');
    scene.actions([
      { label: 'I trust you', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: iif($sex_ev['type'] ! 'hookup', '"Let''s skip the condom today," you smile. ', '"We don''t need to u...
    qspCall(s, 'sex_ev_condoms', 'npc_temp_no_condom_react');
  } },
      { label: 'It\'ll feel better', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: iif($sex_ev['type'] ! 'hookup', '"Let''s skip the condom today," you smile. ', '"We don''t need to u...
    qspCall(s, 'sex_ev_condoms', 'npc_temp_no_condom_react');
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterFatherCheck(s: GameState, scene: SceneBuilder): void {
  ((s as any).potfather_temp ?? {})[1] = 0;
  (s as any).potfather_counter = 0;
  scene.text('List of potential fathers:');
  // TODO-QSP: :potfather_loop
  if (((s as any).wombpotfath ?? 0)?.[String((s as any).potfather_counter ?? 0)] !== 'unknown') {
    // TODO-QSP: $potfather_temp[2] = '<a href="exec: $wombthfath = ''<<$npc_usedname[$wombpotfath[potfather_counter]...
  } else {
    // TODO-QSP: $potfather_temp[2] = '<a href="exec: $wombthfath = ''<<$npc_usedname[$wombpotfath[potfather_counter]...
  }
  if (((s as any).npcID ?? 0) === ((s as any).potfather_temp ?? 0)[2]) {
    (s as any).potfather_counter = ((s as any).potfather_counter ?? 0) + (1);
  }
  if (((s as any).potfather_counter ?? 0) < Object.keys((s as any).wombpotfath ?? {}).length) {
    // TODO-QSP: jump 'potfather_loop'
  }
  scene.build();
}

function enterNpcPregReact(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_creampie_count ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    // TODO-QSP: dynamic text: <<$npcdesc>>'s eyes go wide.
    scene.text(`${((s as any).npcdesc ?? 0)}'s eyes go wide.`);
    if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.text('"It\'s... it\'s not mine, is it?"');
      if (((s as any).npc_is_father ?? 0) === 1) {
        scene.actions([
          { label: 'Maybe', handler: (st: GameState) => {
    scene.text('"It could be," you murmur. "There are... a few people who could be the father..."');
  } },
          { label: 'Lie' }, // TODO-QSP: empty action body
        ]);
      }
    }
  }
  scene.build();
}

function enterNpcNoCondomReact(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] === 2  ||  (((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((Math.floor(Math.random() * (100 - ((s as any).npc_willpwr ?? 0)?.[String((s as any).npcID ?? 0)] + 1)) + (((s as any).npc_willpwr ?? 0)?.[String((s as any).npcID ?? 0)])) - ((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)]) > ((s as any).pcs_persuas ?? 0))) {
    ((s as any).sex_ev ?? {})['condom'] = 1;
    ((s as any).sex_ev ?? {})['npc_condom_motive'] = 'adamant';
    // TODO-QSP: dynamic text: "I want to use one anyways," <<$npcdesc>> says, shaking his head and reaching ba...
    scene.text(`"I want to use one anyways," ${((s as any).npcdesc ?? 0)} says, shaking his head and reaching back for the condom. "Better to be safe."`);
    scene.text('Your jaw drops.');
    scene.text('<i>A free pass to go bareback forever and he doesn\'t take it? What\'s with this guy?</i>');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_condoms', 'npc_condom_use');
  } },
    ]);
  } else {
    ((s as any).sex_ev ?? {})['no_condom'] = 1;
    if (((s as any).sex_ev ?? 0)?.['temp_bareback'] === 1) {
      // TODO-QSP: $npc_bareback[$npcID] = 'never_use'
    } else {
      // TODO-QSP: $npc_bareback[$npcID] = 'when_safe'
    }
    if (((s as any).npc_bareback ?? 0)?.[String((s as any).npcID ?? 0)] === 'never_use') {
      // TODO-QSP: dynamic text: "This is going to feel so good," <<$npcdesc>> says and your smile widens into a ...
      scene.text(`"This is going to feel so good," ${((s as any).npcdesc ?? 0)} says and your smile widens into a full blown grin.`);
      scene.actions([{ label: 'Continue', goto: ['sex_ev_sex', 'position_choose'] }]);
    } else {
      // TODO-QSP: dynamic text: "So is today safe?" <<$npcdesc>> asks with a smile.
      scene.text(`"So is today safe?" ${((s as any).npcdesc ?? 0)} asks with a smile.`);
      qspCall(s, 'sex_ev_condoms', 'bareback_check');
    }
  }
  scene.build();
}

function enterNpcTempNoCondomReact(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] === 2  ||  (((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((Math.floor(Math.random() * (100 - ((s as any).npc_willpwr ?? 0)?.[String((s as any).npcID ?? 0)] + 1)) + (((s as any).npc_willpwr ?? 0)?.[String((s as any).npcID ?? 0)])) - ((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)]) > ((s as any).pcs_persuas ?? 0))) {
    ((s as any).sex_ev ?? {})['condom'] = 1;
    ((s as any).sex_ev ?? {})['npc_condom_motive'] = 'adamant';
    // TODO-QSP: dynamic text: "I want to use one anyways," <<$npcdesc>> says, shaking his head and reaching ba...
    scene.text(`"I want to use one anyways," ${((s as any).npcdesc ?? 0)} says, shaking his head and reaching back for the condom. "Better to be safe."`);
    scene.text('Your jaw drops.');
    scene.text('<i>A free pass to go bareback and he doesn\'t take it? What\'s with this guy?</i>');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_condoms', 'npc_condom_use');
  } },
    ]);
  } else {
    ((s as any).sex_ev ?? {})['no_condom'] = 1;
    // TODO-QSP: dynamic text: "This is going to feel so good," <<$npcdesc>> says and your smile widens into a ...
    scene.text(`"This is going to feel so good," ${((s as any).npcdesc ?? 0)} says and your smile widens into a full blown grin.`);
  }
  scene.actions([{ label: 'Continue', goto: ['sex_ev_sex', 'position_choose'] }]);
  scene.build();
}

function enterNpcHesitateChildfree(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: <<$npcdesc>> pauses.
  scene.text(`${((s as any).npcdesc ?? 0)} pauses.`);
  scene.text('"What do you mean \'should\' be?" he asks.');
  scene.build();
}

function enterBarebackCheck(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['preg_risk'] === 'safe') {
    scene.actions([
      { label: 'No condoms today (safe)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['preg_risk'] = 'safe';
    ((s as any).sex_ev ?? {})['no_condom'] = 1;
    scene.text('"It\'s safe," you smile. "Let\'s go bareback."');
  }, goto: ['sex_ev_sex', 'position_choose'] },
    ]);
  } else {
    if (((s as any).stat ?? 0)?.['preg_risk'] === 'prob_safe') {
      scene.actions([
        { label: 'No condoms today (probably safe)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['preg_risk'] = 'prob_safe';
    ((s as any).sex_ev ?? {})['no_condom'] = 1;
    scene.text('"Should be safe," you smile. "Let\'s go bareback."');
  }, goto: ['sex_ev_sex', 'position_choose'] },
      ]);
    } else {
      if (((s as any).stat ?? 0)?.['preg_risk'] === 'danger') {
        scene.actions([
          { label: 'No condoms today (risky)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['preg_risk'] = 'danger';
    scene.text('"It probably isn\'t safe today," you admit. "But I want to feel you. I want to go bareback."');
    qspCall(s, 'sex_ev_condoms', 'pc_dangerous_day2');
  } },
        ]);
      }
    }
  }
  qspCall(s, 'sex_ev_condoms', 'need_condoms_today');
  qspCall(s, 'sex_ev_condoms', 'already_creampie2');
  scene.build();
}

function enterNeedCondomsToday(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Need condoms today', handler: (st: GameState) => {
    if (((s as any).stat ?? 0)?.['preg_risk'] === 'danger') {
      ((s as any).sex_ev ?? {})['preg_risk'] = 'danger';
    }
    qspCall(s, 'sex_ev_stats', 'restrict_func', 'creampie');
    if (((s as any).mc_inventory ?? 0)?.['normal_condoms'] > 0  ||  (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0  &&  ((s as any).preziktype ?? 0) === 0)) {
      scene.actions([
        { label: 'Use yours', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['using_pc_condoms'] = 1;
    scene.text('"Sorry," you say pulling out a condom from your stash. "We should use protection today."');
    if ((((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'pullout'  ||  ((s as any).npc_arrogant ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0)  &&  ((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] < 1) {
      // TODO-QSP: dynamic text: "We don't need condoms," <<$npcdesc>> says. "I've got pullout game."
      scene.text(`"We don't need condoms," ${((s as any).npcdesc ?? 0)} says. "I've got pullout game."`);
      ((s as any).npc_pullout_game ?? {})[String((s as any).npcID ?? 0)] = 1;
      qspCall(s, 'sex_ev_condoms', 'npc_pullout_game');
    } else {
      scene.actions([
        { label: 'Put it on him', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_stats', 'pc_condom_stats');
    scene.img('images/shared/sex/misc/condom_put.jpg');
    // TODO-QSP: dynamic text: With sensually slow movements you crawl over to <<$npcdesc>> and tear open the p...
    scene.text(`With sensually slow movements you crawl over to ${((s as any).npcdesc ?? 0)} and tear open the packaging, gently rolling the condom down his erect manhood and jerking it a few times as much as for pleasure as for making sure the rubber's snug.`);
  }, goto: ['sex_ev_sex', 'position_choose'] },
        { label: 'Use your mouth', handler: (st: GameState) => {
    scene.img('images/shared/sex/misc/condom_mouth.mp4');
    qspCall(s, 'sex_ev_stats', 'pc_condom_stats');
    // TODO-QSP: dynamic text: With sensually slow movements you crawl over to <<$npcdesc>> and tear open the p...
    scene.text(`With sensually slow movements you crawl over to ${((s as any).npcdesc ?? 0)} and tear open the packaging, placing the condom on the tip of his penis and kissing it through the rubber. Then, using your fingers, you unroll it smoothly over the length of his cock, your lips following all the way down. You bob your head up and down a few more times to make sure it's all the way on before pulling back.`);
  }, goto: ['sex_ev_sex', 'position_choose'] },
      ]);
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Use his', handler: (st: GameState) => {
    scene.text('"It\'s dangerous to go without protection today," you tell him. "We should use a condom. Can we use yours?"');
    if ((((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'pullout'  ||  ((s as any).npc_arrogant ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0)  &&  ((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] < 1) {
      // TODO-QSP: dynamic text: "We don't need condoms," <<$npcdesc>> says. "I've got pullout game."
      scene.text(`"We don't need condoms," ${((s as any).npcdesc ?? 0)} says. "I've got pullout game."`);
      ((s as any).npc_pullout_game ?? {})[String((s as any).npcID ?? 0)] = 1;
      qspCall(s, 'sex_ev_condoms', 'npc_pullout_game');
    } else {
      if (((s as any).sex_ev ?? 0)?.['condom_count'] > ((s as any).sex_ev ?? 0)?.['condoms_used']) {
        ((s as any).sex_ev ?? {})['condom'] = 1;
        ((s as any).sex_ev ?? {})['must_fuck'] = 1;
        if (((s as any).sex_ev ?? 0)?.['loc'] === 'npc_home') {
          scene.text('He nods, reaching over to his nightstand for a condom.');
        } else {
          if (((s as any).sex_ev ?? 0)?.['loc'] === 'hotel_room') {
            scene.text('He nods, reaching into his suitcase to retrieve one.');
          } else {
            scene.text('He nods, reaching to retrieve one from his wallet.');
          }
        }
        qspCall(s, 'sex_ev_condoms', 'npc_condom_put_on');
      } else {
        scene.text('"Don\'t have any left. I\'m all out."');
        qspCall(s, 'sex_ev_condoms', 'no_condom2');
      }
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSafedayCheck(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: "Is today a safe day?" <<$npcdesc>> asks. "Can I come inside you?"
  scene.text(`"Is today a safe day?" ${((s as any).npcdesc ?? 0)} asks. "Can I come inside you?"`);
  if (((s as any).birth_control ?? 0)?.['think_safe'] === 0) {
    if (((s as any).stat ?? 0)?.['preg_risk'] === 'safe') {
      scene.actions([
        { label: 'It\'s safe', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['preg_risk'] = 'safe';
    ((s as any).sex_ev ?? {})['creampie_allowance'] = 1;
    scene.text('"It\'s safe," you smile. "Fill me up."');
  }, goto: ['sex_ev_sex', 'position_choose'] },
      ]);
    } else {
      if (((s as any).stat ?? 0)?.['preg_risk'] === 'prob_safe') {
        qspCall(s, 'sex_ev_condoms', 'already_creampie2');
        qspCall(s, 'sex_ev_condoms', 'pc_dangerous_day_cant_cum_inside');
        qspCall(s, 'sex_ev_condoms', 'pc_dangerous_day_pullout');
        qspCall(s, 'sex_ev_condoms', 'pc_dangerous_day_condom_insist');
        scene.actions([
          { label: 'Probably safe', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['preg_risk'] = 'prob_safe';
    ((s as any).sex_ev ?? {})['no_condom'] = 1;
    ((s as any).sex_ev ?? {})['creampie_allowance'] = 1;
    scene.text('"Safe enough," you smile. "Go ahead. Fill me up."');
  }, goto: ['sex_ev_sex', 'position_choose'] },
          { label: 'Risk it (dangerous)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['preg_risk'] = 'danger';
    // TODO-QSP: $npc_free_creampies[$npcID] = 'at_will'
    scene.text('"It probably isn\'t safe today," you admit. "But I ."');
    qspCall(s, 'sex_ev_condoms', 'pc_dangerous_day2');
    // TODO-QSP: end !}
  } },
        ]);
      } else {
        scene.actions([
          { label: 'You\'re on birth control', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "I'm on the <<$birth_control['type']>> now," you smile. "Come inside me as much ...
    scene.text(`"I'm on the ${((s as any).birth_control ?? 0)?.['type']} now," you smile. "Come inside me as much as you want."`);
    qspCall(s, 'sex_ev_stats', 'birth_control_know');
    ((s as any).sex_ev ?? {})['no_condom'] = 1;
    ((s as any).sex_ev ?? {})['creampie_allowance'] = 1;
  }, goto: ['sex_ev_sex', 'position_choose'] },
        ]);
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'setup':
      enterSetup(s, scene);
      break;
    case 'check_count':
      enterCheckCount(s, scene);
      break;
    case 'condoms':
      enterCondoms(s, scene);
      break;
    case 'condom_wait':
      enterCondomWait(s, scene);
      break;
    case 'pc_need_condoms':
      enterPcNeedCondoms(s, scene);
      break;
    case 'pc_condoms':
      enterPcCondoms(s, scene);
      break;
    case 'npc_latex_allergy':
      enterNpcLatexAllergy(s, scene);
      break;
    case 'pc_condoms2':
      enterPcCondoms2(s, scene);
      break;
    case 'pc_use_condoms':
      enterPcUseCondoms(s, scene);
      break;
    case 'pc_no_condoms_left':
      enterPcNoCondomsLeft(s, scene);
      break;
    case 'pc_no_condoms_left2':
      enterPcNoCondomsLeft2(s, scene);
      break;
    case 'pc_condom_ask':
      enterPcCondomAsk(s, scene);
      break;
    case 'pc_condom_ask2':
      enterPcCondomAsk2(s, scene);
      break;
    case 'pc_condom_ask3':
      enterPcCondomAsk3(s, scene);
      break;
    case 'pc_skip_the_condom':
      enterPcSkipTheCondom(s, scene);
      break;
    case 'pc_skip_the_condom2':
      enterPcSkipTheCondom2(s, scene);
      break;
    case 'will_morning_after_pill':
      enterWillMorningAfterPill(s, scene);
      break;
    case 'npc_condom_use':
      enterNpcCondomUse(s, scene);
      break;
    case 'npc_condom_put_on':
      enterNpcCondomPutOn(s, scene);
      break;
    case 'condom_conscious_npc':
      enterCondomConsciousNpc(s, scene);
      break;
    case 'bulk_condoms':
      enterBulkCondoms(s, scene);
      break;
    case 'npc_out_of_condoms':
      enterNpcOutOfCondoms(s, scene);
      break;
    case 'npc_pullout_game':
      enterNpcPulloutGame(s, scene);
      break;
    case 'no_condom_allow_annoyed':
      enterNoCondomAllowAnnoyed(s, scene);
      break;
    case 'no_condom_allow_amused':
      enterNoCondomAllowAmused(s, scene);
      break;
    case 'pulled_out_last_time':
      enterPulledOutLastTime(s, scene);
      break;
    case 'didnt_pull_out_last_time':
      enterDidntPullOutLastTime(s, scene);
      break;
    case 'still_got_pullout_game':
      enterStillGotPulloutGame(s, scene);
      break;
    case 'npc_doesnt_use_condoms':
      enterNpcDoesntUseCondoms(s, scene);
      break;
    case 'npc_promise_wont_creampie':
      enterNpcPromiseWontCreampie(s, scene);
      break;
    case 'insist_need_condom':
      enterInsistNeedCondom(s, scene);
      break;
    case 'trust_no_creampie':
      enterTrustNoCreampie(s, scene);
      break;
    case 'trust_no_creampie_nervous':
      enterTrustNoCreampieNervous(s, scene);
      break;
    case 'condom_why2':
      enterCondomWhy2(s, scene);
      break;
    case 'no_condom_leave':
      enterNoCondomLeave(s, scene);
      break;
    case 'no_condom_pullout_allow':
      enterNoCondomPulloutAllow(s, scene);
      break;
    case 'no_condom1':
      enterNoCondom1(s, scene);
      break;
    case 'no_condom2':
      enterNoCondom2(s, scene);
      break;
    case 'no_condom2.1':
      enterNoCondom2_1(s, scene);
      break;
    case 'no_sex_only':
      enterNoSexOnly(s, scene);
      break;
    case 'npc_condom_complain':
      enterNpcCondomComplain(s, scene);
      break;
    case 'npc_lets_skip_condom':
      enterNpcLetsSkipCondom(s, scene);
      break;
    case 'dont_cum_in_me':
      enterDontCumInMe(s, scene);
      break;
    case 'disable_condoms':
      enterDisableCondoms(s, scene);
      break;
    case 'disable_condoms_options1':
      enterDisableCondomsOptions1(s, scene);
      break;
    case 'disable_condoms_options2':
      enterDisableCondomsOptions2(s, scene);
      break;
    case 'catholic_condoms':
      enterCatholicCondoms(s, scene);
      break;
    case 'catholic_condom_react':
      enterCatholicCondomReact(s, scene);
      break;
    case 'reenable_condoms_code':
      enterReenableCondomsCode(s, scene);
      break;
    case 'reenable_condoms1':
      enterReenableCondoms1(s, scene);
      break;
    case 'reenable_condoms1_stop_bc':
      enterReenableCondoms1StopBc(s, scene);
      break;
    case 'reenable_condoms2':
      enterReenableCondoms2(s, scene);
      break;
    case 'reenable_condoms3':
      enterReenableCondoms3(s, scene);
      break;
    case 'condom_compromise':
      enterCondomCompromise(s, scene);
      break;
    case 'temp_disable_condoms':
      enterTempDisableCondoms(s, scene);
      break;
    case 'father_check':
      enterFatherCheck(s, scene);
      break;
    case 'npc_preg_react':
      enterNpcPregReact(s, scene);
      break;
    case 'npc_no_condom_react':
      enterNpcNoCondomReact(s, scene);
      break;
    case 'npc_temp_no_condom_react':
      enterNpcTempNoCondomReact(s, scene);
      break;
    case 'npc_hesitate_childfree':
      enterNpcHesitateChildfree(s, scene);
      break;
    case 'bareback_check':
      enterBarebackCheck(s, scene);
      break;
    case 'need_condoms_today':
      enterNeedCondomsToday(s, scene);
      break;
    case 'safeday_check':
      enterSafedayCheck(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const sex_ev_condoms: LocationDef = {
  name: 'sex_ev_condoms',
  title: 'Just because you wanted to sleep with him doesn\'t mean you\'l',
  region: 'other',
  enter: enter,
};
