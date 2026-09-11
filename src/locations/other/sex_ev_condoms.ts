import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

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
                // TODO-QSP: xgt 'sex_ev_sex', 'position_choose'
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
    // TODO-QSP: xgt 'sex_ev_condoms', 'pc_condoms2'
  } },
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
      // TODO-QSP: xgt 'sex_ev_condoms', 'npc_pullout_game'
    } else {
      if (((s as any).npc_no_condoms ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
        // TODO-QSP: xgt 'sex_ev_condoms', 'npc_doesnt_use_condoms'
      } else {
        // TODO-QSP: xgt 'sex_ev_condoms', 'pc_condom_ask3'
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
    // TODO-QSP: xgt 'sex_ev_sex', 'position_choose'
  } },
      { label: 'Put a condom on him with your mouth', handler: (st: GameState) => {
    scene.img('images/shared/sex/misc/condom_mouth.mp4');
    qspCall(s, 'sex_ev_stats', 'pc_condom_stats');
    scene.text('You lean over the side of the bed and reach down to your purse. After fishing around for a few moments, you pull out a condom. You tear the packaging open, and place the rubber onto the tip of his penis, kissing it through the rubber. Then, using your fingers, you unroll it smoothly over the length of his cock, your lips following all the way down. You bob your head up and down a few more times to make sure it\'s all the way on before glancing up at him.');
    if (((s as any).sex_ev ?? 0)?.['first_condom'] === 0) {
      ((s as any).sex_ev ?? {})['first_condom'] = 1;
      scene.text('"Gotta practice safe sex," you smile.');
    }
    // TODO-QSP: xgt 'sex_ev_sex', 'position_choose'
  } },
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
    // TODO-QSP: xgt 'sex_ev_sex', 'position_choose'
  } },
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
    // TODO-QSP: xgt 'sex_ev_sex', 'position_choose'
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
    // TODO-QSP: xgt 'sex_ev_sex', 'position_choose'
  } },
    { label: 'Put it on for him', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_stats', 'npc_condom_stats');
    qspCall(s, 'arousal', 'foreplay_give', (-2));
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/misc/condom_put.jpg');
    // TODO-QSP: dynamic text: <<$npcdesc>> tears open the packaging when you swiftly reach over and pluck the ...
    scene.text(`${((s as any).npcdesc ?? 0)} tears open the packaging when you swiftly reach over and pluck the condom out of the wrapper.`);
    scene.text('"Here, let me," you say with a sexy smile. You gently roll the rubber sleeve down his shaft, squeezing just hard enough to make him twitch under your touch.');
    // TODO-QSP: xgt 'sex_ev_sex', 'position_choose'
  } },
    { label: 'Put it on with your mouth', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_stats', 'npc_condom_stats');
    scene.img('images/shared/sex/misc/condom_mouth.mp4');
    // TODO-QSP: dynamic text: <<$npcdesc>> tears open the packaging when you swiftly reach over and pluck the ...
    scene.text(`${((s as any).npcdesc ?? 0)} tears open the packaging when you swiftly reach over and pluck the condom out of the wrapper.`);
    scene.text('"Here, let me," you say with a sexy smile. Placing it on the tip of his cock, you lean over and put your lips over both. Then, using both hands, you roll the sleeve down his shaft, following with your head, lips pressed tight against the rubber. Even through the rubber, you can feel the heat of his member against your tongue.');
    scene.text('You bob your head up and down a few times for good measure before coming up and flashing a grin.');
    // TODO-QSP: xgt 'sex_ev_sex', 'position_choose'
  } },
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
    // TODO-QSP: xgt 'sex_ev_sex', 'position_choose'
  } },
      { label: 'Use one of your condoms (mouth)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['using_pc_condoms'] = 1;
    qspCall(s, 'sex_ev_stats', 'pc_condom_stats');
    scene.img('images/shared/sex/misc/condom_mouth.mp4');
    // TODO-QSP: iif(mc_inventory['normal_condoms'] = 1, '"That''s okay, I''ve got one."', '"That''s okay, I''ve got ...
    scene.text('You reach into your bag and pull out a condom, rolling it onto his cock with your mouth.');
    // TODO-QSP: xgt 'sex_ev_sex', 'position_choose'
  } },
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
    // TODO-QSP: xgt 'sex_ev_sex', 'position_choose'
  } },
      { label: 'Last chance', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    ((s as any).npc_last_pullout_chance ?? {})[String((s as any).npcID ?? 0)] = (((s as any).npc_last_pullout_chance ?? {})[String((s as any).npcID ?? 0)] ?? 0) + (1);
    scene.text('"... fine..." you sigh begrudgingly. "But this is your last chance!"');
    if (((s as any).npc_last_pullout_chance ?? 0)?.[String((s as any).npcID ?? 0)] > 1  &&  (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0)) {
      scene.text('"Yeah, yeah, sure," he snickers back as he gets into position. "You\'ve said that before too."');
    } else {
      scene.text('He nods eagerly as he gets into position.');
    }
    // TODO-QSP: xgt 'sex_ev_sex', 'position_choose'
  } },
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
    // TODO-QSP: xgt 'sex_ev_sex', 'position_choose'
  } },
      { label: 'Last chance', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    ((s as any).npc_last_pullout_chance ?? {})[String((s as any).npcID ?? 0)] = (((s as any).npc_last_pullout_chance ?? {})[String((s as any).npcID ?? 0)] ?? 0) + (1);
    scene.text('"Oh <i>fine</i>..." you sigh with false drama, giving him a teasing smile. "I\'ll give you one more chance to prove yourself."');
    if (((s as any).npc_last_pullout_chance ?? 0)?.[String((s as any).npcID ?? 0)] > 1  &&  (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0)) {
      scene.text('"Yeah, yeah, sure," he snickers back as he gets into position. "You\'ve said that before too."');
    } else {
      scene.text('He nods eagerly as he gets into position.');
    }
    // TODO-QSP: xgt 'sex_ev_sex', 'position_choose'
  } },
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
    // TODO-QSP: xgt 'sex_ev_sex', 'position_choose'
  } },
      { label: 'No need to pull out', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['preg_risk'] = 'safe';
    ((s as any).sex_ev ?? {})['creampie_allowance'] = 1;
    ((s as any).sex_ev ?? {})['pullout_game'] = 0;
    scene.text('"You don\'t have to," you say with a wry smile. "It\'s a safe day in my cycle."');
    // TODO-QSP: xgt 'sex_ev_sex', 'position_choose'
  } },
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
    // TODO-QSP: xgt 'sex_ev_sex', 'position_choose'
  } },
      { label: 'No need to pull out', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['preg_risk'] = 'prob_safe';
    ((s as any).sex_ev ?? {})['creampie_allowance'] = 1;
    ((s as any).sex_ev ?? {})['pullout_game'] = 0;
    scene.text('"You don\'t have to," you say with a wry smile. "It should be a safe day in my cycle."');
    // TODO-QSP: xgt 'sex_ev_sex', 'position_choose'
  } },
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
    // TODO-QSP: xgt 'sex_ev_sex', 'position_choose'
  } },
    { label: 'Last chance', handler: (st: GameState) => {
    ((s as any).npc_last_pullout_chance ?? {})[String((s as any).npcID ?? 0)] = (((s as any).npc_last_pullout_chance ?? {})[String((s as any).npcID ?? 0)] ?? 0) + (1);
    ((s as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    scene.text('"... fine..." you sigh begrudgingly. "But this is your last chance!"');
    if (((s as any).npc_last_pullout_chance ?? 0)?.[String((s as any).npcID ?? 0)] > 1  &&  (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0)) {
      scene.text('"Yeah, yeah, sure," he snickers back as he gets into position. "You\'ve said that before too."');
    } else {
      scene.text('He nods eagerly as he gets into position.');
    }
    // TODO-QSP: xgt 'sex_ev_sex', 'position_choose'
  } },
  ]);
  scene.build();
}

function enterNoCondomAllowAmused(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Allow it', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    scene.text('"Oh <i>fine</i>..." you sigh with false drama, giving him a teasing smile. "I\'ll trust you this time."');
    scene.text('He nods eagerly as he gets into position.');
    // TODO-QSP: xgt 'sex_ev_sex', 'position_choose'
  } },
    { label: 'Last chance', handler: (st: GameState) => {
    ((s as any).npc_last_pullout_chance ?? {})[String((s as any).npcID ?? 0)] = (((s as any).npc_last_pullout_chance ?? {})[String((s as any).npcID ?? 0)] ?? 0) + (1);
    ((s as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    scene.text('"Oh <i>fine</i>..." you sigh with false drama, giving him a teasing smile. "I\'ll give you one more chance to prove yourself."');
    if (((s as any).npc_last_pullout_chance ?? 0)?.[String((s as any).npcID ?? 0)] > 1  &&  (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0)) {
      scene.text('"Yeah, yeah, sure," he snickers back as he gets into position. "You\'ve said that before."');
    } else {
      scene.text('He nods eagerly as he gets into position.');
    }
    // TODO-QSP: xgt 'sex_ev_sex', 'position_choose'
  } },
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
    // TODO-QSP: xgt 'sex_ev_sex', 'position_choose'
  } },
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
    // TODO-QSP: xgt 'sex_ev_sex', 'position_choose'
  } },
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
    scene.text('"Relax," he says dismissively and keeps moving into a position to fuck you. "It\'ll be fine."');
    scene.actions([
      { label: 'Let him do what he wants', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'sex', 'resist');
    // TODO-QSP: else !}
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
  } },
  ]);
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
    default:
      enterSetup(s, scene);
      break;
  }
}

export const sex_ev_condoms: LocationDef = {
  name: 'sex_ev_condoms',
  title: 'Just because you wanted to sleep with him doesn\'t mean you\'l',
  region: 'other',
  enter: enter,
};
