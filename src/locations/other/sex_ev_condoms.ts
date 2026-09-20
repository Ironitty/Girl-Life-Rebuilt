import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterSetup(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).sex_ev ?? 0)?.['loc'] === 'npc_home') {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['condom_count'] = 100;
  } else {
    if (((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['condom_count'] = (Math.floor(Math.random() * 6) + 5);
    } else {
      if (((s as any).sex_ev ?? 0)?.['condom_count'] === 0  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] === 0  &&  ((s as any).npc_no_condoms ?? 0)?.[String((s as any).npcID ?? 0)] < 1) {
        if ((Math.floor(Math.random() * 5) + 1) === 1) {
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['condom_count'] = 0;
        } else {
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['condom_count'] = (Math.floor(Math.random() * 10) + 1);
        }
      } else {
        if (((s as any).npc_no_condoms ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['condom_count'] = 0;
        }
      }
    }
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['condom_setup'] = 1;
  qspCall(s, 'sex_ev_sex', 'position_picker');
  // TODO-QSP: end
  scene.build();
}

function enterCheckCount(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['condoms_used'] >= ((s as any).sex_ev ?? 0)?.['condom_count']  &&  ((s as any).sex_ev ?? 0)?.['condom_count'] > 0) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['npc_used_all_condoms'] = 1;
  }
  // TODO-QSP: end
  scene.build();
}

function enterCondoms(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['condom_setup'] !== 1) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCheckCount(s, scene); (s as any).locArgs = __savedLocArgs; }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['must_fuck'] = 1;
  if (((s as any).sex_ev ?? 0)?.['no_condom'] !== 1) {
    if (((s as any).npc_bareback ?? 0)?.[String((s as any).npcID ?? 0)] === 'never_use'  &&  ((s as any).sex_ev ?? 0)?.['condom'] !== 1) {
      // TODO-QSP: dynamic text: You agreed to stop using condoms with <<$npcdesc>> and he makes no move to get o...
      scene.text(`You agreed to stop using condoms with ${((s as any).npcdesc ?? '')} and he makes no move to get one.`);
      if (((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === 'when_safe'  ||  ((s as any).npc_creampie_permission ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSafedayCheck(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        qspCall(s, 'sex_ev_sex', 'position_choose');
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDontCumInMe(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPcSafeDay(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPcDangerousDay(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterReenableCondoms1(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNoMoreFreeCreampies1(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAlreadyCreampie1(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
      if (((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === 'at_will'  ||  ((s as any).npc_creampie_permission ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['creampie_allowance'] = 1;
      }
    } else {
      if (((s as any).npc_bareback ?? 0)?.[String((s as any).npcID ?? 0)] === 'when_safe'  &&  ((s as any).sex_ev ?? 0)?.['no_condom'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['condom'] !== 1) {
        if (((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === 'when_safe') {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSafedayCheck(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          // TODO-QSP: dynamic text: "Is it safe?" <<$npcdesc>> asks. "Can we go bareback?"
          scene.text(`"Is it safe?" ${((s as any).npcdesc ?? '')} asks. "Can we go bareback?"`);
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBarebackCheck(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      } else {
        if (((s as any).sex_ev ?? 0)?.['condom'] === 0) {
          if (((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCondomConsciousNpc(s, scene); (s as any).locArgs = __savedLocArgs; }
          } else {
            if (((s as any).sex_ev ?? 0)?.['condom_count'] > 0  &&  ((Math.floor(Math.random() * 2) + 0) + (Math.floor(Math.random() * (((s as any).npc_diligent ?? 0)?.[String((s as any).npcID ?? 0)] - 0 + 1)) + (0)) - ((s as any).npc_risktaker ?? 0)?.[String((s as any).npcID ?? 0)] >= 1  ||  ((s as any).npc_always_condoms ?? 0)?.[String((s as any).npcID ?? 0)] === 1)  &&  ((((s as any).npc_risktaker ?? 0)?.[String((s as any).npcID ?? 0)] !== 1  &&  ((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] !== 'pullout')  ||  (((s as any).npc_risktaker ?? 0)?.[String((s as any).npcID ?? 0)] !== 1  &&  ((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] !== 'facial'))  &&  ((s as any).npc_no_condoms ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNpcCondomUse(s, scene); (s as any).locArgs = __savedLocArgs; }
            } else {
              if (((s as any).sex_ev ?? 0)?.['creampie_allowance'] === 1  &&  ((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === ''  &&  ((s as any).npc_creampie_permission ?? 0)?.[String((s as any).npcID ?? 0)] < 1) {
                ((s as any).sex_ev = (s as any).sex_ev ?? {})['no_condom'] = 1;
                // TODO-QSP: dynamic text: "Is it really okay for me to come inside?" <<$npcdesc>> asks as he gets into pos...
                scene.text(`"Is it really okay for me to come inside?" ${((s as any).npcdesc ?? '')} asks as he gets into position.`);
                scene.text('You nod back, smiling warmly. He returns the smile and starts pushing his way in.');
                qspGoto(s, 'sex_ev_sex', 'position_choose');
              } else {
                // TODO-QSP: dynamic text: <<$npcdesc>> makes no indication that he''s going to put on a condom.
                scene.text(`${((s as any).npcdesc ?? '')} makes no indication that he's going to put on a condom.`);
                if (((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === 'when_safe'  ||  ((s as any).npc_creampie_permission ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
                  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSafedayCheck(s, scene); (s as any).locArgs = __savedLocArgs; }
                } else {
                  if ((((s as any).npc_risktaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] !== 'creampie')  ||  (((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] > 1  &&  ((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie')) {
                    scene.text('"Don\'t worry. I\'ll pull out," he says.');
                    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNpcPulloutGame(s, scene); (s as any).locArgs = __savedLocArgs; }
                    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPcDangerousDay(s, scene); (s as any).locArgs = __savedLocArgs; }
                    qspCall(s, 'sex_ev_condoms', 'lube_up1');
                    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStartedBc1(s, scene); (s as any).locArgs = __savedLocArgs; }
                  } else {
                    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPcCondomAsk(s, scene); (s as any).locArgs = __savedLocArgs; }
                    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPcCondoms(s, scene); (s as any).locArgs = __savedLocArgs; }
                    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDontCumInMe(s, scene); (s as any).locArgs = __savedLocArgs; }
                    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPcSafeDay(s, scene); (s as any).locArgs = __savedLocArgs; }
                    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPcDangerousDay(s, scene); (s as any).locArgs = __savedLocArgs; }
                    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAlreadyCreampie1(s, scene); (s as any).locArgs = __savedLocArgs; }
                    qspCall(s, 'sex_ev_condoms', 'lube_up1');
                    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStartedBc1(s, scene); (s as any).locArgs = __savedLocArgs; }
                    if (((s as any).stat ?? 0)?.['think_virgin'] === 1  &&  ((s as any).sex_ev ?? 0)?.['virgin_fuck'] === 0  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
                      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterVirginCondomAsk1(s, scene); (s as any).locArgs = __savedLocArgs; }
                    }
                  }
                }
              }
            }
          }
        } else {
          if (((s as any).sex_ev ?? 0)?.['using_pc_condoms'] === 1) {
            if (((s as any).sex_ev ?? 0)?.['condom'] === 1) {
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPcUseCondoms(s, scene); (s as any).locArgs = __savedLocArgs; }
            } else {
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPcCondoms(s, scene); (s as any).locArgs = __savedLocArgs; }
            }
          } else {
            if (((s as any).sex_ev ?? 0)?.['condom'] === 1) {
              if (((s as any).sex_ev ?? 0)?.['condoms_used'] >= ((s as any).sex_ev ?? 0)?.['condom_count']) {
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNpcOutOfCondoms(s, scene); (s as any).locArgs = __savedLocArgs; }
              } else {
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNpcCondomUse(s, scene); (s as any).locArgs = __savedLocArgs; }
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
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPcNoCondomsLeft2(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        scene.text('"I think that was my last condom..." you say.');
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPcNoCondomsLeft(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['npc_used_all_condoms'] > 0) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNpcOutOfCondoms(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCondomWait(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['no_condom'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['skip_condom'] !== 1) {
    scene.actions([
      { label: 'Wait! (condoms)', handler: (st: GameState) => {
    if (((st as any).mc_inventory ?? 0)?.['normal_condoms'] > 0  ||  (((st as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0  &&  ((st as any).preziktype ?? 0) === 0)) {
      scene.actions([
        { label: 'Get a condom from your bag', handler: (st: GameState) => {
    scene.text('"Wait!" you yelp and scramble for your bag to pull out a condom, holding it between you. "You need to use a condom. Please?"');
    qspGoto(st, 'sex_ev_condoms', 'pc_condoms2');
  } },
      ]);
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcDangerousDay(s, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Ask him to use a condom', handler: (st: GameState) => {
    scene.text('"Wait!" you yelp. "You need to use a condom!"');
    if ((((st as any).npc_cum_pref ?? 0)?.[String((st as any).npcID ?? 0)] === 'pullout'  ||  ((st as any).npc_arrogant ?? 0)?.[String((st as any).npcID ?? 0)] > 0  ||  ((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] > 0  ||  ((st as any).npc_risktaker ?? 0)?.[String((st as any).npcID ?? 0)] > 0)  &&  ((st as any).npc_condom_conscious ?? 0)?.[String((st as any).npcID ?? 0)] < 1  &&  ((st as any).npc_know_bc ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
      // TODO-QSP: dynamic text: "Don''t worry," <<$npcdesc>> says. "I''ve got pullout game."
      scene.text(`"Don't worry," ${((st as any).npcdesc ?? '')} says. "I've got pullout game."`);
      ((st as any).npc_pullout_game = (st as any).npc_pullout_game ?? {})[String((st as any).npcID ?? 0)] = 1;
      qspGoto(st, 'sex_ev_condoms', 'npc_pullout_game');
    } else {
      if (((st as any).npc_no_condoms ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
        qspGoto(st, 'sex_ev_condoms', 'npc_doesnt_use_condoms');
      } else {
        qspGoto(st, 'sex_ev_condoms', 'pc_condom_ask3');
      }
    }
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPcNeedCondoms(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mc_inventory ?? 0)?.['normal_condoms'] > 0  ||  (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0  &&  ((s as any).preziktype ?? 0) === 0)) {
    scene.actions([
      { label: 'Use your condoms', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['condom_motive'] = 'safety';
    scene.text('"Sorry," you say, pulling a condom from your bag. "But we need to be safe today."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcCondoms2(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPcCondoms(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mc_inventory ?? 0)?.['normal_condoms'] > 0  ||  (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0  &&  ((s as any).preziktype ?? 0) === 0)) {
    scene.actions([
      { label: 'Pull out a condom', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['using_pc_condoms'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['condom_motive'] = 'safety';
    // TODO-QSP: dynamic text: Before <<$npcdesc>> can penetrate you, you take a swift moment to grab a condom ...
    scene.text(`Before ${((st as any).npcdesc ?? '')} can penetrate you, you take a swift moment to grab a condom out of your bag.`);
    scene.text('"Condom first?" you ask, holding it up between you.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcCondoms2(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterNpcLatexAllergy(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pc_know_npc_latex_allrg ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    if (((s as any).npc_assertive ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: "Come on. You know I''m allergic to them," <<$npcdesc>> frowns.
      scene.text(`"Come on. You know I'm allergic to them," ${((s as any).npcdesc ?? '')} frowns.`);
    } else {
      // TODO-QSP: dynamic text: "I''m allergic, remember?" <<$npcdesc>> says embarrassedly.
      scene.text(`"I'm allergic, remember?" ${((s as any).npcdesc ?? '')} says embarrassedly.`);
    }
  } else {
    if (((s as any).npc_assertive ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: "I can''t use condoms," <<$npcdesc>> says. "I''m allergic to latex. Makes my dic...
      scene.text(`"I can't use condoms," ${((s as any).npcdesc ?? '')} says. "I'm allergic to latex. Makes my dick break out in a rash."`);
    } else {
      // TODO-QSP: dynamic text: "I''m, uhh, allergic to condoms..." <<$npcdesc>> says uncomfortably.
      scene.text(`"I'm, uhh, allergic to condoms..." ${((s as any).npcdesc ?? '')} says uncomfortably.`);
      scene.text('"You\'re kidding."');
      scene.text('"Latex allergy," he replies with an embarrassed smile. "Makes my dick break out in a really bad rash."');
    }
  }
  ((s as any).pc_know_npc_latex_allrg = (s as any).pc_know_npc_latex_allrg ?? {})[String((s as any).npcID ?? 0)] = 1;
  // TODO-QSP: end
  scene.build();
}

function enterPcCondoms2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_no_condoms ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    if (((s as any).npc_latex_allrg ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNpcLatexAllergy(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['npc_doesnt_want_condoms'] = 1;
      scene.text('"Come on," he moans. "Do we have to? I hate condoms."');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNoCondom1(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if ((Math.floor(Math.random() * 10) + 1) >= 7  &&  ((s as any).npc_bareback ?? 0)?.[String((s as any).npcID ?? 0)] !== 'when_safe') {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['npc_doesnt_want_condoms'] = 1;
      scene.text('"Come on," he moans. "Do we have to use one today?"');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNoCondom1(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> nods and you sigh in relief as he takes it from you, tearing open t...
      scene.text(`${((s as any).npcdesc ?? '')} nods and you sigh in relief as he takes it from you, tearing open the package and clumsily rolling the little rubber onto his cock.`);
      qspCall(s, 'sex_ev_stats', 'pc_condom_stats');
      if (((s as any).sex_ev ?? 0)?.['position'] !== 'miss'  ||  ((s as any).sex_ev ?? 0)?.['position'] !== 'doggy'  ||  ((s as any).sex_ev ?? 0)?.['position'] !== 'cowgirl') {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'miss';
      }
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Let ' + String(((s as any).npcdesc ?? '') ?? '') + ' fuck you', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_<<$sex_ev[''position'']>>', '<<$sex_ev[''position...
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPcUseCondoms(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mc_inventory ?? 0)?.['normal_condoms'] > 0  ||  (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0  &&  ((s as any).preziktype ?? 0) === 0)) {
    scene.actions([
      { label: 'Put a condom on him', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_stats', 'pc_condom_stats');
    scene.img('images/shared/sex/misc/condom_put.jpg');
    if (((st as any).sex_ev ?? 0)?.['first_condom'] === 0) {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['first_condom'] = 1;
      if (((st as any).sex_ev ?? 0)?.['loc'] === 'family_home') {
        scene.text('Leaning over the side of the bed, you reach into your desk drawer, the one where you hide all your birth control from your mother. After fishing around blindly for a few moments, you mange to find a condom, upon which you tear open the packaging and roll it onto his cock for him.');
      } else {
        if (((st as any).sex_ev ?? 0)?.['loc'] === 'player_home') {
          scene.text('Leaning over the side of the bed, you reach into the nightstand where you keep your birth control. After fishing around blindly for a few moments, you mange to find a condom, upon which you tear open the packaging and roll it onto his cock for him.');
        } else {
          // TODO-QSP: dynamic text: Leaning over the side of the bed, you reach down to your purse. After fishing ar...
          scene.text(`Leaning over the side of the bed, you reach down to your purse. After fishing around for a few moments, you pull out a condom. You tear the packaging open and roll it onto ${((st as any).npcdesc ?? '')}'s cock for him.`);
        }
      }
      scene.text('"Gotta practice safe sex," you wink.');
    } else {
      scene.text('You grab another condom from your stash and roll it on to his cock.');
    }
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
      { label: 'Put a condom on him with your mouth', handler: (st: GameState) => {
    scene.img('images/shared/sex/misc/condom_mouth.mp4');
    qspCall(st, 'sex_ev_stats', 'pc_condom_stats');
    scene.text('You lean over the side of the bed and reach down to your purse. After fishing around for a few moments, you pull out a condom. You tear the packaging open, and place the rubber onto the tip of his penis, kissing it through the rubber. Then, using your fingers, you unroll it smoothly over the length of his cock, your lips following all the way down. You bob your head up and down a few more times to make sure it\'s all the way on before glancing up at him.');
    if (((st as any).sex_ev ?? 0)?.['first_condom'] === 0) {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['first_condom'] = 1;
      scene.text('"Gotta practice safe sex," you smile.');
    }
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
    ]);
  } else {
    if (((s as any).sex_ev ?? 0)?.['using_pc_condoms'] === 1  &&  ((s as any).sex_ev ?? 0)?.['pc_out_of_condoms'] !== 1) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['pc_out_of_condoms'] = 1;
      if (((s as any).sex_ev ?? 0)?.['out_of_condoms'] === 1) {
        scene.text('"I think that was my last condom..." you say. "I guess that means we\'re both out...?"');
        // TODO-QSP: dynamic text: "I guess so," <<$npcdesc>> shrugs.
        scene.text(`"I guess so," ${((s as any).npcdesc ?? '')} shrugs.`);
        qspCall(s, 'sex_ev_after', 'no_condom_end');
      } else {
        if (((s as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
          scene.text('"I think that was my last condom..." you say.');
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPcNoCondomsLeft(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          scene.text('"Uhm..." You hesitate. "I don\'t think I have any on me..."');
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPcNoCondomsLeft(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNoSexOnly(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPcSkipTheCondom(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPcNoCondomsLeft(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_after', 'no_condom_end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Do you have any?', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
      // TODO-QSP: dynamic text: "But I''m not ready to stop," you grin, flexing your pussy around <<$npcdesc>>''...
      scene.text(`"But I'm not ready to stop," you grin, flexing your pussy around ${((st as any).npcdesc ?? '')}'s cock inside you. "Have you got any?"`);
    } else {
      scene.text('"But I\'m not ready to stop," you say. "Have you got any?"');
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcNoCondomsLeft2(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterPcNoCondomsLeft2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    // TODO-QSP: dynamic text: "I always have condoms," <<$npcdesc>> says. "You don''t have to keep buying them...
    scene.text(`"I always have condoms," ${((s as any).npcdesc ?? '')} says. "You don't have to keep buying them if you don't want to, you know. I order in bulk."`);
    qspCall(s, 'sex_ev_sex', 'reset');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBulkCondoms(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).sex_ev ?? 0)?.['condom_count'] > 0  &&  ((s as any).sex_ev ?? 0)?.['condoms_used'] < ((s as any).sex_ev ?? 0)?.['condom_count']) {
      // TODO-QSP: dynamic text: "Yeah, I have some," <<$npcdesc>> says.
      scene.text(`"Yeah, I have some," ${((s as any).npcdesc ?? '')} says.`);
      qspCall(s, 'sex_ev_sex', 'reset');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_condoms', 'npc_condom_use');
  } },
      ]);
    } else {
      if (((s as any).npc_no_condoms_know ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        // TODO-QSP: dynamic text: "Come on," <<$npcdesc>> says, rolling his eyes. "You know I hate using condoms. ...
        scene.text(`"Come on," ${((s as any).npcdesc ?? '')} says, rolling his eyes. "You know I hate using condoms. Lucky you can even talk me into using yours."`);
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>> shakes his head.
        scene.text(`${((s as any).npcdesc ?? '')} shakes his head.`);
        scene.text('"I don\'t."');
      }
      qspCall(s, 'sex_ev_after', 'no_condom_end');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPcSkipTheCondom(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNoSexOnly(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPcCondomAsk(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPcCondomAsk2(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Don\'t say anything', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_condom'] = 1;
    // TODO-QSP: dynamic text: <<$npcdesc>> takes your silence as consent and begins maneuvering into position.
    scene.text(`${((st as any).npcdesc ?? '')} takes your silence as consent and begins maneuvering into position.`);
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
  ]);
  scene.build();
}

function enterPcCondomAsk2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask him to put on a condom', handler: (st: GameState) => {
    if (((st as any).npc_bareback ?? 0)?.[String((st as any).npcID ?? 0)] === 'when_safe') {
      scene.text('"We need a condom today," you shake your head.');
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['condom_motive'] = 'pregnancy';
    } else {
      scene.text('"Could you put on a condom?" you ask.');
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['condom_motive'] = 'safety';
    }
    if (((st as any).npcID ?? 0) === 'A34') {
      qspCall(st, 'sex_ev_A34', 'kolka_condoms');
    } else {
      if ((((st as any).npc_cum_pref ?? 0)?.[String((st as any).npcID ?? 0)] === 'pullout'  ||  ((st as any).npc_arrogant ?? 0)?.[String((st as any).npcID ?? 0)] > 0  ||  ((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] > 0  ||  ((st as any).npc_risktaker ?? 0)?.[String((st as any).npcID ?? 0)] > 0)  &&  ((st as any).npc_condom_conscious ?? 0)?.[String((st as any).npcID ?? 0)] < 1  &&  ((st as any).npc_know_bc ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
        // TODO-QSP: dynamic text: "Don''t worry," <<$npcdesc>> says. "I''ve got pullout game."
        scene.text(`"Don't worry," ${((st as any).npcdesc ?? '')} says. "I've got pullout game."`);
        ((st as any).npc_pullout_game = (st as any).npc_pullout_game ?? {})[String((st as any).npcID ?? 0)] = 1;
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcPulloutGame(s, scene); (st as any).locArgs = __savedLocArgs; }
      } else {
        if (((st as any).npc_no_condoms ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
          { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcDoesntUseCondoms(s, scene); (st as any).locArgs = __savedLocArgs; }
        } else {
          { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcCondomAsk3(s, scene); (st as any).locArgs = __savedLocArgs; }
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterPcCondomAsk3(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_latex_allrg ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNpcLatexAllergy(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNoCondom1(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if ((Math.floor(Math.random() * 10) + 1) >= 7  &&  ((s as any).npc_bareback ?? 0)?.[String((s as any).npcID ?? 0)] !== 'when_safe') {
      if (((s as any).sex_ev ?? 0)?.['condom_count'] > ((s as any).sex_ev ?? 0)?.['condoms_used']) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['npc_doesnt_want_condoms'] = 1;
        scene.text('"Come on," he moans. "Do we have to use one today?"');
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNoCondom1(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        scene.text('"I\'m all out. Don\'t have any left."');
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNoCondom2(s, scene); (s as any).locArgs = __savedLocArgs; }
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
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNpcCondomPutOn(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPcSkipTheCondom(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'We could skip the condom', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['pc_skip_the_condom'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['skip_condom'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_condom'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['must_fuck'] = 1;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPulledOutLastTime(s, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Just this once?', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Maybe we can skip it..." you smile. "Just this once?"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcSkipTheCondom2(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'What could go wrong?', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['condom_motive'] = 'exception';
    scene.text('"Maybe we can skip it..." you smile. "What could go wrong?"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcSkipTheCondom2(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterPcSkipTheCondom2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['preg_risk'] === 'danger'  &&  ((s as any).npc_childfree ?? 0) === 1  &&  ((s as any).npc_no_condoms ?? 0)?.[String((s as any).npcID ?? 0)] < 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['no_condom'] = 0;
    // TODO-QSP: dynamic text: "Seems like a bad idea," <<$npcdesc>> says, shaking his head. "You said it''s da...
    scene.text(`"Seems like a bad idea," ${((s as any).npcdesc ?? '')} says, shaking his head. "You said it's dangerous for you today. I don't want to take the risk."`);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNoSexOnly(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Disappointed', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You sigh deeply as <<$npcdesc>> already starts to pull away from you.
    scene.text(`You sigh deeply as ${((st as any).npcdesc ?? '')} already starts to pull away from you.`);
    qspCall(st, 'sex_ev_after', 'after_sex1');
  } },
      { label: 'You\'re probably right', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Yeah... You''re probably right," you say ruefully as <<$npcdesc>> is already pu...
    scene.text(`"Yeah... You're probably right," you say ruefully as ${((st as any).npcdesc ?? '')} is already pulling away from you.`);
    qspCall(st, 'sex_ev_after', 'after_sex1');
  } },
    ]);
  } else {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['condom_motive'] = 'exception';
    scene.text('"Just this once," he smiles back.');
    qspGoto(s, 'sex_ev_sex', 'position_choose');
  }
  // TODO-QSP: end
  scene.build();
}

function enterWillMorningAfterPill(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mc_inventory ?? 0)?.['morning_after_pill'] > 0) {
    scene.actions([
      { label: 'Have a morning after pill', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['skip_condom'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_condom'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['must_fuck'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['ma_pill'] = 1;
    scene.text('"I have a morning after pill," you say. ');
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Buy a morning after pill tomorrow', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['skip_condom'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_condom'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['must_fuck'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['ma_pill_tomorrow'] = 1;
    scene.text('"I\'ll buy a pill tomorrow," you say. ');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterNpcCondomUse(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/misc/wait.mp4');
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['must_fuck'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cock_inserted'] = 0;
  if (((s as any).sex_ev ?? 0)?.['fuck_count'] > 1  &&  ((s as any).sex_ev ?? 0)?.['last_cum'] === 'condom') {
    // TODO-QSP: dynamic text: <<$npcdesc>> swaps out his used condom for a new one.
    scene.text(`${((s as any).npcdesc ?? '')} swaps out his used condom for a new one.`);
  } else {
    if (((s as any).sex_ev ?? 0)?.['fuck_count'] > 1) {
      // TODO-QSP: dynamic text: <<$npcdesc>> reaches for a new condom.
      scene.text(`${((s as any).npcdesc ?? '')} reaches for a new condom.`);
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> reaches for a condom from his nightstand.
      scene.text(`${((s as any).npcdesc ?? '')} reaches for a condom from his nightstand.`);
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNpcCondomPutOn(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).sex_ev ?? 0)?.['virgin'] === 1  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterVirginNoCondom(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).sex_ev ?? 0)?.['condom'] === 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTempDisableCondoms(s, scene); (s as any).locArgs = __savedLocArgs; }
      if (((s as any).sex_ev ?? 0)?.['type'] !== 'hookup') {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDisableCondoms(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterNpcCondomPutOn(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_sex', 'lube_up_condom1');
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for him', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_stats', 'npc_condom_stats');
    scene.img('images/shared/sex/misc/wait.mp4');
    if (((st as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
      scene.text('He tears open the packaging and begins rolling the rubber sleeve onto his cock. You wait patiently, watching him, thinking about what position you want to fuck him in.');
    } else {
      scene.text('He tears open the packaging and begins rolling the rubber sleeve onto his cock. You wait patiently, watching him, thinking about the next position you want him to fuck you in.');
    }
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
    { label: 'Put it on for him', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_stats', 'npc_condom_stats');
    qspCall(st, 'arousal', 'foreplay_give', (-2));
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/misc/condom_put.jpg');
    // TODO-QSP: dynamic text: <<$npcdesc>> tears open the packaging when you swiftly reach over and pluck the ...
    scene.text(`${((st as any).npcdesc ?? '')} tears open the packaging when you swiftly reach over and pluck the condom out of the wrapper.`);
    scene.text('"Here, let me," you say with a sexy smile. You gently roll the rubber sleeve down his shaft, squeezing just hard enough to make him twitch under your touch.');
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
    { label: 'Put it on with your mouth', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_stats', 'npc_condom_stats');
    scene.img('images/shared/sex/misc/condom_mouth.mp4');
    // TODO-QSP: dynamic text: <<$npcdesc>> tears open the packaging when you swiftly reach over and pluck the ...
    scene.text(`${((st as any).npcdesc ?? '')} tears open the packaging when you swiftly reach over and pluck the condom out of the wrapper.`);
    scene.text('"Here, let me," you say with a sexy smile. Placing it on the tip of his cock, you lean over and put your lips over both. Then, using both hands, you roll the sleeve down his shaft, following with your head, lips pressed tight against the rubber. Even through the rubber, you can feel the heat of his member against your tongue.');
    scene.text('You bob your head up and down a few times for good measure before coming up and flashing a grin.');
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
  ]);
  scene.build();
}

function enterCondomConsciousNpc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['fuck_count'] <= 1) {
    // TODO-QSP: dynamic text: <<$npcdesc>> immediately reaches for a condom.
    scene.text(`${((s as any).npcdesc ?? '')} immediately reaches for a condom.`);
  } else {
    if (((s as any).sex_ev ?? 0)?.['fuck_count'] > 1) {
      // TODO-QSP: dynamic text: <<$npcdesc>> reaches for another condom.
      scene.text(`${((s as any).npcdesc ?? '')} reaches for another condom.`);
    }
  }
  if (((s as any).sex_ev ?? 0)?.['virgin'] === 1  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterVirginNoCondom(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
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
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcCondomPutOn(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'If you\'re offering', handler: (st: GameState) => {
    scene.text('"Well, if you\'re offering..." you say gratefully.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcCondomPutOn(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'I might take you up on that', handler: (st: GameState) => {
    scene.text('"I just might take you up on that..." you say.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcCondomPutOn(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'I want to', handler: (st: GameState) => {
    scene.text('"I want to do my part," you smile. "I\'m enjoying the sex with you. Only fair that I pay for it too."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcCondomPutOn(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterNpcOutOfCondoms(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['npc_used_all_condoms'] = 1;
  // TODO-QSP: $sex_ev['bed_room']
  if (((s as any).sex_ev ?? 0)?.['fuck_count'] > 5) {
    // TODO-QSP: dynamic text: "I think that was my last condom," <<$npcdesc>> pants.
    scene.text(`"I think that was my last condom," ${((s as any).npcdesc ?? '')} pants.`);
  } else {
    // TODO-QSP: dynamic text: "I think that was my last condom," <<$npcdesc>> says.
    scene.text(`"I think that was my last condom," ${((s as any).npcdesc ?? '')} says.`);
  }
  qspCall(s, 'sex_ev_after', 'no_condom_end');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPcSkipTheCondom(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).mc_inventory ?? 0)?.['normal_condoms'] > 0  ||  (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0  &&  ((s as any).preziktype ?? 0) === 0)) {
    scene.actions([
      { label: 'Use one of your condoms', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_stats', 'pc_condom_stats');
    scene.img('images/shared/sex/misc/condom_put.jpg');
    // TODO-QSP: iif(mc_inventory['normal_condoms'] = 1, '"That''s okay, I''ve got one."', '"That''s okay, I''ve got ...
    scene.text('You reach into your bag and pull out a condom, rolling it onto his cock.');
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
      { label: 'Use one of your condoms (mouth)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['using_pc_condoms'] = 1;
    qspCall(st, 'sex_ev_stats', 'pc_condom_stats');
    scene.img('images/shared/sex/misc/condom_mouth.mp4');
    // TODO-QSP: iif(mc_inventory['normal_condoms'] = 1, '"That''s okay, I''ve got one."', '"That''s okay, I''ve got ...
    scene.text('You reach into your bag and pull out a condom, rolling it onto his cock with your mouth.');
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
    ]);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStillGotPulloutGame(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterNpcPulloutGame(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['pullout_game'] = 1;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterInsistNeedCondom(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNoCondomPulloutAllow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPulledOutLastTime(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDidntPullOutLastTime(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).npc_no_creampie_mistakes ?? 0)?.[String((s as any).npcID ?? 0)] <= ((s as any).npc_pullout_failure ?? 0)?.[String((s as any).npcID ?? 0)]  &&  ((s as any).npc_pullout_failure ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    scene.actions([
      { label: '"You always say that" (annoyed)', handler: (st: GameState) => {
    scene.text('"You always say that," you scowl. "And yet, for some reason I find myself full of cum half the time you say it."');
    scene.text('"I won\'t this time, I swear!" he insists.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPulledOutLastTime(s, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDidntPullOutLastTime(s, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Allow it', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    scene.text('"... fine..." you sigh begrudgingly. "But you better pull out this time!"');
    scene.text('He nods eagerly as he gets into position.');
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
      { label: 'Last chance', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    ((st as any).npc_last_pullout_chance = (st as any).npc_last_pullout_chance ?? {})[String((st as any).npcID ?? 0)] = ((st as any).npc_last_pullout_chance[String((st as any).npcID ?? 0)] ?? 0) + (1);
    scene.text('"... fine..." you sigh begrudgingly. "But this is your last chance!"');
    if (((st as any).npc_last_pullout_chance ?? 0)?.[String((st as any).npcID ?? 0)] > 1  &&  (((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] > 0  ||  ((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] > 0)) {
      scene.text('"Yeah, yeah, sure," he snickers back as he gets into position. "You\'ve said that before too."');
    } else {
      scene.text('He nods eagerly as he gets into position.');
    }
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
      { label: '<i>Need</i> a condom', handler: (st: GameState) => {
    scene.text('"Not a chance," you reply. "We\'re using one."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcDangerousDayCondomInsist2(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
      { label: '"You always say that" (tease)', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "You always say that and half the time I end up with a full load inside me," you...
    scene.text(`"You always say that and half the time I end up with a full load inside me," you giggle at ${((st as any).npcdesc ?? '')}.`);
    scene.text('"I won\'t this time, I swear!" he insists.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPulledOutLastTime(s, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDidntPullOutLastTime(s, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Allow it', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    scene.text('"Oh <i>fine</i>..." you sigh with false drama, giving him a teasing smile. "I\'ll trust you this time."');
    scene.text('He nods eagerly as he gets into position.');
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
      { label: 'Last chance', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    ((st as any).npc_last_pullout_chance = (st as any).npc_last_pullout_chance ?? {})[String((st as any).npcID ?? 0)] = ((st as any).npc_last_pullout_chance[String((st as any).npcID ?? 0)] ?? 0) + (1);
    scene.text('"Oh <i>fine</i>..." you sigh with false drama, giving him a teasing smile. "I\'ll give you one more chance to prove yourself."');
    if (((st as any).npc_last_pullout_chance ?? 0)?.[String((st as any).npcID ?? 0)] > 1  &&  (((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] > 0  ||  ((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] > 0)) {
      scene.text('"Yeah, yeah, sure," he snickers back as he gets into position. "You\'ve said that before too."');
    } else {
      scene.text('He nods eagerly as he gets into position.');
    }
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
      { label: '<i>Need</i> a condom', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Sorry, <<$npc_lovername[$npcID]>>," you smirk. "Gotta use a rubber this time."
    scene.text(`"Sorry, ${((st as any).npc_lovername ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''}," you smirk. "Gotta use a rubber this time."`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcDangerousDayCondomInsist2(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).npc_pullout_failure ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.actions([
        { label: '"<i>Most</i> of the time" (annoyed)', handler: (st: GameState) => {
    // TODO-QSP: '"<i>Most</i> of the time," you scowl. "But it only takes one fuck up to get me pregnant.' + iif(npc...
    if (((st as any).npc_pay_for_ma_pill ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: "At least I paid for it, right?" <<$npcdesc>> grins back.
      scene.text(`"At least I paid for it, right?" ${((st as any).npcdesc ?? '')} grins back.`);
    } else {
      if ((((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] > 0  ||  ((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] > 0)  &&  ((st as any).npc_caretaker ?? 0)?.[String((st as any).npcID ?? 0)] < 1) {
        // TODO-QSP: dynamic text: "Everybody makes mistakes," <<$npcdesc>> grins back.
        scene.text(`"Everybody makes mistakes," ${((st as any).npcdesc ?? '')} grins back.`);
      } else {
        // TODO-QSP: dynamic text: At least <<$npcdesc>> has the decency to look embarrassed.
        scene.text(`At least ${((st as any).npcdesc ?? '')} has the decency to look embarrassed.`);
      }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPulledOutLastTime(s, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDidntPullOutLastTime(s, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNoCondomAllowAnnoyed(s, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: '<i>Need</i> a condom', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Sorry, <<$npc_lovername[$npcID]>>," you smirk. "Gotta use a rubber this time."
    scene.text(`"Sorry, ${((st as any).npc_lovername ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''}," you smirk. "Gotta use a rubber this time."`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcDangerousDayCondomInsist2(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
        { label: '"<i>Most</i> of the time" (tease)', handler: (st: GameState) => {
    // TODO-QSP: '"<i>Most</i> of the time," you say with a meaningful smirk.' + iif(npc_pullout_failure_last_time[$n...
    if (((st as any).npc_pay_for_ma_pill ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: "At least I paid for it, right?" <<$npcdesc>> grins back.
      scene.text(`"At least I paid for it, right?" ${((st as any).npcdesc ?? '')} grins back.`);
    } else {
      if ((((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] > 0  ||  ((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] > 0)  &&  ((st as any).npc_caretaker ?? 0)?.[String((st as any).npcID ?? 0)] < 1) {
        // TODO-QSP: dynamic text: "Everybody makes mistakes," <<$npcdesc>> grins back.
        scene.text(`"Everybody makes mistakes," ${((st as any).npcdesc ?? '')} grins back.`);
      } else {
        // TODO-QSP: dynamic text: At least <<$npcdesc>> has the decency to look embarrassed.
        scene.text(`At least ${((st as any).npcdesc ?? '')} has the decency to look embarrassed.`);
      }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPulledOutLastTime(s, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDidntPullOutLastTime(s, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNoCondomAllowAmused(s, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: '<i>Need</i> a condom', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Sorry, <<$npc_lovername[$npcID]>>," you smirk. "Gotta use a rubber this time."
    scene.text(`"Sorry, ${((st as any).npc_lovername ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''}," you smirk. "Gotta use a rubber this time."`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcDangerousDayCondomInsist2(s, scene); (st as any).locArgs = __savedLocArgs; }
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
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'safe';
    scene.text('"It\'s a safe day in my cycle anyways," you smile. "A good day to go bareback."');
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
      { label: 'No need to pull out', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'safe';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_allowance'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['pullout_game'] = 0;
    scene.text('"You don\'t have to," you say with a wry smile. "It\'s a safe day in my cycle."');
    qspGoto(st, 'sex_ev_sex', 'position_choose');
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
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'prob_safe';
    scene.text('"It\'s a relatively safe day in my cycle," you smile. "It should be okay to go bareback."');
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
      { label: 'No need to pull out', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'prob_safe';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_allowance'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['pullout_game'] = 0;
    scene.text('"You don\'t have to," you say with a wry smile. "It should be a safe day in my cycle."');
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterNoCondomAllowAnnoyed(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Allow it', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    scene.text('"... fine..." you sigh begrudgingly. "But you better pull out this time!"');
    scene.text('He nods eagerly as he gets into position.');
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
    { label: 'Last chance', handler: (st: GameState) => {
    ((st as any).npc_last_pullout_chance = (st as any).npc_last_pullout_chance ?? {})[String((st as any).npcID ?? 0)] = ((st as any).npc_last_pullout_chance[String((st as any).npcID ?? 0)] ?? 0) + (1);
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    scene.text('"... fine..." you sigh begrudgingly. "But this is your last chance!"');
    if (((st as any).npc_last_pullout_chance ?? 0)?.[String((st as any).npcID ?? 0)] > 1  &&  (((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] > 0  ||  ((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] > 0)) {
      scene.text('"Yeah, yeah, sure," he snickers back as he gets into position. "You\'ve said that before too."');
    } else {
      scene.text('He nods eagerly as he gets into position.');
    }
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
  ]);
  scene.build();
}

function enterNoCondomAllowAmused(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Allow it', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    scene.text('"Oh <i>fine</i>..." you sigh with false drama, giving him a teasing smile. "I\'ll trust you this time."');
    scene.text('He nods eagerly as he gets into position.');
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
    { label: 'Last chance', handler: (st: GameState) => {
    ((st as any).npc_last_pullout_chance = (st as any).npc_last_pullout_chance ?? {})[String((st as any).npcID ?? 0)] = ((st as any).npc_last_pullout_chance[String((st as any).npcID ?? 0)] ?? 0) + (1);
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    scene.text('"Oh <i>fine</i>..." you sigh with false drama, giving him a teasing smile. "I\'ll give you one more chance to prove yourself."');
    if (((st as any).npc_last_pullout_chance ?? 0)?.[String((st as any).npcID ?? 0)] > 1  &&  (((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] > 0  ||  ((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] > 0)) {
      scene.text('"Yeah, yeah, sure," he snickers back as he gets into position. "You\'ve said that before."');
    } else {
      scene.text('He nods eagerly as he gets into position.');
    }
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
  ]);
  scene.build();
}

function enterPulledOutLastTime(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_no_creampie_mistakes_last_time ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    scene.actions([
      { label: 'It turned out well last time', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_condom'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    // TODO-QSP: dynamic text: "Well... You did a good job of pulling out the last time..." you smile warmly at...
    scene.text(`"Well... You did a good job of pulling out the last time..." you smile warmly at ${((st as any).npcdesc ?? '')}. "Okay. Let's do it."`);
    scene.text('Your heart flutters in excitement as the both of you get into position to fuck. <i>Without</i> protection.');
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
    ]);
  }
  // TODO-QSP: end
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
    if (((st as any).npc_pay_for_ma_pill ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: "At least I paid for it, right?" <<$npcdesc>> grins back.
      scene.text(`"At least I paid for it, right?" ${((st as any).npcdesc ?? '')} grins back.`);
    } else {
      if ((((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] > 0  ||  ((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] > 0)  &&  ((st as any).npc_caretaker ?? 0)?.[String((st as any).npcID ?? 0)] < 1) {
        // TODO-QSP: dynamic text: "Everybody makes mistakes," <<$npcdesc>> grins back.
        scene.text(`"Everybody makes mistakes," ${((st as any).npcdesc ?? '')} grins back.`);
      } else {
        // TODO-QSP: dynamic text: At least <<$npcdesc>> has the decency to look embarrassed.
        scene.text(`At least ${((st as any).npcdesc ?? '')} has the decency to look embarrassed.`);
      }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNoCondomAllowAnnoyed(s, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: '<i>Need</i> a condom', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Sorry, <<$npc_lovername[$npcID]>>," you smirk. "Gotta use a rubber this time."
    scene.text(`"Sorry, ${((st as any).npc_lovername ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''}," you smirk. "Gotta use a rubber this time."`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcDangerousDayCondomInsist2(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
      { label: 'Amused', handler: (st: GameState) => {
    scene.text('"You mean like how you \'pulled out\' last time?" you snicker, pointedly reminding him how the last time you were together he filled you with a load of swimmers.');
    if (((st as any).npc_pay_for_ma_pill ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: "At least I paid for it, right?" <<$npcdesc>> grins back.
      scene.text(`"At least I paid for it, right?" ${((st as any).npcdesc ?? '')} grins back.`);
    } else {
      if ((((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] > 0  ||  ((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] > 0)  &&  ((st as any).npc_caretaker ?? 0)?.[String((st as any).npcID ?? 0)] < 1) {
        // TODO-QSP: dynamic text: "Everybody makes mistakes," <<$npcdesc>> grins back.
        scene.text(`"Everybody makes mistakes," ${((st as any).npcdesc ?? '')} grins back.`);
      } else {
        // TODO-QSP: dynamic text: At least <<$npcdesc>> has the decency to look embarrassed.
        scene.text(`At least ${((st as any).npcdesc ?? '')} has the decency to look embarrassed.`);
      }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNoCondomAllowAmused(s, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: '<i>Need</i> a condom', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Sorry, <<$npc_lovername[$npcID]>>," you smirk. "Gotta use a rubber this time."
    scene.text(`"Sorry, ${((st as any).npc_lovername ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''}," you smirk. "Gotta use a rubber this time."`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcDangerousDayCondomInsist2(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterStillGotPulloutGame(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_pullout_game ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    scene.actions([
      { label: '"Still got that pullout game?"', handler: (st: GameState) => {
    scene.img('images/shared/sex/misc/smile.jpg');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_condom'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['must_fuck'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['pullout_game'] = 1;
    // TODO-QSP: dynamic text: "Still got that pullout game?" you ask <<$npcdesc>>, biting your lip and aiming ...
    scene.text(`"Still got that pullout game?" you ask ${((st as any).npcdesc ?? '')}, biting your lip and aiming a sexy smirk at him.`);
    if (((st as any).sex_ev ?? 0)?.['npc_used_all_condoms'] === 1) {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['skip_condom'] = 1;
      scene.text('"Hell yeah I do," he grins back, tossing the last used condom aside and wiping his dick for the next round.');
    } else {
      scene.text('"Hell yeah I do," he grins back, eagerly getting into position.');
    }
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterNpcDoesntUseCondoms(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_latex_allrg ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNpcLatexAllergy(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).npc_no_condoms_know ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        // TODO-QSP: dynamic text: "You know I don''t use that shit," <<$npcdesc>> frowns. "It''s bareback or nothi...
        scene.text(`"You know I don't use that shit," ${((s as any).npcdesc ?? '')} frowns. "It's bareback or nothing."`);
      } else {
        // TODO-QSP: dynamic text: "Come on! We don''t need condoms," <<$npcdesc>> insists.
        scene.text(`"Come on! We don't need condoms," ${((s as any).npcdesc ?? '')} insists.`);
      }
    } else {
      ((s as any).npc_no_condoms_know = (s as any).npc_no_condoms_know ?? {})[String((s as any).npcID ?? 0)] = 1;
      // TODO-QSP: dynamic text: "I never use condoms," <<$npcdesc>> grunts. "It feels better bareback."
      scene.text(`"I never use condoms," ${((s as any).npcdesc ?? '')} grunts. "It feels better bareback."`);
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNoCondom1(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterNpcPromiseWontCreampie(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterInsistNeedCondom(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTrustNoCreampie(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTrustNoCreampieNervous(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPcSkipTheCondom(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPcDangerousDayCondomInsist(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterInsistNeedCondom(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'We <i>need</i> a condom', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['condom_motive'] = 'safety';
    scene.text('"No," you say adamantly. "We <i>need</i> a condom. I\'m not fucking you without one."');
    if (((st as any).sex_ev ?? 0)?.['condom_count'] > 0  &&  ((st as any).sex_ev ?? 0)?.['using_pc_condoms'] !== 1) {
      scene.text('"Ugh, <i>fine</i>..." he sighs and grabs a rubber off his nightstand.');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcCondomPutOn(s, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      if (((st as any).sex_ev ?? 0)?.['using_pc_condoms'] === 1) {
        scene.text('"Ugh, <i>fine</i>..." he sighs and waits expectantly for you to give him one.');
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcUseCondoms(s, scene); (st as any).locArgs = __savedLocArgs; }
      } else {
        scene.text('"Ugh, <i>fine</i>..." he sighs. "But I don\'t have any. Do you?"');
        if (((st as any).mc_inventory ?? 0)?.['normal_condoms'] === 0  &&  (((st as any).mc_inventory ?? 0)?.['equipped_condoms'] === 0)) {
          scene.text('"No..." you say, a little embarrassed. "I thought you would."');
          if (((st as any).npc_no_condoms ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
            if (((st as any).npc_no_condoms_know ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
              scene.text('"I can\'t imagine why you\'d think that," he replies dryly. "You know I don\'t use them."');
            } else {
              ((st as any).npc_no_condoms_know = (st as any).npc_no_condoms_know ?? {})[String((st as any).npcID ?? 0)] = 1;
              scene.text('"Well I don\'t," he replies dryly. "I don\'t use them."');
            }
          } else {
            scene.text('"So... what should we do?"');
          }
          qspCall(st, 'sex_ev_after', 'no_condom_end');
          { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNoSexOnly(s, scene); (st as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcSkipTheCondom(s, scene); (st as any).locArgs = __savedLocArgs; }
        } else {
          { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcUseCondoms(s, scene); (st as any).locArgs = __savedLocArgs; }
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterTrustNoCreampie(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'I guess I trust you', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_condom'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'like');
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('You hesitate for a moment before relenting.');
    // TODO-QSP: dynamic text: "I guess it''s okay... I trust you," you smile as <<$npcdesc>> eagerly forgoes t...
    scene.text(`"I guess it's okay... I trust you," you smile as ${((st as any).npcdesc ?? '')} eagerly forgoes the condom.`);
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
  ]);
  scene.build();
}

function enterTrustNoCreampieNervous(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'I guess I trust you (nervous)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_condom'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'like');
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('You hesitate for a moment before relenting.');
    // TODO-QSP: dynamic text: "If you promise..." you say reluctantly as <<$npcdesc>> eagerly forgoes the cond...
    scene.text(`"If you promise..." you say reluctantly as ${((st as any).npcdesc ?? '')} eagerly forgoes the condom.`);
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
  ]);
  scene.build();
}

function enterCondomWhy2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
    if (((s as any).tabletkishot ?? 0) > 0) {
      scene.actions([
        { label: 'We don\'t need a condom (on the shot)', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_stats', 'birth_control_know');
    ((st as any).npc_know_not_bc = (st as any).npc_know_not_bc ?? {})[String((st as any).npcID ?? 0)] = 0;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['must_fuck'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['pc_skip_the_condom'] = 1;
    scene.text('"Hey," you smile, grabbing his arm. "We don\'t need condoms. I\'m on the shot."');
    if (((st as any).npc_condom_conscious ?? 0)?.[String((st as any).npcID ?? 0)] === 2) {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['npc_condom_motive'] = 'adamant';
      // TODO-QSP: dynamic text: "I want to use one anyways," <<$npcdesc>> says, shaking his head and reaches bac...
      scene.text(`"I want to use one anyways," ${((st as any).npcdesc ?? '')} says, shaking his head and reaches back for the condom. "Better to be safe."`);
      scene.text('Your jaw drops.');
      scene.text('<i>A free pass to go bareback and he doesn\'t take it? What\'s with this guy?</i>');
    } else {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_condom'] = 1;
      // TODO-QSP: dynamic text: <<$npcdesc>> stops reaching and turns to meet your gaze, eyes filled with desire...
      scene.text(`${((st as any).npcdesc ?? '')} stops reaching and turns to meet your gaze, eyes filled with desire, and your smile widens into a full blown grin.`);
    }
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
      ]);
    } else {
      if (((s as any).pillcon2 ?? 0) > 0) {
        scene.actions([
          { label: 'We don\'t need a condom (on the pill)', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_stats', 'birth_control_know');
    ((st as any).npc_know_not_bc = (st as any).npc_know_not_bc ?? {})[String((st as any).npcID ?? 0)] = 0;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['must_fuck'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['pc_skip_the_condom'] = 1;
    scene.text('"Hey," you smile, grabbing his arm. "We don\'t need condoms. I\'m on the pill."');
    if (((st as any).npc_condom_conscious ?? 0)?.[String((st as any).npcID ?? 0)] === 2) {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['npc_condom_motive'] = 'adamant';
      // TODO-QSP: dynamic text: "I want to use one anyways," <<$npcdesc>> says, shaking his head and reaches bac...
      scene.text(`"I want to use one anyways," ${((st as any).npcdesc ?? '')} says, shaking his head and reaches back for the condom. "Better to be safe."`);
      scene.text('Your jaw drops.');
      scene.text('<i>A free pass to go bareback and he doesn\'t take it? What\'s with this guy?</i>');
    } else {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_condom'] = 1;
      // TODO-QSP: dynamic text: <<$npcdesc>> stops reaching and turns to meet your gaze, eyes filled with desire...
      scene.text(`${((st as any).npcdesc ?? '')} stops reaching and turns to meet your gaze, eyes filled with desire, and your smile widens into a full blown grin.`);
    }
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
        ]);
      }
    }
  } else {
    scene.actions([
      { label: 'Lie about birth control', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['must_fuck'] = 1;
    qspCall(st, 'sex_ev_stats', 'birth_control_know');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['pc_skip_the_condom'] = 1;
    ((st as any).npc_know_not_bc = (st as any).npc_know_not_bc ?? {})[String((st as any).npcID ?? 0)] = 0;
    scene.text('"Hey," you smile, grabbing his arm. "We don\'t need condoms. I\'m on birth control."');
    if (((st as any).npc_condom_conscious ?? 0)?.[String((st as any).npcID ?? 0)] === 2) {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['npc_condom_motive'] = 'adamant';
      // TODO-QSP: dynamic text: "I want to use one anyways," <<$npcdesc>> says, shaking his head and reaches bac...
      scene.text(`"I want to use one anyways," ${((st as any).npcdesc ?? '')} says, shaking his head and reaches back for the condom. "Better to be safe."`);
      scene.text('Your jaw drops.');
      scene.text('<i>Son of a bitch! Why is this guy so fucking careful?!</i>');
    } else {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_condom'] = 1;
      // TODO-QSP: dynamic text: Upon hearing your barefaced lie, <<$npcdesc>> stops reaching and turns to meet y...
      scene.text(`Upon hearing your barefaced lie, ${((st as any).npcdesc ?? '')} stops reaching and turns to meet your gaze, eyes filled with desire. Your smile widens into a full blown grin.`);
    }
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'We don\'t need a condom (feel better)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['pc_skip_the_condom'] = 1;
    scene.text('"Come on," you say, grabbing his arm. "Let\'s skip the condom. It\'ll feel better without one."');
    if (((st as any).npc_condom_conscious ?? 0)?.[String((st as any).npcID ?? 0)] === 2  ||  (((st as any).npc_condom_conscious ?? 0)?.[String((st as any).npcID ?? 0)] === 1  &&  ((st as any).npc_childfree ?? 0)?.[String((st as any).npcID ?? 0)] === 1)) {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['npc_condom_motive'] = 'adamant';
      // TODO-QSP: dynamic text: "Don''t want to risk it," <<$npcdesc>> says, shaking his head and opens the cond...
      scene.text(`"Don't want to risk it," ${((st as any).npcdesc ?? '')} says, shaking his head and opens the condom anyways, rolling it onto his cock.`);
    } else {
      if ((Math.floor(Math.random() * (100 - ((st as any).npc_willpwr ?? 0)?.[String((st as any).npcID ?? 0)] + 1)) + (((st as any).npc_willpwr ?? 0)?.[String((st as any).npcID ?? 0)])) < ((st as any).pcs_persuas ?? 0) + ((st as any).npc_rel ?? 0)?.[String((st as any).npcID ?? 0)]) {
        ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_condom'] = 1;
        ((st as any).sex_ev = (st as any).sex_ev ?? {})['condom'] = 0;
        // TODO-QSP: dynamic text: <<$npcdesc>> stops, looking back at you for a moment before smiling.
        scene.text(`${((st as any).npcdesc ?? '')} stops, looking back at you for a moment before smiling.`);
        scene.text('"Okay," he says and leaves the rubber where it is.');
      } else {
        // TODO-QSP: dynamic text: "Don''t want to risk it," <<$npcdesc>> says, shaking his head and opens the cond...
        scene.text(`"Don't want to risk it," ${((st as any).npcdesc ?? '')} says, shaking his head and opens the condom anyways, rolling it onto his cock.`);
      }
    }
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
  ]);
  scene.build();
}

function enterNoCondomLeave(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: <<$npcdesc>> continues to complain at you while you grab all of your belongings ...
  scene.text(`${((s as any).npcdesc ?? '')} continues to complain at you while you grab all of your belongings and rush your way out the door, slamming it behind you.`);
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
  ]);
  scene.build();
}

function enterNoCondomPulloutAllow(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Allow it (worried)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_condom'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    scene.text('"Uhm... er..." You bite your lip nervously. "If you say so..."');
    scene.text('You can\'t help but gulp anxiously as the both of you get into position to fuck without protection.');
    if (((st as any).sex_ev ?? 0)?.['position'] === '') {
      qspGoto(st, 'sex_ev_sex', 'position_choose');
    } else {
      // TODO-QSP: xgt 'sex_ev_<<$sex_ev[''position'']>>', '<<$sex_ev[''position'']>>_goto'
    }
  } },
    { label: 'Allow it (trusting)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_condom'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    scene.text('"Okay, if you say so," you smile at him. "I\'m trusting you on this one."');
    scene.text('Your heart flutters in excitement as the both of you get into position to fuck. <i>Without</i> protection.');
    if (((st as any).sex_ev ?? 0)?.['position'] === '') {
      qspGoto(st, 'sex_ev_sex', 'position_choose');
    } else {
      // TODO-QSP: xgt 'sex_ev_<<$sex_ev[''position'']>>', '<<$sex_ev[''position'']>>_goto'
    }
  } },
    { label: 'Allow it (carefree)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_condom'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    scene.text('"Well then..." You twist your mouth in a sly smirk. "If you say you\'ve got game..."');
    scene.text('Your heart flutters in excitement as the both of you get into position to fuck. <i>Without</i> protection.');
    if (((st as any).sex_ev ?? 0)?.['position'] === '') {
      qspGoto(st, 'sex_ev_sex', 'position_choose');
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
    if (((st as any).npc_condom_rule ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['condom_motive'] = 'adamant';
      scene.text('"You know my rule," you say sternly. "We\'re not fucking without one!"');
    } else {
      if (((st as any).stat ?? 0)?.['preg_risk'] === 'danger'  &&  ((st as any).birth_control ?? 0)?.['think_safe'] !== 1) {
        ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'danger';
        ((st as any).sex_ev = (st as any).sex_ev ?? {})['condom_motive'] = 'pregnancy';
        scene.text('"I\'m ovulating right now!" you say sternly. "I could get pregnant!');
      } else {
        ((st as any).sex_ev = (st as any).sex_ev ?? {})['condom_motive'] = 'adamant';
        scene.text('"We\'re not fucking without one," you say sternly.');
      }
    }
    if (((st as any).sex_ev ?? 0)?.['buy_virginity'] > 0  &&  ((st as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
      qspCall(st, 'sex_ev_virgin', 'no_condom_offer');
    } else {
      if (((st as any).sex_ev ?? 0)?.['preg_risk'] === 'danger'  &&  ((st as any).npc_childfree ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
        ((st as any).sex_ev = (st as any).sex_ev ?? {})['condom'] = 1;
        if (((st as any).sex_ev ?? 0)?.['using_pc_condoms'] === 1  &&  ((st as any).mc_inventory ?? 0)?.['normal_condoms'] > 0) {
          scene.text('"What the fuck! Why didn\'t you say so!" he says, immediately taking the condom from you and clumsily rolling the little rubber onto his cock.');
          qspCall(st, 'sex_ev_stats', 'pc_condom_stats');
          if (((st as any).sex_ev ?? 0)?.['position'] !== 'miss'  ||  ((st as any).sex_ev ?? 0)?.['position'] !== 'doggy'  ||  ((st as any).sex_ev ?? 0)?.['position'] !== 'cowgirl') {
            ((st as any).sex_ev = (st as any).sex_ev ?? {})['position'] = 'miss';
          }
          scene.actions([
            { label: '', labelFn: (s: GameState) => 'Let ' + String(((st as any).npcdesc ?? '') ?? '') + ' fuck you', handler: (st: GameState) => {
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
          ((st as any).sex_ev = (st as any).sex_ev ?? {})['condom'] = 1;
          ((st as any).sex_ev = (st as any).sex_ev ?? {})['pc_insist_condom'] = 1;
          if (((st as any).sex_ev ?? 0)?.['using_pc_condoms'] === 1  &&  ((st as any).mc_inventory ?? 0)?.['normal_condoms'] > 0) {
            // TODO-QSP: dynamic text: "Ugh, fine," <<$npcdesc>> grumbles, taking the condom from you and clumsily roll...
            scene.text(`"Ugh, fine," ${((st as any).npcdesc ?? '')} grumbles, taking the condom from you and clumsily rolling the little rubber onto his cock.`);
            qspCall(st, 'sex_ev_stats', 'pc_condom_stats');
            if (((st as any).sex_ev ?? 0)?.['position'] !== 'miss'  ||  ((st as any).sex_ev ?? 0)?.['position'] !== 'doggy'  ||  ((st as any).sex_ev ?? 0)?.['position'] !== 'cowgirl') {
              ((st as any).sex_ev = (st as any).sex_ev ?? {})['position'] = 'miss';
            }
            scene.actions([
              { label: '', labelFn: (s: GameState) => 'Let ' + String(((st as any).npcdesc ?? '') ?? '') + ' fuck you', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_<<$sex_ev[''position'']>>', '<<$sex_ev[''position...
  } },
            ]);
          } else {
            // TODO-QSP: dynamic text: "Ugh, fine," <<$npcdesc>> grumbles, reaching for a condom.
            scene.text(`"Ugh, fine," ${((st as any).npcdesc ?? '')} grumbles, reaching for a condom.`);
            scene.actions([
              { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_condoms', 'npc_condom_use');
  } },
            ]);
          }
        } else {
          ((st as any).sex_ev = (st as any).sex_ev ?? {})['dont_need_condom'] = 1;
          scene.text('"Come on," he complains. "It\'ll be fine. Let\'s skip it. Just this once."');
          { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcSkipTheCondom(s, scene); (st as any).locArgs = __savedLocArgs; }
          scene.actions([
            { label: 'Not a big deal?!', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    if (((st as any).npc_condom_rule ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      scene.text('"Not a big deal?! We said- You know what? <i>Fuck</i> you!"');
    } else {
      scene.text('"Not a big deal?! You don\'t have any idea how dangerous it is for m- You know what? <i>Fuck</i> you!"');
    }
    scene.text('"I\'m trying to but you won\'t let me!"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNoCondomLeave(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
            { label: 'Just don\'t come inside me', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['dont_need_condom'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['must_fuck'] = 1;
    ((st as any).npc_rule_no_creampies = (st as any).npc_rule_no_creampies ?? {})[String((st as any).npcID ?? 0)] = 1;
    scene.text('You hesitate, mulling it over for a moment');
    scene.text('"Well... Alright..." you say somewhat reluctantly. "But don\'t you dare come inside me, okay?"');
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
          ]);
        }
      }
    }
  } },
    ]);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPcSkipTheCondom(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNoSexOnly(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Just don\'t come inside me', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['must_fuck'] = 1;
    ((st as any).npc_rule_no_creampies = (st as any).npc_rule_no_creampies ?? {})[String((st as any).npcID ?? 0)] = 1;
    scene.text('"Well... Alright..." you say hesitantly. "But don\'t you dare come inside me, okay?"');
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
  ]);
  scene.build();
}

function enterNoCondom2(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNoCondom2_1(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Seriously?', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    if (((st as any).npc_condom_rule ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      scene.text('"Are you serious?" you ask exasperatedly. "You know my rule! We need a condom!"');
    } else {
      scene.text('"Are you serious?" you ask exasperatedly. "We\'re not fucking without one!"');
    }
    if ((Math.floor(Math.random() * 10) + 1) < 8) {
      scene.text('"Do you have some?" he asks.');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNoCondom2_1(s, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['dont_need_condom'] = 1;
      scene.text('"Come on," he says. "It\'ll be fine. Let\'s skip it. Just this once."');
      scene.actions([
        { label: 'Not a big deal?!', handler: (st: GameState) => {
    scene.text('"Not a big deal??? You don\'t have any idea how dangerous it is for m- You know what? <i>Fuck</i> you!"');
    scene.text('"I\'m trying to but you won\'t let me!"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNoCondomLeave(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcSkipTheCondom(s, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Just don\'t come inside me', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['must_fuck'] = 1;
    ((st as any).npc_rule_no_creampies = (st as any).npc_rule_no_creampies ?? {})[String((st as any).npcID ?? 0)] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['condom_motive'] = 'exception';
    scene.text('"Well... Alright..." you say hesitantly. "But don\'t you dare come inside me, okay?"');
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
    ]);
  } },
    { label: 'How many girls are you fucking? (tease)', handler: (st: GameState) => {
    scene.text('"Damn! How many of these things do you go through?" you laugh, giving him a look. "Are you fucking 20 girls a day?"');
    scene.text('"Hey, when you\'re as good as I am," he says, a smug grin on his face. "Do you have any?"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNoCondom2_1(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterNoCondom2_1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mc_inventory ?? 0)?.['normal_condoms'] > 0  ||  (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0  &&  ((s as any).preziktype ?? 0) === 0)) {
    scene.actions([
      { label: 'I\'ve got some', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_stats', 'pc_condom_stats');
    scene.img('images/shared/sex/misc/condom_put.jpg');
    scene.text('"I\'ve got some right here," you say, pulling a rubber from your bag and tearing it open.');
    // TODO-QSP: dynamic text: You smile at <<$npcdesc>> as you roll it onto his cock for him.
    scene.text(`You smile at ${((st as any).npcdesc ?? '')} as you roll it onto his cock for him.`);
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Don\'t have any condoms', handler: (st: GameState) => {
    scene.text('"No..." you say reluctantly. "I thought you would..."');
    if (((st as any).npc_no_condoms ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      if (((st as any).npc_no_condoms_know ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
        scene.text('"I can\'t imagine why you\'d think that," he replies dryly. "You know I don\'t use them."');
      } else {
        ((st as any).npc_no_condoms_know = (st as any).npc_no_condoms_know ?? {})[String((st as any).npcID ?? 0)] = 1;
        scene.text('"Well I don\'t," he replies dryly. "I don\'t use them."');
      }
    } else {
      scene.text('"So... what should we do?"');
    }
    qspCall(st, 'sex_ev_after', 'no_condom_end');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcSkipTheCondom(s, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNoSexOnly(s, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Just don\'t come inside me (trusting)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['must_fuck'] = 1;
    scene.text('"Just don\'t come inside me," you smile warmly.');
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
      { label: 'Just don\'t come inside me (nervous)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['must_fuck'] = 1;
    scene.text('"Well..." you say hesitantly. "Just don\'t come inside me, okay?"');
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
    ]);
  } },
    ]);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPcSkipTheCondom(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Just don\'t come inside me (trusting)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['must_fuck'] = 1;
    scene.text('"Just don\'t come inside me," you smile warmly.');
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
    { label: 'Just don\'t come inside me (nervous)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['must_fuck'] = 1;
    scene.text('"Well..." you say hesitantly. "Just don\'t come inside me, okay?"');
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
  ]);
  scene.build();
}

function enterNoSexOnly(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['no_sex'] === 0) {
    scene.actions([
      { label: 'We could do other stuff', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_sex'] = 1;
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Maybe we could do other stuff without having sex?" you suggest.');
    if (((st as any).npc_no_kiss ?? 0)?.[String((st as any).npcID ?? 0)] !== 1) {
      scene.actions([
        { label: 'We could make out', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Maybe we could do other stuff without having sex?" you suggest. "We could just make out?"');
    // TODO-QSP: dynamic text: "Okay," <<$npcdesc>> nods and you happily move to kiss him.
    scene.text(`"Okay," ${((st as any).npcdesc ?? '')} nods and you happily move to kiss him.`);
    scene.actions([
      { label: 'Make out with him', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_foreplay', 'makeout_dom1'
  } },
    ]);
  } },
      ]);
    }
    if (((st as any).sex_ev ?? 0)?.['cuni_orgasm'] < 5) {
      scene.actions([
        { label: 'You could eat me out', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Maybe we could do other stuff without having sex?" you suggest. "I wouldn\'t mind if you ate my pussy for a little while..."');
    if (((st as any).npc_pussyeater ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: "I think I''d like that too," <<$npcdesc>> says with a dangerous glint in his ey...
      scene.text(`"I think I'd like that too," ${((st as any).npcdesc ?? '')} says with a dangerous glint in his eye.`);
      scene.actions([
        { label: 'Get eaten out', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_foreplay', 'pussy_lick_start');
  } },
      ]);
    } else {
      if (((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] === 1  ||  (Math.floor(Math.random() * 2) + 1) === 1) {
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
    if (((st as any).npc_fav_pos ?? 0)?.[String((st as any).npclastgenerated ?? 0)] === 'blowjob') {
      // TODO-QSP: dynamic text: "I would love that," <<$npcdesc>> grins.
      scene.text(`"I would love that," ${((st as any).npcdesc ?? '')} grins.`);
    } else {
      // TODO-QSP: dynamic text: "I could get behind that..." <<$npcdesc>> smiles.
      scene.text(`"I could get behind that..." ${((st as any).npcdesc ?? '')} smiles.`);
    }
    scene.actions([
      { label: 'Blow him', goto: ['sex_ev_foreplay', 'bj_dom2'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterNpcCondomComplain(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterNpcLetsSkipCondom(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterDontCumInMe(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_creampie_okay ?? 0)?.[String((s as any).npcID ?? 0)] === 0  &&  ((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] !== 'at_will') {
    scene.actions([
      { label: 'Don\'t come inside me', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_stats', 'restrict_func', 'creampie');
    if (((st as any).birth_control ?? 0)?.['think_safe'] !== 1  &&  ((st as any).npc_know_not_bc ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      scene.text('"Don\'t forget, you can\'t come inside me," you warn him as you get into position. "I\'m still not on birth control."');
    } else {
      if (((st as any).birth_control ?? 0)?.['think_safe'] !== 1  &&  ((st as any).pillcon2 ?? 0) > 0) {
        qspCall(st, 'sex_ev_stats', 'no_birth_control_know');
        ((st as any).npc_know_bc = (st as any).npc_know_bc ?? {})[String((st as any).npcID ?? 0)] = 0;
        ((st as any).npc_know_bc_not_effective = (st as any).npc_know_bc_not_effective ?? {})[String((st as any).npcID ?? 0)] = 1;
        scene.text('"Don\'t come inside me," you warn him as you get into position. "My birth control hasn\'t kicked in yet."');
      } else {
        if (((st as any).birth_control ?? 0)?.['think_safe'] !== 1) {
          qspCall(st, 'sex_ev_stats', 'no_birth_control_know');
          ((st as any).npc_know_bc = (st as any).npc_know_bc ?? {})[String((st as any).npcID ?? 0)] = 0;
          scene.text('"Don\'t come inside me," you warn him as you get into position. "I\'m not on birth control."');
        } else {
          scene.text('"Don\'t come inside me," you murmur as you get into position.');
        }
      }
    }
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterDisableCondoms(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_bareback ?? 0)?.[String((s as any).npcID ?? 0)] === ''  &&  ((s as any).sex_ev ?? 0)?.['condom'] === 0) {
    scene.actions([
      { label: 'We don\'t need condoms', handler: (st: GameState) => {
    if (((st as any).stat ?? 0)?.['preg_risk'] !== 'danger'  &&  ((st as any).birth_control ?? 0)?.['think_safe'] !== 1) {
      scene.actions([
        { label: 'I\'ll tell you when it\'s safe', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['temp_bareback'] = 2;
    // TODO-QSP: $sex_ev['bed_room']
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['disable_condoms_desc'] = '"Hey," you smile. "We don\'t need to use condoms every time.';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDisableCondomsOptions2(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCatholicCondoms(s, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Never', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['temp_bareback'] = 1;
    // TODO-QSP: $sex_ev['bed_room']
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['disable_condoms_desc'] = '"Hey," you smile. "We don\'t need to use condoms.';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDisableCondomsOptions1(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterDisableCondomsOptions1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).knowpreg ?? 0) === 1) {
    scene.actions([
      { label: 'I\'m pregnant', handler: (st: GameState) => {
    ((st as any).npc_knowpreg = (st as any).npc_knowpreg ?? {})[String((st as any).npcID ?? 0)] = 1;
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Hey," you smile. "We don\'t need to use condoms. I found out I\'m pregnant. Can\'t get any more knocked up than I already am."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcNoCondomReact(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } else {
    if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
      if (((s as any).tabletkishot ?? 0) > 0) {
        scene.actions([
          { label: 'On the shot', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_stats', 'birth_control_know');
    ((st as any).npc_know_not_bc = (st as any).npc_know_not_bc ?? {})[String((st as any).npcID ?? 0)] = 0;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['must_fuck'] = 1;
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Hey," you smile. "We don\'t need to use condoms anymore. I\'m on the shot."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcNoCondomReact(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      } else {
        if (((s as any).pillcon2 ?? 0) > 0) {
          scene.actions([
            { label: 'On the pill', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_stats', 'birth_control_know');
    ((st as any).npc_know_not_bc = (st as any).npc_know_not_bc ?? {})[String((st as any).npcID ?? 0)] = 0;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['must_fuck'] = 1;
    // TODO-QSP: $sex_ev['bed_room']
    if (((st as any).npc_know_bc_not_effective ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      scene.text('"Hey," you smile. "We don\'t need to use condoms anymore. My birth control has finally kicked in."');
    } else {
      scene.text('"Hey," you smile. "We don\'t need to use condoms anymore. I\'m on the pill."');
    }
    ((st as any).npc_know_bc = (st as any).npc_know_bc ?? {})[String((st as any).npcID ?? 0)] = 0;
    qspCall(st, 'sex_ev_stats', 'birth_control_know');
    ((st as any).npc_know_bc_not_effective = (st as any).npc_know_bc_not_effective ?? {})[String((st as any).npcID ?? 0)] = 0;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcNoCondomReact(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
          ]);
        }
      }
    } else {
      if (((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        scene.actions([
          { label: 'Lie about birth control', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['must_fuck'] = 1;
    qspCall(st, 'sex_ev_stats', 'birth_control_know');
    ((st as any).npc_know_not_bc = (st as any).npc_know_not_bc ?? {})[String((st as any).npcID ?? 0)] = 0;
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Hey," you smile. "We don\'t need to use condoms anymore. I\'m on birth control."');
    if (((st as any).npc_condom_conscious ?? 0)?.[String((st as any).npcID ?? 0)] === 2) {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['npc_condom_motive'] = 'adamant';
      // TODO-QSP: dynamic text: "I want to use one anyways," <<$npcdesc>> says, shaking his head and reaches bac...
      scene.text(`"I want to use one anyways," ${((st as any).npcdesc ?? '')} says, shaking his head and reaches back for the condom. "Better to be safe."`);
      scene.text('Your jaw drops.');
      scene.text('<i>Son of a bitch! Why is this guy so fucking careful?!</i>');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_condoms', 'npc_condom_use');
  } },
      ]);
    } else {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_condom'] = 1;
      // TODO-QSP: $npc_bareback[$npcID] = 'never_use'
      // TODO-QSP: dynamic text: Upon hearing your barefaced lie, <<$npcdesc>> stares back into your eyes filled ...
      scene.text(`Upon hearing your barefaced lie, ${((st as any).npcdesc ?? '')} stares back into your eyes filled with desire and your smile widens into a full blown grin.`);
    }
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'I trust you', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: dynamic text: <<$sex_ev[''disable_condoms_desc'']>> I trust you."
    scene.text(`${((st as any).sex_ev ?? 0)?.['disable_condoms_desc'] ?? ''} I trust you."`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcNoCondomReact(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'It\'ll feel better', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: dynamic text: <<$sex_ev[''disable_condoms_desc'']>> Bareback is so much better. I want the ful...
    scene.text(`${((st as any).sex_ev ?? 0)?.['disable_condoms_desc'] ?? ''} Bareback is so much better. I want the full feeling of your cock inside me."`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcNoCondomReact(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterDisableCondomsOptions2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'I trust you', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: dynamic text: <<$sex_ev[''disable_condoms_desc'']>> I trust you. So we only need to use condom...
    scene.text(`${((st as any).sex_ev ?? 0)?.['disable_condoms_desc'] ?? ''} I trust you. So we only need to use condoms on dangerous days."`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcNoCondomReact(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'It\'ll feel better', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: dynamic text: <<$sex_ev[''disable_condoms_desc'']>> Bareback is so much better. I want the ful...
    scene.text(`${((st as any).sex_ev ?? 0)?.['disable_condoms_desc'] ?? ''} Bareback is so much better. I want the full feeling of your cock inside me. So we only need to use condoms on dangerous days."`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcNoCondomReact(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterCatholicCondoms(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'You\'re Orthodox', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_stats', 'no_birth_control_know', 'catholic');
    // TODO-QSP: $sex_ev['bed_room']
    if (((st as any).sex_ev ?? 0)?.['type'] !== 'hookup') {
      scene.text('"Hey, you don\'t need to use that," you smirk, putting your hand on his arm to stop him. "I\'m Orthodox. I don\'t believe in birth control."');
    } else {
      scene.text('"Hey, I\'m Orthodox, remember?" you smirk, putting your hand on his arm to stop him. "I don\'t believe in birth control."');
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCatholicCondomReact(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterCatholicCondomReact(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] === 2  ||  (((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((Math.floor(Math.random() * (100 - ((s as any).npc_willpwr ?? 0)?.[String((s as any).npcID ?? 0)] + 1)) + (((s as any).npc_willpwr ?? 0)?.[String((s as any).npcID ?? 0)])) - ((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)]) > ((s as any).pcs_persuas ?? 0))) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['npc_condom_motive'] = 'pregnancy';
    // TODO-QSP: dynamic text: "It''s not safe," <<$npcdesc>> says, shaking his head. "I don''t want you gettin...
    scene.text(`"It's not safe," ${((s as any).npcdesc ?? '')} says, shaking his head. "I don't want you getting pregnant on me."`);
    scene.actions([
      { label: 'Then you can\'t fuck', handler: (st: GameState) => {
    scene.text('"Well then we can\'t have sex," you frown.');
    qspCall(st, 'sex_ev_after', 'no_condom_end');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNoSexOnly(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Make an exception', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['condom'] = 1;
    scene.text('"Well... I guess I could make an exception," you smile. "It\'s not like I\'ll go to hell for using a condom <i>once.</i>"');
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
      { label: 'Anal instead?', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_vag'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['anal_allowed'] = 1;
    scene.text('"In that case... what about anal?"');
    if (((st as any).npc_no_anal ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      scene.text('"I don\'t like anal," he says.');
      qspCall(st, 'sex_ev_after', 'no_condom_end');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNoSexOnly(s, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      scene.text('"That sounds like a compromise to me," he grins and puts away the condom.');
      qspCall(st, 'sex_ev_anal', 'anal_start');
    }
  } },
    ]);
  } else {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['no_condom'] = 1;
    // TODO-QSP: $npc_bareback[$npcID] = 'never_use'
    if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'perverted') {
      // TODO-QSP: dynamic text: "This is why I love religious chicks," <<$npcdesc>> grins.
      scene.text(`"This is why I love religious chicks," ${((s as any).npcdesc ?? '')} grins.`);
    } else {
      // TODO-QSP: dynamic text: "This is going to feel so good," <<$npcdesc>> says and your smile widens into a ...
      scene.text(`"This is going to feel so good," ${((s as any).npcdesc ?? '')} says and your smile widens into a full blown grin.`);
    }
    if (((s as any).stat ?? 0)?.['preg_risk'] === 'danger') {
      scene.actions([
        { label: 'Don\'t come inside (danger day)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'danger';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    // TODO-QSP: '"Just don''t come inside me, okay?" you say as you get into position. ' + iif(ovulate > 0, '"I''m o...
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
      ]);
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_sex', 'position_choose'
  } },
      { label: 'Don\'t come inside', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    scene.text('"Just don\'t come inside me, okay?" you say as you get into position.');
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterReenableCondomsCode(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $npc_bareback[$npcID] = ''
  ((s as any).npc_free_creampies_count = (s as any).npc_free_creampies_count ?? {})[String((s as any).npcID ?? 0)] = 0;
  // TODO-QSP: end
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
    scene.text(`"What for?" ${((st as any).npcdesc ?? '')} asks, confused.`);
    scene.text('"I\'m not on birth control anymore."');
    scene.text('"Huh? How come?"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReenableCondoms1StopBc(s, scene); (st as any).locArgs = __savedLocArgs; }
    if (((st as any).stat ?? 0)?.['boyfriends_current'] > 0  &&  ((st as any).sex_ev ?? 0)?.['type'] !== 'married_sex'  &&  ((st as any).sex_ev ?? 0)?.['type'] !== 'dating_sex') {
      scene.actions([
        { label: 'Trying for baby', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTryingForBaby(s, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReenableCondoms2(s, scene); (st as any).locArgs = __savedLocArgs; }
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
    scene.text(`"What for?" ${((st as any).npcdesc ?? '')} asks, confused.`);
    if (((st as any).birth_control ?? 0)?.['think_safe'] === 0  &&  ((st as any).pillcon2 ?? 0) > 0) {
      scene.actions([
        { label: 'I stopped my birth control', handler: (st: GameState) => {
    scene.text('"I\'m not on birth control anymore."');
    scene.text('"Huh? How come?"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReenableCondoms1StopBc(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    if (((st as any).npc_risky_creampie_count ?? 0)?.[String((st as any).npcID ?? 0)] > 0  &&  ((st as any).birth_control ?? 0)?.['think_safe'] === 0) {
      scene.actions([
        { label: 'Too many close calls', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "We''ve had too many close calls," you say, recalling all the times <<$npcdesc>>...
    scene.text(`"We've had too many close calls," you say, recalling all the times ${((st as any).npcdesc ?? '')}'s come inside you on dangerous days. "I've been too reckless. I can't afford to get pregnant right now. So can we just switch back to using condoms?"`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReenableCondoms2(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    scene.actions([
      { label: 'Assurance', handler: (st: GameState) => {
    scene.text('"I just want to be more safe," you explain. "It would be a weight off my mind. I can\'t afford to get pregnant right now. So can we just switch back to using condoms?"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReenableCondoms2(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterReenableCondoms1StopBc(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'No reason', handler: (st: GameState) => {
    scene.text('"No reason," you shrug. "I need to explain myself to you? Let\'s just use condoms."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReenableCondoms2(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Too much hassle', handler: (st: GameState) => {
    scene.text('"Was too much hassle to take the pill every day," you shrug. "Easier just to use condoms. So let\'s use them."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReenableCondoms2(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Didn\'t like it', handler: (st: GameState) => {
    scene.text('"I didn\'t like it," you shrug. "It was messing up my hormones and making me feel all weird. So let\'s just use condoms."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReenableCondoms2(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterReenableCondoms2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_latex_allrg ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    if (((s as any).pc_know_npc_latex_allrg ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      if (((s as any).npc_assertive ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        // TODO-QSP: dynamic text: "Come on. You know I can''t do that because of my allergy," <<$npcdesc>> frowns.
        scene.text(`"Come on. You know I can't do that because of my allergy," ${((s as any).npcdesc ?? '')} frowns.`);
      } else {
        // TODO-QSP: dynamic text: "But I''m allergic... remember?" <<$npcdesc>> says embarrassedly.
        scene.text(`"But I'm allergic... remember?" ${((s as any).npcdesc ?? '')} says embarrassedly.`);
      }
    } else {
      if (((s as any).npc_assertive ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        // TODO-QSP: dynamic text: "The thing is..." <<$npcdesc>> says. "I can''t do that. I never told you this be...
        scene.text(`"The thing is..." ${((s as any).npcdesc ?? '')} says. "I can't do that. I never told you this because we never used them before but I'm allergic to condoms. Makes my dick break out in a rash."`);
      } else {
        // TODO-QSP: dynamic text: "I''m, uhh, allergic to condoms..." <<$npcdesc>> says uncomfortably.
        scene.text(`"I'm, uhh, allergic to condoms..." ${((s as any).npcdesc ?? '')} says uncomfortably.`);
        scene.text('"You\'re kidding."');
        scene.text('"Latex allergy," he replies in deepening embarrassment. "Makes my dick break out in a really bad rash. Sorry I never told you before."');
      }
    }
    ((s as any).pc_know_npc_latex_allrg = (s as any).pc_know_npc_latex_allrg ?? {})[String((s as any).npcID ?? 0)] = 1;
    scene.text('You frown.');
    // TODO-QSP: dynamic text: "I promise I''ll pull out," <<$npcdesc>> insists.
    scene.text(`"I promise I'll pull out," ${((s as any).npcdesc ?? '')} insists.`);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterReenableCondoms3(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).npc_no_condoms ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['npc_doesnt_want_condoms'] = 1;
      scene.text('"Come on, do we have to use condoms? I\'ll pull out if it\'s not a safe day, I promise."');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterReenableCondoms3(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterReenableCondomsCode(s, scene); (s as any).locArgs = __savedLocArgs; }
      // TODO-QSP: dynamic text: "That''s fair," <<$npcdesc>> nods. "So do you want to use mine or yours today?"
      scene.text(`"That's fair," ${((s as any).npcdesc ?? '')} nods. "So do you want to use mine or yours today?"`);
      if (((s as any).mc_inventory ?? 0)?.['normal_condoms'] > 0  ||  (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0  &&  ((s as any).preziktype ?? 0) === 0)) {
        scene.actions([
          { label: 'Mine', handler: (st: GameState) => {
    scene.text('"Mine," you smile, happy that this didn\'t have to be a big deal.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcUseCondoms(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      }
      scene.actions([
        { label: 'Yours', handler: (st: GameState) => {
    if (((st as any).mc_inventory ?? 0)?.['normal_condoms'] === 0) {
      scene.text('"Yours," you say. "I don\'t have any on me today."');
      // TODO-QSP: dynamic text: <<$npcdesc>> nods again and reaches for a condom from his nightstand while you w...
      scene.text(`${((st as any).npcdesc ?? '')} nods again and reaches for a condom from his nightstand while you wait, happy that this didn't have to be a big deal.`);
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
  // TODO-QSP: end
  scene.build();
}

function enterReenableCondoms3(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pc_know_npc_latex_allrg ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
    scene.actions([
      { label: 'We need condoms', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Seriously," you say. "We need to use condoms. I can\'t take chances on this."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCondomCompromise(s, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Insist', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReenableCondomsCode(s, scene); (st as any).locArgs = __savedLocArgs; }
    (st as any).npc_rel = ((st as any).npc_rel ?? 0) - (10);
    scene.text('"This isn\'t up for debate," you insist. "It\'s condoms or we can\'t fuck anymore."');
    scene.text('"Ugh, fine. But you need to bring them. I don\'t have any."');
    if (((st as any).mc_inventory ?? 0)?.['normal_condoms'] === 0) {
      scene.actions([
        { label: 'Uh oh', handler: (st: GameState) => {
    scene.text('"Uhh..."');
    scene.text('You gulp as you realize you didn\'t think to bring any condoms yourself.');
    // TODO-QSP: dynamic text: "Come on," <<$npcdesc>> says with a flat stare. "You''re going to insist all tha...
    scene.text(`"Come on," ${((st as any).npcdesc ?? '')} says with a flat stare. "You're going to insist all that and then not have any condoms to use? So what are we going to do now?"`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNoSexOnly(s, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'No sex', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"I guess that means we\'re not going to have sex today..."');
    // TODO-QSP: dynamic text: "Well this was fucking bullshit," <<$npcdesc>> grumbles.
    scene.text(`"Well this was fucking bullshit," ${((st as any).npcdesc ?? '')} grumbles.`);
    qspCall(st, 'sex_ev_after', 'after_sex1');
  } },
      { label: 'Last time without', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['skip_condom'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_condom'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['must_fuck'] = 1;
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"I guess... one more time couldn\'t hurt," you say hesitantly. "But this is the last time, okay?"');
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
    ]);
  } },
      ]);
    } else {
      scene.text('"Way ahead of you," you grin.');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcCondoms(s, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
    ]);
  } },
    ]);
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCondomCompromise(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Do you promise?', handler: (st: GameState) => {
    // TODO-QSP: $npc_bareback[$npcID] = 'never_use'
    if (((st as any).npc_free_creampies ?? 0)?.[String((st as any).npcID ?? 0)] === 'at_will') {
      // TODO-QSP: $npc_free_creampies[$npcID] = 'when_safe'
    } else {
      if (((st as any).npc_free_creampies_count ?? 0)?.[String((st as any).npcID ?? 0)] !== 1) {
        ((st as any).npc_free_creampies_count = (st as any).npc_free_creampies_count ?? {})[String((st as any).npcID ?? 0)] = 0;
      }
    }
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    scene.text('"Well..." You chew your lip, mulling it over. "You promise promise?"');
    scene.text('"That\'s what I said, didn\'t I? And? Is it safe today?"');
    if (((st as any).mesec ?? 0) > 0) {
      scene.text('"I\'m on my period so... probably."');
      scene.text('Your smile breaks into a grin and he pulls you over, preparing to fuck you bareback.');
    } else {
      if (((st as any).stat ?? 0)?.['preg_risk'] === 'safe') {
        ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'safe';
        scene.text('"Yeah."');
        // TODO-QSP: dynamic text: Your eyes meet for just a moment before <<$npcdesc>> begins clambering into posi...
        scene.text(`Your eyes meet for just a moment before ${((st as any).npcdesc ?? '')} begins clambering into position to fuck you bareback.`);
      } else {
        if (((st as any).stat ?? 0)?.['preg_risk'] === 'prob_safe') {
          ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'prob_safe';
          scene.text('"Probably," you admit, your smile twisting into a smirk. His smile breaks into a grin and pulls you over, preparing to fuck you bareback.');
        } else {
          ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'danger';
          qspCall(st, 'sex_ev_stats', 'restrict_func', 'creampie');
          scene.text('"No. So don\'t you dare come inside me," you say sternly before you break into a smile and spread your legs. "Now hurry up and fuck me."');
        }
      }
    }
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Compromise - Danger days only', handler: (st: GameState) => {
    // TODO-QSP: $npc_bareback[$npcID] = 'when_safe'
    scene.text('You chew your lip, mulling it over.');
    scene.text('"Well... I guess that would be a good compromise..." you smile. "Just as long as I tell you when it\'s safe..."');
    // TODO-QSP: dynamic text: "So?" <<$npcdesc>> says, looking expectantly. "Is it safe today?"
    scene.text(`"So?" ${((st as any).npcdesc ?? '')} says, looking expectantly. "Is it safe today?"`);
    if (((st as any).mesec ?? 0) > 0) {
      scene.actions([
        { label: 'I\'m on my period', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'safe';
    scene.text('"I\'m on my period so... probably?"');
    scene.text('Your smile breaks into a grin and he pulls you over, preparing to fuck you bareback.');
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
      ]);
    } else {
      if (((st as any).stat ?? 0)?.['preg_risk'] === 'safe') {
        scene.actions([
          { label: 'It\'s a safe day', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'safe';
    scene.text('"Yeah."');
    // TODO-QSP: dynamic text: Your eyes meet for just a moment before <<$npcdesc>> begins clambering into posi...
    scene.text(`Your eyes meet for just a moment before ${((st as any).npcdesc ?? '')} begins clambering into position to fuck you bareback.`);
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
        ]);
      } else {
        if (((st as any).stat ?? 0)?.['preg_risk'] === 'prob_safe') {
          scene.actions([
            { label: 'It\'s probably safe day', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'prob_safe';
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Probably," you say, your smile twisting into a smirk. His breaks into a grin and pulls you over, preparing to fuck you bareback.');
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
          ]);
        } else {
          if (((st as any).stat ?? 0)?.['preg_risk'] === 'danger') {
            scene.actions([
              { label: 'Not today', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'danger';
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Not today, sorry to say." Your smile turns wistful. "I\'ll definitely get pregnant if we have an \'accident\' today. So that means condoms."');
    if (((st as any).sex_ev ?? 0)?.['condom_count'] > ((st as any).sex_ev ?? 0)?.['condoms_used']) {
      // TODO-QSP: dynamic text: <<$npcdesc>> sighs wearily and goes to get some.
      scene.text(`${((st as any).npcdesc ?? '')} sighs wearily and goes to get some.`);
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcCondomPutOn(s, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> sighs wearily.
      scene.text(`${((st as any).npcdesc ?? '')} sighs wearily.`);
      scene.text('"Do you have any then? I\'m all out.');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcUseCondoms(s, scene); (st as any).locArgs = __savedLocArgs; }
    }
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
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
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['pc_skip_the_condom'] = 1;
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: iif($sex_ev['type'] ! 'hookup', '"Let''s skip the condom today," you smile.', '"We don''t need to us...
    if (((st as any).birth_control ?? 0)?.['think_safe'] === 1  &&  ((st as any).sex_ev ?? 0)?.['type'] === 'hookup') {
      scene.actions([
        { label: '"I\'m on birth control"', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_stats', 'birth_control_know');
    ((st as any).npc_know_not_bc = (st as any).npc_know_not_bc ?? {})[String((st as any).npcID ?? 0)] = 0;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['must_fuck'] = 1;
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: '"We don''t need to use condoms," you smile. ' + iif(tabletkishot > 0, '"I''m on the shot."', '"I''m...
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcTempNoCondomReact(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    } else {
      if (((st as any).mesec ?? 0) > 0) {
        scene.actions([
          { label: 'I\'m on my period', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'prob_safe';
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Let\'s skip the condom today," you smile. "I don\'t think I can get pregnant on my period."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcTempNoCondomReact(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      } else {
        if (((st as any).stat ?? 0)?.['preg_risk'] === 'safe') {
          scene.actions([
            { label: 'It\'s a safe day', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'safe';
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Let\'s skip the condom," you smile. "It\'s a safe day for me. I won\'t get pregnant."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcTempNoCondomReact(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
          ]);
        } else {
          if (((st as any).stat ?? 0)?.['preg_risk'] === 'prob_safe') {
            scene.actions([
              { label: 'It\'s probably safe day', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'prob_safe';
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Let\'s skip the condom," you smile. "It should be a safe day for me. I won\'t get pregnant."');
    scene.text('<i>Probably...</i> you think quietly to yourself.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcTempNoCondomReact(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
            ]);
          }
        }
      }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCatholicCondoms(s, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'I trust you', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: iif($sex_ev['type'] ! 'hookup', '"Let''s skip the condom today," you smile. ', '"We don''t need to u...
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcTempNoCondomReact(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'It\'ll feel better', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: iif($sex_ev['type'] ! 'hookup', '"Let''s skip the condom today," you smile. ', '"We don''t need to u...
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcTempNoCondomReact(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterFatherCheck(s: GameState, scene: SceneBuilder): void {
  ((s as any).potfather_temp = (s as any).potfather_temp ?? {})[1] = 0;
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
  // TODO-QSP: end
  scene.build();
}

function enterNpcPregReact(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_creampie_count ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    // TODO-QSP: dynamic text: <<$npcdesc>>''s eyes go wide.
    scene.text(`${((s as any).npcdesc ?? '')}'s eyes go wide.`);
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
  // TODO-QSP: end
  scene.build();
}

function enterNpcNoCondomReact(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] === 2  ||  (((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((Math.floor(Math.random() * (100 - ((s as any).npc_willpwr ?? 0)?.[String((s as any).npcID ?? 0)] + 1)) + (((s as any).npc_willpwr ?? 0)?.[String((s as any).npcID ?? 0)])) - ((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)]) > ((s as any).pcs_persuas ?? 0))) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['condom'] = 1;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['npc_condom_motive'] = 'adamant';
    // TODO-QSP: dynamic text: "I want to use one anyways," <<$npcdesc>> says, shaking his head and reaching ba...
    scene.text(`"I want to use one anyways," ${((s as any).npcdesc ?? '')} says, shaking his head and reaching back for the condom. "Better to be safe."`);
    scene.text('Your jaw drops.');
    scene.text('<i>A free pass to go bareback forever and he doesn\'t take it? What\'s with this guy?</i>');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_condoms', 'npc_condom_use');
  } },
    ]);
  } else {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['no_condom'] = 1;
    if (((s as any).sex_ev ?? 0)?.['temp_bareback'] === 1) {
      // TODO-QSP: $npc_bareback[$npcID] = 'never_use'
    } else {
      // TODO-QSP: $npc_bareback[$npcID] = 'when_safe'
    }
    if (((s as any).npc_bareback ?? 0)?.[String((s as any).npcID ?? 0)] === 'never_use') {
      // TODO-QSP: dynamic text: "This is going to feel so good," <<$npcdesc>> says and your smile widens into a ...
      scene.text(`"This is going to feel so good," ${((s as any).npcdesc ?? '')} says and your smile widens into a full blown grin.`);
      qspGoto(s, 'sex_ev_sex', 'position_choose');
    } else {
      // TODO-QSP: dynamic text: "So is today safe?" <<$npcdesc>> asks with a smile.
      scene.text(`"So is today safe?" ${((s as any).npcdesc ?? '')} asks with a smile.`);
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBarebackCheck(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterNpcTempNoCondomReact(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] === 2  ||  (((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((Math.floor(Math.random() * (100 - ((s as any).npc_willpwr ?? 0)?.[String((s as any).npcID ?? 0)] + 1)) + (((s as any).npc_willpwr ?? 0)?.[String((s as any).npcID ?? 0)])) - ((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)]) > ((s as any).pcs_persuas ?? 0))) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['condom'] = 1;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['npc_condom_motive'] = 'adamant';
    // TODO-QSP: dynamic text: "I want to use one anyways," <<$npcdesc>> says, shaking his head and reaching ba...
    scene.text(`"I want to use one anyways," ${((s as any).npcdesc ?? '')} says, shaking his head and reaching back for the condom. "Better to be safe."`);
    scene.text('Your jaw drops.');
    scene.text('<i>A free pass to go bareback and he doesn\'t take it? What\'s with this guy?</i>');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_condoms', 'npc_condom_use');
  } },
    ]);
  } else {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['no_condom'] = 1;
    // TODO-QSP: dynamic text: "This is going to feel so good," <<$npcdesc>> says and your smile widens into a ...
    scene.text(`"This is going to feel so good," ${((s as any).npcdesc ?? '')} says and your smile widens into a full blown grin.`);
  }
  qspGoto(s, 'sex_ev_sex', 'position_choose');
  // TODO-QSP: end
  scene.build();
}

function enterNpcHesitateChildfree(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: <<$npcdesc>> pauses.
  scene.text(`${((s as any).npcdesc ?? '')} pauses.`);
  scene.text('"What do you mean \'should\' be?" he asks.');
  // TODO-QSP: end
  scene.build();
}

function enterBarebackCheck(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['preg_risk'] === 'safe') {
    scene.actions([
      { label: 'No condoms today (safe)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'safe';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_condom'] = 1;
    scene.text('"It\'s safe," you smile. "Let\'s go bareback."');
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
    ]);
  } else {
    if (((s as any).stat ?? 0)?.['preg_risk'] === 'prob_safe') {
      scene.actions([
        { label: 'No condoms today (probably safe)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'prob_safe';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_condom'] = 1;
    scene.text('"Should be safe," you smile. "Let\'s go bareback."');
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
      ]);
    } else {
      if (((s as any).stat ?? 0)?.['preg_risk'] === 'danger') {
        scene.actions([
          { label: 'No condoms today (risky)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'danger';
    scene.text('"It probably isn\'t safe today," you admit. "But I want to feel you. I want to go bareback."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcDangerousDay2(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNeedCondomsToday(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAlreadyCreampie2(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterNeedCondomsToday(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Need condoms today', handler: (st: GameState) => {
    if (((st as any).stat ?? 0)?.['preg_risk'] === 'danger') {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'danger';
    }
    qspCall(st, 'sex_ev_stats', 'restrict_func', 'creampie');
    if (((st as any).mc_inventory ?? 0)?.['normal_condoms'] > 0  ||  (((st as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0  &&  ((st as any).preziktype ?? 0) === 0)) {
      scene.actions([
        { label: 'Use yours', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['using_pc_condoms'] = 1;
    scene.text('"Sorry," you say pulling out a condom from your stash. "We should use protection today."');
    if ((((st as any).npc_cum_pref ?? 0)?.[String((st as any).npcID ?? 0)] === 'pullout'  ||  ((st as any).npc_arrogant ?? 0)?.[String((st as any).npcID ?? 0)] > 0  ||  ((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] > 0)  &&  ((st as any).npc_condom_conscious ?? 0)?.[String((st as any).npcID ?? 0)] < 1) {
      // TODO-QSP: dynamic text: "We don''t need condoms," <<$npcdesc>> says. "I''ve got pullout game."
      scene.text(`"We don't need condoms," ${((st as any).npcdesc ?? '')} says. "I've got pullout game."`);
      ((st as any).npc_pullout_game = (st as any).npc_pullout_game ?? {})[String((st as any).npcID ?? 0)] = 1;
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcPulloutGame(s, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      scene.actions([
        { label: 'Put it on him', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_stats', 'pc_condom_stats');
    scene.img('images/shared/sex/misc/condom_put.jpg');
    // TODO-QSP: dynamic text: With sensually slow movements you crawl over to <<$npcdesc>> and tear open the p...
    scene.text(`With sensually slow movements you crawl over to ${((st as any).npcdesc ?? '')} and tear open the packaging, gently rolling the condom down his erect manhood and jerking it a few times as much as for pleasure as for making sure the rubber's snug.`);
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
        { label: 'Use your mouth', handler: (st: GameState) => {
    scene.img('images/shared/sex/misc/condom_mouth.mp4');
    qspCall(st, 'sex_ev_stats', 'pc_condom_stats');
    // TODO-QSP: dynamic text: With sensually slow movements you crawl over to <<$npcdesc>> and tear open the p...
    scene.text(`With sensually slow movements you crawl over to ${((st as any).npcdesc ?? '')} and tear open the packaging, placing the condom on the tip of his penis and kissing it through the rubber. Then, using your fingers, you unroll it smoothly over the length of his cock, your lips following all the way down. You bob your head up and down a few more times to make sure it's all the way on before pulling back.`);
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
      ]);
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Use his', handler: (st: GameState) => {
    scene.text('"It\'s dangerous to go without protection today," you tell him. "We should use a condom. Can we use yours?"');
    if ((((st as any).npc_cum_pref ?? 0)?.[String((st as any).npcID ?? 0)] === 'pullout'  ||  ((st as any).npc_arrogant ?? 0)?.[String((st as any).npcID ?? 0)] > 0  ||  ((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] > 0)  &&  ((st as any).npc_condom_conscious ?? 0)?.[String((st as any).npcID ?? 0)] < 1) {
      // TODO-QSP: dynamic text: "We don''t need condoms," <<$npcdesc>> says. "I''ve got pullout game."
      scene.text(`"We don't need condoms," ${((st as any).npcdesc ?? '')} says. "I've got pullout game."`);
      ((st as any).npc_pullout_game = (st as any).npc_pullout_game ?? {})[String((st as any).npcID ?? 0)] = 1;
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcPulloutGame(s, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      if (((st as any).sex_ev ?? 0)?.['condom_count'] > ((st as any).sex_ev ?? 0)?.['condoms_used']) {
        ((st as any).sex_ev = (st as any).sex_ev ?? {})['condom'] = 1;
        ((st as any).sex_ev = (st as any).sex_ev ?? {})['must_fuck'] = 1;
        if (((st as any).sex_ev ?? 0)?.['loc'] === 'npc_home') {
          scene.text('He nods, reaching over to his nightstand for a condom.');
        } else {
          if (((st as any).sex_ev ?? 0)?.['loc'] === 'hotel_room') {
            scene.text('He nods, reaching into his suitcase to retrieve one.');
          } else {
            scene.text('He nods, reaching to retrieve one from his wallet.');
          }
        }
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcCondomPutOn(s, scene); (st as any).locArgs = __savedLocArgs; }
      } else {
        scene.text('"Don\'t have any left. I\'m all out."');
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNoCondom2(s, scene); (st as any).locArgs = __savedLocArgs; }
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
  scene.text(`"Is today a safe day?" ${((s as any).npcdesc ?? '')} asks. "Can I come inside you?"`);
  if (((s as any).birth_control ?? 0)?.['think_safe'] === 0) {
    if (((s as any).stat ?? 0)?.['preg_risk'] === 'safe') {
      scene.actions([
        { label: 'It\'s safe', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'safe';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_allowance'] = 1;
    scene.text('"It\'s safe," you smile. "Fill me up."');
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
      ]);
    } else {
      if (((s as any).stat ?? 0)?.['preg_risk'] === 'prob_safe') {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAlreadyCreampie2(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPcDangerousDayCantCumInside(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPcDangerousDayPullout(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPcDangerousDayCondomInsist(s, scene); (s as any).locArgs = __savedLocArgs; }
        scene.actions([
          { label: 'Probably safe', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'prob_safe';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_condom'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_allowance'] = 1;
    scene.text('"Safe enough," you smile. "Go ahead. Fill me up."');
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
          { label: 'Risk it (dangerous)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'danger';
    // TODO-QSP: $npc_free_creampies[$npcID] = 'at_will'
    scene.text('"It probably isn\'t safe today," you admit. "But I ."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcDangerousDay2(s, scene); (st as any).locArgs = __savedLocArgs; }
    // TODO-QSP: end !}
  } },
        ]);
      } else {
        scene.actions([
          { label: 'You\'re on birth control', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "I''m on the <<$birth_control[''type'']>> now," you smile. "Come inside me as mu...
    scene.text(`"I'm on the ${((st as any).birth_control ?? 0)?.['type'] ?? ''} now," you smile. "Come inside me as much as you want."`);
    qspCall(st, 'sex_ev_stats', 'birth_control_know');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_condom'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_allowance'] = 1;
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
        ]);
      }
    }
  }
  scene.build();
}

function enterPcDangerousDay(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['preg_risk'] === 'danger'  &&  ((s as any).birth_control ?? 0)?.['think_safe'] !== 1  &&  ((s as any).succubusflag ?? 0) !== 1  &&  ((s as any).sex_ev ?? 0)?.['preg_risk'] === '') {
    scene.actions([
      { label: 'Today is a dangerous day', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'danger';
    qspCall(st, 'sex_ev_stats', 'restrict_func', 'creampie');
    // TODO-QSP: $sex_ev['bed_room']
    if (((st as any).ovulate ?? 0) > 0) {
      // TODO-QSP: dynamic text: "I''m ovulating right now," you warn <<$npcdesc>>. 
      scene.text(`"I'm ovulating right now," you warn ${((st as any).npcdesc ?? '')}. `);
    } else {
      // TODO-QSP: dynamic text: "I''m ovulating soon," you warn <<$npcdesc>>. 
      scene.text(`"I'm ovulating soon," you warn ${((st as any).npcdesc ?? '')}. `);
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcDangerousDayCantCumInside(s, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcDangerousDayPullout(s, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcDangerousDayCondomInsist(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPcDangerousDayCantCumInside(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['preg_risk'] === 'danger'  &&  ((s as any).birth_control ?? 0)?.['think_safe'] !== 1  &&  ((s as any).succubusflag ?? 0) !== 1) {
    scene.actions([
      { label: '"You can\'t come inside me"', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_stats', 'restrict_func', 'creampie');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'danger';
    // TODO-QSP: $sex_ev['bed_room']
    if (((st as any).ovulate ?? 0) > 0) {
      // TODO-QSP: dynamic text: "I''m ovulating right now," you warn <<$npcdesc>>. "You can''t come inside me, I...
      scene.text(`"I'm ovulating right now," you warn ${((st as any).npcdesc ?? '')}. "You can't come inside me, I'll get pregnant."`);
    } else {
      // TODO-QSP: dynamic text: "I''m ovulating soon," you warn <<$npcdesc>>. "If you come inside me now, I''ll ...
      scene.text(`"I'm ovulating soon," you warn ${((st as any).npcdesc ?? '')}. "If you come inside me now, I'll could pregnant."`);
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcDangerousDay2(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPcDangerousDayPullout(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['preg_risk'] === 'danger'  &&  ((s as any).birth_control ?? 0)?.['think_safe'] !== 1  &&  ((s as any).succubusflag ?? 0) !== 1) {
    scene.actions([
      { label: '"You better pull out"', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_stats', 'restrict_func', 'creampie');
    // TODO-QSP: $sex_ev['bed_room']
    if (((st as any).ovulate ?? 0) > 0) {
      // TODO-QSP: '"I''m ovulating right now," you warn <<$npcdesc>>. ' + iif(sex_ev['pullout_game'] = 1, '"So you bet...
    } else {
      // TODO-QSP: '"I''m ovulating soon," you warn <<$npcdesc>>. ' + iif(sex_ev['pullout_game'] = 1, '"So you better l...
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcDangerousDay2(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPcDangerousDayCondomInsist(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['preg_risk'] === 'danger'  &&  ((s as any).birth_control ?? 0)?.['think_safe'] !== 1  &&  ((s as any).succubusflag ?? 0) !== 1) {
    scene.actions([
      { label: 'We need to use a condom (danger day)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'danger';
    qspCall(st, 'sex_ev_stats', 'restrict_func', 'creampie');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['condom_motive'] = 'pregnancy';
    // TODO-QSP: $sex_ev['bed_room']
    if (((st as any).ovulate ?? 0) > 0) {
      // TODO-QSP: dynamic text: "I''m ovulating right now," you warn <<$npcdesc>>. "We <i>need</i> to use a cond...
      scene.text(`"I'm ovulating right now," you warn ${((st as any).npcdesc ?? '')}. "We <i>need</i> to use a condom."`);
    } else {
      // TODO-QSP: dynamic text: "I''m ovulating soon," you warn <<$npcdesc>>. "If you come inside me now, I''ll ...
      scene.text(`"I'm ovulating soon," you warn ${((st as any).npcdesc ?? '')}. "If you come inside me now, I'll get pregnant. We <i>need</i> to use a condom."`);
    }
    if ((((st as any).npc_cum_pref ?? 0)?.[String((st as any).npcID ?? 0)] === 'pullout'  ||  ((st as any).npc_arrogant ?? 0)?.[String((st as any).npcID ?? 0)] > 0  ||  ((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] > 0)  &&  ((st as any).npc_condom_conscious ?? 0)?.[String((st as any).npcID ?? 0)] < 1) {
      // TODO-QSP: dynamic text: "We don''t need condoms," <<$npcdesc>> says. "I''ve got pullout game."
      scene.text(`"We don't need condoms," ${((st as any).npcdesc ?? '')} says. "I've got pullout game."`);
      ((st as any).npc_pullout_game = (st as any).npc_pullout_game ?? {})[String((st as any).npcID ?? 0)] = 1;
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcPulloutGame(s, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcDangerousDayCondomInsist2(s, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPcDangerousDayCondomInsist2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    // TODO-QSP: dynamic text: "<<$npcdesc>> nods and immediately reaches for one from his stash.
    scene.text(`"${((s as any).npcdesc ?? '')} nods and immediately reaches for one from his stash.`);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNpcCondomPutOn(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).npc_no_condoms ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.text('"Ugh fine..." he sighs. "But I don\'t have any. We need to use yours."');
      if (((s as any).mc_inventory ?? 0)?.['normal_condoms'] === 0) {
        scene.text('"I don\'t have any..." you say reluctantly. "I thought you would."');
        if (((s as any).npc_no_condoms_know ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          scene.text('"I can\'t imagine why you\'d think that," he replies dryly. "You know I don\'t use them."');
        } else {
          ((s as any).npc_no_condoms_know = (s as any).npc_no_condoms_know ?? {})[String((s as any).npcID ?? 0)] = 1;
          scene.text('"Well I don\'t," he replies dryly. "I don\'t use them."');
        }
        qspCall(s, 'sex_ev_after', 'no_condom_end');
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNoSexOnly(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPcUseCondoms(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    } else {
      if (((s as any).npc_no_condoms ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
        scene.text('"Come on, do we really have to? I promise I won\'t come inside."');
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNpcPromiseWontCreampie(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        // TODO-QSP: dynamic text: "Okay," <<$npcdesc>> nods.
        scene.text(`"Okay," ${((s as any).npcdesc ?? '')} nods.`);
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPcCondoms(s, scene); (s as any).locArgs = __savedLocArgs; }
        scene.actions([
          { label: 'Ask to use his', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    if (((st as any).mc_inventory ?? 0)?.['normal_condoms'] > 0  ||  (((st as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0  &&  ((st as any).preziktype ?? 0) === 0)) {
      scene.text('"Could we use yours?" you ask and he immediately reaches over to grab one.');
    } else {
      scene.text('"I don\'t have any on me. Can we use yours?" you ask and he immediately reaches over to grab one.');
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcCondomPutOn(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPcDangerousDay2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    scene.text('"Maybe we should just use a condom," he says, eyeing his stash of rubbers.');
    scene.actions([
      { label: 'Good idea', handler: (st: GameState) => {
    scene.text('"Good idea," you nod.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcCondoms(s, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Ask to use his', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    if (((st as any).mc_inventory ?? 0)?.['normal_condoms'] > 0  ||  (((st as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0  &&  ((st as any).preziktype ?? 0) === 0)) {
      scene.text('"Could we use yours?" you ask and he immediately reaches for one.');
    } else {
      scene.text('"I don\'t have any on me. Can we use yours?" you ask.');
      scene.text('"You know, you don\'t have to buy any if you want," he says as he pulls one out. "I buy in bulk so I always have some on hand."');
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNpcCondomPutOn(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
      { label: 'I trust you', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'like');
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"No, it\'s okay," you say, shaking your head and smiling. "I trust you."');
    if (((st as any).npc_childfree ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      scene.text('He hesitates for a moment before shaking his head back at you.');
      scene.text('"No, better to be safe." He reaches for a condom anyways and you sigh deeply. "I really don\'t want kids," he says, rolling it onto his cock.');
      qspCall(st, 'sex_ev_stats', 'npc_condom_stats');
      qspGoto(st, 'sex_ev_sex', 'position_choose');
    } else {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_condom'] = 1;
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['promise_no_creampie'] = 1;
      scene.text('"If you say so," he smiles back.');
      qspGoto(st, 'sex_ev_sex', 'position_choose');
    }
  } },
    ]);
  } else {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['no_condom'] = 1;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    qspGoto(s, 'sex_ev_sex', 'position_choose');
  }
  // TODO-QSP: end
  scene.build();
}

function enterPcSafeDay(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['preg_risk'] !== 'danger'  &&  ((s as any).birth_control ?? 0)?.['think_safe'] !== 1  &&  ((s as any).succubusflag ?? 0) !== 1  &&  ((s as any).sex_ev ?? 0)?.['preg_risk'] === ''  &&  ((s as any).sex_ev ?? 0)?.['condom'] === 0) {
    if (((s as any).mesec ?? 0) > 0) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['safe_day_act'] = 'I\'m on my period';
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['safe_day_desc1'] = 'I\'m on my period';
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['safe_day_creampie_desc'] = 'So you can come inside me if you want. I don\'t think I can get pregnant on my period';
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['safe_day_no_condom_desc'] = 'So we don\'t need a condom. I don\'t think I can get pregnant on my period';
    } else {
      if (((s as any).stat ?? 0)?.['preg_risk'] === 'safe') {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['safe_day_act'] = 'Today is a safe day';
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['safe_day_desc1'] = 'It\'s a safe day';
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['safe_day_creampie_desc'] = 'You can come inside me if you want';
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['safe_day_no_condom_desc'] = 'We can skip the condom today';
      } else {
        if (((s as any).stat ?? 0)?.['preg_risk'] === 'prob_safe') {
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['safe_day_act'] = 'I\'m probably safe today';
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['safe_day_desc1'] = 'It should be a safe day for me';
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['safe_day_creampie_desc'] = 'I think it\'ll be okay if you want to come inside me';
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['safe_day_no_condom_desc'] = 'We can skip the condom today';
        }
      }
    }
    if (((s as any).npc_bareback ?? 0)?.[String((s as any).npcID ?? 0)] === 'never_use') {
      scene.actions([
        { label: 'You can come inside me', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_allowance'] = 1;
    // TODO-QSP: $sex_ev['bed_room']
    if (((st as any).mesec ?? 0) > 0) {
      // TODO-QSP: dynamic text: "You can come inside me today," you tell at <<$npcdesc>>. "I don''t think I can ...
      scene.text(`"You can come inside me today," you tell at ${((st as any).npcdesc ?? '')}. "I don't think I can get pregnant on my period."`);
    } else {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = ((st as any).stat ?? 0)?.['preg_risk'];
      // TODO-QSP: dynamic text: "<<$sex_ev[''safe_day_desc1'']>>," you tell at <<$npcdesc>>. "<<$sex_ev[''safe_d...
      scene.text(`"${((st as any).sex_ev ?? 0)?.['safe_day_desc1'] ?? ''}," you tell at ${((st as any).npcdesc ?? '')}. "${((st as any).sex_ev ?? 0)?.['safe_day_creampie_desc'] ?? ''}."`);
    }
    if (((st as any).npc_cum_pref ?? 0)?.[String((st as any).npcID ?? 0)] === 'creampie') {
      scene.text('"I\'m going to pump you full of so many creampies," he grins.');
    } else {
      scene.text('"Good to know," he smiles back.');
    }
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
      ]);
    } else {
      scene.actions([
        { label: '', labelFn: (s: GameState) => String(((s as any).sex_ev ?? 0)?.['safe_day_act'] ?? '' ?? ''), handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'safe';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_condom'] = 1;
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: dynamic text: "<<$sex_ev[''safe_day_desc1'']>>," you tell <<$npcdesc>>.
    scene.text(`"${((st as any).sex_ev ?? 0)?.['safe_day_desc1'] ?? ''}," you tell ${((st as any).npcdesc ?? '')}.`);
    if (((st as any).npc_bareback ?? 0)?.[String((st as any).npcID ?? 0)] !== 'never_use') {
      scene.actions([
        { label: 'We can skip the condom', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['pc_skip_the_condom'] = 1;
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: dynamic text: "<<$sex_ev[''safe_day_desc1'']>>," you smile at <<$npcdesc>>. "<<$sex_ev[''safe_...
    scene.text(`"${((st as any).sex_ev ?? 0)?.['safe_day_desc1'] ?? ''}," you smile at ${((st as any).npcdesc ?? '')}. "${((st as any).sex_ev ?? 0)?.['safe_day_no_condom_desc'] ?? ''}."`);
    if (((st as any).npc_cum_pref ?? 0)?.[String((st as any).npcID ?? 0)] === 'creampie') {
      scene.text('"I\'m going to pump you full of so many creampies," he whispers.');
      scene.actions([
        { label: 'I didn\'t say that (annoyed)', handler: (st: GameState) => {
    scene.text('"I didn\'t say you could do that," you frown back.');
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
        { label: 'I didn\'t say that (amused)', handler: (st: GameState) => {
    scene.text('"That\'s not what I said," you giggle.');
    scene.text('"It\'s what I heard," he grins back.');
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
      ]);
    } else {
      if (((st as any).npc_no_condoms ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
        // TODO-QSP: dynamic text: "Finally," <<$npcdesc>> says. "I''m sick of using that rubber shit."
        scene.text(`"Finally," ${((st as any).npcdesc ?? '')} says. "I'm sick of using that rubber shit."`);
        qspGoto(st, 'sex_ev_sex', 'position_choose');
      } else {
        scene.text('"Good to know," he smiles back.');
        qspGoto(st, 'sex_ev_sex', 'position_choose');
      }
    }
  } },
      ]);
    }
    if (((st as any).sex_ev ?? 0)?.['virgin'] === 1) {
      scene.actions([
        { label: 'I don\'t want my first time with a condom', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['pc_skip_the_condom'] = 1;
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: dynamic text: "<<$sex_ev[''safe_day_desc1'']>>," you smile at <<$npcdesc>>. "Besides, I don''t...
    scene.text(`"${((st as any).sex_ev ?? 0)?.['safe_day_desc1'] ?? ''}," you smile at ${((st as any).npcdesc ?? '')}. "Besides, I don't want my first time to be with a condom."`);
    if (((st as any).npc_no_condoms ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      ((st as any).npc_no_condoms_know = (st as any).npc_no_condoms_know ?? {})[String((st as any).npcID ?? 0)] = 1;
      scene.text('"I never use condoms anyways," he grins.');
    } else {
      scene.text('"It\'ll feel better," he nods back.');
    }
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
      ]);
    }
    scene.actions([
      { label: 'You can come inside me', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_allowance'] = 1;
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: dynamic text: "<<$sex_ev[''safe_day_desc1'']>>," you tell <<$npcdesc>>. "<<$sex_ev[''safe_day_...
    scene.text(`"${((st as any).sex_ev ?? 0)?.['safe_day_desc1'] ?? ''}," you tell ${((st as any).npcdesc ?? '')}. "${((st as any).sex_ev ?? 0)?.['safe_day_creampie_desc'] ?? ''}."`);
    if (((st as any).npc_cum_pref ?? 0)?.[String((st as any).npcID ?? 0)] === 'creampie') {
      scene.text('"I\'m going to pump you full of so much cum," he grins.');
    } else {
      scene.text('"Good to know," he smiles back.');
    }
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAlreadyCreampie1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['last_creampie'] === ((s as any).daystart ?? 0)  &&  ((s as any).birth_control ?? 0)?.['think_safe'] !== 1) {
    if (((s as any).npc_bareback ?? 0)?.[String((s as any).npcID ?? 0)] !== 'never_use') {
      scene.actions([
        { label: 'Already been creampied today (go bareback)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_condom'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['pc_skip_the_condom'] = 1;
    scene.text('"Somebody came inside me earlier," you say. "So let\'s skip the rubber. Seems a little too late for condoms."');
    if (((st as any).npc_cum_pref ?? 0)?.[String((st as any).npcID ?? 0)] === 'creampie') {
      // TODO-QSP: dynamic text: "Does that mean I can come inside you too?" <<$npcdesc>> asks eagerly.
      scene.text(`"Does that mean I can come inside you too?" ${((st as any).npcdesc ?? '')} asks eagerly.`);
      scene.actions([
        { label: 'No', handler: (st: GameState) => {
    scene.text('"No it does not," you reply, twisting your mouth in a wry smirk. "I feel like we don\'t need to be extra careful, I didn\'t say I want to be extra risky."');
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
        { label: 'Yes', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_allowance'] = 1;
    scene.text('"Go for it," you reply.');
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: "You really get around don''t you?" <<$npcdesc>> says amusedly.
      scene.text(`"You really get around don't you?" ${((st as any).npcdesc ?? '')} says amusedly.`);
      scene.actions([
        { label: 'Blush', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: Your cheeks flush with heat as <<$npcdesc>> pulls you towards him.
    scene.text(`Your cheeks flush with heat as ${((st as any).npcdesc ?? '')} pulls you towards him.`);
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
        { label: 'Grumble', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Shut up," you grumble as <<$npcdesc>> pulls you towards him.
    scene.text(`"Shut up," you grumble as ${((st as any).npcdesc ?? '')} pulls you towards him.`);
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
        { label: 'Giggle', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Shut up," you giggle back as <<$npcdesc>> pulls you towards him.
    scene.text(`"Shut up," you giggle back as ${((st as any).npcdesc ?? '')} pulls you towards him.`);
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
      ]);
    }
  } },
      ]);
    }
    if (((s as any).npc_creampie_okay ?? 0)?.[String((s as any).npcID ?? 0)] !== 2  &&  ((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] !== 'at_will') {
      scene.actions([
        { label: 'Already been creampied today (free creampies)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_condom'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_allowance'] = 1;
    scene.text('"Somebody already came inside me today," you say. "If I have to get a pill anyways, I might as well make the most of it."');
    // TODO-QSP: dynamic text: You pull <<$npcdesc>> close to whisper in his ear.
    scene.text(`You pull ${((st as any).npcdesc ?? '')} close to whisper in his ear.`);
    scene.text('<i>"Come inside me as much as you want."</i>');
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAlreadyCreampie2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['last_creampie'] === ((s as any).daystart ?? 0)  &&  ((s as any).birth_control ?? 0)?.['think_safe'] !== 1) {
    scene.actions([
      { label: 'Already been creampied today (go bareback)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_condom'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['pc_skip_the_condom'] = 1;
    scene.text('"Well," you say wryly. "Seeing as someone else already came inside me today, it feels a little silly to worry about condoms. So yeah, fuck me bareback."');
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
      { label: 'Already been creampied today (free creampies)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_condom'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_allowance'] = 1;
    scene.text('"Well," you say wryly. "Seeing as someone else already came inside me today, it feels a little silly to worry about condoms. In fact..."');
    // TODO-QSP: dynamic text: You pull <<$npcdesc>> close to whisper in his ear.
    scene.text(`You pull ${((st as any).npcdesc ?? '')} close to whisper in his ear.`);
    scene.text('<i>"Come inside me as much as you want."</i>');
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterStartedBc1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
    scene.actions([
      { label: 'No need to pull out (birth control)', handler: (st: GameState) => {
    // TODO-QSP: $npc_bareback[$npcID] = 'never_use'
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_condom'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_allowance'] = 1;
    qspCall(st, 'sex_ev_stats', 'birth_control_know');
    if (((st as any).sex_ev ?? 0)?.['pullout_game'] === 1) {
      // TODO-QSP: '"Why bother?" you ask in a mischievous tone. ' + iif(tabletkishot > 0, '"I''m on the shot', '"I''m ...
    } else {
      // TODO-QSP: '"Don''t worry about pulling out," you say in a mischievous tone. ' + iif(tabletkishot > 0, '"I''m o...
    }
    // TODO-QSP: dynamic text: <<$npcdesc>>''s eyes light up.
    scene.text(`${((st as any).npcdesc ?? '')}'s eyes light up.`);
    scene.text('"Come inside me as much as you want," you smirk.');
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
      { label: 'Don\'t pull out (birth control)', handler: (st: GameState) => {
    // TODO-QSP: $npc_bareback[$npcID] = 'never_use'
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_condom'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_allowance'] = 1;
    qspCall(st, 'sex_ev_stats', 'birth_control_know');
    if (((st as any).sex_ev ?? 0)?.['pullout_game'] === 1) {
      // TODO-QSP: '"You better not," you say in a mischievous tone. ' + iif(tabletkishot > 0, '"I''m on the shot', '"I...
    } else {
      // TODO-QSP: '"Don''t you dare pull out," you warn in a mischievous tone. ' + iif(tabletkishot > 0, '"I''m on the...
    }
    // TODO-QSP: dynamic text: <<$npcdesc>>''s eyes light up.
    scene.text(`${((st as any).npcdesc ?? '')}'s eyes light up.`);
    scene.text('"Fill me with your cum," you whisper.');
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterNoMoreFreeCreampies1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] !== '') {
    scene.actions([
      { label: 'About creampies', handler: (st: GameState) => {
    scene.text('"Hey, you remember when I said you could come inside me whenever you want?"');
    scene.text('"Yeah? What about it?"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNoMoreFreeCreampies2(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterNoMoreFreeCreampies2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === 'at_will') {
    scene.actions([
      { label: 'You need to ask permission now', handler: (st: GameState) => {
    scene.text('"You need to ask permission to come inside me now."');
    scene.text('"What? Why?"');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['temp_disable_creampies'] = 1;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNoMoreFreeCreampies3(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Never mind', handler: (st: GameState) => {
    scene.text('"Never mind," you say. "You can keep doing that. Forget I said anything."');
    qspCall(st, 'sex_ev_sex', 'position_choose');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCondoms(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Can\'t come inside me anymore', handler: (st: GameState) => {
    scene.text('"I can\'t let you come inside me anymore. At all."');
    scene.text('"What? Why not?"');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['temp_disable_creampies'] = 0;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNoMoreFreeCreampies3(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterNoMoreFreeCreampies3(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).birth_control ?? 0)?.['think_safe'] === 0  &&  ((s as any).pillcon2 ?? 0) > 0)  ||  (((s as any).birth_control ?? 0)?.['remind_hour'] === 0  &&  ((s as any).tabletkicheck ?? 0) === 0)) {
    scene.actions([
      { label: 'I stopped my birth control', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_stats', 'no_birth_control_know');
    scene.text('"I\'m not on birth control anymore."');
    scene.text('"Huh? How come?"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNoMoreFreeCreampies3_bc(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  if (((s as any).stat ?? 0)?.['boyfriends_current'] > 0) {
    scene.actions([
      { label: 'Trying for baby with lover', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTryingForBaby(s, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNoMoreFreeCreampies4(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'No explanation', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['temp_disable_creampies'] === 0) {
      scene.text('"You just can\'t," you say flatly.');
    } else {
      if (((st as any).sex_ev ?? 0)?.['temp_disable_creampies'] === 1) {
        scene.text('"Because I want you to," you say flatly.');
      }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNoMoreFreeCreampies4(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterNoMoreFreeCreampies3_bc(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'No reason', handler: (st: GameState) => {
    scene.text('"No reason," you shrug. "I need to explain myself to you? Look, does this have to be a whole thing? Can\'t you just not come inside me because I asked you not to?"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNoMoreFreeCreampies4(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Too much hassle', handler: (st: GameState) => {
    scene.text('"Was too much hassle to take the pill every day," you shrug. "I\'d rather use the calendar method. Look, does this have to be a whole thing? Can\'t you just not come inside me because I asked you not to?"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNoMoreFreeCreampies4(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Didn\'t like it', handler: (st: GameState) => {
    scene.text('"I didn\'t like it," you shrug. "It was messing up my hormones and making me feel all weird. I\'d rather use the calendar method. Look, does this have to be a whole thing? Can\'t you just not come inside me because I asked you not to?"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNoMoreFreeCreampies4(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterNoMoreFreeCreampies4(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie'  &&  (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0)) {
    if (((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === 'when_safe'  &&  ((s as any).sex_ev ?? 0)?.['temp_disable_creampies'] === 0) {
      scene.text('"Seriously? Why can\'t we just keep doing what we\'re doing? You already don\'t want me to come inside you on unsafe days. Let\'s just keep doing that."');
    } else {
      scene.text('"What if it\'s just on days when you\'re not in danger of getting pregnant? You can tell me when it\'s safe and I can pull out on days when it\'s not?"');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNoMoreFreeCreampies5(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    ((s as any).npc_free_creampies_count = (s as any).npc_free_creampies_count ?? {})[String((s as any).npcID ?? 0)] = ((s as any).sex_ev ?? 0)?.['temp_disable_creampies'];
    // TODO-QSP: dynamic text: "Okay," <<$npcdesc>> nods. "That''s fair."
    scene.text(`"Okay," ${((s as any).npcdesc ?? '')} nods. "That's fair."`);
    scene.text('"Thanks for making this easy," you smile.');
    qspGoto(s, 'sex_ev_sex', 'position_choose');
  }
  // TODO-QSP: end
  scene.build();
}

function enterNoMoreFreeCreampies5(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Insist', handler: (st: GameState) => {
    ((st as any).npc_free_creampies_count = (st as any).npc_free_creampies_count ?? {})[String((st as any).npcID ?? 0)] = ((st as any).sex_ev ?? 0)?.['temp_disable_creampies'];
    (st as any).npc_rel = ((st as any).npc_rel ?? 0) - (10);
    scene.text('"This isn\'t up for debate," you insist. "You need to promise me that you\'re not going to come inside me or we can\'t fuck anymore."');
    // TODO-QSP: dynamic text: "Fine, fine," <<$npcdesc>> grumbles.
    scene.text(`"Fine, fine," ${((st as any).npcdesc ?? '')} grumbles.`);
    scene.text('"<i>Thank you</i>," you sigh frustratedly.');
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
    { label: 'Do you promise?', handler: (st: GameState) => {
    // TODO-QSP: $npc_free_creampies[$npcID] = 'when_safe'
    scene.text('"Well..." You chew your lip, mulling it over. "You promise you won\'t come inside me without permission?"');
    scene.text('"That\'s what I said, didn\'t I? And? Is it safe today?"');
    if (((st as any).mesec ?? 0) > 0) {
      scene.text('"I\'m on my period so... probably."');
      scene.text('Your smile breaks into a grin and he pulls you over, preparing to fuck you.');
      scene.text('"Pump me full of cum," you giggle.');
    } else {
      if (((st as any).stat ?? 0)?.['preg_risk'] === 'safe') {
        ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'safe';
        scene.text('"Yeah."');
        // TODO-QSP: dynamic text: Your eyes meet for just a moment before <<$npcdesc>> begins clambering into posi...
        scene.text(`Your eyes meet for just a moment before ${((st as any).npcdesc ?? '')} begins clambering into position to fuck you.`);
        scene.text('"Pump me full of cum," you giggle.');
      } else {
        if (((st as any).stat ?? 0)?.['preg_risk'] === 'prob_safe') {
          ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = ((st as any).stat ?? 0)?.['preg_risk'];
          scene.text('"Probably," you admit, your smile twisting into a smirk.');
          scene.text('His smile breaks into a grin and pulls you over, preparing to fuck you.');
          scene.text('"Pump me full of cum," you giggle.');
        } else {
          ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'danger';
          qspCall(st, 'sex_ev_stats', 'restrict_func', 'creampie');
          scene.text('"No. So don\'t you dare come inside me," you say sternly before you break into a smile and spread your legs. "Now hurry up and fuck me."');
        }
      }
    }
    qspGoto(st, 'sex_ev_sex', 'position_choose');
  } },
  ]);
  scene.build();
}

function enterTryingForBaby(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_know_cheat = (s as any).npc_know_cheat ?? {})[String((s as any).npcID ?? 0)] = 1;
  ((s as any).npc_know_trying_baby = (s as any).npc_know_trying_baby ?? {})[String((s as any).npcID ?? 0)] = 1;
  qspCall(s, 'sex_ev_stats', 'no_birth_control_know');
  if (((s as any).sex_ev ?? 0)?.['type'] === 'booty call') {
    if (((s as any).husID ?? 0) !== '') {
      scene.text('"My husband and I are trying for a baby," you explain. "It would be really bad if I got impregnated by my fuckbuddy."');
    } else {
      scene.text('"My boyfriend and I are trying for a baby," you explain. "It would be really bad if I got impregnated by my fuckbuddy."');
    }
  } else {
    if (((s as any).husID ?? 0) !== '') {
      scene.text('"My husband and I are trying for a baby," you explain. "It would be really bad if I got impregnated by some other guy."');
    } else {
      scene.text('"My boyfriend and I are trying for a baby," you explain. "It would be really bad if I got impregnated by some other guy."');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterVirginCondom1(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterVirginNoCondom(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for him', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['condom'] = 1;
    qspCall(st, 'sex_ev_stats', 'npc_condom_stats');
    scene.img('images/shared/sex/misc/wait.mp4');
    scene.text('He tears open the packaging and begins rolling the rubber sleeve onto his cock. You watch him, anxious with anticipation, thinking about what\'s about to happen next.');
    scene.text('With the condom securely wrapped around his manhood, he lines his cock up with your pussy.');
    if (((st as any).npc_sex_speed ?? 0)?.[String((st as any).npcID ?? 0)] === 3  &&  (((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] === 1  ||  ((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] === 1)) {
      scene.actions([
        { label: 'Continue', goto: ['sex_ev_virgin', 'miss_virg_hard1'] },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', goto: ['sex_ev_virgin', 'insertion_pre'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterVirginCondomAsk1(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask him to use a condom', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['condom_setup'] !== 1) {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetup(s, scene); (st as any).locArgs = __savedLocArgs; }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCheckCount(s, scene); (st as any).locArgs = __savedLocArgs; }
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Can you use a condom?" you whisper. "Please?"');
    if (((st as any).npc_condom_conscious ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: "Of course," <<$npcdesc>> says, already tearing open a package. "I''m not an idi...
      scene.text(`"Of course," ${((st as any).npcdesc ?? '')} says, already tearing open a package. "I'm not an idiot you know."`);
      qspCall(st, 'sex_ev_virgin', 'start_with_condom');
    } else {
      if (((st as any).npc_no_condoms ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
        scene.text('"Nah, fuck that rubber shit. I don\'t use it."');
        ((st as any).npc_no_condoms_know = (st as any).npc_no_condoms_know ?? {})[String((st as any).npcID ?? 0)] = 1;
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterVirginCondomAsk2(s, scene); (st as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterVirginNoCondomShock1(s, scene); (st as any).locArgs = __savedLocArgs; }
      } else {
        if (((st as any).sex_ev ?? 0)?.['condom_count'] <= 0) {
          scene.text('"Can\'t. I\'m all out."');
          { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterVirginCondomAsk2(s, scene); (st as any).locArgs = __savedLocArgs; }
        } else {
          if ((Math.floor(Math.random() * 2) + 1) === 2) {
            // TODO-QSP: dynamic text: <<$npcdesc>> nods and gets one out, tearing open the package and pulling out the...
            scene.text(`${((st as any).npcdesc ?? '')} nods and gets one out, tearing open the package and pulling out the little rubber sleeve.`);
            qspCall(st, 'sex_ev_virgin', 'start_with_condom');
          } else {
            scene.text('"Come on," he says. "You really want to use a condom for your first time?"');
            { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterVirginCondomAsk3(s, scene); (st as any).locArgs = __savedLocArgs; }
          }
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterVirginCondomPcAsk1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mc_inventory ?? 0)?.['normal_condoms'] + ((s as any).mc_inventory ?? 0)?.['normal_condoms'] > 0) {
    qspCall(s, 'willpower', 'sex', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Pull out a condom', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Pull out a condom', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['using_pc_condoms'] = 1;
    qspCall(st, 'stat', '');
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('Reaching over the side of the bed, you scrabble through your purse until you find what you\'re looking for: a condom.');
    // TODO-QSP: dynamic text: You hold it up between you and <<$npcdesc>>.
    scene.text(`You hold it up between you and ${((st as any).npcdesc ?? '')}.`);
    scene.text('"Let\'s use a condom, okay?"');
    if (((st as any).npc_condom_conscious ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: "Of course," <<$npcdesc>> says, immediately taking it from you and tearing open ...
      scene.text(`"Of course," ${((st as any).npcdesc ?? '')} says, immediately taking it from you and tearing open the package. "I'm not an idiot you know."`);
      qspCall(st, 'sex_ev_virgin', 'start_with_condom');
    } else {
      if (((st as any).npc_no_condoms ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
        scene.text('"Nah, fuck that rubber shit. I don\'t use it."');
        ((st as any).npc_no_condoms_know = (st as any).npc_no_condoms_know ?? {})[String((st as any).npcID ?? 0)] = 1;
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterVirginCondomAsk2(s, scene); (st as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterVirginNoCondomShock1(s, scene); (st as any).locArgs = __savedLocArgs; }
      } else {
        if (((st as any).sex_ev ?? 0)?.['condom_count'] <= 0  &&  ((st as any).sex_ev ?? 0)?.['using_pc_condoms'] !== 1) {
          scene.text('"Can\'t. I\'m all out."');
          { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterVirginCondomAsk2(s, scene); (st as any).locArgs = __savedLocArgs; }
        } else {
          if ((Math.floor(Math.random() * 2) + 1) === 2) {
            if (((st as any).sex_ev ?? 0)?.['using_pc_condoms'] === 1) {
              // TODO-QSP: dynamic text: <<$npcdesc>> nods and you sigh in relief as he takes it from you, tearing open t...
              scene.text(`${((st as any).npcdesc ?? '')} nods and you sigh in relief as he takes it from you, tearing open the package and clumsily rolling the little rubber onto his cock.`);
            } else {
              // TODO-QSP: dynamic text: <<$npcdesc>> nods and gets one out, tearing open the package and pulling out the...
              scene.text(`${((st as any).npcdesc ?? '')} nods and gets one out, tearing open the package and pulling out the little rubber sleeve.`);
            }
            qspCall(st, 'sex_ev_virgin', 'start_with_condom');
          } else {
            scene.text('"Come on," he says. "You really want to use a condom for your first time?"');
            { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterVirginCondomAsk3(s, scene); (st as any).locArgs = __savedLocArgs; }
          }
        }
      }
    }
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterVirginCondomAsk2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mc_inventory ?? 0)?.['normal_condoms'] > 0  ||  (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0  &&  ((s as any).preziktype ?? 0) === 0)) {
    scene.actions([
      { label: 'Get one from your bag', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['using_pc_condoms'] = 1;
    qspCall(st, 'sex_ev_stats', 'pc_condom_stats');
    // TODO-QSP: $sex_ev['bed_room']
    if (((st as any).mc_inventory ?? 0)?.['normal_condoms'] > 1) {
      scene.text('"That\'s okay, I\'ve got some."');
    } else {
      if (((st as any).mc_inventory ?? 0)?.['normal_condoms'] === 1) {
        scene.text('"That\'s okay, I\'ve got one."');
      }
    }
    if (((st as any).LudaQW ?? 0)?.['free_condoms'] === 1) {
      // TODO-QSP: dynamic text: You reach into your bag and pull out one of the condoms your aunt gave you and h...
      scene.text(`You reach into your bag and pull out one of the condoms your aunt gave you and hand it to ${((st as any).npcdesc ?? '')}.`);
    } else {
      // TODO-QSP: dynamic text: You reach into your bag and pull out one of the condoms you bought and hand it t...
      scene.text(`You reach into your bag and pull out one of the condoms you bought and hand it to ${((st as any).npcdesc ?? '')}.`);
    }
    scene.text('He takes it and opens the packaging, rolling it onto his cock.');
    qspCall(st, 'sex_ev_virgin', 'start_with_condom');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Then we\'re not fucking', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['prostitution'] > 0) {
      // TODO-QSP: $sex_ev['bed_room']
      qspCall(st, 'sex_ev_virgin', 'no_condom_offer');
    } else {
      if (((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] === 1  ||  ((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
        // TODO-QSP: $sex_ev['bed_room']
        if (((st as any).npc_no_condoms ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
          scene.text('"Woah! What the fuck?!" you exclaim, snapping your legs closed and pulling back from him. "If you\'re not gonna use a condom, there\'s no way I\'m letting you fuck me!"');
        } else {
          if (((st as any).sex_ev ?? 0)?.['condom_count'] <= 0) {
            scene.text('"Woah!" you exclaim, snapping your legs closed and pulling back from him. "If you don\'t have a condom, then we can\'t do this."');
          }
        }
        scene.text('"Don\'t be such a bitch about it! Come on! Let\'s just do this! It\'ll feel really good, I promise."');
        qspCall(st, 'willpower', 'sex', 'resist', 'medium');
        if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Stand firm', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Stand firm', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['using_pc_condoms'] === 1) {
      // TODO-QSP: dynamic text: "Nuh uh. If there''s no condom, there''s no sex." <<$npcdesc>> pulls back with a...
      scene.text(`"Nuh uh. If there's no condom, there's no sex." ${((st as any).npcdesc ?? '')} pulls back with a sigh.`);
      scene.text('"Alright, fine. We\'ll use the damn condom."');
      scene.text('He begrudgingly takes it and starts rolling it onto his cock, though you can\'t help but feel some of the magic of the moment has been lost here.');
      qspCall(st, 'sex_ev_virgin', 'start_with_condom');
    } else {
      scene.text('"Nuh uh. If there\'s no condom, there\'s no sex." He pulls back with a sigh.');
      qspCall(st, 'sex_ev_virgin', 'change_mind');
    }
  } },
          ]);
        }
        scene.actions([
          { label: 'Let him pressure you', handler: (st: GameState) => {
    scene.text('Your conscience rails against you as he pushes you down onto the bed. You want to refuse him, you <i>want</i> to tell him no, but you don\'t want to fight him either. You don\'t want him to see you as a bitch, even if you know you\'re right.');
    scene.text('With an internal sigh of resignation and not a small amount of regret, you spread your legs, and moments later, he takes your virginity.');
    scene.text('<i>Without</i> a condom.');
    qspCall(st, 'sex_ev_virgin', 'miss_virg_start');
  } },
        ]);
      } else {
        scene.img('images/shared/sex/after/pillow_talk1.jpg');
        if (((st as any).npc_no_condoms ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
          scene.text('"Woah!" you exclaim, snapping your legs closed and pulling back from him. "If you\'re not gonna use a condom, there\'s no way I\'m letting you fuck me!"');
        } else {
          if (((st as any).sex_ev ?? 0)?.['using_pc_condoms'] === 1) {
            scene.text('"Woah!" you exclaim, snapping your legs closed and pulling back from him. "If we\'re not using condoms, there\'s no way I\'m letting you fuck me!"');
          } else {
            if (((st as any).sex_ev ?? 0)?.['condom_count'] <= 0) {
              scene.text('"Woah!" you exclaim, snapping your legs closed and pulling back from him. "If you don\'t have a condom, then we can\'t do this."');
            }
          }
        }
        // TODO-QSP: dynamic text: <<$npcdesc>> takes a deep breath and pulls back.
        scene.text(`${((st as any).npcdesc ?? '')} takes a deep breath and pulls back.`);
        scene.text('"Sorry," he smiles shyly at you. "I was thinking with my dick instead of my head. You\'re right, we shouldn\'t do this without protection. What should we do instead?"');
        qspCall(st, 'sex_ev_foreplay', 'foreplay_choose');
        scene.actions([
          { label: 'Change your mind', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('You blink in surprise.');
    scene.text('His reasonableness is somehow... unexpected? But that he was willing to accept what you wanted so easily makes you...');
    scene.text('Arousal throbs in your pussy. You can feel juices practically dripping from its lips. You <i>ache</i> to feel him inside you.');
    scene.text('"Okay," you whisper. "We can do it without a condom."');
    scene.text('"But I thought-"');
    scene.text('"You\'re too reasonable. Makes me want you more," you smile. "Enough to risk doing it without a condom."');
    scene.text('"I\'m not sure I understand," he smiles back. You shrug.');
    scene.text('"Me either."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterVirginCondom2(s, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Let him get into position', handler: (st: GameState) => {
    scene.img('images/shared/sex/foreplay/miss3.jpg');
    qspCall(st, 'sex_ev_virgin', 'start_without_condom');
  } },
    ]);
  } },
        ]);
      }
    }
  } },
    { label: 'Maybe it\'s okay?', handler: (st: GameState) => {
    scene.text('<i>Well... Maybe it\'s okay?</i> you rationalize. It\'s your first time. If he doesn\'t use condoms, maybe he knows better? You can always change your mind in the future. But it\'s just once. What could go wrong?');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_condom'] = 1;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterVirginCondom2(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterVirginCondomAsk3(s: GameState, scene: SceneBuilder): void {
  if (((s as any).birth_control ?? 0)?.['think_safe'] === 0) {
    scene.actions([
      { label: 'Hell yes I do (pregnancy)', handler: (st: GameState) => {
    scene.text('"Uhh, <i>hell yes</i> I do," you say with an obvious expression on your face. "I\'m not risking getting pregnant. <i>Especially</i> on my first time!"');
    scene.text('"That\'s what you\'re worried about? Come on, I\'ll pull out. I promise."');
    scene.actions([
      { label: 'No way!', handler: (st: GameState) => {
    scene.text('"No fucking way!" you say. "I\'m not just gonna trust you to pull out because you say you will! Even if you really mean it, anything could happen by accident. I\'m not taking any chances!"');
    if (((st as any).npc_no_condoms_know ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      scene.text('"Well if you want to use a condom, then you\'re gonna have to provide one," he huffs. "Cause I just told you: I don\'t use them."');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterVirginNpcDoesntCondom(s, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['pc_insist_condom'] = 1;
      scene.text('"Fine, fine," he grumbles, rolling his eyes. You fume for a little bit, feeling like he\'s totally ruined the moment while he rolls the rubber onto his cock. A little bit later, he\'s back in position between your legs. A moment after that, he takes your virginity.');
      qspCall(st, 'sex_ev_stats', 'npc_condom_stats');
      qspCall(st, 'sex_ev_virgin', 'miss_virg_start');
    }
  } },
      { label: 'Trust him', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['promise_no_creampie'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['npc_insist_no_condom'] = 1;
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"If you say so," you sigh. "But you <i>absolutely cannot</i> cum inside me, alright?"');
    scene.text('He just smiles back in response. You can\'t help but fume just a little bit, feeling like he\'s ruined the mood somewhat. But you don\'t have much time to think about that as moments later, he takes your virginity.');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['condom'] = 3;
    qspCall(st, 'sex_ev_virgin', 'miss_virg_start');
  } },
    ]);
  } },
    ]);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterVirginSafeDayNoCondoms(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Can\'t take chances', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Yes," you respond. "I can\'t take any chances. Please?"');
    if (((st as any).sex_ev ?? 0)?.['prostitution'] > 0) {
      qspCall(st, 'sex_ev_virgin', 'no_condom_offer');
      scene.actions([
        { label: 'Deny him', handler: (st: GameState) => {
    scene.img('images/shared/sex/misc/condom_put.jpg');
    scene.text('"No. We\'re not doing it without a condom."');
    // TODO-QSP: dynamic text: <<$npcdesc>> sighs. "Okay, fine."
    scene.text(`${((st as any).npcdesc ?? '')} sighs. "Okay, fine."`);
    scene.text('You sigh in relief, tearing open the packaging and clumsily rolling the rubber onto his cock.');
    qspCall(st, 'sex_ev_virgin', 'start_with_condom');
  } },
      ]);
    } else {
      scene.img('images/shared/sex/misc/condom_put.jpg');
      // TODO-QSP: dynamic text: <<$npcdesc>> sighs. "Okay, fine."
      scene.text(`${((st as any).npcdesc ?? '')} sighs. "Okay, fine."`);
      scene.text('You sigh in relief, tearing open the packaging and clumsily rolling the rubber onto his cock.');
      qspCall(st, 'sex_ev_virgin', 'start_with_condom');
    }
  } },
    { label: 'Well... (no condom)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['npc_insist_no_condom'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['condom_motive'] = 'exception';
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('Once again, the heady feeling of arousal becomes irresistible. You <i>ache</i> to feel him inside you and the thought of even a thin sleeve of rubber separating your cock from your pussy suddenly feels distasteful to you. It\'s your first time. You want to feel <i>everything.</i>');
    scene.text('"Okay," you smile. "Just this once."');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_condom'] = 1;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterVirginCondom2(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Hell yes I do (STD)', handler: (st: GameState) => {
    scene.text('"Uhh, <i>hell yes</i> I do," you say with a look of suspicion. "I\'m not about to have sex for the first time and immediately get an STD."');
    scene.text('"An STD? That\'s what you\'re afraid of? I\'m clean! Obviously!"');
    scene.actions([
      { label: 'I don\'t know that', handler: (st: GameState) => {
    if (((st as any).npc_no_condoms_know ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      scene.text('"How the fuck am I supposed to know that\'s true?" you exclaim. "You just told me you don\'t use condoms! That means you\'re a risk! Unless you have a negative test on you right now, which I\'m guessing you don\'t. I\'m not about to risk it just because you tell me to \'trust you.\'"');
      scene.text('"Well if you want to use a condom, then you\'re gonna have to provide one," he huffs. "Cause I just told you: I don\'t use them."');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterVirginNpcDoesntCondom(s, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      scene.text('"I don\'t know that!" you spit back. "Where\'s the proof? You have a negative test on you? I\'m not about to risk it just because you tell me to \'trust you.\'"');
      scene.text('"Fine, fine," he grumbles, rolling his eyes. You fume for a little bit, feeling like he\'s totally ruined the moment while he rolls the rubber onto his cock. A little bit later, he\'s back in position between your legs.');
      // TODO-QSP: dynamic text: A moment after that, <<$npcdesc>> takes your virginity.
      scene.text(`A moment after that, ${((st as any).npcdesc ?? '')} takes your virginity.`);
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['condom'] = 1;
      qspCall(st, 'sex_ev_virgin', 'miss_virg_start');
    }
  } },
      { label: 'Trust him', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['npc_insist_no_condom'] = 1;
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: dynamic text: "If you say so..." you say hesitantly. He just smiles back in response. You can'...
    scene.text(`"If you say so..." you say hesitantly. He just smiles back in response. You can't help but fume just a little bit, feeling like he's ruined the mood somewhat. But you don't have much time to think about that as moments later, ${((st as any).npcdesc ?? '')} takes your virginity.`);
    qspCall(st, 'sex_ev_virgin', 'miss_virg_start');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterVirginSafeDayNoCondoms(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['preg_risk'] === 'safe') {
    scene.actions([
      { label: 'It <i>is</i> a safe day...', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'safe';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_condom'] = 1;
    scene.text('"I guess... it\'s a safe day for me so..." you murmur nervously.');
    qspCall(st, 'sex_ev_virgin', 'start_without_condom');
  } },
    ]);
  } else {
    if (((s as any).stat ?? 0)?.['preg_risk'] === 'prob_safe') {
      scene.actions([
        { label: 'It\'s <i>probably</i> a safe day...', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = ((st as any).stat ?? 0)?.['preg_risk'];
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_condom'] = 1;
    scene.text('"I guess... it shouldn\'t be too risky for me today..." you murmur nervously.');
    qspCall(st, 'sex_ev_virgin', 'start_without_condom');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterVirginNoCondomShock1(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterVirginCondomAsk3(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'What the fuck?!', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"What the fuck?!" you exclaim, snapping your legs closed and pulling back from him. "You don\'t use condoms?"');
    scene.text('"No! Of course I don\'t!" he says. "Condoms fucking suck. Can\'t feel anything with one of those on. You want to use something that gets in the way of pleasure?"');
    qspCall(st, 'sex_ev_leave', 'no_condom_breakoff');
  } },
  ]);
  scene.build();
}

function enterVirginNpcDoesntCondom(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mc_inventory ?? 0)?.['normal_condoms'] > 0  ||  (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0  &&  ((s as any).preziktype ?? 0) === 0)) {
    qspCall(s, 'sex_ev_leave', 'no_condom_breakoff');
    scene.actions([
      { label: 'Use one of your condoms', handler: (st: GameState) => {
    scene.text('"Fine! Here!" You fish through your bag and pull one out handing it to him.');
    scene.text('While he rolls it on, you make sounds of annoyance, glaring at him.');
    scene.text('"Really making my first time special," you grumble to yourself.');
    scene.text('With the condom securely in place, he gets back in position between your legs.');
    // TODO-QSP: dynamic text: A moment after that, <<$npcdesc>> takes your virginity.
    scene.text(`A moment after that, ${((st as any).npcdesc ?? '')} takes your virginity.`);
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['condom'] = 1;
    qspCall(st, 'sex_ev_virgin', 'miss_virg_start');
  } },
    ]);
  } else {
    scene.text('"Well I don\'t have any either," you growl back.');
    // TODO-QSP: dynamic text: "Look who wants to fuck with a condom but doesn''t have any now," <<$npcdesc>> r...
    scene.text(`"Look who wants to fuck with a condom but doesn't have any now," ${((s as any).npcdesc ?? '')} rolls his eyes.`);
    scene.actions([
      { label: 'Embarrassed', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('You blush fiercely, turning away.');
    scene.text('<i>I\'m a virgin!</i> you think to yourself. <i>Why would I have condoms?</i>');
    scene.text('<i>You wanted to have sex,</i> another part of you thinks. <i>Why <b>don\'t</b> you have any condoms?</i>');
    qspCall(st, 'sex_ev_virgin', 'change_mind');
  } },
      { label: 'Angry', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"I\'m a fucking virgin!" you shout. "Why would I have condoms?!"');
    qspCall(st, 'sex_ev_after', 'quit2');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterVirginNoCondom(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask him not to use a condom', handler: (st: GameState) => {
    scene.actions([
      { label: 'Not for your first time', handler: (st: GameState) => {
    scene.text('"Wait," you say. "I don\'t want you to use a condom. Not for my first time."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterVirginCondom2(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterVirginCondom2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mc_inventory ?? 0)?.['morning_after_pill'] > 0) {
    scene.actions([
      { label: 'Have a morning after pill', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['ma_pill'] = 1;
    scene.text('"Besides," you look pointedly at your bag. "I have a morning after pill."');
    // TODO-QSP: dynamic text: <<$npcdesc>> raises an eyebrow back at you.
    scene.text(`${((st as any).npcdesc ?? '')} raises an eyebrow back at you.`);
    if (((st as any).hour ?? 0) >= 18) {
      scene.text('"Were you expecting to lose your virginity tonight?"');
    } else {
      scene.text('"Were you expecting to lose your virginity today?"');
    }
    if (((st as any).LudaQW ?? 0)?.['free_condoms'] === 1  &&  ((st as any).LudaQW ?? 0)?.['luda_ma_pill'] === 0) {
      if (((st as any).LudaQW ?? 0)?.['condom_give_day'] === ((st as any).daystart ?? 0)) {
        scene.text('"My aunt gave it to me today," you say. "I don\'t think she was expecting me to use it this soon though..."');
      } else {
        if (((st as any).LudaQW ?? 0)?.['condom_give_day'] >= ((st as any).daystart ?? 0) - 7) {
          scene.text('"My aunt gave it to me earlier this week," you say. "For emergencies..."');
        } else {
          if (((st as any).LudaQW ?? 0)?.['condom_give_day'] >= ((st as any).daystart ?? 0) - 30) {
            scene.text('"My aunt gave it to me a few weeks ago," you say. "Just in case..."');
          } else {
            scene.text('"My aunt gave it to me a long time ago," you say. "Just in case..."');
          }
        }
      }
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterVirginCondom3(s, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      scene.actions([
        { label: 'No', handler: (st: GameState) => {
    scene.text('"No," you blush fiercely. You\'re not sure if he believes you though...');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterVirginCondom3(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        { label: 'Maybe', handler: (st: GameState) => {
    scene.text('"Maybe..." you smile nervously.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterVirginCondom3(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        { label: 'Yes', handler: (st: GameState) => {
    scene.text('"I was really hoping I would..." you smile nervously.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterVirginCondom3(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        { label: 'Rape emergency', handler: (st: GameState) => {
    scene.text('"A girl has to be careful," you mumble nervously. "There are rapists out there you know..."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterVirginCondom3(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Buy a morning after pill', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['ma_pill_tomorrow'] = 1;
    scene.text('"Besides, something bad happens I can get a morning after pill," you promise. "I might even get one regardless, just to be safe."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterVirginCondom3(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  if (((s as any).stat ?? 0)?.['preg_risk'] === 'safe') {
    scene.actions([
      { label: 'It\'s a safe day', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'safe';
    scene.text('"It\'s a safe day," you add nervously. "I won\'t get pregnant."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterVirginCondom3(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'It\'s a safe day (come inside)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['virgin_creampie_request'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'safe';
    scene.text('"And it\'s a safe day," you add. "I won\'t get pregnant if you come inside me..."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterVirginCondom3(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'It\'s a safe day (come inside nervous)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['virgin_creampie_request'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'safe';
    scene.text('"And it\'s a safe day," you add hesitantly. "I won\'t get pregnant if you... if you want to come inside me..."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterVirginCondom3(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } else {
    if (((s as any).stat ?? 0)?.['preg_risk'] === 'prob_safe') {
      scene.actions([
        { label: 'It\'s probably safe today', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = ((st as any).stat ?? 0)?.['preg_risk'];
    scene.text('"It\'s a safe-ish day," you add nervously. "I probably won\'t get pregnant."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterVirginCondom3(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        { label: 'It\'s probably safe today (come inside)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['virgin_creampie_request'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = ((st as any).stat ?? 0)?.['preg_risk'];
    scene.text('"And it should be a safe-ish day," you add. "I probably won\'t get pregnant if you come inside me..."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterVirginCondom3(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        { label: 'It\'s probably safe today (come inside nervous)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['virgin_creampie_request'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = ((st as any).stat ?? 0)?.['preg_risk'];
    scene.text('"And it should be a safe-ish day," you add hesitantly. "I probably won\'t get pregnant if you... if you want to come inside me..."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterVirginCondom3(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    } else {
      if (((s as any).stat ?? 0)?.['preg_risk'] === 'danger') {
        scene.actions([
          { label: 'Don\'t come inside me (danger day)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'danger';
    scene.text('"Just... don\'t come inside me," you add nervously. "It\'s a danger day for me..."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterVirginCondom3(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterVirginCondom3(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['preg_risk'] === 'safe') {
    if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).sex_ev ?? 0)?.['virgin_creampie_request'] === 1) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['condom_bonus'] = ((s as any).sex_ev['condom_bonus'] ?? 0) - (15);
    } else {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['condom_bonus'] = ((s as any).sex_ev['condom_bonus'] ?? 0) - (30);
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['preg_risk'] === 'prob_safe') {
      if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).sex_ev ?? 0)?.['virgin_creampie_request'] === 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['condom_bonus'] = ((s as any).sex_ev['condom_bonus'] ?? 0) - (5);
      } else {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['condom_bonus'] = ((s as any).sex_ev['condom_bonus'] ?? 0) - (20);
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['preg_risk'] === 'danger') {
        if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).sex_ev ?? 0)?.['virgin_creampie_request'] === 1) {
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['condom_bonus'] = ((s as any).sex_ev['condom_bonus'] ?? 0) + (30);
        } else {
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['condom_bonus'] = ((s as any).sex_ev['condom_bonus'] ?? 0) - (10);
        }
      } else {
        if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['condom_bonus'] = ((s as any).sex_ev['condom_bonus'] ?? 0) + (30);
        }
      }
    }
  }
  if (((s as any).sex_ev ?? 0)?.['condom_count'] === 0  ||  ((s as any).sex_ev ?? 0)?.['no_condom'] === 1) {
    if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie'  &&  ((s as any).sex_ev ?? 0)?.['virgin_creampie_request'] === 1) {
      // TODO-QSP: dynamic text: <<$npcdesc>> gulps, apparently stunned with arousal at the thought of coming ins...
      scene.text(`${((s as any).npcdesc ?? '')} gulps, apparently stunned with arousal at the thought of coming inside you. It takes several seconds before he nods slowly.`);
    } else {
      // TODO-QSP: dynamic text: "Okay," <<$npcdesc>> nods.
      scene.text(`"Okay," ${((s as any).npcdesc ?? '')} nods.`);
    }
    qspCall(s, 'sex_ev_virgin', 'start_without_condom');
  } else {
    if ((Math.floor(Math.random() * (100 - ((s as any).npc_willpwr ?? 0)?.[String((s as any).npcID ?? 0)] + 1)) + (((s as any).npc_willpwr ?? 0)?.[String((s as any).npcID ?? 0)])) + ((s as any).sex_ev ?? 0)?.['condom_bonus'] < ((s as any).pcs_persuas ?? 0) + ((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)]  &&  ((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] !== 2) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['no_condom'] = 1;
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['condom'] = 0;
      if (((s as any).sex_ev ?? 0)?.['virgin_creampie_request'] === 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['creampie_allowance'] = 1;
      }
      // TODO-QSP: dynamic text: <<$npcdesc>> stops, looking back at you for a moment before smiling.
      scene.text(`${((s as any).npcdesc ?? '')} stops, looking back at you for a moment before smiling.`);
      scene.text('"Okay," he says and puts the rubber back on the nightstand.');
      qspCall(s, 'sex_ev_virgin', 'start_without_condom');
    } else {
      // TODO-QSP: dynamic text: "We shouldn''t risk it," <<$npcdesc>> says, shaking his head and opening the con...
      scene.text(`"We shouldn't risk it," ${((s as any).npcdesc ?? '')} says, shaking his head and opening the condom anyways. "Especially not for your first time."`);
      scene.actions([
        { label: 'Wait for him', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['condom'] = 1;
    qspCall(st, 'sex_ev_stats', 'npc_condom_stats');
    scene.img('images/shared/sex/misc/wait.mp4');
    scene.text('He tears open the packaging and begins rolling the rubber sleeve onto his cock. You watch him, anxious with anticipation, thinking about what\'s about to happen next.');
    qspCall(st, 'sex_ev_virgin', 'start_with_condom');
  } },
      ]);
    }
  }
  // TODO-QSP: end
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
    case 'pc_dangerous_day':
      enterPcDangerousDay(s, scene);
      break;
    case 'pc_dangerous_day_cant_cum_inside':
      enterPcDangerousDayCantCumInside(s, scene);
      break;
    case 'pc_dangerous_day_pullout':
      enterPcDangerousDayPullout(s, scene);
      break;
    case 'pc_dangerous_day_condom_insist':
      enterPcDangerousDayCondomInsist(s, scene);
      break;
    case 'pc_dangerous_day_condom_insist2':
      enterPcDangerousDayCondomInsist2(s, scene);
      break;
    case 'pc_dangerous_day2':
      enterPcDangerousDay2(s, scene);
      break;
    case 'pc_safe_day':
      enterPcSafeDay(s, scene);
      break;
    case 'already_creampie1':
      enterAlreadyCreampie1(s, scene);
      break;
    case 'already_creampie2':
      enterAlreadyCreampie2(s, scene);
      break;
    case 'started_bc1':
      enterStartedBc1(s, scene);
      break;
    case 'no_more_free_creampies1':
      enterNoMoreFreeCreampies1(s, scene);
      break;
    case 'no_more_free_creampies2':
      enterNoMoreFreeCreampies2(s, scene);
      break;
    case 'no_more_free_creampies3':
      enterNoMoreFreeCreampies3(s, scene);
      break;
    case 'no_more_free_creampies3.bc':
      enterNoMoreFreeCreampies3_bc(s, scene);
      break;
    case 'no_more_free_creampies4':
      enterNoMoreFreeCreampies4(s, scene);
      break;
    case 'no_more_free_creampies5':
      enterNoMoreFreeCreampies5(s, scene);
      break;
    case 'trying_for_baby':
      enterTryingForBaby(s, scene);
      break;
    case 'virgin_condom1':
      enterVirginCondom1(s, scene);
      break;
    case 'virgin_condom_ask1':
      enterVirginCondomAsk1(s, scene);
      break;
    case 'virgin_condom_pc_ask1':
      enterVirginCondomPcAsk1(s, scene);
      break;
    case 'virgin_condom_ask2':
      enterVirginCondomAsk2(s, scene);
      break;
    case 'virgin_condom_ask3':
      enterVirginCondomAsk3(s, scene);
      break;
    case 'virgin_safe_day_no_condoms':
      enterVirginSafeDayNoCondoms(s, scene);
      break;
    case 'virgin_no_condom_shock1':
      enterVirginNoCondomShock1(s, scene);
      break;
    case 'virgin_npc_doesnt_condom':
      enterVirginNpcDoesntCondom(s, scene);
      break;
    case 'virgin_no_condom':
      enterVirginNoCondom(s, scene);
      break;
    case 'virgin_condom2':
      enterVirginCondom2(s, scene);
      break;
    case 'virgin_condom3':
      enterVirginCondom3(s, scene);
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
